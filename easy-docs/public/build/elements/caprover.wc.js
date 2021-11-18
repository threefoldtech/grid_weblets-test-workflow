!function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function i(t){return"function"==typeof t}function r(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function l(n,e,o){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}function c(t,n){t.appendChild(n)}function s(t,n,e){t.insertBefore(n,e||null)}function u(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function f(){return d(" ")}function p(){return d("")}function m(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function h(t){return function(n){return n.preventDefault(),t.call(this,n)}}function y(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function b(t){return""===t?null:+t}function g(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function v(t,n){t.value=null==n?"":n}function $(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}function w(t){const n={};for(const e of t)n[e.name]=e.value;return n}let _;function k(t){_=t}function x(){if(!_)throw new Error("Function called outside component initialization");return _}function C(){const t=x();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const i=function(t,n,e=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,e,!1,n),o}(n,e);o.slice().forEach((n=>{n.call(t,i)}))}}}const E=[],M=[],S=[],R=[],D=Promise.resolve();let N=!1;function I(t){S.push(t)}let z=!1;const L=new Set;function P(){if(!z){z=!0;do{for(let t=0;t<E.length;t+=1){const n=E[t];k(n),O(n.$$)}for(k(null),E.length=0;M.length;)M.pop()();for(let t=0;t<S.length;t+=1){const n=S[t];L.has(n)||(L.add(n),n())}S.length=0}while(E.length);for(;R.length;)R.pop()();N=!1,z=!1,L.clear()}}function O(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(I)}}const T=new Set;let j,A;function K(t,n){t&&t.i&&(T.delete(t),t.i(n))}function B(t,n,e,o){if(t&&t.o){if(T.has(t))return;T.add(t),j.c.push((()=>{T.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function U(t,n){t.d(1),n.delete(t.key)}function V(t,n,e,o,i,r,l,c,s,u,a,d){let f=t.length,p=r.length,m=f;const h={};for(;m--;)h[t[m].key]=m;const y=[],b=new Map,g=new Map;for(m=p;m--;){const t=d(i,r,m),c=e(t);let s=l.get(c);s?o&&s.p(t,n):(s=u(c,t),s.c()),b.set(c,y[m]=s),c in h&&g.set(c,Math.abs(m-h[c]))}const v=new Set,$=new Set;function w(t){K(t,1),t.m(c,a),l.set(t.key,t),a=t.first,p--}for(;f&&p;){const n=y[p-1],e=t[f-1],o=n.key,i=e.key;n===e?(a=n.first,f--,p--):b.has(i)?!l.has(o)||v.has(o)?w(n):$.has(i)?f--:g.get(o)>g.get(i)?($.add(o),w(n)):(v.add(i),f--):(s(e,l),f--)}for(;f--;){const n=t[f];b.has(n.key)||s(n,l)}for(;p;)w(y[p-1]);return y}function H(t,e,r,l){const{fragment:c,on_mount:s,on_destroy:u,after_update:a}=t.$$;c&&c.m(e,r),l||I((()=>{const e=s.map(n).filter(i);u?u.push(...e):o(e),t.$$.on_mount=[]})),a.forEach(I)}function F(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function G(t,n){-1===t.$$.dirty[0]&&(E.push(t),N||(N=!0,D.then(P)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Y(n,i,r,l,c,s,a,d=[-1]){const f=_;k(n);const p=n.$$={fragment:null,ctx:null,props:s,update:t,not_equal:c,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(f?f.$$.context:[])),callbacks:e(),dirty:d,skip_bound:!1,root:i.target||f.$$.root};a&&a(p.root);let m=!1;if(p.ctx=r?r(n,i.props||{},((t,e,...o)=>{const i=o.length?o[0]:e;return p.ctx&&c(p.ctx[t],p.ctx[t]=i)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](i),m&&G(n,t)),e})):[],p.update(),m=!0,o(p.before_update),p.fragment=!!l&&l(p.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);p.fragment&&p.fragment.l(t),t.forEach(u)}else p.fragment&&p.fragment.c();i.intro&&K(n.$$.fragment),H(n,i.target,i.anchor,i.customElement),P()}k(f)}function q(t,n,e){const o=t.slice();return o[6]=n[e],o[8]=e,o}function W(t,n){let e,o,i,r,l=n[8]+1+"";return{key:t,first:null,c(){e=a("option"),o=d("Profile "),i=d(l),e.__value=r=n[8],e.value=e.__value,this.first=e},m(t,n){s(t,e,n),c(e,o),c(e,i)},p(t,o){n=t,1&o&&l!==(l=n[8]+1+"")&&g(i,l),1&o&&r!==(r=n[8])&&(e.__value=r,e.value=e.__value)},d(t){t&&u(e)}}}function J(n){let e,o,i,r,l=[],d=new Map,f=n[0];const p=t=>t[8];for(let t=0;t<f.length;t+=1){let e=q(n,f,t),o=p(e);d.set(o,l[t]=W(o,e))}return{c(){e=a("div"),o=a("select");for(let t=0;t<l.length;t+=1)l[t].c();this.c=t,y(e,"class","select mb-4"),$(e,"display","flex"),$(e,"justify-content","flex-end")},m(t,u){s(t,e,u),c(e,o);for(let t=0;t<l.length;t+=1)l[t].m(o,null);i||(r=m(o,"change",n[2]),i=!0)},p(t,[n]){1&n&&(f=t[0],l=V(l,n,p,1,t,f,d,o,U,W,null,q))},i:t,o:t,d(t){t&&u(e);for(let t=0;t<l.length;t+=1)l[t].d();i=!1,r()}}}"function"==typeof HTMLElement&&(A=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(n).filter(i);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,n,e){this[t]=e}disconnectedCallback(){o(this.$$.on_disconnect)}$destroy(){F(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});const Q="profileIdx";function X(t,n,e){let o,i;var r;const c=C(),s=null===(r=window.configs)||void 0===r?void 0:r.baseConfig;var u;return l(t,s,(t=>e(3,i=t))),u=()=>{c(Q,0)},x().$$.on_mount.push(u),t.$$.update=()=>{8&t.$$.dirty&&e(0,o=i)},[o,s,function(t){c(Q,t.target.selectedIndex)},i]}class Z extends A{constructor(t){super(),Y(this,{target:this.shadowRoot,props:w(this.attributes),customElement:!0},X,J,r,{},null),t&&t.target&&s(t.target,this,t.anchor)}}var tt,nt=new Uint8Array(16);function et(){if(!tt&&!(tt="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return tt(nt)}var ot=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function it(t){return"string"==typeof t&&ot.test(t)}for(var rt,lt,ct=[],st=0;st<256;++st)ct.push((st+256).toString(16).substr(1));function ut(t,n,e){var o=(t=t||{}).random||(t.rng||et)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,n){e=e||0;for(var i=0;i<16;++i)n[e+i]=o[i];return n}return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=(ct[t[n+0]]+ct[t[n+1]]+ct[t[n+2]]+ct[t[n+3]]+"-"+ct[t[n+4]]+ct[t[n+5]]+"-"+ct[t[n+6]]+ct[t[n+7]]+"-"+ct[t[n+8]]+ct[t[n+9]]+"-"+ct[t[n+10]]+ct[t[n+11]]+ct[t[n+12]]+ct[t[n+13]]+ct[t[n+14]]+ct[t[n+15]]).toLowerCase();if(!it(e))throw TypeError("Stringified UUID is invalid");return e}(o)}function at(t){const n=+t;return"number"==typeof n&&!isNaN(n)&&n>=0&&n.toFixed(0)===n.toString()}class dt{constructor(t=ut(),n="cr_"+t.split("-")[0],e=4,o=8192,i=3,r="",l="",c=100){this.id=t,this.name=n,this.cpu=e,this.memory=o,this.nodeId=i,this.domain=r,this.publicKey=l,this.diskSize=c}get valid(){const{name:t,cpu:n,memory:e,nodeId:o,domain:i,publicKey:r}=this;return""!==t&&at(n)&&at(e)&&at(o)&&""!==i&&""!==r}}class ft{constructor(t="nw_"+ut().split("-")[0],n="10.20.0.0/16"){this.name=t,this.ipRange=n}get valid(){const{name:t,ipRange:n}=this;return""!==t&&""!==n}}const{NetworkModel:pt}=null!==(lt=null===(rt=window.configs)||void 0===rt?void 0:rt.grid3_client)&&void 0!==lt?lt:{};var mt,ht,yt,bt;const{HTTPMessageBusClient:gt}=null!==(ht=null===(mt=window.configs)||void 0===mt?void 0:mt.client)&&void 0!==ht?ht:{},{MachinesModel:vt,DiskModel:$t,GridClient:wt,MachineModel:_t}=null!==(bt=null===(yt=window.configs)||void 0===yt?void 0:yt.grid3_client)&&void 0!==bt?bt:{};async function kt(t,n){const{name:e,memory:o,nodeId:i,publicKey:r,cpu:l,domain:c,diskSize:s}=t,{mnemonics:u,storeSecret:a,networkEnv:d}=n,f=new gt(0,""),p=function(t){const n=new pt;return n.name=t.name,n.ip_range=t.ipRange,n}(new ft(`caprover_network_${e}`,"10.200.0.0/16")),m=new $t;m.name="data0",m.size=s,m.mountpoint="/var/lib/docker";const h=new _t;h.cpu=l,h.memory=o,h.disks=[m],h.node_id=i,h.public_ip=!0,h.name=`caprover_leader_${e}`,h.planetary=!1,h.flist="https://hub.grid.tf/samehabouelsaad.3bot/tf-caprover-main-a4f186da8d.flist",h.qsfs_disks=[],h.rootfs_size=10,h.entrypoint="/sbin/zinit init",h.env={SWM_NODE_MODE:"leader",CAPROVER_ROOT_DOMAIN:c,PUBLIC_KEY:r};const y=new vt;y.name=e,y.machines=[h],y.network=p,y.description="caprover leader machine/node";const b=new wt(d,u,await async function(t){}(),a,f,void 0,"tfkvstore");return b.connect().then((()=>b.machines.deploy(y)))}function xt(t,n,e){const o=t.slice();return o[22]=n[e],o[23]=n,o[24]=e,o}function Ct(t,n,e){const o=t.slice();return o[25]=n[e],o}function Et(t){let n,e,o,i,r,l,d,m=[],h=new Map;n=new Z({}),n.$on("profileIdx",t[13]);let b=t[9];const g=t=>t[25].label;for(let n=0;n<b.length;n+=1){let e=Ct(t,b,n),o=g(e);h.set(o,m[n]=Dt(o,e))}let v="Config"===t[5]&&Nt(t);return{c(){var t;(t=n.$$.fragment)&&t.c(),e=f(),o=a("div"),i=a("ul");for(let t=0;t<m.length;t+=1)m[t].c();r=f(),v&&v.c(),l=p(),y(o,"class","tabs is-centered")},m(t,u){H(n,t,u),s(t,e,u),s(t,o,u),c(o,i);for(let t=0;t<m.length;t+=1)m[t].m(i,null);s(t,r,u),v&&v.m(t,u),s(t,l,u),d=!0},p(t,n){544&n&&(b=t[9],m=V(m,n,g,1,t,b,h,i,U,Dt,null,Ct)),"Config"===t[5]?v?v.p(t,n):(v=Nt(t),v.c(),v.m(l.parentNode,l)):v&&(v.d(1),v=null)},i(t){d||(K(n.$$.fragment,t),d=!0)},o(t){B(n.$$.fragment,t),d=!1},d(t){F(n,t),t&&u(e),t&&u(o);for(let t=0;t<m.length;t+=1)m[t].d();t&&u(r),v&&v.d(t),t&&u(l)}}}function Mt(n){let e,o;function i(t,n){return t[6]?Ot:Pt}let r=i(n),l=r(n);return{c(){e=a("div"),o=d(">\n        "),l.c(),y(e,"class","notification is-danger")},m(t,n){s(t,e,n),c(e,o),l.m(e,null)},p(t,n){r===(r=i(t))&&l?l.p(t,n):(l.d(1),l=r(t),l&&(l.c(),l.m(e,null)))},i:t,o:t,d(t){t&&u(e),l.d()}}}function St(n){let e;return{c(){e=a("div"),e.textContent="> Successfully deployed Caprover.",y(e,"class","notification is-success")},m(t,n){s(t,e,n)},p:t,i:t,o:t,d(t){t&&u(e)}}}function Rt(n){let e;function o(t,n){return t[6]?jt:Tt}let i=o(n),r=i(n);return{c(){e=a("div"),r.c(),y(e,"class","notification is-info")},m(t,n){s(t,e,n),r.m(e,null)},p(t,n){i===(i=o(t))&&r?r.p(t,n):(r.d(1),r=i(t),r&&(r.c(),r.m(e,null)))},i:t,o:t,d(t){t&&u(e),r.d()}}}function Dt(t,n){let e,o,i,r,l,p,b,g,v=n[25].label+"";function $(){return n[14](n[25])}return{key:t,first:null,c(){e=a("li"),o=a("a"),i=a("span"),r=d(v),l=f(),y(o,"href","#!"),y(e,"class",p=n[5]===n[25].label?"is-active":""),this.first=e},m(t,n){s(t,e,n),c(e,o),c(o,i),c(i,r),c(e,l),b||(g=m(o,"click",h($)),b=!0)},p(t,o){n=t,32&o&&p!==(p=n[5]===n[25].label?"is-active":"")&&y(e,"class",p)},d(t){t&&u(e),b=!1,g()}}}function Nt(t){let n,e=[],o=new Map,i=t[10];const r=t=>t[22].symbol;for(let n=0;n<i.length;n+=1){let l=xt(t,i,n),c=r(l);o.set(c,e[n]=Lt(c,l))}return{c(){for(let t=0;t<e.length;t+=1)e[t].c();n=p()},m(t,o){for(let n=0;n<e.length;n+=1)e[n].m(t,o);s(t,n,o)},p(t,l){1026&l&&(i=t[10],e=V(e,l,r,1,t,i,o,n.parentNode,U,Lt,n,xt))},d(t){for(let n=0;n<e.length;n+=1)e[n].d(t);t&&u(n)}}}function It(t){let n,e,o;function i(){t[16].call(n,t[22])}return{c(){n=a("input"),y(n,"class","input"),y(n,"type","text"),y(n,"placeholder",t[22].placeholder)},m(r,l){s(r,n,l),v(n,t[1][t[22].symbol]),e||(o=m(n,"input",i),e=!0)},p(e,o){t=e,1026&o&&n.value!==t[1][t[22].symbol]&&v(n,t[1][t[22].symbol])},d(t){t&&u(n),e=!1,o()}}}function zt(t){let n,e,o;function i(){t[15].call(n,t[22])}return{c(){n=a("input"),y(n,"class","input"),y(n,"type","number"),y(n,"placeholder",t[22].placeholder)},m(r,l){s(r,n,l),v(n,t[1][t[22].symbol]),e||(o=m(n,"input",i),e=!0)},p(e,o){t=e,1026&o&&b(n.value)!==t[1][t[22].symbol]&&v(n,t[1][t[22].symbol])},d(t){t&&u(n),e=!1,o()}}}function Lt(n,e){let o,i,r,l,p,m,h,b=e[22].label+"",g=e[22].link&&function(n){let e,o,i,r,l,f=n[22].link.label+"";return{c(){e=d("("),o=a("a"),i=d(f),l=d(")"),y(o,"href",r=n[22].link.url),y(o,"target","_blank")},m(t,n){s(t,e,n),s(t,o,n),c(o,i),s(t,l,n)},p:t,d(t){t&&u(e),t&&u(o),t&&u(l)}}}(e);let v=function(t,n){return"number"===t[22].type?zt:It}(e),$=v(e);return{key:n,first:null,c(){o=a("div"),i=a("p"),r=d(b),l=f(),g&&g.c(),p=f(),m=a("div"),$.c(),h=f(),y(i,"class","label"),y(m,"class","control"),y(o,"class","field"),this.first=o},m(t,n){s(t,o,n),c(o,i),c(i,r),c(i,l),g&&g.m(i,null),c(o,p),c(o,m),$.m(m,null),c(o,h)},p(t,n){(e=t)[22].link&&g.p(e,n),$.p(e,n)},d(t){t&&u(o),g&&g.d(),$.d()}}}function Pt(n){let e;return{c(){e=d("Failed to deploy Caprover.")},m(t,n){s(t,e,n)},p:t,d(t){t&&u(e)}}}function Ot(t){let n;return{c(){n=d(t[6])},m(t,e){s(t,n,e)},p(t,e){64&e&&g(n,t[6])},d(t){t&&u(n)}}}function Tt(n){let e;return{c(){e=d("> Loading...")},m(t,n){s(t,e,n)},p:t,d(t){t&&u(e)}}}function jt(t){let n,e,o;return{c(){n=d("> "),e=d(t[6]),o=d(".")},m(t,i){s(t,n,i),s(t,e,i),s(t,o,i)},p(t,n){64&n&&g(e,t[6])},d(t){t&&u(n),t&&u(e),t&&u(o)}}}function At(t){let n;return{c(){n=d("Deploy")},m(t,e){s(t,n,e)},d(t){t&&u(n)}}}function Kt(t){let n;return{c(){n=d("Back")},m(t,e){s(t,n,e)},d(t){t&&u(n)}}}function Bt(n){let e,i,r,l,d,p,b,g,v,w,_,k,x,C,E,M;const S=[Rt,St,Mt,Et],R=[];function D(t,n){return t[2]?0:t[3]?1:t[4]?2:3}function N(t,n){return t[3]||t[4]?Kt:At}b=D(n),g=R[b]=S[b](n);let I=N(n),z=I(n);return{c(){e=a("div"),i=a("form"),r=a("h4"),r.textContent="Caprover Deployer",l=f(),d=a("hr"),p=f(),g.c(),v=f(),w=a("div"),_=a("button"),z.c(),this.c=t,y(r,"class","is-size-4 mb-4"),y(_,"class",k="button is-primary "+(n[2]?"is-loading":"")),y(_,"type","submit"),_.disabled=x=(n[2]||!n[1].valid)&&!(n[3]||n[4])||!n[7]||""===n[7].mnemonics||""===n[7].storeSecret,y(w,"class","actions"),y(i,"class","box"),$(e,"padding","15px")},m(t,o){s(t,e,o),c(e,i),c(i,r),c(i,l),c(i,d),c(i,p),R[b].m(i,null),c(i,v),c(i,w),c(w,_),z.m(_,null),C=!0,E||(M=[m(_,"click",n[17]),m(i,"submit",h(n[11]))],E=!0)},p(t,[n]){let e=b;b=D(t),b===e?R[b].p(t,n):(j={r:0,c:[],p:j},B(R[e],1,1,(()=>{R[e]=null})),j.r||o(j.c),j=j.p,g=R[b],g?g.p(t,n):(g=R[b]=S[b](t),g.c()),K(g,1),g.m(i,v)),I!==(I=N(t))&&(z.d(1),z=I(t),z&&(z.c(),z.m(_,null))),(!C||4&n&&k!==(k="button is-primary "+(t[2]?"is-loading":"")))&&y(_,"class",k),(!C||158&n&&x!==(x=(t[2]||!t[1].valid)&&!(t[3]||t[4])||!t[7]||""===t[7].mnemonics||""===t[7].storeSecret))&&(_.disabled=x)},i(t){C||(K(g),C=!0)},o(t){B(g),C=!1},d(t){t&&u(e),R[b].d(),z.d(),E=!1,o(M)}}}function Ut(t,n,e){let o,i;var r,c,s;const{events:u}=null!==(c=null===(r=window.configs)||void 0===r?void 0:r.grid3_client)&&void 0!==c?c:{},a=new dt;let d=!1,f=!1,p=!1;const m=null===(s=window.configs)||void 0===s?void 0:s.baseConfig;let h;l(t,m,(t=>e(12,i=t)));let y="Config";const g=[{label:"Name",symbol:"name",placeholder:"Your caprover name"},{label:"CPU",symbol:"cpu",placeholder:"CPU",type:"number"},{label:"Memory",symbol:"memory",placeholder:"Memory in MB",type:"number"},{label:"Node ID",symbol:"nodeId",placeholder:"Node Id",type:"number",link:{label:"Grid Explorer",url:"https://explorer.tfchain.dev.threefold.io/nodes"}},{label:"Disk Size",symbol:"diskSize",placeholder:"Disk size in GB",type:"number"},{label:"Domain",symbol:"domain",placeholder:"domain configured on your name provider"},{label:"Public Key",symbol:"publicKey",placeholder:"Your Public Key"}];let v;return t.$$.update=()=>{4097&t.$$.dirty&&e(7,o=i[h])},[h,a,d,f,p,y,v,o,m,[{label:"Config"}],g,function(){function t(t){"string"==typeof t&&e(6,v=t)}e(2,d=!0),e(3,f=!1),e(4,p=!1),e(6,v=void 0),u.addListener("logs",t),kt(a,o).then((()=>e(3,f=!0))).catch((t=>{e(4,p=!0),e(6,v=t)})).finally((()=>{e(2,d=!1),u.removeListener("logs",t)}))},i,t=>e(0,h=t.detail),t=>e(5,y=t.label),function(t){a[t.symbol]=b(this.value),e(1,a),e(10,g)},function(t){a[t.symbol]=this.value,e(1,a),e(10,g)},t=>{(f||p)&&(t.preventDefault(),e(3,f=!1),e(4,p=!1),e(2,d=!1))}]}!function(t,n){try{customElements.define(`tf-${t}`,n)}catch(n){console.warn(`Element with name '${t}' already defined.`)}}("caprover",class extends A{constructor(t){super(),this.shadowRoot.innerHTML='<style>@import url("https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css");.actions{display:flex;justify-content:flex-end;align-items:center}</style>',Y(this,{target:this.shadowRoot,props:w(this.attributes),customElement:!0},Ut,Bt,r,{},null),t&&t.target&&s(t.target,this,t.anchor)}})}();
