!function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function s(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function i(t){t.parentNode.removeChild(t)}function a(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function u(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function f(){return d(" ")}function h(){return d("")}function m(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function $(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}function b(t){const e={};for(const n of t)e[n.name]=n.value;return e}let y;function w(t){y=t}function x(){if(!y)throw new Error("Function called outside component initialization");return y}function v(){const t=x();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const s=function(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}(e,n);o.slice().forEach((e=>{e.call(t,s)}))}}}const k=[],E=[],_=[],C=[],A=Promise.resolve();let M=!1;function D(t){_.push(t)}let S=!1;const N=new Set;function T(){if(!S){S=!0;do{for(let t=0;t<k.length;t+=1){const e=k[t];w(e),L(e.$$)}for(w(null),k.length=0;E.length;)E.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];N.has(e)||(N.add(e),e())}_.length=0}while(k.length);for(;C.length;)C.pop()();M=!1,S=!1,N.clear()}}function L(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}const P=new Set;let j,R;function H(){j={r:0,c:[],p:j}}function O(){j.r||o(j.c),j=j.p}function B(t,e){t&&t.i&&(P.delete(t),t.i(e))}function z(t,e,n,o){if(t&&t.o){if(P.has(t))return;P.add(t),j.c.push((()=>{P.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function I(t,e){t.d(1),e.delete(t.key)}function q(t,e,n,o,s,r,l,c,i,a,u,d){let f=t.length,h=r.length,m=f;const p={};for(;m--;)p[t[m].key]=m;const g=[],$=new Map,b=new Map;for(m=h;m--;){const t=d(s,r,m),c=n(t);let i=l.get(c);i?o&&i.p(t,e):(i=a(c,t),i.c()),$.set(c,g[m]=i),c in p&&b.set(c,Math.abs(m-p[c]))}const y=new Set,w=new Set;function x(t){B(t,1),t.m(c,u),l.set(t.key,t),u=t.first,h--}for(;f&&h;){const e=g[h-1],n=t[f-1],o=e.key,s=n.key;e===n?(u=e.first,f--,h--):$.has(s)?!l.has(o)||y.has(o)?x(e):w.has(s)?f--:b.get(o)>b.get(s)?(w.add(o),x(e)):(y.add(s),f--):(i(n,l),f--)}for(;f--;){const e=t[f];$.has(e.key)||i(e,l)}for(;h;)x(g[h-1]);return g}function F(t){t&&t.c()}function G(t,n,r,l){const{fragment:c,on_mount:i,on_destroy:a,after_update:u}=t.$$;c&&c.m(n,r),l||D((()=>{const n=i.map(e).filter(s);a?a.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(D)}function Y(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function J(t,e){-1===t.$$.dirty[0]&&(k.push(t),M||(M=!0,A.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function K(e,s,r,l,c,a,u,d=[-1]){const f=y;w(e);const h=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(f?f.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:s.target||f.$$.root};u&&u(h.root);let m=!1;if(h.ctx=r?r(e,s.props||{},((t,n,...o)=>{const s=o.length?o[0]:n;return h.ctx&&c(h.ctx[t],h.ctx[t]=s)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](s),m&&J(e,t)),n})):[],h.update(),m=!0,o(h.before_update),h.fragment=!!l&&l(h.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);h.fragment&&h.fragment.l(t),t.forEach(i)}else h.fragment&&h.fragment.c();s.intro&&B(e.$$.fragment),G(e,s.target,s.anchor,s.customElement),T()}w(f)}async function Q(t,e,n=!0){const{networkEnv:o,mnemonics:s,storeSecret:r}=t,l=new window.configs.grid3_client.GridClient(o,s,r,new window.configs.client.HTTPMessageBusClient(0,""),void 0,window.configs.grid3_client.BackendStorageType.tfkvstore);try{await l.connect()}catch(t){}return e(l)}function U(e){return{c(){this.c=t},m:t,p:t,i:t,o:t,d:t}}function V(t){var e;const n=null===(e=window.configs)||void 0===e?void 0:e.baseConfig,o=v();let s;var r;return r=()=>{s=n.subscribe((()=>{o("profile",n.getActiveProfile())}))},x().$$.on_mount.push(r),function(t){x().$$.on_destroy.push(t)}((()=>{s()})),[]}"function"==typeof HTMLElement&&(R=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(e).filter(s);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){o(this.$$.on_disconnect)}$destroy(){Y(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class W extends R{constructor(t){super(),K(this,{target:this.shadowRoot,props:b(this.attributes),customElement:!0},V,U,r,{},null),t&&t.target&&c(t.target,this,t.anchor)}}function X(t){let e;return{c(){e=u("div"),e.textContent="Your solution is now starting. Please be patient",p(e,"class","notification is-info")},m(t,n){c(t,e,n)},d(t){t&&i(e)}}}function Z(e){let n,o,s,r,a,m=e[2]&&X();return{c(){n=u("div"),o=d(e[1]),r=f(),m&&m.c(),a=h(),this.c=t,p(n,"class",s="notification is-"+e[0])},m(t,e){c(t,n,e),l(n,o),c(t,r,e),m&&m.m(t,e),c(t,a,e)},p(t,[e]){2&e&&g(o,t[1]),1&e&&s!==(s="notification is-"+t[0])&&p(n,"class",s),t[2]?m||(m=X(),m.c(),m.m(a.parentNode,a)):m&&(m.d(1),m=null)},i:t,o:t,d(t){t&&i(n),t&&i(r),m&&m.d(t),t&&i(a)}}}function tt(t,e,n){let{type:o}=e,{message:s}=e,{deployed:r=!1}=e;return t.$$set=t=>{"type"in t&&n(0,o=t.type),"message"in t&&n(1,s=t.message),"deployed"in t&&n(2,r=t.deployed)},[o,s,r]}customElements.define("tf-select-profile",W);class et extends R{constructor(t){super(),this.shadowRoot.innerHTML='<style>@import url("https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css");</style>',K(this,{target:this.shadowRoot,props:b(this.attributes),customElement:!0},tt,Z,r,{type:0,message:1,deployed:2},null),t&&(t.target&&c(t.target,this,t.anchor),t.props&&(this.$set(t.props),T()))}static get observedAttributes(){return["type","message","deployed"]}get type(){return this.$$.ctx[0]}set type(t){this.$$set({type:t}),T()}get message(){return this.$$.ctx[1]}set message(t){this.$$set({message:t}),T()}get deployed(){return this.$$.ctx[2]}set deployed(t){this.$$set({deployed:t}),T()}}function nt(t,e,n){const o=t.slice();return o[10]=e[n],o}function ot(t,e,n){const o=t.slice();return o[13]=e[n],o[15]=n,o}function st(t,e,n){const o=t.slice();return o[16]=e[n].type,o[17]=e[n].label,o[18]=e[n].click,o[19]=e[n].disabled,o[20]=e[n].loading,o}function rt(t,e,n){const o=t.slice();return o[23]=e[n],o}function lt(t,e,n){const o=t.slice();return o[10]=e[n],o}function ct(t){let e;return{c(){e=u("th")},m(t,n){c(t,e,n)},d(t){t&&i(e)}}}function it(t){let e,n=[],o=new Map,s=t[0];const r=t=>t[10];for(let e=0;e<s.length;e+=1){let l=lt(t,s,e),c=r(l);o.set(c,n[e]=at(c,l))}return{c(){for(let t=0;t<n.length;t+=1)n[t].c();e=h()},m(t,o){for(let e=0;e<n.length;e+=1)n[e].m(t,o);c(t,e,o)},p(t,l){1&l&&(s=t[0],n=q(n,l,r,1,t,s,o,e.parentNode,I,at,e,lt))},d(t){for(let e=0;e<n.length;e+=1)n[e].d(t);t&&i(e)}}}function at(t,e){let n,o,s,r=e[10]+"";return{key:t,first:null,c(){n=u("th"),o=d(r),p(n,"title",s=e[10]),this.first=n},m(t,e){c(t,n,e),l(n,o)},p(t,l){e=t,1&l&&r!==(r=e[10]+"")&&g(o,r),1&l&&s!==(s=e[10])&&p(n,"title",s)},d(t){t&&i(n)}}}function ut(t){let e;return{c(){e=u("th"),e.textContent="Actions",p(e,"title","Actions")},m(t,n){c(t,e,n)},d(t){t&&i(e)}}}function dt(t){let e,n=t[1],o=[];for(let e=0;e<n.length;e+=1)o[e]=gt(ot(t,n,e));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=h()},m(t,n){for(let e=0;e<o.length;e+=1)o[e].m(t,n);c(t,e,n)},p(t,s){if(46&s){let r;for(n=t[1],r=0;r<n.length;r+=1){const l=ot(t,n,r);o[r]?o[r].p(l,s):(o[r]=gt(l),o[r].c(),o[r].m(e.parentNode,e))}for(;r<o.length;r+=1)o[r].d(1);o.length=n.length}},d(t){a(o,t),t&&i(e)}}}function ft(t){let e,n,o,s;return{c(){e=u("td"),n=u("input"),p(n,"type","checkbox")},m(r,i){c(r,e,i),l(e,n),o||(s=m(n,"change",t[5].bind(void 0,t[15])),o=!0)},p(e,n){t=e},d(t){t&&i(e),o=!1,s()}}}function ht(t,e){let n,o,s=e[23]+"";return{key:t,first:null,c(){n=u("td"),o=d(s),this.first=n},m(t,e){c(t,n,e),l(n,o)},p(t,n){e=t,2&n&&s!==(s=e[23]+"")&&g(o,s)},d(t){t&&i(n)}}}function mt(t){let e,n,o=t[2],s=[];for(let e=0;e<o.length;e+=1)s[e]=pt(st(t,o,e));return{c(){e=u("td"),n=u("div");for(let t=0;t<s.length;t+=1)s[t].c();p(n,"class","buttons")},m(t,o){c(t,e,o),l(e,n);for(let t=0;t<s.length;t+=1)s[t].m(n,null)},p(t,e){if(4&e){let r;for(o=t[2],r=0;r<o.length;r+=1){const l=st(t,o,r);s[r]?s[r].p(l,e):(s[r]=pt(l),s[r].c(),s[r].m(n,null))}for(;r<s.length;r+=1)s[r].d(1);s.length=o.length}},d(t){t&&i(e),a(s,t)}}}function pt(t){let e,n,o,s,r,a,h,$=t[17]+"";function b(...e){return t[7](t[18],t[15],...e)}return{c(){e=u("button"),n=d($),o=f(),p(e,"class",s="button is-"+t[16]+(t[20]&&t[20](t[15])?" is-loading":"")),e.disabled=r=!!t[19]&&t[19](t[15])},m(t,s){c(t,e,s),l(e,n),l(e,o),a||(h=m(e,"click",b),a=!0)},p(o,l){t=o,4&l&&$!==($=t[17]+"")&&g(n,$),4&l&&s!==(s="button is-"+t[16]+(t[20]&&t[20](t[15])?" is-loading":""))&&p(e,"class",s),4&l&&r!==(r=!!t[19]&&t[19](t[15]))&&(e.disabled=r)},d(t){t&&i(e),a=!1,h()}}}function gt(t){let e,n,o,s,r=[],a=new Map,d=t[3]&&ft(t),h=t[13];const m=t=>t[23];for(let e=0;e<h.length;e+=1){let n=rt(t,h,e),o=m(n);a.set(o,r[e]=ht(o,n))}let p=t[2].length&&mt(t);return{c(){e=u("tr"),d&&d.c(),n=f();for(let t=0;t<r.length;t+=1)r[t].c();o=f(),p&&p.c(),s=f()},m(t,i){c(t,e,i),d&&d.m(e,null),l(e,n);for(let t=0;t<r.length;t+=1)r[t].m(e,null);l(e,o),p&&p.m(e,null),l(e,s)},p(t,l){t[3]?d?d.p(t,l):(d=ft(t),d.c(),d.m(e,n)):d&&(d.d(1),d=null),2&l&&(h=t[13],r=q(r,l,m,1,t,h,a,e,I,ht,o,rt)),t[2].length?p?p.p(t,l):(p=mt(t),p.c(),p.m(e,s)):p&&(p.d(1),p=null)},d(t){t&&i(e),d&&d.d();for(let t=0;t<r.length;t+=1)r[t].d();p&&p.d()}}}function $t(t){let e,n,o,s=t[0]&&bt(t),r=t[2].length&&wt();return{c(){e=u("tfoot"),n=u("tr"),s&&s.c(),o=f(),r&&r.c()},m(t,i){c(t,e,i),l(e,n),s&&s.m(n,null),l(n,o),r&&r.m(n,null)},p(t,e){t[0]?s?s.p(t,e):(s=bt(t),s.c(),s.m(n,o)):s&&(s.d(1),s=null),t[2].length?r||(r=wt(),r.c(),r.m(n,null)):r&&(r.d(1),r=null)},d(t){t&&i(e),s&&s.d(),r&&r.d()}}}function bt(t){let e,n=[],o=new Map,s=t[0];const r=t=>t[10];for(let e=0;e<s.length;e+=1){let l=nt(t,s,e),c=r(l);o.set(c,n[e]=yt(c,l))}return{c(){for(let t=0;t<n.length;t+=1)n[t].c();e=h()},m(t,o){for(let e=0;e<n.length;e+=1)n[e].m(t,o);c(t,e,o)},p(t,l){1&l&&(s=t[0],n=q(n,l,r,1,t,s,o,e.parentNode,I,yt,e,nt))},d(t){for(let e=0;e<n.length;e+=1)n[e].d(t);t&&i(e)}}}function yt(t,e){let n,o,s,r=e[10]+"";return{key:t,first:null,c(){n=u("th"),o=d(r),p(n,"title",s=e[10]),this.first=n},m(t,e){c(t,n,e),l(n,o)},p(t,l){e=t,1&l&&r!==(r=e[10]+"")&&g(o,r),1&l&&s!==(s=e[10])&&p(n,"title",s)},d(t){t&&i(n)}}}function wt(t){let e;return{c(){e=u("th"),e.textContent="Actions",p(e,"title","Actions")},m(t,n){c(t,e,n)},d(t){t&&i(e)}}}function xt(e){let n,o,s,r,a,d,h,m,g=e[3]&&ct(),b=e[0]&&it(e),y=e[2].length&&ut(),w=e[1]&&dt(e),x=e[4]&&$t(e);return{c(){n=u("table"),o=u("thead"),s=u("tr"),g&&g.c(),r=f(),b&&b.c(),a=f(),y&&y.c(),d=f(),h=u("tbody"),w&&w.c(),m=f(),x&&x.c(),this.c=t,p(n,"class","table"),$(n,"width","100%")},m(t,e){c(t,n,e),l(n,o),l(o,s),g&&g.m(s,null),l(s,r),b&&b.m(s,null),l(s,a),y&&y.m(s,null),l(n,d),l(n,h),w&&w.m(h,null),l(n,m),x&&x.m(n,null)},p(t,[e]){t[3]?g||(g=ct(),g.c(),g.m(s,r)):g&&(g.d(1),g=null),t[0]?b?b.p(t,e):(b=it(t),b.c(),b.m(s,a)):b&&(b.d(1),b=null),t[2].length?y||(y=ut(),y.c(),y.m(s,null)):y&&(y.d(1),y=null),t[1]?w?w.p(t,e):(w=dt(t),w.c(),w.m(h,null)):w&&(w.d(1),w=null),t[4]?x?x.p(t,e):(x=$t(t),x.c(),x.m(n,null)):x&&(x.d(1),x=null)},i:t,o:t,d(t){t&&i(n),g&&g.d(),b&&b.d(),y&&y.d(),w&&w.d(),x&&x.d()}}}function vt(t,e,n){let o;const s=v();let{rowsData:r=[]}=e,{headers:l}=e,{rows:c}=e,{actions:i=[]}=e,{selectable:a=!0}=e;const u=[];return t.$$set=t=>{"rowsData"in t&&n(6,r=t.rowsData),"headers"in t&&n(0,l=t.headers),"rows"in t&&n(1,c=t.rows),"actions"in t&&n(2,i=t.actions),"selectable"in t&&n(3,a=t.selectable)},t.$$.update=()=>{2&t.$$.dirty&&n(4,o=c&&c.length>49)},[l,c,i,a,o,function(t){const e=u.indexOf(t);e>-1?u.splice(e,1):u.push(t),s("selected",u.map((t=>r[t])))},r,(t,e,n)=>t(n,e)]}customElements.define("tf-alert",et);class kt extends R{constructor(t){super(),K(this,{target:this.shadowRoot,props:b(this.attributes),customElement:!0},vt,xt,r,{rowsData:6,headers:0,rows:1,actions:2,selectable:3},null),t&&(t.target&&c(t.target,this,t.anchor),t.props&&(this.$set(t.props),T()))}static get observedAttributes(){return["rowsData","headers","rows","actions","selectable"]}get rowsData(){return this.$$.ctx[6]}set rowsData(t){this.$$set({rowsData:t}),T()}get headers(){return this.$$.ctx[0]}set headers(t){this.$$set({headers:t}),T()}get rows(){return this.$$.ctx[1]}set rows(t){this.$$set({rows:t}),T()}get actions(){return this.$$.ctx[2]}set actions(t){this.$$set({actions:t}),T()}get selectable(){return this.$$.ctx[3]}set selectable(t){this.$$set({selectable:t}),T()}}function Et(t){let e,n;return e=new et({props:{type:"info",message:t[0]?"No contracts were found":"Please select a profile"}}),{c(){F(e.$$.fragment)},m(t,o){G(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.message=t[0]?"No contracts were found":"Please select a profile"),e.$set(o)},i(t){n||(B(e.$$.fragment,t),n=!0)},o(t){z(e.$$.fragment,t),n=!1},d(t){Y(e,t)}}}function _t(t){let e,n,s,r,a,h,g,b,y,w,x,v,k,E,_,C,A,M;e=new kt({props:{rowsData:t[1],headers:["#","id","type"],rows:t[1].map(Dt)}}),e.$on("selected",t[11]);let D=t[6]&&At(t);return{c(){F(e.$$.fragment),n=f(),s=u("div"),r=u("div"),D&&D.c(),a=f(),h=u("div"),g=u("button"),b=d("Delete Selected"),x=f(),v=u("button"),k=d("Delete All"),$(r,"flex-grow","1"),p(r,"class","mr-2"),p(g,"class",y="button is-danger is-outlined mr-2 "+(t[4]&&"selected"===t[5]?"is-loading":"")),g.disabled=w=!t[0]||t[2]||t[4]||0===t[1].length||0===t[3].length,p(v,"class",E="button is-danger "+(t[4]&&"all"===t[5]?"is-loading":"")),v.disabled=_=!t[0]||t[2]||t[4]||0===t[1].length,p(s,"class","is-flex is-justify-content-space-between is-align-items-center")},m(o,i){G(e,o,i),c(o,n,i),c(o,s,i),l(s,r),D&&D.m(r,null),l(s,a),l(s,h),l(h,g),l(g,b),l(h,x),l(h,v),l(v,k),C=!0,A||(M=[m(g,"click",t[9]),m(v,"click",t[8])],A=!0)},p(t,n){const o={};2&n&&(o.rowsData=t[1]),2&n&&(o.rows=t[1].map(Dt)),e.$set(o),t[6]?D?(D.p(t,n),64&n&&B(D,1)):(D=At(t),D.c(),B(D,1),D.m(r,null)):D&&(H(),z(D,1,1,(()=>{D=null})),O()),(!C||48&n&&y!==(y="button is-danger is-outlined mr-2 "+(t[4]&&"selected"===t[5]?"is-loading":"")))&&p(g,"class",y),(!C||31&n&&w!==(w=!t[0]||t[2]||t[4]||0===t[1].length||0===t[3].length))&&(g.disabled=w),(!C||48&n&&E!==(E="button is-danger "+(t[4]&&"all"===t[5]?"is-loading":"")))&&p(v,"class",E),(!C||23&n&&_!==(_=!t[0]||t[2]||t[4]||0===t[1].length))&&(v.disabled=_)},i(t){C||(B(e.$$.fragment,t),B(D),C=!0)},o(t){z(e.$$.fragment,t),z(D),C=!1},d(t){Y(e,t),t&&i(n),t&&i(s),D&&D.d(),A=!1,o(M)}}}function Ct(e){let n,o;return n=new et({props:{type:"info",message:"Loading Contracts..."}}),{c(){F(n.$$.fragment)},m(t,e){G(n,t,e),o=!0},p:t,i(t){o||(B(n.$$.fragment,t),o=!0)},o(t){z(n.$$.fragment,t),o=!1},d(t){Y(n,t)}}}function At(t){let e,n;return e=new et({props:{type:"danger",message:t[6]}}),{c(){F(e.$$.fragment)},m(t,o){G(e,t,o),n=!0},p(t,n){const o={};64&n&&(o.message=t[6]),e.$set(o)},i(t){n||(B(e.$$.fragment,t),n=!0)},o(t){z(e.$$.fragment,t),n=!1},d(t){Y(e,t)}}}function Mt(e){let n,o,s,r,a,d,h,m,g,b,y;n=new W({}),n.$on("profile",e[10]);const w=[Ct,_t,Et],x=[];function v(t,e){return t[2]?0:t[1].length?1:2}return g=v(e),b=x[g]=w[g](e),{c(){F(n.$$.fragment),o=f(),s=u("div"),r=u("div"),a=u("h4"),a.textContent="Contracts List",d=f(),h=u("hr"),m=f(),b.c(),this.c=t,p(a,"class","is-size-4 mb-4"),p(r,"class","box"),$(s,"padding","15px")},m(t,e){G(n,t,e),c(t,o,e),c(t,s,e),l(s,r),l(r,a),l(r,d),l(r,h),l(r,m),x[g].m(r,null),y=!0},p(t,[e]){let n=g;g=v(t),g===n?x[g].p(t,e):(H(),z(x[n],1,1,(()=>{x[n]=null})),O(),b=x[g],b?b.p(t,e):(b=x[g]=w[g](t),b.c()),B(b,1),b.m(r,null))},i(t){y||(B(n.$$.fragment,t),B(b),y=!0)},o(t){z(n.$$.fragment,t),z(b),y=!1},d(t){Y(n,t),t&&i(o),t&&i(s),x[g].d()}}}customElements.define("tf-table",kt);const Dt=({id:t,type:e},n)=>[n.toString(),t.toString(),e];function St(t,e,n){let o,s,r=[],l=!1,c=[],i=!1,a=null;function u(t){if(n(0,o=t),o)return n(2,l=!0),Q(o,(t=>{t.contracts.listMyContracts().then((({nameContracts:t,nodeContracts:e})=>{const o=t.map((({contractId:t})=>({id:t,type:"name"}))),s=e.map((({contractId:t})=>({id:t,type:"node"})));n(1,r=[...o,...s])})).catch((t=>{console.log("Error",t)})).finally((()=>{n(2,l=!1)}))}));n(1,r=[])}return[o,r,l,c,i,a,s,u,function(){if(window.confirm("Are you sure u want to delete your contracts?"))return n(6,s=null),n(4,i=!0),n(5,a="all"),Q(o,(t=>{t.contracts.cancelMyContracts().then((()=>{n(1,r=[])})).catch((t=>{console.log("Error",t),n(6,s=t.message||t)})).finally((()=>{n(4,i=!1),n(5,a=null)}))}))},function(){if(window.confirm("Are you sure u want to delete the selected contracts?"))return n(6,s=null),n(4,i=!0),n(5,a="selected"),Q(o,(async t=>{for(const e of c)try{await t.contracts.cancel({id:e.id}),n(1,r=r.filter((t=>t.id!==e.id)))}catch(t){console.log("Error",t),n(6,s=t.message||t)}n(4,i=!1),n(5,a=null)}))},({detail:t})=>u(t),({detail:t})=>n(3,c=t)]}customElements.define("tf-contractslist",class extends R{constructor(t){super(),this.shadowRoot.innerHTML='<style>@import url("https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css");</style>',K(this,{target:this.shadowRoot,props:b(this.attributes),customElement:!0},St,Mt,r,{},null),t&&t.target&&c(t.target,this,t.anchor)}})}();