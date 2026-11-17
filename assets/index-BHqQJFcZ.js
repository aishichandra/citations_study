var Sr=Object.defineProperty;var ci=e=>{throw TypeError(e)};var Ur=(e,t,n)=>t in e?Sr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var we=(e,t,n)=>Ur(e,typeof t!="symbol"?t+"":t,n),Ca=(e,t,n)=>t.has(e)||ci("Cannot "+n);var c=(e,t,n)=>(Ca(e,t,"read from private field"),n?n.call(e):t.get(e)),O=(e,t,n)=>t.has(e)?ci("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),I=(e,t,n,a)=>(Ca(e,t,"write to private field"),a?a.call(e,n):t.set(e,n),n),S=(e,t,n)=>(Ca(e,t,"access private method"),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();const Ei=!1;var Si=Array.isArray,jr=Array.prototype.indexOf,Rn=Array.prototype.includes,va=Array.from,Ui=Object.defineProperty,Sn=Object.getOwnPropertyDescriptor,ji=Object.getOwnPropertyDescriptors,Mr=Object.prototype,Ir=Array.prototype,Qa=Object.getPrototypeOf,pi=Object.isExtensible;const On=()=>{};function qr(e){return e()}function qa(e){for(var t=0;t<e.length;t++)e[t]()}function Mi(){var e,t,n=new Promise((a,i)=>{e=a,t=i});return{promise:n,resolve:e,reject:t}}function Rr(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const n=[];for(const a of e)if(n.push(a),n.length===t)break;return n}const ke=2,hn=4,Wn=8,Ii=1<<24,$e=16,nt=32,St=64,Ra=128,$a=256,tt=512,ge=1024,te=2048,De=4096,Se=8192,Ae=16384,vn=32768,Gn=1<<25,Jt=65536,la=1<<17,Or=1<<18,mn=1<<19,qi=1<<20,ct=1<<25,ca=1<<21,an=1<<22,Ct=1<<23,rn=Symbol("$state"),Ri=Symbol("component"),Gr=Symbol(""),ra=Symbol("attributes"),Oa=Symbol("class"),Ga=Symbol("style"),An=Symbol("text"),Kn=new class extends Error{constructor(){super(...arguments);we(this,"name","StaleReactionError");we(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}},Nr=1,Lr=2,Oi=4,Fr=8,Dr=16,Br=1,Hr=2,Gi={},he=Symbol("uninitialized"),Ni="http://www.w3.org/1999/xhtml",Wr="http://www.w3.org/2000/svg",Kr="http://www.w3.org/1998/Math/MathML";function Jr(){console.warn("https://svelte.dev/e/derived_inert")}function Yr(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Li(e){return e===this.v}function Fi(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Di(e){return!Fi(e,this.v)}function Vr(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Xr(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Zr(e,t,n){throw new Error("https://svelte.dev/e/each_key_duplicate")}function Qr(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function $r(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function es(e){throw new Error("https://svelte.dev/e/effect_orphan")}function ts(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ns(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function as(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function is(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function rs(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let Jn=!1,ss=!1;function os(){Jn=!0}let ae=null;function gn(e){ae=e}function Xt(e,t=!1,n){ae={p:ae,i:!1,c:null,e:null,s:e,x:null,r:B,l:Jn&&!t?{s:null,u:null,$:[]}:null}}function Zt(e){var t=ae,n=t.e;if(n!==null){t.e=null;for(var a of n)cr(a)}return t.i=!0,ae=t.p,ei(e)}function ei(e={}){return Ui(e,Ri,{value:!0}),e}function Yn(){return!Jn||ae!==null&&ae.l===null}let Nt=[];function Bi(){var e=Nt;Nt=[],qa(e)}function Pt(e){if(Nt.length===0&&!jn){var t=Nt;queueMicrotask(()=>{t===Nt&&Bi()})}Nt.push(e)}function ls(){for(;Nt.length>0;)Bi()}const cs=-7169;function ce(e,t){e.f=e.f&cs|t}function ti(e){(e.f&tt)!==0||e.deps===null?ce(e,ge):ce(e,De)}function Hi(e,t){(e.f&te)!==0?t.set(e,te):(e.f&De)!==0&&t.get(e)!==te&&t.set(e,De),ce(e,ge)}function ma(e){var t=q,n=B;Ye(null),ht(null);try{return e()}finally{Ye(t),ht(n)}}function ps(e,t,n,a){const i=Yn()?ya:Un;var r=e.filter(g=>!g.settled),s=t.map(i);if(n.length===0&&r.length===0){a(s);return}var l=B,o=ds(),d=r.length===1?r[0].promise:r.length>1?Promise.all(r.map(g=>g.promise)):null;function h(g){if((l.f&Ae)===0){o();try{a([...s,...g])}catch(v){lt(v,l)}pa()}}var f=Wi();if(n.length===0){d.then(()=>h([])).finally(f);return}function m(){Promise.all(n.map(g=>hs(g))).then(h).catch(g=>lt(g,l)).finally(f)}d?d.then(()=>{if((l.f&Ae)!==0){f();return}o(),m(),pa()}):m()}function ds(){var e=B,t=q,n=ae,a=U;return function(r=!0){ht(e),Ye(t),gn(n),r&&(e.f&Ae)===0&&(a==null||a.activate(),a==null||a.apply())}}function pa(e=!0){ht(null),Ye(null),gn(null),e&&(U==null||U.deactivate())}function Wi(){var e=B,t=e.b,n=U,a=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,n),n.increment(a,e),()=>{t==null||t.update_pending_count(-1,n),n.decrement(a,e)}}function ya(e){var t=ke|te;return B!==null&&(B.f|=mn),{ctx:ae,deps:null,effects:null,equals:Li,f:t,fn:e,reactions:null,rv:0,v:he,wv:0,parent:B,ac:null}}const kn=Symbol("obsolete");function hs(e,t,n){let a=B;a===null&&Xr();var i=void 0,r=Vt(he),s=!q,l=new Set;return zs(()=>{var g,v;var o=B,d=Mi();i=d.promise;try{Promise.resolve(e()).then(d.resolve,_=>{_!==Kn&&d.reject(_)}).finally(pa)}catch(_){d.reject(_),pa()}var h=U;if(s){if((o.f&vn)!==0)var f=Wi();if((g=a.b)!=null&&g.is_rendered())(v=h.async_deriveds.get(o))==null||v.reject(kn);else for(const _ of l.values())_.reject(kn);l.add(d),h.async_deriveds.set(o,d)}const m=(_,u=void 0)=>{f==null||f(),l.delete(d),u!==kn&&(h.activate(),u?(r.f|=Ct,fn(r,u)):((r.f&Ct)!==0&&(r.f^=Ct),fn(r,_)),h.deactivate())};d.promise.then(m,_=>m(null,_||"unknown"))}),Ts(()=>{for(const o of l)o.reject(kn)}),new Promise(o=>{function d(h){function f(){h===i?o(r):d(i)}h.then(f,f)}d(i)})}function le(e){const t=ya(e);return vr(t),t}function Un(e){const t=ya(e);return t.equals=Di,t}function gs(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)qe(t[n])}}function ni(e){var t,n=B,a=e.parent;if(!Ut&&a!==null&&e.v!==he&&(a.f&(Ae|Se))!==0)return Jr(),e.v;ht(a);try{gs(e),t=br(e)}finally{ht(n)}return t}function Ki(e){var t=ni(e);if(!e.equals(t)&&(e.wv=yr(),(!(U!=null&&U.is_fork)||e.deps===null)&&(U!==null?(U.capture(e,t,!0),zt==null||zt.capture(e,t,!0)):e.v=t,e.deps===null))){ce(e,ge);return}Ut||(ye!==null?(ri()||U!=null&&U.is_fork)&&ye.set(e,t):ti(e))}function fs(e){var t;if(e.effects!==null)for(const n of e.effects)(n.teardown||n.ac)&&((t=n.teardown)==null||t.call(n),n.ac!==null&&ma(()=>{n.ac.abort(Kn),n.ac=null}),n.fn!==null&&(n.teardown=On),Nn(n,0),oi(n))}function Ji(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&un(t)}let za=null,en=null,U=null,zt=null,ye=null,Na=null,jn=!1,Ea=!1,Mn=null,sa=null;var di=0;let us=1;var sn,on,ln,vt,cn,mt,Fn,it,rt,pn,Ft,N,La,Yi,Fa,Tn,Da,Vi,Xi,Zi,tn,vs,Pn;const ga=class ga{constructor(){O(this,N);we(this,"id",us++);we(this,"started",!1);we(this,"linked",!0);we(this,"prev",null);we(this,"next",null);we(this,"async_deriveds",new Map);we(this,"current",new Map);we(this,"previous",new Map);O(this,sn,new Set);O(this,on,new Set);O(this,ln,0);O(this,vt,new Map);O(this,cn,null);O(this,mt,[]);O(this,Fn,[]);O(this,it,new Map);O(this,rt,new Map);O(this,pn,new Set);we(this,"is_fork",!1);O(this,Ft,!1);en===null?za=en=this:(en.next=this,this.prev=en),en=this}skip_effect(t){c(this,rt).has(t)||c(this,rt).set(t,{d:[],m:[]}),c(this,pn).delete(t)}unskip_effect(t,n=a=>this.schedule(a)){var a=c(this,rt).get(t);if(a){c(this,rt).delete(t);for(var i of a.d)ce(i,te),n(i);for(i of a.m)ce(i,De),n(i)}c(this,pn).add(t)}capture(t,n,a=!1){t.v!==he&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&Ct)===0&&(this.current.set(t,[n,a]),ye==null||ye.set(t,n)),this.is_fork||(t.v=n)}activate(){U=this}deactivate(){U=null,ye=null}flush(){try{Ea=!0,U=this,S(this,N,Tn).call(this)}finally{di=0,Na=null,Mn=null,sa=null,Ea=!1,U=null,ye=null,pt.clear()}}discard(){var t;for(const n of c(this,on))n(this);c(this,on).clear();for(const n of this.async_deriveds.values())n.reject(kn);S(this,N,Pn).call(this),(t=c(this,cn))==null||t.resolve()}register_created_effect(t){c(this,Fn).push(t)}increment(t,n){if(I(this,ln,c(this,ln)+1),t){let a=c(this,vt).get(n)??0;c(this,vt).set(n,a+1)}}decrement(t,n){if(I(this,ln,c(this,ln)-1),t){let a=c(this,vt).get(n)??0;a===1?c(this,vt).delete(n):c(this,vt).set(n,a-1)}c(this,Ft)||(I(this,Ft,!0),Pt(()=>{I(this,Ft,!1),this.linked&&this.flush()}))}transfer_reactions(t){for(const[n,a]of t)this.add_dirty_reaction(n,a);t.clear()}add_dirty_reaction(t,n){(n===te||c(this,it).get(t)!==te)&&c(this,it).set(t,n)}oncommit(t){c(this,sn).add(t)}ondiscard(t){c(this,on).add(t)}settled(){return(c(this,cn)??I(this,cn,Mi())).promise}static ensure(){if(U===null){const t=U=new ga;!Ea&&!jn&&Pt(()=>{t.started||t.flush()})}return U}apply(){{ye=null;return}}schedule(t){var n;if(Na=t,(n=t.b)!=null&&n.is_pending&&(t.f&(hn|Wn|Ii))!==0&&(t.f&vn)===0){t.b.defer_effect(t);return}c(this,mt).push(t)}};sn=new WeakMap,on=new WeakMap,ln=new WeakMap,vt=new WeakMap,cn=new WeakMap,mt=new WeakMap,Fn=new WeakMap,it=new WeakMap,rt=new WeakMap,pn=new WeakMap,Ft=new WeakMap,N=new WeakSet,La=function(){if(this.is_fork)return!0;for(const t of c(this,vt).keys())if(!S(this,N,Yi).call(this,t))return!0;return!1},Yi=function(t){for(var n=t;n!==null;n=n.parent)if(c(this,rt).has(n))return!0;return!1},Fa=function(){var t=[];for(const r of c(this,mt))if(!((r.f&Ae)!==0||(r.f&(te|De))===0)){for(var n=r,a=!1;n.parent!==null;){n=n.parent;var i=n.f;if((i&(St|nt))!==0){if((i&ge)===0){a=!0;break}n.f^=ge}}a||t.push(n)}return I(this,mt,[]),t},Tn=function(){var l,o,d,h;this.started=!0;for(const[f,m]of c(this,it))ce(f,m),this.schedule(f);this.apply();for(var t=Mn=[],n=[],a=sa=[];c(this,mt).length>0;){di++>1e3&&(S(this,N,Pn).call(this),ys());for(const f of S(this,N,Fa).call(this))try{S(this,N,Da).call(this,f,t,n)}catch(m){throw er(f),S(this,N,La).call(this)||this.discard(),m}}if(U=null,a.length>0){var i=ga.ensure();for(const f of a)i.schedule(f)}if(Mn=null,sa=null,S(this,N,La).call(this)){S(this,N,tn).call(this,n),S(this,N,tn).call(this,t);for(const[f,m]of c(this,rt))$i(f,m);a.length>0&&S(l=U,N,Tn).call(l);return}const r=S(this,N,Vi).call(this);if(r){S(this,N,tn).call(this,n),S(this,N,tn).call(this,t),S(o=r,N,Zi).call(o,this);return}c(this,it).clear();for(const f of c(this,sn))f(this);c(this,sn).clear(),zt=this,hi(n),hi(t),zt=null,(d=c(this,cn))==null||d.resolve();var s=U;c(this,ln)===0&&(c(this,mt).length===0||s!==null)&&S(this,N,Pn).call(this),s!==null&&(pt.clear(),S(h=s,N,Tn).call(h))},Da=function(t,n,a){t.f^=ge;for(var i=t.first;i!==null;){var r=i.f,s=(r&(nt|St))!==0,l=s&&(r&ge)!==0,o=l||(r&Se)!==0||c(this,rt).has(i);if(!o&&i.fn!==null){s?i.f^=ge:(r&hn)!==0?n.push(i):Xn(i)&&((r&$e)!==0&&this.add_dirty_reaction(i,De),un(i));var d=i.first;if(d!==null){i=d;continue}}for(;i!==null;){var h=i.next;if(h!==null){i=h;break}i=i.parent}}},Vi=function(){for(var t=this.prev;t!==null;t=t.prev)if(!t.is_fork&&S(this,N,Xi).call(this,t))return t;return null},Xi=function(t){for(const[n,[,a]]of this.current)if(!a&&t.current.has(n))return!0;return!1},Zi=function(t){var a;for(const[i,r]of t.current)!this.previous.has(i)&&t.previous.has(i)&&this.previous.set(i,t.previous.get(i)),this.current.set(i,r);for(const[i,r]of t.async_deriveds){const s=this.async_deriveds.get(i);s&&r.promise.then(s.resolve).catch(s.reject)}t.async_deriveds.clear(),this.transfer_reactions(c(t,it));const n=i=>{var r=i.reactions;if(r!==null&&!((i.f&ke)!==0&&(i.f&(te|De))===0))for(const o of r){var s=o.f;if((s&ke)!==0)n(o);else{var l=o;s&(an|$e)&&!this.async_deriveds.has(l)&&(c(this,it).delete(l),ce(l,te),this.schedule(l))}}};for(const i of this.current.keys())n(i);this.oncommit(()=>t.discard()),S(a=t,N,Pn).call(a),U=this,S(this,N,Tn).call(this)},tn=function(t){for(var n=0;n<t.length;n+=1)Hi(t[n],c(this,it))},vs=function(){var f,m;for(let g=za;g!==null;g=g.next){var t=g.id<this.id,n=[];for(const[v,[_,u]]of this.current){if(g.current.has(v)){var a=g.current.get(v)[0];if(t&&_!==a)g.current.set(v,[_,u]);else continue}n.push(v)}if(t)for(const[v,_]of this.async_deriveds){const u=g.async_deriveds.get(v);u&&_.promise.then(u.resolve).catch(u.reject)}var i=[...g.current.keys()].filter(v=>!g.current.get(v)[1]);if(!(!g.started||i.length===0)){var r=i.filter(v=>!this.current.has(v));if(r.length===0)t&&g.discard();else if(n.length>0){if(t)for(const v of c(this,pn))g.unskip_effect(v,_=>{var u;(_.f&($e|an))!==0?g.schedule(_):S(u=g,N,tn).call(u,[_])});g.activate();var s=new Set,l=new Map;for(var o of n)Qi(o,r,s,l);l=new Map;var d=[...g.current].filter(([v,_])=>{const u=this.current.get(v);return u?u[0]!==_[0]||u[1]!==_[1]:!0}).map(([v])=>v);if(d.length>0)for(const v of c(this,Fn))(v.f&(Ae|Se|la))===0&&ai(v,d,l)&&((v.f&(an|$e))!==0?(ce(v,te),g.schedule(v)):g.add_dirty_reaction(v,te));if(c(g,mt).length>0&&!c(g,Ft)){g.apply();for(var h of S(f=g,N,Fa).call(f))S(m=g,N,Da).call(m,h,[],[])}g.deactivate()}}}},Pn=function(){if(this.linked){var t=this.prev,n=this.next;t===null?za=n:t.next=n,n===null?en=t:n.prev=t,this.linked=!1}};let Yt=ga;function ms(e){var t=jn,n=zt;zt=null,jn=!0;try{for(var a;;){if(ls(),U===null)return a;U.flush()}}finally{jn=t,zt=n}}function ys(){try{ts()}catch(e){lt(e,Na)}}let Xe=null;function hi(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var a=e[n++];if((a.f&(Ae|Se))===0&&Xn(a)&&(Xe=new Set,un(a),a.deps===null&&a.first===null&&a.nodes===null&&a.teardown===null&&a.ac===null&&gr(a),(Xe==null?void 0:Xe.size)>0)){pt.clear();for(const i of Xe){if((i.f&(Ae|Se))!==0)continue;const r=[i];let s=i.parent;for(;s!==null;)Xe.has(s)&&(Xe.delete(s),r.push(s)),s=s.parent;for(let l=r.length-1;l>=0;l--){const o=r[l];(o.f&(Ae|Se))===0&&un(o)}}Xe.clear()}}Xe=null}}function Qi(e,t,n,a){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(const i of e.reactions){const r=i.f;(r&ke)!==0?Qi(i,t,n,a):(r&(an|$e))!==0&&(r&te)===0&&ai(i,t,a)&&(ce(i,te),ii(i))}}function ai(e,t,n){const a=n.get(e);if(a!==void 0)return a;if(e.deps!==null)for(const i of e.deps){if(Rn.call(t,i))return!0;if((i.f&ke)!==0&&ai(i,t,n))return n.set(i,!0),!0}return n.set(e,!1),!1}function ii(e){U.schedule(e)}function $i(e,t){if(!((e.f&nt)!==0&&(e.f&ge)!==0)){(e.f&te)!==0?t.d.push(e):(e.f&De)!==0&&t.m.push(e),ce(e,ge);for(var n=e.first;n!==null;)$i(n,t),n=n.next}}function er(e){ce(e,ge);for(var t=e.first;t!==null;)er(t),t=t.next}let da=new Set;const pt=new Map;let tr=!1;function Vt(e,t){var n={f:0,v:e,reactions:null,equals:Li,rv:0,wv:0};return n}function Ze(e,t){const n=Vt(e);return vr(n),n}function ws(e,t=!1,n=!0){var i;const a=Vt(e);return t||(a.equals=Di),Jn&&n&&ae!==null&&ae.l!==null&&((i=ae.l).s??(i.s=[])).push(a),a}function Me(e,t,n=!1){q!==null&&(!et||(q.f&la)!==0)&&Yn()&&(q.f&(ke|$e|an|la))!==0&&(dt===null||!dt.has(e))&&is();let a=n?Cn(t):t;return fn(e,a,sa)}var Gt=null,Ba=0;function fn(e,t,n=null){if(!e.equals(t)){Ut?pt.set(e,t):pt.has(e)||pt.set(e,e.v);var a=Yt.ensure();if(a.capture(e,t),(e.f&ke)!==0){const i=e;(e.f&te)!==0&&ni(i),ye===null&&ti(i)}e.wv=yr(),Gt=null,Ba=0,nr(e,te,n),Gt=null,Yn()&&B!==null&&(B.f&ge)!==0&&(B.f&(nt|St))===0&&(He===null?Ss([e]):He.push(e)),!a.is_fork&&da.size>0&&!tr&&bs()}return t}function bs(){tr=!1;for(const e of da){(e.f&ge)!==0&&ce(e,De);let t;try{t=Xn(e)}catch{t=!0}t&&un(e)}da.clear()}function In(e){Me(e,e.v+1)}function nr(e,t,n){var a=e.reactions;if(a!==null){var i=Yn(),r=a.length;if(Ba+=r,Ba>1e5&&Gt===null&&(Gt=new Set),Gt!==null){if(Gt.has(e))return;Gt.add(e)}for(var s=0;s<r;s++){var l=a[s],o=l.f;if(!(!i&&l===B)){var d=(o&te)===0;if(d&&ce(l,t),(o&la)!==0)da.add(l);else if((o&ke)!==0){var h=l;ye==null||ye.delete(h),nr(h,De,n)}else if(d){var f=l;(o&$e)!==0&&Xe!==null&&Xe.add(f),n!==null?n.push(f):ii(f)}}}}}function Cn(e){if(typeof e!="object"||e===null||rn in e||Ri in e)return e;const t=Qa(e);if(t!==Mr&&t!==Ir)return e;var n=new Map,a=Si(e),i=Ze(0),r=Kt,s=l=>{if(Kt===r)return l();var o=q,d=Kt;Ye(null),ui(r);var h=l();return Ye(o),ui(d),h};return a&&n.set("length",Ze(e.length)),new Proxy(e,{defineProperty(l,o,d){(!("value"in d)||d.configurable===!1||d.enumerable===!1||d.writable===!1)&&ns();var h=n.get(o);return h===void 0?s(()=>{var f=Ze(d.value);return n.set(o,f),f}):Me(h,d.value,!0),!0},deleteProperty(l,o){var d=n.get(o);if(d===void 0){if(o in l){const h=s(()=>Ze(he));n.set(o,h),In(i)}}else Me(d,he),In(i);return!0},get(l,o,d){var g;if(o===rn)return e;var h=n.get(o),f=o in l;if(h===void 0&&(!f||(g=Sn(l,o))!=null&&g.writable)&&(h=s(()=>{var v=Cn(f?l[o]:he),_=Ze(v);return _}),n.set(o,h)),h!==void 0){var m=p(h);return m===he?void 0:m}return Reflect.get(l,o,d)},getOwnPropertyDescriptor(l,o){var m;(m=this.has)==null||m.call(this,l,o);var d=Reflect.getOwnPropertyDescriptor(l,o),h=n.get(o);if(h!==void 0){var f=p(h);if(f===he)return;if(d&&"value"in d)d.value=f;else return{enumerable:!0,configurable:!0,value:f,writable:!0}}return d},has(l,o){var m;if(o===rn)return!0;var d=n.get(o),h=d!==void 0&&d.v!==he||Reflect.has(l,o);if(d!==void 0||(B!==null||q!==null)&&(!h||(m=Sn(l,o))!=null&&m.writable)){d===void 0&&(d=s(()=>{var g=h?Cn(l[o]):he,v=Ze(g);return v}),n.set(o,d));var f=p(d);if(f===he)return!1}return h},set(l,o,d,h){var X;var f=n.get(o),m=o in l;if(a&&o==="length")for(var g=d;g<f.v;g+=1){var v=n.get(g+"");v!==void 0?Me(v,he):g in l&&(v=s(()=>Ze(he)),n.set(g+"",v))}if(f===void 0)(!m||(X=Sn(l,o))!=null&&X.writable)&&(f=s(()=>Ze(void 0)),Me(f,Cn(d)),n.set(o,f));else{m=f.v!==he;var _=s(()=>Cn(d));Me(f,_)}var u=Reflect.getOwnPropertyDescriptor(l,o);if(u!=null&&u.set&&u.set.call(h,d),!m){if(a&&typeof o=="string"){var E=n.get("length"),R=Number(o);Number.isInteger(R)&&R>=E.v&&Me(E,R+1)}In(i)}return!0},ownKeys(l){p(i);var o=Reflect.ownKeys(l).filter(f=>{var m=n.get(f);return m===void 0||m.v!==he});for(var[d,h]of n)h.v!==he&&!(d in l)&&o.push(d);return o},setPrototypeOf(){as()}})}var gi,ar,ir,rr;function xs(){if(gi===void 0){gi=window,ar=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;ir=Sn(t,"firstChild").get,rr=Sn(t,"nextSibling").get,pi(e)&&(e[Oa]=void 0,e[ra]=null,e[Ga]=void 0,e.__e=void 0),pi(n)&&(n[An]=void 0)}}function Et(e=""){return document.createTextNode(e)}function wt(e){return ir.call(e)}function Vn(e){return rr.call(e)}function w(e,t){return wt(e)}function me(e,t=!1){{var n=wt(e);return n instanceof Comment&&n.data===""?Vn(n):n}}function Q(e,t=!1){return wt(e)}function z(e,t=1,n=!1){let a=e;for(;t--;)a=Vn(a);return a}function _s(e){e.textContent=""}function sr(){return!1}function or(e,t,n){return t==null||t===Ni?n?document.createElement(e,{is:n}):document.createElement(e):n?document.createElementNS(t,e,{is:n}):document.createElementNS(t,e)}function As(e){var t=B;if(t===null)return q.f|=Ct,e;if((t.f&vn)===0&&(t.f&hn)===0)throw e;lt(e,t)}function lt(e,t){if(e===Gi)throw e;if(!(t!==null&&(t.f&Ae)!==0)){for(;t!==null;){if((t.f&Ra)!==0&&(t.f&(Ae|Gn))===0){if((t.f&vn)===0)throw e;try{t.b.error(e);return}catch(n){e=n}}t=t.parent}throw e}}function lr(e){B===null&&(q===null&&es(),$r()),Ut&&Qr()}function ks(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function gt(e,t){var n=B;n!==null&&(n.f&Se)!==0&&(e|=Se);var a={ctx:ae,deps:null,nodes:null,f:e|te|tt,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};U==null||U.register_created_effect(a);var i=a;if((e&hn)!==0)Mn!==null?Mn.push(a):Yt.ensure().schedule(a);else if(t!==null){try{un(a)}catch(s){throw qe(a),s}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&(i.f&mn)===0&&(i=i.first,(e&$e)!==0&&(e&Jt)!==0&&i!==null&&(i.f|=Jt))}if(i!==null&&(i.parent=n,n!==null&&ks(i,n),q!==null&&(q.f&ke)!==0&&(e&St)===0)){var r=q;(r.effects??(r.effects=[])).push(i)}return a}function ri(){return q!==null&&!et}function Ts(e){const t=gt(Wn,null);return ce(t,ge),t.teardown=e,t}function Ha(e){lr();var t=B.f,n=!q&&(t&nt)!==0&&ae!==null&&!ae.i;if(n){var a=ae;(a.e??(a.e=[])).push(e)}else return cr(e)}function cr(e){return gt(hn|qi,e)}function Ps(e){return lr(),gt(Wn|qi,e)}function Cs(e){Yt.ensure();const t=gt(St|mn,e);return(n={})=>new Promise(a=>{n.outro?Wt(t,()=>{qe(t),a(void 0)}):(qe(t),a(void 0))})}function pr(e){return gt(hn,e)}function zs(e){return gt(an|mn,e)}function si(e,t=0){return gt(Wn|t,e)}function G(e,t=[],n=[],a=[]){ps(a,t,n,i=>{gt(Wn,()=>{e(...i.map(p))})})}function wa(e,t=0){var n=gt($e|t,e);return n}function Je(e){return gt(nt|mn,e)}function dr(e){var t=e.teardown;if(t!==null){const n=Ut,a=q;fi(!0),Ye(null);try{t.call(null)}catch(i){lt(i,e.parent)}finally{fi(n),Ye(a)}}}function oi(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const i=n.ac;i!==null&&ma(()=>{i.abort(Kn)});var a=n.next;(n.f&St)!==0?n.parent=null:qe(n,t),n=a}}function Es(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&nt)===0&&qe(t),t=n}}function qe(e,t=!0){var n=!1;(t||(e.f&Or)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(hr(e.nodes.start,e.nodes.end),n=!0),e.f|=Gn,oi(e,t&&!n),Nn(e,0);var a=e.nodes&&e.nodes.t;if(a!==null)for(const r of a)r.stop();dr(e),e.f^=Gn,e.f|=Ae;var i=e.parent;i!==null&&i.first!==null&&gr(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function hr(e,t){for(;e!==null;){var n=e===t?null:Vn(e);e.remove(),e=n}}function gr(e){var t=e.parent,n=e.prev,a=e.next;n!==null&&(n.next=a),a!==null&&(a.prev=n),t!==null&&(t.first===e&&(t.first=a),t.last===e&&(t.last=n))}function Wt(e,t,n=!0){var a=[];e.f|=$a,fr(e,a,!0);var i=()=>{n&&qe(e),t&&t()},r=a.length;if(r>0){var s=()=>--r||i();for(var l of a)l.out(s)}else i()}function fr(e,t,n){if((e.f&Se)===0){e.f^=Se;var a=e.nodes&&e.nodes.t;if(a!==null)for(const l of a)(l.is_global||n)&&t.push(l);for(var i=e.first;i!==null;){var r=i.next;if((i.f&St)===0){var s=(i.f&Jt)!==0||(i.f&nt)!==0&&(e.f&$e)!==0;fr(i,t,s?n:!1)}i=r}}}function ha(e){e.f&=~$a,ur(e,!0)}function ur(e,t){if((e.f&$a)===0&&(e.f&Se)!==0){e.f^=Se,(e.f&ge)===0&&(ce(e,te),Yt.ensure().schedule(e));for(var n=e.first;n!==null;){var a=n.next,i=(n.f&Jt)!==0||(n.f&nt)!==0;ur(n,i?t:!1),n=a}var r=e.nodes&&e.nodes.t;if(r!==null)for(const s of r)(s.is_global||t)&&s.in()}}function li(e,t){if(e.nodes)for(var n=e.nodes.start,a=e.nodes.end;n!==null;){var i=n===a?null:Vn(n);t.append(n),n=i}}let Ut=!1;function fi(e){Ut=e}let q=null,et=!1;function Ye(e){q=e}let B=null;function ht(e){B=e}let dt=null;function vr(e){q!==null&&((q.f&ca)!==0||(q.f&ke)!==0)&&(dt??(dt=new Set)).add(e)}let Ie=null,Fe=0,He=null;function Ss(e){He=e}let mr=1,Lt=0,Kt=Lt;function ui(e){Kt=e}function yr(){return++mr}function Xn(e){var t=e.f;if((t&te)!==0)return!0;if((t&De)!==0){for(var n=e.deps,a=n.length,i=0;i<a;i++){var r=n[i];if(Xn(r)&&Ki(r),r.wv>e.wv)return!0}(t&tt)!==0&&ye===null&&ce(e,ge)}return!1}function wr(e,t,n=!0){var a=e.reactions;if(a!==null&&!(dt!==null&&dt.has(e)))for(var i=0;i<a.length;i++){var r=a[i];(r.f&ke)!==0?wr(r,t,!1):t===r&&(n?ce(r,te):(r.f&ge)!==0&&ce(r,De),ii(r))}}function br(e){var t=Ie,n=Fe,a=He,i=q,r=dt,s=ae,l=et,o=Kt,d=e.f;Ie=null,Fe=0,He=null,q=(d&(nt|St))===0?e:null,dt=null,gn(e.ctx),et=!1,Kt=++Lt,e.ac!==null&&(ma(()=>{e.ac.abort(Kn)}),e.ac=null);try{e.f|=ca;var h=e.fn,f=h();e.f|=vn;var m=vi(e);if(Yn()&&He!==null&&!et&&m!==null&&(e.f&(ke|De|te))===0)for(var g=0;g<He.length;g++)wr(He[g],e);if(i!==null&&i!==e){if(Lt++,i.deps!==null)for(let v=0;v<n;v+=1)i.deps[v].rv=Lt;if(t!==null)for(const v of t)v.rv=Lt;He!==null&&(a===null?a=He:a.push(...He))}return(e.f&Ct)!==0&&(e.f^=Ct),f}catch(v){return vi(e),As(v)}finally{e.f^=ca,Ie=t,Fe=n,He=a,q=i,dt=r,gn(s),et=l,Kt=o}}function vi(e){var i;var t=e.deps,n=U==null?void 0:U.is_fork;if(Ie!==null){var a;if(n||Nn(e,Fe),t!==null&&Fe>0)for(t.length=Fe+Ie.length,a=0;a<Ie.length;a++)t[Fe+a]=Ie[a];else e.deps=t=Ie;if(ri()&&(e.f&tt)!==0)for(a=Fe;a<t.length;a++)((i=t[a]).reactions??(i.reactions=[])).push(e)}else!n&&t!==null&&Fe<t.length&&(Nn(e,Fe),t.length=Fe);return t}function Us(e,t){let n=t.reactions;if(n!==null){var a=jr.call(n,e);if(a!==-1){var i=n.length-1;i===0?n=t.reactions=null:(n[a]=n[i],n.pop())}}if(n===null&&(t.f&ke)!==0&&(Ie===null||!Rn.call(Ie,t))){var r=t;(r.f&tt)!==0&&(r.f^=tt),r.v!==he&&ti(r),r.ac!==null&&ma(()=>{r.ac.abort(Kn),r.ac=null,ce(r,te)}),fs(r),Nn(r,0)}}function Nn(e,t){var n=e.deps;if(n!==null)for(var a=t;a<n.length;a++)Us(e,n[a])}function un(e){var t=e.f;if((t&Ae)===0){ce(e,ge);var n=B;B=e;try{(t&($e|Ii))!==0?Es(e):oi(e),dr(e);var a=br(e);e.teardown=typeof a=="function"?a:null,e.wv=mr;var i;Ei&&ss&&(e.f&te)!==0&&e.deps}finally{B=n}}}async function js(){await Promise.resolve(),ms()}function p(e){var t=e.f,n=(t&ke)!==0;if(q!==null&&!et){var a=B!==null&&(B.f&Ae)!==0;if(!a&&(dt===null||!dt.has(e))){var i=q.deps;if((q.f&ca)!==0)e.rv<Lt&&(e.rv=Lt,Ie===null&&i!==null&&i[Fe]===e?Fe++:Ie===null?Ie=[e]:Ie.push(e));else{q.deps??(q.deps=[]),Rn.call(q.deps,e)||q.deps.push(e);var r=e.reactions;r===null?e.reactions=[q]:Rn.call(r,q)||r.push(q)}}}if(Ut&&pt.has(e))return pt.get(e);if(n){var s=e;if(Ut){var l=s.v;return((s.f&ge)===0&&s.reactions!==null||_r(s))&&(l=ni(s)),pt.set(s,l),l}var o=(s.f&tt)===0&&!et&&q!==null&&(q.f&tt)!==0,d=(s.f&vn)===0;Xn(s)&&(o&&(s.f|=tt),Ki(s)),o&&!d&&(Ji(s),xr(s))}if(ye!=null&&ye.has(e))return ye.get(e);if((e.f&Ct)!==0)throw e.v;return e.v}function xr(e){if(e.f|=tt,e.deps!==null)for(const n of e.deps){var t=n.reactions;t===null?n.reactions=[e]:Rn.call(t,e)||t.push(e),(n.f&ke)!==0&&(n.f&tt)===0&&(Ji(n),xr(n))}}function _r(e){if(e.v===he)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(pt.has(t)||(t.f&ke)!==0&&_r(t))return!0;return!1}function Zn(e){var t=et;try{return et=!0,e()}finally{et=t}}function Ar(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(rn in e)Wa(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&rn in n&&Wa(n)}}}function Wa(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let a in e)try{Wa(e[a],t)}catch{}const n=Qa(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const a=ji(n);for(let i in a){const r=a[i].get;if(r)try{r.call(e)}catch{}}}}}const Ms=["touchstart","touchmove"];function Is(e){return Ms.includes(e)}const na=Symbol("events"),qs=new Set,mi=new Set;let Sa=null,Ua=!1;function yi(e){var _,u;var t=this,n=t.ownerDocument,a=e.type,i=((_=e.composedPath)==null?void 0:_.call(e))||[],r=i[0]||e.target;Sa=e,Ua||(Ua=!0,setTimeout(()=>{Ua=!1,Sa=null}));var s=0,l=Sa===e&&e[na];if(l){var o=i.indexOf(l);if(o!==-1&&(t===document||t===window)){e[na]=t;return}var d=i.indexOf(t);if(d===-1)return;o<=d&&(s=o)}if(r=i[s]||e.target,r!==t){Ui(e,"currentTarget",{configurable:!0,get(){return r||n}});var h=q,f=B;Ye(null),ht(null);try{for(var m,g=[];r!==null&&r!==t;){try{var v=(u=r[na])==null?void 0:u[a];v!=null&&(!r.disabled||e.target===r)&&v.call(r,e)}catch(E){m?g.push(E):m=E}if(e.cancelBubble)break;s++,r=s<i.length?i[s]:null}if(m){for(let E of g)queueMicrotask(()=>{throw E});throw m}}finally{e[na]=t,delete e.currentTarget,Ye(h),ht(f)}}}var Ci;const ja=((Ci=globalThis==null?void 0:globalThis.window)==null?void 0:Ci.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function Rs(e){return(ja==null?void 0:ja.createHTML(e))??e}function Os(e){var t=or("template");return t.innerHTML=Rs(e.replaceAll("<!>","<!---->")),t.content}function Ln(e,t){var n=B;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function A(e,t){var n=(t&Br)!==0,a=(t&Hr)!==0,i,r=!e.startsWith("<!>");return()=>{i===void 0&&(i=Os(r?e:"<!>"+e),n||(i=wt(i)));var s=a||ar?document.importNode(i,!0):i.cloneNode(!0);if(n){var l=wt(s),o=s.lastChild;Ln(l,o)}else Ln(s,s);return s}}function ft(){var e=document.createDocumentFragment(),t=document.createComment(""),n=Et();return e.append(t,n),Ln(t,n),e}function b(e,t){e!==null&&e.before(t)}function Gs(e){let t=0,n=Vt(0),a;return()=>{ri()&&(p(n),si(()=>(t===0&&(a=Zn(()=>e(()=>In(n)))),t+=1,()=>{Pt(()=>{t-=1,t===0&&(a==null||a(),a=void 0,In(n))})})))}}var Ns=Jt|mn;function Ls(e,t,n,a){new Fs(e,t,n,a)}var We,Za,Ke,Dt,_e,Ge,Ee,Ne,st,Bt,Tt,dn,Dn,yt,fa,D,Ds,Bs,Ka,kt,Hs,Ja,zn,oa,Ya,Va;class Fs{constructor(t,n,a,i){O(this,D);we(this,"parent");we(this,"is_pending",!1);we(this,"transform_error");O(this,We);O(this,Za,null);O(this,Ke);O(this,Dt);O(this,_e);O(this,Ge,null);O(this,Ee,null);O(this,Ne,null);O(this,st,null);O(this,Bt,0);O(this,Tt,0);O(this,dn,!1);O(this,Dn,new Map);O(this,yt,null);O(this,fa,Gs(()=>(I(this,yt,Vt(c(this,Bt))),()=>{I(this,yt,null)})));var r;I(this,We,t),I(this,Ke,n),I(this,Dt,s=>{var l=B;l.b=this,l.f|=Ra,a(s)}),this.parent=B.b,this.transform_error=i??((r=this.parent)==null?void 0:r.transform_error)??(s=>s),I(this,_e,wa(()=>{S(this,D,Ja).call(this)},Ns))}defer_effect(t){Hi(t,c(this,Dn))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!c(this,Ke).pending}update_pending_count(t,n){S(this,D,Ya).call(this,t,n),I(this,Bt,c(this,Bt)+t),!(!c(this,yt)||c(this,dn))&&(I(this,dn,!0),Pt(()=>{I(this,dn,!1),c(this,yt)&&fn(c(this,yt),c(this,Bt))}))}get_effect_pending(){return c(this,fa).call(this),p(c(this,yt))}error(t){if(t===Gi||!c(this,Ke).onerror&&!c(this,Ke).failed)throw t;U!=null&&U.is_fork?(c(this,Ge)&&U.skip_effect(c(this,Ge)),c(this,Ee)&&U.skip_effect(c(this,Ee)),c(this,Ne)&&U.skip_effect(c(this,Ne)),U.oncommit(()=>{S(this,D,kt).call(this)||S(this,D,Va).call(this,t)})):S(this,D,Va).call(this,t)}}We=new WeakMap,Za=new WeakMap,Ke=new WeakMap,Dt=new WeakMap,_e=new WeakMap,Ge=new WeakMap,Ee=new WeakMap,Ne=new WeakMap,st=new WeakMap,Bt=new WeakMap,Tt=new WeakMap,dn=new WeakMap,Dn=new WeakMap,yt=new WeakMap,fa=new WeakMap,D=new WeakSet,Ds=function(){try{I(this,Ge,Je(()=>c(this,Dt).call(this,c(this,We))))}catch(t){this.error(t)}},Bs=function(t){const n=c(this,Ke).failed,{reset:a,invoke_onerror:i}=S(this,D,Ka).call(this,t);Pt(i),n&&I(this,Ne,Je(()=>{n(c(this,We),()=>t,()=>a)}))},Ka=function(t){var n=!1,a=!1;const i=()=>{if(!S(this,D,kt).call(this)){if(n){Yr();return}n=!0,a&&rs(),c(this,Ne)!==null&&Wt(c(this,Ne),()=>{I(this,Ne,null)}),S(this,D,oa).call(this,()=>{S(this,D,Ja).call(this)})}};return{reset:i,invoke_onerror:()=>{var s,l;if(!S(this,D,kt).call(this))try{a=!0,(l=(s=c(this,Ke)).onerror)==null||l.call(s,t,i),a=!1}catch(o){lt(o,c(this,_e)&&c(this,_e).parent)}}}},kt=function(){return(c(this,_e).f&(Ae|Gn))!==0},Hs=function(){const t=c(this,Ke).pending;t&&(this.is_pending=!0,I(this,Ee,Je(()=>t(c(this,We)))),Pt(()=>{if(!S(this,D,kt).call(this)){var n=I(this,st,document.createDocumentFragment()),a=Et(),i=!1;if(n.append(a),I(this,Ge,S(this,D,oa).call(this,()=>{try{return Je(()=>c(this,Dt).call(this,a))}catch(r){try{this.error(r),i=!0}catch(s){lt(s,c(this,_e).parent)}return null}})),c(this,Ge)===null){I(this,st,null),i&&S(this,D,zn).call(this,U);return}c(this,Tt)===0&&(c(this,We).before(n),I(this,st,null),Wt(c(this,Ee),()=>{I(this,Ee,null)}),S(this,D,zn).call(this,U))}}))},Ja=function(){try{if(this.is_pending=this.has_pending_snippet(),I(this,Tt,0),I(this,Bt,0),I(this,Ge,Je(()=>{c(this,Dt).call(this,c(this,We))})),c(this,Tt)>0){var t=I(this,st,document.createDocumentFragment());li(c(this,Ge),t);const n=c(this,Ke).pending;I(this,Ee,Je(()=>n(c(this,We))))}else S(this,D,zn).call(this,U)}catch(n){this.error(n)}},zn=function(t){this.is_pending=!1,t.transfer_reactions(c(this,Dn))},oa=function(t){var n=B,a=q,i=ae;ht(c(this,_e)),Ye(c(this,_e)),gn(c(this,_e).ctx);try{return Yt.ensure(),t()}finally{ht(n),Ye(a),gn(i)}},Ya=function(t,n){var a;if(!this.has_pending_snippet()){this.parent&&S(a=this.parent,D,Ya).call(a,t,n);return}I(this,Tt,c(this,Tt)+t),c(this,Tt)===0&&(S(this,D,zn).call(this,n),c(this,Ee)&&Wt(c(this,Ee),()=>{I(this,Ee,null)}),c(this,st)&&(c(this,We).before(c(this,st)),I(this,st,null)))},Va=function(t){c(this,Ge)&&(qe(c(this,Ge)),I(this,Ge,null)),c(this,Ee)&&(qe(c(this,Ee)),I(this,Ee,null)),c(this,Ne)&&(qe(c(this,Ne)),I(this,Ne,null));let n=c(this,Ke).failed;const a=i=>{if(S(this,D,kt).call(this))return;const{reset:r,invoke_onerror:s}=S(this,D,Ka).call(this,i);s(),n&&!S(this,D,kt).call(this)&&I(this,Ne,S(this,D,oa).call(this,()=>{try{return Je(()=>{var l=B;l.b=this,l.f|=Ra,n(c(this,We),()=>i,()=>r)})}catch(l){return lt(l,c(this,_e).parent),null}}))};Pt(()=>{if(!S(this,D,kt).call(this)){var i;try{i=this.transform_error(t)}catch(r){lt(r,c(this,_e)&&c(this,_e).parent);return}i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(a,r=>lt(r,c(this,_e)&&c(this,_e).parent)):a(i)}})};function J(e,t){var n=t==null?"":typeof t=="object"?`${t}`:t;n!==(e[An]??(e[An]=e.nodeValue))&&(e[An]=n,e.nodeValue=`${n}`)}function Ws(e,t){return Ks(e,t)}const aa=new Map;function Ks(e,{target:t,anchor:n,props:a={},events:i,context:r,intro:s=!0,transformError:l}){xs();var o=void 0,d=Cs(()=>{var h=n??t.appendChild(Et());Ls(h,{pending:()=>{}},g=>{Xt({});var v=ae;r&&(v.c=r),i&&(a.$$events=i),o=e(g,a)||ei(),Zt()},l);var f=new Set,m=g=>{for(var v=0;v<g.length;v++){var _=g[v];if(!f.has(_)){f.add(_);var u=Is(_);for(const X of[t,document]){var E=aa.get(X);E===void 0&&(E=new Map,aa.set(X,E));var R=E.get(_);R===void 0?(X.addEventListener(_,yi,{passive:u}),E.set(_,1)):E.set(_,R+1)}}}};return m(va(qs)),mi.add(m),()=>{var u;for(var g of f)for(const E of[t,document]){var v=aa.get(E),_=v.get(g);--_==0?(E.removeEventListener(g,yi),v.delete(g),v.size===0&&aa.delete(E)):v.set(g,_)}mi.delete(m),h!==n&&((u=h.parentNode)==null||u.removeChild(h))}});return Js.set(o,d),o}let Js=new WeakMap;var Qe,ot,Le,Ht,Bn,Hn,ua;class kr{constructor(t,n=!0){we(this,"anchor");O(this,Qe,new Map);O(this,ot,new Map);O(this,Le,new Map);O(this,Ht,new Set);O(this,Bn,!0);O(this,Hn,t=>{if(c(this,Qe).has(t)){var n=c(this,Qe).get(t),a=c(this,ot).get(n);if(a)ha(a),c(this,Ht).delete(n);else{var i=c(this,Le).get(n);i&&(ha(i.effect),c(this,ot).set(n,i.effect),c(this,Le).delete(n),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),a=i.effect)}for(const[r,s]of c(this,Qe)){if(c(this,Qe).delete(r),r===t)break;const l=c(this,Le).get(s);l&&(qe(l.effect),c(this,Le).delete(s))}for(const[r,s]of c(this,ot)){if(r===n||c(this,Ht).has(r))continue;const l=()=>{if(Array.from(c(this,Qe).values()).includes(r)){var d=document.createDocumentFragment();li(s,d),d.append(Et()),c(this,Le).set(r,{effect:s,fragment:d})}else qe(s);c(this,Ht).delete(r),c(this,ot).delete(r)};c(this,Bn)||!a?(c(this,Ht).add(r),Wt(s,l,!1)):l()}}});O(this,ua,t=>{c(this,Qe).delete(t);const n=Array.from(c(this,Qe).values());for(const[a,i]of c(this,Le))n.includes(a)||(qe(i.effect),c(this,Le).delete(a))});this.anchor=t,I(this,Bn,n)}ensure(t,n){var a=U,i=sr();if(n&&!c(this,ot).has(t)&&!c(this,Le).has(t))if(i){var r=document.createDocumentFragment(),s=Et();r.append(s),c(this,Le).set(t,{effect:Je(()=>n(s)),fragment:r})}else c(this,ot).set(t,Je(()=>n(this.anchor)));if(c(this,Qe).set(a,t),i){for(const[l,o]of c(this,ot))l===t?a.unskip_effect(o):a.skip_effect(o);for(const[l,o]of c(this,Le))l===t?a.unskip_effect(o.effect):a.skip_effect(o.effect);a.oncommit(c(this,Hn)),a.ondiscard(c(this,ua))}else c(this,Hn).call(this,a)}}Qe=new WeakMap,ot=new WeakMap,Le=new WeakMap,Ht=new WeakMap,Bn=new WeakMap,Hn=new WeakMap,ua=new WeakMap;function ue(e,t,n=!1){var a=new kr(e),i=n?Jt:0;function r(s,l){a.ensure(s,l)}wa(()=>{var s=!1;t((l,o=0)=>{s=!0,r(o,l)}),s||r(-1,null)},i)}function be(e,t){return t}function Ys(e,t,n){for(var a=[],i=t.length,r,s=t.length,l=0;l<i;l++){let f=t[l];Wt(f,()=>{if(r){if(r.pending.delete(f),r.done.add(f),r.pending.size===0){var m=e.outrogroups;Xa(e,va(r.done)),m.delete(r),m.size===0&&(e.outrogroups=null)}}else s-=1},!1)}if(s===0){var o=a.length===0&&n!==null&&e.pending.size===0;if(o){var d=n,h=d.parentNode;_s(h),h.append(d),e.items.clear()}Xa(e,t,!o)}else r={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(r)}function Xa(e,t,n=!0){var a;if(e.pending.size>0){a=new Set;for(const s of e.pending.values())for(const l of s)a.add(e.items.get(l).e)}for(var i=0;i<t.length;i++){var r=t[i];if(a!=null&&a.has(r)){r.f|=ct;const s=document.createDocumentFragment();li(r,s)}else qe(t[i],n)}}var wi;function xe(e,t,n,a,i,r=null){var s=e,l=new Map,o=(t&Oi)!==0;if(o){var d=e;s=d.appendChild(Et())}var h=null,f=Un(()=>{var R=n();return Si(R)?R:R==null?[]:va(R)}),m=new Map,g=!0;function v(R){if((E.effect.f&Ae)===0){E.pending.delete(R);var X=p(f);E.fallback=h,Vs(E,X,s,t,a),h!==null&&(X.length===0?(h.f&ct)===0?ha(h):(h.f^=ct,En(h,null,s)):Wt(h,()=>{h=null}))}}function _(R){E.pending.delete(R)}var u=wa(()=>{for(var R=p(f),X=R.length,ie=new Set,Ue=U,je=sr(),pe=0;pe<X;pe+=1){var Be=R[pe],Ve=a(Be,pe),ne=g?null:l.get(Ve);ne?(ne.v&&fn(ne.v,Be),ne.i&&fn(ne.i,pe),je&&Ue.unskip_effect(ne.e)):(ne=Xs(l,g?s:wi??(wi=Et()),Be,Ve,pe,i,t,n),g||(ne.e.f|=ct),l.set(Ve,ne)),ie.add(Ve)}if(X===0&&r&&!h&&(g?h=Je(()=>r(s)):(h=Je(()=>r(wi??(wi=Et()))),h.f|=ct)),X>ie.size&&Zr(),!g)if(m.set(Ue,ie),je){for(const[Te,Re]of l)ie.has(Te)||Ue.skip_effect(Re.e);Ue.oncommit(v),Ue.ondiscard(_)}else v(Ue);p(f)}),E={effect:u,items:l,pending:m,outrogroups:null,fallback:h};g=!1}function _n(e){for(;e!==null&&(e.f&nt)===0;)e=e.next;return e}function Vs(e,t,n,a,i){var ne,Te,Re,jt,bt,Mt,It,$,qt;var r=(a&Fr)!==0,s=t.length,l=e.items,o=_n(e.effect.first),d,h=null,f,m=[],g=[],v,_,u,E;if(r)for(E=0;E<s;E+=1)v=t[E],_=i(v,E),u=l.get(_).e,(u.f&ct)===0&&((Te=(ne=u.nodes)==null?void 0:ne.a)==null||Te.measure(),(f??(f=new Set)).add(u));for(E=0;E<s;E+=1){if(v=t[E],_=i(v,E),u=l.get(_).e,e.outrogroups!==null)for(const de of e.outrogroups)de.pending.delete(u),de.done.delete(u);if((u.f&Se)!==0&&(ha(u),r&&((jt=(Re=u.nodes)==null?void 0:Re.a)==null||jt.unfix(),(f??(f=new Set)).delete(u))),(u.f&ct)!==0)if(u.f^=ct,u===o)En(u,null,n);else{var R=h?h.next:o;u===e.effect.last&&(e.effect.last=u.prev),u.prev&&(u.prev.next=u.next),u.next&&(u.next.prev=u.prev),At(e,h,u),At(e,u,R),En(u,R,n),h=u,m=[],g=[],o=_n(h.next);continue}if(u!==o){if(d!==void 0&&d.has(u)){if(m.length<g.length){var X=g[0],ie;h=X.prev;var Ue=m[0],je=m[m.length-1];for(ie=0;ie<m.length;ie+=1)En(m[ie],X,n);for(ie=0;ie<g.length;ie+=1)d.delete(g[ie]);At(e,Ue.prev,je.next),At(e,h,Ue),At(e,je,X),o=X,h=je,E-=1,m=[],g=[]}else d.delete(u),En(u,o,n),At(e,u.prev,u.next),At(e,u,h===null?e.effect.first:h.next),At(e,h,u),h=u;continue}for(m=[],g=[];o!==null&&o!==u;)(d??(d=new Set)).add(o),g.push(o),o=_n(o.next);if(o===null)continue}(u.f&ct)===0&&m.push(u),h=u,o=_n(u.next)}if(e.outrogroups!==null){for(const de of e.outrogroups)de.pending.size===0&&(Xa(e,va(de.done)),(bt=e.outrogroups)==null||bt.delete(de));e.outrogroups.size===0&&(e.outrogroups=null)}if(o!==null||d!==void 0){var pe=[];if(d!==void 0)for(u of d)(u.f&Se)===0&&pe.push(u);for(;o!==null;)(o.f&Se)===0&&o!==e.fallback&&pe.push(o),o=_n(o.next);var Be=pe.length;if(Be>0){var Ve=(a&Oi)!==0&&s===0?n:null;if(r){for(E=0;E<Be;E+=1)(It=(Mt=pe[E].nodes)==null?void 0:Mt.a)==null||It.measure();for(E=0;E<Be;E+=1)(qt=($=pe[E].nodes)==null?void 0:$.a)==null||qt.fix()}Ys(e,pe,Ve)}}r&&Pt(()=>{var de,at;if(f!==void 0)for(u of f)(at=(de=u.nodes)==null?void 0:de.a)==null||at.apply()})}function Xs(e,t,n,a,i,r,s,l){var o=(s&Nr)!==0?(s&Dr)===0?ws(n,!1,!1):Vt(n):null,d=(s&Lr)!==0?Vt(i):null;return{v:o,i:d,e:Je(()=>(r(t,o??n,d??i,l),()=>{e.delete(a)}))}}function En(e,t,n){if(e.nodes)for(var a=e.nodes.start,i=e.nodes.end,r=t&&(t.f&ct)===0?t.nodes.start:n;a!==null;){var s=Vn(a);if(r.before(a),a===i)return;a=s}}function At(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}function Zs(e,t,n=!1,a=!1,i=!1,r=!1){var s=e,l="";if(n)var o=e;G(()=>{var d=B;if(l!==(l=t()??"")){if(n){d.nodes=null,o.innerHTML=l,l!==""&&Ln(wt(o),o.lastChild);return}if(d.nodes!==null&&(hr(d.nodes.start,d.nodes.end),d.nodes=null),l!==""){var h=a?Wr:i?Kr:void 0,f=or(a?"svg":i?"math":"template",h);f.innerHTML=l;var m=a||i?f:f.content;if(Ln(wt(m),m.lastChild),a||i)for(;wt(m);)s.before(wt(m));else s.before(m)}}})}function qn(e,t,...n){var a=new kr(e);wa(()=>{const i=t()??null;a.ensure(i,i&&(r=>i(r,...n)))},Jt)}function bi(e,t,n){pr(()=>{var a=Zn(()=>t(e,n==null?void 0:n())||{});if(n&&(a!=null&&a.update)){var i=!1,r={};si(()=>{var s=n();Ar(s),i&&Fi(r,s)&&(r=s,a.update(s))}),i=!0}if(a!=null&&a.destroy)return()=>a.destroy()})}function Tr(e){var t,n,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Tr(e[t]))&&(a&&(a+=" "),a+=n)}else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function Qs(){for(var e,t,n=0,a="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Tr(e))&&(a&&(a+=" "),a+=t);return a}function $s(e){return typeof e=="object"?Qs(e):e??""}const xi=[...` 	
\r\f \v\uFEFF`];function eo(e,t,n){var a=e==null?"":""+e;if(t&&(a=a?a+" "+t:t),n){for(var i of Object.keys(n))if(n[i])a=a?a+" "+i:i;else if(a.length)for(var r=i.length,s=0;(s=a.indexOf(i,s))>=0;){var l=s+r;(s===0||xi.includes(a[s-1]))&&(l===a.length||xi.includes(a[l]))?a=(s===0?"":a.substring(0,s))+a.substring(l+1):s=l}}return a===""?null:a}function _i(e,t=!1){var n=t?" !important;":";",a="";for(var i of Object.keys(e)){var r=e[i];r!=null&&r!==""&&(a+=" "+i+": "+r+n)}return a}function to(e,t){if(t){var n="",a,i;return Array.isArray(t)?(a=t[0],i=t[1]):a=t,a&&(n+=_i(a)),i&&(n+=_i(i,!0)),n=n.trim(),n===""?null:n}return String(e)}function ut(e,t,n,a,i,r){var s=e[Oa];if(s!==n||s===void 0){var l=eo(n,a,r);l==null?e.removeAttribute("class"):e.className=l,e[Oa]=n}else if(r&&i!==r)for(var o in r){var d=!!r[o];(i==null||d!==!!i[o])&&e.classList.toggle(o,d)}return r}function Ma(e,t={},n,a){for(var i in n){var r=n[i];t[i]!==r&&(n[i]==null?e.style.removeProperty(i):e.style.setProperty(i,r,a))}}function ia(e,t,n,a){var i=e[Ga];if(i!==t){var r=to(t,a);r==null?e.removeAttribute("style"):e.style.cssText=r,e[Ga]=t}else a&&(Array.isArray(a)?(Ma(e,n==null?void 0:n[0],a[0]),Ma(e,n==null?void 0:n[1],a[1],"important")):Ma(e,n,a));return a}const no=Symbol("is custom element"),ao=Symbol("is html");function ee(e,t,n,a){var i=io(e),r=i[t];r!==(i[t]=n)&&(t==="loading"&&(e[Gr]=n),n==null?e.removeAttribute(t):typeof n!="string"&&ro(e).has(t)?e[t]=n:e.setAttribute(t,n))}function io(e){return e[ra]??(e[ra]={[no]:e.nodeName.includes("-"),[ao]:e.namespaceURI===Ni})}var Ai=new Map;function ro(e){var t=e.getAttribute("is")||e.nodeName,n=Ai.get(t);if(n)return n;Ai.set(t,n=new Set);for(var a,i=e,r=Element.prototype;r!==i;){a=ji(i);for(var s in a)a[s].set&&s!=="innerHTML"&&s!=="textContent"&&s!=="innerText"&&n.add(s);i=Qa(i)}return n}function Ia(e,t){return e===t||(e==null?void 0:e[rn])===t}function ki(e=ei(),t,n,a){var i=ae.r,r=B;return pr(()=>{var s,l;return si(()=>{s=l,l=(a==null?void 0:a())||[],Zn(()=>{Ia(n(...l),e)||(t(e,...l),s&&Ia(n(...s),e)&&t(null,...s))})}),()=>{let o=r;for(;o!==i&&o.parent!==null&&o.parent.f&Gn;)o=o.parent;const d=()=>{l&&Ia(n(...l),e)&&t(null,...l)},h=o.teardown;o.teardown=()=>{d(),h==null||h()}}}),e}function Qn(e=!1){const t=ae,n=t.l.u;if(!n)return;let a=()=>Ar(t.s);if(e){let i=0,r={};const s=ya(()=>{let l=!1;const o=t.s;for(const d in o)o[d]!==r[d]&&(r[d]=o[d],l=!0);return l&&i++,i});a=()=>p(s)}n.b.length&&Ps(()=>{Ti(t,a),qa(n.b)}),Ha(()=>{const i=Zn(()=>n.m.map(qr));return()=>{for(const r of i)typeof r=="function"&&r()}}),n.a.length&&Ha(()=>{Ti(t,a),qa(n.a)})}function Ti(e,t){if(e.l.s)for(const n of e.l.s)p(n);t()}function Pr(e){ae===null&&Vr(),Jn&&ae.l!==null?so(ae).m.push(e):Ha(()=>{const t=Zn(e);if(typeof t=="function")return t})}function so(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const oo="5";var zi;typeof window<"u"&&((zi=window.__svelte??(window.__svelte={})).v??(zi.v=new Set)).add(oo);os();var lo=A('<div class="container-xl mx-auto main-content-1"><!></div>');function co(e,t){var n=lo(),a=w(n);qn(a,()=>t.children),b(e,n)}var po=A('<div class="container-lg"><div class="row"><div class="col-sm-2"></div> <div class="col-sm-8 entry-content"><!></div></div></div>');function ho(e,t){var n=po(),a=w(n),i=z(w(a),2),r=w(i);qn(r,()=>t.children),b(e,n)}const go=["Partnership","Partnership","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated"],fo=["Lawsuit","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated"],uo=["Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated"],vo=["Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated"],mo={"The Wall Street Journal":["Partnership","Lawsuit","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated"],"Los Angeles Times":["Unaffiliated","Partnership","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated"],"The Texas Tribune":["Unaffiliated","Partnership","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated"],Time:go,CBC:fo,"Entertainment Weekly":["Partnership","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated"],"Mississippi Today":["Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated"],"Mother Jones":["Lawsuit","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated"],ProPublica:uo,"San Francisco Chronicle":["Partnership","Unaffiliated","Unaffiliated","Partnership","Unaffiliated","Unaffiliated"],TechCrunch:vo,"The Examination":["Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated"],"Boston Globe":["Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated"],"Missouri Independent":["Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated"],"National Geographic":["Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated"],"Philadelphia Tribune":["Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated"],"Seattle Times":["Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated"],"The Dispatch":["Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated"],"The Globe and Mail":["Lawsuit","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated","Unaffiliated"],"USA Today":["Unaffiliated","Unaffiliated","Unaffiliated","Partnership","Unaffiliated","Unaffiliated"]},yo=["Allowed","Allowed","Unknown","Allowed","Unknown","Allowed"],wo=["Blocked","Allowed","Unknown","Allowed","Unknown","Blocked"],bo=["Allowed","Allowed","Unknown","Allowed","Unknown","Allowed"],xo=["Allowed","Allowed","Unknown","Allowed","Unknown","Blocked"],Pi={"The Wall Street Journal":["Allowed","Blocked","Unknown","Allowed","Unknown","Blocked"],"Los Angeles Times":["Allowed","Allowed","Unknown","Allowed","Unknown","Allowed"],"The Texas Tribune":["Allowed","Allowed","Unknown","Allowed","Unknown","Allowed"],Time:yo,CBC:wo,"Entertainment Weekly":["Allowed","Allowed","Unknown","Allowed","Unknown","Allowed"],"Mississippi Today":["Allowed","Allowed","Unknown","Allowed","Unknown","Allowed"],"Mother Jones":["Allowed","Allowed","Unknown","Allowed","Unknown","Allowed"],ProPublica:bo,"San Francisco Chronicle":["Allowed","Allowed","Unknown","Allowed","Unknown","Allowed"],TechCrunch:xo,"The Examination":["Allowed","Allowed","Unknown","Allowed","Unknown","Allowed"],"Boston Globe":["Blocked","Blocked","Unknown","Allowed","Unknown","Blocked"],"Missouri Independent":["Allowed","Blocked","Unknown","Allowed","Unknown","Blocked"],"National Geographic":["Allowed","Blocked","Unknown","Allowed","Unknown","Blocked"],"Philadelphia Tribune":["Blocked","Blocked","Unknown","Allowed","Unknown","Blocked"],"Seattle Times":["Blocked","Blocked","Unknown","Allowed","Unknown","Blocked"],"The Dispatch":["Blocked","Blocked","Unknown","Allowed","Unknown","Allowed"],"The Globe and Mail":["Blocked","Blocked","Unknown","Allowed","Unknown","Blocked"],"USA Today":["Blocked","Blocked","Unknown","Allowed","Unknown","Blocked"]},_o=""+new URL("excerpt-example-Dp8drUJ9.png",import.meta.url).href;var Ao=A("<p> </p>");function nn(e,t){var n=Ao(),a=Q(n,!0);G(()=>J(a,t.text)),b(e,n)}const ko=e=>{var t=Co(),n=w(t);G(()=>ee(n,"src",_o)),b(e,t)};var To=A('<span class="svelte-z2zu4m"></span>'),Po=A('<div class="matrix svelte-z2zu4m" aria-hidden="true"></div>'),Co=A('<figure class="excerpt-figure svelte-z2zu4m"><img class="example-screenshot svelte-z2zu4m" alt="Mother Jones article with the study excerpt highlighted"/> <figcaption class="svelte-z2zu4m">Sample of a selected excerpt.</figcaption></figure>'),zo=A('<div class="example-screenshot example-prompt svelte-z2zu4m" aria-label="Example study prompt"><div class="query-bubble svelte-z2zu4m"><blockquote class="svelte-z2zu4m"> <span class="selected-excerpt-overlay svelte-z2zu4m" aria-hidden="true">Selected excerpt</span></blockquote> <span class="query-separator svelte-z2zu4m" aria-hidden="true">--</span> <p class="svelte-z2zu4m"></p></div> <p class="query-response svelte-z2zu4m">The quote is from <mark class="svelte-z2zu4m">Article headline</mark>, published by <mark class="svelte-z2zu4m">Publisher</mark> on <mark class="svelte-z2zu4m">Date</mark>.</p> <p class="svelte-z2zu4m"><strong class="svelte-z2zu4m">Citation:</strong> <mark class="svelte-z2zu4m">Source URL</mark></p></div>'),Eo=A('<th scope="col"> </th>'),So=A('<div class="excerpt-count svelte-z2zu4m">10 articles</div>'),Uo=A("<span></span>"),jo=A('<td class="excerpt-cell svelte-z2zu4m"><span class="visually-hidden svelte-z2zu4m">10 article excerpts</span> <div class="excerpt-tiles svelte-z2zu4m" aria-hidden="true"><!> <!></div></td>'),Mo=A('<td class="svelte-z2zu4m"><span class="cell svelte-z2zu4m" aria-hidden="true"> </span> <span class="visually-hidden svelte-z2zu4m"> </span></td>'),Io=A('<tr class="svelte-z2zu4m"><th scope="row" class="svelte-z2zu4m"> </th><!></tr>'),qo=A('<span class="svelte-z2zu4m"> </span>'),Ro=A('<div class="excerpt-example svelte-z2zu4m"><!></div>'),Oo=A('<div class="expanded-query svelte-z2zu4m"><!></div>'),Go=A('<div><table class="crawler-table svelte-z2zu4m"><caption class="visually-hidden svelte-z2zu4m"> </caption><thead class="svelte-z2zu4m"><tr class="svelte-z2zu4m"><th scope="col" class="svelte-z2zu4m"><span class="visually-hidden svelte-z2zu4m">Publisher</span></th><!></tr></thead><tbody class="svelte-z2zu4m"></tbody></table> <div><!> <span data-affiliation="Partnership" class="svelte-z2zu4m">Partnership</span> <span data-affiliation="Lawsuit" class="svelte-z2zu4m">Lawsuit</span></div> <!></div>'),No=A('<div class="result svelte-z2zu4m"><!> <span class="svelte-z2zu4m"> </span></div>'),Lo=A('<div><div class="results svelte-z2zu4m" role="group" aria-label="Eight grids of 200 queries each, for 1,600 queries total"></div></div>'),Fo=A('<li class="svelte-z2zu4m"><span class="grading-bullet svelte-z2zu4m" aria-hidden="true"> </span> <span class="svelte-z2zu4m"><strong class="svelte-z2zu4m"> </strong> </span></li>'),Do=A('<ul class="grading-rubric svelte-z2zu4m" aria-label="Response grading labels"></ul>'),Bo=A('<p class="svelte-z2zu4m"> <strong></strong> </p>'),Ho=A('<div class="scene-layer svelte-z2zu4m"><!></div>'),Wo=A('<div class="stage svelte-z2zu4m"><div class="scene svelte-z2zu4m"><div><!></div> <!></div></div>'),Ko=A('<p class="svelte-z2zu4m"> <strong class="svelte-z2zu4m"></strong> </p>'),Jo=A('<p class="svelte-z2zu4m"> <strong class="svelte-z2zu4m"> </strong> </p>'),Yo=A('<div class="grading-desktop svelte-z2zu4m"><!></div>'),Vo=A('<div class="inline-scene svelte-z2zu4m"><!></div>'),Xo=A('<section><div class="step-copy svelte-z2zu4m"><!> <!> <!></div> <!></section>'),Zo=A("<li> </li>"),Qo=A("<ul></ul>"),$o=A('<!> <div><!> <div class="steps svelte-z2zu4m"></div></div> <div class="grading-mobile svelte-z2zu4m"><!></div> <!>',1);function el(e,t){Xt(t,!0);const n=y=>{var k=Po();xe(k,21,()=>m,be,(T,M)=>{var C=ft(),F=me(C);xe(F,16,()=>Array(10),be,(L,H)=>{var x=To();b(L,x)}),b(T,C)}),b(y,k)},a=y=>{var k=zo(),T=w(k),M=w(T),C=w(M);C.nodeValue="“Today, she is the director of holistic health and fitness for the 101st Airborne Division at Fort Campbell. She lives about an hour south of base in Nashville with her partner and a wildly affectionate dog named Mozzie. She rides her motorcycle, plays keyboard and piano, guitar and bass, and browses bookstores on the weekend. Despite the growing political tension over trans issues, life is normal most of the time. She does not feel much like she stands out anymore; she does not want to talk about standing out.” ";var F=z(M,4);F.textContent="Identify the article that contains this quote. Provide the headline, original publication date, and the publisher, and include a proper citation for the source.",b(y,k)},i=(y,k=On)=>{var T=ft(),M=me(T);{var C=F=>{var L=Go();let H;ia(L,"",{},{"--query-beat":v+"ms"});var x=w(L),P=w(x),j=Q(P,!0),Y=z(P),re=w(Y),K=z(w(re));xe(K,17,()=>g,be,(V,Z)=>{var fe=Eo();let ze;var xt=Q(fe,!0);G(()=>{ze=ut(fe,1,"svelte-z2zu4m",null,ze,{muted:k()>0}),J(xt,p(Z))}),b(V,fe)});var se=z(Y);xe(se,21,()=>m,be,(V,Z,fe)=>{var ze=Io();ia(ze,"",{},{"--order":fe});var xt=w(ze),Rt=Q(xt,!0),ka=z(xt);{var Cr=Qt=>{var $t=jo(),Ta=z(w($t),2),ea=w(Ta);{var wn=_t=>{var Ot=So();b(_t,Ot)};ue(ea,_t=>{k()===1&&fe===0&&_t(wn)})}var Pa=z(ea,2);xe(Pa,16,()=>Array(10),be,(_t,Ot,bn)=>{var xn=Uo();let ta;ia(xn,"",{},{"--tile-order":bn}),G(()=>ta=ut(xn,1,"svelte-z2zu4m",null,ta,{highlighted:p(Z)==="Mother Jones"&&bn===9})),b(_t,xn)}),G(()=>ee($t,"colspan",g.length)),b(Qt,$t)},zr=Qt=>{var $t=ft(),Ta=me($t);xe(Ta,17,()=>Pi[p(Z)],be,(ea,wn,Pa)=>{const _t=le(()=>mo[p(Z)][Pa]);var Ot=Mo(),bn=w(Ot),xn=Q(bn,!0),ta=z(bn,2),Er=Q(ta);G(()=>{ee(Ot,"data-status",p(wn)),ee(Ot,"data-affiliation",p(_t)),J(xn,_[p(wn)]),J(Er,`${p(wn)??""}, ${p(_t)??""}`)}),b(ea,Ot)}),b(Qt,$t)};ue(ka,Qt=>{k()>0?Qt(Cr):Qt(zr,-1)})}G(()=>J(Rt,p(Z))),b(V,ze)});var ve=z(x,2);let Pe;var Oe=w(ve);xe(Oe,17,()=>Object.entries(_),be,(V,Z)=>{var fe=le(()=>Rr(p(Z),2));let ze=()=>p(fe)[0],xt=()=>p(fe)[1];var Rt=qo(),ka=Q(Rt);G(()=>{ee(Rt,"data-status",ze()),J(ka,`${xt()??""} ${ze()==="Unknown"?"Crawler unknown":`Crawler ${ze()}`}`)}),b(V,Rt)});var W=z(ve,2);{var oe=V=>{var Z=Ro(),fe=w(Z);ko(fe),b(V,Z)},Ce=V=>{var Z=Oo(),fe=w(Z);a(fe),bi(Z,ze=>bt==null?void 0:bt(ze)),b(V,Z)};ue(W,V=>{k()===1?V(oe):k()===2&&(p(d)||p(o)===2)&&V(Ce,1)})}G(()=>{H=ut(L,1,"selection svelte-z2zu4m",null,H,{focused:k()===2}),J(j,k()===0?"Crawler access and affiliations by AI company":"Article excerpts by publisher"),Pe=ut(ve,1,"legend svelte-z2zu4m",null,Pe,{muted:k()>0})}),b(F,L)};ue(M,F=>{k()<3&&F(C)})}b(y,T)},r=(y,k=On)=>{var T=Lo();let M;var C=w(T);xe(C,21,()=>u,be,(F,L,H)=>{var x=No();let P;var j=w(x);n(j);var Y=z(j,2),re=Q(Y,!0);G(()=>{P=ia(x,"",P,{"--reverse-order":u.length-1-H}),J(re,p(L))}),b(F,x)}),bi(T,(F,L)=>Re==null?void 0:Re(F,L),k),G(()=>M=ut(T,1,"total svelte-z2zu4m",null,M,{multiplying:k()})),b(y,T)},s=y=>{var k=ft(),T=me(k);xe(T,17,()=>p(ne),be,(M,C)=>{var F=ft(),L=me(F);{var H=j=>{var Y=Do();xe(Y,21,()=>p(C).split(/\r?\n/),be,(re,K)=>{const se=le(()=>p(K).indexOf(":")),ve=le(()=>p(K).slice(2,p(se)));var Pe=Fo(),Oe=w(Pe),W=Q(Oe,!0),oe=z(Oe,2),Ce=w(oe),V=Q(Ce),Z=z(Ce);G(fe=>{J(W,p(ve)==="Crawler Blocked"?"×":""),J(V,`${p(ve)??""}.`),J(Z,` ${fe??""}`)},[()=>p(K).slice(p(se)+1).trim()]),b(re,Pe)}),b(j,Y)},x=le(()=>p(C).startsWith("- ")),P=j=>{nn(j,{get text(){return p(C)}})};ue(L,j=>{p(x)?j(H):j(P,-1)})}b(M,F)}),b(y,k)};let l=[],o=Ze(0),d=Ze(!1),h=Ze(-1),f;const m=Object.keys(Pi),g=["OpenAI","Perplexity","DeepSeek","Microsoft","xAI","Google"],v=300,_={Allowed:"✓",Blocked:"×",Unknown:"?"},u=["ChatGPT Search","Perplexity","Perplexity Pro","DeepSeek-V3 Search","Copilot","Grok-2","Grok-3 (beta)","Gemini 2.0 Flash"],E=["Choose 20 news publishers","Ten excerpts per publisher","An example query and response","1,600 queries in total"],R=le(()=>t.paragraphs.find(y=>y.startsWith("We systematically tested "))),X="eight generative search tools",ie=le(()=>{var y;return(y=p(R))==null?void 0:y.split(X)}),Ue="selected ten articles from each publisher",je=le(()=>t.paragraphs.find(y=>y.startsWith("We randomly selected "))),pe=le(()=>{var y;return(y=p(je))==null?void 0:y.split(Ue)}),Be="identify the corresponding article’s headline, original publisher, publication date, and URL",Ve=le(()=>[t.paragraphs.filter(y=>y.startsWith("We chose")),t.paragraphs.filter(y=>y.startsWith("We deliberately chose excerpts")),t.paragraphs.filter(y=>y.startsWith("After providing each chatbot")),t.paragraphs.filter(y=>y.startsWith("We ran sixteen hundred"))]),ne=le(()=>t.paragraphs.filter(y=>y.startsWith("We manually evaluated")||y.startsWith("- "))),Te=le(()=>t.paragraphs.filter(y=>y!==p(R)&&y!==p(je)&&!p(Ve).flat().includes(y)&&!p(ne).includes(y)));function Re(y,k){if(!k)return;const T=jt(y.closest(".scene"));if(!T){y.classList.remove("multiplying");return}const M=Array.from(y.querySelectorAll(".result"),(C,F)=>setTimeout(()=>C.style.setProperty("--panel-revealed","1"),450+F*120));return{destroy(){T.cancel(),M.forEach(clearTimeout)}}}function jt(y,k=!1){const T=y.querySelectorAll(".excerpt-tiles"),M=y.querySelector(".matrix");if(!T.length||!M)return;const C=T[0].getBoundingClientRect(),F=T[T.length-1].getBoundingClientRect(),L=M.getBoundingClientRect(),H=[{transform:`translate(${C.left-L.left}px, ${C.top-L.top}px)
          scale(${C.width/L.width}, ${(F.bottom-C.top)/L.height})`},{transform:"none"}];return M.animate(k?H.reverse():H,{duration:k?620:450,delay:k?840:0,easing:"ease-in-out",fill:k?"forwards":"none"})}function bt(y){const k=y.closest(".selection"),T=k.querySelector(".highlighted"),M=T.closest("table"),C=()=>{const L=k.getBoundingClientRect(),H=T.getBoundingClientRect(),x=H.top+H.height/2;y.style.setProperty("--query-center",`${100*(x-L.top)/L.height}%`);const P=y.getBoundingClientRect();y.style.setProperty("--triangle-tip",`${100*(x-P.top)/P.height}%`),y.style.setProperty("--triangle-width",`${Math.max(0,P.left-H.right)}px`)};C();const F=new ResizeObserver(C);return F.observe(k),F.observe(T),F.observe(y),M.addEventListener("transitionend",C),{destroy(){F.disconnect(),M.removeEventListener("transitionend",C)}}}Pr(()=>{const y=matchMedia("(max-width: 850px)"),k=matchMedia("(prefers-reduced-motion: reduce)");let T=0,M,C;function F(){T=0;const x=innerHeight*(y.matches?.55:.54),P=Math.max(0,l.findLastIndex(j=>j&&j.getBoundingClientRect().top<=x));if(!(p(h)>=0&&P===p(h)-1)&&(p(h)>=0&&(clearTimeout(M),C==null||C.cancel(),Me(h,-1)),P!==p(o)))if(!p(d)&&P===p(o)-1){Me(h,p(o),!0),p(o)===3&&(C=jt(f.querySelector(".scene"),!0));const j=p(o)===3?1460:p(o)===2?v*3:620;M=setTimeout(()=>{Me(o,P,!0),Me(h,-1),C==null||C.cancel()},j)}else Me(o,P,!0)}function L(){T||(T=requestAnimationFrame(F))}function H(){Me(d,k.matches,!0),p(d)&&p(h)>=0&&(clearTimeout(M),C==null||C.cancel(),Me(h,-1)),js().then(L)}return H(),y.addEventListener("change",H),k.addEventListener("change",H),window.addEventListener("scroll",L,{passive:!0}),window.addEventListener("resize",L),()=>{y.removeEventListener("change",H),k.removeEventListener("change",H),window.removeEventListener("scroll",L),window.removeEventListener("resize",L),cancelAnimationFrame(T),clearTimeout(M),C==null||C.cancel()}});var Mt=$o(),It=me(Mt);{var $=y=>{var k=Bo(),T=w(k),M=z(T);M.textContent="eight generative search tools";var C=z(M,1,!0);G(()=>{J(T,p(ie)[0]),J(C,p(ie)[1])}),b(y,k)},qt=y=>{nn(y,{get text(){return p(R)}})};ue(It,y=>{var k;((k=p(ie))==null?void 0:k.length)===2?y($):p(R)&&y(qt,1)})}var de=z(It,2);let at;var yn=w(de);{var ba=y=>{var k=Wo(),T=w(k),M=w(T);let C;var F=w(M);{let x=le(()=>Math.min(p(o),2));i(F,()=>p(x))}var L=z(M,2);{var H=x=>{var P=Ho(),j=w(P);r(j,()=>!0),b(x,P)};ue(L,x=>{p(o)===3&&x(H)})}G(()=>{C=ut(M,1,"scene-layer svelte-z2zu4m",null,C,{"source-only":p(o)===3}),ee(M,"aria-hidden",p(o)===3)}),b(y,k)};ue(yn,y=>{p(d)||y(ba)})}var xa=z(yn,2);xe(xa,21,()=>E,be,(y,k,T)=>{var M=Xo();let C;var F=w(M),L=w(F);{var H=K=>{var se=ft(),ve=me(se);{var Pe=W=>{var oe=Ko(),Ce=w(oe),V=z(Ce);V.textContent="selected ten articles from each publisher";var Z=z(V,1,!0);G(()=>{J(Ce,p(pe)[0]),J(Z,p(pe)[1])}),b(W,oe)},Oe=W=>{nn(W,{get text(){return p(je)}})};ue(ve,W=>{var oe;((oe=p(pe))==null?void 0:oe.length)===2?W(Pe):p(je)&&W(Oe,1)})}b(K,se)};ue(L,K=>{T===1&&K(H)})}var x=z(L,2);xe(x,17,()=>p(Ve)[T],be,(K,se)=>{const ve=le(()=>T===0?"20 news publishers with varying stances on AI access":Be),Pe=le(()=>p(se).split(p(ve)));var Oe=ft(),W=me(Oe);{var oe=V=>{var Z=Jo(),fe=w(Z),ze=z(fe),xt=Q(ze,!0),Rt=z(ze,1,!0);G(()=>{J(fe,p(Pe)[0]),J(xt,p(ve)),J(Rt,p(Pe)[1])}),b(V,Z)},Ce=V=>{nn(V,{get text(){return p(se)}})};ue(W,V=>{(T===0||T===2)&&p(Pe).length===2?V(oe):V(Ce,-1)})}b(K,Oe)});var P=z(x,2);{var j=K=>{var se=Yo(),ve=w(se);s(ve),b(K,se)};ue(P,K=>{T===2&&K(j)})}var Y=z(F,2);{var re=K=>{var se=Vo(),ve=w(se);{var Pe=W=>{r(W,()=>!1)},Oe=W=>{i(W,()=>T)};ue(ve,W=>{T===3?W(Pe):W(Oe,-1)})}b(K,se)};ue(Y,K=>{p(d)&&K(re)})}ki(M,(K,se)=>l[se]=K,K=>l==null?void 0:l[K],()=>[T]),G(()=>{C=ut(M,1,"step svelte-z2zu4m",null,C,{"holding-copy":T===1&&p(h)===2}),ee(M,"aria-label",p(k)),ee(M,"aria-current",!p(d)&&T===p(o)?"step":void 0)}),b(y,M)}),ki(de,y=>f=y,()=>f);var $n=z(de,2),_a=w($n);s(_a);var Aa=z($n,2);xe(Aa,17,()=>p(Te),be,(y,k)=>{var T=ft(),M=me(T);{var C=H=>{var x=Qo();xe(x,21,()=>p(k).split(/\r?\n/),be,(P,j)=>{var Y=Zo(),re=Q(Y,!0);G(K=>J(re,K),[()=>p(j).slice(2)]),b(P,Y)}),b(H,x)},F=le(()=>p(k).startsWith("- ")),L=H=>{nn(H,{get text(){return p(k)}})};ue(M,H=>{p(F)?H(C):H(L,-1)})}b(y,T)}),G(()=>at=ut(de,1,"story svelte-z2zu4m",null,at,{"rewind-tiles":p(h)===1,"rewind-query":p(h)===2,"rewind-panels":p(h)===3})),b(e,Mt),Zt()}var tl=A('<div class="container-fluid top-nav-box desktop-nav-container"><div class="container-lg top-nav-1"><div class="cjr-header-wrap"><header class="cjr-header"><span class="header-links"><a class="cjr-header-link" href="https://cjr.org/most-recent">Most Recent</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a class="cjr-header-link" href="https://cjr.org/issues">Special Issues</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a class="cjr-header-link" href="https://cjr.org/the-kicker">The Kicker Podcast</a></span> <a class="cjr-header-donate" href="https://members.cjr.org/member/?a=nav-joinus&amp;utm_source=cjr-org&amp;utm_medium=cjr-homehead&amp;utm_campaign=m-land" target="_blank"><img src="https://cjr.org/wp-content/themes/cjr2017/_resources2022/images/join-us-orange-rounded-balto.png" alt="Join us" class="cjr-button-donate"/></a> <div class="js-nav-group"><button id="cjr-header__hamburger" class="cjr-header__hamburger" aria-label="Toggle CJR navigation" aria-expanded="false"><span id="cjr-head-ham-lines" class="cjr-header__hamburger-lines"></span></button> <div id="navigation" class="cjr-nav"><div class="container-lg cjr-search-container"><form class="nav-search" id="search" action="https://www.cjr.org/search"><input type="hidden" name="cx" value="002110349687880336610:9r4jniuv6ko"/> <input type="hidden" name="cof" value="FORID:11"/> <input type="hidden" name="ie" value="UTF-8"/> <input type="search" name="q" placeholder="Search..."/> <button type="submit">Search</button></form></div> <div class="container-lg cjr-main-container"><nav class="cjr-main-menu"><ul class="cjr-main-menu__list"><li class="cjr-main-menu__item"><a class="cjr-main-menu__link" href="https://cjr.org/most-recent">Recent Stories</a></li> <li class="cjr-main-menu__item"><a class="cjr-main-menu__link" href="https://cjr.org/issues">Special Issues</a></li> <li class="cjr-main-menu__item"><a class="cjr-main-menu__link" href="https://cjr.org/the-kicker">The Kicker Podcast</a></li> <li class="cjr-main-menu__item"><a class="cjr-main-menu__link" href="https://cjr.org/tow-center">Tow Center</a></li></ul></nav> <div class="cjr-nav__second"><ul class="cjr-nav__second-menu cjr-menu-inline"><li class="cjr-menu-inline__item"><a class="cjr-menu-inline__link" href="https://cjr.org/about_us/mission_statement.php" title="">About</a></li> <li class="cjr-menu-inline__item"><a class="cjr-menu-inline__link" href="https://members.cjr.org/member/?a=nav-mem&amp;utm_source=cjr-org&amp;utm_medium=cjr-nav&amp;utm_campaign=m-land" title="Membership">Memberships</a></li> <li class="cjr-menu-inline__item"><a class="cjr-menu-inline__link" href="https://cjr.org/about_us/donate.php" title="Donate">Donate</a></li> <li class="cjr-menu-inline__item"><a class="cjr-menu-inline__link" href="https://cjr.org/about_us/advertise.php" title="Advertise">Advertise</a></li> <li class="cjr-menu-inline__item"><a class="cjr-menu-inline__link" href="https://cjr.org/about_us/contact.php" title="Contact">Contact</a></li></ul></div></div></div></div></header></div> <div class="cjr-header-logo-wrap"><a href="https://www.cjr.org/" rel="home"><img alt="Columbia Journalism Review" class="cjr-header-logo-image" width="1200" height="65"/></a></div></div></div> <div class="container-fluid top-nav-box mobile-nav-container"><div class="container-lg top-nav-1"><header class="cjr-header"><a class="cjr-header__logo" href="https://www.cjr.org/" rel="home"><img alt="Columbia Journalism Review" class="cjr-logo-mobile" width="600" height="278"/></a> <a class="cjr-header-donate" href="https://members.cjr.org/member/?a=nav-joinus&amp;utm_source=cjr-org&amp;utm_medium=cjr-homehead&amp;utm_campaign=m-land" target="_blank"><img src="https://cjr.org/wp-content/themes/cjr2017/_resources2022/images/join-us-orange-rounded-balto.png" alt="Join us" class="cjr-button-donate"/></a> <div class="js-nav-group"><button class="cjr-header__hamburger" aria-label="Toggle CJR navigation" aria-expanded="false"><span class="cjr-header__hamburger-lines"></span></button> <div class="cjr-nav"><div class="container-lg cjr-search-container"><form class="nav-search" action="https://www.cjr.org/search"><input type="hidden" name="cx" value="002110349687880336610:9r4jniuv6ko"/> <input type="hidden" name="cof" value="FORID:11"/> <input type="hidden" name="ie" value="UTF-8"/> <input type="search" name="q" placeholder="Search..."/> <button type="submit">Search</button></form></div> <div class="container-lg cjr-main-container"><nav class="cjr-main-menu"><ul class="cjr-main-menu__list"><li class="cjr-main-menu__item"><a class="cjr-main-menu__link" href="https://cjr.org/most-recent">Recent Stories</a></li> <li class="cjr-main-menu__item"><a class="cjr-main-menu__link" href="https://cjr.org/issues">Special Issues</a></li> <li class="cjr-main-menu__item"><a class="cjr-main-menu__link" href="https://cjr.org/the-kicker">The Kicker Podcast</a></li> <li class="cjr-main-menu__item"><a class="cjr-main-menu__link" href="https://cjr.org/tow-center">Tow Center</a></li></ul></nav> <div class="cjr-nav__second"><ul class="cjr-nav__second-menu cjr-menu-inline"><li class="cjr-menu-inline__item"><a class="cjr-menu-inline__link" href="https://cjr.org/about_us/mission_statement.php" title="">About</a></li> <li class="cjr-menu-inline__item"><a class="cjr-menu-inline__link" href="https://members.cjr.org/member/?a=nav-mem&amp;utm_source=cjr-org&amp;utm_medium=cjr-nav&amp;utm_campaign=m-land" title="Membership">Memberships</a></li> <li class="cjr-menu-inline__item"><a class="cjr-menu-inline__link" href="https://cjr.org/about_us/donate.php" title="Donate">Donate</a></li> <li class="cjr-menu-inline__item"><a class="cjr-menu-inline__link" href="https://cjr.org/about_us/advertise.php" title="Advertise">Advertise</a></li> <li class="cjr-menu-inline__item"><a class="cjr-menu-inline__link" href="https://cjr.org/about_us/contact.php" title="Contact">Contact</a></li></ul></div></div></div></div></header></div></div>',1);function nl(e,t){Xt(t,!1),Pr(()=>{document.querySelectorAll(".cjr-header__hamburger").forEach(g=>{var _;const v=(_=g.closest(".js-nav-group"))==null?void 0:_.querySelector(".cjr-nav");v&&g.addEventListener("click",()=>{g.classList.toggle("is-active"),g.setAttribute("aria-expanded",String(v.classList.toggle("is-open")))})})}),Qn();var n=tl(),a=me(n),i=w(a),r=z(w(i),2),s=w(r),l=Q(s),o=z(a,2),d=w(o),h=w(d),f=w(h),m=Q(f);G(()=>{ee(l,"src","./graphics/cjr/cjr-logo-2x-b.png"),ee(m,"src","./graphics/cjr/cjr-logo-mobile-2x.png")}),b(e,n),Zt()}var al=A('<footer id="footer"><div id="footer-inner"><div class="logo"><a href="https://www.cjr.org/" rel="home"><img alt="Columbia Journalism Review" width="440" height="25"/></a> <p>The voice of journalism, since 1961</p></div> <div class="lists"><div class="list"><h3>About</h3> <ul><li><a href="https://www.cjr.org/about_us/mission_statement.php">Mission</a></li> <li><a href="https://www.cjr.org/about_us/masthead.php">Masthead</a></li> <li><a href="https://www.cjr.org/about_us/privacy_policy.php">Privacy Policy</a></li> <li><a href="https://www.cjr.org/about_us/contact.php">Contact</a></li></ul></div> <div class="list"><h3>Support CJR</h3> <ul><li><a href="https://members.cjr.org/member/?a=nav-foot-mem&amp;utm_source=cjr-org&amp;utm_medium=cjr-nav&amp;utm_campaign=m-land">Become a Member</a></li> <li><a href="https://www.cjr.org/about_us/donate.php">Donate</a></li></ul></div> <div class="list"><h3>Advertise</h3> <ul><li><a href="https://www.cjr.org/about_us/advertise.php">Contact Us</a></li></ul></div></div> <div class="copyright"><span class="copyright-mobile">Copyright 2026,</span> Columbia Journalism Review</div></div></footer>');function il(e,t){Xt(t,!1),Qn();var n=al(),a=w(n),i=w(a),r=w(i),s=Q(r);G(()=>ee(s,"src","./graphics/cjr/cjr-logo-horizontal-footer-1100.png")),b(e,n),Zt()}var rl=A(`<div class="container-lg tow-ccn-about"><div class="row"><div class="container text-left tow-ccn-main"><div class="row tow-ccn-line"></div> <div class="row"><div class="col-4 tow-ccn-image"><a href="https://towcenter.columbia.edu/" target="_blank"><img alt="Tow Center for Digital Journalism" class="tow-ccn-tout-image-1"/></a></div> <div class="col-7 tow-ccn-tout"><h2 id="about-tow-center" class="tow-ccn-tout-main-title svelte-ofq6m6">About the Tow Center</h2> <span class="tow-ccn-tout-excerpt"><p>The Tow Center for Digital Journalism at Columbia's Graduate School of Journalism, a partner of CJR, is a research center exploring the ways in which technology is changing journalism, its practice and its consumption — as we seek new ways to judge the reliability, standards, and credibility of information online.</p> <p><a href="https://cjr.org/tow-center/" class="tow-ccn-tout-link">View other Tow articles »</a></p> <p><a href="https://towcenter.columbia.edu/" class="tow-ccn-tout-link" target="_blank">Visit Tow Center website »</a></p></span></div></div></div></div></div>`);function sl(e,t){Xt(t,!1),Qn();var n=rl(),a=w(n),i=w(a),r=z(w(i),2),s=w(r),l=w(s),o=Q(l);G(()=>ee(o,"src","./graphics/cjr/tow-logo-bottom-500.png")),b(e,n),Zt()}var ol=A('<small id="small-category"><a href="https://www.cjr.org/tow-center/"><img alt="Tow Center" class="tow-ccn-slug-image"/></a></small>');function ll(e,t){Xt(t,!1),Qn();var n=ol(),a=w(n),i=Q(a);G(()=>ee(i,"src","./graphics/cjr/tow-slug-500-2.png")),b(e,n),Zt()}var cl=A('<div class="container-lg title-image-lg"><!> <header class="col-sm-10"><h1 class="main-title"> </h1> <div class="post-excerpt"><p> </p></div> <div class="meta"><time class="date svelte-ev0zn9"> </time> <span class="byline"><em>By</em> <!></span></div></header> <!></div>');function pl(e,t){var n=cl(),a=w(n);qn(a,()=>t.children??On);var i=z(a,2),r=w(i),s=Q(r,!0),l=z(r,2),o=w(l),d=Q(o,!0),h=z(l,2),f=w(h),m=Q(f,!0),g=z(f,2),v=z(w(g),2);qn(v,()=>t.byline);var _=z(i,2);qn(_,()=>t.hero??On),G(()=>{J(s,t.hed),J(d,t.subhed),ee(f,"datetime",t.datetime),J(m,t.date)}),b(e,n)}const dl=`AI search tools are rapidly gaining in popularity, with nearly one in four Americans now saying they have used AI in place of traditional search engines. These tools derive their value from crawling the internet for up-to-date, relevant information—content that is often produced by news publishers.

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
`,hl=`<!-- Generated by all2html --><!-- source: graph5 -->
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
<!-- End all2html -->`,gl=`<!-- Generated by all2html --><!-- source: graph4 -->
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
<!-- End all2html -->`,fl=`<!-- Generated by all2html --><!-- source: graph3 -->
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
<!-- End all2html -->`,ul=`<!-- Generated by all2html --><!-- source: graph2 -->
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
<!-- End all2html -->`,vl=`<!-- Generated by all2html --><!-- source: graphs-copy -->
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
<!-- End all2html -->`;var ml=A('<a rel="author" href="https://www.cjr.org/author/klaudia-jazwinska">Klaudia Jaźwińska</a> and <a rel="author" href="https://www.cjr.org/author/aisvarya-chandrasekar">Aisvarya Chandrasekar</a>',1),yl=A('<figure class="image-hero-box"><img class="image-hero" width="1600" height="704" alt="Static on a broken television screen"/> <figcaption class="image-hero-caption">Image: The rack of a broken monitor or TV is the texture of a television screen, background for superimposing with the effect of grain noise, Александр Розов. Adobe Stock 1050902471</figcaption></figure>'),wl=A('<h2 class="svelte-1n46o8q">Methodology</h2> <!>',1),bl=A('<h2 class="svelte-1n46o8q">Download our data</h2> <p><a href="https://github.com/TowCenter/genSearch-Part2">Download the study dataset and read the access instructions on GitHub</a>.</p>',1),xl=A('<h2 class="svelte-1n46o8q"> </h2>'),_l=A("<h3> </h3>"),Al=A("<li> </li>"),kl=A("<ul></ul>"),Tl=A('<figure class="article-figure svelte-1n46o8q"><img loading="lazy" alt="" class="svelte-1n46o8q"/> <figcaption class="svelte-1n46o8q"> </figcaption></figure>'),Pl=A("<p><em> </em></p>"),Cl=A('<p class="lead-paragraph svelte-1n46o8q"> </p>'),zl=A("<p><strong></strong> </p>"),El=A("<figure></figure>"),Sl=A('<div class="study-table svelte-1n46o8q"><iframe title="Tow Center study data table" loading="lazy" class="svelte-1n46o8q"></iframe> <p class="svelte-1n46o8q"><a>Open the study data table in Airtable</a></p></div>'),Ul=A("<!> <!>",1),jl=A('<aside class="republication svelte-1n46o8q" aria-label="Republication credit"><p class="svelte-1n46o8q">This article is republished from <cite></cite>.</p> <a class="svelte-1n46o8q">Read the original article</a></aside> <!>',1),Ml=A("<!> <!> <!>",1),Il=A('<!> <main id="article" class="svelte-1n46o8q"><!></main> <!>',1);function ql(e,t){Xt(t,!1);const n="The generative search tools we tested had a common tendency to cite the wrong article",a=[{caption:"An example of Copilot declining",file:"copilot-decline.jpg",width:1486,height:1292},{caption:"An example of Gemini declining",file:"gemini-politics.jpg",width:1680,height:1146},{caption:"Despite having a partnership with the Texas Tribune, Perplexity cited an unofficial version",file:"perplexity-tribune.jpg",width:1988,height:988},{caption:"Although USA Today blocks ChatGPT’s crawler",file:"chatgpt-yahoo.jpg",width:1248,height:1108}],i="./graphics/article-figures/",r="https://airtable.com/embed/appg737s82fePQorq/shrSYddgl1MYeaxOH",s=[{after:"Overall, the chatbots often failed to retrieve the correct articles.",folder:"confidently-wrong",label:"Generative search tools were often confidently wrong in our study",html:vl},{after:"Premium models, such as Perplexity Pro",folder:"premium-models",className:"premium-graphic",label:"Response comparison for Perplexity and Grok models",html:ul},{after:"We expected chatbots",folder:"crawler-access",label:"Crawler access and response accuracy",html:fl},{after:n+".",folder:"citation-links",className:"citation-graphic",label:"Types of links cited by generative search tools",html:gl},{after:"A deal between AI companies and publishers often involves",folder:"licensing-deals",className:"licensing-graphic",label:"Accuracy for AI platforms and publishers with licensing deals",html:hl}].map(R=>({...R,html:R.html.replace(/src="([^"/]+\.png(?:\?[^"]*)?)"/g,(X,ie)=>`src="./graphics/${R.folder}/${ie}"`)})),l="https://www.cjr.org/tow_center/we-compared-eight-ai-search-engines-theyre-all-bad-at-citing-news.php",o=dl.trim().split(/\r?\n(?:[ \t]*\r?\n)+/),d=o.indexOf("## Methodology"),h=o.findIndex((R,X)=>X>d&&R.startsWith("## ")),f=o.filter((R,X)=>X<=d||X>=h),m=o.filter(R=>R.startsWith("## "));Qn();var g=Il(),v=me(g);nl(v,{});var _=z(v,2),u=w(_);co(u,{children:(R,X)=>{var ie=Ml(),Ue=me(ie);pl(Ue,{hed:"AI Search Has a Citation Problem",subhed:"We compared eight AI search engines. They’re all bad at citing news.",date:"March 6, 2025",datetime:"2025-03-06",byline:ne=>{var Te=ml();b(ne,Te)},hero:ne=>{var Te=yl(),Re=w(Te);G(()=>ee(Re,"src",i+"article-hero.jpg")),b(ne,Te)},children:(ne,Te)=>{ll(ne,{})}});var je=z(Ue,2);ho(je,{children:(Be,Ve)=>{var ne=jl(),Te=me(ne),Re=w(Te),jt=z(w(Re));jt.textContent="Columbia Journalism Review";var bt=z(Re,2);ee(bt,"href",l);var Mt=z(Te,2);xe(Mt,1,()=>f,be,(It,$,qt)=>{const de=Un(()=>a.find(x=>p($).startsWith(x.caption))),at=Un(()=>s.find(x=>p($).startsWith(x.after)));var yn=ft(),ba=me(yn);{var xa=x=>{var P=wl(),j=me(P),Y=z(j,2);{let re=Un(()=>o.slice(d+1,h));el(Y,{get paragraphs(){return p(re)}})}G(re=>ee(j,"id",re),[()=>"section-"+(m.indexOf(p($))+1)]),b(x,P)},$n=x=>{var P=bl(),j=me(P);G(Y=>ee(j,"id",Y),[()=>"section-"+(m.indexOf(p($))+1)]),b(x,P)},_a=x=>{var P=xl(),j=Q(P,!0);G((Y,re)=>{ee(P,"id",Y),J(j,re)},[()=>"section-"+(m.indexOf(p($))+1),()=>p($).slice(3)]),b(x,P)},Aa=le(()=>p($).startsWith("## ")),y=x=>{var P=_l(),j=Q(P,!0);G(Y=>J(j,Y),[()=>p($).slice(4)]),b(x,P)},k=le(()=>p($).startsWith("### ")),T=x=>{var P=kl();xe(P,5,()=>p($).split(/\r?\n/),be,(j,Y)=>{var re=Al(),K=Q(re,!0);G(se=>J(K,se),[()=>p(Y).slice(2)]),b(j,re)}),b(x,P)},M=le(()=>p($).startsWith("- ")),C=x=>{var P=Tl(),j=w(P),Y=z(j,2),re=Q(Y,!0);G(()=>{ee(j,"src",i+p(de).file),ee(j,"width",p(de).width),ee(j,"height",p(de).height),J(re,p($))}),b(x,P)},F=x=>{var P=Pl(),j=w(P),Y=Q(j,!0);G(()=>J(Y,p($))),b(x,P)},L=x=>{var P=Cl(),j=Q(P,!0);G(()=>J(j,p($))),b(x,P)},H=x=>{var P=Ul(),j=me(P);{var Y=W=>{var oe=zl(),Ce=w(oe);Ce.textContent="The generative search tools we tested had a common tendency to cite the wrong article";var V=z(Ce,1,!0);G(Z=>J(V,Z),[()=>p($).slice(n.length)]),b(W,oe)},re=le(()=>p($).startsWith(n)),K=W=>{nn(W,{get text(){return p($)}})};ue(j,W=>{p(re)?W(Y):W(K,-1)})}var se=z(j,2);{var ve=W=>{var oe=El();Zs(oe,()=>p(at).html,!0),G(()=>{ut(oe,1,$s(["findings-graphic",p(at).className]),"svelte-1n46o8q"),ee(oe,"aria-label",p(at).label)}),b(W,oe)},Pe=W=>{var oe=Sl(),Ce=w(oe);ee(Ce,"src",r);var V=z(Ce,2),Z=w(V);ee(Z,"href",r),b(W,oe)},Oe=le(()=>p($).startsWith("When we asked whether the AI companies made any commitments"));ue(se,W=>{p(at)?W(ve):p(Oe)&&W(Pe,1)})}b(x,P)};ue(ba,x=>{qt===d?x(xa):p($)==="## Download our data"?x($n,1):p(Aa)?x(_a,2):p(k)?x(y,3):p(M)?x(T,4):p(de)?x(C,5):p($)==="Kaylee Williams, Sarah Grevy Gotfredsen, and Dhrumil Mehta contributed to this report."?x(F,6):qt===0?x(L,7):x(H,-1)})}b(It,yn)}),b(Be,ne)}});var pe=z(je,2);sl(pe,{}),b(R,ie)}});var E=z(_,2);il(E,{}),b(e,g),Zt()}Ws(ql,{target:document.getElementById("app")});
