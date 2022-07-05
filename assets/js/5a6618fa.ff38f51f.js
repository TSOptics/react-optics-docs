"use strict";(self.webpackChunkreact_optics_docs=self.webpackChunkreact_optics_docs||[]).push([[4391],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||l[f]||c;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<c;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7324:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return l}});var r=n(7462),o=n(3366),c=(n(7294),n(3905)),a=["components"],i={sidebar_position:3,title:"useOpticReducer()"},s="useOpticReducer(optic, reducer): [value, dispatch]",u={unversionedId:"API/hooks/useOpticReducer()",id:"API/hooks/useOpticReducer()",title:"useOpticReducer()",description:"---",source:"@site/docs/API/hooks/useOpticReducer().md",sourceDirName:"API/hooks",slug:"/API/hooks/useOpticReducer()",permalink:"/docs/API/hooks/useOpticReducer()",draft:!1,editUrl:"https://github.com/TSOptics/react-optics-docs/edit/master/docs/API/hooks/useOpticReducer().md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"useOpticReducer()"},sidebar:"tutorialSidebar",previous:{title:"useOptic()",permalink:"/docs/API/hooks/useOptic()"},next:{title:"useKeyedOptics()",permalink:"/docs/API/hooks/useKeyedOptics()"}},p={},l=[{value:"Example:",id:"example",level:3}],d={toc:l};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"useopticreduceroptic-reducer-value-dispatch"},"useOpticReducer(optic, reducer): ","[value, dispatch]"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-tsx"},"function useOpticReducer<T, TOpticType, Action>(\n    onState: Optic<T, TOpticType>,\n    reducer: (state: T, action: Action, onState: Optic<T, total, T>) => T\n): [T, Dispatch<Action>];\n")),(0,c.kt)("hr",null),(0,c.kt)("p",null,"This hook allows you to manage the slice of store focused on by the optic with a reducer.\nAs arguments it takes an optic and a reducer function while it returns the focused value as well as a dispatch function."),(0,c.kt)("p",null,"It works pretty much just like React ",(0,c.kt)("inlineCode",{parentName:"p"},"useReducer"),", you use the dispatch function to send actions that the reducer will use to compute the next state.",(0,c.kt)("br",{parentName:"p"}),"\n","The only difference is that you can use a reducer that takes an optic as third argument. With it you can derive new optics to handle immutable updates inside of the reducer with the ",(0,c.kt)("a",{parentName:"p",href:"../methods/get()"},(0,c.kt)("inlineCode",{parentName:"a"},"get"))," and ",(0,c.kt)("a",{parentName:"p",href:"../methods/set()"},(0,c.kt)("inlineCode",{parentName:"a"},"set"))," methods."),(0,c.kt)("h3",{id:"example"},"Example:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createStore, useReducer } from 'react-optics';\n\nconst initialCounter = { value: 0, step: 1 };\nconst onCounter = createStore(initialCounter);\n\nconst reducer = (state, action, onState) => {\n    const onValue = onState.focus('value');\n    const onStep = onState.focus('step');\n    switch (action.type) {\n        case 'increment':\n            // equivalent to: return { ...state, value: state.value + state.step };\n            return onValue.set((prev) => prev + state.step, state);\n        case 'decrement':\n            return onValue.set((prev) => prev - state.step, state);\n        case 'changeStep':\n            return onStep.set(action.step, state);\n        case 'reset':\n            return initialCounter;\n    }\n};\n\nconst MyCounterComponent = () => {\n    const [counter, dispatch] = useOpticReducer(onCounter, reducer);\n\n    useEffect(() => {\n        dispatch({ type: 'increment' });\n        dispatch({ type: 'changeStep', step: 10 });\n        dispatch({ type: 'increment' });\n        dispatch({ type: 'changeStep', step: 3 });\n        dispatch({ type: 'decrement' });\n        // counter.value will be 8\n    }, [dispatch]);\n\n    // ...\n};\n")))}f.isMDXComponent=!0}}]);