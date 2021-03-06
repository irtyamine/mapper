---
id: circular-dependency
title: Circular Dependencies
sidebar_label: Circular Dependencies
---

### Problem

**Circular Dependency** occurs when you have two models that depend on each other. For example, `SourceA` depends on `SourceB` and `SourceB` also depends on `SourceA`.
When designing your data models, both Domain and DTO (or View Model), you will probably run into circular dependency.

```typescript
class SourceA {
  @AutoMap()
  id: number;
  @AutoMap(() => SourceB)
  sourceB: SourceB;
}

class SourceB {
  @AutoMap()
  id: number;
  @AutoMap(() => SourceA)
  sourceA: SourceA;
}
```

### TypeOrm Example

This is very common when you setup your Entities using `TypeOrm`. Suppose you have two Entities: Order and Person

```typescript
@Entity()
export class Order {
  @AutoMap()
  id: number;
  // ... shorten for brevity purpose
  @ManyToOne(() => Person, person => person.orders)
  @AutoMap(() => Person)
  person: Person;
}

@Entity()
export class Person {
  @AutoMap()
  id: number;
  // ... shorten for brevity purpose
  @OneToMany(() => Order, order => order.person)
  @AutoMap(() => Order)
  orders: Order[];
}
```

Here, you have introduced a **Circular Dependency** with Order and Person.

### Solution

In general, you should avoid introducing **Circular Dependency** as much as possible. However, there are cases that you must have **Circular Dependency**.
For those cases, `@nartc/automapper` has a concept of **depth** of nesting models.

```typescript
class SourceA {
  @AutoMap()
  id: number;
  @AutoMap(() => SourceB)
  sourceB: SourceB;
}

class SourceB {
  @AutoMap()
  id: number;
  @AutoMap(() => SourceA)
  sourceA: SourceA;
}
```

Let's assume the above models, this is how **depth** works:

- Depth of 0

```typescript
SourceA {
    sourceB: SourceB {}
}
```

- Depth of 1

```typescript
SourceA {
    sourceB: SourceB {
        sourceA: SourceA {
          sourceB: SourceB {}
        }
    }
}
```

- Depth of 2

```typescript
SourceA {
    sourceB: SourceB {
        sourceA: SourceA {
            sourceB: {
                sourceA: SourceA {
                  sourceB: SourceB {}
                }
            }
        }
    }
}
```

and so on. By default, `@nartc/automapper` will apply **depth of 0** to nested models. To specify **depth**, use `@AutoMap()` decorator 2nd argument:

```typescript
class SourceA {
  @AutoMap()
  id: number;
  @AutoMap(() => SourceB, 1)
  sourceB: SourceB;
}

class SourceB {
  @AutoMap()
  id: number;
  @AutoMap(() => SourceA, 1)
  sourceA: SourceA;
}
```

Please be advised that the bigger the **depth** is, the bigger your model is so you need to be very cautious when you start introducing **Circular Dependency**.

Another possible solution is to **NOT** decorate the circular-dependent member with `@AutoMap()` and configure the mapping for this member manually with `mapWith()`

```typescript
@Entity()
export class Order {
  @AutoMap()
  id: number;
  // ... shorten for brevity purpose
  @ManyToOne(() => Person, person => person.orders)
  person: Person;
}

@Entity()
export class Person {
  @AutoMap()
  id: number;
  // ... shorten for brevity purpose
  @OneToMany(() => Order, order => order.person)
  orders: Order[];
}

Mapper.createMap(SomeOrderDto, Order)
    .forMember(d => d.person, mapWith(Person, s => s.person, () => SomePersonDto);
Mapper.createMap(SomePersonDto, Person)
    .forMember(d => d.orders, mapWith(Order, s => s.orders, () => SomeOrderDto);
```
