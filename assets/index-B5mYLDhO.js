var Qr=Object.defineProperty;var ki=e=>{throw TypeError(e)};var Zr=(e,t,n)=>t in e?Qr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var J=(e,t,n)=>Zr(e,typeof t!="symbol"?t+"":t,n),Wn=(e,t,n)=>t.has(e)||ki("Cannot "+n);var l=(e,t,n)=>(Wn(e,t,"read from private field"),n?n.call(e):t.get(e)),T=(e,t,n)=>t.has(e)?ki("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),_=(e,t,n,i)=>(Wn(e,t,"write to private field"),i?i.call(e,n):t.set(e,n),n),w=(e,t,n)=>(Wn(e,t,"access private method"),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();const Bi=!1;var Ui=Array.isArray,$r=Array.prototype.indexOf,nn=Array.prototype.includes,On=Array.from,Ki=Object.defineProperty,Xt=Object.getOwnPropertyDescriptor,Yi=Object.getOwnPropertyDescriptors,ea=Object.prototype,ta=Array.prototype,ui=Object.getPrototypeOf,Pi=Object.isExtensible;const Zn=()=>{};function na(e){return e()}function $n(e){for(var t=0;t<e.length;t++)e[t]()}function Vi(){var e,t,n=new Promise((i,r)=>{e=i,t=r});return{promise:n,resolve:e,reject:t}}function ia(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const n=[];for(const i of e)if(n.push(i),n.length===t)break;return n}const Z=2,rn=4,hn=8,Ji=1<<24,ke=16,Ee=32,Ze=64,ei=128,vi=256,Ce=512,W=1024,q=2048,de=4096,te=8192,Q=16384,Nt=32768,kn=1<<25,ft=65536,Pn=1<<17,ra=1<<18,Ft=1<<19,Xi=1<<20,Ge=1<<25,Cn=1<<21,Ct=1<<22,Xe=1<<23,Qt=Symbol("$state"),Qi=Symbol("component"),aa=Symbol(""),_n=Symbol("attributes"),ti=Symbol("class"),ni=Symbol("style"),Wt=Symbol("text"),gn=new class extends Error{constructor(){super(...arguments);J(this,"name","StaleReactionError");J(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}},sa=1,oa=2,Zi=4,la=8,pa=16,ca=1,ha=2,$i={},j=Symbol("uninitialized"),er="http://www.w3.org/1999/xhtml",ga="http://www.w3.org/2000/svg",da="http://www.w3.org/1998/Math/MathML";function fa(){console.warn("https://svelte.dev/e/derived_inert")}function ua(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function tr(e){return e===this.v}function va(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function nr(e){return!va(e,this.v)}function ma(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function ya(e,t,n){throw new Error("https://svelte.dev/e/each_key_duplicate")}function ba(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function wa(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function xa(e){throw new Error("https://svelte.dev/e/effect_orphan")}function _a(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Aa(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Ta(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ka(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Pa(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let zn=!1,Ca=!1;function Ea(){zn=!0}let H=null;function Gt(e){H=e}function Nn(e,t=!1,n){H={p:H,i:!1,c:null,e:null,s:e,x:null,r:C,l:zn&&!t?{s:null,u:null,$:[]}:null}}function Fn(e){var t=H,n=t.e;if(n!==null){t.e=null;for(var i of n)Ar(i)}return t.i=!0,H=t.p,ir(e)}function ir(e={}){return Ki(e,Qi,{value:!0}),e}function dn(){return!zn||H!==null&&H.l===null}let Pt=[];function Sa(){var e=Pt;Pt=[],$n(e)}function Je(e){if(Pt.length===0){var t=Pt;queueMicrotask(()=>{t===Pt&&Sa()})}Pt.push(e)}const Ia=-7169;function F(e,t){e.f=e.f&Ia|t}function mi(e){(e.f&Ce)!==0||e.deps===null?F(e,W):F(e,de)}function rr(e,t){(e.f&q)!==0?t.set(e,q):(e.f&de)!==0&&t.get(e)!==q&&t.set(e,de),F(e,W)}function Ln(e){var t=A,n=C;we(null),Ne(null);try{return e()}finally{we(t),Ne(n)}}function Ma(e,t,n,i){const r=dn()?Dn:Sn;var a=e.filter(g=>!g.settled),s=t.map(r);if(n.length===0&&a.length===0){i(s);return}var o=C,p=qa(),c=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(g=>g.promise)):null;function h(g){if((o.f&Q)===0){p();try{i([...s,...g])}catch(u){Re(u,o)}En()}}var d=ar();if(n.length===0){c.then(()=>h([])).finally(d);return}function v(){Promise.all(n.map(g=>Ra(g))).then(h).catch(g=>Re(g,o)).finally(d)}c?c.then(()=>{if((o.f&Q)!==0){d();return}p(),v(),En()}):v()}function qa(){var e=C,t=A,n=H,i=x;return function(a=!0){Ne(e),we(t),Gt(n),a&&(e.f&Q)===0&&(i==null||i.activate(),i==null||i.apply())}}function En(e=!0){Ne(null),we(null),Gt(null),e&&(x==null||x.deactivate())}function ar(){var e=C,t=e.b,n=x,i=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,n),n.increment(i,e),()=>{t==null||t.update_pending_count(-1,n),n.decrement(i,e)}}function Dn(e){var t=Z|q;return C!==null&&(C.f|=Ft),{ctx:H,deps:null,effects:null,equals:tr,f:t,fn:e,reactions:null,rv:0,v:j,wv:0,parent:C,ac:null}}const Bt=Symbol("obsolete");function Ra(e,t,n){let i=C;i===null&&ma();var r=void 0,a=vt(j),s=!A,o=new Set;return Va(()=>{var g,u;var p=C,c=Vi();r=c.promise;try{Promise.resolve(e()).then(c.resolve,m=>{m!==gn&&c.reject(m)}).finally(En)}catch(m){c.reject(m),En()}var h=x;if(s){if((p.f&Nt)!==0)var d=ar();if((g=i.b)!=null&&g.is_rendered())(u=h.async_deriveds.get(p))==null||u.reject(Bt);else for(const m of o.values())m.reject(Bt);o.add(c),h.async_deriveds.set(p,c)}const v=(m,f=void 0)=>{d==null||d(),o.delete(c),f!==Bt&&(h.activate(),f?(a.f|=Xe,Ot(a,f)):((a.f&Xe)!==0&&(a.f^=Xe),Ot(a,m)),h.deactivate())};c.promise.then(v,m=>v(null,m||"unknown"))}),Ua(()=>{for(const p of o)p.reject(Bt)}),new Promise(p=>{function c(h){function d(){h===r?p(a):c(r)}h.then(d,d)}c(r)})}function Be(e){const t=Dn(e);return Sr(t),t}function Sn(e){const t=Dn(e);return t.equals=nr,t}function Ga(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)se(t[n])}}function yi(e){var t,n=C,i=e.parent;if(!$e&&i!==null&&e.v!==j&&(i.f&(Q|te))!==0)return fa(),e.v;Ne(i);try{Ga(e),t=Rr(e)}finally{Ne(n)}return t}function sr(e){var t=yi(e);if(!e.equals(t)&&(e.wv=Mr(),(!(x!=null&&x.is_fork)||e.deps===null)&&(x!==null?(x.capture(e,t,!0),Zt==null||Zt.capture(e,t,!0)):e.v=t,e.deps===null))){F(e,W);return}$e||(K!==null?(xi()||x!=null&&x.is_fork)&&K.set(e,t):mi(e))}function Oa(e){var t;if(e.effects!==null)for(const n of e.effects)(n.teardown||n.ac)&&((t=n.teardown)==null||t.call(n),n.ac!==null&&Ln(()=>{n.ac.abort(gn),n.ac=null}),n.fn!==null&&(n.teardown=Zn),an(n,0),_i(n))}function or(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&zt(t)}let Bn=null,Tt=null,x=null,Zt=null,K=null,ii=null,Un=!1,$t=null,An=null;var Ci=0;let za=1;var Et,St,It,Fe,Mt,Le,on,Se,Ie,qt,lt,k,ri,lr,ai,Ut,si,pr,cr,hr,kt,Na,Kt;const qn=class qn{constructor(){T(this,k);J(this,"id",za++);J(this,"started",!1);J(this,"linked",!0);J(this,"prev",null);J(this,"next",null);J(this,"async_deriveds",new Map);J(this,"current",new Map);J(this,"previous",new Map);T(this,Et,new Set);T(this,St,new Set);T(this,It,0);T(this,Fe,new Map);T(this,Mt,null);T(this,Le,[]);T(this,on,[]);T(this,Se,new Map);T(this,Ie,new Map);T(this,qt,new Set);J(this,"is_fork",!1);T(this,lt,!1);Tt===null?Bn=Tt=this:(Tt.next=this,this.prev=Tt),Tt=this}skip_effect(t){l(this,Ie).has(t)||l(this,Ie).set(t,{d:[],m:[]}),l(this,qt).delete(t)}unskip_effect(t,n=i=>this.schedule(i)){var i=l(this,Ie).get(t);if(i){l(this,Ie).delete(t);for(var r of i.d)F(r,q),n(r);for(r of i.m)F(r,de),n(r)}l(this,qt).add(t)}capture(t,n,i=!1){t.v!==j&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&Xe)===0&&(this.current.set(t,[n,i]),K==null||K.set(t,n)),this.is_fork||(t.v=n)}activate(){x=this}deactivate(){x=null,K=null}flush(){try{Un=!0,x=this,w(this,k,Ut).call(this)}finally{Ci=0,ii=null,$t=null,An=null,Un=!1,x=null,K=null,Oe.clear()}}discard(){var t;for(const n of l(this,St))n(this);l(this,St).clear();for(const n of this.async_deriveds.values())n.reject(Bt);w(this,k,Kt).call(this),(t=l(this,Mt))==null||t.resolve()}register_created_effect(t){l(this,on).push(t)}increment(t,n){if(_(this,It,l(this,It)+1),t){let i=l(this,Fe).get(n)??0;l(this,Fe).set(n,i+1)}}decrement(t,n){if(_(this,It,l(this,It)-1),t){let i=l(this,Fe).get(n)??0;i===1?l(this,Fe).delete(n):l(this,Fe).set(n,i-1)}l(this,lt)||(_(this,lt,!0),Je(()=>{_(this,lt,!1),this.linked&&this.flush()}))}transfer_reactions(t){for(const[n,i]of t)this.add_dirty_reaction(n,i);t.clear()}add_dirty_reaction(t,n){(n===q||l(this,Se).get(t)!==q)&&l(this,Se).set(t,n)}oncommit(t){l(this,Et).add(t)}ondiscard(t){l(this,St).add(t)}settled(){return(l(this,Mt)??_(this,Mt,Vi())).promise}static ensure(){if(x===null){const t=x=new qn;Un||Je(()=>{t.started||t.flush()})}return x}apply(){{K=null;return}}schedule(t){var n;if(ii=t,(n=t.b)!=null&&n.is_pending&&(t.f&(rn|hn|Ji))!==0&&(t.f&Nt)===0){t.b.defer_effect(t);return}l(this,Le).push(t)}};Et=new WeakMap,St=new WeakMap,It=new WeakMap,Fe=new WeakMap,Mt=new WeakMap,Le=new WeakMap,on=new WeakMap,Se=new WeakMap,Ie=new WeakMap,qt=new WeakMap,lt=new WeakMap,k=new WeakSet,ri=function(){if(this.is_fork)return!0;for(const t of l(this,Fe).keys())if(!w(this,k,lr).call(this,t))return!0;return!1},lr=function(t){for(var n=t;n!==null;n=n.parent)if(l(this,Ie).has(n))return!0;return!1},ai=function(){var t=[];for(const a of l(this,Le))if(!((a.f&Q)!==0||(a.f&(q|de))===0)){for(var n=a,i=!1;n.parent!==null;){n=n.parent;var r=n.f;if((r&(Ze|Ee))!==0){if((r&W)===0){i=!0;break}n.f^=W}}i||t.push(n)}return _(this,Le,[]),t},Ut=function(){var o,p,c,h;this.started=!0;for(const[d,v]of l(this,Se))F(d,v),this.schedule(d);this.apply();for(var t=$t=[],n=[],i=An=[];l(this,Le).length>0;){Ci++>1e3&&(w(this,k,Kt).call(this),Fa());for(const d of w(this,k,ai).call(this))try{w(this,k,si).call(this,d,t,n)}catch(v){throw fr(d),w(this,k,ri).call(this)||this.discard(),v}}if(x=null,i.length>0){var r=qn.ensure();for(const d of i)r.schedule(d)}if($t=null,An=null,w(this,k,ri).call(this)){w(this,k,kt).call(this,n),w(this,k,kt).call(this,t);for(const[d,v]of l(this,Ie))dr(d,v);i.length>0&&w(o=x,k,Ut).call(o);return}const a=w(this,k,pr).call(this);if(a){w(this,k,kt).call(this,n),w(this,k,kt).call(this,t),w(p=a,k,hr).call(p,this);return}l(this,Se).clear();for(const d of l(this,Et))d(this);l(this,Et).clear(),Zt=this,Ei(n),Ei(t),Zt=null,(c=l(this,Mt))==null||c.resolve();var s=x;l(this,It)===0&&(l(this,Le).length===0||s!==null)&&w(this,k,Kt).call(this),s!==null&&(Oe.clear(),w(h=s,k,Ut).call(h))},si=function(t,n,i){t.f^=W;for(var r=t.first;r!==null;){var a=r.f,s=(a&(Ee|Ze))!==0,o=s&&(a&W)!==0,p=o||(a&te)!==0||l(this,Ie).has(r);if(!p&&r.fn!==null){s?r.f^=W:(a&rn)!==0?n.push(r):un(r)&&((a&ke)!==0&&this.add_dirty_reaction(r,de),zt(r));var c=r.first;if(c!==null){r=c;continue}}for(;r!==null;){var h=r.next;if(h!==null){r=h;break}r=r.parent}}},pr=function(){for(var t=this.prev;t!==null;t=t.prev)if(!t.is_fork&&w(this,k,cr).call(this,t))return t;return null},cr=function(t){for(const[n,[,i]]of this.current)if(!i&&t.current.has(n))return!0;return!1},hr=function(t){var i;for(const[r,a]of t.current)!this.previous.has(r)&&t.previous.has(r)&&this.previous.set(r,t.previous.get(r)),this.current.set(r,a);for(const[r,a]of t.async_deriveds){const s=this.async_deriveds.get(r);s&&a.promise.then(s.resolve).catch(s.reject)}t.async_deriveds.clear(),this.transfer_reactions(l(t,Se));const n=r=>{var a=r.reactions;if(a!==null&&!((r.f&Z)!==0&&(r.f&(q|de))===0))for(const p of a){var s=p.f;if((s&Z)!==0)n(p);else{var o=p;s&(Ct|ke)&&!this.async_deriveds.has(o)&&(l(this,Se).delete(o),F(o,q),this.schedule(o))}}};for(const r of this.current.keys())n(r);this.oncommit(()=>t.discard()),w(i=t,k,Kt).call(i),x=this,w(this,k,Ut).call(this)},kt=function(t){for(var n=0;n<t.length;n+=1)rr(t[n],l(this,Se))},Na=function(){var d,v;for(let g=Bn;g!==null;g=g.next){var t=g.id<this.id,n=[];for(const[u,[m,f]]of this.current){if(g.current.has(u)){var i=g.current.get(u)[0];if(t&&m!==i)g.current.set(u,[m,f]);else continue}n.push(u)}if(t)for(const[u,m]of this.async_deriveds){const f=g.async_deriveds.get(u);f&&m.promise.then(f.resolve).catch(f.reject)}var r=[...g.current.keys()].filter(u=>!g.current.get(u)[1]);if(!(!g.started||r.length===0)){var a=r.filter(u=>!this.current.has(u));if(a.length===0)t&&g.discard();else if(n.length>0){if(t)for(const u of l(this,qt))g.unskip_effect(u,m=>{var f;(m.f&(ke|Ct))!==0?g.schedule(m):w(f=g,k,kt).call(f,[m])});g.activate();var s=new Set,o=new Map;for(var p of n)gr(p,a,s,o);o=new Map;var c=[...g.current].filter(([u,m])=>{const f=this.current.get(u);return f?f[0]!==m[0]||f[1]!==m[1]:!0}).map(([u])=>u);if(c.length>0)for(const u of l(this,on))(u.f&(Q|te|Pn))===0&&bi(u,c,o)&&((u.f&(Ct|ke))!==0?(F(u,q),g.schedule(u)):g.add_dirty_reaction(u,q));if(l(g,Le).length>0&&!l(g,lt)){g.apply();for(var h of w(d=g,k,ai).call(d))w(v=g,k,si).call(v,h,[],[])}g.deactivate()}}}},Kt=function(){if(this.linked){var t=this.prev,n=this.next;t===null?Bn=n:t.next=n,n===null?Tt=t:n.prev=t,this.linked=!1}};let ut=qn;function Fa(){try{_a()}catch(e){Re(e,ii)}}let Ae=null;function Ei(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var i=e[n++];if((i.f&(Q|te))===0&&un(i)&&(Ae=new Set,zt(i),i.deps===null&&i.first===null&&i.nodes===null&&i.teardown===null&&i.ac===null&&Pr(i),(Ae==null?void 0:Ae.size)>0)){Oe.clear();for(const r of Ae){if((r.f&(Q|te))!==0)continue;const a=[r];let s=r.parent;for(;s!==null;)Ae.has(s)&&(Ae.delete(s),a.push(s)),s=s.parent;for(let o=a.length-1;o>=0;o--){const p=a[o];(p.f&(Q|te))===0&&zt(p)}}Ae.clear()}}Ae=null}}function gr(e,t,n,i){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(const r of e.reactions){const a=r.f;(a&Z)!==0?gr(r,t,n,i):(a&(Ct|ke))!==0&&(a&q)===0&&bi(r,t,i)&&(F(r,q),wi(r))}}function bi(e,t,n){const i=n.get(e);if(i!==void 0)return i;if(e.deps!==null)for(const r of e.deps){if(nn.call(t,r))return!0;if((r.f&Z)!==0&&bi(r,t,n))return n.set(r,!0),!0}return n.set(e,!1),!1}function wi(e){x.schedule(e)}function dr(e,t){if(!((e.f&Ee)!==0&&(e.f&W)!==0)){(e.f&q)!==0?t.d.push(e):(e.f&de)!==0&&t.m.push(e),F(e,W);for(var n=e.first;n!==null;)dr(n,t),n=n.next}}function fr(e){F(e,W);for(var t=e.first;t!==null;)fr(t),t=t.next}let In=new Set;const Oe=new Map;let ur=!1;function vt(e,t){var n={f:0,v:e,reactions:null,equals:tr,rv:0,wv:0};return n}function Ue(e,t){const n=vt(e);return Sr(n),n}function La(e,t=!1,n=!0){var r;const i=vt(e);return t||(i.equals=nr),zn&&n&&H!==null&&H.l!==null&&((r=H.l).s??(r.s=[])).push(i),i}function at(e,t,n=!1){A!==null&&(!Pe||(A.f&Pn)!==0)&&dn()&&(A.f&(Z|ke|Ct|Pn))!==0&&(ze===null||!ze.has(e))&&ka();let i=n?Yt(t):t;return Ot(e,i,An)}var st=null,oi=0;function Ot(e,t,n=null){if(!e.equals(t)){$e?Oe.set(e,t):Oe.has(e)||Oe.set(e,e.v);var i=ut.ensure();if(i.capture(e,t),(e.f&Z)!==0){const r=e;(e.f&q)!==0&&yi(r),K===null&&mi(r)}e.wv=Mr(),st=null,oi=0,vr(e,q,n),st=null,dn()&&C!==null&&(C.f&W)!==0&&(C.f&(Ee|Ze))===0&&(ve===null?Qa([e]):ve.push(e)),!i.is_fork&&In.size>0&&!ur&&Da()}return t}function Da(){ur=!1;for(const e of In){(e.f&W)!==0&&F(e,de);let t;try{t=un(e)}catch{t=!0}t&&zt(e)}In.clear()}function en(e){at(e,e.v+1)}function vr(e,t,n){var i=e.reactions;if(i!==null){var r=dn(),a=i.length;if(oi+=a,oi>1e5&&st===null&&(st=new Set),st!==null){if(st.has(e))return;st.add(e)}for(var s=0;s<a;s++){var o=i[s],p=o.f;if(!(!r&&o===C)){var c=(p&q)===0;if(c&&F(o,t),(p&Pn)!==0)In.add(o);else if((p&Z)!==0){var h=o;K==null||K.delete(h),vr(h,de,n)}else if(c){var d=o;(p&ke)!==0&&Ae!==null&&Ae.add(d),n!==null?n.push(d):wi(d)}}}}}function Yt(e){if(typeof e!="object"||e===null||Qt in e||Qi in e)return e;const t=ui(e);if(t!==ea&&t!==ta)return e;var n=new Map,i=Ui(e),r=Ue(0),a=dt,s=o=>{if(dt===a)return o();var p=A,c=dt;we(null),qi(a);var h=o();return we(p),qi(c),h};return i&&n.set("length",Ue(e.length)),new Proxy(e,{defineProperty(o,p,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&Aa();var h=n.get(p);return h===void 0?s(()=>{var d=Ue(c.value);return n.set(p,d),d}):at(h,c.value,!0),!0},deleteProperty(o,p){var c=n.get(p);if(c===void 0){if(p in o){const h=s(()=>Ue(j));n.set(p,h),en(r)}}else at(c,j),en(r);return!0},get(o,p,c){var g;if(p===Qt)return e;var h=n.get(p),d=p in o;if(h===void 0&&(!d||(g=Xt(o,p))!=null&&g.writable)&&(h=s(()=>{var u=Yt(d?o[p]:j),m=Ue(u);return m}),n.set(p,h)),h!==void 0){var v=y(h);return v===j?void 0:v}return Reflect.get(o,p,c)},getOwnPropertyDescriptor(o,p){var v;(v=this.has)==null||v.call(this,o,p);var c=Reflect.getOwnPropertyDescriptor(o,p),h=n.get(p);if(h!==void 0){var d=y(h);if(d===j)return;if(c&&"value"in c)c.value=d;else return{enumerable:!0,configurable:!0,value:d,writable:!0}}return c},has(o,p){var v;if(p===Qt)return!0;var c=n.get(p),h=c!==void 0&&c.v!==j||Reflect.has(o,p);if(c!==void 0||(C!==null||A!==null)&&(!h||(v=Xt(o,p))!=null&&v.writable)){c===void 0&&(c=s(()=>{var g=h?Yt(o[p]):j,u=Ue(g);return u}),n.set(p,c));var d=y(c);if(d===j)return!1}return h},set(o,p,c,h){var N;var d=n.get(p),v=p in o;if(i&&p==="length")for(var g=c;g<d.v;g+=1){var u=n.get(g+"");u!==void 0?at(u,j):g in o&&(u=s(()=>Ue(j)),n.set(g+"",u))}if(d===void 0)(!v||(N=Xt(o,p))!=null&&N.writable)&&(d=s(()=>Ue(void 0)),at(d,Yt(c)),n.set(p,d));else{v=d.v!==j;var m=s(()=>Yt(c));at(d,m)}var f=Reflect.getOwnPropertyDescriptor(o,p);if(f!=null&&f.set&&f.set.call(h,c),!v){if(i&&typeof p=="string"){var b=n.get("length"),R=Number(p);Number.isInteger(R)&&R>=b.v&&at(b,R+1)}en(r)}return!0},ownKeys(o){y(r);var p=Reflect.ownKeys(o).filter(d=>{var v=n.get(d);return v===void 0||v.v!==j});for(var[c,h]of n)h.v!==j&&!(c in o)&&p.push(c);return p},setPrototypeOf(){Ta()}})}var Si,mr,yr,br;function Ha(){if(Si===void 0){Si=window,mr=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;yr=Xt(t,"firstChild").get,br=Xt(t,"nextSibling").get,Pi(e)&&(e[ti]=void 0,e[_n]=null,e[ni]=void 0,e.__e=void 0),Pi(n)&&(n[Wt]=void 0)}}function Qe(e=""){return document.createTextNode(e)}function He(e){return yr.call(e)}function fn(e){return br.call(e)}function M(e,t){return He(e)}function rt(e,t=!1){{var n=He(e);return n instanceof Comment&&n.data===""?fn(n):n}}function re(e,t=!1){return He(e)}function D(e,t=1,n=!1){let i=e;for(;t--;)i=fn(i);return i}function ja(e){e.textContent=""}function wr(){return!1}function xr(e,t,n){return t==null||t===er?n?document.createElement(e,{is:n}):document.createElement(e):n?document.createElementNS(t,e,{is:n}):document.createElementNS(t,e)}function Wa(e){var t=C;if(t===null)return A.f|=Xe,e;if((t.f&Nt)===0&&(t.f&rn)===0)throw e;Re(e,t)}function Re(e,t){if(e===$i)throw e;if(!(t!==null&&(t.f&Q)!==0)){for(;t!==null;){if((t.f&ei)!==0&&(t.f&(Q|kn))===0){if((t.f&Nt)===0)throw e;try{t.b.error(e);return}catch(n){e=n}}t=t.parent}throw e}}function _r(e){C===null&&(A===null&&xa(),wa()),$e&&ba()}function Ba(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function je(e,t){var n=C;n!==null&&(n.f&te)!==0&&(e|=te);var i={ctx:H,deps:null,nodes:null,f:e|q|Ce,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};x==null||x.register_created_effect(i);var r=i;if((e&rn)!==0)$t!==null?$t.push(i):ut.ensure().schedule(i);else if(t!==null){try{zt(i)}catch(s){throw se(i),s}r.deps===null&&r.teardown===null&&r.nodes===null&&r.first===r.last&&(r.f&Ft)===0&&(r=r.first,(e&ke)!==0&&(e&ft)!==0&&r!==null&&(r.f|=ft))}if(r!==null&&(r.parent=n,n!==null&&Ba(r,n),A!==null&&(A.f&Z)!==0&&(e&Ze)===0)){var a=A;(a.effects??(a.effects=[])).push(r)}return i}function xi(){return A!==null&&!Pe}function Ua(e){const t=je(hn,null);return F(t,W),t.teardown=e,t}function Ii(e){_r();var t=C.f,n=!A&&(t&Ee)!==0&&H!==null&&!H.i;if(n){var i=H;(i.e??(i.e=[])).push(e)}else return Ar(e)}function Ar(e){return je(rn|Xi,e)}function Ka(e){return _r(),je(hn|Xi,e)}function Ya(e){ut.ensure();const t=je(Ze|Ft,e);return(n={})=>new Promise(i=>{n.outro?gt(t,()=>{se(t),i(void 0)}):(se(t),i(void 0))})}function Va(e){return je(Ct|Ft,e)}function Ja(e,t=0){return je(hn|t,e)}function U(e,t=[],n=[],i=[]){Ma(i,t,n,r=>{je(hn,()=>{e(...r.map(y))})})}function Hn(e,t=0){var n=je(ke|t,e);return n}function be(e){return je(Ee|Ft,e)}function Tr(e){var t=e.teardown;if(t!==null){const n=$e,i=A;Mi(!0),we(null);try{t.call(null)}catch(r){Re(r,e.parent)}finally{Mi(n),we(i)}}}function _i(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const r=n.ac;r!==null&&Ln(()=>{r.abort(gn)});var i=n.next;(n.f&Ze)!==0?n.parent=null:se(n,t),n=i}}function Xa(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&Ee)===0&&se(t),t=n}}function se(e,t=!0){var n=!1;(t||(e.f&ra)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(kr(e.nodes.start,e.nodes.end),n=!0),e.f|=kn,_i(e,t&&!n),an(e,0);var i=e.nodes&&e.nodes.t;if(i!==null)for(const a of i)a.stop();Tr(e),e.f^=kn,e.f|=Q;var r=e.parent;r!==null&&r.first!==null&&Pr(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function kr(e,t){for(;e!==null;){var n=e===t?null:fn(e);e.remove(),e=n}}function Pr(e){var t=e.parent,n=e.prev,i=e.next;n!==null&&(n.next=i),i!==null&&(i.prev=n),t!==null&&(t.first===e&&(t.first=i),t.last===e&&(t.last=n))}function gt(e,t,n=!0){var i=[];e.f|=vi,Cr(e,i,!0);var r=()=>{n&&se(e),t&&t()},a=i.length;if(a>0){var s=()=>--a||r();for(var o of i)o.out(s)}else r()}function Cr(e,t,n){if((e.f&te)===0){e.f^=te;var i=e.nodes&&e.nodes.t;if(i!==null)for(const o of i)(o.is_global||n)&&t.push(o);for(var r=e.first;r!==null;){var a=r.next;if((r.f&Ze)===0){var s=(r.f&ft)!==0||(r.f&Ee)!==0&&(e.f&ke)!==0;Cr(r,t,s?n:!1)}r=a}}}function Mn(e){e.f&=~vi,Er(e,!0)}function Er(e,t){if((e.f&vi)===0&&(e.f&te)!==0){e.f^=te,(e.f&W)===0&&(F(e,q),ut.ensure().schedule(e));for(var n=e.first;n!==null;){var i=n.next,r=(n.f&ft)!==0||(n.f&Ee)!==0;Er(n,r?t:!1),n=i}var a=e.nodes&&e.nodes.t;if(a!==null)for(const s of a)(s.is_global||t)&&s.in()}}function Ai(e,t){if(e.nodes)for(var n=e.nodes.start,i=e.nodes.end;n!==null;){var r=n===i?null:fn(n);t.append(n),n=r}}let $e=!1;function Mi(e){$e=e}let A=null,Pe=!1;function we(e){A=e}let C=null;function Ne(e){C=e}let ze=null;function Sr(e){A!==null&&((A.f&Cn)!==0||(A.f&Z)!==0)&&(ze??(ze=new Set)).add(e)}let ae=null,ge=0,ve=null;function Qa(e){ve=e}let Ir=1,ot=0,dt=ot;function qi(e){dt=e}function Mr(){return++Ir}function un(e){var t=e.f;if((t&q)!==0)return!0;if((t&de)!==0){for(var n=e.deps,i=n.length,r=0;r<i;r++){var a=n[r];if(un(a)&&sr(a),a.wv>e.wv)return!0}(t&Ce)!==0&&K===null&&F(e,W)}return!1}function qr(e,t,n=!0){var i=e.reactions;if(i!==null&&!(ze!==null&&ze.has(e)))for(var r=0;r<i.length;r++){var a=i[r];(a.f&Z)!==0?qr(a,t,!1):t===a&&(n?F(a,q):(a.f&W)!==0&&F(a,de),wi(a))}}function Rr(e){var t=ae,n=ge,i=ve,r=A,a=ze,s=H,o=Pe,p=dt,c=e.f;ae=null,ge=0,ve=null,A=(c&(Ee|Ze))===0?e:null,ze=null,Gt(e.ctx),Pe=!1,dt=++ot,e.ac!==null&&(Ln(()=>{e.ac.abort(gn)}),e.ac=null);try{e.f|=Cn;var h=e.fn,d=h();e.f|=Nt;var v=Ri(e);if(dn()&&ve!==null&&!Pe&&v!==null&&(e.f&(Z|de|q))===0)for(var g=0;g<ve.length;g++)qr(ve[g],e);if(r!==null&&r!==e){if(ot++,r.deps!==null)for(let u=0;u<n;u+=1)r.deps[u].rv=ot;if(t!==null)for(const u of t)u.rv=ot;ve!==null&&(i===null?i=ve:i.push(...ve))}return(e.f&Xe)!==0&&(e.f^=Xe),d}catch(u){return Ri(e),Wa(u)}finally{e.f^=Cn,ae=t,ge=n,ve=i,A=r,ze=a,Gt(s),Pe=o,dt=p}}function Ri(e){var r;var t=e.deps,n=x==null?void 0:x.is_fork;if(ae!==null){var i;if(n||an(e,ge),t!==null&&ge>0)for(t.length=ge+ae.length,i=0;i<ae.length;i++)t[ge+i]=ae[i];else e.deps=t=ae;if(xi()&&(e.f&Ce)!==0)for(i=ge;i<t.length;i++)((r=t[i]).reactions??(r.reactions=[])).push(e)}else!n&&t!==null&&ge<t.length&&(an(e,ge),t.length=ge);return t}function Za(e,t){let n=t.reactions;if(n!==null){var i=$r.call(n,e);if(i!==-1){var r=n.length-1;r===0?n=t.reactions=null:(n[i]=n[r],n.pop())}}if(n===null&&(t.f&Z)!==0&&(ae===null||!nn.call(ae,t))){var a=t;(a.f&Ce)!==0&&(a.f^=Ce),a.v!==j&&mi(a),a.ac!==null&&Ln(()=>{a.ac.abort(gn),a.ac=null,F(a,q)}),Oa(a),an(a,0)}}function an(e,t){var n=e.deps;if(n!==null)for(var i=t;i<n.length;i++)Za(e,n[i])}function zt(e){var t=e.f;if((t&Q)===0){F(e,W);var n=C;C=e;try{(t&(ke|Ji))!==0?Xa(e):_i(e),Tr(e);var i=Rr(e);e.teardown=typeof i=="function"?i:null,e.wv=Ir;var r;Bi&&Ca&&(e.f&q)!==0&&e.deps}finally{C=n}}}function y(e){var t=e.f,n=(t&Z)!==0;if(A!==null&&!Pe){var i=C!==null&&(C.f&Q)!==0;if(!i&&(ze===null||!ze.has(e))){var r=A.deps;if((A.f&Cn)!==0)e.rv<ot&&(e.rv=ot,ae===null&&r!==null&&r[ge]===e?ge++:ae===null?ae=[e]:ae.push(e));else{A.deps??(A.deps=[]),nn.call(A.deps,e)||A.deps.push(e);var a=e.reactions;a===null?e.reactions=[A]:nn.call(a,A)||a.push(A)}}}if($e&&Oe.has(e))return Oe.get(e);if(n){var s=e;if($e){var o=s.v;return((s.f&W)===0&&s.reactions!==null||Or(s))&&(o=yi(s)),Oe.set(s,o),o}var p=(s.f&Ce)===0&&!Pe&&A!==null&&(A.f&Ce)!==0,c=(s.f&Nt)===0;un(s)&&(p&&(s.f|=Ce),sr(s)),p&&!c&&(or(s),Gr(s))}if(K!=null&&K.has(e))return K.get(e);if((e.f&Xe)!==0)throw e.v;return e.v}function Gr(e){if(e.f|=Ce,e.deps!==null)for(const n of e.deps){var t=n.reactions;t===null?n.reactions=[e]:nn.call(t,e)||t.push(e),(n.f&Z)!==0&&(n.f&Ce)===0&&(or(n),Gr(n))}}function Or(e){if(e.v===j)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Oe.has(t)||(t.f&Z)!==0&&Or(t))return!0;return!1}function zr(e){var t=Pe;try{return Pe=!0,e()}finally{Pe=t}}function $a(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Qt in e)li(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&Qt in n&&li(n)}}}function li(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let i in e)try{li(e[i],t)}catch{}const n=ui(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const i=Yi(n);for(let r in i){const a=i[r].get;if(a)try{a.call(e)}catch{}}}}}const es=["touchstart","touchmove"];function ts(e){return es.includes(e)}const bn=Symbol("events"),ns=new Set,Gi=new Set;let Kn=null,Yn=!1;function Oi(e){var m,f;var t=this,n=t.ownerDocument,i=e.type,r=((m=e.composedPath)==null?void 0:m.call(e))||[],a=r[0]||e.target;Kn=e,Yn||(Yn=!0,setTimeout(()=>{Yn=!1,Kn=null}));var s=0,o=Kn===e&&e[bn];if(o){var p=r.indexOf(o);if(p!==-1&&(t===document||t===window)){e[bn]=t;return}var c=r.indexOf(t);if(c===-1)return;p<=c&&(s=p)}if(a=r[s]||e.target,a!==t){Ki(e,"currentTarget",{configurable:!0,get(){return a||n}});var h=A,d=C;we(null),Ne(null);try{for(var v,g=[];a!==null&&a!==t;){try{var u=(f=a[bn])==null?void 0:f[i];u!=null&&(!a.disabled||e.target===a)&&u.call(a,e)}catch(b){v?g.push(b):v=b}if(e.cancelBubble)break;s++,a=s<r.length?r[s]:null}if(v){for(let b of g)queueMicrotask(()=>{throw b});throw v}}finally{e[bn]=t,delete e.currentTarget,we(h),Ne(d)}}}var ji;const Vn=((ji=globalThis==null?void 0:globalThis.window)==null?void 0:ji.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function is(e){return(Vn==null?void 0:Vn.createHTML(e))??e}function rs(e){var t=xr("template");return t.innerHTML=is(e.replaceAll("<!>","<!---->")),t.content}function sn(e,t){var n=C;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function I(e,t){var n=(t&ca)!==0,i=(t&ha)!==0,r,a=!e.startsWith("<!>");return()=>{r===void 0&&(r=rs(a?e:"<!>"+e),n||(r=He(r)));var s=i||mr?document.importNode(r,!0):r.cloneNode(!0);if(n){var o=He(s),p=s.lastChild;sn(o,p)}else sn(s,s);return s}}function as(){var e=document.createDocumentFragment(),t=document.createComment(""),n=Qe();return e.append(t,n),sn(t,n),e}function S(e,t){e!==null&&e.before(t)}function ss(e){let t=0,n=vt(0),i;return()=>{xi()&&(y(n),Ja(()=>(t===0&&(i=zr(()=>e(()=>en(n)))),t+=1,()=>{Je(()=>{t-=1,t===0&&(i==null||i(),i=void 0,en(n))})})))}}var os=ft|Ft;function ls(e,t,n,i){new ps(e,t,n,i)}var me,fi,ye,pt,X,le,ee,pe,Me,ct,Ve,Rt,ln,De,Rn,P,cs,hs,pi,Ye,gs,ci,Vt,Tn,hi,gi;class ps{constructor(t,n,i,r){T(this,P);J(this,"parent");J(this,"is_pending",!1);J(this,"transform_error");T(this,me);T(this,fi,null);T(this,ye);T(this,pt);T(this,X);T(this,le,null);T(this,ee,null);T(this,pe,null);T(this,Me,null);T(this,ct,0);T(this,Ve,0);T(this,Rt,!1);T(this,ln,new Map);T(this,De,null);T(this,Rn,ss(()=>(_(this,De,vt(l(this,ct))),()=>{_(this,De,null)})));var a;_(this,me,t),_(this,ye,n),_(this,pt,s=>{var o=C;o.b=this,o.f|=ei,i(s)}),this.parent=C.b,this.transform_error=r??((a=this.parent)==null?void 0:a.transform_error)??(s=>s),_(this,X,Hn(()=>{w(this,P,ci).call(this)},os))}defer_effect(t){rr(t,l(this,ln))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!l(this,ye).pending}update_pending_count(t,n){w(this,P,hi).call(this,t,n),_(this,ct,l(this,ct)+t),!(!l(this,De)||l(this,Rt))&&(_(this,Rt,!0),Je(()=>{_(this,Rt,!1),l(this,De)&&Ot(l(this,De),l(this,ct))}))}get_effect_pending(){return l(this,Rn).call(this),y(l(this,De))}error(t){if(t===$i||!l(this,ye).onerror&&!l(this,ye).failed)throw t;x!=null&&x.is_fork?(l(this,le)&&x.skip_effect(l(this,le)),l(this,ee)&&x.skip_effect(l(this,ee)),l(this,pe)&&x.skip_effect(l(this,pe)),x.oncommit(()=>{w(this,P,Ye).call(this)||w(this,P,gi).call(this,t)})):w(this,P,gi).call(this,t)}}me=new WeakMap,fi=new WeakMap,ye=new WeakMap,pt=new WeakMap,X=new WeakMap,le=new WeakMap,ee=new WeakMap,pe=new WeakMap,Me=new WeakMap,ct=new WeakMap,Ve=new WeakMap,Rt=new WeakMap,ln=new WeakMap,De=new WeakMap,Rn=new WeakMap,P=new WeakSet,cs=function(){try{_(this,le,be(()=>l(this,pt).call(this,l(this,me))))}catch(t){this.error(t)}},hs=function(t){const n=l(this,ye).failed,{reset:i,invoke_onerror:r}=w(this,P,pi).call(this,t);Je(r),n&&_(this,pe,be(()=>{n(l(this,me),()=>t,()=>i)}))},pi=function(t){var n=!1,i=!1;const r=()=>{if(!w(this,P,Ye).call(this)){if(n){ua();return}n=!0,i&&Pa(),l(this,pe)!==null&&gt(l(this,pe),()=>{_(this,pe,null)}),w(this,P,Tn).call(this,()=>{w(this,P,ci).call(this)})}};return{reset:r,invoke_onerror:()=>{var s,o;if(!w(this,P,Ye).call(this))try{i=!0,(o=(s=l(this,ye)).onerror)==null||o.call(s,t,r),i=!1}catch(p){Re(p,l(this,X)&&l(this,X).parent)}}}},Ye=function(){return(l(this,X).f&(Q|kn))!==0},gs=function(){const t=l(this,ye).pending;t&&(this.is_pending=!0,_(this,ee,be(()=>t(l(this,me)))),Je(()=>{if(!w(this,P,Ye).call(this)){var n=_(this,Me,document.createDocumentFragment()),i=Qe(),r=!1;if(n.append(i),_(this,le,w(this,P,Tn).call(this,()=>{try{return be(()=>l(this,pt).call(this,i))}catch(a){try{this.error(a),r=!0}catch(s){Re(s,l(this,X).parent)}return null}})),l(this,le)===null){_(this,Me,null),r&&w(this,P,Vt).call(this,x);return}l(this,Ve)===0&&(l(this,me).before(n),_(this,Me,null),gt(l(this,ee),()=>{_(this,ee,null)}),w(this,P,Vt).call(this,x))}}))},ci=function(){try{if(this.is_pending=this.has_pending_snippet(),_(this,Ve,0),_(this,ct,0),_(this,le,be(()=>{l(this,pt).call(this,l(this,me))})),l(this,Ve)>0){var t=_(this,Me,document.createDocumentFragment());Ai(l(this,le),t);const n=l(this,ye).pending;_(this,ee,be(()=>n(l(this,me))))}else w(this,P,Vt).call(this,x)}catch(n){this.error(n)}},Vt=function(t){this.is_pending=!1,t.transfer_reactions(l(this,ln))},Tn=function(t){var n=C,i=A,r=H;Ne(l(this,X)),we(l(this,X)),Gt(l(this,X).ctx);try{return ut.ensure(),t()}finally{Ne(n),we(i),Gt(r)}},hi=function(t,n){var i;if(!this.has_pending_snippet()){this.parent&&w(i=this.parent,P,hi).call(i,t,n);return}_(this,Ve,l(this,Ve)+t),l(this,Ve)===0&&(w(this,P,Vt).call(this,n),l(this,ee)&&gt(l(this,ee),()=>{_(this,ee,null)}),l(this,Me)&&(l(this,me).before(l(this,Me)),_(this,Me,null)))},gi=function(t){l(this,le)&&(se(l(this,le)),_(this,le,null)),l(this,ee)&&(se(l(this,ee)),_(this,ee,null)),l(this,pe)&&(se(l(this,pe)),_(this,pe,null));let n=l(this,ye).failed;const i=r=>{if(w(this,P,Ye).call(this))return;const{reset:a,invoke_onerror:s}=w(this,P,pi).call(this,r);s(),n&&!w(this,P,Ye).call(this)&&_(this,pe,w(this,P,Tn).call(this,()=>{try{return be(()=>{var o=C;o.b=this,o.f|=ei,n(l(this,me),()=>r,()=>a)})}catch(o){return Re(o,l(this,X).parent),null}}))};Je(()=>{if(!w(this,P,Ye).call(this)){var r;try{r=this.transform_error(t)}catch(a){Re(a,l(this,X)&&l(this,X).parent);return}r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(i,a=>Re(a,l(this,X)&&l(this,X).parent)):i(r)}})};function he(e,t){var n=t==null?"":typeof t=="object"?`${t}`:t;n!==(e[Wt]??(e[Wt]=e.nodeValue))&&(e[Wt]=n,e.nodeValue=`${n}`)}function ds(e,t){return fs(e,t)}const wn=new Map;function fs(e,{target:t,anchor:n,props:i={},events:r,context:a,intro:s=!0,transformError:o}){Ha();var p=void 0,c=Ya(()=>{var h=n??t.appendChild(Qe());ls(h,{pending:()=>{}},g=>{Nn({});var u=H;a&&(u.c=a),r&&(i.$$events=r),p=e(g,i)||ir(),Fn()},o);var d=new Set,v=g=>{for(var u=0;u<g.length;u++){var m=g[u];if(!d.has(m)){d.add(m);var f=ts(m);for(const N of[t,document]){var b=wn.get(N);b===void 0&&(b=new Map,wn.set(N,b));var R=b.get(m);R===void 0?(N.addEventListener(m,Oi,{passive:f}),b.set(m,1)):b.set(m,R+1)}}}};return v(On(ns)),Gi.add(v),()=>{var f;for(var g of d)for(const b of[t,document]){var u=wn.get(b),m=u.get(g);--m==0?(b.removeEventListener(g,Oi),u.delete(g),u.size===0&&wn.delete(b)):u.set(g,m)}Gi.delete(v),h!==n&&((f=h.parentNode)==null||f.removeChild(h))}});return us.set(p,c),p}let us=new WeakMap;var Te,qe,ce,ht,pn,cn,Gn;class Nr{constructor(t,n=!0){J(this,"anchor");T(this,Te,new Map);T(this,qe,new Map);T(this,ce,new Map);T(this,ht,new Set);T(this,pn,!0);T(this,cn,t=>{if(l(this,Te).has(t)){var n=l(this,Te).get(t),i=l(this,qe).get(n);if(i)Mn(i),l(this,ht).delete(n);else{var r=l(this,ce).get(n);r&&(Mn(r.effect),l(this,qe).set(n,r.effect),l(this,ce).delete(n),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),i=r.effect)}for(const[a,s]of l(this,Te)){if(l(this,Te).delete(a),a===t)break;const o=l(this,ce).get(s);o&&(se(o.effect),l(this,ce).delete(s))}for(const[a,s]of l(this,qe)){if(a===n||l(this,ht).has(a))continue;const o=()=>{if(Array.from(l(this,Te).values()).includes(a)){var c=document.createDocumentFragment();Ai(s,c),c.append(Qe()),l(this,ce).set(a,{effect:s,fragment:c})}else se(s);l(this,ht).delete(a),l(this,qe).delete(a)};l(this,pn)||!i?(l(this,ht).add(a),gt(s,o,!1)):o()}}});T(this,Gn,t=>{l(this,Te).delete(t);const n=Array.from(l(this,Te).values());for(const[i,r]of l(this,ce))n.includes(i)||(se(r.effect),l(this,ce).delete(i))});this.anchor=t,_(this,pn,n)}ensure(t,n){var i=x,r=wr();if(n&&!l(this,qe).has(t)&&!l(this,ce).has(t))if(r){var a=document.createDocumentFragment(),s=Qe();a.append(s),l(this,ce).set(t,{effect:be(()=>n(s)),fragment:a})}else l(this,qe).set(t,be(()=>n(this.anchor)));if(l(this,Te).set(i,t),r){for(const[o,p]of l(this,qe))o===t?i.unskip_effect(p):i.skip_effect(p);for(const[o,p]of l(this,ce))o===t?i.unskip_effect(p.effect):i.skip_effect(p.effect);i.oncommit(l(this,cn)),i.ondiscard(l(this,Gn))}else l(this,cn).call(this,i)}}Te=new WeakMap,qe=new WeakMap,ce=new WeakMap,ht=new WeakMap,pn=new WeakMap,cn=new WeakMap,Gn=new WeakMap;function xn(e,t,n=!1){var i=new Nr(e),r=n?ft:0;function a(s,o){i.ensure(s,o)}Hn(()=>{var s=!1;t((o,p=0)=>{s=!0,a(p,o)}),s||a(-1,null)},r)}function Jn(e,t){return t}function vs(e,t,n){for(var i=[],r=t.length,a,s=t.length,o=0;o<r;o++){let d=t[o];gt(d,()=>{if(a){if(a.pending.delete(d),a.done.add(d),a.pending.size===0){var v=e.outrogroups;di(e,On(a.done)),v.delete(a),v.size===0&&(e.outrogroups=null)}}else s-=1},!1)}if(s===0){var p=i.length===0&&n!==null&&e.pending.size===0;if(p){var c=n,h=c.parentNode;ja(h),h.append(c),e.items.clear()}di(e,t,!p)}else a={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(a)}function di(e,t,n=!0){var i;if(e.pending.size>0){i=new Set;for(const s of e.pending.values())for(const o of s)i.add(e.items.get(o).e)}for(var r=0;r<t.length;r++){var a=t[r];if(i!=null&&i.has(a)){a.f|=Ge;const s=document.createDocumentFragment();Ai(a,s)}else se(t[r],n)}}var zi;function Xn(e,t,n,i,r,a=null){var s=e,o=new Map,p=(t&Zi)!==0;if(p){var c=e;s=c.appendChild(Qe())}var h=null,d=Sn(()=>{var R=n();return Ui(R)?R:R==null?[]:On(R)}),v=new Map,g=!0;function u(R){if((b.effect.f&Q)===0){b.pending.delete(R);var N=y(d);b.fallback=h,ms(b,N,s,t,i),h!==null&&(N.length===0?(h.f&Ge)===0?Mn(h):(h.f^=Ge,Jt(h,null,s)):gt(h,()=>{h=null}))}}function m(R){b.pending.delete(R)}var f=Hn(()=>{for(var R=y(d),N=R.length,$=new Set,fe=x,We=wr(),z=0;z<N;z+=1){var Y=R[z],xe=i(Y,z),ne=g?null:o.get(xe);ne?(ne.v&&Ot(ne.v,Y),ne.i&&Ot(ne.i,z),We&&fe.unskip_effect(ne.e)):(ne=ys(o,g?s:zi??(zi=Qe()),Y,xe,z,r,t,n),g||(ne.e.f|=Ge),o.set(xe,ne)),$.add(xe)}if(N===0&&a&&!h&&(g?h=be(()=>a(s)):(h=be(()=>a(zi??(zi=Qe()))),h.f|=Ge)),N>$.size&&ya(),!g)if(v.set(fe,$),We){for(const[mt,yt]of o)$.has(mt)||fe.skip_effect(yt.e);fe.oncommit(u),fe.ondiscard(m)}else u(fe);y(d)}),b={effect:f,items:o,pending:v,outrogroups:null,fallback:h};g=!1}function jt(e){for(;e!==null&&(e.f&Ee)===0;)e=e.next;return e}function ms(e,t,n,i,r){var ne,mt,yt,vn,G,mn,et,tt,Lt;var a=(i&la)!==0,s=t.length,o=e.items,p=jt(e.effect.first),c,h=null,d,v=[],g=[],u,m,f,b;if(a)for(b=0;b<s;b+=1)u=t[b],m=r(u,b),f=o.get(m).e,(f.f&Ge)===0&&((mt=(ne=f.nodes)==null?void 0:ne.a)==null||mt.measure(),(d??(d=new Set)).add(f));for(b=0;b<s;b+=1){if(u=t[b],m=r(u,b),f=o.get(m).e,e.outrogroups!==null)for(const _e of e.outrogroups)_e.pending.delete(f),_e.done.delete(f);if((f.f&te)!==0&&(Mn(f),a&&((vn=(yt=f.nodes)==null?void 0:yt.a)==null||vn.unfix(),(d??(d=new Set)).delete(f))),(f.f&Ge)!==0)if(f.f^=Ge,f===p)Jt(f,null,n);else{var R=h?h.next:p;f===e.effect.last&&(e.effect.last=f.prev),f.prev&&(f.prev.next=f.next),f.next&&(f.next.prev=f.prev),Ke(e,h,f),Ke(e,f,R),Jt(f,R,n),h=f,v=[],g=[],p=jt(h.next);continue}if(f!==p){if(c!==void 0&&c.has(f)){if(v.length<g.length){var N=g[0],$;h=N.prev;var fe=v[0],We=v[v.length-1];for($=0;$<v.length;$+=1)Jt(v[$],N,n);for($=0;$<g.length;$+=1)c.delete(g[$]);Ke(e,fe.prev,We.next),Ke(e,h,fe),Ke(e,We,N),p=N,h=We,b-=1,v=[],g=[]}else c.delete(f),Jt(f,p,n),Ke(e,f.prev,f.next),Ke(e,f,h===null?e.effect.first:h.next),Ke(e,h,f),h=f;continue}for(v=[],g=[];p!==null&&p!==f;)(c??(c=new Set)).add(p),g.push(p),p=jt(p.next);if(p===null)continue}(f.f&Ge)===0&&v.push(f),h=f,p=jt(f.next)}if(e.outrogroups!==null){for(const _e of e.outrogroups)_e.pending.size===0&&(di(e,On(_e.done)),(G=e.outrogroups)==null||G.delete(_e));e.outrogroups.size===0&&(e.outrogroups=null)}if(p!==null||c!==void 0){var z=[];if(c!==void 0)for(f of c)(f.f&te)===0&&z.push(f);for(;p!==null;)(p.f&te)===0&&p!==e.fallback&&z.push(p),p=jt(p.next);var Y=z.length;if(Y>0){var xe=(i&Zi)!==0&&s===0?n:null;if(a){for(b=0;b<Y;b+=1)(et=(mn=z[b].nodes)==null?void 0:mn.a)==null||et.measure();for(b=0;b<Y;b+=1)(Lt=(tt=z[b].nodes)==null?void 0:tt.a)==null||Lt.fix()}vs(e,z,xe)}}a&&Je(()=>{var _e,yn;if(d!==void 0)for(f of d)(yn=(_e=f.nodes)==null?void 0:_e.a)==null||yn.apply()})}function ys(e,t,n,i,r,a,s,o){var p=(s&sa)!==0?(s&pa)===0?La(n,!1,!1):vt(n):null,c=(s&oa)!==0?vt(r):null;return{v:p,i:c,e:be(()=>(a(t,p??n,c??r,o),()=>{e.delete(i)}))}}function Jt(e,t,n){if(e.nodes)for(var i=e.nodes.start,r=e.nodes.end,a=t&&(t.f&Ge)===0?t.nodes.start:n;i!==null;){var s=fn(i);if(a.before(i),i===r)return;i=s}}function Ke(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}function bs(e,t,n=!1,i=!1,r=!1,a=!1){var s=e,o="";if(n)var p=e;U(()=>{var c=C;if(o!==(o=t()??"")){if(n){c.nodes=null,p.innerHTML=o,o!==""&&sn(He(p),p.lastChild);return}if(c.nodes!==null&&(kr(c.nodes.start,c.nodes.end),c.nodes=null),o!==""){var h=i?ga:r?da:void 0,d=xr(i?"svg":r?"math":"template",h);d.innerHTML=o;var v=i||r?d:d.content;if(sn(He(v),v.lastChild),i||r)for(;He(v);)s.before(He(v));else s.before(v)}}})}function tn(e,t,...n){var i=new Nr(e);Hn(()=>{const r=t()??null;i.ensure(r,r&&(a=>r(a,...n)))},ft)}function Fr(e){var t,n,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(n=Fr(e[t]))&&(i&&(i+=" "),i+=n)}else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}function ws(){for(var e,t,n=0,i="",r=arguments.length;n<r;n++)(e=arguments[n])&&(t=Fr(e))&&(i&&(i+=" "),i+=t);return i}function xs(e){return typeof e=="object"?ws(e):e??""}const Ni=[...` 	
\r\f \v\uFEFF`];function _s(e,t,n){var i=e==null?"":""+e;if(t&&(i=i?i+" "+t:t),n){for(var r of Object.keys(n))if(n[r])i=i?i+" "+r:r;else if(i.length)for(var a=r.length,s=0;(s=i.indexOf(r,s))>=0;){var o=s+a;(s===0||Ni.includes(i[s-1]))&&(o===i.length||Ni.includes(i[o]))?i=(s===0?"":i.substring(0,s))+i.substring(o+1):s=o}}return i===""?null:i}function Fi(e,t=!1){var n=t?" !important;":";",i="";for(var r of Object.keys(e)){var a=e[r];a!=null&&a!==""&&(i+=" "+r+": "+a+n)}return i}function As(e,t){if(t){var n="",i,r;return Array.isArray(t)?(i=t[0],r=t[1]):i=t,i&&(n+=Fi(i)),r&&(n+=Fi(r,!0)),n=n.trim(),n===""?null:n}return String(e)}function Li(e,t,n,i,r,a){var s=e[ti];if(s!==n||s===void 0){var o=_s(n,i,a);o==null?e.removeAttribute("class"):e.className=o,e[ti]=n}else if(a&&r!==a)for(var p in a){var c=!!a[p];(r==null||c!==!!r[p])&&e.classList.toggle(p,c)}return a}function Qn(e,t={},n,i){for(var r in n){var a=n[r];t[r]!==a&&(n[r]==null?e.style.removeProperty(r):e.style.setProperty(r,a,i))}}function Ts(e,t,n,i){var r=e[ni];if(r!==t){var a=As(t,i);a==null?e.removeAttribute("style"):e.style.cssText=a,e[ni]=t}else i&&(Array.isArray(i)?(Qn(e,n==null?void 0:n[0],i[0]),Qn(e,n==null?void 0:n[1],i[1],"important")):Qn(e,n,i));return i}const ks=Symbol("is custom element"),Ps=Symbol("is html");function ie(e,t,n,i){var r=Cs(e),a=r[t];a!==(r[t]=n)&&(t==="loading"&&(e[aa]=n),n==null?e.removeAttribute(t):typeof n!="string"&&Es(e).has(t)?e[t]=n:e.setAttribute(t,n))}function Cs(e){return e[_n]??(e[_n]={[ks]:e.nodeName.includes("-"),[Ps]:e.namespaceURI===er})}var Di=new Map;function Es(e){var t=e.getAttribute("is")||e.nodeName,n=Di.get(t);if(n)return n;Di.set(t,n=new Set);for(var i,r=e,a=Element.prototype;a!==r;){i=Yi(r);for(var s in i)i[s].set&&s!=="innerHTML"&&s!=="textContent"&&s!=="innerText"&&n.add(s);r=ui(r)}return n}function Ti(e=!1){const t=H,n=t.l.u;if(!n)return;let i=()=>$a(t.s);if(e){let r=0,a={};const s=Dn(()=>{let o=!1;const p=t.s;for(const c in p)p[c]!==a[c]&&(a[c]=p[c],o=!0);return o&&r++,r});i=()=>y(s)}n.b.length&&Ka(()=>{Hi(t,i),$n(n.b)}),Ii(()=>{const r=zr(()=>n.m.map(na));return()=>{for(const a of r)typeof a=="function"&&a()}}),n.a.length&&Ii(()=>{Hi(t,i),$n(n.a)})}function Hi(e,t){if(e.l.s)for(const n of e.l.s)y(n);t()}const Ss="5";var Wi;typeof window<"u"&&((Wi=window.__svelte??(window.__svelte={})).v??(Wi.v=new Set)).add(Ss);Ea();var Is=I('<div class="container-xl mx-auto main-content-1"><!></div>');function Ms(e,t){var n=Is(),i=M(n);tn(i,()=>t.children),S(e,n)}var qs=I('<div class="container-lg"><div class="row"><div class="col-sm-2"></div> <div class="col-sm-8 entry-content"><!></div></div></div>');function Rs(e,t){var n=qs(),i=M(n),r=D(M(i),2),a=M(r);tn(a,()=>t.children),S(e,n)}var Gs=I("<p> </p>");function Os(e,t){var n=Gs(),i=re(n,!0);U(()=>he(i,t.text)),S(e,n)}var zs=I('<footer id="footer"><div id="footer-inner"><div class="logo"><p>The voice of journalism, since 1961</p></div> <div class="lists"><div class="list"><h3>About</h3> <ul><li><a href="https://www.cjr.org/about_us/mission_statement.php">Mission</a></li> <li><a href="https://www.cjr.org/about_us/masthead.php">Masthead</a></li> <li><a href="https://www.cjr.org/about_us/privacy_policy.php">Privacy Policy</a></li> <li><a href="https://www.cjr.org/about_us/contact.php">Contact</a></li></ul></div> <div class="list"><h3>Support CJR</h3> <ul><li><a href="https://members.cjr.org/member/?a=nav-foot-mem&amp;utm_source=cjr-org&amp;utm_medium=cjr-nav&amp;utm_campaign=m-land">Become a Member</a></li> <li><a href="https://www.cjr.org/about_us/donate.php">Donate</a></li></ul></div> <div class="list"><h3>Advertise</h3> <ul><li><a href="https://www.cjr.org/about_us/advertise.php">Contact Us</a></li></ul></div></div> <div class="copyright"><span class="copyright-mobile">Copyright 2026,</span> Columbia Journalism Review</div></div></footer>');function Ns(e){var t=zs();S(e,t)}var Fs=I(`<div class="container-lg tow-ccn-about"><div class="row"><div class="container text-left tow-ccn-main"><div class="row tow-ccn-line"></div> <div class="row"><div class="col-4 tow-ccn-image"><a href="https://towcenter.columbia.edu/" target="_blank"><img alt="Tow Center for Digital Journalism" class="tow-ccn-tout-image-1"/></a></div> <div class="col-7 tow-ccn-tout"><h2 id="about-tow-center" class="tow-ccn-tout-main-title svelte-ofq6m6">About the Tow Center</h2> <span class="tow-ccn-tout-excerpt"><p>The Tow Center for Digital Journalism at Columbia's Graduate School of Journalism, a partner of CJR, is a research center exploring the ways in which technology is changing journalism, its practice and its consumption — as we seek new ways to judge the reliability, standards, and credibility of information online.</p> <p><a href="https://cjr.org/tow-center/" class="tow-ccn-tout-link">View other Tow articles »</a></p> <p><a href="https://towcenter.columbia.edu/" class="tow-ccn-tout-link" target="_blank">Visit Tow Center website »</a></p></span></div></div></div></div></div>`);function Ls(e,t){Nn(t,!1),Ti();var n=Fs(),i=M(n),r=M(i),a=D(M(r),2),s=M(a),o=M(s),p=re(o);U(()=>ie(p,"src","./graphics/cjr/tow-logo-bottom-500.png")),S(e,n),Fn()}var Ds=I('<small id="small-category"><a href="https://www.cjr.org/tow-center/"><img alt="Tow Center" class="tow-ccn-slug-image"/></a></small>');function Hs(e,t){Nn(t,!1),Ti();var n=Ds(),i=M(n),r=re(i);U(()=>ie(r,"src","./graphics/cjr/tow-slug-500-2.png")),S(e,n),Fn()}var js=I('<div class="container-lg title-image-lg"><!> <header class="col-sm-10"><h1 class="main-title"> </h1> <div class="post-excerpt"><p> </p></div> <div class="meta"><time class="date svelte-ev0zn9"> </time> <span class="byline"><em>By</em> <!></span></div></header> <!></div>');function Ws(e,t){var n=js(),i=M(n);tn(i,()=>t.children??Zn);var r=D(i,2),a=M(r),s=re(a,!0),o=D(a,2),p=M(o),c=re(p,!0),h=D(o,2),d=M(h),v=re(d,!0),g=D(d,2),u=D(M(g),2);tn(u,()=>t.byline);var m=D(r,2);tn(m,()=>t.hero??Zn),U(()=>{he(s,t.hed),he(c,t.subhed),ie(d,"datetime",t.datetime),he(v,t.date)}),S(e,n)}const Bs=`AI search tools are rapidly gaining in popularity, with nearly one in four Americans now saying they have used AI in place of traditional search engines. These tools derive their value from crawling the internet for up-to-date, relevant information—content that is often produced by news publishers.

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
`,Us=`<!-- Generated by all2html --><!-- source: graph5 -->
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
<!-- End all2html -->`,Ks=`<!-- Generated by all2html --><!-- source: graph4 -->
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
<!-- End all2html -->`,Ys=`<!-- Generated by all2html --><!-- source: graph3 -->
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
<!-- End all2html -->`,Vs=`<!-- Generated by all2html --><!-- source: graph2 -->
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
<!-- End all2html -->`,Js=`<!-- Generated by all2html --><!-- source: graphs-copy -->
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
<!-- End all2html -->`;var Xs=I('<a rel="author" href="https://www.cjr.org/author/klaudia-jazwinska">Klaudia Jaźwińska</a> and <a rel="author" href="https://www.cjr.org/author/aisvarya-chandrasekar">Aisvarya Chandrasekar</a>',1),Qs=I('<figure class="image-hero-box"><img class="image-hero" width="1600" height="704" alt="Static on a broken television screen"/> <figcaption class="image-hero-caption">Image: The rack of a broken monitor or TV is the texture of a television screen, background for superimposing with the effect of grain noise, Александр Розов. Adobe Stock 1050902471</figcaption></figure>'),Zs=I('<h2 class="svelte-1n46o8q">Download our data</h2> <p><a href="https://github.com/TowCenter/genSearch-Part2">Download the study dataset and read the access instructions on GitHub</a>.</p>',1),$s=I('<h2 class="svelte-1n46o8q"> </h2>'),eo=I("<h3> </h3>"),to=I("<li> </li>"),no=I('<li class="svelte-1n46o8q"><span aria-hidden="true"> </span> </li>'),io=I('<ul class="grading-key svelte-1n46o8q" aria-label="Response grading key"></ul>'),ro=I("<ul></ul> <!>",1),ao=I('<figure class="article-figure svelte-1n46o8q"><img loading="lazy" alt="" class="svelte-1n46o8q"/> <figcaption class="svelte-1n46o8q"> </figcaption></figure>'),so=I("<p><em> </em></p>"),oo=I('<p class="lead-paragraph svelte-1n46o8q"> </p>'),lo=I("<p><strong></strong> </p>"),po=I('<figure class="article-figure findings-graphic svelte-1n46o8q"><img width="1999" height="983" alt="An excerpt from the query grid is enlarged to show the prompt and a sample response with its headline, publisher, date, and URL highlighted." loading="lazy" class="svelte-1n46o8q"/></figure>'),co=I("<figure></figure>"),ho=I('<div class="study-table svelte-1n46o8q"><iframe title="Tow Center study data table" loading="lazy" class="svelte-1n46o8q"></iframe> <p class="svelte-1n46o8q"><a>Open the study data table in Airtable</a></p></div>'),go=I("<!> <!>",1),fo=I('<aside class="republication svelte-1n46o8q" aria-label="Republication credit"><p class="svelte-1n46o8q">This article is republished from <cite></cite>.</p> <a class="svelte-1n46o8q">Read the original article</a></aside> <!>',1),uo=I("<!> <!> <!>",1),vo=I('<main id="article" class="svelte-1n46o8q"><!></main> <!>',1);function mo(e,t){Nn(t,!1);const n=[["Completely Correct","#88bf78"],["Correct but Incomplete","#b5d9ad"],["Partially Incorrect","#f5b4b9"],["Completely Incorrect","#f78e94"],["No Answer Provided","#dce0df"],["Crawler Blocked","#d2dfef"]],i="The generative search tools we tested had a common tendency to cite the wrong article",r=[{caption:"An example of Copilot declining",file:"copilot-decline.jpg",width:1486,height:1292},{caption:"An example of Gemini declining",file:"gemini-politics.jpg",width:1680,height:1146},{caption:"Despite having a partnership with the Texas Tribune, Perplexity cited an unofficial version",file:"perplexity-tribune.jpg",width:1988,height:988},{caption:"Although USA Today blocks ChatGPT’s crawler",file:"chatgpt-yahoo.jpg",width:1248,height:1108}],a="./graphics/article-figures/",s="https://airtable.com/embed/appg737s82fePQorq/shrSYddgl1MYeaxOH",o=[{after:"Overall, the chatbots often failed to retrieve the correct articles.",folder:"confidently-wrong",label:"Generative search tools were often confidently wrong in our study",html:Js},{after:"Premium models, such as Perplexity Pro",folder:"premium-models",className:"premium-graphic",label:"Response comparison for Perplexity and Grok models",html:Vs},{after:"We expected chatbots",folder:"crawler-access",label:"Crawler access and response accuracy",html:Ys},{after:i+".",folder:"citation-links",className:"citation-graphic",label:"Types of links cited by generative search tools",html:Ks},{after:"A deal between AI companies and publishers often involves",folder:"licensing-deals",className:"licensing-graphic",label:"Accuracy for AI platforms and publishers with licensing deals",html:Us}].map(m=>({...m,html:m.html.replace(/src="([^"/]+\.png(?:\?[^"]*)?)"/g,(f,b)=>`src="./graphics/${m.folder}/${b}"`)})),p="https://www.cjr.org/tow_center/we-compared-eight-ai-search-engines-theyre-all-bad-at-citing-news.php",c=Bs.trim().split(/\r?\n(?:[ \t]*\r?\n)+/),h=c.filter(m=>m.startsWith("## "));Ti();var d=vo(),v=rt(d),g=M(v);Ms(g,{children:(m,f)=>{var b=uo(),R=rt(b);Ws(R,{hed:"AI Search Has a Citation Problem",subhed:"We compared eight AI search engines. They’re all bad at citing news.",date:"March 6, 2025",datetime:"2025-03-06",byline:z=>{var Y=Xs();S(z,Y)},hero:z=>{var Y=Qs(),xe=M(Y);U(()=>ie(xe,"src",a+"article-hero.jpg")),S(z,Y)},children:(z,Y)=>{Hs(z,{})}});var N=D(R,2);Rs(N,{children:(fe,We)=>{var z=fo(),Y=rt(z),xe=M(Y),ne=D(M(xe));ne.textContent="Columbia Journalism Review";var mt=D(xe,2);ie(mt,"href",p);var yt=D(Y,2);Xn(yt,1,()=>c,Jn,(vn,G,mn)=>{const et=Sn(()=>r.find(E=>y(G).startsWith(E.caption))),tt=Sn(()=>o.find(E=>y(G).startsWith(E.after)));var Lt=as(),_e=rt(Lt);{var yn=E=>{var O=Zs(),L=rt(O);U(oe=>ie(L,"id",oe),[()=>"section-"+(h.indexOf(y(G))+1)]),S(E,O)},Lr=E=>{var O=$s(),L=re(O,!0);U((oe,nt)=>{ie(O,"id",oe),he(L,nt)},[()=>"section-"+(h.indexOf(y(G))+1),()=>y(G).slice(3)]),S(E,O)},Dr=Be(()=>y(G).startsWith("## ")),Hr=E=>{var O=eo(),L=re(O,!0);U(oe=>he(L,oe),[()=>y(G).slice(4)]),S(E,O)},jr=Be(()=>y(G).startsWith("### ")),Wr=E=>{var O=ro(),L=rt(O);Xn(L,5,()=>y(G).split(/\r?\n/),Jn,(it,bt)=>{var wt=to(),Dt=re(wt,!0);U(xt=>he(Dt,xt),[()=>y(bt).slice(2)]),S(it,wt)});var oe=D(L,2);{var nt=it=>{var bt=io();Xn(bt,5,()=>n,Jn,(wt,Dt)=>{var xt=Be(()=>ia(y(Dt),2));let Ht=()=>y(xt)[0],B=()=>y(xt)[1];var V=no(),ue=M(V);let _t,At;var Jr=re(ue,!0),Xr=D(ue);U(()=>{_t=Li(ue,1,"svelte-1n46o8q",null,_t,{blocked:Ht()==="Crawler Blocked"}),At=Ts(ue,"",At,{background:B()}),he(Jr,Ht()==="Crawler Blocked"?"×":""),he(Xr,` ${Ht()??""}`)}),S(wt,V)}),S(it,bt)},jn=Be(()=>y(G).startsWith("- Correct:"));xn(oe,it=>{y(jn)&&it(nt)})}S(E,O)},Br=Be(()=>y(G).startsWith("- ")),Ur=E=>{var O=ao(),L=M(O),oe=D(L,2),nt=re(oe,!0);U(()=>{ie(L,"src",a+y(et).file),ie(L,"width",y(et).width),ie(L,"height",y(et).height),he(nt,y(G))}),S(E,O)},Kr=E=>{var O=so(),L=M(O),oe=re(L,!0);U(()=>he(oe,y(G))),S(E,O)},Yr=E=>{var O=oo(),L=re(O,!0);U(()=>he(L,y(G))),S(E,O)},Vr=E=>{var O=go(),L=rt(O);{var oe=B=>{var V=lo(),ue=M(V);ue.textContent="The generative search tools we tested had a common tendency to cite the wrong article";var _t=D(ue,1,!0);U(At=>he(_t,At),[()=>y(G).slice(i.length)]),S(B,V)},nt=Be(()=>y(G).startsWith(i)),jn=B=>{Os(B,{get text(){return y(G)}})};xn(L,B=>{y(nt)?B(oe):B(jn,-1)})}var it=D(L,2);{var bt=B=>{var V=po(),ue=re(V);U(()=>ie(ue,"src",a+"query-example.png")),S(B,V)},wt=Be(()=>y(G).startsWith("After providing each chatbot")),Dt=B=>{var V=co();bs(V,()=>y(tt).html,!0),U(()=>{Li(V,1,xs(["findings-graphic",y(tt).className]),"svelte-1n46o8q"),ie(V,"aria-label",y(tt).label)}),S(B,V)},xt=B=>{var V=ho(),ue=M(V);ie(ue,"src",s);var _t=D(ue,2),At=M(_t);ie(At,"href",s),S(B,V)},Ht=Be(()=>y(G).startsWith("When we asked whether the AI companies made any commitments"));xn(it,B=>{y(wt)?B(bt):y(tt)?B(Dt,1):y(Ht)&&B(xt,2)})}S(E,O)};xn(_e,E=>{y(G)==="## Download our data"?E(yn):y(Dr)?E(Lr,1):y(jr)?E(Hr,2):y(Br)?E(Wr,3):y(et)?E(Ur,4):y(G)==="Kaylee Williams, Sarah Grevy Gotfredsen, and Dhrumil Mehta contributed to this report."?E(Kr,5):mn===0?E(Yr,6):E(Vr,-1)})}S(vn,Lt)}),S(fe,z)}});var $=D(N,2);Ls($,{}),S(m,b)}});var u=D(v,2);Ns(u),S(e,d),Fn()}ds(mo,{target:document.getElementById("app")});
