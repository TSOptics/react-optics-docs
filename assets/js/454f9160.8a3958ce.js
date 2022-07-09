"use strict";(self.webpackChunkreact_optics_docs=self.webpackChunkreact_optics_docs||[]).push([[3672],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||l[f]||a;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9012:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return l}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),s=["components"],i={title:".set()"},c=".set(Value, Root): NewRoot",u={unversionedId:"API/methods/set()",id:"API/methods/set()",title:".set()",description:"This method takes a value a of the focused type, a value s of the root type and it returns a new value of the root type where the focused value is replaced by a.",source:"@site/docs/API/methods/set().md",sourceDirName:"API/methods",slug:"/API/methods/set()",permalink:"/docs/API/methods/set()",draft:!1,editUrl:"https://github.com/TSOptics/react-optics-docs/edit/master/docs/API/methods/set().md",tags:[],version:"current",frontMatter:{title:".set()"},sidebar:"tutorialSidebar",previous:{title:".get()",permalink:"/docs/API/methods/get()"}},p={},l=[{value:"Example:",id:"example",level:3}],d={toc:l};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setvalue-root-newroot"},".set(Value, Root): NewRoot"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"Optic<A, _, S>.set: (a: A | ((prev: A) => A), s: S) => S;\n")),(0,a.kt)("p",null,"This method takes a value ",(0,a.kt)("inlineCode",{parentName:"p"},"a")," of the focused type, a value ",(0,a.kt)("inlineCode",{parentName:"p"},"s")," of the root type and it returns a new value of the root type where the focused value is replaced by ",(0,a.kt)("inlineCode",{parentName:"p"},"a"),".",(0,a.kt)("br",{parentName:"p"}),"\n","To update the focused value based on its previous state you can pass an updater function (",(0,a.kt)("inlineCode",{parentName:"p"},"(prev: A) => A"),") instead of the next value itself.",(0,a.kt)("br",{parentName:"p"}),"\n","Just like ",(0,a.kt)("a",{parentName:"p",href:"get()"},(0,a.kt)("inlineCode",{parentName:"a"},"get")),", this method is mostly useful for BaseOptics."),(0,a.kt)("h3",{id:"example"},"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type User = {\n    name: string;\n    age: number;\n    verified: boolean;\n};\nconst onName = optic<User>().focus('name');\n\nconst user: User = { name: 'L\xe9on', age: 23, verified: false };\n\nconst updatedUser = onName.set('Aristide', user);\n// updatedUser = { name: 'Aristide', age: 23, verified: false }\n")))}f.isMDXComponent=!0}}]);