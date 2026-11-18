var Wr=Object.defineProperty;var bi=e=>{throw TypeError(e)};var Br=(e,t,n)=>t in e?Wr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var V=(e,t,n)=>Br(e,typeof t!="symbol"?t+"":t,n),jn=(e,t,n)=>t.has(e)||bi("Cannot "+n);var o=(e,t,n)=>(jn(e,t,"read from private field"),n?n.call(e):t.get(e)),T=(e,t,n)=>t.has(e)?bi("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),_=(e,t,n,i)=>(jn(e,t,"write to private field"),i?i.call(e,n):t.set(e,n),n),b=(e,t,n)=>(jn(e,t,"access private method"),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();const Fi=!1;var Li=Array.isArray,Ur=Array.prototype.indexOf,Qt=Array.prototype.includes,In=Array.from,Di=Object.defineProperty,Ut=Object.getOwnPropertyDescriptor,Hi=Object.getOwnPropertyDescriptors,Kr=Object.prototype,Yr=Array.prototype,ci=Object.getPrototypeOf,xi=Object.isExtensible;const Vn=()=>{};function Vr(e){return e()}function Jn(e){for(var t=0;t<e.length;t++)e[t]()}function ji(){var e,t,n=new Promise((i,r)=>{e=i,t=r});return{promise:n,resolve:e,reject:t}}const Q=2,Zt=4,sn=8,Wi=1<<24,Te=16,Ce=32,Xe=64,Xn=128,hi=256,Pe=512,W=1024,M=2048,ge=4096,te=8192,X=16384,Gt=32768,bn=1<<25,ft=65536,xn=1<<17,Jr=1<<18,Ot=1<<19,Bi=1<<20,Re=1<<25,_n=1<<21,Tt=1<<22,Ve=1<<23,Kt=Symbol("$state"),Ui=Symbol("component"),Xr=Symbol(""),mn=Symbol("attributes"),Qn=Symbol("class"),Qr=Symbol("style"),Ft=Symbol("text"),on=new class extends Error{constructor(){super(...arguments);V(this,"name","StaleReactionError");V(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}},Zr=1,$r=2,Ki=4,ea=8,ta=16,na=1,ia=2,Yi={},H=Symbol("uninitialized"),Vi="http://www.w3.org/1999/xhtml",ra="http://www.w3.org/2000/svg",aa="http://www.w3.org/1998/Math/MathML";function sa(){console.warn("https://svelte.dev/e/derived_inert")}function oa(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Ji(e){return e===this.v}function la(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Xi(e){return!la(e,this.v)}function pa(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function ca(e,t,n){throw new Error("https://svelte.dev/e/each_key_duplicate")}function ha(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function ga(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function da(e){throw new Error("https://svelte.dev/e/effect_orphan")}function fa(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ua(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function va(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ma(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function ya(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let Mn=!1,wa=!1;function ba(){Mn=!0}let D=null;function Mt(e){D=e}function qn(e,t=!1,n){D={p:D,i:!1,c:null,e:null,s:e,x:null,r:C,l:Mn&&!t?{s:null,u:null,$:[]}:null}}function Rn(e){var t=D,n=t.e;if(n!==null){t.e=null;for(var i of n)mr(i)}return t.i=!0,D=t.p,Qi(e)}function Qi(e={}){return Di(e,Ui,{value:!0}),e}function ln(){return!Mn||D!==null&&D.l===null}let At=[];function xa(){var e=At;At=[],Jn(e)}function Ye(e){if(At.length===0){var t=At;queueMicrotask(()=>{t===At&&xa()})}At.push(e)}const _a=-7169;function N(e,t){e.f=e.f&_a|t}function gi(e){(e.f&Pe)!==0||e.deps===null?N(e,W):N(e,ge)}function Zi(e,t){(e.f&M)!==0?t.set(e,M):(e.f&ge)!==0&&t.get(e)!==M&&t.set(e,ge),N(e,W)}function Gn(e){var t=A,n=C;ye(null),ze(null);try{return e()}finally{ye(t),ze(n)}}function Aa(e,t,n,i){const r=ln()?On:Tn;var a=e.filter(g=>!g.settled),s=t.map(r);if(n.length===0&&a.length===0){i(s);return}var l=C,p=Ta(),c=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(g=>g.promise)):null;function h(g){if((l.f&X)===0){p();try{i([...s,...g])}catch(u){qe(u,l)}An()}}var d=$i();if(n.length===0){c.then(()=>h([])).finally(d);return}function v(){Promise.all(n.map(g=>ka(g))).then(h).catch(g=>qe(g,l)).finally(d)}c?c.then(()=>{if((l.f&X)!==0){d();return}p(),v(),An()}):v()}function Ta(){var e=C,t=A,n=D,i=x;return function(a=!0){ze(e),ye(t),Mt(n),a&&(e.f&X)===0&&(i==null||i.activate(),i==null||i.apply())}}function An(e=!0){ze(null),ye(null),Mt(null),e&&(x==null||x.deactivate())}function $i(){var e=C,t=e.b,n=x,i=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,n),n.increment(i,e),()=>{t==null||t.update_pending_count(-1,n),n.decrement(i,e)}}function On(e){var t=Q|M;return C!==null&&(C.f|=Ot),{ctx:D,deps:null,effects:null,equals:Ji,f:t,fn:e,reactions:null,rv:0,v:H,wv:0,parent:C,ac:null}}const Lt=Symbol("obsolete");function ka(e,t,n){let i=C;i===null&&pa();var r=void 0,a=vt(H),s=!A,l=new Set;return Da(()=>{var g,u;var p=C,c=ji();r=c.promise;try{Promise.resolve(e()).then(c.resolve,m=>{m!==on&&c.reject(m)}).finally(An)}catch(m){c.reject(m),An()}var h=x;if(s){if((p.f&Gt)!==0)var d=$i();if((g=i.b)!=null&&g.is_rendered())(u=h.async_deriveds.get(p))==null||u.reject(Lt);else for(const m of l.values())m.reject(Lt);l.add(c),h.async_deriveds.set(p,c)}const v=(m,f=void 0)=>{d==null||d(),l.delete(c),f!==Lt&&(h.activate(),f?(a.f|=Ve,qt(a,f)):((a.f&Ve)!==0&&(a.f^=Ve),qt(a,m)),h.deactivate())};c.promise.then(v,m=>v(null,m||"unknown"))}),Na(()=>{for(const p of l)p.reject(Lt)}),new Promise(p=>{function c(h){function d(){h===r?p(a):c(r)}h.then(d,d)}c(r)})}function it(e){const t=On(e);return Ar(t),t}function Tn(e){const t=On(e);return t.equals=Xi,t}function Pa(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)ae(t[n])}}function di(e){var t,n=C,i=e.parent;if(!Qe&&i!==null&&e.v!==H&&(i.f&(X|te))!==0)return sa(),e.v;ze(i);try{Pa(e),t=Cr(e)}finally{ze(n)}return t}function er(e){var t=di(e);if(!e.equals(t)&&(e.wv=kr(),(!(x!=null&&x.is_fork)||e.deps===null)&&(x!==null?(x.capture(e,t,!0),Yt==null||Yt.capture(e,t,!0)):e.v=t,e.deps===null))){N(e,W);return}Qe||(U!==null?(vi()||x!=null&&x.is_fork)&&U.set(e,t):gi(e))}function Ca(e){var t;if(e.effects!==null)for(const n of e.effects)(n.teardown||n.ac)&&((t=n.teardown)==null||t.call(n),n.ac!==null&&Gn(()=>{n.ac.abort(on),n.ac=null}),n.fn!==null&&(n.teardown=Vn),$t(n,0),mi(n))}function tr(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&Rt(t)}let Wn=null,xt=null,x=null,Yt=null,U=null,Zn=null,Bn=!1,Vt=null,yn=null;var _i=0;let Ea=1;var kt,Pt,Ct,Ne,Et,Fe,tn,Ee,Se,St,lt,k,$n,nr,ei,Dt,ti,ir,rr,ar,_t,Sa,Ht;const Cn=class Cn{constructor(){T(this,k);V(this,"id",Ea++);V(this,"started",!1);V(this,"linked",!0);V(this,"prev",null);V(this,"next",null);V(this,"async_deriveds",new Map);V(this,"current",new Map);V(this,"previous",new Map);T(this,kt,new Set);T(this,Pt,new Set);T(this,Ct,0);T(this,Ne,new Map);T(this,Et,null);T(this,Fe,[]);T(this,tn,[]);T(this,Ee,new Map);T(this,Se,new Map);T(this,St,new Set);V(this,"is_fork",!1);T(this,lt,!1);xt===null?Wn=xt=this:(xt.next=this,this.prev=xt),xt=this}skip_effect(t){o(this,Se).has(t)||o(this,Se).set(t,{d:[],m:[]}),o(this,St).delete(t)}unskip_effect(t,n=i=>this.schedule(i)){var i=o(this,Se).get(t);if(i){o(this,Se).delete(t);for(var r of i.d)N(r,M),n(r);for(r of i.m)N(r,ge),n(r)}o(this,St).add(t)}capture(t,n,i=!1){t.v!==H&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&Ve)===0&&(this.current.set(t,[n,i]),U==null||U.set(t,n)),this.is_fork||(t.v=n)}activate(){x=this}deactivate(){x=null,U=null}flush(){try{Bn=!0,x=this,b(this,k,Dt).call(this)}finally{_i=0,Zn=null,Vt=null,yn=null,Bn=!1,x=null,U=null,Ge.clear()}}discard(){var t;for(const n of o(this,Pt))n(this);o(this,Pt).clear();for(const n of this.async_deriveds.values())n.reject(Lt);b(this,k,Ht).call(this),(t=o(this,Et))==null||t.resolve()}register_created_effect(t){o(this,tn).push(t)}increment(t,n){if(_(this,Ct,o(this,Ct)+1),t){let i=o(this,Ne).get(n)??0;o(this,Ne).set(n,i+1)}}decrement(t,n){if(_(this,Ct,o(this,Ct)-1),t){let i=o(this,Ne).get(n)??0;i===1?o(this,Ne).delete(n):o(this,Ne).set(n,i-1)}o(this,lt)||(_(this,lt,!0),Ye(()=>{_(this,lt,!1),this.linked&&this.flush()}))}transfer_reactions(t){for(const[n,i]of t)this.add_dirty_reaction(n,i);t.clear()}add_dirty_reaction(t,n){(n===M||o(this,Ee).get(t)!==M)&&o(this,Ee).set(t,n)}oncommit(t){o(this,kt).add(t)}ondiscard(t){o(this,Pt).add(t)}settled(){return(o(this,Et)??_(this,Et,ji())).promise}static ensure(){if(x===null){const t=x=new Cn;Bn||Ye(()=>{t.started||t.flush()})}return x}apply(){{U=null;return}}schedule(t){var n;if(Zn=t,(n=t.b)!=null&&n.is_pending&&(t.f&(Zt|sn|Wi))!==0&&(t.f&Gt)===0){t.b.defer_effect(t);return}o(this,Fe).push(t)}};kt=new WeakMap,Pt=new WeakMap,Ct=new WeakMap,Ne=new WeakMap,Et=new WeakMap,Fe=new WeakMap,tn=new WeakMap,Ee=new WeakMap,Se=new WeakMap,St=new WeakMap,lt=new WeakMap,k=new WeakSet,$n=function(){if(this.is_fork)return!0;for(const t of o(this,Ne).keys())if(!b(this,k,nr).call(this,t))return!0;return!1},nr=function(t){for(var n=t;n!==null;n=n.parent)if(o(this,Se).has(n))return!0;return!1},ei=function(){var t=[];for(const a of o(this,Fe))if(!((a.f&X)!==0||(a.f&(M|ge))===0)){for(var n=a,i=!1;n.parent!==null;){n=n.parent;var r=n.f;if((r&(Xe|Ce))!==0){if((r&W)===0){i=!0;break}n.f^=W}}i||t.push(n)}return _(this,Fe,[]),t},Dt=function(){var l,p,c,h;this.started=!0;for(const[d,v]of o(this,Ee))N(d,v),this.schedule(d);this.apply();for(var t=Vt=[],n=[],i=yn=[];o(this,Fe).length>0;){_i++>1e3&&(b(this,k,Ht).call(this),Ia());for(const d of b(this,k,ei).call(this))try{b(this,k,ti).call(this,d,t,n)}catch(v){throw lr(d),b(this,k,$n).call(this)||this.discard(),v}}if(x=null,i.length>0){var r=Cn.ensure();for(const d of i)r.schedule(d)}if(Vt=null,yn=null,b(this,k,$n).call(this)){b(this,k,_t).call(this,n),b(this,k,_t).call(this,t);for(const[d,v]of o(this,Se))or(d,v);i.length>0&&b(l=x,k,Dt).call(l);return}const a=b(this,k,ir).call(this);if(a){b(this,k,_t).call(this,n),b(this,k,_t).call(this,t),b(p=a,k,ar).call(p,this);return}o(this,Ee).clear();for(const d of o(this,kt))d(this);o(this,kt).clear(),Yt=this,Ai(n),Ai(t),Yt=null,(c=o(this,Et))==null||c.resolve();var s=x;o(this,Ct)===0&&(o(this,Fe).length===0||s!==null)&&b(this,k,Ht).call(this),s!==null&&(Ge.clear(),b(h=s,k,Dt).call(h))},ti=function(t,n,i){t.f^=W;for(var r=t.first;r!==null;){var a=r.f,s=(a&(Ce|Xe))!==0,l=s&&(a&W)!==0,p=l||(a&te)!==0||o(this,Se).has(r);if(!p&&r.fn!==null){s?r.f^=W:(a&Zt)!==0?n.push(r):cn(r)&&((a&Te)!==0&&this.add_dirty_reaction(r,ge),Rt(r));var c=r.first;if(c!==null){r=c;continue}}for(;r!==null;){var h=r.next;if(h!==null){r=h;break}r=r.parent}}},ir=function(){for(var t=this.prev;t!==null;t=t.prev)if(!t.is_fork&&b(this,k,rr).call(this,t))return t;return null},rr=function(t){for(const[n,[,i]]of this.current)if(!i&&t.current.has(n))return!0;return!1},ar=function(t){var i;for(const[r,a]of t.current)!this.previous.has(r)&&t.previous.has(r)&&this.previous.set(r,t.previous.get(r)),this.current.set(r,a);for(const[r,a]of t.async_deriveds){const s=this.async_deriveds.get(r);s&&a.promise.then(s.resolve).catch(s.reject)}t.async_deriveds.clear(),this.transfer_reactions(o(t,Ee));const n=r=>{var a=r.reactions;if(a!==null&&!((r.f&Q)!==0&&(r.f&(M|ge))===0))for(const p of a){var s=p.f;if((s&Q)!==0)n(p);else{var l=p;s&(Tt|Te)&&!this.async_deriveds.has(l)&&(o(this,Ee).delete(l),N(l,M),this.schedule(l))}}};for(const r of this.current.keys())n(r);this.oncommit(()=>t.discard()),b(i=t,k,Ht).call(i),x=this,b(this,k,Dt).call(this)},_t=function(t){for(var n=0;n<t.length;n+=1)Zi(t[n],o(this,Ee))},Sa=function(){var d,v;for(let g=Wn;g!==null;g=g.next){var t=g.id<this.id,n=[];for(const[u,[m,f]]of this.current){if(g.current.has(u)){var i=g.current.get(u)[0];if(t&&m!==i)g.current.set(u,[m,f]);else continue}n.push(u)}if(t)for(const[u,m]of this.async_deriveds){const f=g.async_deriveds.get(u);f&&m.promise.then(f.resolve).catch(f.reject)}var r=[...g.current.keys()].filter(u=>!g.current.get(u)[1]);if(!(!g.started||r.length===0)){var a=r.filter(u=>!this.current.has(u));if(a.length===0)t&&g.discard();else if(n.length>0){if(t)for(const u of o(this,St))g.unskip_effect(u,m=>{var f;(m.f&(Te|Tt))!==0?g.schedule(m):b(f=g,k,_t).call(f,[m])});g.activate();var s=new Set,l=new Map;for(var p of n)sr(p,a,s,l);l=new Map;var c=[...g.current].filter(([u,m])=>{const f=this.current.get(u);return f?f[0]!==m[0]||f[1]!==m[1]:!0}).map(([u])=>u);if(c.length>0)for(const u of o(this,tn))(u.f&(X|te|xn))===0&&fi(u,c,l)&&((u.f&(Tt|Te))!==0?(N(u,M),g.schedule(u)):g.add_dirty_reaction(u,M));if(o(g,Fe).length>0&&!o(g,lt)){g.apply();for(var h of b(d=g,k,ei).call(d))b(v=g,k,ti).call(v,h,[],[])}g.deactivate()}}}},Ht=function(){if(this.linked){var t=this.prev,n=this.next;t===null?Wn=n:t.next=n,n===null?xt=t:n.prev=t,this.linked=!1}};let ut=Cn;function Ia(){try{fa()}catch(e){qe(e,Zn)}}let xe=null;function Ai(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var i=e[n++];if((i.f&(X|te))===0&&cn(i)&&(xe=new Set,Rt(i),i.deps===null&&i.first===null&&i.nodes===null&&i.teardown===null&&i.ac===null&&br(i),(xe==null?void 0:xe.size)>0)){Ge.clear();for(const r of xe){if((r.f&(X|te))!==0)continue;const a=[r];let s=r.parent;for(;s!==null;)xe.has(s)&&(xe.delete(s),a.push(s)),s=s.parent;for(let l=a.length-1;l>=0;l--){const p=a[l];(p.f&(X|te))===0&&Rt(p)}}xe.clear()}}xe=null}}function sr(e,t,n,i){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(const r of e.reactions){const a=r.f;(a&Q)!==0?sr(r,t,n,i):(a&(Tt|Te))!==0&&(a&M)===0&&fi(r,t,i)&&(N(r,M),ui(r))}}function fi(e,t,n){const i=n.get(e);if(i!==void 0)return i;if(e.deps!==null)for(const r of e.deps){if(Qt.call(t,r))return!0;if((r.f&Q)!==0&&fi(r,t,n))return n.set(r,!0),!0}return n.set(e,!1),!1}function ui(e){x.schedule(e)}function or(e,t){if(!((e.f&Ce)!==0&&(e.f&W)!==0)){(e.f&M)!==0?t.d.push(e):(e.f&ge)!==0&&t.m.push(e),N(e,W);for(var n=e.first;n!==null;)or(n,t),n=n.next}}function lr(e){N(e,W);for(var t=e.first;t!==null;)lr(t),t=t.next}let kn=new Set;const Ge=new Map;let pr=!1;function vt(e,t){var n={f:0,v:e,reactions:null,equals:Ji,rv:0,wv:0};return n}function We(e,t){const n=vt(e);return Ar(n),n}function Ma(e,t=!1,n=!0){var r;const i=vt(e);return t||(i.equals=Xi),Mn&&n&&D!==null&&D.l!==null&&((r=D.l).s??(r.s=[])).push(i),i}function at(e,t,n=!1){A!==null&&(!ke||(A.f&xn)!==0)&&ln()&&(A.f&(Q|Te|Tt|xn))!==0&&(Oe===null||!Oe.has(e))&&ma();let i=n?jt(t):t;return qt(e,i,yn)}var st=null,ni=0;function qt(e,t,n=null){if(!e.equals(t)){Qe?Ge.set(e,t):Ge.has(e)||Ge.set(e,e.v);var i=ut.ensure();if(i.capture(e,t),(e.f&Q)!==0){const r=e;(e.f&M)!==0&&di(r),U===null&&gi(r)}e.wv=kr(),st=null,ni=0,cr(e,M,n),st=null,ln()&&C!==null&&(C.f&W)!==0&&(C.f&(Ce|Xe))===0&&(fe===null?Wa([e]):fe.push(e)),!i.is_fork&&kn.size>0&&!pr&&qa()}return t}function qa(){pr=!1;for(const e of kn){(e.f&W)!==0&&N(e,ge);let t;try{t=cn(e)}catch{t=!0}t&&Rt(e)}kn.clear()}function Jt(e){at(e,e.v+1)}function cr(e,t,n){var i=e.reactions;if(i!==null){var r=ln(),a=i.length;if(ni+=a,ni>1e5&&st===null&&(st=new Set),st!==null){if(st.has(e))return;st.add(e)}for(var s=0;s<a;s++){var l=i[s],p=l.f;if(!(!r&&l===C)){var c=(p&M)===0;if(c&&N(l,t),(p&xn)!==0)kn.add(l);else if((p&Q)!==0){var h=l;U==null||U.delete(h),cr(h,ge,n)}else if(c){var d=l;(p&Te)!==0&&xe!==null&&xe.add(d),n!==null?n.push(d):ui(d)}}}}}function jt(e){if(typeof e!="object"||e===null||Kt in e||Ui in e)return e;const t=ci(e);if(t!==Kr&&t!==Yr)return e;var n=new Map,i=Li(e),r=We(0),a=dt,s=l=>{if(dt===a)return l();var p=A,c=dt;ye(null),Ci(a);var h=l();return ye(p),Ci(c),h};return i&&n.set("length",We(e.length)),new Proxy(e,{defineProperty(l,p,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&ua();var h=n.get(p);return h===void 0?s(()=>{var d=We(c.value);return n.set(p,d),d}):at(h,c.value,!0),!0},deleteProperty(l,p){var c=n.get(p);if(c===void 0){if(p in l){const h=s(()=>We(H));n.set(p,h),Jt(r)}}else at(c,H),Jt(r);return!0},get(l,p,c){var g;if(p===Kt)return e;var h=n.get(p),d=p in l;if(h===void 0&&(!d||(g=Ut(l,p))!=null&&g.writable)&&(h=s(()=>{var u=jt(d?l[p]:H),m=We(u);return m}),n.set(p,h)),h!==void 0){var v=y(h);return v===H?void 0:v}return Reflect.get(l,p,c)},getOwnPropertyDescriptor(l,p){var v;(v=this.has)==null||v.call(this,l,p);var c=Reflect.getOwnPropertyDescriptor(l,p),h=n.get(p);if(h!==void 0){var d=y(h);if(d===H)return;if(c&&"value"in c)c.value=d;else return{enumerable:!0,configurable:!0,value:d,writable:!0}}return c},has(l,p){var v;if(p===Kt)return!0;var c=n.get(p),h=c!==void 0&&c.v!==H||Reflect.has(l,p);if(c!==void 0||(C!==null||A!==null)&&(!h||(v=Ut(l,p))!=null&&v.writable)){c===void 0&&(c=s(()=>{var g=h?jt(l[p]):H,u=We(g);return u}),n.set(p,c));var d=y(c);if(d===H)return!1}return h},set(l,p,c,h){var F;var d=n.get(p),v=p in l;if(i&&p==="length")for(var g=c;g<d.v;g+=1){var u=n.get(g+"");u!==void 0?at(u,H):g in l&&(u=s(()=>We(H)),n.set(g+"",u))}if(d===void 0)(!v||(F=Ut(l,p))!=null&&F.writable)&&(d=s(()=>We(void 0)),at(d,jt(c)),n.set(p,d));else{v=d.v!==H;var m=s(()=>jt(c));at(d,m)}var f=Reflect.getOwnPropertyDescriptor(l,p);if(f!=null&&f.set&&f.set.call(h,c),!v){if(i&&typeof p=="string"){var w=n.get("length"),q=Number(p);Number.isInteger(q)&&q>=w.v&&at(w,q+1)}Jt(r)}return!0},ownKeys(l){y(r);var p=Reflect.ownKeys(l).filter(d=>{var v=n.get(d);return v===void 0||v.v!==H});for(var[c,h]of n)h.v!==H&&!(c in l)&&p.push(c);return p},setPrototypeOf(){va()}})}var Ti,hr,gr,dr;function Ra(){if(Ti===void 0){Ti=window,hr=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;gr=Ut(t,"firstChild").get,dr=Ut(t,"nextSibling").get,xi(e)&&(e[Qn]=void 0,e[mn]=null,e[Qr]=void 0,e.__e=void 0),xi(n)&&(n[Ft]=void 0)}}function Je(e=""){return document.createTextNode(e)}function De(e){return gr.call(e)}function pn(e){return dr.call(e)}function O(e,t){return De(e)}function rt(e,t=!1){{var n=De(e);return n instanceof Comment&&n.data===""?pn(n):n}}function ie(e,t=!1){return De(e)}function j(e,t=1,n=!1){let i=e;for(;t--;)i=pn(i);return i}function Ga(e){e.textContent=""}function fr(){return!1}function ur(e,t,n){return t==null||t===Vi?n?document.createElement(e,{is:n}):document.createElement(e):n?document.createElementNS(t,e,{is:n}):document.createElementNS(t,e)}function Oa(e){var t=C;if(t===null)return A.f|=Ve,e;if((t.f&Gt)===0&&(t.f&Zt)===0)throw e;qe(e,t)}function qe(e,t){if(e===Yi)throw e;if(!(t!==null&&(t.f&X)!==0)){for(;t!==null;){if((t.f&Xn)!==0&&(t.f&(X|bn))===0){if((t.f&Gt)===0)throw e;try{t.b.error(e);return}catch(n){e=n}}t=t.parent}throw e}}function vr(e){C===null&&(A===null&&da(),ga()),Qe&&ha()}function za(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function He(e,t){var n=C;n!==null&&(n.f&te)!==0&&(e|=te);var i={ctx:D,deps:null,nodes:null,f:e|M|Pe,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};x==null||x.register_created_effect(i);var r=i;if((e&Zt)!==0)Vt!==null?Vt.push(i):ut.ensure().schedule(i);else if(t!==null){try{Rt(i)}catch(s){throw ae(i),s}r.deps===null&&r.teardown===null&&r.nodes===null&&r.first===r.last&&(r.f&Ot)===0&&(r=r.first,(e&Te)!==0&&(e&ft)!==0&&r!==null&&(r.f|=ft))}if(r!==null&&(r.parent=n,n!==null&&za(r,n),A!==null&&(A.f&Q)!==0&&(e&Xe)===0)){var a=A;(a.effects??(a.effects=[])).push(r)}return i}function vi(){return A!==null&&!ke}function Na(e){const t=He(sn,null);return N(t,W),t.teardown=e,t}function ki(e){vr();var t=C.f,n=!A&&(t&Ce)!==0&&D!==null&&!D.i;if(n){var i=D;(i.e??(i.e=[])).push(e)}else return mr(e)}function mr(e){return He(Zt|Bi,e)}function Fa(e){return vr(),He(sn|Bi,e)}function La(e){ut.ensure();const t=He(Xe|Ot,e);return(n={})=>new Promise(i=>{n.outro?gt(t,()=>{ae(t),i(void 0)}):(ae(t),i(void 0))})}function Da(e){return He(Tt|Ot,e)}function Ha(e,t=0){return He(sn|t,e)}function B(e,t=[],n=[],i=[]){Aa(i,t,n,r=>{He(sn,()=>{e(...r.map(y))})})}function zn(e,t=0){var n=He(Te|t,e);return n}function me(e){return He(Ce|Ot,e)}function yr(e){var t=e.teardown;if(t!==null){const n=Qe,i=A;Pi(!0),ye(null);try{t.call(null)}catch(r){qe(r,e.parent)}finally{Pi(n),ye(i)}}}function mi(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const r=n.ac;r!==null&&Gn(()=>{r.abort(on)});var i=n.next;(n.f&Xe)!==0?n.parent=null:ae(n,t),n=i}}function ja(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&Ce)===0&&ae(t),t=n}}function ae(e,t=!0){var n=!1;(t||(e.f&Jr)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(wr(e.nodes.start,e.nodes.end),n=!0),e.f|=bn,mi(e,t&&!n),$t(e,0);var i=e.nodes&&e.nodes.t;if(i!==null)for(const a of i)a.stop();yr(e),e.f^=bn,e.f|=X;var r=e.parent;r!==null&&r.first!==null&&br(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function wr(e,t){for(;e!==null;){var n=e===t?null:pn(e);e.remove(),e=n}}function br(e){var t=e.parent,n=e.prev,i=e.next;n!==null&&(n.next=i),i!==null&&(i.prev=n),t!==null&&(t.first===e&&(t.first=i),t.last===e&&(t.last=n))}function gt(e,t,n=!0){var i=[];e.f|=hi,xr(e,i,!0);var r=()=>{n&&ae(e),t&&t()},a=i.length;if(a>0){var s=()=>--a||r();for(var l of i)l.out(s)}else r()}function xr(e,t,n){if((e.f&te)===0){e.f^=te;var i=e.nodes&&e.nodes.t;if(i!==null)for(const l of i)(l.is_global||n)&&t.push(l);for(var r=e.first;r!==null;){var a=r.next;if((r.f&Xe)===0){var s=(r.f&ft)!==0||(r.f&Ce)!==0&&(e.f&Te)!==0;xr(r,t,s?n:!1)}r=a}}}function Pn(e){e.f&=~hi,_r(e,!0)}function _r(e,t){if((e.f&hi)===0&&(e.f&te)!==0){e.f^=te,(e.f&W)===0&&(N(e,M),ut.ensure().schedule(e));for(var n=e.first;n!==null;){var i=n.next,r=(n.f&ft)!==0||(n.f&Ce)!==0;_r(n,r?t:!1),n=i}var a=e.nodes&&e.nodes.t;if(a!==null)for(const s of a)(s.is_global||t)&&s.in()}}function yi(e,t){if(e.nodes)for(var n=e.nodes.start,i=e.nodes.end;n!==null;){var r=n===i?null:pn(n);t.append(n),n=r}}let Qe=!1;function Pi(e){Qe=e}let A=null,ke=!1;function ye(e){A=e}let C=null;function ze(e){C=e}let Oe=null;function Ar(e){A!==null&&((A.f&_n)!==0||(A.f&Q)!==0)&&(Oe??(Oe=new Set)).add(e)}let re=null,he=0,fe=null;function Wa(e){fe=e}let Tr=1,ot=0,dt=ot;function Ci(e){dt=e}function kr(){return++Tr}function cn(e){var t=e.f;if((t&M)!==0)return!0;if((t&ge)!==0){for(var n=e.deps,i=n.length,r=0;r<i;r++){var a=n[r];if(cn(a)&&er(a),a.wv>e.wv)return!0}(t&Pe)!==0&&U===null&&N(e,W)}return!1}function Pr(e,t,n=!0){var i=e.reactions;if(i!==null&&!(Oe!==null&&Oe.has(e)))for(var r=0;r<i.length;r++){var a=i[r];(a.f&Q)!==0?Pr(a,t,!1):t===a&&(n?N(a,M):(a.f&W)!==0&&N(a,ge),ui(a))}}function Cr(e){var t=re,n=he,i=fe,r=A,a=Oe,s=D,l=ke,p=dt,c=e.f;re=null,he=0,fe=null,A=(c&(Ce|Xe))===0?e:null,Oe=null,Mt(e.ctx),ke=!1,dt=++ot,e.ac!==null&&(Gn(()=>{e.ac.abort(on)}),e.ac=null);try{e.f|=_n;var h=e.fn,d=h();e.f|=Gt;var v=Ei(e);if(ln()&&fe!==null&&!ke&&v!==null&&(e.f&(Q|ge|M))===0)for(var g=0;g<fe.length;g++)Pr(fe[g],e);if(r!==null&&r!==e){if(ot++,r.deps!==null)for(let u=0;u<n;u+=1)r.deps[u].rv=ot;if(t!==null)for(const u of t)u.rv=ot;fe!==null&&(i===null?i=fe:i.push(...fe))}return(e.f&Ve)!==0&&(e.f^=Ve),d}catch(u){return Ei(e),Oa(u)}finally{e.f^=_n,re=t,he=n,fe=i,A=r,Oe=a,Mt(s),ke=l,dt=p}}function Ei(e){var r;var t=e.deps,n=x==null?void 0:x.is_fork;if(re!==null){var i;if(n||$t(e,he),t!==null&&he>0)for(t.length=he+re.length,i=0;i<re.length;i++)t[he+i]=re[i];else e.deps=t=re;if(vi()&&(e.f&Pe)!==0)for(i=he;i<t.length;i++)((r=t[i]).reactions??(r.reactions=[])).push(e)}else!n&&t!==null&&he<t.length&&($t(e,he),t.length=he);return t}function Ba(e,t){let n=t.reactions;if(n!==null){var i=Ur.call(n,e);if(i!==-1){var r=n.length-1;r===0?n=t.reactions=null:(n[i]=n[r],n.pop())}}if(n===null&&(t.f&Q)!==0&&(re===null||!Qt.call(re,t))){var a=t;(a.f&Pe)!==0&&(a.f^=Pe),a.v!==H&&gi(a),a.ac!==null&&Gn(()=>{a.ac.abort(on),a.ac=null,N(a,M)}),Ca(a),$t(a,0)}}function $t(e,t){var n=e.deps;if(n!==null)for(var i=t;i<n.length;i++)Ba(e,n[i])}function Rt(e){var t=e.f;if((t&X)===0){N(e,W);var n=C;C=e;try{(t&(Te|Wi))!==0?ja(e):mi(e),yr(e);var i=Cr(e);e.teardown=typeof i=="function"?i:null,e.wv=Tr;var r;Fi&&wa&&(e.f&M)!==0&&e.deps}finally{C=n}}}function y(e){var t=e.f,n=(t&Q)!==0;if(A!==null&&!ke){var i=C!==null&&(C.f&X)!==0;if(!i&&(Oe===null||!Oe.has(e))){var r=A.deps;if((A.f&_n)!==0)e.rv<ot&&(e.rv=ot,re===null&&r!==null&&r[he]===e?he++:re===null?re=[e]:re.push(e));else{A.deps??(A.deps=[]),Qt.call(A.deps,e)||A.deps.push(e);var a=e.reactions;a===null?e.reactions=[A]:Qt.call(a,A)||a.push(A)}}}if(Qe&&Ge.has(e))return Ge.get(e);if(n){var s=e;if(Qe){var l=s.v;return((s.f&W)===0&&s.reactions!==null||Sr(s))&&(l=di(s)),Ge.set(s,l),l}var p=(s.f&Pe)===0&&!ke&&A!==null&&(A.f&Pe)!==0,c=(s.f&Gt)===0;cn(s)&&(p&&(s.f|=Pe),er(s)),p&&!c&&(tr(s),Er(s))}if(U!=null&&U.has(e))return U.get(e);if((e.f&Ve)!==0)throw e.v;return e.v}function Er(e){if(e.f|=Pe,e.deps!==null)for(const n of e.deps){var t=n.reactions;t===null?n.reactions=[e]:Qt.call(t,e)||t.push(e),(n.f&Q)!==0&&(n.f&Pe)===0&&(tr(n),Er(n))}}function Sr(e){if(e.v===H)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Ge.has(t)||(t.f&Q)!==0&&Sr(t))return!0;return!1}function Ir(e){var t=ke;try{return ke=!0,e()}finally{ke=t}}function Ua(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Kt in e)ii(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&Kt in n&&ii(n)}}}function ii(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let i in e)try{ii(e[i],t)}catch{}const n=ci(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const i=Hi(n);for(let r in i){const a=i[r].get;if(a)try{a.call(e)}catch{}}}}}const Ka=["touchstart","touchmove"];function Ya(e){return Ka.includes(e)}const fn=Symbol("events"),Va=new Set,Si=new Set;let Un=null,Kn=!1;function Ii(e){var m,f;var t=this,n=t.ownerDocument,i=e.type,r=((m=e.composedPath)==null?void 0:m.call(e))||[],a=r[0]||e.target;Un=e,Kn||(Kn=!0,setTimeout(()=>{Kn=!1,Un=null}));var s=0,l=Un===e&&e[fn];if(l){var p=r.indexOf(l);if(p!==-1&&(t===document||t===window)){e[fn]=t;return}var c=r.indexOf(t);if(c===-1)return;p<=c&&(s=p)}if(a=r[s]||e.target,a!==t){Di(e,"currentTarget",{configurable:!0,get(){return a||n}});var h=A,d=C;ye(null),ze(null);try{for(var v,g=[];a!==null&&a!==t;){try{var u=(f=a[fn])==null?void 0:f[i];u!=null&&(!a.disabled||e.target===a)&&u.call(a,e)}catch(w){v?g.push(w):v=w}if(e.cancelBubble)break;s++,a=s<r.length?r[s]:null}if(v){for(let w of g)queueMicrotask(()=>{throw w});throw v}}finally{e[fn]=t,delete e.currentTarget,ye(h),ze(d)}}}var zi;const Yn=((zi=globalThis==null?void 0:globalThis.window)==null?void 0:zi.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function Ja(e){return(Yn==null?void 0:Yn.createHTML(e))??e}function Xa(e){var t=ur("template");return t.innerHTML=Ja(e.replaceAll("<!>","<!---->")),t.content}function en(e,t){var n=C;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function I(e,t){var n=(t&na)!==0,i=(t&ia)!==0,r,a=!e.startsWith("<!>");return()=>{r===void 0&&(r=Xa(a?e:"<!>"+e),n||(r=De(r)));var s=i||hr?document.importNode(r,!0):r.cloneNode(!0);if(n){var l=De(s),p=s.lastChild;en(l,p)}else en(s,s);return s}}function Qa(){var e=document.createDocumentFragment(),t=document.createComment(""),n=Je();return e.append(t,n),en(t,n),e}function S(e,t){e!==null&&e.before(t)}function Za(e){let t=0,n=vt(0),i;return()=>{vi()&&(y(n),Ha(()=>(t===0&&(i=Ir(()=>e(()=>Jt(n)))),t+=1,()=>{Ye(()=>{t-=1,t===0&&(i==null||i(),i=void 0,Jt(n))})})))}}var $a=ft|Ot;function es(e,t,n,i){new ts(e,t,n,i)}var ue,pi,ve,pt,J,le,ee,pe,Ie,ct,Ke,It,nn,Le,En,P,ns,is,ri,Ue,rs,ai,Wt,wn,si,oi;class ts{constructor(t,n,i,r){T(this,P);V(this,"parent");V(this,"is_pending",!1);V(this,"transform_error");T(this,ue);T(this,pi,null);T(this,ve);T(this,pt);T(this,J);T(this,le,null);T(this,ee,null);T(this,pe,null);T(this,Ie,null);T(this,ct,0);T(this,Ke,0);T(this,It,!1);T(this,nn,new Map);T(this,Le,null);T(this,En,Za(()=>(_(this,Le,vt(o(this,ct))),()=>{_(this,Le,null)})));var a;_(this,ue,t),_(this,ve,n),_(this,pt,s=>{var l=C;l.b=this,l.f|=Xn,i(s)}),this.parent=C.b,this.transform_error=r??((a=this.parent)==null?void 0:a.transform_error)??(s=>s),_(this,J,zn(()=>{b(this,P,ai).call(this)},$a))}defer_effect(t){Zi(t,o(this,nn))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!o(this,ve).pending}update_pending_count(t,n){b(this,P,si).call(this,t,n),_(this,ct,o(this,ct)+t),!(!o(this,Le)||o(this,It))&&(_(this,It,!0),Ye(()=>{_(this,It,!1),o(this,Le)&&qt(o(this,Le),o(this,ct))}))}get_effect_pending(){return o(this,En).call(this),y(o(this,Le))}error(t){if(t===Yi||!o(this,ve).onerror&&!o(this,ve).failed)throw t;x!=null&&x.is_fork?(o(this,le)&&x.skip_effect(o(this,le)),o(this,ee)&&x.skip_effect(o(this,ee)),o(this,pe)&&x.skip_effect(o(this,pe)),x.oncommit(()=>{b(this,P,Ue).call(this)||b(this,P,oi).call(this,t)})):b(this,P,oi).call(this,t)}}ue=new WeakMap,pi=new WeakMap,ve=new WeakMap,pt=new WeakMap,J=new WeakMap,le=new WeakMap,ee=new WeakMap,pe=new WeakMap,Ie=new WeakMap,ct=new WeakMap,Ke=new WeakMap,It=new WeakMap,nn=new WeakMap,Le=new WeakMap,En=new WeakMap,P=new WeakSet,ns=function(){try{_(this,le,me(()=>o(this,pt).call(this,o(this,ue))))}catch(t){this.error(t)}},is=function(t){const n=o(this,ve).failed,{reset:i,invoke_onerror:r}=b(this,P,ri).call(this,t);Ye(r),n&&_(this,pe,me(()=>{n(o(this,ue),()=>t,()=>i)}))},ri=function(t){var n=!1,i=!1;const r=()=>{if(!b(this,P,Ue).call(this)){if(n){oa();return}n=!0,i&&ya(),o(this,pe)!==null&&gt(o(this,pe),()=>{_(this,pe,null)}),b(this,P,wn).call(this,()=>{b(this,P,ai).call(this)})}};return{reset:r,invoke_onerror:()=>{var s,l;if(!b(this,P,Ue).call(this))try{i=!0,(l=(s=o(this,ve)).onerror)==null||l.call(s,t,r),i=!1}catch(p){qe(p,o(this,J)&&o(this,J).parent)}}}},Ue=function(){return(o(this,J).f&(X|bn))!==0},rs=function(){const t=o(this,ve).pending;t&&(this.is_pending=!0,_(this,ee,me(()=>t(o(this,ue)))),Ye(()=>{if(!b(this,P,Ue).call(this)){var n=_(this,Ie,document.createDocumentFragment()),i=Je(),r=!1;if(n.append(i),_(this,le,b(this,P,wn).call(this,()=>{try{return me(()=>o(this,pt).call(this,i))}catch(a){try{this.error(a),r=!0}catch(s){qe(s,o(this,J).parent)}return null}})),o(this,le)===null){_(this,Ie,null),r&&b(this,P,Wt).call(this,x);return}o(this,Ke)===0&&(o(this,ue).before(n),_(this,Ie,null),gt(o(this,ee),()=>{_(this,ee,null)}),b(this,P,Wt).call(this,x))}}))},ai=function(){try{if(this.is_pending=this.has_pending_snippet(),_(this,Ke,0),_(this,ct,0),_(this,le,me(()=>{o(this,pt).call(this,o(this,ue))})),o(this,Ke)>0){var t=_(this,Ie,document.createDocumentFragment());yi(o(this,le),t);const n=o(this,ve).pending;_(this,ee,me(()=>n(o(this,ue))))}else b(this,P,Wt).call(this,x)}catch(n){this.error(n)}},Wt=function(t){this.is_pending=!1,t.transfer_reactions(o(this,nn))},wn=function(t){var n=C,i=A,r=D;ze(o(this,J)),ye(o(this,J)),Mt(o(this,J).ctx);try{return ut.ensure(),t()}finally{ze(n),ye(i),Mt(r)}},si=function(t,n){var i;if(!this.has_pending_snippet()){this.parent&&b(i=this.parent,P,si).call(i,t,n);return}_(this,Ke,o(this,Ke)+t),o(this,Ke)===0&&(b(this,P,Wt).call(this,n),o(this,ee)&&gt(o(this,ee),()=>{_(this,ee,null)}),o(this,Ie)&&(o(this,ue).before(o(this,Ie)),_(this,Ie,null)))},oi=function(t){o(this,le)&&(ae(o(this,le)),_(this,le,null)),o(this,ee)&&(ae(o(this,ee)),_(this,ee,null)),o(this,pe)&&(ae(o(this,pe)),_(this,pe,null));let n=o(this,ve).failed;const i=r=>{if(b(this,P,Ue).call(this))return;const{reset:a,invoke_onerror:s}=b(this,P,ri).call(this,r);s(),n&&!b(this,P,Ue).call(this)&&_(this,pe,b(this,P,wn).call(this,()=>{try{return me(()=>{var l=C;l.b=this,l.f|=Xn,n(o(this,ue),()=>r,()=>a)})}catch(l){return qe(l,o(this,J).parent),null}}))};Ye(()=>{if(!b(this,P,Ue).call(this)){var r;try{r=this.transform_error(t)}catch(a){qe(a,o(this,J)&&o(this,J).parent);return}r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(i,a=>qe(a,o(this,J)&&o(this,J).parent)):i(r)}})};function Ae(e,t){var n=t==null?"":typeof t=="object"?`${t}`:t;n!==(e[Ft]??(e[Ft]=e.nodeValue))&&(e[Ft]=n,e.nodeValue=`${n}`)}function as(e,t){return ss(e,t)}const un=new Map;function ss(e,{target:t,anchor:n,props:i={},events:r,context:a,intro:s=!0,transformError:l}){Ra();var p=void 0,c=La(()=>{var h=n??t.appendChild(Je());es(h,{pending:()=>{}},g=>{qn({});var u=D;a&&(u.c=a),r&&(i.$$events=r),p=e(g,i)||Qi(),Rn()},l);var d=new Set,v=g=>{for(var u=0;u<g.length;u++){var m=g[u];if(!d.has(m)){d.add(m);var f=Ya(m);for(const F of[t,document]){var w=un.get(F);w===void 0&&(w=new Map,un.set(F,w));var q=w.get(m);q===void 0?(F.addEventListener(m,Ii,{passive:f}),w.set(m,1)):w.set(m,q+1)}}}};return v(In(Va)),Si.add(v),()=>{var f;for(var g of d)for(const w of[t,document]){var u=un.get(w),m=u.get(g);--m==0?(w.removeEventListener(g,Ii),u.delete(g),u.size===0&&un.delete(w)):u.set(g,m)}Si.delete(v),h!==n&&((f=h.parentNode)==null||f.removeChild(h))}});return os.set(p,c),p}let os=new WeakMap;var _e,Me,ce,ht,rn,an,Sn;class Mr{constructor(t,n=!0){V(this,"anchor");T(this,_e,new Map);T(this,Me,new Map);T(this,ce,new Map);T(this,ht,new Set);T(this,rn,!0);T(this,an,t=>{if(o(this,_e).has(t)){var n=o(this,_e).get(t),i=o(this,Me).get(n);if(i)Pn(i),o(this,ht).delete(n);else{var r=o(this,ce).get(n);r&&(Pn(r.effect),o(this,Me).set(n,r.effect),o(this,ce).delete(n),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),i=r.effect)}for(const[a,s]of o(this,_e)){if(o(this,_e).delete(a),a===t)break;const l=o(this,ce).get(s);l&&(ae(l.effect),o(this,ce).delete(s))}for(const[a,s]of o(this,Me)){if(a===n||o(this,ht).has(a))continue;const l=()=>{if(Array.from(o(this,_e).values()).includes(a)){var c=document.createDocumentFragment();yi(s,c),c.append(Je()),o(this,ce).set(a,{effect:s,fragment:c})}else ae(s);o(this,ht).delete(a),o(this,Me).delete(a)};o(this,rn)||!i?(o(this,ht).add(a),gt(s,l,!1)):l()}}});T(this,Sn,t=>{o(this,_e).delete(t);const n=Array.from(o(this,_e).values());for(const[i,r]of o(this,ce))n.includes(i)||(ae(r.effect),o(this,ce).delete(i))});this.anchor=t,_(this,rn,n)}ensure(t,n){var i=x,r=fr();if(n&&!o(this,Me).has(t)&&!o(this,ce).has(t))if(r){var a=document.createDocumentFragment(),s=Je();a.append(s),o(this,ce).set(t,{effect:me(()=>n(s)),fragment:a})}else o(this,Me).set(t,me(()=>n(this.anchor)));if(o(this,_e).set(i,t),r){for(const[l,p]of o(this,Me))l===t?i.unskip_effect(p):i.skip_effect(p);for(const[l,p]of o(this,ce))l===t?i.unskip_effect(p.effect):i.skip_effect(p.effect);i.oncommit(o(this,an)),i.ondiscard(o(this,Sn))}else o(this,an).call(this,i)}}_e=new WeakMap,Me=new WeakMap,ce=new WeakMap,ht=new WeakMap,rn=new WeakMap,an=new WeakMap,Sn=new WeakMap;function vn(e,t,n=!1){var i=new Mr(e),r=n?ft:0;function a(s,l){i.ensure(s,l)}zn(()=>{var s=!1;t((l,p=0)=>{s=!0,a(p,l)}),s||a(-1,null)},r)}function Mi(e,t){return t}function ls(e,t,n){for(var i=[],r=t.length,a,s=t.length,l=0;l<r;l++){let d=t[l];gt(d,()=>{if(a){if(a.pending.delete(d),a.done.add(d),a.pending.size===0){var v=e.outrogroups;li(e,In(a.done)),v.delete(a),v.size===0&&(e.outrogroups=null)}}else s-=1},!1)}if(s===0){var p=i.length===0&&n!==null&&e.pending.size===0;if(p){var c=n,h=c.parentNode;Ga(h),h.append(c),e.items.clear()}li(e,t,!p)}else a={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(a)}function li(e,t,n=!0){var i;if(e.pending.size>0){i=new Set;for(const s of e.pending.values())for(const l of s)i.add(e.items.get(l).e)}for(var r=0;r<t.length;r++){var a=t[r];if(i!=null&&i.has(a)){a.f|=Re;const s=document.createDocumentFragment();yi(a,s)}else ae(t[r],n)}}var qi;function Ri(e,t,n,i,r,a=null){var s=e,l=new Map,p=(t&Ki)!==0;if(p){var c=e;s=c.appendChild(Je())}var h=null,d=Tn(()=>{var q=n();return Li(q)?q:q==null?[]:In(q)}),v=new Map,g=!0;function u(q){if((w.effect.f&X)===0){w.pending.delete(q);var F=y(d);w.fallback=h,ps(w,F,s,t,i),h!==null&&(F.length===0?(h.f&Re)===0?Pn(h):(h.f^=Re,Bt(h,null,s)):gt(h,()=>{h=null}))}}function m(q){w.pending.delete(q)}var f=zn(()=>{for(var q=y(d),F=q.length,K=new Set,we=x,Z=fr(),z=0;z<F;z+=1){var de=q[z],je=i(de,z),ne=g?null:l.get(je);ne?(ne.v&&qt(ne.v,de),ne.i&&qt(ne.i,z),Z&&we.unskip_effect(ne.e)):(ne=cs(l,g?s:qi??(qi=Je()),de,je,z,r,t,n),g||(ne.e.f|=Re),l.set(je,ne)),K.add(je)}if(F===0&&a&&!h&&(g?h=me(()=>a(s)):(h=me(()=>a(qi??(qi=Je()))),h.f|=Re)),F>K.size&&ca(),!g)if(v.set(we,K),Z){for(const[mt,yt]of l)K.has(mt)||we.skip_effect(yt.e);we.oncommit(u),we.ondiscard(m)}else u(we);y(d)}),w={effect:f,items:l,pending:v,outrogroups:null,fallback:h};g=!1}function Nt(e){for(;e!==null&&(e.f&Ce)===0;)e=e.next;return e}function ps(e,t,n,i,r){var ne,mt,yt,R,hn,Ze,$e,zt,gn;var a=(i&ea)!==0,s=t.length,l=e.items,p=Nt(e.effect.first),c,h=null,d,v=[],g=[],u,m,f,w;if(a)for(w=0;w<s;w+=1)u=t[w],m=r(u,w),f=l.get(m).e,(f.f&Re)===0&&((mt=(ne=f.nodes)==null?void 0:ne.a)==null||mt.measure(),(d??(d=new Set)).add(f));for(w=0;w<s;w+=1){if(u=t[w],m=r(u,w),f=l.get(m).e,e.outrogroups!==null)for(const be of e.outrogroups)be.pending.delete(f),be.done.delete(f);if((f.f&te)!==0&&(Pn(f),a&&((R=(yt=f.nodes)==null?void 0:yt.a)==null||R.unfix(),(d??(d=new Set)).delete(f))),(f.f&Re)!==0)if(f.f^=Re,f===p)Bt(f,null,n);else{var q=h?h.next:p;f===e.effect.last&&(e.effect.last=f.prev),f.prev&&(f.prev.next=f.next),f.next&&(f.next.prev=f.prev),Be(e,h,f),Be(e,f,q),Bt(f,q,n),h=f,v=[],g=[],p=Nt(h.next);continue}if(f!==p){if(c!==void 0&&c.has(f)){if(v.length<g.length){var F=g[0],K;h=F.prev;var we=v[0],Z=v[v.length-1];for(K=0;K<v.length;K+=1)Bt(v[K],F,n);for(K=0;K<g.length;K+=1)c.delete(g[K]);Be(e,we.prev,Z.next),Be(e,h,we),Be(e,Z,F),p=F,h=Z,w-=1,v=[],g=[]}else c.delete(f),Bt(f,p,n),Be(e,f.prev,f.next),Be(e,f,h===null?e.effect.first:h.next),Be(e,h,f),h=f;continue}for(v=[],g=[];p!==null&&p!==f;)(c??(c=new Set)).add(p),g.push(p),p=Nt(p.next);if(p===null)continue}(f.f&Re)===0&&v.push(f),h=f,p=Nt(f.next)}if(e.outrogroups!==null){for(const be of e.outrogroups)be.pending.size===0&&(li(e,In(be.done)),(hn=e.outrogroups)==null||hn.delete(be));e.outrogroups.size===0&&(e.outrogroups=null)}if(p!==null||c!==void 0){var z=[];if(c!==void 0)for(f of c)(f.f&te)===0&&z.push(f);for(;p!==null;)(p.f&te)===0&&p!==e.fallback&&z.push(p),p=Nt(p.next);var de=z.length;if(de>0){var je=(i&Ki)!==0&&s===0?n:null;if(a){for(w=0;w<de;w+=1)($e=(Ze=z[w].nodes)==null?void 0:Ze.a)==null||$e.measure();for(w=0;w<de;w+=1)(gn=(zt=z[w].nodes)==null?void 0:zt.a)==null||gn.fix()}ls(e,z,je)}}a&&Ye(()=>{var be,dn;if(d!==void 0)for(f of d)(dn=(be=f.nodes)==null?void 0:be.a)==null||dn.apply()})}function cs(e,t,n,i,r,a,s,l){var p=(s&Zr)!==0?(s&ta)===0?Ma(n,!1,!1):vt(n):null,c=(s&$r)!==0?vt(r):null;return{v:p,i:c,e:me(()=>(a(t,p??n,c??r,l),()=>{e.delete(i)}))}}function Bt(e,t,n){if(e.nodes)for(var i=e.nodes.start,r=e.nodes.end,a=t&&(t.f&Re)===0?t.nodes.start:n;i!==null;){var s=pn(i);if(a.before(i),i===r)return;i=s}}function Be(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}function hs(e,t,n=!1,i=!1,r=!1,a=!1){var s=e,l="";if(n)var p=e;B(()=>{var c=C;if(l!==(l=t()??"")){if(n){c.nodes=null,p.innerHTML=l,l!==""&&en(De(p),p.lastChild);return}if(c.nodes!==null&&(wr(c.nodes.start,c.nodes.end),c.nodes=null),l!==""){var h=i?ra:r?aa:void 0,d=ur(i?"svg":r?"math":"template",h);d.innerHTML=l;var v=i||r?d:d.content;if(en(De(v),v.lastChild),i||r)for(;De(v);)s.before(De(v));else s.before(v)}}})}function Xt(e,t,...n){var i=new Mr(e);zn(()=>{const r=t()??null;i.ensure(r,r&&(a=>r(a,...n)))},ft)}function qr(e){var t,n,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(n=qr(e[t]))&&(i&&(i+=" "),i+=n)}else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}function gs(){for(var e,t,n=0,i="",r=arguments.length;n<r;n++)(e=arguments[n])&&(t=qr(e))&&(i&&(i+=" "),i+=t);return i}function ds(e){return typeof e=="object"?gs(e):e??""}function fs(e,t,n){var i=e==null?"":""+e;return i=i?i+" "+t:t,i===""?null:i}function us(e,t,n,i,r,a){var s=e[Qn];if(s!==n||s===void 0){var l=fs(n,i);l==null?e.removeAttribute("class"):e.className=l,e[Qn]=n}return a}const vs=Symbol("is custom element"),ms=Symbol("is html");function $(e,t,n,i){var r=ys(e),a=r[t];a!==(r[t]=n)&&(t==="loading"&&(e[Xr]=n),n==null?e.removeAttribute(t):typeof n!="string"&&ws(e).has(t)?e[t]=n:e.setAttribute(t,n))}function ys(e){return e[mn]??(e[mn]={[vs]:e.nodeName.includes("-"),[ms]:e.namespaceURI===Vi})}var Gi=new Map;function ws(e){var t=e.getAttribute("is")||e.nodeName,n=Gi.get(t);if(n)return n;Gi.set(t,n=new Set);for(var i,r=e,a=Element.prototype;a!==r;){i=Hi(r);for(var s in i)i[s].set&&s!=="innerHTML"&&s!=="textContent"&&s!=="innerText"&&n.add(s);r=ci(r)}return n}function wi(e=!1){const t=D,n=t.l.u;if(!n)return;let i=()=>Ua(t.s);if(e){let r=0,a={};const s=On(()=>{let l=!1;const p=t.s;for(const c in p)p[c]!==a[c]&&(a[c]=p[c],l=!0);return l&&r++,r});i=()=>y(s)}n.b.length&&Fa(()=>{Oi(t,i),Jn(n.b)}),ki(()=>{const r=Ir(()=>n.m.map(Vr));return()=>{for(const a of r)typeof a=="function"&&a()}}),n.a.length&&ki(()=>{Oi(t,i),Jn(n.a)})}function Oi(e,t){if(e.l.s)for(const n of e.l.s)y(n);t()}const bs="5";var Ni;typeof window<"u"&&((Ni=window.__svelte??(window.__svelte={})).v??(Ni.v=new Set)).add(bs);ba();var xs=I('<div class="container-xl mx-auto main-content-1"><!></div>');function _s(e,t){var n=xs(),i=O(n);Xt(i,()=>t.children),S(e,n)}var As=I('<div class="container-lg"><div class="row"><div class="col-sm-2"></div> <div class="col-sm-8 entry-content"><!></div></div></div>');function Ts(e,t){var n=As(),i=O(n),r=j(O(i),2),a=O(r);Xt(a,()=>t.children),S(e,n)}var ks=I("<p> </p>");function Ps(e,t){var n=ks(),i=ie(n,!0);B(()=>Ae(i,t.text)),S(e,n)}var Cs=I('<footer id="footer"><div id="footer-inner"><div class="logo"><p>The voice of journalism, since 1961</p></div> <div class="lists"><div class="list"><h3>About</h3> <ul><li><a href="https://www.cjr.org/about_us/mission_statement.php">Mission</a></li> <li><a href="https://www.cjr.org/about_us/masthead.php">Masthead</a></li> <li><a href="https://www.cjr.org/about_us/privacy_policy.php">Privacy Policy</a></li> <li><a href="https://www.cjr.org/about_us/contact.php">Contact</a></li></ul></div> <div class="list"><h3>Support CJR</h3> <ul><li><a href="https://members.cjr.org/member/?a=nav-foot-mem&amp;utm_source=cjr-org&amp;utm_medium=cjr-nav&amp;utm_campaign=m-land">Become a Member</a></li> <li><a href="https://www.cjr.org/about_us/donate.php">Donate</a></li></ul></div> <div class="list"><h3>Advertise</h3> <ul><li><a href="https://www.cjr.org/about_us/advertise.php">Contact Us</a></li></ul></div></div> <div class="copyright"><span class="copyright-mobile">Copyright 2026,</span> Columbia Journalism Review</div></div></footer>');function Es(e){var t=Cs();S(e,t)}var Ss=I(`<div class="container-lg tow-ccn-about"><div class="row"><div class="container text-left tow-ccn-main"><div class="row tow-ccn-line"></div> <div class="row"><div class="col-4 tow-ccn-image"><a href="https://towcenter.columbia.edu/" target="_blank"><img alt="Tow Center for Digital Journalism" class="tow-ccn-tout-image-1"/></a></div> <div class="col-7 tow-ccn-tout"><h2 id="about-tow-center" class="tow-ccn-tout-main-title svelte-ofq6m6">About the Tow Center</h2> <span class="tow-ccn-tout-excerpt"><p>The Tow Center for Digital Journalism at Columbia's Graduate School of Journalism, a partner of CJR, is a research center exploring the ways in which technology is changing journalism, its practice and its consumption — as we seek new ways to judge the reliability, standards, and credibility of information online.</p> <p><a href="https://cjr.org/tow-center/" class="tow-ccn-tout-link">View other Tow articles »</a></p> <p><a href="https://towcenter.columbia.edu/" class="tow-ccn-tout-link" target="_blank">Visit Tow Center website »</a></p></span></div></div></div></div></div>`);function Is(e,t){qn(t,!1),wi();var n=Ss(),i=O(n),r=O(i),a=j(O(r),2),s=O(a),l=O(s),p=ie(l);B(()=>$(p,"src","./graphics/cjr/tow-logo-bottom-500.png")),S(e,n),Rn()}var Ms=I('<small id="small-category"><a href="https://www.cjr.org/tow-center/"><img alt="Tow Center" class="tow-ccn-slug-image"/></a></small>');function qs(e,t){qn(t,!1),wi();var n=Ms(),i=O(n),r=ie(i);B(()=>$(r,"src","./graphics/cjr/tow-slug-500-2.png")),S(e,n),Rn()}var Rs=I('<div class="container-lg title-image-lg"><!> <header class="col-sm-10"><h1 class="main-title"> </h1> <div class="post-excerpt"><p> </p></div> <div class="meta"><time class="date svelte-ev0zn9"> </time> <span class="byline"><em>By</em> <!></span></div></header> <!></div>');function Gs(e,t){var n=Rs(),i=O(n);Xt(i,()=>t.children??Vn);var r=j(i,2),a=O(r),s=ie(a,!0),l=j(a,2),p=O(l),c=ie(p,!0),h=j(l,2),d=O(h),v=ie(d,!0),g=j(d,2),u=j(O(g),2);Xt(u,()=>t.byline);var m=j(r,2);Xt(m,()=>t.hero??Vn),B(()=>{Ae(s,t.hed),Ae(c,t.subhed),$(d,"datetime",t.datetime),Ae(v,t.date)}),S(e,n)}const Os=`AI search tools are rapidly gaining in popularity, with nearly one in four Americans now saying they have used AI in place of traditional search engines. These tools derive their value from crawling the internet for up-to-date, relevant information—content that is often produced by news publishers.

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
`,zs=`<!-- Generated by all2html --><!-- source: graph5 -->
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
<!-- End all2html -->`,Ns=`<!-- Generated by all2html --><!-- source: graph4 -->
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
<!-- End all2html -->`,Fs=`<!-- Generated by all2html --><!-- source: graph3 -->
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
<!-- End all2html -->`,Ls=`<!-- Generated by all2html --><!-- source: graph2 -->
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
<!-- End all2html -->`,Ds=`<!-- Generated by all2html --><!-- source: graphs-copy -->
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
<!-- End all2html -->`;var Hs=I('<a rel="author" href="https://www.cjr.org/author/klaudia-jazwinska">Klaudia Jaźwińska</a> and <a rel="author" href="https://www.cjr.org/author/aisvarya-chandrasekar">Aisvarya Chandrasekar</a>',1),js=I('<figure class="image-hero-box"><img class="image-hero" width="1600" height="704" alt="Static on a broken television screen"/> <figcaption class="image-hero-caption">Image: The rack of a broken monitor or TV is the texture of a television screen, background for superimposing with the effect of grain noise, Александр Розов. Adobe Stock 1050902471</figcaption></figure>'),Ws=I('<h2 class="svelte-1n46o8q">Download our data</h2> <p><a href="https://github.com/TowCenter/genSearch-Part2">Download the study dataset and read the access instructions on GitHub</a>.</p>',1),Bs=I('<h2 class="svelte-1n46o8q"> </h2>'),Us=I("<h3> </h3>"),Ks=I("<li> </li>"),Ys=I('<figure class="article-figure svelte-1n46o8q"><img alt="Grading key: green for completely correct, light green for correct but incomplete, pink for partially incorrect, red for completely incorrect, gray for no answer, and a blue square with an X for crawler blocked." loading="lazy" class="svelte-1n46o8q"/></figure>'),Vs=I("<ul></ul> <!>",1),Js=I('<figure class="article-figure svelte-1n46o8q"><img loading="lazy" alt="" class="svelte-1n46o8q"/> <figcaption class="svelte-1n46o8q"> </figcaption></figure>'),Xs=I("<p><em> </em></p>"),Qs=I('<p class="lead-paragraph svelte-1n46o8q"> </p>'),Zs=I("<p><strong></strong> </p>"),$s=I('<figure class="article-figure findings-graphic svelte-1n46o8q"><img width="1999" height="983" alt="An excerpt from the query grid is enlarged to show the prompt and a sample response with its headline, publisher, date, and URL highlighted." loading="lazy" class="svelte-1n46o8q"/></figure>'),eo=I("<figure></figure>"),to=I('<div class="study-table svelte-1n46o8q"><iframe title="Tow Center study data table" loading="lazy" class="svelte-1n46o8q"></iframe> <p class="svelte-1n46o8q"><a>Open the study data table in Airtable</a></p></div>'),no=I("<!> <!>",1),io=I('<aside class="republication svelte-1n46o8q" aria-label="Republication credit"><p class="svelte-1n46o8q">This article is republished from <cite></cite>.</p> <a class="svelte-1n46o8q">Read the original article</a></aside> <!>',1),ro=I("<!> <!> <!>",1),ao=I('<main id="article" class="svelte-1n46o8q"><!></main> <!>',1);function so(e,t){qn(t,!1);const n="The generative search tools we tested had a common tendency to cite the wrong article",i=[{caption:"An example of Copilot declining",file:"copilot-decline.jpg",width:1486,height:1292},{caption:"An example of Gemini declining",file:"gemini-politics.jpg",width:1680,height:1146},{caption:"Despite having a partnership with the Texas Tribune, Perplexity cited an unofficial version",file:"perplexity-tribune.jpg",width:1988,height:988},{caption:"Although USA Today blocks ChatGPT’s crawler",file:"chatgpt-yahoo.jpg",width:1248,height:1108}],r="./graphics/article-figures/",a="https://airtable.com/embed/appg737s82fePQorq/shrSYddgl1MYeaxOH",s=[{after:"Overall, the chatbots often failed to retrieve the correct articles.",folder:"confidently-wrong",label:"Generative search tools were often confidently wrong in our study",html:Ds},{after:"Premium models, such as Perplexity Pro",folder:"premium-models",className:"premium-graphic",label:"Response comparison for Perplexity and Grok models",html:Ls},{after:"We expected chatbots",folder:"crawler-access",label:"Crawler access and response accuracy",html:Fs},{after:n+".",folder:"citation-links",className:"citation-graphic",label:"Types of links cited by generative search tools",html:Ns},{after:"A deal between AI companies and publishers often involves",folder:"licensing-deals",className:"licensing-graphic",label:"Accuracy for AI platforms and publishers with licensing deals",html:zs}].map(u=>({...u,html:u.html.replace(/src="([^"/]+\.png(?:\?[^"]*)?)"/g,(m,f)=>`src="./graphics/${u.folder}/${f}"`)})),l="https://www.cjr.org/tow_center/we-compared-eight-ai-search-engines-theyre-all-bad-at-citing-news.php",p=Os.trim().split(/\r?\n(?:[ \t]*\r?\n)+/),c=p.filter(u=>u.startsWith("## "));wi();var h=ao(),d=rt(h),v=O(d);_s(v,{children:(u,m)=>{var f=ro(),w=rt(f);Gs(w,{hed:"AI Search Has a Citation Problem",subhed:"We compared eight AI search engines. They’re all bad at citing news.",date:"March 6, 2025",datetime:"2025-03-06",byline:Z=>{var z=Hs();S(Z,z)},hero:Z=>{var z=js(),de=O(z);B(()=>$(de,"src",r+"article-hero.jpg")),S(Z,z)},children:(Z,z)=>{qs(Z,{})}});var q=j(w,2);Ts(q,{children:(K,we)=>{var Z=io(),z=rt(Z),de=O(z),je=j(O(de));je.textContent="Columbia Journalism Review";var ne=j(de,2);$(ne,"href",l);var mt=j(z,2);Ri(mt,1,()=>p,Mi,(yt,R,hn)=>{const Ze=Tn(()=>i.find(E=>y(R).startsWith(E.caption))),$e=Tn(()=>s.find(E=>y(R).startsWith(E.after)));var zt=Qa(),gn=rt(zt);{var be=E=>{var G=Ws(),L=rt(G);B(se=>$(L,"id",se),[()=>"section-"+(c.indexOf(y(R))+1)]),S(E,G)},dn=E=>{var G=Bs(),L=ie(G,!0);B((se,et)=>{$(G,"id",se),Ae(L,et)},[()=>"section-"+(c.indexOf(y(R))+1),()=>y(R).slice(3)]),S(E,G)},Rr=it(()=>y(R).startsWith("## ")),Gr=E=>{var G=Us(),L=ie(G,!0);B(se=>Ae(L,se),[()=>y(R).slice(4)]),S(E,G)},Or=it(()=>y(R).startsWith("### ")),zr=E=>{var G=Vs(),L=rt(G);Ri(L,5,()=>y(R).split(/\r?\n/),Mi,(tt,wt)=>{var bt=Ks(),Fn=ie(bt,!0);B(Ln=>Ae(Fn,Ln),[()=>y(wt).slice(2)]),S(tt,bt)});var se=j(L,2);{var et=tt=>{var wt=Ys(),bt=ie(wt);B(()=>$(bt,"src",r+"grading-key.png")),S(tt,wt)},Nn=it(()=>y(R).startsWith("- Correct:"));vn(se,tt=>{y(Nn)&&tt(et)})}S(E,G)},Nr=it(()=>y(R).startsWith("- ")),Fr=E=>{var G=Js(),L=O(G),se=j(L,2),et=ie(se,!0);B(()=>{$(L,"src",r+y(Ze).file),$(L,"width",y(Ze).width),$(L,"height",y(Ze).height),Ae(et,y(R))}),S(E,G)},Lr=E=>{var G=Xs(),L=O(G),se=ie(L,!0);B(()=>Ae(se,y(R))),S(E,G)},Dr=E=>{var G=Qs(),L=ie(G,!0);B(()=>Ae(L,y(R))),S(E,G)},Hr=E=>{var G=no(),L=rt(G);{var se=Y=>{var oe=Zs(),nt=O(oe);nt.textContent="The generative search tools we tested had a common tendency to cite the wrong article";var Dn=j(nt,1,!0);B(Hn=>Ae(Dn,Hn),[()=>y(R).slice(n.length)]),S(Y,oe)},et=it(()=>y(R).startsWith(n)),Nn=Y=>{Ps(Y,{get text(){return y(R)}})};vn(L,Y=>{y(et)?Y(se):Y(Nn,-1)})}var tt=j(L,2);{var wt=Y=>{var oe=$s(),nt=ie(oe);B(()=>$(nt,"src",r+"query-example.png")),S(Y,oe)},bt=it(()=>y(R).startsWith("After providing each chatbot")),Fn=Y=>{var oe=eo();hs(oe,()=>y($e).html,!0),B(()=>{us(oe,1,ds(["findings-graphic",y($e).className]),"svelte-1n46o8q"),$(oe,"aria-label",y($e).label)}),S(Y,oe)},Ln=Y=>{var oe=to(),nt=O(oe);$(nt,"src",a);var Dn=j(nt,2),Hn=O(Dn);$(Hn,"href",a),S(Y,oe)},jr=it(()=>y(R).startsWith("When we asked whether the AI companies made any commitments"));vn(tt,Y=>{y(bt)?Y(wt):y($e)?Y(Fn,1):y(jr)&&Y(Ln,2)})}S(E,G)};vn(gn,E=>{y(R)==="## Download our data"?E(be):y(Rr)?E(dn,1):y(Or)?E(Gr,2):y(Nr)?E(zr,3):y(Ze)?E(Fr,4):y(R)==="Kaylee Williams, Sarah Grevy Gotfredsen, and Dhrumil Mehta contributed to this report."?E(Lr,5):hn===0?E(Dr,6):E(Hr,-1)})}S(yt,zt)}),S(K,Z)}});var F=j(q,2);Is(F,{}),S(u,f)}});var g=j(d,2);Es(g),S(e,h),Rn()}as(so,{target:document.getElementById("app")});
