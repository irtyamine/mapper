(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{115:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(2),o=t(6),a=(t(0),t(182)),i={id:"pre-condition",title:"PreCondition",sidebar_label:"PreCondition"},p={unversionedId:"usages/mapping-configuration/pre-condition",id:"version-6.0.0/usages/mapping-configuration/pre-condition",isDocsHomePage:!1,title:"PreCondition",description:"PreCondition works in a similar manner as Condition. However, PreCondition is just a pre-check on some expression",source:"@site/versioned_docs/version-6.0.0/usages/mapping-configuration/pre-condition.md",slug:"/usages/mapping-configuration/pre-condition",permalink:"/docs/6.0.0/usages/mapping-configuration/pre-condition",editUrl:"https://github.com/nartc/mapper/edit/master/automapper-docusaurus/versioned_docs/version-6.0.0/usages/mapping-configuration/pre-condition.md",version:"6.0.0",sidebar_label:"PreCondition",sidebar:"version-6.0.0/docs",previous:{title:"ForPath",permalink:"/docs/6.0.0/usages/mapping-configuration/reverse-map/for-path"},next:{title:"MapDefer",permalink:"/docs/6.0.0/usages/mapping-configuration/map-defer"}},c=[],s={rightToc:c};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"PreCondition")," works in a similar manner as ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"for-member/condition"}),"Condition"),". However, ",Object(a.b)("inlineCode",{parentName:"p"},"PreCondition")," is just a pre-check on some expression\nto determine whether the following mapping operation should be able to proceed or not. ",Object(a.b)("inlineCode",{parentName:"p"},"PreCondition")," can be turned on by calling ",Object(a.b)("inlineCode",{parentName:"p"},"preCondition()")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"Mapper.createMap(User, UserVm).forMember(\n  dest => dest.foo,\n  preCondition(source => source.age >= 10),\n  mapFrom(source => source.bar)\n);\n")),Object(a.b)("p",null,"The above mapping operation will only be proceeded if ",Object(a.b)("inlineCode",{parentName:"p"},"source.age >= 10"),". If ",Object(a.b)("inlineCode",{parentName:"p"},"source.age < 10")," (or the expression is ",Object(a.b)("em",{parentName:"p"},"falsy"),"), then ",Object(a.b)("inlineCode",{parentName:"p"},"dest.foo")," will receive a ",Object(a.b)("inlineCode",{parentName:"p"},"null")," value."),Object(a.b)("p",null,"Same as ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/6.0.0/usages/mapping-configuration/for-member/condition"}),"Condition"),", ",Object(a.b)("inlineCode",{parentName:"p"},"preCondition()")," also takes in an optional second argument for ",Object(a.b)("inlineCode",{parentName:"p"},"defaultValue")," which will be used to map to ",Object(a.b)("inlineCode",{parentName:"p"},"destination.<some_member>")," instead of ",Object(a.b)("inlineCode",{parentName:"p"},"null"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"Mapper.createMap(User, UserVm).forMember(\n  dest => dest.foo,\n  preCondition(source => source.age >= 10, 'default value'),\n  mapFrom(source => source.bar)\n);\n")),Object(a.b)("p",null,"If ",Object(a.b)("inlineCode",{parentName:"p"},"source.age < 10"),", ",Object(a.b)("inlineCode",{parentName:"p"},"dest.foo")," will receive ",Object(a.b)("inlineCode",{parentName:"p"},"'default value'")," instead of ",Object(a.b)("inlineCode",{parentName:"p"},"null"),". Please take note that ",Object(a.b)("inlineCode",{parentName:"p"},"defaultValue")," respects the ",Object(a.b)("inlineCode",{parentName:"p"},"type")," of ",Object(a.b)("inlineCode",{parentName:"p"},"destination.<some_member>"),". In this case, ",Object(a.b)("inlineCode",{parentName:"p"},"dest.foo")," is a ",Object(a.b)("inlineCode",{parentName:"p"},"string")," so you can only pass in a ",Object(a.b)("inlineCode",{parentName:"p"},"string")," for ",Object(a.b)("inlineCode",{parentName:"p"},"defaultValue"),"."))}l.isMDXComponent=!0},182:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),l=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=l(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(t),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return t?o.a.createElement(m,p(p({ref:n},s),{},{components:t})):o.a.createElement(m,p({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<a;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);