"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[3492],{54852:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return m}});var s=n(49231);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,s,o=function(e,t){if(null==e)return{};var n,s,o={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=s.createContext({}),c=function(e){var t=s.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},i=function(e){var t=c(e.components);return s.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||r;return n?s.createElement(g,a(a({ref:t},i),{},{components:n})):s.createElement(g,a({ref:t},i))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20353:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return i},default:function(){return d}});var s=n(26260),o=n(23157),r=(n(49231),n(54852)),a=["components"],l={sidebar_position:5},u="CSS Modules",c={unversionedId:"guides/usages/css/css-modules",id:"guides/usages/css/css-modules",isDocsHomePage:!1,title:"CSS Modules",description:"Modern.js \u4e3a CSS Modules \u63d0\u4f9b\u4e86\u5f00\u7bb1\u5373\u7528\u7684\u652f\u6301\u3002",source:"@site/docs/guides/usages/css/css-modules.md",sourceDirName:"guides/usages/css",slug:"/guides/usages/css/css-modules",permalink:"/en/docs/guides/usages/css/css-modules",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"guidesSidebar",previous:{title:"Less \u548c Sass",permalink:"/en/docs/guides/usages/css/less-sass"},next:{title:"\u8c03\u8bd5\u4ee3\u7406\u548c Mock",permalink:"/en/docs/guides/usages/debug/proxy-and-mock"}},i=[{value:"\u6587\u4ef6\u540e\u7f00\u5f62\u5f0f CSS Modules",id:"\u6587\u4ef6\u540e\u7f00\u5f62\u5f0f-css-modules",children:[]},{value:"\u5168\u9762\u542f\u7528 CSS Modules",id:"\u5168\u9762\u542f\u7528-css-modules",children:[]}],p={toc:i};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,s.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"css-modules"},"CSS Modules"),(0,r.kt)("p",null,"Modern.js \u4e3a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/css-modules/css-modules"},"CSS Modules")," \u63d0\u4f9b\u4e86\u5f00\u7bb1\u5373\u7528\u7684\u652f\u6301\u3002"),(0,r.kt)("h2",{id:"\u6587\u4ef6\u540e\u7f00\u5f62\u5f0f-css-modules"},"\u6587\u4ef6\u540e\u7f00\u5f62\u5f0f CSS Modules"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},".module.(css|scss|sass|less)")," \u7ed3\u5c3e\u7684\u6587\u4ef6\u4f1a\u4f5c\u4e3a CSS Modules \u6587\u4ef6\u5904\u7406\uff0c\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="button.module.css"',title:'"button.module.css"'},".redColor {\n  color: red;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Button.jsx"',title:'"Button.jsx"'},"import styles from './button.module.css';\n\nexport default function Button() {\n  return (\n    <button type=\"button\" className={styles.redColor}>\n      red button\n    </button>\n  );\n}\n")),(0,r.kt)("p",null,"\u6700\u7ec8\u5c06\u88ab\u7f16\u8bd1\u4e3a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<button type="button" className="button_redColor__1-RBg">\n  red button\n</button>;\n')),(0,r.kt)("h2",{id:"\u5168\u9762\u542f\u7528-css-modules"},"\u5168\u9762\u542f\u7528 CSS Modules"),(0,r.kt)("p",null,"\u5982\u679c\u60f3\u53bb\u6389\u6587\u4ef6\u540d\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},".module")," \u540e\u7f00\uff0c\u53ef\u4ee5\u8bbe\u7f6e ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/config/output/disable-css-module-extension"},(0,r.kt)("inlineCode",{parentName:"a"},"output.disableCssModuleExtension")),"\u3002"),(0,r.kt)("p",null,"\u8bbe\u7f6e\u540e\uff0c\u9664\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules/")," \u76ee\u5f55\u4e0b\u7684\u6837\u5f0f\u6587\u4ef6\u548c\u6587\u4ef6\u540d\u79f0\u683c\u5f0f\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"[name].global.(css|scss|sass|less)")," \u4e4b\u5916\u7684\u6240\u6709\u6837\u5f0f\u6587\u4ef6\uff0c\u90fd\u4f1a\u4f5c\u4e3a CSS Modules \u5904\u7406\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u6b64\u65f6\u9700\u8981\u5168\u5c40\u6837\u5f0f\uff0c\u53ef\u4ee5\u901a\u8fc7\u521b\u5efa\u6587\u4ef6\u540d\u79f0\u683c\u5f0f\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"[name].global.(css|less|scss|sass)")," \u7684\u6837\u5f0f\u6587\u4ef6\u6765\u89e3\u51b3\uff0c \u4f8b\u5982:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="app.global.css"',title:'"app.global.css"'},".bg-blue {\n  background-color: blue;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="button.css"',title:'"button.css"'},".redColor {\n  color: red;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="App.jsx"',title:'"App.jsx"'},"import './app.global.css';\nimport styles from './button.css';\n\nexport default function Button() {\n  return (\n    <button type=\"button\" className={`${styles.redColor} bg-blue`}>\n      button\n    </button>\n  );\n}\n")),(0,r.kt)("p",null,"\u6700\u7ec8\u5c06\u88ab\u7f16\u8bd1\u4e3a:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<button type="button" className="button__redColor--JsFYl bg-blue">\n  button\n</button>;\n')),(0,r.kt)("p",null,"\u6700\u7ec8\u6548\u679c\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/more-css-modules.png",alt:null})),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gajus/babel-plugin-react-css-modules"},"babel-plugin-react-css-modules")," \u65f6\u9700\u8981\u6ce8\u610f\uff0c\u8be5\u63d2\u4ef6\u7684\u914d\u7f6e\u9009\u9879 ",(0,r.kt)("inlineCode",{parentName:"p"},"generateScopedName")," \u9700\u8981\u548c ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/config/output/css-module-localIdent-name"},(0,r.kt)("inlineCode",{parentName:"a"},"output.cssModuleLocalIdentName"))," \u4fdd\u6301\u4e00\u81f4\u3002"))))}d.isMDXComponent=!0}}]);