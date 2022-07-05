"use strict";(self.webpackChunkreact_optics_docs=self.webpackChunkreact_optics_docs||[]).push([[4851],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5172:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={title:".slice()",sidebar_position:14},c=".slice(start?, end?): Optic",l={unversionedId:"API/methods/slice()",id:"API/methods/slice()",title:".slice()",description:"---",source:"@site/docs/API/methods/slice().md",sourceDirName:"API/methods",slug:"/API/methods/slice()",permalink:"/docs/API/methods/slice()",draft:!1,editUrl:"https://github.com/TSOptics/react-optics-docs/edit/master/docs/API/methods/slice().md",tags:[],version:"current",sidebarPosition:14,frontMatter:{title:".slice()",sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:".filter()",permalink:"/docs/API/methods/filter()"},next:{title:".sort()",permalink:"/docs/API/methods/sort()"}},p={},u=[{value:"Example:",id:"example",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"slicestart-end-optic"},".slice(start?, end?): Optic"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"Optic<A, mapped>.slice: (start?: number, end?: number) => Optic<A, mapped>;\n")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Analogous to ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/slice"},"Array.slice"),", this method returns a mapped optic focused on a slice of the original mapped optic elements.",(0,a.kt)("br",{parentName:"p"}),"\n","If ",(0,a.kt)("inlineCode",{parentName:"p"},"start")," isn't specified the slice will begin at index 0, if ",(0,a.kt)("inlineCode",{parentName:"p"},"end")," isn't specified the slice won't stop until the end of the array."),(0,a.kt)("h3",{id:"example"},"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const onAegeanIslands = createStore([\n    'Crete',\n    'Lesbos',\n    'Mykonos',\n    'Santorini',\n    'Rhodos',\n    'Kalokairi'\n]);\n// onAegeanIslands: Optic<string[]>\n\nconst onRealAgeanIslands = onAegeanIslands.map().slice(0, 5);\n// onRealAgeanIslands: Optic<string, mapped>;\n\nconst [realAgeanIslands] = useOptic(onRealAgeanIslands);\n// realAgeanIslands = ['Crete', 'Lesbos', 'Mykonos', 'Santorini', 'Rhodos'];\n")))}m.isMDXComponent=!0}}]);