"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[9108],{54852:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(49231);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||s;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},80186:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return m}});var a=n(14380),r=n(8240),s=(n(49231),n(54852)),o=["components"],i={sidebar_position:3},p="PostCSS",l={unversionedId:"guides/usages/css/postcss",id:"guides/usages/css/postcss",title:"PostCSS",description:"PostCSS \u662f\u4e00\u4e2a\u7528 JavaScript \u5de5\u5177\u548c\u63d2\u4ef6\u8f6c\u6362 CSS \u4ee3\u7801\u7684\u5de5\u5177\u3002Modern.js \u5185\u7f6e PostCSS\uff0c\u5e76\u96c6\u6210 Autoprefixer \u7b49\u5e38\u7528\u7684 PostCSS \u63d2\u4ef6\uff0c\u80fd\u591f\u6ee1\u8db3\u5927\u591a\u6570\u9879\u76ee\u7684\u6837\u5f0f\u5f00\u53d1\u9700\u6c42\u3002",source:"@site/docs/guides/usages/css/postcss.md",sourceDirName:"guides/usages/css",slug:"/guides/usages/css/postcss",permalink:"/docs/guides/usages/css/postcss",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"guidesSidebar",previous:{title:"Tailwind CSS",permalink:"/docs/guides/usages/css/tailwindcss"},next:{title:"Less \u548c Sass",permalink:"/docs/guides/usages/css/less-sass"}},c={},m=[],u={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"postcss"},"PostCSS"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://postcss.org/"},"PostCSS")," \u662f\u4e00\u4e2a\u7528 JavaScript \u5de5\u5177\u548c\u63d2\u4ef6\u8f6c\u6362 CSS \u4ee3\u7801\u7684\u5de5\u5177\u3002Modern.js \u5185\u7f6e PostCSS\uff0c\u5e76\u96c6\u6210 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/postcss/autoprefixer"},"Autoprefixer")," \u7b49\u5e38\u7528\u7684 PostCSS \u63d2\u4ef6\uff0c\u80fd\u591f\u6ee1\u8db3\u5927\u591a\u6570\u9879\u76ee\u7684\u6837\u5f0f\u5f00\u53d1\u9700\u6c42\u3002"),(0,s.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cModern.js \u4f1a\u5bf9 CSS \u8fdb\u884c\u4ee5\u4e0b\u7f16\u8bd1\u548c\u8f6c\u6362\uff1a"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://github.com/postcss/autoprefixer"},"Autoprefixer")," \u6839\u636e\u9700\u8981\u652f\u6301\u7684\u6d4f\u89c8\u5668\u8303\u56f4\uff0c\u4f1a\u81ea\u52a8\u4e3a CSS \u89c4\u5219\u6dfb\u52a0\u9700\u8981\u7684\u6d4f\u89c8\u5668\u5382\u5546\u524d\u7f00\u3002Modern.js \u9ed8\u8ba4\u652f\u6301\u7684\u6d4f\u89c8\u5668\u8303\u56f4\u4e3a\uff1a",(0,s.kt)("inlineCode",{parentName:"p"},"['> 0.01%', 'not dead', 'not op_mini all']"),"\u3002"),(0,s.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("ul",{parentName:"div"},(0,s.kt)("li",{parentName:"ul"},"\u3010\u652f\u6301\u7684\u6d4f\u89c8\u5668\u8303\u56f4\u4e3a\uff1a",(0,s.kt)("inlineCode",{parentName:"li"},"> 0.01%"),"\u3011\u662f\u6307\u6d4f\u89c8\u5668\u5e02\u573a\u4efd\u989d\u5927\u4e8e 0.01%\u3002"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"not dead")," \u662f\u6307\u4e0d\u5305\u542b\u5b98\u65b9\u4e0d\u518d\u652f\u6301\u7684\u6d4f\u89c8\u5668\u548c\u8fc7\u53bb24\u4e2a\u6708\u6ca1\u6709\u66f4\u65b0\u7684\u6d4f\u89c8\u5668\u3002"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"not op_mini all")," \u662f\u6307\u4e0d\u5305\u542b Opera Mini\u3002")))),(0,s.kt)("div",{parentName:"li",className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"  \u5982\u679c\u9700\u8981\u4fee\u6539\u9ed8\u8ba4\u6d4f\u89c8\u5668\u652f\u6301\u8303\u56f4\uff0c\u53ef\u4ee5\u5728\u9879\u76ee\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"package.json")," \u6587\u4ef6\u4e2d\u914d\u7f6e ",(0,s.kt)("inlineCode",{parentName:"p"},"browserslist"),"\uff0c\u8bbe\u7f6e\u89c4\u5219\u53c2\u8003 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/browserslist/browserslist"},"Browserslist")," \u7684\u4f7f\u7528\uff0c\u4e0b\u9762\u662f\u4e00\u4e2a\u793a\u4f8b\uff1a"),(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  "browserslist": [\n    "last 1 version",\n    "> 1%",\n    "IE 10"\n  ]\n}\n'))))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"\u63d0\u4f9b ",(0,s.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/css-variables-1/"},"CSS custom properties")," \u652f\u6301\uff0c\u53ef\u4ee5\u5728 CSS \u4e2d\u5b9a\u4e49\u548c\u4f7f\u7528\u81ea\u5b9a\u4e49\u53d8\u91cf\uff0c\u5982\uff1a"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-css"},":root {\n  --main-bg-color: pink;\n}\n\nbody {\n  background-color: var(--main-bg-color);\n}\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"\u63d0\u4f9b ",(0,s.kt)("a",{parentName:"p",href:"https://drafts.csswg.org/css-nesting-1/"},"CSS Nesting")," \u652f\u6301\uff0c\u53ef\u4ee5\u5728 CSS \u4e2d\u4f7f\u7528\u5d4c\u5957\u5199\u6cd5\uff0c\u5982\uff1a"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-css"},"table.colortable td {\n  text-align: center;\n}\ntable.colortable td.c {\n  text-transform: uppercase;\n}\n")),(0,s.kt)("p",{parentName:"li"},"\u4e5f\u53ef\u4ee5\u6539\u5199\u6210 CSS \u5d4c\u5957\u5199\u6cd5\uff1a"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-css"},"table.colortable {\n  & td {\n    text-align: center;\n    &.c { text-transform: uppercase }\n  }\n}\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"\u4fee\u590d\u5df2\u77e5\u7684 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/philipwalton/flexbugs"},"Flexbugs")," \u3002")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"\u5bf9\u4ee5\u4e0b CSS \u7279\u6027\u63d0\u4f9b\u517c\u5bb9\uff1a"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/initial_value"},(0,s.kt)("inlineCode",{parentName:"a"},"initial")," \u5c5e\u6027\u503c")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/break-after"},(0,s.kt)("inlineCode",{parentName:"a"},"break-")," \u5c5e\u6027")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant"},(0,s.kt)("inlineCode",{parentName:"a"},"font-variant"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#syntax_improvements_in_level_4"},"Media Query Ranges"))),(0,s.kt)("p",{parentName:"li"},"\u5f53\u9700\u8981\u4fee\u6539 PostCSS \u914d\u7f6e\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u5e95\u5c42\u914d\u7f6e ",(0,s.kt)("a",{parentName:"p",href:"/docs/apis/config/tools/postcss"},(0,s.kt)("inlineCode",{parentName:"a"},"tools.postcss"))," \u6765\u5b9e\u73b0\uff0c\u4e0b\u9762\u662f\u4e00\u4e2a\u793a\u4f8b\uff1a"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="package.json"',title:'"package.json"'},'{\n  "modernConfig": {\n    "tools": {\n      "postcss": {\n        "plugins": [\n          "autoprefixer",\n          "postcss-flexbugs-fixes": {}\n        ]\n      }\n    }\n  }\n}\n')))))}d.isMDXComponent=!0}}]);