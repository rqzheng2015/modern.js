"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[9521],{54852:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},61144:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});var r=n(14380),a=n(8240),i=(n(49231),n(54852)),o=["components"],p={title:"\u5165\u53e3\u7684\u7528\u9014\u200b\u200b\u200b"},l=void 0,s={unversionedId:"guides/tutorials/c07-app-entry/7.1-intro",id:"guides/tutorials/c07-app-entry/7.1-intro",title:"\u5165\u53e3\u7684\u7528\u9014\u200b\u200b\u200b",description:"\u4e0a\u4e00\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u4ecb\u7ecd\u4e86\u5982\u4f55\u7f16\u5199 UI \u7ec4\u4ef6\u3002",source:"@site/docs/guides/tutorials/c07-app-entry/7.1-intro.md",sourceDirName:"guides/tutorials/c07-app-entry",slug:"/guides/tutorials/c07-app-entry/7.1-intro",permalink:"/docs/guides/tutorials/c07-app-entry/7.1-intro",tags:[],version:"current",frontMatter:{title:"\u5165\u53e3\u7684\u7528\u9014\u200b\u200b\u200b"},sidebar:"guidesSidebar",previous:{title:"\u4ece BFF \u83b7\u53d6\u6570\u636e",permalink:"/docs/guides/tutorials/c09-bff/9.3-fetch-bff"},next:{title:"\u7528 new \u547d\u4ee4\u521b\u5efa\u5165\u53e3\u200b\u200b\u200b",permalink:"/docs/guides/tutorials/c07-app-entry/7.2-add-entry-in-cli"}},c={},m=[],u={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u4e0a\u4e00\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u4ecb\u7ecd\u4e86\u5982\u4f55\u7f16\u5199 UI \u7ec4\u4ef6\u3002"),(0,i.kt)("p",null,"\u8fd9\u4e00\u7ae0\u8282\u4e2d\uff0c\u7ee7\u7eed\u6cbf\u7528\u4e4b\u524d\u7684\u4ee3\u7801\uff0c\u5230\u76ee\u524d\u4e3a\u6b62\uff0chello-modern \u7684\u76ee\u5f55\u7ed3\u6784\u662f\u8fd9\u6837\u7684\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},".\n\u251c\u2500\u2500 .vscode/\n\u251c\u2500\u2500 src/\n\u2502   \u251c\u2500\u2500 components/\n\u2502   \u2502   \u251c\u2500\u2500 Avatar/\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 index.stories.tsx\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 index.tsx\n\u2502   \u2502   \u2514\u2500\u2500 Item/\n\u2502   \u2502       \u251c\u2500\u2500 index.test.tsx\n\u2502   \u2502       \u2514\u2500\u2500 index.tsx\n\u2502   \u251c\u2500\u2500 styles/\n\u2502   \u2502   \u2514\u2500\u2500 utils.css\n\u2502   \u251c\u2500\u2500 .eslintrc.json\n\u2502   \u251c\u2500\u2500 App.css\n\u2502   \u251c\u2500\u2500 App.tsx\n\u2502   \u2514\u2500\u2500 modern-app-env.d.ts\n\u251c\u2500\u2500 .editorconfig\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 .npmrc\n\u251c\u2500\u2500 .nvmrc\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 pnpm-lock.yaml\n\u2514\u2500\u2500 tsconfig.json\n")),(0,i.kt)("p",null,"hello-modern \u9879\u76ee\u662f\u4e00\u4e2a MWA\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"src/")," \u76ee\u5f55\u91cc\u662f MWA \u6e90\u4ee3\u7801\u7684\u4e3b\u8981\u90e8\u5206\uff0c\u6211\u4eec\u79f0\u4e4b\u4e3a\u3010 Universal App \u4ee3\u7801\uff08\u5927\u4e00\u7edf\u5e94\u7528\u4ee3\u7801\uff09\u3011\u2014\u2014 \u65e2\u53ef\u4ee5\u5728\u5ba2\u6237\u7aef\u8fd0\u884c\u53c8\u53ef\u4ee5\u5728\u670d\u52a1\u5668\u7aef\u8fd0\u884c\uff0c\u6709\u591a\u79cd\u8fd0\u884c\u6a21\u5f0f\u548c\u90e8\u7f72\u6a21\u5f0f\uff0c\u65e2\u80fd\u5b9e\u73b0\u591a\u9875\uff08MPA\uff09\u7684",(0,i.kt)("a",{parentName:"p",href:"/docs/start/mobile"},"\u79fb\u52a8\u7aef\u5e94\u7528"),"\uff0c\u4e5f\u80fd\u5b9e\u73b0\u5355\u9875\uff08SPA\uff09\u7684",(0,i.kt)("a",{parentName:"p",href:"/docs/start/website"},"\u5185\u5bb9\u7f51\u7ad9"),"\u6216",(0,i.kt)("a",{parentName:"p",href:"/docs/start/admin"},"\u4e2d\u540e\u53f0\u9879\u76ee"),"\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u628a ",(0,i.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," \u79f0\u4f5c\u3010 \u5e94\u7528\u5165\u53e3\uff08App Entry\uff09\u3011\uff0c\u4e00\u4e2a MWA \u9879\u76ee\u53ef\u4ee5\u6709\u4e00\u5230\u591a\u4e2a\u5e94\u7528\u5165\u53e3\u3002"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5e94\u7528\u5165\u53e3\u4e0d\u6b62 ",(0,i.kt)("inlineCode",{parentName:"p"},"App.[jt]sx")," \u4e00\u79cd\uff0c\u4e4b\u540e\u7ae0\u8282\u4e2d\u4f1a\u518d\u6b21\u4ecb\u7ecd\u3002"))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5728\u4e0d\u542f\u7528 SSG\uff08Static Site Generation\uff09\u7684\u60c5\u51b5\u4e0b\uff0cModern.js \u4f1a\u4e3a\u6bcf\u4e00\u4e2a\u5e94\u7528\u5165\u53e3\uff0c\u90fd\u81ea\u52a8\u751f\u6210\u4e00\u4e2a\u5bf9\u5e94\u7684 HTML\uff0c\u7528\u4e8e\u5728\u6d4f\u89c8\u5668\u3001WebView \u7b49\u5e73\u53f0\u4e0a\u8fd0\u884c\u3002"),(0,i.kt)("p",{parentName:"div"},"\u4e00\u4e2a\u5e94\u7528\u5165\u53e3\u9002\u7528\u4e8e\uff1a"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u4e2d\u540e\u53f0\u5e94\u7528\uff08SPA\uff09"),(0,i.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u684c\u9762\u5e94\u7528\uff08SPA\u3001Electron App\uff09"),(0,i.kt)("li",{parentName:"ul"},"\u4e00\u4e2aPWA"),(0,i.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u5927\u578b\u7684\u591a\u9875\u7f51\u7ad9\uff08SPA + SSR\uff09"),(0,i.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u843d\u5730\u9875\u3001\u6d3b\u52a8\u9875\u6216\u5206\u4eab\u9875"),(0,i.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u7aef\u5185\u754c\u9762"),(0,i.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u5fae\u524d\u7aef\u5b50\u5e94\u7528"),(0,i.kt)("li",{parentName:"ul"},"\u2026\u2026")),(0,i.kt)("p",{parentName:"div"},"\u591a\u4e2a\u5e94\u7528\u5165\u53e3\u9002\u7528\u4e8e\uff1a"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u7b80\u5355\u7684\u591a\u9875\u7f51\u7ad9\uff08\u591a\u4e2a HTML \u4e92\u76f8\u94fe\u63a5\uff09"),(0,i.kt)("li",{parentName:"ul"},"\u7531\u591a\u79cd\u4e0d\u540c\u7c7b\u578b\u5165\u53e3\u7ec4\u6210\u7684\u4ea7\u54c1\u300e\u7cfb\u7edf\u300f\uff08\u6574\u4e2a\u4ea7\u54c1\u4e0d\u662f\u5355\u4e00\u7684\u5ba2\u6237\u7aef\uff0c\u800c\u662f\u7531\u591a\u79cd\u4e0d\u540c\u5ba2\u6237\u7aef\u7ec4\u6210\uff0c\u6bd4\u5982\u540c\u65f6\u6709\u843d\u5730\u9875\u3001\u7aef\u5185\u754c\u9762\u3001\u7aef\u5916\u72ec\u7acb Web App\u3001\u540e\u53f0\u7ba1\u7406\u5e94\u7528\uff09")))),(0,i.kt)("p",null,"hello-modern \u9879\u76ee\u76ee\u524d\u662f\u3010 \u5355\u5165\u53e3 \u3011\u5f62\u5f0f\u7684\uff0c\u6211\u4eec\u63a5\u4e0b\u6765\u6dfb\u52a0\u4e00\u4e2a\u65b0\u5165\u53e3\uff0c\u5b9e\u73b0\u8fd9\u4e2a\u8054\u7cfb\u4eba\u5217\u8868\u5e94\u7528\u7684\u843d\u5730\u9875\uff0c\u628a\u9879\u76ee\u8f6c\u53d8\u6210\u3010 \u591a\u5165\u53e3 \u3011\u5f62\u5f0f\u3002"))}d.isMDXComponent=!0}}]);