"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[6087],{54852:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(49231);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),l=s(n),d=o,f=l["".concat(p,".").concat(d)]||l[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=l;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},90556:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return l}});var r=n(26260),o=n(23157),a=(n(49231),n(54852)),i=["components"],u={sidebar_position:4,title:"\u8def\u7531\u4f7f\u7528"},p=void 0,s={unversionedId:"guides/features/runtime/router",id:"guides/features/runtime/router",isDocsHomePage:!1,title:"\u8def\u7531\u4f7f\u7528",description:"Modern.js \u96c6\u6210 React Router\uff0c\u901a\u8fc7\u5bfc\u5165 @modern-js/runtime/router\uff0c\u53ef\u4ee5\u4f7f\u7528 React Router \u7684\u4efb\u610f API\u3002",source:"@site/docs/guides/features/runtime/router.md",sourceDirName:"guides/features/runtime",slug:"/guides/features/runtime/router",permalink:"/en/docs/guides/features/runtime/router",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u8def\u7531\u4f7f\u7528"},sidebar:"guidesSidebar",previous:{title:"Loader \u7ba1\u7406",permalink:"/en/docs/guides/features/runtime/use-loader"},next:{title:"\u5b9a\u4e49 head \u4fe1\u606f",permalink:"/en/docs/guides/features/runtime/head"}},c=[{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",children:[]},{value:"\u5982\u4f55\u5207\u6362\u8def\u7531\u7c7b\u578b",id:"\u5982\u4f55\u5207\u6362\u8def\u7531\u7c7b\u578b",children:[]}],m={toc:c};function l(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Modern.js \u96c6\u6210 ",(0,a.kt)("a",{parentName:"p",href:"https://reactrouter.com/"},"React Router"),"\uff0c\u901a\u8fc7\u5bfc\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"@modern-js/runtime/router"),"\uff0c\u53ef\u4ee5\u4f7f\u7528 React Router \u7684\u4efb\u610f API\u3002"),(0,a.kt)("h2",{id:"\u57fa\u672c\u4f7f\u7528"},"\u57fa\u672c\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n  Redirect,\n  Switch,\n  Route,\n  Link,\n  useLocation,\n} from \'@modern-js/runtime/router\';\n\nfunction Home() {\n  console.log(useLocation());\n\n  return <div>home</div>;\n}\n\nfunction About() {\n  console.log(useLocation());\n\n  return <div>about</div>;\n}\n\nfunction App() {\n  return (\n    <div>\n      <Link to="/home">home</Link>\n      <Link to="/about">about</Link>\n      <Switch>\n        <Redirect exact={true} from="/" to="/home" />\n        <Route path="/home">\n          <Home />\n        </Route>\n        <Route path="/about">\n          <About />\n        </Route>\n      </Switch>\n    </div>\n  );\n}\n\nexport default App;\n')),(0,a.kt)("p",null,"\u5982\u4e0a\u6240\u793a\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Switch"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"Redirect"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"Route"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"Link")," \u7b49",(0,a.kt)("strong",{parentName:"p"},"\u7ec4\u4ef6 API"),"\uff0c\u540c\u65f6\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"useLocation"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"useHistory")," \u7b49 ",(0,a.kt)("strong",{parentName:"p"},"Hook API"),"\u3002"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"@modern-js/runtime/router")," \u662f\u57fa\u4e8e ",(0,a.kt)("a",{parentName:"p",href:"https://reactrouter.com/web/guides/start"},"react-router-dom")," \u5c01\u88c5\u7684\uff0c",(0,a.kt)("a",{parentName:"p",href:"https://reactrouter.com/web/guides/start"},"react-router-dom")," \u7684\u6240\u6709 API\uff0c\u5747\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"@modern-js/runtime/router")," \u5bfc\u5165\u5e76\u4f7f\u7528\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Modern.js \u4e2d\u4f7f\u7528\u8def\u7531\uff0c\u4e0d\u9700\u8981\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"BrowserRouter")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"HashRouter")," \u5305\u88f9\u6839\u7ec4\u4ef6\u3002"))))),(0,a.kt)("h2",{id:"\u5982\u4f55\u5207\u6362\u8def\u7531\u7c7b\u578b"},"\u5982\u4f55\u5207\u6362\u8def\u7531\u7c7b\u578b"),(0,a.kt)("p",null,"\u8def\u7531\u5206\u4e3a ",(0,a.kt)("strong",{parentName:"p"},"\u6d4f\u89c8\u5668\u8def\u7531")," \u548c ",(0,a.kt)("strong",{parentName:"p"},"\u54c8\u5e0c\u8def\u7531"),"\u3002Modern.js \u9ed8\u8ba4\u542f\u7528\u7684\u662f\u6d4f\u89c8\u5668\u8def\u7531\u7c7b\u578b\uff0c\u5982\u679c\u4f60\u60f3\u4f7f\u7528\u54c8\u5e0c\u8def\u7531\uff0c\u53ef\u4ee5\u5173\u95ed ",(0,a.kt)("inlineCode",{parentName:"p"},"supportHtml5History")," \u9009\u9879\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=package.json",title:"package.json"},'{\n  "modernConfig": {\n    "runtime": {\n      "router": {\n        "supportHtml5History": true\n      }\n    }\n  }\n}\n')),(0,a.kt)("p",null,"\u9664\u4e86",(0,a.kt)("strong",{parentName:"p"},"\u5207\u6362\u8def\u7531\u7c7b\u578b"),"\u4e4b\u5916\uff0cModern.js \u4e5f\u652f\u6301\u5176\u5b83\u8def\u7531\u7684\u76f8\u5173\u914d\u7f6e\uff0c\u66f4\u591a\u4f7f\u7528\u8bf7\u53c2\u8003\u3010",(0,a.kt)("a",{parentName:"p",href:"/docs/apis/config/runtime/router"},"Router \u914d\u7f6e"),"\u3011\u3002"))}l.isMDXComponent=!0}}]);