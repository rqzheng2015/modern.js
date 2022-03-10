"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[6365],{54852:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(49231);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),f=a,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||i;return t?r.createElement(m,o(o({ref:n},c),{},{components:t})):r.createElement(m,o({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},61611:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=t(26260),a=t(23157),i=(t(49231),t(54852)),o=["components"],l={sidebar_position:6},p="updateJSONFile",u={unversionedId:"apis/generator/plugin/file/updateJSONFile",id:"apis/generator/plugin/file/updateJSONFile",isDocsHomePage:!1,title:"updateJSONFile",description:"\u66f4\u65b0 JSON \u6587\u4ef6\u5b57\u6bb5\u3002",source:"@site/docs/apis/generator/plugin/file/updateJSONFile.md",sourceDirName:"apis/generator/plugin/file",slug:"/apis/generator/plugin/file/updateJSONFile",permalink:"/docs/apis/generator/plugin/file/updateJSONFile",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"apisSidebar",previous:{title:"addManyFile",permalink:"/docs/apis/generator/plugin/file/addManyFile"},next:{title:"updateTextRawFile",permalink:"/docs/apis/generator/plugin/file/updateTextRawFile"}},c=[{value:"fileName",id:"filename",children:[]},{value:"updateInfo",id:"updateinfo",children:[]}],s={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"updatejsonfile"},"updateJSONFile"),(0,i.kt)("p",null,"\u66f4\u65b0 JSON \u6587\u4ef6\u5b57\u6bb5\u3002"),(0,i.kt)("p",null,"\u8be5\u65b9\u6cd5\u9002\u7528\u4e8e JSON \u6587\u4ef6\u7c7b\u578b\uff0c\u53ef\u6279\u91cf\u66f4\u65b0 JSON \u6587\u4ef6\u4e2d\u5b57\u6bb5\u503c\u3002"),(0,i.kt)("p",null,"\u8be5\u65b9\u6cd5\u53ef\u5728 onForged \u751f\u547d\u5468\u671f\u7684 api \u53c2\u6570\u4e0a\u83b7\u53d6\u3002"),(0,i.kt)("p",null,"\u5176\u7c7b\u578b\u5b9a\u4e49\u4e3a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export type ForgedAPI = {\n  updateJSONFile: (\n    fileName: string,\n    updateInfo: Record<string, unknown>,\n  ) => Promise<void>;\n  ...\n};\n")),(0,i.kt)("h2",{id:"filename"},"fileName"),(0,i.kt)("p",null,"JSON \u6587\u4ef6\u7684\u6587\u4ef6\u540d\u6216\u8005\u6587\u4ef6\u8def\u5f84\u3002"),(0,i.kt)("h2",{id:"updateinfo"},"updateInfo"),(0,i.kt)("p",null,"\u5b57\u6bb5\u66f4\u65b0\u4fe1\u606f\u3002\n\u8be5\u4fe1\u606f\u4f7f\u7528 Record \u5f62\u5f0f\u8868\u793a\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\u9700\u8981\u66f4\u65b0 name \u5b57\u6bb5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'api.updateJSONFile(file, {\n    name: "\u65b0\u540d\u79f0"\n})\n')),(0,i.kt)("p",null,"\u9700\u66f4\u65b0\u5d4c\u5957\u5b57\u6bb5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'api.updateJSONFile(file, {\n  "dependencies.name": "\u65b0\u540d\u79f0"\n})\n')),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u66f4\u65b0\u5d4c\u5957\u5b57\u6bb5\u65f6\u6ce8\u610f\u5b57\u6bb5\u540d\uff0c\u5982\u679c\u4e0d\u662f\u5168\u91cf\u66f4\u65b0\uff0c\u9700\u5c06\u5d4c\u5957\u7684 key \u4e5f\u5199\u5165\u5b57\u6bb5\u540d\u4e2d\u3002"))))}d.isMDXComponent=!0}}]);