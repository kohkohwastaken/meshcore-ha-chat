/*! meshcore-chat-panel v0.4.12-beta.1 */
let e,t,a,i,n,o,r,s,l,c,d,p,h,u,m,g,f,v,b,y,_,x,w,k,$,C,S,A,M,F,E,D,z,O,I,R,T,q,B,N,j,P,L,H,V,K,U,W,G,X,Y,Q,J,Z,ee,te,ae,ie,ne,oe,re,se,le,ce,de,pe,he,ue,me,ge,fe,ve,be,ye,_e,xe,we,ke,$e,Ce,Se,Ae,Me,Fe,Ee,De,ze,Oe,Ie,Re,Te,qe,Be,Ne,je,Pe,Le,He,Ve,Ke,Ue,We,Ge,Xe,Ye,Qe,Je,Ze,et,tt,at,it,nt,ot,rt,st,lt,ct,dt,pt,ht,ut,mt,gt,ft,vt,bt,yt,_t,xt,wt,kt,$t,Ct,St,At,Mt,Ft,Et,Dt,zt,Ot,It,Rt,Tt,qt,Bt,Nt,jt,Pt,Lt,Ht,Vt,Kt,Ut,Wt,Gt,Xt,Yt,Qt,Jt,Zt,ea,ta,aa,ia,na,oa,ra,sa,la,ca,da,pa,ha,ua,ma,ga,fa,va,ba,ya,_a,xa,wa,ka,$a,Ca,Sa,Aa,Ma,Fa,Ea,Da,za,Oa,Ia,Ra,Ta,qa,Ba,Na,ja,Pa,La,Ha,Va,Ka,Ua,Wa,Ga,Xa,Ya,Qa,Ja,Za,ei,ti,ai,ii,ni,oi,ri,si,li,ci,di,pi,hi,ui,mi,gi,fi,vi,bi,yi,_i,xi,wi,ki,$i,Ci,Si,Ai,Mi,Fi,Ei,Di,zi,Oi,Ii,Ri,Ti,qi,Bi,Ni,ji,Pi,Li,Hi,Vi,Ki,Ui,Wi,Gi,Xi,Yi,Qi,Ji,Zi,en,tn,an,nn,on,rn,sn,ln,cn,dn,pn,hn,un,mn,gn,fn,vn,bn,yn,_n,xn,wn,kn,$n,Cn,Sn,An,Mn,Fn,En,Dn,zn,On,In,Rn,Tn,qn,Bn,Nn,jn,Pn,Ln,Hn,Vn,Kn,Un,Wn,Gn,Xn,Yn,Qn,Jn,Zn,eo,to,ao,io,no,oo,ro,so,lo,co,po,ho,uo,mo,go,fo,vo,bo,yo,_o,xo,wo,ko,$o,Co,So,Ao,Mo,Fo,Eo,Do,zo,Oo,Io,Ro,To,qo,Bo,No,jo,Po,Lo,Ho,Vo,Ko,Uo,Wo,Go,Xo,Yo,Qo,Jo,Zo,er,tr,ar,ir,nr,or,rr,sr,lr,cr,dr,pr,hr,ur,mr,gr,fr,vr,br,yr,_r,xr,wr,kr,$r,Cr,Sr,Ar,Mr,Fr,Er,Dr,zr,Or,Ir,Rr,Tr,qr,Br,Nr,jr,Pr,Lr,Hr,Vr,Kr,Ur,Wr,Gr,Xr,Yr,Qr,Jr,Zr,es,ts,as,is,ns,os,rs,ss,ls,cs,ds,ps,hs,us,ms,gs,fs,vs,bs,ys,_s,xs,ws,ks,$s,Cs,Ss,As,Ms,Fs,Es,Ds,zs,Os,Is,Rs,Ts,qs,Bs,Ns,js,Ps,Ls,Hs,Vs,Ks,Us,Ws,Gs,Xs,Ys,Qs,Js,Zs,el,tl,al,il,nl,ol,rl,sl,ll,cl,dl,pl,hl,ul,ml,gl,fl,vl,bl,yl,_l,xl,wl,kl,$l,Cl,Sl,Al,Ml,Fl,El,Dl,zl,Ol,Il,Rl,Tl,ql,Bl,Nl,jl,Pl,Ll,Hl,Vl,Kl,Ul,Wl,Gl,Xl,Yl,Ql,Jl,Zl,ec,tc,ac,ic,nc,oc,rc,sc,lc,cc,dc,pc=e=>e;function hc(e,t,a,i){var n,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,a,r):n(t,a))||r);return o>3&&r&&Object.defineProperty(t,a,r),r}"function"==typeof SuppressedError&&SuppressedError;const uc=globalThis,mc=uc.ShadowRoot&&(void 0===uc.ShadyCSS||uc.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,gc=Symbol(),fc=new WeakMap;let vc=class{constructor(e,t,a){if(this._$cssResult$=!0,a!==gc)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(mc&&void 0===e){const a=void 0!==t&&1===t.length;a&&(e=fc.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),a&&fc.set(t,e))}return e}toString(){return this.cssText}};const bc=(e,...t)=>{const a=1===e.length?e[0]:t.reduce((t,a,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+e[i+1],e[0]);return new vc(a,e,gc)},yc=mc?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const a of e.cssRules)t+=a.cssText;return(e=>new vc("string"==typeof e?e:e+"",void 0,gc))(t)})(e):e,{is:_c,defineProperty:xc,getOwnPropertyDescriptor:wc,getOwnPropertyNames:kc,getOwnPropertySymbols:$c,getPrototypeOf:Cc}=Object,Sc=globalThis,Ac=Sc.trustedTypes,Mc=Ac?Ac.emptyScript:"",Fc=Sc.reactiveElementPolyfillSupport,Ec=(e,t)=>e,Dc={toAttribute(e,t){switch(t){case Boolean:e=e?Mc:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let a=e;switch(t){case Boolean:a=null!==e;break;case Number:a=null===e?null:Number(e);break;case Object:case Array:try{a=JSON.parse(e)}catch(e){a=null}}return a}},zc=(e,t)=>!_c(e,t),Oc={attribute:!0,type:String,converter:Dc,reflect:!1,useDefault:!1,hasChanged:zc};null!==(e=Symbol.metadata)&&void 0!==e||(Symbol.metadata=Symbol("metadata")),null!==(t=Sc.litPropertyMetadata)&&void 0!==t||(Sc.litPropertyMetadata=new WeakMap);let Ic=class extends HTMLElement{static addInitializer(e){var t;this._$Ei(),(null!==(t=this.l)&&void 0!==t?t:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Oc){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const a=Symbol(),i=this.getPropertyDescriptor(e,a,t);void 0!==i&&xc(this.prototype,e,i)}}static getPropertyDescriptor(e,t,a){var i;const{get:n,set:o}=null!==(i=wc(this.prototype,e))&&void 0!==i?i:{get(){return this[t]},set(e){this[t]=e}};return{get:n,set(t){const i=null==n?void 0:n.call(this);null!=o&&o.call(this,t),this.requestUpdate(e,i,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var t;return null!==(t=this.elementProperties.get(e))&&void 0!==t?t:Oc}static _$Ei(){if(this.hasOwnProperty(Ec("elementProperties")))return;const e=Cc(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ec("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ec("properties"))){const e=this.properties,t=[...kc(e),...$c(e)];for(const a of t)this.createProperty(a,e[a])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,a]of t)this.elementProperties.set(e,a)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const a=this._$Eu(e,t);void 0!==a&&this._$Eh.set(a,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const a=new Set(e.flat(1/0).reverse());for(const e of a)t.unshift(yc(e))}else void 0!==e&&t.push(yc(e));return t}static _$Eu(e,t){const a=t.attribute;return!1===a?void 0:"string"==typeof a?a:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach(e=>e(this))}addController(e){var t,a;(null!==(t=this._$EO)&&void 0!==t?t:this._$EO=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&(null===(a=e.hostConnected)||void 0===a||a.call(e))}removeController(e){var t;null===(t=this._$EO)||void 0===t||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const a of t.keys())this.hasOwnProperty(a)&&(e.set(a,this[a]),delete this[a]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(mc)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const a of t){const t=document.createElement("style"),i=uc.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=a.cssText,e.appendChild(t)}})(t,this.constructor.elementStyles),t}connectedCallback(){var e,t;null!==(e=this.renderRoot)&&void 0!==e||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$EO)||void 0===t||t.forEach(e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)})}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$EO)||void 0===e||e.forEach(e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)})}attributeChangedCallback(e,t,a){this._$AK(e,a)}_$ET(e,t){const a=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,a);if(void 0!==i&&!0===a.reflect){var n;const o=(void 0!==(null===(n=a.converter)||void 0===n?void 0:n.toAttribute)?a.converter:Dc).toAttribute(t,a.type);this._$Em=e,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){const a=this.constructor,i=a._$Eh.get(e);if(void 0!==i&&this._$Em!==i){var n,o,r;const e=a.getPropertyOptions(i),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(n=e.converter)||void 0===n?void 0:n.fromAttribute)?e.converter:Dc;this._$Em=i;const l=s.fromAttribute(t,e.type);this[i]=null!==(o=null!=l?l:null===(r=this._$Ej)||void 0===r?void 0:r.get(i))&&void 0!==o?o:l,this._$Em=null}}requestUpdate(e,t,a,i=!1,n){if(void 0!==e){var o,r;const s=this.constructor;if(!1===i&&(n=this[e]),null!=a||(a=s.getPropertyOptions(e)),!((null!==(o=a.hasChanged)&&void 0!==o?o:zc)(n,t)||a.useDefault&&a.reflect&&n===(null===(r=this._$Ej)||void 0===r?void 0:r.get(e))&&!this.hasAttribute(s._$Eu(e,a))))return;this.C(e,t,a)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:a,reflect:i,wrapped:n},o){var r,s,l;a&&!(null!==(r=this._$Ej)&&void 0!==r?r:this._$Ej=new Map).has(e)&&(this._$Ej.set(e,null!==(s=null!=o?o:t)&&void 0!==s?s:this[e]),!0!==n||void 0!==o)||(this._$AL.has(e)||(this.hasUpdated||a||(t=void 0),this._$AL.set(e,t)),!0===i&&this._$Em!==e&&(null!==(l=this._$Eq)&&void 0!==l?l:this._$Eq=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){var e;if(null!==(e=this.renderRoot)&&void 0!==e||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,a]of t){const{wrapped:t}=a,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,a,i)}}let t=!1;const a=this._$AL;try{var i;t=this.shouldUpdate(a),t?(this.willUpdate(a),null!==(i=this._$EO)&&void 0!==i&&i.forEach(e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)}),this.update(a)):this._$EM()}catch(a){throw t=!1,this._$EM(),a}t&&this._$AE(a)}willUpdate(e){}_$AE(e){var t;null!==(t=this._$EO)&&void 0!==t&&t.forEach(e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}};Ic.elementStyles=[],Ic.shadowRootOptions={mode:"open"},Ic[Ec("elementProperties")]=new Map,Ic[Ec("finalized")]=new Map,null!=Fc&&Fc({ReactiveElement:Ic}),(null!==(a=Sc.reactiveElementVersions)&&void 0!==a?a:Sc.reactiveElementVersions=[]).push("2.1.2");const Rc=globalThis,Tc=e=>e,qc=Rc.trustedTypes,Bc=qc?qc.createPolicy("lit-html",{createHTML:e=>e}):void 0,Nc="$lit$",jc=`lit$${Math.random().toFixed(9).slice(2)}$`,Pc="?"+jc,Lc=`<${Pc}>`,Hc=document,Vc=()=>Hc.createComment(""),Kc=e=>null===e||"object"!=typeof e&&"function"!=typeof e,Uc=Array.isArray,Wc="[ \t\n\f\r]",Gc=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Xc=/-->/g,Yc=/>/g,Qc=RegExp(`>|${Wc}(?:([^\\s"'>=/]+)(${Wc}*=${Wc}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Jc=/'/g,Zc=/"/g,ed=/^(?:script|style|textarea|title)$/i,td=e=>(t,...a)=>({_$litType$:e,strings:t,values:a}),ad=td(1),id=td(2),nd=Symbol.for("lit-noChange"),od=Symbol.for("lit-nothing"),rd=new WeakMap,sd=Hc.createTreeWalker(Hc,129);function ld(e,t){if(!Uc(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==Bc?Bc.createHTML(t):t}const cd=(e,t)=>{const a=e.length-1,i=[];let n,o=2===t?"<svg>":3===t?"<math>":"",r=Gc;for(let t=0;t<a;t++){const a=e[t];let s,l,c=-1,d=0;for(;d<a.length&&(r.lastIndex=d,l=r.exec(a),null!==l);)d=r.lastIndex,r===Gc?"!--"===l[1]?r=Xc:void 0!==l[1]?r=Yc:void 0!==l[2]?(ed.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=Qc):void 0!==l[3]&&(r=Qc):r===Qc?">"===l[0]?(r=null!=n?n:Gc,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,s=l[1],r=void 0===l[3]?Qc:'"'===l[3]?Zc:Jc):r===Zc||r===Jc?r=Qc:r===Xc||r===Yc?r=Gc:(r=Qc,n=void 0);const p=r===Qc&&e[t+1].startsWith("/>")?" ":"";o+=r===Gc?a+Lc:c>=0?(i.push(s),a.slice(0,c)+Nc+a.slice(c)+jc+p):a+jc+(-2===c?t:p)}return[ld(e,o+(e[a]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]};class dd{constructor({strings:e,_$litType$:t},a){let i;this.parts=[];let n=0,o=0;const r=e.length-1,s=this.parts,[l,c]=cd(e,t);if(this.el=dd.createElement(l,a),sd.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=sd.nextNode())&&s.length<r;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(Nc)){const t=c[o++],a=i.getAttribute(e).split(jc),r=/([.?@])?(.*)/.exec(t);s.push({type:1,index:n,name:r[2],strings:a,ctor:"."===r[1]?gd:"?"===r[1]?fd:"@"===r[1]?vd:md}),i.removeAttribute(e)}else e.startsWith(jc)&&(s.push({type:6,index:n}),i.removeAttribute(e));if(ed.test(i.tagName)){const e=i.textContent.split(jc),t=e.length-1;if(t>0){i.textContent=qc?qc.emptyScript:"";for(let a=0;a<t;a++)i.append(e[a],Vc()),sd.nextNode(),s.push({type:2,index:++n});i.append(e[t],Vc())}}}else if(8===i.nodeType)if(i.data===Pc)s.push({type:2,index:n});else{let e=-1;for(;-1!==(e=i.data.indexOf(jc,e+1));)s.push({type:7,index:n}),e+=jc.length-1}n++}}static createElement(e,t){const a=Hc.createElement("template");return a.innerHTML=e,a}}function pd(e,t,a=e,i){var n,o,r,s,l;if(t===nd)return t;let c=void 0!==i?null===(n=a._$Co)||void 0===n?void 0:n[i]:a._$Cl;const d=Kc(t)?void 0:t._$litDirective$;return(null===(o=c)||void 0===o?void 0:o.constructor)!==d&&(null!==(r=c)&&void 0!==r&&null!==(s=r._$AO)&&void 0!==s&&s.call(r,!1),void 0===d?c=void 0:(c=new d(e),c._$AT(e,a,i)),void 0!==i?(null!==(l=a._$Co)&&void 0!==l?l:a._$Co=[])[i]=c:a._$Cl=c),void 0!==c&&(t=pd(e,c._$AS(e,t.values),c,i)),t}class hd{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:a},parts:i}=this._$AD,n=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:Hc).importNode(a,!0);sd.currentNode=n;let o=sd.nextNode(),r=0,s=0,l=i[0];for(;void 0!==l;){var c;if(r===l.index){let t;2===l.type?t=new ud(o,o.nextSibling,this,e):1===l.type?t=new l.ctor(o,l.name,l.strings,this,e):6===l.type&&(t=new bd(o,this,e)),this._$AV.push(t),l=i[++s]}r!==(null===(c=l)||void 0===c?void 0:c.index)&&(o=sd.nextNode(),r++)}return sd.currentNode=Hc,n}p(e){let t=0;for(const a of this._$AV)void 0!==a&&(void 0!==a.strings?(a._$AI(e,a,t),t+=a.strings.length-2):a._$AI(e[t])),t++}}class ud{get _$AU(){var e,t;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cv}constructor(e,t,a,i){var n;this.type=2,this._$AH=od,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=a,this.options=i,this._$Cv=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get parentNode(){var e;let t=this._$AA.parentNode;const a=this._$AM;return void 0!==a&&11===(null===(e=t)||void 0===e?void 0:e.nodeType)&&(t=a.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=pd(this,e,t),Kc(e)?e===od||null==e||""===e?(this._$AH!==od&&this._$AR(),this._$AH=od):e!==this._$AH&&e!==nd&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>Uc(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==od&&Kc(this._$AH)?this._$AA.nextSibling.data=e:this.T(Hc.createTextNode(e)),this._$AH=e}$(e){var t;const{values:a,_$litType$:i}=e,n="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=dd.createElement(ld(i.h,i.h[0]),this.options)),i);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===n)this._$AH.p(a);else{const e=new hd(n,this),t=e.u(this.options);e.p(a),this.T(t),this._$AH=e}}_$AC(e){let t=rd.get(e.strings);return void 0===t&&rd.set(e.strings,t=new dd(e)),t}k(e){Uc(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let a,i=0;for(const n of e)i===t.length?t.push(a=new ud(this.O(Vc()),this.O(Vc()),this,this.options)):a=t[i],a._$AI(n),i++;i<t.length&&(this._$AR(a&&a._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(null===(a=this._$AP)||void 0===a||a.call(this,!1,!0,t);e!==this._$AB;){var a;const t=Tc(e).nextSibling;Tc(e).remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cv=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class md{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,a,i,n){this.type=1,this._$AH=od,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,a.length>2||""!==a[0]||""!==a[1]?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=od}_$AI(e,t=this,a,i){const n=this.strings;let o=!1;if(void 0===n)e=pd(this,e,t,0),o=!Kc(e)||e!==this._$AH&&e!==nd,o&&(this._$AH=e);else{const i=e;let r,s;for(e=n[0],r=0;r<n.length-1;r++)s=pd(this,i[a+r],t,r),s===nd&&(s=this._$AH[r]),o||(o=!Kc(s)||s!==this._$AH[r]),s===od?e=od:e!==od&&(e+=(null!=s?s:"")+n[r+1]),this._$AH[r]=s}o&&!i&&this.j(e)}j(e){e===od?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class gd extends md{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===od?void 0:e}}class fd extends md{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==od)}}class vd extends md{constructor(e,t,a,i,n){super(e,t,a,i,n),this.type=5}_$AI(e,t=this){var a;if((e=null!==(a=pd(this,e,t,0))&&void 0!==a?a:od)===nd)return;const i=this._$AH,n=e===od&&i!==od||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==od&&(i===od||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,a;"function"==typeof this._$AH?this._$AH.call(null!==(t=null===(a=this.options)||void 0===a?void 0:a.host)&&void 0!==t?t:this.element,e):this._$AH.handleEvent(e)}}class bd{constructor(e,t,a){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(e){pd(this,e)}}const yd=Rc.litHtmlPolyfillSupport;null!=yd&&yd(dd,ud),(null!==(i=Rc.litHtmlVersions)&&void 0!==i?i:Rc.litHtmlVersions=[]).push("3.3.2");const _d=globalThis;let xd=class extends Ic{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const a=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=a.firstChild),a}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,a)=>{var i;const n=null!==(i=null==a?void 0:a.renderBefore)&&void 0!==i?i:t;let o=n._$litPart$;if(void 0===o){var r;const e=null!==(r=null==a?void 0:a.renderBefore)&&void 0!==r?r:null;n._$litPart$=o=new ud(t.insertBefore(Vc(),e),e,void 0,null!=a?a:{})}return o._$AI(e),o})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return nd}};xd._$litElement$=!0,xd.finalized=!0,null===(n=_d.litElementHydrateSupport)||void 0===n||n.call(_d,{LitElement:xd});const wd=_d.litElementPolyfillSupport;null==wd||wd({LitElement:xd}),(null!==(o=_d.litElementVersions)&&void 0!==o?o:_d.litElementVersions=[]).push("4.2.2");const kd=e=>(t,a)=>{void 0!==a?a.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},$d={attribute:!0,type:String,converter:Dc,reflect:!1,hasChanged:zc},Cd=(e=$d,t,a)=>{const{kind:i,metadata:n}=a;let o=globalThis.litPropertyMetadata.get(n);if(void 0===o&&globalThis.litPropertyMetadata.set(n,o=new Map),"setter"===i&&((e=Object.create(e)).wrapped=!0),o.set(a.name,e),"accessor"===i){const{name:i}=a;return{set(a){const n=t.get.call(this);t.set.call(this,a),this.requestUpdate(i,n,e,!0,a)},init(t){return void 0!==t&&this.C(i,void 0,e,t),t}}}if("setter"===i){const{name:i}=a;return function(a){const n=this[i];t.call(this,a),this.requestUpdate(i,n,e,!0,a)}}throw Error("Unsupported decorator location: "+i)};function Sd(e){return(t,a)=>"object"==typeof a?Cd(e,t,a):((e,t,a)=>{const i=t.hasOwnProperty(a);return t.constructor.createProperty(a,e),i?Object.getOwnPropertyDescriptor(t,a):void 0})(e,t,a)}function Ad(e){return Sd({...e,state:!0,attribute:!1})}const Md=bc(r||(r=pc`
  :host {
    display: block;
    width: 100%;
    height: 100vh;
    --chat-bg: var(--chat-card-bg, var(--card-background-color, #fff));
    --bubble-incoming-bg: var(
      --chat-card-bubble-incoming-bg,
      var(--secondary-background-color, #e8e8e8)
    );
    --bubble-outgoing-bg: var(--chat-card-bubble-outgoing-bg, var(--primary-color, #03a9f4));
    --bubble-incoming-text: var(
      --chat-card-bubble-incoming-text,
      var(--primary-text-color, #212121)
    );
    --bubble-outgoing-text: var(--chat-card-bubble-outgoing-text, #fff);
    --sender-color: var(--chat-card-sender-color, var(--primary-color, #03a9f4));
    --timestamp-color: var(--chat-card-timestamp-color, var(--secondary-text-color, #727272));
    --mention-bg: var(--chat-card-mention-bg, rgba(3, 169, 244, 0.15));
    --mention-text: var(--chat-card-mention-text, var(--primary-color, #03a9f4));
    --date-separator-color: var(
      --chat-card-date-separator-color,
      var(--secondary-text-color, #727272)
    );
    --unread-badge-bg: var(--chat-card-unread-badge-bg, var(--primary-color, #03a9f4));
    --input-bg: var(--chat-card-input-bg, var(--card-background-color, #fff));
    --input-border: var(--chat-card-input-border, var(--divider-color, #e0e0e0));
    --scrollbar-thumb: var(--chat-card-scrollbar-thumb, var(--scrollbar-thumb-color, #c1c1c1));
    --system-msg-color: var(--chat-card-system-msg-color, var(--secondary-text-color, #727272));
    --error-color: var(--error-color, #db4437);

    /* ─── Semantic threshold-band colours ───
       Used by the node-summary aggregated card (and any future component
       wanting good/warn/bad/info semantics). The hex defaults match the
       battery / status palette already scattered through this stylesheet
       (#4caf50, #ff9800, #f44336, #2196f3) so no net new palette is
       introduced — these named variables just give the existing colours
       a semantic handle.

       *-bg variants are the translucent fills used by status badges,
       map-link chips, and any chip-style backgrounds the card adds. */
    --good: var(--meshcore-good, #4caf50);
    --warn: var(--meshcore-warn, #ff9800);
    --bad:  var(--meshcore-bad,  #f44336);
    --info: var(--meshcore-info, #2196f3);
    --good-bg: var(--meshcore-good-bg, rgba(76, 175, 80, 0.18));
    --warn-bg: var(--meshcore-warn-bg, rgba(255, 152, 0, 0.18));
    --bad-bg:  var(--meshcore-bad-bg,  rgba(244, 67, 54, 0.18));
    --info-bg: var(--meshcore-info-bg, rgba(33, 150, 243, 0.18));
  }

  /* === Panel Layout === */
  .panel {
    display: flex;
    flex-direction: column;
    height: 100%;
    background: var(--primary-background-color, #fafafa);
  }

  .panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    background: var(--card-background-color, #fff);
    border-bottom: 1px solid var(--divider-color, #e0e0e0);
    flex-shrink: 0;
    gap: 12px;
  }

  .panel-title {
    font-size: 18px;
    font-weight: 500;
    color: var(--primary-text-color);
    flex: 1;
  }

  .device-switcher {
    padding: 8px 12px;
    border: 1px solid var(--input-border);
    border-radius: 8px;
    background: var(--input-bg);
    color: var(--primary-text-color);
    font-size: 13px;
    box-sizing: border-box;
    height: 39px;
    min-height: 39px;
    line-height: normal;
    appearance: menulist;
    -webkit-appearance: menulist;
    cursor: pointer;
  }

  /* === Tab Bar === */
  .tab-bar {
    display: flex;
    gap: 0;
    padding: 0;
    background: var(--card-background-color, #fff);
    border-bottom: 1px solid var(--divider-color, #e0e0e0);
    flex-shrink: 0;
  }

  .tab-bar button {
    flex: 1;
    padding: 12px 16px;
    border: none;
    background: transparent;
    color: var(--secondary-text-color, #727272);
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
    border-bottom: 3px solid transparent;
    min-height: 48px;
  }

  .tab-bar button:hover {
    color: var(--primary-text-color);
    background: rgba(0, 0, 0, 0.02);
  }

  .tab-bar button.active {
    color: var(--primary-color, #03a9f4);
    border-bottom-color: var(--primary-color, #03a9f4);
  }

  /* === Page Container === */
  .page-container {
    flex: 1;
    overflow: hidden;
    display: flex;
  }

  .page {
    display: none;
    flex: 1;
    overflow: hidden;
  }

  .page.active {
    display: flex;
  }

  /* === Chat Page (with sidebar) === */
  .chat-layout {
    display: flex;
    width: 100%;
    height: 100%;
    gap: 0;
  }

  /* === Message Bubble Styles === */
  .bubble {
    max-width: 85%;
    padding: 8px 12px;
    border-radius: 16px;
    word-wrap: break-word;
    overflow-wrap: break-word;
    position: relative;
    cursor: pointer;
    transition: opacity 0.15s;
    line-height: 1.4;
    font-size: 14px;
  }

  .bubble:active {
    opacity: 0.7;
  }

  .bubble + .bubble {
    margin-top: 2px;
  }

  .bubble.incoming {
    background: var(--bubble-incoming-bg);
    color: var(--bubble-incoming-text);
    border-bottom-left-radius: 4px;
  }

  .bubble.incoming:first-of-type {
    border-top-left-radius: 16px;
  }

  .bubble.outgoing {
    background: var(--bubble-outgoing-bg);
    color: var(--bubble-outgoing-text);
    border-bottom-right-radius: 4px;
  }

  .bubble.outgoing:first-of-type {
    border-top-right-radius: 16px;
  }

  .bubble.system {
    background: transparent;
    color: var(--system-msg-color);
    font-style: italic;
    font-size: 13px;
    text-align: center;
    cursor: default;
    padding: 4px 12px;
  }

  .message-text {
    white-space: pre-wrap;
  }

  .message-text .mention {
    background: var(--mention-bg);
    color: var(--mention-text);
    font-weight: 600;
    padding: 1px 4px;
    border-radius: 4px;
  }

  .bubble.outgoing .message-text .mention {
    background: rgba(255, 255, 255, 0.25);
    color: #fff;
  }

  .timestamp {
    font-size: 11px;
    color: var(--timestamp-color);
    margin-top: 2px;
    padding: 0 4px;
    opacity: 0.8;
  }

  /* === Sender Label === */
  .sender {
    font-size: 12px;
    font-weight: 600;
    color: var(--sender-color);
    margin-bottom: 2px;
    padding: 0 4px;
    max-width: 85%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* === Message Group === */
  .message-group {
    margin-bottom: 8px;
    display: flex;
    flex-direction: column;
  }

  .message-group.outgoing {
    align-items: flex-end;
  }

  .message-group.incoming {
    align-items: flex-start;
  }

  .message-group.system {
    align-items: center;
  }

  /* === Date Separator === */
  .date-separator {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 16px 0 12px;
    color: var(--date-separator-color);
    font-size: 12px;
    font-weight: 500;
  }

  .date-separator::before,
  .date-separator::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--divider-color, #e0e0e0);
  }

  /* === Contact Card === */
  .contact-card {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    border-bottom: 1px solid var(--divider-color, #e0e0e0);
    cursor: pointer;
    transition: background 0.15s;
  }

  .contact-card:hover {
    background: rgba(0, 0, 0, 0.02);
  }

  .contact-card.active {
    background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
    border-left: 3px solid var(--primary-color, #03a9f4);
  }

  .contact-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--primary-color, #03a9f4);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 14px;
    flex-shrink: 0;
  }

  .contact-info {
    flex: 1;
    overflow: hidden;
  }

  .contact-name {
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-text-color);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .contact-prefix {
    font-size: 12px;
    color: var(--secondary-text-color);
    font-family: monospace;
  }

  .contact-status {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .contact-status.online {
    background: #4caf50;
  }

  .contact-status.offline {
    background: var(--secondary-text-color);
  }

  /* === Conversation Sidebar === */
  .conversation-sidebar {
    width: 280px;
    border-right: 1px solid var(--divider-color, #e0e0e0);
    display: flex;
    flex-direction: column;
    background: var(--card-background-color, #fff);
    flex-shrink: 0;
  }

  .sidebar-search {
    padding: 12px;
    border-bottom: 1px solid var(--divider-color, #e0e0e0);
  }

  .sidebar-search input {
    width: 100%;
    padding: 8px 12px;
    border: 1px solid var(--input-border);
    border-radius: 20px;
    background: var(--input-bg);
    color: var(--primary-text-color);
    font-size: 13px;
    outline: none;
  }

  .sidebar-search input:focus {
    border-color: var(--primary-color);
  }

  .conversation-list {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .conversation-list::-webkit-scrollbar {
    width: 6px;
  }

  .conversation-list::-webkit-scrollbar-track {
    background: transparent;
  }

  .conversation-list::-webkit-scrollbar-thumb {
    background: var(--scrollbar-thumb);
    border-radius: 3px;
  }

  /* === Chat Container === */
  .chat-container {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 8px 12px;
    background: var(--chat-bg);
    position: relative;
  }

  .chat-container::-webkit-scrollbar {
    width: 6px;
  }

  .chat-container::-webkit-scrollbar-track {
    background: transparent;
  }

  .chat-container::-webkit-scrollbar-thumb {
    background: var(--scrollbar-thumb);
    border-radius: 3px;
  }

  /* === Input Area === */
  .input-area {
    display: flex;
    align-items: flex-end;
    gap: 8px;
    padding: 8px 12px 12px;
    border-top: 1px solid var(--divider-color, #e0e0e0);
    background: var(--input-bg);
    flex-shrink: 0;
  }

  .input-area textarea {
    flex: 1;
    padding: 10px 14px;
    border: 1px solid var(--input-border);
    border-radius: 20px;
    background: var(--chat-bg);
    color: var(--primary-text-color);
    font-size: 14px;
    font-family: inherit;
    resize: none;
    outline: none;
    max-height: 120px;
    min-height: 40px;
    line-height: 1.4;
    transition: border-color 0.2s;
  }

  .input-area textarea:focus {
    border-color: var(--primary-color);
  }

  .input-area textarea::placeholder {
    color: var(--timestamp-color);
  }

  .input-area textarea:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .send-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border: none;
    border-radius: 50%;
    background: var(--primary-color, #03a9f4);
    color: #fff;
    cursor: pointer;
    flex-shrink: 0;
    transition: opacity 0.15s, transform 0.15s;
  }

  .send-button:hover {
    opacity: 0.9;
  }

  .send-button:active {
    transform: scale(0.95);
  }

  .send-button:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .send-button svg {
    width: 20px;
    height: 20px;
  }

  /* === Empty State === */
  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 32px 16px;
    color: var(--secondary-text-color);
    text-align: center;
  }

  .empty-state .empty-icon {
    font-size: 32px;
    margin-bottom: 8px;
    opacity: 0.5;
  }

  .empty-state .empty-text {
    font-size: 14px;
  }

  /* === Loading State === */
  .loading-state {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    color: var(--secondary-text-color);
    font-size: 14px;
    gap: 8px;
  }

  .loading-spinner {
    width: 20px;
    height: 20px;
    border: 2px solid var(--divider-color, #e0e0e0);
    border-top-color: var(--primary-color, #03a9f4);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  /* === Error State === */
  .error-state {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    color: var(--error-color);
    font-size: 13px;
    background: rgba(219, 68, 55, 0.08);
    border-radius: 8px;
    margin: 8px 12px;
  }

  /* === Delivery Status === */
  .delivery-status {
    font-size: 11px;
    color: var(--timestamp-color);
    margin-top: 2px;
    padding: 0 4px;
    opacity: 0.8;
  }

  .delivery-waiting {
    color: var(--timestamp-color);
  }

  .delivery-sent {
    color: var(--primary-color, #03a9f4);
  }

  .delivery-delivered {
    color: #4caf50;
  }

  .delivery-failed {
    color: var(--error-color, #db4437);
  }

  /* === Route Info Inline === */
  .route-info-inline {
    font-size: 11px;
    color: var(--timestamp-color);
    font-family: monospace;
    margin-top: 2px;
    padding: 0 4px;
    opacity: 0.7;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* === Device Cards === */
  .device-card {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 12px;
    border: 1px solid var(--divider-color, #e0e0e0);
    border-radius: 8px;
    background: var(--card-background-color, #fff);
    cursor: pointer;
    transition: all 0.15s;
  }

  .device-card:hover {
    background: rgba(0, 0, 0, 0.02);
    border-color: var(--primary-color, #03a9f4);
  }

  .device-card.active {
    background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
    border-color: var(--primary-color, #03a9f4);
  }

  .device-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }

  .device-name {
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-text-color);
  }

  .device-type {
    font-size: 11px;
    padding: 2px 6px;
    border-radius: 4px;
    background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.15);
    color: var(--primary-color, #03a9f4);
    font-weight: 500;
  }

  .device-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }

  .device-stat {
    font-size: 12px;
    color: var(--secondary-text-color);
  }

  .device-stat-label {
    font-weight: 500;
    color: var(--primary-text-color);
  }

  .device-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 4px;
  }

  .device-action-btn {
    padding: 6px 10px;
    border: 1px solid var(--divider-color, #e0e0e0);
    border-radius: 4px;
    background: var(--card-background-color, #fff);
    color: var(--primary-text-color);
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s;
  }

  .device-action-btn:hover {
    background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
    border-color: var(--primary-color, #03a9f4);
    color: var(--primary-color, #03a9f4);
  }

  .device-action-btn:active {
    transform: scale(0.98);
  }

  /* === Settings Page === */
  .settings-section {
    padding: 16px;
    border-bottom: 1px solid var(--divider-color, #e0e0e0);
  }

  .settings-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 12px 0;
    user-select: none;
  }

  .settings-header:hover {
    color: var(--primary-color, #03a9f4);
  }

  .settings-header-title {
    font-size: 14px;
    font-weight: 600;
    color: var(--primary-text-color);
  }

  .settings-header-icon {
    font-size: 18px;
    transition: transform 0.2s;
  }

  .settings-header.collapsed .settings-header-icon {
    transform: rotate(-90deg);
  }

  .settings-content {
    display: none;
    padding: 12px 0;
  }

  .settings-content.expanded {
    display: block;
  }

  .form-group {
    margin-bottom: 16px;
  }

  .form-group:last-child {
    margin-bottom: 0;
  }

  .form-label {
    display: block;
    font-size: 13px;
    font-weight: 500;
    color: var(--primary-text-color);
    margin-bottom: 6px;
  }

  .form-label.required::after {
    content: ' *';
    color: var(--error-color, #db4437);
  }

  .form-input,
  .form-select {
    width: 100%;
    padding: 10px 12px;
    border: 1px solid var(--input-border);
    border-radius: 6px;
    background: var(--input-bg);
    color: var(--primary-text-color);
    font-size: 13px;
    font-family: inherit;
    outline: none;
    transition: border-color 0.2s;
    box-sizing: border-box;
  }

  .form-select {
    height: 39px;
    min-height: 39px;
    line-height: normal;
    appearance: menulist;
    -webkit-appearance: menulist;
  }

  .form-input:focus,
  .form-select:focus {
    border-color: var(--primary-color, #03a9f4);
  }

  .form-input:disabled,
  .form-select:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .form-toggle {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .form-toggle input[type='checkbox'] {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }

  .form-toggle-label {
    font-size: 13px;
    color: var(--primary-text-color);
    cursor: pointer;
  }

  .form-description {
    font-size: 12px;
    color: var(--secondary-text-color);
    margin-top: 4px;
  }

  .apply-button {
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
    background: var(--primary-color, #03a9f4);
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s;
  }

  .apply-button:hover {
    opacity: 0.9;
  }

  .apply-button:active {
    transform: scale(0.98);
  }

  .apply-button:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  /* === Dialog Components === */
  .dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 16px;
  }

  .dialog {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    width: 100%;
    max-height: 80vh;
    border-radius: 12px;
    background: var(--card-background-color, #fff);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }

  .dialog-header {
    padding: 16px;
    border-bottom: 1px solid var(--divider-color, #e0e0e0);
    flex-shrink: 0;
  }

  .dialog-header-title {
    font-size: 16px;
    font-weight: 600;
    color: var(--primary-text-color);
  }

  .dialog-body {
    flex: 1;
    overflow-y: auto;
    padding: 16px;
  }

  .dialog-footer {
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    padding: 16px;
    border-top: 1px solid var(--divider-color, #e0e0e0);
    flex-shrink: 0;
  }

  .dialog-button {
    padding: 8px 16px;
    border: 1px solid var(--divider-color, #e0e0e0);
    border-radius: 6px;
    background: var(--card-background-color, #fff);
    color: var(--primary-text-color);
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s;
  }

  .dialog-button:hover {
    background: rgba(0, 0, 0, 0.02);
  }

  .dialog-button.primary {
    background: var(--primary-color, #03a9f4);
    color: #fff;
    border-color: var(--primary-color, #03a9f4);
  }

  .dialog-button.primary:hover {
    opacity: 0.9;
  }

  /* === Command Dialog === */
  .command-select {
    width: 100%;
    padding: 10px 12px;
    border: 1px solid var(--input-border);
    border-radius: 6px;
    background: var(--input-bg);
    color: var(--primary-text-color);
    font-size: 13px;
    outline: none;
    box-sizing: border-box;
    height: 39px;
    min-height: 39px;
    line-height: normal;
    appearance: menulist;
    -webkit-appearance: menulist;
  }

  .command-description {
    font-size: 12px;
    color: var(--secondary-text-color);
    margin-top: 8px;
    padding: 8px;
    border-left: 2px solid var(--primary-color, #03a9f4);
    background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.05);
    border-radius: 4px;
  }

  .command-params {
    margin-top: 12px;
    padding-top: 12px;
    border-top: 1px solid var(--divider-color, #e0e0e0);
  }

  .command-response {
    font-size: 12px;
    font-family: monospace;
    background: var(--input-bg);
    border: 1px solid var(--input-border);
    border-radius: 6px;
    padding: 12px;
    margin-top: 12px;
    /* normal (not pre-wrap): the structured/grid render path is built from
       indented template literals; pre-wrap would render that indentation as
       blank lines. The plain-text fallback wraps itself in a pre-wrap span to
       preserve multi-line CLI output. */
    white-space: normal;
    word-wrap: break-word;
    max-height: 200px;
    overflow-y: auto;
    color: var(--primary-text-color);
  }

  /* === Channel Management === */
  .channel-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .channel-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    border: 1px solid var(--divider-color, #e0e0e0);
    border-radius: 6px;
    background: var(--card-background-color, #fff);
    transition: all 0.15s;
  }

  .channel-item:hover {
    background: rgba(0, 0, 0, 0.02);
    border-color: var(--primary-color, #03a9f4);
  }

  .channel-item-info {
    flex: 1;
  }

  .channel-item-name {
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-text-color);
  }

  .channel-item-idx {
    font-size: 12px;
    color: var(--secondary-text-color);
    font-family: monospace;
  }

  .channel-item-actions {
    display: flex;
    gap: 6px;
  }

  .channel-action-btn {
    padding: 6px 10px;
    border: 1px solid var(--divider-color, #e0e0e0);
    border-radius: 4px;
    background: var(--card-background-color, #fff);
    color: var(--primary-text-color);
    font-size: 12px;
    cursor: pointer;
    transition: all 0.15s;
  }

  .channel-action-btn:hover {
    background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
    border-color: var(--primary-color, #03a9f4);
    color: var(--primary-color, #03a9f4);
  }

  .channel-add-button {
    padding: 10px 16px;
    border: 2px dashed var(--divider-color, #e0e0e0);
    border-radius: 6px;
    background: transparent;
    color: var(--primary-color, #03a9f4);
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s;
  }

  .channel-add-button:hover {
    border-color: var(--primary-color, #03a9f4);
    background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.05);
  }

  /* === Danger Zone === */
  .danger-zone {
    padding: 12px;
    border: 2px solid var(--error-color, #db4437);
    border-radius: 8px;
    background: rgba(219, 68, 55, 0.05);
  }

  .danger-zone-title {
    font-size: 13px;
    font-weight: 600;
    color: var(--error-color, #db4437);
    margin-bottom: 8px;
  }

  .danger-button {
    padding: 8px 16px;
    border: none;
    border-radius: 6px;
    background: var(--error-color, #db4437);
    color: #fff;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s;
  }

  .danger-button:hover {
    opacity: 0.9;
  }

  .danger-button:active {
    transform: scale(0.98);
  }

  .danger-button:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  /* === Neighbor Info === */
  .neighbor-chart-container {
    width: 100%;
    height: 300px;
    border: 1px solid var(--divider-color, #e0e0e0);
    border-radius: 8px;
    background: var(--input-bg);
  }

  .neighbor-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 12px;
  }

  .neighbor-table th {
    padding: 10px 12px;
    text-align: left;
    font-size: 12px;
    font-weight: 600;
    color: var(--primary-text-color);
    border-bottom: 2px solid var(--divider-color, #e0e0e0);
    background: rgba(0, 0, 0, 0.02);
  }

  .neighbor-table td {
    padding: 10px 12px;
    font-size: 12px;
    color: var(--primary-text-color);
    border-bottom: 1px solid var(--divider-color, #e0e0e0);
  }

  .neighbor-table tr:hover {
    background: rgba(0, 0, 0, 0.02);
  }

  /* === Narrow Mode Responsive === */
  :host([narrow]) .device-card {
    border-radius: 0;
    border-left: none;
    border-right: none;
  }

  :host([narrow]) .dialog {
    max-width: 100%;
    border-radius: 0;
  }

  :host([narrow]) .device-stats {
    grid-template-columns: 1fr;
  }

  :host([narrow]) .dialog-overlay {
    padding: 0;
  }

  :host([narrow]) .tab-bar button {
    font-size: 12px;
    padding: 10px 12px;
  }

  :host([narrow]) .conversation-sidebar {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid var(--divider-color, #e0e0e0);
    max-height: 40%;
  }

  :host([narrow]) .chat-layout {
    flex-direction: column;
  }

  /* === Sender Colors === */
  .sender-color-1 {
    --sender-color: #FF6B6B;
  }

  .sender-color-2 {
    --sender-color: #4ECDC4;
  }

  .sender-color-3 {
    --sender-color: #FFE66D;
  }

  .sender-color-4 {
    --sender-color: #95E1D3;
  }

  .sender-color-5 {
    --sender-color: #C7CEEA;
  }

  .sender-color-6 {
    --sender-color: #FF8B94;
  }

  .sender-color-7 {
    --sender-color: #B5EAD7;
  }

  .sender-color-8 {
    --sender-color: #FFB7B2;
  }

  /* === Accessibility === */
  .bubble:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }

  .send-button:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }

  .dialog-button:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }

  .form-input:focus-visible,
  .form-select:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }
`)),Fd=/^<[^>]+>\s*/,Ed=/@\[([^\]]+)\]/g,Dd=/@(\w+)/g,zd={recipient_type_entity:"select.meshcore_recipient_type",channel_entity:"select.meshcore_channel",contact_entity:"select.meshcore_contact",channel_entity_pattern:"binary_sensor.meshcore_{prefix}_ch_{idx}_messages",contact_entity_pattern:"binary_sensor.meshcore_{prefix}_{contact}_messages",domain_filter:"meshcore"},Od={...zd,hours_to_show:48,initial_hours:1,max_messages:500,show_date_separators:!0,group_messages:!0,group_timeout:300,timestamp_format:"relative",update_mode:"auto",refresh_interval:30,enable_cache:!0,cache_ttl:86400,cache_max_size:5242880};async function Id(e){try{return(await e.callWS({type:"meshcore_chat/get_devices"})).devices||[]}catch(e){return[]}}async function Rd(e,t){try{const a={type:"meshcore_chat/get_contacts"};return t&&(a.entry_id=t),(await e.callWS(a)).contacts||[]}catch(e){return[]}}async function Td(e,t){try{const a={type:"meshcore_chat/get_channels"};return t&&(a.entry_id=t),(await e.callWS(a)).channels||[]}catch(e){return[]}}async function qd(e,t){try{const a={type:"meshcore_chat/get_device_config"};return t&&(a.entry_id=t),await e.callWS(a)}catch(e){throw new Error("Failed to get device configuration")}}async function Bd(e,t,a){try{const i={type:"meshcore_chat/set_device_config",settings:t};return a&&(i.entry_id=a),await e.callWS(i)}catch(e){return{success:!1,changed:[]}}}async function Nd(e,t,a,i){try{const n={type:"meshcore_chat/execute_local",command:t};return a&&(n.args=a),i&&(n.entry_id=i),await e.callWS(n)}catch(e){const t=e;return{response:t&&t.message?t.code?`${t.message} (${t.code})`:t.message:String(e),success:!1,timestamp:(new Date).toISOString()}}}async function jd(e,t,a,i){try{const n={type:"meshcore_chat/execute_remote",target_prefix:t,command:a};return i&&(n.entry_id=i),await e.callWS(n)}catch(e){const t=e;return{response:t&&t.message?t.code?`${t.message} (${t.code})`:t.message:String(e),success:!1,timestamp:(new Date).toISOString()}}}async function Pd(e,t,a,i){try{const n={type:"meshcore_chat/add_contact",public_key:t};return a&&(n.name=a),i&&(n.entry_id=i),await e.callWS(n)}catch(e){return{success:!1}}}async function Ld(e,t,a){try{const i={type:"meshcore_chat/remove_contact",public_key:t};return a&&(i.entry_id=a),await e.callWS(i)}catch(e){return{success:!1}}}async function Hd(e,t="all",a={}){try{var i,n;const o={type:"meshcore_chat/get_contacts_paginated",category:t,limit:null!==(i=a.limit)&&void 0!==i?i:50,offset:null!==(n=a.offset)&&void 0!==n?n:0};return void 0!==a.nodeType&&(o.node_type=a.nodeType),a.search&&(o.search=a.search),a.entryId&&(o.entry_id=a.entryId),a.sortBy&&(o.sort_by=a.sortBy),await e.callWS(o)}catch(e){return{contacts:[],total:0,counts:{clients:0,repeaters:0,room_servers:0,sensors:0}}}}class Vd{constructor(){this._counts={},this._lastRead={},this._subscribers=new Set,this._markReadRequestedHandler=null,this._readProgress=null,this._postSwitchTimerHandler=null}subscribe(e){return this._subscribers.add(e),()=>{this._subscribers.delete(e)}}onMarkReadRequested(e){this._markReadRequestedHandler=e}onPostSwitchTimerFire(e){this._postSwitchTimerHandler=e}requestMarkRead(e){e&&this._markReadRequestedHandler&&this._markReadRequestedHandler(e)}_notify(){for(const e of[...this._subscribers])try{e()}catch(e){console.error("[UnreadController] subscriber callback threw",e)}}ingestBackendData(e,t){var a,i;this._counts={...null!==(a=null==e?void 0:e.unread)&&void 0!==a?a:{}},this._lastRead={...null!==(i=null==e?void 0:e.last_read)&&void 0!==i?i:{}},this._notify()}clearEntity(e){e&&this._counts[e]&&(this._counts={...this._counts,[e]:0},this._notify())}get counts(){return this._counts}get lastRead(){return this._lastRead}beginConversation(e,t){var a;this._clearPostSwitchTimer();const i={entityId:e,anchorId:e&&null!==(a=this._lastRead[e])&&void 0!==a?a:null,unreadCountAtSelection:t,graceUntil:Date.now()+1e3,postSwitchTimer:null,markReadFired:!1,lastMarkReadIdSent:null};this._readProgress=i,i.postSwitchTimer=setTimeout(()=>{var e;this._readProgress===i&&(i.postSwitchTimer=null,null===(e=this._postSwitchTimerHandler)||void 0===e||e.call(this))},1e3)}endConversation(){this._clearPostSwitchTimer(),this._readProgress=null}_clearPostSwitchTimer(){const e=this._readProgress;null!=e&&e.postSwitchTimer&&(clearTimeout(e.postSwitchTimer),e.postSwitchTimer=null)}resetUnreadCountAtSelection(){this._readProgress&&(this._readProgress.unreadCountAtSelection=0)}maybeReanchorOnLateData(e){const t=this._readProgress;if(!t||t.entityId!==e)return!1;if(null!==t.anchorId)return!1;if(t.markReadFired)return!1;const a=this._lastRead[e];return!!a&&(t.anchorId=a,!0)}onScrollState(e){return this._tryAdvanceCursor(e.entityId,e.lastMessageVisible,e.hasNewerMessages,e.bufferTailId,!1)}onPillJump(e){return this._tryAdvanceCursor(e.entityId,!0,!1,e.bufferTailId,!0)}_tryAdvanceCursor(e,t,a,i,n){if(!e)return!1;const o=this._readProgress;return!(!o||o.entityId!==e||!n&&Date.now()<o.graceUntil||a||!t||null!==i&&i===o.lastMarkReadIdSent||(o.lastMarkReadIdSent=i,o.markReadFired=!0,this.requestMarkRead(e),0))}badgeCount(e,t,a){if(!e)return 0;const i=this._counts;if(a&&i[a])return i[a];const n=/^\d+$/.test(e),o=t?`meshcore_${t}_ch_${e}_messages`:null;for(const[t,a]of Object.entries(i))if(!(a<=0))if(n){if(o){if(t.endsWith(o))return a}else if(t.endsWith(`_ch_${e}_messages`))return a}else{const i=e.substring(0,6);if(t.endsWith(`_${i}_messages`))return a}return 0}dividerAfterGroupIdx(e){const t=this._readProgress;if(!t)return null;let a=null;if(t.anchorId){let i=0;for(const n of e)if("date-separator"!==n.type){if(n.group.messages.some(e=>e.id===t.anchorId)){a=i;break}i++}}if(null!==a){let t=0;for(const i of e)if("date-separator"!==i.type){if(t>a&&!i.group.isOutgoing)return t;t++}return null}if(t.unreadCountAtSelection>0){const a=e.filter(e=>"date-separator"!==e.type).length,i=a-t.unreadCountAtSelection;return i>=0?i:0}return null}cursorAtTail(e,t){return!(!e||null===t)&&this._lastRead[e]===t}}function Kd(e){for(let t=e.length-1;t>=0;t--){const a=e[t].id;if(!a.startsWith("optimistic_"))return a}return null}const Ud="meshcore-timestamp-format",Wd="meshcore-display-prefs-changed";function Gd(e="relative"){try{const e=localStorage.getItem(Ud);if("relative"===e||"time"===e||"datetime"===e)return e}catch(e){}return e}const Xd="meshcore-clock-format",Yd="meshcore-date-format";function Qd(e,t,a){try{const a=localStorage.getItem(e);if(a&&t.includes(a))return a}catch(e){}return a}function Jd(e,t){try{localStorage.setItem(e,t)}catch(e){}window.dispatchEvent(new Event(Wd))}const Zd=()=>Qd(Xd,["system","12","24"],"system"),ep=()=>Qd(Yd,["system","d-mon","dmy","mdy","iso"],"system"),tp=e=>String(e).padStart(2,"0");function ap(e,t=!1,a=Zd()){const i={hour:"numeric",minute:"2-digit"};return t&&(i.second="2-digit"),"12"===a&&(i.hour12=!0),"24"===a&&(i.hourCycle="h23",i.hour="2-digit"),e.toLocaleTimeString(void 0,i)}function ip(e,t=!0,a=ep()){const i=e.getDate(),n=e.getMonth()+1,o=e.getFullYear();switch(a){case"d-mon":{const a=e.toLocaleDateString("en-GB",{month:"short"});return t?`${i} ${a} ${o}`:`${i} ${a}`}case"dmy":return t?`${tp(i)}/${tp(n)}/${o}`:`${tp(i)}/${tp(n)}`;case"mdy":return t?`${tp(n)}/${tp(i)}/${o}`:`${tp(n)}/${tp(i)}`;case"iso":return`${o}-${tp(n)}-${tp(i)}`;default:return e.toLocaleDateString(void 0,t?{day:"numeric",month:"short",year:"numeric"}:{day:"numeric",month:"short"})}}const np="meshcore-map-heard-within",op=()=>Qd(np,["0","1","7","30"],"0"),rp=e=>Jd(np,e),sp=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function lp(e){const t=(new TextEncoder).encode(e),a=t.length,i=8*a,n=a+9+63&-64,o=new Uint8Array(n);o.set(t),o[a]=128;const r=new DataView(o.buffer);r.setUint32(n-4,i,!1);let s=1779033703,l=3144134277,c=1013904242,d=2773480762,p=1359893119,h=2600822924,u=528734635,m=1541459225;const g=new Int32Array(64);for(let e=0;e<n;e+=64){for(let t=0;t<16;t++)g[t]=r.getInt32(e+4*t,!1);for(let e=16;e<64;e++){const t=(g[e-15]>>>7|g[e-15]<<25)^(g[e-15]>>>18|g[e-15]<<14)^g[e-15]>>>3,a=(g[e-2]>>>17|g[e-2]<<15)^(g[e-2]>>>19|g[e-2]<<13)^g[e-2]>>>10;g[e]=g[e-16]+t+g[e-7]+a|0}let t=s,a=l,i=c,n=d,o=p,f=h,v=u,b=m;for(let e=0;e<64;e++){const r=b+((o>>>6|o<<26)^(o>>>11|o<<21)^(o>>>25|o<<7))+(o&f^~o&v)+sp[e]+g[e]|0,s=t&a^t&i^a&i;b=v,v=f,f=o,o=n+r|0,n=i,i=a,a=t,t=r+(((t>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10))+s|0)|0}s=s+t|0,l=l+a|0,c=c+i|0,d=d+n|0,p=p+o|0,h=h+f|0,u=u+v|0,m=m+b|0}const f=e=>(e>>>0).toString(16).padStart(8,"0");return f(s)+f(l)+f(c)+f(d)+f(p)+f(h)+f(u)+f(m)}function cp(e){const t=[],a=new Set;let i;const n=new RegExp(Ed.source,"g");for(;null!==(i=n.exec(e));){const e=i[1];a.has(e)||(a.add(e),t.push(e))}const o=new RegExp(Dd.source,"g");for(;null!==(i=o.exec(e));){const e=i[1];a.has(e)||(a.add(e),t.push(e))}return t}function dp(e){if(!e||0===e.length)return{};let t,a;for(const i of e)void 0===t&&"string"==typeof i.flood_scope&&(t=i.flood_scope),void 0===a&&"boolean"==typeof i.region_scope&&(a=i.region_scope);return{floodScope:t,regionScope:a}}function pp(e){var t,a;const i=dp(e.rx_log_data);return{id:e.id,sendId:e.send_id,sender:e.sender,text:e.text,timestamp:new Date(e.timestamp),senderTimestamp:e.sender_timestamp,isOutgoing:e.outgoing,isSystem:!1,raw:e.text,mentions:cp(e.text),rxLogData:e.rx_log_data,deliveryStatus:e.delivery_status?{status:e.delivery_status,ackReceived:e.ack_received,repeatsObservable:e.repeats_observable,collecting:e.collecting,repeaterCount:e.repeater_count,roundTripMs:e.round_trip_ms}:void 0,repeaterCount:e.repeater_count,floodScope:null!==(t=e.flood_scope)&&void 0!==t?t:i.floodScope,regionScope:null!==(a=e.region_scope)&&void 0!==a?a:i.regionScope}}function hp(e,t){return e.getFullYear()!==t.getFullYear()||e.getMonth()!==t.getMonth()||e.getDate()!==t.getDate()}function up(e){const t=new Date,a=new Date(t.getFullYear(),t.getMonth(),t.getDate()),i=new Date(e.getFullYear(),e.getMonth(),e.getDate()),n=Math.floor((a.getTime()-i.getTime())/864e5);return 0===n?"Today":1===n?"Yesterday":n<7?e.toLocaleDateString(void 0,{weekday:"long"}):e.toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric"})}function mp(e,t){switch(t){case"relative":default:return function(e){const t=Date.now()-e.getTime(),a=Math.floor(t/1e3),i=Math.floor(a/60),n=Math.floor(i/60);return a<60?"now":i<60?`${i}m`:n<24?`${n}h`:ip(e,!1)}(e);case"time":return function(e){const t=new Date;return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}(e)?ap(e):`${ip(e,!1)}, ${ap(e)}`;case"datetime":return`${ip(e,!1)}, ${ap(e)}`}}class gp{constructor(e){this._messages=[],this._pendingCalls=new Map,this._loading=!1,this._error=null,this._entityId=null,this._hass=null,this._pollTimer=null,this._realtimeSubscriptions=[],this._realtimeGeneration=0,this._retryCount=0,this._onChange=null,this._fetchDebounce=null,this._active=!1,this._hasOlderMessages=!0,this._loadingOlder=!1,this._hasNewerMessages=!1,this._loadingNewer=!1,this._newMessagesWhileAway=0,this._userAtBottom=!1,this._config=e}get messages(){return this._messages}get loading(){return this._loading}get error(){return this._error}get entityId(){return this._entityId}get loadingOlder(){return this._loadingOlder}get hasOlderMessages(){return this._hasOlderMessages}get loadingNewer(){return this._loadingNewer}get hasNewerMessages(){return this._hasNewerMessages}get newMessagesWhileAway(){return this._newMessagesWhileAway}setUserAtBottom(e){this._userAtBottom!==e&&(this._userAtBottom=e,e&&!this._hasNewerMessages&&this._newMessagesWhileAway>0&&(this._newMessagesWhileAway=0,this._notify()))}resetNewMessagesCounter(){0!==this._newMessagesWhileAway&&(this._newMessagesWhileAway=0,this._notify())}setOnChange(e){this._onChange=e}setHass(e){this._hass=e}setConfig(e){const t=e.entry_id!==this._config.entry_id;this._config=e,t&&(this._pendingCalls.clear(),this._stopUpdates(),this._entityId=null,this._messages=[],this._active=!1,this._notify())}async switchEntity(e,t=null){if(e!==this._entityId){if(this._stopUpdates(),this._entityId=e,this._pendingCalls.clear(),this._messages=[],this._error=null,this._retryCount=0,this._hasOlderMessages=!0,this._loadingOlder=!1,this._hasNewerMessages=!1,this._loadingNewer=!1,this._newMessagesWhileAway=0,this._userAtBottom=!1,!e)return this._active=!1,void this._notify();this._active=!0,this._startUpdates(e),t?await this._fetchAroundAnchor(e,t):await this._fetchMessages(e)}}async refresh(){this._entityId&&await this._fetchMessages(this._entityId)}addOptimisticMessage(e,t){const a=new Date,i=`optimistic_${a.getTime()}_${Math.random().toString(36).slice(2,8)}`,n={id:i,sender:e,text:t,timestamp:a,isOutgoing:!0,isSystem:!1,raw:`${e}: ${t}`,mentions:cp(t)};return this._messages=[...this._messages,n],this._pendingCalls.set(i,{...n}),this._notify(),i}confirmOptimisticMessage(e){this._pendingCalls.delete(e)}markOptimisticFailed(e){const t=this._pendingCalls.get(e);if(this._pendingCalls.delete(e),!t)return;const a={...t,deliveryStatus:{status:"failed",collecting:!1}};this._messages=[...this._messages.filter(t=>t.id!==e),a],this._messages.sort((e,t)=>e.timestamp.getTime()-t.timestamp.getTime()),this._notify()}async loadOlderMessages(){if(!this._loadingOlder&&this._hasOlderMessages&&this._hass&&this._entityId){this._loadingOlder=!0,this._notify();try{const e=this._messages.find(e=>!e.id.startsWith("rt_")&&!e.id.startsWith("optimistic_")),t={type:"meshcore_chat/get_stored_messages",entity_id:this._entityId,limit:50};e&&(t.before=e.id);const a=await this._hass.callWS(t),i=a.messages.map(pp);this._hasOlderMessages=a.has_more;const n=new Set(this._messages.map(e=>e.id)),o=i.filter(e=>!n.has(e.id));o.length>0&&(this._messages=[...o,...this._messages],this._messages.sort((e,t)=>e.timestamp.getTime()-t.timestamp.getTime()))}catch(e){}finally{this._loadingOlder=!1,this._notify()}}}async loadNewerMessages(){if(!this._loadingNewer&&this._hasNewerMessages&&this._hass&&this._entityId){this._loadingNewer=!0,this._notify();try{let t;for(let e=this._messages.length-1;e>=0;e--){const a=this._messages[e].id;if(!a.startsWith("rt_")&&!a.startsWith("optimistic_")){t=a;break}}const a={type:"meshcore_chat/get_stored_messages",entity_id:this._entityId,limit:50};t&&(a.after=t);const i=await this._hass.callWS(a),n=i.messages.map(pp);this._hasNewerMessages=i.has_more;const o=new Set(n.map(e=>e.id));this._messages=this._messages.filter(e=>!e.id.startsWith("rt_")||!o.has(e.id.substring(3)));const r=new Set(this._messages.map(e=>e.id)),s=n.filter(e=>!r.has(e.id));if(s.length>0){var e;this._messages=[...this._messages,...s],this._messages.sort((e,t)=>e.timestamp.getTime()-t.timestamp.getTime());const t=null!==(e=this._config.max_messages)&&void 0!==e?e:500;this._messages.length>t&&(this._messages=this._messages.slice(-t),this._hasOlderMessages=!0)}}catch(e){}finally{this._loadingNewer=!1,this._notify()}}}async fetchAroundTimestamp(e){const t=new Date(e).getTime(),a=this._messages.find(e=>Math.abs(e.timestamp.getTime()-t)<2e3);if(a)return!0;let i=0;for(;this._hasOlderMessages&&i<20;){await this.loadOlderMessages(),i++;const e=this._messages.find(e=>Math.abs(e.timestamp.getTime()-t)<2e3);if(e)return!0}return!1}pause(){this._stopUpdates(),this._active=!1,this._fetchDebounce&&(clearTimeout(this._fetchDebounce),this._fetchDebounce=null)}async resume(){this._entityId&&!this._active&&(this._active=!0,this._startUpdates(this._entityId),await this._fetchMessages(this._entityId))}destroy(){this._pendingCalls.clear(),this._stopUpdates(),this._active=!1,this._fetchDebounce&&(clearTimeout(this._fetchDebounce),this._fetchDebounce=null),this._onChange=null}_keepOptimistic(e,t){var a;if("failed"===(null===(a=e.deliveryStatus)||void 0===a?void 0:a.status))return!0;const i=e.sendId?t.find(t=>t.sendId===e.sendId||t.id===e.sendId):void 0;return!i}async _fetchMessages(e){if(this._hass){this._loading=!0,this._notify();try{var t;const a=50,i=await this._hass.callWS({type:"meshcore_chat/get_stored_messages",entity_id:e,limit:a}),n=i.messages.map(pp);this._hasOlderMessages=i.has_more;const o=new Set(n.map(e=>e.id)),r=this._messages.filter(e=>{if(e.id.startsWith("optimistic_"))return this._keepOptimistic(e,n);if(e.id.startsWith("rt_")){const t=e.id.substring(3);return!o.has(t)}return!1});this._messages=[...n,...r],this._messages.sort((e,t)=>e.timestamp.getTime()-t.timestamp.getTime());const s=null!==(t=this._config.max_messages)&&void 0!==t?t:500;this._messages.length>s&&(this._messages=this._messages.slice(-s),this._hasOlderMessages=!0),this._error=null,this._retryCount=0}catch(e){const t=e instanceof Error?e.message:String(e);this._error=`Failed to fetch messages: ${t}`,this._retryCount++}finally{this._loading=!1,this._notify()}}}async _fetchAroundAnchor(e,t){if(this._hass){this._loading=!0,this._notify();try{var a;const i=await async function(e,t,a,i=25,n=50){return e.callWS({type:"meshcore_chat/get_messages_around",entity_id:t,anchor_id:a,before_limit:i,after_limit:n})}(this._hass,e,t),n=i.messages.map(pp);this._hasOlderMessages=i.has_more_before,this._hasNewerMessages=i.has_more_after;const o=new Set(n.map(e=>e.id)),r=this._messages.filter(e=>{if(e.id.startsWith("optimistic_"))return this._keepOptimistic(e,n);if(e.id.startsWith("rt_")){const t=e.id.substring(3);return!o.has(t)}return!1});this._messages=[...n,...r],this._messages.sort((e,t)=>e.timestamp.getTime()-t.timestamp.getTime());const s=null!==(a=this._config.max_messages)&&void 0!==a?a:500;this._messages.length>s&&(this._messages=this._messages.slice(-s),this._hasOlderMessages=!0),this._error=null,this._retryCount=0}catch(e){const t=e instanceof Error?e.message:String(e);this._error=`Failed to fetch messages: ${t}`,this._retryCount++}finally{this._loading=!1,this._notify()}}}_startUpdates(e){this._startPolling(e),this._subscribeRealtime(e).catch(()=>{})}async _subscribeRealtime(e){if(!this._hass)return;const t=this._realtimeGeneration,a=[];try{const i=await this._hass.connection.subscribeEvents(a=>{t===this._realtimeGeneration&&this._active&&this._entityId===e&&a.data.entity_id===e&&this._handleRealtimeMessage(a.data)},"meshcore_message");if(a.push(i),t!==this._realtimeGeneration)return void a.forEach(e=>e());const n=await this._hass.connection.subscribeEvents(a=>{t===this._realtimeGeneration&&this._active&&this._entityId===e&&a.data.entity_id===e&&this._handleDeliveryUpdate(a.data)},"meshcore_delivery_update");if(a.push(n),t!==this._realtimeGeneration)return void a.forEach(e=>e());this._realtimeSubscriptions=a}catch(e){throw a.forEach(e=>e()),e}}_handleRealtimeMessage(e){var t;if(e.entry_id&&this._config.entry_id&&e.entry_id!==this._config.entry_id)return;const a=String(e.sender_name||e.sender||e.pubkey_prefix||e.contact_public_key||"Unknown"),i=null!==(t=e.message)&&void 0!==t?t:e.text;if("boolean"==typeof e.outgoing?e.outgoing:a===this._config.node_name){if(a&&i){const t=e.ack_received,r=e.repeater_count,s=e.rx_log_data,l=e.message_type;let c;var n;if("dm"===l||"direct"===l)c={status:!0===t?"delivered":"sent",ackReceived:null!=t?t:void 0};else c={status:"sent",repeaterCount:null!=r?r:null!==(n=null==s?void 0:s.length)&&void 0!==n?n:0};c.repeatsObservable=e.repeats_observable,c.collecting=e.collecting;const d=e.send_id,p=this._messages.find(e=>d&&(e.sendId===d||e.id===d)),h=this._messages.filter(e=>{var t;return e.id.startsWith("optimistic_")&&!e.sendId&&"failed"!==(null===(t=e.deliveryStatus)||void 0===t?void 0:t.status)&&e.sender===a&&e.text===i}),u=null!=p?p:1===h.length?h[0]:void 0;var o;u&&(u.sendId=d,"failed"!==(null===(o=u.deliveryStatus)||void 0===o?void 0:o.status)&&(u.deliveryStatus=c),s&&(u.rxLogData=s),this._notify())}!this._entityId||this._hasNewerMessages||this._hasOlderMessages||this._debouncedFetch(this._entityId)}else{if(a&&i){let t=i.replace(Fd,"");const n=a+": ";t.startsWith(n)&&(t=t.substring(n.length));const o=e.timestamp||(new Date).toISOString(),r=new Date(o),s=e.id||e.message_id||e.send_id||function(e,t,a){return lp(`${e}|${t}|${a}`).substring(0,12)}(o,a,i),l=`rt_${s}`,c=this._messages.some(e=>e.id===l||e.id===s);if(!c){const n=cp(t),o=e.rx_log_data,s={id:l,sender:a,text:t,timestamp:r,isOutgoing:!1,isSystem:!1,raw:i,mentions:n,rxLogData:o&&o.length>0?o:void 0,...dp(o)};this._messages.push(s),this._messages.sort((e,t)=>e.timestamp.getTime()-t.timestamp.getTime()),this._userAtBottom&&!this._hasNewerMessages||this._newMessagesWhileAway++,this._notify()}}!this._entityId||this._hasNewerMessages||this._hasOlderMessages||this._debouncedFetch(this._entityId)}}_debouncedFetch(e){this._fetchDebounce&&clearTimeout(this._fetchDebounce),this._fetchDebounce=setTimeout(async()=>{if(this._fetchDebounce=null,this._active)try{await this._fetchMessages(e)}catch(e){}},500)}_handleDeliveryUpdate(e){var t;if(e.entry_id&&this._config.entry_id&&e.entry_id!==this._config.entry_id)return;const a=e.rx_log_data;if(e.progressive&&a&&a.length>0){const t=e.sender_name,i=e.message,n=e.timestamp;if(t&&i){const e=n?new Date(n).getTime():0;for(let n=this._messages.length-1;n>=0;n--){const o=this._messages[n];if(!o.isOutgoing&&o.sender===t&&o.text===i&&(!e||Math.abs(o.timestamp.getTime()-e)<1e4))return o.rxLogData=a,o.repeaterCount=a.length,void this._notify()}}}const i=e.send_id,n=null!==(t=e.delivery_status)&&void 0!==t?t:e.status,o=e.repeater_count,r=e.ack_received,s=e.round_trip_ms,l=e.progressive;if(!i)return;let c;c=n||(!0===r?"delivered":!l||void 0!==o&&0!==o?"sent":"waiting");const d=this._messages.find(e=>e.isOutgoing&&(e.sendId===i||e.id===i));if(d){var p,h,u,m,g,f,v,b,y;if(!1===(null===(p=d.deliveryStatus)||void 0===p?void 0:p.collecting)&&l)return;if("failed"===(null===(h=d.deliveryStatus)||void 0===h?void 0:h.status)&&"failed"!==c)return;d.deliveryStatus={...d.deliveryStatus,status:l?null!==(u=null===(m=d.deliveryStatus)||void 0===m?void 0:m.status)&&void 0!==u?u:"sent":c,repeatsObservable:null!==(g=e.repeats_observable)&&void 0!==g?g:null===(f=d.deliveryStatus)||void 0===f?void 0:f.repeatsObservable,collecting:null!==(v=null!==(b=e.collecting)&&void 0!==b?b:l)&&void 0!==v?v:null===(y=d.deliveryStatus)||void 0===y?void 0:y.collecting,repeaterCount:o,ackReceived:r,roundTripMs:s},a&&(d.rxLogData=a),void 0!==o&&(d.repeaterCount=o),this._notify()}}async _pollFetch(e){if(this._hass&&!this._hasNewerMessages)try{let a;for(let e=this._messages.length-1;e>=0;e--){const t=this._messages[e].id;if(!t.startsWith("rt_")&&!t.startsWith("optimistic_")){a=t;break}}const i={type:"meshcore_chat/get_stored_messages",entity_id:e,limit:50};a&&(i.after=a);const n=await this._hass.callWS(i);if(0===n.messages.length)return this._error=null,void(this._retryCount=0);const o=n.messages.map(pp),r=new Set(this._messages.map(e=>e.id)),s=o.filter(e=>!r.has(e.id));if(s.length>0){var t;const e=new Set(s.map(e=>e.id));this._messages=this._messages.filter(t=>!t.id.startsWith("rt_")||!e.has(t.id.substring(3))),this._messages=this._messages.filter(e=>!e.id.startsWith("optimistic_")||!s.some(t=>t.sender===e.sender&&t.text===e.text)),this._messages=[...this._messages,...s],this._messages.sort((e,t)=>e.timestamp.getTime()-t.timestamp.getTime());const a=null!==(t=this._config.max_messages)&&void 0!==t?t:500;this._messages.length>a&&(this._messages=this._messages.slice(-a),this._hasOlderMessages=!0),this._notify()}this._error=null,this._retryCount=0}catch(e){this._retryCount++}}_startPolling(e){const t=()=>{if(!this._active)return;const a=this._retryCount>=5?6e4:3e4;this._pollTimer=setTimeout(async()=>{if(this._active){try{await this._pollFetch(e)}catch(e){}t()}},a)};t()}_stopUpdates(){this._realtimeGeneration++,this._pollTimer&&(clearTimeout(this._pollTimer),this._pollTimer=null);for(const e of this._realtimeSubscriptions)e();this._realtimeSubscriptions=[]}_notify(){this._onChange&&this._onChange()}}const fp=["👍","❤️","😂","🎉","👏","🔥","😀","😃","😄","😁","😅","😂","🤣","😊","😇","🙂","🙃","😉","😌","😍","🥰","😘","😗","😙","😚","😋","😛","😝","😜","🤪","🤨","🧐","🤓","😎","🥸","🤩","🥳","😏","😒","😞","😔","😟","😕","🙁","😣","😖","😫","😩","🥺","😢","😭","😤","😠","😡","🤬","🤯","😳","🥵","🥶","😱","😨","😰","😥","😓","🤗","🤔","🤭","🤫","🤥","😶","👍","👎","👊","✊","🤛","🤜","🤞","✌️","🤟","🤘","👌","🤌","🤏","👈","👉","👆","👇","☝️","👋","🤚","🖐️","✋","🖖","👏","🙌","👐","🤲","🤝","🙏","✍️","💅","🤳","💪","❤️","🧡","💛","💚","💙","💜","🖤","🤍","🤎","💔","❤️‍🔥","❤️‍🩹","💕","💞","💓","💗","💖","💘","💝","💟","💌","💢","💥","💫","💦","💨","🕳️","💬","👁️‍🗨️","🗨️","🗯️","💭","🎉","🎊","🎈","🎁","🎀","🪅","🪆","🏆","🥇","🥈","🥉","⚽","⚾","🥎","🏀","🏐","🏈","🏉","🎾","🥏","🎳","🏏","🏑","🏒","🥍","🏓","🏸","🥊","🥋","🥅","⛳","🔥","⭐","🌟","✨","⚡","💡","🔦","🏮","🪔","📱","💻","⌚","📷","📺","📻","🎵","🎶","🚀"],vp=["👍","❤️","😂","🎉","👏","🔥"],bp=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);function yp(e,t){const a=(new TextEncoder).encode(e),i=new Uint8Array(a.length+4);i.set(a),new DataView(i.buffer).setUint32(a.length,t>>>0,!0);const n=function(e){const t=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),a=e.length,i=64*Math.ceil((a+9)/64),n=new Uint8Array(i);n.set(e),n[a]=128;const o=new DataView(n.buffer);o.setUint32(i-8,Math.floor(8*a/2**32)),o.setUint32(i-4,8*a>>>0);const r=new Uint32Array(64),s=(e,t)=>e>>>t|e<<32-t;for(let e=0;e<i;e+=64){for(let t=0;t<16;t++)r[t]=o.getUint32(e+4*t);for(let e=16;e<64;e++){const t=s(r[e-15],7)^s(r[e-15],18)^r[e-15]>>>3,a=s(r[e-2],17)^s(r[e-2],19)^r[e-2]>>>10;r[e]=r[e-16]+t+r[e-7]+a>>>0}let[a,i,n,l,c,d,p,h]=t;for(let e=0;e<64;e++){const t=h+(s(c,6)^s(c,11)^s(c,25))+(c&d^~c&p)+bp[e]+r[e]>>>0,o=(s(a,2)^s(a,13)^s(a,22))+(a&i^a&n^i&n)>>>0;h=p,p=d,d=c,c=l+t>>>0,l=n,n=i,i=a,a=t+o>>>0}t[0]+=a,t[1]+=i,t[2]+=n,t[3]+=l,t[4]+=c,t[5]+=d,t[6]+=p,t[7]+=h}const l=new Uint8Array(32),c=new DataView(l.buffer);for(let e=0;e<8;e++)c.setUint32(4*e,t[e]);return l}(i);let o=0n;for(let e=0;e<5;e++)o=o<<8n|BigInt(n[e]);let r="";for(let e=7;e>=0;e--)r+="0123456789abcdefghjkmnpqrstvwxyz"[Number(o>>BigInt(5*e)&31n)];return r}function _p(e){var t;if(!e)return!1;const a=Intl.Segmenter;return(!a||1===[...new a(void 0,{granularity:"grapheme"}).segment(e)].length)&&((null!==(t=e.codePointAt(0))&&void 0!==t?t:0)>=8192||e.includes("️")||e.includes("⃣"))}const xp=/^(?:@\[(.*)\])?(.+?)\n([a-hjkmnp-tv-z0-9]{8})$/i,wp=/^(.+?)(?:@\[(.*)\])?\n([a-hjkmnp-tv-z0-9]{8})$/i,kp=/^r:([0-9a-f]{4}):([0-9a-f]{2})$/;function $p(e){const t=kp.exec(e);if(t){const e=fp[parseInt(t[2],16)];return e?{emoji:e,hash:t[1],kind:"open"}:null}const a=xp.exec(e);if(a&&_p(a[2]))return{emoji:a[2],target:a[1],hash:a[3].toLowerCase(),kind:"mc1"};const i=wp.exec(e);return i&&_p(i[1])?{emoji:i[1],target:i[2],hash:i[3].toLowerCase(),kind:"mc1"}:null}function Cp(e,t,a){const i=a.text.length>40?`${a.text.slice(0,40)}…`:a.text;return{...e,id:`react_${e.id}`,isSystem:!0,isOutgoing:!0,text:`You reacted ${t} to ${a.sender}: “${i}”`,mentions:[],activityTarget:a.id,activityText:e.text}}const Sp=/^m:(-?\d{1,2}(?:\.\d+)?),(-?\d{1,3}(?:\.\d+)?)(?:\|([^|]*))?(?:\|([\s\S]*))?$/;function Ap(e){var t;const a=Sp.exec(e);if(!a)return null;const i=Number(a[1]),n=Number(a[2]);return Math.abs(i)>90||Math.abs(n)>180?null:{lat:i,lon:n,label:(null!==(t=a[3])&&void 0!==t?t:"").trim()}}const Mp=/<([0-9a-fA-F]{64}):([1-4]):([^<>\r\n]*)>/;function Fp(e){const t=Mp.exec(e);if(!t)return null;const a=(e.slice(0,t.index)+e.slice(t.index+t[0].length)).replace(/\s+/g," ").trim();return{publicKey:t[1].toLowerCase(),type:Number(t[2]),name:t[3].trim(),caption:a}}function Ep(e,t,a){return`<${e.toLowerCase()}:${t}:${a.replace(/[<>\r\n]/g,"").trim()}>`}const Dp={1:"Companion",2:"Repeater",3:"Room server",4:"Sensor"};function zp(e,t,a,i){const n=e=>e*Math.PI/180,o=n(a-e),r=n(i-t),s=Math.sin(o/2)**2+Math.cos(n(e))*Math.cos(n(a))*Math.sin(r/2)**2;return 12742e3*Math.asin(Math.sqrt(s))}const Op=new Set([2,3]);let Ip=class extends xd{constructor(){super(...arguments),this.conversations=[],this.activeId=null,this.unreadCounts={},this.nodePrefix=null,this.previews={},this._query="",this._activeFilter="all",this._filteredConversations=[]}updated(e){(e.has("conversations")||e.has("_activeFilter")||e.has("_query")||e.has("previews"))&&this._updateFiltered()}render(){return ad(s||(s=pc`
      <div class="sidebar-header">
        <span class="sidebar-title">Chats</span>
        <button
          class="compose-btn"
          title="Manage contacts & channels"
          aria-label="Manage contacts and channels"
          @click=${0}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.49.49 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 00-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
          </svg>
        </button>
      </div>
      <input
        class="list-search"
        type="search"
        placeholder="Search chats"
        aria-label="Search chats"
        .value=${0}
        @input=${0} />
      <div class="filter-bar" role="tablist" aria-label="Conversation filter">
        ${0}
        ${0}
      </div>
      <div
        class="conversation-list"
        role="listbox"
        aria-label="Conversations"
        @keydown=${0}>
        ${0}
      </div>
    `),()=>this.dispatchEvent(new CustomEvent("manage-requested",{bubbles:!0,composed:!0})),this._query,e=>{this._query=e.target.value},this._renderFilterBtn("all","All"),this._renderFilterBtn("unread","Unread"),this._onListKeyDown,this._renderSections())}_onListKeyDown(e){var t;const a=e.key;if("ArrowDown"!==a&&"ArrowUp"!==a&&"Home"!==a&&"End"!==a&&"Enter"!==a&&" "!==a)return;const i=this.shadowRoot;if(!i)return;const n=Array.from(i.querySelectorAll(".conversation-item"));if(0===n.length)return;const o=i.activeElement;let r=o?n.indexOf(o):-1;"Enter"!==a&&" "!==a?(e.preventDefault(),"Home"===a?r=0:"End"===a?r=n.length-1:"ArrowDown"===a?r=r<0?0:Math.min(r+1,n.length-1):"ArrowUp"===a&&(r=r<0?n.length-1:Math.max(r-1,0)),null===(t=n[r])||void 0===t||t.focus()):o&&r>=0&&(e.preventDefault(),o.click())}_renderFilterBtn(e,t){const a=this._activeFilter===e;return ad(l||(l=pc`
      <button
        class="filter-btn ${0}"
        role="tab"
        aria-selected=${0}
        @click=${0}>
        ${0}
      </button>
    `),a?"active":"",a?"true":"false",()=>{this._activeFilter=e},t)}_sections(){const e=this._filteredConversations.filter(e=>!("pubkey_prefix"in e)),t=this._filteredConversations.filter(e=>"pubkey_prefix"in e).sort((e,t)=>{var a,i;return((null===(a=this._previewFor(t))||void 0===a?void 0:a.ts)||"").localeCompare((null===(i=this._previewFor(e))||void 0===i?void 0:i.ts)||"")});return{channels:e,dms:t}}_renderSections(){const{channels:e,dms:t}=this._sections();if(!e.length&&!t.length)return ad(c||(c=pc`<div class="empty-state"><div class="empty-text">${0}</div></div>`),this._emptyMessage());let a=0;const i=(e,t,i)=>ad(d||(d=pc`
      <div class="list-section">
        <span>${0}</span>
        <button class="section-add" title=${0} aria-label=${0}
          @click=${0}>＋</button>
      </div>
      ${0}
    `),e,i,i,()=>this.dispatchEvent(new CustomEvent("manage-requested",{bubbles:!0,composed:!0})),t.length?t.map(e=>this._renderConversation(e,a++)):ad(p||(p=pc`<div class="section-empty">None yet</div>`)));return ad(h||(h=pc`
      ${0}
      ${0}
    `),i("Channels",e,"Add a channel"),i("Direct messages",t,"Add a contact"))}_previewFor(e){var t;const a="pubkey_prefix"in e,i=Object.entries(this.previews||{});if(a){var n;const t=e.pubkey_prefix.substring(0,6);return null===(n=i.find(([e])=>e.endsWith(`_${t}_messages`)))||void 0===n?void 0:n[1]}const o=e.channel_idx,r=this.nodePrefix?`meshcore_${this.nodePrefix}_ch_${o}_messages`:`_ch_${o}_messages`;return null===(t=i.find(([e])=>e.endsWith(r)))||void 0===t?void 0:t[1]}_emptyMessage(){return"unread"===this._activeFilter?"No unread conversations":"No conversations yet"}_renderConversation(e,t){const a="pubkey_prefix"in e,i=a?e.pubkey_prefix:String(e.channel_idx),n=a?e.adv_name:e.name,o=this._previewFor(e),r=function(e,t){if(!e||!e.text)return"";let a=e.text;const i=$p(a);return i?a=`Reacted ${i.emoji}`:Ap(a)?a="📍 Location":Fp(a)&&(a="👤 Contact"),a=a.replace(/\s+/g," ").trim(),e.outgoing?`You: ${a}`:t&&e.sender?`${e.sender}: ${a}`:a}(o,!a),s=r||(a?e.pubkey_prefix:"No messages yet"),l=o?function(e,t=Date.now()){const a=Date.parse(e);if(!Number.isFinite(a))return"";const i=Math.max(0,(t-a)/6e4);return i<1?"now":i<60?`${Math.floor(i)}m`:i<1440?`${Math.floor(i/60)}h`:i<10080?`${Math.floor(i/1440)}d`:new Date(a).toLocaleDateString(void 0,{day:"numeric",month:"short"})}(o.ts):"",c=a&&Op.has(e.type),d=a?e.adv_name.replace(/[^0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088F\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5C\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDC-\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7DC\uA7F1-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10107}-\u{10133}\u{10140}-\u{10178}\u{1018A}\u{1018B}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{102E1}-\u{102FB}\u{10300}-\u{10323}\u{1032D}-\u{1034A}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{103D1}-\u{103D5}\u{10400}-\u{1049D}\u{104A0}-\u{104A9}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{105C0}-\u{105F3}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10858}-\u{10876}\u{10879}-\u{1089E}\u{108A7}-\u{108AF}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{108FB}-\u{1091B}\u{10920}-\u{10939}\u{10940}-\u{10959}\u{10980}-\u{109B7}\u{109BC}-\u{109CF}\u{109D2}-\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A40}-\u{10A48}\u{10A60}-\u{10A7E}\u{10A80}-\u{10A9F}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10AEB}-\u{10AEF}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B58}-\u{10B72}\u{10B78}-\u{10B91}\u{10BA9}-\u{10BAF}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10CFA}-\u{10D23}\u{10D30}-\u{10D39}\u{10D40}-\u{10D65}\u{10D6F}-\u{10D85}\u{10E60}-\u{10E7E}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10EC2}-\u{10EC7}\u{10F00}-\u{10F27}\u{10F30}-\u{10F45}\u{10F51}-\u{10F54}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FCB}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11052}-\u{1106F}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{110F0}-\u{110F9}\u{11103}-\u{11126}\u{11136}-\u{1113F}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111D0}-\u{111DA}\u{111DC}\u{111E1}-\u{111F4}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{1123F}\u{11240}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{112F0}-\u{112F9}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11380}-\u{11389}\u{1138B}\u{1138E}\u{11390}-\u{113B5}\u{113B7}\u{113D1}\u{113D3}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{11450}-\u{11459}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{114D0}-\u{114D9}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11650}-\u{11659}\u{11680}-\u{116AA}\u{116B8}\u{116C0}-\u{116C9}\u{116D0}-\u{116E3}\u{11700}-\u{1171A}\u{11730}-\u{1173B}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118F2}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{11950}-\u{11959}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11BC0}-\u{11BE0}\u{11BF0}-\u{11BF9}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C50}-\u{11C6C}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D50}-\u{11D59}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11DA0}-\u{11DA9}\u{11DB0}-\u{11DDB}\u{11DE0}-\u{11DE9}\u{11EE0}-\u{11EF2}\u{11F02}\u{11F04}-\u{11F10}\u{11F12}-\u{11F33}\u{11F50}-\u{11F59}\u{11FB0}\u{11FC0}-\u{11FD4}\u{12000}-\u{12399}\u{12400}-\u{1246E}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342F}\u{13441}-\u{13446}\u{13460}-\u{143FA}\u{14400}-\u{14646}\u{16100}-\u{1611D}\u{16130}-\u{16139}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A60}-\u{16A69}\u{16A70}-\u{16ABE}\u{16AC0}-\u{16AC9}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B50}-\u{16B59}\u{16B5B}-\u{16B61}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16D40}-\u{16D6C}\u{16D70}-\u{16D79}\u{16E40}-\u{16E96}\u{16EA0}-\u{16EB8}\u{16EBB}-\u{16ED3}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{16FF2}-\u{16FF6}\u{17000}-\u{18CD5}\u{18CFF}-\u{18D1E}\u{18D80}-\u{18DF2}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B132}\u{1B150}-\u{1B152}\u{1B155}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1CCF0}-\u{1CCF9}\u{1D2C0}-\u{1D2D3}\u{1D2E0}-\u{1D2F3}\u{1D360}-\u{1D378}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1D7CE}-\u{1D7FF}\u{1DF00}-\u{1DF1E}\u{1DF25}-\u{1DF2A}\u{1E030}-\u{1E06D}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E140}-\u{1E149}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E2F0}-\u{1E2F9}\u{1E4D0}-\u{1E4EB}\u{1E4F0}-\u{1E4F9}\u{1E5D0}-\u{1E5ED}\u{1E5F0}-\u{1E5FA}\u{1E6C0}-\u{1E6DE}\u{1E6E0}-\u{1E6E2}\u{1E6E4}\u{1E6E5}\u{1E6E7}-\u{1E6ED}\u{1E6F0}-\u{1E6F4}\u{1E6FE}\u{1E6FF}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E8C7}-\u{1E8CF}\u{1E900}-\u{1E943}\u{1E94B}\u{1E950}-\u{1E959}\u{1EC71}-\u{1ECAB}\u{1ECAD}-\u{1ECAF}\u{1ECB1}-\u{1ECB4}\u{1ED01}-\u{1ED2D}\u{1ED2F}-\u{1ED3D}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{1F100}-\u{1F10C}\u{1FBF0}-\u{1FBF9}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B81D}\u{2B820}-\u{2CEAD}\u{2CEB0}-\u{2EBE0}\u{2EBF0}-\u{2EE5D}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}\u{31350}-\u{33479}]/gu,"").substring(0,2).toUpperCase()||e.pubkey_prefix.substring(0,2).toUpperCase():"#",p=this.activeId===i,h=this._getUnreadCount(i),f=h>0?`${n}, ${s}, ${h} unread`:`${n}, ${s}`,v=this._filteredConversations.some(e=>("pubkey_prefix"in e?e.pubkey_prefix:String(e.channel_idx))===this.activeId);return ad(u||(u=pc`
      <div
        class=${0}
        role="option"
        tabindex=${0}
        aria-selected=${0}
        aria-label=${0}
        @click=${0}>
        <div class="conversation-avatar ${0}">${0}</div>
        <div class="conversation-info">
          <div class="conversation-top">
            <span class="conversation-name">${0}</span>
            ${0}
          </div>
          <div class="conversation-detail">${0}</div>
        </div>
        ${0}
      </div>
    `),p?"conversation-item active":"conversation-item",p||!v&&0===t?"0":"-1",p?"true":"false",f,()=>this.dispatchEvent(new CustomEvent("conversation-selected",{detail:{id:i,isContact:a}})),a?c?"infra":"":"channel",d,n,l?ad(m||(m=pc`<span class="conversation-age">${0}</span>`),l):"",s,h>0?ad(g||(g=pc`<div class="unread-badge" aria-hidden="true">${0}</div>`),h):"")}_getUnreadCount(e){return this.unread?this.unread.badgeCount(e,this.nodePrefix):0}_updateFiltered(){const e=this._query.trim().toLowerCase();this._filteredConversations=this.conversations.filter(t=>{const a="pubkey_prefix"in t,i=a?t.pubkey_prefix:String(t.channel_idx),n=a?t.adv_name:t.name;if(e&&!(n||"").toLowerCase().includes(e))return!1;const o=this._getUnreadCount(i);return!("unread"===this._activeFilter&&o<=0||a&&Op.has(t.type)&&!this._previewFor(t)&&o<=0&&this.activeId!==i&&!e)})}};Ip.styles=bc(f||(f=pc`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 280px;
      border-right: 1px solid var(--divider-color, #e0e0e0);
      background: var(--card-background-color, #fff);
      flex-shrink: 0;
    }

    .sidebar-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 12px 0;
      gap: 8px;
    }

    .sidebar-title {
      font-size: 16px;
      font-weight: 600;
      color: var(--primary-text-color);
      flex: 1;
    }

    .compose-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border: none;
      border-radius: 50%;
      background: transparent;
      color: var(--secondary-text-color);
      cursor: pointer;
      transition: all 0.15s;
      flex-shrink: 0;
    }

    .compose-btn:hover {
      background: rgba(0, 0, 0, 0.05);
      color: var(--primary-text-color);
    }

    .filter-bar {
      display: flex;
      padding: 12px 12px 8px;
      gap: 4px;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
    }

    .filter-btn {
      flex: 1;
      padding: 6px 4px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 16px;
      background: transparent;
      color: var(--secondary-text-color, #727272);
      font-size: 11px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.15s;
      white-space: nowrap;
    }

    .filter-btn:hover {
      background: rgba(0, 0, 0, 0.03);
      color: var(--primary-text-color);
    }

    .filter-btn.active {
      background: var(--primary-color, #03a9f4);
      border-color: var(--primary-color, #03a9f4);
      color: #fff;
    }

    .conversation-list {
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
    }

    .conversation-list::-webkit-scrollbar {
      width: 6px;
    }

    .conversation-list::-webkit-scrollbar-track {
      background: transparent;
    }

    .conversation-list::-webkit-scrollbar-thumb {
      background: var(--scrollbar-thumb, var(--scrollbar-thumb-color, #c1c1c1));
      border-radius: 3px;
    }

    .conversation-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      cursor: pointer;
      transition: background 0.15s;
      outline: none;
    }

    .conversation-item:hover,
    .conversation-item:focus-visible {
      background: rgba(0, 0, 0, 0.02);
    }

    .conversation-item:focus-visible {
      outline: 2px solid var(--primary-color, #03a9f4);
      outline-offset: -2px;
    }

    .conversation-item.active {
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
      border-left: 3px solid var(--primary-color, #03a9f4);
    }

    .conversation-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: var(--primary-color, #03a9f4);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 14px;
      flex-shrink: 0;
    }

    .conversation-avatar.channel {
      background: var(--accent-color, #ff9800);
    }

    .conversation-avatar.infra {
      background: #8e5bb5;
    }

    .conversation-info {
      flex: 1;
      overflow: hidden;
    }

    .conversation-top {
      display: flex;
      align-items: baseline;
      gap: 6px;
    }

    .conversation-top .conversation-name {
      flex: 1;
      min-width: 0;
    }

    .conversation-age {
      flex-shrink: 0;
      font-size: 11px;
      color: var(--secondary-text-color, #727272);
    }

    .list-search {
      margin: 8px 12px 0;
      padding: 7px 10px;
      border-radius: 8px;
      border: 1px solid var(--divider-color, #e0e0e0);
      background: var(--secondary-background-color, rgba(127, 127, 127, 0.08));
      color: var(--primary-text-color);
      font: inherit;
      font-size: 13px;
    }

    .list-section {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 14px 4px;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--secondary-text-color, #727272);
    }

    .section-add {
      border: none;
      background: none;
      color: var(--primary-color, #03a9f4);
      font-size: 16px;
      cursor: pointer;
      padding: 0 4px;
      line-height: 1;
    }

    .section-empty {
      padding: 4px 14px 8px;
      font-size: 12px;
      color: var(--secondary-text-color, #727272);
    }

    .conversation-name {
      font-size: 14px;
      font-weight: 500;
      color: var(--primary-text-color);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .conversation-detail {
      font-size: 12px;
      color: var(--secondary-text-color, #727272);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .chevron {
      flex-shrink: 0;
      color: var(--secondary-text-color, #727272);
      font-size: 18px;
      line-height: 1;
      opacity: 0.5;
    }

    .unread-badge {
      background: var(--primary-color, #03a9f4);
      color: #fff;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 11px;
      font-weight: 600;
      flex-shrink: 0;
    }

    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: var(--secondary-text-color, #727272);
      text-align: center;
      padding: 24px;
    }

    .empty-icon {
      font-size: 32px;
      margin-bottom: 8px;
      opacity: 0.5;
    }

    .empty-text {
      font-size: 13px;
    }
  `)),hc([Sd({type:Array})],Ip.prototype,"conversations",void 0),hc([Sd({type:String})],Ip.prototype,"activeId",void 0),hc([Sd({attribute:!1})],Ip.prototype,"unread",void 0),hc([Sd({type:Object})],Ip.prototype,"unreadCounts",void 0),hc([Sd({type:String})],Ip.prototype,"nodePrefix",void 0),hc([Sd({attribute:!1})],Ip.prototype,"previews",void 0),hc([Ad()],Ip.prototype,"_query",void 0),hc([Ad()],Ip.prototype,"_activeFilter",void 0),hc([Ad()],Ip.prototype,"_filteredConversations",void 0),Ip=hc([kd("meshcore-conversation-list")],Ip);const Rp=["a[href]","button:not([disabled])",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])",'[tabindex]:not([tabindex="-1"])'].join(","),Tp=[];let qp=!1;function Bp(){qp||(qp=!0,document.addEventListener("keydown",Np,!0))}function Np(e){0!==Tp.length&&Tp[Tp.length-1]._handleKeyDown(e)}class jp{constructor(e,t){this.host=e,this.opts=t,this._wasOpen=!1,this._previousActive=null,this._inStack=!1,this.host.addController(this),Bp()}hostConnected(){Bp()}hostDisconnected(){this._inStack&&this._popStack(),this._previousActive=null,this._wasOpen=!1}hostUpdated(){const e=this.opts.isOpen();if(e&&!this._wasOpen)this._previousActive=this._currentDocumentActive(),this._pushStack(),this._focusFirstSoon();else if(!e&&this._wasOpen){this._popStack();const e=this._previousActive;if(this._previousActive=null,e&&e.isConnected&&"function"==typeof e.focus)try{e.focus()}catch(e){}}this._wasOpen=e}_pushStack(){this._inStack||(Tp.push(this),this._inStack=!0)}_popStack(){const e=Tp.indexOf(this);e>=0&&Tp.splice(e,1),this._inStack=!1}_getFocusables(){var e,t,a;const i=null!==(e=null===(t=(a=this.opts).getScope)||void 0===t?void 0:t.call(a))&&void 0!==e?e:this.host.shadowRoot;return i?Array.from(i.querySelectorAll(Rp)).filter(e=>!(e.hasAttribute("aria-hidden")||e.hidden||null===e.offsetParent&&0===e.getClientRects().length)):[]}_focusFirstSoon(){queueMicrotask(()=>{var e,t,a;if(!this.opts.isOpen())return;const i=null!==(e=null===(t=(a=this.opts).getScope)||void 0===t?void 0:t.call(a))&&void 0!==e?e:this.host.shadowRoot;if(i&&this._scopeContainsFocus(i))return;const n=this._getFocusables();if(0!==n.length)try{n[0].focus()}catch(e){}})}_scopeContainsFocus(e){let t=document.activeElement;for(;t;){if(t===e)return!0;if(e.host===t)return!0;if("contains"in e&&e.contains(t))return!0;const a=t.shadowRoot;if(!a||!a.activeElement)break;t=a.activeElement}return!1}_currentDocumentActive(){let e=document.activeElement;for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}_handleKeyDown(e){var t,a,i;if(!this.opts.isOpen())return;if("Escape"===e.key)return e.preventDefault(),e.stopPropagation(),void this.opts.onEscape();if("Tab"!==e.key)return;const n=this._getFocusables();if(0===n.length)return;const o=null!==(t=null===(a=(i=this.opts).getScope)||void 0===a?void 0:a.call(i))&&void 0!==t?t:this.host.shadowRoot,r=o?this._findFocusedInScope(o):null,s=r?n.indexOf(r):-1;let l;l=e.shiftKey?s<=0?n.length-1:s-1:-1===s||s>=n.length-1?0:s+1,e.preventDefault(),e.stopPropagation();try{n[l].focus()}catch(e){}}_findFocusedInScope(e){let t=document.activeElement;for(;t;){if(e===t||"contains"in e&&e.contains(t)){if(t.shadowRoot&&t.shadowRoot.activeElement){t=t.shadowRoot.activeElement;continue}return t}if(e.host===t){t=e.activeElement;continue}const a=t.shadowRoot;if(!a||!a.activeElement)break;t=a.activeElement}return null}}function Pp(e,t){new jp(e,t)}let Lp=class extends xd{constructor(){super(),this.open=!1,this.narrow=!1,this.editMode=!1,this.initialChannelIdx=0,this.initialChannelName="",this.initialScope="",this.initialKey="",this.availableIndices=[],this._channelIdx=0,this._channelName="",this._customKey="",this._autoKey=!0,this._scope="",this._availableScopes=null,this._globalAllowed=!1,this._saving=!1,this._error=null,this._initialized=!1,Pp(this,{isOpen:()=>this.open,onEscape:()=>this._onCancel()})}willUpdate(e){if(e.has("open")&&this.open&&!this._initialized){if(this.editMode){this._channelIdx=this.initialChannelIdx,this._channelName=this.initialChannelName,this._scope=this.initialScope;const e=lp(this.initialChannelName).slice(0,32);this.initialKey&&this.initialKey.toLowerCase()!==e?(this._autoKey=!1,this._customKey=this.initialKey.toLowerCase()):(this._autoKey=!0,this._customKey="")}else this._channelIdx=this.availableIndices.length>0?this.availableIndices[0]:0;this._initialized=!0,this._loadScopes()}e.has("open")&&!this.open&&(this._initialized=!1)}async _loadScopes(){if(this._availableScopes=null,!this.hass)return this._availableScopes=[],void(this._globalAllowed=!1);const e=await async function(e,t){try{const a={type:"meshcore_chat/get_flood_scopes"};t&&(a.entry_id=t);const i=await e.callWS(a);return{scopes:i.scopes||[],global:!!i.global}}catch(e){return{scopes:[],global:!1}}}(this.hass,this.entryId);this._availableScopes=e.scopes,this._globalAllowed=e.global}render(){if(!this.open)return;const e=this._customKey.length,t=32===e||0===e||this._autoKey;return ad(v||(v=pc`
      <div
        class="dialog-overlay"
        @click=${0}>
        <div
          class="dialog"
          role="dialog"
          aria-modal="true"
          aria-label=${0}>
          <div class="dialog-header">
            <div class="dialog-header-title">${0}</div>
          </div>
          <div class="dialog-body">
            ${0}

            <!-- Channel Index -->
            <div class="form-group">
              <label class="form-label required">Channel Index</label>
              ${0}
              <div class="form-description">${0}</div>
            </div>

            <!-- Channel Name -->
            <div class="form-group">
              <label class="form-label required">Channel Name</label>
              <input
                type="text"
                class="form-input"
                placeholder="e.g., general, alerts"
                .value=${0}
                @input=${0}
              />
              <div class="form-description">Friendly name for the channel</div>
            </div>

            <!-- Region Scope -->
            <div class="form-group">
              <label class="form-label">Region scope</label>
              ${0}
            </div>

            <!-- Auto Key Toggle -->
            <div class="form-group">
              <label class="form-toggle">
                <input
                  type="checkbox"
                  ?checked=${0}
                  @change=${0}
                />
                <span class="form-toggle-label">Auto-generate key from name</span>
              </label>
              <div class="form-description">
                Auto-key generates SHA256 hash of the channel name
              </div>
            </div>

            <!-- Custom Key (if not auto) -->
            ${0}
          </div>
          <div class="dialog-footer">
            <button
              class="dialog-button"
              ?disabled=${0}
              @click=${0}>
              Cancel
            </button>
            <button
              class="dialog-button primary"
              ?disabled=${0}
              @click=${0}>
              ${0}
            </button>
          </div>
        </div>
      </div>
    `),this._onOverlayClick,this.editMode?"Edit channel":"Add channel",this.editMode?"Edit Channel":"Add Channel",this._error?ad(b||(b=pc`<div style="padding: 12px; background: rgba(219, 68, 55, 0.1); border-radius: 6px; color: var(--error-color, #db4437); font-size: 13px; margin-bottom: 16px;">
                  ${0}
                </div>`),this._error):"",this.editMode?ad(y||(y=pc`
                    <select class="form-select" disabled>
                      <option value=${0} selected>${0}</option>
                    </select>`),this._channelIdx,this._channelIdx):ad(_||(_=pc`
                    <select
                      class="form-select"
                      @change=${0}>
                      ${0}
                    </select>`),e=>{this._channelIdx=parseInt(e.target.value,10)},this.availableIndices.map(e=>ad(x||(x=pc`
                        <option value=${0} ?selected=${0}>${0}</option>
                      `),e,e===this._channelIdx,e))),this.editMode?"Channel index cannot be changed":"Select an available channel slot",this._channelName,e=>{this._channelName=e.target.value},this._renderScopeField(),this._autoKey,e=>{this._autoKey=e.target.checked},this._autoKey?"":ad(w||(w=pc`
                  <div class="form-group">
                    <label class="form-label required">Custom Key</label>
                    <input
                      type="text"
                      class="form-input hex-input"
                      placeholder="32 hex characters (a-f, 0-9)"
                      .value=${0}
                      @input=${0}
                    />
                    <div class="hex-counter">${0} / 32 hex characters</div>
                    <div class="form-description">
                      ${0}
                    </div>
                  </div>
                `),this._customKey,e=>{const t=e.target.value.toLowerCase().replace(/[^a-f0-9]/g,"");this._customKey=t.slice(0,32)},this._customKey.length,t?"Valid hex key (16 bytes / 128-bit AES)":`Invalid: expected 32 characters, got ${e}`),this._saving,this._onCancel,!this._channelName||this._saving||!this._autoKey&&!t||!this.editMode&&0===this.availableIndices.length,this._onSave,this._saving?"Saving...":"Save")}_renderScopeField(){const e=this._availableScopes;if(null===e)return ad(k||(k=pc`
        <select class="form-select scope-select" disabled>
          <option selected>Loading…</option>
        </select>
      `));const t=this._globalAllowed?"*":"",a=!this._scope||"*"===this._scope,i=!!this._scope&&"*"!==this._scope&&!e.includes(this._scope);return 0!==e.length||i||this._globalAllowed?ad(C||(C=pc`
      <select
        class="form-select scope-select"
        @change=${0}>
        <option value=${0} ?selected=${0}>All regions (global flood)</option>
        ${0}
        ${0}
      </select>
      <div class="form-description">
        Send this channel's messages only through repeaters configured
        for the selected region. "All regions" floods the whole mesh.
      </div>
    `),e=>{this._scope=e.target.value},t,a,i?ad(S||(S=pc`<option value=${0} selected>${0} (not in allowlist)</option>`),this._scope,this._scope):"",e.map(e=>ad(A||(A=pc`
            <option value=${0} ?selected=${0}>${0}</option>
          `),e,e===this._scope,e))):ad($||($=pc`
        <select class="form-select scope-select" disabled>
          <option selected>All regions (global flood)</option>
        </select>
        <div class="form-description scope-empty-hint">
          No region scopes are configured yet. Add scope names in the
          <a
            href="/config/integrations/integration/meshcore"
            target="_blank"
            rel="noopener">MeshCore integration</a>
          first (Configure → Global Settings → Flood Scope Allowlist),
          then reopen this dialog. Region names are agreed within your
          local mesh community — check your community's reference, or
          scan for nearby regions from the MeshCore mobile app.
        </div>
      `))}async _onSave(){if(this.hass&&this._channelName){this._saving=!0,this._error=null;try{(await async function(e,t,a,i,n,o){try{const r={type:"meshcore_chat/set_channel",channel_idx:t,name:a};return i&&(r.key=i),n&&(r.entry_id=n),void 0!==o&&(r.scope=o),await e.callWS(r)}catch(e){return{success:!1}}}(this.hass,this._channelIdx,this._channelName,this._autoKey?void 0:this._customKey,this.entryId,this._scope)).success?(this.dispatchEvent(new CustomEvent("channel-saved",{detail:{channelIdx:this._channelIdx,name:this._channelName,scope:this._scope},bubbles:!0})),this._reset()):this._error="Failed to save channel"}catch(e){this._error=`Error: ${String(e)}`}finally{this._saving=!1}}}_onCancel(){this._reset(),this.dispatchEvent(new CustomEvent("close",{bubbles:!0}))}_onOverlayClick(e){e.target===e.currentTarget&&this._onCancel()}_reset(){this._channelIdx=0,this._channelName="",this._customKey="",this._autoKey=!0,this._scope="",this._availableScopes=null,this._globalAllowed=!1,this._error=null}};Lp.styles=[Md,bc(M||(M=pc`
      :host {
        display: block;
      }

      :host([narrow]) .dialog {
        max-width: 100%;
      }

      .dialog {
        max-width: 500px;
      }

      .hex-input {
        font-family: monospace;
        letter-spacing: 1px;
      }

      .hex-counter {
        font-size: 11px;
        color: var(--secondary-text-color);
        margin-top: 4px;
      }
    `))],hc([Sd({type:Boolean})],Lp.prototype,"open",void 0),hc([Sd({type:Object})],Lp.prototype,"hass",void 0),hc([Sd({type:String})],Lp.prototype,"entryId",void 0),hc([Sd({type:Boolean})],Lp.prototype,"narrow",void 0),hc([Sd({type:Boolean})],Lp.prototype,"editMode",void 0),hc([Sd({type:Number})],Lp.prototype,"initialChannelIdx",void 0),hc([Sd({type:String})],Lp.prototype,"initialChannelName",void 0),hc([Sd({type:String})],Lp.prototype,"initialScope",void 0),hc([Sd({type:String})],Lp.prototype,"initialKey",void 0),hc([Sd({type:Array})],Lp.prototype,"availableIndices",void 0),hc([Ad()],Lp.prototype,"_channelIdx",void 0),hc([Ad()],Lp.prototype,"_channelName",void 0),hc([Ad()],Lp.prototype,"_customKey",void 0),hc([Ad()],Lp.prototype,"_autoKey",void 0),hc([Ad()],Lp.prototype,"_scope",void 0),hc([Ad()],Lp.prototype,"_availableScopes",void 0),hc([Ad()],Lp.prototype,"_globalAllowed",void 0),hc([Ad()],Lp.prototype,"_saving",void 0),hc([Ad()],Lp.prototype,"_error",void 0),Lp=hc([kd("meshcore-channel-dialog")],Lp);let Hp=class extends xd{willUpdate(){this._tabInitialized||(this._tabInitialized=!0,this.initialTab&&(this._activeTab=this.initialTab))}constructor(){super(),this.narrow=!1,this._tabInitialized=!1,this._activeTab="contacts",this._contacts=[],this._channels=[],this._searchQuery="",this._categoryFilter="all",this._typeFilter="all",this._loading=!1,this._actionInProgress=null,this._confirmingRemoveContact=null,this._confirmingRemoveChannel=null,this._channelDialogOpen=!1,this._editingChannel=null,this._maxChannels=4,Pp(this,{isOpen:()=>!0,onEscape:()=>this._close()})}connectedCallback(){super.connectedCallback(),this._loadData()}render(){var e,t,a,i,n,o,r,s;return ad(F||(F=pc`
      <div
        class="dialog"
        role="dialog"
        aria-modal="true"
        aria-label="Manage contacts and channels"
        @click=${0}>
        <div class="dialog-header">
          <span class="dialog-title">Manage</span>
          <button class="close-btn" aria-label="Close" @click=${0}>✕</button>
        </div>

        <div class="tab-bar">
          <button
            class=${0}
            @click=${0}>
            Contacts
          </button>
          <button
            class=${0}
            @click=${0}>
            Channels
          </button>
        </div>

        ${0}

        <div class="list-area">
          ${0}
        </div>
      </div>

      ${0}
    `),e=>e.stopPropagation(),this._close,"contacts"===this._activeTab?"active":"",()=>this._switchTab("contacts"),"channels"===this._activeTab?"active":"",()=>this._switchTab("channels"),"contacts"===this._activeTab?ad(E||(E=pc`
              <div class="filter-bar">
                <span class="filter-bar-label">Show</span>
                <div class="filter-bar-group">
                  ${0}
                </div>
                <span class="filter-bar-label">Type</span>
                <div class="filter-bar-group">
                  ${0}
                </div>
              </div>
              <div class="search-bar">
                <input
                  type="text"
                  aria-label="Search contacts"
                  placeholder="Search contacts..."
                  .value=${0}
                  @input=${0}
                />
              </div>
            `),["all","added","discovered"].map(e=>ad(D||(D=pc`
                      <button
                        class="filter-chip ${0}"
                        @click=${0}
                      >
                        ${0}
                      </button>
                    `),this._categoryFilter===e?"active":"",()=>{this._categoryFilter=e},"all"===e?"All":"added"===e?"Added":"Discovered")),["all","clients","repeaters"].map(e=>ad(z||(z=pc`
                      <button
                        class="filter-chip ${0}"
                        @click=${0}
                      >
                        ${0}
                      </button>
                    `),this._typeFilter===e?"active":"",()=>{this._typeFilter=e},"all"===e?"All":"clients"===e?"Clients":"Repeaters")),this._searchQuery,e=>{this._searchQuery=e.target.value}):"",this._loading?ad(O||(O=pc`<div class="loading-state">
                <div class="loading-spinner"></div>
                Loading...
              </div>`)):"contacts"===this._activeTab?this._renderContacts():this._renderChannels(),this._channelDialogOpen?ad(I||(I=pc`
            <meshcore-channel-dialog
              .open=${0}
              .hass=${0}
              .entryId=${0}
              .narrow=${0}
              .editMode=${0}
              .initialChannelIdx=${0}
              .initialChannelName=${0}
              .initialScope=${0}
              .initialKey=${0}
              .availableIndices=${0}
              @channel-saved=${0}
              @close=${0}
            ></meshcore-channel-dialog>
          `),!0,this.hass,this.entryId,this.narrow,!!this._editingChannel,null!==(e=null===(t=this._editingChannel)||void 0===t?void 0:t.channel_idx)&&void 0!==e?e:0,null!==(a=null===(i=this._editingChannel)||void 0===i?void 0:i.name)&&void 0!==a?a:"",null!==(n=null===(o=this._editingChannel)||void 0===o?void 0:o.scope)&&void 0!==n?n:"",null!==(r=null===(s=this._editingChannel)||void 0===s||null===(s=s.settings)||void 0===s?void 0:s.channel_secret)&&void 0!==r?r:"",this._getAvailableIndices(),this._onChannelSaved,()=>{this._channelDialogOpen=!1,this._editingChannel=null}):"")}_renderContacts(){const e=this._filterContacts();if(0===e.length){const e=!!this._searchQuery||"all"!==this._categoryFilter||"all"!==this._typeFilter;return ad(R||(R=pc`
        <div class="empty-state">
          <div class="empty-icon"><svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" opacity="0.5"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg></div>
          <div class="empty-text">
            ${0}
          </div>
        </div>
      `),e?"No contacts match":"No contacts discovered")}const t=[...e].sort((e,t)=>e.added_to_node!==t.added_to_node?e.added_to_node?-1:1:e.adv_name.localeCompare(t.adv_name));return t.map(e=>this._renderContactItem(e))}_renderContactItem(e){const t=e.pubkey_prefix.substring(0,2).toUpperCase(),a=e.added_to_node,i=this._confirmingRemoveContact===e.public_key,n=this._actionInProgress===e.public_key;return ad(T||(T=pc`
      <div class="contact-item">
        <div class="contact-avatar">${0}</div>
        <div class="contact-info">
          <div class="contact-name">${0}</div>
          <div class="contact-meta">
            <span class="contact-prefix">${0}</span>
            <span class="badge ${0}">
              ${0}
            </span>
          </div>
        </div>
        ${0}
      </div>
    `),t,e.adv_name||"Unknown",e.pubkey_prefix,a?"added":"discovered",a?ad(q||(q=pc`<svg viewBox="0 0 24 24" width="10" height="10" fill="currentColor" style="vertical-align: -1px; margin-right: 2px;"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>Added`)):"Discovered",i?ad(B||(B=pc`
              <div class="confirm-inline">
                <span class="confirm-text">Remove?</span>
                <button class="confirm-btn yes" @click=${0}>Yes</button>
                <button class="confirm-btn no" @click=${0}>No</button>
              </div>
            `),()=>this._doRemoveContact(e),()=>{this._confirmingRemoveContact=null}):a?ad(N||(N=pc`
                <button
                  class="action-btn remove"
                  ?disabled=${0}
                  @click=${0}>
                  ${0}
                </button>
              `),n,()=>{this._confirmingRemoveContact=e.public_key},n?"...":"Remove"):ad(j||(j=pc`
                <button
                  class="action-btn add"
                  ?disabled=${0}
                  @click=${0}>
                  ${0}
                </button>
              `),n,()=>this._doAddContact(e),n?"...":ad(P||(P=pc`<svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" style="vertical-align: -1px; margin-right: 4px;"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>Add`))))}_renderChannels(){if(0===this._channels.length)return ad(L||(L=pc`
        <div class="empty-state">
          <div class="empty-icon">#</div>
          <div class="empty-text">No channels configured</div>
        </div>
        <button class="add-channel-btn" @click=${0}>
          + Add Channel
        </button>
      `),this._openAddChannel);const e=this._confirmingRemoveChannel;return ad(H||(H=pc`
      ${0}
      <button class="add-channel-btn" @click=${0}>
        + Add Channel
      </button>
    `),this._channels.map(t=>{const a=e===t.channel_idx,i=this._actionInProgress===`ch-${t.channel_idx}`;return ad(V||(V=pc`
          <div class="channel-item">
            <div class="channel-icon">#</div>
            <div class="channel-info">
              <div class="channel-name">${0}</div>
              <div class="channel-idx">Index ${0}${0}</div>
            </div>
            ${0}
          </div>
        `),t.name,t.channel_idx,t.scope?ad(K||(K=pc` · scope: ${0}`),t.scope):"",a?ad(U||(U=pc`
                  <div class="confirm-inline">
                    <span class="confirm-text">Remove?</span>
                    <button class="confirm-btn yes" @click=${0}>Yes</button>
                    <button class="confirm-btn no" @click=${0}>No</button>
                  </div>
                `),()=>this._doRemoveChannel(t),()=>{this._confirmingRemoveChannel=null}):ad(W||(W=pc`
                  <div class="channel-actions">
                    <button
                      class="action-btn"
                      ?disabled=${0}
                      @click=${0}>
                      Edit
                    </button>
                    <button
                      class="action-btn remove"
                      ?disabled=${0}
                      @click=${0}>
                      ${0}
                    </button>
                  </div>
                `),i,()=>this._openEditChannel(t),i,()=>{this._confirmingRemoveChannel=t.channel_idx},i?"...":"Remove"))}),this._openAddChannel)}async _loadData(){if(this.hass){this._loading=!0;try{const[e,t]=await Promise.all([Rd(this.hass,this.entryId),Td(this.hass,this.entryId)]);this._contacts=e,this._channels=t;try{const e=await qd(this.hass,this.entryId);null!=e&&e.max_channels&&(this._maxChannels=e.max_channels)}catch(e){}}finally{this._loading=!1}}}_switchTab(e){this._activeTab=e,this._searchQuery="",this._categoryFilter="all",this._typeFilter="all",this._confirmingRemoveContact=null,this._confirmingRemoveChannel=null}_filterContacts(){let e=this._contacts;if("added"===this._categoryFilter?e=e.filter(e=>e.added_to_node):"discovered"===this._categoryFilter&&(e=e.filter(e=>!e.added_to_node)),"clients"===this._typeFilter?e=e.filter(e=>{var t;const a=null!==(t=e.type)&&void 0!==t?t:0;return 0===a||1===a}):"repeaters"===this._typeFilter&&(e=e.filter(e=>2===e.type)),this._searchQuery){const t=this._searchQuery.toLowerCase();e=e.filter(e=>(e.adv_name||"").toLowerCase().includes(t)||(e.pubkey_prefix||"").toLowerCase().includes(t))}return e}async _doAddContact(e){if(this.hass){this._actionInProgress=e.public_key;try{if((await Pd(this.hass,e.public_key,e.adv_name,this.entryId)).success){const e=await Rd(this.hass,this.entryId);this._contacts=e,this.dispatchEvent(new CustomEvent("contacts-changed",{bubbles:!0,composed:!0}))}}finally{this._actionInProgress=null}}}async _doRemoveContact(e){if(this.hass){this._confirmingRemoveContact=null,this._actionInProgress=e.public_key;try{if((await Ld(this.hass,e.public_key,this.entryId)).success){const e=await Rd(this.hass,this.entryId);this._contacts=e,this.dispatchEvent(new CustomEvent("contacts-changed",{bubbles:!0,composed:!0}))}}finally{this._actionInProgress=null}}}_openAddChannel(){this._editingChannel=null,this._channelDialogOpen=!0}_openEditChannel(e){this._editingChannel=e,this._channelDialogOpen=!0}_getAvailableIndices(){const e=new Set(this._channels.map(e=>e.channel_idx)),t=[];for(let a=0;a<this._maxChannels;a++)e.has(a)||t.push(a);return t}async _doRemoveChannel(e){if(this.hass){this._confirmingRemoveChannel=null,this._actionInProgress=`ch-${e.channel_idx}`;try{if((await async function(e,t,a){try{const i={type:"meshcore_chat/remove_channel",channel_idx:t};return a&&(i.entry_id=a),await e.callWS(i)}catch(e){return{success:!1}}}(this.hass,e.channel_idx,this.entryId)).success){const e=await Td(this.hass,this.entryId);this._channels=e,this.dispatchEvent(new CustomEvent("channels-changed",{bubbles:!0,composed:!0}))}}finally{this._actionInProgress=null}}}async _onChannelSaved(){if(this._channelDialogOpen=!1,this._editingChannel=null,this.hass){const e=await Td(this.hass,this.entryId);this._channels=e,this.dispatchEvent(new CustomEvent("channels-changed",{bubbles:!0,composed:!0}))}}_close(){this.dispatchEvent(new CustomEvent("manage-closed",{bubbles:!0,composed:!0}))}};function Vp(e){var t;const a=e.status,i=null!==(t=e.repeaterCount)&&void 0!==t?t:0;if("failed"!==a&&!1===e.repeatsObservable)return"Unconfirmed";if("failed"!==a&&e.collecting&&0===i)return"Waiting...";switch(a){case"pending":case"waiting":return"Waiting...";case"sent":return i>0?"Repeated":"Unheard";case"delivered":return"Delivered";case"failed":return"Failed";default:return"Sent"}}function Kp(e,t){if(!e||!t)return!1;const a=Vp(t);return"Unheard"===a||"Failed"===a}Hp.styles=bc(G||(G=pc`
    :host {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.5);
      z-index: 1000;
      padding: 16px;
    }

    .dialog {
      display: flex;
      flex-direction: column;
      max-width: 500px;
      width: 100%;
      max-height: 80vh;
      border-radius: 12px;
      background: var(--card-background-color, #fff);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
      animation: slideUp 0.2s ease-out;
    }

    @keyframes slideUp {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    :host([narrow]) .dialog {
      max-width: 100%;
      max-height: 100vh;
      border-radius: 0;
      height: 100%;
    }

    .dialog-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      flex-shrink: 0;
    }

    .dialog-title {
      font-size: 18px;
      font-weight: 600;
      color: var(--primary-text-color);
    }

    .close-btn {
      width: 32px;
      height: 32px;
      border: none;
      background: transparent;
      color: var(--secondary-text-color, #727272);
      font-size: 20px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      transition: all 0.15s;
    }

    .close-btn:hover {
      color: var(--primary-text-color);
      background: rgba(0, 0, 0, 0.05);
    }

    /* Tab bar */
    .tab-bar {
      display: flex;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      flex-shrink: 0;
    }

    .tab-bar button {
      flex: 1;
      padding: 12px 16px;
      border: none;
      background: transparent;
      color: var(--secondary-text-color, #727272);
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
      border-bottom: 3px solid transparent;
    }

    .tab-bar button:hover {
      color: var(--primary-text-color);
      background: rgba(0, 0, 0, 0.02);
    }

    .tab-bar button.active {
      color: var(--primary-color, #03a9f4);
      border-bottom-color: var(--primary-color, #03a9f4);
    }

    /* Filter chips (Contacts tab) */
    .filter-bar {
      display: flex;
      gap: 8px;
      padding: 10px 16px 6px 16px;
      flex-wrap: wrap;
      flex-shrink: 0;
      align-items: center;
    }

    .filter-bar-label {
      font-size: 11px;
      font-weight: 600;
      color: var(--secondary-text-color, #727272);
      text-transform: uppercase;
      letter-spacing: 0.04em;
      flex-shrink: 0;
    }

    .filter-bar-group {
      display: flex;
      gap: 4px;
      flex-wrap: wrap;
    }

    .filter-chip {
      padding: 4px 10px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 12px;
      background: transparent;
      color: var(--secondary-text-color, #727272);
      font-size: 11px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.15s;
      white-space: nowrap;
    }

    .filter-chip:hover {
      border-color: var(--primary-color, #03a9f4);
      color: var(--primary-color, #03a9f4);
    }

    .filter-chip.active {
      background: var(--primary-color, #03a9f4);
      border-color: var(--primary-color, #03a9f4);
      color: #fff;
    }

    /* Search */
    .search-bar {
      padding: 12px 16px;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      flex-shrink: 0;
    }

    .search-bar input {
      width: 100%;
      box-sizing: border-box;
      padding: 8px 12px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 20px;
      background: var(--primary-background-color, #fafafa);
      color: var(--primary-text-color);
      font-size: 13px;
      outline: none;
      transition: border-color 0.2s;
    }

    .search-bar input:focus {
      border-color: var(--primary-color, #03a9f4);
    }

    .search-bar input::placeholder {
      color: var(--secondary-text-color, #727272);
    }

    /* List area */
    .list-area {
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
    }

    .list-area::-webkit-scrollbar {
      width: 6px;
    }

    .list-area::-webkit-scrollbar-track {
      background: transparent;
    }

    .list-area::-webkit-scrollbar-thumb {
      background: var(--scrollbar-thumb-color, #c1c1c1);
      border-radius: 3px;
    }

    /* Contact items */
    .contact-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      transition: background 0.15s;
    }

    .contact-item:hover {
      background: rgba(0, 0, 0, 0.02);
    }

    .contact-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: var(--primary-color, #03a9f4);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 14px;
      flex-shrink: 0;
    }

    .contact-info {
      flex: 1;
      overflow: hidden;
    }

    .contact-name {
      font-size: 14px;
      font-weight: 500;
      color: var(--primary-text-color);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .contact-meta {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 2px;
    }

    .contact-prefix {
      font-size: 12px;
      color: var(--secondary-text-color, #727272);
      font-family: monospace;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .badge {
      font-size: 10px;
      font-weight: 600;
      padding: 2px 6px;
      border-radius: 4px;
      white-space: nowrap;
    }

    .badge.added {
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.15);
      color: var(--primary-color, #03a9f4);
    }

    .badge.discovered {
      background: rgba(0, 0, 0, 0.06);
      color: var(--secondary-text-color, #727272);
    }

    /* Action buttons */
    .action-btn {
      padding: 6px 12px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 6px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.15s;
      white-space: nowrap;
      flex-shrink: 0;
    }

    .action-btn:hover {
      border-color: var(--primary-color, #03a9f4);
      color: var(--primary-color, #03a9f4);
    }

    .action-btn.add {
      border-color: var(--primary-color, #03a9f4);
      color: var(--primary-color, #03a9f4);
    }

    .action-btn.add:hover {
      background: var(--primary-color, #03a9f4);
      color: #fff;
    }

    .action-btn.remove {
      border-color: var(--error-color, #db4437);
      color: var(--error-color, #db4437);
    }

    .action-btn.remove:hover {
      background: var(--error-color, #db4437);
      color: #fff;
    }

    .action-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    /* Confirm inline */
    .confirm-inline {
      display: flex;
      align-items: center;
      gap: 6px;
      flex-shrink: 0;
    }

    .confirm-inline .confirm-text {
      font-size: 12px;
      color: var(--error-color, #db4437);
      font-weight: 500;
    }

    .confirm-inline .confirm-btn {
      padding: 4px 10px;
      border: none;
      border-radius: 4px;
      font-size: 11px;
      font-weight: 600;
      cursor: pointer;
    }

    .confirm-inline .confirm-btn.yes {
      background: var(--error-color, #db4437);
      color: #fff;
    }

    .confirm-inline .confirm-btn.no {
      background: var(--divider-color, #e0e0e0);
      color: var(--primary-text-color);
    }

    /* Channel items */
    .channel-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      transition: background 0.15s;
    }

    .channel-item:hover {
      background: rgba(0, 0, 0, 0.02);
    }

    .channel-icon {
      width: 40px;
      height: 40px;
      border-radius: 8px;
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.1);
      color: var(--primary-color, #03a9f4);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 16px;
      flex-shrink: 0;
    }

    .channel-info {
      flex: 1;
      overflow: hidden;
    }

    .channel-name {
      font-size: 14px;
      font-weight: 500;
      color: var(--primary-text-color);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .channel-idx {
      font-size: 12px;
      color: var(--secondary-text-color, #727272);
      font-family: monospace;
    }

    .channel-actions {
      display: flex;
      gap: 6px;
      flex-shrink: 0;
    }

    /* Add channel button at bottom */
    .add-channel-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      margin: 12px 16px;
      padding: 10px 16px;
      border: 2px dashed var(--divider-color, #e0e0e0);
      border-radius: 8px;
      background: transparent;
      color: var(--primary-color, #03a9f4);
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.15s;
    }

    .add-channel-btn:hover {
      border-color: var(--primary-color, #03a9f4);
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.05);
    }

    /* Empty state */
    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 48px 24px;
      color: var(--secondary-text-color, #727272);
      text-align: center;
    }

    .empty-icon {
      font-size: 32px;
      margin-bottom: 8px;
      opacity: 0.5;
    }

    .empty-text {
      font-size: 13px;
    }

    /* Loading */
    .loading-state {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 32px;
      color: var(--secondary-text-color);
      font-size: 13px;
      gap: 8px;
    }

    .loading-spinner {
      width: 20px;
      height: 20px;
      border: 2px solid var(--divider-color, #e0e0e0);
      border-top-color: var(--primary-color, #03a9f4);
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `)),hc([Sd({type:Object})],Hp.prototype,"hass",void 0),hc([Sd({type:String})],Hp.prototype,"entryId",void 0),hc([Sd({type:Boolean})],Hp.prototype,"narrow",void 0),hc([Sd({type:String})],Hp.prototype,"initialTab",void 0),hc([Ad()],Hp.prototype,"_activeTab",void 0),hc([Ad()],Hp.prototype,"_contacts",void 0),hc([Ad()],Hp.prototype,"_channels",void 0),hc([Ad()],Hp.prototype,"_searchQuery",void 0),hc([Ad()],Hp.prototype,"_categoryFilter",void 0),hc([Ad()],Hp.prototype,"_typeFilter",void 0),hc([Ad()],Hp.prototype,"_loading",void 0),hc([Ad()],Hp.prototype,"_actionInProgress",void 0),hc([Ad()],Hp.prototype,"_confirmingRemoveContact",void 0),hc([Ad()],Hp.prototype,"_confirmingRemoveChannel",void 0),hc([Ad()],Hp.prototype,"_channelDialogOpen",void 0),hc([Ad()],Hp.prototype,"_editingChannel",void 0),hc([Ad()],Hp.prototype,"_maxChannels",void 0),Hp=hc([kd("meshcore-manage-dialog")],Hp);const Up="The map needs Home Assistant 2026.10 or newer.";let Wp=null;function Gp(){return customElements.get("ha-map")?Promise.resolve(!0):(null!=Wp||(Wp=(async()=>{try{var e,t;const a=await(null===(e=(t=window).loadCardHelpers)||void 0===e?void 0:e.call(t));return!!a&&(a.createCardElement({type:"map",entities:[]}),await Promise.race([customElements.whenDefined("ha-map").then(()=>!0),new Promise(e=>setTimeout(()=>e(!1),8e3))]))}catch(e){return!1}})()),Wp)}const Xp={1:"#42a5f5",2:"#fb8c00",3:"#ab47bc",4:"#66bb6a"};async function Yp(e,t,a){let i=-1,n=0;for(let o=0;o<60&&n<3;o++){if(await new Promise(e=>setTimeout(e,0===o?0:250)),!e.isConnected)return;const r=e._entityMarkers;if(r){for(const[e,i]of r){const n=null==a?void 0:a(e);n&&i.title!==n&&(i.title=n,i.setAttribute("aria-label",n));const o=t(e);o&&i.style.getPropertyValue("--ha-marker-color")!==o&&(i.style.setProperty("--ha-marker-color",o),i.style.setProperty("--ha-marker-border-width","3px"))}n=r.size>0&&r.size===i?n+1:0,i=r.size}}}function Qp(e){const t=new Map;for(const[i,n]of Object.entries(null!==(a=null==e?void 0:e.states)&&void 0!==a?a:{})){var a;if(!i.startsWith("binary_sensor.meshcore_")||!i.endsWith("_contact"))continue;const e=n.attributes.public_key;"string"==typeof e&&t.set(e.toLowerCase(),i)}return t}function Jp(e){if(0===e.length)return null;const t=e.map(e=>e.lat),a=e.map(e=>e.lon);return[[Math.min(...t),Math.min(...a)],[Math.max(...t),Math.max(...a)]]}function Zp(e){var t;const a=null===(t=e.shadowRoot)||void 0===t?void 0:t.querySelector(".editable-circle-center");a&&!a.dataset.mcPin&&(a.dataset.mcPin="1",Object.assign(a.style,{width:"0",height:"0",background:"none",border:"none",boxShadow:"none",overflow:"visible"}),a.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true" style="position:absolute;left:-16px;top:-32px;width:32px;height:32px;filter:drop-shadow(0 1px 2px rgba(0,0,0,.6))"><path fill="#e53935" stroke="#fff" stroke-width="1.2" d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7z"/><circle cx="12" cy="9" r="2.6" fill="#fff"/></svg>')}let eh=class extends xd{constructor(){super(...arguments),this.lat=0,this.lon=0,this.label="",this._ok=null,this._large=!1,this._onKey=e=>{"Escape"===e.key&&this._large&&(e.stopPropagation(),this._large=!1)}}connectedCallback(){super.connectedCallback(),null===this._ok&&Gp().then(e=>{this._ok=e}),window.addEventListener("keydown",this._onKey,!0)}disconnectedCallback(){var e;null===(e=this._observer)||void 0===e||e.disconnect(),this._observer=void 0,window.removeEventListener("keydown",this._onKey,!0),super.disconnectedCallback()}updated(){for(const t of this.renderRoot.querySelectorAll("ha-map")){var e;const a=t;a._mcSet||(a._mcSet=!0,a.hass=null===(e=this.getHass)||void 0===e?void 0:e.call(this),t.entities=[],t.autoFit=!1,a.editableLocations=[{id:"shared",location:[this.lat,this.lon],radius:0,name:this.label||"Location",icon:"mdi:map-marker",location_editable:!1,radius_editable:!1}],this._centre(t))}}async _centre(e){for(let n=0;n<60;n++){const n=e._engine;if(n){var t;const o=.003;null===(t=e.fitBounds)||void 0===t||t.call(e,[[this.lat-o,this.lon-o],[this.lat+o,this.lon+o]],{zoom:15}),this._observer||(this._observer=new ResizeObserver(()=>{for(const a of this.renderRoot.querySelectorAll("ha-map")){var e,t;null===(e=a._engine)||void 0===e||null===(t=e.invalidateSize)||void 0===t||t.call(e)}})),this._observer.observe(e);for(const t of[200,600,1500,3e3]){var a,i;if(await new Promise(e=>setTimeout(e,t)),!e.isConnected)return;null===(a=n.invalidateSize)||void 0===a||a.call(n),Zp(e),600===t&&(null===(i=e.fitBounds)||void 0===i||i.call(e,[[this.lat-o,this.lon-o],[this.lat+o,this.lon+o]],{zoom:15}))}return}await new Promise(e=>setTimeout(e,150))}}_recentre(){var e;const t=this.renderRoot.querySelector(".large ha-map"),a=.003;null==t||null===(e=t.fitBounds)||void 0===e||e.call(t,[[this.lat-a,this.lon-a],[this.lat+a,this.lon+a]],{zoom:15})}_externalUrl(){const e=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent),t=`${this.lat},${this.lon}`;return e?`geo:${t}?q=${t}${this.label?`(${encodeURIComponent(this.label)})`:""}`:`https://www.openstreetmap.org/?mlat=${this.lat}&mlon=${this.lon}#map=16/${this.lat}/${this.lon}`}render(){if(!1===this._ok)return ad(X||(X=pc`<div class="note">Map needs Home Assistant 2026.10 or newer.</div>`));const e=e=>ad(Y||(Y=pc`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d=${0}></path></svg>`),e);return ad(Q||(Q=pc`
      <div class="frame" @click=${0} @hass-more-info=${0}>
        ${0}
        <div class="ctl">
          <button aria-label="Open a larger map" title="Larger map" @click=${0}>${0}</button>
        </div>
      </div>
      ${0}
    `),e=>e.stopPropagation(),e=>e.stopPropagation(),this._ok&&!this._large?ad(J||(J=pc`<ha-map></ha-map>`)):od,()=>{this._large=!0},e("M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"),this._large?ad(Z||(Z=pc`
        <div class="backdrop" @click=${0}></div>
        <div class="large" role="dialog" aria-label="Location" @click=${0} @hass-more-info=${0}>
          <ha-map></ha-map>
          <div class="ctl">
            <button aria-label="Close" title="Close" @click=${0}>${0}</button>
            <button aria-label="Re-centre on the location" title="Re-centre" @click=${0}>${0}</button>
            <a href=${0} target="_blank" rel="noopener noreferrer" aria-label="Open in maps app" title="Open in maps app">${0}</a>
          </div>
          <div class="cap">${0}${0}, ${0}</div>
        </div>`),e=>{e.stopPropagation(),this._large=!1},e=>e.stopPropagation(),e=>e.stopPropagation(),()=>{this._large=!1},e("M6 6l12 12M18 6L6 18"),this._recentre,e("M12 2v4M12 18v4M2 12h4M18 12h4M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"),this._externalUrl(),e("M14 3h7v7M10 14L21 3M21 14v7H3V3h7"),this.label?ad(ee||(ee=pc`<b>${0}</b><br>`),this.label):"",this.lat.toFixed(5),this.lon.toFixed(5)):od)}};eh.styles=bc(te||(te=pc`
    :host { display: block; }
    .frame { position: relative; width: 260px; max-width: 100%; height: 150px; border-radius: 10px; overflow: hidden; background: rgba(127,127,127,0.2); }
    .frame ha-map, .large ha-map { position: absolute; inset: 0; display: block; width: 100%; height: 100%; }
    .large { position: fixed; inset: 6vh 5vw; z-index: 1001; border-radius: 12px; overflow: hidden; background: #222; box-shadow: 0 8px 32px rgba(0,0,0,0.6); }
    .backdrop { position: fixed; inset: 0; z-index: 1000; background: rgba(0,0,0,0.6); }
    .ctl { position: absolute; top: 8px; right: 8px; z-index: 3; display: flex; flex-direction: column; gap: 6px; }
    .ctl button, .ctl a { width: 34px; height: 34px; border-radius: 8px; border: 1px solid var(--divider-color, #555);
      background: var(--card-background-color, #222); color: var(--primary-text-color, #fff); cursor: pointer;
      display: flex; align-items: center; justify-content: center; text-decoration: none; padding: 0; }
    .ctl svg { width: 18px; height: 18px; }
    .cap { position: absolute; left: 10px; bottom: 10px; z-index: 3; background: var(--card-background-color, #222); color: var(--primary-text-color, #fff);
      border-radius: 8px; padding: 6px 10px; font-size: 13px; max-width: 70%; }
    .note { font-size: 12px; opacity: 0.7; }
  `)),hc([Sd({attribute:!1})],eh.prototype,"getHass",void 0),hc([Sd({type:Number})],eh.prototype,"lat",void 0),hc([Sd({type:Number})],eh.prototype,"lon",void 0),hc([Sd({type:String})],eh.prototype,"label",void 0),hc([Ad()],eh.prototype,"_ok",void 0),hc([Ad()],eh.prototype,"_large",void 0),eh=hc([kd("meshcore-location-map")],eh);let th=class extends xd{constructor(){super(...arguments),this.timestampFormat="relative",this.isChannel=!1,this._contactAdded=""}render(){return this.group?ad(ae||(ae=pc`
        ${0}
      `),this._renderGroup()):ad(ie||(ie=pc``))}_renderGroup(){if(!this.group)return ad(ne||(ne=pc``));const e=this.group,t={"message-group":!0,incoming:!e.isOutgoing&&!e.isSystem,outgoing:e.isOutgoing,system:e.isSystem};let a;return e.messages.length>0&&(a=e.messages[0].senderColor||function(e){let t=0;for(let a=0;a<e.length;a++)t=(t<<5)-t+e.charCodeAt(a);const a=["#e57373","#64b5f6","#81c784","#ffb74d","#ba68c8","#4dd0e1","#fff176","#a1887f"];return a[Math.abs(t)%a.length]}(e.sender)),ad(oe||(oe=pc`
      <div class=${0} style=${0}>
        ${0}
        ${0}
      </div>
    `),this._classMap(t),a?`--sender-color: ${a}`:"",e.isSystem||e.isOutgoing?ad(se||(se=pc``)):ad(re||(re=pc`<div class="sender">${0}</div>`),e.sender),e.messages.map(e=>this._renderBubble(e)))}_renderBubble(e){if(e.activityTarget){const t=e.deliveryStatus?Vp(e.deliveryStatus):"",a=Kp(!0,e.deliveryStatus)&&e.activityText;return ad(le||(le=pc`<div class="bubble system activity" data-msg-id=${0}>
        <button class="activity-text" title="Show the message" @click=${0}>${0}</button> · ${0}${0}
        ${0}
      </div>`),e.id,t=>{t.stopPropagation(),this.dispatchEvent(new CustomEvent("jump-to-message",{detail:{id:e.activityTarget},bubbles:!0,composed:!0}))},e.text,t?ad(ce||(ce=pc`<span class="activity-status ${0}">${0}</span> · `),a?"bad":"",t):"",mp(e.timestamp,this.timestampFormat),a?ad(de||(de=pc` · <button class="activity-retry" @click=${0}>Resend</button>`),t=>{t.stopPropagation(),this.dispatchEvent(new CustomEvent("resend-message",{detail:{text:e.activityText},bubbles:!0,composed:!0}))}):"")}const t={bubble:!0,incoming:!e.isOutgoing&&!e.isSystem,outgoing:e.isOutgoing,system:e.isSystem,selected:e.id===this.selectedId,"has-map":!e.isSystem&&null!==Ap(e.text)},a=e.isOutgoing&&e.deliveryStatus?Vp(e.deliveryStatus):"",i=mp(e.timestamp,this.timestampFormat),n=e.isOutgoing||e.isSystem||!e.floodScope?"":"*"===e.floodScope?"🌐 all regions":e.floodScope,o=e.isOutgoing||e.isSystem?null:function(e){var t;const a=null===(t=e.rxLogData)||void 0===t?void 0:t[0];if(!a)return null;const i=a.hop_count;if("number"==typeof i)return i;const n=a.path_nodes;return Array.isArray(n)?n.length:0}(e);return ad(pe||(pe=pc`
      <div class=${0} data-msg-id=${0} @click=${0}>
        ${0}
        ${0}
        ${0}
        <div class="timestamp">${0}${0}${0}${0}</div>
      </div>
    `),this._classMap(t),e.id,t=>{t.stopPropagation(),this.dispatchEvent(new CustomEvent("message-selected",{detail:{msg:e},bubbles:!0,composed:!0}))},this._renderQuote(e),this._renderBody(e),this._renderReactions(e),a?ad(he||(he=pc`<span class="delivery-status">${0}</span> · `),a):"",i,null!==o?ad(ue||(ue=pc` · <span class="hops">${0} hop${0}</span>`),o,1===o?"":"s"):"",n?ad(me||(me=pc` · <span class="flood-scope">${0}</span>`),n):"")}_renderBody(e){const t=e.isSystem?null:Ap(e.text);if(t)return ad(ge||(ge=pc`<div class="card loc-card">
        <meshcore-location-map .getHass=${0} .lat=${0} .lon=${0} .label=${0}></meshcore-location-map>
        <div class="card-title">📍 ${0}</div>
        <div class="card-meta">${0}, ${0}</div>
      </div>`),this.getHass,t.lat,t.lon,t.label,t.label||"Location",t.lat.toFixed(5),t.lon.toFixed(5));const a=e.isSystem?null:Fp(e.text);if(a){var i;const t=this._contactAdded===a.publicKey;return ad(fe||(fe=pc`
        ${0}
        <div class="card ${0}">
          <div class="card-title">👤 ${0}</div>
          <div class="card-meta">${0} · ${0}…${0}</div>
          ${0}
        </div>`),a.caption?ad(ve||(ve=pc`<div class="message-text">${0}</div>`),this._renderTextWithMentions(a.caption,e.mentions)):"",a.caption?"attached":"",a.name||"Contact",null!==(i=Dp[a.type])&&void 0!==i?i:"Node",a.publicKey.slice(0,6),a.publicKey.slice(-6),e.isOutgoing?"":ad(be||(be=pc`<button class="card-link" ?disabled=${0} @click=${0}>${0}</button>`),t,e=>{e.stopPropagation(),this._addSharedContact(a.publicKey,a.name)},t?"Added":"Add contact"))}return ad(ye||(ye=pc`<div class="message-text">${0}</div>`),this._renderTextWithMentions(e.text,e.mentions))}async _addSharedContact(e,t){var a;const i=null===(a=this.getHass)||void 0===a?void 0:a.call(this);i&&(await Pd(i,e,t,this.entryId)).success&&(this._contactAdded=e,this.dispatchEvent(new CustomEvent("contacts-changed",{bubbles:!0,composed:!0})))}_renderReactions(e){var t,a;const i=null!==(t=null===(a=this.reactionsFor)||void 0===a?void 0:a.call(this,e.id))&&void 0!==t?t:[];return 0===i.length?"":ad(_e||(_e=pc`<div class="reactions">${0}</div>`),i.map(e=>ad(xe||(xe=pc`<span class="reaction" title=${0}>${0}${0}</span>`),e.senders.join(", "),e.emoji,e.senders.length>1?ad(we||(we=pc` <b>${0}</b>`),e.senders.length):"")))}_renderQuote(e){var t;const a=null===(t=this.quoteFor)||void 0===t?void 0:t.call(this,e);return a?ad(ke||(ke=pc`<div class="quote ${0}" @click=${0} title=${0}>
      <div class="quote-name">${0}</div>
      <div class="quote-text">${0}</div>
    </div>`),a.id?"linked":"",e=>{e.stopPropagation(),a.id&&this.dispatchEvent(new CustomEvent("jump-to-message",{detail:{id:a.id},bubbles:!0,composed:!0}))},a.id?"Show the original message":"",a.sender,a.text):""}_renderTextWithMentions(e,t){if(0===t.length)return e;const a=t.map(e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")),i=new RegExp(`@\\[(${a.join("|")})\\]|@(${a.join("|")})\\b`,"g"),n=[];let o,r=0;for(;null!==(o=i.exec(e));){var s;o.index>r&&n.push(e.slice(r,o.index));const t=null!==(s=o[1])&&void 0!==s?s:o[2];n.push(ad($e||($e=pc`<span class="mention">@${0}</span>`),t)),r=o.index+o[0].length}return r<e.length&&n.push(e.slice(r)),n}_classMap(e){return Object.entries(e).filter(([,e])=>e).map(([e])=>e).join(" ")}};th.styles=bc(Ce||(Ce=pc`
    :host {
      display: block;
    }

    .message-group {
      margin-bottom: 8px;
      display: flex;
      flex-direction: column;
    }

    .message-group.outgoing {
      align-items: flex-end;
    }

    .message-group.incoming {
      align-items: flex-start;
    }

    .message-group.system {
      align-items: center;
    }

    .sender {
      font-size: 12px;
      font-weight: 600;
      color: var(--sender-color, var(--primary-color, #03a9f4));
      margin-bottom: 2px;
      padding: 0 4px;
      max-width: 85%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .message-group.outgoing .sender {
      display: none;
    }

    .bubble {
      max-width: 85%;
      padding: 8px 12px;
      border-radius: 16px;
      word-wrap: break-word;
      overflow-wrap: break-word;
      position: relative;
      cursor: pointer;
      transition: opacity 0.15s;
      line-height: 1.4;
      font-size: 14px;
    }

    .bubble.has-map:active {
      opacity: 1;
    }
    .bubble:active {
      opacity: 0.7;
    }

    .bubble.search-highlight {
      animation: highlight-flash 2.5s ease-out;
    }

    @keyframes highlight-flash {
      0%, 20% {
        box-shadow: 0 0 0 3px rgba(var(--rgb-primary-color, 3, 169, 244), 0.6);
      }
      100% {
        box-shadow: 0 0 0 3px transparent;
      }
    }

    .bubble + .bubble {
      margin-top: 2px;
    }

    .bubble.incoming {
      background: var(--bubble-incoming-bg, var(--secondary-background-color, #e8e8e8));
      color: var(--bubble-incoming-text, var(--primary-text-color, #212121));
      border-bottom-left-radius: 4px;
    }

    .bubble.incoming:first-of-type {
      border-top-left-radius: 16px;
    }

    .bubble.outgoing {
      background: var(--bubble-outgoing-bg, var(--primary-color, #03a9f4));
      color: var(--bubble-outgoing-text, #fff);
      border-bottom-right-radius: 4px;
    }

    .bubble.outgoing:first-of-type {
      border-top-right-radius: 16px;
    }

    .bubble.system {
      background: transparent;
      color: var(--system-msg-color, var(--secondary-text-color, #727272));
      font-style: italic;
      font-size: 13px;
      text-align: center;
      cursor: default;
      padding: 4px 12px;
    }

    .message-text {
      white-space: pre-wrap;
    }

    .card { display: flex; flex-direction: column; gap: 2px; min-width: 160px; }
    .loc-card meshcore-location-map { margin-bottom: 6px; }
    .card.attached { margin-top: 6px; padding-top: 6px; border-top: 1px solid rgba(127, 127, 127, 0.35); }
    .card-title { font-weight: 600; word-break: break-word; }
    .card-meta { font-size: 0.8em; opacity: 0.8; }
    .card-link { align-self: flex-start; margin-top: 4px; font: inherit; font-size: 0.85em; color: inherit; text-decoration: underline;
      background: none; border: none; padding: 0; cursor: pointer; }
    .card-link:disabled { text-decoration: none; opacity: 0.7; cursor: default; }
    .reactions { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 4px; }
    .reaction { background: rgba(127, 127, 127, 0.25); border-radius: 10px; padding: 1px 6px; font-size: 0.85em; }
    .bubble.selected { outline: 2px solid var(--primary-color, #03a9f4); outline-offset: 1px; }
    .bubble.system.activity { cursor: default; font-size: 12px; }
    .activity-text { background: none; border: none; padding: 0; font: inherit; color: inherit; font-style: italic; cursor: pointer; }
    @media (hover: hover) { .activity-text:hover { text-decoration: underline; } }
    .activity-status.bad { color: var(--warning-color, #ffa600); font-style: normal; }
    .activity-retry { background: none; border: none; padding: 0; font: inherit; font-style: normal; color: var(--primary-color, #03a9f4);
      text-decoration: underline; cursor: pointer; }
    .reaction-summary { padding: 8px 16px 6px; border-bottom: 1px solid var(--divider-color, #e0e0e0); }
    .rs-chips { display: flex; flex-wrap: wrap; gap: 6px; }
    .rs-chip { border: 1px solid var(--divider-color, #555); background: rgba(127,127,127,0.12); color: var(--primary-text-color);
      border-radius: 12px; padding: 3px 10px; font-size: 13px; cursor: pointer; font-family: inherit; }
    .rs-chip.mine { border-color: var(--primary-color, #03a9f4); }
    .rs-chip.on { background: var(--primary-color, #03a9f4); border-color: var(--primary-color, #03a9f4); color: #fff; }
    .rs-more { background: none; border: none; color: var(--primary-color, #03a9f4); padding: 4px 0; cursor: pointer; font: inherit; font-size: 13px; }
    .reaction-list { padding-top: 6px; max-height: 180px; overflow-y: auto; }
    .more-react { font-size: 20px !important; color: var(--secondary-text-color); border: 1px solid var(--divider-color, #555) !important; }
    .more-react.on { background: rgba(127,127,127,0.2) !important; }
    .react-picker { padding: 8px; border-bottom: 1px solid var(--divider-color, #e0e0e0); }
    .react-picker meshcore-emoji-picker { width: 100%; }
    .reaction-entry { display: flex; gap: 8px; align-items: center; padding: 3px 0; font-size: 14px; }
    .re-emoji { width: 24px; text-align: center; }
    .re-who { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .re-time { font-size: 12px; color: var(--secondary-text-color); }
    .reaction-row { display: flex; justify-content: space-between; gap: 2px; padding: 6px 10px; border-bottom: 1px solid var(--divider-color, #e0e0e0); }
    .reaction-row button { background: none; border: none; font-size: 22px; line-height: 1; cursor: pointer; border-radius: 50%;
      width: 36px; height: 36px; padding: 0; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    @media (hover: hover) { .reaction-row button:hover { background: rgba(127, 127, 127, 0.2); } }
    .quote {
      border-left: 3px solid var(--primary-color, #03a9f4);
      background: rgba(127, 127, 127, 0.15);
      border-radius: 6px;
      padding: 4px 8px;
      margin-bottom: 4px;
      font-size: 0.85em;
      max-width: 100%;
    }
    .quote.linked { cursor: pointer; }
    .bubble.outgoing .quote { border-left-color: rgba(255, 255, 255, 0.85); background: rgba(0, 0, 0, 0.15); }
    .quote-name { font-weight: 600; opacity: 0.9; }
    .quote-text {
      opacity: 0.85;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      word-break: break-word;
    }
    .message-text .mention {
      background: var(--mention-bg, rgba(3, 169, 244, 0.15));
      color: var(--mention-text, var(--primary-color, #03a9f4));
      font-weight: 600;
      padding: 1px 4px;
      border-radius: 4px;
    }

    .bubble.outgoing .message-text .mention {
      background: rgba(255, 255, 255, 0.25);
      color: #fff;
    }

    .timestamp {
      font-size: 11px;
      color: var(--timestamp-color, var(--secondary-text-color, #727272));
      margin-top: 2px;
      padding: 0 4px;
    }

    .bubble.outgoing .timestamp {
      color: rgba(255, 255, 255, 0.6);
    }

    .bubble.incoming .timestamp {
      color: var(--secondary-text-color, #727272);
    }

    .message-group.outgoing .timestamp {
      text-align: right;
    }

    .route-info {
      font-size: 10px;
      color: var(--timestamp-color, var(--secondary-text-color, #727272));
      padding: 2px 4px;
      font-family: monospace;
    }

    .route-info-inline {
      font-size: 11px;
      color: var(--timestamp-color, var(--secondary-text-color, #727272));
      font-family: monospace;
      margin-top: 2px;
      padding: 0 4px;
      opacity: 0.7;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .delivery-status {
      color: inherit;
    }

    .flood-scope {
      color: inherit;
      opacity: 0.85;
      white-space: nowrap;
    }

    .message-dialog-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.85);
      z-index: 20;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .message-dialog {
      background: #333;
      border: 2px solid var(--primary-color, #03a9f4);
      border-radius: 12px;
      box-shadow: 0 0 20px rgba(var(--rgb-primary-color, 3, 169, 244), 0.3);
      min-width: 240px;
      max-width: 300px;
      max-height: calc(100vh - 48px);
      overflow-x: hidden;
      overflow-y: auto;
      overscroll-behavior: contain;
      z-index: 21;
    }
    .message-dialog.with-picker {
      width: min(360px, calc(100vw - 24px));
      max-width: min(360px, calc(100vw - 24px));
      box-sizing: border-box;
    }

    .message-dialog-resend {
      border-top: 1px solid var(--divider-color, #e0e0e0);
      padding-top: 4px;
    }
    .resend-note {
      padding: 8px 16px 0;
      font-size: 12px;
      color: var(--secondary-text-color);
      line-height: 1.4;
    }
    .resend-actions {
      display: flex;
    }
    .resend-actions .message-dialog-action {
      flex: 1;
    }
    .message-dialog-action.secondary {
      color: var(--secondary-text-color);
    }

    .message-dialog.with-map {
      width: min(560px, 94vw);
      max-width: none;
      max-height: 92vh;
      overflow-y: auto;
    }

    .message-dialog-preview {
      padding: 12px 16px;
      font-size: 13px;
      color: var(--secondary-text-color);
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 280px;
    }

    .message-dialog-action {
      display: flex;
      align-items: center;
      gap: 12px;
      width: 100%;
      padding: 14px 16px;
      border: none;
      background: transparent;
      color: var(--primary-text-color);
      font-size: 15px;
      font-weight: 500;
      cursor: pointer;
      text-align: left;
      min-height: 48px;
      transition: background 0.15s;
    }

    .message-dialog-action:hover,
    .message-dialog-action:active {
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.15);
    }

    .message-dialog-action + .message-dialog-action {
      border-top: 1px solid var(--divider-color, #e0e0e0);
    }

    .route-footer { word-break: break-word; user-select: text; }
    .message-dialog-route {
      padding: 12px 16px;
      font-size: 12px;
      color: var(--secondary-text-color);
      border-top: 1px solid var(--divider-color, #e0e0e0);
      cursor: pointer;
      font-family: monospace;
      word-break: break-all;
      transition: background 0.15s;
    }

    .message-dialog-route:hover,
    .message-dialog-route:active {
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.15);
    }
  `)),hc([Sd({type:Object})],th.prototype,"group",void 0),hc([Sd({type:Object})],th.prototype,"message",void 0),hc([Sd({type:String})],th.prototype,"timestampFormat",void 0),hc([Sd({attribute:!1})],th.prototype,"getHass",void 0),hc([Sd({type:String})],th.prototype,"entryId",void 0),hc([Sd({type:Boolean})],th.prototype,"isChannel",void 0),hc([Sd({attribute:!1})],th.prototype,"reactionsFor",void 0),hc([Ad()],th.prototype,"_contactAdded",void 0),hc([Sd({attribute:!1})],th.prototype,"quoteFor",void 0),hc([Sd({type:String})],th.prototype,"selectedId",void 0),th=hc([kd("meshcore-message-bubble")],th);let ah=class extends xd{constructor(){super(),this._query="",this._fromDate="",this._toDate="",this._results=[],this._totalCount=0,this._searching=!1,this._hasSearched=!1,this._showFilters=!1,this._debounceTimer=null,Pp(this,{isOpen:()=>!0,onEscape:()=>this.dispatchEvent(new CustomEvent("search-close",{bubbles:!0,composed:!0}))})}render(){return ad(Se||(Se=pc`
      <div class="search-header">
        <div class="search-row">
          <input
            class="search-input"
            type="text"
            aria-label="Search messages"
            placeholder="Search messages..."
            .value=${0}
            @input=${0}
          />
          <button
            class="filter-toggle ${0}"
            @click=${0}>
            Filters
          </button>
        </div>
        ${0}
        ${0}
      </div>

      <div class="results">
        ${0}
      </div>
    `),this._query,this._onQueryInput,this._showFilters?"active":"",()=>{this._showFilters=!this._showFilters},this._showFilters?ad(Ae||(Ae=pc`
              <div class="filters">
                <input
                  class="filter-input"
                  type="date"
                  placeholder="From"
                  .value=${0}
                  @change=${0}
                />
                <input
                  class="filter-input"
                  type="date"
                  placeholder="To"
                  .value=${0}
                  @change=${0}
                />
              </div>
            `),this._fromDate,e=>{this._fromDate=e.target.value,this._doSearch()},this._toDate,e=>{this._toDate=e.target.value,this._doSearch()}):"",this._hasSearched?ad(Me||(Me=pc`<div class="result-count">${0} result${0}</div>`),this._totalCount,1!==this._totalCount?"s":""):"",this._searching?ad(Fe||(Fe=pc`<div class="loading-state">Searching...</div>`)):this._hasSearched?0===this._results.length?ad(De||(De=pc`
                  <div class="empty-state">
                    <div class="empty-icon"><svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" opacity="0.5"><path d="M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 14H4V8h4v2c0 1.1.9 2 2 2h6v2h-2v2h2v2h-2v2h6V10h-4v10h2z"/></svg></div>
                    <div class="empty-text">No messages found</div>
                  </div>
                `)):this._results.map(e=>this._renderResult(e)):ad(Ee||(Ee=pc`
                <div class="empty-state">
                  <div class="empty-icon"><svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" opacity="0.5"><path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></div>
                  <div class="empty-text">Search your message history</div>
                </div>
              `)))}_renderResult(e){const t=new Date(e.timestamp),a=ip(t,!1),i=ap(t),n=this._highlightQuery(e.text);return ad(ze||(ze=pc`
      <div class="result-item" @click=${0}>
        <div class="result-meta">
          <span class="result-sender">${0}</span>
          <span class="result-conversation">${0}</span>
          <span>${0} ${0}</span>
        </div>
        <div class="result-text">${0}</div>
      </div>
    `),()=>this._onResultClick(e),e.sender,e.conversation_name,a,i,n)}_highlightQuery(e){if(!this._query.trim())return e;const t=this._query.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),a=new RegExp(`(${t})`,"gi"),i=e.split(a),n=this._query.toLowerCase();return i.map(e=>e.toLowerCase()===n?ad(Oe||(Oe=pc`<mark>${0}</mark>`),e):e)}_onQueryInput(e){this._query=e.target.value,null!==this._debounceTimer&&clearTimeout(this._debounceTimer);const t=this._query.trim().length,a=t>=2,i=0===t,n=!(!this._fromDate&&!this._toDate);a||i&&n?this._debounceTimer=window.setTimeout(()=>this._doSearch(),400):(this._results=[],this._hasSearched=!1)}async _doSearch(){if(!this.hass||!this.entityId)return;const e=this._query.trim(),t=e.length>0,a=!(!this._fromDate&&!this._toDate);if(!t&&!a)return this._results=[],this._totalCount=0,void(this._hasSearched=!1);this._searching=!0,this._hasSearched=!0;try{const t={type:"meshcore_chat/search_stored_messages",query:e,entity_id:this.entityId,limit:100};this._fromDate&&(t.from_date=`${this._fromDate}T00:00:00`),this._toDate&&(t.to_date=`${this._toDate}T23:59:59.999999`);const a=await this.hass.callWS(t);this._results=a.results||[],this._totalCount=this._results.length}catch(e){this._results=[],this._totalCount=0}finally{this._searching=!1}}_onResultClick(e){this.dispatchEvent(new CustomEvent("result-selected",{detail:{entityId:e.entity_id,messageId:e.id,conversationName:e.conversation_name,timestamp:e.timestamp},bubbles:!0,composed:!0}))}};ah.styles=bc(Ie||(Ie=pc`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow: hidden;
    }

    .search-header {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 12px;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      flex-shrink: 0;
    }

    .search-row {
      display: flex;
      gap: 8px;
      align-items: center;
    }

    .search-input {
      flex: 1;
      padding: 8px 12px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 20px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
      font-size: 13px;
      outline: none;
      transition: border-color 0.2s;
    }

    .search-input:focus {
      border-color: var(--primary-color, #03a9f4);
    }

    .search-input::placeholder {
      color: var(--secondary-text-color, #727272);
    }

    .filter-toggle {
      padding: 6px 10px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 6px;
      background: transparent;
      color: var(--secondary-text-color);
      font-size: 12px;
      cursor: pointer;
      flex-shrink: 0;
      transition: all 0.15s;
    }

    .filter-toggle:hover,
    .filter-toggle.active {
      border-color: var(--primary-color, #03a9f4);
      color: var(--primary-color, #03a9f4);
    }

    .filters {
      display: flex;
      gap: 8px;
    }

    .filter-input {
      flex: 1;
      padding: 6px 10px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 6px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
      font-size: 12px;
      outline: none;
    }

    .filter-input:focus {
      border-color: var(--primary-color, #03a9f4);
    }

    .result-count {
      font-size: 12px;
      color: var(--secondary-text-color);
      padding: 0 4px;
    }

    .results {
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
    }

    .results::-webkit-scrollbar {
      width: 6px;
    }

    .results::-webkit-scrollbar-track {
      background: transparent;
    }

    .results::-webkit-scrollbar-thumb {
      background: var(--scrollbar-thumb, var(--scrollbar-thumb-color, #c1c1c1));
      border-radius: 3px;
    }

    .result-item {
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding: 10px 12px;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      cursor: pointer;
      transition: background 0.15s;
    }

    .result-item:hover {
      background: rgba(0, 0, 0, 0.02);
    }

    .result-meta {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 11px;
      color: var(--secondary-text-color);
    }

    .result-sender {
      font-weight: 600;
      color: var(--primary-text-color);
    }

    .result-conversation {
      font-style: italic;
    }

    .result-text {
      font-size: 13px;
      color: var(--primary-text-color);
      line-height: 1.4;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .result-text mark {
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.2);
      color: inherit;
      border-radius: 2px;
      padding: 0 2px;
    }

    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: var(--secondary-text-color);
      text-align: center;
      padding: 24px;
    }

    .empty-icon {
      font-size: 32px;
      margin-bottom: 8px;
      opacity: 0.5;
    }

    .empty-text {
      font-size: 13px;
    }

    .loading-state {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
      color: var(--secondary-text-color);
      font-size: 13px;
      gap: 8px;
    }
  `)),hc([Sd({type:Object})],ah.prototype,"hass",void 0),hc([Sd({type:String})],ah.prototype,"entryId",void 0),hc([Sd({type:String})],ah.prototype,"entityId",void 0),hc([Sd({type:String})],ah.prototype,"meshNodeName",void 0),hc([Ad()],ah.prototype,"_query",void 0),hc([Ad()],ah.prototype,"_fromDate",void 0),hc([Ad()],ah.prototype,"_toDate",void 0),hc([Ad()],ah.prototype,"_results",void 0),hc([Ad()],ah.prototype,"_totalCount",void 0),hc([Ad()],ah.prototype,"_searching",void 0),hc([Ad()],ah.prototype,"_hasSearched",void 0),hc([Ad()],ah.prototype,"_showFilters",void 0),ah=hc([kd("meshcore-message-search")],ah);const ih="meshcore-reply-links",nh=/^@\[([^\]]+)\]\s?/;function oh(){try{return JSON.parse(localStorage.getItem(ih)||"{}")}catch(e){return{}}}function rh(e,t){return`${e}|${t}`}const sh=[["Smileys & Emotion","😀\tgrinning face face smile happy joy :d grin\n😃\tgrinning face with big eyes face happy joy haha :d :)\n😄\tgrinning face with smiling eyes face happy joy funny haha laugh\n😁\tbeaming face with smiling eyes face happy smile joy kawaii eye\n😆\tgrinning squinting face happy joy lol satisfied haha face\n😅\tgrinning face with sweat face hot happy laugh sweat smile\n🤣\trolling on the floor laughing face rolling floor laughing lol haha\n😂\tface with tears of joy face cry tears weep happy happytears\n🙂\tslightly smiling face face smile fine happy this\n🙃\tupside-down face face flipped silly smile sarcasm\n🫠\tmelting face hot heat disappear dissolve dread liquid\n😉\twinking face face happy mischievous secret ;) smile\n😊\tsmiling face with smiling eyes face smile happy flushed crush embarrassed\n😇\tsmiling face with halo face angel heaven halo innocent fairy\n🥰\tsmiling face with hearts face love like affection valentines infatuation\n😍\tsmiling face with heart-eyes face love like affection valentines infatuation\n🤩\tstar-struck face smile starry eyes grinning excited\n😘\tface blowing a kiss face love like affection valentines infatuation\n😗\tkissing face love like face 3 valentines infatuation\n☺️\tsmiling face face blush massage happiness happy outlined\n😚\tkissing face with closed eyes face love like affection valentines infatuation\n😙\tkissing face with smiling eyes face affection valentines infatuation kiss eye\n🥲\tsmiling face with tear sad cry pretend grateful happy proud\n😋\tface savoring food happy joy tongue smile face silly\n😛\tface with tongue face prank childish playful mischievous smile\n😜\twinking face with tongue face prank childish playful mischievous smile\n🤪\tzany face face goofy crazy excited eye eyes\n😝\tsquinting face with tongue face prank playful mischievous smile tongue\n🤑\tmoney-mouth face face rich dollar money eyes sign\n🤗\tsmiling face with open hands face smile hug hands hugs open\n🤭\tface with hand over mouth face whoops shock surprise blushing covering\n🫢\tface with open eyes and hand over mouth silence secret shock surprise amazement awe\n🫣\tface with peeking eye scared frightening embarrassing shy captivated peep\n🤫\tshushing face face quiet shhh closed covering finger\n🤔\tthinking face face hmmm think consider chin shade\n🫡\tsaluting face respect salute ok sunny troops yes\n🤐\tzipper-mouth face face sealed zipper secret hush lips\n🤨\tface with raised eyebrow face distrust scepticism disapproval disbelief surprise\n😐\tneutral face indifference meh :| neutral deadpan faced\n😑\texpressionless face face indifferent - - meh deadpan inexpressive\n😶\tface without mouth face blank mouthless mute no quiet\n🫥\tdotted line face invisible lonely isolation depression depressed disappear\n😶‍🌫️\tface in clouds shower steam dream absentminded brain fog\n😏\tsmirking face face smile mean prank smug sarcasm\n😒\tunamused face indifference bored straight face serious sarcasm unimpressed\n🙄\tface with rolling eyes face eyeroll frustrated eye roll\n😬\tgrimacing face face grimace teeth awkward eek nervous\n😮‍💨\tface exhaling relieve relief tired sigh exhale gasp\n🤥\tlying face face lie pinocchio liar long nose\n🫨\tshaking face dizzy shock blurry earthquake\n😌\trelieved face face relaxed phew massage happiness content\n😔\tpensive face face sad depressed upset dejected sadface\n😪\tsleepy face face tired rest nap bubble side\n🤤\tdrooling face face drool\n😴\tsleeping face face tired sleepy night zzz sleep\n😷\tface with medical mask face sick ill disease covid cold\n🤒\tface with thermometer sick temperature thermometer cold fever covid\n🤕\tface with head-bandage injured clumsy bandage hurt bandaged injury\n🤢\tnauseated face face vomit gross green sick throw up\n🤮\tface vomiting face sick barf ill mouth open\n🤧\tsneezing face face gesundheit sneeze sick allergy achoo\n🥵\thot face face feverish heat red sweating overheated\n🥶\tcold face face blue freezing frozen frostbite icicles\n🥴\twoozy face face dizzy intoxicated tipsy wavy drunk\n😵\tface with crossed-out eyes spent unconscious xox dizzy cross crossed\n😵‍💫\tface with spiral eyes sick ill confused nauseous nausea dizzy\n🤯\texploding head face shocked mind blown blowing explosion\n🤠\tcowboy hat face face cowgirl hat\n🥳\tpartying face face celebration woohoo birthday hat horn\n🥸\tdisguised face pretent brows glasses moustache disguise incognito\n😎\tsmiling face with sunglasses face cool smile summer beach sunglass\n🤓\tnerd face face nerdy geek dork glasses smiling\n🧐\tface with monocle face stuffy wealthy rich exploration inspection\n😕\tconfused face face indifference huh weird hmmm :/\n🫤\tface with diagonal mouth skeptic confuse frustrated indifferent confused disappointed\n😟\tworried face face concern nervous :( sad sadface\n🙁\tslightly frowning face face frowning disappointed sad upset frown\n☹️\tfrowning face face sad upset frown megafrown unhappy\n😮\tface with open mouth face surprise impressed wow whoa :o\n😯\thushed face face woo shh silence speechless stunned\n😲\tastonished face face xox surprised poisoned amazed drunk face\n😳\tflushed face face blush shy flattered blushing dazed\n🥺\tpleading face face begging mercy cry tears sad\n🥹\tface holding back tears touched gratitude cry angry proud resist\n😦\tfrowning face with open mouth face aw what frown yawning\n😧\tanguished face face stunned nervous pained\n😨\tfearful face face scared terrified nervous fear oops\n😰\tanxious face with sweat face nervous sweat blue cold concerned face\n😥\tsad but relieved face face phew sweat nervous disappointed eyebrow\n😢\tcrying face face tears sad depressed upset :'(\n😭\tloudly crying face sobbing face cry tears sad upset\n😱\tface screaming in fear face munch scared omg alone fearful\n😖\tconfounded face face confused sick unwell oops :s\n😣\tpersevering face face sick no upset oops eyes\n😞\tdisappointed face face sad upset depressed :( sadface\n😓\tdowncast face with sweat face hot sad tired exercise cold\n😩\tweary face face tired sleepy sad frustrated upset\n😫\ttired face sick whine upset frustrated distraught exhausted\n🥱\tyawning face tired sleepy bored yawn\n😤\tface with steam from nose face gas phew proud pride triumph\n😡\tenraged face angry mad hate despise enraged grumpy\n😠\tangry face mad face annoyed frustrated anger grumpy\n🤬\tface with symbols on mouth face swearing cursing cussing profanity expletive\n😈\tsmiling face with horns devil horns evil fairy fantasy happy\n👿\tangry face with horns devil angry horns demon evil fairy\n💀\tskull dead skeleton creepy death body\n☠️\tskull and crossbones poison danger deadly scary death pirate\n💩\tpile of poo hankey shitface fail turd shit comic\n🤡\tclown face face mock\n👹\togre monster red mask halloween scary creepy\n👺\tgoblin red evil mask monster scary creepy\n👻\tghost halloween spooky scary creature disappear face\n👽\talien ufo paul weird outer space creature et\n👾\talien monster game arcade play creature extraterrestrial face\n🤖\trobot computer machine bot face monster\n😺\tgrinning cat animal cats happy smile face mouth\n😸\tgrinning cat with smiling eyes animal cats smile eye face grin\n😹\tcat with tears of joy animal cats haha happy tears face\n😻\tsmiling cat with heart-eyes animal love like affection cats valentines\n😼\tcat with wry smile animal cats smirk face ironic smirking\n😽\tkissing cat animal cats kiss closed eye eyes\n🙀\tweary cat animal cats munch scared scream face\n😿\tcrying cat animal tears weep sad cats upset\n😾\tpouting cat animal cats face grumpy\n🙈\tsee-no-evil monkey monkey animal nature haha blind covering\n🙉\thear-no-evil monkey animal monkey nature covering deaf ears\n🙊\tspeak-no-evil monkey monkey animal nature omg covering face\n💌\tlove letter email like affection envelope valentines heart\n💘\theart with arrow love like heart affection valentines cupid\n💝\theart with ribbon love valentines box chocolate chocolates gift\n💖\tsparkling heart love like affection valentines excited sparkle\n💗\tgrowing heart like love affection valentines pink excited\n💓\tbeating heart love like affection valentines pink heart\n💞\trevolving hearts love like affection valentines heart two\n💕\ttwo hearts love like affection valentines heart pink\n💟\theart decoration purple-square love like\n❣️\theart exclamation decoration love above an as dot\n💔\tbroken heart sad sorry break heart heartbreak breaking\n❤️‍🔥\theart on fire passionate enthusiastic burn love lust sacred\n❤️‍🩹\tmending heart broken heart bandage wounded bandaged healing healthier\n❤️\tred heart love like valentines black heavy\n🩷\tpink heart valentines\n🧡\torange heart love like affection valentines\n💛\tyellow heart love like affection valentines bf gold\n💚\tgreen heart love like affection valentines nct\n💙\tblue heart love like affection valentines brand neutral\n🩵\tlight blue heart ice baby blue\n💜\tpurple heart love like affection valentines bts emoji\n🤎\tbrown heart coffee\n🖤\tblack heart evil dark wicked\n🩶\tgrey heart silver monochrome\n🤍\twhite heart pure\n💋\tkiss mark face lips love like affection valentines\n💯\thundred points score perfect numbers century exam quiz\n💢\tanger symbol angry mad comic pop sign vein\n💥\tcollision bomb explode explosion blown bang boom\n💫\tdizzy star sparkle shoot magic circle comic\n💦\tsweat droplets water drip oops comic drops plewds\n💨\tdashing away wind air fast shoo fart smoke\n🕳️\thole embarrassing\n💬\tspeech balloon bubble words message talk chatting chat\n👁️‍🗨️\teye in speech bubble info am i witness\n🗨️\tleft speech bubble words message talk chatting dialog\n🗯️\tright anger bubble caption speech thinking mad angry balloon\n💭\tthought balloon bubble cloud speech thinking dream comic\n💤\tzzz sleepy tired dream bedtime boring comic"],["People & Body","👋\twaving hand wave hands gesture goodbye solong farewell\n🤚\traised back of hand fingers raised backhand body\n🖐️\thand with fingers splayed hand fingers palm body finger five\n✋\traised hand fingers stop highfive palm ban body\n🖖\tvulcan salute hand fingers spock star trek between body\n🫱\trightwards hand palm offer right rightward\n🫲\tleftwards hand palm offer left leftward\n🫳\tpalm down hand palm drop dismiss shoo\n🫴\tpalm up hand lift offer demand beckon catch come\n🫷\tleftwards pushing hand highfive pressing stop\n🫸\trightwards pushing hand highfive pressing stop\n👌\tok hand fingers limbs perfect ok okay body\n🤌\tpinched fingers size tiny small che finger gesture\n🤏\tpinching hand tiny small size amount body little\n✌️\tvictory hand fingers ohyeah hand peace victory two\n🤞\tcrossed fingers good lucky body cross finger hand\n🫰\thand with index finger and thumb crossed heart love money expensive snap\n🤟\tlove-you gesture hand fingers gesture body i ily\n🤘\tsign of the horns hand fingers evil eye sign of horns rock on body\n🤙\tcall me hand hands gesture shaka body phone sign\n👈\tbackhand index pointing left direction fingers hand left body finger\n👉\tbackhand index pointing right fingers hand direction right body finger\n👆\tbackhand index pointing up fingers hand direction up body finger\n🖕\tmiddle finger hand fingers rude middle flipping bird\n👇\tbackhand index pointing down fingers hand direction down body finger\n☝️\tindex pointing up hand fingers direction up body finger\n🫵\tindex pointing at the viewer you recruit point\n👍\tthumbs up thumbsup yes awesome good agree accept\n👎\tthumbs down thumbsdown no dislike hand -1 bad\n✊\traised fist fingers hand grasp body clenched power\n👊\toncoming fist angry violence fist hit attack hand\n🤛\tleft-facing fist hand fistbump body bump leftwards\n🤜\tright-facing fist hand fistbump body bump rightwards right fist\n👏\tclapping hands hands praise applause congrats yay body\n🙌\traising hands gesture hooray yea celebration hands air\n🫶\theart hands love appreciation support\n👐\topen hands fingers butterfly hands open body hand\n🤲\tpalms up together hands gesture cupped prayer body dua\n🤝\thandshake agreement shake deal hand hands meeting\n🙏\tfolded hands please hope wish namaste highfive pray\n✍️\twriting hand lower left ballpoint pen stationery write compose body\n💅\tnail polish nail care beauty manicure finger fashion nail\n🤳\tselfie camera phone arm hand\n💪\tflexed biceps arm flex hand summer strong biceps\n🦾\tmechanical arm accessibility body prosthetic\n🦿\tmechanical leg accessibility body prosthetic\n🦵\tleg kick limb body\n🦶\tfoot kick stomp body\n👂\tear face hear sound listen body ears\n🦻\tear with hearing aid accessibility body hard\n👃\tnose smell sniff body smelling sniffing stinky\n🧠\tbrain smart intelligent body organ\n🫀\tanatomical heart health heartbeat cardiology organ pulse\n🫁\tlungs breathe breath exhalation inhalation organ respiration\n🦷\ttooth teeth dentist body\n🦴\tbone skeleton body\n👀\teyes look watch stalk peek see body\n👁️\teye face look see watch stare body\n👅\ttongue mouth playful body out taste\n👄\tmouth kiss body kissing lips\n🫦\tbiting lip flirt sexy pain worry anxious fear\n👶\tbaby child boy girl toddler newborn young\n🧒\tchild gender-neutral young boy gender girl inclusive\n👦\tboy man male guy teenager child young\n👧\tgirl female woman teenager child maiden virgin\n🧑\tperson gender-neutral adult female gender inclusive male\n👱\tperson blond hair hairstyle blonde haired man\n👨\tman mustache father dad guy classy sir\n🧔\tperson beard person bewhiskered bearded\n🧔‍♂️\tman beard facial hair bearded bewhiskered male men\n🧔‍♀️\twoman beard facial hair bearded bewhiskered female women\n👨‍🦰\tman red hair hairstyle adult ginger haired male men\n👨‍🦱\tman curly hair hairstyle adult haired male men\n👨‍🦳\tman white hair old elder adult haired male men\n👨‍🦲\tman bald hairless adult hair male men no\n👩\twoman female girls lady adult women yellow\n👩‍🦰\twoman red hair hairstyle adult female ginger haired redhead\n🧑‍🦰\tperson red hair hairstyle adult gender haired unspecified\n👩‍🦱\twoman curly hair hairstyle adult female haired women\n🧑‍🦱\tperson curly hair hairstyle adult gender haired unspecified\n👩‍🦳\twoman white hair old elder adult female haired women\n🧑‍🦳\tperson white hair elder old adult gender haired unspecified\n👩‍🦲\twoman bald hairless adult female hair no women\n🧑‍🦲\tperson bald hairless adult gender hair no unspecified\n👱‍♀️\twoman blond hair woman female girl blonde person haired\n👱‍♂️\tman blond hair man male boy blonde guy person\n🧓\tolder person human elder senior gender-neutral adult female\n👴\told man human male men old elder senior\n👵\told woman human female women lady old elder\n🙍\tperson frowning worried frown gesture sad woman\n🙍‍♂️\tman frowning male boy man sad depressed discouraged\n🙍‍♀️\twoman frowning female girl woman sad depressed discouraged\n🙎\tperson pouting upset blank face fed gesture look\n🙎‍♂️\tman pouting male boy man gesture men\n🙎‍♀️\twoman pouting female girl woman gesture women\n🙅\tperson gesturing no decline arms deal denied face forbidden\n🙅‍♂️\tman gesturing no male boy man nope denied forbidden\n🙅‍♀️\twoman gesturing no female girl woman nope denied forbidden\n🙆\tperson gesturing ok agree ballerina face gesture hand hands\n🙆‍♂️\tman gesturing ok men boy male blue human man\n🙆‍♀️\twoman gesturing ok women girl female pink human woman\n💁\tperson tipping hand information attendant bellhop concierge desk female\n💁‍♂️\tman tipping hand male boy man human information desk\n💁‍♀️\twoman tipping hand female girl woman human information desk\n🙋\tperson raising hand question answering gesture happy one raised\n🙋‍♂️\tman raising hand male boy man gesture happy men\n🙋‍♀️\twoman raising hand female girl woman gesture happy one\n🧏\tdeaf person accessibility ear hear\n🧏‍♂️\tdeaf man accessibility male men\n🧏‍♀️\tdeaf woman accessibility female women\n🙇\tperson bowing respectiful apology bow boy cute deeply\n🙇‍♂️\tman bowing man male boy apology bow deeply\n🙇‍♀️\twoman bowing woman female girl apology bow deeply\n🤦\tperson facepalming disappointed disbelief exasperation face facepalm head\n🤦‍♂️\tman facepalming man male boy disbelief exasperation face\n🤦‍♀️\twoman facepalming woman female girl disbelief exasperation face\n🤷\tperson shrugging regardless doubt ignorance indifference shrug shruggie\n🤷‍♂️\tman shrugging man male boy confused indifferent doubt\n🤷‍♀️\twoman shrugging woman female girl confused indifferent doubt\n🧑‍⚕️\thealth worker hospital dentist doctor healthcare md nurse\n👨‍⚕️\tman health worker doctor nurse therapist healthcare man human\n👩‍⚕️\twoman health worker doctor nurse therapist healthcare woman human\n🧑‍🎓\tstudent learn education graduate pupil school\n👨‍🎓\tman student graduate man human education graduation male\n👩‍🎓\twoman student graduate woman human education female graduation\n🧑‍🏫\tteacher professor education educator instructor\n👨‍🏫\tman teacher instructor professor man human education educator\n👩‍🏫\twoman teacher instructor professor woman human education educator\n🧑‍⚖️\tjudge law court justice scales\n👨‍⚖️\tman judge justice court man human law male\n👩‍⚖️\twoman judge justice court woman human female law\n🧑‍🌾\tfarmer crops farm farming gardener rancher worker\n👨‍🌾\tman farmer rancher gardener man human farm farming\n👩‍🌾\twoman farmer rancher gardener woman human farm farming\n🧑‍🍳\tcook food kitchen culinary chef cooking service\n👨‍🍳\tman cook chef man human cooking food male\n👩‍🍳\twoman cook chef woman human cooking female food\n🧑‍🔧\tmechanic worker technician electrician person plumber repair\n👨‍🔧\tman mechanic plumber man human wrench electrician male\n👩‍🔧\twoman mechanic plumber woman human wrench electrician female\n🧑‍🏭\tfactory worker labor assembly industrial welder\n👨‍🏭\tman factory worker assembly industrial man human male men\n👩‍🏭\twoman factory worker assembly industrial woman human female welder\n🧑‍💼\toffice worker business accountant adviser analyst architect banker\n👨‍💼\tman office worker business manager man human accountant adviser\n👩‍💼\twoman office worker business manager woman human accountant adviser\n🧑‍🔬\tscientist chemistry biologist chemist engineer lab mathematician\n👨‍🔬\tman scientist biologist chemist engineer physicist man human\n👩‍🔬\twoman scientist biologist chemist engineer physicist woman human\n🧑‍💻\ttechnologist computer coder engineer laptop software technology\n👨‍💻\tman technologist coder developer engineer programmer software man\n👩‍💻\twoman technologist coder developer engineer programmer software woman\n🧑‍🎤\tsinger song artist performer actor entertainer music\n👨‍🎤\tman singer rockstar entertainer man human actor aladdin\n👩‍🎤\twoman singer rockstar entertainer woman human actor female\n🧑‍🎨\tartist painting draw creativity art paint painter\n👨‍🎨\tman artist painter man human art male men\n👩‍🎨\twoman artist painter woman human art female paint\n🧑‍✈️\tpilot fly plane airplane aviation aviator\n👨‍✈️\tman pilot aviator plane man human airplane aviation\n👩‍✈️\twoman pilot aviator plane woman human airplane aviation\n🧑‍🚀\tastronaut outerspace moon planets rocket space stars\n👨‍🚀\tman astronaut space rocket man human cosmonaut male\n👩‍🚀\twoman astronaut space rocket woman human cosmonaut female\n🧑‍🚒\tfirefighter fire firetruck\n👨‍🚒\tman firefighter fireman man human fire firetruck male\n👩‍🚒\twoman firefighter fireman woman human female fire firetruck\n👮\tpolice officer cop law policeman policewoman\n👮‍♂️\tman police officer man police law legal enforcement arrest\n👮‍♀️\twoman police officer woman police law legal enforcement arrest\n🕵️\tdetective human spy eye or private sleuth\n🕵️‍♂️\tman detective crime male men sleuth spy\n🕵️‍♀️\twoman detective human spy detective female woman sleuth\n💂\tguard protect british guardsman\n💂‍♂️\tman guard uk gb british male guy royal\n💂‍♀️\twoman guard uk gb british female royal woman\n🥷\tninja ninjutsu skills japanese fighter hidden stealth\n👷\tconstruction worker labor build builder face hard hat\n👷‍♂️\tman construction worker male human wip guy build construction\n👷‍♀️\twoman construction worker female human wip build construction worker\n🫅\tperson with crown royalty power monarch noble regal\n🤴\tprince boy man male crown royal king\n👸\tprincess girl woman female blond crown royal\n👳\tperson wearing turban headdress arab man muslim sikh\n👳‍♂️\tman wearing turban male indian hinduism arabs men\n👳‍♀️\twoman wearing turban female indian hinduism arabs woman women\n👲\tperson with skullcap male boy chinese asian cap gua\n🧕\twoman with headscarf female hijab mantilla tichel\n🤵\tperson in tuxedo couple marriage wedding groom male men\n🤵‍♂️\tman in tuxedo formal fashion groom male men person\n🤵‍♀️\twoman in tuxedo formal fashion female wedding women\n👰\tperson with veil couple marriage wedding woman bride person\n👰‍♂️\tman with veil wedding marriage bride male men\n👰‍♀️\twoman with veil wedding marriage bride female women\n🤰\tpregnant woman baby female pregnancy pregnant lady women\n🫃\tpregnant man baby belly bloated full\n🫄\tpregnant person baby belly bloated full\n🤱\tbreast-feeding nursing baby breastfeeding child female infant\n👩‍🍼\twoman feeding baby birth food bottle child female infant\n👨‍🍼\tman feeding baby birth food bottle child infant male\n🧑‍🍼\tperson feeding baby birth food bottle child infant milk\n👼\tbaby angel heaven wings halo cherub cupid face\n🎅\tsanta claus festival man male xmas father christmas activity\n🤶\tmrs. claus woman female xmas mother christmas activity celebration\n🧑‍🎄\tmx claus christmas activity celebration mx. santa\n🦸\tsuperhero marvel fantasy good hero heroine superpower\n🦸‍♂️\tman superhero man male good hero superpowers fantasy\n🦸‍♀️\twoman superhero woman female good heroine superpowers fantasy\n🦹\tsupervillain marvel bad criminal evil fantasy superpower\n🦹‍♂️\tman supervillain man male evil bad criminal hero\n🦹‍♀️\twoman supervillain woman female evil bad criminal heroine\n🧙\tmage magic fantasy sorcerer sorceress witch wizard\n🧙‍♂️\tman mage man male mage sorcerer fantasy men\n🧙‍♀️\twoman mage woman female mage witch fantasy sorceress\n🧚\tfairy wings magical fantasy oberon puck titania\n🧚‍♂️\tman fairy man male fantasy men oberon puck\n🧚‍♀️\twoman fairy woman female fantasy titania wings women\n🧛\tvampire blood twilight dracula fantasy undead\n🧛‍♂️\tman vampire man male dracula fantasy men undead\n🧛‍♀️\twoman vampire woman female fantasy undead unded women\n🧜\tmerperson sea fantasy merboy mergirl mermaid merman\n🧜‍♂️\tmerman man male triton fantasy men mermaid\n🧜‍♀️\tmermaid woman female merwoman ariel fantasy women\n🧝\telf magical ears fantasy legolas pointed\n🧝‍♂️\tman elf man male ears fantasy magical men\n🧝‍♀️\twoman elf woman female ears fantasy magical pointed\n🧞\tgenie magical wishes djinn djinni fantasy jinni\n🧞‍♂️\tman genie man male djinn fantasy men\n🧞‍♀️\twoman genie woman female djinn fantasy women\n🧟\tzombie dead fantasy undead walking\n🧟‍♂️\tman zombie man male dracula undead walking dead fantasy\n🧟‍♀️\twoman zombie woman female undead walking dead fantasy women\n🧌\ttroll mystical monster fairy fantasy tale shrek\n💆\tperson getting massage relax face head massaging salon spa\n💆‍♂️\tman getting massage male boy man head face men\n💆‍♀️\twoman getting massage female girl woman head face salon\n💇\tperson getting haircut hairstyle barber beauty cutting hair hairdresser\n💇‍♂️\tman getting haircut male boy man barber beauty men\n💇‍♀️\twoman getting haircut female girl woman barber beauty parlor\n🚶\tperson walking move hike pedestrian walk walker\n🚶‍♂️\tman walking human feet steps hike male men\n🚶‍♀️\twoman walking human feet steps woman female hike\n🧍\tperson standing still stand\n🧍‍♂️\tman standing still male men stand\n🧍‍♀️\twoman standing still female stand women\n🧎\tperson kneeling pray respectful kneel\n🧎‍♂️\tman kneeling pray respectful kneel male men\n🧎‍♀️\twoman kneeling respectful pray female kneel women\n🧑‍🦯\tperson with white cane blind accessibility white\n👨‍🦯\tman with white cane blind accessibility male men white\n👩‍🦯\twoman with white cane blind accessibility female white women\n🧑‍🦼\tperson in motorized wheelchair disability accessibility\n👨‍🦼\tman in motorized wheelchair disability accessibility male men\n👩‍🦼\twoman in motorized wheelchair disability accessibility female women\n🧑‍🦽\tperson in manual wheelchair disability accessibility\n👨‍🦽\tman in manual wheelchair disability accessibility male men\n👩‍🦽\twoman in manual wheelchair disability accessibility female women\n🏃\tperson running move exercise jogging marathon run runner\n🏃‍♂️\tman running man walking exercise race running male\n🏃‍♀️\twoman running woman walking exercise race running female\n💃\twoman dancing female girl woman fun dance dancer\n🕺\tman dancing male boy fun dancer dance disco\n🕴️\tperson in suit levitating suit business levitate hover jump boy\n👯\tpeople with bunny ears perform costume dancer dancing ear partying\n👯‍♂️\tmen with bunny ears male bunny men boys dancer dancing\n👯‍♀️\twomen with bunny ears female bunny women girls dancer dancing\n🧖\tperson in steamy room relax spa hamam sauna steam steambath\n🧖‍♂️\tman in steamy room male man spa steamroom sauna hamam\n🧖‍♀️\twoman in steamy room female woman spa steamroom sauna hamam\n🧗\tperson climbing sport bouldering climber rock\n🧗‍♂️\tman climbing sports hobby man male rock bouldering\n🧗‍♀️\twoman climbing sports hobby woman female rock bouldering\n🤺\tperson fencing sports fencing sword fencer\n🏇\thorse racing animal betting competition gambling luck jockey\n⛷️\tskier sports winter snow ski\n🏂\tsnowboarder sports winter ski snow snowboard snowboarding\n🏌️\tperson golfing sports business ball club golf golfer\n🏌️‍♂️\tman golfing sport ball golf golfer male men\n🏌️‍♀️\twoman golfing sports business woman female ball golf\n🏄\tperson surfing sport sea surf surfer\n🏄‍♂️\tman surfing sports ocean sea summer beach male\n🏄‍♀️\twoman surfing sports ocean sea summer beach woman\n🚣\tperson rowing boat sport move paddles rowboat vehicle\n🚣‍♂️\tman rowing boat sports hobby water ship male men\n🚣‍♀️\twoman rowing boat sports hobby water ship woman female\n🏊\tperson swimming sport pool swim swimmer\n🏊‍♂️\tman swimming sports exercise human athlete water summer\n🏊‍♀️\twoman swimming sports exercise human athlete water summer\n⛹️\tperson bouncing ball sports human basketball player\n⛹️‍♂️\tman bouncing ball sport basketball male men player\n⛹️‍♀️\twoman bouncing ball sports human woman female basketball player\n🏋️\tperson lifting weights sports training exercise bodybuilder gym lifter\n🏋️‍♂️\tman lifting weights sport gym lifter male men weight\n🏋️‍♀️\twoman lifting weights sports training exercise woman female gym\n🚴\tperson biking bicycle bike cyclist sport move bicyclist\n🚴‍♂️\tman biking bicycle bike cyclist sports exercise hipster\n🚴‍♀️\twoman biking bicycle bike cyclist sports exercise hipster\n🚵\tperson mountain biking bicycle bike cyclist sport move bicyclist\n🚵‍♂️\tman mountain biking bicycle bike cyclist transportation sports human\n🚵‍♀️\twoman mountain biking bicycle bike cyclist transportation sports human\n🤸\tperson cartwheeling sport gymnastic cartwheel doing gymnast gymnastics\n🤸‍♂️\tman cartwheeling gymnastics cartwheel doing male men\n🤸‍♀️\twoman cartwheeling gymnastics cartwheel doing female women\n🤼\tpeople wrestling sport wrestle wrestler wrestlers\n🤼‍♂️\tmen wrestling sports wrestlers male man wrestle wrestler\n🤼‍♀️\twomen wrestling sports wrestlers female woman wrestle wrestler\n🤽\tperson playing water polo sport\n🤽‍♂️\tman playing water polo sports pool male men\n🤽‍♀️\twoman playing water polo sports pool female women\n🤾\tperson playing handball sport ball\n🤾‍♂️\tman playing handball sports ball male men\n🤾‍♀️\twoman playing handball sports ball female women\n🤹\tperson juggling performance balance juggle juggler multitask skill\n🤹‍♂️\tman juggling juggle balance skill multitask juggler male\n🤹‍♀️\twoman juggling juggle balance skill multitask female juggler\n🧘\tperson in lotus position meditate meditation serenity yoga\n🧘‍♂️\tman in lotus position man male meditation yoga serenity zen\n🧘‍♀️\twoman in lotus position woman female meditation yoga serenity zen\n🛀\tperson taking bath clean shower bathroom bathing bathtub hot\n🛌\tperson in bed bed rest accommodation hotel sleep sleeping\n🧑‍🤝‍🧑\tpeople holding hands friendship couple date gender hand hold\n👭\twomen holding hands pair friendship couple love like female\n👫\twoman and man holding hands pair people human love date dating\n👬\tmen holding hands pair couple love like bromance friendship\n💏\tkiss pair valentines love like dating marriage\n👩‍❤️‍💋‍👨\tkiss woman, man love couple couplekiss female heart kissing\n👨‍❤️‍💋‍👨\tkiss man, man pair valentines love like dating marriage\n👩‍❤️‍💋‍👩\tkiss woman, woman pair valentines love like dating marriage\n💑\tcouple with heart pair love like affection human dating\n👩‍❤️‍👨\tcouple with heart woman, man love female male men romance women\n👨‍❤️‍👨\tcouple with heart man, man pair love like affection human dating\n👩‍❤️‍👩\tcouple with heart woman, woman pair love like affection human dating\n👨‍👩‍👦\tfamily man, woman, boy love father mother son\n👨‍👩‍👧\tfamily man, woman, girl home parents people human child daughter\n👨‍👩‍👧‍👦\tfamily man, woman, girl, boy home parents people human children child\n👨‍👩‍👦‍👦\tfamily man, woman, boy, boy home parents people human children child\n👨‍👩‍👧‍👧\tfamily man, woman, girl, girl home parents people human children child\n👨‍👨‍👦\tfamily man, man, boy home parents people human children child\n👨‍👨‍👧\tfamily man, man, girl home parents people human children child\n👨‍👨‍👧‍👦\tfamily man, man, girl, boy home parents people human children child\n👨‍👨‍👦‍👦\tfamily man, man, boy, boy home parents people human children child\n👨‍👨‍👧‍👧\tfamily man, man, girl, girl home parents people human children child\n👩‍👩‍👦\tfamily woman, woman, boy home parents people human children child\n👩‍👩‍👧\tfamily woman, woman, girl home parents people human children child\n👩‍👩‍👧‍👦\tfamily woman, woman, girl, boy home parents people human children child\n👩‍👩‍👦‍👦\tfamily woman, woman, boy, boy home parents people human children child\n👩‍👩‍👧‍👧\tfamily woman, woman, girl, girl home parents people human children child\n👨‍👦\tfamily man, boy home parent people human child father\n👨‍👦‍👦\tfamily man, boy, boy home parent people human children child\n👨‍👧\tfamily man, girl home parent people human child daughter\n👨‍👧‍👦\tfamily man, girl, boy home parent people human children child\n👨‍👧‍👧\tfamily man, girl, girl home parent people human children child\n👩‍👦\tfamily woman, boy home parent people human child female\n👩‍👦‍👦\tfamily woman, boy, boy home parent people human children child\n👩‍👧\tfamily woman, girl home parent people human child daughter\n👩‍👧‍👦\tfamily woman, girl, boy home parent people human children child\n👩‍👧‍👧\tfamily woman, girl, girl home parent people human children child\n🗣️\tspeaking head user person human sing say talk\n👤\tbust in silhouette user person human shadow\n👥\tbusts in silhouette user person human group team bust\n🫂\tpeople hugging care goodbye hello hug thanks\n👪\tfamily home parents child mom dad father\n👣\tfootprints feet tracking walking beach body clothing"],["Animals & Nature","🐵\tmonkey face animal nature circus head\n🐒\tmonkey animal nature banana circus cheeky\n🦍\tgorilla animal nature circus\n🦧\torangutan animal ape\n🐶\tdog face animal friend nature woof puppy pet\n🐕\tdog animal nature friend doge pet faithful\n🦮\tguide dog animal blind accessibility eye seeing\n🐕‍🦺\tservice dog blind animal accessibility assistance\n🐩\tpoodle dog animal 101 nature pet miniature\n🐺\twolf animal nature wild face\n🦊\tfox animal nature face\n🦝\traccoon animal nature curious face sly\n🐱\tcat face animal meow nature pet kitten kitty\n🐈\tcat animal meow pet cats cat2 domestic\n🐈‍⬛\tblack cat superstition luck halloween pet unlucky\n🦁\tlion animal nature face leo zodiac\n🐯\ttiger face animal cat danger wild nature roar\n🐅\ttiger animal nature roar bengal tiger2\n🐆\tleopard animal nature african jaguar\n🐴\thorse face animal brown nature head\n🫎\tmoose canada sweden sven cool\n🫏\tdonkey eeyore mule\n🐎\thorse animal gamble luck equestrian galloping racehorse\n🦄\tunicorn animal nature mystical face\n🦓\tzebra animal nature stripes safari face stripe\n🦌\tdeer animal nature horns venison buck reindeer\n🦬\tbison ox buffalo herd wisent\n🐮\tcow face beef ox animal nature moo milk\n🐂\tox animal cow beef bull bullock oxen\n🐃\twater buffalo animal nature ox cow domestic\n🐄\tcow beef ox animal nature moo milk\n🐷\tpig face animal oink nature head\n🐖\tpig animal nature hog pig2 sow\n🐗\tboar animal nature pig warthog wild\n🐽\tpig nose animal oink face snout\n🐏\tram animal sheep nature aries male zodiac\n🐑\tewe animal nature wool shipit female lamb\n🐐\tgoat animal nature capricorn zodiac\n🐪\tcamel animal hot desert hump arabian bump\n🐫\ttwo-hump camel animal nature hot desert hump asian\n🦙\tllama animal nature alpaca guanaco vicuña wool\n🦒\tgiraffe animal nature spots safari face\n🐘\telephant animal nature nose th circus\n🦣\tmammoth elephant tusks extinct extinction large tusk\n🦏\trhinoceros animal nature horn rhino\n🦛\thippopotamus animal nature hippo\n🐭\tmouse face animal nature cheese wedge rodent\n🐁\tmouse animal nature rodent dormouse mice mouse2\n🐀\trat animal mouse rodent\n🐹\thamster animal nature face pet\n🐰\trabbit face animal nature pet spring magic bunny\n🐇\trabbit animal nature pet magic spring bunny\n🐿️\tchipmunk animal nature rodent squirrel\n🦫\tbeaver animal rodent dam\n🦔\thedgehog animal nature spiny face\n🦇\tbat animal nature blind vampire batman\n🐻\tbear animal nature wild face teddy\n🐻‍❄️\tpolar bear animal arctic face white\n🐨\tkoala animal nature bear face marsupial\n🐼\tpanda animal nature face\n🦥\tsloth animal lazy slow\n🦦\totter animal fishing playful\n🦨\tskunk animal smelly stink\n🦘\tkangaroo animal nature australia joey hop marsupial\n🦡\tbadger animal nature honey pester\n🐾\tpaw prints animal tracking footprints dog cat pet\n🦃\tturkey animal bird thanksgiving wild\n🐔\tchicken animal cluck nature bird hen\n🐓\trooster animal nature chicken bird cock cockerel\n🐣\thatching chick animal chicken egg born baby bird\n🐤\tbaby chick animal chicken bird yellow\n🐥\tfront-facing baby chick animal chicken baby bird hatched standing\n🐦\tbird animal nature fly tweet spring\n🐧\tpenguin animal nature bird\n🕊️\tdove animal bird fly peace\n🦅\teagle animal nature bird bald\n🦆\tduck animal nature bird mallard\n🦢\tswan animal nature bird cygnet duckling ugly\n🦉\towl animal nature bird hoot wise\n🦤\tdodo animal bird extinct extinction large mauritius\n🪶\tfeather bird fly flight light plumage\n🦩\tflamingo animal flamboyant tropical\n🦚\tpeacock animal nature peahen bird ostentatious proud\n🦜\tparrot animal nature bird pirate talk\n🪽\twing angel birds flying fly\n🐦‍⬛\tblack bird crow\n🪿\tgoose silly jemima goosebumps honk\n🐸\tfrog animal nature croak toad face\n🐊\tcrocodile animal nature reptile lizard alligator croc\n🐢\tturtle animal slow nature tortoise terrapin\n🦎\tlizard animal nature reptile gecko\n🐍\tsnake animal evil nature hiss python bearer\n🐲\tdragon face animal myth nature chinese green fairy\n🐉\tdragon animal myth nature chinese green fairy\n🦕\tsauropod animal nature dinosaur brachiosaurus brontosaurus diplodocus\n🦖\tt-rex animal nature dinosaur tyrannosaurus extinct trex\n🐳\tspouting whale animal nature sea ocean cute face\n🐋\twhale animal nature sea ocean whale2\n🐬\tdolphin animal nature fish sea ocean flipper\n🦭\tseal animal creature sea lion\n🐟\tfish animal food nature freshwater pisces zodiac\n🐠\ttropical fish animal swim ocean beach nemo blue\n🐡\tblowfish animal nature food sea ocean fish\n🦈\tshark animal nature fish sea ocean jaws\n🐙\toctopus animal creature ocean sea nature beach\n🐚\tspiral shell nature sea beach seashell\n🪸\tcoral ocean sea reef\n🪼\tjellyfish sting tentacles\n🦀\tcrab animal crustacean cancer zodiac\n🦞\tlobster animal nature bisque claws seafood\n🦐\tshrimp animal ocean nature seafood food prawn\n🦑\tsquid animal nature ocean sea food molusc\n🦪\toyster food diving pearl\n🐌\tsnail slow animal shell garden slug\n🦋\tbutterfly animal insect nature caterpillar pretty\n🐛\tbug animal insect nature worm caterpillar\n🐜\tant animal insect nature bug\n🐝\thoneybee animal insect nature bug spring honey\n🪲\tbeetle insect bug\n🐞\tlady beetle animal insect nature ladybug bug ladybird\n🦗\tcricket animal chirp grasshopper insect orthoptera\n🪳\tcockroach insect pests pest roach\n🕷️\tspider animal arachnid insect\n🕸️\tspider web animal insect arachnid silk cobweb spiderweb\n🦂\tscorpion animal arachnid scorpio scorpius zodiac\n🦟\tmosquito animal nature insect malaria disease fever\n🪰\tfly insect disease maggot pest rotting\n🪱\tworm animal annelid earthworm parasite\n🦠\tmicrobe amoeba bacteria germs virus covid cell\n💐\tbouquet flowers nature spring flower plant romance\n🌸\tcherry blossom nature plant spring flower pink sakura\n💮\twhite flower japanese spring blossom cherry doily done\n🪷\tlotus flower calm meditation buddhism hinduism india\n🏵️\trosette flower decoration military plant\n🌹\trose flowers valentines love spring flower plant\n🥀\twilted flower plant nature flower rose dead drooping\n🌺\thibiscus plant vegetable flowers beach flower\n🌻\tsunflower nature plant fall flower sun yellow\n🌼\tblossom nature flowers yellow blossoming flower daisy flower\n🌷\ttulip flowers plant nature summer spring flower\n🪻\thyacinth flower lavender\n🌱\tseedling plant nature grass lawn spring sprout\n🪴\tpotted plant greenery house boring grow houseplant nurturing\n🌲\tevergreen tree plant nature fir pine wood\n🌳\tdeciduous tree plant nature rounded shedding wood\n🌴\tpalm tree plant vegetable nature summer beach mojito\n🌵\tcactus vegetable plant nature desert\n🌾\tsheaf of rice nature plant crop ear farming grain\n🌿\therb vegetable plant medicine weed grass lawn\n☘️\tshamrock vegetable plant nature irish clover trefoil\n🍀\tfour leaf clover vegetable plant nature lucky irish ireland\n🍁\tmaple leaf nature plant vegetable ca fall canada\n🍂\tfallen leaf nature plant vegetable leaves autumn brown\n🍃\tleaf fluttering in wind nature plant tree vegetable grass lawn\n🪹\tempty nest bird nesting\n🪺\tnest with eggs bird nesting\n🍄\tmushroom plant vegetable fungus shroom toadstool"],["Food & Drink","🍇\tgrapes fruit food wine grape plant\n🍈\tmelon fruit nature food cantaloupe honeydew muskmelon\n🍉\twatermelon fruit food picnic summer plant\n🍊\ttangerine food fruit nature orange mandarin plant\n🍋\tlemon fruit nature citrus lemonade plant\n🍌\tbanana fruit food monkey plant plantain\n🍍\tpineapple fruit nature food plant\n🥭\tmango fruit food tropical\n🍎\tred apple fruit mac school delicious plant\n🍏\tgreen apple fruit nature delicious golden granny plant\n🍐\tpear fruit nature food plant\n🍑\tpeach fruit nature food bottom butt plant\n🍒\tcherries food fruit berries cherry plant red\n🍓\tstrawberry fruit food nature berry plant\n🫐\tblueberries fruit berry bilberry blue blueberry\n🥝\tkiwi fruit fruit food chinese gooseberry kiwifruit\n🍅\ttomato fruit vegetable nature food plant\n🫒\tolive fruit food olives\n🥥\tcoconut fruit nature food palm cocoanut colada\n🥑\tavocado fruit food\n🍆\teggplant vegetable nature food aubergine phallic plant\n🥔\tpotato food tuber vegatable starch baked idaho\n🥕\tcarrot vegetable food orange\n🌽\tear of corn food vegetable plant cob maize maze\n🌶️\thot pepper food spicy chilli chili plant\n🫑\tbell pepper fruit plant capsicum vegetable\n🥒\tcucumber fruit food pickle gherkin vegetable\n🥬\tleafy green food vegetable plant bok choy cabbage kale\n🥦\tbroccoli fruit food vegetable cabbage wild\n🧄\tgarlic food spice cook flavoring plant vegetable\n🧅\tonion cook food spice flavoring plant vegetable\n🥜\tpeanuts food nut nuts peanut vegetable\n🫘\tbeans food kidney legume\n🌰\tchestnut food squirrel acorn nut plant\n🫚\tginger root spice yellow cooking gingerbread\n🫛\tpea pod cozy green\n🍞\tbread food wheat breakfast toast loaf\n🥐\tcroissant food bread french breakfast crescent roll\n🥖\tbaguette bread food bread french france bakery\n🫓\tflatbread flour food bakery arepa bread flat\n🥨\tpretzel food bread twisted germany bakery soft\n🥯\tbagel food bread bakery schmear jewish bakery breakfast\n🥞\tpancakes food breakfast flapjacks hotcakes brunch crêpe\n🧇\twaffle food breakfast brunch indecisive iron\n🧀\tcheese wedge food chadder swiss\n🍖\tmeat on bone good food drumstick barbecue bbq manga\n🍗\tpoultry leg food meat drumstick bird chicken turkey\n🥩\tcut of meat food cow meat cut chop lambchop\n🥓\tbacon food breakfast pork pig meat brunch\n🍔\thamburger meat fast food beef cheeseburger mcdonalds burger king\n🍟\tfrench fries chips snack fast food potato mcdonald's\n🍕\tpizza food party italy cheese pepperoni slice\n🌭\thot dog food frankfurter america hotdog redhot sausage\n🥪\tsandwich food lunch bread toast bakery cheese\n🌮\ttaco food mexican\n🌯\tburrito food mexican wrap\n🫔\ttamale food masa mexican tamal wrapped\n🥙\tstuffed flatbread food flatbread stuffed gyro mediterranean doner\n🧆\tfalafel food mediterranean chickpea falfel meatball\n🥚\tegg food chicken breakfast easter egg\n🍳\tcooking food breakfast kitchen egg skillet fried\n🥘\tshallow pan of food food cooking casserole paella skillet curry\n🍲\tpot of food food meat soup hot pot bowl stew\n🫕\tfondue cheese pot food chocolate melted swiss\n🥣\tbowl with spoon food breakfast cereal oatmeal porridge congee\n🥗\tgreen salad food healthy lettuce vegetable\n🍿\tpopcorn food movie theater films snack drama corn\n🧈\tbutter food cook dairy\n🧂\tsalt condiment shaker\n🥫\tcanned food food soup tomatoes can preserve tin\n🍱\tbento box food japanese box lunch assets\n🍘\trice cracker food japanese snack senbei\n🍙\trice ball food japanese onigiri omusubi\n🍚\tcooked rice food asian boiled bowl steamed\n🍛\tcurry rice food spicy hot indian\n🍜\tsteaming bowl food japanese noodle chopsticks ramen noodles\n🍝\tspaghetti food italian pasta noodle\n🍠\troasted sweet potato food nature plant goguma yam\n🍢\toden skewer food japanese kebab seafood stick\n🍣\tsushi food fish japanese rice sashimi seafood\n🍤\tfried shrimp food animal appetizer summer prawn tempura\n🍥\tfish cake with swirl food japan sea beach narutomaki pink\n🥮\tmoon cake food autumn dessert festival mooncake yuèbǐng\n🍡\tdango food dessert sweet japanese barbecue meat\n🥟\tdumpling food empanada pierogi potsticker gyoza gyōza\n🥠\tfortune cookie food prophecy dessert\n🥡\ttakeout box food leftovers chinese container out oyster\n🍦\tsoft ice cream food hot dessert summer icecream mr.\n🍧\tshaved ice hot dessert summer cone snow sweet\n🍨\tice cream food hot dessert bowl sweet\n🍩\tdoughnut food dessert snack sweet donut breakfast\n🍪\tcookie food snack oreo chocolate sweet dessert\n🎂\tbirthday cake food dessert cake candles celebration party\n🍰\tshortcake food dessert cake pastry piece slice\n🧁\tcupcake food dessert bakery sweet cake fairy\n🥧\tpie food dessert pastry filling sweet\n🍫\tchocolate bar food snack dessert sweet candy\n🍬\tcandy snack dessert sweet lolly\n🍭\tlollipop food snack candy sweet dessert lollypop\n🍮\tcustard dessert food pudding flan caramel creme\n🍯\thoney pot bees sweet kitchen honeypot\n🍼\tbaby bottle food container milk drink feeding\n🥛\tglass of milk beverage drink cow\n☕\thot beverage beverage caffeine latte espresso coffee mug\n🫖\tteapot drink hot kettle pot tea\n🍵\tteacup without handle drink bowl breakfast green british beverage\n🍶\tsake wine drink drunk beverage japanese alcohol\n🍾\tbottle with popping cork drink wine bottle celebration bar bubbly\n🍷\twine glass drink beverage drunk alcohol booze bar\n🍸\tcocktail glass drink drunk alcohol beverage booze mojito\n🍹\ttropical drink beverage cocktail summer beach alcohol booze\n🍺\tbeer mug relax beverage drink drunk party pub\n🍻\tclinking beer mugs relax beverage drink drunk party pub\n🥂\tclinking glasses beverage drink party alcohol celebrate cheers\n🥃\ttumbler glass drink beverage drunk alcohol liquor booze\n🫗\tpouring liquid cup water drink empty glass spill\n🥤\tcup with straw drink soda go juice malt milkshake\n🧋\tbubble tea taiwan boba milk tea straw momi pearl\n🧃\tbeverage box drink juice straw sweet\n🧉\tmate drink tea beverage bombilla chimarrão cimarrón\n🧊\tice water cold cube iceberg\n🥢\tchopsticks food hashi jeotgarak kuaizi\n🍽️\tfork and knife with plate food eat meal lunch dinner restaurant\n🍴\tfork and knife cutlery kitchen cooking silverware tableware\n🥄\tspoon cutlery kitchen tableware\n🔪\tkitchen knife knife blade cutlery kitchen weapon butchers\n🫙\tjar container sauce condiment empty store\n🏺\tamphora vase jar aquarius cooking drink jug"],["Travel & Places","🌍\tglobe showing europe-africa globe world earth international planet\n🌎\tglobe showing americas globe world usa earth international planet\n🌏\tglobe showing asia-australia globe world east earth international planet\n🌐\tglobe with meridians earth international world internet interweb i18n\n🗺️\tworld map location direction travel\n🗾\tmap of japan nation country japanese asia silhouette\n🧭\tcompass magnetic navigation orienteering\n🏔️\tsnow-capped mountain photo nature environment winter cold\n⛰️\tmountain photo nature environment\n🌋\tvolcano photo nature disaster eruption mountain weather\n🗻\tmount fuji photo mountain nature japanese capped san\n🏕️\tcamping photo outdoors tent campsite\n🏖️\tbeach with umbrella weather summer sunny sand mojito\n🏜️\tdesert photo warm saharah\n🏝️\tdesert island photo tropical mojito\n🏞️\tnational park photo environment nature\n🏟️\tstadium photo place sports concert venue grandstand\n🏛️\tclassical building art culture history\n🏗️\tbuilding construction wip working progress crane architectural\n🧱\tbrick bricks clay construction mortar wall infrastructure\n🪨\trock stone boulder construction heavy solid\n🪵\twood nature timber trunk construction log lumber\n🛖\thut house structure roundhouse yurt\n🏘️\thouses buildings photo building group house\n🏚️\tderelict house abandon evict broken building abandoned haunted\n🏠\thouse building home\n🏡\thouse with garden home plant nature building tree\n🏢\toffice building building bureau work city high rise\n🏣\tjapanese post office building envelope communication japan mark postal\n🏤\tpost office building email european\n🏥\thospital building health surgery doctor cross emergency\n🏦\tbank building money sales cash business enterprise\n🏨\thotel building accomodation checkin accommodation h\n🏩\tlove hotel like affection dating building heart hospital\n🏪\tconvenience store building shopping groceries corner e eleven®\n🏫\tschool building student education learn teach clock\n🏬\tdepartment store building shopping mall center shops\n🏭\tfactory building industry pollution smoke industrial smog\n🏯\tjapanese castle photo building fortress\n🏰\tcastle building royalty history european turrets\n💒\twedding love like affection couple marriage bride\n🗼\ttokyo tower photo japanese eiffel red\n🗽\tstatue of liberty american newyork new york\n⛪\tchurch building religion christ christian cross\n🕌\tmosque islam worship minaret domed muslim religion\n🛕\thindu temple religion\n🕍\tsynagogue judaism worship temple jewish jew religion\n⛩️\tshinto shrine temple japan kyoto kami michi no\n🕋\tkaaba mecca mosque islam muslim religion\n⛲\tfountain photo summer water fresh feature park\n⛺\ttent photo camping outdoors\n🌁\tfoggy photo mountain bridge city fog fog bridge\n🌃\tnight with stars evening city downtown star starry weather\n🏙️\tcityscape photo night life urban building city skyline\n🌄\tsunrise over mountains view vacation photo morning mountain sun\n🌅\tsunrise morning view vacation photo sun sunset\n🌆\tcityscape at dusk photo evening sky buildings building city\n🌇\tsunset photo good morning dawn building buildings city\n🌉\tbridge at night photo sanfrancisco gate golden weather\n♨️\thot springs bath warm relax hotsprings onsen steam\n🎠\tcarousel horse photo carnival activity entertainment fairground go\n🛝\tplayground slide fun park amusement play\n🎡\tferris wheel photo carnival londoneye activity amusement big\n🎢\troller coaster carnival playground photo fun activity amusement\n💈\tbarber pole hair salon style barber's haircut hairdresser\n🎪\tcircus tent festival carnival party activity big entertainment\n🚂\tlocomotive transportation vehicle train engine railway steam\n🚃\trailway car transportation vehicle carriage electric railcar railroad\n🚄\thigh-speed train transportation vehicle bullettrain railway shinkansen side\n🚅\tbullet train transportation vehicle speed fast public travel\n🚆\ttrain transportation vehicle diesel electric passenger railway\n🚇\tmetro transportation blue-square mrt underground tube subway\n🚈\tlight rail transportation vehicle railway\n🚉\tstation transportation vehicle public platform railway train\n🚊\ttram transportation vehicle trolleybus\n🚝\tmonorail transportation vehicle\n🚞\tmountain railway transportation vehicle car funicular train\n🚋\ttram car transportation vehicle carriage public travel train\n🚌\tbus car vehicle transportation school\n🚍\toncoming bus vehicle transportation front\n🚎\ttrolleybus bart transportation vehicle bus electric bus tram\n🚐\tminibus vehicle car transportation bus minivan mover\n🚑\tambulance health 911 hospital vehicle\n🚒\tfire engine transportation cars vehicle department truck\n🚓\tpolice car vehicle cars transportation law legal enforcement\n🚔\toncoming police car vehicle law legal enforcement 911 front of\n🚕\ttaxi uber vehicle cars transportation new side\n🚖\toncoming taxi vehicle cars uber front taxicab\n🚗\tautomobile red transportation vehicle car side\n🚘\toncoming automobile car vehicle transportation front\n🚙\tsport utility vehicle transportation vehicle blue campervan car motorhome\n🛻\tpickup truck car transportation vehicle\n🚚\tdelivery truck cars transportation vehicle resources\n🚛\tarticulated lorry vehicle cars transportation express green semi\n🚜\ttractor vehicle car farming agriculture farm\n🏎️\tracing car sports race fast formula f1 one\n🏍️\tmotorcycle race sports fast motorbike racing\n🛵\tmotor scooter vehicle vespa sasha bike cycle\n🦽\tmanual wheelchair accessibility\n🦼\tmotorized wheelchair accessibility\n🛺\tauto rickshaw move transportation tuk\n🚲\tbicycle bike sports exercise hipster push vehicle\n🛴\tkick scooter vehicle kick razor\n🛹\tskateboard board skate\n🛼\troller skate footwear sports derby inline\n🚏\tbus stop transportation wait busstop\n🛣️\tmotorway road cupertino interstate highway\n🛤️\trailway track train transportation\n🛢️\toil drum barrell\n⛽\tfuel pump gas station petroleum diesel fuelpump petrol\n🛞\twheel car transport circle tire turn\n🚨\tpolice car light police ambulance 911 emergency alert error\n🚥\thorizontal traffic light transportation signal\n🚦\tvertical traffic light transportation driving semaphore signal\n🛑\tstop sign stop octagonal\n🚧\tconstruction wip progress caution warning barrier black\n⚓\tanchor ship ferry sea boat admiralty fisherman\n🛟\tring buoy life saver life preserver float rescue safety\n⛵\tsailboat ship summer transportation water sailing boat\n🛶\tcanoe boat paddle water ship\n🚤\tspeedboat ship transportation vehicle summer boat motorboat\n🛳️\tpassenger ship yacht cruise ferry vehicle\n⛴️\tferry boat ship yacht passenger\n🛥️\tmotor boat ship motorboat vehicle\n🚢\tship transportation titanic deploy boat cruise passenger\n✈️\tairplane vehicle transportation flight fly aeroplane plane\n🛩️\tsmall airplane flight transportation fly vehicle aeroplane plane\n🛫\tairplane departure airport flight landing aeroplane departures off\n🛬\tairplane arrival airport flight boarding aeroplane arrivals arriving\n🪂\tparachute fly glide hang parasail skydive\n💺\tseat sit airplane transport bus flight fly\n🚁\thelicopter transportation vehicle fly\n🚟\tsuspension railway vehicle transportation\n🚠\tmountain cableway transportation vehicle ski cable gondola\n🚡\taerial tramway transportation vehicle ski cable car gondola\n🛰️\tsatellite communication gps orbit spaceflight nasa iss\n🚀\trocket launch ship staffmode nasa outer space\n🛸\tflying saucer transportation vehicle ufo alien extraterrestrial fantasy\n🛎️\tbellhop bell service hotel\n🧳\tluggage packing travel suitcase\n⌛\thourglass done time clock oldschool limit exam quiz\n⏳\thourglass not done oldschool time countdown flowing sand timer\n⌚\twatch time accessories apple clock timepiece wrist\n⏰\talarm clock time wake morning\n⏱️\tstopwatch time deadline clock\n⏲️\ttimer clock alarm\n🕰️\tmantelpiece clock time\n🕛\ttwelve o’clock 12 00:00 0000 12:00 1200 time\n🕧\ttwelve-thirty 00:30 0030 12:30 1230 time late\n🕐\tone o’clock 1 1:00 100 13:00 1300 time\n🕜\tone-thirty 1:30 130 13:30 1330 time late\n🕑\ttwo o’clock 2 2:00 200 14:00 1400 time\n🕝\ttwo-thirty 2:30 230 14:30 1430 time late\n🕒\tthree o’clock 3 3:00 300 15:00 1500 time\n🕞\tthree-thirty 3:30 330 15:30 1530 time late\n🕓\tfour o’clock 4 4:00 400 16:00 1600 time\n🕟\tfour-thirty 4:30 430 16:30 1630 time late\n🕔\tfive o’clock 5 5:00 500 17:00 1700 time\n🕠\tfive-thirty 5:30 530 17:30 1730 time late\n🕕\tsix o’clock 6 6:00 600 18:00 1800 time\n🕡\tsix-thirty 6:30 630 18:30 1830 time late\n🕖\tseven o’clock 7 7:00 700 19:00 1900 time\n🕢\tseven-thirty 7:30 730 19:30 1930 time late\n🕗\teight o’clock 8 8:00 800 20:00 2000 time\n🕣\teight-thirty 8:30 830 20:30 2030 time late\n🕘\tnine o’clock 9 9:00 900 21:00 2100 time\n🕤\tnine-thirty 9:30 930 21:30 2130 time late\n🕙\tten o’clock 10 10:00 1000 22:00 2200 time\n🕥\tten-thirty 10:30 1030 22:30 2230 time late\n🕚\televen o’clock 11 11:00 1100 23:00 2300 time\n🕦\televen-thirty 11:30 1130 23:30 2330 time late\n🌑\tnew moon nature twilight planet space night evening\n🌒\twaxing crescent moon nature twilight planet space night evening\n🌓\tfirst quarter moon nature twilight planet space night evening\n🌔\twaxing gibbous moon nature night sky gray twilight planet\n🌕\tfull moon nature yellow twilight planet space night\n🌖\twaning gibbous moon nature twilight planet space night evening\n🌗\tlast quarter moon nature twilight planet space night evening\n🌘\twaning crescent moon nature twilight planet space night evening\n🌙\tcrescent moon night sleep sky evening magic space\n🌚\tnew moon face nature twilight planet space night evening\n🌛\tfirst quarter moon face nature twilight planet space night evening\n🌜\tlast quarter moon face nature twilight planet space night evening\n🌡️\tthermometer weather temperature hot cold\n☀️\tsun weather nature brightness summer beach spring\n🌝\tfull moon face nature twilight planet space night evening\n🌞\tsun with face nature morning sky bright smiley smiling\n🪐\tringed planet outerspace planets saturn saturnine space\n⭐\tstar night yellow gold medium white\n🌟\tglowing star night sparkle awesome good magic glittery\n🌠\tshooting star night photo activity falling meteoroid space\n🌌\tmilky way photo space stars galaxy night sky\n☁️\tcloud weather sky cloudy overcast\n⛅\tsun behind cloud weather nature cloudy morning fall spring\n⛈️\tcloud with lightning and rain weather lightning thunder\n🌤️\tsun behind small cloud weather white\n🌥️\tsun behind large cloud weather white\n🌦️\tsun behind rain cloud weather white\n🌧️\tcloud with rain weather\n🌨️\tcloud with snow weather cold\n🌩️\tcloud with lightning weather thunder\n🌪️\ttornado weather cyclone twister cloud whirlwind\n🌫️\tfog weather cloud\n🌬️\twind face gust air blow blowing cloud mother\n🌀\tcyclone weather swirl blue cloud vortex spiral\n🌈\trainbow nature happy unicorn face photo sky spring\n🌂\tclosed umbrella weather rain drizzle clothing collapsed umbrella pink\n☂️\tumbrella weather spring clothing open rain\n☔\tumbrella with rain drops rainy weather spring clothing drop raining\n⛱️\tumbrella on ground weather summer beach parasol rain sun\n⚡\thigh voltage thunder weather lightning bolt fast zap danger\n❄️\tsnowflake winter season cold weather christmas xmas\n☃️\tsnowman winter season cold weather christmas xmas\n⛄\tsnowman without snow winter season cold weather christmas xmas\n☄️\tcomet space\n🔥\tfire hot cook flame burn lit snapstreak\n💧\tdroplet water drip faucet spring cold comic\n🌊\twater wave sea water wave nature tsunami disaster"],["Activities","🎃\tjack-o-lantern halloween light pumpkin creepy fall activity\n🎄\tchristmas tree festival vacation december xmas celebration activity\n🎆\tfireworks photo festival carnival congratulations activity celebration\n🎇\tsparkler stars night shine activity celebration entertainment\n🧨\tfirecracker dynamite boom explode explosion explosive fireworks\n✨\tsparkles stars shine shiny cool awesome good\n🎈\tballoon party celebration birthday circus activity entertainment\n🎉\tparty popper party congratulations birthday magic circus celebration\n🎊\tconfetti ball festival party birthday circus activity celebration\n🎋\ttanabata tree plant nature branch summer bamboo wish\n🎍\tpine decoration japanese plant nature vegetable panda new years\n🎎\tjapanese dolls japanese toy kimono activity celebration doll\n🎏\tcarp streamer fish japanese koinobori carp banner activity\n🎐\twind chime nature ding spring bell activity celebration\n🎑\tmoon viewing ceremony photo japan asia tsukimi activity autumn\n🧧\tred envelope gift ang good hóngbāo lai luck\n🎀\tribbon decoration pink girl bowtie bow celebration\n🎁\twrapped gift present birthday christmas xmas box celebration\n🎗️\treminder ribbon sports cause support awareness celebration\n🎟️\tadmission tickets sports concert entrance entertainment ticket\n🎫\tticket event concert pass activity admission entertainment\n🎖️\tmilitary medal award winning army celebration decoration medallion\n🏆\ttrophy win award contest place ftw ceremony\n🏅\tsports medal award winning gold winner\n🥇\t1st place medal award winning first gold\n🥈\t2nd place medal award second silver\n🥉\t3rd place medal award third bronze\n⚽\tsoccer ball sports football\n⚾\tbaseball sports balls ball softball\n🥎\tsoftball sports balls ball game glove sport\n🏀\tbasketball sports balls nba ball hoop orange\n🏐\tvolleyball sports balls ball game\n🏈\tamerican football sports balls nfl ball gridiron superbowl\n🏉\trugby football sports team ball league union\n🎾\ttennis sports balls green ball racket racquet\n🥏\tflying disc sports frisbee ultimate game golf sport\n🎳\tbowling sports fun play ball game pin\n🏏\tcricket game sports ball bat field\n🏑\tfield hockey sports ball game stick\n🏒\tice hockey sports game puck stick\n🥍\tlacrosse sports ball stick game goal sport\n🏓\tping pong sports pingpong ball bat game paddle\n🏸\tbadminton sports birdie game racquet shuttlecock\n🥊\tboxing glove sports fighting\n🥋\tmartial arts uniform judo karate taekwondo\n🥅\tgoal net sports catch\n⛳\tflag in hole sports business flag hole summer golf\n⛸️\tice skate sports skating\n🎣\tfishing pole food hobby summer entertainment fish rod\n🤿\tdiving mask sport ocean scuba snorkeling\n🎽\trunning shirt play pageant athletics marathon sash singlet\n🎿\tskis sports winter cold snow boot ski\n🛷\tsled sleigh luge toboggan sledge\n🥌\tcurling stone sports game rock\n🎯\tbullseye game play bar target activity\n🪀\tyo-yo toy fluctuate yoyo\n🪁\tkite wind fly soar toy\n🔫\twater pistol violence weapon revolver gun handgun shoot\n🎱\tpool 8 ball pool hobby game luck magic 8ball\n🔮\tcrystal ball disco party magic circus fortune teller clairvoyant\n🪄\tmagic wand supernature power witch wizard\n🎮\tvideo game play console ps4 controller entertainment gamepad\n🕹️\tjoystick game play entertainment video\n🎰\tslot machine bet gamble vegas fruit machine luck casino\n🎲\tgame die dice random tabletop play luck entertainment\n🧩\tpuzzle piece interlocking puzzle piece clue jigsaw\n🧸\tteddy bear plush stuffed plaything toy\n🪅\tpiñata mexico candy celebration party\n🪩\tmirror ball disco dance party glitter\n🪆\tnesting dolls matryoshka toy doll russia russian\n♠️\tspade suit poker cards suits magic black card\n♥️\theart suit poker cards magic suits black card\n♦️\tdiamond suit poker cards magic suits black card\n♣️\tclub suit poker cards magic suits black card\n♟️\tchess pawn expendable black dupe game piece\n🃏\tjoker poker cards game play magic black\n🀄\tmahjong red dragon game play chinese kanji tile\n🎴\tflower playing cards game sunset red activity card deck\n🎭\tperforming arts acting theater drama activity art comedy\n🖼️\tframed picture photography art frame museum painting\n🎨\tartist palette design paint draw colors activity art\n🧵\tthread needle sewing spool string crafts\n🪡\tsewing needle stitches embroidery sutures tailoring\n🧶\tyarn ball crochet knit crafts\n🪢\tknot rope scout tangled tie twine twist"],["Objects","👓\tglasses fashion accessories eyesight nerdy dork geek\n🕶️\tsunglasses face cool accessories dark eye eyewear\n🥽\tgoggles eyes protection safety clothing eye swimming\n🥼\tlab coat doctor experiment scientist chemist clothing\n🦺\tsafety vest protection emergency\n👔\tnecktie shirt suitup formal fashion cloth business\n👕\tt-shirt fashion cloth casual shirt tee clothing\n👖\tjeans fashion shopping clothing denim pants trousers\n🧣\tscarf neck winter clothes clothing\n🧤\tgloves hands winter clothes clothing hand\n🧥\tcoat jacket clothing\n🧦\tsocks stockings clothes clothing pair stocking\n👗\tdress clothes fashion shopping clothing gown skirt\n👘\tkimono dress fashion women female japanese clothing\n🥻\tsari dress clothing saree shari\n🩱\tone-piece swimsuit fashion bathing clothing suit swim\n🩲\tbriefs clothing bathing brief suit swim swimsuit\n🩳\tshorts clothing bathing pants suit swim swimsuit\n👙\tbikini swimming female woman girl fashion beach\n👚\twoman’s clothes fashion shopping bags female blouse clothing pink\n🪭\tfolding hand fan flamenco hot sensu\n👛\tpurse fashion accessories money sales shopping clothing\n👜\thandbag fashion accessory accessories shopping bag clothing\n👝\tclutch bag bag accessories shopping clothing pouch small\n🛍️\tshopping bags mall buy purchase bag hotel\n🎒\tbackpack student education bag activity rucksack satchel\n🩴\tthong sandal footwear summer beach flip flops jandals\n👞\tman’s shoe fashion male brown clothing dress mans\n👟\trunning shoe shoes sports sneakers athletic clothing runner\n🥾\thiking boot backpacking camping hiking clothing\n🥿\tflat shoe ballet slip-on slipper clothing woman’s\n👠\thigh-heeled shoe fashion shoes female pumps stiletto clothing\n👡\twoman’s sandal shoes fashion flip flops clothing heeled sandals\n🩰\tballet shoes dance clothing pointe shoe\n👢\twoman’s boot shoes fashion boots clothing cowgirl heeled\n🪮\thair pick afro comb\n👑\tcrown king kod leader royalty lord clothing\n👒\twoman’s hat fashion accessories female lady spring bow\n🎩\ttop hat magic gentleman classy circus activity clothing\n🎓\tgraduation cap school college degree university graduation cap\n🧢\tbilled cap cap baseball clothing hat\n🪖\tmilitary helmet army protection soldier warrior\n⛑️\trescue worker’s helmet construction build aid cross face hat\n📿\tprayer beads dhikr religious clothing necklace religion rosary\n💄\tlipstick female girl fashion woman cosmetics gloss\n💍\tring wedding propose marriage valentines diamond fashion\n💎\tgem stone blue ruby diamond jewelry gemstone jewel\n🔇\tmuted speaker sound volume silence quiet cancellation mute\n🔈\tspeaker low volume sound volume silence broadcast soft\n🔉\tspeaker medium volume volume speaker broadcast low one reduce\n🔊\tspeaker high volume volume noise noisy speaker broadcast entertainment\n📢\tloudspeaker volume sound address announcement bullhorn communication\n📣\tmegaphone sound speaker volume bullhorn cheering communication\n📯\tpostal horn instrument music bugle communication entertainment french\n🔔\tbell sound notification christmas xmas chime liberty\n🔕\tbell with slash sound volume mute quiet silent cancellation\n🎼\tmusical score treble clef compose activity entertainment music\n🎵\tmusical note score tone sound activity beamed eighth\n🎶\tmusical notes music score activity entertainment multiple note\n🎙️\tstudio microphone sing recording artist talkshow mic music\n🎚️\tlevel slider scale music\n🎛️\tcontrol knobs dial music\n🎤\tmicrophone sound music pa sing talkshow activity\n🎧\theadphone music score gadgets activity earbud earphone\n📻\tradio communication music podcast program digital entertainment\n🎷\tsaxophone music instrument jazz blues activity entertainment\n🎺\ttrumpet music brass activity entertainment horn instrument\n🪗\taccordion music accordian box concertina squeeze\n🎸\tguitar music instrument acoustic guitar activity bass electric\n🎹\tmusical keyboard piano instrument compose activity entertainment music\n🎻\tviolin music instrument orchestra symphony activity entertainment\n🪕\tbanjo music instructment activity entertainment instrument stringed\n🥁\tdrum music instrument drumsticks snare\n🪘\tlong drum music beat conga djembe rhythm\n🪇\tmaracas music instrument percussion shaker\n🪈\tflute bamboo music instrument pied piper recorder\n📱\tmobile phone technology apple gadgets dial cell communication\n📲\tmobile phone with arrow iphone incoming call calling cell communication\n☎️\ttelephone technology communication dial black phone rotary\n📞\ttelephone receiver technology communication dial call handset phone\n📟\tpager bbcall oldschool 90s beeper bleeper communication\n📠\tfax machine communication technology facsimile\n🔋\tbattery power energy sustain aa phone\n🪫\tlow battery drained dead electronic energy no red\n🔌\telectric plug charger power ac adaptor cable electricity\n💻\tlaptop technology screen display monitor computer desktop\n🖥️\tdesktop computer technology computing screen imac\n🖨️\tprinter paper ink computer\n⌨️\tkeyboard technology computer type input text\n🖱️\tcomputer mouse click button three\n🖲️\ttrackball technology trackpad computer\n💽\tcomputer disk technology record data disk 90s entertainment\n💾\tfloppy disk oldschool technology save 90s 80s computer\n💿\toptical disk technology dvd disk disc 90s cd\n📀\tdvd cd disk disc computer entertainment optical\n🧮\tabacus calculation count counting frame math\n🎥\tmovie camera film record activity cinema entertainment hollywood\n🎞️\tfilm frames movie cinema entertainment strip\n📽️\tfilm projector video tape record movie cinema entertainment\n🎬\tclapper board movie film record activity clapboard director\n📺\ttelevision technology program oldschool show entertainment tv\n📷\tcamera gadgets photography digital entertainment photo video\n📸\tcamera with flash photography gadgets photo video snapshots\n📹\tvideo camera film record camcorder entertainment\n📼\tvideocassette record video oldschool 90s 80s entertainment\n🔍\tmagnifying glass tilted left search zoom find detective icon mag\n🔎\tmagnifying glass tilted right search zoom find detective icon mag\n🕯️\tcandle fire wax light\n💡\tlight bulb light electricity idea comic electric\n🔦\tflashlight dark camping sight night electric light\n🏮\tred paper lantern light paper halloween spooky asian bar\n🪔\tdiya lamp lighting oil\n📔\tnotebook with decorative cover classroom notes record paper study book\n📕\tclosed book read library knowledge textbook learn red\n📖\topen book book read library knowledge literature learn\n📗\tgreen book read library knowledge study textbook\n📘\tblue book read library knowledge learn study textbook\n📙\torange book read library knowledge textbook study\n📚\tbooks literature library study book pile stack\n📓\tnotebook stationery record notes paper study black\n📒\tledger notes paper binder book bound notebook\n📃\tpage with curl documents office paper curled curly page document\n📜\tscroll documents ancient history paper degree document\n📄\tpage facing up documents office paper information document printed\n📰\tnewspaper press headline communication news paper\n🗞️\trolled-up newspaper press headline delivery news paper roll\n📑\tbookmark tabs favorite save order tidy mark marker\n🔖\tbookmark favorite label save mark price tag\n🏷️\tlabel sale tag\n🪙\tcoin money currency gold metal silver treasure\n💰\tmoney bag dollar payment coins sale cream moneybag\n💴\tyen banknote money sales japanese dollar currency bank\n💵\tdollar banknote money sales bill currency american bank\n💶\teuro banknote money sales dollar currency bank banknotes\n💷\tpound banknote british sterling money sales bills uk\n💸\tmoney with wings dollar bills payment sale bank banknote\n💳\tcredit card money sales dollar bill payment shopping\n🧾\treceipt accounting expenses bookkeeping evidence proof\n💹\tchart increasing with yen green-square graph presentation stats bank currency\n✉️\tenvelope letter postal inbox communication email ✉ letter\n📧\te-mail communication inbox email letter symbol\n📨\tincoming envelope email inbox communication fast letter lines\n📩\tenvelope with arrow email communication above down downwards insert\n📤\toutbox tray inbox email box communication letter mail\n📥\tinbox tray email documents box communication letter mail\n📦\tpackage mail gift cardboard box moving communication\n📫\tclosed mailbox with raised flag email inbox communication mail postbox\n📪\tclosed mailbox with lowered flag email communication inbox mail postbox\n📬\topen mailbox with raised flag email inbox communication mail postbox\n📭\topen mailbox with lowered flag email inbox communication mail no postbox\n📮\tpostbox email letter envelope communication mail mailbox\n🗳️\tballot box with ballot election vote voting\n✏️\tpencil stationery write paper writing school study\n✒️\tblack nib pen stationery writing write fountain ✒ fountain\n🖋️\tfountain pen stationery writing write communication left lower\n🖊️\tpen stationery writing write ballpoint communication left\n🖌️\tpaintbrush drawing creativity art brush communication left\n🖍️\tcrayon drawing creativity communication left lower\n📝\tmemo write documents stationery pencil paper writing\n💼\tbriefcase business documents work law legal job\n📁\tfile folder documents business office closed directory manilla\n📂\topen file folder documents load\n🗂️\tcard index dividers organizing business stationery\n📅\tcalendar schedule date day emoji july world\n📆\ttear-off calendar schedule date planning day desk\n🗒️\tspiral notepad memo stationery note pad\n🗓️\tspiral calendar date schedule planning pad\n📇\tcard index business stationery rolodex system\n📈\tchart increasing graph presentation stats recovery business economics\n📉\tchart decreasing graph presentation stats recession business economics\n📊\tbar chart graph presentation stats metrics\n📋\tclipboard stationery documents\n📌\tpushpin stationery mark here location pin tack\n📍\tround pushpin stationery location map here dropped pin\n📎\tpaperclip documents stationery clippy\n🖇️\tlinked paperclips documents stationery communication link paperclip\n📏\tstraight ruler stationery calculate length math school drawing\n📐\ttriangular ruler stationery math architect sketch set triangle\n✂️\tscissors stationery cut black cutting tool\n🗃️\tcard file box business stationery database\n🗄️\tfile cabinet filing organizing\n🗑️\twastebasket bin trash rubbish garbage toss basket\n🔒\tlocked security password padlock closed lock private\n🔓\tunlocked privacy security lock open padlock unlock\n🔏\tlocked with pen security secret fountain ink lock lock with\n🔐\tlocked with key security privacy closed lock secure secret\n🔑\tkey lock door password gold\n🗝️\told key lock door password clue\n🔨\thammer tools build create claw handyman tool\n🪓\taxe tool chop cut hatchet split wood\n⛏️\tpick tools dig mining pickaxe tool\n⚒️\thammer and pick tools build create tool\n🛠️\thammer and wrench tools build create spanner tool\n🗡️\tdagger weapon knife\n⚔️\tcrossed swords weapon\n💣\tbomb boom explode explosion terrorism comic\n🪃\tboomerang weapon australia rebound repercussion\n🏹\tbow and arrow sports archer archery sagittarius tool zodiac\n🛡️\tshield protection security weapon\n🪚\tcarpentry saw cut chop carpenter hand lumber tool\n🔧\twrench tools diy ikea fix maintainer spanner\n🪛\tscrewdriver tools screw tool\n🔩\tnut and bolt handy tools fix screw tool\n⚙️\tgear cog cogwheel tool\n🗜️\tclamp tool compress compression table vice winzip\n⚖️\tbalance scale law fairness weight justice libra scales\n🦯\twhite cane accessibility blind white\n🔗\tlink rings url chain hyperlink linked symbol\n⛓️\tchains lock arrest chain\n🪝\thook tools catch crook curve ensnare fishing\n🧰\ttoolbox tools diy fix maintainer mechanic chest\n🧲\tmagnet attraction magnetic horseshoe\n🪜\tladder tools climb rung step tool\n⚗️\talembic distilling science experiment chemistry tool\n🧪\ttest tube chemistry experiment lab science chemist test\n🧫\tpetri dish bacteria biology culture lab biologist\n🧬\tdna biologist genetics life double evolution gene\n🔬\tmicroscope laboratory experiment zoomin science study investigate\n🔭\ttelescope stars space zoom science astronomy stargazing\n📡\tsatellite antenna communication future radio space dish signal\n💉\tsyringe health hospital drugs blood medicine needle\n🩸\tdrop of blood period hurt harm wound bleed doctor\n💊\tpill health medicine doctor pharmacy drug capsule\n🩹\tadhesive bandage heal aid band doctor medicine plaster\n🩼\tcrutch accessibility assist aid cane disability hurt\n🩺\tstethoscope health doctor heart medicine healthcheck\n🩻\tx-ray skeleton medicine bones doctor medical ray\n🚪\tdoor house entry exit doorway front\n🛗\televator lift accessibility hoist\n🪞\tmirror reflection reflector speculum\n🪟\twindow scenery air frame fresh glass opening\n🛏️\tbed sleep rest bedroom hotel\n🛋️\tcouch and lamp read chill hotel lounge settee sofa\n🪑\tchair sit furniture seat\n🚽\ttoilet restroom wc washroom bathroom potty loo\n🪠\tplunger toilet cup force plumber suction\n🚿\tshower clean water bathroom bath head\n🛁\tbathtub clean shower bathroom bath bubble\n🪤\tmouse trap cheese bait mousetrap rodent snare\n🪒\trazor cut sharp shave\n🧴\tlotion bottle moisturizer sunscreen shampoo\n🧷\tsafety pin diaper punk rock\n🧹\tbroom cleaning sweeping witch brush sweep\n🧺\tbasket laundry farming picnic\n🧻\troll of paper roll toilet towels\n🪣\tbucket water container cask pail vat\n🧼\tsoap bar bathing cleaning lather soapdish\n🫧\tbubbles soap fun carbonation sparkling burp clean\n🪥\ttoothbrush hygiene dental bathroom brush clean teeth\n🧽\tsponge absorbing cleaning porous\n🧯\tfire extinguisher quench extinguish\n🛒\tshopping cart trolley\n🚬\tcigarette kills tobacco joint smoke activity smoking\n⚰️\tcoffin vampire dead die death rip graveyard\n🪦\theadstone death rip grave cemetery graveyard halloween\n⚱️\tfuneral urn dead die death rip ashes vase\n🧿\tnazar amulet bead charm boncuğu evil eye talisman\n🪬\thamsa religion protection amulet fatima hand mary\n🗿\tmoai rock easter island carving face human moyai\n🪧\tplacard announcement demonstration lawn picket post protest\n🪪\tidentification card document credentials id license security"],["Symbols","🏧\tatm sign money sales cash blue-square payment bank\n🚮\tlitter in bin sign blue-square sign human info its litterbox\n🚰\tpotable water blue-square liquid restroom cleaning faucet drink\n♿\twheelchair symbol blue-square disabled accessibility access accessible bathroom\n🚹\tmen’s room toilet restroom wc blue-square gender male\n🚺\twomen’s room purple-square woman female toilet loo restroom\n🚻\trestroom blue-square toilet refresh wc gender bathroom\n🚼\tbaby symbol orange-square child change changing nursery station\n🚾\twater closet toilet restroom blue-square lavatory wc\n🛂\tpassport control custom blue-square border permissions authorization roles\n🛃\tcustoms passport border blue-square\n🛄\tbaggage claim blue-square airport transport\n🛅\tleft luggage blue-square travel baggage bag with key locked\n⚠️\twarning exclamation wip alert error problem issue\n🚸\tchildren crossing school warning danger sign driving yellow-diamond\n⛔\tno entry limit security privacy bad denied stop\n🚫\tprohibited forbid stop limit denied disallow circle\n🚳\tno bicycles no bikes bicycle bike cyclist prohibited circle\n🚭\tno smoking cigarette blue-square smell smoke forbidden not\n🚯\tno littering trash bin garbage circle do forbidden\n🚱\tnon-potable water drink faucet tap circle drinking forbidden\n🚷\tno pedestrians rules crossing walking circle forbidden not\n📵\tno mobile phones iphone mute circle cell communication forbidden\n🔞\tno one under eighteen 18 drink pub night minor circle\n☢️\tradioactive nuclear danger international radiation sign symbol\n☣️\tbiohazard danger sign\n⬆️\tup arrow blue-square continue top direction black cardinal\n↗️\tup-right arrow blue-square point direction diagonal northeast east\n➡️\tright arrow blue-square next black cardinal direction east\n↘️\tdown-right arrow blue-square direction diagonal southeast east intercardinal\n⬇️\tdown arrow blue-square direction bottom black cardinal downwards\n↙️\tdown-left arrow blue-square direction diagonal southwest intercardinal left arrow\n⬅️\tleft arrow blue-square previous back black cardinal direction\n↖️\tup-left arrow blue-square point direction diagonal northwest intercardinal\n↕️\tup-down arrow blue-square direction way vertical arrows intercardinal\n↔️\tleft-right arrow shape direction horizontal sideways arrows horizontal arrows\n↩️\tright arrow curving left back return blue-square undo enter curved\n↪️\tleft arrow curving right blue-square return rotate direction email forward\n⤴️\tright arrow curving up blue-square direction top heading pointing rightwards\n⤵️\tright arrow curving down blue-square direction bottom curved downwards heading\n🔃\tclockwise vertical arrows sync cycle round repeat arrow circle\n🔄\tcounterclockwise arrows button blue-square sync cycle anticlockwise arrow circle\n🔙\tback arrow arrow words return above leftwards\n🔚\tend arrow words arrow above leftwards\n🔛\ton! arrow arrow words above exclamation left mark\n🔜\tsoon arrow arrow words above rightwards\n🔝\ttop arrow words blue-square above up upwards\n🛐\tplace of worship religion church temple prayer building religious\n⚛️\tatom symbol science physics chemistry atheist\n🕉️\tom hinduism buddhism sikhism jainism aumkara hindu\n✡️\tstar of david judaism jew jewish magen religion\n☸️\twheel of dharma hinduism buddhism sikhism jainism buddhist helm\n☯️\tyin yang balance religion tao taoist\n✝️\tlatin cross christianity christian religion\n☦️\torthodox cross suppedaneum religion christian\n☪️\tstar and crescent islam muslim religion\n☮️\tpeace symbol hippie sign\n🕎\tmenorah hanukkah candles jewish branches candelabrum candlestick\n🔯\tdotted six-pointed star purple-square religion jewish hexagram dot fortune\n🪯\tkhanda sikhism religion\n♈\taries sign purple-square zodiac astrology ram\n♉\ttaurus purple-square sign zodiac astrology bull ox\n♊\tgemini sign zodiac purple-square astrology twins\n♋\tcancer sign zodiac purple-square astrology crab\n♌\tleo sign purple-square zodiac astrology lion\n♍\tvirgo sign zodiac purple-square astrology maiden virgin\n♎\tlibra sign purple-square zodiac astrology balance justice\n♏\tscorpio sign zodiac purple-square astrology scorpion scorpius\n♐\tsagittarius sign zodiac purple-square astrology archer\n♑\tcapricorn sign zodiac purple-square astrology goat\n♒\taquarius sign purple-square zodiac astrology bearer water\n♓\tpisces purple-square sign zodiac astrology fish\n⛎\tophiuchus sign purple-square constellation astrology bearer serpent\n🔀\tshuffle tracks button blue-square shuffle music random arrow arrows\n🔁\trepeat button loop record arrow arrows circle clockwise\n🔂\trepeat single button blue-square loop arrow arrows circle circled\n▶️\tplay button blue-square right direction play arrow black\n⏩\tfast-forward button blue-square play speed continue arrow black\n⏭️\tnext track button forward next blue-square arrow bar black\n⏯️\tplay or pause button blue-square play pause arrow bar black\n◀️\treverse button blue-square left direction arrow backward black\n⏪\tfast reverse button play blue-square arrow black double left\n⏮️\tlast track button backward arrow bar black double left\n🔼\tupwards button blue-square triangle direction point forward top\n⏫\tfast up button blue-square direction top arrow black double\n🔽\tdownwards button blue-square direction bottom arrow down pointing\n⏬\tfast down button blue-square direction bottom arrow black double\n⏸️\tpause button pause blue-square bar double symbol vertical\n⏹️\tstop button blue-square black for square symbol\n⏺️\trecord button blue-square black circle for symbol\n⏏️\teject button blue-square symbol\n🎦\tcinema blue-square record film movie curtain stage\n🔅\tdim button sun afternoon warm summer brightness decrease\n🔆\tbright button sun light brightness high increase symbol\n📶\tantenna bars blue-square reception phone internet connection wifi\n🛜\twireless wifi internet contactless signal\n📳\tvibration mode orange-square phone cell communication heart mobile\n📴\tmobile phone off mute orange-square silence quiet cell communication\n♀️\tfemale sign woman women lady girl symbol venus\n♂️\tmale sign man boy men mars symbol\n⚧️\ttransgender symbol transgender lgbtq female lgbt male pride\n✖️\tmultiply math calculation cancel heavy symbol\n➕\tplus math calculation addition more increase heavy\n➖\tminus math calculation subtract less heavy symbol\n➗\tdivide math calculation heavy symbol\n🟰\theavy equals sign math equality\n♾️\tinfinity forever paper permanent sign unbounded universal\n‼️\tdouble exclamation mark exclamation surprise bangbang punctuation red\n⁉️\texclamation question mark wat punctuation surprise interrobang red\n❓\tred question mark doubt confused black ornament punctuation red\n❔\twhite question mark doubts gray huh confused grey ornament\n❕\twhite exclamation mark surprise punctuation gray wow warning grey\n❗\tred exclamation mark heavy exclamation mark danger surprise punctuation wow warning\n〰️\twavy dash draw line moustache mustache squiggle scribble\n💱\tcurrency exchange money sales dollar travel bank\n💲\theavy dollar sign money sales payment currency buck\n⚕️\tmedical symbol health hospital aesculapius asclepius asklepios care\n♻️\trecycling symbol arrow environment garbage trash black green\n⚜️\tfleur-de-lis decorative scout new orleans saints scouts\n🔱\ttrident emblem weapon spear anchor pitchfork ship tool\n📛\tname badge fire forbid tag tofu\n🔰\tjapanese symbol for beginner badge shield chevron green leaf mark\n⭕\thollow red circle circle round correct heavy large mark\n✅\tcheck mark button green-square ok agree vote election answer\n☑️\tcheck box with check ok agree confirm black-square vote election\n✔️\tcheck mark ok nike answer yes tick heavy\n❌\tcross mark no delete remove cancel red multiplication\n❎\tcross mark button x green-square no deny negative square\n➰\tcurly loop scribble draw shape squiggle curl curling\n➿\tdouble curly loop tape cassette curl curling voicemail\n〽️\tpart alternation mark graph presentation stats business economics bad\n✳️\teight-spoked asterisk star sparkle green-square\n✴️\teight-pointed star orange-square shape polygon black orange\n❇️\tsparkle stars green-square awesome good fireworks\n©️\tcopyright ip license circle law legal c\n®️\tregistered alphabet circle r sign\n™️\ttrade mark trademark brand law legal sign tm\n#️⃣\tkeycap # symbol blue-square twitter hash hashtag key\n*️⃣\tkeycap * star keycap asterisk\n0️⃣\tkeycap 0 0 numbers blue-square null zero digit\n1️⃣\tkeycap 1 blue-square numbers 1 one digit\n2️⃣\tkeycap 2 numbers 2 prime blue-square two digit\n3️⃣\tkeycap 3 3 numbers prime blue-square three digit\n4️⃣\tkeycap 4 4 numbers blue-square four digit\n5️⃣\tkeycap 5 5 numbers blue-square prime five digit\n6️⃣\tkeycap 6 6 numbers blue-square six digit\n7️⃣\tkeycap 7 7 numbers blue-square prime seven digit\n8️⃣\tkeycap 8 8 blue-square numbers eight digit\n9️⃣\tkeycap 9 blue-square numbers 9 nine digit\n🔟\tkeycap 10 numbers 10 blue-square ten number\n🔠\tinput latin uppercase alphabet words letters uppercase blue-square abcd\n🔡\tinput latin lowercase blue-square letters lowercase alphabet abcd for\n🔢\tinput numbers numbers blue-square 1234 1 2 3\n🔣\tinput symbols blue-square music note ampersand percent glyphs\n🔤\tinput latin letters blue-square alphabet abc for symbol\n🅰️\ta button (blood type) red-square alphabet letter blood capital latin\n🆎\tab button (blood type) red-square alphabet blood negative squared type\n🅱️\tb button (blood type) red-square alphabet letter blood capital latin\n🆑\tcl button alphabet words red-square clear sign squared\n🆒\tcool button words blue-square sign square squared\n🆓\tfree button blue-square words sign squared\nℹ️\tinformation blue-square alphabet letter i info lowercase\n🆔\tid button purple-square words identification identity sign squared\nⓂ️\tcircled m alphabet blue-circle letter capital circle latin\n🆕\tnew button blue-square words start fresh sign squared\n🆖\tng button blue-square words shape icon blooper good\n🅾️\to button (blood type) alphabet red-square letter blood capital latin\n🆗\tok button good agree yes blue-square okay sign\n🅿️\tp button cars blue-square alphabet letter capital latin\n🆘\tsos button help red-square words emergency 911 distress\n🆙\tup! button blue-square above high exclamation level mark\n🆚\tvs button words orange-square squared versus\n🈁\tjapanese “here” button blue-square here katakana japanese destination koko\n🈂️\tjapanese “service charge” button japanese blue-square katakana charge” meaning or\n🈷️\tjapanese “monthly amount” button chinese month moon japanese orange-square kanji\n🈶\tjapanese “not free of charge” button orange-square chinese have kanji charge” cjk\n🈯\tjapanese “reserved” button chinese point green-square kanji cjk finger\n🉐\tjapanese “bargain” button chinese kanji obtain get circle acquire\n🈹\tjapanese “discount” button cut divide chinese kanji pink-square bargain\n🈚\tjapanese “free of charge” button nothing chinese kanji japanese orange-square charge”\n🈲\tjapanese “prohibited” button kanji japanese chinese forbidden limit restricted\n🉑\tjapanese “acceptable” button ok good chinese kanji agree yes\n🈸\tjapanese “application” button chinese japanese kanji orange-square apply cjk\n🈴\tjapanese “passing grade” button japanese chinese join kanji red-square agreement\n🈳\tjapanese “vacancy” button kanji japanese chinese empty sky blue-square\n㊗️\tjapanese “congratulations” button chinese kanji japanese red-circle circled congratulate\n㊙️\tjapanese “secret” button privacy chinese sshh kanji red-circle circled\n🈺\tjapanese “open for business” button japanese opening hours orange-square 55b6 business” chinese\n🈵\tjapanese “no vacancy” button full chinese japanese red-square kanji 6e80\n🔴\tred circle shape error danger geometric large\n🟠\torange circle round geometric large\n🟡\tyellow circle round geometric large\n🟢\tgreen circle round geometric large\n🔵\tblue circle shape icon button geometric large\n🟣\tpurple circle round geometric large\n🟤\tbrown circle round geometric large\n⚫\tblack circle shape button round geometric medium\n⚪\twhite circle shape round geometric medium\n🟥\tred square card geometric large\n🟧\torange square geometric large\n🟨\tyellow square card geometric large\n🟩\tgreen square geometric large\n🟦\tblue square geometric large\n🟪\tpurple square geometric large\n🟫\tbrown square geometric large\n⬛\tblack large square shape icon button geometric\n⬜\twhite large square shape icon stone button geometric\n◼️\tblack medium square shape button icon geometric\n◻️\twhite medium square shape stone icon geometric\n◾\tblack medium-small square icon shape button geometric\n◽\twhite medium-small square shape stone icon button geometric\n▪️\tblack small square shape icon geometric\n▫️\twhite small square shape icon geometric\n🔶\tlarge orange diamond shape jewel gem geometric\n🔷\tlarge blue diamond shape jewel gem geometric\n🔸\tsmall orange diamond shape jewel gem geometric\n🔹\tsmall blue diamond shape jewel gem geometric\n🔺\tred triangle pointed up shape direction up top geometric pointing\n🔻\tred triangle pointed down shape direction bottom geometric pointing small\n💠\tdiamond with a dot jewel blue gem crystal fancy comic\n🔘\tradio button input old music circle geometric\n🔳\twhite square button shape input geometric outlined\n🔲\tblack square button shape input frame geometric"],["Flags","🏁\tchequered flag contest finishline race gokart checkered finish\n🚩\ttriangular flag mark milestone place pole post red\n🎌\tcrossed flags japanese nation country border activity celebration\n🏴\tblack flag pirate waving\n🏳️\twhite flag losing loser lost surrender give up fail\n🏳️‍🌈\trainbow flag flag rainbow pride gay lgbt queer\n🏳️‍⚧️\ttransgender flag transgender flag pride lgbtq blue lgbt\n🏴‍☠️\tpirate flag skull crossbones flag banner jolly plunder\n🇦🇨\tflag ascension island\n🇦🇩\tflag andorra ad flag nation country banner andorra\n🇦🇪\tflag united arab emirates united arab emirates flag nation country\n🇦🇫\tflag afghanistan af flag nation country banner afghanistan\n🇦🇬\tflag antigua & barbuda antigua barbuda flag nation country banner\n🇦🇮\tflag anguilla ai flag nation country banner anguilla\n🇦🇱\tflag albania al flag nation country banner albania\n🇦🇲\tflag armenia am flag nation country banner armenia\n🇦🇴\tflag angola ao flag nation country banner angola\n🇦🇶\tflag antarctica aq flag nation country banner antarctica\n🇦🇷\tflag argentina ar flag nation country banner argentina\n🇦🇸\tflag american samoa american ws flag nation country banner\n🇦🇹\tflag austria at flag nation country banner austria\n🇦🇺\tflag australia au flag nation country banner australia\n🇦🇼\tflag aruba aw flag nation country banner aruba\n🇦🇽\tflag åland islands åland islands flag nation country banner\n🇦🇿\tflag azerbaijan az flag nation country banner azerbaijan\n🇧🇦\tflag bosnia & herzegovina bosnia herzegovina flag nation country banner\n🇧🇧\tflag barbados bb flag nation country banner barbados\n🇧🇩\tflag bangladesh bd flag nation country banner bangladesh\n🇧🇪\tflag belgium be flag nation country banner belgium\n🇧🇫\tflag burkina faso burkina faso flag nation country banner\n🇧🇬\tflag bulgaria bg flag nation country banner bulgaria\n🇧🇭\tflag bahrain bh flag nation country banner bahrain\n🇧🇮\tflag burundi bi flag nation country banner burundi\n🇧🇯\tflag benin bj flag nation country banner benin\n🇧🇱\tflag st. barthélemy saint barthélemy flag nation country banner\n🇧🇲\tflag bermuda bm flag nation country banner bermuda\n🇧🇳\tflag brunei bn darussalam flag nation country banner\n🇧🇴\tflag bolivia bo flag nation country banner bolivia\n🇧🇶\tflag caribbean netherlands bonaire flag nation country banner caribbean netherlands\n🇧🇷\tflag brazil br flag nation country banner brazil\n🇧🇸\tflag bahamas bs flag nation country banner bahamas\n🇧🇹\tflag bhutan bt flag nation country banner bhutan\n🇧🇻\tflag bouvet island norway\n🇧🇼\tflag botswana bw flag nation country banner botswana\n🇧🇾\tflag belarus by flag nation country banner belarus\n🇧🇿\tflag belize bz flag nation country banner belize\n🇨🇦\tflag canada ca flag nation country banner canada\n🇨🇨\tflag cocos (keeling) islands cocos keeling islands flag nation country\n🇨🇩\tflag congo - kinshasa congo democratic republic flag nation country\n🇨🇫\tflag central african republic central african republic flag nation country\n🇨🇬\tflag congo - brazzaville congo flag nation country banner congo brazzaville\n🇨🇭\tflag switzerland ch flag nation country banner switzerland\n🇨🇮\tflag côte d’ivoire ivory coast flag nation country banner\n🇨🇰\tflag cook islands cook islands flag nation country banner\n🇨🇱\tflag chile flag nation country banner chile chilean\n🇨🇲\tflag cameroon cm flag nation country banner cameroon\n🇨🇳\tflag china china chinese prc flag country nation\n🇨🇴\tflag colombia co flag nation country banner colombia\n🇨🇵\tflag clipperton island\n🇨🇷\tflag costa rica costa rica flag nation country banner\n🇨🇺\tflag cuba cu flag nation country banner cuba\n🇨🇻\tflag cape verde cabo verde flag nation country banner\n🇨🇼\tflag curaçao curaçao flag nation country banner curacao\n🇨🇽\tflag christmas island christmas island flag nation country banner\n🇨🇾\tflag cyprus cy flag nation country banner cyprus\n🇨🇿\tflag czechia cz flag nation country banner czechia\n🇩🇪\tflag germany german nation flag country banner germany\n🇩🇬\tflag diego garcia\n🇩🇯\tflag djibouti dj flag nation country banner djibouti\n🇩🇰\tflag denmark dk flag nation country banner denmark\n🇩🇲\tflag dominica dm flag nation country banner dominica\n🇩🇴\tflag dominican republic dominican republic flag nation country banner\n🇩🇿\tflag algeria dz flag nation country banner algeria\n🇪🇦\tflag ceuta & melilla\n🇪🇨\tflag ecuador ec flag nation country banner ecuador\n🇪🇪\tflag estonia ee flag nation country banner estonia\n🇪🇬\tflag egypt eg flag nation country banner egypt\n🇪🇭\tflag western sahara western sahara flag nation country banner\n🇪🇷\tflag eritrea er flag nation country banner eritrea\n🇪🇸\tflag spain spain flag nation country banner ceuta\n🇪🇹\tflag ethiopia et flag nation country banner ethiopia\n🇪🇺\tflag european union european union flag banner eu\n🇫🇮\tflag finland fi flag nation country banner finland\n🇫🇯\tflag fiji fj flag nation country banner fiji\n🇫🇰\tflag falkland islands falkland islands malvinas flag nation country\n🇫🇲\tflag micronesia micronesia federated states flag nation country\n🇫🇴\tflag faroe islands faroe islands flag nation country banner\n🇫🇷\tflag france banner flag nation france french country\n🇬🇦\tflag gabon ga flag nation country banner gabon\n🇬🇧\tflag united kingdom united kingdom great britain northern ireland\n🇬🇩\tflag grenada gd flag nation country banner grenada\n🇬🇪\tflag georgia ge flag nation country banner georgia\n🇬🇫\tflag french guiana french guiana flag nation country banner\n🇬🇬\tflag guernsey gg flag nation country banner guernsey\n🇬🇭\tflag ghana gh flag nation country banner ghana\n🇬🇮\tflag gibraltar gi flag nation country banner gibraltar\n🇬🇱\tflag greenland gl flag nation country banner greenland\n🇬🇲\tflag gambia gm flag nation country banner gambia\n🇬🇳\tflag guinea gn flag nation country banner guinea\n🇬🇵\tflag guadeloupe gp flag nation country banner guadeloupe\n🇬🇶\tflag equatorial guinea equatorial gn flag nation country banner\n🇬🇷\tflag greece gr flag nation country banner greece\n🇬🇸\tflag south georgia & south sandwich islands south georgia sandwich islands flag nation\n🇬🇹\tflag guatemala gt flag nation country banner guatemala\n🇬🇺\tflag guam gu flag nation country banner guam\n🇬🇼\tflag guinea-bissau gw bissau flag nation country banner\n🇬🇾\tflag guyana gy flag nation country banner guyana\n🇭🇰\tflag hong kong sar china hong kong flag nation country banner\n🇭🇲\tflag heard & mcdonald islands\n🇭🇳\tflag honduras hn flag nation country banner honduras\n🇭🇷\tflag croatia hr flag nation country banner croatia\n🇭🇹\tflag haiti ht flag nation country banner haiti\n🇭🇺\tflag hungary hu flag nation country banner hungary\n🇮🇨\tflag canary islands canary islands flag nation country banner\n🇮🇩\tflag indonesia flag nation country banner indonesia indonesian\n🇮🇪\tflag ireland ie flag nation country banner ireland\n🇮🇱\tflag israel il flag nation country banner israel\n🇮🇲\tflag isle of man isle man flag nation country banner\n🇮🇳\tflag india in flag nation country banner india\n🇮🇴\tflag british indian ocean territory british indian ocean territory flag nation\n🇮🇶\tflag iraq iq flag nation country banner iraq\n🇮🇷\tflag iran iran islamic republic flag nation country\n🇮🇸\tflag iceland is flag nation country banner iceland\n🇮🇹\tflag italy italy flag nation country banner indicator\n🇯🇪\tflag jersey je flag nation country banner jersey\n🇯🇲\tflag jamaica jm flag nation country banner jamaica\n🇯🇴\tflag jordan jo flag nation country banner jordan\n🇯🇵\tflag japan japanese nation flag country banner japan\n🇰🇪\tflag kenya ke flag nation country banner kenya\n🇰🇬\tflag kyrgyzstan kg flag nation country banner kyrgyzstan\n🇰🇭\tflag cambodia kh flag nation country banner cambodia\n🇰🇮\tflag kiribati ki flag nation country banner kiribati\n🇰🇲\tflag comoros km flag nation country banner comoros\n🇰🇳\tflag st. kitts & nevis saint kitts nevis flag nation country\n🇰🇵\tflag north korea north korea nation flag country banner\n🇰🇷\tflag south korea south korea nation flag country banner\n🇰🇼\tflag kuwait kw flag nation country banner kuwait\n🇰🇾\tflag cayman islands cayman islands flag nation country banner\n🇰🇿\tflag kazakhstan kz flag nation country banner kazakhstan\n🇱🇦\tflag laos lao democratic republic flag nation country\n🇱🇧\tflag lebanon lb flag nation country banner lebanon\n🇱🇨\tflag st. lucia saint lucia flag nation country banner\n🇱🇮\tflag liechtenstein li flag nation country banner liechtenstein\n🇱🇰\tflag sri lanka sri lanka flag nation country banner\n🇱🇷\tflag liberia lr flag nation country banner liberia\n🇱🇸\tflag lesotho ls flag nation country banner lesotho\n🇱🇹\tflag lithuania lt flag nation country banner lithuania\n🇱🇺\tflag luxembourg lu flag nation country banner luxembourg\n🇱🇻\tflag latvia lv flag nation country banner latvia\n🇱🇾\tflag libya ly flag nation country banner libya\n🇲🇦\tflag morocco ma flag nation country banner morocco\n🇲🇨\tflag monaco mc flag nation country banner monaco\n🇲🇩\tflag moldova moldova republic flag nation country banner\n🇲🇪\tflag montenegro me flag nation country banner montenegro\n🇲🇫\tflag st. martin st.\n🇲🇬\tflag madagascar mg flag nation country banner madagascar\n🇲🇭\tflag marshall islands marshall islands flag nation country banner\n🇲🇰\tflag north macedonia macedonia flag nation country banner north macedonia\n🇲🇱\tflag mali ml flag nation country banner mali\n🇲🇲\tflag myanmar (burma) mm flag nation country banner myanmar\n🇲🇳\tflag mongolia mn flag nation country banner mongolia\n🇲🇴\tflag macao sar china macao flag nation country banner macao sar china\n🇲🇵\tflag northern mariana islands northern mariana islands flag nation country\n🇲🇶\tflag martinique mq flag nation country banner martinique\n🇲🇷\tflag mauritania mr flag nation country banner mauritania\n🇲🇸\tflag montserrat ms flag nation country banner montserrat\n🇲🇹\tflag malta mt flag nation country banner malta\n🇲🇺\tflag mauritius mu flag nation country banner mauritius\n🇲🇻\tflag maldives mv flag nation country banner maldives\n🇲🇼\tflag malawi mw flag nation country banner malawi\n🇲🇽\tflag mexico mx flag nation country banner mexico\n🇲🇾\tflag malaysia my flag nation country banner malaysia\n🇲🇿\tflag mozambique mz flag nation country banner mozambique\n🇳🇦\tflag namibia na flag nation country banner namibia\n🇳🇨\tflag new caledonia new caledonia flag nation country banner\n🇳🇪\tflag niger ne flag nation country banner niger\n🇳🇫\tflag norfolk island norfolk island flag nation country banner\n🇳🇬\tflag nigeria flag nation country banner nigeria nigerian\n🇳🇮\tflag nicaragua ni flag nation country banner nicaragua\n🇳🇱\tflag netherlands nl flag nation country banner netherlands\n🇳🇴\tflag norway no flag nation country banner norway\n🇳🇵\tflag nepal np flag nation country banner nepal\n🇳🇷\tflag nauru nr flag nation country banner nauru\n🇳🇺\tflag niue nu flag nation country banner niue\n🇳🇿\tflag new zealand new zealand flag nation country banner\n🇴🇲\tflag oman om symbol flag nation country banner oman\n🇵🇦\tflag panama pa flag nation country banner panama\n🇵🇪\tflag peru pe flag nation country banner peru\n🇵🇫\tflag french polynesia french polynesia flag nation country banner\n🇵🇬\tflag papua new guinea papua new guinea flag nation country\n🇵🇭\tflag philippines ph flag nation country banner philippines\n🇵🇰\tflag pakistan pk flag nation country banner pakistan\n🇵🇱\tflag poland pl flag nation country banner poland\n🇵🇲\tflag st. pierre & miquelon saint pierre miquelon flag nation country\n🇵🇳\tflag pitcairn islands pitcairn flag nation country banner pitcairn islands\n🇵🇷\tflag puerto rico puerto rico flag nation country banner\n🇵🇸\tflag palestinian territories palestine palestinian territories flag nation country\n🇵🇹\tflag portugal pt flag nation country banner portugal\n🇵🇼\tflag palau pw flag nation country banner palau\n🇵🇾\tflag paraguay py flag nation country banner paraguay\n🇶🇦\tflag qatar qa flag nation country banner qatar\n🇷🇪\tflag réunion réunion flag nation country banner reunion\n🇷🇴\tflag romania ro flag nation country banner romania\n🇷🇸\tflag serbia rs flag nation country banner serbia\n🇷🇺\tflag russia russian federation flag nation country banner\n🇷🇼\tflag rwanda rw flag nation country banner rwanda\n🇸🇦\tflag saudi arabia flag nation country banner saudi arabia arabian flag\n🇸🇧\tflag solomon islands solomon islands flag nation country banner\n🇸🇨\tflag seychelles sc flag nation country banner seychelles\n🇸🇩\tflag sudan sd flag nation country banner sudan\n🇸🇪\tflag sweden se flag nation country banner sweden\n🇸🇬\tflag singapore sg flag nation country banner singapore\n🇸🇭\tflag st. helena saint helena ascension tristan cunha flag\n🇸🇮\tflag slovenia si flag nation country banner slovenia\n🇸🇯\tflag svalbard & jan mayen\n🇸🇰\tflag slovakia sk flag nation country banner slovakia\n🇸🇱\tflag sierra leone sierra leone flag nation country banner\n🇸🇲\tflag san marino san marino flag nation country banner\n🇸🇳\tflag senegal sn flag nation country banner senegal\n🇸🇴\tflag somalia so flag nation country banner somalia\n🇸🇷\tflag suriname sr flag nation country banner suriname\n🇸🇸\tflag south sudan south sd flag nation country banner\n🇸🇹\tflag são tomé & príncipe sao tome principe flag nation country\n🇸🇻\tflag el salvador el salvador flag nation country banner\n🇸🇽\tflag sint maarten sint maarten dutch flag nation country\n🇸🇾\tflag syria syrian arab republic flag nation country\n🇸🇿\tflag eswatini sz flag nation country banner eswatini\n🇹🇦\tflag tristan da cunha\n🇹🇨\tflag turks & caicos islands turks caicos islands flag nation country\n🇹🇩\tflag chad td flag nation country banner chad\n🇹🇫\tflag french southern territories french southern territories flag nation country\n🇹🇬\tflag togo tg flag nation country banner togo\n🇹🇭\tflag thailand th flag nation country banner thailand\n🇹🇯\tflag tajikistan tj flag nation country banner tajikistan\n🇹🇰\tflag tokelau tk flag nation country banner tokelau\n🇹🇱\tflag timor-leste timor leste flag nation country banner\n🇹🇲\tflag turkmenistan flag nation country banner turkmenistan turkmen\n🇹🇳\tflag tunisia tn flag nation country banner tunisia\n🇹🇴\tflag tonga to flag nation country banner tonga\n🇹🇷\tflag türkiye turkey flag nation country banner tr\n🇹🇹\tflag trinidad & tobago trinidad tobago flag nation country banner\n🇹🇻\tflag tuvalu flag nation country banner tuvalu tuvaluan\n🇹🇼\tflag taiwan tw flag nation country banner taiwan\n🇹🇿\tflag tanzania tanzania united republic flag nation country\n🇺🇦\tflag ukraine ua flag nation country banner ukraine\n🇺🇬\tflag uganda ug flag nation country banner uganda\n🇺🇲\tflag u.s. outlying islands u.s. us\n🇺🇳\tflag united nations un flag banner\n🇺🇸\tflag united states united states america flag nation country\n🇺🇾\tflag uruguay uy flag nation country banner uruguay\n🇺🇿\tflag uzbekistan uz flag nation country banner uzbekistan\n🇻🇦\tflag vatican city vatican city flag nation country banner\n🇻🇨\tflag st. vincent & grenadines saint vincent grenadines flag nation country\n🇻🇪\tflag venezuela ve bolivarian republic flag nation country\n🇻🇬\tflag british virgin islands british virgin islands bvi flag nation\n🇻🇮\tflag u.s. virgin islands virgin islands us flag nation country\n🇻🇳\tflag vietnam viet nam flag nation country banner\n🇻🇺\tflag vanuatu vu flag nation country banner vanuatu\n🇼🇫\tflag wallis & futuna wallis futuna flag nation country banner\n🇼🇸\tflag samoa ws flag nation country banner samoa\n🇽🇰\tflag kosovo xk flag nation country banner kosovo\n🇾🇪\tflag yemen ye flag nation country banner yemen\n🇾🇹\tflag mayotte yt flag nation country banner mayotte\n🇿🇦\tflag south africa south africa flag nation country banner\n🇿🇲\tflag zambia zm flag nation country banner zambia\n🇿🇼\tflag zimbabwe zw flag nation country banner zimbabwe\n🏴󠁧󠁢󠁥󠁮󠁧󠁿\tflag england flag english cross george's st\n🏴󠁧󠁢󠁳󠁣󠁴󠁿\tflag scotland flag scottish andrew's cross saltire st\n🏴󠁧󠁢󠁷󠁬󠁳󠁿\tflag wales flag welsh baner cymru ddraig dragon"]],lh="meshcore-recent-emoji";let ch=null;function dh(){return null!=ch||(ch=sh.map(([e,t])=>({name:e,items:t.split("\n").map(e=>{const[t,a]=e.split("\t");return{emoji:t,words:a}})}))),ch}function ph(){try{return JSON.parse(localStorage.getItem(lh)||"[]")}catch(e){return[]}}let hh=class extends xd{constructor(){super(...arguments),this._cat=-1,this._q=""}firstUpdated(){var e;null===(e=this.renderRoot.querySelector("input"))||void 0===e||e.focus()}_pick(e){!function(e){try{localStorage.setItem(lh,JSON.stringify([e,...ph().filter(t=>t!==e)].slice(0,24)))}catch(e){}}(e),this.dispatchEvent(new CustomEvent("emoji-picked",{detail:{emoji:e},bubbles:!0,composed:!0}))}render(){const e=dh(),t=this._q.trim().length>0,a=t?function(e){const t=e.toLowerCase().trim().split(/\s+/).filter(Boolean);if(0===t.length)return[];const a=[];for(const e of dh())for(const i of e.items){if(!t.every(e=>i.words.includes(e)))continue;const e=i.words.startsWith(t[0])?0:i.words.includes(` ${t[0]}`)?1:2;a.push([e,i.emoji])}return a.sort((e,t)=>e[0]-t[0]).map(([,e])=>e).slice(0,120)}(this._q):this._cat<0?[...new Set([...ph(),...vp])]:e[this._cat].items.map(e=>e.emoji),i=t?"Results":this._cat<0?"Recent":e[this._cat].name;return ad(Re||(Re=pc`
      <input type="search" placeholder="Search emoji" aria-label="Search emoji" .value=${0}
        @input=${0}
        @keydown=${0}>
      ${0}
      <div class="grid">
        <div class="label">${0}</div>
        ${0}
        ${0}
      </div>
    `),this._q,e=>{this._q=e.target.value},e=>{"Enter"===e.key&&a[0]&&(e.preventDefault(),this._pick(a[0]))},t?"":ad(Te||(Te=pc`<div class="tabs">
        <button class=${0} title="Recent" @click=${0}>🕘</button>
        ${0}
      </div>`),-1===this._cat?"on":"",()=>{this._cat=-1},e.map((e,t)=>ad(qe||(qe=pc`<button class=${0} title=${0} @click=${0}>${0}</button>`),this._cat===t?"on":"",e.name,()=>{this._cat=t},e.items[0].emoji))),i,0===a.length?ad(Be||(Be=pc`<div class="none">No emoji found.</div>`)):"",a.map(e=>ad(Ne||(Ne=pc`<button @click=${0}>${0}</button>`),()=>this._pick(e),e)))}};hh.styles=bc(je||(je=pc`
    :host { display: block; width: 330px; max-width: 100%; box-sizing: border-box; }
    input { width: 100%; box-sizing: border-box; padding: 7px 10px; margin-bottom: 6px; border-radius: 8px;
      border: 1px solid var(--divider-color, #444); background: transparent; color: var(--primary-text-color); font: inherit; outline: none; -webkit-appearance: none; appearance: none; }
    input:focus { border-color: var(--primary-color, #03a9f4); }
    .tabs { display: flex; gap: 2px; overflow-x: auto; overscroll-behavior: contain; touch-action: pan-x; border-bottom: 1px solid var(--divider-color, #444); padding-bottom: 4px; }
    .tabs button { flex-shrink: 0; background: none; border: none; padding: 4px 6px; font-size: 18px; cursor: pointer; border-radius: 6px; opacity: 0.6; }
    .tabs button.on { opacity: 1; background: rgba(127,127,127,0.2); }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(38px, 1fr)); height: 220px; overflow-y: auto; overscroll-behavior: contain; -webkit-overflow-scrolling: touch; touch-action: pan-y; padding-top: 6px; align-content: start; }
    .grid button { background: none; border: none; font-size: 22px; padding: 4px 0; cursor: pointer; border-radius: 6px; }
    @media (hover: hover) { .grid button:hover { background: rgba(127,127,127,0.2); } }
    .label { font-size: 11px; opacity: 0.7; margin: 6px 2px 0; grid-column: 1 / -1; }
    .none { grid-column: 1 / -1; font-size: 13px; opacity: 0.7; padding: 12px 4px; }
  `)),hc([Ad()],hh.prototype,"_cat",void 0),hc([Ad()],hh.prototype,"_q",void 0),hh=hc([kd("meshcore-emoji-picker")],hh);const uh=new Set(["zone","geo_location"]);function mh(e){const t=Math.max(0,(Date.now()-e)/1e3);return t<60?"just now":t<3600?`${Math.round(t/60)} min ago`:t<86400?`${Math.round(t/3600)} h ago`:`${Math.round(t/86400)} days ago`}const gh=bc(Pe||(Pe=pc`
  .backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 1000; display: flex; align-items: center; justify-content: center; }
  .dialog { background: var(--card-background-color, #1c1c1c); color: var(--primary-text-color); border-radius: 12px;
    width: 460px; max-width: calc(100vw - 24px); max-height: calc(100vh - 48px); display: flex; flex-direction: column; overflow: hidden; }
  header { display: flex; align-items: center; padding: 12px 16px; font-weight: 600; font-size: 16px; }
  header .x { margin-left: auto; background: none; border: none; color: inherit; font-size: 18px; cursor: pointer; }
  .tabs { display: flex; gap: 6px; padding: 0 16px 8px; }
  .tabs button { flex: 1; padding: 6px; border-radius: 8px; border: 1px solid var(--divider-color, #444); background: none; color: inherit; cursor: pointer; }
  .tabs button.on { background: var(--primary-color, #03a9f4); border-color: transparent; color: #fff; }
  input.search { margin: 0 16px 8px; padding: 8px 10px; border-radius: 8px; border: 1px solid var(--divider-color, #444);
    background: transparent; color: inherit; font: inherit; }
  .list { overflow-y: auto; padding: 0 8px 8px; min-height: 120px; }
  .row { display: flex; flex-direction: column; width: 100%; text-align: left; padding: 8px; border-radius: 8px; background: none; border: none; color: inherit; cursor: pointer; font: inherit; }
  .row:hover { background: rgba(127,127,127,0.15); }
  .row .meta { font-size: 12px; opacity: 0.7; }
  .row .meta.stale { color: var(--warning-color, #ffa600); opacity: 1; }
  .section { font-size: 12px; font-weight: 600; opacity: 0.7; padding: 8px 8px 4px; text-transform: uppercase; letter-spacing: 0.04em; }
  .section.toggle { background: none; border: none; color: inherit; cursor: pointer; text-align: left; width: 100%; font-family: inherit; }
  .empty { padding: 16px; opacity: 0.7; font-size: 14px; }
  .mapwrap { position: relative; height: 320px; margin: 0 16px; border-radius: 8px; overflow: hidden; }
  .mapwrap ha-map { height: 100%; display: block; }
  .pin { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -100%); font-size: 30px; pointer-events: none; z-index: 500; }
  footer { display: flex; justify-content: flex-end; gap: 8px; padding: 12px 16px; }
  footer button { padding: 8px 14px; border-radius: 8px; border: none; cursor: pointer; font: inherit; }
  .primary { background: var(--primary-color, #03a9f4); color: #fff; }
  .secondary { background: none; color: inherit; border: 1px solid var(--divider-color, #444) !important; }
  .hint { font-size: 12px; opacity: 0.7; padding: 6px 16px 0; }
`));let fh=class extends xd{constructor(){super(...arguments),this._tab="map",this._q="",this._mapOk=null,this._showOthers=!1,this._preview=null,this._fitted=!1}_close(){this.dispatchEvent(new CustomEvent("close"))}_pick(e){this.dispatchEvent(new CustomEvent("location-picked",{detail:e}))}_engine(){return this.renderRoot.querySelector("ha-map")}_useMapCentre(){var e,t,a;const i=this._engine(),n=null==i||null===(e=i._engine)||void 0===e||null===(t=e.getView)||void 0===t?void 0:t.call(e);if(n)return void this._pick({lat:n.center[0],lon:n.center[1],source:"Picked on map"});const o=null==i||null===(a=i.leafletMap)||void 0===a?void 0:a.getCenter();o&&this._pick({lat:o.lat,lon:o.lng,source:"Picked on map"})}async _centreMap(){var e;const t=null===(e=this.hass)||void 0===e||null===(e=e.states["zone.home"])||void 0===e?void 0:e.attributes,a=this._preview?[this._preview.lat,this._preview.lon]:null!=(null==t?void 0:t.latitude)?[t.latitude,t.longitude]:null;if(a)for(let e=0;e<40;e++){var i;const e=this._engine();if(!e)return;if(null!==(i=e._engine)&&void 0!==i&&i.setView)return void e._engine.setView(a,15);if(e.leafletMap)return void e.leafletMap.setView(a,15);await new Promise(e=>setTimeout(e,150))}}updated(){var e,t;if("map"!==this._tab)return;if(null===this._mapOk)return void Gp().then(e=>{this._mapOk=e});const a=this.renderRoot.querySelector("ha-map");if(!a||this._fitted)return;this._fitted=!0;const i=Object.keys(null!==(e=null===(t=this.hass)||void 0===t?void 0:t.states)&&void 0!==e?e:{}).filter(e=>e.startsWith("zone."));a.entities=this._preview?[...i,this._preview.entityId]:i,a.autoFit=!1,this._centreMap()}render(){var e;const t=this._q.toLowerCase(),a=function(e){const t=[];for(const[o,r]of Object.entries(null!==(a=null==e?void 0:e.states)&&void 0!==a?a:{})){var a,i,n;if(uh.has(o.split(".")[0]))continue;const s=null==e||null===(i=e.entities)||void 0===i?void 0:i[o];if("meshcore"===(null==s?void 0:s.platform)||o.includes("meshcore"))continue;const l=r.attributes,c=Number(l.latitude),d=Number(l.longitude);if(null==l.latitude||null==l.longitude||!Number.isFinite(c)||!Number.isFinite(d))continue;if(0===c&&0===d)continue;const p=Number(l.gps_accuracy);t.push({entityId:o,name:String(null!==(n=l.friendly_name)&&void 0!==n?n:o),lat:c,lon:d,accuracy:Number.isFinite(p)?p:void 0,updated:Date.parse(r.last_updated)||0})}return t.sort((e,t)=>t.updated-e.updated)}(this.hass).filter(e=>!t||e.name.toLowerCase().includes(t)||e.entityId.includes(t)),i=function(e){var t;const a=new Set,i=null==e||null===(t=e.user)||void 0===t?void 0:t.id;if(!i)return a;for(const[t,r]of Object.entries(null!==(n=null==e?void 0:e.states)&&void 0!==n?n:{})){var n;if(!t.startsWith("person."))continue;const e=r.attributes;if(e.user_id===i)for(const t of null!==(o=e.device_trackers)&&void 0!==o?o:[]){var o;a.add(t)}}return a}(this.hass),n=a.filter(e=>i.has(e.entityId)),o=null!==(e=this.hass)&&void 0!==e&&null!==(e=e.user)&&void 0!==e&&e.is_admin?a.filter(e=>!i.has(e.entityId)):[],r=e=>{const t=Date.now()-e.updated>36e5;return ad(Le||(Le=pc`<button class="row" @click=${0}>
        <span>${0}</span>
        <span class="meta ${0}">Updated ${0}${0}</span>
      </button>`),()=>{this._preview=e,this._tab="map",this._fitted=!1},e.name,t?"stale":"",mh(e.updated),null!=e.accuracy?` · ±${Math.round(e.accuracy)} m`:"")};return ad(He||(He=pc`
      <div class="backdrop" @click=${0}>
        <div class="dialog" @click=${0}>
          <header>Share a location<button class="x" aria-label="Close" @click=${0}>✕</button></header>
          <div class="tabs">
            <button class=${0} @click=${0}>Pick on map</button>
            <button class=${0} @click=${0}>From a device</button>
          </div>
          ${0}
        </div>
      </div>
    `),this._close,e=>e.stopPropagation(),this._close,"map"!==this._tab||this._preview?"":"on",()=>{this._tab="map",this._preview=null,this._fitted=!1},"devices"===this._tab||this._preview?"on":"",()=>{this._tab="devices",this._preview=null},"devices"===this._tab?ad(Ve||(Ve=pc`
            <input class="search" placeholder="Search devices" .value=${0} @input=${0}>
            <div class="list">
              <div class="section">Your devices</div>
              ${0}
              ${0}
            </div>
          `),this._q,e=>{this._q=e.target.value},0===n.length?ad(Ke||(Ke=pc`<div class="empty">${0}</div>`),t?"No match.":"No devices with a position are linked to you. In Home Assistant, add your phone's tracker to your person (Settings → People)."):n.map(r),o.length>0?ad(Ue||(Ue=pc`
                <button class="section toggle" aria-expanded=${0} @click=${0}>
                  ${0} Other devices (${0})
                </button>
                ${0}`),this._showOthers,()=>{this._showOthers=!this._showOthers},this._showOthers?"▾":"▸",o.length,this._showOthers||t?o.map(r):""):""):ad(We||(We=pc`
            ${0}
          `),!1===this._mapOk?ad(Ge||(Ge=pc`<div class="empty">${0}</div>`),Up):ad(Xe||(Xe=pc`
              ${0}
              <div class="mapwrap" @hass-more-info=${0}>
                ${0}
              </div>
              <footer>
                ${0}
              </footer>`),this._preview?ad(Ye||(Ye=pc`<div class="hint"><strong>${0}</strong> · updated ${0}${0}</div>`),this._preview.name,mh(this._preview.updated),null!=this._preview.accuracy?` · ±${Math.round(this._preview.accuracy)} m`:""):ad(Qe||(Qe=pc`<div class="hint">Move the map so the pin is on the spot. Your zones are shown for reference.</div>`)),e=>e.stopPropagation(),this._mapOk?ad(Je||(Je=pc`<ha-map .hass=${0}></ha-map>${0}`),this.hass,this._preview?"":ad(Ze||(Ze=pc`<div class="pin">📍</div>`))):"",this._preview?ad(et||(et=pc`
                  <button class="secondary" @click=${0}>Back</button>
                  <button class="primary" @click=${0}>Use this location</button>`),()=>{this._preview=null,this._tab="devices"},()=>{const e=this._preview;this._pick({lat:e.lat,lon:e.lon,source:e.name,accuracy:e.accuracy})}):ad(tt||(tt=pc`
                  <button class="secondary" @click=${0}>Cancel</button>
                  <button class="primary" ?disabled=${0} @click=${0}>Use this spot</button>`),this._close,!this._mapOk,this._useMapCentre))))}};fh.styles=gh,hc([Sd({attribute:!1})],fh.prototype,"hass",void 0),hc([Ad()],fh.prototype,"_tab",void 0),hc([Ad()],fh.prototype,"_q",void 0),hc([Ad()],fh.prototype,"_mapOk",void 0),hc([Ad()],fh.prototype,"_showOthers",void 0),hc([Ad()],fh.prototype,"_preview",void 0),fh=hc([kd("meshcore-location-picker")],fh);let vh=class extends xd{constructor(){super(...arguments),this.contacts=[],this._q=""}_close(){this.dispatchEvent(new CustomEvent("close"))}_pick(e,t,a){this.dispatchEvent(new CustomEvent("contact-picked",{detail:{publicKey:e,type:t,name:a}}))}render(){const e=this._q.toLowerCase(),t=this.contacts.filter(e=>e.public_key&&64===e.public_key.length).filter(t=>!e||(t.adv_name||"").toLowerCase().includes(e)||t.public_key.startsWith(e)).sort((e,t)=>(e.adv_name||"").localeCompare(t.adv_name||""));return ad(at||(at=pc`
      <div class="backdrop" @click=${0}>
        <div class="dialog" @click=${0}>
          <header>Share a contact<button class="x" aria-label="Close" @click=${0}>✕</button></header>
          <input class="search" placeholder="Search contacts" .value=${0} @input=${0}>
          <div class="list">
            ${0}
            ${0}
            ${0}
          </div>
        </div>
      </div>
    `),this._close,e=>e.stopPropagation(),this._close,this._q,e=>{this._q=e.target.value},this.own&&!e?ad(it||(it=pc`<button class="row" @click=${0}>
              <span>My contact (${0})</span><span class="meta">So others can add you</span></button>`),()=>this._pick(this.own.publicKey,1,this.own.name),this.own.name):"",t.map(e=>{var t;return ad(nt||(nt=pc`<button class="row" @click=${0}>
              <span>${0}</span>
              <span class="meta">${0} · ${0}</span></button>`),()=>this._pick(e.public_key,e.type,e.adv_name),e.adv_name||e.pubkey_prefix,null!==(t=Dp[e.type])&&void 0!==t?t:"Node",e.public_key.slice(0,8))}),0!==t.length||this.own?"":ad(ot||(ot=pc`<div class="empty">No contacts to share.</div>`)))}};vh.styles=gh,hc([Sd({attribute:!1})],vh.prototype,"contacts",void 0),hc([Sd({attribute:!1})],vh.prototype,"own",void 0),hc([Ad()],vh.prototype,"_q",void 0),vh=hc([kd("meshcore-contact-picker")],vh);const bh=new Map;function yh(e,t){const a=null!=t?t:"";let i=bh.get(a);return i||(i=qd(e,t).then(e=>{const t=Number(e.latitude),a=Number(e.longitude);return Number.isFinite(t)&&Number.isFinite(a)&&(0!==t||0!==a)?{lat:t,lon:a}:null}).catch(()=>null).then(t=>{var a;if(t)return t;const i=null===(a=e.states["zone.home"])||void 0===a?void 0:a.attributes,n=Number(null==i?void 0:i.latitude),o=Number(null==i?void 0:i.longitude);return Number.isFinite(n)&&Number.isFinite(o)?{lat:n,lon:o}:null}),bh.set(a,i)),i}let _h;function xh(e,t=!1){const a="mi"===_h?"mi":"km",i="mi"===a?e/1.609344:e;return`${t?"~":""}${i<10?i.toFixed(1):Math.round(i)} ${a}`}function wh(e){const t="number"==typeof e?e:Number(e);return Number.isFinite(t)&&0!==t?t:null}function kh(e,t,a,i){const n=Math.PI/180,o=(a-e)*n,r=(i-t)*n,s=Math.sin(o/2)**2+Math.cos(e*n)*Math.cos(a*n)*Math.sin(r/2)**2;return 12742*Math.asin(Math.min(1,Math.sqrt(s)))}function $h(e,t,a=1){const i=kh(e.lat,e.lon,t.lat,t.lon)/a;return a*(i+i*i/100)}const Ch=new WeakMap;function Sh(e){let t=Ch.get(e);return t||(t=function(e){const t=[];for(const[s,l]of Object.entries(e)){var a,i,n,o,r;if(!s.startsWith("binary_sensor.meshcore_")||!s.endsWith("_contact"))continue;const e=l.attributes,c="string"==typeof e.public_key?e.public_key.toLowerCase():"",d=wh(null!==(a=e.adv_lat)&&void 0!==a?a:e.latitude),p=wh(null!==(i=e.adv_lon)&&void 0!==i?i:e.longitude);c&&null!==d&&null!==p&&t.push({key:c,name:String(null!==(n=null!==(o=e.adv_name)&&void 0!==o?o:e.friendly_name)&&void 0!==n?n:c.slice(0,6)),lat:d,lon:p,type:Number(null!==(r=e.type)&&void 0!==r?r:0)})}return t}(e),Ch.set(e,t)),t}function Ah(e){const t=[],a=new Set;for(const n of null!==(i=e.rxLogData)&&void 0!==i?i:[]){var i;const e=n.path_nodes;if(!e||0===e.length)continue;const o=e.join(">");a.has(o)||(a.add(o),t.push(e))}return t.sort((e,t)=>e.length-t.length)}let Mh=class extends xd{constructor(){super(...arguments),this._me=null,this._meLoaded=!1,this._pathIndex=0,this._native=null,this._expanded=!1,this._route=[],this._nativeKey="",this._blockMarkerHover={handleEvent:e=>{const t=this.renderRoot.querySelector("ha-map"),a=null==t?void 0:t._entityMarkers;if(!a)return;const i=new Set(a.values());e.composedPath().some(e=>i.has(e))&&e.stopPropagation()},capture:!0},this._onKey=e=>{"Escape"===e.key&&this._expanded&&(e.stopPropagation(),this._setExpanded(!1))}}disconnectedCallback(){window.removeEventListener("keydown",this._onKey,!0),super.disconnectedCallback()}connectedCallback(){var e;super.connectedCallback(),window.addEventListener("keydown",this._onKey,!0),null===this._native&&Gp().then(e=>{this._native=e});const t=null===(e=this.getHass)||void 0===e?void 0:e.call(this);var a,i;t&&!this._meLoaded&&(i=null===(a=t.config)||void 0===a||null===(a=a.unit_system)||void 0===a?void 0:a.length,_h=i,yh(t,this.entryId).then(e=>{this._me=e,this._meLoaded=!0}))}willUpdate(e){e.has("message")&&(this._pathIndex=0)}render(){var e;const t=null===(e=this.getHass)||void 0===e?void 0:e.call(this);if(!t||!this.message)return od;if(!this._meLoaded||null===this._native)return ad(rt||(rt=pc`<div class="note">Loading...</div>`));const a=Ah(this.message);if(0===a.length)return od;const i=Math.min(this._pathIndex,a.length-1),n=function(e){var t,a,i,n,o;const{pathNodes:r,nodes:s,me:l,outgoing:c,senderName:d}=e,p=l?{lat:l.lat,lon:l.lon}:null,h=!c&&d?s.find(e=>e.name===d):void 0,u=c?r.map((e,t)=>t):r.map((e,t)=>r.length-1-t),m=u.map(e=>function(e,t){const a=e.toLowerCase(),i=t.filter(e=>e.key.startsWith(a)&&(2===e.type||3===e.type));return i.length?i:t.filter(e=>e.key.startsWith(a))}(r[e],s)),g=u.map(e=>r[e].length<=2?200:600),f=function(e,t,a,i=[]){let n=new Map([["",{pos:t,fromStart:0,layer:-1,cost:0,picks:[]}]]);e.forEach((e,a)=>{const o=new Map,r=(e,t)=>{const a=o.get(e);(!a||t.cost<a.cost)&&o.set(e,t)};for(const[o,l]of n){var s;for(const i of e){const e=t?kh(t.lat,t.lon,i.lat,i.lon):0,n=t&&l.layer>=0?2*Math.max(0,l.fromStart-e):0;r(`${a}:${i.key}`,{pos:{lat:i.lat,lon:i.lon},fromStart:e,layer:a,cost:l.cost+(l.pos?$h(l.pos,i,a-l.layer):0)+n,picks:[...l.picks,i]})}const n=0===e.length?0:null!==(s=i[a])&&void 0!==s?s:1/0;Number.isFinite(n)&&r(o,{...l,cost:l.cost+n,picks:[...l.picks,null]})}n=o});let o=null,r=1/0;for(const t of n.values()){const i=t.cost+(a&&t.pos?$h(t.pos,a,e.length-t.layer):0);i<r&&(r=i,o=t)}return o?o.picks:e.map(()=>null)}(m,p,h?{lat:h.lat,lon:h.lon}:null,g),v=new Array(r.length);u.forEach((e,t)=>{var a,i,n;const o=f[t];v[e]={kind:"repeater",prefix:r[e].toUpperCase(),name:null!==(a=null==o?void 0:o.name)&&void 0!==a?a:"",lat:null!==(i=null==o?void 0:o.lat)&&void 0!==i?i:null,lon:null!==(n=null==o?void 0:o.lon)&&void 0!==n?n:null,ambiguous:m[t].length>1,...o?{key:o.key}:{},...null===o&&m[t].length>0?{leftOut:!0}:{}}});const b={kind:"me",prefix:"",name:null!==(t=null==l?void 0:l.name)&&void 0!==t?t:"",lat:null!==(a=null==l?void 0:l.lat)&&void 0!==a?a:null,lon:null!==(i=null==l?void 0:l.lon)&&void 0!==i?i:null,ambiguous:!1};return c?[b,...v]:[{kind:"sender",prefix:"",name:null!=d?d:"",lat:null!==(n=null==h?void 0:h.lat)&&void 0!==n?n:null,lon:null!==(o=null==h?void 0:h.lon)&&void 0!==o?o:null,ambiguous:!1,...h?{key:h.key}:{}},...v,b]}({pathNodes:a[i],nodes:Sh(t.states),me:this._me?{...this._me,name:""}:null,outgoing:this.message.isOutgoing,senderName:this.message.isOutgoing?void 0:this.message.sender});return ad(st||(st=pc`
      ${0}
      ${0}
      ${0}
    `),a.length>1?ad(lt||(lt=pc`<div class="tabs">
            ${0}
          </div>`),a.map((e,t)=>ad(ct||(ct=pc`<button class=${0}
              @click=${0}>
              Path ${0} · ${0} hop${0}
            </button>`),t===i?"active":"",e=>{e.stopPropagation(),this._pathIndex=t},t+1,e.length,1===e.length?"":"s"))):od,this._renderMap(n),this._renderList(n))}_renderMap(e){if(this._route=e,!this._native)return ad(dt||(dt=pc`<div class="note">${0}</div>`),Up);if(!e.some(e=>null!==e.lat&&null!==e.lon))return ad(pt||(pt=pc`<div class="note">No repeater on this path has a known position.</div>`));const t=this._expanded;return ad(ht||(ht=pc`
    ${0}
    <div class="wrap ${0}"
        @hass-more-info=${0}
        @mouseover=${0} @mouseenter=${0}
        @pointerover=${0} @pointerenter=${0}
        @click=${0}>
      <ha-map></ha-map>
      <div class="controls">
        <button aria-label="Re-centre on the route" title="Re-centre on the route" @click=${0}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/></svg>
        </button>
        <button aria-label=${0} title=${0} @click=${0}>
          ${0}
        </button>
      </div>
    </div>`),t?ad(ut||(ut=pc`<div class="backdrop" @click=${0}></div>`),e=>{e.stopPropagation(),this._setExpanded(!1)}):od,t?"expanded":"",e=>e.stopPropagation(),this._blockMarkerHover,this._blockMarkerHover,this._blockMarkerHover,this._blockMarkerHover,e=>e.stopPropagation(),()=>this._fitNative(),t?"Close large map":"Open a larger map",t?"Close":"Larger map",()=>this._setExpanded(!t),ad(t?mt||(mt=pc`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>`):gt||(gt=pc`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>`)))}updated(){var e;if(!this._native)return;const t=this.renderRoot.querySelector("ha-map");if(!t)return;const a=this._route,i=a.map(e=>`${e.prefix}:${e.lat},${e.lon}`).join("|");if(i===this._nativeKey)return;this._nativeKey=i;const n=Qp(null===(e=this.getHass)||void 0===e?void 0:e.call(this)),o=new Map,r=new Map,s=[];let l=0;for(const e of a){if("repeater"===e.kind&&l++,"me"===e.kind||!e.key)continue;const t=n.get(e.key);if(!t||o.has(t))continue;o.set(t,"sender"===e.kind?"#43a047":Xp[2]);const a=e.name||"Unknown";r.set(t,"repeater"===e.kind?a:`Sender: ${a}`),s.push({entity_id:t,label_mode:"name",name:"repeater"===e.kind?String(l):e.name||"Sender"})}t.clusterMarkers=!1,t.autoFit=!1,t.entities=s;const c=a.filter(e=>null!==e.lat&&null!==e.lon).map(e=>{const t=e.name||"Unknown",a="me"===e.kind?"You":"sender"===e.kind?`Sender: ${t}`:t;return{point:[e.lat,e.lon],tooltip:a}});!function(e){const t=e;if(t._mcTooltips||"function"!=typeof t._computePathTooltip)return;const a=t._computePathTooltip.bind(t);t._computePathTooltip=(e,t)=>{var i;return null!==(i=null==t?void 0:t.tooltip)&&void 0!==i?i:a(e,t)},t._mcTooltips=!0}(t),t.paths=c.length>1?[{points:c,color:"#d32f2f"}]:[],Yp(t,e=>o.get(e),e=>r.get(e)),this._fitNative()}_setExpanded(e){this._expanded=e;for(const e of[100,400,1e3])setTimeout(()=>{var e,t;const a=this.renderRoot.querySelector("ha-map");null==a||null===(e=a._engine)||void 0===e||null===(t=e.invalidateSize)||void 0===t||t.call(e),this._fitNative()},e)}_fitNative(){var e;const t=this.renderRoot.querySelector("ha-map"),a=Jp(this._route.filter(e=>null!==e.lat&&null!==e.lon).map(e=>({lat:e.lat,lon:e.lon})));t&&a&&(null===(e=t.fitBounds)||void 0===e||e.call(t,a,{zoom:14,pad:.3}))}_renderList(e){const t=e.some(e=>e.ambiguous),a=e.filter(e=>"repeater"===e.kind);let i=null;const n=a.map(e=>{if(null===e.lat||null===e.lon)return null;const t=i?kh(i.lat,i.lon,e.lat,e.lon):null;return i=e,t}),o=a[0],r=a[a.length-1],s=a.length>=2&&null!==o.lat&&null!==o.lon&&null!==r.lat&&null!==r.lon?{km:kh(o.lat,o.lon,r.lat,r.lon),approx:o.ambiguous||r.ambiguous,routeKm:n.reduce((e,t)=>e+(null!=t?t:0),0),routeApprox:a.some(e=>e.ambiguous||null===e.lat)}:null;return ad(ft||(ft=pc`
      <ol>
        ${0}
      </ol>
      ${0}
      ${0}
    `),a.map((e,t)=>{const a=n[t];return ad(vt||(vt=pc`<li>
            <span class="prefix">${0}</span>
            ${0}${0}${0}
          </li>`),e.prefix,e.name?ad(bt||(bt=pc` ${0}`),e.name):e.leftOut?" – probably a repeater not in your contacts":" – no known position",e.ambiguous&&!e.leftOut?" (?)":"",null!==a?ad(yt||(yt=pc` <span class="leg">+${0}</span>`),xh(a)):od)}),s?ad(_t||(_t=pc`<div class="note distance">${0}</div>`),function(e){const t=`↔ ${xh(e.km,e.approx)}`;return e.routeKm-e.km>.5?`${t} (∑ ${xh(e.routeKm,e.routeApprox)})`:t}(s)):od,t?ad(xt||(xt=pc`<div class="note">(?) Several known repeaters share this prefix; the one that fits the route best is shown.</div>`)):od)}};Mh.styles=bc(wt||(wt=pc`
    :host {
      display: block;
    }
    .tabs {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      padding: 6px 8px 0;
    }
    .tabs button {
      font: inherit;
      font-size: 11px;
      padding: 2px 8px;
      border-radius: 10px;
      border: 1px solid var(--divider-color, #555);
      background: transparent;
      color: var(--secondary-text-color);
      cursor: pointer;
    }
    .tabs button.active {
      background: var(--primary-color, #03a9f4);
      border-color: var(--primary-color, #03a9f4);
      color: var(--text-primary-color, #fff);
    }
    .wrap {
      position: relative;
      margin-top: 6px;
      height: 320px;
    }
    .wrap ha-map {
      display: block;
      height: 100%;
      width: 100%;
    }
    .wrap.expanded {
      position: fixed;
      inset: 5vh 5vw;
      height: auto;
      margin: 0;
      z-index: 1001;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
    }
    .backdrop {
      position: fixed;
      inset: 0;
      z-index: 1000;
      background: rgba(0, 0, 0, 0.6);
    }
    .controls {
      position: absolute;
      top: 6px;
      right: 6px;
      display: flex;
      flex-direction: column;
      gap: 6px;
      z-index: 2;
    }
    .controls svg {
      width: 16px;
      height: 16px;
      display: block;
      margin: auto;
    }
    .controls button {
      width: 30px;
      height: 30px;
      border: 1px solid var(--divider-color, #ccc);
      border-radius: 6px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color, #222);
      font-size: 16px;
      line-height: 1;
      cursor: pointer;
    }
    ol {
      margin: 6px 0 8px;
      padding: 0 12px 0 30px;
      font-size: 12px;
      color: var(--secondary-text-color);
    }
    li {
      margin: 2px 0;
    }
    .prefix {
      font-family: monospace;
    }
    .leg {
      opacity: 0.8;
      font-size: 11px;
    }
    .note {
      padding: 0 12px 8px;
      font-size: 11px;
      color: var(--secondary-text-color);
    }
    .note.distance {
      font-size: 12px;
      color: var(--primary-text-color);
    }
  `)),hc([Sd({attribute:!1})],Mh.prototype,"getHass",void 0),hc([Sd({attribute:!1})],Mh.prototype,"message",void 0),hc([Sd({type:String})],Mh.prototype,"entryId",void 0),hc([Ad()],Mh.prototype,"_me",void 0),hc([Ad()],Mh.prototype,"_meLoaded",void 0),hc([Ad()],Mh.prototype,"_pathIndex",void 0),hc([Ad()],Mh.prototype,"_native",void 0),hc([Ad()],Mh.prototype,"_expanded",void 0),Mh=hc([kd("meshcore-path-map")],Mh);let Fh=class extends xd{constructor(){super(...arguments),this.mode="sheet",this.reactions=[],this.isChannel=!1,this.timestampFormat="relative",this._picker=!1,this._reactRow=!1,this._showMap=!1,this._copied=!1,this._confirmResend=!1,this._reactOpen=null,this._reactAll=!1,this._onKey=e=>{"Escape"===e.key&&this.message&&this._close()}}willUpdate(){var e,t;(null===(e=this.message)||void 0===e?void 0:e.id)!==this._shownId&&(this._shownId=null===(t=this.message)||void 0===t?void 0:t.id,this._picker=!1,this._reactRow=!1,this._showMap="side"===this.mode,this._copied=!1,this._confirmResend=!1,this._reactOpen=null,this._reactAll=!1)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this._onKey)}disconnectedCallback(){window.removeEventListener("keydown",this._onKey),super.disconnectedCallback()}_emit(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}_close(){this._emit("panel-close")}_react(e){const t=this.message;this._emit("react-to-message",{emoji:e,msg:t}),this._picker=!1,this._reactRow=!1,"sheet"===this.mode&&this._close()}async _copy(){const e=this.message.text;try{await navigator.clipboard.writeText(e)}catch(t){const a=document.createElement("textarea");a.value=e,a.style.position="fixed",a.style.opacity="0",document.body.appendChild(a),a.select(),document.execCommand("copy"),document.body.removeChild(a)}this._copied=!0,setTimeout(()=>{this._copied=!1},1500)}_reply(){const e=this.message;this._emit("reply-to-sender",{mention:`@[${e.sender}] `,sender:e.sender,text:e.text}),this._close()}_resend(){this._emit("resend-message",{text:this.message.text}),this._close()}_radioLine(e){var t,a,i;const n=null===(t=e.rxLogData)||void 0===t?void 0:t[0];if(!n)return"";const o=n.path_nodes,r=null!==(a=null!==(i=n.hop_count)&&void 0!==i?i:null==o?void 0:o.length)&&void 0!==a?a:0,s=[`${r} hop${1===r?"":"s"}`];return void 0!==n.snr&&s.push(`SNR ${n.snr}`),void 0!==n.rssi&&s.push(`RSSI ${n.rssi}`),s.join(" · ")}_icon(e){return ad(kt||(kt=pc`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d=${0}></path></svg>`),e)}_renderReactions(){var e;const t=this.reactions;if(0===t.length)return"";const a=t.reduce((e,t)=>e+t.who.length,0),i=new Set(t.filter(e=>e.senders.includes("You")).map(e=>e.emoji)),n=null!==(e=this._reactOpen)&&void 0!==e?e:"side"===this.mode?"*":null,o=(e,t,a=!1)=>ad($t||($t=pc`<button
      class="rs-chip ${0} ${0}" aria-expanded=${0}
      @click=${0}>${0}</button>`),n===e?"on":"",a?"mine":"",n===e,()=>{this._reactOpen=n===e?"":e,this._reactAll=!1},t);let r=n?t.filter(e=>"*"===n||e.emoji===n).flatMap(e=>e.who.map(t=>({emoji:e.emoji,...t}))).sort((e,t)=>t.time.getTime()-e.time.getTime()):[];const s="side"===this.mode?20:5,l=r.length-s;return!this._reactAll&&l>0&&(r=r.slice(0,s)),ad(Ct||(Ct=pc`<div>
      <div class="rs-chips">
        ${0}
        ${0}
      </div>
      ${0}
      ${0}
    </div>`),[...t].sort((e,t)=>t.who.length-e.who.length).map(e=>o(e.emoji,`${e.emoji} ${e.who.length}`,i.has(e.emoji))),o("*",`${a} ${1===a?"reaction":"reactions"}`),r.map(e=>ad(St||(St=pc`<div class="entry"><span class="e">${0}</span><span class="who">${0}</span><span class="meta">${0}</span></div>`),e.emoji,e.sender,mp(e.time,this.timestampFormat))),!this._reactAll&&l>0?ad(At||(At=pc`<button class="more-link" @click=${0}>Show all ${0}</button>`),()=>{this._reactAll=!0},r.length+l):"")}_renderResend(e){var t;if(!Kp(e.isOutgoing,e.deliveryStatus))return"";const a="failed"===(null===(t=e.deliveryStatus)||void 0===t?void 0:t.status);return this._confirmResend?ad(Mt||(Mt=pc`<div class="resend"><div class="note">Resend to this channel? Others may already have it, and they'd see it twice.</div>
        <button class="btn" @click=${0}>Cancel</button>
        <button class="btn primary" @click=${0}>Resend</button></div>`),()=>{this._confirmResend=!1},this._resend):ad(Ft||(Ft=pc`<div class="resend"><div class="note">${0}</div>
      <button class="btn primary" @click=${0}>Resend</button></div>`),a?"No reply came back, so it most likely didn't arrive.":"No repeat was heard. It may still have been delivered, out of your radio's range.",()=>{this.isChannel&&!a?this._confirmResend=!0:this._resend()})}_renderBody(e){var t;const a="side"===this.mode,i=!!this.getHass&&Ah(e).length>0,n=e.deliveryStatus,o=e.isOutgoing&&n?`${(null!==(t=n.repeaterCount)&&void 0!==t?t:0)>0?`${n.repeaterCount} repeater${1===n.repeaterCount?"":"s"} responded`:"No repeaters responded"}${n.ackReceived?" · ACK received":""}${n.roundTripMs?` · ${n.roundTripMs}ms RTT`:""}`:"",r=this._radioLine(e);return ad(Et||(Et=pc`
      ${0}
      <div>
        <div class="sender">${0}</div>
        <div class="preview">${0}</div>
        <div class="meta info">${0} ${0}</div>
        ${0}
        ${0}
      </div>
      <div class="actions">
        ${0}
        <button class="act ${0}" aria-expanded=${0} @click=${0}>${0}React</button>
        <button class="act" @click=${0}>${0}${0}</button>
        ${0}
        ${0}
      </div>
      ${0}
      ${0}
      ${0}
      ${0}
    `),a?ad(Dt||(Dt=pc`<div class="side-head">Message<button class="x" aria-label="Close" @click=${0}>✕</button></div>`),this._close):ad(zt||(zt=pc`<div class="grab"></div>`)),e.isOutgoing?"You":e.sender,e.text,e.isOutgoing?"Sent":"Received",`${ip(s=e.timestamp,!0)}, ${ap(s,!0)}`,r?ad(Ot||(Ot=pc`<div class="meta info">${0}</div>`),r):"",o?ad(It||(It=pc`<div class="meta info">${0}</div>`),o):"",e.isOutgoing?"":ad(Rt||(Rt=pc`<button class="act" @click=${0}>${0}Reply</button>`),this._reply,this._icon("M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z")),this._reactRow?"on":"",this._reactRow,()=>{this._reactRow=!this._reactRow,this._picker=!1},this._icon("M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"),this._copy,this._icon("M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"),this._copied?"Copied":"Copy",i&&!a?ad(Tt||(Tt=pc`<button class="act ${0}" aria-expanded=${0} @click=${0}>${0}Route</button>`),this._showMap?"on":"",this._showMap,()=>{this._showMap=!this._showMap},this._icon("M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z")):"",!e.isOutgoing&&this.senderConversation?ad(qt||(qt=pc`<button class="act" @click=${0}>${0}Message</button>`),()=>{this._emit("open-conversation",{id:this.senderConversation}),this._close()},this._icon("M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z")):"",this._reactRow?ad(Bt||(Bt=pc`<div class="reacts" role="group" aria-label="React">
        ${0}
        <button class="em more ${0}" aria-label="More emoji" aria-expanded=${0}
          @click=${0}>＋</button>
      </div>
      ${0}`),vp.map(e=>ad(Nt||(Nt=pc`<button class="em" aria-label="React ${0}" @click=${0}>${0}</button>`),e,()=>this._react(e),e)),this._picker?"on":"",this._picker,()=>{this._picker=!this._picker},this._picker?ad(jt||(jt=pc`<div class="picker" @emoji-picked=${0}><meshcore-emoji-picker></meshcore-emoji-picker></div>`),e=>{e.stopPropagation(),this._react(e.detail.emoji)}):""):"",this.reactions.length?ad(Pt||(Pt=pc`<div class="reactions-block">${0}</div>`),this._renderReactions()):"",this._renderResend(e),i&&this._showMap?ad(Lt||(Lt=pc`<div class="map">${0}<meshcore-path-map .getHass=${0} .message=${0} .entryId=${0}></meshcore-path-map></div>`),a?ad(Ht||(Ht=pc`<div class="lbl">Route</div>`)):"",this.getHass,e,this.entryId):"");var s}render(){const e=this.message;return e?"side"===this.mode?ad(Kt||(Kt=pc`<aside class="side" aria-label="Message details">${0}</aside>`),this._renderBody(e)):ad(Ut||(Ut=pc`<div class="backdrop" @click=${0}>
      <div class="sheet" role="dialog" aria-modal="true" aria-label="Message actions" @click=${0}>
        ${0}
      </div>
    </div>`),this._close,e=>e.stopPropagation(),this._renderBody(e)):ad(Vt||(Vt=pc``))}};Fh.styles=bc(Wt||(Wt=pc`
    :host { display: block; color: var(--primary-text-color); font-size: 14px; }
    .backdrop { position: fixed; inset: 0; background: rgba(0, 0, 0, 0.55); z-index: 30; display: flex; flex-direction: column; justify-content: flex-end; }
    .sheet { background: var(--card-background-color, #262626); border-radius: 18px 18px 0 0; max-height: 85vh; overflow-y: auto;
      overscroll-behavior: contain; padding: 8px 16px calc(16px + env(safe-area-inset-bottom, 0px)); box-sizing: border-box; }
    .grab { width: 40px; height: 4px; border-radius: 2px; background: var(--divider-color, #555); margin: 0 auto 10px; }
    .side { height: 100%; width: 340px; box-sizing: border-box; overflow-y: auto; padding: 14px 16px;
      background: var(--card-background-color, #1a1a1a); border-left: 1px solid var(--divider-color, #333);
      display: flex; flex-direction: column; gap: 14px; }
    .side-head { display: flex; justify-content: space-between; align-items: center; font-weight: 600; font-size: 15px; }
    .x { background: none; border: none; color: var(--secondary-text-color); font-size: 16px; cursor: pointer; padding: 4px 8px; }
    .head { display: flex; justify-content: space-between; align-items: baseline; gap: 8px; }
    .sender { font-size: 13px; font-weight: 600; color: var(--sender-color, var(--primary-color, #03a9f4)); }
    .meta { font-size: 12px; color: var(--secondary-text-color); }
    .preview { background: rgba(127, 127, 127, 0.15); border-radius: 12px; padding: 9px 12px; margin: 6px 0 10px;
      white-space: pre-wrap; word-break: break-word; max-height: 140px; overflow-y: auto; }
    .reacts { display: flex; justify-content: space-between; align-items: center; gap: 2px; }
    .side .reacts { justify-content: flex-start; flex-wrap: wrap; }
    .em { background: none; border: none; font-size: 22px; line-height: 1; width: 40px; height: 40px; border-radius: 50%;
      cursor: pointer; padding: 0; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    .em.more { font-size: 18px; color: var(--secondary-text-color); border: 1px solid var(--divider-color, #555); }
    .em.more.on { background: rgba(127, 127, 127, 0.2); }
    @media (hover: hover) { .em:hover { background: rgba(127, 127, 127, 0.2); } }
    .picker { margin-top: 8px; }
    .picker meshcore-emoji-picker { width: 100%; }
    .actions { display: flex; justify-content: space-around; border-top: 1px solid var(--divider-color, #3a3a3a);
      border-bottom: 1px solid var(--divider-color, #3a3a3a); margin-top: 12px; }
    .side .actions { justify-content: flex-start; flex-wrap: wrap; gap: 8px; border: none; margin: 0; }
    .reacts { margin-top: 10px; }
    .side .reacts { margin-top: 0; }
    .reactions-block { margin-top: 10px; }
    .side .reactions-block { margin-top: 0; }
    .act { background: none; border: none; color: var(--primary-text-color); font: inherit; font-size: 12px; cursor: pointer;
      display: flex; flex-direction: column; align-items: center; gap: 4px; padding: 8px 4px; min-width: 64px; min-height: 56px; }
    .side .act { flex-direction: row; min-height: 0; min-width: 0; font-size: 13px; padding: 7px 10px; border-radius: 8px;
      background: rgba(127, 127, 127, 0.12); border: 1px solid var(--divider-color, #3a3a3a); }
    .act svg { width: 22px; height: 22px; }
    .side .act svg { width: 16px; height: 16px; }
    .act.on { color: var(--primary-color, #03a9f4); }
    .lbl { font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--secondary-text-color); margin-bottom: 6px; }
    .map { margin-top: 10px; }
    .side .map { margin-top: 0; }
    .info { margin-top: 2px; }
    .preview + .info { margin-top: -4px; }
    .toggle { background: none; border: none; color: var(--secondary-text-color); font: inherit; font-size: 12px; cursor: pointer; padding: 10px 0 0; }
    .details { font-size: 12px; color: var(--secondary-text-color); line-height: 1.7; word-break: break-word; }
    .resend { margin-top: 10px; font-size: 13px; }
    .resend .note { color: var(--secondary-text-color); margin-bottom: 6px; }
    .btn { font: inherit; border-radius: 8px; padding: 8px 14px; cursor: pointer; border: 1px solid var(--divider-color, #555);
      background: none; color: var(--primary-text-color); }
    .btn.primary { background: var(--primary-color, #03a9f4); border-color: transparent; color: #fff; }
    .rs-chips { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 8px; }
    .rs-chip { border: 1px solid var(--divider-color, #555); background: rgba(127, 127, 127, 0.12); color: var(--primary-text-color);
      border-radius: 12px; padding: 3px 10px; font-size: 13px; cursor: pointer; font-family: inherit; }
    .rs-chip.mine { border-color: var(--primary-color, #03a9f4); }
    .rs-chip.on { background: var(--primary-color, #03a9f4); border-color: var(--primary-color, #03a9f4); color: #fff; }
    .entry { display: flex; gap: 8px; align-items: center; padding: 3px 0; }
    .entry .e { width: 24px; text-align: center; }
    .entry .who { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .more-link { background: none; border: none; color: var(--primary-color, #03a9f4); padding: 4px 0; cursor: pointer; font: inherit; font-size: 13px; }
    .none { font-size: 12px; color: var(--secondary-text-color); }
  `)),hc([Sd({attribute:!1})],Fh.prototype,"message",void 0),hc([Sd({type:String})],Fh.prototype,"mode",void 0),hc([Sd({attribute:!1})],Fh.prototype,"reactions",void 0),hc([Sd({attribute:!1})],Fh.prototype,"getHass",void 0),hc([Sd({type:String})],Fh.prototype,"entryId",void 0),hc([Sd({type:Boolean})],Fh.prototype,"isChannel",void 0),hc([Sd({type:String})],Fh.prototype,"timestampFormat",void 0),hc([Sd({type:String})],Fh.prototype,"senderConversation",void 0),hc([Ad()],Fh.prototype,"_picker",void 0),hc([Ad()],Fh.prototype,"_reactRow",void 0),hc([Ad()],Fh.prototype,"_showMap",void 0),hc([Ad()],Fh.prototype,"_copied",void 0),hc([Ad()],Fh.prototype,"_confirmResend",void 0),hc([Ad()],Fh.prototype,"_reactOpen",void 0),hc([Ad()],Fh.prototype,"_reactAll",void 0),Fh=hc([kd("meshcore-message-panel")],Fh);const Eh=new TextEncoder;function Dh(e){return Eh.encode(e).length}const zh="meshcore-channel-trackable-limit",Oh="meshcore-message-limit-changed";function Ih(){try{return"off"!==localStorage.getItem(zh)}catch(e){return!0}}let Rh=class extends xd{constructor(){super(...arguments),this._getHass=()=>this.hass,this._reactions=new Map,this._reactionsFor=e=>{var t;return null!==(t=this._reactions.get(e))&&void 0!==t?t:[]},this._popup=null,this._picker=null,this._location=null,this._confirmLocation=!1,this._contact=null,this._selMsgId=null,this._quoteFor=e=>this.selectedId&&this._messageStore?function(e,t,a){const i=nh.exec(e.text);if(!i)return null;const n=i[1],o=a.filter(t=>t.id!==e.id&&!t.isSystem&&t.timestamp.getTime()<=e.timestamp.getTime()),r=oh()[rh(t,e.text)];if(r){const e=[...o].reverse().find(e=>e.sender===r.sender&&e.text===r.text);return{sender:r.sender,text:r.text,id:null==e?void 0:e.id}}const s=[...o].reverse().find(e=>e.sender===n);return s?{sender:s.sender,text:s.text,id:s.id}:null}(e,this.selectedId,this._messageStore.messages):null,this.conversations=[],this.selectedId=null,this.narrow=!1,this.lastRead={},this._messageStore=null,this._unsubUnread=null,this._inputText="",this._replyTo=null,this._sending=!1,this._failedDrafts=new Map,this._viewportNarrow=!1,this._mediaQuery=null,this._mediaHandler=null,this._narrowShowMessages=!1,this._manageOpen=!1,this._manageInitialTab="contacts",this._searchOpen=!1,this._currentEntityId=null,this._conversationResolved=!1,this._pendingScroll=null,this._scrollInFlight=!1,this._scrollGuardUntil=0,this._lastMessageCount=0,this._lastTailKey=null,this._previews={},this._previewTimer=null,this._onLimitSettingChanged=()=>this.requestUpdate(),this._onOutsidePointer=e=>{if(this._convMenuOpen&&!e.composedPath().some(e=>e instanceof HTMLElement&&e.classList.contains("conv-menu-wrap"))&&(this._convMenuOpen=!1),!this._popup)return;const t=e.composedPath().some(e=>e instanceof HTMLElement&&(e.classList.contains("popup")||e.classList.contains("tool-button")));t||(this._popup=null)},this._convMenuOpen=!1}_draftContext(){var e;return JSON.stringify([null===(e=this.config)||void 0===e?void 0:e.entry_id,this.selectedId])}_restoreFailedDraft(){if(this._inputText)return;const e=this._draftContext(),t=this._failedDrafts.get(e);null!=t&&t.length&&(this._inputText=t.shift(),t.length||this._failedDrafts.delete(e))}get _isNarrow(){return this.narrow||this._viewportNarrow}_refreshPreviews(e=400){this._previewTimer&&clearTimeout(this._previewTimer),this._previewTimer=setTimeout(async()=>{var e;this._previewTimer=null,this.hass&&(this._previews=await async function(e,t){try{const a={type:"meshcore_chat/get_conversation_previews"};return t&&(a.entry_id=t),(await e.callWS(a)).previews||{}}catch(e){return{}}}(this.hass,null===(e=this.config)||void 0===e?void 0:e.entry_id))},e)}connectedCallback(){super.connectedCallback(),this._refreshPreviews(0),window.addEventListener(Oh,this._onLimitSettingChanged),window.addEventListener(Wd,this._onLimitSettingChanged),window.addEventListener("pointerdown",this._onOutsidePointer,!0),this.config&&!this._messageStore&&(this._messageStore=new gp(this.config),this._messageStore.setOnChange(()=>{this.requestUpdate(),this._refreshPreviews()})),this.unread&&!this._unsubUnread&&(this._unsubUnread=this.unread.subscribe(()=>{this.lastRead=this.unread.lastRead,this.requestUpdate(),this._refreshPreviews()}),this.lastRead=this.unread.lastRead,this.unread.onPostSwitchTimerFire(()=>this._checkAndMarkReadIfAtBottom())),this._mediaQuery=window.matchMedia("(max-width: 870px)"),this._viewportNarrow=this._mediaQuery.matches,this._mediaHandler=e=>{this._viewportNarrow=e.matches},this._mediaQuery.addEventListener("change",this._mediaHandler)}disconnectedCallback(){var e;super.disconnectedCallback(),window.removeEventListener(Oh,this._onLimitSettingChanged),window.removeEventListener(Wd,this._onLimitSettingChanged),window.removeEventListener("pointerdown",this._onOutsidePointer,!0),this._previewTimer&&(clearTimeout(this._previewTimer),this._previewTimer=null),this._messageStore&&(this._messageStore.destroy(),this._messageStore=null),this._unsubUnread&&(this._unsubUnread(),this._unsubUnread=null),null===(e=this.unread)||void 0===e||e.endConversation(),this._mediaQuery&&this._mediaHandler&&(this._mediaQuery.removeEventListener("change",this._mediaHandler),this._mediaQuery=null,this._mediaHandler=null)}updated(e){if(e.has("hass")&&this.hass&&this._messageStore&&this._messageStore.setHass(this.hass),e.has("config")&&this.config&&this._messageStore){this._messageStore.setConfig(this.config);const t=e.get("config");t&&t.entry_id!==this.config.entry_id&&(this.selectedId=null,this._currentEntityId=null,this._conversationResolved=!1,this._pendingScroll=null,this._lastMessageCount=0,this._lastTailKey=null,this.unread.endConversation(),this._messageStore.switchEntity(null),this.dispatchEvent(new CustomEvent("active-entity-changed",{detail:{entityId:null},bubbles:!0,composed:!0})))}if(e.has("selectedId")&&(this._onConversationSelected(),void 0!==e.get("selectedId")&&(this._replyTo=null,this._location=null,this._contact=null,this._popup=null,this._selMsgId=null)),e.has("lastRead")&&this._currentEntityId&&this._conversationResolved&&null===this._pendingScroll&&this.unread.maybeReanchorOnLateData(this._currentEntityId)&&(this._pendingScroll="last-read"),this._pendingScroll){const e=this._messageStore,t=e&&!e.loading;t&&e.messages.length>0?(this._executeScroll(this._pendingScroll),this._pendingScroll=null,this._lastMessageCount=e.messages.length,this._lastTailKey=Kd(e.messages)):t&&0===e.messages.length&&(this._pendingScroll=null)}else if(this._messageStore){const e=this._messageStore.messages.length,t=Kd(this._messageStore.messages);e>this._lastMessageCount&&this._lastMessageCount>0?this._scrollToBottomIfNearEnd():this._lastMessageCount>0&&t!==this._lastTailKey&&this._checkAndMarkReadIfAtBottom(),this._lastMessageCount=e,this._lastTailKey=t}}render(){var e,t,a,i,n,o;return this._isNarrow?this._narrowShowMessages?ad(Gt||(Gt=pc`
          <div class="chat-layout">
            <div class="chat-main narrow-full">
              <div class="narrow-header">
                <button class="back-button" @click=${0}>← Back</button>
                <span class="narrow-conv-name">${0}${0}</span>
                <div class="chat-header-actions">
                  <button class="header-action-btn" title="Search messages" aria-label="Search messages" @click=${0}><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></button>${0}
                </div>
              </div>
              ${0}
            </div>
            ${0}
          </div>
        `),()=>this._narrowShowMessages=!1,this._getConversationName(),this._renderScopeChip(),()=>{this._searchOpen=!this._searchOpen},this._renderConvMenu(),this._renderChatArea(),this._renderMessagePanel("sheet")):ad(Xt||(Xt=pc`
          <div class="chat-layout narrow-list-only">
            <meshcore-conversation-list
              .conversations=${0}
              .activeId=${0}
              .unread=${0}
              .unreadCounts=${0}
              .nodePrefix=${0}
              .previews=${0}
              @conversation-selected=${0}
              @manage-requested=${0}></meshcore-conversation-list>
            ${0}
          </div>
        `),this.conversations,this.selectedId,this.unread,this.unread.counts,(null===(n=this.config)||void 0===n?void 0:n.node_prefix)||null,this._previews,e=>{const t=e.detail.id;t===this.selectedId&&(this.unread.resetUnreadCountAtSelection(),this._pendingScroll="bottom"),this.selectedId=t,this._narrowShowMessages=!0},()=>this._onManageRequested(),this._manageOpen?ad(Yt||(Yt=pc`
              <meshcore-manage-dialog
                .hass=${0}
                .entryId=${0}
                .narrow=${0}
                .initialTab=${0}
                @manage-closed=${0}
                @contacts-changed=${0}
                @channels-changed=${0}
              ></meshcore-manage-dialog>
            `),this.hass,null===(o=this.config)||void 0===o?void 0:o.entry_id,this.narrow,this._manageInitialTab,()=>this._manageOpen=!1,this._onContactsChanged,this._onChannelsChanged):ad(Qt||(Qt=pc``))):ad(Jt||(Jt=pc`
      <div class="chat-layout">
        <meshcore-conversation-list
          .conversations=${0}
          .activeId=${0}
          .unread=${0}
          .unreadCounts=${0}
          .nodePrefix=${0}
          @conversation-selected=${0}
          @manage-requested=${0}></meshcore-conversation-list>
        <div class="chat-main">
          ${0}
          ${0}
        </div>
        ${0}
        ${0}
        ${0}
      </div>
    `),this.conversations,this.selectedId,this.unread,this.unread.counts,(null===(e=this.config)||void 0===e?void 0:e.node_prefix)||null,e=>{const t=e.detail.id;t===this.selectedId&&(this.unread.resetUnreadCountAtSelection(),this._pendingScroll="bottom"),this.selectedId=t},()=>this._onManageRequested(),this.selectedId?ad(Zt||(Zt=pc`
            <div class="narrow-header" style="display: flex; align-items: center; padding: 8px 16px;">
              <div style="flex: 1; font-size: 14px; font-weight: 500; color: var(--primary-text-color);">
                ${0}${0}
              </div>
              <div class="chat-header-actions">
                <button class="header-action-btn" title="Search messages" aria-label="Search messages" @click=${0}><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></button>${0}
              </div>
            </div>
          `),this._getConversationName(),this._renderScopeChip(),()=>{this._searchOpen=!this._searchOpen},this._renderConvMenu()):"",this._renderChatArea(),this._renderMessagePanel("side"),this._searchOpen?ad(ea||(ea=pc`
          <div class="search-panel">
            <meshcore-message-search
              .hass=${0}
              .entryId=${0}
              .entityId=${0}
              .meshNodeName=${0}
              @result-selected=${0}
              @search-close=${0}
            ></meshcore-message-search>
          </div>
        `),this.hass,null===(t=this.config)||void 0===t?void 0:t.entry_id,this._currentEntityId||void 0,null===(a=this.config)||void 0===a?void 0:a.node_name,this._onSearchResultSelected,()=>{this._searchOpen=!1}):"",this._manageOpen?ad(ta||(ta=pc`
          <meshcore-manage-dialog
            .hass=${0}
            .entryId=${0}
            .narrow=${0}
            .initialTab=${0}
            @manage-closed=${0}
            @contacts-changed=${0}
            @channels-changed=${0}
          ></meshcore-manage-dialog>
        `),this.hass,null===(i=this.config)||void 0===i?void 0:i.entry_id,this.narrow,this._manageInitialTab,()=>this._manageOpen=!1,this._onContactsChanged,this._onChannelsChanged):ad(aa||(aa=pc``)))}_renderMessagePanel(e){var t,a,i,n;if(!this._selMsgId||!this._messageStore)return ad(ia||(ia=pc``));const o=this._messageStore.messages.find(e=>e.id===this._selMsgId);if(!o)return ad(na||(na=pc``));const r=o.isOutgoing?void 0:this.conversations.find(e=>"pubkey_prefix"in e&&e.adv_name===o.sender);return ad(oa||(oa=pc`<meshcore-message-panel
      .message=${0}
      .mode=${0}
      .reactions=${0}
      .getHass=${0}
      .entryId=${0}
      ?isChannel=${0}
      .timestampFormat=${0}
      .senderConversation=${0}
      @panel-close=${0}
      @react-to-message=${0}
      @reply-to-sender=${0}
      @resend-message=${0}
      @open-conversation=${0}
    ></meshcore-message-panel>`),o,e,null!==(t=this._reactions.get(o.id))&&void 0!==t?t:[],this._getHass,null===(a=this.config)||void 0===a?void 0:a.entry_id,this._isChannelSelected(),Gd(null!==(i=null===(n=this.config)||void 0===n?void 0:n.timestamp_format)&&void 0!==i?i:"relative"),r&&r.pubkey_prefix!==this.selectedId?r.pubkey_prefix:void 0,()=>{this._selMsgId=null},e=>{e.stopPropagation(),this._onReact(e)},e=>{e.stopPropagation(),this._onReplyToSender(e)},e=>{e.stopPropagation(),this._onResendMessage(e)},e=>{e.stopPropagation(),this.selectedId=e.detail.id})}_renderChatArea(){var e,t,a,i,n,o;if(!this._messageStore||!this.selectedId)return ad(ra||(ra=pc`
        <div class="empty-state">
          <div class="empty-icon"><svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" opacity="0.5"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg></div>
          <div class="empty-text">Select a conversation to start</div>
          <div class="empty-subtext">Choose a channel or contact from the list</div>
        </div>
      `));if(!this._conversationResolved)return ad(sa||(sa=pc`
        <div class="empty-state">
          <div class="empty-icon"><svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" opacity="0.5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg></div>
          <div class="empty-text">Conversation unavailable</div>
          <div class="empty-subtext">This contact may no longer be added to the node</div>
        </div>
      `));const{visible:r,reactions:s}=function(e,t=!0){const a=[],i=new Map,n=new Map,o=new Map,r=(e,a)=>{const i="mc1"===a?n:o;let r=i.get(e.id);if(!r){const n=function(e){if(e.senderTimestamp)return[e.senderTimestamp];const t=Math.floor(e.timestamp.getTime()/1e3),a=[t];for(let e=1;e<=15;e++)a.push(t-e);return a.push(t+1,t+2),a}(e);r=new Set("mc1"===a?n.map(t=>yp(e.text,t)):n.map(a=>function(e,t,a){const i=`${e}${null!=t?t:""}${a.substring(0,5)}`;let n=0;for(let e=0;e<i.length;e++)n=n+i.charCodeAt(e)>>>0,n=n+(n<<10>>>0)>>>0,n=(n^n>>>6)>>>0;return n=n+(n<<3>>>0)>>>0,n=(n^n>>>11)>>>0,n=n+(n<<15>>>0)>>>0,n&=1073741823,0===n&&(n=1),(65535&n).toString(16).padStart(4,"0")}(a,t?e.sender:null,e.text))),i.set(e.id,r)}return r},s=new Set;for(const t of e){var l;const e=t.isSystem?null:$p(t.text);if(!e){a.push(t);continue}const n=[...a].reverse().find(t=>(!e.target||t.sender===e.target)&&r(t,e.kind).has(e.hash));if(!n)continue;const o=t.isOutgoing?"You":t.sender,c=`${n.id}|${o}|${e.emoji}`;if(s.has(c)){if(t.isOutgoing){const i=a.findIndex(e=>e.activityTarget===n.id&&e.activityText===t.text);i>=0&&a.splice(i,1),a.push(Cp(t,e.emoji,n))}continue}s.add(c);const d=null!==(l=i.get(n.id))&&void 0!==l?l:[],p=d.find(t=>t.emoji===e.emoji);p?(p.senders.push(o),p.who.push({sender:o,time:t.timestamp})):d.push({emoji:e.emoji,senders:[o],who:[{sender:o,time:t.timestamp}]}),i.set(n.id,d),t.isOutgoing&&a.push(Cp(t,e.emoji,n))}return{visible:a,reactions:i}}(this._messageStore.messages,this._isChannelSelected());this._reactions=s;const l=function(e,t){var a;const i=null!==(a=t.group_timeout)&&void 0!==a?a:300,n=!1!==t.group_messages?function(e,t){if(0===e.length)return[];const a=[];let i=null;for(const n of e)!i||n.isSystem||i.isSystem||n.sender!==i.sender||(n.timestamp.getTime()-i.endTime.getTime())/1e3>t?(i={sender:n.sender,isOutgoing:n.isOutgoing,isSystem:n.isSystem,messages:[n],startTime:n.timestamp,endTime:n.timestamp},a.push(i)):(i.messages.push(n),i.endTime=n.timestamp);return a}(e,i):e.map(e=>({sender:e.sender,isOutgoing:e.isOutgoing,isSystem:e.isSystem,messages:[e],startTime:e.timestamp,endTime:e.timestamp}));if(0===n.length)return[];const o=[];let r=null;for(const e of n){const a=e.startTime;!1===t.show_date_separators||r&&!hp(r,a)||o.push({type:"date-separator",date:a,label:up(a)}),o.push({type:"group",group:e}),r=a}return o}(r,{group_messages:null===(e=null===(t=this.config)||void 0===t?void 0:t.group_messages)||void 0===e||e,group_timeout:null!==(a=null===(i=this.config)||void 0===i?void 0:i.group_timeout)&&void 0!==a?a:300,show_date_separators:null===(n=null===(o=this.config)||void 0===o?void 0:o.show_date_separators)||void 0===n||n}),c=this._budget();return ad(la||(la=pc`
      <div class="chat-container" @message-selected=${0} @jump-to-message=${0}
          @react-to-message=${0} @reply-to-sender=${0} @resend-message=${0} @scroll=${0}>
        ${0}
        ${0}
        ${0}
        ${0}
        ${0}
        ${0}
      </div>
      <div class="input-area">
        <div class="composer">
          ${0}
          ${0}
          ${0}
          <div class="composer-body">
            <textarea
              placeholder=${0}
              aria-label="Message text. Press Enter to send, Shift+Enter for newline."
              .value=${0}
              @input=${0}
              @keydown=${0}
              ?disabled=${0}></textarea>
            <div class="composer-toolbar">
              <button class="tool-button ${0}" aria-label="Share location or contact" title="Share location or contact"
                ?disabled=${0}
                @click=${0}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
              </button>
              <button class="tool-button ${0}" aria-label="Emoji" title="Emoji"
                ?disabled=${0}
                @click=${0}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg>
              </button>
              <span class="toolbar-spacer"></span>
              <span class="byte-counter ${0}"
                title="Bytes left in this message. Accented letters use 2 bytes, most emoji 4 or more.">${0}</span>
              <button
                class="send-button"
                aria-label="Send message"
                @click=${0}
                ?disabled=${0}>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
              </button>
            </div>
          </div>
        </div>
        ${0}
        ${0}
      </div>
    `),e=>{this._selMsgId=e.detail.msg.id},e=>this._findAndHighlightBubble(e.detail.id),this._onReact,this._onReplyToSender,this._onResendMessage,this._onChatScroll,this._messageStore.loadingOlder?ad(ca||(ca=pc`<div class="loading-older"><div class="loading-spinner"></div></div>`)):ad(da||(da=pc``)),this._messageStore.error?ad(pa||(pa=pc`
              <div class="error-state">
                <span><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg></span>
                <span>${0}</span>
              </div>
            `),this._messageStore.error):ad(ha||(ha=pc``)),this._messageStore.loading&&0===r.length?ad(ua||(ua=pc`
              <div class="loading-state">
                <div class="loading-spinner"></div>
                Loading messages...
              </div>
            `)):ad(ma||(ma=pc``)),0!==l.length||this._messageStore.loading?ad(fa||(fa=pc``)):ad(ga||(ga=pc`
              <div class="empty-state">
                <div class="empty-icon"><svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" opacity="0.5"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 2l5 5h-5V4zM6 20V4h5v7h7v9H6z"/></svg></div>
                <div class="empty-text">No messages yet</div>
                <div class="empty-subtext">Be the first to send a message!</div>
              </div>
            `)),this._renderItemsWithDivider(l),this._renderNewMessagesIndicator(),this._replyTo?ad(va||(va=pc`
            <div class="composer-strip reply">
              <svg class="strip-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/></svg>
              <span class="strip-title">Replying to ${0}</span>
              <span class="strip-detail">· ${0}</span>
              <button class="strip-close" aria-label="Cancel reply" @click=${0}>✕</button>
            </div>`),this._replyTo.sender,this._replyTo.text,()=>{this._replyTo=null}):"",this._location?ad(ba||(ba=pc`
            <div class="composer-strip location">
              <span class="strip-icon loc" aria-hidden="true">📍</span>
              <span class="strip-title">Location</span>
              <span class="strip-detail">· ${0} · ${0}, ${0}</span>
              <button class="strip-close" aria-label="Remove location" @click=${0}>✕</button>
            </div>`),this._location.source,this._location.lat.toFixed(5),this._location.lon.toFixed(5),()=>{this._location=null}):"",this._contact?ad(ya||(ya=pc`
            <div class="composer-strip contact">
              <span class="strip-icon" aria-hidden="true">👤</span>
              <span class="strip-title">Contact</span>
              <span class="strip-detail">· ${0} · ${0}…</span>
              <button class="strip-close" aria-label="Remove contact" @click=${0}>✕</button>
            </div>`),this._contact.name,this._contact.publicKey.slice(0,6),()=>{this._contact=null}):"",this._location||this._contact?"Add a message (optional)...":"Type a message...",this._inputText,e=>{const t=e.target;this._inputText=t.value},e=>{"Enter"!==e.key||e.shiftKey?"Escape"===e.key&&this._popup?this._popup=null:"Escape"===e.key&&this._replyTo&&(this._replyTo=null):(e.preventDefault(),this._sendMessage())},this._sending||!this.selectedId,"plus"===this._popup?"on":"",!this.selectedId,()=>{this._popup="plus"===this._popup?null:"plus"},"emoji"===this._popup?"on":"",!this.selectedId,()=>{this._popup="emoji"===this._popup?null:"emoji"},c.over?"over":c.left<20?"low":"",c.over?c.left:`${c.left} left`,()=>this._sendMessage(),this._sending||!this.selectedId||!this._inputText.trim()&&!this._location&&!this._contact||c.over,this._renderComposerNotes(c),this._renderPopups())}_isChannelSelected(){const e=this.conversations.find(e=>"pubkey_prefix"in e?e.pubkey_prefix===this.selectedId:String(e.channel_idx)===this.selectedId);return!!e&&!("pubkey_prefix"in e)}_budget(){var e,t;return function(e,t,a=!1){const i=Dh(e),n=null!==t,o=n?Dh(`${t}: `):0,r=n&&a,s=Math.max(0,(r?155:160)-o),l=s-i;return{used:i,limit:s,left:l,over:l<0,echoUndetectable:n&&!r&&l>=0&&o+i>155,trackable:r}}(this._composedText(this._inputText),this._isChannelSelected()?null!==(e=null===(t=this.config)||void 0===t?void 0:t.node_name)&&void 0!==e?e:"":null,Ih())}_renderComposerNotes(e){if(!this.selectedId)return ad(_a||(_a=pc``));const t=this._contact&&this._inputText.trim()?ad(xa||(xa=pc`<div class="composer-note low" role="status">The MeshCore phone apps only show a contact card when it's sent on its own. With a message, they'll see the contact as a code they can copy.</div>`)):ad(wa||(wa=pc``));return ad(ka||(ka=pc`${0}${0}${0}`),this._renderLimitNote(e),this._renderLocationNote(),t)}_renderLocationNote(){const e=this._location;if(!e)return ad($a||($a=pc``));const t=this._zoneAt(e);return ad(Ca||(Ca=pc`<div class="composer-note location" role="status">
      ${0}
      ${0}
    </div>`),this._isChannelSelected()?"This is a public channel, so anyone listening can see this location.":"This shares a GPS position. Anyone who can read this conversation can see it.",t?ad(Sa||(Sa=pc`<br><strong>It's inside your zone "${0}".</strong>`),t):"")}_zoneAt(e){for(const[o,r]of Object.entries(null!==(t=null===(a=this.hass)||void 0===a?void 0:a.states)&&void 0!==t?t:{})){var t,a,i,n;if(!o.startsWith("zone."))continue;const s=r.attributes,l=Number(s.latitude),c=Number(s.longitude),d=Number(s.radius)||100;if(Number.isFinite(l)&&Number.isFinite(c)&&zp(l,c,e.lat,e.lon)<=d+(null!==(i=e.accuracy)&&void 0!==i?i:0))return String(null!==(n=s.friendly_name)&&void 0!==n?n:o)}return null}_composedText(e){if(this._location)return t=this._location.lat,a=this._location.lon,i=e,`m:${t.toFixed(6)},${a.toFixed(6)}|${i.replace(/[|\n]/g," ").trim()}|`;var t,a,i;if(this._contact){const t=Ep(this._contact.publicKey,this._contact.type,this._contact.name);return this._replyPrefix()+(e.trim()?`${e} ${t}`:t)}return this._replyPrefix()+e}_renderPopups(){return ad(Aa||(Aa=pc`
      ${0}
      ${0}
      ${0}
      ${0}
      ${0}
    `),"emoji"===this._popup?ad(Ma||(Ma=pc`<div class="popup" @emoji-picked=${0}><meshcore-emoji-picker></meshcore-emoji-picker></div>`),this._insertEmoji):"","plus"===this._popup?ad(Fa||(Fa=pc`<div class="popup menu">
        <button @click=${0}>📍 Share location</button>
        <button @click=${0}>👤 Share contact</button>
      </div>`),()=>{this._popup=null,this._picker="location"},()=>{this._popup=null,this._openContactPicker()}):"","location"===this._picker?ad(Ea||(Ea=pc`<meshcore-location-picker .hass=${0}
        @close=${0}
        @location-picked=${0}></meshcore-location-picker>`),this.hass,()=>{this._picker=null},e=>{this._picker=null,this._replyTo=null,this._contact=null,this._location=e.detail,this._focusInput()}):"","contact"===this._picker?ad(Da||(Da=pc`<meshcore-contact-picker
        .contacts=${0}
        .own=${0}
        @close=${0}
        @contact-picked=${0}></meshcore-contact-picker>`),this.conversations.filter(e=>"pubkey_prefix"in e),this._ownContact,()=>{this._picker=null},e=>{this._picker=null,this._location=null,this._contact=e.detail,this._focusInput()}):"",this._confirmLocation&&this._location?ad(za||(za=pc`
        <div class="confirm-backdrop" @click=${0}>
          <div class="confirm" role="dialog" aria-label="Send location?" @click=${0}>
            <div class="confirm-title">Send this location?</div>
            <meshcore-location-map style="margin-bottom:10px" .getHass=${0} .lat=${0} .lon=${0} .label=${0}></meshcore-location-map>
            <div class="confirm-text">${0} · ${0}, ${0}<br>
              ${0}</div>
            <div class="confirm-actions">
              <button class="secondary" @click=${0}>Cancel</button>
              <button class="primary" @click=${0}>Send location</button>
            </div>
          </div>
        </div>`),()=>{this._confirmLocation=!1},e=>e.stopPropagation(),this._getHass,this._location.lat,this._location.lon,this._inputText.trim(),this._location.source,this._location.lat.toFixed(5),this._location.lon.toFixed(5),this._isChannelSelected()?"Everyone on this channel will see it.":"They will see where this is.",()=>{this._confirmLocation=!1},()=>{this._confirmLocation=!1,this._sendMessage(!0)}):"")}_focusInput(){this.updateComplete.then(()=>{var e;null===(e=this.renderRoot.querySelector(".composer textarea"))||void 0===e||e.focus()})}_insertEmoji(e){var t,a;const i=e.detail.emoji,n=this.renderRoot.querySelector(".composer textarea"),o=null!==(t=null==n?void 0:n.selectionStart)&&void 0!==t?t:this._inputText.length,r=null!==(a=null==n?void 0:n.selectionEnd)&&void 0!==a?a:o;this._inputText=this._inputText.slice(0,o)+i+this._inputText.slice(r),this._popup=null,this.updateComplete.then(()=>{n&&(n.focus(),n.selectionStart=n.selectionEnd=o+i.length)})}async _openContactPicker(){var e,t;if(this._picker="contact",this._ownContact||!this.hass)return;const a=await Id(this.hass),i=null!==(e=a.find(e=>{var t;return e.entry_id===(null===(t=this.config)||void 0===t?void 0:t.entry_id)}))&&void 0!==e?e:a[0];null!=i&&i.pubkey&&64===i.pubkey.length&&(this._ownContact={publicKey:i.pubkey,name:i.name||(null===(t=this.config)||void 0===t?void 0:t.node_name)||"Me"})}_onReact(e){const{emoji:t,msg:a}=e.detail;this._sendText(function(e,t,a){var i;const n=null!==(i=t.senderTimestamp)&&void 0!==i?i:Math.floor(t.timestamp.getTime()/1e3),o=yp(t.text,n);return a?`@[${t.sender}]${e}\n${o}`:`${e}\n${o}`}(t,a,this._isChannelSelected()))}_renderLimitNote(e){let t=ad(Oa||(Oa=pc``));if(e.over){const a=-e.left;t=e.trackable?ad(Ia||(Ia=pc`${0} ${0} over the trackable limit. Shorten it to send, or allow longer channel messages in Settings.`),a,1===a?"byte":"bytes"):ad(Ra||(Ra=pc`${0} ${0} too long. Shorten it to send.`),a,1===a?"byte":"bytes")}else{if(!e.echoUndetectable)return ad(qa||(qa=pc``));t=ad(Ta||(Ta=pc`Long message: repeats can't be detected, so it'll show as Unheard.`))}return ad(Ba||(Ba=pc`<div class="composer-note ${0}" role="status">${0}</div>`),e.over?"over":"low",t)}_renderItemsWithDivider(e){const t=this._isChannelSelected(),a=[];let i=0,n=!1;const o=this.unread.dividerAfterGroupIdx(e);for(const d of e){var r,s,l,c;"date-separator"!==d.type?(n||null===o||i!==o||(a.push(ad(ja||(ja=pc`
          <div class="unread-divider">
            <span>New messages</span>
          </div>
        `))),n=!0),a.push(ad(Pa||(Pa=pc`
        <meshcore-message-bubble
          .group=${0}
          .getHass=${0}
          .quoteFor=${0}
          .selectedId=${0}
          .reactionsFor=${0}
          .entryId=${0}
          ?isChannel=${0}
          .timestampFormat=${0}></meshcore-message-bubble>
      `),d.group,this._getHass,this._quoteFor,null!==(r=this._selMsgId)&&void 0!==r?r:void 0,this._reactionsFor,null===(s=this.config)||void 0===s?void 0:s.entry_id,t,Gd(null!==(l=null===(c=this.config)||void 0===c?void 0:c.timestamp_format)&&void 0!==l?l:"relative"))),i++):a.push(ad(Na||(Na=pc`
          <div class="date-separator">
            <span>${0}</span>
          </div>
        `),d.label))}return a}_renderNewMessagesIndicator(){const e=this._messageStore;if(!e)return ad(La||(La=pc``));const t=e.newMessagesWhileAway,a=e.hasNewerMessages;if(null!==this._pendingScroll||this._scrollInFlight)return ad(Ha||(Ha=pc``));const i=function(e){return e.counter>0?`↓ ${e.counter} new`:e.hasNewer||e.hasContentBelow?e.cursorAtTail&&!e.hasNewer?"↓ latest":"↓ unread":null}({counter:t,hasNewer:a,hasContentBelow:this._hasContentBelowViewport(),cursorAtTail:this.unread.cursorAtTail(this._currentEntityId,this._latestNonTempMessageId())});return null===i?ad(Va||(Va=pc``)):ad(Ka||(Ka=pc`
      <button class="new-messages-indicator" @click=${0}>
        ${0}
      </button>
    `),this._jumpToBottom,i)}_onConversationSelected(){if(this._restoreFailedDraft(),this.selectedId&&this._messageStore&&this.config&&this.hass){var e;const t=this.conversations.find(e=>"pubkey_prefix"in e?e.pubkey_prefix===this.selectedId:String(e.channel_idx)===this.selectedId);if(!t)return this._conversationResolved=!1,this._currentEntityId=null,void(this._messageStore&&this._messageStore.switchEntity(null));this._conversationResolved=!0;let a=null;if("pubkey_prefix"in t){const e=t.pubkey_prefix;a=function(e,t,a){const i=a.substring(0,6);if(t.contact_entity_pattern&&t.node_prefix){const a=t.contact_entity_pattern.replace("{prefix}",t.node_prefix).replace("{contact}",i);if(e.states[a])return a}const n=`_${i}_messages`,o=t.node_prefix?`_${t.node_prefix}_`:"";for(const t of Object.keys(e.states))if(t.startsWith("binary_sensor.")&&t.endsWith(n)&&(!o||t.includes(o)))return t;return null}(this.hass,this.config,e)}else{const e=t.channel_idx;a=function(e,t,a){if(t.channel_entity_pattern&&t.node_prefix){const i=t.channel_entity_pattern.replace("{prefix}",t.node_prefix).replace("{idx}",String(a));if(e.states[i])return i}const i=`_ch_${a}_messages`,n=t.node_prefix?`_${t.node_prefix}_`:"";for(const t of Object.keys(e.states))if(t.startsWith("binary_sensor.")&&t.endsWith(i)&&(!n||t.includes(n)))return t;return null}(this.hass,this.config,e)}this._currentEntityId=a,this.dispatchEvent(new CustomEvent("active-entity-changed",{detail:{entityId:a},bubbles:!0,composed:!0}));const i=this._getUnreadCountForSelected(),n=a&&(null===(e=this.lastRead)||void 0===e?void 0:e[a])||null;this._pendingScroll=n||i>0?"last-read":"bottom",this._lastMessageCount=0,this._lastTailKey=null,this.unread.beginConversation(a,i),this._messageStore.switchEntity(a,n)}}async _sendMessage(e=!1){if(this._sending||!this._inputText.trim()&&!this._location&&!this._contact||!this.selectedId||!this.hass||!this.config)return;if(this._budget().over)return;if(this._location&&!e)return void(this._confirmLocation=!0);const t=this._composedText(this._inputText.trim());this._replyTo&&!this._location&&function(e,t,a){try{const i=oh();i[rh(e,t)]={sender:a.sender,text:a.text};const n=Object.keys(i);for(const e of n.slice(0,Math.max(0,n.length-300)))delete i[e];localStorage.setItem(ih,JSON.stringify(i))}catch(e){}}(this.selectedId,t,this._replyTo),this._inputText="",this._replyTo=null,this._location=null,this._contact=null,await this._sendText(t,!0)}async _sendText(e,t=!1){if(this._sending||!e.trim()||!this.selectedId||!this.hass||!this.config)return;if(!this._conversationResolved)return void console.warn("Cannot send — conversation not resolved");this._sending=!0;const a=this._draftContext(),i=this.selectedId,n=this.config.entry_id,o=this._messageStore;let r;try{if(this._messageStore&&(r=this._messageStore.addOptimisticMessage(this.config.node_name,e),this._pendingScroll="bottom"),this._isContact())await async function(e,t,a,i){try{const n={pubkey_prefix:t,message:a};i&&(n.entry_id=i),await e.callService("meshcore","send_message",n)}catch(e){throw new Error(`Failed to send direct message: ${String(e)}`)}}(this.hass,i,e,n);else{var s;const t=parseInt(i,10);if(isNaN(t)||t<0||t>255)throw new Error("Invalid channel index");await async function(e,t,a,i,n){try{const o={channel_idx:t,message:a};i&&(o.entry_id=i),n&&(o.scope=n),await e.callService("meshcore","send_channel_message",o)}catch(e){throw new Error(`Failed to send channel message: ${String(e)}`)}}(this.hass,t,e,n,null!==(s=this._getActiveChannelScope())&&void 0!==s?s:void 0)}r&&(null==o||o.confirmOptimisticMessage(r))}catch(i){if(console.error("Failed to send message:",i),r&&(null==o||o.markOptimisticFailed(r)),t){var l;const t=null!==(l=this._failedDrafts.get(a))&&void 0!==l?l:[];t.push(e),this._failedDrafts.set(a,t),a===this._draftContext()&&this._restoreFailedDraft()}}finally{this._sending=!1,a===this._draftContext()&&this._restoreFailedDraft()}}_latestNonTempMessageId(){var e,t;const a=null!==(e=null===(t=this._messageStore)||void 0===t?void 0:t.messages)&&void 0!==e?e:[];for(let e=a.length-1;e>=0;e--){const t=a[e].id;if(!t.startsWith("rt_")&&!t.startsWith("optimistic_"))return t}return null}_isContact(){return!!this.selectedId&&!/^\d+$/.test(this.selectedId)}_selectedContactObj(){if(!this._isChannelSelected())return this.conversations.find(e=>"pubkey_prefix"in e&&e.pubkey_prefix===this.selectedId)}_convAction(e){this._convMenuOpen=!1;const t=this._selectedContactObj();switch(e){case"manage-channels":this._manageInitialTab="channels",this._manageOpen=!0;break;case"manage-contacts":this._manageInitialTab="contacts",this._manageOpen=!0;break;case"search":this._searchOpen=!0;break;case"trace":case"show-on-map":t&&this.dispatchEvent(new CustomEvent("node-action",{detail:{action:e,node:t},bubbles:!0,composed:!0}))}}_renderConvMenu(){const e=this._isChannelSelected();return ad(Ua||(Ua=pc`
      <span class="conv-menu-wrap">
        <button class="header-action-btn" title="More" aria-label="More" aria-haspopup="menu"
          @click=${0}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 8a2 2 0 100-4 2 2 0 000 4zm0 2a2 2 0 100 4 2 2 0 000-4zm0 6a2 2 0 100 4 2 2 0 000-4z"/></svg>
        </button>
        ${0}
      </span>
    `),()=>{this._convMenuOpen=!this._convMenuOpen},this._convMenuOpen?ad(Wa||(Wa=pc`
          <div class="conv-menu" role="menu">
            ${0}
            <button role="menuitem" @click=${0}>Search this conversation</button>
          </div>`),e?ad(Ga||(Ga=pc`
                  <button role="menuitem" @click=${0}>Edit channel and region scope</button>`),()=>this._convAction("manage-channels")):ad(Xa||(Xa=pc`
                  <button role="menuitem" @click=${0}>Show on map</button>
                  <button role="menuitem" @click=${0}>Trace route</button>
                  <button role="menuitem" @click=${0}>Manage contacts</button>`),()=>this._convAction("show-on-map"),()=>this._convAction("trace"),()=>this._convAction("manage-contacts")),()=>this._convAction("search")):"")}_onManageRequested(){this._manageInitialTab="contacts",this._manageOpen=!0}_onContactsChanged(){this.dispatchEvent(new CustomEvent("contacts-changed",{bubbles:!0,composed:!0}))}_onChannelsChanged(){this.dispatchEvent(new CustomEvent("channels-changed",{bubbles:!0,composed:!0}))}_onReplyToSender(e){const{sender:t,text:a}=e.detail;t&&(this._replyTo={sender:t,text:null!=a?a:""},this._location=null,this.updateComplete.then(()=>{var e;null===(e=this.renderRoot.querySelector(".composer textarea"))||void 0===e||e.focus()}))}_onResendMessage(e){var t;const a=null===(t=e.detail)||void 0===t?void 0:t.text;a&&this._sendText(a)}_replyPrefix(){return this._replyTo?`@[${this._replyTo.sender}] `:""}_getConversationName(){if(!this.selectedId)return"";const e=this.conversations.find(e=>"pubkey_prefix"in e?e.pubkey_prefix===this.selectedId:String(e.channel_idx)===this.selectedId);return e?"pubkey_prefix"in e?e.adv_name:e.name:this.selectedId}_getActiveChannelScope(){if(!this.selectedId||this._isContact())return null;const e=this.conversations.find(e=>!("pubkey_prefix"in e)&&String(e.channel_idx)===this.selectedId);return e&&e.scope||null}_renderScopeChip(){const e=this._getActiveChannelScope();return e?ad(Ya||(Ya=pc`<button
      class="scope-chip"
      title="Region scope: messages on this channel flood only through '${0}' repeaters. Click to manage."
      aria-label="Region scope ${0} — manage channels"
      @click=${0}>🌐 ${0}</button>`),e,e,()=>{this._manageInitialTab="channels",this._manageOpen=!0},e):""}_getChatContainer(){var e;return null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(".chat-container")}_isScrollGuarded(){return this._scrollInFlight||Date.now()<this._scrollGuardUntil}_executeScroll(e){this._scrollInFlight=!0,"last-read"===e&&(this._scrollGuardUntil=Date.now()+2e3),this._doScrollWithRetry(e,0)}_doScrollWithRetry(e,t){this.updateComplete.then(()=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{const a=this._getChatContainer();if(!a)return void(this._scrollInFlight=!1);if("bottom"===e)return a.scrollTop=a.scrollHeight,void(this._scrollInFlight=!1);const i=a.querySelector(".unread-divider");if(i){const e=a.getBoundingClientRect(),t=i.getBoundingClientRect();a.scrollTop+=t.top-e.top,this._scrollInFlight=!1}else t<10?setTimeout(()=>this._doScrollWithRetry(e,t+1),50):(a.scrollTop=a.scrollHeight,this._scrollInFlight=!1)})})})}_scrollToBottomIfNearEnd(){if(this._isScrollGuarded())return;const e=this._messageStore;null!=e&&e.hasNewerMessages||this.updateComplete.then(()=>{requestAnimationFrame(()=>{if(this._isScrollGuarded())return;const e=this._getChatContainer();e&&e.scrollHeight-e.scrollTop-e.clientHeight<150&&(e.scrollTop=e.scrollHeight,this._checkAndMarkReadIfAtBottom())})})}_onChatScroll(e){const t=e.target,a=this._messageStore;if(!t||!a)return;const i=t.scrollTop,n=t.scrollHeight-t.scrollTop-t.clientHeight<150;if(a.setUserAtBottom(n),i<150&&a.hasOlderMessages&&!a.loadingOlder&&!this._isScrollGuarded()){const e=t.scrollHeight;a.loadOlderMessages().then(()=>{this.updateComplete.then(()=>{requestAnimationFrame(()=>{const a=t.scrollHeight-e;a>0&&(t.scrollTop+=a)})})})}n&&(a.hasNewerMessages&&!a.loadingNewer?a.loadNewerMessages():a.hasNewerMessages||this._checkAndMarkReadIfAtBottom())}_isLastMessageVisible(){const e=this._getChatContainer();if(!e)return!1;const t=e.querySelectorAll("meshcore-message-bubble"),a=t[t.length-1];if(!a)return!1;const i=e.getBoundingClientRect().bottom;return a.getBoundingClientRect().bottom<=i+5}_hasContentBelowViewport(){var e,t;return!!this._getChatContainer()&&(0!==(null!==(e=null===(t=this._messageStore)||void 0===t?void 0:t.messages.length)&&void 0!==e?e:0)&&!this._isLastMessageVisible())}_checkAndMarkReadIfAtBottom(){const e=this._messageStore;this._currentEntityId&&e&&this.unread.onScrollState({entityId:this._currentEntityId,lastMessageVisible:this._isLastMessageVisible(),hasNewerMessages:e.hasNewerMessages,bufferTailId:Kd(e.messages)})&&e.resetNewMessagesCounter()}async _jumpToBottom(){const e=this._messageStore;if(e){for(;e.hasNewerMessages&&!e.loadingNewer;)await e.loadNewerMessages();await this.updateComplete,requestAnimationFrame(()=>{const t=this._getChatContainer();t&&(t.scrollTop=t.scrollHeight,this._currentEntityId&&this.unread.onPillJump({entityId:this._currentEntityId,bufferTailId:Kd(e.messages)})&&e.resetNewMessagesCounter())})}}_getUnreadCountForSelected(){var e,t;return this.selectedId&&this.unread?this.unread.badgeCount(this.selectedId,null!==(e=null===(t=this.config)||void 0===t?void 0:t.node_prefix)&&void 0!==e?e:null,this._currentEntityId):0}_onSearchResultSelected(e){const{entityId:t,messageId:a,timestamp:i}=e.detail;t&&this._messageStore&&(this._messageStore.switchEntity(t),this._currentEntityId=t),a&&this._scrollToAndHighlight(a,i)}_scrollToAndHighlight(e,t){this.updateComplete.then(()=>{requestAnimationFrame(()=>{this._findAndHighlightBubble(e)||t&&this._messageStore&&this._messageStore.fetchAroundTimestamp(t).then(t=>{t&&this.updateComplete.then(()=>{requestAnimationFrame(()=>{this._findAndHighlightBubble(e)})})})})})}_findAndHighlightBubble(e){var t;const a=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".chat-container");if(!a)return!1;const i=a.querySelectorAll("meshcore-message-bubble");for(const t of Array.from(i)){var n;const a=null===(n=t.shadowRoot)||void 0===n?void 0:n.querySelector(`[data-msg-id="${e}"]`);if(a)return a.scrollIntoView({behavior:"smooth",block:"center"}),a.classList.add("search-highlight"),setTimeout(()=>a.classList.remove("search-highlight"),2500),!0}return!1}};Rh.styles=bc(Qa||(Qa=pc`
    :host {
      display: flex;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .chat-layout {
      display: flex;
      width: 100%;
      height: 100%;
      gap: 0;
    }

    .chat-main {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      background: var(--chat-bg);
    }

    .chat-container {
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
      padding: 8px 12px;
      background: var(--chat-bg);
      position: relative;
      /* Disable browser-level scroll anchoring. The lazy-load-older
       * path in _onChatScroll manually preserves scroll position by
       * adding the prepended content height to scrollTop. With the
       * default (overflow-anchor: auto), the browser ALSO shifts
       * scrollTop by the prepended height -- and the two
       * compensations stack, landing the viewport past the divider
       * at the new buffer tail. That misfires mark-read on channel
       * re-entry. See 2026-05-15 unread-clearing investigation. */
      overflow-anchor: none;
    }

    .chat-container::-webkit-scrollbar {
      width: 6px;
    }

    .chat-container::-webkit-scrollbar-track {
      background: transparent;
    }

    .chat-container::-webkit-scrollbar-thumb {
      background: var(--scrollbar-thumb, var(--scrollbar-thumb-color, #c1c1c1));
      border-radius: 3px;
    }

    .input-area {
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding: 8px 12px 10px;
      border-top: 1px solid var(--divider-color, #e0e0e0);
      background: var(--input-bg);
      flex-shrink: 0;
    }

    .composer {
      border: 1px solid var(--input-border);
      border-radius: 14px;
      background: var(--chat-bg);
      overflow: hidden;
      transition: border-color 0.2s;
    }
    .composer:focus-within {
      border-color: var(--primary-color, #03a9f4);
    }

    .composer-strip {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 6px 10px;
      font-size: 12px;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      min-width: 0;
    }
    .composer-strip.contact {
      background: rgba(3, 169, 244, 0.12);
    }
    .composer-strip.location {
      background: rgba(255, 166, 0, 0.14);
    }
    .composer-note.location {
      color: var(--warning-color, #ffa600);
    }
    .tool-button {
      border: none;
      background: none;
      color: var(--secondary-text-color, #727272);
      cursor: pointer;
      padding: 4px;
      border-radius: 50%;
      display: flex;
    }
    .tool-button:hover, .tool-button.on { color: var(--primary-color, #03a9f4); background: rgba(127, 127, 127, 0.15); }
    .tool-button:disabled { opacity: 0.4; cursor: default; }
    .toolbar-spacer { flex: 1; }
    .input-area { position: relative; }
    .popup {
      position: absolute;
      bottom: calc(100% - 4px);
      left: 12px;
      z-index: 20;
      background: var(--card-background-color, #1c1c1c);
      border: 1px solid var(--divider-color, #444);
      border-radius: 12px;
      padding: 8px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.35);
    }
    .popup.menu { display: flex; flex-direction: column; padding: 4px; }
    .popup.menu button {
      background: none; border: none; color: var(--primary-text-color); text-align: left;
      padding: 10px 14px; border-radius: 8px; cursor: pointer; font: inherit;
    }
    .popup.menu button:hover { background: rgba(127, 127, 127, 0.15); }
    .confirm-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 1000; display: flex; align-items: center; justify-content: center; }
    .confirm { background: var(--card-background-color, #1c1c1c); color: var(--primary-text-color); border-radius: 12px; padding: 16px; width: 340px; max-width: calc(100vw - 32px); }
    .confirm-title { font-weight: 600; font-size: 16px; margin-bottom: 8px; }
    .confirm-text { font-size: 14px; opacity: 0.85; margin-bottom: 14px; }
    .confirm-actions { display: flex; justify-content: flex-end; gap: 8px; }
    .confirm-actions button { padding: 8px 14px; border-radius: 8px; border: none; cursor: pointer; font: inherit; }
    .confirm-actions .primary { background: var(--primary-color, #03a9f4); color: #fff; }
    .confirm-actions .secondary { background: none; color: inherit; border: 1px solid var(--divider-color, #444); }
    .composer-strip.reply {
      background: var(--secondary-background-color, rgba(127, 127, 127, 0.1));
    }
    .strip-icon {
      color: var(--primary-color, #03a9f4);
      flex-shrink: 0;
    }
    .strip-title {
      font-weight: 600;
      white-space: nowrap;
      color: var(--primary-text-color);
    }
    .strip-detail {
      color: var(--secondary-text-color, #727272);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      flex: 1;
      min-width: 0;
    }
    .strip-close {
      border: none;
      background: none;
      color: var(--secondary-text-color, #727272);
      cursor: pointer;
      font-size: 13px;
      padding: 2px 4px;
      flex-shrink: 0;
    }

    .composer-body {
      padding: 6px 8px 6px 12px;
    }

    .composer-toolbar {
      display: flex;
      align-items: center;
      gap: 10px;
      border-top: 1px solid var(--divider-color, #e0e0e0);
      padding-top: 6px;
    }

    .byte-counter {
      margin-left: auto;
      white-space: nowrap;
      font-size: 11px;
      font-variant-numeric: tabular-nums;
      color: var(--secondary-text-color, #727272);
      opacity: 0.8;
    }
    .byte-counter.low { color: var(--warning-color, #ff9800); opacity: 1; }
    .byte-counter.over { color: var(--error-color, #db4437); opacity: 1; font-weight: 600; }

    .composer .send-button {
      width: 34px;
      height: 34px;
    }
    .composer .send-button svg {
      width: 17px;
      height: 17px;
    }

    .composer-note {
      font-size: 12px;
      padding: 0 6px;
    }
    .composer-note.low { color: var(--warning-color, #ff9800); }
    .composer-note.over { color: var(--error-color, #db4437); }

    .input-area textarea {
      width: 100%;
      box-sizing: border-box;
      display: block;
      padding: 4px 0 8px;
      border: none !important;
      border-radius: 0;
      background: transparent;
      color: var(--primary-text-color);
      font-size: 14px;
      font-family: inherit;
      resize: none;
      outline: none;
      max-height: 120px;
      min-height: 32px;
      line-height: 1.4;
    }

    .input-area textarea:focus {
      border-color: var(--primary-color, #03a9f4);
    }

    .input-area textarea::placeholder {
      color: var(--secondary-text-color, #727272);
    }

    .input-area textarea:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .send-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      border: none;
      border-radius: 50%;
      background: var(--primary-color, #03a9f4);
      color: #fff;
      cursor: pointer;
      flex-shrink: 0;
      transition: opacity 0.15s, transform 0.15s;
    }

    .send-button:hover {
      opacity: 0.9;
    }

    .send-button:active {
      transform: scale(0.95);
    }

    .send-button:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .send-button svg {
      width: 20px;
      height: 20px;
      /* Optical centering: the right-pointing icon's visual mass sits
         ~2px left of its bounding-box center at this size, so a
         geometrically centered glyph reads as shifted left. */
      transform: translateX(2px);
    }

    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: var(--secondary-text-color, #727272);
      text-align: center;
      padding: 32px 16px;
    }

    .empty-icon {
      font-size: 48px;
      margin-bottom: 16px;
      opacity: 0.5;
    }

    .empty-text {
      font-size: 16px;
      margin-bottom: 8px;
    }

    .empty-subtext {
      font-size: 13px;
      opacity: 0.7;
    }

    .error-state {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 16px;
      color: var(--error-color, #db4437);
      font-size: 13px;
      background: rgba(219, 68, 55, 0.08);
      border-radius: 8px;
      margin: 8px 12px;
    }

    .loading-state {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
      color: var(--secondary-text-color, #727272);
      font-size: 14px;
      gap: 8px;
    }

    .loading-older {
      display: flex;
      justify-content: center;
      padding: 12px;
    }

    .loading-spinner {
      width: 20px;
      height: 20px;
      border: 2px solid var(--divider-color, #e0e0e0);
      border-top-color: var(--primary-color, #03a9f4);
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    .date-separator {
      display: flex;
      align-items: center;
      gap: 12px;
      margin: 16px 0 12px;
      color: var(--secondary-text-color, #727272);
      font-size: 12px;
      font-weight: 500;
    }

    .date-separator::before,
    .date-separator::after {
      content: '';
      flex: 1;
      height: 1px;
      background: var(--divider-color, #e0e0e0);
    }

    .unread-divider {
      display: flex;
      align-items: center;
      gap: 12px;
      margin: 12px 0;
      color: var(--error-color, #db4437);
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.3px;
    }

    .unread-divider::before,
    .unread-divider::after {
      content: '';
      flex: 1;
      height: 1px;
      background: var(--error-color, #db4437);
      opacity: 0.5;
    }

    .narrow-header {
      display: flex;
      align-items: center;
      padding: 12px 16px;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      background: var(--card-background-color, #fff);
      flex-shrink: 0;
    }

    .back-button {
      padding: 8px 12px;
      border: none;
      background: transparent;
      color: var(--primary-color, #03a9f4);
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.15s;
    }

    .back-button:hover {
      background: rgba(0, 0, 0, 0.05);
      border-radius: 4px;
    }

    .narrow-conv-name {
      flex: 1;
      font-size: 14px;
      font-weight: 500;
      color: var(--primary-text-color);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    /* Region-scope indicator next to the channel name in the thread
       header. Always visible while a scoped channel is active so the
       user knows what scope they're sending under without opening the
       channel-edit dialog. */
    .scope-chip {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      margin-left: 8px;
      padding: 1px 8px;
      border: none;
      border-radius: 10px;
      background: var(--secondary-background-color, rgba(127, 127, 127, 0.15));
      color: var(--secondary-text-color);
      font-size: 12px;
      line-height: 18px;
      vertical-align: middle;
      cursor: pointer;
      white-space: nowrap;
    }

    .scope-chip:hover {
      color: var(--primary-text-color);
    }

    .narrow-full {
      width: 100% !important;
    }

    .narrow-list-only {
      width: 100% !important;
    }

    .narrow-list-only meshcore-conversation-list {
      width: 100% !important;
      flex-shrink: 1;
    }

    .conv-menu-wrap {
      position: relative;
      display: inline-flex;
    }

    .conv-menu {
      position: absolute;
      right: 0;
      top: calc(100% + 4px);
      z-index: 50;
      min-width: 230px;
      background: var(--card-background-color, #fff);
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 8px;
      padding: 4px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
    }

    .conv-menu button {
      display: block;
      width: 100%;
      text-align: left;
      padding: 8px 12px;
      border: none;
      border-radius: 6px;
      background: none;
      color: var(--primary-text-color);
      font: inherit;
      font-size: 13px;
      cursor: pointer;
    }

    .conv-menu button:hover {
      background: rgba(127, 127, 127, 0.12);
    }

    .chat-header-actions {
      display: flex;
      align-items: center;
      gap: 4px;
      margin-left: auto;
    }

    .header-action-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border: none;
      border-radius: 50%;
      background: transparent;
      color: var(--secondary-text-color);
      cursor: pointer;
      transition: all 0.15s;
      font-size: 16px;
    }

    .header-action-btn:hover {
      background: rgba(0, 0, 0, 0.05);
      color: var(--primary-text-color);
    }

    .search-panel {
      width: 300px;
      border-left: 1px solid var(--divider-color, #e0e0e0);
      background: var(--card-background-color, #fff);
      flex-shrink: 0;
      overflow: hidden;
    }

    /* "↓ N new" indicator. Shown when new messages
       arrived while scrolled away from the bottom OR when the buffer
       tail isn't yet the conversation's newest message. Click loads
       any unloaded newer messages, scrolls to bottom, and fires
       mark-read. Sticky-positioned at the bottom of the chat
       container so it sits above the input area while scrolled. */
    .new-messages-indicator {
      position: sticky;
      bottom: 12px;
      /* 'align-self: center' requires a flex parent (chat-
         container is 'display: block'); 'margin: 0 auto' requires a
         block-level element with finite width (button defaults to
         'inline-block'). Both were no-ops. Using left + transform
         works with sticky positioning regardless of parent layout. */
      left: 50%;
      transform: translateX(-50%);
      padding: 6px 14px;
      border: none;
      border-radius: 16px;
      background: var(--primary-color, #03a9f4);
      color: #fff;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
      transition: opacity 0.15s, transform 0.15s;
      z-index: 2;
    }

    .new-messages-indicator:hover {
      opacity: 0.92;
    }

    .new-messages-indicator:active {
      /* Combine the centering transform with the press
         offset. A single 'transform' declaration replaces any prior
         one, so ':active' must restate both. */
      transform: translateX(-50%) translateY(1px);
    }
  `)),hc([Sd({type:Object})],Rh.prototype,"hass",void 0),hc([Ad()],Rh.prototype,"_popup",void 0),hc([Ad()],Rh.prototype,"_picker",void 0),hc([Ad()],Rh.prototype,"_location",void 0),hc([Ad()],Rh.prototype,"_confirmLocation",void 0),hc([Ad()],Rh.prototype,"_contact",void 0),hc([Ad()],Rh.prototype,"_ownContact",void 0),hc([Ad()],Rh.prototype,"_selMsgId",void 0),hc([Sd({type:Object})],Rh.prototype,"config",void 0),hc([Sd({type:Array})],Rh.prototype,"conversations",void 0),hc([Sd({type:String})],Rh.prototype,"selectedId",void 0),hc([Sd({type:Boolean})],Rh.prototype,"narrow",void 0),hc([Sd({attribute:!1})],Rh.prototype,"unread",void 0),hc([Sd({type:Object})],Rh.prototype,"lastRead",void 0),hc([Ad()],Rh.prototype,"_messageStore",void 0),hc([Ad()],Rh.prototype,"_inputText",void 0),hc([Ad()],Rh.prototype,"_replyTo",void 0),hc([Ad()],Rh.prototype,"_sending",void 0),hc([Ad()],Rh.prototype,"_viewportNarrow",void 0),hc([Ad()],Rh.prototype,"_narrowShowMessages",void 0),hc([Ad()],Rh.prototype,"_manageOpen",void 0),hc([Ad()],Rh.prototype,"_manageInitialTab",void 0),hc([Ad()],Rh.prototype,"_searchOpen",void 0),hc([Ad()],Rh.prototype,"_currentEntityId",void 0),hc([Ad()],Rh.prototype,"_conversationResolved",void 0),hc([Ad()],Rh.prototype,"_pendingScroll",void 0),hc([Ad()],Rh.prototype,"_previews",void 0),hc([Ad()],Rh.prototype,"_convMenuOpen",void 0),Rh=hc([kd("meshcore-chat-page")],Rh);class Th{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,a){this._$Ct=e,this._$AM=t,this._$Ci=a}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const qh=(Bh=class extends Th{constructor(e){if(super(e),this._timer=null,this._startX=0,this._startY=0,this._attached=!1,this._callback=null,this._element=null,this._onPointerDown=e=>this._handleDown(e),this._onPointerUp=()=>this._cancelTimer(),this._onPointerMove=e=>this._handleMove(e),this._onContextMenu=e=>{null!==this._timer&&e.preventDefault()},6!==e.type)throw new Error("longPress directive must be used on an element")}render(e){}update(e,[t]){if(this._callback=t,!this._attached){this._element=e.element;const t=this._element;t.addEventListener("pointerdown",this._onPointerDown),t.addEventListener("pointerup",this._onPointerUp),t.addEventListener("pointercancel",this._onPointerUp),t.addEventListener("pointermove",this._onPointerMove),t.addEventListener("contextmenu",this._onContextMenu),this._attached=!0}return this.render(t)}_handleDown(e){0===e.button&&(this._startX=e.clientX,this._startY=e.clientY,this._cancelTimer(),this._timer=setTimeout(()=>{var e;this._timer=null,null===(e=this._callback)||void 0===e||e.call(this)},500))}_handleMove(e){if(null===this._timer)return;const t=e.clientX-this._startX,a=e.clientY-this._startY;t*t+a*a>100&&this._cancelTimer()}_cancelTimer(){null!==this._timer&&(clearTimeout(this._timer),this._timer=null)}},(...e)=>({_$litDirective$:Bh,values:e}));var Bh;let Nh=class extends xd{constructor(){super(...arguments),this.entityId="",this.label="",this.icon="",this.colorScheme="neutral"}render(){var e,t,a;if(!this.hass||!this.entityId)return od;const i=this.hass.states[this.entityId];if(!i)return od;const n=i.state,o=(null===(e=i.attributes)||void 0===e?void 0:e.unit_of_measurement)||"",r=this.label||(null===(t=i.attributes)||void 0===t?void 0:t.friendly_name)||this.entityId,s="unavailable"===n||"unknown"===n,l=null===(a=this.hass.entities)||void 0===a||null===(a=a[this.entityId])||void 0===a?void 0:a.display_precision;let c="";if("battery"===this.colorScheme){const e=parseFloat(n);isNaN(e)||(c=e>50?"battery-high":e>20?"battery-medium":"battery-low")}else"signal"===this.colorScheme&&(c="signal");return ad(Ja||(Ja=pc`
      <div class="tile ${0}"
           @click=${0}
           @contextmenu=${0}
           ${0}>
        <div class="tile-value-row">
          ${0}
          <span>${0}${0}</span>
        </div>
        <div class="tile-label">${0}</div>
      </div>
    `),s?"unavailable":"",this._openMoreInfo,this._onRightClick,qh(()=>this._onRightClick(new MouseEvent("contextmenu"))),this.icon?ad(Za||(Za=pc`<span class="tile-icon ${0}">${0}</span>`),c,this._renderIcon()):od,s?"—":this._formatValue(n,l),o?ad(ei||(ei=pc`<span class="tile-unit">${0}</span>`),o):od,r)}_openMoreInfo(){if(!this.entityId)return;const e=new CustomEvent("hass-more-info",{detail:{entityId:this.entityId},bubbles:!0,composed:!0});this.dispatchEvent(e)}_onRightClick(e){e.preventDefault(),this.entityId&&this.dispatchEvent(new CustomEvent("tile-context-menu",{detail:{entityId:this.entityId,label:this.label},bubbles:!0,composed:!0}))}_formatValue(e,t){const a=parseFloat(e);return isNaN(a)?e:null!=t&&t>=0?a.toFixed(t):e.includes(".")?e:a.toString()}_renderIcon(){switch(this.icon){case"battery":return ad(ti||(ti=pc`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/></svg>`));case"signal":return ad(ai||(ai=pc`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11zm0 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`));case"clock":return ad(ii||(ii=pc`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>`));case"power":return ad(ni||(ni=pc`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M16.01 7L16 3h-2v4h-4V3H8v4h-.01C7 6.99 6 7.99 6 8.99v5.49L9.5 18v3h5v-3l3.5-3.51v-5.5c0-1-1-2-1.99-1.99z"/></svg>`));case"thermometer":return ad(oi||(oi=pc`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4zm-4-8c0-.55.45-1 1-1s1 .45 1 1h-1v1h1v2h-1v1h1v2h-2V5z"/></svg>`));case"counter":return ad(ri||(ri=pc`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`));case"chart":return ad(si||(si=pc`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/></svg>`));default:return ad(li||(li=pc`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/></svg>`))}}};Nh.styles=bc(ci||(ci=pc`
    :host {
      display: block;
    }

    .tile {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 12px 8px;
      border-radius: 8px;
      background: var(--primary-background-color, #fafafa);
      border: 1px solid var(--divider-color, #e0e0e0);
      min-width: 0;
      gap: 4px;
      transition: border-color 0.2s;
      cursor: pointer;
      user-select: none;
      -webkit-user-select: none;
    }

    .tile:hover {
      border-color: var(--primary-color, #03a9f4);
    }

    .tile:active {
      background: var(--secondary-background-color, #f0f0f0);
    }

    .tile-value-row {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 18px;
      font-weight: 600;
      color: var(--primary-text-color);
      line-height: 1.2;
    }

    .tile-icon {
      display: flex;
      align-items: center;
      color: var(--secondary-text-color);
    }

    .tile-icon.battery-high { color: #4caf50; }
    .tile-icon.battery-medium { color: #ff9800; }
    .tile-icon.battery-low { color: #f44336; }
    .tile-icon.signal { color: #2196f3; }

    .tile-label {
      font-size: 11px;
      color: var(--secondary-text-color);
      text-align: center;
      line-height: 1.2;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 100%;
    }

    .tile-unit {
      font-size: 12px;
      font-weight: 400;
      color: var(--secondary-text-color);
    }

    .unavailable {
      opacity: 0.5;
    }
  `)),hc([Sd({type:Object})],Nh.prototype,"hass",void 0),hc([Sd({type:String})],Nh.prototype,"entityId",void 0),hc([Sd({type:String})],Nh.prototype,"label",void 0),hc([Sd({type:String})],Nh.prototype,"icon",void 0),hc([Sd({type:String})],Nh.prototype,"colorScheme",void 0),Nh=hc([kd("meshcore-sensor-tile")],Nh);const jh={battery_pct:{displayMin:0,displayMax:100,direction:"higher_better",classify:e=>e<20?"bad":e<50?"warn":"good",tooltip:"Green ≥ 50%, Yellow 20–50%, Red < 20% (critical < 10%). Home Assistant low-battery convention.",source:"https://community.home-assistant.io/t/low-battery-level-detection-notification-for-all-battery-sensors/258664"},rssi:{displayMin:-130,displayMax:-30,direction:"higher_better",classify:e=>e<-115?"bad":e<-100?"warn":"good",tooltip:"Green > −100 dBm, Yellow −100 to −115 dBm, Red < −115 dBm. Lower (more negative) RSSI means a weaker received signal.",source:"https://www.thethingsnetwork.org/docs/lorawan/rssi-and-snr/"},snr:{displayMin:-20,displayMax:20,direction:"higher_better",classify:e=>e<-7?"bad":e<0?"warn":"good",tooltip:"Green > 0 dB, Yellow −7 to 0 dB, Red < −7 dB. Demodulation floor is spreading-factor dependent (Semtech AN1200.13).",source:"https://www.openhacks.com/uploadsproductos/loradesignguide_std.pdf"},noise_floor:{displayMin:-130,displayMax:-90,direction:"lower_better",classify:e=>e>-105?"bad":e>-115?"warn":"good",tooltip:"Green < −115 dBm, Yellow −115 to −105 dBm, Red > −105 dBm. Above −105 dBm typically indicates man-made RF interference, not thermal noise.",source:"https://www.openhacks.com/uploadsproductos/loradesignguide_std.pdf"},tx_airtime_util:{displayMin:0,displayMax:20,direction:"lower_better",classify:e=>e>10?"bad":e>2?"warn":"good",tooltip:"Green < 2%, Yellow 2–10%, Red > 10%. EU868 sub-band 1% / general 10% duty-cycle ceiling (ETSI EN 300 220-2; eCFR 47 CFR 15.247).",source:"https://www.etsi.org/deliver/etsi_en/300200_300299/30022002/03.03.01_60/en_30022002v030301p.pdf"},rx_airtime_util:{displayMin:0,displayMax:100,direction:"lower_better",classify:e=>e>50?"bad":e>25?"warn":"good",tooltip:"Green < 25%, Yellow 25–50%, Red > 50%. High RX utilisation usually means heavy mesh traffic or environmental interference saturating the receiver."},channel_util:{displayMin:0,displayMax:100,direction:"lower_better",classify:e=>e>50?"bad":e>25?"warn":"good",tooltip:"Green < 25%, Yellow 25–50%, Red > 50%. Channel utilisation aggregates all activity on the radio channel."},hop_count:{displayMin:0,displayMax:32,direction:"lower_better",classify:e=>e>=16?"bad":e>=7?"warn":"good",tooltip:"Green ≤ 6, Yellow 7–15, Red ≥ 16. MeshCore allows up to 64 hops; community-recommended meshes run well under 32. Each hop adds airtime cost and latency.",source:"https://nodakmesh.org/blog/meshcore-path-hash-explained"},uptime_hours:{displayMin:0,displayMax:168,direction:"higher_better",classify:e=>e<1?"bad":e<24?"warn":"good",tooltip:"Green > 24 h, Yellow 1–24 h, Red < 1 h. Very recent reboot suggests a watchdog reset or brownout."},last_seen_hours:{displayMin:0,displayMax:6,direction:"lower_better",classify:e=>e>4?"bad":e>2?"warn":"good",tooltip:"Green < 2 h, Yellow 2–4 h, Red > 4 h. Should be tuned to the node’s advertising interval; nodes that advertise hourly should appear far more often than nodes that advertise every 6 hours."},request_success_rate:{displayMin:0,displayMax:100,direction:"higher_better",classify:e=>e<70?"bad":e<90?"warn":"good",tooltip:'Green > 90%, Yellow 70–90%, Red < 70%. Caller is responsible for the min-sample floor — bars should render with band="info" until at least 50 attempts have accumulated.'},duplicate_ratio:{displayMin:0,displayMax:100,direction:"lower_better",classify:()=>"info",tooltip:""},tx_queue_len:{displayMin:0,displayMax:30,direction:"lower_better",classify:e=>e>10?"bad":e>5?"warn":"good",tooltip:"Number of messages queued for transmission. Healthy nodes drain the queue quickly. Sustained backlog (> 10) indicates channel saturation or a stuck transmitter."},temperature:{displayMin:-20,displayMax:140,direction:"higher_better",classify:e=>e<0||e>125?"bad":"good",tooltip:"Red below 0°F (≈ −18°C) or above 125°F (≈ 52°C); green otherwise. Extreme ambient temperatures risk damage to the radio, battery, or enclosure."}};function Ph(e,t){const a=t.displayMax-t.displayMin;if(a<=0)return 0;const i=(e-t.displayMin)/a,n="higher_better"===t.direction?i:1-i;return Math.max(0,Math.min(100,100*n))}function Lh(e,t){if(!Number.isFinite(t))return{band:"info",fillPct:0,tooltip:""};const a=jh[e];return a?{band:a.classify(t),fillPct:Ph(t,a),tooltip:a.tooltip,source:a.source}:{band:"info",fillPct:0,tooltip:""}}let Hh=class extends xd{constructor(){super(...arguments),this.value=0,this.min=0,this.max=100,this.band="info"}render(){const e=this.max-this.min;let t=0;return Number.isFinite(this.value)&&e>0&&(t=(this.value-this.min)/e*100,t=Math.max(0,Math.min(100,t))),ad(di||(di=pc`
      <div class="stat-bar"
           role="progressbar"
           aria-valuenow="${0}"
           aria-valuemin="${0}"
           aria-valuemax="${0}">
        <div class="stat-bar-fill ${0}"
             style="width: ${0}%"></div>
      </div>
    `),this.value,this.min,this.max,this.band,t)}};Hh.styles=bc(pi||(pi=pc`
    :host {
      display: block;
      width: 100%;
    }
    .stat-bar {
      position: relative;
      height: 8px;
      width: 100%;
      background: var(--divider-color, #e0e0e0);
      border-radius: 4px;
      overflow: hidden;
    }
    .stat-bar-fill {
      height: 100%;
      border-radius: 4px;
      transition: width 0.4s ease;
    }
    .stat-bar-fill.good { background: var(--good, #4caf50); }
    .stat-bar-fill.warn { background: var(--warn, #ff9800); }
    .stat-bar-fill.bad  { background: var(--bad,  #f44336); }
    .stat-bar-fill.info { background: var(--info, #2196f3); }
  `)),hc([Sd({type:Number})],Hh.prototype,"value",void 0),hc([Sd({type:Number})],Hh.prototype,"min",void 0),hc([Sd({type:Number})],Hh.prototype,"max",void 0),hc([Sd({type:String})],Hh.prototype,"band",void 0),Hh=hc([kd("meshcore-stat-bar")],Hh);let Vh=class extends xd{constructor(){super(...arguments),this.segments=[],this.legend="below"}_denom(){if(void 0!==this.total&&this.total>0)return this.total;const e=this.segments.reduce((e,t)=>e+(Number.isFinite(t.value)?t.value:0),0);return e>0?e:1}render(){if(!this.segments.length)return od;const e=this._denom();return ad(hi||(hi=pc`
      <div class="stat-bar"
           role="img"
           aria-label="${0}">
        ${0}
      </div>
      ${0}
    `),this.segments.map(e=>`${e.label} ${e.value}`).join(", "),this.segments.map(t=>{const a=Number.isFinite(t.value)?Math.max(0,t.value):0;if(0===a)return od;const i=a/e*100;return ad(ui||(ui=pc`<div class="stat-bar-segment ${0}"
                           style="width: ${0}%"
                           title="${0}: ${0}"></div>`),t.kind,i,t.label,t.value)}),"none"!==this.legend?ad(mi||(mi=pc`
          <div class="stat-bar-legend ${0}">
            ${0}
            ${0}
          </div>`),"inline"===this.legend?"inline":"",this.segments.filter(e=>Number.isFinite(e.value)&&e.value>=0).map(e=>ad(gi||(gi=pc`<span><span class="legend-swatch ${0}"></span>${0}</span>`),e.kind,e.label)),this.extraLegendText?ad(fi||(fi=pc`<span class="legend-extra">${0}</span>`),this.extraLegendText):od):od)}};Vh.styles=bc(vi||(vi=pc`
    :host { display: block; width: 100%; }

    .stat-bar {
      position: relative;
      height: 8px;
      width: 100%;
      background: var(--divider-color, #e0e0e0);
      border-radius: 4px;
      overflow: hidden;
      display: flex;
      gap: 1px;
    }
    .stat-bar-segment {
      height: 100%;
      transition: width 0.4s ease;
      cursor: help;
    }
    .stat-bar-segment.flood   { background: var(--info, #2196f3); }
    .stat-bar-segment.direct  { background: var(--good, #4caf50); }
    .stat-bar-segment.other   { background: var(--secondary-text-color); opacity: 0.55; }
    .stat-bar-segment.success { background: var(--good, #4caf50); }
    .stat-bar-segment.failure { background: var(--bad,  #f44336); }
    .stat-bar-segment.tx      { background: var(--info, #2196f3); }
    .stat-bar-segment.rx      { background: var(--good, #4caf50); }
    .stat-bar-segment.idle    { background: transparent; }

    .stat-bar-legend {
      display: flex;
      flex-wrap: wrap;
      gap: 4px 12px;
      margin-top: 4px;
      font-size: 11px;
      color: var(--secondary-text-color);
    }
    .stat-bar-legend > span {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      white-space: nowrap;
    }
    .legend-swatch {
      width: 8px;
      height: 8px;
      border-radius: 2px;
      flex-shrink: 0;
    }
    .legend-swatch.flood   { background: var(--info, #2196f3); }
    .legend-swatch.direct  { background: var(--good, #4caf50); }
    .legend-swatch.other   { background: var(--secondary-text-color); opacity: 0.55; }
    .legend-swatch.success { background: var(--good, #4caf50); }
    .legend-swatch.failure { background: var(--bad,  #f44336); }
    .legend-swatch.tx      { background: var(--info, #2196f3); }
    .legend-swatch.rx      { background: var(--good, #4caf50); }
    .legend-swatch.idle    {
      background: var(--divider-color, #e0e0e0);
      border: 1px solid var(--secondary-text-color);
    }

    .stat-bar-legend.inline {
      gap: 4px 8px;
      margin-top: 2px;
      font-size: 10px;
    }
  `)),hc([Sd({type:Array})],Vh.prototype,"segments",void 0),hc([Sd({type:Number})],Vh.prototype,"total",void 0),hc([Sd({type:String})],Vh.prototype,"legend",void 0),hc([Sd({type:String})],Vh.prototype,"extraLegendText",void 0),Vh=hc([kd("meshcore-stacked-bar")],Vh);let Kh=class extends xd{constructor(){super(...arguments),this.content="",this._open=!1,this._onOpen=()=>{this._open||(this._open=!0,window.addEventListener("scroll",this._onScroll,!0))},this._onClose=()=>{this._open&&(this._open=!1,window.removeEventListener("scroll",this._onScroll,!0))},this._onScroll=()=>this._onClose()}render(){return this.content?ad(bi||(bi=pc`
      <button class="info-tip"
              type="button"
              aria-label="More information"
              @mouseenter=${0}
              @mouseleave=${0}
              @focus=${0}
              @blur=${0}
              @click=${0}>
        <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="7" cy="4" r="1.2" fill="currentColor"></circle>
          <rect x="6.1" y="6.2" width="1.8" height="5.2" rx="0.6" fill="currentColor"></rect>
        </svg>
        <span class="info-tip-content ${0}" role="tooltip">
          ${0}
          ${0}
        </span>
      </button>
    `),this._onOpen,this._onClose,this._onOpen,this._onClose,this._stopPropagation,this._open?"open":"",this.content,this.source?ad(yi||(yi=pc`<span class="src">${0}</span>`),this.source):od):od}updated(){this._open&&this._positionPopover()}disconnectedCallback(){window.removeEventListener("scroll",this._onScroll,!0),super.disconnectedCallback()}_stopPropagation(e){e.stopPropagation()}_positionPopover(){const e=this.shadowRoot;if(!e)return;const t=e.querySelector(".info-tip"),a=e.querySelector(".info-tip-content");if(!t||!a)return;const i=t.getBoundingClientRect(),n=a.getBoundingClientRect(),o=window.innerWidth,r=window.innerHeight;let s=i.left+i.width/2-n.width/2,l=i.bottom+6;s<8?s=8:s+n.width>o-8&&(s=Math.max(8,o-8-n.width)),l+n.height>r-8&&(l=i.top-6-n.height,l<8&&(l=8)),a.style.left=`${s}px`,a.style.top=`${l}px`}};Kh.styles=bc(_i||(_i=pc`
    :host {
      display: inline-flex;
      vertical-align: middle;
    }
    button.info-tip {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 14px;
      height: 14px;
      margin-left: 4px;
      border-radius: 50%;
      color: var(--secondary-text-color);
      background: var(--divider-color, #e0e0e0);
      cursor: help;
      user-select: none;
      flex-shrink: 0;
      border: none;
      padding: 0;
    }
    /* The "i" glyph is drawn as inline SVG (not a Unicode character) so
       its dot + stem sit on the geometric center of the 14×14 button
       regardless of font metrics. Using a Unicode glyph here previously
       produced two stacked, optically-misaligned rings — the CSS-drawn
       button background plus the glyph's own circled-i ring. */
    button.info-tip svg {
      display: block;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }
    button.info-tip:hover,
    button.info-tip:focus {
      color: var(--card-background-color, #fff);
      background: var(--primary-color, #03a9f4);
      outline: none;
    }
    /* Popover is position: fixed so we can clamp it to the viewport on
       open (see _positionPopover). top / left are set by JS each time
       the popover opens; visibility is toggled by the .open class
       rather than :hover/:focus so we control the timing of the
       measurement that drives the clamp. */
    .info-tip-content {
      position: fixed;
      top: 0;
      left: 0;
      display: none;
      width: 260px;
      max-width: calc(100vw - 16px);
      padding: 10px 12px;
      background: var(--card-background-color, #fff);
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 6px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
      font-size: 11px;
      font-weight: normal;
      color: var(--primary-text-color);
      text-align: left;
      line-height: 1.45;
      z-index: 100;
      white-space: normal;
      pointer-events: none;
    }
    .info-tip-content.open {
      display: block;
    }
    .info-tip-content .src {
      display: block;
      margin-top: 6px;
      font-size: 10px;
      color: var(--secondary-text-color);
      word-break: break-all;
    }
  `)),hc([Sd({type:String})],Kh.prototype,"content",void 0),hc([Sd({type:String})],Kh.prototype,"source",void 0),hc([Ad()],Kh.prototype,"_open",void 0),Kh=hc([kd("meshcore-info-tip")],Kh);const Uh=[{key:"sent_flood",label:"Sent · Flood",color:"var(--info, #2196f3)",dash:!1},{key:"sent_direct",label:"Sent · Direct",color:"var(--info, #2196f3)",dash:!0},{key:"recv_flood",label:"Recv · Flood",color:"var(--good, #4caf50)",dash:!1},{key:"recv_direct",label:"Recv · Direct",color:"var(--good, #4caf50)",dash:!0},{key:"errors",label:"Errors",color:"var(--bad, #f44336)",dash:!1}];let Wh=class extends xd{constructor(){super(...arguments),this.data=[],this.width=700,this.height=170,this.timeRange=48,this._hoverIndex=null,this._onPointerMove=e=>{const t=this._indexFromEvent(e);null!=t&&t!==this._hoverIndex&&(this._hoverIndex=t)},this._onPointerDown=e=>{const t=this._indexFromEvent(e);null!=t&&(this._hoverIndex=t===this._hoverIndex?null:t)},this._onPointerLeave=e=>{"mouse"===e.pointerType&&(this._hoverIndex=null)}}render(){return this.data&&0!==this.data.length?ad(xi||(xi=pc`
      <div class="chart-container">
        <div class="plot">
          ${0}
          ${0}
        </div>
        <div class="legend">
          ${0}
        </div>
      </div>
    `),this._renderChart(),null!=this._hoverIndex?this._renderTooltip():od,Uh.map(e=>ad(wi||(wi=pc`<div class="legend-item">
              <span class="legend-line ${0}"
                    style="border-top-color:${0}"></span>${0}
            </div>`),e.dash?"dashed":"",e.color,e.label))):od}_timeLabel(e,t){const a=Math.round((t-e)/36e5);return a<=0?"now":`-${a}h`}_fmtValue(e){return"number"==typeof e&&isFinite(e)?0===e?"0":e<1?e.toFixed(2):e.toFixed(1):"—"}_geom(){const e=this.width,t=this.height,a=e-40-12,i=t-12-22;let n=0;for(const e of this.data)for(const t of Uh){const a=e.values[t.key];"number"==typeof a&&isFinite(a)&&(n=Math.max(n,a))}n<=0&&(n=1);const o=Date.now(),r=36e5*this.timeRange,s=o-r;return{padL:40,padR:12,padT:12,padB:22,w:e,h:t,cw:a,ch:i,maxV:n,now:o,range:r,oldest:s,xScale:e=>40+(e-s)/r*a,yScale:e=>12+i-e/n*i}}_nearestBucket(e){const{xScale:t}=this._geom();let a=-1,i=1/0;for(let n=0;n<this.data.length;n++){const o=Math.abs(t(this.data[n].timestamp)-e);o<i&&(i=o,a=n)}return a}_indexFromEvent(e){const t=this.renderRoot.querySelector("svg");if(!t||0===this.data.length)return null;const a=t.getBoundingClientRect();if(0===a.width)return null;const i=(e.clientX-a.left)/a.width*this.width;return this._nearestBucket(i)}_renderChart(){const e=this._geom(),{padL:t,padR:a,padT:i,padB:n,w:o,h:r,ch:s,maxV:l,now:c,range:d,oldest:p,xScale:h,yScale:u}=e,m=[0,l/2,l].map(e=>{const i=u(e);return id(ki||(ki=pc`
        <line x1="${0}" y1="${0}" x2="${0}" y2="${0}"
          stroke="var(--divider-color,#e0e0e0)" stroke-dasharray="4,4" opacity="0.3" />
        <text x="${0}" y="${0}" font-size="9" text-anchor="end"
          fill="var(--secondary-text-color,#727272)">${0}</text>`),t,i,o-a,i,t-6,i+3,e<1?e.toFixed(1):Math.round(e))}),g=[p,p+d/2,c].map(e=>id($i||($i=pc`
        <text x="${0}" y="${0}" font-size="9" text-anchor="middle"
          fill="var(--secondary-text-color,#727272)">${0}</text>`),h(e),r-n+14,this._timeLabel(e,c))),f=Uh.map(e=>{const t=this.data.filter(t=>"number"==typeof t.values[e.key]&&isFinite(t.values[e.key])).map(t=>`${h(t.timestamp).toFixed(1)},${u(t.values[e.key]).toFixed(1)}`);if(0===t.length)return id(Ci||(Ci=pc``));if(1===t.length){const[a,i]=t[0].split(",");return id(Si||(Si=pc`<circle cx="${0}" cy="${0}" r="2" fill="${0}" />`),a,i,e.color)}return id(Ai||(Ai=pc`<polyline points="${0}" fill="none" stroke="${0}"
        stroke-width="1.5" stroke-dasharray="${0}"
        stroke-linecap="round" stroke-linejoin="round" />`),t.join(" "),e.color,e.dash?"5,3":"none")});let v=id(Mi||(Mi=pc``));if(null!=this._hoverIndex&&this._hoverIndex<this.data.length){const e=this.data[this._hoverIndex],t=h(e.timestamp),a=Uh.map(a=>{const i=e.values[a.key];return"number"==typeof i&&isFinite(i)?id(Ei||(Ei=pc`<circle cx="${0}" cy="${0}" r="3" fill="${0}"
          stroke="var(--card-background-color,#fff)" stroke-width="1" />`),t,u(i),a.color):id(Fi||(Fi=pc``))});v=id(Di||(Di=pc`
        <line x1="${0}" y1="${0}" x2="${0}" y2="${0}"
          stroke="var(--primary-text-color,#888)" stroke-width="1" opacity="0.35" />
        ${0}`),t,i,t,r-n,a)}return id(zi||(zi=pc`
      <svg viewBox="0 0 ${0} ${0}" xmlns="http://www.w3.org/2000/svg" role="img"
           aria-label="Message rate over the last ${0} hours"
           @pointermove="${0}"
           @pointerdown="${0}"
           @pointerleave="${0}">
        ${0}
        <line x1="${0}" y1="${0}" x2="${0}" y2="${0}"
          stroke="var(--divider-color,#e0e0e0)" stroke-width="1" />
        <line x1="${0}" y1="${0}" x2="${0}" y2="${0}"
          stroke="var(--divider-color,#e0e0e0)" stroke-width="1" />
        ${0}
        ${0}
        ${0}
        <text x="${0}" y="${0}" font-size="9"
          fill="var(--secondary-text-color,#727272)">msg/min</text>
        <rect x="${0}" y="${0}" width="${0}" height="${0}"
          fill="transparent" style="pointer-events:all" />
      </svg>`),o,r,this.timeRange,this._onPointerMove,this._onPointerDown,this._onPointerLeave,m,t,i,t,r-n,t,r-n,o-a,r-n,f,v,g,t,i-2,t,i,e.cw,s)}_renderTooltip(){const e=this._hoverIndex;if(null==e||e>=this.data.length)return od;const t=this._geom(),a=this.data[e],i=t.xScale(a.timestamp)/t.w*100,n=i>55,o=new Date(a.timestamp).toLocaleString([],{weekday:"short",hour:"2-digit",minute:"2-digit"}),r=n?`left:${i}%; transform:translateX(calc(-100% - 8px));`:`left:${i}%; transform:translateX(8px);`;return ad(Oi||(Oi=pc`
      <div class="tooltip" style="${0}">
        <div class="tt-head">${0} · msg/min</div>
        ${0}
      </div>
    `),r,o,Uh.map(e=>ad(Ii||(Ii=pc`<div class="tt-row">
            <span class="sw ${0}" style="border-top-color:${0}"></span>
            <span class="lbl">${0}</span>
            <span class="val">${0}</span>
          </div>`),e.dash?"dashed":"",e.color,e.label,this._fmtValue(a.values[e.key]))))}};Wh.styles=bc(Ri||(Ri=pc`
    :host { display: block; width: 100%; }
    svg { width: 100%; height: auto; display: block; touch-action: pan-y; }
    .chart-container {
      width: 100%;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 8px;
      background: var(--input-bg);
      padding: 10px 12px;
      box-sizing: border-box;
    }
    /* Shrink-wraps the SVG so the tooltip can be positioned in % of the SVG
       box — percentages map exactly because the SVG fills this wrapper, with
       no dependence on the rendered scale factor. */
    .plot { position: relative; }
    .tooltip {
      position: absolute;
      top: 4px;
      z-index: 2;
      pointer-events: none;
      background: var(--card-background-color, var(--input-bg, #fff));
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 6px;
      padding: 6px 8px;
      font-size: 11px;
      color: var(--primary-text-color, #212121);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
      white-space: nowrap;
    }
    .tt-head {
      font-weight: 600;
      margin-bottom: 4px;
      color: var(--secondary-text-color, #727272);
    }
    .tt-row { display: flex; align-items: center; gap: 6px; line-height: 1.5; }
    .tt-row .sw {
      display: inline-block;
      width: 12px;
      height: 0;
      border-top: 2px solid;
      flex-shrink: 0;
    }
    .tt-row .sw.dashed { border-top-style: dashed; }
    .tt-row .lbl { flex: 1; padding-right: 8px; }
    .tt-row .val { font-variant-numeric: tabular-nums; text-align: right; }
    .legend {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      margin-top: 6px;
    }
    .legend-item {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 11px;
      color: var(--secondary-text-color);
    }
    .legend-line {
      display: inline-block;
      width: 16px;
      height: 0;
      border-top: 2px solid;
      flex-shrink: 0;
    }
    .legend-line.dashed { border-top-style: dashed; }
  `)),hc([Sd({type:Array})],Wh.prototype,"data",void 0),hc([Sd({type:Number})],Wh.prototype,"width",void 0),hc([Sd({type:Number})],Wh.prototype,"height",void 0),hc([Sd({type:Number})],Wh.prototype,"timeRange",void 0),hc([Ad()],Wh.prototype,"_hoverIndex",void 0),Wh=hc([kd("meshcore-message-rate-chart")],Wh);let Gh=class extends xd{constructor(){super(...arguments),this.entities=[],this.hiddenCount=0,this._rateHistory=[],this._rateHistoryKey=null}render(){if(!this.hass||!this.device)return od;const e=new Set,t=this._renderHeroTiles(e),a=this._buildGroups(e);return ad(Ti||(Ti=pc`
      <div class="hero-row">
        ${0}
      </div>

      ${0}

      ${0}
    `),t,this._renderMessageActivityCard(),a.length>0?ad(qi||(qi=pc`
          <div class="subsection-label">
            Sensors${0}
          </div>

          <div class="sensor-grid">
            ${0}
          </div>`),this.hiddenCount>0?ad(Bi||(Bi=pc`<span class="hidden-suffix">(${0} hidden)</span>`),this.hiddenCount):od,a.map(e=>this._renderGroup(e))):od)}updated(e){var t;if(!this.hass||!this.device)return;if(!e.has("hass")&&!e.has("device")&&!e.has("entities"))return;const a=this._findEntityIdMatching("nb_sent"),i=null!==(t=null==a?void 0:a.entity_id)&&void 0!==t?t:null;i&&i!==this._rateHistoryKey?(this._rateHistoryKey=i,this._fetchRateHistory()):i||null===this._rateHistoryKey||(this._rateHistoryKey=null,this._rateHistory=[])}_deriveRateId(e,t){return e.replace(`_${t}_`,`_${t}_rate_`)}async _fetchRateHistory(){if(!this.hass)return;const e=[["sent_flood","sent_flood"],["sent_direct","sent_direct"],["recv_flood","recv_flood"],["recv_direct","recv_direct"],["errors","recv_errors"]],t=[];for(const[a,i]of e){const e=this._findEntityIdMatching(i);e&&t.push([a,this._deriveRateId(e.entity_id,i)])}if(0!==t.length)try{const e=await this.hass.callWS({type:"recorder/statistics_during_period",start_time:new Date(Date.now()-1728e5).toISOString(),end_time:(new Date).toISOString(),statistic_ids:t.map(([,e])=>e),period:"hour"}),i={};for(const[n,o]of t){const t=e[o];if(Array.isArray(t))for(const e of t){var a;if(null==e.start||null==e.mean)continue;const t=new Date(e.start).getTime();(null!==(a=i[t])&&void 0!==a?a:i[t]={})[n]=e.mean}}this._rateHistory=Object.entries(i).map(([e,t])=>({timestamp:parseInt(e,10),values:t})).sort((e,t)=>e.timestamp-t.timestamp)}catch(e){this._rateHistory=[]}else this._rateHistory=[]}_renderMessageActivityCard(){return this._rateHistory.length?ad(Ni||(Ni=pc`
      <div class="subsection-label">Message activity (48h)</div>
      <meshcore-message-rate-chart .data=${0}></meshcore-message-rate-chart>
    `),this._rateHistory):od}_renderHeroTiles(e){const t=this.device;return"companion"===t.type?this._renderCompanionHero(e):"repeater"===t.type?this._renderRepeaterHero(e):this._renderClientHero(e)}_renderRepeaterHero(e){return ad(ji||(ji=pc`
      ${0}
      ${0}
      ${0}
      ${0}
      ${0}
      ${0}
    `),this._renderBatteryTile(),this._renderSignalTile(),this._renderRadioActivityTile(),this._renderMessagesSentTile(e),this._renderMessagesReceivedTile(e),this._renderRequestsTile(e))}_renderClientHero(e){return ad(Pi||(Pi=pc`
      ${0}
      ${0}
      ${0}
    `),this._renderBatteryTile(),this._renderSignalTile(),this._renderRequestsTile(e))}_renderCompanionHero(e){return ad(Li||(Li=pc`
      ${0}
      ${0}
      ${0}
      ${0}
      ${0}
      ${0}
    `),this._renderBatteryTile(),this._renderSignalTile(),this._renderCompanionRadioActivityTile(),this._renderMessagesSentTile(e),this._renderMessagesReceivedTile(e),this._renderLocationTile())}_renderBatteryTile(){var e;const t=this._findByMetric("battery_pct");if(!t)return od;const a=this._readNumber(t.entity_id),i=null!==(e=this._findEntityIdMatching("battery_voltage"))&&void 0!==e?e:this._findEntityByLabel("Voltage"),n=i?this._readNumber(i.entity_id):NaN,o=Lh("battery_pct",a);return ad(Hi||(Hi=pc`
      <div class="hero-tile" @click=${0}>
        <div class="hero-tile-head">
          <span>Battery${0}</span>
          <span class="status-dot ${0}"></span>
        </div>
        <div class="hero-tile-value">
          <span class="primary">
            ${0}<span class="unit">%</span>
          </span>
          ${0}
        </div>
        <meshcore-stat-bar
          .value=${0}
          .min=${0}
          .max=${0}
          .band=${0}>
        </meshcore-stat-bar>
      </div>
    `),()=>this._fireMoreInfo(t.entity_id),this._renderInfoTip(o),o.band,this._formatNumber(a,0),Number.isFinite(n)?ad(Vi||(Vi=pc`<span class="secondary">· ${0} V</span>`),n.toFixed(3)):od,a,0,100,o.band)}_renderSignalTile(){const e=this._findByMetric("rssi");if(!e)return od;const t=this._readNumber(e.entity_id),a=this._findByMetric("snr"),i=a?this._readNumber(a.entity_id):NaN,n=Lh("rssi",t);return ad(Ki||(Ki=pc`
      <div class="hero-tile" @click=${0}>
        <div class="hero-tile-head">
          <span>Last message strength${0}</span>
          <span class="status-dot ${0}"></span>
        </div>
        <div class="hero-tile-value">
          <span class="primary">
            ${0}<span class="unit">dBm</span>
          </span>
          ${0}
        </div>
        <meshcore-stat-bar
          .value=${0}
          .min=${0}
          .max=${0}
          .band=${0}>
        </meshcore-stat-bar>
      </div>
    `),()=>this._fireMoreInfo(e.entity_id),this._renderInfoTip(n),n.band,this._formatNumber(t,0),Number.isFinite(i)?ad(Ui||(Ui=pc`<span class="secondary">· SNR ${0} dB</span>`),i.toFixed(1)):od,t,-130,-30,n.band)}_renderRadioActivityTile(){const e=this._findByMetric("tx_airtime_util"),t=this._findByMetric("rx_airtime_util");if(!e&&!t)return od;const a=e?this._readNumber(e.entity_id):0,i=t?this._readNumber(t.entity_id):0,n=Number.isFinite(a)?Math.max(0,a):0,o=Number.isFinite(i)?Math.max(0,i):0,r=Math.max(0,100-n-o),s=Lh("tx_airtime_util",n).band,l=Lh("rx_airtime_util",o).band,c=this._worseBand(s,l),d=[{value:n,label:`TX ${n.toFixed(1)}%`,kind:"tx"},{value:o,label:`RX ${o.toFixed(1)}%`,kind:"rx"},{value:r,label:`Idle ${r.toFixed(1)}%`,kind:"idle"}],p=n+o;return ad(Wi||(Wi=pc`
      <div class="hero-tile"
           @click=${0}>
        <div class="hero-tile-head">
          <span>Radio activity${0}</span>
          <span class="status-dot ${0}"></span>
        </div>
        <div class="hero-tile-value">
          <span class="primary">${0}<span class="unit">%</span></span>
        </div>
        <div class="ra-bar-wrap">
          <meshcore-stacked-bar
            .segments=${0}
            .total=${0}
            .legend=${0}>
          </meshcore-stacked-bar>
          <div class="ra-legend">
            ${0}
            ${0}
            <span class="ra-legend-item">
              <span class="legend-swatch idle"></span>Idle ${0}%
            </span>
          </div>
        </div>
      </div>
    `),()=>e&&this._fireMoreInfo(e.entity_id),this._renderInfoTip({band:c,fillPct:0,tooltip:"Half-duplex composition over the last reporting interval. The radio can transmit OR receive, never both. TX above 10% indicates duty-cycle pressure; sustained TX+RX above 30% means the channel is congested."}),c,p.toFixed(1),d,100,"none",e?ad(Gi||(Gi=pc`<span class="ra-legend-item" @click=${0}>
                  <span class="legend-swatch tx"></span>TX ${0}%
                </span>`),t=>{t.stopPropagation(),e&&this._fireMoreInfo(e.entity_id)},n.toFixed(1)):ad(Xi||(Xi=pc`<span class="ra-legend-item">
                  <span class="legend-swatch tx"></span>TX ${0}%
                </span>`),n.toFixed(1)),t?ad(Yi||(Yi=pc`<span class="ra-legend-item" @click=${0}>
                  <span class="legend-swatch rx"></span>RX ${0}%
                </span>`),e=>{e.stopPropagation(),t&&this._fireMoreInfo(t.entity_id)},o.toFixed(1)):ad(Qi||(Qi=pc`<span class="ra-legend-item">
                  <span class="legend-swatch rx"></span>RX ${0}%
                </span>`),o.toFixed(1)),r.toFixed(1))}_renderMessagesSentTile(e){const t=this._findEntityIdMatching("nb_sent"),a=this._findEntityIdMatching("sent_flood"),i=this._findEntityIdMatching("sent_direct");if(!t||!a&&!i)return od;const n=this._readNumber(t.entity_id),o=a?this._readNumber(a.entity_id):0,r=i?this._readNumber(i.entity_id):0,s=[{value:o,label:`Flood ${o}`,kind:"flood"},{value:r,label:`Direct ${r}`,kind:"direct"}];return e.add(t.entity_id),a&&e.add(a.entity_id),i&&e.add(i.entity_id),ad(Ji||(Ji=pc`
      <div class="hero-tile" @click=${0}>
        <div class="hero-tile-head">
          <span>Messages Sent${0}</span>
          <span class="status-dot info"></span>
        </div>
        <div class="hero-tile-value">
          <span class="primary">${0}</span>
        </div>
        <meshcore-stacked-bar
          .segments=${0}
          .legend=${0}>
        </meshcore-stacked-bar>
      </div>
    `),()=>this._fireMoreInfo(t.entity_id),this._renderInfoTip({band:"info",fillPct:0,tooltip:"Messages sent (lifetime), split by send mode:\n• Flood — broadcast retransmits visible to all neighbours.\n• Direct — routed point-to-point along a path."}),this._formatCount(n),s,"inline")}_renderMessagesReceivedTile(e){const t=this._findEntityIdMatching("nb_recv"),a=this._findEntityIdMatching("recv_flood"),i=this._findEntityIdMatching("recv_direct"),n=this._findEntityIdMatching("flood_dups"),o=this._findEntityIdMatching("direct_dups");if(!t||!a&&!i)return od;const r=this._readNumber(t.entity_id),s=a?this._readNumber(a.entity_id):0,l=i?this._readNumber(i.entity_id):0,c=[{value:s,label:`Flood ${s}`,kind:"flood"},{value:l,label:`Direct ${l}`,kind:"direct"}],d=n?this._readNumber(n.entity_id):0,p=o?this._readNumber(o.entity_id):0,h=(Number.isFinite(d)?d:0)+(Number.isFinite(p)?p:0),u=r>0?h/r*100:0;e.add(t.entity_id),a&&e.add(a.entity_id),i&&e.add(i.entity_id),n&&e.add(n.entity_id),o&&e.add(o.entity_id);const m=this._findEntityIdMatching("recv_errors"),g=m?this._readNumber(m.entity_id):NaN,f=Number.isFinite(g)?g:0,v=r+f,b=v>0?f/v*100:0;return m&&e.add(m.entity_id),ad(Zi||(Zi=pc`
      <div class="hero-tile" @click=${0}>
        <div class="hero-tile-head">
          <span>Messages Received${0}</span>
          <span class="status-dot info"></span>
        </div>
        <div class="hero-tile-value">
          <span class="primary">${0}</span>
        </div>
        <meshcore-stacked-bar
          .segments=${0}
          .legend=${0}>
        </meshcore-stacked-bar>
        ${0}
        ${0}
        <div class="msg-legend">
          <span><span class="msg-swatch flood"></span>Flood ${0}</span>
          <span><span class="msg-swatch direct"></span>Direct ${0}</span>
          ${0}
          ${0}
        </div>
      </div>
    `),()=>this._fireMoreInfo(t.entity_id),this._renderInfoTip({band:"info",fillPct:0,tooltip:"Messages received (lifetime), split by receive mode:\n• Flood — broadcast packets received from neighbours.\n• Direct — routed packets where this node is on the path.\n\nEach bar below is a percentage of its own total:\n• Red = receive errors (CRC failures), as a share of all reception attempts (received + errors) — i.e. the error rate.\n• Amber = duplicate receptions, as a share of received messages (duplicates are a subset of received).\n\nBoth are context only, not banded — in a flooding mesh every active neighbour retransmits the same flood once, so a high duplicate ratio is normal (a 2-neighbour repeater sees ~50%, a 3-neighbour ~67%, etc.)."}),this._formatCount(r),c,"none",f>0?ad(en||(en=pc`<div class="err-line"
                      title="Receive errors (CRC failures): ${0} — ${0}% of reception attempts (received + errors)">
              <div class="err-line-fill" style="width:${0}%"></div>
            </div>`),f,b.toFixed(1),Math.min(100,b).toFixed(1)):od,h>0?ad(tn||(tn=pc`<div class="dup-line"
                      title="Duplicate receptions: ${0} — ${0}% of received messages">
              <div class="dup-line-fill" style="width:${0}%"></div>
            </div>`),h,u.toFixed(1),Math.min(100,u).toFixed(1)):od,s,l,f>0?ad(an||(an=pc`<span><span class="msg-swatch error"></span>Error ${0}</span>`),f):od,h>0?ad(nn||(nn=pc`<span><span class="msg-swatch dup"></span>Dup ${0}</span>`),h):od)}_renderRequestsTile(e){const t=this._findEntityIdMatching("request_succ"),a=this._findEntityIdMatching("request_fail");if(!t||!a)return od;const i=this._readNumber(t.entity_id),n=this._readNumber(a.entity_id),o=i+n,r=o>0?i/o*100:0,s=o>=50?Lh("request_success_rate",r):{band:"info",fillPct:0,tooltip:""},l=[{value:i,label:`OK ${i}`,kind:"success"},{value:n,label:`Fail ${n}`,kind:"failure"}];return e.add(t.entity_id),e.add(a.entity_id),ad(on||(on=pc`
      <div class="hero-tile" @click=${0}>
        <div class="hero-tile-head">
          <span>Requests${0}</span>
          <span class="status-dot ${0}"></span>
        </div>
        <div class="hero-tile-value">
          <span class="primary">${0}</span>
          ${0}
        </div>
        <meshcore-stacked-bar
          .segments=${0}
          .legend=${0}>
        </meshcore-stacked-bar>
      </div>
    `),()=>this._fireMoreInfo(t.entity_id),this._renderInfoTip({...s,tooltip:"Outgoing requests this node initiated (login, telemetry, neighbour query) and how they resolved. Success rate bands: Green > 90%, Yellow 70–90%, Red < 70%, with a minimum sample of 50 attempts to colour. Below the floor, the bar stays neutral — too few samples to judge."}),s.band,o>0?`${r.toFixed(0)}%`:"—",o>0?ad(rn||(rn=pc`<span class="secondary">· ${0} attempt${0}</span>`),o,1===o?"":"s"):od,l,"inline")}_formatCount(e){return Number.isFinite(e)?Math.round(e).toLocaleString():"—"}_renderLocationTile(){const e=this._findEntityIdMatching("latitude"),t=this._findEntityIdMatching("longitude");let a=e?this._readNumber(e.entity_id):NaN,i=t?this._readNumber(t.entity_id):NaN,n="entity";!Number.isFinite(a)&&Number.isFinite(this.fallbackLatitude)&&(a=this.fallbackLatitude,n="fallback"),!Number.isFinite(i)&&Number.isFinite(this.fallbackLongitude)&&(i=this.fallbackLongitude,n="fallback");const o=Number.isFinite(a)&&Number.isFinite(i)&&(0!==a||0!==i);if(!o)return od;let r=null;if("entity"===n&&e){var s;const t=null===(s=this.hass)||void 0===s||null===(s=s.states[e.entity_id])||void 0===s?void 0:s.last_updated;if(t){const e=new Date(t);Number.isNaN(e.getTime())||(r=e)}}else"fallback"===n&&Number.isFinite(this.fallbackUpdated)&&(r=new Date(1e3*this.fallbackUpdated));const l=o&&r?this._formatRelativeTime(r):"";return ad(sn||(sn=pc`
      <div class="hero-tile" @click=${0}>
        <div class="hero-tile-head">
          <span>Location${0}</span>
        </div>
        <div class="hero-tile-value">
          ${0}
        </div>
        ${0}
      </div>
    `),()=>{e&&this._fireMoreInfo(e.entity_id)},"fallback"===n?ad(ln||(ln=pc`<span style="opacity:0.55;text-transform:none;letter-spacing:0;font-size:10px;margin-left:4px;">via contact</span>`)):od,o?ad(cn||(cn=pc`<span class="coord-pair">
                ${0}, ${0}
              </span>`),a.toFixed(4),i.toFixed(4)):ad(dn||(dn=pc`<span class="primary">—</span>`)),l?ad(pn||(pn=pc`<div class="loc-updated">Updated ${0}</div>`),l):od)}_formatRelativeTime(e){const t=(Date.now()-e.getTime())/1e3;return!Number.isFinite(t)||t<0||t<60?"just now":t<3600?`${Math.floor(t/60)} min ago`:t<86400?`${Math.floor(t/3600)} h ago`:`${Math.floor(t/86400)} d ago`}_renderCompanionRadioActivityTile(){const e=this._findEntityIdMatching("tx_airtime"),t=this._findEntityIdMatching("rx_airtime"),a=this._findByMetric("uptime_hours");if(!e&&!t||!a)return od;const i=this._readUptimeMinutes(a);if(!Number.isFinite(i)||i<=0)return od;const n=e?this._readNumber(e.entity_id):0,o=t?this._readNumber(t.entity_id):0;if(!Number.isFinite(n)&&!Number.isFinite(o))return od;const r=e=>Number.isFinite(e)?Math.min(100,Math.max(0,e/i*100)):0,s=r(n),l=r(o),c=Math.max(0,100-s-l),d=Lh("tx_airtime_util",s).band,p=Lh("rx_airtime_util",l).band,h=this._worseBand(d,p),u=[{value:s,label:`TX ${s.toFixed(1)}%`,kind:"tx"},{value:l,label:`RX ${l.toFixed(1)}%`,kind:"rx"},{value:c,label:`Idle ${c.toFixed(1)}%`,kind:"idle"}],m=s+l;return ad(hn||(hn=pc`
      <div class="hero-tile"
           @click=${0}>
        <div class="hero-tile-head">
          <span>Radio activity${0}</span>
          <span class="status-dot ${0}"></span>
        </div>
        <div class="hero-tile-value">
          <span class="primary">${0}<span class="unit">%</span></span>
        </div>
        <div class="ra-bar-wrap">
          <meshcore-stacked-bar
            .segments=${0}
            .total=${0}
            .legend=${0}>
          </meshcore-stacked-bar>
          <div class="ra-legend">
            ${0}
            ${0}
            <span class="ra-legend-item">
              <span class="legend-swatch idle"></span>Idle ${0}%
            </span>
          </div>
        </div>
      </div>
    `),()=>e&&this._fireMoreInfo(e.entity_id),this._renderInfoTip({band:h,fillPct:0,tooltip:"Lifetime-average half-duplex composition: cumulative TX / RX airtime divided by uptime since the node last booted. The radio can transmit OR receive, never both. Unlike a managed repeater (which reports utilisation over the last interval), the companion exposes only cumulative airtime, so this is a long-run average and will not reflect short recent bursts."}),h,m.toFixed(1),u,100,"none",e?ad(un||(un=pc`<span class="ra-legend-item" @click=${0}>
                  <span class="legend-swatch tx"></span>TX ${0}%
                </span>`),t=>{t.stopPropagation(),e&&this._fireMoreInfo(e.entity_id)},s.toFixed(1)):ad(mn||(mn=pc`<span class="ra-legend-item">
                  <span class="legend-swatch tx"></span>TX ${0}%
                </span>`),s.toFixed(1)),t?ad(gn||(gn=pc`<span class="ra-legend-item" @click=${0}>
                  <span class="legend-swatch rx"></span>RX ${0}%
                </span>`),e=>{e.stopPropagation(),t&&this._fireMoreInfo(t.entity_id)},l.toFixed(1)):ad(fn||(fn=pc`<span class="ra-legend-item">
                  <span class="legend-swatch rx"></span>RX ${0}%
                </span>`),l.toFixed(1)),c.toFixed(1))}_readUptimeMinutes(e){var t,a;const i=this._readNumber(e.entity_id);if(!Number.isFinite(i))return NaN;switch(null!==(t=null===(a=this.hass)||void 0===a||null===(a=a.states[e.entity_id])||void 0===a||null===(a=a.attributes)||void 0===a?void 0:a.unit_of_measurement)&&void 0!==t?t:""){case"d":return 1440*i;case"h":return 60*i;case"min":return i;default:return i/60}}_buildGroups(e){var t;const a={"Radio · live":[],"Radio · configuration":[],Status:[],Identity:[]};for(const t of this.entities)e.has(t.entity_id)||this._isHeroDuplicate(t)||a[this._groupOf(t)].push(this._renderRow(t));const i="companion"===(null===(t=this.device)||void 0===t?void 0:t.type),n=["Radio · configuration","Identity"];return Object.entries(a).filter(([e,t])=>!(0===t.length||i&&n.includes(e))).map(([e,t])=>({name:e,rows:t}))}_isHeroDuplicate(e){return"battery_pct"===e.metricKey||2===e.sortOrder||"snr"===e.metricKey||"rssi"===e.metricKey||"uptime_hours"===e.metricKey||"tx_airtime_util"===e.metricKey||"rx_airtime_util"===e.metricKey||"Airtime"===e.label||"RX Airtime"===e.label}_groupOf(e){const t=e.entity_id,a=e.sortOrder;return e.booleanProblem||2===a?"Status":6===a?"Radio · configuration":4===a||5===a||9===a||10===a||11===a||12===a||t.includes("noise_floor")||t.includes("tx_queue")?"Radio · live":t.includes("frequency")||t.includes("bandwidth")||t.includes("spreading_factor")||t.includes("rate_limiter")?"Radio · configuration":t.includes("hop_count")||t.includes("out_path")||t.includes("last_seen")||t.includes("last_advert")||3===a||8===a||7===a?"Status":"Identity"}_renderGroup(e){return ad(vn||(vn=pc`
      <div class="group-label">${0}</div>
      ${0}
    `),e.name,e.rows)}_renderRow(e){var t,a,i,n,o;if(e.booleanProblem){var r;const t=null===(r=this.hass)||void 0===r||null===(r=r.states[e.entity_id])||void 0===r?void 0:r.state,a=void 0===t||"unknown"===t||"unavailable"===t,i="on"===t,n=a?"info":i?"bad":"good";return ad(bn||(bn=pc`
        <div class="sensor-item"
             @click=${0}
             @contextmenu=${0}
             ${0}>
          <span class="status-dot ${0}"></span>
          <span class="si-label">${0}</span>
          <span class="si-value">${0}</span>
          <span class="si-bar"></span>
        </div>
      `),()=>this._fireMoreInfo(e.entity_id),t=>this._fireContextMenu(t,e),qh(()=>this._fireContextMenu(void 0,e)),n,e.label,a?"—":i?"Detected":"OK")}const s=this._readNumber(e.entity_id),l=null===(t=this.hass)||void 0===t?void 0:t.states[e.entity_id],c=null!==(a=null==l||null===(i=l.attributes)||void 0===i?void 0:i.unit_of_measurement)&&void 0!==a?a:"",d=e.metricKey?this._evaluateForRow(e.metricKey,s,e):null,p=null!==(n=null==d?void 0:d.band)&&void 0!==n?n:"info",h=e.staticTooltip||(null==d?void 0:d.tooltip)||"",u=h?{band:p,fillPct:null!==(o=null==d?void 0:d.fillPct)&&void 0!==o?o:0,tooltip:h,source:null==d?void 0:d.source}:null,m=this._formatRowValue(e,s,null==l?void 0:l.state);return ad(yn||(yn=pc`
      <div class="sensor-item"
           @click=${0}
           @contextmenu=${0}
           ${0}>
        <span class="status-dot ${0}"></span>
        <span class="si-label">
          ${0}${0}
        </span>
        <span class="si-value">
          ${0}${0}
        </span>
        <span class="si-bar">
          ${0}
        </span>
      </div>
    `),()=>this._fireMoreInfo(e.entity_id),t=>this._fireContextMenu(t,e),qh(()=>this._fireContextMenu(void 0,e)),p,e.label,u?this._renderInfoTip(u):od,m,c?ad(_n||(_n=pc`<span class="unit">${0}</span>`),c):od,d&&e.metricKey?ad(xn||(xn=pc`<meshcore-stat-bar
                .value=${0}
                .min=${0}
                .max=${0}
                .band=${0}>
              </meshcore-stat-bar>`),d.fillPct,0,100,p):od)}_evaluateForRow(e,t,a){if("uptime_hours"===e){var i,n;let o=t;switch(null!==(i=null===(n=this.hass)||void 0===n||null===(n=n.states[a.entity_id])||void 0===n||null===(n=n.attributes)||void 0===n?void 0:n.unit_of_measurement)&&void 0!==i?i:""){case"d":o=24*t;break;case"h":o=t;break;case"min":o=t/60;break;default:o=t/3600}return Lh(e,o)}var o,r;return Lh(e,"temperature"===e&&(null!==(o=null===(r=this.hass)||void 0===r||null===(r=r.states[a.entity_id])||void 0===r||null===(r=r.attributes)||void 0===r?void 0:r.unit_of_measurement)&&void 0!==o?o:"").includes("C")?9*t/5+32:t)}_findByMetric(e){return this.entities.find(t=>t.metricKey===e)}_findEntityIdMatching(e){return this.entities.find(t=>t.entity_id.includes(e))}_findEntityByLabel(e){return this.entities.find(t=>t.label===e)}_readNumber(e){var t;const a=null===(t=this.hass)||void 0===t?void 0:t.states[e];if(!a||"unavailable"===a.state||"unknown"===a.state)return NaN;const i=parseFloat(a.state);return Number.isFinite(i)?i:NaN}_formatNumber(e,t){return Number.isFinite(e)?e.toFixed(t):"—"}_formatRowValue(e,t,a){var i;if("unavailable"===a||"unknown"===a)return"—";if(!Number.isFinite(t))return null!=a?a:"—";const n=null===(i=this.hass)||void 0===i||null===(i=i.entities)||void 0===i||null===(i=i[e.entity_id])||void 0===i?void 0:i.display_precision;return null!=n&&n>=0?t.toFixed(n):a&&a.includes(".")?a:t.toString()}_renderInfoTip(e){var t;return e.tooltip?ad(wn||(wn=pc`<meshcore-info-tip
      .content=${0}
      .source=${0}>
    </meshcore-info-tip>`),e.tooltip,null!==(t=e.source)&&void 0!==t?t:""):od}_worseBand(e,t){const a={good:0,info:0,warn:1,bad:2};return a[e]>=a[t]?e:t}_fireMoreInfo(e){e&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}_fireContextMenu(e,t){null==e||e.preventDefault(),this.dispatchEvent(new CustomEvent("tile-context-menu",{detail:{entityId:t.entity_id,label:t.label},bubbles:!0,composed:!0}))}};Gh.styles=bc(kn||(kn=pc`
    /* container-type lets the sensor grid's @container query react to this
       card's own width rather than the raw viewport. */
    :host { display: block; container-type: inline-size; }

    /* ─── Hero row ─── */
    .hero-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 12px;
      margin-bottom: 16px;
    }
    .hero-tile {
      background: var(--secondary-background-color, #f0f0f0);
      border-radius: 10px;
      padding: 12px 14px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      cursor: pointer;
      border: 1px solid transparent;
      transition: border-color 0.15s;
    }
    .hero-tile:hover { border-color: var(--primary-color, #03a9f4); }
    .hero-tile-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.4px;
      color: var(--secondary-text-color);
    }
    .hero-tile-value {
      display: flex;
      align-items: baseline;
      gap: 6px;
      flex-wrap: wrap;
    }
    .hero-tile-value .primary {
      font-size: 22px;
      font-weight: 600;
      color: var(--primary-text-color);
      line-height: 1;
    }
    .hero-tile-value .secondary {
      font-size: 13px;
      color: var(--secondary-text-color);
    }
    .hero-tile-value .compact {
      font-size: 14px;
      font-weight: 500;
      color: var(--primary-text-color);
    }
    /* Clickable TX/RX segments inside Radio activity hero tile */
    .ra-segment {
      cursor: pointer;
      border-radius: 3px;
      padding: 0 2px;
      transition: background 0.15s;
    }
    .ra-segment:hover {
      background: rgba(127, 127, 127, 0.18);
    }

    /* Bar + custom legend wrapper — keeps the legend tight to the bar
       (4px) regardless of the hero-tile's 8px flex-column gap, matching
       the spacing inside Messages Sent / Received tiles. */
    .ra-bar-wrap { display: block; }

    /* Radio activity legend (matches the stacked-bar inline legend
       layout used by Messages Sent / Received) */
    .ra-legend {
      display: flex;
      flex-wrap: wrap;
      gap: 4px 12px;
      margin-top: 4px;
      font-size: 11px;
      color: var(--secondary-text-color);
    }
    .ra-legend-item {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      white-space: nowrap;
    }
    .ra-legend-item:hover {
      color: var(--primary-text-color);
      cursor: pointer;
    }
    .legend-swatch {
      width: 8px;
      height: 8px;
      border-radius: 2px;
      flex-shrink: 0;
    }
    .legend-swatch.tx   { background: var(--info, #2196f3); }
    .legend-swatch.rx   { background: var(--good, #4caf50); }
    .legend-swatch.idle {
      background: var(--divider-color, #e0e0e0);
      border: 1px solid var(--secondary-text-color);
    }

    /* ─── Status dots ─── */
    .status-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      flex-shrink: 0;
      display: inline-block;
    }
    .status-dot.good { background: var(--good, #4caf50); }
    .status-dot.warn { background: var(--warn, #ff9800); }
    .status-dot.bad  { background: var(--bad,  #f44336); }
    .status-dot.info { background: var(--info, #2196f3); }

    /* ─── Subsection label ─── */
    .subsection-label {
      font-size: 11px;
      font-weight: 600;
      color: var(--secondary-text-color);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 8px;
      margin-top: 16px;
    }
    .hidden-suffix {
      font-weight: 400;
      text-transform: none;
      opacity: 0.6;
      margin-left: 6px;
    }

    /* ─── Sensor grid ─── responsive: one column on a narrow card, two
       once the card is wide. The breakpoint is a @container query keyed on
       :host's inline-size, so it reacts to the card width (panel layout,
       sidebar state) rather than just the raw viewport. Category headers
       span the full width so paired sensors stay within their category. */
    .sensor-grid {
      display: grid;
      grid-template-columns: 1fr;
      column-gap: 28px;
    }
    @container (min-width: 620px) {
      .sensor-grid { grid-template-columns: 1fr 1fr; }
    }
    .group-label {
      grid-column: 1 / -1;
      padding: 12px 4px 4px;
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: var(--secondary-text-color);
    }
    .sensor-item {
      display: grid;
      grid-template-columns: 14px minmax(0, 1fr) auto minmax(72px, 120px);
      align-items: center;
      gap: 10px;
      padding: 8px 4px;
      border-top: 1px solid var(--divider-color);
      font-size: 13px;
      cursor: pointer;
    }
    .sensor-item:hover { background: rgba(127, 127, 127, 0.06); }
    .si-label {
      color: var(--secondary-text-color);
      min-width: 0;
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .si-value {
      color: var(--primary-text-color);
      font-weight: 500;
      text-align: right;
      font-variant-numeric: tabular-nums;
      white-space: nowrap;
    }
    .si-bar { min-width: 0; }
    .si-bar meshcore-stat-bar { width: 100%; }

    .unit {
      font-size: 11px;
      font-weight: 400;
      color: var(--secondary-text-color);
      margin-left: 2px;
    }

    .map-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 4px 10px;
      border-radius: 12px;
      background: var(--info-bg, rgba(33, 150, 243, 0.18));
      color: var(--info, #2196f3);
      font-size: 11px;
      font-weight: 500;
      text-decoration: none;
      cursor: pointer;
    }
    .coord-pair {
      font-family: ui-monospace, 'SF Mono', Menlo, monospace;
      font-size: 13px;
      color: var(--primary-text-color);
    }
    .loc-updated {
      font-size: 11px;
      color: var(--secondary-text-color);
      margin-top: 2px;
    }

    .dup-annotation {
      font-size: 11px;
      color: var(--secondary-text-color);
      font-style: italic;
      margin-top: 2px;
    }
    .dup-annotation .num {
      font-weight: 500;
      color: var(--primary-text-color);
      font-style: normal;
    }
    /* Thin red line beneath the Messages Received composition bar showing
       the lifetime receive-error share. */
    .err-line {
      height: 3px;
      width: 100%;
      margin-top: 3px;
      background: var(--divider-color, #e0e0e0);
      border-radius: 2px;
      overflow: hidden;
      cursor: help;
    }
    .err-line-fill {
      height: 100%;
      background: var(--bad, #f44336);
    }
    /* Duplicates line — same thin track, amber fill, stacked under the
       error line. */
    .dup-line {
      height: 3px;
      width: 100%;
      margin-top: 2px;
      background: var(--divider-color, #e0e0e0);
      border-radius: 2px;
      overflow: hidden;
      cursor: help;
    }
    .dup-line-fill {
      height: 100%;
      background: var(--warning, #ff9800);
    }
    /* Unified legend beneath the Messages Received bar stack. */
    .msg-legend {
      display: flex;
      flex-wrap: wrap;
      gap: 4px 10px;
      margin-top: 5px;
      font-size: 10px;
      color: var(--secondary-text-color);
    }
    .msg-legend > span {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      white-space: nowrap;
    }
    .msg-swatch {
      width: 8px;
      height: 8px;
      border-radius: 2px;
      flex-shrink: 0;
    }
    .msg-swatch.flood  { background: var(--info, #2196f3); }
    .msg-swatch.direct { background: var(--good, #4caf50); }
    .msg-swatch.error  { background: var(--bad, #f44336); }
    .msg-swatch.dup    { background: var(--warning, #ff9800); }
  `)),hc([Sd({type:Object})],Gh.prototype,"hass",void 0),hc([Sd({type:Object})],Gh.prototype,"device",void 0),hc([Sd({type:Array})],Gh.prototype,"entities",void 0),hc([Sd({type:Number})],Gh.prototype,"hiddenCount",void 0),hc([Sd({type:Number})],Gh.prototype,"fallbackLatitude",void 0),hc([Sd({type:Number})],Gh.prototype,"fallbackLongitude",void 0),hc([Sd({type:Number})],Gh.prototype,"fallbackUpdated",void 0),hc([Ad()],Gh.prototype,"_rateHistory",void 0),Gh=hc([kd("meshcore-node-summary")],Gh);let Xh=class extends xd{constructor(){super(...arguments),this.data=[],this.neighbors=[],this.width=600,this.height=200,this.timeRange=24,this.COLORS=["#FF6B6B","#4ECDC4","#FFE66D","#95E1D3","#C7CEEA","#FF8B94","#B5EAD7","#FFB7B2"]}render(){if(!this.data||0===this.data.length||0===this.neighbors.length)return ad($n||($n=pc`
        <div class="chart-container">
          <div class="empty-state">No data available</div>
        </div>
      `));const e=this._renderChart();return ad(Cn||(Cn=pc`
      <div class="chart-container">
        ${0}
        <div class="legend">
          ${0}
        </div>
      </div>
    `),e,this.neighbors.map((e,t)=>{const a=this.COLORS[t%this.COLORS.length];return ad(Sn||(Sn=pc`
              <div class="legend-item">
                <div class="legend-dot" style="background-color: ${0}"></div>
                <span>${0}</span>
              </div>
            `),a,e)}))}_renderChart(){const e=50,t=this.width-100,a=this.height-100;let i=1/0,n=-1/0;this.data.forEach(e=>{Object.values(e.values).forEach(e=>{"number"==typeof e&&(i=Math.min(i,e),n=Math.max(n,e))})}),isFinite(i)&&isFinite(n)||(i=-10,n=20);const o=n-i,r=i-.1*o,s=n+.1*o,l=t=>this.height-e-(t-r)/(s-r)*a,c=60*this.timeRange*60*1e3,d=Date.now(),p=d-c,h=a=>e+(a-p)/c*t,u=[];for(let t=0;t<=5;t++){const a=r+t/5*(s-r),i=l(a);u.push(id(An||(An=pc`
          <line x1="${0}" y1="${0}" x2="${0}" y2="${0}"
            stroke="var(--divider-color, #e0e0e0)" stroke-dasharray="4,4" opacity="0.3" />
          <text x="${0}" y="${0}" font-size="10" text-anchor="end"
            fill="var(--secondary-text-color, #727272)">${0}dB</text>
        `),e,i,this.width-e,i,42,i+4,Math.round(a)))}const m=[];for(let t=0;t<=5;t++){const a=p+t/5*c,i=h(a),n=this._formatTimeLabel(a,d);m.push(id(Mn||(Mn=pc`
          <text x="${0}" y="${0}" font-size="10" text-anchor="middle"
            fill="var(--secondary-text-color, #727272)">${0}</text>
        `),i,this.height-e+16,n))}const g=this.neighbors.map((e,t)=>{const a=this.COLORS[t%this.COLORS.length],i=[];return this.data.forEach(t=>{const a=t.values[e];if("number"==typeof a&&isFinite(a)){const e=h(t.timestamp),n=l(a);i.push(`${e},${n}`)}}),0===i.length?id(Fn||(Fn=pc``)):id(En||(En=pc`
        <polyline points="${0}" fill="none" stroke="${0}"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      `),i.join(" "),a)});return id(Dn||(Dn=pc`
      <svg width="${0}" height="${0}" xmlns="http://www.w3.org/2000/svg">
        <!-- Background -->
        <rect width="${0}" height="${0}" fill="var(--input-bg)" />

        <!-- Grid lines -->
        ${0}

        <!-- Y-axis -->
        <line x1="${0}" y1="${0}" x2="${0}"
          y2="${0}" stroke="var(--divider-color, #e0e0e0)" stroke-width="1" />

        <!-- X-axis -->
        <line x1="${0}" y1="${0}"
          x2="${0}" y2="${0}"
          stroke="var(--divider-color, #e0e0e0)" stroke-width="1" />

        <!-- Data lines -->
        ${0}

        <!-- Time labels -->
        ${0}
      </svg>
    `),this.width,this.height,this.width,this.height,u,e,e,e,this.height-e,e,this.height-e,this.width-e,this.height-e,g,m)}_formatTimeLabel(e,t){const a=(t-e)/36e5;return a>=24?`${Math.round(a)}h ago`:0===a?"Now":`${Math.round(a)}h`}};Xh.styles=bc(zn||(zn=pc`
    :host {
      display: block;
      width: 100%;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    svg {
      width: 100%;
      height: auto;
      display: block;
    }

    .chart-container {
      width: 100%;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 8px;
      background: var(--input-bg);
      padding: 12px;
      box-sizing: border-box;
    }

    .empty-state {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 200px;
      color: var(--secondary-text-color, #727272);
      font-size: 14px;
    }

    .legend {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 12px;
      padding-top: 12px;
      border-top: 1px solid var(--divider-color, #e0e0e0);
    }

    .legend-item {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      color: var(--primary-text-color);
    }

    .legend-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      flex-shrink: 0;
    }
  `)),hc([Sd({type:Array})],Xh.prototype,"data",void 0),hc([Sd({type:Array})],Xh.prototype,"neighbors",void 0),hc([Sd({type:Number})],Xh.prototype,"width",void 0),hc([Sd({type:Number})],Xh.prototype,"height",void 0),hc([Sd({type:Number})],Xh.prototype,"timeRange",void 0),Xh=hc([kd("meshcore-snr-chart")],Xh);let Yh=class extends xd{constructor(){super(),this.open=!1,this.title="Confirm",this.message="",this.confirmLabel="Confirm",this.cancelLabel="Cancel",this.dangerous=!1,this._typedValue="",Pp(this,{isOpen:()=>this.open,onEscape:()=>this._onCancel()})}render(){if(!this.open)return;const e=this.requireTyped&&this._typedValue!==this.requireTyped;return ad(On||(On=pc`
      <div class="dialog-overlay" @click=${0}>
        <div
          class="dialog"
          role="dialog"
          aria-modal="true"
          aria-label=${0}>
          <div class="dialog-header">
            <div class="dialog-header-title">${0}</div>
          </div>
          <div class="dialog-body">
            <div style="margin-bottom: 16px;">${0}</div>
            ${0}
          </div>
          <div class="dialog-footer">
            <button
              class="dialog-button"
              @click=${0}>
              ${0}
            </button>
            <button
              class="dialog-button primary ${0}"
              ?disabled=${0}
              @click=${0}>
              ${0}
            </button>
          </div>
        </div>
      </div>
    `),this._onOverlayClick,this.title,this.title,this.message,this.requireTyped?ad(In||(In=pc`
                  <div class="form-group">
                    <label class="form-label">Type to confirm</label>
                    <input
                      type="text"
                      class="form-input"
                      placeholder="Type '${0}'"
                      .value=${0}
                      @input=${0}
                    />
                    <div class="form-description">
                      Type '${0}' to enable confirmation
                    </div>
                  </div>
                `),this.requireTyped,this._typedValue,e=>{this._typedValue=e.target.value},this.requireTyped):"",this._onCancel,this.cancelLabel,this.dangerous?"danger-button":"",e,this._onConfirm,this.confirmLabel)}_onOverlayClick(e){e.target===e.currentTarget&&this._onCancel()}_onCancel(){this._typedValue="",this.dispatchEvent(new CustomEvent("cancel",{bubbles:!0}))}_onConfirm(){this.dispatchEvent(new CustomEvent("confirm",{bubbles:!0})),this._typedValue=""}};Yh.styles=[Md,bc(Rn||(Rn=pc`
      :host {
        display: block;
      }
    `))],hc([Sd({type:Boolean})],Yh.prototype,"open",void 0),hc([Sd({type:String})],Yh.prototype,"title",void 0),hc([Sd({type:String})],Yh.prototype,"message",void 0),hc([Sd({type:String})],Yh.prototype,"confirmLabel",void 0),hc([Sd({type:String})],Yh.prototype,"cancelLabel",void 0),hc([Sd({type:Boolean})],Yh.prototype,"dangerous",void 0),hc([Sd({type:String})],Yh.prototype,"requireTyped",void 0),hc([Ad()],Yh.prototype,"_typedValue",void 0),Yh=hc([kd("meshcore-confirm-dialog")],Yh);const Qh=e=>{if(null==e)return;const t=Number(e);return Number.isFinite(t)?t:void 0},Jh=["None","Share (Live GPS)","Saved Prefs"],Zh=["1-Byte","2-Byte","3-Byte"],eu=["Deny","Allow (Per Contact Flags)","Allow All"],tu=[{label:"Overwrite Oldest When Full",value:1},{label:"Auto-Add Chat (Companion)",value:2},{label:"Auto-Add Repeater",value:4},{label:"Auto-Add Room Server",value:8},{label:"Auto-Add Sensor",value:16}];function au(e,t){const a=Qh(e);return void 0!==a&&void 0!==t[a]?t[a]:`Unknown (${e})`}const iu=[{name:"reboot",description:"Restart the device",category:"Device Management",dangerous:!0},{name:"poweroff",description:"Power off the device (v1.14.1+)",category:"Device Management",dangerous:!0},{name:"send_appstart",description:"Initialize connection, returns SELF_INFO with device details",category:"Device Management",responseFormat:"Device info with name, public key, radio params, location"},{name:"send_device_query",description:"Query device info (firmware, capabilities, path hash mode)",category:"Device Management",responseFormat:"Device information including firmware version and capabilities"},{name:"get_bat",description:"Get battery voltage and percentage",category:"Device Info",responseFormat:"Battery: {voltage}mV ({percentage}%)"},{name:"get_time",description:"Get device's current RTC time",category:"Device Info",responseFormat:"Epoch timestamp or formatted time string"},{name:"get_self_telemetry",description:"Get local device telemetry data",category:"Device Info",responseFormat:"Telemetry data including temperature, voltage, uptime"},{name:"set_time",description:"Set device RTC time",category:"Device Info",params:[{name:"val",type:"number",description:"Epoch seconds (Unix timestamp)",required:!0}]},{name:"set_radio",description:"Set radio parameters (frequency, bandwidth, spreading factor, coding rate)",category:"Radio Settings",params:[{name:"freq",type:"number",description:"Frequency in MHz (v1.15.0+ allows down to 150)",required:!0,min:150,max:1e3},{name:"bw",type:"number",description:"Bandwidth in kHz",required:!0,min:7.8,max:500},{name:"sf",type:"number",description:"Spreading factor",required:!0,min:5,max:12},{name:"cr",type:"number",description:"Coding rate",required:!0,min:5,max:8}],responseFormat:"OK - radio parameters set (reboot required)"},{name:"get_allowed_repeat_freq",description:"Get allowed repeater frequencies",category:"Radio Settings",responseFormat:"List of allowed frequency ranges"},{name:"set_tx_power",description:"Set transmit power",category:"Radio Settings",params:[{name:"val",type:"number",description:"TX power in dBm",required:!0,min:-9,max:22}],responseFormat:"OK - TX power set to {val}dBm"},{name:"set_radio.rxgain",description:"Set RX boosted gain mode (SX1262/SX1268; also LR1110 v1.16.0+)",category:"Radio Settings",params:[{name:"state",type:"select",description:"Enable or disable RX boosted gain",required:!0,options:["on","off"]}]},{name:"set_coords",description:"Set GPS coordinates (latitude and longitude)",category:"Location",params:[{name:"lat",type:"number",description:"Latitude in decimal degrees",required:!0,min:-90,max:90},{name:"lon",type:"number",description:"Longitude in decimal degrees",required:!0,min:-180,max:180}],responseFormat:"OK - coordinates set"},{name:"set_path_hash_mode",description:"Set path hash mode (0, 1, or 2) for routing optimization",category:"Network",params:[{name:"mode",label:"Path Hash Mode",type:"select",description:"Routing path-hash width",required:!0,selectOptions:[{label:"1-Byte (0)",value:0},{label:"2-Byte (1)",value:1},{label:"3-Byte (2)",value:2}]}]},{name:"set_flood_max",description:"Set maximum flood hops (network-wide broadcast limit)",category:"Network",params:[{name:"val",type:"number",description:"Maximum number of hops for flood messages",required:!0,min:0,max:64}],responseFormat:"OK - flood max set to {val}"},{name:"send_advert",description:"Send a local or flood advertisement",category:"Network",params:[{name:"flood",type:"boolean",description:"True for flood advert, false for local-only",required:!1,default:!1}],responseFormat:"Advertisement sent"},{name:"get_stats_core",description:"Get core mesh statistics (messages, packets, routing)",category:"Statistics",responseFormat:"Core statistics including message counts and routing info"},{name:"get_stats_radio",description:"Get radio statistics (TX/RX counts, errors, signal quality)",category:"Statistics",responseFormat:"Radio statistics including TX/RX packet counts and error rates"},{name:"get_stats_packets",description:"Get detailed packet statistics",category:"Statistics",responseFormat:"Packet-level statistics"},{name:"set_custom_var",description:"Set a custom variable (sensor data)",category:"Advanced",params:[{name:"key",type:"string",description:"Variable name",required:!0},{name:"value",type:"string",description:"Variable value",required:!0}],responseFormat:"OK - variable set"},{name:"get_custom_vars",description:"Get all custom variables",category:"Advanced",responseFormat:"Dictionary of all custom variables"},{name:"set_tuning",description:"Set timing parameters (RX delay and airtime factor)",category:"Advanced",params:[{name:"rx_dly",type:"number",description:"RX delay base",required:!0},{name:"af",type:"number",description:"Airtime factor",required:!0}]},{name:"set_name",description:"Set device name",category:"Device Info",dangerous:!0,dangerMessage:"Changing the device name will change all entity IDs. Automations, scripts, and dashboards using current entity IDs will need to be updated.",params:[{name:"name",type:"string",description:"New device name",required:!0}],responseFormat:"OK - name set to {name}"},{name:"set_multi_acks",description:"Enable or disable multi-ack mode",category:"Advanced",params:[{name:"multi_acks",label:"Multi-Acks",type:"boolean",description:"Enable multi-acks",required:!0,default:!1}]},{name:"set_advert_loc_policy",description:"Set location advertisement policy",category:"Network",params:[{name:"advert_loc_policy",label:"Location Ad Policy",type:"select",description:"How this node shares its location in adverts",required:!0,selectOptions:[{label:"None (0)",value:0},{label:"Share — Live GPS (1)",value:1},{label:"Saved Prefs (2)",value:2}]}]},{name:"set_manual_add_contacts",description:"Set manual contact adding mode",category:"Advanced",params:[{name:"manual_add_contacts",label:"Manual Add Contacts",type:"boolean",description:"Enable manual contact addition (off = auto-add)",required:!0,default:!1}]},{name:"set_telemetry_mode_base",description:"Set base telemetry mode",category:"Advanced",params:[{name:"telemetry_mode_base",label:"Base Telemetry Mode",type:"select",description:"Who may read base telemetry",required:!0,selectOptions:[{label:"Deny (0)",value:0},{label:"Allow Per Contact Flags (1)",value:1},{label:"Allow All (2)",value:2}]}]},{name:"set_telemetry_mode_loc",description:"Set location telemetry mode",category:"Advanced",params:[{name:"telemetry_mode_loc",label:"Location Telemetry Mode",type:"select",description:"Who may read location telemetry",required:!0,selectOptions:[{label:"Deny (0)",value:0},{label:"Allow Per Contact Flags (1)",value:1},{label:"Allow All (2)",value:2}]}]},{name:"set_telemetry_mode_env",description:"Set environment telemetry mode",category:"Advanced",params:[{name:"telemetry_mode_env",label:"Environment Telemetry Mode",type:"select",description:"Who may read environment telemetry",required:!0,selectOptions:[{label:"Deny (0)",value:0},{label:"Allow Per Contact Flags (1)",value:1},{label:"Allow All (2)",value:2}]}]},{name:"get_channel",description:"Get channel information by index",category:"Advanced",params:[{name:"channel_idx",type:"number",description:"Channel index",required:!0}]},{name:"set_channel",description:"Set channel name and optional secret",category:"Advanced",params:[{name:"channel_idx",type:"number",description:"Channel index",required:!0},{name:"channel_name",type:"string",description:"Channel name (use # prefix for auto-derived key)",required:!0}]},{name:"export_private_key",description:"Export private key (may be disabled by firmware)",category:"Advanced",responseFormat:"Private key in hex format"},{name:"import_private_key",description:"Import private key (reboot required)",category:"Advanced",dangerous:!0,dangerMessage:"Importing a private key changes the device identity and all entity IDs. Automations, scripts, and dashboards using current entity IDs will need to be updated.",params:[{name:"key",type:"string",description:"Private key in hex format",required:!0}]},{name:"sign",description:"Sign data with the device private key",category:"Advanced",params:[{name:"data",type:"string",description:"Data to sign (hex format)",required:!0}]},{name:"send_msg",description:"Send a direct text message to a contact",category:"Messaging",params:[{name:"dst",type:"string",description:"Contact name, public key prefix, or full public key",required:!0},{name:"msg",type:"string",description:"Message text",required:!0}]},{name:"send_msg_with_retry",description:"Send a message with automatic retry and path reset",category:"Messaging",params:[{name:"dst",type:"string",description:"Contact name, public key prefix, or full public key",required:!0},{name:"msg",type:"string",description:"Message text",required:!0}]},{name:"send_chan_msg",description:"Send a message to a channel (group message)",category:"Messaging",params:[{name:"chan",type:"number",description:"Channel index",required:!0},{name:"msg",type:"string",description:"Message text",required:!0}]},{name:"send_cmd",description:"Send a CLI command to a remote node over the mesh",category:"Messaging",params:[{name:"dst",type:"string",description:"Contact name, public key prefix, or full public key",required:!0},{name:"cmd",type:"string",description:"CLI command to execute on remote node",required:!0}]},{name:"send_login",description:"Login to a remote node with admin password",category:"Messaging",params:[{name:"dst",type:"string",description:"Contact name or public key",required:!0},{name:"pwd",type:"string",description:"Admin password",required:!0}]},{name:"send_logout",description:"Logout from a remote node",category:"Messaging",params:[{name:"dst",type:"string",description:"Contact name or public key",required:!0}]},{name:"send_statusreq",description:"Request status from a remote node",category:"Advanced",params:[{name:"dst",type:"string",description:"Contact name or public key",required:!0}]},{name:"send_telemetry_req",description:"Request telemetry data from a remote node",category:"Advanced",params:[{name:"dst",type:"string",description:"Contact name or public key",required:!0}]},{name:"send_path_discovery",description:"Initiate path discovery to a remote node",category:"Advanced",params:[{name:"dst",type:"string",description:"Contact name or public key",required:!0}]},{name:"req_status_sync",description:"Request status from a node (synchronous)",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"req_telemetry_sync",description:"Request telemetry data from a node (synchronous)",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"req_mma_sync",description:"Request min/max/avg statistics for a time range",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0},{name:"start",type:"number",description:"Start time (epoch seconds)",required:!0},{name:"end",type:"number",description:"End time (epoch seconds)",required:!0}]},{name:"req_acl_sync",description:"Request access control list from a node",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"req_neighbours_sync",description:"Request neighbor list from a remote node",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"fetch_all_neighbours",description:"Fetch complete neighbor list with pagination",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"req_regions_sync",description:"Request region information from a node",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"req_owner_sync",description:"Request owner information (name and description)",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"req_basic_sync",description:"Request basic node information",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"get_contacts",description:"Retrieve all known contacts from the device",category:"Advanced",params:[{name:"lastmod",type:"number",description:"Only get contacts modified since this timestamp (optional)",required:!1}]},{name:"reset_path",description:"Reset routing path to flood for a contact",category:"Advanced",params:[{name:"key",type:"string",description:"Contact name or public key",required:!0}]},{name:"share_contact",description:"Share a contact info on the mesh",category:"Advanced",params:[{name:"key",type:"string",description:"Contact name or public key",required:!0}]},{name:"export_contact",description:"Export a contact card (or self if no contact specified)",category:"Advanced",params:[{name:"key",type:"string",description:"Contact name or public key (optional, defaults to self)",required:!1}]},{name:"import_contact",description:"Import a contact card",category:"Advanced",params:[{name:"card_data",type:"string",description:"Contact card data (hex encoded)",required:!0}]},{name:"remove_contact",description:"Remove a contact from the list",category:"Advanced",params:[{name:"key",type:"string",description:"Contact name or public key",required:!0}]},{name:"update_contact",description:"Update contact routing path and flags",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0},{name:"path",type:"string",description:"Routing path (hex string)",required:!0},{name:"flags",type:"string",description:"Contact flags",required:!0}]},{name:"add_contact",description:"Add a contact to the list",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"change_contact_path",description:"Change a contact routing path",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0},{name:"path",type:"number",description:"New path (integer)",required:!0}]},{name:"change_contact_flags",description:"Change a contact flags",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0},{name:"flags",type:"number",description:"New flags (integer)",required:!0}]},{name:"set_autoadd_config",description:"Configure auto-add behavior for new contacts",category:"Advanced",params:[{name:"flag",label:"Auto-Add Config",type:"bitmask",description:"Which contact types to auto-add, plus overwrite-oldest policy",required:!0,bits:tu}]},{name:"get_autoadd_config",description:"Get current auto-add configuration",category:"Advanced"},{name:"send_binary_req",description:"Send a raw binary request to a remote node",category:"Advanced",params:[{name:"dst",type:"string",description:"Contact name or public key",required:!0},{name:"request_type",type:"number",description:"Binary request type",required:!0}]},{name:"set_flood_scope",description:"Set flood scope filter for broadcast messages",category:"Network",params:[{name:"scope",type:"string",description:"Flood scope (int, string, or hex)",required:!0}]},{name:"set_default_flood_scope",description:"Set the persistent default flood scope used when no per-message scope is set (v1.15.0+)",category:"Network",params:[{name:"scope",type:"string",description:'Channel/region name (e.g. "public"), or empty / "*" / "0" / "None" to clear',required:!0}],responseFormat:"OK"},{name:"get_default_flood_scope",description:"Get the persistent default flood scope (v1.15.0+)",category:"Network",responseFormat:"Scope name + 16-byte key, or null if unset"},{name:"send_control_data",description:"Send raw control data packet to the mesh",category:"Advanced",params:[{name:"control_type",type:"number",description:"Control data type",required:!0},{name:"payload",type:"string",description:"Payload data (hex encoded)",required:!0}]},{name:"send_node_discover_req",description:"Broadcast node discovery request",category:"Network",params:[{name:"filter",type:"number",description:"Discovery filter",required:!0},{name:"prefix_only",type:"boolean",description:"Only use public key prefix for matching",required:!1,default:!1}]},{name:"get_msg",description:"Retrieve pending incoming messages",category:"Messaging",params:[{name:"timeout",type:"number",description:"Timeout in seconds to wait for messages (optional)",required:!1,default:5}]},{name:"send_trace",description:"Send a trace packet through specific repeaters",category:"Advanced",params:[{name:"auth_code",type:"number",description:"Authentication code",required:!0},{name:"tag",type:"number",description:"Trace tag",required:!0},{name:"flags",type:"number",description:"Trace flags",required:!0},{name:"path",type:"string",description:"Optional repeater path (hex encoded)",required:!1}]}],nu=[{name:"reboot",description:"Restart the remote device",category:"Device Management",dangerous:!0,remoteOnly:!0},{name:"poweroff",description:"Power off the remote device (v1.14.1+)",category:"Device Management",dangerous:!0,remoteOnly:!0},{name:"shutdown",description:"Power off the remote device (alias for poweroff)",category:"Device Management",dangerous:!0,remoteOnly:!0},{name:"clkreboot",description:"Reset clock to May 2024 and reboot",category:"Device Management",dangerous:!0,remoteOnly:!0},{name:"get name",description:"Get device name",category:"Device Info",responseFormat:"> Device name string",remoteOnly:!0},{name:"get radio",description:"Get radio parameters (frequency, bandwidth, spreading factor, coding rate)",category:"Radio Settings",responseFormat:"> freq,bw,sf,cr (example: 906.875,250.000,11,5)",remoteOnly:!0},{name:"get freq",description:"Get frequency only",category:"Radio Settings",responseFormat:"> frequency in MHz (example: 906.875)",remoteOnly:!0},{name:"get tx",description:"Get transmit power",category:"Radio Settings",responseFormat:"> TX power in dBm (example: 17)",remoteOnly:!0},{name:"get af",description:"Get airtime factor",category:"Radio Settings",responseFormat:"> airtime factor value",remoteOnly:!0},{name:"get dutycycle",description:"Get TX duty cycle as a percentage (v1.15.0+)",category:"Radio Settings",responseFormat:"> NN.N%   (example: > 33.3%)",remoteOnly:!0},{name:"get lat",description:"Get latitude coordinate",category:"Location",responseFormat:"> latitude as float (example: 45.123456)",remoteOnly:!0},{name:"get lon",description:"Get longitude coordinate",category:"Location",responseFormat:"> longitude as float (example: -122.654321)",remoteOnly:!0},{name:"get repeat",description:"Get forwarding/repeating status",category:"Network",responseFormat:"> on or off",remoteOnly:!0},{name:"get rxdelay",description:"Get RX delay base",category:"Advanced",responseFormat:"> RX delay value",remoteOnly:!0},{name:"get txdelay",description:"Get TX delay factor",category:"Advanced",responseFormat:"> TX delay value",remoteOnly:!0},{name:"get direct.txdelay",description:"Get direct TX delay factor",category:"Advanced",responseFormat:"> Direct TX delay value",remoteOnly:!0},{name:"get flood.max",description:"Get maximum flood hops",category:"Network",responseFormat:"> max hops value (example: 8)",remoteOnly:!0},{name:"get flood.max.unscoped",description:"Get max flood hops for un-scoped packets (v1.16.0+)",category:"Network",responseFormat:"> max hops value (example: 64)",remoteOnly:!0},{name:"get flood.max.advert",description:"Get max flood hops for adverts (v1.16.0+)",category:"Network",responseFormat:"> max hops value (example: 8)",remoteOnly:!0},{name:"get advert.interval",description:"Get local advertisement interval (minutes)",category:"Network",responseFormat:"> interval in minutes (example: 120)",remoteOnly:!0},{name:"get flood.advert.interval",description:"Get flood advertisement interval (hours)",category:"Network",responseFormat:"> interval in hours (example: 47; firmware default 47 since v1.16.0)",remoteOnly:!0},{name:"get int.thresh",description:"Get interference threshold",category:"Advanced",responseFormat:"> threshold value",remoteOnly:!0},{name:"get agc.reset.interval",description:"Get AGC (automatic gain control) reset interval",category:"Advanced",responseFormat:"> interval value",remoteOnly:!0},{name:"get multi.acks",description:"Get multi-acks setting",category:"Advanced",responseFormat:"> multi-acks value (0 or 1)",remoteOnly:!0},{name:"get allow.read.only",description:"Get read-only access permission setting",category:"Advanced",responseFormat:"> on or off",remoteOnly:!0},{name:"get guest.password",description:"Get guest password",category:"Advanced",responseFormat:"> password string",remoteOnly:!0},{name:"get public.key",description:"Get full public key (hex)",category:"Device Info",responseFormat:"> hex-encoded public key (example: a6ec829f...d9b70772)",remoteOnly:!0},{name:"get role",description:"Get device role",category:"Device Info",responseFormat:"> repeater or client",remoteOnly:!0},{name:"get owner.info",description:"Get owner information text",category:"Device Info",responseFormat:"> owner info string (with | for newlines)",remoteOnly:!0},{name:"get adc.multiplier",description:"Get ADC voltage multiplier",category:"Advanced",responseFormat:"> multiplier value",remoteOnly:!0},{name:"get path.hash.mode",description:"Get path hash mode (v1.14.0+)",category:"Network",responseFormat:"> mode: 0, 1, or 2",remoteOnly:!0},{name:"get loop.detect",description:"Get loop detection level (v1.14.0+)",category:"Network",responseFormat:"> off, minimal, moderate, or strict",remoteOnly:!0},{name:"get bootloader.ver",description:"Get bootloader version (NRF52 only, v1.14.0+)",category:"Device Info",responseFormat:"> bootloader version string",remoteOnly:!0},{name:"get radio.rxgain",description:"Get RX boosted gain mode (SX1262/SX1268; also LR1110 v1.16.0+)",category:"Radio Settings",responseFormat:"> on or off",remoteOnly:!0},{name:"get bridge.type",description:"Get bridge hardware type",category:"Advanced",responseFormat:"> none, rs232, or espnow",remoteOnly:!0},{name:"set name",description:"Set device name",category:"Device Info",params:[{name:"name",type:"string",description:"New name (no special characters: []\\:,?*)",required:!0}],responseFormat:"OK - name changed",remoteOnly:!0},{name:"set af",description:"Set airtime factor",category:"Radio Settings",params:[{name:"val",type:"number",description:"Airtime factor (0-9)",required:!0,min:0,max:9}],responseFormat:"OK - airtime factor set",remoteOnly:!0},{name:"set dutycycle",description:"Set TX duty cycle as a percentage (v1.15.0+, alias for set af)",category:"Radio Settings",params:[{name:"pct",type:"number",description:"Duty cycle percentage (1-100). Firmware converts to airtime_factor = (100/pct) - 1.",required:!0,min:1,max:100}],responseFormat:"OK - NN.N%",remoteOnly:!0},{name:"set repeat",description:"Enable or disable packet forwarding/repeating",category:"Network",params:[{name:"state",type:"select",description:"Enable (on) or disable (off)",required:!0,options:["on","off"]}],responseFormat:"OK - forwarding enabled/disabled",remoteOnly:!0},{name:"set radio",description:"Set radio parameters (reboot required to take effect)",category:"Radio Settings",params:[{name:"params",type:"string",description:"Comma-separated: freq,bw,sf,cr (example: 906.875,250.000,11,5)",required:!0}],responseFormat:"OK - radio parameters set (reboot required)",remoteOnly:!0},{name:"set lat",description:"Set latitude coordinate",category:"Location",params:[{name:"val",type:"number",description:"Latitude (-90 to 90)",required:!0,min:-90,max:90}],responseFormat:"OK - latitude set",remoteOnly:!0},{name:"set lon",description:"Set longitude coordinate",category:"Location",params:[{name:"val",type:"number",description:"Longitude (-180 to 180)",required:!0,min:-180,max:180}],responseFormat:"OK - longitude set",remoteOnly:!0},{name:"set tx",description:"Set transmit power",category:"Radio Settings",params:[{name:"val",type:"number",description:"TX power in dBm",required:!0,min:-9,max:22}],responseFormat:"OK - TX power set",remoteOnly:!0},{name:"set rxdelay",description:"Set RX delay base",category:"Advanced",params:[{name:"val",type:"number",description:"RX delay base in seconds (0-20, v1.16.0+ upper bound)",required:!0,min:0,max:20}],responseFormat:"OK - RX delay set",remoteOnly:!0},{name:"set txdelay",description:"Set TX delay factor",category:"Advanced",params:[{name:"val",type:"number",description:"TX delay factor (0-2, v1.16.0+ upper bound)",required:!0,min:0,max:2}],responseFormat:"OK - TX delay set",remoteOnly:!0},{name:"set direct.txdelay",description:"Set direct TX delay factor",category:"Advanced",params:[{name:"val",type:"number",description:"Direct TX delay factor (0-2, v1.16.0+ upper bound)",required:!0,min:0,max:2}],responseFormat:"OK - direct TX delay set",remoteOnly:!0},{name:"set flood.max",description:"Set maximum flood hops",category:"Network",params:[{name:"val",type:"number",description:"Max hops (0-64)",required:!0,min:0,max:64}],responseFormat:"OK - flood max set",remoteOnly:!0},{name:"set flood.max.unscoped",description:"Set max flood hops for un-scoped packets (v1.16.0+)",category:"Network",params:[{name:"val",type:"number",description:"Max hops (0-64)",required:!0,min:0,max:64}],responseFormat:"OK",remoteOnly:!0},{name:"set flood.max.advert",description:"Set max flood hops for adverts (v1.16.0+)",category:"Network",params:[{name:"val",type:"number",description:"Max hops (0-64)",required:!0,min:0,max:64}],responseFormat:"OK",remoteOnly:!0},{name:"set advert.interval",description:"Set local advertisement interval (minutes)",category:"Network",params:[{name:"val",type:"number",description:"Interval in minutes (60-240, or 0 to disable)",required:!0,min:0,max:240}],responseFormat:"OK - advert interval set",remoteOnly:!0},{name:"set flood.advert.interval",description:"Set flood advertisement interval (hours)",category:"Network",params:[{name:"val",type:"number",description:"Interval in hours (3-168, or 0 to disable)",required:!0,min:0,max:168}],responseFormat:"OK - flood advert interval set",remoteOnly:!0},{name:"set int.thresh",description:"Set interference threshold",category:"Advanced",params:[{name:"val",type:"number",description:"Threshold value",required:!0}],responseFormat:"OK - interference threshold set",remoteOnly:!0},{name:"set agc.reset.interval",description:"Set AGC (automatic gain control) reset interval",category:"Advanced",params:[{name:"val",type:"number",description:"Interval value",required:!0}],responseFormat:"OK - AGC reset interval set",remoteOnly:!0},{name:"set multi.acks",description:"Set multi-acks mode",category:"Advanced",params:[{name:"val",label:"Multi-Acks",type:"select",description:"Enable multi-acks",required:!0,selectOptions:[{label:"On (1)",value:1},{label:"Off (0)",value:0}]}],responseFormat:"OK - multi-acks set",remoteOnly:!0},{name:"set allow.read.only",description:"Set read-only access permission",category:"Advanced",params:[{name:"state",type:"select",description:"Enable (on) or disable (off)",required:!0,options:["on","off"]}],responseFormat:"OK - read-only access updated",remoteOnly:!0},{name:"set guest.password",description:"Set guest password",category:"Advanced",params:[{name:"pwd",type:"string",description:"New guest password",required:!0}],responseFormat:"OK - guest password set",remoteOnly:!0},{name:"set prv.key",description:"Import private key (reboot required, serial-only)",category:"Advanced",params:[{name:"hex",type:"string",description:"64-character hex private key",required:!0}],responseFormat:"OK - private key imported (reboot required)",remoteOnly:!0},{name:"set owner.info",description:"Set owner information text",category:"Device Info",params:[{name:"text",type:"string",description:"Owner info (use | for newlines)",required:!0}],responseFormat:"OK - owner info set",remoteOnly:!0},{name:"set adc.multiplier",description:"Set ADC voltage multiplier",category:"Advanced",params:[{name:"val",type:"number",description:"Multiplier value (0-10, 0 = board default)",required:!0,min:0,max:10}],responseFormat:"OK - ADC multiplier set",remoteOnly:!0},{name:"set path.hash.mode",description:"Set path hash mode for routing (v1.14.0+)",category:"Network",params:[{name:"mode",label:"Path Hash Mode",type:"select",description:"Routing path-hash width",required:!0,selectOptions:[{label:"1-Byte (0)",value:0},{label:"2-Byte (1)",value:1},{label:"3-Byte (2)",value:2}]}],responseFormat:"OK - path hash mode set",remoteOnly:!0},{name:"set loop.detect",description:"Set loop detection level (v1.14.0+)",category:"Network",params:[{name:"mode",type:"select",description:"Mode: off, minimal, moderate, or strict",required:!0,options:["off","minimal","moderate","strict"]}],responseFormat:"OK - loop detection set",remoteOnly:!0},{name:"set radio.rxgain",description:"Set RX boosted gain mode (SX1262/SX1268; also LR1110 v1.16.0+)",category:"Radio Settings",params:[{name:"state",type:"select",description:"Enable (on) or disable (off)",required:!0,options:["on","off"]}],responseFormat:"OK - RX gain mode set",remoteOnly:!0},{name:"set bridge.enabled",description:"Enable or disable the bridge interface",category:"Advanced",params:[{name:"state",type:"select",description:"Enable (on) or disable (off)",required:!0,options:["on","off"]}],responseFormat:"OK - bridge enabled/disabled",remoteOnly:!0},{name:"set bridge.delay",description:"Set bridge packet delay",category:"Advanced",params:[{name:"ms",type:"number",description:"Delay in milliseconds (0-10000)",required:!0,min:0,max:1e4}],responseFormat:"OK - bridge delay set",remoteOnly:!0},{name:"set bridge.source",description:"Set bridge packet source (RX or TX logs)",category:"Advanced",params:[{name:"source",type:"select",description:"Source: rx (logRx) or tx (logTx)",required:!0,options:["rx","tx"]}],responseFormat:"OK - bridge source set",remoteOnly:!0},{name:"set bridge.baud",description:"Set RS232 bridge baud rate",category:"Advanced",params:[{name:"rate",type:"number",description:"Baud rate (9600-115200, board-dependent max)",required:!0,min:9600}],responseFormat:"OK - bridge baud rate set",remoteOnly:!0},{name:"set bridge.channel",description:"Set ESP-NOW bridge channel",category:"Advanced",params:[{name:"ch",type:"number",description:"Channel (1-14)",required:!0,min:1,max:14}],responseFormat:"OK - bridge channel set",remoteOnly:!0},{name:"set bridge.secret",description:"Set ESP-NOW bridge shared secret",category:"Advanced",params:[{name:"key",type:"string",description:"Shared secret string",required:!0}],responseFormat:"OK - bridge secret set",remoteOnly:!0},{name:"ver",description:"Get firmware version and build date",category:"Device Info",responseFormat:"<version> (Build: <date>)",remoteOnly:!0},{name:"board",description:"Get board/manufacturer name",category:"Device Info",responseFormat:"Board name string",remoteOnly:!0},{name:"neighbors",description:"List known neighbor nodes",category:"Network",responseFormat:"Formatted neighbor list",remoteOnly:!0},{name:"neighbor.remove",description:"Remove a neighbor by public key",category:"Network",params:[{name:"pubkey",type:"string",description:"Public key hex string of neighbor to remove",required:!0}],responseFormat:"OK - neighbor removed",remoteOnly:!0},{name:"clock",description:"Get current device time",category:"Device Info",responseFormat:"HH:MM - D/M/Y UTC",remoteOnly:!0},{name:"clock sync",description:"Synchronize clock to sender's timestamp",category:"Device Info",responseFormat:"OK - clock set: HH:MM - D/M/Y UTC",remoteOnly:!0},{name:"time",description:"Set time to epoch seconds",category:"Device Info",params:[{name:"epoch",type:"number",description:"Unix epoch timestamp",required:!0}],responseFormat:"OK - clock set: HH:MM - D/M/Y UTC",remoteOnly:!0},{name:"password",description:"Change admin password (requires prior login)",category:"Advanced",params:[{name:"pwd",type:"string",description:"New admin password",required:!0}],responseFormat:"password now: <pwd>",remoteOnly:!0},{name:"advert",description:"Send a flood advertisement (network-wide broadcast)",category:"Network",responseFormat:"OK - Advert sent",remoteOnly:!0},{name:"advert.zerohop",description:"Send a local-only (zero-hop) advertisement (v1.14.0+)",category:"Network",responseFormat:"OK - zerohop advert sent",remoteOnly:!0},{name:"clear stats",description:"Reset all statistics counters",category:"Advanced",responseFormat:"OK - stats reset",remoteOnly:!0},{name:"log start",description:"Start packet logging",category:"Advanced",responseFormat:"logging on",remoteOnly:!0},{name:"log stop",description:"Stop packet logging",category:"Advanced",responseFormat:"logging off",remoteOnly:!0},{name:"log erase",description:"Erase log file",category:"Advanced",responseFormat:"log erased",remoteOnly:!0},{name:"powersaving",description:"Get power saving status (NRF52 only)",category:"Device Info",responseFormat:"on or off",remoteOnly:!0},{name:"powersaving on",description:"Enable power saving mode (NRF52 only)",category:"Device Info",responseFormat:"ok",remoteOnly:!0},{name:"powersaving off",description:"Disable power saving mode (NRF52 only)",category:"Device Info",responseFormat:"ok",remoteOnly:!0},{name:"start ota",description:"Enter Bluetooth OTA update mode (repeater-only)",category:"Device Management",dangerous:!0,remoteOnly:!0},{name:"tempradio",description:"Temporarily override radio parameters for a duration",category:"Radio Settings",params:[{name:"freq",type:"number",description:"Temporary frequency in MHz",required:!0},{name:"bw",type:"number",description:"Temporary bandwidth in kHz",required:!0},{name:"sf",type:"number",description:"Temporary spreading factor (5-12)",required:!0},{name:"cr",type:"number",description:"Temporary coding rate (5-8)",required:!0},{name:"mins",type:"number",description:"Duration in minutes",required:!0}],responseFormat:"OK - temp params for N mins",remoteOnly:!0},{name:"region",description:"Export the device region map (v1.15.0+)",category:"Regions",responseFormat:"Comma-separated region list (up to 160 chars)",remoteOnly:!0},{name:"region def",description:"Bulk-define the region map in one command (v1.16.0+)",category:"Regions",params:[{name:"spec",type:"string",description:"Space-separated region tokens; each is name, name|jump, or name,jump (| or , redirects nesting to the jump region). Example: socal cencal|socal norcal",required:!0}],responseFormat:'Exported region map, or "Err - <reason>"',remoteOnly:!0},{name:"region load",description:"Reload regions from persistent storage (v1.15.0+)",category:"Regions",remoteOnly:!0},{name:"region save",description:"Persist current region map to storage (v1.15.0+)",category:"Regions",responseFormat:'OK or "Err - save failed"',remoteOnly:!0},{name:"region get",description:"Show one region (name, parent, allow/deny-flood flag) (v1.15.0+)",category:"Regions",params:[{name:"name",type:"string",description:"Region name (prefix match)",required:!0}],responseFormat:" <name> [(parent)] [F]   (F = flood allowed)",remoteOnly:!0},{name:"region put",description:"Create a region (flood allowed by default) (v1.15.0+)",category:"Regions",params:[{name:"name",type:"string",description:"Region name",required:!0},{name:"parent",type:"string",description:"Parent region name (optional, defaults to wildcard)",required:!1}],responseFormat:"OK - (flood allowed)",remoteOnly:!0},{name:"region remove",description:"Remove a region (must be empty) (v1.15.0+)",category:"Regions",params:[{name:"name",type:"string",description:"Region name (exact match)",required:!0}],responseFormat:'OK / "Err - not empty" / "Err - not found"',remoteOnly:!0},{name:"region list",description:"List regions filtered by flood permission (v1.15.0+)",category:"Regions",params:[{name:"filter",type:"select",description:"allowed = flood-permitted regions; denied = flood-blocked regions",required:!0,options:["allowed","denied"]}],remoteOnly:!0},{name:"region home",description:"Get (no arg) or set (with arg) the home region (v1.15.0+)",category:"Regions",params:[{name:"name",type:"string",description:"Leave empty to read current home; provide a region name (prefix match) to set",required:!1}],responseFormat:" home is [now] <name>",remoteOnly:!0},{name:"region default",description:"Get (no arg) or set (with arg) the default flood scope region (v1.15.0+)",category:"Regions",params:[{name:"name",type:"string",description:"Leave empty to read current default; provide a region name to set, or <null> to clear",required:!1}],responseFormat:" default scope is [now] <name|<null>>",remoteOnly:!0},{name:"region allowf",description:"Allow flood for a region (v1.15.0+)",category:"Regions",params:[{name:"name",type:"string",description:"Region name (prefix match)",required:!0}],responseFormat:"OK",remoteOnly:!0},{name:"region denyf",description:"Deny flood for a region (v1.15.0+)",category:"Regions",params:[{name:"name",type:"string",description:"Region name (prefix match)",required:!0}],responseFormat:"OK",remoteOnly:!0}];var ou;let ru=ou=class extends xd{constructor(){super(),this.open=!1,this.isLocal=!1,this.narrow=!1,this.nodeName="",this._selectedCommand=null,this._paramValues={},this._response=null,this._executing=!1,this._error=null,this._deviceResponses=[],this._unsubMsg=null,this._feedActive=!1,this._feedSince=0,this._feedGeneration=0,Pp(this,{isOpen:()=>this.open,onEscape:()=>this._onClose()})}_getCommands(){return this.isLocal?iu:nu}_getGroupedCommands(){const e=this._getCommands(),t=new Map;for(const a of e)t.has(a.category)||t.set(a.category,[]),t.get(a.category).push(a);return t}render(){if(!this.open)return;const e=this._getGroupedCommands();return ad(Tn||(Tn=pc`
      <div
        class="dialog-overlay"
        @click=${0}>
        <div
          class="dialog"
          role="dialog"
          aria-modal="true"
          aria-label="Issue command">
          <div class="dialog-header">
            <div style="flex: 1;">
              <div class="dialog-header-title">Issue Command</div>
              ${0}
            </div>
          </div>
          <div class="dialog-body">
            <!-- Command Selection -->
            <div class="form-group">
              <label class="form-label">Command</label>
              <select
                class="command-select"
                @change=${0}>
                <option value="">-- Select a command --</option>
                ${0}
              </select>
            </div>

            <!-- Command Details -->
            ${0}

            <!-- Live Device Response Feed (remote dialogs only) -->
            ${0}
          </div>
          <div class="dialog-footer">
            <button
              class="dialog-button"
              @click=${0}>
              Close
            </button>
          </div>
        </div>
      </div>
    `),this._onOverlayClick,this.targetPrefix?ad(qn||(qn=pc`<div style="font-size: 12px; color: var(--secondary-text-color); margin-top: 4px;">
                    Target: ${0}
                  </div>`),this.targetPrefix):"",this._onCommandSelected,Array.from(e.entries()).map(([e,t])=>ad(Bn||(Bn=pc`<optgroup label=${0}>
                      ${0}
                    </optgroup>`),e,t.map(e=>ad(Nn||(Nn=pc`<option value=${0}>
                            ${0} - ${0}
                          </option>`),e.name,e.name,e.description)))),this._selectedCommand?ad(jn||(jn=pc`
                  <div class="command-description">
                    <strong>${0}</strong><br />
                    ${0}
                  </div>

                  ${0}

                  <!-- Parameters -->
                  ${0}

                  <!-- Expected Response -->
                  ${0}

                  <!-- Execute Button -->
                  <button
                    class="apply-button"
                    style="width: 100%; margin-top: 12px;"
                    ?disabled=${0}
                    @click=${0}>
                    ${0}
                  </button>

                  <!-- Response Display -->
                  ${0}
                `),this._selectedCommand.name,this._selectedCommand.description,this._selectedCommand.dangerous?ad(Pn||(Pn=pc`<div class="danger-warning">
                        <span class="danger-warning-icon"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg></span>
                        <span>${0}</span>
                      </div>`),this._selectedCommand.dangerMessage||"This is a dangerous operation"):"",this._selectedCommand.params&&this._selectedCommand.params.length>0?ad(Ln||(Ln=pc`
                        <div class="command-params">
                          <label class="form-label">Parameters</label>
                          ${0}
                        </div>
                      `),this._selectedCommand.params.map(e=>this._renderParamInput(e))):"",this._selectedCommand.responseFormat?ad(Hn||(Hn=pc`<div style="margin-top: 12px; font-size: 12px; color: var(--secondary-text-color); font-style: italic;">
                        Expected: ${0}
                      </div>`),this._selectedCommand.responseFormat):"",this._executing,this._executeCommand,this._executing?"Executing...":"Execute",this._response||this._error?ad(Vn||(Vn=pc`
                        <div class="form-group" style="margin-top: 16px;">
                          <label class="form-label">Response</label>
                          <div
                            class="command-response"
                            style=${0}>
                            ${0}
                          </div>
                        </div>
                      `),this._error?"color: var(--error-color, #db4437);":"",this._error?this._error:this._renderFormattedResponse(this._response)):""):"",!this.isLocal&&this._deviceResponses.length>0?ad(Kn||(Kn=pc`
                  <div class="form-group" style="margin-top: 16px;">
                    <label class="form-label">Responses from device</label>
                    <div class="device-response-feed">
                      ${0}
                    </div>
                  </div>
                `),this._deviceResponses.map(e=>ad(Un||(Un=pc`<div class="device-response-row">
                          <span class="drr-time">${0}</span><span class="drr-text">${0}</span>${0}
                        </div>`),new Date(e.ts).toLocaleTimeString(),e.text,void 0!==e.snr?ad(Wn||(Wn=pc`<span class="drr-snr"> · SNR ${0}</span>`),e.snr):""))):"",this._onClose)}_renderParamInput(e){var t,a,i;const n=null!==(t=null!==(a=this._paramValues[e.name])&&void 0!==a?a:e.default)&&void 0!==t?t:"",o=null!==(i=e.label)&&void 0!==i?i:e.name;switch(e.type){case"boolean":return ad(Gn||(Gn=pc`
          <div class="form-group">
            <label class="form-toggle">
              <input
                type="checkbox"
                ?checked=${0}
                @change=${0}
              />
              <span class="form-toggle-label">${0}</span>
            </label>
            ${0}
          </div>
        `),!!n,t=>{this._paramValues[e.name]=t.target.checked},o,e.description?ad(Xn||(Xn=pc`<div class="form-description">${0}</div>`),e.description):"");case"select":{const t=e.selectOptions?e.selectOptions:(e.options||[]).map(e=>({label:e,value:e}));return ad(Yn||(Yn=pc`
          <div class="form-group">
            <label class="form-label">${0}</label>
            <select
              class="form-select"
              @change=${0}>
              <option value="" ?selected=${0}>-- Select --</option>
              ${0}
            </select>
            ${0}
          </div>
        `),o,a=>{const i=a.target.value,n=t.find(e=>String(e.value)===i);this._paramValues[e.name]=n?n.value:i},""===n||void 0===n,t.map(e=>ad(Qn||(Qn=pc`<option value=${0} ?selected=${0}>${0}</option>`),String(e.value),String(n)===String(e.value),e.label)),e.description?ad(Jn||(Jn=pc`<div class="form-description">${0}</div>`),e.description):"")}case"bitmask":var r,s;return ad(Zn||(Zn=pc`
          <fieldset class="form-group">
            <legend class="form-label">${0}</legend>
            ${0}
            <div class="form-description">Value: ${0}</div>
            ${0}
          </fieldset>
        `),o,(e.bits||[]).map(t=>{var a,i;const n=Number(null!==(a=null!==(i=this._paramValues[e.name])&&void 0!==i?i:e.default)&&void 0!==a?a:0);return ad(eo||(eo=pc`
                <label class="form-toggle">
                  <input
                    type="checkbox"
                    ?checked=${0}
                    @change=${0}
                  />
                  <span class="form-toggle-label">${0}</span>
                </label>
              `),(n&t.value)===t.value,a=>{var i,n;const o=a.target.checked,r=Number(null!==(i=null!==(n=this._paramValues[e.name])&&void 0!==n?n:e.default)&&void 0!==i?i:0);this._paramValues[e.name]=o?r|t.value:r&~t.value,this.requestUpdate()},t.label)}),Number(null!==(r=null!==(s=this._paramValues[e.name])&&void 0!==s?s:e.default)&&void 0!==r?r:0),e.description?ad(to||(to=pc`<div class="form-description">${0}</div>`),e.description):"");case"number":return ad(ao||(ao=pc`
          <div class="form-group">
            <label class="form-label">${0}</label>
            <input
              type="number"
              class="form-input"
              ?required=${0}
              ?min=${0}
              ?max=${0}
              .value=${0}
              @input=${0}
            />
            ${0}
          </div>
        `),o,e.required,e.min,e.max,String(n),t=>{const a=t.target;this._paramValues[e.name]=a.value?Number(a.value):""},e.description?ad(io||(io=pc`<div class="form-description">${0}</div>`),e.description):"");default:return ad(no||(no=pc`
          <div class="form-group">
            <label class="form-label">${0}</label>
            <input
              type="text"
              class="form-input"
              ?required=${0}
              .value=${0}
              @input=${0}
            />
            ${0}
          </div>
        `),o,e.required,String(n),t=>{this._paramValues[e.name]=t.target.value},e.description?ad(oo||(oo=pc`<div class="form-description">${0}</div>`),e.description):"")}}_formatValue(e){if(!0===e)return"Yes";if(!1===e)return"No";if(null==e)return"—";if("object"==typeof e)try{return JSON.stringify(e)}catch(t){return String(e)}return"string"==typeof e&&e.length,String(e)}_renderFormattedResponse(e){try{const t=JSON.parse(e);if(t&&"object"==typeof t&&!Array.isArray(t)){const e=Object.entries(t);if(e.length>0)return ad(ro||(ro=pc`
            <div style="display: grid; grid-template-columns: auto 1fr; gap: 4px 12px; font-size: 13px;">
              ${0}
            </div>
          `),e.map(([e,t])=>{const a=ou._FRIENDLY_LABELS[e]||e.replace(/_/g," ").replace(/\b\w/g,e=>e.toUpperCase()),i=ou._VALUE_FORMATTERS[e],n=i?i(t):void 0;if(n&&"object"==typeof n)return ad(so||(so=pc`
                    <div style="grid-column: 1 / -1; color: var(--secondary-text-color);">${0}</div>
                    ${0}
                  `),a,Object.entries(n).map(([e,t])=>ad(lo||(lo=pc`
                      <div style="padding-left: 12px; white-space: nowrap;">${0}</div>
                      <div style="font-family: var(--code-font-family, monospace);">${0}</div>`),e,t?"✓":"✗")));const o=void 0!==n?String(n):this._formatValue(t),r="string"==typeof t&&t.length>24;return ad(co||(co=pc`
                  <div style="color: var(--secondary-text-color); white-space: nowrap;">${0}</div>
                  <div style="font-family: var(--code-font-family, monospace); word-break: ${0};">${0}</div>
                `),a,r?"break-all":"normal",o)}))}if(Array.isArray(t))return ad(po||(po=pc`<pre style="margin: 0; white-space: pre-wrap; font-size: 13px;">${0}</pre>`),JSON.stringify(t,null,2))}catch(e){}return ad(ho||(ho=pc`<span style="white-space: pre-wrap;">${0}</span>`),e)}_onCommandSelected(e){const t=e.target.value,a=this._getCommands();this._selectedCommand=a.find(e=>e.name===t)||null;const i={};for(const e of null!==(n=null===(o=this._selectedCommand)||void 0===o?void 0:o.params)&&void 0!==n?n:[]){var n,o;void 0!==e.default&&(i[e.name]=e.default)}this._paramValues=i,this._response=null,this._error=null}async _executeCommand(){if(this._selectedCommand&&this.hass){this._executing=!0,this._response=null,this._error=null;try{let e;if(this.isLocal)e=await Nd(this.hass,this._selectedCommand.name,Object.keys(this._paramValues).length>0?this._paramValues:void 0,this.entryId);else{if(!this.targetPrefix)return void(this._error="No target device specified");const t=this._paramValues;let a=this._selectedCommand.name;if(Object.keys(t).length>0){const e=Object.entries(t).map(([,e])=>String(e)).join(" ");a=`${a} ${e}`}e=await jd(this.hass,this.targetPrefix,a,this.entryId)}e.success?this._response=e.response:this._error=e.response||"Command execution failed"}catch(e){this._error=`Error: ${String(e)}`}finally{this._executing=!1}}}updated(e){(e.has("open")||e.has("targetPrefix")||e.has("isLocal")||e.has("entryId"))&&(this._stopResponseFeed(),this.open&&!this.isLocal&&this._startResponseFeed())}disconnectedCallback(){super.disconnectedCallback(),this._stopResponseFeed()}async _startResponseFeed(){var e;if(this._feedActive||this.isLocal||!this.open||null===(e=this.hass)||void 0===e||!e.connection)return;const t=++this._feedGeneration,a=this.entryId;this._feedActive=!0,this._feedSince=Date.now(),this._deviceResponses.length&&(this._deviceResponses=[]);try{const e=await this.hass.connection.subscribeEvents(e=>{var i,n,o,r;if(t!==this._feedGeneration||!this.open||this.isLocal)return;const s=e.data;if(a&&(null!==(i=s.entry_id)&&void 0!==i?i:s.device)!==a)return;if(!0===s.outgoing)return;if(!this._prefixMatches(s.pubkey_prefix))return;if(s.sender_name===this.nodeName)return;const l=Date.parse(null!==(n=s.timestamp)&&void 0!==n?n:"")||Date.now();l<this._feedSince-1e3||(this._deviceResponses=[...this._deviceResponses,{text:null!==(o=s.message)&&void 0!==o?o:"",sender:null!==(r=s.sender_name)&&void 0!==r?r:"",ts:l,snr:"number"==typeof s.snr?s.snr:void 0}])},"meshcore_message");if(t!==this._feedGeneration||!this.open||this.isLocal)return void e();this._unsubMsg=e}catch(e){t===this._feedGeneration&&(this._feedActive=!1)}}_stopResponseFeed(){this._feedGeneration++,this._unsubMsg&&(this._unsubMsg(),this._unsubMsg=null),this._feedActive=!1}_prefixMatches(e){if(!e||!this.targetPrefix)return!1;const t=Math.min(e.length,this.targetPrefix.length,12);return e.slice(0,t).toLowerCase()===this.targetPrefix.slice(0,t).toLowerCase()}_onOverlayClick(e){e.target===e.currentTarget&&this._onClose()}_onClose(){this._selectedCommand=null,this._paramValues={},this._response=null,this._error=null,this._stopResponseFeed(),this._deviceResponses=[],this.dispatchEvent(new CustomEvent("close",{bubbles:!0}))}};function su(e){var t,a,i,n;const o=e.entity_id;if(o.includes("_cli_console")||String(null!==(t=e.unique_id)&&void 0!==t?t:"").endsWith("_cli_console"))return null;const r=null!==(a=null!==(i=null!==(n=e.original_device_class)&&void 0!==n?n:e.device_class)&&void 0!==i?i:e._stateDeviceClass)&&void 0!==a?a:null;if(o.startsWith("binary_sensor.meshcore_")&&/_err_(pool_full|cad_timeout|rx_timeout)_/.test(o)){const e=o.includes("err_pool_full")?"Radio Fault: Packet Pool":o.includes("err_cad_timeout")?"Radio Fault: CAD Timeout":"Radio Fault: RX-Start Timeout";return{entity_id:o,label:e,icon:"alert",colorScheme:"neutral",sortOrder:13,booleanProblem:!0}}if(o.startsWith("binary_sensor.meshcore_")&&"connectivity"===r)return null;if(o.startsWith("binary_sensor.meshcore_"))return null;if(o.includes("_rate_"))return null;if(o.includes("full_evts"))return null;if(o.includes("node_status")||o.includes("companion_prefix")||o.includes("request_rate")||o.includes("delivery")||o.includes("path_")||o.includes("neighbor_"))return null;if("battery"===r||o.includes("battery_percentage"))return{entity_id:o,label:"Battery",icon:"battery",colorScheme:"battery",sortOrder:1,metricKey:"battery_pct"};if("voltage"===r||o.includes("battery_voltage")||o.includes("_voltage")||o.includes("cv_voltage"))return{entity_id:o,label:"Voltage",icon:"power",colorScheme:"neutral",sortOrder:2};if("duration"===r||o.includes("uptime"))return{entity_id:o,label:"Uptime",icon:"clock",colorScheme:"neutral",sortOrder:3,metricKey:"uptime_hours"};if("signal_strength"===r||o.includes("tx_power"))return{entity_id:o,label:"TX Power",icon:"power",colorScheme:"neutral",sortOrder:6};if("temperature"===r||o.includes("_temperature"))return{entity_id:o,label:"Temperature",icon:"thermometer",colorScheme:"neutral",sortOrder:7,metricKey:"temperature",staticTooltip:"Ambient temperature reported by the node. Informational; no threshold band -- expected ranges depend heavily on where the device is mounted."};if(o.includes("rx_airtime_utilization"))return{entity_id:o,label:"RX Airtime Util",icon:"chart",colorScheme:"neutral",sortOrder:10,metricKey:"rx_airtime_util"};if(o.includes("airtime_utilization"))return{entity_id:o,label:"TX Airtime Util",icon:"chart",colorScheme:"neutral",sortOrder:10,metricKey:"tx_airtime_util"};if(o.includes("rx_airtime"))return{entity_id:o,label:"RX Airtime",icon:"chart",colorScheme:"neutral",sortOrder:9};if(o.includes("airtime"))return{entity_id:o,label:"Airtime",icon:"chart",colorScheme:"neutral",sortOrder:9};if(o.includes("snr")&&!o.includes("neighbor"))return{entity_id:o,label:"SNR",icon:"signal",colorScheme:"signal",sortOrder:4,metricKey:"snr"};if(o.includes("rssi"))return{entity_id:o,label:"RSSI",icon:"signal",colorScheme:"signal",sortOrder:5,metricKey:"rssi"};if(o.includes("noise_floor"))return{entity_id:o,label:"Noise Floor",icon:"signal",colorScheme:"signal",sortOrder:11,metricKey:"noise_floor"};if(o.includes("tx_queue_len"))return{entity_id:o,label:"TX Queue Length",icon:"counter",colorScheme:"neutral",sortOrder:12,metricKey:"tx_queue_len"};if(o.includes("contact_count"))return{entity_id:o,label:"Contacts",icon:"counter",colorScheme:"neutral",sortOrder:8};if(o.includes("channel_util"))return{entity_id:o,label:"Channel Util",icon:"chart",colorScheme:"neutral",sortOrder:10,metricKey:"channel_util"};if(o.startsWith("sensor.meshcore_")){const t=e.original_name||e.name||o.split(".")[1];return{entity_id:o,label:t,icon:"",colorScheme:"neutral",sortOrder:99}}return null}async function lu(e){const[t,a]=await Promise.all([e.callWS({type:"config/device_registry/list"}),e.callWS({type:"config/entity_registry/list"})]),i={};for(const e of t)if(e.identifiers)for(const[t,a]of e.identifiers)"meshcore"===t&&(i[a]=e.id);const n={};for(const t of a){var o;if(!t.device_id||t.disabled_by)continue;if(!t.entity_id.startsWith("sensor.meshcore_")&&!t.entity_id.startsWith("binary_sensor.meshcore_"))continue;const a=null===(o=e.states)||void 0===o||null===(o=o[t.entity_id])||void 0===o||null===(o=o.attributes)||void 0===o?void 0:o.device_class,i=su(a?{...t,_stateDeviceClass:a}:t);i&&(n[t.device_id]||(n[t.device_id]=[]),n[t.device_id].push(i))}for(const e of Object.keys(n))n[e].sort((e,t)=>e.sortOrder-t.sortOrder);return{meshcoreDeviceMap:i,deviceEntities:n}}ru.styles=[Md,bc(uo||(uo=pc`
      :host {
        display: block;
      }

      :host([narrow]) .dialog {
        max-width: 100%;
      }

      .dialog {
        max-width: 500px;
      }

      .danger-warning {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 12px;
        margin: 8px 0;
        background: rgba(219, 68, 55, 0.1);
        border: 1px solid var(--error-color, #db4437);
        border-radius: 6px;
        font-size: 12px;
        color: var(--error-color, #db4437);
      }

      .danger-warning-icon {
        font-size: 16px;
        flex-shrink: 0;
      }

      .device-response-feed {
        display: flex;
        flex-direction: column;
        gap: 4px;
        max-height: 180px;
        overflow-y: auto;
        font-family: var(--code-font-family, monospace);
        font-size: 12px;
      }

      .device-response-row {
        padding: 4px 8px;
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.04));
        border-radius: 4px;
        word-break: break-word;
      }

      .drr-time,
      .drr-snr {
        color: var(--secondary-text-color);
      }

      .drr-time {
        margin-right: 6px;
      }
    `))],ru._FRIENDLY_LABELS={adv_type:"Device Type",tx_power:"TX Power (dBm)",max_tx_power:"Max TX Power (dBm)",public_key:"Public Key",adv_lat:"Latitude",adv_lon:"Longitude",multi_acks:"Multi-Acks",adv_loc_policy:"Location Ad Policy",telemetry_mode_env:"Telemetry: Environment",telemetry_mode_loc:"Telemetry: Location",telemetry_mode_base:"Telemetry: Base",manual_add_contacts:"Manual Add Contacts",radio_freq:"Frequency (MHz)",radio_bw:"Bandwidth (kHz)",radio_sf:"Spreading Factor",radio_cr:"Coding Rate",name:"Name",path_hash_mode:"Path Hash Mode",firmware_ver:"Firmware Version",board_type:"Board Type",suggested_timeout:"Suggested Timeout (ms)",capabilities:"Capabilities",voltage:"Voltage (mV)",percentage:"Battery (%)",uptime:"Uptime (s)",temperature:"Temperature",max_hops:"Max Hops (0 = unlimited)",config:"Auto-Add Config"},ru._VALUE_FORMATTERS={adv_loc_policy:e=>au(e,Jh),path_hash_mode:e=>au(e,Zh),telemetry_mode_env:e=>au(e,eu),telemetry_mode_loc:e=>au(e,eu),telemetry_mode_base:e=>au(e,eu),manual_add_contacts:e=>{if(!0===e)return"Manual Mode";if(!1===e)return"Auto-Add Enabled";const t=Qh(e);return void 0===t?`Unknown (${e})`:t?"Manual Mode":"Auto-Add Enabled"},multi_acks:e=>{const t=Qh(e);return void 0===t?`Unknown (${e})`:t?"Yes":"No"},adv_lat:e=>{const t=Qh(e);return void 0===t?`${e}`:`${t.toFixed(6)}°`},adv_lon:e=>{const t=Qh(e);return void 0===t?`${e}`:`${t.toFixed(6)}°`},config:e=>{const t=Qh(e);return void 0===t?`Unknown (${e})`:function(e,t){const a={};for(const i of t)a[i.label]=(e&i.value)===i.value;return a}(t,tu)}},hc([Sd({type:Boolean})],ru.prototype,"open",void 0),hc([Sd({type:Object})],ru.prototype,"hass",void 0),hc([Sd({type:String})],ru.prototype,"entryId",void 0),hc([Sd({type:String})],ru.prototype,"targetPrefix",void 0),hc([Sd({type:Boolean})],ru.prototype,"isLocal",void 0),hc([Sd({type:Boolean})],ru.prototype,"narrow",void 0),hc([Sd({type:String})],ru.prototype,"nodeName",void 0),hc([Ad()],ru.prototype,"_selectedCommand",void 0),hc([Ad()],ru.prototype,"_paramValues",void 0),hc([Ad()],ru.prototype,"_response",void 0),hc([Ad()],ru.prototype,"_executing",void 0),hc([Ad()],ru.prototype,"_error",void 0),hc([Ad()],ru.prototype,"_deviceResponses",void 0),ru=ou=hc([kd("meshcore-command-dialog")],ru);let cu=class extends xd{constructor(){super(),this.narrow=!1,this._openPrefix=null,this._loggingIn=null,this._managedDevices={repeaters:[],clients:[]},this._contactsByPrefix={},this._loading=!0,this._error=null,this._confirmAction=null,this._confirmDialogOpen=!1,this._commandDialogOpen=!1,this._commandDialogTarget="",this._commandDialogIsLocal=!1,this._statusMessage=null,this._statusMessageTimeout=null,this._deviceEntities={},this._meshcoreDeviceMap={},this._entityRegistryLoaded=!1,this._hiddenSensors={},this._contextMenu=null,this._overlayPointerStarted=!1,this._settingsDeviceKey=null,this._hiddenSensorsModalKey=null,this._neighborContextMenu=null,this._neighborData={},this._openManage=()=>{var e;const t=null===(e=this.config)||void 0===e?void 0:e.entry_id;history.pushState(null,"",t?`/config/integrations/integration/meshcore#config_entry=${t}`:"/config/integrations/integration/meshcore"),window.dispatchEvent(new CustomEvent("location-changed"))},Pp(this,{isOpen:()=>null!==this._contextMenu,onEscape:()=>this._dismissContextMenu(),getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="tile-context"]')}}),Pp(this,{isOpen:()=>null!==this._neighborContextMenu,onEscape:()=>this._dismissNeighborContextMenu(),getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="neighbor-context"]')}}),Pp(this,{isOpen:()=>null!==this._settingsDeviceKey,onEscape:()=>this._closeSettingsModal(),getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="device-settings"]')}}),Pp(this,{isOpen:()=>null!==this._hiddenSensorsModalKey,onEscape:()=>this._closeHiddenSensorsModal(),getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="hidden-sensors"]')}})}connectedCallback(){super.connectedCallback(),this._loadHiddenSensors(),this._loadManagedDevices()}disconnectedCallback(){super.disconnectedCallback(),null!==this._statusMessageTimeout&&(clearTimeout(this._statusMessageTimeout),this._statusMessageTimeout=null)}updated(e){e.has("config")&&this._loadManagedDevices(),e.has("hass")&&this.hass&&!this._entityRegistryLoaded&&this._loadEntityRegistry()}render(){var e,t,a,i,n;return this.hass?ad(go||(go=pc`
      <div class="devices-layout">
        <div class="content-area">
          ${0}

          ${0}
        </div>
      </div>

      <!-- Confirmation Dialog -->
      <meshcore-confirm-dialog
        .open=${0}
        .title=${0}
        .message=${0}
        @confirm=${0}
        @cancel=${0}>
      </meshcore-confirm-dialog>

      <!-- Command Dialog -->
      <meshcore-command-dialog
        .open=${0}
        .hass=${0}
        .entryId=${0}
        .targetPrefix=${0}
        .nodeName=${0}
        ?isLocal=${0}
        ?narrow=${0}
        @close=${0}>
      </meshcore-command-dialog>

      <!-- Tile Context Menu Modal -->
      ${0}

      <!-- Neighbor Context Menu Modal -->
      ${0}

      <!-- Settings Modal -->
      ${0}

      <!-- Hidden Sensors List Modal -->
      ${0}

      <!-- Status Toast -->
      ${0}
    `),this._error?ad(fo||(fo=pc`<div class="error-state"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg> ${0}</div>`),this._error):od,this._loading?ad(vo||(vo=pc`<div class="loading-state"><div class="loading-spinner"></div> Loading devices...</div>`)):ad(bo||(bo=pc`
                ${0}
                ${0}
              `),this._renderOpenOrList(),0===this._managedDevices.repeaters.length&&0===this._managedDevices.clients.length?ad(yo||(yo=pc`
                      <div class="empty-state">
                        <div class="empty-text">No managed devices</div>
                        <div class="empty-subtext">Add repeaters or clients in Settings → Integration to manage them here.</div>
                      </div>
                    `)):od),this._confirmDialogOpen,(null===(e=this._confirmAction)||void 0===e?void 0:e.title)||"",(null===(t=this._confirmAction)||void 0===t?void 0:t.message)||"",this._onConfirmAction,this._onConfirmCancel,this._commandDialogOpen,this.hass,null===(a=this.config)||void 0===a?void 0:a.entry_id,this._commandDialogTarget,null!==(i=null===(n=this.config)||void 0===n?void 0:n.node_name)&&void 0!==i?i:"",this._commandDialogIsLocal,this.narrow,this._onCommandDialogClose,this._contextMenu?ad(_o||(_o=pc`
        <div class="modal-overlay"
             @pointerdown=${0}
             @click=${0}>
          <div class="modal-card" data-a11y="tile-context"
               role="dialog" aria-modal="true" aria-label="${0} actions"
               @click=${0}
               @pointerdown=${0}>
            <div class="modal-header">
              <span class="modal-title">${0}</span>
              <button class="modal-close" aria-label="Close" @click=${0}
                      @pointerdown=${0}>&times;</button>
            </div>
            <div class="modal-body">
              <button class="modal-action danger" @click=${0}>
                <span class="modal-action-icon"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/></svg></span>
                Hide Sensor
              </button>
            </div>
          </div>
        </div>
      `),this._onOverlayPointerDown,this._closeContextMenu,this._contextMenu.label,e=>e.stopPropagation(),e=>e.stopPropagation(),this._contextMenu.label,this._dismissContextMenu,e=>e.stopPropagation(),this._hideSensorFromContext):od,this._neighborContextMenu?ad(xo||(xo=pc`
        <div class="modal-overlay"
             @pointerdown=${0}
             @click=${0}>
          <div class="modal-card" data-a11y="neighbor-context"
               role="dialog" aria-modal="true" aria-label="${0} actions"
               @click=${0}
               @pointerdown=${0}>
            <div class="modal-header">
              <span class="modal-title">${0}</span>
              <button class="modal-close" aria-label="Close" @click=${0}
                      @pointerdown=${0}>&times;</button>
            </div>
            <div class="modal-body">
              <button class="modal-action danger" @click=${0}>
                <span class="modal-action-icon"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg></span>
                Remove Neighbor
              </button>
            </div>
          </div>
        </div>
      `),this._onOverlayPointerDown,this._closeNeighborContextMenu,this._neighborContextMenu.name,e=>e.stopPropagation(),e=>e.stopPropagation(),this._neighborContextMenu.name,this._dismissNeighborContextMenu,e=>e.stopPropagation(),this._removeNeighborFromContext):od,this._settingsDeviceKey?(()=>{const e=this._getSettingsDeviceContext();return e?ad(wo||(wo=pc`
        <div class="modal-overlay" @click=${0}>
          <div class="modal-card" data-a11y="device-settings"
               role="dialog" aria-modal="true" aria-label="${0} settings"
               @click=${0}>
            <div class="modal-header">
              <span class="modal-title">${0} Settings</span>
              <button class="modal-close" aria-label="Close" @click=${0}>&times;</button>
            </div>
            <div class="modal-body">
              <button class="modal-action" @click=${0}>
                <span class="modal-action-icon"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/></svg></span>
                View Hidden Sensors (${0})
              </button>

              <!-- Issue Command -->
              <button class="modal-action" ?disabled=${0} @click=${0}>
                <span class="modal-action-icon"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20 19V7H4v12h16m0-16a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h16m-7 14v-2h5v2h-5m-3.42-4L5.57 9H8.4l3.3 3.3c.39.39.39 1.03 0 1.42L8.42 17H5.59l4-4z"/></svg></span>
                Issue Command
              </button>

              <div class="modal-divider"></div>

              <!-- Reboot -->
              <button class="modal-action danger" ?disabled=${0} @click=${0}>
                <span class="modal-action-icon"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M17.65 6.35A7.958 7.958 0 0012 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0112 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg></span>
                Reboot Device
              </button>

              <!-- Start OTA (repeaters only) -->
              ${0}
            </div>
          </div>
        </div>
      `),this._closeSettingsModal,e.name,e=>e.stopPropagation(),e.name,this._closeSettingsModal,this._openHiddenSensorsList,(this._hiddenSensors[this._settingsDeviceKey]||[]).length,!e.isOnline,()=>{this._closeSettingsModal(),this._openCommandDialog(e.device,!1)},!e.isOnline,()=>{this._closeSettingsModal(),this._confirmActionDialog(`Reboot ${e.name}?`,"The device will restart.",()=>this._executeRemoteAction(e.device,"reboot"))},"repeater"===e.type?ad(ko||(ko=pc`
                <button class="modal-action danger" ?disabled=${0} @click=${0}>
                  <span class="modal-action-icon"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M5 18h14v2H5v-2zm4.6-2.7L5 10.7l2-1.9 2.6 2.6L17 4l2 2-9.4 9.3z"/></svg></span>
                  Start OTA Update
                </button>
              `),!e.isOnline,()=>{this._closeSettingsModal(),this._confirmActionDialog(`Start OTA on ${e.name}?`,"The device will enter update mode.",()=>this._executeRemoteAction(e.device,"start ota"))}):od):od})():od,this._hiddenSensorsModalKey?this._renderHiddenSensorsModal():od,this._statusMessage?ad($o||($o=pc`<div class="status-toast ${0}">${0}${0}</div>`),this._statusMessage.type,"success"===this._statusMessage.type?"✓ ":"✗ ",this._statusMessage.text):od):ad(mo||(mo=pc`<div class="content-area"><div class="loading-state"><div class="loading-spinner"></div> Initializing...</div></div>`))}_renderOpenOrList(){const{repeaters:e,clients:t}=this._managedDevices;if(e.length+t.length===0)return od;const a=e.find(e=>e.pubkey_prefix===this._openPrefix),i=t.find(e=>e.pubkey_prefix===this._openPrefix);return a||i?ad(Co||(Co=pc`
        <button class="back-btn" @click=${0}>‹ All devices</button>
        ${0}
      `),()=>{this._openPrefix=null},this._renderDeviceSection(a||i,a?"repeater":"client")):this._renderDeviceList()}_status(e){var t;let a="unknown",i="Unknown";if(e.status_entity_id&&null!==(t=this.hass)&&void 0!==t&&t.states[e.status_entity_id]){const t=this.hass.states[e.status_entity_id].state;"on"===t?(a="online",i="Online"):"off"===t&&(a="offline",i="Offline")}else e.status&&(a="online"===e.status?"online":"offline"===e.status?"offline":"unknown",i="online"===e.status?"Online":"offline"===e.status?"Offline":"Unknown");return{statusClass:a,statusLabel:i}}_renderDeviceList(){const e=[...this._managedDevices.repeaters.map(e=>({d:e,type:"repeater"})),...this._managedDevices.clients.map(e=>({d:e,type:"client"}))];return ad(So||(So=pc`
      <div class="device-list">
        ${0}
        <button class="device-card add" @click=${0}>
          <div class="section-icon">＋</div>
          <div class="device-card-text">
            <div class="device-name">Manage devices</div>
            <div class="device-meta"><span>Add or remove repeaters and clients, set passwords and neighbours</span></div>
          </div>
        </button>
      </div>
    `),e.map(({d:e,type:t})=>{var a;const{statusClass:i,statusLabel:n}=this._status(e),o=this._contactsByPrefix[null===(a=e.pubkey_prefix)||void 0===a?void 0:a.toLowerCase()],r=null!=o&&o.last_advert?this._ago(1e3*o.last_advert):"";return ad(Ao||(Ao=pc`
            <button class="device-card" @click=${0}>
              <div class="section-icon ${0}">
                ${0}
              </div>
              <div class="device-card-text">
                <div class="device-name">${0}</div>
                <div class="device-meta">
                  <span>${0}</span>
                  ${0}
                </div>
              </div>
              <span class="status-badge ${0}"><span class="status-dot ${0}"></span>${0}</span>
              <span class="device-card-chevron" aria-hidden="true">›</span>
            </button>
          `),()=>{this._openPrefix=e.pubkey_prefix},t,ad("repeater"===t?Mo||(Mo=pc`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11zm0 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`):Fo||(Fo=pc`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>`)),e.name,"repeater"===t?"Repeater":"Client",r?ad(Eo||(Eo=pc`<span>Heard ${0}</span>`),r):od,i,i,n)}),this._openManage)}_ago(e){const t=Math.max(0,(Date.now()-e)/6e4);return t<1?"just now":t<60?`${Math.floor(t)}m ago`:t<1440?`${Math.floor(t/60)}h ago`:`${Math.floor(t/1440)}d ago`}async _loginAndRefresh(e){if(this.hass){this._loggingIn=e.pubkey_prefix;try{var t;const a=await jd(this.hass,e.pubkey_prefix,"ver",null===(t=this.config)||void 0===t?void 0:t.entry_id);a.success&&!/not confirmed/i.test(a.response||"")?(this._showStatusMessage(`${e.name} answered: ${a.response||"OK"}`,"success"),await this._loadManagedDevices()):this._showStatusMessage(e.password?`${e.name} didn't confirm the login. Check it's in range and the password is right.`:`${e.name} has no saved password. Add one under Manage devices.`,"error")}finally{this._loggingIn=null}}}_renderDeviceSection(e,t){var a,i,n;const{statusClass:o,statusLabel:r}=this._status(e),s="online"===o,l=this._getManagedDeviceKey(e,t),c=this._getDeviceEntities(e,t),d=(this._hiddenSensors[l]||[]).length,p="repeater"===t&&e.neighbors_enabled,h=this._neighborData[e.pubkey_prefix],u=c.find(e=>"uptime_hours"===e.metricKey),m=s&&u?this._formatUptimeFromEntity(u.entity_id):"",g=this._contactsByPrefix[null===(a=e.pubkey_prefix)||void 0===a?void 0:a.toLowerCase()],f=null==g?void 0:g.adv_lat,v=null==g?void 0:g.adv_lon,b=null==g?void 0:g.last_advert,y="number"==typeof f?f:NaN,_="number"==typeof v?v:NaN,x=Number.isFinite(y)&&Number.isFinite(_)&&(0!==y||0!==_);return p&&!h&&this._loadNeighbors(e),ad(Do||(Do=pc`
      <div class="device-section" @tile-context-menu=${0}>
        <div class="section-header">
          <div class="section-title">
            <div class="section-icon ${0}">
              ${0}
            </div>
            <div>
              <div class="device-name">${0}</div>
              <div class="device-meta">
                <span>${0}</span>
                ${0}
                <span>Key: ${0}</span>
                ${0}
              </div>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:4px;">
            <button class="settings-btn" @click=${0} title="Device settings" aria-label="Device settings">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.49.49 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 00-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
            </button>
            <div class="status-badge ${0}"
                 @click=${0}
                 style="${0}">
              <span class="status-dot ${0}"></span>
              ${0}${0}
            </div>
          </div>
        </div>

        <div class="actions-row top">
          <button class="action-btn" ?disabled=${0} @click=${0}>Flood advert</button>
          <button class="action-btn" ?disabled=${0} @click=${0}>Sync clock</button>
          <button class="action-btn" ?disabled=${0} @click=${0}>Command…</button>
        </div>

        ${0}

        ${0}

        ${0}
      </div>
    `),e=>this._onTileContextMenu(e,l),t,ad("repeater"===t?zo||(zo=pc`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11zm0 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`):Oo||(Oo=pc`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>`)),e.name,"repeater"===t?"Repeater":"Client",e.firmware_version?ad(Io||(Io=pc`<span>Firmware: v${0}</span>`),null!==(i=null===(n=e.firmware_version.match(/(\d+\.\d+\.\d+)/))||void 0===n?void 0:n[1])&&void 0!==i?i:e.firmware_version):od,e.pubkey_prefix,x?ad(Ro||(Ro=pc`<span>Loc: ${0}, ${0}</span>`),y.toFixed(4),_.toFixed(4)):od,()=>this._settingsDeviceKey=l,o,()=>e.status_entity_id&&this._fireMoreInfo(e.status_entity_id),e.status_entity_id?"cursor:pointer":"",o,r,m?ad(To||(To=pc` · ${0}`),m):od,!s,()=>this._executeRemoteAction(e,"advert"),!s,()=>this._executeRemoteAction(e,"clock sync"),!s,()=>this._openCommandDialog(e,!1),s?od:ad(qo||(qo=pc`
              <div class="status-note">
                ${0}
                <div style="margin-top:8px">
                  <button class="action-btn" ?disabled=${0}
                    @click=${0}>
                    ${0}
                  </button>
                </div>
              </div>
            `),ad("offline"===o?Bo||(Bo=pc`<b>${0} isn't answering.</b> It may be out of range or turned off. Stats will update when it next responds.`):No||(No=pc`<b>No stats yet.</b> ${0} hasn't answered a status request, so battery, signal and traffic are blank.`),e.name),this._loggingIn===e.pubkey_prefix,()=>this._loginAndRefresh(e),this._loggingIn===e.pubkey_prefix?"Logging in…":"Log in and refresh"),c.length>0?ad(jo||(jo=pc`
              <meshcore-node-summary
                .hass=${0}
                .device=${0}
                .entities=${0}
                .hiddenCount=${0}
                .fallbackLatitude=${0}
                .fallbackLongitude=${0}
                .fallbackUpdated=${0}>
              </meshcore-node-summary>
            `),this.hass,{...e,type:t},c,d,f,v,b):od,p?this._renderInlineNeighbors(e,h):od)}_renderInlineNeighbors(e,t){return!t||t.loading?ad(Po||(Po=pc`
        <div class="neighbor-section">
          <div class="subsection-label">Neighbors</div>
          <div class="neighbor-loading"><div class="loading-spinner"></div> Loading neighbors...</div>
        </div>
      `)):0===t.neighbors.length?ad(Lo||(Lo=pc`
        <div class="neighbor-section">
          <div class="subsection-label">Neighbors</div>
          <div style="font-size: 13px; color: var(--secondary-text-color); padding: 8px 0;">No neighbors found</div>
        </div>
      `)):ad(Ho||(Ho=pc`
      <div class="neighbor-section">
        <div class="subsection-label">Neighbors (${0})</div>

        ${0}

        <table class="neighbor-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>SNR</th>
              <th>Seen (48h)</th>
              <th>Last Heard</th>
            </tr>
          </thead>
          <tbody>
            ${0}
          </tbody>
        </table>
      </div>
    `),t.neighbors.length,t.chartData.length>0?ad(Vo||(Vo=pc`
              <div class="chart-container">
                <meshcore-snr-chart
                  .data=${0}
                  .neighbors=${0}
                  width="550"
                  height="200"
                  timeRange="24">
                </meshcore-snr-chart>
              </div>
            `),t.chartData,t.neighbors.map(e=>e.pubkey_prefix)):od,t.neighbors.map(t=>{var a;return ad(Ko||(Ko=pc`
              <tr @contextmenu=${0}
                  ${0}>
                <td><code>${0}</code></td>
                <td class=${0}>
                  <span class="clickable-value"
                        @click=${0}>
                    ${0} dB
                  </span>
                </td>
                <td>
                  <span class="clickable-value"
                        @click=${0}>
                    ${0}×
                  </span>
                </td>
                <td>${0}</td>
              </tr>
            `),a=>this._onNeighborRightClick(a,t,e.pubkey_prefix),qh(()=>this._onNeighborRightClick(new MouseEvent("contextmenu"),t,e.pubkey_prefix)),t.name&&t.name!==t.pubkey_prefix.substring(0,6).toUpperCase()?`${t.name} (${t.pubkey_prefix.substring(0,6).toUpperCase()})`:t.pubkey_prefix.substring(0,6).toUpperCase(),t.snr>5?"snr-good":t.snr>=0?"snr-fair":"snr-poor",a=>{a.stopPropagation(),this._openNeighborMoreInfo(e.pubkey_prefix,t.pubkey_prefix,"snr")},t.snr.toFixed(1),a=>{a.stopPropagation(),this._openNeighborMoreInfo(e.pubkey_prefix,t.pubkey_prefix,"seen")},null!==(a=t.seen_48h)&&void 0!==a?a:0,this._formatRelativeTime(t.last_seen))}))}async _loadEntityRegistry(){if(this.hass&&!this._entityRegistryLoaded){this._entityRegistryLoaded=!0;try{const{meshcoreDeviceMap:e,deviceEntities:t}=await lu(this.hass);this._meshcoreDeviceMap=e,this._deviceEntities=t}catch(e){console.error("Failed to load entity registry:",e)}}}_getDeviceEntities(e,t){var a;if(!this.hass||!this.config)return[];const i=this._getManagedDeviceKey(e,t),n=new Set(this._hiddenSensors[i]||[]),o=(null===(a=this.selectedDevice)||void 0===a?void 0:a.entry_id)||"",r=e.pubkey_prefix||"",s=`${o}_${t}_${r}`,l=this._meshcoreDeviceMap[s];if(l&&this._deviceEntities[l])return this._deviceEntities[l].filter(e=>!n.has(e.entity_id));for(const[e,a]of Object.entries(this._meshcoreDeviceMap))if(e.includes(r)&&e.includes(t)&&this._deviceEntities[a])return this._deviceEntities[a].filter(e=>!n.has(e.entity_id));const c=r.substring(0,6).toLowerCase();if(!c)return[];const d=[];for(const e of Object.values(this._deviceEntities))for(const t of e)t.entity_id.toLowerCase().includes(c)&&!n.has(t.entity_id)&&d.push(t);return d.sort((e,t)=>e.sortOrder-t.sortOrder)}async _loadNeighbors(e){if(this.hass){this._neighborData={...this._neighborData,[e.pubkey_prefix]:{neighbors:[],chartData:[],loading:!0,loaded:!1}};try{var t;const a=await async function(e,t,a){try{const i={type:"meshcore_chat/get_neighbors",target_prefix:t};return a&&(i.entry_id=a),(await e.callWS(i)).neighbors||[]}catch(e){return[]}}(this.hass,e.pubkey_prefix,null===(t=this.config)||void 0===t?void 0:t.entry_id);let i=[];a.length>0&&(i=await this._fetchSNRHistory(a)),this._neighborData={...this._neighborData,[e.pubkey_prefix]:{neighbors:a,chartData:i,loading:!1,loaded:!0}}}catch(t){console.error(`Failed to load neighbors for ${e.name}:`,t),this._neighborData={...this._neighborData,[e.pubkey_prefix]:{neighbors:[],chartData:[],loading:!1,loaded:!0}}}}}async _fetchSNRHistory(e){if(!this.hass)return[];try{const t=e.filter(e=>{var t;return null===(t=e.entity_ids)||void 0===t?void 0:t.snr}).map(e=>e.entity_ids.snr);if(0===t.length)return[];const a=await this.hass.callWS({type:"recorder/statistics_during_period",start_time:new Date(Date.now()-864e5).toISOString(),end_time:(new Date).toISOString(),statistic_ids:t,period:"hour"}),i={};return Object.entries(a).forEach(([t,a])=>{const n=e.find(e=>{var a;return(null===(a=e.entity_ids)||void 0===a?void 0:a.snr)===t});n&&Array.isArray(a)&&a.forEach(e=>{if(e.start&&null!=e.mean){const t=new Date(e.start).getTime();i[t]||(i[t]={}),i[t][n.pubkey_prefix]=e.mean}})}),Object.entries(i).map(([e,t])=>({timestamp:parseInt(e,10),values:t})).sort((e,t)=>e.timestamp-t.timestamp)}catch(e){return[]}}async _loadManagedDevices(){if(this.hass)try{var e;this._loading=!0,this._error=null;const t=await async function(e,t){try{const a={type:"meshcore_chat/get_managed_devices"};t&&(a.entry_id=t);const i=await e.callWS(a);return{repeaters:i.repeaters||[],clients:i.clients||[]}}catch(e){return{repeaters:[],clients:[]}}}(this.hass,null===(e=this.config)||void 0===e?void 0:e.entry_id);this._managedDevices=t,this._loadContacts()}catch(e){this._error=`Failed to load devices: ${String(e)}`}finally{this._loading=!1}}async _loadContacts(){if(this.hass)try{var e,t;const a=(null===(e=this.selectedDevice)||void 0===e?void 0:e.entry_id)||(null===(t=this.config)||void 0===t?void 0:t.entry_id),i=await Rd(this.hass,a),n={};for(const e of i)e.pubkey_prefix&&(n[e.pubkey_prefix.toLowerCase()]=e);this._contactsByPrefix=n}catch(e){}}async _executeRemoteAction(e,t){if(this.hass)try{var a;const i=await jd(this.hass,e.pubkey_prefix,t,null===(a=this.config)||void 0===a?void 0:a.entry_id);i.success?this._showStatusMessage(`${e.name}: ${t} → ${i.response||"OK"}`,"success"):this._showStatusMessage(`${e.name}: ${t} failed — ${i.response||"error"}`,"error")}catch(a){this._showStatusMessage(`${e.name}: ${t} failed — ${String(a)}`,"error")}}_fireMoreInfo(e){const t=new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0});this.dispatchEvent(t)}_formatUptimeFromEntity(e){var t,a,i;const n=null===(t=this.hass)||void 0===t?void 0:t.states[e];if(!n||"unavailable"===n.state||"unknown"===n.state)return"";const o=parseFloat(n.state);if(!Number.isFinite(o))return"";let r;switch(null!==(a=null===(i=n.attributes)||void 0===i?void 0:i.unit_of_measurement)&&void 0!==a?a:"s"){case"d":r=86400*o;break;case"h":r=3600*o;break;case"min":r=60*o;break;default:r=o}if(r<60)return`${Math.floor(r)}s`;if(r<3600)return`${Math.floor(r/60)}m`;if(r<86400){const e=Math.floor(r/3600),t=Math.floor(r%3600/60);return t>0?`${e}h ${t}m`:`${e}h`}const s=Math.floor(r/86400),l=Math.floor(r%86400/3600);return l>0?`${s}d ${l}h`:`${s}d`}_confirmActionDialog(e,t,a){this._confirmAction={title:e,message:t,onConfirm:a},this._confirmDialogOpen=!0}async _onConfirmAction(){if(this._confirmDialogOpen=!1,this._confirmAction)try{await this._confirmAction.onConfirm()}catch(e){this._showStatusMessage(`Error: ${String(e)}`,"error")}this._confirmAction=null}_onConfirmCancel(){this._confirmDialogOpen=!1,this._confirmAction=null}_openCommandDialog(e,t){this._commandDialogTarget=e.pubkey_prefix,this._commandDialogIsLocal=t,this._commandDialogOpen=!0}_onCommandDialogClose(){this._commandDialogOpen=!1,this._commandDialogTarget="",this._commandDialogIsLocal=!1}_getManagedDeviceKey(e,t){var a;return`${(null===(a=this.selectedDevice)||void 0===a?void 0:a.entry_id)||""}_${t}_${e.pubkey_prefix}`}_loadHiddenSensors(){try{const e=localStorage.getItem("meshcore-hidden-sensors");e&&(this._hiddenSensors=JSON.parse(e))}catch(e){this._hiddenSensors={}}}_saveHiddenSensors(){try{localStorage.setItem("meshcore-hidden-sensors",JSON.stringify(this._hiddenSensors))}catch(e){}}_hideSensor(e,t){const a=this._hiddenSensors[e]||[];a.includes(t)||(this._hiddenSensors={...this._hiddenSensors,[e]:[...a,t]},this._saveHiddenSensors())}_unhideSensor(e,t){const a=this._hiddenSensors[e]||[];if(this._hiddenSensors={...this._hiddenSensors,[e]:a.filter(e=>e!==t)},0===this._hiddenSensors[e].length){const t={...this._hiddenSensors};delete t[e],this._hiddenSensors=t}this._saveHiddenSensors()}_unhideAllSensors(e){const t={...this._hiddenSensors};delete t[e],this._hiddenSensors=t,this._saveHiddenSensors()}_onTileContextMenu(e,t){const{entityId:a,label:i}=e.detail;this._contextMenu={entityId:a,label:i,deviceKey:t},this._overlayPointerStarted=!1}_onOverlayPointerDown(){this._overlayPointerStarted=!0}_dismissContextMenu(){this._overlayPointerStarted=!1,this._contextMenu=null}_closeContextMenu(){this._overlayPointerStarted&&this._dismissContextMenu()}_hideSensorFromContext(){this._contextMenu&&(this._hideSensor(this._contextMenu.deviceKey,this._contextMenu.entityId),this._showStatusMessage(`Hidden: ${this._contextMenu.label}`,"success"),this._contextMenu=null)}_onNeighborRightClick(e,t,a){e.preventDefault(),this._neighborContextMenu={name:t.name||t.pubkey_prefix,neighborPubkey:t.pubkey_prefix,repeaterPubkey:a},this._overlayPointerStarted=!1}_dismissNeighborContextMenu(){this._overlayPointerStarted=!1,this._neighborContextMenu=null}_closeNeighborContextMenu(){this._overlayPointerStarted&&this._dismissNeighborContextMenu()}_removeNeighborFromContext(){if(!this._neighborContextMenu)return;const{name:e,neighborPubkey:t,repeaterPubkey:a}=this._neighborContextMenu;this._neighborContextMenu=null,this._confirmActionDialog(`Remove neighbor ${e}?`,"This will remove the neighbor from the repeater and delete its sensors from HA. This cannot be undone.",()=>this._executeRemoveNeighbor(a,t,e))}_openNeighborMoreInfo(e,t,a){var i;const n=e.substring(0,10).toLowerCase(),o=t.substring(0,6).toLowerCase(),r="snr"===a?`sensor.meshcore_${n}_neighbor_${o}`:`sensor.meshcore_${n}_neighbor_${o}_seen`;null!==(i=this.hass)&&void 0!==i&&i.states[r]&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:r},bubbles:!0,composed:!0}))}async _executeRemoveNeighbor(e,t,a){if(this.hass)try{var i,n;const o=await this.hass.callWS({type:"meshcore_chat/remove_neighbor",entry_id:null===(i=this.config)||void 0===i?void 0:i.entry_id,target_prefix:e,neighbor_pubkey:t}),r=null!==(n=null==o?void 0:o.entities_removed)&&void 0!==n?n:0;this._showStatusMessage(`Removed ${a} (${r} sensors deleted)`,"success");const s=this._managedDevices.repeaters.find(t=>t.pubkey_prefix===e);s&&await this._loadNeighbors(s)}catch(e){this._showStatusMessage(`Failed to remove ${a}: ${e.message||e}`,"error")}}_getSettingsDeviceContext(){const e=this._settingsDeviceKey;if(!e)return null;const t=[...this._managedDevices.repeaters.map(e=>({device:e,type:"repeater"})),...this._managedDevices.clients.map(e=>({device:e,type:"client"}))];for(const{device:i,type:n}of t)if(this._getManagedDeviceKey(i,n)===e){var a;let e=!1;return e=i.status_entity_id&&null!==(a=this.hass)&&void 0!==a&&a.states[i.status_entity_id]?"on"===this.hass.states[i.status_entity_id].state:"online"===i.status,{device:i,type:n,name:i.name,isOnline:e}}return null}_closeSettingsModal(){this._settingsDeviceKey=null}_openHiddenSensorsList(){this._hiddenSensorsModalKey=this._settingsDeviceKey,this._settingsDeviceKey=null}_renderHiddenSensorsModal(){const e=this._hiddenSensorsModalKey,t=(this._hiddenSensors[e]||[]).map(e=>{let t=e;for(const a of Object.values(this._deviceEntities)){const i=a.find(t=>t.entity_id===e);if(i){t=i.label;break}}return{entityId:e,label:t}});return ad(Uo||(Uo=pc`
      <div class="modal-overlay" @click=${0}>
        <div class="modal-card" data-a11y="hidden-sensors"
             role="dialog" aria-modal="true" aria-label="Hidden sensors"
             @click=${0}>
          <div class="modal-header">
            <span class="modal-title">Hidden Sensors</span>
            <button class="modal-close" aria-label="Close" @click=${0}>&times;</button>
          </div>
          <div class="modal-body">
            ${0}
          </div>
          ${0}
        </div>
      </div>
    `),this._closeHiddenSensorsModal,e=>e.stopPropagation(),this._closeHiddenSensorsModal,0===t.length?ad(Wo||(Wo=pc`<div class="empty-hidden">No hidden sensors</div>`)):t.map(t=>ad(Go||(Go=pc`
                  <div class="hidden-sensor-item">
                    <div>
                      <div class="hidden-sensor-name">${0}</div>
                      <div class="hidden-sensor-id">${0}</div>
                    </div>
                    <button class="unhide-btn" @click=${0}>Unhide</button>
                  </div>
                `),t.label,t.entityId,()=>this._unhideSensor(e,t.entityId))),t.length>1?ad(Xo||(Xo=pc`
                <div class="modal-footer">
                  <button class="action-btn" @click=${0}>Unhide All</button>
                </div>
              `),()=>{this._unhideAllSensors(e)}):od)}_closeHiddenSensorsModal(){this._hiddenSensorsModalKey=null}_showStatusMessage(e,t){this._statusMessage={text:e,type:t},null!==this._statusMessageTimeout&&clearTimeout(this._statusMessageTimeout),this._statusMessageTimeout=window.setTimeout(()=>{this._statusMessage=null,this._statusMessageTimeout=null},5e3)}_formatRelativeTime(e){try{const t=Date.now()-new Date(e).getTime(),a=Math.floor(t/6e4);if(a<1)return"just now";if(a<60)return`${a}m ago`;const i=Math.floor(a/60);return i<24?`${i}h ago`:`${Math.floor(i/24)}d ago`}catch(e){return"unknown"}}};cu.styles=[Md,bc(Yo||(Yo=pc`
      :host {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      .devices-layout {
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      .content-area {
        flex: 1;
        overflow-y: auto;
        overflow-x: hidden;
        padding: 16px;
        background: var(--primary-background-color, #fafafa);
      }

      .content-area > * {
        max-width: 1100px;
        margin-left: auto;
        margin-right: auto;
      }

      .content-area::-webkit-scrollbar { width: 6px; }
      .content-area::-webkit-scrollbar-track { background: transparent; }
      .content-area::-webkit-scrollbar-thumb {
        background: var(--scrollbar-thumb, var(--scrollbar-thumb-color, #c1c1c1));
        border-radius: 3px;
      }

      /* Dashboard sections */
      .device-section {
        background: var(--card-background-color, #fff);
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 12px;
        padding: 20px;
        margin-bottom: 16px;
      }

      .device-section:last-child {
        margin-bottom: 0;
      }

      .section-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 16px;
        gap: 8px;
        flex-wrap: wrap;
      }

      .section-title {
        display: flex;
        align-items: center;
        gap: 8px;
        min-width: 0;
        flex: 1 1 auto;
      }

      .section-title > div:last-child {
        min-width: 0;
        flex: 1 1 auto;
      }

      .section-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: 8px;
        flex-shrink: 0;
      }

      .section-icon.companion {
        background: rgba(3, 169, 244, 0.12);
        color: #0288d1;
      }

      .section-icon.repeater {
        background: rgba(255, 152, 0, 0.12);
        color: #f57c00;
      }

      .section-icon.client {
        background: rgba(76, 175, 80, 0.12);
        color: #388e3c;
      }

      .device-name {
        font-size: 16px;
        font-weight: 600;
        color: var(--primary-text-color);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .device-meta {
        font-size: 12px;
        color: var(--secondary-text-color);
        margin-top: 2px;
      }

      .device-meta span {
        margin-right: 12px;
      }

      .status-badge {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 4px 10px;
        border-radius: 12px;
        font-size: 11px;
        font-weight: 600;
        flex-shrink: 0;
        white-space: nowrap;
        max-width: 100%;
      }

      .status-badge.online {
        background: rgba(76, 175, 80, 0.12);
        color: #2e7d32;
      }

      .status-badge.offline {
        background: rgba(114, 114, 114, 0.12);
        color: #616161;
      }

      .status-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
      }

      .status-dot.online { background: #4caf50; }
      .status-dot.offline { background: #9e9e9e; }
      .status-dot.unknown { background: #ff9800; }

      .status-badge.unknown {
        background: rgba(255, 152, 0, 0.12);
        color: #e65100;
      }

      /* Sensor tiles grid */
      .subsection-label {
        font-size: 12px;
        font-weight: 600;
        color: var(--secondary-text-color);
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 8px;
        margin-top: 16px;
      }

      .sensor-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
        gap: 8px;
      }

      /* Neighbor section */
      .neighbor-section {
        margin-top: 16px;
      }

      .neighbor-table {
        width: 100%;
        /* separate (not collapse) so the 1px row dividers render the same
           crisp/light line as the node-summary sensor grid, rather than the
           slightly heavier collapsed-border rendering. */
        border-collapse: separate;
        border-spacing: 0;
        font-size: 13px;
        margin-top: 8px;
      }

      .neighbor-table th {
        text-align: left;
        padding: 6px 8px;
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
        color: var(--secondary-text-color);
        font-weight: 600;
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .neighbor-table tbody tr {
        cursor: context-menu;
      }

      .neighbor-table tbody tr:hover {
        background: var(--table-row-alternative-background-color, rgba(255,255,255,0.05));
      }

      .neighbor-table td {
        padding: 6px 8px;
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
        color: var(--primary-text-color);
      }

      .neighbor-table code {
        font-size: 12px;
        background: var(--secondary-background-color, #f5f5f5);
        padding: 1px 4px;
        border-radius: 3px;
      }

      .snr-good { color: #4caf50; font-weight: 600; }
      .snr-fair { color: #ff9800; font-weight: 600; }
      .snr-poor { color: #f44336; font-weight: 600; }

      .neighbor-table .clickable-value {
        cursor: pointer;
        border-radius: 4px;
        padding: 2px 4px;
        margin: -2px -4px;
        transition: background 0.15s;
      }

      .neighbor-table .clickable-value:hover {
        background: var(--secondary-background-color, rgba(0,0,0,0.05));
      }

      /* Action buttons */
      .actions-row {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: 16px;
      }

      .device-list {
        display: grid;
        gap: 10px;
      }

      .device-card {
        display: flex;
        align-items: center;
        gap: 12px;
        width: 100%;
        text-align: left;
        padding: 14px 16px;
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 12px;
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color);
        font: inherit;
        cursor: pointer;
      }

      .device-card:hover {
        border-color: var(--primary-color, #03a9f4);
      }

      .device-card.add {
        border-style: dashed;
        opacity: 0.85;
      }

      .device-card-text {
        flex: 1;
        min-width: 0;
      }

      .device-card-chevron {
        font-size: 20px;
        color: var(--secondary-text-color);
      }

      .back-btn {
        border: none;
        background: none;
        color: var(--primary-color, #03a9f4);
        font: inherit;
        font-size: 14px;
        cursor: pointer;
        padding: 4px 0 12px;
      }

      .actions-row.top {
        margin: 0 0 12px;
      }

      .status-note {
        background: rgba(255, 152, 0, 0.1);
        border-left: 3px solid var(--warning-color, #ff9800);
        border-radius: 6px;
        padding: 8px 12px;
        font-size: 13px;
        color: var(--primary-text-color);
        margin-bottom: 12px;
        line-height: 1.45;
      }

      .action-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        padding: 6px 12px;
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 6px;
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color);
        font-size: 12px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s;
        white-space: nowrap;
      }

      .action-btn:hover:not(:disabled) {
        background: var(--secondary-background-color, #f5f5f5);
        border-color: var(--primary-color, #03a9f4);
      }

      .action-btn:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }

      .action-btn.primary {
        background: var(--primary-color, #03a9f4);
        color: #fff;
        border-color: var(--primary-color, #03a9f4);
      }

      .action-btn.primary:hover:not(:disabled) {
        opacity: 0.9;
      }

      /* Loading / empty / error */
      .loading-state {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 48px 16px;
        color: var(--secondary-text-color);
        font-size: 14px;
        gap: 8px;
      }

      .loading-spinner {
        width: 20px;
        height: 20px;
        border: 2px solid var(--divider-color, #e0e0e0);
        border-top-color: var(--primary-color, #03a9f4);
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
      }

      .neighbor-loading {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 12px 0;
        color: var(--secondary-text-color);
        font-size: 13px;
      }

      .neighbor-loading .loading-spinner {
        width: 14px;
        height: 14px;
      }

      @keyframes spin { to { transform: rotate(360deg); } }

      .error-state {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 12px 16px;
        color: var(--error-color, #db4437);
        font-size: 13px;
        background: rgba(219, 68, 55, 0.08);
        border-radius: 8px;
        margin-bottom: 16px;
      }

      .empty-state {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 48px 16px;
        color: var(--secondary-text-color);
        text-align: center;
      }

      .empty-text { font-size: 14px; }
      .empty-subtext { font-size: 12px; margin-top: 8px; opacity: 0.7; }

      /* Toast */
      .status-toast {
        position: fixed;
        bottom: 20px;
        left: 20px;
        right: 20px;
        padding: 12px 16px;
        border-radius: 8px;
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color);
        font-size: 13px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
      }

      .status-toast.success { border-left: 4px solid #4caf50; }
      .status-toast.error { border-left: 4px solid var(--error-color, #db4437); color: var(--error-color, #db4437); }

      @keyframes slideIn {
        from { transform: translateY(100%); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }

      /* Settings gear button */
      .settings-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        border: none;
        border-radius: 6px;
        background: transparent;
        color: var(--secondary-text-color);
        cursor: pointer;
        transition: all 0.2s;
        margin-left: 8px;
        flex-shrink: 0;
      }

      .settings-btn:hover {
        background: var(--secondary-background-color, #f0f0f0);
        color: var(--primary-text-color);
      }

      /* Modal overlay */
      .modal-overlay {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 999;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.15s ease-out;
      }

      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      .modal-card {
        background: var(--card-background-color, #fff);
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        min-width: 260px;
        max-width: 400px;
        max-height: 80vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }

      .modal-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 20px;
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
      }

      .modal-title {
        font-size: 16px;
        font-weight: 600;
        color: var(--primary-text-color);
      }

      .modal-close {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        border: none;
        border-radius: 6px;
        background: transparent;
        color: var(--secondary-text-color);
        cursor: pointer;
        font-size: 18px;
      }

      .modal-close:hover {
        background: var(--secondary-background-color, #f0f0f0);
      }

      .modal-body {
        padding: 8px 0;
        overflow-y: auto;
      }

      .modal-action {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 12px 20px;
        cursor: pointer;
        transition: background 0.15s;
        color: var(--primary-text-color);
        font-size: 14px;
        border: none;
        background: none;
        width: 100%;
        text-align: left;
      }

      .modal-action:hover {
        background: var(--secondary-background-color, #f5f5f5);
      }

      .modal-action.danger {
        color: var(--error-color, #db4437);
      }

      .modal-action-icon {
        display: flex;
        align-items: center;
        color: var(--secondary-text-color);
        flex-shrink: 0;
      }

      .modal-action.danger .modal-action-icon {
        color: var(--error-color, #db4437);
      }

      .modal-action:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }

      .modal-action:disabled:hover {
        background: none;
      }

      .modal-divider {
        height: 1px;
        background: var(--divider-color, #e0e0e0);
        margin: 4px 0;
      }

      /* Hidden sensors list */
      .hidden-sensor-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
      }

      .hidden-sensor-item:last-child {
        border-bottom: none;
      }

      .hidden-sensor-name {
        font-size: 13px;
        color: var(--primary-text-color);
      }

      .hidden-sensor-id {
        font-size: 11px;
        color: var(--secondary-text-color);
        margin-top: 2px;
      }

      .unhide-btn {
        padding: 4px 10px;
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 4px;
        background: var(--card-background-color, #fff);
        color: var(--primary-color, #03a9f4);
        font-size: 12px;
        font-weight: 500;
        cursor: pointer;
        white-space: nowrap;
      }

      .unhide-btn:hover {
        background: var(--secondary-background-color, #f5f5f5);
      }

      .modal-footer {
        padding: 12px 20px;
        border-top: 1px solid var(--divider-color, #e0e0e0);
        display: flex;
        justify-content: flex-end;
      }

      .empty-hidden {
        padding: 20px;
        text-align: center;
        color: var(--secondary-text-color);
        font-size: 13px;
      }

      /* Chart container */
      .chart-container {
        margin-top: 8px;
        overflow-x: auto;
      }
    `))],hc([Sd({type:Object})],cu.prototype,"hass",void 0),hc([Sd({type:Object})],cu.prototype,"config",void 0),hc([Sd({type:Boolean})],cu.prototype,"narrow",void 0),hc([Sd({type:Object})],cu.prototype,"selectedDevice",void 0),hc([Ad()],cu.prototype,"_openPrefix",void 0),hc([Ad()],cu.prototype,"_loggingIn",void 0),hc([Ad()],cu.prototype,"_managedDevices",void 0),hc([Ad()],cu.prototype,"_contactsByPrefix",void 0),hc([Ad()],cu.prototype,"_loading",void 0),hc([Ad()],cu.prototype,"_error",void 0),hc([Ad()],cu.prototype,"_confirmAction",void 0),hc([Ad()],cu.prototype,"_confirmDialogOpen",void 0),hc([Ad()],cu.prototype,"_commandDialogOpen",void 0),hc([Ad()],cu.prototype,"_commandDialogTarget",void 0),hc([Ad()],cu.prototype,"_commandDialogIsLocal",void 0),hc([Ad()],cu.prototype,"_statusMessage",void 0),hc([Ad()],cu.prototype,"_statusMessageTimeout",void 0),hc([Ad()],cu.prototype,"_deviceEntities",void 0),hc([Ad()],cu.prototype,"_meshcoreDeviceMap",void 0),hc([Ad()],cu.prototype,"_entityRegistryLoaded",void 0),hc([Ad()],cu.prototype,"_hiddenSensors",void 0),hc([Ad()],cu.prototype,"_contextMenu",void 0),hc([Ad()],cu.prototype,"_settingsDeviceKey",void 0),hc([Ad()],cu.prototype,"_hiddenSensorsModalKey",void 0),hc([Ad()],cu.prototype,"_neighborContextMenu",void 0),hc([Ad()],cu.prototype,"_neighborData",void 0),cu=hc([kd("meshcore-devices-page")],cu);let du=class extends xd{constructor(){super(...arguments),this.selected=!1}render(){if(!this.contact)return ad(Qo||(Qo=pc``));const e=this.contact,t=this._getTypeClass(e.type),{label:a,cls:i}=this._getCategoryBadge(e);return ad(Jo||(Jo=pc`
      <div class=${0}>
        <div class="contact-avatar ${0}">
          ${0}
        </div>
        <div class="contact-info">
          <div class="contact-name">${0}</div>
          <div class="contact-prefix">${0}</div>
          <div class="contact-meta">
            ${0}
          </div>
        </div>
        <span class="category-badge ${0}">${0}</span>
      </div>
    `),this.selected?"contact-card selected":"contact-card",t,this._getTypeIcon(e.type),e.adv_name,e.pubkey_prefix,e.lastmod?`Last heard ${new Date(1e3*e.lastmod).toLocaleString()}`:"",i,a)}_getCategoryBadge(e){return e.added_to_node?{label:"Added",cls:"added"}:{label:"Discovered",cls:"discovered"}}_getTypeClass(e){switch(e){case 1:return"client";case 2:return"repeater";case 3:return"room-server";case 4:return"sensor";default:return"unknown"}}_getTypeIcon(e){switch(e){case 0:case 1:return ad(Zo||(Zo=pc`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>`));case 2:return ad(er||(er=pc`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11zm0 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`));case 3:return ad(tr||(tr=pc`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>`));case 4:return ad(ar||(ar=pc`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>`));default:return ad(ir||(ir=pc`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>`))}}};du.styles=bc(nr||(nr=pc`
    :host {
      display: block;
      height: 100%;
    }

    .contact-card {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.15s;
      background: var(--card-background-color, #fff);
      height: 100%;
      box-sizing: border-box;
    }

    .contact-card:hover {
      background: rgba(0, 0, 0, 0.02);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    }

    .contact-card.selected {
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
      border-color: var(--primary-color, #03a9f4);
    }

    .contact-avatar {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    /* Scale down the inline 20px SVG icons inside avatars so the
       glyph reads as a tag-glyph, not a primary visual. */
    .contact-avatar svg { width: 16px; height: 16px; }

    /* Translucent backgrounds + saturated icon colour. Mirrors the
       category-badge treatment below so the avatar reads as a tag,
       not a brand-bright disc. */
    .contact-avatar.client      { background: rgba(76, 175, 80, 0.15);  color: #388e3c; }
    .contact-avatar.repeater    { background: rgba(255, 152, 0, 0.15);  color: #f57c00; }
    .contact-avatar.room-server { background: rgba(156, 39, 176, 0.15); color: #7b1fa2; }
    .contact-avatar.sensor      { background: rgba(96, 125, 139, 0.15); color: #455a64; }
    .contact-avatar.unknown     { background: rgba(3, 169, 244, 0.15);  color: #0288d1; }

    .contact-info {
      flex: 1;
      overflow: hidden;
    }

    .contact-name {
      font-size: 14px;
      font-weight: 500;
      color: var(--primary-text-color);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .contact-prefix {
      font-size: 12px;
      color: var(--secondary-text-color, #727272);
      font-family: monospace;
    }

    .contact-meta {
      font-size: 11px;
      color: var(--secondary-text-color, #727272);
      margin-top: 2px;
    }

    .category-badge {
      font-size: 10px;
      font-weight: 500;
      padding: 2px 8px;
      border-radius: 10px;
      white-space: nowrap;
      flex-shrink: 0;
      align-self: center;
    }
    .category-badge.added {
      background: rgba(3, 169, 244, 0.15);
      color: #0277bd;
    }
    .category-badge.discovered {
      background: rgba(76, 175, 80, 0.15);
      color: #2e7d32;
    }
  `)),hc([Sd({type:Object})],du.prototype,"contact",void 0),hc([Sd({type:Boolean})],du.prototype,"selected",void 0),du=hc([kd("meshcore-chat-contact-card")],du);let pu=class extends xd{constructor(){super(...arguments),this.selected=!1}render(){if(!this.node)return ad(or||(or=pc``));const e="adv_name"in this.node,t=e?2===this.node.type:"repeater"===this.node.type,a=e&&3===this.node.type,i=e?1===this.node.type:"client"===this.node.type,n=e&&4===this.node.type,o=e?this.node.adv_name:this.node.name,r=this.node.pubkey_prefix,s=e?this.node.last_advert:void 0;let l=ad(rr||(rr=pc`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`)),c="Contact",d="";t?(l=ad(sr||(sr=pc`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11zm0 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`)),c="Repeater",d="repeater"):a?(l=ad(lr||(lr=pc`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>`)),c="Room Server",d="room-server"):n?(l=ad(cr||(cr=pc`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>`)),c="Sensor",d="sensor"):i&&(l=ad(dr||(dr=pc`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>`)),c="Client",d="client");const p=e&&(0!==this.node.adv_lat||0!==this.node.adv_lon),h=s?new Date(1e3*s).toLocaleTimeString():"Unknown";return ad(pr||(pr=pc`
      <div class=${0}>
        <div class="node-header">
          <div class=${0}>${0}</div>
          <div class="node-info">
            <div class="node-name">${0}</div>
            <div class="node-prefix">${0}</div>
            <div class=${0}>${0}</div>
          </div>
        </div>

        <div class="node-meta">
          ${0}
          ${0}
          ${0}
        </div>

        <div class="node-actions">
          ${0}
          ${0}
          <button class="action-btn danger" @click=${0}>Delete</button>
        </div>
      </div>
    `),this.selected?"node-card selected":"node-card",`node-avatar ${d}`,l,o,r,`node-type-label ${d}`,c,s?ad(hr||(hr=pc`<div class="meta-item"><span><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="vertical-align: -2px;"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg></span><span>${0}</span></div>`),h):ad(ur||(ur=pc``)),p?ad(mr||(mr=pc`<div class="location-indicator"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="vertical-align: -2px; margin-right: 2px;"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>${0}, ${0}</div>`),this.node.adv_lat.toFixed(3),this.node.adv_lon.toFixed(3)):ad(gr||(gr=pc``)),e&&this.node.out_path?ad(fr||(fr=pc`<div class="route-info">Route: ${0}...</div>`),this.node.out_path.substring(0,12)):ad(vr||(vr=pc``)),e?ad(br||(br=pc`
            <button class="action-btn" @click=${0}><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="vertical-align: -2px; margin-right: 4px;"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>Message</button>
          `),e=>{e.stopPropagation(),this._dispatch("node-message")}):ad(yr||(yr=pc``)),t?ad(_r||(_r=pc`
            <button class="action-btn" @click=${0}><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="vertical-align: -2px; margin-right: 4px;"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>Telemetry</button>
          `),e=>{e.stopPropagation(),this._dispatch("node-telemetry")}):ad(xr||(xr=pc``)),e=>{e.stopPropagation(),this._dispatch("node-delete")})}_dispatch(e){this.dispatchEvent(new CustomEvent(e,{detail:{node:this.node},bubbles:!0,composed:!0}))}};pu.styles=bc(wr||(wr=pc`
    :host { display: block; }

    .node-card {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 12px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.15s;
      background: var(--card-background-color, #fff);
    }

    .node-card:hover {
      background: rgba(0, 0, 0, 0.02);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    }

    .node-card.selected {
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
      border-color: var(--primary-color, #03a9f4);
    }

    .node-header { display: flex; align-items: flex-start; gap: 12px; }

    .node-avatar {
      width: 48px; height: 48px; border-radius: 50%;
      background: var(--primary-color, #03a9f4); color: #fff;
      display: flex; align-items: center; justify-content: center;
      font-weight: 600; font-size: 20px; flex-shrink: 0;
    }

    .node-avatar.repeater { background: #ff9800; }
    .node-avatar.room-server { background: #9c27b0; }
    .node-avatar.sensor { background: #607d8b; }
    .node-avatar.client { background: #4caf50; }

    .node-info { flex: 1; overflow: hidden; }

    .node-name {
      font-size: 14px; font-weight: 500; color: var(--primary-text-color);
      overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
    }

    .node-prefix {
      font-size: 12px; color: var(--secondary-text-color, #727272);
      font-family: monospace; margin-top: 2px;
    }

    .node-type-label {
      font-size: 11px; font-weight: 600; color: #fff;
      background: var(--primary-color, #03a9f4);
      padding: 2px 6px; border-radius: 4px;
      margin-top: 4px; display: inline-block;
    }

    .node-type-label.repeater { background: #ff9800; }
    .node-type-label.room-server { background: #9c27b0; }
    .node-type-label.sensor { background: #607d8b; }
    .node-type-label.client { background: #4caf50; }

    .node-meta {
      display: flex; gap: 12px; margin-top: 8px; padding-top: 8px;
      border-top: 1px solid var(--divider-color, #e0e0e0);
      font-size: 11px; color: var(--secondary-text-color, #727272);
    }

    .meta-item { display: flex; align-items: center; gap: 4px; }

    .node-actions { display: flex; gap: 6px; }

    .action-btn {
      padding: 4px 8px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 4px; background: transparent;
      color: var(--primary-text-color);
      font-size: 11px; font-weight: 500;
      cursor: pointer; transition: all 0.15s;
    }

    .action-btn:hover {
      background: var(--primary-color, #03a9f4);
      color: #fff;
      border-color: var(--primary-color, #03a9f4);
    }

    .action-btn.danger {
      color: var(--error-color, #db4437);
      border-color: rgba(219, 68, 55, 0.3);
    }

    .action-btn.danger:hover {
      background: var(--error-color, #db4437);
      color: #fff;
      border-color: var(--error-color, #db4437);
    }

    .location-indicator {
      display: inline-flex; align-items: center; gap: 2px;
      padding: 2px 4px; background: rgba(0, 0, 0, 0.05);
      border-radius: 3px; font-size: 10px;
    }

    .route-info {
      font-size: 10px; color: var(--secondary-text-color, #727272);
      font-family: monospace;
    }
  `)),hc([Sd({type:Object})],pu.prototype,"node",void 0),hc([Sd({type:Boolean})],pu.prototype,"selected",void 0),pu=hc([kd("meshcore-node-card")],pu);let hu=class extends xd{constructor(){super(),this.open=!1,this.pendingAction=null,this._confirming=!1,this._confirmAction=null,Pp(this,{isOpen:()=>this.open,onEscape:()=>{this._confirming?(this._confirming=!1,this._confirmAction=null):this._close()}})}render(){if(!this.open||!this.node)return ad(kr||(kr=pc``));const e="adv_name"in this.node,t=e?2===this.node.type:"repeater"===this.node.type,a=e&&3===this.node.type,i=e?1===this.node.type:"client"===this.node.type,n=e&&4===this.node.type,o=e?this.node.adv_name:this.node.name,r=this.node.pubkey_prefix;let s=ad($r||($r=pc`<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`)),l="Contact",c="";return t?(s=ad(Cr||(Cr=pc`<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11zm0 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`)),l="Repeater",c="repeater"):a?(s=ad(Sr||(Sr=pc`<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>`)),l="Room Server",c="room-server"):n?(s=ad(Ar||(Ar=pc`<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>`)),l="Sensor",c="sensor"):i&&(s=ad(Mr||(Mr=pc`<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>`)),l="Client",c="client"),ad(Fr||(Fr=pc`
      <div class="dialog-backdrop" @click=${0}>
        <div
          class="dialog"
          role="dialog"
          aria-modal="true"
          aria-label="Node detail — ${0}"
          @click=${0}>
          <div class="dialog-header">
            <div class=${0}>${0}</div>
            <div class="dialog-title">
              <div class="dialog-name">${0}</div>
              <div class="dialog-type">${0}</div>
            </div>
            <button class="dialog-close" aria-label="Close" @click=${0}>✕</button>
          </div>

          <div class="dialog-content">
            ${0}
          </div>
        </div>
      </div>
    `),this._close,o,e=>e.stopPropagation(),`dialog-avatar ${c}`,s,o,l,this._close,this._confirming?ad(Er||(Er=pc`
                  <div class="confirm-section">
                    <div class="confirm-text">
                      ${0}
                    </div>
                    ${0}
                    <div class="confirm-actions">
                      <button class="confirm-btn yes" @click=${0}>Yes</button>
                      <button class="confirm-btn no" @click=${0}>Cancel</button>
                    </div>
                  </div>
                `),"remove-contact"===this._confirmAction?"Remove this as an Added Contact?":"","remove-contact"===this._confirmAction?ad(Dr||(Dr=pc`
                      <div class="confirm-description">Removing the contact will make it a Discovered Contact.</div>
                    `)):ad(zr||(zr=pc``)),()=>this._confirmAction_exec(),()=>{this._confirming=!1,this._confirmAction=null}):ad(Or||(Or=pc`
                  <div class="section">
                    <div class="section-header">Quick Actions</div>
                    <div class="quick-actions ${0}">
                      ${0}
                      ${0}
                      ${0}
                    </div>
                  </div>

                  <div class="section">
                    <div class="section-header">Information</div>
                    <div class="info-grid">
                      <div class="info-item">
                        <div class="info-label">Public Key Prefix</div>
                        <div class="info-value">${0}</div>
                      </div>
                      <div class="info-item">
                        <div class="info-label">Type</div>
                        <div class="info-value">${0}</div>
                      </div>
                      ${0}
                    </div>
                  </div>

                  ${0}

                  ${0}

                `),e?"":"full",e&&this.node.added_to_node&&(i||a)?ad(Ir||(Ir=pc`
                        <button class="action-btn" @click=${0}><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>Message</button>
                      `),()=>this._dispatchEvent("message")):ad(Rr||(Rr=pc``)),r&&!i?ad(Tr||(Tr=pc`
                        <button class="action-btn" @click=${0}><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M2 12a2 2 0 104 0 2 2 0 10-4 0zM10 12a2 2 0 104 0 2 2 0 10-4 0zM18 12a2 2 0 104 0 2 2 0 10-4 0zM7 10l3 2-3 2zM15 10l3 2-3 2z"/></svg>Trace</button>
                      `),()=>this._dispatchEvent("trace")):ad(qr||(qr=pc``)),e&&this.node.added_to_node?ad(Br||(Br=pc`<button class="action-btn warning"
                            ?disabled=${0}
                            @click=${0}>${0}</button>`),"remove-contact"===this.pendingAction,()=>{this._confirming=!0,this._confirmAction="remove-contact"},"remove-contact"===this.pendingAction?"Removing…":"Remove Contact"):e?ad(Nr||(Nr=pc`<button class="action-btn"
                            ?disabled=${0}
                            @click=${0}>${0}</button>`),"add-contact"===this.pendingAction,()=>this._dispatchEvent("add-contact"),"add-contact"===this.pendingAction?ad(jr||(jr=pc`Adding…`)):ad(Pr||(Pr=pc`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>Add Contact`))):ad(Lr||(Lr=pc``)),r,l,e?ad(Hr||(Hr=pc`
                        <div class="info-item">
                          <div class="info-label">Last Advert</div>
                          <div class="info-value">
                            ${0}
                          </div>
                        </div>
                        <div class="info-item">
                          <div class="info-label">Status</div>
                          <div class="info-value">${0}</div>
                        </div>
                      `),this.node.last_advert?new Date(1e3*this.node.last_advert).toLocaleString():"Unknown",this.node.added_to_node?"Added Contact":"Discovered Contact"):ad(Vr||(Vr=pc``)),!e||0===this.node.adv_lat&&0===this.node.adv_lon?ad(Ur||(Ur=pc``)):ad(Kr||(Kr=pc`
                        <div class="section">
                          <div class="section-header">Location</div>
                          <div class="info-grid">
                            <div class="info-item">
                              <div class="info-label">Latitude</div>
                              <div class="info-value">${0}</div>
                            </div>
                            <div class="info-item">
                              <div class="info-label">Longitude</div>
                              <div class="info-value">${0}</div>
                            </div>
                          </div>
                        </div>
                      `),this.node.adv_lat.toFixed(6),this.node.adv_lon.toFixed(6)),e&&this.node.out_path?ad(Wr||(Wr=pc`
                        <div class="section">
                          <div class="section-header">Network</div>
                          <div class="info-item">
                            <div class="info-label">Route (Outgoing Path)</div>
                            <div class="info-value">${0}</div>
                          </div>
                          ${0}
                        </div>
                      `),this.node.out_path,this.node.out_path_len?ad(Gr||(Gr=pc`
                                <div class="info-item" style="margin-top: 8px;">
                                  <div class="info-label">Path Length</div>
                                  <div class="info-value">${0} hops</div>
                                </div>
                              `),this.node.out_path_len):ad(Xr||(Xr=pc``))):ad(Yr||(Yr=pc``))))}_close(){this.open=!1,this._confirming=!1,this._confirmAction=null,this.dispatchEvent(new CustomEvent("node-detail-closed",{bubbles:!0,composed:!0}))}_dispatchEvent(e){this.dispatchEvent(new CustomEvent(`node-${e}`,{detail:{node:this.node},bubbles:!0,composed:!0}))}_confirmAction_exec(){this._confirmAction&&this._dispatchEvent(this._confirmAction),this._close()}};hu.styles=bc(Qr||(Qr=pc`
    :host {
      display: contents;
    }

    .dialog-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      animation: fadeIn 0.2s;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .dialog {
      background: var(--card-background-color, #fff);
      border-radius: 8px;
      max-width: 500px;
      max-height: 80vh;
      overflow-y: auto;
      box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
      animation: slideUp 0.3s;
    }

    @keyframes slideUp {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    .dialog-header {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
    }

    .dialog-avatar {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: var(--primary-color, #03a9f4);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 24px;
      flex-shrink: 0;
    }

    .dialog-avatar.repeater { background: #ff9800; }
    .dialog-avatar.room-server { background: #9c27b0; }
    .dialog-avatar.sensor { background: #607d8b; }
    .dialog-avatar.client { background: #4caf50; }

    .dialog-title { flex: 1; overflow: hidden; }

    .dialog-name {
      font-size: 18px;
      font-weight: 600;
      color: var(--primary-text-color);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .dialog-type {
      font-size: 12px;
      color: var(--secondary-text-color, #727272);
      margin-top: 2px;
    }

    .dialog-close {
      background: none;
      border: none;
      font-size: 20px;
      cursor: pointer;
      color: var(--secondary-text-color);
      padding: 0;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .dialog-close:hover { color: var(--primary-text-color); }

    .dialog-content { padding: 16px; }

    .section { margin-bottom: 16px; }

    .section-header {
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      color: var(--secondary-text-color, #727272);
      letter-spacing: 0.5px;
      margin-bottom: 8px;
    }

    .quick-actions {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px;
    }

    .quick-actions.full { grid-template-columns: 1fr; }

    .action-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      padding: 8px 12px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 6px;
      background: transparent;
      color: var(--primary-text-color);
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.15s;
    }

    .action-btn:hover {
      background: var(--primary-color, #03a9f4);
      color: #fff;
      border-color: var(--primary-color, #03a9f4);
    }

    .action-btn.warning {
      color: #ff9800;
      border-color: rgba(255, 152, 0, 0.4);
    }

    .action-btn.warning:hover {
      background: #ff9800;
      color: #fff;
      border-color: #ff9800;
    }

    .action-btn.danger {
      color: var(--error-color, #db4437);
      border-color: rgba(219, 68, 55, 0.3);
    }

    .action-btn.danger:hover {
      background: var(--error-color, #db4437);
      color: #fff;
      border-color: var(--error-color, #db4437);
    }

    .action-btn:disabled {
      opacity: 0.6;
      cursor: wait;
      pointer-events: none;
    }

    .info-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }

    .info-item {
      padding: 8px;
      background: var(--primary-background-color, #fafafa);
      border-radius: 6px;
    }

    .info-label {
      font-size: 11px;
      color: var(--secondary-text-color, #727272);
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 0.5px;
    }

    .info-value {
      font-size: 13px;
      color: var(--primary-text-color);
      margin-top: 4px;
      word-break: break-all;
      font-family: monospace;
    }

    .confirm-section {
      padding: 12px;
      background: rgba(219, 68, 55, 0.08);
      border: 1px solid rgba(219, 68, 55, 0.2);
      border-radius: 6px;
      margin-bottom: 12px;
    }

    .confirm-text {
      font-size: 13px;
      color: var(--primary-text-color);
      margin-bottom: 8px;
    }

    .confirm-description {
      font-size: 12px;
      color: var(--secondary-text-color, #727272);
      margin-bottom: 10px;
    }

    .confirm-actions { display: flex; gap: 6px; }

    .confirm-btn {
      padding: 6px 10px;
      border: none;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
    }

    .confirm-btn.yes { background: var(--error-color, #db4437); color: #fff; }
    .confirm-btn.no { background: var(--divider-color, #e0e0e0); color: var(--primary-text-color); }

  `)),hc([Sd({type:Object})],hu.prototype,"node",void 0),hc([Sd({type:Boolean})],hu.prototype,"open",void 0),hc([Sd({type:Object})],hu.prototype,"hass",void 0),hc([Sd({type:String})],hu.prototype,"pendingAction",void 0),hc([Ad()],hu.prototype,"_confirming",void 0),hc([Ad()],hu.prototype,"_confirmAction",void 0),hu=hc([kd("meshcore-node-detail-dialog")],hu);const uu="meshcore-nodes-map-groups";function mu(e){const t=Number(e.adv_lat),a=Number(e.adv_lon);return!Number.isFinite(t)||!Number.isFinite(a)||0===t&&0===a||Math.abs(t)>85||Math.abs(a)>180?null:{node:e,lat:t,lon:a}}let gu=class extends xd{constructor(){super(...arguments),this.nodes=[],this.home=null,this.loading=!1,this._available=null,this._groups=function(){try{return"off"!==localStorage.getItem(uu)}catch(e){return!0}}(),this._ready=!1,this._fitted=!1,this._entityNodes=new Map,this._shown=0}connectedCallback(){super.connectedCallback(),null===this._available&&Gp().then(e=>{this._available=e})}updated(e){const t=this._map();if(!t)return;const a=!this._ready;a&&(function(e){e._createClusterBubble=e=>{const t=e.length,a=Math.round(Math.min(56,36+4*Math.log2(Math.max(1,t)))),i=document.createElement("div");return i.textContent=t>999?"999+":String(t),i.style.cssText=`width:${a}px;height:${a}px;border-radius:50%;background:var(--primary-color,#03a9f4);color:#fff;font:600 ${t>99?12:14}px sans-serif;display:flex;align-items:center;justify-content:center;box-shadow:0 0 0 3px rgba(3,169,244,.35),0 1px 4px rgba(0,0,0,.4);cursor:pointer`,{element:i,size:[a,a],anchor:[a/2,a/2]}}}(t),t.autoFit=!1,this._ready=!0),(a||e.has("_groups"))&&(t.clusterMarkers=this._groups),(a||e.has("nodes"))&&this._drawNodes(t)}_map(){return this.renderRoot.querySelector("ha-map")}_placed(){return this.nodes.map(mu).filter(e=>null!==e)}_drawNodes(e){const t=Qp(this.hass),a=new Map;this._entityNodes=new Map;const i=[];for(const e of this._placed()){var n,o;const r=String(null!==(n=e.node.public_key)&&void 0!==n?n:"").toLowerCase(),s=t.get(r);s&&(this._entityNodes.set(s,e.node),a.set(s,null!==(o=Xp[e.node.type])&&void 0!==o?o:"#9e9e9e"),i.push({entity_id:s,label_mode:"name",name:r.slice(0,2)}))}e.entities=i,this._shown=this._entityNodes.size,Yp(e,e=>a.get(e)),!this._fitted&&this._entityNodes.size>0&&(this._fitted=!0,this._fit())}_fit(){var e,t;let a=this._placed().map(e=>({lat:e.lat,lon:e.lon}));if(a.length>=20){const e=(e,t)=>e.slice().sort((e,t)=>e-t)[Math.floor(t*(e.length-1))],t=a.map(e=>e.lat),i=a.map(e=>e.lon),[n,o,r,s]=[e(t,.02),e(t,.98),e(i,.02),e(i,.98)];a=a.filter(e=>e.lat>=n&&e.lat<=o&&e.lon>=r&&e.lon<=s)}this.home&&a.push(this.home);const i=Jp(a);i&&(null===(e=this._map())||void 0===e||null===(t=e.fitBounds)||void 0===t||t.call(e,i,{zoom:15,pad:.1}))}focusNode(e){const t=mu(e),a=this._map();if(!t||null==a||!a.fitBounds)return!1;this._fitted=!0;const i=.01;return a.fitBounds([[t.lat-i,t.lon-i],[t.lat+i,t.lon+i]],{zoom:13}),!0}_toggleGroups(){this._groups=!this._groups;try{localStorage.setItem(uu,this._groups?"on":"off")}catch(e){}}_onMoreInfo(e){var t;e.stopPropagation();const a=null!==(t=e.detail)&&void 0!==t&&t.entityId?this._entityNodes.get(e.detail.entityId):void 0;a&&this.dispatchEvent(new CustomEvent("node-selected",{detail:{node:a},bubbles:!0,composed:!0}))}render(){return null===this._available?ad(Jr||(Jr=pc`<div class="wrap"></div>`)):this._available?ad(es||(es=pc`
      <div class="wrap" @hass-more-info=${0}>
        <ha-map></ha-map>
        <div class="controls">
          <button aria-label="Show all" title="Show all" @click=${0}>⤢</button>
          <button class="groups ${0}" aria-pressed=${0}
            title=${0}
            @click=${0}>${0}</button>
        </div>
      </div>
      <div class="legend">
        <span><span class="dot" style="background:${0}"></span>Repeater</span>
        <span><span class="dot" style="background:${0}"></span>Companion</span>
        <span><span class="dot" style="background:${0}"></span>Room server</span>
        <span><span class="dot" style="background:${0}"></span>Sensor</span>
        <span>${0}</span>
      </div>
    `),this._onMoreInfo,()=>this._fit(),this._groups?"on":"",this._groups,this._groups?"Groups on: tap to show every node":"Groups off: tap to group nearby nodes",()=>this._toggleGroups(),this._groups?"◉":"•",Xp[2],Xp[1],Xp[3],Xp[4],this.loading?"Loading...":`${this._shown} of ${this.nodes.length} nodes have a known position`):ad(Zr||(Zr=pc`<div class="wrap"><div class="note">${0}</div></div>`),Up)}};var fu;gu.styles=bc(ts||(ts=pc`
    :host {
      display: flex;
      flex-direction: column;
      flex: 1;
      min-height: 0;
    }
    .wrap {
      position: relative;
      flex: 1;
      min-height: 240px;
      border-radius: 12px;
      overflow: hidden;
      display: flex;
    }
    ha-map {
      flex: 1;
      display: block;
      height: 100%;
      /* Single nodes smaller than groups; read by ha-map. */
      --ha-marker-size: 30px;
    }
    .note {
      margin: auto;
      padding: 16px;
      color: var(--secondary-text-color);
      font-size: 13px;
      text-align: center;
    }
    .controls {
      position: absolute;
      top: 8px;
      right: 8px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .controls button {
      width: 34px;
      height: 34px;
      border-radius: 8px;
      border: 1px solid rgba(0, 0, 0, 0.25);
      background: rgba(255, 255, 255, 0.92);
      color: #222;
      font-size: 18px;
      line-height: 1;
      cursor: pointer;
    }
    .controls button.groups {
      font-size: 16px;
    }
    .controls button.groups.on {
      background: var(--primary-color, #03a9f4);
      color: #fff;
    }
    .legend {
      flex: none;
      display: flex;
      flex-wrap: wrap;
      gap: 4px 12px;
      padding: 6px 4px 0;
      font-size: 12px;
      color: var(--secondary-text-color);
    }
    .dot {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin-right: 4px;
      vertical-align: -1px;
    }
  `)),hc([Sd({attribute:!1})],gu.prototype,"nodes",void 0),hc([Sd({attribute:!1})],gu.prototype,"home",void 0),hc([Sd({type:Boolean})],gu.prototype,"loading",void 0),hc([Sd({attribute:!1,hasChanged:(e,t)=>!t&&!!e})],gu.prototype,"hass",void 0),hc([Ad()],gu.prototype,"_available",void 0),hc([Ad()],gu.prototype,"_groups",void 0),hc([Ad()],gu.prototype,"_shown",void 0),gu=hc([kd("meshcore-nodes-map")],gu);const vu="meshcore-nodes-view";function bu(e){const t=Math.max(0,(Date.now()-e)/6e4);return t<1?"now":t<60?`${Math.floor(t)}m ago`:t<1440?`${Math.floor(t/60)}h ago`:`${Math.floor(t/1440)}d ago`}const yu={clients:1,repeaters:2,room_servers:3,sensors:4},_u={clients:"Clients",repeaters:"Repeaters",room_servers:"Room Servers",sensors:"Sensors"};let xu=fu=class extends xd{constructor(){super(...arguments),this.contacts=[],this.channels=[],this.narrow=!1,this._viewportNarrow=!1,this._primaryFilter="all",this._typeFilter=null,this._moreOpen=!1,this._heard=op(),this._onPrefs=()=>{this._heard=op()},this.focusNode=null,this._focusedFor=null,this._mapCard=null,this._searchQuery="",this._displayedContacts=[],this._totalCount=0,this._typeCounts={clients:0,repeaters:0,room_servers:0,sensors:0},this._l1Counts={all:0,added:0,discovered:0},this._loading=!1,this._nodeDetailDialogOpen=!1,this._pendingAction=null,this._view=fu._storedView(),this._mapContacts=[],this._mapLoading=!1,this._home=null,this._mapLoadSeq=0,this._sortBy="last_heard",this._onMediaChange=e=>{this._viewportNarrow=e.matches}}_heardMapContacts(){return this._mapContacts.filter(e=>function(e,t,a=Date.now()){return"0"===t||!!e&&a-1e3*e<=864e5*Number(t)}(e.last_advert,this._heard))}connectedCallback(){super.connectedCallback(),window.addEventListener(Wd,this._onPrefs),this._mediaQuery=window.matchMedia("(max-width: 870px)"),this._viewportNarrow=this._mediaQuery.matches,this._mediaQuery.addEventListener("change",this._onMediaChange),this._loadCounts(),this._loadPage(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),window.removeEventListener(Wd,this._onPrefs),null===(e=this._mediaQuery)||void 0===e||e.removeEventListener("change",this._onMediaChange),this._searchTimer&&(clearTimeout(this._searchTimer),this._searchTimer=void 0)}get _isNarrow(){return this.narrow||this._viewportNarrow}updated(e){if(super.updated(e),this.focusNode&&this.focusNode!==this._focusedFor){const e=this.focusNode;this._focusedFor=e,"map"!==this._view&&this._setView("map"),this._mapCard=e;let t=0;const a=()=>{var i;const n=this.renderRoot.querySelector("meshcore-nodes-map");null!=n&&null!==(i=n.focusNode)&&void 0!==i&&i.call(n,e)||++t>10||setTimeout(a,400)};setTimeout(a,300)}this._isNarrow?this.setAttribute("narrow",""):this.removeAttribute("narrow"),e.has("config")&&(this._home=null,this._mapContacts=[],this._displayedContacts=[],this._totalCount=0,this._loadCounts(),this._loadPage(!0))}render(){var e;return ad(as||(as=pc`
      <div class="nodes-layout" @pointerdown=${0}>
        <div class="nodes-header">
          <!-- Search + actions row -->
          <div class="header-actions">
            <div class="search-bar" style="flex: 1;">
              <span class="search-icon"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></span>
              <input
                type="text"
                placeholder=${0}
                .value=${0}
                @input=${0}>
              ${0}
            </div>
            <select class="sort-select" aria-label="Which nodes"
              .value=${0}
              @change=${0}>
              <option value="all">All (${0})</option>
              <option value="added">★ Added (${0})</option>
              <option value="discovered">Discovered (${0})</option>
            </select>
            <select class="sort-select" aria-label="Node type"
              .value=${0}
              @change=${0}>
              <option value="">All types</option>
              ${0}
            </select>
            <select class="sort-select" aria-label="Sort by"
              .value=${0}
              @change=${0}>
              <option value="last_heard">Sort: last heard</option>
              <option value="name">Sort: name</option>
              <option value="prefix">Sort: key prefix</option>
            </select>
            ${0}
            <div class="more-wrap">
              <button class="sync-btn" aria-label="More actions" aria-haspopup="menu"
                @click=${0}>⋯</button>
              ${0}
            </div>
            <button class="view-btn"
              title=${0}
              @click=${0}>
              ${0}
            </button>
          </div>
        </div>

        <!-- Content area -->
        <div class="content-area ${0}">
          ${0}
        </div>
      </div>

      <!-- Node detail dialog -->
      <meshcore-node-detail-dialog
        .hass=${0}
        .node=${0}
        .pendingAction=${0}
        ?open=${0}
        @node-detail-closed=${0}
        @node-message=${0}
        @node-trace=${0}
        @node-add-contact=${0}
        @node-remove-contact=${0}>
      </meshcore-node-detail-dialog>

    `),e=>{this._moreOpen&&!e.composedPath().some(e=>e instanceof HTMLElement&&e.classList.contains("more-wrap"))&&(this._moreOpen=!1)},this._getSearchPlaceholder(),this._searchQuery,this._onSearchInput,this._searchQuery?ad(is||(is=pc`<button class="clear-search" @click=${0}>✕</button>`),()=>{this._searchQuery="",this._loadPage(!0)}):od,this._primaryFilter,e=>this._setPrimaryFilter(e.target.value),this._l1Counts.all,this._l1Counts.added,this._l1Counts.discovered,null!==(e=this._typeFilter)&&void 0!==e?e:"",e=>{const t=e.target.value;t?t!==this._typeFilter&&this._setTypeFilter(t):this._typeFilter&&this._setTypeFilter(this._typeFilter)},["clients","repeaters","room_servers","sensors"].map(e=>ad(ns||(ns=pc`
                <option value=${0}>${0} (${0})</option>`),e,_u[e],this._typeCounts[e])),this._sortBy,e=>{this._sortBy=e.target.value,this._loadPage(!0)},"map"===this._view?ad(os||(os=pc`
              <select class="sort-select" aria-label="Heard within" .value=${0}
                @change=${0}>
                <option value="0">Heard: any time</option>
                <option value="1">Heard: 24 hours</option>
                <option value="7">Heard: 7 days</option>
                <option value="30">Heard: 30 days</option>
              </select>`),this._heard,e=>rp(e.target.value)):od,()=>{this._moreOpen=!this._moreOpen},this._moreOpen?ad(rs||(rs=pc`
                    <div class="more-menu" role="menu">
                      <button role="menuitem" @click=${0}>⟳ Sync contacts from radio</button>
                      <button role="menuitem" title="Remove discovered contacts older than the configured threshold"
                        @click=${0}>Clear stale nodes</button>
                    </div>
                  `),()=>{this._moreOpen=!1,this._syncAll()},()=>{this._moreOpen=!1,this._clearStaleContacts()}):od,"map"===this._view?"Show nodes as a list":"Show nodes on a map",()=>this._setView("map"===this._view?"list":"map"),"map"===this._view?"☰ List":"🗺 Map","map"===this._view?"map-view":"","map"===this._view?this._renderMap():this._renderContactsContent(),this.hass,this._selectedNode,this._pendingAction,this._nodeDetailDialogOpen,()=>{this._nodeDetailDialogOpen=!1},()=>this._dispatchNodeAction("message"),()=>this._dispatchNodeAction("trace"),()=>this._dispatchNodeAction("add-contact"),()=>this._dispatchNodeAction("remove-contact"))}_setPrimaryFilter(e){this._primaryFilter!==e&&(this._primaryFilter=e,this._displayedContacts=[],this._totalCount=0,this._loadPage(!0))}_setTypeFilter(e){this._typeFilter===e?this._typeFilter=null:this._typeFilter=e,this._displayedContacts=[],this._totalCount=0,this._loadPage(!0)}_onSearchInput(e){this._searchQuery=e.target.value,this._searchTimer&&clearTimeout(this._searchTimer),this._searchTimer=setTimeout(()=>this._loadPage(!0),300)}_getSearchPlaceholder(){const e=this._primaryFilter,t=this._typeFilter?_u[this._typeFilter].toLowerCase():"nodes";return"all"===e?`Search all ${t}...`:`Search ${e} ${t}...`}async _loadPage(e=!1){if(this.hass){this._loading=!0;try{var t;const a=e?0:this._displayedContacts.length,i=this._typeFilter?yu[this._typeFilter]:void 0,n=this._searchQuery.trim()||void 0,o=await Hd(this.hass,this._primaryFilter,{nodeType:i,search:n,limit:50,offset:a,entryId:null===(t=this.config)||void 0===t?void 0:t.entry_id,sortBy:this._sortBy});this._displayedContacts=e?o.contacts:[...this._displayedContacts,...o.contacts],this._totalCount=o.total,this._typeCounts=o.counts,e&&"map"===this._view&&this._loadMapContacts()}catch(e){console.error("Failed to load contacts:",e)}finally{this._loading=!1}}}async _loadCounts(){if(this.hass)try{var e;this._l1Counts=await async function(e,t){try{const a={type:"meshcore_chat/get_node_counts"};return t&&(a.entry_id=t),await e.callWS(a)}catch(e){return{all:0,added:0,discovered:0}}}(this.hass,null===(e=this.config)||void 0===e?void 0:e.entry_id)}catch(e){console.error("Failed to load node counts:",e)}}async _clearStaleContacts(){var e;if(!this.hass)return;const t=prompt("Remove discovered contacts older than how many days?","30");if(!t)return;const a=parseInt(t,10);isNaN(a)||a<1||a>365||(await async function(e,t,a){try{const i={type:"meshcore_chat/clear_discovered_contacts"};return void 0!==t&&(i.days_threshold=t),a&&(i.entry_id=a),await e.callWS(i)}catch(e){return{removed:0}}}(this.hass,a,null===(e=this.config)||void 0===e?void 0:e.entry_id)).removed>0&&(this._loadPage(!0),this._loadCounts(),this.dispatchEvent(new CustomEvent("contacts-changed",{bubbles:!0,composed:!0})))}_syncAll(){this._loadPage(!0),this._loadCounts(),this.dispatchEvent(new CustomEvent("contacts-changed",{bubbles:!0,composed:!0}))}static _storedView(){try{return"map"===localStorage.getItem(vu)?"map":"list"}catch(e){return"list"}}_setView(e){this._view=e;try{localStorage.setItem(vu,e)}catch(e){}"map"===e&&this._loadMapContacts()}async _loadMapContacts(){if(!this.hass)return;const e=++this._mapLoadSeq;var t;this._mapLoading=!0,this._home||yh(this.hass,null===(t=this.config)||void 0===t?void 0:t.entry_id).then(e=>{this._home=e});try{const t=this._typeFilter?yu[this._typeFilter]:void 0,i=this._searchQuery.trim()||void 0,n=[];for(;;){var a;const o=await Hd(this.hass,this._primaryFilter,{nodeType:t,search:i,limit:500,offset:n.length,entryId:null===(a=this.config)||void 0===a?void 0:a.entry_id,sortBy:this._sortBy});if(e!==this._mapLoadSeq)return;if(n.push(...o.contacts),0===o.contacts.length||n.length>=o.total)break}this._mapContacts=n}catch(e){console.error("Failed to load contacts for the map:",e)}finally{e===this._mapLoadSeq&&(this._mapLoading=!1)}}_renderMap(){const e=this._searchQuery.trim().toLowerCase(),t=this._heardMapContacts(),a=t.filter(t=>!e||(t.adv_name||"").toLowerCase().includes(e)||(t.pubkey_prefix||"").toLowerCase().startsWith(e)).slice().sort((e,t)=>(t.last_advert||0)-(e.last_advert||0)).slice(0,300),i=this._mapCard;return ad(ss||(ss=pc`
      <div class="map-split">
        <div class="map-list" role="list" aria-label="Nodes">
          ${0}
          ${0}
        </div>
        <div class="map-wrap">
          <meshcore-nodes-map
            .hass=${0}
            .nodes=${0}
            .home=${0}
            ?loading=${0}
            @node-selected=${0}>
          </meshcore-nodes-map>
          ${0}
        </div>
      </div>
    `),a.map(e=>{var t,a;return ad(ls||(ls=pc`
            <button role="listitem" class="map-row ${0}"
              @click=${0}>
              <span class="map-dot" style="background:${0}"></span>
              <span class="map-row-text">
                <span class="map-row-name">${0}${0}</span>
                <span class="map-row-meta">${0}${0}${0}</span>
              </span>
            </button>`),(null==i?void 0:i.public_key)===e.public_key?"on":"",()=>this._focusOnMap(e),null!==(t=Xp[e.type])&&void 0!==t?t:"#9e9e9e",e.added_to_node?"★ ":"",e.adv_name||e.pubkey_prefix,null!==(a=Dp[e.type])&&void 0!==a?a:"Node",e.last_advert?` · ${bu(1e3*e.last_advert)}`:"",function(e){const t=Number(e.adv_lat),a=Number(e.adv_lon);return Number.isFinite(t)&&Number.isFinite(a)&&!(0===t&&0===a)}(e)?"":" · no location")}),0===a.length?ad(cs||(cs=pc`<div class="map-row-meta" style="padding:12px">No nodes match</div>`)):od,this.hass,t,this._home,this._mapLoading,e=>{this._mapCard=e.detail.node},i?this._renderMapCard(i):od)}_focusOnMap(e){var t;this._mapCard=e;const a=this.renderRoot.querySelector("meshcore-nodes-map");null==a||null===(t=a.focusNode)||void 0===t||t.call(a,e)}_mapCardAction(e,t){this._selectedNode=e,this._dispatchNodeAction(t)}_renderMapCard(e){var t;const a="number"==typeof e.out_path_len&&e.out_path_len>=0?`${e.out_path_len} hop${1===e.out_path_len?"":"s"}`:"flood",i=4!==e.type;return ad(ds||(ds=pc`
      <div class="map-card" role="dialog" aria-label=${0}>
        <div class="map-card-head">
          <b>${0}</b>
          <button class="map-card-close" aria-label="Close" @click=${0}>✕</button>
        </div>
        <div class="map-row-meta">
          ${0} · ${0}${0}
        </div>
        <div class="map-card-actions">
          ${0}
          <button class="sync-btn" @click=${0}>Trace</button>
          ${0}
          <button class="sync-btn" @click=${0}>Details…</button>
        </div>
      </div>
    `),e.adv_name||"Node",e.adv_name||e.pubkey_prefix,()=>{this._mapCard=null},null!==(t=Dp[e.type])&&void 0!==t?t:"Node",a,e.last_advert?` · heard ${bu(1e3*e.last_advert)}`:"",i&&e.added_to_node?ad(ps||(ps=pc`<button class="sync-btn" @click=${0}>Message</button>`),()=>this._mapCardAction(e,"message")):od,()=>this._mapCardAction(e,"trace"),e.added_to_node?od:ad(hs||(hs=pc`<button class="sync-btn" @click=${0}>☆ Add</button>`),()=>this._mapCardAction(e,"add-contact")),()=>this._openNodeDetail(e))}_renderContactsContent(){return this._loading&&0===this._displayedContacts.length?ad(us||(us=pc`
        <div class="empty-state">
          <div class="empty-text">Loading...</div>
        </div>
      `)):0===this._displayedContacts.length?this._renderEmptyState():ad(ms||(ms=pc`
      <div class="nodes-grid">
        ${0}
      </div>
      ${0}
    `),this._displayedContacts.map(e=>ad(gs||(gs=pc`
          <div @click=${0}>
            <meshcore-chat-contact-card .contact=${0}></meshcore-chat-contact-card>
          </div>
        `),()=>this._openNodeDetail(e),e)),this._displayedContacts.length<this._totalCount?ad(fs||(fs=pc`
        <div class="load-more">
          <button ?disabled=${0} @click=${0}>
            ${0}
          </button>
        </div>
      `),this._loading,()=>this._loadPage(),this._loading?"Loading...":`Load More (${this._displayedContacts.length} of ${this._totalCount})`):od)}_renderEmptyState(){const e=this._primaryFilter,t=this._typeFilter;let a=ad(vs||(vs=pc`<svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" opacity="0.5"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`)),i="No nodes found",n="";return this._searchQuery?(i="No matching nodes",n=`No results for "${this._searchQuery}"`):"added"===e?(i="No added contacts",n=t?`No added ${_u[t].toLowerCase()}`:"Add discovered contacts to see them here"):"discovered"===e?(i="No discovered nodes",n=t?`No discovered ${_u[t].toLowerCase()}`:"Nodes seen on the mesh will appear here"):"all"===e&&(i="No nodes",n="No contacts or discovered nodes yet"),ad(bs||(bs=pc`
      <div class="empty-state">
        <div class="empty-icon">${0}</div>
        <div class="empty-text">${0}</div>
        ${0}
      </div>
    `),a,i,n?ad(ys||(ys=pc`<div class="empty-subtext">${0}</div>`),n):od)}_openNodeDetail(e){this._selectedNode=e,this._nodeDetailDialogOpen=!0}_dispatchNodeAction(e){"add-contact"!==e&&"remove-contact"!==e||(this._pendingAction=e),this.dispatchEvent(new CustomEvent("node-action",{detail:{action:e,node:this._selectedNode},bubbles:!0,composed:!0})),"message"!==e&&"delete"!==e||(this._nodeDetailDialogOpen=!1)}clearPendingAction(){this._pendingAction=null}async refreshAfterMutation(e){if(await Promise.all([this._loadPage(!0),this._loadCounts()]),this._nodeDetailDialogOpen&&this._selectedNode&&e){const t=this._displayedContacts.find(t=>!(!t.public_key||t.public_key!==e)||!(!t.pubkey_prefix||!e.startsWith(t.pubkey_prefix)));t?this._selectedNode={...t}:this._nodeDetailDialogOpen=!1}}};xu.styles=bc(_s||(_s=pc`
    :host {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .nodes-layout {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .nodes-header {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 12px;
      background: var(--card-background-color, #fff);
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      flex-shrink: 0;
    }

    /* ─── Level 1 filter buttons ────────────────────────────────────── */

    .l1-filters {
      display: flex;
      gap: 6px;
    }

    .l1-btn {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 8px 14px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 20px;
      background: transparent;
      color: var(--secondary-text-color, #727272);
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
      border-left: 3px solid transparent;
    }

    .l1-btn:hover {
      background: rgba(0, 0, 0, 0.03);
      color: var(--primary-text-color);
    }

    /* Inactive left-edge accent — same alpha as the active border
       below, so the active/inactive transition doesn't visibly jump
       in saturation. */
    .l1-btn.added,
    .l1-btn.all         { border-left-color: rgba(3, 169, 244, 0.5); }
    .l1-btn.discovered  { border-left-color: rgba(76, 175, 80, 0.5); }

    /* Active state: translucent category background + saturated text,
       matching the per-card category-badge treatment so the filter
       reads as the same tag concept. Normalize border-left-width back
       to 1px so the filled active button isn't visibly chunkier on the
       left than the other three sides (the 3px accent only makes
       sense as an inactive-state visual cue). */
    .l1-btn.active {
      border-left-width: 1px;
    }
    .l1-btn.active.all,
    .l1-btn.active.added {
      background: rgba(3, 169, 244, 0.15);
      color: #0277bd;
      border-color: rgba(3, 169, 244, 0.5);
      border-left-color: rgba(3, 169, 244, 0.5);
    }
    .l1-btn.active.discovered {
      background: rgba(76, 175, 80, 0.15);
      color: #2e7d32;
      border-color: rgba(76, 175, 80, 0.5);
      border-left-color: rgba(76, 175, 80, 0.5);
    }

    .l1-count {
      font-size: 11px;
      opacity: 0.8;
    }

    /* ─── Level 2 filter buttons ────────────────────────────────────── */

    .l2-bar {
      display: flex;
      gap: 6px;
      align-items: center;
    }

    .l2-btn {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 5px 10px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 14px;
      background: transparent;
      color: var(--secondary-text-color, #727272);
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
    }

    .l2-btn:hover {
      background: rgba(0, 0, 0, 0.03);
      color: var(--primary-text-color);
    }

    /* Inactive L2 left-edge accent — same alpha as the active border
       below for a clean active/inactive transition. */
    .l2-btn.clients      { border-left: 2px solid rgba(76, 175, 80, 0.5); }
    .l2-btn.repeaters    { border-left: 2px solid rgba(255, 152, 0, 0.5); }
    .l2-btn.room_servers { border-left: 2px solid rgba(156, 39, 176, 0.5); }
    .l2-btn.sensors      { border-left: 2px solid rgba(96, 125, 139, 0.5); }

    /* When active, normalize the left edge back to 1px so the filled
       button doesn't have a chunkier left border than its other edges. */
    .l2-btn.active {
      border-left-width: 1px;
    }

    /* Active L2: same translucent treatment as L1 active and the
       per-card avatar/category-badge. */
    .l2-btn.active.clients {
      background: rgba(76, 175, 80, 0.15);
      color: #388e3c;
      border-color: rgba(76, 175, 80, 0.5);
    }
    .l2-btn.active.repeaters {
      background: rgba(255, 152, 0, 0.15);
      color: #f57c00;
      border-color: rgba(255, 152, 0, 0.5);
    }
    .l2-btn.active.room_servers {
      background: rgba(156, 39, 176, 0.15);
      color: #7b1fa2;
      border-color: rgba(156, 39, 176, 0.5);
    }
    .l2-btn.active.sensors {
      background: rgba(96, 125, 139, 0.15);
      color: #455a64;
      border-color: rgba(96, 125, 139, 0.5);
    }

    .l2-count {
      font-size: 10px;
      opacity: 0.8;
    }

    .l2-spacer {
      flex: 1;
    }

    /* ─── Search bar ────────────────────────────────────────────────── */

    .search-bar {
      display: flex;
      align-items: center;
      gap: 8px;
      background: var(--primary-background-color, #fafafa);
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 8px;
      padding: 6px 10px;
    }

    .search-icon {
      flex-shrink: 0;
      color: var(--secondary-text-color, #727272);
      display: flex;
    }

    .search-bar input {
      flex: 1;
      border: none;
      background: transparent;
      font-size: 13px;
      color: var(--primary-text-color);
      outline: none;
    }

    .clear-search {
      border: none;
      background: none;
      cursor: pointer;
      color: var(--secondary-text-color, #727272);
      font-size: 16px;
      padding: 0 2px;
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }

    .header-actions .search-bar {
      min-width: 180px;
    }

    .more-wrap {
      position: relative;
    }

    .more-menu {
      position: absolute;
      right: 0;
      top: calc(100% + 4px);
      z-index: 1000;
      min-width: 220px;
      background: var(--card-background-color, #fff);
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 8px;
      padding: 4px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
    }

    .more-menu button {
      display: block;
      width: 100%;
      text-align: left;
      padding: 8px 12px;
      border: none;
      border-radius: 6px;
      background: none;
      color: var(--primary-text-color);
      font: inherit;
      font-size: 13px;
      cursor: pointer;
    }

    .more-menu button:hover {
      background: rgba(127, 127, 127, 0.12);
    }

    .sync-btn {
      padding: 6px 12px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 6px;
      background: transparent;
      color: var(--secondary-text-color, #727272);
      font-size: 12px;
      cursor: pointer;
      transition: all 0.15s;
    }
    .sync-btn:hover {
      background: var(--primary-color, #03a9f4);
      color: #fff;
      border-color: var(--primary-color, #03a9f4);
    }

    .sort-select {
      padding: 4px 8px; border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 4px; background: var(--card-background-color, #fff);
      color: var(--primary-text-color); font-size: 11px; cursor: pointer;
      box-sizing: border-box;
      height: 28px;
      min-height: 28px;
      line-height: normal;
      appearance: menulist;
      -webkit-appearance: menulist;
    }

    /* ─── Content area ──────────────────────────────────────────────── */

    .content-area {
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
      padding: 12px;
      background: var(--primary-background-color, #fafafa);
    }

    .map-split {
      display: flex;
      flex: 1;
      min-height: 0;
      gap: 12px;
    }

    .map-list {
      width: 280px;
      flex-shrink: 0;
      overflow-y: auto;
      background: var(--card-background-color, #fff);
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 12px;
      padding: 4px;
    }

    @media (max-width: 870px) {
      .map-list { display: none; }
    }

    .map-row {
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
      padding: 8px 10px;
      border: none;
      border-radius: 8px;
      background: none;
      color: var(--primary-text-color);
      font: inherit;
      text-align: left;
      cursor: pointer;
    }

    .map-row:hover, .map-row.on {
      background: rgba(127, 127, 127, 0.12);
    }

    .map-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .map-row-text {
      display: flex;
      flex-direction: column;
      min-width: 0;
    }

    .map-row-name {
      font-size: 13px;
      font-weight: 500;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .map-row-meta {
      font-size: 12px;
      color: var(--secondary-text-color);
    }

    .map-wrap {
      position: relative;
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
    }

    .map-wrap > meshcore-nodes-map {
      flex: 1;
    }

    .map-card {
      position: absolute;
      left: 12px;
      bottom: 36px;
      z-index: 500;
      width: min(300px, calc(100% - 24px));
      background: var(--card-background-color, #fff);
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 12px;
      padding: 12px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
    }

    .map-card-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
    }

    .map-card-close {
      border: none;
      background: none;
      color: var(--secondary-text-color);
      cursor: pointer;
      font-size: 14px;
    }

    .map-card-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-top: 10px;
    }

    .content-area.map-view {
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    .view-btn {
      padding: 6px 12px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 6px;
      background: transparent;
      color: var(--secondary-text-color, #727272);
      font-size: 12px;
      cursor: pointer;
      white-space: nowrap;
    }
    .view-btn:hover {
      background: var(--primary-color, #03a9f4);
      color: #fff;
      border-color: var(--primary-color, #03a9f4);
    }

    .content-area::-webkit-scrollbar { width: 6px; }
    .content-area::-webkit-scrollbar-track { background: transparent; }
    .content-area::-webkit-scrollbar-thumb {
      background: var(--scrollbar-thumb, var(--scrollbar-thumb-color, #c1c1c1));
      border-radius: 3px;
    }

    .nodes-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 8px;
    }

    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: var(--secondary-text-color, #727272);
      text-align: center;
    }
    .empty-icon { font-size: 48px; margin-bottom: 16px; opacity: 0.5; }
    .empty-text { font-size: 16px; margin-bottom: 8px; }
    .empty-subtext { font-size: 13px; opacity: 0.7; max-width: 300px; }

    .clear-btn {
      padding: 4px 10px; border: 1px solid rgba(219, 68, 55, 0.3);
      border-radius: 4px; background: transparent;
      color: var(--error-color, #db4437); font-size: 11px;
      font-weight: 500; cursor: pointer; transition: all 0.15s;
    }
    .clear-btn:hover {
      background: var(--error-color, #db4437); color: #fff;
      border-color: var(--error-color, #db4437);
    }

    .confirm-bar {
      display: flex; align-items: center; gap: 8px;
      padding: 8px 12px; background: rgba(219, 68, 55, 0.08);
      border: 1px solid rgba(219, 68, 55, 0.2); border-radius: 6px;
      margin-bottom: 12px; font-size: 12px;
    }
    .confirm-bar button {
      padding: 4px 10px; border: none; border-radius: 4px;
      font-size: 11px; font-weight: 600; cursor: pointer;
    }
    .confirm-bar .yes { background: var(--error-color, #db4437); color: #fff; }
    .confirm-bar .no { background: var(--divider-color, #e0e0e0); color: var(--primary-text-color); }

    .category-badge {
      font-size: 10px; font-weight: 500; padding: 2px 8px;
      border-radius: 10px; white-space: nowrap; flex-shrink: 0; align-self: center;
    }

    .load-more {
      display: flex; justify-content: center; padding: 12px;
    }
    .load-more button {
      padding: 8px 20px; border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 6px; background: transparent;
      color: var(--primary-text-color); font-size: 12px;
      cursor: pointer; transition: all 0.15s;
    }
    .load-more button:hover {
      background: var(--primary-color, #03a9f4); color: #fff;
      border-color: var(--primary-color, #03a9f4);
    }

    /* ─── Narrow overrides ──────────────────────────────────────────── */

    :host([narrow]) .l1-filters { gap: 4px; flex-wrap: wrap; }
    :host([narrow]) .l1-btn { font-size: 11px; padding: 5px 10px; }
    :host([narrow]) .l2-btn { font-size: 11px; padding: 5px 10px; }
    :host([narrow]) .nodes-grid { grid-template-columns: 1fr; }
  `)),hc([Sd({type:Array})],xu.prototype,"contacts",void 0),hc([Sd({type:Array})],xu.prototype,"channels",void 0),hc([Sd({type:Boolean})],xu.prototype,"narrow",void 0),hc([Sd({type:Object})],xu.prototype,"hass",void 0),hc([Sd({type:Object})],xu.prototype,"config",void 0),hc([Ad()],xu.prototype,"_viewportNarrow",void 0),hc([Ad()],xu.prototype,"_primaryFilter",void 0),hc([Ad()],xu.prototype,"_typeFilter",void 0),hc([Ad()],xu.prototype,"_moreOpen",void 0),hc([Ad()],xu.prototype,"_heard",void 0),hc([Sd({attribute:!1})],xu.prototype,"focusNode",void 0),hc([Ad()],xu.prototype,"_mapCard",void 0),hc([Ad()],xu.prototype,"_searchQuery",void 0),hc([Ad()],xu.prototype,"_displayedContacts",void 0),hc([Ad()],xu.prototype,"_totalCount",void 0),hc([Ad()],xu.prototype,"_typeCounts",void 0),hc([Ad()],xu.prototype,"_l1Counts",void 0),hc([Ad()],xu.prototype,"_loading",void 0),hc([Ad()],xu.prototype,"_selectedNode",void 0),hc([Ad()],xu.prototype,"_nodeDetailDialogOpen",void 0),hc([Ad()],xu.prototype,"_pendingAction",void 0),hc([Ad()],xu.prototype,"_view",void 0),hc([Ad()],xu.prototype,"_mapContacts",void 0),hc([Ad()],xu.prototype,"_mapLoading",void 0),hc([Ad()],xu.prototype,"_home",void 0),hc([Ad()],xu.prototype,"_sortBy",void 0),xu=fu=hc([kd("meshcore-nodes-page")],xu);const wu=[{step:"generating",label:"Generating new key"},{step:"importing",label:"Sending key to device"},{step:"rebooting",label:"Rebooting device"},{step:"reconnecting",label:"Waiting for device reconnect"},{step:"reloading",label:"Reloading MeshCore integration"},{step:"verifying",label:"Verifying new identity"}];let ku=class extends xd{constructor(){super(),this.narrow=!1,this._deviceConfig=null,this._loading=!0,this._error=null,this._editValues={},this._saving=!1,this._deviceConfigGeneration=0,this._commandDialogOpen=!1,this._confirmAction=null,this._confirmDialogOpen=!1,this._locationSource="manual",this._importKeyValue="",this._deviceEntities={},this._meshcoreDeviceMap={},this._entityRegistryLoaded=!1,this._hiddenSensors={},this._contextMenu=null,this._overlayPointerStarted=!1,this._settingsModalOpen=!1,this._keyManagementModalOpen=!1,this._identityFlowState={kind:"closed"},this._identityFlowUnsubscribe=null,this._renameSuccess=null,this._hiddenSensorsModalKey=null,this._statusMessage=null,this._statusMessageTimeout=null,this._shareOpen=!1,this._onCompanionTrace=()=>{var e;const t=null===(e=this.selectedDevice)||void 0===e?void 0:e.entry_id;this.dispatchEvent(new CustomEvent("companion-trace-requested",{detail:{entryId:t},bubbles:!0,composed:!0}))},Pp(this,{isOpen:()=>null!==this._contextMenu,onEscape:()=>this._closeContextMenu(),getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="tile-context"]')}}),Pp(this,{isOpen:()=>this._settingsModalOpen,onEscape:()=>this._closeSettingsModal(),getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="companion-settings"]')}}),Pp(this,{isOpen:()=>this._keyManagementModalOpen,onEscape:()=>this._closeKeyManagementModal(),getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="key-management"]')}}),Pp(this,{isOpen:()=>null!==this._hiddenSensorsModalKey,onEscape:()=>this._closeHiddenSensorsModal(),getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="hidden-sensors"]')}}),Pp(this,{isOpen:()=>"closed"!==this._identityFlowState.kind,onEscape:()=>{"success"!==this._identityFlowState.kind&&"failure"!==this._identityFlowState.kind||this._closeIdentityFlowModal()},getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="identity-flow"]')}}),Pp(this,{isOpen:()=>null!==this._renameSuccess,onEscape:()=>this._closeRenameSuccessModal(),getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="rename-success"]')}})}connectedCallback(){super.connectedCallback(),this._loadDeviceConfig(),this._loadHiddenSensors()}disconnectedCallback(){super.disconnectedCallback(),this._deviceConfigGeneration++,null!==this._statusMessageTimeout&&(clearTimeout(this._statusMessageTimeout),this._statusMessageTimeout=null)}updated(e){if(e.has("config")){var t;const a=e.get("config");(null==a?void 0:a.entry_id)!==(null===(t=this.config)||void 0===t?void 0:t.entry_id)&&(this._editValues={},this._deviceConfig=null,this._saving=!1),this._loadDeviceConfig()}e.has("hass")&&this.hass&&!this._entityRegistryLoaded&&this._loadEntityRegistry()}async _loadDeviceConfig(){var e;if(!this.hass)return;const t=++this._deviceConfigGeneration,a=null===(e=this.config)||void 0===e?void 0:e.entry_id,i=()=>{var e;return t===this._deviceConfigGeneration&&a===(null===(e=this.config)||void 0===e?void 0:e.entry_id)};this._loading=!0,this._error=null;try{var n;const e=await qd(this.hass,a);if(!i())return;this._deviceConfig=e,null!==(n=this._deviceConfig)&&void 0!==n&&n.location_source&&(this._locationSource=this._deviceConfig.location_source)}catch(e){if(!i())return;this._error=`Failed to load device configuration: ${String(e)}`}finally{i()&&(this._loading=!1)}}render(){var e,t,a,i,n;return this._loading?ad(xs||(xs=pc`
        <div class="settings-page">
          <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: var(--secondary-text-color);">
            <div style="display: flex; align-items: center; gap: 8px;">
              <div class="loading-spinner"></div>
              <span>Loading settings...</span>
            </div>
          </div>
        </div>
      `)):this._error?ad(ws||(ws=pc`
        <div class="settings-page">
          <div style="padding: 16px; color: var(--error-color); font-size: 14px;">
            ${0}
          </div>
        </div>
      `),this._error):this._deviceConfig?ad($s||($s=pc`
      <div class="settings-page">
        <div class="settings-container">
          <!-- Companion Device Card (full width at top) -->
          ${0}

          <div class="settings-grid">
            <div class="device-section">
              <div class="card-title">General</div>
              ${0}
            </div>

            <div class="device-section">
              <div class="card-title">Location</div>
              ${0}
            </div>
          </div>

          <details class="device-section fold">
            <summary class="card-title">Advanced radio settings</summary>
            <div class="fold-warning">
              Changing these can take you off the mesh. Everyone you talk to must use the same
              frequency, bandwidth, spreading factor and coding rate.
            </div>
            ${0}
          </details>

          <details class="device-section fold danger-fold">
            <summary class="card-title">Danger zone</summary>
            <div class="danger-stack">
              ${0}
              ${0}
            </div>
          </details>
        </div>
      </div>

      <!-- Modals & Dialogs -->
      ${0}

      <!-- Settings Modal -->
      ${0}

      <!-- Key Management Modal -->
      ${0}

      <!-- Hidden Sensors Modal -->
      ${0}

      <!-- Identity Flow Modal (streaming progress) -->
      ${0}

      <!-- Rename Success Modal (persistent dialog) -->
      ${0}

      ${0}

      <!-- Status Toast -->
      ${0}

      <!-- Dialogs -->
      <meshcore-confirm-dialog
        .open=${0}
        .title=${0}
        .message=${0}
        .requireTyped=${0}
        ?dangerous=${0}
        @confirm=${0}
        @cancel=${0}>
      </meshcore-confirm-dialog>

      <meshcore-command-dialog
        .open=${0}
        .hass=${0}
        .entryId=${0}
        ?isLocal=${0}
        ?narrow=${0}
        @close=${0}>
      </meshcore-command-dialog>
    `),this.selectedDevice?this._renderCompanionCard():od,this._renderDeviceInfo(),this._renderLocation(),this._renderRadioSettings(),this._renderRename(),this._renderIdentityManagement(),this._contextMenu?ad(Cs||(Cs=pc`
        <div class="modal-overlay"
             @pointerdown=${0}
             @click=${0}>
          <div class="modal-card" data-a11y="tile-context"
               role="dialog" aria-modal="true" aria-label="${0} actions"
               @click=${0}
               @pointerdown=${0}>
            <div class="modal-header">
              <span class="modal-title">${0}</span>
              <button class="modal-close" aria-label="Close" @click=${0}
                      @pointerdown=${0}>&times;</button>
            </div>
            <div class="modal-body">
              <button class="modal-action danger" @click=${0}>
                <span class="modal-action-icon"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/></svg></span>
                Hide Sensor
              </button>
            </div>
          </div>
        </div>
      `),this._onOverlayPointerDown,this._closeContextMenu,this._contextMenu.label,e=>e.stopPropagation(),e=>e.stopPropagation(),this._contextMenu.label,this._closeContextMenu,e=>e.stopPropagation(),this._hideSensorFromContext):od,this._settingsModalOpen?ad(Ss||(Ss=pc`
        <div class="modal-overlay" @click=${0}>
          <div class="modal-card" data-a11y="companion-settings"
               role="dialog" aria-modal="true" aria-label="Companion settings"
               @click=${0}>
            <div class="modal-header">
              <span class="modal-title">Companion Settings</span>
              <button class="modal-close" aria-label="Close" @click=${0}>&times;</button>
            </div>
            <div class="modal-body">
              <button class="modal-action" @click=${0}>
                <span class="modal-action-icon"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/></svg></span>
                View Hidden Sensors (${0})
              </button>

              <button class="modal-action" @click=${0}>
                <span class="modal-action-icon"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20 19V7H4v12h16m0-16a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h16m-7 14v-2h5v2h-5m-3.42-4L5.57 9H8.4l3.3 3.3c.39.39.39 1.03 0 1.42L8.42 17H5.59l4-4z"/></svg></span>
                Issue Command
              </button>

              <div class="modal-divider"></div>

              <button class="modal-action danger" @click=${0}>
                <span class="modal-action-icon"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M17.65 6.35A7.958 7.958 0 0012 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0112 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg></span>
                Reboot Device
              </button>

              <button class="modal-action danger" @click=${0}>
                <span class="modal-action-icon"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12.65 10a6 6 0 110 4H10v2H8v-2H6v-2h6.65zM17 14a2 2 0 100-4 2 2 0 000 4z"/></svg></span>
                Key Management
              </button>
            </div>
          </div>
        </div>
      `),this._closeSettingsModal,e=>e.stopPropagation(),this._closeSettingsModal,this._openHiddenSensorsList,(this._hiddenSensors[this._getCompanionDeviceKey()]||[]).length,this._openCommandDialogForCompanion,this._handleRebootFromModal,this._openKeyManagementModal):od,this._keyManagementModalOpen?ad(As||(As=pc`
        <div class="modal-overlay" @click=${0}>
          <div class="modal-card" data-a11y="key-management"
               role="dialog" aria-modal="true" aria-label="Key management"
               style="max-width: 440px;"
               @click=${0}>
            <div class="modal-header">
              <span class="modal-title">Key Management</span>
              <button class="modal-close" aria-label="Close" @click=${0}>&times;</button>
            </div>
            <div class="modal-body" style="padding: 16px 20px;">
              ${0}
            </div>
          </div>
        </div>
      `),this._closeKeyManagementModal,e=>e.stopPropagation(),this._closeKeyManagementModal,this._renderIdentityManagement()):od,this._hiddenSensorsModalKey?this._renderHiddenSensorsModal():od,this._renderIdentityFlowModal(),this._renderRenameSuccessModal(),this._shareOpen?this._renderShareModal():od,this._statusMessage?ad(Ms||(Ms=pc`
        <div class="status-toast ${0}">
          ${0}
        </div>
      `),this._statusMessage.type,this._statusMessage.text):od,this._confirmDialogOpen,(null===(e=this._confirmAction)||void 0===e?void 0:e.title)||"",(null===(t=this._confirmAction)||void 0===t?void 0:t.message)||"",null===(a=this._confirmAction)||void 0===a?void 0:a.requireTyped,!(null===(i=this._confirmAction)||void 0===i||!i.requireTyped),this._onConfirmAction,this._onConfirmCancel,this._commandDialogOpen,this.hass,null===(n=this.config)||void 0===n?void 0:n.entry_id,!0,this.narrow,this._onCommandDialogClose):ad(ks||(ks=pc`<div>No device config loaded</div>`))}_renderCompanionCard(){var e;if(!this.selectedDevice)return od;const t=this.selectedDevice,a=t.connected,i=this._getCompanionDeviceKey(),n=this._getCompanionEntities(),o=(this._hiddenSensors[i]||[]).length,r=n.find(e=>e.entity_id.includes("node_count")),s=r?null===(e=this.hass)||void 0===e||null===(e=e.states[r.entity_id])||void 0===e?void 0:e.state:void 0,l=s&&"unavailable"!==s&&"unknown"!==s?s:void 0;return ad(Fs||(Fs=pc`
      <div class="device-section" @tile-context-menu=${0}>
        <div class="companion-header">
          <div class="section-title">
            <div class="section-icon companion">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M9,2A1,1 0 0,0 8,3C8,8.67 8,14.33 8,20C8,21.11 8.89,22 10,22H15C16.11,22 17,21.11 17,20V9C17,7.89 16.11,7 15,7H10V3A1,1 0 0,0 9,2M10,9H15V13H10V9Z"/></svg>
            </div>
            <div>
              <div class="device-name">${0}</div>
              <div class="device-meta">
                <span>Companion</span>
                <span>Firmware: ${0}</span>
                <span>Key: ${0}</span>
                ${0}
              </div>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:4px;">
            <button class="settings-btn" @click=${0} title="Device settings" aria-label="Device settings">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.49.49 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 00-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
            </button>
            <div class="status-badge ${0}">
              <span class="status-dot ${0}"></span>
              ${0}
            </div>
          </div>
        </div>

        ${0}

        <div class="actions-row">
          <button class="action-btn" ?disabled=${0} @click=${0}>Local Advert</button>
          <button class="action-btn" ?disabled=${0} @click=${0}>Flood Advert</button>
          <button class="action-btn" ?disabled=${0} @click=${0}>Sync Clock</button>
          <button class="action-btn" ?disabled=${0} @click=${0}>Trace</button>
          <button class="action-btn" @click=${0}>Command…</button>
          <button class="action-btn" @click=${0}>Share my contact</button>
        </div>
      </div>
    `),e=>this._onTileContextMenu(e,i),t.name,t.firmware||"unknown",t.pubkey_prefix,void 0!==l?ad(Es||(Es=pc`<span>Added nodes: ${0}</span>`),l):od,()=>this._settingsModalOpen=!0,a?"online":"offline",a?"online":"offline",a?"Connected":"Offline",n.length>0?ad(Ds||(Ds=pc`
              <meshcore-node-summary
                .hass=${0}
                .device=${0}
                .entities=${0}
                .hiddenCount=${0}>
              </meshcore-node-summary>
            `),this.hass,this._companionDescriptor(t),n,o):od,!a,()=>this._executeCompanionAction("send_advert",void 0,"Local Advert"),!a,()=>this._executeCompanionAction("send_advert",{flood:!0},"Flood Advert"),!a,()=>this._executeCompanionAction("set_time",{val:Math.floor(Date.now()/1e3)},"Sync Clock"),!a,this._onCompanionTrace,this._openCommandDialogForCompanion,()=>{this._shareOpen=!0})}_renderHiddenSensorsModal(){const e=this._hiddenSensorsModalKey,t=(this._hiddenSensors[e]||[]).map(e=>{let t=e;for(const a of Object.values(this._deviceEntities)){const i=a.find(t=>t.entity_id===e);if(i){t=i.label;break}}return{entityId:e,label:t}});return ad(zs||(zs=pc`
      <div class="modal-overlay" @click=${0}>
        <div class="modal-card" data-a11y="hidden-sensors"
             role="dialog" aria-modal="true" aria-label="Hidden sensors"
             @click=${0}>
          <div class="modal-header">
            <span class="modal-title">Hidden Sensors</span>
            <button class="modal-close" aria-label="Close" @click=${0}>&times;</button>
          </div>
          <div class="modal-body">
            ${0}
          </div>
          ${0}
        </div>
      </div>
    `),this._closeHiddenSensorsModal,e=>e.stopPropagation(),this._closeHiddenSensorsModal,0===t.length?ad(Os||(Os=pc`<div class="empty-hidden">No hidden sensors</div>`)):t.map(t=>ad(Is||(Is=pc`
                  <div class="hidden-sensor-item">
                    <div>
                      <div class="hidden-sensor-name">${0}</div>
                      <div class="hidden-sensor-id">${0}</div>
                    </div>
                    <button class="unhide-btn" @click=${0}>Unhide</button>
                  </div>
                `),t.label,t.entityId,()=>this._unhideSensor(e,t.entityId))),t.length>1?ad(Rs||(Rs=pc`
                <div class="modal-footer">
                  <button class="action-btn" @click=${0}>Unhide All</button>
                </div>
              `),()=>{this._unhideAllSensors(e)}):od)}_renderDeviceInfo(){if(this._deviceConfig)return ad(Ts||(Ts=pc`
      <div class="info-row">
        <span class="info-label">Hardware Model</span>
        <span class="info-value">${0}</span>
      </div>

      <div class="info-row">
        <span class="info-label">Public Key</span>
        <span class="info-value" style="display: flex; align-items: center; gap: 6px;">
          ${0}
          <button
            style="border: none; background: none; cursor: pointer; padding: 2px; color: var(--secondary-text-color); display: flex; align-items: center;"
            title="Copy public key"
            @click=${0}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
          </button>
        </span>
      </div>

      ${0}

    `),this._deviceConfig.hardware_model,this._deviceConfig.pubkey,()=>this._copyToClipboard(this._deviceConfig.pubkey),this._deviceConfig.connection_type?ad(qs||(qs=pc`
        <div class="info-row">
          <span class="info-label">Connection</span>
          <span class="info-value">${0}${0}</span>
        </div>
      `),this._deviceConfig.connection_type.toUpperCase(),this._deviceConfig.connection_address?ad(Bs||(Bs=pc` — ${0}`),this._deviceConfig.connection_address):""):"")}_renderRename(){var e;if(this._deviceConfig)return ad(Ns||(Ns=pc`
      <div class="danger-zone" style="margin-top: 0;">
        <div class="danger-zone-title">Rename Device</div>
        <div style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 8px;">
          Changing the device name will change all entity IDs. Automations, scripts, and dashboards using current entity IDs will need to be updated.
        </div>
        <div style="display: flex; gap: 8px;">
          <input
            type="text"
            class="form-input"
            style="flex: 1;"
            .value=${0}
            @input=${0}
          />
          <button class="danger-button"
            ?disabled=${0}
            @click=${0}>
            Rename
          </button>
        </div>
      </div>
    `),null!==(e=this._editValues.name)&&void 0!==e?e:this._deviceConfig.name,e=>{this._editValues.name=e.target.value},!this._editValues.name||this._editValues.name===this._deviceConfig.name,this._handleNameSave)}_renderRadioSettings(){var e,t,a,i,n;if(!this._deviceConfig)return;const o=this._hasChanges("radio-settings",["tx_power","frequency","bandwidth","spreading_factor","coding_rate","path_hash_mode"]),r=null!==(e=this._editValues.path_hash_mode)&&void 0!==e?e:this._deviceConfig.path_hash_mode,s="number"==typeof r&&[0,1,2].includes(r);return ad(js||(js=pc`
      <div class="section-row">
        <div class="form-group-inline">
          <label class="form-label">TX Power (dBm)</label>
          <input
            type="number"
            class="form-input"
            min="2"
            max="22"
            .value=${0}
            @input=${0}
          />
        </div>
        <div class="form-group-inline">
          <label class="form-label">Frequency (MHz)</label>
          <input
            type="number"
            class="form-input"
            step="0.001"
            .value=${0}
            @input=${0}
          />
        </div>
      </div>

      <div class="section-row">
        <div class="form-group-inline">
          <label class="form-label">Bandwidth (kHz)</label>
          <select
            class="form-select"
            @change=${0}>
            ${0}
          </select>
        </div>
        <div class="form-group-inline">
          <label class="form-label">Spreading Factor</label>
          <select
            class="form-select"
            @change=${0}>
            ${0}
          </select>
        </div>
      </div>

      <div class="section-row">
        <div class="form-group-inline">
          <label class="form-label">Coding Rate</label>
          <select
            class="form-select"
            @change=${0}>
            ${0}
          </select>
        </div>
        <div class="form-group-inline">
          <label class="form-label">Path Hash Mode</label>
          <select
            class="form-select"
            @change=${0}>
            <option value="" disabled ?selected=${0}>
	      Unknown (unavailable)
            </option>
	    <option
	      value="0"
	      ?selected=${0}
	    >0 - 1 byte</option>
	    <option
	      value="1"
	      ?selected=${0}
	    >1 - 2 byte</option>
	    <option
	      value="2"
	      ?selected=${0}
	    >2 - 3 byte</option>
          </select>
        </div>
      </div>

      <button
        class="apply-button"
        style="width: 100%; margin-top: 12px;"
        ?disabled=${0}
        @click=${0}>
        ${0}
      </button>

      <div style="margin-top: 12px; padding: 8px; background: rgba(0, 0, 0, 0.02); border-radius: 6px; font-size: 12px; color: var(--secondary-text-color);">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="vertical-align: -2px; margin-right: 4px;"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>Radio changes require device reboot to take effect
      </div>
    `),String(null!==(t=null!==(a=this._editValues.tx_power)&&void 0!==a?a:this._deviceConfig.tx_power)&&void 0!==t?t:17),e=>{this._editValues.tx_power=Number(e.target.value)},String(null!==(i=null!==(n=this._editValues.frequency)&&void 0!==n?n:this._deviceConfig.frequency)&&void 0!==i?i:906.875),e=>{this._editValues.frequency=Number(e.target.value)},e=>{this._editValues.bandwidth=Number(e.target.value)},[7.8,10.4,15.6,20.8,31.25,41.7,62.5,125,250,500].map(e=>{var t,a;const i=null!==(t=null!==(a=this._editValues.bandwidth)&&void 0!==a?a:this._deviceConfig.bandwidth)&&void 0!==t?t:250;return ad(Ps||(Ps=pc`<option value=${0} ?selected=${0}>${0}</option>`),e,Number(i)===e,e)}),e=>{this._editValues.spreading_factor=Number(e.target.value)},[7,8,9,10,11,12].map(e=>{var t,a;const i=null!==(t=null!==(a=this._editValues.spreading_factor)&&void 0!==a?a:this._deviceConfig.spreading_factor)&&void 0!==t?t:11;return ad(Ls||(Ls=pc`<option value=${0} ?selected=${0}>${0}</option>`),e,Number(i)===e,e)}),e=>{this._editValues.coding_rate=Number(e.target.value)},[5,6,7,8].map(e=>{var t,a;const i=null!==(t=null!==(a=this._editValues.coding_rate)&&void 0!==a?a:this._deviceConfig.coding_rate)&&void 0!==t?t:5;return ad(Hs||(Hs=pc`<option value=${0} ?selected=${0}>${0}</option>`),e,Number(i)===e,e)}),e=>{const t=e.target.value;""!==t&&(this._editValues={...this._editValues,path_hash_mode:Number(t)})},!s,s&&0===r,s&&1===r,s&&2===r,!o||this._saving,()=>this._handleApply("radio-settings"),this._saving?"Applying...":"Apply Radio Settings")}_renderLocation(){var e,t,a,i,n,o,r,s;if(!this._deviceConfig)return;const l="ha_location"===this._locationSource,c=l?null===(e=this.hass)||void 0===e?void 0:e.states["zone.home"]:null,d=this._locationSource!==(null!==(t=this._deviceConfig.location_source)&&void 0!==t?t:"manual"),p=this._hasChanges("location",["latitude","longitude"]),h=d||p,u=String(l&&c?null!==(a=c.attributes.latitude)&&void 0!==a?a:0:null!==(i=null!==(n=this._editValues.latitude)&&void 0!==n?n:this._deviceConfig.latitude)&&void 0!==i?i:0),m=String(l&&c?null!==(o=c.attributes.longitude)&&void 0!==o?o:0:null!==(r=null!==(s=this._editValues.longitude)&&void 0!==s?s:this._deviceConfig.longitude)&&void 0!==r?r:0);return ad(Vs||(Vs=pc`
      <div class="section-row">
        <div class="form-group-inline">
          <label class="form-label">Latitude</label>
          <input
            type="number"
            class="form-input"
            step="0.000001"
            min="-90"
            max="90"
            .value=${0}
            ?disabled=${0}
            @input=${0}
          />
        </div>
        <div class="form-group-inline">
          <label class="form-label">Longitude</label>
          <input
            type="number"
            class="form-input"
            step="0.000001"
            min="-180"
            max="180"
            .value=${0}
            ?disabled=${0}
            @input=${0}
          />
        </div>
      </div>
      ${0}

      <div class="section-row">
        <div class="form-group-inline">
          <label class="form-label">Location Source</label>
          <select
            class="form-select"
            .value=${0}
            @change=${0}>
            <option value="manual">Manual (coordinates above)</option>
            <option value="gps">GPS (device hardware)</option>
            <option value="ha_location">Home Assistant Zone</option>
          </select>
          <div style="font-size: 11px; color: var(--secondary-text-color); margin-top: 4px;">
            How the device determines its coordinates
          </div>
        </div>
      </div>

      <button
        class="apply-button"
        style="width: 100%; margin-top: 12px;"
        ?disabled=${0}
        @click=${0}>
        ${0}
      </button>
    `),u,l,e=>{this._editValues.latitude=Number(e.target.value)},m,l,e=>{this._editValues.longitude=Number(e.target.value)},l?ad(Ks||(Ks=pc`
        <div style="font-size: 11px; color: var(--secondary-text-color); margin-top: -8px; margin-bottom: 8px;">
          Using coordinates from Home Assistant zone.home
        </div>
      `)):"",this._locationSource,e=>{this._locationSource=e.target.value},!h||this._saving,this._applyLocation,this._saving?"Applying...":"Apply Location Settings")}_renderIdentityManagement(){return ad(Us||(Us=pc`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div class="danger-zone" style="margin-top: 0;">
          <div class="danger-zone-title">Regenerate Identity</div>
          <div style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 8px;">
            Creates a new key pair. All contacts will need to re-add you. This will change all entity IDs — automations, scripts, and dashboards using current entity IDs will need to be updated.
          </div>
          <button class="danger-button" @click=${0}>
            Regenerate Identity
          </button>
        </div>
        <div class="danger-zone" style="margin-top: 0;">
          <div class="danger-zone-title">Import Private Key</div>
          <div style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 8px;">
            Importing a key changes the device identity. This will change all entity IDs — automations, scripts, and dashboards using current entity IDs will need to be updated.
          </div>
          <div style="display: flex; gap: 8px;">
            <input
              type="text"
              class="form-input"
              style="flex: 1; font-family: monospace;"
              placeholder="Hex private key"
              .value=${0}
              @input=${0}
            />
            <button
              class="danger-button"
              ?disabled=${0}
              @click=${0}>
              Import
            </button>
          </div>
        </div>
      </div>
    `),this._showRegenIdentityConfirm,this._importKeyValue,e=>{this._importKeyValue=e.target.value},!this._importKeyValue.trim(),this._handleImportKeyConfirm)}_hasChanges(e,t){return!!this._deviceConfig&&t.some(e=>void 0!==this._editValues[e]&&this._editValues[e]!==this._deviceConfig[e])}async _handleApply(e){var t;if(!this.hass||!this._deviceConfig)return;const a=this._deviceConfigGeneration,i=null===(t=this.config)||void 0===t?void 0:t.entry_id,n=()=>{var e;return a===this._deviceConfigGeneration&&i===(null===(e=this.config)||void 0===e?void 0:e.entry_id)};let o=[];switch(e){case"device-name":o=["name"];break;case"radio-settings":o=["tx_power","frequency","bandwidth","spreading_factor","coding_rate","path_hash_mode"]}const r={};for(const e of o)void 0!==this._editValues[e]&&(r[e]=this._editValues[e]);this._saving=!0;try{const e=await Bd(this.hass,r,i);if(!n())return;if(e.success){this._deviceConfig&&(this._deviceConfig={...this._deviceConfig,...r});for(const e of o)delete this._editValues[e];this._editValues={...this._editValues},e.rename?this._renameSuccess=e.rename:this._showStatusMessage(`Saved: ${o.join(", ")}`,"success")}else this._showStatusMessage("Save failed","error")}catch(e){if(!n())return;this._showStatusMessage(`Error: ${String(e)}`,"error")}finally{n()&&(this._saving=!1)}}_renderShareModal(){const e=this._deviceConfig;if(!e)return od;const t=Ep(e.pubkey,1,e.name),a=`meshcore://contact/add?name=${encodeURIComponent(e.name)}&public_key=${e.pubkey.toLowerCase()}&type=1`,i=(e,t,a)=>ad(Ws||(Ws=pc`
      <div style="margin-bottom:14px">
        <div style="font-size:13px;font-weight:600;margin-bottom:4px">${0}</div>
        <div style="display:flex;gap:6px">
          <input class="form-input" style="flex:1;font-family:monospace;font-size:12px" readonly .value=${0}
            @focus=${0} />
          <button class="action-btn" @click=${0}>Copy</button>
        </div>
        <div style="font-size:12px;color:var(--secondary-text-color);margin-top:4px">${0}</div>
      </div>`),e,t,e=>e.target.select(),()=>this._copyToClipboard(t),a);return ad(Gs||(Gs=pc`
      <div class="modal-overlay" @click=${0}>
        <div class="modal-card" role="dialog" aria-modal="true" aria-label="Share my contact"
             style="max-width:480px" @click=${0}>
          <div class="modal-header">
            <span class="modal-title">Share my contact</span>
            <button class="modal-close" aria-label="Close" @click=${0}>&times;</button>
          </div>
          <div class="modal-body" style="padding:16px 20px">
            ${0}
            ${0}
            <div style="font-size:12px;color:var(--secondary-text-color)">Sending a Flood advert also lets nearby radios discover you.</div>
          </div>
        </div>
      </div>
    `),()=>{this._shareOpen=!1},e=>e.stopPropagation(),()=>{this._shareOpen=!1},i("Contact code",t,"Paste into a MeshCore chat on its own and others can tap it to add you."),i("Link",a,"Opens in the MeshCore apps to add you as a contact."))}async _copyToClipboard(e){try{await navigator.clipboard.writeText(e),this._showStatusMessage("Copied to clipboard","success")}catch(e){this._showStatusMessage("Failed to copy","error")}}_showStatusMessage(e,t){this._statusMessage={text:e,type:t},null!==this._statusMessageTimeout&&clearTimeout(this._statusMessageTimeout),this._statusMessageTimeout=window.setTimeout(()=>{this._statusMessage=null,this._statusMessageTimeout=null},5e3)}_handleNameSave(){var e;const t=this._editValues.name,a=null===(e=this._deviceConfig)||void 0===e?void 0:e.name;if(void 0===t||t===a)return;const i=e=>(e||"").toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,""),n=i(null!=a?a:""),o=i(String(t));this._confirmAction={title:"Rename Device",message:`Renaming the device will rename all entity IDs ending in _${n} to _${o}. Any automations, scripts, or dashboards referencing entity IDs by the old name will need updating. A repair issue will list every renamed entity. Continue?`,onConfirm:async()=>{await this._handleApply("device-name")}},this._confirmDialogOpen=!0}_handleRebootFromModal(){this._settingsModalOpen=!1,this._confirmAction={title:"Reboot Device",message:"Are you sure you want to reboot the device? The device will be temporarily unavailable.",onConfirm:()=>this._executeDeviceCommand("reboot")},this._confirmDialogOpen=!0}async _executeDeviceCommand(e){if(this.hass)try{var t;const a=await Nd(this.hass,e,void 0,null===(t=this.config)||void 0===t?void 0:t.entry_id);a.success?this._showStatusMessage(`Device ${e} initiated`,"success"):this._showStatusMessage(`Command failed: ${a.response}`,"error")}catch(e){this._showStatusMessage(`Error: ${String(e)}`,"error")}}async _applyLocation(){if(this.hass&&this._deviceConfig){this._saving=!0;try{var e;const a=["latitude","longitude"],i={};if("ha_location"===this._locationSource){const e=this.hass.states["zone.home"];if(!e||null==e.attributes.latitude||null==e.attributes.longitude)return void this._showStatusMessage("Could not read zone.home coordinates from Home Assistant","error");i.latitude=e.attributes.latitude,i.longitude=e.attributes.longitude}else for(const e of a)void 0!==this._editValues[e]&&(i[e]=this._editValues[e]);if(Object.keys(i).length>0){var t;if(!(await Bd(this.hass,i,null===(t=this.config)||void 0===t?void 0:t.entry_id)).success)return void this._showStatusMessage("Failed to save coordinates","error");this._deviceConfig&&(this._deviceConfig={...this._deviceConfig,...i});for(const e of a)delete this._editValues[e];this._editValues={...this._editValues}}if(!(await async function(e,t,a){try{const i={type:"meshcore_chat/set_location_source",source:t};return a&&(i.entry_id=a),await e.callWS(i)}catch(e){return{success:!1}}}(this.hass,this._locationSource,null===(e=this.config)||void 0===e?void 0:e.entry_id)).success)return void this._showStatusMessage("Failed to update location source","error");await this._loadDeviceConfig(),this._showStatusMessage("Location settings applied","success")}catch(e){this._showStatusMessage(`Error: ${String(e)}`,"error")}finally{this._saving=!1}}}_showRegenIdentityConfirm(){this._confirmAction={title:"Regenerate Identity",message:"This will create a new cryptographic identity, reboot the device, and migrate all entity IDs to the new key prefix. Existing automations referencing entity IDs by the old prefix will need updating. All contacts must re-add this device. This cannot be undone.",requireTyped:"REGENERATE",onConfirm:async()=>{var e;this.hass&&(this._closeKeyManagementModal(),this._startIdentityFlow("regenerate",{type:"meshcore_chat/regenerate_identity",payload:null!==(e=this.config)&&void 0!==e&&e.entry_id?{entry_id:this.config.entry_id}:{}}))}},this._confirmDialogOpen=!0}_handleImportKeyConfirm(){const e=this._importKeyValue.trim().replace(/\s+/g,"");e&&(64===e.length||128===e.length?/^[0-9a-fA-F]+$/.test(e)?(this._confirmAction={title:"Import Private Key",message:"Importing a private key will replace the device identity, reboot the device, and migrate all entity IDs to the new key prefix. Existing automations referencing entity IDs by the old prefix will need updating. All contacts must re-add this device.",requireTyped:"IMPORT",onConfirm:()=>this._importIdentityKey()},this._confirmDialogOpen=!0):this._showStatusMessage("Private key must be hex (0-9, a-f)","error"):this._showStatusMessage("Private key must be 64 or 128 hex characters","error"))}async _importIdentityKey(){var e;if(!this.hass||!this._importKeyValue.trim())return;const t=this._importKeyValue.trim().replace(/\s+/g,"");this._closeKeyManagementModal(),this._importKeyValue="";const a={private_key:t};null!==(e=this.config)&&void 0!==e&&e.entry_id&&(a.entry_id=this.config.entry_id),this._startIdentityFlow("import",{type:"meshcore_chat/import_identity",payload:a})}_startIdentityFlow(e,t){if(!this.hass)return;this._identityFlowUnsubscribe&&(this._identityFlowUnsubscribe(),this._identityFlowUnsubscribe=null),this._identityFlowState={kind:"progress",flow:e,currentStep:"generating",completedSteps:new Set};const{unsubscribe:a}=function(e,t,a,i){let n,o=null;const r=new Promise(e=>{n=e});let s={success:!1,code:"unknown",message:"Identity flow terminated without a result event."};return e.connection.subscribeMessage(e=>{if("done"===e.step&&e.success&&e.old_pubkey&&e.new_pubkey){const t={success:!0,old_pubkey:e.old_pubkey,new_pubkey:e.new_pubkey,warning:e.warning};s=t,i({type:"result",data:t})}else"done"!==e.step&&i({type:"progress",step:e.step})},{type:t,...a}).then(e=>{o=e,n(s)}).catch(e=>{const t={success:!1,code:e.code||"error",message:e.message||"Identity flow failed."};i({type:"error",data:t}),n(t)}),{unsubscribe:()=>{o&&o()},done:r}}(this.hass,t.type,t.payload,t=>{if("progress"===t.type){if("progress"!==this._identityFlowState.kind)return;const e=new Set(this._identityFlowState.completedSteps);e.add(this._identityFlowState.currentStep),this._identityFlowState={...this._identityFlowState,currentStep:t.step,completedSteps:e}}else"result"===t.type?this._identityFlowState={kind:"success",flow:e,oldPubkey:t.data.old_pubkey,newPubkey:t.data.new_pubkey,warning:t.data.warning}:"error"===t.type&&(this._identityFlowState={kind:"failure",flow:e,code:t.data.code,message:t.data.message})});this._identityFlowUnsubscribe=a}_closeIdentityFlowModal(){this._identityFlowUnsubscribe&&(this._identityFlowUnsubscribe(),this._identityFlowUnsubscribe=null);const e="success"===this._identityFlowState.kind;this._identityFlowState={kind:"closed"},e&&this._loadDeviceConfig()}_renderIdentityFlowModal(){const e=this._identityFlowState;if("closed"===e.kind)return od;const t="regenerate"===e.flow?"Regenerate Identity":"Import Private Key",a="regenerate"===e.flow?"Regenerating Identity":"Importing Identity",i="regenerate"===e.flow?"Identity Regenerated":"Identity Imported",n="regenerate"===e.flow?"Identity Regeneration Failed":"Identity Import Failed";let o,r;"progress"===e.kind?(o=ad(Xs||(Xs=pc`
        <div style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px;">
          This typically takes 5–10 seconds. Please don't close this dialog.
        </div>
        <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px;">
          ${0}
        </ul>
      `),wu.map(t=>{const a=e.completedSteps.has(t.step),i=e.currentStep===t.step;let n="○",o="var(--secondary-text-color)";return a?(n="✓",o="var(--success-color, #28a745)"):i&&(n="⏳",o="var(--primary-color)"),ad(Ys||(Ys=pc`
              <li style="display: flex; align-items: center; gap: 8px; color: ${0}; font-size: 14px;">
                <span style="font-family: monospace; width: 1em;">${0}</span>
                <span>${0}</span>
              </li>
            `),o,n,t.label)})),r=od):"success"===e.kind?(o=ad(Qs||(Qs=pc`
        <div style="font-size: 32px; text-align: center; margin-bottom: 8px;">✅</div>
        <div style="font-size: 14px; margin-bottom: 16px;">
          The device's identity has been replaced and verified.
        </div>
        <div style="font-family: monospace; font-size: 12px; background: var(--card-background-color, #f5f5f5); padding: 8px 12px; border-radius: 4px; margin-bottom: 12px;">
          <div><span style="color: var(--secondary-text-color);">Old key:</span> ${0}…</div>
          <div><span style="color: var(--secondary-text-color);">New key:</span> ${0}… <span style="color: var(--success-color, #28a745); font-size: 11px;">(verified after reload)</span></div>
        </div>
        ${0}
      `),e.oldPubkey.slice(0,12),e.newPubkey.slice(0,12),e.warning?ad(Js||(Js=pc`
          <div style="font-size: 13px; color: var(--secondary-text-color); margin-top: 12px; padding: 8px 12px; border-left: 3px solid var(--warning-color, #f0ad4e); background: var(--warning-color-bg, rgba(240, 173, 78, 0.08));">
            <strong>Follow-up:</strong>
            <ul style="margin: 4px 0 0 16px; padding: 0;">
              <li>${0}</li>
              <li>Check Settings → Repairs for the entity-ID migration list.</li>
            </ul>
          </div>
        `),e.warning):od),r=ad(Zs||(Zs=pc`
        <button class="modal-action" @click=${0}>Close</button>
      `),this._closeIdentityFlowModal)):(o=ad(el||(el=pc`
        <div style="font-size: 32px; text-align: center; margin-bottom: 8px;">❌</div>
        <div style="font-size: 14px; margin-bottom: 12px;">
          ${0}
        </div>
        <div style="font-family: monospace; font-size: 12px; background: var(--card-background-color, #f5f5f5); padding: 8px 12px; border-radius: 4px;">
          <div><span style="color: var(--secondary-text-color);">Error code:</span> ${0}</div>
          <div style="margin-top: 4px; word-break: break-word;"><span style="color: var(--secondary-text-color);">Message:</span> ${0}</div>
        </div>
      `),"regenerate"===e.flow?"The device firmware rejected the new key. Your device identity is unchanged.":"The import did not take effect. Your device identity may be unchanged.",e.code,e.message),r=ad(tl||(tl=pc`
        <button class="modal-action" @click=${0}>Close</button>
      `),this._closeIdentityFlowModal));const s="progress"===e.kind?a:"success"===e.kind?i:n;return ad(al||(al=pc`
      <div class="modal-overlay">
        <div class="modal-card" data-a11y="identity-flow"
             role="dialog" aria-modal="true" aria-label=${0}
             style="max-width: 480px;"
             @click=${0}>
          <div class="modal-header">
            <span class="modal-title">${0}</span>
            ${0}
          </div>
          <div class="modal-body" style="padding: 20px;">
            ${0}
            ${0}
          </div>
        </div>
      </div>
    `),t,e=>e.stopPropagation(),s,"progress"===e.kind?od:ad(il||(il=pc`
              <button class="modal-close" aria-label="Close" @click=${0}>&times;</button>
            `),this._closeIdentityFlowModal),o,r?ad(nl||(nl=pc`<div style="margin-top: 20px; display: flex; justify-content: flex-end;">${0}</div>`),r):od)}_closeRenameSuccessModal(){this._renameSuccess=null,this._loadDeviceConfig(),this.dispatchEvent(new CustomEvent("device-renamed",{bubbles:!0,composed:!0}))}_renderRenameSuccessModal(){const e=this._renameSuccess;return e?ad(ol||(ol=pc`
      <div class="dialog-overlay">
        <div class="dialog"
             role="dialog" aria-modal="true" aria-label="Device renamed"
             data-a11y="rename-success"
             @click=${0}>
          <div class="dialog-header">
            <div class="dialog-header-title">Device renamed</div>
          </div>
          <div class="dialog-body">
            <p style="margin: 0 0 12px 0;">
              The MeshCore device was renamed from
              <code>${0}</code> to <code>${0}</code>.
            </p>
            <p style="margin: 0 0 12px 0;">
              ${0}
              ${0}
              automatically migrated from the
              <code>_${0}</code> suffix to
              <code>_${0}</code>.
            </p>
            <p style="margin: 0 0 12px 0;">
              If you have automations, scripts, or dashboards
              referencing the old entity IDs, you will need to
              update them manually to use the new suffix.
            </p>
            <p style="margin: 0; color: var(--secondary-text-color); font-size: 13px;">
              The full list of renamed entity IDs is available in
              Settings → Repairs.
            </p>
          </div>
          <div class="dialog-footer">
            <button class="dialog-button primary"
                    @click=${0}>Close</button>
          </div>
        </div>
      </div>
    `),e=>e.stopPropagation(),e.old_name,e.new_name,e.count,1===e.count?"entity ID was":"entity IDs were",e.old_suffix,e.new_suffix,this._closeRenameSuccessModal):od}async _onConfirmAction(){if(this._confirmDialogOpen=!1,this._confirmAction)try{await this._confirmAction.onConfirm()}catch(e){this._error=`Error: ${String(e)}`}this._confirmAction=null}_onConfirmCancel(){this._confirmDialogOpen=!1,this._confirmAction=null}_onCommandDialogClose(){this._commandDialogOpen=!1}async _loadEntityRegistry(){if(this.hass&&!this._entityRegistryLoaded){this._entityRegistryLoaded=!0;try{const{meshcoreDeviceMap:e,deviceEntities:t}=await lu(this.hass);this._meshcoreDeviceMap=e,this._deviceEntities=t}catch(e){console.error("Failed to load entity registry:",e)}}}_getCompanionEntities(){var e;if(!this.hass||!this.selectedDevice)return[];const t=this._getCompanionDeviceKey(),a=new Set(this._hiddenSensors[t]||[]),i=this.selectedDevice.entry_id,n=this._meshcoreDeviceMap[i];if(n&&this._deviceEntities[n])return this._deviceEntities[n].filter(e=>!a.has(e.entity_id));const o=(null===(e=this.selectedDevice.pubkey_prefix)||void 0===e||null===(e=e.substring(0,6))||void 0===e?void 0:e.toLowerCase())||"";if(!o)return[];const r=[];for(const[e,t]of Object.entries(this._deviceEntities))if(!Object.entries(this._meshcoreDeviceMap).some(([t,a])=>a===e&&(t.includes("_repeater_")||t.includes("_client_"))))for(const e of t)e.entity_id.toLowerCase().includes(o)&&!a.has(e.entity_id)&&r.push(e);return r.sort((e,t)=>e.sortOrder-t.sortOrder)}_getCompanionDeviceKey(){var e;return(null===(e=this.selectedDevice)||void 0===e?void 0:e.entry_id)||"companion"}_companionDescriptor(e){return{type:"companion",name:e.name,pubkey_prefix:e.pubkey_prefix,connected:e.connected,firmware:e.firmware,entry_id:e.entry_id}}_loadHiddenSensors(){try{const e=localStorage.getItem("meshcore-hidden-sensors");e&&(this._hiddenSensors=JSON.parse(e))}catch(e){this._hiddenSensors={}}}_saveHiddenSensors(){try{localStorage.setItem("meshcore-hidden-sensors",JSON.stringify(this._hiddenSensors))}catch(e){}}_hideSensor(e,t){const a=this._hiddenSensors[e]||[];a.includes(t)||(this._hiddenSensors={...this._hiddenSensors,[e]:[...a,t]},this._saveHiddenSensors())}_unhideSensor(e,t){const a=this._hiddenSensors[e]||[];if(this._hiddenSensors={...this._hiddenSensors,[e]:a.filter(e=>e!==t)},0===this._hiddenSensors[e].length){const t={...this._hiddenSensors};delete t[e],this._hiddenSensors=t}this._saveHiddenSensors()}_unhideAllSensors(e){const t={...this._hiddenSensors};delete t[e],this._hiddenSensors=t,this._saveHiddenSensors()}async _executeCompanionAction(e,t,a){if(!this.hass)return;const i=a||e;try{var n;const a=await Nd(this.hass,e,t,null===(n=this.config)||void 0===n?void 0:n.entry_id);this._showStatusMessage(`Companion: ${i} → ${a.response||"OK"}`,"success")}catch(e){this._showStatusMessage(`Companion: ${i} failed — ${String(e)}`,"error")}}_onTileContextMenu(e,t){const{entityId:a,label:i}=e.detail;this._contextMenu={entityId:a,label:i,deviceKey:t},this._overlayPointerStarted=!1}_onOverlayPointerDown(){this._overlayPointerStarted=!0}_closeContextMenu(){this._overlayPointerStarted&&(this._overlayPointerStarted=!1,this._contextMenu=null)}_hideSensorFromContext(){this._contextMenu&&(this._hideSensor(this._contextMenu.deviceKey,this._contextMenu.entityId),this._showStatusMessage(`Hidden: ${this._contextMenu.label}`,"success"),this._contextMenu=null)}_closeSettingsModal(){this._settingsModalOpen=!1}_openHiddenSensorsList(){this._hiddenSensorsModalKey=this._getCompanionDeviceKey(),this._settingsModalOpen=!1}_closeHiddenSensorsModal(){this._hiddenSensorsModalKey=null}_openCommandDialogForCompanion(){this._commandDialogOpen=!0,this._settingsModalOpen=!1}_openKeyManagementModal(){this._keyManagementModalOpen=!0,this._settingsModalOpen=!1}_closeKeyManagementModal(){this._keyManagementModalOpen=!1}};ku.styles=[Md,bc(rl||(rl=pc`
      :host {
        display: block;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      .settings-page {
        display: flex;
        flex-direction: column;
        height: 100%;
        background: var(--primary-background-color, #fafafa);
      }

      .settings-container {
        flex: 1;
        overflow-y: auto;
        overflow-x: hidden;
      }

      .settings-container::-webkit-scrollbar {
        width: 6px;
      }

      .settings-container::-webkit-scrollbar-track {
        background: transparent;
      }

      .settings-container::-webkit-scrollbar-thumb {
        background: var(--scrollbar-thumb, var(--scrollbar-thumb-color, #c1c1c1));
        border-radius: 3px;
      }

      .message-setting {
        display: flex;
        gap: 10px;
        align-items: flex-start;
        cursor: pointer;
        padding: 4px 0;
      }
      .message-setting input {
        margin-top: 3px;
        flex-shrink: 0;
      }
      .message-setting-title {
        display: block;
        font-size: 14px;
        color: var(--primary-text-color);
      }
      .message-setting-help {
        display: block;
        font-size: 12px;
        color: var(--secondary-text-color);
        margin-top: 2px;
        line-height: 1.4;
      }

      .section-row {
        display: flex;
        gap: 12px;
        margin-bottom: 16px;
      }

      .section-row.full {
        flex: 1;
      }

      .form-group-inline {
        flex: 1;
      }

      .danger-zone {
        margin-top: 16px;
        padding: 12px;
        border: 2px solid var(--error-color, #db4437);
        border-radius: 8px;
        background: rgba(219, 68, 55, 0.05);
      }

      .danger-zone-title {
        font-size: 13px;
        font-weight: 600;
        color: var(--error-color, #db4437);
        margin-bottom: 12px;
      }

      .danger-zone-buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      .info-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 0;
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
      }

      .info-row:last-child {
        border-bottom: none;
      }

      .info-label {
        font-size: 13px;
        color: var(--secondary-text-color);
        font-weight: 500;
      }

      .info-value {
        font-size: 13px;
        color: var(--primary-text-color);
        font-family: monospace;
        font-weight: 500;
        word-break: break-all;
      }

      .settings-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
        margin-bottom: 16px;
      }

      .settings-grid > .device-section {
        margin-bottom: 0;
      }

      @media (max-width: 768px) {
        .settings-grid {
          grid-template-columns: 1fr;
        }
      }

      .settings-container > * {
        max-width: 1100px;
        margin-left: auto;
        margin-right: auto;
      }

      details.fold > summary {
        cursor: pointer;
        list-style: none;
        margin-bottom: 0;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      details.fold > summary::-webkit-details-marker { display: none; }

      details.fold > summary::before {
        content: '▸';
        color: var(--secondary-text-color);
        transition: transform 0.15s;
      }

      details.fold[open] > summary::before { transform: rotate(90deg); }

      details.fold[open] > summary { margin-bottom: 16px; }

      details.danger-fold > summary { color: var(--error-color, #db4437); }

      .fold-warning {
        background: rgba(255, 152, 0, 0.12);
        color: var(--warning-color, #ff9800);
        border-radius: 8px;
        padding: 8px 12px;
        font-size: 13px;
        margin-bottom: 16px;
      }

      .danger-stack {
        display: grid;
        gap: 12px;
      }

      .card-title {
        font-size: 15px;
        font-weight: 600;
        color: var(--primary-text-color);
        margin-bottom: 16px;
      }

      /* ─── Companion Device Card Styles ─── */

      .device-section {
        background: var(--card-background-color, #fff);
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 12px;
        padding: 20px;
        margin-bottom: 16px;
      }

      .companion-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 16px;
        gap: 8px;
        flex-wrap: wrap;
      }

      .section-title {
        display: flex;
        align-items: center;
        gap: 8px;
        min-width: 0;
        flex: 1 1 auto;
      }

      .section-title > div:last-child {
        min-width: 0;
        flex: 1 1 auto;
      }

      .section-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: 8px;
        flex-shrink: 0;
      }

      .section-icon.companion {
        background: rgba(3, 169, 244, 0.12);
        color: #0288d1;
      }

      .device-name {
        font-size: 16px;
        font-weight: 600;
        color: var(--primary-text-color);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .device-meta {
        font-size: 12px;
        color: var(--secondary-text-color);
        margin-top: 2px;
      }

      .device-meta span {
        margin-right: 12px;
      }

      .status-badge {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 4px 10px;
        border-radius: 12px;
        font-size: 11px;
        font-weight: 600;
        flex-shrink: 0;
        white-space: nowrap;
        max-width: 100%;
      }

      .status-badge.online {
        background: rgba(76, 175, 80, 0.12);
        color: #2e7d32;
      }

      .status-badge.offline {
        background: rgba(114, 114, 114, 0.12);
        color: #616161;
      }

      .status-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
      }

      .status-dot.online {
        background: #4caf50;
      }

      .status-dot.offline {
        background: #9e9e9e;
      }

      .subsection-label {
        font-size: 12px;
        font-weight: 600;
        color: var(--secondary-text-color);
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 8px;
        margin-top: 16px;
      }

      .sensor-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
        gap: 8px;
      }

      .actions-row {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: 16px;
      }

      .action-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        padding: 6px 12px;
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 6px;
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color);
        font-size: 12px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s;
        white-space: nowrap;
      }

      .action-btn:hover:not(:disabled) {
        background: var(--secondary-background-color, #f5f5f5);
        border-color: var(--primary-color, #03a9f4);
      }

      .action-btn:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }

      .settings-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        border: none;
        border-radius: 6px;
        background: transparent;
        color: var(--secondary-text-color);
        cursor: pointer;
        transition: all 0.2s;
        margin-left: 8px;
        flex-shrink: 0;
      }

      .settings-btn:hover {
        background: var(--secondary-background-color, #f0f0f0);
        color: var(--primary-text-color);
      }

      /* Modal overlay */
      .modal-overlay {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 999;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.15s ease-out;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      .modal-card {
        background: var(--card-background-color, #fff);
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        min-width: 260px;
        max-width: 400px;
        max-height: 80vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }

      .modal-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 20px;
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
      }

      .modal-title {
        font-size: 16px;
        font-weight: 600;
        color: var(--primary-text-color);
      }

      .modal-close {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        border: none;
        border-radius: 6px;
        background: transparent;
        color: var(--secondary-text-color);
        cursor: pointer;
        font-size: 18px;
      }

      .modal-close:hover {
        background: var(--secondary-background-color, #f0f0f0);
      }

      .modal-body {
        padding: 8px 0;
        overflow-y: auto;
      }

      .modal-action {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 12px 20px;
        cursor: pointer;
        transition: background 0.15s;
        color: var(--primary-text-color);
        font-size: 14px;
        border: none;
        background: none;
        width: 100%;
        text-align: left;
      }

      .modal-action:hover {
        background: var(--secondary-background-color, #f5f5f5);
      }

      .modal-action.danger {
        color: var(--error-color, #db4437);
      }

      .modal-action-icon {
        display: flex;
        align-items: center;
        color: var(--secondary-text-color);
        flex-shrink: 0;
      }

      .modal-action.danger .modal-action-icon {
        color: var(--error-color, #db4437);
      }

      .modal-action:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }

      .modal-action:disabled:hover {
        background: none;
      }

      .modal-divider {
        height: 1px;
        background: var(--divider-color, #e0e0e0);
        margin: 4px 0;
      }

      /* Hidden sensors list */
      .hidden-sensor-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
      }

      .hidden-sensor-item:last-child {
        border-bottom: none;
      }

      .hidden-sensor-name {
        font-size: 13px;
        color: var(--primary-text-color);
      }

      .hidden-sensor-id {
        font-size: 11px;
        color: var(--secondary-text-color);
        margin-top: 2px;
      }

      .unhide-btn {
        padding: 4px 10px;
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 4px;
        background: var(--card-background-color, #fff);
        color: var(--primary-color, #03a9f4);
        font-size: 12px;
        font-weight: 500;
        cursor: pointer;
        white-space: nowrap;
      }

      .unhide-btn:hover {
        background: var(--secondary-background-color, #f5f5f5);
      }

      .modal-footer {
        padding: 12px 20px;
        border-top: 1px solid var(--divider-color, #e0e0e0);
        display: flex;
        justify-content: flex-end;
      }

      .empty-hidden {
        padding: 20px;
        text-align: center;
        color: var(--secondary-text-color);
        font-size: 13px;
      }

      /* Status toast */
      .status-toast {
        position: fixed;
        bottom: 20px;
        left: 20px;
        right: 20px;
        padding: 12px 16px;
        border-radius: 8px;
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color);
        font-size: 13px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
      }

      .status-toast.success {
        border-left: 4px solid #4caf50;
      }

      .status-toast.error {
        border-left: 4px solid var(--error-color, #db4437);
        color: var(--error-color, #db4437);
      }

      @keyframes slideIn {
        from {
          transform: translateY(100%);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }
    `))],hc([Sd({type:Object})],ku.prototype,"hass",void 0),hc([Sd({type:Object})],ku.prototype,"config",void 0),hc([Sd({type:Boolean})],ku.prototype,"narrow",void 0),hc([Sd({type:Object})],ku.prototype,"selectedDevice",void 0),hc([Ad()],ku.prototype,"_deviceConfig",void 0),hc([Ad()],ku.prototype,"_loading",void 0),hc([Ad()],ku.prototype,"_error",void 0),hc([Ad()],ku.prototype,"_editValues",void 0),hc([Ad()],ku.prototype,"_saving",void 0),hc([Ad()],ku.prototype,"_commandDialogOpen",void 0),hc([Ad()],ku.prototype,"_confirmAction",void 0),hc([Ad()],ku.prototype,"_confirmDialogOpen",void 0),hc([Ad()],ku.prototype,"_locationSource",void 0),hc([Ad()],ku.prototype,"_importKeyValue",void 0),hc([Ad()],ku.prototype,"_deviceEntities",void 0),hc([Ad()],ku.prototype,"_meshcoreDeviceMap",void 0),hc([Ad()],ku.prototype,"_entityRegistryLoaded",void 0),hc([Ad()],ku.prototype,"_hiddenSensors",void 0),hc([Ad()],ku.prototype,"_contextMenu",void 0),hc([Ad()],ku.prototype,"_settingsModalOpen",void 0),hc([Ad()],ku.prototype,"_keyManagementModalOpen",void 0),hc([Ad()],ku.prototype,"_identityFlowState",void 0),hc([Ad()],ku.prototype,"_renameSuccess",void 0),hc([Ad()],ku.prototype,"_hiddenSensorsModalKey",void 0),hc([Ad()],ku.prototype,"_statusMessage",void 0),hc([Ad()],ku.prototype,"_shareOpen",void 0),ku=hc([kd("meshcore-settings-page")],ku);let $u=class extends xd{constructor(){super(...arguments),this._trackable=Ih(),this._ts=Gd(),this._clock=Zd(),this._date=ep(),this._heard=op()}render(){const e=new Date;return ad(sl||(sl=pc`
      <div class="wrap">
        <div class="card">
          <h2>Messages</h2>
          <label class="row">
            <span class="text">
              <span class="title">Keep channel messages trackable</span>
              <span class="help">Limits channel messages to 155 bytes including your radio's name, so repeats of every message you send can be detected. Off allows the full 160 bytes, but messages over 155 always show as Unheard.</span>
            </span>
            <input type="checkbox" .checked=${0}
              @change=${0} />
          </label>
          <label class="row">
            <span class="text">
              <span class="title">Message times</span>
              <span class="help">Under each message. Clock time adds the date for older days.</span>
            </span>
            <select aria-label="Message times" .value=${0}
              @change=${0}>
              <option value="relative">Time since (5m)</option>
              <option value="time">Clock time</option>
              <option value="datetime">Date and time</option>
            </select>
          </label>
        </div>

        <div class="card">
          <h2>Date and time</h2>
          <label class="row">
            <span class="text">
              <span class="title">Clock</span>
              <span class="help">12 or 24 hour, or your device's own setting.</span>
            </span>
            <select aria-label="Clock" .value=${0}
              @change=${0}>
              <option value="system">System default (${0})</option>
              <option value="12">12 hour (${0})</option>
              <option value="24">24 hour (${0})</option>
            </select>
          </label>
          <label class="row">
            <span class="text">
              <span class="title">Date</span>
              <span class="help">How dates are written.</span>
            </span>
            <select aria-label="Date" .value=${0}
              @change=${0}>
              <option value="system">System default (${0})</option>
              <option value="d-mon">${0}</option>
              <option value="dmy">${0} (day/month)</option>
              <option value="mdy">${0} (month/day)</option>
              <option value="iso">${0} (ISO)</option>
            </select>
          </label>
        </div>

        <div class="card">
          <h2>Map</h2>
          <label class="row">
            <span class="text">
              <span class="title">Show nodes heard within</span>
              <span class="help">Hides nodes that haven't advertised for a while. You can also change this from the Map toolbar.</span>
            </span>
            <select aria-label="Show nodes heard within" .value=${0}
              @change=${0}>
              <option value="0">Any time</option>
              <option value="1">24 hours</option>
              <option value="7">7 days</option>
              <option value="30">30 days</option>
            </select>
          </label>
        </div>

        <p class="foot">These preferences are saved in this browser.</p>
      </div>
    `),this._trackable,e=>{this._trackable=e.target.checked,function(e){try{localStorage.setItem(zh,e?"on":"off")}catch(e){}window.dispatchEvent(new Event(Oh))}(this._trackable)},this._ts,e=>{this._ts=e.target.value,function(e){try{localStorage.setItem(Ud,e)}catch(e){}window.dispatchEvent(new Event(Wd))}(this._ts)},this._clock,e=>{this._clock=e.target.value,(e=>{Jd(Xd,e)})(this._clock)},ap(e,!1,"system"),ap(e,!1,"12"),ap(e,!1,"24"),this._date,e=>{this._date=e.target.value,(e=>{Jd(Yd,e)})(this._date)},ip(e,!0,"system"),ip(e,!0,"d-mon"),ip(e,!0,"dmy"),ip(e,!0,"mdy"),ip(e,!0,"iso"),this._heard,e=>{this._heard=e.target.value,rp(this._heard)})}};$u.styles=bc(ll||(ll=pc`
    :host {
      display: block;
      height: 100%;
      overflow-y: auto;
      background: var(--primary-background-color);
    }
    .wrap {
      max-width: 760px;
      margin: 0 auto;
      padding: 16px;
    }
    .card {
      background: var(--card-background-color);
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 12px;
      padding: 16px;
      margin-bottom: 16px;
    }
    h2 {
      font-size: 15px;
      font-weight: 600;
      margin: 0 0 8px;
      color: var(--primary-text-color);
    }
    .row {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 0;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      cursor: pointer;
    }
    .row:last-child {
      border-bottom: none;
    }
    .text {
      flex: 1;
      min-width: 0;
    }
    .title {
      display: block;
      font-size: 14px;
      color: var(--primary-text-color);
    }
    .help {
      display: block;
      font-size: 12px;
      color: var(--secondary-text-color);
      margin-top: 2px;
      line-height: 1.4;
    }
    select {
      padding: 6px 8px;
      border-radius: 8px;
      border: 1px solid var(--divider-color, #555);
      background: var(--card-background-color);
      color: var(--primary-text-color);
      font: inherit;
      max-width: 55%;
    }
    input[type='checkbox'] {
      width: 18px;
      height: 18px;
      flex-shrink: 0;
    }
    .foot {
      text-align: center;
      font-size: 12px;
      color: var(--secondary-text-color);
    }
  `)),hc([Ad()],$u.prototype,"_trackable",void 0),hc([Ad()],$u.prototype,"_ts",void 0),hc([Ad()],$u.prototype,"_clock",void 0),hc([Ad()],$u.prototype,"_date",void 0),hc([Ad()],$u.prototype,"_heard",void 0),$u=hc([kd("meshcore-preferences-page")],$u);let Cu=class extends xd{constructor(){super(),this.open=!1,this.contactName="",this.result=null,this.error="",this.availableRepeaters=[],this.targetContact=null,this.pathMode="discovery",this.pathHops=[],this.enteredPath="",this._repeaterFilter="",this._running=!1,this._onPathModeChange=e=>{this.pathMode=e.target.value},this._onExplicitPathInput=e=>{this.enteredPath=e.target.value},this._onRunTrace=()=>{if(!this._canRunTrace())return;const e="discovery"===this.pathMode?void 0:this._buildPathString();this._running=!0,this.dispatchEvent(new CustomEvent("trace-requested",{detail:{pathMode:this.pathMode,path:e},bubbles:!0,composed:!0}))},Pp(this,{isOpen:()=>this.open,onEscape:()=>this._close()})}willUpdate(e){if(e.has("open")&&this.open&&!e.get("open")){const e=this.targetContact;if(!e||2!==e.type&&3!==e.type&&4!==e.type)this.pathMode="discovery",this.pathHops=[];else{this.pathMode="select";const t=this._resolveCachedHops(e);this.pathHops=t||[]}this.enteredPath="",this._repeaterFilter="",this._running=!1}(e.has("result")&&this.result||e.has("error")&&this.error)&&(this._running=!1)}_resolveCachedHops(e){var t,a;if(1!==(null!==(t=e.out_path_hash_mode)&&void 0!==t?t:0))return null;const i=(e.out_path||"").toLowerCase(),n=null!==(a=e.out_path_len)&&void 0!==a?a:0;if(!i||n<=0)return null;if(i.length<4*n)return null;const o=[];for(let e=0;e<n;e++){const t=i.substring(4*e,4*(e+1)),a=this.availableRepeaters.find(e=>(e.pubkey_prefix||"").toLowerCase().startsWith(t));if(!a)return null;o.push(a)}return o}render(){return this.open?ad(dl||(dl=pc`
      <div class="dialog-backdrop" @click=${0}>
        <div
          class="dialog"
          role="dialog"
          aria-modal="true"
          aria-label="Trace ${0}"
          @click=${0}>
          <div class="dialog-header">
            <div class="dialog-title">Trace ${0}</div>
            <button class="dialog-close" aria-label="Close" @click=${0}>✕</button>
          </div>
          <div class="dialog-content">
            ${0}
          </div>
        </div>
      </div>
    `),this._close,this.contactName,e=>e.stopPropagation(),this.contactName,this._close,this._renderBody()):ad(cl||(cl=pc``))}_renderBody(){return this.error?ad(pl||(pl=pc`<div class="error-box">${0}</div>`),this.error):this.result?this._renderResult(this.result):this._running?ad(hl||(hl=pc`<div class="info-value">Tracing…</div>`)):this._renderInput()}_renderInput(){return ad(ul||(ul=pc`
      <div class="form-group">
        <label class="form-label">Path Type</label>
        <select
          class="form-select"
          .value=${0}
          @change=${0}
        >
          <option value="discovery">Path discovery (auto)</option>
          <option value="select">Select repeaters</option>
          <option value="explicit">Enter path</option>
        </select>
      </div>

      ${0}

      ${0}

      <div class="dialog-actions">
        <button
          class="btn-primary"
          ?disabled=${0}
          @click=${0}
        >
          Run Trace
        </button>
      </div>
    `),this.pathMode,this._onPathModeChange,"discovery"===this.pathMode?ad(ml||(ml=pc`<div class="info-item path-hint">
            Flood path discovery will find a route automatically. May time
            out if the target is many hops away or unreachable by flood.
          </div>`)):"select"===this.pathMode?this._renderRepeaterPicker():this._renderExplicitInput(),"discovery"!==this.pathMode&&this._canRunTrace()?ad(gl||(gl=pc`<div class="info-item">
            <div class="info-label">Resolved Path</div>
            <div class="resolved-path">${0}</div>
          </div>`),this._buildPathString()):ad(fl||(fl=pc``)),!this._canRunTrace(),this._onRunTrace)}_renderRepeaterPicker(){var e,t,a;const i=new Set(this.pathHops.map(e=>e.public_key)),n=this._repeaterFilter.trim().toLowerCase(),o=[...this.availableRepeaters].filter(e=>!i.has(e.public_key)).filter(e=>{if(!n)return!0;const t=(e.adv_name||"").toLowerCase(),a=(e.pubkey_prefix||"").toLowerCase();return t.includes(n)||a.startsWith(n)}).sort((e,t)=>(e.adv_name||"").localeCompare(t.adv_name||"")),r=(null===(e=this.targetContact)||void 0===e?void 0:e.adv_name)||(null===(t=this.targetContact)||void 0===t?void 0:t.pubkey_prefix)||"(no target)",s=(null===(a=this.targetContact)||void 0===a||null===(a=a.pubkey_prefix)||void 0===a?void 0:a.substring(0,2).toUpperCase())||"--";return ad(vl||(vl=pc`
      <div class="info-item">
        <div class="info-label">Repeaters (in order, source → target)</div>
        <div class="repeater-picker">
          <div class="picker-column">
            <div class="picker-column-label">Available</div>
            <input
              type="text"
              class="form-input picker-search"
              placeholder="Filter by name or pubkey prefix…"
              .value=${0}
              @input=${0}
              autocomplete="off"
              spellcheck="false"
            />
            <div class="picker-list">
              ${0}
            </div>
          </div>
          <div class="picker-column">
            <div class="picker-column-label">Path</div>
            <div class="picker-list">
              ${0}
            </div>
          </div>
        </div>
      </div>

      <div class="info-item">
        <div class="info-label">Target</div>
        <div class="target-row">
          <span class="target-name">${0}</span>
          <span class="target-hex">${0}</span>
        </div>
      </div>
    `),this._repeaterFilter,e=>{this._repeaterFilter=e.target.value},0===o.length?ad(bl||(bl=pc`<div class="picker-empty">${0}</div>`),n?"No matches":"No repeaters available"):o.map(e=>ad(yl||(yl=pc`
                      <div
                        class="picker-item"
                        @click=${0}
                        title="Add ${0}"
                      >
                        <span class="name">${0}</span>
                        <span class="hop-hex">${0}</span>
                      </div>
                    `),()=>this._addRepeater(e),e.adv_name,e.adv_name||e.pubkey_prefix,e.pubkey_prefix.substring(0,2).toUpperCase())),0===this.pathHops.length?ad(_l||(_l=pc`<div class="picker-empty">Click a repeater to add (or leave empty for direct-neighbor)</div>`)):this.pathHops.map((e,t)=>ad(xl||(xl=pc`
                      <div class="picker-item">
                        <span class="ordinal">${0}</span>
                        <span class="name">${0}</span>
                        <span class="hop-hex">${0}</span>
                        <button
                          class="picker-item-btn"
                          ?disabled=${0}
                          @click=${0}
                          title="Move up"
                        >▲</button>
                        <button
                          class="picker-item-btn"
                          ?disabled=${0}
                          @click=${0}
                          title="Move down"
                        >▼</button>
                        <button
                          class="picker-item-btn"
                          @click=${0}
                          title="Remove"
                        >✕</button>
                      </div>
                    `),t+1,e.adv_name||e.pubkey_prefix,e.pubkey_prefix.substring(0,2).toUpperCase(),0===t,()=>this._moveRepeater(t,-1),t===this.pathHops.length-1,()=>this._moveRepeater(t,1),()=>this._removeRepeater(t))),r,s)}_renderExplicitInput(){var e,t,a;const i=!!this.enteredPath&&!this._isValidExplicitHops(),n=(null===(e=this.targetContact)||void 0===e?void 0:e.adv_name)||(null===(t=this.targetContact)||void 0===t?void 0:t.pubkey_prefix)||"(no target)",o=(null===(a=this.targetContact)||void 0===a||null===(a=a.pubkey_prefix)||void 0===a?void 0:a.substring(0,2).toUpperCase())||"--";return ad(wl||(wl=pc`
      <div class="info-item">
        <div class="info-label">Outbound Hops (comma-separated hex)</div>
        <input
          type="text"
          class="form-input"
          placeholder="AE  (or AE,CD for multiple hops, or empty for direct neighbor)"
          .value=${0}
          @input=${0}
          autocomplete="off"
          spellcheck="false"
        />
        <div class="path-hint">
          Enter outbound hops only — the target and return hops are added
          automatically.  For a direct-neighbor target, leave this empty.
          Each hop is 2, 4, or 8 hex chars (1, 2, or 4 bytes); all hops
          must be the same width.  1 byte is recommended — 2-byte and
          4-byte hashes may not complete round-trip in some meshes.
        </div>
        ${0}
      </div>
      <div class="info-item">
        <div class="info-label">Target</div>
        <div class="target-row">
          <span class="target-name">${0}</span>
          <span class="target-hex">${0}</span>
        </div>
      </div>
    `),this.enteredPath,this._onExplicitPathInput,ad(i?kl||(kl=pc`<div class="path-error">
              Invalid format — hex pairs separated by commas, all
              the same width (2, 4, or 8 chars).
            </div>`):$l||($l=pc``)),n,o)}_addRepeater(e){this.pathHops=[...this.pathHops,e]}_removeRepeater(e){this.pathHops=this.pathHops.filter((t,a)=>a!==e)}_moveRepeater(e,t){const a=e+t;if(a<0||a>=this.pathHops.length)return;const i=[...this.pathHops];[i[e],i[a]]=[i[a],i[e]],this.pathHops=i}_isValidExplicitHops(){const e=this.enteredPath.trim();if(!e)return!0;const t=e.split(",").map(e=>e.trim());if(0===t.length)return!1;const a=t[0].length;if(![2,4,8].includes(a))return!1;const i=/^[0-9a-fA-F]+$/;return t.every(e=>e.length===a&&i.test(e))}_canRunTrace(){return"discovery"===this.pathMode||("select"===this.pathMode?!!this.targetContact:"explicit"===this.pathMode&&!!this.targetContact&&this._isValidExplicitHops())}_buildPathString(){if("select"===this.pathMode){if(!this.targetContact)return"";const e=this.targetContact.pubkey_prefix.substring(0,2).toUpperCase(),t=this.pathHops.map(e=>e.pubkey_prefix.substring(0,2).toUpperCase());return 0===t.length?e:[...t,e,...[...t].reverse()].join(",")}if("explicit"===this.pathMode){if(!this.targetContact)return"";const e=this.targetContact.pubkey_prefix.substring(0,2).toUpperCase(),t=this.enteredPath.trim();if(!t)return e;const a=t.split(",").map(e=>e.trim().toUpperCase());return[...a,e,...[...a].reverse()].join(",")}return""}_renderResult(e){const t=(e.path||[]).filter(e=>e.hash);return ad(Cl||(Cl=pc`
      <div class="info-item">
        <div class="info-label">Round Trip</div>
        <div class="info-value rtt-value">${0}</div>
      </div>

      <div class="info-item">
        <div class="info-label">Hops</div>
        <div class="info-value">
          ${0}
        </div>
      </div>

      ${0}

      ${0}
    `),e.response_time,0===e.hops?"Direct (0 hops)":`${e.hops}`,null!==e.final_snr&&void 0!==e.final_snr?ad(Sl||(Sl=pc`
            <div class="info-item">
              <div class="info-label">Final SNR (at this device)</div>
              <div class="info-value">${0} dB</div>
            </div>
          `),e.final_snr.toFixed(2)):ad(Al||(Al=pc``)),t.length>0?ad(Ml||(Ml=pc`
            <div class="info-item">
              <div class="info-label">Return Path (per-hop SNR)</div>
              <div class="hop-list">
                ${0}
              </div>
            </div>
          `),t.map((e,t)=>ad(Fl||(Fl=pc`
                    <div class="hop-row">
                      <span>Hop ${0}: ${0}</span>
                      <span>${0} dB</span>
                    </div>
                  `),t+1,e.hash,e.snr.toFixed(2)))):ad(El||(El=pc``)))}_close(){this.open=!1,this.dispatchEvent(new CustomEvent("trace-dialog-closed",{bubbles:!0,composed:!0}))}};Cu.styles=[Md,bc(Dl||(Dl=pc`
    :host { display: contents; }

    .dialog-backdrop {
      position: fixed;
      top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      animation: fadeIn 0.2s;
    }

    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

    .dialog {
      background: var(--card-background-color, #fff);
      border-radius: 8px;
      max-width: 700px;
      width: 90%;
      max-height: 85vh;
      overflow-y: auto;
      box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
      animation: slideUp 0.3s;
    }

    @keyframes slideUp {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    .dialog-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
    }

    .dialog-title { font-size: 18px; font-weight: 600; color: var(--primary-text-color); }

    .dialog-close {
      background: none; border: none; font-size: 20px; cursor: pointer;
      color: var(--secondary-text-color); padding: 0;
      width: 32px; height: 32px;
      display: flex; align-items: center; justify-content: center;
    }

    .dialog-close:hover { color: var(--primary-text-color); }

    .dialog-content { padding: 16px; }

    .info-item {
      padding: 8px;
      background: var(--primary-background-color, #fafafa);
      border-radius: 6px;
      margin-bottom: 8px;
    }

    .info-label {
      font-size: 11px; color: var(--secondary-text-color, #727272);
      text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px;
    }

    .info-value {
      font-size: 13px; color: var(--primary-text-color);
      margin-top: 4px; font-family: monospace;
    }

    .rtt-value {
      font-size: 24px; font-weight: 600;
      font-family: inherit;
      color: var(--primary-color, #03a9f4);
    }

    .hop-list {
      margin-top: 4px;
      font-family: monospace;
      font-size: 12px;
    }

    .hop-row {
      display: flex;
      justify-content: space-between;
      padding: 2px 0;
    }

    .hop-row + .hop-row {
      border-top: 1px dashed var(--divider-color, #e0e0e0);
    }

    .error-box {
      padding: 12px;
      background: rgba(219, 68, 55, 0.08);
      border: 1px solid rgba(219, 68, 55, 0.2);
      border-radius: 6px;
      color: var(--error-color, #db4437);
      font-size: 13px;
    }

    /* Input phase */

    select, input[type="text"] {
      width: 100%;
      padding: 8px 10px;
      margin-top: 4px;
      font-size: 14px;
      color: var(--primary-text-color);
      background: var(--card-background-color, #fff);
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 4px;
      box-sizing: border-box;
      font-family: inherit;
    }

    select:focus, input[type="text"]:focus {
      outline: none;
      border-color: var(--primary-color, #03a9f4);
    }

    input[type="text"] {
      font-family: monospace;
    }

    .path-hint {
      font-size: 12px;
      color: var(--secondary-text-color, #727272);
      font-style: italic;
      padding: 8px;
    }

    .path-error {
      margin-top: 6px;
      font-size: 12px;
      color: var(--error-color, #db4437);
    }

    .repeater-picker {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }

    .picker-column {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .picker-column-label {
      font-size: 11px;
      color: var(--secondary-text-color, #727272);
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 0.5px;
      margin-bottom: 2px;
    }

    .picker-list {
      display: flex;
      flex-direction: column;
      gap: 4px;
      min-height: 60px;
      max-height: 200px;
      overflow-y: auto;
      padding: 4px;
      background: var(--card-background-color, #fff);
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 4px;
    }

    /* Picker-search uses .form-input for sizing / padding
       / border / border-radius (panel-wide form convention).  Local
       .picker-search only supplies picker-column-specific spacing. */
    .picker-search {
      margin-bottom: 4px;
    }

    .picker-item {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 6px 8px;
      background: var(--primary-background-color, #fafafa);
      border-radius: 4px;
      font-size: 12px;
      cursor: pointer;
      user-select: none;
    }

    .picker-item:hover {
      background: var(--secondary-background-color, #eef);
    }

    .picker-item[disabled] {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .picker-item .name {
      flex: 1;
      font-family: inherit;
      color: var(--primary-text-color);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .picker-item .hop-hex {
      font-family: monospace;
      font-size: 11px;
      color: var(--secondary-text-color, #727272);
    }

    .picker-item .ordinal {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 20px;
      height: 20px;
      border-radius: 10px;
      background: var(--primary-color, #03a9f4);
      color: var(--text-primary-color, #fff);
      font-size: 11px;
      font-weight: 600;
      font-family: inherit;
    }

    .picker-item-btn {
      background: none;
      border: none;
      cursor: pointer;
      color: var(--secondary-text-color);
      padding: 2px 4px;
      font-size: 14px;
      line-height: 1;
    }

    .picker-item-btn:hover:not(:disabled) {
      color: var(--primary-text-color);
    }

    .picker-item-btn:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }

    .picker-empty {
      padding: 12px 8px;
      font-size: 12px;
      color: var(--secondary-text-color, #727272);
      font-style: italic;
      text-align: center;
    }

    .dialog-actions {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
      padding-top: 8px;
    }

    .btn-primary {
      padding: 8px 16px;
      font-size: 14px;
      font-weight: 500;
      color: var(--text-primary-color, #fff);
      background: var(--primary-color, #03a9f4);
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    .btn-primary:hover:not(:disabled) {
      filter: brightness(0.95);
    }

    .btn-primary:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .resolved-path {
      margin-top: 4px;
      font-family: monospace;
      font-size: 12px;
      color: var(--primary-text-color);
      background: var(--primary-background-color, #fafafa);
      padding: 6px 8px;
      border-radius: 4px;
      word-break: break-all;
    }

    /* Target row for both Select and Enter-path modes. */
    .target-row {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 12px;
      background: rgba(3, 169, 244, 0.08);
      border: 1px solid rgba(3, 169, 244, 0.25);
      border-radius: 6px;
      font-size: 13px;
      margin-top: 4px;
    }

    .target-row .target-name {
      flex: 1;
      color: var(--primary-text-color);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .target-row .target-hex {
      font-family: monospace;
      font-size: 12px;
      color: var(--secondary-text-color, #727272);
    }
  `))],hc([Sd({type:Boolean})],Cu.prototype,"open",void 0),hc([Sd({type:String})],Cu.prototype,"contactName",void 0),hc([Sd({type:Object})],Cu.prototype,"result",void 0),hc([Sd({type:String})],Cu.prototype,"error",void 0),hc([Sd({type:Array})],Cu.prototype,"availableRepeaters",void 0),hc([Sd({type:Object})],Cu.prototype,"targetContact",void 0),hc([Ad()],Cu.prototype,"pathMode",void 0),hc([Ad()],Cu.prototype,"pathHops",void 0),hc([Ad()],Cu.prototype,"enteredPath",void 0),hc([Ad()],Cu.prototype,"_repeaterFilter",void 0),hc([Ad()],Cu.prototype,"_running",void 0),Cu=hc([kd("meshcore-trace-dialog")],Cu);let Su=class extends xd{constructor(){super(),this.open=!1,this.contacts=[],this._typeFilter="all",this._search="",this._onTypeChange=e=>{this._typeFilter=e.target.value},this._onSearchInput=e=>{this._search=e.target.value},this._close=()=>{this.dispatchEvent(new CustomEvent("target-picker-closed",{bubbles:!0,composed:!0}))},Pp(this,{isOpen:()=>this.open,onEscape:()=>this._close()})}willUpdate(e){e.has("open")&&this.open&&!e.get("open")&&(this._typeFilter="all",this._search="")}render(){if(!this.open)return ad(zl||(zl=pc``));const e=this._search.trim().toLowerCase(),t=this.contacts.filter(e=>{switch(this._typeFilter){case"all":default:return!0;case"client":return 1===e.type;case"repeater":return 2===e.type;case"room_server":return 3===e.type;case"sensor":return 4===e.type}}).filter(t=>{if(!e)return!0;const a=(t.adv_name||"").toLowerCase(),i=(t.pubkey_prefix||"").toLowerCase();return a.includes(e)||i.startsWith(e)}).sort((e,t)=>(e.adv_name||"").localeCompare(t.adv_name||""));return ad(Ol||(Ol=pc`
      <div class="dialog-backdrop" @click=${0}>
        <div
          class="dialog"
          role="dialog"
          aria-modal="true"
          aria-label="Choose trace target"
          @click=${0}>
          <div class="dialog-header">
            <div class="dialog-title">Choose Trace Target</div>
            <button class="dialog-close" aria-label="Close" @click=${0} title="Close">✕</button>
          </div>
          <div class="dialog-content">
            <div class="filter-row">
              <div class="form-group" style="margin: 0;">
                <label class="form-label">Type</label>
                <select
                  class="form-select"
                  .value=${0}
                  @change=${0}
                >
                  <option value="all">All</option>
                  <option value="client">Companion / Client</option>
                  <option value="repeater">Repeater</option>
                  <option value="room_server">Room Server</option>
                  <option value="sensor">Sensor</option>
                </select>
              </div>
              <div class="form-group" style="margin: 0;">
                <label class="form-label">Search</label>
                <input
                  class="form-input"
                  type="text"
                  placeholder="Name or pubkey prefix…"
                  .value=${0}
                  @input=${0}
                  autocomplete="off"
                  spellcheck="false"
                />
              </div>
            </div>
            <div class="results-list">
              ${0}
            </div>
          </div>
        </div>
      </div>
    `),this._close,e=>e.stopPropagation(),this._close,this._typeFilter,this._onTypeChange,this._search,this._onSearchInput,0===t.length?ad(Il||(Il=pc`<div class="empty">No matching contacts</div>`)):t.map(e=>ad(Rl||(Rl=pc`
                    <div
                      class="result-row"
                      @click=${0}
                      title="Trace to ${0}"
                    >
                      <span class="result-icon">${0}</span>
                      <span class="result-name">${0}</span>
                      <span class="result-hex">${0}</span>
                    </div>
                  `),()=>this._select(e),e.adv_name||e.pubkey_prefix,this._iconFor(e.type),e.adv_name||e.pubkey_prefix,(e.pubkey_prefix||"").substring(0,2).toUpperCase())))}_iconFor(e){switch(e){case 2:return ad(Tl||(Tl=pc`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V10h4.27c.15-.86.45-1.66.87-2.36l-1.82-1.06a.5.5 0 01-.18-.68l.5-.87a.5.5 0 01.68-.18l1.81 1.05C19.66 4.66 20.78 4 22 4v2c-.8 0-1.54.32-2.08.84l1.5 2.6a.5.5 0 01-.18.68l-.87.5a.5.5 0 01-.68-.18L18.2 7.92c-.14.65-.2 1.33-.2 2.08 0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6z"/></svg>`));case 3:return ad(ql||(ql=pc`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M4 6h16v4H4V6zm0 8h16v4H4v-4zm2-6.5A.5.5 0 116 7a.5.5 0 010 .5zm0 8A.5.5 0 116 15a.5.5 0 010 .5z"/></svg>`));case 4:return ad(Bl||(Bl=pc`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2a4 4 0 00-4 4v7.55A5.5 5.5 0 1015.5 20a5.47 5.47 0 00.5-2.45V6a4 4 0 00-4-4zm0 2a2 2 0 012 2v8.1a3.5 3.5 0 11-4 0V6a2 2 0 012-2z"/></svg>`));default:return ad(Nl||(Nl=pc`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`))}}_select(e){this.dispatchEvent(new CustomEvent("target-selected",{detail:e,bubbles:!0,composed:!0}))}};Su.styles=[Md,bc(jl||(jl=pc`
      :host { display: contents; }

      .dialog-backdrop {
        position: fixed;
        top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        animation: fadeIn 0.2s;
      }

      @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

      .dialog {
        background: var(--card-background-color, #fff);
        border-radius: 8px;
        max-width: 560px;
        width: 90%;
        max-height: 85vh;
        display: flex;
        flex-direction: column;
        box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
        animation: slideUp 0.3s;
      }

      @keyframes slideUp {
        from { transform: translateY(20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }

      .dialog-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px;
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
      }

      .dialog-title {
        font-size: 18px;
        font-weight: 600;
        color: var(--primary-text-color);
      }

      .dialog-close {
        background: none; border: none; font-size: 20px; cursor: pointer;
        color: var(--secondary-text-color); padding: 0;
        width: 32px; height: 32px;
        display: flex; align-items: center; justify-content: center;
      }

      .dialog-close:hover { color: var(--primary-text-color); }

      .dialog-content {
        padding: 16px;
        overflow-y: auto;
      }

      .filter-row {
        display: grid;
        grid-template-columns: minmax(140px, 200px) 1fr;
        gap: 8px;
        margin-bottom: 12px;
      }

      @media (max-width: 520px) {
        .filter-row { grid-template-columns: 1fr; }
      }

      .results-list {
        display: flex;
        flex-direction: column;
        gap: 4px;
        max-height: 50vh;
        overflow-y: auto;
        padding: 4px;
        background: var(--primary-background-color, #fafafa);
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 6px;
      }

      .result-row {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 12px;
        background: var(--card-background-color, #fff);
        border-radius: 6px;
        cursor: pointer;
        user-select: none;
        font-size: 14px;
        transition: background 0.15s;
      }

      .result-row:hover {
        background: var(--secondary-background-color, #eef);
      }

      .result-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        color: var(--primary-color, #03a9f4);
        flex-shrink: 0;
      }

      .result-name {
        flex: 1;
        color: var(--primary-text-color);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .result-hex {
        font-family: monospace;
        font-size: 12px;
        color: var(--secondary-text-color, #727272);
        flex-shrink: 0;
      }

      .empty {
        padding: 24px 12px;
        text-align: center;
        color: var(--secondary-text-color, #727272);
        font-style: italic;
        font-size: 13px;
      }
    `))],hc([Sd({type:Boolean})],Su.prototype,"open",void 0),hc([Sd({type:Array})],Su.prototype,"contacts",void 0),hc([Ad()],Su.prototype,"_typeFilter",void 0),hc([Ad()],Su.prototype,"_search",void 0),Su=hc([kd("meshcore-target-picker")],Su);const Au="meshcore-active-tab",Mu=[{id:"chat",label:"Chat",short:"Chat",icon:"M20 2H4a2 2 0 00-2 2v18l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2zm0 14H5.17L4 17.17V4h16v12z"},{id:"map",label:"Map",short:"Map",icon:"M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9a.5.5 0 00-.36.48V20.5a.5.5 0 00.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9a.5.5 0 00.36-.48V3.5a.5.5 0 00-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"},{id:"radio",label:"My radio",short:"Radio",icon:"M3.24 6.15A2 2 0 002 8v12a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2H8.3l8.26-3.34L15.88 1 3.24 6.15zM7 20a3 3 0 110-6 3 3 0 010 6zm13-8h-2v-2h-2v2H4V8h16v4z"},{id:"repeaters",label:"Repeaters",short:"Repeaters",icon:"M12 11a2 2 0 00-2 2c0 .74.4 1.38 1 1.72V22h2v-7.28A2 2 0 0012 11zm-6 2c0-3.31 2.69-6 6-6s6 2.69 6 6c0 1.66-.68 3.15-1.76 4.24l1.42 1.42A7.96 7.96 0 0020 13c0-4.42-3.58-8-8-8s-8 3.58-8 8c0 2.21.9 4.21 2.34 5.66l1.42-1.42A5.98 5.98 0 016 13zm6-10C6.48 3 2 7.48 2 13c0 2.76 1.12 5.26 2.93 7.07l1.42-1.42A8.97 8.97 0 013 13c0-4.97 4.03-9 9-9s9 4.03 9 9c0 2.49-1.01 4.74-2.64 6.37l1.42 1.42A10.95 10.95 0 0023 13c0-5.52-4.48-10-11-10z"},{id:"settings",label:"Settings",short:"Settings",icon:"M19.14 12.94a7.07 7.07 0 000-1.88l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.49.49 0 00-.59-.22l-2.39.96a7.03 7.03 0 00-1.62-.94l-.36-2.54A.48.48 0 0013.93 2h-3.86a.48.48 0 00-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 00-.59.22L2.72 8.47a.48.48 0 00.12.61l2.03 1.58a7.07 7.07 0 000 1.88l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.47.41h3.86c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.49.49 0 00-.12-.61l-2.03-1.58zM12 15.6A3.6 3.6 0 1112 8.4a3.6 3.6 0 010 7.2z"}];let Fu=class extends xd{constructor(){super(),this.narrow=!1,this._config=null,this._activeTab=function(){try{const e=sessionStorage.getItem(Au);if(Mu.some(t=>t.id===e))return e}catch(e){}return"chat"}(),this._devices=[],this._mapFocus=null,this._contacts=[],this._channels=[],this._selectedEntryId=null,this._loading=!0,this._loadingStarted=!1,this._error=null,this._unsubscribeList=[],this._unread=new Vd,this._pendingChatTarget=null,this._activeChatEntityId=null,this._deviceDropdownOpen=!1,this._onDocClickForDropdown=e=>{var t;const a=e.composedPath?e.composedPath():[],i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".device-info-wrap");i&&a.includes(i)||this._closeDeviceDropdown()},this._onDocKeyForDropdown=e=>{"Escape"===e.key&&this._closeDeviceDropdown()},this._traceDialogOpen=!1,this._traceDialogContactName="",this._traceDialogResult=null,this._traceDialogError="",this._traceDialogPubkeyPrefix="",this._traceDialogEntryId=void 0,this._traceDialogTargetContact=null,this._targetPickerOpen=!1,this._pendingTraceEntryId=void 0,this._onTraceRequested=async e=>{if(!this.hass)return;const{pathMode:t,path:a}=e.detail;try{const e=await async function(e,t,a,i="discovery",n){const o={type:"meshcore_chat/trace",pubkey_prefix:t};return a&&(o.entry_id=a),"select"!==i&&"explicit"!==i||!n||(o.path=n),e.callWS(o)}(this.hass,this._traceDialogPubkeyPrefix,this._traceDialogEntryId,t,a);this._traceDialogResult=e}catch(e){this._traceDialogError=(null==e?void 0:e.message)||(null==e?void 0:e.code)||"Unknown error"}},this._onCompanionTraceRequested=e=>{var t,a,i;this._pendingTraceEntryId=null!==(t=null!==(a=null===(i=e.detail)||void 0===i?void 0:i.entryId)&&void 0!==a?a:this._selectedEntryId)&&void 0!==t?t:void 0,this._targetPickerOpen=!0},this._onTargetPicked=e=>{const t=e.detail;this._targetPickerOpen=!1,t&&(this._traceDialogPubkeyPrefix=t.pubkey_prefix,this._traceDialogEntryId=this._pendingTraceEntryId,this._traceDialogContactName=t.adv_name||t.pubkey_prefix,this._traceDialogTargetContact=t,this._traceDialogResult=null,this._traceDialogError="",this._traceDialogOpen=!0)},this._unread.onMarkReadRequested(e=>{this._handleMarkReadRequested(e)}),this._unread.subscribe(()=>this.requestUpdate())}connectedCallback(){super.connectedCallback(),this._loadData(),this._setupSubscriptions()}disconnectedCallback(){super.disconnectedCallback(),this._teardownSubscriptions(),this._closeDeviceDropdown()}_toggleDeviceDropdown(){this._deviceDropdownOpen?this._closeDeviceDropdown():this._openDeviceDropdown()}_openDeviceDropdown(){this._deviceDropdownOpen||(this._deviceDropdownOpen=!0,setTimeout(()=>{document.addEventListener("click",this._onDocClickForDropdown,!0),document.addEventListener("keydown",this._onDocKeyForDropdown,!0)},0))}_closeDeviceDropdown(){this._deviceDropdownOpen&&(this._deviceDropdownOpen=!1,document.removeEventListener("click",this._onDocClickForDropdown,!0),document.removeEventListener("keydown",this._onDocKeyForDropdown,!0))}_selectDevice(e){e!==this._selectedEntryId&&(this._selectedEntryId=e,this._pendingChatTarget=null,Promise.all([this._loadDeviceData(),this._loadUnreadCounts()])),this._closeDeviceDropdown()}_setupSubscriptions(){var e;this._teardownSubscriptions(),null!==(e=this.hass)&&void 0!==e&&null!==(e=e.connection)&&void 0!==e&&e.subscribeEvents&&(this.hass.connection.subscribeEvents(e=>{e.data.entry_id===this._selectedEntryId&&this._loadDeviceData()},"meshcore_channels_updated").then(e=>{this._unsubscribeList.push(e)}),this.hass.connection.subscribeEvents(e=>{e.data.entry_id===this._selectedEntryId&&this._loadDeviceData()},"meshcore_channel_removed").then(e=>{this._unsubscribeList.push(e)}),this.hass.connection.subscribeEvents(e=>{var t;this._activeChatEntityId&&(null===(t=e.data)||void 0===t?void 0:t.entity_id)===this._activeChatEntityId||this._loadUnreadCounts()},"meshcore_unread_updated").then(e=>{this._unsubscribeList.push(e)}))}_teardownSubscriptions(){this._unsubscribeList.length>0&&(this._unsubscribeList.forEach(e=>{try{e()}catch(e){}}),this._unsubscribeList=[])}updated(e){e.has("hass")&&this.hass&&!this._config&&!this._loadingStarted&&this._loadData()}get _selectedDevice(){return this._devices.find(e=>e.entry_id===this._selectedEntryId)}render(){var e,t,a;if(this._loading)return ad(Pl||(Pl=pc`
        <div class="panel">
          <div class="center-message">
            <div class="spinner"></div>
          </div>
        </div>
      `));if(this._error&&!this._config){const e="No MeshCore devices found"===this._error;return ad(Ll||(Ll=pc`
        <div class="panel">
          <div class="center-message">
            <div>
              <p>${0}</p>
              <p style="font-size: 12px; margin-top: 8px;">
                ${0}
              </p>
            </div>
          </div>
        </div>
      `),this._error,e?ad(Hl||(Hl=pc`Open <a href="/config/repairs">Settings &rarr; System &rarr; Repairs</a>
                         for setup guidance, or add the MeshCore integration via
                         <a href="/config/integrations">Settings &rarr; Devices &amp; Services</a>.`)):"Check that the MeshCore integration is loaded and connected.")}const i=this._selectedDevice;return ad(Vl||(Vl=pc`
      <div class="panel">
        <div class="panel-header">
          <div class="header-left">
            ${0}
            <div class="panel-title">MeshCore Chat</div>
          </div>
          <div class="header-right">
            ${0}
            ${0}
            ${0}
          </div>
        </div>

        ${0}

        <nav class="tab-bar" aria-label="Sections">
          ${0}
        </nav>

        <div class="page-container">
          ${0}
        </div>

        <meshcore-trace-dialog
          ?open=${0}
          .contactName=${0}
          .result=${0}
          .error=${0}
          .availableRepeaters=${0}
          .targetContact=${0}
          @trace-requested=${0}
          @trace-dialog-closed=${0}>
        </meshcore-trace-dialog>

        <meshcore-target-picker
          ?open=${0}
          .contacts=${0}
          @target-selected=${0}
          @target-picker-closed=${0}>
        </meshcore-target-picker>
      </div>
    `),this.narrow||"always_hidden"===(null===(e=this.hass)||void 0===e?void 0:e.dockedSidebar)?ad(Kl||(Kl=pc`<button class="menu-icon" @click=${0} aria-label="Toggle sidebar">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
                </button>`),this._toggleMenu):ad(Ul||(Ul=pc``)),i&&null!==this._getNodeStatus(i)?ad(Wl||(Wl=pc`
                  <span class="connection-status ${0}">
                    <span class="status-dot ${0}"></span>
                    ${0}
                  </span>`),"online"===this._getNodeStatus(i)?"online":"offline","online"===this._getNodeStatus(i)?"online":"offline","online"===this._getNodeStatus(i)?"Connected":"Disconnected"):ad(Gl||(Gl=pc``)),i&&null!==this._getBatteryLevel(i)?ad(Xl||(Xl=pc`
                  <span class="battery-indicator">
                    <span class="battery-icon">
                      <span class="battery-fill ${0}"
                            style="width: ${0}%"></span>
                    </span>
                    <span class="battery-pct">${0}%</span>
                  </span>`),this._getBatteryLevel(i)>50?"high":this._getBatteryLevel(i)>20?"medium":"low",this._getBatteryLevel(i),this._getBatteryLevel(i)):ad(Yl||(Yl=pc``)),this._devices.length>1?ad(Ql||(Ql=pc`
                  <div class="device-info-wrap">
                    <button
                      type="button"
                      class="device-switcher"
                      aria-haspopup="listbox"
                      aria-expanded=${0}
                      @click=${0}>
                      <span class="device-name">${0}</span>
                      <span class="device-prefix">(${0})</span>
                      <span class="device-switcher-caret" aria-hidden="true">▾</span>
                    </button>
                    ${0}
                  </div>
                `),this._deviceDropdownOpen?"true":"false",this._toggleDeviceDropdown,(null==i?void 0:i.name)||"",(null==i||null===(t=i.pubkey_prefix)||void 0===t?void 0:t.substring(0,6))||"",this._deviceDropdownOpen?ad(Jl||(Jl=pc`
                          <ul class="device-switcher-menu" role="listbox">
                            ${0}
                          </ul>
                        `),this._devices.map(e=>{var t;return ad(Zl||(Zl=pc`
                                <li
                                  role="option"
                                  aria-selected=${0}
                                  class=${0}
                                  @click=${0}>
                                  <span class="device-name">
                                    ${0}${0}
                                  </span>
                                  <span class="device-prefix">
                                    (${0})
                                  </span>
                                </li>
                              `),e.entry_id===this._selectedEntryId?"true":"false",e.entry_id===this._selectedEntryId?"active":"",()=>this._selectDevice(e.entry_id),e.name,e.connected?"":" — offline",(null===(t=e.pubkey_prefix)||void 0===t?void 0:t.substring(0,6))||"?")})):""):ad(ec||(ec=pc`
                  <div class="device-info-wrap">
                    <span class="device-name">${0}</span>
                    <span class="device-prefix">(${0})</span>
                  </div>
                `),(null==i?void 0:i.name)||"",(null==i||null===(a=i.pubkey_prefix)||void 0===a?void 0:a.substring(0,6))||""),this._error?ad(tc||(tc=pc`<div class="error-banner">${0}</div>`),this._error):ad(ac||(ac=pc``)),Mu.map(e=>ad(ic||(ic=pc`
            <button
              class=${0}
              aria-current=${0}
              @click=${0}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d=${0}></path></svg>
              <span class="tab-label">${0}</span>
              <span class="tab-short">${0}</span>
              ${0}
            </button>
          `),this._activeTab===e.id?"active":"",this._activeTab===e.id?"page":"false",()=>this._setTab(e.id),e.icon,e.label,e.short,"chat"===e.id&&this._totalUnread()>0?ad(nc||(nc=pc`<span class="tab-badge">${0}</span>`),this._totalUnread()):"")),this._renderActivePage(),this._traceDialogOpen,this._traceDialogContactName,this._traceDialogResult,this._traceDialogError,this._contacts.filter(e=>2===e.type||3===e.type||4===e.type),this._traceDialogTargetContact,this._onTraceRequested,()=>{this._traceDialogOpen=!1},this._targetPickerOpen,this._contacts,this._onTargetPicked,()=>{this._targetPickerOpen=!1})}_setTab(e){this._activeTab=e;try{sessionStorage.setItem(Au,e)}catch(e){}}_totalUnread(){var e;const t=(null===(e=this._unread)||void 0===e?void 0:e.counts)||{};return Object.values(t).reduce((e,t)=>e+(t>0?t:0),0)}_renderActivePage(){switch(this._activeTab){case"chat":return ad(oc||(oc=pc`
          <meshcore-chat-page
            .hass=${0}
            .config=${0}
            .conversations=${0}
            .unread=${0}
            .selectedId=${0}
            .narrow=${0}
            @active-entity-changed=${0}
            @node-action=${0}
            @contacts-changed=${0}
            @channels-changed=${0}></meshcore-chat-page>`),this.hass,this._config,[...this._channels,...this._contacts.filter(e=>e.added_to_node)],this._unread,this._pendingChatTarget,this.narrow,this._onActiveEntityChanged,this._handleNodeAction,()=>this._loadDeviceData(),()=>this._loadDeviceData());case"repeaters":return ad(rc||(rc=pc`
          <meshcore-devices-page
            .hass=${0}
            .config=${0}
            .selectedDevice=${0}
            .narrow=${0}></meshcore-devices-page>`),this.hass,this._config,this._selectedDevice,this.narrow);case"map":return ad(sc||(sc=pc`
          <meshcore-nodes-page
            .hass=${0}
            .config=${0}
            .contacts=${0}
            .channels=${0}
            .narrow=${0}
            .focusNode=${0}
            @node-action=${0}
            @contacts-changed=${0}></meshcore-nodes-page>`),this.hass,this._config,this._contacts,this._channels,this.narrow,this._mapFocus,this._handleNodeAction,()=>this._loadDeviceData());case"radio":return ad(lc||(lc=pc`
          <meshcore-settings-page
            .hass=${0}
            .config=${0}
            .selectedDevice=${0}
            .narrow=${0}
            @companion-trace-requested=${0}
            @device-renamed=${0}></meshcore-settings-page>`),this.hass,this._config,this._selectedDevice,this.narrow,this._onCompanionTraceRequested,this._onDeviceRenamed);case"settings":return ad(cc||(cc=pc`<meshcore-preferences-page></meshcore-preferences-page>`))}}_toggleMenu(){this.dispatchEvent(new Event("hass-toggle-menu",{bubbles:!0,composed:!0}))}_deviceEntitySuffix(e){return{prefix:(e.pubkey_prefix||e.pubkey||"").substring(0,6).toLowerCase(),name:(e.name||"").toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"")}}_getNodeStatus(e){if(!this.hass)return null;const{prefix:t,name:a}=this._deviceEntitySuffix(e),i=`sensor.meshcore_${t}_node_status_${a}`,n=this.hass.states[i];return n?n.state:null}_getBatteryLevel(e){if(!this.hass)return null;const{prefix:t,name:a}=this._deviceEntitySuffix(e),i=`sensor.meshcore_${t}_battery_percentage_${a}`,n=this.hass.states[i];if(!n||"unknown"===n.state||"unavailable"===n.state)return null;const o=parseFloat(n.state);return isNaN(o)?null:Math.round(o)}async _loadData(){if(this.hass&&!this._loadingStarted){this._loadingStarted=!0,this._loading=!0,this._error=null;try{var e;const t=await Id(this.hass);if(this._devices=t,0===t.length)return this._error="No MeshCore devices found",void(this._loading=!1);const a=t.find(e=>e.connected);this._selectedEntryId=(a||t[0]).entry_id;const i=a||t[0];this._config={node_name:i.name,node_prefix:(null===(e=i.pubkey_prefix)||void 0===e?void 0:e.substring(0,6))||"",entry_id:i.entry_id,...zd,...Od},await this._loadDeviceData(),await this._loadUnreadCounts()}catch(e){const t=e instanceof Error?e.message:String(e);this._error=`Failed to load: ${t}`,console.error("MeshCore panel load error:",e)}finally{this._loading=!1}}}async _loadDeviceData(){if(this.hass&&this._selectedEntryId)try{const[t,a]=await Promise.all([Rd(this.hass,this._selectedEntryId),Td(this.hass,this._selectedEntryId)]);this._contacts=t,this._channels=a;const i=this._selectedDevice;var e;i&&this._config&&(this._config={...this._config,node_name:i.name,node_prefix:(null===(e=i.pubkey_prefix)||void 0===e?void 0:e.substring(0,6))||"",entry_id:i.entry_id})}catch(e){console.error("Failed to load device data:",e)}}_onActiveEntityChanged(e){var t;this._activeChatEntityId=(null===(t=e.detail)||void 0===t?void 0:t.entityId)||null}async _onDeviceRenamed(){if(this.hass)try{this._devices=await Id(this.hass);const t=this._selectedDevice;var e;t&&this._config&&(this._config={...this._config,node_name:t.name,node_prefix:(null===(e=t.pubkey_prefix)||void 0===e?void 0:e.substring(0,6))||"",entry_id:t.entry_id})}catch(e){console.error("Failed to refresh devices after rename:",e)}}async _loadUnreadCounts(){if(this.hass)try{const e=await async function(e,t){try{const a={type:"meshcore_chat/get_unread_counts"};t&&(a.entry_id=t);const i=await e.callWS(a);return{unread:i.unread||{},last_read:i.last_read||{}}}catch(e){return{unread:{},last_read:{}}}}(this.hass,this._selectedEntryId||void 0);this._unread.ingestBackendData(e,this._activeChatEntityId)}catch(e){}}_handleMarkReadRequested(e){e&&this.hass&&(async function(e,t,a){try{const i={type:"meshcore_chat/mark_conversation_read",entity_id:t};return a&&(i.entry_id=a),await e.callWS(i)}catch(e){return{success:!1}}}(this.hass,e,this._selectedEntryId||void 0).catch(()=>{}),this._unread.clearEntity(e),this._loadUnreadCounts())}async _handleNodeAction(e){const{action:t,node:a}=e.detail;if(!this.hass||!a)return;const i=a.public_key||"",n=a.pubkey_prefix||"",o=this._selectedEntryId||void 0;switch(t){case"show-on-map":this._mapFocus={...a},this._setTab("map");break;case"message":n&&(this._pendingChatTarget=n,this._setTab("chat"));break;case"remove-contact":if(i)try{await Ld(this.hass,i,o),await this._loadDeviceData(),await this._refreshNodesPageAfterMutation(i)}finally{this._clearNodesPagePending()}break;case"add-contact":if(i)try{await Pd(this.hass,i,a.adv_name||void 0,o),await this._loadDeviceData(),await this._refreshNodesPageAfterMutation(i)}finally{this._clearNodesPagePending()}break;case"trace":n&&(this._traceDialogPubkeyPrefix=n,this._traceDialogEntryId=o,this._traceDialogContactName=a.adv_name||n,this._traceDialogTargetContact="adv_name"in a?a:null,this._traceDialogResult=null,this._traceDialogError="",this._traceDialogOpen=!0);break;case"delete":case"remove":i&&(await Ld(this.hass,i,o),await this._loadDeviceData());break;default:console.warn("Unhandled node action:",t)}}async _refreshNodesPageAfterMutation(e){var t;const a=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("meshcore-nodes-page");if(a&&"function"==typeof a.refreshAfterMutation)try{await a.refreshAfterMutation(e)}catch(e){console.error("Failed to refresh nodes-page after mutation:",e)}}_clearNodesPagePending(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("meshcore-nodes-page");t&&"function"==typeof t.clearPendingAction&&t.clearPendingAction()}};Fu.styles=[Md,bc(dc||(dc=pc`
      :host {
        display: block;
        width: 100%;
        height: 100vh;
      }

      .panel {
        display: flex;
        flex-direction: column;
        height: 100%;
        background: var(--primary-background-color, #fafafa);
      }

      .panel-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 16px;
        background: var(--card-background-color, #fff);
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
        flex-shrink: 0;
        gap: 12px;
      }

      .panel-title {
        font-size: 18px;
        font-weight: 500;
        color: var(--primary-text-color);
      }

      .device-info {
        font-size: 13px;
        color: var(--secondary-text-color);
      }

      /* The multi-entry device switcher is a custom dropdown (button +
         listbox) instead of a native <select>, so each option can
         render name + pubkey-prefix as separate visual lines and so the
         collapsed display does not duplicate the prefix. The
         single-entry case shares the same wrap class and same
         name+prefix sibling layout. node_name and identity keys are
         independent fields by firmware design; showing both makes the
         distinction visible to the user. */
      .device-info-wrap {
        position: relative; /* anchor for the absolutely-positioned menu */
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 6px;
        min-width: 0; /* allow children to shrink in narrow header */
      }

      .device-switcher {
        position: relative; /* anchor for absolute caret in column mode */
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 6px;
        padding: 8px 12px;
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 8px;
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color);
        font: inherit;
        font-size: 13px;
        text-align: left;
        box-sizing: border-box;
        min-height: 39px;
        line-height: normal;
        cursor: pointer;
        max-width: 250px;
      }

      .device-switcher:hover {
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.04));
      }

      .device-switcher-caret {
        margin-left: 4px;
        opacity: 0.6;
        font-size: 11px;
      }

      .device-prefix {
        font-size: 0.85em;
        opacity: 0.75;
        white-space: nowrap;
      }

      .device-switcher-menu {
        position: absolute;
        top: calc(100% + 4px);
        right: 0;
        z-index: 10;
        margin: 0;
        padding: 4px 0;
        list-style: none;
        width: max-content; /* size to widest item, not parent button */
        min-width: 140px; /* small floor so the menu never gets skinny */
        max-width: 280px;
        background: var(--card-background-color, #fff);
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }

      .device-switcher-menu li {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 8px 12px;
        cursor: pointer;
        gap: 0;
      }

      .device-switcher-menu li:hover {
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.05));
      }

      .device-switcher-menu li.active {
        background: rgba(3, 169, 244, 0.1);
      }

      .device-switcher-menu li .device-name {
        font-size: 13px;
        line-height: 1.2;
      }

      .device-switcher-menu li .device-prefix {
        line-height: 1.1;
      }

      /* Mobile / narrow header: stack name and prefix vertically inside
         the button (multi-entry) and inside the wrap (single-entry).
         The caret is pulled out of the flex column flow and pinned to
         the right edge of the button so it doesn't end up as a third
         row below the prefix. Extra right-padding leaves room for it.
         Two gates fire this: the panel's own [narrow] attribute (set by
         HA's responsive sidebar via the reflected 'narrow' property)
         and a viewport media query as a fallback for desktop browsers
         in narrow viewports. The :host([narrow]) and @media blocks are
         duplicated rather than comma-combined because CSS does not
         allow mixing a selector with an at-rule in a single rule list. */
      :host([narrow]) .device-info-wrap,
      :host([narrow]) .device-switcher {
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
        gap: 0;
      }

      :host([narrow]) .device-switcher {
        padding-right: 28px; /* room for the absolutely-positioned caret */
      }

      :host([narrow]) .device-switcher-caret {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        margin-left: 0;
      }

      :host([narrow]) .device-prefix {
        line-height: 1.1;
      }

      @media (max-width: 480px) {
        .device-info-wrap,
        .device-switcher {
          flex-direction: column;
          align-items: flex-end;
          justify-content: center;
          gap: 0;
        }
        .device-switcher {
          padding-right: 28px;
        }
        .device-switcher-caret {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          margin-left: 0;
        }
        .device-prefix {
          line-height: 1.1;
        }
      }

      .menu-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        border: none;
        background: none;
        cursor: pointer;
        color: var(--primary-text-color);
        border-radius: 50%;
        padding: 0;
        flex-shrink: 0;
      }

      .menu-icon:hover {
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.1));
      }

      .header-left {
        display: flex;
        align-items: center;
        gap: 12px;
        flex: 1;
      }

      .header-right {
        display: flex;
        align-items: center;
        gap: 12px;
        flex-shrink: 0;
      }

      .connection-status {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 4px 10px;
        border-radius: 12px;
        font-size: 12px;
        font-weight: 500;
        border: 1px solid;
      }

      .connection-status.online {
        color: #4caf50;
        border-color: rgba(76, 175, 80, 0.4);
        background: rgba(76, 175, 80, 0.08);
      }

      .connection-status.offline {
        color: var(--error-color, #db4437);
        border-color: rgba(219, 68, 55, 0.4);
        background: rgba(219, 68, 55, 0.08);
      }

      .status-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        flex-shrink: 0;
      }

      .status-dot.online {
        background: #4caf50;
      }

      .status-dot.offline {
        background: var(--error-color, #db4437);
      }

      .battery-indicator {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 12px;
        font-weight: 500;
        color: var(--secondary-text-color);
      }

      .battery-icon {
        position: relative;
        width: 18px;
        height: 10px;
        border: 1.5px solid var(--secondary-text-color, #888);
        border-radius: 2px;
        display: flex;
        align-items: center;
        padding: 1px;
      }

      .battery-icon::after {
        content: '';
        position: absolute;
        right: -4px;
        top: 50%;
        transform: translateY(-50%);
        width: 2px;
        height: 5px;
        background: var(--secondary-text-color, #888);
        border-radius: 0 1px 1px 0;
      }

      .battery-fill {
        height: 100%;
        border-radius: 1px;
        transition: width 0.3s ease;
      }

      .battery-fill.high {
        background: #4caf50;
      }

      .battery-fill.medium {
        background: #ff9800;
      }

      .battery-fill.low {
        background: var(--error-color, #db4437);
      }

      .battery-pct {
        min-width: 28px;
        text-align: right;
      }

      /* Mobile: compact header indicators */
      @media (max-width: 870px) {
        .connection-status {
          padding: 0;
          border: none;
          background: none !important;
          gap: 0;
          font-size: 0;
        }

        .connection-status .status-dot {
          width: 8px;
          height: 8px;
        }

        .battery-pct {
          display: none;
        }

        .battery-indicator {
          gap: 0;
        }

        .battery-icon {
          width: 13.5px;
          height: 7.5px;
          border-width: 1.25px;
        }

        .battery-icon::after {
          right: -3px;
          width: 1.5px;
          height: 4px;
        }
      }

      .tab-bar {
        display: flex;
        background: var(--card-background-color, #fff);
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
        flex-shrink: 0;
      }

      .tab-bar button {
        flex: 1;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 10px 12px;
        border: none;
        background: transparent;
        color: var(--secondary-text-color, #727272);
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        transition: color 0.2s, background 0.2s;
        border-bottom: 3px solid transparent;
        min-height: 48px;
      }

      .tab-bar button:hover {
        color: var(--primary-text-color);
        background: rgba(127, 127, 127, 0.06);
      }

      .tab-bar button.active {
        color: var(--primary-color, #03a9f4);
        border-bottom-color: var(--primary-color, #03a9f4);
      }

      .tab-short {
        display: none;
      }

      .tab-badge {
        min-width: 18px;
        height: 18px;
        padding: 0 5px;
        border-radius: 9px;
        background: var(--primary-color, #03a9f4);
        color: #fff;
        font-size: 11px;
        font-weight: 700;
        line-height: 18px;
        text-align: center;
      }

      /* Phones: a bottom bar with icons, like most chat apps. */
      @media (max-width: 870px) {
        .tab-bar {
          order: 10;
          border-bottom: none;
          border-top: 1px solid var(--divider-color, #e0e0e0);
          padding-bottom: env(safe-area-inset-bottom, 0);
        }
        .tab-bar button {
          flex-direction: column;
          gap: 2px;
          padding: 6px 2px;
          font-size: 11px;
          min-height: 56px;
          border-bottom: none;
          border-top: 3px solid transparent;
        }
        .tab-bar button.active {
          border-top-color: var(--primary-color, #03a9f4);
        }
        .tab-label {
          display: none;
        }
        .tab-short {
          display: inline;
        }
        .tab-badge {
          position: absolute;
          top: 4px;
          left: calc(50% + 6px);
        }
      }

      .page-container {
        flex: 1;
        overflow: hidden;
        display: flex;
      }

      .page-container > * {
        flex: 1;
        overflow: hidden;
      }

      .error-banner {
        padding: 12px 16px;
        background: rgba(219, 68, 55, 0.08);
        color: var(--error-color, #db4437);
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
        font-size: 13px;
      }

      .center-message {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: var(--secondary-text-color);
        padding: 24px;
      }

      .spinner {
        width: 32px;
        height: 32px;
        border: 3px solid var(--divider-color, #e0e0e0);
        border-top-color: var(--primary-color, #03a9f4);
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
      }

      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `))],hc([Sd({type:Object})],Fu.prototype,"hass",void 0),hc([Sd({type:Boolean,reflect:!0})],Fu.prototype,"narrow",void 0),hc([Sd({type:Object})],Fu.prototype,"panel",void 0),hc([Ad()],Fu.prototype,"_config",void 0),hc([Ad()],Fu.prototype,"_activeTab",void 0),hc([Ad()],Fu.prototype,"_devices",void 0),hc([Ad()],Fu.prototype,"_mapFocus",void 0),hc([Ad()],Fu.prototype,"_contacts",void 0),hc([Ad()],Fu.prototype,"_channels",void 0),hc([Ad()],Fu.prototype,"_selectedEntryId",void 0),hc([Ad()],Fu.prototype,"_loading",void 0),hc([Ad()],Fu.prototype,"_loadingStarted",void 0),hc([Ad()],Fu.prototype,"_error",void 0),hc([Ad()],Fu.prototype,"_unsubscribeList",void 0),hc([Ad()],Fu.prototype,"_pendingChatTarget",void 0),hc([Ad()],Fu.prototype,"_deviceDropdownOpen",void 0),hc([Ad()],Fu.prototype,"_traceDialogOpen",void 0),hc([Ad()],Fu.prototype,"_traceDialogContactName",void 0),hc([Ad()],Fu.prototype,"_traceDialogResult",void 0),hc([Ad()],Fu.prototype,"_traceDialogError",void 0),hc([Ad()],Fu.prototype,"_traceDialogPubkeyPrefix",void 0),hc([Ad()],Fu.prototype,"_traceDialogEntryId",void 0),hc([Ad()],Fu.prototype,"_traceDialogTargetContact",void 0),hc([Ad()],Fu.prototype,"_targetPickerOpen",void 0),hc([Ad()],Fu.prototype,"_pendingTraceEntryId",void 0),Fu=hc([kd("meshcore-chat-panel")],Fu);export{Fu as MeshCorePanel};
