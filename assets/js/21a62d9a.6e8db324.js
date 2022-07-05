"use strict";(self.webpackChunkreact_optics_docs=self.webpackChunkreact_optics_docs||[]).push([[9048],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(i,".").concat(m)]||d[m]||l[m]||a;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8868:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),s=["components"],c={title:".sort()",sidebar_position:15},i=".sort(compareFn): Optic",p={unversionedId:"API/methods/sort()",id:"API/methods/sort()",title:".sort()",description:"---",source:"@site/docs/API/methods/sort().md",sourceDirName:"API/methods",slug:"/API/methods/sort()",permalink:"/react-optics-docs/docs/API/methods/sort()",draft:!1,editUrl:"https://github.com/TSOptics/react-optics-docs/edit/master/docs/API/methods/sort().md",tags:[],version:"current",sidebarPosition:15,frontMatter:{title:".sort()",sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:".slice()",permalink:"/react-optics-docs/docs/API/methods/slice()"},next:{title:".getState()",permalink:"/react-optics-docs/docs/API/methods/getState()"}},u={},l=[{value:"Examples:",id:"examples",level:3}],d={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sortcomparefn-optic"},".sort(compareFn): Optic"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"Optic<A, mapped>.sort: (compareFn?: (a: A, b: A) => number) => Optic<A, mapped>;\n")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"This method returns a new mapped optic focused on the elements of the original mapped optic but sorted according to a comparison function.",(0,a.kt)("br",{parentName:"p"}),"\n","The comparison function works the same way as in ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"},"Array.sort"),": it is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order."),(0,a.kt)("h3",{id:"examples"},"Examples:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default comparison function")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const onL\xe4nder = createStore([\n    'Hamburg',\n    'Bayern',\n    'Sachsen',\n    'Brandenburg',\n    'Saarland'\n]);\n\nconst onSortedL\xe4nder = onL\xe4nder.map().sort();\n// onSortedL\xe4nder: Optic<string, mapped>\n\nconst [sortedL\xe4nder] = useOptic(onSortedL\xe4nder);\n// sortedL\xe4nder = ['Bayern', 'Brandenburg', 'Hamburg', 'Saarland', 'Sachsen']\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Custom comparison function")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const onNumbers = createStore([90, 76, 456, 2, 39, -15, 1, -65]);\n// onNumbers: Optic<number[]>\n\nconst onSortedNumbers = onNumbers.map().sort((a, b) => a - b);\n// onSortedNumbers: Optic<number, mapped>\n\nconst [sortedNumbers] = useOptic(onSortedNumbers);\n// sortedNumbers = [-65, -15, 1, 2, 39, 76, 90, 456]\n")))}m.isMDXComponent=!0}}]);