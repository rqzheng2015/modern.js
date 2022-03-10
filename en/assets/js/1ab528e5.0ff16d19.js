"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[265],{54852:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22505:function(e,t,n){var r=n(49231);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},15175:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(49231),a=n(13529);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(1506),i="tabItem_LOdV",l="tabItemActive_XMHB";var c=function(e){var t,n=e.lazy,a=e.block,c=e.defaultValue,u=e.values,p=e.groupId,m=e.className,d=r.Children.toArray(e.children),f=null!=u?u:d.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=c?c:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,g=o(),b=g.tabGroupChoices,h=g.setTabGroupChoices,k=(0,r.useState)(v),y=k[0],N=k[1],w=[];if(null!=p){var x=b[p];null!=x&&x!==y&&f.some((function(e){return e.value===x}))&&N(x)}var O=function(e){var t=e.currentTarget,n=w.indexOf(t),r=f[n].value;N(r),null!=p&&(h(p,r),setTimeout((function(){var e,n,r,a,o,s,i,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,s=window,i=s.innerHeight,c=s.innerWidth,n>=0&&o<=c&&a<=i&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},T=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case"ArrowLeft":var a=w.indexOf(e.target)-1;n=w[a]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},m)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,s.Z)("tabs__item",i,{"tabs__item--active":y===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:T,onFocus:O,onClick:O},null!=n?n:t)}))),n?(0,r.cloneElement)(d.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},13529:function(e,t,n){var r=(0,n(49231).createContext)(void 0);t.Z=r},6028:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var r=n(26260),a=n(23157),o=(n(49231),n(54852)),s=n(15175),i=n(22505),l=["components"],c={title:"\u200b\u6d4b\u8bd5\u7ec4\u4ef6\u200b\u200b\u200b"},u=void 0,p={unversionedId:"guides/tutorials/c06-css-and-component/6.6-testing",id:"guides/tutorials/c06-css-and-component/6.6-testing",isDocsHomePage:!1,title:"\u200b\u6d4b\u8bd5\u7ec4\u4ef6\u200b\u200b\u200b",description:"Modern.js \u96c6\u6210\u4e86 Jest\uff0c\u4e0d\u9700\u8981\u505a\u4efb\u4f55\u914d\u7f6e\uff0c\u53ef\u4ee5\u76f4\u63a5\u7ed9\u7ec4\u4ef6\u5199\u6d4b\u8bd5\u7528\u4f8b\u3002",source:"@site/docs/guides/tutorials/c06-css-and-component/6.6-testing.md",sourceDirName:"guides/tutorials/c06-css-and-component",slug:"/guides/tutorials/c06-css-and-component/6.6-testing",permalink:"/en/docs/guides/tutorials/c06-css-and-component/6.6-testing",tags:[],version:"current",frontMatter:{title:"\u200b\u6d4b\u8bd5\u7ec4\u4ef6\u200b\u200b\u200b"},sidebar:"guidesSidebar",previous:{title:"\u200b\u7528 Storybook \u8c03\u8bd5\u7ec4\u4ef6",permalink:"/en/docs/guides/tutorials/c06-css-and-component/6.5-storybook"},next:{title:"\u5165\u53e3\u7684\u7528\u9014\u200b\u200b\u200b",permalink:"/en/docs/guides/tutorials/c07-app-entry/7.1-intro"}},m=[],d={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Modern.js \u96c6\u6210\u4e86 ",(0,o.kt)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest"),"\uff0c\u4e0d\u9700\u8981\u505a\u4efb\u4f55\u914d\u7f6e\uff0c\u53ef\u4ee5\u76f4\u63a5\u7ed9\u7ec4\u4ef6\u5199\u6d4b\u8bd5\u7528\u4f8b\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run new")," \u5f00\u542f\u6d4b\u8bd5\u529f\u80fd\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u542f\u7528\u53ef\u9009\u529f\u80fd\n\u276f \u542f\u7528\u300c\u5355\u5143\u6d4b\u8bd5 / \u96c6\u6210\u6d4b\u8bd5\u300d\u529f\u80fd\n")),(0,o.kt)("p",null,"\u53ef\u4ee5\u7528\u4ee5\u4e0b\u4e24\u79cd\u65b9\u5f0f\u7ed9 Item \u7ec4\u4ef6\u521b\u5efa\u6d4b\u8bd5\u7528\u4f8b\uff1a"),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"macOS",label:"macOS",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"touch src/components/Item/index.test.tsx\n"))),(0,o.kt)(i.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"ni src/components/Item/index.test.tsx\n")))),(0,o.kt)("p",null,"\u6216"),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"macOS",label:"macOS",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p src/components/Item/__tests__/\ntouch src/components/Item/__tests__/index.tsx\n"))),(0,o.kt)(i.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"mkdir -p src/components/Item/__tests__/\nni src/components/Item/__tests__/index.tsx\n")))),(0,o.kt)("p",null,"\u4ee5\u524d\u8005\u4e3a\u4f8b\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"Item/index.test.tsx")," \u7684\u5185\u5bb9\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { render } from '@modern-js/runtime/testing';\nimport Item from '.';\n\nconst defaultProps = {\n  info: {\n    avatar: 'https://via.placeholder.com/350x350',\n    name: 'foo',\n    email: 'foo.bar@bytedance.com',\n    archived: false,\n  },\n};\n\ndescribe('Item', () => {\n  it('should have contents', () => {\n    const {\n      info: { name },\n    } = defaultProps;\n    const { getByText } = render(<Item {...defaultProps} />);\n    expect(getByText(name)).toBeInTheDocument();\n  });\n});\n")),(0,o.kt)("p",null,"\u5728\u4e4b\u524d\u7ae0\u8282\u521b\u5efa\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"modern-app-env.d.ts")," \u6587\u4ef6 ",(0,o.kt)("strong",{parentName:"p"},"\u9876\u90e8"),"\uff08",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#:~:text=Triple-slash%20directives%20are%20only%20valid%20at%20the%20top%20of%20their%20containing%20file."},(0,o.kt)("inlineCode",{parentName:"a"},"///")," \u8bed\u6cd5\u53ea\u5728\u6587\u4ef6\u9876\u90e8\u751f\u6548"),"\uff09 \u52a0\u4e0a\u7c7b\u578b\u5b9a\u4e49\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'/// <reference types="@modern-js/plugin-testing/type" />\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u66f4\u591a\u76f8\u5173\u5185\u5bb9\u53ef\u4ee5\u67e5\u770b ",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/runtime/testing/render"},"Test API"),"\u3002"))),(0,o.kt)("p",null,"\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run test"),"\uff0c\u53ef\u4ee5\u770b\u5230\u6d4b\u8bd5\u62a5\u544a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"> modern test\n\n PASS  src/components/Item/index.test.tsx\n  Item\n    \u2713 should have contents (27 ms)\n\nTest Suites: 1 passed, 1 total\nTests:       1 passed, 1 total\nSnapshots:   0 total\nTime:        1.048 s, estimated 2 s\nRan all test suites.\n")),(0,o.kt)("hr",null),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u672c\u5c0f\u8282\u7684\u4ee3\u7801\u53ef\u4ee5\u5728",(0,o.kt)("a",{parentName:"p",href:"https://github.com/modern-js-dev/modern-js-examples/tree/main/tutorials/c06/hello-modern-6"},"\u8fd9\u91cc\u67e5\u770b"),"\u3002")))}f.isMDXComponent=!0},1506:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);