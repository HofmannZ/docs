"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[4866],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return h}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=d(t),h=o,m=c["".concat(l,".").concat(h)]||c[h]||p[h]||s;return t?a.createElement(m,i(i({ref:n},u),{},{components:t})):a.createElement(m,i({ref:n},u))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=c;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var d=2;d<s;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7894:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return p}});var a=t(7462),o=t(3366),s=(t(7294),t(3905)),i=["components"],r={description:"Create the ada user, add to group sudo"},l="User Setup",d={unversionedId:"stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/user-setup",id:"stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/user-setup",title:"User Setup",description:"Create the ada user, add to group sudo",source:"@site/docs/stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/user-setup.md",sourceDirName:"stake-pool-guides/pi-pool-tutorial/pi-node-full-guide",slug:"/stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/user-setup",permalink:"/armada-alliance-docusaurus/docs/stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/user-setup",draft:!1,editUrl:"https://github.com/armada-alliance/armada-alliance-docusaurus/edit/master/docs/stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/user-setup.md",tags:[],version:"current",frontMatter:{description:"Create the ada user, add to group sudo"},sidebar:"tutorialSidebar",previous:{title:"Logging in Securely",permalink:"/armada-alliance-docusaurus/docs/stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/logging-in-securely"},next:{title:"Server Setup",permalink:"/armada-alliance-docusaurus/docs/stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/server-setup"}},u={},p=[{value:"Create the ada user",id:"create-the-ada-user",level:2},{value:"Change password",id:"change-password",level:3},{value:"Login as ada",id:"login-as-ada",level:3},{value:"ssh",id:"ssh",level:2}],c={toc:p};function h(e){var n=e.components,t=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"user-setup"},"User Setup"),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"If you are using a Pi-Node image you need only reference this material. The guide builds the image you can download."))),(0,s.kt)("h2",{id:"create-the-ada-user"},"Create the ada user"),(0,s.kt)("p",null,"Create a new user and add it to the sudo group."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo adduser ada; sudo adduser ada sudo\n")),(0,s.kt)("h3",{id:"change-password"},"Change password"),(0,s.kt)("p",null,"You can change the users password at anytime with."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"passwd\n")),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Careful where you use sudo. For example issuing 'sudo passwd' would change the root password. This seems to be a place where new users get confused."))),(0,s.kt)("h3",{id:"login-as-ada"},"Login as ada"),(0,s.kt)("p",null,"Let's add our ssh public key to our new $USER ada's authorized","_","keys file. Then we can log in as ada and delete the default 'ubuntu' user."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"# drop back into your local terminal\nexit\n")),(0,s.kt)("p",null,"Use ssh-copy-id to add your public key to ada users authorized","_","keys file."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"ssh-copy-id -i <ed25519-keyname.pub> ada@<server-ip>\n")),(0,s.kt)("p",null,"and ssh into the Pi as ada."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"ssh ada@<server-ip>\n")),(0,s.kt)("p",null,"Test that ada is in the sudo group by updating your package lists and upgrading the system."),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"If you get error about repos and time it is because the clock is not set. Install chrony now to fix, otherwise we will install and configure it later."))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo apt update; sudo apt upgrade -y\n")),(0,s.kt)("p",null,"We can delete the default ubuntu user and it's home directory."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo deluser --remove-home ubuntu\n")),(0,s.kt)("h2",{id:"ssh"},"ssh"),(0,s.kt)("p",null,"Edit OpenSSH's configuration file and make the following changes with Nano text editor."),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Check out this ",(0,s.kt)("a",{parentName:"p",href:"https://www.nano-editor.org/dist/latest/cheatsheet.html"},"nano cheat sheet")," I just found!"),(0,s.kt)("p",{parentName:"div"},"All the ","#"," commented out values in sshd","_","config are the default values. Remove the pound sign and change the value to match below. They will be loaded the next time systemd restarts ssh."))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo nano /etc/ssh/sshd_config\n")),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Turn off password authentication."))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"#    $OpenBSD: sshd_config,v 1.103 2018/04/09 20:41:22 tj Exp $\n\n# This is the sshd server system-wide configuration file.  See\n# sshd_config(5) for more information.\n\n# This sshd was compiled with PATH=/usr/bin:/bin:/usr/sbin:/sbin\n\n# The strategy used for options in the default sshd_config shipped with\n# OpenSSH is to specify options with their default value where\n# possible, but leave them commented.  Uncommented options override the\n# default value.\n\nInclude /etc/ssh/sshd_config.d/*.conf\n\n#Port 22\n#AddressFamily any\n#ListenAddress 0.0.0.0\n#ListenAddress ::\n\n#HostKey /etc/ssh/ssh_host_rsa_key\n#HostKey /etc/ssh/ssh_host_ecdsa_key\n#HostKey /etc/ssh/ssh_host_ed25519_key\n\n# Ciphers and keying\n#RekeyLimit default none\n\n# Logging\n#SyslogFacility AUTH\n#LogLevel INFO\n\n# Authentication:\n\n#LoginGraceTime 2m\n#PermitRootLogin prohibit-password\n#StrictModes yes\n#MaxAuthTries 2\n#MaxSessions 10\n\n#PubkeyAuthentication yes\n\n# Expect .ssh/authorized_keys2 to be disregarded by default in future.\n#AuthorizedKeysFile    .ssh/authorized_keys .ssh/authorized_keys2\n\n#AuthorizedPrincipalsFile none\n\n#AuthorizedKeysCommand none\n#AuthorizedKeysCommandUser nobody\n\n# For this to work you will also need host keys in /etc/ssh/ssh_known_hosts\n#HostbasedAuthentication no\n# Change to yes if you don't trust ~/.ssh/known_hosts for\n# HostbasedAuthentication\n#IgnoreUserKnownHosts no\n# Don't read the user's ~/.rhosts and ~/.shosts files\n#IgnoreRhosts yes\n\n# To disable tunneled clear text passwords, change to no here!\nPasswordAuthentication no\n#PermitEmptyPasswords no\n\n# Change to yes to enable challenge-response passwords (beware issues with\n# some PAM modules and threads)\nChallengeResponseAuthentication no\n\n# Kerberos options\n#KerberosAuthentication no\n#KerberosOrLocalPasswd yes\n#KerberosTicketCleanup yes\n#KerberosGetAFSToken no\n\n# GSSAPI options\n#GSSAPIAuthentication no\n#GSSAPICleanupCredentials yes\n#GSSAPIStrictAcceptorCheck yes\n#GSSAPIKeyExchange no\n\n# Set this to 'yes' to enable PAM authentication, account processing,\n# and session processing. If this is enabled, PAM authentication will\n# be allowed through the ChallengeResponseAuthentication and\n# PasswordAuthentication.  Depending on your PAM configuration,\n# PAM authentication via ChallengeResponseAuthentication may bypass\n# the setting of \"PermitRootLogin without-password\".\n# If you just want the PAM account and session checks to run without\n# PAM authentication, then enable this but set PasswordAuthentication\n# and ChallengeResponseAuthentication to 'no'.\nUsePAM yes\n\n#AllowAgentForwarding yes\n#AllowTcpForwarding yes\n#GatewayPorts no\nX11Forwarding yes\n#X11DisplayOffset 10\n#X11UseLocalhost yes\n#PermitTTY yes\nPrintMotd no\n#PrintLastLog yes\n#TCPKeepAlive yes\n#PermitUserEnvironment no\n#Compression delayed\n#ClientAliveInterval 0\n#ClientAliveCountMax 3\n#UseDNS no\n#PidFile /var/run/sshd.pid\n#MaxStartups 10:30:100\n#PermitTunnel no\n#ChrootDirectory none\n#VersionAddendum none\n\n# no default banner path\n#Banner none\n\n# Allow client to pass locale environment variables\nAcceptEnv LANG LC_*\n\n# override default of no subsystems\nSubsystem sftp  /usr/lib/openssh/sftp-server\n\n# Example of overriding settings on a per-user basis\n#Match User anoncvs\n#       X11Forwarding no\n#       AllowTcpForwarding no\n#       PermitTTY no\n#       ForceCommand cvs server\n")),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"I am not a proponent of changing default ports when I don't have to. A strong key pair and fail2ban is enough for me. It is not too hard for an attacker to figure out what port ssh is listening on if they really want to."))))}h.isMDXComponent=!0}}]);