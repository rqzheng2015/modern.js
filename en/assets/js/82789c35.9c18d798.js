"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[4802],{54852:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(49231);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),l=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(t),m=a,k=c["".concat(d,".").concat(m)]||c[m]||u[m]||i;return t?r.createElement(k,o(o({ref:n},p),{},{components:t})):r.createElement(k,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=c;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},12431:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var r=t(26260),a=t(23157),i=(t(49231),t(54852)),o=["components"],s={sidebar_position:3},d="hook",l={unversionedId:"apis/runtime/web-server/hook",id:"apis/runtime/web-server/hook",isDocsHomePage:!1,title:"hook",description:"\u7528\u4e8e\u7ed9 Web Server \u6dfb\u52a0\u4e2d\u95f4\u4ef6\uff0c\u53d1\u9001\u7ed9 Web Server \u7684\u8bf7\u6c42\u4f1a\u7ecf\u8fc7\u8fd9\u4e9b\u4e2d\u95f4\u4ef6\u7684\u5904\u7406\u3002",source:"@site/docs/apis/runtime/web-server/hook.md",sourceDirName:"apis/runtime/web-server",slug:"/apis/runtime/web-server/hook",permalink:"/en/docs/apis/runtime/web-server/hook",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"apisSidebar",previous:{title:"act",permalink:"/en/docs/apis/runtime/testing/act"},next:{title:"CSS-In-JS API",permalink:"/en/docs/apis/runtime/utility/css-in-js"}},p=[{value:"API",id:"api",children:[{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]}]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"Express",id:"express",children:[]},{value:"Nest",id:"nest",children:[]},{value:"Koa",id:"koa",children:[]},{value:"egg",id:"egg",children:[]}]}],u={toc:p};function c(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"hook"},"hook"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u7528\u4e8e\u7ed9 Web Server \u6dfb\u52a0\u4e2d\u95f4\u4ef6\uff0c\u53d1\u9001\u7ed9 Web Server \u7684\u8bf7\u6c42\u4f1a\u7ecf\u8fc7\u8fd9\u4e9b\u4e2d\u95f4\u4ef6\u7684\u5904\u7406\u3002"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { hook } from '@modern-js/runtime/server';\n")))),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"hook(options) => void")),(0,i.kt)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"options: ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),"\uff0cModern.js \u63d0\u4f9b\u7684\u4e00\u7cfb\u5217\u94a9\u5b50\u3002",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"[addMiddleware]",": ",(0,i.kt)("inlineCode",{parentName:"li"},"string | function"),"\uff0c\u6dfb\u52a0\u4e2d\u95f4\u4ef6\u7684\u94a9\u5b50\u3002")))),(0,i.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("p",null,"\u4f7f\u7528\u4e0d\u540c\u7684\u6846\u67b6\uff0c\u5e94\u6dfb\u52a0\u4e0d\u540c\u6846\u67b6\u7684\u4e2d\u95f4\u4ef6\uff1b\u76ee\u524d\u652f\u6301 express, nest, koa, egg \u7b49\u6846\u67b6\u3002"),(0,i.kt)("h3",{id:"express"},"Express"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=server/index.ts",title:"server/index.ts"},"import { hook } from '@modern-js/runtime/server';\n\nexport default hook(({ addMiddleware }) => {\n  addMiddleware(async (req, res, next) => {\n    req.query.id = 'express';\n    await next();\n  });\n});\n")),(0,i.kt)("h3",{id:"nest"},"Nest"),(0,i.kt)("h4",{id:"\u6dfb\u52a0\u4e2d\u95f4\u4ef6"},"\u6dfb\u52a0\u4e2d\u95f4\u4ef6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=server/index.ts",title:"server/index.ts"},"import { hook } from '@modern-js/runtime/server';\n\nexport default hook(({ addMiddleware }) => {\n  addMiddleware(async (req, res, next) => {\n    req.query.id = 'express';\n    await next();\n  });\n});\n")),(0,i.kt)("h4",{id:"\u6dfb\u52a0-module"},"\u6dfb\u52a0 Module"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=server/index.ts",title:"server/index.ts"},"import { hook } from '@modern-js/runtime/server';\nimport {\n  Injectable,\n  MiddlewareConsumer,\n  Module,\n  NestMiddleware,\n} from '@nestjs/common';\n\n@Injectable()\nexport class LoggerMiddleware implements NestMiddleware {\n  async use(req: any, res: any, next: any) {\n      console.info(`access url: ${req.url}`);\n      next();\n  }\n}\n\n@Module()\nexport class AppModule {\n  configure(consumer: MiddlewareConsumer) {\n    consumer.apply(LoggerMiddleware).forRoutes('*');\n  }\n}\n\nexport default hook(({ addMiddleware }) => {\n  addMiddleware(AppModule);\n});\n")),(0,i.kt)("h3",{id:"koa"},"Koa"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=server/index.ts",title:"server/index.ts"},"export default hook(({ addMiddleware }) => {\n  addMiddleware(async (ctx, next) => {\n    ctx.req.query.id = 'koa';\n    await next();\n  });\n});\n")),(0,i.kt)("h3",{id:"egg"},"egg"),(0,i.kt)("h4",{id:"\u6dfb\u52a0\u4e2d\u95f4\u4ef6-1"},"\u6dfb\u52a0\u4e2d\u95f4\u4ef6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=server/index.ts",title:"server/index.ts"},"export default hook(({ addMiddleware }) => {\n  addMiddleware(() => async (ctx, next) => {\n    ctx.req.query.id = 'egg';\n    await next();\n  });\n});\n")),(0,i.kt)("h4",{id:"\u7ed9\u4e2d\u95f4\u4ef6\u6ce8\u5165\u53c2\u6570"},"\u7ed9\u4e2d\u95f4\u4ef6\u6ce8\u5165\u53c2\u6570"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=server/index.ts",title:"server/index.ts"},"export default hook(({ addMiddleware }) => {\n  addMiddleware([\n    'eggMiddleware',        // \u8fd9\u91cc\u4e3a\u7b2c\u4e09\u65b9 node_module \u5305\u540d\n    {\n      key: 'value',\n    },\n  ])\n});\n")))}c.isMDXComponent=!0}}]);