"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[520],{54852:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(49231);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},78300:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var n=r(26260),o=r(23157),i=(r(49231),r(54852)),a=["components"],s={title:"src/**/*.stories.[tj]sx",sidebar_position:7},c=void 0,p={unversionedId:"apis/hooks/mwa/src/stories",id:"apis/hooks/mwa/src/stories",isDocsHomePage:!1,title:"src/**/*.stories.[tj]sx",description:"\u5e94\u7528\u9879\u76ee Storybook \u8c03\u8bd5\u6587\u4ef6\u3002",source:"@site/docs/apis/hooks/mwa/src/stories.md",sourceDirName:"apis/hooks/mwa/src",slug:"/apis/hooks/mwa/src/stories",permalink:"/en/docs/apis/hooks/mwa/src/stories",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"src/**/*.stories.[tj]sx",sidebar_position:7},sidebar:"apisSidebar",previous:{title:"src/**/*.test.[tj]sx?",permalink:"/en/docs/apis/hooks/mwa/src/test"},next:{title:"api/**/*.[tj]s",permalink:"/en/docs/apis/hooks/mwa/api/functions/api"}},l=[],u={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5e94\u7528\u9879\u76ee Storybook \u8c03\u8bd5\u6587\u4ef6\u3002"),(0,i.kt)("p",null,"\u53ef\u4ee5\u5728\u9879\u76ee\u6e90\u7801\u76ee\u5f55(src)\u4e0b\u521b\u5efa ",(0,i.kt)("inlineCode",{parentName:"p"},"*.stories.[tj]sx")," \u683c\u5f0f\u7684\u6587\u4ef6\u4f5c\u4e3a Storybook \u7684\u8c03\u8bd5\u6587\u4ef6\u3002"),(0,i.kt)("p",null,"\u5728\u9879\u76ee\u4e0b\u6267\u884c dev story \u547d\u4ee4\uff0c\u652f\u6301\u4f7f\u7528\u8fd9\u4e9b\u6587\u4ef6\u5728 Storybook \u4e2d\u5bf9\u76f8\u5173\u5185\u5bb9\u8fdb\u884c\u8c03\u8bd5\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4f7f\u7528 Storybook \u9700\u8981\u63d0\u524d\u5728\u9879\u76ee\u4e0b\u6267\u884c new \u547d\u4ee4\u542f\u7528\u300cVisual Testing (Storybook)\u300d\u6a21\u5f0f\u3002"))))}m.isMDXComponent=!0}}]);