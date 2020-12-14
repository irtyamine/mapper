(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),o=(n(0),n(182)),s={id:"flattening",title:"Flattening",sidebar_label:"Flattening"},p={unversionedId:"usages/features/flattening",id:"usages/features/flattening",isDocsHomePage:!1,title:"Flattening",description:"One particular use-case for an AutoMapper is to flatten complex objects into a simpler form. @nartc/automapper supports this feature at a basic level.",source:"@site/docs/usages/features/flattening.md",slug:"/usages/features/flattening",permalink:"/docs/next/usages/features/flattening",editUrl:"https://github.com/nartc/mapper/edit/master/automapper-docusaurus/docs/usages/features/flattening.md",version:"current",sidebar_label:"Flattening",sidebar:"docs",previous:{title:"Nested Model",permalink:"/docs/next/usages/features/nested-model"},next:{title:"Inheritance",permalink:"/docs/next/usages/features/inheritance"}},i=[],c={rightToc:i};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"One particular use-case for an ",Object(o.b)("inlineCode",{parentName:"p"},"AutoMapper")," is to ",Object(o.b)("strong",{parentName:"p"},"flatten")," complex objects into a simpler form. ",Object(o.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," supports this feature at a basic level."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"class Address {\n  @AutoMap()\n  street: string;\n  @AutoMap()\n  city: string;\n  @AutoMap()\n  state: string;\n}\n\nclass Company {\n  @AutoMap()\n  name: string;\n  @AutoMap()\n  description: string;\n  @AutoMap()\n  yearEstablished: number;\n  @AutoMap(() => Address)\n  address: Address;\n}\n\nclass CompanyVm {\n  @AutoMap()\n  name: string;\n  @AutoMap()\n  description: string;\n  @AutoMap()\n  addressStreet: string;\n}\n\nMapper.createMap(Company, CompanyVm);\n")),Object(o.b)("p",null,"Here, all ",Object(o.b)("inlineCode",{parentName:"p"},"CompanyVm.name"),", ",Object(o.b)("inlineCode",{parentName:"p"},"CompanyVm.description")," and ",Object(o.b)("inlineCode",{parentName:"p"},"CompanyVm.addressStreet")," will be ",Object(o.b)("strong",{parentName:"p"},"auto-configured"),".\nIf you notice, you'll see that ",Object(o.b)("inlineCode",{parentName:"p"},"CompanyVm.addressStreet")," conventionally matches the path ",Object(o.b)("inlineCode",{parentName:"p"},"Company.address.street")," and ",Object(o.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," can take advantage of that to ",Object(o.b)("strong",{parentName:"p"},"automap")," ",Object(o.b)("inlineCode",{parentName:"p"},"CompanyVm.addressStreet")," from ",Object(o.b)("inlineCode",{parentName:"p"},"Company.address.street"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const company = new Company();\ncompany.name = 'ACME';\ncompany.description = 'Consulting';\ncompany.yearEstablished = 2010;\ncompany.address = new Address();\ncompany.address.street = '123 Sesame St';\ncompany.address.city = 'foo';\ncompany.address.state = 'bar';\n\nconst vm = Mapper.map(company, CompanyVm);\n/**\n * CompanyVm { name: 'ACME', description: 'Consulting', addressStreet: '123 Sesame St' }\n */\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"If you run into issue with ",Object(o.b)("strong",{parentName:"p"},"Flattening"),", please check out how to customize the mapping configuration with ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/usages/mapping-configuration/for-member/basic"}),"ForMember"))))}u.isMDXComponent=!0},182:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=u(n),d=a,b=l["".concat(s,".").concat(d)]||l[d]||m[d]||o;return n?r.a.createElement(b,p(p({ref:t},c),{},{components:n})):r.a.createElement(b,p({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var c=2;c<o;c++)s[c]=n[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);