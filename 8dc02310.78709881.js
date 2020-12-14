(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{121:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return l}));var r=t(2),a=t(6),o=(t(0),t(182)),i={id:"resolver",title:"Value Resolver",sidebar_label:"Value Resolver"},c={unversionedId:"usages/mapping-configuration/for-member/resolver",id:"version-7.0.0/usages/mapping-configuration/for-member/resolver",isDocsHomePage:!1,title:"Value Resolver",description:"Very similar concept to Value Converter. However, a Resolver has access to the whole source object as well as the current destination being mapped. You can use a Resolver to handle more complex business mapping logic for a specific destination that you don't want to pollute the construction of a Mapping.",source:"@site/versioned_docs/version-7.0.0/usages/mapping-configuration/for-member/resolver.md",slug:"/usages/mapping-configuration/for-member/resolver",permalink:"/docs/usages/mapping-configuration/for-member/resolver",editUrl:"https://github.com/nartc/mapper/edit/master/automapper-docusaurus/versioned_docs/version-7.0.0/usages/mapping-configuration/for-member/resolver.md",version:"7.0.0",sidebar_label:"Value Resolver",sidebar:"version-7.0.0/docs",previous:{title:"Value Converter",permalink:"/docs/usages/mapping-configuration/for-member/converter"},next:{title:"Null Substitution",permalink:"/docs/usages/mapping-configuration/for-member/null-substitution"}},p=[],s={rightToc:p};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Very similar concept to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"converter"}),"Value Converter"),". However, a ",Object(o.b)("inlineCode",{parentName:"p"},"Resolver")," has access to the whole ",Object(o.b)("inlineCode",{parentName:"p"},"source")," object as well as the current ",Object(o.b)("inlineCode",{parentName:"p"},"destination")," being mapped. You can use a ",Object(o.b)("inlineCode",{parentName:"p"},"Resolver")," to handle more complex business mapping logic for a specific ",Object(o.b)("inlineCode",{parentName:"p"},"destination")," that you don't want to pollute the construction of a ",Object(o.b)("inlineCode",{parentName:"p"},"Mapping"),"."),Object(o.b)("p",null,"A ",Object(o.b)("inlineCode",{parentName:"p"},"ValueResolver")," is a class that implements ",Object(o.b)("inlineCode",{parentName:"p"},"Resolver")," interface. ",Object(o.b)("inlineCode",{parentName:"p"},"Resolver")," takes in 3 ",Object(o.b)("inlineCode",{parentName:"p"},"type arguments"),": ",Object(o.b)("inlineCode",{parentName:"p"},"TSource"),", ",Object(o.b)("inlineCode",{parentName:"p"},"TDestination")," and the ",Object(o.b)("inlineCode",{parentName:"p"},"type")," of ",Object(o.b)("inlineCode",{parentName:"p"},"destination.<some_member>")," that you want to apply this ",Object(o.b)("inlineCode",{parentName:"p"},"Resolver")," on.\nImplementing a ",Object(o.b)("inlineCode",{parentName:"p"},"Resolver")," requires a ",Object(o.b)("inlineCode",{parentName:"p"},"resolve()")," function."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"interface Resolver<TSource, TDestination, TDestinationMember> {\n  resolve(source: TSource, destination: TDestination): TDestinationMember;\n}\n")),Object(o.b)("p",null,"Let's take a look at the following ",Object(o.b)("inlineCode",{parentName:"p"},"TaxResolver")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"class TaxResolver implements Resolver<Item, ItemVm, number> {\n  resolve(source: Item, destination: ItemVm): number {\n    if (source.type === 'A') {\n      return item.price * 0.5;\n    }\n\n    return item.price * 0.9;\n  }\n}\n")),Object(o.b)("p",null,"Once you have the ",Object(o.b)("inlineCode",{parentName:"p"},"ValueResolver")," ready, you can pass an instance of the ",Object(o.b)("inlineCode",{parentName:"p"},"ValueResolver")," to ",Object(o.b)("inlineCode",{parentName:"p"},"mapFrom()")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"Mapper.createMap(Item, ItemVm).forMember(\n  dest => dest.tax,\n  mapFrom(new TaxResolver())\n);\n")),Object(o.b)("p",null,"Using a ",Object(o.b)("inlineCode",{parentName:"p"},"ValueResolver")," will set the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/guides/basic-concept#mappingtransformation"}),"TransformationType")," to ",Object(o.b)("inlineCode",{parentName:"p"},"MapFrom")))}l.isMDXComponent=!0},182:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),l=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(t),b=r,d=u["".concat(i,".").concat(b)]||u[b]||m[b]||o;return t?a.a.createElement(d,c(c({ref:n},s),{},{components:t})):a.a.createElement(d,c({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);