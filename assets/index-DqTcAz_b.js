var Ha=Object.defineProperty;var yi=e=>{throw TypeError(e)};var Wa=(e,t,n)=>t in e?Ha(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Y=(e,t,n)=>Wa(e,typeof t!="symbol"?t+"":t,n),Nn=(e,t,n)=>t.has(e)||yi("Cannot "+n);var o=(e,t,n)=>(Nn(e,t,"read from private field"),n?n.call(e):t.get(e)),k=(e,t,n)=>t.has(e)?yi("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),_=(e,t,n,i)=>(Nn(e,t,"write to private field"),i?i.call(e,n):t.set(e,n),n),b=(e,t,n)=>(Nn(e,t,"access private method"),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();const Gi=!1;var Oi=Array.isArray,Ba=Array.prototype.indexOf,Xt=Array.prototype.includes,Sn=Array.from,zi=Object.defineProperty,Bt=Object.getOwnPropertyDescriptor,Ni=Object.getOwnPropertyDescriptors,Ua=Object.prototype,Ka=Array.prototype,li=Object.getPrototypeOf,bi=Object.isExtensible;const Un=()=>{};function Ya(e){return e()}function Kn(e){for(var t=0;t<e.length;t++)e[t]()}function Fi(){var e,t,n=new Promise((i,a)=>{e=i,t=a});return{promise:n,resolve:e,reject:t}}const Q=2,Qt=4,rn=8,Di=1<<24,Ae=16,Pe=32,Qe=64,Yn=128,ci=256,Te=512,W=1024,I=2048,he=4096,te=8192,X=16384,jt=32768,wn=1<<25,ht=65536,xn=1<<17,Ja=1<<18,St=1<<19,Li=1<<20,Re=1<<25,_n=1<<21,bt=1<<22,Ve=1<<23,Ut=Symbol("$state"),Hi=Symbol("component"),Va=Symbol(""),mn=Symbol("attributes"),Jn=Symbol("class"),Xa=Symbol("style"),zt=Symbol("text"),sn=new class extends Error{constructor(){super(...arguments);Y(this,"name","StaleReactionError");Y(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}},Qa=1,Za=2,Wi=4,$a=8,er=16,tr=1,nr=2,Bi={},H=Symbol("uninitialized"),Ui="http://www.w3.org/1999/xhtml",ir="http://www.w3.org/2000/svg",ar="http://www.w3.org/1998/Math/MathML";function rr(){console.warn("https://svelte.dev/e/derived_inert")}function sr(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Ki(e){return e===this.v}function or(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Yi(e){return!or(e,this.v)}function lr(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function cr(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function pr(e,t,n){throw new Error("https://svelte.dev/e/each_key_duplicate")}function hr(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function dr(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function gr(e){throw new Error("https://svelte.dev/e/effect_orphan")}function fr(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ur(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function vr(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function mr(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function yr(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let on=!1,br=!1;function wr(){on=!0}let G=null;function Pt(e){G=e}function It(e,t=!1,n){G={p:G,i:!1,c:null,e:null,s:e,x:null,r:E,l:on&&!t?{s:null,u:null,$:[]}:null}}function Mt(e){var t=G,n=t.e;if(n!==null){t.e=null;for(var i of n)fa(i)}return t.i=!0,G=t.p,Ji(e)}function Ji(e={}){return zi(e,Hi,{value:!0}),e}function ln(){return!on||G!==null&&G.l===null}let yt=[];function xr(){var e=yt;yt=[],Kn(e)}function Je(e){if(yt.length===0){var t=yt;queueMicrotask(()=>{t===yt&&xr()})}yt.push(e)}const _r=-7169;function D(e,t){e.f=e.f&_r|t}function pi(e){(e.f&Te)!==0||e.deps===null?D(e,W):D(e,he)}function Vi(e,t){(e.f&I)!==0?t.set(e,I):(e.f&he)!==0&&t.get(e)!==I&&t.set(e,he),D(e,W)}function In(e){var t=A,n=E;me(null),Oe(null);try{return e()}finally{me(t),Oe(n)}}function Ar(e,t,n,i){const a=ln()?Mn:kn;var r=e.filter(d=>!d.settled),s=t.map(a);if(n.length===0&&r.length===0){i(s);return}var l=E,c=kr(),p=r.length===1?r[0].promise:r.length>1?Promise.all(r.map(d=>d.promise)):null;function h(d){if((l.f&X)===0){c();try{i([...s,...d])}catch(u){Me(u,l)}An()}}var g=Xi();if(n.length===0){p.then(()=>h([])).finally(g);return}function v(){Promise.all(n.map(d=>Tr(d))).then(h).catch(d=>Me(d,l)).finally(g)}p?p.then(()=>{if((l.f&X)!==0){g();return}c(),v(),An()}):v()}function kr(){var e=E,t=A,n=G,i=x;return function(r=!0){Oe(e),me(t),Pt(n),r&&(e.f&X)===0&&(i==null||i.activate(),i==null||i.apply())}}function An(e=!0){Oe(null),me(null),Pt(null),e&&(x==null||x.deactivate())}function Xi(){var e=E,t=e.b,n=x,i=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,n),n.increment(i,e),()=>{t==null||t.update_pending_count(-1,n),n.decrement(i,e)}}function Mn(e){var t=Q|I;return E!==null&&(E.f|=St),{ctx:G,deps:null,effects:null,equals:Ki,f:t,fn:e,reactions:null,rv:0,v:H,wv:0,parent:E,ac:null}}const Nt=Symbol("obsolete");function Tr(e,t,n){let i=E;i===null&&cr();var a=void 0,r=gt(H),s=!A,l=new Set;return Dr(()=>{var d,u;var c=E,p=Fi();a=p.promise;try{Promise.resolve(e()).then(p.resolve,m=>{m!==sn&&p.reject(m)}).finally(An)}catch(m){p.reject(m),An()}var h=x;if(s){if((c.f&jt)!==0)var g=Xi();if((d=i.b)!=null&&d.is_rendered())(u=h.async_deriveds.get(c))==null||u.reject(Nt);else for(const m of l.values())m.reject(Nt);l.add(p),h.async_deriveds.set(c,p)}const v=(m,f=void 0)=>{g==null||g(),l.delete(p),f!==Nt&&(h.activate(),f?(r.f|=Ve,Ct(r,f)):((r.f&Ve)!==0&&(r.f^=Ve),Ct(r,m)),h.deactivate())};p.promise.then(v,m=>v(null,m||"unknown"))}),zr(()=>{for(const c of l)c.reject(Nt)}),new Promise(c=>{function p(h){function g(){h===a?c(r):p(a)}h.then(g,g)}p(a)})}function Gt(e){const t=Mn(e);return wa(t),t}function kn(e){const t=Mn(e);return t.equals=Yi,t}function Pr(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)ae(t[n])}}function hi(e){var t,n=E,i=e.parent;if(!Ze&&i!==null&&e.v!==H&&(i.f&(X|te))!==0)return rr(),e.v;Oe(i);try{Pr(e),t=ka(e)}finally{Oe(n)}return t}function Qi(e){var t=hi(e);if(!e.equals(t)&&(e.wv=_a(),(!(x!=null&&x.is_fork)||e.deps===null)&&(x!==null?(x.capture(e,t,!0),Kt==null||Kt.capture(e,t,!0)):e.v=t,e.deps===null))){D(e,W);return}Ze||(U!==null?(fi()||x!=null&&x.is_fork)&&U.set(e,t):pi(e))}function Cr(e){var t;if(e.effects!==null)for(const n of e.effects)(n.teardown||n.ac)&&((t=n.teardown)==null||t.call(n),n.ac!==null&&In(()=>{n.ac.abort(sn),n.ac=null}),n.fn!==null&&(n.teardown=Un),Zt(n,0),ui(n))}function Zi(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&Et(t)}let Fn=null,vt=null,x=null,Kt=null,U=null,Vn=null,Dn=!1,Yt=null,yn=null;var wi=0;let Er=1;var wt,xt,_t,ze,At,Ne,en,Ee,je,kt,rt,T,Xn,$i,Qn,Ft,Zn,ea,ta,na,mt,jr,Dt;const Cn=class Cn{constructor(){k(this,T);Y(this,"id",Er++);Y(this,"started",!1);Y(this,"linked",!0);Y(this,"prev",null);Y(this,"next",null);Y(this,"async_deriveds",new Map);Y(this,"current",new Map);Y(this,"previous",new Map);k(this,wt,new Set);k(this,xt,new Set);k(this,_t,0);k(this,ze,new Map);k(this,At,null);k(this,Ne,[]);k(this,en,[]);k(this,Ee,new Map);k(this,je,new Map);k(this,kt,new Set);Y(this,"is_fork",!1);k(this,rt,!1);vt===null?Fn=vt=this:(vt.next=this,this.prev=vt),vt=this}skip_effect(t){o(this,je).has(t)||o(this,je).set(t,{d:[],m:[]}),o(this,kt).delete(t)}unskip_effect(t,n=i=>this.schedule(i)){var i=o(this,je).get(t);if(i){o(this,je).delete(t);for(var a of i.d)D(a,I),n(a);for(a of i.m)D(a,he),n(a)}o(this,kt).add(t)}capture(t,n,i=!1){t.v!==H&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&Ve)===0&&(this.current.set(t,[n,i]),U==null||U.set(t,n)),this.is_fork||(t.v=n)}activate(){x=this}deactivate(){x=null,U=null}flush(){try{Dn=!0,x=this,b(this,T,Ft).call(this)}finally{wi=0,Vn=null,Yt=null,yn=null,Dn=!1,x=null,U=null,qe.clear()}}discard(){var t;for(const n of o(this,xt))n(this);o(this,xt).clear();for(const n of this.async_deriveds.values())n.reject(Nt);b(this,T,Dt).call(this),(t=o(this,At))==null||t.resolve()}register_created_effect(t){o(this,en).push(t)}increment(t,n){if(_(this,_t,o(this,_t)+1),t){let i=o(this,ze).get(n)??0;o(this,ze).set(n,i+1)}}decrement(t,n){if(_(this,_t,o(this,_t)-1),t){let i=o(this,ze).get(n)??0;i===1?o(this,ze).delete(n):o(this,ze).set(n,i-1)}o(this,rt)||(_(this,rt,!0),Je(()=>{_(this,rt,!1),this.linked&&this.flush()}))}transfer_reactions(t){for(const[n,i]of t)this.add_dirty_reaction(n,i);t.clear()}add_dirty_reaction(t,n){(n===I||o(this,Ee).get(t)!==I)&&o(this,Ee).set(t,n)}oncommit(t){o(this,wt).add(t)}ondiscard(t){o(this,xt).add(t)}settled(){return(o(this,At)??_(this,At,Fi())).promise}static ensure(){if(x===null){const t=x=new Cn;Dn||Je(()=>{t.started||t.flush()})}return x}apply(){{U=null;return}}schedule(t){var n;if(Vn=t,(n=t.b)!=null&&n.is_pending&&(t.f&(Qt|rn|Di))!==0&&(t.f&jt)===0){t.b.defer_effect(t);return}o(this,Ne).push(t)}};wt=new WeakMap,xt=new WeakMap,_t=new WeakMap,ze=new WeakMap,At=new WeakMap,Ne=new WeakMap,en=new WeakMap,Ee=new WeakMap,je=new WeakMap,kt=new WeakMap,rt=new WeakMap,T=new WeakSet,Xn=function(){if(this.is_fork)return!0;for(const t of o(this,ze).keys())if(!b(this,T,$i).call(this,t))return!0;return!1},$i=function(t){for(var n=t;n!==null;n=n.parent)if(o(this,je).has(n))return!0;return!1},Qn=function(){var t=[];for(const r of o(this,Ne))if(!((r.f&X)!==0||(r.f&(I|he))===0)){for(var n=r,i=!1;n.parent!==null;){n=n.parent;var a=n.f;if((a&(Qe|Pe))!==0){if((a&W)===0){i=!0;break}n.f^=W}}i||t.push(n)}return _(this,Ne,[]),t},Ft=function(){var l,c,p,h;this.started=!0;for(const[g,v]of o(this,Ee))D(g,v),this.schedule(g);this.apply();for(var t=Yt=[],n=[],i=yn=[];o(this,Ne).length>0;){wi++>1e3&&(b(this,T,Dt).call(this),Sr());for(const g of b(this,T,Qn).call(this))try{b(this,T,Zn).call(this,g,t,n)}catch(v){throw ra(g),b(this,T,Xn).call(this)||this.discard(),v}}if(x=null,i.length>0){var a=Cn.ensure();for(const g of i)a.schedule(g)}if(Yt=null,yn=null,b(this,T,Xn).call(this)){b(this,T,mt).call(this,n),b(this,T,mt).call(this,t);for(const[g,v]of o(this,je))aa(g,v);i.length>0&&b(l=x,T,Ft).call(l);return}const r=b(this,T,ea).call(this);if(r){b(this,T,mt).call(this,n),b(this,T,mt).call(this,t),b(c=r,T,na).call(c,this);return}o(this,Ee).clear();for(const g of o(this,wt))g(this);o(this,wt).clear(),Kt=this,xi(n),xi(t),Kt=null,(p=o(this,At))==null||p.resolve();var s=x;o(this,_t)===0&&(o(this,Ne).length===0||s!==null)&&b(this,T,Dt).call(this),s!==null&&(qe.clear(),b(h=s,T,Ft).call(h))},Zn=function(t,n,i){t.f^=W;for(var a=t.first;a!==null;){var r=a.f,s=(r&(Pe|Qe))!==0,l=s&&(r&W)!==0,c=l||(r&te)!==0||o(this,je).has(a);if(!c&&a.fn!==null){s?a.f^=W:(r&Qt)!==0?n.push(a):pn(a)&&((r&Ae)!==0&&this.add_dirty_reaction(a,he),Et(a));var p=a.first;if(p!==null){a=p;continue}}for(;a!==null;){var h=a.next;if(h!==null){a=h;break}a=a.parent}}},ea=function(){for(var t=this.prev;t!==null;t=t.prev)if(!t.is_fork&&b(this,T,ta).call(this,t))return t;return null},ta=function(t){for(const[n,[,i]]of this.current)if(!i&&t.current.has(n))return!0;return!1},na=function(t){var i;for(const[a,r]of t.current)!this.previous.has(a)&&t.previous.has(a)&&this.previous.set(a,t.previous.get(a)),this.current.set(a,r);for(const[a,r]of t.async_deriveds){const s=this.async_deriveds.get(a);s&&r.promise.then(s.resolve).catch(s.reject)}t.async_deriveds.clear(),this.transfer_reactions(o(t,Ee));const n=a=>{var r=a.reactions;if(r!==null&&!((a.f&Q)!==0&&(a.f&(I|he))===0))for(const c of r){var s=c.f;if((s&Q)!==0)n(c);else{var l=c;s&(bt|Ae)&&!this.async_deriveds.has(l)&&(o(this,Ee).delete(l),D(l,I),this.schedule(l))}}};for(const a of this.current.keys())n(a);this.oncommit(()=>t.discard()),b(i=t,T,Dt).call(i),x=this,b(this,T,Ft).call(this)},mt=function(t){for(var n=0;n<t.length;n+=1)Vi(t[n],o(this,Ee))},jr=function(){var g,v;for(let d=Fn;d!==null;d=d.next){var t=d.id<this.id,n=[];for(const[u,[m,f]]of this.current){if(d.current.has(u)){var i=d.current.get(u)[0];if(t&&m!==i)d.current.set(u,[m,f]);else continue}n.push(u)}if(t)for(const[u,m]of this.async_deriveds){const f=d.async_deriveds.get(u);f&&m.promise.then(f.resolve).catch(f.reject)}var a=[...d.current.keys()].filter(u=>!d.current.get(u)[1]);if(!(!d.started||a.length===0)){var r=a.filter(u=>!this.current.has(u));if(r.length===0)t&&d.discard();else if(n.length>0){if(t)for(const u of o(this,kt))d.unskip_effect(u,m=>{var f;(m.f&(Ae|bt))!==0?d.schedule(m):b(f=d,T,mt).call(f,[m])});d.activate();var s=new Set,l=new Map;for(var c of n)ia(c,r,s,l);l=new Map;var p=[...d.current].filter(([u,m])=>{const f=this.current.get(u);return f?f[0]!==m[0]||f[1]!==m[1]:!0}).map(([u])=>u);if(p.length>0)for(const u of o(this,en))(u.f&(X|te|xn))===0&&di(u,p,l)&&((u.f&(bt|Ae))!==0?(D(u,I),d.schedule(u)):d.add_dirty_reaction(u,I));if(o(d,Ne).length>0&&!o(d,rt)){d.apply();for(var h of b(g=d,T,Qn).call(g))b(v=d,T,Zn).call(v,h,[],[])}d.deactivate()}}}},Dt=function(){if(this.linked){var t=this.prev,n=this.next;t===null?Fn=n:t.next=n,n===null?vt=t:n.prev=t,this.linked=!1}};let dt=Cn;function Sr(){try{fr()}catch(e){Me(e,Vn)}}let we=null;function xi(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var i=e[n++];if((i.f&(X|te))===0&&pn(i)&&(we=new Set,Et(i),i.deps===null&&i.first===null&&i.nodes===null&&i.teardown===null&&i.ac===null&&ma(i),(we==null?void 0:we.size)>0)){qe.clear();for(const a of we){if((a.f&(X|te))!==0)continue;const r=[a];let s=a.parent;for(;s!==null;)we.has(s)&&(we.delete(s),r.push(s)),s=s.parent;for(let l=r.length-1;l>=0;l--){const c=r[l];(c.f&(X|te))===0&&Et(c)}}we.clear()}}we=null}}function ia(e,t,n,i){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(const a of e.reactions){const r=a.f;(r&Q)!==0?ia(a,t,n,i):(r&(bt|Ae))!==0&&(r&I)===0&&di(a,t,i)&&(D(a,I),gi(a))}}function di(e,t,n){const i=n.get(e);if(i!==void 0)return i;if(e.deps!==null)for(const a of e.deps){if(Xt.call(t,a))return!0;if((a.f&Q)!==0&&di(a,t,n))return n.set(a,!0),!0}return n.set(e,!1),!1}function gi(e){x.schedule(e)}function aa(e,t){if(!((e.f&Pe)!==0&&(e.f&W)!==0)){(e.f&I)!==0?t.d.push(e):(e.f&he)!==0&&t.m.push(e),D(e,W);for(var n=e.first;n!==null;)aa(n,t),n=n.next}}function ra(e){D(e,W);for(var t=e.first;t!==null;)ra(t),t=t.next}let Tn=new Set;const qe=new Map;let sa=!1;function gt(e,t){var n={f:0,v:e,reactions:null,equals:Ki,rv:0,wv:0};return n}function Be(e,t){const n=gt(e);return wa(n),n}function Ir(e,t=!1,n=!0){var a;const i=gt(e);return t||(i.equals=Yi),on&&n&&G!==null&&G.l!==null&&((a=G.l).s??(a.s=[])).push(i),i}function tt(e,t,n=!1){A!==null&&(!ke||(A.f&xn)!==0)&&ln()&&(A.f&(Q|Ae|bt|xn))!==0&&(Ge===null||!Ge.has(e))&&mr();let i=n?Lt(t):t;return Ct(e,i,yn)}var it=null,$n=0;function Ct(e,t,n=null){if(!e.equals(t)){Ze?qe.set(e,t):qe.has(e)||qe.set(e,e.v);var i=dt.ensure();if(i.capture(e,t),(e.f&Q)!==0){const a=e;(e.f&I)!==0&&hi(a),U===null&&pi(a)}e.wv=_a(),it=null,$n=0,oa(e,I,n),it=null,ln()&&E!==null&&(E.f&W)!==0&&(E.f&(Pe|Qe))===0&&(ge===null?Wr([e]):ge.push(e)),!i.is_fork&&Tn.size>0&&!sa&&Mr()}return t}function Mr(){sa=!1;for(const e of Tn){(e.f&W)!==0&&D(e,he);let t;try{t=pn(e)}catch{t=!0}t&&Et(e)}Tn.clear()}function Jt(e){tt(e,e.v+1)}function oa(e,t,n){var i=e.reactions;if(i!==null){var a=ln(),r=i.length;if($n+=r,$n>1e5&&it===null&&(it=new Set),it!==null){if(it.has(e))return;it.add(e)}for(var s=0;s<r;s++){var l=i[s],c=l.f;if(!(!a&&l===E)){var p=(c&I)===0;if(p&&D(l,t),(c&xn)!==0)Tn.add(l);else if((c&Q)!==0){var h=l;U==null||U.delete(h),oa(h,he,n)}else if(p){var g=l;(c&Ae)!==0&&we!==null&&we.add(g),n!==null?n.push(g):gi(g)}}}}}function Lt(e){if(typeof e!="object"||e===null||Ut in e||Hi in e)return e;const t=li(e);if(t!==Ua&&t!==Ka)return e;var n=new Map,i=Oi(e),a=Be(0),r=pt,s=l=>{if(pt===r)return l();var c=A,p=pt;me(null),ki(r);var h=l();return me(c),ki(p),h};return i&&n.set("length",Be(e.length)),new Proxy(e,{defineProperty(l,c,p){(!("value"in p)||p.configurable===!1||p.enumerable===!1||p.writable===!1)&&ur();var h=n.get(c);return h===void 0?s(()=>{var g=Be(p.value);return n.set(c,g),g}):tt(h,p.value,!0),!0},deleteProperty(l,c){var p=n.get(c);if(p===void 0){if(c in l){const h=s(()=>Be(H));n.set(c,h),Jt(a)}}else tt(p,H),Jt(a);return!0},get(l,c,p){var d;if(c===Ut)return e;var h=n.get(c),g=c in l;if(h===void 0&&(!g||(d=Bt(l,c))!=null&&d.writable)&&(h=s(()=>{var u=Lt(g?l[c]:H),m=Be(u);return m}),n.set(c,h)),h!==void 0){var v=w(h);return v===H?void 0:v}return Reflect.get(l,c,p)},getOwnPropertyDescriptor(l,c){var v;(v=this.has)==null||v.call(this,l,c);var p=Reflect.getOwnPropertyDescriptor(l,c),h=n.get(c);if(h!==void 0){var g=w(h);if(g===H)return;if(p&&"value"in p)p.value=g;else return{enumerable:!0,configurable:!0,value:g,writable:!0}}return p},has(l,c){var v;if(c===Ut)return!0;var p=n.get(c),h=p!==void 0&&p.v!==H||Reflect.has(l,c);if(p!==void 0||(E!==null||A!==null)&&(!h||(v=Bt(l,c))!=null&&v.writable)){p===void 0&&(p=s(()=>{var d=h?Lt(l[c]):H,u=Be(d);return u}),n.set(c,p));var g=w(p);if(g===H)return!1}return h},set(l,c,p,h){var N;var g=n.get(c),v=c in l;if(i&&c==="length")for(var d=p;d<g.v;d+=1){var u=n.get(d+"");u!==void 0?tt(u,H):d in l&&(u=s(()=>Be(H)),n.set(d+"",u))}if(g===void 0)(!v||(N=Bt(l,c))!=null&&N.writable)&&(g=s(()=>Be(void 0)),tt(g,Lt(p)),n.set(c,g));else{v=g.v!==H;var m=s(()=>Lt(p));tt(g,m)}var f=Reflect.getOwnPropertyDescriptor(l,c);if(f!=null&&f.set&&f.set.call(h,p),!v){if(i&&typeof c=="string"){var y=n.get("length"),R=Number(c);Number.isInteger(R)&&R>=y.v&&tt(y,R+1)}Jt(a)}return!0},ownKeys(l){w(a);var c=Reflect.ownKeys(l).filter(g=>{var v=n.get(g);return v===void 0||v.v!==H});for(var[p,h]of n)h.v!==H&&!(p in l)&&c.push(p);return c},setPrototypeOf(){vr()}})}var _i,la,ca,pa;function Rr(){if(_i===void 0){_i=window,la=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;ca=Bt(t,"firstChild").get,pa=Bt(t,"nextSibling").get,bi(e)&&(e[Jn]=void 0,e[mn]=null,e[Xa]=void 0,e.__e=void 0),bi(n)&&(n[zt]=void 0)}}function Xe(e=""){return document.createTextNode(e)}function De(e){return ca.call(e)}function cn(e){return pa.call(e)}function C(e,t){return De(e)}function nt(e,t=!1){{var n=De(e);return n instanceof Comment&&n.data===""?cn(n):n}}function ee(e,t=!1){return De(e)}function F(e,t=1,n=!1){let i=e;for(;t--;)i=cn(i);return i}function qr(e){e.textContent=""}function ha(){return!1}function da(e,t,n){return t==null||t===Ui?n?document.createElement(e,{is:n}):document.createElement(e):n?document.createElementNS(t,e,{is:n}):document.createElementNS(t,e)}function Gr(e){var t=E;if(t===null)return A.f|=Ve,e;if((t.f&jt)===0&&(t.f&Qt)===0)throw e;Me(e,t)}function Me(e,t){if(e===Bi)throw e;if(!(t!==null&&(t.f&X)!==0)){for(;t!==null;){if((t.f&Yn)!==0&&(t.f&(X|wn))===0){if((t.f&jt)===0)throw e;try{t.b.error(e);return}catch(n){e=n}}t=t.parent}throw e}}function ga(e){E===null&&(A===null&&gr(),dr()),Ze&&hr()}function Or(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function Le(e,t){var n=E;n!==null&&(n.f&te)!==0&&(e|=te);var i={ctx:G,deps:null,nodes:null,f:e|I|Te,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};x==null||x.register_created_effect(i);var a=i;if((e&Qt)!==0)Yt!==null?Yt.push(i):dt.ensure().schedule(i);else if(t!==null){try{Et(i)}catch(s){throw ae(i),s}a.deps===null&&a.teardown===null&&a.nodes===null&&a.first===a.last&&(a.f&St)===0&&(a=a.first,(e&Ae)!==0&&(e&ht)!==0&&a!==null&&(a.f|=ht))}if(a!==null&&(a.parent=n,n!==null&&Or(a,n),A!==null&&(A.f&Q)!==0&&(e&Qe)===0)){var r=A;(r.effects??(r.effects=[])).push(a)}return i}function fi(){return A!==null&&!ke}function zr(e){const t=Le(rn,null);return D(t,W),t.teardown=e,t}function ei(e){ga();var t=E.f,n=!A&&(t&Pe)!==0&&G!==null&&!G.i;if(n){var i=G;(i.e??(i.e=[])).push(e)}else return fa(e)}function fa(e){return Le(Qt|Li,e)}function Nr(e){return ga(),Le(rn|Li,e)}function Fr(e){dt.ensure();const t=Le(Qe|St,e);return(n={})=>new Promise(i=>{n.outro?ct(t,()=>{ae(t),i(void 0)}):(ae(t),i(void 0))})}function Dr(e){return Le(bt|St,e)}function Lr(e,t=0){return Le(rn|t,e)}function B(e,t=[],n=[],i=[]){Ar(i,t,n,a=>{Le(rn,()=>{e(...a.map(w))})})}function Rn(e,t=0){var n=Le(Ae|t,e);return n}function ve(e){return Le(Pe|St,e)}function ua(e){var t=e.teardown;if(t!==null){const n=Ze,i=A;Ai(!0),me(null);try{t.call(null)}catch(a){Me(a,e.parent)}finally{Ai(n),me(i)}}}function ui(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const a=n.ac;a!==null&&In(()=>{a.abort(sn)});var i=n.next;(n.f&Qe)!==0?n.parent=null:ae(n,t),n=i}}function Hr(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&Pe)===0&&ae(t),t=n}}function ae(e,t=!0){var n=!1;(t||(e.f&Ja)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(va(e.nodes.start,e.nodes.end),n=!0),e.f|=wn,ui(e,t&&!n),Zt(e,0);var i=e.nodes&&e.nodes.t;if(i!==null)for(const r of i)r.stop();ua(e),e.f^=wn,e.f|=X;var a=e.parent;a!==null&&a.first!==null&&ma(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function va(e,t){for(;e!==null;){var n=e===t?null:cn(e);e.remove(),e=n}}function ma(e){var t=e.parent,n=e.prev,i=e.next;n!==null&&(n.next=i),i!==null&&(i.prev=n),t!==null&&(t.first===e&&(t.first=i),t.last===e&&(t.last=n))}function ct(e,t,n=!0){var i=[];e.f|=ci,ya(e,i,!0);var a=()=>{n&&ae(e),t&&t()},r=i.length;if(r>0){var s=()=>--r||a();for(var l of i)l.out(s)}else a()}function ya(e,t,n){if((e.f&te)===0){e.f^=te;var i=e.nodes&&e.nodes.t;if(i!==null)for(const l of i)(l.is_global||n)&&t.push(l);for(var a=e.first;a!==null;){var r=a.next;if((a.f&Qe)===0){var s=(a.f&ht)!==0||(a.f&Pe)!==0&&(e.f&Ae)!==0;ya(a,t,s?n:!1)}a=r}}}function Pn(e){e.f&=~ci,ba(e,!0)}function ba(e,t){if((e.f&ci)===0&&(e.f&te)!==0){e.f^=te,(e.f&W)===0&&(D(e,I),dt.ensure().schedule(e));for(var n=e.first;n!==null;){var i=n.next,a=(n.f&ht)!==0||(n.f&Pe)!==0;ba(n,a?t:!1),n=i}var r=e.nodes&&e.nodes.t;if(r!==null)for(const s of r)(s.is_global||t)&&s.in()}}function vi(e,t){if(e.nodes)for(var n=e.nodes.start,i=e.nodes.end;n!==null;){var a=n===i?null:cn(n);t.append(n),n=a}}let Ze=!1;function Ai(e){Ze=e}let A=null,ke=!1;function me(e){A=e}let E=null;function Oe(e){E=e}let Ge=null;function wa(e){A!==null&&((A.f&_n)!==0||(A.f&Q)!==0)&&(Ge??(Ge=new Set)).add(e)}let ie=null,pe=0,ge=null;function Wr(e){ge=e}let xa=1,at=0,pt=at;function ki(e){pt=e}function _a(){return++xa}function pn(e){var t=e.f;if((t&I)!==0)return!0;if((t&he)!==0){for(var n=e.deps,i=n.length,a=0;a<i;a++){var r=n[a];if(pn(r)&&Qi(r),r.wv>e.wv)return!0}(t&Te)!==0&&U===null&&D(e,W)}return!1}function Aa(e,t,n=!0){var i=e.reactions;if(i!==null&&!(Ge!==null&&Ge.has(e)))for(var a=0;a<i.length;a++){var r=i[a];(r.f&Q)!==0?Aa(r,t,!1):t===r&&(n?D(r,I):(r.f&W)!==0&&D(r,he),gi(r))}}function ka(e){var t=ie,n=pe,i=ge,a=A,r=Ge,s=G,l=ke,c=pt,p=e.f;ie=null,pe=0,ge=null,A=(p&(Pe|Qe))===0?e:null,Ge=null,Pt(e.ctx),ke=!1,pt=++at,e.ac!==null&&(In(()=>{e.ac.abort(sn)}),e.ac=null);try{e.f|=_n;var h=e.fn,g=h();e.f|=jt;var v=Ti(e);if(ln()&&ge!==null&&!ke&&v!==null&&(e.f&(Q|he|I))===0)for(var d=0;d<ge.length;d++)Aa(ge[d],e);if(a!==null&&a!==e){if(at++,a.deps!==null)for(let u=0;u<n;u+=1)a.deps[u].rv=at;if(t!==null)for(const u of t)u.rv=at;ge!==null&&(i===null?i=ge:i.push(...ge))}return(e.f&Ve)!==0&&(e.f^=Ve),g}catch(u){return Ti(e),Gr(u)}finally{e.f^=_n,ie=t,pe=n,ge=i,A=a,Ge=r,Pt(s),ke=l,pt=c}}function Ti(e){var a;var t=e.deps,n=x==null?void 0:x.is_fork;if(ie!==null){var i;if(n||Zt(e,pe),t!==null&&pe>0)for(t.length=pe+ie.length,i=0;i<ie.length;i++)t[pe+i]=ie[i];else e.deps=t=ie;if(fi()&&(e.f&Te)!==0)for(i=pe;i<t.length;i++)((a=t[i]).reactions??(a.reactions=[])).push(e)}else!n&&t!==null&&pe<t.length&&(Zt(e,pe),t.length=pe);return t}function Br(e,t){let n=t.reactions;if(n!==null){var i=Ba.call(n,e);if(i!==-1){var a=n.length-1;a===0?n=t.reactions=null:(n[i]=n[a],n.pop())}}if(n===null&&(t.f&Q)!==0&&(ie===null||!Xt.call(ie,t))){var r=t;(r.f&Te)!==0&&(r.f^=Te),r.v!==H&&pi(r),r.ac!==null&&In(()=>{r.ac.abort(sn),r.ac=null,D(r,I)}),Cr(r),Zt(r,0)}}function Zt(e,t){var n=e.deps;if(n!==null)for(var i=t;i<n.length;i++)Br(e,n[i])}function Et(e){var t=e.f;if((t&X)===0){D(e,W);var n=E;E=e;try{(t&(Ae|Di))!==0?Hr(e):ui(e),ua(e);var i=ka(e);e.teardown=typeof i=="function"?i:null,e.wv=xa;var a;Gi&&br&&(e.f&I)!==0&&e.deps}finally{E=n}}}function w(e){var t=e.f,n=(t&Q)!==0;if(A!==null&&!ke){var i=E!==null&&(E.f&X)!==0;if(!i&&(Ge===null||!Ge.has(e))){var a=A.deps;if((A.f&_n)!==0)e.rv<at&&(e.rv=at,ie===null&&a!==null&&a[pe]===e?pe++:ie===null?ie=[e]:ie.push(e));else{A.deps??(A.deps=[]),Xt.call(A.deps,e)||A.deps.push(e);var r=e.reactions;r===null?e.reactions=[A]:Xt.call(r,A)||r.push(A)}}}if(Ze&&qe.has(e))return qe.get(e);if(n){var s=e;if(Ze){var l=s.v;return((s.f&W)===0&&s.reactions!==null||Pa(s))&&(l=hi(s)),qe.set(s,l),l}var c=(s.f&Te)===0&&!ke&&A!==null&&(A.f&Te)!==0,p=(s.f&jt)===0;pn(s)&&(c&&(s.f|=Te),Qi(s)),c&&!p&&(Zi(s),Ta(s))}if(U!=null&&U.has(e))return U.get(e);if((e.f&Ve)!==0)throw e.v;return e.v}function Ta(e){if(e.f|=Te,e.deps!==null)for(const n of e.deps){var t=n.reactions;t===null?n.reactions=[e]:Xt.call(t,e)||t.push(e),(n.f&Q)!==0&&(n.f&Te)===0&&(Zi(n),Ta(n))}}function Pa(e){if(e.v===H)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(qe.has(t)||(t.f&Q)!==0&&Pa(t))return!0;return!1}function mi(e){var t=ke;try{return ke=!0,e()}finally{ke=t}}function Ur(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Ut in e)ti(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&Ut in n&&ti(n)}}}function ti(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let i in e)try{ti(e[i],t)}catch{}const n=li(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const i=Ni(n);for(let a in i){const r=i[a].get;if(r)try{r.call(e)}catch{}}}}}const Kr=["touchstart","touchmove"];function Yr(e){return Kr.includes(e)}const un=Symbol("events"),Jr=new Set,Pi=new Set;let Ln=null,Hn=!1;function Ci(e){var m,f;var t=this,n=t.ownerDocument,i=e.type,a=((m=e.composedPath)==null?void 0:m.call(e))||[],r=a[0]||e.target;Ln=e,Hn||(Hn=!0,setTimeout(()=>{Hn=!1,Ln=null}));var s=0,l=Ln===e&&e[un];if(l){var c=a.indexOf(l);if(c!==-1&&(t===document||t===window)){e[un]=t;return}var p=a.indexOf(t);if(p===-1)return;c<=p&&(s=c)}if(r=a[s]||e.target,r!==t){zi(e,"currentTarget",{configurable:!0,get(){return r||n}});var h=A,g=E;me(null),Oe(null);try{for(var v,d=[];r!==null&&r!==t;){try{var u=(f=r[un])==null?void 0:f[i];u!=null&&(!r.disabled||e.target===r)&&u.call(r,e)}catch(y){v?d.push(y):v=y}if(e.cancelBubble)break;s++,r=s<a.length?a[s]:null}if(v){for(let y of d)queueMicrotask(()=>{throw y});throw v}}finally{e[un]=t,delete e.currentTarget,me(h),Oe(g)}}}var Ri;const Wn=((Ri=globalThis==null?void 0:globalThis.window)==null?void 0:Ri.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function Vr(e){return(Wn==null?void 0:Wn.createHTML(e))??e}function Xr(e){var t=da("template");return t.innerHTML=Vr(e.replaceAll("<!>","<!---->")),t.content}function $t(e,t){var n=E;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function M(e,t){var n=(t&tr)!==0,i=(t&nr)!==0,a,r=!e.startsWith("<!>");return()=>{a===void 0&&(a=Xr(r?e:"<!>"+e),n||(a=De(a)));var s=i||la?document.importNode(a,!0):a.cloneNode(!0);if(n){var l=De(s),c=s.lastChild;$t(l,c)}else $t(s,s);return s}}function Qr(){var e=document.createDocumentFragment(),t=document.createComment(""),n=Xe();return e.append(t,n),$t(t,n),e}function S(e,t){e!==null&&e.before(t)}function Zr(e){let t=0,n=gt(0),i;return()=>{fi()&&(w(n),Lr(()=>(t===0&&(i=mi(()=>e(()=>Jt(n)))),t+=1,()=>{Je(()=>{t-=1,t===0&&(i==null||i(),i=void 0,Jt(n))})})))}}var $r=ht|St;function es(e,t,n,i){new ts(e,t,n,i)}var fe,oi,ue,st,J,oe,$,le,Se,ot,Ye,Tt,tn,Fe,En,P,ns,is,ni,Ke,as,ii,Ht,bn,ai,ri;class ts{constructor(t,n,i,a){k(this,P);Y(this,"parent");Y(this,"is_pending",!1);Y(this,"transform_error");k(this,fe);k(this,oi,null);k(this,ue);k(this,st);k(this,J);k(this,oe,null);k(this,$,null);k(this,le,null);k(this,Se,null);k(this,ot,0);k(this,Ye,0);k(this,Tt,!1);k(this,tn,new Map);k(this,Fe,null);k(this,En,Zr(()=>(_(this,Fe,gt(o(this,ot))),()=>{_(this,Fe,null)})));var r;_(this,fe,t),_(this,ue,n),_(this,st,s=>{var l=E;l.b=this,l.f|=Yn,i(s)}),this.parent=E.b,this.transform_error=a??((r=this.parent)==null?void 0:r.transform_error)??(s=>s),_(this,J,Rn(()=>{b(this,P,ii).call(this)},$r))}defer_effect(t){Vi(t,o(this,tn))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!o(this,ue).pending}update_pending_count(t,n){b(this,P,ai).call(this,t,n),_(this,ot,o(this,ot)+t),!(!o(this,Fe)||o(this,Tt))&&(_(this,Tt,!0),Je(()=>{_(this,Tt,!1),o(this,Fe)&&Ct(o(this,Fe),o(this,ot))}))}get_effect_pending(){return o(this,En).call(this),w(o(this,Fe))}error(t){if(t===Bi||!o(this,ue).onerror&&!o(this,ue).failed)throw t;x!=null&&x.is_fork?(o(this,oe)&&x.skip_effect(o(this,oe)),o(this,$)&&x.skip_effect(o(this,$)),o(this,le)&&x.skip_effect(o(this,le)),x.oncommit(()=>{b(this,P,Ke).call(this)||b(this,P,ri).call(this,t)})):b(this,P,ri).call(this,t)}}fe=new WeakMap,oi=new WeakMap,ue=new WeakMap,st=new WeakMap,J=new WeakMap,oe=new WeakMap,$=new WeakMap,le=new WeakMap,Se=new WeakMap,ot=new WeakMap,Ye=new WeakMap,Tt=new WeakMap,tn=new WeakMap,Fe=new WeakMap,En=new WeakMap,P=new WeakSet,ns=function(){try{_(this,oe,ve(()=>o(this,st).call(this,o(this,fe))))}catch(t){this.error(t)}},is=function(t){const n=o(this,ue).failed,{reset:i,invoke_onerror:a}=b(this,P,ni).call(this,t);Je(a),n&&_(this,le,ve(()=>{n(o(this,fe),()=>t,()=>i)}))},ni=function(t){var n=!1,i=!1;const a=()=>{if(!b(this,P,Ke).call(this)){if(n){sr();return}n=!0,i&&yr(),o(this,le)!==null&&ct(o(this,le),()=>{_(this,le,null)}),b(this,P,bn).call(this,()=>{b(this,P,ii).call(this)})}};return{reset:a,invoke_onerror:()=>{var s,l;if(!b(this,P,Ke).call(this))try{i=!0,(l=(s=o(this,ue)).onerror)==null||l.call(s,t,a),i=!1}catch(c){Me(c,o(this,J)&&o(this,J).parent)}}}},Ke=function(){return(o(this,J).f&(X|wn))!==0},as=function(){const t=o(this,ue).pending;t&&(this.is_pending=!0,_(this,$,ve(()=>t(o(this,fe)))),Je(()=>{if(!b(this,P,Ke).call(this)){var n=_(this,Se,document.createDocumentFragment()),i=Xe(),a=!1;if(n.append(i),_(this,oe,b(this,P,bn).call(this,()=>{try{return ve(()=>o(this,st).call(this,i))}catch(r){try{this.error(r),a=!0}catch(s){Me(s,o(this,J).parent)}return null}})),o(this,oe)===null){_(this,Se,null),a&&b(this,P,Ht).call(this,x);return}o(this,Ye)===0&&(o(this,fe).before(n),_(this,Se,null),ct(o(this,$),()=>{_(this,$,null)}),b(this,P,Ht).call(this,x))}}))},ii=function(){try{if(this.is_pending=this.has_pending_snippet(),_(this,Ye,0),_(this,ot,0),_(this,oe,ve(()=>{o(this,st).call(this,o(this,fe))})),o(this,Ye)>0){var t=_(this,Se,document.createDocumentFragment());vi(o(this,oe),t);const n=o(this,ue).pending;_(this,$,ve(()=>n(o(this,fe))))}else b(this,P,Ht).call(this,x)}catch(n){this.error(n)}},Ht=function(t){this.is_pending=!1,t.transfer_reactions(o(this,tn))},bn=function(t){var n=E,i=A,a=G;Oe(o(this,J)),me(o(this,J)),Pt(o(this,J).ctx);try{return dt.ensure(),t()}finally{Oe(n),me(i),Pt(a)}},ai=function(t,n){var i;if(!this.has_pending_snippet()){this.parent&&b(i=this.parent,P,ai).call(i,t,n);return}_(this,Ye,o(this,Ye)+t),o(this,Ye)===0&&(b(this,P,Ht).call(this,n),o(this,$)&&ct(o(this,$),()=>{_(this,$,null)}),o(this,Se)&&(o(this,fe).before(o(this,Se)),_(this,Se,null)))},ri=function(t){o(this,oe)&&(ae(o(this,oe)),_(this,oe,null)),o(this,$)&&(ae(o(this,$)),_(this,$,null)),o(this,le)&&(ae(o(this,le)),_(this,le,null));let n=o(this,ue).failed;const i=a=>{if(b(this,P,Ke).call(this))return;const{reset:r,invoke_onerror:s}=b(this,P,ni).call(this,a);s(),n&&!b(this,P,Ke).call(this)&&_(this,le,b(this,P,bn).call(this,()=>{try{return ve(()=>{var l=E;l.b=this,l.f|=Yn,n(o(this,fe),()=>a,()=>r)})}catch(l){return Me(l,o(this,J).parent),null}}))};Je(()=>{if(!b(this,P,Ke).call(this)){var a;try{a=this.transform_error(t)}catch(r){Me(r,o(this,J)&&o(this,J).parent);return}a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(i,r=>Me(r,o(this,J)&&o(this,J).parent)):i(a)}})};function _e(e,t){var n=t==null?"":typeof t=="object"?`${t}`:t;n!==(e[zt]??(e[zt]=e.nodeValue))&&(e[zt]=n,e.nodeValue=`${n}`)}function rs(e,t){return ss(e,t)}const vn=new Map;function ss(e,{target:t,anchor:n,props:i={},events:a,context:r,intro:s=!0,transformError:l}){Rr();var c=void 0,p=Fr(()=>{var h=n??t.appendChild(Xe());es(h,{pending:()=>{}},d=>{It({});var u=G;r&&(u.c=r),a&&(i.$$events=a),c=e(d,i)||Ji(),Mt()},l);var g=new Set,v=d=>{for(var u=0;u<d.length;u++){var m=d[u];if(!g.has(m)){g.add(m);var f=Yr(m);for(const N of[t,document]){var y=vn.get(N);y===void 0&&(y=new Map,vn.set(N,y));var R=y.get(m);R===void 0?(N.addEventListener(m,Ci,{passive:f}),y.set(m,1)):y.set(m,R+1)}}}};return v(Sn(Jr)),Pi.add(v),()=>{var f;for(var d of g)for(const y of[t,document]){var u=vn.get(y),m=u.get(d);--m==0?(y.removeEventListener(d,Ci),u.delete(d),u.size===0&&vn.delete(y)):u.set(d,m)}Pi.delete(v),h!==n&&((f=h.parentNode)==null||f.removeChild(h))}});return os.set(c,p),c}let os=new WeakMap;var xe,Ie,ce,lt,nn,an,jn;class Ca{constructor(t,n=!0){Y(this,"anchor");k(this,xe,new Map);k(this,Ie,new Map);k(this,ce,new Map);k(this,lt,new Set);k(this,nn,!0);k(this,an,t=>{if(o(this,xe).has(t)){var n=o(this,xe).get(t),i=o(this,Ie).get(n);if(i)Pn(i),o(this,lt).delete(n);else{var a=o(this,ce).get(n);a&&(Pn(a.effect),o(this,Ie).set(n,a.effect),o(this,ce).delete(n),a.fragment.lastChild.remove(),this.anchor.before(a.fragment),i=a.effect)}for(const[r,s]of o(this,xe)){if(o(this,xe).delete(r),r===t)break;const l=o(this,ce).get(s);l&&(ae(l.effect),o(this,ce).delete(s))}for(const[r,s]of o(this,Ie)){if(r===n||o(this,lt).has(r))continue;const l=()=>{if(Array.from(o(this,xe).values()).includes(r)){var p=document.createDocumentFragment();vi(s,p),p.append(Xe()),o(this,ce).set(r,{effect:s,fragment:p})}else ae(s);o(this,lt).delete(r),o(this,Ie).delete(r)};o(this,nn)||!i?(o(this,lt).add(r),ct(s,l,!1)):l()}}});k(this,jn,t=>{o(this,xe).delete(t);const n=Array.from(o(this,xe).values());for(const[i,a]of o(this,ce))n.includes(i)||(ae(a.effect),o(this,ce).delete(i))});this.anchor=t,_(this,nn,n)}ensure(t,n){var i=x,a=ha();if(n&&!o(this,Ie).has(t)&&!o(this,ce).has(t))if(a){var r=document.createDocumentFragment(),s=Xe();r.append(s),o(this,ce).set(t,{effect:ve(()=>n(s)),fragment:r})}else o(this,Ie).set(t,ve(()=>n(this.anchor)));if(o(this,xe).set(i,t),a){for(const[l,c]of o(this,Ie))l===t?i.unskip_effect(c):i.skip_effect(c);for(const[l,c]of o(this,ce))l===t?i.unskip_effect(c.effect):i.skip_effect(c.effect);i.oncommit(o(this,an)),i.ondiscard(o(this,jn))}else o(this,an).call(this,i)}}xe=new WeakMap,Ie=new WeakMap,ce=new WeakMap,lt=new WeakMap,nn=new WeakMap,an=new WeakMap,jn=new WeakMap;function Bn(e,t,n=!1){var i=new Ca(e),a=n?ht:0;function r(s,l){i.ensure(s,l)}Rn(()=>{var s=!1;t((l,c=0)=>{s=!0,r(c,l)}),s||r(-1,null)},a)}function Ei(e,t){return t}function ls(e,t,n){for(var i=[],a=t.length,r,s=t.length,l=0;l<a;l++){let g=t[l];ct(g,()=>{if(r){if(r.pending.delete(g),r.done.add(g),r.pending.size===0){var v=e.outrogroups;si(e,Sn(r.done)),v.delete(r),v.size===0&&(e.outrogroups=null)}}else s-=1},!1)}if(s===0){var c=i.length===0&&n!==null&&e.pending.size===0;if(c){var p=n,h=p.parentNode;qr(h),h.append(p),e.items.clear()}si(e,t,!c)}else r={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(r)}function si(e,t,n=!0){var i;if(e.pending.size>0){i=new Set;for(const s of e.pending.values())for(const l of s)i.add(e.items.get(l).e)}for(var a=0;a<t.length;a++){var r=t[a];if(i!=null&&i.has(r)){r.f|=Re;const s=document.createDocumentFragment();vi(r,s)}else ae(t[a],n)}}var ji;function Si(e,t,n,i,a,r=null){var s=e,l=new Map,c=(t&Wi)!==0;if(c){var p=e;s=p.appendChild(Xe())}var h=null,g=kn(()=>{var R=n();return Oi(R)?R:R==null?[]:Sn(R)}),v=new Map,d=!0;function u(R){if((y.effect.f&X)===0){y.pending.delete(R);var N=w(g);y.fallback=h,cs(y,N,s,t,i),h!==null&&(N.length===0?(h.f&Re)===0?Pn(h):(h.f^=Re,Wt(h,null,s)):ct(h,()=>{h=null}))}}function m(R){y.pending.delete(R)}var f=Rn(()=>{for(var R=w(g),N=R.length,Z=new Set,de=x,He=ha(),O=0;O<N;O+=1){var K=R[O],ye=i(K,O),ne=d?null:l.get(ye);ne?(ne.v&&Ct(ne.v,K),ne.i&&Ct(ne.i,O),He&&de.unskip_effect(ne.e)):(ne=ps(l,d?s:ji??(ji=Xe()),K,ye,O,a,t,n),d||(ne.e.f|=Re),l.set(ye,ne)),Z.add(ye)}if(N===0&&r&&!h&&(d?h=ve(()=>r(s)):(h=ve(()=>r(ji??(ji=Xe()))),h.f|=Re)),N>Z.size&&pr(),!d)if(v.set(de,Z),He){for(const[ft,ut]of l)Z.has(ft)||de.skip_effect(ut.e);de.oncommit(u),de.ondiscard(m)}else u(de);w(g)}),y={effect:f,items:l,pending:v,outrogroups:null,fallback:h};d=!1}function Ot(e){for(;e!==null&&(e.f&Pe)===0;)e=e.next;return e}function cs(e,t,n,i,a){var ne,ft,ut,dn,z,gn,$e,et,Rt;var r=(i&$a)!==0,s=t.length,l=e.items,c=Ot(e.effect.first),p,h=null,g,v=[],d=[],u,m,f,y;if(r)for(y=0;y<s;y+=1)u=t[y],m=a(u,y),f=l.get(m).e,(f.f&Re)===0&&((ft=(ne=f.nodes)==null?void 0:ne.a)==null||ft.measure(),(g??(g=new Set)).add(f));for(y=0;y<s;y+=1){if(u=t[y],m=a(u,y),f=l.get(m).e,e.outrogroups!==null)for(const be of e.outrogroups)be.pending.delete(f),be.done.delete(f);if((f.f&te)!==0&&(Pn(f),r&&((dn=(ut=f.nodes)==null?void 0:ut.a)==null||dn.unfix(),(g??(g=new Set)).delete(f))),(f.f&Re)!==0)if(f.f^=Re,f===c)Wt(f,null,n);else{var R=h?h.next:c;f===e.effect.last&&(e.effect.last=f.prev),f.prev&&(f.prev.next=f.next),f.next&&(f.next.prev=f.prev),Ue(e,h,f),Ue(e,f,R),Wt(f,R,n),h=f,v=[],d=[],c=Ot(h.next);continue}if(f!==c){if(p!==void 0&&p.has(f)){if(v.length<d.length){var N=d[0],Z;h=N.prev;var de=v[0],He=v[v.length-1];for(Z=0;Z<v.length;Z+=1)Wt(v[Z],N,n);for(Z=0;Z<d.length;Z+=1)p.delete(d[Z]);Ue(e,de.prev,He.next),Ue(e,h,de),Ue(e,He,N),c=N,h=He,y-=1,v=[],d=[]}else p.delete(f),Wt(f,c,n),Ue(e,f.prev,f.next),Ue(e,f,h===null?e.effect.first:h.next),Ue(e,h,f),h=f;continue}for(v=[],d=[];c!==null&&c!==f;)(p??(p=new Set)).add(c),d.push(c),c=Ot(c.next);if(c===null)continue}(f.f&Re)===0&&v.push(f),h=f,c=Ot(f.next)}if(e.outrogroups!==null){for(const be of e.outrogroups)be.pending.size===0&&(si(e,Sn(be.done)),(z=e.outrogroups)==null||z.delete(be));e.outrogroups.size===0&&(e.outrogroups=null)}if(c!==null||p!==void 0){var O=[];if(p!==void 0)for(f of p)(f.f&te)===0&&O.push(f);for(;c!==null;)(c.f&te)===0&&c!==e.fallback&&O.push(c),c=Ot(c.next);var K=O.length;if(K>0){var ye=(i&Wi)!==0&&s===0?n:null;if(r){for(y=0;y<K;y+=1)($e=(gn=O[y].nodes)==null?void 0:gn.a)==null||$e.measure();for(y=0;y<K;y+=1)(Rt=(et=O[y].nodes)==null?void 0:et.a)==null||Rt.fix()}ls(e,O,ye)}}r&&Je(()=>{var be,fn;if(g!==void 0)for(f of g)(fn=(be=f.nodes)==null?void 0:be.a)==null||fn.apply()})}function ps(e,t,n,i,a,r,s,l){var c=(s&Qa)!==0?(s&er)===0?Ir(n,!1,!1):gt(n):null,p=(s&Za)!==0?gt(a):null;return{v:c,i:p,e:ve(()=>(r(t,c??n,p??a,l),()=>{e.delete(i)}))}}function Wt(e,t,n){if(e.nodes)for(var i=e.nodes.start,a=e.nodes.end,r=t&&(t.f&Re)===0?t.nodes.start:n;i!==null;){var s=cn(i);if(r.before(i),i===a)return;i=s}}function Ue(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}function hs(e,t,n=!1,i=!1,a=!1,r=!1){var s=e,l="";if(n)var c=e;B(()=>{var p=E;if(l!==(l=t()??"")){if(n){p.nodes=null,c.innerHTML=l,l!==""&&$t(De(c),c.lastChild);return}if(p.nodes!==null&&(va(p.nodes.start,p.nodes.end),p.nodes=null),l!==""){var h=i?ir:a?ar:void 0,g=da(i?"svg":a?"math":"template",h);g.innerHTML=l;var v=i||a?g:g.content;if($t(De(v),v.lastChild),i||a)for(;De(v);)s.before(De(v));else s.before(v)}}})}function Vt(e,t,...n){var i=new Ca(e);Rn(()=>{const a=t()??null;i.ensure(a,a&&(r=>a(r,...n)))},ht)}function Ea(e){var t,n,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=Ea(e[t]))&&(i&&(i+=" "),i+=n)}else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}function ds(){for(var e,t,n=0,i="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=Ea(e))&&(i&&(i+=" "),i+=t);return i}function gs(e){return typeof e=="object"?ds(e):e??""}function fs(e,t,n){var i=e==null?"":""+e;return i=i?i+" "+t:t,i===""?null:i}function us(e,t,n,i,a,r){var s=e[Jn];if(s!==n||s===void 0){var l=fs(n,i);l==null?e.removeAttribute("class"):e.className=l,e[Jn]=n}return r}const vs=Symbol("is custom element"),ms=Symbol("is html");function V(e,t,n,i){var a=ys(e),r=a[t];r!==(a[t]=n)&&(t==="loading"&&(e[Va]=n),n==null?e.removeAttribute(t):typeof n!="string"&&bs(e).has(t)?e[t]=n:e.setAttribute(t,n))}function ys(e){return e[mn]??(e[mn]={[vs]:e.nodeName.includes("-"),[ms]:e.namespaceURI===Ui})}var Ii=new Map;function bs(e){var t=e.getAttribute("is")||e.nodeName,n=Ii.get(t);if(n)return n;Ii.set(t,n=new Set);for(var i,a=e,r=Element.prototype;r!==a;){i=Ni(a);for(var s in i)i[s].set&&s!=="innerHTML"&&s!=="textContent"&&s!=="innerText"&&n.add(s);a=li(a)}return n}function hn(e=!1){const t=G,n=t.l.u;if(!n)return;let i=()=>Ur(t.s);if(e){let a=0,r={};const s=Mn(()=>{let l=!1;const c=t.s;for(const p in c)c[p]!==r[p]&&(r[p]=c[p],l=!0);return l&&a++,a});i=()=>w(s)}n.b.length&&Nr(()=>{Mi(t,i),Kn(n.b)}),ei(()=>{const a=mi(()=>n.m.map(Ya));return()=>{for(const r of a)typeof r=="function"&&r()}}),n.a.length&&ei(()=>{Mi(t,i),Kn(n.a)})}function Mi(e,t){if(e.l.s)for(const n of e.l.s)w(n);t()}function ws(e){G===null&&lr(),on&&G.l!==null?xs(G).m.push(e):ei(()=>{const t=mi(e);if(typeof t=="function")return t})}function xs(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const _s="5";var qi;typeof window<"u"&&((qi=window.__svelte??(window.__svelte={})).v??(qi.v=new Set)).add(_s);wr();var As=M('<div class="container-xl mx-auto main-content-1"><!></div>');function ks(e,t){var n=As(),i=C(n);Vt(i,()=>t.children),S(e,n)}var Ts=M('<div class="container-lg"><div class="row"><div class="col-sm-2"></div> <div class="col-sm-8 entry-content"><!></div></div></div>');function Ps(e,t){var n=Ts(),i=C(n),a=F(C(i),2),r=C(a);Vt(r,()=>t.children),S(e,n)}var Cs=M("<p> </p>");function Es(e,t){var n=Cs(),i=ee(n,!0);B(()=>_e(i,t.text)),S(e,n)}var js=M('<div class="container-fluid top-nav-box desktop-nav-container"><div class="container-lg top-nav-1"><div class="cjr-header-wrap"><header class="cjr-header"><span class="header-links"><a class="cjr-header-link" href="https://cjr.org/most-recent">Most Recent</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a class="cjr-header-link" href="https://cjr.org/issues">Special Issues</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a class="cjr-header-link" href="https://cjr.org/the-kicker">The Kicker Podcast</a></span> <a class="cjr-header-donate" href="https://members.cjr.org/member/?a=nav-joinus&amp;utm_source=cjr-org&amp;utm_medium=cjr-homehead&amp;utm_campaign=m-land" target="_blank"><img src="https://cjr.org/wp-content/themes/cjr2017/_resources2022/images/join-us-orange-rounded-balto.png" alt="Join us" class="cjr-button-donate"/></a> <div class="js-nav-group"><button id="cjr-header__hamburger" class="cjr-header__hamburger" aria-label="Toggle CJR navigation" aria-expanded="false"><span id="cjr-head-ham-lines" class="cjr-header__hamburger-lines"></span></button> <div id="navigation" class="cjr-nav"><div class="container-lg cjr-search-container"><form class="nav-search" id="search" action="https://www.cjr.org/search"><input type="hidden" name="cx" value="002110349687880336610:9r4jniuv6ko"/> <input type="hidden" name="cof" value="FORID:11"/> <input type="hidden" name="ie" value="UTF-8"/> <input type="search" name="q" placeholder="Search..."/> <button type="submit">Search</button></form></div> <div class="container-lg cjr-main-container"><nav class="cjr-main-menu"><ul class="cjr-main-menu__list"><li class="cjr-main-menu__item"><a class="cjr-main-menu__link" href="https://cjr.org/most-recent">Recent Stories</a></li> <li class="cjr-main-menu__item"><a class="cjr-main-menu__link" href="https://cjr.org/issues">Special Issues</a></li> <li class="cjr-main-menu__item"><a class="cjr-main-menu__link" href="https://cjr.org/the-kicker">The Kicker Podcast</a></li> <li class="cjr-main-menu__item"><a class="cjr-main-menu__link" href="https://cjr.org/tow-center">Tow Center</a></li></ul></nav> <div class="cjr-nav__second"><ul class="cjr-nav__second-menu cjr-menu-inline"><li class="cjr-menu-inline__item"><a class="cjr-menu-inline__link" href="https://cjr.org/about_us/mission_statement.php" title="">About</a></li> <li class="cjr-menu-inline__item"><a class="cjr-menu-inline__link" href="https://members.cjr.org/member/?a=nav-mem&amp;utm_source=cjr-org&amp;utm_medium=cjr-nav&amp;utm_campaign=m-land" title="Membership">Memberships</a></li> <li class="cjr-menu-inline__item"><a class="cjr-menu-inline__link" href="https://cjr.org/about_us/donate.php" title="Donate">Donate</a></li> <li class="cjr-menu-inline__item"><a class="cjr-menu-inline__link" href="https://cjr.org/about_us/advertise.php" title="Advertise">Advertise</a></li> <li class="cjr-menu-inline__item"><a class="cjr-menu-inline__link" href="https://cjr.org/about_us/contact.php" title="Contact">Contact</a></li></ul></div></div></div></div></header></div> <div class="cjr-header-logo-wrap"><a href="https://www.cjr.org/" rel="home"><img alt="Columbia Journalism Review" class="cjr-header-logo-image" width="1200" height="65"/></a></div></div></div> <div class="container-fluid top-nav-box mobile-nav-container"><div class="container-lg top-nav-1"><header class="cjr-header"><a class="cjr-header__logo" href="https://www.cjr.org/" rel="home"><img alt="Columbia Journalism Review" class="cjr-logo-mobile" width="600" height="278"/></a> <a class="cjr-header-donate" href="https://members.cjr.org/member/?a=nav-joinus&amp;utm_source=cjr-org&amp;utm_medium=cjr-homehead&amp;utm_campaign=m-land" target="_blank"><img src="https://cjr.org/wp-content/themes/cjr2017/_resources2022/images/join-us-orange-rounded-balto.png" alt="Join us" class="cjr-button-donate"/></a> <div class="js-nav-group"><button class="cjr-header__hamburger" aria-label="Toggle CJR navigation" aria-expanded="false"><span class="cjr-header__hamburger-lines"></span></button> <div class="cjr-nav"><div class="container-lg cjr-search-container"><form class="nav-search" action="https://www.cjr.org/search"><input type="hidden" name="cx" value="002110349687880336610:9r4jniuv6ko"/> <input type="hidden" name="cof" value="FORID:11"/> <input type="hidden" name="ie" value="UTF-8"/> <input type="search" name="q" placeholder="Search..."/> <button type="submit">Search</button></form></div> <div class="container-lg cjr-main-container"><nav class="cjr-main-menu"><ul class="cjr-main-menu__list"><li class="cjr-main-menu__item"><a class="cjr-main-menu__link" href="https://cjr.org/most-recent">Recent Stories</a></li> <li class="cjr-main-menu__item"><a class="cjr-main-menu__link" href="https://cjr.org/issues">Special Issues</a></li> <li class="cjr-main-menu__item"><a class="cjr-main-menu__link" href="https://cjr.org/the-kicker">The Kicker Podcast</a></li> <li class="cjr-main-menu__item"><a class="cjr-main-menu__link" href="https://cjr.org/tow-center">Tow Center</a></li></ul></nav> <div class="cjr-nav__second"><ul class="cjr-nav__second-menu cjr-menu-inline"><li class="cjr-menu-inline__item"><a class="cjr-menu-inline__link" href="https://cjr.org/about_us/mission_statement.php" title="">About</a></li> <li class="cjr-menu-inline__item"><a class="cjr-menu-inline__link" href="https://members.cjr.org/member/?a=nav-mem&amp;utm_source=cjr-org&amp;utm_medium=cjr-nav&amp;utm_campaign=m-land" title="Membership">Memberships</a></li> <li class="cjr-menu-inline__item"><a class="cjr-menu-inline__link" href="https://cjr.org/about_us/donate.php" title="Donate">Donate</a></li> <li class="cjr-menu-inline__item"><a class="cjr-menu-inline__link" href="https://cjr.org/about_us/advertise.php" title="Advertise">Advertise</a></li> <li class="cjr-menu-inline__item"><a class="cjr-menu-inline__link" href="https://cjr.org/about_us/contact.php" title="Contact">Contact</a></li></ul></div></div></div></div></header></div></div>',1);function Ss(e,t){It(t,!1),ws(()=>{document.querySelectorAll(".cjr-header__hamburger").forEach(d=>{var m;const u=(m=d.closest(".js-nav-group"))==null?void 0:m.querySelector(".cjr-nav");u&&d.addEventListener("click",()=>{d.classList.toggle("is-active"),d.setAttribute("aria-expanded",String(u.classList.toggle("is-open")))})})}),hn();var n=js(),i=nt(n),a=C(i),r=F(C(a),2),s=C(r),l=ee(s),c=F(i,2),p=C(c),h=C(p),g=C(h),v=ee(g);B(()=>{V(l,"src","./graphics/cjr/cjr-logo-2x-b.png"),V(v,"src","./graphics/cjr/cjr-logo-mobile-2x.png")}),S(e,n),Mt()}var Is=M('<footer id="footer"><div id="footer-inner"><div class="logo"><a href="https://www.cjr.org/" rel="home"><img alt="Columbia Journalism Review" width="440" height="25"/></a> <p>The voice of journalism, since 1961</p></div> <div class="lists"><div class="list"><h3>About</h3> <ul><li><a href="https://www.cjr.org/about_us/mission_statement.php">Mission</a></li> <li><a href="https://www.cjr.org/about_us/masthead.php">Masthead</a></li> <li><a href="https://www.cjr.org/about_us/privacy_policy.php">Privacy Policy</a></li> <li><a href="https://www.cjr.org/about_us/contact.php">Contact</a></li></ul></div> <div class="list"><h3>Support CJR</h3> <ul><li><a href="https://members.cjr.org/member/?a=nav-foot-mem&amp;utm_source=cjr-org&amp;utm_medium=cjr-nav&amp;utm_campaign=m-land">Become a Member</a></li> <li><a href="https://www.cjr.org/about_us/donate.php">Donate</a></li></ul></div> <div class="list"><h3>Advertise</h3> <ul><li><a href="https://www.cjr.org/about_us/advertise.php">Contact Us</a></li></ul></div></div> <div class="copyright"><span class="copyright-mobile">Copyright 2026,</span> Columbia Journalism Review</div></div></footer>');function Ms(e,t){It(t,!1),hn();var n=Is(),i=C(n),a=C(i),r=C(a),s=ee(r);B(()=>V(s,"src","./graphics/cjr/cjr-logo-horizontal-footer-1100.png")),S(e,n),Mt()}var Rs=M(`<div class="container-lg tow-ccn-about"><div class="row"><div class="container text-left tow-ccn-main"><div class="row tow-ccn-line"></div> <div class="row"><div class="col-4 tow-ccn-image"><a href="https://towcenter.columbia.edu/" target="_blank"><img alt="Tow Center for Digital Journalism" class="tow-ccn-tout-image-1"/></a></div> <div class="col-7 tow-ccn-tout"><h2 id="about-tow-center" class="tow-ccn-tout-main-title svelte-ofq6m6">About the Tow Center</h2> <span class="tow-ccn-tout-excerpt"><p>The Tow Center for Digital Journalism at Columbia's Graduate School of Journalism, a partner of CJR, is a research center exploring the ways in which technology is changing journalism, its practice and its consumption — as we seek new ways to judge the reliability, standards, and credibility of information online.</p> <p><a href="https://cjr.org/tow-center/" class="tow-ccn-tout-link">View other Tow articles »</a></p> <p><a href="https://towcenter.columbia.edu/" class="tow-ccn-tout-link" target="_blank">Visit Tow Center website »</a></p></span></div></div></div></div></div>`);function qs(e,t){It(t,!1),hn();var n=Rs(),i=C(n),a=C(i),r=F(C(a),2),s=C(r),l=C(s),c=ee(l);B(()=>V(c,"src","./graphics/cjr/tow-logo-bottom-500.png")),S(e,n),Mt()}var Gs=M('<small id="small-category"><a href="https://www.cjr.org/tow-center/"><img alt="Tow Center" class="tow-ccn-slug-image"/></a></small>');function Os(e,t){It(t,!1),hn();var n=Gs(),i=C(n),a=ee(i);B(()=>V(a,"src","./graphics/cjr/tow-slug-500-2.png")),S(e,n),Mt()}var zs=M('<div class="container-lg title-image-lg"><!> <header class="col-sm-10"><h1 class="main-title"> </h1> <div class="post-excerpt"><p> </p></div> <div class="meta"><time class="date svelte-ev0zn9"> </time> <span class="byline"><em>By</em> <!></span></div></header> <!></div>');function Ns(e,t){var n=zs(),i=C(n);Vt(i,()=>t.children??Un);var a=F(i,2),r=C(a),s=ee(r,!0),l=F(r,2),c=C(l),p=ee(c,!0),h=F(l,2),g=C(h),v=ee(g,!0),d=F(g,2),u=F(C(d),2);Vt(u,()=>t.byline);var m=F(a,2);Vt(m,()=>t.hero??Un),B(()=>{_e(s,t.hed),_e(p,t.subhed),V(g,"datetime",t.datetime),_e(v,t.date)}),S(e,n)}const Fs=`AI search tools are rapidly gaining in popularity, with nearly one in four Americans now saying they have used AI in place of traditional search engines. These tools derive their value from crawling the internet for up-to-date, relevant information—content that is often produced by news publishers.

Yet a troubling imbalance has emerged: while traditional search engines typically operate as an intermediary, guiding users to news websites and other quality content, generative search tools parse and repackage information themselves, cutting off traffic flow to original sources. These chatbots’ conversational outputs often obfuscate serious underlying issues with information quality. There is an urgent need to evaluate how these systems access, present, and cite news content.

Building on our previous research, the Tow Center for Digital Journalism conducted tests on eight generative search tools with live search features to assess their abilities to accurately retrieve and cite news content, as well as how they behave when they cannot.

We found that…

- Chatbots were generally bad at declining to answer questions they couldn’t answer accurately, offering incorrect or speculative answers instead.
- Premium chatbots provided more confidently incorrect answers than their free counterparts.
- Multiple chatbots seemed to bypass Robot Exclusion Protocol preferences.
- Generative search tools fabricated links and cited syndicated and copied versions of articles.
- Content licensing deals with news sources provided no guarantee of accurate citation in chatbot responses.

Our findings were consistent with our previous study, proving that our observations are not just a ChatGPT problem, but rather recur across all the prominent generative search tools that we tested.


## Methodology

We systematically tested eight generative search tools: OpenAI’s ChatGPT Search, Perplexity, Perplexity Pro, DeepSeek Search, Microsoft’s Copilot, xAI’s Grok-2 and Grok-3 (beta), and Google’s Gemini.

We chose 20 news publishers with varying stances on AI access that either permit search bots’ web crawlers via robots.txt, or block them. (The Robot Exclusion Protocol, also known as robots.txt, is a web standard that gives website publishers the option to “disallow” web crawlers–automated programs that systematically browse the internet to discover and retrieve content.) Some of the publishers we included are involved in content licensing or revenue share agreements with the AI companies, while others are pursuing lawsuits against them.

We randomly selected ten articles from each publisher, then manually selected direct excerpts from those articles for use in our queries.

After providing each chatbot with the selected excerpts, we asked it to identify the corresponding article’s headline, original publisher, publication date, and URL.


We deliberately chose excerpts that, if pasted into a traditional Google search, returned the original source within the first three results.

We manually evaluated the chatbot responses based on three attributes: the retrieval of (1) the correct article, (2) the correct publisher, and (3) the correct URL. According to these parameters, each response was marked with one of the following labels:

- Correct: All three attributes were correct.
- Correct but Incomplete: Some attributes were correct, but the answer was missing information.
- Partially Incorrect: Some attributes were correct while others were incorrect.
- Completely Incorrect: All three attributes were incorrect and/or missing.
- Not Provided: No information was provided.
- Crawler Blocked: The publisher disallows the chatbot’s crawler in its robots.txt.

We ran sixteen hundred queries (twenty publishers times ten articles times eight chatbots) in total.



## Chatbots’ responses to our queries were often confidently wrong

Overall, the chatbots often failed to retrieve the correct articles. Collectively, they provided incorrect answers to more than 60 percent of queries. Across different platforms, the level of inaccuracy varied, with Perplexity answering 37 percent of the queries incorrectly, while Grok 3 had a much higher error rate, answering 94 percent of the queries incorrectly.


Most of the tools we tested presented inaccurate answers with alarming confidence, rarely using qualifying phrases such as “it appears,” “it’s possible,” “might,” etc., or acknowledging knowledge gaps with statements like “I couldn’t locate the exact article.” ChatGPT, for instance, incorrectly identified 134 articles, but signaled a lack of confidence just fifteen times out of its two hundred responses, and never declined to provide an answer. With the exception of Copilot—which declined more questions than it answered—all of the tools were consistently more likely to provide an incorrect answer than to acknowledge limitations.


## Premium models provided more confidently incorrect answers than their free counterparts


Premium models, such as Perplexity Pro ($20/month) or Grok 3 ($40/month), might be assumed to be more trustworthy than their free counterparts, given their higher cost and purported computational advantages. However, our tests showed that while both answered more prompts correctly than their corresponding free equivalents, they paradoxically also demonstrated higher error rates. This contradiction stems primarily from their tendency to provide definitive, but wrong, answers rather than declining to answer the question directly.

The fundamental concern extends beyond the chatbots’ factual errors to their authoritative conversational tone, which can make it difficult for users to distinguish between accurate and inaccurate information. This unearned confidence presents users with a potentially dangerous illusion of reliability and accuracy.



## Platforms retrieved information from publishers that had intentionally blocked their crawlers


Five of the eight chatbots tested in this study (ChatGPT, Perplexity and Perplexity Pro, Copilot, and Gemini) have made the names of their crawlers public, giving publishers the option to block them, while the crawlers used by the other three (DeepSeek, Grok 2, and Grok 3) are not publicly known.

We expected chatbots to correctly answer queries related to publishers that their crawlers had access to, and to decline to answer queries related to websites that had blocked access to their content. However, in practice, that is not what we observed.




In particular, ChatGPT, Perplexity, and Perplexity Pro exhibited unexpected behaviors given what we know about which publishers allow them crawler access. On some occasions, the chatbots either incorrectly answered or declined to answer queries from publishers that permitted them to access their content. On the other hand, they sometimes correctly answered queries about publishers whose content they shouldn’t have had access to; Perplexity Pro was the worst offender in this regard, correctly identifying nearly a third of the ninety excerpts from articles it should not have had access to.

Surprisingly, Perplexity’s free version correctly identified all ten excerpts from paywalled articles we shared from National Geographic, even though the publisher has disallowed Perplexity’s crawlers and has no formal relationship with the AI company.

Although there are other means through which the chatbots could obtain information about restricted content (such as through references to the work in publicly accessible publications), this finding suggests that Perplexity—despite claiming that it “respects robots.txt directives”—may have disregarded National Geographic’s crawler preferences. Developer Robb Knight and Wired both reported evidence of Perplexity ignoring the Robot Exclusion Protocol last year. (Neither National Geographic nor Perplexity responded to our requests for comment.)

Similarly, Press Gazette reported this month that the New York Times, despite blocking Perplexity’s crawler, was the chatbot’s top-referred news site in January, with 146,000 visits.

While ChatGPT answered fewer questions about articles that blocked its crawlers compared with the other chatbots, overall it demonstrated a bias toward providing wrong answers over no answers.

Among the chatbots whose crawlers are public, Copilot was the only one that was not blocked by any of the publishers in our dataset. This is likely because Copilot uses the same crawler, BingBot, as the Bing search engine, which means that publishers wishing to block it would also have to opt out of inclusion in Bing search. In theory, Copilot should have been able to access all of the content we queried for; however, it actually had the highest rate of declined answers.



An example of Copilot declining to answer one of our prompts.

On the other hand, Google created its Google-Extended crawler to give publishers the option of blocking Gemini’s crawler without having their content affected on Google’s search. Its crawler was permitted by ten of the twenty publishers we tested, yet Gemini only provided a completely correct response on one occasion.

Gemini also declined to answer questions about content from publishers that permitted its crawler if the excerpt appeared to be related to politics, responding with statements like “I can’t help with responses on elections and political figures right now. I’m trained to be as accurate as possible but I can make mistakes sometimes. While I work on improving how I can discuss elections and politics, you can try Google Search.”



An example of Gemini declining to answer one of our prompts because it was related to politics

Though the Robot Exclusion Protocol is not legally binding, it is a widely accepted standard for signaling which parts of a site should and should not be crawled. Ignoring the protocol takes away publishers’ agency to decide whether their content will be included in searches or used as training data for AI models. While permitting Web crawlers might increase the overall visibility of their content in generative search outputs, publishers may have various reasons for not wanting crawlers to access their content, such as a desire to try to monetize their content, or concern that their work could be misrepresented in AI-generated summaries.


Danielle Coffey, the president of the News Media Alliance, wrote in a letter to publishers last June that “without the ability to opt out of massive scraping, we cannot monetize our valuable content and pay journalists. This could seriously harm our industry.”


## Platforms often failed to link back to the original source

AI chatbots’ outputs often cite external sources to legitimate their answers. Even Grok, which encourages users to get real-time updates from X, still overwhelmingly cites traditional news organizations according to a recent Reuters report. This means that the credibility of the publishers is often used to boost the trustworthiness of a chatbot’s brand. For example, in BBC News’s recent report on how AI assistants represent their content, the authors wrote that “when AI assistants cite trusted brands like the BBC as a source, audiences are more likely to trust the answer—even if it’s incorrect.” But when chatbots are wrong, they don’t just taint their own reputations, they also taint the reputations of the publishers they lean on for legitimacy.

The generative search tools we tested had a common tendency to cite the wrong article. For instance, DeepSeek misattributed the source of the excerpts provided in our queries 115 out of 200 times. This means that news publishers’ content was most often being credited to the wrong source.




Even when the chatbots appeared to correctly identify the article, they often failed to properly link to the original source. This creates a twofold problem: publishers wanting visibility in search results weren’t getting it, while the content of those wishing to opt out remained visible against their wishes.

On some occasions, chatbots directed us to syndicated versions of articles on platforms like Yahoo News or AOL rather than the original sources—often even when the publisher was known to have a licensing deal with the AI company. For instance, despite its partnership with the Texas Tribune, Perplexity Pro cited syndicated versions of Tribune articles for three out of the ten queries, while Perplexity cited an unofficial republished version for one. This tendency deprives the original sources of proper attribution and potential referral traffic.






Despite having a partnership with the Texas Tribune, Perplexity cited an unofficial version of the article instead.

Conversely, syndicated versions or unauthorized copies of news articles present a challenge for publishers wishing to opt out of crawling. Their content continued to appear in results without their consent, albeit incorrectly attributed to the sources that republished it. For instance, while USA Today blocks ChatGPT’s crawler, the chatbot still cited a version of its article that was republished by Yahoo News.



Although USA Today blocks ChatGPT’s crawler, the chatbot cited a version of its article that was syndicated in Yahoo News.

Meanwhile, generative search tools’ tendency to fabricate URLs can also affect users’ ability to verify information sources. Grok 2, for instance, was prone to linking to the homepage of the publishing outlet rather than specific articles.


More than half of responses from Gemini and Grok 3 cited fabricated or broken URLs that led to error pages. Out of the 200 prompts we tested for Grok 3, 154 citations led to error pages. Even when Grok correctly identified an article, it often linked to a fabricated URL. While this problem wasn’t exclusive to Grok 3 and Gemini, it happened far less frequently with other chatbots.

Mark Howard, Time magazine’s chief operating officer, emphasized to us that “it’s critically important how our brand is represented, when and where we show up, that there’s transparency about how we’re showing up and where we’re showing up, as well as what kind of engagement [chatbots are] driving on [our] platform.”

Although click-through traffic constitutes only a small portion of overall referrals for publishers today, referrals from generative search tools have shown modest growth over the past year. As Press Gazette’s Bron Maher wrote recently, the way in which chatbots disincentivize click-through traffic “has left news publishers continuing to expensively produce the information that answers user queries on platforms like ChatGPT without receiving compensation via web traffic and the resultant display advertising income.”



## The presence of licensing deals didn’t mean publishers were cited more accurately


Of the companies whose models we tested, OpenAI and Perplexity have expressed the most interest in establishing formal relationships with news publishers. In February, OpenAI secured its sixteenth and seventeenth news content licensing deals with the Schibsted and Guardian media groups, respectively. Similarly, last year Perplexity established its own Publishers Program, “designed to promote collective success,” which includes a revenue-sharing arrangement with participating publishers.

A deal between AI companies and publishers often involves the establishment of a structured content pipeline governed by contractual agreements and technical integrations. These arrangements typically provide AI companies direct access to publisher content, eliminating the need for website crawling. Such deals might raise the expectation that user queries related to content produced by partner publishers would yield more accurate results. However, this was not what we observed during tests conducted in February 2025. At least not yet.




We observed a wide range of accuracy in the responses to queries related to partner publishers. Time, for instance, has deals with both OpenAI and Perplexity, and while none of the models associated with those companies identified its content correctly 100 percent of the time, it was among the most accurately identified publishers in our dataset.


On the other hand, the San Francisco Chronicle permits OpenAI’s search crawler and is part of Hearst’s “strategic content partnership” with the company, but ChatGPT only correctly identified one of the ten excerpts we shared from the publisher. Even in the one instance it did identify the article, the chatbot correctly named the publisher but failed to provide a URL. Representatives from Hearst declined to comment for our piece.


When we asked whether the AI companies made any commitments to ensuring the content of publisher partners would be accurately surfaced in their search results, Time’s Howard confirmed that was the intention. However, he added that the companies did not commit to being 100 percent accurate.






## Conclusion


The findings of this study align closely with those outlined in our previous ChatGPT study, published in November 2024, which revealed consistent patterns across chabots: confident presentations of incorrect information, misleading attributions to syndicated content, and inconsistent information retrieval practices. Critics of generative search like Chirag Shah and Emily M. Bender have raised substantive concerns about using large language models for search, noting that they “take away transparency and user agency, further amplify the problems associated with bias in [information access] systems, and often provide ungrounded and/or toxic answers that may go unchecked by a typical user.”


These issues pose potential harm to both news producers and consumers. Many of the AI companies developing these tools have not publicly expressed interest in working with news publishers. Even those that have often fail to produce accurate citations or to honor preferences indicated through the Robot Exclusion Protocol. As a result, publishers have limited options for controlling whether and how their content is surfaced by chatbots—and those options appear to have limited effectiveness.


In spite of this, Howard, the COO of Time, maintains optimism about future improvements: “I have a line internally that I say every time somebody brings me anything about any one of these platforms—my response back is, ‘Today is the worst that the product will ever be.’ With the size of the engineering teams, the size of the investments in engineering, I believe that it’s just going to continue to get better. If anybody as a consumer is right now believing that any of these free products are going to be 100 percent accurate, then shame on them.”


We contacted all of the AI companies mentioned in this report for comment, and only OpenAI and Microsoft responded, though neither addressed our specific findings or questions.


OpenAI’s spokesperson sent a statement that was nearly identical to its comment on our previous study: “We support publishers and creators by helping 400M weekly ChatGPT users discover quality content through summaries, quotes, clear links, and attribution. We’ve collaborated with partners to improve in-line citation accuracy and respect publisher preferences, including enabling how they appear in search by managing OAI-SearchBot in their robots.txt. We’ll keep enhancing search results.”


Microsoft stated: “Microsoft respects the robots.txt standard and honors the directions provided by websites that do not want content on their pages to be used with the company’s generative AI models.”



## Limitations of our experiment


While our research design may not reflect typical user behavior, it is intended to assess how generative search tools perform at a task that is easily accomplished via a traditional search engine. Though we did not expect the chatbots to be able to correctly answer all of the prompts, especially given crawler restrictions, we did expect them to decline to answer or exhibit uncertainty when the correct answer couldn’t be determined, rather than provide incorrect or fabricated responses.


Our study focuses on factors that are observable from the outside, particularly whether a chatbot’s crawlers are permitted or disallowed in a publisher’s robots.txt. We did not have visibility into the news publishers’ use of alternative crawler control mechanisms such as TollBit’s, ScalePost’s, or Cloudflare’s blocking tools. While we made an effort to represent a diversity of relationships between AI companies and publishers in the dataset, our findings are not intended to be extrapolated to all models or news organizations.


Furthermore, our findings represent just one occurrence of each of the excerpts being queried in the AI search tools. Because AI chatbots’ responses are dynamic and can vary in response to the same query, the chances are high that if someone ran the exact same prompts again, they would get different outputs.



## Download our data



Kaylee Williams, Sarah Grevy Gotfredsen, and Dhrumil Mehta contributed to this report.
`,Ds=`<!-- Generated by all2html --><!-- source: graph5 -->
<style media="screen,print">
#g-graph5-box,
#g-graph5-box .g-artboard {
  margin: 0 auto;
}
#g-graph5-box p { margin: 0; padding: 0; border: 0; }
#g-graph5-box .g-aiAbs { position: absolute; }
#g-graph5-box .g-aiImg { position: absolute; top: 0; display: block; width: 100% !important; }
#g-graph5-box .g-aiPointText p { white-space: nowrap; }
#g-graph5-artboard-1 { position: relative; overflow: hidden; aspect-ratio: 595 / 535; }
#g-graph5-artboard-1 p {
  color: rgb(0,0,0);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 13.2px;
  margin: 0;
  text-align: left;
}
#g-graph5-artboard-1 .g-pstyle0 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: normal;
  line-height: 19.2px;
}
#g-graph5-artboard-1 .g-pstyle1 {
  font-family: "SFMono-Regular", Menlo, Consolas, monospace;
  font-size: 12.06px;
  font-weight: 700;
  line-height: 14.47px;
  text-transform: uppercase;
}
#g-graph5-artboard-1 .g-pstyle2 {
  font-family: "SFMono-Regular", Menlo, Consolas, monospace;
  font-size: clamp(3.4px, 1.18cqw, 7px);
  font-weight: 600;
  line-height: 1.18;
}
#g-graph5-box { container-type: inline-size; container-name: licensing-chart; }
#g-graph5-box .graph5-heading { display: grid; gap: .3rem; margin-bottom: .7rem; }
#g-graph5-box .graph5-heading .g-pstyle0 { color: #171717; font: 600 clamp(13px, 2.9cqw, 17.24px)/1.18 system-ui, sans-serif; text-wrap: balance; }
#g-graph5-box .graph5-heading p:not(.g-pstyle0) { color: #333; font: 400 clamp(10px, 2.16cqw, 12.93px)/1.3 Arial, Helvetica, sans-serif; }
#g-graph5-box .graph5-desktop { overflow: hidden; }
#g-graph5-box #g-graph5-artboard-1 { margin-top: -17cqw; }
@container licensing-chart (max-width: 520px) {
  #g-graph5-artboard-1 .g-pstyle1 {
    font-size: clamp(6px, 2.03cqw, 10.5px);
    line-height: 1.2;
  }
}
</style>
<div id="g-graph5-box" class="ai2html g-all2html"><header class="graph5-heading"><p class="g-pstyle0">Formal licensing deals do not necessarily translate to more accurate identification or attribution of publisher content, according to our study</p><p>The Tow Center asked eight generative search tools to identify the source article, the publication and URL for 200 excerpts extracted from news articles by 20 publishers. Each square represents one response. </p><p>The following are the platform/publisher pairs from our dataset where a deal is present. </p></header><div class="graph5-desktop"><!-- Artboard: Artboard 1 --><div id="g-graph5-artboard-1" class="g-artboard" style="" data-aspect-ratio="1.112" data-min-width="0"><div style="padding:0 0 89.9160% 0"></div><img id="g-graph5-artboard-1-img" class="g-aiImg" alt="" src="graph5-artboard-1.png?v=adbc0e66002c" loading="lazy"><div id="g-graph5-artboard-1-g-ai0-1" class="g-layer-1 g-aiAbs g-aiPointText" style="top:92.5%;left:50.5804%;width:11.4%"><p class="g-pstyle2">Partially </p><p class="g-pstyle2">Incorrect</p></div><div id="g-graph5-artboard-1-g-ai0-2" class="g-layer-1 g-aiAbs" style="top:20.4744%;left:2.6197%;width:13.2161%"><p class="g-pstyle1">Platform</p></div><div id="g-graph5-artboard-1-g-ai0-3" class="g-layer-1 g-aiAbs" style="top:20.4744%;left:23.9589%;width:13.2161%"><p class="g-pstyle1">PUBLISHER</p></div><div id="g-graph5-artboard-1-g-ai0-4" class="g-layer-1 g-aiAbs" style="top:20.4744%;left:55.1334%;width:13.2161%"><p class="g-pstyle1">ACCURACY</p></div></div></div></div>
<!-- End all2html -->`,Ls=`<!-- Generated by all2html --><!-- source: graph4 -->
<style media="screen,print">
#g-graph4-box,
#g-graph4-box .g-artboard {
  margin: 0 auto;
}
#g-graph4-box p { margin: 0; padding: 0; border: 0; }
#g-graph4-box .g-aiAbs { position: absolute; }
#g-graph4-box .g-aiImg { position: absolute; top: 0; display: block; width: 100% !important; }
#g-graph4-box .g-aiPointText p { white-space: nowrap; }
#g-graph4-lg { position: relative; overflow: hidden; aspect-ratio: 804 / 407; }
#g-graph4-lg p {
  color: rgb(0,0,0);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 11.64px;
  font-style: normal;
  font-weight: 500;
  line-height: 13.97px;
  margin: 0;
  text-align: left;
}
#g-graph4-lg .g-pstyle0 {
  font-weight: 400;
  font-family: "SFMono-Regular", Menlo, Consolas, monospace;
  font-size: 8.78px;
  height: 10.54px;
  line-height: 10.54px;
  text-align: right;
  text-transform: uppercase;
}
#g-graph4-lg .g-pstyle1 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16.3px;
  line-height: 19.56px;
}
#g-graph4-lg .g-pstyle2 {
  font-family: "SFMono-Regular", Menlo, Consolas, monospace;
  font-size: 9.31px;
  font-weight: 700;
  line-height: 11.17px;
}
#g-graph4-lg .g-pstyle3 {
  font-family: "SFMono-Regular", Menlo, Consolas, monospace;
  font-size: 8.09px;
  height: 9.71px;
  line-height: 9.71px;
}
#g-graph4-lg .g-pstyle4 {
  font-family: "SFMono-Regular", Menlo, Consolas, monospace;
  font-size: 8.64px;
  height: 10.36px;
  line-height: 10.36px;
}
#g-graph4-lg .g-pstyle5 {
  font-family: "SFMono-Regular", Menlo, Consolas, monospace;
  font-size: 7.46px;
  line-height: 8.95px;
  text-align: center;
}
#g-graph4-box { container-type: inline-size; container-name: citation-chart; }
#g-graph4-box .graph4-heading { display: grid; gap: .35rem; margin-bottom: .75rem; }
#g-graph4-box .graph4-heading .g-pstyle1 { color: #171717; font: 600 clamp(13px, 2.15cqw, 17.24px)/1.18 system-ui, sans-serif; text-wrap: balance; }
#g-graph4-box .graph4-heading p:not(.g-pstyle1) { color: #333; font: 400 clamp(11px, 1.6cqw, 12.93px)/1.35 Arial, Helvetica, sans-serif; }
#g-graph4-box .graph4-stacked { display: none; }
#g-graph4-box .graph4-plot { overflow: hidden; }
#g-graph4-box #g-graph4-lg { margin-top: -7.4cqw; }
@container citation-chart (max-width: 599px) {
  #g-graph4-box .graph4-plot { display: none; }
  #g-graph4-box .graph4-stacked { display: grid; width: 82%; margin-inline: auto; gap: 1.4rem; }
  #g-graph4-box .graph4-panel h4 { margin: 0 0 .4rem; color: #171717; font: 600 .85rem/1.2 system-ui, sans-serif; }
  #g-graph4-box .graph4-panel-body { display: grid; grid-template-columns: 5.6rem minmax(0, 1fr); gap: .25rem; }
  #g-graph4-box .graph4-platforms { display: grid; grid-template-rows: repeat(8, 1fr); align-items: center; font: 400 clamp(.48rem, 2.15cqw, .72rem)/1.05 Menlo, monospace; }
  #g-graph4-box .graph4-crop { position: relative; overflow: hidden; aspect-ratio: var(--crop-ratio); }
  #g-graph4-box .graph4-crop img { position: absolute; width: var(--art-width); height: auto; max-width: none; top: -52.8169%; left: var(--art-left); }
  #g-graph4-box .graph4-value { position: absolute; transform: translateX(-50%); font: 600 clamp(.42rem, 1.8cqw, .65rem)/1 Menlo, monospace; }
  #g-graph4-box .graph4-panel-key { display: flex; flex-wrap: wrap; gap: .35rem .65rem; margin-top: .55rem; font: .67rem/1.2 Menlo, monospace; }
  #g-graph4-box .graph4-panel-key span { display: inline-flex; align-items: center; gap: .25rem; }
  #g-graph4-box .graph4-panel-key i { display: inline-block; width: .62rem; aspect-ratio: 1; background: var(--swatch); border: 1px solid rgb(0 0 0 / 18%); }
}
</style>
<div id="g-graph4-box" class="ai2html g-all2html"><header class="graph4-heading"><p class="g-pstyle1">Generative search tools fabricated links, and cited syndicated and plagiarized articles</p><p>The Tow Center asked eight generative search tools to identify the source article, the publication and URL for 200 excerpts extracted from news articles by 20 publishers. Each square represents the citation behavior of a response.</p></header><div class="graph4-plot" role="region" tabindex="0" aria-label="Citation links chart"><!-- Artboard: lg --><div id="g-graph4-lg" class="g-artboard" style="" data-aspect-ratio="1.975" data-min-width="0"><div style="padding:0 0 50.6219% 0"></div><img id="g-graph4-lg-img" class="g-aiImg" alt="" src="graph4-lg.png?v=a8a641a83f8a" loading="lazy"><div id="g-graph4-lg-g-ai0-1" class="g-graph1 g-aiAbs g-aiPointText" style="top:93.741%;left:16.3299%;margin-top:-10.0532px;width:55.99609375px"><p class="g-pstyle3">Wrong </p><p class="g-pstyle3">Article</p></div><div id="g-graph4-lg-g-ai0-2" class="g-graph1 g-aiAbs g-aiPointText" style="top:93.741%;left:25.2373%;margin-top:-10.0532px;width:55.99609375px"><p class="g-pstyle3">Missing</p><p class="g-pstyle3">Link</p></div><div id="g-graph4-lg-g-ai0-3" class="g-graph1 g-aiAbs g-aiPointText" style="top:93.741%;left:56.3945%;margin-top:-10.0532px;width:65.708984375px"><p class="g-pstyle3">Original </p><p class="g-pstyle3">Article </p></div><div id="g-graph4-lg-g-ai0-4" class="g-graph1 g-aiAbs g-aiPointText" style="top:93.5551%;left:34.1456%;margin-top:-10.7271px;width:68.638671875px"><p class="g-pstyle4">404 Error</p><p class="g-pstyle4">Page</p></div><div id="g-graph4-lg-g-ai0-5" class="g-graph1 g-aiAbs g-aiPointText" style="top:93.5551%;left:44.6261%;margin-top:-10.7271px;width:79.0029296875px"><p class="g-pstyle4">Publisher’s</p><p class="g-pstyle4">Homepage</p></div><div id="g-graph4-lg-g-ai0-6" class="g-graph1 g-aiAbs g-aiPointText" style="top:93.5272%;left:66.5109%;margin-top:-10.0532px;width:70.5654296875px"><p class="g-pstyle3">Syndicated</p><p class="g-pstyle3">Article</p></div><div id="g-graph4-lg-g-ai0-7" class="g-graph1 g-aiAbs g-aiPointText" style="top:93.5551%;left:77.2303%;margin-top:-10.7271px;width:73.8212890625px"><p class="g-pstyle4">Unofficial</p><p class="g-pstyle4">Copy</p></div><div id="g-graph4-lg-g-ai0-8" class="g-graph1 g-aiAbs" style="top:75.7825%;left:46.8314%;margin-left:-0.839%;width:1.6779%"><p class="g-pstyle5">10</p></div><div id="g-graph4-lg-g-ai0-9" class="g-graph1 g-aiAbs" style="top:75.7827%;left:48.3964%;margin-left:-0.4195%;width:0.839%"><p class="g-pstyle5">5</p></div><div id="g-graph4-lg-g-ai0-10" class="g-graph1 g-aiAbs" style="top:75.7818%;left:51.6642%;margin-left:-0.839%;width:1.6779%"><p class="g-pstyle5">27</p></div><div id="g-graph4-lg-g-ai0-11" class="g-graph1 g-aiAbs g-aiPointText" style="top:76.8974%;right:89.3092%;margin-top:-5.6382px;width:74.6943359375px"><p class="g-pstyle0">Perplexity</p></div><div id="g-graph4-lg-g-ai0-12" class="g-graph1 g-aiAbs g-aiPointText" style="top:70.2888%;right:89.3089%;margin-top:-5.6384px;width:58.8857421875px"><p class="g-pstyle0">COPILOT</p></div><div id="g-graph4-lg-g-ai0-13" class="g-graph1 g-aiAbs" style="top:68.3872%;left:78.9002%;margin-left:-0.839%;width:1.6779%"><p class="g-pstyle5">46</p></div><div id="g-graph4-lg-g-ai0-14" class="g-graph1 g-aiAbs g-aiPointText" style="top:63.733%;right:89.3089%;margin-top:-5.6384px;width:95.771484375px"><p class="g-pstyle0">Perplexity Pro</p></div><div id="g-graph4-lg-g-ai0-15" class="g-graph1 g-aiAbs" style="top:62.5087%;left:50.2866%;margin-left:-0.839%;width:1.6779%"><p class="g-pstyle5">48</p></div><div id="g-graph4-lg-g-ai0-16" class="g-graph1 g-aiAbs" style="top:62.5084%;left:56.186%;margin-left:-0.4195%;width:0.839%"><p class="g-pstyle5">9</p></div><div id="g-graph4-lg-g-ai0-17" class="g-graph1 g-aiAbs" style="top:61.9704%;left:76.2951%;margin-left:-0.839%;width:1.6779%"><p class="g-pstyle5">18</p></div><div id="g-graph4-lg-g-ai0-18" class="g-graph1 g-aiAbs" style="top:56.0138%;left:52.4611%;margin-left:-0.839%;width:1.6779%"><p class="g-pstyle5">71</p></div><div id="g-graph4-lg-g-ai0-19" class="g-graph1 g-aiAbs" style="top:56.0138%;left:59.8795%;margin-left:-0.4195%;width:0.839%"><p class="g-pstyle5">7</p></div><div id="g-graph4-lg-g-ai0-20" class="g-graph1 g-aiAbs g-aiPointText" style="top:57.0732%;right:89.3089%;margin-top:-5.6384px;width:90.501953125px"><p class="g-pstyle0">Grok-2 search</p></div><div id="g-graph4-lg-g-ai0-21" class="g-graph1 g-aiAbs g-aiPointText" style="top:51.2643%;right:89.3092%;margin-top:-5.6384px;width:95.771484375px"><p class="g-pstyle0">CHATGPT search</p></div><div id="g-graph4-lg-g-ai0-22" class="g-graph1 g-aiAbs" style="top:49.6137%;left:46.621%;margin-left:-0.4195%;width:0.839%"><p class="g-pstyle5">8</p></div><div id="g-graph4-lg-g-ai0-23" class="g-graph1 g-aiAbs" style="top:49.6137%;left:50.8889%;margin-left:-0.839%;width:1.6779%"><p class="g-pstyle5">36</p></div><div id="g-graph4-lg-g-ai0-24" class="g-graph1 g-aiAbs" style="top:49.6142%;left:78.1367%;margin-left:-0.839%;width:1.6779%"><p class="g-pstyle5">38</p></div><div id="g-graph4-lg-g-ai0-25" class="g-graph1 g-aiAbs" style="top:43.0811%;left:55.6661%;margin-left:-1.2584%;width:2.5169%"><p class="g-pstyle5">106</p></div><div id="g-graph4-lg-g-ai0-26" class="g-graph1 g-aiAbs" style="top:43.1919%;left:66.6782%;margin-left:-0.839%;width:1.6779%"><p class="g-pstyle5">11</p></div><div id="g-graph4-lg-g-ai0-27" class="g-graph1 g-aiAbs" style="top:43.0813%;left:75.2187%;margin-left:-0.4195%;width:0.839%"><p class="g-pstyle5">6</p></div><div id="g-graph4-lg-g-ai0-28" class="g-graph1 g-aiAbs g-aiPointText" style="top:44.1493%;right:89.3089%;margin-top:-5.6384px;width:101.041015625px"><p class="g-pstyle0">DEEPSEEK Search</p></div><div id="g-graph4-lg-g-ai0-29" class="g-graph1 g-aiAbs" style="top:36.5497%;left:47.3675%;margin-left:-0.839%;width:1.6779%"><p class="g-pstyle5">16</p></div><div id="g-graph4-lg-g-ai0-30" class="g-graph1 g-aiAbs" style="top:36.549%;left:49.7188%;margin-left:-0.4195%;width:0.839%"><p class="g-pstyle5">7</p></div><div id="g-graph4-lg-g-ai0-31" class="g-graph1 g-aiAbs" style="top:36.6095%;left:84.2538%;margin-left:-1.2584%;width:2.5169%"><p class="g-pstyle5">104</p></div><div id="g-graph4-lg-g-ai0-32" class="g-graph1 g-aiAbs g-aiPointText" style="top:37.7405%;right:89.3092%;margin-top:-5.6384px;width:53.6162109375px"><p class="g-pstyle0">GEMINI</p></div><div id="g-graph4-lg-g-ai0-33" class="g-graph1 g-aiAbs g-aiPointText" style="top:31.356%;right:89.3089%;margin-top:-5.6384px;width:90.501953125px"><p class="g-pstyle0">GROK-3 search</p></div><div id="g-graph4-lg-g-ai0-34" class="g-graph1 g-aiAbs" style="top:30.0213%;left:15.4462%;margin-left:-0.839%;width:1.6779%"><p class="g-pstyle5">26</p></div><div id="g-graph4-lg-g-ai0-35" class="g-graph1 g-aiAbs" style="top:30.0213%;left:18.9025%;margin-left:-0.4195%;width:0.839%"><p class="g-pstyle5">9</p></div><div id="g-graph4-lg-g-ai0-36" class="g-graph1 g-aiAbs" style="top:29.9104%;left:31.0327%;margin-left:-1.2584%;width:2.5169%"><p class="g-pstyle5">117</p></div><div id="g-graph4-lg-g-ai0-37" class="g-graph1 g-aiAbs" style="top:30.0263%;left:54.1682%;margin-left:-0.839%;width:1.6779%"><p class="g-pstyle5">90</p></div><div id="g-graph4-lg-g-ai0-38" class="g-graph1 g-aiAbs" style="top:30.0242%;left:63.7981%;margin-left:-0.839%;width:1.6779%"><p class="g-pstyle5">12</p></div><div id="g-graph4-lg-g-ai0-39" class="g-graph1 g-aiAbs" style="top:30.2395%;left:77.9998%;margin-left:-0.839%;width:1.6779%"><p class="g-pstyle5">36</p></div><div id="g-graph4-lg-g-ai0-40" class="g-graph1 g-aiAbs" style="top:21.3812%;left:13.1308%;width:26.1188%"><p class="g-pstyle2">WRONG ARTICLE IDENTIFIED</p></div><div id="g-graph4-lg-g-ai0-41" class="g-graph1 g-aiAbs" style="top:21.3812%;left:45.9578%;width:26.1188%"><p class="g-pstyle2">CORRECT ARTICLE IDENTIFIED</p></div><div id="g-graph4-lg-g-ai0-42" class="g-graph1 g-aiAbs" style="top:21.3812%;left:74.8211%;width:26.1188%"><p class="g-pstyle2">ARTICLE NOT IDENTIFIED</p></div></div></div><div class="graph4-stacked"><section class="graph4-panel"><h4>Wrong article identified</h4><div class="graph4-panel-body"><div class="graph4-platforms"><span>GROK-3 search</span><span>GEMINI</span><span>DEEPSEEK Search</span><span>CHATGPT search</span><span>Grok-2 search</span><span>Perplexity Pro</span><span>COPILOT</span><span>Perplexity</span></div><div class="graph4-crop" style="--crop-ratio:510/426;--art-width:315.2941%;--art-left:-38.0392%"><img src="graph4-lg.png?v=a8a641a83f8a" alt="" loading="lazy"><span class="graph4-value" style="left:10.662%;top:4.548%">26</span><span class="graph4-value" style="left:21.559%;top:4.548%">9</span><span class="graph4-value" style="left:59.805%;top:4.336%">117</span></div></div><div class="graph4-panel-key" aria-label="Link types for Wrong article identified"><span><i style="--swatch:#f4828d" aria-hidden="true"></i>Wrong article</span><span><i style="--swatch:#dadada" aria-hidden="true"></i>Missing link</span><span><i style="--swatch:#ffd65f" aria-hidden="true"></i>404 error page</span><span><i style="--swatch:#3499c9" aria-hidden="true"></i>Publisher’s homepage</span></div></section><section class="graph4-panel"><h4>Correct article identified</h4><div class="graph4-panel-body"><div class="graph4-platforms"><span>GROK-3 search</span><span>GEMINI</span><span>DEEPSEEK Search</span><span>CHATGPT search</span><span>Grok-2 search</span><span>Perplexity Pro</span><span>COPILOT</span><span>Perplexity</span></div><div class="graph4-crop" style="--crop-ratio:450/426;--art-width:357.3333%;--art-left:-160.6667%"><img src="graph4-lg.png?v=a8a641a83f8a" alt="" loading="lazy"><span class="graph4-value" style="left:6.678%;top:91.988%">10</span><span class="graph4-value" style="left:12.270%;top:91.989%">5</span><span class="graph4-value" style="left:23.947%;top:91.987%">27</span><span class="graph4-value" style="left:19.024%;top:66.625%">48</span><span class="graph4-value" style="left:40.105%;top:66.624%">9</span><span class="graph4-value" style="left:26.794%;top:54.214%">71</span><span class="graph4-value" style="left:53.303%;top:54.214%">7</span><span class="graph4-value" style="left:5.926%;top:41.985%">8</span><span class="graph4-value" style="left:21.176%;top:41.985%">36</span><span class="graph4-value" style="left:38.247%;top:29.502%">106</span><span class="graph4-value" style="left:77.597%;top:29.714%">11</span><span class="graph4-value" style="left:8.593%;top:17.022%">16</span><span class="graph4-value" style="left:16.995%;top:17.021%">7</span><span class="graph4-value" style="left:32.894%;top:4.557%">90</span><span class="graph4-value" style="left:67.305%;top:4.553%">12</span></div></div><div class="graph4-panel-key" aria-label="Link types for Correct article identified"><span><i style="--swatch:#60b768" aria-hidden="true"></i>Original article</span><span><i style="--swatch:#f78826" aria-hidden="true"></i>Syndicated article</span><span><i style="--swatch:#a21a45" aria-hidden="true"></i>Unofficial copy</span><span><i style="--swatch:#3499c9" aria-hidden="true"></i>Publisher’s homepage</span><span><i style="--swatch:#ffd65f" aria-hidden="true"></i>404 error page</span><span><i style="--swatch:#dadada" aria-hidden="true"></i>Missing link</span></div></section><section class="graph4-panel"><h4>Article not identified</h4><div class="graph4-panel-body"><div class="graph4-platforms"><span>GROK-3 search</span><span>GEMINI</span><span>DEEPSEEK Search</span><span>CHATGPT search</span><span>Grok-2 search</span><span>Perplexity Pro</span><span>COPILOT</span><span>Perplexity</span></div><div class="graph4-crop" style="--crop-ratio:421/426;--art-width:381.9477%;--art-left:-281.9477%"><img src="graph4-lg.png?v=a8a641a83f8a" alt="" loading="lazy"><span class="graph4-value" style="left:19.410%;top:77.857%">46</span><span class="graph4-value" style="left:9.460%;top:65.596%">18</span><span class="graph4-value" style="left:16.494%;top:41.986%">38</span><span class="graph4-value" style="left:5.348%;top:29.503%">6</span><span class="graph4-value" style="left:39.858%;top:17.136%">104</span><span class="graph4-value" style="left:15.971%;top:4.965%">36</span></div></div><div class="graph4-panel-key" aria-label="Link types for Article not identified"><span><i style="--swatch:#dadada" aria-hidden="true"></i>Missing link</span></div></section></div></div>
<!-- End all2html -->`,Hs=`<!-- Generated by all2html --><!-- source: graph3 -->
<style media="screen,print">
#g-graph3-box,
#g-graph3-box .g-artboard {
  margin: 0 auto;
}
#g-graph3-box p { margin: 0; padding: 0; border: 0; }
#g-graph3-box .g-aiAbs { position: absolute; }
#g-graph3-box .g-aiImg { position: absolute; top: 0; display: block; width: 100% !important; }
#g-graph3-box .g-aiPointText p { white-space: nowrap; }
#g-graph3-artboard-1 { position: relative; overflow: hidden; aspect-ratio: 1009 / 602; }
#g-graph3-artboard-1 p {
  color: rgb(0,0,0);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 13.2px;
  margin: 0;
  text-align: left;
}
#g-graph3-artboard-1 .g-pstyle0 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 10px;
  line-height: 12px;
}
#g-graph3-artboard-1 .g-pstyle1 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  line-height: 19.2px;
}
#g-graph3-artboard-1 .g-pstyle2 {
  font-family: "SFMono-Regular", Menlo, Consolas, monospace;
  font-size: 13.86px;
  height: 16.63px;
  line-height: 16.63px;
  text-align: center;
  text-transform: uppercase;
}
#g-graph3-artboard-1 .g-pstyle3 {
  font-family: "SFMono-Regular", Menlo, Consolas, monospace;
  font-size: 10px;
  font-weight: 700;
  line-height: 12px;
}
#g-graph3-artboard-1 .g-pstyle4 {
  font-family: "SFMono-Regular", Menlo, Consolas, monospace;
  font-size: 12.13px;
  font-weight: 700;
  height: 14.55px;
  line-height: 14.55px;
  opacity: 0.5;
  text-align: center;
  text-transform: uppercase;
}
#g-graph3-artboard-1 .g-pstyle5 {
  font-family: "SFMono-Regular", Menlo, Consolas, monospace;
  font-size: 13.88px;
  height: 16.65px;
  line-height: 16.65px;
  text-align: center;
  text-transform: uppercase;
}
#g-graph3-artboard-1 .g-pstyle6 {
  font-family: "SFMono-Regular", Menlo, Consolas, monospace;
  font-size: 13.85px;
  height: 16.62px;
  line-height: 16.62px;
  text-align: center;
  text-transform: uppercase;
}
#g-graph3-box { position: relative; container-type: inline-size; container-name: crawler-chart; }
#g-graph3-box .g-aiImg { clip-path: inset(0 0 6.5% 0); }
#g-graph3-box .graph3-heading { position: absolute; z-index: 1; top: 2.8cqw; left: 5%; width: 55.5%; display: grid; gap: .45cqw; margin: 0; }
#g-graph3-box .graph3-heading .g-pstyle1 { font: 600 clamp(10px, 1.55cqw, 15px)/1.18 system-ui, sans-serif; text-wrap: balance; }
#g-graph3-box .graph3-heading p:not(.g-pstyle1) { font: 400 clamp(7px, 1.05cqw, 10.5px)/1.2 Arial, Helvetica, sans-serif; }
#g-graph3-box .g-aiPointText p { font-size: clamp(7px, 1.18cqw, 12px); line-height: 1.1; }
#g-graph3-box .graph3-axis { position: absolute; left: 1.6%; writing-mode: vertical-rl; transform: translateX(-50%) rotate(180deg); text-transform: uppercase; color: #666; font: 500 clamp(6px, 1.05cqw, 10px)/1.14 Menlo, monospace; }
#g-graph3-box .graph3-axis-upper { bottom: 42%; }
#g-graph3-box .graph3-axis-lower { top: 64%; }
#g-graph3-box .graph3-key { position: relative; display: flex; justify-content: center; flex-wrap: wrap; gap: .5rem clamp(.6rem, 2.5cqw, 1.5rem); margin-top: -3.2cqw; background: white; }
#g-graph3-box .graph3-key > div { display: flex; align-items: center; gap: .4rem; font: 400 clamp(7px, 1.1cqw, 10.5px)/1.15 Menlo, monospace; white-space: nowrap; }
#g-graph3-box .graph3-key i { display: grid; place-items: center; width: clamp(.65rem, 1.8cqw, 1.05rem); aspect-ratio: 1; border: 1px solid rgb(0 0 0 / 14%); background: var(--swatch); color: #fff; box-sizing: border-box; font-style: normal; }
#g-graph3-box .graph3-key > div:last-child i { border: 1px dashed #728299; }
@container crawler-chart (max-width: 640px) {
  #g-graph3-box .graph3-heading { position: static; width: auto; gap: .3rem; margin-bottom: .65rem; }
  #g-graph3-box .graph3-heading .g-pstyle1 { font: 600 clamp(12px, 3.13cqw, 20px)/1.13 system-ui, sans-serif; }
  #g-graph3-box .graph3-heading p:not(.g-pstyle1) { font: 400 clamp(9px, 2.22cqw, 14px)/1.2 Arial, Helvetica, sans-serif; }
  #g-graph3-box .graph3-plot { overflow-x: auto; }
  #g-graph3-box #g-graph3-artboard-1 { min-width: 660px; margin: 0; }
  #g-graph3-box .graph3-key { margin-top: .45rem; }
  #g-graph3-box .g-aiPointText p { font-size: 8px; }
}
</style>
<div id="g-graph3-box" class="ai2html g-all2html"><header class="graph3-heading"><p class="g-pstyle1">Blocking crawlers doesn’t guarantee content is inaccessible, and crawler access doesn’t ensure accuracy</p><p>The Tow Center asked eight generative search tools to identify the source article, the publication and URL for 200 excerpts extracted from news articles by 20 publishers. Each square represents one response. Grok and DeepSeek do not disclose the name of their crawlers.</p></header><div class="graph3-plot" role="region" tabindex="0" aria-label="Crawler access plot"><!-- Artboard: Artboard 1 --><div id="g-graph3-artboard-1" class="g-artboard" style="" data-aspect-ratio="1.676" data-min-width="0"><div style="padding:0 0 59.6630% 0"></div><img id="g-graph3-artboard-1-img" class="g-aiImg" alt="" src="graph3-artboard-1.png?v=6b65e7d7d003" loading="lazy"><div id="g-graph3-artboard-1-g-ai0-2" class="g-layer-1 g-aiAbs" style="top:70.2872%;left:63.7471%;width:15.0696%"><p class="g-pstyle0">Perplexity accurately identified all 10 quotes from paywalled National Geographic articles, despite the publication blocking its crawlers</p></div><span class="graph3-axis graph3-axis-lower">Blocked</span><div id="g-graph3-artboard-1-g-ai0-4" class="g-layer-1 g-aiAbs g-aiPointText" style="top:60.1989%;left:12.3404%;margin-top:-8.8994px;margin-left:-69.2192px;width:138.4384765625px"><p class="g-pstyle2">CHATGPT SEARCH</p></div><div id="g-graph3-artboard-1-g-ai0-5" class="g-layer-1 g-aiAbs g-aiPointText" style="top:60.1989%;left:32.2219%;margin-top:-8.8994px;margin-left:-69.219px;width:138.43798828125px"><p class="g-pstyle2">Perplexity pro</p></div><div id="g-graph3-artboard-1-g-ai0-6" class="g-layer-1 g-aiAbs g-aiPointText" style="top:60.1988%;left:52.4031%;margin-top:-8.8994px;margin-left:-52.5854px;width:105.1708984375px"><p class="g-pstyle2">Perplexity</p></div><div id="g-graph3-artboard-1-g-ai0-7" class="g-layer-1 g-aiAbs g-aiPointText" style="top:60.226%;left:72.5137%;margin-top:-8.9102px;margin-left:-69.2886px;width:138.5771484375px"><p class="g-pstyle5">COPILOT search</p></div><div id="g-graph3-artboard-1-g-ai0-8" class="g-layer-1 g-aiAbs g-aiPointText" style="top:60.2543%;left:90.8926%;margin-top:-8.8936px;margin-left:-65.0244px;width:130.048828125px"><p class="g-pstyle6">GEMINI SEARCH</p></div><span class="graph3-axis graph3-axis-upper">Has access</span></div></div><div class="graph3-key" role="list" aria-label="Response categories"><div role="listitem"><i style="--swatch:#88bf78" aria-hidden="true"></i><span>Completely<br>Correct</span></div><div role="listitem"><i style="--swatch:#abd7a6" aria-hidden="true"></i><span>Correct but<br>Incomplete</span></div><div role="listitem"><i style="--swatch:#ffabb5" aria-hidden="true"></i><span>Partially<br>Incorrect</span></div><div role="listitem"><i style="--swatch:#fc7e8b" aria-hidden="true"></i><span>Completely<br>Incorrect</span></div><div role="listitem"><i style="--swatch:#dcdcdc" aria-hidden="true"></i><span>No Answer<br>Provided</span></div><div role="listitem"><i style="--swatch:#b4cde9" aria-hidden="true">×</i><span>Crawler<br>Blocked</span></div></div></div>
<!-- End all2html -->`,Ws=`<!-- Generated by all2html --><!-- source: graph2 -->
<style media="screen,print">
#g-graph2-box { position: relative; container-type: inline-size; container-name: premium-chart; }
#g-graph2-box,
#g-graph2-box .g-artboard {
  margin: 0 auto;
}
#g-graph2-box p { margin: 0; padding: 0; border: 0; }
#g-graph2-box .g-aiAbs { position: absolute; }
#g-graph2-box .g-aiImg { position: absolute; top: 0; display: block; width: 100% !important; }
#g-graph2-box .g-aiPointText p { white-space: nowrap; }
#g-graph2-artboard-1 { position: relative; overflow: hidden; aspect-ratio: 595 / 467; }
#g-graph2-artboard-1 p {
  color: rgb(0,0,0);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 10.7px;
  font-style: normal;
  font-weight: 500;
  line-height: 12.8px;
  margin: 0;
  text-align: left;
}
#g-graph2-artboard-1 .g-pstyle0 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13.7px;
  line-height: 16.4px;
}
#g-graph2-artboard-1 .g-pstyle1 {
  font-family: "SFMono-Regular", Menlo, Consolas, monospace;
  font-size: 9.15px;
  height: 10.98px;
  line-height: 10.98px;
  text-align: center;
  text-transform: uppercase;
}
#g-graph2-artboard-1 .g-pstyle2 {
  font-family: "SFMono-Regular", Menlo, Consolas, monospace;
  font-size: 9.24px;
  height: 11.09px;
  line-height: 11.09px;
  text-align: center;
  text-transform: uppercase;
}
#g-graph2-artboard-1 .g-pstyle3 {
  font-family: "SFMono-Regular", Menlo, Consolas, monospace;
  font-size: 7px;
  font-weight: 700;
  line-height: 8.41px;
}
#g-graph2-artboard-1 .g-pstyle4 {
  font-family: "SFMono-Regular", Menlo, Consolas, monospace;
  font-size: 8.98px;
  height: 10.78px;
  line-height: 10.78px;
  text-align: center;
  text-transform: uppercase;
}
#g-graph2-artboard-1 .g-cstyle0 {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
}
#g-graph2-box .premium-axis {
  position: absolute;
  left: 3.03%;
  writing-mode: vertical-rl;
  transform: translateX(-50%) rotate(180deg);
  color: #666;
  text-transform: uppercase;
  text-align: center;
  white-space: nowrap;
  font: 500 clamp(4.8px, 1.48cqw, 9px)/1.14 Menlo, Consolas, monospace;
}
#g-graph2-box .premium-axis-upper { top: 54%; }
#g-graph2-box .premium-axis-lower { bottom: 14%; }
#g-graph2-box .premium-down-arrow {
  position: absolute;
  left: 2.45%;
  top: 83.8%;
  width: 1.2%;
  height: 6.3%;
  background: white;
}
#g-graph2-box .premium-down-arrow::after {
  content: '';
  position: absolute;
  inset: 52% 0 0;
  background: #171717;
  clip-path: polygon(44% 0, 56% 0, 56% 65%, 100% 65%, 50% 100%, 0 65%, 44% 65%);
}
#g-graph2-box .premium-chart-legend {
  position: absolute;
  inset-inline: 0;
  top: 92.5%;
  min-height: 5.5%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: clamp(.45rem, 2.5cqw, 1rem);
  background: white;
}
#g-graph2-box .premium-chart-legend .chart-legend-entry {
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  gap: .75cqw;
  color: #171717;
  font: 400 10.23px/1.15 Menlo, Consolas, monospace;
  white-space: nowrap;
}
#g-graph2-box .premium-chart-legend i {
  flex: 0 0 clamp(.45rem, 2.8cqw, 1.05rem);
  aspect-ratio: 1;
  background: var(--swatch);
  border: 1px solid rgb(0 0 0 / 14%);
  box-sizing: border-box;
}
@media (min-width: 702px) and (max-width: 989px) {
  #g-graph2-box .premium-chart-legend .chart-legend-entry { font-size: 8px; }
}
@media (max-width: 701px) {
  #g-graph2-box .premium-chart-legend .chart-legend-entry { font-size: clamp(4px, 1.4cqw, 8px); }
}
#g-graph2-box .premium-chart-heading { display: contents; }
#g-graph2-box .premium-chart-heading p { color: #000; font-family: Arial, Helvetica, sans-serif; }
#g-graph2-box .premium-chart-heading .g-pstyle0 { font-size: 13.7px; font-weight: 400; line-height: 16.4px; }
#g-graph2-artboard-1-g-ai0-8 p { font-size: 10.7px; line-height: 12.8px; }
#g-graph2-box .premium-chart-heading .g-pstyle0 strong { color: inherit; font-weight: 700; }
@container premium-chart (max-width: 520px) {
  #g-graph2-box .premium-chart-heading {
    display: grid;
    gap: 4px;
    position: relative;
    z-index: 1;
    padding-inline: 6.5% 3%;
  }
  #g-graph2-box .premium-chart-heading > div { position: static; width: auto !important; }
  #g-graph2-box .premium-chart-heading + #g-graph2-artboard-1 { margin-top: -10cqw; }
  #g-graph2-box .premium-chart-heading .g-pstyle0 {
    font-size: clamp(9.5px, 3cqw, 13.7px);
    font-weight: 400;
    line-height: 1.13;
  }
  #g-graph2-artboard-1-g-ai0-8 p { font-size: clamp(6.3px, 2.1cqw, 10.7px); line-height: 1.2; }
}
</style>
<div id="g-graph2-box" class="ai2html g-all2html"><div class="premium-chart-heading"><div id="g-graph2-artboard-1-g-ai0-9" class="g-layer-1 g-aiAbs" style="top:1.2165%;left:6.6708%;width:89.4632%"><p class="g-pstyle0">Grok-3 Search and Perplexity Pro’s responses <strong>exhibited less uncertainty</strong> and were <strong>more frequently confidently incorrect</strong> than their free counterparts in our study</p></div><div id="g-graph2-artboard-1-g-ai0-8" class="g-layer-1 g-aiAbs" style="top:9.2188%;left:6.4921%;width:85.9211%"><p>The Tow Center asked eight generative search tools to identify the source article, the publication and URL for 200 excerpts extracted from news articles by 20 publishers. Each square represents one response.</p></div></div><!-- Artboard: Artboard 1 --><div id="g-graph2-artboard-1" class="g-artboard" style="" data-aspect-ratio="1.274" data-min-width="0"><div style="padding:0 0 78.4874% 0"></div><img id="g-graph2-artboard-1-img" class="g-aiImg" alt="" src="graph2-artboard-1.png?v=eabe493b6293" loading="lazy"><div class="premium-chart-legend" role="list" aria-label="Response categories"><div class="chart-legend-entry" role="listitem"><i style="--swatch:#88bf78" aria-hidden="true"></i><span>Completely<br>Correct</span></div><div class="chart-legend-entry" role="listitem"><i style="--swatch:#abd7a6" aria-hidden="true"></i><span>Correct but<br>Incomplete</span></div><div class="chart-legend-entry" role="listitem"><i style="--swatch:#ffabb5" aria-hidden="true"></i><span>Partially<br>Incorrect</span></div><div class="chart-legend-entry" role="listitem"><i style="--swatch:#fc7e8b" aria-hidden="true"></i><span>Completely<br>Incorrect</span></div><div class="chart-legend-entry" role="listitem"><i style="--swatch:#dcdcdc" aria-hidden="true"></i><span>No Answer<br>Provided</span></div></div><div id="g-graph2-artboard-1-g-ai0-3" class="g-layer-1 g-aiAbs g-aiPointText" style="top:68.4669%;left:15.7041%;margin-top:-5.9314px;margin-left:-38.7166px;width:77.43310546875px"><p class="g-pstyle2">Perplexity</p></div><div id="g-graph2-artboard-1-g-ai0-4" class="g-layer-1 g-aiAbs g-aiPointText" style="top:68.4669%;left:36.8963%;margin-top:-5.9314px;margin-left:-49.8032px;width:99.6064453125px"><p class="g-pstyle2">Perplexity Pro</p></div><div id="g-graph2-artboard-1-g-ai0-5" class="g-layer-1 g-aiAbs g-aiPointText" style="top:68.3211%;left:65.4464%;margin-top:-5.8748px;margin-left:-46.6865px;width:93.373046875px"><p class="g-pstyle1">Grok-2 search</p></div><div id="g-graph2-artboard-1-g-ai0-6" class="g-layer-1 g-aiAbs g-aiPointText" style="top:68.3211%;left:87.1878%;margin-top:-5.8748px;margin-left:-46.6865px;width:93.373046875px"><p class="g-pstyle1">GROK-3 search</p></div><div class="premium-axis premium-axis-upper">Confident</div><span class="premium-down-arrow" aria-hidden="true"></span><div class="premium-axis premium-axis-lower">Not confident /<br>No answer</div></div></div>
<!-- End all2html -->`,Bs=`<!-- Generated by all2html --><!-- source: graphs-copy -->
<style media="screen,print">
#g-graphs-copy-box {
  container-type: inline-size;
  container-name: g-graphs-copy-box;
}
#g-graphs-copy-box,
#g-graphs-copy-box .g-artboard {
  margin: 0 auto;
}
#g-graphs-copy-box p { margin: 0; padding: 0; border: 0; }
#g-graphs-copy-box .g-aiAbs { position: absolute; }
#g-graphs-copy-box .g-aiImg { position: absolute; top: 0; display: block; width: 100% !important; }
#g-graphs-copy-box .g-aiPointText p { white-space: nowrap; }
#g-graphs-copy-xs { position: relative; overflow: hidden; aspect-ratio: 330 / 541; }
#g-graphs-copy-xs p {
  color: rgb(0,0,0);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 7px;
  font-style: normal;
  font-weight: 400;
  line-height: 8.4px;
  margin: 0;
  text-align: left;
}
#g-graphs-copy-xs .g-pstyle0 {
  font-weight: 600;
  font-family: "SFMono-Regular", Menlo, Consolas, monospace;
  font-size: clamp(5.4px, 1.86cqw, 10px);
  line-height: 1.08;
  text-align: center;
  text-transform: uppercase;
}
#g-graphs-copy-xs .g-pstyle1 {
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
  font-size: clamp(9px, 3.13cqw, 20px);
  line-height: 1.08;
}
#g-graphs-copy-xs .g-pstyle3 {
  font-family: "SFMono-Regular", Menlo, Consolas, monospace;
  font-size: 7.33px;
  height: 8.8px;
  line-height: 8.8px;
  opacity: 0.64;
  text-align: center;
  text-transform: uppercase;
}
#g-graphs-copy-xs .g-cstyle0 {
  color: rgb(242,126,139);
}
#g-graphs-copy-md { position: relative; overflow: hidden; aspect-ratio: 660 / 343; }
#g-graphs-copy-md p {
  color: rgb(0,0,0);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 9.15px;
  font-style: normal;
  font-weight: 400;
  line-height: 10.98px;
  margin: 0;
  text-align: left;
}
#g-graphs-copy-md .g-pstyle0 {
  font-weight: 600;
  font-family: "SFMono-Regular", Menlo, Consolas, monospace;
  font-size: 5.45px;
  height: 6.54px;
  line-height: 6.54px;
  text-align: center;
  text-transform: uppercase;
}
#g-graphs-copy-md .g-pstyle1 {
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12.2px;
  line-height: 14.64px;
}
#g-graphs-copy-md .g-pstyle3 {
  font-family: "SFMono-Regular", Menlo, Consolas, monospace;
  font-size: 7.88px;
  height: 9.45px;
  line-height: 9.45px;
  opacity: 0.64;
  text-align: center;
  text-transform: uppercase;
}
#g-graphs-copy-md .g-cstyle0 {
  color: rgb(242,126,139);
}
#g-graphs-copy-lg { position: relative; overflow: hidden; aspect-ratio: 930 / 490; }
#g-graphs-copy-lg p {
  color: rgb(0,0,0);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12.93px;
  font-style: normal;
  font-weight: 400;
  line-height: 15.52px;
  margin: 0;
  text-align: left;
}
#g-graphs-copy-lg .g-pstyle0 {
  font-weight: 600;
  font-family: "SFMono-Regular", Menlo, Consolas, monospace;
  font-size: 7.7px;
  height: 9.24px;
  line-height: 9.24px;
  text-align: center;
  text-transform: uppercase;
}
#g-graphs-copy-lg .g-pstyle1 {
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 17.24px;
  line-height: 20.69px;
}
#g-graphs-copy-lg .g-pstyle3 {
  font-family: "SFMono-Regular", Menlo, Consolas, monospace;
  font-size: 11.14px;
  height: 13.37px;
  line-height: 13.37px;
  opacity: 0.64;
  text-align: center;
  text-transform: uppercase;
}
#g-graphs-copy-lg .g-cstyle0 {
  color: rgb(242,126,139);
}
#g-graphs-copy-md { display: none; }
#g-graphs-copy-lg { display: none; }
@container g-graphs-copy-box (min-width: 660px) {
  #g-graphs-copy-xs { display: none; }
}
@container g-graphs-copy-box (min-width: 660px) and (max-width: 929px) {
  #g-graphs-copy-md { display: block; }
}
@container g-graphs-copy-box (min-width: 930px) {
  #g-graphs-copy-lg { display: block; }
}
#g-graphs-copy-box .confidence-axis {
  position: absolute;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  text-transform: uppercase;
  white-space: nowrap;
  font: 500 clamp(4px, 1.05cqw, 10px)/1.14 Menlo, Consolas, monospace;
  color: #666;
  text-align: center;
}
#g-graphs-copy-box .confidence-axis-upper { left: 1.85%; bottom: 45%; }
#g-graphs-copy-box .confidence-axis-lower { left: .5%; top: 60.5%; }
#g-graphs-copy-xs .g-pstyle3,
#g-graphs-copy-box .confidence-axis-xs {
  font: 500 clamp(6px, 2.06cqw, 10px)/1.14 Menlo, Consolas, monospace;
  opacity: 1;
  color: #666;
}
#g-graphs-copy-box .confidence-axis-xs-upper,
#g-graphs-copy-box .confidence-axis-xs-lower {
  left: 5.85%;
  transform: translateX(-50%) rotate(180deg);
}
#g-graphs-copy-box .confidence-axis-xs-upper-first { top: 36.2%; }
#g-graphs-copy-box .confidence-axis-xs-upper-second { top: 73.7%; }
#g-graphs-copy-box .confidence-axis-xs-first { top: 47.7%; }
#g-graphs-copy-box .confidence-axis-xs-second { top: 85.8%; }
#g-graphs-copy-box .mobile-chart-header {
  position: absolute;
  top: 1.2%;
  left: 2%;
  right: 2%;
}
#g-graphs-copy-xs .mobile-chart-header .g-pstyle1 { margin-bottom: .38em; }
#g-graphs-copy-xs .mobile-chart-header p:not(.g-pstyle1) {
  font: 400 clamp(6.4px, 2.22cqw, 14px)/1.2 Arial, Helvetica, sans-serif;
}
#g-graphs-copy-xs .mobile-chart-legend {
  position: absolute;
  top: 12.3%;
  left: 9.5%;
  right: 15%;
  min-height: 2.5%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  align-items: center;
  gap: .6cqw;
  background: white;
  margin: 0;
  padding: .55cqw .65cqw;
  border: 0;
  list-style: none;
}
#g-graphs-copy-xs .mobile-chart-legend li {
  display: flex;
  align-items: center;
  gap: 1.1cqw;
  margin: 0;
  padding: 0;
  border: 0;
  color: #171717;
  font: 400 clamp(4px, 1.4cqw, 8px)/1.15 Menlo, Consolas, monospace;
  white-space: nowrap;
}
#g-graphs-copy-xs .mobile-chart-legend li::before { content: none; }
#g-graphs-copy-xs .mobile-chart-legend i {
  flex: 0 0 2.85cqw;
  aspect-ratio: 1;
  background: var(--swatch);
  border: 1px solid rgb(0 0 0 / 14%);
  box-sizing: border-box;
}
#g-graphs-copy-box .desktop-chart-legend {
  position: absolute;
  top: 88%;
  inset-inline: 0;
  min-height: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: clamp(.85rem, 2.5cqw, 1.5rem);
  box-sizing: border-box;
  margin: 0;
  padding: .5cqw 1.5cqw;
  border: 0;
  background: white;
  list-style: none;
}
#g-graphs-copy-box .desktop-chart-legend .chart-legend-entry {
  display: flex;
  flex: 0 0 auto;
  width: auto;
  min-width: 0;
  align-items: center;
  gap: .55cqw;
  margin: 0;
  padding: 0;
  border: 0;
  color: #171717;
  font: 400 clamp(6.5px, 1.1cqw, 10.5px)/1.15 Menlo, Consolas, monospace;
  white-space: nowrap;
}
#g-graphs-copy-box .desktop-chart-legend i {
  flex: 0 0 1.8cqw;
  aspect-ratio: 1;
  background: var(--swatch);
  border: 1px solid rgb(0 0 0 / 14%);
  box-sizing: border-box;
}
</style>
<div id="g-graphs-copy-box" class="ai2html g-all2html"><!-- Artboard: xs --><div id="g-graphs-copy-xs" class="g-artboard" style="max-width:659px" data-aspect-ratio="0.610" data-min-width="0" data-max-width="659"><div style="padding:0 0 163.9394% 0"></div><img id="g-graphs-copy-xs-img" class="g-aiImg" alt="" src="graphs-copy-xs.png?v=d173ac102b41" loading="lazy"><div id="g-graphs-copy-xs-g-ai1-2" class="g-graph1 g-aiAbs g-aiPointText" style="top:82.5116%;left:19.9737%;margin-top:-3.2549px;margin-left:-21.646px;width:43.2919921875px"><p class="g-pstyle0">COPILOT</p></div><div id="g-graphs-copy-xs-g-ai1-3" class="g-graph1 g-aiAbs g-aiPointText" style="top:82.5116%;left:42.4184%;margin-top:-3.2549px;margin-left:-30.771px;width:61.5419921875px"><p class="g-pstyle0">Grok-2 Search</p></div><div id="g-graphs-copy-xs-g-ai1-4" class="g-graph1 g-aiAbs g-aiPointText" style="top:82.5116%;left:65.0523%;margin-top:-3.2549px;margin-left:-30.771px;width:61.5419921875px"><p class="g-pstyle0">GROK-3 Search</p></div><div id="g-graphs-copy-xs-g-ai1-5" class="g-graph1 g-aiAbs g-aiPointText" style="top:82.5116%;left:87.5112%;margin-top:-3.2549px;margin-left:-20.125px;width:40.25px"><p class="g-pstyle0">GEMINI</p></div><div class="confidence-axis confidence-axis-xs confidence-axis-xs-upper confidence-axis-xs-upper-second">Confident</div><div class="confidence-axis confidence-axis-xs confidence-axis-xs-lower confidence-axis-xs-second">Not confident /<br>No answer</div><div id="g-graphs-copy-xs-g-ai1-8" class="g-graph1 g-aiAbs g-aiPointText" style="top:45.8098%;left:19.9832%;margin-top:-3.2546px;margin-left:-32.292px;width:64.583984375px"><p class="g-pstyle0">CHATGPT Search</p></div><div id="g-graphs-copy-xs-g-ai1-9" class="g-graph1 g-aiAbs g-aiPointText" style="top:45.8095%;left:42.2559%;margin-top:-3.2546px;margin-left:-26.2085px;width:52.4169921875px"><p class="g-pstyle0">Perplexity</p></div><div id="g-graphs-copy-xs-g-ai1-10" class="g-graph1 g-aiAbs g-aiPointText" style="top:45.8098%;left:64.7076%;margin-top:-3.2546px;margin-left:-32.292px;width:64.583984375px"><p class="g-pstyle0">Perplexity Pro</p></div><div id="g-graphs-copy-xs-g-ai1-11" class="g-graph1 g-aiAbs g-aiPointText" style="top:45.8098%;left:87.1584%;margin-top:-3.2546px;margin-left:-33.8127px;width:67.62548828125px"><p class="g-pstyle0">DEEPSEEK Search</p></div><div class="confidence-axis confidence-axis-xs confidence-axis-xs-upper confidence-axis-xs-upper-first">Confident</div><div class="confidence-axis confidence-axis-xs confidence-axis-xs-lower confidence-axis-xs-first">Not confident /<br>No answer</div><ul class="mobile-chart-legend" aria-label="Response categories"><li><i style="--swatch:#88bf78" aria-hidden="true"></i><span>Completely<br>Correct</span></li><li><i style="--swatch:#abd7a6" aria-hidden="true"></i><span>Correct but<br>Incomplete</span></li><li><i style="--swatch:#ffabb5" aria-hidden="true"></i><span>Partially<br>Incorrect</span></li><li><i style="--swatch:#fc7e8b" aria-hidden="true"></i><span>Completely<br>Incorrect</span></li><li><i style="--swatch:#dcdcdc" aria-hidden="true"></i><span>No Answer<br>Provided</span></li></ul><div class="mobile-chart-header"><p class="g-pstyle1">Generative search tools were often confidently <span class="g-cstyle0">wrong </span>in our study</p><p>The Tow Center asked eight generative search tools to identify the source article, the publication and URL for 200 excerpts extracted from news articles by 20 publishers. Each square represents the citation behavior of a response. Each square represents one response.</p></div></div><!-- Artboard: md --><div id="g-graphs-copy-md" class="g-artboard" style="min-width:660px;max-width:929px" data-aspect-ratio="1.924" data-min-width="660" data-max-width="929"><div style="padding:0 0 51.9697% 0"></div><img id="g-graphs-copy-md-img" class="g-aiImg" alt="" src="graphs-copy-md.png?v=b5422563175e" loading="lazy"><div class="desktop-chart-legend" role="list" aria-label="Response categories"><div class="chart-legend-entry" role="listitem"><i style="--swatch:#88bf78" aria-hidden="true"></i><span>Completely<br>Correct</span></div><div class="chart-legend-entry" role="listitem"><i style="--swatch:#abd7a6" aria-hidden="true"></i><span>Correct but<br>Incomplete</span></div><div class="chart-legend-entry" role="listitem"><i style="--swatch:#ffabb5" aria-hidden="true"></i><span>Partially<br>Incorrect</span></div><div class="chart-legend-entry" role="listitem"><i style="--swatch:#fc7e8b" aria-hidden="true"></i><span>Completely<br>Incorrect</span></div><div class="chart-legend-entry" role="listitem"><i style="--swatch:#dcdcdc" aria-hidden="true"></i><span>No Answer<br>Provided</span></div></div><div id="g-graphs-copy-md-g-ai2-3" class="g-graph1 g-aiAbs g-aiPointText" style="top:58.9146%;left:9.6187%;margin-top:-3.4966px;margin-left:-33.874px;width:67.748046875px"><p class="g-pstyle0">CHATGPT Search</p></div><div id="g-graphs-copy-md-g-ai2-4" class="g-graph1 g-aiAbs g-aiPointText" style="top:58.9141%;left:21.5827%;margin-top:-3.4966px;margin-left:-27.3389px;width:54.677734375px"><p class="g-pstyle0">Perplexity</p></div><div id="g-graphs-copy-md-g-ai2-5" class="g-graph1 g-aiAbs g-aiPointText" style="top:58.9146%;left:33.6426%;margin-top:-3.4966px;margin-left:-33.874px;width:67.748046875px"><p class="g-pstyle0">Perplexity Pro</p></div><div id="g-graphs-copy-md-g-ai2-6" class="g-graph1 g-aiAbs g-aiPointText" style="top:58.9146%;left:45.7023%;margin-top:-3.4966px;margin-left:-35.5078px;width:71.015625px"><p class="g-pstyle0">DEEPSEEK Search</p></div><div id="g-graphs-copy-md-g-ai2-7" class="g-graph1 g-aiAbs g-aiPointText" style="top:58.9146%;left:57.7614%;margin-top:-3.4966px;margin-left:-22.437px;width:44.8740234375px"><p class="g-pstyle0">COPILOT</p></div><div id="g-graphs-copy-md-g-ai2-8" class="g-graph1 g-aiAbs g-aiPointText" style="top:58.9146%;left:69.8177%;margin-top:-3.4966px;margin-left:-32.2402px;width:64.48046875px"><p class="g-pstyle0">Grok-2 Search</p></div><div id="g-graphs-copy-md-g-ai2-9" class="g-graph1 g-aiAbs g-aiPointText" style="top:58.9146%;left:81.9757%;margin-top:-3.4966px;margin-left:-32.2402px;width:64.48046875px"><p class="g-pstyle0">GROK-3 Search</p></div><div id="g-graphs-copy-md-g-ai2-10" class="g-graph1 g-aiAbs g-aiPointText" style="top:58.9146%;left:94.0397%;margin-top:-3.4966px;margin-left:-20.8032px;width:41.6064453125px"><p class="g-pstyle0">GEMINI</p></div><div class="confidence-axis confidence-axis-upper">Confident</div><div class="confidence-axis confidence-axis-lower">Not confident /<br>No answer</div><div id="g-graphs-copy-md-g-ai2-12" class="g-graph1 g-aiAbs" style="top:6.6657%;left:5.153%;width:77.5104%"><p>The Tow Center asked eight generative search tools to identify the source article, the publication and URL for 200 excerpts extracted from news articles by 20 publishers. Each square represents the citation behavior of a response.</p></div><div id="g-graphs-copy-md-g-ai2-13" class="g-graph1 g-aiAbs" style="top:0.7742%;left:5.153%;width:92.1187%"><p class="g-pstyle1">Generative search tools were often confidently <span class="g-cstyle0">wrong </span>in our study</p></div></div><!-- Artboard: lg --><div id="g-graphs-copy-lg" class="g-artboard" style="min-width:930px" data-aspect-ratio="1.898" data-min-width="930"><div style="padding:0 0 52.6882% 0"></div><img id="g-graphs-copy-lg-img" class="g-aiImg" alt="" src="graphs-copy-lg.png?v=455ec0dc173e" loading="lazy"><div class="desktop-chart-legend" role="list" aria-label="Response categories"><div class="chart-legend-entry" role="listitem"><i style="--swatch:#88bf78" aria-hidden="true"></i><span>Completely<br>Correct</span></div><div class="chart-legend-entry" role="listitem"><i style="--swatch:#abd7a6" aria-hidden="true"></i><span>Correct but<br>Incomplete</span></div><div class="chart-legend-entry" role="listitem"><i style="--swatch:#ffabb5" aria-hidden="true"></i><span>Partially<br>Incorrect</span></div><div class="chart-legend-entry" role="listitem"><i style="--swatch:#fc7e8b" aria-hidden="true"></i><span>Completely<br>Incorrect</span></div><div class="chart-legend-entry" role="listitem"><i style="--swatch:#dcdcdc" aria-hidden="true"></i><span>No Answer<br>Provided</span></div></div><div id="g-graphs-copy-lg-g-ai0-3" class="g-graph1 g-aiAbs g-aiPointText" style="top:58.1241%;left:9.9405%;margin-top:-4.9448px;margin-left:-43.3472px;width:86.6943359375px"><p class="g-pstyle0">CHATGPT Search</p></div><div id="g-graphs-copy-lg-g-ai0-4" class="g-graph1 g-aiAbs g-aiPointText" style="top:58.1235%;left:21.9424%;margin-top:-4.9448px;margin-left:-34.105px;width:68.2099609375px"><p class="g-pstyle0">Perplexity</p></div><div id="g-graphs-copy-lg-g-ai0-5" class="g-graph1 g-aiAbs g-aiPointText" style="top:58.1239%;left:34.0403%;margin-top:-4.9448px;margin-left:-43.3472px;width:86.6943359375px"><p class="g-pstyle0">Perplexity Pro</p></div><div id="g-graphs-copy-lg-g-ai0-6" class="g-graph1 g-aiAbs g-aiPointText" style="top:58.1239%;left:46.138%;margin-top:-4.9448px;margin-left:-45.6577px;width:91.3154296875px"><p class="g-pstyle0">DEEPSEEK Search</p></div><div id="g-graphs-copy-lg-g-ai0-7" class="g-graph1 g-aiAbs g-aiPointText" style="top:58.1239%;left:58.2356%;margin-top:-4.9448px;margin-left:-27.1738px;width:54.34765625px"><p class="g-pstyle0">COPILOT</p></div><div id="g-graphs-copy-lg-g-ai0-8" class="g-graph1 g-aiAbs g-aiPointText" style="top:58.1239%;left:70.3297%;margin-top:-4.9448px;margin-left:-41.0366px;width:82.0732421875px"><p class="g-pstyle0">Grok-2 Search</p></div><div id="g-graphs-copy-lg-g-ai0-9" class="g-graph1 g-aiAbs g-aiPointText" style="top:58.1239%;left:82.5267%;margin-top:-4.9448px;margin-left:-41.0366px;width:82.0732421875px"><p class="g-pstyle0">GROK-3 Search</p></div><div id="g-graphs-copy-lg-g-ai0-10" class="g-graph1 g-aiAbs g-aiPointText" style="top:58.1239%;left:94.6291%;margin-top:-4.9448px;margin-left:-24.8633px;width:49.7265625px"><p class="g-pstyle0">GEMINI</p></div><div class="confidence-axis confidence-axis-upper">Confident</div><div class="confidence-axis confidence-axis-lower">Not confident /<br>No answer</div><div id="g-graphs-copy-lg-g-ai0-12" class="g-graph1 g-aiAbs" style="top:8.1%;left:5.4606%;width:77.756%"><p>The Tow Center asked eight generative search tools to identify the source article, the publication and URL for 200 excerpts extracted from news articles by 20 publishers. Each square represents the citation behavior of a response.</p></div><div id="g-graphs-copy-lg-g-ai0-13" class="g-graph1 g-aiAbs" style="top:2.7%;left:5.4606%;width:92.4106%"><p class="g-pstyle1">Generative search tools were often confidently <span class="g-cstyle0">wrong </span>in our study</p></div></div></div>
<!-- End all2html -->`;var Us=M('<a rel="author" href="https://www.cjr.org/author/klaudia-jazwinska">Klaudia Jaźwińska</a> and <a rel="author" href="https://www.cjr.org/author/aisvarya-chandrasekar">Aisvarya Chandrasekar</a>',1),Ks=M('<figure class="image-hero-box"><img class="image-hero" width="1600" height="704" alt="Static on a broken television screen"/> <figcaption class="image-hero-caption">Image: The rack of a broken monitor or TV is the texture of a television screen, background for superimposing with the effect of grain noise, Александр Розов. Adobe Stock 1050902471</figcaption></figure>'),Ys=M('<h2 class="svelte-1n46o8q">Download our data</h2> <p><a href="https://github.com/TowCenter/genSearch-Part2">Download the study dataset and read the access instructions on GitHub</a>.</p>',1),Js=M('<h2 class="svelte-1n46o8q"> </h2>'),Vs=M("<h3> </h3>"),Xs=M("<li> </li>"),Qs=M("<ul></ul>"),Zs=M('<figure class="article-figure svelte-1n46o8q"><img loading="lazy" alt="" class="svelte-1n46o8q"/> <figcaption class="svelte-1n46o8q"> </figcaption></figure>'),$s=M("<p><em> </em></p>"),eo=M('<p class="lead-paragraph svelte-1n46o8q"> </p>'),to=M("<p><strong></strong> </p>"),no=M("<figure></figure>"),io=M('<div class="study-table svelte-1n46o8q"><iframe title="Tow Center study data table" loading="lazy" class="svelte-1n46o8q"></iframe> <p class="svelte-1n46o8q"><a>Open the study data table in Airtable</a></p></div>'),ao=M("<!> <!>",1),ro=M('<aside class="republication svelte-1n46o8q" aria-label="Republication credit"><p class="svelte-1n46o8q">This article is republished from <cite></cite>.</p> <a class="svelte-1n46o8q">Read the original article</a></aside> <!>',1),so=M("<!> <!> <!>",1),oo=M('<!> <main id="article" class="svelte-1n46o8q"><!></main> <!>',1);function lo(e,t){It(t,!1);const n="The generative search tools we tested had a common tendency to cite the wrong article",i=[{caption:"An example of Copilot declining",file:"copilot-decline.jpg",width:1486,height:1292},{caption:"An example of Gemini declining",file:"gemini-politics.jpg",width:1680,height:1146},{caption:"Despite having a partnership with the Texas Tribune, Perplexity cited an unofficial version",file:"perplexity-tribune.jpg",width:1988,height:988},{caption:"Although USA Today blocks ChatGPT’s crawler",file:"chatgpt-yahoo.jpg",width:1248,height:1108}],a="./graphics/article-figures/",r="https://airtable.com/embed/appg737s82fePQorq/shrSYddgl1MYeaxOH",s=[{after:"Overall, the chatbots often failed to retrieve the correct articles.",folder:"confidently-wrong",label:"Generative search tools were often confidently wrong in our study",html:Bs},{after:"Premium models, such as Perplexity Pro",folder:"premium-models",className:"premium-graphic",label:"Response comparison for Perplexity and Grok models",html:Ws},{after:"We expected chatbots",folder:"crawler-access",label:"Crawler access and response accuracy",html:Hs},{after:n+".",folder:"citation-links",className:"citation-graphic",label:"Types of links cited by generative search tools",html:Ls},{after:"A deal between AI companies and publishers often involves",folder:"licensing-deals",className:"licensing-graphic",label:"Accuracy for AI platforms and publishers with licensing deals",html:Ds}].map(m=>({...m,html:m.html.replace(/src="([^"/]+\.png(?:\?[^"]*)?)"/g,(f,y)=>`src="./graphics/${m.folder}/${y}"`)})),l="https://www.cjr.org/tow_center/we-compared-eight-ai-search-engines-theyre-all-bad-at-citing-news.php",c=Fs.trim().split(/\r?\n(?:[ \t]*\r?\n)+/),p=c.filter(m=>m.startsWith("## "));hn();var h=oo(),g=nt(h);Ss(g,{});var v=F(g,2),d=C(v);ks(d,{children:(m,f)=>{var y=so(),R=nt(y);Ns(R,{hed:"AI Search Has a Citation Problem",subhed:"We compared eight AI search engines. They’re all bad at citing news.",date:"March 6, 2025",datetime:"2025-03-06",byline:O=>{var K=Us();S(O,K)},hero:O=>{var K=Ks(),ye=C(K);B(()=>V(ye,"src",a+"article-hero.jpg")),S(O,K)},children:(O,K)=>{Os(O,{})}});var N=F(R,2);Ps(N,{children:(de,He)=>{var O=ro(),K=nt(O),ye=C(K),ne=F(C(ye));ne.textContent="Columbia Journalism Review";var ft=F(ye,2);V(ft,"href",l);var ut=F(K,2);Si(ut,1,()=>c,Ei,(dn,z,gn)=>{const $e=kn(()=>i.find(j=>w(z).startsWith(j.caption))),et=kn(()=>s.find(j=>w(z).startsWith(j.after)));var Rt=Qr(),be=nt(Rt);{var fn=j=>{var q=Ys(),L=nt(q);B(re=>V(L,"id",re),[()=>"section-"+(p.indexOf(w(z))+1)]),S(j,q)},ja=j=>{var q=Js(),L=ee(q,!0);B((re,We)=>{V(q,"id",re),_e(L,We)},[()=>"section-"+(p.indexOf(w(z))+1),()=>w(z).slice(3)]),S(j,q)},Sa=Gt(()=>w(z).startsWith("## ")),Ia=j=>{var q=Vs(),L=ee(q,!0);B(re=>_e(L,re),[()=>w(z).slice(4)]),S(j,q)},Ma=Gt(()=>w(z).startsWith("### ")),Ra=j=>{var q=Qs();Si(q,5,()=>w(z).split(/\r?\n/),Ei,(L,re)=>{var We=Xs(),qn=ee(We,!0);B(Gn=>_e(qn,Gn),[()=>w(re).slice(2)]),S(L,We)}),S(j,q)},qa=Gt(()=>w(z).startsWith("- ")),Ga=j=>{var q=Zs(),L=C(q),re=F(L,2),We=ee(re,!0);B(()=>{V(L,"src",a+w($e).file),V(L,"width",w($e).width),V(L,"height",w($e).height),_e(We,w(z))}),S(j,q)},Oa=j=>{var q=$s(),L=C(q),re=ee(L,!0);B(()=>_e(re,w(z))),S(j,q)},za=j=>{var q=eo(),L=ee(q,!0);B(()=>_e(L,w(z))),S(j,q)},Na=j=>{var q=ao(),L=nt(q);{var re=se=>{var Ce=to(),qt=C(Ce);qt.textContent="The generative search tools we tested had a common tendency to cite the wrong article";var On=F(qt,1,!0);B(zn=>_e(On,zn),[()=>w(z).slice(n.length)]),S(se,Ce)},We=Gt(()=>w(z).startsWith(n)),qn=se=>{Es(se,{get text(){return w(z)}})};Bn(L,se=>{w(We)?se(re):se(qn,-1)})}var Gn=F(L,2);{var Fa=se=>{var Ce=no();hs(Ce,()=>w(et).html,!0),B(()=>{us(Ce,1,gs(["findings-graphic",w(et).className]),"svelte-1n46o8q"),V(Ce,"aria-label",w(et).label)}),S(se,Ce)},Da=se=>{var Ce=io(),qt=C(Ce);V(qt,"src",r);var On=F(qt,2),zn=C(On);V(zn,"href",r),S(se,Ce)},La=Gt(()=>w(z).startsWith("When we asked whether the AI companies made any commitments"));Bn(Gn,se=>{w(et)?se(Fa):w(La)&&se(Da,1)})}S(j,q)};Bn(be,j=>{w(z)==="## Download our data"?j(fn):w(Sa)?j(ja,1):w(Ma)?j(Ia,2):w(qa)?j(Ra,3):w($e)?j(Ga,4):w(z)==="Kaylee Williams, Sarah Grevy Gotfredsen, and Dhrumil Mehta contributed to this report."?j(Oa,5):gn===0?j(za,6):j(Na,-1)})}S(dn,Rt)}),S(de,O)}});var Z=F(N,2);qs(Z,{}),S(m,y)}});var u=F(v,2);Ms(u,{}),S(e,h),Mt()}rs(lo,{target:document.getElementById("app")});
