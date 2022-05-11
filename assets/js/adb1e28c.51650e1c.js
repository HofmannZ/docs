"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[9180],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},814:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],l={},p="Alpine Linux OS \ud83d\uddfb",s={unversionedId:"stake-pool-guides/alpine-linux-os",id:"stake-pool-guides/alpine-linux-os",title:"Alpine Linux OS \ud83d\uddfb",description:"Why use AlpineOS on the Raspberry Pi? Here are some reasons:",source:"@site/docs/stake-pool-guides/alpine-linux-os.md",sourceDirName:"stake-pool-guides",slug:"/stake-pool-guides/alpine-linux-os",permalink:"/armada-alliance-docusaurus/docs/stake-pool-guides/alpine-linux-os",draft:!1,editUrl:"https://github.com/rekuenkdr/armada-alliance-docusaurus/edit/master/docs/stake-pool-guides/alpine-linux-os.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Raspi-Node Guide \ud83c\udf53",permalink:"/armada-alliance-docusaurus/docs/stake-pool-guides/Raspberry-pi-os"},next:{title:"Apple M1 macOS \ud83c\udf4f",permalink:"/armada-alliance-docusaurus/docs/stake-pool-guides/apple-m1-guide/"}},d={},c=[{value:"Why use AlpineOS on the Raspberry Pi? Here are some reasons:",id:"why-use-alpineos-on-the-raspberry-pi-here-are-some-reasons",level:2},{value:"If you have previously used this guide and intend to update the scripts. Follow these steps. Then follow the rest of the steps outlined in this guide accordingly \ud83d\ude42.",id:"if-you-have-previously-used-this-guide-and-intend-to-update-the-scripts-follow-these-steps-then-follow-the-rest-of-the-steps-outlined-in-this-guide-accordingly-",level:2},{value:"Upgrading to Alpine v3.15 from Alpine v3.14:",id:"upgrading-to-alpine-v315-from-alpine-v314",level:2},{value:"Initial Setup for AlpineOS on Raspberry Pi 4B 8GB:",id:"initial-setup-for-alpineos-on-raspberry-pi-4b-8gb",level:2},{value:"Installing/Upgrading the &#39;cardano-node&#39; and &#39;cardano-cli&#39; static binaries (AlpineOS uses static binaries almost exclusively so avoid non-static builds)",id:"installingupgrading-the-cardano-node-and-cardano-cli-static-binaries-alpineos-uses-static-binaries-almost-exclusively-so-avoid-non-static-builds",level:2},{value:"Install the Armada Alliance Alpine Linux Cardano node service",id:"install-the-armada-alliance-alpine-linux-cardano-node-service",level:2},{value:"Setup prometheus and node exporter",id:"setup-prometheus-and-node-exporter",level:2},{value:"General Troubleshooting",id:"general-troubleshooting",level:2}],u={toc:c};function m(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"alpine-linux-os-"},"Alpine Linux OS \ud83d\uddfb"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(570).Z,width:"831",height:"487"})),(0,r.kt)("h2",{id:"why-use-alpineos-on-the-raspberry-pi-here-are-some-reasons"},"Why use AlpineOS on the Raspberry Pi? Here are some reasons:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Very low memory consumption (","~","50MB utilized during idle vs ","~","350MB for Ubuntu 20.04).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Lower CPU overhead")," ",(0,r.kt)("strong",{parentName:"li"},"(27 tasks/ 31 threads active for Alpine vs 57 tasks / 111 threads for Ubuntu when cardano-node is running).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cooler Pi \ud83d\ude0e (Literally, CPU runs cooler because of the lower CPU overhead).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"And finally, why not? If you're gonna use static binaries, might as well take advantage of AlpineOS \ud83d\ude1c"))),(0,r.kt)("h2",{id:"if-you-have-previously-used-this-guide-and-intend-to-update-the-scripts-follow-these-steps-then-follow-the-rest-of-the-steps-outlined-in-this-guide-accordingly-"},"If you have previously used this guide and intend to update the scripts. Follow these steps. Then follow the rest of the steps outlined in this guide accordingly \ud83d\ude42."),(0,r.kt)("p",null,"1",")"," Update the git local repo."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd ~/alpine-rpi-os\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git fetch --recurse-submodules --tags --all\n")),(0,r.kt)("p",null,"2",")"," Identify the latest tag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git tag\n")),(0,r.kt)("p",null,"3",")"," Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<tag>")," in this step with the latest tag such as ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.5.0"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git checkout tags/<tag>\n")),(0,r.kt)("h2",{id:"upgrading-to-alpine-v315-from-alpine-v314"},"Upgrading to Alpine v3.15 from Alpine v3.14:"),(0,r.kt)("p",null,"1",")"," Update your current version of AlpineOS."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo apk update\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo apk upgrade\n")),(0,r.kt)("p",null,"2",")"," Edit the repository to reflect Alpine v3.15."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo sed -i 's@v3.14@v3.15@g' /etc/apk/repositories\n")),(0,r.kt)("p",null,"3",")"," Update the package list."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo apk update\n")),(0,r.kt)("p",null,"4",")"," Upgrading packages to v3.15"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo apk add --upgrade apk-tools\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo apk upgrade --available\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo sync\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo reboot now\n")),(0,r.kt)("p",null,"5",")"," Now you should have AlpineOS upgraded to v3.15 \ud83c\udf77."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cat /etc/alpine-release\n")),(0,r.kt)("p",null,"6",")"," To troubleshoot the upgrade, refer to the link: ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.alpinelinux.org/wiki/Upgrading_Alpine"},"https://wiki.alpinelinux.org/wiki/Upgrading","_","Alpine")),(0,r.kt)("h2",{id:"initial-setup-for-alpineos-on-raspberry-pi-4b-8gb"},"Initial Setup for AlpineOS on Raspberry Pi 4B 8GB:"),(0,r.kt)("p",null,"1",")"," Download the AlpineOS for RPi 4 aarch64 ",(0,r.kt)("a",{parentName:"p",href:"https://dl-cdn.alpinelinux.org/alpine/v3.15/releases/aarch64/alpine-rpi-3.15.0-aarch64.tar.gz"},"here"),"."),(0,r.kt)("p",null,"2",")"," Decompress the .tar.gz file and copy it's contents into an SSD/SD card"),(0,r.kt)("p",null,"3",")"," Plug in a keyboard and monitor."),(0,r.kt)("p",null,"4",")"," Login with username 'root'."),(0,r.kt)("p",null,"5",")"," Run the command ",(0,r.kt)("inlineCode",{parentName:"p"},"setup-alpine")," and follow the instructions."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"When you are in ",(0,r.kt)("inlineCode",{parentName:"p"},"setup-alpine")," you will be prompted to choose the system disk. Once you are at this point, enter, ",(0,r.kt)("inlineCode",{parentName:"p"},"y"),", to setup disk and create the partition for ",(0,r.kt)("inlineCode",{parentName:"p"},"sys"),"."))),(0,r.kt)("p",null,"6",")"," Reboot."),(0,r.kt)("p",null,"7",")"," Add a new user called cardano via the command ",(0,r.kt)("inlineCode",{parentName:"p"},"adduser cardano")," and its password as instructed."),(0,r.kt)("p",null,"8",")"," Run the following commands to grant the new user root privileges"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apk add sudo\necho '%wheel ALL=(ALL) ALL' > /etc/sudoers.d/wheel\naddgroup cardano wheel\naddgroup cardano sys\naddgroup cardano adm\naddgroup cardano root\naddgroup cardano bin\naddgroup cardano daemon\naddgroup cardano disk\naddgroup cardano floppy\naddgroup cardano dialout\naddgroup cardano tape\naddgroup cardano video\n")),(0,r.kt)("p",null,"9",")"," Either exit root via the command ",(0,r.kt)("inlineCode",{parentName:"p"},"exit")," or reboot and login to cardano"),(0,r.kt)("p",null,"10",")"," Install bash to ensure bash script compatibility"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    sudo apk add bash\n")),(0,r.kt)("p",null,"11",")"," Also install git and wget, we will need it later."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    sudo apk add git wget\n")),(0,r.kt)("p",null,"12",")"," By default, AlpineOS uses the powersave governor which sets CPU frequency at the lowest. To use the ondemand governor which scales CPU frequency according to system load, ",(0,r.kt)("inlineCode",{parentName:"p"},"cpufreq.start")," is included in this repo which should be added to /etc/local.d/. You may run the following commands to do this for you."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    cd ~\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    git clone https://github.com/armada-alliance/alpine-rpi-os\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    git tag\n")),(0,r.kt)("p",null,"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<tag>")," with the latest tag in the next command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    git checkout tags/<tag>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    sudo cp alpine-rpi-os/alpine_cnode_scripts_and_services/etc/local.d/cpufreq.start /etc/local.d/\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    sudo chmod +x /etc/local.d/cpufreq.start\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    sudo rc-update add local default\n")),(0,r.kt)("p",null,"12",")"," ",(0,r.kt)("strong",{parentName:"p"},"[","CPU Governor - Optional]")," By default, AlpineOS uses the powersave governor which sets CPU frequency at the lowest. To use the ondemand governor which scales CPU frequency according to system load, ",(0,r.kt)("inlineCode",{parentName:"p"},"cpufreq.start")," is included in this repo which should be added to /etc/local.d/. You may run the following commands to do this for you."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    cd ~\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    git clone https://github.com/armada-alliance/alpine-rpi-os\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    cd alpine-rpi-os\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    sudo cp alpine-rpi-os/alpine_cnode_scripts_and_services/etc/local.d/cpufreq.start /etc/local.d/\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    sudo chmod +x /etc/local.d/cpufreq.start\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    sudo rc-update add local default\n")),(0,r.kt)("p",null,"13",")"," ",(0,r.kt)("strong",{parentName:"p"},"[","ZRAM - Optional]")," To alleviate RAM limitation on RPi, ZRAM is recommended to enable RAM compression. Use the following steps to install zram-init and install the scripts. The scripts provided will enable a 50% boost in useable RAM capacity. This step assumes you have followed step 12."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    sudo apk add zram-init\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    sudo cp alpine-rpi-os/alpine_cnode_scripts_and_services/etc/local.d/zram.* /etc/local.d/\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    sudo chmod +x /etc/local.d/zram.*\n")),(0,r.kt)("p",null,"14",")"," Reboot the system. For the Raspberry Pi 4B 8GB, you should expect around 3.81GB of swap via ZRAM when checking with ",(0,r.kt)("inlineCode",{parentName:"p"},"htop")," (",(0,r.kt)("inlineCode",{parentName:"p"},"sudo apk add htop")," if htop is unavailable)."),(0,r.kt)("h2",{id:"installingupgrading-the-cardano-node-and-cardano-cli-static-binaries-alpineos-uses-static-binaries-almost-exclusively-so-avoid-non-static-builds"},"Installing/Upgrading the 'cardano-node' and 'cardano-cli' static binaries (AlpineOS uses static binaries almost exclusively so avoid non-static builds)"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"You may obtain the static binaries for version 1.33.0 via this")," ",(0,r.kt)("a",{parentName:"p",href:"https://dl-cdn.alpinelinux.org/alpine/v3.15/releases/aarch64/alpine-rpi-3.15.0-aarch64.tar.gz"},(0,r.kt)("strong",{parentName:"a"},"link")," "),(0,r.kt)("strong",{parentName:"p"},"thanks to Moritz Angermann, the SPO of ZW3RK pool \ud83d\ude4f")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Run the following commands to download and install the binaries into the correct directory.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download the binaries")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    wget -O ~/aarch64-unknown-linux-musl-cardano-node-1.33.0.zip https://ci.zw3rk.com/build/427926/download/1/aarch64-unknown-linux-musl-cardano-node-1.33.0.zip\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unzip and install the binaries via the commands")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    unzip -d ~/ aarch64-unknown-linux-musl-cardano-node-1.33.0.zip\n\n    sudo mv ~/cardano-node/* /usr/local/bin/\n")),(0,r.kt)("h2",{id:"install-the-armada-alliance-alpine-linux-cardano-node-service"},"Install the Armada Alliance Alpine Linux Cardano node service"),(0,r.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"success")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"If you have decided to use AlpineOS for your Cardano stake pool operations, you may find this collection of scripts and services useful.")))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"To install the scripts and services correctly don't skip steps \ud83c\udff4\u200d\u2620\ufe0f\ud83d\ude0e")))),(0,r.kt)("p",null,"1",")"," Clone this repo to obtain the neccessary folder and scripts to quickly start your cardano node. You may skip this step if you have already clonned this repo from step 12 when setting up AlpineOS."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    cd ~\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    git clone https://github.com/armada-alliance/alpine-rpi-os\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    git tag\n")),(0,r.kt)("p",null,"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<tag>")," with the latest tag in the next command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    git checkout tags/<tag>\n")),(0,r.kt)("p",null,"2",")"," Run the following commands to then install the ",(0,r.kt)("strong",{parentName:"p"},"cnode")," folder, scripts, and services into the correct folders. The ",(0,r.kt)("strong",{parentName:"p"},"cnode")," folder contains everything a ",(0,r.kt)("strong",{parentName:"p"},"Cardano node")," needs to start as a functional relay node."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    cd ~\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    cp -r alpine-rpi-os/alpine_cnode_scripts_and_services/home/cardano/* ~/\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    sudo cp alpine-rpi-os/alpine_cnode_scripts_and_services/etc/init.d/* /etc/init.d/\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    chmod +x ~/start_stop_cnode_service.sh ~/cnode/autorestart_cnode.sh\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    sudo chmod +x /etc/init.d/cardano-node /etc/init.d/prometheus /etc/init.d/node-exporter\n")),(0,r.kt)("p",null,"3",")"," For faster syncing, consider this optional command for downloading the latest db folder hosted by one of our Alliance members."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'    wget -r -np -nH -R "index.html*" -e robots=off https://mainnet.adamantium.online/db/ -P ~/cnode\n')),(0,r.kt)("p",null,"4",")"," Follow the guide written in ",(0,r.kt)("strong",{parentName:"p"},"README.txt")," contained in the ",(0,r.kt)("strong",{parentName:"p"},"$HOME")," directory after installing ",(0,r.kt)("strong",{parentName:"p"},"cnode"),", scripts, and services."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    more ~/README.txt\n")),(0,r.kt)("h2",{id:"setup-prometheus-and-node-exporter"},"Setup prometheus and node exporter"),(0,r.kt)("p",null,"1",")"," Download Prometheus and node-exporter into the home directory"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    wget -O ~/prometheus.tar.gz https://github.com/prometheus/prometheus/releases/download/v2.32.1/prometheus-2.32.1.linux-arm64.tar.gz\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    wget -O ~/node_exporter.tar.gz https://github.com/prometheus/node_exporter/releases/download/v1.3.1/node_exporter-1.3.1.linux-arm64.tar.gz\n")),(0,r.kt)("p",null,"2",")"," Extract the tarballs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tar -xzvf prometheus.tar.gz\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tar -xzvf node_exporter.tar.gz\n")),(0,r.kt)("p",null,"3",")"," If you are upgrading from previous versions of prometheus and node-exporter, make a backup. You may delete these folders if they do not contain anything useful."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mv prometheus prometheus-bak\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mv node_exporter node_exporter-bak\n")),(0,r.kt)("p",null,"4",")"," Rename the folders with the following commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    mv prometheus-2.32.1.linux-arm64 prometheus\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    mv node_exporter-1.3.1.linux-arm64 node_exporter\n")),(0,r.kt)("p",null,"4",")"," Follow the guide written in ",(0,r.kt)("strong",{parentName:"p"},"README.txt")," contained in the $HOME directory after installing cnode, scripts and services to start the services accordingly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    more ~/README.txt\n")),(0,r.kt)("h2",{id:"general-troubleshooting"},"General Troubleshooting"),(0,r.kt)("p",null,"1",")"," If you have trouble with port forwarding via SSH, run the following command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo nano /etc/ssh/sshd_config\n")),(0,r.kt)("p",null,"Edit the line ",(0,r.kt)("inlineCode",{parentName:"p"},"AllowTcpForwarding no")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"AllowTcpForwarding yes")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Make sure this line is not commented out with a",(0,r.kt)("inlineCode",{parentName:"p"},"#")))),(0,r.kt)("p",null,"2",")"," If you run into a situation where you get the error:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"/lib/rc/sh/openrc-run.sh: source: line 10: can't open '/home//cnode","_","env': No such file or directory")),(0,r.kt)("p",null,"Do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"export USER=$(whoami)\nsudo ash -c \"echo 'export USER=$USER' >> /etc/profile\"\n")),(0,r.kt)("p",null,"Then reboot:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo reboot\n")),(0,r.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"success")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"We would like to give a special shoutout to our ",(0,r.kt)("a",{parentName:"p",href:"https://armada-alliance.com"},"alliance member"),", ",(0,r.kt)("a",{parentName:"p",href:"https://armada-alliance.com/identities/sayshar-srn"},"Sayshar"),", operator of ",(0,r.kt)("a",{parentName:"p",href:"https://armada-alliance.com/stake-pools/cc1b1c03798884c636703443a23b8d9e827d6c0417921600394198a0"},"[","SRN","]"," Pool"),", for providing this tutorial \ud83c\udff4\u200d\u2620\ufe0f \ud83d\ude4f \ud83d\ude0e"))))}m.isMDXComponent=!0},570:function(e,t,n){t.Z=n.p+"assets/images/alpine-linux-de27bffbc88f3df56e5f86d4a4221fc5.png"}}]);