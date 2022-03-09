"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[5622,2899],{54852:function(n,e,t){t.d(e,{Zo:function(){return s},kt:function(){return u}});var a=t(49231);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function p(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var m=a.createContext({}),c=function(n){var e=a.useContext(m),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},s=function(n){var e=c(n.components);return a.createElement(m.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},l=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,m=n.parentName,s=p(n,["components","mdxType","originalType","parentName"]),l=c(t),u=r,f=l["".concat(m,".").concat(u)]||l[u]||d[u]||o;return t?a.createElement(f,i(i({ref:e},s),{},{components:t})):a.createElement(f,i({ref:e},s))}));function u(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,i=new Array(o);i[0]=l;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=n,p.mdxType="string"==typeof n?n:r,i[1]=p;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}l.displayName="MDXCreateElement"},18561:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return m},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var a=t(26260),r=t(23157),o=(t(49231),t(54852)),i=t(91717),p=["components"],m={sidebar_position:2},c=void 0,s={unversionedId:"apis/commands/mwa/new",id:"apis/commands/mwa/new",isDocsHomePage:!1,title:"new",description:"`bash",source:"@site/docs/apis/commands/mwa/new.md",sourceDirName:"apis/commands/mwa",slug:"/apis/commands/mwa/new",permalink:"/en/docs/apis/commands/mwa/new",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"apisSidebar",previous:{title:"dev",permalink:"/en/docs/apis/commands/mwa/dev"},next:{title:"test",permalink:"/en/docs/apis/commands/mwa/test"}},d=[{value:"\u6dfb\u52a0\u5165\u53e3",id:"\u6dfb\u52a0\u5165\u53e3",children:[]},{value:"\u542f\u7528\u542f\u7528\u53ef\u9009\u529f\u80fd",id:"\u542f\u7528\u542f\u7528\u53ef\u9009\u529f\u80fd",children:[]}],l={toc:d};function u(n){var e=n.components,t=(0,r.Z)(n,p);return(0,o.kt)("wrapper",(0,a.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Usage: modern new [options]\n\nMWA \u9879\u76ee\u4e2d\u4e2d\u6267\u884c\u751f\u6210\u5668\n\nOptions:\n  -d, --debug            \u5f00\u542f Debug \u6a21\u5f0f\uff0c\u6253\u5370\u8c03\u8bd5\u65e5\u5fd7\u4fe1\u606f (default: false)\n  -c, --config <config>  \u751f\u6210\u5668\u8fd0\u884c\u9ed8\u8ba4\u914d\u7f6e(JSON \u5b57\u7b26\u4e32)\n  --dist-tag <tag>       \u751f\u6210\u5668\u4f7f\u7528\u7279\u6b8a\u7684 npm Tag \u7248\u672c\n  --registry             \u751f\u6210\u5668\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u5b9a\u5236 npm Registry\n  -h, --help             display help for command\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"modern new")," \u547d\u4ee4\u7528\u4e8e\u5728\u5df2\u6709\u9879\u76ee\u4e2d\u6dfb\u52a0\u9879\u76ee\u5143\u7d20\u3002"),(0,o.kt)("p",null,"\u6bd4\u5982\u6dfb\u52a0\u5e94\u7528\u5165\u53e3\u3001\u542f\u7528\u542f\u7528\u4e00\u4e9b\u53ef\u9009\u529f\u80fd\u5982 Tailwind CSS\u3001\u5fae\u524d\u7aef\u5f00\u53d1\u6a21\u5f0f\u3001Unbundled \u5f00\u53d1\u6a21\u5f0f\u7b49\u3002"),(0,o.kt)(i.default,{mdxType:"CommandTip"}),(0,o.kt)("h3",{id:"\u6dfb\u52a0\u5165\u53e3"},"\u6dfb\u52a0\u5165\u53e3"),(0,o.kt)("p",null,"\u5728 MWA \u9879\u76ee\u4e2d\uff0c\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"new")," \u547d\u4ee4\u6dfb\u52a0\u5165\u53e3\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx modern new\n? \u8bf7\u9009\u62e9\u4f60\u60f3\u8981\u7684\u64cd\u4f5c \u521b\u5efa\u5de5\u7a0b\u5143\u7d20\n? \u521b\u5efa\u5de5\u7a0b\u5143\u7d20 \u65b0\u5efa\u300c\u5e94\u7528\u5165\u53e3\u300d\n? \u8bf7\u586b\u5199\u5165\u53e3\u540d\u79f0 entry\n? \u662f\u5426\u9700\u8981\u8c03\u6574\u9ed8\u8ba4\u914d\u7f6e? \u5426\n")),(0,o.kt)("h3",{id:"\u542f\u7528\u542f\u7528\u53ef\u9009\u529f\u80fd"},"\u542f\u7528\u542f\u7528\u53ef\u9009\u529f\u80fd"),(0,o.kt)("p",null,"\u5728 MWA \u5e94\u7528\u9879\u76ee\u4e2d\uff0c\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"new")," \u547d\u4ee4\u542f\u7528\u53ef\u9009\u80fd\u529b\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx modern new\n? \u8bf7\u9009\u62e9\u4f60\u60f3\u8981\u7684\u64cd\u4f5c \u542f\u7528\u53ef\u9009\u529f\u80fd\n? \u542f\u7528\u53ef\u9009\u529f\u80fd (Use arrow keys)\n\u276f \u542f\u7528\u300cUnbundled \u5f00\u53d1\u300d\u6a21\u5f0f\n  \u542f\u7528 Tailwind CSS \u652f\u6301\n  \u542f\u7528 Less \u652f\u6301\n  \u542f\u7528 Sass \u652f\u6301\n  \u542f\u7528\u300cBFF\u300d\u529f\u80fd\n  \u542f\u7528\u300c\u5fae\u524d\u7aef\u300d\u6a21\u5f0f\n  \u542f\u7528\u300c\u5355\u5143\u6d4b\u8bd5 / \u96c6\u6210\u6d4b\u8bd5\u300d\u529f\u80fd\n  \u542f\u7528\u300cVisual Testing (Storybook)\u300d\u6a21\u5f0f\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u6ce8\u610f")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"--config")," \u53c2\u6570\u5bf9\u5e94\u53c2\u6570\u503c\u9700\u8981\u4f7f\u7528 JSON \u5b57\u7b26\u4e32\u3002"),(0,o.kt)("p",{parentName:"div"},"pnpm \u6682\u4e0d\u652f\u6301\u4f7f\u7528 JSON \u5b57\u7b26\u4e32\u4f5c\u4e3a\u53c2\u6570\u503c\uff0c\u53ef\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"npm new")," \u5f00\u542f\u76f8\u5173\u529f\u80fd\u3002\u3010",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/3876"},"\u76f8\u5173 Issue"),"\u3011"))))}u.isMDXComponent=!0},91717:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return c},toc:function(){return s},default:function(){return l}});var a=t(26260),r=t(23157),o=(t(49231),t(54852)),i=["components"],p={},m=void 0,c={unversionedId:"components/command-tip",id:"components/command-tip",isDocsHomePage:!1,title:"command-tip",description:"Yarn \u548c pnpm \u8c03\u7528\u547d\u4ee4\u65f6\u63a5\u6536\u53c2\u6570\u7684\u65b9\u5f0f\u4e0d\u540c\uff0c\u4f8b\u5982\uff0c\u5728\u5982\u4e0b package.json \u914d\u7f6e\u4e2d\uff1a",source:"@site/docs/components/command-tip.md",sourceDirName:"components",slug:"/components/command-tip",permalink:"/en/docs/components/command-tip",tags:[],version:"current",frontMatter:{}},s=[],d={toc:s};function l(n){var e=n.components,t=(0,r.Z)(n,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Yarn \u548c pnpm \u8c03\u7528\u547d\u4ee4\u65f6\u63a5\u6536\u53c2\u6570\u7684\u65b9\u5f0f\u4e0d\u540c\uff0c\u4f8b\u5982\uff0c\u5728\u5982\u4e0b ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u914d\u7f6e\u4e2d\uff1a"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "command": "modern command"\n  }\n}\n')),(0,o.kt)("p",{parentName:"div"},"\u5f53\u9700\u8981\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"modern command --option"),"\uff1a"),(0,o.kt)("p",{parentName:"div"},"\u4f7f\u7528 Yarn \u65f6\uff0c\u9700\u8981\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn command --option"),"\u3002"),(0,o.kt)("p",{parentName:"div"},"\u4f7f\u7528 pnpm \u65f6\uff0c\u9700\u8981\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run command -- --option"),"\u3002"),(0,o.kt)("p",{parentName:"div"},"\u8fd9\u662f\u56e0\u4e3a pnpm \u5bf9\u4e8e\u547d\u4ee4\u53c2\u6570\u7684\u5904\u7406\u4e0e Yarn \u5e76\u4e0d\u76f8\u540c\uff0c\u4f46\u662f\u4e0e npm \u7c7b\u4f3c\uff1a\u5728\u4e0d\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},"--")," \u5b57\u7b26\u4e32\u7684\u65f6\u5019\uff0c\u4f20\u9012\u7684\u662f pnpm \u7684\u53c2\u6570\uff1b\u5728\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"--")," \u5b57\u7b26\u4e32\u7684\u65f6\u5019\uff0c\u4f20\u9012\u7684\u662f\u6267\u884c\u811a\u672c\u7684\u53c2\u6570\u3002"),(0,o.kt)("p",{parentName:"div"},"\u5728\u4e0a\u8ff0\u4f8b\u5b50\u91cc\u53c2\u6570 ",(0,o.kt)("inlineCode",{parentName:"p"},"--option")," \u4f20\u9012\u7ed9\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"modern command"),"\u3002\u5982\u679c\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run command --option"),"\uff0c\u5219\u53c2\u6570 ",(0,o.kt)("inlineCode",{parentName:"p"},"--option")," \u5c06\u4f20\u9012\u7ed9 pnpm\u3002"),(0,o.kt)("p",{parentName:"div"},"\u603b\u7ed3\u6765\u8bf4\uff1a"),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"\u5728\u4f7f\u7528 pnpm \u65f6\uff0c\u5982\u679c\u4f20\u9012\u7684\u53c2\u6570\u7ed9 pnpm\uff0c\u4e0d\u9700\u8981\u52a0 ",(0,o.kt)("inlineCode",{parentName:"strong"},"--"),"\uff1b\u5982\u679c\u4f20\u9012\u7684\u53c2\u6570\u662f\u7ed9\u811a\u672c\u4f7f\u7528\uff0c\u9700\u8981\u589e\u52a0 ",(0,o.kt)("inlineCode",{parentName:"strong"},"--")," \u5b57\u7b26\u4e32"),"\u3002"))))}l.isMDXComponent=!0}}]);