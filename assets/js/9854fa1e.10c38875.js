"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[9394],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(a),m=r,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||o;return a?n.createElement(f,l(l({ref:t},p),{},{components:a})):n.createElement(f,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2360:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294),r=a(6010),o="tabItem_OmH5";function l(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7462),r=a(7294),o=a(2389),l=a(7392),i=a(7094),u=a(2466),s=a(6010),p="tabList_uSqn",d="tabItem_LplD";function c(e){var t,a,o,c=e.lazy,m=e.block,f=e.defaultValue,g=e.values,h=e.groupId,v=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=g?g:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,l.l)(k,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===f?f:null!=(t=null!=f?f:null==(a=b.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(o=b[0])?void 0:o.props.value;if(null!==w&&!k.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,i.U)(),O=N.tabGroupChoices,P=N.setTabGroupChoices,T=(0,r.useState)(w),E=T[0],S=T[1],x=[],D=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var j=O[h];null!=j&&j!==E&&k.some((function(e){return e.value===j}))&&S(j)}var Z=function(e){var t=e.currentTarget,a=x.indexOf(t),n=k[a].value;n!==E&&(D(t),S(n),null!=h&&P(h,n))},I=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=x.indexOf(e.currentTarget)+1;a=x[n]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;a=x[r]||x[x.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":m},v)},k.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return x.push(e)},onKeyDown:I,onFocus:Z,onClick:Z},o,{className:(0,s.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":E===t})}),null!=a?a:t)}))),c?(0,r.cloneElement)(b.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function m(e){var t=(0,o.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},8246:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return m}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),l=a(9877),i=a(2360),u=["components"],s={description:"Flash image"},p="Download & Flash",d={unversionedId:"stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/download-and-flash",id:"stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/download-and-flash",title:"Download & Flash",description:"Flash image",source:"@site/docs/stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/download-and-flash.md",sourceDirName:"stake-pool-guides/pi-pool-tutorial/pi-node-full-guide",slug:"/stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/download-and-flash",permalink:"/docs/stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/download-and-flash",draft:!1,editUrl:"https://github.com/armada-alliance/docs/edit/master/docs/stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/download-and-flash.md",tags:[],version:"current",frontMatter:{description:"Flash image"},sidebar:"tutorialSidebar",previous:{title:"(GUIDE) Cardano Stake Pool with Raspberry Pi 4",permalink:"/docs/stake-pool-guides/pi-pool-tutorial/"},next:{title:"Logging in Securely",permalink:"/docs/stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/logging-in-securely"}},c={},m=[{value:"Flash Image",id:"flash-image",level:2}],f={toc:m};function g(e){var t=e.components,s=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"download--flash"},"Download & Flash"),(0,o.kt)("h2",{id:"flash-image"},"Flash Image"),(0,o.kt)("p",null,"Download, install & open ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/raspberrypi/rpi-imager/releases/latest"},"Raspberry Pi Imager"),". Plug in your target USB drive."),(0,o.kt)("p",null,"Ubuntu users can download and install with snapd."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo apt update\nsudo apt install snapd\nsudo snap install rpi-imager\n")),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Older models of the Pi4B 8GB need to have their boot loader updated to boot from USB. If your image won't boot remove the USB3 drive and use rpi-imager to flash Pi 4 EEPROM boot recovery to an sd card."),(0,o.kt)("p",{parentName:"div"},"Plug the Pi into a monitor, insert the sd card and power up. Once you see a green screen you should be good to boot from your USB3 drive. Newer versions are shipping with a USB boot capable boot loader. ",(0,o.kt)("strong",{parentName:"p"},"Feeling lucky?")),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Choose OS -> Misc utility images -> Bootloader -> USB Boot")),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"https://www.raspberrypi.org/documentation/hardware/raspberrypi/booteeprom.md"},"https://www.raspberrypi.org/documentation/hardware/raspberrypi/booteeprom.md")))),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(5123).Z,width:"1366",height:"844"})),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Pre configured Pi-Node.img.gz",label:"Pre configured Pi-Node.img.gz",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Obtain Pi-Node.img.gz file")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://mainnet.adamantium.online/Pi-Node.img.gz"},"Download Pi-Node")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Within Raspberry Pi Imager")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Choose OS -> Use custom")),(0,o.kt)("p",null,"Locate the .img.gz file you downloaded & wish to flash."),(0,o.kt)("p",null,"Locate your target drive & write it to disk."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(4262).Z,width:"680",height:"418"}))),(0,o.kt)(i.Z,{value:"Fresh Ubuntu 22.04 LTS installation",label:"Fresh Ubuntu 22.04 LTS installation",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Within Raspberry Pi Imager")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Download Ubuntu Server 22.04 (RPI 3/4/400)")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://cdimage.ubuntu.com/ubuntu-server/jammy/daily-preinstalled/current/jammy-preinstalled-server-arm64+raspi.img.xz"},"Raspberry Pi Generic (64-bit ARM) preinstalled server image")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Choose OS -> Use custom")),(0,o.kt)("p",null,"Locate the .img.gz file you downloaded & wish to flash. Locate your target drive & write it to disk."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(4262).Z,width:"680",height:"418"})))))}g.isMDXComponent=!0},4262:function(e,t,a){t.Z=a.p+"assets/images/custom-os-4520505f2502c6754c7cf5dbb6705892.png"},5123:function(e,t,a){t.Z=a.p+"assets/images/otgpoltut4-e7f06b6ddafa36e9b9839a2f8251f3a1.png"}}]);