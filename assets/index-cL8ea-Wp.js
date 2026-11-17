var Ur=Object.defineProperty;var hi=e=>{throw TypeError(e)};var jr=(e,t,n)=>t in e?Ur(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var xe=(e,t,n)=>jr(e,typeof t!="symbol"?t+"":t,n),Sa=(e,t,n)=>t.has(e)||hi("Cannot "+n);var c=(e,t,n)=>(Sa(e,t,"read from private field"),n?n.call(e):t.get(e)),O=(e,t,n)=>t.has(e)?hi("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),q=(e,t,n,a)=>(Sa(e,t,"write to private field"),a?a.call(e,n):t.set(e,n),n),S=(e,t,n)=>(Sa(e,t,"access private method"),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();const Mi=!1;var Ii=Array.isArray,Mr=Array.prototype.indexOf,Fn=Array.prototype.includes,_a=Array.from,qi=Object.defineProperty,Rn=Object.getOwnPropertyDescriptor,Ri=Object.getOwnPropertyDescriptors,Ir=Object.prototype,qr=Array.prototype,ti=Object.getPrototypeOf,gi=Object.isExtensible;const Dn=()=>{};function Rr(e){return e()}function Ga(e){for(var t=0;t<e.length;t++)e[t]()}function Oi(){var e,t,n=new Promise((a,i)=>{e=a,t=i});return{promise:n,resolve:e,reject:t}}function Or(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const n=[];for(const a of e)if(n.push(a),n.length===t)break;return n}const Pe=2,mn=4,Xn=8,Gi=1<<24,at=16,st=32,Gt=64,Na=128,ni=256,rt=512,ue=1024,ee=2048,De=4096,Se=8192,Te=16384,xn=32768,Bn=1<<25,Qt=65536,ga=1<<17,Gr=1<<18,_n=1<<19,Ni=1<<20,ut=1<<25,fa=1<<21,cn=1<<22,qt=1<<23,pn=Symbol("$state"),Li=Symbol("component"),Nr=Symbol(""),pa=Symbol("attributes"),La=Symbol("class"),Fa=Symbol("style"),En=Symbol("text"),Zn=new class extends Error{constructor(){super(...arguments);xe(this,"name","StaleReactionError");xe(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}},Lr=1,Fr=2,Fi=4,Dr=8,Br=16,Wr=1,Hr=2,Di={},fe=Symbol("uninitialized"),Bi="http://www.w3.org/1999/xhtml",Jr="http://www.w3.org/2000/svg",Kr="http://www.w3.org/1998/Math/MathML";function Yr(){console.warn("https://svelte.dev/e/derived_inert")}function Vr(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Wi(e){return e===this.v}function Hi(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Ji(e){return!Hi(e,this.v)}function Xr(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Zr(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Qr(e,t,n){throw new Error("https://svelte.dev/e/each_key_duplicate")}function $r(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function es(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ts(e){throw new Error("https://svelte.dev/e/effect_orphan")}function ns(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function as(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function is(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function rs(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function ss(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let Qn=!1,os=!1;function ls(){Qn=!0}let ae=null;function yn(e){ae=e}function tn(e,t=!1,n){ae={p:ae,i:!1,c:null,e:null,s:e,x:null,r:W,l:Qn&&!t?{s:null,u:null,$:[]}:null}}function nn(e){var t=ae,n=t.e;if(n!==null){t.e=null;for(var a of n)gr(a)}return t.i=!0,ae=t.p,ai(e)}function ai(e={}){return qi(e,Li,{value:!0}),e}function $n(){return!Qn||ae!==null&&ae.l===null}let Wt=[];function Ki(){var e=Wt;Wt=[],Ga(e)}function It(e){if(Wt.length===0&&!On){var t=Wt;queueMicrotask(()=>{t===Wt&&Ki()})}Wt.push(e)}function cs(){for(;Wt.length>0;)Ki()}const ps=-7169;function ce(e,t){e.f=e.f&ps|t}function ii(e){(e.f&rt)!==0||e.deps===null?ce(e,ue):ce(e,De)}function Yi(e,t){(e.f&ee)!==0?t.set(e,ee):(e.f&De)!==0&&t.get(e)!==ee&&t.set(e,De),ce(e,ue)}function Aa(e){var t=R,n=W;Xe(null),yt(null);try{return e()}finally{Xe(t),yt(n)}}function ds(e,t,n,a){const i=$n()?ka:va;var r=e.filter(g=>!g.settled),s=t.map(i);if(n.length===0&&r.length===0){a(s);return}var l=W,o=hs(),d=r.length===1?r[0].promise:r.length>1?Promise.all(r.map(g=>g.promise)):null;function h(g){if((l.f&Te)===0){o();try{a([...s,...g])}catch(v){ft(v,l)}ua()}}var f=Vi();if(n.length===0){d.then(()=>h([])).finally(f);return}function m(){Promise.all(n.map(g=>gs(g))).then(h).catch(g=>ft(g,l)).finally(f)}d?d.then(()=>{if((l.f&Te)!==0){f();return}o(),m(),ua()}):m()}function hs(){var e=W,t=R,n=ae,a=U;return function(r=!0){yt(e),Xe(t),yn(n),r&&(e.f&Te)===0&&(a==null||a.activate(),a==null||a.apply())}}function ua(e=!0){yt(null),Xe(null),yn(null),e&&(U==null||U.deactivate())}function Vi(){var e=W,t=e.b,n=U,a=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,n),n.increment(a,e),()=>{t==null||t.update_pending_count(-1,n),n.decrement(a,e)}}function ka(e){var t=Pe|ee;return W!==null&&(W.f|=_n),{ctx:ae,deps:null,effects:null,equals:Wi,f:t,fn:e,reactions:null,rv:0,v:fe,wv:0,parent:W,ac:null}}const Sn=Symbol("obsolete");function gs(e,t,n){let a=W;a===null&&Zr();var i=void 0,r=en(fe),s=!R,l=new Set;return Es(()=>{var g,v;var o=W,d=Oi();i=d.promise;try{Promise.resolve(e()).then(d.resolve,_=>{_!==Zn&&d.reject(_)}).finally(ua)}catch(_){d.reject(_),ua()}var h=U;if(s){if((o.f&xn)!==0)var f=Vi();if((g=a.b)!=null&&g.is_rendered())(v=h.async_deriveds.get(o))==null||v.reject(Sn);else for(const _ of l.values())_.reject(Sn);l.add(d),h.async_deriveds.set(o,d)}const m=(_,u=void 0)=>{f==null||f(),l.delete(d),u!==Sn&&(h.activate(),u?(r.f|=qt,wn(r,u)):((r.f&qt)!==0&&(r.f^=qt),wn(r,_)),h.deactivate())};d.promise.then(m,_=>m(null,_||"unknown"))}),Ps(()=>{for(const o of l)o.reject(Sn)}),new Promise(o=>{function d(h){function f(){h===i?o(r):d(i)}h.then(f,f)}d(i)})}function Z(e){const t=ka(e);return br(t),t}function va(e){const t=ka(e);return t.equals=Ji,t}function fs(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)Ie(t[n])}}function ri(e){var t,n=W,a=e.parent;if(!Nt&&a!==null&&e.v!==fe&&(a.f&(Te|Se))!==0)return Yr(),e.v;yt(a);try{fs(e),t=kr(e)}finally{yt(n)}return t}function Xi(e){var t=ri(e);if(!e.equals(t)&&(e.wv=_r(),(!(U!=null&&U.is_fork)||e.deps===null)&&(U!==null?(U.capture(e,t,!0),Rt==null||Rt.capture(e,t,!0)):e.v=t,e.deps===null))){ce(e,ue);return}Nt||(be!==null?(li()||U!=null&&U.is_fork)&&be.set(e,t):ii(e))}function us(e){var t;if(e.effects!==null)for(const n of e.effects)(n.teardown||n.ac)&&((t=n.teardown)==null||t.call(n),n.ac!==null&&Aa(()=>{n.ac.abort(Zn),n.ac=null}),n.fn!==null&&(n.teardown=Dn),Wn(n,0),pi(n))}function Zi(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&bn(t)}let Ua=null,sn=null,U=null,Rt=null,be=null,Da=null,On=!1,ja=!1,Gn=null,da=null;var fi=0;let vs=1;var dn,hn,gn,kt,fn,Tt,Jn,pt,dt,un,Jt,G,Ba,Qi,Wa,Un,Ha,$i,er,tr,on,ms,jn;const wa=class wa{constructor(){O(this,G);xe(this,"id",vs++);xe(this,"started",!1);xe(this,"linked",!0);xe(this,"prev",null);xe(this,"next",null);xe(this,"async_deriveds",new Map);xe(this,"current",new Map);xe(this,"previous",new Map);O(this,dn,new Set);O(this,hn,new Set);O(this,gn,0);O(this,kt,new Map);O(this,fn,null);O(this,Tt,[]);O(this,Jn,[]);O(this,pt,new Map);O(this,dt,new Map);O(this,un,new Set);xe(this,"is_fork",!1);O(this,Jt,!1);sn===null?Ua=sn=this:(sn.next=this,this.prev=sn),sn=this}skip_effect(t){c(this,dt).has(t)||c(this,dt).set(t,{d:[],m:[]}),c(this,un).delete(t)}unskip_effect(t,n=a=>this.schedule(a)){var a=c(this,dt).get(t);if(a){c(this,dt).delete(t);for(var i of a.d)ce(i,ee),n(i);for(i of a.m)ce(i,De),n(i)}c(this,un).add(t)}capture(t,n,a=!1){t.v!==fe&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&qt)===0&&(this.current.set(t,[n,a]),be==null||be.set(t,n)),this.is_fork||(t.v=n)}activate(){U=this}deactivate(){U=null,be=null}flush(){try{ja=!0,U=this,S(this,G,Un).call(this)}finally{fi=0,Da=null,Gn=null,da=null,ja=!1,U=null,be=null,vt.clear()}}discard(){var t;for(const n of c(this,hn))n(this);c(this,hn).clear();for(const n of this.async_deriveds.values())n.reject(Sn);S(this,G,jn).call(this),(t=c(this,fn))==null||t.resolve()}register_created_effect(t){c(this,Jn).push(t)}increment(t,n){if(q(this,gn,c(this,gn)+1),t){let a=c(this,kt).get(n)??0;c(this,kt).set(n,a+1)}}decrement(t,n){if(q(this,gn,c(this,gn)-1),t){let a=c(this,kt).get(n)??0;a===1?c(this,kt).delete(n):c(this,kt).set(n,a-1)}c(this,Jt)||(q(this,Jt,!0),It(()=>{q(this,Jt,!1),this.linked&&this.flush()}))}transfer_reactions(t){for(const[n,a]of t)this.add_dirty_reaction(n,a);t.clear()}add_dirty_reaction(t,n){(n===ee||c(this,pt).get(t)!==ee)&&c(this,pt).set(t,n)}oncommit(t){c(this,dn).add(t)}ondiscard(t){c(this,hn).add(t)}settled(){return(c(this,fn)??q(this,fn,Oi())).promise}static ensure(){if(U===null){const t=U=new wa;!ja&&!On&&It(()=>{t.started||t.flush()})}return U}apply(){{be=null;return}}schedule(t){var n;if(Da=t,(n=t.b)!=null&&n.is_pending&&(t.f&(mn|Xn|Gi))!==0&&(t.f&xn)===0){t.b.defer_effect(t);return}c(this,Tt).push(t)}};dn=new WeakMap,hn=new WeakMap,gn=new WeakMap,kt=new WeakMap,fn=new WeakMap,Tt=new WeakMap,Jn=new WeakMap,pt=new WeakMap,dt=new WeakMap,un=new WeakMap,Jt=new WeakMap,G=new WeakSet,Ba=function(){if(this.is_fork)return!0;for(const t of c(this,kt).keys())if(!S(this,G,Qi).call(this,t))return!0;return!1},Qi=function(t){for(var n=t;n!==null;n=n.parent)if(c(this,dt).has(n))return!0;return!1},Wa=function(){var t=[];for(const r of c(this,Tt))if(!((r.f&Te)!==0||(r.f&(ee|De))===0)){for(var n=r,a=!1;n.parent!==null;){n=n.parent;var i=n.f;if((i&(Gt|st))!==0){if((i&ue)===0){a=!0;break}n.f^=ue}}a||t.push(n)}return q(this,Tt,[]),t},Un=function(){var l,o,d,h;this.started=!0;for(const[f,m]of c(this,pt))ce(f,m),this.schedule(f);this.apply();for(var t=Gn=[],n=[],a=da=[];c(this,Tt).length>0;){fi++>1e3&&(S(this,G,jn).call(this),ws());for(const f of S(this,G,Wa).call(this))try{S(this,G,Ha).call(this,f,t,n)}catch(m){throw ir(f),S(this,G,Ba).call(this)||this.discard(),m}}if(U=null,a.length>0){var i=wa.ensure();for(const f of a)i.schedule(f)}if(Gn=null,da=null,S(this,G,Ba).call(this)){S(this,G,on).call(this,n),S(this,G,on).call(this,t);for(const[f,m]of c(this,dt))ar(f,m);a.length>0&&S(l=U,G,Un).call(l);return}const r=S(this,G,$i).call(this);if(r){S(this,G,on).call(this,n),S(this,G,on).call(this,t),S(o=r,G,tr).call(o,this);return}c(this,pt).clear();for(const f of c(this,dn))f(this);c(this,dn).clear(),Rt=this,ui(n),ui(t),Rt=null,(d=c(this,fn))==null||d.resolve();var s=U;c(this,gn)===0&&(c(this,Tt).length===0||s!==null)&&S(this,G,jn).call(this),s!==null&&(vt.clear(),S(h=s,G,Un).call(h))},Ha=function(t,n,a){t.f^=ue;for(var i=t.first;i!==null;){var r=i.f,s=(r&(st|Gt))!==0,l=s&&(r&ue)!==0,o=l||(r&Se)!==0||c(this,dt).has(i);if(!o&&i.fn!==null){s?i.f^=ue:(r&mn)!==0?n.push(i):ta(i)&&((r&at)!==0&&this.add_dirty_reaction(i,De),bn(i));var d=i.first;if(d!==null){i=d;continue}}for(;i!==null;){var h=i.next;if(h!==null){i=h;break}i=i.parent}}},$i=function(){for(var t=this.prev;t!==null;t=t.prev)if(!t.is_fork&&S(this,G,er).call(this,t))return t;return null},er=function(t){for(const[n,[,a]]of this.current)if(!a&&t.current.has(n))return!0;return!1},tr=function(t){var a;for(const[i,r]of t.current)!this.previous.has(i)&&t.previous.has(i)&&this.previous.set(i,t.previous.get(i)),this.current.set(i,r);for(const[i,r]of t.async_deriveds){const s=this.async_deriveds.get(i);s&&r.promise.then(s.resolve).catch(s.reject)}t.async_deriveds.clear(),this.transfer_reactions(c(t,pt));const n=i=>{var r=i.reactions;if(r!==null&&!((i.f&Pe)!==0&&(i.f&(ee|De))===0))for(const o of r){var s=o.f;if((s&Pe)!==0)n(o);else{var l=o;s&(cn|at)&&!this.async_deriveds.has(l)&&(c(this,pt).delete(l),ce(l,ee),this.schedule(l))}}};for(const i of this.current.keys())n(i);this.oncommit(()=>t.discard()),S(a=t,G,jn).call(a),U=this,S(this,G,Un).call(this)},on=function(t){for(var n=0;n<t.length;n+=1)Yi(t[n],c(this,pt))},ms=function(){var f,m;for(let g=Ua;g!==null;g=g.next){var t=g.id<this.id,n=[];for(const[v,[_,u]]of this.current){if(g.current.has(v)){var a=g.current.get(v)[0];if(t&&_!==a)g.current.set(v,[_,u]);else continue}n.push(v)}if(t)for(const[v,_]of this.async_deriveds){const u=g.async_deriveds.get(v);u&&_.promise.then(u.resolve).catch(u.reject)}var i=[...g.current.keys()].filter(v=>!g.current.get(v)[1]);if(!(!g.started||i.length===0)){var r=i.filter(v=>!this.current.has(v));if(r.length===0)t&&g.discard();else if(n.length>0){if(t)for(const v of c(this,un))g.unskip_effect(v,_=>{var u;(_.f&(at|cn))!==0?g.schedule(_):S(u=g,G,on).call(u,[_])});g.activate();var s=new Set,l=new Map;for(var o of n)nr(o,r,s,l);l=new Map;var d=[...g.current].filter(([v,_])=>{const u=this.current.get(v);return u?u[0]!==_[0]||u[1]!==_[1]:!0}).map(([v])=>v);if(d.length>0)for(const v of c(this,Jn))(v.f&(Te|Se|ga))===0&&si(v,d,l)&&((v.f&(cn|at))!==0?(ce(v,ee),g.schedule(v)):g.add_dirty_reaction(v,ee));if(c(g,Tt).length>0&&!c(g,Jt)){g.apply();for(var h of S(f=g,G,Wa).call(f))S(m=g,G,Ha).call(m,h,[],[])}g.deactivate()}}}},jn=function(){if(this.linked){var t=this.prev,n=this.next;t===null?Ua=n:t.next=n,n===null?sn=t:n.prev=t,this.linked=!1}};let $t=wa;function ys(e){var t=On,n=Rt;Rt=null,On=!0;try{for(var a;;){if(cs(),U===null)return a;U.flush()}}finally{On=t,Rt=n}}function ws(){try{ns()}catch(e){ft(e,Da)}}let et=null;function ui(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var a=e[n++];if((a.f&(Te|Se))===0&&ta(a)&&(et=new Set,bn(a),a.deps===null&&a.first===null&&a.nodes===null&&a.teardown===null&&a.ac===null&&mr(a),(et==null?void 0:et.size)>0)){vt.clear();for(const i of et){if((i.f&(Te|Se))!==0)continue;const r=[i];let s=i.parent;for(;s!==null;)et.has(s)&&(et.delete(s),r.push(s)),s=s.parent;for(let l=r.length-1;l>=0;l--){const o=r[l];(o.f&(Te|Se))===0&&bn(o)}}et.clear()}}et=null}}function nr(e,t,n,a){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(const i of e.reactions){const r=i.f;(r&Pe)!==0?nr(i,t,n,a):(r&(cn|at))!==0&&(r&ee)===0&&si(i,t,a)&&(ce(i,ee),oi(i))}}function si(e,t,n){const a=n.get(e);if(a!==void 0)return a;if(e.deps!==null)for(const i of e.deps){if(Fn.call(t,i))return!0;if((i.f&Pe)!==0&&si(i,t,n))return n.set(i,!0),!0}return n.set(e,!1),!1}function oi(e){U.schedule(e)}function ar(e,t){if(!((e.f&st)!==0&&(e.f&ue)!==0)){(e.f&ee)!==0?t.d.push(e):(e.f&De)!==0&&t.m.push(e),ce(e,ue);for(var n=e.first;n!==null;)ar(n,t),n=n.next}}function ir(e){ce(e,ue);for(var t=e.first;t!==null;)ir(t),t=t.next}let ma=new Set;const vt=new Map;let rr=!1;function en(e,t){var n={f:0,v:e,reactions:null,equals:Wi,rv:0,wv:0};return n}function tt(e,t){const n=en(e);return br(n),n}function bs(e,t=!1,n=!0){var i;const a=en(e);return t||(a.equals=Ji),Qn&&n&&ae!==null&&ae.l!==null&&((i=ae.l).s??(i.s=[])).push(a),a}function je(e,t,n=!1){R!==null&&(!it||(R.f&ga)!==0)&&$n()&&(R.f&(Pe|at|cn|ga))!==0&&(mt===null||!mt.has(e))&&rs();let a=n?Mn(t):t;return wn(e,a,da)}var Bt=null,Ja=0;function wn(e,t,n=null){if(!e.equals(t)){Nt?vt.set(e,t):vt.has(e)||vt.set(e,e.v);var a=$t.ensure();if(a.capture(e,t),(e.f&Pe)!==0){const i=e;(e.f&ee)!==0&&ri(i),be===null&&ii(i)}e.wv=_r(),Bt=null,Ja=0,sr(e,ee,n),Bt=null,$n()&&W!==null&&(W.f&ue)!==0&&(W.f&(st|Gt))===0&&(Je===null?Us([e]):Je.push(e)),!a.is_fork&&ma.size>0&&!rr&&xs()}return t}function xs(){rr=!1;for(const e of ma){(e.f&ue)!==0&&ce(e,De);let t;try{t=ta(e)}catch{t=!0}t&&bn(e)}ma.clear()}function Nn(e){je(e,e.v+1)}function sr(e,t,n){var a=e.reactions;if(a!==null){var i=$n(),r=a.length;if(Ja+=r,Ja>1e5&&Bt===null&&(Bt=new Set),Bt!==null){if(Bt.has(e))return;Bt.add(e)}for(var s=0;s<r;s++){var l=a[s],o=l.f;if(!(!i&&l===W)){var d=(o&ee)===0;if(d&&ce(l,t),(o&ga)!==0)ma.add(l);else if((o&Pe)!==0){var h=l;be==null||be.delete(h),sr(h,De,n)}else if(d){var f=l;(o&at)!==0&&et!==null&&et.add(f),n!==null?n.push(f):oi(f)}}}}}function Mn(e){if(typeof e!="object"||e===null||pn in e||Li in e)return e;const t=ti(e);if(t!==Ir&&t!==qr)return e;var n=new Map,a=Ii(e),i=tt(0),r=Zt,s=l=>{if(Zt===r)return l();var o=R,d=Zt;Xe(null),yi(r);var h=l();return Xe(o),yi(d),h};return a&&n.set("length",tt(e.length)),new Proxy(e,{defineProperty(l,o,d){(!("value"in d)||d.configurable===!1||d.enumerable===!1||d.writable===!1)&&as();var h=n.get(o);return h===void 0?s(()=>{var f=tt(d.value);return n.set(o,f),f}):je(h,d.value,!0),!0},deleteProperty(l,o){var d=n.get(o);if(d===void 0){if(o in l){const h=s(()=>tt(fe));n.set(o,h),Nn(i)}}else je(d,fe),Nn(i);return!0},get(l,o,d){var g;if(o===pn)return e;var h=n.get(o),f=o in l;if(h===void 0&&(!f||(g=Rn(l,o))!=null&&g.writable)&&(h=s(()=>{var v=Mn(f?l[o]:fe),_=tt(v);return _}),n.set(o,h)),h!==void 0){var m=p(h);return m===fe?void 0:m}return Reflect.get(l,o,d)},getOwnPropertyDescriptor(l,o){var m;(m=this.has)==null||m.call(this,l,o);var d=Reflect.getOwnPropertyDescriptor(l,o),h=n.get(o);if(h!==void 0){var f=p(h);if(f===fe)return;if(d&&"value"in d)d.value=f;else return{enumerable:!0,configurable:!0,value:f,writable:!0}}return d},has(l,o){var m;if(o===pn)return!0;var d=n.get(o),h=d!==void 0&&d.v!==fe||Reflect.has(l,o);if(d!==void 0||(W!==null||R!==null)&&(!h||(m=Rn(l,o))!=null&&m.writable)){d===void 0&&(d=s(()=>{var g=h?Mn(l[o]):fe,v=tt(g);return v}),n.set(o,d));var f=p(d);if(f===fe)return!1}return h},set(l,o,d,h){var ie;var f=n.get(o),m=o in l;if(a&&o==="length")for(var g=d;g<f.v;g+=1){var v=n.get(g+"");v!==void 0?je(v,fe):g in l&&(v=s(()=>tt(fe)),n.set(g+"",v))}if(f===void 0)(!m||(ie=Rn(l,o))!=null&&ie.writable)&&(f=s(()=>tt(void 0)),je(f,Mn(d)),n.set(o,f));else{m=f.v!==fe;var _=s(()=>Mn(d));je(f,_)}var u=Reflect.getOwnPropertyDescriptor(l,o);if(u!=null&&u.set&&u.set.call(h,d),!m){if(a&&typeof o=="string"){var z=n.get("length"),J=Number(o);Number.isInteger(J)&&J>=z.v&&je(z,J+1)}Nn(i)}return!0},ownKeys(l){p(i);var o=Reflect.ownKeys(l).filter(f=>{var m=n.get(f);return m===void 0||m.v!==fe});for(var[d,h]of n)h.v!==fe&&!(d in l)&&o.push(d);return o},setPrototypeOf(){is()}})}var vi,or,lr,cr;function _s(){if(vi===void 0){vi=window,or=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;lr=Rn(t,"firstChild").get,cr=Rn(t,"nextSibling").get,gi(e)&&(e[La]=void 0,e[pa]=null,e[Fa]=void 0,e.__e=void 0),gi(n)&&(n[En]=void 0)}}function Ot(e=""){return document.createTextNode(e)}function Ct(e){return lr.call(e)}function ea(e){return cr.call(e)}function b(e,t){return Ct(e)}function we(e,t=!1){{var n=Ct(e);return n instanceof Comment&&n.data===""?ea(n):n}}function Q(e,t=!1){return Ct(e)}function E(e,t=1,n=!1){let a=e;for(;t--;)a=ea(a);return a}function As(e){e.textContent=""}function pr(){return!1}function dr(e,t,n){return t==null||t===Bi?n?document.createElement(e,{is:n}):document.createElement(e):n?document.createElementNS(t,e,{is:n}):document.createElementNS(t,e)}function ks(e){var t=W;if(t===null)return R.f|=qt,e;if((t.f&xn)===0&&(t.f&mn)===0)throw e;ft(e,t)}function ft(e,t){if(e===Di)throw e;if(!(t!==null&&(t.f&Te)!==0)){for(;t!==null;){if((t.f&Na)!==0&&(t.f&(Te|Bn))===0){if((t.f&xn)===0)throw e;try{t.b.error(e);return}catch(n){e=n}}t=t.parent}throw e}}function hr(e){W===null&&(R===null&&ts(),es()),Nt&&$r()}function Ts(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function wt(e,t){var n=W;n!==null&&(n.f&Se)!==0&&(e|=Se);var a={ctx:ae,deps:null,nodes:null,f:e|ee|rt,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};U==null||U.register_created_effect(a);var i=a;if((e&mn)!==0)Gn!==null?Gn.push(a):$t.ensure().schedule(a);else if(t!==null){try{bn(a)}catch(s){throw Ie(a),s}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&(i.f&_n)===0&&(i=i.first,(e&at)!==0&&(e&Qt)!==0&&i!==null&&(i.f|=Qt))}if(i!==null&&(i.parent=n,n!==null&&Ts(i,n),R!==null&&(R.f&Pe)!==0&&(e&Gt)===0)){var r=R;(r.effects??(r.effects=[])).push(i)}return a}function li(){return R!==null&&!it}function Ps(e){const t=wt(Xn,null);return ce(t,ue),t.teardown=e,t}function Ka(e){hr();var t=W.f,n=!R&&(t&st)!==0&&ae!==null&&!ae.i;if(n){var a=ae;(a.e??(a.e=[])).push(e)}else return gr(e)}function gr(e){return wt(mn|Ni,e)}function Cs(e){return hr(),wt(Xn|Ni,e)}function zs(e){$t.ensure();const t=wt(Gt|_n,e);return(n={})=>new Promise(a=>{n.outro?Xt(t,()=>{Ie(t),a(void 0)}):(Ie(t),a(void 0))})}function fr(e){return wt(mn,e)}function Es(e){return wt(cn|_n,e)}function ci(e,t=0){return wt(Xn|t,e)}function F(e,t=[],n=[],a=[]){ds(a,t,n,i=>{wt(Xn,()=>{e(...i.map(p))})})}function Ta(e,t=0){var n=wt(at|t,e);return n}function Ve(e){return wt(st|_n,e)}function ur(e){var t=e.teardown;if(t!==null){const n=Nt,a=R;mi(!0),Xe(null);try{t.call(null)}catch(i){ft(i,e.parent)}finally{mi(n),Xe(a)}}}function pi(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const i=n.ac;i!==null&&Aa(()=>{i.abort(Zn)});var a=n.next;(n.f&Gt)!==0?n.parent=null:Ie(n,t),n=a}}function Ss(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&st)===0&&Ie(t),t=n}}function Ie(e,t=!0){var n=!1;(t||(e.f&Gr)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(vr(e.nodes.start,e.nodes.end),n=!0),e.f|=Bn,pi(e,t&&!n),Wn(e,0);var a=e.nodes&&e.nodes.t;if(a!==null)for(const r of a)r.stop();ur(e),e.f^=Bn,e.f|=Te;var i=e.parent;i!==null&&i.first!==null&&mr(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function vr(e,t){for(;e!==null;){var n=e===t?null:ea(e);e.remove(),e=n}}function mr(e){var t=e.parent,n=e.prev,a=e.next;n!==null&&(n.next=a),a!==null&&(a.prev=n),t!==null&&(t.first===e&&(t.first=a),t.last===e&&(t.last=n))}function Xt(e,t,n=!0){var a=[];e.f|=ni,yr(e,a,!0);var i=()=>{n&&Ie(e),t&&t()},r=a.length;if(r>0){var s=()=>--r||i();for(var l of a)l.out(s)}else i()}function yr(e,t,n){if((e.f&Se)===0){e.f^=Se;var a=e.nodes&&e.nodes.t;if(a!==null)for(const l of a)(l.is_global||n)&&t.push(l);for(var i=e.first;i!==null;){var r=i.next;if((i.f&Gt)===0){var s=(i.f&Qt)!==0||(i.f&st)!==0&&(e.f&at)!==0;yr(i,t,s?n:!1)}i=r}}}function ya(e){e.f&=~ni,wr(e,!0)}function wr(e,t){if((e.f&ni)===0&&(e.f&Se)!==0){e.f^=Se,(e.f&ue)===0&&(ce(e,ee),$t.ensure().schedule(e));for(var n=e.first;n!==null;){var a=n.next,i=(n.f&Qt)!==0||(n.f&st)!==0;wr(n,i?t:!1),n=a}var r=e.nodes&&e.nodes.t;if(r!==null)for(const s of r)(s.is_global||t)&&s.in()}}function di(e,t){if(e.nodes)for(var n=e.nodes.start,a=e.nodes.end;n!==null;){var i=n===a?null:ea(n);t.append(n),n=i}}let Nt=!1;function mi(e){Nt=e}let R=null,it=!1;function Xe(e){R=e}let W=null;function yt(e){W=e}let mt=null;function br(e){R!==null&&((R.f&fa)!==0||(R.f&Pe)!==0)&&(mt??(mt=new Set)).add(e)}let Me=null,Fe=0,Je=null;function Us(e){Je=e}let xr=1,Ht=0,Zt=Ht;function yi(e){Zt=e}function _r(){return++xr}function ta(e){var t=e.f;if((t&ee)!==0)return!0;if((t&De)!==0){for(var n=e.deps,a=n.length,i=0;i<a;i++){var r=n[i];if(ta(r)&&Xi(r),r.wv>e.wv)return!0}(t&rt)!==0&&be===null&&ce(e,ue)}return!1}function Ar(e,t,n=!0){var a=e.reactions;if(a!==null&&!(mt!==null&&mt.has(e)))for(var i=0;i<a.length;i++){var r=a[i];(r.f&Pe)!==0?Ar(r,t,!1):t===r&&(n?ce(r,ee):(r.f&ue)!==0&&ce(r,De),oi(r))}}function kr(e){var t=Me,n=Fe,a=Je,i=R,r=mt,s=ae,l=it,o=Zt,d=e.f;Me=null,Fe=0,Je=null,R=(d&(st|Gt))===0?e:null,mt=null,yn(e.ctx),it=!1,Zt=++Ht,e.ac!==null&&(Aa(()=>{e.ac.abort(Zn)}),e.ac=null);try{e.f|=fa;var h=e.fn,f=h();e.f|=xn;var m=wi(e);if($n()&&Je!==null&&!it&&m!==null&&(e.f&(Pe|De|ee))===0)for(var g=0;g<Je.length;g++)Ar(Je[g],e);if(i!==null&&i!==e){if(Ht++,i.deps!==null)for(let v=0;v<n;v+=1)i.deps[v].rv=Ht;if(t!==null)for(const v of t)v.rv=Ht;Je!==null&&(a===null?a=Je:a.push(...Je))}return(e.f&qt)!==0&&(e.f^=qt),f}catch(v){return wi(e),ks(v)}finally{e.f^=fa,Me=t,Fe=n,Je=a,R=i,mt=r,yn(s),it=l,Zt=o}}function wi(e){var i;var t=e.deps,n=U==null?void 0:U.is_fork;if(Me!==null){var a;if(n||Wn(e,Fe),t!==null&&Fe>0)for(t.length=Fe+Me.length,a=0;a<Me.length;a++)t[Fe+a]=Me[a];else e.deps=t=Me;if(li()&&(e.f&rt)!==0)for(a=Fe;a<t.length;a++)((i=t[a]).reactions??(i.reactions=[])).push(e)}else!n&&t!==null&&Fe<t.length&&(Wn(e,Fe),t.length=Fe);return t}function js(e,t){let n=t.reactions;if(n!==null){var a=Mr.call(n,e);if(a!==-1){var i=n.length-1;i===0?n=t.reactions=null:(n[a]=n[i],n.pop())}}if(n===null&&(t.f&Pe)!==0&&(Me===null||!Fn.call(Me,t))){var r=t;(r.f&rt)!==0&&(r.f^=rt),r.v!==fe&&ii(r),r.ac!==null&&Aa(()=>{r.ac.abort(Zn),r.ac=null,ce(r,ee)}),us(r),Wn(r,0)}}function Wn(e,t){var n=e.deps;if(n!==null)for(var a=t;a<n.length;a++)js(e,n[a])}function bn(e){var t=e.f;if((t&Te)===0){ce(e,ue);var n=W;W=e;try{(t&(at|Gi))!==0?Ss(e):pi(e),ur(e);var a=kr(e);e.teardown=typeof a=="function"?a:null,e.wv=xr;var i;Mi&&os&&(e.f&ee)!==0&&e.deps}finally{W=n}}}async function Ms(){await Promise.resolve(),ys()}function p(e){var t=e.f,n=(t&Pe)!==0;if(R!==null&&!it){var a=W!==null&&(W.f&Te)!==0;if(!a&&(mt===null||!mt.has(e))){var i=R.deps;if((R.f&fa)!==0)e.rv<Ht&&(e.rv=Ht,Me===null&&i!==null&&i[Fe]===e?Fe++:Me===null?Me=[e]:Me.push(e));else{R.deps??(R.deps=[]),Fn.call(R.deps,e)||R.deps.push(e);var r=e.reactions;r===null?e.reactions=[R]:Fn.call(r,R)||r.push(R)}}}if(Nt&&vt.has(e))return vt.get(e);if(n){var s=e;if(Nt){var l=s.v;return((s.f&ue)===0&&s.reactions!==null||Pr(s))&&(l=ri(s)),vt.set(s,l),l}var o=(s.f&rt)===0&&!it&&R!==null&&(R.f&rt)!==0,d=(s.f&xn)===0;ta(s)&&(o&&(s.f|=rt),Xi(s)),o&&!d&&(Zi(s),Tr(s))}if(be!=null&&be.has(e))return be.get(e);if((e.f&qt)!==0)throw e.v;return e.v}function Tr(e){if(e.f|=rt,e.deps!==null)for(const n of e.deps){var t=n.reactions;t===null?n.reactions=[e]:Fn.call(t,e)||t.push(e),(n.f&Pe)!==0&&(n.f&rt)===0&&(Zi(n),Tr(n))}}function Pr(e){if(e.v===fe)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(vt.has(t)||(t.f&Pe)!==0&&Pr(t))return!0;return!1}function na(e){var t=it;try{return it=!0,e()}finally{it=t}}function Cr(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(pn in e)Ya(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&pn in n&&Ya(n)}}}function Ya(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let a in e)try{Ya(e[a],t)}catch{}const n=ti(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const a=Ri(n);for(let i in a){const r=a[i].get;if(r)try{r.call(e)}catch{}}}}}const Is=["touchstart","touchmove"];function qs(e){return Is.includes(e)}const oa=Symbol("events"),Rs=new Set,bi=new Set;let Ma=null,Ia=!1;function xi(e){var _,u;var t=this,n=t.ownerDocument,a=e.type,i=((_=e.composedPath)==null?void 0:_.call(e))||[],r=i[0]||e.target;Ma=e,Ia||(Ia=!0,setTimeout(()=>{Ia=!1,Ma=null}));var s=0,l=Ma===e&&e[oa];if(l){var o=i.indexOf(l);if(o!==-1&&(t===document||t===window)){e[oa]=t;return}var d=i.indexOf(t);if(d===-1)return;o<=d&&(s=o)}if(r=i[s]||e.target,r!==t){qi(e,"currentTarget",{configurable:!0,get(){return r||n}});var h=R,f=W;Xe(null),yt(null);try{for(var m,g=[];r!==null&&r!==t;){try{var v=(u=r[oa])==null?void 0:u[a];v!=null&&(!r.disabled||e.target===r)&&v.call(r,e)}catch(z){m?g.push(z):m=z}if(e.cancelBubble)break;s++,r=s<i.length?i[s]:null}if(m){for(let z of g)queueMicrotask(()=>{throw z});throw m}}finally{e[oa]=t,delete e.currentTarget,Xe(h),yt(f)}}}var Ui;const qa=((Ui=globalThis==null?void 0:globalThis.window)==null?void 0:Ui.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function Os(e){return(qa==null?void 0:qa.createHTML(e))??e}function Gs(e){var t=dr("template");return t.innerHTML=Os(e.replaceAll("<!>","<!---->")),t.content}function Hn(e,t){var n=W;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function x(e,t){var n=(t&Wr)!==0,a=(t&Hr)!==0,i,r=!e.startsWith("<!>");return()=>{i===void 0&&(i=Gs(r?e:"<!>"+e),n||(i=Ct(i)));var s=a||or?document.importNode(i,!0):i.cloneNode(!0);if(n){var l=Ct(s),o=s.lastChild;Hn(l,o)}else Hn(s,s);return s}}function At(){var e=document.createDocumentFragment(),t=document.createComment(""),n=Ot();return e.append(t,n),Hn(t,n),e}function w(e,t){e!==null&&e.before(t)}function Ns(e){let t=0,n=en(0),a;return()=>{li()&&(p(n),ci(()=>(t===0&&(a=na(()=>e(()=>Nn(n)))),t+=1,()=>{It(()=>{t-=1,t===0&&(a==null||a(),a=void 0,Nn(n))})})))}}var Ls=Qt|_n;function Fs(e,t,n,a){new Ds(e,t,n,a)}var Ke,ei,Ye,Kt,ke,Ge,Ee,Ne,ht,Yt,Mt,vn,Kn,Pt,ba,B,Bs,Ws,Va,jt,Hs,Xa,In,ha,Za,Qa;class Ds{constructor(t,n,a,i){O(this,B);xe(this,"parent");xe(this,"is_pending",!1);xe(this,"transform_error");O(this,Ke);O(this,ei,null);O(this,Ye);O(this,Kt);O(this,ke);O(this,Ge,null);O(this,Ee,null);O(this,Ne,null);O(this,ht,null);O(this,Yt,0);O(this,Mt,0);O(this,vn,!1);O(this,Kn,new Map);O(this,Pt,null);O(this,ba,Ns(()=>(q(this,Pt,en(c(this,Yt))),()=>{q(this,Pt,null)})));var r;q(this,Ke,t),q(this,Ye,n),q(this,Kt,s=>{var l=W;l.b=this,l.f|=Na,a(s)}),this.parent=W.b,this.transform_error=i??((r=this.parent)==null?void 0:r.transform_error)??(s=>s),q(this,ke,Ta(()=>{S(this,B,Xa).call(this)},Ls))}defer_effect(t){Yi(t,c(this,Kn))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!c(this,Ye).pending}update_pending_count(t,n){S(this,B,Za).call(this,t,n),q(this,Yt,c(this,Yt)+t),!(!c(this,Pt)||c(this,vn))&&(q(this,vn,!0),It(()=>{q(this,vn,!1),c(this,Pt)&&wn(c(this,Pt),c(this,Yt))}))}get_effect_pending(){return c(this,ba).call(this),p(c(this,Pt))}error(t){if(t===Di||!c(this,Ye).onerror&&!c(this,Ye).failed)throw t;U!=null&&U.is_fork?(c(this,Ge)&&U.skip_effect(c(this,Ge)),c(this,Ee)&&U.skip_effect(c(this,Ee)),c(this,Ne)&&U.skip_effect(c(this,Ne)),U.oncommit(()=>{S(this,B,jt).call(this)||S(this,B,Qa).call(this,t)})):S(this,B,Qa).call(this,t)}}Ke=new WeakMap,ei=new WeakMap,Ye=new WeakMap,Kt=new WeakMap,ke=new WeakMap,Ge=new WeakMap,Ee=new WeakMap,Ne=new WeakMap,ht=new WeakMap,Yt=new WeakMap,Mt=new WeakMap,vn=new WeakMap,Kn=new WeakMap,Pt=new WeakMap,ba=new WeakMap,B=new WeakSet,Bs=function(){try{q(this,Ge,Ve(()=>c(this,Kt).call(this,c(this,Ke))))}catch(t){this.error(t)}},Ws=function(t){const n=c(this,Ye).failed,{reset:a,invoke_onerror:i}=S(this,B,Va).call(this,t);It(i),n&&q(this,Ne,Ve(()=>{n(c(this,Ke),()=>t,()=>a)}))},Va=function(t){var n=!1,a=!1;const i=()=>{if(!S(this,B,jt).call(this)){if(n){Vr();return}n=!0,a&&ss(),c(this,Ne)!==null&&Xt(c(this,Ne),()=>{q(this,Ne,null)}),S(this,B,ha).call(this,()=>{S(this,B,Xa).call(this)})}};return{reset:i,invoke_onerror:()=>{var s,l;if(!S(this,B,jt).call(this))try{a=!0,(l=(s=c(this,Ye)).onerror)==null||l.call(s,t,i),a=!1}catch(o){ft(o,c(this,ke)&&c(this,ke).parent)}}}},jt=function(){return(c(this,ke).f&(Te|Bn))!==0},Hs=function(){const t=c(this,Ye).pending;t&&(this.is_pending=!0,q(this,Ee,Ve(()=>t(c(this,Ke)))),It(()=>{if(!S(this,B,jt).call(this)){var n=q(this,ht,document.createDocumentFragment()),a=Ot(),i=!1;if(n.append(a),q(this,Ge,S(this,B,ha).call(this,()=>{try{return Ve(()=>c(this,Kt).call(this,a))}catch(r){try{this.error(r),i=!0}catch(s){ft(s,c(this,ke).parent)}return null}})),c(this,Ge)===null){q(this,ht,null),i&&S(this,B,In).call(this,U);return}c(this,Mt)===0&&(c(this,Ke).before(n),q(this,ht,null),Xt(c(this,Ee),()=>{q(this,Ee,null)}),S(this,B,In).call(this,U))}}))},Xa=function(){try{if(this.is_pending=this.has_pending_snippet(),q(this,Mt,0),q(this,Yt,0),q(this,Ge,Ve(()=>{c(this,Kt).call(this,c(this,Ke))})),c(this,Mt)>0){var t=q(this,ht,document.createDocumentFragment());di(c(this,Ge),t);const n=c(this,Ye).pending;q(this,Ee,Ve(()=>n(c(this,Ke))))}else S(this,B,In).call(this,U)}catch(n){this.error(n)}},In=function(t){this.is_pending=!1,t.transfer_reactions(c(this,Kn))},ha=function(t){var n=W,a=R,i=ae;yt(c(this,ke)),Xe(c(this,ke)),yn(c(this,ke).ctx);try{return $t.ensure(),t()}finally{yt(n),Xe(a),yn(i)}},Za=function(t,n){var a;if(!this.has_pending_snippet()){this.parent&&S(a=this.parent,B,Za).call(a,t,n);return}q(this,Mt,c(this,Mt)+t),c(this,Mt)===0&&(S(this,B,In).call(this,n),c(this,Ee)&&Xt(c(this,Ee),()=>{q(this,Ee,null)}),c(this,ht)&&(c(this,Ke).before(c(this,ht)),q(this,ht,null)))},Qa=function(t){c(this,Ge)&&(Ie(c(this,Ge)),q(this,Ge,null)),c(this,Ee)&&(Ie(c(this,Ee)),q(this,Ee,null)),c(this,Ne)&&(Ie(c(this,Ne)),q(this,Ne,null));let n=c(this,Ye).failed;const a=i=>{if(S(this,B,jt).call(this))return;const{reset:r,invoke_onerror:s}=S(this,B,Va).call(this,i);s(),n&&!S(this,B,jt).call(this)&&q(this,Ne,S(this,B,ha).call(this,()=>{try{return Ve(()=>{var l=W;l.b=this,l.f|=Na,n(c(this,Ke),()=>i,()=>r)})}catch(l){return ft(l,c(this,ke).parent),null}}))};It(()=>{if(!S(this,B,jt).call(this)){var i;try{i=this.transform_error(t)}catch(r){ft(r,c(this,ke)&&c(this,ke).parent);return}i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(a,r=>ft(r,c(this,ke)&&c(this,ke).parent)):a(i)}})};function Y(e,t){var n=t==null?"":typeof t=="object"?`${t}`:t;n!==(e[En]??(e[En]=e.nodeValue))&&(e[En]=n,e.nodeValue=`${n}`)}function Js(e,t){return Ks(e,t)}const la=new Map;function Ks(e,{target:t,anchor:n,props:a={},events:i,context:r,intro:s=!0,transformError:l}){_s();var o=void 0,d=zs(()=>{var h=n??t.appendChild(Ot());Fs(h,{pending:()=>{}},g=>{tn({});var v=ae;r&&(v.c=r),i&&(a.$$events=i),o=e(g,a)||ai(),nn()},l);var f=new Set,m=g=>{for(var v=0;v<g.length;v++){var _=g[v];if(!f.has(_)){f.add(_);var u=qs(_);for(const ie of[t,document]){var z=la.get(ie);z===void 0&&(z=new Map,la.set(ie,z));var J=z.get(_);J===void 0?(ie.addEventListener(_,xi,{passive:u}),z.set(_,1)):z.set(_,J+1)}}}};return m(_a(Rs)),bi.add(m),()=>{var u;for(var g of f)for(const z of[t,document]){var v=la.get(z),_=v.get(g);--_==0?(z.removeEventListener(g,xi),v.delete(g),v.size===0&&la.delete(z)):v.set(g,_)}bi.delete(m),h!==n&&((u=h.parentNode)==null||u.removeChild(h))}});return Ys.set(o,d),o}let Ys=new WeakMap;var nt,gt,Le,Vt,Yn,Vn,xa;class zr{constructor(t,n=!0){xe(this,"anchor");O(this,nt,new Map);O(this,gt,new Map);O(this,Le,new Map);O(this,Vt,new Set);O(this,Yn,!0);O(this,Vn,t=>{if(c(this,nt).has(t)){var n=c(this,nt).get(t),a=c(this,gt).get(n);if(a)ya(a),c(this,Vt).delete(n);else{var i=c(this,Le).get(n);i&&(ya(i.effect),c(this,gt).set(n,i.effect),c(this,Le).delete(n),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),a=i.effect)}for(const[r,s]of c(this,nt)){if(c(this,nt).delete(r),r===t)break;const l=c(this,Le).get(s);l&&(Ie(l.effect),c(this,Le).delete(s))}for(const[r,s]of c(this,gt)){if(r===n||c(this,Vt).has(r))continue;const l=()=>{if(Array.from(c(this,nt).values()).includes(r)){var d=document.createDocumentFragment();di(s,d),d.append(Ot()),c(this,Le).set(r,{effect:s,fragment:d})}else Ie(s);c(this,Vt).delete(r),c(this,gt).delete(r)};c(this,Yn)||!a?(c(this,Vt).add(r),Xt(s,l,!1)):l()}}});O(this,xa,t=>{c(this,nt).delete(t);const n=Array.from(c(this,nt).values());for(const[a,i]of c(this,Le))n.includes(a)||(Ie(i.effect),c(this,Le).delete(a))});this.anchor=t,q(this,Yn,n)}ensure(t,n){var a=U,i=pr();if(n&&!c(this,gt).has(t)&&!c(this,Le).has(t))if(i){var r=document.createDocumentFragment(),s=Ot();r.append(s),c(this,Le).set(t,{effect:Ve(()=>n(s)),fragment:r})}else c(this,gt).set(t,Ve(()=>n(this.anchor)));if(c(this,nt).set(a,t),i){for(const[l,o]of c(this,gt))l===t?a.unskip_effect(o):a.skip_effect(o);for(const[l,o]of c(this,Le))l===t?a.unskip_effect(o.effect):a.skip_effect(o.effect);a.oncommit(c(this,Vn)),a.ondiscard(c(this,xa))}else c(this,Vn).call(this,a)}}nt=new WeakMap,gt=new WeakMap,Le=new WeakMap,Vt=new WeakMap,Yn=new WeakMap,Vn=new WeakMap,xa=new WeakMap;function ge(e,t,n=!1){var a=new zr(e),i=n?Qt:0;function r(s,l){a.ensure(s,l)}Ta(()=>{var s=!1;t((l,o=0)=>{s=!0,r(o,l)}),s||r(-1,null)},i)}function _e(e,t){return t}function Vs(e,t,n){for(var a=[],i=t.length,r,s=t.length,l=0;l<i;l++){let f=t[l];Xt(f,()=>{if(r){if(r.pending.delete(f),r.done.add(f),r.pending.size===0){var m=e.outrogroups;$a(e,_a(r.done)),m.delete(r),m.size===0&&(e.outrogroups=null)}}else s-=1},!1)}if(s===0){var o=a.length===0&&n!==null&&e.pending.size===0;if(o){var d=n,h=d.parentNode;As(h),h.append(d),e.items.clear()}$a(e,t,!o)}else r={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(r)}function $a(e,t,n=!0){var a;if(e.pending.size>0){a=new Set;for(const s of e.pending.values())for(const l of s)a.add(e.items.get(l).e)}for(var i=0;i<t.length;i++){var r=t[i];if(a!=null&&a.has(r)){r.f|=ut;const s=document.createDocumentFragment();di(r,s)}else Ie(t[i],n)}}var _i;function Ae(e,t,n,a,i,r=null){var s=e,l=new Map,o=(t&Fi)!==0;if(o){var d=e;s=d.appendChild(Ot())}var h=null,f=va(()=>{var J=n();return Ii(J)?J:J==null?[]:_a(J)}),m=new Map,g=!0;function v(J){if((z.effect.f&Te)===0){z.pending.delete(J);var ie=p(f);z.fallback=h,Xs(z,ie,s,t,a),h!==null&&(ie.length===0?(h.f&ut)===0?ya(h):(h.f^=ut,qn(h,null,s)):Xt(h,()=>{h=null}))}}function _(J){z.pending.delete(J)}var u=Ta(()=>{for(var J=p(f),ie=J.length,de=new Set,qe=U,ve=pr(),re=0;re<ie;re+=1){var Be=J[re],We=a(Be,re),me=g?null:l.get(We);me?(me.v&&wn(me.v,Be),me.i&&wn(me.i,re),ve&&qe.unskip_effect(me.e)):(me=Zs(l,g?s:_i??(_i=Ot()),Be,We,re,i,t,n),g||(me.e.f|=ut),l.set(We,me)),de.add(We)}if(ie===0&&r&&!h&&(g?h=Ve(()=>r(s)):(h=Ve(()=>r(_i??(_i=Ot()))),h.f|=ut)),ie>de.size&&Qr(),!g)if(m.set(qe,de),ve){for(const[zt,Ze]of l)de.has(zt)||qe.skip_effect(Ze.e);qe.oncommit(v),qe.ondiscard(_)}else v(qe);p(f)}),z={effect:u,items:l,pending:m,outrogroups:null,fallback:h};g=!1}function Cn(e){for(;e!==null&&(e.f&st)===0;)e=e.next;return e}function Xs(e,t,n,a,i){var me,zt,Ze,Lt,Ce,Ue,bt,an,ot;var r=(a&Dr)!==0,s=t.length,l=e.items,o=Cn(e.effect.first),d,h=null,f,m=[],g=[],v,_,u,z;if(r)for(z=0;z<s;z+=1)v=t[z],_=i(v,z),u=l.get(_).e,(u.f&ut)===0&&((zt=(me=u.nodes)==null?void 0:me.a)==null||zt.measure(),(f??(f=new Set)).add(u));for(z=0;z<s;z+=1){if(v=t[z],_=i(v,z),u=l.get(_).e,e.outrogroups!==null)for(const M of e.outrogroups)M.pending.delete(u),M.done.delete(u);if((u.f&Se)!==0&&(ya(u),r&&((Lt=(Ze=u.nodes)==null?void 0:Ze.a)==null||Lt.unfix(),(f??(f=new Set)).delete(u))),(u.f&ut)!==0)if(u.f^=ut,u===o)qn(u,null,n);else{var J=h?h.next:o;u===e.effect.last&&(e.effect.last=u.prev),u.prev&&(u.prev.next=u.next),u.next&&(u.next.prev=u.prev),St(e,h,u),St(e,u,J),qn(u,J,n),h=u,m=[],g=[],o=Cn(h.next);continue}if(u!==o){if(d!==void 0&&d.has(u)){if(m.length<g.length){var ie=g[0],de;h=ie.prev;var qe=m[0],ve=m[m.length-1];for(de=0;de<m.length;de+=1)qn(m[de],ie,n);for(de=0;de<g.length;de+=1)d.delete(g[de]);St(e,qe.prev,ve.next),St(e,h,qe),St(e,ve,ie),o=ie,h=ve,z-=1,m=[],g=[]}else d.delete(u),qn(u,o,n),St(e,u.prev,u.next),St(e,u,h===null?e.effect.first:h.next),St(e,h,u),h=u;continue}for(m=[],g=[];o!==null&&o!==u;)(d??(d=new Set)).add(o),g.push(o),o=Cn(o.next);if(o===null)continue}(u.f&ut)===0&&m.push(u),h=u,o=Cn(u.next)}if(e.outrogroups!==null){for(const M of e.outrogroups)M.pending.size===0&&($a(e,_a(M.done)),(Ce=e.outrogroups)==null||Ce.delete(M));e.outrogroups.size===0&&(e.outrogroups=null)}if(o!==null||d!==void 0){var re=[];if(d!==void 0)for(u of d)(u.f&Se)===0&&re.push(u);for(;o!==null;)(o.f&Se)===0&&o!==e.fallback&&re.push(o),o=Cn(o.next);var Be=re.length;if(Be>0){var We=(a&Fi)!==0&&s===0?n:null;if(r){for(z=0;z<Be;z+=1)(bt=(Ue=re[z].nodes)==null?void 0:Ue.a)==null||bt.measure();for(z=0;z<Be;z+=1)(ot=(an=re[z].nodes)==null?void 0:an.a)==null||ot.fix()}Vs(e,re,We)}}r&&It(()=>{var M,Qe;if(f!==void 0)for(u of f)(Qe=(M=u.nodes)==null?void 0:M.a)==null||Qe.apply()})}function Zs(e,t,n,a,i,r,s,l){var o=(s&Lr)!==0?(s&Br)===0?bs(n,!1,!1):en(n):null,d=(s&Fr)!==0?en(i):null;return{v:o,i:d,e:Ve(()=>(r(t,o??n,d??i,l),()=>{e.delete(a)}))}}function qn(e,t,n){if(e.nodes)for(var a=e.nodes.start,i=e.nodes.end,r=t&&(t.f&ut)===0?t.nodes.start:n;a!==null;){var s=ea(a);if(r.before(a),a===i)return;a=s}}function St(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}function zn(e,t,n=!1,a=!1,i=!1,r=!1){var s=e,l="";if(n)var o=e;F(()=>{var d=W;if(l!==(l=t()??"")){if(n){d.nodes=null,o.innerHTML=l,l!==""&&Hn(Ct(o),o.lastChild);return}if(d.nodes!==null&&(vr(d.nodes.start,d.nodes.end),d.nodes=null),l!==""){var h=a?Jr:i?Kr:void 0,f=dr(a?"svg":i?"math":"template",h);f.innerHTML=l;var m=a||i?f:f.content;if(Hn(Ct(m),m.lastChild),a||i)for(;Ct(m);)s.before(Ct(m));else s.before(m)}}})}function Ln(e,t,...n){var a=new zr(e);Ta(()=>{const i=t()??null;a.ensure(i,i&&(r=>i(r,...n)))},Qt)}function Ai(e,t,n){fr(()=>{var a=na(()=>t(e,n==null?void 0:n())||{});if(n&&(a!=null&&a.update)){var i=!1,r={};ci(()=>{var s=n();Cr(s),i&&Hi(r,s)&&(r=s,a.update(s))}),i=!0}if(a!=null&&a.destroy)return()=>a.destroy()})}const ki=[...` 	
\r\f \v\uFEFF`];function Qs(e,t,n){var a=e==null?"":""+e;if(n){for(var i of Object.keys(n))if(n[i])a=a?a+" "+i:i;else if(a.length)for(var r=i.length,s=0;(s=a.indexOf(i,s))>=0;){var l=s+r;(s===0||ki.includes(a[s-1]))&&(l===a.length||ki.includes(a[l]))?a=(s===0?"":a.substring(0,s))+a.substring(l+1):s=l}}return a===""?null:a}function Ti(e,t=!1){var n=t?" !important;":";",a="";for(var i of Object.keys(e)){var r=e[i];r!=null&&r!==""&&(a+=" "+i+": "+r+n)}return a}function $s(e,t){if(t){var n="",a,i;return Array.isArray(t)?(a=t[0],i=t[1]):a=t,a&&(n+=Ti(a)),i&&(n+=Ti(i,!0)),n=n.trim(),n===""?null:n}return String(e)}function Ut(e,t,n,a,i,r){var s=e[La];if(s!==n||s===void 0){var l=Qs(n,a,r);l==null?e.removeAttribute("class"):e.className=l,e[La]=n}else if(r&&i!==r)for(var o in r){var d=!!r[o];(i==null||d!==!!i[o])&&e.classList.toggle(o,d)}return r}function Ra(e,t={},n,a){for(var i in n){var r=n[i];t[i]!==r&&(n[i]==null?e.style.removeProperty(i):e.style.setProperty(i,r,a))}}function ca(e,t,n,a){var i=e[Fa];if(i!==t){var r=$s(t,a);r==null?e.removeAttribute("style"):e.style.cssText=r,e[Fa]=t}else a&&(Array.isArray(a)?(Ra(e,n==null?void 0:n[0],a[0]),Ra(e,n==null?void 0:n[1],a[1],"important")):Ra(e,n,a));return a}const eo=Symbol("is custom element"),to=Symbol("is html");function ne(e,t,n,a){var i=no(e),r=i[t];r!==(i[t]=n)&&(t==="loading"&&(e[Nr]=n),n==null?e.removeAttribute(t):typeof n!="string"&&ao(e).has(t)?e[t]=n:e.setAttribute(t,n))}function no(e){return e[pa]??(e[pa]={[eo]:e.nodeName.includes("-"),[to]:e.namespaceURI===Bi})}var Pi=new Map;function ao(e){var t=e.getAttribute("is")||e.nodeName,n=Pi.get(t);if(n)return n;Pi.set(t,n=new Set);for(var a,i=e,r=Element.prototype;r!==i;){a=Ri(i);for(var s in a)a[s].set&&s!=="innerHTML"&&s!=="textContent"&&s!=="innerText"&&n.add(s);i=ti(i)}return n}function Oa(e,t){return e===t||(e==null?void 0:e[pn])===t}function Ci(e=ai(),t,n,a){var i=ae.r,r=W;return fr(()=>{var s,l;return ci(()=>{s=l,l=(a==null?void 0:a())||[],na(()=>{Oa(n(...l),e)||(t(e,...l),s&&Oa(n(...s),e)&&t(null,...s))})}),()=>{let o=r;for(;o!==i&&o.parent!==null&&o.parent.f&Bn;)o=o.parent;const d=()=>{l&&Oa(n(...l),e)&&t(null,...l)},h=o.teardown;o.teardown=()=>{d(),h==null||h()}}}),e}function aa(e=!1){const t=ae,n=t.l.u;if(!n)return;let a=()=>Cr(t.s);if(e){let i=0,r={};const s=ka(()=>{let l=!1;const o=t.s;for(const d in o)o[d]!==r[d]&&(r[d]=o[d],l=!0);return l&&i++,i});a=()=>p(s)}n.b.length&&Cs(()=>{zi(t,a),Ga(n.b)}),Ka(()=>{const i=na(()=>n.m.map(Rr));return()=>{for(const r of i)typeof r=="function"&&r()}}),n.a.length&&Ka(()=>{zi(t,a),Ga(n.a)})}function zi(e,t){if(e.l.s)for(const n of e.l.s)p(n);t()}function Er(e){ae===null&&Xr(),Qn&&ae.l!==null?io(ae).m.push(e):Ka(()=>{const t=na(e);if(typeof t=="function")return t})}function io(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const ro="5";var ji;typeof window<"u"&&((ji=window.__svelte??(window.__svelte={})).v??(ji.v=new Set)).add(ro);ls();var so=x('<div class="container-xl mx-auto main-content-1"><!></div>');function oo(e,t){var n=so(),a=b(n);Ln(a,()=>t.children),w(e,n)}var lo=x('<div class="container-lg"><div class="row"><div class="col-sm-2"></div> <div class="col-sm-8 entry-content"><!></div></div></div>');function co(e,t){var n=lo(),a=b(n),i=E(b(a),2),r=b(i);Ln(r,()=>t.children),w(e,n)}const po=["Partnership","Partnership","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated"],ho=["Lawsuit","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated"],go=["Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated"],fo=["Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated"],uo={"The Wall Street Journal":["Partnership","Lawsuit","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated"],"Los Angeles Times":["Unaffiliated","Partnership","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated"],"The Texas Tribune":["Unaffiliated","Partnership","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated"],Time:po,CBC:ho,"Entertainment Weekly":["Partnership","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated"],"Mississippi Today":["Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated"],"Mother Jones":["Lawsuit","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated"],ProPublica:go,"San Francisco Chronicle":["Partnership","Unaffiliated","Unaffiliated","Partnership","Unaffiliated","Unaffiliated"],TechCrunch:fo,"The Examination":["Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated"],"Boston Globe":["Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated"],"Missouri Independent":["Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated"],"National Geographic":["Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated"],"Philadelphia Tribune":["Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated"],"Seattle Times":["Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated"],"The Dispatch":["Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated"],"The Globe and Mail":["Lawsuit","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated"],"USA Today":["Unaffiliated","Unaffiliated","Unaffiliated","Partnership","Unaffiliated","Unaffiliated"]},vo=["Allowed","Allowed","Unknown","Allowed","Unknown","Allowed"],mo=["Blocked","Allowed","Unknown","Allowed","Unknown","Blocked"],yo=["Allowed","Allowed","Unknown","Allowed","Unknown","Allowed"],wo=["Allowed","Allowed","Unknown","Allowed","Unknown","Blocked"],Ei={"The Wall Street Journal":["Allowed","Blocked","Unknown","Allowed","Unknown","Blocked"],"Los Angeles Times":["Allowed","Allowed","Unknown","Allowed","Unknown","Allowed"],"The Texas Tribune":["Allowed","Allowed","Unknown","Allowed","Unknown","Allowed"],Time:vo,CBC:mo,"Entertainment Weekly":["Allowed","Allowed","Unknown","Allowed","Unknown","Allowed"],"Mississippi Today":["Allowed","Allowed","Unknown","Allowed","Unknown","Allowed"],"Mother Jones":["Allowed","Allowed","Unknown","Allowed","Unknown","Allowed"],ProPublica:yo,"San Francisco Chronicle":["Allowed","Allowed","Unknown","Allowed","Unknown","Allowed"],TechCrunch:wo,"The Examination":["Allowed","Allowed","Unknown","Allowed","Unknown","Allowed"],"Boston Globe":["Blocked","Blocked","Unknown","Allowed","Unknown","Blocked"],"Missouri Independent":["Allowed","Blocked","Unknown","Allowed","Unknown","Blocked"],"National Geographic":["Allowed","Blocked","Unknown","Allowed","Unknown","Blocked"],"Philadelphia Tribune":["Blocked","Blocked","Unknown","Allowed","Unknown","Blocked"],"Seattle Times":["Blocked","Blocked","Unknown","Allowed","Unknown","Blocked"],"The Dispatch":["Blocked","Blocked","Unknown","Allowed","Unknown","Allowed"],"The Globe and Mail":["Blocked","Blocked","Unknown","Allowed","Unknown","Blocked"],"USA Today":["Blocked","Blocked","Unknown","Allowed","Unknown","Blocked"]},bo=""+new URL("excerpt-example-Dp8drUJ9.png",import.meta.url).href;var xo=x("<p> </p>");function ln(e,t){var n=xo(),a=Q(n,!0);F(()=>Y(a,t.text)),w(e,n)}const _o=e=>{var t=To(),n=b(t);F(()=>ne(n,"src",bo)),w(e,t)};var Ao=x('<span class="svelte-z2zu4m"></span>'),ko=x('<div class="matrix svelte-z2zu4m" aria-hidden="true"></div>'),To=x('<figure class="excerpt-figure svelte-z2zu4m"><img class="example-screenshot svelte-z2zu4m" alt="Mother Jones article with the study excerpt highlighted"/> <figcaption class="svelte-z2zu4m">Sample of a selected excerpt.</figcaption></figure>'),Po=x('<div class="example-screenshot example-prompt svelte-z2zu4m" aria-label="Example study prompt"><div class="query-bubble svelte-z2zu4m"><blockquote class="svelte-z2zu4m"> <span class="selected-excerpt-overlay svelte-z2zu4m" aria-hidden="true">Selected excerpt</span></blockquote> <span class="query-separator svelte-z2zu4m" aria-hidden="true">--</span> <p class="svelte-z2zu4m"></p></div> <p class="query-response svelte-z2zu4m">The quote is from <mark class="svelte-z2zu4m">Article headline</mark>, published by <mark class="svelte-z2zu4m">Publisher</mark> on <mark class="svelte-z2zu4m">Date</mark>.</p> <p class="svelte-z2zu4m"><strong class="svelte-z2zu4m">Citation:</strong> <mark class="svelte-z2zu4m">Source URL</mark></p></div>'),Co=x('<th scope="col"> </th>'),zo=x('<div class="excerpt-count svelte-z2zu4m">10 articles</div>'),Eo=x("<span></span>"),So=x('<td class="excerpt-cell svelte-z2zu4m"><span class="visually-hidden svelte-z2zu4m">10 article excerpts</span> <div class="excerpt-tiles svelte-z2zu4m" aria-hidden="true"><!> <!></div></td>'),Uo=x('<td class="svelte-z2zu4m"><span class="cell svelte-z2zu4m" aria-hidden="true"> </span> <span class="visually-hidden svelte-z2zu4m"> </span></td>'),jo=x('<tr class="svelte-z2zu4m"><th scope="row" class="svelte-z2zu4m"> </th><!></tr>'),Mo=x('<span class="svelte-z2zu4m"> </span>'),Io=x('<div class="excerpt-example svelte-z2zu4m"><!></div>'),qo=x('<div class="expanded-query svelte-z2zu4m"><!></div>'),Ro=x('<div><table class="crawler-table svelte-z2zu4m"><caption class="visually-hidden svelte-z2zu4m"> </caption><thead class="svelte-z2zu4m"><tr class="svelte-z2zu4m"><th scope="col" class="svelte-z2zu4m"><span class="visually-hidden svelte-z2zu4m">Publisher</span></th><!></tr></thead><tbody class="svelte-z2zu4m"></tbody></table> <div><!> <span data-affiliation="Partnership" class="svelte-z2zu4m">Partnership</span> <span data-affiliation="Lawsuit" class="svelte-z2zu4m">Lawsuit</span></div> <!></div>'),Oo=x('<div class="result svelte-z2zu4m"><!> <span class="svelte-z2zu4m"> </span></div>'),Go=x('<div><div class="results svelte-z2zu4m" role="group" aria-label="Eight grids of 200 queries each, for 1,600 queries total"></div></div>'),No=x('<li class="svelte-z2zu4m"><span class="grading-bullet svelte-z2zu4m" aria-hidden="true"> </span> <span class="svelte-z2zu4m"><strong class="svelte-z2zu4m"> </strong> </span></li>'),Lo=x('<ul class="grading-rubric svelte-z2zu4m" aria-label="Response grading labels"></ul>'),Fo=x('<p class="svelte-z2zu4m"> <strong></strong> </p>'),Do=x('<div class="scene-layer svelte-z2zu4m"><!></div>'),Bo=x('<div class="stage svelte-z2zu4m"><div class="scene svelte-z2zu4m"><div><!></div> <!></div></div>'),Wo=x('<p class="svelte-z2zu4m"> <strong class="svelte-z2zu4m"></strong> </p>'),Ho=x('<p class="svelte-z2zu4m"> <strong class="svelte-z2zu4m"> </strong> </p>'),Jo=x('<div class="grading-desktop svelte-z2zu4m"><!></div>'),Ko=x('<div class="inline-scene svelte-z2zu4m"><!></div>'),Yo=x('<section><div class="step-copy svelte-z2zu4m"><!> <!> <!></div> <!></section>'),Vo=x("<li> </li>"),Xo=x("<ul></ul>"),Zo=x('<!> <div><!> <div class="steps svelte-z2zu4m"></div></div> <div class="grading-mobile svelte-z2zu4m"><!></div> <!>',1);function Qo(e,t){tn(t,!0);const n=y=>{var k=ko();Ae(k,21,()=>m,_e,(T,j)=>{var P=At(),D=we(P);Ae(D,16,()=>Array(10),_e,(N,H)=>{var K=Ao();w(N,K)}),w(T,P)}),w(y,k)},a=y=>{var k=Po(),T=b(k),j=b(T),P=b(j);P.nodeValue="“Today, she is the director of holistic health and fitness for the 101st Airborne Division at Fort Campbell. She lives about an hour south of base in Nashville with her partner and a wildly affectionate dog named Mozzie. She rides her motorcycle, plays keyboard and piano, guitar and bass, and browses bookstores on the weekend. Despite the growing political tension over trans issues, life is normal most of the time. She does not feel much like she stands out anymore; she does not want to talk about standing out.” ";var D=E(j,4);D.textContent="Identify the article that contains this quote. Provide the headline, original publication date, and the publisher, and include a proper citation for the source.",w(y,k)},i=(y,k=Dn)=>{var T=At(),j=we(T);{var P=D=>{var N=Ro();let H;ca(N,"",{},{"--query-beat":v+"ms"});var K=b(N),A=b(K),C=Q(A,!0),L=E(A),$=b(L),I=E(b($));Ae(I,17,()=>g,_e,(X,te)=>{var pe=Co();let ye;var lt=Q(pe,!0);F(()=>{ye=Ut(pe,1,"svelte-z2zu4m",null,ye,{muted:k()>0}),Y(lt,p(te))}),w(X,pe)});var se=E(L);Ae(se,21,()=>m,_e,(X,te,pe)=>{var ye=jo();ca(ye,"",{},{"--order":pe});var lt=b(ye),_t=Q(lt,!0),An=E(lt);{var V=He=>{var ct=So(),Ft=E(b(ct),2),ra=b(Ft);{var kn=Et=>{var Dt=zo();w(Et,Dt)};ge(ra,Et=>{k()===1&&pe===0&&Et(kn)})}var Ea=E(ra,2);Ae(Ea,16,()=>Array(10),_e,(Et,Dt,Tn)=>{var Pn=Eo();let sa;ca(Pn,"",{},{"--tile-order":Tn}),F(()=>sa=Ut(Pn,1,"svelte-z2zu4m",null,sa,{highlighted:p(te)==="Mother Jones"&&Tn===9})),w(Et,Pn)}),F(()=>ne(ct,"colspan",g.length)),w(He,ct)},oe=He=>{var ct=At(),Ft=we(ct);Ae(Ft,17,()=>Ei[p(te)],_e,(ra,kn,Ea)=>{const Et=Z(()=>uo[p(te)][Ea]);var Dt=Uo(),Tn=b(Dt),Pn=Q(Tn,!0),sa=E(Tn,2),Sr=Q(sa);F(()=>{ne(Dt,"data-status",p(kn)),ne(Dt,"data-affiliation",p(Et)),Y(Pn,_[p(kn)]),Y(Sr,`${p(kn)??""}, ${p(Et)??""}`)}),w(ra,Dt)}),w(He,ct)};ge(An,He=>{k()>0?He(V):He(oe,-1)})}F(()=>Y(_t,p(te))),w(X,ye)});var he=E(K,2);let ze;var Re=b(he);Ae(Re,17,()=>Object.entries(_),_e,(X,te)=>{var pe=Z(()=>Or(p(te),2));let ye=()=>p(pe)[0],lt=()=>p(pe)[1];var _t=Mo(),An=Q(_t);F(()=>{ne(_t,"data-status",ye()),Y(An,`${lt()??""} ${ye()==="Unknown"?"Crawler unknown":`Crawler ${ye()}`}`)}),w(X,_t)});var le=E(he,2);{var Oe=X=>{var te=Io(),pe=b(te);_o(pe),w(X,te)},$e=X=>{var te=qo(),pe=b(te);a(pe),Ai(te,ye=>Ce==null?void 0:Ce(ye)),w(X,te)};ge(le,X=>{k()===1?X(Oe):k()===2&&(p(d)||p(o)===2)&&X($e,1)})}F(()=>{H=Ut(N,1,"selection svelte-z2zu4m",null,H,{focused:k()===2}),Y(C,k()===0?"Crawler access and affiliations by AI company":"Article excerpts by publisher"),ze=Ut(he,1,"legend svelte-z2zu4m",null,ze,{muted:k()>0})}),w(D,N)};ge(j,D=>{k()<3&&D(P)})}w(y,T)},r=(y,k=Dn)=>{var T=Go();let j;var P=b(T);Ae(P,21,()=>u,_e,(D,N,H)=>{var K=Oo();let A;var C=b(K);n(C);var L=E(C,2),$=Q(L,!0);F(()=>{A=ca(K,"",A,{"--reverse-order":u.length-1-H}),Y($,p(N))}),w(D,K)}),Ai(T,(D,N)=>Ze==null?void 0:Ze(D,N),k),F(()=>j=Ut(T,1,"total svelte-z2zu4m",null,j,{multiplying:k()})),w(y,T)},s=y=>{var k=At(),T=we(k);Ae(T,17,()=>p(me),_e,(j,P)=>{var D=At(),N=we(D);{var H=C=>{var L=Lo();Ae(L,21,()=>p(P).split(/\r?\n/),_e,($,I)=>{const se=Z(()=>p(I).indexOf(":")),he=Z(()=>p(I).slice(2,p(se)));var ze=No(),Re=b(ze),le=Q(Re,!0),Oe=E(Re,2),$e=b(Oe),X=Q($e),te=E($e);F(pe=>{Y(le,p(he)==="Crawler Blocked"?"×":""),Y(X,`${p(he)??""}.`),Y(te,` ${pe??""}`)},[()=>p(I).slice(p(se)+1).trim()]),w($,ze)}),w(C,L)},K=Z(()=>p(P).startsWith("- ")),A=C=>{ln(C,{get text(){return p(P)}})};ge(N,C=>{p(K)?C(H):C(A,-1)})}w(j,D)}),w(y,k)};let l=[],o=tt(0),d=tt(!1),h=tt(-1),f;const m=Object.keys(Ei),g=["OpenAI","Perplexity","DeepSeek","Microsoft","xAI","Google"],v=300,_={Allowed:"✓",Blocked:"×",Unknown:"?"},u=["ChatGPT Search","Perplexity","Perplexity Pro","DeepSeek-V3 Search","Copilot","Grok-2","Grok-3 (beta)","Gemini 2.0 Flash"],z=["Choose 20 news publishers","Ten excerpts per publisher","An example query and response","1,600 queries in total"],J=Z(()=>t.paragraphs.find(y=>y.startsWith("We systematically tested "))),ie="eight generative search tools",de=Z(()=>{var y;return(y=p(J))==null?void 0:y.split(ie)}),qe="selected ten articles from each publisher",ve=Z(()=>t.paragraphs.find(y=>y.startsWith("We randomly selected "))),re=Z(()=>{var y;return(y=p(ve))==null?void 0:y.split(qe)}),Be="identify the corresponding article’s headline, original publisher, publication date, and URL",We=Z(()=>[t.paragraphs.filter(y=>y.startsWith("We chose")),t.paragraphs.filter(y=>y.startsWith("We deliberately chose excerpts")),t.paragraphs.filter(y=>y.startsWith("After providing each chatbot")),t.paragraphs.filter(y=>y.startsWith("We ran sixteen hundred"))]),me=Z(()=>t.paragraphs.filter(y=>y.startsWith("We manually evaluated")||y.startsWith("- "))),zt=Z(()=>t.paragraphs.filter(y=>y!==p(J)&&y!==p(ve)&&!p(We).flat().includes(y)&&!p(me).includes(y)));function Ze(y,k){if(!k)return;const T=Lt(y.closest(".scene"));if(!T){y.classList.remove("multiplying");return}const j=Array.from(y.querySelectorAll(".result"),(P,D)=>setTimeout(()=>P.style.setProperty("--panel-revealed","1"),450+D*120));return{destroy(){T.cancel(),j.forEach(clearTimeout)}}}function Lt(y,k=!1){const T=y.querySelectorAll(".excerpt-tiles"),j=y.querySelector(".matrix");if(!T.length||!j)return;const P=T[0].getBoundingClientRect(),D=T[T.length-1].getBoundingClientRect(),N=j.getBoundingClientRect(),H=[{transform:`translate(${P.left-N.left}px, ${P.top-N.top}px)
          scale(${P.width/N.width}, ${(D.bottom-P.top)/N.height})`},{transform:"none"}];return j.animate(k?H.reverse():H,{duration:k?620:450,delay:k?840:0,easing:"ease-in-out",fill:k?"forwards":"none"})}function Ce(y){const k=y.closest(".selection"),T=k.querySelector(".highlighted"),j=T.closest("table"),P=()=>{const N=k.getBoundingClientRect(),H=T.getBoundingClientRect(),K=H.top+H.height/2;y.style.setProperty("--query-center",`${100*(K-N.top)/N.height}%`);const A=y.getBoundingClientRect();y.style.setProperty("--triangle-tip",`${100*(K-A.top)/A.height}%`),y.style.setProperty("--triangle-width",`${Math.max(0,A.left-H.right)}px`)};P();const D=new ResizeObserver(P);return D.observe(k),D.observe(T),D.observe(y),j.addEventListener("transitionend",P),{destroy(){D.disconnect(),j.removeEventListener("transitionend",P)}}}Er(()=>{const y=matchMedia("(max-width: 850px)"),k=matchMedia("(prefers-reduced-motion: reduce)");let T=0,j,P;function D(){T=0;const K=innerHeight*(y.matches?.55:.54),A=Math.max(0,l.findLastIndex(C=>C&&C.getBoundingClientRect().top<=K));if(!(p(h)>=0&&A===p(h)-1)&&(p(h)>=0&&(clearTimeout(j),P==null||P.cancel(),je(h,-1)),A!==p(o)))if(!p(d)&&A===p(o)-1){je(h,p(o),!0),p(o)===3&&(P=Lt(f.querySelector(".scene"),!0));const C=p(o)===3?1460:p(o)===2?v*3:620;j=setTimeout(()=>{je(o,A,!0),je(h,-1),P==null||P.cancel()},C)}else je(o,A,!0)}function N(){T||(T=requestAnimationFrame(D))}function H(){je(d,k.matches,!0),p(d)&&p(h)>=0&&(clearTimeout(j),P==null||P.cancel(),je(h,-1)),Ms().then(N)}return H(),y.addEventListener("change",H),k.addEventListener("change",H),window.addEventListener("scroll",N,{passive:!0}),window.addEventListener("resize",N),()=>{y.removeEventListener("change",H),k.removeEventListener("change",H),window.removeEventListener("scroll",N),window.removeEventListener("resize",N),cancelAnimationFrame(T),clearTimeout(j),P==null||P.cancel()}});var Ue=Zo(),bt=we(Ue);{var an=y=>{var k=Fo(),T=b(k),j=E(T);j.textContent="eight generative search tools";var P=E(j,1,!0);F(()=>{Y(T,p(de)[0]),Y(P,p(de)[1])}),w(y,k)},ot=y=>{ln(y,{get text(){return p(J)}})};ge(bt,y=>{var k;((k=p(de))==null?void 0:k.length)===2?y(an):p(J)&&y(ot,1)})}var M=E(bt,2);let Qe;var xt=b(M);{var rn=y=>{var k=Bo(),T=b(k),j=b(T);let P;var D=b(j);{let K=Z(()=>Math.min(p(o),2));i(D,()=>p(K))}var N=E(j,2);{var H=K=>{var A=Do(),C=b(A);r(C,()=>!0),w(K,A)};ge(N,K=>{p(o)===3&&K(H)})}F(()=>{P=Ut(j,1,"scene-layer svelte-z2zu4m",null,P,{"source-only":p(o)===3}),ne(j,"aria-hidden",p(o)===3)}),w(y,k)};ge(xt,y=>{p(d)||y(rn)})}var Pa=E(xt,2);Ae(Pa,21,()=>z,_e,(y,k,T)=>{var j=Yo();let P;var D=b(j),N=b(D);{var H=I=>{var se=At(),he=we(se);{var ze=le=>{var Oe=Wo(),$e=b(Oe),X=E($e);X.textContent="selected ten articles from each publisher";var te=E(X,1,!0);F(()=>{Y($e,p(re)[0]),Y(te,p(re)[1])}),w(le,Oe)},Re=le=>{ln(le,{get text(){return p(ve)}})};ge(he,le=>{var Oe;((Oe=p(re))==null?void 0:Oe.length)===2?le(ze):p(ve)&&le(Re,1)})}w(I,se)};ge(N,I=>{T===1&&I(H)})}var K=E(N,2);Ae(K,17,()=>p(We)[T],_e,(I,se)=>{const he=Z(()=>T===0?"20 news publishers with varying stances on AI access":Be),ze=Z(()=>p(se).split(p(he)));var Re=At(),le=we(Re);{var Oe=X=>{var te=Ho(),pe=b(te),ye=E(pe),lt=Q(ye,!0),_t=E(ye,1,!0);F(()=>{Y(pe,p(ze)[0]),Y(lt,p(he)),Y(_t,p(ze)[1])}),w(X,te)},$e=X=>{ln(X,{get text(){return p(se)}})};ge(le,X=>{(T===0||T===2)&&p(ze).length===2?X(Oe):X($e,-1)})}w(I,Re)});var A=E(K,2);{var C=I=>{var se=Jo(),he=b(se);s(he),w(I,se)};ge(A,I=>{T===2&&I(C)})}var L=E(D,2);{var $=I=>{var se=Ko(),he=b(se);{var ze=le=>{r(le,()=>!1)},Re=le=>{i(le,()=>T)};ge(he,le=>{T===3?le(ze):le(Re,-1)})}w(I,se)};ge(L,I=>{p(d)&&I($)})}Ci(j,(I,se)=>l[se]=I,I=>l==null?void 0:l[I],()=>[T]),F(()=>{P=Ut(j,1,"step svelte-z2zu4m",null,P,{"holding-copy":T===1&&p(h)===2}),ne(j,"aria-label",p(k)),ne(j,"aria-current",!p(d)&&T===p(o)?"step":void 0)}),w(y,j)}),Ci(M,y=>f=y,()=>f);var ia=E(M,2),Ca=b(ia);s(Ca);var za=E(ia,2);Ae(za,17,()=>p(zt),_e,(y,k)=>{var T=At(),j=we(T);{var P=H=>{var K=Xo();Ae(K,21,()=>p(k).split(/\r?\n/),_e,(A,C)=>{var L=Vo(),$=Q(L,!0);F(I=>Y($,I),[()=>p(C).slice(2)]),w(A,L)}),w(H,K)},D=Z(()=>p(k).startsWith("- ")),N=H=>{ln(H,{get text(){return p(k)}})};ge(j,H=>{p(D)?H(P):H(N,-1)})}w(y,T)}),F(()=>Qe=Ut(M,1,"story svelte-z2zu4m",null,Qe,{"rewind-tiles":p(h)===1,"rewind-query":p(h)===2,"rewind-panels":p(h)===3})),w(e,Ue),nn()}var $o=x('<div class="container-fluid top-nav-box desktop-nav-container"><div class="container-lg top-nav-1"><div class="cjr-header-wrap"><header class="cjr-header"><span class="header-links"><a class="cjr-header-link" href="https://cjr.org/most-recent">Most Recent</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a class="cjr-header-link" href="https://cjr.org/issues">Special Issues</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a class="cjr-header-link" href="https://cjr.org/the-kicker">The Kicker Podcast</a></span> <a class="cjr-header-donate" href="https://members.cjr.org/member/?a=nav-joinus&amp;utm_source=cjr-org&amp;utm_medium=cjr-homehead&amp;utm_campaign=m-land" target="_blank"><img src="https://cjr.org/wp-content/themes/cjr2017/_resources2022/images/join-us-orange-rounded-balto.png" alt="Join us" class="cjr-button-donate"/></a> <div class="js-nav-group"><button id="cjr-header__hamburger" class="cjr-header__hamburger" aria-label="Toggle CJR navigation" aria-expanded="false"><span id="cjr-head-ham-lines" class="cjr-header__hamburger-lines"></span></button> <div id="navigation" class="cjr-nav"><div class="container-lg cjr-search-container"><form class="nav-search" id="search" action="https://www.cjr.org/search"><input type="hidden" name="cx" value="002110349687880336610:9r4jniuv6ko"/> <input type="hidden" name="cof" value="FORID:11"/> <input type="hidden" name="ie" value="UTF-8"/> <input type="search" name="q" placeholder="Search..."/> <button type="submit">Search</button></form></div> <div class="container-lg cjr-main-container"><nav class="cjr-main-menu"><ul class="cjr-main-menu__list"><li class="cjr-main-menu__item"><a class="cjr-main-menu__link" href="https://cjr.org/most-recent">Recent Stories</a></li> <li class="cjr-main-menu__item"><a class="cjr-main-menu__link" href="https://cjr.org/issues">Special Issues</a></li> <li class="cjr-main-menu__item"><a class="cjr-main-menu__link" href="https://cjr.org/the-kicker">The Kicker Podcast</a></li> <li class="cjr-main-menu__item"><a class="cjr-main-menu__link" href="https://cjr.org/tow-center">Tow Center</a></li></ul></nav> <div class="cjr-nav__second"><ul class="cjr-nav__second-menu cjr-menu-inline"><li class="cjr-menu-inline__item"><a class="cjr-menu-inline__link" href="https://cjr.org/about_us/mission_statement.php" title="">About</a></li> <li class="cjr-menu-inline__item"><a class="cjr-menu-inline__link" href="https://members.cjr.org/member/?a=nav-mem&amp;utm_source=cjr-org&amp;utm_medium=cjr-nav&amp;utm_campaign=m-land" title="Membership">Memberships</a></li> <li class="cjr-menu-inline__item"><a class="cjr-menu-inline__link" href="https://cjr.org/about_us/donate.php" title="Donate">Donate</a></li> <li class="cjr-menu-inline__item"><a class="cjr-menu-inline__link" href="https://cjr.org/about_us/advertise.php" title="Advertise">Advertise</a></li> <li class="cjr-menu-inline__item"><a class="cjr-menu-inline__link" href="https://cjr.org/about_us/contact.php" title="Contact">Contact</a></li></ul></div></div></div></div></header></div> <div class="cjr-header-logo-wrap"><a href="https://www.cjr.org/" rel="home"><img alt="Columbia Journalism Review" class="cjr-header-logo-image" width="1200" height="65"/></a></div></div></div> <div class="container-fluid top-nav-box mobile-nav-container"><div class="container-lg top-nav-1"><header class="cjr-header"><a class="cjr-header__logo" href="https://www.cjr.org/" rel="home"><img alt="Columbia Journalism Review" class="cjr-logo-mobile" width="600" height="278"/></a> <a class="cjr-header-donate" href="https://members.cjr.org/member/?a=nav-joinus&amp;utm_source=cjr-org&amp;utm_medium=cjr-homehead&amp;utm_campaign=m-land" target="_blank"><img src="https://cjr.org/wp-content/themes/cjr2017/_resources2022/images/join-us-orange-rounded-balto.png" alt="Join us" class="cjr-button-donate"/></a> <div class="js-nav-group"><button class="cjr-header__hamburger" aria-label="Toggle CJR navigation" aria-expanded="false"><span class="cjr-header__hamburger-lines"></span></button> <div class="cjr-nav"><div class="container-lg cjr-search-container"><form class="nav-search" action="https://www.cjr.org/search"><input type="hidden" name="cx" value="002110349687880336610:9r4jniuv6ko"/> <input type="hidden" name="cof" value="FORID:11"/> <input type="hidden" name="ie" value="UTF-8"/> <input type="search" name="q" placeholder="Search..."/> <button type="submit">Search</button></form></div> <div class="container-lg cjr-main-container"><nav class="cjr-main-menu"><ul class="cjr-main-menu__list"><li class="cjr-main-menu__item"><a class="cjr-main-menu__link" href="https://cjr.org/most-recent">Recent Stories</a></li> <li class="cjr-main-menu__item"><a class="cjr-main-menu__link" href="https://cjr.org/issues">Special Issues</a></li> <li class="cjr-main-menu__item"><a class="cjr-main-menu__link" href="https://cjr.org/the-kicker">The Kicker Podcast</a></li> <li class="cjr-main-menu__item"><a class="cjr-main-menu__link" href="https://cjr.org/tow-center">Tow Center</a></li></ul></nav> <div class="cjr-nav__second"><ul class="cjr-nav__second-menu cjr-menu-inline"><li class="cjr-menu-inline__item"><a class="cjr-menu-inline__link" href="https://cjr.org/about_us/mission_statement.php" title="">About</a></li> <li class="cjr-menu-inline__item"><a class="cjr-menu-inline__link" href="https://members.cjr.org/member/?a=nav-mem&amp;utm_source=cjr-org&amp;utm_medium=cjr-nav&amp;utm_campaign=m-land" title="Membership">Memberships</a></li> <li class="cjr-menu-inline__item"><a class="cjr-menu-inline__link" href="https://cjr.org/about_us/donate.php" title="Donate">Donate</a></li> <li class="cjr-menu-inline__item"><a class="cjr-menu-inline__link" href="https://cjr.org/about_us/advertise.php" title="Advertise">Advertise</a></li> <li class="cjr-menu-inline__item"><a class="cjr-menu-inline__link" href="https://cjr.org/about_us/contact.php" title="Contact">Contact</a></li></ul></div></div></div></div></header></div></div>',1);function el(e,t){tn(t,!1),Er(()=>{document.querySelectorAll(".cjr-header__hamburger").forEach(g=>{var _;const v=(_=g.closest(".js-nav-group"))==null?void 0:_.querySelector(".cjr-nav");v&&g.addEventListener("click",()=>{g.classList.toggle("is-active"),g.setAttribute("aria-expanded",String(v.classList.toggle("is-open")))})})}),aa();var n=$o(),a=we(n),i=b(a),r=E(b(i),2),s=b(r),l=Q(s),o=E(a,2),d=b(o),h=b(d),f=b(h),m=Q(f);F(()=>{ne(l,"src","./graphics/cjr/cjr-logo-2x-b.png"),ne(m,"src","./graphics/cjr/cjr-logo-mobile-2x.png")}),w(e,n),nn()}var tl=x('<footer id="footer"><div id="footer-inner"><div class="logo"><a href="https://www.cjr.org/" rel="home"><img alt="Columbia Journalism Review" width="440" height="25"/></a> <p>The voice of journalism, since 1961</p></div> <div class="lists"><div class="list"><h3>About</h3> <ul><li><a href="https://www.cjr.org/about_us/mission_statement.php">Mission</a></li> <li><a href="https://www.cjr.org/about_us/masthead.php">Masthead</a></li> <li><a href="https://www.cjr.org/about_us/privacy_policy.php">Privacy Policy</a></li> <li><a href="https://www.cjr.org/about_us/contact.php">Contact</a></li></ul></div> <div class="list"><h3>Support CJR</h3> <ul><li><a href="https://members.cjr.org/member/?a=nav-foot-mem&amp;utm_source=cjr-org&amp;utm_medium=cjr-nav&amp;utm_campaign=m-land">Become a Member</a></li> <li><a href="https://www.cjr.org/about_us/donate.php">Donate</a></li></ul></div> <div class="list"><h3>Advertise</h3> <ul><li><a href="https://www.cjr.org/about_us/advertise.php">Contact Us</a></li></ul></div></div> <div class="copyright"><span class="copyright-mobile">Copyright 2026,</span> Columbia Journalism Review</div></div></footer>');function nl(e,t){tn(t,!1),aa();var n=tl(),a=b(n),i=b(a),r=b(i),s=Q(r);F(()=>ne(s,"src","./graphics/cjr/cjr-logo-horizontal-footer-1100.png")),w(e,n),nn()}var al=x(`<div class="container-lg tow-ccn-about"><div class="row"><div class="container text-left tow-ccn-main"><div class="row tow-ccn-line"></div> <div class="row"><div class="col-4 tow-ccn-image"><a href="https://towcenter.columbia.edu/" target="_blank"><img alt="Tow Center for Digital Journalism" class="tow-ccn-tout-image-1"/></a></div> <div class="col-7 tow-ccn-tout"><h2 id="about-tow-center" class="tow-ccn-tout-main-title svelte-ofq6m6">About the Tow Center</h2> <span class="tow-ccn-tout-excerpt"><p>The Tow Center for Digital Journalism at Columbia's Graduate School of Journalism, a partner of CJR, is a research center exploring the ways in which technology is changing journalism, its practice and its consumption — as we seek new ways to judge the reliability, standards, and credibility of information online.</p> <p><a href="https://cjr.org/tow-center/" class="tow-ccn-tout-link">View other Tow articles »</a></p> <p><a href="https://towcenter.columbia.edu/" class="tow-ccn-tout-link" target="_blank">Visit Tow Center website »</a></p></span></div></div></div></div></div>`);function il(e,t){tn(t,!1),aa();var n=al(),a=b(n),i=b(a),r=E(b(i),2),s=b(r),l=b(s),o=Q(l);F(()=>ne(o,"src","./graphics/cjr/tow-logo-bottom-500.png")),w(e,n),nn()}var rl=x('<small id="small-category"><a href="https://www.cjr.org/tow-center/"><img alt="Tow Center" class="tow-ccn-slug-image"/></a></small>');function sl(e,t){tn(t,!1),aa();var n=rl(),a=b(n),i=Q(a);F(()=>ne(i,"src","./graphics/cjr/tow-slug-500-2.png")),w(e,n),nn()}var ol=x('<div class="container-lg title-image-lg"><!> <header class="col-sm-10"><h1 class="main-title"> </h1> <div class="post-excerpt"><p> </p></div> <div class="meta"><time class="date svelte-ev0zn9"> </time> <span class="byline"><em>By</em> <!></span></div></header> <!></div>');function ll(e,t){var n=ol(),a=b(n);Ln(a,()=>t.children??Dn);var i=E(a,2),r=b(i),s=Q(r,!0),l=E(r,2),o=b(l),d=Q(o,!0),h=E(l,2),f=b(h),m=Q(f,!0),g=E(f,2),v=E(b(g),2);Ln(v,()=>t.byline);var _=E(i,2);Ln(_,()=>t.hero??Dn),F(()=>{Y(s,t.hed),Y(d,t.subhed),ne(f,"datetime",t.datetime),Y(m,t.date)}),w(e,n)}const cl=`AI search tools are rapidly gaining in popularity, with nearly one in four Americans now saying they have used AI in place of traditional search engines. These tools derive their value from crawling the internet for up-to-date, relevant information—content that is often produced by news publishers.

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

## About the Tow Center

The Tow Center for Digital Journalism at Columbia's Graduate School of Journalism, a partner of CJR, is a research center exploring the ways in which technology is changing journalism, its practice and its consumption — as we seek new ways to judge the reliability, standards, and credibility of information online.

View other Tow articles »

Visit Tow Center website »
`,pl=`<!-- Generated by all2html --><!-- source: graph5 -->
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
<!-- End all2html -->`,dl=`<!-- Generated by all2html --><!-- source: graph4 -->
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
<!-- End all2html -->`,hl=`<!-- Generated by all2html --><!-- source: graph3 -->
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
<!-- End all2html -->`,gl=`<!-- Generated by all2html --><!-- source: graph2 -->
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
<!-- End all2html -->`,fl=`<!-- Generated by all2html --><!-- source: graphs-copy -->
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
<!-- End all2html -->`;var ul=x('<a rel="author" href="https://www.cjr.org/author/klaudia-jazwinska">Klaudia Jaźwińska</a> and <a rel="author" href="https://www.cjr.org/author/aisvarya-chandrasekar">Aisvarya Chandrasekar</a>',1),vl=x('<figure class="image-hero-box"><img class="image-hero" width="1600" height="704" alt="Static on a broken television screen"/> <figcaption class="image-hero-caption">Image: The rack of a broken monitor or TV is the texture of a television screen, background for superimposing with the effect of grain noise, Александр Розов. Adobe Stock 1050902471</figcaption></figure>'),ml=x('<aside class="republication svelte-1n46o8q" aria-label="Republication credit"><p class="svelte-1n46o8q">This article is republished from <cite></cite>.</p> <a class="svelte-1n46o8q">Read the original article</a></aside>'),yl=x('<h2 class="svelte-1n46o8q">Methodology</h2> <!>',1),wl=x('<h2 class="svelte-1n46o8q">Download our data</h2> <p><a href="https://github.com/TowCenter/genSearch-Part2">Download the study dataset and read the access instructions on GitHub</a>.</p>',1),bl=x('<h2 class="svelte-1n46o8q"> </h2>'),xl=x("<h3> </h3>"),_l=x("<li> </li>"),Al=x("<ul></ul>"),kl=x('<figure class="article-figure svelte-1n46o8q"><img loading="lazy" alt="" class="svelte-1n46o8q"/> <figcaption class="svelte-1n46o8q"> </figcaption></figure>'),Tl=x("<p><em> </em></p>"),Pl=x('<p class="lead-paragraph svelte-1n46o8q"> </p>'),Cl=x("<p><strong></strong> </p>"),zl=x('<figure class="findings-graphic svelte-1n46o8q" aria-label="Generative search tools were often confidently wrong in our study"></figure>'),El=x('<figure class="findings-graphic premium-graphic svelte-1n46o8q" aria-label="Response comparison for Perplexity and Grok models"></figure>'),Sl=x('<figure class="findings-graphic svelte-1n46o8q" aria-label="Crawler access and response accuracy"></figure>'),Ul=x('<figure class="findings-graphic citation-graphic svelte-1n46o8q" aria-label="Types of links cited by generative search tools"></figure>'),jl=x('<figure class="findings-graphic licensing-graphic svelte-1n46o8q" aria-label="Accuracy for AI platforms and publishers with licensing deals"></figure>'),Ml=x('<div class="study-table svelte-1n46o8q"><iframe title="Tow Center study data table" loading="lazy" class="svelte-1n46o8q"></iframe> <p class="svelte-1n46o8q"><a>Open the study data table in Airtable</a></p></div>'),Si=x("<!> <!>",1),Il=x("<!> <!> <!>",1),ql=x('<!> <main id="article" class="svelte-1n46o8q"><!></main> <!>',1);function Rl(e,t){tn(t,!1);const n="The generative search tools we tested had a common tendency to cite the wrong article",a=[{caption:"An example of Copilot declining",file:"copilot-decline.jpg",width:1486,height:1292},{caption:"An example of Gemini declining",file:"gemini-politics.jpg",width:1680,height:1146},{caption:"Despite having a partnership with the Texas Tribune, Perplexity cited an unofficial version",file:"perplexity-tribune.jpg",width:1988,height:988},{caption:"Although USA Today blocks ChatGPT’s crawler",file:"chatgpt-yahoo.jpg",width:1248,height:1108}],i="./graphics/article-figures/",r="https://airtable.com/embed/appg737s82fePQorq/shrSYddgl1MYeaxOH",s=pl.replace('src="graph5-artboard-1.png','src="./graphics/licensing-deals/graph5-artboard-1.png'),l=dl.replaceAll('src="graph4-lg.png','src="./graphics/citation-links/graph4-lg.png'),o=hl.replace('src="graph3-artboard-1.png','src="./graphics/crawler-access/graph3-artboard-1.png'),d=gl.replace('src="graph2-artboard-1.png','src="./graphics/premium-models/graph2-artboard-1.png'),h=fl.replaceAll('src="graphs-copy-','src="./graphics/confidently-wrong/graphs-copy-'),f="https://www.cjr.org/tow_center/we-compared-eight-ai-search-engines-theyre-all-bad-at-citing-news.php",m=cl.split("## About the Tow Center")[0].trim().split(/\r?\n(?:[ \t]*\r?\n)+/),g=m.indexOf("## Methodology"),v=m.findIndex((ve,re)=>re>g&&ve.startsWith("## ")),_=m.filter((ve,re)=>re<=g||re>=v),u=m.filter(ve=>ve.startsWith("## "));aa();var z=ql(),J=we(z);el(J,{});var ie=E(J,2),de=b(ie);oo(de,{children:(ve,re)=>{var Be=Il(),We=we(Be);ll(We,{hed:"AI Search Has a Citation Problem",subhed:"We compared eight AI search engines. They’re all bad at citing news.",date:"March 6, 2025",datetime:"2025-03-06",byline:Ce=>{var Ue=ul();w(Ce,Ue)},hero:Ce=>{var Ue=vl(),bt=b(Ue);F(()=>ne(bt,"src",i+"article-hero.jpg")),w(Ce,Ue)},children:(Ce,Ue)=>{sl(Ce,{})}});var me=E(We,2);co(me,{children:(Ze,Lt)=>{var Ce=Si(),Ue=we(Ce);{var bt=ot=>{var M=ml(),Qe=b(M),xt=E(b(Qe));xt.textContent="Columbia Journalism Review";var rn=E(Qe,2);ne(rn,"href",f),w(ot,M)};ge(Ue,ot=>{ot(bt)})}var an=E(Ue,2);Ae(an,1,()=>_,_e,(ot,M,Qe)=>{const xt=va(()=>a.find(A=>p(M).startsWith(A.caption)));var rn=At(),Pa=we(rn);{var ia=A=>{var C=yl(),L=we(C),$=E(L,2);{let I=va(()=>m.slice(g+1,v));Qo($,{get paragraphs(){return p(I)}})}F(I=>ne(L,"id",I),[()=>"section-"+(u.indexOf(p(M))+1)]),w(A,C)},Ca=A=>{var C=wl(),L=we(C);F($=>ne(L,"id",$),[()=>"section-"+(u.indexOf(p(M))+1)]),w(A,C)},za=A=>{var C=bl(),L=Q(C,!0);F(($,I)=>{ne(C,"id",$),Y(L,I)},[()=>"section-"+(u.indexOf(p(M))+1),()=>p(M).slice(3)]),w(A,C)},y=Z(()=>p(M).startsWith("## ")),k=A=>{var C=xl(),L=Q(C,!0);F($=>Y(L,$),[()=>p(M).slice(4)]),w(A,C)},T=Z(()=>p(M).startsWith("### ")),j=A=>{var C=Al();Ae(C,5,()=>p(M).split(/\r?\n/),_e,(L,$)=>{var I=_l(),se=Q(I,!0);F(he=>Y(se,he),[()=>p($).slice(2)]),w(L,I)}),w(A,C)},P=Z(()=>p(M).startsWith("- ")),D=A=>{var C=kl(),L=b(C),$=E(L,2),I=Q($,!0);F(()=>{ne(L,"src",i+p(xt).file),ne(L,"width",p(xt).width),ne(L,"height",p(xt).height),Y(I,p(M))}),w(A,C)},N=A=>{var C=Tl(),L=b(C),$=Q(L,!0);F(()=>Y($,p(M))),w(A,C)},H=A=>{var C=Pl(),L=Q(C,!0);F(()=>Y(L,p(M))),w(A,C)},K=A=>{var C=Si(),L=we(C);{var $=V=>{var oe=Cl(),He=b(oe);He.textContent="The generative search tools we tested had a common tendency to cite the wrong article";var ct=E(He,1,!0);F(Ft=>Y(ct,Ft),[()=>p(M).slice(n.length)]),w(V,oe)},I=Z(()=>p(M).startsWith(n)),se=V=>{ln(V,{get text(){return p(M)}})};ge(L,V=>{p(I)?V($):V(se,-1)})}var he=E(L,2);{var ze=V=>{var oe=zl();zn(oe,()=>h,!0),w(V,oe)},Re=Z(()=>p(M).startsWith("Overall, the chatbots often failed to retrieve the correct articles.")),le=V=>{var oe=El();zn(oe,()=>d,!0),w(V,oe)},Oe=Z(()=>p(M).startsWith("Premium models, such as Perplexity Pro")),$e=V=>{var oe=Sl();zn(oe,()=>o,!0),w(V,oe)},X=Z(()=>p(M).startsWith("We expected chatbots")),te=V=>{var oe=Ul();zn(oe,()=>l,!0),w(V,oe)},pe=Z(()=>p(M).startsWith(n+".")),ye=V=>{var oe=jl();zn(oe,()=>s,!0),w(V,oe)},lt=Z(()=>p(M).startsWith("A deal between AI companies and publishers often involves")),_t=V=>{var oe=Ml(),He=b(oe);ne(He,"src",r);var ct=E(He,2),Ft=b(ct);ne(Ft,"href",r),w(V,oe)},An=Z(()=>p(M).startsWith("When we asked whether the AI companies made any commitments"));ge(he,V=>{p(Re)?V(ze):p(Oe)?V(le,1):p(X)?V($e,2):p(pe)?V(te,3):p(lt)?V(ye,4):p(An)&&V(_t,5)})}w(A,C)};ge(Pa,A=>{Qe===g?A(ia):p(M)==="## Download our data"?A(Ca,1):p(y)?A(za,2):p(T)?A(k,3):p(P)?A(j,4):p(xt)?A(D,5):p(M)==="Kaylee Williams, Sarah Grevy Gotfredsen, and Dhrumil Mehta contributed to this report."?A(N,6):Qe===0?A(H,7):A(K,-1)})}w(ot,rn)}),w(Ze,Ce)}});var zt=E(me,2);il(zt,{}),w(ve,Be)}});var qe=E(ie,2);nl(qe,{}),w(e,z),nn()}Js(Rl,{target:document.getElementById("app")});
