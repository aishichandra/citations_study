var $r=Object.defineProperty;var Ti=e=>{throw TypeError(e)};var ea=(e,t,n)=>t in e?$r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var V=(e,t,n)=>ea(e,typeof t!="symbol"?t+"":t,n),Hn=(e,t,n)=>t.has(e)||Ti("Cannot "+n);var o=(e,t,n)=>(Hn(e,t,"read from private field"),n?n.call(e):t.get(e)),T=(e,t,n)=>t.has(e)?Ti("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),_=(e,t,n,i)=>(Hn(e,t,"write to private field"),i?i.call(e,n):t.set(e,n),n),w=(e,t,n)=>(Hn(e,t,"access private method"),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();const Bi=!1;var Ui=Array.isArray,ta=Array.prototype.indexOf,tn=Array.prototype.includes,On=Array.from,Ki=Object.defineProperty,Jt=Object.getOwnPropertyDescriptor,Yi=Object.getOwnPropertyDescriptors,na=Object.prototype,ia=Array.prototype,di=Object.getPrototypeOf,ki=Object.isExtensible;const Xn=()=>{};function ra(e){return e()}function Qn(e){for(var t=0;t<e.length;t++)e[t]()}function Vi(){var e,t,n=new Promise((i,r)=>{e=i,t=r});return{promise:n,resolve:e,reject:t}}function aa(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const n=[];for(const i of e)if(n.push(i),n.length===t)break;return n}const Z=2,nn=4,cn=8,Ji=1<<24,Te=16,Ce=32,Ze=64,Zn=128,fi=256,Pe=512,j=1024,I=2048,de=4096,te=8192,Q=16384,Nt=32768,kn=1<<25,ft=65536,Pn=1<<17,sa=1<<18,Ft=1<<19,Xi=1<<20,Re=1<<25,Cn=1<<21,Ct=1<<22,Xe=1<<23,Xt=Symbol("$state"),Qi=Symbol("component"),oa=Symbol(""),_n=Symbol("attributes"),$n=Symbol("class"),ei=Symbol("style"),Wt=Symbol("text"),hn=new class extends Error{constructor(){super(...arguments);V(this,"name","StaleReactionError");V(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}},la=1,pa=2,Zi=4,ca=8,ha=16,ga=1,da=2,$i={},W=Symbol("uninitialized"),er="http://www.w3.org/1999/xhtml",fa="http://www.w3.org/2000/svg",ua="http://www.w3.org/1998/Math/MathML";function va(){console.warn("https://svelte.dev/e/derived_inert")}function ma(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function tr(e){return e===this.v}function ya(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function nr(e){return!ya(e,this.v)}function ba(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function wa(e,t,n){throw new Error("https://svelte.dev/e/each_key_duplicate")}function xa(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function _a(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Aa(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Ta(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ka(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Pa(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Ca(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Ea(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let zn=!1,Sa=!1;function Ia(){zn=!0}let H=null;function Gt(e){H=e}function ui(e,t=!1,n){H={p:H,i:!1,c:null,e:null,s:e,x:null,r:C,l:zn&&!t?{s:null,u:null,$:[]}:null}}function vi(e){var t=H,n=t.e;if(n!==null){t.e=null;for(var i of n)Ar(i)}return t.i=!0,H=t.p,ir(e)}function ir(e={}){return Ki(e,Qi,{value:!0}),e}function gn(){return!zn||H!==null&&H.l===null}let Pt=[];function Ma(){var e=Pt;Pt=[],Qn(e)}function Je(e){if(Pt.length===0){var t=Pt;queueMicrotask(()=>{t===Pt&&Ma()})}Pt.push(e)}const qa=-7169;function N(e,t){e.f=e.f&qa|t}function mi(e){(e.f&Pe)!==0||e.deps===null?N(e,j):N(e,de)}function rr(e,t){(e.f&I)!==0?t.set(e,I):(e.f&de)!==0&&t.get(e)!==I&&t.set(e,de),N(e,j)}function Nn(e){var t=A,n=C;we(null),ze(null);try{return e()}finally{we(t),ze(n)}}function Ra(e,t,n,i){const r=gn()?Fn:Sn;var a=e.filter(g=>!g.settled),s=t.map(r);if(n.length===0&&a.length===0){i(s);return}var l=C,p=Ga(),c=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(g=>g.promise)):null;function h(g){if((l.f&Q)===0){p();try{i([...s,...g])}catch(u){qe(u,l)}En()}}var d=ar();if(n.length===0){c.then(()=>h([])).finally(d);return}function v(){Promise.all(n.map(g=>Oa(g))).then(h).catch(g=>qe(g,l)).finally(d)}c?c.then(()=>{if((l.f&Q)!==0){d();return}p(),v(),En()}):v()}function Ga(){var e=C,t=A,n=H,i=x;return function(a=!0){ze(e),we(t),Gt(n),a&&(e.f&Q)===0&&(i==null||i.activate(),i==null||i.apply())}}function En(e=!0){ze(null),we(null),Gt(null),e&&(x==null||x.deactivate())}function ar(){var e=C,t=e.b,n=x,i=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,n),n.increment(i,e),()=>{t==null||t.update_pending_count(-1,n),n.decrement(i,e)}}function Fn(e){var t=Z|I;return C!==null&&(C.f|=Ft),{ctx:H,deps:null,effects:null,equals:tr,f:t,fn:e,reactions:null,rv:0,v:W,wv:0,parent:C,ac:null}}const jt=Symbol("obsolete");function Oa(e,t,n){let i=C;i===null&&ba();var r=void 0,a=vt(W),s=!A,l=new Set;return Xa(()=>{var g,u;var p=C,c=Vi();r=c.promise;try{Promise.resolve(e()).then(c.resolve,m=>{m!==hn&&c.reject(m)}).finally(En)}catch(m){c.reject(m),En()}var h=x;if(s){if((p.f&Nt)!==0)var d=ar();if((g=i.b)!=null&&g.is_rendered())(u=h.async_deriveds.get(p))==null||u.reject(jt);else for(const m of l.values())m.reject(jt);l.add(c),h.async_deriveds.set(p,c)}const v=(m,f=void 0)=>{d==null||d(),l.delete(c),f!==jt&&(h.activate(),f?(a.f|=Xe,Ot(a,f)):((a.f&Xe)!==0&&(a.f^=Xe),Ot(a,m)),h.deactivate())};c.promise.then(v,m=>v(null,m||"unknown"))}),Ya(()=>{for(const p of l)p.reject(jt)}),new Promise(p=>{function c(h){function d(){h===r?p(a):c(r)}h.then(d,d)}c(r)})}function Be(e){const t=Fn(e);return Sr(t),t}function Sn(e){const t=Fn(e);return t.equals=nr,t}function za(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)ae(t[n])}}function yi(e){var t,n=C,i=e.parent;if(!$e&&i!==null&&e.v!==W&&(i.f&(Q|te))!==0)return va(),e.v;ze(i);try{za(e),t=Rr(e)}finally{ze(n)}return t}function sr(e){var t=yi(e);if(!e.equals(t)&&(e.wv=Mr(),(!(x!=null&&x.is_fork)||e.deps===null)&&(x!==null?(x.capture(e,t,!0),Qt==null||Qt.capture(e,t,!0)):e.v=t,e.deps===null))){N(e,j);return}$e||(K!==null?(xi()||x!=null&&x.is_fork)&&K.set(e,t):mi(e))}function Na(e){var t;if(e.effects!==null)for(const n of e.effects)(n.teardown||n.ac)&&((t=n.teardown)==null||t.call(n),n.ac!==null&&Nn(()=>{n.ac.abort(hn),n.ac=null}),n.fn!==null&&(n.teardown=Xn),rn(n,0),_i(n))}function or(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&zt(t)}let Wn=null,At=null,x=null,Qt=null,K=null,ti=null,jn=!1,Zt=null,An=null;var Pi=0;let Fa=1;var Et,St,It,Le,Mt,De,sn,Ee,Se,qt,lt,k,ni,lr,ii,Bt,ri,pr,cr,hr,kt,La,Ut;const qn=class qn{constructor(){T(this,k);V(this,"id",Fa++);V(this,"started",!1);V(this,"linked",!0);V(this,"prev",null);V(this,"next",null);V(this,"async_deriveds",new Map);V(this,"current",new Map);V(this,"previous",new Map);T(this,Et,new Set);T(this,St,new Set);T(this,It,0);T(this,Le,new Map);T(this,Mt,null);T(this,De,[]);T(this,sn,[]);T(this,Ee,new Map);T(this,Se,new Map);T(this,qt,new Set);V(this,"is_fork",!1);T(this,lt,!1);At===null?Wn=At=this:(At.next=this,this.prev=At),At=this}skip_effect(t){o(this,Se).has(t)||o(this,Se).set(t,{d:[],m:[]}),o(this,qt).delete(t)}unskip_effect(t,n=i=>this.schedule(i)){var i=o(this,Se).get(t);if(i){o(this,Se).delete(t);for(var r of i.d)N(r,I),n(r);for(r of i.m)N(r,de),n(r)}o(this,qt).add(t)}capture(t,n,i=!1){t.v!==W&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&Xe)===0&&(this.current.set(t,[n,i]),K==null||K.set(t,n)),this.is_fork||(t.v=n)}activate(){x=this}deactivate(){x=null,K=null}flush(){try{jn=!0,x=this,w(this,k,Bt).call(this)}finally{Pi=0,ti=null,Zt=null,An=null,jn=!1,x=null,K=null,Ge.clear()}}discard(){var t;for(const n of o(this,St))n(this);o(this,St).clear();for(const n of this.async_deriveds.values())n.reject(jt);w(this,k,Ut).call(this),(t=o(this,Mt))==null||t.resolve()}register_created_effect(t){o(this,sn).push(t)}increment(t,n){if(_(this,It,o(this,It)+1),t){let i=o(this,Le).get(n)??0;o(this,Le).set(n,i+1)}}decrement(t,n){if(_(this,It,o(this,It)-1),t){let i=o(this,Le).get(n)??0;i===1?o(this,Le).delete(n):o(this,Le).set(n,i-1)}o(this,lt)||(_(this,lt,!0),Je(()=>{_(this,lt,!1),this.linked&&this.flush()}))}transfer_reactions(t){for(const[n,i]of t)this.add_dirty_reaction(n,i);t.clear()}add_dirty_reaction(t,n){(n===I||o(this,Ee).get(t)!==I)&&o(this,Ee).set(t,n)}oncommit(t){o(this,Et).add(t)}ondiscard(t){o(this,St).add(t)}settled(){return(o(this,Mt)??_(this,Mt,Vi())).promise}static ensure(){if(x===null){const t=x=new qn;jn||Je(()=>{t.started||t.flush()})}return x}apply(){{K=null;return}}schedule(t){var n;if(ti=t,(n=t.b)!=null&&n.is_pending&&(t.f&(nn|cn|Ji))!==0&&(t.f&Nt)===0){t.b.defer_effect(t);return}o(this,De).push(t)}};Et=new WeakMap,St=new WeakMap,It=new WeakMap,Le=new WeakMap,Mt=new WeakMap,De=new WeakMap,sn=new WeakMap,Ee=new WeakMap,Se=new WeakMap,qt=new WeakMap,lt=new WeakMap,k=new WeakSet,ni=function(){if(this.is_fork)return!0;for(const t of o(this,Le).keys())if(!w(this,k,lr).call(this,t))return!0;return!1},lr=function(t){for(var n=t;n!==null;n=n.parent)if(o(this,Se).has(n))return!0;return!1},ii=function(){var t=[];for(const a of o(this,De))if(!((a.f&Q)!==0||(a.f&(I|de))===0)){for(var n=a,i=!1;n.parent!==null;){n=n.parent;var r=n.f;if((r&(Ze|Ce))!==0){if((r&j)===0){i=!0;break}n.f^=j}}i||t.push(n)}return _(this,De,[]),t},Bt=function(){var l,p,c,h;this.started=!0;for(const[d,v]of o(this,Ee))N(d,v),this.schedule(d);this.apply();for(var t=Zt=[],n=[],i=An=[];o(this,De).length>0;){Pi++>1e3&&(w(this,k,Ut).call(this),Da());for(const d of w(this,k,ii).call(this))try{w(this,k,ri).call(this,d,t,n)}catch(v){throw fr(d),w(this,k,ni).call(this)||this.discard(),v}}if(x=null,i.length>0){var r=qn.ensure();for(const d of i)r.schedule(d)}if(Zt=null,An=null,w(this,k,ni).call(this)){w(this,k,kt).call(this,n),w(this,k,kt).call(this,t);for(const[d,v]of o(this,Se))dr(d,v);i.length>0&&w(l=x,k,Bt).call(l);return}const a=w(this,k,pr).call(this);if(a){w(this,k,kt).call(this,n),w(this,k,kt).call(this,t),w(p=a,k,hr).call(p,this);return}o(this,Ee).clear();for(const d of o(this,Et))d(this);o(this,Et).clear(),Qt=this,Ci(n),Ci(t),Qt=null,(c=o(this,Mt))==null||c.resolve();var s=x;o(this,It)===0&&(o(this,De).length===0||s!==null)&&w(this,k,Ut).call(this),s!==null&&(Ge.clear(),w(h=s,k,Bt).call(h))},ri=function(t,n,i){t.f^=j;for(var r=t.first;r!==null;){var a=r.f,s=(a&(Ce|Ze))!==0,l=s&&(a&j)!==0,p=l||(a&te)!==0||o(this,Se).has(r);if(!p&&r.fn!==null){s?r.f^=j:(a&nn)!==0?n.push(r):fn(r)&&((a&Te)!==0&&this.add_dirty_reaction(r,de),zt(r));var c=r.first;if(c!==null){r=c;continue}}for(;r!==null;){var h=r.next;if(h!==null){r=h;break}r=r.parent}}},pr=function(){for(var t=this.prev;t!==null;t=t.prev)if(!t.is_fork&&w(this,k,cr).call(this,t))return t;return null},cr=function(t){for(const[n,[,i]]of this.current)if(!i&&t.current.has(n))return!0;return!1},hr=function(t){var i;for(const[r,a]of t.current)!this.previous.has(r)&&t.previous.has(r)&&this.previous.set(r,t.previous.get(r)),this.current.set(r,a);for(const[r,a]of t.async_deriveds){const s=this.async_deriveds.get(r);s&&a.promise.then(s.resolve).catch(s.reject)}t.async_deriveds.clear(),this.transfer_reactions(o(t,Ee));const n=r=>{var a=r.reactions;if(a!==null&&!((r.f&Z)!==0&&(r.f&(I|de))===0))for(const p of a){var s=p.f;if((s&Z)!==0)n(p);else{var l=p;s&(Ct|Te)&&!this.async_deriveds.has(l)&&(o(this,Ee).delete(l),N(l,I),this.schedule(l))}}};for(const r of this.current.keys())n(r);this.oncommit(()=>t.discard()),w(i=t,k,Ut).call(i),x=this,w(this,k,Bt).call(this)},kt=function(t){for(var n=0;n<t.length;n+=1)rr(t[n],o(this,Ee))},La=function(){var d,v;for(let g=Wn;g!==null;g=g.next){var t=g.id<this.id,n=[];for(const[u,[m,f]]of this.current){if(g.current.has(u)){var i=g.current.get(u)[0];if(t&&m!==i)g.current.set(u,[m,f]);else continue}n.push(u)}if(t)for(const[u,m]of this.async_deriveds){const f=g.async_deriveds.get(u);f&&m.promise.then(f.resolve).catch(f.reject)}var r=[...g.current.keys()].filter(u=>!g.current.get(u)[1]);if(!(!g.started||r.length===0)){var a=r.filter(u=>!this.current.has(u));if(a.length===0)t&&g.discard();else if(n.length>0){if(t)for(const u of o(this,qt))g.unskip_effect(u,m=>{var f;(m.f&(Te|Ct))!==0?g.schedule(m):w(f=g,k,kt).call(f,[m])});g.activate();var s=new Set,l=new Map;for(var p of n)gr(p,a,s,l);l=new Map;var c=[...g.current].filter(([u,m])=>{const f=this.current.get(u);return f?f[0]!==m[0]||f[1]!==m[1]:!0}).map(([u])=>u);if(c.length>0)for(const u of o(this,sn))(u.f&(Q|te|Pn))===0&&bi(u,c,l)&&((u.f&(Ct|Te))!==0?(N(u,I),g.schedule(u)):g.add_dirty_reaction(u,I));if(o(g,De).length>0&&!o(g,lt)){g.apply();for(var h of w(d=g,k,ii).call(d))w(v=g,k,ri).call(v,h,[],[])}g.deactivate()}}}},Ut=function(){if(this.linked){var t=this.prev,n=this.next;t===null?Wn=n:t.next=n,n===null?At=t:n.prev=t,this.linked=!1}};let ut=qn;function Da(){try{Ta()}catch(e){qe(e,ti)}}let _e=null;function Ci(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var i=e[n++];if((i.f&(Q|te))===0&&fn(i)&&(_e=new Set,zt(i),i.deps===null&&i.first===null&&i.nodes===null&&i.teardown===null&&i.ac===null&&Pr(i),(_e==null?void 0:_e.size)>0)){Ge.clear();for(const r of _e){if((r.f&(Q|te))!==0)continue;const a=[r];let s=r.parent;for(;s!==null;)_e.has(s)&&(_e.delete(s),a.push(s)),s=s.parent;for(let l=a.length-1;l>=0;l--){const p=a[l];(p.f&(Q|te))===0&&zt(p)}}_e.clear()}}_e=null}}function gr(e,t,n,i){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(const r of e.reactions){const a=r.f;(a&Z)!==0?gr(r,t,n,i):(a&(Ct|Te))!==0&&(a&I)===0&&bi(r,t,i)&&(N(r,I),wi(r))}}function bi(e,t,n){const i=n.get(e);if(i!==void 0)return i;if(e.deps!==null)for(const r of e.deps){if(tn.call(t,r))return!0;if((r.f&Z)!==0&&bi(r,t,n))return n.set(r,!0),!0}return n.set(e,!1),!1}function wi(e){x.schedule(e)}function dr(e,t){if(!((e.f&Ce)!==0&&(e.f&j)!==0)){(e.f&I)!==0?t.d.push(e):(e.f&de)!==0&&t.m.push(e),N(e,j);for(var n=e.first;n!==null;)dr(n,t),n=n.next}}function fr(e){N(e,j);for(var t=e.first;t!==null;)fr(t),t=t.next}let In=new Set;const Ge=new Map;let ur=!1;function vt(e,t){var n={f:0,v:e,reactions:null,equals:tr,rv:0,wv:0};return n}function Ue(e,t){const n=vt(e);return Sr(n),n}function Ha(e,t=!1,n=!0){var r;const i=vt(e);return t||(i.equals=nr),zn&&n&&H!==null&&H.l!==null&&((r=H.l).s??(r.s=[])).push(i),i}function at(e,t,n=!1){A!==null&&(!ke||(A.f&Pn)!==0)&&gn()&&(A.f&(Z|Te|Ct|Pn))!==0&&(Oe===null||!Oe.has(e))&&Ca();let i=n?Kt(t):t;return Ot(e,i,An)}var st=null,ai=0;function Ot(e,t,n=null){if(!e.equals(t)){$e?Ge.set(e,t):Ge.has(e)||Ge.set(e,e.v);var i=ut.ensure();if(i.capture(e,t),(e.f&Z)!==0){const r=e;(e.f&I)!==0&&yi(r),K===null&&mi(r)}e.wv=Mr(),st=null,ai=0,vr(e,I,n),st=null,gn()&&C!==null&&(C.f&j)!==0&&(C.f&(Ce|Ze))===0&&(ve===null?$a([e]):ve.push(e)),!i.is_fork&&In.size>0&&!ur&&Wa()}return t}function Wa(){ur=!1;for(const e of In){(e.f&j)!==0&&N(e,de);let t;try{t=fn(e)}catch{t=!0}t&&zt(e)}In.clear()}function $t(e){at(e,e.v+1)}function vr(e,t,n){var i=e.reactions;if(i!==null){var r=gn(),a=i.length;if(ai+=a,ai>1e5&&st===null&&(st=new Set),st!==null){if(st.has(e))return;st.add(e)}for(var s=0;s<a;s++){var l=i[s],p=l.f;if(!(!r&&l===C)){var c=(p&I)===0;if(c&&N(l,t),(p&Pn)!==0)In.add(l);else if((p&Z)!==0){var h=l;K==null||K.delete(h),vr(h,de,n)}else if(c){var d=l;(p&Te)!==0&&_e!==null&&_e.add(d),n!==null?n.push(d):wi(d)}}}}}function Kt(e){if(typeof e!="object"||e===null||Xt in e||Qi in e)return e;const t=di(e);if(t!==na&&t!==ia)return e;var n=new Map,i=Ui(e),r=Ue(0),a=dt,s=l=>{if(dt===a)return l();var p=A,c=dt;we(null),Mi(a);var h=l();return we(p),Mi(c),h};return i&&n.set("length",Ue(e.length)),new Proxy(e,{defineProperty(l,p,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&ka();var h=n.get(p);return h===void 0?s(()=>{var d=Ue(c.value);return n.set(p,d),d}):at(h,c.value,!0),!0},deleteProperty(l,p){var c=n.get(p);if(c===void 0){if(p in l){const h=s(()=>Ue(W));n.set(p,h),$t(r)}}else at(c,W),$t(r);return!0},get(l,p,c){var g;if(p===Xt)return e;var h=n.get(p),d=p in l;if(h===void 0&&(!d||(g=Jt(l,p))!=null&&g.writable)&&(h=s(()=>{var u=Kt(d?l[p]:W),m=Ue(u);return m}),n.set(p,h)),h!==void 0){var v=y(h);return v===W?void 0:v}return Reflect.get(l,p,c)},getOwnPropertyDescriptor(l,p){var v;(v=this.has)==null||v.call(this,l,p);var c=Reflect.getOwnPropertyDescriptor(l,p),h=n.get(p);if(h!==void 0){var d=y(h);if(d===W)return;if(c&&"value"in c)c.value=d;else return{enumerable:!0,configurable:!0,value:d,writable:!0}}return c},has(l,p){var v;if(p===Xt)return!0;var c=n.get(p),h=c!==void 0&&c.v!==W||Reflect.has(l,p);if(c!==void 0||(C!==null||A!==null)&&(!h||(v=Jt(l,p))!=null&&v.writable)){c===void 0&&(c=s(()=>{var g=h?Kt(l[p]):W,u=Ue(g);return u}),n.set(p,c));var d=y(c);if(d===W)return!1}return h},set(l,p,c,h){var F;var d=n.get(p),v=p in l;if(i&&p==="length")for(var g=c;g<d.v;g+=1){var u=n.get(g+"");u!==void 0?at(u,W):g in l&&(u=s(()=>Ue(W)),n.set(g+"",u))}if(d===void 0)(!v||(F=Jt(l,p))!=null&&F.writable)&&(d=s(()=>Ue(void 0)),at(d,Kt(c)),n.set(p,d));else{v=d.v!==W;var m=s(()=>Kt(c));at(d,m)}var f=Reflect.getOwnPropertyDescriptor(l,p);if(f!=null&&f.set&&f.set.call(h,c),!v){if(i&&typeof p=="string"){var b=n.get("length"),M=Number(p);Number.isInteger(M)&&M>=b.v&&at(b,M+1)}$t(r)}return!0},ownKeys(l){y(r);var p=Reflect.ownKeys(l).filter(d=>{var v=n.get(d);return v===void 0||v.v!==W});for(var[c,h]of n)h.v!==W&&!(c in l)&&p.push(c);return p},setPrototypeOf(){Pa()}})}var Ei,mr,yr,br;function ja(){if(Ei===void 0){Ei=window,mr=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;yr=Jt(t,"firstChild").get,br=Jt(t,"nextSibling").get,ki(e)&&(e[$n]=void 0,e[_n]=null,e[ei]=void 0,e.__e=void 0),ki(n)&&(n[Wt]=void 0)}}function Qe(e=""){return document.createTextNode(e)}function We(e){return yr.call(e)}function dn(e){return br.call(e)}function z(e,t){return We(e)}function Tt(e,t=!1){{var n=We(e);return n instanceof Comment&&n.data===""?dn(n):n}}function he(e,t=!1){return We(e)}function D(e,t=1,n=!1){let i=e;for(;t--;)i=dn(i);return i}function Ba(e){e.textContent=""}function wr(){return!1}function xr(e,t,n){return t==null||t===er?n?document.createElement(e,{is:n}):document.createElement(e):n?document.createElementNS(t,e,{is:n}):document.createElementNS(t,e)}function Ua(e){var t=C;if(t===null)return A.f|=Xe,e;if((t.f&Nt)===0&&(t.f&nn)===0)throw e;qe(e,t)}function qe(e,t){if(e===$i)throw e;if(!(t!==null&&(t.f&Q)!==0)){for(;t!==null;){if((t.f&Zn)!==0&&(t.f&(Q|kn))===0){if((t.f&Nt)===0)throw e;try{t.b.error(e);return}catch(n){e=n}}t=t.parent}throw e}}function _r(e){C===null&&(A===null&&Aa(),_a()),$e&&xa()}function Ka(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function je(e,t){var n=C;n!==null&&(n.f&te)!==0&&(e|=te);var i={ctx:H,deps:null,nodes:null,f:e|I|Pe,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};x==null||x.register_created_effect(i);var r=i;if((e&nn)!==0)Zt!==null?Zt.push(i):ut.ensure().schedule(i);else if(t!==null){try{zt(i)}catch(s){throw ae(i),s}r.deps===null&&r.teardown===null&&r.nodes===null&&r.first===r.last&&(r.f&Ft)===0&&(r=r.first,(e&Te)!==0&&(e&ft)!==0&&r!==null&&(r.f|=ft))}if(r!==null&&(r.parent=n,n!==null&&Ka(r,n),A!==null&&(A.f&Z)!==0&&(e&Ze)===0)){var a=A;(a.effects??(a.effects=[])).push(r)}return i}function xi(){return A!==null&&!ke}function Ya(e){const t=je(cn,null);return N(t,j),t.teardown=e,t}function Si(e){_r();var t=C.f,n=!A&&(t&Ce)!==0&&H!==null&&!H.i;if(n){var i=H;(i.e??(i.e=[])).push(e)}else return Ar(e)}function Ar(e){return je(nn|Xi,e)}function Va(e){return _r(),je(cn|Xi,e)}function Ja(e){ut.ensure();const t=je(Ze|Ft,e);return(n={})=>new Promise(i=>{n.outro?gt(t,()=>{ae(t),i(void 0)}):(ae(t),i(void 0))})}function Xa(e){return je(Ct|Ft,e)}function Qa(e,t=0){return je(cn|t,e)}function X(e,t=[],n=[],i=[]){Ra(i,t,n,r=>{je(cn,()=>{e(...r.map(y))})})}function Ln(e,t=0){var n=je(Te|t,e);return n}function be(e){return je(Ce|Ft,e)}function Tr(e){var t=e.teardown;if(t!==null){const n=$e,i=A;Ii(!0),we(null);try{t.call(null)}catch(r){qe(r,e.parent)}finally{Ii(n),we(i)}}}function _i(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const r=n.ac;r!==null&&Nn(()=>{r.abort(hn)});var i=n.next;(n.f&Ze)!==0?n.parent=null:ae(n,t),n=i}}function Za(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&Ce)===0&&ae(t),t=n}}function ae(e,t=!0){var n=!1;(t||(e.f&sa)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(kr(e.nodes.start,e.nodes.end),n=!0),e.f|=kn,_i(e,t&&!n),rn(e,0);var i=e.nodes&&e.nodes.t;if(i!==null)for(const a of i)a.stop();Tr(e),e.f^=kn,e.f|=Q;var r=e.parent;r!==null&&r.first!==null&&Pr(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function kr(e,t){for(;e!==null;){var n=e===t?null:dn(e);e.remove(),e=n}}function Pr(e){var t=e.parent,n=e.prev,i=e.next;n!==null&&(n.next=i),i!==null&&(i.prev=n),t!==null&&(t.first===e&&(t.first=i),t.last===e&&(t.last=n))}function gt(e,t,n=!0){var i=[];e.f|=fi,Cr(e,i,!0);var r=()=>{n&&ae(e),t&&t()},a=i.length;if(a>0){var s=()=>--a||r();for(var l of i)l.out(s)}else r()}function Cr(e,t,n){if((e.f&te)===0){e.f^=te;var i=e.nodes&&e.nodes.t;if(i!==null)for(const l of i)(l.is_global||n)&&t.push(l);for(var r=e.first;r!==null;){var a=r.next;if((r.f&Ze)===0){var s=(r.f&ft)!==0||(r.f&Ce)!==0&&(e.f&Te)!==0;Cr(r,t,s?n:!1)}r=a}}}function Mn(e){e.f&=~fi,Er(e,!0)}function Er(e,t){if((e.f&fi)===0&&(e.f&te)!==0){e.f^=te,(e.f&j)===0&&(N(e,I),ut.ensure().schedule(e));for(var n=e.first;n!==null;){var i=n.next,r=(n.f&ft)!==0||(n.f&Ce)!==0;Er(n,r?t:!1),n=i}var a=e.nodes&&e.nodes.t;if(a!==null)for(const s of a)(s.is_global||t)&&s.in()}}function Ai(e,t){if(e.nodes)for(var n=e.nodes.start,i=e.nodes.end;n!==null;){var r=n===i?null:dn(n);t.append(n),n=r}}let $e=!1;function Ii(e){$e=e}let A=null,ke=!1;function we(e){A=e}let C=null;function ze(e){C=e}let Oe=null;function Sr(e){A!==null&&((A.f&Cn)!==0||(A.f&Z)!==0)&&(Oe??(Oe=new Set)).add(e)}let re=null,ge=0,ve=null;function $a(e){ve=e}let Ir=1,ot=0,dt=ot;function Mi(e){dt=e}function Mr(){return++Ir}function fn(e){var t=e.f;if((t&I)!==0)return!0;if((t&de)!==0){for(var n=e.deps,i=n.length,r=0;r<i;r++){var a=n[r];if(fn(a)&&sr(a),a.wv>e.wv)return!0}(t&Pe)!==0&&K===null&&N(e,j)}return!1}function qr(e,t,n=!0){var i=e.reactions;if(i!==null&&!(Oe!==null&&Oe.has(e)))for(var r=0;r<i.length;r++){var a=i[r];(a.f&Z)!==0?qr(a,t,!1):t===a&&(n?N(a,I):(a.f&j)!==0&&N(a,de),wi(a))}}function Rr(e){var t=re,n=ge,i=ve,r=A,a=Oe,s=H,l=ke,p=dt,c=e.f;re=null,ge=0,ve=null,A=(c&(Ce|Ze))===0?e:null,Oe=null,Gt(e.ctx),ke=!1,dt=++ot,e.ac!==null&&(Nn(()=>{e.ac.abort(hn)}),e.ac=null);try{e.f|=Cn;var h=e.fn,d=h();e.f|=Nt;var v=qi(e);if(gn()&&ve!==null&&!ke&&v!==null&&(e.f&(Z|de|I))===0)for(var g=0;g<ve.length;g++)qr(ve[g],e);if(r!==null&&r!==e){if(ot++,r.deps!==null)for(let u=0;u<n;u+=1)r.deps[u].rv=ot;if(t!==null)for(const u of t)u.rv=ot;ve!==null&&(i===null?i=ve:i.push(...ve))}return(e.f&Xe)!==0&&(e.f^=Xe),d}catch(u){return qi(e),Ua(u)}finally{e.f^=Cn,re=t,ge=n,ve=i,A=r,Oe=a,Gt(s),ke=l,dt=p}}function qi(e){var r;var t=e.deps,n=x==null?void 0:x.is_fork;if(re!==null){var i;if(n||rn(e,ge),t!==null&&ge>0)for(t.length=ge+re.length,i=0;i<re.length;i++)t[ge+i]=re[i];else e.deps=t=re;if(xi()&&(e.f&Pe)!==0)for(i=ge;i<t.length;i++)((r=t[i]).reactions??(r.reactions=[])).push(e)}else!n&&t!==null&&ge<t.length&&(rn(e,ge),t.length=ge);return t}function es(e,t){let n=t.reactions;if(n!==null){var i=ta.call(n,e);if(i!==-1){var r=n.length-1;r===0?n=t.reactions=null:(n[i]=n[r],n.pop())}}if(n===null&&(t.f&Z)!==0&&(re===null||!tn.call(re,t))){var a=t;(a.f&Pe)!==0&&(a.f^=Pe),a.v!==W&&mi(a),a.ac!==null&&Nn(()=>{a.ac.abort(hn),a.ac=null,N(a,I)}),Na(a),rn(a,0)}}function rn(e,t){var n=e.deps;if(n!==null)for(var i=t;i<n.length;i++)es(e,n[i])}function zt(e){var t=e.f;if((t&Q)===0){N(e,j);var n=C;C=e;try{(t&(Te|Ji))!==0?Za(e):_i(e),Tr(e);var i=Rr(e);e.teardown=typeof i=="function"?i:null,e.wv=Ir;var r;Bi&&Sa&&(e.f&I)!==0&&e.deps}finally{C=n}}}function y(e){var t=e.f,n=(t&Z)!==0;if(A!==null&&!ke){var i=C!==null&&(C.f&Q)!==0;if(!i&&(Oe===null||!Oe.has(e))){var r=A.deps;if((A.f&Cn)!==0)e.rv<ot&&(e.rv=ot,re===null&&r!==null&&r[ge]===e?ge++:re===null?re=[e]:re.push(e));else{A.deps??(A.deps=[]),tn.call(A.deps,e)||A.deps.push(e);var a=e.reactions;a===null?e.reactions=[A]:tn.call(a,A)||a.push(A)}}}if($e&&Ge.has(e))return Ge.get(e);if(n){var s=e;if($e){var l=s.v;return((s.f&j)===0&&s.reactions!==null||Or(s))&&(l=yi(s)),Ge.set(s,l),l}var p=(s.f&Pe)===0&&!ke&&A!==null&&(A.f&Pe)!==0,c=(s.f&Nt)===0;fn(s)&&(p&&(s.f|=Pe),sr(s)),p&&!c&&(or(s),Gr(s))}if(K!=null&&K.has(e))return K.get(e);if((e.f&Xe)!==0)throw e.v;return e.v}function Gr(e){if(e.f|=Pe,e.deps!==null)for(const n of e.deps){var t=n.reactions;t===null?n.reactions=[e]:tn.call(t,e)||t.push(e),(n.f&Z)!==0&&(n.f&Pe)===0&&(or(n),Gr(n))}}function Or(e){if(e.v===W)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Ge.has(t)||(t.f&Z)!==0&&Or(t))return!0;return!1}function zr(e){var t=ke;try{return ke=!0,e()}finally{ke=t}}function ts(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Xt in e)si(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&Xt in n&&si(n)}}}function si(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let i in e)try{si(e[i],t)}catch{}const n=di(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const i=Yi(n);for(let r in i){const a=i[r].get;if(a)try{a.call(e)}catch{}}}}}const ns=["touchstart","touchmove"];function is(e){return ns.includes(e)}const bn=Symbol("events"),rs=new Set,Ri=new Set;let Bn=null,Un=!1;function Gi(e){var m,f;var t=this,n=t.ownerDocument,i=e.type,r=((m=e.composedPath)==null?void 0:m.call(e))||[],a=r[0]||e.target;Bn=e,Un||(Un=!0,setTimeout(()=>{Un=!1,Bn=null}));var s=0,l=Bn===e&&e[bn];if(l){var p=r.indexOf(l);if(p!==-1&&(t===document||t===window)){e[bn]=t;return}var c=r.indexOf(t);if(c===-1)return;p<=c&&(s=p)}if(a=r[s]||e.target,a!==t){Ki(e,"currentTarget",{configurable:!0,get(){return a||n}});var h=A,d=C;we(null),ze(null);try{for(var v,g=[];a!==null&&a!==t;){try{var u=(f=a[bn])==null?void 0:f[i];u!=null&&(!a.disabled||e.target===a)&&u.call(a,e)}catch(b){v?g.push(b):v=b}if(e.cancelBubble)break;s++,a=s<r.length?r[s]:null}if(v){for(let b of g)queueMicrotask(()=>{throw b});throw v}}finally{e[bn]=t,delete e.currentTarget,we(h),ze(d)}}}var Wi;const Kn=((Wi=globalThis==null?void 0:globalThis.window)==null?void 0:Wi.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function as(e){return(Kn==null?void 0:Kn.createHTML(e))??e}function ss(e){var t=xr("template");return t.innerHTML=as(e.replaceAll("<!>","<!---->")),t.content}function an(e,t){var n=C;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function G(e,t){var n=(t&ga)!==0,i=(t&da)!==0,r,a=!e.startsWith("<!>");return()=>{r===void 0&&(r=ss(a?e:"<!>"+e),n||(r=We(r)));var s=i||mr?document.importNode(r,!0):r.cloneNode(!0);if(n){var l=We(s),p=s.lastChild;an(l,p)}else an(s,s);return s}}function os(){var e=document.createDocumentFragment(),t=document.createComment(""),n=Qe();return e.append(t,n),an(t,n),e}function S(e,t){e!==null&&e.before(t)}function ls(e){let t=0,n=vt(0),i;return()=>{xi()&&(y(n),Qa(()=>(t===0&&(i=zr(()=>e(()=>$t(n)))),t+=1,()=>{Je(()=>{t-=1,t===0&&(i==null||i(),i=void 0,$t(n))})})))}}var ps=ft|Ft;function cs(e,t,n,i){new hs(e,t,n,i)}var me,gi,ye,pt,J,oe,ee,le,Ie,ct,Ve,Rt,on,He,Rn,P,gs,ds,oi,Ye,fs,li,Yt,Tn,pi,ci;class hs{constructor(t,n,i,r){T(this,P);V(this,"parent");V(this,"is_pending",!1);V(this,"transform_error");T(this,me);T(this,gi,null);T(this,ye);T(this,pt);T(this,J);T(this,oe,null);T(this,ee,null);T(this,le,null);T(this,Ie,null);T(this,ct,0);T(this,Ve,0);T(this,Rt,!1);T(this,on,new Map);T(this,He,null);T(this,Rn,ls(()=>(_(this,He,vt(o(this,ct))),()=>{_(this,He,null)})));var a;_(this,me,t),_(this,ye,n),_(this,pt,s=>{var l=C;l.b=this,l.f|=Zn,i(s)}),this.parent=C.b,this.transform_error=r??((a=this.parent)==null?void 0:a.transform_error)??(s=>s),_(this,J,Ln(()=>{w(this,P,li).call(this)},ps))}defer_effect(t){rr(t,o(this,on))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!o(this,ye).pending}update_pending_count(t,n){w(this,P,pi).call(this,t,n),_(this,ct,o(this,ct)+t),!(!o(this,He)||o(this,Rt))&&(_(this,Rt,!0),Je(()=>{_(this,Rt,!1),o(this,He)&&Ot(o(this,He),o(this,ct))}))}get_effect_pending(){return o(this,Rn).call(this),y(o(this,He))}error(t){if(t===$i||!o(this,ye).onerror&&!o(this,ye).failed)throw t;x!=null&&x.is_fork?(o(this,oe)&&x.skip_effect(o(this,oe)),o(this,ee)&&x.skip_effect(o(this,ee)),o(this,le)&&x.skip_effect(o(this,le)),x.oncommit(()=>{w(this,P,Ye).call(this)||w(this,P,ci).call(this,t)})):w(this,P,ci).call(this,t)}}me=new WeakMap,gi=new WeakMap,ye=new WeakMap,pt=new WeakMap,J=new WeakMap,oe=new WeakMap,ee=new WeakMap,le=new WeakMap,Ie=new WeakMap,ct=new WeakMap,Ve=new WeakMap,Rt=new WeakMap,on=new WeakMap,He=new WeakMap,Rn=new WeakMap,P=new WeakSet,gs=function(){try{_(this,oe,be(()=>o(this,pt).call(this,o(this,me))))}catch(t){this.error(t)}},ds=function(t){const n=o(this,ye).failed,{reset:i,invoke_onerror:r}=w(this,P,oi).call(this,t);Je(r),n&&_(this,le,be(()=>{n(o(this,me),()=>t,()=>i)}))},oi=function(t){var n=!1,i=!1;const r=()=>{if(!w(this,P,Ye).call(this)){if(n){ma();return}n=!0,i&&Ea(),o(this,le)!==null&&gt(o(this,le),()=>{_(this,le,null)}),w(this,P,Tn).call(this,()=>{w(this,P,li).call(this)})}};return{reset:r,invoke_onerror:()=>{var s,l;if(!w(this,P,Ye).call(this))try{i=!0,(l=(s=o(this,ye)).onerror)==null||l.call(s,t,r),i=!1}catch(p){qe(p,o(this,J)&&o(this,J).parent)}}}},Ye=function(){return(o(this,J).f&(Q|kn))!==0},fs=function(){const t=o(this,ye).pending;t&&(this.is_pending=!0,_(this,ee,be(()=>t(o(this,me)))),Je(()=>{if(!w(this,P,Ye).call(this)){var n=_(this,Ie,document.createDocumentFragment()),i=Qe(),r=!1;if(n.append(i),_(this,oe,w(this,P,Tn).call(this,()=>{try{return be(()=>o(this,pt).call(this,i))}catch(a){try{this.error(a),r=!0}catch(s){qe(s,o(this,J).parent)}return null}})),o(this,oe)===null){_(this,Ie,null),r&&w(this,P,Yt).call(this,x);return}o(this,Ve)===0&&(o(this,me).before(n),_(this,Ie,null),gt(o(this,ee),()=>{_(this,ee,null)}),w(this,P,Yt).call(this,x))}}))},li=function(){try{if(this.is_pending=this.has_pending_snippet(),_(this,Ve,0),_(this,ct,0),_(this,oe,be(()=>{o(this,pt).call(this,o(this,me))})),o(this,Ve)>0){var t=_(this,Ie,document.createDocumentFragment());Ai(o(this,oe),t);const n=o(this,ye).pending;_(this,ee,be(()=>n(o(this,me))))}else w(this,P,Yt).call(this,x)}catch(n){this.error(n)}},Yt=function(t){this.is_pending=!1,t.transfer_reactions(o(this,on))},Tn=function(t){var n=C,i=A,r=H;ze(o(this,J)),we(o(this,J)),Gt(o(this,J).ctx);try{return ut.ensure(),t()}finally{ze(n),we(i),Gt(r)}},pi=function(t,n){var i;if(!this.has_pending_snippet()){this.parent&&w(i=this.parent,P,pi).call(i,t,n);return}_(this,Ve,o(this,Ve)+t),o(this,Ve)===0&&(w(this,P,Yt).call(this,n),o(this,ee)&&gt(o(this,ee),()=>{_(this,ee,null)}),o(this,Ie)&&(o(this,me).before(o(this,Ie)),_(this,Ie,null)))},ci=function(t){o(this,oe)&&(ae(o(this,oe)),_(this,oe,null)),o(this,ee)&&(ae(o(this,ee)),_(this,ee,null)),o(this,le)&&(ae(o(this,le)),_(this,le,null));let n=o(this,ye).failed;const i=r=>{if(w(this,P,Ye).call(this))return;const{reset:a,invoke_onerror:s}=w(this,P,oi).call(this,r);s(),n&&!w(this,P,Ye).call(this)&&_(this,le,w(this,P,Tn).call(this,()=>{try{return be(()=>{var l=C;l.b=this,l.f|=Zn,n(o(this,me),()=>r,()=>a)})}catch(l){return qe(l,o(this,J).parent),null}}))};Je(()=>{if(!w(this,P,Ye).call(this)){var r;try{r=this.transform_error(t)}catch(a){qe(a,o(this,J)&&o(this,J).parent);return}r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(i,a=>qe(a,o(this,J)&&o(this,J).parent)):i(r)}})};function ce(e,t){var n=t==null?"":typeof t=="object"?`${t}`:t;n!==(e[Wt]??(e[Wt]=e.nodeValue))&&(e[Wt]=n,e.nodeValue=`${n}`)}function us(e,t){return vs(e,t)}const wn=new Map;function vs(e,{target:t,anchor:n,props:i={},events:r,context:a,intro:s=!0,transformError:l}){ja();var p=void 0,c=Ja(()=>{var h=n??t.appendChild(Qe());cs(h,{pending:()=>{}},g=>{ui({});var u=H;a&&(u.c=a),r&&(i.$$events=r),p=e(g,i)||ir(),vi()},l);var d=new Set,v=g=>{for(var u=0;u<g.length;u++){var m=g[u];if(!d.has(m)){d.add(m);var f=is(m);for(const F of[t,document]){var b=wn.get(F);b===void 0&&(b=new Map,wn.set(F,b));var M=b.get(m);M===void 0?(F.addEventListener(m,Gi,{passive:f}),b.set(m,1)):b.set(m,M+1)}}}};return v(On(rs)),Ri.add(v),()=>{var f;for(var g of d)for(const b of[t,document]){var u=wn.get(b),m=u.get(g);--m==0?(b.removeEventListener(g,Gi),u.delete(g),u.size===0&&wn.delete(b)):u.set(g,m)}Ri.delete(v),h!==n&&((f=h.parentNode)==null||f.removeChild(h))}});return ms.set(p,c),p}let ms=new WeakMap;var Ae,Me,pe,ht,ln,pn,Gn;class Nr{constructor(t,n=!0){V(this,"anchor");T(this,Ae,new Map);T(this,Me,new Map);T(this,pe,new Map);T(this,ht,new Set);T(this,ln,!0);T(this,pn,t=>{if(o(this,Ae).has(t)){var n=o(this,Ae).get(t),i=o(this,Me).get(n);if(i)Mn(i),o(this,ht).delete(n);else{var r=o(this,pe).get(n);r&&(Mn(r.effect),o(this,Me).set(n,r.effect),o(this,pe).delete(n),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),i=r.effect)}for(const[a,s]of o(this,Ae)){if(o(this,Ae).delete(a),a===t)break;const l=o(this,pe).get(s);l&&(ae(l.effect),o(this,pe).delete(s))}for(const[a,s]of o(this,Me)){if(a===n||o(this,ht).has(a))continue;const l=()=>{if(Array.from(o(this,Ae).values()).includes(a)){var c=document.createDocumentFragment();Ai(s,c),c.append(Qe()),o(this,pe).set(a,{effect:s,fragment:c})}else ae(s);o(this,ht).delete(a),o(this,Me).delete(a)};o(this,ln)||!i?(o(this,ht).add(a),gt(s,l,!1)):l()}}});T(this,Gn,t=>{o(this,Ae).delete(t);const n=Array.from(o(this,Ae).values());for(const[i,r]of o(this,pe))n.includes(i)||(ae(r.effect),o(this,pe).delete(i))});this.anchor=t,_(this,ln,n)}ensure(t,n){var i=x,r=wr();if(n&&!o(this,Me).has(t)&&!o(this,pe).has(t))if(r){var a=document.createDocumentFragment(),s=Qe();a.append(s),o(this,pe).set(t,{effect:be(()=>n(s)),fragment:a})}else o(this,Me).set(t,be(()=>n(this.anchor)));if(o(this,Ae).set(i,t),r){for(const[l,p]of o(this,Me))l===t?i.unskip_effect(p):i.skip_effect(p);for(const[l,p]of o(this,pe))l===t?i.unskip_effect(p.effect):i.skip_effect(p.effect);i.oncommit(o(this,pn)),i.ondiscard(o(this,Gn))}else o(this,pn).call(this,i)}}Ae=new WeakMap,Me=new WeakMap,pe=new WeakMap,ht=new WeakMap,ln=new WeakMap,pn=new WeakMap,Gn=new WeakMap;function xn(e,t,n=!1){var i=new Nr(e),r=n?ft:0;function a(s,l){i.ensure(s,l)}Ln(()=>{var s=!1;t((l,p=0)=>{s=!0,a(p,l)}),s||a(-1,null)},r)}function Yn(e,t){return t}function ys(e,t,n){for(var i=[],r=t.length,a,s=t.length,l=0;l<r;l++){let d=t[l];gt(d,()=>{if(a){if(a.pending.delete(d),a.done.add(d),a.pending.size===0){var v=e.outrogroups;hi(e,On(a.done)),v.delete(a),v.size===0&&(e.outrogroups=null)}}else s-=1},!1)}if(s===0){var p=i.length===0&&n!==null&&e.pending.size===0;if(p){var c=n,h=c.parentNode;Ba(h),h.append(c),e.items.clear()}hi(e,t,!p)}else a={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(a)}function hi(e,t,n=!0){var i;if(e.pending.size>0){i=new Set;for(const s of e.pending.values())for(const l of s)i.add(e.items.get(l).e)}for(var r=0;r<t.length;r++){var a=t[r];if(i!=null&&i.has(a)){a.f|=Re;const s=document.createDocumentFragment();Ai(a,s)}else ae(t[r],n)}}var Oi;function Vn(e,t,n,i,r,a=null){var s=e,l=new Map,p=(t&Zi)!==0;if(p){var c=e;s=c.appendChild(Qe())}var h=null,d=Sn(()=>{var M=n();return Ui(M)?M:M==null?[]:On(M)}),v=new Map,g=!0;function u(M){if((b.effect.f&Q)===0){b.pending.delete(M);var F=y(d);b.fallback=h,bs(b,F,s,t,i),h!==null&&(F.length===0?(h.f&Re)===0?Mn(h):(h.f^=Re,Vt(h,null,s)):gt(h,()=>{h=null}))}}function m(M){b.pending.delete(M)}var f=Ln(()=>{for(var M=y(d),F=M.length,O=new Set,B=x,xe=wr(),$=0;$<F;$+=1){var Ne=M[$],Fe=i(Ne,$),ne=g?null:l.get(Fe);ne?(ne.v&&Ot(ne.v,Ne),ne.i&&Ot(ne.i,$),xe&&B.unskip_effect(ne.e)):(ne=ws(l,g?s:Oi??(Oi=Qe()),Ne,Fe,$,r,t,n),g||(ne.e.f|=Re),l.set(Fe,ne)),O.add(Fe)}if(F===0&&a&&!h&&(g?h=be(()=>a(s)):(h=be(()=>a(Oi??(Oi=Qe()))),h.f|=Re)),F>O.size&&wa(),!g)if(v.set(B,O),xe){for(const[et,mt]of l)O.has(et)||B.skip_effect(mt.e);B.oncommit(u),B.ondiscard(m)}else u(B);y(d)}),b={effect:f,items:l,pending:v,outrogroups:null,fallback:h};g=!1}function Ht(e){for(;e!==null&&(e.f&Ce)===0;)e=e.next;return e}function bs(e,t,n,i,r){var ne,et,mt,un,vn,q,mn,tt,nt;var a=(i&ca)!==0,s=t.length,l=e.items,p=Ht(e.effect.first),c,h=null,d,v=[],g=[],u,m,f,b;if(a)for(b=0;b<s;b+=1)u=t[b],m=r(u,b),f=l.get(m).e,(f.f&Re)===0&&((et=(ne=f.nodes)==null?void 0:ne.a)==null||et.measure(),(d??(d=new Set)).add(f));for(b=0;b<s;b+=1){if(u=t[b],m=r(u,b),f=l.get(m).e,e.outrogroups!==null)for(const fe of e.outrogroups)fe.pending.delete(f),fe.done.delete(f);if((f.f&te)!==0&&(Mn(f),a&&((un=(mt=f.nodes)==null?void 0:mt.a)==null||un.unfix(),(d??(d=new Set)).delete(f))),(f.f&Re)!==0)if(f.f^=Re,f===p)Vt(f,null,n);else{var M=h?h.next:p;f===e.effect.last&&(e.effect.last=f.prev),f.prev&&(f.prev.next=f.next),f.next&&(f.next.prev=f.prev),Ke(e,h,f),Ke(e,f,M),Vt(f,M,n),h=f,v=[],g=[],p=Ht(h.next);continue}if(f!==p){if(c!==void 0&&c.has(f)){if(v.length<g.length){var F=g[0],O;h=F.prev;var B=v[0],xe=v[v.length-1];for(O=0;O<v.length;O+=1)Vt(v[O],F,n);for(O=0;O<g.length;O+=1)c.delete(g[O]);Ke(e,B.prev,xe.next),Ke(e,h,B),Ke(e,xe,F),p=F,h=xe,b-=1,v=[],g=[]}else c.delete(f),Vt(f,p,n),Ke(e,f.prev,f.next),Ke(e,f,h===null?e.effect.first:h.next),Ke(e,h,f),h=f;continue}for(v=[],g=[];p!==null&&p!==f;)(c??(c=new Set)).add(p),g.push(p),p=Ht(p.next);if(p===null)continue}(f.f&Re)===0&&v.push(f),h=f,p=Ht(f.next)}if(e.outrogroups!==null){for(const fe of e.outrogroups)fe.pending.size===0&&(hi(e,On(fe.done)),(vn=e.outrogroups)==null||vn.delete(fe));e.outrogroups.size===0&&(e.outrogroups=null)}if(p!==null||c!==void 0){var $=[];if(c!==void 0)for(f of c)(f.f&te)===0&&$.push(f);for(;p!==null;)(p.f&te)===0&&p!==e.fallback&&$.push(p),p=Ht(p.next);var Ne=$.length;if(Ne>0){var Fe=(i&Zi)!==0&&s===0?n:null;if(a){for(b=0;b<Ne;b+=1)(mn=(q=$[b].nodes)==null?void 0:q.a)==null||mn.measure();for(b=0;b<Ne;b+=1)(nt=(tt=$[b].nodes)==null?void 0:tt.a)==null||nt.fix()}ys(e,$,Fe)}}a&&Je(()=>{var fe,yn;if(d!==void 0)for(f of d)(yn=(fe=f.nodes)==null?void 0:fe.a)==null||yn.apply()})}function ws(e,t,n,i,r,a,s,l){var p=(s&la)!==0?(s&ha)===0?Ha(n,!1,!1):vt(n):null,c=(s&pa)!==0?vt(r):null;return{v:p,i:c,e:be(()=>(a(t,p??n,c??r,l),()=>{e.delete(i)}))}}function Vt(e,t,n){if(e.nodes)for(var i=e.nodes.start,r=e.nodes.end,a=t&&(t.f&Re)===0?t.nodes.start:n;i!==null;){var s=dn(i);if(a.before(i),i===r)return;i=s}}function Ke(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}function xs(e,t,n=!1,i=!1,r=!1,a=!1){var s=e,l="";if(n)var p=e;X(()=>{var c=C;if(l!==(l=t()??"")){if(n){c.nodes=null,p.innerHTML=l,l!==""&&an(We(p),p.lastChild);return}if(c.nodes!==null&&(kr(c.nodes.start,c.nodes.end),c.nodes=null),l!==""){var h=i?fa:r?ua:void 0,d=xr(i?"svg":r?"math":"template",h);d.innerHTML=l;var v=i||r?d:d.content;if(an(We(v),v.lastChild),i||r)for(;We(v);)s.before(We(v));else s.before(v)}}})}function en(e,t,...n){var i=new Nr(e);Ln(()=>{const r=t()??null;i.ensure(r,r&&(a=>r(a,...n)))},ft)}function Fr(e){var t,n,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(n=Fr(e[t]))&&(i&&(i+=" "),i+=n)}else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}function _s(){for(var e,t,n=0,i="",r=arguments.length;n<r;n++)(e=arguments[n])&&(t=Fr(e))&&(i&&(i+=" "),i+=t);return i}function As(e){return typeof e=="object"?_s(e):e??""}const zi=[...` 	
\r\f \v\uFEFF`];function Ts(e,t,n){var i=e==null?"":""+e;if(t&&(i=i?i+" "+t:t),n){for(var r of Object.keys(n))if(n[r])i=i?i+" "+r:r;else if(i.length)for(var a=r.length,s=0;(s=i.indexOf(r,s))>=0;){var l=s+a;(s===0||zi.includes(i[s-1]))&&(l===i.length||zi.includes(i[l]))?i=(s===0?"":i.substring(0,s))+i.substring(l+1):s=l}}return i===""?null:i}function Ni(e,t=!1){var n=t?" !important;":";",i="";for(var r of Object.keys(e)){var a=e[r];a!=null&&a!==""&&(i+=" "+r+": "+a+n)}return i}function ks(e,t){if(t){var n="",i,r;return Array.isArray(t)?(i=t[0],r=t[1]):i=t,i&&(n+=Ni(i)),r&&(n+=Ni(r,!0)),n=n.trim(),n===""?null:n}return String(e)}function Fi(e,t,n,i,r,a){var s=e[$n];if(s!==n||s===void 0){var l=Ts(n,i,a);l==null?e.removeAttribute("class"):e.className=l,e[$n]=n}else if(a&&r!==a)for(var p in a){var c=!!a[p];(r==null||c!==!!r[p])&&e.classList.toggle(p,c)}return a}function Jn(e,t={},n,i){for(var r in n){var a=n[r];t[r]!==a&&(n[r]==null?e.style.removeProperty(r):e.style.setProperty(r,a,i))}}function Ps(e,t,n,i){var r=e[ei];if(r!==t){var a=ks(t,i);a==null?e.removeAttribute("style"):e.style.cssText=a,e[ei]=t}else i&&(Array.isArray(i)?(Jn(e,n==null?void 0:n[0],i[0]),Jn(e,n==null?void 0:n[1],i[1],"important")):Jn(e,n,i));return i}const Cs=Symbol("is custom element"),Es=Symbol("is html");function ie(e,t,n,i){var r=Ss(e),a=r[t];a!==(r[t]=n)&&(t==="loading"&&(e[oa]=n),n==null?e.removeAttribute(t):typeof n!="string"&&Is(e).has(t)?e[t]=n:e.setAttribute(t,n))}function Ss(e){return e[_n]??(e[_n]={[Cs]:e.nodeName.includes("-"),[Es]:e.namespaceURI===er})}var Li=new Map;function Is(e){var t=e.getAttribute("is")||e.nodeName,n=Li.get(t);if(n)return n;Li.set(t,n=new Set);for(var i,r=e,a=Element.prototype;a!==r;){i=Yi(r);for(var s in i)i[s].set&&s!=="innerHTML"&&s!=="textContent"&&s!=="innerText"&&n.add(s);r=di(r)}return n}function Lr(e=!1){const t=H,n=t.l.u;if(!n)return;let i=()=>ts(t.s);if(e){let r=0,a={};const s=Fn(()=>{let l=!1;const p=t.s;for(const c in p)p[c]!==a[c]&&(a[c]=p[c],l=!0);return l&&r++,r});i=()=>y(s)}n.b.length&&Va(()=>{Di(t,i),Qn(n.b)}),Si(()=>{const r=zr(()=>n.m.map(ra));return()=>{for(const a of r)typeof a=="function"&&a()}}),n.a.length&&Si(()=>{Di(t,i),Qn(n.a)})}function Di(e,t){if(e.l.s)for(const n of e.l.s)y(n);t()}const Ms="5";var ji;typeof window<"u"&&((ji=window.__svelte??(window.__svelte={})).v??(ji.v=new Set)).add(Ms);Ia();var qs=G('<div class="container-xl mx-auto main-content-1"><!></div>');function Rs(e,t){var n=qs(),i=z(n);en(i,()=>t.children),S(e,n)}var Gs=G('<div class="container-lg"><div class="row"><div class="col-sm-2"></div> <div class="col-sm-8 entry-content"><!></div></div></div>');function Os(e,t){var n=Gs(),i=z(n),r=D(z(i),2),a=z(r);en(a,()=>t.children),S(e,n)}var zs=G("<p> </p>");function Ns(e,t){var n=zs(),i=he(n,!0);X(()=>ce(i,t.text)),S(e,n)}var Fs=G('<small id="small-category"><a href="https://www.cjr.org/tow-center/"><img alt="Tow Center" class="tow-ccn-slug-image"/></a></small>');function Ls(e,t){ui(t,!1),Lr();var n=Fs(),i=z(n),r=he(i);X(()=>ie(r,"src","./graphics/cjr/tow-slug-500-2.png")),S(e,n),vi()}var Ds=G('<div class="container-lg title-image-lg"><!> <header class="col-sm-10"><h1 class="main-title"> </h1> <div class="post-excerpt"><p> </p></div> <div class="meta"><time class="date svelte-ev0zn9"> </time> <span class="byline"><em>By</em> <!></span></div></header> <!></div>');function Hs(e,t){var n=Ds(),i=z(n);en(i,()=>t.children??Xn);var r=D(i,2),a=z(r),s=he(a,!0),l=D(a,2),p=z(l),c=he(p,!0),h=D(l,2),d=z(h),v=he(d,!0),g=D(d,2),u=D(z(g),2);en(u,()=>t.byline);var m=D(r,2);en(m,()=>t.hero??Xn),X(()=>{ce(s,t.hed),ce(c,t.subhed),ie(d,"datetime",t.datetime),ce(v,t.date)}),S(e,n)}const Ws=`AI search tools are rapidly gaining in popularity, with nearly one in four Americans now saying they have used AI in place of traditional search engines. These tools derive their value from crawling the internet for up-to-date, relevant information—content that is often produced by news publishers.

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
`,js=`<!-- Generated by all2html --><!-- source: graph5 -->
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
<!-- End all2html -->`,Bs=`<!-- Generated by all2html --><!-- source: graph4 -->
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
<!-- End all2html -->`,Us=`<!-- Generated by all2html --><!-- source: graph3 -->
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
<!-- End all2html -->`,Ks=`<!-- Generated by all2html --><!-- source: graph2 -->
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
<!-- End all2html -->`,Ys=`<!-- Generated by all2html --><!-- source: graphs-copy -->
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
<!-- End all2html -->`;var Vs=G('<a rel="author" href="https://www.cjr.org/author/klaudia-jazwinska">Klaudia Jaźwińska</a> and <a rel="author" href="https://www.cjr.org/author/aisvarya-chandrasekar" class="svelte-1n46o8q">Aisvarya Chandrasekar</a>',1),Js=G('<figure class="image-hero-box svelte-1n46o8q"><img class="image-hero" width="1600" height="704" alt="Static on a broken television screen"/> <figcaption class="image-hero-caption">Image: The rack of a broken monitor or TV is the texture of a television screen, background for superimposing with the effect of grain noise, Александр Розов. Adobe Stock 1050902471</figcaption></figure>'),Xs=G('<h2 class="svelte-1n46o8q">Download our data</h2> <p class="svelte-1n46o8q"><a href="https://github.com/TowCenter/genSearch-Part2">Download the study dataset and read the access instructions on GitHub</a>.</p>',1),Qs=G('<h2 class="svelte-1n46o8q"> </h2>'),Zs=G('<h3 class="svelte-1n46o8q"> </h3>'),$s=G("<li> </li>"),eo=G('<li class="svelte-1n46o8q"><span aria-hidden="true"> </span> </li>'),to=G('<ul class="grading-key svelte-1n46o8q" aria-label="Response grading key"></ul>'),no=G('<ul class="svelte-1n46o8q"></ul> <!>',1),io=G('<figure class="article-figure svelte-1n46o8q"><img loading="lazy" alt="" class="svelte-1n46o8q"/> <figcaption class="svelte-1n46o8q"> </figcaption></figure>'),ro=G('<p class="svelte-1n46o8q"><em> </em></p>'),ao=G('<p class="lead-paragraph svelte-1n46o8q"> </p>'),so=G('<p class="svelte-1n46o8q"><strong></strong> </p>'),oo=G('<figure class="article-figure query-figure svelte-1n46o8q"><img width="1492" height="733" alt="An excerpt from the query grid is enlarged to show the prompt and a sample response with its headline, publisher, date, and URL highlighted." loading="lazy" class="svelte-1n46o8q"/></figure>'),lo=G("<figure></figure>"),po=G('<div class="study-table svelte-1n46o8q"><iframe title="Tow Center study data table" loading="lazy" class="svelte-1n46o8q"></iframe> <p class="svelte-1n46o8q"><a>Open the study data table in Airtable</a></p></div>'),Hi=G("<!> <!>",1),co=G('<aside class="republication svelte-1n46o8q" aria-label="Republication credit"><p class="svelte-1n46o8q">This article is republished from <cite></cite>.</p> <a class="svelte-1n46o8q">Read the original article</a></aside> <!> <aside class="republication svelte-1n46o8q" aria-label="Republication source"><p class="svelte-1n46o8q">This article is republished from <cite></cite>.</p> <a class="svelte-1n46o8q">Read the original article</a></aside>',1),ho=G('<main id="article" class="svelte-1n46o8q"><!></main>');function go(e,t){ui(t,!1);const n=[["Completely Correct","#88bf78"],["Correct but Incomplete","#b5d9ad"],["Partially Incorrect","#f5b4b9"],["Completely Incorrect","#f78e94"],["No Answer Provided","#dce0df"],["Crawler Blocked","#d2dfef"]],i="The generative search tools we tested had a common tendency to cite the wrong article",r=[{caption:"An example of Copilot declining",file:"copilot-decline.jpg",width:1486,height:1292},{caption:"An example of Gemini declining",file:"gemini-politics.jpg",width:1680,height:1146},{caption:"Despite having a partnership with the Texas Tribune, Perplexity cited an unofficial version",file:"perplexity-tribune.jpg",width:1988,height:988},{caption:"Although USA Today blocks ChatGPT’s crawler",file:"chatgpt-yahoo.jpg",width:1248,height:1108}],a="./graphics/article-figures/",s="https://airtable.com/embed/appg737s82fePQorq/shrSYddgl1MYeaxOH",l=[{after:"Overall, the chatbots often failed to retrieve the correct articles.",folder:"confidently-wrong",label:"Generative search tools were often confidently wrong in our study",html:Ys},{after:"Premium models, such as Perplexity Pro",folder:"premium-models",className:"premium-graphic",label:"Response comparison for Perplexity and Grok models",html:Ks},{after:"We expected chatbots",folder:"crawler-access",label:"Crawler access and response accuracy",html:Us},{after:i+".",folder:"citation-links",className:"citation-graphic",label:"Types of links cited by generative search tools",html:Bs},{after:"A deal between AI companies and publishers often involves",folder:"licensing-deals",className:"licensing-graphic",label:"Accuracy for AI platforms and publishers with licensing deals",html:js}].map(g=>({...g,html:g.html.replace(/src="([^"/]+\.png(?:\?[^"]*)?)"/g,(u,m)=>`src="./graphics/${g.folder}/${m}"`)})),p="https://www.cjr.org/tow_center/we-compared-eight-ai-search-engines-theyre-all-bad-at-citing-news.php",c=Ws.trim().split(/\r?\n(?:[ \t]*\r?\n)+/),h=c.filter(g=>g.startsWith("## "));Lr();var d=ho(),v=z(d);Rs(v,{children:(g,u)=>{var m=Hi(),f=Tt(m);Hs(f,{hed:"AI Search Has a Citation Problem",subhed:"We compared eight AI search engines. They’re all bad at citing news.",date:"March 6, 2025",datetime:"2025-03-06",byline:O=>{var B=Vs();S(O,B)},hero:O=>{var B=Js(),xe=z(B);X(()=>ie(xe,"src",a+"article-hero.jpg")),S(O,B)},children:(O,B)=>{Ls(O,{})}});var b=D(f,2);Os(b,{children:(M,F)=>{var O=co(),B=Tt(O),xe=z(B),$=D(z(xe));$.textContent="Columbia Journalism Review";var Ne=D(xe,2);ie(Ne,"href",p);var Fe=D(B,2);Vn(Fe,1,()=>c,Yn,(vn,q,mn)=>{const tt=Sn(()=>r.find(E=>y(q).startsWith(E.caption))),nt=Sn(()=>l.find(E=>y(q).startsWith(E.after)));var fe=os(),yn=Tt(fe);{var Dr=E=>{var R=Xs(),L=Tt(R);X(se=>ie(L,"id",se),[()=>"section-"+(h.indexOf(y(q))+1)]),S(E,R)},Hr=E=>{var R=Qs(),L=he(R,!0);X((se,it)=>{ie(R,"id",se),ce(L,it)},[()=>"section-"+(h.indexOf(y(q))+1),()=>y(q).slice(3)]),S(E,R)},Wr=Be(()=>y(q).startsWith("## ")),jr=E=>{var R=Zs(),L=he(R,!0);X(se=>ce(L,se),[()=>y(q).slice(4)]),S(E,R)},Br=Be(()=>y(q).startsWith("### ")),Ur=E=>{var R=no(),L=Tt(R);Vn(L,5,()=>y(q).split(/\r?\n/),Yn,(rt,yt)=>{var bt=$s(),Lt=he(bt,!0);X(wt=>ce(Lt,wt),[()=>y(yt).slice(2)]),S(rt,bt)});var se=D(L,2);{var it=rt=>{var yt=to();Vn(yt,5,()=>n,Yn,(bt,Lt)=>{var wt=Be(()=>aa(y(Lt),2));let Dt=()=>y(wt)[0],U=()=>y(wt)[1];var Y=eo(),ue=z(Y);let xt,_t;var Qr=he(ue,!0),Zr=D(ue);X(()=>{xt=Fi(ue,1,"svelte-1n46o8q",null,xt,{blocked:Dt()==="Crawler Blocked"}),_t=Ps(ue,"",_t,{background:U()}),ce(Qr,Dt()==="Crawler Blocked"?"×":""),ce(Zr,` ${Dt()??""}`)}),S(bt,Y)}),S(rt,yt)},Dn=Be(()=>y(q).startsWith("- Correct:"));xn(se,rt=>{y(Dn)&&rt(it)})}S(E,R)},Kr=Be(()=>y(q).startsWith("- ")),Yr=E=>{var R=io(),L=z(R),se=D(L,2),it=he(se,!0);X(()=>{ie(L,"src",a+y(tt).file),ie(L,"width",y(tt).width),ie(L,"height",y(tt).height),ce(it,y(q))}),S(E,R)},Vr=E=>{var R=ro(),L=z(R),se=he(L,!0);X(()=>ce(se,y(q))),S(E,R)},Jr=E=>{var R=ao(),L=he(R,!0);X(()=>ce(L,y(q))),S(E,R)},Xr=E=>{var R=Hi(),L=Tt(R);{var se=U=>{var Y=so(),ue=z(Y);ue.textContent="The generative search tools we tested had a common tendency to cite the wrong article";var xt=D(ue,1,!0);X(_t=>ce(xt,_t),[()=>y(q).slice(i.length)]),S(U,Y)},it=Be(()=>y(q).startsWith(i)),Dn=U=>{Ns(U,{get text(){return y(q)}})};xn(L,U=>{y(it)?U(se):U(Dn,-1)})}var rt=D(L,2);{var yt=U=>{var Y=oo(),ue=he(Y);X(()=>ie(ue,"src",a+"query-example.png")),S(U,Y)},bt=Be(()=>y(q).startsWith("After providing each chatbot")),Lt=U=>{var Y=lo();xs(Y,()=>y(nt).html,!0),X(()=>{Fi(Y,1,As(["findings-graphic",y(nt).className]),"svelte-1n46o8q"),ie(Y,"aria-label",y(nt).label)}),S(U,Y)},wt=U=>{var Y=po(),ue=z(Y);ie(ue,"src",s);var xt=D(ue,2),_t=z(xt);ie(_t,"href",s),S(U,Y)},Dt=Be(()=>y(q).startsWith("When we asked whether the AI companies made any commitments"));xn(rt,U=>{y(bt)?U(yt):y(nt)?U(Lt,1):y(Dt)&&U(wt,2)})}S(E,R)};xn(yn,E=>{y(q)==="## Download our data"?E(Dr):y(Wr)?E(Hr,1):y(Br)?E(jr,2):y(Kr)?E(Ur,3):y(tt)?E(Yr,4):y(q)==="Kaylee Williams, Sarah Grevy Gotfredsen, and Dhrumil Mehta contributed to this report."?E(Vr,5):mn===0?E(Jr,6):E(Xr,-1)})}S(vn,fe)});var ne=D(Fe,2),et=z(ne),mt=D(z(et));mt.textContent="Columbia Journalism Review";var un=D(et,2);ie(un,"href",p),S(M,O)}}),S(g,m)}}),S(e,d),vi()}us(go,{target:document.getElementById("app")});
