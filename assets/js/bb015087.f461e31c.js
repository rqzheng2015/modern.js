"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[1076],{54852:function(n,e,r){r.d(e,{Zo:function(){return p},kt:function(){return m}});var t=r(49231);function o(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function a(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function u(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function i(n,e){if(null==n)return{};var r,t,o=function(n,e){if(null==n)return{};var r,t,o={},a=Object.keys(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||(o[r]=n[r]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}var l=t.createContext({}),c=function(n){var e=t.useContext(l),r=e;return n&&(r="function"==typeof n?n(e):u(u({},e),n)),r},p=function(n){var e=c(n.components);return t.createElement(l.Provider,{value:e},n.children)},s={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},k=t.forwardRef((function(n,e){var r=n.components,o=n.mdxType,a=n.originalType,l=n.parentName,p=i(n,["components","mdxType","originalType","parentName"]),k=c(r),m=o,g=k["".concat(l,".").concat(m)]||k[m]||s[m]||a;return r?t.createElement(g,u(u({ref:e},p),{},{components:r})):t.createElement(g,u({ref:e},p))}));function m(n,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=r.length,u=new Array(a);u[0]=k;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=n,i.mdxType="string"==typeof n?n:o,u[1]=i;for(var c=2;c<a;c++)u[c]=r[c];return t.createElement.apply(null,u)}return t.createElement.apply(null,r)}k.displayName="MDXCreateElement"},92811:function(n,e,r){r.r(e),r.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var t=r(14380),o=r(8240),a=(r(49231),r(54852)),u=["components"],i={sidebar_position:3},l="Manager",c={unversionedId:"apis/runtime/plugin/manager",id:"apis/runtime/plugin/manager",title:"Manager",description:"\u6709\u4e86 Hook \u6a21\u578b\u4e4b\u540e\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u901a\u8fc7 Manager \u6765\u7ec4\u7ec7\u548c\u7ba1\u7406\u5b83\u4eec\uff0c\u5f62\u6210\u63d2\u4ef6\u7684\u6a21\u578b\u3002\u5728 Manager \u4e2d\uff0c\u6211\u4eec\u5e76\u4e0d\u5173\u5fc3\u4ed6\u4eec\u5177\u4f53\u662f\u54ea\u4e9b Hook \u6a21\u578b\uff0c\u53ea\u662f\u8d1f\u8d23\u6574\u5408\u5b83\u4eec\uff0c\u6536\u96c6\u63d2\u4ef6\uff0c\u5c06\u63d2\u4ef6\u4e2d\u5bf9\u5e94\u7684\u51fd\u6570\u6dfb\u52a0\u5230\u5bf9\u5e94\u7684 Hook \u6a21\u578b\u4e2d\uff0c\u7136\u540e\u5c06\u6240\u6709 Hook \u6a21\u578b\u7684\u8fd0\u884c\u51fd\u6570\u6536\u96c6\u6574\u5408\u8d77\u6765\uff0c\u5f62\u6210\u4e00\u4e2a Runner \u5bf9\u8c61\u3002",source:"@site/docs/apis/runtime/plugin/manager.md",sourceDirName:"apis/runtime/plugin",slug:"/apis/runtime/plugin/manager",permalink:"/docs/apis/runtime/plugin/manager",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"apisSidebar",previous:{title:"Hook \u6a21\u578b",permalink:"/docs/apis/runtime/plugin/hook"},next:{title:"\u4e0a\u4e0b\u6587\u5171\u4eab\u673a\u5236",permalink:"/docs/apis/runtime/plugin/context"}},p={},s=[{value:"\u57fa\u7840",id:"\u57fa\u7840",level:2},{value:"\u52a8\u6001\u6ce8\u518c Hook \u6a21\u578b",id:"\u52a8\u6001\u6ce8\u518c-hook-\u6a21\u578b",level:2},{value:"\u63d2\u4ef6\u51fd\u6570\u4e2d\u83b7\u5f97 Runner",id:"\u63d2\u4ef6\u51fd\u6570\u4e2d\u83b7\u5f97-runner",level:2},{value:"\u63d2\u4ef6\u4e4b\u95f4\u7684\u5173\u7cfb\uff1a\u6392\u5e8f\u3001\u4e92\u65a5\u3001\u5fc5\u9700",id:"\u63d2\u4ef6\u4e4b\u95f4\u7684\u5173\u7cfb\u6392\u5e8f\u4e92\u65a5\u5fc5\u9700",level:2}],k={toc:s};function m(n){var e=n.components,r=(0,o.Z)(n,u);return(0,a.kt)("wrapper",(0,t.Z)({},k,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"manager"},"Manager"),(0,a.kt)("p",null,"\u6709\u4e86 Hook \u6a21\u578b\u4e4b\u540e\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u901a\u8fc7 Manager \u6765\u7ec4\u7ec7\u548c\u7ba1\u7406\u5b83\u4eec\uff0c\u5f62\u6210\u63d2\u4ef6\u7684\u6a21\u578b\u3002\u5728 Manager \u4e2d\uff0c\u6211\u4eec\u5e76\u4e0d\u5173\u5fc3\u4ed6\u4eec\u5177\u4f53\u662f\u54ea\u4e9b Hook \u6a21\u578b\uff0c\u53ea\u662f\u8d1f\u8d23\u6574\u5408\u5b83\u4eec\uff0c\u6536\u96c6\u63d2\u4ef6\uff0c\u5c06\u63d2\u4ef6\u4e2d\u5bf9\u5e94\u7684\u51fd\u6570\u6dfb\u52a0\u5230\u5bf9\u5e94\u7684 Hook \u6a21\u578b\u4e2d\uff0c\u7136\u540e\u5c06\u6240\u6709 Hook \u6a21\u578b\u7684\u8fd0\u884c\u51fd\u6570\u6536\u96c6\u6574\u5408\u8d77\u6765\uff0c\u5f62\u6210\u4e00\u4e2a Runner \u5bf9\u8c61\u3002"),(0,a.kt)("h2",{id:"\u57fa\u7840"},"\u57fa\u7840"),(0,a.kt)("p",null,"\u5148\u901a\u8fc7\u4e00\u4e2a\u4f8b\u5b50\u6574\u4f53\u4e86\u89e3\u4e00\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n    createManager,\n    createPipeline,\n    createWaterfall,\n    createWorkflow\n} from '@modern-js/plugin'\n\n// 1. \u521b\u5efa Hook \u6a21\u578b\nconst foo = createPipeline<number, number>()\nconst bar = createWaterfall<number>()\nconst baz = createWorkflow<number, number>()\n\n// 2. \u901a\u8fc7 Hook \u6a21\u578b\u521b\u5efa manager\nconst manager = createManager({ foo, bar, baz });\n\n// 3. \u521b\u5efa\u63d2\u4ef6\nconst plugin1 = manager.createPlugin(() => {\n    return {\n        foo: (count, next) => {\n              return next(count + 1)\n        },\n        bar: (count) => {\n              return count + 1\n        },\n        baz: (count) => {\n              return count + 1\n        }\n    }\n})\n\nconst plugin2 = manager.createPlugin(() => {\n    return {\n        foo(count, next) => {\n              return count * 2\n        },\n        bar(count) => {\n              return count * 2\n        },\n        baz(count) => {\n              return count * 2\n        }\n    }\n})\n\n// 4. \u5c06\u63d2\u4ef6\u6dfb\u52a0\u81f3 Manager\nmanager.usePlugin(plugin1, plugin2)\n\n// 5. \u521d\u59cb\u5316 runner\nconst runner = manager.init()\n\n// 6. \u901a\u8fc7 runner \u6267\u884c\u5404\u4e2a Hook \u6a21\u578b\nrunner.foo(1) // 4\nrunner.foo(5) // 12\n\nrunner.bar(1) // 4\nrunner.bar(5) // 12\n\nrunner.baz(1) // [2, 2]\nrunner.baz(5) // [6, 10]\n")),(0,a.kt)("p",null,"\u4f7f\u7528 Manger \u7684\u65b9\u5f0f\u548c\u987a\u5e8f\u57fa\u672c\u5c31\u548c\u4e0a\u9762\u793a\u4f8b\u4e2d\u6240\u5c55\u793a\u7684\u4e00\u81f4\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u521b\u5efa\u6240\u9700\u7684 Hook \u6a21\u578b"),(0,a.kt)("li",{parentName:"ol"},"\u901a\u8fc7 Hook \u6a21\u578b\u521b\u5efa Manager"),(0,a.kt)("li",{parentName:"ol"},"\u521b\u5efa\u63d2\u4ef6"),(0,a.kt)("li",{parentName:"ol"},"\u5c06\u63d2\u4ef6\u6dfb\u52a0\u81f3 Manager"),(0,a.kt)("li",{parentName:"ol"},"\u521d\u59cb\u5316 Runner"),(0,a.kt)("li",{parentName:"ol"},"\u901a\u8fc7 Runner \u6267\u884c\u5404\u4e2a Hook \u6a21\u578b")),(0,a.kt)("p",null,"\u5176\u4e2d\u521b\u5efa\u63d2\u4ef6\u65f6\uff0c\u662f\u901a\u8fc7 Manger \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"createPlugin")," \u51fd\u6570\u521b\u5efa\uff0c\u4e0d\u540c Manager \u7684\u63d2\u4ef6\u5e76\u4e0d\u901a\u7528\uff0c\u9700\u8981\u4f20\u5165\u53ea\u4e00\u4e2a\u51fd\u6570\uff0c\u8be5\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5bf9\u8c61\u4e2d\u5bf9\u5e94\u7684\u662f\u4e0e Hook \u6a21\u578b\u540c\u540d\u7684\u51fd\u6570\u3002"),(0,a.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\u4e00\u4e2a\u63d2\u4ef6\u4e2d\u4e0d\u9700\u8981\u4e3a\u6240\u6709 Hook \u6a21\u578b\u90fd\u63d0\u4f9b\u51fd\u6570\uff0c\u6ca1\u6709\u63d0\u4f9b\u7684\u5219\u4f1a\u8df3\u8fc7\uff0c\u751a\u81f3\u53ef\u4ee5\u4e0d\u4e3a\u4efb\u4f55\u4e00\u4e2a Hook \u6a21\u578b\u63d0\u4f9b\u51fd\u6570\uff0c\u53ea\u4f1a\u6267\u884c\u521d\u59cb\u5316\u51fd\u6570\u3002"),(0,a.kt)("p",null,"\u8fd8\u63d0\u4f9b\u4e86\u53ef\u4ee5\u52a8\u6001\u6ce8\u518c\uff08\u5728\u6267\u884c\u63d2\u4ef6\u7684\u65f6\u5019\uff09Hook \u6a21\u578b\uff0c\u8fd9\u4e2a\u7684\u7ec6\u8282\u4e4b\u540e\u4f1a\u63d0\u5230\uff0c\u8fd9\u91cc\u9700\u8981\u533a\u5206\u662f\u52a8\u6001\u6ce8\u518c Hook \u6a21\u578b\uff0c\u800c\u4e0d\u662f\u63d2\u4ef6\u3002"),(0,a.kt)("p",null,"\u540c\u6837\u7684 Manager \u4e5f\u540c\u65f6\u63d0\u4f9b\u4e86 Sync \u7248\u672c\u548c Async \u7248\u672c\uff0c\u4f46 Manager \u7684\u7c7b\u578b\u548c Hook \u6a21\u578b\u7684\u7c7b\u578b\u6ca1\u6709\u5173\u7cfb\uff0c\u53ef\u4ee5\u7075\u6d3b\u7ec4\u5408\uff0c\u8fd9\u91cc\u7684 Sync \u548c Async \u53ea\u4f1a\u5f71\u54cd\u63d2\u4ef6\u521d\u59cb\u5316\u51fd\u6570\u7684\u7c7b\u578b\u3002"),(0,a.kt)("h2",{id:"\u52a8\u6001\u6ce8\u518c-hook-\u6a21\u578b"},"\u52a8\u6001\u6ce8\u518c Hook \u6a21\u578b"),(0,a.kt)("p",null,"\u4e3a\u4e86\u652f\u6301\u52a8\u6001\u6ce8\u518c\uff0cManager \u4e2d\u63d0\u4f9b\u4e86\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"register")," \u51fd\u6570\uff0c\u901a\u8fc7\u8be5\u51fd\u6570\u5c31\u53ef\u4ee5\u6dfb\u52a0\u65b0\u7684 Hook \u6a21\u578b\uff0c\u65e0\u6cd5\u8986\u76d6\u539f\u6709\u7684\u540c\u540d Hook \u6a21\u578b\u3002\u4e0b\u9762\u901a\u8fc7\u4e00\u4e2a\u4f8b\u5b50\u6765\u770b\u4e00\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n    createManager,\n    createPipeline,\n    createWaterfall,\n    createWorkflow\n} from '@modern-js/plugin'\n\n// 1. \u521b\u5efa Hook \u6a21\u578b\nconst foo = createPipeline<number, number>()\nconst baseHooks = { foo }\n\n\nexport interface Hooks {}\n\n// 2. \u901a\u8fc7 Hook \u6a21\u578b\u521b\u5efa manager\nconst manager = createManager<Hooks & typeof baseHooks>(baseHooks);\n\n// 2.1.1 \u521b\u5efa\u9700\u8981\u52a8\u6001\u6ce8\u518c\u7684 Hook \u6a21\u578b\nconst bar = createWaterfall<number>()\nconst baz = createWorkflow<number, number>()\n\n// 2.1.2 \u6ce8\u518c\u65b0\u7684 Hook \u6a21\u578b\nmanager.register({\n    bar,\n    baz\n})\n\n// 2.1.3\nexport interface Hooks {\n    bar: typeof bar;\n    baz: typeof baz;\n}\n\n// 3. \u521b\u5efa\u63d2\u4ef6\nconst plugin1 = manager.createPlugin(() => {\n    // 2.2.1 \u521b\u5efa\u9700\u8981\u52a8\u6001\u6ce8\u518c\u7684 Hook \u6a21\u578b\n    const bar = createWaterfall<number>()\n    const baz = createWorkflow<number, number>()\n\n    // 2.2.1 \u6ce8\u518c\u65b0\u7684 Hook \u6a21\u578b\n    manager.register({\n        bar,\n        baz\n    })\n\n    return {\n        foo(count, next) => {\n              return next(count + 1)\n        },\n        bar(count) => {\n              return count + 1\n        },\n        baz(count) => {\n              return count + 1\n        }\n    }\n})\n\nconst plugin2 = manager.createPlugin(() => {\n    return {\n        foo(count, next) => {\n              return count * 2\n        },\n        bar(count) => {\n              return count * 2\n        },\n        baz(count) => {\n              return count * 2\n        }\n    }\n})\n\n// 4. \u5c06\u63d2\u4ef6\u6dfb\u52a0\u81f3 Manager\nmanager.usePlugin(plugin1, plugin2)\n\n// 5. \u521d\u59cb\u5316 runner\nconst runner = manager.init()\n\n// 6. \u901a\u8fc7 runner \u6267\u884c\u5404\u4e2a Hook \u6a21\u578b\nrunner.foo(1) // 4\nrunner.foo(5) // 12\n\nrunner.bar(1) // 4\nrunner.bar(5) // 12\n\nrunner.baz(1) // [2, 2]\nrunner.baz(5) // [6, 10]\n")),(0,a.kt)("p",null,"\u5982\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c\u9700\u8981\u52a8\u6001\u6ce8\u518c Hook \u6a21\u578b\uff0c\u9664\u4e86\u6309\u7167\u6b63\u5e38\u65b9\u5f0f\u6267\u884c\u4e4b\u5916\uff0c\u9700\u8981\u521b\u5efa\u9700\u8981\u52a8\u6001\u6ce8\u518c\u7684 Hook \u6a21\u578b\u548c\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"register")," \u6765\u6ce8\u518c\u65b0\u7684 Hook \u6a21\u578b\uff0c\u9664\u6b64\u4e4b\u5916\u5982\u679c\u9700\u8981\u5b8c\u5584\u7684 TypeScript \u5219\u8fd8\u9700\u8981\u7279\u522b\u5904\u7406\u4e0b\u9762\u8fd9\u91cc\u5730\u65b9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const foo = createPipeline<number, number>()\nconst baseHooks = { foo }\n\n\nexport interface Hooks {}\n\n// 2. \u901a\u8fc7 Hook \u6a21\u578b\u521b\u5efa manager\nconst manager = createManager<Hooks & typeof baseHooks>(baseHooks);\n\n/** ... */\n\n// 2.1.3\nexport interface Hooks {\n    bar: typeof bar;\n    baz: typeof baz;\n}\n")),(0,a.kt)("p",null,"\u63d0\u4f9b\u4e00\u4e2a\u65b9\u4fbf\u6269\u5c55\u7684 Hooks \u7a7a\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"interface"),"\uff08L5\uff09\uff0c\u7136\u540e\u5c06\u8fd9\u4e2a Hooks \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"baseHooks")," \u7684\u7c7b\u578b\u4f5c\u4e3a\u6cdb\u578b\u53c2\u6570\u4f20\u5165\uff0c\u4e4b\u540e\u5728\u6ce8\u518c\u5b8c\u6210\u4e4b\u540e\u8fd8\u9700\u8981\u901a\u8fc7 TypeScript \u7684 Declaration Merging \u7279\u6027\u6765\u8865\u5145\u5bf9\u5e94\u7684\u7c7b\u578b\uff08L13\uff09\u3002\n\u52a8\u6001\u6ce8\u518c\u7684\u5730\u65b9\u4e5f\u9700\u8981\u6ce8\u610f\uff0c\u9700\u8981\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"manager.int")," \u7ed3\u675f\u4e4b\u524d\uff0c\u5373\u53ef\u4ee5\u5728\u63d2\u4ef6\u521d\u59cb\u5316\u51fd\u6570\u4e2d\uff0c\u4f46\u4e0d\u80fd\u5728\u63d2\u4ef6 Hook \u51fd\u6570\u4e2d\u3002"),(0,a.kt)("h2",{id:"\u63d2\u4ef6\u51fd\u6570\u4e2d\u83b7\u5f97-runner"},"\u63d2\u4ef6\u51fd\u6570\u4e2d\u83b7\u5f97 Runner"),(0,a.kt)("p",null,"\u9664\u4e86\u52a8\u6001\u6ce8\u518c\u4e4b\u5916\uff0c\u8fd9\u91cc\u4e5f\u63d0\u4f9b\u4e86\u4e00\u4e2a\u83b7\u53d6 Runner \u7684\u51fd\u6570\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"Manager.useRunner"),"\uff0c\u901a\u8fc7\u8fd9\u4e2a\u51fd\u6570\u53ef\u4ee5\u5728\u63d2\u4ef6 Hook \u51fd\u6570\u4e2d\u62ff\u5230\u5f53\u524d\u7684 Runner\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u6267\u884c\u5728\u63d2\u4ef6 Hook \u51fd\u6570\u4e2d\uff0c\u5176\u4ed6\u5730\u65b9\u4f7f\u7528\u5219\u4f1a\u62a5\u9519\u3002\u4f7f\u7528\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const foo = createPipeline();\n// eslint-disable-next-line @typescript-eslint/no-shadow\nconst bar = createPipeline();\nconst manager = createManager({ foo, bar });\n\nlet count = 0;\n\nconst plugin = manager.createPlugin(() => ({\n  foo: () => {\n    // eslint-disable-next-line react-hooks/rules-of-hooks\n    const runner = useRunner();\n    runner.bar();\n  },\n  bar: () => {\n    count = 1;\n  },\n}));\n\nmanager.usePlugin(plugin);\nconst runner = manager.init();\nrunner.foo({});\n\nconsole.log(count); // 1\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"useRunner")," \u62ff\u5230 Runner\uff0c\u5c31\u53ef\u4ee5\u5728\u63d2\u4ef6 Hook \u51fd\u6570\u4e2d\u6267\u884c\u5176\u4ed6\u7684 Hook"),(0,a.kt)("h2",{id:"\u63d2\u4ef6\u4e4b\u95f4\u7684\u5173\u7cfb\u6392\u5e8f\u4e92\u65a5\u5fc5\u9700"},"\u63d2\u4ef6\u4e4b\u95f4\u7684\u5173\u7cfb\uff1a\u6392\u5e8f\u3001\u4e92\u65a5\u3001\u5fc5\u9700"),(0,a.kt)("p",null,"Modern.js \u7684\u63d2\u4ef6\u7cfb\u7edf\u8fd8\u63d0\u4f9b\u4e86\u6392\u5e8f\u7684\u529f\u80fd\uff0c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Manager.createPlugin")," \u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e2d\u53ef\u4ee5\u4f20\u5165\u4e09\u4e2a\u53c2\u6570\u6765\u63a7\u5236\u63d2\u4ef6\u987a\u5e8f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name: string"),"\uff0c\u8bbe\u7f6e\u5f53\u524d\u63d2\u4ef6\u7684\u540d\u5b57"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pre: string[]"),"\uff0c\u9700\u8981\u6392\u5728\u5f53\u524d\u63d2\u4ef6\u524d\u9762\u7684\u63d2\u4ef6\u7684\u540d\u5b57"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"post: string[]"),"\uff0c\u9700\u8981\u6392\u5728\u5f53\u524d\u63d2\u4ef6\u540e\u9762\u7684\u63d2\u4ef6\u7684\u540d\u5b57")),(0,a.kt)("p",null,"\u8fd8\u6709\u4e00\u4e2a\u53c2\u6570\u7528\u6765\u5b9e\u73b0\u63d2\u4ef6\u4e92\u65a5\u7684\u529f\u80fd\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rivals: string[]"),"\uff0c\u9047\u5230\u6709\u8fd9\u4e9b\u540d\u5b57\u7684\u63d2\u4ef6\u4f1a\u62a5\u9519")),(0,a.kt)("p",null,"\u548c\u4e00\u4e2a\u53c2\u6570\u5b9e\u73b0\u5fc5\u9700\u529f\u80fd"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"required: string[]"),"\uff0c\u6dfb\u52a0\u7684\u63d2\u4ef6\u5217\u8868\u4e2d\u6ca1\u6709\u8fd9\u4e9b\u540d\u5b57\u7684\u63d2\u4ef6\u4f1a\u62a5\u9519")))}m.isMDXComponent=!0}}]);