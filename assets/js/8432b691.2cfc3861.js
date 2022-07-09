"use strict";(self.webpackChunkreact_optics_docs=self.webpackChunkreact_optics_docs||[]).push([[7528],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||l[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7177:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={title:".setState()",sidebar_position:17},s=".setState(newValue)",p={unversionedId:"API/methods/setState()",id:"API/methods/setState()",title:".setState()",description:"---",source:"@site/docs/API/methods/setState().md",sourceDirName:"API/methods",slug:"/API/methods/setState()",permalink:"/docs/API/methods/setState()",draft:!1,editUrl:"https://github.com/TSOptics/react-optics-docs/edit/master/docs/API/methods/setState().md",tags:[],version:"current",sidebarPosition:17,frontMatter:{title:".setState()",sidebar_position:17},sidebar:"tutorialSidebar",previous:{title:".getState()",permalink:"/docs/API/methods/getState()"},next:{title:".get()",permalink:"/docs/API/methods/get()"}},u={},l=[{value:"Example:",id:"example",level:3}],m={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setstatenewvalue"},".setState(newValue)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"Optic<A, _, S>.setState: (a: A | ((prev: A) => A)) => void;\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"This method allows you to update the value focused by the optic.",(0,o.kt)("br",{parentName:"p"}),"\n","It is equivalent to the setter function returned by ",(0,o.kt)("a",{parentName:"p",href:"../hooks/useOptic()"},(0,o.kt)("inlineCode",{parentName:"a"},"useOptic"))," but unlike ",(0,o.kt)("inlineCode",{parentName:"p"},"useOptic")," you can use it outside of React components and hooks."),(0,o.kt)("h3",{id:"example"},"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const onStates = createStore([\n    { name: 'virginia', capital: 'Richmond', inhabitants: 8_535_519 },\n    { name: 'Illinois', capital: 'Chicago', inhabitants: 12_812_508 }\n]);\n\nonStates.focus(1).focus('capital').setState('Springfield');\n\nonStates\n    .focus(0)\n    .focus('name')\n    .set((prev) => prevName.charAt(0).toUpperCase() + prevName.slice(1));\n\n// onStates.getState() = [\n//     { name: 'Virginia', capital: 'Richmond', inhabitants: 8_535_519 },\n//     { name: 'Illinois', capital: 'Springfield', inhabitants: 12_812_508 }\n// ];\n")))}d.isMDXComponent=!0}}]);