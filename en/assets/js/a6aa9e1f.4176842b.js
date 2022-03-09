"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[3089],{68070:function(e,t,a){a.d(t,{Z:function(){return E}});var n=a(23157),r=a(49231),l=a(1506),o=a(63203),i=a(81527),c="sidebar_Ih6D",s="sidebarItemTitle_jtJO",m="sidebarItemList_xtl8",u="sidebarItem_b7Ju",d="sidebarItemLink_B0Q-",f="sidebarItemLinkActive_tJDL",g=a(18202);function h(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,g.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(s,"margin-bottom--md")},t.title),r.createElement("ul",{className:m},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:u},r.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:f},e.title))}))))}var v=a(59300),p=["sidebar","toc","children"];var E=function(e){var t=e.sidebar,a=e.toc,i=e.children,c=(0,n.Z)(e,p),s=t&&t.items.length>0;return r.createElement(o.Z,c,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},s&&r.createElement("aside",{className:"col col--3"},r.createElement(h,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&r.createElement("div",{className:"col col--2"},r.createElement(v.Z,{toc:a})))))}},16911:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(49231),r=a(25396),l=a(68070),o=a(11727),i=a(81527),c=a(18202);var s=function(e){var t=e.metadata,a=t.previousPage,r=t.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,c.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(i.Z,{className:"pagination-nav__link",to:a},n.createElement("div",{className:"pagination-nav__label"},"\xab"," ",n.createElement(c.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},r&&n.createElement(i.Z,{className:"pagination-nav__link",to:r},n.createElement("div",{className:"pagination-nav__label"},n.createElement(c.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},m=a(52650);var u=function(e){var t=e.metadata,a=e.items,i=e.sidebar,c=(0,r.Z)().siteConfig.title,u=t.blogDescription,d=t.blogTitle,f="/"===t.permalink?c:d;return n.createElement(l.Z,{title:f,description:u,wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"},sidebar:i},a.map((function(e){var t=e.content;return n.createElement(o.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},n.createElement(t,null))})),n.createElement(s,{metadata:t}))}},11727:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(49231),r=a(1506),l=a(54852),o=a(18202),i=a(81527),c=a(57502),s=a(52650),m=a(86603),u=a(10511),d="blogPostTitle_ySp2",f="blogPostData_2Uj4",g="blogPostDetailsFull_JnYV",h=a(2059),v="image_8uPR";var p=function(e){var t=e.author,a=t.name,r=t.title,l=t.url,o=t.imageURL;return n.createElement("div",{className:"avatar margin-bottom--sm"},o&&n.createElement(i.Z,{className:"avatar__photo-link avatar__photo",href:l},n.createElement("img",{className:v,src:o,alt:a})),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(i.Z,{href:l,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),r&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))},E="authorCol_NdLn";function _(e){var t=e.authors,a=e.assets;return 0===t.length?n.createElement(n.Fragment,null):n.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var l;return n.createElement("div",{className:(0,r.Z)("col col--6",E),key:t},n.createElement(p,{author:Object.assign({},e,{imageURL:null!=(l=a.authorsImageUrls[t])?l:e.imageURL})}))})))}var b=function(e){var t,a,v,p,E=(v=(0,s.c2)().selectMessage,function(e){var t=Math.ceil(e);return v(t,(0,o.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),b=(0,c.C)().withBaseUrl,N=e.children,Z=e.frontMatter,k=e.assets,w=e.metadata,L=e.truncated,y=e.isBlogPostPage,I=void 0!==y&&y,T=w.date,P=w.formattedDate,C=w.permalink,U=w.tags,A=w.readingTime,M=w.title,O=w.editUrl,x=w.authors,B=null!=(t=k.image)?t:Z.image;return n.createElement("article",{className:I?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(p=I?"h1":"h2",n.createElement("header",null,n.createElement(p,{className:d,itemProp:"headline"},I?M:n.createElement(i.Z,{itemProp:"url",to:C},M)),n.createElement("div",{className:(0,r.Z)(f,"margin-vert--md")},n.createElement("time",{dateTime:T,itemProp:"datePublished"},P),void 0!==A&&n.createElement(n.Fragment,null," \xb7 ",E(A))),n.createElement(_,{authors:x,assets:k}))),B&&n.createElement("meta",{itemProp:"image",content:b(B,{absolute:!0})}),n.createElement("div",{className:"markdown",itemProp:"articleBody"},n.createElement(l.Zo,{components:m.Z},N)),(U.length>0||L)&&n.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",(a={},a[g]=I,a))},U.length>0&&n.createElement("div",{className:(0,r.Z)("col",{"col--9":!I})},n.createElement(h.Z,{tags:U})),I&&O&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(u.Z,{editUrl:O})),!I&&L&&n.createElement("div",{className:"col col--3 text--right"},n.createElement(i.Z,{to:w.permalink,"aria-label":"Read more about "+M},n.createElement("b",null,n.createElement(o.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},10511:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(49231),r=a(18202),l=a(26260),o=a(23157),i=a(1506),c="iconEdit_H3Gn",s=["className"],m=function(e){var t=e.className,a=(0,o.Z)(e,s);return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(c,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},u=a(52650);function d(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},n.createElement(m,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},59300:function(e,t,a){a.d(t,{r:function(){return f},Z:function(){return g}});var n=a(49231),r=a(1506),l=a(52650);function o(e){var t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function i(e){var t,a=e.anchorTopOffset,n=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),r=n.find((function(e){return o(e).top>=a}));return r?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(r))?r:null!=(t=n[n.indexOf(r)-1])?t:null:n[n.length-1]}function c(){var e=(0,n.useRef)(0),t=(0,l.LU)().navbar.hideOnScroll;return(0,n.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}var s=function(e){var t=(0,n.useRef)(void 0),a=c();(0,n.useEffect)((function(){var n=e.linkClassName,r=e.linkActiveClassName;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(n),l=i({anchorTopOffset:a.current}),o=e.find((function(e){return l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,a){if(a){var n;t.current&&t.current!==e&&(null==(n=t.current)||n.classList.remove(r)),e.classList.add(r),t.current=e}else e.classList.remove(r)}(e,e===o)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,a])},m="tableOfContents_wVlX",u="table-of-contents__link",d={linkClassName:u,linkActiveClassName:"table-of-contents__link--active"};function f(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:u,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(f,{isChild:!0,toc:e.children}))}))):null}var g=function(e){var t=e.toc;return s(d),n.createElement("div",{className:(0,r.Z)(m,"thin-scrollbar")},n.createElement(f,{toc:t}))}},25557:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(49231),r=a(1506),l=a(81527),o="tag_Yj-Q",i="tagRegular_598j",c="tagWithCount_O5OO";var s=function(e){var t,a=e.permalink,s=e.name,m=e.count;return n.createElement(l.Z,{href:a,className:(0,r.Z)(o,(t={},t[i]=!m,t[c]=m,t))},s,m&&n.createElement("span",null,m))}},2059:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(49231),r=a(1506),l=a(18202),o=a(25557),i="tags_ZOTe",c="tag_8EEF";function s(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.Z)(i,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:c},n.createElement(o.Z,{name:t,permalink:a}))}))))}},96693:function(e,t,a){a.d(t,{dK:function(){return l},_k:function(){return o},vc:function(){return i},rx:function(){return c},qo:function(){return s},Hk:function(){return m},Iz:function(){return u}});var n=a(28901),r=a.n(n);a(78141)(r()),a(55357).w(r()),a(60884)(r());var l=["en","zh"],o=!1,i=null,c="24676ce0",s=8,m=50,u={search_placeholder:"\u641c\u7d22",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},25595:function(e,t,a){a.d(t,{Z:function(){return E}});var n=a(26260),r=a(23157),l=a(49231),o=a(1506),i=a(81527),c=a(65442),s=a(57502),m=a(19657),u=a(26622),d=a(97789),f={footerLogoLink:"footerLogoLink_94kH",footerItemIcons:"footerItemIcons_L3RU",footerItemIcon:"footerItemIcon_9u-Q",active:"active_P7Wi",qrcodeWrap:"qrcodeWrap_pGOd"},g=["to","href","label","prependBaseUrlToHref"];function h(e){var t=e.to,a=e.href,o=e.label,c=e.prependBaseUrlToHref,u=(0,r.Z)(e,g),f=(0,s.Z)(t),h=(0,s.Z)(a,{forcePrependBaseUrl:!0});return l.createElement(i.Z,(0,n.Z)({className:"footer__link-item"},a?{href:c?h:a}:{to:f},u),a&&!(0,m.Z)(a)?l.createElement("span",null,o,l.createElement(d.Z,null)):o)}function v(e){var t=(0,l.useState)(!1),a=t[0],n=t[1];if(e.html)return l.createElement("li",{className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}});if(e.icon){if(e.qrcode){var r=["footer__item",f.footerItemIcon,a?f.active:""];return l.createElement("a",{onClick:function(){return n(!a)},onMouseEnter:function(e){return function(e){e.preventDefault(),window.innerWidth>966&&n(!0)}(e)},onMouseLeave:function(e){return function(e){e.preventDefault(),window.innerWidth>966&&n(!1)}(e)},className:r.join(" ")},l.createElement("img",{width:"32",height:"32",src:e.icon,alt:e.alt}),l.createElement("span",{className:f.qrcodeWrap,style:{display:a?"flex":"none"}},l.createElement("img",{width:"108",height:"108",className:f.qrcode,src:e.qrcode,alt:e.label})))}return l.createElement("a",{href:e.to,className:"footer__item "+f.footerItemIcon},l.createElement("img",{width:"32",height:"32",src:e.icon,alt:e.alt}))}return l.createElement("li",{className:"footer__item"},l.createElement(h,e))}var p=function(e){var t=e.sources,a=e.alt;return l.createElement(u.Z,{className:"footer__logo",alt:a,sources:t})};var E=function(){var e=(0,c.LU)().footer,t=e||{},a=t.copyright,r=t.links,m=void 0===r?[]:r,u=t.logo,d=void 0===u?{}:u,g={light:(0,s.Z)(d.src),dark:(0,s.Z)(d.srcDark||d.src)};return e?l.createElement("footer",{className:(0,o.Z)("footer",{"footer--dark":"dark"===e.style})},l.createElement("div",{className:"container"},m&&m.length>0&&l.createElement("div",{className:"row footer__links"},m.map((function(e,t){return l.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.createElement("ul",{className:"footer__items"},null!=(a=e.items)&&Array.isArray(a)&&a.length>0?a[0].icon?l.createElement("ul",{className:"footer__items "+f.footerItemIcons},a.map((function(e,t){return l.createElement(v,(0,n.Z)({},e,{key:e.icon||e.href||e.to||t}))}))):l.createElement("ul",{className:"footer__items"},a.map((function(e,t){return l.createElement(v,(0,n.Z)({},e,{key:e.icon||e.href||e.to||t}))}))):null):null);var a}))),(d||a)&&l.createElement("div",{className:"footer__bottom text--center"},d&&(d.src||d.srcDark)&&l.createElement("div",{className:"margin-bottom--sm"},d.href?l.createElement(i.Z,{href:d.href,className:f.footerLogoLink},l.createElement(p,{alt:d.alt,sources:g})):l.createElement(p,{alt:d.alt,sources:g})),a?l.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:a}}):null))):null}}}]);