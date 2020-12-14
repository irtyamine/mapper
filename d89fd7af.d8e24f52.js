(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{160:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),s=(r(0),r(182)),o={id:"getters",title:"Handle Getters",sidebar_label:"Getters"},i={unversionedId:"usages/features/getters",id:"usages/features/getters",isDocsHomePage:!1,title:"Handle Getters",description:"@nartc/automapper can also map public getters.",source:"@site/docs/usages/features/getters.md",slug:"/usages/features/getters",permalink:"/docs/next/usages/features/getters",editUrl:"https://github.com/nartc/mapper/edit/master/automapper-docusaurus/docs/usages/features/getters.md",version:"current",sidebar_label:"Getters",sidebar:"docs",previous:{title:"Handle Empty Value",permalink:"/docs/next/usages/features/empty-value"},next:{title:"Handle DateTime objects",permalink:"/docs/next/usages/features/date-time"}},c=[],p={rightToc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," can also map ",Object(s.b)("strong",{parentName:"p"},"public getters"),"."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"class User {\n  private _firstName: string;\n  @AutoMap()\n  public get firstName() {\n    return this._firstName;\n  }\n\n  public set firstName(value: string) {\n    this._firstName = value;\n  }\n\n  private _lastName: string;\n  @AutoMap()\n  public get lastName() {\n    return this._lastName;\n  }\n\n  public set lastName(value: string) {\n    this._lastName = value;\n  }\n}\n\nclass UserVm {\n  @AutoMap()\n  firstName: string;\n  @AutoMap()\n  lastName: string;\n}\n")),Object(s.b)("p",null,"To iterate once more, ",Object(s.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," works based a lot on ",Object(s.b)("strong",{parentName:"p"},"conventions"),". This core-concept applies greatly to the case of ",Object(s.b)("strong",{parentName:"p"},"public getters")," so\ntry to keep your ",Object(s.b)("inlineCode",{parentName:"p"},"private fields")," and ",Object(s.b)("inlineCode",{parentName:"p"},"public getters")," somewhat aligned with each other. Eg: ",Object(s.b)("inlineCode",{parentName:"p"},"private _firstName")," and ",Object(s.b)("inlineCode",{parentName:"p"},"public get firstName()")))}u.isMDXComponent=!0},182:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(r),b=n,f=l["".concat(o,".").concat(b)]||l[b]||m[b]||s;return r?a.a.createElement(f,i(i({ref:t},p),{},{components:r})):a.a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<s;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);