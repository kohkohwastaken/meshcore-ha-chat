/*! meshcore-chat-panel v0.4.10 */
let e,t,i,n,a,o,r,s,l,c,d,p,h,u,m,g,f,v,b,y,_,x,w,k,$,C,S,M,z,A,R,I,O,D,q,T,F,E,N,j,L,P,B,H,V,K,U,W,G,X,Y,Q,J,Z,ee,te,ie,ne,ae,oe,re,se,le,ce,de,pe,he,ue,me,ge,fe,ve,be,ye,_e,xe,we,ke,$e,Ce,Se,Me,ze,Ae,Re,Ie,Oe,De,qe,Te,Fe,Ee,Ne,je,Le,Pe,Be,He,Ve,Ke,Ue,We,Ge,Xe,Ye,Qe,Je,Ze,et,tt,it,nt,at,ot,rt,st,lt,ct,dt,pt,ht,ut,mt,gt,ft,vt,bt,yt,_t,xt,wt,kt,$t,Ct,St,Mt,zt,At,Rt,It,Ot,Dt,qt,Tt,Ft,Et,Nt,jt,Lt,Pt,Bt,Ht,Vt,Kt,Ut,Wt,Gt,Xt,Yt,Qt,Jt,Zt,ei,ti,ii,ni,ai,oi,ri,si,li,ci,di,pi,hi,ui,mi,gi,fi,vi,bi,yi,_i,xi,wi,ki,$i,Ci,Si,Mi,zi,Ai,Ri,Ii,Oi,Di,qi,Ti,Fi,Ei,Ni,ji,Li,Pi,Bi,Hi,Vi,Ki,Ui,Wi,Gi,Xi,Yi,Qi,Ji,Zi,en,tn,nn,an,on,rn,sn,ln,cn,dn,pn,hn,un,mn,gn,fn,vn,bn,yn,_n,xn,wn,kn,$n,Cn,Sn,Mn,zn,An,Rn,In,On,Dn,qn,Tn,Fn,En,Nn,jn,Ln,Pn,Bn,Hn,Vn,Kn,Un,Wn,Gn,Xn,Yn,Qn,Jn,Zn,ea,ta,ia,na,aa,oa,ra,sa,la,ca,da,pa,ha,ua,ma,ga,fa,va,ba,ya,_a,xa,wa,ka,$a,Ca,Sa,Ma,za,Aa,Ra,Ia,Oa,Da,qa,Ta,Fa,Ea,Na,ja,La,Pa,Ba,Ha,Va,Ka,Ua,Wa,Ga,Xa,Ya,Qa,Ja,Za,eo,to,io,no,ao,oo,ro,so,lo,co,po,ho,uo,mo,go,fo,vo,bo,yo,_o,xo,wo,ko,$o,Co,So,Mo,zo,Ao,Ro,Io,Oo,Do,qo,To,Fo,Eo,No,jo,Lo,Po,Bo,Ho,Vo,Ko,Uo,Wo,Go,Xo,Yo,Qo,Jo,Zo,er,tr,ir,nr,ar,or,rr,sr,lr,cr,dr,pr,hr,ur,mr,gr,fr,vr,br,yr,_r,xr,wr,kr,$r,Cr,Sr,Mr,zr,Ar,Rr,Ir,Or,Dr,qr,Tr,Fr,Er,Nr,jr,Lr,Pr,Br,Hr,Vr,Kr,Ur,Wr,Gr,Xr,Yr,Qr,Jr,Zr,es,ts,is,ns,as,os,rs,ss,ls,cs,ds,ps,hs,us,ms,gs,fs,vs,bs,ys,_s,xs,ws,ks,$s,Cs,Ss,Ms,zs,As,Rs,Is,Os,Ds,qs,Ts,Fs,Es,Ns,js,Ls,Ps,Bs,Hs,Vs,Ks,Us,Ws,Gs,Xs,Ys,Qs,Js,Zs,el,tl,il,nl,al,ol,rl,sl,ll,cl,dl,pl,hl,ul,ml,gl,fl,vl,bl=e=>e;function yl(e,t,i,n){var a,o=arguments.length,r=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(o<3?a(r):o>3?a(t,i,r):a(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r}"function"==typeof SuppressedError&&SuppressedError;const _l=globalThis,xl=_l.ShadowRoot&&(void 0===_l.ShadyCSS||_l.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,wl=Symbol(),kl=new WeakMap;let $l=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==wl)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(xl&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=kl.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&kl.set(t,e))}return e}toString(){return this.cssText}};const Cl=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[n+1],e[0]);return new $l(i,e,wl)},Sl=xl?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new $l("string"==typeof e?e:e+"",void 0,wl))(t)})(e):e,{is:Ml,defineProperty:zl,getOwnPropertyDescriptor:Al,getOwnPropertyNames:Rl,getOwnPropertySymbols:Il,getPrototypeOf:Ol}=Object,Dl=globalThis,ql=Dl.trustedTypes,Tl=ql?ql.emptyScript:"",Fl=Dl.reactiveElementPolyfillSupport,El=(e,t)=>e,Nl={toAttribute(e,t){switch(t){case Boolean:e=e?Tl:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},jl=(e,t)=>!Ml(e,t),Ll={attribute:!0,type:String,converter:Nl,reflect:!1,useDefault:!1,hasChanged:jl};null!==(e=Symbol.metadata)&&void 0!==e||(Symbol.metadata=Symbol("metadata")),null!==(t=Dl.litPropertyMetadata)&&void 0!==t||(Dl.litPropertyMetadata=new WeakMap);let Pl=class extends HTMLElement{static addInitializer(e){var t;this._$Ei(),(null!==(t=this.l)&&void 0!==t?t:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ll){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(e,i,t);void 0!==n&&zl(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){var n;const{get:a,set:o}=null!==(n=Al(this.prototype,e))&&void 0!==n?n:{get(){return this[t]},set(e){this[t]=e}};return{get:a,set(t){const n=null==a?void 0:a.call(this);null!=o&&o.call(this,t),this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var t;return null!==(t=this.elementProperties.get(e))&&void 0!==t?t:Ll}static _$Ei(){if(this.hasOwnProperty(El("elementProperties")))return;const e=Ol(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(El("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(El("properties"))){const e=this.properties,t=[...Rl(e),...Il(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(Sl(e))}else void 0!==e&&t.push(Sl(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach(e=>e(this))}addController(e){var t,i;(null!==(t=this._$EO)&&void 0!==t?t:this._$EO=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$EO)||void 0===t||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(xl)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of t){const t=document.createElement("style"),n=_l.litNonce;void 0!==n&&t.setAttribute("nonce",n),t.textContent=i.cssText,e.appendChild(t)}})(t,this.constructor.elementStyles),t}connectedCallback(){var e,t;null!==(e=this.renderRoot)&&void 0!==e||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$EO)||void 0===t||t.forEach(e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)})}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$EO)||void 0===e||e.forEach(e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,i);if(void 0!==n&&!0===i.reflect){var a;const o=(void 0!==(null===(a=i.converter)||void 0===a?void 0:a.toAttribute)?i.converter:Nl).toAttribute(t,i.type);this._$Em=e,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(e,t){const i=this.constructor,n=i._$Eh.get(e);if(void 0!==n&&this._$Em!==n){var a,o,r;const e=i.getPropertyOptions(n),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(a=e.converter)||void 0===a?void 0:a.fromAttribute)?e.converter:Nl;this._$Em=n;const l=s.fromAttribute(t,e.type);this[n]=null!==(o=null!=l?l:null===(r=this._$Ej)||void 0===r?void 0:r.get(n))&&void 0!==o?o:l,this._$Em=null}}requestUpdate(e,t,i,n=!1,a){if(void 0!==e){var o,r;const s=this.constructor;if(!1===n&&(a=this[e]),null!=i||(i=s.getPropertyOptions(e)),!((null!==(o=i.hasChanged)&&void 0!==o?o:jl)(a,t)||i.useDefault&&i.reflect&&a===(null===(r=this._$Ej)||void 0===r?void 0:r.get(e))&&!this.hasAttribute(s._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:n,wrapped:a},o){var r,s,l;i&&!(null!==(r=this._$Ej)&&void 0!==r?r:this._$Ej=new Map).has(e)&&(this._$Ej.set(e,null!==(s=null!=o?o:t)&&void 0!==s?s:this[e]),!0!==a||void 0!==o)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===n&&this._$Em!==e&&(null!==(l=this._$Eq)&&void 0!==l?l:this._$Eq=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){var e;if(null!==(e=this.renderRoot)&&void 0!==e||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,n=this[e];!0!==t||this._$AL.has(e)||void 0===n||this.C(e,void 0,i,n)}}let t=!1;const i=this._$AL;try{var n;t=this.shouldUpdate(i),t?(this.willUpdate(i),null!==(n=this._$EO)&&void 0!==n&&n.forEach(e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)}),this.update(i)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null!==(t=this._$EO)&&void 0!==t&&t.forEach(e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}};Pl.elementStyles=[],Pl.shadowRootOptions={mode:"open"},Pl[El("elementProperties")]=new Map,Pl[El("finalized")]=new Map,null!=Fl&&Fl({ReactiveElement:Pl}),(null!==(i=Dl.reactiveElementVersions)&&void 0!==i?i:Dl.reactiveElementVersions=[]).push("2.1.2");const Bl=globalThis,Hl=e=>e,Vl=Bl.trustedTypes,Kl=Vl?Vl.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ul="$lit$",Wl=`lit$${Math.random().toFixed(9).slice(2)}$`,Gl="?"+Wl,Xl=`<${Gl}>`,Yl=document,Ql=()=>Yl.createComment(""),Jl=e=>null===e||"object"!=typeof e&&"function"!=typeof e,Zl=Array.isArray,ec="[ \t\n\f\r]",tc=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ic=/-->/g,nc=/>/g,ac=RegExp(`>|${ec}(?:([^\\s"'>=/]+)(${ec}*=${ec}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),oc=/'/g,rc=/"/g,sc=/^(?:script|style|textarea|title)$/i,lc=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),cc=lc(1),dc=lc(2),pc=Symbol.for("lit-noChange"),hc=Symbol.for("lit-nothing"),uc=new WeakMap,mc=Yl.createTreeWalker(Yl,129);function gc(e,t){if(!Zl(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==Kl?Kl.createHTML(t):t}const fc=(e,t)=>{const i=e.length-1,n=[];let a,o=2===t?"<svg>":3===t?"<math>":"",r=tc;for(let t=0;t<i;t++){const i=e[t];let s,l,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===tc?"!--"===l[1]?r=ic:void 0!==l[1]?r=nc:void 0!==l[2]?(sc.test(l[2])&&(a=RegExp("</"+l[2],"g")),r=ac):void 0!==l[3]&&(r=ac):r===ac?">"===l[0]?(r=null!=a?a:tc,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,s=l[1],r=void 0===l[3]?ac:'"'===l[3]?rc:oc):r===rc||r===oc?r=ac:r===ic||r===nc?r=tc:(r=ac,a=void 0);const p=r===ac&&e[t+1].startsWith("/>")?" ":"";o+=r===tc?i+Xl:c>=0?(n.push(s),i.slice(0,c)+Ul+i.slice(c)+Wl+p):i+Wl+(-2===c?t:p)}return[gc(e,o+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),n]};class vc{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let a=0,o=0;const r=e.length-1,s=this.parts,[l,c]=fc(e,t);if(this.el=vc.createElement(l,i),mc.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=mc.nextNode())&&s.length<r;){if(1===n.nodeType){if(n.hasAttributes())for(const e of n.getAttributeNames())if(e.endsWith(Ul)){const t=c[o++],i=n.getAttribute(e).split(Wl),r=/([.?@])?(.*)/.exec(t);s.push({type:1,index:a,name:r[2],strings:i,ctor:"."===r[1]?wc:"?"===r[1]?kc:"@"===r[1]?$c:xc}),n.removeAttribute(e)}else e.startsWith(Wl)&&(s.push({type:6,index:a}),n.removeAttribute(e));if(sc.test(n.tagName)){const e=n.textContent.split(Wl),t=e.length-1;if(t>0){n.textContent=Vl?Vl.emptyScript:"";for(let i=0;i<t;i++)n.append(e[i],Ql()),mc.nextNode(),s.push({type:2,index:++a});n.append(e[t],Ql())}}}else if(8===n.nodeType)if(n.data===Gl)s.push({type:2,index:a});else{let e=-1;for(;-1!==(e=n.data.indexOf(Wl,e+1));)s.push({type:7,index:a}),e+=Wl.length-1}a++}}static createElement(e,t){const i=Yl.createElement("template");return i.innerHTML=e,i}}function bc(e,t,i=e,n){var a,o,r,s,l;if(t===pc)return t;let c=void 0!==n?null===(a=i._$Co)||void 0===a?void 0:a[n]:i._$Cl;const d=Jl(t)?void 0:t._$litDirective$;return(null===(o=c)||void 0===o?void 0:o.constructor)!==d&&(null!==(r=c)&&void 0!==r&&null!==(s=r._$AO)&&void 0!==s&&s.call(r,!1),void 0===d?c=void 0:(c=new d(e),c._$AT(e,i,n)),void 0!==n?(null!==(l=i._$Co)&&void 0!==l?l:i._$Co=[])[n]=c:i._$Cl=c),void 0!==c&&(t=bc(e,c._$AS(e,t.values),c,n)),t}class yc{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:n}=this._$AD,a=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:Yl).importNode(i,!0);mc.currentNode=a;let o=mc.nextNode(),r=0,s=0,l=n[0];for(;void 0!==l;){var c;if(r===l.index){let t;2===l.type?t=new _c(o,o.nextSibling,this,e):1===l.type?t=new l.ctor(o,l.name,l.strings,this,e):6===l.type&&(t=new Cc(o,this,e)),this._$AV.push(t),l=n[++s]}r!==(null===(c=l)||void 0===c?void 0:c.index)&&(o=mc.nextNode(),r++)}return mc.currentNode=Yl,a}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class _c{get _$AU(){var e,t;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cv}constructor(e,t,i,n){var a;this.type=2,this._$AH=hc,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cv=null===(a=null==n?void 0:n.isConnected)||void 0===a||a}get parentNode(){var e;let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null===(e=t)||void 0===e?void 0:e.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=bc(this,e,t),Jl(e)?e===hc||null==e||""===e?(this._$AH!==hc&&this._$AR(),this._$AH=hc):e!==this._$AH&&e!==pc&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>Zl(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==hc&&Jl(this._$AH)?this._$AA.nextSibling.data=e:this.T(Yl.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:n}=e,a="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=vc.createElement(gc(n.h,n.h[0]),this.options)),n);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===a)this._$AH.p(i);else{const e=new yc(a,this),t=e.u(this.options);e.p(i),this.T(t),this._$AH=e}}_$AC(e){let t=uc.get(e.strings);return void 0===t&&uc.set(e.strings,t=new vc(e)),t}k(e){Zl(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const a of e)n===t.length?t.push(i=new _c(this.O(Ql()),this.O(Ql()),this,this.options)):i=t[n],i._$AI(a),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e!==this._$AB;){var i;const t=Hl(e).nextSibling;Hl(e).remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cv=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class xc{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,n,a){this.type=1,this._$AH=hc,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=a,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=hc}_$AI(e,t=this,i,n){const a=this.strings;let o=!1;if(void 0===a)e=bc(this,e,t,0),o=!Jl(e)||e!==this._$AH&&e!==pc,o&&(this._$AH=e);else{const n=e;let r,s;for(e=a[0],r=0;r<a.length-1;r++)s=bc(this,n[i+r],t,r),s===pc&&(s=this._$AH[r]),o||(o=!Jl(s)||s!==this._$AH[r]),s===hc?e=hc:e!==hc&&(e+=(null!=s?s:"")+a[r+1]),this._$AH[r]=s}o&&!n&&this.j(e)}j(e){e===hc?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class wc extends xc{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===hc?void 0:e}}class kc extends xc{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==hc)}}class $c extends xc{constructor(e,t,i,n,a){super(e,t,i,n,a),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=bc(this,e,t,0))&&void 0!==i?i:hc)===pc)return;const n=this._$AH,a=e===hc&&n!==hc||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==hc&&(n===hc||a);a&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(t=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==t?t:this.element,e):this._$AH.handleEvent(e)}}class Cc{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){bc(this,e)}}const Sc=Bl.litHtmlPolyfillSupport;null!=Sc&&Sc(vc,_c),(null!==(n=Bl.litHtmlVersions)&&void 0!==n?n:Bl.litHtmlVersions=[]).push("3.3.2");const Mc=globalThis;let zc=class extends Pl{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{var n;const a=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:t;let o=a._$litPart$;if(void 0===o){var r;const e=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;a._$litPart$=o=new _c(t.insertBefore(Ql(),e),e,void 0,null!=i?i:{})}return o._$AI(e),o})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return pc}};zc._$litElement$=!0,zc.finalized=!0,null===(a=Mc.litElementHydrateSupport)||void 0===a||a.call(Mc,{LitElement:zc});const Ac=Mc.litElementPolyfillSupport;null==Ac||Ac({LitElement:zc}),(null!==(o=Mc.litElementVersions)&&void 0!==o?o:Mc.litElementVersions=[]).push("4.2.2");const Rc=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},Ic={attribute:!0,type:String,converter:Nl,reflect:!1,hasChanged:jl},Oc=(e=Ic,t,i)=>{const{kind:n,metadata:a}=i;let o=globalThis.litPropertyMetadata.get(a);if(void 0===o&&globalThis.litPropertyMetadata.set(a,o=new Map),"setter"===n&&((e=Object.create(e)).wrapped=!0),o.set(i.name,e),"accessor"===n){const{name:n}=i;return{set(i){const a=t.get.call(this);t.set.call(this,i),this.requestUpdate(n,a,e,!0,i)},init(t){return void 0!==t&&this.C(n,void 0,e,t),t}}}if("setter"===n){const{name:n}=i;return function(i){const a=this[n];t.call(this,i),this.requestUpdate(n,a,e,!0,i)}}throw Error("Unsupported decorator location: "+n)};function Dc(e){return(t,i)=>"object"==typeof i?Oc(e,t,i):((e,t,i)=>{const n=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),n?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}function qc(e){return Dc({...e,state:!0,attribute:!1})}const Tc=Cl(r||(r=bl`
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
`)),Fc=/^<[^>]+>\s*/,Ec=/@\[([^\]]+)\]/g,Nc=/@(\w+)/g,jc={recipient_type_entity:"select.meshcore_recipient_type",channel_entity:"select.meshcore_channel",contact_entity:"select.meshcore_contact",channel_entity_pattern:"binary_sensor.meshcore_{prefix}_ch_{idx}_messages",contact_entity_pattern:"binary_sensor.meshcore_{prefix}_{contact}_messages",domain_filter:"meshcore"},Lc={...jc,hours_to_show:48,initial_hours:1,max_messages:500,show_date_separators:!0,group_messages:!0,group_timeout:300,timestamp_format:"relative",update_mode:"auto",refresh_interval:30,enable_cache:!0,cache_ttl:86400,cache_max_size:5242880};async function Pc(e){try{return(await e.callWS({type:"meshcore_chat/get_devices"})).devices||[]}catch(e){return[]}}async function Bc(e,t){try{const i={type:"meshcore_chat/get_contacts"};return t&&(i.entry_id=t),(await e.callWS(i)).contacts||[]}catch(e){return[]}}async function Hc(e,t){try{const i={type:"meshcore_chat/get_channels"};return t&&(i.entry_id=t),(await e.callWS(i)).channels||[]}catch(e){return[]}}async function Vc(e,t){try{const i={type:"meshcore_chat/get_device_config"};return t&&(i.entry_id=t),await e.callWS(i)}catch(e){throw new Error("Failed to get device configuration")}}async function Kc(e,t,i){try{const n={type:"meshcore_chat/set_device_config",settings:t};return i&&(n.entry_id=i),await e.callWS(n)}catch(e){return{success:!1,changed:[]}}}async function Uc(e,t,i,n){try{const a={type:"meshcore_chat/execute_local",command:t};return i&&(a.args=i),n&&(a.entry_id=n),await e.callWS(a)}catch(e){const t=e;return{response:t&&t.message?t.code?`${t.message} (${t.code})`:t.message:String(e),success:!1,timestamp:(new Date).toISOString()}}}async function Wc(e,t,i,n){try{const a={type:"meshcore_chat/execute_remote",target_prefix:t,command:i};return n&&(a.entry_id=n),await e.callWS(a)}catch(e){const t=e;return{response:t&&t.message?t.code?`${t.message} (${t.code})`:t.message:String(e),success:!1,timestamp:(new Date).toISOString()}}}async function Gc(e,t,i,n){try{const a={type:"meshcore_chat/add_contact",public_key:t};return i&&(a.name=i),n&&(a.entry_id=n),await e.callWS(a)}catch(e){return{success:!1}}}async function Xc(e,t,i){try{const n={type:"meshcore_chat/remove_contact",public_key:t};return i&&(n.entry_id=i),await e.callWS(n)}catch(e){return{success:!1}}}async function Yc(e,t="all",i={}){try{var n,a;const o={type:"meshcore_chat/get_contacts_paginated",category:t,limit:null!==(n=i.limit)&&void 0!==n?n:50,offset:null!==(a=i.offset)&&void 0!==a?a:0};return void 0!==i.nodeType&&(o.node_type=i.nodeType),i.search&&(o.search=i.search),i.entryId&&(o.entry_id=i.entryId),i.sortBy&&(o.sort_by=i.sortBy),await e.callWS(o)}catch(e){return{contacts:[],total:0,counts:{clients:0,repeaters:0,room_servers:0,sensors:0}}}}class Qc{constructor(){this._counts={},this._lastRead={},this._subscribers=new Set,this._markReadRequestedHandler=null,this._readProgress=null,this._postSwitchTimerHandler=null}subscribe(e){return this._subscribers.add(e),()=>{this._subscribers.delete(e)}}onMarkReadRequested(e){this._markReadRequestedHandler=e}onPostSwitchTimerFire(e){this._postSwitchTimerHandler=e}requestMarkRead(e){e&&this._markReadRequestedHandler&&this._markReadRequestedHandler(e)}_notify(){for(const e of[...this._subscribers])try{e()}catch(e){console.error("[UnreadController] subscriber callback threw",e)}}ingestBackendData(e,t){var i,n;this._counts={...null!==(i=null==e?void 0:e.unread)&&void 0!==i?i:{}},this._lastRead={...null!==(n=null==e?void 0:e.last_read)&&void 0!==n?n:{}},this._notify()}clearEntity(e){e&&this._counts[e]&&(this._counts={...this._counts,[e]:0},this._notify())}get counts(){return this._counts}get lastRead(){return this._lastRead}beginConversation(e,t){var i;this._clearPostSwitchTimer();const n={entityId:e,anchorId:e&&null!==(i=this._lastRead[e])&&void 0!==i?i:null,unreadCountAtSelection:t,graceUntil:Date.now()+1e3,postSwitchTimer:null,markReadFired:!1,lastMarkReadIdSent:null};this._readProgress=n,n.postSwitchTimer=setTimeout(()=>{var e;this._readProgress===n&&(n.postSwitchTimer=null,null===(e=this._postSwitchTimerHandler)||void 0===e||e.call(this))},1e3)}endConversation(){this._clearPostSwitchTimer(),this._readProgress=null}_clearPostSwitchTimer(){const e=this._readProgress;null!=e&&e.postSwitchTimer&&(clearTimeout(e.postSwitchTimer),e.postSwitchTimer=null)}resetUnreadCountAtSelection(){this._readProgress&&(this._readProgress.unreadCountAtSelection=0)}maybeReanchorOnLateData(e){const t=this._readProgress;if(!t||t.entityId!==e)return!1;if(null!==t.anchorId)return!1;if(t.markReadFired)return!1;const i=this._lastRead[e];return!!i&&(t.anchorId=i,!0)}onScrollState(e){return this._tryAdvanceCursor(e.entityId,e.lastMessageVisible,e.hasNewerMessages,e.bufferTailId,!1)}onPillJump(e){return this._tryAdvanceCursor(e.entityId,!0,!1,e.bufferTailId,!0)}_tryAdvanceCursor(e,t,i,n,a){if(!e)return!1;const o=this._readProgress;return!(!o||o.entityId!==e||!a&&Date.now()<o.graceUntil||i||!t||null!==n&&n===o.lastMarkReadIdSent||(o.lastMarkReadIdSent=n,o.markReadFired=!0,this.requestMarkRead(e),0))}badgeCount(e,t,i){if(!e)return 0;const n=this._counts;if(i&&n[i])return n[i];const a=/^\d+$/.test(e),o=t?`meshcore_${t}_ch_${e}_messages`:null;for(const[t,i]of Object.entries(n))if(!(i<=0))if(a){if(o){if(t.endsWith(o))return i}else if(t.endsWith(`_ch_${e}_messages`))return i}else{const n=e.substring(0,6);if(t.endsWith(`_${n}_messages`))return i}return 0}dividerAfterGroupIdx(e){const t=this._readProgress;if(!t)return null;let i=null;if(t.anchorId){let n=0;for(const a of e)if("date-separator"!==a.type){if(a.group.messages.some(e=>e.id===t.anchorId)){i=n;break}n++}}if(null!==i){let t=0;for(const n of e)if("date-separator"!==n.type){if(t>i&&!n.group.isOutgoing)return t;t++}return null}if(t.unreadCountAtSelection>0){const i=e.filter(e=>"date-separator"!==e.type).length,n=i-t.unreadCountAtSelection;return n>=0?n:0}return null}cursorAtTail(e,t){return!(!e||null===t)&&this._lastRead[e]===t}}function Jc(e){for(let t=e.length-1;t>=0;t--){const i=e[t].id;if(!i.startsWith("optimistic_"))return i}return null}const Zc=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function ed(e){const t=(new TextEncoder).encode(e),i=t.length,n=8*i,a=i+9+63&-64,o=new Uint8Array(a);o.set(t),o[i]=128;const r=new DataView(o.buffer);r.setUint32(a-4,n,!1);let s=1779033703,l=3144134277,c=1013904242,d=2773480762,p=1359893119,h=2600822924,u=528734635,m=1541459225;const g=new Int32Array(64);for(let e=0;e<a;e+=64){for(let t=0;t<16;t++)g[t]=r.getInt32(e+4*t,!1);for(let e=16;e<64;e++){const t=(g[e-15]>>>7|g[e-15]<<25)^(g[e-15]>>>18|g[e-15]<<14)^g[e-15]>>>3,i=(g[e-2]>>>17|g[e-2]<<15)^(g[e-2]>>>19|g[e-2]<<13)^g[e-2]>>>10;g[e]=g[e-16]+t+g[e-7]+i|0}let t=s,i=l,n=c,a=d,o=p,f=h,v=u,b=m;for(let e=0;e<64;e++){const r=b+((o>>>6|o<<26)^(o>>>11|o<<21)^(o>>>25|o<<7))+(o&f^~o&v)+Zc[e]+g[e]|0,s=t&i^t&n^i&n;b=v,v=f,f=o,o=a+r|0,a=n,n=i,i=t,t=r+(((t>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10))+s|0)|0}s=s+t|0,l=l+i|0,c=c+n|0,d=d+a|0,p=p+o|0,h=h+f|0,u=u+v|0,m=m+b|0}const f=e=>(e>>>0).toString(16).padStart(8,"0");return f(s)+f(l)+f(c)+f(d)+f(p)+f(h)+f(u)+f(m)}function td(e){const t=[],i=new Set;let n;const a=new RegExp(Ec.source,"g");for(;null!==(n=a.exec(e));){const e=n[1];i.has(e)||(i.add(e),t.push(e))}const o=new RegExp(Nc.source,"g");for(;null!==(n=o.exec(e));){const e=n[1];i.has(e)||(i.add(e),t.push(e))}return t}function id(e){if(!e||0===e.length)return{};let t,i;for(const n of e)void 0===t&&"string"==typeof n.flood_scope&&(t=n.flood_scope),void 0===i&&"boolean"==typeof n.region_scope&&(i=n.region_scope);return{floodScope:t,regionScope:i}}function nd(e){var t,i;const n=id(e.rx_log_data);return{id:e.id,sendId:e.send_id,sender:e.sender,text:e.text,timestamp:new Date(e.timestamp),senderTimestamp:e.sender_timestamp,isOutgoing:e.outgoing,isSystem:!1,raw:e.text,mentions:td(e.text),rxLogData:e.rx_log_data,deliveryStatus:e.delivery_status?{status:e.delivery_status,ackReceived:e.ack_received,repeatsObservable:e.repeats_observable,collecting:e.collecting,repeaterCount:e.repeater_count,roundTripMs:e.round_trip_ms}:void 0,repeaterCount:e.repeater_count,floodScope:null!==(t=e.flood_scope)&&void 0!==t?t:n.floodScope,regionScope:null!==(i=e.region_scope)&&void 0!==i?i:n.regionScope}}function ad(e,t){return e.getFullYear()!==t.getFullYear()||e.getMonth()!==t.getMonth()||e.getDate()!==t.getDate()}function od(e){const t=new Date,i=new Date(t.getFullYear(),t.getMonth(),t.getDate()),n=new Date(e.getFullYear(),e.getMonth(),e.getDate()),a=Math.floor((i.getTime()-n.getTime())/864e5);return 0===a?"Today":1===a?"Yesterday":a<7?e.toLocaleDateString(void 0,{weekday:"long"}):e.toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric"})}function rd(e,t){switch(t){case"relative":default:return function(e){const t=Date.now()-e.getTime(),i=Math.floor(t/1e3),n=Math.floor(i/60),a=Math.floor(n/60);return i<60?"now":n<60?`${n}m`:a<24?`${a}h`:e.toLocaleDateString(void 0,{month:"short",day:"numeric"})}(e);case"time":return e.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"});case"datetime":return e.toLocaleString(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}}class sd{constructor(e){this._messages=[],this._pendingCalls=new Map,this._loading=!1,this._error=null,this._entityId=null,this._hass=null,this._pollTimer=null,this._realtimeSubscriptions=[],this._realtimeGeneration=0,this._retryCount=0,this._onChange=null,this._fetchDebounce=null,this._active=!1,this._hasOlderMessages=!0,this._loadingOlder=!1,this._hasNewerMessages=!1,this._loadingNewer=!1,this._newMessagesWhileAway=0,this._userAtBottom=!1,this._config=e}get messages(){return this._messages}get loading(){return this._loading}get error(){return this._error}get entityId(){return this._entityId}get loadingOlder(){return this._loadingOlder}get hasOlderMessages(){return this._hasOlderMessages}get loadingNewer(){return this._loadingNewer}get hasNewerMessages(){return this._hasNewerMessages}get newMessagesWhileAway(){return this._newMessagesWhileAway}setUserAtBottom(e){this._userAtBottom!==e&&(this._userAtBottom=e,e&&!this._hasNewerMessages&&this._newMessagesWhileAway>0&&(this._newMessagesWhileAway=0,this._notify()))}resetNewMessagesCounter(){0!==this._newMessagesWhileAway&&(this._newMessagesWhileAway=0,this._notify())}setOnChange(e){this._onChange=e}setHass(e){this._hass=e}setConfig(e){const t=e.entry_id!==this._config.entry_id;this._config=e,t&&(this._pendingCalls.clear(),this._stopUpdates(),this._entityId=null,this._messages=[],this._active=!1,this._notify())}async switchEntity(e,t=null){if(e!==this._entityId){if(this._stopUpdates(),this._entityId=e,this._pendingCalls.clear(),this._messages=[],this._error=null,this._retryCount=0,this._hasOlderMessages=!0,this._loadingOlder=!1,this._hasNewerMessages=!1,this._loadingNewer=!1,this._newMessagesWhileAway=0,this._userAtBottom=!1,!e)return this._active=!1,void this._notify();this._active=!0,this._startUpdates(e),t?await this._fetchAroundAnchor(e,t):await this._fetchMessages(e)}}async refresh(){this._entityId&&await this._fetchMessages(this._entityId)}addOptimisticMessage(e,t){const i=new Date,n=`optimistic_${i.getTime()}_${Math.random().toString(36).slice(2,8)}`,a={id:n,sender:e,text:t,timestamp:i,isOutgoing:!0,isSystem:!1,raw:`${e}: ${t}`,mentions:td(t)};return this._messages=[...this._messages,a],this._pendingCalls.set(n,{...a}),this._notify(),n}confirmOptimisticMessage(e){this._pendingCalls.delete(e)}markOptimisticFailed(e){const t=this._pendingCalls.get(e);if(this._pendingCalls.delete(e),!t)return;const i={...t,deliveryStatus:{status:"failed",collecting:!1}};this._messages=[...this._messages.filter(t=>t.id!==e),i],this._messages.sort((e,t)=>e.timestamp.getTime()-t.timestamp.getTime()),this._notify()}async loadOlderMessages(){if(!this._loadingOlder&&this._hasOlderMessages&&this._hass&&this._entityId){this._loadingOlder=!0,this._notify();try{const e=this._messages.find(e=>!e.id.startsWith("rt_")&&!e.id.startsWith("optimistic_")),t={type:"meshcore_chat/get_stored_messages",entity_id:this._entityId,limit:50};e&&(t.before=e.id);const i=await this._hass.callWS(t),n=i.messages.map(nd);this._hasOlderMessages=i.has_more;const a=new Set(this._messages.map(e=>e.id)),o=n.filter(e=>!a.has(e.id));o.length>0&&(this._messages=[...o,...this._messages],this._messages.sort((e,t)=>e.timestamp.getTime()-t.timestamp.getTime()))}catch(e){}finally{this._loadingOlder=!1,this._notify()}}}async loadNewerMessages(){if(!this._loadingNewer&&this._hasNewerMessages&&this._hass&&this._entityId){this._loadingNewer=!0,this._notify();try{let t;for(let e=this._messages.length-1;e>=0;e--){const i=this._messages[e].id;if(!i.startsWith("rt_")&&!i.startsWith("optimistic_")){t=i;break}}const i={type:"meshcore_chat/get_stored_messages",entity_id:this._entityId,limit:50};t&&(i.after=t);const n=await this._hass.callWS(i),a=n.messages.map(nd);this._hasNewerMessages=n.has_more;const o=new Set(a.map(e=>e.id));this._messages=this._messages.filter(e=>!e.id.startsWith("rt_")||!o.has(e.id.substring(3)));const r=new Set(this._messages.map(e=>e.id)),s=a.filter(e=>!r.has(e.id));if(s.length>0){var e;this._messages=[...this._messages,...s],this._messages.sort((e,t)=>e.timestamp.getTime()-t.timestamp.getTime());const t=null!==(e=this._config.max_messages)&&void 0!==e?e:500;this._messages.length>t&&(this._messages=this._messages.slice(-t),this._hasOlderMessages=!0)}}catch(e){}finally{this._loadingNewer=!1,this._notify()}}}async fetchAroundTimestamp(e){const t=new Date(e).getTime(),i=this._messages.find(e=>Math.abs(e.timestamp.getTime()-t)<2e3);if(i)return!0;let n=0;for(;this._hasOlderMessages&&n<20;){await this.loadOlderMessages(),n++;const e=this._messages.find(e=>Math.abs(e.timestamp.getTime()-t)<2e3);if(e)return!0}return!1}pause(){this._stopUpdates(),this._active=!1,this._fetchDebounce&&(clearTimeout(this._fetchDebounce),this._fetchDebounce=null)}async resume(){this._entityId&&!this._active&&(this._active=!0,this._startUpdates(this._entityId),await this._fetchMessages(this._entityId))}destroy(){this._pendingCalls.clear(),this._stopUpdates(),this._active=!1,this._fetchDebounce&&(clearTimeout(this._fetchDebounce),this._fetchDebounce=null),this._onChange=null}_keepOptimistic(e,t){var i;if("failed"===(null===(i=e.deliveryStatus)||void 0===i?void 0:i.status))return!0;const n=e.sendId?t.find(t=>t.sendId===e.sendId||t.id===e.sendId):void 0;return!n}async _fetchMessages(e){if(this._hass){this._loading=!0,this._notify();try{var t;const i=50,n=await this._hass.callWS({type:"meshcore_chat/get_stored_messages",entity_id:e,limit:i}),a=n.messages.map(nd);this._hasOlderMessages=n.has_more;const o=new Set(a.map(e=>e.id)),r=this._messages.filter(e=>{if(e.id.startsWith("optimistic_"))return this._keepOptimistic(e,a);if(e.id.startsWith("rt_")){const t=e.id.substring(3);return!o.has(t)}return!1});this._messages=[...a,...r],this._messages.sort((e,t)=>e.timestamp.getTime()-t.timestamp.getTime());const s=null!==(t=this._config.max_messages)&&void 0!==t?t:500;this._messages.length>s&&(this._messages=this._messages.slice(-s),this._hasOlderMessages=!0),this._error=null,this._retryCount=0}catch(e){const t=e instanceof Error?e.message:String(e);this._error=`Failed to fetch messages: ${t}`,this._retryCount++}finally{this._loading=!1,this._notify()}}}async _fetchAroundAnchor(e,t){if(this._hass){this._loading=!0,this._notify();try{var i;const n=await async function(e,t,i,n=25,a=50){return e.callWS({type:"meshcore_chat/get_messages_around",entity_id:t,anchor_id:i,before_limit:n,after_limit:a})}(this._hass,e,t),a=n.messages.map(nd);this._hasOlderMessages=n.has_more_before,this._hasNewerMessages=n.has_more_after;const o=new Set(a.map(e=>e.id)),r=this._messages.filter(e=>{if(e.id.startsWith("optimistic_"))return this._keepOptimistic(e,a);if(e.id.startsWith("rt_")){const t=e.id.substring(3);return!o.has(t)}return!1});this._messages=[...a,...r],this._messages.sort((e,t)=>e.timestamp.getTime()-t.timestamp.getTime());const s=null!==(i=this._config.max_messages)&&void 0!==i?i:500;this._messages.length>s&&(this._messages=this._messages.slice(-s),this._hasOlderMessages=!0),this._error=null,this._retryCount=0}catch(e){const t=e instanceof Error?e.message:String(e);this._error=`Failed to fetch messages: ${t}`,this._retryCount++}finally{this._loading=!1,this._notify()}}}_startUpdates(e){this._startPolling(e),this._subscribeRealtime(e).catch(()=>{})}async _subscribeRealtime(e){if(!this._hass)return;const t=this._realtimeGeneration,i=[];try{const n=await this._hass.connection.subscribeEvents(i=>{t===this._realtimeGeneration&&this._active&&this._entityId===e&&i.data.entity_id===e&&this._handleRealtimeMessage(i.data)},"meshcore_message");if(i.push(n),t!==this._realtimeGeneration)return void i.forEach(e=>e());const a=await this._hass.connection.subscribeEvents(i=>{t===this._realtimeGeneration&&this._active&&this._entityId===e&&i.data.entity_id===e&&this._handleDeliveryUpdate(i.data)},"meshcore_delivery_update");if(i.push(a),t!==this._realtimeGeneration)return void i.forEach(e=>e());this._realtimeSubscriptions=i}catch(e){throw i.forEach(e=>e()),e}}_handleRealtimeMessage(e){var t;if(e.entry_id&&this._config.entry_id&&e.entry_id!==this._config.entry_id)return;const i=String(e.sender_name||e.sender||e.pubkey_prefix||e.contact_public_key||"Unknown"),n=null!==(t=e.message)&&void 0!==t?t:e.text;if("boolean"==typeof e.outgoing?e.outgoing:i===this._config.node_name){if(i&&n){const t=e.ack_received,r=e.repeater_count,s=e.rx_log_data,l=e.message_type;let c;var a;if("dm"===l||"direct"===l)c={status:!0===t?"delivered":"sent",ackReceived:null!=t?t:void 0};else c={status:"sent",repeaterCount:null!=r?r:null!==(a=null==s?void 0:s.length)&&void 0!==a?a:0};c.repeatsObservable=e.repeats_observable,c.collecting=e.collecting;const d=e.send_id,p=this._messages.find(e=>d&&(e.sendId===d||e.id===d)),h=this._messages.filter(e=>{var t;return e.id.startsWith("optimistic_")&&!e.sendId&&"failed"!==(null===(t=e.deliveryStatus)||void 0===t?void 0:t.status)&&e.sender===i&&e.text===n}),u=null!=p?p:1===h.length?h[0]:void 0;var o;u&&(u.sendId=d,"failed"!==(null===(o=u.deliveryStatus)||void 0===o?void 0:o.status)&&(u.deliveryStatus=c),s&&(u.rxLogData=s),this._notify())}!this._entityId||this._hasNewerMessages||this._hasOlderMessages||this._debouncedFetch(this._entityId)}else{if(i&&n){let t=n.replace(Fc,"");const a=i+": ";t.startsWith(a)&&(t=t.substring(a.length));const o=e.timestamp||(new Date).toISOString(),r=new Date(o),s=e.id||e.message_id||e.send_id||function(e,t,i){return ed(`${e}|${t}|${i}`).substring(0,12)}(o,i,n),l=`rt_${s}`,c=this._messages.some(e=>e.id===l||e.id===s);if(!c){const a=td(t),o=e.rx_log_data,s={id:l,sender:i,text:t,timestamp:r,isOutgoing:!1,isSystem:!1,raw:n,mentions:a,rxLogData:o&&o.length>0?o:void 0,...id(o)};this._messages.push(s),this._messages.sort((e,t)=>e.timestamp.getTime()-t.timestamp.getTime()),this._userAtBottom&&!this._hasNewerMessages||this._newMessagesWhileAway++,this._notify()}}!this._entityId||this._hasNewerMessages||this._hasOlderMessages||this._debouncedFetch(this._entityId)}}_debouncedFetch(e){this._fetchDebounce&&clearTimeout(this._fetchDebounce),this._fetchDebounce=setTimeout(async()=>{if(this._fetchDebounce=null,this._active)try{await this._fetchMessages(e)}catch(e){}},500)}_handleDeliveryUpdate(e){var t;if(e.entry_id&&this._config.entry_id&&e.entry_id!==this._config.entry_id)return;const i=e.rx_log_data;if(e.progressive&&i&&i.length>0){const t=e.sender_name,n=e.message,a=e.timestamp;if(t&&n){const e=a?new Date(a).getTime():0;for(let a=this._messages.length-1;a>=0;a--){const o=this._messages[a];if(!o.isOutgoing&&o.sender===t&&o.text===n&&(!e||Math.abs(o.timestamp.getTime()-e)<1e4))return o.rxLogData=i,o.repeaterCount=i.length,void this._notify()}}}const n=e.send_id,a=null!==(t=e.delivery_status)&&void 0!==t?t:e.status,o=e.repeater_count,r=e.ack_received,s=e.round_trip_ms,l=e.progressive;if(!n)return;let c;c=a||(!0===r?"delivered":!l||void 0!==o&&0!==o?"sent":"waiting");const d=this._messages.find(e=>e.isOutgoing&&(e.sendId===n||e.id===n));if(d){var p,h,u,m,g,f,v,b,y;if(!1===(null===(p=d.deliveryStatus)||void 0===p?void 0:p.collecting)&&l)return;if("failed"===(null===(h=d.deliveryStatus)||void 0===h?void 0:h.status)&&"failed"!==c)return;d.deliveryStatus={...d.deliveryStatus,status:l?null!==(u=null===(m=d.deliveryStatus)||void 0===m?void 0:m.status)&&void 0!==u?u:"sent":c,repeatsObservable:null!==(g=e.repeats_observable)&&void 0!==g?g:null===(f=d.deliveryStatus)||void 0===f?void 0:f.repeatsObservable,collecting:null!==(v=null!==(b=e.collecting)&&void 0!==b?b:l)&&void 0!==v?v:null===(y=d.deliveryStatus)||void 0===y?void 0:y.collecting,repeaterCount:o,ackReceived:r,roundTripMs:s},i&&(d.rxLogData=i),void 0!==o&&(d.repeaterCount=o),this._notify()}}async _pollFetch(e){if(this._hass&&!this._hasNewerMessages)try{let i;for(let e=this._messages.length-1;e>=0;e--){const t=this._messages[e].id;if(!t.startsWith("rt_")&&!t.startsWith("optimistic_")){i=t;break}}const n={type:"meshcore_chat/get_stored_messages",entity_id:e,limit:50};i&&(n.after=i);const a=await this._hass.callWS(n);if(0===a.messages.length)return this._error=null,void(this._retryCount=0);const o=a.messages.map(nd),r=new Set(this._messages.map(e=>e.id)),s=o.filter(e=>!r.has(e.id));if(s.length>0){var t;const e=new Set(s.map(e=>e.id));this._messages=this._messages.filter(t=>!t.id.startsWith("rt_")||!e.has(t.id.substring(3))),this._messages=this._messages.filter(e=>!e.id.startsWith("optimistic_")||!s.some(t=>t.sender===e.sender&&t.text===e.text)),this._messages=[...this._messages,...s],this._messages.sort((e,t)=>e.timestamp.getTime()-t.timestamp.getTime());const i=null!==(t=this._config.max_messages)&&void 0!==t?t:500;this._messages.length>i&&(this._messages=this._messages.slice(-i),this._hasOlderMessages=!0),this._notify()}this._error=null,this._retryCount=0}catch(e){this._retryCount++}}_startPolling(e){const t=()=>{if(!this._active)return;const i=this._retryCount>=5?6e4:3e4;this._pollTimer=setTimeout(async()=>{if(this._active){try{await this._pollFetch(e)}catch(e){}t()}},i)};t()}_stopUpdates(){this._realtimeGeneration++,this._pollTimer&&(clearTimeout(this._pollTimer),this._pollTimer=null);for(const e of this._realtimeSubscriptions)e();this._realtimeSubscriptions=[]}_notify(){this._onChange&&this._onChange()}}let ld=class extends zc{constructor(){super(...arguments),this.conversations=[],this.activeId=null,this.unreadCounts={},this.nodePrefix=null,this._activeFilter="all",this._filteredConversations=[]}updated(e){(e.has("conversations")||e.has("_activeFilter"))&&this._updateFiltered()}render(){return cc(s||(s=bl`
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
      <div class="filter-bar" role="tablist" aria-label="Conversation filter">
        ${0}
        ${0}
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
    `),()=>this.dispatchEvent(new CustomEvent("manage-requested",{bubbles:!0,composed:!0})),this._renderFilterBtn("all","All"),this._renderFilterBtn("unread","Unread"),this._renderFilterBtn("dms","DMs"),this._renderFilterBtn("channels","Channels"),this._onListKeyDown,this._filteredConversations.length>0?this._filteredConversations.map((e,t)=>this._renderConversation(e,t)):cc(l||(l=bl`
              <div class="empty-state">
                <div class="empty-text">
                  ${0}
                </div>
              </div>
            `),this._emptyMessage()))}_onListKeyDown(e){var t;const i=e.key;if("ArrowDown"!==i&&"ArrowUp"!==i&&"Home"!==i&&"End"!==i&&"Enter"!==i&&" "!==i)return;const n=this.shadowRoot;if(!n)return;const a=Array.from(n.querySelectorAll(".conversation-item"));if(0===a.length)return;const o=n.activeElement;let r=o?a.indexOf(o):-1;"Enter"!==i&&" "!==i?(e.preventDefault(),"Home"===i?r=0:"End"===i?r=a.length-1:"ArrowDown"===i?r=r<0?0:Math.min(r+1,a.length-1):"ArrowUp"===i&&(r=r<0?a.length-1:Math.max(r-1,0)),null===(t=a[r])||void 0===t||t.focus()):o&&r>=0&&(e.preventDefault(),o.click())}_renderFilterBtn(e,t){const i=this._activeFilter===e;return cc(c||(c=bl`
      <button
        class="filter-btn ${0}"
        role="tab"
        aria-selected=${0}
        @click=${0}>
        ${0}
      </button>
    `),i?"active":"",i?"true":"false",()=>{this._activeFilter=e},t)}_emptyMessage(){switch(this._activeFilter){case"unread":return"No unread conversations";case"dms":return"No direct messages";case"channels":return"No channels";default:return"No conversations yet"}}_renderConversation(e,t){const i="pubkey_prefix"in e,n=i?e.pubkey_prefix:String(e.channel_idx),a=i?e.adv_name:e.name,o=i?e.pubkey_prefix:`Channel ${e.channel_idx}`,r=i?e.pubkey_prefix.substring(0,2).toUpperCase():`#${e.channel_idx}`,s=this.activeId===n,l=this._getUnreadCount(n),c=l>0?`${a}, ${o}, ${l} unread`:`${a}, ${o}`,u=this._filteredConversations.some(e=>("pubkey_prefix"in e?e.pubkey_prefix:String(e.channel_idx))===this.activeId);return cc(d||(d=bl`
      <div
        class=${0}
        role="option"
        tabindex=${0}
        aria-selected=${0}
        aria-label=${0}
        @click=${0}>
        <div class="conversation-avatar ${0}">${0}</div>
        <div class="conversation-info">
          <div class="conversation-name">${0}</div>
          <div class="conversation-detail">${0}</div>
        </div>
        ${0}
      </div>
    `),s?"conversation-item active":"conversation-item",s||!u&&0===t?"0":"-1",s?"true":"false",c,()=>this.dispatchEvent(new CustomEvent("conversation-selected",{detail:{id:n,isContact:i}})),i?"":"channel",r,a,o,l>0?cc(p||(p=bl`<div class="unread-badge" aria-hidden="true">${0}</div>`),l):cc(h||(h=bl`<span class="chevron" aria-hidden="true">›</span>`)))}_getUnreadCount(e){return this.unread?this.unread.badgeCount(e,this.nodePrefix):0}_updateFiltered(){switch(this._activeFilter){case"all":this._filteredConversations=[...this.conversations];break;case"unread":this._filteredConversations=this.conversations.filter(e=>{const t="pubkey_prefix"in e?e.pubkey_prefix:String(e.channel_idx);return this._getUnreadCount(t)>0});break;case"dms":this._filteredConversations=this.conversations.filter(e=>"pubkey_prefix"in e);break;case"channels":this._filteredConversations=this.conversations.filter(e=>!("pubkey_prefix"in e))}}};ld.styles=Cl(u||(u=bl`
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

    .conversation-info {
      flex: 1;
      overflow: hidden;
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
  `)),yl([Dc({type:Array})],ld.prototype,"conversations",void 0),yl([Dc({type:String})],ld.prototype,"activeId",void 0),yl([Dc({attribute:!1})],ld.prototype,"unread",void 0),yl([Dc({type:Object})],ld.prototype,"unreadCounts",void 0),yl([Dc({type:String})],ld.prototype,"nodePrefix",void 0),yl([qc()],ld.prototype,"_activeFilter",void 0),yl([qc()],ld.prototype,"_filteredConversations",void 0),ld=yl([Rc("meshcore-conversation-list")],ld);const cd=["a[href]","button:not([disabled])",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])",'[tabindex]:not([tabindex="-1"])'].join(","),dd=[];let pd=!1;function hd(){pd||(pd=!0,document.addEventListener("keydown",ud,!0))}function ud(e){0!==dd.length&&dd[dd.length-1]._handleKeyDown(e)}class md{constructor(e,t){this.host=e,this.opts=t,this._wasOpen=!1,this._previousActive=null,this._inStack=!1,this.host.addController(this),hd()}hostConnected(){hd()}hostDisconnected(){this._inStack&&this._popStack(),this._previousActive=null,this._wasOpen=!1}hostUpdated(){const e=this.opts.isOpen();if(e&&!this._wasOpen)this._previousActive=this._currentDocumentActive(),this._pushStack(),this._focusFirstSoon();else if(!e&&this._wasOpen){this._popStack();const e=this._previousActive;if(this._previousActive=null,e&&e.isConnected&&"function"==typeof e.focus)try{e.focus()}catch(e){}}this._wasOpen=e}_pushStack(){this._inStack||(dd.push(this),this._inStack=!0)}_popStack(){const e=dd.indexOf(this);e>=0&&dd.splice(e,1),this._inStack=!1}_getFocusables(){var e,t,i;const n=null!==(e=null===(t=(i=this.opts).getScope)||void 0===t?void 0:t.call(i))&&void 0!==e?e:this.host.shadowRoot;return n?Array.from(n.querySelectorAll(cd)).filter(e=>!(e.hasAttribute("aria-hidden")||e.hidden||null===e.offsetParent&&0===e.getClientRects().length)):[]}_focusFirstSoon(){queueMicrotask(()=>{var e,t,i;if(!this.opts.isOpen())return;const n=null!==(e=null===(t=(i=this.opts).getScope)||void 0===t?void 0:t.call(i))&&void 0!==e?e:this.host.shadowRoot;if(n&&this._scopeContainsFocus(n))return;const a=this._getFocusables();if(0!==a.length)try{a[0].focus()}catch(e){}})}_scopeContainsFocus(e){let t=document.activeElement;for(;t;){if(t===e)return!0;if(e.host===t)return!0;if("contains"in e&&e.contains(t))return!0;const i=t.shadowRoot;if(!i||!i.activeElement)break;t=i.activeElement}return!1}_currentDocumentActive(){let e=document.activeElement;for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}_handleKeyDown(e){var t,i,n;if(!this.opts.isOpen())return;if("Escape"===e.key)return e.preventDefault(),e.stopPropagation(),void this.opts.onEscape();if("Tab"!==e.key)return;const a=this._getFocusables();if(0===a.length)return;const o=null!==(t=null===(i=(n=this.opts).getScope)||void 0===i?void 0:i.call(n))&&void 0!==t?t:this.host.shadowRoot,r=o?this._findFocusedInScope(o):null,s=r?a.indexOf(r):-1;let l;l=e.shiftKey?s<=0?a.length-1:s-1:-1===s||s>=a.length-1?0:s+1,e.preventDefault(),e.stopPropagation();try{a[l].focus()}catch(e){}}_findFocusedInScope(e){let t=document.activeElement;for(;t;){if(e===t||"contains"in e&&e.contains(t)){if(t.shadowRoot&&t.shadowRoot.activeElement){t=t.shadowRoot.activeElement;continue}return t}if(e.host===t){t=e.activeElement;continue}const i=t.shadowRoot;if(!i||!i.activeElement)break;t=i.activeElement}return null}}function gd(e,t){new md(e,t)}let fd=class extends zc{constructor(){super(),this.open=!1,this.narrow=!1,this.editMode=!1,this.initialChannelIdx=0,this.initialChannelName="",this.initialScope="",this.initialKey="",this.availableIndices=[],this._channelIdx=0,this._channelName="",this._customKey="",this._autoKey=!0,this._scope="",this._availableScopes=null,this._globalAllowed=!1,this._saving=!1,this._error=null,this._initialized=!1,gd(this,{isOpen:()=>this.open,onEscape:()=>this._onCancel()})}willUpdate(e){if(e.has("open")&&this.open&&!this._initialized){if(this.editMode){this._channelIdx=this.initialChannelIdx,this._channelName=this.initialChannelName,this._scope=this.initialScope;const e=ed(this.initialChannelName).slice(0,32);this.initialKey&&this.initialKey.toLowerCase()!==e?(this._autoKey=!1,this._customKey=this.initialKey.toLowerCase()):(this._autoKey=!0,this._customKey="")}else this._channelIdx=this.availableIndices.length>0?this.availableIndices[0]:0;this._initialized=!0,this._loadScopes()}e.has("open")&&!this.open&&(this._initialized=!1)}async _loadScopes(){if(this._availableScopes=null,!this.hass)return this._availableScopes=[],void(this._globalAllowed=!1);const e=await async function(e,t){try{const i={type:"meshcore_chat/get_flood_scopes"};t&&(i.entry_id=t);const n=await e.callWS(i);return{scopes:n.scopes||[],global:!!n.global}}catch(e){return{scopes:[],global:!1}}}(this.hass,this.entryId);this._availableScopes=e.scopes,this._globalAllowed=e.global}render(){if(!this.open)return;const e=this._customKey.length,t=32===e||0===e||this._autoKey;return cc(m||(m=bl`
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
    `),this._onOverlayClick,this.editMode?"Edit channel":"Add channel",this.editMode?"Edit Channel":"Add Channel",this._error?cc(g||(g=bl`<div style="padding: 12px; background: rgba(219, 68, 55, 0.1); border-radius: 6px; color: var(--error-color, #db4437); font-size: 13px; margin-bottom: 16px;">
                  ${0}
                </div>`),this._error):"",this.editMode?cc(f||(f=bl`
                    <select class="form-select" disabled>
                      <option value=${0} selected>${0}</option>
                    </select>`),this._channelIdx,this._channelIdx):cc(v||(v=bl`
                    <select
                      class="form-select"
                      @change=${0}>
                      ${0}
                    </select>`),e=>{this._channelIdx=parseInt(e.target.value,10)},this.availableIndices.map(e=>cc(b||(b=bl`
                        <option value=${0} ?selected=${0}>${0}</option>
                      `),e,e===this._channelIdx,e))),this.editMode?"Channel index cannot be changed":"Select an available channel slot",this._channelName,e=>{this._channelName=e.target.value},this._renderScopeField(),this._autoKey,e=>{this._autoKey=e.target.checked},this._autoKey?"":cc(y||(y=bl`
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
                `),this._customKey,e=>{const t=e.target.value.toLowerCase().replace(/[^a-f0-9]/g,"");this._customKey=t.slice(0,32)},this._customKey.length,t?"Valid hex key (16 bytes / 128-bit AES)":`Invalid: expected 32 characters, got ${e}`),this._saving,this._onCancel,!this._channelName||this._saving||!this._autoKey&&!t||!this.editMode&&0===this.availableIndices.length,this._onSave,this._saving?"Saving...":"Save")}_renderScopeField(){const e=this._availableScopes;if(null===e)return cc(_||(_=bl`
        <select class="form-select scope-select" disabled>
          <option selected>Loading…</option>
        </select>
      `));const t=this._globalAllowed?"*":"",i=!this._scope||"*"===this._scope,n=!!this._scope&&"*"!==this._scope&&!e.includes(this._scope);return 0!==e.length||n||this._globalAllowed?cc(w||(w=bl`
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
    `),e=>{this._scope=e.target.value},t,i,n?cc(k||(k=bl`<option value=${0} selected>${0} (not in allowlist)</option>`),this._scope,this._scope):"",e.map(e=>cc($||($=bl`
            <option value=${0} ?selected=${0}>${0}</option>
          `),e,e===this._scope,e))):cc(x||(x=bl`
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
      `))}async _onSave(){if(this.hass&&this._channelName){this._saving=!0,this._error=null;try{(await async function(e,t,i,n,a,o){try{const r={type:"meshcore_chat/set_channel",channel_idx:t,name:i};return n&&(r.key=n),a&&(r.entry_id=a),void 0!==o&&(r.scope=o),await e.callWS(r)}catch(e){return{success:!1}}}(this.hass,this._channelIdx,this._channelName,this._autoKey?void 0:this._customKey,this.entryId,this._scope)).success?(this.dispatchEvent(new CustomEvent("channel-saved",{detail:{channelIdx:this._channelIdx,name:this._channelName,scope:this._scope},bubbles:!0})),this._reset()):this._error="Failed to save channel"}catch(e){this._error=`Error: ${String(e)}`}finally{this._saving=!1}}}_onCancel(){this._reset(),this.dispatchEvent(new CustomEvent("close",{bubbles:!0}))}_onOverlayClick(e){e.target===e.currentTarget&&this._onCancel()}_reset(){this._channelIdx=0,this._channelName="",this._customKey="",this._autoKey=!0,this._scope="",this._availableScopes=null,this._globalAllowed=!1,this._error=null}};fd.styles=[Tc,Cl(C||(C=bl`
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
    `))],yl([Dc({type:Boolean})],fd.prototype,"open",void 0),yl([Dc({type:Object})],fd.prototype,"hass",void 0),yl([Dc({type:String})],fd.prototype,"entryId",void 0),yl([Dc({type:Boolean})],fd.prototype,"narrow",void 0),yl([Dc({type:Boolean})],fd.prototype,"editMode",void 0),yl([Dc({type:Number})],fd.prototype,"initialChannelIdx",void 0),yl([Dc({type:String})],fd.prototype,"initialChannelName",void 0),yl([Dc({type:String})],fd.prototype,"initialScope",void 0),yl([Dc({type:String})],fd.prototype,"initialKey",void 0),yl([Dc({type:Array})],fd.prototype,"availableIndices",void 0),yl([qc()],fd.prototype,"_channelIdx",void 0),yl([qc()],fd.prototype,"_channelName",void 0),yl([qc()],fd.prototype,"_customKey",void 0),yl([qc()],fd.prototype,"_autoKey",void 0),yl([qc()],fd.prototype,"_scope",void 0),yl([qc()],fd.prototype,"_availableScopes",void 0),yl([qc()],fd.prototype,"_globalAllowed",void 0),yl([qc()],fd.prototype,"_saving",void 0),yl([qc()],fd.prototype,"_error",void 0),fd=yl([Rc("meshcore-channel-dialog")],fd);let vd=class extends zc{willUpdate(){this._tabInitialized||(this._tabInitialized=!0,this.initialTab&&(this._activeTab=this.initialTab))}constructor(){super(),this.narrow=!1,this._tabInitialized=!1,this._activeTab="contacts",this._contacts=[],this._channels=[],this._searchQuery="",this._categoryFilter="all",this._typeFilter="all",this._loading=!1,this._actionInProgress=null,this._confirmingRemoveContact=null,this._confirmingRemoveChannel=null,this._channelDialogOpen=!1,this._editingChannel=null,this._maxChannels=4,gd(this,{isOpen:()=>!0,onEscape:()=>this._close()})}connectedCallback(){super.connectedCallback(),this._loadData()}render(){var e,t,i,n,a,o,r,s;return cc(S||(S=bl`
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
    `),e=>e.stopPropagation(),this._close,"contacts"===this._activeTab?"active":"",()=>this._switchTab("contacts"),"channels"===this._activeTab?"active":"",()=>this._switchTab("channels"),"contacts"===this._activeTab?cc(M||(M=bl`
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
            `),["all","added","discovered"].map(e=>cc(z||(z=bl`
                      <button
                        class="filter-chip ${0}"
                        @click=${0}
                      >
                        ${0}
                      </button>
                    `),this._categoryFilter===e?"active":"",()=>{this._categoryFilter=e},"all"===e?"All":"added"===e?"Added":"Discovered")),["all","clients","repeaters"].map(e=>cc(A||(A=bl`
                      <button
                        class="filter-chip ${0}"
                        @click=${0}
                      >
                        ${0}
                      </button>
                    `),this._typeFilter===e?"active":"",()=>{this._typeFilter=e},"all"===e?"All":"clients"===e?"Clients":"Repeaters")),this._searchQuery,e=>{this._searchQuery=e.target.value}):"",this._loading?cc(R||(R=bl`<div class="loading-state">
                <div class="loading-spinner"></div>
                Loading...
              </div>`)):"contacts"===this._activeTab?this._renderContacts():this._renderChannels(),this._channelDialogOpen?cc(I||(I=bl`
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
          `),!0,this.hass,this.entryId,this.narrow,!!this._editingChannel,null!==(e=null===(t=this._editingChannel)||void 0===t?void 0:t.channel_idx)&&void 0!==e?e:0,null!==(i=null===(n=this._editingChannel)||void 0===n?void 0:n.name)&&void 0!==i?i:"",null!==(a=null===(o=this._editingChannel)||void 0===o?void 0:o.scope)&&void 0!==a?a:"",null!==(r=null===(s=this._editingChannel)||void 0===s||null===(s=s.settings)||void 0===s?void 0:s.channel_secret)&&void 0!==r?r:"",this._getAvailableIndices(),this._onChannelSaved,()=>{this._channelDialogOpen=!1,this._editingChannel=null}):"")}_renderContacts(){const e=this._filterContacts();if(0===e.length){const e=!!this._searchQuery||"all"!==this._categoryFilter||"all"!==this._typeFilter;return cc(O||(O=bl`
        <div class="empty-state">
          <div class="empty-icon"><svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" opacity="0.5"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg></div>
          <div class="empty-text">
            ${0}
          </div>
        </div>
      `),e?"No contacts match":"No contacts discovered")}const t=[...e].sort((e,t)=>e.added_to_node!==t.added_to_node?e.added_to_node?-1:1:e.adv_name.localeCompare(t.adv_name));return t.map(e=>this._renderContactItem(e))}_renderContactItem(e){const t=e.pubkey_prefix.substring(0,2).toUpperCase(),i=e.added_to_node,n=this._confirmingRemoveContact===e.public_key,a=this._actionInProgress===e.public_key;return cc(D||(D=bl`
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
    `),t,e.adv_name||"Unknown",e.pubkey_prefix,i?"added":"discovered",i?cc(q||(q=bl`<svg viewBox="0 0 24 24" width="10" height="10" fill="currentColor" style="vertical-align: -1px; margin-right: 2px;"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>Added`)):"Discovered",n?cc(T||(T=bl`
              <div class="confirm-inline">
                <span class="confirm-text">Remove?</span>
                <button class="confirm-btn yes" @click=${0}>Yes</button>
                <button class="confirm-btn no" @click=${0}>No</button>
              </div>
            `),()=>this._doRemoveContact(e),()=>{this._confirmingRemoveContact=null}):i?cc(F||(F=bl`
                <button
                  class="action-btn remove"
                  ?disabled=${0}
                  @click=${0}>
                  ${0}
                </button>
              `),a,()=>{this._confirmingRemoveContact=e.public_key},a?"...":"Remove"):cc(E||(E=bl`
                <button
                  class="action-btn add"
                  ?disabled=${0}
                  @click=${0}>
                  ${0}
                </button>
              `),a,()=>this._doAddContact(e),a?"...":cc(N||(N=bl`<svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" style="vertical-align: -1px; margin-right: 4px;"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>Add`))))}_renderChannels(){if(0===this._channels.length)return cc(j||(j=bl`
        <div class="empty-state">
          <div class="empty-icon">#</div>
          <div class="empty-text">No channels configured</div>
        </div>
        <button class="add-channel-btn" @click=${0}>
          + Add Channel
        </button>
      `),this._openAddChannel);const e=this._confirmingRemoveChannel;return cc(L||(L=bl`
      ${0}
      <button class="add-channel-btn" @click=${0}>
        + Add Channel
      </button>
    `),this._channels.map(t=>{const i=e===t.channel_idx,n=this._actionInProgress===`ch-${t.channel_idx}`;return cc(P||(P=bl`
          <div class="channel-item">
            <div class="channel-icon">#</div>
            <div class="channel-info">
              <div class="channel-name">${0}</div>
              <div class="channel-idx">Index ${0}${0}</div>
            </div>
            ${0}
          </div>
        `),t.name,t.channel_idx,t.scope?cc(B||(B=bl` · scope: ${0}`),t.scope):"",i?cc(H||(H=bl`
                  <div class="confirm-inline">
                    <span class="confirm-text">Remove?</span>
                    <button class="confirm-btn yes" @click=${0}>Yes</button>
                    <button class="confirm-btn no" @click=${0}>No</button>
                  </div>
                `),()=>this._doRemoveChannel(t),()=>{this._confirmingRemoveChannel=null}):cc(V||(V=bl`
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
                `),n,()=>this._openEditChannel(t),n,()=>{this._confirmingRemoveChannel=t.channel_idx},n?"...":"Remove"))}),this._openAddChannel)}async _loadData(){if(this.hass){this._loading=!0;try{const[e,t]=await Promise.all([Bc(this.hass,this.entryId),Hc(this.hass,this.entryId)]);this._contacts=e,this._channels=t;try{const e=await Vc(this.hass,this.entryId);null!=e&&e.max_channels&&(this._maxChannels=e.max_channels)}catch(e){}}finally{this._loading=!1}}}_switchTab(e){this._activeTab=e,this._searchQuery="",this._categoryFilter="all",this._typeFilter="all",this._confirmingRemoveContact=null,this._confirmingRemoveChannel=null}_filterContacts(){let e=this._contacts;if("added"===this._categoryFilter?e=e.filter(e=>e.added_to_node):"discovered"===this._categoryFilter&&(e=e.filter(e=>!e.added_to_node)),"clients"===this._typeFilter?e=e.filter(e=>{var t;const i=null!==(t=e.type)&&void 0!==t?t:0;return 0===i||1===i}):"repeaters"===this._typeFilter&&(e=e.filter(e=>2===e.type)),this._searchQuery){const t=this._searchQuery.toLowerCase();e=e.filter(e=>(e.adv_name||"").toLowerCase().includes(t)||(e.pubkey_prefix||"").toLowerCase().includes(t))}return e}async _doAddContact(e){if(this.hass){this._actionInProgress=e.public_key;try{if((await Gc(this.hass,e.public_key,e.adv_name,this.entryId)).success){const e=await Bc(this.hass,this.entryId);this._contacts=e,this.dispatchEvent(new CustomEvent("contacts-changed",{bubbles:!0,composed:!0}))}}finally{this._actionInProgress=null}}}async _doRemoveContact(e){if(this.hass){this._confirmingRemoveContact=null,this._actionInProgress=e.public_key;try{if((await Xc(this.hass,e.public_key,this.entryId)).success){const e=await Bc(this.hass,this.entryId);this._contacts=e,this.dispatchEvent(new CustomEvent("contacts-changed",{bubbles:!0,composed:!0}))}}finally{this._actionInProgress=null}}}_openAddChannel(){this._editingChannel=null,this._channelDialogOpen=!0}_openEditChannel(e){this._editingChannel=e,this._channelDialogOpen=!0}_getAvailableIndices(){const e=new Set(this._channels.map(e=>e.channel_idx)),t=[];for(let i=0;i<this._maxChannels;i++)e.has(i)||t.push(i);return t}async _doRemoveChannel(e){if(this.hass){this._confirmingRemoveChannel=null,this._actionInProgress=`ch-${e.channel_idx}`;try{if((await async function(e,t,i){try{const n={type:"meshcore_chat/remove_channel",channel_idx:t};return i&&(n.entry_id=i),await e.callWS(n)}catch(e){return{success:!1}}}(this.hass,e.channel_idx,this.entryId)).success){const e=await Hc(this.hass,this.entryId);this._channels=e,this.dispatchEvent(new CustomEvent("channels-changed",{bubbles:!0,composed:!0}))}}finally{this._actionInProgress=null}}}async _onChannelSaved(){if(this._channelDialogOpen=!1,this._editingChannel=null,this.hass){const e=await Hc(this.hass,this.entryId);this._channels=e,this.dispatchEvent(new CustomEvent("channels-changed",{bubbles:!0,composed:!0}))}}_close(){this.dispatchEvent(new CustomEvent("manage-closed",{bubbles:!0,composed:!0}))}};vd.styles=Cl(K||(K=bl`
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
  `)),yl([Dc({type:Object})],vd.prototype,"hass",void 0),yl([Dc({type:String})],vd.prototype,"entryId",void 0),yl([Dc({type:Boolean})],vd.prototype,"narrow",void 0),yl([Dc({type:String})],vd.prototype,"initialTab",void 0),yl([qc()],vd.prototype,"_activeTab",void 0),yl([qc()],vd.prototype,"_contacts",void 0),yl([qc()],vd.prototype,"_channels",void 0),yl([qc()],vd.prototype,"_searchQuery",void 0),yl([qc()],vd.prototype,"_categoryFilter",void 0),yl([qc()],vd.prototype,"_typeFilter",void 0),yl([qc()],vd.prototype,"_loading",void 0),yl([qc()],vd.prototype,"_actionInProgress",void 0),yl([qc()],vd.prototype,"_confirmingRemoveContact",void 0),yl([qc()],vd.prototype,"_confirmingRemoveChannel",void 0),yl([qc()],vd.prototype,"_channelDialogOpen",void 0),yl([qc()],vd.prototype,"_editingChannel",void 0),yl([qc()],vd.prototype,"_maxChannels",void 0),vd=yl([Rc("meshcore-manage-dialog")],vd);const bd=new Map;function yd(e,t){const i=null!=t?t:"";let n=bd.get(i);return n||(n=Vc(e,t).then(e=>{const t=Number(e.latitude),i=Number(e.longitude);return Number.isFinite(t)&&Number.isFinite(i)&&(0!==t||0!==i)?{lat:t,lon:i}:null}).catch(()=>null).then(t=>{var i;if(t)return t;const n=null===(i=e.states["zone.home"])||void 0===i?void 0:i.attributes,a=Number(null==n?void 0:n.latitude),o=Number(null==n?void 0:n.longitude);return Number.isFinite(a)&&Number.isFinite(o)?{lat:a,lon:o}:null}),bd.set(i,n)),n}let _d;function xd(e,t=!1){const i="mi"===_d?"mi":"km",n="mi"===i?e/1.609344:e;return`${t?"~":""}${n<10?n.toFixed(1):Math.round(n)} ${i}`}function wd(e){const t="number"==typeof e?e:Number(e);return Number.isFinite(t)&&0!==t?t:null}function kd(e,t,i,n){const a=Math.PI/180,o=(i-e)*a,r=(n-t)*a,s=Math.sin(o/2)**2+Math.cos(e*a)*Math.cos(i*a)*Math.sin(r/2)**2;return 12742*Math.asin(Math.min(1,Math.sqrt(s)))}function $d(e,t,i=1){const n=kd(e.lat,e.lon,t.lat,t.lon)/i;return i*(n+n*n/100)}const Cd=new WeakMap;function Sd(e){let t=Cd.get(e);return t||(t=function(e){const t=[];for(const[s,l]of Object.entries(e)){var i,n,a,o,r;if(!s.startsWith("binary_sensor.meshcore_")||!s.endsWith("_contact"))continue;const e=l.attributes,c="string"==typeof e.public_key?e.public_key.toLowerCase():"",d=wd(null!==(i=e.adv_lat)&&void 0!==i?i:e.latitude),p=wd(null!==(n=e.adv_lon)&&void 0!==n?n:e.longitude);c&&null!==d&&null!==p&&t.push({key:c,name:String(null!==(a=null!==(o=e.adv_name)&&void 0!==o?o:e.friendly_name)&&void 0!==a?a:c.slice(0,6)),lat:d,lon:p,type:Number(null!==(r=e.type)&&void 0!==r?r:0)})}return t}(e),Cd.set(e,t)),t}const Md="The map needs Home Assistant 2026.10 or newer.";let zd=null;function Ad(){return customElements.get("ha-map")?Promise.resolve(!0):(null!=zd||(zd=(async()=>{try{var e,t;const i=await(null===(e=(t=window).loadCardHelpers)||void 0===e?void 0:e.call(t));return!!i&&(i.createCardElement({type:"map",entities:[]}),await Promise.race([customElements.whenDefined("ha-map").then(()=>!0),new Promise(e=>setTimeout(()=>e(!1),8e3))]))}catch(e){return!1}})()),zd)}const Rd={1:"#42a5f5",2:"#fb8c00",3:"#ab47bc",4:"#66bb6a"};async function Id(e,t){let i=-1,n=0;for(let a=0;a<60&&n<3;a++){if(await new Promise(e=>setTimeout(e,0===a?0:250)),!e.isConnected)return;const o=e._entityMarkers;if(o){for(const[e,i]of o){const n=t(e);n&&i.style.getPropertyValue("--ha-marker-color")!==n&&(i.style.setProperty("--ha-marker-color",n),i.style.setProperty("--ha-marker-border-width","3px"))}n=o.size>0&&o.size===i?n+1:0,i=o.size}}}function Od(e){const t=new Map;for(const[n,a]of Object.entries(null!==(i=null==e?void 0:e.states)&&void 0!==i?i:{})){var i;if(!n.startsWith("binary_sensor.meshcore_")||!n.endsWith("_contact"))continue;const e=a.attributes.public_key;"string"==typeof e&&t.set(e.toLowerCase(),n)}return t}function Dd(e){if(0===e.length)return null;const t=e.map(e=>e.lat),i=e.map(e=>e.lon);return[[Math.min(...t),Math.min(...i)],[Math.max(...t),Math.max(...i)]]}function qd(e){const t=[],i=new Set;for(const a of null!==(n=e.rxLogData)&&void 0!==n?n:[]){var n;const e=a.path_nodes;if(!e||0===e.length)continue;const o=e.join(">");i.has(o)||(i.add(o),t.push(e))}return t.sort((e,t)=>e.length-t.length)}let Td=class extends zc{constructor(){super(...arguments),this._me=null,this._meLoaded=!1,this._pathIndex=0,this._native=null,this._route=[],this._nativeKey=""}connectedCallback(){var e;super.connectedCallback(),null===this._native&&Ad().then(e=>{this._native=e});const t=null===(e=this.getHass)||void 0===e?void 0:e.call(this);var i,n;t&&!this._meLoaded&&(n=null===(i=t.config)||void 0===i||null===(i=i.unit_system)||void 0===i?void 0:i.length,_d=n,yd(t,this.entryId).then(e=>{this._me=e,this._meLoaded=!0}))}willUpdate(e){e.has("message")&&(this._pathIndex=0)}render(){var e;const t=null===(e=this.getHass)||void 0===e?void 0:e.call(this);if(!t||!this.message)return hc;if(!this._meLoaded||null===this._native)return cc(U||(U=bl`<div class="note">Loading...</div>`));const i=qd(this.message);if(0===i.length)return hc;const n=Math.min(this._pathIndex,i.length-1),a=function(e){var t,i,n,a,o;const{pathNodes:r,nodes:s,me:l,outgoing:c,senderName:d}=e,p=l?{lat:l.lat,lon:l.lon}:null,h=!c&&d?s.find(e=>e.name===d):void 0,u=c?r.map((e,t)=>t):r.map((e,t)=>r.length-1-t),m=u.map(e=>function(e,t){const i=e.toLowerCase(),n=t.filter(e=>e.key.startsWith(i)&&(2===e.type||3===e.type));return n.length?n:t.filter(e=>e.key.startsWith(i))}(r[e],s)),g=u.map(e=>r[e].length<=2?200:600),f=function(e,t,i,n=[]){let a=new Map([["",{pos:t,fromStart:0,layer:-1,cost:0,picks:[]}]]);e.forEach((e,i)=>{const o=new Map,r=(e,t)=>{const i=o.get(e);(!i||t.cost<i.cost)&&o.set(e,t)};for(const[o,l]of a){var s;for(const n of e){const e=t?kd(t.lat,t.lon,n.lat,n.lon):0,a=t&&l.layer>=0?2*Math.max(0,l.fromStart-e):0;r(`${i}:${n.key}`,{pos:{lat:n.lat,lon:n.lon},fromStart:e,layer:i,cost:l.cost+(l.pos?$d(l.pos,n,i-l.layer):0)+a,picks:[...l.picks,n]})}const a=0===e.length?0:null!==(s=n[i])&&void 0!==s?s:1/0;Number.isFinite(a)&&r(o,{...l,cost:l.cost+a,picks:[...l.picks,null]})}a=o});let o=null,r=1/0;for(const t of a.values()){const n=t.cost+(i&&t.pos?$d(t.pos,i,e.length-t.layer):0);n<r&&(r=n,o=t)}return o?o.picks:e.map(()=>null)}(m,p,h?{lat:h.lat,lon:h.lon}:null,g),v=new Array(r.length);u.forEach((e,t)=>{var i,n,a;const o=f[t];v[e]={kind:"repeater",prefix:r[e].toUpperCase(),name:null!==(i=null==o?void 0:o.name)&&void 0!==i?i:"",lat:null!==(n=null==o?void 0:o.lat)&&void 0!==n?n:null,lon:null!==(a=null==o?void 0:o.lon)&&void 0!==a?a:null,ambiguous:m[t].length>1,...o?{key:o.key}:{},...null===o&&m[t].length>0?{leftOut:!0}:{}}});const b={kind:"me",prefix:"",name:null!==(t=null==l?void 0:l.name)&&void 0!==t?t:"",lat:null!==(i=null==l?void 0:l.lat)&&void 0!==i?i:null,lon:null!==(n=null==l?void 0:l.lon)&&void 0!==n?n:null,ambiguous:!1};return c?[b,...v]:[{kind:"sender",prefix:"",name:null!=d?d:"",lat:null!==(a=null==h?void 0:h.lat)&&void 0!==a?a:null,lon:null!==(o=null==h?void 0:h.lon)&&void 0!==o?o:null,ambiguous:!1,...h?{key:h.key}:{}},...v,b]}({pathNodes:i[n],nodes:Sd(t.states),me:this._me?{...this._me,name:""}:null,outgoing:this.message.isOutgoing,senderName:this.message.isOutgoing?void 0:this.message.sender});return cc(W||(W=bl`
      ${0}
      ${0}
      ${0}
    `),i.length>1?cc(G||(G=bl`<div class="tabs">
            ${0}
          </div>`),i.map((e,t)=>cc(X||(X=bl`<button class=${0}
              @click=${0}>
              Path ${0} · ${0} hop${0}
            </button>`),t===n?"active":"",e=>{e.stopPropagation(),this._pathIndex=t},t+1,e.length,1===e.length?"":"s"))):hc,this._renderMap(a),this._renderList(a))}_renderMap(e){return this._route=e,this._native?e.some(e=>null!==e.lat&&null!==e.lon)?cc(J||(J=bl`<div class="wrap"
        @hass-more-info=${0}
        @click=${0}>
      <ha-map></ha-map>
      <div class="controls">
        <button aria-label="Fit route" title="Fit route" @click=${0}>⤢</button>
      </div>
    </div>`),e=>e.stopPropagation(),e=>e.stopPropagation(),()=>this._fitNative()):cc(Q||(Q=bl`<div class="note">No repeater on this path has a known position.</div>`)):cc(Y||(Y=bl`<div class="note">${0}</div>`),Md)}updated(){var e;if(!this._native)return;const t=this.renderRoot.querySelector("ha-map");if(!t)return;const i=this._route,n=i.map(e=>`${e.prefix}:${e.lat},${e.lon}`).join("|");if(n===this._nativeKey)return;this._nativeKey=n;const a=Od(null===(e=this.getHass)||void 0===e?void 0:e.call(this)),o=new Map,r=[];let s=0;for(const e of i){if("repeater"===e.kind&&s++,"me"===e.kind||!e.key)continue;const t=a.get(e.key);t&&!o.has(t)&&(o.set(t,"sender"===e.kind?"#43a047":Rd[2]),r.push({entity_id:t,label_mode:"name",name:"repeater"===e.kind?String(s):e.name||"Sender"}))}t.clusterMarkers=!1,t.autoFit=!1,t.entities=r;const l=i.filter(e=>null!==e.lat&&null!==e.lon).map(e=>({point:[e.lat,e.lon],tooltip:e.name||e.prefix||"You"}));t.paths=l.length>1?[{points:l,color:"#d32f2f"}]:[],Id(t,e=>o.get(e)),this._fitNative()}_fitNative(){var e;const t=this.renderRoot.querySelector("ha-map"),i=Dd(this._route.filter(e=>null!==e.lat&&null!==e.lon).map(e=>({lat:e.lat,lon:e.lon})));t&&i&&(null===(e=t.fitBounds)||void 0===e||e.call(t,i,{zoom:14,pad:.3}))}_renderList(e){const t=e.some(e=>e.ambiguous),i=e.filter(e=>"repeater"===e.kind);let n=null;const a=i.map(e=>{if(null===e.lat||null===e.lon)return null;const t=n?kd(n.lat,n.lon,e.lat,e.lon):null;return n=e,t}),o=i[0],r=i[i.length-1],s=i.length>=2&&null!==o.lat&&null!==o.lon&&null!==r.lat&&null!==r.lon?{km:kd(o.lat,o.lon,r.lat,r.lon),approx:o.ambiguous||r.ambiguous,routeKm:a.reduce((e,t)=>e+(null!=t?t:0),0),routeApprox:i.some(e=>e.ambiguous||null===e.lat)}:null;return cc(Z||(Z=bl`
      <ol>
        ${0}
      </ol>
      ${0}
      ${0}
    `),i.map((e,t)=>{const i=a[t];return cc(ee||(ee=bl`<li>
            <span class="prefix">${0}</span>
            ${0}${0}${0}
          </li>`),e.prefix,e.name?cc(te||(te=bl` ${0}`),e.name):e.leftOut?" – probably a repeater not in your contacts":" – no known position",e.ambiguous&&!e.leftOut?" (?)":"",null!==i?cc(ie||(ie=bl` <span class="leg">+${0}</span>`),xd(i)):hc)}),s?cc(ne||(ne=bl`<div class="note distance">${0}</div>`),function(e){const t=`↔ ${xd(e.km,e.approx)}`;return e.routeKm-e.km>.5?`${t} (∑ ${xd(e.routeKm,e.routeApprox)})`:t}(s)):hc,t?cc(ae||(ae=bl`<div class="note">(?) Several known repeaters share this prefix; the one that fits the route best is shown.</div>`)):hc)}};Td.styles=Cl(oe||(oe=bl`
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
    }
    .controls {
      position: absolute;
      top: 6px;
      right: 6px;
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
  `)),yl([Dc({attribute:!1})],Td.prototype,"getHass",void 0),yl([Dc({attribute:!1})],Td.prototype,"message",void 0),yl([Dc({type:String})],Td.prototype,"entryId",void 0),yl([qc()],Td.prototype,"_me",void 0),yl([qc()],Td.prototype,"_meLoaded",void 0),yl([qc()],Td.prototype,"_pathIndex",void 0),yl([qc()],Td.prototype,"_native",void 0),Td=yl([Rc("meshcore-path-map")],Td);const Fd=["👍","❤️","😂","🎉","👏","🔥","😀","😃","😄","😁","😅","😂","🤣","😊","😇","🙂","🙃","😉","😌","😍","🥰","😘","😗","😙","😚","😋","😛","😝","😜","🤪","🤨","🧐","🤓","😎","🥸","🤩","🥳","😏","😒","😞","😔","😟","😕","🙁","😣","😖","😫","😩","🥺","😢","😭","😤","😠","😡","🤬","🤯","😳","🥵","🥶","😱","😨","😰","😥","😓","🤗","🤔","🤭","🤫","🤥","😶","👍","👎","👊","✊","🤛","🤜","🤞","✌️","🤟","🤘","👌","🤌","🤏","👈","👉","👆","👇","☝️","👋","🤚","🖐️","✋","🖖","👏","🙌","👐","🤲","🤝","🙏","✍️","💅","🤳","💪","❤️","🧡","💛","💚","💙","💜","🖤","🤍","🤎","💔","❤️‍🔥","❤️‍🩹","💕","💞","💓","💗","💖","💘","💝","💟","💌","💢","💥","💫","💦","💨","🕳️","💬","👁️‍🗨️","🗨️","🗯️","💭","🎉","🎊","🎈","🎁","🎀","🪅","🪆","🏆","🥇","🥈","🥉","⚽","⚾","🥎","🏀","🏐","🏈","🏉","🎾","🥏","🎳","🏏","🏑","🏒","🥍","🏓","🏸","🥊","🥋","🥅","⛳","🔥","⭐","🌟","✨","⚡","💡","🔦","🏮","🪔","📱","💻","⌚","📷","📺","📻","🎵","🎶","🚀"],Ed=["👍","❤️","😂","🎉","👏","🔥"],Nd=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);function jd(e,t){const i=(new TextEncoder).encode(e),n=new Uint8Array(i.length+4);n.set(i),new DataView(n.buffer).setUint32(i.length,t>>>0,!0);const a=function(e){const t=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),i=e.length,n=64*Math.ceil((i+9)/64),a=new Uint8Array(n);a.set(e),a[i]=128;const o=new DataView(a.buffer);o.setUint32(n-8,Math.floor(8*i/2**32)),o.setUint32(n-4,8*i>>>0);const r=new Uint32Array(64),s=(e,t)=>e>>>t|e<<32-t;for(let e=0;e<n;e+=64){for(let t=0;t<16;t++)r[t]=o.getUint32(e+4*t);for(let e=16;e<64;e++){const t=s(r[e-15],7)^s(r[e-15],18)^r[e-15]>>>3,i=s(r[e-2],17)^s(r[e-2],19)^r[e-2]>>>10;r[e]=r[e-16]+t+r[e-7]+i>>>0}let[i,n,a,l,c,d,p,h]=t;for(let e=0;e<64;e++){const t=h+(s(c,6)^s(c,11)^s(c,25))+(c&d^~c&p)+Nd[e]+r[e]>>>0,o=(s(i,2)^s(i,13)^s(i,22))+(i&n^i&a^n&a)>>>0;h=p,p=d,d=c,c=l+t>>>0,l=a,a=n,n=i,i=t+o>>>0}t[0]+=i,t[1]+=n,t[2]+=a,t[3]+=l,t[4]+=c,t[5]+=d,t[6]+=p,t[7]+=h}const l=new Uint8Array(32),c=new DataView(l.buffer);for(let e=0;e<8;e++)c.setUint32(4*e,t[e]);return l}(n);let o=0n;for(let e=0;e<5;e++)o=o<<8n|BigInt(a[e]);let r="";for(let e=7;e>=0;e--)r+="0123456789abcdefghjkmnpqrstvwxyz"[Number(o>>BigInt(5*e)&31n)];return r}function Ld(e){var t;if(!e)return!1;const i=Intl.Segmenter;return(!i||1===[...new i(void 0,{granularity:"grapheme"}).segment(e)].length)&&((null!==(t=e.codePointAt(0))&&void 0!==t?t:0)>=8192||e.includes("️")||e.includes("⃣"))}const Pd=/^(?:@\[(.*)\])?(.+?)\n([a-hjkmnp-tv-z0-9]{8})$/i,Bd=/^(.+?)(?:@\[(.*)\])?\n([a-hjkmnp-tv-z0-9]{8})$/i,Hd=/^r:([0-9a-f]{4}):([0-9a-f]{2})$/;function Vd(e){const t=Hd.exec(e);if(t){const e=Fd[parseInt(t[2],16)];return e?{emoji:e,hash:t[1],kind:"open"}:null}const i=Pd.exec(e);if(i&&Ld(i[2]))return{emoji:i[2],target:i[1],hash:i[3].toLowerCase(),kind:"mc1"};const n=Bd.exec(e);return n&&Ld(n[1])?{emoji:n[1],target:n[2],hash:n[3].toLowerCase(),kind:"mc1"}:null}const Kd=/^m:(-?\d{1,2}(?:\.\d+)?),(-?\d{1,3}(?:\.\d+)?)(?:\|([^|]*))?(?:\|([\s\S]*))?$/,Ud=/<([0-9a-fA-F]{64}):([1-4]):([^<>\r\n]*)>/,Wd={1:"Companion",2:"Repeater",3:"Room server",4:"Sensor"};function Gd(e,t,i,n){const a=e=>e*Math.PI/180,o=a(i-e),r=a(n-t),s=Math.sin(o/2)**2+Math.cos(a(e))*Math.cos(a(i))*Math.sin(r/2)**2;return 12742e3*Math.asin(Math.sqrt(s))}const Xd=[["Smileys & Emotion","😀\tgrinning face face smile happy joy :d grin\n😃\tgrinning face with big eyes face happy joy haha :d :)\n😄\tgrinning face with smiling eyes face happy joy funny haha laugh\n😁\tbeaming face with smiling eyes face happy smile joy kawaii eye\n😆\tgrinning squinting face happy joy lol satisfied haha face\n😅\tgrinning face with sweat face hot happy laugh sweat smile\n🤣\trolling on the floor laughing face rolling floor laughing lol haha\n😂\tface with tears of joy face cry tears weep happy happytears\n🙂\tslightly smiling face face smile fine happy this\n🙃\tupside-down face face flipped silly smile sarcasm\n🫠\tmelting face hot heat disappear dissolve dread liquid\n😉\twinking face face happy mischievous secret ;) smile\n😊\tsmiling face with smiling eyes face smile happy flushed crush embarrassed\n😇\tsmiling face with halo face angel heaven halo innocent fairy\n🥰\tsmiling face with hearts face love like affection valentines infatuation\n😍\tsmiling face with heart-eyes face love like affection valentines infatuation\n🤩\tstar-struck face smile starry eyes grinning excited\n😘\tface blowing a kiss face love like affection valentines infatuation\n😗\tkissing face love like face 3 valentines infatuation\n☺️\tsmiling face face blush massage happiness happy outlined\n😚\tkissing face with closed eyes face love like affection valentines infatuation\n😙\tkissing face with smiling eyes face affection valentines infatuation kiss eye\n🥲\tsmiling face with tear sad cry pretend grateful happy proud\n😋\tface savoring food happy joy tongue smile face silly\n😛\tface with tongue face prank childish playful mischievous smile\n😜\twinking face with tongue face prank childish playful mischievous smile\n🤪\tzany face face goofy crazy excited eye eyes\n😝\tsquinting face with tongue face prank playful mischievous smile tongue\n🤑\tmoney-mouth face face rich dollar money eyes sign\n🤗\tsmiling face with open hands face smile hug hands hugs open\n🤭\tface with hand over mouth face whoops shock surprise blushing covering\n🫢\tface with open eyes and hand over mouth silence secret shock surprise amazement awe\n🫣\tface with peeking eye scared frightening embarrassing shy captivated peep\n🤫\tshushing face face quiet shhh closed covering finger\n🤔\tthinking face face hmmm think consider chin shade\n🫡\tsaluting face respect salute ok sunny troops yes\n🤐\tzipper-mouth face face sealed zipper secret hush lips\n🤨\tface with raised eyebrow face distrust scepticism disapproval disbelief surprise\n😐\tneutral face indifference meh :| neutral deadpan faced\n😑\texpressionless face face indifferent - - meh deadpan inexpressive\n😶\tface without mouth face blank mouthless mute no quiet\n🫥\tdotted line face invisible lonely isolation depression depressed disappear\n😶‍🌫️\tface in clouds shower steam dream absentminded brain fog\n😏\tsmirking face face smile mean prank smug sarcasm\n😒\tunamused face indifference bored straight face serious sarcasm unimpressed\n🙄\tface with rolling eyes face eyeroll frustrated eye roll\n😬\tgrimacing face face grimace teeth awkward eek nervous\n😮‍💨\tface exhaling relieve relief tired sigh exhale gasp\n🤥\tlying face face lie pinocchio liar long nose\n🫨\tshaking face dizzy shock blurry earthquake\n😌\trelieved face face relaxed phew massage happiness content\n😔\tpensive face face sad depressed upset dejected sadface\n😪\tsleepy face face tired rest nap bubble side\n🤤\tdrooling face face drool\n😴\tsleeping face face tired sleepy night zzz sleep\n😷\tface with medical mask face sick ill disease covid cold\n🤒\tface with thermometer sick temperature thermometer cold fever covid\n🤕\tface with head-bandage injured clumsy bandage hurt bandaged injury\n🤢\tnauseated face face vomit gross green sick throw up\n🤮\tface vomiting face sick barf ill mouth open\n🤧\tsneezing face face gesundheit sneeze sick allergy achoo\n🥵\thot face face feverish heat red sweating overheated\n🥶\tcold face face blue freezing frozen frostbite icicles\n🥴\twoozy face face dizzy intoxicated tipsy wavy drunk\n😵\tface with crossed-out eyes spent unconscious xox dizzy cross crossed\n😵‍💫\tface with spiral eyes sick ill confused nauseous nausea dizzy\n🤯\texploding head face shocked mind blown blowing explosion\n🤠\tcowboy hat face face cowgirl hat\n🥳\tpartying face face celebration woohoo birthday hat horn\n🥸\tdisguised face pretent brows glasses moustache disguise incognito\n😎\tsmiling face with sunglasses face cool smile summer beach sunglass\n🤓\tnerd face face nerdy geek dork glasses smiling\n🧐\tface with monocle face stuffy wealthy rich exploration inspection\n😕\tconfused face face indifference huh weird hmmm :/\n🫤\tface with diagonal mouth skeptic confuse frustrated indifferent confused disappointed\n😟\tworried face face concern nervous :( sad sadface\n🙁\tslightly frowning face face frowning disappointed sad upset frown\n☹️\tfrowning face face sad upset frown megafrown unhappy\n😮\tface with open mouth face surprise impressed wow whoa :o\n😯\thushed face face woo shh silence speechless stunned\n😲\tastonished face face xox surprised poisoned amazed drunk face\n😳\tflushed face face blush shy flattered blushing dazed\n🥺\tpleading face face begging mercy cry tears sad\n🥹\tface holding back tears touched gratitude cry angry proud resist\n😦\tfrowning face with open mouth face aw what frown yawning\n😧\tanguished face face stunned nervous pained\n😨\tfearful face face scared terrified nervous fear oops\n😰\tanxious face with sweat face nervous sweat blue cold concerned face\n😥\tsad but relieved face face phew sweat nervous disappointed eyebrow\n😢\tcrying face face tears sad depressed upset :'(\n😭\tloudly crying face sobbing face cry tears sad upset\n😱\tface screaming in fear face munch scared omg alone fearful\n😖\tconfounded face face confused sick unwell oops :s\n😣\tpersevering face face sick no upset oops eyes\n😞\tdisappointed face face sad upset depressed :( sadface\n😓\tdowncast face with sweat face hot sad tired exercise cold\n😩\tweary face face tired sleepy sad frustrated upset\n😫\ttired face sick whine upset frustrated distraught exhausted\n🥱\tyawning face tired sleepy bored yawn\n😤\tface with steam from nose face gas phew proud pride triumph\n😡\tenraged face angry mad hate despise enraged grumpy\n😠\tangry face mad face annoyed frustrated anger grumpy\n🤬\tface with symbols on mouth face swearing cursing cussing profanity expletive\n😈\tsmiling face with horns devil horns evil fairy fantasy happy\n👿\tangry face with horns devil angry horns demon evil fairy\n💀\tskull dead skeleton creepy death body\n☠️\tskull and crossbones poison danger deadly scary death pirate\n💩\tpile of poo hankey shitface fail turd shit comic\n🤡\tclown face face mock\n👹\togre monster red mask halloween scary creepy\n👺\tgoblin red evil mask monster scary creepy\n👻\tghost halloween spooky scary creature disappear face\n👽\talien ufo paul weird outer space creature et\n👾\talien monster game arcade play creature extraterrestrial face\n🤖\trobot computer machine bot face monster\n😺\tgrinning cat animal cats happy smile face mouth\n😸\tgrinning cat with smiling eyes animal cats smile eye face grin\n😹\tcat with tears of joy animal cats haha happy tears face\n😻\tsmiling cat with heart-eyes animal love like affection cats valentines\n😼\tcat with wry smile animal cats smirk face ironic smirking\n😽\tkissing cat animal cats kiss closed eye eyes\n🙀\tweary cat animal cats munch scared scream face\n😿\tcrying cat animal tears weep sad cats upset\n😾\tpouting cat animal cats face grumpy\n🙈\tsee-no-evil monkey monkey animal nature haha blind covering\n🙉\thear-no-evil monkey animal monkey nature covering deaf ears\n🙊\tspeak-no-evil monkey monkey animal nature omg covering face\n💌\tlove letter email like affection envelope valentines heart\n💘\theart with arrow love like heart affection valentines cupid\n💝\theart with ribbon love valentines box chocolate chocolates gift\n💖\tsparkling heart love like affection valentines excited sparkle\n💗\tgrowing heart like love affection valentines pink excited\n💓\tbeating heart love like affection valentines pink heart\n💞\trevolving hearts love like affection valentines heart two\n💕\ttwo hearts love like affection valentines heart pink\n💟\theart decoration purple-square love like\n❣️\theart exclamation decoration love above an as dot\n💔\tbroken heart sad sorry break heart heartbreak breaking\n❤️‍🔥\theart on fire passionate enthusiastic burn love lust sacred\n❤️‍🩹\tmending heart broken heart bandage wounded bandaged healing healthier\n❤️\tred heart love like valentines black heavy\n🩷\tpink heart valentines\n🧡\torange heart love like affection valentines\n💛\tyellow heart love like affection valentines bf gold\n💚\tgreen heart love like affection valentines nct\n💙\tblue heart love like affection valentines brand neutral\n🩵\tlight blue heart ice baby blue\n💜\tpurple heart love like affection valentines bts emoji\n🤎\tbrown heart coffee\n🖤\tblack heart evil dark wicked\n🩶\tgrey heart silver monochrome\n🤍\twhite heart pure\n💋\tkiss mark face lips love like affection valentines\n💯\thundred points score perfect numbers century exam quiz\n💢\tanger symbol angry mad comic pop sign vein\n💥\tcollision bomb explode explosion blown bang boom\n💫\tdizzy star sparkle shoot magic circle comic\n💦\tsweat droplets water drip oops comic drops plewds\n💨\tdashing away wind air fast shoo fart smoke\n🕳️\thole embarrassing\n💬\tspeech balloon bubble words message talk chatting chat\n👁️‍🗨️\teye in speech bubble info am i witness\n🗨️\tleft speech bubble words message talk chatting dialog\n🗯️\tright anger bubble caption speech thinking mad angry balloon\n💭\tthought balloon bubble cloud speech thinking dream comic\n💤\tzzz sleepy tired dream bedtime boring comic"],["People & Body","👋\twaving hand wave hands gesture goodbye solong farewell\n🤚\traised back of hand fingers raised backhand body\n🖐️\thand with fingers splayed hand fingers palm body finger five\n✋\traised hand fingers stop highfive palm ban body\n🖖\tvulcan salute hand fingers spock star trek between body\n🫱\trightwards hand palm offer right rightward\n🫲\tleftwards hand palm offer left leftward\n🫳\tpalm down hand palm drop dismiss shoo\n🫴\tpalm up hand lift offer demand beckon catch come\n🫷\tleftwards pushing hand highfive pressing stop\n🫸\trightwards pushing hand highfive pressing stop\n👌\tok hand fingers limbs perfect ok okay body\n🤌\tpinched fingers size tiny small che finger gesture\n🤏\tpinching hand tiny small size amount body little\n✌️\tvictory hand fingers ohyeah hand peace victory two\n🤞\tcrossed fingers good lucky body cross finger hand\n🫰\thand with index finger and thumb crossed heart love money expensive snap\n🤟\tlove-you gesture hand fingers gesture body i ily\n🤘\tsign of the horns hand fingers evil eye sign of horns rock on body\n🤙\tcall me hand hands gesture shaka body phone sign\n👈\tbackhand index pointing left direction fingers hand left body finger\n👉\tbackhand index pointing right fingers hand direction right body finger\n👆\tbackhand index pointing up fingers hand direction up body finger\n🖕\tmiddle finger hand fingers rude middle flipping bird\n👇\tbackhand index pointing down fingers hand direction down body finger\n☝️\tindex pointing up hand fingers direction up body finger\n🫵\tindex pointing at the viewer you recruit point\n👍\tthumbs up thumbsup yes awesome good agree accept\n👎\tthumbs down thumbsdown no dislike hand -1 bad\n✊\traised fist fingers hand grasp body clenched power\n👊\toncoming fist angry violence fist hit attack hand\n🤛\tleft-facing fist hand fistbump body bump leftwards\n🤜\tright-facing fist hand fistbump body bump rightwards right fist\n👏\tclapping hands hands praise applause congrats yay body\n🙌\traising hands gesture hooray yea celebration hands air\n🫶\theart hands love appreciation support\n👐\topen hands fingers butterfly hands open body hand\n🤲\tpalms up together hands gesture cupped prayer body dua\n🤝\thandshake agreement shake deal hand hands meeting\n🙏\tfolded hands please hope wish namaste highfive pray\n✍️\twriting hand lower left ballpoint pen stationery write compose body\n💅\tnail polish nail care beauty manicure finger fashion nail\n🤳\tselfie camera phone arm hand\n💪\tflexed biceps arm flex hand summer strong biceps\n🦾\tmechanical arm accessibility body prosthetic\n🦿\tmechanical leg accessibility body prosthetic\n🦵\tleg kick limb body\n🦶\tfoot kick stomp body\n👂\tear face hear sound listen body ears\n🦻\tear with hearing aid accessibility body hard\n👃\tnose smell sniff body smelling sniffing stinky\n🧠\tbrain smart intelligent body organ\n🫀\tanatomical heart health heartbeat cardiology organ pulse\n🫁\tlungs breathe breath exhalation inhalation organ respiration\n🦷\ttooth teeth dentist body\n🦴\tbone skeleton body\n👀\teyes look watch stalk peek see body\n👁️\teye face look see watch stare body\n👅\ttongue mouth playful body out taste\n👄\tmouth kiss body kissing lips\n🫦\tbiting lip flirt sexy pain worry anxious fear\n👶\tbaby child boy girl toddler newborn young\n🧒\tchild gender-neutral young boy gender girl inclusive\n👦\tboy man male guy teenager child young\n👧\tgirl female woman teenager child maiden virgin\n🧑\tperson gender-neutral adult female gender inclusive male\n👱\tperson blond hair hairstyle blonde haired man\n👨\tman mustache father dad guy classy sir\n🧔\tperson beard person bewhiskered bearded\n🧔‍♂️\tman beard facial hair bearded bewhiskered male men\n🧔‍♀️\twoman beard facial hair bearded bewhiskered female women\n👨‍🦰\tman red hair hairstyle adult ginger haired male men\n👨‍🦱\tman curly hair hairstyle adult haired male men\n👨‍🦳\tman white hair old elder adult haired male men\n👨‍🦲\tman bald hairless adult hair male men no\n👩\twoman female girls lady adult women yellow\n👩‍🦰\twoman red hair hairstyle adult female ginger haired redhead\n🧑‍🦰\tperson red hair hairstyle adult gender haired unspecified\n👩‍🦱\twoman curly hair hairstyle adult female haired women\n🧑‍🦱\tperson curly hair hairstyle adult gender haired unspecified\n👩‍🦳\twoman white hair old elder adult female haired women\n🧑‍🦳\tperson white hair elder old adult gender haired unspecified\n👩‍🦲\twoman bald hairless adult female hair no women\n🧑‍🦲\tperson bald hairless adult gender hair no unspecified\n👱‍♀️\twoman blond hair woman female girl blonde person haired\n👱‍♂️\tman blond hair man male boy blonde guy person\n🧓\tolder person human elder senior gender-neutral adult female\n👴\told man human male men old elder senior\n👵\told woman human female women lady old elder\n🙍\tperson frowning worried frown gesture sad woman\n🙍‍♂️\tman frowning male boy man sad depressed discouraged\n🙍‍♀️\twoman frowning female girl woman sad depressed discouraged\n🙎\tperson pouting upset blank face fed gesture look\n🙎‍♂️\tman pouting male boy man gesture men\n🙎‍♀️\twoman pouting female girl woman gesture women\n🙅\tperson gesturing no decline arms deal denied face forbidden\n🙅‍♂️\tman gesturing no male boy man nope denied forbidden\n🙅‍♀️\twoman gesturing no female girl woman nope denied forbidden\n🙆\tperson gesturing ok agree ballerina face gesture hand hands\n🙆‍♂️\tman gesturing ok men boy male blue human man\n🙆‍♀️\twoman gesturing ok women girl female pink human woman\n💁\tperson tipping hand information attendant bellhop concierge desk female\n💁‍♂️\tman tipping hand male boy man human information desk\n💁‍♀️\twoman tipping hand female girl woman human information desk\n🙋\tperson raising hand question answering gesture happy one raised\n🙋‍♂️\tman raising hand male boy man gesture happy men\n🙋‍♀️\twoman raising hand female girl woman gesture happy one\n🧏\tdeaf person accessibility ear hear\n🧏‍♂️\tdeaf man accessibility male men\n🧏‍♀️\tdeaf woman accessibility female women\n🙇\tperson bowing respectiful apology bow boy cute deeply\n🙇‍♂️\tman bowing man male boy apology bow deeply\n🙇‍♀️\twoman bowing woman female girl apology bow deeply\n🤦\tperson facepalming disappointed disbelief exasperation face facepalm head\n🤦‍♂️\tman facepalming man male boy disbelief exasperation face\n🤦‍♀️\twoman facepalming woman female girl disbelief exasperation face\n🤷\tperson shrugging regardless doubt ignorance indifference shrug shruggie\n🤷‍♂️\tman shrugging man male boy confused indifferent doubt\n🤷‍♀️\twoman shrugging woman female girl confused indifferent doubt\n🧑‍⚕️\thealth worker hospital dentist doctor healthcare md nurse\n👨‍⚕️\tman health worker doctor nurse therapist healthcare man human\n👩‍⚕️\twoman health worker doctor nurse therapist healthcare woman human\n🧑‍🎓\tstudent learn education graduate pupil school\n👨‍🎓\tman student graduate man human education graduation male\n👩‍🎓\twoman student graduate woman human education female graduation\n🧑‍🏫\tteacher professor education educator instructor\n👨‍🏫\tman teacher instructor professor man human education educator\n👩‍🏫\twoman teacher instructor professor woman human education educator\n🧑‍⚖️\tjudge law court justice scales\n👨‍⚖️\tman judge justice court man human law male\n👩‍⚖️\twoman judge justice court woman human female law\n🧑‍🌾\tfarmer crops farm farming gardener rancher worker\n👨‍🌾\tman farmer rancher gardener man human farm farming\n👩‍🌾\twoman farmer rancher gardener woman human farm farming\n🧑‍🍳\tcook food kitchen culinary chef cooking service\n👨‍🍳\tman cook chef man human cooking food male\n👩‍🍳\twoman cook chef woman human cooking female food\n🧑‍🔧\tmechanic worker technician electrician person plumber repair\n👨‍🔧\tman mechanic plumber man human wrench electrician male\n👩‍🔧\twoman mechanic plumber woman human wrench electrician female\n🧑‍🏭\tfactory worker labor assembly industrial welder\n👨‍🏭\tman factory worker assembly industrial man human male men\n👩‍🏭\twoman factory worker assembly industrial woman human female welder\n🧑‍💼\toffice worker business accountant adviser analyst architect banker\n👨‍💼\tman office worker business manager man human accountant adviser\n👩‍💼\twoman office worker business manager woman human accountant adviser\n🧑‍🔬\tscientist chemistry biologist chemist engineer lab mathematician\n👨‍🔬\tman scientist biologist chemist engineer physicist man human\n👩‍🔬\twoman scientist biologist chemist engineer physicist woman human\n🧑‍💻\ttechnologist computer coder engineer laptop software technology\n👨‍💻\tman technologist coder developer engineer programmer software man\n👩‍💻\twoman technologist coder developer engineer programmer software woman\n🧑‍🎤\tsinger song artist performer actor entertainer music\n👨‍🎤\tman singer rockstar entertainer man human actor aladdin\n👩‍🎤\twoman singer rockstar entertainer woman human actor female\n🧑‍🎨\tartist painting draw creativity art paint painter\n👨‍🎨\tman artist painter man human art male men\n👩‍🎨\twoman artist painter woman human art female paint\n🧑‍✈️\tpilot fly plane airplane aviation aviator\n👨‍✈️\tman pilot aviator plane man human airplane aviation\n👩‍✈️\twoman pilot aviator plane woman human airplane aviation\n🧑‍🚀\tastronaut outerspace moon planets rocket space stars\n👨‍🚀\tman astronaut space rocket man human cosmonaut male\n👩‍🚀\twoman astronaut space rocket woman human cosmonaut female\n🧑‍🚒\tfirefighter fire firetruck\n👨‍🚒\tman firefighter fireman man human fire firetruck male\n👩‍🚒\twoman firefighter fireman woman human female fire firetruck\n👮\tpolice officer cop law policeman policewoman\n👮‍♂️\tman police officer man police law legal enforcement arrest\n👮‍♀️\twoman police officer woman police law legal enforcement arrest\n🕵️\tdetective human spy eye or private sleuth\n🕵️‍♂️\tman detective crime male men sleuth spy\n🕵️‍♀️\twoman detective human spy detective female woman sleuth\n💂\tguard protect british guardsman\n💂‍♂️\tman guard uk gb british male guy royal\n💂‍♀️\twoman guard uk gb british female royal woman\n🥷\tninja ninjutsu skills japanese fighter hidden stealth\n👷\tconstruction worker labor build builder face hard hat\n👷‍♂️\tman construction worker male human wip guy build construction\n👷‍♀️\twoman construction worker female human wip build construction worker\n🫅\tperson with crown royalty power monarch noble regal\n🤴\tprince boy man male crown royal king\n👸\tprincess girl woman female blond crown royal\n👳\tperson wearing turban headdress arab man muslim sikh\n👳‍♂️\tman wearing turban male indian hinduism arabs men\n👳‍♀️\twoman wearing turban female indian hinduism arabs woman women\n👲\tperson with skullcap male boy chinese asian cap gua\n🧕\twoman with headscarf female hijab mantilla tichel\n🤵\tperson in tuxedo couple marriage wedding groom male men\n🤵‍♂️\tman in tuxedo formal fashion groom male men person\n🤵‍♀️\twoman in tuxedo formal fashion female wedding women\n👰\tperson with veil couple marriage wedding woman bride person\n👰‍♂️\tman with veil wedding marriage bride male men\n👰‍♀️\twoman with veil wedding marriage bride female women\n🤰\tpregnant woman baby female pregnancy pregnant lady women\n🫃\tpregnant man baby belly bloated full\n🫄\tpregnant person baby belly bloated full\n🤱\tbreast-feeding nursing baby breastfeeding child female infant\n👩‍🍼\twoman feeding baby birth food bottle child female infant\n👨‍🍼\tman feeding baby birth food bottle child infant male\n🧑‍🍼\tperson feeding baby birth food bottle child infant milk\n👼\tbaby angel heaven wings halo cherub cupid face\n🎅\tsanta claus festival man male xmas father christmas activity\n🤶\tmrs. claus woman female xmas mother christmas activity celebration\n🧑‍🎄\tmx claus christmas activity celebration mx. santa\n🦸\tsuperhero marvel fantasy good hero heroine superpower\n🦸‍♂️\tman superhero man male good hero superpowers fantasy\n🦸‍♀️\twoman superhero woman female good heroine superpowers fantasy\n🦹\tsupervillain marvel bad criminal evil fantasy superpower\n🦹‍♂️\tman supervillain man male evil bad criminal hero\n🦹‍♀️\twoman supervillain woman female evil bad criminal heroine\n🧙\tmage magic fantasy sorcerer sorceress witch wizard\n🧙‍♂️\tman mage man male mage sorcerer fantasy men\n🧙‍♀️\twoman mage woman female mage witch fantasy sorceress\n🧚\tfairy wings magical fantasy oberon puck titania\n🧚‍♂️\tman fairy man male fantasy men oberon puck\n🧚‍♀️\twoman fairy woman female fantasy titania wings women\n🧛\tvampire blood twilight dracula fantasy undead\n🧛‍♂️\tman vampire man male dracula fantasy men undead\n🧛‍♀️\twoman vampire woman female fantasy undead unded women\n🧜\tmerperson sea fantasy merboy mergirl mermaid merman\n🧜‍♂️\tmerman man male triton fantasy men mermaid\n🧜‍♀️\tmermaid woman female merwoman ariel fantasy women\n🧝\telf magical ears fantasy legolas pointed\n🧝‍♂️\tman elf man male ears fantasy magical men\n🧝‍♀️\twoman elf woman female ears fantasy magical pointed\n🧞\tgenie magical wishes djinn djinni fantasy jinni\n🧞‍♂️\tman genie man male djinn fantasy men\n🧞‍♀️\twoman genie woman female djinn fantasy women\n🧟\tzombie dead fantasy undead walking\n🧟‍♂️\tman zombie man male dracula undead walking dead fantasy\n🧟‍♀️\twoman zombie woman female undead walking dead fantasy women\n🧌\ttroll mystical monster fairy fantasy tale shrek\n💆\tperson getting massage relax face head massaging salon spa\n💆‍♂️\tman getting massage male boy man head face men\n💆‍♀️\twoman getting massage female girl woman head face salon\n💇\tperson getting haircut hairstyle barber beauty cutting hair hairdresser\n💇‍♂️\tman getting haircut male boy man barber beauty men\n💇‍♀️\twoman getting haircut female girl woman barber beauty parlor\n🚶\tperson walking move hike pedestrian walk walker\n🚶‍♂️\tman walking human feet steps hike male men\n🚶‍♀️\twoman walking human feet steps woman female hike\n🧍\tperson standing still stand\n🧍‍♂️\tman standing still male men stand\n🧍‍♀️\twoman standing still female stand women\n🧎\tperson kneeling pray respectful kneel\n🧎‍♂️\tman kneeling pray respectful kneel male men\n🧎‍♀️\twoman kneeling respectful pray female kneel women\n🧑‍🦯\tperson with white cane blind accessibility white\n👨‍🦯\tman with white cane blind accessibility male men white\n👩‍🦯\twoman with white cane blind accessibility female white women\n🧑‍🦼\tperson in motorized wheelchair disability accessibility\n👨‍🦼\tman in motorized wheelchair disability accessibility male men\n👩‍🦼\twoman in motorized wheelchair disability accessibility female women\n🧑‍🦽\tperson in manual wheelchair disability accessibility\n👨‍🦽\tman in manual wheelchair disability accessibility male men\n👩‍🦽\twoman in manual wheelchair disability accessibility female women\n🏃\tperson running move exercise jogging marathon run runner\n🏃‍♂️\tman running man walking exercise race running male\n🏃‍♀️\twoman running woman walking exercise race running female\n💃\twoman dancing female girl woman fun dance dancer\n🕺\tman dancing male boy fun dancer dance disco\n🕴️\tperson in suit levitating suit business levitate hover jump boy\n👯\tpeople with bunny ears perform costume dancer dancing ear partying\n👯‍♂️\tmen with bunny ears male bunny men boys dancer dancing\n👯‍♀️\twomen with bunny ears female bunny women girls dancer dancing\n🧖\tperson in steamy room relax spa hamam sauna steam steambath\n🧖‍♂️\tman in steamy room male man spa steamroom sauna hamam\n🧖‍♀️\twoman in steamy room female woman spa steamroom sauna hamam\n🧗\tperson climbing sport bouldering climber rock\n🧗‍♂️\tman climbing sports hobby man male rock bouldering\n🧗‍♀️\twoman climbing sports hobby woman female rock bouldering\n🤺\tperson fencing sports fencing sword fencer\n🏇\thorse racing animal betting competition gambling luck jockey\n⛷️\tskier sports winter snow ski\n🏂\tsnowboarder sports winter ski snow snowboard snowboarding\n🏌️\tperson golfing sports business ball club golf golfer\n🏌️‍♂️\tman golfing sport ball golf golfer male men\n🏌️‍♀️\twoman golfing sports business woman female ball golf\n🏄\tperson surfing sport sea surf surfer\n🏄‍♂️\tman surfing sports ocean sea summer beach male\n🏄‍♀️\twoman surfing sports ocean sea summer beach woman\n🚣\tperson rowing boat sport move paddles rowboat vehicle\n🚣‍♂️\tman rowing boat sports hobby water ship male men\n🚣‍♀️\twoman rowing boat sports hobby water ship woman female\n🏊\tperson swimming sport pool swim swimmer\n🏊‍♂️\tman swimming sports exercise human athlete water summer\n🏊‍♀️\twoman swimming sports exercise human athlete water summer\n⛹️\tperson bouncing ball sports human basketball player\n⛹️‍♂️\tman bouncing ball sport basketball male men player\n⛹️‍♀️\twoman bouncing ball sports human woman female basketball player\n🏋️\tperson lifting weights sports training exercise bodybuilder gym lifter\n🏋️‍♂️\tman lifting weights sport gym lifter male men weight\n🏋️‍♀️\twoman lifting weights sports training exercise woman female gym\n🚴\tperson biking bicycle bike cyclist sport move bicyclist\n🚴‍♂️\tman biking bicycle bike cyclist sports exercise hipster\n🚴‍♀️\twoman biking bicycle bike cyclist sports exercise hipster\n🚵\tperson mountain biking bicycle bike cyclist sport move bicyclist\n🚵‍♂️\tman mountain biking bicycle bike cyclist transportation sports human\n🚵‍♀️\twoman mountain biking bicycle bike cyclist transportation sports human\n🤸\tperson cartwheeling sport gymnastic cartwheel doing gymnast gymnastics\n🤸‍♂️\tman cartwheeling gymnastics cartwheel doing male men\n🤸‍♀️\twoman cartwheeling gymnastics cartwheel doing female women\n🤼\tpeople wrestling sport wrestle wrestler wrestlers\n🤼‍♂️\tmen wrestling sports wrestlers male man wrestle wrestler\n🤼‍♀️\twomen wrestling sports wrestlers female woman wrestle wrestler\n🤽\tperson playing water polo sport\n🤽‍♂️\tman playing water polo sports pool male men\n🤽‍♀️\twoman playing water polo sports pool female women\n🤾\tperson playing handball sport ball\n🤾‍♂️\tman playing handball sports ball male men\n🤾‍♀️\twoman playing handball sports ball female women\n🤹\tperson juggling performance balance juggle juggler multitask skill\n🤹‍♂️\tman juggling juggle balance skill multitask juggler male\n🤹‍♀️\twoman juggling juggle balance skill multitask female juggler\n🧘\tperson in lotus position meditate meditation serenity yoga\n🧘‍♂️\tman in lotus position man male meditation yoga serenity zen\n🧘‍♀️\twoman in lotus position woman female meditation yoga serenity zen\n🛀\tperson taking bath clean shower bathroom bathing bathtub hot\n🛌\tperson in bed bed rest accommodation hotel sleep sleeping\n🧑‍🤝‍🧑\tpeople holding hands friendship couple date gender hand hold\n👭\twomen holding hands pair friendship couple love like female\n👫\twoman and man holding hands pair people human love date dating\n👬\tmen holding hands pair couple love like bromance friendship\n💏\tkiss pair valentines love like dating marriage\n👩‍❤️‍💋‍👨\tkiss woman, man love couple couplekiss female heart kissing\n👨‍❤️‍💋‍👨\tkiss man, man pair valentines love like dating marriage\n👩‍❤️‍💋‍👩\tkiss woman, woman pair valentines love like dating marriage\n💑\tcouple with heart pair love like affection human dating\n👩‍❤️‍👨\tcouple with heart woman, man love female male men romance women\n👨‍❤️‍👨\tcouple with heart man, man pair love like affection human dating\n👩‍❤️‍👩\tcouple with heart woman, woman pair love like affection human dating\n👨‍👩‍👦\tfamily man, woman, boy love father mother son\n👨‍👩‍👧\tfamily man, woman, girl home parents people human child daughter\n👨‍👩‍👧‍👦\tfamily man, woman, girl, boy home parents people human children child\n👨‍👩‍👦‍👦\tfamily man, woman, boy, boy home parents people human children child\n👨‍👩‍👧‍👧\tfamily man, woman, girl, girl home parents people human children child\n👨‍👨‍👦\tfamily man, man, boy home parents people human children child\n👨‍👨‍👧\tfamily man, man, girl home parents people human children child\n👨‍👨‍👧‍👦\tfamily man, man, girl, boy home parents people human children child\n👨‍👨‍👦‍👦\tfamily man, man, boy, boy home parents people human children child\n👨‍👨‍👧‍👧\tfamily man, man, girl, girl home parents people human children child\n👩‍👩‍👦\tfamily woman, woman, boy home parents people human children child\n👩‍👩‍👧\tfamily woman, woman, girl home parents people human children child\n👩‍👩‍👧‍👦\tfamily woman, woman, girl, boy home parents people human children child\n👩‍👩‍👦‍👦\tfamily woman, woman, boy, boy home parents people human children child\n👩‍👩‍👧‍👧\tfamily woman, woman, girl, girl home parents people human children child\n👨‍👦\tfamily man, boy home parent people human child father\n👨‍👦‍👦\tfamily man, boy, boy home parent people human children child\n👨‍👧\tfamily man, girl home parent people human child daughter\n👨‍👧‍👦\tfamily man, girl, boy home parent people human children child\n👨‍👧‍👧\tfamily man, girl, girl home parent people human children child\n👩‍👦\tfamily woman, boy home parent people human child female\n👩‍👦‍👦\tfamily woman, boy, boy home parent people human children child\n👩‍👧\tfamily woman, girl home parent people human child daughter\n👩‍👧‍👦\tfamily woman, girl, boy home parent people human children child\n👩‍👧‍👧\tfamily woman, girl, girl home parent people human children child\n🗣️\tspeaking head user person human sing say talk\n👤\tbust in silhouette user person human shadow\n👥\tbusts in silhouette user person human group team bust\n🫂\tpeople hugging care goodbye hello hug thanks\n👪\tfamily home parents child mom dad father\n👣\tfootprints feet tracking walking beach body clothing"],["Animals & Nature","🐵\tmonkey face animal nature circus head\n🐒\tmonkey animal nature banana circus cheeky\n🦍\tgorilla animal nature circus\n🦧\torangutan animal ape\n🐶\tdog face animal friend nature woof puppy pet\n🐕\tdog animal nature friend doge pet faithful\n🦮\tguide dog animal blind accessibility eye seeing\n🐕‍🦺\tservice dog blind animal accessibility assistance\n🐩\tpoodle dog animal 101 nature pet miniature\n🐺\twolf animal nature wild face\n🦊\tfox animal nature face\n🦝\traccoon animal nature curious face sly\n🐱\tcat face animal meow nature pet kitten kitty\n🐈\tcat animal meow pet cats cat2 domestic\n🐈‍⬛\tblack cat superstition luck halloween pet unlucky\n🦁\tlion animal nature face leo zodiac\n🐯\ttiger face animal cat danger wild nature roar\n🐅\ttiger animal nature roar bengal tiger2\n🐆\tleopard animal nature african jaguar\n🐴\thorse face animal brown nature head\n🫎\tmoose canada sweden sven cool\n🫏\tdonkey eeyore mule\n🐎\thorse animal gamble luck equestrian galloping racehorse\n🦄\tunicorn animal nature mystical face\n🦓\tzebra animal nature stripes safari face stripe\n🦌\tdeer animal nature horns venison buck reindeer\n🦬\tbison ox buffalo herd wisent\n🐮\tcow face beef ox animal nature moo milk\n🐂\tox animal cow beef bull bullock oxen\n🐃\twater buffalo animal nature ox cow domestic\n🐄\tcow beef ox animal nature moo milk\n🐷\tpig face animal oink nature head\n🐖\tpig animal nature hog pig2 sow\n🐗\tboar animal nature pig warthog wild\n🐽\tpig nose animal oink face snout\n🐏\tram animal sheep nature aries male zodiac\n🐑\tewe animal nature wool shipit female lamb\n🐐\tgoat animal nature capricorn zodiac\n🐪\tcamel animal hot desert hump arabian bump\n🐫\ttwo-hump camel animal nature hot desert hump asian\n🦙\tllama animal nature alpaca guanaco vicuña wool\n🦒\tgiraffe animal nature spots safari face\n🐘\telephant animal nature nose th circus\n🦣\tmammoth elephant tusks extinct extinction large tusk\n🦏\trhinoceros animal nature horn rhino\n🦛\thippopotamus animal nature hippo\n🐭\tmouse face animal nature cheese wedge rodent\n🐁\tmouse animal nature rodent dormouse mice mouse2\n🐀\trat animal mouse rodent\n🐹\thamster animal nature face pet\n🐰\trabbit face animal nature pet spring magic bunny\n🐇\trabbit animal nature pet magic spring bunny\n🐿️\tchipmunk animal nature rodent squirrel\n🦫\tbeaver animal rodent dam\n🦔\thedgehog animal nature spiny face\n🦇\tbat animal nature blind vampire batman\n🐻\tbear animal nature wild face teddy\n🐻‍❄️\tpolar bear animal arctic face white\n🐨\tkoala animal nature bear face marsupial\n🐼\tpanda animal nature face\n🦥\tsloth animal lazy slow\n🦦\totter animal fishing playful\n🦨\tskunk animal smelly stink\n🦘\tkangaroo animal nature australia joey hop marsupial\n🦡\tbadger animal nature honey pester\n🐾\tpaw prints animal tracking footprints dog cat pet\n🦃\tturkey animal bird thanksgiving wild\n🐔\tchicken animal cluck nature bird hen\n🐓\trooster animal nature chicken bird cock cockerel\n🐣\thatching chick animal chicken egg born baby bird\n🐤\tbaby chick animal chicken bird yellow\n🐥\tfront-facing baby chick animal chicken baby bird hatched standing\n🐦\tbird animal nature fly tweet spring\n🐧\tpenguin animal nature bird\n🕊️\tdove animal bird fly peace\n🦅\teagle animal nature bird bald\n🦆\tduck animal nature bird mallard\n🦢\tswan animal nature bird cygnet duckling ugly\n🦉\towl animal nature bird hoot wise\n🦤\tdodo animal bird extinct extinction large mauritius\n🪶\tfeather bird fly flight light plumage\n🦩\tflamingo animal flamboyant tropical\n🦚\tpeacock animal nature peahen bird ostentatious proud\n🦜\tparrot animal nature bird pirate talk\n🪽\twing angel birds flying fly\n🐦‍⬛\tblack bird crow\n🪿\tgoose silly jemima goosebumps honk\n🐸\tfrog animal nature croak toad face\n🐊\tcrocodile animal nature reptile lizard alligator croc\n🐢\tturtle animal slow nature tortoise terrapin\n🦎\tlizard animal nature reptile gecko\n🐍\tsnake animal evil nature hiss python bearer\n🐲\tdragon face animal myth nature chinese green fairy\n🐉\tdragon animal myth nature chinese green fairy\n🦕\tsauropod animal nature dinosaur brachiosaurus brontosaurus diplodocus\n🦖\tt-rex animal nature dinosaur tyrannosaurus extinct trex\n🐳\tspouting whale animal nature sea ocean cute face\n🐋\twhale animal nature sea ocean whale2\n🐬\tdolphin animal nature fish sea ocean flipper\n🦭\tseal animal creature sea lion\n🐟\tfish animal food nature freshwater pisces zodiac\n🐠\ttropical fish animal swim ocean beach nemo blue\n🐡\tblowfish animal nature food sea ocean fish\n🦈\tshark animal nature fish sea ocean jaws\n🐙\toctopus animal creature ocean sea nature beach\n🐚\tspiral shell nature sea beach seashell\n🪸\tcoral ocean sea reef\n🪼\tjellyfish sting tentacles\n🦀\tcrab animal crustacean cancer zodiac\n🦞\tlobster animal nature bisque claws seafood\n🦐\tshrimp animal ocean nature seafood food prawn\n🦑\tsquid animal nature ocean sea food molusc\n🦪\toyster food diving pearl\n🐌\tsnail slow animal shell garden slug\n🦋\tbutterfly animal insect nature caterpillar pretty\n🐛\tbug animal insect nature worm caterpillar\n🐜\tant animal insect nature bug\n🐝\thoneybee animal insect nature bug spring honey\n🪲\tbeetle insect bug\n🐞\tlady beetle animal insect nature ladybug bug ladybird\n🦗\tcricket animal chirp grasshopper insect orthoptera\n🪳\tcockroach insect pests pest roach\n🕷️\tspider animal arachnid insect\n🕸️\tspider web animal insect arachnid silk cobweb spiderweb\n🦂\tscorpion animal arachnid scorpio scorpius zodiac\n🦟\tmosquito animal nature insect malaria disease fever\n🪰\tfly insect disease maggot pest rotting\n🪱\tworm animal annelid earthworm parasite\n🦠\tmicrobe amoeba bacteria germs virus covid cell\n💐\tbouquet flowers nature spring flower plant romance\n🌸\tcherry blossom nature plant spring flower pink sakura\n💮\twhite flower japanese spring blossom cherry doily done\n🪷\tlotus flower calm meditation buddhism hinduism india\n🏵️\trosette flower decoration military plant\n🌹\trose flowers valentines love spring flower plant\n🥀\twilted flower plant nature flower rose dead drooping\n🌺\thibiscus plant vegetable flowers beach flower\n🌻\tsunflower nature plant fall flower sun yellow\n🌼\tblossom nature flowers yellow blossoming flower daisy flower\n🌷\ttulip flowers plant nature summer spring flower\n🪻\thyacinth flower lavender\n🌱\tseedling plant nature grass lawn spring sprout\n🪴\tpotted plant greenery house boring grow houseplant nurturing\n🌲\tevergreen tree plant nature fir pine wood\n🌳\tdeciduous tree plant nature rounded shedding wood\n🌴\tpalm tree plant vegetable nature summer beach mojito\n🌵\tcactus vegetable plant nature desert\n🌾\tsheaf of rice nature plant crop ear farming grain\n🌿\therb vegetable plant medicine weed grass lawn\n☘️\tshamrock vegetable plant nature irish clover trefoil\n🍀\tfour leaf clover vegetable plant nature lucky irish ireland\n🍁\tmaple leaf nature plant vegetable ca fall canada\n🍂\tfallen leaf nature plant vegetable leaves autumn brown\n🍃\tleaf fluttering in wind nature plant tree vegetable grass lawn\n🪹\tempty nest bird nesting\n🪺\tnest with eggs bird nesting\n🍄\tmushroom plant vegetable fungus shroom toadstool"],["Food & Drink","🍇\tgrapes fruit food wine grape plant\n🍈\tmelon fruit nature food cantaloupe honeydew muskmelon\n🍉\twatermelon fruit food picnic summer plant\n🍊\ttangerine food fruit nature orange mandarin plant\n🍋\tlemon fruit nature citrus lemonade plant\n🍌\tbanana fruit food monkey plant plantain\n🍍\tpineapple fruit nature food plant\n🥭\tmango fruit food tropical\n🍎\tred apple fruit mac school delicious plant\n🍏\tgreen apple fruit nature delicious golden granny plant\n🍐\tpear fruit nature food plant\n🍑\tpeach fruit nature food bottom butt plant\n🍒\tcherries food fruit berries cherry plant red\n🍓\tstrawberry fruit food nature berry plant\n🫐\tblueberries fruit berry bilberry blue blueberry\n🥝\tkiwi fruit fruit food chinese gooseberry kiwifruit\n🍅\ttomato fruit vegetable nature food plant\n🫒\tolive fruit food olives\n🥥\tcoconut fruit nature food palm cocoanut colada\n🥑\tavocado fruit food\n🍆\teggplant vegetable nature food aubergine phallic plant\n🥔\tpotato food tuber vegatable starch baked idaho\n🥕\tcarrot vegetable food orange\n🌽\tear of corn food vegetable plant cob maize maze\n🌶️\thot pepper food spicy chilli chili plant\n🫑\tbell pepper fruit plant capsicum vegetable\n🥒\tcucumber fruit food pickle gherkin vegetable\n🥬\tleafy green food vegetable plant bok choy cabbage kale\n🥦\tbroccoli fruit food vegetable cabbage wild\n🧄\tgarlic food spice cook flavoring plant vegetable\n🧅\tonion cook food spice flavoring plant vegetable\n🥜\tpeanuts food nut nuts peanut vegetable\n🫘\tbeans food kidney legume\n🌰\tchestnut food squirrel acorn nut plant\n🫚\tginger root spice yellow cooking gingerbread\n🫛\tpea pod cozy green\n🍞\tbread food wheat breakfast toast loaf\n🥐\tcroissant food bread french breakfast crescent roll\n🥖\tbaguette bread food bread french france bakery\n🫓\tflatbread flour food bakery arepa bread flat\n🥨\tpretzel food bread twisted germany bakery soft\n🥯\tbagel food bread bakery schmear jewish bakery breakfast\n🥞\tpancakes food breakfast flapjacks hotcakes brunch crêpe\n🧇\twaffle food breakfast brunch indecisive iron\n🧀\tcheese wedge food chadder swiss\n🍖\tmeat on bone good food drumstick barbecue bbq manga\n🍗\tpoultry leg food meat drumstick bird chicken turkey\n🥩\tcut of meat food cow meat cut chop lambchop\n🥓\tbacon food breakfast pork pig meat brunch\n🍔\thamburger meat fast food beef cheeseburger mcdonalds burger king\n🍟\tfrench fries chips snack fast food potato mcdonald's\n🍕\tpizza food party italy cheese pepperoni slice\n🌭\thot dog food frankfurter america hotdog redhot sausage\n🥪\tsandwich food lunch bread toast bakery cheese\n🌮\ttaco food mexican\n🌯\tburrito food mexican wrap\n🫔\ttamale food masa mexican tamal wrapped\n🥙\tstuffed flatbread food flatbread stuffed gyro mediterranean doner\n🧆\tfalafel food mediterranean chickpea falfel meatball\n🥚\tegg food chicken breakfast easter egg\n🍳\tcooking food breakfast kitchen egg skillet fried\n🥘\tshallow pan of food food cooking casserole paella skillet curry\n🍲\tpot of food food meat soup hot pot bowl stew\n🫕\tfondue cheese pot food chocolate melted swiss\n🥣\tbowl with spoon food breakfast cereal oatmeal porridge congee\n🥗\tgreen salad food healthy lettuce vegetable\n🍿\tpopcorn food movie theater films snack drama corn\n🧈\tbutter food cook dairy\n🧂\tsalt condiment shaker\n🥫\tcanned food food soup tomatoes can preserve tin\n🍱\tbento box food japanese box lunch assets\n🍘\trice cracker food japanese snack senbei\n🍙\trice ball food japanese onigiri omusubi\n🍚\tcooked rice food asian boiled bowl steamed\n🍛\tcurry rice food spicy hot indian\n🍜\tsteaming bowl food japanese noodle chopsticks ramen noodles\n🍝\tspaghetti food italian pasta noodle\n🍠\troasted sweet potato food nature plant goguma yam\n🍢\toden skewer food japanese kebab seafood stick\n🍣\tsushi food fish japanese rice sashimi seafood\n🍤\tfried shrimp food animal appetizer summer prawn tempura\n🍥\tfish cake with swirl food japan sea beach narutomaki pink\n🥮\tmoon cake food autumn dessert festival mooncake yuèbǐng\n🍡\tdango food dessert sweet japanese barbecue meat\n🥟\tdumpling food empanada pierogi potsticker gyoza gyōza\n🥠\tfortune cookie food prophecy dessert\n🥡\ttakeout box food leftovers chinese container out oyster\n🍦\tsoft ice cream food hot dessert summer icecream mr.\n🍧\tshaved ice hot dessert summer cone snow sweet\n🍨\tice cream food hot dessert bowl sweet\n🍩\tdoughnut food dessert snack sweet donut breakfast\n🍪\tcookie food snack oreo chocolate sweet dessert\n🎂\tbirthday cake food dessert cake candles celebration party\n🍰\tshortcake food dessert cake pastry piece slice\n🧁\tcupcake food dessert bakery sweet cake fairy\n🥧\tpie food dessert pastry filling sweet\n🍫\tchocolate bar food snack dessert sweet candy\n🍬\tcandy snack dessert sweet lolly\n🍭\tlollipop food snack candy sweet dessert lollypop\n🍮\tcustard dessert food pudding flan caramel creme\n🍯\thoney pot bees sweet kitchen honeypot\n🍼\tbaby bottle food container milk drink feeding\n🥛\tglass of milk beverage drink cow\n☕\thot beverage beverage caffeine latte espresso coffee mug\n🫖\tteapot drink hot kettle pot tea\n🍵\tteacup without handle drink bowl breakfast green british beverage\n🍶\tsake wine drink drunk beverage japanese alcohol\n🍾\tbottle with popping cork drink wine bottle celebration bar bubbly\n🍷\twine glass drink beverage drunk alcohol booze bar\n🍸\tcocktail glass drink drunk alcohol beverage booze mojito\n🍹\ttropical drink beverage cocktail summer beach alcohol booze\n🍺\tbeer mug relax beverage drink drunk party pub\n🍻\tclinking beer mugs relax beverage drink drunk party pub\n🥂\tclinking glasses beverage drink party alcohol celebrate cheers\n🥃\ttumbler glass drink beverage drunk alcohol liquor booze\n🫗\tpouring liquid cup water drink empty glass spill\n🥤\tcup with straw drink soda go juice malt milkshake\n🧋\tbubble tea taiwan boba milk tea straw momi pearl\n🧃\tbeverage box drink juice straw sweet\n🧉\tmate drink tea beverage bombilla chimarrão cimarrón\n🧊\tice water cold cube iceberg\n🥢\tchopsticks food hashi jeotgarak kuaizi\n🍽️\tfork and knife with plate food eat meal lunch dinner restaurant\n🍴\tfork and knife cutlery kitchen cooking silverware tableware\n🥄\tspoon cutlery kitchen tableware\n🔪\tkitchen knife knife blade cutlery kitchen weapon butchers\n🫙\tjar container sauce condiment empty store\n🏺\tamphora vase jar aquarius cooking drink jug"],["Travel & Places","🌍\tglobe showing europe-africa globe world earth international planet\n🌎\tglobe showing americas globe world usa earth international planet\n🌏\tglobe showing asia-australia globe world east earth international planet\n🌐\tglobe with meridians earth international world internet interweb i18n\n🗺️\tworld map location direction travel\n🗾\tmap of japan nation country japanese asia silhouette\n🧭\tcompass magnetic navigation orienteering\n🏔️\tsnow-capped mountain photo nature environment winter cold\n⛰️\tmountain photo nature environment\n🌋\tvolcano photo nature disaster eruption mountain weather\n🗻\tmount fuji photo mountain nature japanese capped san\n🏕️\tcamping photo outdoors tent campsite\n🏖️\tbeach with umbrella weather summer sunny sand mojito\n🏜️\tdesert photo warm saharah\n🏝️\tdesert island photo tropical mojito\n🏞️\tnational park photo environment nature\n🏟️\tstadium photo place sports concert venue grandstand\n🏛️\tclassical building art culture history\n🏗️\tbuilding construction wip working progress crane architectural\n🧱\tbrick bricks clay construction mortar wall infrastructure\n🪨\trock stone boulder construction heavy solid\n🪵\twood nature timber trunk construction log lumber\n🛖\thut house structure roundhouse yurt\n🏘️\thouses buildings photo building group house\n🏚️\tderelict house abandon evict broken building abandoned haunted\n🏠\thouse building home\n🏡\thouse with garden home plant nature building tree\n🏢\toffice building building bureau work city high rise\n🏣\tjapanese post office building envelope communication japan mark postal\n🏤\tpost office building email european\n🏥\thospital building health surgery doctor cross emergency\n🏦\tbank building money sales cash business enterprise\n🏨\thotel building accomodation checkin accommodation h\n🏩\tlove hotel like affection dating building heart hospital\n🏪\tconvenience store building shopping groceries corner e eleven®\n🏫\tschool building student education learn teach clock\n🏬\tdepartment store building shopping mall center shops\n🏭\tfactory building industry pollution smoke industrial smog\n🏯\tjapanese castle photo building fortress\n🏰\tcastle building royalty history european turrets\n💒\twedding love like affection couple marriage bride\n🗼\ttokyo tower photo japanese eiffel red\n🗽\tstatue of liberty american newyork new york\n⛪\tchurch building religion christ christian cross\n🕌\tmosque islam worship minaret domed muslim religion\n🛕\thindu temple religion\n🕍\tsynagogue judaism worship temple jewish jew religion\n⛩️\tshinto shrine temple japan kyoto kami michi no\n🕋\tkaaba mecca mosque islam muslim religion\n⛲\tfountain photo summer water fresh feature park\n⛺\ttent photo camping outdoors\n🌁\tfoggy photo mountain bridge city fog fog bridge\n🌃\tnight with stars evening city downtown star starry weather\n🏙️\tcityscape photo night life urban building city skyline\n🌄\tsunrise over mountains view vacation photo morning mountain sun\n🌅\tsunrise morning view vacation photo sun sunset\n🌆\tcityscape at dusk photo evening sky buildings building city\n🌇\tsunset photo good morning dawn building buildings city\n🌉\tbridge at night photo sanfrancisco gate golden weather\n♨️\thot springs bath warm relax hotsprings onsen steam\n🎠\tcarousel horse photo carnival activity entertainment fairground go\n🛝\tplayground slide fun park amusement play\n🎡\tferris wheel photo carnival londoneye activity amusement big\n🎢\troller coaster carnival playground photo fun activity amusement\n💈\tbarber pole hair salon style barber's haircut hairdresser\n🎪\tcircus tent festival carnival party activity big entertainment\n🚂\tlocomotive transportation vehicle train engine railway steam\n🚃\trailway car transportation vehicle carriage electric railcar railroad\n🚄\thigh-speed train transportation vehicle bullettrain railway shinkansen side\n🚅\tbullet train transportation vehicle speed fast public travel\n🚆\ttrain transportation vehicle diesel electric passenger railway\n🚇\tmetro transportation blue-square mrt underground tube subway\n🚈\tlight rail transportation vehicle railway\n🚉\tstation transportation vehicle public platform railway train\n🚊\ttram transportation vehicle trolleybus\n🚝\tmonorail transportation vehicle\n🚞\tmountain railway transportation vehicle car funicular train\n🚋\ttram car transportation vehicle carriage public travel train\n🚌\tbus car vehicle transportation school\n🚍\toncoming bus vehicle transportation front\n🚎\ttrolleybus bart transportation vehicle bus electric bus tram\n🚐\tminibus vehicle car transportation bus minivan mover\n🚑\tambulance health 911 hospital vehicle\n🚒\tfire engine transportation cars vehicle department truck\n🚓\tpolice car vehicle cars transportation law legal enforcement\n🚔\toncoming police car vehicle law legal enforcement 911 front of\n🚕\ttaxi uber vehicle cars transportation new side\n🚖\toncoming taxi vehicle cars uber front taxicab\n🚗\tautomobile red transportation vehicle car side\n🚘\toncoming automobile car vehicle transportation front\n🚙\tsport utility vehicle transportation vehicle blue campervan car motorhome\n🛻\tpickup truck car transportation vehicle\n🚚\tdelivery truck cars transportation vehicle resources\n🚛\tarticulated lorry vehicle cars transportation express green semi\n🚜\ttractor vehicle car farming agriculture farm\n🏎️\tracing car sports race fast formula f1 one\n🏍️\tmotorcycle race sports fast motorbike racing\n🛵\tmotor scooter vehicle vespa sasha bike cycle\n🦽\tmanual wheelchair accessibility\n🦼\tmotorized wheelchair accessibility\n🛺\tauto rickshaw move transportation tuk\n🚲\tbicycle bike sports exercise hipster push vehicle\n🛴\tkick scooter vehicle kick razor\n🛹\tskateboard board skate\n🛼\troller skate footwear sports derby inline\n🚏\tbus stop transportation wait busstop\n🛣️\tmotorway road cupertino interstate highway\n🛤️\trailway track train transportation\n🛢️\toil drum barrell\n⛽\tfuel pump gas station petroleum diesel fuelpump petrol\n🛞\twheel car transport circle tire turn\n🚨\tpolice car light police ambulance 911 emergency alert error\n🚥\thorizontal traffic light transportation signal\n🚦\tvertical traffic light transportation driving semaphore signal\n🛑\tstop sign stop octagonal\n🚧\tconstruction wip progress caution warning barrier black\n⚓\tanchor ship ferry sea boat admiralty fisherman\n🛟\tring buoy life saver life preserver float rescue safety\n⛵\tsailboat ship summer transportation water sailing boat\n🛶\tcanoe boat paddle water ship\n🚤\tspeedboat ship transportation vehicle summer boat motorboat\n🛳️\tpassenger ship yacht cruise ferry vehicle\n⛴️\tferry boat ship yacht passenger\n🛥️\tmotor boat ship motorboat vehicle\n🚢\tship transportation titanic deploy boat cruise passenger\n✈️\tairplane vehicle transportation flight fly aeroplane plane\n🛩️\tsmall airplane flight transportation fly vehicle aeroplane plane\n🛫\tairplane departure airport flight landing aeroplane departures off\n🛬\tairplane arrival airport flight boarding aeroplane arrivals arriving\n🪂\tparachute fly glide hang parasail skydive\n💺\tseat sit airplane transport bus flight fly\n🚁\thelicopter transportation vehicle fly\n🚟\tsuspension railway vehicle transportation\n🚠\tmountain cableway transportation vehicle ski cable gondola\n🚡\taerial tramway transportation vehicle ski cable car gondola\n🛰️\tsatellite communication gps orbit spaceflight nasa iss\n🚀\trocket launch ship staffmode nasa outer space\n🛸\tflying saucer transportation vehicle ufo alien extraterrestrial fantasy\n🛎️\tbellhop bell service hotel\n🧳\tluggage packing travel suitcase\n⌛\thourglass done time clock oldschool limit exam quiz\n⏳\thourglass not done oldschool time countdown flowing sand timer\n⌚\twatch time accessories apple clock timepiece wrist\n⏰\talarm clock time wake morning\n⏱️\tstopwatch time deadline clock\n⏲️\ttimer clock alarm\n🕰️\tmantelpiece clock time\n🕛\ttwelve o’clock 12 00:00 0000 12:00 1200 time\n🕧\ttwelve-thirty 00:30 0030 12:30 1230 time late\n🕐\tone o’clock 1 1:00 100 13:00 1300 time\n🕜\tone-thirty 1:30 130 13:30 1330 time late\n🕑\ttwo o’clock 2 2:00 200 14:00 1400 time\n🕝\ttwo-thirty 2:30 230 14:30 1430 time late\n🕒\tthree o’clock 3 3:00 300 15:00 1500 time\n🕞\tthree-thirty 3:30 330 15:30 1530 time late\n🕓\tfour o’clock 4 4:00 400 16:00 1600 time\n🕟\tfour-thirty 4:30 430 16:30 1630 time late\n🕔\tfive o’clock 5 5:00 500 17:00 1700 time\n🕠\tfive-thirty 5:30 530 17:30 1730 time late\n🕕\tsix o’clock 6 6:00 600 18:00 1800 time\n🕡\tsix-thirty 6:30 630 18:30 1830 time late\n🕖\tseven o’clock 7 7:00 700 19:00 1900 time\n🕢\tseven-thirty 7:30 730 19:30 1930 time late\n🕗\teight o’clock 8 8:00 800 20:00 2000 time\n🕣\teight-thirty 8:30 830 20:30 2030 time late\n🕘\tnine o’clock 9 9:00 900 21:00 2100 time\n🕤\tnine-thirty 9:30 930 21:30 2130 time late\n🕙\tten o’clock 10 10:00 1000 22:00 2200 time\n🕥\tten-thirty 10:30 1030 22:30 2230 time late\n🕚\televen o’clock 11 11:00 1100 23:00 2300 time\n🕦\televen-thirty 11:30 1130 23:30 2330 time late\n🌑\tnew moon nature twilight planet space night evening\n🌒\twaxing crescent moon nature twilight planet space night evening\n🌓\tfirst quarter moon nature twilight planet space night evening\n🌔\twaxing gibbous moon nature night sky gray twilight planet\n🌕\tfull moon nature yellow twilight planet space night\n🌖\twaning gibbous moon nature twilight planet space night evening\n🌗\tlast quarter moon nature twilight planet space night evening\n🌘\twaning crescent moon nature twilight planet space night evening\n🌙\tcrescent moon night sleep sky evening magic space\n🌚\tnew moon face nature twilight planet space night evening\n🌛\tfirst quarter moon face nature twilight planet space night evening\n🌜\tlast quarter moon face nature twilight planet space night evening\n🌡️\tthermometer weather temperature hot cold\n☀️\tsun weather nature brightness summer beach spring\n🌝\tfull moon face nature twilight planet space night evening\n🌞\tsun with face nature morning sky bright smiley smiling\n🪐\tringed planet outerspace planets saturn saturnine space\n⭐\tstar night yellow gold medium white\n🌟\tglowing star night sparkle awesome good magic glittery\n🌠\tshooting star night photo activity falling meteoroid space\n🌌\tmilky way photo space stars galaxy night sky\n☁️\tcloud weather sky cloudy overcast\n⛅\tsun behind cloud weather nature cloudy morning fall spring\n⛈️\tcloud with lightning and rain weather lightning thunder\n🌤️\tsun behind small cloud weather white\n🌥️\tsun behind large cloud weather white\n🌦️\tsun behind rain cloud weather white\n🌧️\tcloud with rain weather\n🌨️\tcloud with snow weather cold\n🌩️\tcloud with lightning weather thunder\n🌪️\ttornado weather cyclone twister cloud whirlwind\n🌫️\tfog weather cloud\n🌬️\twind face gust air blow blowing cloud mother\n🌀\tcyclone weather swirl blue cloud vortex spiral\n🌈\trainbow nature happy unicorn face photo sky spring\n🌂\tclosed umbrella weather rain drizzle clothing collapsed umbrella pink\n☂️\tumbrella weather spring clothing open rain\n☔\tumbrella with rain drops rainy weather spring clothing drop raining\n⛱️\tumbrella on ground weather summer beach parasol rain sun\n⚡\thigh voltage thunder weather lightning bolt fast zap danger\n❄️\tsnowflake winter season cold weather christmas xmas\n☃️\tsnowman winter season cold weather christmas xmas\n⛄\tsnowman without snow winter season cold weather christmas xmas\n☄️\tcomet space\n🔥\tfire hot cook flame burn lit snapstreak\n💧\tdroplet water drip faucet spring cold comic\n🌊\twater wave sea water wave nature tsunami disaster"],["Activities","🎃\tjack-o-lantern halloween light pumpkin creepy fall activity\n🎄\tchristmas tree festival vacation december xmas celebration activity\n🎆\tfireworks photo festival carnival congratulations activity celebration\n🎇\tsparkler stars night shine activity celebration entertainment\n🧨\tfirecracker dynamite boom explode explosion explosive fireworks\n✨\tsparkles stars shine shiny cool awesome good\n🎈\tballoon party celebration birthday circus activity entertainment\n🎉\tparty popper party congratulations birthday magic circus celebration\n🎊\tconfetti ball festival party birthday circus activity celebration\n🎋\ttanabata tree plant nature branch summer bamboo wish\n🎍\tpine decoration japanese plant nature vegetable panda new years\n🎎\tjapanese dolls japanese toy kimono activity celebration doll\n🎏\tcarp streamer fish japanese koinobori carp banner activity\n🎐\twind chime nature ding spring bell activity celebration\n🎑\tmoon viewing ceremony photo japan asia tsukimi activity autumn\n🧧\tred envelope gift ang good hóngbāo lai luck\n🎀\tribbon decoration pink girl bowtie bow celebration\n🎁\twrapped gift present birthday christmas xmas box celebration\n🎗️\treminder ribbon sports cause support awareness celebration\n🎟️\tadmission tickets sports concert entrance entertainment ticket\n🎫\tticket event concert pass activity admission entertainment\n🎖️\tmilitary medal award winning army celebration decoration medallion\n🏆\ttrophy win award contest place ftw ceremony\n🏅\tsports medal award winning gold winner\n🥇\t1st place medal award winning first gold\n🥈\t2nd place medal award second silver\n🥉\t3rd place medal award third bronze\n⚽\tsoccer ball sports football\n⚾\tbaseball sports balls ball softball\n🥎\tsoftball sports balls ball game glove sport\n🏀\tbasketball sports balls nba ball hoop orange\n🏐\tvolleyball sports balls ball game\n🏈\tamerican football sports balls nfl ball gridiron superbowl\n🏉\trugby football sports team ball league union\n🎾\ttennis sports balls green ball racket racquet\n🥏\tflying disc sports frisbee ultimate game golf sport\n🎳\tbowling sports fun play ball game pin\n🏏\tcricket game sports ball bat field\n🏑\tfield hockey sports ball game stick\n🏒\tice hockey sports game puck stick\n🥍\tlacrosse sports ball stick game goal sport\n🏓\tping pong sports pingpong ball bat game paddle\n🏸\tbadminton sports birdie game racquet shuttlecock\n🥊\tboxing glove sports fighting\n🥋\tmartial arts uniform judo karate taekwondo\n🥅\tgoal net sports catch\n⛳\tflag in hole sports business flag hole summer golf\n⛸️\tice skate sports skating\n🎣\tfishing pole food hobby summer entertainment fish rod\n🤿\tdiving mask sport ocean scuba snorkeling\n🎽\trunning shirt play pageant athletics marathon sash singlet\n🎿\tskis sports winter cold snow boot ski\n🛷\tsled sleigh luge toboggan sledge\n🥌\tcurling stone sports game rock\n🎯\tbullseye game play bar target activity\n🪀\tyo-yo toy fluctuate yoyo\n🪁\tkite wind fly soar toy\n🔫\twater pistol violence weapon revolver gun handgun shoot\n🎱\tpool 8 ball pool hobby game luck magic 8ball\n🔮\tcrystal ball disco party magic circus fortune teller clairvoyant\n🪄\tmagic wand supernature power witch wizard\n🎮\tvideo game play console ps4 controller entertainment gamepad\n🕹️\tjoystick game play entertainment video\n🎰\tslot machine bet gamble vegas fruit machine luck casino\n🎲\tgame die dice random tabletop play luck entertainment\n🧩\tpuzzle piece interlocking puzzle piece clue jigsaw\n🧸\tteddy bear plush stuffed plaything toy\n🪅\tpiñata mexico candy celebration party\n🪩\tmirror ball disco dance party glitter\n🪆\tnesting dolls matryoshka toy doll russia russian\n♠️\tspade suit poker cards suits magic black card\n♥️\theart suit poker cards magic suits black card\n♦️\tdiamond suit poker cards magic suits black card\n♣️\tclub suit poker cards magic suits black card\n♟️\tchess pawn expendable black dupe game piece\n🃏\tjoker poker cards game play magic black\n🀄\tmahjong red dragon game play chinese kanji tile\n🎴\tflower playing cards game sunset red activity card deck\n🎭\tperforming arts acting theater drama activity art comedy\n🖼️\tframed picture photography art frame museum painting\n🎨\tartist palette design paint draw colors activity art\n🧵\tthread needle sewing spool string crafts\n🪡\tsewing needle stitches embroidery sutures tailoring\n🧶\tyarn ball crochet knit crafts\n🪢\tknot rope scout tangled tie twine twist"],["Objects","👓\tglasses fashion accessories eyesight nerdy dork geek\n🕶️\tsunglasses face cool accessories dark eye eyewear\n🥽\tgoggles eyes protection safety clothing eye swimming\n🥼\tlab coat doctor experiment scientist chemist clothing\n🦺\tsafety vest protection emergency\n👔\tnecktie shirt suitup formal fashion cloth business\n👕\tt-shirt fashion cloth casual shirt tee clothing\n👖\tjeans fashion shopping clothing denim pants trousers\n🧣\tscarf neck winter clothes clothing\n🧤\tgloves hands winter clothes clothing hand\n🧥\tcoat jacket clothing\n🧦\tsocks stockings clothes clothing pair stocking\n👗\tdress clothes fashion shopping clothing gown skirt\n👘\tkimono dress fashion women female japanese clothing\n🥻\tsari dress clothing saree shari\n🩱\tone-piece swimsuit fashion bathing clothing suit swim\n🩲\tbriefs clothing bathing brief suit swim swimsuit\n🩳\tshorts clothing bathing pants suit swim swimsuit\n👙\tbikini swimming female woman girl fashion beach\n👚\twoman’s clothes fashion shopping bags female blouse clothing pink\n🪭\tfolding hand fan flamenco hot sensu\n👛\tpurse fashion accessories money sales shopping clothing\n👜\thandbag fashion accessory accessories shopping bag clothing\n👝\tclutch bag bag accessories shopping clothing pouch small\n🛍️\tshopping bags mall buy purchase bag hotel\n🎒\tbackpack student education bag activity rucksack satchel\n🩴\tthong sandal footwear summer beach flip flops jandals\n👞\tman’s shoe fashion male brown clothing dress mans\n👟\trunning shoe shoes sports sneakers athletic clothing runner\n🥾\thiking boot backpacking camping hiking clothing\n🥿\tflat shoe ballet slip-on slipper clothing woman’s\n👠\thigh-heeled shoe fashion shoes female pumps stiletto clothing\n👡\twoman’s sandal shoes fashion flip flops clothing heeled sandals\n🩰\tballet shoes dance clothing pointe shoe\n👢\twoman’s boot shoes fashion boots clothing cowgirl heeled\n🪮\thair pick afro comb\n👑\tcrown king kod leader royalty lord clothing\n👒\twoman’s hat fashion accessories female lady spring bow\n🎩\ttop hat magic gentleman classy circus activity clothing\n🎓\tgraduation cap school college degree university graduation cap\n🧢\tbilled cap cap baseball clothing hat\n🪖\tmilitary helmet army protection soldier warrior\n⛑️\trescue worker’s helmet construction build aid cross face hat\n📿\tprayer beads dhikr religious clothing necklace religion rosary\n💄\tlipstick female girl fashion woman cosmetics gloss\n💍\tring wedding propose marriage valentines diamond fashion\n💎\tgem stone blue ruby diamond jewelry gemstone jewel\n🔇\tmuted speaker sound volume silence quiet cancellation mute\n🔈\tspeaker low volume sound volume silence broadcast soft\n🔉\tspeaker medium volume volume speaker broadcast low one reduce\n🔊\tspeaker high volume volume noise noisy speaker broadcast entertainment\n📢\tloudspeaker volume sound address announcement bullhorn communication\n📣\tmegaphone sound speaker volume bullhorn cheering communication\n📯\tpostal horn instrument music bugle communication entertainment french\n🔔\tbell sound notification christmas xmas chime liberty\n🔕\tbell with slash sound volume mute quiet silent cancellation\n🎼\tmusical score treble clef compose activity entertainment music\n🎵\tmusical note score tone sound activity beamed eighth\n🎶\tmusical notes music score activity entertainment multiple note\n🎙️\tstudio microphone sing recording artist talkshow mic music\n🎚️\tlevel slider scale music\n🎛️\tcontrol knobs dial music\n🎤\tmicrophone sound music pa sing talkshow activity\n🎧\theadphone music score gadgets activity earbud earphone\n📻\tradio communication music podcast program digital entertainment\n🎷\tsaxophone music instrument jazz blues activity entertainment\n🎺\ttrumpet music brass activity entertainment horn instrument\n🪗\taccordion music accordian box concertina squeeze\n🎸\tguitar music instrument acoustic guitar activity bass electric\n🎹\tmusical keyboard piano instrument compose activity entertainment music\n🎻\tviolin music instrument orchestra symphony activity entertainment\n🪕\tbanjo music instructment activity entertainment instrument stringed\n🥁\tdrum music instrument drumsticks snare\n🪘\tlong drum music beat conga djembe rhythm\n🪇\tmaracas music instrument percussion shaker\n🪈\tflute bamboo music instrument pied piper recorder\n📱\tmobile phone technology apple gadgets dial cell communication\n📲\tmobile phone with arrow iphone incoming call calling cell communication\n☎️\ttelephone technology communication dial black phone rotary\n📞\ttelephone receiver technology communication dial call handset phone\n📟\tpager bbcall oldschool 90s beeper bleeper communication\n📠\tfax machine communication technology facsimile\n🔋\tbattery power energy sustain aa phone\n🪫\tlow battery drained dead electronic energy no red\n🔌\telectric plug charger power ac adaptor cable electricity\n💻\tlaptop technology screen display monitor computer desktop\n🖥️\tdesktop computer technology computing screen imac\n🖨️\tprinter paper ink computer\n⌨️\tkeyboard technology computer type input text\n🖱️\tcomputer mouse click button three\n🖲️\ttrackball technology trackpad computer\n💽\tcomputer disk technology record data disk 90s entertainment\n💾\tfloppy disk oldschool technology save 90s 80s computer\n💿\toptical disk technology dvd disk disc 90s cd\n📀\tdvd cd disk disc computer entertainment optical\n🧮\tabacus calculation count counting frame math\n🎥\tmovie camera film record activity cinema entertainment hollywood\n🎞️\tfilm frames movie cinema entertainment strip\n📽️\tfilm projector video tape record movie cinema entertainment\n🎬\tclapper board movie film record activity clapboard director\n📺\ttelevision technology program oldschool show entertainment tv\n📷\tcamera gadgets photography digital entertainment photo video\n📸\tcamera with flash photography gadgets photo video snapshots\n📹\tvideo camera film record camcorder entertainment\n📼\tvideocassette record video oldschool 90s 80s entertainment\n🔍\tmagnifying glass tilted left search zoom find detective icon mag\n🔎\tmagnifying glass tilted right search zoom find detective icon mag\n🕯️\tcandle fire wax light\n💡\tlight bulb light electricity idea comic electric\n🔦\tflashlight dark camping sight night electric light\n🏮\tred paper lantern light paper halloween spooky asian bar\n🪔\tdiya lamp lighting oil\n📔\tnotebook with decorative cover classroom notes record paper study book\n📕\tclosed book read library knowledge textbook learn red\n📖\topen book book read library knowledge literature learn\n📗\tgreen book read library knowledge study textbook\n📘\tblue book read library knowledge learn study textbook\n📙\torange book read library knowledge textbook study\n📚\tbooks literature library study book pile stack\n📓\tnotebook stationery record notes paper study black\n📒\tledger notes paper binder book bound notebook\n📃\tpage with curl documents office paper curled curly page document\n📜\tscroll documents ancient history paper degree document\n📄\tpage facing up documents office paper information document printed\n📰\tnewspaper press headline communication news paper\n🗞️\trolled-up newspaper press headline delivery news paper roll\n📑\tbookmark tabs favorite save order tidy mark marker\n🔖\tbookmark favorite label save mark price tag\n🏷️\tlabel sale tag\n🪙\tcoin money currency gold metal silver treasure\n💰\tmoney bag dollar payment coins sale cream moneybag\n💴\tyen banknote money sales japanese dollar currency bank\n💵\tdollar banknote money sales bill currency american bank\n💶\teuro banknote money sales dollar currency bank banknotes\n💷\tpound banknote british sterling money sales bills uk\n💸\tmoney with wings dollar bills payment sale bank banknote\n💳\tcredit card money sales dollar bill payment shopping\n🧾\treceipt accounting expenses bookkeeping evidence proof\n💹\tchart increasing with yen green-square graph presentation stats bank currency\n✉️\tenvelope letter postal inbox communication email ✉ letter\n📧\te-mail communication inbox email letter symbol\n📨\tincoming envelope email inbox communication fast letter lines\n📩\tenvelope with arrow email communication above down downwards insert\n📤\toutbox tray inbox email box communication letter mail\n📥\tinbox tray email documents box communication letter mail\n📦\tpackage mail gift cardboard box moving communication\n📫\tclosed mailbox with raised flag email inbox communication mail postbox\n📪\tclosed mailbox with lowered flag email communication inbox mail postbox\n📬\topen mailbox with raised flag email inbox communication mail postbox\n📭\topen mailbox with lowered flag email inbox communication mail no postbox\n📮\tpostbox email letter envelope communication mail mailbox\n🗳️\tballot box with ballot election vote voting\n✏️\tpencil stationery write paper writing school study\n✒️\tblack nib pen stationery writing write fountain ✒ fountain\n🖋️\tfountain pen stationery writing write communication left lower\n🖊️\tpen stationery writing write ballpoint communication left\n🖌️\tpaintbrush drawing creativity art brush communication left\n🖍️\tcrayon drawing creativity communication left lower\n📝\tmemo write documents stationery pencil paper writing\n💼\tbriefcase business documents work law legal job\n📁\tfile folder documents business office closed directory manilla\n📂\topen file folder documents load\n🗂️\tcard index dividers organizing business stationery\n📅\tcalendar schedule date day emoji july world\n📆\ttear-off calendar schedule date planning day desk\n🗒️\tspiral notepad memo stationery note pad\n🗓️\tspiral calendar date schedule planning pad\n📇\tcard index business stationery rolodex system\n📈\tchart increasing graph presentation stats recovery business economics\n📉\tchart decreasing graph presentation stats recession business economics\n📊\tbar chart graph presentation stats metrics\n📋\tclipboard stationery documents\n📌\tpushpin stationery mark here location pin tack\n📍\tround pushpin stationery location map here dropped pin\n📎\tpaperclip documents stationery clippy\n🖇️\tlinked paperclips documents stationery communication link paperclip\n📏\tstraight ruler stationery calculate length math school drawing\n📐\ttriangular ruler stationery math architect sketch set triangle\n✂️\tscissors stationery cut black cutting tool\n🗃️\tcard file box business stationery database\n🗄️\tfile cabinet filing organizing\n🗑️\twastebasket bin trash rubbish garbage toss basket\n🔒\tlocked security password padlock closed lock private\n🔓\tunlocked privacy security lock open padlock unlock\n🔏\tlocked with pen security secret fountain ink lock lock with\n🔐\tlocked with key security privacy closed lock secure secret\n🔑\tkey lock door password gold\n🗝️\told key lock door password clue\n🔨\thammer tools build create claw handyman tool\n🪓\taxe tool chop cut hatchet split wood\n⛏️\tpick tools dig mining pickaxe tool\n⚒️\thammer and pick tools build create tool\n🛠️\thammer and wrench tools build create spanner tool\n🗡️\tdagger weapon knife\n⚔️\tcrossed swords weapon\n💣\tbomb boom explode explosion terrorism comic\n🪃\tboomerang weapon australia rebound repercussion\n🏹\tbow and arrow sports archer archery sagittarius tool zodiac\n🛡️\tshield protection security weapon\n🪚\tcarpentry saw cut chop carpenter hand lumber tool\n🔧\twrench tools diy ikea fix maintainer spanner\n🪛\tscrewdriver tools screw tool\n🔩\tnut and bolt handy tools fix screw tool\n⚙️\tgear cog cogwheel tool\n🗜️\tclamp tool compress compression table vice winzip\n⚖️\tbalance scale law fairness weight justice libra scales\n🦯\twhite cane accessibility blind white\n🔗\tlink rings url chain hyperlink linked symbol\n⛓️\tchains lock arrest chain\n🪝\thook tools catch crook curve ensnare fishing\n🧰\ttoolbox tools diy fix maintainer mechanic chest\n🧲\tmagnet attraction magnetic horseshoe\n🪜\tladder tools climb rung step tool\n⚗️\talembic distilling science experiment chemistry tool\n🧪\ttest tube chemistry experiment lab science chemist test\n🧫\tpetri dish bacteria biology culture lab biologist\n🧬\tdna biologist genetics life double evolution gene\n🔬\tmicroscope laboratory experiment zoomin science study investigate\n🔭\ttelescope stars space zoom science astronomy stargazing\n📡\tsatellite antenna communication future radio space dish signal\n💉\tsyringe health hospital drugs blood medicine needle\n🩸\tdrop of blood period hurt harm wound bleed doctor\n💊\tpill health medicine doctor pharmacy drug capsule\n🩹\tadhesive bandage heal aid band doctor medicine plaster\n🩼\tcrutch accessibility assist aid cane disability hurt\n🩺\tstethoscope health doctor heart medicine healthcheck\n🩻\tx-ray skeleton medicine bones doctor medical ray\n🚪\tdoor house entry exit doorway front\n🛗\televator lift accessibility hoist\n🪞\tmirror reflection reflector speculum\n🪟\twindow scenery air frame fresh glass opening\n🛏️\tbed sleep rest bedroom hotel\n🛋️\tcouch and lamp read chill hotel lounge settee sofa\n🪑\tchair sit furniture seat\n🚽\ttoilet restroom wc washroom bathroom potty loo\n🪠\tplunger toilet cup force plumber suction\n🚿\tshower clean water bathroom bath head\n🛁\tbathtub clean shower bathroom bath bubble\n🪤\tmouse trap cheese bait mousetrap rodent snare\n🪒\trazor cut sharp shave\n🧴\tlotion bottle moisturizer sunscreen shampoo\n🧷\tsafety pin diaper punk rock\n🧹\tbroom cleaning sweeping witch brush sweep\n🧺\tbasket laundry farming picnic\n🧻\troll of paper roll toilet towels\n🪣\tbucket water container cask pail vat\n🧼\tsoap bar bathing cleaning lather soapdish\n🫧\tbubbles soap fun carbonation sparkling burp clean\n🪥\ttoothbrush hygiene dental bathroom brush clean teeth\n🧽\tsponge absorbing cleaning porous\n🧯\tfire extinguisher quench extinguish\n🛒\tshopping cart trolley\n🚬\tcigarette kills tobacco joint smoke activity smoking\n⚰️\tcoffin vampire dead die death rip graveyard\n🪦\theadstone death rip grave cemetery graveyard halloween\n⚱️\tfuneral urn dead die death rip ashes vase\n🧿\tnazar amulet bead charm boncuğu evil eye talisman\n🪬\thamsa religion protection amulet fatima hand mary\n🗿\tmoai rock easter island carving face human moyai\n🪧\tplacard announcement demonstration lawn picket post protest\n🪪\tidentification card document credentials id license security"],["Symbols","🏧\tatm sign money sales cash blue-square payment bank\n🚮\tlitter in bin sign blue-square sign human info its litterbox\n🚰\tpotable water blue-square liquid restroom cleaning faucet drink\n♿\twheelchair symbol blue-square disabled accessibility access accessible bathroom\n🚹\tmen’s room toilet restroom wc blue-square gender male\n🚺\twomen’s room purple-square woman female toilet loo restroom\n🚻\trestroom blue-square toilet refresh wc gender bathroom\n🚼\tbaby symbol orange-square child change changing nursery station\n🚾\twater closet toilet restroom blue-square lavatory wc\n🛂\tpassport control custom blue-square border permissions authorization roles\n🛃\tcustoms passport border blue-square\n🛄\tbaggage claim blue-square airport transport\n🛅\tleft luggage blue-square travel baggage bag with key locked\n⚠️\twarning exclamation wip alert error problem issue\n🚸\tchildren crossing school warning danger sign driving yellow-diamond\n⛔\tno entry limit security privacy bad denied stop\n🚫\tprohibited forbid stop limit denied disallow circle\n🚳\tno bicycles no bikes bicycle bike cyclist prohibited circle\n🚭\tno smoking cigarette blue-square smell smoke forbidden not\n🚯\tno littering trash bin garbage circle do forbidden\n🚱\tnon-potable water drink faucet tap circle drinking forbidden\n🚷\tno pedestrians rules crossing walking circle forbidden not\n📵\tno mobile phones iphone mute circle cell communication forbidden\n🔞\tno one under eighteen 18 drink pub night minor circle\n☢️\tradioactive nuclear danger international radiation sign symbol\n☣️\tbiohazard danger sign\n⬆️\tup arrow blue-square continue top direction black cardinal\n↗️\tup-right arrow blue-square point direction diagonal northeast east\n➡️\tright arrow blue-square next black cardinal direction east\n↘️\tdown-right arrow blue-square direction diagonal southeast east intercardinal\n⬇️\tdown arrow blue-square direction bottom black cardinal downwards\n↙️\tdown-left arrow blue-square direction diagonal southwest intercardinal left arrow\n⬅️\tleft arrow blue-square previous back black cardinal direction\n↖️\tup-left arrow blue-square point direction diagonal northwest intercardinal\n↕️\tup-down arrow blue-square direction way vertical arrows intercardinal\n↔️\tleft-right arrow shape direction horizontal sideways arrows horizontal arrows\n↩️\tright arrow curving left back return blue-square undo enter curved\n↪️\tleft arrow curving right blue-square return rotate direction email forward\n⤴️\tright arrow curving up blue-square direction top heading pointing rightwards\n⤵️\tright arrow curving down blue-square direction bottom curved downwards heading\n🔃\tclockwise vertical arrows sync cycle round repeat arrow circle\n🔄\tcounterclockwise arrows button blue-square sync cycle anticlockwise arrow circle\n🔙\tback arrow arrow words return above leftwards\n🔚\tend arrow words arrow above leftwards\n🔛\ton! arrow arrow words above exclamation left mark\n🔜\tsoon arrow arrow words above rightwards\n🔝\ttop arrow words blue-square above up upwards\n🛐\tplace of worship religion church temple prayer building religious\n⚛️\tatom symbol science physics chemistry atheist\n🕉️\tom hinduism buddhism sikhism jainism aumkara hindu\n✡️\tstar of david judaism jew jewish magen religion\n☸️\twheel of dharma hinduism buddhism sikhism jainism buddhist helm\n☯️\tyin yang balance religion tao taoist\n✝️\tlatin cross christianity christian religion\n☦️\torthodox cross suppedaneum religion christian\n☪️\tstar and crescent islam muslim religion\n☮️\tpeace symbol hippie sign\n🕎\tmenorah hanukkah candles jewish branches candelabrum candlestick\n🔯\tdotted six-pointed star purple-square religion jewish hexagram dot fortune\n🪯\tkhanda sikhism religion\n♈\taries sign purple-square zodiac astrology ram\n♉\ttaurus purple-square sign zodiac astrology bull ox\n♊\tgemini sign zodiac purple-square astrology twins\n♋\tcancer sign zodiac purple-square astrology crab\n♌\tleo sign purple-square zodiac astrology lion\n♍\tvirgo sign zodiac purple-square astrology maiden virgin\n♎\tlibra sign purple-square zodiac astrology balance justice\n♏\tscorpio sign zodiac purple-square astrology scorpion scorpius\n♐\tsagittarius sign zodiac purple-square astrology archer\n♑\tcapricorn sign zodiac purple-square astrology goat\n♒\taquarius sign purple-square zodiac astrology bearer water\n♓\tpisces purple-square sign zodiac astrology fish\n⛎\tophiuchus sign purple-square constellation astrology bearer serpent\n🔀\tshuffle tracks button blue-square shuffle music random arrow arrows\n🔁\trepeat button loop record arrow arrows circle clockwise\n🔂\trepeat single button blue-square loop arrow arrows circle circled\n▶️\tplay button blue-square right direction play arrow black\n⏩\tfast-forward button blue-square play speed continue arrow black\n⏭️\tnext track button forward next blue-square arrow bar black\n⏯️\tplay or pause button blue-square play pause arrow bar black\n◀️\treverse button blue-square left direction arrow backward black\n⏪\tfast reverse button play blue-square arrow black double left\n⏮️\tlast track button backward arrow bar black double left\n🔼\tupwards button blue-square triangle direction point forward top\n⏫\tfast up button blue-square direction top arrow black double\n🔽\tdownwards button blue-square direction bottom arrow down pointing\n⏬\tfast down button blue-square direction bottom arrow black double\n⏸️\tpause button pause blue-square bar double symbol vertical\n⏹️\tstop button blue-square black for square symbol\n⏺️\trecord button blue-square black circle for symbol\n⏏️\teject button blue-square symbol\n🎦\tcinema blue-square record film movie curtain stage\n🔅\tdim button sun afternoon warm summer brightness decrease\n🔆\tbright button sun light brightness high increase symbol\n📶\tantenna bars blue-square reception phone internet connection wifi\n🛜\twireless wifi internet contactless signal\n📳\tvibration mode orange-square phone cell communication heart mobile\n📴\tmobile phone off mute orange-square silence quiet cell communication\n♀️\tfemale sign woman women lady girl symbol venus\n♂️\tmale sign man boy men mars symbol\n⚧️\ttransgender symbol transgender lgbtq female lgbt male pride\n✖️\tmultiply math calculation cancel heavy symbol\n➕\tplus math calculation addition more increase heavy\n➖\tminus math calculation subtract less heavy symbol\n➗\tdivide math calculation heavy symbol\n🟰\theavy equals sign math equality\n♾️\tinfinity forever paper permanent sign unbounded universal\n‼️\tdouble exclamation mark exclamation surprise bangbang punctuation red\n⁉️\texclamation question mark wat punctuation surprise interrobang red\n❓\tred question mark doubt confused black ornament punctuation red\n❔\twhite question mark doubts gray huh confused grey ornament\n❕\twhite exclamation mark surprise punctuation gray wow warning grey\n❗\tred exclamation mark heavy exclamation mark danger surprise punctuation wow warning\n〰️\twavy dash draw line moustache mustache squiggle scribble\n💱\tcurrency exchange money sales dollar travel bank\n💲\theavy dollar sign money sales payment currency buck\n⚕️\tmedical symbol health hospital aesculapius asclepius asklepios care\n♻️\trecycling symbol arrow environment garbage trash black green\n⚜️\tfleur-de-lis decorative scout new orleans saints scouts\n🔱\ttrident emblem weapon spear anchor pitchfork ship tool\n📛\tname badge fire forbid tag tofu\n🔰\tjapanese symbol for beginner badge shield chevron green leaf mark\n⭕\thollow red circle circle round correct heavy large mark\n✅\tcheck mark button green-square ok agree vote election answer\n☑️\tcheck box with check ok agree confirm black-square vote election\n✔️\tcheck mark ok nike answer yes tick heavy\n❌\tcross mark no delete remove cancel red multiplication\n❎\tcross mark button x green-square no deny negative square\n➰\tcurly loop scribble draw shape squiggle curl curling\n➿\tdouble curly loop tape cassette curl curling voicemail\n〽️\tpart alternation mark graph presentation stats business economics bad\n✳️\teight-spoked asterisk star sparkle green-square\n✴️\teight-pointed star orange-square shape polygon black orange\n❇️\tsparkle stars green-square awesome good fireworks\n©️\tcopyright ip license circle law legal c\n®️\tregistered alphabet circle r sign\n™️\ttrade mark trademark brand law legal sign tm\n#️⃣\tkeycap # symbol blue-square twitter hash hashtag key\n*️⃣\tkeycap * star keycap asterisk\n0️⃣\tkeycap 0 0 numbers blue-square null zero digit\n1️⃣\tkeycap 1 blue-square numbers 1 one digit\n2️⃣\tkeycap 2 numbers 2 prime blue-square two digit\n3️⃣\tkeycap 3 3 numbers prime blue-square three digit\n4️⃣\tkeycap 4 4 numbers blue-square four digit\n5️⃣\tkeycap 5 5 numbers blue-square prime five digit\n6️⃣\tkeycap 6 6 numbers blue-square six digit\n7️⃣\tkeycap 7 7 numbers blue-square prime seven digit\n8️⃣\tkeycap 8 8 blue-square numbers eight digit\n9️⃣\tkeycap 9 blue-square numbers 9 nine digit\n🔟\tkeycap 10 numbers 10 blue-square ten number\n🔠\tinput latin uppercase alphabet words letters uppercase blue-square abcd\n🔡\tinput latin lowercase blue-square letters lowercase alphabet abcd for\n🔢\tinput numbers numbers blue-square 1234 1 2 3\n🔣\tinput symbols blue-square music note ampersand percent glyphs\n🔤\tinput latin letters blue-square alphabet abc for symbol\n🅰️\ta button (blood type) red-square alphabet letter blood capital latin\n🆎\tab button (blood type) red-square alphabet blood negative squared type\n🅱️\tb button (blood type) red-square alphabet letter blood capital latin\n🆑\tcl button alphabet words red-square clear sign squared\n🆒\tcool button words blue-square sign square squared\n🆓\tfree button blue-square words sign squared\nℹ️\tinformation blue-square alphabet letter i info lowercase\n🆔\tid button purple-square words identification identity sign squared\nⓂ️\tcircled m alphabet blue-circle letter capital circle latin\n🆕\tnew button blue-square words start fresh sign squared\n🆖\tng button blue-square words shape icon blooper good\n🅾️\to button (blood type) alphabet red-square letter blood capital latin\n🆗\tok button good agree yes blue-square okay sign\n🅿️\tp button cars blue-square alphabet letter capital latin\n🆘\tsos button help red-square words emergency 911 distress\n🆙\tup! button blue-square above high exclamation level mark\n🆚\tvs button words orange-square squared versus\n🈁\tjapanese “here” button blue-square here katakana japanese destination koko\n🈂️\tjapanese “service charge” button japanese blue-square katakana charge” meaning or\n🈷️\tjapanese “monthly amount” button chinese month moon japanese orange-square kanji\n🈶\tjapanese “not free of charge” button orange-square chinese have kanji charge” cjk\n🈯\tjapanese “reserved” button chinese point green-square kanji cjk finger\n🉐\tjapanese “bargain” button chinese kanji obtain get circle acquire\n🈹\tjapanese “discount” button cut divide chinese kanji pink-square bargain\n🈚\tjapanese “free of charge” button nothing chinese kanji japanese orange-square charge”\n🈲\tjapanese “prohibited” button kanji japanese chinese forbidden limit restricted\n🉑\tjapanese “acceptable” button ok good chinese kanji agree yes\n🈸\tjapanese “application” button chinese japanese kanji orange-square apply cjk\n🈴\tjapanese “passing grade” button japanese chinese join kanji red-square agreement\n🈳\tjapanese “vacancy” button kanji japanese chinese empty sky blue-square\n㊗️\tjapanese “congratulations” button chinese kanji japanese red-circle circled congratulate\n㊙️\tjapanese “secret” button privacy chinese sshh kanji red-circle circled\n🈺\tjapanese “open for business” button japanese opening hours orange-square 55b6 business” chinese\n🈵\tjapanese “no vacancy” button full chinese japanese red-square kanji 6e80\n🔴\tred circle shape error danger geometric large\n🟠\torange circle round geometric large\n🟡\tyellow circle round geometric large\n🟢\tgreen circle round geometric large\n🔵\tblue circle shape icon button geometric large\n🟣\tpurple circle round geometric large\n🟤\tbrown circle round geometric large\n⚫\tblack circle shape button round geometric medium\n⚪\twhite circle shape round geometric medium\n🟥\tred square card geometric large\n🟧\torange square geometric large\n🟨\tyellow square card geometric large\n🟩\tgreen square geometric large\n🟦\tblue square geometric large\n🟪\tpurple square geometric large\n🟫\tbrown square geometric large\n⬛\tblack large square shape icon button geometric\n⬜\twhite large square shape icon stone button geometric\n◼️\tblack medium square shape button icon geometric\n◻️\twhite medium square shape stone icon geometric\n◾\tblack medium-small square icon shape button geometric\n◽\twhite medium-small square shape stone icon button geometric\n▪️\tblack small square shape icon geometric\n▫️\twhite small square shape icon geometric\n🔶\tlarge orange diamond shape jewel gem geometric\n🔷\tlarge blue diamond shape jewel gem geometric\n🔸\tsmall orange diamond shape jewel gem geometric\n🔹\tsmall blue diamond shape jewel gem geometric\n🔺\tred triangle pointed up shape direction up top geometric pointing\n🔻\tred triangle pointed down shape direction bottom geometric pointing small\n💠\tdiamond with a dot jewel blue gem crystal fancy comic\n🔘\tradio button input old music circle geometric\n🔳\twhite square button shape input geometric outlined\n🔲\tblack square button shape input frame geometric"],["Flags","🏁\tchequered flag contest finishline race gokart checkered finish\n🚩\ttriangular flag mark milestone place pole post red\n🎌\tcrossed flags japanese nation country border activity celebration\n🏴\tblack flag pirate waving\n🏳️\twhite flag losing loser lost surrender give up fail\n🏳️‍🌈\trainbow flag flag rainbow pride gay lgbt queer\n🏳️‍⚧️\ttransgender flag transgender flag pride lgbtq blue lgbt\n🏴‍☠️\tpirate flag skull crossbones flag banner jolly plunder\n🇦🇨\tflag ascension island\n🇦🇩\tflag andorra ad flag nation country banner andorra\n🇦🇪\tflag united arab emirates united arab emirates flag nation country\n🇦🇫\tflag afghanistan af flag nation country banner afghanistan\n🇦🇬\tflag antigua & barbuda antigua barbuda flag nation country banner\n🇦🇮\tflag anguilla ai flag nation country banner anguilla\n🇦🇱\tflag albania al flag nation country banner albania\n🇦🇲\tflag armenia am flag nation country banner armenia\n🇦🇴\tflag angola ao flag nation country banner angola\n🇦🇶\tflag antarctica aq flag nation country banner antarctica\n🇦🇷\tflag argentina ar flag nation country banner argentina\n🇦🇸\tflag american samoa american ws flag nation country banner\n🇦🇹\tflag austria at flag nation country banner austria\n🇦🇺\tflag australia au flag nation country banner australia\n🇦🇼\tflag aruba aw flag nation country banner aruba\n🇦🇽\tflag åland islands åland islands flag nation country banner\n🇦🇿\tflag azerbaijan az flag nation country banner azerbaijan\n🇧🇦\tflag bosnia & herzegovina bosnia herzegovina flag nation country banner\n🇧🇧\tflag barbados bb flag nation country banner barbados\n🇧🇩\tflag bangladesh bd flag nation country banner bangladesh\n🇧🇪\tflag belgium be flag nation country banner belgium\n🇧🇫\tflag burkina faso burkina faso flag nation country banner\n🇧🇬\tflag bulgaria bg flag nation country banner bulgaria\n🇧🇭\tflag bahrain bh flag nation country banner bahrain\n🇧🇮\tflag burundi bi flag nation country banner burundi\n🇧🇯\tflag benin bj flag nation country banner benin\n🇧🇱\tflag st. barthélemy saint barthélemy flag nation country banner\n🇧🇲\tflag bermuda bm flag nation country banner bermuda\n🇧🇳\tflag brunei bn darussalam flag nation country banner\n🇧🇴\tflag bolivia bo flag nation country banner bolivia\n🇧🇶\tflag caribbean netherlands bonaire flag nation country banner caribbean netherlands\n🇧🇷\tflag brazil br flag nation country banner brazil\n🇧🇸\tflag bahamas bs flag nation country banner bahamas\n🇧🇹\tflag bhutan bt flag nation country banner bhutan\n🇧🇻\tflag bouvet island norway\n🇧🇼\tflag botswana bw flag nation country banner botswana\n🇧🇾\tflag belarus by flag nation country banner belarus\n🇧🇿\tflag belize bz flag nation country banner belize\n🇨🇦\tflag canada ca flag nation country banner canada\n🇨🇨\tflag cocos (keeling) islands cocos keeling islands flag nation country\n🇨🇩\tflag congo - kinshasa congo democratic republic flag nation country\n🇨🇫\tflag central african republic central african republic flag nation country\n🇨🇬\tflag congo - brazzaville congo flag nation country banner congo brazzaville\n🇨🇭\tflag switzerland ch flag nation country banner switzerland\n🇨🇮\tflag côte d’ivoire ivory coast flag nation country banner\n🇨🇰\tflag cook islands cook islands flag nation country banner\n🇨🇱\tflag chile flag nation country banner chile chilean\n🇨🇲\tflag cameroon cm flag nation country banner cameroon\n🇨🇳\tflag china china chinese prc flag country nation\n🇨🇴\tflag colombia co flag nation country banner colombia\n🇨🇵\tflag clipperton island\n🇨🇷\tflag costa rica costa rica flag nation country banner\n🇨🇺\tflag cuba cu flag nation country banner cuba\n🇨🇻\tflag cape verde cabo verde flag nation country banner\n🇨🇼\tflag curaçao curaçao flag nation country banner curacao\n🇨🇽\tflag christmas island christmas island flag nation country banner\n🇨🇾\tflag cyprus cy flag nation country banner cyprus\n🇨🇿\tflag czechia cz flag nation country banner czechia\n🇩🇪\tflag germany german nation flag country banner germany\n🇩🇬\tflag diego garcia\n🇩🇯\tflag djibouti dj flag nation country banner djibouti\n🇩🇰\tflag denmark dk flag nation country banner denmark\n🇩🇲\tflag dominica dm flag nation country banner dominica\n🇩🇴\tflag dominican republic dominican republic flag nation country banner\n🇩🇿\tflag algeria dz flag nation country banner algeria\n🇪🇦\tflag ceuta & melilla\n🇪🇨\tflag ecuador ec flag nation country banner ecuador\n🇪🇪\tflag estonia ee flag nation country banner estonia\n🇪🇬\tflag egypt eg flag nation country banner egypt\n🇪🇭\tflag western sahara western sahara flag nation country banner\n🇪🇷\tflag eritrea er flag nation country banner eritrea\n🇪🇸\tflag spain spain flag nation country banner ceuta\n🇪🇹\tflag ethiopia et flag nation country banner ethiopia\n🇪🇺\tflag european union european union flag banner eu\n🇫🇮\tflag finland fi flag nation country banner finland\n🇫🇯\tflag fiji fj flag nation country banner fiji\n🇫🇰\tflag falkland islands falkland islands malvinas flag nation country\n🇫🇲\tflag micronesia micronesia federated states flag nation country\n🇫🇴\tflag faroe islands faroe islands flag nation country banner\n🇫🇷\tflag france banner flag nation france french country\n🇬🇦\tflag gabon ga flag nation country banner gabon\n🇬🇧\tflag united kingdom united kingdom great britain northern ireland\n🇬🇩\tflag grenada gd flag nation country banner grenada\n🇬🇪\tflag georgia ge flag nation country banner georgia\n🇬🇫\tflag french guiana french guiana flag nation country banner\n🇬🇬\tflag guernsey gg flag nation country banner guernsey\n🇬🇭\tflag ghana gh flag nation country banner ghana\n🇬🇮\tflag gibraltar gi flag nation country banner gibraltar\n🇬🇱\tflag greenland gl flag nation country banner greenland\n🇬🇲\tflag gambia gm flag nation country banner gambia\n🇬🇳\tflag guinea gn flag nation country banner guinea\n🇬🇵\tflag guadeloupe gp flag nation country banner guadeloupe\n🇬🇶\tflag equatorial guinea equatorial gn flag nation country banner\n🇬🇷\tflag greece gr flag nation country banner greece\n🇬🇸\tflag south georgia & south sandwich islands south georgia sandwich islands flag nation\n🇬🇹\tflag guatemala gt flag nation country banner guatemala\n🇬🇺\tflag guam gu flag nation country banner guam\n🇬🇼\tflag guinea-bissau gw bissau flag nation country banner\n🇬🇾\tflag guyana gy flag nation country banner guyana\n🇭🇰\tflag hong kong sar china hong kong flag nation country banner\n🇭🇲\tflag heard & mcdonald islands\n🇭🇳\tflag honduras hn flag nation country banner honduras\n🇭🇷\tflag croatia hr flag nation country banner croatia\n🇭🇹\tflag haiti ht flag nation country banner haiti\n🇭🇺\tflag hungary hu flag nation country banner hungary\n🇮🇨\tflag canary islands canary islands flag nation country banner\n🇮🇩\tflag indonesia flag nation country banner indonesia indonesian\n🇮🇪\tflag ireland ie flag nation country banner ireland\n🇮🇱\tflag israel il flag nation country banner israel\n🇮🇲\tflag isle of man isle man flag nation country banner\n🇮🇳\tflag india in flag nation country banner india\n🇮🇴\tflag british indian ocean territory british indian ocean territory flag nation\n🇮🇶\tflag iraq iq flag nation country banner iraq\n🇮🇷\tflag iran iran islamic republic flag nation country\n🇮🇸\tflag iceland is flag nation country banner iceland\n🇮🇹\tflag italy italy flag nation country banner indicator\n🇯🇪\tflag jersey je flag nation country banner jersey\n🇯🇲\tflag jamaica jm flag nation country banner jamaica\n🇯🇴\tflag jordan jo flag nation country banner jordan\n🇯🇵\tflag japan japanese nation flag country banner japan\n🇰🇪\tflag kenya ke flag nation country banner kenya\n🇰🇬\tflag kyrgyzstan kg flag nation country banner kyrgyzstan\n🇰🇭\tflag cambodia kh flag nation country banner cambodia\n🇰🇮\tflag kiribati ki flag nation country banner kiribati\n🇰🇲\tflag comoros km flag nation country banner comoros\n🇰🇳\tflag st. kitts & nevis saint kitts nevis flag nation country\n🇰🇵\tflag north korea north korea nation flag country banner\n🇰🇷\tflag south korea south korea nation flag country banner\n🇰🇼\tflag kuwait kw flag nation country banner kuwait\n🇰🇾\tflag cayman islands cayman islands flag nation country banner\n🇰🇿\tflag kazakhstan kz flag nation country banner kazakhstan\n🇱🇦\tflag laos lao democratic republic flag nation country\n🇱🇧\tflag lebanon lb flag nation country banner lebanon\n🇱🇨\tflag st. lucia saint lucia flag nation country banner\n🇱🇮\tflag liechtenstein li flag nation country banner liechtenstein\n🇱🇰\tflag sri lanka sri lanka flag nation country banner\n🇱🇷\tflag liberia lr flag nation country banner liberia\n🇱🇸\tflag lesotho ls flag nation country banner lesotho\n🇱🇹\tflag lithuania lt flag nation country banner lithuania\n🇱🇺\tflag luxembourg lu flag nation country banner luxembourg\n🇱🇻\tflag latvia lv flag nation country banner latvia\n🇱🇾\tflag libya ly flag nation country banner libya\n🇲🇦\tflag morocco ma flag nation country banner morocco\n🇲🇨\tflag monaco mc flag nation country banner monaco\n🇲🇩\tflag moldova moldova republic flag nation country banner\n🇲🇪\tflag montenegro me flag nation country banner montenegro\n🇲🇫\tflag st. martin st.\n🇲🇬\tflag madagascar mg flag nation country banner madagascar\n🇲🇭\tflag marshall islands marshall islands flag nation country banner\n🇲🇰\tflag north macedonia macedonia flag nation country banner north macedonia\n🇲🇱\tflag mali ml flag nation country banner mali\n🇲🇲\tflag myanmar (burma) mm flag nation country banner myanmar\n🇲🇳\tflag mongolia mn flag nation country banner mongolia\n🇲🇴\tflag macao sar china macao flag nation country banner macao sar china\n🇲🇵\tflag northern mariana islands northern mariana islands flag nation country\n🇲🇶\tflag martinique mq flag nation country banner martinique\n🇲🇷\tflag mauritania mr flag nation country banner mauritania\n🇲🇸\tflag montserrat ms flag nation country banner montserrat\n🇲🇹\tflag malta mt flag nation country banner malta\n🇲🇺\tflag mauritius mu flag nation country banner mauritius\n🇲🇻\tflag maldives mv flag nation country banner maldives\n🇲🇼\tflag malawi mw flag nation country banner malawi\n🇲🇽\tflag mexico mx flag nation country banner mexico\n🇲🇾\tflag malaysia my flag nation country banner malaysia\n🇲🇿\tflag mozambique mz flag nation country banner mozambique\n🇳🇦\tflag namibia na flag nation country banner namibia\n🇳🇨\tflag new caledonia new caledonia flag nation country banner\n🇳🇪\tflag niger ne flag nation country banner niger\n🇳🇫\tflag norfolk island norfolk island flag nation country banner\n🇳🇬\tflag nigeria flag nation country banner nigeria nigerian\n🇳🇮\tflag nicaragua ni flag nation country banner nicaragua\n🇳🇱\tflag netherlands nl flag nation country banner netherlands\n🇳🇴\tflag norway no flag nation country banner norway\n🇳🇵\tflag nepal np flag nation country banner nepal\n🇳🇷\tflag nauru nr flag nation country banner nauru\n🇳🇺\tflag niue nu flag nation country banner niue\n🇳🇿\tflag new zealand new zealand flag nation country banner\n🇴🇲\tflag oman om symbol flag nation country banner oman\n🇵🇦\tflag panama pa flag nation country banner panama\n🇵🇪\tflag peru pe flag nation country banner peru\n🇵🇫\tflag french polynesia french polynesia flag nation country banner\n🇵🇬\tflag papua new guinea papua new guinea flag nation country\n🇵🇭\tflag philippines ph flag nation country banner philippines\n🇵🇰\tflag pakistan pk flag nation country banner pakistan\n🇵🇱\tflag poland pl flag nation country banner poland\n🇵🇲\tflag st. pierre & miquelon saint pierre miquelon flag nation country\n🇵🇳\tflag pitcairn islands pitcairn flag nation country banner pitcairn islands\n🇵🇷\tflag puerto rico puerto rico flag nation country banner\n🇵🇸\tflag palestinian territories palestine palestinian territories flag nation country\n🇵🇹\tflag portugal pt flag nation country banner portugal\n🇵🇼\tflag palau pw flag nation country banner palau\n🇵🇾\tflag paraguay py flag nation country banner paraguay\n🇶🇦\tflag qatar qa flag nation country banner qatar\n🇷🇪\tflag réunion réunion flag nation country banner reunion\n🇷🇴\tflag romania ro flag nation country banner romania\n🇷🇸\tflag serbia rs flag nation country banner serbia\n🇷🇺\tflag russia russian federation flag nation country banner\n🇷🇼\tflag rwanda rw flag nation country banner rwanda\n🇸🇦\tflag saudi arabia flag nation country banner saudi arabia arabian flag\n🇸🇧\tflag solomon islands solomon islands flag nation country banner\n🇸🇨\tflag seychelles sc flag nation country banner seychelles\n🇸🇩\tflag sudan sd flag nation country banner sudan\n🇸🇪\tflag sweden se flag nation country banner sweden\n🇸🇬\tflag singapore sg flag nation country banner singapore\n🇸🇭\tflag st. helena saint helena ascension tristan cunha flag\n🇸🇮\tflag slovenia si flag nation country banner slovenia\n🇸🇯\tflag svalbard & jan mayen\n🇸🇰\tflag slovakia sk flag nation country banner slovakia\n🇸🇱\tflag sierra leone sierra leone flag nation country banner\n🇸🇲\tflag san marino san marino flag nation country banner\n🇸🇳\tflag senegal sn flag nation country banner senegal\n🇸🇴\tflag somalia so flag nation country banner somalia\n🇸🇷\tflag suriname sr flag nation country banner suriname\n🇸🇸\tflag south sudan south sd flag nation country banner\n🇸🇹\tflag são tomé & príncipe sao tome principe flag nation country\n🇸🇻\tflag el salvador el salvador flag nation country banner\n🇸🇽\tflag sint maarten sint maarten dutch flag nation country\n🇸🇾\tflag syria syrian arab republic flag nation country\n🇸🇿\tflag eswatini sz flag nation country banner eswatini\n🇹🇦\tflag tristan da cunha\n🇹🇨\tflag turks & caicos islands turks caicos islands flag nation country\n🇹🇩\tflag chad td flag nation country banner chad\n🇹🇫\tflag french southern territories french southern territories flag nation country\n🇹🇬\tflag togo tg flag nation country banner togo\n🇹🇭\tflag thailand th flag nation country banner thailand\n🇹🇯\tflag tajikistan tj flag nation country banner tajikistan\n🇹🇰\tflag tokelau tk flag nation country banner tokelau\n🇹🇱\tflag timor-leste timor leste flag nation country banner\n🇹🇲\tflag turkmenistan flag nation country banner turkmenistan turkmen\n🇹🇳\tflag tunisia tn flag nation country banner tunisia\n🇹🇴\tflag tonga to flag nation country banner tonga\n🇹🇷\tflag türkiye turkey flag nation country banner tr\n🇹🇹\tflag trinidad & tobago trinidad tobago flag nation country banner\n🇹🇻\tflag tuvalu flag nation country banner tuvalu tuvaluan\n🇹🇼\tflag taiwan tw flag nation country banner taiwan\n🇹🇿\tflag tanzania tanzania united republic flag nation country\n🇺🇦\tflag ukraine ua flag nation country banner ukraine\n🇺🇬\tflag uganda ug flag nation country banner uganda\n🇺🇲\tflag u.s. outlying islands u.s. us\n🇺🇳\tflag united nations un flag banner\n🇺🇸\tflag united states united states america flag nation country\n🇺🇾\tflag uruguay uy flag nation country banner uruguay\n🇺🇿\tflag uzbekistan uz flag nation country banner uzbekistan\n🇻🇦\tflag vatican city vatican city flag nation country banner\n🇻🇨\tflag st. vincent & grenadines saint vincent grenadines flag nation country\n🇻🇪\tflag venezuela ve bolivarian republic flag nation country\n🇻🇬\tflag british virgin islands british virgin islands bvi flag nation\n🇻🇮\tflag u.s. virgin islands virgin islands us flag nation country\n🇻🇳\tflag vietnam viet nam flag nation country banner\n🇻🇺\tflag vanuatu vu flag nation country banner vanuatu\n🇼🇫\tflag wallis & futuna wallis futuna flag nation country banner\n🇼🇸\tflag samoa ws flag nation country banner samoa\n🇽🇰\tflag kosovo xk flag nation country banner kosovo\n🇾🇪\tflag yemen ye flag nation country banner yemen\n🇾🇹\tflag mayotte yt flag nation country banner mayotte\n🇿🇦\tflag south africa south africa flag nation country banner\n🇿🇲\tflag zambia zm flag nation country banner zambia\n🇿🇼\tflag zimbabwe zw flag nation country banner zimbabwe\n🏴󠁧󠁢󠁥󠁮󠁧󠁿\tflag england flag english cross george's st\n🏴󠁧󠁢󠁳󠁣󠁴󠁿\tflag scotland flag scottish andrew's cross saltire st\n🏴󠁧󠁢󠁷󠁬󠁳󠁿\tflag wales flag welsh baner cymru ddraig dragon"]],Yd="meshcore-recent-emoji";let Qd=null;function Jd(){return null!=Qd||(Qd=Xd.map(([e,t])=>({name:e,items:t.split("\n").map(e=>{const[t,i]=e.split("\t");return{emoji:t,words:i}})}))),Qd}function Zd(){try{return JSON.parse(localStorage.getItem(Yd)||"[]")}catch(e){return[]}}let ep=class extends zc{constructor(){super(...arguments),this._cat=-1,this._q=""}firstUpdated(){var e;null===(e=this.renderRoot.querySelector("input"))||void 0===e||e.focus()}_pick(e){!function(e){try{localStorage.setItem(Yd,JSON.stringify([e,...Zd().filter(t=>t!==e)].slice(0,24)))}catch(e){}}(e),this.dispatchEvent(new CustomEvent("emoji-picked",{detail:{emoji:e},bubbles:!0,composed:!0}))}render(){const e=Jd(),t=this._q.trim().length>0,i=t?function(e){const t=e.toLowerCase().trim().split(/\s+/).filter(Boolean);if(0===t.length)return[];const i=[];for(const e of Jd())for(const n of e.items){if(!t.every(e=>n.words.includes(e)))continue;const e=n.words.startsWith(t[0])?0:n.words.includes(` ${t[0]}`)?1:2;i.push([e,n.emoji])}return i.sort((e,t)=>e[0]-t[0]).map(([,e])=>e).slice(0,120)}(this._q):this._cat<0?[...new Set([...Zd(),...Ed])]:e[this._cat].items.map(e=>e.emoji),n=t?"Results":this._cat<0?"Recent":e[this._cat].name;return cc(re||(re=bl`
      <input type="search" placeholder="Search emoji" aria-label="Search emoji" .value=${0}
        @input=${0}
        @keydown=${0}>
      ${0}
      <div class="grid">
        <div class="label">${0}</div>
        ${0}
        ${0}
      </div>
    `),this._q,e=>{this._q=e.target.value},e=>{"Enter"===e.key&&i[0]&&(e.preventDefault(),this._pick(i[0]))},t?"":cc(se||(se=bl`<div class="tabs">
        <button class=${0} title="Recent" @click=${0}>🕘</button>
        ${0}
      </div>`),-1===this._cat?"on":"",()=>{this._cat=-1},e.map((e,t)=>cc(le||(le=bl`<button class=${0} title=${0} @click=${0}>${0}</button>`),this._cat===t?"on":"",e.name,()=>{this._cat=t},e.items[0].emoji))),n,0===i.length?cc(ce||(ce=bl`<div class="none">No emoji found.</div>`)):"",i.map(e=>cc(de||(de=bl`<button @click=${0}>${0}</button>`),()=>this._pick(e),e)))}};ep.styles=Cl(pe||(pe=bl`
    :host { display: block; width: 330px; max-width: calc(100vw - 24px); }
    input { width: 100%; box-sizing: border-box; padding: 7px 10px; margin-bottom: 6px; border-radius: 8px;
      border: 1px solid var(--divider-color, #444); background: transparent; color: var(--primary-text-color); font: inherit; }
    .tabs { display: flex; gap: 2px; overflow-x: auto; border-bottom: 1px solid var(--divider-color, #444); padding-bottom: 4px; }
    .tabs button { background: none; border: none; padding: 4px 6px; font-size: 18px; cursor: pointer; border-radius: 6px; opacity: 0.6; }
    .tabs button.on { opacity: 1; background: rgba(127,127,127,0.2); }
    .grid { display: grid; grid-template-columns: repeat(8, 1fr); height: 220px; overflow-y: auto; padding-top: 6px; align-content: start; }
    .grid button { background: none; border: none; font-size: 22px; padding: 4px 0; cursor: pointer; border-radius: 6px; }
    .grid button:hover { background: rgba(127,127,127,0.2); }
    .label { font-size: 11px; opacity: 0.7; margin: 6px 2px 0; grid-column: 1 / -1; }
    .none { grid-column: 1 / -1; font-size: 13px; opacity: 0.7; padding: 12px 4px; }
  `)),yl([qc()],ep.prototype,"_cat",void 0),yl([qc()],ep.prototype,"_q",void 0),ep=yl([Rc("meshcore-emoji-picker")],ep);let tp=class extends zc{constructor(){super(),this.timestampFormat="relative",this.isChannel=!1,this._contactAdded="",this._reactOpen=null,this._reactAll=!1,this._reactPicker=!1,this._selectedMessage=null,this._showRouteMap=!1,this._confirmResend=!1,gd(this,{isOpen:()=>null!==this._selectedMessage,onEscape:()=>{this._selectedMessage=null,this._showRouteMap=!1,this._confirmResend=!1},getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".message-dialog")}})}render(){return this.group?cc(he||(he=bl`
        ${0}
        ${0}
      `),this._renderGroup(),this._selectedMessage?this._renderMessageDialog(this._selectedMessage):cc(ue||(ue=bl``))):cc(me||(me=bl``))}_renderGroup(){if(!this.group)return cc(ge||(ge=bl``));const e=this.group,t={"message-group":!0,incoming:!e.isOutgoing&&!e.isSystem,outgoing:e.isOutgoing,system:e.isSystem};let i;return e.messages.length>0&&(i=e.messages[0].senderColor||function(e){let t=0;for(let i=0;i<e.length;i++)t=(t<<5)-t+e.charCodeAt(i);const i=["#e57373","#64b5f6","#81c784","#ffb74d","#ba68c8","#4dd0e1","#fff176","#a1887f"];return i[Math.abs(t)%i.length]}(e.sender)),cc(fe||(fe=bl`
      <div class=${0} style=${0}>
        ${0}
        ${0}
      </div>
    `),this._classMap(t),i?`--sender-color: ${i}`:"",e.isSystem||e.isOutgoing?cc(be||(be=bl``)):cc(ve||(ve=bl`<div class="sender">${0}</div>`),e.sender),e.messages.map(e=>this._renderBubble(e)))}_renderBubble(e){if(e.activityTarget)return cc(ye||(ye=bl`<div class="bubble system activity" data-msg-id=${0} title="Show the message"
        @click=${0}>${0} · ${0}</div>`),e.id,t=>{t.stopPropagation(),this.dispatchEvent(new CustomEvent("jump-to-message",{detail:{id:e.activityTarget},bubbles:!0,composed:!0}))},e.text,rd(e.timestamp,this.timestampFormat));const t={bubble:!0,incoming:!e.isOutgoing&&!e.isSystem,outgoing:e.isOutgoing,system:e.isSystem},i=e.isOutgoing&&e.deliveryStatus?this._getStatusLabel(e.deliveryStatus):"",n=rd(e.timestamp,this.timestampFormat),a=e.isOutgoing||e.isSystem||!e.floodScope?"":"*"===e.floodScope?"🌐 all regions":e.floodScope;return cc(_e||(_e=bl`
      <div class=${0} data-msg-id=${0} @click=${0}>
        ${0}
        ${0}
        ${0}
        <div class="timestamp">${0}${0}${0}</div>
      </div>
    `),this._classMap(t),e.id,t=>{t.stopPropagation(),this._selectedMessage=e,this._showRouteMap=!1,this._confirmResend=!1,this._reactOpen=null,this._reactAll=!1,this._reactPicker=!1},this._renderQuote(e),this._renderBody(e),this._renderReactions(e),i?cc(xe||(xe=bl`<span class="delivery-status">${0}</span> · `),i):"",n,a?cc(we||(we=bl` · <span class="flood-scope">${0}</span>`),a):"")}_canResend(e){if(!e.isOutgoing||!e.deliveryStatus)return!1;const t=this._getStatusLabel(e.deliveryStatus);return"Unheard"===t||"Failed"===t}_renderResend(e){var t;if(!this._canResend(e))return cc(ke||(ke=bl``));const i="failed"===(null===(t=e.deliveryStatus)||void 0===t?void 0:t.status),n=i?"No reply came back, so it most likely didn't arrive.":"No repeat was heard. It may still have been delivered, out of your radio's range.";return this._confirmResend?cc($e||($e=bl`
        <div class="message-dialog-resend">
          <div class="resend-note">Resend to this channel? Others may already have it, and they'd see it twice.</div>
          <div class="resend-actions">
            <button class="message-dialog-action secondary" @click=${0}>Cancel</button>
            <button class="message-dialog-action" @click=${0}>Resend</button>
          </div>
        </div>
      `),()=>{this._confirmResend=!1},()=>this._resend(e)):cc(Ce||(Ce=bl`
      <div class="message-dialog-resend">
        <div class="resend-note">${0}</div>
        <button class="message-dialog-action"
          @click=${0}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="vertical-align: -2px; margin-right: 4px;"><path d="M17.65 6.35A7.958 7.958 0 0012 4a8 8 0 108 8h-2a6 6 0 11-1.76-4.24L13 11h7V4l-2.35 2.35z"/></svg>Resend
        </button>
      </div>
    `),n,()=>{this.isChannel&&!i?this._confirmResend=!0:this._resend(e)})}_resend(e){this.dispatchEvent(new CustomEvent("resend-message",{detail:{text:e.text},bubbles:!0,composed:!0})),this._confirmResend=!1,this._selectedMessage=null}_getStatusLabel(e){var t;const i=e.status,n=null!==(t=e.repeaterCount)&&void 0!==t?t:0;if("failed"!==i&&!1===e.repeatsObservable)return"Unconfirmed";if("failed"!==i&&e.collecting&&0===n)return"Waiting...";switch(i){case"pending":case"waiting":return"Waiting...";case"sent":return n>0?"Repeated":"Unheard";case"delivered":return"Delivered";case"failed":return"Failed";default:return"Sent"}}_renderBody(e){const t=e.isSystem?null:function(e){var t;const i=Kd.exec(e);if(!i)return null;const n=Number(i[1]),a=Number(i[2]);return Math.abs(n)>90||Math.abs(a)>180?null:{lat:n,lon:a,label:(null!==(t=i[3])&&void 0!==t?t:"").trim()}}(e.text);if(t){const e=`https://www.openstreetmap.org/?mlat=${t.lat}&mlon=${t.lon}#map=16/${t.lat}/${t.lon}`;return cc(Se||(Se=bl`<div class="card">
        <div class="card-title">📍 ${0}</div>
        <div class="card-meta">${0}, ${0}</div>
        <a class="card-link" href=${0} target="_blank" rel="noopener noreferrer" @click=${0}>Open map</a>
      </div>`),t.label||"Location",t.lat.toFixed(5),t.lon.toFixed(5),e,e=>e.stopPropagation())}const i=e.isSystem?null:function(e){const t=Ud.exec(e);if(!t)return null;const i=(e.slice(0,t.index)+e.slice(t.index+t[0].length)).replace(/\s+/g," ").trim();return{publicKey:t[1].toLowerCase(),type:Number(t[2]),name:t[3].trim(),caption:i}}(e.text);if(i){var n;const t=this._contactAdded===i.publicKey;return cc(Me||(Me=bl`
        ${0}
        <div class="card ${0}">
          <div class="card-title">👤 ${0}</div>
          <div class="card-meta">${0} · ${0}…${0}</div>
          ${0}
        </div>`),i.caption?cc(ze||(ze=bl`<div class="message-text">${0}</div>`),this._renderTextWithMentions(i.caption,e.mentions)):"",i.caption?"attached":"",i.name||"Contact",null!==(n=Wd[i.type])&&void 0!==n?n:"Node",i.publicKey.slice(0,6),i.publicKey.slice(-6),e.isOutgoing?"":cc(Ae||(Ae=bl`<button class="card-link" ?disabled=${0} @click=${0}>${0}</button>`),t,e=>{e.stopPropagation(),this._addSharedContact(i.publicKey,i.name)},t?"Added":"Add contact"))}return cc(Re||(Re=bl`<div class="message-text">${0}</div>`),this._renderTextWithMentions(e.text,e.mentions))}async _addSharedContact(e,t){var i;const n=null===(i=this.getHass)||void 0===i?void 0:i.call(this);n&&(await Gc(n,e,t,this.entryId)).success&&(this._contactAdded=e,this.dispatchEvent(new CustomEvent("contacts-changed",{bubbles:!0,composed:!0})))}_renderReactions(e){var t,i;const n=null!==(t=null===(i=this.reactionsFor)||void 0===i?void 0:i.call(this,e.id))&&void 0!==t?t:[];return 0===n.length?"":cc(Ie||(Ie=bl`<div class="reactions">${0}</div>`),n.map(e=>cc(Oe||(Oe=bl`<span class="reaction" title=${0}>${0}${0}</span>`),e.senders.join(", "),e.emoji,e.senders.length>1?cc(De||(De=bl` <b>${0}</b>`),e.senders.length):"")))}_renderReactionList(e){var t,i;const n=null!==(t=null===(i=this.reactionsFor)||void 0===i?void 0:i.call(this,e.id))&&void 0!==t?t:[];if(0===n.length)return"";const a=n.reduce((e,t)=>e+t.who.length,0),o=new Set(n.filter(e=>e.senders.includes("You")).map(e=>e.emoji)),r=this._reactOpen,s=(e,t,i=!1)=>cc(qe||(qe=bl`<button
      class="rs-chip ${0} ${0}" aria-expanded=${0}
      @click=${0}>${0}</button>`),r===e?"on":"",i?"mine":"",r===e,()=>{this._reactOpen=r===e?null:e,this._reactAll=!1},t);let l=r?n.filter(e=>"*"===r||e.emoji===r).flatMap(e=>e.who.map(t=>({emoji:e.emoji,...t}))).sort((e,t)=>t.time.getTime()-e.time.getTime()):[];const c=l.length-5;return!this._reactAll&&c>0&&(l=l.slice(0,5)),cc(Te||(Te=bl`<div class="reaction-summary">
      <div class="rs-chips">
        ${0}
        ${0}
      </div>
      ${0}
    </div>`),[...n].sort((e,t)=>t.who.length-e.who.length).map(e=>s(e.emoji,`${e.emoji} ${e.who.length}`,o.has(e.emoji))),s("*",`${a} ${1===a?"reaction":"reactions"}`),r?cc(Fe||(Fe=bl`<div class="reaction-list">
        ${0}
        ${0}
      </div>`),l.map(e=>cc(Ee||(Ee=bl`<div class="reaction-entry"><span class="re-emoji">${0}</span><span class="re-who">${0}</span><span class="re-time">${0}</span></div>`),e.emoji,e.sender,rd(e.time,this.timestampFormat))),!this._reactAll&&c>0?cc(Ne||(Ne=bl`<button class="rs-more" @click=${0}>Show all ${0}</button>`),()=>{this._reactAll=!0},l.length+c):""):"")}_react(e,t){this._selectedMessage=null,this.dispatchEvent(new CustomEvent("react-to-message",{detail:{emoji:t,msg:e},bubbles:!0,composed:!0}))}_renderQuote(e){var t;const i=null===(t=this.quoteFor)||void 0===t?void 0:t.call(this,e);return i?cc(je||(je=bl`<div class="quote ${0}" @click=${0} title=${0}>
      <div class="quote-name">${0}</div>
      <div class="quote-text">${0}</div>
    </div>`),i.id?"linked":"",e=>{e.stopPropagation(),i.id&&this.dispatchEvent(new CustomEvent("jump-to-message",{detail:{id:i.id},bubbles:!0,composed:!0}))},i.id?"Show the original message":"",i.sender,i.text):""}_renderTextWithMentions(e,t){if(0===t.length)return e;const i=t.map(e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")),n=new RegExp(`@\\[(${i.join("|")})\\]|@(${i.join("|")})\\b`,"g"),a=[];let o,r=0;for(;null!==(o=n.exec(e));){var s;o.index>r&&a.push(e.slice(r,o.index));const t=null!==(s=o[1])&&void 0!==s?s:o[2];a.push(cc(Le||(Le=bl`<span class="mention">@${0}</span>`),t)),r=o.index+o[0].length}return r<e.length&&a.push(e.slice(r)),a}_renderMessageDialog(e){var t;const i=e.rxLogData&&e.rxLogData.length>0,n=i?e.rxLogData.map(e=>{const t=e.path_nodes,i=e.hop_count,n=e.snr,a=e.rssi,o=[];return t&&t.length>0?o.push(t.map(e=>e.substring(0,4).toUpperCase()).join(" > ")):void 0!==i?o.push(`${i} hop${1!==i?"s":""}`):o.push("0 hops"),void 0!==n&&o.push(`SNR: ${n}`),void 0!==a&&o.push(`RSSI: ${a}`),o.join(" · ")}).join(" | "):"",a=e.timestamp.toLocaleString(void 0,{weekday:"short",month:"short",day:"numeric",year:"numeric",hour:"numeric",minute:"2-digit",second:"2-digit"}),o="padding: 8px 16px; font-size: 12px; color: var(--secondary-text-color); border-top: 1px solid var(--divider-color, #e0e0e0);";return cc(Pe||(Pe=bl`
      <div class="message-dialog-overlay" @click=${0}>
        <div class="message-dialog ${0}"
             role="dialog" aria-modal="true" aria-label="Message actions"
             @click=${0}>
          <div class="message-dialog-preview">${0}</div>
          ${0}
          ${0}
          <button class="message-dialog-action" @click=${0}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="vertical-align: -2px; margin-right: 4px;"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>Copy Text
          </button>
          ${0}
          ${0}
          ${0}
          ${0}
          <div style=${0}>
            ${0}: ${0}
          </div>
          ${0}
        </div>
      </div>
    `),()=>{this._selectedMessage=null,this._showRouteMap=!1,this._confirmResend=!1},this._showRouteMap?"with-map":"",e=>e.stopPropagation(),e.text,this._renderReactionList(e),e.isSystem?"":cc(Be||(Be=bl`<div class="reaction-row" role="group" aria-label="React">
            ${0}
            <button class="more-react ${0}" title="More emoji" aria-label="More emoji" @click=${0}>＋</button>
          </div>
          ${0}`),Ed.map(t=>cc(He||(He=bl`<button title="React ${0}" @click=${0}>${0}</button>`),t,()=>this._react(e,t),t)),this._reactPicker?"on":"",()=>{this._reactPicker=!this._reactPicker},this._reactPicker?cc(Ve||(Ve=bl`<div class="react-picker" @emoji-picked=${0}><meshcore-emoji-picker></meshcore-emoji-picker></div>`),t=>{t.stopPropagation(),this._reactPicker=!1,this._react(e,t.detail.emoji)}):""),()=>this._copyText(e.text),e.isOutgoing||e.isSystem?cc(Ue||(Ue=bl``)):cc(Ke||(Ke=bl`
                <button class="message-dialog-action" @click=${0}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="vertical-align: -2px; margin-right: 4px;"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/></svg>Reply
                </button>
              `),()=>this._replyToSender(e)),this._renderResend(e),i?cc(We||(We=bl`
                <div class="message-dialog-route" @click=${0}>
                  Route: ${0}
                </div>
              `),()=>this._copyText(n),n):cc(Ge||(Ge=bl``)),this.getHass&&function(e){return qd(e).length>0}(e)?cc(Xe||(Xe=bl`
                <button class="message-dialog-action"
                  @click=${0}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="vertical-align: -2px; margin-right: 4px;"><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/></svg>${0}
                </button>
                ${0}
              `),()=>{this._showRouteMap=!this._showRouteMap},this._showRouteMap?"Hide Route Map":"Show Route on Map",this._showRouteMap?cc(Ye||(Ye=bl`<meshcore-path-map .getHass=${0} .message=${0} .entryId=${0}></meshcore-path-map>`),this.getHass,e,this.entryId):cc(Qe||(Qe=bl``))):cc(Je||(Je=bl``)),o,e.isOutgoing?"Sent":"Received",a,e.isOutgoing&&e.deliveryStatus?cc(Ze||(Ze=bl`
                <div style=${0}>
                  ${0}${0}${0}
                </div>
              `),o,(null!==(t=e.deliveryStatus.repeaterCount)&&void 0!==t?t:0)>0?`${e.deliveryStatus.repeaterCount} repeater${1===e.deliveryStatus.repeaterCount?"":"s"} responded`:"No repeaters responded",e.deliveryStatus.ackReceived?" · ACK received":"",e.deliveryStatus.roundTripMs?` · ${e.deliveryStatus.roundTripMs}ms RTT`:""):cc(et||(et=bl``)))}async _copyText(e){try{await navigator.clipboard.writeText(e)}catch(t){const i=document.createElement("textarea");i.value=e,i.style.position="fixed",i.style.opacity="0",document.body.appendChild(i),i.select(),document.execCommand("copy"),document.body.removeChild(i)}this._selectedMessage=null}_replyToSender(e){this.dispatchEvent(new CustomEvent("reply-to-sender",{detail:{mention:`@[${e.sender}] `,sender:e.sender,text:e.text},bubbles:!0,composed:!0})),this._selectedMessage=null}_classMap(e){return Object.entries(e).filter(([,e])=>e).map(([e])=>e).join(" ")}};tp.styles=Cl(tt||(tt=bl`
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
    .card.attached { margin-top: 6px; padding-top: 6px; border-top: 1px solid rgba(127, 127, 127, 0.35); }
    .card-title { font-weight: 600; word-break: break-word; }
    .card-meta { font-size: 0.8em; opacity: 0.8; }
    .card-link { align-self: flex-start; margin-top: 4px; font: inherit; font-size: 0.85em; color: inherit; text-decoration: underline;
      background: none; border: none; padding: 0; cursor: pointer; }
    .card-link:disabled { text-decoration: none; opacity: 0.7; cursor: default; }
    .reactions { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 4px; }
    .reaction { background: rgba(127, 127, 127, 0.25); border-radius: 10px; padding: 1px 6px; font-size: 0.85em; }
    .bubble.system.activity { cursor: pointer; font-size: 12px; }
    .bubble.system.activity:hover { text-decoration: underline; }
    .reaction-summary { padding: 8px 16px 6px; border-bottom: 1px solid var(--divider-color, #e0e0e0); }
    .rs-chips { display: flex; flex-wrap: wrap; gap: 6px; }
    .rs-chip { border: 1px solid var(--divider-color, #555); background: rgba(127,127,127,0.12); color: var(--primary-text-color);
      border-radius: 12px; padding: 3px 10px; font-size: 13px; cursor: pointer; font-family: inherit; }
    .rs-chip.mine { border-color: var(--primary-color, #03a9f4); }
    .rs-chip.on { background: var(--primary-color, #03a9f4); border-color: var(--primary-color, #03a9f4); color: #fff; }
    .rs-more { background: none; border: none; color: var(--primary-color, #03a9f4); padding: 4px 0; cursor: pointer; font: inherit; font-size: 13px; }
    .reaction-list { padding-top: 6px; max-height: 180px; overflow-y: auto; }
    .more-react { font-size: 20px !important; color: var(--secondary-text-color); }
    .more-react.on { background: rgba(127,127,127,0.2) !important; }
    .react-picker { padding: 8px; border-bottom: 1px solid var(--divider-color, #e0e0e0); display: flex; justify-content: center; }
    .reaction-entry { display: flex; gap: 8px; align-items: center; padding: 3px 0; font-size: 14px; }
    .re-emoji { width: 24px; text-align: center; }
    .re-who { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .re-time { font-size: 12px; color: var(--secondary-text-color); }
    .reaction-row { display: flex; justify-content: space-around; padding: 6px 8px; border-bottom: 1px solid var(--divider-color, #e0e0e0); }
    .reaction-row button { background: none; border: none; font-size: 24px; cursor: pointer; border-radius: 50%; padding: 4px 6px; }
    .reaction-row button:hover { background: rgba(127, 127, 127, 0.2); }
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
      overflow: hidden;
      z-index: 21;
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
  `)),yl([Dc({type:Object})],tp.prototype,"group",void 0),yl([Dc({type:Object})],tp.prototype,"message",void 0),yl([Dc({type:String})],tp.prototype,"timestampFormat",void 0),yl([Dc({attribute:!1})],tp.prototype,"getHass",void 0),yl([Dc({type:String})],tp.prototype,"entryId",void 0),yl([Dc({type:Boolean})],tp.prototype,"isChannel",void 0),yl([Dc({attribute:!1})],tp.prototype,"reactionsFor",void 0),yl([qc()],tp.prototype,"_contactAdded",void 0),yl([qc()],tp.prototype,"_reactOpen",void 0),yl([qc()],tp.prototype,"_reactAll",void 0),yl([qc()],tp.prototype,"_reactPicker",void 0),yl([Dc({attribute:!1})],tp.prototype,"quoteFor",void 0),yl([qc()],tp.prototype,"_selectedMessage",void 0),yl([qc()],tp.prototype,"_showRouteMap",void 0),yl([qc()],tp.prototype,"_confirmResend",void 0),tp=yl([Rc("meshcore-message-bubble")],tp);let ip=class extends zc{constructor(){super(),this._query="",this._fromDate="",this._toDate="",this._results=[],this._totalCount=0,this._searching=!1,this._hasSearched=!1,this._showFilters=!1,this._debounceTimer=null,gd(this,{isOpen:()=>!0,onEscape:()=>this.dispatchEvent(new CustomEvent("search-close",{bubbles:!0,composed:!0}))})}render(){return cc(it||(it=bl`
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
    `),this._query,this._onQueryInput,this._showFilters?"active":"",()=>{this._showFilters=!this._showFilters},this._showFilters?cc(nt||(nt=bl`
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
            `),this._fromDate,e=>{this._fromDate=e.target.value,this._doSearch()},this._toDate,e=>{this._toDate=e.target.value,this._doSearch()}):"",this._hasSearched?cc(at||(at=bl`<div class="result-count">${0} result${0}</div>`),this._totalCount,1!==this._totalCount?"s":""):"",this._searching?cc(ot||(ot=bl`<div class="loading-state">Searching...</div>`)):this._hasSearched?0===this._results.length?cc(st||(st=bl`
                  <div class="empty-state">
                    <div class="empty-icon"><svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" opacity="0.5"><path d="M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 14H4V8h4v2c0 1.1.9 2 2 2h6v2h-2v2h2v2h-2v2h6V10h-4v10h2z"/></svg></div>
                    <div class="empty-text">No messages found</div>
                  </div>
                `)):this._results.map(e=>this._renderResult(e)):cc(rt||(rt=bl`
                <div class="empty-state">
                  <div class="empty-icon"><svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" opacity="0.5"><path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></div>
                  <div class="empty-text">Search your message history</div>
                </div>
              `)))}_renderResult(e){const t=new Date(e.timestamp),i=t.toLocaleDateString(void 0,{month:"short",day:"numeric"}),n=t.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"}),a=this._highlightQuery(e.text);return cc(lt||(lt=bl`
      <div class="result-item" @click=${0}>
        <div class="result-meta">
          <span class="result-sender">${0}</span>
          <span class="result-conversation">${0}</span>
          <span>${0} ${0}</span>
        </div>
        <div class="result-text">${0}</div>
      </div>
    `),()=>this._onResultClick(e),e.sender,e.conversation_name,i,n,a)}_highlightQuery(e){if(!this._query.trim())return e;const t=this._query.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),i=new RegExp(`(${t})`,"gi"),n=e.split(i),a=this._query.toLowerCase();return n.map(e=>e.toLowerCase()===a?cc(ct||(ct=bl`<mark>${0}</mark>`),e):e)}_onQueryInput(e){this._query=e.target.value,null!==this._debounceTimer&&clearTimeout(this._debounceTimer);const t=this._query.trim().length,i=t>=2,n=0===t,a=!(!this._fromDate&&!this._toDate);i||n&&a?this._debounceTimer=window.setTimeout(()=>this._doSearch(),400):(this._results=[],this._hasSearched=!1)}async _doSearch(){if(!this.hass||!this.entityId)return;const e=this._query.trim(),t=e.length>0,i=!(!this._fromDate&&!this._toDate);if(!t&&!i)return this._results=[],this._totalCount=0,void(this._hasSearched=!1);this._searching=!0,this._hasSearched=!0;try{const t={type:"meshcore_chat/search_stored_messages",query:e,entity_id:this.entityId,limit:100};this._fromDate&&(t.from_date=`${this._fromDate}T00:00:00`),this._toDate&&(t.to_date=`${this._toDate}T23:59:59.999999`);const i=await this.hass.callWS(t);this._results=i.results||[],this._totalCount=this._results.length}catch(e){this._results=[],this._totalCount=0}finally{this._searching=!1}}_onResultClick(e){this.dispatchEvent(new CustomEvent("result-selected",{detail:{entityId:e.entity_id,messageId:e.id,conversationName:e.conversation_name,timestamp:e.timestamp},bubbles:!0,composed:!0}))}};ip.styles=Cl(dt||(dt=bl`
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
  `)),yl([Dc({type:Object})],ip.prototype,"hass",void 0),yl([Dc({type:String})],ip.prototype,"entryId",void 0),yl([Dc({type:String})],ip.prototype,"entityId",void 0),yl([Dc({type:String})],ip.prototype,"meshNodeName",void 0),yl([qc()],ip.prototype,"_query",void 0),yl([qc()],ip.prototype,"_fromDate",void 0),yl([qc()],ip.prototype,"_toDate",void 0),yl([qc()],ip.prototype,"_results",void 0),yl([qc()],ip.prototype,"_totalCount",void 0),yl([qc()],ip.prototype,"_searching",void 0),yl([qc()],ip.prototype,"_hasSearched",void 0),yl([qc()],ip.prototype,"_showFilters",void 0),ip=yl([Rc("meshcore-message-search")],ip);const np="meshcore-reply-links",ap=/^@\[([^\]]+)\]\s?/;function op(){try{return JSON.parse(localStorage.getItem(np)||"{}")}catch(e){return{}}}function rp(e,t){return`${e}|${t}`}const sp=new Set(["zone","geo_location"]);function lp(e){const t=Math.max(0,(Date.now()-e)/1e3);return t<60?"just now":t<3600?`${Math.round(t/60)} min ago`:t<86400?`${Math.round(t/3600)} h ago`:`${Math.round(t/86400)} days ago`}const cp=Cl(pt||(pt=bl`
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
`));let dp=class extends zc{constructor(){super(...arguments),this._tab="map",this._q="",this._mapOk=null,this._showOthers=!1,this._preview=null,this._fitted=!1}_close(){this.dispatchEvent(new CustomEvent("close"))}_pick(e){this.dispatchEvent(new CustomEvent("location-picked",{detail:e}))}_engine(){return this.renderRoot.querySelector("ha-map")}_useMapCentre(){var e,t,i;const n=this._engine(),a=null==n||null===(e=n._engine)||void 0===e||null===(t=e.getView)||void 0===t?void 0:t.call(e);if(a)return void this._pick({lat:a.center[0],lon:a.center[1],source:"Picked on map"});const o=null==n||null===(i=n.leafletMap)||void 0===i?void 0:i.getCenter();o&&this._pick({lat:o.lat,lon:o.lng,source:"Picked on map"})}async _centreMap(){var e;const t=null===(e=this.hass)||void 0===e||null===(e=e.states["zone.home"])||void 0===e?void 0:e.attributes,i=this._preview?[this._preview.lat,this._preview.lon]:null!=(null==t?void 0:t.latitude)?[t.latitude,t.longitude]:null;if(i)for(let e=0;e<40;e++){var n;const e=this._engine();if(!e)return;if(null!==(n=e._engine)&&void 0!==n&&n.setView)return void e._engine.setView(i,15);if(e.leafletMap)return void e.leafletMap.setView(i,15);await new Promise(e=>setTimeout(e,150))}}updated(){var e,t;if("map"!==this._tab)return;if(null===this._mapOk)return void Ad().then(e=>{this._mapOk=e});const i=this.renderRoot.querySelector("ha-map");if(!i||this._fitted)return;this._fitted=!0;const n=Object.keys(null!==(e=null===(t=this.hass)||void 0===t?void 0:t.states)&&void 0!==e?e:{}).filter(e=>e.startsWith("zone."));i.entities=this._preview?[...n,this._preview.entityId]:n,i.autoFit=!1,this._centreMap()}render(){var e;const t=this._q.toLowerCase(),i=function(e){const t=[];for(const[o,r]of Object.entries(null!==(i=null==e?void 0:e.states)&&void 0!==i?i:{})){var i,n,a;if(sp.has(o.split(".")[0]))continue;const s=null==e||null===(n=e.entities)||void 0===n?void 0:n[o];if("meshcore"===(null==s?void 0:s.platform)||o.includes("meshcore"))continue;const l=r.attributes,c=Number(l.latitude),d=Number(l.longitude);if(null==l.latitude||null==l.longitude||!Number.isFinite(c)||!Number.isFinite(d))continue;if(0===c&&0===d)continue;const p=Number(l.gps_accuracy);t.push({entityId:o,name:String(null!==(a=l.friendly_name)&&void 0!==a?a:o),lat:c,lon:d,accuracy:Number.isFinite(p)?p:void 0,updated:Date.parse(r.last_updated)||0})}return t.sort((e,t)=>t.updated-e.updated)}(this.hass).filter(e=>!t||e.name.toLowerCase().includes(t)||e.entityId.includes(t)),n=function(e){var t;const i=new Set,n=null==e||null===(t=e.user)||void 0===t?void 0:t.id;if(!n)return i;for(const[t,r]of Object.entries(null!==(a=null==e?void 0:e.states)&&void 0!==a?a:{})){var a;if(!t.startsWith("person."))continue;const e=r.attributes;if(e.user_id===n)for(const t of null!==(o=e.device_trackers)&&void 0!==o?o:[]){var o;i.add(t)}}return i}(this.hass),a=i.filter(e=>n.has(e.entityId)),o=null!==(e=this.hass)&&void 0!==e&&null!==(e=e.user)&&void 0!==e&&e.is_admin?i.filter(e=>!n.has(e.entityId)):[],r=e=>{const t=Date.now()-e.updated>36e5;return cc(ht||(ht=bl`<button class="row" @click=${0}>
        <span>${0}</span>
        <span class="meta ${0}">Updated ${0}${0}</span>
      </button>`),()=>{this._preview=e,this._tab="map",this._fitted=!1},e.name,t?"stale":"",lp(e.updated),null!=e.accuracy?` · ±${Math.round(e.accuracy)} m`:"")};return cc(ut||(ut=bl`
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
    `),this._close,e=>e.stopPropagation(),this._close,"map"!==this._tab||this._preview?"":"on",()=>{this._tab="map",this._preview=null,this._fitted=!1},"devices"===this._tab||this._preview?"on":"",()=>{this._tab="devices",this._preview=null},"devices"===this._tab?cc(mt||(mt=bl`
            <input class="search" placeholder="Search devices" .value=${0} @input=${0}>
            <div class="list">
              <div class="section">Your devices</div>
              ${0}
              ${0}
            </div>
          `),this._q,e=>{this._q=e.target.value},0===a.length?cc(gt||(gt=bl`<div class="empty">${0}</div>`),t?"No match.":"No devices with a position are linked to you. In Home Assistant, add your phone's tracker to your person (Settings → People)."):a.map(r),o.length>0?cc(ft||(ft=bl`
                <button class="section toggle" aria-expanded=${0} @click=${0}>
                  ${0} Other devices (${0})
                </button>
                ${0}`),this._showOthers,()=>{this._showOthers=!this._showOthers},this._showOthers?"▾":"▸",o.length,this._showOthers||t?o.map(r):""):""):cc(vt||(vt=bl`
            ${0}
          `),!1===this._mapOk?cc(bt||(bt=bl`<div class="empty">${0}</div>`),Md):cc(yt||(yt=bl`
              ${0}
              <div class="mapwrap" @hass-more-info=${0}>
                ${0}
              </div>
              <footer>
                ${0}
              </footer>`),this._preview?cc(_t||(_t=bl`<div class="hint"><strong>${0}</strong> · updated ${0}${0}</div>`),this._preview.name,lp(this._preview.updated),null!=this._preview.accuracy?` · ±${Math.round(this._preview.accuracy)} m`:""):cc(xt||(xt=bl`<div class="hint">Move the map so the pin is on the spot. Your zones are shown for reference.</div>`)),e=>e.stopPropagation(),this._mapOk?cc(wt||(wt=bl`<ha-map .hass=${0}></ha-map>${0}`),this.hass,this._preview?"":cc(kt||(kt=bl`<div class="pin">📍</div>`))):"",this._preview?cc($t||($t=bl`
                  <button class="secondary" @click=${0}>Back</button>
                  <button class="primary" @click=${0}>Use this location</button>`),()=>{this._preview=null,this._tab="devices"},()=>{const e=this._preview;this._pick({lat:e.lat,lon:e.lon,source:e.name,accuracy:e.accuracy})}):cc(Ct||(Ct=bl`
                  <button class="secondary" @click=${0}>Cancel</button>
                  <button class="primary" ?disabled=${0} @click=${0}>Use this spot</button>`),this._close,!this._mapOk,this._useMapCentre))))}};dp.styles=cp,yl([Dc({attribute:!1})],dp.prototype,"hass",void 0),yl([qc()],dp.prototype,"_tab",void 0),yl([qc()],dp.prototype,"_q",void 0),yl([qc()],dp.prototype,"_mapOk",void 0),yl([qc()],dp.prototype,"_showOthers",void 0),yl([qc()],dp.prototype,"_preview",void 0),dp=yl([Rc("meshcore-location-picker")],dp);let pp=class extends zc{constructor(){super(...arguments),this.contacts=[],this._q=""}_close(){this.dispatchEvent(new CustomEvent("close"))}_pick(e,t,i){this.dispatchEvent(new CustomEvent("contact-picked",{detail:{publicKey:e,type:t,name:i}}))}render(){const e=this._q.toLowerCase(),t=this.contacts.filter(e=>e.public_key&&64===e.public_key.length).filter(t=>!e||(t.adv_name||"").toLowerCase().includes(e)||t.public_key.startsWith(e)).sort((e,t)=>(e.adv_name||"").localeCompare(t.adv_name||""));return cc(St||(St=bl`
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
    `),this._close,e=>e.stopPropagation(),this._close,this._q,e=>{this._q=e.target.value},this.own&&!e?cc(Mt||(Mt=bl`<button class="row" @click=${0}>
              <span>My contact (${0})</span><span class="meta">So others can add you</span></button>`),()=>this._pick(this.own.publicKey,1,this.own.name),this.own.name):"",t.map(e=>{var t;return cc(zt||(zt=bl`<button class="row" @click=${0}>
              <span>${0}</span>
              <span class="meta">${0} · ${0}</span></button>`),()=>this._pick(e.public_key,e.type,e.adv_name),e.adv_name||e.pubkey_prefix,null!==(t=Wd[e.type])&&void 0!==t?t:"Node",e.public_key.slice(0,8))}),0!==t.length||this.own?"":cc(At||(At=bl`<div class="empty">No contacts to share.</div>`)))}};pp.styles=cp,yl([Dc({attribute:!1})],pp.prototype,"contacts",void 0),yl([Dc({attribute:!1})],pp.prototype,"own",void 0),yl([qc()],pp.prototype,"_q",void 0),pp=yl([Rc("meshcore-contact-picker")],pp);const hp=new TextEncoder;function up(e){return hp.encode(e).length}const mp="meshcore-channel-trackable-limit",gp="meshcore-message-limit-changed";function fp(){try{return"off"!==localStorage.getItem(mp)}catch(e){return!0}}let vp=class extends zc{constructor(){super(...arguments),this._getHass=()=>this.hass,this._reactions=new Map,this._reactionsFor=e=>{var t;return null!==(t=this._reactions.get(e))&&void 0!==t?t:[]},this._popup=null,this._picker=null,this._location=null,this._confirmLocation=!1,this._contact=null,this._quoteFor=e=>this.selectedId&&this._messageStore?function(e,t,i){const n=ap.exec(e.text);if(!n)return null;const a=n[1],o=i.filter(t=>t.id!==e.id&&!t.isSystem&&t.timestamp.getTime()<=e.timestamp.getTime()),r=op()[rp(t,e.text)];if(r){const e=[...o].reverse().find(e=>e.sender===r.sender&&e.text===r.text);return{sender:r.sender,text:r.text,id:null==e?void 0:e.id}}const s=[...o].reverse().find(e=>e.sender===a);return s?{sender:s.sender,text:s.text,id:s.id}:null}(e,this.selectedId,this._messageStore.messages):null,this.conversations=[],this.selectedId=null,this.narrow=!1,this.lastRead={},this._messageStore=null,this._unsubUnread=null,this._inputText="",this._replyTo=null,this._sending=!1,this._failedDrafts=new Map,this._viewportNarrow=!1,this._mediaQuery=null,this._mediaHandler=null,this._narrowShowMessages=!1,this._manageOpen=!1,this._manageInitialTab="contacts",this._searchOpen=!1,this._currentEntityId=null,this._conversationResolved=!1,this._pendingScroll=null,this._scrollInFlight=!1,this._scrollGuardUntil=0,this._lastMessageCount=0,this._lastTailKey=null,this._onLimitSettingChanged=()=>this.requestUpdate()}_draftContext(){var e;return JSON.stringify([null===(e=this.config)||void 0===e?void 0:e.entry_id,this.selectedId])}_restoreFailedDraft(){if(this._inputText)return;const e=this._draftContext(),t=this._failedDrafts.get(e);null!=t&&t.length&&(this._inputText=t.shift(),t.length||this._failedDrafts.delete(e))}get _isNarrow(){return this.narrow||this._viewportNarrow}connectedCallback(){super.connectedCallback(),window.addEventListener(gp,this._onLimitSettingChanged),this.config&&!this._messageStore&&(this._messageStore=new sd(this.config),this._messageStore.setOnChange(()=>this.requestUpdate())),this.unread&&!this._unsubUnread&&(this._unsubUnread=this.unread.subscribe(()=>{this.lastRead=this.unread.lastRead,this.requestUpdate()}),this.lastRead=this.unread.lastRead,this.unread.onPostSwitchTimerFire(()=>this._checkAndMarkReadIfAtBottom())),this._mediaQuery=window.matchMedia("(max-width: 870px)"),this._viewportNarrow=this._mediaQuery.matches,this._mediaHandler=e=>{this._viewportNarrow=e.matches},this._mediaQuery.addEventListener("change",this._mediaHandler)}disconnectedCallback(){var e;super.disconnectedCallback(),window.removeEventListener(gp,this._onLimitSettingChanged),this._messageStore&&(this._messageStore.destroy(),this._messageStore=null),this._unsubUnread&&(this._unsubUnread(),this._unsubUnread=null),null===(e=this.unread)||void 0===e||e.endConversation(),this._mediaQuery&&this._mediaHandler&&(this._mediaQuery.removeEventListener("change",this._mediaHandler),this._mediaQuery=null,this._mediaHandler=null)}updated(e){if(e.has("hass")&&this.hass&&this._messageStore&&this._messageStore.setHass(this.hass),e.has("config")&&this.config&&this._messageStore){this._messageStore.setConfig(this.config);const t=e.get("config");t&&t.entry_id!==this.config.entry_id&&(this.selectedId=null,this._currentEntityId=null,this._conversationResolved=!1,this._pendingScroll=null,this._lastMessageCount=0,this._lastTailKey=null,this.unread.endConversation(),this._messageStore.switchEntity(null),this.dispatchEvent(new CustomEvent("active-entity-changed",{detail:{entityId:null},bubbles:!0,composed:!0})))}if(e.has("selectedId")&&(this._onConversationSelected(),void 0!==e.get("selectedId")&&(this._replyTo=null,this._location=null,this._contact=null,this._popup=null)),e.has("lastRead")&&this._currentEntityId&&this._conversationResolved&&null===this._pendingScroll&&this.unread.maybeReanchorOnLateData(this._currentEntityId)&&(this._pendingScroll="last-read"),this._pendingScroll){const e=this._messageStore,t=e&&!e.loading;t&&e.messages.length>0?(this._executeScroll(this._pendingScroll),this._pendingScroll=null,this._lastMessageCount=e.messages.length,this._lastTailKey=Jc(e.messages)):t&&0===e.messages.length&&(this._pendingScroll=null)}else if(this._messageStore){const e=this._messageStore.messages.length,t=Jc(this._messageStore.messages);e>this._lastMessageCount&&this._lastMessageCount>0?this._scrollToBottomIfNearEnd():this._lastMessageCount>0&&t!==this._lastTailKey&&this._checkAndMarkReadIfAtBottom(),this._lastMessageCount=e,this._lastTailKey=t}}render(){var e,t,i,n,a,o;return this._isNarrow?this._narrowShowMessages?cc(Rt||(Rt=bl`
          <div class="chat-layout">
            <div class="chat-main narrow-full">
              <div class="narrow-header">
                <button class="back-button" @click=${0}>← Back</button>
                <span class="narrow-conv-name">${0}${0}</span>
                <div class="chat-header-actions">
                  <button class="header-action-btn" title="Search messages" aria-label="Search messages" @click=${0}><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></button>
                </div>
              </div>
              ${0}
            </div>
          </div>
        `),()=>this._narrowShowMessages=!1,this._getConversationName(),this._renderScopeChip(),()=>{this._searchOpen=!this._searchOpen},this._renderChatArea()):cc(It||(It=bl`
          <div class="chat-layout narrow-list-only">
            <meshcore-conversation-list
              .conversations=${0}
              .activeId=${0}
              .unread=${0}
              .unreadCounts=${0}
              .nodePrefix=${0}
              @conversation-selected=${0}
              @manage-requested=${0}></meshcore-conversation-list>
            ${0}
          </div>
        `),this.conversations,this.selectedId,this.unread,this.unread.counts,(null===(a=this.config)||void 0===a?void 0:a.node_prefix)||null,e=>{const t=e.detail.id;t===this.selectedId&&(this.unread.resetUnreadCountAtSelection(),this._pendingScroll="bottom"),this.selectedId=t,this._narrowShowMessages=!0},()=>this._onManageRequested(),this._manageOpen?cc(Ot||(Ot=bl`
              <meshcore-manage-dialog
                .hass=${0}
                .entryId=${0}
                .narrow=${0}
                .initialTab=${0}
                @manage-closed=${0}
                @contacts-changed=${0}
                @channels-changed=${0}
              ></meshcore-manage-dialog>
            `),this.hass,null===(o=this.config)||void 0===o?void 0:o.entry_id,this.narrow,this._manageInitialTab,()=>this._manageOpen=!1,this._onContactsChanged,this._onChannelsChanged):cc(Dt||(Dt=bl``))):cc(qt||(qt=bl`
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
      </div>
    `),this.conversations,this.selectedId,this.unread,this.unread.counts,(null===(e=this.config)||void 0===e?void 0:e.node_prefix)||null,e=>{const t=e.detail.id;t===this.selectedId&&(this.unread.resetUnreadCountAtSelection(),this._pendingScroll="bottom"),this.selectedId=t},()=>this._onManageRequested(),this.selectedId?cc(Tt||(Tt=bl`
            <div class="narrow-header" style="display: flex; align-items: center; padding: 8px 16px;">
              <div style="flex: 1; font-size: 14px; font-weight: 500; color: var(--primary-text-color);">
                ${0}${0}
              </div>
              <div class="chat-header-actions">
                <button class="header-action-btn" title="Search messages" aria-label="Search messages" @click=${0}><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></button>
              </div>
            </div>
          `),this._getConversationName(),this._renderScopeChip(),()=>{this._searchOpen=!this._searchOpen}):"",this._renderChatArea(),this._searchOpen?cc(Ft||(Ft=bl`
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
        `),this.hass,null===(t=this.config)||void 0===t?void 0:t.entry_id,this._currentEntityId||void 0,null===(i=this.config)||void 0===i?void 0:i.node_name,this._onSearchResultSelected,()=>{this._searchOpen=!1}):"",this._manageOpen?cc(Et||(Et=bl`
          <meshcore-manage-dialog
            .hass=${0}
            .entryId=${0}
            .narrow=${0}
            .initialTab=${0}
            @manage-closed=${0}
            @contacts-changed=${0}
            @channels-changed=${0}
          ></meshcore-manage-dialog>
        `),this.hass,null===(n=this.config)||void 0===n?void 0:n.entry_id,this.narrow,this._manageInitialTab,()=>this._manageOpen=!1,this._onContactsChanged,this._onChannelsChanged):cc(Nt||(Nt=bl``)))}_renderChatArea(){var e,t,i,n,a,o;if(!this._messageStore||!this.selectedId)return cc(jt||(jt=bl`
        <div class="empty-state">
          <div class="empty-icon"><svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" opacity="0.5"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg></div>
          <div class="empty-text">Select a conversation to start</div>
          <div class="empty-subtext">Choose a channel or contact from the list</div>
        </div>
      `));if(!this._conversationResolved)return cc(Lt||(Lt=bl`
        <div class="empty-state">
          <div class="empty-icon"><svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" opacity="0.5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg></div>
          <div class="empty-text">Conversation unavailable</div>
          <div class="empty-subtext">This contact may no longer be added to the node</div>
        </div>
      `));const{visible:r,reactions:s}=function(e,t=!0){const i=[],n=new Map,a=new Map,o=new Map,r=(e,i)=>{const n="mc1"===i?a:o;let r=n.get(e.id);if(!r){const a=function(e){if(e.senderTimestamp)return[e.senderTimestamp];const t=Math.floor(e.timestamp.getTime()/1e3),i=[t];for(let e=1;e<=15;e++)i.push(t-e);return i.push(t+1,t+2),i}(e);r=new Set("mc1"===i?a.map(t=>jd(e.text,t)):a.map(i=>function(e,t,i){const n=`${e}${null!=t?t:""}${i.substring(0,5)}`;let a=0;for(let e=0;e<n.length;e++)a=a+n.charCodeAt(e)>>>0,a=a+(a<<10>>>0)>>>0,a=(a^a>>>6)>>>0;return a=a+(a<<3>>>0)>>>0,a=(a^a>>>11)>>>0,a=a+(a<<15>>>0)>>>0,a&=1073741823,0===a&&(a=1),(65535&a).toString(16).padStart(4,"0")}(i,t?e.sender:null,e.text))),n.set(e.id,r)}return r},s=new Set;for(const t of e){var l;const e=t.isSystem?null:Vd(t.text);if(!e){i.push(t);continue}const a=[...i].reverse().find(t=>(!e.target||t.sender===e.target)&&r(t,e.kind).has(e.hash));if(!a)continue;const o=t.isOutgoing?"You":t.sender,c=`${a.id}|${o}|${e.emoji}`;if(s.has(c))continue;s.add(c);const d=null!==(l=n.get(a.id))&&void 0!==l?l:[],p=d.find(t=>t.emoji===e.emoji);if(p?(p.senders.push(o),p.who.push({sender:o,time:t.timestamp})):d.push({emoji:e.emoji,senders:[o],who:[{sender:o,time:t.timestamp}]}),n.set(a.id,d),t.isOutgoing){const n=a.text.length>40?`${a.text.slice(0,40)}…`:a.text;i.push({...t,id:`react_${t.id}`,isSystem:!0,isOutgoing:!0,text:`You reacted ${e.emoji} to ${a.sender}: “${n}”`,mentions:[],activityTarget:a.id})}}return{visible:i,reactions:n}}(this._messageStore.messages,this._isChannelSelected());this._reactions=s;const l=function(e,t){var i;const n=null!==(i=t.group_timeout)&&void 0!==i?i:300,a=!1!==t.group_messages?function(e,t){if(0===e.length)return[];const i=[];let n=null;for(const a of e)!n||a.isSystem||n.isSystem||a.sender!==n.sender||(a.timestamp.getTime()-n.endTime.getTime())/1e3>t?(n={sender:a.sender,isOutgoing:a.isOutgoing,isSystem:a.isSystem,messages:[a],startTime:a.timestamp,endTime:a.timestamp},i.push(n)):(n.messages.push(a),n.endTime=a.timestamp);return i}(e,n):e.map(e=>({sender:e.sender,isOutgoing:e.isOutgoing,isSystem:e.isSystem,messages:[e],startTime:e.timestamp,endTime:e.timestamp}));if(0===a.length)return[];const o=[];let r=null;for(const e of a){const i=e.startTime;!1===t.show_date_separators||r&&!ad(r,i)||o.push({type:"date-separator",date:i,label:od(i)}),o.push({type:"group",group:e}),r=i}return o}(r,{group_messages:null===(e=null===(t=this.config)||void 0===t?void 0:t.group_messages)||void 0===e||e,group_timeout:null!==(i=null===(n=this.config)||void 0===n?void 0:n.group_timeout)&&void 0!==i?i:300,show_date_separators:null===(a=null===(o=this.config)||void 0===o?void 0:o.show_date_separators)||void 0===a||a}),c=this._budget();return cc(Pt||(Pt=bl`
      <div class="chat-container" @jump-to-message=${0}
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
    `),e=>this._findAndHighlightBubble(e.detail.id),this._onReact,this._onReplyToSender,this._onResendMessage,this._onChatScroll,this._messageStore.loadingOlder?cc(Bt||(Bt=bl`<div class="loading-older"><div class="loading-spinner"></div></div>`)):cc(Ht||(Ht=bl``)),this._messageStore.error?cc(Vt||(Vt=bl`
              <div class="error-state">
                <span><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg></span>
                <span>${0}</span>
              </div>
            `),this._messageStore.error):cc(Kt||(Kt=bl``)),this._messageStore.loading&&0===r.length?cc(Ut||(Ut=bl`
              <div class="loading-state">
                <div class="loading-spinner"></div>
                Loading messages...
              </div>
            `)):cc(Wt||(Wt=bl``)),0!==l.length||this._messageStore.loading?cc(Xt||(Xt=bl``)):cc(Gt||(Gt=bl`
              <div class="empty-state">
                <div class="empty-icon"><svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" opacity="0.5"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 2l5 5h-5V4zM6 20V4h5v7h7v9H6z"/></svg></div>
                <div class="empty-text">No messages yet</div>
                <div class="empty-subtext">Be the first to send a message!</div>
              </div>
            `)),this._renderItemsWithDivider(l),this._renderNewMessagesIndicator(),this._replyTo?cc(Yt||(Yt=bl`
            <div class="composer-strip reply">
              <svg class="strip-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/></svg>
              <span class="strip-title">Replying to ${0}</span>
              <span class="strip-detail">· ${0}</span>
              <button class="strip-close" aria-label="Cancel reply" @click=${0}>✕</button>
            </div>`),this._replyTo.sender,this._replyTo.text,()=>{this._replyTo=null}):"",this._location?cc(Qt||(Qt=bl`
            <div class="composer-strip location">
              <span class="strip-icon loc" aria-hidden="true">📍</span>
              <span class="strip-title">Location</span>
              <span class="strip-detail">· ${0} · ${0}, ${0}</span>
              <button class="strip-close" aria-label="Remove location" @click=${0}>✕</button>
            </div>`),this._location.source,this._location.lat.toFixed(5),this._location.lon.toFixed(5),()=>{this._location=null}):"",this._contact?cc(Jt||(Jt=bl`
            <div class="composer-strip contact">
              <span class="strip-icon" aria-hidden="true">👤</span>
              <span class="strip-title">Contact</span>
              <span class="strip-detail">· ${0} · ${0}…</span>
              <button class="strip-close" aria-label="Remove contact" @click=${0}>✕</button>
            </div>`),this._contact.name,this._contact.publicKey.slice(0,6),()=>{this._contact=null}):"",this._location||this._contact?"Add a message (optional)...":"Type a message...",this._inputText,e=>{const t=e.target;this._inputText=t.value},e=>{"Enter"!==e.key||e.shiftKey?"Escape"===e.key&&this._popup?this._popup=null:"Escape"===e.key&&this._replyTo&&(this._replyTo=null):(e.preventDefault(),this._sendMessage())},this._sending||!this.selectedId,"plus"===this._popup?"on":"",!this.selectedId,()=>{this._popup="plus"===this._popup?null:"plus"},"emoji"===this._popup?"on":"",!this.selectedId,()=>{this._popup="emoji"===this._popup?null:"emoji"},c.over?"over":c.left<20?"low":"",c.over?c.left:`${c.left} left`,()=>this._sendMessage(),this._sending||!this.selectedId||!this._inputText.trim()&&!this._location&&!this._contact||c.over,this._renderComposerNotes(c),this._renderPopups())}_isChannelSelected(){const e=this.conversations.find(e=>"pubkey_prefix"in e?e.pubkey_prefix===this.selectedId:String(e.channel_idx)===this.selectedId);return!!e&&!("pubkey_prefix"in e)}_budget(){var e,t;return function(e,t,i=!1){const n=up(e),a=null!==t,o=a?up(`${t}: `):0,r=a&&i,s=Math.max(0,(r?155:160)-o),l=s-n;return{used:n,limit:s,left:l,over:l<0,echoUndetectable:a&&!r&&l>=0&&o+n>155,trackable:r}}(this._composedText(this._inputText),this._isChannelSelected()?null!==(e=null===(t=this.config)||void 0===t?void 0:t.node_name)&&void 0!==e?e:"":null,fp())}_renderComposerNotes(e){if(!this.selectedId)return cc(Zt||(Zt=bl``));const t=this._contact&&this._inputText.trim()?cc(ei||(ei=bl`<div class="composer-note low" role="status">The MeshCore phone apps only show a contact card when it's sent on its own. With a message, they'll see the contact as a code they can copy.</div>`)):cc(ti||(ti=bl``));return cc(ii||(ii=bl`${0}${0}${0}`),this._renderLimitNote(e),this._renderLocationNote(),t)}_renderLocationNote(){const e=this._location;if(!e)return cc(ni||(ni=bl``));const t=this._zoneAt(e);return cc(ai||(ai=bl`<div class="composer-note location" role="status">
      ${0}
      ${0}
    </div>`),this._isChannelSelected()?"This is a public channel, so anyone listening can see this location.":"This shares a GPS position. Anyone who can read this conversation can see it.",t?cc(oi||(oi=bl`<br><strong>It's inside your zone "${0}".</strong>`),t):"")}_zoneAt(e){for(const[o,r]of Object.entries(null!==(t=null===(i=this.hass)||void 0===i?void 0:i.states)&&void 0!==t?t:{})){var t,i,n,a;if(!o.startsWith("zone."))continue;const s=r.attributes,l=Number(s.latitude),c=Number(s.longitude),d=Number(s.radius)||100;if(Number.isFinite(l)&&Number.isFinite(c)&&Gd(l,c,e.lat,e.lon)<=d+(null!==(n=e.accuracy)&&void 0!==n?n:0))return String(null!==(a=s.friendly_name)&&void 0!==a?a:o)}return null}_composedText(e){if(this._location)return t=this._location.lat,i=this._location.lon,n=e,`m:${t.toFixed(6)},${i.toFixed(6)}|${n.replace(/[|\n]/g," ").trim()}|`;var t,i,n,a,o,r;if(this._contact){const t=(a=this._contact.publicKey,o=this._contact.type,r=this._contact.name,`<${a.toLowerCase()}:${o}:${r.replace(/[<>\r\n]/g,"").trim()}>`);return this._replyPrefix()+(e.trim()?`${e} ${t}`:t)}return this._replyPrefix()+e}_renderPopups(){return cc(ri||(ri=bl`
      ${0}
      ${0}
      ${0}
      ${0}
      ${0}
    `),"emoji"===this._popup?cc(si||(si=bl`<div class="popup" @emoji-picked=${0}><meshcore-emoji-picker></meshcore-emoji-picker></div>`),this._insertEmoji):"","plus"===this._popup?cc(li||(li=bl`<div class="popup menu">
        <button @click=${0}>📍 Share location</button>
        <button @click=${0}>👤 Share contact</button>
      </div>`),()=>{this._popup=null,this._picker="location"},()=>{this._popup=null,this._openContactPicker()}):"","location"===this._picker?cc(ci||(ci=bl`<meshcore-location-picker .hass=${0}
        @close=${0}
        @location-picked=${0}></meshcore-location-picker>`),this.hass,()=>{this._picker=null},e=>{this._picker=null,this._replyTo=null,this._contact=null,this._location=e.detail,this._focusInput()}):"","contact"===this._picker?cc(di||(di=bl`<meshcore-contact-picker
        .contacts=${0}
        .own=${0}
        @close=${0}
        @contact-picked=${0}></meshcore-contact-picker>`),this.conversations.filter(e=>"pubkey_prefix"in e),this._ownContact,()=>{this._picker=null},e=>{this._picker=null,this._location=null,this._contact=e.detail,this._focusInput()}):"",this._confirmLocation&&this._location?cc(pi||(pi=bl`
        <div class="confirm-backdrop" @click=${0}>
          <div class="confirm" role="dialog" aria-label="Send location?" @click=${0}>
            <div class="confirm-title">Send this location?</div>
            <div class="confirm-text">${0} · ${0}, ${0}<br>
              ${0}</div>
            <div class="confirm-actions">
              <button class="secondary" @click=${0}>Cancel</button>
              <button class="primary" @click=${0}>Send location</button>
            </div>
          </div>
        </div>`),()=>{this._confirmLocation=!1},e=>e.stopPropagation(),this._location.source,this._location.lat.toFixed(5),this._location.lon.toFixed(5),this._isChannelSelected()?"Everyone on this channel will see it.":"They will see where this is.",()=>{this._confirmLocation=!1},()=>{this._confirmLocation=!1,this._sendMessage(!0)}):"")}_focusInput(){this.updateComplete.then(()=>{var e;null===(e=this.renderRoot.querySelector(".composer textarea"))||void 0===e||e.focus()})}_insertEmoji(e){var t,i;const n=e.detail.emoji,a=this.renderRoot.querySelector(".composer textarea"),o=null!==(t=null==a?void 0:a.selectionStart)&&void 0!==t?t:this._inputText.length,r=null!==(i=null==a?void 0:a.selectionEnd)&&void 0!==i?i:o;this._inputText=this._inputText.slice(0,o)+n+this._inputText.slice(r),this._popup=null,this.updateComplete.then(()=>{a&&(a.focus(),a.selectionStart=a.selectionEnd=o+n.length)})}async _openContactPicker(){var e,t;if(this._picker="contact",this._ownContact||!this.hass)return;const i=await Pc(this.hass),n=null!==(e=i.find(e=>{var t;return e.entry_id===(null===(t=this.config)||void 0===t?void 0:t.entry_id)}))&&void 0!==e?e:i[0];null!=n&&n.pubkey&&64===n.pubkey.length&&(this._ownContact={publicKey:n.pubkey,name:n.name||(null===(t=this.config)||void 0===t?void 0:t.node_name)||"Me"})}_onReact(e){const{emoji:t,msg:i}=e.detail;this._sendText(function(e,t,i){var n;const a=null!==(n=t.senderTimestamp)&&void 0!==n?n:Math.floor(t.timestamp.getTime()/1e3),o=jd(t.text,a);return i?`@[${t.sender}]${e}\n${o}`:`${e}\n${o}`}(t,i,this._isChannelSelected()))}_renderLimitNote(e){let t=cc(hi||(hi=bl``));if(e.over){const i=-e.left;t=e.trackable?cc(ui||(ui=bl`${0} ${0} over the trackable limit. Shorten it to send, or allow longer channel messages in Settings.`),i,1===i?"byte":"bytes"):cc(mi||(mi=bl`${0} ${0} too long. Shorten it to send.`),i,1===i?"byte":"bytes")}else{if(!e.echoUndetectable)return cc(fi||(fi=bl``));t=cc(gi||(gi=bl`Long message: repeats can't be detected, so it'll show as Unheard.`))}return cc(vi||(vi=bl`<div class="composer-note ${0}" role="status">${0}</div>`),e.over?"over":"low",t)}_renderItemsWithDivider(e){const t=this._isChannelSelected(),i=[];let n=0,a=!1;const o=this.unread.dividerAfterGroupIdx(e);for(const c of e){var r,s,l;"date-separator"!==c.type?(a||null===o||n!==o||(i.push(cc(yi||(yi=bl`
          <div class="unread-divider">
            <span>New messages</span>
          </div>
        `))),a=!0),i.push(cc(_i||(_i=bl`
        <meshcore-message-bubble
          .group=${0}
          .getHass=${0}
          .quoteFor=${0}
          .reactionsFor=${0}
          .entryId=${0}
          ?isChannel=${0}
          .timestampFormat=${0}></meshcore-message-bubble>
      `),c.group,this._getHass,this._quoteFor,this._reactionsFor,null===(r=this.config)||void 0===r?void 0:r.entry_id,t,null!==(s=null===(l=this.config)||void 0===l?void 0:l.timestamp_format)&&void 0!==s?s:"relative")),n++):i.push(cc(bi||(bi=bl`
          <div class="date-separator">
            <span>${0}</span>
          </div>
        `),c.label))}return i}_renderNewMessagesIndicator(){const e=this._messageStore;if(!e)return cc(xi||(xi=bl``));const t=e.newMessagesWhileAway,i=e.hasNewerMessages;if(null!==this._pendingScroll||this._scrollInFlight)return cc(wi||(wi=bl``));const n=function(e){return e.counter>0?`↓ ${e.counter} new`:e.hasNewer||e.hasContentBelow?e.cursorAtTail&&!e.hasNewer?"↓ latest":"↓ unread":null}({counter:t,hasNewer:i,hasContentBelow:this._hasContentBelowViewport(),cursorAtTail:this.unread.cursorAtTail(this._currentEntityId,this._latestNonTempMessageId())});return null===n?cc(ki||(ki=bl``)):cc($i||($i=bl`
      <button class="new-messages-indicator" @click=${0}>
        ${0}
      </button>
    `),this._jumpToBottom,n)}_onConversationSelected(){if(this._restoreFailedDraft(),this.selectedId&&this._messageStore&&this.config&&this.hass){var e;const t=this.conversations.find(e=>"pubkey_prefix"in e?e.pubkey_prefix===this.selectedId:String(e.channel_idx)===this.selectedId);if(!t)return this._conversationResolved=!1,this._currentEntityId=null,void(this._messageStore&&this._messageStore.switchEntity(null));this._conversationResolved=!0;let i=null;if("pubkey_prefix"in t){const e=t.pubkey_prefix;i=function(e,t,i){const n=i.substring(0,6);if(t.contact_entity_pattern&&t.node_prefix){const i=t.contact_entity_pattern.replace("{prefix}",t.node_prefix).replace("{contact}",n);if(e.states[i])return i}const a=`_${n}_messages`,o=t.node_prefix?`_${t.node_prefix}_`:"";for(const t of Object.keys(e.states))if(t.startsWith("binary_sensor.")&&t.endsWith(a)&&(!o||t.includes(o)))return t;return null}(this.hass,this.config,e)}else{const e=t.channel_idx;i=function(e,t,i){if(t.channel_entity_pattern&&t.node_prefix){const n=t.channel_entity_pattern.replace("{prefix}",t.node_prefix).replace("{idx}",String(i));if(e.states[n])return n}const n=`_ch_${i}_messages`,a=t.node_prefix?`_${t.node_prefix}_`:"";for(const t of Object.keys(e.states))if(t.startsWith("binary_sensor.")&&t.endsWith(n)&&(!a||t.includes(a)))return t;return null}(this.hass,this.config,e)}this._currentEntityId=i,this.dispatchEvent(new CustomEvent("active-entity-changed",{detail:{entityId:i},bubbles:!0,composed:!0}));const n=this._getUnreadCountForSelected(),a=i&&(null===(e=this.lastRead)||void 0===e?void 0:e[i])||null;this._pendingScroll=a||n>0?"last-read":"bottom",this._lastMessageCount=0,this._lastTailKey=null,this.unread.beginConversation(i,n),this._messageStore.switchEntity(i,a)}}async _sendMessage(e=!1){if(this._sending||!this._inputText.trim()&&!this._location&&!this._contact||!this.selectedId||!this.hass||!this.config)return;if(this._budget().over)return;if(this._location&&!e)return void(this._confirmLocation=!0);const t=this._composedText(this._inputText.trim());this._replyTo&&!this._location&&function(e,t,i){try{const n=op();n[rp(e,t)]={sender:i.sender,text:i.text};const a=Object.keys(n);for(const e of a.slice(0,Math.max(0,a.length-300)))delete n[e];localStorage.setItem(np,JSON.stringify(n))}catch(e){}}(this.selectedId,t,this._replyTo),this._inputText="",this._replyTo=null,this._location=null,this._contact=null,await this._sendText(t,!0)}async _sendText(e,t=!1){if(this._sending||!e.trim()||!this.selectedId||!this.hass||!this.config)return;if(!this._conversationResolved)return void console.warn("Cannot send — conversation not resolved");this._sending=!0;const i=this._draftContext(),n=this.selectedId,a=this.config.entry_id,o=this._messageStore;let r;try{if(this._messageStore&&(r=this._messageStore.addOptimisticMessage(this.config.node_name,e),this._pendingScroll="bottom"),this._isContact())await async function(e,t,i,n){try{const a={pubkey_prefix:t,message:i};n&&(a.entry_id=n),await e.callService("meshcore","send_message",a)}catch(e){throw new Error(`Failed to send direct message: ${String(e)}`)}}(this.hass,n,e,a);else{var s;const t=parseInt(n,10);if(isNaN(t)||t<0||t>255)throw new Error("Invalid channel index");await async function(e,t,i,n,a){try{const o={channel_idx:t,message:i};n&&(o.entry_id=n),a&&(o.scope=a),await e.callService("meshcore","send_channel_message",o)}catch(e){throw new Error(`Failed to send channel message: ${String(e)}`)}}(this.hass,t,e,a,null!==(s=this._getActiveChannelScope())&&void 0!==s?s:void 0)}r&&(null==o||o.confirmOptimisticMessage(r))}catch(n){if(console.error("Failed to send message:",n),r&&(null==o||o.markOptimisticFailed(r)),t){var l;const t=null!==(l=this._failedDrafts.get(i))&&void 0!==l?l:[];t.push(e),this._failedDrafts.set(i,t),i===this._draftContext()&&this._restoreFailedDraft()}}finally{this._sending=!1,i===this._draftContext()&&this._restoreFailedDraft()}}_latestNonTempMessageId(){var e,t;const i=null!==(e=null===(t=this._messageStore)||void 0===t?void 0:t.messages)&&void 0!==e?e:[];for(let e=i.length-1;e>=0;e--){const t=i[e].id;if(!t.startsWith("rt_")&&!t.startsWith("optimistic_"))return t}return null}_isContact(){return!!this.selectedId&&!/^\d+$/.test(this.selectedId)}_onManageRequested(){this._manageInitialTab="contacts",this._manageOpen=!0}_onContactsChanged(){this.dispatchEvent(new CustomEvent("contacts-changed",{bubbles:!0,composed:!0}))}_onChannelsChanged(){this.dispatchEvent(new CustomEvent("channels-changed",{bubbles:!0,composed:!0}))}_onReplyToSender(e){const{sender:t,text:i}=e.detail;t&&(this._replyTo={sender:t,text:null!=i?i:""},this._location=null,this.updateComplete.then(()=>{var e;null===(e=this.renderRoot.querySelector(".composer textarea"))||void 0===e||e.focus()}))}_onResendMessage(e){var t;const i=null===(t=e.detail)||void 0===t?void 0:t.text;i&&this._sendText(i)}_replyPrefix(){return this._replyTo?`@[${this._replyTo.sender}] `:""}_getConversationName(){if(!this.selectedId)return"";const e=this.conversations.find(e=>"pubkey_prefix"in e?e.pubkey_prefix===this.selectedId:String(e.channel_idx)===this.selectedId);return e?"pubkey_prefix"in e?e.adv_name:e.name:this.selectedId}_getActiveChannelScope(){if(!this.selectedId||this._isContact())return null;const e=this.conversations.find(e=>!("pubkey_prefix"in e)&&String(e.channel_idx)===this.selectedId);return e&&e.scope||null}_renderScopeChip(){const e=this._getActiveChannelScope();return e?cc(Ci||(Ci=bl`<button
      class="scope-chip"
      title="Region scope: messages on this channel flood only through '${0}' repeaters. Click to manage."
      aria-label="Region scope ${0} — manage channels"
      @click=${0}>🌐 ${0}</button>`),e,e,()=>{this._manageInitialTab="channels",this._manageOpen=!0},e):""}_getChatContainer(){var e;return null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(".chat-container")}_isScrollGuarded(){return this._scrollInFlight||Date.now()<this._scrollGuardUntil}_executeScroll(e){this._scrollInFlight=!0,"last-read"===e&&(this._scrollGuardUntil=Date.now()+2e3),this._doScrollWithRetry(e,0)}_doScrollWithRetry(e,t){this.updateComplete.then(()=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{const i=this._getChatContainer();if(!i)return void(this._scrollInFlight=!1);if("bottom"===e)return i.scrollTop=i.scrollHeight,void(this._scrollInFlight=!1);const n=i.querySelector(".unread-divider");if(n){const e=i.getBoundingClientRect(),t=n.getBoundingClientRect();i.scrollTop+=t.top-e.top,this._scrollInFlight=!1}else t<10?setTimeout(()=>this._doScrollWithRetry(e,t+1),50):(i.scrollTop=i.scrollHeight,this._scrollInFlight=!1)})})})}_scrollToBottomIfNearEnd(){if(this._isScrollGuarded())return;const e=this._messageStore;null!=e&&e.hasNewerMessages||this.updateComplete.then(()=>{requestAnimationFrame(()=>{if(this._isScrollGuarded())return;const e=this._getChatContainer();e&&e.scrollHeight-e.scrollTop-e.clientHeight<150&&(e.scrollTop=e.scrollHeight,this._checkAndMarkReadIfAtBottom())})})}_onChatScroll(e){const t=e.target,i=this._messageStore;if(!t||!i)return;const n=t.scrollTop,a=t.scrollHeight-t.scrollTop-t.clientHeight<150;if(i.setUserAtBottom(a),n<150&&i.hasOlderMessages&&!i.loadingOlder&&!this._isScrollGuarded()){const e=t.scrollHeight;i.loadOlderMessages().then(()=>{this.updateComplete.then(()=>{requestAnimationFrame(()=>{const i=t.scrollHeight-e;i>0&&(t.scrollTop+=i)})})})}a&&(i.hasNewerMessages&&!i.loadingNewer?i.loadNewerMessages():i.hasNewerMessages||this._checkAndMarkReadIfAtBottom())}_isLastMessageVisible(){const e=this._getChatContainer();if(!e)return!1;const t=e.querySelectorAll("meshcore-message-bubble"),i=t[t.length-1];if(!i)return!1;const n=e.getBoundingClientRect().bottom;return i.getBoundingClientRect().bottom<=n+5}_hasContentBelowViewport(){var e,t;return!!this._getChatContainer()&&(0!==(null!==(e=null===(t=this._messageStore)||void 0===t?void 0:t.messages.length)&&void 0!==e?e:0)&&!this._isLastMessageVisible())}_checkAndMarkReadIfAtBottom(){const e=this._messageStore;this._currentEntityId&&e&&this.unread.onScrollState({entityId:this._currentEntityId,lastMessageVisible:this._isLastMessageVisible(),hasNewerMessages:e.hasNewerMessages,bufferTailId:Jc(e.messages)})&&e.resetNewMessagesCounter()}async _jumpToBottom(){const e=this._messageStore;if(e){for(;e.hasNewerMessages&&!e.loadingNewer;)await e.loadNewerMessages();await this.updateComplete,requestAnimationFrame(()=>{const t=this._getChatContainer();t&&(t.scrollTop=t.scrollHeight,this._currentEntityId&&this.unread.onPillJump({entityId:this._currentEntityId,bufferTailId:Jc(e.messages)})&&e.resetNewMessagesCounter())})}}_getUnreadCountForSelected(){var e,t;return this.selectedId&&this.unread?this.unread.badgeCount(this.selectedId,null!==(e=null===(t=this.config)||void 0===t?void 0:t.node_prefix)&&void 0!==e?e:null,this._currentEntityId):0}_onSearchResultSelected(e){const{entityId:t,messageId:i,timestamp:n}=e.detail;t&&this._messageStore&&(this._messageStore.switchEntity(t),this._currentEntityId=t),i&&this._scrollToAndHighlight(i,n)}_scrollToAndHighlight(e,t){this.updateComplete.then(()=>{requestAnimationFrame(()=>{this._findAndHighlightBubble(e)||t&&this._messageStore&&this._messageStore.fetchAroundTimestamp(t).then(t=>{t&&this.updateComplete.then(()=>{requestAnimationFrame(()=>{this._findAndHighlightBubble(e)})})})})})}_findAndHighlightBubble(e){var t;const i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".chat-container");if(!i)return!1;const n=i.querySelectorAll("meshcore-message-bubble");for(const t of Array.from(n)){var a;const i=null===(a=t.shadowRoot)||void 0===a?void 0:a.querySelector(`[data-msg-id="${e}"]`);if(i)return i.scrollIntoView({behavior:"smooth",block:"center"}),i.classList.add("search-highlight"),setTimeout(()=>i.classList.remove("search-highlight"),2500),!0}return!1}};vp.styles=Cl(Si||(Si=bl`
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
  `)),yl([Dc({type:Object})],vp.prototype,"hass",void 0),yl([qc()],vp.prototype,"_popup",void 0),yl([qc()],vp.prototype,"_picker",void 0),yl([qc()],vp.prototype,"_location",void 0),yl([qc()],vp.prototype,"_confirmLocation",void 0),yl([qc()],vp.prototype,"_contact",void 0),yl([qc()],vp.prototype,"_ownContact",void 0),yl([Dc({type:Object})],vp.prototype,"config",void 0),yl([Dc({type:Array})],vp.prototype,"conversations",void 0),yl([Dc({type:String})],vp.prototype,"selectedId",void 0),yl([Dc({type:Boolean})],vp.prototype,"narrow",void 0),yl([Dc({attribute:!1})],vp.prototype,"unread",void 0),yl([Dc({type:Object})],vp.prototype,"lastRead",void 0),yl([qc()],vp.prototype,"_messageStore",void 0),yl([qc()],vp.prototype,"_inputText",void 0),yl([qc()],vp.prototype,"_replyTo",void 0),yl([qc()],vp.prototype,"_sending",void 0),yl([qc()],vp.prototype,"_viewportNarrow",void 0),yl([qc()],vp.prototype,"_narrowShowMessages",void 0),yl([qc()],vp.prototype,"_manageOpen",void 0),yl([qc()],vp.prototype,"_manageInitialTab",void 0),yl([qc()],vp.prototype,"_searchOpen",void 0),yl([qc()],vp.prototype,"_currentEntityId",void 0),yl([qc()],vp.prototype,"_conversationResolved",void 0),yl([qc()],vp.prototype,"_pendingScroll",void 0),vp=yl([Rc("meshcore-chat-page")],vp);class bp{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const yp=(_p=class extends bp{constructor(e){if(super(e),this._timer=null,this._startX=0,this._startY=0,this._attached=!1,this._callback=null,this._element=null,this._onPointerDown=e=>this._handleDown(e),this._onPointerUp=()=>this._cancelTimer(),this._onPointerMove=e=>this._handleMove(e),this._onContextMenu=e=>{null!==this._timer&&e.preventDefault()},6!==e.type)throw new Error("longPress directive must be used on an element")}render(e){}update(e,[t]){if(this._callback=t,!this._attached){this._element=e.element;const t=this._element;t.addEventListener("pointerdown",this._onPointerDown),t.addEventListener("pointerup",this._onPointerUp),t.addEventListener("pointercancel",this._onPointerUp),t.addEventListener("pointermove",this._onPointerMove),t.addEventListener("contextmenu",this._onContextMenu),this._attached=!0}return this.render(t)}_handleDown(e){0===e.button&&(this._startX=e.clientX,this._startY=e.clientY,this._cancelTimer(),this._timer=setTimeout(()=>{var e;this._timer=null,null===(e=this._callback)||void 0===e||e.call(this)},500))}_handleMove(e){if(null===this._timer)return;const t=e.clientX-this._startX,i=e.clientY-this._startY;t*t+i*i>100&&this._cancelTimer()}_cancelTimer(){null!==this._timer&&(clearTimeout(this._timer),this._timer=null)}},(...e)=>({_$litDirective$:_p,values:e}));var _p;let xp=class extends zc{constructor(){super(...arguments),this.entityId="",this.label="",this.icon="",this.colorScheme="neutral"}render(){var e,t,i;if(!this.hass||!this.entityId)return hc;const n=this.hass.states[this.entityId];if(!n)return hc;const a=n.state,o=(null===(e=n.attributes)||void 0===e?void 0:e.unit_of_measurement)||"",r=this.label||(null===(t=n.attributes)||void 0===t?void 0:t.friendly_name)||this.entityId,s="unavailable"===a||"unknown"===a,l=null===(i=this.hass.entities)||void 0===i||null===(i=i[this.entityId])||void 0===i?void 0:i.display_precision;let c="";if("battery"===this.colorScheme){const e=parseFloat(a);isNaN(e)||(c=e>50?"battery-high":e>20?"battery-medium":"battery-low")}else"signal"===this.colorScheme&&(c="signal");return cc(Mi||(Mi=bl`
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
    `),s?"unavailable":"",this._openMoreInfo,this._onRightClick,yp(()=>this._onRightClick(new MouseEvent("contextmenu"))),this.icon?cc(zi||(zi=bl`<span class="tile-icon ${0}">${0}</span>`),c,this._renderIcon()):hc,s?"—":this._formatValue(a,l),o?cc(Ai||(Ai=bl`<span class="tile-unit">${0}</span>`),o):hc,r)}_openMoreInfo(){if(!this.entityId)return;const e=new CustomEvent("hass-more-info",{detail:{entityId:this.entityId},bubbles:!0,composed:!0});this.dispatchEvent(e)}_onRightClick(e){e.preventDefault(),this.entityId&&this.dispatchEvent(new CustomEvent("tile-context-menu",{detail:{entityId:this.entityId,label:this.label},bubbles:!0,composed:!0}))}_formatValue(e,t){const i=parseFloat(e);return isNaN(i)?e:null!=t&&t>=0?i.toFixed(t):e.includes(".")?e:i.toString()}_renderIcon(){switch(this.icon){case"battery":return cc(Ri||(Ri=bl`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/></svg>`));case"signal":return cc(Ii||(Ii=bl`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11zm0 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`));case"clock":return cc(Oi||(Oi=bl`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>`));case"power":return cc(Di||(Di=bl`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M16.01 7L16 3h-2v4h-4V3H8v4h-.01C7 6.99 6 7.99 6 8.99v5.49L9.5 18v3h5v-3l3.5-3.51v-5.5c0-1-1-2-1.99-1.99z"/></svg>`));case"thermometer":return cc(qi||(qi=bl`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4zm-4-8c0-.55.45-1 1-1s1 .45 1 1h-1v1h1v2h-1v1h1v2h-2V5z"/></svg>`));case"counter":return cc(Ti||(Ti=bl`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`));case"chart":return cc(Fi||(Fi=bl`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/></svg>`));default:return cc(Ei||(Ei=bl`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/></svg>`))}}};xp.styles=Cl(Ni||(Ni=bl`
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
  `)),yl([Dc({type:Object})],xp.prototype,"hass",void 0),yl([Dc({type:String})],xp.prototype,"entityId",void 0),yl([Dc({type:String})],xp.prototype,"label",void 0),yl([Dc({type:String})],xp.prototype,"icon",void 0),yl([Dc({type:String})],xp.prototype,"colorScheme",void 0),xp=yl([Rc("meshcore-sensor-tile")],xp);const wp={battery_pct:{displayMin:0,displayMax:100,direction:"higher_better",classify:e=>e<20?"bad":e<50?"warn":"good",tooltip:"Green ≥ 50%, Yellow 20–50%, Red < 20% (critical < 10%). Home Assistant low-battery convention.",source:"https://community.home-assistant.io/t/low-battery-level-detection-notification-for-all-battery-sensors/258664"},rssi:{displayMin:-130,displayMax:-30,direction:"higher_better",classify:e=>e<-115?"bad":e<-100?"warn":"good",tooltip:"Green > −100 dBm, Yellow −100 to −115 dBm, Red < −115 dBm. Lower (more negative) RSSI means a weaker received signal.",source:"https://www.thethingsnetwork.org/docs/lorawan/rssi-and-snr/"},snr:{displayMin:-20,displayMax:20,direction:"higher_better",classify:e=>e<-7?"bad":e<0?"warn":"good",tooltip:"Green > 0 dB, Yellow −7 to 0 dB, Red < −7 dB. Demodulation floor is spreading-factor dependent (Semtech AN1200.13).",source:"https://www.openhacks.com/uploadsproductos/loradesignguide_std.pdf"},noise_floor:{displayMin:-130,displayMax:-90,direction:"lower_better",classify:e=>e>-105?"bad":e>-115?"warn":"good",tooltip:"Green < −115 dBm, Yellow −115 to −105 dBm, Red > −105 dBm. Above −105 dBm typically indicates man-made RF interference, not thermal noise.",source:"https://www.openhacks.com/uploadsproductos/loradesignguide_std.pdf"},tx_airtime_util:{displayMin:0,displayMax:20,direction:"lower_better",classify:e=>e>10?"bad":e>2?"warn":"good",tooltip:"Green < 2%, Yellow 2–10%, Red > 10%. EU868 sub-band 1% / general 10% duty-cycle ceiling (ETSI EN 300 220-2; eCFR 47 CFR 15.247).",source:"https://www.etsi.org/deliver/etsi_en/300200_300299/30022002/03.03.01_60/en_30022002v030301p.pdf"},rx_airtime_util:{displayMin:0,displayMax:100,direction:"lower_better",classify:e=>e>50?"bad":e>25?"warn":"good",tooltip:"Green < 25%, Yellow 25–50%, Red > 50%. High RX utilisation usually means heavy mesh traffic or environmental interference saturating the receiver."},channel_util:{displayMin:0,displayMax:100,direction:"lower_better",classify:e=>e>50?"bad":e>25?"warn":"good",tooltip:"Green < 25%, Yellow 25–50%, Red > 50%. Channel utilisation aggregates all activity on the radio channel."},hop_count:{displayMin:0,displayMax:32,direction:"lower_better",classify:e=>e>=16?"bad":e>=7?"warn":"good",tooltip:"Green ≤ 6, Yellow 7–15, Red ≥ 16. MeshCore allows up to 64 hops; community-recommended meshes run well under 32. Each hop adds airtime cost and latency.",source:"https://nodakmesh.org/blog/meshcore-path-hash-explained"},uptime_hours:{displayMin:0,displayMax:168,direction:"higher_better",classify:e=>e<1?"bad":e<24?"warn":"good",tooltip:"Green > 24 h, Yellow 1–24 h, Red < 1 h. Very recent reboot suggests a watchdog reset or brownout."},last_seen_hours:{displayMin:0,displayMax:6,direction:"lower_better",classify:e=>e>4?"bad":e>2?"warn":"good",tooltip:"Green < 2 h, Yellow 2–4 h, Red > 4 h. Should be tuned to the node’s advertising interval; nodes that advertise hourly should appear far more often than nodes that advertise every 6 hours."},request_success_rate:{displayMin:0,displayMax:100,direction:"higher_better",classify:e=>e<70?"bad":e<90?"warn":"good",tooltip:'Green > 90%, Yellow 70–90%, Red < 70%. Caller is responsible for the min-sample floor — bars should render with band="info" until at least 50 attempts have accumulated.'},duplicate_ratio:{displayMin:0,displayMax:100,direction:"lower_better",classify:()=>"info",tooltip:""},tx_queue_len:{displayMin:0,displayMax:30,direction:"lower_better",classify:e=>e>10?"bad":e>5?"warn":"good",tooltip:"Number of messages queued for transmission. Healthy nodes drain the queue quickly. Sustained backlog (> 10) indicates channel saturation or a stuck transmitter."},temperature:{displayMin:-20,displayMax:140,direction:"higher_better",classify:e=>e<0||e>125?"bad":"good",tooltip:"Red below 0°F (≈ −18°C) or above 125°F (≈ 52°C); green otherwise. Extreme ambient temperatures risk damage to the radio, battery, or enclosure."}};function kp(e,t){const i=t.displayMax-t.displayMin;if(i<=0)return 0;const n=(e-t.displayMin)/i,a="higher_better"===t.direction?n:1-n;return Math.max(0,Math.min(100,100*a))}function $p(e,t){if(!Number.isFinite(t))return{band:"info",fillPct:0,tooltip:""};const i=wp[e];return i?{band:i.classify(t),fillPct:kp(t,i),tooltip:i.tooltip,source:i.source}:{band:"info",fillPct:0,tooltip:""}}let Cp=class extends zc{constructor(){super(...arguments),this.value=0,this.min=0,this.max=100,this.band="info"}render(){const e=this.max-this.min;let t=0;return Number.isFinite(this.value)&&e>0&&(t=(this.value-this.min)/e*100,t=Math.max(0,Math.min(100,t))),cc(ji||(ji=bl`
      <div class="stat-bar"
           role="progressbar"
           aria-valuenow="${0}"
           aria-valuemin="${0}"
           aria-valuemax="${0}">
        <div class="stat-bar-fill ${0}"
             style="width: ${0}%"></div>
      </div>
    `),this.value,this.min,this.max,this.band,t)}};Cp.styles=Cl(Li||(Li=bl`
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
  `)),yl([Dc({type:Number})],Cp.prototype,"value",void 0),yl([Dc({type:Number})],Cp.prototype,"min",void 0),yl([Dc({type:Number})],Cp.prototype,"max",void 0),yl([Dc({type:String})],Cp.prototype,"band",void 0),Cp=yl([Rc("meshcore-stat-bar")],Cp);let Sp=class extends zc{constructor(){super(...arguments),this.segments=[],this.legend="below"}_denom(){if(void 0!==this.total&&this.total>0)return this.total;const e=this.segments.reduce((e,t)=>e+(Number.isFinite(t.value)?t.value:0),0);return e>0?e:1}render(){if(!this.segments.length)return hc;const e=this._denom();return cc(Pi||(Pi=bl`
      <div class="stat-bar"
           role="img"
           aria-label="${0}">
        ${0}
      </div>
      ${0}
    `),this.segments.map(e=>`${e.label} ${e.value}`).join(", "),this.segments.map(t=>{const i=Number.isFinite(t.value)?Math.max(0,t.value):0;if(0===i)return hc;const n=i/e*100;return cc(Bi||(Bi=bl`<div class="stat-bar-segment ${0}"
                           style="width: ${0}%"
                           title="${0}: ${0}"></div>`),t.kind,n,t.label,t.value)}),"none"!==this.legend?cc(Hi||(Hi=bl`
          <div class="stat-bar-legend ${0}">
            ${0}
            ${0}
          </div>`),"inline"===this.legend?"inline":"",this.segments.filter(e=>Number.isFinite(e.value)&&e.value>=0).map(e=>cc(Vi||(Vi=bl`<span><span class="legend-swatch ${0}"></span>${0}</span>`),e.kind,e.label)),this.extraLegendText?cc(Ki||(Ki=bl`<span class="legend-extra">${0}</span>`),this.extraLegendText):hc):hc)}};Sp.styles=Cl(Ui||(Ui=bl`
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
  `)),yl([Dc({type:Array})],Sp.prototype,"segments",void 0),yl([Dc({type:Number})],Sp.prototype,"total",void 0),yl([Dc({type:String})],Sp.prototype,"legend",void 0),yl([Dc({type:String})],Sp.prototype,"extraLegendText",void 0),Sp=yl([Rc("meshcore-stacked-bar")],Sp);let Mp=class extends zc{constructor(){super(...arguments),this.content="",this._open=!1,this._onOpen=()=>{this._open||(this._open=!0,window.addEventListener("scroll",this._onScroll,!0))},this._onClose=()=>{this._open&&(this._open=!1,window.removeEventListener("scroll",this._onScroll,!0))},this._onScroll=()=>this._onClose()}render(){return this.content?cc(Wi||(Wi=bl`
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
    `),this._onOpen,this._onClose,this._onOpen,this._onClose,this._stopPropagation,this._open?"open":"",this.content,this.source?cc(Gi||(Gi=bl`<span class="src">${0}</span>`),this.source):hc):hc}updated(){this._open&&this._positionPopover()}disconnectedCallback(){window.removeEventListener("scroll",this._onScroll,!0),super.disconnectedCallback()}_stopPropagation(e){e.stopPropagation()}_positionPopover(){const e=this.shadowRoot;if(!e)return;const t=e.querySelector(".info-tip"),i=e.querySelector(".info-tip-content");if(!t||!i)return;const n=t.getBoundingClientRect(),a=i.getBoundingClientRect(),o=window.innerWidth,r=window.innerHeight;let s=n.left+n.width/2-a.width/2,l=n.bottom+6;s<8?s=8:s+a.width>o-8&&(s=Math.max(8,o-8-a.width)),l+a.height>r-8&&(l=n.top-6-a.height,l<8&&(l=8)),i.style.left=`${s}px`,i.style.top=`${l}px`}};Mp.styles=Cl(Xi||(Xi=bl`
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
  `)),yl([Dc({type:String})],Mp.prototype,"content",void 0),yl([Dc({type:String})],Mp.prototype,"source",void 0),yl([qc()],Mp.prototype,"_open",void 0),Mp=yl([Rc("meshcore-info-tip")],Mp);const zp=[{key:"sent_flood",label:"Sent · Flood",color:"var(--info, #2196f3)",dash:!1},{key:"sent_direct",label:"Sent · Direct",color:"var(--info, #2196f3)",dash:!0},{key:"recv_flood",label:"Recv · Flood",color:"var(--good, #4caf50)",dash:!1},{key:"recv_direct",label:"Recv · Direct",color:"var(--good, #4caf50)",dash:!0},{key:"errors",label:"Errors",color:"var(--bad, #f44336)",dash:!1}];let Ap=class extends zc{constructor(){super(...arguments),this.data=[],this.width=700,this.height=170,this.timeRange=48,this._hoverIndex=null,this._onPointerMove=e=>{const t=this._indexFromEvent(e);null!=t&&t!==this._hoverIndex&&(this._hoverIndex=t)},this._onPointerDown=e=>{const t=this._indexFromEvent(e);null!=t&&(this._hoverIndex=t===this._hoverIndex?null:t)},this._onPointerLeave=e=>{"mouse"===e.pointerType&&(this._hoverIndex=null)}}render(){return this.data&&0!==this.data.length?cc(Yi||(Yi=bl`
      <div class="chart-container">
        <div class="plot">
          ${0}
          ${0}
        </div>
        <div class="legend">
          ${0}
        </div>
      </div>
    `),this._renderChart(),null!=this._hoverIndex?this._renderTooltip():hc,zp.map(e=>cc(Qi||(Qi=bl`<div class="legend-item">
              <span class="legend-line ${0}"
                    style="border-top-color:${0}"></span>${0}
            </div>`),e.dash?"dashed":"",e.color,e.label))):hc}_timeLabel(e,t){const i=Math.round((t-e)/36e5);return i<=0?"now":`-${i}h`}_fmtValue(e){return"number"==typeof e&&isFinite(e)?0===e?"0":e<1?e.toFixed(2):e.toFixed(1):"—"}_geom(){const e=this.width,t=this.height,i=e-40-12,n=t-12-22;let a=0;for(const e of this.data)for(const t of zp){const i=e.values[t.key];"number"==typeof i&&isFinite(i)&&(a=Math.max(a,i))}a<=0&&(a=1);const o=Date.now(),r=36e5*this.timeRange,s=o-r;return{padL:40,padR:12,padT:12,padB:22,w:e,h:t,cw:i,ch:n,maxV:a,now:o,range:r,oldest:s,xScale:e=>40+(e-s)/r*i,yScale:e=>12+n-e/a*n}}_nearestBucket(e){const{xScale:t}=this._geom();let i=-1,n=1/0;for(let a=0;a<this.data.length;a++){const o=Math.abs(t(this.data[a].timestamp)-e);o<n&&(n=o,i=a)}return i}_indexFromEvent(e){const t=this.renderRoot.querySelector("svg");if(!t||0===this.data.length)return null;const i=t.getBoundingClientRect();if(0===i.width)return null;const n=(e.clientX-i.left)/i.width*this.width;return this._nearestBucket(n)}_renderChart(){const e=this._geom(),{padL:t,padR:i,padT:n,padB:a,w:o,h:r,ch:s,maxV:l,now:c,range:d,oldest:p,xScale:h,yScale:u}=e,m=[0,l/2,l].map(e=>{const n=u(e);return dc(Ji||(Ji=bl`
        <line x1="${0}" y1="${0}" x2="${0}" y2="${0}"
          stroke="var(--divider-color,#e0e0e0)" stroke-dasharray="4,4" opacity="0.3" />
        <text x="${0}" y="${0}" font-size="9" text-anchor="end"
          fill="var(--secondary-text-color,#727272)">${0}</text>`),t,n,o-i,n,t-6,n+3,e<1?e.toFixed(1):Math.round(e))}),g=[p,p+d/2,c].map(e=>dc(Zi||(Zi=bl`
        <text x="${0}" y="${0}" font-size="9" text-anchor="middle"
          fill="var(--secondary-text-color,#727272)">${0}</text>`),h(e),r-a+14,this._timeLabel(e,c))),f=zp.map(e=>{const t=this.data.filter(t=>"number"==typeof t.values[e.key]&&isFinite(t.values[e.key])).map(t=>`${h(t.timestamp).toFixed(1)},${u(t.values[e.key]).toFixed(1)}`);if(0===t.length)return dc(en||(en=bl``));if(1===t.length){const[i,n]=t[0].split(",");return dc(tn||(tn=bl`<circle cx="${0}" cy="${0}" r="2" fill="${0}" />`),i,n,e.color)}return dc(nn||(nn=bl`<polyline points="${0}" fill="none" stroke="${0}"
        stroke-width="1.5" stroke-dasharray="${0}"
        stroke-linecap="round" stroke-linejoin="round" />`),t.join(" "),e.color,e.dash?"5,3":"none")});let v=dc(an||(an=bl``));if(null!=this._hoverIndex&&this._hoverIndex<this.data.length){const e=this.data[this._hoverIndex],t=h(e.timestamp),i=zp.map(i=>{const n=e.values[i.key];return"number"==typeof n&&isFinite(n)?dc(rn||(rn=bl`<circle cx="${0}" cy="${0}" r="3" fill="${0}"
          stroke="var(--card-background-color,#fff)" stroke-width="1" />`),t,u(n),i.color):dc(on||(on=bl``))});v=dc(sn||(sn=bl`
        <line x1="${0}" y1="${0}" x2="${0}" y2="${0}"
          stroke="var(--primary-text-color,#888)" stroke-width="1" opacity="0.35" />
        ${0}`),t,n,t,r-a,i)}return dc(ln||(ln=bl`
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
      </svg>`),o,r,this.timeRange,this._onPointerMove,this._onPointerDown,this._onPointerLeave,m,t,n,t,r-a,t,r-a,o-i,r-a,f,v,g,t,n-2,t,n,e.cw,s)}_renderTooltip(){const e=this._hoverIndex;if(null==e||e>=this.data.length)return hc;const t=this._geom(),i=this.data[e],n=t.xScale(i.timestamp)/t.w*100,a=n>55,o=new Date(i.timestamp).toLocaleString([],{weekday:"short",hour:"2-digit",minute:"2-digit"}),r=a?`left:${n}%; transform:translateX(calc(-100% - 8px));`:`left:${n}%; transform:translateX(8px);`;return cc(cn||(cn=bl`
      <div class="tooltip" style="${0}">
        <div class="tt-head">${0} · msg/min</div>
        ${0}
      </div>
    `),r,o,zp.map(e=>cc(dn||(dn=bl`<div class="tt-row">
            <span class="sw ${0}" style="border-top-color:${0}"></span>
            <span class="lbl">${0}</span>
            <span class="val">${0}</span>
          </div>`),e.dash?"dashed":"",e.color,e.label,this._fmtValue(i.values[e.key]))))}};Ap.styles=Cl(pn||(pn=bl`
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
  `)),yl([Dc({type:Array})],Ap.prototype,"data",void 0),yl([Dc({type:Number})],Ap.prototype,"width",void 0),yl([Dc({type:Number})],Ap.prototype,"height",void 0),yl([Dc({type:Number})],Ap.prototype,"timeRange",void 0),yl([qc()],Ap.prototype,"_hoverIndex",void 0),Ap=yl([Rc("meshcore-message-rate-chart")],Ap);let Rp=class extends zc{constructor(){super(...arguments),this.entities=[],this.hiddenCount=0,this._rateHistory=[],this._rateHistoryKey=null}render(){if(!this.hass||!this.device)return hc;const e=new Set,t=this._renderHeroTiles(e),i=this._buildGroups(e);return cc(hn||(hn=bl`
      <div class="hero-row">
        ${0}
      </div>

      ${0}

      ${0}
    `),t,this._renderMessageActivityCard(),i.length>0?cc(un||(un=bl`
          <div class="subsection-label">
            Sensors${0}
          </div>

          <div class="sensor-grid">
            ${0}
          </div>`),this.hiddenCount>0?cc(mn||(mn=bl`<span class="hidden-suffix">(${0} hidden)</span>`),this.hiddenCount):hc,i.map(e=>this._renderGroup(e))):hc)}updated(e){var t;if(!this.hass||!this.device)return;if(!e.has("hass")&&!e.has("device")&&!e.has("entities"))return;const i=this._findEntityIdMatching("nb_sent"),n=null!==(t=null==i?void 0:i.entity_id)&&void 0!==t?t:null;n&&n!==this._rateHistoryKey?(this._rateHistoryKey=n,this._fetchRateHistory()):n||null===this._rateHistoryKey||(this._rateHistoryKey=null,this._rateHistory=[])}_deriveRateId(e,t){return e.replace(`_${t}_`,`_${t}_rate_`)}async _fetchRateHistory(){if(!this.hass)return;const e=[["sent_flood","sent_flood"],["sent_direct","sent_direct"],["recv_flood","recv_flood"],["recv_direct","recv_direct"],["errors","recv_errors"]],t=[];for(const[i,n]of e){const e=this._findEntityIdMatching(n);e&&t.push([i,this._deriveRateId(e.entity_id,n)])}if(0!==t.length)try{const e=await this.hass.callWS({type:"recorder/statistics_during_period",start_time:new Date(Date.now()-1728e5).toISOString(),end_time:(new Date).toISOString(),statistic_ids:t.map(([,e])=>e),period:"hour"}),n={};for(const[a,o]of t){const t=e[o];if(Array.isArray(t))for(const e of t){var i;if(null==e.start||null==e.mean)continue;const t=new Date(e.start).getTime();(null!==(i=n[t])&&void 0!==i?i:n[t]={})[a]=e.mean}}this._rateHistory=Object.entries(n).map(([e,t])=>({timestamp:parseInt(e,10),values:t})).sort((e,t)=>e.timestamp-t.timestamp)}catch(e){this._rateHistory=[]}else this._rateHistory=[]}_renderMessageActivityCard(){return this._rateHistory.length?cc(gn||(gn=bl`
      <div class="subsection-label">Message activity (48h)</div>
      <meshcore-message-rate-chart .data=${0}></meshcore-message-rate-chart>
    `),this._rateHistory):hc}_renderHeroTiles(e){const t=this.device;return"companion"===t.type?this._renderCompanionHero(e):"repeater"===t.type?this._renderRepeaterHero(e):this._renderClientHero(e)}_renderRepeaterHero(e){return cc(fn||(fn=bl`
      ${0}
      ${0}
      ${0}
      ${0}
      ${0}
      ${0}
    `),this._renderBatteryTile(),this._renderSignalTile(),this._renderRadioActivityTile(),this._renderMessagesSentTile(e),this._renderMessagesReceivedTile(e),this._renderRequestsTile(e))}_renderClientHero(e){return cc(vn||(vn=bl`
      ${0}
      ${0}
      ${0}
    `),this._renderBatteryTile(),this._renderSignalTile(),this._renderRequestsTile(e))}_renderCompanionHero(e){return cc(bn||(bn=bl`
      ${0}
      ${0}
      ${0}
      ${0}
      ${0}
      ${0}
    `),this._renderBatteryTile(),this._renderSignalTile(),this._renderCompanionRadioActivityTile(),this._renderMessagesSentTile(e),this._renderMessagesReceivedTile(e),this._renderLocationTile())}_renderBatteryTile(){var e;const t=this._findByMetric("battery_pct");if(!t)return hc;const i=this._readNumber(t.entity_id),n=null!==(e=this._findEntityIdMatching("battery_voltage"))&&void 0!==e?e:this._findEntityByLabel("Voltage"),a=n?this._readNumber(n.entity_id):NaN,o=$p("battery_pct",i);return cc(yn||(yn=bl`
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
    `),()=>this._fireMoreInfo(t.entity_id),this._renderInfoTip(o),o.band,this._formatNumber(i,0),Number.isFinite(a)?cc(_n||(_n=bl`<span class="secondary">· ${0} V</span>`),a.toFixed(3)):hc,i,0,100,o.band)}_renderSignalTile(){const e=this._findByMetric("rssi");if(!e)return hc;const t=this._readNumber(e.entity_id),i=this._findByMetric("snr"),n=i?this._readNumber(i.entity_id):NaN,a=$p("rssi",t);return cc(xn||(xn=bl`
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
    `),()=>this._fireMoreInfo(e.entity_id),this._renderInfoTip(a),a.band,this._formatNumber(t,0),Number.isFinite(n)?cc(wn||(wn=bl`<span class="secondary">· SNR ${0} dB</span>`),n.toFixed(1)):hc,t,-130,-30,a.band)}_renderRadioActivityTile(){const e=this._findByMetric("tx_airtime_util"),t=this._findByMetric("rx_airtime_util");if(!e&&!t)return hc;const i=e?this._readNumber(e.entity_id):0,n=t?this._readNumber(t.entity_id):0,a=Number.isFinite(i)?Math.max(0,i):0,o=Number.isFinite(n)?Math.max(0,n):0,r=Math.max(0,100-a-o),s=$p("tx_airtime_util",a).band,l=$p("rx_airtime_util",o).band,c=this._worseBand(s,l),d=[{value:a,label:`TX ${a.toFixed(1)}%`,kind:"tx"},{value:o,label:`RX ${o.toFixed(1)}%`,kind:"rx"},{value:r,label:`Idle ${r.toFixed(1)}%`,kind:"idle"}],p=a+o;return cc(kn||(kn=bl`
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
    `),()=>e&&this._fireMoreInfo(e.entity_id),this._renderInfoTip({band:c,fillPct:0,tooltip:"Half-duplex composition over the last reporting interval. The radio can transmit OR receive, never both. TX above 10% indicates duty-cycle pressure; sustained TX+RX above 30% means the channel is congested."}),c,p.toFixed(1),d,100,"none",e?cc($n||($n=bl`<span class="ra-legend-item" @click=${0}>
                  <span class="legend-swatch tx"></span>TX ${0}%
                </span>`),t=>{t.stopPropagation(),e&&this._fireMoreInfo(e.entity_id)},a.toFixed(1)):cc(Cn||(Cn=bl`<span class="ra-legend-item">
                  <span class="legend-swatch tx"></span>TX ${0}%
                </span>`),a.toFixed(1)),t?cc(Sn||(Sn=bl`<span class="ra-legend-item" @click=${0}>
                  <span class="legend-swatch rx"></span>RX ${0}%
                </span>`),e=>{e.stopPropagation(),t&&this._fireMoreInfo(t.entity_id)},o.toFixed(1)):cc(Mn||(Mn=bl`<span class="ra-legend-item">
                  <span class="legend-swatch rx"></span>RX ${0}%
                </span>`),o.toFixed(1)),r.toFixed(1))}_renderMessagesSentTile(e){const t=this._findEntityIdMatching("nb_sent"),i=this._findEntityIdMatching("sent_flood"),n=this._findEntityIdMatching("sent_direct");if(!t||!i&&!n)return hc;const a=this._readNumber(t.entity_id),o=i?this._readNumber(i.entity_id):0,r=n?this._readNumber(n.entity_id):0,s=[{value:o,label:`Flood ${o}`,kind:"flood"},{value:r,label:`Direct ${r}`,kind:"direct"}];return e.add(t.entity_id),i&&e.add(i.entity_id),n&&e.add(n.entity_id),cc(zn||(zn=bl`
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
    `),()=>this._fireMoreInfo(t.entity_id),this._renderInfoTip({band:"info",fillPct:0,tooltip:"Messages sent (lifetime), split by send mode:\n• Flood — broadcast retransmits visible to all neighbours.\n• Direct — routed point-to-point along a path."}),this._formatCount(a),s,"inline")}_renderMessagesReceivedTile(e){const t=this._findEntityIdMatching("nb_recv"),i=this._findEntityIdMatching("recv_flood"),n=this._findEntityIdMatching("recv_direct"),a=this._findEntityIdMatching("flood_dups"),o=this._findEntityIdMatching("direct_dups");if(!t||!i&&!n)return hc;const r=this._readNumber(t.entity_id),s=i?this._readNumber(i.entity_id):0,l=n?this._readNumber(n.entity_id):0,c=[{value:s,label:`Flood ${s}`,kind:"flood"},{value:l,label:`Direct ${l}`,kind:"direct"}],d=a?this._readNumber(a.entity_id):0,p=o?this._readNumber(o.entity_id):0,h=(Number.isFinite(d)?d:0)+(Number.isFinite(p)?p:0),u=r>0?h/r*100:0;e.add(t.entity_id),i&&e.add(i.entity_id),n&&e.add(n.entity_id),a&&e.add(a.entity_id),o&&e.add(o.entity_id);const m=this._findEntityIdMatching("recv_errors"),g=m?this._readNumber(m.entity_id):NaN,f=Number.isFinite(g)?g:0,v=r+f,b=v>0?f/v*100:0;return m&&e.add(m.entity_id),cc(An||(An=bl`
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
    `),()=>this._fireMoreInfo(t.entity_id),this._renderInfoTip({band:"info",fillPct:0,tooltip:"Messages received (lifetime), split by receive mode:\n• Flood — broadcast packets received from neighbours.\n• Direct — routed packets where this node is on the path.\n\nEach bar below is a percentage of its own total:\n• Red = receive errors (CRC failures), as a share of all reception attempts (received + errors) — i.e. the error rate.\n• Amber = duplicate receptions, as a share of received messages (duplicates are a subset of received).\n\nBoth are context only, not banded — in a flooding mesh every active neighbour retransmits the same flood once, so a high duplicate ratio is normal (a 2-neighbour repeater sees ~50%, a 3-neighbour ~67%, etc.)."}),this._formatCount(r),c,"none",f>0?cc(Rn||(Rn=bl`<div class="err-line"
                      title="Receive errors (CRC failures): ${0} — ${0}% of reception attempts (received + errors)">
              <div class="err-line-fill" style="width:${0}%"></div>
            </div>`),f,b.toFixed(1),Math.min(100,b).toFixed(1)):hc,h>0?cc(In||(In=bl`<div class="dup-line"
                      title="Duplicate receptions: ${0} — ${0}% of received messages">
              <div class="dup-line-fill" style="width:${0}%"></div>
            </div>`),h,u.toFixed(1),Math.min(100,u).toFixed(1)):hc,s,l,f>0?cc(On||(On=bl`<span><span class="msg-swatch error"></span>Error ${0}</span>`),f):hc,h>0?cc(Dn||(Dn=bl`<span><span class="msg-swatch dup"></span>Dup ${0}</span>`),h):hc)}_renderRequestsTile(e){const t=this._findEntityIdMatching("request_succ"),i=this._findEntityIdMatching("request_fail");if(!t||!i)return hc;const n=this._readNumber(t.entity_id),a=this._readNumber(i.entity_id),o=n+a,r=o>0?n/o*100:0,s=o>=50?$p("request_success_rate",r):{band:"info",fillPct:0,tooltip:""},l=[{value:n,label:`OK ${n}`,kind:"success"},{value:a,label:`Fail ${a}`,kind:"failure"}];return e.add(t.entity_id),e.add(i.entity_id),cc(qn||(qn=bl`
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
    `),()=>this._fireMoreInfo(t.entity_id),this._renderInfoTip({...s,tooltip:"Outgoing requests this node initiated (login, telemetry, neighbour query) and how they resolved. Success rate bands: Green > 90%, Yellow 70–90%, Red < 70%, with a minimum sample of 50 attempts to colour. Below the floor, the bar stays neutral — too few samples to judge."}),s.band,o>0?`${r.toFixed(0)}%`:"—",o>0?cc(Tn||(Tn=bl`<span class="secondary">· ${0} attempt${0}</span>`),o,1===o?"":"s"):hc,l,"inline")}_formatCount(e){return Number.isFinite(e)?Math.round(e).toLocaleString():"—"}_renderLocationTile(){const e=this._findEntityIdMatching("latitude"),t=this._findEntityIdMatching("longitude");let i=e?this._readNumber(e.entity_id):NaN,n=t?this._readNumber(t.entity_id):NaN,a="entity";!Number.isFinite(i)&&Number.isFinite(this.fallbackLatitude)&&(i=this.fallbackLatitude,a="fallback"),!Number.isFinite(n)&&Number.isFinite(this.fallbackLongitude)&&(n=this.fallbackLongitude,a="fallback");const o=Number.isFinite(i)&&Number.isFinite(n)&&(0!==i||0!==n);if(!o)return hc;let r=null;if("entity"===a&&e){var s;const t=null===(s=this.hass)||void 0===s||null===(s=s.states[e.entity_id])||void 0===s?void 0:s.last_updated;if(t){const e=new Date(t);Number.isNaN(e.getTime())||(r=e)}}else"fallback"===a&&Number.isFinite(this.fallbackUpdated)&&(r=new Date(1e3*this.fallbackUpdated));const l=o&&r?this._formatRelativeTime(r):"";return cc(Fn||(Fn=bl`
      <div class="hero-tile" @click=${0}>
        <div class="hero-tile-head">
          <span>Location${0}</span>
        </div>
        <div class="hero-tile-value">
          ${0}
        </div>
        ${0}
      </div>
    `),()=>{e&&this._fireMoreInfo(e.entity_id)},"fallback"===a?cc(En||(En=bl`<span style="opacity:0.55;text-transform:none;letter-spacing:0;font-size:10px;margin-left:4px;">via contact</span>`)):hc,o?cc(Nn||(Nn=bl`<span class="coord-pair">
                ${0}, ${0}
              </span>`),i.toFixed(4),n.toFixed(4)):cc(jn||(jn=bl`<span class="primary">—</span>`)),l?cc(Ln||(Ln=bl`<div class="loc-updated">Updated ${0}</div>`),l):hc)}_formatRelativeTime(e){const t=(Date.now()-e.getTime())/1e3;return!Number.isFinite(t)||t<0||t<60?"just now":t<3600?`${Math.floor(t/60)} min ago`:t<86400?`${Math.floor(t/3600)} h ago`:`${Math.floor(t/86400)} d ago`}_renderCompanionRadioActivityTile(){const e=this._findEntityIdMatching("tx_airtime"),t=this._findEntityIdMatching("rx_airtime"),i=this._findByMetric("uptime_hours");if(!e&&!t||!i)return hc;const n=this._readUptimeMinutes(i);if(!Number.isFinite(n)||n<=0)return hc;const a=e?this._readNumber(e.entity_id):0,o=t?this._readNumber(t.entity_id):0;if(!Number.isFinite(a)&&!Number.isFinite(o))return hc;const r=e=>Number.isFinite(e)?Math.min(100,Math.max(0,e/n*100)):0,s=r(a),l=r(o),c=Math.max(0,100-s-l),d=$p("tx_airtime_util",s).band,p=$p("rx_airtime_util",l).band,h=this._worseBand(d,p),u=[{value:s,label:`TX ${s.toFixed(1)}%`,kind:"tx"},{value:l,label:`RX ${l.toFixed(1)}%`,kind:"rx"},{value:c,label:`Idle ${c.toFixed(1)}%`,kind:"idle"}],m=s+l;return cc(Pn||(Pn=bl`
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
    `),()=>e&&this._fireMoreInfo(e.entity_id),this._renderInfoTip({band:h,fillPct:0,tooltip:"Lifetime-average half-duplex composition: cumulative TX / RX airtime divided by uptime since the node last booted. The radio can transmit OR receive, never both. Unlike a managed repeater (which reports utilisation over the last interval), the companion exposes only cumulative airtime, so this is a long-run average and will not reflect short recent bursts."}),h,m.toFixed(1),u,100,"none",e?cc(Bn||(Bn=bl`<span class="ra-legend-item" @click=${0}>
                  <span class="legend-swatch tx"></span>TX ${0}%
                </span>`),t=>{t.stopPropagation(),e&&this._fireMoreInfo(e.entity_id)},s.toFixed(1)):cc(Hn||(Hn=bl`<span class="ra-legend-item">
                  <span class="legend-swatch tx"></span>TX ${0}%
                </span>`),s.toFixed(1)),t?cc(Vn||(Vn=bl`<span class="ra-legend-item" @click=${0}>
                  <span class="legend-swatch rx"></span>RX ${0}%
                </span>`),e=>{e.stopPropagation(),t&&this._fireMoreInfo(t.entity_id)},l.toFixed(1)):cc(Kn||(Kn=bl`<span class="ra-legend-item">
                  <span class="legend-swatch rx"></span>RX ${0}%
                </span>`),l.toFixed(1)),c.toFixed(1))}_readUptimeMinutes(e){var t,i;const n=this._readNumber(e.entity_id);if(!Number.isFinite(n))return NaN;switch(null!==(t=null===(i=this.hass)||void 0===i||null===(i=i.states[e.entity_id])||void 0===i||null===(i=i.attributes)||void 0===i?void 0:i.unit_of_measurement)&&void 0!==t?t:""){case"d":return 1440*n;case"h":return 60*n;case"min":return n;default:return n/60}}_buildGroups(e){var t;const i={"Radio · live":[],"Radio · configuration":[],Status:[],Identity:[]};for(const t of this.entities)e.has(t.entity_id)||this._isHeroDuplicate(t)||i[this._groupOf(t)].push(this._renderRow(t));const n="companion"===(null===(t=this.device)||void 0===t?void 0:t.type),a=["Radio · configuration","Identity"];return Object.entries(i).filter(([e,t])=>!(0===t.length||n&&a.includes(e))).map(([e,t])=>({name:e,rows:t}))}_isHeroDuplicate(e){return"battery_pct"===e.metricKey||2===e.sortOrder||"snr"===e.metricKey||"rssi"===e.metricKey||"uptime_hours"===e.metricKey||"tx_airtime_util"===e.metricKey||"rx_airtime_util"===e.metricKey||"Airtime"===e.label||"RX Airtime"===e.label}_groupOf(e){const t=e.entity_id,i=e.sortOrder;return e.booleanProblem||2===i?"Status":6===i?"Radio · configuration":4===i||5===i||9===i||10===i||11===i||12===i||t.includes("noise_floor")||t.includes("tx_queue")?"Radio · live":t.includes("frequency")||t.includes("bandwidth")||t.includes("spreading_factor")||t.includes("rate_limiter")?"Radio · configuration":t.includes("hop_count")||t.includes("out_path")||t.includes("last_seen")||t.includes("last_advert")||3===i||8===i||7===i?"Status":"Identity"}_renderGroup(e){return cc(Un||(Un=bl`
      <div class="group-label">${0}</div>
      ${0}
    `),e.name,e.rows)}_renderRow(e){var t,i,n,a,o;if(e.booleanProblem){var r;const t=null===(r=this.hass)||void 0===r||null===(r=r.states[e.entity_id])||void 0===r?void 0:r.state,i=void 0===t||"unknown"===t||"unavailable"===t,n="on"===t,a=i?"info":n?"bad":"good";return cc(Wn||(Wn=bl`
        <div class="sensor-item"
             @click=${0}
             @contextmenu=${0}
             ${0}>
          <span class="status-dot ${0}"></span>
          <span class="si-label">${0}</span>
          <span class="si-value">${0}</span>
          <span class="si-bar"></span>
        </div>
      `),()=>this._fireMoreInfo(e.entity_id),t=>this._fireContextMenu(t,e),yp(()=>this._fireContextMenu(void 0,e)),a,e.label,i?"—":n?"Detected":"OK")}const s=this._readNumber(e.entity_id),l=null===(t=this.hass)||void 0===t?void 0:t.states[e.entity_id],c=null!==(i=null==l||null===(n=l.attributes)||void 0===n?void 0:n.unit_of_measurement)&&void 0!==i?i:"",d=e.metricKey?this._evaluateForRow(e.metricKey,s,e):null,p=null!==(a=null==d?void 0:d.band)&&void 0!==a?a:"info",h=e.staticTooltip||(null==d?void 0:d.tooltip)||"",u=h?{band:p,fillPct:null!==(o=null==d?void 0:d.fillPct)&&void 0!==o?o:0,tooltip:h,source:null==d?void 0:d.source}:null,m=this._formatRowValue(e,s,null==l?void 0:l.state);return cc(Gn||(Gn=bl`
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
    `),()=>this._fireMoreInfo(e.entity_id),t=>this._fireContextMenu(t,e),yp(()=>this._fireContextMenu(void 0,e)),p,e.label,u?this._renderInfoTip(u):hc,m,c?cc(Xn||(Xn=bl`<span class="unit">${0}</span>`),c):hc,d&&e.metricKey?cc(Yn||(Yn=bl`<meshcore-stat-bar
                .value=${0}
                .min=${0}
                .max=${0}
                .band=${0}>
              </meshcore-stat-bar>`),d.fillPct,0,100,p):hc)}_evaluateForRow(e,t,i){if("uptime_hours"===e){var n,a;let o=t;switch(null!==(n=null===(a=this.hass)||void 0===a||null===(a=a.states[i.entity_id])||void 0===a||null===(a=a.attributes)||void 0===a?void 0:a.unit_of_measurement)&&void 0!==n?n:""){case"d":o=24*t;break;case"h":o=t;break;case"min":o=t/60;break;default:o=t/3600}return $p(e,o)}var o,r;return $p(e,"temperature"===e&&(null!==(o=null===(r=this.hass)||void 0===r||null===(r=r.states[i.entity_id])||void 0===r||null===(r=r.attributes)||void 0===r?void 0:r.unit_of_measurement)&&void 0!==o?o:"").includes("C")?9*t/5+32:t)}_findByMetric(e){return this.entities.find(t=>t.metricKey===e)}_findEntityIdMatching(e){return this.entities.find(t=>t.entity_id.includes(e))}_findEntityByLabel(e){return this.entities.find(t=>t.label===e)}_readNumber(e){var t;const i=null===(t=this.hass)||void 0===t?void 0:t.states[e];if(!i||"unavailable"===i.state||"unknown"===i.state)return NaN;const n=parseFloat(i.state);return Number.isFinite(n)?n:NaN}_formatNumber(e,t){return Number.isFinite(e)?e.toFixed(t):"—"}_formatRowValue(e,t,i){var n;if("unavailable"===i||"unknown"===i)return"—";if(!Number.isFinite(t))return null!=i?i:"—";const a=null===(n=this.hass)||void 0===n||null===(n=n.entities)||void 0===n||null===(n=n[e.entity_id])||void 0===n?void 0:n.display_precision;return null!=a&&a>=0?t.toFixed(a):i&&i.includes(".")?i:t.toString()}_renderInfoTip(e){var t;return e.tooltip?cc(Qn||(Qn=bl`<meshcore-info-tip
      .content=${0}
      .source=${0}>
    </meshcore-info-tip>`),e.tooltip,null!==(t=e.source)&&void 0!==t?t:""):hc}_worseBand(e,t){const i={good:0,info:0,warn:1,bad:2};return i[e]>=i[t]?e:t}_fireMoreInfo(e){e&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}_fireContextMenu(e,t){null==e||e.preventDefault(),this.dispatchEvent(new CustomEvent("tile-context-menu",{detail:{entityId:t.entity_id,label:t.label},bubbles:!0,composed:!0}))}};Rp.styles=Cl(Jn||(Jn=bl`
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
  `)),yl([Dc({type:Object})],Rp.prototype,"hass",void 0),yl([Dc({type:Object})],Rp.prototype,"device",void 0),yl([Dc({type:Array})],Rp.prototype,"entities",void 0),yl([Dc({type:Number})],Rp.prototype,"hiddenCount",void 0),yl([Dc({type:Number})],Rp.prototype,"fallbackLatitude",void 0),yl([Dc({type:Number})],Rp.prototype,"fallbackLongitude",void 0),yl([Dc({type:Number})],Rp.prototype,"fallbackUpdated",void 0),yl([qc()],Rp.prototype,"_rateHistory",void 0),Rp=yl([Rc("meshcore-node-summary")],Rp);let Ip=class extends zc{constructor(){super(...arguments),this.data=[],this.neighbors=[],this.width=600,this.height=200,this.timeRange=24,this.COLORS=["#FF6B6B","#4ECDC4","#FFE66D","#95E1D3","#C7CEEA","#FF8B94","#B5EAD7","#FFB7B2"]}render(){if(!this.data||0===this.data.length||0===this.neighbors.length)return cc(Zn||(Zn=bl`
        <div class="chart-container">
          <div class="empty-state">No data available</div>
        </div>
      `));const e=this._renderChart();return cc(ea||(ea=bl`
      <div class="chart-container">
        ${0}
        <div class="legend">
          ${0}
        </div>
      </div>
    `),e,this.neighbors.map((e,t)=>{const i=this.COLORS[t%this.COLORS.length];return cc(ta||(ta=bl`
              <div class="legend-item">
                <div class="legend-dot" style="background-color: ${0}"></div>
                <span>${0}</span>
              </div>
            `),i,e)}))}_renderChart(){const e=50,t=this.width-100,i=this.height-100;let n=1/0,a=-1/0;this.data.forEach(e=>{Object.values(e.values).forEach(e=>{"number"==typeof e&&(n=Math.min(n,e),a=Math.max(a,e))})}),isFinite(n)&&isFinite(a)||(n=-10,a=20);const o=a-n,r=n-.1*o,s=a+.1*o,l=t=>this.height-e-(t-r)/(s-r)*i,c=60*this.timeRange*60*1e3,d=Date.now(),p=d-c,h=i=>e+(i-p)/c*t,u=[];for(let t=0;t<=5;t++){const i=r+t/5*(s-r),n=l(i);u.push(dc(ia||(ia=bl`
          <line x1="${0}" y1="${0}" x2="${0}" y2="${0}"
            stroke="var(--divider-color, #e0e0e0)" stroke-dasharray="4,4" opacity="0.3" />
          <text x="${0}" y="${0}" font-size="10" text-anchor="end"
            fill="var(--secondary-text-color, #727272)">${0}dB</text>
        `),e,n,this.width-e,n,42,n+4,Math.round(i)))}const m=[];for(let t=0;t<=5;t++){const i=p+t/5*c,n=h(i),a=this._formatTimeLabel(i,d);m.push(dc(na||(na=bl`
          <text x="${0}" y="${0}" font-size="10" text-anchor="middle"
            fill="var(--secondary-text-color, #727272)">${0}</text>
        `),n,this.height-e+16,a))}const g=this.neighbors.map((e,t)=>{const i=this.COLORS[t%this.COLORS.length],n=[];return this.data.forEach(t=>{const i=t.values[e];if("number"==typeof i&&isFinite(i)){const e=h(t.timestamp),a=l(i);n.push(`${e},${a}`)}}),0===n.length?dc(aa||(aa=bl``)):dc(oa||(oa=bl`
        <polyline points="${0}" fill="none" stroke="${0}"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      `),n.join(" "),i)});return dc(ra||(ra=bl`
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
    `),this.width,this.height,this.width,this.height,u,e,e,e,this.height-e,e,this.height-e,this.width-e,this.height-e,g,m)}_formatTimeLabel(e,t){const i=(t-e)/36e5;return i>=24?`${Math.round(i)}h ago`:0===i?"Now":`${Math.round(i)}h`}};Ip.styles=Cl(sa||(sa=bl`
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
  `)),yl([Dc({type:Array})],Ip.prototype,"data",void 0),yl([Dc({type:Array})],Ip.prototype,"neighbors",void 0),yl([Dc({type:Number})],Ip.prototype,"width",void 0),yl([Dc({type:Number})],Ip.prototype,"height",void 0),yl([Dc({type:Number})],Ip.prototype,"timeRange",void 0),Ip=yl([Rc("meshcore-snr-chart")],Ip);let Op=class extends zc{constructor(){super(),this.open=!1,this.title="Confirm",this.message="",this.confirmLabel="Confirm",this.cancelLabel="Cancel",this.dangerous=!1,this._typedValue="",gd(this,{isOpen:()=>this.open,onEscape:()=>this._onCancel()})}render(){if(!this.open)return;const e=this.requireTyped&&this._typedValue!==this.requireTyped;return cc(la||(la=bl`
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
    `),this._onOverlayClick,this.title,this.title,this.message,this.requireTyped?cc(ca||(ca=bl`
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
                `),this.requireTyped,this._typedValue,e=>{this._typedValue=e.target.value},this.requireTyped):"",this._onCancel,this.cancelLabel,this.dangerous?"danger-button":"",e,this._onConfirm,this.confirmLabel)}_onOverlayClick(e){e.target===e.currentTarget&&this._onCancel()}_onCancel(){this._typedValue="",this.dispatchEvent(new CustomEvent("cancel",{bubbles:!0}))}_onConfirm(){this.dispatchEvent(new CustomEvent("confirm",{bubbles:!0})),this._typedValue=""}};Op.styles=[Tc,Cl(da||(da=bl`
      :host {
        display: block;
      }
    `))],yl([Dc({type:Boolean})],Op.prototype,"open",void 0),yl([Dc({type:String})],Op.prototype,"title",void 0),yl([Dc({type:String})],Op.prototype,"message",void 0),yl([Dc({type:String})],Op.prototype,"confirmLabel",void 0),yl([Dc({type:String})],Op.prototype,"cancelLabel",void 0),yl([Dc({type:Boolean})],Op.prototype,"dangerous",void 0),yl([Dc({type:String})],Op.prototype,"requireTyped",void 0),yl([qc()],Op.prototype,"_typedValue",void 0),Op=yl([Rc("meshcore-confirm-dialog")],Op);const Dp=e=>{if(null==e)return;const t=Number(e);return Number.isFinite(t)?t:void 0},qp=["None","Share (Live GPS)","Saved Prefs"],Tp=["1-Byte","2-Byte","3-Byte"],Fp=["Deny","Allow (Per Contact Flags)","Allow All"],Ep=[{label:"Overwrite Oldest When Full",value:1},{label:"Auto-Add Chat (Companion)",value:2},{label:"Auto-Add Repeater",value:4},{label:"Auto-Add Room Server",value:8},{label:"Auto-Add Sensor",value:16}];function Np(e,t){const i=Dp(e);return void 0!==i&&void 0!==t[i]?t[i]:`Unknown (${e})`}const jp=[{name:"reboot",description:"Restart the device",category:"Device Management",dangerous:!0},{name:"poweroff",description:"Power off the device (v1.14.1+)",category:"Device Management",dangerous:!0},{name:"send_appstart",description:"Initialize connection, returns SELF_INFO with device details",category:"Device Management",responseFormat:"Device info with name, public key, radio params, location"},{name:"send_device_query",description:"Query device info (firmware, capabilities, path hash mode)",category:"Device Management",responseFormat:"Device information including firmware version and capabilities"},{name:"get_bat",description:"Get battery voltage and percentage",category:"Device Info",responseFormat:"Battery: {voltage}mV ({percentage}%)"},{name:"get_time",description:"Get device's current RTC time",category:"Device Info",responseFormat:"Epoch timestamp or formatted time string"},{name:"get_self_telemetry",description:"Get local device telemetry data",category:"Device Info",responseFormat:"Telemetry data including temperature, voltage, uptime"},{name:"set_time",description:"Set device RTC time",category:"Device Info",params:[{name:"val",type:"number",description:"Epoch seconds (Unix timestamp)",required:!0}]},{name:"set_radio",description:"Set radio parameters (frequency, bandwidth, spreading factor, coding rate)",category:"Radio Settings",params:[{name:"freq",type:"number",description:"Frequency in MHz (v1.15.0+ allows down to 150)",required:!0,min:150,max:1e3},{name:"bw",type:"number",description:"Bandwidth in kHz",required:!0,min:7.8,max:500},{name:"sf",type:"number",description:"Spreading factor",required:!0,min:5,max:12},{name:"cr",type:"number",description:"Coding rate",required:!0,min:5,max:8}],responseFormat:"OK - radio parameters set (reboot required)"},{name:"get_allowed_repeat_freq",description:"Get allowed repeater frequencies",category:"Radio Settings",responseFormat:"List of allowed frequency ranges"},{name:"set_tx_power",description:"Set transmit power",category:"Radio Settings",params:[{name:"val",type:"number",description:"TX power in dBm",required:!0,min:-9,max:22}],responseFormat:"OK - TX power set to {val}dBm"},{name:"set_radio.rxgain",description:"Set RX boosted gain mode (SX1262/SX1268; also LR1110 v1.16.0+)",category:"Radio Settings",params:[{name:"state",type:"select",description:"Enable or disable RX boosted gain",required:!0,options:["on","off"]}]},{name:"set_coords",description:"Set GPS coordinates (latitude and longitude)",category:"Location",params:[{name:"lat",type:"number",description:"Latitude in decimal degrees",required:!0,min:-90,max:90},{name:"lon",type:"number",description:"Longitude in decimal degrees",required:!0,min:-180,max:180}],responseFormat:"OK - coordinates set"},{name:"set_path_hash_mode",description:"Set path hash mode (0, 1, or 2) for routing optimization",category:"Network",params:[{name:"mode",label:"Path Hash Mode",type:"select",description:"Routing path-hash width",required:!0,selectOptions:[{label:"1-Byte (0)",value:0},{label:"2-Byte (1)",value:1},{label:"3-Byte (2)",value:2}]}]},{name:"set_flood_max",description:"Set maximum flood hops (network-wide broadcast limit)",category:"Network",params:[{name:"val",type:"number",description:"Maximum number of hops for flood messages",required:!0,min:0,max:64}],responseFormat:"OK - flood max set to {val}"},{name:"send_advert",description:"Send a local or flood advertisement",category:"Network",params:[{name:"flood",type:"boolean",description:"True for flood advert, false for local-only",required:!1,default:!1}],responseFormat:"Advertisement sent"},{name:"get_stats_core",description:"Get core mesh statistics (messages, packets, routing)",category:"Statistics",responseFormat:"Core statistics including message counts and routing info"},{name:"get_stats_radio",description:"Get radio statistics (TX/RX counts, errors, signal quality)",category:"Statistics",responseFormat:"Radio statistics including TX/RX packet counts and error rates"},{name:"get_stats_packets",description:"Get detailed packet statistics",category:"Statistics",responseFormat:"Packet-level statistics"},{name:"set_custom_var",description:"Set a custom variable (sensor data)",category:"Advanced",params:[{name:"key",type:"string",description:"Variable name",required:!0},{name:"value",type:"string",description:"Variable value",required:!0}],responseFormat:"OK - variable set"},{name:"get_custom_vars",description:"Get all custom variables",category:"Advanced",responseFormat:"Dictionary of all custom variables"},{name:"set_tuning",description:"Set timing parameters (RX delay and airtime factor)",category:"Advanced",params:[{name:"rx_dly",type:"number",description:"RX delay base",required:!0},{name:"af",type:"number",description:"Airtime factor",required:!0}]},{name:"set_name",description:"Set device name",category:"Device Info",dangerous:!0,dangerMessage:"Changing the device name will change all entity IDs. Automations, scripts, and dashboards using current entity IDs will need to be updated.",params:[{name:"name",type:"string",description:"New device name",required:!0}],responseFormat:"OK - name set to {name}"},{name:"set_multi_acks",description:"Enable or disable multi-ack mode",category:"Advanced",params:[{name:"multi_acks",label:"Multi-Acks",type:"boolean",description:"Enable multi-acks",required:!0,default:!1}]},{name:"set_advert_loc_policy",description:"Set location advertisement policy",category:"Network",params:[{name:"advert_loc_policy",label:"Location Ad Policy",type:"select",description:"How this node shares its location in adverts",required:!0,selectOptions:[{label:"None (0)",value:0},{label:"Share — Live GPS (1)",value:1},{label:"Saved Prefs (2)",value:2}]}]},{name:"set_manual_add_contacts",description:"Set manual contact adding mode",category:"Advanced",params:[{name:"manual_add_contacts",label:"Manual Add Contacts",type:"boolean",description:"Enable manual contact addition (off = auto-add)",required:!0,default:!1}]},{name:"set_telemetry_mode_base",description:"Set base telemetry mode",category:"Advanced",params:[{name:"telemetry_mode_base",label:"Base Telemetry Mode",type:"select",description:"Who may read base telemetry",required:!0,selectOptions:[{label:"Deny (0)",value:0},{label:"Allow Per Contact Flags (1)",value:1},{label:"Allow All (2)",value:2}]}]},{name:"set_telemetry_mode_loc",description:"Set location telemetry mode",category:"Advanced",params:[{name:"telemetry_mode_loc",label:"Location Telemetry Mode",type:"select",description:"Who may read location telemetry",required:!0,selectOptions:[{label:"Deny (0)",value:0},{label:"Allow Per Contact Flags (1)",value:1},{label:"Allow All (2)",value:2}]}]},{name:"set_telemetry_mode_env",description:"Set environment telemetry mode",category:"Advanced",params:[{name:"telemetry_mode_env",label:"Environment Telemetry Mode",type:"select",description:"Who may read environment telemetry",required:!0,selectOptions:[{label:"Deny (0)",value:0},{label:"Allow Per Contact Flags (1)",value:1},{label:"Allow All (2)",value:2}]}]},{name:"get_channel",description:"Get channel information by index",category:"Advanced",params:[{name:"channel_idx",type:"number",description:"Channel index",required:!0}]},{name:"set_channel",description:"Set channel name and optional secret",category:"Advanced",params:[{name:"channel_idx",type:"number",description:"Channel index",required:!0},{name:"channel_name",type:"string",description:"Channel name (use # prefix for auto-derived key)",required:!0}]},{name:"export_private_key",description:"Export private key (may be disabled by firmware)",category:"Advanced",responseFormat:"Private key in hex format"},{name:"import_private_key",description:"Import private key (reboot required)",category:"Advanced",dangerous:!0,dangerMessage:"Importing a private key changes the device identity and all entity IDs. Automations, scripts, and dashboards using current entity IDs will need to be updated.",params:[{name:"key",type:"string",description:"Private key in hex format",required:!0}]},{name:"sign",description:"Sign data with the device private key",category:"Advanced",params:[{name:"data",type:"string",description:"Data to sign (hex format)",required:!0}]},{name:"send_msg",description:"Send a direct text message to a contact",category:"Messaging",params:[{name:"dst",type:"string",description:"Contact name, public key prefix, or full public key",required:!0},{name:"msg",type:"string",description:"Message text",required:!0}]},{name:"send_msg_with_retry",description:"Send a message with automatic retry and path reset",category:"Messaging",params:[{name:"dst",type:"string",description:"Contact name, public key prefix, or full public key",required:!0},{name:"msg",type:"string",description:"Message text",required:!0}]},{name:"send_chan_msg",description:"Send a message to a channel (group message)",category:"Messaging",params:[{name:"chan",type:"number",description:"Channel index",required:!0},{name:"msg",type:"string",description:"Message text",required:!0}]},{name:"send_cmd",description:"Send a CLI command to a remote node over the mesh",category:"Messaging",params:[{name:"dst",type:"string",description:"Contact name, public key prefix, or full public key",required:!0},{name:"cmd",type:"string",description:"CLI command to execute on remote node",required:!0}]},{name:"send_login",description:"Login to a remote node with admin password",category:"Messaging",params:[{name:"dst",type:"string",description:"Contact name or public key",required:!0},{name:"pwd",type:"string",description:"Admin password",required:!0}]},{name:"send_logout",description:"Logout from a remote node",category:"Messaging",params:[{name:"dst",type:"string",description:"Contact name or public key",required:!0}]},{name:"send_statusreq",description:"Request status from a remote node",category:"Advanced",params:[{name:"dst",type:"string",description:"Contact name or public key",required:!0}]},{name:"send_telemetry_req",description:"Request telemetry data from a remote node",category:"Advanced",params:[{name:"dst",type:"string",description:"Contact name or public key",required:!0}]},{name:"send_path_discovery",description:"Initiate path discovery to a remote node",category:"Advanced",params:[{name:"dst",type:"string",description:"Contact name or public key",required:!0}]},{name:"req_status_sync",description:"Request status from a node (synchronous)",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"req_telemetry_sync",description:"Request telemetry data from a node (synchronous)",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"req_mma_sync",description:"Request min/max/avg statistics for a time range",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0},{name:"start",type:"number",description:"Start time (epoch seconds)",required:!0},{name:"end",type:"number",description:"End time (epoch seconds)",required:!0}]},{name:"req_acl_sync",description:"Request access control list from a node",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"req_neighbours_sync",description:"Request neighbor list from a remote node",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"fetch_all_neighbours",description:"Fetch complete neighbor list with pagination",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"req_regions_sync",description:"Request region information from a node",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"req_owner_sync",description:"Request owner information (name and description)",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"req_basic_sync",description:"Request basic node information",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"get_contacts",description:"Retrieve all known contacts from the device",category:"Advanced",params:[{name:"lastmod",type:"number",description:"Only get contacts modified since this timestamp (optional)",required:!1}]},{name:"reset_path",description:"Reset routing path to flood for a contact",category:"Advanced",params:[{name:"key",type:"string",description:"Contact name or public key",required:!0}]},{name:"share_contact",description:"Share a contact info on the mesh",category:"Advanced",params:[{name:"key",type:"string",description:"Contact name or public key",required:!0}]},{name:"export_contact",description:"Export a contact card (or self if no contact specified)",category:"Advanced",params:[{name:"key",type:"string",description:"Contact name or public key (optional, defaults to self)",required:!1}]},{name:"import_contact",description:"Import a contact card",category:"Advanced",params:[{name:"card_data",type:"string",description:"Contact card data (hex encoded)",required:!0}]},{name:"remove_contact",description:"Remove a contact from the list",category:"Advanced",params:[{name:"key",type:"string",description:"Contact name or public key",required:!0}]},{name:"update_contact",description:"Update contact routing path and flags",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0},{name:"path",type:"string",description:"Routing path (hex string)",required:!0},{name:"flags",type:"string",description:"Contact flags",required:!0}]},{name:"add_contact",description:"Add a contact to the list",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"change_contact_path",description:"Change a contact routing path",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0},{name:"path",type:"number",description:"New path (integer)",required:!0}]},{name:"change_contact_flags",description:"Change a contact flags",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0},{name:"flags",type:"number",description:"New flags (integer)",required:!0}]},{name:"set_autoadd_config",description:"Configure auto-add behavior for new contacts",category:"Advanced",params:[{name:"flag",label:"Auto-Add Config",type:"bitmask",description:"Which contact types to auto-add, plus overwrite-oldest policy",required:!0,bits:Ep}]},{name:"get_autoadd_config",description:"Get current auto-add configuration",category:"Advanced"},{name:"send_binary_req",description:"Send a raw binary request to a remote node",category:"Advanced",params:[{name:"dst",type:"string",description:"Contact name or public key",required:!0},{name:"request_type",type:"number",description:"Binary request type",required:!0}]},{name:"set_flood_scope",description:"Set flood scope filter for broadcast messages",category:"Network",params:[{name:"scope",type:"string",description:"Flood scope (int, string, or hex)",required:!0}]},{name:"set_default_flood_scope",description:"Set the persistent default flood scope used when no per-message scope is set (v1.15.0+)",category:"Network",params:[{name:"scope",type:"string",description:'Channel/region name (e.g. "public"), or empty / "*" / "0" / "None" to clear',required:!0}],responseFormat:"OK"},{name:"get_default_flood_scope",description:"Get the persistent default flood scope (v1.15.0+)",category:"Network",responseFormat:"Scope name + 16-byte key, or null if unset"},{name:"send_control_data",description:"Send raw control data packet to the mesh",category:"Advanced",params:[{name:"control_type",type:"number",description:"Control data type",required:!0},{name:"payload",type:"string",description:"Payload data (hex encoded)",required:!0}]},{name:"send_node_discover_req",description:"Broadcast node discovery request",category:"Network",params:[{name:"filter",type:"number",description:"Discovery filter",required:!0},{name:"prefix_only",type:"boolean",description:"Only use public key prefix for matching",required:!1,default:!1}]},{name:"get_msg",description:"Retrieve pending incoming messages",category:"Messaging",params:[{name:"timeout",type:"number",description:"Timeout in seconds to wait for messages (optional)",required:!1,default:5}]},{name:"send_trace",description:"Send a trace packet through specific repeaters",category:"Advanced",params:[{name:"auth_code",type:"number",description:"Authentication code",required:!0},{name:"tag",type:"number",description:"Trace tag",required:!0},{name:"flags",type:"number",description:"Trace flags",required:!0},{name:"path",type:"string",description:"Optional repeater path (hex encoded)",required:!1}]}],Lp=[{name:"reboot",description:"Restart the remote device",category:"Device Management",dangerous:!0,remoteOnly:!0},{name:"poweroff",description:"Power off the remote device (v1.14.1+)",category:"Device Management",dangerous:!0,remoteOnly:!0},{name:"shutdown",description:"Power off the remote device (alias for poweroff)",category:"Device Management",dangerous:!0,remoteOnly:!0},{name:"clkreboot",description:"Reset clock to May 2024 and reboot",category:"Device Management",dangerous:!0,remoteOnly:!0},{name:"get name",description:"Get device name",category:"Device Info",responseFormat:"> Device name string",remoteOnly:!0},{name:"get radio",description:"Get radio parameters (frequency, bandwidth, spreading factor, coding rate)",category:"Radio Settings",responseFormat:"> freq,bw,sf,cr (example: 906.875,250.000,11,5)",remoteOnly:!0},{name:"get freq",description:"Get frequency only",category:"Radio Settings",responseFormat:"> frequency in MHz (example: 906.875)",remoteOnly:!0},{name:"get tx",description:"Get transmit power",category:"Radio Settings",responseFormat:"> TX power in dBm (example: 17)",remoteOnly:!0},{name:"get af",description:"Get airtime factor",category:"Radio Settings",responseFormat:"> airtime factor value",remoteOnly:!0},{name:"get dutycycle",description:"Get TX duty cycle as a percentage (v1.15.0+)",category:"Radio Settings",responseFormat:"> NN.N%   (example: > 33.3%)",remoteOnly:!0},{name:"get lat",description:"Get latitude coordinate",category:"Location",responseFormat:"> latitude as float (example: 45.123456)",remoteOnly:!0},{name:"get lon",description:"Get longitude coordinate",category:"Location",responseFormat:"> longitude as float (example: -122.654321)",remoteOnly:!0},{name:"get repeat",description:"Get forwarding/repeating status",category:"Network",responseFormat:"> on or off",remoteOnly:!0},{name:"get rxdelay",description:"Get RX delay base",category:"Advanced",responseFormat:"> RX delay value",remoteOnly:!0},{name:"get txdelay",description:"Get TX delay factor",category:"Advanced",responseFormat:"> TX delay value",remoteOnly:!0},{name:"get direct.txdelay",description:"Get direct TX delay factor",category:"Advanced",responseFormat:"> Direct TX delay value",remoteOnly:!0},{name:"get flood.max",description:"Get maximum flood hops",category:"Network",responseFormat:"> max hops value (example: 8)",remoteOnly:!0},{name:"get flood.max.unscoped",description:"Get max flood hops for un-scoped packets (v1.16.0+)",category:"Network",responseFormat:"> max hops value (example: 64)",remoteOnly:!0},{name:"get flood.max.advert",description:"Get max flood hops for adverts (v1.16.0+)",category:"Network",responseFormat:"> max hops value (example: 8)",remoteOnly:!0},{name:"get advert.interval",description:"Get local advertisement interval (minutes)",category:"Network",responseFormat:"> interval in minutes (example: 120)",remoteOnly:!0},{name:"get flood.advert.interval",description:"Get flood advertisement interval (hours)",category:"Network",responseFormat:"> interval in hours (example: 47; firmware default 47 since v1.16.0)",remoteOnly:!0},{name:"get int.thresh",description:"Get interference threshold",category:"Advanced",responseFormat:"> threshold value",remoteOnly:!0},{name:"get agc.reset.interval",description:"Get AGC (automatic gain control) reset interval",category:"Advanced",responseFormat:"> interval value",remoteOnly:!0},{name:"get multi.acks",description:"Get multi-acks setting",category:"Advanced",responseFormat:"> multi-acks value (0 or 1)",remoteOnly:!0},{name:"get allow.read.only",description:"Get read-only access permission setting",category:"Advanced",responseFormat:"> on or off",remoteOnly:!0},{name:"get guest.password",description:"Get guest password",category:"Advanced",responseFormat:"> password string",remoteOnly:!0},{name:"get public.key",description:"Get full public key (hex)",category:"Device Info",responseFormat:"> hex-encoded public key (example: a6ec829f...d9b70772)",remoteOnly:!0},{name:"get role",description:"Get device role",category:"Device Info",responseFormat:"> repeater or client",remoteOnly:!0},{name:"get owner.info",description:"Get owner information text",category:"Device Info",responseFormat:"> owner info string (with | for newlines)",remoteOnly:!0},{name:"get adc.multiplier",description:"Get ADC voltage multiplier",category:"Advanced",responseFormat:"> multiplier value",remoteOnly:!0},{name:"get path.hash.mode",description:"Get path hash mode (v1.14.0+)",category:"Network",responseFormat:"> mode: 0, 1, or 2",remoteOnly:!0},{name:"get loop.detect",description:"Get loop detection level (v1.14.0+)",category:"Network",responseFormat:"> off, minimal, moderate, or strict",remoteOnly:!0},{name:"get bootloader.ver",description:"Get bootloader version (NRF52 only, v1.14.0+)",category:"Device Info",responseFormat:"> bootloader version string",remoteOnly:!0},{name:"get radio.rxgain",description:"Get RX boosted gain mode (SX1262/SX1268; also LR1110 v1.16.0+)",category:"Radio Settings",responseFormat:"> on or off",remoteOnly:!0},{name:"get bridge.type",description:"Get bridge hardware type",category:"Advanced",responseFormat:"> none, rs232, or espnow",remoteOnly:!0},{name:"set name",description:"Set device name",category:"Device Info",params:[{name:"name",type:"string",description:"New name (no special characters: []\\:,?*)",required:!0}],responseFormat:"OK - name changed",remoteOnly:!0},{name:"set af",description:"Set airtime factor",category:"Radio Settings",params:[{name:"val",type:"number",description:"Airtime factor (0-9)",required:!0,min:0,max:9}],responseFormat:"OK - airtime factor set",remoteOnly:!0},{name:"set dutycycle",description:"Set TX duty cycle as a percentage (v1.15.0+, alias for set af)",category:"Radio Settings",params:[{name:"pct",type:"number",description:"Duty cycle percentage (1-100). Firmware converts to airtime_factor = (100/pct) - 1.",required:!0,min:1,max:100}],responseFormat:"OK - NN.N%",remoteOnly:!0},{name:"set repeat",description:"Enable or disable packet forwarding/repeating",category:"Network",params:[{name:"state",type:"select",description:"Enable (on) or disable (off)",required:!0,options:["on","off"]}],responseFormat:"OK - forwarding enabled/disabled",remoteOnly:!0},{name:"set radio",description:"Set radio parameters (reboot required to take effect)",category:"Radio Settings",params:[{name:"params",type:"string",description:"Comma-separated: freq,bw,sf,cr (example: 906.875,250.000,11,5)",required:!0}],responseFormat:"OK - radio parameters set (reboot required)",remoteOnly:!0},{name:"set lat",description:"Set latitude coordinate",category:"Location",params:[{name:"val",type:"number",description:"Latitude (-90 to 90)",required:!0,min:-90,max:90}],responseFormat:"OK - latitude set",remoteOnly:!0},{name:"set lon",description:"Set longitude coordinate",category:"Location",params:[{name:"val",type:"number",description:"Longitude (-180 to 180)",required:!0,min:-180,max:180}],responseFormat:"OK - longitude set",remoteOnly:!0},{name:"set tx",description:"Set transmit power",category:"Radio Settings",params:[{name:"val",type:"number",description:"TX power in dBm",required:!0,min:-9,max:22}],responseFormat:"OK - TX power set",remoteOnly:!0},{name:"set rxdelay",description:"Set RX delay base",category:"Advanced",params:[{name:"val",type:"number",description:"RX delay base in seconds (0-20, v1.16.0+ upper bound)",required:!0,min:0,max:20}],responseFormat:"OK - RX delay set",remoteOnly:!0},{name:"set txdelay",description:"Set TX delay factor",category:"Advanced",params:[{name:"val",type:"number",description:"TX delay factor (0-2, v1.16.0+ upper bound)",required:!0,min:0,max:2}],responseFormat:"OK - TX delay set",remoteOnly:!0},{name:"set direct.txdelay",description:"Set direct TX delay factor",category:"Advanced",params:[{name:"val",type:"number",description:"Direct TX delay factor (0-2, v1.16.0+ upper bound)",required:!0,min:0,max:2}],responseFormat:"OK - direct TX delay set",remoteOnly:!0},{name:"set flood.max",description:"Set maximum flood hops",category:"Network",params:[{name:"val",type:"number",description:"Max hops (0-64)",required:!0,min:0,max:64}],responseFormat:"OK - flood max set",remoteOnly:!0},{name:"set flood.max.unscoped",description:"Set max flood hops for un-scoped packets (v1.16.0+)",category:"Network",params:[{name:"val",type:"number",description:"Max hops (0-64)",required:!0,min:0,max:64}],responseFormat:"OK",remoteOnly:!0},{name:"set flood.max.advert",description:"Set max flood hops for adverts (v1.16.0+)",category:"Network",params:[{name:"val",type:"number",description:"Max hops (0-64)",required:!0,min:0,max:64}],responseFormat:"OK",remoteOnly:!0},{name:"set advert.interval",description:"Set local advertisement interval (minutes)",category:"Network",params:[{name:"val",type:"number",description:"Interval in minutes (60-240, or 0 to disable)",required:!0,min:0,max:240}],responseFormat:"OK - advert interval set",remoteOnly:!0},{name:"set flood.advert.interval",description:"Set flood advertisement interval (hours)",category:"Network",params:[{name:"val",type:"number",description:"Interval in hours (3-168, or 0 to disable)",required:!0,min:0,max:168}],responseFormat:"OK - flood advert interval set",remoteOnly:!0},{name:"set int.thresh",description:"Set interference threshold",category:"Advanced",params:[{name:"val",type:"number",description:"Threshold value",required:!0}],responseFormat:"OK - interference threshold set",remoteOnly:!0},{name:"set agc.reset.interval",description:"Set AGC (automatic gain control) reset interval",category:"Advanced",params:[{name:"val",type:"number",description:"Interval value",required:!0}],responseFormat:"OK - AGC reset interval set",remoteOnly:!0},{name:"set multi.acks",description:"Set multi-acks mode",category:"Advanced",params:[{name:"val",label:"Multi-Acks",type:"select",description:"Enable multi-acks",required:!0,selectOptions:[{label:"On (1)",value:1},{label:"Off (0)",value:0}]}],responseFormat:"OK - multi-acks set",remoteOnly:!0},{name:"set allow.read.only",description:"Set read-only access permission",category:"Advanced",params:[{name:"state",type:"select",description:"Enable (on) or disable (off)",required:!0,options:["on","off"]}],responseFormat:"OK - read-only access updated",remoteOnly:!0},{name:"set guest.password",description:"Set guest password",category:"Advanced",params:[{name:"pwd",type:"string",description:"New guest password",required:!0}],responseFormat:"OK - guest password set",remoteOnly:!0},{name:"set prv.key",description:"Import private key (reboot required, serial-only)",category:"Advanced",params:[{name:"hex",type:"string",description:"64-character hex private key",required:!0}],responseFormat:"OK - private key imported (reboot required)",remoteOnly:!0},{name:"set owner.info",description:"Set owner information text",category:"Device Info",params:[{name:"text",type:"string",description:"Owner info (use | for newlines)",required:!0}],responseFormat:"OK - owner info set",remoteOnly:!0},{name:"set adc.multiplier",description:"Set ADC voltage multiplier",category:"Advanced",params:[{name:"val",type:"number",description:"Multiplier value (0-10, 0 = board default)",required:!0,min:0,max:10}],responseFormat:"OK - ADC multiplier set",remoteOnly:!0},{name:"set path.hash.mode",description:"Set path hash mode for routing (v1.14.0+)",category:"Network",params:[{name:"mode",label:"Path Hash Mode",type:"select",description:"Routing path-hash width",required:!0,selectOptions:[{label:"1-Byte (0)",value:0},{label:"2-Byte (1)",value:1},{label:"3-Byte (2)",value:2}]}],responseFormat:"OK - path hash mode set",remoteOnly:!0},{name:"set loop.detect",description:"Set loop detection level (v1.14.0+)",category:"Network",params:[{name:"mode",type:"select",description:"Mode: off, minimal, moderate, or strict",required:!0,options:["off","minimal","moderate","strict"]}],responseFormat:"OK - loop detection set",remoteOnly:!0},{name:"set radio.rxgain",description:"Set RX boosted gain mode (SX1262/SX1268; also LR1110 v1.16.0+)",category:"Radio Settings",params:[{name:"state",type:"select",description:"Enable (on) or disable (off)",required:!0,options:["on","off"]}],responseFormat:"OK - RX gain mode set",remoteOnly:!0},{name:"set bridge.enabled",description:"Enable or disable the bridge interface",category:"Advanced",params:[{name:"state",type:"select",description:"Enable (on) or disable (off)",required:!0,options:["on","off"]}],responseFormat:"OK - bridge enabled/disabled",remoteOnly:!0},{name:"set bridge.delay",description:"Set bridge packet delay",category:"Advanced",params:[{name:"ms",type:"number",description:"Delay in milliseconds (0-10000)",required:!0,min:0,max:1e4}],responseFormat:"OK - bridge delay set",remoteOnly:!0},{name:"set bridge.source",description:"Set bridge packet source (RX or TX logs)",category:"Advanced",params:[{name:"source",type:"select",description:"Source: rx (logRx) or tx (logTx)",required:!0,options:["rx","tx"]}],responseFormat:"OK - bridge source set",remoteOnly:!0},{name:"set bridge.baud",description:"Set RS232 bridge baud rate",category:"Advanced",params:[{name:"rate",type:"number",description:"Baud rate (9600-115200, board-dependent max)",required:!0,min:9600}],responseFormat:"OK - bridge baud rate set",remoteOnly:!0},{name:"set bridge.channel",description:"Set ESP-NOW bridge channel",category:"Advanced",params:[{name:"ch",type:"number",description:"Channel (1-14)",required:!0,min:1,max:14}],responseFormat:"OK - bridge channel set",remoteOnly:!0},{name:"set bridge.secret",description:"Set ESP-NOW bridge shared secret",category:"Advanced",params:[{name:"key",type:"string",description:"Shared secret string",required:!0}],responseFormat:"OK - bridge secret set",remoteOnly:!0},{name:"ver",description:"Get firmware version and build date",category:"Device Info",responseFormat:"<version> (Build: <date>)",remoteOnly:!0},{name:"board",description:"Get board/manufacturer name",category:"Device Info",responseFormat:"Board name string",remoteOnly:!0},{name:"neighbors",description:"List known neighbor nodes",category:"Network",responseFormat:"Formatted neighbor list",remoteOnly:!0},{name:"neighbor.remove",description:"Remove a neighbor by public key",category:"Network",params:[{name:"pubkey",type:"string",description:"Public key hex string of neighbor to remove",required:!0}],responseFormat:"OK - neighbor removed",remoteOnly:!0},{name:"clock",description:"Get current device time",category:"Device Info",responseFormat:"HH:MM - D/M/Y UTC",remoteOnly:!0},{name:"clock sync",description:"Synchronize clock to sender's timestamp",category:"Device Info",responseFormat:"OK - clock set: HH:MM - D/M/Y UTC",remoteOnly:!0},{name:"time",description:"Set time to epoch seconds",category:"Device Info",params:[{name:"epoch",type:"number",description:"Unix epoch timestamp",required:!0}],responseFormat:"OK - clock set: HH:MM - D/M/Y UTC",remoteOnly:!0},{name:"password",description:"Change admin password (requires prior login)",category:"Advanced",params:[{name:"pwd",type:"string",description:"New admin password",required:!0}],responseFormat:"password now: <pwd>",remoteOnly:!0},{name:"advert",description:"Send a flood advertisement (network-wide broadcast)",category:"Network",responseFormat:"OK - Advert sent",remoteOnly:!0},{name:"advert.zerohop",description:"Send a local-only (zero-hop) advertisement (v1.14.0+)",category:"Network",responseFormat:"OK - zerohop advert sent",remoteOnly:!0},{name:"clear stats",description:"Reset all statistics counters",category:"Advanced",responseFormat:"OK - stats reset",remoteOnly:!0},{name:"log start",description:"Start packet logging",category:"Advanced",responseFormat:"logging on",remoteOnly:!0},{name:"log stop",description:"Stop packet logging",category:"Advanced",responseFormat:"logging off",remoteOnly:!0},{name:"log erase",description:"Erase log file",category:"Advanced",responseFormat:"log erased",remoteOnly:!0},{name:"powersaving",description:"Get power saving status (NRF52 only)",category:"Device Info",responseFormat:"on or off",remoteOnly:!0},{name:"powersaving on",description:"Enable power saving mode (NRF52 only)",category:"Device Info",responseFormat:"ok",remoteOnly:!0},{name:"powersaving off",description:"Disable power saving mode (NRF52 only)",category:"Device Info",responseFormat:"ok",remoteOnly:!0},{name:"start ota",description:"Enter Bluetooth OTA update mode (repeater-only)",category:"Device Management",dangerous:!0,remoteOnly:!0},{name:"tempradio",description:"Temporarily override radio parameters for a duration",category:"Radio Settings",params:[{name:"freq",type:"number",description:"Temporary frequency in MHz",required:!0},{name:"bw",type:"number",description:"Temporary bandwidth in kHz",required:!0},{name:"sf",type:"number",description:"Temporary spreading factor (5-12)",required:!0},{name:"cr",type:"number",description:"Temporary coding rate (5-8)",required:!0},{name:"mins",type:"number",description:"Duration in minutes",required:!0}],responseFormat:"OK - temp params for N mins",remoteOnly:!0},{name:"region",description:"Export the device region map (v1.15.0+)",category:"Regions",responseFormat:"Comma-separated region list (up to 160 chars)",remoteOnly:!0},{name:"region def",description:"Bulk-define the region map in one command (v1.16.0+)",category:"Regions",params:[{name:"spec",type:"string",description:"Space-separated region tokens; each is name, name|jump, or name,jump (| or , redirects nesting to the jump region). Example: socal cencal|socal norcal",required:!0}],responseFormat:'Exported region map, or "Err - <reason>"',remoteOnly:!0},{name:"region load",description:"Reload regions from persistent storage (v1.15.0+)",category:"Regions",remoteOnly:!0},{name:"region save",description:"Persist current region map to storage (v1.15.0+)",category:"Regions",responseFormat:'OK or "Err - save failed"',remoteOnly:!0},{name:"region get",description:"Show one region (name, parent, allow/deny-flood flag) (v1.15.0+)",category:"Regions",params:[{name:"name",type:"string",description:"Region name (prefix match)",required:!0}],responseFormat:" <name> [(parent)] [F]   (F = flood allowed)",remoteOnly:!0},{name:"region put",description:"Create a region (flood allowed by default) (v1.15.0+)",category:"Regions",params:[{name:"name",type:"string",description:"Region name",required:!0},{name:"parent",type:"string",description:"Parent region name (optional, defaults to wildcard)",required:!1}],responseFormat:"OK - (flood allowed)",remoteOnly:!0},{name:"region remove",description:"Remove a region (must be empty) (v1.15.0+)",category:"Regions",params:[{name:"name",type:"string",description:"Region name (exact match)",required:!0}],responseFormat:'OK / "Err - not empty" / "Err - not found"',remoteOnly:!0},{name:"region list",description:"List regions filtered by flood permission (v1.15.0+)",category:"Regions",params:[{name:"filter",type:"select",description:"allowed = flood-permitted regions; denied = flood-blocked regions",required:!0,options:["allowed","denied"]}],remoteOnly:!0},{name:"region home",description:"Get (no arg) or set (with arg) the home region (v1.15.0+)",category:"Regions",params:[{name:"name",type:"string",description:"Leave empty to read current home; provide a region name (prefix match) to set",required:!1}],responseFormat:" home is [now] <name>",remoteOnly:!0},{name:"region default",description:"Get (no arg) or set (with arg) the default flood scope region (v1.15.0+)",category:"Regions",params:[{name:"name",type:"string",description:"Leave empty to read current default; provide a region name to set, or <null> to clear",required:!1}],responseFormat:" default scope is [now] <name|<null>>",remoteOnly:!0},{name:"region allowf",description:"Allow flood for a region (v1.15.0+)",category:"Regions",params:[{name:"name",type:"string",description:"Region name (prefix match)",required:!0}],responseFormat:"OK",remoteOnly:!0},{name:"region denyf",description:"Deny flood for a region (v1.15.0+)",category:"Regions",params:[{name:"name",type:"string",description:"Region name (prefix match)",required:!0}],responseFormat:"OK",remoteOnly:!0}];var Pp;let Bp=Pp=class extends zc{constructor(){super(),this.open=!1,this.isLocal=!1,this.narrow=!1,this.nodeName="",this._selectedCommand=null,this._paramValues={},this._response=null,this._executing=!1,this._error=null,this._deviceResponses=[],this._unsubMsg=null,this._feedActive=!1,this._feedSince=0,this._feedGeneration=0,gd(this,{isOpen:()=>this.open,onEscape:()=>this._onClose()})}_getCommands(){return this.isLocal?jp:Lp}_getGroupedCommands(){const e=this._getCommands(),t=new Map;for(const i of e)t.has(i.category)||t.set(i.category,[]),t.get(i.category).push(i);return t}render(){if(!this.open)return;const e=this._getGroupedCommands();return cc(pa||(pa=bl`
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
    `),this._onOverlayClick,this.targetPrefix?cc(ha||(ha=bl`<div style="font-size: 12px; color: var(--secondary-text-color); margin-top: 4px;">
                    Target: ${0}
                  </div>`),this.targetPrefix):"",this._onCommandSelected,Array.from(e.entries()).map(([e,t])=>cc(ua||(ua=bl`<optgroup label=${0}>
                      ${0}
                    </optgroup>`),e,t.map(e=>cc(ma||(ma=bl`<option value=${0}>
                            ${0} - ${0}
                          </option>`),e.name,e.name,e.description)))),this._selectedCommand?cc(ga||(ga=bl`
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
                `),this._selectedCommand.name,this._selectedCommand.description,this._selectedCommand.dangerous?cc(fa||(fa=bl`<div class="danger-warning">
                        <span class="danger-warning-icon"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg></span>
                        <span>${0}</span>
                      </div>`),this._selectedCommand.dangerMessage||"This is a dangerous operation"):"",this._selectedCommand.params&&this._selectedCommand.params.length>0?cc(va||(va=bl`
                        <div class="command-params">
                          <label class="form-label">Parameters</label>
                          ${0}
                        </div>
                      `),this._selectedCommand.params.map(e=>this._renderParamInput(e))):"",this._selectedCommand.responseFormat?cc(ba||(ba=bl`<div style="margin-top: 12px; font-size: 12px; color: var(--secondary-text-color); font-style: italic;">
                        Expected: ${0}
                      </div>`),this._selectedCommand.responseFormat):"",this._executing,this._executeCommand,this._executing?"Executing...":"Execute",this._response||this._error?cc(ya||(ya=bl`
                        <div class="form-group" style="margin-top: 16px;">
                          <label class="form-label">Response</label>
                          <div
                            class="command-response"
                            style=${0}>
                            ${0}
                          </div>
                        </div>
                      `),this._error?"color: var(--error-color, #db4437);":"",this._error?this._error:this._renderFormattedResponse(this._response)):""):"",!this.isLocal&&this._deviceResponses.length>0?cc(_a||(_a=bl`
                  <div class="form-group" style="margin-top: 16px;">
                    <label class="form-label">Responses from device</label>
                    <div class="device-response-feed">
                      ${0}
                    </div>
                  </div>
                `),this._deviceResponses.map(e=>cc(xa||(xa=bl`<div class="device-response-row">
                          <span class="drr-time">${0}</span><span class="drr-text">${0}</span>${0}
                        </div>`),new Date(e.ts).toLocaleTimeString(),e.text,void 0!==e.snr?cc(wa||(wa=bl`<span class="drr-snr"> · SNR ${0}</span>`),e.snr):""))):"",this._onClose)}_renderParamInput(e){var t,i,n;const a=null!==(t=null!==(i=this._paramValues[e.name])&&void 0!==i?i:e.default)&&void 0!==t?t:"",o=null!==(n=e.label)&&void 0!==n?n:e.name;switch(e.type){case"boolean":return cc(ka||(ka=bl`
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
        `),!!a,t=>{this._paramValues[e.name]=t.target.checked},o,e.description?cc($a||($a=bl`<div class="form-description">${0}</div>`),e.description):"");case"select":{const t=e.selectOptions?e.selectOptions:(e.options||[]).map(e=>({label:e,value:e}));return cc(Ca||(Ca=bl`
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
        `),o,i=>{const n=i.target.value,a=t.find(e=>String(e.value)===n);this._paramValues[e.name]=a?a.value:n},""===a||void 0===a,t.map(e=>cc(Sa||(Sa=bl`<option value=${0} ?selected=${0}>${0}</option>`),String(e.value),String(a)===String(e.value),e.label)),e.description?cc(Ma||(Ma=bl`<div class="form-description">${0}</div>`),e.description):"")}case"bitmask":var r,s;return cc(za||(za=bl`
          <fieldset class="form-group">
            <legend class="form-label">${0}</legend>
            ${0}
            <div class="form-description">Value: ${0}</div>
            ${0}
          </fieldset>
        `),o,(e.bits||[]).map(t=>{var i,n;const a=Number(null!==(i=null!==(n=this._paramValues[e.name])&&void 0!==n?n:e.default)&&void 0!==i?i:0);return cc(Aa||(Aa=bl`
                <label class="form-toggle">
                  <input
                    type="checkbox"
                    ?checked=${0}
                    @change=${0}
                  />
                  <span class="form-toggle-label">${0}</span>
                </label>
              `),(a&t.value)===t.value,i=>{var n,a;const o=i.target.checked,r=Number(null!==(n=null!==(a=this._paramValues[e.name])&&void 0!==a?a:e.default)&&void 0!==n?n:0);this._paramValues[e.name]=o?r|t.value:r&~t.value,this.requestUpdate()},t.label)}),Number(null!==(r=null!==(s=this._paramValues[e.name])&&void 0!==s?s:e.default)&&void 0!==r?r:0),e.description?cc(Ra||(Ra=bl`<div class="form-description">${0}</div>`),e.description):"");case"number":return cc(Ia||(Ia=bl`
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
        `),o,e.required,e.min,e.max,String(a),t=>{const i=t.target;this._paramValues[e.name]=i.value?Number(i.value):""},e.description?cc(Oa||(Oa=bl`<div class="form-description">${0}</div>`),e.description):"");default:return cc(Da||(Da=bl`
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
        `),o,e.required,String(a),t=>{this._paramValues[e.name]=t.target.value},e.description?cc(qa||(qa=bl`<div class="form-description">${0}</div>`),e.description):"")}}_formatValue(e){if(!0===e)return"Yes";if(!1===e)return"No";if(null==e)return"—";if("object"==typeof e)try{return JSON.stringify(e)}catch(t){return String(e)}return"string"==typeof e&&e.length,String(e)}_renderFormattedResponse(e){try{const t=JSON.parse(e);if(t&&"object"==typeof t&&!Array.isArray(t)){const e=Object.entries(t);if(e.length>0)return cc(Ta||(Ta=bl`
            <div style="display: grid; grid-template-columns: auto 1fr; gap: 4px 12px; font-size: 13px;">
              ${0}
            </div>
          `),e.map(([e,t])=>{const i=Pp._FRIENDLY_LABELS[e]||e.replace(/_/g," ").replace(/\b\w/g,e=>e.toUpperCase()),n=Pp._VALUE_FORMATTERS[e],a=n?n(t):void 0;if(a&&"object"==typeof a)return cc(Fa||(Fa=bl`
                    <div style="grid-column: 1 / -1; color: var(--secondary-text-color);">${0}</div>
                    ${0}
                  `),i,Object.entries(a).map(([e,t])=>cc(Ea||(Ea=bl`
                      <div style="padding-left: 12px; white-space: nowrap;">${0}</div>
                      <div style="font-family: var(--code-font-family, monospace);">${0}</div>`),e,t?"✓":"✗")));const o=void 0!==a?String(a):this._formatValue(t),r="string"==typeof t&&t.length>24;return cc(Na||(Na=bl`
                  <div style="color: var(--secondary-text-color); white-space: nowrap;">${0}</div>
                  <div style="font-family: var(--code-font-family, monospace); word-break: ${0};">${0}</div>
                `),i,r?"break-all":"normal",o)}))}if(Array.isArray(t))return cc(ja||(ja=bl`<pre style="margin: 0; white-space: pre-wrap; font-size: 13px;">${0}</pre>`),JSON.stringify(t,null,2))}catch(e){}return cc(La||(La=bl`<span style="white-space: pre-wrap;">${0}</span>`),e)}_onCommandSelected(e){const t=e.target.value,i=this._getCommands();this._selectedCommand=i.find(e=>e.name===t)||null;const n={};for(const e of null!==(a=null===(o=this._selectedCommand)||void 0===o?void 0:o.params)&&void 0!==a?a:[]){var a,o;void 0!==e.default&&(n[e.name]=e.default)}this._paramValues=n,this._response=null,this._error=null}async _executeCommand(){if(this._selectedCommand&&this.hass){this._executing=!0,this._response=null,this._error=null;try{let e;if(this.isLocal)e=await Uc(this.hass,this._selectedCommand.name,Object.keys(this._paramValues).length>0?this._paramValues:void 0,this.entryId);else{if(!this.targetPrefix)return void(this._error="No target device specified");const t=this._paramValues;let i=this._selectedCommand.name;if(Object.keys(t).length>0){const e=Object.entries(t).map(([,e])=>String(e)).join(" ");i=`${i} ${e}`}e=await Wc(this.hass,this.targetPrefix,i,this.entryId)}e.success?this._response=e.response:this._error=e.response||"Command execution failed"}catch(e){this._error=`Error: ${String(e)}`}finally{this._executing=!1}}}updated(e){(e.has("open")||e.has("targetPrefix")||e.has("isLocal")||e.has("entryId"))&&(this._stopResponseFeed(),this.open&&!this.isLocal&&this._startResponseFeed())}disconnectedCallback(){super.disconnectedCallback(),this._stopResponseFeed()}async _startResponseFeed(){var e;if(this._feedActive||this.isLocal||!this.open||null===(e=this.hass)||void 0===e||!e.connection)return;const t=++this._feedGeneration,i=this.entryId;this._feedActive=!0,this._feedSince=Date.now(),this._deviceResponses.length&&(this._deviceResponses=[]);try{const e=await this.hass.connection.subscribeEvents(e=>{var n,a,o,r;if(t!==this._feedGeneration||!this.open||this.isLocal)return;const s=e.data;if(i&&(null!==(n=s.entry_id)&&void 0!==n?n:s.device)!==i)return;if(!0===s.outgoing)return;if(!this._prefixMatches(s.pubkey_prefix))return;if(s.sender_name===this.nodeName)return;const l=Date.parse(null!==(a=s.timestamp)&&void 0!==a?a:"")||Date.now();l<this._feedSince-1e3||(this._deviceResponses=[...this._deviceResponses,{text:null!==(o=s.message)&&void 0!==o?o:"",sender:null!==(r=s.sender_name)&&void 0!==r?r:"",ts:l,snr:"number"==typeof s.snr?s.snr:void 0}])},"meshcore_message");if(t!==this._feedGeneration||!this.open||this.isLocal)return void e();this._unsubMsg=e}catch(e){t===this._feedGeneration&&(this._feedActive=!1)}}_stopResponseFeed(){this._feedGeneration++,this._unsubMsg&&(this._unsubMsg(),this._unsubMsg=null),this._feedActive=!1}_prefixMatches(e){if(!e||!this.targetPrefix)return!1;const t=Math.min(e.length,this.targetPrefix.length,12);return e.slice(0,t).toLowerCase()===this.targetPrefix.slice(0,t).toLowerCase()}_onOverlayClick(e){e.target===e.currentTarget&&this._onClose()}_onClose(){this._selectedCommand=null,this._paramValues={},this._response=null,this._error=null,this._stopResponseFeed(),this._deviceResponses=[],this.dispatchEvent(new CustomEvent("close",{bubbles:!0}))}};function Hp(e){var t,i,n,a;const o=e.entity_id;if(o.includes("_cli_console")||String(null!==(t=e.unique_id)&&void 0!==t?t:"").endsWith("_cli_console"))return null;const r=null!==(i=null!==(n=null!==(a=e.original_device_class)&&void 0!==a?a:e.device_class)&&void 0!==n?n:e._stateDeviceClass)&&void 0!==i?i:null;if(o.startsWith("binary_sensor.meshcore_")&&/_err_(pool_full|cad_timeout|rx_timeout)_/.test(o)){const e=o.includes("err_pool_full")?"Radio Fault: Packet Pool":o.includes("err_cad_timeout")?"Radio Fault: CAD Timeout":"Radio Fault: RX-Start Timeout";return{entity_id:o,label:e,icon:"alert",colorScheme:"neutral",sortOrder:13,booleanProblem:!0}}if(o.startsWith("binary_sensor.meshcore_")&&"connectivity"===r)return null;if(o.startsWith("binary_sensor.meshcore_"))return null;if(o.includes("_rate_"))return null;if(o.includes("full_evts"))return null;if(o.includes("node_status")||o.includes("companion_prefix")||o.includes("request_rate")||o.includes("delivery")||o.includes("path_")||o.includes("neighbor_"))return null;if("battery"===r||o.includes("battery_percentage"))return{entity_id:o,label:"Battery",icon:"battery",colorScheme:"battery",sortOrder:1,metricKey:"battery_pct"};if("voltage"===r||o.includes("battery_voltage")||o.includes("_voltage")||o.includes("cv_voltage"))return{entity_id:o,label:"Voltage",icon:"power",colorScheme:"neutral",sortOrder:2};if("duration"===r||o.includes("uptime"))return{entity_id:o,label:"Uptime",icon:"clock",colorScheme:"neutral",sortOrder:3,metricKey:"uptime_hours"};if("signal_strength"===r||o.includes("tx_power"))return{entity_id:o,label:"TX Power",icon:"power",colorScheme:"neutral",sortOrder:6};if("temperature"===r||o.includes("_temperature"))return{entity_id:o,label:"Temperature",icon:"thermometer",colorScheme:"neutral",sortOrder:7,metricKey:"temperature",staticTooltip:"Ambient temperature reported by the node. Informational; no threshold band -- expected ranges depend heavily on where the device is mounted."};if(o.includes("rx_airtime_utilization"))return{entity_id:o,label:"RX Airtime Util",icon:"chart",colorScheme:"neutral",sortOrder:10,metricKey:"rx_airtime_util"};if(o.includes("airtime_utilization"))return{entity_id:o,label:"TX Airtime Util",icon:"chart",colorScheme:"neutral",sortOrder:10,metricKey:"tx_airtime_util"};if(o.includes("rx_airtime"))return{entity_id:o,label:"RX Airtime",icon:"chart",colorScheme:"neutral",sortOrder:9};if(o.includes("airtime"))return{entity_id:o,label:"Airtime",icon:"chart",colorScheme:"neutral",sortOrder:9};if(o.includes("snr")&&!o.includes("neighbor"))return{entity_id:o,label:"SNR",icon:"signal",colorScheme:"signal",sortOrder:4,metricKey:"snr"};if(o.includes("rssi"))return{entity_id:o,label:"RSSI",icon:"signal",colorScheme:"signal",sortOrder:5,metricKey:"rssi"};if(o.includes("noise_floor"))return{entity_id:o,label:"Noise Floor",icon:"signal",colorScheme:"signal",sortOrder:11,metricKey:"noise_floor"};if(o.includes("tx_queue_len"))return{entity_id:o,label:"TX Queue Length",icon:"counter",colorScheme:"neutral",sortOrder:12,metricKey:"tx_queue_len"};if(o.includes("contact_count"))return{entity_id:o,label:"Contacts",icon:"counter",colorScheme:"neutral",sortOrder:8};if(o.includes("channel_util"))return{entity_id:o,label:"Channel Util",icon:"chart",colorScheme:"neutral",sortOrder:10,metricKey:"channel_util"};if(o.startsWith("sensor.meshcore_")){const t=e.original_name||e.name||o.split(".")[1];return{entity_id:o,label:t,icon:"",colorScheme:"neutral",sortOrder:99}}return null}async function Vp(e){const[t,i]=await Promise.all([e.callWS({type:"config/device_registry/list"}),e.callWS({type:"config/entity_registry/list"})]),n={};for(const e of t)if(e.identifiers)for(const[t,i]of e.identifiers)"meshcore"===t&&(n[i]=e.id);const a={};for(const t of i){var o;if(!t.device_id||t.disabled_by)continue;if(!t.entity_id.startsWith("sensor.meshcore_")&&!t.entity_id.startsWith("binary_sensor.meshcore_"))continue;const i=null===(o=e.states)||void 0===o||null===(o=o[t.entity_id])||void 0===o||null===(o=o.attributes)||void 0===o?void 0:o.device_class,n=Hp(i?{...t,_stateDeviceClass:i}:t);n&&(a[t.device_id]||(a[t.device_id]=[]),a[t.device_id].push(n))}for(const e of Object.keys(a))a[e].sort((e,t)=>e.sortOrder-t.sortOrder);return{meshcoreDeviceMap:n,deviceEntities:a}}Bp.styles=[Tc,Cl(Pa||(Pa=bl`
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
    `))],Bp._FRIENDLY_LABELS={adv_type:"Device Type",tx_power:"TX Power (dBm)",max_tx_power:"Max TX Power (dBm)",public_key:"Public Key",adv_lat:"Latitude",adv_lon:"Longitude",multi_acks:"Multi-Acks",adv_loc_policy:"Location Ad Policy",telemetry_mode_env:"Telemetry: Environment",telemetry_mode_loc:"Telemetry: Location",telemetry_mode_base:"Telemetry: Base",manual_add_contacts:"Manual Add Contacts",radio_freq:"Frequency (MHz)",radio_bw:"Bandwidth (kHz)",radio_sf:"Spreading Factor",radio_cr:"Coding Rate",name:"Name",path_hash_mode:"Path Hash Mode",firmware_ver:"Firmware Version",board_type:"Board Type",suggested_timeout:"Suggested Timeout (ms)",capabilities:"Capabilities",voltage:"Voltage (mV)",percentage:"Battery (%)",uptime:"Uptime (s)",temperature:"Temperature",max_hops:"Max Hops (0 = unlimited)",config:"Auto-Add Config"},Bp._VALUE_FORMATTERS={adv_loc_policy:e=>Np(e,qp),path_hash_mode:e=>Np(e,Tp),telemetry_mode_env:e=>Np(e,Fp),telemetry_mode_loc:e=>Np(e,Fp),telemetry_mode_base:e=>Np(e,Fp),manual_add_contacts:e=>{if(!0===e)return"Manual Mode";if(!1===e)return"Auto-Add Enabled";const t=Dp(e);return void 0===t?`Unknown (${e})`:t?"Manual Mode":"Auto-Add Enabled"},multi_acks:e=>{const t=Dp(e);return void 0===t?`Unknown (${e})`:t?"Yes":"No"},adv_lat:e=>{const t=Dp(e);return void 0===t?`${e}`:`${t.toFixed(6)}°`},adv_lon:e=>{const t=Dp(e);return void 0===t?`${e}`:`${t.toFixed(6)}°`},config:e=>{const t=Dp(e);return void 0===t?`Unknown (${e})`:function(e,t){const i={};for(const n of t)i[n.label]=(e&n.value)===n.value;return i}(t,Ep)}},yl([Dc({type:Boolean})],Bp.prototype,"open",void 0),yl([Dc({type:Object})],Bp.prototype,"hass",void 0),yl([Dc({type:String})],Bp.prototype,"entryId",void 0),yl([Dc({type:String})],Bp.prototype,"targetPrefix",void 0),yl([Dc({type:Boolean})],Bp.prototype,"isLocal",void 0),yl([Dc({type:Boolean})],Bp.prototype,"narrow",void 0),yl([Dc({type:String})],Bp.prototype,"nodeName",void 0),yl([qc()],Bp.prototype,"_selectedCommand",void 0),yl([qc()],Bp.prototype,"_paramValues",void 0),yl([qc()],Bp.prototype,"_response",void 0),yl([qc()],Bp.prototype,"_executing",void 0),yl([qc()],Bp.prototype,"_error",void 0),yl([qc()],Bp.prototype,"_deviceResponses",void 0),Bp=Pp=yl([Rc("meshcore-command-dialog")],Bp);let Kp=class extends zc{constructor(){super(),this.narrow=!1,this._managedDevices={repeaters:[],clients:[]},this._contactsByPrefix={},this._loading=!0,this._error=null,this._confirmAction=null,this._confirmDialogOpen=!1,this._commandDialogOpen=!1,this._commandDialogTarget="",this._commandDialogIsLocal=!1,this._statusMessage=null,this._statusMessageTimeout=null,this._deviceEntities={},this._meshcoreDeviceMap={},this._entityRegistryLoaded=!1,this._hiddenSensors={},this._contextMenu=null,this._overlayPointerStarted=!1,this._settingsDeviceKey=null,this._hiddenSensorsModalKey=null,this._neighborContextMenu=null,this._neighborData={},gd(this,{isOpen:()=>null!==this._contextMenu,onEscape:()=>this._dismissContextMenu(),getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="tile-context"]')}}),gd(this,{isOpen:()=>null!==this._neighborContextMenu,onEscape:()=>this._dismissNeighborContextMenu(),getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="neighbor-context"]')}}),gd(this,{isOpen:()=>null!==this._settingsDeviceKey,onEscape:()=>this._closeSettingsModal(),getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="device-settings"]')}}),gd(this,{isOpen:()=>null!==this._hiddenSensorsModalKey,onEscape:()=>this._closeHiddenSensorsModal(),getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="hidden-sensors"]')}})}connectedCallback(){super.connectedCallback(),this._loadHiddenSensors(),this._loadManagedDevices()}disconnectedCallback(){super.disconnectedCallback(),null!==this._statusMessageTimeout&&(clearTimeout(this._statusMessageTimeout),this._statusMessageTimeout=null)}updated(e){e.has("config")&&this._loadManagedDevices(),e.has("hass")&&this.hass&&!this._entityRegistryLoaded&&this._loadEntityRegistry()}render(){var e,t,i,n,a;return this.hass?cc(Ha||(Ha=bl`
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
    `),this._error?cc(Va||(Va=bl`<div class="error-state"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg> ${0}</div>`),this._error):hc,this._loading?cc(Ka||(Ka=bl`<div class="loading-state"><div class="loading-spinner"></div> Loading devices...</div>`)):cc(Ua||(Ua=bl`
                ${0}
                ${0}
                ${0}
              `),this._renderDeviceSections(this._managedDevices.repeaters,"repeater"),this._renderDeviceSections(this._managedDevices.clients,"client"),0===this._managedDevices.repeaters.length&&0===this._managedDevices.clients.length?cc(Wa||(Wa=bl`
                      <div class="empty-state">
                        <div class="empty-text">No managed devices</div>
                        <div class="empty-subtext">Add repeaters or clients in Settings → Integration to manage them here.</div>
                      </div>
                    `)):hc),this._confirmDialogOpen,(null===(e=this._confirmAction)||void 0===e?void 0:e.title)||"",(null===(t=this._confirmAction)||void 0===t?void 0:t.message)||"",this._onConfirmAction,this._onConfirmCancel,this._commandDialogOpen,this.hass,null===(i=this.config)||void 0===i?void 0:i.entry_id,this._commandDialogTarget,null!==(n=null===(a=this.config)||void 0===a?void 0:a.node_name)&&void 0!==n?n:"",this._commandDialogIsLocal,this.narrow,this._onCommandDialogClose,this._contextMenu?cc(Ga||(Ga=bl`
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
      `),this._onOverlayPointerDown,this._closeContextMenu,this._contextMenu.label,e=>e.stopPropagation(),e=>e.stopPropagation(),this._contextMenu.label,this._dismissContextMenu,e=>e.stopPropagation(),this._hideSensorFromContext):hc,this._neighborContextMenu?cc(Xa||(Xa=bl`
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
      `),this._onOverlayPointerDown,this._closeNeighborContextMenu,this._neighborContextMenu.name,e=>e.stopPropagation(),e=>e.stopPropagation(),this._neighborContextMenu.name,this._dismissNeighborContextMenu,e=>e.stopPropagation(),this._removeNeighborFromContext):hc,this._settingsDeviceKey?(()=>{const e=this._getSettingsDeviceContext();return e?cc(Ya||(Ya=bl`
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
      `),this._closeSettingsModal,e.name,e=>e.stopPropagation(),e.name,this._closeSettingsModal,this._openHiddenSensorsList,(this._hiddenSensors[this._settingsDeviceKey]||[]).length,!e.isOnline,()=>{this._closeSettingsModal(),this._openCommandDialog(e.device,!1)},!e.isOnline,()=>{this._closeSettingsModal(),this._confirmActionDialog(`Reboot ${e.name}?`,"The device will restart.",()=>this._executeRemoteAction(e.device,"reboot"))},"repeater"===e.type?cc(Qa||(Qa=bl`
                <button class="modal-action danger" ?disabled=${0} @click=${0}>
                  <span class="modal-action-icon"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M5 18h14v2H5v-2zm4.6-2.7L5 10.7l2-1.9 2.6 2.6L17 4l2 2-9.4 9.3z"/></svg></span>
                  Start OTA Update
                </button>
              `),!e.isOnline,()=>{this._closeSettingsModal(),this._confirmActionDialog(`Start OTA on ${e.name}?`,"The device will enter update mode.",()=>this._executeRemoteAction(e.device,"start ota"))}):hc):hc})():hc,this._hiddenSensorsModalKey?this._renderHiddenSensorsModal():hc,this._statusMessage?cc(Ja||(Ja=bl`<div class="status-toast ${0}">${0}${0}</div>`),this._statusMessage.type,"success"===this._statusMessage.type?"✓ ":"✗ ",this._statusMessage.text):hc):cc(Ba||(Ba=bl`<div class="content-area"><div class="loading-state"><div class="loading-spinner"></div> Initializing...</div></div>`))}_renderDeviceSections(e,t){return e.map(e=>this._renderDeviceSection(e,t))}_renderDeviceSection(e,t){var i,n,a,o;let r="unknown",s="Unknown";if(e.status_entity_id&&null!==(i=this.hass)&&void 0!==i&&i.states[e.status_entity_id]){const t=this.hass.states[e.status_entity_id].state;"on"===t?(r="online",s="Online"):"off"===t&&(r="offline",s="Offline")}else e.status&&(r="online"===e.status?"online":"offline"===e.status?"offline":"unknown",s="online"===e.status?"Online":"offline"===e.status?"Offline":"Unknown");const l="online"===r,c=this._getManagedDeviceKey(e,t),d=this._getDeviceEntities(e,t),p=(this._hiddenSensors[c]||[]).length,h="repeater"===t&&e.neighbors_enabled,u=this._neighborData[e.pubkey_prefix],m=d.find(e=>"uptime_hours"===e.metricKey),g=l&&m?this._formatUptimeFromEntity(m.entity_id):"",f=this._contactsByPrefix[null===(n=e.pubkey_prefix)||void 0===n?void 0:n.toLowerCase()],v=null==f?void 0:f.adv_lat,b=null==f?void 0:f.adv_lon,y=null==f?void 0:f.last_advert,_="number"==typeof v?v:NaN,x="number"==typeof b?b:NaN,w=Number.isFinite(_)&&Number.isFinite(x)&&(0!==_||0!==x);return h&&!u&&this._loadNeighbors(e),cc(Za||(Za=bl`
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

        ${0}

        ${0}

        <div class="actions-row">
          <button class="action-btn" ?disabled=${0} @click=${0}>Flood Advert</button>
          <button class="action-btn" ?disabled=${0} @click=${0}>Sync Clock</button>
        </div>
      </div>
    `),e=>this._onTileContextMenu(e,c),t,cc("repeater"===t?eo||(eo=bl`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11zm0 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`):to||(to=bl`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>`)),e.name,"repeater"===t?"Repeater":"Client",e.firmware_version?cc(io||(io=bl`<span>Firmware: v${0}</span>`),null!==(a=null===(o=e.firmware_version.match(/(\d+\.\d+\.\d+)/))||void 0===o?void 0:o[1])&&void 0!==a?a:e.firmware_version):hc,e.pubkey_prefix,w?cc(no||(no=bl`<span>Loc: ${0}, ${0}</span>`),_.toFixed(4),x.toFixed(4)):hc,()=>this._settingsDeviceKey=c,r,()=>e.status_entity_id&&this._fireMoreInfo(e.status_entity_id),e.status_entity_id?"cursor:pointer":"",r,s,g?cc(ao||(ao=bl` · ${0}`),g):hc,d.length>0?cc(oo||(oo=bl`
              <meshcore-node-summary
                .hass=${0}
                .device=${0}
                .entities=${0}
                .hiddenCount=${0}
                .fallbackLatitude=${0}
                .fallbackLongitude=${0}
                .fallbackUpdated=${0}>
              </meshcore-node-summary>
            `),this.hass,{...e,type:t},d,p,v,b,y):hc,h?this._renderInlineNeighbors(e,u):hc,!l,()=>this._executeRemoteAction(e,"advert"),!l,()=>this._executeRemoteAction(e,"clock sync"))}_renderInlineNeighbors(e,t){return!t||t.loading?cc(ro||(ro=bl`
        <div class="neighbor-section">
          <div class="subsection-label">Neighbors</div>
          <div class="neighbor-loading"><div class="loading-spinner"></div> Loading neighbors...</div>
        </div>
      `)):0===t.neighbors.length?cc(so||(so=bl`
        <div class="neighbor-section">
          <div class="subsection-label">Neighbors</div>
          <div style="font-size: 13px; color: var(--secondary-text-color); padding: 8px 0;">No neighbors found</div>
        </div>
      `)):cc(lo||(lo=bl`
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
    `),t.neighbors.length,t.chartData.length>0?cc(co||(co=bl`
              <div class="chart-container">
                <meshcore-snr-chart
                  .data=${0}
                  .neighbors=${0}
                  width="550"
                  height="200"
                  timeRange="24">
                </meshcore-snr-chart>
              </div>
            `),t.chartData,t.neighbors.map(e=>e.pubkey_prefix)):hc,t.neighbors.map(t=>{var i;return cc(po||(po=bl`
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
            `),i=>this._onNeighborRightClick(i,t,e.pubkey_prefix),yp(()=>this._onNeighborRightClick(new MouseEvent("contextmenu"),t,e.pubkey_prefix)),t.name&&t.name!==t.pubkey_prefix.substring(0,6).toUpperCase()?`${t.name} (${t.pubkey_prefix.substring(0,6).toUpperCase()})`:t.pubkey_prefix.substring(0,6).toUpperCase(),t.snr>5?"snr-good":t.snr>=0?"snr-fair":"snr-poor",i=>{i.stopPropagation(),this._openNeighborMoreInfo(e.pubkey_prefix,t.pubkey_prefix,"snr")},t.snr.toFixed(1),i=>{i.stopPropagation(),this._openNeighborMoreInfo(e.pubkey_prefix,t.pubkey_prefix,"seen")},null!==(i=t.seen_48h)&&void 0!==i?i:0,this._formatRelativeTime(t.last_seen))}))}async _loadEntityRegistry(){if(this.hass&&!this._entityRegistryLoaded){this._entityRegistryLoaded=!0;try{const{meshcoreDeviceMap:e,deviceEntities:t}=await Vp(this.hass);this._meshcoreDeviceMap=e,this._deviceEntities=t}catch(e){console.error("Failed to load entity registry:",e)}}}_getDeviceEntities(e,t){var i;if(!this.hass||!this.config)return[];const n=this._getManagedDeviceKey(e,t),a=new Set(this._hiddenSensors[n]||[]),o=(null===(i=this.selectedDevice)||void 0===i?void 0:i.entry_id)||"",r=e.pubkey_prefix||"",s=`${o}_${t}_${r}`,l=this._meshcoreDeviceMap[s];if(l&&this._deviceEntities[l])return this._deviceEntities[l].filter(e=>!a.has(e.entity_id));for(const[e,i]of Object.entries(this._meshcoreDeviceMap))if(e.includes(r)&&e.includes(t)&&this._deviceEntities[i])return this._deviceEntities[i].filter(e=>!a.has(e.entity_id));const c=r.substring(0,6).toLowerCase();if(!c)return[];const d=[];for(const e of Object.values(this._deviceEntities))for(const t of e)t.entity_id.toLowerCase().includes(c)&&!a.has(t.entity_id)&&d.push(t);return d.sort((e,t)=>e.sortOrder-t.sortOrder)}async _loadNeighbors(e){if(this.hass){this._neighborData={...this._neighborData,[e.pubkey_prefix]:{neighbors:[],chartData:[],loading:!0,loaded:!1}};try{var t;const i=await async function(e,t,i){try{const n={type:"meshcore_chat/get_neighbors",target_prefix:t};return i&&(n.entry_id=i),(await e.callWS(n)).neighbors||[]}catch(e){return[]}}(this.hass,e.pubkey_prefix,null===(t=this.config)||void 0===t?void 0:t.entry_id);let n=[];i.length>0&&(n=await this._fetchSNRHistory(i)),this._neighborData={...this._neighborData,[e.pubkey_prefix]:{neighbors:i,chartData:n,loading:!1,loaded:!0}}}catch(t){console.error(`Failed to load neighbors for ${e.name}:`,t),this._neighborData={...this._neighborData,[e.pubkey_prefix]:{neighbors:[],chartData:[],loading:!1,loaded:!0}}}}}async _fetchSNRHistory(e){if(!this.hass)return[];try{const t=e.filter(e=>{var t;return null===(t=e.entity_ids)||void 0===t?void 0:t.snr}).map(e=>e.entity_ids.snr);if(0===t.length)return[];const i=await this.hass.callWS({type:"recorder/statistics_during_period",start_time:new Date(Date.now()-864e5).toISOString(),end_time:(new Date).toISOString(),statistic_ids:t,period:"hour"}),n={};return Object.entries(i).forEach(([t,i])=>{const a=e.find(e=>{var i;return(null===(i=e.entity_ids)||void 0===i?void 0:i.snr)===t});a&&Array.isArray(i)&&i.forEach(e=>{if(e.start&&null!=e.mean){const t=new Date(e.start).getTime();n[t]||(n[t]={}),n[t][a.pubkey_prefix]=e.mean}})}),Object.entries(n).map(([e,t])=>({timestamp:parseInt(e,10),values:t})).sort((e,t)=>e.timestamp-t.timestamp)}catch(e){return[]}}async _loadManagedDevices(){if(this.hass)try{var e;this._loading=!0,this._error=null;const t=await async function(e,t){try{const i={type:"meshcore_chat/get_managed_devices"};t&&(i.entry_id=t);const n=await e.callWS(i);return{repeaters:n.repeaters||[],clients:n.clients||[]}}catch(e){return{repeaters:[],clients:[]}}}(this.hass,null===(e=this.config)||void 0===e?void 0:e.entry_id);this._managedDevices=t,this._loadContacts()}catch(e){this._error=`Failed to load devices: ${String(e)}`}finally{this._loading=!1}}async _loadContacts(){if(this.hass)try{var e,t;const i=(null===(e=this.selectedDevice)||void 0===e?void 0:e.entry_id)||(null===(t=this.config)||void 0===t?void 0:t.entry_id),n=await Bc(this.hass,i),a={};for(const e of n)e.pubkey_prefix&&(a[e.pubkey_prefix.toLowerCase()]=e);this._contactsByPrefix=a}catch(e){}}async _executeRemoteAction(e,t){if(this.hass)try{var i;const n=await Wc(this.hass,e.pubkey_prefix,t,null===(i=this.config)||void 0===i?void 0:i.entry_id);n.success?this._showStatusMessage(`${e.name}: ${t} → ${n.response||"OK"}`,"success"):this._showStatusMessage(`${e.name}: ${t} failed — ${n.response||"error"}`,"error")}catch(i){this._showStatusMessage(`${e.name}: ${t} failed — ${String(i)}`,"error")}}_fireMoreInfo(e){const t=new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0});this.dispatchEvent(t)}_formatUptimeFromEntity(e){var t,i,n;const a=null===(t=this.hass)||void 0===t?void 0:t.states[e];if(!a||"unavailable"===a.state||"unknown"===a.state)return"";const o=parseFloat(a.state);if(!Number.isFinite(o))return"";let r;switch(null!==(i=null===(n=a.attributes)||void 0===n?void 0:n.unit_of_measurement)&&void 0!==i?i:"s"){case"d":r=86400*o;break;case"h":r=3600*o;break;case"min":r=60*o;break;default:r=o}if(r<60)return`${Math.floor(r)}s`;if(r<3600)return`${Math.floor(r/60)}m`;if(r<86400){const e=Math.floor(r/3600),t=Math.floor(r%3600/60);return t>0?`${e}h ${t}m`:`${e}h`}const s=Math.floor(r/86400),l=Math.floor(r%86400/3600);return l>0?`${s}d ${l}h`:`${s}d`}_confirmActionDialog(e,t,i){this._confirmAction={title:e,message:t,onConfirm:i},this._confirmDialogOpen=!0}async _onConfirmAction(){if(this._confirmDialogOpen=!1,this._confirmAction)try{await this._confirmAction.onConfirm()}catch(e){this._showStatusMessage(`Error: ${String(e)}`,"error")}this._confirmAction=null}_onConfirmCancel(){this._confirmDialogOpen=!1,this._confirmAction=null}_openCommandDialog(e,t){this._commandDialogTarget=e.pubkey_prefix,this._commandDialogIsLocal=t,this._commandDialogOpen=!0}_onCommandDialogClose(){this._commandDialogOpen=!1,this._commandDialogTarget="",this._commandDialogIsLocal=!1}_getManagedDeviceKey(e,t){var i;return`${(null===(i=this.selectedDevice)||void 0===i?void 0:i.entry_id)||""}_${t}_${e.pubkey_prefix}`}_loadHiddenSensors(){try{const e=localStorage.getItem("meshcore-hidden-sensors");e&&(this._hiddenSensors=JSON.parse(e))}catch(e){this._hiddenSensors={}}}_saveHiddenSensors(){try{localStorage.setItem("meshcore-hidden-sensors",JSON.stringify(this._hiddenSensors))}catch(e){}}_hideSensor(e,t){const i=this._hiddenSensors[e]||[];i.includes(t)||(this._hiddenSensors={...this._hiddenSensors,[e]:[...i,t]},this._saveHiddenSensors())}_unhideSensor(e,t){const i=this._hiddenSensors[e]||[];if(this._hiddenSensors={...this._hiddenSensors,[e]:i.filter(e=>e!==t)},0===this._hiddenSensors[e].length){const t={...this._hiddenSensors};delete t[e],this._hiddenSensors=t}this._saveHiddenSensors()}_unhideAllSensors(e){const t={...this._hiddenSensors};delete t[e],this._hiddenSensors=t,this._saveHiddenSensors()}_onTileContextMenu(e,t){const{entityId:i,label:n}=e.detail;this._contextMenu={entityId:i,label:n,deviceKey:t},this._overlayPointerStarted=!1}_onOverlayPointerDown(){this._overlayPointerStarted=!0}_dismissContextMenu(){this._overlayPointerStarted=!1,this._contextMenu=null}_closeContextMenu(){this._overlayPointerStarted&&this._dismissContextMenu()}_hideSensorFromContext(){this._contextMenu&&(this._hideSensor(this._contextMenu.deviceKey,this._contextMenu.entityId),this._showStatusMessage(`Hidden: ${this._contextMenu.label}`,"success"),this._contextMenu=null)}_onNeighborRightClick(e,t,i){e.preventDefault(),this._neighborContextMenu={name:t.name||t.pubkey_prefix,neighborPubkey:t.pubkey_prefix,repeaterPubkey:i},this._overlayPointerStarted=!1}_dismissNeighborContextMenu(){this._overlayPointerStarted=!1,this._neighborContextMenu=null}_closeNeighborContextMenu(){this._overlayPointerStarted&&this._dismissNeighborContextMenu()}_removeNeighborFromContext(){if(!this._neighborContextMenu)return;const{name:e,neighborPubkey:t,repeaterPubkey:i}=this._neighborContextMenu;this._neighborContextMenu=null,this._confirmActionDialog(`Remove neighbor ${e}?`,"This will remove the neighbor from the repeater and delete its sensors from HA. This cannot be undone.",()=>this._executeRemoveNeighbor(i,t,e))}_openNeighborMoreInfo(e,t,i){var n;const a=e.substring(0,10).toLowerCase(),o=t.substring(0,6).toLowerCase(),r="snr"===i?`sensor.meshcore_${a}_neighbor_${o}`:`sensor.meshcore_${a}_neighbor_${o}_seen`;null!==(n=this.hass)&&void 0!==n&&n.states[r]&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:r},bubbles:!0,composed:!0}))}async _executeRemoveNeighbor(e,t,i){if(this.hass)try{var n,a;const o=await this.hass.callWS({type:"meshcore_chat/remove_neighbor",entry_id:null===(n=this.config)||void 0===n?void 0:n.entry_id,target_prefix:e,neighbor_pubkey:t}),r=null!==(a=null==o?void 0:o.entities_removed)&&void 0!==a?a:0;this._showStatusMessage(`Removed ${i} (${r} sensors deleted)`,"success");const s=this._managedDevices.repeaters.find(t=>t.pubkey_prefix===e);s&&await this._loadNeighbors(s)}catch(e){this._showStatusMessage(`Failed to remove ${i}: ${e.message||e}`,"error")}}_getSettingsDeviceContext(){const e=this._settingsDeviceKey;if(!e)return null;const t=[...this._managedDevices.repeaters.map(e=>({device:e,type:"repeater"})),...this._managedDevices.clients.map(e=>({device:e,type:"client"}))];for(const{device:n,type:a}of t)if(this._getManagedDeviceKey(n,a)===e){var i;let e=!1;return e=n.status_entity_id&&null!==(i=this.hass)&&void 0!==i&&i.states[n.status_entity_id]?"on"===this.hass.states[n.status_entity_id].state:"online"===n.status,{device:n,type:a,name:n.name,isOnline:e}}return null}_closeSettingsModal(){this._settingsDeviceKey=null}_openHiddenSensorsList(){this._hiddenSensorsModalKey=this._settingsDeviceKey,this._settingsDeviceKey=null}_renderHiddenSensorsModal(){const e=this._hiddenSensorsModalKey,t=(this._hiddenSensors[e]||[]).map(e=>{let t=e;for(const i of Object.values(this._deviceEntities)){const n=i.find(t=>t.entity_id===e);if(n){t=n.label;break}}return{entityId:e,label:t}});return cc(ho||(ho=bl`
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
    `),this._closeHiddenSensorsModal,e=>e.stopPropagation(),this._closeHiddenSensorsModal,0===t.length?cc(uo||(uo=bl`<div class="empty-hidden">No hidden sensors</div>`)):t.map(t=>cc(mo||(mo=bl`
                  <div class="hidden-sensor-item">
                    <div>
                      <div class="hidden-sensor-name">${0}</div>
                      <div class="hidden-sensor-id">${0}</div>
                    </div>
                    <button class="unhide-btn" @click=${0}>Unhide</button>
                  </div>
                `),t.label,t.entityId,()=>this._unhideSensor(e,t.entityId))),t.length>1?cc(go||(go=bl`
                <div class="modal-footer">
                  <button class="action-btn" @click=${0}>Unhide All</button>
                </div>
              `),()=>{this._unhideAllSensors(e)}):hc)}_closeHiddenSensorsModal(){this._hiddenSensorsModalKey=null}_showStatusMessage(e,t){this._statusMessage={text:e,type:t},null!==this._statusMessageTimeout&&clearTimeout(this._statusMessageTimeout),this._statusMessageTimeout=window.setTimeout(()=>{this._statusMessage=null,this._statusMessageTimeout=null},5e3)}_formatRelativeTime(e){try{const t=Date.now()-new Date(e).getTime(),i=Math.floor(t/6e4);if(i<1)return"just now";if(i<60)return`${i}m ago`;const n=Math.floor(i/60);return n<24?`${n}h ago`:`${Math.floor(n/24)}d ago`}catch(e){return"unknown"}}};Kp.styles=[Tc,Cl(fo||(fo=bl`
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
    `))],yl([Dc({type:Object})],Kp.prototype,"hass",void 0),yl([Dc({type:Object})],Kp.prototype,"config",void 0),yl([Dc({type:Boolean})],Kp.prototype,"narrow",void 0),yl([Dc({type:Object})],Kp.prototype,"selectedDevice",void 0),yl([qc()],Kp.prototype,"_managedDevices",void 0),yl([qc()],Kp.prototype,"_contactsByPrefix",void 0),yl([qc()],Kp.prototype,"_loading",void 0),yl([qc()],Kp.prototype,"_error",void 0),yl([qc()],Kp.prototype,"_confirmAction",void 0),yl([qc()],Kp.prototype,"_confirmDialogOpen",void 0),yl([qc()],Kp.prototype,"_commandDialogOpen",void 0),yl([qc()],Kp.prototype,"_commandDialogTarget",void 0),yl([qc()],Kp.prototype,"_commandDialogIsLocal",void 0),yl([qc()],Kp.prototype,"_statusMessage",void 0),yl([qc()],Kp.prototype,"_statusMessageTimeout",void 0),yl([qc()],Kp.prototype,"_deviceEntities",void 0),yl([qc()],Kp.prototype,"_meshcoreDeviceMap",void 0),yl([qc()],Kp.prototype,"_entityRegistryLoaded",void 0),yl([qc()],Kp.prototype,"_hiddenSensors",void 0),yl([qc()],Kp.prototype,"_contextMenu",void 0),yl([qc()],Kp.prototype,"_settingsDeviceKey",void 0),yl([qc()],Kp.prototype,"_hiddenSensorsModalKey",void 0),yl([qc()],Kp.prototype,"_neighborContextMenu",void 0),yl([qc()],Kp.prototype,"_neighborData",void 0),Kp=yl([Rc("meshcore-devices-page")],Kp);let Up=class extends zc{constructor(){super(...arguments),this.selected=!1}render(){if(!this.contact)return cc(vo||(vo=bl``));const e=this.contact,t=this._getTypeClass(e.type),{label:i,cls:n}=this._getCategoryBadge(e);return cc(bo||(bo=bl`
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
    `),this.selected?"contact-card selected":"contact-card",t,this._getTypeIcon(e.type),e.adv_name,e.pubkey_prefix,e.lastmod?`Last heard ${new Date(1e3*e.lastmod).toLocaleString()}`:"",n,i)}_getCategoryBadge(e){return e.added_to_node?{label:"Added",cls:"added"}:{label:"Discovered",cls:"discovered"}}_getTypeClass(e){switch(e){case 1:return"client";case 2:return"repeater";case 3:return"room-server";case 4:return"sensor";default:return"unknown"}}_getTypeIcon(e){switch(e){case 0:case 1:return cc(yo||(yo=bl`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>`));case 2:return cc(_o||(_o=bl`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11zm0 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`));case 3:return cc(xo||(xo=bl`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>`));case 4:return cc(wo||(wo=bl`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>`));default:return cc(ko||(ko=bl`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>`))}}};Up.styles=Cl($o||($o=bl`
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
  `)),yl([Dc({type:Object})],Up.prototype,"contact",void 0),yl([Dc({type:Boolean})],Up.prototype,"selected",void 0),Up=yl([Rc("meshcore-chat-contact-card")],Up);let Wp=class extends zc{constructor(){super(...arguments),this.selected=!1}render(){if(!this.node)return cc(Co||(Co=bl``));const e="adv_name"in this.node,t=e?2===this.node.type:"repeater"===this.node.type,i=e&&3===this.node.type,n=e?1===this.node.type:"client"===this.node.type,a=e&&4===this.node.type,o=e?this.node.adv_name:this.node.name,r=this.node.pubkey_prefix,s=e?this.node.last_advert:void 0;let l=cc(So||(So=bl`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`)),c="Contact",d="";t?(l=cc(Mo||(Mo=bl`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11zm0 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`)),c="Repeater",d="repeater"):i?(l=cc(zo||(zo=bl`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>`)),c="Room Server",d="room-server"):a?(l=cc(Ao||(Ao=bl`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>`)),c="Sensor",d="sensor"):n&&(l=cc(Ro||(Ro=bl`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>`)),c="Client",d="client");const p=e&&(0!==this.node.adv_lat||0!==this.node.adv_lon),h=s?new Date(1e3*s).toLocaleTimeString():"Unknown";return cc(Io||(Io=bl`
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
    `),this.selected?"node-card selected":"node-card",`node-avatar ${d}`,l,o,r,`node-type-label ${d}`,c,s?cc(Oo||(Oo=bl`<div class="meta-item"><span><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="vertical-align: -2px;"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg></span><span>${0}</span></div>`),h):cc(Do||(Do=bl``)),p?cc(qo||(qo=bl`<div class="location-indicator"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="vertical-align: -2px; margin-right: 2px;"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>${0}, ${0}</div>`),this.node.adv_lat.toFixed(3),this.node.adv_lon.toFixed(3)):cc(To||(To=bl``)),e&&this.node.out_path?cc(Fo||(Fo=bl`<div class="route-info">Route: ${0}...</div>`),this.node.out_path.substring(0,12)):cc(Eo||(Eo=bl``)),e?cc(No||(No=bl`
            <button class="action-btn" @click=${0}><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="vertical-align: -2px; margin-right: 4px;"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>Message</button>
          `),e=>{e.stopPropagation(),this._dispatch("node-message")}):cc(jo||(jo=bl``)),t?cc(Lo||(Lo=bl`
            <button class="action-btn" @click=${0}><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="vertical-align: -2px; margin-right: 4px;"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>Telemetry</button>
          `),e=>{e.stopPropagation(),this._dispatch("node-telemetry")}):cc(Po||(Po=bl``)),e=>{e.stopPropagation(),this._dispatch("node-delete")})}_dispatch(e){this.dispatchEvent(new CustomEvent(e,{detail:{node:this.node},bubbles:!0,composed:!0}))}};Wp.styles=Cl(Bo||(Bo=bl`
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
  `)),yl([Dc({type:Object})],Wp.prototype,"node",void 0),yl([Dc({type:Boolean})],Wp.prototype,"selected",void 0),Wp=yl([Rc("meshcore-node-card")],Wp);let Gp=class extends zc{constructor(){super(),this.open=!1,this.pendingAction=null,this._confirming=!1,this._confirmAction=null,gd(this,{isOpen:()=>this.open,onEscape:()=>{this._confirming?(this._confirming=!1,this._confirmAction=null):this._close()}})}render(){if(!this.open||!this.node)return cc(Ho||(Ho=bl``));const e="adv_name"in this.node,t=e?2===this.node.type:"repeater"===this.node.type,i=e&&3===this.node.type,n=e?1===this.node.type:"client"===this.node.type,a=e&&4===this.node.type,o=e?this.node.adv_name:this.node.name,r=this.node.pubkey_prefix;let s=cc(Vo||(Vo=bl`<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`)),l="Contact",c="";return t?(s=cc(Ko||(Ko=bl`<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11zm0 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`)),l="Repeater",c="repeater"):i?(s=cc(Uo||(Uo=bl`<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>`)),l="Room Server",c="room-server"):a?(s=cc(Wo||(Wo=bl`<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>`)),l="Sensor",c="sensor"):n&&(s=cc(Go||(Go=bl`<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>`)),l="Client",c="client"),cc(Xo||(Xo=bl`
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
    `),this._close,o,e=>e.stopPropagation(),`dialog-avatar ${c}`,s,o,l,this._close,this._confirming?cc(Yo||(Yo=bl`
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
                `),"remove-contact"===this._confirmAction?"Remove this as an Added Contact?":"","remove-contact"===this._confirmAction?cc(Qo||(Qo=bl`
                      <div class="confirm-description">Removing the contact will make it a Discovered Contact.</div>
                    `)):cc(Jo||(Jo=bl``)),()=>this._confirmAction_exec(),()=>{this._confirming=!1,this._confirmAction=null}):cc(Zo||(Zo=bl`
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

                `),e?"":"full",e&&this.node.added_to_node&&(n||i)?cc(er||(er=bl`
                        <button class="action-btn" @click=${0}><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>Message</button>
                      `),()=>this._dispatchEvent("message")):cc(tr||(tr=bl``)),r&&!n?cc(ir||(ir=bl`
                        <button class="action-btn" @click=${0}><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M2 12a2 2 0 104 0 2 2 0 10-4 0zM10 12a2 2 0 104 0 2 2 0 10-4 0zM18 12a2 2 0 104 0 2 2 0 10-4 0zM7 10l3 2-3 2zM15 10l3 2-3 2z"/></svg>Trace</button>
                      `),()=>this._dispatchEvent("trace")):cc(nr||(nr=bl``)),e&&this.node.added_to_node?cc(ar||(ar=bl`<button class="action-btn warning"
                            ?disabled=${0}
                            @click=${0}>${0}</button>`),"remove-contact"===this.pendingAction,()=>{this._confirming=!0,this._confirmAction="remove-contact"},"remove-contact"===this.pendingAction?"Removing…":"Remove Contact"):e?cc(or||(or=bl`<button class="action-btn"
                            ?disabled=${0}
                            @click=${0}>${0}</button>`),"add-contact"===this.pendingAction,()=>this._dispatchEvent("add-contact"),"add-contact"===this.pendingAction?cc(rr||(rr=bl`Adding…`)):cc(sr||(sr=bl`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>Add Contact`))):cc(lr||(lr=bl``)),r,l,e?cc(cr||(cr=bl`
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
                      `),this.node.last_advert?new Date(1e3*this.node.last_advert).toLocaleString():"Unknown",this.node.added_to_node?"Added Contact":"Discovered Contact"):cc(dr||(dr=bl``)),!e||0===this.node.adv_lat&&0===this.node.adv_lon?cc(hr||(hr=bl``)):cc(pr||(pr=bl`
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
                      `),this.node.adv_lat.toFixed(6),this.node.adv_lon.toFixed(6)),e&&this.node.out_path?cc(ur||(ur=bl`
                        <div class="section">
                          <div class="section-header">Network</div>
                          <div class="info-item">
                            <div class="info-label">Route (Outgoing Path)</div>
                            <div class="info-value">${0}</div>
                          </div>
                          ${0}
                        </div>
                      `),this.node.out_path,this.node.out_path_len?cc(mr||(mr=bl`
                                <div class="info-item" style="margin-top: 8px;">
                                  <div class="info-label">Path Length</div>
                                  <div class="info-value">${0} hops</div>
                                </div>
                              `),this.node.out_path_len):cc(gr||(gr=bl``))):cc(fr||(fr=bl``))))}_close(){this.open=!1,this._confirming=!1,this._confirmAction=null,this.dispatchEvent(new CustomEvent("node-detail-closed",{bubbles:!0,composed:!0}))}_dispatchEvent(e){this.dispatchEvent(new CustomEvent(`node-${e}`,{detail:{node:this.node},bubbles:!0,composed:!0}))}_confirmAction_exec(){this._confirmAction&&this._dispatchEvent(this._confirmAction),this._close()}};Gp.styles=Cl(vr||(vr=bl`
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

  `)),yl([Dc({type:Object})],Gp.prototype,"node",void 0),yl([Dc({type:Boolean})],Gp.prototype,"open",void 0),yl([Dc({type:Object})],Gp.prototype,"hass",void 0),yl([Dc({type:String})],Gp.prototype,"pendingAction",void 0),yl([qc()],Gp.prototype,"_confirming",void 0),yl([qc()],Gp.prototype,"_confirmAction",void 0),Gp=yl([Rc("meshcore-node-detail-dialog")],Gp);const Xp="meshcore-nodes-map-groups";function Yp(e){const t=Number(e.adv_lat),i=Number(e.adv_lon);return!Number.isFinite(t)||!Number.isFinite(i)||0===t&&0===i||Math.abs(t)>85||Math.abs(i)>180?null:{node:e,lat:t,lon:i}}let Qp=class extends zc{constructor(){super(...arguments),this.nodes=[],this.home=null,this.loading=!1,this._available=null,this._groups=function(){try{return"off"!==localStorage.getItem(Xp)}catch(e){return!0}}(),this._ready=!1,this._fitted=!1,this._entityNodes=new Map,this._shown=0}connectedCallback(){super.connectedCallback(),null===this._available&&Ad().then(e=>{this._available=e})}updated(e){const t=this._map();if(!t)return;const i=!this._ready;i&&(function(e){e._createClusterBubble=e=>{const t=e.length,i=Math.round(Math.min(56,36+4*Math.log2(Math.max(1,t)))),n=document.createElement("div");return n.textContent=t>999?"999+":String(t),n.style.cssText=`width:${i}px;height:${i}px;border-radius:50%;background:var(--primary-color,#03a9f4);color:#fff;font:600 ${t>99?12:14}px sans-serif;display:flex;align-items:center;justify-content:center;box-shadow:0 0 0 3px rgba(3,169,244,.35),0 1px 4px rgba(0,0,0,.4);cursor:pointer`,{element:n,size:[i,i],anchor:[i/2,i/2]}}}(t),t.autoFit=!1,this._ready=!0),(i||e.has("_groups"))&&(t.clusterMarkers=this._groups),(i||e.has("nodes"))&&this._drawNodes(t)}_map(){return this.renderRoot.querySelector("ha-map")}_placed(){return this.nodes.map(Yp).filter(e=>null!==e)}_drawNodes(e){const t=Od(this.hass),i=new Map;this._entityNodes=new Map;const n=[];for(const e of this._placed()){var a,o;const r=String(null!==(a=e.node.public_key)&&void 0!==a?a:"").toLowerCase(),s=t.get(r);s&&(this._entityNodes.set(s,e.node),i.set(s,null!==(o=Rd[e.node.type])&&void 0!==o?o:"#9e9e9e"),n.push({entity_id:s,label_mode:"name",name:r.slice(0,2)}))}e.entities=n,this._shown=this._entityNodes.size,Id(e,e=>i.get(e)),!this._fitted&&this._entityNodes.size>0&&(this._fitted=!0,this._fit())}_fit(){var e,t;let i=this._placed().map(e=>({lat:e.lat,lon:e.lon}));if(i.length>=20){const e=(e,t)=>e.slice().sort((e,t)=>e-t)[Math.floor(t*(e.length-1))],t=i.map(e=>e.lat),n=i.map(e=>e.lon),[a,o,r,s]=[e(t,.02),e(t,.98),e(n,.02),e(n,.98)];i=i.filter(e=>e.lat>=a&&e.lat<=o&&e.lon>=r&&e.lon<=s)}this.home&&i.push(this.home);const n=Dd(i);n&&(null===(e=this._map())||void 0===e||null===(t=e.fitBounds)||void 0===t||t.call(e,n,{zoom:15,pad:.1}))}_toggleGroups(){this._groups=!this._groups;try{localStorage.setItem(Xp,this._groups?"on":"off")}catch(e){}}_onMoreInfo(e){var t;e.stopPropagation();const i=null!==(t=e.detail)&&void 0!==t&&t.entityId?this._entityNodes.get(e.detail.entityId):void 0;i&&this.dispatchEvent(new CustomEvent("node-selected",{detail:{node:i},bubbles:!0,composed:!0}))}render(){return null===this._available?cc(br||(br=bl`<div class="wrap"></div>`)):this._available?cc(_r||(_r=bl`
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
    `),this._onMoreInfo,()=>this._fit(),this._groups?"on":"",this._groups,this._groups?"Groups on: tap to show every node":"Groups off: tap to group nearby nodes",()=>this._toggleGroups(),this._groups?"◉":"•",Rd[2],Rd[1],Rd[3],Rd[4],this.loading?"Loading...":`${this._shown} of ${this.nodes.length} nodes have a known position`):cc(yr||(yr=bl`<div class="wrap"><div class="note">${0}</div></div>`),Md)}};var Jp;Qp.styles=Cl(xr||(xr=bl`
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
  `)),yl([Dc({attribute:!1})],Qp.prototype,"nodes",void 0),yl([Dc({attribute:!1})],Qp.prototype,"home",void 0),yl([Dc({type:Boolean})],Qp.prototype,"loading",void 0),yl([Dc({attribute:!1,hasChanged:(e,t)=>!t&&!!e})],Qp.prototype,"hass",void 0),yl([qc()],Qp.prototype,"_available",void 0),yl([qc()],Qp.prototype,"_groups",void 0),yl([qc()],Qp.prototype,"_shown",void 0),Qp=yl([Rc("meshcore-nodes-map")],Qp);const Zp="meshcore-nodes-view",eh={clients:1,repeaters:2,room_servers:3,sensors:4},th={clients:"Clients",repeaters:"Repeaters",room_servers:"Room Servers",sensors:"Sensors"};let ih=Jp=class extends zc{constructor(){super(...arguments),this.contacts=[],this.channels=[],this.narrow=!1,this._viewportNarrow=!1,this._primaryFilter="all",this._typeFilter=null,this._searchQuery="",this._displayedContacts=[],this._totalCount=0,this._typeCounts={clients:0,repeaters:0,room_servers:0,sensors:0},this._l1Counts={all:0,added:0,discovered:0},this._loading=!1,this._nodeDetailDialogOpen=!1,this._pendingAction=null,this._view=Jp._storedView(),this._mapContacts=[],this._mapLoading=!1,this._home=null,this._mapLoadSeq=0,this._sortBy="last_heard",this._onMediaChange=e=>{this._viewportNarrow=e.matches}}connectedCallback(){super.connectedCallback(),this._mediaQuery=window.matchMedia("(max-width: 870px)"),this._viewportNarrow=this._mediaQuery.matches,this._mediaQuery.addEventListener("change",this._onMediaChange),this._loadCounts(),this._loadPage(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._mediaQuery)||void 0===e||e.removeEventListener("change",this._onMediaChange),this._searchTimer&&(clearTimeout(this._searchTimer),this._searchTimer=void 0)}get _isNarrow(){return this.narrow||this._viewportNarrow}updated(e){super.updated(e),this._isNarrow?this.setAttribute("narrow",""):this.removeAttribute("narrow"),e.has("config")&&(this._home=null,this._mapContacts=[],this._displayedContacts=[],this._totalCount=0,this._loadCounts(),this._loadPage(!0))}render(){return cc(wr||(wr=bl`
      <div class="nodes-layout">
        <div class="nodes-header">
          <!-- Level 1 filters -->
          <div class="l1-filters">
            ${0}
            ${0}
            ${0}
          </div>

          <!-- Level 2 filters: node type, combined with Level 1 (AND) -->
          <div class="l2-bar">
            ${0}
          </div>

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
            <select class="sort-select"
              .value=${0}
              @change=${0}>
              <option value="last_heard">Last Heard</option>
              <option value="name">Name</option>
              <option value="prefix">Pub Prefix</option>
            </select>
            <button class="clear-btn"
              @click=${0}
              title="Remove discovered contacts older than the configured threshold">
              Clear Stale
            </button>
            <button class="sync-btn"
              @click=${0}>
              ⟳ Sync
            </button>
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

    `),this._renderL1Button("all","All"),this._renderL1Button("added","★ Added"),this._renderL1Button("discovered","Discovered"),this._renderL2Buttons(),this._getSearchPlaceholder(),this._searchQuery,this._onSearchInput,this._searchQuery?cc(kr||(kr=bl`<button class="clear-search" @click=${0}>✕</button>`),()=>{this._searchQuery="",this._loadPage(!0)}):hc,this._sortBy,e=>{this._sortBy=e.target.value,this._loadPage(!0)},()=>this._clearStaleContacts(),()=>this._syncAll(),"map"===this._view?"Show nodes as a list":"Show nodes on a map",()=>this._setView("map"===this._view?"list":"map"),"map"===this._view?"☰ List":"🗺 Map","map"===this._view?"map-view":"","map"===this._view?this._renderMap():this._renderContactsContent(),this.hass,this._selectedNode,this._pendingAction,this._nodeDetailDialogOpen,()=>{this._nodeDetailDialogOpen=!1},()=>this._dispatchNodeAction("message"),()=>this._dispatchNodeAction("trace"),()=>this._dispatchNodeAction("add-contact"),()=>this._dispatchNodeAction("remove-contact"))}_renderL1Button(e,t){const i=this._l1Counts[e],n=this._primaryFilter===e,a=`l1-btn ${e} ${n?"active":""}`;return cc($r||($r=bl`
      <button
        class=${0}
        @click=${0}>
        ${0} <span class="l1-count">(${0})</span>
      </button>
    `),a,()=>this._setPrimaryFilter(e),t,i)}_renderL2Buttons(){return["clients","repeaters","room_servers","sensors"].filter(e=>this._typeCounts[e]>0||this._typeFilter===e).map(e=>{const t=this._typeFilter===e;return cc(Cr||(Cr=bl`
          <button
            class=${0}
            @click=${0}>
            ${0} <span class="l2-count">(${0})</span>
          </button>
        `),`l2-btn ${e} ${t?"active":""}`,()=>this._setTypeFilter(e),th[e],this._typeCounts[e])})}_setPrimaryFilter(e){this._primaryFilter!==e&&(this._primaryFilter=e,this._displayedContacts=[],this._totalCount=0,this._loadPage(!0))}_setTypeFilter(e){this._typeFilter===e?this._typeFilter=null:this._typeFilter=e,this._displayedContacts=[],this._totalCount=0,this._loadPage(!0)}_onSearchInput(e){this._searchQuery=e.target.value,this._searchTimer&&clearTimeout(this._searchTimer),this._searchTimer=setTimeout(()=>this._loadPage(!0),300)}_getSearchPlaceholder(){const e=this._primaryFilter,t=this._typeFilter?th[this._typeFilter].toLowerCase():"nodes";return"all"===e?`Search all ${t}...`:`Search ${e} ${t}...`}async _loadPage(e=!1){if(this.hass){this._loading=!0;try{var t;const i=e?0:this._displayedContacts.length,n=this._typeFilter?eh[this._typeFilter]:void 0,a=this._searchQuery.trim()||void 0,o=await Yc(this.hass,this._primaryFilter,{nodeType:n,search:a,limit:50,offset:i,entryId:null===(t=this.config)||void 0===t?void 0:t.entry_id,sortBy:this._sortBy});this._displayedContacts=e?o.contacts:[...this._displayedContacts,...o.contacts],this._totalCount=o.total,this._typeCounts=o.counts,e&&"map"===this._view&&this._loadMapContacts()}catch(e){console.error("Failed to load contacts:",e)}finally{this._loading=!1}}}async _loadCounts(){if(this.hass)try{var e;this._l1Counts=await async function(e,t){try{const i={type:"meshcore_chat/get_node_counts"};return t&&(i.entry_id=t),await e.callWS(i)}catch(e){return{all:0,added:0,discovered:0}}}(this.hass,null===(e=this.config)||void 0===e?void 0:e.entry_id)}catch(e){console.error("Failed to load node counts:",e)}}async _clearStaleContacts(){var e;if(!this.hass)return;const t=prompt("Remove discovered contacts older than how many days?","30");if(!t)return;const i=parseInt(t,10);isNaN(i)||i<1||i>365||(await async function(e,t,i){try{const n={type:"meshcore_chat/clear_discovered_contacts"};return void 0!==t&&(n.days_threshold=t),i&&(n.entry_id=i),await e.callWS(n)}catch(e){return{removed:0}}}(this.hass,i,null===(e=this.config)||void 0===e?void 0:e.entry_id)).removed>0&&(this._loadPage(!0),this._loadCounts(),this.dispatchEvent(new CustomEvent("contacts-changed",{bubbles:!0,composed:!0})))}_syncAll(){this._loadPage(!0),this._loadCounts(),this.dispatchEvent(new CustomEvent("contacts-changed",{bubbles:!0,composed:!0}))}static _storedView(){try{return"map"===localStorage.getItem(Zp)?"map":"list"}catch(e){return"list"}}_setView(e){this._view=e;try{localStorage.setItem(Zp,e)}catch(e){}"map"===e&&this._loadMapContacts()}async _loadMapContacts(){if(!this.hass)return;const e=++this._mapLoadSeq;var t;this._mapLoading=!0,this._home||yd(this.hass,null===(t=this.config)||void 0===t?void 0:t.entry_id).then(e=>{this._home=e});try{const t=this._typeFilter?eh[this._typeFilter]:void 0,n=this._searchQuery.trim()||void 0,a=[];for(;;){var i;const o=await Yc(this.hass,this._primaryFilter,{nodeType:t,search:n,limit:500,offset:a.length,entryId:null===(i=this.config)||void 0===i?void 0:i.entry_id,sortBy:this._sortBy});if(e!==this._mapLoadSeq)return;if(a.push(...o.contacts),0===o.contacts.length||a.length>=o.total)break}this._mapContacts=a}catch(e){console.error("Failed to load contacts for the map:",e)}finally{e===this._mapLoadSeq&&(this._mapLoading=!1)}}_renderMap(){return cc(Sr||(Sr=bl`
      <meshcore-nodes-map
        .hass=${0}
        .nodes=${0}
        .home=${0}
        ?loading=${0}
        @node-selected=${0}>
      </meshcore-nodes-map>
    `),this.hass,this._mapContacts,this._home,this._mapLoading,e=>this._openNodeDetail(e.detail.node))}_renderContactsContent(){return this._loading&&0===this._displayedContacts.length?cc(Mr||(Mr=bl`
        <div class="empty-state">
          <div class="empty-text">Loading...</div>
        </div>
      `)):0===this._displayedContacts.length?this._renderEmptyState():cc(zr||(zr=bl`
      <div class="nodes-grid">
        ${0}
      </div>
      ${0}
    `),this._displayedContacts.map(e=>cc(Ar||(Ar=bl`
          <div @click=${0}>
            <meshcore-chat-contact-card .contact=${0}></meshcore-chat-contact-card>
          </div>
        `),()=>this._openNodeDetail(e),e)),this._displayedContacts.length<this._totalCount?cc(Rr||(Rr=bl`
        <div class="load-more">
          <button ?disabled=${0} @click=${0}>
            ${0}
          </button>
        </div>
      `),this._loading,()=>this._loadPage(),this._loading?"Loading...":`Load More (${this._displayedContacts.length} of ${this._totalCount})`):hc)}_renderEmptyState(){const e=this._primaryFilter,t=this._typeFilter;let i=cc(Ir||(Ir=bl`<svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" opacity="0.5"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`)),n="No nodes found",a="";return this._searchQuery?(n="No matching nodes",a=`No results for "${this._searchQuery}"`):"added"===e?(n="No added contacts",a=t?`No added ${th[t].toLowerCase()}`:"Add discovered contacts to see them here"):"discovered"===e?(n="No discovered nodes",a=t?`No discovered ${th[t].toLowerCase()}`:"Nodes seen on the mesh will appear here"):"all"===e&&(n="No nodes",a="No contacts or discovered nodes yet"),cc(Or||(Or=bl`
      <div class="empty-state">
        <div class="empty-icon">${0}</div>
        <div class="empty-text">${0}</div>
        ${0}
      </div>
    `),i,n,a?cc(Dr||(Dr=bl`<div class="empty-subtext">${0}</div>`),a):hc)}_openNodeDetail(e){this._selectedNode=e,this._nodeDetailDialogOpen=!0}_dispatchNodeAction(e){"add-contact"!==e&&"remove-contact"!==e||(this._pendingAction=e),this.dispatchEvent(new CustomEvent("node-action",{detail:{action:e,node:this._selectedNode},bubbles:!0,composed:!0})),"message"!==e&&"delete"!==e||(this._nodeDetailDialogOpen=!1)}clearPendingAction(){this._pendingAction=null}async refreshAfterMutation(e){if(await Promise.all([this._loadPage(!0),this._loadCounts()]),this._nodeDetailDialogOpen&&this._selectedNode&&e){const t=this._displayedContacts.find(t=>!(!t.public_key||t.public_key!==e)||!(!t.pubkey_prefix||!e.startsWith(t.pubkey_prefix)));t?this._selectedNode={...t}:this._nodeDetailDialogOpen=!1}}};ih.styles=Cl(qr||(qr=bl`
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
  `)),yl([Dc({type:Array})],ih.prototype,"contacts",void 0),yl([Dc({type:Array})],ih.prototype,"channels",void 0),yl([Dc({type:Boolean})],ih.prototype,"narrow",void 0),yl([Dc({type:Object})],ih.prototype,"hass",void 0),yl([Dc({type:Object})],ih.prototype,"config",void 0),yl([qc()],ih.prototype,"_viewportNarrow",void 0),yl([qc()],ih.prototype,"_primaryFilter",void 0),yl([qc()],ih.prototype,"_typeFilter",void 0),yl([qc()],ih.prototype,"_searchQuery",void 0),yl([qc()],ih.prototype,"_displayedContacts",void 0),yl([qc()],ih.prototype,"_totalCount",void 0),yl([qc()],ih.prototype,"_typeCounts",void 0),yl([qc()],ih.prototype,"_l1Counts",void 0),yl([qc()],ih.prototype,"_loading",void 0),yl([qc()],ih.prototype,"_selectedNode",void 0),yl([qc()],ih.prototype,"_nodeDetailDialogOpen",void 0),yl([qc()],ih.prototype,"_pendingAction",void 0),yl([qc()],ih.prototype,"_view",void 0),yl([qc()],ih.prototype,"_mapContacts",void 0),yl([qc()],ih.prototype,"_mapLoading",void 0),yl([qc()],ih.prototype,"_home",void 0),yl([qc()],ih.prototype,"_sortBy",void 0),ih=Jp=yl([Rc("meshcore-nodes-page")],ih);const nh=[{step:"generating",label:"Generating new key"},{step:"importing",label:"Sending key to device"},{step:"rebooting",label:"Rebooting device"},{step:"reconnecting",label:"Waiting for device reconnect"},{step:"reloading",label:"Reloading MeshCore integration"},{step:"verifying",label:"Verifying new identity"}];let ah=class extends zc{constructor(){super(),this.narrow=!1,this._deviceConfig=null,this._loading=!0,this._error=null,this._editValues={},this._saving=!1,this._deviceConfigGeneration=0,this._commandDialogOpen=!1,this._confirmAction=null,this._confirmDialogOpen=!1,this._locationSource="manual",this._importKeyValue="",this._deviceEntities={},this._meshcoreDeviceMap={},this._entityRegistryLoaded=!1,this._hiddenSensors={},this._contextMenu=null,this._overlayPointerStarted=!1,this._settingsModalOpen=!1,this._keyManagementModalOpen=!1,this._identityFlowState={kind:"closed"},this._identityFlowUnsubscribe=null,this._renameSuccess=null,this._hiddenSensorsModalKey=null,this._statusMessage=null,this._statusMessageTimeout=null,this._trackableLimit=fp(),this._onCompanionTrace=()=>{var e;const t=null===(e=this.selectedDevice)||void 0===e?void 0:e.entry_id;this.dispatchEvent(new CustomEvent("companion-trace-requested",{detail:{entryId:t},bubbles:!0,composed:!0}))},gd(this,{isOpen:()=>null!==this._contextMenu,onEscape:()=>this._closeContextMenu(),getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="tile-context"]')}}),gd(this,{isOpen:()=>this._settingsModalOpen,onEscape:()=>this._closeSettingsModal(),getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="companion-settings"]')}}),gd(this,{isOpen:()=>this._keyManagementModalOpen,onEscape:()=>this._closeKeyManagementModal(),getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="key-management"]')}}),gd(this,{isOpen:()=>null!==this._hiddenSensorsModalKey,onEscape:()=>this._closeHiddenSensorsModal(),getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="hidden-sensors"]')}}),gd(this,{isOpen:()=>"closed"!==this._identityFlowState.kind,onEscape:()=>{"success"!==this._identityFlowState.kind&&"failure"!==this._identityFlowState.kind||this._closeIdentityFlowModal()},getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="identity-flow"]')}}),gd(this,{isOpen:()=>null!==this._renameSuccess,onEscape:()=>this._closeRenameSuccessModal(),getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="rename-success"]')}})}connectedCallback(){super.connectedCallback(),this._loadDeviceConfig(),this._loadHiddenSensors()}disconnectedCallback(){super.disconnectedCallback(),this._deviceConfigGeneration++,null!==this._statusMessageTimeout&&(clearTimeout(this._statusMessageTimeout),this._statusMessageTimeout=null)}updated(e){if(e.has("config")){var t;const i=e.get("config");(null==i?void 0:i.entry_id)!==(null===(t=this.config)||void 0===t?void 0:t.entry_id)&&(this._editValues={},this._deviceConfig=null,this._saving=!1),this._loadDeviceConfig()}e.has("hass")&&this.hass&&!this._entityRegistryLoaded&&this._loadEntityRegistry()}async _loadDeviceConfig(){var e;if(!this.hass)return;const t=++this._deviceConfigGeneration,i=null===(e=this.config)||void 0===e?void 0:e.entry_id,n=()=>{var e;return t===this._deviceConfigGeneration&&i===(null===(e=this.config)||void 0===e?void 0:e.entry_id)};this._loading=!0,this._error=null;try{var a;const e=await Vc(this.hass,i);if(!n())return;this._deviceConfig=e,null!==(a=this._deviceConfig)&&void 0!==a&&a.location_source&&(this._locationSource=this._deviceConfig.location_source)}catch(e){if(!n())return;this._error=`Failed to load device configuration: ${String(e)}`}finally{n()&&(this._loading=!1)}}_renderMessageSettings(){return cc(Tr||(Tr=bl`
      <label class="message-setting">
        <input type="checkbox" .checked=${0}
          @change=${0} />
        <span>
          <span class="message-setting-title">Keep channel messages trackable</span>
          <span class="message-setting-help">Limits channel messages to 155 bytes including your radio's name, so repeats of every message you send can be detected. Off allows the full 160 bytes, but messages over 155 always show as Unheard. Saved in this browser.</span>
        </span>
      </label>
    `),this._trackableLimit,e=>{this._trackableLimit=e.target.checked,function(e){try{localStorage.setItem(mp,e?"on":"off")}catch(e){}window.dispatchEvent(new Event(gp))}(this._trackableLimit)})}render(){var e,t,i,n,a;return this._loading?cc(Fr||(Fr=bl`
        <div class="settings-page">
          <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: var(--secondary-text-color);">
            <div style="display: flex; align-items: center; gap: 8px;">
              <div class="loading-spinner"></div>
              <span>Loading settings...</span>
            </div>
          </div>
        </div>
      `)):this._error?cc(Er||(Er=bl`
        <div class="settings-page">
          <div style="padding: 16px; color: var(--error-color); font-size: 14px;">
            ${0}
          </div>
        </div>
      `),this._error):this._deviceConfig?cc(jr||(jr=bl`
      <div class="settings-page">
        <div class="settings-container">
          <!-- Companion Device Card (full width at top) -->
          ${0}

          <!-- Two-column grid for settings cards -->
          <div class="settings-grid">
            <!-- Companion Information -->
            <div class="device-section">
              <div class="card-title">General</div>
              ${0}
            </div>

            <!-- Radio & RF Settings -->
            <div class="device-section">
              <div class="card-title">Radio</div>
              ${0}
            </div>

            <!-- Location -->
            <div class="device-section">
              <div class="card-title">Location</div>
              ${0}
            </div>

            <!-- Messages (per browser) -->
            <div class="device-section">
              <div class="card-title">Messages</div>
              ${0}
            </div>



          </div>

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
    `),this.selectedDevice?this._renderCompanionCard():hc,this._renderDeviceInfo(),this._renderRadioSettings(),this._renderLocation(),this._renderMessageSettings(),this._contextMenu?cc(Lr||(Lr=bl`
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
      `),this._onOverlayPointerDown,this._closeContextMenu,this._contextMenu.label,e=>e.stopPropagation(),e=>e.stopPropagation(),this._contextMenu.label,this._closeContextMenu,e=>e.stopPropagation(),this._hideSensorFromContext):hc,this._settingsModalOpen?cc(Pr||(Pr=bl`
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
      `),this._closeSettingsModal,e=>e.stopPropagation(),this._closeSettingsModal,this._openHiddenSensorsList,(this._hiddenSensors[this._getCompanionDeviceKey()]||[]).length,this._openCommandDialogForCompanion,this._handleRebootFromModal,this._openKeyManagementModal):hc,this._keyManagementModalOpen?cc(Br||(Br=bl`
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
      `),this._closeKeyManagementModal,e=>e.stopPropagation(),this._closeKeyManagementModal,this._renderIdentityManagement()):hc,this._hiddenSensorsModalKey?this._renderHiddenSensorsModal():hc,this._renderIdentityFlowModal(),this._renderRenameSuccessModal(),this._statusMessage?cc(Hr||(Hr=bl`
        <div class="status-toast ${0}">
          ${0}
        </div>
      `),this._statusMessage.type,this._statusMessage.text):hc,this._confirmDialogOpen,(null===(e=this._confirmAction)||void 0===e?void 0:e.title)||"",(null===(t=this._confirmAction)||void 0===t?void 0:t.message)||"",null===(i=this._confirmAction)||void 0===i?void 0:i.requireTyped,!(null===(n=this._confirmAction)||void 0===n||!n.requireTyped),this._onConfirmAction,this._onConfirmCancel,this._commandDialogOpen,this.hass,null===(a=this.config)||void 0===a?void 0:a.entry_id,!0,this.narrow,this._onCommandDialogClose):cc(Nr||(Nr=bl`<div>No device config loaded</div>`))}_renderCompanionCard(){var e;if(!this.selectedDevice)return hc;const t=this.selectedDevice,i=t.connected,n=this._getCompanionDeviceKey(),a=this._getCompanionEntities(),o=(this._hiddenSensors[n]||[]).length,r=a.find(e=>e.entity_id.includes("node_count")),s=r?null===(e=this.hass)||void 0===e||null===(e=e.states[r.entity_id])||void 0===e?void 0:e.state:void 0,l=s&&"unavailable"!==s&&"unknown"!==s?s:void 0;return cc(Vr||(Vr=bl`
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
        </div>
      </div>
    `),e=>this._onTileContextMenu(e,n),t.name,t.firmware||"unknown",t.pubkey_prefix,void 0!==l?cc(Kr||(Kr=bl`<span>Added nodes: ${0}</span>`),l):hc,()=>this._settingsModalOpen=!0,i?"online":"offline",i?"online":"offline",i?"Connected":"Offline",a.length>0?cc(Ur||(Ur=bl`
              <meshcore-node-summary
                .hass=${0}
                .device=${0}
                .entities=${0}
                .hiddenCount=${0}>
              </meshcore-node-summary>
            `),this.hass,this._companionDescriptor(t),a,o):hc,!i,()=>this._executeCompanionAction("send_advert",void 0,"Local Advert"),!i,()=>this._executeCompanionAction("send_advert",{flood:!0},"Flood Advert"),!i,()=>this._executeCompanionAction("set_time",{val:Math.floor(Date.now()/1e3)},"Sync Clock"),!i,this._onCompanionTrace)}_renderHiddenSensorsModal(){const e=this._hiddenSensorsModalKey,t=(this._hiddenSensors[e]||[]).map(e=>{let t=e;for(const i of Object.values(this._deviceEntities)){const n=i.find(t=>t.entity_id===e);if(n){t=n.label;break}}return{entityId:e,label:t}});return cc(Wr||(Wr=bl`
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
    `),this._closeHiddenSensorsModal,e=>e.stopPropagation(),this._closeHiddenSensorsModal,0===t.length?cc(Gr||(Gr=bl`<div class="empty-hidden">No hidden sensors</div>`)):t.map(t=>cc(Xr||(Xr=bl`
                  <div class="hidden-sensor-item">
                    <div>
                      <div class="hidden-sensor-name">${0}</div>
                      <div class="hidden-sensor-id">${0}</div>
                    </div>
                    <button class="unhide-btn" @click=${0}>Unhide</button>
                  </div>
                `),t.label,t.entityId,()=>this._unhideSensor(e,t.entityId))),t.length>1?cc(Yr||(Yr=bl`
                <div class="modal-footer">
                  <button class="action-btn" @click=${0}>Unhide All</button>
                </div>
              `),()=>{this._unhideAllSensors(e)}):hc)}_renderDeviceInfo(){var e;if(this._deviceConfig)return cc(Qr||(Qr=bl`
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

      <div class="danger-zone" style="margin-top: 16px;">
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
    `),this._deviceConfig.hardware_model,this._deviceConfig.pubkey,()=>this._copyToClipboard(this._deviceConfig.pubkey),this._deviceConfig.connection_type?cc(Jr||(Jr=bl`
        <div class="info-row">
          <span class="info-label">Connection</span>
          <span class="info-value">${0}${0}</span>
        </div>
      `),this._deviceConfig.connection_type.toUpperCase(),this._deviceConfig.connection_address?cc(Zr||(Zr=bl` — ${0}`),this._deviceConfig.connection_address):""):"",null!==(e=this._editValues.name)&&void 0!==e?e:this._deviceConfig.name,e=>{this._editValues.name=e.target.value},!this._editValues.name||this._editValues.name===this._deviceConfig.name,this._handleNameSave)}_renderRadioSettings(){var e,t,i,n,a;if(!this._deviceConfig)return;const o=this._hasChanges("radio-settings",["tx_power","frequency","bandwidth","spreading_factor","coding_rate","path_hash_mode"]),r=null!==(e=this._editValues.path_hash_mode)&&void 0!==e?e:this._deviceConfig.path_hash_mode,s="number"==typeof r&&[0,1,2].includes(r);return cc(es||(es=bl`
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
    `),String(null!==(t=null!==(i=this._editValues.tx_power)&&void 0!==i?i:this._deviceConfig.tx_power)&&void 0!==t?t:17),e=>{this._editValues.tx_power=Number(e.target.value)},String(null!==(n=null!==(a=this._editValues.frequency)&&void 0!==a?a:this._deviceConfig.frequency)&&void 0!==n?n:906.875),e=>{this._editValues.frequency=Number(e.target.value)},e=>{this._editValues.bandwidth=Number(e.target.value)},[7.8,10.4,15.6,20.8,31.25,41.7,62.5,125,250,500].map(e=>{var t,i;const n=null!==(t=null!==(i=this._editValues.bandwidth)&&void 0!==i?i:this._deviceConfig.bandwidth)&&void 0!==t?t:250;return cc(ts||(ts=bl`<option value=${0} ?selected=${0}>${0}</option>`),e,Number(n)===e,e)}),e=>{this._editValues.spreading_factor=Number(e.target.value)},[7,8,9,10,11,12].map(e=>{var t,i;const n=null!==(t=null!==(i=this._editValues.spreading_factor)&&void 0!==i?i:this._deviceConfig.spreading_factor)&&void 0!==t?t:11;return cc(is||(is=bl`<option value=${0} ?selected=${0}>${0}</option>`),e,Number(n)===e,e)}),e=>{this._editValues.coding_rate=Number(e.target.value)},[5,6,7,8].map(e=>{var t,i;const n=null!==(t=null!==(i=this._editValues.coding_rate)&&void 0!==i?i:this._deviceConfig.coding_rate)&&void 0!==t?t:5;return cc(ns||(ns=bl`<option value=${0} ?selected=${0}>${0}</option>`),e,Number(n)===e,e)}),e=>{const t=e.target.value;""!==t&&(this._editValues={...this._editValues,path_hash_mode:Number(t)})},!s,s&&0===r,s&&1===r,s&&2===r,!o||this._saving,()=>this._handleApply("radio-settings"),this._saving?"Applying...":"Apply Radio Settings")}_renderLocation(){var e,t,i,n,a,o,r,s;if(!this._deviceConfig)return;const l="ha_location"===this._locationSource,c=l?null===(e=this.hass)||void 0===e?void 0:e.states["zone.home"]:null,d=this._locationSource!==(null!==(t=this._deviceConfig.location_source)&&void 0!==t?t:"manual"),p=this._hasChanges("location",["latitude","longitude"]),h=d||p,u=String(l&&c?null!==(i=c.attributes.latitude)&&void 0!==i?i:0:null!==(n=null!==(a=this._editValues.latitude)&&void 0!==a?a:this._deviceConfig.latitude)&&void 0!==n?n:0),m=String(l&&c?null!==(o=c.attributes.longitude)&&void 0!==o?o:0:null!==(r=null!==(s=this._editValues.longitude)&&void 0!==s?s:this._deviceConfig.longitude)&&void 0!==r?r:0);return cc(as||(as=bl`
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
    `),u,l,e=>{this._editValues.latitude=Number(e.target.value)},m,l,e=>{this._editValues.longitude=Number(e.target.value)},l?cc(os||(os=bl`
        <div style="font-size: 11px; color: var(--secondary-text-color); margin-top: -8px; margin-bottom: 8px;">
          Using coordinates from Home Assistant zone.home
        </div>
      `)):"",this._locationSource,e=>{this._locationSource=e.target.value},!h||this._saving,this._applyLocation,this._saving?"Applying...":"Apply Location Settings")}_renderIdentityManagement(){return cc(rs||(rs=bl`
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
    `),this._showRegenIdentityConfirm,this._importKeyValue,e=>{this._importKeyValue=e.target.value},!this._importKeyValue.trim(),this._handleImportKeyConfirm)}_hasChanges(e,t){return!!this._deviceConfig&&t.some(e=>void 0!==this._editValues[e]&&this._editValues[e]!==this._deviceConfig[e])}async _handleApply(e){var t;if(!this.hass||!this._deviceConfig)return;const i=this._deviceConfigGeneration,n=null===(t=this.config)||void 0===t?void 0:t.entry_id,a=()=>{var e;return i===this._deviceConfigGeneration&&n===(null===(e=this.config)||void 0===e?void 0:e.entry_id)};let o=[];switch(e){case"device-name":o=["name"];break;case"radio-settings":o=["tx_power","frequency","bandwidth","spreading_factor","coding_rate","path_hash_mode"]}const r={};for(const e of o)void 0!==this._editValues[e]&&(r[e]=this._editValues[e]);this._saving=!0;try{const e=await Kc(this.hass,r,n);if(!a())return;if(e.success){this._deviceConfig&&(this._deviceConfig={...this._deviceConfig,...r});for(const e of o)delete this._editValues[e];this._editValues={...this._editValues},e.rename?this._renameSuccess=e.rename:this._showStatusMessage(`Saved: ${o.join(", ")}`,"success")}else this._showStatusMessage("Save failed","error")}catch(e){if(!a())return;this._showStatusMessage(`Error: ${String(e)}`,"error")}finally{a()&&(this._saving=!1)}}async _copyToClipboard(e){try{await navigator.clipboard.writeText(e),this._showStatusMessage("Copied to clipboard","success")}catch(e){this._showStatusMessage("Failed to copy","error")}}_showStatusMessage(e,t){this._statusMessage={text:e,type:t},null!==this._statusMessageTimeout&&clearTimeout(this._statusMessageTimeout),this._statusMessageTimeout=window.setTimeout(()=>{this._statusMessage=null,this._statusMessageTimeout=null},5e3)}_handleNameSave(){var e;const t=this._editValues.name,i=null===(e=this._deviceConfig)||void 0===e?void 0:e.name;if(void 0===t||t===i)return;const n=e=>(e||"").toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,""),a=n(null!=i?i:""),o=n(String(t));this._confirmAction={title:"Rename Device",message:`Renaming the device will rename all entity IDs ending in _${a} to _${o}. Any automations, scripts, or dashboards referencing entity IDs by the old name will need updating. A repair issue will list every renamed entity. Continue?`,onConfirm:async()=>{await this._handleApply("device-name")}},this._confirmDialogOpen=!0}_handleRebootFromModal(){this._settingsModalOpen=!1,this._confirmAction={title:"Reboot Device",message:"Are you sure you want to reboot the device? The device will be temporarily unavailable.",onConfirm:()=>this._executeDeviceCommand("reboot")},this._confirmDialogOpen=!0}async _executeDeviceCommand(e){if(this.hass)try{var t;const i=await Uc(this.hass,e,void 0,null===(t=this.config)||void 0===t?void 0:t.entry_id);i.success?this._showStatusMessage(`Device ${e} initiated`,"success"):this._showStatusMessage(`Command failed: ${i.response}`,"error")}catch(e){this._showStatusMessage(`Error: ${String(e)}`,"error")}}async _applyLocation(){if(this.hass&&this._deviceConfig){this._saving=!0;try{var e;const i=["latitude","longitude"],n={};if("ha_location"===this._locationSource){const e=this.hass.states["zone.home"];if(!e||null==e.attributes.latitude||null==e.attributes.longitude)return void this._showStatusMessage("Could not read zone.home coordinates from Home Assistant","error");n.latitude=e.attributes.latitude,n.longitude=e.attributes.longitude}else for(const e of i)void 0!==this._editValues[e]&&(n[e]=this._editValues[e]);if(Object.keys(n).length>0){var t;if(!(await Kc(this.hass,n,null===(t=this.config)||void 0===t?void 0:t.entry_id)).success)return void this._showStatusMessage("Failed to save coordinates","error");this._deviceConfig&&(this._deviceConfig={...this._deviceConfig,...n});for(const e of i)delete this._editValues[e];this._editValues={...this._editValues}}if(!(await async function(e,t,i){try{const n={type:"meshcore_chat/set_location_source",source:t};return i&&(n.entry_id=i),await e.callWS(n)}catch(e){return{success:!1}}}(this.hass,this._locationSource,null===(e=this.config)||void 0===e?void 0:e.entry_id)).success)return void this._showStatusMessage("Failed to update location source","error");await this._loadDeviceConfig(),this._showStatusMessage("Location settings applied","success")}catch(e){this._showStatusMessage(`Error: ${String(e)}`,"error")}finally{this._saving=!1}}}_showRegenIdentityConfirm(){this._confirmAction={title:"Regenerate Identity",message:"This will create a new cryptographic identity, reboot the device, and migrate all entity IDs to the new key prefix. Existing automations referencing entity IDs by the old prefix will need updating. All contacts must re-add this device. This cannot be undone.",requireTyped:"REGENERATE",onConfirm:async()=>{var e;this.hass&&(this._closeKeyManagementModal(),this._startIdentityFlow("regenerate",{type:"meshcore_chat/regenerate_identity",payload:null!==(e=this.config)&&void 0!==e&&e.entry_id?{entry_id:this.config.entry_id}:{}}))}},this._confirmDialogOpen=!0}_handleImportKeyConfirm(){const e=this._importKeyValue.trim().replace(/\s+/g,"");e&&(64===e.length||128===e.length?/^[0-9a-fA-F]+$/.test(e)?(this._confirmAction={title:"Import Private Key",message:"Importing a private key will replace the device identity, reboot the device, and migrate all entity IDs to the new key prefix. Existing automations referencing entity IDs by the old prefix will need updating. All contacts must re-add this device.",requireTyped:"IMPORT",onConfirm:()=>this._importIdentityKey()},this._confirmDialogOpen=!0):this._showStatusMessage("Private key must be hex (0-9, a-f)","error"):this._showStatusMessage("Private key must be 64 or 128 hex characters","error"))}async _importIdentityKey(){var e;if(!this.hass||!this._importKeyValue.trim())return;const t=this._importKeyValue.trim().replace(/\s+/g,"");this._closeKeyManagementModal(),this._importKeyValue="";const i={private_key:t};null!==(e=this.config)&&void 0!==e&&e.entry_id&&(i.entry_id=this.config.entry_id),this._startIdentityFlow("import",{type:"meshcore_chat/import_identity",payload:i})}_startIdentityFlow(e,t){if(!this.hass)return;this._identityFlowUnsubscribe&&(this._identityFlowUnsubscribe(),this._identityFlowUnsubscribe=null),this._identityFlowState={kind:"progress",flow:e,currentStep:"generating",completedSteps:new Set};const{unsubscribe:i}=function(e,t,i,n){let a,o=null;const r=new Promise(e=>{a=e});let s={success:!1,code:"unknown",message:"Identity flow terminated without a result event."};return e.connection.subscribeMessage(e=>{if("done"===e.step&&e.success&&e.old_pubkey&&e.new_pubkey){const t={success:!0,old_pubkey:e.old_pubkey,new_pubkey:e.new_pubkey,warning:e.warning};s=t,n({type:"result",data:t})}else"done"!==e.step&&n({type:"progress",step:e.step})},{type:t,...i}).then(e=>{o=e,a(s)}).catch(e=>{const t={success:!1,code:e.code||"error",message:e.message||"Identity flow failed."};n({type:"error",data:t}),a(t)}),{unsubscribe:()=>{o&&o()},done:r}}(this.hass,t.type,t.payload,t=>{if("progress"===t.type){if("progress"!==this._identityFlowState.kind)return;const e=new Set(this._identityFlowState.completedSteps);e.add(this._identityFlowState.currentStep),this._identityFlowState={...this._identityFlowState,currentStep:t.step,completedSteps:e}}else"result"===t.type?this._identityFlowState={kind:"success",flow:e,oldPubkey:t.data.old_pubkey,newPubkey:t.data.new_pubkey,warning:t.data.warning}:"error"===t.type&&(this._identityFlowState={kind:"failure",flow:e,code:t.data.code,message:t.data.message})});this._identityFlowUnsubscribe=i}_closeIdentityFlowModal(){this._identityFlowUnsubscribe&&(this._identityFlowUnsubscribe(),this._identityFlowUnsubscribe=null);const e="success"===this._identityFlowState.kind;this._identityFlowState={kind:"closed"},e&&this._loadDeviceConfig()}_renderIdentityFlowModal(){const e=this._identityFlowState;if("closed"===e.kind)return hc;const t="regenerate"===e.flow?"Regenerate Identity":"Import Private Key",i="regenerate"===e.flow?"Regenerating Identity":"Importing Identity",n="regenerate"===e.flow?"Identity Regenerated":"Identity Imported",a="regenerate"===e.flow?"Identity Regeneration Failed":"Identity Import Failed";let o,r;"progress"===e.kind?(o=cc(ss||(ss=bl`
        <div style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px;">
          This typically takes 5–10 seconds. Please don't close this dialog.
        </div>
        <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px;">
          ${0}
        </ul>
      `),nh.map(t=>{const i=e.completedSteps.has(t.step),n=e.currentStep===t.step;let a="○",o="var(--secondary-text-color)";return i?(a="✓",o="var(--success-color, #28a745)"):n&&(a="⏳",o="var(--primary-color)"),cc(ls||(ls=bl`
              <li style="display: flex; align-items: center; gap: 8px; color: ${0}; font-size: 14px;">
                <span style="font-family: monospace; width: 1em;">${0}</span>
                <span>${0}</span>
              </li>
            `),o,a,t.label)})),r=hc):"success"===e.kind?(o=cc(cs||(cs=bl`
        <div style="font-size: 32px; text-align: center; margin-bottom: 8px;">✅</div>
        <div style="font-size: 14px; margin-bottom: 16px;">
          The device's identity has been replaced and verified.
        </div>
        <div style="font-family: monospace; font-size: 12px; background: var(--card-background-color, #f5f5f5); padding: 8px 12px; border-radius: 4px; margin-bottom: 12px;">
          <div><span style="color: var(--secondary-text-color);">Old key:</span> ${0}…</div>
          <div><span style="color: var(--secondary-text-color);">New key:</span> ${0}… <span style="color: var(--success-color, #28a745); font-size: 11px;">(verified after reload)</span></div>
        </div>
        ${0}
      `),e.oldPubkey.slice(0,12),e.newPubkey.slice(0,12),e.warning?cc(ds||(ds=bl`
          <div style="font-size: 13px; color: var(--secondary-text-color); margin-top: 12px; padding: 8px 12px; border-left: 3px solid var(--warning-color, #f0ad4e); background: var(--warning-color-bg, rgba(240, 173, 78, 0.08));">
            <strong>Follow-up:</strong>
            <ul style="margin: 4px 0 0 16px; padding: 0;">
              <li>${0}</li>
              <li>Check Settings → Repairs for the entity-ID migration list.</li>
            </ul>
          </div>
        `),e.warning):hc),r=cc(ps||(ps=bl`
        <button class="modal-action" @click=${0}>Close</button>
      `),this._closeIdentityFlowModal)):(o=cc(hs||(hs=bl`
        <div style="font-size: 32px; text-align: center; margin-bottom: 8px;">❌</div>
        <div style="font-size: 14px; margin-bottom: 12px;">
          ${0}
        </div>
        <div style="font-family: monospace; font-size: 12px; background: var(--card-background-color, #f5f5f5); padding: 8px 12px; border-radius: 4px;">
          <div><span style="color: var(--secondary-text-color);">Error code:</span> ${0}</div>
          <div style="margin-top: 4px; word-break: break-word;"><span style="color: var(--secondary-text-color);">Message:</span> ${0}</div>
        </div>
      `),"regenerate"===e.flow?"The device firmware rejected the new key. Your device identity is unchanged.":"The import did not take effect. Your device identity may be unchanged.",e.code,e.message),r=cc(us||(us=bl`
        <button class="modal-action" @click=${0}>Close</button>
      `),this._closeIdentityFlowModal));const s="progress"===e.kind?i:"success"===e.kind?n:a;return cc(ms||(ms=bl`
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
    `),t,e=>e.stopPropagation(),s,"progress"===e.kind?hc:cc(gs||(gs=bl`
              <button class="modal-close" aria-label="Close" @click=${0}>&times;</button>
            `),this._closeIdentityFlowModal),o,r?cc(fs||(fs=bl`<div style="margin-top: 20px; display: flex; justify-content: flex-end;">${0}</div>`),r):hc)}_closeRenameSuccessModal(){this._renameSuccess=null,this._loadDeviceConfig(),this.dispatchEvent(new CustomEvent("device-renamed",{bubbles:!0,composed:!0}))}_renderRenameSuccessModal(){const e=this._renameSuccess;return e?cc(vs||(vs=bl`
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
    `),e=>e.stopPropagation(),e.old_name,e.new_name,e.count,1===e.count?"entity ID was":"entity IDs were",e.old_suffix,e.new_suffix,this._closeRenameSuccessModal):hc}async _onConfirmAction(){if(this._confirmDialogOpen=!1,this._confirmAction)try{await this._confirmAction.onConfirm()}catch(e){this._error=`Error: ${String(e)}`}this._confirmAction=null}_onConfirmCancel(){this._confirmDialogOpen=!1,this._confirmAction=null}_onCommandDialogClose(){this._commandDialogOpen=!1}async _loadEntityRegistry(){if(this.hass&&!this._entityRegistryLoaded){this._entityRegistryLoaded=!0;try{const{meshcoreDeviceMap:e,deviceEntities:t}=await Vp(this.hass);this._meshcoreDeviceMap=e,this._deviceEntities=t}catch(e){console.error("Failed to load entity registry:",e)}}}_getCompanionEntities(){var e;if(!this.hass||!this.selectedDevice)return[];const t=this._getCompanionDeviceKey(),i=new Set(this._hiddenSensors[t]||[]),n=this.selectedDevice.entry_id,a=this._meshcoreDeviceMap[n];if(a&&this._deviceEntities[a])return this._deviceEntities[a].filter(e=>!i.has(e.entity_id));const o=(null===(e=this.selectedDevice.pubkey_prefix)||void 0===e||null===(e=e.substring(0,6))||void 0===e?void 0:e.toLowerCase())||"";if(!o)return[];const r=[];for(const[e,t]of Object.entries(this._deviceEntities))if(!Object.entries(this._meshcoreDeviceMap).some(([t,i])=>i===e&&(t.includes("_repeater_")||t.includes("_client_"))))for(const e of t)e.entity_id.toLowerCase().includes(o)&&!i.has(e.entity_id)&&r.push(e);return r.sort((e,t)=>e.sortOrder-t.sortOrder)}_getCompanionDeviceKey(){var e;return(null===(e=this.selectedDevice)||void 0===e?void 0:e.entry_id)||"companion"}_companionDescriptor(e){return{type:"companion",name:e.name,pubkey_prefix:e.pubkey_prefix,connected:e.connected,firmware:e.firmware,entry_id:e.entry_id}}_loadHiddenSensors(){try{const e=localStorage.getItem("meshcore-hidden-sensors");e&&(this._hiddenSensors=JSON.parse(e))}catch(e){this._hiddenSensors={}}}_saveHiddenSensors(){try{localStorage.setItem("meshcore-hidden-sensors",JSON.stringify(this._hiddenSensors))}catch(e){}}_hideSensor(e,t){const i=this._hiddenSensors[e]||[];i.includes(t)||(this._hiddenSensors={...this._hiddenSensors,[e]:[...i,t]},this._saveHiddenSensors())}_unhideSensor(e,t){const i=this._hiddenSensors[e]||[];if(this._hiddenSensors={...this._hiddenSensors,[e]:i.filter(e=>e!==t)},0===this._hiddenSensors[e].length){const t={...this._hiddenSensors};delete t[e],this._hiddenSensors=t}this._saveHiddenSensors()}_unhideAllSensors(e){const t={...this._hiddenSensors};delete t[e],this._hiddenSensors=t,this._saveHiddenSensors()}async _executeCompanionAction(e,t,i){if(!this.hass)return;const n=i||e;try{var a;const i=await Uc(this.hass,e,t,null===(a=this.config)||void 0===a?void 0:a.entry_id);this._showStatusMessage(`Companion: ${n} → ${i.response||"OK"}`,"success")}catch(e){this._showStatusMessage(`Companion: ${n} failed — ${String(e)}`,"error")}}_onTileContextMenu(e,t){const{entityId:i,label:n}=e.detail;this._contextMenu={entityId:i,label:n,deviceKey:t},this._overlayPointerStarted=!1}_onOverlayPointerDown(){this._overlayPointerStarted=!0}_closeContextMenu(){this._overlayPointerStarted&&(this._overlayPointerStarted=!1,this._contextMenu=null)}_hideSensorFromContext(){this._contextMenu&&(this._hideSensor(this._contextMenu.deviceKey,this._contextMenu.entityId),this._showStatusMessage(`Hidden: ${this._contextMenu.label}`,"success"),this._contextMenu=null)}_closeSettingsModal(){this._settingsModalOpen=!1}_openHiddenSensorsList(){this._hiddenSensorsModalKey=this._getCompanionDeviceKey(),this._settingsModalOpen=!1}_closeHiddenSensorsModal(){this._hiddenSensorsModalKey=null}_openCommandDialogForCompanion(){this._commandDialogOpen=!0,this._settingsModalOpen=!1}_openKeyManagementModal(){this._keyManagementModalOpen=!0,this._settingsModalOpen=!1}_closeKeyManagementModal(){this._keyManagementModalOpen=!1}};ah.styles=[Tc,Cl(bs||(bs=bl`
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
    `))],yl([Dc({type:Object})],ah.prototype,"hass",void 0),yl([Dc({type:Object})],ah.prototype,"config",void 0),yl([Dc({type:Boolean})],ah.prototype,"narrow",void 0),yl([Dc({type:Object})],ah.prototype,"selectedDevice",void 0),yl([qc()],ah.prototype,"_deviceConfig",void 0),yl([qc()],ah.prototype,"_loading",void 0),yl([qc()],ah.prototype,"_error",void 0),yl([qc()],ah.prototype,"_editValues",void 0),yl([qc()],ah.prototype,"_saving",void 0),yl([qc()],ah.prototype,"_commandDialogOpen",void 0),yl([qc()],ah.prototype,"_confirmAction",void 0),yl([qc()],ah.prototype,"_confirmDialogOpen",void 0),yl([qc()],ah.prototype,"_locationSource",void 0),yl([qc()],ah.prototype,"_importKeyValue",void 0),yl([qc()],ah.prototype,"_deviceEntities",void 0),yl([qc()],ah.prototype,"_meshcoreDeviceMap",void 0),yl([qc()],ah.prototype,"_entityRegistryLoaded",void 0),yl([qc()],ah.prototype,"_hiddenSensors",void 0),yl([qc()],ah.prototype,"_contextMenu",void 0),yl([qc()],ah.prototype,"_settingsModalOpen",void 0),yl([qc()],ah.prototype,"_keyManagementModalOpen",void 0),yl([qc()],ah.prototype,"_identityFlowState",void 0),yl([qc()],ah.prototype,"_renameSuccess",void 0),yl([qc()],ah.prototype,"_hiddenSensorsModalKey",void 0),yl([qc()],ah.prototype,"_statusMessage",void 0),yl([qc()],ah.prototype,"_trackableLimit",void 0),ah=yl([Rc("meshcore-settings-page")],ah);let oh=class extends zc{constructor(){super(),this.open=!1,this.contactName="",this.result=null,this.error="",this.availableRepeaters=[],this.targetContact=null,this.pathMode="discovery",this.pathHops=[],this.enteredPath="",this._repeaterFilter="",this._running=!1,this._onPathModeChange=e=>{this.pathMode=e.target.value},this._onExplicitPathInput=e=>{this.enteredPath=e.target.value},this._onRunTrace=()=>{if(!this._canRunTrace())return;const e="discovery"===this.pathMode?void 0:this._buildPathString();this._running=!0,this.dispatchEvent(new CustomEvent("trace-requested",{detail:{pathMode:this.pathMode,path:e},bubbles:!0,composed:!0}))},gd(this,{isOpen:()=>this.open,onEscape:()=>this._close()})}willUpdate(e){if(e.has("open")&&this.open&&!e.get("open")){const e=this.targetContact;if(!e||2!==e.type&&3!==e.type&&4!==e.type)this.pathMode="discovery",this.pathHops=[];else{this.pathMode="select";const t=this._resolveCachedHops(e);this.pathHops=t||[]}this.enteredPath="",this._repeaterFilter="",this._running=!1}(e.has("result")&&this.result||e.has("error")&&this.error)&&(this._running=!1)}_resolveCachedHops(e){var t,i;if(1!==(null!==(t=e.out_path_hash_mode)&&void 0!==t?t:0))return null;const n=(e.out_path||"").toLowerCase(),a=null!==(i=e.out_path_len)&&void 0!==i?i:0;if(!n||a<=0)return null;if(n.length<4*a)return null;const o=[];for(let e=0;e<a;e++){const t=n.substring(4*e,4*(e+1)),i=this.availableRepeaters.find(e=>(e.pubkey_prefix||"").toLowerCase().startsWith(t));if(!i)return null;o.push(i)}return o}render(){return this.open?cc(_s||(_s=bl`
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
    `),this._close,this.contactName,e=>e.stopPropagation(),this.contactName,this._close,this._renderBody()):cc(ys||(ys=bl``))}_renderBody(){return this.error?cc(xs||(xs=bl`<div class="error-box">${0}</div>`),this.error):this.result?this._renderResult(this.result):this._running?cc(ws||(ws=bl`<div class="info-value">Tracing…</div>`)):this._renderInput()}_renderInput(){return cc(ks||(ks=bl`
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
    `),this.pathMode,this._onPathModeChange,"discovery"===this.pathMode?cc($s||($s=bl`<div class="info-item path-hint">
            Flood path discovery will find a route automatically. May time
            out if the target is many hops away or unreachable by flood.
          </div>`)):"select"===this.pathMode?this._renderRepeaterPicker():this._renderExplicitInput(),"discovery"!==this.pathMode&&this._canRunTrace()?cc(Cs||(Cs=bl`<div class="info-item">
            <div class="info-label">Resolved Path</div>
            <div class="resolved-path">${0}</div>
          </div>`),this._buildPathString()):cc(Ss||(Ss=bl``)),!this._canRunTrace(),this._onRunTrace)}_renderRepeaterPicker(){var e,t,i;const n=new Set(this.pathHops.map(e=>e.public_key)),a=this._repeaterFilter.trim().toLowerCase(),o=[...this.availableRepeaters].filter(e=>!n.has(e.public_key)).filter(e=>{if(!a)return!0;const t=(e.adv_name||"").toLowerCase(),i=(e.pubkey_prefix||"").toLowerCase();return t.includes(a)||i.startsWith(a)}).sort((e,t)=>(e.adv_name||"").localeCompare(t.adv_name||"")),r=(null===(e=this.targetContact)||void 0===e?void 0:e.adv_name)||(null===(t=this.targetContact)||void 0===t?void 0:t.pubkey_prefix)||"(no target)",s=(null===(i=this.targetContact)||void 0===i||null===(i=i.pubkey_prefix)||void 0===i?void 0:i.substring(0,2).toUpperCase())||"--";return cc(Ms||(Ms=bl`
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
    `),this._repeaterFilter,e=>{this._repeaterFilter=e.target.value},0===o.length?cc(zs||(zs=bl`<div class="picker-empty">${0}</div>`),a?"No matches":"No repeaters available"):o.map(e=>cc(As||(As=bl`
                      <div
                        class="picker-item"
                        @click=${0}
                        title="Add ${0}"
                      >
                        <span class="name">${0}</span>
                        <span class="hop-hex">${0}</span>
                      </div>
                    `),()=>this._addRepeater(e),e.adv_name,e.adv_name||e.pubkey_prefix,e.pubkey_prefix.substring(0,2).toUpperCase())),0===this.pathHops.length?cc(Rs||(Rs=bl`<div class="picker-empty">Click a repeater to add (or leave empty for direct-neighbor)</div>`)):this.pathHops.map((e,t)=>cc(Is||(Is=bl`
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
                    `),t+1,e.adv_name||e.pubkey_prefix,e.pubkey_prefix.substring(0,2).toUpperCase(),0===t,()=>this._moveRepeater(t,-1),t===this.pathHops.length-1,()=>this._moveRepeater(t,1),()=>this._removeRepeater(t))),r,s)}_renderExplicitInput(){var e,t,i;const n=!!this.enteredPath&&!this._isValidExplicitHops(),a=(null===(e=this.targetContact)||void 0===e?void 0:e.adv_name)||(null===(t=this.targetContact)||void 0===t?void 0:t.pubkey_prefix)||"(no target)",o=(null===(i=this.targetContact)||void 0===i||null===(i=i.pubkey_prefix)||void 0===i?void 0:i.substring(0,2).toUpperCase())||"--";return cc(Os||(Os=bl`
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
    `),this.enteredPath,this._onExplicitPathInput,cc(n?Ds||(Ds=bl`<div class="path-error">
              Invalid format — hex pairs separated by commas, all
              the same width (2, 4, or 8 chars).
            </div>`):qs||(qs=bl``)),a,o)}_addRepeater(e){this.pathHops=[...this.pathHops,e]}_removeRepeater(e){this.pathHops=this.pathHops.filter((t,i)=>i!==e)}_moveRepeater(e,t){const i=e+t;if(i<0||i>=this.pathHops.length)return;const n=[...this.pathHops];[n[e],n[i]]=[n[i],n[e]],this.pathHops=n}_isValidExplicitHops(){const e=this.enteredPath.trim();if(!e)return!0;const t=e.split(",").map(e=>e.trim());if(0===t.length)return!1;const i=t[0].length;if(![2,4,8].includes(i))return!1;const n=/^[0-9a-fA-F]+$/;return t.every(e=>e.length===i&&n.test(e))}_canRunTrace(){return"discovery"===this.pathMode||("select"===this.pathMode?!!this.targetContact:"explicit"===this.pathMode&&!!this.targetContact&&this._isValidExplicitHops())}_buildPathString(){if("select"===this.pathMode){if(!this.targetContact)return"";const e=this.targetContact.pubkey_prefix.substring(0,2).toUpperCase(),t=this.pathHops.map(e=>e.pubkey_prefix.substring(0,2).toUpperCase());return 0===t.length?e:[...t,e,...[...t].reverse()].join(",")}if("explicit"===this.pathMode){if(!this.targetContact)return"";const e=this.targetContact.pubkey_prefix.substring(0,2).toUpperCase(),t=this.enteredPath.trim();if(!t)return e;const i=t.split(",").map(e=>e.trim().toUpperCase());return[...i,e,...[...i].reverse()].join(",")}return""}_renderResult(e){const t=(e.path||[]).filter(e=>e.hash);return cc(Ts||(Ts=bl`
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
    `),e.response_time,0===e.hops?"Direct (0 hops)":`${e.hops}`,null!==e.final_snr&&void 0!==e.final_snr?cc(Fs||(Fs=bl`
            <div class="info-item">
              <div class="info-label">Final SNR (at this device)</div>
              <div class="info-value">${0} dB</div>
            </div>
          `),e.final_snr.toFixed(2)):cc(Es||(Es=bl``)),t.length>0?cc(Ns||(Ns=bl`
            <div class="info-item">
              <div class="info-label">Return Path (per-hop SNR)</div>
              <div class="hop-list">
                ${0}
              </div>
            </div>
          `),t.map((e,t)=>cc(js||(js=bl`
                    <div class="hop-row">
                      <span>Hop ${0}: ${0}</span>
                      <span>${0} dB</span>
                    </div>
                  `),t+1,e.hash,e.snr.toFixed(2)))):cc(Ls||(Ls=bl``)))}_close(){this.open=!1,this.dispatchEvent(new CustomEvent("trace-dialog-closed",{bubbles:!0,composed:!0}))}};oh.styles=[Tc,Cl(Ps||(Ps=bl`
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
  `))],yl([Dc({type:Boolean})],oh.prototype,"open",void 0),yl([Dc({type:String})],oh.prototype,"contactName",void 0),yl([Dc({type:Object})],oh.prototype,"result",void 0),yl([Dc({type:String})],oh.prototype,"error",void 0),yl([Dc({type:Array})],oh.prototype,"availableRepeaters",void 0),yl([Dc({type:Object})],oh.prototype,"targetContact",void 0),yl([qc()],oh.prototype,"pathMode",void 0),yl([qc()],oh.prototype,"pathHops",void 0),yl([qc()],oh.prototype,"enteredPath",void 0),yl([qc()],oh.prototype,"_repeaterFilter",void 0),yl([qc()],oh.prototype,"_running",void 0),oh=yl([Rc("meshcore-trace-dialog")],oh);let rh=class extends zc{constructor(){super(),this.open=!1,this.contacts=[],this._typeFilter="all",this._search="",this._onTypeChange=e=>{this._typeFilter=e.target.value},this._onSearchInput=e=>{this._search=e.target.value},this._close=()=>{this.dispatchEvent(new CustomEvent("target-picker-closed",{bubbles:!0,composed:!0}))},gd(this,{isOpen:()=>this.open,onEscape:()=>this._close()})}willUpdate(e){e.has("open")&&this.open&&!e.get("open")&&(this._typeFilter="all",this._search="")}render(){if(!this.open)return cc(Bs||(Bs=bl``));const e=this._search.trim().toLowerCase(),t=this.contacts.filter(e=>{switch(this._typeFilter){case"all":default:return!0;case"client":return 1===e.type;case"repeater":return 2===e.type;case"room_server":return 3===e.type;case"sensor":return 4===e.type}}).filter(t=>{if(!e)return!0;const i=(t.adv_name||"").toLowerCase(),n=(t.pubkey_prefix||"").toLowerCase();return i.includes(e)||n.startsWith(e)}).sort((e,t)=>(e.adv_name||"").localeCompare(t.adv_name||""));return cc(Hs||(Hs=bl`
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
    `),this._close,e=>e.stopPropagation(),this._close,this._typeFilter,this._onTypeChange,this._search,this._onSearchInput,0===t.length?cc(Vs||(Vs=bl`<div class="empty">No matching contacts</div>`)):t.map(e=>cc(Ks||(Ks=bl`
                    <div
                      class="result-row"
                      @click=${0}
                      title="Trace to ${0}"
                    >
                      <span class="result-icon">${0}</span>
                      <span class="result-name">${0}</span>
                      <span class="result-hex">${0}</span>
                    </div>
                  `),()=>this._select(e),e.adv_name||e.pubkey_prefix,this._iconFor(e.type),e.adv_name||e.pubkey_prefix,(e.pubkey_prefix||"").substring(0,2).toUpperCase())))}_iconFor(e){switch(e){case 2:return cc(Us||(Us=bl`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V10h4.27c.15-.86.45-1.66.87-2.36l-1.82-1.06a.5.5 0 01-.18-.68l.5-.87a.5.5 0 01.68-.18l1.81 1.05C19.66 4.66 20.78 4 22 4v2c-.8 0-1.54.32-2.08.84l1.5 2.6a.5.5 0 01-.18.68l-.87.5a.5.5 0 01-.68-.18L18.2 7.92c-.14.65-.2 1.33-.2 2.08 0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6z"/></svg>`));case 3:return cc(Ws||(Ws=bl`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M4 6h16v4H4V6zm0 8h16v4H4v-4zm2-6.5A.5.5 0 116 7a.5.5 0 010 .5zm0 8A.5.5 0 116 15a.5.5 0 010 .5z"/></svg>`));case 4:return cc(Gs||(Gs=bl`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2a4 4 0 00-4 4v7.55A5.5 5.5 0 1015.5 20a5.47 5.47 0 00.5-2.45V6a4 4 0 00-4-4zm0 2a2 2 0 012 2v8.1a3.5 3.5 0 11-4 0V6a2 2 0 012-2z"/></svg>`));default:return cc(Xs||(Xs=bl`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`))}}_select(e){this.dispatchEvent(new CustomEvent("target-selected",{detail:e,bubbles:!0,composed:!0}))}};rh.styles=[Tc,Cl(Ys||(Ys=bl`
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
    `))],yl([Dc({type:Boolean})],rh.prototype,"open",void 0),yl([Dc({type:Array})],rh.prototype,"contacts",void 0),yl([qc()],rh.prototype,"_typeFilter",void 0),yl([qc()],rh.prototype,"_search",void 0),rh=yl([Rc("meshcore-target-picker")],rh);let sh=class extends zc{constructor(){super(),this.narrow=!1,this._config=null,this._activeTab="chat",this._devices=[],this._contacts=[],this._channels=[],this._selectedEntryId=null,this._loading=!0,this._loadingStarted=!1,this._error=null,this._unsubscribeList=[],this._unread=new Qc,this._pendingChatTarget=null,this._activeChatEntityId=null,this._deviceDropdownOpen=!1,this._onDocClickForDropdown=e=>{var t;const i=e.composedPath?e.composedPath():[],n=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".device-info-wrap");n&&i.includes(n)||this._closeDeviceDropdown()},this._onDocKeyForDropdown=e=>{"Escape"===e.key&&this._closeDeviceDropdown()},this._traceDialogOpen=!1,this._traceDialogContactName="",this._traceDialogResult=null,this._traceDialogError="",this._traceDialogPubkeyPrefix="",this._traceDialogEntryId=void 0,this._traceDialogTargetContact=null,this._targetPickerOpen=!1,this._pendingTraceEntryId=void 0,this._onTraceRequested=async e=>{if(!this.hass)return;const{pathMode:t,path:i}=e.detail;try{const e=await async function(e,t,i,n="discovery",a){const o={type:"meshcore_chat/trace",pubkey_prefix:t};return i&&(o.entry_id=i),"select"!==n&&"explicit"!==n||!a||(o.path=a),e.callWS(o)}(this.hass,this._traceDialogPubkeyPrefix,this._traceDialogEntryId,t,i);this._traceDialogResult=e}catch(e){this._traceDialogError=(null==e?void 0:e.message)||(null==e?void 0:e.code)||"Unknown error"}},this._onCompanionTraceRequested=e=>{var t,i,n;this._pendingTraceEntryId=null!==(t=null!==(i=null===(n=e.detail)||void 0===n?void 0:n.entryId)&&void 0!==i?i:this._selectedEntryId)&&void 0!==t?t:void 0,this._targetPickerOpen=!0},this._onTargetPicked=e=>{const t=e.detail;this._targetPickerOpen=!1,t&&(this._traceDialogPubkeyPrefix=t.pubkey_prefix,this._traceDialogEntryId=this._pendingTraceEntryId,this._traceDialogContactName=t.adv_name||t.pubkey_prefix,this._traceDialogTargetContact=t,this._traceDialogResult=null,this._traceDialogError="",this._traceDialogOpen=!0)},this._unread.onMarkReadRequested(e=>{this._handleMarkReadRequested(e)})}connectedCallback(){super.connectedCallback(),this._loadData(),this._setupSubscriptions()}disconnectedCallback(){super.disconnectedCallback(),this._teardownSubscriptions(),this._closeDeviceDropdown()}_toggleDeviceDropdown(){this._deviceDropdownOpen?this._closeDeviceDropdown():this._openDeviceDropdown()}_openDeviceDropdown(){this._deviceDropdownOpen||(this._deviceDropdownOpen=!0,setTimeout(()=>{document.addEventListener("click",this._onDocClickForDropdown,!0),document.addEventListener("keydown",this._onDocKeyForDropdown,!0)},0))}_closeDeviceDropdown(){this._deviceDropdownOpen&&(this._deviceDropdownOpen=!1,document.removeEventListener("click",this._onDocClickForDropdown,!0),document.removeEventListener("keydown",this._onDocKeyForDropdown,!0))}_selectDevice(e){e!==this._selectedEntryId&&(this._selectedEntryId=e,this._pendingChatTarget=null,Promise.all([this._loadDeviceData(),this._loadUnreadCounts()])),this._closeDeviceDropdown()}_setupSubscriptions(){var e;this._teardownSubscriptions(),null!==(e=this.hass)&&void 0!==e&&null!==(e=e.connection)&&void 0!==e&&e.subscribeEvents&&(this.hass.connection.subscribeEvents(e=>{e.data.entry_id===this._selectedEntryId&&this._loadDeviceData()},"meshcore_channels_updated").then(e=>{this._unsubscribeList.push(e)}),this.hass.connection.subscribeEvents(e=>{e.data.entry_id===this._selectedEntryId&&this._loadDeviceData()},"meshcore_channel_removed").then(e=>{this._unsubscribeList.push(e)}),this.hass.connection.subscribeEvents(e=>{var t;this._activeChatEntityId&&(null===(t=e.data)||void 0===t?void 0:t.entity_id)===this._activeChatEntityId||this._loadUnreadCounts()},"meshcore_unread_updated").then(e=>{this._unsubscribeList.push(e)}))}_teardownSubscriptions(){this._unsubscribeList.length>0&&(this._unsubscribeList.forEach(e=>{try{e()}catch(e){}}),this._unsubscribeList=[])}updated(e){e.has("hass")&&this.hass&&!this._config&&!this._loadingStarted&&this._loadData()}get _selectedDevice(){return this._devices.find(e=>e.entry_id===this._selectedEntryId)}render(){var e,t,i;if(this._loading)return cc(Qs||(Qs=bl`
        <div class="panel">
          <div class="center-message">
            <div class="spinner"></div>
          </div>
        </div>
      `));if(this._error&&!this._config){const e="No MeshCore devices found"===this._error;return cc(Js||(Js=bl`
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
      `),this._error,e?cc(Zs||(Zs=bl`Open <a href="/config/repairs">Settings &rarr; System &rarr; Repairs</a>
                         for setup guidance, or add the MeshCore integration via
                         <a href="/config/integrations">Settings &rarr; Devices &amp; Services</a>.`)):"Check that the MeshCore integration is loaded and connected.")}const n=this._selectedDevice;return cc(el||(el=bl`
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

        <div class="tab-bar">
          <button
            class=${0}
            @click=${0}>
            Chat
          </button>
          <button
            class=${0}
            @click=${0}>
            Devices
          </button>
          <button
            class=${0}
            @click=${0}>
            Nodes
          </button>
          <button
            class=${0}
            @click=${0}>
            Settings
          </button>
        </div>

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
    `),this.narrow||"always_hidden"===(null===(e=this.hass)||void 0===e?void 0:e.dockedSidebar)?cc(tl||(tl=bl`<button class="menu-icon" @click=${0} aria-label="Toggle sidebar">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
                </button>`),this._toggleMenu):cc(il||(il=bl``)),n&&null!==this._getNodeStatus(n)?cc(nl||(nl=bl`
                  <span class="connection-status ${0}">
                    <span class="status-dot ${0}"></span>
                    ${0}
                  </span>`),"online"===this._getNodeStatus(n)?"online":"offline","online"===this._getNodeStatus(n)?"online":"offline","online"===this._getNodeStatus(n)?"Connected":"Disconnected"):cc(al||(al=bl``)),n&&null!==this._getBatteryLevel(n)?cc(ol||(ol=bl`
                  <span class="battery-indicator">
                    <span class="battery-icon">
                      <span class="battery-fill ${0}"
                            style="width: ${0}%"></span>
                    </span>
                    <span class="battery-pct">${0}%</span>
                  </span>`),this._getBatteryLevel(n)>50?"high":this._getBatteryLevel(n)>20?"medium":"low",this._getBatteryLevel(n),this._getBatteryLevel(n)):cc(rl||(rl=bl``)),this._devices.length>1?cc(sl||(sl=bl`
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
                `),this._deviceDropdownOpen?"true":"false",this._toggleDeviceDropdown,(null==n?void 0:n.name)||"",(null==n||null===(t=n.pubkey_prefix)||void 0===t?void 0:t.substring(0,6))||"",this._deviceDropdownOpen?cc(ll||(ll=bl`
                          <ul class="device-switcher-menu" role="listbox">
                            ${0}
                          </ul>
                        `),this._devices.map(e=>{var t;return cc(cl||(cl=bl`
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
                              `),e.entry_id===this._selectedEntryId?"true":"false",e.entry_id===this._selectedEntryId?"active":"",()=>this._selectDevice(e.entry_id),e.name,e.connected?"":" — offline",(null===(t=e.pubkey_prefix)||void 0===t?void 0:t.substring(0,6))||"?")})):""):cc(dl||(dl=bl`
                  <div class="device-info-wrap">
                    <span class="device-name">${0}</span>
                    <span class="device-prefix">(${0})</span>
                  </div>
                `),(null==n?void 0:n.name)||"",(null==n||null===(i=n.pubkey_prefix)||void 0===i?void 0:i.substring(0,6))||""),this._error?cc(pl||(pl=bl`<div class="error-banner">${0}</div>`),this._error):cc(hl||(hl=bl``)),"chat"===this._activeTab?"active":"",()=>this._activeTab="chat","devices"===this._activeTab?"active":"",()=>this._activeTab="devices","nodes"===this._activeTab?"active":"",()=>this._activeTab="nodes","settings"===this._activeTab?"active":"",()=>this._activeTab="settings",this._renderActivePage(),this._traceDialogOpen,this._traceDialogContactName,this._traceDialogResult,this._traceDialogError,this._contacts.filter(e=>2===e.type||3===e.type||4===e.type),this._traceDialogTargetContact,this._onTraceRequested,()=>{this._traceDialogOpen=!1},this._targetPickerOpen,this._contacts,this._onTargetPicked,()=>{this._targetPickerOpen=!1})}_renderActivePage(){switch(this._activeTab){case"chat":return cc(ul||(ul=bl`
          <meshcore-chat-page
            .hass=${0}
            .config=${0}
            .conversations=${0}
            .unread=${0}
            .selectedId=${0}
            .narrow=${0}
            @active-entity-changed=${0}
            @contacts-changed=${0}
            @channels-changed=${0}></meshcore-chat-page>`),this.hass,this._config,[...this._channels,...this._contacts.filter(e=>e.added_to_node)],this._unread,this._pendingChatTarget,this.narrow,this._onActiveEntityChanged,()=>this._loadDeviceData(),()=>this._loadDeviceData());case"devices":return cc(ml||(ml=bl`
          <meshcore-devices-page
            .hass=${0}
            .config=${0}
            .selectedDevice=${0}
            .narrow=${0}></meshcore-devices-page>`),this.hass,this._config,this._selectedDevice,this.narrow);case"nodes":return cc(gl||(gl=bl`
          <meshcore-nodes-page
            .hass=${0}
            .config=${0}
            .contacts=${0}
            .channels=${0}
            .narrow=${0}
            @node-action=${0}
            @contacts-changed=${0}></meshcore-nodes-page>`),this.hass,this._config,this._contacts,this._channels,this.narrow,this._handleNodeAction,()=>this._loadDeviceData());case"settings":return cc(fl||(fl=bl`
          <meshcore-settings-page
            .hass=${0}
            .config=${0}
            .selectedDevice=${0}
            .narrow=${0}
            @companion-trace-requested=${0}
            @device-renamed=${0}></meshcore-settings-page>`),this.hass,this._config,this._selectedDevice,this.narrow,this._onCompanionTraceRequested,this._onDeviceRenamed)}}_toggleMenu(){this.dispatchEvent(new Event("hass-toggle-menu",{bubbles:!0,composed:!0}))}_deviceEntitySuffix(e){return{prefix:(e.pubkey_prefix||e.pubkey||"").substring(0,6).toLowerCase(),name:(e.name||"").toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"")}}_getNodeStatus(e){if(!this.hass)return null;const{prefix:t,name:i}=this._deviceEntitySuffix(e),n=`sensor.meshcore_${t}_node_status_${i}`,a=this.hass.states[n];return a?a.state:null}_getBatteryLevel(e){if(!this.hass)return null;const{prefix:t,name:i}=this._deviceEntitySuffix(e),n=`sensor.meshcore_${t}_battery_percentage_${i}`,a=this.hass.states[n];if(!a||"unknown"===a.state||"unavailable"===a.state)return null;const o=parseFloat(a.state);return isNaN(o)?null:Math.round(o)}async _loadData(){if(this.hass&&!this._loadingStarted){this._loadingStarted=!0,this._loading=!0,this._error=null;try{var e;const t=await Pc(this.hass);if(this._devices=t,0===t.length)return this._error="No MeshCore devices found",void(this._loading=!1);const i=t.find(e=>e.connected);this._selectedEntryId=(i||t[0]).entry_id;const n=i||t[0];this._config={node_name:n.name,node_prefix:(null===(e=n.pubkey_prefix)||void 0===e?void 0:e.substring(0,6))||"",entry_id:n.entry_id,...jc,...Lc},await this._loadDeviceData(),await this._loadUnreadCounts()}catch(e){const t=e instanceof Error?e.message:String(e);this._error=`Failed to load: ${t}`,console.error("MeshCore panel load error:",e)}finally{this._loading=!1}}}async _loadDeviceData(){if(this.hass&&this._selectedEntryId)try{const[t,i]=await Promise.all([Bc(this.hass,this._selectedEntryId),Hc(this.hass,this._selectedEntryId)]);this._contacts=t,this._channels=i;const n=this._selectedDevice;var e;n&&this._config&&(this._config={...this._config,node_name:n.name,node_prefix:(null===(e=n.pubkey_prefix)||void 0===e?void 0:e.substring(0,6))||"",entry_id:n.entry_id})}catch(e){console.error("Failed to load device data:",e)}}_onActiveEntityChanged(e){var t;this._activeChatEntityId=(null===(t=e.detail)||void 0===t?void 0:t.entityId)||null}async _onDeviceRenamed(){if(this.hass)try{this._devices=await Pc(this.hass);const t=this._selectedDevice;var e;t&&this._config&&(this._config={...this._config,node_name:t.name,node_prefix:(null===(e=t.pubkey_prefix)||void 0===e?void 0:e.substring(0,6))||"",entry_id:t.entry_id})}catch(e){console.error("Failed to refresh devices after rename:",e)}}async _loadUnreadCounts(){if(this.hass)try{const e=await async function(e,t){try{const i={type:"meshcore_chat/get_unread_counts"};t&&(i.entry_id=t);const n=await e.callWS(i);return{unread:n.unread||{},last_read:n.last_read||{}}}catch(e){return{unread:{},last_read:{}}}}(this.hass,this._selectedEntryId||void 0);this._unread.ingestBackendData(e,this._activeChatEntityId)}catch(e){}}_handleMarkReadRequested(e){e&&this.hass&&(async function(e,t,i){try{const n={type:"meshcore_chat/mark_conversation_read",entity_id:t};return i&&(n.entry_id=i),await e.callWS(n)}catch(e){return{success:!1}}}(this.hass,e,this._selectedEntryId||void 0).catch(()=>{}),this._unread.clearEntity(e),this._loadUnreadCounts())}async _handleNodeAction(e){const{action:t,node:i}=e.detail;if(!this.hass||!i)return;const n=i.public_key||"",a=i.pubkey_prefix||"",o=this._selectedEntryId||void 0;switch(t){case"message":a&&(this._pendingChatTarget=a,this._activeTab="chat");break;case"remove-contact":if(n)try{await Xc(this.hass,n,o),await this._loadDeviceData(),await this._refreshNodesPageAfterMutation(n)}finally{this._clearNodesPagePending()}break;case"add-contact":if(n)try{await Gc(this.hass,n,i.adv_name||void 0,o),await this._loadDeviceData(),await this._refreshNodesPageAfterMutation(n)}finally{this._clearNodesPagePending()}break;case"trace":a&&(this._traceDialogPubkeyPrefix=a,this._traceDialogEntryId=o,this._traceDialogContactName=i.adv_name||a,this._traceDialogTargetContact="adv_name"in i?i:null,this._traceDialogResult=null,this._traceDialogError="",this._traceDialogOpen=!0);break;case"delete":case"remove":n&&(await Xc(this.hass,n,o),await this._loadDeviceData());break;default:console.warn("Unhandled node action:",t)}}async _refreshNodesPageAfterMutation(e){var t;const i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("meshcore-nodes-page");if(i&&"function"==typeof i.refreshAfterMutation)try{await i.refreshAfterMutation(e)}catch(e){console.error("Failed to refresh nodes-page after mutation:",e)}}_clearNodesPagePending(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("meshcore-nodes-page");t&&"function"==typeof t.clearPendingAction&&t.clearPendingAction()}};sh.styles=[Tc,Cl(vl||(vl=bl`
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
    `))],yl([Dc({type:Object})],sh.prototype,"hass",void 0),yl([Dc({type:Boolean,reflect:!0})],sh.prototype,"narrow",void 0),yl([Dc({type:Object})],sh.prototype,"panel",void 0),yl([qc()],sh.prototype,"_config",void 0),yl([qc()],sh.prototype,"_activeTab",void 0),yl([qc()],sh.prototype,"_devices",void 0),yl([qc()],sh.prototype,"_contacts",void 0),yl([qc()],sh.prototype,"_channels",void 0),yl([qc()],sh.prototype,"_selectedEntryId",void 0),yl([qc()],sh.prototype,"_loading",void 0),yl([qc()],sh.prototype,"_loadingStarted",void 0),yl([qc()],sh.prototype,"_error",void 0),yl([qc()],sh.prototype,"_unsubscribeList",void 0),yl([qc()],sh.prototype,"_pendingChatTarget",void 0),yl([qc()],sh.prototype,"_deviceDropdownOpen",void 0),yl([qc()],sh.prototype,"_traceDialogOpen",void 0),yl([qc()],sh.prototype,"_traceDialogContactName",void 0),yl([qc()],sh.prototype,"_traceDialogResult",void 0),yl([qc()],sh.prototype,"_traceDialogError",void 0),yl([qc()],sh.prototype,"_traceDialogPubkeyPrefix",void 0),yl([qc()],sh.prototype,"_traceDialogEntryId",void 0),yl([qc()],sh.prototype,"_traceDialogTargetContact",void 0),yl([qc()],sh.prototype,"_targetPickerOpen",void 0),yl([qc()],sh.prototype,"_pendingTraceEntryId",void 0),sh=yl([Rc("meshcore-chat-panel")],sh);export{sh as MeshCorePanel};
