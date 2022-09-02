var app=function(){"use strict";function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function s(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let i,l=!1;function a(t,n,e,o){for(;t<n;){const r=t+(n-t>>1);e(r)<=o?t=r+1:n=r}return t}function u(t,n){if(l){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let e=0;e<n.length;e++){const o=n[e];void 0!==o.claim_order&&t.push(o)}n=t}const e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let r=0;for(let t=0;t<n.length;t++){const s=n[t].claim_order,c=(r>0&&n[e[r]].claim_order<=s?r+1:a(1,r,(t=>n[e[t]].claim_order),s))-1;o[t]=e[c]+1;const i=c+1;e[i]=t,r=Math.max(i,r)}const s=[],c=[];let i=n.length-1;for(let t=e[r]+1;0!=t;t=o[t-1]){for(s.push(n[t-1]);i>=t;i--)c.push(n[i]);i--}for(;i>=0;i--)c.push(n[i]);s.reverse(),c.sort(((t,n)=>t.claim_order-n.claim_order));for(let n=0,e=0;n<c.length;n++){for(;e<s.length&&c[n].claim_order>=s[e].claim_order;)e++;const o=e<s.length?s[e]:null;t.insertBefore(c[n],o)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?void 0===n.claim_order&&n.parentNode===t||t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else n.parentNode===t&&null===n.nextSibling||t.appendChild(n)}function f(t,n,e){l&&!e?u(t,n):n.parentNode===t&&n.nextSibling==e||t.insertBefore(n,e||null)}function d(t){t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function m(){return p(" ")}function g(){return p("")}function _(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function $(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function b(t){return Array.from(t.childNodes)}function v(t,n,e,o,r=!1){!function(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}(t);const s=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const s=t[o];if(n(s)){const n=e(s);return void 0===n?t.splice(o,1):t[o]=n,r||(t.claim_info.last_index=o),s}}for(let o=t.claim_info.last_index-1;o>=0;o--){const s=t[o];if(n(s)){const n=e(s);return void 0===n?t.splice(o,1):t[o]=n,r?void 0===n&&t.claim_info.last_index--:t.claim_info.last_index=o,s}}return o()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function y(t,n,e){return function(t,n,e,o){return v(t,(t=>t.nodeName===n),(t=>{const n=[];for(let o=0;o<t.attributes.length;o++){const r=t.attributes[o];e[r.name]||n.push(r.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>o(n)))}(t,n,e,h)}function w(t,n){return v(t,(t=>3===t.nodeType),(t=>{const e=""+n;if(t.data.startsWith(e)){if(t.data.length!==e.length)return t.splitText(e.length)}else t.data=e}),(()=>p(n)),!0)}function E(t){return w(t," ")}function x(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function k(t,n){t.value=null==n?"":n}function S(t){i=t}function T(){if(!i)throw new Error("Function called outside component initialization");return i}function C(){const t=T();return(n,e,{cancelable:o=!1}={})=>{const r=t.$$.callbacks[n];if(r){const s=function(t,n,{bubbles:e=!1,cancelable:o=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,o,n),r}(n,e,{cancelable:o});return r.slice().forEach((n=>{n.call(t,s)})),!s.defaultPrevented}return!0}}function V(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach((t=>t.call(this,n)))}const N=[],O=[],j=[],I=[],A=Promise.resolve();let L=!1;function D(){L||(L=!0,A.then(M))}function P(t){j.push(t)}const R=new Set;let F=0;function M(){const t=i;do{for(;F<N.length;){const t=N[F];F++,S(t),q(t.$$)}for(S(null),N.length=0,F=0;O.length;)O.pop()();for(let t=0;t<j.length;t+=1){const n=j[t];R.has(n)||(R.add(n),n())}j.length=0}while(N.length);for(;I.length;)I.pop()();L=!1,R.clear(),S(t)}function q(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(P)}}const U=new Set;let z;function W(){z={r:0,c:[],p:z}}function B(){z.r||r(z.c),z=z.p}function G(t,n){t&&t.i&&(U.delete(t),t.i(n))}function J(t,n,e,o){if(t&&t.o){if(U.has(t))return;U.add(t),z.c.push((()=>{U.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}else o&&o()}function X(t,n){const e={},o={},r={$$scope:1};let s=t.length;for(;s--;){const c=t[s],i=n[s];if(i){for(const t in c)t in i||(o[t]=1);for(const t in i)r[t]||(e[t]=i[t],r[t]=1);t[s]=i}else for(const t in c)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function Y(t){return"object"==typeof t&&null!==t?t:{}}function H(t){t&&t.c()}function K(t,n){t&&t.l(n)}function Q(t,n,o,c){const{fragment:i,on_mount:l,on_destroy:a,after_update:u}=t.$$;i&&i.m(n,o),c||P((()=>{const n=l.map(e).filter(s);a?a.push(...n):r(n),t.$$.on_mount=[]})),u.forEach(P)}function Z(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function tt(n,e,s,c,a,u,f,h=[-1]){const p=i;S(n);const m=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(p?p.$$.context:[])),callbacks:o(),dirty:h,skip_bound:!1,root:e.target||p.$$.root};f&&f(m.root);let g=!1;if(m.ctx=s?s(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return m.ctx&&a(m.ctx[t],m.ctx[t]=r)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](r),g&&function(t,n){-1===t.$$.dirty[0]&&(N.push(t),D(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}(n,t)),e})):[],m.update(),g=!0,r(m.before_update),m.fragment=!!c&&c(m.ctx),e.target){if(e.hydrate){l=!0;const t=b(e.target);m.fragment&&m.fragment.l(t),t.forEach(d)}else m.fragment&&m.fragment.c();e.intro&&G(n.$$.fragment),Q(n,e.target,e.anchor,e.customElement),l=!1,M()}S(p)}class nt{$destroy(){Z(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const et=[];function ot(t,n){return{subscribe:rt(t,n).subscribe}}function rt(n,e=t){let o;const r=new Set;function s(t){if(c(n,t)&&(n=t,o)){const t=!et.length;for(const t of r)t[1](),et.push(t,n);if(t){for(let t=0;t<et.length;t+=2)et[t][0](et[t+1]);et.length=0}}}return{set:s,update:function(t){s(t(n))},subscribe:function(c,i=t){const l=[c,i];return r.add(l),1===r.size&&(o=e(s)||t),c(n),()=>{r.delete(l),0===r.size&&(o(),o=null)}}}}function st(n,e,o){const c=!Array.isArray(n),i=c?[n]:n,l=e.length<2;return ot(o,(n=>{let o=!1;const a=[];let u=0,f=t;const d=()=>{if(u)return;f();const o=e(c?a[0]:a,n);l?n(o):f=s(o)?o:t},h=i.map(((n,e)=>function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(n,(t=>{a[e]=t,u&=~(1<<e),o&&d()}),(()=>{u|=1<<e}))));return o=!0,d(),function(){r(h),f()}}))}function ct(t){let e,o,r;const s=[t[2]];var c=t[0];function i(t){let e={};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}return c&&(e=new c(i()),e.$on("routeEvent",t[7])),{c(){e&&H(e.$$.fragment),o=g()},l(t){e&&K(e.$$.fragment,t),o=g()},m(t,n){e&&Q(e,t,n),f(t,o,n),r=!0},p(t,n){const r=4&n?X(s,[Y(t[2])]):{};if(c!==(c=t[0])){if(e){W();const t=e;J(t.$$.fragment,1,0,(()=>{Z(t,1)})),B()}c?(e=new c(i()),e.$on("routeEvent",t[7]),H(e.$$.fragment),G(e.$$.fragment,1),Q(e,o.parentNode,o)):e=null}else c&&e.$set(r)},i(t){r||(e&&G(e.$$.fragment,t),r=!0)},o(t){e&&J(e.$$.fragment,t),r=!1},d(t){t&&d(o),e&&Z(e,t)}}}function it(t){let e,o,r;const s=[{params:t[1]},t[2]];var c=t[0];function i(t){let e={};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}return c&&(e=new c(i()),e.$on("routeEvent",t[6])),{c(){e&&H(e.$$.fragment),o=g()},l(t){e&&K(e.$$.fragment,t),o=g()},m(t,n){e&&Q(e,t,n),f(t,o,n),r=!0},p(t,n){const r=6&n?X(s,[2&n&&{params:t[1]},4&n&&Y(t[2])]):{};if(c!==(c=t[0])){if(e){W();const t=e;J(t.$$.fragment,1,0,(()=>{Z(t,1)})),B()}c?(e=new c(i()),e.$on("routeEvent",t[6]),H(e.$$.fragment),G(e.$$.fragment,1),Q(e,o.parentNode,o)):e=null}else c&&e.$set(r)},i(t){r||(e&&G(e.$$.fragment,t),r=!0)},o(t){e&&J(e.$$.fragment,t),r=!1},d(t){t&&d(o),e&&Z(e,t)}}}function lt(t){let n,e,o,r;const s=[it,ct],c=[];function i(t,n){return t[1]?0:1}return n=i(t),e=c[n]=s[n](t),{c(){e.c(),o=g()},l(t){e.l(t),o=g()},m(t,e){c[n].m(t,e),f(t,o,e),r=!0},p(t,[r]){let l=n;n=i(t),n===l?c[n].p(t,r):(W(),J(c[l],1,1,(()=>{c[l]=null})),B(),e=c[n],e?e.p(t,r):(e=c[n]=s[n](t),e.c()),G(e,1),e.m(o.parentNode,o))},i(t){r||(G(e),r=!0)},o(t){J(e),r=!1},d(t){c[n].d(t),t&&d(o)}}}function at(){const t=window.location.href.indexOf("#/");let n=t>-1?window.location.href.substr(t+1):"/";const e=n.indexOf("?");let o="";return e>-1&&(o=n.substr(e+1),n=n.substr(0,e)),{location:n,querystring:o}}const ut=ot(null,(function(t){t(at());const n=()=>{t(at())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}}));st(ut,(t=>t.location)),st(ut,(t=>t.querystring));const ft=rt(void 0);function dt(t,n,e){let{routes:o={}}=n,{prefix:r=""}=n,{restoreScrollState:s=!1}=n;class c{constructor(t,n){if(!n||"function"!=typeof n&&("object"!=typeof n||!0!==n._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:e,keys:o}=function(t,n){if(t instanceof RegExp)return{keys:!1,pattern:t};var e,o,r,s,c=[],i="",l=t.split("/");for(l[0]||l.shift();r=l.shift();)"*"===(e=r[0])?(c.push("wild"),i+="/(.*)"):":"===e?(o=r.indexOf("?",1),s=r.indexOf(".",1),c.push(r.substring(1,~o?o:~s?s:r.length)),i+=~o&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(i+=(~o?"?":"")+"\\"+r.substring(s))):i+="/"+r;return{keys:c,pattern:new RegExp("^"+i+(n?"(?=$|/)":"/?$"),"i")}}(t);this.path=t,"object"==typeof n&&!0===n._sveltesparouter?(this.component=n.component,this.conditions=n.conditions||[],this.userData=n.userData,this.props=n.props||{}):(this.component=()=>Promise.resolve(n),this.conditions=[],this.props={}),this._pattern=e,this._keys=o}match(t){if(r)if("string"==typeof r){if(!t.startsWith(r))return null;t=t.substr(r.length)||"/"}else if(r instanceof RegExp){const n=t.match(r);if(!n||!n[0])return null;t=t.substr(n[0].length)||"/"}const n=this._pattern.exec(t);if(null===n)return null;if(!1===this._keys)return n;const e={};let o=0;for(;o<this._keys.length;){try{e[this._keys[o]]=decodeURIComponent(n[o+1]||"")||null}catch(t){e[this._keys[o]]=null}o++}return e}async checkConditions(t){for(let n=0;n<this.conditions.length;n++)if(!await this.conditions[n](t))return!1;return!0}}const i=[];o instanceof Map?o.forEach(((t,n)=>{i.push(new c(n,t))})):Object.keys(o).forEach((t=>{i.push(new c(t,o[t]))}));let l=null,a=null,u={};const f=C();async function d(t,n){await(D(),A),f(t,n)}let h=null,p=null;var m;s&&(p=t=>{h=t.state&&(t.state.__svelte_spa_router_scrollY||t.state.__svelte_spa_router_scrollX)?t.state:null},window.addEventListener("popstate",p),m=()=>{var t;(t=h)?window.scrollTo(t.__svelte_spa_router_scrollX,t.__svelte_spa_router_scrollY):window.scrollTo(0,0)},T().$$.after_update.push(m));let g=null,_=null;const $=ut.subscribe((async t=>{g=t;let n=0;for(;n<i.length;){const o=i[n].match(t.location);if(!o){n++;continue}const r={route:i[n].path,location:t.location,querystring:t.querystring,userData:i[n].userData,params:o&&"object"==typeof o&&Object.keys(o).length?o:null};if(!await i[n].checkConditions(r))return e(0,l=null),_=null,void d("conditionsFailed",r);d("routeLoading",Object.assign({},r));const s=i[n].component;if(_!=s){s.loading?(e(0,l=s.loading),_=s,e(1,a=s.loadingParams),e(2,u={}),d("routeLoaded",Object.assign({},r,{component:l,name:l.name,params:a}))):(e(0,l=null),_=null);const n=await s();if(t!=g)return;e(0,l=n&&n.default||n),_=s}return o&&"object"==typeof o&&Object.keys(o).length?e(1,a=o):e(1,a=null),e(2,u=i[n].props),void d("routeLoaded",Object.assign({},r,{component:l,name:l.name,params:a})).then((()=>{ft.set(a)}))}e(0,l=null),_=null,ft.set(void 0)}));return function(t){T().$$.on_destroy.push(t)}((()=>{$(),p&&window.removeEventListener("popstate",p)})),t.$$set=t=>{"routes"in t&&e(3,o=t.routes),"prefix"in t&&e(4,r=t.prefix),"restoreScrollState"in t&&e(5,s=t.restoreScrollState)},t.$$.update=()=>{32&t.$$.dirty&&(history.scrollRestoration=s?"manual":"auto")},[l,a,u,o,r,s,function(n){V.call(this,t,n)},function(n){V.call(this,t,n)}]}class ht extends nt{constructor(t){super(),tt(this,t,dt,lt,c,{routes:3,prefix:4,restoreScrollState:5})}}function pt(n){let e;return{c(){e=p("WELCOME!")},l(t){e=w(t,"WELCOME!")},m(t,n){f(t,e,n)},p:t,i:t,o:t,d(t){t&&d(e)}}}const mt=rt({channel:"noticethez",socketToken:"",goal:2500,primeValue:2.5,t1Value:2.5,t2Value:5,t3Value:12.5}),gt=rt(0);function _t(t,n,e){const o=t.slice();return o[7]=n[e][0],o[8]=n[e][1],o[9]=n,o[10]=e,o}function $t(t){let n,e,o,s,c,i,l,a,g=(t[2][t[7]]||t[7]+":")+"";function v(){t[6].call(c,t[7])}return{c(){n=h("setting"),e=h("descriptor"),o=p(g),s=m(),c=h("input"),i=m(),this.h()},l(t){n=y(t,"SETTING",{class:!0});var r=b(n);e=y(r,"DESCRIPTOR",{});var l=b(e);o=w(l,g),l.forEach(d),s=E(r),c=y(r,"INPUT",{type:!0}),i=E(r),r.forEach(d),this.h()},h(){$(c,"type","text"),$(n,"class","svelte-16tmjcf")},m(r,d){f(r,n,d),u(n,e),u(e,o),u(n,s),u(n,c),k(c,t[0][t[7]]),u(n,i),l||(a=[_(c,"input",v),_(c,"change",t[3])],l=!0)},p(n,e){t=n,1&e&&g!==(g=(t[2][t[7]]||t[7]+":")+"")&&x(o,g),1&e&&c.value!==t[0][t[7]]&&k(c,t[0][t[7]])},d(t){t&&d(n),l=!1,r(a)}}}function bt(n){let e,o,s,c,i,l,a,v,x,S=Object.entries(n[0]),T=[];for(let t=0;t<S.length;t+=1)T[t]=$t(_t(n,S,t));return{c(){e=h("setting"),o=h("descriptor"),s=p("Current Value:"),c=m(),i=h("input"),l=m();for(let t=0;t<T.length;t+=1)T[t].c();a=g(),this.h()},l(t){e=y(t,"SETTING",{class:!0});var n=b(e);o=y(n,"DESCRIPTOR",{});var r=b(o);s=w(r,"Current Value:"),r.forEach(d),c=E(n),i=y(n,"INPUT",{type:!0}),n.forEach(d),l=E(t);for(let n=0;n<T.length;n+=1)T[n].l(t);a=g(),this.h()},h(){$(i,"type","text"),$(e,"class","svelte-16tmjcf")},m(t,r){f(t,e,r),u(e,o),u(o,s),u(e,c),u(e,i),k(i,n[1]),f(t,l,r);for(let n=0;n<T.length;n+=1)T[n].m(t,r);f(t,a,r),v||(x=[_(i,"input",n[5]),_(i,"change",n[4])],v=!0)},p(t,[n]){if(2&n&&i.value!==t[1]&&k(i,t[1]),13&n){let e;for(S=Object.entries(t[0]),e=0;e<S.length;e+=1){const o=_t(t,S,e);T[e]?T[e].p(o,n):(T[e]=$t(o),T[e].c(),T[e].m(a.parentNode,a))}for(;e<T.length;e+=1)T[e].d(1);T.length=S.length}},i:t,o:t,d(t){t&&d(e),t&&d(l),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(T,t),t&&d(a),v=!1,r(x)}}}function vt(t,n,e){let o,r;mt.subscribe((t=>{e(0,o=t)})),gt.subscribe((t=>{e(1,r=t)}));return[o,r,{channel:"Twitch channel:",socketToken:"Streamlabs API Socket Token:",currentValue:"Current Value:",goal:"Donation Goal:",primeValue:"Value of Prime Sub:",t1Value:"Value of Tier 1 Sub:",t2Value:"Value of Tier 2 Sub:",t3Value:"Value of Tier 3 Sub:"},function(){mt.set(o),window.localStorage.setItem("donoTrackerSettings",JSON.stringify(o)),console.log(o)},function(){gt.set(r),window.localStorage.setItem("donoTrackerCurrentValue",r),console.log(r)},function(){r=this.value,e(1,r)},function(t){o[t]=this.value,e(0,o)}]}function yt(n){let e,o,r,s=n[0].toFixed(2)+"";return{c(){e=h("main"),o=p("Donos: $"),r=p(s),this.h()},l(t){e=y(t,"MAIN",{class:!0});var n=b(e);o=w(n,"Donos: $"),r=w(n,s),n.forEach(d),this.h()},h(){$(e,"class","svelte-bs56y4")},m(t,n){f(t,e,n),u(e,o),u(e,r)},p(t,[n]){1&n&&s!==(s=t[0].toFixed(2)+"")&&x(r,s)},i:t,o:t,d(t){t&&d(e)}}}function wt(t,n,e){let o;return gt.subscribe((t=>{e(0,o=parseFloat(t))})),[o]}function Et(n){let e;return{c(){e=p("SUCCESS")},l(t){e=w(t,"SUCCESS")},m(t,n){f(t,e,n)},p:t,i:t,o:t,d(t){t&&d(e)}}}const xt={"/settings":class extends nt{constructor(t){super(),tt(this,t,vt,bt,c,{})}},"/success":class extends nt{constructor(t){super(),tt(this,t,null,Et,c,{})}},"/overlay":class extends nt{constructor(t){super(),tt(this,t,wt,yt,c,{})}},"*":class extends nt{constructor(t){super(),tt(this,t,null,pt,c,{})}}};function kt(n){let e,o;return e=new ht({props:{routes:xt}}),{c(){H(e.$$.fragment)},l(t){K(e.$$.fragment,t)},m(t,n){Q(e,t,n),o=!0},p:t,i(t){o||(G(e.$$.fragment,t),o=!0)},o(t){J(e.$$.fragment,t),o=!1},d(t){Z(e,t)}}}function St(t){let n,e,o,r;function s(){let t=JSON.parse(window.localStorage.getItem("donoTrackerSettings"));if(t){for(const e in n)t[e]&&(n[e]=t[e]);mt.set(n)}}function c(t){console.log(t),e=parseFloat(e)+t,gt.set(e),window.localStorage.setItem("donoTrackerCurrentValue",e),console.log(e)}function i(t){let e=0;"Prime"===t?e=n.primeValue:"1000"===t?e=n.t1Value:"2000"===t?e=n.t2Value:"3000"===t&&(e=n.t3Value),c(parseFloat(e))}function l(){o&&o.disconnect(),o=io(`https://sockets.streamlabs.com?token=${n.socketToken}`,{transports:["websocket"]}),o.on("event",(t=>{"donation"===t.type&&c(t.message[0].amount)}))}function a(){r&&r.disconnect(),r=new window.tmi.Client({channels:[n.channel.toLowerCase()]}),r.connect().then((()=>console.log("CONNECTED"))),r.on("message",(async(t,n,e,o)=>{})),r.on("subscription",((t,n,e,o,r)=>{i(r["msg-param-sub-plan"])})),r.on("resub",((t,n,e,o,r,s)=>{i(r["msg-param-sub-plan"])})),r.on("subgift",((t,n,e,o,r,s)=>{i(s["msg-param-sub-plan"])})),r.on("cheer",((t,n,e)=>{let o=n.bits;console.log(o),c(o/100)}))}return mt.subscribe((t=>{n=t})),gt.subscribe((t=>{e=t})),gt.set(window.localStorage.getItem("donoTrackerCurrentValue")||e),s(),l(),a(),window.addEventListener("storage",(()=>{let t=n.socketToken,e=n.channel;s(),t!==n.socketToken&&l(),e!==n.channel&&a(),console.log(n)})),[]}return new class extends nt{constructor(t){super(),tt(this,t,St,kt,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
