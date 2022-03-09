"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[9869],{54852:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(49231);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(n),p=o,f=c["".concat(u,".").concat(p)]||c[p]||m[p]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},29261:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return s},default:function(){return c}});var r=n(26260),o=n(23157),i=(n(49231),n(54852)),a=["components"],l={sidebar_position:1,title:"\u4f7f\u7528 Model"},u=void 0,d={unversionedId:"guides/features/runtime/model/use-model",id:"guides/features/runtime/model/use-model",isDocsHomePage:!1,title:"\u4f7f\u7528 Model",description:"\u672c\u6587\u57fa\u4e8e Model \u4ecb\u7ecd \u4e00\u8282\u521b\u5efa\u7684 countModel \u4e3a\u4f8b\uff0c\u4ecb\u7ecd Model \u7684\u4f7f\u7528\u3002",source:"@site/docs/guides/features/runtime/model/use-model.md",sourceDirName:"guides/features/runtime/model",slug:"/guides/features/runtime/model/use-model",permalink:"/en/docs/guides/features/runtime/model/use-model",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u4f7f\u7528 Model"},sidebar:"guidesSidebar",previous:{title:"Model \u4ecb\u7ecd",permalink:"/en/docs/guides/features/runtime/model/model-introduction"},next:{title:"\u5c40\u90e8\u72b6\u6001\u7ba1\u7406",permalink:"/en/docs/guides/features/runtime/model/local-model"}},s=[{value:"\u4f7f\u7528\u5168\u5c40\u72b6\u6001",id:"\u4f7f\u7528\u5168\u5c40\u72b6\u6001",children:[]}],m={toc:s};function c(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u672c\u6587\u57fa\u4e8e ",(0,i.kt)("a",{parentName:"p",href:"./model-introduction"},"Model \u4ecb\u7ecd")," \u4e00\u8282\u521b\u5efa\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"countModel")," \u4e3a\u4f8b\uff0c\u4ecb\u7ecd Model \u7684\u4f7f\u7528\u3002"),(0,i.kt)("h2",{id:"\u4f7f\u7528\u5168\u5c40\u72b6\u6001"},"\u4f7f\u7528\u5168\u5c40\u72b6\u6001"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { useModel } from "@modern-js/runtime/model";\nimport countModel from "./models/count";\n\nfunction Counter() {\n  const [state, actions] = useModel(countModel);\n\n  return (\n    <div>\n      <div>counter: {state.value}</div>\n      <button onClick={() => actions.add()}>add</button>\n    </div>\n  );\n}\n\nexport default function App() {\n  return <Counter />;\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"Counter")," \u7ec4\u4ef6\u4e2d\uff0c\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"li"},"useModel")," API \u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"countModel"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"useModel")," \u8fd4\u56de Model \u5bf9\u8c61\u4e2d\u4fdd\u5b58\u7684\u5168\u5c40\u72b6\u6001\uff1a ",(0,i.kt)("inlineCode",{parentName:"li"},"state")," \u548c \u53d8\u66f4\u72b6\u6001\u7684\u64cd\u4f5c\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"actions"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5f53\u70b9\u51fb ",(0,i.kt)("inlineCode",{parentName:"li"},"add")," \u6309\u94ae\u65f6\uff0c\u8ba1\u6570\u5668\u81ea\u589e\u4e00\uff0c\u5e76\u91cd\u65b0\u6e32\u67d3 ",(0,i.kt)("inlineCode",{parentName:"li"},"Counter")," \u7ec4\u4ef6\uff0c\u66f4\u65b0\u89c6\u56fe\u3002")),(0,i.kt)("p",null,"\u6700\u7ec8\u6548\u679c\u5982\u4e0b\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/eueh7vhojuh/modern/simple-count-model.gif",alt:"countModel"})),(0,i.kt)("p",null,"\u672c\u8282\u5b8c\u6574\u7684\u793a\u4f8b\u4ee3\u7801\u53ef\u4ee5\u5728",(0,i.kt)("a",{parentName:"p",href:"https://github.com/modern-js-dev/modern-js-examples/tree/main/series/tutorials/runtime-api/model/counter-model"},"\u8fd9\u91cc"),"\u67e5\u770b\u3002"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u76f8\u5173 API \u7684\u66f4\u591a\u4ecb\u7ecd\uff0c\u8bf7\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/runtime/model/model"},"\u8fd9\u91cc"),")\u3002"))))}c.isMDXComponent=!0}}]);