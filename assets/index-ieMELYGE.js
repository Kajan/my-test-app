(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function bi(e,t){const n=new Set(e.split(","));return t?r=>n.has(r.toLowerCase()):r=>n.has(r)}const ue={},Yt=[],Fe=()=>{},jl=()=>!1,Br=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),_i=e=>e.startsWith("onUpdate:"),me=Object.assign,Si=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ll=Object.prototype.hasOwnProperty,Y=(e,t)=>Ll.call(e,t),K=Array.isArray,Xt=e=>qr(e)==="[object Map]",Wa=e=>qr(e)==="[object Set]",W=e=>typeof e=="function",ge=e=>typeof e=="string",dn=e=>typeof e=="symbol",fe=e=>e!==null&&typeof e=="object",za=e=>(fe(e)||W(e))&&W(e.then)&&W(e.catch),Ga=Object.prototype.toString,qr=e=>Ga.call(e),Fl=e=>qr(e).slice(8,-1),Ja=e=>qr(e)==="[object Object]",Ti=e=>ge(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,yr=bi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Kr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ul=/-(\w)/g,et=Kr(e=>e.replace(Ul,(t,n)=>n?n.toUpperCase():"")),Nl=/\B([A-Z])/g,hn=Kr(e=>e.replace(Nl,"-$1").toLowerCase()),Wr=Kr(e=>e.charAt(0).toUpperCase()+e.slice(1)),bs=Kr(e=>e?`on${Wr(e)}`:""),St=(e,t)=>!Object.is(e,t),_s=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Pr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Dl=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ro;const Qa=()=>Ro||(Ro=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Oi(e){if(K(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=ge(r)?Bl(r):Oi(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(ge(e)||fe(e))return e}const $l=/;(?![^(]*\))/g,Hl=/:([^]+)/,Vl=/\/\*[^]*?\*\//g;function Bl(e){const t={};return e.replace(Vl,"").split($l).forEach(n=>{if(n){const r=n.split(Hl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Ei(e){let t="";if(ge(e))t=e;else if(K(e))for(let n=0;n<e.length;n++){const r=Ei(e[n]);r&&(t+=r+" ")}else if(fe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ql="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Kl=bi(ql);function Ya(e){return!!e||e===""}const lb=e=>ge(e)?e:e==null?"":K(e)||fe(e)&&(e.toString===Ga||!W(e.toString))?JSON.stringify(e,Xa,2):String(e),Xa=(e,t)=>t&&t.__v_isRef?Xa(e,t.value):Xt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[Ss(r,i)+" =>"]=s,n),{})}:Wa(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Ss(n))}:dn(t)?Ss(t):fe(t)&&!K(t)&&!Ja(t)?String(t):t,Ss=(e,t="")=>{var n;return dn(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let De;class Wl{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=De,!t&&De&&(this.index=(De.scopes||(De.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=De;try{return De=this,t()}finally{De=n}}}on(){De=this}off(){De=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function zl(e,t=De){t&&t.active&&t.effects.push(e)}function Gl(){return De}let Lt;class Ai{constructor(t,n,r,s){this.fn=t,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,zl(this,s)}get dirty(){if(this._dirtyLevel===1){Ht();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(Jl(n.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),Vt()}return this._dirtyLevel>=2}set dirty(t){this._dirtyLevel=t?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=wt,n=Lt;try{return wt=!0,Lt=this,this._runnings++,Co(this),this.fn()}finally{xo(this),this._runnings--,Lt=n,wt=t}}stop(){var t;this.active&&(Co(this),xo(this),(t=this.onStop)==null||t.call(this),this.active=!1)}}function Jl(e){return e.value}function Co(e){e._trackId++,e._depsLength=0}function xo(e){if(e.deps&&e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)Za(e.deps[t],e);e.deps.length=e._depsLength}}function Za(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let wt=!0,Fs=0;const ec=[];function Ht(){ec.push(wt),wt=!1}function Vt(){const e=ec.pop();wt=e===void 0?!0:e}function ki(){Fs++}function Ri(){for(Fs--;!Fs&&Us.length;)Us.shift()()}function tc(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&Za(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const Us=[];function nc(e,t,n){ki();for(const r of e.keys())if(e.get(r)===r._trackId){if(r._dirtyLevel<t){const s=r._dirtyLevel;r._dirtyLevel=t,s===0&&(r._shouldSchedule=!0,r.trigger())}r.scheduler&&r._shouldSchedule&&(!r._runnings||r.allowRecurse)&&(r._shouldSchedule=!1,Us.push(r.scheduler))}Ri()}const rc=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},Ns=new WeakMap,Ft=Symbol(""),Ds=Symbol("");function ke(e,t,n){if(wt&&Lt){let r=Ns.get(e);r||Ns.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=rc(()=>r.delete(n))),tc(Lt,s)}}function st(e,t,n,r,s,i){const o=Ns.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&K(e)){const c=Number(r);o.forEach((u,l)=>{(l==="length"||!dn(l)&&l>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":K(e)?Ti(n)&&a.push(o.get("length")):(a.push(o.get(Ft)),Xt(e)&&a.push(o.get(Ds)));break;case"delete":K(e)||(a.push(o.get(Ft)),Xt(e)&&a.push(o.get(Ds)));break;case"set":Xt(e)&&a.push(o.get(Ft));break}ki();for(const c of a)c&&nc(c,2);Ri()}const Ql=bi("__proto__,__v_isRef,__isVue"),sc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(dn)),Po=Yl();function Yl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=X(this);for(let i=0,o=this.length;i<o;i++)ke(r,"get",i+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(X)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ht(),ki();const r=X(this)[t].apply(this,n);return Ri(),Vt(),r}}),e}function Xl(e){const t=X(this);return ke(t,"has",e),t.hasOwnProperty(e)}class ic{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?df:uc:i?cc:ac).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=K(t);if(!s){if(o&&Y(Po,n))return Reflect.get(Po,n,r);if(n==="hasOwnProperty")return Xl}const a=Reflect.get(t,n,r);return(dn(n)?sc.has(n):Ql(n))||(s||ke(t,"get",n),i)?a:Re(a)?o&&Ti(n)?a:a.value:fe(a)?s?fc(a):Gr(a):a}}class oc extends ic{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._shallow){const c=rn(i);if(!Ir(r)&&!rn(r)&&(i=X(i),r=X(r)),!K(t)&&Re(i)&&!Re(r))return c?!1:(i.value=r,!0)}const o=K(t)&&Ti(n)?Number(n)<t.length:Y(t,n),a=Reflect.set(t,n,r,s);return t===X(s)&&(o?St(r,i)&&st(t,"set",n,r):st(t,"add",n,r)),a}deleteProperty(t,n){const r=Y(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&st(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!dn(n)||!sc.has(n))&&ke(t,"has",n),r}ownKeys(t){return ke(t,"iterate",K(t)?"length":Ft),Reflect.ownKeys(t)}}class Zl extends ic{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const ef=new oc,tf=new Zl,nf=new oc(!0),Ci=e=>e,zr=e=>Reflect.getPrototypeOf(e);function ar(e,t,n=!1,r=!1){e=e.__v_raw;const s=X(e),i=X(t);n||(St(t,i)&&ke(s,"get",t),ke(s,"get",i));const{has:o}=zr(s),a=r?Ci:n?Ii:Mn;if(o.call(s,t))return a(e.get(t));if(o.call(s,i))return a(e.get(i));e!==s&&e.get(t)}function cr(e,t=!1){const n=this.__v_raw,r=X(n),s=X(e);return t||(St(e,s)&&ke(r,"has",e),ke(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function ur(e,t=!1){return e=e.__v_raw,!t&&ke(X(e),"iterate",Ft),Reflect.get(e,"size",e)}function Io(e){e=X(e);const t=X(this);return zr(t).has.call(t,e)||(t.add(e),st(t,"add",e,e)),this}function Mo(e,t){t=X(t);const n=X(this),{has:r,get:s}=zr(n);let i=r.call(n,e);i||(e=X(e),i=r.call(n,e));const o=s.call(n,e);return n.set(e,t),i?St(t,o)&&st(n,"set",e,t):st(n,"add",e,t),this}function jo(e){const t=X(this),{has:n,get:r}=zr(t);let s=n.call(t,e);s||(e=X(e),s=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return s&&st(t,"delete",e,void 0),i}function Lo(){const e=X(this),t=e.size!==0,n=e.clear();return t&&st(e,"clear",void 0,void 0),n}function lr(e,t){return function(r,s){const i=this,o=i.__v_raw,a=X(o),c=t?Ci:e?Ii:Mn;return!e&&ke(a,"iterate",Ft),o.forEach((u,l)=>r.call(s,c(u),c(l),i))}}function fr(e,t,n){return function(...r){const s=this.__v_raw,i=X(s),o=Xt(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,u=s[e](...r),l=n?Ci:t?Ii:Mn;return!t&&ke(i,"iterate",c?Ds:Ft),{next(){const{value:f,done:d}=u.next();return d?{value:f,done:d}:{value:a?[l(f[0]),l(f[1])]:l(f),done:d}},[Symbol.iterator](){return this}}}}function dt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function rf(){const e={get(i){return ar(this,i)},get size(){return ur(this)},has:cr,add:Io,set:Mo,delete:jo,clear:Lo,forEach:lr(!1,!1)},t={get(i){return ar(this,i,!1,!0)},get size(){return ur(this)},has:cr,add:Io,set:Mo,delete:jo,clear:Lo,forEach:lr(!1,!0)},n={get(i){return ar(this,i,!0)},get size(){return ur(this,!0)},has(i){return cr.call(this,i,!0)},add:dt("add"),set:dt("set"),delete:dt("delete"),clear:dt("clear"),forEach:lr(!0,!1)},r={get(i){return ar(this,i,!0,!0)},get size(){return ur(this,!0)},has(i){return cr.call(this,i,!0)},add:dt("add"),set:dt("set"),delete:dt("delete"),clear:dt("clear"),forEach:lr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=fr(i,!1,!1),n[i]=fr(i,!0,!1),t[i]=fr(i,!1,!0),r[i]=fr(i,!0,!0)}),[e,n,t,r]}const[sf,of,af,cf]=rf();function xi(e,t){const n=t?e?cf:af:e?of:sf;return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(Y(n,s)&&s in r?n:r,s,i)}const uf={get:xi(!1,!1)},lf={get:xi(!1,!0)},ff={get:xi(!0,!1)},ac=new WeakMap,cc=new WeakMap,uc=new WeakMap,df=new WeakMap;function hf(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pf(e){return e.__v_skip||!Object.isExtensible(e)?0:hf(Fl(e))}function Gr(e){return rn(e)?e:Pi(e,!1,ef,uf,ac)}function lc(e){return Pi(e,!1,nf,lf,cc)}function fc(e){return Pi(e,!0,tf,ff,uc)}function Pi(e,t,n,r,s){if(!fe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=pf(e);if(o===0)return e;const a=new Proxy(e,o===2?r:n);return s.set(e,a),a}function Zt(e){return rn(e)?Zt(e.__v_raw):!!(e&&e.__v_isReactive)}function rn(e){return!!(e&&e.__v_isReadonly)}function Ir(e){return!!(e&&e.__v_isShallow)}function dc(e){return Zt(e)||rn(e)}function X(e){const t=e&&e.__v_raw;return t?X(t):e}function hc(e){return Pr(e,"__v_skip",!0),e}const Mn=e=>fe(e)?Gr(e):e,Ii=e=>fe(e)?fc(e):e;class pc{constructor(t,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Ai(()=>t(this._value),()=>Mr(this,1)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=X(this);return(!t._cacheable||t.effect.dirty)&&St(t._value,t._value=t.effect.run())&&Mr(t,2),gc(t),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function gf(e,t,n=!1){let r,s;const i=W(e);return i?(r=e,s=Fe):(r=e.get,s=e.set),new pc(r,s,i||!s,n)}function gc(e){wt&&Lt&&(e=X(e),tc(Lt,e.dep||(e.dep=rc(()=>e.dep=void 0,e instanceof pc?e:void 0))))}function Mr(e,t=2,n){e=X(e);const r=e.dep;r&&nc(r,t)}function Re(e){return!!(e&&e.__v_isRef===!0)}function mc(e){return yc(e,!1)}function vc(e){return yc(e,!0)}function yc(e,t){return Re(e)?e:new mf(e,t)}class mf{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:X(t),this._value=n?t:Mn(t)}get value(){return gc(this),this._value}set value(t){const n=this.__v_isShallow||Ir(t)||rn(t);t=n?t:X(t),St(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Mn(t),Mr(this,2))}}function vf(e){Mr(e,2)}function Ut(e){return Re(e)?e.value:e}const yf={get:(e,t,n)=>Ut(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return Re(s)&&!Re(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function wc(e){return Zt(e)?e:new Proxy(e,yf)}/**
* @vue/runtime-core v3.4.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function bt(e,t,n,r){let s;try{s=r?e(...r):e()}catch(i){Jr(i,t,n)}return s}function Ke(e,t,n,r){if(W(e)){const i=bt(e,t,n,r);return i&&za(i)&&i.catch(o=>{Jr(o,t,n)}),i}const s=[];for(let i=0;i<e.length;i++)s.push(Ke(e[i],t,n,r));return s}function Jr(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,a=`https://vuejs.org/errors/#runtime-${n}`;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](e,o,a)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){bt(c,null,10,[e,o,a]);return}}wf(e,n,s,r)}function wf(e,t,n,r=!0){console.error(e)}let jn=!1,$s=!1;const we=[];let Ye=0;const en=[];let pt=null,Ct=0;const bc=Promise.resolve();let Mi=null;function _c(e){const t=Mi||bc;return e?t.then(this?e.bind(this):e):t}function bf(e){let t=Ye+1,n=we.length;for(;t<n;){const r=t+n>>>1,s=we[r],i=Ln(s);i<e||i===e&&s.pre?t=r+1:n=r}return t}function ji(e){(!we.length||!we.includes(e,jn&&e.allowRecurse?Ye+1:Ye))&&(e.id==null?we.push(e):we.splice(bf(e.id),0,e),Sc())}function Sc(){!jn&&!$s&&($s=!0,Mi=bc.then(Oc))}function _f(e){const t=we.indexOf(e);t>Ye&&we.splice(t,1)}function Sf(e){K(e)?en.push(...e):(!pt||!pt.includes(e,e.allowRecurse?Ct+1:Ct))&&en.push(e),Sc()}function Fo(e,t,n=jn?Ye+1:0){for(;n<we.length;n++){const r=we[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;we.splice(n,1),n--,r()}}}function Tc(e){if(en.length){const t=[...new Set(en)].sort((n,r)=>Ln(n)-Ln(r));if(en.length=0,pt){pt.push(...t);return}for(pt=t,Ct=0;Ct<pt.length;Ct++)pt[Ct]();pt=null,Ct=0}}const Ln=e=>e.id==null?1/0:e.id,Tf=(e,t)=>{const n=Ln(e)-Ln(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Oc(e){$s=!1,jn=!0,we.sort(Tf);try{for(Ye=0;Ye<we.length;Ye++){const t=we[Ye];t&&t.active!==!1&&bt(t,null,14)}}finally{Ye=0,we.length=0,Tc(),jn=!1,Mi=null,(we.length||en.length)&&Oc()}}function Of(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ue;let s=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:d}=r[l]||ue;d&&(s=n.map(g=>ge(g)?g.trim():g)),f&&(s=n.map(Dl))}let a,c=r[a=bs(t)]||r[a=bs(et(t))];!c&&i&&(c=r[a=bs(hn(t))]),c&&Ke(c,e,6,s);const u=r[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Ke(u,e,6,s)}}function Ec(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},a=!1;if(!W(e)){const c=u=>{const l=Ec(u,t,!0);l&&(a=!0,me(o,l))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(fe(e)&&r.set(e,null),null):(K(i)?i.forEach(c=>o[c]=null):me(o,i),fe(e)&&r.set(e,o),o)}function Qr(e,t){return!e||!Br(t)?!1:(t=t.slice(2).replace(/Once$/,""),Y(e,t[0].toLowerCase()+t.slice(1))||Y(e,hn(t))||Y(e,t))}let Ve=null,Yr=null;function jr(e){const t=Ve;return Ve=e,Yr=e&&e.type.__scopeId||null,t}function Ef(e){Yr=e}function Af(){Yr=null}function kf(e,t=Ve,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&zo(-1);const i=jr(t);let o;try{o=e(...s)}finally{jr(i),r._d&&zo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ts(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:f,data:d,setupState:g,ctx:m,inheritAttrs:w}=e;let k,O;const L=jr(e);try{if(n.shapeFlag&4){const z=s||r,Q=z;k=Qe(l.call(Q,z,f,i,g,d,m)),O=c}else{const z=t;k=Qe(z.length>1?z(i,{attrs:c,slots:a,emit:u}):z(i,null)),O=t.props?c:Rf(c)}}catch(z){En.length=0,Jr(z,e,1),k=je(Fn)}let N=k;if(O&&w!==!1){const z=Object.keys(O),{shapeFlag:Q}=N;z.length&&Q&7&&(o&&z.some(_i)&&(O=Cf(O,o)),N=sn(N,O))}return n.dirs&&(N=sn(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),k=N,jr(L),k}const Rf=e=>{let t;for(const n in e)(n==="class"||n==="style"||Br(n))&&((t||(t={}))[n]=e[n]);return t},Cf=(e,t)=>{const n={};for(const r in e)(!_i(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function xf(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:c}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Uo(r,o,u):!!o;if(c&8){const l=t.dynamicProps;for(let f=0;f<l.length;f++){const d=l[f];if(o[d]!==r[d]&&!Qr(u,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Uo(r,o,u):!0:!!o;return!1}function Uo(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!Qr(n,i))return!0}return!1}function Pf({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Ac="components";function fb(e,t){return Mf(Ac,e,!0,t)||e}const If=Symbol.for("v-ndc");function Mf(e,t,n=!0,r=!1){const s=Ve||be;if(s){const i=s.type;if(e===Ac){const a=kd(i,!1);if(a&&(a===t||a===et(t)||a===Wr(et(t))))return i}const o=No(s[e]||i[e],t)||No(s.appContext[e],t);return!o&&r?i:o}}function No(e,t){return e&&(e[t]||e[et(t)]||e[Wr(et(t))])}const jf=e=>e.__isSuspense;function Lf(e,t){t&&t.pendingBranch?K(e)?t.effects.push(...e):t.effects.push(e):Sf(e)}const Ff=Symbol.for("v-scx"),Uf=()=>it(Ff),dr={};function wr(e,t,n){return kc(e,t,n)}function kc(e,t,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=ue){if(t&&i){const $=t;t=(...re)=>{$(...re),Q()}}const c=be,u=$=>r===!0?$:Jt($,r===!1?1:void 0);let l,f=!1,d=!1;if(Re(e)?(l=()=>e.value,f=Ir(e)):Zt(e)?(l=()=>u(e),f=!0):K(e)?(d=!0,f=e.some($=>Zt($)||Ir($)),l=()=>e.map($=>{if(Re($))return $.value;if(Zt($))return u($);if(W($))return bt($,c,2)})):W(e)?t?l=()=>bt(e,c,2):l=()=>(g&&g(),Ke(e,c,3,[m])):l=Fe,t&&r){const $=l;l=()=>Jt($())}let g,m=$=>{g=N.onStop=()=>{bt($,c,4),g=N.onStop=void 0}},w;if(ns)if(m=Fe,t?n&&Ke(t,c,3,[l(),d?[]:void 0,m]):l(),s==="sync"){const $=Uf();w=$.__watcherHandles||($.__watcherHandles=[])}else return Fe;let k=d?new Array(e.length).fill(dr):dr;const O=()=>{if(!(!N.active||!N.dirty))if(t){const $=N.run();(r||f||(d?$.some((re,oe)=>St(re,k[oe])):St($,k)))&&(g&&g(),Ke(t,c,3,[$,k===dr?void 0:d&&k[0]===dr?[]:k,m]),k=$)}else N.run()};O.allowRecurse=!!t;let L;s==="sync"?L=O:s==="post"?L=()=>Ee(O,c&&c.suspense):(O.pre=!0,c&&(O.id=c.uid),L=()=>ji(O));const N=new Ai(l,Fe,L),z=Gl(),Q=()=>{N.stop(),z&&Si(z.effects,N)};return t?n?O():k=N.run():s==="post"?Ee(N.run.bind(N),c&&c.suspense):N.run(),w&&w.push(Q),Q}function Nf(e,t,n){const r=this.proxy,s=ge(e)?e.includes(".")?Rc(r,e):()=>r[e]:e.bind(r,r);let i;W(t)?i=t:(i=t.handler,n=t);const o=Kn(this),a=kc(s,i.bind(r),n);return o(),a}function Rc(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Jt(e,t,n=0,r){if(!fe(e)||e.__v_skip)return e;if(t&&t>0){if(n>=t)return e;n++}if(r=r||new Set,r.has(e))return e;if(r.add(e),Re(e))Jt(e.value,t,n,r);else if(K(e))for(let s=0;s<e.length;s++)Jt(e[s],t,n,r);else if(Wa(e)||Xt(e))e.forEach(s=>{Jt(s,t,n,r)});else if(Ja(e))for(const s in e)Jt(e[s],t,n,r);return e}function kt(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Ht(),Ke(c,n,8,[e.el,a,e,t]),Vt())}}/*! #__NO_SIDE_EFFECTS__ */function Xr(e,t){return W(e)?me({name:e.name},t,{setup:e}):e}const br=e=>!!e.type.__asyncLoader,Cc=e=>e.type.__isKeepAlive;function Df(e,t){xc(e,"a",t)}function $f(e,t){xc(e,"da",t)}function xc(e,t,n=be){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Zr(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Cc(s.parent.vnode)&&Hf(r,t,n,s),s=s.parent}}function Hf(e,t,n,r){const s=Zr(t,e,r,!0);Ic(()=>{Si(r[t],s)},n)}function Zr(e,t,n=be,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Ht();const a=Kn(n),c=Ke(t,n,e,o);return a(),Vt(),c});return r?s.unshift(i):s.push(i),i}}const lt=e=>(t,n=be)=>(!ns||e==="sp")&&Zr(e,(...r)=>t(...r),n),Pc=lt("bm"),Vf=lt("m"),Bf=lt("bu"),qf=lt("u"),Kf=lt("bum"),Ic=lt("um"),Wf=lt("sp"),zf=lt("rtg"),Gf=lt("rtc");function Jf(e,t=be){Zr("ec",e,t)}const Hs=e=>e?Kc(e)?Ni(e)||e.proxy:Hs(e.parent):null,On=me(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Hs(e.parent),$root:e=>Hs(e.root),$emit:e=>e.emit,$options:e=>Li(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,ji(e.update)}),$nextTick:e=>e.n||(e.n=_c.bind(e.proxy)),$watch:e=>Nf.bind(e)}),Os=(e,t)=>e!==ue&&!e.__isScriptSetup&&Y(e,t),Qf={get({_:e},t){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=e;let u;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(Os(r,t))return o[t]=1,r[t];if(s!==ue&&Y(s,t))return o[t]=2,s[t];if((u=e.propsOptions[0])&&Y(u,t))return o[t]=3,i[t];if(n!==ue&&Y(n,t))return o[t]=4,n[t];Vs&&(o[t]=0)}}const l=On[t];let f,d;if(l)return t==="$attrs"&&ke(e,"get",t),l(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==ue&&Y(n,t))return o[t]=4,n[t];if(d=c.config.globalProperties,Y(d,t))return d[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return Os(s,t)?(s[t]=n,!0):r!==ue&&Y(r,t)?(r[t]=n,!0):Y(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||e!==ue&&Y(e,o)||Os(t,o)||(a=i[0])&&Y(a,o)||Y(r,o)||Y(On,o)||Y(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Y(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Do(e){return K(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Vs=!0;function Yf(e){const t=Li(e),n=e.proxy,r=e.ctx;Vs=!1,t.beforeCreate&&$o(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:f,mounted:d,beforeUpdate:g,updated:m,activated:w,deactivated:k,beforeDestroy:O,beforeUnmount:L,destroyed:N,unmounted:z,render:Q,renderTracked:$,renderTriggered:re,errorCaptured:oe,serverPrefetch:Oe,expose:ee,inheritAttrs:se,components:_e,directives:le,filters:v}=t;if(u&&Xf(u,r,null),o)for(const H in o){const B=o[H];W(B)&&(r[H]=B.bind(n))}if(s){const H=s.call(n,n);fe(H)&&(e.data=Gr(H))}if(Vs=!0,i)for(const H in i){const B=i[H],G=W(B)?B.bind(n,n):W(B.get)?B.get.bind(n,n):Fe,Pe=!W(B)&&W(B.set)?B.set.bind(n):Fe,ve=He({get:G,set:Pe});Object.defineProperty(r,H,{enumerable:!0,configurable:!0,get:()=>ve.value,set:he=>ve.value=he})}if(a)for(const H in a)Mc(a[H],r,n,H);if(c){const H=W(c)?c.call(n):c;Reflect.ownKeys(H).forEach(B=>{_r(B,H[B])})}l&&$o(l,e,"c");function F(H,B){K(B)?B.forEach(G=>H(G.bind(n))):B&&H(B.bind(n))}if(F(Pc,f),F(Vf,d),F(Bf,g),F(qf,m),F(Df,w),F($f,k),F(Jf,oe),F(Gf,$),F(zf,re),F(Kf,L),F(Ic,z),F(Wf,Oe),K(ee))if(ee.length){const H=e.exposed||(e.exposed={});ee.forEach(B=>{Object.defineProperty(H,B,{get:()=>n[B],set:G=>n[B]=G})})}else e.exposed||(e.exposed={});Q&&e.render===Fe&&(e.render=Q),se!=null&&(e.inheritAttrs=se),_e&&(e.components=_e),le&&(e.directives=le)}function Xf(e,t,n=Fe){K(e)&&(e=Bs(e));for(const r in e){const s=e[r];let i;fe(s)?"default"in s?i=it(s.from||r,s.default,!0):i=it(s.from||r):i=it(s),Re(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function $o(e,t,n){Ke(K(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Mc(e,t,n,r){const s=r.includes(".")?Rc(n,r):()=>n[r];if(ge(e)){const i=t[e];W(i)&&wr(s,i)}else if(W(e))wr(s,e.bind(n));else if(fe(e))if(K(e))e.forEach(i=>Mc(i,t,n,r));else{const i=W(e.handler)?e.handler.bind(n):t[e.handler];W(i)&&wr(s,i,e)}}function Li(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(u=>Lr(c,u,o,!0)),Lr(c,t,o)),fe(t)&&i.set(t,c),c}function Lr(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Lr(e,i,n,!0),s&&s.forEach(o=>Lr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=Zf[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const Zf={data:Ho,props:Vo,emits:Vo,methods:bn,computed:bn,beforeCreate:Se,created:Se,beforeMount:Se,mounted:Se,beforeUpdate:Se,updated:Se,beforeDestroy:Se,beforeUnmount:Se,destroyed:Se,unmounted:Se,activated:Se,deactivated:Se,errorCaptured:Se,serverPrefetch:Se,components:bn,directives:bn,watch:td,provide:Ho,inject:ed};function Ho(e,t){return t?e?function(){return me(W(e)?e.call(this,this):e,W(t)?t.call(this,this):t)}:t:e}function ed(e,t){return bn(Bs(e),Bs(t))}function Bs(e){if(K(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Se(e,t){return e?[...new Set([].concat(e,t))]:t}function bn(e,t){return e?me(Object.create(null),e,t):t}function Vo(e,t){return e?K(e)&&K(t)?[...new Set([...e,...t])]:me(Object.create(null),Do(e),Do(t??{})):t}function td(e,t){if(!e)return t;if(!t)return e;const n=me(Object.create(null),e);for(const r in t)n[r]=Se(e[r],t[r]);return n}function jc(){return{app:null,config:{isNativeTag:jl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let nd=0;function rd(e,t){return function(r,s=null){W(r)||(r=me({},r)),s!=null&&!fe(s)&&(s=null);const i=jc(),o=new WeakSet;let a=!1;const c=i.app={_uid:nd++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Cd,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&W(u.install)?(o.add(u),u.install(c,...l)):W(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,f){if(!a){const d=je(r,s);return d.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),l&&t?t(d,u):e(d,u,f),a=!0,c._container=u,u.__vue_app__=c,Ni(d.component)||d.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c},runWithContext(u){Fr=c;try{return u()}finally{Fr=null}}};return c}}let Fr=null;function _r(e,t){if(be){let n=be.provides;const r=be.parent&&be.parent.provides;r===n&&(n=be.provides=Object.create(r)),n[e]=t}}function it(e,t,n=!1){const r=be||Ve;if(r||Fr){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Fr._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&W(t)?t.call(r&&r.proxy):t}}function sd(e,t,n,r=!1){const s={},i={};Pr(i,ts,1),e.propsDefaults=Object.create(null),Lc(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:lc(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function id(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=X(s),[c]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=e.vnode.dynamicProps;for(let f=0;f<l.length;f++){let d=l[f];if(Qr(e.emitsOptions,d))continue;const g=t[d];if(c)if(Y(i,d))g!==i[d]&&(i[d]=g,u=!0);else{const m=et(d);s[m]=qs(c,a,m,g,e,!1)}else g!==i[d]&&(i[d]=g,u=!0)}}}else{Lc(e,t,s,i)&&(u=!0);let l;for(const f in a)(!t||!Y(t,f)&&((l=hn(f))===f||!Y(t,l)))&&(c?n&&(n[f]!==void 0||n[l]!==void 0)&&(s[f]=qs(c,a,f,void 0,e,!0)):delete s[f]);if(i!==a)for(const f in i)(!t||!Y(t,f))&&(delete i[f],u=!0)}u&&st(e,"set","$attrs")}function Lc(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(yr(c))continue;const u=t[c];let l;s&&Y(s,l=et(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:Qr(e.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=X(n),u=a||ue;for(let l=0;l<i.length;l++){const f=i[l];n[f]=qs(s,c,f,u[f],e,!Y(u,f))}}return o}function qs(e,t,n,r,s,i){const o=e[n];if(o!=null){const a=Y(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&W(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const l=Kn(s);r=u[n]=c.call(null,t),l()}}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===hn(n))&&(r=!0))}return r}function Fc(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},a=[];let c=!1;if(!W(e)){const l=f=>{c=!0;const[d,g]=Fc(f,t,!0);me(o,d),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}if(!i&&!c)return fe(e)&&r.set(e,Yt),Yt;if(K(i))for(let l=0;l<i.length;l++){const f=et(i[l]);Bo(f)&&(o[f]=ue)}else if(i)for(const l in i){const f=et(l);if(Bo(f)){const d=i[l],g=o[f]=K(d)||W(d)?{type:d}:me({},d);if(g){const m=Wo(Boolean,g.type),w=Wo(String,g.type);g[0]=m>-1,g[1]=w<0||m<w,(m>-1||Y(g,"default"))&&a.push(f)}}}const u=[o,a];return fe(e)&&r.set(e,u),u}function Bo(e){return e[0]!=="$"}function qo(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Ko(e,t){return qo(e)===qo(t)}function Wo(e,t){return K(t)?t.findIndex(n=>Ko(n,e)):W(t)&&Ko(t,e)?0:-1}const Uc=e=>e[0]==="_"||e==="$stable",Fi=e=>K(e)?e.map(Qe):[Qe(e)],od=(e,t,n)=>{if(t._n)return t;const r=kf((...s)=>Fi(t(...s)),n);return r._c=!1,r},Nc=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Uc(s))continue;const i=e[s];if(W(i))t[s]=od(s,i,r);else if(i!=null){const o=Fi(i);t[s]=()=>o}}},Dc=(e,t)=>{const n=Fi(t);e.slots.default=()=>n},ad=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=X(t),Pr(t,"_",n)):Nc(t,e.slots={})}else e.slots={},t&&Dc(e,t);Pr(e.slots,ts,1)},cd=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=ue;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:(me(s,t),!n&&a===1&&delete s._):(i=!t.$stable,Nc(t,s)),o=t}else t&&(Dc(e,t),o={default:1});if(i)for(const a in s)!Uc(a)&&o[a]==null&&delete s[a]};function Ks(e,t,n,r,s=!1){if(K(e)){e.forEach((d,g)=>Ks(d,t&&(K(t)?t[g]:t),n,r,s));return}if(br(r)&&!s)return;const i=r.shapeFlag&4?Ni(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=e,u=t&&t.r,l=a.refs===ue?a.refs={}:a.refs,f=a.setupState;if(u!=null&&u!==c&&(ge(u)?(l[u]=null,Y(f,u)&&(f[u]=null)):Re(u)&&(u.value=null)),W(c))bt(c,a,12,[o,l]);else{const d=ge(c),g=Re(c);if(d||g){const m=()=>{if(e.f){const w=d?Y(f,c)?f[c]:l[c]:c.value;s?K(w)&&Si(w,i):K(w)?w.includes(i)||w.push(i):d?(l[c]=[i],Y(f,c)&&(f[c]=l[c])):(c.value=[i],e.k&&(l[e.k]=c.value))}else d?(l[c]=o,Y(f,c)&&(f[c]=o)):g&&(c.value=o,e.k&&(l[e.k]=o))};o?(m.id=-1,Ee(m,n)):m()}}}const Ee=Lf;function ud(e){return ld(e)}function ld(e,t){const n=Qa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:f,nextSibling:d,setScopeId:g=Fe,insertStaticContent:m}=e,w=(h,p,y,S=null,b=null,C=null,I=void 0,R=null,x=!!p.dynamicChildren)=>{if(h===p)return;h&&!vn(h,p)&&(S=_(h),he(h,b,C,!0),h=null),p.patchFlag===-2&&(x=!1,p.dynamicChildren=null);const{type:E,ref:j,shapeFlag:V}=p;switch(E){case es:k(h,p,y,S);break;case Fn:O(h,p,y,S);break;case As:h==null&&L(p,y,S,I);break;case $e:_e(h,p,y,S,b,C,I,R,x);break;default:V&1?Q(h,p,y,S,b,C,I,R,x):V&6?le(h,p,y,S,b,C,I,R,x):(V&64||V&128)&&E.process(h,p,y,S,b,C,I,R,x,U)}j!=null&&b&&Ks(j,h&&h.ref,C,p||h,!p)},k=(h,p,y,S)=>{if(h==null)r(p.el=a(p.children),y,S);else{const b=p.el=h.el;p.children!==h.children&&u(b,p.children)}},O=(h,p,y,S)=>{h==null?r(p.el=c(p.children||""),y,S):p.el=h.el},L=(h,p,y,S)=>{[h.el,h.anchor]=m(h.children,p,y,S,h.el,h.anchor)},N=({el:h,anchor:p},y,S)=>{let b;for(;h&&h!==p;)b=d(h),r(h,y,S),h=b;r(p,y,S)},z=({el:h,anchor:p})=>{let y;for(;h&&h!==p;)y=d(h),s(h),h=y;s(p)},Q=(h,p,y,S,b,C,I,R,x)=>{p.type==="svg"?I="svg":p.type==="math"&&(I="mathml"),h==null?$(p,y,S,b,C,I,R,x):Oe(h,p,b,C,I,R,x)},$=(h,p,y,S,b,C,I,R)=>{let x,E;const{props:j,shapeFlag:V,transition:D,dirs:q}=h;if(x=h.el=o(h.type,C,j&&j.is,j),V&8?l(x,h.children):V&16&&oe(h.children,x,null,S,b,Es(h,C),I,R),q&&kt(h,null,S,"created"),re(x,h,h.scopeId,I,S),j){for(const ne in j)ne!=="value"&&!yr(ne)&&i(x,ne,null,j[ne],C,h.children,S,b,ye);"value"in j&&i(x,"value",null,j.value,C),(E=j.onVnodeBeforeMount)&&Je(E,S,h)}q&&kt(h,null,S,"beforeMount");const J=fd(b,D);J&&D.beforeEnter(x),r(x,p,y),((E=j&&j.onVnodeMounted)||J||q)&&Ee(()=>{E&&Je(E,S,h),J&&D.enter(x),q&&kt(h,null,S,"mounted")},b)},re=(h,p,y,S,b)=>{if(y&&g(h,y),S)for(let C=0;C<S.length;C++)g(h,S[C]);if(b){let C=b.subTree;if(p===C){const I=b.vnode;re(h,I,I.scopeId,I.slotScopeIds,b.parent)}}},oe=(h,p,y,S,b,C,I,R,x=0)=>{for(let E=x;E<h.length;E++){const j=h[E]=R?gt(h[E]):Qe(h[E]);w(null,j,p,y,S,b,C,I,R)}},Oe=(h,p,y,S,b,C,I)=>{const R=p.el=h.el;let{patchFlag:x,dynamicChildren:E,dirs:j}=p;x|=h.patchFlag&16;const V=h.props||ue,D=p.props||ue;let q;if(y&&Rt(y,!1),(q=D.onVnodeBeforeUpdate)&&Je(q,y,p,h),j&&kt(p,h,y,"beforeUpdate"),y&&Rt(y,!0),E?ee(h.dynamicChildren,E,R,y,S,Es(p,b),C):I||B(h,p,R,null,y,S,Es(p,b),C,!1),x>0){if(x&16)se(R,p,V,D,y,S,b);else if(x&2&&V.class!==D.class&&i(R,"class",null,D.class,b),x&4&&i(R,"style",V.style,D.style,b),x&8){const J=p.dynamicProps;for(let ne=0;ne<J.length;ne++){const ce=J[ne],pe=V[ce],Ne=D[ce];(Ne!==pe||ce==="value")&&i(R,ce,pe,Ne,b,h.children,y,S,ye)}}x&1&&h.children!==p.children&&l(R,p.children)}else!I&&E==null&&se(R,p,V,D,y,S,b);((q=D.onVnodeUpdated)||j)&&Ee(()=>{q&&Je(q,y,p,h),j&&kt(p,h,y,"updated")},S)},ee=(h,p,y,S,b,C,I)=>{for(let R=0;R<p.length;R++){const x=h[R],E=p[R],j=x.el&&(x.type===$e||!vn(x,E)||x.shapeFlag&70)?f(x.el):y;w(x,E,j,null,S,b,C,I,!0)}},se=(h,p,y,S,b,C,I)=>{if(y!==S){if(y!==ue)for(const R in y)!yr(R)&&!(R in S)&&i(h,R,y[R],null,I,p.children,b,C,ye);for(const R in S){if(yr(R))continue;const x=S[R],E=y[R];x!==E&&R!=="value"&&i(h,R,E,x,I,p.children,b,C,ye)}"value"in S&&i(h,"value",y.value,S.value,I)}},_e=(h,p,y,S,b,C,I,R,x)=>{const E=p.el=h?h.el:a(""),j=p.anchor=h?h.anchor:a("");let{patchFlag:V,dynamicChildren:D,slotScopeIds:q}=p;q&&(R=R?R.concat(q):q),h==null?(r(E,y,S),r(j,y,S),oe(p.children||[],y,j,b,C,I,R,x)):V>0&&V&64&&D&&h.dynamicChildren?(ee(h.dynamicChildren,D,y,b,C,I,R),(p.key!=null||b&&p===b.subTree)&&$c(h,p,!0)):B(h,p,y,j,b,C,I,R,x)},le=(h,p,y,S,b,C,I,R,x)=>{p.slotScopeIds=R,h==null?p.shapeFlag&512?b.ctx.activate(p,y,S,I,x):v(p,y,S,b,C,I,x):A(h,p,x)},v=(h,p,y,S,b,C,I)=>{const R=h.component=Sd(h,S,b);if(Cc(h)&&(R.ctx.renderer=U),Td(R),R.asyncDep){if(b&&b.registerDep(R,F),!h.el){const x=R.subTree=je(Fn);O(null,x,p,y)}}else F(R,h,p,y,b,C,I)},A=(h,p,y)=>{const S=p.component=h.component;if(xf(h,p,y))if(S.asyncDep&&!S.asyncResolved){H(S,p,y);return}else S.next=p,_f(S.update),S.effect.dirty=!0,S.update();else p.el=h.el,S.vnode=p},F=(h,p,y,S,b,C,I)=>{const R=()=>{if(h.isMounted){let{next:j,bu:V,u:D,parent:q,vnode:J}=h;{const Wt=Hc(h);if(Wt){j&&(j.el=J.el,H(h,j,I)),Wt.asyncDep.then(()=>{h.isUnmounted||R()});return}}let ne=j,ce;Rt(h,!1),j?(j.el=J.el,H(h,j,I)):j=J,V&&_s(V),(ce=j.props&&j.props.onVnodeBeforeUpdate)&&Je(ce,q,j,J),Rt(h,!0);const pe=Ts(h),Ne=h.subTree;h.subTree=pe,w(Ne,pe,f(Ne.el),_(Ne),h,b,C),j.el=pe.el,ne===null&&Pf(h,pe.el),D&&Ee(D,b),(ce=j.props&&j.props.onVnodeUpdated)&&Ee(()=>Je(ce,q,j,J),b)}else{let j;const{el:V,props:D}=p,{bm:q,m:J,parent:ne}=h,ce=br(p);if(Rt(h,!1),q&&_s(q),!ce&&(j=D&&D.onVnodeBeforeMount)&&Je(j,ne,p),Rt(h,!0),V&&ae){const pe=()=>{h.subTree=Ts(h),ae(V,h.subTree,h,b,null)};ce?p.type.__asyncLoader().then(()=>!h.isUnmounted&&pe()):pe()}else{const pe=h.subTree=Ts(h);w(null,pe,y,S,h,b,C),p.el=pe.el}if(J&&Ee(J,b),!ce&&(j=D&&D.onVnodeMounted)){const pe=p;Ee(()=>Je(j,ne,pe),b)}(p.shapeFlag&256||ne&&br(ne.vnode)&&ne.vnode.shapeFlag&256)&&h.a&&Ee(h.a,b),h.isMounted=!0,p=y=S=null}},x=h.effect=new Ai(R,Fe,()=>ji(E),h.scope),E=h.update=()=>{x.dirty&&x.run()};E.id=h.uid,Rt(h,!0),E()},H=(h,p,y)=>{p.component=h;const S=h.vnode.props;h.vnode=p,h.next=null,id(h,p.props,S,y),cd(h,p.children,y),Ht(),Fo(h),Vt()},B=(h,p,y,S,b,C,I,R,x=!1)=>{const E=h&&h.children,j=h?h.shapeFlag:0,V=p.children,{patchFlag:D,shapeFlag:q}=p;if(D>0){if(D&128){Pe(E,V,y,S,b,C,I,R,x);return}else if(D&256){G(E,V,y,S,b,C,I,R,x);return}}q&8?(j&16&&ye(E,b,C),V!==E&&l(y,V)):j&16?q&16?Pe(E,V,y,S,b,C,I,R,x):ye(E,b,C,!0):(j&8&&l(y,""),q&16&&oe(V,y,S,b,C,I,R,x))},G=(h,p,y,S,b,C,I,R,x)=>{h=h||Yt,p=p||Yt;const E=h.length,j=p.length,V=Math.min(E,j);let D;for(D=0;D<V;D++){const q=p[D]=x?gt(p[D]):Qe(p[D]);w(h[D],q,y,null,b,C,I,R,x)}E>j?ye(h,b,C,!0,!1,V):oe(p,y,S,b,C,I,R,x,V)},Pe=(h,p,y,S,b,C,I,R,x)=>{let E=0;const j=p.length;let V=h.length-1,D=j-1;for(;E<=V&&E<=D;){const q=h[E],J=p[E]=x?gt(p[E]):Qe(p[E]);if(vn(q,J))w(q,J,y,null,b,C,I,R,x);else break;E++}for(;E<=V&&E<=D;){const q=h[V],J=p[D]=x?gt(p[D]):Qe(p[D]);if(vn(q,J))w(q,J,y,null,b,C,I,R,x);else break;V--,D--}if(E>V){if(E<=D){const q=D+1,J=q<j?p[q].el:S;for(;E<=D;)w(null,p[E]=x?gt(p[E]):Qe(p[E]),y,J,b,C,I,R,x),E++}}else if(E>D)for(;E<=V;)he(h[E],b,C,!0),E++;else{const q=E,J=E,ne=new Map;for(E=J;E<=D;E++){const Ie=p[E]=x?gt(p[E]):Qe(p[E]);Ie.key!=null&&ne.set(Ie.key,E)}let ce,pe=0;const Ne=D-J+1;let Wt=!1,Eo=0;const mn=new Array(Ne);for(E=0;E<Ne;E++)mn[E]=0;for(E=q;E<=V;E++){const Ie=h[E];if(pe>=Ne){he(Ie,b,C,!0);continue}let Ge;if(Ie.key!=null)Ge=ne.get(Ie.key);else for(ce=J;ce<=D;ce++)if(mn[ce-J]===0&&vn(Ie,p[ce])){Ge=ce;break}Ge===void 0?he(Ie,b,C,!0):(mn[Ge-J]=E+1,Ge>=Eo?Eo=Ge:Wt=!0,w(Ie,p[Ge],y,null,b,C,I,R,x),pe++)}const Ao=Wt?dd(mn):Yt;for(ce=Ao.length-1,E=Ne-1;E>=0;E--){const Ie=J+E,Ge=p[Ie],ko=Ie+1<j?p[Ie+1].el:S;mn[E]===0?w(null,Ge,y,ko,b,C,I,R,x):Wt&&(ce<0||E!==Ao[ce]?ve(Ge,y,ko,2):ce--)}}},ve=(h,p,y,S,b=null)=>{const{el:C,type:I,transition:R,children:x,shapeFlag:E}=h;if(E&6){ve(h.component.subTree,p,y,S);return}if(E&128){h.suspense.move(p,y,S);return}if(E&64){I.move(h,p,y,U);return}if(I===$e){r(C,p,y);for(let V=0;V<x.length;V++)ve(x[V],p,y,S);r(h.anchor,p,y);return}if(I===As){N(h,p,y);return}if(S!==2&&E&1&&R)if(S===0)R.beforeEnter(C),r(C,p,y),Ee(()=>R.enter(C),b);else{const{leave:V,delayLeave:D,afterLeave:q}=R,J=()=>r(C,p,y),ne=()=>{V(C,()=>{J(),q&&q()})};D?D(C,J,ne):ne()}else r(C,p,y)},he=(h,p,y,S=!1,b=!1)=>{const{type:C,props:I,ref:R,children:x,dynamicChildren:E,shapeFlag:j,patchFlag:V,dirs:D}=h;if(R!=null&&Ks(R,null,y,h,!0),j&256){p.ctx.deactivate(h);return}const q=j&1&&D,J=!br(h);let ne;if(J&&(ne=I&&I.onVnodeBeforeUnmount)&&Je(ne,p,h),j&6)or(h.component,y,S);else{if(j&128){h.suspense.unmount(y,S);return}q&&kt(h,null,p,"beforeUnmount"),j&64?h.type.remove(h,p,y,b,U,S):E&&(C!==$e||V>0&&V&64)?ye(E,p,y,!1,!0):(C===$e&&V&384||!b&&j&16)&&ye(x,p,y),S&&qt(h)}(J&&(ne=I&&I.onVnodeUnmounted)||q)&&Ee(()=>{ne&&Je(ne,p,h),q&&kt(h,null,p,"unmounted")},y)},qt=h=>{const{type:p,el:y,anchor:S,transition:b}=h;if(p===$e){Kt(y,S);return}if(p===As){z(h);return}const C=()=>{s(y),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(h.shapeFlag&1&&b&&!b.persisted){const{leave:I,delayLeave:R}=b,x=()=>I(y,C);R?R(h.el,C,x):x()}else C()},Kt=(h,p)=>{let y;for(;h!==p;)y=d(h),s(h),h=y;s(p)},or=(h,p,y)=>{const{bum:S,scope:b,update:C,subTree:I,um:R}=h;S&&_s(S),b.stop(),C&&(C.active=!1,he(I,h,p,y)),R&&Ee(R,p),Ee(()=>{h.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},ye=(h,p,y,S=!1,b=!1,C=0)=>{for(let I=C;I<h.length;I++)he(h[I],p,y,S,b)},_=h=>h.shapeFlag&6?_(h.component.subTree):h.shapeFlag&128?h.suspense.next():d(h.anchor||h.el);let M=!1;const P=(h,p,y)=>{h==null?p._vnode&&he(p._vnode,null,null,!0):w(p._vnode||null,h,p,null,null,null,y),M||(M=!0,Fo(),Tc(),M=!1),p._vnode=h},U={p:w,um:he,m:ve,r:qt,mt:v,mc:oe,pc:B,pbc:ee,n:_,o:e};let Z,ae;return t&&([Z,ae]=t(U)),{render:P,hydrate:Z,createApp:rd(P,Z)}}function Es({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Rt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function fd(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function $c(e,t,n=!1){const r=e.children,s=t.children;if(K(r)&&K(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=gt(s[i]),a.el=o.el),n||$c(o,a)),a.type===es&&(a.el=o.el)}}function dd(e){const t=e.slice(),n=[0];let r,s,i,o,a;const c=e.length;for(r=0;r<c;r++){const u=e[r];if(u!==0){if(s=n[n.length-1],e[s]<u){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<u?i=a+1:o=a;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function Hc(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Hc(t)}const hd=e=>e.__isTeleport,$e=Symbol.for("v-fgt"),es=Symbol.for("v-txt"),Fn=Symbol.for("v-cmt"),As=Symbol.for("v-stc"),En=[];let Be=null;function Vc(e=!1){En.push(Be=e?null:[])}function pd(){En.pop(),Be=En[En.length-1]||null}let Un=1;function zo(e){Un+=e}function gd(e){return e.dynamicChildren=Un>0?Be||Yt:null,pd(),Un>0&&Be&&Be.push(e),e}function Bc(e,t,n,r,s,i){return gd(Xe(e,t,n,r,s,i,!0))}function Ws(e){return e?e.__v_isVNode===!0:!1}function vn(e,t){return e.type===t.type&&e.key===t.key}const ts="__vInternal",qc=({key:e})=>e??null,Sr=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ge(e)||Re(e)||W(e)?{i:Ve,r:e,k:t,f:!!n}:e:null);function Xe(e,t=null,n=null,r=0,s=null,i=e===$e?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&qc(t),ref:t&&Sr(t),scopeId:Yr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ve};return a?(Ui(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=ge(n)?8:16),Un>0&&!o&&Be&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Be.push(c),c}const je=md;function md(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===If)&&(e=Fn),Ws(e)){const a=sn(e,t,!0);return n&&Ui(a,n),Un>0&&!i&&Be&&(a.shapeFlag&6?Be[Be.indexOf(e)]=a:Be.push(a)),a.patchFlag|=-2,a}if(Rd(e)&&(e=e.__vccOpts),t){t=vd(t);let{class:a,style:c}=t;a&&!ge(a)&&(t.class=Ei(a)),fe(c)&&(dc(c)&&!K(c)&&(c=me({},c)),t.style=Oi(c))}const o=ge(e)?1:jf(e)?128:hd(e)?64:fe(e)?4:W(e)?2:0;return Xe(e,t,n,r,s,o,i,!0)}function vd(e){return e?dc(e)||ts in e?me({},e):e:null}function sn(e,t,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=e,a=t?wd(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&qc(a),ref:t&&t.ref?n&&s?K(s)?s.concat(Sr(t)):[s,Sr(t)]:Sr(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==$e?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&sn(e.ssContent),ssFallback:e.ssFallback&&sn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function yd(e=" ",t=0){return je(es,null,e,t)}function Qe(e){return e==null||typeof e=="boolean"?je(Fn):K(e)?je($e,null,e.slice()):typeof e=="object"?gt(e):je(es,null,String(e))}function gt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:sn(e)}function Ui(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(K(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Ui(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(ts in t)?t._ctx=Ve:s===3&&Ve&&(Ve.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else W(t)?(t={default:t,_ctx:Ve},n=32):(t=String(t),r&64?(n=16,t=[yd(t)]):n=8);e.children=t,e.shapeFlag|=n}function wd(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=Ei([t.class,r.class]));else if(s==="style")t.style=Oi([t.style,r.style]);else if(Br(s)){const i=t[s],o=r[s];o&&i!==o&&!(K(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function Je(e,t,n,r=null){Ke(e,t,7,[n,r])}const bd=jc();let _d=0;function Sd(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||bd,i={uid:_d++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Wl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fc(r,s),emitsOptions:Ec(r,s),emit:null,emitted:null,propsDefaults:ue,inheritAttrs:r.inheritAttrs,ctx:ue,data:ue,props:ue,attrs:ue,slots:ue,refs:ue,setupState:ue,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Of.bind(null,i),e.ce&&e.ce(i),i}let be=null,Ur,zs;{const e=Qa(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Ur=t("__VUE_INSTANCE_SETTERS__",n=>be=n),zs=t("__VUE_SSR_SETTERS__",n=>ns=n)}const Kn=e=>{const t=be;return Ur(e),e.scope.on(),()=>{e.scope.off(),Ur(t)}},Go=()=>{be&&be.scope.off(),Ur(null)};function Kc(e){return e.vnode.shapeFlag&4}let ns=!1;function Td(e,t=!1){t&&zs(t);const{props:n,children:r}=e.vnode,s=Kc(e);sd(e,n,s,t),ad(e,r);const i=s?Od(e,t):void 0;return t&&zs(!1),i}function Od(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=hc(new Proxy(e.ctx,Qf));const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?Ad(e):null,i=Kn(e);Ht();const o=bt(r,e,0,[e.props,s]);if(Vt(),i(),za(o)){if(o.then(Go,Go),t)return o.then(a=>{Jo(e,a,t)}).catch(a=>{Jr(a,e,0)});e.asyncDep=o}else Jo(e,o,t)}else Wc(e,t)}function Jo(e,t,n){W(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:fe(t)&&(e.setupState=wc(t)),Wc(e,n)}let Qo;function Wc(e,t,n){const r=e.type;if(!e.render){if(!t&&Qo&&!r.render){const s=r.template||Li(e).template;if(s){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=r,u=me(me({isCustomElement:i,delimiters:a},o),c);r.render=Qo(s,u)}}e.render=r.render||Fe}{const s=Kn(e);Ht();try{Yf(e)}finally{Vt(),s()}}}function Ed(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return ke(e,"get","$attrs"),t[n]}}))}function Ad(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Ed(e)},slots:e.slots,emit:e.emit,expose:t}}function Ni(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(wc(hc(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in On)return On[n](e)},has(t,n){return n in t||n in On}}))}function kd(e,t=!0){return W(e)?e.displayName||e.name:e.name||t&&e.__name}function Rd(e){return W(e)&&"__vccOpts"in e}const He=(e,t)=>gf(e,t,ns);function rs(e,t,n){const r=arguments.length;return r===2?fe(t)&&!K(t)?Ws(t)?je(e,null,[t]):je(e,t):je(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ws(n)&&(n=[n]),je(e,t,n))}const Cd="3.4.13";/**
* @vue/runtime-dom v3.4.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const xd="http://www.w3.org/2000/svg",Pd="http://www.w3.org/1998/Math/MathML",mt=typeof document<"u"?document:null,Yo=mt&&mt.createElement("template"),Id={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?mt.createElementNS(xd,e):t==="mathml"?mt.createElementNS(Pd,e):mt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>mt.createTextNode(e),createComment:e=>mt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>mt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Yo.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const a=Yo.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Md=Symbol("_vtc");function jd(e,t,n){const r=e[Md];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Ld=Symbol("_vod"),Fd=Symbol("");function Ud(e,t,n){const r=e.style,s=r.display,i=ge(n);if(n&&!i){if(t&&!ge(t))for(const o in t)n[o]==null&&Gs(r,o,"");for(const o in n)Gs(r,o,n[o])}else if(i){if(t!==n){const o=r[Fd];o&&(n+=";"+o),r.cssText=n}}else t&&e.removeAttribute("style");Ld in e&&(r.display=s)}const Xo=/\s*!important$/;function Gs(e,t,n){if(K(n))n.forEach(r=>Gs(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Nd(e,t);Xo.test(n)?e.setProperty(hn(r),n.replace(Xo,""),"important"):e[r]=n}}const Zo=["Webkit","Moz","ms"],ks={};function Nd(e,t){const n=ks[t];if(n)return n;let r=et(t);if(r!=="filter"&&r in e)return ks[t]=r;r=Wr(r);for(let s=0;s<Zo.length;s++){const i=Zo[s]+r;if(i in e)return ks[t]=i}return t}const ea="http://www.w3.org/1999/xlink";function Dd(e,t,n,r,s){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ea,t.slice(6,t.length)):e.setAttributeNS(ea,t,n);else{const i=Kl(t);n==null||i&&!Ya(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function $d(e,t,n,r,s,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,s,i),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){e._value=n;const u=a==="OPTION"?e.getAttribute("value"):e.value,l=n??"";u!==l&&(e.value=l),n==null&&e.removeAttribute(t);return}let c=!1;if(n===""||n==null){const u=typeof e[t];u==="boolean"?n=Ya(n):n==null&&u==="string"?(n="",c=!0):u==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function Hd(e,t,n,r){e.addEventListener(t,n,r)}function Vd(e,t,n,r){e.removeEventListener(t,n,r)}const ta=Symbol("_vei");function Bd(e,t,n,r,s=null){const i=e[ta]||(e[ta]={}),o=i[t];if(r&&o)o.value=r;else{const[a,c]=qd(t);if(r){const u=i[t]=zd(r,s);Hd(e,a,u,c)}else o&&(Vd(e,a,o,c),i[t]=void 0)}}const na=/(?:Once|Passive|Capture)$/;function qd(e){let t;if(na.test(e)){t={};let r;for(;r=e.match(na);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):hn(e.slice(2)),t]}let Rs=0;const Kd=Promise.resolve(),Wd=()=>Rs||(Kd.then(()=>Rs=0),Rs=Date.now());function zd(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ke(Gd(r,n.value),t,5,[r])};return n.value=e,n.attached=Wd(),n}function Gd(e,t){if(K(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const ra=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Jd=(e,t,n,r,s,i,o,a,c)=>{const u=s==="svg";t==="class"?jd(e,r,u):t==="style"?Ud(e,n,r):Br(t)?_i(t)||Bd(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Qd(e,t,r,u))?$d(e,t,r,i,o,a,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Dd(e,t,r,u))};function Qd(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&ra(t)&&W(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ra(t)&&ge(n)?!1:t in e}const Yd=me({patchProp:Jd},Id);let sa;function Xd(){return sa||(sa=ud(Yd))}const Zd=(...e)=>{const t=Xd().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=th(r);if(!s)return;const i=t._component;!W(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,eh(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function eh(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function th(e){return ge(e)?document.querySelector(e):e}const nh="/my-test-app/vite.svg",rh="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='37.07'%20height='36'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20198'%3e%3cpath%20fill='%2341B883'%20d='M204.8%200H256L128%20220.8L0%200h97.92L128%2051.2L157.44%200h47.36Z'%3e%3c/path%3e%3cpath%20fill='%2341B883'%20d='m0%200l128%20220.8L256%200h-51.2L128%20132.48L50.56%200H0Z'%3e%3c/path%3e%3cpath%20fill='%2335495E'%20d='M50.56%200L128%20133.12L204.8%200h-47.36L128%2051.2L97.92%200H50.56Z'%3e%3c/path%3e%3c/svg%3e";/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const zt=typeof window<"u";function sh(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const te=Object.assign;function Cs(e,t){const n={};for(const r in t){const s=t[r];n[r]=We(s)?s.map(e):e(s)}return n}const An=()=>{},We=Array.isArray,ih=/\/$/,oh=e=>e.replace(ih,"");function xs(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,a>-1?a:t.length),s=e(i)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=lh(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function ah(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ia(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function ch(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&on(t.matched[r],n.matched[s])&&zc(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function on(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function zc(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!uh(e[n],t[n]))return!1;return!0}function uh(e,t){return We(e)?oa(e,t):We(t)?oa(t,e):e===t}function oa(e,t){return We(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function lh(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Nn;(function(e){e.pop="pop",e.push="push"})(Nn||(Nn={}));var kn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(kn||(kn={}));function fh(e){if(!e)if(zt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),oh(e)}const dh=/^[^#]+#/;function hh(e,t){return e.replace(dh,"#")+t}function ph(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const ss=()=>({left:window.pageXOffset,top:window.pageYOffset});function gh(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=ph(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function aa(e,t){return(history.state?history.state.position-t:-1)+e}const Js=new Map;function mh(e,t){Js.set(e,t)}function vh(e){const t=Js.get(e);return Js.delete(e),t}let yh=()=>location.protocol+"//"+location.host;function Gc(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let a=s.includes(e.slice(i))?e.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),ia(c,"")}return ia(n,e)+r+s}function wh(e,t,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const g=Gc(e,location),m=n.value,w=t.value;let k=0;if(d){if(n.value=g,t.value=d,o&&o===m){o=null;return}k=w?d.position-w.position:0}else r(g);s.forEach(O=>{O(n.value,m,{delta:k,type:Nn.pop,direction:k?k>0?kn.forward:kn.back:kn.unknown})})};function c(){o=n.value}function u(d){s.push(d);const g=()=>{const m=s.indexOf(d);m>-1&&s.splice(m,1)};return i.push(g),g}function l(){const{history:d}=window;d.state&&d.replaceState(te({},d.state,{scroll:ss()}),"")}function f(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l,{passive:!0}),{pauseListeners:c,listen:u,destroy:f}}function ca(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?ss():null}}function bh(e){const{history:t,location:n}=window,r={value:Gc(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const f=e.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:yh()+e+c;try{t[l?"replaceState":"pushState"](u,"",d),s.value=u}catch(g){console.error(g),n[l?"replace":"assign"](d)}}function o(c,u){const l=te({},t.state,ca(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,l,!0),r.value=c}function a(c,u){const l=te({},s.value,t.state,{forward:c,scroll:ss()});i(l.current,l,!0);const f=te({},ca(r.value,c,null),{position:l.position+1},u);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function _h(e){e=fh(e);const t=bh(e),n=wh(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=te({location:"",base:e,go:r,createHref:hh.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Sh(e){return typeof e=="string"||e&&typeof e=="object"}function Jc(e){return typeof e=="string"||typeof e=="symbol"}const ht={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Qc=Symbol("");var ua;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ua||(ua={}));function an(e,t){return te(new Error,{type:e,[Qc]:!0},t)}function nt(e,t){return e instanceof Error&&Qc in e&&(t==null||!!(e.type&t))}const la="[^/]+?",Th={sensitive:!1,strict:!1,start:!0,end:!0},Oh=/[.+*?^${}()[\]/\\]/g;function Eh(e,t){const n=te({},Th,t),r=[];let s=n.start?"^":"";const i=[];for(const u of e){const l=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let f=0;f<u.length;f++){const d=u[f];let g=40+(n.sensitive?.25:0);if(d.type===0)f||(s+="/"),s+=d.value.replace(Oh,"\\$&"),g+=40;else if(d.type===1){const{value:m,repeatable:w,optional:k,regexp:O}=d;i.push({name:m,repeatable:w,optional:k});const L=O||la;if(L!==la){g+=10;try{new RegExp(`(${L})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${m}" (${L}): `+z.message)}}let N=w?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;f||(N=k&&u.length<2?`(?:/${N})`:"/"+N),k&&(N+="?"),s+=N,g+=20,k&&(g+=-8),w&&(g+=-20),L===".*"&&(g+=-50)}l.push(g)}r.push(l)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const l=u.match(o),f={};if(!l)return null;for(let d=1;d<l.length;d++){const g=l[d]||"",m=i[d-1];f[m.name]=g&&m.repeatable?g.split("/"):g}return f}function c(u){let l="",f=!1;for(const d of e){(!f||!l.endsWith("/"))&&(l+="/"),f=!1;for(const g of d)if(g.type===0)l+=g.value;else if(g.type===1){const{value:m,repeatable:w,optional:k}=g,O=m in u?u[m]:"";if(We(O)&&!w)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const L=We(O)?O.join("/"):O;if(!L)if(k)d.length<2&&(l.endsWith("/")?l=l.slice(0,-1):f=!0);else throw new Error(`Missing required param "${m}"`);l+=L}}return l||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Ah(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function kh(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=Ah(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(fa(r))return 1;if(fa(s))return-1}return s.length-r.length}function fa(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Rh={type:0,value:""},Ch=/[a-zA-Z0-9_]/;function xh(e){if(!e)return[[]];if(e==="/")return[[Rh]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,u="",l="";function f(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&f(),o()):c===":"?(f(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:Ch.test(c)?d():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),f(),o(),s}function Ph(e,t,n){const r=Eh(xh(e.path),n),s=te(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Ih(e,t){const n=[],r=new Map;t=pa({strict:!1,end:!0,sensitive:!1},t);function s(l){return r.get(l)}function i(l,f,d){const g=!d,m=Mh(l);m.aliasOf=d&&d.record;const w=pa(t,l),k=[m];if("alias"in l){const N=typeof l.alias=="string"?[l.alias]:l.alias;for(const z of N)k.push(te({},m,{components:d?d.record.components:m.components,path:z,aliasOf:d?d.record:m}))}let O,L;for(const N of k){const{path:z}=N;if(f&&z[0]!=="/"){const Q=f.record.path,$=Q[Q.length-1]==="/"?"":"/";N.path=f.record.path+(z&&$+z)}if(O=Ph(N,f,w),d?d.alias.push(O):(L=L||O,L!==O&&L.alias.push(O),g&&l.name&&!ha(O)&&o(l.name)),m.children){const Q=m.children;for(let $=0;$<Q.length;$++)i(Q[$],O,d&&d.children[$])}d=d||O,(O.record.components&&Object.keys(O.record.components).length||O.record.name||O.record.redirect)&&c(O)}return L?()=>{o(L)}:An}function o(l){if(Jc(l)){const f=r.get(l);f&&(r.delete(l),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(l);f>-1&&(n.splice(f,1),l.record.name&&r.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let f=0;for(;f<n.length&&kh(l,n[f])>=0&&(l.record.path!==n[f].record.path||!Yc(l,n[f]));)f++;n.splice(f,0,l),l.record.name&&!ha(l)&&r.set(l.record.name,l)}function u(l,f){let d,g={},m,w;if("name"in l&&l.name){if(d=r.get(l.name),!d)throw an(1,{location:l});w=d.record.name,g=te(da(f.params,d.keys.filter(L=>!L.optional).map(L=>L.name)),l.params&&da(l.params,d.keys.map(L=>L.name))),m=d.stringify(g)}else if("path"in l)m=l.path,d=n.find(L=>L.re.test(m)),d&&(g=d.parse(m),w=d.record.name);else{if(d=f.name?r.get(f.name):n.find(L=>L.re.test(f.path)),!d)throw an(1,{location:l,currentLocation:f});w=d.record.name,g=te({},f.params,l.params),m=d.stringify(g)}const k=[];let O=d;for(;O;)k.unshift(O.record),O=O.parent;return{name:w,path:m,params:g,matched:k,meta:Lh(k)}}return e.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function da(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Mh(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:jh(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function jh(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function ha(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Lh(e){return e.reduce((t,n)=>te(t,n.meta),{})}function pa(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Yc(e,t){return t.children.some(n=>n===e||Yc(e,n))}const Xc=/#/g,Fh=/&/g,Uh=/\//g,Nh=/=/g,Dh=/\?/g,Zc=/\+/g,$h=/%5B/g,Hh=/%5D/g,eu=/%5E/g,Vh=/%60/g,tu=/%7B/g,Bh=/%7C/g,nu=/%7D/g,qh=/%20/g;function Di(e){return encodeURI(""+e).replace(Bh,"|").replace($h,"[").replace(Hh,"]")}function Kh(e){return Di(e).replace(tu,"{").replace(nu,"}").replace(eu,"^")}function Qs(e){return Di(e).replace(Zc,"%2B").replace(qh,"+").replace(Xc,"%23").replace(Fh,"%26").replace(Vh,"`").replace(tu,"{").replace(nu,"}").replace(eu,"^")}function Wh(e){return Qs(e).replace(Nh,"%3D")}function zh(e){return Di(e).replace(Xc,"%23").replace(Dh,"%3F")}function Gh(e){return e==null?"":zh(e).replace(Uh,"%2F")}function Nr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Jh(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Zc," "),o=i.indexOf("="),a=Nr(o<0?i:i.slice(0,o)),c=o<0?null:Nr(i.slice(o+1));if(a in t){let u=t[a];We(u)||(u=t[a]=[u]),u.push(c)}else t[a]=c}return t}function ga(e){let t="";for(let n in e){const r=e[n];if(n=Wh(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(We(r)?r.map(i=>i&&Qs(i)):[r&&Qs(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Qh(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=We(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const Yh=Symbol(""),ma=Symbol(""),$i=Symbol(""),ru=Symbol(""),Ys=Symbol("");function yn(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function vt(e,t,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=f=>{f===!1?a(an(4,{from:n,to:t})):f instanceof Error?a(f):Sh(f)?a(an(2,{from:t,to:f})):(i&&r.enterCallbacks[s]===i&&typeof f=="function"&&i.push(f),o())},u=e.call(r&&r.instances[s],t,n,c);let l=Promise.resolve(u);e.length<3&&(l=l.then(c)),l.catch(f=>a(f))})}function Ps(e,t,n,r){const s=[];for(const i of e)for(const o in i.components){let a=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(Xh(a)){const u=(a.__vccOpts||a)[t];u&&s.push(vt(u,n,r,i,o))}else{let c=a();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=sh(u)?u.default:u;i.components[o]=l;const d=(l.__vccOpts||l)[t];return d&&vt(d,n,r,i,o)()}))}}return s}function Xh(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function va(e){const t=it($i),n=it(ru),r=He(()=>t.resolve(Ut(e.to))),s=He(()=>{const{matched:c}=r.value,{length:u}=c,l=c[u-1],f=n.matched;if(!l||!f.length)return-1;const d=f.findIndex(on.bind(null,l));if(d>-1)return d;const g=ya(c[u-2]);return u>1&&ya(l)===g&&f[f.length-1].path!==g?f.findIndex(on.bind(null,c[u-2])):d}),i=He(()=>s.value>-1&&np(n.params,r.value.params)),o=He(()=>s.value>-1&&s.value===n.matched.length-1&&zc(n.params,r.value.params));function a(c={}){return tp(c)?t[Ut(e.replace)?"replace":"push"](Ut(e.to)).catch(An):Promise.resolve()}return{route:r,href:He(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Zh=Xr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:va,setup(e,{slots:t}){const n=Gr(va(e)),{options:r}=it($i),s=He(()=>({[wa(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[wa(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:rs("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),ep=Zh;function tp(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function np(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!We(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function ya(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const wa=(e,t,n)=>e??t??n,rp=Xr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=it(Ys),s=He(()=>e.route||r.value),i=it(ma,0),o=He(()=>{let u=Ut(i);const{matched:l}=s.value;let f;for(;(f=l[u])&&!f.components;)u++;return u}),a=He(()=>s.value.matched[o.value]);_r(ma,He(()=>o.value+1)),_r(Yh,a),_r(Ys,s);const c=mc();return wr(()=>[c.value,a.value,e.name],([u,l,f],[d,g,m])=>{l&&(l.instances[f]=u,g&&g!==l&&u&&u===d&&(l.leaveGuards.size||(l.leaveGuards=g.leaveGuards),l.updateGuards.size||(l.updateGuards=g.updateGuards))),u&&l&&(!g||!on(l,g)||!d)&&(l.enterCallbacks[f]||[]).forEach(w=>w(u))},{flush:"post"}),()=>{const u=s.value,l=e.name,f=a.value,d=f&&f.components[l];if(!d)return ba(n.default,{Component:d,route:u});const g=f.props[l],m=g?g===!0?u.params:typeof g=="function"?g(u):g:null,k=rs(d,te({},m,t,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(f.instances[l]=null)},ref:c}));return ba(n.default,{Component:k,route:u})||k}}});function ba(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const su=rp;function sp(e){const t=Ih(e.routes,e),n=e.parseQuery||Jh,r=e.stringifyQuery||ga,s=e.history,i=yn(),o=yn(),a=yn(),c=vc(ht);let u=ht;zt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Cs.bind(null,_=>""+_),f=Cs.bind(null,Gh),d=Cs.bind(null,Nr);function g(_,M){let P,U;return Jc(_)?(P=t.getRecordMatcher(_),U=M):U=_,t.addRoute(U,P)}function m(_){const M=t.getRecordMatcher(_);M&&t.removeRoute(M)}function w(){return t.getRoutes().map(_=>_.record)}function k(_){return!!t.getRecordMatcher(_)}function O(_,M){if(M=te({},M||c.value),typeof _=="string"){const p=xs(n,_,M.path),y=t.resolve({path:p.path},M),S=s.createHref(p.fullPath);return te(p,y,{params:d(y.params),hash:Nr(p.hash),redirectedFrom:void 0,href:S})}let P;if("path"in _)P=te({},_,{path:xs(n,_.path,M.path).path});else{const p=te({},_.params);for(const y in p)p[y]==null&&delete p[y];P=te({},_,{params:f(p)}),M.params=f(M.params)}const U=t.resolve(P,M),Z=_.hash||"";U.params=l(d(U.params));const ae=ah(r,te({},_,{hash:Kh(Z),path:U.path})),h=s.createHref(ae);return te({fullPath:ae,hash:Z,query:r===ga?Qh(_.query):_.query||{}},U,{redirectedFrom:void 0,href:h})}function L(_){return typeof _=="string"?xs(n,_,c.value.path):te({},_)}function N(_,M){if(u!==_)return an(8,{from:M,to:_})}function z(_){return re(_)}function Q(_){return z(te(L(_),{replace:!0}))}function $(_){const M=_.matched[_.matched.length-1];if(M&&M.redirect){const{redirect:P}=M;let U=typeof P=="function"?P(_):P;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=L(U):{path:U},U.params={}),te({query:_.query,hash:_.hash,params:"path"in U?{}:_.params},U)}}function re(_,M){const P=u=O(_),U=c.value,Z=_.state,ae=_.force,h=_.replace===!0,p=$(P);if(p)return re(te(L(p),{state:typeof p=="object"?te({},Z,p.state):Z,force:ae,replace:h}),M||P);const y=P;y.redirectedFrom=M;let S;return!ae&&ch(r,U,P)&&(S=an(16,{to:y,from:U}),ve(U,U,!0,!1)),(S?Promise.resolve(S):ee(y,U)).catch(b=>nt(b)?nt(b,2)?b:Pe(b):B(b,y,U)).then(b=>{if(b){if(nt(b,2))return re(te({replace:h},L(b.to),{state:typeof b.to=="object"?te({},Z,b.to.state):Z,force:ae}),M||y)}else b=_e(y,U,!0,h,Z);return se(y,U,b),b})}function oe(_,M){const P=N(_,M);return P?Promise.reject(P):Promise.resolve()}function Oe(_){const M=Kt.values().next().value;return M&&typeof M.runWithContext=="function"?M.runWithContext(_):_()}function ee(_,M){let P;const[U,Z,ae]=ip(_,M);P=Ps(U.reverse(),"beforeRouteLeave",_,M);for(const p of U)p.leaveGuards.forEach(y=>{P.push(vt(y,_,M))});const h=oe.bind(null,_,M);return P.push(h),ye(P).then(()=>{P=[];for(const p of i.list())P.push(vt(p,_,M));return P.push(h),ye(P)}).then(()=>{P=Ps(Z,"beforeRouteUpdate",_,M);for(const p of Z)p.updateGuards.forEach(y=>{P.push(vt(y,_,M))});return P.push(h),ye(P)}).then(()=>{P=[];for(const p of ae)if(p.beforeEnter)if(We(p.beforeEnter))for(const y of p.beforeEnter)P.push(vt(y,_,M));else P.push(vt(p.beforeEnter,_,M));return P.push(h),ye(P)}).then(()=>(_.matched.forEach(p=>p.enterCallbacks={}),P=Ps(ae,"beforeRouteEnter",_,M),P.push(h),ye(P))).then(()=>{P=[];for(const p of o.list())P.push(vt(p,_,M));return P.push(h),ye(P)}).catch(p=>nt(p,8)?p:Promise.reject(p))}function se(_,M,P){a.list().forEach(U=>Oe(()=>U(_,M,P)))}function _e(_,M,P,U,Z){const ae=N(_,M);if(ae)return ae;const h=M===ht,p=zt?history.state:{};P&&(U||h?s.replace(_.fullPath,te({scroll:h&&p&&p.scroll},Z)):s.push(_.fullPath,Z)),c.value=_,ve(_,M,P,h),Pe()}let le;function v(){le||(le=s.listen((_,M,P)=>{if(!or.listening)return;const U=O(_),Z=$(U);if(Z){re(te(Z,{replace:!0}),U).catch(An);return}u=U;const ae=c.value;zt&&mh(aa(ae.fullPath,P.delta),ss()),ee(U,ae).catch(h=>nt(h,12)?h:nt(h,2)?(re(h.to,U).then(p=>{nt(p,20)&&!P.delta&&P.type===Nn.pop&&s.go(-1,!1)}).catch(An),Promise.reject()):(P.delta&&s.go(-P.delta,!1),B(h,U,ae))).then(h=>{h=h||_e(U,ae,!1),h&&(P.delta&&!nt(h,8)?s.go(-P.delta,!1):P.type===Nn.pop&&nt(h,20)&&s.go(-1,!1)),se(U,ae,h)}).catch(An)}))}let A=yn(),F=yn(),H;function B(_,M,P){Pe(_);const U=F.list();return U.length?U.forEach(Z=>Z(_,M,P)):console.error(_),Promise.reject(_)}function G(){return H&&c.value!==ht?Promise.resolve():new Promise((_,M)=>{A.add([_,M])})}function Pe(_){return H||(H=!_,v(),A.list().forEach(([M,P])=>_?P(_):M()),A.reset()),_}function ve(_,M,P,U){const{scrollBehavior:Z}=e;if(!zt||!Z)return Promise.resolve();const ae=!P&&vh(aa(_.fullPath,0))||(U||!P)&&history.state&&history.state.scroll||null;return _c().then(()=>Z(_,M,ae)).then(h=>h&&gh(h)).catch(h=>B(h,_,M))}const he=_=>s.go(_);let qt;const Kt=new Set,or={currentRoute:c,listening:!0,addRoute:g,removeRoute:m,hasRoute:k,getRoutes:w,resolve:O,options:e,push:z,replace:Q,go:he,back:()=>he(-1),forward:()=>he(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:F.add,isReady:G,install(_){const M=this;_.component("RouterLink",ep),_.component("RouterView",su),_.config.globalProperties.$router=M,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>Ut(c)}),zt&&!qt&&c.value===ht&&(qt=!0,z(s.location).catch(Z=>{}));const P={};for(const Z in ht)Object.defineProperty(P,Z,{get:()=>c.value[Z],enumerable:!0});_.provide($i,M),_.provide(ru,lc(P)),_.provide(Ys,c);const U=_.unmount;Kt.add(_),_.unmount=function(){Kt.delete(_),Kt.size<1&&(u=ht,le&&le(),le=null,c.value=ht,qt=!1,H=!1),U()}}};function ye(_){return _.reduce((M,P)=>M.then(()=>Oe(P)),Promise.resolve())}return or}function ip(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(u=>on(u,a))?r.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(u=>on(u,c))||s.push(c))}return[n,r,s]}const op=Xe("div",null,[Xe("h3",null,"This is from ViewComponent")],-1),ap=Xr({__name:"View",setup(e){return(t,n)=>(Vc(),Bc($e,null,[op,Xe("div",null,[je(Ut(su))])],64))}}),cp=e=>(Ef("data-v-b646ea98"),e=e(),Af(),e),up=cp(()=>Xe("div",null,[Xe("a",{href:"https://vitejs.dev",target:"_blank"},[Xe("img",{src:nh,class:"logo",alt:"Vite logo"})]),Xe("a",{href:"https://vuejs.org/",target:"_blank"},[Xe("img",{src:rh,class:"logo vue",alt:"Vue logo"})])],-1)),lp=Xr({__name:"App",setup(e){return(t,n)=>(Vc(),Bc($e,null,[up,je(ap)],64))}}),fp=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},dp=fp(lp,[["__scopeId","data-v-b646ea98"]]),hp="modulepreload",pp=function(e){return"/my-test-app/"+e},_a={},gp=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link");s=Promise.all(n.map(o=>{if(o=pp(o),o in _a)return;_a[o]=!0;const a=o.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(!!r)for(let f=i.length-1;f>=0;f--){const d=i[f];if(d.href===o&&(!a||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${c}`))return;const l=document.createElement("link");if(l.rel=a?"stylesheet":hp,a||(l.as="script",l.crossOrigin=""),l.href=o,document.head.appendChild(l),a)return new Promise((f,d)=>{l.addEventListener("load",f),l.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})}))}return s.then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */var xt;(function(e){e.SUCCESS="SUCCESS",e.PENDING="PENDING",e.FAILURE="FAILURE",e.TERMINAL="TERMINAL",e.CANCELED="CANCELED"})(xt||(xt={}));var rt;(function(e){e.OKTA_PASSWORD="okta_password",e.OKTA_EMAIL="okta_email",e.PHONE_NUMBER="phone_number",e.GOOGLE_AUTHENTICATOR="google_otp",e.SECURITY_QUESTION="security_question",e.OKTA_VERIFY="okta_verify",e.WEBAUTHN="webauthn"})(rt||(rt={}));var yt;(function(e){e.PASSWORD_RECOVERY="recover-password",e.REGISTRATION="enroll-profile",e.SOCIAL_IDP="redirect-idp",e.ACCOUNT_UNLOCK="unlock-account"})(yt||(yt={}));function Dr(e){return e&&(e.key||e.id)}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function mp(){return typeof window<"u"?window.console:typeof console<"u"?console:void 0}function _n(){var e=mp();return e&&e.log?e:{log:function(){},warn:function(){},group:function(){},groupEnd:function(){}}}function tt(e){_n().warn("[okta-auth-sdk] WARN: "+e)}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Ue(e){var t={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=e[n];r!=null&&(t[n]=r)}return t}function Le(e){if(e){var t=JSON.stringify(e);if(t)return JSON.parse(t)}return e}function Rn(e,...t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)==-1&&(n[r]=e[r]);return Le(n)}function Xs(e,t){for(var n=e.length;n--;){var r=e[n],s=!0;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)&&r[i]!==t[i]){s=!1;break}if(s)return r}}function Zs(e,t,n){if(!(!e||!e._links)){var r=Le(e._links[t]);if(r&&r.name&&n){if(r.name===n)return r}else return r}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function iu(e){for(var t="abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",n="",r=0,s=t.length;r<e;++r)n+=t[Math.floor(Math.random()*s)];return n}function Sa(e){return new Promise(function(t){setTimeout(t,e)})}function vp(e,t){const n=e.split(t);return[n[0],n.splice(1,n.length).join(t)]}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function is(e){return/^[a-z][a-z0-9+.-]*:/i.test(e)}function yp(e="",t){return is(e)?e:(t=Me(t),e[0]==="/"?`${t}${e}`:`${t}/${e}`)}function wp(e="",t){return is(e)&&(e=e.substring(t.length)),e[0]==="/"?e:`/${e}`}function Tt(e){var t=[];if(e!==null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&e[n]!==void 0&&e[n]!==null&&t.push(n+"="+encodeURIComponent(e[n]));return t.length?"?"+t.join("&"):""}function Me(e){if(e){var t=e.replace(/^\s+|\s+$/gm,"");return t=t.replace(/\/+$/,""),t}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class Wn extends Error{constructor(t){super(t),Object.setPrototypeOf(this,new.target.prototype)}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class T extends Wn{constructor(t,n){super(t),this.name="AuthSdkError",this.errorCode="INTERNAL",this.errorSummary=t,this.errorLink="INTERNAL",this.errorId="INTERNAL",this.errorCauses=[],n&&(this.xhr=n)}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function ou(){return iu(64)}function bp(){return iu(64)}function Hi(e,t={}){return Me(t.issuer)||e.options.issuer}function au(e,t={}){const n=Hi(e,t);return n.indexOf("/oauth2")>0?n:n+"/oauth2"}function _p(e,t={}){return Hi(e,t).split("/oauth2")[0]}function Ot(e,t){if(arguments.length>2)throw new T('As of version 3.0, "getOAuthUrls" takes only a single set of options');t=t||{};var n=Me(t.authorizeUrl)||e.options.authorizeUrl,r=Hi(e,t),s=Me(t.userinfoUrl)||e.options.userinfoUrl,i=Me(t.tokenUrl)||e.options.tokenUrl,o=Me(t.logoutUrl)||e.options.logoutUrl,a=Me(t.revokeUrl)||e.options.revokeUrl,c=au(e,t);return n=n||c+"/v1/authorize",s=s||c+"/v1/userinfo",i=i||c+"/v1/token",a=a||c+"/v1/revoke",o=o||c+"/v1/logout",{issuer:r,authorizeUrl:n,userinfoUrl:s,tokenUrl:i,revokeUrl:a,logoutUrl:o}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function cu(e,t){const n=e.options.issuer,r=Ot(e,t),s={issuer:n,urls:r,clientId:t.clientId,redirectUri:t.redirectUri,responseType:t.responseType,responseMode:t.responseMode,scopes:t.scopes,state:t.state,nonce:t.nonce,ignoreSignature:t.ignoreSignature,acrValues:t.acrValues};return t.pkce===!1?s:Object.assign(Object.assign({},s),{codeVerifier:t.codeVerifier,codeChallengeMethod:t.codeChallengeMethod,codeChallenge:t.codeChallenge})}var Sp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Vi(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function uu(){}uu.prototype={on:function(e,t,n){var r=this.e||(this.e={});return(r[e]||(r[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var r=this;function s(){r.off(e,s),t.apply(n,arguments)}return s._=t,this.on(e,s,n)},emit:function(e){var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),r=0,s=n.length;for(r;r<s;r++)n[r].fn.apply(n[r].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),r=n[e],s=[];if(r&&t)for(var i=0,o=r.length;i<o;i++)r[i].fn!==t&&r[i].fn._!==t&&s.push(r[i]);return s.length?n[e]=s:delete n[e],this}};var Tp=uu;const Op=Vi(Tp);/*! js-cookie v3.0.5 | MIT */function hr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}var Ep={read:function(e){return e[0]==='"'&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function ei(e,t){function n(s,i,o){if(!(typeof document>"u")){o=hr({},t,o),typeof o.expires=="number"&&(o.expires=new Date(Date.now()+o.expires*864e5)),o.expires&&(o.expires=o.expires.toUTCString()),s=encodeURIComponent(s).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var a="";for(var c in o)o[c]&&(a+="; "+c,o[c]!==!0&&(a+="="+o[c].split(";")[0]));return document.cookie=s+"="+e.write(i,s)+a}}function r(s){if(!(typeof document>"u"||arguments.length&&!s)){for(var i=document.cookie?document.cookie.split("; "):[],o={},a=0;a<i.length;a++){var c=i[a].split("="),u=c.slice(1).join("=");try{var l=decodeURIComponent(c[0]);if(o[l]=e.read(u,l),s===l)break}catch{}}return s?o[s]:o}}return Object.create({set:n,get:r,remove:function(s,i){n(s,"",hr({},i,{expires:-1}))},withAttributes:function(s){return ei(this.converter,hr({},this.attributes,s))},withConverter:function(s){return ei(hr({},this.converter,s),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(e)}})}var pr=ei(Ep,{path:"/"}),ti={exports:{}};(function(e,t){var n=typeof self<"u"?self:Sp,r=function(){function i(){this.fetch=!1,this.DOMException=n.DOMException}return i.prototype=n,new i}();(function(i){(function(o){var a={searchParams:"URLSearchParams"in i,iterable:"Symbol"in i&&"iterator"in Symbol,blob:"FileReader"in i&&"Blob"in i&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in i,arrayBuffer:"ArrayBuffer"in i};function c(v){return v&&DataView.prototype.isPrototypeOf(v)}if(a.arrayBuffer)var u=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],l=ArrayBuffer.isView||function(v){return v&&u.indexOf(Object.prototype.toString.call(v))>-1};function f(v){if(typeof v!="string"&&(v=String(v)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(v))throw new TypeError("Invalid character in header field name");return v.toLowerCase()}function d(v){return typeof v!="string"&&(v=String(v)),v}function g(v){var A={next:function(){var F=v.shift();return{done:F===void 0,value:F}}};return a.iterable&&(A[Symbol.iterator]=function(){return A}),A}function m(v){this.map={},v instanceof m?v.forEach(function(A,F){this.append(F,A)},this):Array.isArray(v)?v.forEach(function(A){this.append(A[0],A[1])},this):v&&Object.getOwnPropertyNames(v).forEach(function(A){this.append(A,v[A])},this)}m.prototype.append=function(v,A){v=f(v),A=d(A);var F=this.map[v];this.map[v]=F?F+", "+A:A},m.prototype.delete=function(v){delete this.map[f(v)]},m.prototype.get=function(v){return v=f(v),this.has(v)?this.map[v]:null},m.prototype.has=function(v){return this.map.hasOwnProperty(f(v))},m.prototype.set=function(v,A){this.map[f(v)]=d(A)},m.prototype.forEach=function(v,A){for(var F in this.map)this.map.hasOwnProperty(F)&&v.call(A,this.map[F],F,this)},m.prototype.keys=function(){var v=[];return this.forEach(function(A,F){v.push(F)}),g(v)},m.prototype.values=function(){var v=[];return this.forEach(function(A){v.push(A)}),g(v)},m.prototype.entries=function(){var v=[];return this.forEach(function(A,F){v.push([F,A])}),g(v)},a.iterable&&(m.prototype[Symbol.iterator]=m.prototype.entries);function w(v){if(v.bodyUsed)return Promise.reject(new TypeError("Already read"));v.bodyUsed=!0}function k(v){return new Promise(function(A,F){v.onload=function(){A(v.result)},v.onerror=function(){F(v.error)}})}function O(v){var A=new FileReader,F=k(A);return A.readAsArrayBuffer(v),F}function L(v){var A=new FileReader,F=k(A);return A.readAsText(v),F}function N(v){for(var A=new Uint8Array(v),F=new Array(A.length),H=0;H<A.length;H++)F[H]=String.fromCharCode(A[H]);return F.join("")}function z(v){if(v.slice)return v.slice(0);var A=new Uint8Array(v.byteLength);return A.set(new Uint8Array(v)),A.buffer}function Q(){return this.bodyUsed=!1,this._initBody=function(v){this._bodyInit=v,v?typeof v=="string"?this._bodyText=v:a.blob&&Blob.prototype.isPrototypeOf(v)?this._bodyBlob=v:a.formData&&FormData.prototype.isPrototypeOf(v)?this._bodyFormData=v:a.searchParams&&URLSearchParams.prototype.isPrototypeOf(v)?this._bodyText=v.toString():a.arrayBuffer&&a.blob&&c(v)?(this._bodyArrayBuffer=z(v.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):a.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(v)||l(v))?this._bodyArrayBuffer=z(v):this._bodyText=v=Object.prototype.toString.call(v):this._bodyText="",this.headers.get("content-type")||(typeof v=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):a.searchParams&&URLSearchParams.prototype.isPrototypeOf(v)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},a.blob&&(this.blob=function(){var v=w(this);if(v)return v;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?w(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(O)}),this.text=function(){var v=w(this);if(v)return v;if(this._bodyBlob)return L(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(N(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},a.formData&&(this.formData=function(){return this.text().then(Oe)}),this.json=function(){return this.text().then(JSON.parse)},this}var $=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function re(v){var A=v.toUpperCase();return $.indexOf(A)>-1?A:v}function oe(v,A){A=A||{};var F=A.body;if(v instanceof oe){if(v.bodyUsed)throw new TypeError("Already read");this.url=v.url,this.credentials=v.credentials,A.headers||(this.headers=new m(v.headers)),this.method=v.method,this.mode=v.mode,this.signal=v.signal,!F&&v._bodyInit!=null&&(F=v._bodyInit,v.bodyUsed=!0)}else this.url=String(v);if(this.credentials=A.credentials||this.credentials||"same-origin",(A.headers||!this.headers)&&(this.headers=new m(A.headers)),this.method=re(A.method||this.method||"GET"),this.mode=A.mode||this.mode||null,this.signal=A.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&F)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(F)}oe.prototype.clone=function(){return new oe(this,{body:this._bodyInit})};function Oe(v){var A=new FormData;return v.trim().split("&").forEach(function(F){if(F){var H=F.split("="),B=H.shift().replace(/\+/g," "),G=H.join("=").replace(/\+/g," ");A.append(decodeURIComponent(B),decodeURIComponent(G))}}),A}function ee(v){var A=new m,F=v.replace(/\r?\n[\t ]+/g," ");return F.split(/\r?\n/).forEach(function(H){var B=H.split(":"),G=B.shift().trim();if(G){var Pe=B.join(":").trim();A.append(G,Pe)}}),A}Q.call(oe.prototype);function se(v,A){A||(A={}),this.type="default",this.status=A.status===void 0?200:A.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in A?A.statusText:"OK",this.headers=new m(A.headers),this.url=A.url||"",this._initBody(v)}Q.call(se.prototype),se.prototype.clone=function(){return new se(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new m(this.headers),url:this.url})},se.error=function(){var v=new se(null,{status:0,statusText:""});return v.type="error",v};var _e=[301,302,303,307,308];se.redirect=function(v,A){if(_e.indexOf(A)===-1)throw new RangeError("Invalid status code");return new se(null,{status:A,headers:{location:v}})},o.DOMException=i.DOMException;try{new o.DOMException}catch{o.DOMException=function(A,F){this.message=A,this.name=F;var H=Error(A);this.stack=H.stack},o.DOMException.prototype=Object.create(Error.prototype),o.DOMException.prototype.constructor=o.DOMException}function le(v,A){return new Promise(function(F,H){var B=new oe(v,A);if(B.signal&&B.signal.aborted)return H(new o.DOMException("Aborted","AbortError"));var G=new XMLHttpRequest;function Pe(){G.abort()}G.onload=function(){var ve={status:G.status,statusText:G.statusText,headers:ee(G.getAllResponseHeaders()||"")};ve.url="responseURL"in G?G.responseURL:ve.headers.get("X-Request-URL");var he="response"in G?G.response:G.responseText;F(new se(he,ve))},G.onerror=function(){H(new TypeError("Network request failed"))},G.ontimeout=function(){H(new TypeError("Network request failed"))},G.onabort=function(){H(new o.DOMException("Aborted","AbortError"))},G.open(B.method,B.url,!0),B.credentials==="include"?G.withCredentials=!0:B.credentials==="omit"&&(G.withCredentials=!1),"responseType"in G&&a.blob&&(G.responseType="blob"),B.headers.forEach(function(ve,he){G.setRequestHeader(he,ve)}),B.signal&&(B.signal.addEventListener("abort",Pe),G.onreadystatechange=function(){G.readyState===4&&B.signal.removeEventListener("abort",Pe)}),G.send(typeof B._bodyInit>"u"?null:B._bodyInit)})}return le.polyfill=!0,i.fetch||(i.fetch=le,i.Headers=m,i.Request=oe,i.Response=se),o.Headers=m,o.Request=oe,o.Response=se,o.fetch=le,Object.defineProperty(o,"__esModule",{value:!0}),o})({})})(r),r.fetch.ponyfill=!0,delete r.fetch.polyfill;var s=r;t=s.fetch,t.default=s.fetch,t.fetch=s.fetch,t.Headers=s.Headers,t.Request=s.Request,t.Response=s.Response,e.exports=t})(ti,ti.exports);var Ap=ti.exports;const kp=Vi(Ap);/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */var ni;(function(e){e.ACCESS="accessToken",e.ID="idToken",e.REFRESH="refreshToken"})(ni||(ni={}));function ot(e){return e&&e.accessToken}function _t(e){return e&&e.idToken}function Pt(e){return e&&e.refreshToken}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */async function Bi(e,t={}){const n=await e.token.prepareTokenParams(t),r=cu(e,n);let{flow:s="default",withCredentials:i=!0,activationToken:o=void 0,recoveryToken:a=void 0,maxAge:c=void 0,acrValues:u=void 0}=Object.assign(Object.assign({},e.options),t);return Object.assign(Object.assign({},r),{flow:s,withCredentials:i,activationToken:o,recoveryToken:a,maxAge:c,acrValues:u})}function lu(e,t){const n=Et(e,t);return!!(n!=null&&n.interactionHandle)}function Et(e,t){t=Ue(t),t=Object.assign(Object.assign({},e.options),t);let n;try{n=e.transactionManager.load(t)}catch{}if(n){if(fu(n,t))return n;tt("Saved transaction meta does not match the current configuration. This may indicate that two apps are sharing a storage key.")}}async function Rp(e,t){t=Ue(t),t=Object.assign(Object.assign({},e.options),t);const n=Et(e,t);return n||Bi(e,t)}function qi(e,t){e.transactionManager.save(t,{muteWarning:!0})}function Cp(e){e.transactionManager.clear()}function fu(e,t={}){if(Pp(e,t,["issuer","clientId","redirectUri","state","codeChallenge","codeChallengeMethod","activationToken","recoveryToken"])===!1)return!1;const{flow:r}=t;return xp(e,r)!==!1}function xp(e,t){return!(t&&t!=="default"&&t!=="proceed"&&t!==e.flow)}function Pp(e,t,n){return!n.some(s=>{const i=t[s];if(i&&i!==e[s])return!0})}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function cn(e){return Object.prototype.toString.call(e)==="[object String]"}function du(e){return Object.prototype.toString.call(e)==="[object Object]"}function Ip(e){return Object.prototype.toString.call(e)==="[object Number]"}function Ta(e){return!!e&&{}.toString.call(e)==="[object Function]"}function Mp(e){return e&&e.finally&&typeof e.finally=="function"}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const Cn="oktaStateToken",hu=500,pu=300,gu=86400,Ki="okta-token-storage",mu="okta-cache-storage",jp="okta-pkce-storage",vu="okta-transaction-storage",yu="okta-shared-transaction-storage",wu="okta-original-uri-storage",bu="okta-idx-response-storage",Lp="accessToken",Fp="idToken",ri="refreshToken",Tr="referrerPath",si=43,_u=128,Wi="S256",zi="1.0.0",Oa=Object.freeze(Object.defineProperty({__proto__:null,ACCESS_TOKEN_STORAGE_KEY:Lp,CACHE_STORAGE_NAME:mu,DEFAULT_CACHE_DURATION:gu,DEFAULT_CODE_CHALLENGE_METHOD:Wi,DEFAULT_MAX_CLOCK_SKEW:pu,DEFAULT_POLLING_DELAY:hu,IDX_API_VERSION:zi,IDX_RESPONSE_STORAGE_NAME:bu,ID_TOKEN_STORAGE_KEY:Fp,MAX_VERIFIER_LENGTH:_u,MIN_VERIFIER_LENGTH:si,ORIGINAL_URI_STORAGE_NAME:wu,PKCE_STORAGE_NAME:jp,REFERRER_PATH_STORAGE_KEY:Tr,REFRESH_TOKEN_STORAGE_KEY:ri,SHARED_TRANSACTION_STORAGE_NAME:yu,STATE_TOKEN_KEY_NAME:Cn,TOKEN_STORAGE_NAME:Ki,TRANSACTION_STORAGE_NAME:vu},Symbol.toStringTag,{value:"Module"}));/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class $r extends Wn{constructor(t,n,r){const s=t.errorSummary;super(s),this.name="AuthApiError",this.errorSummary=t.errorSummary,this.errorCode=t.errorCode,this.errorLink=t.errorLink,this.errorId=t.errorId,this.errorCauses=t.errorCauses,n&&(this.xhr=n),r&&(this.meta=r)}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class zn extends Wn{constructor(t,n){super(n),this.name="OAuthError",this.errorCode=t,this.errorSummary=n,this.error=t,this.error_description=n}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const Up=e=>{if(!e)throw new T("Missing header string");return e.split(",").map(t=>t.trim()).map(t=>t.split("=")).reduce((t,n)=>(t[n[0]]=n[1].replace(/^"(.*)"$/,"$1"),t),{})},Np=(e,t)=>{var n,r;let s,i={};if(t.responseText&&cn(t.responseText))try{i=JSON.parse(t.responseText)}catch{i={errorSummary:"Unknown error"}}if(t.status>=500&&(i.errorSummary="Unknown error"),e.options.transformErrorXHR&&(t=e.options.transformErrorXHR(Le(t))),i.error&&i.error_description?s=new zn(i.error,i.error_description):s=new $r(i,t),(t==null?void 0:t.status)===403&&(!((n=t==null?void 0:t.headers)===null||n===void 0)&&n["www-authenticate"])){const{error:o,error_description:a,max_age:c,acr_values:u}=Up((r=t==null?void 0:t.headers)===null||r===void 0?void 0:r["www-authenticate"]);o==="insufficient_authentication_context"&&(s=new $r({errorSummary:o,errorCauses:[{errorSummary:a}]},t,Object.assign({max_age:+c},u&&{acr_values:u})))}return s};function ze(e,t){if(t=t||{},e.options.httpRequestInterceptors)for(const L of e.options.httpRequestInterceptors)L(t);var n=t.url,r=t.method,s=t.args,i=t.saveAuthnState,o=t.accessToken,a=t.withCredentials===!0,c=e.options.storageUtil,u=c.storage,l=e.storageManager.getHttpCache(e.options.cookies);if(t.cacheResponse){var f=l.getStorage(),d=f[n];if(d&&Date.now()/1e3<d.expiresAt)return Promise.resolve(d.response)}var g=e._oktaUserAgent.getHttpHeader(),m=Object.assign({Accept:"application/json","Content-Type":"application/json"},g);Object.assign(m,e.options.headers,t.headers),m=Ue(m),o&&cn(o)&&(m.Authorization="Bearer "+o);var w={headers:m,data:s||void 0,withCredentials:a},k,O;return e.options.httpRequestClient(r,n,w).then(function(L){return O=L.responseText,O&&cn(O)&&(O=JSON.parse(O),O&&typeof O=="object"&&!O.headers&&(Array.isArray(O)?O.forEach(N=>{N.headers=L.headers}):O.headers=L.headers)),i&&(O.stateToken||u.delete(Cn)),O&&O.stateToken&&O.expiresAt&&u.set(Cn,O.stateToken,O.expiresAt,e.options.cookies),O&&t.cacheResponse&&l.updateStorage(n,{expiresAt:Math.floor(Date.now()/1e3)+gu,response:O}),O}).catch(function(L){throw k=Np(e,L),k.errorCode==="E0000011"&&u.delete(Cn),k})}function un(e,t,n){t=is(t)?t:e.getIssuerOrigin()+t;var r={url:t,method:"GET"};return Object.assign(r,n),ze(e,r)}function At(e,t,n,r){t=is(t)?t:e.getIssuerOrigin()+t;var s={url:t,method:"POST",args:n,saveAuthnState:!0};return Object.assign(s,r),ze(e,s)}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Ea(e){return{meta:e,interactionHandle:e.interactionHandle,state:e.state}}async function Su(e,t={}){t=Ue(t);let n=Et(e,t);if(n!=null&&n.interactionHandle)return Ea(n);n=await Bi(e,Object.assign(Object.assign({},n),t));const r=au(e);let{clientId:s,redirectUri:i,state:o,scopes:a,withCredentials:c,codeChallenge:u,codeChallengeMethod:l,activationToken:f,recoveryToken:d,maxAge:g,acrValues:m,nonce:w}=n;const k=t.clientSecret||e.options.clientSecret;c=c??!0;const O=`${r}/v1/interact`,L=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({client_id:s,scope:a.join(" "),redirect_uri:i,code_challenge:u,code_challenge_method:l,state:o},f&&{activation_token:f}),d&&{recovery_token:d}),k&&{client_secret:k}),g&&{max_age:g}),m&&{acr_values:m}),w&&{nonce:w}),Q=(await ze(e,{method:"POST",url:O,headers:{"Content-Type":"application/x-www-form-urlencoded"},withCredentials:c,args:L})).interaction_handle,$=Object.assign(Object.assign({},n),{interactionHandle:Q,withCredentials:c,state:o,scopes:a,recoveryToken:d,activationToken:f});return qi(e,$),Ea($)}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Gn(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const Dp=function(t){return t.mutable!==!1},$p=function(t){var n,r;const s={},i=[],o={};if(!t.value)return i.push(t),{defaultParamsForAction:s,neededParamsForAction:i,immutableParamsForAction:o};for(let a of t.value)Dp(a)?(i.push(a),(n=a.value)!==null&&n!==void 0&&n&&(s[a.name]=a.value)):o[a.name]=(r=a.value)!==null&&r!==void 0?r:"";return{defaultParamsForAction:s,neededParamsForAction:i,immutableParamsForAction:o}},Hp=function(t){t=Array.isArray(t)?t:[t];const n=[],r={},s={};for(let i of t){const{defaultParamsForAction:o,neededParamsForAction:a,immutableParamsForAction:c}=$p(i);n.push(a),r[i.name]=o,s[i.name]=c}return{defaultParams:r,neededParams:n,immutableParams:s}};/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const Vp=function(t,{actionDefinition:n,defaultParamsForAction:r={},immutableParamsForAction:s={},toPersist:i={}}){const o=n.href;return async function(a={}){var c;const u={"Content-Type":"application/json",Accept:n.accepts||"application/ion+json"},l=JSON.stringify(Object.assign(Object.assign(Object.assign({},r),a),s));try{const f=await ze(t,{url:o,method:n.method,headers:u,args:l,withCredentials:(c=i==null?void 0:i.withCredentials)!==null&&c!==void 0?c:!0});return t.idx.makeIdxResponse(Object.assign({},f),i,!0)}catch(f){if(!(f instanceof $r)||!(f!=null&&f.xhr))throw f;const d=f.xhr,g=d.responseJSON||JSON.parse(d.responseText),m=d.headers["WWW-Authenticate"]||d.headers["www-authenticate"],w=t.idx.makeIdxResponse(Object.assign({},g),i,!1);return d.status===401&&m==='Oktadevicejwt realm="Okta Device"'&&(w.stepUp=!0),w}}},ii=function(t,n,r){const s=Vp,{defaultParams:i,neededParams:o,immutableParams:a}=Hp(n),c=s(t,{actionDefinition:n,defaultParamsForAction:i[n.name],immutableParamsForAction:a[n.name],toPersist:r});return c.neededParams=o,c};/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const Bp=function(t,n,r={}){return n.reduce((s,i)=>Object.assign(Object.assign({},s),{[i.name]:ii(t,i,r)}),{})};function qe(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?qe=function(t){return typeof t}:qe=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},qe(e)}function qp(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Kp(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&$n(e,t)}function Dn(e){return Dn=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Dn(e)}function $n(e,t){return $n=Object.setPrototypeOf||function(r,s){return r.__proto__=s,r},$n(e,t)}function Tu(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function xn(e,t,n){return Tu()?xn=Reflect.construct:xn=function(s,i,o){var a=[null];a.push.apply(a,i);var c=Function.bind.apply(s,a),u=new c;return o&&$n(u,o.prototype),u},xn.apply(null,arguments)}function Wp(e){return Function.toString.call(e).indexOf("[native code]")!==-1}function oi(e){var t=typeof Map=="function"?new Map:void 0;return oi=function(r){if(r===null||!Wp(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof t<"u"){if(t.has(r))return t.get(r);t.set(r,s)}function s(){return xn(r,arguments,Dn(this).constructor)}return s.prototype=Object.create(r.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),$n(s,r)},oi(e)}function zp(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Gp(e,t){return t&&(typeof t=="object"||typeof t=="function")?t:zp(e)}function Jp(e){var t=Tu();return function(){var r=Dn(e),s;if(t){var i=Dn(this).constructor;s=Reflect.construct(r,arguments,i)}else s=r.apply(this,arguments);return Gp(this,s)}}function Aa(e){return Qp(e)||Yp(e)||Ou(e)||Xp()}function Qp(e){if(Array.isArray(e))return ai(e)}function Yp(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ou(e,t){if(e){if(typeof e=="string")return ai(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ai(e,t)}}function ai(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Xp(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Zp(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=Ou(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0,s=function(){};return{s,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(c){throw c},f:s}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i=!0,o=!1,a;return{s:function(){n=n.call(e)},n:function(){var c=n.next();return i=c.done,c},e:function(c){o=!0,a=c},f:function(){try{!i&&n.return!=null&&n.return()}finally{if(o)throw a}}}}var Ae=Object.prototype.hasOwnProperty;function wn(e,t){return e=e.slice(),e.push(t),e}function Gt(e,t){return t=t.slice(),t.unshift(e),t}var eg=function(e){Kp(n,e);var t=Jp(n);function n(r){var s;return qp(this,n),s=t.call(this,'JSONPath should not be called with "new" (it prevents return of (unwrapped) scalar values)'),s.avoidNew=!0,s.value=r,s.name="NewError",s}return n}(oi(Error));function ie(e,t,n,r,s){if(!(this instanceof ie))try{return new ie(e,t,n,r,s)}catch(c){if(!c.avoidNew)throw c;return c.value}typeof e=="string"&&(s=r,r=n,n=t,t=e,e=null);var i=e&&qe(e)==="object";if(e=e||{},this.json=e.json||n,this.path=e.path||t,this.resultType=e.resultType||"value",this.flatten=e.flatten||!1,this.wrap=Ae.call(e,"wrap")?e.wrap:!0,this.sandbox=e.sandbox||{},this.preventEval=e.preventEval||!1,this.parent=e.parent||null,this.parentProperty=e.parentProperty||null,this.callback=e.callback||r||null,this.otherTypeCallback=e.otherTypeCallback||s||function(){throw new TypeError("You must supply an otherTypeCallback callback option with the @other() operator.")},e.autostart!==!1){var o={path:i?e.path:t};i?"json"in e&&(o.json=e.json):o.json=n;var a=this.evaluate(o);if(!a||qe(a)!=="object")throw new eg(a);return a}}ie.prototype.evaluate=function(e,t,n,r){var s=this,i=this.parent,o=this.parentProperty,a=this.flatten,c=this.wrap;if(this.currResultType=this.resultType,this.currPreventEval=this.preventEval,this.currSandbox=this.sandbox,n=n||this.callback,this.currOtherTypeCallback=r||this.otherTypeCallback,t=t||this.json,e=e||this.path,e&&qe(e)==="object"&&!Array.isArray(e)){if(!e.path&&e.path!=="")throw new TypeError('You must supply a "path" property when providing an object argument to JSONPath.evaluate().');if(!Ae.call(e,"json"))throw new TypeError('You must supply a "json" property when providing an object argument to JSONPath.evaluate().');var u=e;t=u.json,a=Ae.call(e,"flatten")?e.flatten:a,this.currResultType=Ae.call(e,"resultType")?e.resultType:this.currResultType,this.currSandbox=Ae.call(e,"sandbox")?e.sandbox:this.currSandbox,c=Ae.call(e,"wrap")?e.wrap:c,this.currPreventEval=Ae.call(e,"preventEval")?e.preventEval:this.currPreventEval,n=Ae.call(e,"callback")?e.callback:n,this.currOtherTypeCallback=Ae.call(e,"otherTypeCallback")?e.otherTypeCallback:this.currOtherTypeCallback,i=Ae.call(e,"parent")?e.parent:i,o=Ae.call(e,"parentProperty")?e.parentProperty:o,e=e.path}if(i=i||null,o=o||null,Array.isArray(e)&&(e=ie.toPathString(e)),!(!e&&e!==""||!t)){var l=ie.toPathArray(e);l[0]==="$"&&l.length>1&&l.shift(),this._hasParentSelector=null;var f=this._trace(l,t,["$"],i,o,n).filter(function(d){return d&&!d.isParentSelector});return f.length?!c&&f.length===1&&!f[0].hasArrExpr?this._getPreferredOutput(f[0]):f.reduce(function(d,g){var m=s._getPreferredOutput(g);return a&&Array.isArray(m)?d=d.concat(m):d.push(m),d},[]):c?[]:void 0}};ie.prototype._getPreferredOutput=function(e){var t=this.currResultType;switch(t){case"all":{var n=Array.isArray(e.path)?e.path:ie.toPathArray(e.path);return e.pointer=ie.toPointer(n),e.path=typeof e.path=="string"?e.path:ie.toPathString(e.path),e}case"value":case"parent":case"parentProperty":return e[t];case"path":return ie.toPathString(e[t]);case"pointer":return ie.toPointer(e.path);default:throw new TypeError("Unknown result type")}};ie.prototype._handleCallback=function(e,t,n){if(t){var r=this._getPreferredOutput(e);e.path=typeof e.path=="string"?e.path:ie.toPathString(e.path),t(r,n,e)}};ie.prototype._trace=function(e,t,n,r,s,i,o,a){var c=this,u;if(!e.length)return u={path:n,value:t,parent:r,parentProperty:s,hasArrExpr:o},this._handleCallback(u,i,"value"),u;var l=e[0],f=e.slice(1),d=[];function g(ee){Array.isArray(ee)?ee.forEach(function(se){d.push(se)}):d.push(ee)}if((typeof l!="string"||a)&&t&&Ae.call(t,l))g(this._trace(f,t[l],wn(n,l),t,l,i,o));else if(l==="*")this._walk(l,f,t,n,r,s,i,function(ee,se,_e,le,v,A,F,H){g(c._trace(Gt(ee,_e),le,v,A,F,H,!0,!0))});else if(l==="..")g(this._trace(f,t,n,r,s,i,o)),this._walk(l,f,t,n,r,s,i,function(ee,se,_e,le,v,A,F,H){qe(le[ee])==="object"&&g(c._trace(Gt(se,_e),le[ee],wn(v,ee),le,ee,H,!0))});else{if(l==="^")return this._hasParentSelector=!0,{path:n.slice(0,-1),expr:f,isParentSelector:!0};if(l==="~")return u={path:wn(n,l),value:s,parent:r,parentProperty:null},this._handleCallback(u,i,"property"),u;if(l==="$")g(this._trace(f,t,n,null,null,i,o));else if(/^(\x2D?[0-9]*):(\x2D?[0-9]*):?([0-9]*)$/.test(l))g(this._slice(l,f,t,n,r,s,i));else if(l.indexOf("?(")===0){if(this.currPreventEval)throw new Error("Eval [?(expr)] prevented in JSONPath expression.");this._walk(l,f,t,n,r,s,i,function(ee,se,_e,le,v,A,F,H){c._eval(se.replace(/^\?\(((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?)\)$/,"$1"),le[ee],ee,v,A,F)&&g(c._trace(Gt(ee,_e),le,v,A,F,H,!0))})}else if(l[0]==="("){if(this.currPreventEval)throw new Error("Eval [(expr)] prevented in JSONPath expression.");g(this._trace(Gt(this._eval(l,t,n[n.length-1],n.slice(0,-1),r,s),f),t,n,r,s,i,o))}else if(l[0]==="@"){var m=!1,w=l.slice(1,-2);switch(w){case"scalar":(!t||!["object","function"].includes(qe(t)))&&(m=!0);break;case"boolean":case"string":case"undefined":case"function":qe(t)===w&&(m=!0);break;case"integer":Number.isFinite(t)&&!(t%1)&&(m=!0);break;case"number":Number.isFinite(t)&&(m=!0);break;case"nonFinite":typeof t=="number"&&!Number.isFinite(t)&&(m=!0);break;case"object":t&&qe(t)===w&&(m=!0);break;case"array":Array.isArray(t)&&(m=!0);break;case"other":m=this.currOtherTypeCallback(t,n,r,s);break;case"null":t===null&&(m=!0);break;default:throw new TypeError("Unknown value type "+w)}if(m)return u={path:n,value:t,parent:r,parentProperty:s},this._handleCallback(u,i,"value"),u}else if(l[0]==="`"&&t&&Ae.call(t,l.slice(1))){var k=l.slice(1);g(this._trace(f,t[k],wn(n,k),t,k,i,o,!0))}else if(l.includes(",")){var O=l.split(","),L=Zp(O),N;try{for(L.s();!(N=L.n()).done;){var z=N.value;g(this._trace(Gt(z,f),t,n,r,s,i,!0))}}catch(ee){L.e(ee)}finally{L.f()}}else!a&&t&&Ae.call(t,l)&&g(this._trace(f,t[l],wn(n,l),t,l,i,o,!0))}if(this._hasParentSelector)for(var Q=0;Q<d.length;Q++){var $=d[Q];if($&&$.isParentSelector){var re=this._trace($.expr,t,$.path,r,s,i,o);if(Array.isArray(re)){d[Q]=re[0];for(var oe=re.length,Oe=1;Oe<oe;Oe++)Q++,d.splice(Q,0,re[Oe])}else d[Q]=re}}return d};ie.prototype._walk=function(e,t,n,r,s,i,o,a){if(Array.isArray(n))for(var c=n.length,u=0;u<c;u++)a(u,e,t,n,r,s,i,o);else n&&qe(n)==="object"&&Object.keys(n).forEach(function(l){a(l,e,t,n,r,s,i,o)})};ie.prototype._slice=function(e,t,n,r,s,i,o){if(Array.isArray(n)){var a=n.length,c=e.split(":"),u=c[2]&&Number.parseInt(c[2])||1,l=c[0]&&Number.parseInt(c[0])||0,f=c[1]&&Number.parseInt(c[1])||a;l=l<0?Math.max(0,l+a):Math.min(a,l),f=f<0?Math.max(0,f+a):Math.min(a,f);for(var d=[],g=l;g<f;g+=u){var m=this._trace(Gt(g,t),n,r,s,i,o,!0);m.forEach(function(w){d.push(w)})}return d}};ie.prototype._eval=function(e,t,n,r,s,i){e.includes("@parentProperty")&&(this.currSandbox._$_parentProperty=i,e=e.replace(/@parentProperty/g,"_$_parentProperty")),e.includes("@parent")&&(this.currSandbox._$_parent=s,e=e.replace(/@parent/g,"_$_parent")),e.includes("@property")&&(this.currSandbox._$_property=n,e=e.replace(/@property/g,"_$_property")),e.includes("@path")&&(this.currSandbox._$_path=ie.toPathString(r.concat([n])),e=e.replace(/@path/g,"_$_path")),e.includes("@root")&&(this.currSandbox._$_root=this.json,e=e.replace(/@root/g,"_$_root")),/@([\t-\r \)\.\[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])/.test(e)&&(this.currSandbox._$_v=t,e=e.replace(/@([\t-\r \)\.\[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])/g,"_$_v$1"));try{return this.vm.runInNewContext(e,this.currSandbox)}catch(o){throw console.log(o),new Error("jsonPath: "+o.message+": "+e)}};ie.cache={};ie.toPathString=function(e){for(var t=e,n=t.length,r="$",s=1;s<n;s++)/^(~|\^|@(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\(\))$/.test(t[s])||(r+=/^[\*0-9]+$/.test(t[s])?"["+t[s]+"]":"['"+t[s]+"']");return r};ie.toPointer=function(e){for(var t=e,n=t.length,r="",s=1;s<n;s++)/^(~|\^|@(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\(\))$/.test(t[s])||(r+="/"+t[s].toString().replace(/~/g,"~0").replace(/\//g,"~1"));return r};ie.toPathArray=function(e){var t=ie.cache;if(t[e])return t[e].concat();var n=[],r=e.replace(/@(?:null|boolean|number|string|integer|undefined|nonFinite|scalar|array|object|function|other)\(\)/g,";$&;").replace(/['\[](\??\((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\))['\]]/g,function(i,o){return"[#"+(n.push(o)-1)+"]"}).replace(/\[["']((?:(?!['\]])[\s\S])*)["']\]/g,function(i,o){return"['"+o.replace(/\./g,"%@%").replace(/~/g,"%%@@%%")+"']"}).replace(/~/g,";~;").replace(/["']?\.["']?(?!(?:(?!\[)[\s\S])*\])|\[["']?/g,";").replace(/%@%/g,".").replace(/%%@@%%/g,"~").replace(/(?:;)?(\^+)(?:;)?/g,function(i,o){return";"+o.split("").join(";")+";"}).replace(/;;;|;;/g,";..;").replace(/;$|'?\]|'$/g,""),s=r.split(";").map(function(i){var o=i.match(/#([0-9]+)/);return!o||!o[1]?i:n[o[1]]});return t[e]=s,t[e].concat()};var tg=function(t,n,r){for(var s=t.length,i=0;i<s;i++){var o=t[i];r(o)&&n.push(t.splice(i--,1)[0])}};ie.prototype.vm={runInNewContext:function(t,n){var r=Object.keys(n),s=[];tg(r,s,function(u){return typeof n[u]=="function"});var i=r.map(function(u,l){return n[u]}),o=s.reduce(function(u,l){var f=n[l].toString();return/function/.test(f)||(f="function "+f),"var "+l+"="+f+";"+u},"");t=o+t,!/(["'])use strict\1/.test(t)&&!r.includes("arguments")&&(t="var arguments = undefined;"+t),t=t.replace(/;[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*$/,"");var a=t.lastIndexOf(";"),c=a>-1?t.slice(0,a+1)+" return "+t.slice(a+1):" return "+t;return xn(Function,Aa(r).concat([c])).apply(void 0,Aa(i))}};/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function ng(e){return ie(Object.assign({preventEval:!0},e))}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const rg={remediation:!0,context:!0},sg=function(t,n,r={}){const s={},i={};return Object.keys(n).filter(o=>!rg[o]).forEach(o=>{if(!(typeof n[o]=="object"&&!!n[o])){i[o]=n[o];return}if(n[o].rel){s[n[o].name]=ii(t,n[o],r);return}const c=n[o],{value:u,type:l}=c,f=Gn(c,["value","type"]);if(i[o]=Object.assign({type:l},f),l!=="object"){i[o].value=u;return}i[o].value={},Object.entries(u).forEach(([d,g])=>{g.rel?s[`${o}-${d.name||d}`]=ii(t,g,r):i[o].value[d]=g})}),{context:i,actions:s}},Eu=(e,t)=>{Object.keys(t).forEach(n=>{if(n==="relatesTo"){const r=Array.isArray(t[n])?t[n][0]:t[n];if(typeof r=="string"){const s=ng({path:r,json:e})[0];if(s){t[n]=s;return}else throw new T(`Cannot resolve relatesTo: ${r}`)}}Array.isArray(t[n])&&t[n].forEach(r=>Eu(e,r))})},ig=(e,t,n)=>{if(t.rel){const s=Bp(e,[t],n)[t.name];return Object.assign(Object.assign({},t),{action:s})}return t},og=function(t,n,r={}){var s;const i=((s=n.remediation)===null||s===void 0?void 0:s.value)||[];i.forEach(u=>{var l;if(u.name==="launch-authenticator"&&((l=u==null?void 0:u.relatesTo)===null||l===void 0?void 0:l[0])==="authenticatorChallenge"&&!(n!=null&&n.authenticatorChallenge)){delete u.relatesTo;return}return Eu(n,u)});const o=i.map(u=>ig(t,u,r)),{context:a,actions:c}=sg(t,n,r);return{remediations:o,context:a,actions:c}};/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function ag(e,t,n,r){var s,i,o;const a=t,{remediations:c,context:u,actions:l}=og(e,t,n),f=[...c],d=async function(w,k={}){const O=c.find(N=>N.name===w);return O?typeof O.action!="function"?Promise.reject(`Current remediation cannot make form submit action: [${w}]`):O.action(k):Promise.reject(`Unknown remediation choice: [${w}]`)},g=w=>w.name==="interaction_code",m=(o=(i=(s=a.successWithInteractionCode)===null||s===void 0?void 0:s.value)===null||i===void 0?void 0:i.find(g))===null||o===void 0?void 0:o.value;return{proceed:d,neededToProceed:f,actions:l,context:u,rawIdxState:a,interactionCode:m,toPersist:n,requestDidSucceed:r}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */var cg={makeIdxState:ag};/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const Au=function(t){switch(t){case"1.0.0":return cg;case void 0:case null:throw new Error("Api version is required");default:throw new Error(`Unknown api version: ${t}.  Use an exact semver version.`)}};function ku(e){if(!e)throw new Error("version is required");if((e??"").replace(/[^0-9a-zA-Z._-]/,"")!==e||!e)throw new Error("invalid version supplied - version is required and uses semver syntax");Au(e)}function Ru(e,t,n,r){var s;const i=(s=t==null?void 0:t.version)!==null&&s!==void 0?s:zi;ku(i);const{makeIdxState:o}=Au(i);return o(e,t,n,r)}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Cu(e){return e&&e.version}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function ug(e){return e instanceof $r}function lg(e){return e instanceof zn}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */async function ci(e,t={}){var n;let r,s;const i=e.transactionManager.loadIdxResponse(t);if(i&&(r=i.rawIdxResponse,s=i.requestDidSucceed),!r){const a=t.version||zi,c=_p(e),{interactionHandle:u,stateHandle:l}=t,f=(n=t.withCredentials)!==null&&n!==void 0?n:!0;try{s=!0,ku(a);const d=`${c}/idp/idx/introspect`,g=l?{stateToken:l}:{interactionHandle:u},m={"Content-Type":`application/ion+json; okta-version=${a}`,Accept:`application/ion+json; okta-version=${a}`};r=await ze(e,{method:"POST",url:d,headers:m,withCredentials:f,args:g})}catch(d){if(ug(d)&&d.xhr&&Cu(d.xhr.responseJSON))r=d.xhr.responseJSON,s=!1;else throw d}}const{withCredentials:o}=t;return Ru(e,r,{withCredentials:o},s)}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function fg(e){var t;return(t=e.value)===null||t===void 0?void 0:t.map(n=>n.name)}function dg(e){var t;return(t=e.value)===null||t===void 0?void 0:t.reduce((n,r)=>(r.required&&n.push(r.name),n),[])}function gr(e){return e.charAt(0).toUpperCase()+e.substring(1)}function os(e){return e.value.find(({name:t})=>t==="authenticator")}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function ka(e){let t;if(Dr(e))t=e;else if(typeof e=="string")t={key:e};else throw new Error("Invalid format for authenticator");return t}function Qt(e,t){return!e||!t?!1:e.id&&t.id?e.id===t.id:e.key&&t.key?e.key===t.key:!1}function hg(e,t){let n;for(let r of e)if(n=t.find(({relatesTo:s})=>s.key&&s.key===r.key),n)break;return n}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class Ce{constructor(t,n={},r={}){this.values=Object.assign({},n),this.options=Object.assign({},r),this.formatAuthenticators(),this.remediation=t}formatAuthenticators(){if(this.values.authenticators=this.values.authenticators||[],this.values.authenticators=this.values.authenticators.map(t=>ka(t)),this.values.authenticator){const t=ka(this.values.authenticator);this.values.authenticators.some(r=>Qt(t,r))||this.values.authenticators.push(t)}this.values.authenticatorsData=this.values.authenticators.reduce((t,n)=>(typeof n=="object"&&Object.keys(n).length>1&&t.push(n),t),this.values.authenticatorsData||[])}getName(){return this.remediation.name}canRemediate(t){return!dg(this.remediation).find(s=>!this.hasData(s))}getData(t){if(!t)return fg(this.remediation).reduce((s,i)=>(s[i]=this.getData(i),s),{});if(typeof this[`map${gr(t)}`]=="function"){const n=this[`map${gr(t)}`](this.remediation.value.find(({name:r})=>r===t));if(n)return n}if(this.map&&this.map[t]){const n=this.map[t];for(let r=0;r<n.length;r++){let s=this.values[n[r]];if(s)return s}}return this.values[t]}hasData(t){return!!this.getData(t)}getNextStep(t,n){const r=this.getName(),s=this.getInputs(),i=this.getAuthenticator(),o=i==null?void 0:i.type;return Object.assign(Object.assign({name:r,inputs:s},o&&{type:o}),i&&{authenticator:i})}getInputs(){const t=[];return(this.remediation.value||[]).forEach(r=>{let s,{name:i,type:o,visible:a,messages:c}=r;if(a!==!1){if(typeof this[`getInput${gr(i)}`]=="function")s=this[`getInput${gr(i)}`](r);else if(o!=="object"){let u;const l=(this.map?this.map[i]:null)||[];l.length===1?u=l[0]:u=l.find(f=>Object.keys(this.values).includes(f)),u&&(s=Object.assign(Object.assign({},r),{name:u}))}s||(s=r),Array.isArray(s)?s.forEach(u=>t.push(u)):(c&&(s.messages=c),t.push(s))}}),t}static getMessages(t){var n,r;if(t.value)return(r=(n=t.value[0])===null||n===void 0?void 0:n.form)===null||r===void 0?void 0:r.value.reduce((s,i)=>(i.messages&&(s=[...s,...i.messages.value]),s),[])}getValuesAfterProceed(){const t=this.remediation.value||[],n=this.getInputs(),r=[...t,...n];for(const s of r)delete this.values[s.name];return this.values}getAuthenticator(){var t,n;const r=(t=this.remediation.relatesTo)===null||t===void 0?void 0:t.value;if(!r)return;const s=os(this.remediation);if(!s)return r;const i=s.form.value.find(({name:a})=>a==="id").value,o=(n=s.form.value.find(({name:a})=>a==="enrollmentId"))===null||n===void 0?void 0:n.value;return Object.assign(Object.assign({},r),{id:i,enrollmentId:o})}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Or(e){if(Array.isArray(e))return e.map(n=>typeof n=="string"||typeof n=="number"||typeof n=="boolean"?n:Or(n));const t={};for(const[n,r]of Object.entries(e))if(!(r===null||typeof r>"u"))if(typeof r=="object"){const s=Object.keys(r);if(["value","form"].includes(n)&&s.length===1&&["value","form"].includes(s[0])){const i=Or(r);Object.entries(i).forEach(([o,a])=>{t[o]=a})}else t[n]=Or(r)}else t[n]=r;return t}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class Gi extends Ce{canRemediate(){return typeof this.remediation.action!="function"?!1:!!(this.remediation.name==="poll"||this.remediation.name.endsWith("-poll")||this.options.step)}getData(){return this.getInputs().reduce((n,{name:r})=>(n[r]=this.values[r],n),{})}getNextStep(t,n){const r=this.getName(),s=this.getInputs(),i=this.remediation,{href:o,method:a,rel:c,accepts:u,produces:l,value:f,action:d}=i,g=Gn(i,["href","method","rel","accepts","produces","value","action"]);return d?Object.assign(Object.assign(Object.assign({},g),!!s.length&&{inputs:s}),{action:async m=>t.idx.proceed(Object.assign({step:r},m))}):Object.assign({},this.remediation)}getInputs(){return(this.remediation.value||[]).filter(({name:t})=>t!=="stateHandle").map(Or).map(t=>(t.type=t.type||"string",t))}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const Ji={remediators:{},getFlowSpecification:function(e,t="default"){return{remediators:{}}}};function pg(e){Object.assign(Ji,e)}function gg(e,t="default"){return Ji.getFlowSpecification(e,t)}function Hr(e){const{neededToProceed:t,interactionCode:n}=e;return!t.length&&!n}function mg(e){return e.neededToProceed.some(({name:t})=>t==="skip")}function vg(e){return Object.keys(e.actions).some(t=>t.includes("resend"))}function ui(e){if(!(!e||!Array.isArray(e)))return e.reduce((t,n)=>{if(n.messages&&(t=[...t,...n.messages.value]),n.form){const r=ui(n.form.value)||[];t=[...t,...r]}if(n.options){let r=[];n.options.forEach(i=>{!i.value||typeof i.value=="string"||(r=[...r,i.value])});const s=ui(r)||[];t=[...t,...s]}return t},[])}function xu(e,t){var n;let r=[];const{rawIdxState:s,neededToProceed:i}=e,o=(n=s.messages)===null||n===void 0?void 0:n.value.map(c=>c);if(o&&(r=[...r,...o]),!t.useGenericRemediator)for(let c of i){const u=ui(c.value);u&&(r=[...r,...u])}const a={};return r=r.reduce((c,u)=>{var l;const f=(l=u.i18n)===null||l===void 0?void 0:l.key;return f&&a[f]&&u.message===a[f].message||(a[f]=u,c=[...c,u]),c},[]),r}function yg(e){const t=[],{actions:n,neededToProceed:r}=e;return n["currentAuthenticator-recover"]&&t.push(yt.PASSWORD_RECOVERY),r.some(({name:s})=>s==="select-enroll-profile")&&t.push(yt.REGISTRATION),r.some(({name:s})=>s==="redirect-idp")&&t.push(yt.SOCIAL_IDP),r.some(({name:s})=>s==="unlock-account")&&t.push(yt.ACCOUNT_UNLOCK),t}function wg(e,t,n){var r;const s=[],i=Object.values(Ji.remediators).reduce((o,a)=>(a.remediationName&&(o[a.remediationName]=a),o),{});for(let o of t.neededToProceed){const a=li(o,{useGenericRemediator:n,remediators:i});if(a){const c=new a(o);s.push(c.getNextStep(e,t.context))}}for(const[o]of Object.entries(t.actions||{})){let a={name:o,action:async c=>e.idx.proceed({actions:[{name:o,params:c}]})};if(o.startsWith("currentAuthenticator")){const[c,u]=vp(o,"-"),l=t.rawIdxState[c].value[u],f=Gn(l,["href","method","rel","accepts","produces"]),d=(r=l.value)===null||r===void 0?void 0:r.filter(g=>g.name!=="stateHandle");a=Object.assign(Object.assign(Object.assign({},f),d&&{value:d}),a)}s.push(a)}return s}function bg(e,t,n){const s=(e.neededToProceed||[]).find(o=>o.name===t);return s?s.value.reduce((o,a)=>{const{name:c,value:u}=a;return c==="stateHandle"?o[c]=u:o[c]=n[c],o},{}):(tt(`filterValuesForRemediation: "${t}" did not match any remediations`),n)}function li(e,t){const{useGenericRemediator:n,remediators:r}=t;if(e)return n?Gi:r[e.name]}function fi(e,t,n){const r=n.remediators,s=n.useGenericRemediator,{neededToProceed:i,context:o}=e;let a;if(n.step){const u=i.find(({name:l})=>l===n.step);if(u){const l=li(u,n);return l?new l(u,t,n):void 0}else{tt(`step "${n.step}" did not match any remediations`);return}}const c=[];if(s)c.push(new Gi(i[0],t,n));else for(let u of i){if(!Object.keys(r).includes(u.name))continue;const f=li(u,n);if(a=new f(u,t,n),a.canRemediate(o))return a;c.push(a)}return c[0]}function di(e,t,n){const r=t.getNextStep(e,n.context),s=mg(n),i=vg(n);return Object.assign(Object.assign(Object.assign({},r),s&&{canSkip:s}),i&&{canResend:i})}function mr(e,t,n={}){const r=Hr(t),s=xu(t,n);if(r)return{idxResponse:t,terminal:r,messages:s};{const i=fi(t,{},n),o=i&&di(e,i,t);return Object.assign({idxResponse:t,messages:s},o&&{nextStep:o})}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function _g(e,t){return Object.keys(t.actions).find(n=>!!e.resend&&n.includes("-resend"))}function Sg(e){return Object.assign(Object.assign({},e),{resend:void 0})}function Tg(e,t){let n=e.actions||[];return n=n.filter(r=>typeof r=="string"?r!==t:r.name!==t),Object.assign(Object.assign({},e),{actions:n})}async function Er(e,t,n,r){let{neededToProceed:s,interactionCode:i}=t;const{flow:o}=r;if(i)return{idxResponse:t};const a=fi(t,n,r),c=_g(n,t),l=[...r.actions||[],...c&&[c]||[]];if(l)for(let m of l){let w={};typeof m!="string"&&(w=m.params||{},m=m.name);let k=Sg(n),O=Tg(r,m);if(typeof t.actions[m]=="function")return t=await t.actions[m](w),t.requestDidSucceed===!1?mr(e,t,r):m==="cancel"?{idxResponse:t,canceled:!0}:Er(e,t,k,O);if(s.find(({name:N})=>N===m))return t=await t.proceed(m,w),t.requestDidSucceed===!1?mr(e,t,r):Er(e,t,n,O)}const f=Hr(t);if(f)return{idxResponse:t,terminal:f};if(!a){if(r.step)return n=bg(t,r.step,n),t=await t.proceed(r.step,n),t.requestDidSucceed===!1?mr(e,t,r):{idxResponse:t};if(o==="default")return{idxResponse:t};throw new T(`
      No remediation can match current flow, check policy settings in your org.
      Remediations: [${s.reduce((m,w)=>m?m+" ,"+w.name:w.name,"")}]
    `)}if(!a.canRemediate()){const m=di(e,a,t);return{idxResponse:t,nextStep:m}}const d=a.getName(),g=a.getData();if(t=await t.proceed(d,g),t.requestDidSucceed===!1)return mr(e,t,r);if(n=a.getValuesAfterProceed(),r=Object.assign(Object.assign({},r),{step:void 0}),r.useGenericRemediator&&!t.interactionCode&&!Hr(t)){const m=fi(t,n,r),w=di(e,m,t);return{idxResponse:t,nextStep:w}}return Er(e,t,n,r)}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Og(e){const t=["flow","remediators","actions","withCredentials","step","useGenericRemediator","exchangeCodeForTokens"],n=Object.assign({},e);return t.forEach(r=>{delete n[r]}),n}function Eg(e,t){var n,r,s,i;let{options:o}=t;o=Object.assign(Object.assign({},e.options.idx),o);let{flow:a,withCredentials:c,remediators:u,actions:l}=o;const f=xt.PENDING;if(a=a||((r=(n=e.idx).getFlow)===null||r===void 0?void 0:r.call(n))||"default",a){(i=(s=e.idx).setFlow)===null||i===void 0||i.call(s,a);const d=gg(e,a);c=typeof c<"u"?c:d.withCredentials,u=u||d.remediators,l=l||d.actions}return Object.assign(Object.assign({},t),{options:Object.assign(Object.assign({},o),{flow:a,withCredentials:c,remediators:u,actions:l}),status:f})}async function Ag(e,t){const{options:n}=t,{stateHandle:r,withCredentials:s,version:i,state:o,scopes:a,recoveryToken:c,activationToken:u,maxAge:l,acrValues:f,nonce:d}=n;let g,m=Et(e,{state:o,recoveryToken:c,activationToken:u});if(r)g=await ci(e,{withCredentials:s,version:i,stateHandle:r});else{let w=m==null?void 0:m.interactionHandle;if(!w){e.transactionManager.clear();const k=await Su(e,{withCredentials:s,state:o,scopes:a,activationToken:u,recoveryToken:c,maxAge:l,acrValues:f,nonce:d});w=k.interactionHandle,m=k.meta}g=await ci(e,{withCredentials:s,version:i,interactionHandle:w})}return Object.assign(Object.assign({},t),{idxResponse:g,meta:m})}async function kg(e,t){let{idxResponse:n,options:r,values:s}=t;const{autoRemediate:i,remediators:o,actions:a,flow:c,step:u,useGenericRemediator:l}=r;if(!(i!==!1&&(o||a||u)))return t;s=Object.assign(Object.assign({},s),{stateHandle:n.rawIdxState.stateHandle});const{idxResponse:d,nextStep:g,canceled:m}=await Er(e,n,s,{remediators:o,actions:a,flow:c,step:u,useGenericRemediator:l});return n=d,Object.assign(Object.assign({},t),{idxResponse:n,nextStep:g,canceled:m})}async function Rg(e,t){let{meta:n,idxResponse:r}=t;const{interactionCode:s}=r,{clientId:i,codeVerifier:o,ignoreSignature:a,redirectUri:c,urls:u,scopes:l}=n;return(await e.token.exchangeCodeForTokens({interactionCode:s,clientId:i,codeVerifier:o,ignoreSignature:a,redirectUri:c,scopes:l},u)).tokens}async function Cg(e,t){let{options:n,idxResponse:r,canceled:s,status:i}=t;const{exchangeCodeForTokens:o}=n;let a=!1,c=!1,u=!0,l,f,d,g,m,w;if(r&&(a=!!(r.requestDidSucceed||r.stepUp),d=yg(r),g=wg(e,r,n.useGenericRemediator),m=xu(r,n),w=Hr(r)),w){i=xt.TERMINAL;const k=Object.keys(r.actions).length>0,O=!!m.find(N=>N.class==="ERROR");!k&&!O&&r.requestDidSucceed===!0?c=!0:a=!!k,u=!1}else s?(i=xt.CANCELED,c=!0):r!=null&&r.interactionCode&&(l=r.interactionCode,o===!1?(i=xt.SUCCESS,c=!1):(f=await Rg(e,t),i=xt.SUCCESS,c=!0));return Object.assign(Object.assign({},t),{status:i,interactionCode:l,tokens:f,shouldSaveResponse:a,shouldClearTransaction:c,clearSharedStorage:u,enabledFeatures:d,availableSteps:g,messages:m,terminal:w})}async function Bt(e,t={}){var n;let r={options:t,values:Og(t)};r=Eg(e,r),r=await Ag(e,r),r=await kg(e,r),r=await Cg(e,r);const{idxResponse:s,meta:i,shouldSaveResponse:o,shouldClearTransaction:a,clearSharedStorage:c,status:u,enabledFeatures:l,availableSteps:f,tokens:d,nextStep:g,messages:m,error:w,interactionCode:k}=r;if(a)e.transactionManager.clear({clearSharedStorage:c});else if(qi(e,Object.assign({},i)),o){const{rawIdxState:oe,requestDidSucceed:Oe}=s;e.transactionManager.saveIdxResponse({rawIdxResponse:oe,requestDidSucceed:Oe,stateHandle:(n=s.context)===null||n===void 0?void 0:n.stateHandle,interactionHandle:i==null?void 0:i.interactionHandle})}const{actions:O,context:L,neededToProceed:N,proceed:z,rawIdxState:Q,requestDidSucceed:$,stepUp:re}=s||{};return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({status:u},i&&{meta:i}),l&&{enabledFeatures:l}),f&&{availableSteps:f}),d&&{tokens:d}),g&&{nextStep:g}),m&&m.length&&{messages:m}),w&&{error:w}),re&&{stepUp:re}),{interactionCode:k,actions:O,context:L,neededToProceed:N,proceed:z,rawIdxState:Q,requestDidSucceed:$})}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */async function xg(e,t={}){return t.password&&!t.authenticator&&(t.authenticator=rt.OKTA_PASSWORD),Bt(e,Object.assign(Object.assign({},t),{flow:"authenticate"}))}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class pn{constructor(t){this.meta=t}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class Pu extends pn{canVerify(t){return!!(t.credentials||t.verificationCode||t.otp)}mapCredentials(t){const{credentials:n,verificationCode:r,otp:s}=t;if(!(!n&&!r&&!s))return n||{passcode:r||s}}getInputs(t){var n;return Object.assign(Object.assign({},(n=t.form)===null||n===void 0?void 0:n.value[0]),{name:"verificationCode",type:"string",required:t.required})}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class Pg extends Pu{mapCredentials(t){const{verificationCode:n}=t;if(n)return{totp:n}}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class Iu extends pn{canVerify(t){return!!(t.credentials||t.password||t.passcode)}mapCredentials(t){const{credentials:n,password:r,passcode:s}=t;if(!(!n&&!r&&!s))return n||{passcode:s||r}}getInputs(t){var n;return Object.assign(Object.assign({},(n=t.form)===null||n===void 0?void 0:n.value[0]),{name:"password",type:"string",required:t.required})}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class Ig extends pn{canVerify(t){const{credentials:n}=t;if(n&&n.questionKey&&n.answer)return!0;const{questionKey:r,question:s,answer:i}=t;return!!(r&&i)||!!(s&&i)}mapCredentials(t){const{questionKey:n,question:r,answer:s}=t;if(!(!s||!n&&!r))return{questionKey:r?"custom":n,question:r,answer:s}}getInputs(){return[{name:"questionKey",type:"string",required:!0},{name:"question",type:"string",label:"Create a security question"},{name:"answer",type:"string",label:"Answer",required:!0}]}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class Mg extends pn{canVerify(t){const{credentials:n}=t;if(n&&n.answer)return!0;const{answer:r}=t;return!!r}mapCredentials(t){const{answer:n}=t;if(n)return{questionKey:this.meta.contextualData.enrolledQuestion.questionKey,answer:n}}getInputs(){return[{name:"answer",type:"string",label:"Answer",required:!0}]}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class jg extends pn{canVerify(t){const{credentials:n}=t,r=n||t,{clientData:s,attestation:i}=r;return!!(s&&i)}mapCredentials(t){const{credentials:n,clientData:r,attestation:s}=t;if(!(!n&&!r&&!s))return n||{clientData:r,attestation:s}}getInputs(){return[{name:"clientData",type:"string",required:!0,visible:!1,label:"Client Data"},{name:"attestation",type:"string",required:!0,visible:!1,label:"Attestation"}]}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class Lg extends pn{canVerify(t){const{credentials:n}=t,r=n||t,{clientData:s,authenticatorData:i,signatureData:o}=r;return!!(s&&i&&o)}mapCredentials(t){const{credentials:n,authenticatorData:r,clientData:s,signatureData:i}=t;if(!(!n&&!r&&!s&&!i))return n||{authenticatorData:r,clientData:s,signatureData:i}}getInputs(){return[{name:"authenticatorData",type:"string",label:"Authenticator Data",required:!0,visible:!1},{name:"clientData",type:"string",label:"Client Data",required:!0,visible:!1},{name:"signatureData",type:"string",label:"Signature Data",required:!0,visible:!1}]}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Fg(e){var t,n;const r=e.relatesTo,s=(r==null?void 0:r.value)||{};switch(s.key){case rt.OKTA_PASSWORD:return new Iu(s);case rt.SECURITY_QUESTION:return!((t=s.contextualData)===null||t===void 0)&&t.enrolledQuestion?new Mg(s):new Ig(s);case rt.OKTA_VERIFY:return new Pg(s);case rt.WEBAUTHN:return!((n=s.contextualData)===null||n===void 0)&&n.challengeData?new Lg(s):new jg(s);default:return new Pu(s)}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class Qi extends Ce{constructor(t,n={}){super(t,n),this.authenticator=Fg(t)}getNextStep(t,n){var r;const s=super.getNextStep(t,n),i=(r=n==null?void 0:n.authenticatorEnrollments)===null||r===void 0?void 0:r.value;return Object.assign(Object.assign({},s),{authenticatorEnrollments:i})}canRemediate(){return this.authenticator.canVerify(this.values)}mapCredentials(){return this.authenticator.mapCredentials(this.values)}getInputCredentials(t){return this.authenticator.getInputs(t)}getValuesAfterProceed(){return this.values=super.getValuesAfterProceed(),Object.keys(this.values).filter(n=>n!=="credentials").reduce((n,r)=>Object.assign(Object.assign({},n),{[r]:this.values[r]}),{})}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class as extends Qi{}as.remediationName="enroll-authenticator";/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class gn extends Ce{canRemediate(){return!!this.values.startPolling||this.options.step==="enroll-poll"}getNextStep(t,n){const r=super.getNextStep(t,n);let s=this.getAuthenticator();return!s&&(n!=null&&n.currentAuthenticator)&&(s=n.currentAuthenticator.value),Object.assign(Object.assign({},r),{authenticator:s,poll:{required:!0,refresh:this.remediation.refresh}})}getValuesAfterProceed(){return Object.keys(this.values).filter(n=>n!=="startPolling").reduce((n,r)=>Object.assign(Object.assign({},n),{[r]:this.values[r]}),{})}}gn.remediationName="enroll-poll";/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class cs extends Ce{canRemediate(){if(this.values.channel)return!0;if(this.values.authenticator){const{id:t,channel:n}=this.values.authenticator;if(t&&n)return!0}return!1}getNextStep(t,n){const r=super.getNextStep(t,n),s=n.currentAuthenticator.value;return Object.assign(Object.assign({},r),{authenticator:s})}getData(){var t;return{authenticator:{id:this.remediation.value[0].value.form.value[0].value,channel:((t=this.values.authenticator)===null||t===void 0?void 0:t.channel)||this.values.channel},stateHandle:this.values.stateHandle}}getValuesAfterProceed(){this.values=super.getValuesAfterProceed(),delete this.values.authenticators;const t=this.values.channel?"channel":"authenticator";return Object.keys(this.values).filter(r=>r!==t).reduce((r,s)=>Object.assign(Object.assign({},r),{[s]:this.values[s]}),{})}}cs.remediationName="select-enrollment-channel";/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class us extends Ce{getInputEmail(){return[{name:"email",type:"string",required:!0,label:"Email"}]}getInputPhoneNumber(){return[{name:"phoneNumber",type:"string",required:!0,label:"Phone Number"}]}canRemediate(){return!!(this.values.email||this.values.phoneNumber)}getNextStep(t,n){const r=super.getNextStep(t,n),s=n.currentAuthenticator.value;return Object.assign(Object.assign({},r),{authenticator:s})}getData(){return{stateHandle:this.values.stateHandle,email:this.values.email,phoneNumber:this.values.phoneNumber}}getValuesAfterProceed(){return Object.keys(this.values).filter(n=>!["email","phoneNumber"].includes(n)).reduce((n,r)=>Object.assign(Object.assign({},n),{[r]:this.values[r]}),{})}}us.remediationName="enrollment-channel-data";/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class Jn extends Qi{}Jn.remediationName="challenge-authenticator";/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class ls extends gn{canRemediate(){return!!this.values.startPolling||this.options.step==="challenge-poll"}}ls.remediationName="challenge-poll";/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class Yi extends Qi{}Yi.remediationName="reset-authenticator";/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class Xi extends Ce{constructor(t,n={},r={}){super(t,n,r),this.authenticator=null,this.getCredentialsFromRemediation()&&(this.authenticator=this.authenticator=new Iu({}))}canRemediate(){if(this.authenticator&&!this.authenticator.canVerify(this.values))return!1;const t=this.getData().userProfile;return t?this.remediation.value.find(({name:r})=>r==="userProfile").form.value.reduce((r,s)=>(s.required&&(r=r&&!!t[s.name]),r),!0):!1}getCredentialsFromRemediation(){return this.remediation.value.find(({name:t})=>t==="credentials")}mapUserProfile({form:{value:t}}){const r=t.map(({name:s})=>s).reduce((s,i)=>this.values[i]?Object.assign(Object.assign({},s),{[i]:this.values[i]}):s,{});if(Object.keys(r).length!==0)return r}mapCredentials(){const t=this.authenticator&&this.authenticator.mapCredentials(this.values);if(t)return t}getInputUserProfile(t){return[...t.form.value]}getInputCredentials(t){return[...t.form.value]}getErrorMessages(t){return t.value[0].form.value.reduce((n,r)=>(r.messages&&n.push(r.messages.value[0].message),n),[])}}Xi.remediationName="enroll-profile";/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class ln extends Ce{constructor(){super(...arguments),this.map={identifier:["username"]}}canRemediate(){const{identifier:t}=this.getData();return!!t}mapCredentials(){const{credentials:t,password:n}=this.values;if(!(!t&&!n))return t||{passcode:n}}getInputCredentials(t){return Object.assign(Object.assign({},t.form.value[0]),{name:"password",required:t.required})}}ln.remediationName="identify";/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class Qn extends Ce{mapCredentials(){const{newPassword:t}=this.values;if(t)return{passcode:t}}getInputCredentials(t){const r=this.getAuthenticator().type==="password"?"newPassword":"verificationCode";return Object.assign(Object.assign({},t.form.value[0]),{name:r})}}Qn.remediationName="reenroll-authenticator";/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class Yn extends Qn{}Yn.remediationName="reenroll-authenticator-warning";/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class Zi extends Ce{canRemediate(){return!1}getNextStep(){const{name:t,type:n,idp:r,href:s}=this.remediation;return{name:t,type:n,idp:r,href:s}}}Zi.remediationName="redirect-idp";/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class eo extends Ce{findMatchedOption(t,n){let r;for(let s of t)if(r=n.find(({relatesTo:i})=>i.key&&i.key===s.key),r)break;return r}canRemediate(t){var n,r;const{authenticators:s,authenticator:i}=this.values,o=os(this.remediation),{options:a}=o;if(!s||!s.length)return!1;if(Dr(i)&&i.id)return!0;const c=this.findMatchedOption(s,a);if(c){const u=(t==null?void 0:t.currentAuthenticator)&&(t==null?void 0:t.currentAuthenticator.value.id)===((n=c.relatesTo)===null||n===void 0?void 0:n.id),l=(t==null?void 0:t.currentAuthenticatorEnrollment)&&(t==null?void 0:t.currentAuthenticatorEnrollment.value.id)===((r=c.relatesTo)===null||r===void 0?void 0:r.id);return!u&&!l}return!1}mapAuthenticator(t){const{authenticators:n,authenticator:r}=this.values;if(Dr(r)&&r.id)return this.selectedAuthenticator=r,r;const{options:s}=t,i=hg(n,s);return this.selectedAuthenticator=i.relatesTo,this.selectedOption=i,{id:i==null?void 0:i.value.form.value.find(({name:o})=>o==="id").value}}getInputAuthenticator(t){return{name:"authenticator",type:"string",options:t.options.map(({label:r,relatesTo:s})=>({label:r,value:s.key}))}}getValuesAfterProceed(){this.values=super.getValuesAfterProceed();const t=this.values.authenticators.filter(n=>Qt(n,this.selectedAuthenticator)!==!0);return Object.assign(Object.assign({},this.values),{authenticators:t})}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class Xn extends eo{constructor(t,n={},r={}){var s;super(t,n,r);const i=this.options.flow==="recoverPassword";((s=os(t).options)===null||s===void 0?void 0:s.some(({relatesTo:a})=>(a==null?void 0:a.key)===rt.OKTA_PASSWORD))&&(i||this.values.password)&&(this.values.authenticators=[...this.values.authenticators||[],{key:rt.OKTA_PASSWORD}])}}Xn.remediationName="select-authenticator-authenticate";/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class Zn extends eo{}Zn.remediationName="select-authenticator-enroll";/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class to extends eo{constructor(){super(...arguments),this.map={identifier:["username"]}}canRemediate(){return!!this.getData("identifier")&&super.canRemediate()}mapAuthenticator(t){var n,r,s;const i=super.mapAuthenticator(t),o=(n=this.selectedOption)===null||n===void 0?void 0:n.value.form.value.find(({name:c})=>c==="methodType"),a=this.values.methodType||(o==null?void 0:o.value)||((s=(r=o==null?void 0:o.options)===null||r===void 0?void 0:r[0])===null||s===void 0?void 0:s.value);return a?Object.assign(Object.assign({},i),{methodType:a}):i}getInputUsername(){return{name:"username",type:"string"}}}to.remediationName="select-authenticator-unlock-account";/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class no extends Ce{canRemediate(){return!0}}no.remediationName="select-enroll-profile";/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class Mu extends Ce{constructor(t,n={}){super(t,n),this.authenticator=this.getAuthenticator(),this.formatAuthenticatorData()}formatAuthenticatorData(){if(this.getAuthenticatorData())this.values.authenticatorsData=this.values.authenticatorsData.map(n=>Qt(this.authenticator,n)?this.mapAuthenticatorDataFromValues(n):n);else{const n=this.mapAuthenticatorDataFromValues();n&&this.values.authenticatorsData.push(n)}}getAuthenticatorData(){return this.values.authenticatorsData.find(t=>Qt(this.authenticator,t))}canRemediate(){return this.values.authenticatorsData.some(t=>Qt(this.authenticator,t))}mapAuthenticatorDataFromValues(t){let{methodType:n,authenticator:r}=this.values;!n&&Dr(r)&&(n=r==null?void 0:r.methodType);const{id:s,enrollmentId:i}=this.authenticator,o=Object.assign(Object.assign({id:s,enrollmentId:i},t&&t),n&&{methodType:n});return o.methodType?o:null}getAuthenticatorFromRemediation(){return this.remediation.value.find(({name:n})=>n==="authenticator")}getValuesAfterProceed(){this.values=super.getValuesAfterProceed();const t=this.values.authenticatorsData.filter(n=>Qt(this.authenticator,n)!==!0);return Object.assign(Object.assign({},this.values),{authenticatorsData:t})}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class er extends Mu{mapAuthenticator(){return this.getAuthenticatorData()}getInputAuthenticator(){const t=this.getAuthenticatorFromRemediation(),n=t.form.value.find(({name:s})=>s==="methodType");return n&&n.options?{name:"methodType",type:"string",required:!0,options:n.options}:[...t.form.value]}getValuesAfterProceed(){return this.values=super.getValuesAfterProceed(),Object.keys(this.values).filter(n=>n!=="authenticator").reduce((n,r)=>Object.assign(Object.assign({},n),{[r]:this.values[r]}),{})}}er.remediationName="authenticator-verification-data";/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class tr extends Mu{mapAuthenticator(){const t=this.getAuthenticatorData();return{id:os(this.remediation).form.value.find(({name:r})=>r==="id").value,methodType:t.methodType,phoneNumber:t.phoneNumber}}getInputAuthenticator(t){return[{name:"methodType",type:"string"},{name:"phoneNumber",label:"Phone Number",type:"string"}].map(n=>{const r=t.form.value.find(s=>s.name===n.name);return Object.assign(Object.assign({},r),n)})}mapAuthenticatorDataFromValues(t){t=super.mapAuthenticatorDataFromValues(t);const{phoneNumber:n}=this.values;if(!(!t&&!n))return Object.assign(Object.assign({},t&&t),n&&{phoneNumber:n})}}tr.remediationName="authenticator-enrollment-data";/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class fs extends Ce{canRemediate(){return!!this.values.skip||this.options.step==="skip"}}fs.remediationName="skip";/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const Ra={identify:ln,"select-authenticator-authenticate":Xn,"select-authenticator-enroll":Zn,"authenticator-enrollment-data":tr,"authenticator-verification-data":er,"enroll-authenticator":as,"challenge-authenticator":Jn,"challenge-poll":ls,"reenroll-authenticator":Qn,"reenroll-authenticator-warning":Yn,"enroll-poll":gn,"select-enrollment-channel":cs,"enrollment-channel-data":us,"redirect-idp":Zi,skip:fs};/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const Ug={identify:ln,"identify-recovery":ln,"select-authenticator-authenticate":Xn,"select-authenticator-enroll":Zn,"challenge-authenticator":Jn,"authenticator-verification-data":er,"authenticator-enrollment-data":tr,"reset-authenticator":Yi,"reenroll-authenticator":Qn,"reenroll-authenticator-warning":Yn,"enroll-poll":gn};/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const Ng={"select-enroll-profile":no,"enroll-profile":Xi,"authenticator-enrollment-data":tr,"select-authenticator-enroll":Zn,"enroll-poll":gn,"select-enrollment-channel":cs,"enrollment-channel-data":us,"enroll-authenticator":as,skip:fs};/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const Dg={identify:ln,"select-authenticator-unlock-account":to,"select-authenticator-authenticate":Xn,"challenge-authenticator":Jn,"challenge-poll":ls,"authenticator-verification-data":er,"reenroll-authenticator-warning":Yn};/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function ro(e,t="default"){let n,r,s=!0;switch(t){case"register":case"signup":case"enrollProfile":n=Ng,s=!1;break;case"recoverPassword":case"resetPassword":n=Ug,r=["currentAuthenticator-recover","currentAuthenticatorEnrollment-recover"],s=!1;break;case"unlockAccount":n=Dg,s=!1,r=["unlock-account"];break;case"authenticate":case"login":case"signin":n=Ra;break;default:n=Ra;break}return{flow:t,remediators:n,actions:r,withCredentials:s}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */async function $g(e,t){const n=e.transactionManager.load(),r=ro(e,n.flow);return Bt(e,Object.assign(Object.assign(Object.assign({},t),r),{actions:["cancel"]}))}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function ju(e){var t=/\+/g,n=/([^&=]+)=?([^&]*)/g,r=e||"";r.charAt(0)==="#"&&r.charAt(1)==="/"&&(r=r.substring(2)),(r.charAt(0)==="#"||r.charAt(0)==="?")&&(r=r.substring(1));for(var s={},i;i=n.exec(r),!!i;){var o=i[1],a=i[2];o==="id_token"||o==="access_token"||o==="code"?s[o]=a:s[o]=decodeURIComponent(a.replace(t," "))}return s}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class Hg extends Wn{constructor(t,n){super(`Enter the OTP code in the originating client: ${n}`),this.name="EmailVerifyCallbackError",this.state=t,this.otp=n}}function Vg(e){return e.name==="EmailVerifyCallbackError"}function Lu(e){return/(otp=)/i.test(e)&&/(state=)/i.test(e)}function Fu(e){return ju(e)}async function Bg(e,t){if(Lu(t)){const{state:n,otp:r}=Fu(t);if(e.idx.canProceed({state:n}))return await e.idx.proceed({state:n,otp:r});throw new Hg(n,r)}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Uu(e,t={}){return!!(Et(e,t)||t.stateHandle)}async function Nu(e,t={}){if(!Uu(e,t))throw new T("Unable to proceed: saved transaction could not be loaded");let{flow:n,state:r}=t;if(!n){const s=Et(e,{state:r});n=s==null?void 0:s.flow}return Bt(e,Object.assign(Object.assign({},t),{flow:n}))}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */async function Du(e,t={}){var n;let r=await Nu(e,{startPolling:!0});const s=Et(e);let i=(n=s==null?void 0:s.remediations)===null||n===void 0?void 0:n.find(o=>o.includes("poll"));return i!=null&&i.length||tt("No polling remediations available at the current IDX flow stage"),Number.isInteger(t.refresh)?new Promise(function(o,a){setTimeout(async function(){var c,u;try{const l=(u=(c=r.nextStep)===null||c===void 0?void 0:c.poll)===null||u===void 0?void 0:u.refresh;o(l?Du(e,{refresh:l}):r)}catch(l){a(l)}},t.refresh)}):r}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */async function so(e,t={}){return e.transactionManager.clear(),Bt(e,Object.assign({exchangeCodeForTokens:!1},t))}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */async function qg(e,t={}){if(!lu(e)){const{enabledFeatures:n}=await so(e,Object.assign(Object.assign({},t),{flow:"register",autoRemediate:!1}));if(!t.activationToken&&n&&!n.includes(yt.REGISTRATION))throw new T("Registration is not supported based on your current org configuration.")}return Bt(e,Object.assign(Object.assign({},t),{flow:"register"}))}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */async function Kg(e,t={}){const n=ro(e,"recoverPassword");return Bt(e,Object.assign(Object.assign({},t),n))}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */async function Wg(e,t){const n=e.transactionManager.load();if(!n)throw new T("No transaction data was found in storage");const{codeVerifier:r,state:s}=n,{searchParams:i}=new URL(t),o=i.get("state"),a=i.get("interaction_code"),c=i.get("error");if(c)throw new zn(c,i.get("error_description"));if(o!==s)throw new T("State in redirect uri does not match with transaction state");if(!a)throw new T("Unable to parse interaction_code from the url");const{tokens:u}=await e.token.exchangeCodeForTokens({interactionCode:a,codeVerifier:r});e.tokenManager.setTokens(u)}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */async function zg(e,t={}){if(t.flow="unlockAccount",!lu(e)){const{enabledFeatures:n}=await so(e,Object.assign(Object.assign({},t),{autoRemediate:!1}));if(n&&!n.includes(yt.ACCOUNT_UNLOCK))throw new T("Self Service Account Unlock is not supported based on your current org configuration.")}return Bt(e,Object.assign({},t))}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function $u(e){return e.name!=="OAuthError"?!1:e.errorCode==="interaction_required"}function Gg(e){return lg(e)&&e.errorCode==="invalid_grant"&&e.errorSummary==="The refresh token is invalid or expired."}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Jg(e){return/((id|access)_token=)/i.test(e)}function Qg(e){return/(code=)/i.test(e)}function Yg(e){return/(interaction_code=)/i.test(e)}function Xg(e){return/(error=)/i.test(e)||/(error_description)/i.test(e)}function Zg(e,t){var n=t.options;return!e||!n.redirectUri?!1:e.indexOf(n.redirectUri)===0}function Hu(e){return e.pkce||e.responseType==="code"||e.responseMode==="query"}function em(e,t){let n=!1;return Array.isArray(t.responseType)&&t.responseType.length?n=t.responseType.indexOf(e)>=0:n=t.responseType===e,n}function Vu(e){var t=Hu(e),n=t&&e.responseMode!=="fragment";return n?window.location.search:window.location.hash}function io(e){if(!Zg(window.location.href,e))return!1;var t=Hu(e.options),n=Vu(e.options);if(Xg(n))return!0;if(t){var r=Qg(n)||Yg(n);return r}return Jg(window.location.hash)}function tm(e,t){if(!t){if(!io(e))return!1;t=Vu(e.options)}return/(error=interaction_required)/i.test(t)}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const nm=Object.freeze(Object.defineProperty({__proto__:null,AuthenticatorEnrollmentData:tr,AuthenticatorVerificationData:er,ChallengeAuthenticator:Jn,ChallengePoll:ls,EnrollAuthenticator:as,EnrollPoll:gn,EnrollProfile:Xi,EnrollmentChannelData:us,GenericRemediator:Gi,Identify:ln,ReEnrollAuthenticator:Qn,ReEnrollAuthenticatorWarning:Yn,RedirectIdp:Zi,Remediator:Ce,ResetAuthenticator:Yi,SelectAuthenticatorAuthenticate:Xn,SelectAuthenticatorEnroll:Zn,SelectAuthenticatorUnlockAccount:to,SelectEnrollProfile:no,SelectEnrollmentChannel:cs,Skip:fs},Symbol.toStringTag,{value:"Module"}));/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function rm(e){pg({remediators:nm,getFlowSpecification:ro});const t=so.bind(null,e);return{interact:Su.bind(null,e),introspect:ci.bind(null,e),makeIdxResponse:Ru.bind(null,e),authenticate:xg.bind(null,e),register:qg.bind(null,e),start:t,startTransaction:t,poll:Du.bind(null,e),proceed:Nu.bind(null,e),cancel:$g.bind(null,e),recoverPassword:Kg.bind(null,e),handleInteractionCodeRedirect:Wg.bind(null,e),isInteractionRequired:tm.bind(null,e),isInteractionRequiredError:$u,handleEmailVerifyCallback:Bg.bind(null,e),isEmailVerifyCallback:Lu,parseEmailVerifyCallback:Fu,isEmailVerifyCallbackError:Vg,getSavedTransactionMeta:Et.bind(null,e),createTransactionMeta:Bi.bind(null,e),getTransactionMeta:Rp.bind(null,e),saveTransactionMeta:qi.bind(null,e),clearTransactionMeta:Cp.bind(null,e),isTransactionMetaValid:fu,setFlow:r=>{e.options.flow=r},getFlow:()=>e.options.flow,canProceed:Uu.bind(null,e),unlockAccount:zg.bind(null,e)}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const oo=function(e){return atob(e)},$t=function(e){return btoa(e)},at=typeof crypto>"u"?null:crypto;/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const sm=/windows phone|iemobile|wpdesktop/i;function xe(){return typeof document<"u"&&typeof window<"u"}function ao(){if(!xe())return!1;const e=document.documentMode;return!!e&&e<=11}function Bu(){return navigator.userAgent}function qu(){const e=Bu();return e&&!sm.test(e)}function im(){if(!xe())return!1;const e=document.documentMode;var t=e&&e<10;return typeof window.postMessage<"u"&&!t}function Ku(){return typeof at<"u"&&at!==null&&typeof at.subtle<"u"&&typeof Uint8Array<"u"}function Wu(){return typeof TextEncoder<"u"}function om(){return Ku()&&Wu()}function zu(){return xe()?window.location.protocol==="https:":!1}function Gu(){return xe()&&window.location.hostname==="localhost"}const Is=Object.freeze(Object.defineProperty({__proto__:null,getUserAgent:Bu,hasTextEncoder:Wu,isBrowser:xe,isFingerprintSupported:qu,isHTTPS:zu,isIE11OrLess:ao,isLocalhost:Gu,isPKCESupported:om,isPopupPostMessageSupported:im,isTokenVerifySupported:Ku},Symbol.toStringTag,{value:"Module"}));/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function am(e){class t{constructor(...r){const s=new e(r.length?r[0]||{}:{});this.options=Ue(s),this.emitter=new Op,this.features=Is}}return t.features=Is,t.constants=Oa,t.features=t.prototype.features=Is,Object.assign(t,{constants:Oa}),t}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function cm(e,t){return class extends e{constructor(...r){super(...r);const{storageManager:s,cookies:i,storageUtil:o}=this.options;this.storageManager=new t(s,i,o)}clearStorage(){}}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class um{constructor(){this.environments=["okta-auth-js/7.5.0"],this.maybeAddNodeEnvironment()}addEnvironment(t){this.environments.push(t)}getHttpHeader(){return{"X-Okta-User-Agent-Extended":this.environments.join(" ")}}getVersion(){return"7.5.0"}maybeAddNodeEnvironment(){if(xe()||!process||!process.versions)return;const{node:t}=process.versions;this.environments.push(`nodejs/${t}`)}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function lm(e,t,n){e.options.headers=e.options.headers||{},e.options.headers[t]=n}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function fm(e){return class extends e{constructor(...n){super(...n),this._oktaUserAgent=new um,this.http={setRequestHeader:lm.bind(null,this)}}setHeaders(n){this.options.headers=Object.assign({},this.options.headers,n)}getIssuerOrigin(){return this.options.issuer.split("/oauth2/")[0]}webfinger(n){var r="/.well-known/webfinger"+Tt(n),s={headers:{Accept:"application/jrd+json"}};return un(this,r,s)}}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function co(e){var t=$t(e);return Ju(t)}function Ju(e){return e.replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function uo(e){return e.replace(/-/g,"+").replace(/_/g,"/")}function hi(e){var t=uo(e);switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw new T("Not a valid Base64Url")}var n=oo(t);try{return decodeURIComponent(escape(n))}catch{return n}}function pi(e){for(var t=new Uint8Array(e.length),n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}function lo(e){return oo(uo(e))}function Hn(e){return Uint8Array.from(lo(e),t=>t.charCodeAt(0))}function tn(e){return $t(new Uint8Array(e).reduce((t,n)=>t+String.fromCharCode(n),""))}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Qu(e){var t=new TextEncoder().encode(e);return at.subtle.digest("SHA-256",t).then(function(n){var r=new Uint8Array(n),s=r.slice(0,16),i=String.fromCharCode.apply(null,s),o=co(i);return o})}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Yu(e,t){t=Le(t);var n="jwk",r={name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}},s=!0,i=["verify"];return delete t.use,at.subtle.importKey(n,t,r,s,i).then(function(o){var a=e.split("."),c=pi(a[0]+"."+a[1]),u=lo(a[2]),l=pi(u);return at.subtle.verify(r,o,l,c)})}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const dm=Object.freeze(Object.defineProperty({__proto__:null,atob:oo,base64ToBase64Url:Ju,base64UrlDecode:lo,base64UrlToBase64:uo,base64UrlToBuffer:Hn,base64UrlToString:hi,btoa:$t,bufferToBase64Url:tn,getOidcHash:Qu,stringToBase64Url:co,stringToBuffer:pi,verifyToken:Yu,webcrypto:at},Symbol.toStringTag,{value:"Module"}));/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class fo{constructor(t={quiet:!1}){this.queue=[],this.running=!1,this.options=t}push(t,n,...r){return new Promise((s,i)=>{this.queue.length>0&&this.options.quiet!==!1&&tt("Async method is being called but another async method is already running. The new method will be delayed until the previous method completes."),this.queue.push({method:t,thisObject:n,args:r,resolve:s,reject:i}),this.run()})}run(){if(!this.running&&this.queue.length!==0){this.running=!0;var t=this.queue.shift(),n=t.method.apply(t.thisObject,t.args);Mp(n)?n.then(t.resolve,t.reject).finally(()=>{this.running=!1,this.run()}):(t.resolve(n),this.running=!1,this.run())}}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function hm(e){return("0"+e.toString(16)).substr(-2)}function pm(e){var t=new Uint8Array(Math.ceil(e/2));at.getRandomValues(t);var n=Array.from(t,hm).join("");return n.slice(0,e)}function gm(e){var t=e||"";return t.length<si&&(t=t+pm(si-t.length)),encodeURIComponent(t).slice(0,_u)}function mm(e){var t=new TextEncoder().encode(e);return at.subtle.digest("SHA-256",t).then(function(n){var r=String.fromCharCode.apply(null,new Uint8Array(n)),s=co(r);return s})}var Pn={DEFAULT_CODE_CHALLENGE_METHOD:Wi,generateVerifier:gm,computeChallenge:mm};/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Xu(e){var t=e.split("."),n;try{n={header:JSON.parse(hi(t[0])),payload:JSON.parse(hi(t[1])),signature:t[2]}}catch{throw new T("Malformed token")}return n}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function ds(e){const{pkce:t,clientId:n,redirectUri:r,responseType:s,responseMode:i,scopes:o,acrValues:a,maxAge:c,state:u,ignoreSignature:l}=e.options,f=xe()?window.location.href:void 0;return Ue({pkce:t,clientId:n,redirectUri:r||f,responseType:s||["token","id_token"],responseMode:i,state:u||ou(),nonce:bp(),scopes:o||["openid","email"],acrValues:a,maxAge:c,ignoreSignature:l})}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function vm(e){if(!e.clientId)throw new T("A clientId must be specified in the OktaAuth constructor to get a token");if(!e.redirectUri)throw new T("The redirectUri passed to /authorize must also be passed to /token");if(!e.authorizationCode&&!e.interactionCode)throw new T("An authorization code (returned from /authorize) must be passed to /token");if(!e.codeVerifier)throw new T('The "codeVerifier" (generated and saved by your app) must be passed to /token')}function ym(e,t){var n=Ue({client_id:t.clientId,redirect_uri:t.redirectUri,grant_type:t.interactionCode?"interaction_code":"authorization_code",code_verifier:t.codeVerifier});t.interactionCode?n.interaction_code=t.interactionCode:t.authorizationCode&&(n.code=t.authorizationCode);const{clientSecret:r}=e.options;return r&&(n.client_secret=r),Tt(n).slice(1)}function wm(e,t,n){vm(t);var r=ym(e,t);const s={"Content-Type":"application/x-www-form-urlencoded"};return ze(e,{url:n.tokenUrl,method:"POST",args:r,headers:s})}function bm(e,t,n){return ze(e,{url:n.tokenUrl,method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},args:Object.entries({client_id:t.clientId,grant_type:"refresh_token",scope:n.scopes.join(" "),refresh_token:n.refreshToken}).map(function([r,s]){return r+"="+encodeURIComponent(s)}).join("&")})}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function hs(e,t){var n=t||e.options.issuer;return un(e,n+"/.well-known/openid-configuration",{cacheResponse:!0})}function _m(e,t,n){var r=e.storageManager.getHttpCache(e.options.cookies);return hs(e,t).then(function(s){var i=s.jwks_uri,o=r.getStorage(),a=o[i];if(a&&Date.now()/1e3<a.expiresAt){var c=Xs(a.response.keys,{kid:n});if(c)return c}return r.clearStorage(i),un(e,i,{cacheResponse:!0}).then(function(u){var l=Xs(u.keys,{kid:n});if(l)return l;throw new T("The key id, "+n+", was not found in the server's keys")})})}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Sm(e,t,n){const r=n.clientId,s=n.issuer,i=n.nonce,o=n.acrValues;if(!t||!s||!r)throw new T("The jwt, iss, and aud arguments are all required");if(i&&t.nonce!==i)throw new T("OAuth flow response nonce doesn't match request nonce");const a=Math.floor(Date.now()/1e3);if(t.iss!==s)throw new T("The issuer ["+t.iss+"] does not match ["+s+"]");if(t.aud!==r)throw new T("The audience ["+t.aud+"] does not match ["+r+"]");if(o&&t.acr!==o)throw new T("The acr ["+t.acr+"] does not match acr_values ["+o+"]");if(t.iat>t.exp)throw new T("The JWT expired before it was issued");if(!e.options.ignoreLifetime){if(a-e.options.maxClockSkew>t.exp)throw new T("The JWT expired and is no longer valid");if(t.iat>a+e.options.maxClockSkew)throw new T("The JWT was issued in the future")}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */async function Zu(e,t,n){if(!t||!t.idToken)throw new T("Only idTokens may be verified");const r=Xu(t.idToken),s=(n==null?void 0:n.issuer)||e.options.issuer,{issuer:i}=await hs(e,s),o=Object.assign({clientId:e.options.clientId,ignoreSignature:e.options.ignoreSignature},n,{issuer:i});if(Sm(e,r.payload,o),o.ignoreSignature==!0||!e.features.isTokenVerifySupported())return t;const a=await _m(e,t.issuer,r.header.kid);if(!await Yu(t.idToken,a))throw new T("The token signature is not valid");if(n&&n.accessToken&&t.claims.at_hash&&await Qu(n.accessToken)!==t.claims.at_hash)throw new T("Token hash verification failed");return t}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Tm(e,t){if(e.error&&e.error_description)throw new zn(e.error,e.error_description);if(e.state!==t.state)throw new T("OAuth flow response state doesn't match request state")}async function Vn(e,t,n,r){if(e.options.pkce!==!1&&(n.code||n.interaction_code))return e.token.exchangeCodeForTokens(Object.assign({},t,{authorizationCode:n.code,interactionCode:n.interaction_code}),r);t=t||ds(e),r=r||Ot(e,t);let i=t.responseType||[];!Array.isArray(i)&&i!=="none"&&(i=[i]);let o;n.scope?o=n.scope.split(" "):o=Le(t.scopes);const a=t.clientId||e.options.clientId;Tm(n,t);const c={},u=n.expires_in,l=n.token_type,f=n.access_token,d=n.id_token,g=n.refresh_token,m=Math.floor(Date.now()/1e3);if(f){const w=e.token.decode(f);c.accessToken={accessToken:f,claims:w.payload,expiresAt:Number(u)+m,tokenType:l,scopes:o,authorizeUrl:r.authorizeUrl,userinfoUrl:r.userinfoUrl}}if(g&&(c.refreshToken={refreshToken:g,expiresAt:Number(u)+m,scopes:o,tokenUrl:r.tokenUrl,authorizeUrl:r.authorizeUrl,issuer:r.issuer}),d){const w=e.token.decode(d),k={idToken:d,claims:w.payload,expiresAt:w.payload.exp-w.payload.iat+m,scopes:o,authorizeUrl:r.authorizeUrl,issuer:r.issuer,clientId:a},O={clientId:a,issuer:r.issuer,nonce:t.nonce,accessToken:f,acrValues:t.acrValues};t.ignoreSignature!==void 0&&(O.ignoreSignature=t.ignoreSignature),await Zu(e,k,O),c.idToken=k}if(i.indexOf("token")!==-1&&!c.accessToken)throw new T('Unable to parse OAuth flow response: response type "token" was requested but "access_token" was not returned.');if(i.indexOf("id_token")!==-1&&!c.idToken)throw new T('Unable to parse OAuth flow response: response type "id_token" was requested but "id_token" was not returned.');return{tokens:c,state:n.state,code:n.code,responseType:i}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Om(e,t,n){n=n||Ot(e,t),t=Object.assign({},ds(e),Le(t));const{authorizationCode:r,interactionCode:s,codeVerifier:i,clientId:o,redirectUri:a,scopes:c,ignoreSignature:u,state:l,acrValues:f}=t;var d={clientId:o,redirectUri:a,authorizationCode:r,interactionCode:s,codeVerifier:i};return wm(e,d,n).then(g=>{const m=["token"];return c.indexOf("openid")!==-1&&m.push("id_token"),Vn(e,{clientId:o,redirectUri:a,scopes:c,responseType:m,ignoreSignature:u,acrValues:f},g,n).then(k=>(k.code=r,k.state=l,k))}).finally(()=>{e.transactionManager.clear()})}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */async function Em(e,t,n){return t||(t=(await e.tokenManager.getTokens()).accessToken),n||(n=(await e.tokenManager.getTokens()).idToken),!t||!ot(t)?Promise.reject(new T("getUserInfo requires an access token object")):!n||!_t(n)?Promise.reject(new T("getUserInfo requires an ID token object")):ze(e,{url:t.userinfoUrl,method:"GET",accessToken:t.accessToken}).then(r=>r.sub===n.claims.sub?r:Promise.reject(new T("getUserInfo request was rejected due to token mismatch"))).catch(function(r){if(r.xhr&&(r.xhr.status===401||r.xhr.status===403)){var s;if(r.xhr.headers&&Ta(r.xhr.headers.get)&&r.xhr.headers.get("WWW-Authenticate")?s=r.xhr.headers.get("WWW-Authenticate"):Ta(r.xhr.getResponseHeader)&&(s=r.xhr.getResponseHeader("WWW-Authenticate")),s){var i=s.match(/error="(.*?)"/)||[],o=s.match(/error_description="(.*?)"/)||[],a=i[1],c=o[1];a&&c&&(r=new zn(a,c))}}throw r})}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function el(e,t,n){e.addEventListener?e.addEventListener(t,n):e.attachEvent("on"+t,n)}function tl(e,t,n){e.removeEventListener?e.removeEventListener(t,n):e.detachEvent("on"+t,n)}function Am(e){var t=document.createElement("iframe");return t.style.display="none",t.src=e,document.body.appendChild(t)}function km(e,t){var n=t.popupTitle||"External Identity Provider User Authentication",r="toolbar=no, scrollbars=yes, resizable=yes, top=100, left=500, width=600, height=600";return window.open(e,n,r)}function Ca(e,t,n){var r,s,i=new Promise(function(o,a){r=function(u){if(!(!u.data||u.data.state!==n)){if(u.origin!==e.getIssuerOrigin())return a(new T("The request does not match client configuration"));o(u.data)}},el(window,"message",r),s=setTimeout(function(){a(new T("OAuth flow timed out"))},t||12e4)});return i.finally(function(){clearTimeout(s),tl(window,"message",r)})}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Rm(e){if(!e.features.isPKCESupported()){var t="PKCE requires a modern browser with encryption support running in a secure context.";throw e.features.isHTTPS()||(t+=`
The current page is not being served with HTTPS protocol. PKCE requires secure HTTPS protocol.`),e.features.hasTextEncoder()||(t+=`
"TextEncoder" is not defined. To use PKCE, you may need to include a polyfill/shim for this browser.`),new T(t)}}async function Cm(e,t){t=t||e.options.codeChallengeMethod||Wi;var r=(await hs(e)).code_challenge_methods_supported||[];if(r.indexOf(t)===-1)throw new T("Invalid code_challenge_method");return t}async function xm(e,t){let{codeVerifier:n,codeChallenge:r,codeChallengeMethod:s}=t;return r=r||e.options.codeChallenge,r||(Rm(e),n=n||Pn.generateVerifier(),r=await Pn.computeChallenge(n)),s=await Cm(e,s),t=Object.assign(Object.assign({},t),{responseType:"code",codeVerifier:n,codeChallenge:r,codeChallengeMethod:s}),t}async function ho(e,t={}){const n=ds(e);return t=Object.assign(Object.assign({},n),t),t.pkce===!1?t:xm(e,t)}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Pm(e){if(!e.clientId)throw new T("A clientId must be specified in the OktaAuth constructor to get a token");if(cn(e.responseType)&&e.responseType.indexOf(" ")!==-1)throw new T("Multiple OAuth responseTypes must be defined as an array");var t={client_id:e.clientId,code_challenge:e.codeChallenge,code_challenge_method:e.codeChallengeMethod,display:e.display,idp:e.idp,idp_scope:e.idpScope,login_hint:e.loginHint,max_age:e.maxAge,nonce:e.nonce,prompt:e.prompt,redirect_uri:e.redirectUri,response_mode:e.responseMode,response_type:e.responseType,sessionToken:e.sessionToken,state:e.state,acr_values:e.acrValues,enroll_amr_values:e.enrollAmrValues};if(t=Ue(t),["idp_scope","response_type","enroll_amr_values"].forEach(function(n){Array.isArray(t[n])&&(t[n]=t[n].join(" "))}),e.responseType.indexOf("id_token")!==-1&&e.scopes.indexOf("openid")===-1)throw new T("openid scope must be specified in the scopes argument when requesting an id_token");return e.scopes&&(t.scope=e.scopes.join(" ")),t}function po(e){var t=Pm(e);return Tt(Object.assign(Object.assign({},t),e.extraParams&&Object.assign({},e.extraParams)))}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function nl(e,t){if(arguments.length>2)return Promise.reject(new T('As of version 3.0, "getToken" takes only a single set of options'));t=t||{};const n=t.popupWindow;return t.popupWindow=void 0,ho(e,t).then(function(r){var s={prompt:"none",responseMode:"okta_post_message",display:null},i={display:"popup"};t.sessionToken?Object.assign(r,s):t.idp&&Object.assign(r,i);var o,a,c;c=Ot(e,r),a=t.codeVerifier?c.tokenUrl:c.authorizeUrl,o=a+po(r);var u;switch(r.sessionToken||r.display===null?u="IFRAME":r.display==="popup"?u="POPUP":u="IMPLICIT",u){case"IFRAME":var l=Ca(e,t.timeout,r.state),f=Am(o);return l.then(function(m){return Vn(e,r,m,c)}).finally(function(){var m;document.body.contains(f)&&((m=f.parentElement)===null||m===void 0||m.removeChild(f))});case"POPUP":var d;if(r.responseMode==="okta_post_message"){if(!e.features.isPopupPostMessageSupported())throw new T("This browser doesn't have full postMessage support");d=Ca(e,t.timeout,r.state)}n&&n.location.assign(o);var g=new Promise(function(m,w){var k=setInterval(function(){(!n||n.closed)&&(clearInterval(k),w(new T("Unable to parse OAuth flow response")))},100);d.then(function(O){clearInterval(k),m(O)}).catch(function(O){clearInterval(k),w(O)})});return g.then(function(m){return Vn(e,r,m,c)}).finally(function(){n&&!n.closed&&n.close()});default:throw new T("The full page redirect flow is not supported")}})}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function go(e,t){return arguments.length>2?Promise.reject(new T('As of version 3.0, "getWithoutPrompt" takes only a single set of options')):(t=Le(t)||{},Object.assign(t,{prompt:"none",responseMode:"okta_post_message",display:null}),nl(e,t))}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Im(e,t){if(arguments.length>2)return Promise.reject(new T('As of version 3.0, "getWithPopup" takes only a single set of options'));const n=km("/",t);return t=Le(t)||{},Object.assign(t,{display:"popup",responseMode:"okta_post_message",popupWindow:n}),nl(e,t)}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */async function Mm(e,t){if(arguments.length>2)return Promise.reject(new T('As of version 3.0, "getWithRedirect" takes only a single set of options'));t=Le(t)||{};const n=await ho(e,t),r=cu(e,n),s=r.urls.authorizeUrl+po(n);e.transactionManager.save(r),e.options.setLocation?e.options.setLocation(s):window.location.assign(s)}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function jm(e){var t=e.token.parseFromUrl._getHistory(),n=e.token.parseFromUrl._getDocument(),r=e.token.parseFromUrl._getLocation();t&&t.replaceState?t.replaceState(null,n.title,r.pathname+r.search):r.hash=""}function Lm(e){var t=e.token.parseFromUrl._getHistory(),n=e.token.parseFromUrl._getDocument(),r=e.token.parseFromUrl._getLocation();t&&t.replaceState?t.replaceState(null,n.title,r.pathname+r.hash):r.search=""}function rl(e){var t=e.options.pkce?"query":"fragment",n=e.options.responseMode||t;return n}function sl(e,t){t=t||{},cn(t)?t={url:t}:t=t;var n=t.url,r=t.responseMode||rl(e),s=e.token.parseFromUrl._getLocation(),i;if(r==="query"?i=n?n.substring(n.indexOf("?")):s.search:i=n?n.substring(n.indexOf("#")):s.hash,!i)throw new T("Unable to parse a token from the url");return ju(i)}function Fm(e,t){(t.responseMode||rl(e))==="query"?Lm(e):jm(e)}async function Um(e,t){t=t||{},cn(t)?t={url:t}:t=t;const n=sl(e,t),r=n.state,s=e.transactionManager.load({state:r});if(!s)throw e.options.pkce?new T("Could not load PKCE codeVerifier from storage. This may indicate the auth flow has already completed or multiple auth flows are executing concurrently.",void 0):new T("Unable to retrieve OAuth redirect params from storage");const i=s.urls;return delete s.urls,t.url||Fm(e,t),Vn(e,s,n,i).catch(o=>{throw $u(o)||e.transactionManager.clear({state:r}),o}).then(o=>(e.transactionManager.clear({state:r}),o))}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Nm(e,t){return e.refreshToken===t.refreshToken}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */async function mo(e,t,n){const{clientId:r}=e.options;if(!r)throw new T("A clientId must be specified in the OktaAuth constructor to renew tokens");try{const s=Object.assign({},t,{clientId:r}),i=await bm(e,s,n),o=Ot(e,t),{tokens:a}=await Vn(e,s,i,o),{refreshToken:c}=a;return c&&!Nm(c,n)&&e.tokenManager.updateRefreshToken(c),a}catch(s){throw Gg(s)&&e.tokenManager.removeRefreshToken(),s}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function il(){throw new T("Renew must be passed a token with an array of scopes and an accessToken or idToken")}function xa(e,t){if(_t(e))return t.idToken;if(ot(e))return t.accessToken;il()}async function Dm(e,t){!_t(t)&&!ot(t)&&il();let n=e.tokenManager.getTokensSync();if(n.refreshToken)return n=await mo(e,{scopes:t.scopes},n.refreshToken),xa(t,n);var r;e.options.pkce?r="code":ot(t)?r="token":r="id_token";const{scopes:s,authorizeUrl:i,userinfoUrl:o,issuer:a}=t;return go(e,{responseType:r,scopes:s,authorizeUrl:i,userinfoUrl:o,issuer:a}).then(function(c){return xa(t,c.tokens)})}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */async function $m(e,t){var n;const r=(n=t==null?void 0:t.tokens)!==null&&n!==void 0?n:e.tokenManager.getTokensSync();if(r.refreshToken)return mo(e,t||{},r.refreshToken);if(!r.accessToken&&!r.idToken)throw new T("renewTokens() was called but there is no existing token");const s=r.accessToken||{},i=r.idToken||{},o=s.scopes||i.scopes;if(!o)throw new T("renewTokens: invalid tokens: could not read scopes");const a=s.authorizeUrl||i.authorizeUrl;if(!a)throw new T("renewTokens: invalid tokens: could not read authorizeUrl");const c=s.userinfoUrl||e.options.userinfoUrl,u=i.issuer||e.options.issuer;if(t=Object.assign({scopes:o,authorizeUrl:a,userinfoUrl:c,issuer:u},t),e.options.pkce)t.responseType="code";else{const{responseType:l}=ds(e);t.responseType=l}return go(e,t).then(l=>l.tokens)}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */async function Hm(e,t){let n="",r="";if(t&&(n=t.accessToken,r=t.refreshToken),!n&&!r)throw new T("A valid access or refresh token object is required");var s=e.options.clientId,i=e.options.clientSecret;if(!s)throw new T("A clientId must be specified in the OktaAuth constructor to revoke a token");var o=Ot(e).revokeUrl,a=Tt({token_type_hint:r?"refresh_token":"access_token",token:r||n}).slice(1),c=$t(i?`${s}:${i}`:s);return At(e,o,a,{headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic "+c}})}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const Vm={accessToken:"access_token",idToken:"id_token",refreshToken:"refresh_token"};async function Bm(e,t,n){var r;let s,i=e.options.clientId,o=e.options.clientSecret;if(n||(n=e.tokenManager.getTokens()[t]),!n)throw new T(`unable to find ${t} in storage or fn params`);if(t!==ni.ACCESS?s=n==null?void 0:n.issuer:s=(r=n==null?void 0:n.claims)===null||r===void 0?void 0:r.iss,s??(s=e.options.issuer),!i)throw new T("A clientId must be specified in the OktaAuth constructor to introspect a token");if(!s)throw new T("Unable to find issuer");const{introspection_endpoint:a}=await hs(e,s),c=$t(o?`${i}:${o}`:i),u=Tt({token_type_hint:Vm[t],token:n[t]}).slice(1);return At(e,a,u,{headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic "+c}})}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function qm(e,t){const n=e.options.issuer,r=Ot(e,t);return{issuer:n,urls:r,clientId:t.clientId,redirectUri:t.redirectUri,responseType:t.responseType,responseMode:t.responseMode,state:t.state,acrValues:t.acrValues,enrollAmrValues:t.enrollAmrValues}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Km(e){const{clientId:t,redirectUri:n,responseMode:r,state:s}=e.options,i=xe()?window.location.href:void 0;return Ue({clientId:t,redirectUri:n||i,responseMode:r,state:s||ou(),responseType:"none",prompt:"enroll_authenticator"})}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Wm(e){if(e=Object.assign(Object.assign({},e),{responseType:"none",prompt:"enroll_authenticator",maxAge:0}),!e.enrollAmrValues)throw new T("enroll_amr_values must be specified");if(!e.acrValues)throw new T("acr_values must be specified");return delete e.scopes,delete e.nonce,e}function zm(e,t){return Wm(Object.assign(Object.assign({},Km(e)),t))}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Gm(e,t){t=Le(t)||{};const n=zm(e,t),r=qm(e,n),s=r.urls.authorizeUrl+po(n);e.transactionManager.save(r),e.options.setLocation?e.options.setLocation(s):window.location.assign(s)}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Jm(e,t){const n=c=>fo.prototype.push.bind(t,c,null),r=n(Mm.bind(null,e)),s=n(Um.bind(null,e)),i=Object.assign(s,{_getHistory:function(){return window.history},_getLocation:function(){return window.location},_getDocument:function(){return window.document}}),o={prepareTokenParams:ho.bind(null,e),exchangeCodeForTokens:Om.bind(null,e),getWithoutPrompt:go.bind(null,e),getWithPopup:Im.bind(null,e),getWithRedirect:r,parseFromUrl:i,decode:Xu,revoke:Hm.bind(null,e),renew:Dm.bind(null,e),renewTokensWithRefresh:mo.bind(null,e),renewTokens:$m.bind(null,e),getUserInfo:(c,u)=>Em(e,c,u),verify:Zu.bind(null,e),isLoginRedirect:io.bind(null,e),introspect:Bm.bind(null,e)};return["getWithoutPrompt","getWithPopup","revoke","renew","renewTokensWithRefresh","renewTokens"].forEach(c=>{o[c]=n(o[c])}),o}function Qm(e){return{authorize:{enrollAuthenticator:Gm.bind(null,e)}}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function vr(e,t){if(!_t(e)&&!ot(e)&&!Pt(e))throw new T("Token must be an Object with scopes, expiresAt, and one of: an idToken, accessToken, or refreshToken property");if(t==="accessToken"&&!ot(e))throw new T("invalid accessToken");if(t==="idToken"&&!_t(e))throw new T("invalid idToken");if(t==="refreshToken"&&!Pt(e))throw new T("invalid refreshToken")}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class vo{constructor(t){this.localOffset=parseInt(t||0)}static create(){var t=0;return new vo(t)}now(){var t=(Date.now()+this.localOffset)/1e3;return t}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const gi="expired",Sn="renewed",It="added",Mt="removed",Ym="error",Tn="set_storage";/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const Pa={autoRenew:!0,autoRemove:!0,syncStorage:!0,clearPendingRemoveTokens:!0,storage:void 0,expireEarlySeconds:30,storageKey:Ki};function Xm(){return{expireTimeouts:{},renewPromise:null}}class Zm{constructor(t,n={}){if(this.sdk=t,this.emitter=t.emitter,!this.emitter)throw new T("Emitter should be initialized before TokenManager");n=Object.assign({},Pa,Ue(n)),Gu()||(n.expireEarlySeconds=Pa.expireEarlySeconds),this.options=n;const r=Ue({storageKey:n.storageKey,secure:n.secure});typeof n.storage=="object"?r.storageProvider=n.storage:n.storage&&(r.storageType=n.storage),this.storage=t.storageManager.getTokenStorage(Object.assign(Object.assign({},r),{useSeparateCookies:!0})),this.clock=vo.create(),this.state=Xm()}on(t,n,r){r?this.emitter.on(t,n,r):this.emitter.on(t,n)}off(t,n){n?this.emitter.off(t,n):this.emitter.off(t)}start(){this.options.clearPendingRemoveTokens&&this.clearPendingRemoveTokens(),this.setExpireEventTimeoutAll(),this.state.started=!0}stop(){this.clearExpireEventTimeoutAll(),this.state.started=!1}isStarted(){return!!this.state.started}getOptions(){return Le(this.options)}getExpireTime(t){const n=this.options.expireEarlySeconds||0;var r=t.expiresAt-n;return r}hasExpired(t){var n=this.getExpireTime(t);return n<=this.clock.now()}emitExpired(t,n){this.emitter.emit(gi,t,n)}emitRenewed(t,n,r){this.emitter.emit(Sn,t,n,r)}emitAdded(t,n){this.emitter.emit(It,t,n)}emitRemoved(t,n){this.emitter.emit(Mt,t,n)}emitError(t){this.emitter.emit(Ym,t)}clearExpireEventTimeout(t){clearTimeout(this.state.expireTimeouts[t]),delete this.state.expireTimeouts[t],this.state.renewPromise=null}clearExpireEventTimeoutAll(){var t=this.state.expireTimeouts;for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&this.clearExpireEventTimeout(n)}setExpireEventTimeout(t,n){if(!Pt(n)){var r=this.getExpireTime(n),s=Math.max(r-this.clock.now(),0)*1e3;this.clearExpireEventTimeout(t);var i=setTimeout(()=>{this.emitExpired(t,n)},s);this.state.expireTimeouts[t]=i}}setExpireEventTimeoutAll(){var t=this.storage.getStorage();for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var r=t[n];this.setExpireEventTimeout(n,r)}}resetExpireEventTimeoutAll(){this.clearExpireEventTimeoutAll(),this.setExpireEventTimeoutAll()}add(t,n){var r=this.storage.getStorage();vr(n),r[t]=n,this.storage.setStorage(r),this.emitSetStorageEvent(),this.emitAdded(t,n),this.setExpireEventTimeout(t,n)}getSync(t){var n=this.storage.getStorage();return n[t]}async get(t){return this.getSync(t)}getTokensSync(){const t={},n=this.storage.getStorage();return Object.keys(n).forEach(r=>{const s=n[r];ot(s)?t.accessToken=s:_t(s)?t.idToken=s:Pt(s)&&(t.refreshToken=s)}),t}async getTokens(){return this.getTokensSync()}getStorageKeyByType(t){const n=this.storage.getStorage();return Object.keys(n).filter(s=>{const i=n[s];return ot(i)&&t==="accessToken"||_t(i)&&t==="idToken"||Pt(i)&&t==="refreshToken"})[0]}getTokenType(t){if(ot(t))return"accessToken";if(_t(t))return"idToken";if(Pt(t))return"refreshToken";throw new T("Unknown token type")}emitSetStorageEvent(){if(ao()){const t=this.storage.getStorage();this.emitter.emit(Tn,t)}}getStorage(){return this.storage}setTokens(t,n,r,s){const i=(d,g)=>{const m=this.getTokenType(g);m==="accessToken"?n&&n(d,g):m==="idToken"?r&&r(d,g):m==="refreshToken"&&s&&s(d,g)},o=(d,g)=>{this.emitAdded(d,g),this.setExpireEventTimeout(d,g),i(d,g)},a=(d,g,m)=>{this.emitRenewed(d,g,m),this.clearExpireEventTimeout(d),this.setExpireEventTimeout(d,g),i(d,g)},c=(d,g)=>{this.clearExpireEventTimeout(d),this.emitRemoved(d,g),i(d,g)},u=["idToken","accessToken","refreshToken"],l=this.getTokensSync();u.forEach(d=>{const g=t[d];g&&vr(g,d)});const f=u.reduce((d,g)=>{const m=t[g];if(m){const w=this.getStorageKeyByType(g)||g;d[w]=m}return d},{});this.storage.setStorage(f),this.emitSetStorageEvent(),u.forEach(d=>{const g=t[d],m=l[d],w=this.getStorageKeyByType(d)||d;g&&m?(c(w,m),o(w,g),a(w,g,m)):g?o(w,g):m&&c(w,m)})}remove(t){this.clearExpireEventTimeout(t);var n=this.storage.getStorage(),r=n[t];delete n[t],this.storage.setStorage(n),this.emitSetStorageEvent(),this.emitRemoved(t,r)}async renewToken(t){var n;return(n=this.sdk.token)===null||n===void 0?void 0:n.renew(t)}validateToken(t){return vr(t)}renew(t){if(this.state.renewPromise)return this.state.renewPromise;try{var n=this.getSync(t);if(!n)throw new T("The tokenManager has no token for the key: "+t)}catch(s){return this.emitError(s),Promise.reject(s)}return this.clearExpireEventTimeout(t),this.state.renewPromise=this.sdk.token.renewTokens().then(s=>{this.setTokens(s);const i=this.getTokenType(n);return s[i]}).catch(s=>{throw this.remove(t),s.tokenKey=t,this.emitError(s),s}).finally(()=>{this.state.renewPromise=null})}clear(){const t=this.getTokensSync();this.clearExpireEventTimeoutAll(),this.storage.clearStorage(),this.emitSetStorageEvent(),Object.keys(t).forEach(n=>{this.emitRemoved(n,t[n])})}clearPendingRemoveTokens(){const t=this.storage.getStorage(),n={};Object.keys(t).forEach(r=>{t[r].pendingRemove&&(n[r]=t[r],delete t[r])}),this.storage.setStorage(t),this.emitSetStorageEvent(),Object.keys(n).forEach(r=>{this.clearExpireEventTimeout(r),this.emitRemoved(r,n[r])})}updateRefreshToken(t){const n=this.getStorageKeyByType("refreshToken")||ri;var r=this.storage.getStorage();vr(t),r[n]=t,this.storage.setStorage(r),this.emitSetStorageEvent()}removeRefreshToken(){const t=this.getStorageKeyByType("refreshToken")||ri;this.remove(t)}addPendingRemoveFlags(){const t=this.getTokensSync();Object.keys(t).forEach(n=>{t[n].pendingRemove=!0}),this.setTokens(t)}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */var Ar={browserHasLocalStorage:function(){try{var e=this.getLocalStorage();return this.testStorage(e)}catch{return!1}},browserHasSessionStorage:function(){try{var e=this.getSessionStorage();return this.testStorage(e)}catch{return!1}},testStorageType:function(e){var t=!1;switch(e){case"sessionStorage":t=this.browserHasSessionStorage();break;case"localStorage":t=this.browserHasLocalStorage();break;case"cookie":case"memory":t=!0;break;default:t=!1;break}return t},getStorageByType:function(e,t){let n;switch(e){case"sessionStorage":n=this.getSessionStorage();break;case"localStorage":n=this.getLocalStorage();break;case"cookie":n=this.getCookieStorage(t);break;case"memory":n=this.getInMemoryStorage();break;default:throw new T(`Unrecognized storage option: ${e}`)}return n},findStorageType:function(e){let t,n;return e=e.slice(),t=e.shift(),n=e.length?e[0]:null,!n||this.testStorageType(t)?t:(tt(`This browser doesn't support ${t}. Switching to ${n}.`),this.findStorageType(e))},getLocalStorage:function(){return ao()&&!window.onstorage&&(window.onstorage=function(){}),localStorage},getSessionStorage:function(){return sessionStorage},getCookieStorage:function(e){const t=e.secure,n=e.sameSite,r=e.sessionCookie;if(typeof t>"u"||typeof n>"u")throw new T('getCookieStorage: "secure" and "sameSite" options must be provided');const s={getItem:this.storage.get,setItem:(i,o,a="2200-01-01T00:00:00.000Z")=>{a=r?null:a,this.storage.set(i,o,a,{secure:t,sameSite:n})},removeItem:i=>{this.storage.delete(i)}};return e.useSeparateCookies?{getItem:function(i){var o=s.getItem(),a={};return Object.keys(o).forEach(c=>{c.indexOf(i)===0&&(a[c.replace(`${i}_`,"")]=JSON.parse(o[c]))}),JSON.stringify(a)},setItem:function(i,o){var a=JSON.parse(this.getItem(i));o=JSON.parse(o),Object.keys(o).forEach(c=>{var u=i+"_"+c,l=JSON.stringify(o[c]);s.setItem(u,l),delete a[c]}),Object.keys(a).forEach(c=>{s.removeItem(i+"_"+c)})},removeItem:function(i){var o=JSON.parse(this.getItem(i));Object.keys(o).forEach(a=>{s.removeItem(i+"_"+a)})}}:s},inMemoryStore:{},getInMemoryStorage:function(){return{getItem:e=>this.inMemoryStore[e],setItem:(e,t)=>{this.inMemoryStore[e]=t}}},testStorage:function(e){var t="okta-test-storage";try{return e.setItem(t,t),e.removeItem(t),!0}catch{return!1}},storage:{set:function(e,t,n,r){const{sameSite:s,secure:i}=r;if(typeof i>"u"||typeof s>"u")throw new T('storage.set: "secure" and "sameSite" options must be provided');var o={path:r.path||"/",secure:i,sameSite:s};return Date.parse(n)&&(o.expires=new Date(n)),pr.set(e,t,o),this.get(e)},get:function(e){return arguments.length?pr.get(e):pr.get()},delete:function(e){return pr.remove(e,{path:"/"})}}};/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function ev(e){return class extends e{setOriginalUri(n,r){Ar.getSessionStorage().setItem(Tr,n),r=r||this.options.state,r&&this.storageManager.getOriginalUriStorage().setItem(r,n)}getOriginalUri(n){if(n=n||this.options.state,n){const i=this.storageManager.getOriginalUriStorage().getItem(n);if(i)return i}const r=Ar.getSessionStorage();return r&&r.getItem(Tr)||void 0}removeOriginalUri(n){if(Ar.getSessionStorage().removeItem(Tr),n=n||this.options.state,n){const s=this.storageManager.getOriginalUriStorage();s.removeItem&&s.removeItem(n)}}}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function tv(e,t){var n;const r=ev(e);return n=class extends r{constructor(...i){super(...i),this.transactionManager=new t(Object.assign({storageManager:this.storageManager},this.options.transactionManager)),this.pkce={DEFAULT_CODE_CHALLENGE_METHOD:Pn.DEFAULT_CODE_CHALLENGE_METHOD,generateVerifier:Pn.generateVerifier,computeChallenge:Pn.computeChallenge},this._pending={handleLogin:!1},this._tokenQueue=new fo,this.token=Jm(this,this._tokenQueue),this.tokenManager=new Zm(this,this.options.tokenManager),this.endpoints=Qm(this)}clearStorage(){super.clearStorage(),this.tokenManager.clear()}async isAuthenticated(i={}){const{autoRenew:o,autoRemove:a}=this.tokenManager.getOptions(),c=i.onExpiredToken?i.onExpiredToken==="renew":o,u=i.onExpiredToken?i.onExpiredToken==="remove":a;let{accessToken:l}=this.tokenManager.getTokensSync();if(l&&this.tokenManager.hasExpired(l))if(l=void 0,c)try{l=await this.tokenManager.renew("accessToken")}catch{}else u&&this.tokenManager.remove("accessToken");let{idToken:f}=this.tokenManager.getTokensSync();if(f&&this.tokenManager.hasExpired(f))if(f=void 0,c)try{f=await this.tokenManager.renew("idToken")}catch{}else u&&this.tokenManager.remove("idToken");return!!(l&&f)}async signInWithRedirect(i={}){const{originalUri:o}=i,a=Gn(i,["originalUri"]);if(!this._pending.handleLogin){this._pending.handleLogin=!0;try{o&&this.setOriginalUri(o);const c=Object.assign({scopes:this.options.scopes||["openid","email","profile"]},a);await this.token.getWithRedirect(c)}finally{this._pending.handleLogin=!1}}}async getUser(){const{idToken:i,accessToken:o}=this.tokenManager.getTokensSync();return this.token.getUserInfo(o,i)}getIdToken(){const{idToken:i}=this.tokenManager.getTokensSync();return i?i.idToken:void 0}getAccessToken(){const{accessToken:i}=this.tokenManager.getTokensSync();return i?i.accessToken:void 0}getRefreshToken(){const{refreshToken:i}=this.tokenManager.getTokensSync();return i?i.refreshToken:void 0}async storeTokensFromRedirect(){const{tokens:i,responseType:o}=await this.token.parseFromUrl();o!=="none"&&this.tokenManager.setTokens(i)}isLoginRedirect(){return io(this)}isPKCE(){return!!this.options.pkce}hasResponseType(i){return em(i,this.options)}isAuthorizationCodeFlow(){return this.hasResponseType("code")}async invokeApiMethod(i){if(!i.accessToken){const o=(await this.tokenManager.getTokens()).accessToken;i.accessToken=o==null?void 0:o.accessToken}return ze(this,i)}async revokeAccessToken(i){if(!i){i=(await this.tokenManager.getTokens()).accessToken;const o=this.tokenManager.getStorageKeyByType("accessToken");this.tokenManager.remove(o)}return i?this.token.revoke(i):Promise.resolve(null)}async revokeRefreshToken(i){if(!i){i=(await this.tokenManager.getTokens()).refreshToken;const o=this.tokenManager.getStorageKeyByType("refreshToken");this.tokenManager.remove(o)}return i?this.token.revoke(i):Promise.resolve(null)}getSignOutRedirectUrl(i={}){let{idToken:o,postLogoutRedirectUri:a,state:c}=i;if(o||(o=this.tokenManager.getTokensSync().idToken),!o)return"";a===void 0&&(a=this.options.postLogoutRedirectUri);const u=Ot(this).logoutUrl,l=o.idToken;let f=u+"?id_token_hint="+encodeURIComponent(l);return a&&(f+="&post_logout_redirect_uri="+encodeURIComponent(a)),c&&(f+="&state="+encodeURIComponent(c)),f}async signOut(i){i=Object.assign({},i);const o=window.location.origin,a=window.location.href,c=i.postLogoutRedirectUri===null?null:i.postLogoutRedirectUri||this.options.postLogoutRedirectUri||o,u=i==null?void 0:i.state;let l=i.accessToken,f=i.refreshToken;const d=i.revokeAccessToken!==!1,g=i.revokeRefreshToken!==!1;g&&typeof f>"u"&&(f=this.tokenManager.getTokensSync().refreshToken),d&&typeof l>"u"&&(l=this.tokenManager.getTokensSync().accessToken),i.idToken||(i.idToken=this.tokenManager.getTokensSync().idToken),g&&f&&await this.revokeRefreshToken(f),d&&l&&await this.revokeAccessToken(l);const m=this.getSignOutRedirectUrl(Object.assign(Object.assign({},i),{postLogoutRedirectUri:c}));if(m)return i.clearTokensBeforeRedirect?this.tokenManager.clear():this.tokenManager.addPendingRemoveFlags(),window.location.assign(m),!0;{const w=await this.closeSession(),k=new URL(c||o);return u&&k.searchParams.append("state",u),c===a?window.location.href=k.href:window.location.assign(k.href),w}}},n.crypto=dm,n}var yo={exports:{}};class ol extends Error{constructor(t){super(t||"Promise was canceled"),this.name="CancelError"}get isCanceled(){return!0}}class ps{static fn(t){return(...n)=>new ps((r,s,i)=>{n.push(i),t(...n).then(r,s)})}constructor(t){this._cancelHandlers=[],this._isPending=!0,this._isCanceled=!1,this._rejectOnCancel=!0,this._promise=new Promise((n,r)=>{this._reject=r;const s=a=>{(!this._isCanceled||!o.shouldReject)&&(this._isPending=!1,n(a))},i=a=>{this._isPending=!1,r(a)},o=a=>{if(!this._isPending)throw new Error("The `onCancel` handler was attached after the promise settled.");this._cancelHandlers.push(a)};return Object.defineProperties(o,{shouldReject:{get:()=>this._rejectOnCancel,set:a=>{this._rejectOnCancel=a}}}),t(s,i,o)})}then(t,n){return this._promise.then(t,n)}catch(t){return this._promise.catch(t)}finally(t){return this._promise.finally(t)}cancel(t){if(!(!this._isPending||this._isCanceled)){if(this._isCanceled=!0,this._cancelHandlers.length>0)try{for(const n of this._cancelHandlers)n()}catch(n){this._reject(n);return}this._rejectOnCancel&&this._reject(new ol(t))}}get isCanceled(){return this._isCanceled}}Object.setPrototypeOf(ps.prototype,Promise.prototype);yo.exports=ps;yo.exports.CancelError=ol;var nv=yo.exports;const rv=Vi(nv);/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const sv=null,Ia={updateAuthStatePromise:null,canceledTimes:0},Ms="authStateChange",iv=10,ov=(e,t)=>e?e.isAuthenticated===t.isAuthenticated&&JSON.stringify(e.idToken)===JSON.stringify(t.idToken)&&JSON.stringify(e.accessToken)===JSON.stringify(t.accessToken)&&e.error===t.error:!1;class av{constructor(t){if(!t.emitter)throw new T("Emitter should be initialized before AuthStateManager");this._sdk=t,this._pending=Object.assign({},Ia),this._authState=sv,this._logOptions={},this._prevAuthState=null,this._transformQueue=new fo({quiet:!0}),t.tokenManager.on(It,(n,r)=>{this._setLogOptions({event:It,key:n,token:r}),this.updateAuthState()}),t.tokenManager.on(Mt,(n,r)=>{this._setLogOptions({event:Mt,key:n,token:r}),this.updateAuthState()})}_setLogOptions(t){this._logOptions=t}getAuthState(){return this._authState}getPreviousAuthState(){return this._prevAuthState}async updateAuthState(){const{transformAuthState:t,devMode:n}=this._sdk.options,r=a=>{const{event:c,key:u,token:l}=this._logOptions;_n().group(`OKTA-AUTH-JS:updateAuthState: Event:${c} Status:${a}`),_n().log(u,l),_n().log("Current authState",this._authState),_n().groupEnd(),this._logOptions={}},s=a=>{if(ov(this._authState,a)){n&&r("unchanged");return}this._prevAuthState=this._authState,this._authState=a,this._sdk.emitter.emit(Ms,Object.assign({},a)),n&&r("emitted")},i=a=>this._pending.updateAuthStatePromise.then(()=>{const c=this._pending.updateAuthStatePromise;return c&&c!==a?i(c):this.getAuthState()});if(this._pending.updateAuthStatePromise){if(this._pending.canceledTimes>=iv)return n&&r("terminated"),i(this._pending.updateAuthStatePromise);this._pending.updateAuthStatePromise.cancel()}const o=new rv((a,c,u)=>{u.shouldReject=!1,u(()=>{this._pending.updateAuthStatePromise=null,this._pending.canceledTimes=this._pending.canceledTimes+1,n&&r("canceled")});const l=f=>{if(o.isCanceled){a();return}s(f),a(),this._pending=Object.assign({},Ia)};this._sdk.isAuthenticated().then(()=>{if(o.isCanceled){a();return}const{accessToken:f,idToken:d,refreshToken:g}=this._sdk.tokenManager.getTokensSync(),m={accessToken:f,idToken:d,refreshToken:g,isAuthenticated:!!(f&&d)};(t?this._transformQueue.push(t,null,this._sdk,m):Promise.resolve(m)).then(k=>l(k)).catch(k=>l({accessToken:f,idToken:d,refreshToken:g,isAuthenticated:!1,error:k}))})});return this._pending.updateAuthStatePromise=o,i(o)}subscribe(t){this._sdk.emitter.on(Ms,t)}unsubscribe(t){this._sdk.emitter.off(Ms,t)}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class cv{constructor(t,n={}){this.started=!1,this.tokenManager=t,this.options=n,this.renewTimeQueue=[],this.onTokenExpiredHandler=this.onTokenExpiredHandler.bind(this)}shouldThrottleRenew(){let t=!1;if(this.renewTimeQueue.push(Date.now()),this.renewTimeQueue.length>=10){const n=this.renewTimeQueue.shift();t=this.renewTimeQueue[this.renewTimeQueue.length-1]-n<30*1e3}return t}requiresLeadership(){return!!this.options.syncStorage&&xe()}processExpiredTokens(){const n=this.tokenManager.getStorage().getStorage();Object.keys(n).forEach(r=>{const s=n[r];!Pt(s)&&this.tokenManager.hasExpired(s)&&this.onTokenExpiredHandler(r)})}onTokenExpiredHandler(t){if(this.options.autoRenew)if(this.shouldThrottleRenew()){const n=new T("Too many token renew requests");this.tokenManager.emitError(n)}else this.tokenManager.renew(t).catch(()=>{});else this.options.autoRemove&&this.tokenManager.remove(t)}canStart(){return(!!this.options.autoRenew||!!this.options.autoRemove)&&!this.started}async start(){this.canStart()&&(this.tokenManager.on(gi,this.onTokenExpiredHandler),this.tokenManager.isStarted()&&this.processExpiredTokens(),this.started=!0)}async stop(){this.started&&(this.tokenManager.off(gi,this.onTokenExpiredHandler),this.renewTimeQueue=[],this.started=!1)}isStarted(){return this.started}}function uv(e){return e&&typeof e.then=="function"}Promise.resolve(!1);var lv=Promise.resolve(!0),ct=Promise.resolve();function jt(e,t){return e||(e=0),new Promise(function(n){return setTimeout(function(){return n(t)},e)})}function fv(e,t){return Math.floor(Math.random()*(t-e+1)+e)}function nr(){return Math.random().toString(36).substring(2)}var Ma=0,js=0;function gs(){var e=new Date().getTime();return e===Ma?(js++,e*1e3+js):(Ma=e,js=0,e*1e3)}function dv(){return typeof navigator<"u"&&typeof navigator.locks<"u"&&typeof navigator.locks.request=="function"}var hv=gs,pv="native";function gv(e){var t={messagesCallback:null,bc:new BroadcastChannel(e),subFns:[]};return t.bc.onmessage=function(n){t.messagesCallback&&t.messagesCallback(n.data)},t}function mv(e){e.bc.close(),e.subFns=[]}function vv(e,t){try{return e.bc.postMessage(t,!1),ct}catch(n){return Promise.reject(n)}}function yv(e,t){e.messagesCallback=t}function wv(){if((typeof window<"u"||typeof self<"u")&&typeof BroadcastChannel=="function"){if(BroadcastChannel._pubkey)throw new Error("BroadcastChannel: Do not overwrite window.BroadcastChannel with this module, this is not a polyfill");return!0}else return!1}function bv(){return 150}var _v={create:gv,close:mv,onMessage:yv,postMessage:vv,canBeUsed:wv,type:pv,averageResponseTime:bv,microSeconds:hv},al=function(){function e(t){this.ttl=t,this.map=new Map,this._to=!1}return e.prototype.has=function(t){return this.map.has(t)},e.prototype.add=function(t){var n=this;this.map.set(t,cl()),this._to||(this._to=!0,setTimeout(function(){n._to=!1,Sv(n)},0))},e.prototype.clear=function(){this.map.clear()},e}();function Sv(e){for(var t=cl()-e.ttl,n=e.map[Symbol.iterator]();;){var r=n.next().value;if(!r)return;var s=r[0],i=r[1];if(i<t)e.map.delete(s);else return}}function cl(){return new Date().getTime()}function wo(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=JSON.parse(JSON.stringify(e));return typeof t.webWorkerSupport>"u"&&(t.webWorkerSupport=!0),t.idb||(t.idb={}),t.idb.ttl||(t.idb.ttl=1e3*45),t.idb.fallbackInterval||(t.idb.fallbackInterval=150),e.idb&&typeof e.idb.onclose=="function"&&(t.idb.onclose=e.idb.onclose),t.localstorage||(t.localstorage={}),t.localstorage.removeTimeout||(t.localstorage.removeTimeout=1e3*60),e.methods&&(t.methods=e.methods),t.node||(t.node={}),t.node.ttl||(t.node.ttl=1e3*60*2),t.node.maxParallelWrites||(t.node.maxParallelWrites=2048),typeof t.node.useFastPath>"u"&&(t.node.useFastPath=!0),t}var Tv=gs,Ov="pubkey.broadcast-channel-0-",ut="messages",ms={durability:"relaxed"},Ev="idb";function ul(){if(typeof indexedDB<"u")return indexedDB;if(typeof window<"u"){if(typeof window.mozIndexedDB<"u")return window.mozIndexedDB;if(typeof window.webkitIndexedDB<"u")return window.webkitIndexedDB;if(typeof window.msIndexedDB<"u")return window.msIndexedDB}return!1}function bo(e){e.commit&&e.commit()}function Av(e){var t=ul(),n=Ov+e,r=t.open(n);return r.onupgradeneeded=function(s){var i=s.target.result;i.createObjectStore(ut,{keyPath:"id",autoIncrement:!0})},new Promise(function(s,i){r.onerror=function(o){return i(o)},r.onsuccess=function(){s(r.result)}})}function kv(e,t,n){var r=new Date().getTime(),s={uuid:t,time:r,data:n},i=e.transaction([ut],"readwrite",ms);return new Promise(function(o,a){i.oncomplete=function(){return o()},i.onerror=function(u){return a(u)};var c=i.objectStore(ut);c.add(s),bo(i)})}function Rv(e,t){var n=e.transaction(ut,"readonly",ms),r=n.objectStore(ut),s=[],i=IDBKeyRange.bound(t+1,1/0);if(r.getAll){var o=r.getAll(i);return new Promise(function(c,u){o.onerror=function(l){return u(l)},o.onsuccess=function(l){c(l.target.result)}})}function a(){try{return i=IDBKeyRange.bound(t+1,1/0),r.openCursor(i)}catch{return r.openCursor()}}return new Promise(function(c,u){var l=a();l.onerror=function(f){return u(f)},l.onsuccess=function(f){var d=f.target.result;d?d.value.id<t+1?d.continue(t+1):(s.push(d.value),d.continue()):(bo(n),c(s))}})}function Cv(e,t){if(e.closed)return Promise.resolve([]);var n=e.db.transaction(ut,"readwrite",ms),r=n.objectStore(ut);return Promise.all(t.map(function(s){var i=r.delete(s);return new Promise(function(o){i.onsuccess=function(){return o()}})}))}function xv(e,t){var n=new Date().getTime()-t,r=e.transaction(ut,"readonly",ms),s=r.objectStore(ut),i=[];return new Promise(function(o){s.openCursor().onsuccess=function(a){var c=a.target.result;if(c){var u=c.value;u.time<n?(i.push(u),c.continue()):(bo(r),o(i))}else o(i)}})}function Pv(e){return xv(e.db,e.options.idb.ttl).then(function(t){return Cv(e,t.map(function(n){return n.id}))})}function Iv(e,t){return t=wo(t),Av(e).then(function(n){var r={closed:!1,lastCursorId:0,channelName:e,options:t,uuid:nr(),eMIs:new al(t.idb.ttl*2),writeBlockPromise:ct,messagesCallback:null,readQueuePromises:[],db:n};return n.onclose=function(){r.closed=!0,t.idb.onclose&&t.idb.onclose()},ll(r),r})}function ll(e){e.closed||fl(e).then(function(){return jt(e.options.idb.fallbackInterval)}).then(function(){return ll(e)})}function Mv(e,t){return!(e.uuid===t.uuid||t.eMIs.has(e.id)||e.data.time<t.messagesCallbackTime)}function fl(e){return e.closed||!e.messagesCallback?ct:Rv(e.db,e.lastCursorId).then(function(t){var n=t.filter(function(r){return!!r}).map(function(r){return r.id>e.lastCursorId&&(e.lastCursorId=r.id),r}).filter(function(r){return Mv(r,e)}).sort(function(r,s){return r.time-s.time});return n.forEach(function(r){e.messagesCallback&&(e.eMIs.add(r.id),e.messagesCallback(r.data))}),ct})}function jv(e){e.closed=!0,e.db.close()}function Lv(e,t){return e.writeBlockPromise=e.writeBlockPromise.then(function(){return kv(e.db,e.uuid,t)}).then(function(){fv(0,10)===0&&Pv(e)}),e.writeBlockPromise}function Fv(e,t,n){e.messagesCallbackTime=n,e.messagesCallback=t,fl(e)}function Uv(){return!!ul()}function Nv(e){return e.idb.fallbackInterval*2}var Dv={create:Iv,close:jv,onMessage:Fv,postMessage:Lv,canBeUsed:Uv,type:Ev,averageResponseTime:Nv,microSeconds:Tv},$v=gs,Hv="pubkey.broadcastChannel-",Vv="localstorage";function dl(){var e;if(typeof window>"u")return null;try{e=window.localStorage,e=window["ie8-eventlistener/storage"]||window.localStorage}catch{}return e}function hl(e){return Hv+e}function Bv(e,t){return new Promise(function(n){jt().then(function(){var r=hl(e.channelName),s={token:nr(),time:new Date().getTime(),data:t,uuid:e.uuid},i=JSON.stringify(s);dl().setItem(r,i);var o=document.createEvent("Event");o.initEvent("storage",!0,!0),o.key=r,o.newValue=i,window.dispatchEvent(o),n()})})}function qv(e,t){var n=hl(e),r=function(i){i.key===n&&t(JSON.parse(i.newValue))};return window.addEventListener("storage",r),r}function Kv(e){window.removeEventListener("storage",e)}function Wv(e,t){if(t=wo(t),!pl())throw new Error("BroadcastChannel: localstorage cannot be used");var n=nr(),r=new al(t.localstorage.removeTimeout),s={channelName:e,uuid:n,eMIs:r};return s.listener=qv(e,function(i){s.messagesCallback&&i.uuid!==n&&(!i.token||r.has(i.token)||i.data.time&&i.data.time<s.messagesCallbackTime||(r.add(i.token),s.messagesCallback(i.data)))}),s}function zv(e){Kv(e.listener)}function Gv(e,t,n){e.messagesCallbackTime=n,e.messagesCallback=t}function pl(){var e=dl();if(!e)return!1;try{var t="__broadcastchannel_check";e.setItem(t,"works"),e.removeItem(t)}catch{return!1}return!0}function Jv(){var e=120,t=navigator.userAgent.toLowerCase();return t.includes("safari")&&!t.includes("chrome")?e*2:e}var Qv={create:Wv,close:zv,onMessage:Gv,postMessage:Bv,canBeUsed:pl,type:Vv,averageResponseTime:Jv,microSeconds:$v},Yv=gs,Xv="simulate",_o=new Set;function Zv(e){var t={name:e,messagesCallback:null};return _o.add(t),t}function ey(e){_o.delete(e)}function ty(e,t){return new Promise(function(n){return setTimeout(function(){var r=Array.from(_o);r.filter(function(s){return s.name===e.name}).filter(function(s){return s!==e}).filter(function(s){return!!s.messagesCallback}).forEach(function(s){return s.messagesCallback(t)}),n()},5)})}function ny(e,t){e.messagesCallback=t}function ry(){return!0}function sy(){return 5}var iy={create:Zv,close:ey,onMessage:ny,postMessage:ty,canBeUsed:ry,type:Xv,averageResponseTime:sy,microSeconds:Yv},ja=[_v,Dv,Qv];function oy(e){var t=[].concat(e.methods,ja).filter(Boolean);if(e.type){if(e.type==="simulate")return iy;var n=t.find(function(s){return s.type===e.type});if(n)return n;throw new Error("method-type "+e.type+" not found")}e.webWorkerSupport||(t=t.filter(function(s){return s.type!=="idb"}));var r=t.find(function(s){return s.canBeUsed()});if(r)return r;throw new Error("No usable method found in "+JSON.stringify(ja.map(function(s){return s.type})))}var gl=new Set,ay=0,vs=function(t,n){this.id=ay++,gl.add(this),this.name=t,La&&(n=La),this.options=wo(n),this.method=oy(this.options),this._iL=!1,this._onML=null,this._addEL={message:[],internal:[]},this._uMP=new Set,this._befC=[],this._prepP=null,cy(this)};vs._pubkey=!0;var La;vs.prototype={postMessage:function(t){if(this.closed)throw new Error("BroadcastChannel.postMessage(): Cannot post message after channel has closed "+JSON.stringify(t));return Fa(this,"message",t)},postInternal:function(t){return Fa(this,"internal",t)},set onmessage(e){var t=this.method.microSeconds(),n={time:t,fn:e};Na(this,"message",this._onML),e&&typeof e=="function"?(this._onML=n,Ua(this,"message",n)):this._onML=null},addEventListener:function(t,n){var r=this.method.microSeconds(),s={time:r,fn:n};Ua(this,t,s)},removeEventListener:function(t,n){var r=this._addEL[t].find(function(s){return s.fn===n});Na(this,t,r)},close:function(){var t=this;if(!this.closed){gl.delete(this),this.closed=!0;var n=this._prepP?this._prepP:ct;return this._onML=null,this._addEL.message=[],n.then(function(){return Promise.all(Array.from(t._uMP))}).then(function(){return Promise.all(t._befC.map(function(r){return r()}))}).then(function(){return t.method.close(t._state)})}},get type(){return this.method.type},get isClosed(){return this.closed}};function Fa(e,t,n){var r=e.method.microSeconds(),s={time:r,type:t,data:n},i=e._prepP?e._prepP:ct;return i.then(function(){var o=e.method.postMessage(e._state,s);return e._uMP.add(o),o.catch().then(function(){return e._uMP.delete(o)}),o})}function cy(e){var t=e.method.create(e.name,e.options);uv(t)?(e._prepP=t,t.then(function(n){e._state=n})):e._state=t}function ml(e){return e._addEL.message.length>0||e._addEL.internal.length>0}function Ua(e,t,n){e._addEL[t].push(n),uy(e)}function Na(e,t,n){e._addEL[t]=e._addEL[t].filter(function(r){return r!==n}),ly(e)}function uy(e){if(!e._iL&&ml(e)){var t=function(s){e._addEL[s.type].forEach(function(i){var o=1e5,a=i.time-o;s.time>=a&&i.fn(s.data)})},n=e.method.microSeconds();e._prepP?e._prepP.then(function(){e._iL=!0,e.method.onMessage(e._state,t,n)}):(e._iL=!0,e.method.onMessage(e._state,t,n))}}function ly(e){if(e._iL&&!ml(e)){e._iL=!1;var t=e.method.microSeconds();e.method.onMessage(e._state,null,t)}}function fy(e){if(typeof WorkerGlobalScope=="function"&&self instanceof WorkerGlobalScope){var t=self.close.bind(self);self.close=function(){return e(),t()}}else{if(typeof window.addEventListener!="function")return;window.addEventListener("beforeunload",function(){e()},!0),window.addEventListener("unload",function(){e()},!0)}}function dy(e){process.on("exit",function(){return e()}),process.on("beforeExit",function(){return e().then(function(){return process.exit()})}),process.on("SIGINT",function(){return e().then(function(){return process.exit()})}),process.on("uncaughtException",function(t){return e().then(function(){console.trace(t),process.exit(101)})})}var hy=Object.prototype.toString.call(typeof process<"u"?process:0)==="[object process]",py=hy?dy:fy,In=new Set,Da=!1;function gy(){Da||(Da=!0,py(vy))}function my(e){if(gy(),typeof e!="function")throw new Error("Listener is no function");In.add(e);var t={remove:function(){return In.delete(e)},run:function(){return In.delete(e),e()}};return t}function vy(){var e=[];return In.forEach(function(t){e.push(t()),In.delete(t)}),Promise.all(e)}function Nt(e,t){var n={context:"leader",action:t,token:e.token};return e.broadcastChannel.postInternal(n)}function vl(e){e.isLeader=!0,e._hasLeader=!0;var t=my(function(){return e.die()});e._unl.push(t);var n=function(s){s.context==="leader"&&s.action==="apply"&&Nt(e,"tell"),s.context==="leader"&&s.action==="tell"&&!e._dpLC&&(e._dpLC=!0,e._dpL(),Nt(e,"tell"))};return e.broadcastChannel.addEventListener("internal",n),e._lstns.push(n),Nt(e,"tell")}var yl=function(t,n){var r=this;this.broadcastChannel=t,t._befC.push(function(){return r.die()}),this._options=n,this.isLeader=!1,this.isDead=!1,this.token=nr(),this._lstns=[],this._unl=[],this._dpL=function(){},this._dpLC=!1,this._wKMC={},this.lN="pubkey-bc||"+t.method.type+"||"+t.name};yl.prototype={hasLeader:function(){var t=this;return navigator.locks.query().then(function(n){var r=n.held?n.held.filter(function(s){return s.name===t.lN}):[];return!!(r&&r.length>0)})},awaitLeadership:function(){var t=this;if(!this._wLMP){this._wKMC.c=new AbortController;var n=new Promise(function(r,s){t._wKMC.res=r,t._wKMC.rej=s});this._wLMP=new Promise(function(r){navigator.locks.request(t.lN,{signal:t._wKMC.c.signal},function(){return t._wKMC.c=void 0,vl(t),r(),n}).catch(function(){})})}return this._wLMP},set onduplicate(e){},die:function(){var t=this;return this._lstns.forEach(function(n){return t.broadcastChannel.removeEventListener("internal",n)}),this._lstns=[],this._unl.forEach(function(n){return n.remove()}),this._unl=[],this.isLeader&&(this.isLeader=!1),this.isDead=!0,this._wKMC.res&&this._wKMC.res(),this._wKMC.c&&this._wKMC.c.abort("LeaderElectionWebLock.die() called"),Nt(this,"death")}};var wl=function(t,n){var r=this;this.broadcastChannel=t,this._options=n,this.isLeader=!1,this._hasLeader=!1,this.isDead=!1,this.token=nr(),this._aplQ=ct,this._aplQC=0,this._unl=[],this._lstns=[],this._dpL=function(){},this._dpLC=!1;var s=function(o){o.context==="leader"&&(o.action==="death"&&(r._hasLeader=!1),o.action==="tell"&&(r._hasLeader=!0))};this.broadcastChannel.addEventListener("internal",s),this._lstns.push(s)};wl.prototype={hasLeader:function(){return Promise.resolve(this._hasLeader)},applyOnce:function(t){var n=this;if(this.isLeader)return jt(0,!0);if(this.isDead)return jt(0,!1);if(this._aplQC>1)return this._aplQ;var r=function(){if(n.isLeader)return lv;var i=!1,o,a=new Promise(function(l){o=function(){i=!0,l()}}),c=function(f){f.context==="leader"&&f.token!=n.token&&(f.action==="apply"&&f.token>n.token&&o(),f.action==="tell"&&(o(),n._hasLeader=!0))};n.broadcastChannel.addEventListener("internal",c);var u=t?n._options.responseTime*4:n._options.responseTime;return Nt(n,"apply").then(function(){return Promise.race([jt(u),a.then(function(){return Promise.reject(new Error)})])}).then(function(){return Nt(n,"apply")}).then(function(){return Promise.race([jt(u),a.then(function(){return Promise.reject(new Error)})])}).catch(function(){}).then(function(){return n.broadcastChannel.removeEventListener("internal",c),i?!1:vl(n).then(function(){return!0})})};return this._aplQC=this._aplQC+1,this._aplQ=this._aplQ.then(function(){return r()}).then(function(){n._aplQC=n._aplQC-1}),this._aplQ.then(function(){return n.isLeader})},awaitLeadership:function(){return this._aLP||(this._aLP=yy(this)),this._aLP},set onduplicate(e){this._dpL=e},die:function(){var t=this;return this._lstns.forEach(function(n){return t.broadcastChannel.removeEventListener("internal",n)}),this._lstns=[],this._unl.forEach(function(n){return n.remove()}),this._unl=[],this.isLeader&&(this._hasLeader=!1,this.isLeader=!1),this.isDead=!0,Nt(this,"death")}};function yy(e){return e.isLeader?ct:new Promise(function(t){var n=!1;function r(){n||(n=!0,e.broadcastChannel.removeEventListener("internal",i),t(!0))}e.applyOnce().then(function(){e.isLeader&&r()});var s=function o(){return jt(e._options.fallbackInterval).then(function(){if(!(e.isDead||n))if(e.isLeader)r();else return e.applyOnce(!0).then(function(){e.isLeader?r():o()})})};s();var i=function(a){a.context==="leader"&&a.action==="death"&&(e._hasLeader=!1,e.applyOnce().then(function(){e.isLeader&&r()}))};e.broadcastChannel.addEventListener("internal",i),e._lstns.push(i)})}function wy(e,t){return e||(e={}),e=JSON.parse(JSON.stringify(e)),e.fallbackInterval||(e.fallbackInterval=3e3),e.responseTime||(e.responseTime=t.method.averageResponseTime(t.options)),e}function by(e,t){if(e._leaderElector)throw new Error("BroadcastChannel already has a leader-elector");t=wy(t,e);var n=dv()?new yl(e,t):new wl(e,t);return e._befC.push(function(){return n.die()}),e._leaderElector=n,n}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class _y{constructor(t,n={}){this.started=!1,this.enablePostMessage=!0,this.tokenManager=t,this.options=n,this.onTokenAddedHandler=this.onTokenAddedHandler.bind(this),this.onTokenRemovedHandler=this.onTokenRemovedHandler.bind(this),this.onTokenRenewedHandler=this.onTokenRenewedHandler.bind(this),this.onSetStorageHandler=this.onSetStorageHandler.bind(this),this.onSyncMessageHandler=this.onSyncMessageHandler.bind(this)}requiresLeadership(){return!1}isStarted(){return this.started}canStart(){return!!this.options.syncStorage&&xe()&&!this.started}async start(){if(!this.canStart())return;const{syncChannelName:t}=this.options;try{this.channel=new vs(t)}catch{throw new T("SyncStorageService is not supported in current browser.")}this.tokenManager.on(It,this.onTokenAddedHandler),this.tokenManager.on(Mt,this.onTokenRemovedHandler),this.tokenManager.on(Sn,this.onTokenRenewedHandler),this.tokenManager.on(Tn,this.onSetStorageHandler),this.channel.addEventListener("message",this.onSyncMessageHandler),this.started=!0}async stop(){var t,n;this.started&&(this.tokenManager.off(It,this.onTokenAddedHandler),this.tokenManager.off(Mt,this.onTokenRemovedHandler),this.tokenManager.off(Sn,this.onTokenRenewedHandler),this.tokenManager.off(Tn,this.onSetStorageHandler),(t=this.channel)===null||t===void 0||t.removeEventListener("message",this.onSyncMessageHandler),await((n=this.channel)===null||n===void 0?void 0:n.close()),this.channel=void 0,this.started=!1)}onTokenAddedHandler(t,n){var r;this.enablePostMessage&&((r=this.channel)===null||r===void 0||r.postMessage({type:It,key:t,token:n}))}onTokenRemovedHandler(t,n){var r;this.enablePostMessage&&((r=this.channel)===null||r===void 0||r.postMessage({type:Mt,key:t,token:n}))}onTokenRenewedHandler(t,n,r){var s;this.enablePostMessage&&((s=this.channel)===null||s===void 0||s.postMessage({type:Sn,key:t,token:n,oldToken:r}))}onSetStorageHandler(t){var n;(n=this.channel)===null||n===void 0||n.postMessage({type:Tn,storage:t})}onSyncMessageHandler(t){switch(this.enablePostMessage=!1,t.type){case Tn:this.tokenManager.getStorage().setStorage(t.storage);break;case It:this.tokenManager.emitAdded(t.key,t.token),this.tokenManager.setExpireEventTimeout(t.key,t.token);break;case Mt:this.tokenManager.clearExpireEventTimeout(t.key),this.tokenManager.emitRemoved(t.key,t.token);break;case Sn:this.tokenManager.emitRenewed(t.key,t.token,t.oldToken);break}this.enablePostMessage=!0}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class Sy{constructor(t={}){this.started=!1,this.options=t,this.onLeaderDuplicate=this.onLeaderDuplicate.bind(this),this.onLeader=this.onLeader.bind(this)}onLeaderDuplicate(){}async onLeader(){var t,n;await((n=(t=this.options).onLeader)===null||n===void 0?void 0:n.call(t))}isLeader(){var t;return!!(!((t=this.elector)===null||t===void 0)&&t.isLeader)}hasLeader(){var t;return!!(!((t=this.elector)===null||t===void 0)&&t.hasLeader)}async start(){if(this.canStart()){const{electionChannelName:t}=this.options;this.channel=new vs(t),this.elector=by(this.channel),this.elector.onduplicate=this.onLeaderDuplicate,this.elector.awaitLeadership().then(this.onLeader),this.started=!0}}async stop(){this.started&&(this.elector&&(await this.elector.die(),this.elector=void 0),this.channel&&(this.channel.postInternal=()=>Promise.resolve(),await this.channel.close(),this.channel=void 0),this.started=!1)}requiresLeadership(){return!1}isStarted(){return this.started}canStart(){return xe()&&!this.started}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const bl="autoRenew",_l="syncStorage",kr="leaderElection";class fn{constructor(t,n={}){this.sdk=t,this.onLeader=this.onLeader.bind(this);const{autoRenew:r,autoRemove:s,syncStorage:i}=t.tokenManager.getOptions();n.electionChannelName=n.electionChannelName||n.broadcastChannelName,this.options=Object.assign({},fn.defaultOptions,{autoRenew:r,autoRemove:s,syncStorage:i},{electionChannelName:`${t.options.clientId}-election`,syncChannelName:`${t.options.clientId}-sync`},Ue(n)),this.started=!1,this.services=new Map,fn.knownServices.forEach(o=>{const a=this.createService(o);a&&this.services.set(o,a)})}async onLeader(){this.started&&await this.startServices()}isLeader(){var t;return(t=this.getService(kr))===null||t===void 0?void 0:t.isLeader()}isLeaderRequired(){return[...this.services.values()].some(t=>t.canStart()&&t.requiresLeadership())}async start(){this.started||(await this.startServices(),this.started=!0)}async stop(){await this.stopServices(),this.started=!1}getService(t){return this.services.get(t)}async startServices(){for(const[t,n]of this.services.entries())this.canStartService(t,n)&&await n.start()}async stopServices(){for(const t of this.services.values())await t.stop()}canStartService(t,n){let r=n.canStart()&&!n.isStarted();return t===kr?r&&(r=this.isLeaderRequired()):n.requiresLeadership()&&r&&(r=this.isLeader()),r}createService(t){const n=this.sdk.tokenManager;let r;switch(t){case kr:r=new Sy(Object.assign(Object.assign({},this.options),{onLeader:this.onLeader}));break;case bl:r=new cv(n,Object.assign({},this.options));break;case _l:r=new _y(n,Object.assign({},this.options));break;default:throw new Error(`Unknown service ${t}`)}return r}}fn.knownServices=[bl,_l,kr];fn.defaultOptions={autoRenew:!0,autoRemove:!0,syncStorage:!0};/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Ty(e){return class extends e{constructor(...n){super(...n),this.authStateManager=new av(this),this.serviceManager=new fn(this,this.options.services)}async start(){await this.serviceManager.start(),this.tokenManager.start(),this.token.isLoginRedirect()||await this.authStateManager.updateAuthState()}async stop(){this.tokenManager.stop(),await this.serviceManager.stop()}async handleRedirect(n){await this.handleLoginRedirect(void 0,n)}async handleLoginRedirect(n,r){let s=this.options.state;if(n)this.tokenManager.setTokens(n),r=r||this.getOriginalUri(this.options.state);else if(this.isLoginRedirect())try{s=(await sl(this,{})).state,r=r||this.getOriginalUri(s),await this.storeTokensFromRedirect()}catch(o){throw await this.authStateManager.updateAuthState(),o}else return;await this.authStateManager.updateAuthState(),this.removeOriginalUri(s);const{restoreOriginalUri:i}=this.options;i?await i(this,r):r&&window.location.replace(r)}}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Oy(e){return e.session.get().then(function(t){return t.status==="ACTIVE"}).catch(function(){return!1})}function Ey(e){return un(e,"/api/v1/sessions/me",{withCredentials:!0}).then(function(t){var n=Rn(t,"_links");return n.refresh=function(){return At(e,Zs(t,"refresh").href,{},{withCredentials:!0})},n.user=function(){return un(e,Zs(t,"user").href,{withCredentials:!0})},n}).catch(function(){return{status:"INACTIVE"}})}function Ay(e){return ze(e,{url:e.getIssuerOrigin()+"/api/v1/sessions/me",method:"DELETE",withCredentials:!0})}function ky(e){return At(e,"/api/v1/sessions/me/lifecycle/refresh",{},{withCredentials:!0})}function Ry(e,t,n){n=n||window.location.href,window.location.assign(e.getIssuerOrigin()+"/login/sessionCookieRedirect"+Tt({checkAccountSetupComplete:!0,token:t,redirectUrl:n}))}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Cy(e){return{close:Ay.bind(null,e),exists:Oy.bind(null,e),get:Ey.bind(null,e),refresh:ky.bind(null,e),setCookieAndRedirect:Ry.bind(null,e)}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function xy(e){return class extends e{constructor(...n){super(...n),this.session=Cy(this)}closeSession(){return this.session.close().then(async()=>(this.clearStorage(),!0)).catch(function(n){if(n.name==="AuthApiError"&&n.errorCode==="E0000007")return!1;throw n})}}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Py(e,t,n){const r=am(t),s=cm(r,e),i=fm(s),o=xy(i),a=tv(o,n);return Ty(a)}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const Sl=(e=[])=>{const t=[];return e.forEach(n=>{n.key==="webauthn"&&t.push({type:"public-key",id:Hn(n.credentialId)})}),t},Iy=(e,t)=>({publicKey:{rp:e.rp,user:{id:Hn(e.user.id),name:e.user.name,displayName:e.user.displayName},challenge:Hn(e.challenge),pubKeyCredParams:e.pubKeyCredParams,attestation:e.attestation,authenticatorSelection:e.authenticatorSelection,excludeCredentials:Sl(t)}}),My=(e,t)=>({publicKey:{challenge:Hn(e.challenge),userVerification:e.userVerification,allowCredentials:Sl(t)}}),jy=e=>{const t=e.response,n=e.id,r=tn(t.clientDataJSON),s=tn(t.attestationObject);return{id:n,clientData:r,attestation:s}},Ly=e=>{const t=e.response,n=e.id,r=tn(t.clientDataJSON),s=tn(t.authenticatorData),i=tn(t.signature);return{id:n,clientData:r,authenticatorData:s,signatureData:i}},Fy=Object.freeze(Object.defineProperty({__proto__:null,buildCredentialCreationOptions:Iy,buildCredentialRequestOptions:My,getAssertion:Ly,getAttestation:jy},Symbol.toStringTag,{value:"Module"}));/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Uy(e){var t;return t=class extends e{constructor(...r){super(...r),this.idx=rm(this)}},t.webauthn=Fy,t}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Ny(e,t,n){const r=Py(e,t,n);return Uy(r)}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Dy(){return class{constructor(t){this.devMode=!!t.devMode}}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function $y(){return Object.assign({},Ar,{inMemoryStore:{}})}const Hy={token:{storageTypes:["localStorage","sessionStorage","cookie"]},cache:{storageTypes:["localStorage","sessionStorage","cookie"]},transaction:{storageTypes:["sessionStorage","localStorage","cookie"]},"shared-transaction":{storageTypes:["localStorage"]},"original-uri":{storageTypes:["localStorage"]}};function Vy(e={},t){var n=e.cookies||{};return typeof n.secure>"u"&&(n.secure=t),typeof n.sameSite>"u"&&(n.sameSite=n.secure?"none":"lax"),n.secure&&!t&&(tt(`The current page is not being served with the HTTPS protocol.
For security reasons, we strongly recommend using HTTPS.
If you cannot use HTTPS, set "cookies.secure" option to false.`),n.secure=!1),n.sameSite==="none"&&!n.secure&&(n.sameSite="lax"),n}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function By(){const e=Dy();return class extends e{constructor(n){super(n),this.cookies=Vy(n,zu()),this.storageUtil=n.storageUtil||$y(),this.storageManager=Object.assign(Object.assign({},Hy),n.storageManager)}}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const qy=/application\/\w*\+?json/;function Ky(e){return e.headers.get("Content-Type")&&e.headers.get("Content-Type").toLowerCase().indexOf("application/json")>=0?e.json().catch(t=>({error:t,errorSummary:"Could not parse server response"})):e.text()}function Wy(e,t,n){const r=typeof t=="object",s={};for(const o of n.headers.entries())s[o[0]]=o[1];const i={responseText:r?JSON.stringify(t):t,status:e,headers:s};return r&&(i.responseType="json",i.responseJSON=t),i}function zy(e,t,n){var r=n.data,s=n.headers||{},i=s["Content-Type"]||s["content-type"]||"";r&&typeof r!="string"&&(qy.test(i)?r=JSON.stringify(r):i==="application/x-www-form-urlencoded"&&(r=Object.entries(r).map(([c,u])=>`${c}=${encodeURIComponent(u)}`).join("&")));var o=window.fetch||kp,a=o(t,{method:e,headers:n.headers,body:r,credentials:n.withCredentials?"include":"omit"});return a.finally||(a=Promise.resolve(a)),a.then(function(c){var u=!c.ok,l=c.status;return Ky(c).then(f=>Wy(l,f,c)).then(f=>{var d;if(u||!((d=f.responseJSON)===null||d===void 0)&&d.error)throw f;return f})})}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Gy(){const e=By();return class extends e{constructor(n){super(n),this.issuer=n.issuer,this.transformErrorXHR=n.transformErrorXHR,this.headers=n.headers,this.httpRequestClient=n.httpRequestClient||zy,this.httpRequestInterceptors=n.httpRequestInterceptors}}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const Jy=!0;/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Qy(e){e=e||{};var t=e.scopes;if(t&&!Array.isArray(t))throw new T('scopes must be a array of strings. Required usage: new OktaAuth({scopes: ["openid", "email"]})');var n=e.issuer;if(!n)throw new T('No issuer passed to constructor. Required usage: new OktaAuth({issuer: "https://{yourOktaDomain}.com/oauth2/{authServerId}"})');var r=new RegExp("^http?s?://.+");if(!r.test(n))throw new T('Issuer must be a valid URL. Required usage: new OktaAuth({issuer: "https://{yourOktaDomain}.com/oauth2/{authServerId}"})');if(n.indexOf("-admin.")!==-1)throw new T('Issuer URL passed to constructor contains "-admin" in subdomain. Required usage: new OktaAuth({issuer: "https://{yourOktaDomain}.com})')}function Yy(){const e=Gy();return class extends e{constructor(n){super(n),Qy(n),this.issuer=Me(n.issuer),this.tokenUrl=Me(n.tokenUrl),this.authorizeUrl=Me(n.authorizeUrl),this.userinfoUrl=Me(n.userinfoUrl),this.revokeUrl=Me(n.revokeUrl),this.logoutUrl=Me(n.logoutUrl),this.pkce=n.pkce!==!1,this.clientId=n.clientId,this.redirectUri=n.redirectUri,xe()&&(this.redirectUri=yp(n.redirectUri,window.location.origin)),this.responseType=n.responseType,this.responseMode=n.responseMode,this.state=n.state,this.scopes=n.scopes,this.ignoreSignature=!!n.ignoreSignature,this.codeChallenge=n.codeChallenge,this.codeChallengeMethod=n.codeChallengeMethod,this.acrValues=n.acrValues,this.maxAge=n.maxAge,this.tokenManager=n.tokenManager,this.postLogoutRedirectUri=n.postLogoutRedirectUri,this.restoreOriginalUri=n.restoreOriginalUri,this.transactionManager=Object.assign({enableSharedStorage:Jy},n.transactionManager),this.clientSecret=n.clientSecret,this.setLocation=n.setLocation,this.ignoreLifetime=!!n.ignoreLifetime,!n.maxClockSkew&&n.maxClockSkew!==0?this.maxClockSkew=pu:this.maxClockSkew=n.maxClockSkew}}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Xy(){const e=Yy();return class extends e{constructor(n){super(n),this.services=n.services,this.transformAuthState=n.transformAuthState}}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Zy(){const e=Xy();return class extends e{constructor(n){super(n),this.flow=n.flow,this.activationToken=n.activationToken,this.recoveryToken=n.recoveryToken,this.idx=n.idx}}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class nn{constructor(t,n){if(!t)throw new T('"storage" is required');if(typeof n!="string"||!n.length)throw new T('"storageName" is required');this.storageName=n,this.storageProvider=t}getItem(t){return this.getStorage()[t]}setItem(t,n){return this.updateStorage(t,n)}removeItem(t){return this.clearStorage(t)}getStorage(){var t=this.storageProvider.getItem(this.storageName);t=t||"{}";try{return JSON.parse(t)}catch{throw new T("Unable to parse storage string: "+this.storageName)}}setStorage(t){try{var n=t?JSON.stringify(t):"{}";this.storageProvider.setItem(this.storageName,n)}catch{throw new T("Unable to set storage: "+this.storageName)}}clearStorage(t){if(!t){this.storageProvider.removeItem?this.storageProvider.removeItem(this.storageName):this.setStorage();return}var n=this.getStorage();delete n[t],this.setStorage(n)}updateStorage(t,n){var r=this.getStorage();r[t]=n,this.setStorage(r)}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Rr(e){!xe()&&!e.storageProvider&&!e.storageKey&&tt("Memory storage can only support simple single user use case on server side, please provide custom storageProvider or storageKey if advanced scenarios need to be supported.")}class ew{constructor(t,n,r){this.storageManagerOptions=t,this.cookieOptions=n,this.storageUtil=r}getOptionsForSection(t,n){return Object.assign({},this.storageManagerOptions[t],n)}getStorage(t){if(t=Object.assign({},this.cookieOptions,t),t.storageProvider)return t.storageProvider;let{storageType:n,storageTypes:r}=t;if(n==="sessionStorage"&&(t.sessionCookie=!0),n&&r){const s=r.indexOf(n);s>=0&&(r=r.slice(s),n=void 0)}return n||(n=this.storageUtil.findStorageType(r)),this.storageUtil.getStorageByType(n,t)}getTokenStorage(t){t=this.getOptionsForSection("token",t),Rr(t);const n=this.getStorage(t),r=t.storageKey||Ki;return new nn(n,r)}getHttpCache(t){t=this.getOptionsForSection("cache",t);const n=this.getStorage(t),r=t.storageKey||mu;return new nn(n,r)}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function tw(){return class extends ew{constructor(t,n,r){super(t,n,r)}getTransactionStorage(t){t=this.getOptionsForSection("transaction",t),Rr(t);const n=this.getStorage(t),r=t.storageKey||vu;return new nn(n,r)}getSharedTansactionStorage(t){t=this.getOptionsForSection("shared-transaction",t),Rr(t);const n=this.getStorage(t),r=t.storageKey||yu;return new nn(n,r)}getOriginalUriStorage(t){t=this.getOptionsForSection("original-uri",t),Rr(t);const n=this.getStorage(t),r=t.storageKey||wu;return new nn(n,r)}}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function nw(){return tw()}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function rw(){const e=nw();return class extends e{constructor(n,r,s){super(n,r,s)}getIdxResponseStorage(n){let r;if(xe())try{r=this.storageUtil.getStorageByType("memory",n)}catch{tt("No response storage found, you may want to provide custom implementation for intermediate idx responses to optimize the network traffic")}else{const s=this.getTransactionStorage(n);s&&(r={getItem:i=>{const o=s.getStorage();return o&&o[i]?o[i]:null},setItem:(i,o)=>{const a=s.getStorage();if(!a)throw new T("Transaction has been cleared, failed to save idxState");a[i]=o,s.setStorage(a)},removeItem:i=>{const o=s.getStorage();o&&(delete o[i],s.setStorage(o))}})}return r?new nn(r,bu):null}}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Tl(e){return!(!e||typeof e!="object"||Object.values(e).length===0)}function sw(e){return Tl(e)?!!e.redirectUri||!!e.responseType:!1}function iw(e){return Tl(e)?Object.values(e).find(n=>typeof n!="string")===void 0:!1}function Cr(e){return!!(sw(e)||iw(e))}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const ow=30*60*1e3;function aw(e){const t=e.getSharedTansactionStorage(),n=t.getStorage();Object.keys(n).forEach(r=>{const s=n[r];Date.now()-s.dateCreated>ow&&delete n[r]}),t.setStorage(n)}function cw(e,t,n){const r=e.getSharedTansactionStorage(),s=r.getStorage();s[t]={dateCreated:Date.now(),transaction:n},r.setStorage(s)}function uw(e,t){const s=e.getSharedTansactionStorage().getStorage()[t];return s&&s.transaction&&Cr(s.transaction)?s.transaction:null}function lw(e,t){const n=e.getSharedTansactionStorage(),r=n.getStorage();delete r[t],n.setStorage(r)}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function fw(){return class{constructor(t){this.storageManager=t.storageManager,this.enableSharedStorage=t.enableSharedStorage!==!1,this.saveLastResponse=t.saveLastResponse!==!1,this.options=t}clear(t={}){const n=this.storageManager.getTransactionStorage(),r=n.getStorage();if(n.clearStorage(),this.enableSharedStorage&&t.clearSharedStorage!==!1){const s=t.state||(r==null?void 0:r.state);s&&lw(this.storageManager,s)}}save(t,n={}){let r=this.storageManager.getTransactionStorage();const s=r.getStorage();Cr(s)&&!n.muteWarning&&tt("a saved auth transaction exists in storage. This may indicate another auth flow is already in progress."),r.setStorage(t),this.enableSharedStorage&&t.state&&cw(this.storageManager,t.state,t)}exists(t={}){try{return!!this.load(t)}catch{return!1}}load(t={}){let n;return this.enableSharedStorage&&t.state&&(aw(this.storageManager),n=uw(this.storageManager,t.state),Cr(n))||(n=this.storageManager.getTransactionStorage().getStorage(),Cr(n))?n:null}}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function dw(){const e=fw();return class extends e{constructor(n){super(n)}clear(n={}){super.clear(n),n.clearIdxResponse!==!1&&this.clearIdxResponse()}saveIdxResponse(n){if(!this.saveLastResponse)return;const r=this.storageManager.getIdxResponseStorage();r&&r.setStorage(n)}loadIdxResponse(n){if(!this.saveLastResponse)return null;const r=this.storageManager.getIdxResponseStorage();if(!r)return null;const s=r.getStorage();if(!s||!Cu(s.rawIdxResponse))return null;if(n){const{interactionHandle:i}=n;if(i&&s.interactionHandle!==i)return null}return s}clearIdxResponse(){if(!this.saveLastResponse)return;const n=this.storageManager.getIdxResponseStorage();n==null||n.clearStorage()}}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class ft{constructor(t,n){const{res:r}=n,{headers:s}=r,i=Gn(r,["headers"]);s&&(this.headers=s),Object.keys(i).forEach(o=>{o!=="_links"&&(this[o]=i[o])})}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */async function de(e,t,n=ft){const{accessToken:r}=e.tokenManager.getTokensSync(),s=t.accessToken||(r==null?void 0:r.accessToken),i=e.getIssuerOrigin(),{url:o,method:a,payload:c}=t,u=o.startsWith(i)?o:`${i}${o}`;if(!s)throw new T("AccessToken is required to request MyAccount API endpoints.");const l=await ze(e,Object.assign({headers:{Accept:"*/*;okta-version=1.0.0"},accessToken:s,url:u,method:a},c&&{args:c}));let f;return Array.isArray(l)?f=l.map(d=>new n(e,{res:d,accessToken:s})):f=new n(e,{res:l,accessToken:s}),f}function Te({oktaAuth:e,accessToken:t,methodName:n,links:r},s=ft){for(const o of["GET","POST","PUT","DELETE"])if(o.toLowerCase()===n){const a=r.self;return async c=>de(e,{accessToken:t,url:a.href,method:o,payload:c},s)}const i=r[n];if(!i)throw new T(`No link is found with methodName: ${n}`);return async o=>de(e,{accessToken:t,url:i.href,method:i.hints.allow[0],payload:o},s)}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class Ol extends ft{constructor(t,n){super(t,n);const{createdAt:r,modifiedAt:s,profile:i}=n.res;this.createdAt=r,this.modifiedAt=s,this.profile=i}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class hw extends ft{constructor(t,n){super(t,n),this.properties=n.res.properties}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */var $a;(function(e){e.PRIMARY="PRIMARY",e.SECONDARY="SECONDARY"})($a||($a={}));var Ha;(function(e){e.VERIFIED="VERIFIED",e.UNVERIFIED="UNVERIFIED"})(Ha||(Ha={}));var mi;(function(e){e.NOT_ENROLLED="NOT_ENROLLED",e.ACTIVE="ACTIVE"})(mi||(mi={}));/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const pw=async(e,t)=>await de(e,{url:"/idp/myaccount/profile",method:"GET",accessToken:t==null?void 0:t.accessToken},Ol),gw=async(e,t)=>{const{payload:n,accessToken:r}=t;return await de(e,{url:"/idp/myaccount/profile",method:"PUT",payload:n,accessToken:r},Ol)},mw=async(e,t)=>await de(e,{url:"/idp/myaccount/profile/schema",method:"GET",accessToken:t==null?void 0:t.accessToken},hw);/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class El extends ft{constructor(t,n){super(t,n);const{res:r}=n,{id:s,profile:i,expiresAt:o,status:a}=r;this.id=s,this.expiresAt=o,this.profile=i,this.status=a}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class rr extends ft{constructor(t,n){super(t,n);const{accessToken:r,res:s}=n,{id:i,expiresAt:o,profile:a,status:c,_links:u}=s;this.id=i,this.expiresAt=o,this.profile=a,this.status=c,this.poll=async()=>await Te({oktaAuth:t,accessToken:r,methodName:"poll",links:u},El)(),this.verify=async l=>await Te({oktaAuth:t,accessToken:r,methodName:"verify",links:u},rr)(l)}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class sr extends ft{constructor(t,n){super(t,n);const{accessToken:r,res:s}=n,{id:i,profile:o,roles:a,status:c,_links:u}=s;this.id=i,this.profile=o,this.roles=a,this.status=c,this.get=async()=>await Te({oktaAuth:t,accessToken:r,methodName:"get",links:u},sr)(),this.delete=async()=>await Te({oktaAuth:t,accessToken:r,methodName:"delete",links:u})(),this.challenge=async()=>await Te({oktaAuth:t,accessToken:r,methodName:"challenge",links:u},rr)(),u.poll&&(this.poll=async()=>await Te({oktaAuth:t,accessToken:r,methodName:"poll",links:u},El)()),u.verify&&(this.verify=async l=>await Te({oktaAuth:t,accessToken:r,methodName:"verify",links:u})(l))}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const vw=async(e,t)=>await de(e,{url:"/idp/myaccount/emails",method:"GET",accessToken:t==null?void 0:t.accessToken},sr),yw=async(e,t)=>{const{id:n,accessToken:r}=t;return await de(e,{url:`/idp/myaccount/emails/${n}`,method:"GET",accessToken:r},sr)},ww=async(e,t)=>{const{accessToken:n,payload:r}=t;return await de(e,{url:"/idp/myaccount/emails",method:"POST",payload:r,accessToken:n},sr)},bw=async(e,t)=>{const{id:n,accessToken:r}=t;return await de(e,{url:`/idp/myaccount/emails/${n}`,method:"DELETE",accessToken:r})},_w=async(e,t)=>{const{id:n,accessToken:r}=t;return await de(e,{url:`/idp/myaccount/emails/${n}/challenge`,method:"POST",accessToken:r},rr)},Sw=async(e,t)=>{const{emailId:n,challengeId:r,accessToken:s}=t;return await de(e,{url:`/idp/myaccount/emails/${n}/challenge/${r}`,method:"POST",accessToken:s},rr)},Tw=async(e,t)=>{const{emailId:n,challengeId:r,payload:s,accessToken:i}=t;return await de(e,{url:`/idp/myaccount/emails/${n}/challenge/${r}/verify`,method:"POST",payload:s,accessToken:i})};/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class ir extends ft{constructor(t,n){super(t,n);const{res:r,accessToken:s}=n,{id:i,profile:o,status:a,_links:c}=r;this.id=i,this.profile=o,this.status=a,this.get=async()=>await Te({oktaAuth:t,accessToken:s,methodName:"get",links:c},ir)(),this.delete=async()=>await Te({oktaAuth:t,accessToken:s,methodName:"delete",links:c})(),this.challenge=async u=>await Te({oktaAuth:t,accessToken:s,methodName:"challenge",links:c})(u),c.verify&&(this.verify=async u=>await Te({oktaAuth:t,accessToken:s,methodName:"verify",links:c})(u))}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const Ow=async(e,t)=>await de(e,{url:"/idp/myaccount/phones",method:"GET",accessToken:t==null?void 0:t.accessToken},ir),Ew=async(e,t)=>{const{accessToken:n,id:r}=t;return await de(e,{url:`/idp/myaccount/phones/${r}`,method:"GET",accessToken:n},ir)},Aw=async(e,t)=>{const{accessToken:n,payload:r}=t;return await de(e,{url:"/idp/myaccount/phones",method:"POST",payload:r,accessToken:n},ir)},kw=async(e,t)=>{const{id:n,accessToken:r}=t;return await de(e,{url:`/idp/myaccount/phones/${n}`,method:"DELETE",accessToken:r})},Rw=async(e,t)=>{const{accessToken:n,id:r,payload:s}=t;return await de(e,{url:`/idp/myaccount/phones/${r}/challenge`,method:"POST",payload:s,accessToken:n})},Cw=async(e,t)=>{const{id:n,payload:r,accessToken:s}=t;return await de(e,{url:`/idp/myaccount/phones/${n}/verify`,method:"POST",payload:r,accessToken:s})};/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class Dt extends ft{constructor(t,n){super(t,n);const{res:r,accessToken:s}=n,{id:i,status:o,created:a,lastUpdated:c,_links:u}=r;this.id=i,this.status=o,this.created=a,this.lastUpdated=c,this.status==mi.NOT_ENROLLED?this.enroll=async l=>await Te({oktaAuth:t,accessToken:s,methodName:"enroll",links:u},Dt)(l):(this.get=async()=>await Te({oktaAuth:t,accessToken:s,methodName:"get",links:u},Dt)(),this.update=async l=>await Te({oktaAuth:t,accessToken:s,methodName:"put",links:u},Dt)(l),this.delete=async()=>await Te({oktaAuth:t,accessToken:s,methodName:"delete",links:u})())}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const xw=async(e,t)=>await de(e,{url:"/idp/myaccount/password",method:"GET",accessToken:t==null?void 0:t.accessToken},Dt),Pw=async(e,t)=>{const{accessToken:n,payload:r}=t;return await de(e,{url:"/idp/myaccount/password",method:"POST",payload:r,accessToken:n},Dt)},Iw=async(e,t)=>{const{accessToken:n,payload:r}=t;return await de(e,{url:"/idp/myaccount/password",method:"PUT",payload:r,accessToken:n},Dt)},Mw=async(e,t)=>await de(e,{url:"/idp/myaccount/password",method:"DELETE",accessToken:t==null?void 0:t.accessToken});/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const jw=Object.freeze(Object.defineProperty({__proto__:null,addEmail:ww,addPhone:Aw,deleteEmail:bw,deletePassword:Mw,deletePhone:kw,enrollPassword:Pw,getEmail:yw,getEmailChallenge:Sw,getEmails:vw,getPassword:xw,getPhone:Ew,getPhones:Ow,getProfile:pw,getProfileSchema:mw,sendEmailChallenge:_w,sendPhoneChallenge:Rw,updatePassword:Iw,updateProfile:gw,verifyEmailChallenge:Tw,verifyPhoneChallenge:Cw},Symbol.toStringTag,{value:"Module"}));/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Lw(e){return class extends e{constructor(...n){super(...n),this.myaccount=Object.entries(jw).filter(([r])=>r!=="default").reduce((r,[s,i])=>(r[s]=i.bind(null,this),r),{})}}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function ys(e,t){var n={};return Object.assign(n,t),!n.stateToken&&e.stateToken&&(n.stateToken=e.stateToken),n}function Fw(e){return ys(e)}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Al(e,t){return t=ys(e,t),At(e,e.getIssuerOrigin()+"/api/v1/authn",t,{withCredentials:!0})}function Uw(e,t,n){if(!n||!n.stateToken){var r=So(e);if(r)n={stateToken:r};else return Promise.reject(new T("No transaction to resume"))}return Al(e,n).then(function(s){return t.createTransaction(s)})}function Nw(e,t,n){if(!n||!n.stateToken){var r=So(e);if(r)n={stateToken:r};else return Promise.reject(new T("No transaction to evaluate"))}return Dw(e,n).then(function(s){return t.createTransaction(s)})}function Dw(e,t){return t=ys(e,t),At(e,e.getIssuerOrigin()+"/api/v1/authn/introspect",t,{withCredentials:!0})}function $w(e){return!!So(e)}function kl(e,t,n,r,s){return s=Object.assign({withCredentials:!0},s),At(e,n,r,s).then(function(i){return t.createTransaction(i)})}function So(e){return e.options.storageUtil.storage.get(Cn)}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Rl(e,t,n,r,s,i){if(Array.isArray(s))return function(a,c){if(!a)throw new T("Must provide a link name");var u=Xs(s,{name:a});if(!u)throw new T("No link found for that name");return Rl(e,t,n,r,u,i)(c)};if(s.hints&&s.hints.allow&&s.hints.allow.length===1){var o=s.hints.allow[0];switch(o){case"GET":return function(){return un(e,s.href,{withCredentials:!0})};case"POST":return function(a){i&&i.isPolling&&(i.isPolling=!1);var c=ys(n,a);(n.status==="MFA_ENROLL"||n.status==="FACTOR_ENROLL")&&Object.assign(c,{factorType:r.factorType,provider:r.provider});var u={},l=c.autoPush;if(l!==void 0){if(typeof l=="function")try{u.autoPush=!!l()}catch{return Promise.reject(new T("AutoPush resulted in an error."))}else l!==null&&(u.autoPush=!!l);c=Rn(c,"autoPush")}var f=c.rememberDevice;if(f!==void 0){if(typeof f=="function")try{u.rememberDevice=!!f()}catch{return Promise.reject(new T("RememberDevice resulted in an error."))}else f!==null&&(u.rememberDevice=!!f);c=Rn(c,"rememberDevice")}else c.profile&&c.profile.updatePhone!==void 0&&(c.profile.updatePhone&&(u.updatePhone=!0),c.profile=Rn(c.profile,"updatePhone"));var d=s.href+Tt(u);return kl(e,t,d,c)}}}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class Va extends Wn{constructor(){super("The poll was stopped by the sdk")}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Hw(e,t,n){return function(r){var s,i,o,a;Ip(r)?s=r:du(r)&&(r=r,s=r.delay,i=r.rememberDevice,o=r.autoPush,a=r.transactionCallBack),!s&&s!==0&&(s=hu);var c=Zs(t,"next","poll");function u(){var d={};if(typeof o=="function")try{d.autoPush=!!o()}catch{return Promise.reject(new T("AutoPush resulted in an error."))}else o!=null&&(d.autoPush=!!o);if(typeof i=="function")try{d.rememberDevice=!!i()}catch{return Promise.reject(new T("RememberDevice resulted in an error."))}else i!=null&&(d.rememberDevice=!!i);var g=c.href+Tt(d);return At(e,g,Fw(t),{saveAuthnState:!1,withCredentials:!0})}n.isPolling=!0;var l=0,f=function(){return n.isPolling?u().then(function(d){if(l=0,d.factorResult&&d.factorResult==="WAITING"){if(!n.isPolling)throw new Va;return typeof a=="function"&&a(d),Sa(s).then(f)}else return n.isPolling=!1,e.tx.createTransaction(d)}).catch(function(d){if(d.xhr&&(d.xhr.status===0||d.xhr.status===429)&&l<=4){var g=Math.pow(2,l)*1e3;return l++,Sa(g).then(f)}throw d}):Promise.reject(new Va)};return f().catch(function(d){throw n.isPolling=!1,d})}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Vw(e,t,n,r,s){var i={};for(var o in r._links)if(Object.prototype.hasOwnProperty.call(r._links,o)){var a=r._links[o];if(o==="next"&&(o=a.name),a.type){i[o]=a;continue}switch(o){case"poll":i.poll=Hw(e,n,s);break;default:var c=Rl(e,t,n,r,a,s);c&&(i[o]=c)}}return i}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function vi(e,t,n,r,s){if(r=r||n,r=Le(r),Array.isArray(r)){for(var i=[],o=0,a=r.length;o<a;o++)i.push(vi(e,t,n,r[o],s));return i}var c=r._embedded||{};for(var u in c)Object.prototype.hasOwnProperty.call(c,u)&&(du(c[u])||Array.isArray(c[u]))&&(c[u]=vi(e,t,n,c[u],s));var l=Vw(e,t,n,r,s);return Object.assign(c,l),r=Rn(r,"_embedded","_links"),Object.assign(r,c),r}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class Bw{constructor(t,n,r=null){this.data=void 0,this.status=void 0,r&&(this.data=r,Object.assign(this,vi(t,n,r,r,{})),delete this.stateToken,r.status==="RECOVERY_CHALLENGE"&&!r._links&&(this.cancel=function(){return Promise.resolve(n.createTransaction())}))}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function qw(e){const t={status:Al.bind(null,e),resume(n){return Uw(e,t,n)},exists:$w.bind(null,e),introspect(n){return Nw(e,t,n)},createTransaction:n=>new Bw(e,t,n),postToTransaction:(n,r,s)=>kl(e,t,n,r,s)};return t}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Kw(e,t){if(t=t||{},!qu())return Promise.reject(new T("Fingerprinting is not supported on this device"));var n,r,s,i=new Promise(function(o,a){r=document.createElement("iframe"),r.style.display="none",s=function(u){if(!(!u||!u.data||u.origin!==e.getIssuerOrigin())){try{var l=JSON.parse(u.data)}catch{return}if(l){if(l.type==="FingerprintAvailable")return o(l.fingerprint);l.type==="FingerprintServiceReady"&&u.source.postMessage(JSON.stringify({type:"GetFingerprint"}),u.origin)}}},el(window,"message",s),r.src=e.getIssuerOrigin()+"/auth/services/devicefingerprint",document.body.appendChild(r),n=setTimeout(function(){a(new T("Fingerprinting timed out"))},(t==null?void 0:t.timeout)||15e3)});return i.finally(function(){clearTimeout(n),tl(window,"message",s),document.body.contains(r)&&r.parentElement.removeChild(r)})}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Ww(e){return class extends e{constructor(...n){super(...n),this.authn=this.tx=qw(this),this.fingerprint=Kw.bind(null,this)}async signIn(n){n=Le(n||{});const r=s=>(delete n.sendFingerprint,this.tx.postToTransaction("/api/v1/authn",n,s));return n.sendFingerprint?this.fingerprint().then(function(s){return r({headers:{"X-Device-Fingerprint":s}})}):r()}async signInWithCredentials(n){return this.signIn(n)}forgotPassword(n){return this.tx.postToTransaction("/api/v1/authn/recovery/password",n)}unlockAccount(n){return this.tx.postToTransaction("/api/v1/authn/recovery/unlock",n)}verifyRecoveryToken(n){return this.tx.postToTransaction("/api/v1/authn/recovery/token",n)}}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const zw=Zy(),Gw=rw(),Jw=dw(),Qw=Ny(Gw,zw,Jw),Yw=Lw(Qw),Xw=Ww(Yw);class Zw extends Xw{constructor(t){super(t)}}function ws(e,t){const n=Vr(e),r=Vr(t),s=n.pop(),i=r.pop(),o=yi(n,r);return o!==0?o:s&&i?yi(s.split("."),i.split(".")):s||i?s?-1:1:0}const eb=e=>typeof e=="string"&&/^[v\d]/.test(e)&&Cl.test(e),To=(e,t,n)=>{rb(n);const r=ws(e,t);return xl[n].includes(r)},tb=(e,t)=>{const n=t.match(/^([<>=~^]+)/),r=n?n[1]:"=";if(r!=="^"&&r!=="~")return To(e,t,r);const[s,i,o]=Vr(e),[a,c,u]=Vr(t);return xr(s,a)!==0?!1:r==="^"?yi([i,o],[c,u])>=0:xr(i,c)!==0?!1:xr(o,u)>=0};ws.validate=eb;ws.compare=To;ws.satisfies=tb;const Cl=/^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,Vr=e=>{if(typeof e!="string")throw new TypeError("Invalid argument expected string");const t=e.match(Cl);if(!t)throw new Error(`Invalid argument not valid semver ('${e}' received)`);return t.shift(),t},Ba=e=>e==="*"||e==="x"||e==="X",qa=e=>{const t=parseInt(e,10);return isNaN(t)?e:t},nb=(e,t)=>typeof e!=typeof t?[String(e),String(t)]:[e,t],xr=(e,t)=>{if(Ba(e)||Ba(t))return 0;const[n,r]=nb(qa(e),qa(t));return n>r?1:n<r?-1:0},yi=(e,t)=>{for(let n=0;n<Math.max(e.length,t.length);n++){const r=xr(e[n]||0,t[n]||0);if(r!==0)return r}return 0},xl={">":[1],">=":[0,1],"=":[0],"<=":[-1,0],"<":[-1]},Ka=Object.keys(xl),rb=e=>{if(typeof e!="string")throw new TypeError(`Invalid operator type, expected string but got ${typeof e}`);if(Ka.indexOf(e)===-1)throw new Error(`Invalid operator, expected one of ${Ka.join("|")}`)};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Bn(e,t,n,r){function s(i){return i instanceof n?i:new n(function(o){o(i)})}return new(n||(n=Promise))(function(i,o){function a(l){try{u(r.next(l))}catch(f){o(f)}}function c(l){try{u(r.throw(l))}catch(f){o(f)}}function u(l){l.done?i(l.value):s(l.value).then(a,c)}u((r=r.apply(e,t||[])).next())})}function qn(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,s,i,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(l){return c([u,l])}}function c(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,s&&(i=u[0]&2?s.return:u[0]?s.throw||((i=s.return)&&i.call(s),0):s.next)&&!(i=i.call(s,u[1])).done)return i;switch(s=0,i&&(u=[u[0]&2,i.value]),u[0]){case 0:case 1:i=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,s=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){n.label=u[1];break}if(u[0]===6&&n.label<i[1]){n.label=i[1],i=u;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(u);break}i[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(l){u=[6,l],s=0}finally{r=i=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}/*!
 * Copyright (c) 2017-Present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */var Ze,wi,Pl,Ls=function(e){return Bn(void 0,void 0,void 0,function(){return qn(this,function(t){switch(t.label){case 0:return e&&!e.isAuthenticated?(Ze.setOriginalUri(Pl),wi?[4,wi(Ze)]:[3,2]):[3,4];case 1:return t.sent(),[3,4];case 2:return[4,Ze.signInWithRedirect()];case 3:t.sent(),t.label=4;case 4:return[2]}})})},sb=function(e){return Bn(void 0,void 0,void 0,function(){var t,n;return qn(this,function(r){switch(r.label){case 0:return Ze.authStateManager.unsubscribe(Ls),e.matched.some(function(s){return s.meta.requiresAuth})?(Pl=e.fullPath,Ze.authStateManager.subscribe(Ls),[4,Ze.isAuthenticated()]):[3,4];case 1:return t=r.sent(),t?[3,3]:(n=Ze.authStateManager.getAuthState(),[4,Ls(n)]);case 2:return r.sent(),[2,!1];case 3:return[2,!0];case 4:return[2,!0]}})})};function ib(e,t){var n=this,r=t===void 0?{}:t,s=r.oktaAuth,i=r.onAuthRequired,o=r.onAuthResume;if(!s)throw new T("No oktaAuth instance passed to OktaVue.");if(Ze=s,wi=i,s._oktaUserAgent){var a=To(s._oktaUserAgent.getVersion(),"5.3.1",">=");if(!a)throw new T(`
      Passed in oktaAuth is not compatible with the SDK,
      minimum supported okta-auth-js version is `.concat("5.3.1",`.
    `));s._oktaUserAgent.addEnvironment("".concat("@okta/okta-vue","/").concat("5.7.0"))}else console.warn("_oktaUserAgent is not available on auth SDK instance. Please use okta-auth-js@^5.3.1 .");s.options.restoreOriginalUri||(s.options.restoreOriginalUri=function(l,f){return Bn(n,void 0,void 0,function(){var d,g;return qn(this,function(m){return d=e.config.globalProperties.$router,d&&(g=wp(f||"/",window.location.origin),d.replace({path:g})),[2]})})}),s.start();var c=vc(s.authStateManager.getAuthState()),u=function(l){return Bn(this,void 0,void 0,function(){return qn(this,function(f){return c.value=l,vf(c),[2]})})};s.authStateManager.subscribe(u),e.mixin({computed:{authState:function(){return c.value}}}),e.provide("okta.authState",c),Object.assign(s.options,{onAuthRequired:i,onAuthResume:o}),e.config.globalProperties.$auth=s}function ob(){if(!Ze)throw new T("No oktaAuth instance has instantiated.");return Ze}var ab={install:ib},Il={setup:function(e,t){var n=this,r=t.slots,s=mc(null),i=ob();return Pc(function(){return Bn(n,void 0,void 0,function(){var o,a,c,u,l,f;return qn(this,function(d){switch(d.label){case 0:return d.trys.push([0,2,,3]),[4,i.handleLoginRedirect()];case 1:return d.sent(),[3,3];case 2:return o=d.sent(),a=i.isInteractionRequiredError||i.idx.isInteractionRequiredError,a(o)&&(c=i.options,u=c.onAuthResume,l=c.onAuthRequired,f=u||l,f)?(f(i),[2]):(s.value=o.toString(),[3,3]);case 3:return[2]}})})}),function(){return r.error?rs("div",r.error({error:s.value})):s.value}}};Il.__file="src/components/LoginCallback.vue";const cb=[{path:"/my-test-app/",component:()=>gp(()=>import("./FirstPage-IhCjUJxO.js"),__vite__mapDeps([0,1])),name:"First Page",meta:{requiresAuth:!0}},{path:"/my-test-app/login/callback",component:Il,redirectUri:"./index.html"}],Ml=sp({history:_h("/"),routes:cb});Ml.beforeEach(sb);const ub=new Zw({issuer:"https://dev-48043447.okta.com/oauth2/default",clientId:"0oadq2onsa44TXvRF5d7",redirectUri:window.location.origin+"/my-test-app/login/callback",scopes:["openid","profile","email"]}),Oo=Zd({render:()=>rs(dp)});Oo.use(Ml);Oo.use(ab,{oktaAuth:ub});Oo.mount("#app");export{yd as a,Xe as b,Bc as c,Xr as d,Ut as e,je as f,fb as g,it as i,Vc as o,mc as r,lb as t,ob as u,kf as w};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/FirstPage-IhCjUJxO.js","assets/FirstPage-v95RlXpF.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
