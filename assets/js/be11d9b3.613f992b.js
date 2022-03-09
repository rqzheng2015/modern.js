"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[7903,2899],{54852:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var a=t(49231);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=a.createContext({}),l=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(m.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,m=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(t),u=o,k=d["".concat(m,".").concat(u)]||d[u]||s[u]||r;return t?a.createElement(k,i(i({ref:n},c),{},{components:t})):a.createElement(k,i({ref:n},c))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var p={};for(var m in n)hasOwnProperty.call(n,m)&&(p[m]=n[m]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<r;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8108:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return m},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var a=t(26260),o=t(23157),r=(t(49231),t(54852)),i=t(91717),p=["components"],m={sidebar_position:2},l=void 0,c={unversionedId:"apis/commands/module/build",id:"apis/commands/module/build",isDocsHomePage:!1,title:"build",description:"`bash",source:"@site/docs/apis/commands/module/build.md",sourceDirName:"apis/commands/module",slug:"/apis/commands/module/build",permalink:"/docs/apis/commands/module/build",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"apisSidebar",previous:{title:"dev",permalink:"/docs/apis/commands/module/dev"},next:{title:"test",permalink:"/docs/apis/commands/module/test"}},s=[],d={toc:s};function u(e){var n=e.components,t=(0,o.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Usage: modern build [options]\n\n\u6784\u5efa\u6a21\u5757\u547d\u4ee4\n\nOptions:\n  -w, --watch            \u4f7f\u7528 Watch \u6a21\u5f0f\u6784\u5efa\u6a21\u5757\n  --tsconfig [tsconfig]  \u6307\u5b9a tsconfig.json \u6587\u4ef6\u7684\u8def\u5f84 (default:\n                         "./tsconfig.json")\n  --style-only           \u53ea\u6784\u5efa\u6837\u5f0f\u6587\u4ef6\n  --platform [platform]  \u6784\u5efa\u5176\u4ed6\u5e73\u53f0\u4ea7\u7269\n  --no-tsc               \u5173\u95ed tsc \u7f16\u8bd1\n  --no-clear             \u4e0d\u6e05\u7406\u4ea7\u7269\u76ee\u5f55\n  -h, --help             display help for command\n')),(0,r.kt)(i.default,{mdxType:"CommandTip"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"modern build")," \u547d\u4ee4\u9ed8\u8ba4\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"dist")," \u76ee\u5f55\u8f93\u51fa\u6a21\u5757\u6784\u5efa\u4ea7\u7269\u3002 \u4ea7\u7269\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/api/dist-output.png",alt:null})),(0,r.kt)("p",null,"\u5176\u4e2d\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"types")," \u76ee\u5f55\u5305\u542b\u6240\u6709\u751f\u6210\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"d.ts")," \u6587\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"modern"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"node"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"treeshaking")," \u76ee\u5f55\u5206\u522b\u5bf9\u5e94\u4e0d\u540c\u8bed\u6cd5\u548c\u6a21\u5757\u5316\u89c4\u8303\u7684\u6784\u5efa\u4ea7\u7269\u3002\u4fee\u6539 Modern.js \u914d\u7f6e\u6587\u4ef6\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"output.packageMode")," \u6216\u8005 ",(0,r.kt)("inlineCode",{parentName:"li"},"output.packageFields")," \u914d\u7f6e\u9879\u4f1a\u6539\u53d8\u6784\u5efa\u4ea7\u7269\u7684\u8bed\u6cd5\u548c\u6a21\u5757\u89c4\u8303\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dist/js/styles")," \u76ee\u5f55\u5305\u542b\u6240\u6709 ",(0,r.kt)("inlineCode",{parentName:"li"},"src")," \u76ee\u5f55\u4e2d\u975e ",(0,r.kt)("inlineCode",{parentName:"li"},"(js|ts)x")," \u7684\u539f\u6587\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dist/styles")," \u76ee\u5f55\u5305\u542b\u6240\u6709 styles \u76ee\u5f55\u4e2d\u7f16\u8bd1\u540e\u7684\u6587\u4ef6\u3002")),(0,r.kt)("p",null,"\u4e00\u4e9b\u91cd\u8981\u7684\u547d\u4ee4\u53c2\u6570\u5982\u4e0b:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--watch")," \u76d1\u542c\u6a21\u5757\u6e90\u6587\u4ef6\u53d8\u5316\u81ea\u52a8\u91cd\u65b0\u7f16\u8bd1\u8f93\u51fa\u4ea7\u7269\uff0c\u5728\u5f00\u53d1\u8c03\u8bd5\u6a21\u5757\u9636\u6bb5\u975e\u5e38\u6709\u5e2e\u52a9\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--no-tsc")," \u5173\u95ed\u7c7b\u578b\u68c0\u67e5\u4ee5\u53ca ",(0,r.kt)("inlineCode",{parentName:"li"},".d.ts")," \u7c7b\u578b\u6587\u4ef6\u7684\u751f\u6210\uff0c\u5bf9\u5e94\u6784\u5efa\u7684\u901f\u5ea6\u7684\u4e5f\u4f1a\u6709\u63d0\u5347\u3002")))}u.isMDXComponent=!0},91717:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var a=t(26260),o=t(23157),r=(t(49231),t(54852)),i=["components"],p={},m=void 0,l={unversionedId:"components/command-tip",id:"components/command-tip",isDocsHomePage:!1,title:"command-tip",description:"Yarn \u548c pnpm \u8c03\u7528\u547d\u4ee4\u65f6\u63a5\u6536\u53c2\u6570\u7684\u65b9\u5f0f\u4e0d\u540c\uff0c\u4f8b\u5982\uff0c\u5728\u5982\u4e0b package.json \u914d\u7f6e\u4e2d\uff1a",source:"@site/docs/components/command-tip.md",sourceDirName:"components",slug:"/components/command-tip",permalink:"/docs/components/command-tip",tags:[],version:"current",frontMatter:{}},c=[],s={toc:c};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Yarn \u548c pnpm \u8c03\u7528\u547d\u4ee4\u65f6\u63a5\u6536\u53c2\u6570\u7684\u65b9\u5f0f\u4e0d\u540c\uff0c\u4f8b\u5982\uff0c\u5728\u5982\u4e0b ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u914d\u7f6e\u4e2d\uff1a"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "command": "modern command"\n  }\n}\n')),(0,r.kt)("p",{parentName:"div"},"\u5f53\u9700\u8981\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"modern command --option"),"\uff1a"),(0,r.kt)("p",{parentName:"div"},"\u4f7f\u7528 Yarn \u65f6\uff0c\u9700\u8981\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn command --option"),"\u3002"),(0,r.kt)("p",{parentName:"div"},"\u4f7f\u7528 pnpm \u65f6\uff0c\u9700\u8981\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run command -- --option"),"\u3002"),(0,r.kt)("p",{parentName:"div"},"\u8fd9\u662f\u56e0\u4e3a pnpm \u5bf9\u4e8e\u547d\u4ee4\u53c2\u6570\u7684\u5904\u7406\u4e0e Yarn \u5e76\u4e0d\u76f8\u540c\uff0c\u4f46\u662f\u4e0e npm \u7c7b\u4f3c\uff1a\u5728\u4e0d\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"--")," \u5b57\u7b26\u4e32\u7684\u65f6\u5019\uff0c\u4f20\u9012\u7684\u662f pnpm \u7684\u53c2\u6570\uff1b\u5728\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"--")," \u5b57\u7b26\u4e32\u7684\u65f6\u5019\uff0c\u4f20\u9012\u7684\u662f\u6267\u884c\u811a\u672c\u7684\u53c2\u6570\u3002"),(0,r.kt)("p",{parentName:"div"},"\u5728\u4e0a\u8ff0\u4f8b\u5b50\u91cc\u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"--option")," \u4f20\u9012\u7ed9\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"modern command"),"\u3002\u5982\u679c\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run command --option"),"\uff0c\u5219\u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"--option")," \u5c06\u4f20\u9012\u7ed9 pnpm\u3002"),(0,r.kt)("p",{parentName:"div"},"\u603b\u7ed3\u6765\u8bf4\uff1a"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"\u5728\u4f7f\u7528 pnpm \u65f6\uff0c\u5982\u679c\u4f20\u9012\u7684\u53c2\u6570\u7ed9 pnpm\uff0c\u4e0d\u9700\u8981\u52a0 ",(0,r.kt)("inlineCode",{parentName:"strong"},"--"),"\uff1b\u5982\u679c\u4f20\u9012\u7684\u53c2\u6570\u662f\u7ed9\u811a\u672c\u4f7f\u7528\uff0c\u9700\u8981\u589e\u52a0 ",(0,r.kt)("inlineCode",{parentName:"strong"},"--")," \u5b57\u7b26\u4e32"),"\u3002"))))}d.isMDXComponent=!0}}]);