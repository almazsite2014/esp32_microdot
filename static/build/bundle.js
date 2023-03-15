var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t){return null==t?"":t}function s(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function i(t){t.parentNode&&t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function d(){return f(" ")}function h(){return f("")}function m(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function v(t,e,n,r){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}let g;function b(t){g=t}function y(){if(!g)throw new Error("Function called outside component initialization");return g}function k(t){y().$$.on_mount.push(t)}function w(){const t=y();return(e,n,{cancelable:r=!1}={})=>{const o=t.$$.callbacks[e];if(o){const c=function(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,r,e),o}(e,n,{cancelable:r});return o.slice().forEach((e=>{e.call(t,c)})),!c.defaultPrevented}return!0}}const x=[],_=[],E=[],q=[],C=Promise.resolve();let j=!1;function O(t){E.push(t)}const N=new Set;let A=0;function F(){if(0!==A)return;const t=g;do{try{for(;A<x.length;){const t=x[A];A++,b(t),L(t.$$)}}catch(t){throw x.length=0,A=0,t}for(b(null),x.length=0,A=0;_.length;)_.pop()();for(let t=0;t<E.length;t+=1){const e=E[t];N.has(e)||(N.add(e),e())}E.length=0}while(x.length);for(;q.length;)q.pop()();j=!1,N.clear(),b(t)}function L(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}const P=new Set;let S;function T(t,e){t&&t.i&&(P.delete(t),t.i(e))}function I(t,e,n,r){if(t&&t.o){if(P.has(t))return;P.add(t),S.c.push((()=>{P.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}else r&&r()}function z(t,e){const n=e.token={};function o(t,o,c,l){if(e.token!==n)return;e.resolved=l;let s=e.ctx;void 0!==c&&(s=s.slice(),s[c]=l);const u=t&&(e.current=t)(s);let i=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==o&&t&&(S={r:0,c:[],p:S},I(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),S.r||r(S.c),S=S.p)})):e.block.d(1),u.c(),T(u,1),u.m(e.mount(),e.anchor),i=!0),e.block=u,e.blocks&&(e.blocks[o]=u),i&&F()}if(!(c=t)||"object"!=typeof c&&"function"!=typeof c||"function"!=typeof c.then){if(e.current!==e.then)return o(e.then,1,e.value,t),!0;e.resolved=t}else{const n=y();if(t.then((t=>{b(n),o(e.then,1,e.value,t),b(null)}),(t=>{if(b(n),o(e.catch,2,e.error,t),b(null),!e.hasCatch)throw t})),e.current!==e.pending)return o(e.pending,0),!0}var c}function B(t,e,n){const r=e.slice(),{resolved:o}=t;t.current===t.then&&(r[t.value]=o),t.current===t.catch&&(r[t.error]=o),t.block.p(r,n)}function D(t){t&&t.c()}function M(t,n,c,l){const{fragment:s,after_update:u}=t.$$;s&&s.m(n,c),l||O((()=>{const n=t.$$.on_mount.map(e).filter(o);t.$$.on_destroy?t.$$.on_destroy.push(...n):r(n),t.$$.on_mount=[]})),u.forEach(O)}function G(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function H(t,e){-1===t.$$.dirty[0]&&(x.push(t),j||(j=!0,C.then(F)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function J(e,o,c,l,s,u,a,f=[-1]){const d=g;b(e);const h=e.$$={fragment:null,ctx:[],props:u,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(d?d.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:o.target||d.$$.root};a&&a(h.root);let m=!1;if(h.ctx=c?c(e,o.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return h.ctx&&s(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),m&&H(e,t)),n})):[],h.update(),m=!0,r(h.before_update),h.fragment=!!l&&l(h.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);h.fragment&&h.fragment.l(t),t.forEach(i)}else h.fragment&&h.fragment.c();o.intro&&T(e.$$.fragment),M(e,o.target,o.anchor,o.customElement),F()}b(d)}class K{$destroy(){G(this,1),this.$destroy=t}$on(e,n){if(!o(n))return t;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const t=r.indexOf(n);-1!==t&&r.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Q(e){let n,r,o,c=e[0]>0?"ON":"OFF";return{c(){n=a("div"),r=f(c),p(n,"class",o=l(e[0]>0?"rcorners1":"rcorners2")+" svelte-1mqlf8x")},m(t,e){u(t,n,e),s(n,r)},p(t,[e]){1&e&&c!==(c=t[0]>0?"ON":"OFF")&&$(r,c),1&e&&o!==(o=l(t[0]>0?"rcorners1":"rcorners2")+" svelte-1mqlf8x")&&p(n,"class",o)},i:t,o:t,d(t){t&&i(n)}}}function R(t,e,n){const r=w();let{myurl:o}=e;var c;k((()=>{!async function(){setInterval((async()=>{const t=await fetch(o+"/status/"+l);let e=await t.json();n(0,s=e.result),r("message",{led:l,statusresult:s})}),2e3)}()})),c=()=>{clearInterval(interval)},y().$$.on_destroy.push(c);let{lednum:l}=e,s="";return t.$$set=t=>{"myurl"in t&&n(1,o=t.myurl),"lednum"in t&&n(2,l=t.lednum)},[s,o,l]}class U extends K{constructor(t){super(),J(this,t,R,Q,c,{myurl:1,lednum:2})}}function V(t){let e,n,r={ctx:t,current:null,token:null,hasCatch:!0,pending:Y,then:X,catch:W,value:10,error:11};return z(n=t[2],r),{c(){e=h(),r.block.c()},m(t,n){u(t,e,n),r.block.m(t,r.anchor=n),r.mount=()=>e.parentNode,r.anchor=e},p(e,o){t=e,r.ctx=t,4&o&&n!==(n=t[2])&&z(n,r)||B(r,t,o)},d(t){t&&i(e),r.block.d(t),r.token=null,r=null}}}function W(t){let e,n,r=t[11].message+"";return{c(){e=a("div"),n=f(r),v(e,"color","red")},m(t,r){u(t,e,r),s(e,n)},p(t,e){4&e&&r!==(r=t[11].message+"")&&$(n,r)},d(t){t&&i(e)}}}function X(t){let e,n,r,o=t[10].result+"";return{c(){e=a("div"),n=f("Status: "),r=f(o)},m(t,o){u(t,e,o),s(e,n),s(e,r)},p(t,e){4&e&&o!==(o=t[10].result+"")&&$(r,o)},d(t){t&&i(e)}}}function Y(e){let n;return{c(){n=a("div"),n.textContent="...waiting"},m(t,e){u(t,n,e)},p:t,d(t){t&&i(n)}}}function Z(t){let e,n,r={ctx:t,current:null,token:null,hasCatch:!0,pending:nt,then:et,catch:tt,value:10,error:11};return z(n=t[3],r),{c(){e=h(),r.block.c()},m(t,n){u(t,e,n),r.block.m(t,r.anchor=n),r.mount=()=>e.parentNode,r.anchor=e},p(e,o){t=e,r.ctx=t,8&o&&n!==(n=t[3])&&z(n,r)||B(r,t,o)},d(t){t&&i(e),r.block.d(t),r.token=null,r=null}}}function tt(t){let e,n,r=t[11].message+"";return{c(){e=a("div"),n=f(r),v(e,"color","red")},m(t,r){u(t,e,r),s(e,n)},p(t,e){8&e&&r!==(r=t[11].message+"")&&$(n,r)},d(t){t&&i(e)}}}function et(t){let e,n,r,o=t[10].result+"";return{c(){e=a("div"),n=f("Status: "),r=f(o)},m(t,o){u(t,e,o),s(e,n),s(e,r)},p(t,e){8&e&&o!==(o=t[10].result+"")&&$(r,o)},d(t){t&&i(e)}}}function nt(e){let n;return{c(){n=a("div"),n.textContent="...waiting"},m(t,e){u(t,n,e)},p:t,d(t){t&&i(n)}}}function rt(t){let e,n,o,c,l,f,h,$,v,g,b,y,k,w,x,_,E,q,C,j,O,N,A,F,L,P,S,z,B,H,J,K,Q,R;y=new U({props:{lednum:"1",myurl:ot}}),y.$on("message",t[4]);let W=null!=t[0]&&V(t);A=new U({props:{lednum:"2",myurl:ot}}),A.$on("message",t[4]);let X=null!=t[0]&&Z(t);return{c(){e=a("main"),n=a("h1"),n.textContent="LED TOOL",o=d(),c=a("div"),l=a("div"),l.textContent="status",f=d(),h=a("div"),h.textContent="Action",$=d(),v=a("div"),v.textContent="Action status",g=d(),b=a("div"),D(y.$$.fragment),k=d(),w=a("div"),x=a("label"),_=a("input"),E=d(),q=a("span"),C=d(),j=a("div"),W&&W.c(),O=d(),N=a("div"),D(A.$$.fragment),F=d(),L=a("div"),P=a("label"),S=a("input"),z=d(),B=a("span"),H=d(),J=a("div"),X&&X.c(),p(n,"class","svelte-isq7rf"),p(l,"class","header svelte-isq7rf"),p(h,"class","header svelte-isq7rf"),p(v,"class","header svelte-isq7rf"),p(_,"type","checkbox"),p(_,"class","svelte-isq7rf"),p(q,"class","slider round svelte-isq7rf"),p(x,"class","switch svelte-isq7rf"),p(S,"type","checkbox"),p(S,"class","svelte-isq7rf"),p(B,"class","slider round svelte-isq7rf"),p(P,"class","switch svelte-isq7rf"),p(c,"class","grid-container svelte-isq7rf"),p(e,"class","svelte-isq7rf")},m(r,i){u(r,e,i),s(e,n),s(e,o),s(e,c),s(c,l),s(c,f),s(c,h),s(c,$),s(c,v),s(c,g),s(c,b),M(y,b,null),s(c,k),s(c,w),s(w,x),s(x,_),_.checked=t[0],s(x,E),s(x,q),s(c,C),s(c,j),W&&W.m(j,null),s(c,O),s(c,N),M(A,N,null),s(c,F),s(c,L),s(L,P),s(P,S),S.checked=t[1],s(P,z),s(P,B),s(c,H),s(c,J),X&&X.m(J,null),K=!0,Q||(R=[m(_,"change",t[6]),m(S,"change",t[7])],Q=!0)},p(t,[e]){1&e&&(_.checked=t[0]),null!=t[0]?W?W.p(t,e):(W=V(t),W.c(),W.m(j,null)):W&&(W.d(1),W=null),2&e&&(S.checked=t[1]),null!=t[0]?X?X.p(t,e):(X=Z(t),X.c(),X.m(J,null)):X&&(X.d(1),X=null)},i(t){K||(T(y.$$.fragment,t),T(A.$$.fragment,t),K=!0)},o(t){I(y.$$.fragment,t),I(A.$$.fragment,t),K=!1},d(t){t&&i(e),G(y),W&&W.d(),G(A),X&&X.d(),Q=!1,r(R)}}}let ot="";async function ct(t,e){if(0==e){const e=await fetch(ot+"/off/"+t),n=await e.json();if(e.ok)return n;throw console.log(n),new Error(n)}{const e=await fetch(ot+"/on/"+t),n=await e.json();if(e.ok)return n;throw console.log(n),new Error(n)}}function lt(t,e,n){let r,o;k((async()=>{let t=1;const e=await fetch(ot+"/status/"+t);let c=await e.json();n(0,r=c.result>0),t=2;const l=await fetch(ot+"/status/"+t);let s=await l.json();n(1,o=s.result>0)}));let c,l,{name:s}=e;return t.$$set=t=>{"name"in t&&n(5,s=t.name)},t.$$.update=()=>{1&t.$$.dirty&&(r?n(2,c=ct(1,1)):r||null==r||n(2,c=ct(1,0))),2&t.$$.dirty&&(o?n(3,l=ct(2,1)):o||null==o||n(3,l=ct(2,0)))},[r,o,c,l,function(t){"1"==t.detail.led&&t.detail.statusresult,"2"==t.detail.led&&t.detail.statusresult},s,function(){r=this.checked,n(0,r)},function(){o=this.checked,n(1,o)}]}return new class extends K{constructor(t){super(),J(this,t,lt,rt,c,{name:5})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map