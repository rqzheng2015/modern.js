"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[4125],{54852:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return f}});var t=r(49231);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function p(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?p(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},p=Object.keys(e);for(t=0;t<p.length;t++)r=p[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)r=p[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=t.createContext({}),c=function(e){var n=t.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(a.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,p=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),f=o,d=m["".concat(a,".").concat(f)]||m[f]||l[f]||p;return r?t.createElement(d,s(s({ref:n},u),{},{components:r})):t.createElement(d,s({ref:n},u))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var p=r.length,s=new Array(p);s[0]=m;var i={};for(var a in n)hasOwnProperty.call(n,a)&&(i[a]=n[a]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<p;c++)s[c]=r[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},50539:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return i},contentTitle:function(){return a},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var t=r(26260),o=r(23157),p=(r(49231),r(54852)),s=["components"],i={title:"src/App.[tj]sx, src/[entry]/App.[tj]sx",sidebar_position:1},a=void 0,c={unversionedId:"apis/hooks/mwa/src/app",id:"apis/hooks/mwa/src/app",isDocsHomePage:!1,title:"src/App.[tj]sx, src/[entry]/App.[tj]sx",description:"\u5e94\u7528\u9879\u76ee\u65e0\u8def\u7531\u6216\u8005\u4efb\u610f\u8def\u7531\u7684\u5165\u53e3\u6807\u8bc6\u3002",source:"@site/docs/apis/hooks/mwa/src/app.md",sourceDirName:"apis/hooks/mwa/src",slug:"/apis/hooks/mwa/src/app",permalink:"/en/docs/apis/hooks/mwa/src/app",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"src/App.[tj]sx, src/[entry]/App.[tj]sx",sidebar_position:1},sidebar:"apisSidebar",previous:{title:"\u6982\u89c8",permalink:"/en/docs/apis/hooks/overview"},next:{title:"src/pages/, src/[entry]/pages/",permalink:"/en/docs/apis/hooks/mwa/src/pages"}},u=[],l={toc:u};function m(e){var n=e.components,r=(0,o.Z)(e,s);return(0,p.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u5e94\u7528\u9879\u76ee\u65e0\u8def\u7531\u6216\u8005\u4efb\u610f\u8def\u7531\u7684\u5165\u53e3\u6807\u8bc6\u3002"),(0,p.kt)("p",null,"\u5f00\u53d1\u5355\u9875\u9762\u5e94\u7528\u7684\u573a\u666f\uff0c\u63a8\u8350 ",(0,p.kt)("inlineCode",{parentName:"p"},"src")," \u6587\u4ef6\u5939\u4e0b\u653e\u7f6e ",(0,p.kt)("inlineCode",{parentName:"p"},"App.[tj]sx")," \u5bfc\u51fa\u5e94\u7528\u6839\u7ec4\u4ef6\u5373\u53ef\uff0cModern.js \u4f1a\u81ea\u52a8\u751f\u6210\u771f\u6b63\u7684\u6784\u5efa\u6253\u5305\u7684\u5165\u53e3\u6587\u4ef6, \u5185\u5bb9\u5927\u81f4\u5982\u4e0b:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react';\nimport { createApp, bootstrap } from '@modern-js/runtime';\nimport App from '@_modern_js_src/App';\nimport { state } from '@modern-js/runtime/plugins';\nimport { immer, effects, autoActions, devtools } from '@modern-js/runtime/model';\n\nconst createStatePlugins = (config) => {\n  const plugins = [];\n  plugins.push(immer(config['immer']));\n  plugins.push(effects(config['effects']));\n  plugins.push(autoActions(config['autoActions']));\n  plugins.push(devtools(config['devtools']));\n  return plugins;\n}\nlet AppWrapper = null;\nfunction render() {\n  AppWrapper = createApp({\n    plugins: [\n     state({...{plugins: createStatePlugins(true)}, ...App?.config?.state}),\n    ]\n  })(App)\n  if (IS_BROWSER) {\n    bootstrap(AppWrapper, MOUNT_ID);\n  }\n  return AppWrapper\n}\nAppWrapper = render();\nexport default AppWrapper;;\n")),(0,p.kt)("p",null,"\u5f00\u53d1\u591a\u9875\u9762\u5e94\u7528\u7684\u573a\u666f\u7c7b\u4f3c\uff0c\u5728\u5165\u53e3\u76ee\u5f55\u4e0b\u63a8\u8350\u76f4\u63a5\u653e\u7f6e ",(0,p.kt)("inlineCode",{parentName:"p"},"App.[jt]sx"),", \u81ea\u52a8\u751f\u6210\u7684\u6784\u5efa\u6253\u5305\u5165\u53e3\u6587\u4ef6\u548c\u5355\u9875\u9762\u5e94\u7528\u7c7b\u4f3c\u3002"))}m.isMDXComponent=!0}}]);