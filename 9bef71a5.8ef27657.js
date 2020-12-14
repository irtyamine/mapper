(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{128:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return i})),n.d(r,"metadata",(function(){return p})),n.d(r,"rightToc",(function(){return c})),n.d(r,"default",(function(){return m}));var t=n(2),a=n(6),o=(n(0),n(182)),i={id:"map-from",title:"MapFrom",sidebar_label:"MapFrom"},p={unversionedId:"usages/mapping-configuration/for-member/map-from",id:"version-6.0.0/usages/mapping-configuration/for-member/map-from",isDocsHomePage:!1,title:"MapFrom",description:"Let's take a look at the following snippet",source:"@site/versioned_docs/version-6.0.0/usages/mapping-configuration/for-member/map-from.md",slug:"/usages/mapping-configuration/for-member/map-from",permalink:"/docs/6.0.0/usages/mapping-configuration/for-member/map-from",editUrl:"https://github.com/nartc/mapper/edit/master/automapper-docusaurus/versioned_docs/version-6.0.0/usages/mapping-configuration/for-member/map-from.md",version:"6.0.0",sidebar_label:"MapFrom",sidebar:"version-6.0.0/docs",previous:{title:"ForMember Basic",permalink:"/docs/6.0.0/usages/mapping-configuration/for-member/basic"},next:{title:"Condition",permalink:"/docs/6.0.0/usages/mapping-configuration/for-member/condition"}},c=[],s={rightToc:c};function m(e){var r=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},s,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Let's take a look at the following snippet"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-typescript"}),"Mapper.createMap(User, UserVm)\n  .forMember(\n    dest => dest.fullName,\n    mapFrom(src => src.firstName + ' ' + src.lastName)\n  )\n  .forMember(\n    dest => dest.isAdult,\n    mapFrom(src => src.age >= 18)\n  );\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"mapFrom()")," takes in a callback that receives the ",Object(o.b)("inlineCode",{parentName:"p"},"source")," and needs to return a value with a ",Object(o.b)("inlineCode",{parentName:"p"},"type")," that matches ",Object(o.b)("inlineCode",{parentName:"p"},"dest => dest.<some_member>"),".\n",Object(o.b)("strong",{parentName:"p"},"TypeScript")," will provide strong-typings for the consumers."),Object(o.b)("p",null,Object(o.b)("img",Object(t.a)({parentName:"p"},{src:"https://p42.f3.n0.cdn.getcloudapp.com/items/2NuBpGo7/Screen%20Recording%202020-03-20%20at%2003.08%20PM.gif?v=827421e292a75bf9fc33c511f4336abc",alt:"Type Inference"}))),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"mapFrom()")," will set the ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"/docs/6.0.0/guides/basic-concept#mappingtransformation"}),"TransformationType")," to ",Object(o.b)("inlineCode",{parentName:"p"},"MapFrom"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-typescript"}),"const user = new User();\nuser.firstName = 'Chau';\nuser.lastName = 'Tran';\nuser.age = 28;\nuser.bio = 'Developer';\n\nconst vm = Mapper.map(user, UserVm);\n/**\n * UserVm {\n *   firstName: 'Chau',\n *   lastName: 'Tran',\n *   fullName: 'Chau Tran',\n *   age: 28,\n *   isAdult: true,\n *   bio: 'Developer'\n * }\n */\n")))}m.isMDXComponent=!0},182:function(e,r,n){"use strict";n.d(r,"a",(function(){return u})),n.d(r,"b",(function(){return f}));var t=n(0),a=n.n(t);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),m=function(e){var r=a.a.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):p(p({},r),e)),n},u=function(e){var r=m(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=m(n),b=t,f=u["".concat(i,".").concat(b)]||u[b]||l[b]||o;return n?a.a.createElement(f,p(p({ref:r},s),{},{components:n})):a.a.createElement(f,p({ref:r},s))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,i=new Array(o);i[0]=b;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:t,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);