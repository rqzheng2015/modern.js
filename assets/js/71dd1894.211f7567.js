"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[4103],{54852:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},75762:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var r=n(26260),a=n(23157),i=(n(49231),n(54852)),o=["components"],c={title:"cleanup",sidebar_position:3},p=void 0,s={unversionedId:"apis/runtime/testing/cleanup",id:"apis/runtime/testing/cleanup",isDocsHomePage:!1,title:"cleanup",description:"\u7528\u4e8e\u5378\u8f7d\u6389\u5f53\u524d\u5df2\u6e32\u67d3\u7684\u6240\u6709\u7ec4\u4ef6\u3002",source:"@site/docs/apis/runtime/testing/cleanup.md",sourceDirName:"apis/runtime/testing",slug:"/apis/runtime/testing/cleanup",permalink:"/docs/apis/runtime/testing/cleanup",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"cleanup",sidebar_position:3},sidebar:"apisSidebar",previous:{title:"renderApp",permalink:"/docs/apis/runtime/testing/renderApp"},next:{title:"act",permalink:"/docs/apis/runtime/testing/act"}},l=[{value:"API",id:"api",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]}],m={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u7528\u4e8e\u5378\u8f7d\u6389\u5f53\u524d\u5df2\u6e32\u67d3\u7684\u6240\u6709\u7ec4\u4ef6\u3002"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { cleanup } from '@modern-js/runtime/testing';\n")))),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"cleanup() => void")),(0,i.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u8bf7\u6ce8\u610f\uff0c\u5982\u679c\u4f60\u4f7f\u7528\u7684\u6d4b\u8bd5\u6846\u67b6\u652f\u6301 afterEach\uff0c\u5e76\u4e14\u5b83\u88ab\u6ce8\u5165\u5230\u4f60\u7684\u6d4b\u8bd5\u73af\u5883\u4e2d\uff08\u5982mocha\u3001Jest\u548cJasmine\uff09\uff0c",(0,i.kt)("strong",{parentName:"p"},"\u4f1a\u9ed8\u8ba4\u5728 afterEach \u94a9\u5b50\u91cc\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"strong"},"cleanup")),"\u3002\u5426\u5219\uff0c\u4f60\u5c06\u9700\u8981\u5728\u6bcf\u6b21\u6d4b\u8bd5\u540e\u8fdb\u884c\u624b\u52a8\u6e05\u7406\u3002"))),(0,i.kt)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u4f7f\u7528",(0,i.kt)("a",{parentName:"p",href:"https://github.com/avajs/ava"},"ava"),"\u6d4b\u8bd5\u6846\u67b6\uff0c\u90a3\u4e48\u4f60\u9700\u8981\u50cf\u8fd9\u6837\u4f7f\u7528test.afterEach\u94a9\u5b50\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { cleanup, render } from '@modern-js/runtime/testing';\nimport test from 'ava'\n\ntest.afterEach(cleanup)\n\ntest('renders into document', () => {\n  render(<div />)\n  // ...\n})\n\n// ... more tests ...\n")))}u.isMDXComponent=!0}}]);