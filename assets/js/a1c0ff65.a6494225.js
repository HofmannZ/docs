"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[4751],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=o,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5319:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),i=["components"],l={description:"Turn Pi-Node into an active Cardano relay",keywords:["guides","cardano relay","cardano node","cardano stake pool","rasbperry pi","armada alliance","ubuntu"]},s="Pi-Relay",p={unversionedId:"stake-pool-guides/pi-pool-tutorial/pi-relay",id:"stake-pool-guides/pi-pool-tutorial/pi-relay",title:"Pi-Relay",description:"Turn Pi-Node into an active Cardano relay",source:"@site/docs/stake-pool-guides/pi-pool-tutorial/pi-relay.md",sourceDirName:"stake-pool-guides/pi-pool-tutorial",slug:"/stake-pool-guides/pi-pool-tutorial/pi-relay",permalink:"/armada-alliance-docusaurus/docs/stake-pool-guides/pi-pool-tutorial/pi-relay",draft:!1,editUrl:"https://github.com/armada-alliance/armada-alliance-docusaurus/edit/master/docs/stake-pool-guides/pi-pool-tutorial/pi-relay.md",tags:[],version:"current",frontMatter:{description:"Turn Pi-Node into an active Cardano relay",keywords:["guides","cardano relay","cardano node","cardano stake pool","rasbperry pi","armada alliance","ubuntu"]},sidebar:"tutorialSidebar",previous:{title:"Pi-Node (Quick Start)",permalink:"/armada-alliance-docusaurus/docs/stake-pool-guides/pi-pool-tutorial/pi-node"},next:{title:"Pi-Core",permalink:"/armada-alliance-docusaurus/docs/stake-pool-guides/pi-pool-tutorial/core-online"}},c={},d=[{value:"1. Configure hostname",id:"1-configure-hostname",level:2},{value:"2. Network",id:"2-network",level:2},{value:"2.1 Configure static IP",id:"21-configure-static-ip",level:3},{value:"2.2 Configure service port",id:"22-configure-service-port",level:3},{value:"2.3 Forward port on router",id:"23-forward-port-on-router",level:3},{value:"2.4 Topology Updater",id:"24-topology-updater",level:3},{value:"3. Enable cron job",id:"3-enable-cron-job",level:2},{value:"4. Wait for service on boarding (4 hours).",id:"4-wait-for-service-on-boarding-4-hours",level:2},{value:"5. Prune list of best (8) peers.",id:"5-prune-list-of-best-8-peers",level:2},{value:"6. Enable blockfetch tracing",id:"6-enable-blockfetch-tracing",level:2},{value:"7. Edit the alias name for Prometheus",id:"7-edit-the-alias-name-for-prometheus",level:2},{value:"8. Reboot",id:"8-reboot",level:2}],m={toc:d};function u(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pi-relay"},"Pi-Relay"),(0,r.kt)("p",null,"To turn Pi-Node into an active relay we have to follow the following steps:"),(0,r.kt)("h2",{id:"1-configure-hostname"},"1. Configure hostname"),(0,r.kt)("p",null,"To set a fully qualified domain name (FQDN) for our relay edit /etc/hostname & /etc/hosts."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo nano /etc/hostname\n")),(0,r.kt)("p",null,"Replace ubuntu with your desired FQDN."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"r1.example.com\n")),(0,r.kt)("p",null,"Save and exit."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo nano /etc/hosts\n")),(0,r.kt)("p",null,"Edit the file accordingly, take note that you may not be using the 192.168.1.xxx IP range."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="/etc/hosts"',title:'"/etc/hosts"'},"127.0.0.1 localhost\n127.0.1.1 r1.example.com r1\n\n# The following lines are desirable for IPv6 capable hosts\n::1 ip6-localhost ip6-loopback\nfe00::0 ip6-localnet\nff00::0 ip6-mcastprefix\nff02::1 ip6-allnodes\nff02::2 ip6-allrouters\nff02::3 ip6-allhosts\n\n")),(0,r.kt)("p",null,"Save and exit."),(0,r.kt)("h2",{id:"2-network"},"2. Network"),(0,r.kt)("h3",{id:"21-configure-static-ip"},"2.1 Configure static IP"),(0,r.kt)("p",null,"Open ",(0,r.kt)("strong",{parentName:"p"},"50-cloud-init.yaml")," and replace the contents of the file with below."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Netplan configuration examples")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://netplan.io/examples/"},"Netplan configuration examples")))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Be sure to use an address on your LAN subnet. In this example I am using ",(0,r.kt)("strong",{parentName:"p"},"192.168.1.xxx"),". Your network may very well be using a different private range."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo nano /etc/netplan/50-cloud-init.yaml\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="/etc/netplan/50-cloud-init.yaml"',title:'"/etc/netplan/50-cloud-init.yaml"'},"# This file is generated from information provided by the datasource.  Changes\n# to it will not persist across an instance reboot.  To disable cloud-init's\n# network configuration capabilities, write a file\n# /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg with the following:\n# network: {config: disabled}\nnetwork:\n  version: 2\n  renderer: networkd\n  ethernets:\n    eth0:\n      dhcp4: no\n      addresses:\n        - 192.168.1.151/24\n      gateway4: 192.168.1.1\n      nameservers:\n# Home router IP & QUAD9 https://quad9.net/\n          addresses: [192.168.1.1, 9.9.9.9, 149.112.112.112]\n\n")),(0,r.kt)("p",null,"Create a file named ",(0,r.kt)("strong",{parentName:"p"},"99-disable-network-config.cfg")," to disable cloud-init."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo nano /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg\n")),(0,r.kt)("p",null,"Add the following, save and exit."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="/etc/cloud/cloud.cfg.d/99-disable-network-config.cfg"',title:'"/etc/cloud/cloud.cfg.d/99-disable-network-config.cfg"'},"network: {config: disabled}\n")),(0,r.kt)("p",null,"Apply your changes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo netplan apply\n")),(0,r.kt)("h3",{id:"22-configure-service-port"},"2.2 Configure service port"),(0,r.kt)("p",null,"Open the ~/.adaenv file and change the port it listens on. For R1 or my first relay I will designate port 3001."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"nano $HOME/.adaenv\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="~/.adaenv"',title:'"~/.adaenv"'},"export NODE_PORT=3001\n")),(0,r.kt)("p",null,"Save and exit. ",(0,r.kt)("strong",{parentName:"p"},"ctrl+x then y"),"."),(0,r.kt)("p",null,"Enable cardano-service at boot & restart the service to load changes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cardano-service enable\ncardano-service restart\n")),(0,r.kt)("h3",{id:"23-forward-port-on-router"},"2.3 Forward port on router"),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Do not forward a port to your Core machine it only connects to your relay(s) on your LAN."))),(0,r.kt)("p",null,"Log into your router and forward port 3001 to your relay nodes LAN IPv4 address port 3001. Second relay forward port 3002 to LAN IPv4 address for relay 2 to port 3002."),(0,r.kt)("h3",{id:"24-topology-updater"},"2.4 Topology Updater"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cd $NODE_HOME/scripts\n")),(0,r.kt)("p",null,"Configure the script to match your environment."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},'If you are using IPv4 leave CNODE_HOSTNAME the way it is. The service will pick up your public IP address on it\'s own. I repeat only change the port to 3001. For DNS change only the first instance. Do not edit "CHANGE ME" further down in the file.'))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cd ${NODE_HOME}/scripts/\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"nano topologyUpdater.sh\n")),(0,r.kt)("p",null,"Run the updater once to confirm it is working."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"./topologyUpdater.sh\n")),(0,r.kt)("p",null,"Should look similar to this."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},'{ "resultcode": "201", "datetime":"2021-05-20 10:13:40", "clientIp": "1.2.3.4", "iptype": 4, "msg": "nice to meet you" }'))),(0,r.kt)("h2",{id:"3-enable-cron-job"},"3. Enable cron job"),(0,r.kt)("p",null,"Enable the cron job by removing the # character from crontab."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"crontab -e\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="crontab"',title:'"crontab"'},"33 * * * * /home/ada/pi-pool/scripts/topologyUpdater.sh\n")),(0,r.kt)("p",null,"Save and exit."),(0,r.kt)("h2",{id:"4-wait-for-service-on-boarding-4-hours"},"4. Wait for service on boarding (4 hours)."),(0,r.kt)("p",null,"After four hours of on boarding your relay(s) will start to be available to other peers on the network. ",(0,r.kt)("strong",{parentName:"p"},"topologyUpdater.sh")," will create a list in ${NODE_HOME}/logs."),(0,r.kt)("h2",{id:"5-prune-list-of-best-8-peers"},"5. Prune list of best (8) peers."),(0,r.kt)("p",null,"Open your topolgy file and use ",(0,r.kt)("strong",{parentName:"p"},"ctrl+k")," to cut the entire line of any peer over 5,000 miles away."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Remember to remove the last entries comma in your list or cardano-node will fail to start."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"nano ${NODE_HOME}/files/${NODE_CONFIG}-topology.json\n")),(0,r.kt)("h2",{id:"6-enable-blockfetch-tracing"},"6. Enable blockfetch tracing"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'sed -i ${NODE_FILES}/mainnet-config.json \\\n    -e "s/TraceBlockFetchDecisions\\": false/TraceBlockFetchDecisions\\": true/g"\n')),(0,r.kt)("p",null,"Reboot your new relay and let it sync back to the tip of the chain."),(0,r.kt)("p",null,"Use gLiveView.sh to view peer info."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cd /home/ada/pi-pool/scripts\n./gLiveView.sh\n")),(0,r.kt)("p",null,"Many operators block icmp syn packets(ping) because of a security flaw that was patched a decade ago. So expect to see --- for RTT because we are not receiving a response from that server."),(0,r.kt)("p",null,"More incoming connections is generally a good thing, it increases the odds that you will get network data sooner. Though you may want to put a limit on how many connect. The only way to stop incoming connections would be to block the IPv4 address with ufw."),(0,r.kt)("h2",{id:"7-edit-the-alias-name-for-prometheus"},"7. Edit the alias name for Prometheus"),(0,r.kt)("p",null,"Last thing we can do is change the alias name Prometheus is serving to Grafana. You will have to go into Grafana and edit the panels alias accordingly as well."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo nano /etc/prometheus/prometheus.yml\n")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In an upcoming guide I will show how to have Prometheus running on a separate Pi scraping data from the pool instead of having Prometheus using system resources on those machines."),(0,r.kt)("p",{parentName:"div"},"For now you can change the alias name Prometheus is serving to Grafana:"),(0,r.kt)("blockquote",{parentName:"div"},(0,r.kt)("p",{parentName:"blockquote"}," alias: 'N1'")),(0,r.kt)("p",{parentName:"div"},"to"),(0,r.kt)("blockquote",{parentName:"div"},(0,r.kt)("p",{parentName:"blockquote"},"alias: 'R1'")))),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This is a yaml file and indentation has to be correct."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="/etc/prometheus/prometheus.yml"',title:'"/etc/prometheus/prometheus.yml"'},"global:\n  scrape_interval:     15s # By default, scrape targets every 15 seconds.\n\n  # Attach these labels to any time series or alerts when communicating with\n  # external systems (federation, remote storage, Alertmanager).\n  external_labels:\n    monitor: 'codelab-monitor'\n\n# A scrape configuration containing exactly one endpoint to scrape:\n# Here it's Prometheus itself.\nscrape_configs:\n  # The job name is added as a label job=<job_name> to any timeseries scraped from this config.\n  - job_name: 'Prometheus' # To scrape data from the cardano node\n    scrape_interval: 5s\n    static_configs:\n#      - targets: ['<CORE PRIVATE IP>:12798']\n#        labels:\n#          alias: 'C1'\n#          type:  'cardano-node'\n#      - targets: ['<RELAY PRIVATE IP>:12798']\n#        labels:\n#          alias: 'R1'\n#          type:  'cardano-node'\n      - targets: ['localhost:12798']\n        labels:\n          alias: 'R1'\n          type:  'cardano-node'\n\n#      - targets: ['<CORE PRIVATE IP>:9100']\n#        labels:\n#          alias: 'C1'\n#          type:  'node'\n#      - targets: ['<RELAY PRIVATE IP>:9100']\n#        labels:\n#          alias: 'R1'\n#          type:  'node'\n      - targets: ['localhost:9100']\n        labels:\n          alias: 'R1'\n          type:  'node'\n")),(0,r.kt)("p",null,"Update, save and exit."),(0,r.kt)("h2",{id:"8-reboot"},"8. Reboot"),(0,r.kt)("p",null,"Reboot the server and give it a while to sync back up. That is just about it. Please feel free to join our Telegram channel for support. ",(0,r.kt)("a",{parentName:"p",href:"https://t.me/armada_alli"},"https://t.me/armada_alli")))}u.isMDXComponent=!0}}]);