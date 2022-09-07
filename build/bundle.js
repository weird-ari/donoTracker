var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let l,i=!1;function a(t,e,n,o){for(;t<e;){const r=t+(e-t>>1);n(r)<=o?t=r+1:e=r}return t}function u(t,e){if(i){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let n=0;n<e.length;n++){const o=e[n];void 0!==o.claim_order&&t.push(o)}e=t}const n=new Int32Array(e.length+1),o=new Int32Array(e.length);n[0]=-1;let r=0;for(let t=0;t<e.length;t++){const s=e[t].claim_order,c=(r>0&&e[n[r]].claim_order<=s?r+1:a(1,r,(t=>e[n[t]].claim_order),s))-1;o[t]=n[c]+1;const l=c+1;n[l]=t,r=Math.max(l,r)}const s=[],c=[];let l=e.length-1;for(let t=n[r]+1;0!=t;t=o[t-1]){for(s.push(e[t-1]);l>=t;l--)c.push(e[l]);l--}for(;l>=0;l--)c.push(e[l]);s.reverse(),c.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<c.length;e++){for(;n<s.length&&c[e].claim_order>=s[n].claim_order;)n++;const o=n<s.length?s[n]:null;t.insertBefore(c[e],o)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?void 0===e.claim_order&&e.parentNode===t||t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else e.parentNode===t&&null===e.nextSibling||t.appendChild(e)}function f(t,e,n){i&&!n?u(t,e):e.parentNode===t&&e.nextSibling==n||t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function m(){return p(" ")}function g(){return p("")}function $(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function b(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _(t){return Array.from(t.childNodes)}function v(t,e,n,o,r=!1){!function(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}(t);const s=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const s=t[o];if(e(s)){const e=n(s);return void 0===e?t.splice(o,1):t[o]=e,r||(t.claim_info.last_index=o),s}}for(let o=t.claim_info.last_index-1;o>=0;o--){const s=t[o];if(e(s)){const e=n(s);return void 0===e?t.splice(o,1):t[o]=e,r?void 0===e&&t.claim_info.last_index--:t.claim_info.last_index=o,s}}return o()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function y(t,e,n){return function(t,e,n,o){return v(t,(t=>t.nodeName===e),(t=>{const e=[];for(let o=0;o<t.attributes.length;o++){const r=t.attributes[o];n[r.name]||e.push(r.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>o(e)))}(t,e,n,h)}function w(t,e){return v(t,(t=>3===t.nodeType),(t=>{const n=""+e;if(t.data.startsWith(n)){if(t.data.length!==n.length)return t.splitText(n.length)}else t.data=n}),(()=>p(e)),!0)}function E(t){return w(t," ")}function x(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function k(t,e){t.value=null==e?"":e}function S(t,e,n,o){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}function T(t){l=t}function V(){if(!l)throw new Error("Function called outside component initialization");return l}function C(){const t=V();return(e,n,{cancelable:o=!1}={})=>{const r=t.$$.callbacks[e];if(r){const s=function(t,e,{bubbles:n=!1,cancelable:o=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,o,e),r}(e,n,{cancelable:o});return r.slice().forEach((e=>{e.call(t,s)})),!s.defaultPrevented}return!0}}function I(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const N=[],O=[],j=[],L=[],F=Promise.resolve();let A=!1;function D(){A||(A=!0,F.then(q))}function P(t){j.push(t)}const R=new Set;let M=0;function q(){const t=l;do{for(;M<N.length;){const t=N[M];M++,T(t),z(t.$$)}for(T(null),N.length=0,M=0;O.length;)O.pop()();for(let t=0;t<j.length;t+=1){const e=j[t];R.has(e)||(R.add(e),e())}j.length=0}while(N.length);for(;L.length;)L.pop()();A=!1,R.clear(),T(t)}function z(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(P)}}const B=new Set;let U;function W(){U={r:0,c:[],p:U}}function G(){U.r||r(U.c),U=U.p}function J(t,e){t&&t.i&&(B.delete(t),t.i(e))}function X(t,e,n,o){if(t&&t.o){if(B.has(t))return;B.add(t),U.c.push((()=>{B.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()}function Y(t,e){const n={},o={},r={$$scope:1};let s=t.length;for(;s--;){const c=t[s],l=e[s];if(l){for(const t in c)t in l||(o[t]=1);for(const t in l)r[t]||(n[t]=l[t],r[t]=1);t[s]=l}else for(const t in c)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}function H(t){return"object"==typeof t&&null!==t?t:{}}function K(t){t&&t.c()}function Q(t,e){t&&t.l(e)}function Z(t,e,o,c){const{fragment:l,on_mount:i,on_destroy:a,after_update:u}=t.$$;l&&l.m(e,o),c||P((()=>{const e=i.map(n).filter(s);a?a.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(P)}function tt(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function et(e,n,s,c,a,u,f,h=[-1]){const p=l;T(e);const m=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(p?p.$$.context:[])),callbacks:o(),dirty:h,skip_bound:!1,root:n.target||p.$$.root};f&&f(m.root);let g=!1;if(m.ctx=s?s(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return m.ctx&&a(m.ctx[t],m.ctx[t]=r)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](r),g&&function(t,e){-1===t.$$.dirty[0]&&(N.push(t),D(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],m.update(),g=!0,r(m.before_update),m.fragment=!!c&&c(m.ctx),n.target){if(n.hydrate){i=!0;const t=_(n.target);m.fragment&&m.fragment.l(t),t.forEach(d)}else m.fragment&&m.fragment.c();n.intro&&J(e.$$.fragment),Z(e,n.target,n.anchor,n.customElement),i=!1,q()}T(p)}class nt{$destroy(){tt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ot=[];function rt(t,e){return{subscribe:st(t,e).subscribe}}function st(e,n=t){let o;const r=new Set;function s(t){if(c(e,t)&&(e=t,o)){const t=!ot.length;for(const t of r)t[1](),ot.push(t,e);if(t){for(let t=0;t<ot.length;t+=2)ot[t][0](ot[t+1]);ot.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,l=t){const i=[c,l];return r.add(i),1===r.size&&(o=n(s)||t),c(e),()=>{r.delete(i),0===r.size&&(o(),o=null)}}}}function ct(e,n,o){const c=!Array.isArray(e),l=c?[e]:e,i=n.length<2;return rt(o,(e=>{let o=!1;const a=[];let u=0,f=t;const d=()=>{if(u)return;f();const o=n(c?a[0]:a,e);i?e(o):f=s(o)?o:t},h=l.map(((e,n)=>function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(e,(t=>{a[n]=t,u&=~(1<<n),o&&d()}),(()=>{u|=1<<n}))));return o=!0,d(),function(){r(h),f()}}))}function lt(t){let n,o,r;const s=[t[2]];var c=t[0];function l(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return c&&(n=new c(l()),n.$on("routeEvent",t[7])),{c(){n&&K(n.$$.fragment),o=g()},l(t){n&&Q(n.$$.fragment,t),o=g()},m(t,e){n&&Z(n,t,e),f(t,o,e),r=!0},p(t,e){const r=4&e?Y(s,[H(t[2])]):{};if(c!==(c=t[0])){if(n){W();const t=n;X(t.$$.fragment,1,0,(()=>{tt(t,1)})),G()}c?(n=new c(l()),n.$on("routeEvent",t[7]),K(n.$$.fragment),J(n.$$.fragment,1),Z(n,o.parentNode,o)):n=null}else c&&n.$set(r)},i(t){r||(n&&J(n.$$.fragment,t),r=!0)},o(t){n&&X(n.$$.fragment,t),r=!1},d(t){t&&d(o),n&&tt(n,t)}}}function it(t){let n,o,r;const s=[{params:t[1]},t[2]];var c=t[0];function l(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return c&&(n=new c(l()),n.$on("routeEvent",t[6])),{c(){n&&K(n.$$.fragment),o=g()},l(t){n&&Q(n.$$.fragment,t),o=g()},m(t,e){n&&Z(n,t,e),f(t,o,e),r=!0},p(t,e){const r=6&e?Y(s,[2&e&&{params:t[1]},4&e&&H(t[2])]):{};if(c!==(c=t[0])){if(n){W();const t=n;X(t.$$.fragment,1,0,(()=>{tt(t,1)})),G()}c?(n=new c(l()),n.$on("routeEvent",t[6]),K(n.$$.fragment),J(n.$$.fragment,1),Z(n,o.parentNode,o)):n=null}else c&&n.$set(r)},i(t){r||(n&&J(n.$$.fragment,t),r=!0)},o(t){n&&X(n.$$.fragment,t),r=!1},d(t){t&&d(o),n&&tt(n,t)}}}function at(t){let e,n,o,r;const s=[it,lt],c=[];function l(t,e){return t[1]?0:1}return e=l(t),n=c[e]=s[e](t),{c(){n.c(),o=g()},l(t){n.l(t),o=g()},m(t,n){c[e].m(t,n),f(t,o,n),r=!0},p(t,[r]){let i=e;e=l(t),e===i?c[e].p(t,r):(W(),X(c[i],1,1,(()=>{c[i]=null})),G(),n=c[e],n?n.p(t,r):(n=c[e]=s[e](t),n.c()),J(n,1),n.m(o.parentNode,o))},i(t){r||(J(n),r=!0)},o(t){X(n),r=!1},d(t){c[e].d(t),t&&d(o)}}}function ut(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let o="";return n>-1&&(o=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:o}}const ft=rt(null,(function(t){t(ut());const e=()=>{t(ut())};return window.addEventListener("hashchange",e,!1),function(){window.removeEventListener("hashchange",e,!1)}}));ct(ft,(t=>t.location)),ct(ft,(t=>t.querystring));const dt=st(void 0);function ht(t,e,n){let{routes:o={}}=e,{prefix:r=""}=e,{restoreScrollState:s=!1}=e;class c{constructor(t,e){if(!e||"function"!=typeof e&&("object"!=typeof e||!0!==e._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:n,keys:o}=function(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,o,r,s,c=[],l="",i=t.split("/");for(i[0]||i.shift();r=i.shift();)"*"===(n=r[0])?(c.push("wild"),l+="/(.*)"):":"===n?(o=r.indexOf("?",1),s=r.indexOf(".",1),c.push(r.substring(1,~o?o:~s?s:r.length)),l+=~o&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(l+=(~o?"?":"")+"\\"+r.substring(s))):l+="/"+r;return{keys:c,pattern:new RegExp("^"+l+(e?"(?=$|/)":"/?$"),"i")}}(t);this.path=t,"object"==typeof e&&!0===e._sveltesparouter?(this.component=e.component,this.conditions=e.conditions||[],this.userData=e.userData,this.props=e.props||{}):(this.component=()=>Promise.resolve(e),this.conditions=[],this.props={}),this._pattern=n,this._keys=o}match(t){if(r)if("string"==typeof r){if(!t.startsWith(r))return null;t=t.substr(r.length)||"/"}else if(r instanceof RegExp){const e=t.match(r);if(!e||!e[0])return null;t=t.substr(e[0].length)||"/"}const e=this._pattern.exec(t);if(null===e)return null;if(!1===this._keys)return e;const n={};let o=0;for(;o<this._keys.length;){try{n[this._keys[o]]=decodeURIComponent(e[o+1]||"")||null}catch(t){n[this._keys[o]]=null}o++}return n}async checkConditions(t){for(let e=0;e<this.conditions.length;e++)if(!await this.conditions[e](t))return!1;return!0}}const l=[];o instanceof Map?o.forEach(((t,e)=>{l.push(new c(e,t))})):Object.keys(o).forEach((t=>{l.push(new c(t,o[t]))}));let i=null,a=null,u={};const f=C();async function d(t,e){await(D(),F),f(t,e)}let h=null,p=null;var m;s&&(p=t=>{h=t.state&&(t.state.__svelte_spa_router_scrollY||t.state.__svelte_spa_router_scrollX)?t.state:null},window.addEventListener("popstate",p),m=()=>{var t;(t=h)?window.scrollTo(t.__svelte_spa_router_scrollX,t.__svelte_spa_router_scrollY):window.scrollTo(0,0)},V().$$.after_update.push(m));let g=null,$=null;const b=ft.subscribe((async t=>{g=t;let e=0;for(;e<l.length;){const o=l[e].match(t.location);if(!o){e++;continue}const r={route:l[e].path,location:t.location,querystring:t.querystring,userData:l[e].userData,params:o&&"object"==typeof o&&Object.keys(o).length?o:null};if(!await l[e].checkConditions(r))return n(0,i=null),$=null,void d("conditionsFailed",r);d("routeLoading",Object.assign({},r));const s=l[e].component;if($!=s){s.loading?(n(0,i=s.loading),$=s,n(1,a=s.loadingParams),n(2,u={}),d("routeLoaded",Object.assign({},r,{component:i,name:i.name,params:a}))):(n(0,i=null),$=null);const e=await s();if(t!=g)return;n(0,i=e&&e.default||e),$=s}return o&&"object"==typeof o&&Object.keys(o).length?n(1,a=o):n(1,a=null),n(2,u=l[e].props),void d("routeLoaded",Object.assign({},r,{component:i,name:i.name,params:a})).then((()=>{dt.set(a)}))}n(0,i=null),$=null,dt.set(void 0)}));return function(t){V().$$.on_destroy.push(t)}((()=>{b(),p&&window.removeEventListener("popstate",p)})),t.$$set=t=>{"routes"in t&&n(3,o=t.routes),"prefix"in t&&n(4,r=t.prefix),"restoreScrollState"in t&&n(5,s=t.restoreScrollState)},t.$$.update=()=>{32&t.$$.dirty&&(history.scrollRestoration=s?"manual":"auto")},[i,a,u,o,r,s,function(e){I.call(this,t,e)},function(e){I.call(this,t,e)}]}class pt extends nt{constructor(t){super(),et(this,t,ht,at,c,{routes:3,prefix:4,restoreScrollState:5})}}function mt(e){let n;return{c(){n=p("WELCOME!")},l(t){n=w(t,"WELCOME!")},m(t,e){f(t,n,e)},p:t,i:t,o:t,d(t){t&&d(n)}}}const gt=st({channel:"noticethez",socketToken:"",goal:2500,primeValue:2.5,t1Value:2.5,t2Value:5,t3Value:12.5}),$t=st(0);function bt(t,e,n){const o=t.slice();return o[7]=e[n][0],o[8]=e[n][1],o[9]=e,o[10]=n,o}function _t(t){let e,n,o,s,c,l,i,a,g=(t[2][t[7]]||t[7]+":")+"";function v(){t[6].call(c,t[7])}return{c(){e=h("setting"),n=h("descriptor"),o=p(g),s=m(),c=h("input"),l=m(),this.h()},l(t){e=y(t,"SETTING",{class:!0});var r=_(e);n=y(r,"DESCRIPTOR",{});var i=_(n);o=w(i,g),i.forEach(d),s=E(r),c=y(r,"INPUT",{type:!0}),l=E(r),r.forEach(d),this.h()},h(){b(c,"type","text"),b(e,"class","svelte-16tmjcf")},m(r,d){f(r,e,d),u(e,n),u(n,o),u(e,s),u(e,c),k(c,t[0][t[7]]),u(e,l),i||(a=[$(c,"input",v),$(c,"change",t[3])],i=!0)},p(e,n){t=e,1&n&&g!==(g=(t[2][t[7]]||t[7]+":")+"")&&x(o,g),1&n&&c.value!==t[0][t[7]]&&k(c,t[0][t[7]])},d(t){t&&d(e),i=!1,r(a)}}}function vt(e){let n,o,s,c,l,i,a,v,x,S=Object.entries(e[0]),T=[];for(let t=0;t<S.length;t+=1)T[t]=_t(bt(e,S,t));return{c(){n=h("setting"),o=h("descriptor"),s=p("Current Value:"),c=m(),l=h("input"),i=m();for(let t=0;t<T.length;t+=1)T[t].c();a=g(),this.h()},l(t){n=y(t,"SETTING",{class:!0});var e=_(n);o=y(e,"DESCRIPTOR",{});var r=_(o);s=w(r,"Current Value:"),r.forEach(d),c=E(e),l=y(e,"INPUT",{type:!0}),e.forEach(d),i=E(t);for(let e=0;e<T.length;e+=1)T[e].l(t);a=g(),this.h()},h(){b(l,"type","text"),b(n,"class","svelte-16tmjcf")},m(t,r){f(t,n,r),u(n,o),u(o,s),u(n,c),u(n,l),k(l,e[1]),f(t,i,r);for(let e=0;e<T.length;e+=1)T[e].m(t,r);f(t,a,r),v||(x=[$(l,"input",e[5]),$(l,"change",e[4])],v=!0)},p(t,[e]){if(2&e&&l.value!==t[1]&&k(l,t[1]),13&e){let n;for(S=Object.entries(t[0]),n=0;n<S.length;n+=1){const o=bt(t,S,n);T[n]?T[n].p(o,e):(T[n]=_t(o),T[n].c(),T[n].m(a.parentNode,a))}for(;n<T.length;n+=1)T[n].d(1);T.length=S.length}},i:t,o:t,d(t){t&&d(n),t&&d(i),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(T,t),t&&d(a),v=!1,r(x)}}}function yt(t,e,n){let o,r;gt.subscribe((t=>{n(0,o=t)})),$t.subscribe((t=>{n(1,r=t)}));return[o,r,{channel:"Twitch channel:",socketToken:"Streamlabs API Socket Token:",currentValue:"Current Value:",goal:"Donation Goal:",primeValue:"Value of Prime Sub:",t1Value:"Value of Tier 1 Sub:",t2Value:"Value of Tier 2 Sub:",t3Value:"Value of Tier 3 Sub:"},function(){gt.set(o),window.localStorage.setItem("donoTrackerSettings",JSON.stringify(o)),location.reload(),console.log(o)},function(){$t.set(r),window.localStorage.setItem("donoTrackerCurrentValue",r),location.reload(),console.log(r)},function(){r=this.value,n(1,r)},function(t){o[t]=this.value,n(0,o)}]}function wt(e){let n,o,r,s,c,l,i,a,g,$,v,k,T,V,C,I,N,O,j,L,F,A=e[0].toFixed(2)+"",D="("+(100*e[0]/parseFloat(e[1].goal)).toFixed(2)+"%)",P=(0).toFixed(2)+"",R=parseFloat(e[1].goal).toFixed(2)+"";return{c(){n=h("main"),o=h("div"),r=p("NoticeTheTwitchconathon"),s=m(),c=h("bar"),l=h("bar"),i=m(),a=h("div"),g=p("$"),$=p(A),v=m(),k=p(D),T=m(),V=h("div"),C=h("div"),I=p("$"),N=p(P),O=m(),j=h("div"),L=p("$"),F=p(R),this.h()},l(t){n=y(t,"MAIN",{class:!0});var e=_(n);o=y(e,"DIV",{class:!0});var u=_(o);r=w(u,"NoticeTheTwitchconathon"),u.forEach(d),s=E(e),c=y(e,"BAR",{class:!0});var f=_(c);l=y(f,"BAR",{class:!0,style:!0}),_(l).forEach(d),i=E(f),a=y(f,"DIV",{class:!0});var h=_(a);g=w(h,"$"),$=w(h,A),v=E(h),k=w(h,D),h.forEach(d),T=E(f),V=y(f,"DIV",{class:!0});var p=_(V);C=y(p,"DIV",{class:!0});var m=_(C);I=w(m,"$"),N=w(m,P),m.forEach(d),O=E(p),j=y(p,"DIV",{class:!0});var b=_(j);L=w(b,"$"),F=w(b,R),b.forEach(d),p.forEach(d),f.forEach(d),e.forEach(d),this.h()},h(){b(o,"class","title svelte-1oh7vgc"),b(l,"class","dono svelte-1oh7vgc"),S(l,"width",Math.min(100*e[0]/e[1].goal,100)+"%"),b(a,"class","total svelte-1oh7vgc"),b(C,"class","marker zero svelte-1oh7vgc"),b(j,"class","marker goal svelte-1oh7vgc"),b(V,"class","markers svelte-1oh7vgc"),b(c,"class","total svelte-1oh7vgc"),b(n,"class","svelte-1oh7vgc")},m(t,e){f(t,n,e),u(n,o),u(o,r),u(n,s),u(n,c),u(c,l),u(c,i),u(c,a),u(a,g),u(a,$),u(a,v),u(a,k),u(c,T),u(c,V),u(V,C),u(C,I),u(C,N),u(V,O),u(V,j),u(j,L),u(j,F)},p(t,[e]){3&e&&S(l,"width",Math.min(100*t[0]/t[1].goal,100)+"%"),1&e&&A!==(A=t[0].toFixed(2)+"")&&x($,A),3&e&&D!==(D="("+(100*t[0]/parseFloat(t[1].goal)).toFixed(2)+"%)")&&x(k,D),2&e&&R!==(R=parseFloat(t[1].goal).toFixed(2)+"")&&x(F,R)},i:t,o:t,d(t){t&&d(n)}}}function Et(t,e,n){let o,r;return $t.subscribe((t=>{n(0,o=parseFloat(t))})),gt.subscribe((t=>{n(1,r=t)})),[o,r]}function xt(e){let n;return{c(){n=p("SUCCESS")},l(t){n=w(t,"SUCCESS")},m(t,e){f(t,n,e)},p:t,i:t,o:t,d(t){t&&d(n)}}}const kt={"/settings":class extends nt{constructor(t){super(),et(this,t,yt,vt,c,{})}},"/success":class extends nt{constructor(t){super(),et(this,t,null,xt,c,{})}},"/overlay":class extends nt{constructor(t){super(),et(this,t,Et,wt,c,{})}},"*":class extends nt{constructor(t){super(),et(this,t,null,mt,c,{})}}};function St(e){let n,o;return n=new pt({props:{routes:kt}}),{c(){K(n.$$.fragment)},l(t){Q(n.$$.fragment,t)},m(t,e){Z(n,t,e),o=!0},p:t,i(t){o||(J(n.$$.fragment,t),o=!0)},o(t){X(n.$$.fragment,t),o=!1},d(t){tt(n,t)}}}function Tt(t){let e,n,o,r;function s(){let t=JSON.parse(window.localStorage.getItem("donoTrackerSettings"));if(t){for(const n in e)t[n]&&(e[n]=t[n]);gt.set(e)}}function c(t){console.log(t),n=parseFloat(n)+t,$t.set(n),window.localStorage.setItem("donoTrackerCurrentValue",n),console.log(n)}function l(t,n){let o=0;"Prime"===t?o=e.primeValue:"1000"===t?o=e.t1Value:"2000"===t?o=e.t2Value:"3000"===t&&(o=e.t3Value),console.log(n),c(n?parseInt(n)*parseFloat(o):parseFloat(o))}function i(){o&&o.disconnect(),o=io(`https://sockets.streamlabs.com?token=${e.socketToken}`,{transports:["websocket"]}),o.on("event",(t=>{"donation"===t.type&&(console.log(t.message[0]),t.message[0].isTest?(document.body.classList.add("test"),setInterval((()=>{document.body.classList.remove("test")}),3e3)):c(t.message[0].amount))}))}function a(){r&&r.disconnect(),r=new window.tmi.Client({channels:[e.channel.toLowerCase()]}),r.connect().then((()=>console.log("CONNECTED"))),r.on("message",(async(t,e,n,o)=>{e.mod&&"testdonotracker"===n.toLowerCase()&&(document.body.classList.add("testTwitch"),setInterval((()=>{document.body.classList.remove("testTwitch")}),3e3))})),r.on("subscription",((t,e,n,o,r)=>{console.log(r),l(r["msg-param-sub-plan"],r["msg-param-months"])})),r.on("resub",((t,e,n,o,r,s)=>{console.log(r),l(r["msg-param-sub-plan"],r["msg-param-months"])})),r.on("subgift",((t,e,n,o,r,s)=>{console.log(s),l(s["msg-param-sub-plan"],s["msg-param-months"])})),r.on("cheer",((t,e,n)=>{let o=e.bits;console.log(o),c(o/100)}))}return gt.subscribe((t=>{e=t})),$t.subscribe((t=>{n=t})),$t.set(window.localStorage.getItem("donoTrackerCurrentValue")||n),s(),console.log(e.socketToken),i(),a(),window.addEventListener("storage",(()=>{let t=e.socketToken,n=e.channel;s(),t!==e.socketToken&&i(),n!==e.channel&&a(),console.log(e)})),[]}return new class extends nt{constructor(t){super(),et(this,t,Tt,St,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
