"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[9817],{6487:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(7462),r=a(7294),i=a(3791),l=a(8596),c=a(5281),s={breadcrumbsContainer:"breadcrumbsContainer_Xlws",breadcrumbHomeIcon:"breadcrumbHomeIcon_kU5B"},o=a(6010),m=a(9960),d=a(4996),u=a(5999);function v(e){return r.createElement("svg",(0,n.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}function b(e){var t=e.children,a=e.href,n="breadcrumbs__link";return e.isLast?r.createElement("span",{className:n,itemProp:"name"},t):a?r.createElement(m.Z,{className:n,href:a,itemProp:"item"},r.createElement("span",{itemProp:"name"},t)):r.createElement("span",{className:n},t)}function h(e){var t=e.children,a=e.active,i=e.index,l=e.addMicrodata;return r.createElement("li",(0,n.Z)({},l&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,o.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,r.createElement("meta",{itemProp:"position",content:String(i+1)}))}function g(){var e=(0,d.Z)("/");return r.createElement("li",{className:"breadcrumbs__item"},r.createElement(m.Z,{"aria-label":(0,u.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,o.Z)("breadcrumbs__link",s.breadcrumbsItemLink),href:e},r.createElement(v,{className:s.breadcrumbHomeIcon})))}function f(){var e=(0,i.s1)(),t=(0,l.Ns)();return e?r.createElement("nav",{className:(0,o.Z)(c.k.docs.docBreadcrumbs,s.breadcrumbsContainer),"aria-label":(0,u.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},r.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&r.createElement(g,null),e.map((function(t,a){var n=a===e.length-1;return r.createElement(h,{key:a,active:n,index:a,addMicrodata:!!t.href},r.createElement(b,{href:t.href,isLast:n},t.label))})))):null}},8507:function(e,t,a){a.r(t),a.d(t,{default:function(){return C}});var n=a(7294),r=a(1944),i=a(3791),l=a(6010),c=a(9960),s="cardContainer_woeA",o="cardTitle_pNjP",m="cardDescription_qC_k",d=a(3919),u=a(5999);function v(e){var t=e.href,a=e.children;return n.createElement(c.Z,{href:t,className:(0,l.Z)("card padding--lg",s)},a)}function b(e){var t=e.href,a=e.icon,r=e.title,i=e.description;return n.createElement(v,{href:t},n.createElement("h2",{className:(0,l.Z)("text--truncate",o),title:r},a," ",r),i&&n.createElement("p",{className:(0,l.Z)("text--truncate",m),title:i},i))}function h(e){var t=e.item,a=(0,i.Wl)(t);return a?n.createElement(b,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,u.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){var t,a=e.item,r=(0,d.Z)(a.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,i.xz)(null!=(t=a.docId)?t:void 0);return n.createElement(b,{href:a.href,icon:r,title:a.label,description:null==l?void 0:l.description})}function f(e){var t=e.item;switch(t.type){case"link":return n.createElement(g,{item:t});case"category":return n.createElement(h,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function p(e){var t=e.items,a=e.className;return n.createElement("section",{className:(0,l.Z)("row",a)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,i.Wl)(e)}))}(t).map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{key:t,item:e}))})))}var E=a(5214),Z=a(4474),N=a(7597),k=a(6487),_=a(9649),L=a(4996),y="generatedIndexPage_vzzw",T="list_HAaG",w="title_qBh7";function x(e){var t=e.categoryGeneratedIndex;return n.createElement(r.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,L.Z)(t.image)})}function I(e){var t=e.categoryGeneratedIndex,a=(0,i.jA)();return n.createElement(n.Fragment,null,n.createElement(r.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,L.Z)(t.image)}),n.createElement("div",{className:y},n.createElement(Z.Z,null),n.createElement(k.Z,null),n.createElement(N.Z,null),n.createElement("header",null,n.createElement(_.Z,{as:"h1",className:w},t.title),t.description&&n.createElement("p",null,t.description)),n.createElement("article",{className:"margin-top--lg"},n.createElement(p,{items:a.items,className:T})),n.createElement("footer",{className:"margin-top--lg"},n.createElement(E.Z,{previous:t.navigation.previous,next:t.navigation.next}))))}function C(e){return n.createElement(n.Fragment,null,n.createElement(x,e),n.createElement(I,e))}},5214:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7462),r=a(7294),i=a(5999),l=a(6010),c=a(9960);function s(e){var t=e.permalink,a=e.title,n=e.subLabel,i=e.isNext;return r.createElement(c.Z,{className:(0,l.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},n&&r.createElement("div",{className:"pagination-nav__sublabel"},n),r.createElement("div",{className:"pagination-nav__label"},a))}function o(e){var t=e.previous,a=e.next;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&r.createElement(s,(0,n.Z)({},t,{subLabel:r.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&r.createElement(s,(0,n.Z)({},a,{subLabel:r.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},7597:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),r=a(5999),i=a(4477),l=a(5281),c=a(6010);function s(e){var t=e.className,a=(0,i.E)();return a.badge?n.createElement("span",{className:(0,c.Z)(t,l.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(r.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},4474:function(e,t,a){a.d(t,{Z:function(){return g}});var n=a(7294),r=a(2263),i=a(9960),l=a(5999),c=a(5551),s=a(373),o=a(5281),m=a(4477),d=a(6010);var u={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(l.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(l.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=u[e.versionMetadata.banner];return n.createElement(t,e)}function b(e){var t=e.versionLabel,a=e.to,r=e.onClick;return n.createElement(l.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(i.Z,{to:a,onClick:r},n.createElement(l.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function h(e){var t,a=e.className,i=e.versionMetadata,l=(0,r.Z)().siteConfig.title,m=(0,c.gA)({failfast:!0}).pluginId,u=(0,s.J)(m).savePreferredVersionName,h=(0,c.Jo)(m),g=h.latestDocSuggestion,f=h.latestVersionSuggestion,p=null!=g?g:(t=f).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,d.Z)(a,o.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:l,versionMetadata:i})),n.createElement("div",{className:"margin-top--md"},n.createElement(b,{versionLabel:f.label,to:p.path,onClick:function(){return u(f.name)}})))}function g(e){var t=e.className,a=(0,m.E)();return a.banner?n.createElement(h,{className:t,versionMetadata:a}):null}},9649:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7462),r=a(3366),i=a(7294),l=a(6010),c=a(5999),s=a(6668),o="anchorWithStickyNavbar_mojV",m="anchorWithHideOnScrollNavbar_R0VQ",d=["as","id"];function u(e){var t=e.as,a=e.id,u=(0,r.Z)(e,d),v=(0,s.L)().navbar.hideOnScroll;return"h1"!==t&&a?i.createElement(t,(0,n.Z)({},u,{className:(0,l.Z)("anchor",v?m:o),id:a}),u.children,i.createElement("a",{className:"hash-link",href:"#"+a,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):i.createElement(t,(0,n.Z)({},u,{id:void 0}))}}}]);