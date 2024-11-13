/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 927:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;
__webpack_unused_export__ = ({value:!0});var A=__webpack_require__(21);class C extends A.InteractiveSignerProvider{constructor(){super(...arguments),this.enableIfConnected=async I=>{if(await this.isPreauthorized(I))return await super.enable(I)}}}function n(i){return`alephiumProviders/${i}#initialized`}const t={id:"alephium",name:"Alephium",icon:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgd2lkdGg9IjEwMCUiCiAgIGhlaWdodD0iMTAwJSIKICAgdmlld0JveD0iMCAwIDUxMiA1MTIiCiAgIHZlcnNpb249IjEuMSIKICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyIKICAgaWQ9InN2Zzk4ODQiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnMKICAgaWQ9ImRlZnMxMCIgLz4KICAgIDxnCiAgIGlkPSJnMTAwNyI+PHJlY3QKICAgICB4PSIwIgogICAgIHk9IjAiCiAgICAgd2lkdGg9IjUxMi4wMDA2MSIKICAgICBoZWlnaHQ9IjUxMS45OTk5MSIKICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZS13aWR0aDowLjM1NTU1NiIKICAgICBpZD0icmVjdDk4NjUiIC8+PHBhdGgKICAgICBkPSJtIDIyMi44MjMyLDMwOS43OTQxMSBjIDAsLTQuMzYxMjQgLTMuNDQ2NzgsLTcuMjk4MzIgLTcuNzA0NTgsLTYuNTQ3NjYgbCAtNTAuODkwNzksOC45NzIwOSBjIC00LjI1Nzc5LDAuNzUwNjUgLTcuNzA0NTgsNC45MDMwOCAtNy43MDQ1OCw5LjI2NDMxIHYgOTYuMjM1OTggYyAwLDQuMzcxMTkgMy40NDY3OSw3LjMwODI3IDcuNzA0NTgsNi41NTc2MSBsIDUwLjg5MDc5LC04Ljk3MjA5IGMgNC4yNTc4LC0wLjc1MDY1IDcuNzA0NTgsLTQuOTAzMDggNy43MDQ1OCwtOS4yNzQyNyB6IgogICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlLXdpZHRoOjEuMDA0NyIKICAgICBpZD0icGF0aDk4NjciIC8+PHBhdGgKICAgICBkPSJtIDM1NS4zODYyLDk0LjMwNTMwNCBjIDAsLTQuMzYxMjM3IC0zLjQ0Njc4LC03LjI5ODMxNSAtNy43MDQ1OCwtNi41NDc2NjIgbCAtNTAuODkwNzksOC45NzIwOTUgYyAtNC4yNTc3OSwwLjc1MDY1MyAtNy43MDQ1OCw0LjkwMzA3MyAtNy43MDQ1OCw5LjI2NDMxMyB2IDk2LjIzNTk3IGMgMCw0LjM3MTIgMy40NDY3OSw3LjMwODI3IDcuNzA0NTgsNi41NTc2MiBsIDUwLjg5MDc5LC04Ljk3MjA5IGMgNC4yNTc4LC0wLjc1MDY2IDcuNzA0NTgsLTQuOTAzMDggNy43MDQ1OCwtOS4yNzQyNyB6IgogICAgIHN0eWxlPSJmaWxsOiNmZjVkNTE7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlLXdpZHRoOjEuMDA0NyIKICAgICBpZD0icGF0aDk4NzEiIC8+PHBhdGgKICAgICBkPSJtIDIzMS4wODk3OSwxMTYuNzY3NDEgYyAtMS45NjU1NSwtNC4zMjkwNSAtNy4yNDkxNiwtNy4xODEyNiAtMTEuODExMDgsLTYuMzc2OTkgbCAtNTQuNTI1NzgsOS42MTI5NiBjIC00LjU2MTkyLDAuODA0MjcgLTYuNjY0MjgsNC45NTg2MyAtNC42OTg3Miw5LjI4NzY4IGwgMTIwLjczOTcxLDI2NS45MjQxMiBjIDEuOTY1NTYsNC4zMjkwNiA3LjI2MDUzLDcuMjA2MjggMTEuODIyNDQsNi40MDIwMSBsIDU0LjUyNTc5LC05LjYxMjk1IGMgNC41NjE5MiwtMC44MDQyNyA2LjY1MjkxLC00Ljk4MzY1IDQuNjg3MzYsLTkuMzEyNzEgeiIKICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZS13aWR0aDoxLjcxMzM0IgogICAgIGlkPSJwYXRoOTg3NSIgLz48L2c+Cjwvc3ZnPgo=",downloads:{chrome:"https://chrome.google.com/webstore/detail/alephium-extension-wallet",firefox:"https://addons.mozilla.org/en-US/firefox/addon/alephium-extension-wallet"}},g=[t];function c(i,I){return i.id===I.id&&i.name===I.name}function N(i){return new Promise(I=>{const e=()=>{const M=s(i.id);M&&c(M,i)&&I(M)};window.addEventListener(n(i.id),e),e(),setTimeout(()=>I(void 0),5e3)})}function s(i){try{const I=window.alephiumProviders;if(!I)return;const e=I[i];return D(e)?e:void 0}catch{}}function D(i){try{return i&&["id","name","icon","unsafeEnable","isPreauthorized","nodeProvider","explorerProvider","signAndSubmitTransferTx","signAndSubmitDeployContractTx","signAndSubmitExecuteScriptTx","signAndSubmitUnsignedTx","signUnsignedTx","signMessage"].every(I=>I in i)}catch{}return!1}__webpack_unused_export__=C,__webpack_unused_export__=t,__webpack_unused_export__=c,exports.Ce=function(){return N(t)},__webpack_unused_export__=N,__webpack_unused_export__=s,__webpack_unused_export__=D,__webpack_unused_export__=g,__webpack_unused_export__=n,__webpack_unused_export__=async function(){const i=[];for(const I of g){const e=await N(I);e!==void 0&&i.push(e)}return i};


/***/ }),

/***/ 21:
/***/ ((module) => {

/*! For license information please see alephium-web3.min.js.LICENSE.txt */
!function(e,t){ true?module.exports=t():0}(self,(()=>(()=>{var e={9695:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.utils=t.schnorr=t.verify=t.signSync=t.sign=t.getSharedSecret=t.recoverPublicKey=t.getPublicKey=t.Signature=t.Point=t.CURVE=void 0;const n=r(7998),i=BigInt(0),o=BigInt(1),s=BigInt(2),a=BigInt(3),c=BigInt(8),u=Object.freeze({a:i,b:BigInt(7),P:BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),n:BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),h:o,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee")});t.CURVE=u;const d=(e,t)=>(e+t/s)/t,f={beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar(e){const{n:t}=u,r=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),n=-o*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),i=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),s=r,a=BigInt("0x100000000000000000000000000000000"),c=d(s*e,t),f=d(-n*e,t);let h=D(e-c*r-f*i,t),l=D(-c*n-f*s,t);const p=h>a,b=l>a;if(p&&(h=t-h),b&&(l=t-l),h>a||l>a)throw new Error("splitScalarEndo: Endomorphism failed, k="+e);return{k1neg:p,k1:h,k2neg:b,k2:l}}},h=32,l=32,p=h+1,b=2*h+1;function y(e){const{a:t,b:r}=u,n=D(e*e),i=D(n*e);return D(i+t*e+r)}const m=u.a===i;class g extends Error{constructor(e){super(e)}}function v(e){if(!(e instanceof w))throw new TypeError("JacobianPoint expected")}class w{constructor(e,t,r){this.x=e,this.y=t,this.z=r}static fromAffine(e){if(!(e instanceof S))throw new TypeError("JacobianPoint#fromAffine: expected Point");return e.equals(S.ZERO)?w.ZERO:new w(e.x,e.y,o)}static toAffineBatch(e){const t=function(e,t=u.P){const r=new Array(e.length),n=H(e.reduce(((e,n,o)=>n===i?e:(r[o]=e,D(e*n,t))),o),t);return e.reduceRight(((e,n,o)=>n===i?e:(r[o]=D(e*r[o],t),D(e*n,t))),n),r}(e.map((e=>e.z)));return e.map(((e,r)=>e.toAffine(t[r])))}static normalizeZ(e){return w.toAffineBatch(e).map(w.fromAffine)}equals(e){v(e);const{x:t,y:r,z:n}=this,{x:i,y:o,z:s}=e,a=D(n*n),c=D(s*s),u=D(t*c),d=D(i*a),f=D(D(r*s)*c),h=D(D(o*n)*a);return u===d&&f===h}negate(){return new w(this.x,D(-this.y),this.z)}double(){const{x:e,y:t,z:r}=this,n=D(e*e),i=D(t*t),o=D(i*i),u=e+i,d=D(s*(D(u*u)-n-o)),f=D(a*n),h=D(f*f),l=D(h-s*d),p=D(f*(d-l)-c*o),b=D(s*t*r);return new w(l,p,b)}add(e){v(e);const{x:t,y:r,z:n}=this,{x:o,y:a,z:c}=e;if(o===i||a===i)return this;if(t===i||r===i)return e;const u=D(n*n),d=D(c*c),f=D(t*d),h=D(o*u),l=D(D(r*c)*d),p=D(D(a*n)*u),b=D(h-f),y=D(p-l);if(b===i)return y===i?this.double():w.ZERO;const m=D(b*b),g=D(b*m),_=D(f*m),A=D(y*y-g-s*_),S=D(y*(_-A)-l*g),M=D(n*c*b);return new w(A,S,M)}subtract(e){return this.add(e.negate())}multiplyUnsafe(e){const t=w.ZERO;if("bigint"==typeof e&&e===i)return t;let r=j(e);if(r===o)return this;if(!m){let e=t,n=this;for(;r>i;)r&o&&(e=e.add(n)),n=n.double(),r>>=o;return e}let{k1neg:n,k1:s,k2neg:a,k2:c}=f.splitScalar(r),u=t,d=t,h=this;for(;s>i||c>i;)s&o&&(u=u.add(h)),c&o&&(d=d.add(h)),h=h.double(),s>>=o,c>>=o;return n&&(u=u.negate()),a&&(d=d.negate()),d=new w(D(d.x*f.beta),d.y,d.z),u.add(d)}precomputeWindow(e){const t=m?128/e+1:256/e+1,r=[];let n=this,i=n;for(let o=0;o<t;o++){i=n,r.push(i);for(let t=1;t<2**(e-1);t++)i=i.add(n),r.push(i);n=i.double()}return r}wNAF(e,t){!t&&this.equals(w.BASE)&&(t=S.BASE);const r=t&&t._WINDOW_SIZE||1;if(256%r)throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");let n=t&&A.get(t);n||(n=this.precomputeWindow(r),t&&1!==r&&(n=w.normalizeZ(n),A.set(t,n)));let i=w.ZERO,s=w.BASE;const a=1+(m?128/r:256/r),c=2**(r-1),u=BigInt(2**r-1),d=2**r,f=BigInt(r);for(let t=0;t<a;t++){const r=t*c;let a=Number(e&u);e>>=f,a>c&&(a-=d,e+=o);const h=r,l=r+Math.abs(a)-1,p=t%2!=0,b=a<0;0===a?s=s.add(_(p,n[h])):i=i.add(_(b,n[l]))}return{p:i,f:s}}multiply(e,t){let r,n,i=j(e);if(m){const{k1neg:e,k1:o,k2neg:s,k2:a}=f.splitScalar(i);let{p:c,f:u}=this.wNAF(o,t),{p:d,f:h}=this.wNAF(a,t);c=_(e,c),d=_(s,d),d=new w(D(d.x*f.beta),d.y,d.z),r=c.add(d),n=u.add(h)}else{const{p:e,f:o}=this.wNAF(i,t);r=e,n=o}return w.normalizeZ([r,n])[0]}toAffine(e){const{x:t,y:r,z:n}=this,i=this.equals(w.ZERO);null==e&&(e=i?c:H(n));const s=e,a=D(s*s),u=D(a*s),d=D(t*a),f=D(r*u),h=D(n*s);if(i)return S.ZERO;if(h!==o)throw new Error("invZ was invalid");return new S(d,f)}}function _(e,t){const r=t.negate();return e?r:t}w.BASE=new w(u.Gx,u.Gy,o),w.ZERO=new w(i,o,i);const A=new WeakMap;class S{constructor(e,t){this.x=e,this.y=t}_setWindowSize(e){this._WINDOW_SIZE=e,A.delete(this)}hasEvenY(){return this.y%s===i}static fromCompressedHex(e){const t=32===e.length,r=L(t?e:e.subarray(1));if(!K(r))throw new Error("Point is not on curve");let n=function(e){const{P:t}=u,r=BigInt(6),n=BigInt(11),i=BigInt(22),o=BigInt(23),c=BigInt(44),d=BigInt(88),f=e*e*e%t,h=f*f*e%t,l=F(h,a)*h%t,p=F(l,a)*h%t,b=F(p,s)*f%t,y=F(b,n)*b%t,m=F(y,i)*y%t,g=F(m,c)*m%t,v=F(g,d)*g%t,w=F(v,c)*m%t,_=F(w,a)*h%t,A=F(_,o)*y%t,S=F(A,r)*f%t,M=F(S,s);if(M*M%t!==e)throw new Error("Cannot find square root");return M}(y(r));const i=(n&o)===o;t?i&&(n=D(-n)):!(1&~e[0])!==i&&(n=D(-n));const c=new S(r,n);return c.assertValidity(),c}static fromUncompressedHex(e){const t=L(e.subarray(1,h+1)),r=L(e.subarray(h+1,2*h+1)),n=new S(t,r);return n.assertValidity(),n}static fromHex(e){const t=N(e),r=t.length,n=t[0];if(r===h)return this.fromCompressedHex(t);if(r===p&&(2===n||3===n))return this.fromCompressedHex(t);if(r===b&&4===n)return this.fromUncompressedHex(t);throw new Error(`Point.fromHex: received invalid point. Expected 32-${p} compressed bytes or ${b} uncompressed bytes, not ${r}`)}static fromPrivateKey(e){return S.BASE.multiply(J(e))}static fromSignature(e,t,r){const{r:n,s:i}=X(t);if(![0,1,2,3].includes(r))throw new Error("Cannot recover: invalid recovery bit");const o=q(N(e)),{n:s}=u,a=2===r||3===r?n+s:n,c=H(a,s),d=D(-o*c,s),f=D(i*c,s),h=1&r?"03":"02",l=S.fromHex(h+B(a)),p=S.BASE.multiplyAndAddUnsafe(l,d,f);if(!p)throw new Error("Cannot recover signature: point at infinify");return p.assertValidity(),p}toRawBytes(e=!1){return R(this.toHex(e))}toHex(e=!1){const t=B(this.x);return e?`${this.hasEvenY()?"02":"03"}${t}`:`04${t}${B(this.y)}`}toHexX(){return this.toHex(!0).slice(2)}toRawX(){return this.toRawBytes(!0).slice(1)}assertValidity(){const e="Point is not on elliptic curve",{x:t,y:r}=this;if(!K(t)||!K(r))throw new Error(e);const n=D(r*r);if(D(n-y(t))!==i)throw new Error(e)}equals(e){return this.x===e.x&&this.y===e.y}negate(){return new S(this.x,D(-this.y))}double(){return w.fromAffine(this).double().toAffine()}add(e){return w.fromAffine(this).add(w.fromAffine(e)).toAffine()}subtract(e){return this.add(e.negate())}multiply(e){return w.fromAffine(this).multiply(e,this).toAffine()}multiplyAndAddUnsafe(e,t,r){const n=w.fromAffine(this),s=t===i||t===o||this!==S.BASE?n.multiplyUnsafe(t):n.multiply(t),a=w.fromAffine(e).multiplyUnsafe(r),c=s.add(a);return c.equals(w.ZERO)?void 0:c.toAffine()}}function M(e){return Number.parseInt(e[0],16)>=8?"00"+e:e}function C(e){if(e.length<2||2!==e[0])throw new Error(`Invalid signature integer tag: ${I(e)}`);const t=e[1],r=e.subarray(2,t+2);if(!t||r.length!==t)throw new Error("Invalid signature integer: wrong length");if(0===r[0]&&r[1]<=127)throw new Error("Invalid signature integer: trailing length");return{data:L(r),left:e.subarray(t+2)}}t.Point=S,S.BASE=new S(u.Gx,u.Gy),S.ZERO=new S(i,i);class T{constructor(e,t){this.r=e,this.s=t,this.assertValidity()}static fromCompact(e){const t=e instanceof Uint8Array,r="Signature.fromCompact";if("string"!=typeof e&&!t)throw new TypeError(`${r}: Expected string or Uint8Array`);const n=t?I(e):e;if(128!==n.length)throw new Error(`${r}: Expected 64-byte hex`);return new T(O(n.slice(0,64)),O(n.slice(64,128)))}static fromDER(e){const t=e instanceof Uint8Array;if("string"!=typeof e&&!t)throw new TypeError("Signature.fromDER: Expected string or Uint8Array");const{r,s:n}=function(e){if(e.length<2||48!=e[0])throw new Error(`Invalid signature tag: ${I(e)}`);if(e[1]!==e.length-2)throw new Error("Invalid signature: incorrect length");const{data:t,left:r}=C(e.subarray(2)),{data:n,left:i}=C(r);if(i.length)throw new Error(`Invalid signature: left bytes after parsing: ${I(i)}`);return{r:t,s:n}}(t?e:R(e));return new T(r,n)}static fromHex(e){return this.fromDER(e)}assertValidity(){const{r:e,s:t}=this;if(!G(e))throw new Error("Invalid Signature: r must be 0 < r < n");if(!G(t))throw new Error("Invalid Signature: s must be 0 < s < n")}hasHighS(){const e=u.n>>o;return this.s>e}normalizeS(){return this.hasHighS()?new T(this.r,D(-this.s,u.n)):this}toDERRawBytes(){return R(this.toDERHex())}toDERHex(){const e=M(P(this.s)),t=M(P(this.r)),r=e.length/2,n=t.length/2,i=P(r),o=P(n);return`30${P(n+r+4)}02${o}${t}02${i}${e}`}toRawBytes(){return this.toDERRawBytes()}toHex(){return this.toDERHex()}toCompactRawBytes(){return R(this.toCompactHex())}toCompactHex(){return B(this.r)+B(this.s)}}function E(...e){if(!e.every((e=>e instanceof Uint8Array)))throw new Error("Uint8Array list expected");if(1===e.length)return e[0];const t=e.reduce(((e,t)=>e+t.length),0),r=new Uint8Array(t);for(let t=0,n=0;t<e.length;t++){const i=e[t];r.set(i,n),n+=i.length}return r}t.Signature=T;const k=Array.from({length:256},((e,t)=>t.toString(16).padStart(2,"0")));function I(e){if(!(e instanceof Uint8Array))throw new Error("Expected Uint8Array");let t="";for(let r=0;r<e.length;r++)t+=k[e[r]];return t}const x=BigInt("0x10000000000000000000000000000000000000000000000000000000000000000");function B(e){if("bigint"!=typeof e)throw new Error("Expected bigint");if(!(i<=e&&e<x))throw new Error("Expected number 0 <= n < 2^256");return e.toString(16).padStart(64,"0")}function U(e){const t=R(B(e));if(32!==t.length)throw new Error("Error: expected 32 bytes");return t}function P(e){const t=e.toString(16);return 1&t.length?`0${t}`:t}function O(e){if("string"!=typeof e)throw new TypeError("hexToNumber: expected string, got "+typeof e);return BigInt(`0x${e}`)}function R(e){if("string"!=typeof e)throw new TypeError("hexToBytes: expected string, got "+typeof e);if(e.length%2)throw new Error("hexToBytes: received invalid unpadded hex"+e.length);const t=new Uint8Array(e.length/2);for(let r=0;r<t.length;r++){const n=2*r,i=e.slice(n,n+2),o=Number.parseInt(i,16);if(Number.isNaN(o)||o<0)throw new Error("Invalid byte sequence");t[r]=o}return t}function L(e){return O(I(e))}function N(e){return e instanceof Uint8Array?Uint8Array.from(e):R(e)}function j(e){if("number"==typeof e&&Number.isSafeInteger(e)&&e>0)return BigInt(e);if("bigint"==typeof e&&G(e))return e;throw new TypeError("Expected valid private scalar: 0 < scalar < curve.n")}function D(e,t=u.P){const r=e%t;return r>=i?r:t+r}function F(e,t){const{P:r}=u;let n=e;for(;t-- >i;)n*=n,n%=r;return n}function H(e,t=u.P){if(e===i||t<=i)throw new Error(`invert: expected positive integers, got n=${e} mod=${t}`);let r=D(e,t),n=t,s=i,a=o,c=o,d=i;for(;r!==i;){const e=n/r,t=n%r,i=s-c*e,o=a-d*e;n=r,r=t,s=c,a=d,c=i,d=o}if(n!==o)throw new Error("invert: does not exist");return D(s,t)}function q(e,t=!1){const r=function(e){const t=8*e.length-8*l,r=L(e);return t>0?r>>BigInt(t):r}(e);if(t)return r;const{n}=u;return r>=n?r-n:r}let $,V;class z{constructor(e,t){if(this.hashLen=e,this.qByteLen=t,"number"!=typeof e||e<2)throw new Error("hashLen must be a number");if("number"!=typeof t||t<2)throw new Error("qByteLen must be a number");this.v=new Uint8Array(e).fill(1),this.k=new Uint8Array(e).fill(0),this.counter=0}hmac(...e){return t.utils.hmacSha256(this.k,...e)}hmacSync(...e){return V(this.k,...e)}checkSync(){if("function"!=typeof V)throw new g("hmacSha256Sync needs to be set")}incr(){if(this.counter>=1e3)throw new Error("Tried 1,000 k values for sign(), all were invalid");this.counter+=1}async reseed(e=new Uint8Array){this.k=await this.hmac(this.v,Uint8Array.from([0]),e),this.v=await this.hmac(this.v),0!==e.length&&(this.k=await this.hmac(this.v,Uint8Array.from([1]),e),this.v=await this.hmac(this.v))}reseedSync(e=new Uint8Array){this.checkSync(),this.k=this.hmacSync(this.v,Uint8Array.from([0]),e),this.v=this.hmacSync(this.v),0!==e.length&&(this.k=this.hmacSync(this.v,Uint8Array.from([1]),e),this.v=this.hmacSync(this.v))}async generate(){this.incr();let e=0;const t=[];for(;e<this.qByteLen;){this.v=await this.hmac(this.v);const r=this.v.slice();t.push(r),e+=this.v.length}return E(...t)}generateSync(){this.checkSync(),this.incr();let e=0;const t=[];for(;e<this.qByteLen;){this.v=this.hmacSync(this.v);const r=this.v.slice();t.push(r),e+=this.v.length}return E(...t)}}function G(e){return i<e&&e<u.n}function K(e){return i<e&&e<u.P}function W(e,t,r,n=!0){const{n:s}=u,a=q(e,!0);if(!G(a))return;const c=H(a,s),d=S.BASE.multiply(a),f=D(d.x,s);if(f===i)return;const h=D(c*D(t+r*f,s),s);if(h===i)return;let l=new T(f,h),p=(d.x===l.r?0:2)|Number(d.y&o);return n&&l.hasHighS()&&(l=l.normalizeS(),p^=1),{sig:l,recovery:p}}function J(e){let t;if("bigint"==typeof e)t=e;else if("number"==typeof e&&Number.isSafeInteger(e)&&e>0)t=BigInt(e);else if("string"==typeof e){if(e.length!==2*l)throw new Error("Expected 32 bytes of private key");t=O(e)}else{if(!(e instanceof Uint8Array))throw new TypeError("Expected valid private key");if(e.length!==l)throw new Error("Expected 32 bytes of private key");t=L(e)}if(!G(t))throw new Error("Expected private key: 0 < key < n");return t}function Z(e){return e instanceof S?(e.assertValidity(),e):S.fromHex(e)}function X(e){if(e instanceof T)return e.assertValidity(),e;try{return T.fromDER(e)}catch(t){return T.fromCompact(e)}}function Y(e){const t=e instanceof Uint8Array,r="string"==typeof e,n=(t||r)&&e.length;return t?n===p||n===b:r?n===2*p||n===2*b:e instanceof S}function Q(e){return L(e.length>h?e.slice(0,h):e)}function ee(e){const t=Q(e),r=D(t,u.n);return te(r<i?t:r)}function te(e){return U(e)}function re(e,r,n){if(null==e)throw new Error(`sign: expected valid message hash, not "${e}"`);const i=N(e),o=J(r),s=[te(o),ee(i)];if(null!=n){!0===n&&(n=t.utils.randomBytes(h));const e=N(n);if(e.length!==h)throw new Error(`sign: Expected ${h} bytes of extra data`);s.push(e)}return{seed:E(...s),m:Q(i),d:o}}function ne(e,t){const{sig:r,recovery:n}=e,{der:i,recovered:o}=Object.assign({canonical:!0,der:!0},t),s=i?r.toDERRawBytes():r.toCompactRawBytes();return o?[s,n]:s}t.getPublicKey=function(e,t=!1){return S.fromPrivateKey(e).toRawBytes(t)},t.recoverPublicKey=function(e,t,r,n=!1){return S.fromSignature(e,t,r).toRawBytes(n)},t.getSharedSecret=function(e,t,r=!1){if(Y(e))throw new TypeError("getSharedSecret: first arg must be private key");if(!Y(t))throw new TypeError("getSharedSecret: second arg must be public key");const n=Z(t);return n.assertValidity(),n.multiply(J(e)).toRawBytes(r)},t.sign=async function(e,t,r={}){const{seed:n,m:i,d:o}=re(e,t,r.extraEntropy),s=new z(32,l);let a;for(await s.reseed(n);!(a=W(await s.generate(),i,o,r.canonical));)await s.reseed();return ne(a,r)},t.signSync=function(e,t,r={}){const{seed:n,m:i,d:o}=re(e,t,r.extraEntropy),s=new z(32,l);let a;for(s.reseedSync(n);!(a=W(s.generateSync(),i,o,r.canonical));)s.reseedSync();return ne(a,r)};const ie={strict:!0};function oe(e){return D(L(e),u.n)}t.verify=function(e,t,r,n=ie){let i;try{i=X(e),t=N(t)}catch(e){return!1}const{r:o,s}=i;if(n.strict&&i.hasHighS())return!1;const a=q(t);let c;try{c=Z(r)}catch(e){return!1}const{n:d}=u,f=H(s,d),h=D(a*f,d),l=D(o*f,d),p=S.BASE.multiplyAndAddUnsafe(c,h,l);return!!p&&D(p.x,d)===o};class se{constructor(e,t){this.r=e,this.s=t,this.assertValidity()}static fromHex(e){const t=N(e);if(64!==t.length)throw new TypeError(`SchnorrSignature.fromHex: expected 64 bytes, not ${t.length}`);const r=L(t.subarray(0,32)),n=L(t.subarray(32,64));return new se(r,n)}assertValidity(){const{r:e,s:t}=this;if(!K(e)||!G(t))throw new Error("Invalid signature")}toHex(){return B(this.r)+B(this.s)}toRawBytes(){return R(this.toHex())}}class ae{constructor(e,r,n=t.utils.randomBytes()){if(null==e)throw new TypeError(`sign: Expected valid message, not "${e}"`);this.m=N(e);const{x:i,scalar:o}=this.getScalar(J(r));if(this.px=i,this.d=o,this.rand=N(n),32!==this.rand.length)throw new TypeError("sign: Expected 32 bytes of aux randomness")}getScalar(e){const t=S.fromPrivateKey(e),r=t.hasEvenY()?e:u.n-e;return{point:t,scalar:r,x:t.toRawX()}}initNonce(e,t){return U(e^L(t))}finalizeNonce(e){const t=D(L(e),u.n);if(t===i)throw new Error("sign: Creation of signature failed. k is zero");const{point:r,x:n,scalar:o}=this.getScalar(t);return{R:r,rx:n,k:o}}finalizeSig(e,t,r,n){return new se(e.x,D(t+r*n,u.n)).toRawBytes()}error(){throw new Error("sign: Invalid signature produced")}async calc(){const{m:e,d:r,px:n,rand:i}=this,o=t.utils.taggedHash,s=this.initNonce(r,await o(le.aux,i)),{R:a,rx:c,k:u}=this.finalizeNonce(await o(le.nonce,s,n,e)),d=oe(await o(le.challenge,c,n,e)),f=this.finalizeSig(a,u,d,r);return await de(f,e,n)||this.error(),f}calcSync(){const{m:e,d:r,px:n,rand:i}=this,o=t.utils.taggedHashSync,s=this.initNonce(r,o(le.aux,i)),{R:a,rx:c,k:u}=this.finalizeNonce(o(le.nonce,s,n,e)),d=oe(o(le.challenge,c,n,e)),f=this.finalizeSig(a,u,d,r);return fe(f,e,n)||this.error(),f}}function ce(e,t,r){const n=e instanceof se,i=n?e:se.fromHex(e);return n&&i.assertValidity(),{...i,m:N(t),P:Z(r)}}function ue(e,t,r,n){const i=S.BASE.multiplyAndAddUnsafe(t,J(r),D(-n,u.n));return!(!i||!i.hasEvenY()||i.x!==e)}async function de(e,r,n){try{const{r:i,s:o,m:s,P:a}=ce(e,r,n),c=oe(await t.utils.taggedHash(le.challenge,U(i),a.toRawX(),s));return ue(i,a,o,c)}catch(e){return!1}}function fe(e,r,n){try{const{r:i,s:o,m:s,P:a}=ce(e,r,n),c=oe(t.utils.taggedHashSync(le.challenge,U(i),a.toRawX(),s));return ue(i,a,o,c)}catch(e){if(e instanceof g)throw e;return!1}}t.schnorr={Signature:se,getPublicKey:function(e){return S.fromPrivateKey(e).toRawX()},sign:async function(e,t,r){return new ae(e,t,r).calc()},verify:de,signSync:function(e,t,r){return new ae(e,t,r).calcSync()},verifySync:fe},S.BASE._setWindowSize(8);const he={node:n,web:"object"==typeof self&&"crypto"in self?self.crypto:void 0},le={challenge:"BIP0340/challenge",aux:"BIP0340/aux",nonce:"BIP0340/nonce"},pe={};t.utils={bytesToHex:I,hexToBytes:R,concatBytes:E,mod:D,invert:H,isValidPrivateKey(e){try{return J(e),!0}catch(e){return!1}},_bigintTo32Bytes:U,_normalizePrivateKey:J,hashToPrivateKey:e=>{e=N(e);const t=l+8;if(e.length<t||e.length>1024)throw new Error("Expected valid bytes of private key as per FIPS 186");return U(D(L(e),u.n-o)+o)},randomBytes:(e=32)=>{if(he.web)return he.web.getRandomValues(new Uint8Array(e));if(he.node){const{randomBytes:t}=he.node;return Uint8Array.from(t(e))}throw new Error("The environment doesn't have randomBytes function")},randomPrivateKey:()=>t.utils.hashToPrivateKey(t.utils.randomBytes(l+8)),precompute(e=8,t=S.BASE){const r=t===S.BASE?t:new S(t.x,t.y);return r._setWindowSize(e),r.multiply(a),r},sha256:async(...e)=>{if(he.web){const t=await he.web.subtle.digest("SHA-256",E(...e));return new Uint8Array(t)}if(he.node){const{createHash:t}=he.node,r=t("sha256");return e.forEach((e=>r.update(e))),Uint8Array.from(r.digest())}throw new Error("The environment doesn't have sha256 function")},hmacSha256:async(e,...t)=>{if(he.web){const r=await he.web.subtle.importKey("raw",e,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),n=E(...t),i=await he.web.subtle.sign("HMAC",r,n);return new Uint8Array(i)}if(he.node){const{createHmac:r}=he.node,n=r("sha256",e);return t.forEach((e=>n.update(e))),Uint8Array.from(n.digest())}throw new Error("The environment doesn't have hmac-sha256 function")},sha256Sync:void 0,hmacSha256Sync:void 0,taggedHash:async(e,...r)=>{let n=pe[e];if(void 0===n){const r=await t.utils.sha256(Uint8Array.from(e,(e=>e.charCodeAt(0))));n=E(r,r),pe[e]=n}return t.utils.sha256(n,...r)},taggedHashSync:(e,...t)=>{if("function"!=typeof $)throw new g("sha256Sync is undefined, you need to set it");let r=pe[e];if(void 0===r){const t=$(Uint8Array.from(e,(e=>e.charCodeAt(0))));r=E(t,t),pe[e]=r}return $(r,...t)},_JacobianPoint:w},Object.defineProperties(t.utils,{sha256Sync:{configurable:!1,get:()=>$,set(e){$||($=e)}},hmacSha256Sync:{configurable:!1,get:()=>V,set(e){V||(V=e)}}})},5737:(e,t,r)=>{"use strict";const n=t;n.bignum=r(4619),n.define=r(4082).define,n.base=r(7594),n.constants=r(6876),n.decoders=r(5126),n.encoders=r(122)},4082:(e,t,r)=>{"use strict";const n=r(122),i=r(5126),o=r(1193);function s(e,t){this.name=e,this.body=t,this.decoders={},this.encoders={}}t.define=function(e,t){return new s(e,t)},s.prototype._createNamed=function(e){const t=this.name;function r(e){this._initNamed(e,t)}return o(r,e),r.prototype._initNamed=function(t,r){e.call(this,t,r)},new r(this)},s.prototype._getDecoder=function(e){return e=e||"der",this.decoders.hasOwnProperty(e)||(this.decoders[e]=this._createNamed(i[e])),this.decoders[e]},s.prototype.decode=function(e,t,r){return this._getDecoder(t).decode(e,r)},s.prototype._getEncoder=function(e){return e=e||"der",this.encoders.hasOwnProperty(e)||(this.encoders[e]=this._createNamed(n[e])),this.encoders[e]},s.prototype.encode=function(e,t,r){return this._getEncoder(t).encode(e,r)}},3802:(e,t,r)=>{"use strict";const n=r(1193),i=r(8657).a,o=r(1628).Buffer;function s(e,t){i.call(this,t),o.isBuffer(e)?(this.base=e,this.offset=0,this.length=e.length):this.error("Input not Buffer")}function a(e,t){if(Array.isArray(e))this.length=0,this.value=e.map((function(e){return a.isEncoderBuffer(e)||(e=new a(e,t)),this.length+=e.length,e}),this);else if("number"==typeof e){if(!(0<=e&&e<=255))return t.error("non-byte EncoderBuffer value");this.value=e,this.length=1}else if("string"==typeof e)this.value=e,this.length=o.byteLength(e);else{if(!o.isBuffer(e))return t.error("Unsupported type: "+typeof e);this.value=e,this.length=e.length}}n(s,i),t.t=s,s.isDecoderBuffer=function(e){return e instanceof s||"object"==typeof e&&o.isBuffer(e.base)&&"DecoderBuffer"===e.constructor.name&&"number"==typeof e.offset&&"number"==typeof e.length&&"function"==typeof e.save&&"function"==typeof e.restore&&"function"==typeof e.isEmpty&&"function"==typeof e.readUInt8&&"function"==typeof e.skip&&"function"==typeof e.raw},s.prototype.save=function(){return{offset:this.offset,reporter:i.prototype.save.call(this)}},s.prototype.restore=function(e){const t=new s(this.base);return t.offset=e.offset,t.length=this.offset,this.offset=e.offset,i.prototype.restore.call(this,e.reporter),t},s.prototype.isEmpty=function(){return this.offset===this.length},s.prototype.readUInt8=function(e){return this.offset+1<=this.length?this.base.readUInt8(this.offset++,!0):this.error(e||"DecoderBuffer overrun")},s.prototype.skip=function(e,t){if(!(this.offset+e<=this.length))return this.error(t||"DecoderBuffer overrun");const r=new s(this.base);return r._reporterState=this._reporterState,r.offset=this.offset,r.length=this.offset+e,this.offset+=e,r},s.prototype.raw=function(e){return this.base.slice(e?e.offset:this.offset,this.length)},t.d=a,a.isEncoderBuffer=function(e){return e instanceof a||"object"==typeof e&&"EncoderBuffer"===e.constructor.name&&"number"==typeof e.length&&"function"==typeof e.join},a.prototype.join=function(e,t){return e||(e=o.alloc(this.length)),t||(t=0),0===this.length||(Array.isArray(this.value)?this.value.forEach((function(r){r.join(e,t),t+=r.length})):("number"==typeof this.value?e[t]=this.value:"string"==typeof this.value?e.write(this.value,t):o.isBuffer(this.value)&&this.value.copy(e,t),t+=this.length)),e}},7594:(e,t,r)=>{"use strict";const n=t;n.Reporter=r(8657).a,n.DecoderBuffer=r(3802).t,n.EncoderBuffer=r(3802).d,n.Node=r(2144)},2144:(e,t,r)=>{"use strict";const n=r(8657).a,i=r(3802).d,o=r(3802).t,s=r(5578),a=["seq","seqof","set","setof","objid","bool","gentime","utctime","null_","enum","int","objDesc","bitstr","bmpstr","charstr","genstr","graphstr","ia5str","iso646str","numstr","octstr","printstr","t61str","unistr","utf8str","videostr"],c=["key","obj","use","optional","explicit","implicit","def","choice","any","contains"].concat(a);function u(e,t,r){const n={};this._baseState=n,n.name=r,n.enc=e,n.parent=t||null,n.children=null,n.tag=null,n.args=null,n.reverseArgs=null,n.choice=null,n.optional=!1,n.any=!1,n.obj=!1,n.use=null,n.useDecoder=null,n.key=null,n.default=null,n.explicit=null,n.implicit=null,n.contains=null,n.parent||(n.children=[],this._wrap())}e.exports=u;const d=["enc","parent","children","tag","args","reverseArgs","choice","optional","any","obj","use","alteredUse","key","default","explicit","implicit","contains"];u.prototype.clone=function(){const e=this._baseState,t={};d.forEach((function(r){t[r]=e[r]}));const r=new this.constructor(t.parent);return r._baseState=t,r},u.prototype._wrap=function(){const e=this._baseState;c.forEach((function(t){this[t]=function(){const r=new this.constructor(this);return e.children.push(r),r[t].apply(r,arguments)}}),this)},u.prototype._init=function(e){const t=this._baseState;s(null===t.parent),e.call(this),t.children=t.children.filter((function(e){return e._baseState.parent===this}),this),s.equal(t.children.length,1,"Root node can have only one child")},u.prototype._useArgs=function(e){const t=this._baseState,r=e.filter((function(e){return e instanceof this.constructor}),this);e=e.filter((function(e){return!(e instanceof this.constructor)}),this),0!==r.length&&(s(null===t.children),t.children=r,r.forEach((function(e){e._baseState.parent=this}),this)),0!==e.length&&(s(null===t.args),t.args=e,t.reverseArgs=e.map((function(e){if("object"!=typeof e||e.constructor!==Object)return e;const t={};return Object.keys(e).forEach((function(r){r==(0|r)&&(r|=0);const n=e[r];t[n]=r})),t})))},["_peekTag","_decodeTag","_use","_decodeStr","_decodeObjid","_decodeTime","_decodeNull","_decodeInt","_decodeBool","_decodeList","_encodeComposite","_encodeStr","_encodeObjid","_encodeTime","_encodeNull","_encodeInt","_encodeBool"].forEach((function(e){u.prototype[e]=function(){const t=this._baseState;throw new Error(e+" not implemented for encoding: "+t.enc)}})),a.forEach((function(e){u.prototype[e]=function(){const t=this._baseState,r=Array.prototype.slice.call(arguments);return s(null===t.tag),t.tag=e,this._useArgs(r),this}})),u.prototype.use=function(e){s(e);const t=this._baseState;return s(null===t.use),t.use=e,this},u.prototype.optional=function(){return this._baseState.optional=!0,this},u.prototype.def=function(e){const t=this._baseState;return s(null===t.default),t.default=e,t.optional=!0,this},u.prototype.explicit=function(e){const t=this._baseState;return s(null===t.explicit&&null===t.implicit),t.explicit=e,this},u.prototype.implicit=function(e){const t=this._baseState;return s(null===t.explicit&&null===t.implicit),t.implicit=e,this},u.prototype.obj=function(){const e=this._baseState,t=Array.prototype.slice.call(arguments);return e.obj=!0,0!==t.length&&this._useArgs(t),this},u.prototype.key=function(e){const t=this._baseState;return s(null===t.key),t.key=e,this},u.prototype.any=function(){return this._baseState.any=!0,this},u.prototype.choice=function(e){const t=this._baseState;return s(null===t.choice),t.choice=e,this._useArgs(Object.keys(e).map((function(t){return e[t]}))),this},u.prototype.contains=function(e){const t=this._baseState;return s(null===t.use),t.contains=e,this},u.prototype._decode=function(e,t){const r=this._baseState;if(null===r.parent)return e.wrapResult(r.children[0]._decode(e,t));let n,i=r.default,s=!0,a=null;if(null!==r.key&&(a=e.enterKey(r.key)),r.optional){let n=null;if(null!==r.explicit?n=r.explicit:null!==r.implicit?n=r.implicit:null!==r.tag&&(n=r.tag),null!==n||r.any){if(s=this._peekTag(e,n,r.any),e.isError(s))return s}else{const n=e.save();try{null===r.choice?this._decodeGeneric(r.tag,e,t):this._decodeChoice(e,t),s=!0}catch(e){s=!1}e.restore(n)}}if(r.obj&&s&&(n=e.enterObject()),s){if(null!==r.explicit){const t=this._decodeTag(e,r.explicit);if(e.isError(t))return t;e=t}const n=e.offset;if(null===r.use&&null===r.choice){let t;r.any&&(t=e.save());const n=this._decodeTag(e,null!==r.implicit?r.implicit:r.tag,r.any);if(e.isError(n))return n;r.any?i=e.raw(t):e=n}if(t&&t.track&&null!==r.tag&&t.track(e.path(),n,e.length,"tagged"),t&&t.track&&null!==r.tag&&t.track(e.path(),e.offset,e.length,"content"),r.any||(i=null===r.choice?this._decodeGeneric(r.tag,e,t):this._decodeChoice(e,t)),e.isError(i))return i;if(r.any||null!==r.choice||null===r.children||r.children.forEach((function(r){r._decode(e,t)})),r.contains&&("octstr"===r.tag||"bitstr"===r.tag)){const n=new o(i);i=this._getUse(r.contains,e._reporterState.obj)._decode(n,t)}}return r.obj&&s&&(i=e.leaveObject(n)),null===r.key||null===i&&!0!==s?null!==a&&e.exitKey(a):e.leaveKey(a,r.key,i),i},u.prototype._decodeGeneric=function(e,t,r){const n=this._baseState;return"seq"===e||"set"===e?null:"seqof"===e||"setof"===e?this._decodeList(t,e,n.args[0],r):/str$/.test(e)?this._decodeStr(t,e,r):"objid"===e&&n.args?this._decodeObjid(t,n.args[0],n.args[1],r):"objid"===e?this._decodeObjid(t,null,null,r):"gentime"===e||"utctime"===e?this._decodeTime(t,e,r):"null_"===e?this._decodeNull(t,r):"bool"===e?this._decodeBool(t,r):"objDesc"===e?this._decodeStr(t,e,r):"int"===e||"enum"===e?this._decodeInt(t,n.args&&n.args[0],r):null!==n.use?this._getUse(n.use,t._reporterState.obj)._decode(t,r):t.error("unknown tag: "+e)},u.prototype._getUse=function(e,t){const r=this._baseState;return r.useDecoder=this._use(e,t),s(null===r.useDecoder._baseState.parent),r.useDecoder=r.useDecoder._baseState.children[0],r.implicit!==r.useDecoder._baseState.implicit&&(r.useDecoder=r.useDecoder.clone(),r.useDecoder._baseState.implicit=r.implicit),r.useDecoder},u.prototype._decodeChoice=function(e,t){const r=this._baseState;let n=null,i=!1;return Object.keys(r.choice).some((function(o){const s=e.save(),a=r.choice[o];try{const r=a._decode(e,t);if(e.isError(r))return!1;n={type:o,value:r},i=!0}catch(t){return e.restore(s),!1}return!0}),this),i?n:e.error("Choice not matched")},u.prototype._createEncoderBuffer=function(e){return new i(e,this.reporter)},u.prototype._encode=function(e,t,r){const n=this._baseState;if(null!==n.default&&n.default===e)return;const i=this._encodeValue(e,t,r);return void 0===i||this._skipDefault(i,t,r)?void 0:i},u.prototype._encodeValue=function(e,t,r){const i=this._baseState;if(null===i.parent)return i.children[0]._encode(e,t||new n);let o=null;if(this.reporter=t,i.optional&&void 0===e){if(null===i.default)return;e=i.default}let s=null,a=!1;if(i.any)o=this._createEncoderBuffer(e);else if(i.choice)o=this._encodeChoice(e,t);else if(i.contains)s=this._getUse(i.contains,r)._encode(e,t),a=!0;else if(i.children)s=i.children.map((function(r){if("null_"===r._baseState.tag)return r._encode(null,t,e);if(null===r._baseState.key)return t.error("Child should have a key");const n=t.enterKey(r._baseState.key);if("object"!=typeof e)return t.error("Child expected, but input is not object");const i=r._encode(e[r._baseState.key],t,e);return t.leaveKey(n),i}),this).filter((function(e){return e})),s=this._createEncoderBuffer(s);else if("seqof"===i.tag||"setof"===i.tag){if(!i.args||1!==i.args.length)return t.error("Too many args for : "+i.tag);if(!Array.isArray(e))return t.error("seqof/setof, but data is not Array");const r=this.clone();r._baseState.implicit=null,s=this._createEncoderBuffer(e.map((function(r){const n=this._baseState;return this._getUse(n.args[0],e)._encode(r,t)}),r))}else null!==i.use?o=this._getUse(i.use,r)._encode(e,t):(s=this._encodePrimitive(i.tag,e),a=!0);if(!i.any&&null===i.choice){const e=null!==i.implicit?i.implicit:i.tag,r=null===i.implicit?"universal":"context";null===e?null===i.use&&t.error("Tag could be omitted only for .use()"):null===i.use&&(o=this._encodeComposite(e,a,r,s))}return null!==i.explicit&&(o=this._encodeComposite(i.explicit,!1,"context",o)),o},u.prototype._encodeChoice=function(e,t){const r=this._baseState,n=r.choice[e.type];return n||s(!1,e.type+" not found in "+JSON.stringify(Object.keys(r.choice))),n._encode(e.value,t)},u.prototype._encodePrimitive=function(e,t){const r=this._baseState;if(/str$/.test(e))return this._encodeStr(t,e);if("objid"===e&&r.args)return this._encodeObjid(t,r.reverseArgs[0],r.args[1]);if("objid"===e)return this._encodeObjid(t,null,null);if("gentime"===e||"utctime"===e)return this._encodeTime(t,e);if("null_"===e)return this._encodeNull();if("int"===e||"enum"===e)return this._encodeInt(t,r.args&&r.reverseArgs[0]);if("bool"===e)return this._encodeBool(t);if("objDesc"===e)return this._encodeStr(t,e);throw new Error("Unsupported tag: "+e)},u.prototype._isNumstr=function(e){return/^[0-9 ]*$/.test(e)},u.prototype._isPrintstr=function(e){return/^[A-Za-z0-9 '()+,-./:=?]*$/.test(e)}},8657:(e,t,r)=>{"use strict";const n=r(1193);function i(e){this._reporterState={obj:null,path:[],options:e||{},errors:[]}}function o(e,t){this.path=e,this.rethrow(t)}t.a=i,i.prototype.isError=function(e){return e instanceof o},i.prototype.save=function(){const e=this._reporterState;return{obj:e.obj,pathLen:e.path.length}},i.prototype.restore=function(e){const t=this._reporterState;t.obj=e.obj,t.path=t.path.slice(0,e.pathLen)},i.prototype.enterKey=function(e){return this._reporterState.path.push(e)},i.prototype.exitKey=function(e){const t=this._reporterState;t.path=t.path.slice(0,e-1)},i.prototype.leaveKey=function(e,t,r){const n=this._reporterState;this.exitKey(e),null!==n.obj&&(n.obj[t]=r)},i.prototype.path=function(){return this._reporterState.path.join("/")},i.prototype.enterObject=function(){const e=this._reporterState,t=e.obj;return e.obj={},t},i.prototype.leaveObject=function(e){const t=this._reporterState,r=t.obj;return t.obj=e,r},i.prototype.error=function(e){let t;const r=this._reporterState,n=e instanceof o;if(t=n?e:new o(r.path.map((function(e){return"["+JSON.stringify(e)+"]"})).join(""),e.message||e,e.stack),!r.options.partial)throw t;return n||r.errors.push(t),t},i.prototype.wrapResult=function(e){const t=this._reporterState;return t.options.partial?{result:this.isError(e)?null:e,errors:t.errors}:e},n(o,Error),o.prototype.rethrow=function(e){if(this.message=e+" at: "+(this.path||"(shallow)"),Error.captureStackTrace&&Error.captureStackTrace(this,o),!this.stack)try{throw new Error(this.message)}catch(e){this.stack=e.stack}return this}},1371:(e,t)=>{"use strict";function r(e){const t={};return Object.keys(e).forEach((function(r){(0|r)==r&&(r|=0);const n=e[r];t[n]=r})),t}t.tagClass={0:"universal",1:"application",2:"context",3:"private"},t.tagClassByName=r(t.tagClass),t.tag={0:"end",1:"bool",2:"int",3:"bitstr",4:"octstr",5:"null_",6:"objid",7:"objDesc",8:"external",9:"real",10:"enum",11:"embed",12:"utf8str",13:"relativeOid",16:"seq",17:"set",18:"numstr",19:"printstr",20:"t61str",21:"videostr",22:"ia5str",23:"utctime",24:"gentime",25:"graphstr",26:"iso646str",27:"genstr",28:"unistr",29:"charstr",30:"bmpstr"},t.tagByName=r(t.tag)},6876:(e,t,r)=>{"use strict";const n=t;n._reverse=function(e){const t={};return Object.keys(e).forEach((function(r){(0|r)==r&&(r|=0);const n=e[r];t[n]=r})),t},n.der=r(1371)},629:(e,t,r)=>{"use strict";const n=r(1193),i=r(4619),o=r(3802).t,s=r(2144),a=r(1371);function c(e){this.enc="der",this.name=e.name,this.entity=e,this.tree=new u,this.tree._init(e.body)}function u(e){s.call(this,"der",e)}function d(e,t){let r=e.readUInt8(t);if(e.isError(r))return r;const n=a.tagClass[r>>6],i=!(32&r);if(31&~r)r&=31;else{let n=r;for(r=0;!(128&~n);){if(n=e.readUInt8(t),e.isError(n))return n;r<<=7,r|=127&n}}return{cls:n,primitive:i,tag:r,tagStr:a.tag[r]}}function f(e,t,r){let n=e.readUInt8(r);if(e.isError(n))return n;if(!t&&128===n)return null;if(!(128&n))return n;const i=127&n;if(i>4)return e.error("length octect is too long");n=0;for(let t=0;t<i;t++){n<<=8;const t=e.readUInt8(r);if(e.isError(t))return t;n|=t}return n}e.exports=c,c.prototype.decode=function(e,t){return o.isDecoderBuffer(e)||(e=new o(e,t)),this.tree._decode(e,t)},n(u,s),u.prototype._peekTag=function(e,t,r){if(e.isEmpty())return!1;const n=e.save(),i=d(e,'Failed to peek tag: "'+t+'"');return e.isError(i)?i:(e.restore(n),i.tag===t||i.tagStr===t||i.tagStr+"of"===t||r)},u.prototype._decodeTag=function(e,t,r){const n=d(e,'Failed to decode tag of "'+t+'"');if(e.isError(n))return n;let i=f(e,n.primitive,'Failed to get length of "'+t+'"');if(e.isError(i))return i;if(!r&&n.tag!==t&&n.tagStr!==t&&n.tagStr+"of"!==t)return e.error('Failed to match tag: "'+t+'"');if(n.primitive||null!==i)return e.skip(i,'Failed to match body of: "'+t+'"');const o=e.save(),s=this._skipUntilEnd(e,'Failed to skip indefinite length body: "'+this.tag+'"');return e.isError(s)?s:(i=e.offset-o.offset,e.restore(o),e.skip(i,'Failed to match body of: "'+t+'"'))},u.prototype._skipUntilEnd=function(e,t){for(;;){const r=d(e,t);if(e.isError(r))return r;const n=f(e,r.primitive,t);if(e.isError(n))return n;let i;if(i=r.primitive||null!==n?e.skip(n):this._skipUntilEnd(e,t),e.isError(i))return i;if("end"===r.tagStr)break}},u.prototype._decodeList=function(e,t,r,n){const i=[];for(;!e.isEmpty();){const t=this._peekTag(e,"end");if(e.isError(t))return t;const o=r.decode(e,"der",n);if(e.isError(o)&&t)break;i.push(o)}return i},u.prototype._decodeStr=function(e,t){if("bitstr"===t){const t=e.readUInt8();return e.isError(t)?t:{unused:t,data:e.raw()}}if("bmpstr"===t){const t=e.raw();if(t.length%2==1)return e.error("Decoding of string type: bmpstr length mismatch");let r="";for(let e=0;e<t.length/2;e++)r+=String.fromCharCode(t.readUInt16BE(2*e));return r}if("numstr"===t){const t=e.raw().toString("ascii");return this._isNumstr(t)?t:e.error("Decoding of string type: numstr unsupported characters")}if("octstr"===t)return e.raw();if("objDesc"===t)return e.raw();if("printstr"===t){const t=e.raw().toString("ascii");return this._isPrintstr(t)?t:e.error("Decoding of string type: printstr unsupported characters")}return/str$/.test(t)?e.raw().toString():e.error("Decoding of string type: "+t+" unsupported")},u.prototype._decodeObjid=function(e,t,r){let n;const i=[];let o=0,s=0;for(;!e.isEmpty();)s=e.readUInt8(),o<<=7,o|=127&s,128&s||(i.push(o),o=0);128&s&&i.push(o);const a=i[0]/40|0,c=i[0]%40;if(n=r?i:[a,c].concat(i.slice(1)),t){let e=t[n.join(" ")];void 0===e&&(e=t[n.join(".")]),void 0!==e&&(n=e)}return n},u.prototype._decodeTime=function(e,t){const r=e.raw().toString();let n,i,o,s,a,c;if("gentime"===t)n=0|r.slice(0,4),i=0|r.slice(4,6),o=0|r.slice(6,8),s=0|r.slice(8,10),a=0|r.slice(10,12),c=0|r.slice(12,14);else{if("utctime"!==t)return e.error("Decoding "+t+" time is not supported yet");n=0|r.slice(0,2),i=0|r.slice(2,4),o=0|r.slice(4,6),s=0|r.slice(6,8),a=0|r.slice(8,10),c=0|r.slice(10,12),n=n<70?2e3+n:1900+n}return Date.UTC(n,i-1,o,s,a,c,0)},u.prototype._decodeNull=function(){return null},u.prototype._decodeBool=function(e){const t=e.readUInt8();return e.isError(t)?t:0!==t},u.prototype._decodeInt=function(e,t){const r=e.raw();let n=new i(r);return t&&(n=t[n.toString(10)]||n),n},u.prototype._use=function(e,t){return"function"==typeof e&&(e=e(t)),e._getDecoder("der").tree}},5126:(e,t,r)=>{"use strict";const n=t;n.der=r(629),n.pem=r(2932)},2932:(e,t,r)=>{"use strict";const n=r(1193),i=r(1628).Buffer,o=r(629);function s(e){o.call(this,e),this.enc="pem"}n(s,o),e.exports=s,s.prototype.decode=function(e,t){const r=e.toString().split(/[\r\n]+/g),n=t.label.toUpperCase(),s=/^-----(BEGIN|END) ([^-]+)-----$/;let a=-1,c=-1;for(let e=0;e<r.length;e++){const t=r[e].match(s);if(null!==t&&t[2]===n){if(-1!==a){if("END"!==t[1])break;c=e;break}if("BEGIN"!==t[1])break;a=e}}if(-1===a||-1===c)throw new Error("PEM section not found for: "+n);const u=r.slice(a+1,c).join("");u.replace(/[^a-z0-9+/=]+/gi,"");const d=i.from(u,"base64");return o.prototype.decode.call(this,d,t)}},5841:(e,t,r)=>{"use strict";const n=r(1193),i=r(1628).Buffer,o=r(2144),s=r(1371);function a(e){this.enc="der",this.name=e.name,this.entity=e,this.tree=new c,this.tree._init(e.body)}function c(e){o.call(this,"der",e)}function u(e){return e<10?"0"+e:e}e.exports=a,a.prototype.encode=function(e,t){return this.tree._encode(e,t).join()},n(c,o),c.prototype._encodeComposite=function(e,t,r,n){const o=function(e,t,r,n){let i;if("seqof"===e?e="seq":"setof"===e&&(e="set"),s.tagByName.hasOwnProperty(e))i=s.tagByName[e];else{if("number"!=typeof e||(0|e)!==e)return n.error("Unknown tag: "+e);i=e}return i>=31?n.error("Multi-octet tag encoding unsupported"):(t||(i|=32),i|=s.tagClassByName[r||"universal"]<<6,i)}(e,t,r,this.reporter);if(n.length<128){const e=i.alloc(2);return e[0]=o,e[1]=n.length,this._createEncoderBuffer([e,n])}let a=1;for(let e=n.length;e>=256;e>>=8)a++;const c=i.alloc(2+a);c[0]=o,c[1]=128|a;for(let e=1+a,t=n.length;t>0;e--,t>>=8)c[e]=255&t;return this._createEncoderBuffer([c,n])},c.prototype._encodeStr=function(e,t){if("bitstr"===t)return this._createEncoderBuffer([0|e.unused,e.data]);if("bmpstr"===t){const t=i.alloc(2*e.length);for(let r=0;r<e.length;r++)t.writeUInt16BE(e.charCodeAt(r),2*r);return this._createEncoderBuffer(t)}return"numstr"===t?this._isNumstr(e)?this._createEncoderBuffer(e):this.reporter.error("Encoding of string type: numstr supports only digits and space"):"printstr"===t?this._isPrintstr(e)?this._createEncoderBuffer(e):this.reporter.error("Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark"):/str$/.test(t)||"objDesc"===t?this._createEncoderBuffer(e):this.reporter.error("Encoding of string type: "+t+" unsupported")},c.prototype._encodeObjid=function(e,t,r){if("string"==typeof e){if(!t)return this.reporter.error("string objid given, but no values map found");if(!t.hasOwnProperty(e))return this.reporter.error("objid not found in values map");e=t[e].split(/[\s.]+/g);for(let t=0;t<e.length;t++)e[t]|=0}else if(Array.isArray(e)){e=e.slice();for(let t=0;t<e.length;t++)e[t]|=0}if(!Array.isArray(e))return this.reporter.error("objid() should be either array or string, got: "+JSON.stringify(e));if(!r){if(e[1]>=40)return this.reporter.error("Second objid identifier OOB");e.splice(0,2,40*e[0]+e[1])}let n=0;for(let t=0;t<e.length;t++){let r=e[t];for(n++;r>=128;r>>=7)n++}const o=i.alloc(n);let s=o.length-1;for(let t=e.length-1;t>=0;t--){let r=e[t];for(o[s--]=127&r;(r>>=7)>0;)o[s--]=128|127&r}return this._createEncoderBuffer(o)},c.prototype._encodeTime=function(e,t){let r;const n=new Date(e);return"gentime"===t?r=[u(n.getUTCFullYear()),u(n.getUTCMonth()+1),u(n.getUTCDate()),u(n.getUTCHours()),u(n.getUTCMinutes()),u(n.getUTCSeconds()),"Z"].join(""):"utctime"===t?r=[u(n.getUTCFullYear()%100),u(n.getUTCMonth()+1),u(n.getUTCDate()),u(n.getUTCHours()),u(n.getUTCMinutes()),u(n.getUTCSeconds()),"Z"].join(""):this.reporter.error("Encoding "+t+" time is not supported yet"),this._encodeStr(r,"octstr")},c.prototype._encodeNull=function(){return this._createEncoderBuffer("")},c.prototype._encodeInt=function(e,t){if("string"==typeof e){if(!t)return this.reporter.error("String int or enum given, but no values map");if(!t.hasOwnProperty(e))return this.reporter.error("Values map doesn't contain: "+JSON.stringify(e));e=t[e]}if("number"!=typeof e&&!i.isBuffer(e)){const t=e.toArray();!e.sign&&128&t[0]&&t.unshift(0),e=i.from(t)}if(i.isBuffer(e)){let t=e.length;0===e.length&&t++;const r=i.alloc(t);return e.copy(r),0===e.length&&(r[0]=0),this._createEncoderBuffer(r)}if(e<128)return this._createEncoderBuffer(e);if(e<256)return this._createEncoderBuffer([0,e]);let r=1;for(let t=e;t>=256;t>>=8)r++;const n=new Array(r);for(let t=n.length-1;t>=0;t--)n[t]=255&e,e>>=8;return 128&n[0]&&n.unshift(0),this._createEncoderBuffer(i.from(n))},c.prototype._encodeBool=function(e){return this._createEncoderBuffer(e?255:0)},c.prototype._use=function(e,t){return"function"==typeof e&&(e=e(t)),e._getEncoder("der").tree},c.prototype._skipDefault=function(e,t,r){const n=this._baseState;let i;if(null===n.default)return!1;const o=e.join();if(void 0===n.defaultBuffer&&(n.defaultBuffer=this._encodeValue(n.default,t,r).join()),o.length!==n.defaultBuffer.length)return!1;for(i=0;i<o.length;i++)if(o[i]!==n.defaultBuffer[i])return!1;return!0}},122:(e,t,r)=>{"use strict";const n=t;n.der=r(5841),n.pem=r(8080)},8080:(e,t,r)=>{"use strict";const n=r(1193),i=r(5841);function o(e){i.call(this,e),this.enc="pem"}n(o,i),e.exports=o,o.prototype.encode=function(e,t){const r=i.prototype.encode.call(this,e).toString("base64"),n=["-----BEGIN "+t.label+"-----"];for(let e=0;e<r.length;e+=64)n.push(r.slice(e,e+64));return n.push("-----END "+t.label+"-----"),n.join("\n")}},1219:e=>{"use strict";e.exports=function(e){if(e.length>=255)throw new TypeError("Alphabet too long");for(var t=new Uint8Array(256),r=0;r<t.length;r++)t[r]=255;for(var n=0;n<e.length;n++){var i=e.charAt(n),o=i.charCodeAt(0);if(255!==t[o])throw new TypeError(i+" is ambiguous");t[o]=n}var s=e.length,a=e.charAt(0),c=Math.log(s)/Math.log(256),u=Math.log(256)/Math.log(s);function d(e){if("string"!=typeof e)throw new TypeError("Expected String");if(0===e.length)return new Uint8Array;for(var r=0,n=0,i=0;e[r]===a;)n++,r++;for(var o=(e.length-r)*c+1>>>0,u=new Uint8Array(o);e[r];){var d=t[e.charCodeAt(r)];if(255===d)return;for(var f=0,h=o-1;(0!==d||f<i)&&-1!==h;h--,f++)d+=s*u[h]>>>0,u[h]=d%256>>>0,d=d/256>>>0;if(0!==d)throw new Error("Non-zero carry");i=f,r++}for(var l=o-i;l!==o&&0===u[l];)l++;for(var p=new Uint8Array(n+(o-l)),b=n;l!==o;)p[b++]=u[l++];return p}return{encode:function(t){if(t instanceof Uint8Array||(ArrayBuffer.isView(t)?t=new Uint8Array(t.buffer,t.byteOffset,t.byteLength):Array.isArray(t)&&(t=Uint8Array.from(t))),!(t instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(0===t.length)return"";for(var r=0,n=0,i=0,o=t.length;i!==o&&0===t[i];)i++,r++;for(var c=(o-i)*u+1>>>0,d=new Uint8Array(c);i!==o;){for(var f=t[i],h=0,l=c-1;(0!==f||h<n)&&-1!==l;l--,h++)f+=256*d[l]>>>0,d[l]=f%s>>>0,f=f/s>>>0;if(0!==f)throw new Error("Non-zero carry");n=h,i++}for(var p=c-n;p!==c&&0===d[p];)p++;for(var b=a.repeat(r);p<c;++p)b+=e.charAt(d[p]);return b},decodeUnsafe:d,decode:function(e){var t=d(e);if(t)return t;throw new Error("Non-base"+s+" character")}}}},4933:(e,t)=>{"use strict";t.byteLength=function(e){var t=a(e),r=t[0],n=t[1];return 3*(r+n)/4-n},t.toByteArray=function(e){var t,r,o=a(e),s=o[0],c=o[1],u=new i(function(e,t,r){return 3*(t+r)/4-r}(0,s,c)),d=0,f=c>0?s-4:s;for(r=0;r<f;r+=4)t=n[e.charCodeAt(r)]<<18|n[e.charCodeAt(r+1)]<<12|n[e.charCodeAt(r+2)]<<6|n[e.charCodeAt(r+3)],u[d++]=t>>16&255,u[d++]=t>>8&255,u[d++]=255&t;return 2===c&&(t=n[e.charCodeAt(r)]<<2|n[e.charCodeAt(r+1)]>>4,u[d++]=255&t),1===c&&(t=n[e.charCodeAt(r)]<<10|n[e.charCodeAt(r+1)]<<4|n[e.charCodeAt(r+2)]>>2,u[d++]=t>>8&255,u[d++]=255&t),u},t.fromByteArray=function(e){for(var t,n=e.length,i=n%3,o=[],s=16383,a=0,u=n-i;a<u;a+=s)o.push(c(e,a,a+s>u?u:a+s));return 1===i?(t=e[n-1],o.push(r[t>>2]+r[t<<4&63]+"==")):2===i&&(t=(e[n-2]<<8)+e[n-1],o.push(r[t>>10]+r[t>>4&63]+r[t<<2&63]+"=")),o.join("")};for(var r=[],n=[],i="undefined"!=typeof Uint8Array?Uint8Array:Array,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=0;s<64;++s)r[s]=o[s],n[o.charCodeAt(s)]=s;function a(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");return-1===r&&(r=t),[r,r===t?0:4-r%4]}function c(e,t,n){for(var i,o,s=[],a=t;a<n;a+=3)i=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(255&e[a+2]),s.push(r[(o=i)>>18&63]+r[o>>12&63]+r[o>>6&63]+r[63&o]);return s.join("")}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},1594:function(e,t,r){var n;!function(){"use strict";var i,o=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,s=Math.ceil,a=Math.floor,c="[BigNumber Error] ",u=c+"Number primitive has more than 15 significant digits: ",d=1e14,f=14,h=9007199254740991,l=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],p=1e7,b=1e9;function y(e){var t=0|e;return e>0||e===t?t:t-1}function m(e){for(var t,r,n=1,i=e.length,o=e[0]+"";n<i;){for(t=e[n++]+"",r=f-t.length;r--;t="0"+t);o+=t}for(i=o.length;48===o.charCodeAt(--i););return o.slice(0,i+1||1)}function g(e,t){var r,n,i=e.c,o=t.c,s=e.s,a=t.s,c=e.e,u=t.e;if(!s||!a)return null;if(r=i&&!i[0],n=o&&!o[0],r||n)return r?n?0:-a:s;if(s!=a)return s;if(r=s<0,n=c==u,!i||!o)return n?0:!i^r?1:-1;if(!n)return c>u^r?1:-1;for(a=(c=i.length)<(u=o.length)?c:u,s=0;s<a;s++)if(i[s]!=o[s])return i[s]>o[s]^r?1:-1;return c==u?0:c>u^r?1:-1}function v(e,t,r,n){if(e<t||e>r||e!==a(e))throw Error(c+(n||"Argument")+("number"==typeof e?e<t||e>r?" out of range: ":" not an integer: ":" not a primitive number: ")+String(e))}function w(e){var t=e.c.length-1;return y(e.e/f)==t&&e.c[t]%2!=0}function _(e,t){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(t<0?"e":"e+")+t}function A(e,t,r){var n,i;if(t<0){for(i=r+".";++t;i+=r);e=i+e}else if(++t>(n=e.length)){for(i=r,t-=n;--t;i+=r);e+=i}else t<n&&(e=e.slice(0,t)+"."+e.slice(t));return e}i=function e(t){var r,n,i,S,M,C,T,E,k,I,x=V.prototype={constructor:V,toString:null,valueOf:null},B=new V(1),U=20,P=4,O=-7,R=21,L=-1e7,N=1e7,j=!1,D=1,F=0,H={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:" ",suffix:""},q="0123456789abcdefghijklmnopqrstuvwxyz",$=!0;function V(e,t){var r,s,c,d,l,p,b,y,m=this;if(!(m instanceof V))return new V(e,t);if(null==t){if(e&&!0===e._isBigNumber)return m.s=e.s,void(!e.c||e.e>N?m.c=m.e=null:e.e<L?m.c=[m.e=0]:(m.e=e.e,m.c=e.c.slice()));if((p="number"==typeof e)&&0*e==0){if(m.s=1/e<0?(e=-e,-1):1,e===~~e){for(d=0,l=e;l>=10;l/=10,d++);return void(d>N?m.c=m.e=null:(m.e=d,m.c=[e]))}y=String(e)}else{if(!o.test(y=String(e)))return i(m,y,p);m.s=45==y.charCodeAt(0)?(y=y.slice(1),-1):1}(d=y.indexOf("."))>-1&&(y=y.replace(".","")),(l=y.search(/e/i))>0?(d<0&&(d=l),d+=+y.slice(l+1),y=y.substring(0,l)):d<0&&(d=y.length)}else{if(v(t,2,q.length,"Base"),10==t&&$)return W(m=new V(e),U+m.e+1,P);if(y=String(e),p="number"==typeof e){if(0*e!=0)return i(m,y,p,t);if(m.s=1/e<0?(y=y.slice(1),-1):1,V.DEBUG&&y.replace(/^0\.0*|\./,"").length>15)throw Error(u+e)}else m.s=45===y.charCodeAt(0)?(y=y.slice(1),-1):1;for(r=q.slice(0,t),d=l=0,b=y.length;l<b;l++)if(r.indexOf(s=y.charAt(l))<0){if("."==s){if(l>d){d=b;continue}}else if(!c&&(y==y.toUpperCase()&&(y=y.toLowerCase())||y==y.toLowerCase()&&(y=y.toUpperCase()))){c=!0,l=-1,d=0;continue}return i(m,String(e),p,t)}p=!1,(d=(y=n(y,t,10,m.s)).indexOf("."))>-1?y=y.replace(".",""):d=y.length}for(l=0;48===y.charCodeAt(l);l++);for(b=y.length;48===y.charCodeAt(--b););if(y=y.slice(l,++b)){if(b-=l,p&&V.DEBUG&&b>15&&(e>h||e!==a(e)))throw Error(u+m.s*e);if((d=d-l-1)>N)m.c=m.e=null;else if(d<L)m.c=[m.e=0];else{if(m.e=d,m.c=[],l=(d+1)%f,d<0&&(l+=f),l<b){for(l&&m.c.push(+y.slice(0,l)),b-=f;l<b;)m.c.push(+y.slice(l,l+=f));l=f-(y=y.slice(l)).length}else l-=b;for(;l--;y+="0");m.c.push(+y)}}else m.c=[m.e=0]}function z(e,t,r,n){var i,o,s,a,c;if(null==r?r=P:v(r,0,8),!e.c)return e.toString();if(i=e.c[0],s=e.e,null==t)c=m(e.c),c=1==n||2==n&&(s<=O||s>=R)?_(c,s):A(c,s,"0");else if(o=(e=W(new V(e),t,r)).e,a=(c=m(e.c)).length,1==n||2==n&&(t<=o||o<=O)){for(;a<t;c+="0",a++);c=_(c,o)}else if(t-=s,c=A(c,o,"0"),o+1>a){if(--t>0)for(c+=".";t--;c+="0");}else if((t+=o-a)>0)for(o+1==a&&(c+=".");t--;c+="0");return e.s<0&&i?"-"+c:c}function G(e,t){for(var r,n=1,i=new V(e[0]);n<e.length;n++){if(!(r=new V(e[n])).s){i=r;break}t.call(i,r)&&(i=r)}return i}function K(e,t,r){for(var n=1,i=t.length;!t[--i];t.pop());for(i=t[0];i>=10;i/=10,n++);return(r=n+r*f-1)>N?e.c=e.e=null:r<L?e.c=[e.e=0]:(e.e=r,e.c=t),e}function W(e,t,r,n){var i,o,c,u,h,p,b,y=e.c,m=l;if(y){e:{for(i=1,u=y[0];u>=10;u/=10,i++);if((o=t-i)<0)o+=f,c=t,b=(h=y[p=0])/m[i-c-1]%10|0;else if((p=s((o+1)/f))>=y.length){if(!n)break e;for(;y.length<=p;y.push(0));h=b=0,i=1,c=(o%=f)-f+1}else{for(h=u=y[p],i=1;u>=10;u/=10,i++);b=(c=(o%=f)-f+i)<0?0:h/m[i-c-1]%10|0}if(n=n||t<0||null!=y[p+1]||(c<0?h:h%m[i-c-1]),n=r<4?(b||n)&&(0==r||r==(e.s<0?3:2)):b>5||5==b&&(4==r||n||6==r&&(o>0?c>0?h/m[i-c]:0:y[p-1])%10&1||r==(e.s<0?8:7)),t<1||!y[0])return y.length=0,n?(t-=e.e+1,y[0]=m[(f-t%f)%f],e.e=-t||0):y[0]=e.e=0,e;if(0==o?(y.length=p,u=1,p--):(y.length=p+1,u=m[f-o],y[p]=c>0?a(h/m[i-c]%m[c])*u:0),n)for(;;){if(0==p){for(o=1,c=y[0];c>=10;c/=10,o++);for(c=y[0]+=u,u=1;c>=10;c/=10,u++);o!=u&&(e.e++,y[0]==d&&(y[0]=1));break}if(y[p]+=u,y[p]!=d)break;y[p--]=0,u=1}for(o=y.length;0===y[--o];y.pop());}e.e>N?e.c=e.e=null:e.e<L&&(e.c=[e.e=0])}return e}function J(e){var t,r=e.e;return null===r?e.toString():(t=m(e.c),t=r<=O||r>=R?_(t,r):A(t,r,"0"),e.s<0?"-"+t:t)}return V.clone=e,V.ROUND_UP=0,V.ROUND_DOWN=1,V.ROUND_CEIL=2,V.ROUND_FLOOR=3,V.ROUND_HALF_UP=4,V.ROUND_HALF_DOWN=5,V.ROUND_HALF_EVEN=6,V.ROUND_HALF_CEIL=7,V.ROUND_HALF_FLOOR=8,V.EUCLID=9,V.config=V.set=function(e){var t,r;if(null!=e){if("object"!=typeof e)throw Error(c+"Object expected: "+e);if(e.hasOwnProperty(t="DECIMAL_PLACES")&&(v(r=e[t],0,b,t),U=r),e.hasOwnProperty(t="ROUNDING_MODE")&&(v(r=e[t],0,8,t),P=r),e.hasOwnProperty(t="EXPONENTIAL_AT")&&((r=e[t])&&r.pop?(v(r[0],-b,0,t),v(r[1],0,b,t),O=r[0],R=r[1]):(v(r,-b,b,t),O=-(R=r<0?-r:r))),e.hasOwnProperty(t="RANGE"))if((r=e[t])&&r.pop)v(r[0],-b,-1,t),v(r[1],1,b,t),L=r[0],N=r[1];else{if(v(r,-b,b,t),!r)throw Error(c+t+" cannot be zero: "+r);L=-(N=r<0?-r:r)}if(e.hasOwnProperty(t="CRYPTO")){if((r=e[t])!==!!r)throw Error(c+t+" not true or false: "+r);if(r){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw j=!r,Error(c+"crypto unavailable");j=r}else j=r}if(e.hasOwnProperty(t="MODULO_MODE")&&(v(r=e[t],0,9,t),D=r),e.hasOwnProperty(t="POW_PRECISION")&&(v(r=e[t],0,b,t),F=r),e.hasOwnProperty(t="FORMAT")){if("object"!=typeof(r=e[t]))throw Error(c+t+" not an object: "+r);H=r}if(e.hasOwnProperty(t="ALPHABET")){if("string"!=typeof(r=e[t])||/^.?$|[+\-.\s]|(.).*\1/.test(r))throw Error(c+t+" invalid: "+r);$="0123456789"==r.slice(0,10),q=r}}return{DECIMAL_PLACES:U,ROUNDING_MODE:P,EXPONENTIAL_AT:[O,R],RANGE:[L,N],CRYPTO:j,MODULO_MODE:D,POW_PRECISION:F,FORMAT:H,ALPHABET:q}},V.isBigNumber=function(e){if(!e||!0!==e._isBigNumber)return!1;if(!V.DEBUG)return!0;var t,r,n=e.c,i=e.e,o=e.s;e:if("[object Array]"=={}.toString.call(n)){if((1===o||-1===o)&&i>=-b&&i<=b&&i===a(i)){if(0===n[0]){if(0===i&&1===n.length)return!0;break e}if((t=(i+1)%f)<1&&(t+=f),String(n[0]).length==t){for(t=0;t<n.length;t++)if((r=n[t])<0||r>=d||r!==a(r))break e;if(0!==r)return!0}}}else if(null===n&&null===i&&(null===o||1===o||-1===o))return!0;throw Error(c+"Invalid BigNumber: "+e)},V.maximum=V.max=function(){return G(arguments,x.lt)},V.minimum=V.min=function(){return G(arguments,x.gt)},V.random=(S=9007199254740992,M=Math.random()*S&2097151?function(){return a(Math.random()*S)}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)},function(e){var t,r,n,i,o,u=0,d=[],h=new V(B);if(null==e?e=U:v(e,0,b),i=s(e/f),j)if(crypto.getRandomValues){for(t=crypto.getRandomValues(new Uint32Array(i*=2));u<i;)(o=131072*t[u]+(t[u+1]>>>11))>=9e15?(r=crypto.getRandomValues(new Uint32Array(2)),t[u]=r[0],t[u+1]=r[1]):(d.push(o%1e14),u+=2);u=i/2}else{if(!crypto.randomBytes)throw j=!1,Error(c+"crypto unavailable");for(t=crypto.randomBytes(i*=7);u<i;)(o=281474976710656*(31&t[u])+1099511627776*t[u+1]+4294967296*t[u+2]+16777216*t[u+3]+(t[u+4]<<16)+(t[u+5]<<8)+t[u+6])>=9e15?crypto.randomBytes(7).copy(t,u):(d.push(o%1e14),u+=7);u=i/7}if(!j)for(;u<i;)(o=M())<9e15&&(d[u++]=o%1e14);for(i=d[--u],e%=f,i&&e&&(o=l[f-e],d[u]=a(i/o)*o);0===d[u];d.pop(),u--);if(u<0)d=[n=0];else{for(n=-1;0===d[0];d.splice(0,1),n-=f);for(u=1,o=d[0];o>=10;o/=10,u++);u<f&&(n-=f-u)}return h.e=n,h.c=d,h}),V.sum=function(){for(var e=1,t=arguments,r=new V(t[0]);e<t.length;)r=r.plus(t[e++]);return r},n=function(){var e="0123456789";function t(e,t,r,n){for(var i,o,s=[0],a=0,c=e.length;a<c;){for(o=s.length;o--;s[o]*=t);for(s[0]+=n.indexOf(e.charAt(a++)),i=0;i<s.length;i++)s[i]>r-1&&(null==s[i+1]&&(s[i+1]=0),s[i+1]+=s[i]/r|0,s[i]%=r)}return s.reverse()}return function(n,i,o,s,a){var c,u,d,f,h,l,p,b,y=n.indexOf("."),g=U,v=P;for(y>=0&&(f=F,F=0,n=n.replace(".",""),l=(b=new V(i)).pow(n.length-y),F=f,b.c=t(A(m(l.c),l.e,"0"),10,o,e),b.e=b.c.length),d=f=(p=t(n,i,o,a?(c=q,e):(c=e,q))).length;0==p[--f];p.pop());if(!p[0])return c.charAt(0);if(y<0?--d:(l.c=p,l.e=d,l.s=s,p=(l=r(l,b,g,v,o)).c,h=l.r,d=l.e),y=p[u=d+g+1],f=o/2,h=h||u<0||null!=p[u+1],h=v<4?(null!=y||h)&&(0==v||v==(l.s<0?3:2)):y>f||y==f&&(4==v||h||6==v&&1&p[u-1]||v==(l.s<0?8:7)),u<1||!p[0])n=h?A(c.charAt(1),-g,c.charAt(0)):c.charAt(0);else{if(p.length=u,h)for(--o;++p[--u]>o;)p[u]=0,u||(++d,p=[1].concat(p));for(f=p.length;!p[--f];);for(y=0,n="";y<=f;n+=c.charAt(p[y++]));n=A(n,d,c.charAt(0))}return n}}(),r=function(){function e(e,t,r){var n,i,o,s,a=0,c=e.length,u=t%p,d=t/p|0;for(e=e.slice();c--;)a=((i=u*(o=e[c]%p)+(n=d*o+(s=e[c]/p|0)*u)%p*p+a)/r|0)+(n/p|0)+d*s,e[c]=i%r;return a&&(e=[a].concat(e)),e}function t(e,t,r,n){var i,o;if(r!=n)o=r>n?1:-1;else for(i=o=0;i<r;i++)if(e[i]!=t[i]){o=e[i]>t[i]?1:-1;break}return o}function r(e,t,r,n){for(var i=0;r--;)e[r]-=i,i=e[r]<t[r]?1:0,e[r]=i*n+e[r]-t[r];for(;!e[0]&&e.length>1;e.splice(0,1));}return function(n,i,o,s,c){var u,h,l,p,b,m,g,v,w,_,A,S,M,C,T,E,k,I=n.s==i.s?1:-1,x=n.c,B=i.c;if(!(x&&x[0]&&B&&B[0]))return new V(n.s&&i.s&&(x?!B||x[0]!=B[0]:B)?x&&0==x[0]||!B?0*I:I/0:NaN);for(w=(v=new V(I)).c=[],I=o+(h=n.e-i.e)+1,c||(c=d,h=y(n.e/f)-y(i.e/f),I=I/f|0),l=0;B[l]==(x[l]||0);l++);if(B[l]>(x[l]||0)&&h--,I<0)w.push(1),p=!0;else{for(C=x.length,E=B.length,l=0,I+=2,(b=a(c/(B[0]+1)))>1&&(B=e(B,b,c),x=e(x,b,c),E=B.length,C=x.length),M=E,A=(_=x.slice(0,E)).length;A<E;_[A++]=0);k=B.slice(),k=[0].concat(k),T=B[0],B[1]>=c/2&&T++;do{if(b=0,(u=t(B,_,E,A))<0){if(S=_[0],E!=A&&(S=S*c+(_[1]||0)),(b=a(S/T))>1)for(b>=c&&(b=c-1),g=(m=e(B,b,c)).length,A=_.length;1==t(m,_,g,A);)b--,r(m,E<g?k:B,g,c),g=m.length,u=1;else 0==b&&(u=b=1),g=(m=B.slice()).length;if(g<A&&(m=[0].concat(m)),r(_,m,A,c),A=_.length,-1==u)for(;t(B,_,E,A)<1;)b++,r(_,E<A?k:B,A,c),A=_.length}else 0===u&&(b++,_=[0]);w[l++]=b,_[0]?_[A++]=x[M]||0:(_=[x[M]],A=1)}while((M++<C||null!=_[0])&&I--);p=null!=_[0],w[0]||w.splice(0,1)}if(c==d){for(l=1,I=w[0];I>=10;I/=10,l++);W(v,o+(v.e=l+h*f-1)+1,s,p)}else v.e=h,v.r=+p;return v}}(),C=/^(-?)0([xbo])(?=\w[\w.]*$)/i,T=/^([^.]+)\.$/,E=/^\.([^.]+)$/,k=/^-?(Infinity|NaN)$/,I=/^\s*\+(?=[\w.])|^\s+|\s+$/g,i=function(e,t,r,n){var i,o=r?t:t.replace(I,"");if(k.test(o))e.s=isNaN(o)?null:o<0?-1:1;else{if(!r&&(o=o.replace(C,(function(e,t,r){return i="x"==(r=r.toLowerCase())?16:"b"==r?2:8,n&&n!=i?e:t})),n&&(i=n,o=o.replace(T,"$1").replace(E,"0.$1")),t!=o))return new V(o,i);if(V.DEBUG)throw Error(c+"Not a"+(n?" base "+n:"")+" number: "+t);e.s=null}e.c=e.e=null},x.absoluteValue=x.abs=function(){var e=new V(this);return e.s<0&&(e.s=1),e},x.comparedTo=function(e,t){return g(this,new V(e,t))},x.decimalPlaces=x.dp=function(e,t){var r,n,i,o=this;if(null!=e)return v(e,0,b),null==t?t=P:v(t,0,8),W(new V(o),e+o.e+1,t);if(!(r=o.c))return null;if(n=((i=r.length-1)-y(this.e/f))*f,i=r[i])for(;i%10==0;i/=10,n--);return n<0&&(n=0),n},x.dividedBy=x.div=function(e,t){return r(this,new V(e,t),U,P)},x.dividedToIntegerBy=x.idiv=function(e,t){return r(this,new V(e,t),0,1)},x.exponentiatedBy=x.pow=function(e,t){var r,n,i,o,u,d,h,l,p=this;if((e=new V(e)).c&&!e.isInteger())throw Error(c+"Exponent not an integer: "+J(e));if(null!=t&&(t=new V(t)),u=e.e>14,!p.c||!p.c[0]||1==p.c[0]&&!p.e&&1==p.c.length||!e.c||!e.c[0])return l=new V(Math.pow(+J(p),u?e.s*(2-w(e)):+J(e))),t?l.mod(t):l;if(d=e.s<0,t){if(t.c?!t.c[0]:!t.s)return new V(NaN);(n=!d&&p.isInteger()&&t.isInteger())&&(p=p.mod(t))}else{if(e.e>9&&(p.e>0||p.e<-1||(0==p.e?p.c[0]>1||u&&p.c[1]>=24e7:p.c[0]<8e13||u&&p.c[0]<=9999975e7)))return o=p.s<0&&w(e)?-0:0,p.e>-1&&(o=1/o),new V(d?1/o:o);F&&(o=s(F/f+2))}for(u?(r=new V(.5),d&&(e.s=1),h=w(e)):h=(i=Math.abs(+J(e)))%2,l=new V(B);;){if(h){if(!(l=l.times(p)).c)break;o?l.c.length>o&&(l.c.length=o):n&&(l=l.mod(t))}if(i){if(0===(i=a(i/2)))break;h=i%2}else if(W(e=e.times(r),e.e+1,1),e.e>14)h=w(e);else{if(0==(i=+J(e)))break;h=i%2}p=p.times(p),o?p.c&&p.c.length>o&&(p.c.length=o):n&&(p=p.mod(t))}return n?l:(d&&(l=B.div(l)),t?l.mod(t):o?W(l,F,P,void 0):l)},x.integerValue=function(e){var t=new V(this);return null==e?e=P:v(e,0,8),W(t,t.e+1,e)},x.isEqualTo=x.eq=function(e,t){return 0===g(this,new V(e,t))},x.isFinite=function(){return!!this.c},x.isGreaterThan=x.gt=function(e,t){return g(this,new V(e,t))>0},x.isGreaterThanOrEqualTo=x.gte=function(e,t){return 1===(t=g(this,new V(e,t)))||0===t},x.isInteger=function(){return!!this.c&&y(this.e/f)>this.c.length-2},x.isLessThan=x.lt=function(e,t){return g(this,new V(e,t))<0},x.isLessThanOrEqualTo=x.lte=function(e,t){return-1===(t=g(this,new V(e,t)))||0===t},x.isNaN=function(){return!this.s},x.isNegative=function(){return this.s<0},x.isPositive=function(){return this.s>0},x.isZero=function(){return!!this.c&&0==this.c[0]},x.minus=function(e,t){var r,n,i,o,s=this,a=s.s;if(t=(e=new V(e,t)).s,!a||!t)return new V(NaN);if(a!=t)return e.s=-t,s.plus(e);var c=s.e/f,u=e.e/f,h=s.c,l=e.c;if(!c||!u){if(!h||!l)return h?(e.s=-t,e):new V(l?s:NaN);if(!h[0]||!l[0])return l[0]?(e.s=-t,e):new V(h[0]?s:3==P?-0:0)}if(c=y(c),u=y(u),h=h.slice(),a=c-u){for((o=a<0)?(a=-a,i=h):(u=c,i=l),i.reverse(),t=a;t--;i.push(0));i.reverse()}else for(n=(o=(a=h.length)<(t=l.length))?a:t,a=t=0;t<n;t++)if(h[t]!=l[t]){o=h[t]<l[t];break}if(o&&(i=h,h=l,l=i,e.s=-e.s),(t=(n=l.length)-(r=h.length))>0)for(;t--;h[r++]=0);for(t=d-1;n>a;){if(h[--n]<l[n]){for(r=n;r&&!h[--r];h[r]=t);--h[r],h[n]+=d}h[n]-=l[n]}for(;0==h[0];h.splice(0,1),--u);return h[0]?K(e,h,u):(e.s=3==P?-1:1,e.c=[e.e=0],e)},x.modulo=x.mod=function(e,t){var n,i,o=this;return e=new V(e,t),!o.c||!e.s||e.c&&!e.c[0]?new V(NaN):!e.c||o.c&&!o.c[0]?new V(o):(9==D?(i=e.s,e.s=1,n=r(o,e,0,3),e.s=i,n.s*=i):n=r(o,e,0,D),(e=o.minus(n.times(e))).c[0]||1!=D||(e.s=o.s),e)},x.multipliedBy=x.times=function(e,t){var r,n,i,o,s,a,c,u,h,l,b,m,g,v,w,_=this,A=_.c,S=(e=new V(e,t)).c;if(!(A&&S&&A[0]&&S[0]))return!_.s||!e.s||A&&!A[0]&&!S||S&&!S[0]&&!A?e.c=e.e=e.s=null:(e.s*=_.s,A&&S?(e.c=[0],e.e=0):e.c=e.e=null),e;for(n=y(_.e/f)+y(e.e/f),e.s*=_.s,(c=A.length)<(l=S.length)&&(g=A,A=S,S=g,i=c,c=l,l=i),i=c+l,g=[];i--;g.push(0));for(v=d,w=p,i=l;--i>=0;){for(r=0,b=S[i]%w,m=S[i]/w|0,o=i+(s=c);o>i;)r=((u=b*(u=A[--s]%w)+(a=m*u+(h=A[s]/w|0)*b)%w*w+g[o]+r)/v|0)+(a/w|0)+m*h,g[o--]=u%v;g[o]=r}return r?++n:g.splice(0,1),K(e,g,n)},x.negated=function(){var e=new V(this);return e.s=-e.s||null,e},x.plus=function(e,t){var r,n=this,i=n.s;if(t=(e=new V(e,t)).s,!i||!t)return new V(NaN);if(i!=t)return e.s=-t,n.minus(e);var o=n.e/f,s=e.e/f,a=n.c,c=e.c;if(!o||!s){if(!a||!c)return new V(i/0);if(!a[0]||!c[0])return c[0]?e:new V(a[0]?n:0*i)}if(o=y(o),s=y(s),a=a.slice(),i=o-s){for(i>0?(s=o,r=c):(i=-i,r=a),r.reverse();i--;r.push(0));r.reverse()}for((i=a.length)-(t=c.length)<0&&(r=c,c=a,a=r,t=i),i=0;t;)i=(a[--t]=a[t]+c[t]+i)/d|0,a[t]=d===a[t]?0:a[t]%d;return i&&(a=[i].concat(a),++s),K(e,a,s)},x.precision=x.sd=function(e,t){var r,n,i,o=this;if(null!=e&&e!==!!e)return v(e,1,b),null==t?t=P:v(t,0,8),W(new V(o),e,t);if(!(r=o.c))return null;if(n=(i=r.length-1)*f+1,i=r[i]){for(;i%10==0;i/=10,n--);for(i=r[0];i>=10;i/=10,n++);}return e&&o.e+1>n&&(n=o.e+1),n},x.shiftedBy=function(e){return v(e,-9007199254740991,h),this.times("1e"+e)},x.squareRoot=x.sqrt=function(){var e,t,n,i,o,s=this,a=s.c,c=s.s,u=s.e,d=U+4,f=new V("0.5");if(1!==c||!a||!a[0])return new V(!c||c<0&&(!a||a[0])?NaN:a?s:1/0);if(0==(c=Math.sqrt(+J(s)))||c==1/0?(((t=m(a)).length+u)%2==0&&(t+="0"),c=Math.sqrt(+t),u=y((u+1)/2)-(u<0||u%2),n=new V(t=c==1/0?"5e"+u:(t=c.toExponential()).slice(0,t.indexOf("e")+1)+u)):n=new V(c+""),n.c[0])for((c=(u=n.e)+d)<3&&(c=0);;)if(o=n,n=f.times(o.plus(r(s,o,d,1))),m(o.c).slice(0,c)===(t=m(n.c)).slice(0,c)){if(n.e<u&&--c,"9999"!=(t=t.slice(c-3,c+1))&&(i||"4999"!=t)){+t&&(+t.slice(1)||"5"!=t.charAt(0))||(W(n,n.e+U+2,1),e=!n.times(n).eq(s));break}if(!i&&(W(o,o.e+U+2,0),o.times(o).eq(s))){n=o;break}d+=4,c+=4,i=1}return W(n,n.e+U+1,P,e)},x.toExponential=function(e,t){return null!=e&&(v(e,0,b),e++),z(this,e,t,1)},x.toFixed=function(e,t){return null!=e&&(v(e,0,b),e=e+this.e+1),z(this,e,t)},x.toFormat=function(e,t,r){var n,i=this;if(null==r)null!=e&&t&&"object"==typeof t?(r=t,t=null):e&&"object"==typeof e?(r=e,e=t=null):r=H;else if("object"!=typeof r)throw Error(c+"Argument not an object: "+r);if(n=i.toFixed(e,t),i.c){var o,s=n.split("."),a=+r.groupSize,u=+r.secondaryGroupSize,d=r.groupSeparator||"",f=s[0],h=s[1],l=i.s<0,p=l?f.slice(1):f,b=p.length;if(u&&(o=a,a=u,u=o,b-=o),a>0&&b>0){for(o=b%a||a,f=p.substr(0,o);o<b;o+=a)f+=d+p.substr(o,a);u>0&&(f+=d+p.slice(o)),l&&(f="-"+f)}n=h?f+(r.decimalSeparator||"")+((u=+r.fractionGroupSize)?h.replace(new RegExp("\\d{"+u+"}\\B","g"),"$&"+(r.fractionGroupSeparator||"")):h):f}return(r.prefix||"")+n+(r.suffix||"")},x.toFraction=function(e){var t,n,i,o,s,a,u,d,h,p,b,y,g=this,v=g.c;if(null!=e&&(!(u=new V(e)).isInteger()&&(u.c||1!==u.s)||u.lt(B)))throw Error(c+"Argument "+(u.isInteger()?"out of range: ":"not an integer: ")+J(u));if(!v)return new V(g);for(t=new V(B),h=n=new V(B),i=d=new V(B),y=m(v),s=t.e=y.length-g.e-1,t.c[0]=l[(a=s%f)<0?f+a:a],e=!e||u.comparedTo(t)>0?s>0?t:h:u,a=N,N=1/0,u=new V(y),d.c[0]=0;p=r(u,t,0,1),1!=(o=n.plus(p.times(i))).comparedTo(e);)n=i,i=o,h=d.plus(p.times(o=h)),d=o,t=u.minus(p.times(o=t)),u=o;return o=r(e.minus(n),i,0,1),d=d.plus(o.times(h)),n=n.plus(o.times(i)),d.s=h.s=g.s,b=r(h,i,s*=2,P).minus(g).abs().comparedTo(r(d,n,s,P).minus(g).abs())<1?[h,i]:[d,n],N=a,b},x.toNumber=function(){return+J(this)},x.toPrecision=function(e,t){return null!=e&&v(e,1,b),z(this,e,t,2)},x.toString=function(e){var t,r=this,i=r.s,o=r.e;return null===o?i?(t="Infinity",i<0&&(t="-"+t)):t="NaN":(null==e?t=o<=O||o>=R?_(m(r.c),o):A(m(r.c),o,"0"):10===e&&$?t=A(m((r=W(new V(r),U+o+1,P)).c),r.e,"0"):(v(e,2,q.length,"Base"),t=n(A(m(r.c),o,"0"),10,e,i,!0)),i<0&&r.c[0]&&(t="-"+t)),t},x.valueOf=x.toJSON=function(){return J(this)},x._isBigNumber=!0,null!=t&&V.set(t),V}(),i.default=i.BigNumber=i,void 0===(n=function(){return i}.call(t,r,t,e))||(e.exports=n)}()},8681:(e,t,r)=>{const n=r(1878);function i(e,t,r){const n=e[t]+e[r];let i=e[t+1]+e[r+1];n>=4294967296&&i++,e[t]=n,e[t+1]=i}function o(e,t,r,n){let i=e[t]+r;r<0&&(i+=4294967296);let o=e[t+1]+n;i>=4294967296&&o++,e[t]=i,e[t+1]=o}function s(e,t){return e[t]^e[t+1]<<8^e[t+2]<<16^e[t+3]<<24}function a(e,t,r,n,s,a){const c=f[s],u=f[s+1],h=f[a],l=f[a+1];i(d,e,t),o(d,e,c,u);let p=d[n]^d[e],b=d[n+1]^d[e+1];d[n]=b,d[n+1]=p,i(d,r,n),p=d[t]^d[r],b=d[t+1]^d[r+1],d[t]=p>>>24^b<<8,d[t+1]=b>>>24^p<<8,i(d,e,t),o(d,e,h,l),p=d[n]^d[e],b=d[n+1]^d[e+1],d[n]=p>>>16^b<<16,d[n+1]=b>>>16^p<<16,i(d,r,n),p=d[t]^d[r],b=d[t+1]^d[r+1],d[t]=b>>>31^p<<1,d[t+1]=p>>>31^b<<1}const c=new Uint32Array([4089235720,1779033703,2227873595,3144134277,4271175723,1013904242,1595750129,2773480762,2917565137,1359893119,725511199,2600822924,4215389547,528734635,327033209,1541459225]),u=new Uint8Array([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,14,10,4,8,9,15,13,6,1,12,0,2,11,7,5,3,11,8,12,0,5,2,15,13,10,14,3,6,7,1,9,4,7,9,3,1,13,12,11,14,2,6,5,10,4,0,15,8,9,0,5,7,2,4,10,15,14,1,11,12,6,8,3,13,2,12,6,10,0,11,8,3,4,13,7,5,15,14,1,9,12,5,1,15,14,13,4,10,0,7,6,3,9,2,8,11,13,11,7,14,12,1,3,9,5,0,15,4,8,6,2,10,6,15,14,9,11,3,0,8,12,2,13,7,1,4,10,5,10,2,8,4,7,6,1,5,15,11,9,14,3,12,13,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,14,10,4,8,9,15,13,6,1,12,0,2,11,7,5,3].map((function(e){return 2*e}))),d=new Uint32Array(32),f=new Uint32Array(32);function h(e,t){let r=0;for(r=0;r<16;r++)d[r]=e.h[r],d[r+16]=c[r];for(d[24]=d[24]^e.t,d[25]=d[25]^e.t/4294967296,t&&(d[28]=~d[28],d[29]=~d[29]),r=0;r<32;r++)f[r]=s(e.b,4*r);for(r=0;r<12;r++)a(0,8,16,24,u[16*r+0],u[16*r+1]),a(2,10,18,26,u[16*r+2],u[16*r+3]),a(4,12,20,28,u[16*r+4],u[16*r+5]),a(6,14,22,30,u[16*r+6],u[16*r+7]),a(0,10,20,30,u[16*r+8],u[16*r+9]),a(2,12,22,24,u[16*r+10],u[16*r+11]),a(4,14,16,26,u[16*r+12],u[16*r+13]),a(6,8,18,28,u[16*r+14],u[16*r+15]);for(r=0;r<16;r++)e.h[r]=e.h[r]^d[r]^d[r+16]}const l=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);function p(e,t,r,n){if(0===e||e>64)throw new Error("Illegal output length, expected 0 < length <= 64");if(t&&t.length>64)throw new Error("Illegal key, expected Uint8Array with 0 < length <= 64");if(r&&16!==r.length)throw new Error("Illegal salt, expected Uint8Array with length is 16");if(n&&16!==n.length)throw new Error("Illegal personal, expected Uint8Array with length is 16");const i={b:new Uint8Array(128),h:new Uint32Array(16),t:0,c:0,outlen:e};l.fill(0),l[0]=e,t&&(l[1]=t.length),l[2]=1,l[3]=1,r&&l.set(r,32),n&&l.set(n,48);for(let e=0;e<16;e++)i.h[e]=c[e]^s(l,4*e);return t&&(b(i,t),i.c=128),i}function b(e,t){for(let r=0;r<t.length;r++)128===e.c&&(e.t+=e.c,h(e,!1),e.c=0),e.b[e.c++]=t[r]}function y(e){for(e.t+=e.c;e.c<128;)e.b[e.c++]=0;h(e,!0);const t=new Uint8Array(e.outlen);for(let r=0;r<e.outlen;r++)t[r]=e.h[r>>2]>>8*(3&r);return t}function m(e,t,r,i,o){r=r||64,e=n.normalizeInput(e),i&&(i=n.normalizeInput(i)),o&&(o=n.normalizeInput(o));const s=p(r,t,i,o);return b(s,e),y(s)}e.exports={blake2b:m,blake2bHex:function(e,t,r,i,o){const s=m(e,t,r,i,o);return n.toHex(s)},blake2bInit:p,blake2bUpdate:b,blake2bFinal:y}},7690:(e,t,r)=>{const n=r(1878);function i(e,t){return e[t]^e[t+1]<<8^e[t+2]<<16^e[t+3]<<24}function o(e,t,r,n,i,o){u[e]=u[e]+u[t]+i,u[n]=s(u[n]^u[e],16),u[r]=u[r]+u[n],u[t]=s(u[t]^u[r],12),u[e]=u[e]+u[t]+o,u[n]=s(u[n]^u[e],8),u[r]=u[r]+u[n],u[t]=s(u[t]^u[r],7)}function s(e,t){return e>>>t^e<<32-t}const a=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),c=new Uint8Array([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,14,10,4,8,9,15,13,6,1,12,0,2,11,7,5,3,11,8,12,0,5,2,15,13,10,14,3,6,7,1,9,4,7,9,3,1,13,12,11,14,2,6,5,10,4,0,15,8,9,0,5,7,2,4,10,15,14,1,11,12,6,8,3,13,2,12,6,10,0,11,8,3,4,13,7,5,15,14,1,9,12,5,1,15,14,13,4,10,0,7,6,3,9,2,8,11,13,11,7,14,12,1,3,9,5,0,15,4,8,6,2,10,6,15,14,9,11,3,0,8,12,2,13,7,1,4,10,5,10,2,8,4,7,6,1,5,15,11,9,14,3,12,13,0]),u=new Uint32Array(16),d=new Uint32Array(16);function f(e,t){let r=0;for(r=0;r<8;r++)u[r]=e.h[r],u[r+8]=a[r];for(u[12]^=e.t,u[13]^=e.t/4294967296,t&&(u[14]=~u[14]),r=0;r<16;r++)d[r]=i(e.b,4*r);for(r=0;r<10;r++)o(0,4,8,12,d[c[16*r+0]],d[c[16*r+1]]),o(1,5,9,13,d[c[16*r+2]],d[c[16*r+3]]),o(2,6,10,14,d[c[16*r+4]],d[c[16*r+5]]),o(3,7,11,15,d[c[16*r+6]],d[c[16*r+7]]),o(0,5,10,15,d[c[16*r+8]],d[c[16*r+9]]),o(1,6,11,12,d[c[16*r+10]],d[c[16*r+11]]),o(2,7,8,13,d[c[16*r+12]],d[c[16*r+13]]),o(3,4,9,14,d[c[16*r+14]],d[c[16*r+15]]);for(r=0;r<8;r++)e.h[r]^=u[r]^u[r+8]}function h(e,t){if(!(e>0&&e<=32))throw new Error("Incorrect output length, should be in [1, 32]");const r=t?t.length:0;if(t&&!(r>0&&r<=32))throw new Error("Incorrect key length, should be in [1, 32]");const n={h:new Uint32Array(a),b:new Uint8Array(64),c:0,t:0,outlen:e};return n.h[0]^=16842752^r<<8^e,r>0&&(l(n,t),n.c=64),n}function l(e,t){for(let r=0;r<t.length;r++)64===e.c&&(e.t+=e.c,f(e,!1),e.c=0),e.b[e.c++]=t[r]}function p(e){for(e.t+=e.c;e.c<64;)e.b[e.c++]=0;f(e,!0);const t=new Uint8Array(e.outlen);for(let r=0;r<e.outlen;r++)t[r]=e.h[r>>2]>>8*(3&r)&255;return t}function b(e,t,r){r=r||32,e=n.normalizeInput(e);const i=h(r,t);return l(i,e),p(i)}e.exports={blake2s:b,blake2sHex:function(e,t,r){const i=b(e,t,r);return n.toHex(i)},blake2sInit:h,blake2sUpdate:l,blake2sFinal:p}},1540:(e,t,r)=>{const n=r(8681),i=r(7690);e.exports={blake2b:n.blake2b,blake2bHex:n.blake2bHex,blake2bInit:n.blake2bInit,blake2bUpdate:n.blake2bUpdate,blake2bFinal:n.blake2bFinal,blake2s:i.blake2s,blake2sHex:i.blake2sHex,blake2sInit:i.blake2sInit,blake2sUpdate:i.blake2sUpdate,blake2sFinal:i.blake2sFinal}},1878:e=>{function t(e){return(4294967296+e).toString(16).substring(1)}e.exports={normalizeInput:function(e){let t;if(e instanceof Uint8Array)t=e;else{if("string"!=typeof e)throw new Error("Input must be an string, Buffer or Uint8Array");t=(new TextEncoder).encode(e)}return t},toHex:function(e){return Array.prototype.map.call(e,(function(e){return(e<16?"0":"")+e.toString(16)})).join("")},debugPrint:function(e,r,n){let i="\n"+e+" = ";for(let o=0;o<r.length;o+=2){if(32===n)i+=t(r[o]).toUpperCase(),i+=" ",i+=t(r[o+1]).toUpperCase();else{if(64!==n)throw new Error("Invalid size "+n);i+=t(r[o+1]).toUpperCase(),i+=t(r[o]).toUpperCase()}o%6==4?i+="\n"+new Array(e.length+4).join(" "):o<r.length-2&&(i+=" ")}console.log(i)},testSpeed:function(e,t,r){let n=(new Date).getTime();const i=new Uint8Array(t);for(let e=0;e<t;e++)i[e]=e%256;const o=(new Date).getTime();console.log("Generated random input in "+(o-n)+"ms"),n=o;for(let o=0;o<r;o++){const r=e(i),o=(new Date).getTime(),s=o-n;n=o,console.log("Hashed in "+s+"ms: "+r.substring(0,20)+"..."),console.log(Math.round(t/(1<<20)/(s/1e3)*100)/100+" MB PER SECOND")}}}},4619:function(e,t,r){!function(e,t){"use strict";function n(e,t){if(!e)throw new Error(t||"Assertion failed")}function i(e,t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}function o(e,t,r){if(o.isBN(e))return e;this.negative=0,this.words=null,this.length=0,this.red=null,null!==e&&("le"!==t&&"be"!==t||(r=t,t=10),this._init(e||0,t||10,r||"be"))}var s;"object"==typeof e?e.exports=o:t.BN=o,o.BN=o,o.wordSize=26;try{s="undefined"!=typeof window&&void 0!==window.Buffer?window.Buffer:r(7175).Buffer}catch(e){}function a(e,t){var r=e.charCodeAt(t);return r>=65&&r<=70?r-55:r>=97&&r<=102?r-87:r-48&15}function c(e,t,r){var n=a(e,r);return r-1>=t&&(n|=a(e,r-1)<<4),n}function u(e,t,r,n){for(var i=0,o=Math.min(e.length,r),s=t;s<o;s++){var a=e.charCodeAt(s)-48;i*=n,i+=a>=49?a-49+10:a>=17?a-17+10:a}return i}o.isBN=function(e){return e instanceof o||null!==e&&"object"==typeof e&&e.constructor.wordSize===o.wordSize&&Array.isArray(e.words)},o.max=function(e,t){return e.cmp(t)>0?e:t},o.min=function(e,t){return e.cmp(t)<0?e:t},o.prototype._init=function(e,t,r){if("number"==typeof e)return this._initNumber(e,t,r);if("object"==typeof e)return this._initArray(e,t,r);"hex"===t&&(t=16),n(t===(0|t)&&t>=2&&t<=36);var i=0;"-"===(e=e.toString().replace(/\s+/g,""))[0]&&(i++,this.negative=1),i<e.length&&(16===t?this._parseHex(e,i,r):(this._parseBase(e,t,i),"le"===r&&this._initArray(this.toArray(),t,r)))},o.prototype._initNumber=function(e,t,r){e<0&&(this.negative=1,e=-e),e<67108864?(this.words=[67108863&e],this.length=1):e<4503599627370496?(this.words=[67108863&e,e/67108864&67108863],this.length=2):(n(e<9007199254740992),this.words=[67108863&e,e/67108864&67108863,1],this.length=3),"le"===r&&this._initArray(this.toArray(),t,r)},o.prototype._initArray=function(e,t,r){if(n("number"==typeof e.length),e.length<=0)return this.words=[0],this.length=1,this;this.length=Math.ceil(e.length/3),this.words=new Array(this.length);for(var i=0;i<this.length;i++)this.words[i]=0;var o,s,a=0;if("be"===r)for(i=e.length-1,o=0;i>=0;i-=3)s=e[i]|e[i-1]<<8|e[i-2]<<16,this.words[o]|=s<<a&67108863,this.words[o+1]=s>>>26-a&67108863,(a+=24)>=26&&(a-=26,o++);else if("le"===r)for(i=0,o=0;i<e.length;i+=3)s=e[i]|e[i+1]<<8|e[i+2]<<16,this.words[o]|=s<<a&67108863,this.words[o+1]=s>>>26-a&67108863,(a+=24)>=26&&(a-=26,o++);return this.strip()},o.prototype._parseHex=function(e,t,r){this.length=Math.ceil((e.length-t)/6),this.words=new Array(this.length);for(var n=0;n<this.length;n++)this.words[n]=0;var i,o=0,s=0;if("be"===r)for(n=e.length-1;n>=t;n-=2)i=c(e,t,n)<<o,this.words[s]|=67108863&i,o>=18?(o-=18,s+=1,this.words[s]|=i>>>26):o+=8;else for(n=(e.length-t)%2==0?t+1:t;n<e.length;n+=2)i=c(e,t,n)<<o,this.words[s]|=67108863&i,o>=18?(o-=18,s+=1,this.words[s]|=i>>>26):o+=8;this.strip()},o.prototype._parseBase=function(e,t,r){this.words=[0],this.length=1;for(var n=0,i=1;i<=67108863;i*=t)n++;n--,i=i/t|0;for(var o=e.length-r,s=o%n,a=Math.min(o,o-s)+r,c=0,d=r;d<a;d+=n)c=u(e,d,d+n,t),this.imuln(i),this.words[0]+c<67108864?this.words[0]+=c:this._iaddn(c);if(0!==s){var f=1;for(c=u(e,d,e.length,t),d=0;d<s;d++)f*=t;this.imuln(f),this.words[0]+c<67108864?this.words[0]+=c:this._iaddn(c)}this.strip()},o.prototype.copy=function(e){e.words=new Array(this.length);for(var t=0;t<this.length;t++)e.words[t]=this.words[t];e.length=this.length,e.negative=this.negative,e.red=this.red},o.prototype.clone=function(){var e=new o(null);return this.copy(e),e},o.prototype._expand=function(e){for(;this.length<e;)this.words[this.length++]=0;return this},o.prototype.strip=function(){for(;this.length>1&&0===this.words[this.length-1];)this.length--;return this._normSign()},o.prototype._normSign=function(){return 1===this.length&&0===this.words[0]&&(this.negative=0),this},o.prototype.inspect=function(){return(this.red?"<BN-R: ":"<BN: ")+this.toString(16)+">"};var d=["","0","00","000","0000","00000","000000","0000000","00000000","000000000","0000000000","00000000000","000000000000","0000000000000","00000000000000","000000000000000","0000000000000000","00000000000000000","000000000000000000","0000000000000000000","00000000000000000000","000000000000000000000","0000000000000000000000","00000000000000000000000","000000000000000000000000","0000000000000000000000000"],f=[0,0,25,16,12,11,10,9,8,8,7,7,7,7,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],h=[0,0,33554432,43046721,16777216,48828125,60466176,40353607,16777216,43046721,1e7,19487171,35831808,62748517,7529536,11390625,16777216,24137569,34012224,47045881,64e6,4084101,5153632,6436343,7962624,9765625,11881376,14348907,17210368,20511149,243e5,28629151,33554432,39135393,45435424,52521875,60466176];function l(e,t,r){r.negative=t.negative^e.negative;var n=e.length+t.length|0;r.length=n,n=n-1|0;var i=0|e.words[0],o=0|t.words[0],s=i*o,a=67108863&s,c=s/67108864|0;r.words[0]=a;for(var u=1;u<n;u++){for(var d=c>>>26,f=67108863&c,h=Math.min(u,t.length-1),l=Math.max(0,u-e.length+1);l<=h;l++){var p=u-l|0;d+=(s=(i=0|e.words[p])*(o=0|t.words[l])+f)/67108864|0,f=67108863&s}r.words[u]=0|f,c=0|d}return 0!==c?r.words[u]=0|c:r.length--,r.strip()}o.prototype.toString=function(e,t){var r;if(t=0|t||1,16===(e=e||10)||"hex"===e){r="";for(var i=0,o=0,s=0;s<this.length;s++){var a=this.words[s],c=(16777215&(a<<i|o)).toString(16);r=0!=(o=a>>>24-i&16777215)||s!==this.length-1?d[6-c.length]+c+r:c+r,(i+=2)>=26&&(i-=26,s--)}for(0!==o&&(r=o.toString(16)+r);r.length%t!=0;)r="0"+r;return 0!==this.negative&&(r="-"+r),r}if(e===(0|e)&&e>=2&&e<=36){var u=f[e],l=h[e];r="";var p=this.clone();for(p.negative=0;!p.isZero();){var b=p.modn(l).toString(e);r=(p=p.idivn(l)).isZero()?b+r:d[u-b.length]+b+r}for(this.isZero()&&(r="0"+r);r.length%t!=0;)r="0"+r;return 0!==this.negative&&(r="-"+r),r}n(!1,"Base should be between 2 and 36")},o.prototype.toNumber=function(){var e=this.words[0];return 2===this.length?e+=67108864*this.words[1]:3===this.length&&1===this.words[2]?e+=4503599627370496+67108864*this.words[1]:this.length>2&&n(!1,"Number can only safely store up to 53 bits"),0!==this.negative?-e:e},o.prototype.toJSON=function(){return this.toString(16)},o.prototype.toBuffer=function(e,t){return n(void 0!==s),this.toArrayLike(s,e,t)},o.prototype.toArray=function(e,t){return this.toArrayLike(Array,e,t)},o.prototype.toArrayLike=function(e,t,r){var i=this.byteLength(),o=r||Math.max(1,i);n(i<=o,"byte array longer than desired length"),n(o>0,"Requested array length <= 0"),this.strip();var s,a,c="le"===t,u=new e(o),d=this.clone();if(c){for(a=0;!d.isZero();a++)s=d.andln(255),d.iushrn(8),u[a]=s;for(;a<o;a++)u[a]=0}else{for(a=0;a<o-i;a++)u[a]=0;for(a=0;!d.isZero();a++)s=d.andln(255),d.iushrn(8),u[o-a-1]=s}return u},Math.clz32?o.prototype._countBits=function(e){return 32-Math.clz32(e)}:o.prototype._countBits=function(e){var t=e,r=0;return t>=4096&&(r+=13,t>>>=13),t>=64&&(r+=7,t>>>=7),t>=8&&(r+=4,t>>>=4),t>=2&&(r+=2,t>>>=2),r+t},o.prototype._zeroBits=function(e){if(0===e)return 26;var t=e,r=0;return 8191&t||(r+=13,t>>>=13),127&t||(r+=7,t>>>=7),15&t||(r+=4,t>>>=4),3&t||(r+=2,t>>>=2),1&t||r++,r},o.prototype.bitLength=function(){var e=this.words[this.length-1],t=this._countBits(e);return 26*(this.length-1)+t},o.prototype.zeroBits=function(){if(this.isZero())return 0;for(var e=0,t=0;t<this.length;t++){var r=this._zeroBits(this.words[t]);if(e+=r,26!==r)break}return e},o.prototype.byteLength=function(){return Math.ceil(this.bitLength()/8)},o.prototype.toTwos=function(e){return 0!==this.negative?this.abs().inotn(e).iaddn(1):this.clone()},o.prototype.fromTwos=function(e){return this.testn(e-1)?this.notn(e).iaddn(1).ineg():this.clone()},o.prototype.isNeg=function(){return 0!==this.negative},o.prototype.neg=function(){return this.clone().ineg()},o.prototype.ineg=function(){return this.isZero()||(this.negative^=1),this},o.prototype.iuor=function(e){for(;this.length<e.length;)this.words[this.length++]=0;for(var t=0;t<e.length;t++)this.words[t]=this.words[t]|e.words[t];return this.strip()},o.prototype.ior=function(e){return n(!(this.negative|e.negative)),this.iuor(e)},o.prototype.or=function(e){return this.length>e.length?this.clone().ior(e):e.clone().ior(this)},o.prototype.uor=function(e){return this.length>e.length?this.clone().iuor(e):e.clone().iuor(this)},o.prototype.iuand=function(e){var t;t=this.length>e.length?e:this;for(var r=0;r<t.length;r++)this.words[r]=this.words[r]&e.words[r];return this.length=t.length,this.strip()},o.prototype.iand=function(e){return n(!(this.negative|e.negative)),this.iuand(e)},o.prototype.and=function(e){return this.length>e.length?this.clone().iand(e):e.clone().iand(this)},o.prototype.uand=function(e){return this.length>e.length?this.clone().iuand(e):e.clone().iuand(this)},o.prototype.iuxor=function(e){var t,r;this.length>e.length?(t=this,r=e):(t=e,r=this);for(var n=0;n<r.length;n++)this.words[n]=t.words[n]^r.words[n];if(this!==t)for(;n<t.length;n++)this.words[n]=t.words[n];return this.length=t.length,this.strip()},o.prototype.ixor=function(e){return n(!(this.negative|e.negative)),this.iuxor(e)},o.prototype.xor=function(e){return this.length>e.length?this.clone().ixor(e):e.clone().ixor(this)},o.prototype.uxor=function(e){return this.length>e.length?this.clone().iuxor(e):e.clone().iuxor(this)},o.prototype.inotn=function(e){n("number"==typeof e&&e>=0);var t=0|Math.ceil(e/26),r=e%26;this._expand(t),r>0&&t--;for(var i=0;i<t;i++)this.words[i]=67108863&~this.words[i];return r>0&&(this.words[i]=~this.words[i]&67108863>>26-r),this.strip()},o.prototype.notn=function(e){return this.clone().inotn(e)},o.prototype.setn=function(e,t){n("number"==typeof e&&e>=0);var r=e/26|0,i=e%26;return this._expand(r+1),this.words[r]=t?this.words[r]|1<<i:this.words[r]&~(1<<i),this.strip()},o.prototype.iadd=function(e){var t,r,n;if(0!==this.negative&&0===e.negative)return this.negative=0,t=this.isub(e),this.negative^=1,this._normSign();if(0===this.negative&&0!==e.negative)return e.negative=0,t=this.isub(e),e.negative=1,t._normSign();this.length>e.length?(r=this,n=e):(r=e,n=this);for(var i=0,o=0;o<n.length;o++)t=(0|r.words[o])+(0|n.words[o])+i,this.words[o]=67108863&t,i=t>>>26;for(;0!==i&&o<r.length;o++)t=(0|r.words[o])+i,this.words[o]=67108863&t,i=t>>>26;if(this.length=r.length,0!==i)this.words[this.length]=i,this.length++;else if(r!==this)for(;o<r.length;o++)this.words[o]=r.words[o];return this},o.prototype.add=function(e){var t;return 0!==e.negative&&0===this.negative?(e.negative=0,t=this.sub(e),e.negative^=1,t):0===e.negative&&0!==this.negative?(this.negative=0,t=e.sub(this),this.negative=1,t):this.length>e.length?this.clone().iadd(e):e.clone().iadd(this)},o.prototype.isub=function(e){if(0!==e.negative){e.negative=0;var t=this.iadd(e);return e.negative=1,t._normSign()}if(0!==this.negative)return this.negative=0,this.iadd(e),this.negative=1,this._normSign();var r,n,i=this.cmp(e);if(0===i)return this.negative=0,this.length=1,this.words[0]=0,this;i>0?(r=this,n=e):(r=e,n=this);for(var o=0,s=0;s<n.length;s++)o=(t=(0|r.words[s])-(0|n.words[s])+o)>>26,this.words[s]=67108863&t;for(;0!==o&&s<r.length;s++)o=(t=(0|r.words[s])+o)>>26,this.words[s]=67108863&t;if(0===o&&s<r.length&&r!==this)for(;s<r.length;s++)this.words[s]=r.words[s];return this.length=Math.max(this.length,s),r!==this&&(this.negative=1),this.strip()},o.prototype.sub=function(e){return this.clone().isub(e)};var p=function(e,t,r){var n,i,o,s=e.words,a=t.words,c=r.words,u=0,d=0|s[0],f=8191&d,h=d>>>13,l=0|s[1],p=8191&l,b=l>>>13,y=0|s[2],m=8191&y,g=y>>>13,v=0|s[3],w=8191&v,_=v>>>13,A=0|s[4],S=8191&A,M=A>>>13,C=0|s[5],T=8191&C,E=C>>>13,k=0|s[6],I=8191&k,x=k>>>13,B=0|s[7],U=8191&B,P=B>>>13,O=0|s[8],R=8191&O,L=O>>>13,N=0|s[9],j=8191&N,D=N>>>13,F=0|a[0],H=8191&F,q=F>>>13,$=0|a[1],V=8191&$,z=$>>>13,G=0|a[2],K=8191&G,W=G>>>13,J=0|a[3],Z=8191&J,X=J>>>13,Y=0|a[4],Q=8191&Y,ee=Y>>>13,te=0|a[5],re=8191&te,ne=te>>>13,ie=0|a[6],oe=8191&ie,se=ie>>>13,ae=0|a[7],ce=8191&ae,ue=ae>>>13,de=0|a[8],fe=8191&de,he=de>>>13,le=0|a[9],pe=8191&le,be=le>>>13;r.negative=e.negative^t.negative,r.length=19;var ye=(u+(n=Math.imul(f,H))|0)+((8191&(i=(i=Math.imul(f,q))+Math.imul(h,H)|0))<<13)|0;u=((o=Math.imul(h,q))+(i>>>13)|0)+(ye>>>26)|0,ye&=67108863,n=Math.imul(p,H),i=(i=Math.imul(p,q))+Math.imul(b,H)|0,o=Math.imul(b,q);var me=(u+(n=n+Math.imul(f,V)|0)|0)+((8191&(i=(i=i+Math.imul(f,z)|0)+Math.imul(h,V)|0))<<13)|0;u=((o=o+Math.imul(h,z)|0)+(i>>>13)|0)+(me>>>26)|0,me&=67108863,n=Math.imul(m,H),i=(i=Math.imul(m,q))+Math.imul(g,H)|0,o=Math.imul(g,q),n=n+Math.imul(p,V)|0,i=(i=i+Math.imul(p,z)|0)+Math.imul(b,V)|0,o=o+Math.imul(b,z)|0;var ge=(u+(n=n+Math.imul(f,K)|0)|0)+((8191&(i=(i=i+Math.imul(f,W)|0)+Math.imul(h,K)|0))<<13)|0;u=((o=o+Math.imul(h,W)|0)+(i>>>13)|0)+(ge>>>26)|0,ge&=67108863,n=Math.imul(w,H),i=(i=Math.imul(w,q))+Math.imul(_,H)|0,o=Math.imul(_,q),n=n+Math.imul(m,V)|0,i=(i=i+Math.imul(m,z)|0)+Math.imul(g,V)|0,o=o+Math.imul(g,z)|0,n=n+Math.imul(p,K)|0,i=(i=i+Math.imul(p,W)|0)+Math.imul(b,K)|0,o=o+Math.imul(b,W)|0;var ve=(u+(n=n+Math.imul(f,Z)|0)|0)+((8191&(i=(i=i+Math.imul(f,X)|0)+Math.imul(h,Z)|0))<<13)|0;u=((o=o+Math.imul(h,X)|0)+(i>>>13)|0)+(ve>>>26)|0,ve&=67108863,n=Math.imul(S,H),i=(i=Math.imul(S,q))+Math.imul(M,H)|0,o=Math.imul(M,q),n=n+Math.imul(w,V)|0,i=(i=i+Math.imul(w,z)|0)+Math.imul(_,V)|0,o=o+Math.imul(_,z)|0,n=n+Math.imul(m,K)|0,i=(i=i+Math.imul(m,W)|0)+Math.imul(g,K)|0,o=o+Math.imul(g,W)|0,n=n+Math.imul(p,Z)|0,i=(i=i+Math.imul(p,X)|0)+Math.imul(b,Z)|0,o=o+Math.imul(b,X)|0;var we=(u+(n=n+Math.imul(f,Q)|0)|0)+((8191&(i=(i=i+Math.imul(f,ee)|0)+Math.imul(h,Q)|0))<<13)|0;u=((o=o+Math.imul(h,ee)|0)+(i>>>13)|0)+(we>>>26)|0,we&=67108863,n=Math.imul(T,H),i=(i=Math.imul(T,q))+Math.imul(E,H)|0,o=Math.imul(E,q),n=n+Math.imul(S,V)|0,i=(i=i+Math.imul(S,z)|0)+Math.imul(M,V)|0,o=o+Math.imul(M,z)|0,n=n+Math.imul(w,K)|0,i=(i=i+Math.imul(w,W)|0)+Math.imul(_,K)|0,o=o+Math.imul(_,W)|0,n=n+Math.imul(m,Z)|0,i=(i=i+Math.imul(m,X)|0)+Math.imul(g,Z)|0,o=o+Math.imul(g,X)|0,n=n+Math.imul(p,Q)|0,i=(i=i+Math.imul(p,ee)|0)+Math.imul(b,Q)|0,o=o+Math.imul(b,ee)|0;var _e=(u+(n=n+Math.imul(f,re)|0)|0)+((8191&(i=(i=i+Math.imul(f,ne)|0)+Math.imul(h,re)|0))<<13)|0;u=((o=o+Math.imul(h,ne)|0)+(i>>>13)|0)+(_e>>>26)|0,_e&=67108863,n=Math.imul(I,H),i=(i=Math.imul(I,q))+Math.imul(x,H)|0,o=Math.imul(x,q),n=n+Math.imul(T,V)|0,i=(i=i+Math.imul(T,z)|0)+Math.imul(E,V)|0,o=o+Math.imul(E,z)|0,n=n+Math.imul(S,K)|0,i=(i=i+Math.imul(S,W)|0)+Math.imul(M,K)|0,o=o+Math.imul(M,W)|0,n=n+Math.imul(w,Z)|0,i=(i=i+Math.imul(w,X)|0)+Math.imul(_,Z)|0,o=o+Math.imul(_,X)|0,n=n+Math.imul(m,Q)|0,i=(i=i+Math.imul(m,ee)|0)+Math.imul(g,Q)|0,o=o+Math.imul(g,ee)|0,n=n+Math.imul(p,re)|0,i=(i=i+Math.imul(p,ne)|0)+Math.imul(b,re)|0,o=o+Math.imul(b,ne)|0;var Ae=(u+(n=n+Math.imul(f,oe)|0)|0)+((8191&(i=(i=i+Math.imul(f,se)|0)+Math.imul(h,oe)|0))<<13)|0;u=((o=o+Math.imul(h,se)|0)+(i>>>13)|0)+(Ae>>>26)|0,Ae&=67108863,n=Math.imul(U,H),i=(i=Math.imul(U,q))+Math.imul(P,H)|0,o=Math.imul(P,q),n=n+Math.imul(I,V)|0,i=(i=i+Math.imul(I,z)|0)+Math.imul(x,V)|0,o=o+Math.imul(x,z)|0,n=n+Math.imul(T,K)|0,i=(i=i+Math.imul(T,W)|0)+Math.imul(E,K)|0,o=o+Math.imul(E,W)|0,n=n+Math.imul(S,Z)|0,i=(i=i+Math.imul(S,X)|0)+Math.imul(M,Z)|0,o=o+Math.imul(M,X)|0,n=n+Math.imul(w,Q)|0,i=(i=i+Math.imul(w,ee)|0)+Math.imul(_,Q)|0,o=o+Math.imul(_,ee)|0,n=n+Math.imul(m,re)|0,i=(i=i+Math.imul(m,ne)|0)+Math.imul(g,re)|0,o=o+Math.imul(g,ne)|0,n=n+Math.imul(p,oe)|0,i=(i=i+Math.imul(p,se)|0)+Math.imul(b,oe)|0,o=o+Math.imul(b,se)|0;var Se=(u+(n=n+Math.imul(f,ce)|0)|0)+((8191&(i=(i=i+Math.imul(f,ue)|0)+Math.imul(h,ce)|0))<<13)|0;u=((o=o+Math.imul(h,ue)|0)+(i>>>13)|0)+(Se>>>26)|0,Se&=67108863,n=Math.imul(R,H),i=(i=Math.imul(R,q))+Math.imul(L,H)|0,o=Math.imul(L,q),n=n+Math.imul(U,V)|0,i=(i=i+Math.imul(U,z)|0)+Math.imul(P,V)|0,o=o+Math.imul(P,z)|0,n=n+Math.imul(I,K)|0,i=(i=i+Math.imul(I,W)|0)+Math.imul(x,K)|0,o=o+Math.imul(x,W)|0,n=n+Math.imul(T,Z)|0,i=(i=i+Math.imul(T,X)|0)+Math.imul(E,Z)|0,o=o+Math.imul(E,X)|0,n=n+Math.imul(S,Q)|0,i=(i=i+Math.imul(S,ee)|0)+Math.imul(M,Q)|0,o=o+Math.imul(M,ee)|0,n=n+Math.imul(w,re)|0,i=(i=i+Math.imul(w,ne)|0)+Math.imul(_,re)|0,o=o+Math.imul(_,ne)|0,n=n+Math.imul(m,oe)|0,i=(i=i+Math.imul(m,se)|0)+Math.imul(g,oe)|0,o=o+Math.imul(g,se)|0,n=n+Math.imul(p,ce)|0,i=(i=i+Math.imul(p,ue)|0)+Math.imul(b,ce)|0,o=o+Math.imul(b,ue)|0;var Me=(u+(n=n+Math.imul(f,fe)|0)|0)+((8191&(i=(i=i+Math.imul(f,he)|0)+Math.imul(h,fe)|0))<<13)|0;u=((o=o+Math.imul(h,he)|0)+(i>>>13)|0)+(Me>>>26)|0,Me&=67108863,n=Math.imul(j,H),i=(i=Math.imul(j,q))+Math.imul(D,H)|0,o=Math.imul(D,q),n=n+Math.imul(R,V)|0,i=(i=i+Math.imul(R,z)|0)+Math.imul(L,V)|0,o=o+Math.imul(L,z)|0,n=n+Math.imul(U,K)|0,i=(i=i+Math.imul(U,W)|0)+Math.imul(P,K)|0,o=o+Math.imul(P,W)|0,n=n+Math.imul(I,Z)|0,i=(i=i+Math.imul(I,X)|0)+Math.imul(x,Z)|0,o=o+Math.imul(x,X)|0,n=n+Math.imul(T,Q)|0,i=(i=i+Math.imul(T,ee)|0)+Math.imul(E,Q)|0,o=o+Math.imul(E,ee)|0,n=n+Math.imul(S,re)|0,i=(i=i+Math.imul(S,ne)|0)+Math.imul(M,re)|0,o=o+Math.imul(M,ne)|0,n=n+Math.imul(w,oe)|0,i=(i=i+Math.imul(w,se)|0)+Math.imul(_,oe)|0,o=o+Math.imul(_,se)|0,n=n+Math.imul(m,ce)|0,i=(i=i+Math.imul(m,ue)|0)+Math.imul(g,ce)|0,o=o+Math.imul(g,ue)|0,n=n+Math.imul(p,fe)|0,i=(i=i+Math.imul(p,he)|0)+Math.imul(b,fe)|0,o=o+Math.imul(b,he)|0;var Ce=(u+(n=n+Math.imul(f,pe)|0)|0)+((8191&(i=(i=i+Math.imul(f,be)|0)+Math.imul(h,pe)|0))<<13)|0;u=((o=o+Math.imul(h,be)|0)+(i>>>13)|0)+(Ce>>>26)|0,Ce&=67108863,n=Math.imul(j,V),i=(i=Math.imul(j,z))+Math.imul(D,V)|0,o=Math.imul(D,z),n=n+Math.imul(R,K)|0,i=(i=i+Math.imul(R,W)|0)+Math.imul(L,K)|0,o=o+Math.imul(L,W)|0,n=n+Math.imul(U,Z)|0,i=(i=i+Math.imul(U,X)|0)+Math.imul(P,Z)|0,o=o+Math.imul(P,X)|0,n=n+Math.imul(I,Q)|0,i=(i=i+Math.imul(I,ee)|0)+Math.imul(x,Q)|0,o=o+Math.imul(x,ee)|0,n=n+Math.imul(T,re)|0,i=(i=i+Math.imul(T,ne)|0)+Math.imul(E,re)|0,o=o+Math.imul(E,ne)|0,n=n+Math.imul(S,oe)|0,i=(i=i+Math.imul(S,se)|0)+Math.imul(M,oe)|0,o=o+Math.imul(M,se)|0,n=n+Math.imul(w,ce)|0,i=(i=i+Math.imul(w,ue)|0)+Math.imul(_,ce)|0,o=o+Math.imul(_,ue)|0,n=n+Math.imul(m,fe)|0,i=(i=i+Math.imul(m,he)|0)+Math.imul(g,fe)|0,o=o+Math.imul(g,he)|0;var Te=(u+(n=n+Math.imul(p,pe)|0)|0)+((8191&(i=(i=i+Math.imul(p,be)|0)+Math.imul(b,pe)|0))<<13)|0;u=((o=o+Math.imul(b,be)|0)+(i>>>13)|0)+(Te>>>26)|0,Te&=67108863,n=Math.imul(j,K),i=(i=Math.imul(j,W))+Math.imul(D,K)|0,o=Math.imul(D,W),n=n+Math.imul(R,Z)|0,i=(i=i+Math.imul(R,X)|0)+Math.imul(L,Z)|0,o=o+Math.imul(L,X)|0,n=n+Math.imul(U,Q)|0,i=(i=i+Math.imul(U,ee)|0)+Math.imul(P,Q)|0,o=o+Math.imul(P,ee)|0,n=n+Math.imul(I,re)|0,i=(i=i+Math.imul(I,ne)|0)+Math.imul(x,re)|0,o=o+Math.imul(x,ne)|0,n=n+Math.imul(T,oe)|0,i=(i=i+Math.imul(T,se)|0)+Math.imul(E,oe)|0,o=o+Math.imul(E,se)|0,n=n+Math.imul(S,ce)|0,i=(i=i+Math.imul(S,ue)|0)+Math.imul(M,ce)|0,o=o+Math.imul(M,ue)|0,n=n+Math.imul(w,fe)|0,i=(i=i+Math.imul(w,he)|0)+Math.imul(_,fe)|0,o=o+Math.imul(_,he)|0;var Ee=(u+(n=n+Math.imul(m,pe)|0)|0)+((8191&(i=(i=i+Math.imul(m,be)|0)+Math.imul(g,pe)|0))<<13)|0;u=((o=o+Math.imul(g,be)|0)+(i>>>13)|0)+(Ee>>>26)|0,Ee&=67108863,n=Math.imul(j,Z),i=(i=Math.imul(j,X))+Math.imul(D,Z)|0,o=Math.imul(D,X),n=n+Math.imul(R,Q)|0,i=(i=i+Math.imul(R,ee)|0)+Math.imul(L,Q)|0,o=o+Math.imul(L,ee)|0,n=n+Math.imul(U,re)|0,i=(i=i+Math.imul(U,ne)|0)+Math.imul(P,re)|0,o=o+Math.imul(P,ne)|0,n=n+Math.imul(I,oe)|0,i=(i=i+Math.imul(I,se)|0)+Math.imul(x,oe)|0,o=o+Math.imul(x,se)|0,n=n+Math.imul(T,ce)|0,i=(i=i+Math.imul(T,ue)|0)+Math.imul(E,ce)|0,o=o+Math.imul(E,ue)|0,n=n+Math.imul(S,fe)|0,i=(i=i+Math.imul(S,he)|0)+Math.imul(M,fe)|0,o=o+Math.imul(M,he)|0;var ke=(u+(n=n+Math.imul(w,pe)|0)|0)+((8191&(i=(i=i+Math.imul(w,be)|0)+Math.imul(_,pe)|0))<<13)|0;u=((o=o+Math.imul(_,be)|0)+(i>>>13)|0)+(ke>>>26)|0,ke&=67108863,n=Math.imul(j,Q),i=(i=Math.imul(j,ee))+Math.imul(D,Q)|0,o=Math.imul(D,ee),n=n+Math.imul(R,re)|0,i=(i=i+Math.imul(R,ne)|0)+Math.imul(L,re)|0,o=o+Math.imul(L,ne)|0,n=n+Math.imul(U,oe)|0,i=(i=i+Math.imul(U,se)|0)+Math.imul(P,oe)|0,o=o+Math.imul(P,se)|0,n=n+Math.imul(I,ce)|0,i=(i=i+Math.imul(I,ue)|0)+Math.imul(x,ce)|0,o=o+Math.imul(x,ue)|0,n=n+Math.imul(T,fe)|0,i=(i=i+Math.imul(T,he)|0)+Math.imul(E,fe)|0,o=o+Math.imul(E,he)|0;var Ie=(u+(n=n+Math.imul(S,pe)|0)|0)+((8191&(i=(i=i+Math.imul(S,be)|0)+Math.imul(M,pe)|0))<<13)|0;u=((o=o+Math.imul(M,be)|0)+(i>>>13)|0)+(Ie>>>26)|0,Ie&=67108863,n=Math.imul(j,re),i=(i=Math.imul(j,ne))+Math.imul(D,re)|0,o=Math.imul(D,ne),n=n+Math.imul(R,oe)|0,i=(i=i+Math.imul(R,se)|0)+Math.imul(L,oe)|0,o=o+Math.imul(L,se)|0,n=n+Math.imul(U,ce)|0,i=(i=i+Math.imul(U,ue)|0)+Math.imul(P,ce)|0,o=o+Math.imul(P,ue)|0,n=n+Math.imul(I,fe)|0,i=(i=i+Math.imul(I,he)|0)+Math.imul(x,fe)|0,o=o+Math.imul(x,he)|0;var xe=(u+(n=n+Math.imul(T,pe)|0)|0)+((8191&(i=(i=i+Math.imul(T,be)|0)+Math.imul(E,pe)|0))<<13)|0;u=((o=o+Math.imul(E,be)|0)+(i>>>13)|0)+(xe>>>26)|0,xe&=67108863,n=Math.imul(j,oe),i=(i=Math.imul(j,se))+Math.imul(D,oe)|0,o=Math.imul(D,se),n=n+Math.imul(R,ce)|0,i=(i=i+Math.imul(R,ue)|0)+Math.imul(L,ce)|0,o=o+Math.imul(L,ue)|0,n=n+Math.imul(U,fe)|0,i=(i=i+Math.imul(U,he)|0)+Math.imul(P,fe)|0,o=o+Math.imul(P,he)|0;var Be=(u+(n=n+Math.imul(I,pe)|0)|0)+((8191&(i=(i=i+Math.imul(I,be)|0)+Math.imul(x,pe)|0))<<13)|0;u=((o=o+Math.imul(x,be)|0)+(i>>>13)|0)+(Be>>>26)|0,Be&=67108863,n=Math.imul(j,ce),i=(i=Math.imul(j,ue))+Math.imul(D,ce)|0,o=Math.imul(D,ue),n=n+Math.imul(R,fe)|0,i=(i=i+Math.imul(R,he)|0)+Math.imul(L,fe)|0,o=o+Math.imul(L,he)|0;var Ue=(u+(n=n+Math.imul(U,pe)|0)|0)+((8191&(i=(i=i+Math.imul(U,be)|0)+Math.imul(P,pe)|0))<<13)|0;u=((o=o+Math.imul(P,be)|0)+(i>>>13)|0)+(Ue>>>26)|0,Ue&=67108863,n=Math.imul(j,fe),i=(i=Math.imul(j,he))+Math.imul(D,fe)|0,o=Math.imul(D,he);var Pe=(u+(n=n+Math.imul(R,pe)|0)|0)+((8191&(i=(i=i+Math.imul(R,be)|0)+Math.imul(L,pe)|0))<<13)|0;u=((o=o+Math.imul(L,be)|0)+(i>>>13)|0)+(Pe>>>26)|0,Pe&=67108863;var Oe=(u+(n=Math.imul(j,pe))|0)+((8191&(i=(i=Math.imul(j,be))+Math.imul(D,pe)|0))<<13)|0;return u=((o=Math.imul(D,be))+(i>>>13)|0)+(Oe>>>26)|0,Oe&=67108863,c[0]=ye,c[1]=me,c[2]=ge,c[3]=ve,c[4]=we,c[5]=_e,c[6]=Ae,c[7]=Se,c[8]=Me,c[9]=Ce,c[10]=Te,c[11]=Ee,c[12]=ke,c[13]=Ie,c[14]=xe,c[15]=Be,c[16]=Ue,c[17]=Pe,c[18]=Oe,0!==u&&(c[19]=u,r.length++),r};function b(e,t,r){return(new y).mulp(e,t,r)}function y(e,t){this.x=e,this.y=t}Math.imul||(p=l),o.prototype.mulTo=function(e,t){var r,n=this.length+e.length;return r=10===this.length&&10===e.length?p(this,e,t):n<63?l(this,e,t):n<1024?function(e,t,r){r.negative=t.negative^e.negative,r.length=e.length+t.length;for(var n=0,i=0,o=0;o<r.length-1;o++){var s=i;i=0;for(var a=67108863&n,c=Math.min(o,t.length-1),u=Math.max(0,o-e.length+1);u<=c;u++){var d=o-u,f=(0|e.words[d])*(0|t.words[u]),h=67108863&f;a=67108863&(h=h+a|0),i+=(s=(s=s+(f/67108864|0)|0)+(h>>>26)|0)>>>26,s&=67108863}r.words[o]=a,n=s,s=i}return 0!==n?r.words[o]=n:r.length--,r.strip()}(this,e,t):b(this,e,t),r},y.prototype.makeRBT=function(e){for(var t=new Array(e),r=o.prototype._countBits(e)-1,n=0;n<e;n++)t[n]=this.revBin(n,r,e);return t},y.prototype.revBin=function(e,t,r){if(0===e||e===r-1)return e;for(var n=0,i=0;i<t;i++)n|=(1&e)<<t-i-1,e>>=1;return n},y.prototype.permute=function(e,t,r,n,i,o){for(var s=0;s<o;s++)n[s]=t[e[s]],i[s]=r[e[s]]},y.prototype.transform=function(e,t,r,n,i,o){this.permute(o,e,t,r,n,i);for(var s=1;s<i;s<<=1)for(var a=s<<1,c=Math.cos(2*Math.PI/a),u=Math.sin(2*Math.PI/a),d=0;d<i;d+=a)for(var f=c,h=u,l=0;l<s;l++){var p=r[d+l],b=n[d+l],y=r[d+l+s],m=n[d+l+s],g=f*y-h*m;m=f*m+h*y,y=g,r[d+l]=p+y,n[d+l]=b+m,r[d+l+s]=p-y,n[d+l+s]=b-m,l!==a&&(g=c*f-u*h,h=c*h+u*f,f=g)}},y.prototype.guessLen13b=function(e,t){var r=1|Math.max(t,e),n=1&r,i=0;for(r=r/2|0;r;r>>>=1)i++;return 1<<i+1+n},y.prototype.conjugate=function(e,t,r){if(!(r<=1))for(var n=0;n<r/2;n++){var i=e[n];e[n]=e[r-n-1],e[r-n-1]=i,i=t[n],t[n]=-t[r-n-1],t[r-n-1]=-i}},y.prototype.normalize13b=function(e,t){for(var r=0,n=0;n<t/2;n++){var i=8192*Math.round(e[2*n+1]/t)+Math.round(e[2*n]/t)+r;e[n]=67108863&i,r=i<67108864?0:i/67108864|0}return e},y.prototype.convert13b=function(e,t,r,i){for(var o=0,s=0;s<t;s++)o+=0|e[s],r[2*s]=8191&o,o>>>=13,r[2*s+1]=8191&o,o>>>=13;for(s=2*t;s<i;++s)r[s]=0;n(0===o),n(!(-8192&o))},y.prototype.stub=function(e){for(var t=new Array(e),r=0;r<e;r++)t[r]=0;return t},y.prototype.mulp=function(e,t,r){var n=2*this.guessLen13b(e.length,t.length),i=this.makeRBT(n),o=this.stub(n),s=new Array(n),a=new Array(n),c=new Array(n),u=new Array(n),d=new Array(n),f=new Array(n),h=r.words;h.length=n,this.convert13b(e.words,e.length,s,n),this.convert13b(t.words,t.length,u,n),this.transform(s,o,a,c,n,i),this.transform(u,o,d,f,n,i);for(var l=0;l<n;l++){var p=a[l]*d[l]-c[l]*f[l];c[l]=a[l]*f[l]+c[l]*d[l],a[l]=p}return this.conjugate(a,c,n),this.transform(a,c,h,o,n,i),this.conjugate(h,o,n),this.normalize13b(h,n),r.negative=e.negative^t.negative,r.length=e.length+t.length,r.strip()},o.prototype.mul=function(e){var t=new o(null);return t.words=new Array(this.length+e.length),this.mulTo(e,t)},o.prototype.mulf=function(e){var t=new o(null);return t.words=new Array(this.length+e.length),b(this,e,t)},o.prototype.imul=function(e){return this.clone().mulTo(e,this)},o.prototype.imuln=function(e){n("number"==typeof e),n(e<67108864);for(var t=0,r=0;r<this.length;r++){var i=(0|this.words[r])*e,o=(67108863&i)+(67108863&t);t>>=26,t+=i/67108864|0,t+=o>>>26,this.words[r]=67108863&o}return 0!==t&&(this.words[r]=t,this.length++),this},o.prototype.muln=function(e){return this.clone().imuln(e)},o.prototype.sqr=function(){return this.mul(this)},o.prototype.isqr=function(){return this.imul(this.clone())},o.prototype.pow=function(e){var t=function(e){for(var t=new Array(e.bitLength()),r=0;r<t.length;r++){var n=r/26|0,i=r%26;t[r]=(e.words[n]&1<<i)>>>i}return t}(e);if(0===t.length)return new o(1);for(var r=this,n=0;n<t.length&&0===t[n];n++,r=r.sqr());if(++n<t.length)for(var i=r.sqr();n<t.length;n++,i=i.sqr())0!==t[n]&&(r=r.mul(i));return r},o.prototype.iushln=function(e){n("number"==typeof e&&e>=0);var t,r=e%26,i=(e-r)/26,o=67108863>>>26-r<<26-r;if(0!==r){var s=0;for(t=0;t<this.length;t++){var a=this.words[t]&o,c=(0|this.words[t])-a<<r;this.words[t]=c|s,s=a>>>26-r}s&&(this.words[t]=s,this.length++)}if(0!==i){for(t=this.length-1;t>=0;t--)this.words[t+i]=this.words[t];for(t=0;t<i;t++)this.words[t]=0;this.length+=i}return this.strip()},o.prototype.ishln=function(e){return n(0===this.negative),this.iushln(e)},o.prototype.iushrn=function(e,t,r){var i;n("number"==typeof e&&e>=0),i=t?(t-t%26)/26:0;var o=e%26,s=Math.min((e-o)/26,this.length),a=67108863^67108863>>>o<<o,c=r;if(i-=s,i=Math.max(0,i),c){for(var u=0;u<s;u++)c.words[u]=this.words[u];c.length=s}if(0===s);else if(this.length>s)for(this.length-=s,u=0;u<this.length;u++)this.words[u]=this.words[u+s];else this.words[0]=0,this.length=1;var d=0;for(u=this.length-1;u>=0&&(0!==d||u>=i);u--){var f=0|this.words[u];this.words[u]=d<<26-o|f>>>o,d=f&a}return c&&0!==d&&(c.words[c.length++]=d),0===this.length&&(this.words[0]=0,this.length=1),this.strip()},o.prototype.ishrn=function(e,t,r){return n(0===this.negative),this.iushrn(e,t,r)},o.prototype.shln=function(e){return this.clone().ishln(e)},o.prototype.ushln=function(e){return this.clone().iushln(e)},o.prototype.shrn=function(e){return this.clone().ishrn(e)},o.prototype.ushrn=function(e){return this.clone().iushrn(e)},o.prototype.testn=function(e){n("number"==typeof e&&e>=0);var t=e%26,r=(e-t)/26,i=1<<t;return!(this.length<=r||!(this.words[r]&i))},o.prototype.imaskn=function(e){n("number"==typeof e&&e>=0);var t=e%26,r=(e-t)/26;if(n(0===this.negative,"imaskn works only with positive numbers"),this.length<=r)return this;if(0!==t&&r++,this.length=Math.min(r,this.length),0!==t){var i=67108863^67108863>>>t<<t;this.words[this.length-1]&=i}return this.strip()},o.prototype.maskn=function(e){return this.clone().imaskn(e)},o.prototype.iaddn=function(e){return n("number"==typeof e),n(e<67108864),e<0?this.isubn(-e):0!==this.negative?1===this.length&&(0|this.words[0])<e?(this.words[0]=e-(0|this.words[0]),this.negative=0,this):(this.negative=0,this.isubn(e),this.negative=1,this):this._iaddn(e)},o.prototype._iaddn=function(e){this.words[0]+=e;for(var t=0;t<this.length&&this.words[t]>=67108864;t++)this.words[t]-=67108864,t===this.length-1?this.words[t+1]=1:this.words[t+1]++;return this.length=Math.max(this.length,t+1),this},o.prototype.isubn=function(e){if(n("number"==typeof e),n(e<67108864),e<0)return this.iaddn(-e);if(0!==this.negative)return this.negative=0,this.iaddn(e),this.negative=1,this;if(this.words[0]-=e,1===this.length&&this.words[0]<0)this.words[0]=-this.words[0],this.negative=1;else for(var t=0;t<this.length&&this.words[t]<0;t++)this.words[t]+=67108864,this.words[t+1]-=1;return this.strip()},o.prototype.addn=function(e){return this.clone().iaddn(e)},o.prototype.subn=function(e){return this.clone().isubn(e)},o.prototype.iabs=function(){return this.negative=0,this},o.prototype.abs=function(){return this.clone().iabs()},o.prototype._ishlnsubmul=function(e,t,r){var i,o,s=e.length+r;this._expand(s);var a=0;for(i=0;i<e.length;i++){o=(0|this.words[i+r])+a;var c=(0|e.words[i])*t;a=((o-=67108863&c)>>26)-(c/67108864|0),this.words[i+r]=67108863&o}for(;i<this.length-r;i++)a=(o=(0|this.words[i+r])+a)>>26,this.words[i+r]=67108863&o;if(0===a)return this.strip();for(n(-1===a),a=0,i=0;i<this.length;i++)a=(o=-(0|this.words[i])+a)>>26,this.words[i]=67108863&o;return this.negative=1,this.strip()},o.prototype._wordDiv=function(e,t){var r=(this.length,e.length),n=this.clone(),i=e,s=0|i.words[i.length-1];0!=(r=26-this._countBits(s))&&(i=i.ushln(r),n.iushln(r),s=0|i.words[i.length-1]);var a,c=n.length-i.length;if("mod"!==t){(a=new o(null)).length=c+1,a.words=new Array(a.length);for(var u=0;u<a.length;u++)a.words[u]=0}var d=n.clone()._ishlnsubmul(i,1,c);0===d.negative&&(n=d,a&&(a.words[c]=1));for(var f=c-1;f>=0;f--){var h=67108864*(0|n.words[i.length+f])+(0|n.words[i.length+f-1]);for(h=Math.min(h/s|0,67108863),n._ishlnsubmul(i,h,f);0!==n.negative;)h--,n.negative=0,n._ishlnsubmul(i,1,f),n.isZero()||(n.negative^=1);a&&(a.words[f]=h)}return a&&a.strip(),n.strip(),"div"!==t&&0!==r&&n.iushrn(r),{div:a||null,mod:n}},o.prototype.divmod=function(e,t,r){return n(!e.isZero()),this.isZero()?{div:new o(0),mod:new o(0)}:0!==this.negative&&0===e.negative?(a=this.neg().divmod(e,t),"mod"!==t&&(i=a.div.neg()),"div"!==t&&(s=a.mod.neg(),r&&0!==s.negative&&s.iadd(e)),{div:i,mod:s}):0===this.negative&&0!==e.negative?(a=this.divmod(e.neg(),t),"mod"!==t&&(i=a.div.neg()),{div:i,mod:a.mod}):this.negative&e.negative?(a=this.neg().divmod(e.neg(),t),"div"!==t&&(s=a.mod.neg(),r&&0!==s.negative&&s.isub(e)),{div:a.div,mod:s}):e.length>this.length||this.cmp(e)<0?{div:new o(0),mod:this}:1===e.length?"div"===t?{div:this.divn(e.words[0]),mod:null}:"mod"===t?{div:null,mod:new o(this.modn(e.words[0]))}:{div:this.divn(e.words[0]),mod:new o(this.modn(e.words[0]))}:this._wordDiv(e,t);var i,s,a},o.prototype.div=function(e){return this.divmod(e,"div",!1).div},o.prototype.mod=function(e){return this.divmod(e,"mod",!1).mod},o.prototype.umod=function(e){return this.divmod(e,"mod",!0).mod},o.prototype.divRound=function(e){var t=this.divmod(e);if(t.mod.isZero())return t.div;var r=0!==t.div.negative?t.mod.isub(e):t.mod,n=e.ushrn(1),i=e.andln(1),o=r.cmp(n);return o<0||1===i&&0===o?t.div:0!==t.div.negative?t.div.isubn(1):t.div.iaddn(1)},o.prototype.modn=function(e){n(e<=67108863);for(var t=(1<<26)%e,r=0,i=this.length-1;i>=0;i--)r=(t*r+(0|this.words[i]))%e;return r},o.prototype.idivn=function(e){n(e<=67108863);for(var t=0,r=this.length-1;r>=0;r--){var i=(0|this.words[r])+67108864*t;this.words[r]=i/e|0,t=i%e}return this.strip()},o.prototype.divn=function(e){return this.clone().idivn(e)},o.prototype.egcd=function(e){n(0===e.negative),n(!e.isZero());var t=this,r=e.clone();t=0!==t.negative?t.umod(e):t.clone();for(var i=new o(1),s=new o(0),a=new o(0),c=new o(1),u=0;t.isEven()&&r.isEven();)t.iushrn(1),r.iushrn(1),++u;for(var d=r.clone(),f=t.clone();!t.isZero();){for(var h=0,l=1;!(t.words[0]&l)&&h<26;++h,l<<=1);if(h>0)for(t.iushrn(h);h-- >0;)(i.isOdd()||s.isOdd())&&(i.iadd(d),s.isub(f)),i.iushrn(1),s.iushrn(1);for(var p=0,b=1;!(r.words[0]&b)&&p<26;++p,b<<=1);if(p>0)for(r.iushrn(p);p-- >0;)(a.isOdd()||c.isOdd())&&(a.iadd(d),c.isub(f)),a.iushrn(1),c.iushrn(1);t.cmp(r)>=0?(t.isub(r),i.isub(a),s.isub(c)):(r.isub(t),a.isub(i),c.isub(s))}return{a,b:c,gcd:r.iushln(u)}},o.prototype._invmp=function(e){n(0===e.negative),n(!e.isZero());var t=this,r=e.clone();t=0!==t.negative?t.umod(e):t.clone();for(var i,s=new o(1),a=new o(0),c=r.clone();t.cmpn(1)>0&&r.cmpn(1)>0;){for(var u=0,d=1;!(t.words[0]&d)&&u<26;++u,d<<=1);if(u>0)for(t.iushrn(u);u-- >0;)s.isOdd()&&s.iadd(c),s.iushrn(1);for(var f=0,h=1;!(r.words[0]&h)&&f<26;++f,h<<=1);if(f>0)for(r.iushrn(f);f-- >0;)a.isOdd()&&a.iadd(c),a.iushrn(1);t.cmp(r)>=0?(t.isub(r),s.isub(a)):(r.isub(t),a.isub(s))}return(i=0===t.cmpn(1)?s:a).cmpn(0)<0&&i.iadd(e),i},o.prototype.gcd=function(e){if(this.isZero())return e.abs();if(e.isZero())return this.abs();var t=this.clone(),r=e.clone();t.negative=0,r.negative=0;for(var n=0;t.isEven()&&r.isEven();n++)t.iushrn(1),r.iushrn(1);for(;;){for(;t.isEven();)t.iushrn(1);for(;r.isEven();)r.iushrn(1);var i=t.cmp(r);if(i<0){var o=t;t=r,r=o}else if(0===i||0===r.cmpn(1))break;t.isub(r)}return r.iushln(n)},o.prototype.invm=function(e){return this.egcd(e).a.umod(e)},o.prototype.isEven=function(){return!(1&this.words[0])},o.prototype.isOdd=function(){return!(1&~this.words[0])},o.prototype.andln=function(e){return this.words[0]&e},o.prototype.bincn=function(e){n("number"==typeof e);var t=e%26,r=(e-t)/26,i=1<<t;if(this.length<=r)return this._expand(r+1),this.words[r]|=i,this;for(var o=i,s=r;0!==o&&s<this.length;s++){var a=0|this.words[s];o=(a+=o)>>>26,a&=67108863,this.words[s]=a}return 0!==o&&(this.words[s]=o,this.length++),this},o.prototype.isZero=function(){return 1===this.length&&0===this.words[0]},o.prototype.cmpn=function(e){var t,r=e<0;if(0!==this.negative&&!r)return-1;if(0===this.negative&&r)return 1;if(this.strip(),this.length>1)t=1;else{r&&(e=-e),n(e<=67108863,"Number is too big");var i=0|this.words[0];t=i===e?0:i<e?-1:1}return 0!==this.negative?0|-t:t},o.prototype.cmp=function(e){if(0!==this.negative&&0===e.negative)return-1;if(0===this.negative&&0!==e.negative)return 1;var t=this.ucmp(e);return 0!==this.negative?0|-t:t},o.prototype.ucmp=function(e){if(this.length>e.length)return 1;if(this.length<e.length)return-1;for(var t=0,r=this.length-1;r>=0;r--){var n=0|this.words[r],i=0|e.words[r];if(n!==i){n<i?t=-1:n>i&&(t=1);break}}return t},o.prototype.gtn=function(e){return 1===this.cmpn(e)},o.prototype.gt=function(e){return 1===this.cmp(e)},o.prototype.gten=function(e){return this.cmpn(e)>=0},o.prototype.gte=function(e){return this.cmp(e)>=0},o.prototype.ltn=function(e){return-1===this.cmpn(e)},o.prototype.lt=function(e){return-1===this.cmp(e)},o.prototype.lten=function(e){return this.cmpn(e)<=0},o.prototype.lte=function(e){return this.cmp(e)<=0},o.prototype.eqn=function(e){return 0===this.cmpn(e)},o.prototype.eq=function(e){return 0===this.cmp(e)},o.red=function(e){return new S(e)},o.prototype.toRed=function(e){return n(!this.red,"Already a number in reduction context"),n(0===this.negative,"red works only with positives"),e.convertTo(this)._forceRed(e)},o.prototype.fromRed=function(){return n(this.red,"fromRed works only with numbers in reduction context"),this.red.convertFrom(this)},o.prototype._forceRed=function(e){return this.red=e,this},o.prototype.forceRed=function(e){return n(!this.red,"Already a number in reduction context"),this._forceRed(e)},o.prototype.redAdd=function(e){return n(this.red,"redAdd works only with red numbers"),this.red.add(this,e)},o.prototype.redIAdd=function(e){return n(this.red,"redIAdd works only with red numbers"),this.red.iadd(this,e)},o.prototype.redSub=function(e){return n(this.red,"redSub works only with red numbers"),this.red.sub(this,e)},o.prototype.redISub=function(e){return n(this.red,"redISub works only with red numbers"),this.red.isub(this,e)},o.prototype.redShl=function(e){return n(this.red,"redShl works only with red numbers"),this.red.shl(this,e)},o.prototype.redMul=function(e){return n(this.red,"redMul works only with red numbers"),this.red._verify2(this,e),this.red.mul(this,e)},o.prototype.redIMul=function(e){return n(this.red,"redMul works only with red numbers"),this.red._verify2(this,e),this.red.imul(this,e)},o.prototype.redSqr=function(){return n(this.red,"redSqr works only with red numbers"),this.red._verify1(this),this.red.sqr(this)},o.prototype.redISqr=function(){return n(this.red,"redISqr works only with red numbers"),this.red._verify1(this),this.red.isqr(this)},o.prototype.redSqrt=function(){return n(this.red,"redSqrt works only with red numbers"),this.red._verify1(this),this.red.sqrt(this)},o.prototype.redInvm=function(){return n(this.red,"redInvm works only with red numbers"),this.red._verify1(this),this.red.invm(this)},o.prototype.redNeg=function(){return n(this.red,"redNeg works only with red numbers"),this.red._verify1(this),this.red.neg(this)},o.prototype.redPow=function(e){return n(this.red&&!e.red,"redPow(normalNum)"),this.red._verify1(this),this.red.pow(this,e)};var m={k256:null,p224:null,p192:null,p25519:null};function g(e,t){this.name=e,this.p=new o(t,16),this.n=this.p.bitLength(),this.k=new o(1).iushln(this.n).isub(this.p),this.tmp=this._tmp()}function v(){g.call(this,"k256","ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")}function w(){g.call(this,"p224","ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")}function _(){g.call(this,"p192","ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")}function A(){g.call(this,"25519","7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")}function S(e){if("string"==typeof e){var t=o._prime(e);this.m=t.p,this.prime=t}else n(e.gtn(1),"modulus must be greater than 1"),this.m=e,this.prime=null}function M(e){S.call(this,e),this.shift=this.m.bitLength(),this.shift%26!=0&&(this.shift+=26-this.shift%26),this.r=new o(1).iushln(this.shift),this.r2=this.imod(this.r.sqr()),this.rinv=this.r._invmp(this.m),this.minv=this.rinv.mul(this.r).isubn(1).div(this.m),this.minv=this.minv.umod(this.r),this.minv=this.r.sub(this.minv)}g.prototype._tmp=function(){var e=new o(null);return e.words=new Array(Math.ceil(this.n/13)),e},g.prototype.ireduce=function(e){var t,r=e;do{this.split(r,this.tmp),t=(r=(r=this.imulK(r)).iadd(this.tmp)).bitLength()}while(t>this.n);var n=t<this.n?-1:r.ucmp(this.p);return 0===n?(r.words[0]=0,r.length=1):n>0?r.isub(this.p):void 0!==r.strip?r.strip():r._strip(),r},g.prototype.split=function(e,t){e.iushrn(this.n,0,t)},g.prototype.imulK=function(e){return e.imul(this.k)},i(v,g),v.prototype.split=function(e,t){for(var r=4194303,n=Math.min(e.length,9),i=0;i<n;i++)t.words[i]=e.words[i];if(t.length=n,e.length<=9)return e.words[0]=0,void(e.length=1);var o=e.words[9];for(t.words[t.length++]=o&r,i=10;i<e.length;i++){var s=0|e.words[i];e.words[i-10]=(s&r)<<4|o>>>22,o=s}o>>>=22,e.words[i-10]=o,0===o&&e.length>10?e.length-=10:e.length-=9},v.prototype.imulK=function(e){e.words[e.length]=0,e.words[e.length+1]=0,e.length+=2;for(var t=0,r=0;r<e.length;r++){var n=0|e.words[r];t+=977*n,e.words[r]=67108863&t,t=64*n+(t/67108864|0)}return 0===e.words[e.length-1]&&(e.length--,0===e.words[e.length-1]&&e.length--),e},i(w,g),i(_,g),i(A,g),A.prototype.imulK=function(e){for(var t=0,r=0;r<e.length;r++){var n=19*(0|e.words[r])+t,i=67108863&n;n>>>=26,e.words[r]=i,t=n}return 0!==t&&(e.words[e.length++]=t),e},o._prime=function(e){if(m[e])return m[e];var t;if("k256"===e)t=new v;else if("p224"===e)t=new w;else if("p192"===e)t=new _;else{if("p25519"!==e)throw new Error("Unknown prime "+e);t=new A}return m[e]=t,t},S.prototype._verify1=function(e){n(0===e.negative,"red works only with positives"),n(e.red,"red works only with red numbers")},S.prototype._verify2=function(e,t){n(!(e.negative|t.negative),"red works only with positives"),n(e.red&&e.red===t.red,"red works only with red numbers")},S.prototype.imod=function(e){return this.prime?this.prime.ireduce(e)._forceRed(this):e.umod(this.m)._forceRed(this)},S.prototype.neg=function(e){return e.isZero()?e.clone():this.m.sub(e)._forceRed(this)},S.prototype.add=function(e,t){this._verify2(e,t);var r=e.add(t);return r.cmp(this.m)>=0&&r.isub(this.m),r._forceRed(this)},S.prototype.iadd=function(e,t){this._verify2(e,t);var r=e.iadd(t);return r.cmp(this.m)>=0&&r.isub(this.m),r},S.prototype.sub=function(e,t){this._verify2(e,t);var r=e.sub(t);return r.cmpn(0)<0&&r.iadd(this.m),r._forceRed(this)},S.prototype.isub=function(e,t){this._verify2(e,t);var r=e.isub(t);return r.cmpn(0)<0&&r.iadd(this.m),r},S.prototype.shl=function(e,t){return this._verify1(e),this.imod(e.ushln(t))},S.prototype.imul=function(e,t){return this._verify2(e,t),this.imod(e.imul(t))},S.prototype.mul=function(e,t){return this._verify2(e,t),this.imod(e.mul(t))},S.prototype.isqr=function(e){return this.imul(e,e.clone())},S.prototype.sqr=function(e){return this.mul(e,e)},S.prototype.sqrt=function(e){if(e.isZero())return e.clone();var t=this.m.andln(3);if(n(t%2==1),3===t){var r=this.m.add(new o(1)).iushrn(2);return this.pow(e,r)}for(var i=this.m.subn(1),s=0;!i.isZero()&&0===i.andln(1);)s++,i.iushrn(1);n(!i.isZero());var a=new o(1).toRed(this),c=a.redNeg(),u=this.m.subn(1).iushrn(1),d=this.m.bitLength();for(d=new o(2*d*d).toRed(this);0!==this.pow(d,u).cmp(c);)d.redIAdd(c);for(var f=this.pow(d,i),h=this.pow(e,i.addn(1).iushrn(1)),l=this.pow(e,i),p=s;0!==l.cmp(a);){for(var b=l,y=0;0!==b.cmp(a);y++)b=b.redSqr();n(y<p);var m=this.pow(f,new o(1).iushln(p-y-1));h=h.redMul(m),f=m.redSqr(),l=l.redMul(f),p=y}return h},S.prototype.invm=function(e){var t=e._invmp(this.m);return 0!==t.negative?(t.negative=0,this.imod(t).redNeg()):this.imod(t)},S.prototype.pow=function(e,t){if(t.isZero())return new o(1).toRed(this);if(0===t.cmpn(1))return e.clone();var r=new Array(16);r[0]=new o(1).toRed(this),r[1]=e;for(var n=2;n<r.length;n++)r[n]=this.mul(r[n-1],e);var i=r[0],s=0,a=0,c=t.bitLength()%26;for(0===c&&(c=26),n=t.length-1;n>=0;n--){for(var u=t.words[n],d=c-1;d>=0;d--){var f=u>>d&1;i!==r[0]&&(i=this.sqr(i)),0!==f||0!==s?(s<<=1,s|=f,(4==++a||0===n&&0===d)&&(i=this.mul(i,r[s]),a=0,s=0)):a=0}c=26}return i},S.prototype.convertTo=function(e){var t=e.umod(this.m);return t===e?t.clone():t},S.prototype.convertFrom=function(e){var t=e.clone();return t.red=null,t},o.mont=function(e){return new M(e)},i(M,S),M.prototype.convertTo=function(e){return this.imod(e.ushln(this.shift))},M.prototype.convertFrom=function(e){var t=this.imod(e.mul(this.rinv));return t.red=null,t},M.prototype.imul=function(e,t){if(e.isZero()||t.isZero())return e.words[0]=0,e.length=1,e;var r=e.imul(t),n=r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),i=r.isub(n).iushrn(this.shift),o=i;return i.cmp(this.m)>=0?o=i.isub(this.m):i.cmpn(0)<0&&(o=i.iadd(this.m)),o._forceRed(this)},M.prototype.mul=function(e,t){if(e.isZero()||t.isZero())return new o(0)._forceRed(this);var r=e.mul(t),n=r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),i=r.isub(n).iushrn(this.shift),s=i;return i.cmp(this.m)>=0?s=i.isub(this.m):i.cmpn(0)<0&&(s=i.iadd(this.m)),s._forceRed(this)},M.prototype.invm=function(e){return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this)}}(e=r.nmd(e),this)},3900:function(e,t,r){!function(e,t){"use strict";function n(e,t){if(!e)throw new Error(t||"Assertion failed")}function i(e,t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}function o(e,t,r){if(o.isBN(e))return e;this.negative=0,this.words=null,this.length=0,this.red=null,null!==e&&("le"!==t&&"be"!==t||(r=t,t=10),this._init(e||0,t||10,r||"be"))}var s;"object"==typeof e?e.exports=o:t.BN=o,o.BN=o,o.wordSize=26;try{s="undefined"!=typeof window&&void 0!==window.Buffer?window.Buffer:r(9322).Buffer}catch(e){}function a(e,t){var r=e.charCodeAt(t);return r>=48&&r<=57?r-48:r>=65&&r<=70?r-55:r>=97&&r<=102?r-87:void n(!1,"Invalid character in "+e)}function c(e,t,r){var n=a(e,r);return r-1>=t&&(n|=a(e,r-1)<<4),n}function u(e,t,r,i){for(var o=0,s=0,a=Math.min(e.length,r),c=t;c<a;c++){var u=e.charCodeAt(c)-48;o*=i,s=u>=49?u-49+10:u>=17?u-17+10:u,n(u>=0&&s<i,"Invalid character"),o+=s}return o}function d(e,t){e.words=t.words,e.length=t.length,e.negative=t.negative,e.red=t.red}if(o.isBN=function(e){return e instanceof o||null!==e&&"object"==typeof e&&e.constructor.wordSize===o.wordSize&&Array.isArray(e.words)},o.max=function(e,t){return e.cmp(t)>0?e:t},o.min=function(e,t){return e.cmp(t)<0?e:t},o.prototype._init=function(e,t,r){if("number"==typeof e)return this._initNumber(e,t,r);if("object"==typeof e)return this._initArray(e,t,r);"hex"===t&&(t=16),n(t===(0|t)&&t>=2&&t<=36);var i=0;"-"===(e=e.toString().replace(/\s+/g,""))[0]&&(i++,this.negative=1),i<e.length&&(16===t?this._parseHex(e,i,r):(this._parseBase(e,t,i),"le"===r&&this._initArray(this.toArray(),t,r)))},o.prototype._initNumber=function(e,t,r){e<0&&(this.negative=1,e=-e),e<67108864?(this.words=[67108863&e],this.length=1):e<4503599627370496?(this.words=[67108863&e,e/67108864&67108863],this.length=2):(n(e<9007199254740992),this.words=[67108863&e,e/67108864&67108863,1],this.length=3),"le"===r&&this._initArray(this.toArray(),t,r)},o.prototype._initArray=function(e,t,r){if(n("number"==typeof e.length),e.length<=0)return this.words=[0],this.length=1,this;this.length=Math.ceil(e.length/3),this.words=new Array(this.length);for(var i=0;i<this.length;i++)this.words[i]=0;var o,s,a=0;if("be"===r)for(i=e.length-1,o=0;i>=0;i-=3)s=e[i]|e[i-1]<<8|e[i-2]<<16,this.words[o]|=s<<a&67108863,this.words[o+1]=s>>>26-a&67108863,(a+=24)>=26&&(a-=26,o++);else if("le"===r)for(i=0,o=0;i<e.length;i+=3)s=e[i]|e[i+1]<<8|e[i+2]<<16,this.words[o]|=s<<a&67108863,this.words[o+1]=s>>>26-a&67108863,(a+=24)>=26&&(a-=26,o++);return this._strip()},o.prototype._parseHex=function(e,t,r){this.length=Math.ceil((e.length-t)/6),this.words=new Array(this.length);for(var n=0;n<this.length;n++)this.words[n]=0;var i,o=0,s=0;if("be"===r)for(n=e.length-1;n>=t;n-=2)i=c(e,t,n)<<o,this.words[s]|=67108863&i,o>=18?(o-=18,s+=1,this.words[s]|=i>>>26):o+=8;else for(n=(e.length-t)%2==0?t+1:t;n<e.length;n+=2)i=c(e,t,n)<<o,this.words[s]|=67108863&i,o>=18?(o-=18,s+=1,this.words[s]|=i>>>26):o+=8;this._strip()},o.prototype._parseBase=function(e,t,r){this.words=[0],this.length=1;for(var n=0,i=1;i<=67108863;i*=t)n++;n--,i=i/t|0;for(var o=e.length-r,s=o%n,a=Math.min(o,o-s)+r,c=0,d=r;d<a;d+=n)c=u(e,d,d+n,t),this.imuln(i),this.words[0]+c<67108864?this.words[0]+=c:this._iaddn(c);if(0!==s){var f=1;for(c=u(e,d,e.length,t),d=0;d<s;d++)f*=t;this.imuln(f),this.words[0]+c<67108864?this.words[0]+=c:this._iaddn(c)}this._strip()},o.prototype.copy=function(e){e.words=new Array(this.length);for(var t=0;t<this.length;t++)e.words[t]=this.words[t];e.length=this.length,e.negative=this.negative,e.red=this.red},o.prototype._move=function(e){d(e,this)},o.prototype.clone=function(){var e=new o(null);return this.copy(e),e},o.prototype._expand=function(e){for(;this.length<e;)this.words[this.length++]=0;return this},o.prototype._strip=function(){for(;this.length>1&&0===this.words[this.length-1];)this.length--;return this._normSign()},o.prototype._normSign=function(){return 1===this.length&&0===this.words[0]&&(this.negative=0),this},"undefined"!=typeof Symbol&&"function"==typeof Symbol.for)try{o.prototype[Symbol.for("nodejs.util.inspect.custom")]=f}catch(e){o.prototype.inspect=f}else o.prototype.inspect=f;function f(){return(this.red?"<BN-R: ":"<BN: ")+this.toString(16)+">"}var h=["","0","00","000","0000","00000","000000","0000000","00000000","000000000","0000000000","00000000000","000000000000","0000000000000","00000000000000","000000000000000","0000000000000000","00000000000000000","000000000000000000","0000000000000000000","00000000000000000000","000000000000000000000","0000000000000000000000","00000000000000000000000","000000000000000000000000","0000000000000000000000000"],l=[0,0,25,16,12,11,10,9,8,8,7,7,7,7,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],p=[0,0,33554432,43046721,16777216,48828125,60466176,40353607,16777216,43046721,1e7,19487171,35831808,62748517,7529536,11390625,16777216,24137569,34012224,47045881,64e6,4084101,5153632,6436343,7962624,9765625,11881376,14348907,17210368,20511149,243e5,28629151,33554432,39135393,45435424,52521875,60466176];function b(e,t,r){r.negative=t.negative^e.negative;var n=e.length+t.length|0;r.length=n,n=n-1|0;var i=0|e.words[0],o=0|t.words[0],s=i*o,a=67108863&s,c=s/67108864|0;r.words[0]=a;for(var u=1;u<n;u++){for(var d=c>>>26,f=67108863&c,h=Math.min(u,t.length-1),l=Math.max(0,u-e.length+1);l<=h;l++){var p=u-l|0;d+=(s=(i=0|e.words[p])*(o=0|t.words[l])+f)/67108864|0,f=67108863&s}r.words[u]=0|f,c=0|d}return 0!==c?r.words[u]=0|c:r.length--,r._strip()}o.prototype.toString=function(e,t){var r;if(t=0|t||1,16===(e=e||10)||"hex"===e){r="";for(var i=0,o=0,s=0;s<this.length;s++){var a=this.words[s],c=(16777215&(a<<i|o)).toString(16);o=a>>>24-i&16777215,(i+=2)>=26&&(i-=26,s--),r=0!==o||s!==this.length-1?h[6-c.length]+c+r:c+r}for(0!==o&&(r=o.toString(16)+r);r.length%t!=0;)r="0"+r;return 0!==this.negative&&(r="-"+r),r}if(e===(0|e)&&e>=2&&e<=36){var u=l[e],d=p[e];r="";var f=this.clone();for(f.negative=0;!f.isZero();){var b=f.modrn(d).toString(e);r=(f=f.idivn(d)).isZero()?b+r:h[u-b.length]+b+r}for(this.isZero()&&(r="0"+r);r.length%t!=0;)r="0"+r;return 0!==this.negative&&(r="-"+r),r}n(!1,"Base should be between 2 and 36")},o.prototype.toNumber=function(){var e=this.words[0];return 2===this.length?e+=67108864*this.words[1]:3===this.length&&1===this.words[2]?e+=4503599627370496+67108864*this.words[1]:this.length>2&&n(!1,"Number can only safely store up to 53 bits"),0!==this.negative?-e:e},o.prototype.toJSON=function(){return this.toString(16,2)},s&&(o.prototype.toBuffer=function(e,t){return this.toArrayLike(s,e,t)}),o.prototype.toArray=function(e,t){return this.toArrayLike(Array,e,t)},o.prototype.toArrayLike=function(e,t,r){this._strip();var i=this.byteLength(),o=r||Math.max(1,i);n(i<=o,"byte array longer than desired length"),n(o>0,"Requested array length <= 0");var s=function(e,t){return e.allocUnsafe?e.allocUnsafe(t):new e(t)}(e,o);return this["_toArrayLike"+("le"===t?"LE":"BE")](s,i),s},o.prototype._toArrayLikeLE=function(e,t){for(var r=0,n=0,i=0,o=0;i<this.length;i++){var s=this.words[i]<<o|n;e[r++]=255&s,r<e.length&&(e[r++]=s>>8&255),r<e.length&&(e[r++]=s>>16&255),6===o?(r<e.length&&(e[r++]=s>>24&255),n=0,o=0):(n=s>>>24,o+=2)}if(r<e.length)for(e[r++]=n;r<e.length;)e[r++]=0},o.prototype._toArrayLikeBE=function(e,t){for(var r=e.length-1,n=0,i=0,o=0;i<this.length;i++){var s=this.words[i]<<o|n;e[r--]=255&s,r>=0&&(e[r--]=s>>8&255),r>=0&&(e[r--]=s>>16&255),6===o?(r>=0&&(e[r--]=s>>24&255),n=0,o=0):(n=s>>>24,o+=2)}if(r>=0)for(e[r--]=n;r>=0;)e[r--]=0},Math.clz32?o.prototype._countBits=function(e){return 32-Math.clz32(e)}:o.prototype._countBits=function(e){var t=e,r=0;return t>=4096&&(r+=13,t>>>=13),t>=64&&(r+=7,t>>>=7),t>=8&&(r+=4,t>>>=4),t>=2&&(r+=2,t>>>=2),r+t},o.prototype._zeroBits=function(e){if(0===e)return 26;var t=e,r=0;return 8191&t||(r+=13,t>>>=13),127&t||(r+=7,t>>>=7),15&t||(r+=4,t>>>=4),3&t||(r+=2,t>>>=2),1&t||r++,r},o.prototype.bitLength=function(){var e=this.words[this.length-1],t=this._countBits(e);return 26*(this.length-1)+t},o.prototype.zeroBits=function(){if(this.isZero())return 0;for(var e=0,t=0;t<this.length;t++){var r=this._zeroBits(this.words[t]);if(e+=r,26!==r)break}return e},o.prototype.byteLength=function(){return Math.ceil(this.bitLength()/8)},o.prototype.toTwos=function(e){return 0!==this.negative?this.abs().inotn(e).iaddn(1):this.clone()},o.prototype.fromTwos=function(e){return this.testn(e-1)?this.notn(e).iaddn(1).ineg():this.clone()},o.prototype.isNeg=function(){return 0!==this.negative},o.prototype.neg=function(){return this.clone().ineg()},o.prototype.ineg=function(){return this.isZero()||(this.negative^=1),this},o.prototype.iuor=function(e){for(;this.length<e.length;)this.words[this.length++]=0;for(var t=0;t<e.length;t++)this.words[t]=this.words[t]|e.words[t];return this._strip()},o.prototype.ior=function(e){return n(!(this.negative|e.negative)),this.iuor(e)},o.prototype.or=function(e){return this.length>e.length?this.clone().ior(e):e.clone().ior(this)},o.prototype.uor=function(e){return this.length>e.length?this.clone().iuor(e):e.clone().iuor(this)},o.prototype.iuand=function(e){var t;t=this.length>e.length?e:this;for(var r=0;r<t.length;r++)this.words[r]=this.words[r]&e.words[r];return this.length=t.length,this._strip()},o.prototype.iand=function(e){return n(!(this.negative|e.negative)),this.iuand(e)},o.prototype.and=function(e){return this.length>e.length?this.clone().iand(e):e.clone().iand(this)},o.prototype.uand=function(e){return this.length>e.length?this.clone().iuand(e):e.clone().iuand(this)},o.prototype.iuxor=function(e){var t,r;this.length>e.length?(t=this,r=e):(t=e,r=this);for(var n=0;n<r.length;n++)this.words[n]=t.words[n]^r.words[n];if(this!==t)for(;n<t.length;n++)this.words[n]=t.words[n];return this.length=t.length,this._strip()},o.prototype.ixor=function(e){return n(!(this.negative|e.negative)),this.iuxor(e)},o.prototype.xor=function(e){return this.length>e.length?this.clone().ixor(e):e.clone().ixor(this)},o.prototype.uxor=function(e){return this.length>e.length?this.clone().iuxor(e):e.clone().iuxor(this)},o.prototype.inotn=function(e){n("number"==typeof e&&e>=0);var t=0|Math.ceil(e/26),r=e%26;this._expand(t),r>0&&t--;for(var i=0;i<t;i++)this.words[i]=67108863&~this.words[i];return r>0&&(this.words[i]=~this.words[i]&67108863>>26-r),this._strip()},o.prototype.notn=function(e){return this.clone().inotn(e)},o.prototype.setn=function(e,t){n("number"==typeof e&&e>=0);var r=e/26|0,i=e%26;return this._expand(r+1),this.words[r]=t?this.words[r]|1<<i:this.words[r]&~(1<<i),this._strip()},o.prototype.iadd=function(e){var t,r,n;if(0!==this.negative&&0===e.negative)return this.negative=0,t=this.isub(e),this.negative^=1,this._normSign();if(0===this.negative&&0!==e.negative)return e.negative=0,t=this.isub(e),e.negative=1,t._normSign();this.length>e.length?(r=this,n=e):(r=e,n=this);for(var i=0,o=0;o<n.length;o++)t=(0|r.words[o])+(0|n.words[o])+i,this.words[o]=67108863&t,i=t>>>26;for(;0!==i&&o<r.length;o++)t=(0|r.words[o])+i,this.words[o]=67108863&t,i=t>>>26;if(this.length=r.length,0!==i)this.words[this.length]=i,this.length++;else if(r!==this)for(;o<r.length;o++)this.words[o]=r.words[o];return this},o.prototype.add=function(e){var t;return 0!==e.negative&&0===this.negative?(e.negative=0,t=this.sub(e),e.negative^=1,t):0===e.negative&&0!==this.negative?(this.negative=0,t=e.sub(this),this.negative=1,t):this.length>e.length?this.clone().iadd(e):e.clone().iadd(this)},o.prototype.isub=function(e){if(0!==e.negative){e.negative=0;var t=this.iadd(e);return e.negative=1,t._normSign()}if(0!==this.negative)return this.negative=0,this.iadd(e),this.negative=1,this._normSign();var r,n,i=this.cmp(e);if(0===i)return this.negative=0,this.length=1,this.words[0]=0,this;i>0?(r=this,n=e):(r=e,n=this);for(var o=0,s=0;s<n.length;s++)o=(t=(0|r.words[s])-(0|n.words[s])+o)>>26,this.words[s]=67108863&t;for(;0!==o&&s<r.length;s++)o=(t=(0|r.words[s])+o)>>26,this.words[s]=67108863&t;if(0===o&&s<r.length&&r!==this)for(;s<r.length;s++)this.words[s]=r.words[s];return this.length=Math.max(this.length,s),r!==this&&(this.negative=1),this._strip()},o.prototype.sub=function(e){return this.clone().isub(e)};var y=function(e,t,r){var n,i,o,s=e.words,a=t.words,c=r.words,u=0,d=0|s[0],f=8191&d,h=d>>>13,l=0|s[1],p=8191&l,b=l>>>13,y=0|s[2],m=8191&y,g=y>>>13,v=0|s[3],w=8191&v,_=v>>>13,A=0|s[4],S=8191&A,M=A>>>13,C=0|s[5],T=8191&C,E=C>>>13,k=0|s[6],I=8191&k,x=k>>>13,B=0|s[7],U=8191&B,P=B>>>13,O=0|s[8],R=8191&O,L=O>>>13,N=0|s[9],j=8191&N,D=N>>>13,F=0|a[0],H=8191&F,q=F>>>13,$=0|a[1],V=8191&$,z=$>>>13,G=0|a[2],K=8191&G,W=G>>>13,J=0|a[3],Z=8191&J,X=J>>>13,Y=0|a[4],Q=8191&Y,ee=Y>>>13,te=0|a[5],re=8191&te,ne=te>>>13,ie=0|a[6],oe=8191&ie,se=ie>>>13,ae=0|a[7],ce=8191&ae,ue=ae>>>13,de=0|a[8],fe=8191&de,he=de>>>13,le=0|a[9],pe=8191&le,be=le>>>13;r.negative=e.negative^t.negative,r.length=19;var ye=(u+(n=Math.imul(f,H))|0)+((8191&(i=(i=Math.imul(f,q))+Math.imul(h,H)|0))<<13)|0;u=((o=Math.imul(h,q))+(i>>>13)|0)+(ye>>>26)|0,ye&=67108863,n=Math.imul(p,H),i=(i=Math.imul(p,q))+Math.imul(b,H)|0,o=Math.imul(b,q);var me=(u+(n=n+Math.imul(f,V)|0)|0)+((8191&(i=(i=i+Math.imul(f,z)|0)+Math.imul(h,V)|0))<<13)|0;u=((o=o+Math.imul(h,z)|0)+(i>>>13)|0)+(me>>>26)|0,me&=67108863,n=Math.imul(m,H),i=(i=Math.imul(m,q))+Math.imul(g,H)|0,o=Math.imul(g,q),n=n+Math.imul(p,V)|0,i=(i=i+Math.imul(p,z)|0)+Math.imul(b,V)|0,o=o+Math.imul(b,z)|0;var ge=(u+(n=n+Math.imul(f,K)|0)|0)+((8191&(i=(i=i+Math.imul(f,W)|0)+Math.imul(h,K)|0))<<13)|0;u=((o=o+Math.imul(h,W)|0)+(i>>>13)|0)+(ge>>>26)|0,ge&=67108863,n=Math.imul(w,H),i=(i=Math.imul(w,q))+Math.imul(_,H)|0,o=Math.imul(_,q),n=n+Math.imul(m,V)|0,i=(i=i+Math.imul(m,z)|0)+Math.imul(g,V)|0,o=o+Math.imul(g,z)|0,n=n+Math.imul(p,K)|0,i=(i=i+Math.imul(p,W)|0)+Math.imul(b,K)|0,o=o+Math.imul(b,W)|0;var ve=(u+(n=n+Math.imul(f,Z)|0)|0)+((8191&(i=(i=i+Math.imul(f,X)|0)+Math.imul(h,Z)|0))<<13)|0;u=((o=o+Math.imul(h,X)|0)+(i>>>13)|0)+(ve>>>26)|0,ve&=67108863,n=Math.imul(S,H),i=(i=Math.imul(S,q))+Math.imul(M,H)|0,o=Math.imul(M,q),n=n+Math.imul(w,V)|0,i=(i=i+Math.imul(w,z)|0)+Math.imul(_,V)|0,o=o+Math.imul(_,z)|0,n=n+Math.imul(m,K)|0,i=(i=i+Math.imul(m,W)|0)+Math.imul(g,K)|0,o=o+Math.imul(g,W)|0,n=n+Math.imul(p,Z)|0,i=(i=i+Math.imul(p,X)|0)+Math.imul(b,Z)|0,o=o+Math.imul(b,X)|0;var we=(u+(n=n+Math.imul(f,Q)|0)|0)+((8191&(i=(i=i+Math.imul(f,ee)|0)+Math.imul(h,Q)|0))<<13)|0;u=((o=o+Math.imul(h,ee)|0)+(i>>>13)|0)+(we>>>26)|0,we&=67108863,n=Math.imul(T,H),i=(i=Math.imul(T,q))+Math.imul(E,H)|0,o=Math.imul(E,q),n=n+Math.imul(S,V)|0,i=(i=i+Math.imul(S,z)|0)+Math.imul(M,V)|0,o=o+Math.imul(M,z)|0,n=n+Math.imul(w,K)|0,i=(i=i+Math.imul(w,W)|0)+Math.imul(_,K)|0,o=o+Math.imul(_,W)|0,n=n+Math.imul(m,Z)|0,i=(i=i+Math.imul(m,X)|0)+Math.imul(g,Z)|0,o=o+Math.imul(g,X)|0,n=n+Math.imul(p,Q)|0,i=(i=i+Math.imul(p,ee)|0)+Math.imul(b,Q)|0,o=o+Math.imul(b,ee)|0;var _e=(u+(n=n+Math.imul(f,re)|0)|0)+((8191&(i=(i=i+Math.imul(f,ne)|0)+Math.imul(h,re)|0))<<13)|0;u=((o=o+Math.imul(h,ne)|0)+(i>>>13)|0)+(_e>>>26)|0,_e&=67108863,n=Math.imul(I,H),i=(i=Math.imul(I,q))+Math.imul(x,H)|0,o=Math.imul(x,q),n=n+Math.imul(T,V)|0,i=(i=i+Math.imul(T,z)|0)+Math.imul(E,V)|0,o=o+Math.imul(E,z)|0,n=n+Math.imul(S,K)|0,i=(i=i+Math.imul(S,W)|0)+Math.imul(M,K)|0,o=o+Math.imul(M,W)|0,n=n+Math.imul(w,Z)|0,i=(i=i+Math.imul(w,X)|0)+Math.imul(_,Z)|0,o=o+Math.imul(_,X)|0,n=n+Math.imul(m,Q)|0,i=(i=i+Math.imul(m,ee)|0)+Math.imul(g,Q)|0,o=o+Math.imul(g,ee)|0,n=n+Math.imul(p,re)|0,i=(i=i+Math.imul(p,ne)|0)+Math.imul(b,re)|0,o=o+Math.imul(b,ne)|0;var Ae=(u+(n=n+Math.imul(f,oe)|0)|0)+((8191&(i=(i=i+Math.imul(f,se)|0)+Math.imul(h,oe)|0))<<13)|0;u=((o=o+Math.imul(h,se)|0)+(i>>>13)|0)+(Ae>>>26)|0,Ae&=67108863,n=Math.imul(U,H),i=(i=Math.imul(U,q))+Math.imul(P,H)|0,o=Math.imul(P,q),n=n+Math.imul(I,V)|0,i=(i=i+Math.imul(I,z)|0)+Math.imul(x,V)|0,o=o+Math.imul(x,z)|0,n=n+Math.imul(T,K)|0,i=(i=i+Math.imul(T,W)|0)+Math.imul(E,K)|0,o=o+Math.imul(E,W)|0,n=n+Math.imul(S,Z)|0,i=(i=i+Math.imul(S,X)|0)+Math.imul(M,Z)|0,o=o+Math.imul(M,X)|0,n=n+Math.imul(w,Q)|0,i=(i=i+Math.imul(w,ee)|0)+Math.imul(_,Q)|0,o=o+Math.imul(_,ee)|0,n=n+Math.imul(m,re)|0,i=(i=i+Math.imul(m,ne)|0)+Math.imul(g,re)|0,o=o+Math.imul(g,ne)|0,n=n+Math.imul(p,oe)|0,i=(i=i+Math.imul(p,se)|0)+Math.imul(b,oe)|0,o=o+Math.imul(b,se)|0;var Se=(u+(n=n+Math.imul(f,ce)|0)|0)+((8191&(i=(i=i+Math.imul(f,ue)|0)+Math.imul(h,ce)|0))<<13)|0;u=((o=o+Math.imul(h,ue)|0)+(i>>>13)|0)+(Se>>>26)|0,Se&=67108863,n=Math.imul(R,H),i=(i=Math.imul(R,q))+Math.imul(L,H)|0,o=Math.imul(L,q),n=n+Math.imul(U,V)|0,i=(i=i+Math.imul(U,z)|0)+Math.imul(P,V)|0,o=o+Math.imul(P,z)|0,n=n+Math.imul(I,K)|0,i=(i=i+Math.imul(I,W)|0)+Math.imul(x,K)|0,o=o+Math.imul(x,W)|0,n=n+Math.imul(T,Z)|0,i=(i=i+Math.imul(T,X)|0)+Math.imul(E,Z)|0,o=o+Math.imul(E,X)|0,n=n+Math.imul(S,Q)|0,i=(i=i+Math.imul(S,ee)|0)+Math.imul(M,Q)|0,o=o+Math.imul(M,ee)|0,n=n+Math.imul(w,re)|0,i=(i=i+Math.imul(w,ne)|0)+Math.imul(_,re)|0,o=o+Math.imul(_,ne)|0,n=n+Math.imul(m,oe)|0,i=(i=i+Math.imul(m,se)|0)+Math.imul(g,oe)|0,o=o+Math.imul(g,se)|0,n=n+Math.imul(p,ce)|0,i=(i=i+Math.imul(p,ue)|0)+Math.imul(b,ce)|0,o=o+Math.imul(b,ue)|0;var Me=(u+(n=n+Math.imul(f,fe)|0)|0)+((8191&(i=(i=i+Math.imul(f,he)|0)+Math.imul(h,fe)|0))<<13)|0;u=((o=o+Math.imul(h,he)|0)+(i>>>13)|0)+(Me>>>26)|0,Me&=67108863,n=Math.imul(j,H),i=(i=Math.imul(j,q))+Math.imul(D,H)|0,o=Math.imul(D,q),n=n+Math.imul(R,V)|0,i=(i=i+Math.imul(R,z)|0)+Math.imul(L,V)|0,o=o+Math.imul(L,z)|0,n=n+Math.imul(U,K)|0,i=(i=i+Math.imul(U,W)|0)+Math.imul(P,K)|0,o=o+Math.imul(P,W)|0,n=n+Math.imul(I,Z)|0,i=(i=i+Math.imul(I,X)|0)+Math.imul(x,Z)|0,o=o+Math.imul(x,X)|0,n=n+Math.imul(T,Q)|0,i=(i=i+Math.imul(T,ee)|0)+Math.imul(E,Q)|0,o=o+Math.imul(E,ee)|0,n=n+Math.imul(S,re)|0,i=(i=i+Math.imul(S,ne)|0)+Math.imul(M,re)|0,o=o+Math.imul(M,ne)|0,n=n+Math.imul(w,oe)|0,i=(i=i+Math.imul(w,se)|0)+Math.imul(_,oe)|0,o=o+Math.imul(_,se)|0,n=n+Math.imul(m,ce)|0,i=(i=i+Math.imul(m,ue)|0)+Math.imul(g,ce)|0,o=o+Math.imul(g,ue)|0,n=n+Math.imul(p,fe)|0,i=(i=i+Math.imul(p,he)|0)+Math.imul(b,fe)|0,o=o+Math.imul(b,he)|0;var Ce=(u+(n=n+Math.imul(f,pe)|0)|0)+((8191&(i=(i=i+Math.imul(f,be)|0)+Math.imul(h,pe)|0))<<13)|0;u=((o=o+Math.imul(h,be)|0)+(i>>>13)|0)+(Ce>>>26)|0,Ce&=67108863,n=Math.imul(j,V),i=(i=Math.imul(j,z))+Math.imul(D,V)|0,o=Math.imul(D,z),n=n+Math.imul(R,K)|0,i=(i=i+Math.imul(R,W)|0)+Math.imul(L,K)|0,o=o+Math.imul(L,W)|0,n=n+Math.imul(U,Z)|0,i=(i=i+Math.imul(U,X)|0)+Math.imul(P,Z)|0,o=o+Math.imul(P,X)|0,n=n+Math.imul(I,Q)|0,i=(i=i+Math.imul(I,ee)|0)+Math.imul(x,Q)|0,o=o+Math.imul(x,ee)|0,n=n+Math.imul(T,re)|0,i=(i=i+Math.imul(T,ne)|0)+Math.imul(E,re)|0,o=o+Math.imul(E,ne)|0,n=n+Math.imul(S,oe)|0,i=(i=i+Math.imul(S,se)|0)+Math.imul(M,oe)|0,o=o+Math.imul(M,se)|0,n=n+Math.imul(w,ce)|0,i=(i=i+Math.imul(w,ue)|0)+Math.imul(_,ce)|0,o=o+Math.imul(_,ue)|0,n=n+Math.imul(m,fe)|0,i=(i=i+Math.imul(m,he)|0)+Math.imul(g,fe)|0,o=o+Math.imul(g,he)|0;var Te=(u+(n=n+Math.imul(p,pe)|0)|0)+((8191&(i=(i=i+Math.imul(p,be)|0)+Math.imul(b,pe)|0))<<13)|0;u=((o=o+Math.imul(b,be)|0)+(i>>>13)|0)+(Te>>>26)|0,Te&=67108863,n=Math.imul(j,K),i=(i=Math.imul(j,W))+Math.imul(D,K)|0,o=Math.imul(D,W),n=n+Math.imul(R,Z)|0,i=(i=i+Math.imul(R,X)|0)+Math.imul(L,Z)|0,o=o+Math.imul(L,X)|0,n=n+Math.imul(U,Q)|0,i=(i=i+Math.imul(U,ee)|0)+Math.imul(P,Q)|0,o=o+Math.imul(P,ee)|0,n=n+Math.imul(I,re)|0,i=(i=i+Math.imul(I,ne)|0)+Math.imul(x,re)|0,o=o+Math.imul(x,ne)|0,n=n+Math.imul(T,oe)|0,i=(i=i+Math.imul(T,se)|0)+Math.imul(E,oe)|0,o=o+Math.imul(E,se)|0,n=n+Math.imul(S,ce)|0,i=(i=i+Math.imul(S,ue)|0)+Math.imul(M,ce)|0,o=o+Math.imul(M,ue)|0,n=n+Math.imul(w,fe)|0,i=(i=i+Math.imul(w,he)|0)+Math.imul(_,fe)|0,o=o+Math.imul(_,he)|0;var Ee=(u+(n=n+Math.imul(m,pe)|0)|0)+((8191&(i=(i=i+Math.imul(m,be)|0)+Math.imul(g,pe)|0))<<13)|0;u=((o=o+Math.imul(g,be)|0)+(i>>>13)|0)+(Ee>>>26)|0,Ee&=67108863,n=Math.imul(j,Z),i=(i=Math.imul(j,X))+Math.imul(D,Z)|0,o=Math.imul(D,X),n=n+Math.imul(R,Q)|0,i=(i=i+Math.imul(R,ee)|0)+Math.imul(L,Q)|0,o=o+Math.imul(L,ee)|0,n=n+Math.imul(U,re)|0,i=(i=i+Math.imul(U,ne)|0)+Math.imul(P,re)|0,o=o+Math.imul(P,ne)|0,n=n+Math.imul(I,oe)|0,i=(i=i+Math.imul(I,se)|0)+Math.imul(x,oe)|0,o=o+Math.imul(x,se)|0,n=n+Math.imul(T,ce)|0,i=(i=i+Math.imul(T,ue)|0)+Math.imul(E,ce)|0,o=o+Math.imul(E,ue)|0,n=n+Math.imul(S,fe)|0,i=(i=i+Math.imul(S,he)|0)+Math.imul(M,fe)|0,o=o+Math.imul(M,he)|0;var ke=(u+(n=n+Math.imul(w,pe)|0)|0)+((8191&(i=(i=i+Math.imul(w,be)|0)+Math.imul(_,pe)|0))<<13)|0;u=((o=o+Math.imul(_,be)|0)+(i>>>13)|0)+(ke>>>26)|0,ke&=67108863,n=Math.imul(j,Q),i=(i=Math.imul(j,ee))+Math.imul(D,Q)|0,o=Math.imul(D,ee),n=n+Math.imul(R,re)|0,i=(i=i+Math.imul(R,ne)|0)+Math.imul(L,re)|0,o=o+Math.imul(L,ne)|0,n=n+Math.imul(U,oe)|0,i=(i=i+Math.imul(U,se)|0)+Math.imul(P,oe)|0,o=o+Math.imul(P,se)|0,n=n+Math.imul(I,ce)|0,i=(i=i+Math.imul(I,ue)|0)+Math.imul(x,ce)|0,o=o+Math.imul(x,ue)|0,n=n+Math.imul(T,fe)|0,i=(i=i+Math.imul(T,he)|0)+Math.imul(E,fe)|0,o=o+Math.imul(E,he)|0;var Ie=(u+(n=n+Math.imul(S,pe)|0)|0)+((8191&(i=(i=i+Math.imul(S,be)|0)+Math.imul(M,pe)|0))<<13)|0;u=((o=o+Math.imul(M,be)|0)+(i>>>13)|0)+(Ie>>>26)|0,Ie&=67108863,n=Math.imul(j,re),i=(i=Math.imul(j,ne))+Math.imul(D,re)|0,o=Math.imul(D,ne),n=n+Math.imul(R,oe)|0,i=(i=i+Math.imul(R,se)|0)+Math.imul(L,oe)|0,o=o+Math.imul(L,se)|0,n=n+Math.imul(U,ce)|0,i=(i=i+Math.imul(U,ue)|0)+Math.imul(P,ce)|0,o=o+Math.imul(P,ue)|0,n=n+Math.imul(I,fe)|0,i=(i=i+Math.imul(I,he)|0)+Math.imul(x,fe)|0,o=o+Math.imul(x,he)|0;var xe=(u+(n=n+Math.imul(T,pe)|0)|0)+((8191&(i=(i=i+Math.imul(T,be)|0)+Math.imul(E,pe)|0))<<13)|0;u=((o=o+Math.imul(E,be)|0)+(i>>>13)|0)+(xe>>>26)|0,xe&=67108863,n=Math.imul(j,oe),i=(i=Math.imul(j,se))+Math.imul(D,oe)|0,o=Math.imul(D,se),n=n+Math.imul(R,ce)|0,i=(i=i+Math.imul(R,ue)|0)+Math.imul(L,ce)|0,o=o+Math.imul(L,ue)|0,n=n+Math.imul(U,fe)|0,i=(i=i+Math.imul(U,he)|0)+Math.imul(P,fe)|0,o=o+Math.imul(P,he)|0;var Be=(u+(n=n+Math.imul(I,pe)|0)|0)+((8191&(i=(i=i+Math.imul(I,be)|0)+Math.imul(x,pe)|0))<<13)|0;u=((o=o+Math.imul(x,be)|0)+(i>>>13)|0)+(Be>>>26)|0,Be&=67108863,n=Math.imul(j,ce),i=(i=Math.imul(j,ue))+Math.imul(D,ce)|0,o=Math.imul(D,ue),n=n+Math.imul(R,fe)|0,i=(i=i+Math.imul(R,he)|0)+Math.imul(L,fe)|0,o=o+Math.imul(L,he)|0;var Ue=(u+(n=n+Math.imul(U,pe)|0)|0)+((8191&(i=(i=i+Math.imul(U,be)|0)+Math.imul(P,pe)|0))<<13)|0;u=((o=o+Math.imul(P,be)|0)+(i>>>13)|0)+(Ue>>>26)|0,Ue&=67108863,n=Math.imul(j,fe),i=(i=Math.imul(j,he))+Math.imul(D,fe)|0,o=Math.imul(D,he);var Pe=(u+(n=n+Math.imul(R,pe)|0)|0)+((8191&(i=(i=i+Math.imul(R,be)|0)+Math.imul(L,pe)|0))<<13)|0;u=((o=o+Math.imul(L,be)|0)+(i>>>13)|0)+(Pe>>>26)|0,Pe&=67108863;var Oe=(u+(n=Math.imul(j,pe))|0)+((8191&(i=(i=Math.imul(j,be))+Math.imul(D,pe)|0))<<13)|0;return u=((o=Math.imul(D,be))+(i>>>13)|0)+(Oe>>>26)|0,Oe&=67108863,c[0]=ye,c[1]=me,c[2]=ge,c[3]=ve,c[4]=we,c[5]=_e,c[6]=Ae,c[7]=Se,c[8]=Me,c[9]=Ce,c[10]=Te,c[11]=Ee,c[12]=ke,c[13]=Ie,c[14]=xe,c[15]=Be,c[16]=Ue,c[17]=Pe,c[18]=Oe,0!==u&&(c[19]=u,r.length++),r};function m(e,t,r){r.negative=t.negative^e.negative,r.length=e.length+t.length;for(var n=0,i=0,o=0;o<r.length-1;o++){var s=i;i=0;for(var a=67108863&n,c=Math.min(o,t.length-1),u=Math.max(0,o-e.length+1);u<=c;u++){var d=o-u,f=(0|e.words[d])*(0|t.words[u]),h=67108863&f;a=67108863&(h=h+a|0),i+=(s=(s=s+(f/67108864|0)|0)+(h>>>26)|0)>>>26,s&=67108863}r.words[o]=a,n=s,s=i}return 0!==n?r.words[o]=n:r.length--,r._strip()}function g(e,t,r){return m(e,t,r)}function v(e,t){this.x=e,this.y=t}Math.imul||(y=b),o.prototype.mulTo=function(e,t){var r=this.length+e.length;return 10===this.length&&10===e.length?y(this,e,t):r<63?b(this,e,t):r<1024?m(this,e,t):g(this,e,t)},v.prototype.makeRBT=function(e){for(var t=new Array(e),r=o.prototype._countBits(e)-1,n=0;n<e;n++)t[n]=this.revBin(n,r,e);return t},v.prototype.revBin=function(e,t,r){if(0===e||e===r-1)return e;for(var n=0,i=0;i<t;i++)n|=(1&e)<<t-i-1,e>>=1;return n},v.prototype.permute=function(e,t,r,n,i,o){for(var s=0;s<o;s++)n[s]=t[e[s]],i[s]=r[e[s]]},v.prototype.transform=function(e,t,r,n,i,o){this.permute(o,e,t,r,n,i);for(var s=1;s<i;s<<=1)for(var a=s<<1,c=Math.cos(2*Math.PI/a),u=Math.sin(2*Math.PI/a),d=0;d<i;d+=a)for(var f=c,h=u,l=0;l<s;l++){var p=r[d+l],b=n[d+l],y=r[d+l+s],m=n[d+l+s],g=f*y-h*m;m=f*m+h*y,y=g,r[d+l]=p+y,n[d+l]=b+m,r[d+l+s]=p-y,n[d+l+s]=b-m,l!==a&&(g=c*f-u*h,h=c*h+u*f,f=g)}},v.prototype.guessLen13b=function(e,t){var r=1|Math.max(t,e),n=1&r,i=0;for(r=r/2|0;r;r>>>=1)i++;return 1<<i+1+n},v.prototype.conjugate=function(e,t,r){if(!(r<=1))for(var n=0;n<r/2;n++){var i=e[n];e[n]=e[r-n-1],e[r-n-1]=i,i=t[n],t[n]=-t[r-n-1],t[r-n-1]=-i}},v.prototype.normalize13b=function(e,t){for(var r=0,n=0;n<t/2;n++){var i=8192*Math.round(e[2*n+1]/t)+Math.round(e[2*n]/t)+r;e[n]=67108863&i,r=i<67108864?0:i/67108864|0}return e},v.prototype.convert13b=function(e,t,r,i){for(var o=0,s=0;s<t;s++)o+=0|e[s],r[2*s]=8191&o,o>>>=13,r[2*s+1]=8191&o,o>>>=13;for(s=2*t;s<i;++s)r[s]=0;n(0===o),n(!(-8192&o))},v.prototype.stub=function(e){for(var t=new Array(e),r=0;r<e;r++)t[r]=0;return t},v.prototype.mulp=function(e,t,r){var n=2*this.guessLen13b(e.length,t.length),i=this.makeRBT(n),o=this.stub(n),s=new Array(n),a=new Array(n),c=new Array(n),u=new Array(n),d=new Array(n),f=new Array(n),h=r.words;h.length=n,this.convert13b(e.words,e.length,s,n),this.convert13b(t.words,t.length,u,n),this.transform(s,o,a,c,n,i),this.transform(u,o,d,f,n,i);for(var l=0;l<n;l++){var p=a[l]*d[l]-c[l]*f[l];c[l]=a[l]*f[l]+c[l]*d[l],a[l]=p}return this.conjugate(a,c,n),this.transform(a,c,h,o,n,i),this.conjugate(h,o,n),this.normalize13b(h,n),r.negative=e.negative^t.negative,r.length=e.length+t.length,r._strip()},o.prototype.mul=function(e){var t=new o(null);return t.words=new Array(this.length+e.length),this.mulTo(e,t)},o.prototype.mulf=function(e){var t=new o(null);return t.words=new Array(this.length+e.length),g(this,e,t)},o.prototype.imul=function(e){return this.clone().mulTo(e,this)},o.prototype.imuln=function(e){var t=e<0;t&&(e=-e),n("number"==typeof e),n(e<67108864);for(var r=0,i=0;i<this.length;i++){var o=(0|this.words[i])*e,s=(67108863&o)+(67108863&r);r>>=26,r+=o/67108864|0,r+=s>>>26,this.words[i]=67108863&s}return 0!==r&&(this.words[i]=r,this.length++),t?this.ineg():this},o.prototype.muln=function(e){return this.clone().imuln(e)},o.prototype.sqr=function(){return this.mul(this)},o.prototype.isqr=function(){return this.imul(this.clone())},o.prototype.pow=function(e){var t=function(e){for(var t=new Array(e.bitLength()),r=0;r<t.length;r++){var n=r/26|0,i=r%26;t[r]=e.words[n]>>>i&1}return t}(e);if(0===t.length)return new o(1);for(var r=this,n=0;n<t.length&&0===t[n];n++,r=r.sqr());if(++n<t.length)for(var i=r.sqr();n<t.length;n++,i=i.sqr())0!==t[n]&&(r=r.mul(i));return r},o.prototype.iushln=function(e){n("number"==typeof e&&e>=0);var t,r=e%26,i=(e-r)/26,o=67108863>>>26-r<<26-r;if(0!==r){var s=0;for(t=0;t<this.length;t++){var a=this.words[t]&o,c=(0|this.words[t])-a<<r;this.words[t]=c|s,s=a>>>26-r}s&&(this.words[t]=s,this.length++)}if(0!==i){for(t=this.length-1;t>=0;t--)this.words[t+i]=this.words[t];for(t=0;t<i;t++)this.words[t]=0;this.length+=i}return this._strip()},o.prototype.ishln=function(e){return n(0===this.negative),this.iushln(e)},o.prototype.iushrn=function(e,t,r){var i;n("number"==typeof e&&e>=0),i=t?(t-t%26)/26:0;var o=e%26,s=Math.min((e-o)/26,this.length),a=67108863^67108863>>>o<<o,c=r;if(i-=s,i=Math.max(0,i),c){for(var u=0;u<s;u++)c.words[u]=this.words[u];c.length=s}if(0===s);else if(this.length>s)for(this.length-=s,u=0;u<this.length;u++)this.words[u]=this.words[u+s];else this.words[0]=0,this.length=1;var d=0;for(u=this.length-1;u>=0&&(0!==d||u>=i);u--){var f=0|this.words[u];this.words[u]=d<<26-o|f>>>o,d=f&a}return c&&0!==d&&(c.words[c.length++]=d),0===this.length&&(this.words[0]=0,this.length=1),this._strip()},o.prototype.ishrn=function(e,t,r){return n(0===this.negative),this.iushrn(e,t,r)},o.prototype.shln=function(e){return this.clone().ishln(e)},o.prototype.ushln=function(e){return this.clone().iushln(e)},o.prototype.shrn=function(e){return this.clone().ishrn(e)},o.prototype.ushrn=function(e){return this.clone().iushrn(e)},o.prototype.testn=function(e){n("number"==typeof e&&e>=0);var t=e%26,r=(e-t)/26,i=1<<t;return!(this.length<=r||!(this.words[r]&i))},o.prototype.imaskn=function(e){n("number"==typeof e&&e>=0);var t=e%26,r=(e-t)/26;if(n(0===this.negative,"imaskn works only with positive numbers"),this.length<=r)return this;if(0!==t&&r++,this.length=Math.min(r,this.length),0!==t){var i=67108863^67108863>>>t<<t;this.words[this.length-1]&=i}return this._strip()},o.prototype.maskn=function(e){return this.clone().imaskn(e)},o.prototype.iaddn=function(e){return n("number"==typeof e),n(e<67108864),e<0?this.isubn(-e):0!==this.negative?1===this.length&&(0|this.words[0])<=e?(this.words[0]=e-(0|this.words[0]),this.negative=0,this):(this.negative=0,this.isubn(e),this.negative=1,this):this._iaddn(e)},o.prototype._iaddn=function(e){this.words[0]+=e;for(var t=0;t<this.length&&this.words[t]>=67108864;t++)this.words[t]-=67108864,t===this.length-1?this.words[t+1]=1:this.words[t+1]++;return this.length=Math.max(this.length,t+1),this},o.prototype.isubn=function(e){if(n("number"==typeof e),n(e<67108864),e<0)return this.iaddn(-e);if(0!==this.negative)return this.negative=0,this.iaddn(e),this.negative=1,this;if(this.words[0]-=e,1===this.length&&this.words[0]<0)this.words[0]=-this.words[0],this.negative=1;else for(var t=0;t<this.length&&this.words[t]<0;t++)this.words[t]+=67108864,this.words[t+1]-=1;return this._strip()},o.prototype.addn=function(e){return this.clone().iaddn(e)},o.prototype.subn=function(e){return this.clone().isubn(e)},o.prototype.iabs=function(){return this.negative=0,this},o.prototype.abs=function(){return this.clone().iabs()},o.prototype._ishlnsubmul=function(e,t,r){var i,o,s=e.length+r;this._expand(s);var a=0;for(i=0;i<e.length;i++){o=(0|this.words[i+r])+a;var c=(0|e.words[i])*t;a=((o-=67108863&c)>>26)-(c/67108864|0),this.words[i+r]=67108863&o}for(;i<this.length-r;i++)a=(o=(0|this.words[i+r])+a)>>26,this.words[i+r]=67108863&o;if(0===a)return this._strip();for(n(-1===a),a=0,i=0;i<this.length;i++)a=(o=-(0|this.words[i])+a)>>26,this.words[i]=67108863&o;return this.negative=1,this._strip()},o.prototype._wordDiv=function(e,t){var r=(this.length,e.length),n=this.clone(),i=e,s=0|i.words[i.length-1];0!=(r=26-this._countBits(s))&&(i=i.ushln(r),n.iushln(r),s=0|i.words[i.length-1]);var a,c=n.length-i.length;if("mod"!==t){(a=new o(null)).length=c+1,a.words=new Array(a.length);for(var u=0;u<a.length;u++)a.words[u]=0}var d=n.clone()._ishlnsubmul(i,1,c);0===d.negative&&(n=d,a&&(a.words[c]=1));for(var f=c-1;f>=0;f--){var h=67108864*(0|n.words[i.length+f])+(0|n.words[i.length+f-1]);for(h=Math.min(h/s|0,67108863),n._ishlnsubmul(i,h,f);0!==n.negative;)h--,n.negative=0,n._ishlnsubmul(i,1,f),n.isZero()||(n.negative^=1);a&&(a.words[f]=h)}return a&&a._strip(),n._strip(),"div"!==t&&0!==r&&n.iushrn(r),{div:a||null,mod:n}},o.prototype.divmod=function(e,t,r){return n(!e.isZero()),this.isZero()?{div:new o(0),mod:new o(0)}:0!==this.negative&&0===e.negative?(a=this.neg().divmod(e,t),"mod"!==t&&(i=a.div.neg()),"div"!==t&&(s=a.mod.neg(),r&&0!==s.negative&&s.iadd(e)),{div:i,mod:s}):0===this.negative&&0!==e.negative?(a=this.divmod(e.neg(),t),"mod"!==t&&(i=a.div.neg()),{div:i,mod:a.mod}):this.negative&e.negative?(a=this.neg().divmod(e.neg(),t),"div"!==t&&(s=a.mod.neg(),r&&0!==s.negative&&s.isub(e)),{div:a.div,mod:s}):e.length>this.length||this.cmp(e)<0?{div:new o(0),mod:this}:1===e.length?"div"===t?{div:this.divn(e.words[0]),mod:null}:"mod"===t?{div:null,mod:new o(this.modrn(e.words[0]))}:{div:this.divn(e.words[0]),mod:new o(this.modrn(e.words[0]))}:this._wordDiv(e,t);var i,s,a},o.prototype.div=function(e){return this.divmod(e,"div",!1).div},o.prototype.mod=function(e){return this.divmod(e,"mod",!1).mod},o.prototype.umod=function(e){return this.divmod(e,"mod",!0).mod},o.prototype.divRound=function(e){var t=this.divmod(e);if(t.mod.isZero())return t.div;var r=0!==t.div.negative?t.mod.isub(e):t.mod,n=e.ushrn(1),i=e.andln(1),o=r.cmp(n);return o<0||1===i&&0===o?t.div:0!==t.div.negative?t.div.isubn(1):t.div.iaddn(1)},o.prototype.modrn=function(e){var t=e<0;t&&(e=-e),n(e<=67108863);for(var r=(1<<26)%e,i=0,o=this.length-1;o>=0;o--)i=(r*i+(0|this.words[o]))%e;return t?-i:i},o.prototype.modn=function(e){return this.modrn(e)},o.prototype.idivn=function(e){var t=e<0;t&&(e=-e),n(e<=67108863);for(var r=0,i=this.length-1;i>=0;i--){var o=(0|this.words[i])+67108864*r;this.words[i]=o/e|0,r=o%e}return this._strip(),t?this.ineg():this},o.prototype.divn=function(e){return this.clone().idivn(e)},o.prototype.egcd=function(e){n(0===e.negative),n(!e.isZero());var t=this,r=e.clone();t=0!==t.negative?t.umod(e):t.clone();for(var i=new o(1),s=new o(0),a=new o(0),c=new o(1),u=0;t.isEven()&&r.isEven();)t.iushrn(1),r.iushrn(1),++u;for(var d=r.clone(),f=t.clone();!t.isZero();){for(var h=0,l=1;!(t.words[0]&l)&&h<26;++h,l<<=1);if(h>0)for(t.iushrn(h);h-- >0;)(i.isOdd()||s.isOdd())&&(i.iadd(d),s.isub(f)),i.iushrn(1),s.iushrn(1);for(var p=0,b=1;!(r.words[0]&b)&&p<26;++p,b<<=1);if(p>0)for(r.iushrn(p);p-- >0;)(a.isOdd()||c.isOdd())&&(a.iadd(d),c.isub(f)),a.iushrn(1),c.iushrn(1);t.cmp(r)>=0?(t.isub(r),i.isub(a),s.isub(c)):(r.isub(t),a.isub(i),c.isub(s))}return{a,b:c,gcd:r.iushln(u)}},o.prototype._invmp=function(e){n(0===e.negative),n(!e.isZero());var t=this,r=e.clone();t=0!==t.negative?t.umod(e):t.clone();for(var i,s=new o(1),a=new o(0),c=r.clone();t.cmpn(1)>0&&r.cmpn(1)>0;){for(var u=0,d=1;!(t.words[0]&d)&&u<26;++u,d<<=1);if(u>0)for(t.iushrn(u);u-- >0;)s.isOdd()&&s.iadd(c),s.iushrn(1);for(var f=0,h=1;!(r.words[0]&h)&&f<26;++f,h<<=1);if(f>0)for(r.iushrn(f);f-- >0;)a.isOdd()&&a.iadd(c),a.iushrn(1);t.cmp(r)>=0?(t.isub(r),s.isub(a)):(r.isub(t),a.isub(s))}return(i=0===t.cmpn(1)?s:a).cmpn(0)<0&&i.iadd(e),i},o.prototype.gcd=function(e){if(this.isZero())return e.abs();if(e.isZero())return this.abs();var t=this.clone(),r=e.clone();t.negative=0,r.negative=0;for(var n=0;t.isEven()&&r.isEven();n++)t.iushrn(1),r.iushrn(1);for(;;){for(;t.isEven();)t.iushrn(1);for(;r.isEven();)r.iushrn(1);var i=t.cmp(r);if(i<0){var o=t;t=r,r=o}else if(0===i||0===r.cmpn(1))break;t.isub(r)}return r.iushln(n)},o.prototype.invm=function(e){return this.egcd(e).a.umod(e)},o.prototype.isEven=function(){return!(1&this.words[0])},o.prototype.isOdd=function(){return!(1&~this.words[0])},o.prototype.andln=function(e){return this.words[0]&e},o.prototype.bincn=function(e){n("number"==typeof e);var t=e%26,r=(e-t)/26,i=1<<t;if(this.length<=r)return this._expand(r+1),this.words[r]|=i,this;for(var o=i,s=r;0!==o&&s<this.length;s++){var a=0|this.words[s];o=(a+=o)>>>26,a&=67108863,this.words[s]=a}return 0!==o&&(this.words[s]=o,this.length++),this},o.prototype.isZero=function(){return 1===this.length&&0===this.words[0]},o.prototype.cmpn=function(e){var t,r=e<0;if(0!==this.negative&&!r)return-1;if(0===this.negative&&r)return 1;if(this._strip(),this.length>1)t=1;else{r&&(e=-e),n(e<=67108863,"Number is too big");var i=0|this.words[0];t=i===e?0:i<e?-1:1}return 0!==this.negative?0|-t:t},o.prototype.cmp=function(e){if(0!==this.negative&&0===e.negative)return-1;if(0===this.negative&&0!==e.negative)return 1;var t=this.ucmp(e);return 0!==this.negative?0|-t:t},o.prototype.ucmp=function(e){if(this.length>e.length)return 1;if(this.length<e.length)return-1;for(var t=0,r=this.length-1;r>=0;r--){var n=0|this.words[r],i=0|e.words[r];if(n!==i){n<i?t=-1:n>i&&(t=1);break}}return t},o.prototype.gtn=function(e){return 1===this.cmpn(e)},o.prototype.gt=function(e){return 1===this.cmp(e)},o.prototype.gten=function(e){return this.cmpn(e)>=0},o.prototype.gte=function(e){return this.cmp(e)>=0},o.prototype.ltn=function(e){return-1===this.cmpn(e)},o.prototype.lt=function(e){return-1===this.cmp(e)},o.prototype.lten=function(e){return this.cmpn(e)<=0},o.prototype.lte=function(e){return this.cmp(e)<=0},o.prototype.eqn=function(e){return 0===this.cmpn(e)},o.prototype.eq=function(e){return 0===this.cmp(e)},o.red=function(e){return new T(e)},o.prototype.toRed=function(e){return n(!this.red,"Already a number in reduction context"),n(0===this.negative,"red works only with positives"),e.convertTo(this)._forceRed(e)},o.prototype.fromRed=function(){return n(this.red,"fromRed works only with numbers in reduction context"),this.red.convertFrom(this)},o.prototype._forceRed=function(e){return this.red=e,this},o.prototype.forceRed=function(e){return n(!this.red,"Already a number in reduction context"),this._forceRed(e)},o.prototype.redAdd=function(e){return n(this.red,"redAdd works only with red numbers"),this.red.add(this,e)},o.prototype.redIAdd=function(e){return n(this.red,"redIAdd works only with red numbers"),this.red.iadd(this,e)},o.prototype.redSub=function(e){return n(this.red,"redSub works only with red numbers"),this.red.sub(this,e)},o.prototype.redISub=function(e){return n(this.red,"redISub works only with red numbers"),this.red.isub(this,e)},o.prototype.redShl=function(e){return n(this.red,"redShl works only with red numbers"),this.red.shl(this,e)},o.prototype.redMul=function(e){return n(this.red,"redMul works only with red numbers"),this.red._verify2(this,e),this.red.mul(this,e)},o.prototype.redIMul=function(e){return n(this.red,"redMul works only with red numbers"),this.red._verify2(this,e),this.red.imul(this,e)},o.prototype.redSqr=function(){return n(this.red,"redSqr works only with red numbers"),this.red._verify1(this),this.red.sqr(this)},o.prototype.redISqr=function(){return n(this.red,"redISqr works only with red numbers"),this.red._verify1(this),this.red.isqr(this)},o.prototype.redSqrt=function(){return n(this.red,"redSqrt works only with red numbers"),this.red._verify1(this),this.red.sqrt(this)},o.prototype.redInvm=function(){return n(this.red,"redInvm works only with red numbers"),this.red._verify1(this),this.red.invm(this)},o.prototype.redNeg=function(){return n(this.red,"redNeg works only with red numbers"),this.red._verify1(this),this.red.neg(this)},o.prototype.redPow=function(e){return n(this.red&&!e.red,"redPow(normalNum)"),this.red._verify1(this),this.red.pow(this,e)};var w={k256:null,p224:null,p192:null,p25519:null};function _(e,t){this.name=e,this.p=new o(t,16),this.n=this.p.bitLength(),this.k=new o(1).iushln(this.n).isub(this.p),this.tmp=this._tmp()}function A(){_.call(this,"k256","ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")}function S(){_.call(this,"p224","ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")}function M(){_.call(this,"p192","ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")}function C(){_.call(this,"25519","7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")}function T(e){if("string"==typeof e){var t=o._prime(e);this.m=t.p,this.prime=t}else n(e.gtn(1),"modulus must be greater than 1"),this.m=e,this.prime=null}function E(e){T.call(this,e),this.shift=this.m.bitLength(),this.shift%26!=0&&(this.shift+=26-this.shift%26),this.r=new o(1).iushln(this.shift),this.r2=this.imod(this.r.sqr()),this.rinv=this.r._invmp(this.m),this.minv=this.rinv.mul(this.r).isubn(1).div(this.m),this.minv=this.minv.umod(this.r),this.minv=this.r.sub(this.minv)}_.prototype._tmp=function(){var e=new o(null);return e.words=new Array(Math.ceil(this.n/13)),e},_.prototype.ireduce=function(e){var t,r=e;do{this.split(r,this.tmp),t=(r=(r=this.imulK(r)).iadd(this.tmp)).bitLength()}while(t>this.n);var n=t<this.n?-1:r.ucmp(this.p);return 0===n?(r.words[0]=0,r.length=1):n>0?r.isub(this.p):void 0!==r.strip?r.strip():r._strip(),r},_.prototype.split=function(e,t){e.iushrn(this.n,0,t)},_.prototype.imulK=function(e){return e.imul(this.k)},i(A,_),A.prototype.split=function(e,t){for(var r=4194303,n=Math.min(e.length,9),i=0;i<n;i++)t.words[i]=e.words[i];if(t.length=n,e.length<=9)return e.words[0]=0,void(e.length=1);var o=e.words[9];for(t.words[t.length++]=o&r,i=10;i<e.length;i++){var s=0|e.words[i];e.words[i-10]=(s&r)<<4|o>>>22,o=s}o>>>=22,e.words[i-10]=o,0===o&&e.length>10?e.length-=10:e.length-=9},A.prototype.imulK=function(e){e.words[e.length]=0,e.words[e.length+1]=0,e.length+=2;for(var t=0,r=0;r<e.length;r++){var n=0|e.words[r];t+=977*n,e.words[r]=67108863&t,t=64*n+(t/67108864|0)}return 0===e.words[e.length-1]&&(e.length--,0===e.words[e.length-1]&&e.length--),e},i(S,_),i(M,_),i(C,_),C.prototype.imulK=function(e){for(var t=0,r=0;r<e.length;r++){var n=19*(0|e.words[r])+t,i=67108863&n;n>>>=26,e.words[r]=i,t=n}return 0!==t&&(e.words[e.length++]=t),e},o._prime=function(e){if(w[e])return w[e];var t;if("k256"===e)t=new A;else if("p224"===e)t=new S;else if("p192"===e)t=new M;else{if("p25519"!==e)throw new Error("Unknown prime "+e);t=new C}return w[e]=t,t},T.prototype._verify1=function(e){n(0===e.negative,"red works only with positives"),n(e.red,"red works only with red numbers")},T.prototype._verify2=function(e,t){n(!(e.negative|t.negative),"red works only with positives"),n(e.red&&e.red===t.red,"red works only with red numbers")},T.prototype.imod=function(e){return this.prime?this.prime.ireduce(e)._forceRed(this):(d(e,e.umod(this.m)._forceRed(this)),e)},T.prototype.neg=function(e){return e.isZero()?e.clone():this.m.sub(e)._forceRed(this)},T.prototype.add=function(e,t){this._verify2(e,t);var r=e.add(t);return r.cmp(this.m)>=0&&r.isub(this.m),r._forceRed(this)},T.prototype.iadd=function(e,t){this._verify2(e,t);var r=e.iadd(t);return r.cmp(this.m)>=0&&r.isub(this.m),r},T.prototype.sub=function(e,t){this._verify2(e,t);var r=e.sub(t);return r.cmpn(0)<0&&r.iadd(this.m),r._forceRed(this)},T.prototype.isub=function(e,t){this._verify2(e,t);var r=e.isub(t);return r.cmpn(0)<0&&r.iadd(this.m),r},T.prototype.shl=function(e,t){return this._verify1(e),this.imod(e.ushln(t))},T.prototype.imul=function(e,t){return this._verify2(e,t),this.imod(e.imul(t))},T.prototype.mul=function(e,t){return this._verify2(e,t),this.imod(e.mul(t))},T.prototype.isqr=function(e){return this.imul(e,e.clone())},T.prototype.sqr=function(e){return this.mul(e,e)},T.prototype.sqrt=function(e){if(e.isZero())return e.clone();var t=this.m.andln(3);if(n(t%2==1),3===t){var r=this.m.add(new o(1)).iushrn(2);return this.pow(e,r)}for(var i=this.m.subn(1),s=0;!i.isZero()&&0===i.andln(1);)s++,i.iushrn(1);n(!i.isZero());var a=new o(1).toRed(this),c=a.redNeg(),u=this.m.subn(1).iushrn(1),d=this.m.bitLength();for(d=new o(2*d*d).toRed(this);0!==this.pow(d,u).cmp(c);)d.redIAdd(c);for(var f=this.pow(d,i),h=this.pow(e,i.addn(1).iushrn(1)),l=this.pow(e,i),p=s;0!==l.cmp(a);){for(var b=l,y=0;0!==b.cmp(a);y++)b=b.redSqr();n(y<p);var m=this.pow(f,new o(1).iushln(p-y-1));h=h.redMul(m),f=m.redSqr(),l=l.redMul(f),p=y}return h},T.prototype.invm=function(e){var t=e._invmp(this.m);return 0!==t.negative?(t.negative=0,this.imod(t).redNeg()):this.imod(t)},T.prototype.pow=function(e,t){if(t.isZero())return new o(1).toRed(this);if(0===t.cmpn(1))return e.clone();var r=new Array(16);r[0]=new o(1).toRed(this),r[1]=e;for(var n=2;n<r.length;n++)r[n]=this.mul(r[n-1],e);var i=r[0],s=0,a=0,c=t.bitLength()%26;for(0===c&&(c=26),n=t.length-1;n>=0;n--){for(var u=t.words[n],d=c-1;d>=0;d--){var f=u>>d&1;i!==r[0]&&(i=this.sqr(i)),0!==f||0!==s?(s<<=1,s|=f,(4==++a||0===n&&0===d)&&(i=this.mul(i,r[s]),a=0,s=0)):a=0}c=26}return i},T.prototype.convertTo=function(e){var t=e.umod(this.m);return t===e?t.clone():t},T.prototype.convertFrom=function(e){var t=e.clone();return t.red=null,t},o.mont=function(e){return new E(e)},i(E,T),E.prototype.convertTo=function(e){return this.imod(e.ushln(this.shift))},E.prototype.convertFrom=function(e){var t=this.imod(e.mul(this.rinv));return t.red=null,t},E.prototype.imul=function(e,t){if(e.isZero()||t.isZero())return e.words[0]=0,e.length=1,e;var r=e.imul(t),n=r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),i=r.isub(n).iushrn(this.shift),o=i;return i.cmp(this.m)>=0?o=i.isub(this.m):i.cmpn(0)<0&&(o=i.iadd(this.m)),o._forceRed(this)},E.prototype.mul=function(e,t){if(e.isZero()||t.isZero())return new o(0)._forceRed(this);var r=e.mul(t),n=r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),i=r.isub(n).iushrn(this.shift),s=i;return i.cmp(this.m)>=0?s=i.isub(this.m):i.cmpn(0)<0&&(s=i.iadd(this.m)),s._forceRed(this)},E.prototype.invm=function(e){return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this)}}(e=r.nmd(e),this)},5442:(e,t,r)=>{var n;function i(e){this.rand=e}if(e.exports=function(e){return n||(n=new i(null)),n.generate(e)},e.exports.Rand=i,i.prototype.generate=function(e){return this._rand(e)},i.prototype._rand=function(e){if(this.rand.getBytes)return this.rand.getBytes(e);for(var t=new Uint8Array(e),r=0;r<t.length;r++)t[r]=this.rand.getByte();return t},"object"==typeof self)self.crypto&&self.crypto.getRandomValues?i.prototype._rand=function(e){var t=new Uint8Array(e);return self.crypto.getRandomValues(t),t}:self.msCrypto&&self.msCrypto.getRandomValues?i.prototype._rand=function(e){var t=new Uint8Array(e);return self.msCrypto.getRandomValues(t),t}:"object"==typeof window&&(i.prototype._rand=function(){throw new Error("Not implemented yet")});else try{var o=r(4507);if("function"!=typeof o.randomBytes)throw new Error("Not supported");i.prototype._rand=function(e){return o.randomBytes(e)}}catch(e){}},7088:(e,t,r)=>{var n=r(6608).Buffer;function i(e){n.isBuffer(e)||(e=n.from(e));for(var t=e.length/4|0,r=new Array(t),i=0;i<t;i++)r[i]=e.readUInt32BE(4*i);return r}function o(e){for(;0<e.length;e++)e[0]=0}function s(e,t,r,n,i){for(var o,s,a,c,u=r[0],d=r[1],f=r[2],h=r[3],l=e[0]^t[0],p=e[1]^t[1],b=e[2]^t[2],y=e[3]^t[3],m=4,g=1;g<i;g++)o=u[l>>>24]^d[p>>>16&255]^f[b>>>8&255]^h[255&y]^t[m++],s=u[p>>>24]^d[b>>>16&255]^f[y>>>8&255]^h[255&l]^t[m++],a=u[b>>>24]^d[y>>>16&255]^f[l>>>8&255]^h[255&p]^t[m++],c=u[y>>>24]^d[l>>>16&255]^f[p>>>8&255]^h[255&b]^t[m++],l=o,p=s,b=a,y=c;return o=(n[l>>>24]<<24|n[p>>>16&255]<<16|n[b>>>8&255]<<8|n[255&y])^t[m++],s=(n[p>>>24]<<24|n[b>>>16&255]<<16|n[y>>>8&255]<<8|n[255&l])^t[m++],a=(n[b>>>24]<<24|n[y>>>16&255]<<16|n[l>>>8&255]<<8|n[255&p])^t[m++],c=(n[y>>>24]<<24|n[l>>>16&255]<<16|n[p>>>8&255]<<8|n[255&b])^t[m++],[o>>>=0,s>>>=0,a>>>=0,c>>>=0]}var a=[0,1,2,4,8,16,32,64,128,27,54],c=function(){for(var e=new Array(256),t=0;t<256;t++)e[t]=t<128?t<<1:t<<1^283;for(var r=[],n=[],i=[[],[],[],[]],o=[[],[],[],[]],s=0,a=0,c=0;c<256;++c){var u=a^a<<1^a<<2^a<<3^a<<4;u=u>>>8^255&u^99,r[s]=u,n[u]=s;var d=e[s],f=e[d],h=e[f],l=257*e[u]^16843008*u;i[0][s]=l<<24|l>>>8,i[1][s]=l<<16|l>>>16,i[2][s]=l<<8|l>>>24,i[3][s]=l,l=16843009*h^65537*f^257*d^16843008*s,o[0][u]=l<<24|l>>>8,o[1][u]=l<<16|l>>>16,o[2][u]=l<<8|l>>>24,o[3][u]=l,0===s?s=a=1:(s=d^e[e[e[h^d]]],a^=e[e[a]])}return{SBOX:r,INV_SBOX:n,SUB_MIX:i,INV_SUB_MIX:o}}();function u(e){this._key=i(e),this._reset()}u.blockSize=16,u.keySize=32,u.prototype.blockSize=u.blockSize,u.prototype.keySize=u.keySize,u.prototype._reset=function(){for(var e=this._key,t=e.length,r=t+6,n=4*(r+1),i=[],o=0;o<t;o++)i[o]=e[o];for(o=t;o<n;o++){var s=i[o-1];o%t==0?(s=s<<8|s>>>24,s=c.SBOX[s>>>24]<<24|c.SBOX[s>>>16&255]<<16|c.SBOX[s>>>8&255]<<8|c.SBOX[255&s],s^=a[o/t|0]<<24):t>6&&o%t==4&&(s=c.SBOX[s>>>24]<<24|c.SBOX[s>>>16&255]<<16|c.SBOX[s>>>8&255]<<8|c.SBOX[255&s]),i[o]=i[o-t]^s}for(var u=[],d=0;d<n;d++){var f=n-d,h=i[f-(d%4?0:4)];u[d]=d<4||f<=4?h:c.INV_SUB_MIX[0][c.SBOX[h>>>24]]^c.INV_SUB_MIX[1][c.SBOX[h>>>16&255]]^c.INV_SUB_MIX[2][c.SBOX[h>>>8&255]]^c.INV_SUB_MIX[3][c.SBOX[255&h]]}this._nRounds=r,this._keySchedule=i,this._invKeySchedule=u},u.prototype.encryptBlockRaw=function(e){return s(e=i(e),this._keySchedule,c.SUB_MIX,c.SBOX,this._nRounds)},u.prototype.encryptBlock=function(e){var t=this.encryptBlockRaw(e),r=n.allocUnsafe(16);return r.writeUInt32BE(t[0],0),r.writeUInt32BE(t[1],4),r.writeUInt32BE(t[2],8),r.writeUInt32BE(t[3],12),r},u.prototype.decryptBlock=function(e){var t=(e=i(e))[1];e[1]=e[3],e[3]=t;var r=s(e,this._invKeySchedule,c.INV_SUB_MIX,c.INV_SBOX,this._nRounds),o=n.allocUnsafe(16);return o.writeUInt32BE(r[0],0),o.writeUInt32BE(r[3],4),o.writeUInt32BE(r[2],8),o.writeUInt32BE(r[1],12),o},u.prototype.scrub=function(){o(this._keySchedule),o(this._invKeySchedule),o(this._key)},e.exports.AES=u},8182:(e,t,r)=>{var n=r(7088),i=r(6608).Buffer,o=r(4705),s=r(1193),a=r(50),c=r(460),u=r(6696);function d(e,t,r,s){o.call(this);var c=i.alloc(4,0);this._cipher=new n.AES(t);var d=this._cipher.encryptBlock(c);this._ghash=new a(d),r=function(e,t,r){if(12===t.length)return e._finID=i.concat([t,i.from([0,0,0,1])]),i.concat([t,i.from([0,0,0,2])]);var n=new a(r),o=t.length,s=o%16;n.update(t),s&&(s=16-s,n.update(i.alloc(s,0))),n.update(i.alloc(8,0));var c=8*o,d=i.alloc(8);d.writeUIntBE(c,0,8),n.update(d),e._finID=n.state;var f=i.from(e._finID);return u(f),f}(this,r,d),this._prev=i.from(r),this._cache=i.allocUnsafe(0),this._secCache=i.allocUnsafe(0),this._decrypt=s,this._alen=0,this._len=0,this._mode=e,this._authTag=null,this._called=!1}s(d,o),d.prototype._update=function(e){if(!this._called&&this._alen){var t=16-this._alen%16;t<16&&(t=i.alloc(t,0),this._ghash.update(t))}this._called=!0;var r=this._mode.encrypt(this,e);return this._decrypt?this._ghash.update(e):this._ghash.update(r),this._len+=e.length,r},d.prototype._final=function(){if(this._decrypt&&!this._authTag)throw new Error("Unsupported state or unable to authenticate data");var e=c(this._ghash.final(8*this._alen,8*this._len),this._cipher.encryptBlock(this._finID));if(this._decrypt&&function(e,t){var r=0;e.length!==t.length&&r++;for(var n=Math.min(e.length,t.length),i=0;i<n;++i)r+=e[i]^t[i];return r}(e,this._authTag))throw new Error("Unsupported state or unable to authenticate data");this._authTag=e,this._cipher.scrub()},d.prototype.getAuthTag=function(){if(this._decrypt||!i.isBuffer(this._authTag))throw new Error("Attempting to get auth tag in unsupported state");return this._authTag},d.prototype.setAuthTag=function(e){if(!this._decrypt)throw new Error("Attempting to set auth tag in unsupported state");this._authTag=e},d.prototype.setAAD=function(e){if(this._called)throw new Error("Attempting to set AAD in unsupported state");this._ghash.update(e),this._alen+=e.length},e.exports=d},5007:(e,t,r)=>{var n=r(5173),i=r(8733),o=r(3349);t.createCipher=t.Cipher=n.createCipher,t.createCipheriv=t.Cipheriv=n.createCipheriv,t.createDecipher=t.Decipher=i.createDecipher,t.createDecipheriv=t.Decipheriv=i.createDecipheriv,t.listCiphers=t.getCiphers=function(){return Object.keys(o)}},8733:(e,t,r)=>{var n=r(8182),i=r(6608).Buffer,o=r(6200),s=r(8116),a=r(4705),c=r(7088),u=r(1804);function d(e,t,r){a.call(this),this._cache=new f,this._last=void 0,this._cipher=new c.AES(t),this._prev=i.from(r),this._mode=e,this._autopadding=!0}function f(){this.cache=i.allocUnsafe(0)}function h(e,t,r){var a=o[e.toLowerCase()];if(!a)throw new TypeError("invalid suite type");if("string"==typeof r&&(r=i.from(r)),"GCM"!==a.mode&&r.length!==a.iv)throw new TypeError("invalid iv length "+r.length);if("string"==typeof t&&(t=i.from(t)),t.length!==a.key/8)throw new TypeError("invalid key length "+t.length);return"stream"===a.type?new s(a.module,t,r,!0):"auth"===a.type?new n(a.module,t,r,!0):new d(a.module,t,r)}r(1193)(d,a),d.prototype._update=function(e){var t,r;this._cache.add(e);for(var n=[];t=this._cache.get(this._autopadding);)r=this._mode.decrypt(this,t),n.push(r);return i.concat(n)},d.prototype._final=function(){var e=this._cache.flush();if(this._autopadding)return function(e){var t=e[15];if(t<1||t>16)throw new Error("unable to decrypt data");for(var r=-1;++r<t;)if(e[r+(16-t)]!==t)throw new Error("unable to decrypt data");if(16!==t)return e.slice(0,16-t)}(this._mode.decrypt(this,e));if(e)throw new Error("data not multiple of block length")},d.prototype.setAutoPadding=function(e){return this._autopadding=!!e,this},f.prototype.add=function(e){this.cache=i.concat([this.cache,e])},f.prototype.get=function(e){var t;if(e){if(this.cache.length>16)return t=this.cache.slice(0,16),this.cache=this.cache.slice(16),t}else if(this.cache.length>=16)return t=this.cache.slice(0,16),this.cache=this.cache.slice(16),t;return null},f.prototype.flush=function(){if(this.cache.length)return this.cache},t.createDecipher=function(e,t){var r=o[e.toLowerCase()];if(!r)throw new TypeError("invalid suite type");var n=u(t,!1,r.key,r.iv);return h(e,n.key,n.iv)},t.createDecipheriv=h},5173:(e,t,r)=>{var n=r(6200),i=r(8182),o=r(6608).Buffer,s=r(8116),a=r(4705),c=r(7088),u=r(1804);function d(e,t,r){a.call(this),this._cache=new h,this._cipher=new c.AES(t),this._prev=o.from(r),this._mode=e,this._autopadding=!0}r(1193)(d,a),d.prototype._update=function(e){var t,r;this._cache.add(e);for(var n=[];t=this._cache.get();)r=this._mode.encrypt(this,t),n.push(r);return o.concat(n)};var f=o.alloc(16,16);function h(){this.cache=o.allocUnsafe(0)}function l(e,t,r){var a=n[e.toLowerCase()];if(!a)throw new TypeError("invalid suite type");if("string"==typeof t&&(t=o.from(t)),t.length!==a.key/8)throw new TypeError("invalid key length "+t.length);if("string"==typeof r&&(r=o.from(r)),"GCM"!==a.mode&&r.length!==a.iv)throw new TypeError("invalid iv length "+r.length);return"stream"===a.type?new s(a.module,t,r):"auth"===a.type?new i(a.module,t,r):new d(a.module,t,r)}d.prototype._final=function(){var e=this._cache.flush();if(this._autopadding)return e=this._mode.encrypt(this,e),this._cipher.scrub(),e;if(!e.equals(f))throw this._cipher.scrub(),new Error("data not multiple of block length")},d.prototype.setAutoPadding=function(e){return this._autopadding=!!e,this},h.prototype.add=function(e){this.cache=o.concat([this.cache,e])},h.prototype.get=function(){if(this.cache.length>15){var e=this.cache.slice(0,16);return this.cache=this.cache.slice(16),e}return null},h.prototype.flush=function(){for(var e=16-this.cache.length,t=o.allocUnsafe(e),r=-1;++r<e;)t.writeUInt8(e,r);return o.concat([this.cache,t])},t.createCipheriv=l,t.createCipher=function(e,t){var r=n[e.toLowerCase()];if(!r)throw new TypeError("invalid suite type");var i=u(t,!1,r.key,r.iv);return l(e,i.key,i.iv)}},50:(e,t,r)=>{var n=r(6608).Buffer,i=n.alloc(16,0);function o(e){var t=n.allocUnsafe(16);return t.writeUInt32BE(e[0]>>>0,0),t.writeUInt32BE(e[1]>>>0,4),t.writeUInt32BE(e[2]>>>0,8),t.writeUInt32BE(e[3]>>>0,12),t}function s(e){this.h=e,this.state=n.alloc(16,0),this.cache=n.allocUnsafe(0)}s.prototype.ghash=function(e){for(var t=-1;++t<e.length;)this.state[t]^=e[t];this._multiply()},s.prototype._multiply=function(){for(var e,t,r,n=[(e=this.h).readUInt32BE(0),e.readUInt32BE(4),e.readUInt32BE(8),e.readUInt32BE(12)],i=[0,0,0,0],s=-1;++s<128;){for(!!(this.state[~~(s/8)]&1<<7-s%8)&&(i[0]^=n[0],i[1]^=n[1],i[2]^=n[2],i[3]^=n[3]),r=!!(1&n[3]),t=3;t>0;t--)n[t]=n[t]>>>1|(1&n[t-1])<<31;n[0]=n[0]>>>1,r&&(n[0]=n[0]^225<<24)}this.state=o(i)},s.prototype.update=function(e){var t;for(this.cache=n.concat([this.cache,e]);this.cache.length>=16;)t=this.cache.slice(0,16),this.cache=this.cache.slice(16),this.ghash(t)},s.prototype.final=function(e,t){return this.cache.length&&this.ghash(n.concat([this.cache,i],16)),this.ghash(o([0,e,0,t])),this.state},e.exports=s},6696:e=>{e.exports=function(e){for(var t,r=e.length;r--;){if(255!==(t=e.readUInt8(r))){t++,e.writeUInt8(t,r);break}e.writeUInt8(0,r)}}},3506:(e,t,r)=>{var n=r(460);t.encrypt=function(e,t){var r=n(t,e._prev);return e._prev=e._cipher.encryptBlock(r),e._prev},t.decrypt=function(e,t){var r=e._prev;e._prev=t;var i=e._cipher.decryptBlock(t);return n(i,r)}},6149:(e,t,r)=>{var n=r(6608).Buffer,i=r(460);function o(e,t,r){var o=t.length,s=i(t,e._cache);return e._cache=e._cache.slice(o),e._prev=n.concat([e._prev,r?t:s]),s}t.encrypt=function(e,t,r){for(var i,s=n.allocUnsafe(0);t.length;){if(0===e._cache.length&&(e._cache=e._cipher.encryptBlock(e._prev),e._prev=n.allocUnsafe(0)),!(e._cache.length<=t.length)){s=n.concat([s,o(e,t,r)]);break}i=e._cache.length,s=n.concat([s,o(e,t.slice(0,i),r)]),t=t.slice(i)}return s}},8394:(e,t,r)=>{var n=r(6608).Buffer;function i(e,t,r){for(var n,i,s=-1,a=0;++s<8;)n=t&1<<7-s?128:0,a+=(128&(i=e._cipher.encryptBlock(e._prev)[0]^n))>>s%8,e._prev=o(e._prev,r?n:i);return a}function o(e,t){var r=e.length,i=-1,o=n.allocUnsafe(e.length);for(e=n.concat([e,n.from([t])]);++i<r;)o[i]=e[i]<<1|e[i+1]>>7;return o}t.encrypt=function(e,t,r){for(var o=t.length,s=n.allocUnsafe(o),a=-1;++a<o;)s[a]=i(e,t[a],r);return s}},193:(e,t,r)=>{var n=r(6608).Buffer;function i(e,t,r){var i=e._cipher.encryptBlock(e._prev)[0]^t;return e._prev=n.concat([e._prev.slice(1),n.from([r?t:i])]),i}t.encrypt=function(e,t,r){for(var o=t.length,s=n.allocUnsafe(o),a=-1;++a<o;)s[a]=i(e,t[a],r);return s}},5527:(e,t,r)=>{var n=r(460),i=r(6608).Buffer,o=r(6696);function s(e){var t=e._cipher.encryptBlockRaw(e._prev);return o(e._prev),t}t.encrypt=function(e,t){var r=Math.ceil(t.length/16),o=e._cache.length;e._cache=i.concat([e._cache,i.allocUnsafe(16*r)]);for(var a=0;a<r;a++){var c=s(e),u=o+16*a;e._cache.writeUInt32BE(c[0],u+0),e._cache.writeUInt32BE(c[1],u+4),e._cache.writeUInt32BE(c[2],u+8),e._cache.writeUInt32BE(c[3],u+12)}var d=e._cache.slice(0,t.length);return e._cache=e._cache.slice(t.length),n(t,d)}},882:(e,t)=>{t.encrypt=function(e,t){return e._cipher.encryptBlock(t)},t.decrypt=function(e,t){return e._cipher.decryptBlock(t)}},6200:(e,t,r)=>{var n={ECB:r(882),CBC:r(3506),CFB:r(6149),CFB8:r(193),CFB1:r(8394),OFB:r(7481),CTR:r(5527),GCM:r(5527)},i=r(3349);for(var o in i)i[o].module=n[i[o].mode];e.exports=i},7481:(e,t,r)=>{var n=r(460);function i(e){return e._prev=e._cipher.encryptBlock(e._prev),e._prev}t.encrypt=function(e,t){for(;e._cache.length<t.length;)e._cache=Buffer.concat([e._cache,i(e)]);var r=e._cache.slice(0,t.length);return e._cache=e._cache.slice(t.length),n(t,r)}},8116:(e,t,r)=>{var n=r(7088),i=r(6608).Buffer,o=r(4705);function s(e,t,r,s){o.call(this),this._cipher=new n.AES(t),this._prev=i.from(r),this._cache=i.allocUnsafe(0),this._secCache=i.allocUnsafe(0),this._decrypt=s,this._mode=e}r(1193)(s,o),s.prototype._update=function(e){return this._mode.encrypt(this,e,this._decrypt)},s.prototype._final=function(){this._cipher.scrub()},e.exports=s},8350:(e,t,r)=>{var n=r(4487),i=r(5007),o=r(6200),s=r(3811),a=r(1804);function c(e,t,r){if(e=e.toLowerCase(),o[e])return i.createCipheriv(e,t,r);if(s[e])return new n({key:t,iv:r,mode:e});throw new TypeError("invalid suite type")}function u(e,t,r){if(e=e.toLowerCase(),o[e])return i.createDecipheriv(e,t,r);if(s[e])return new n({key:t,iv:r,mode:e,decrypt:!0});throw new TypeError("invalid suite type")}t.createCipher=t.Cipher=function(e,t){var r,n;if(e=e.toLowerCase(),o[e])r=o[e].key,n=o[e].iv;else{if(!s[e])throw new TypeError("invalid suite type");r=8*s[e].key,n=s[e].iv}var i=a(t,!1,r,n);return c(e,i.key,i.iv)},t.createCipheriv=t.Cipheriv=c,t.createDecipher=t.Decipher=function(e,t){var r,n;if(e=e.toLowerCase(),o[e])r=o[e].key,n=o[e].iv;else{if(!s[e])throw new TypeError("invalid suite type");r=8*s[e].key,n=s[e].iv}var i=a(t,!1,r,n);return u(e,i.key,i.iv)},t.createDecipheriv=t.Decipheriv=u,t.listCiphers=t.getCiphers=function(){return Object.keys(s).concat(i.getCiphers())}},4487:(e,t,r)=>{var n=r(4705),i=r(2398),o=r(1193),s=r(6608).Buffer,a={"des-ede3-cbc":i.CBC.instantiate(i.EDE),"des-ede3":i.EDE,"des-ede-cbc":i.CBC.instantiate(i.EDE),"des-ede":i.EDE,"des-cbc":i.CBC.instantiate(i.DES),"des-ecb":i.DES};function c(e){n.call(this);var t,r=e.mode.toLowerCase(),i=a[r];t=e.decrypt?"decrypt":"encrypt";var o=e.key;s.isBuffer(o)||(o=s.from(o)),"des-ede"!==r&&"des-ede-cbc"!==r||(o=s.concat([o,o.slice(0,8)]));var c=e.iv;s.isBuffer(c)||(c=s.from(c)),this._des=i.create({key:o,iv:c,type:t})}a.des=a["des-cbc"],a.des3=a["des-ede3-cbc"],e.exports=c,o(c,n),c.prototype._update=function(e){return s.from(this._des.update(e))},c.prototype._final=function(){return s.from(this._des.final())}},3811:(e,t)=>{t["des-ecb"]={key:8,iv:0},t["des-cbc"]=t.des={key:8,iv:8},t["des-ede3-cbc"]=t.des3={key:24,iv:8},t["des-ede3"]={key:24,iv:0},t["des-ede-cbc"]={key:16,iv:8},t["des-ede"]={key:16,iv:0}},1377:(e,t,r)=>{var n=r(3900),i=r(2869);function o(e){var t,r=e.modulus.byteLength();do{t=new n(i(r))}while(t.cmp(e.modulus)>=0||!t.umod(e.prime1)||!t.umod(e.prime2));return t}function s(e,t){var r=function(e){var t=o(e);return{blinder:t.toRed(n.mont(e.modulus)).redPow(new n(e.publicExponent)).fromRed(),unblinder:t.invm(e.modulus)}}(t),i=t.modulus.byteLength(),s=new n(e).mul(r.blinder).umod(t.modulus),a=s.toRed(n.mont(t.prime1)),c=s.toRed(n.mont(t.prime2)),u=t.coefficient,d=t.prime1,f=t.prime2,h=a.redPow(t.exponent1).fromRed(),l=c.redPow(t.exponent2).fromRed(),p=h.isub(l).imul(u).umod(d).imul(f);return l.iadd(p).imul(r.unblinder).umod(t.modulus).toArrayLike(Buffer,"be",i)}s.getr=o,e.exports=s},8950:(e,t,r)=>{"use strict";e.exports=r(6980)},6105:(e,t,r)=>{"use strict";var n=r(6608).Buffer,i=r(8955),o=r(1094),s=r(1193),a=r(9508),c=r(5504),u=r(6980);function d(e){o.Writable.call(this);var t=u[e];if(!t)throw new Error("Unknown message digest");this._hashType=t.hash,this._hash=i(t.hash),this._tag=t.id,this._signType=t.sign}function f(e){o.Writable.call(this);var t=u[e];if(!t)throw new Error("Unknown message digest");this._hash=i(t.hash),this._tag=t.id,this._signType=t.sign}function h(e){return new d(e)}function l(e){return new f(e)}Object.keys(u).forEach((function(e){u[e].id=n.from(u[e].id,"hex"),u[e.toLowerCase()]=u[e]})),s(d,o.Writable),d.prototype._write=function(e,t,r){this._hash.update(e),r()},d.prototype.update=function(e,t){return this._hash.update("string"==typeof e?n.from(e,t):e),this},d.prototype.sign=function(e,t){this.end();var r=this._hash.digest(),n=a(r,e,this._hashType,this._signType,this._tag);return t?n.toString(t):n},s(f,o.Writable),f.prototype._write=function(e,t,r){this._hash.update(e),r()},f.prototype.update=function(e,t){return this._hash.update("string"==typeof e?n.from(e,t):e),this},f.prototype.verify=function(e,t,r){var i="string"==typeof t?n.from(t,r):t;this.end();var o=this._hash.digest();return c(i,o,e,this._signType,this._tag)},e.exports={Sign:h,Verify:l,createSign:h,createVerify:l}},9508:(e,t,r)=>{"use strict";var n=r(6608).Buffer,i=r(3053),o=r(1377),s=r(9386).ec,a=r(3900),c=r(780),u=r(9262);function d(e,t,r,o){if((e=n.from(e.toArray())).length<t.byteLength()){var s=n.alloc(t.byteLength()-e.length);e=n.concat([s,e])}var a=r.length,c=function(e,t){e=(e=f(e,t)).mod(t);var r=n.from(e.toArray());if(r.length<t.byteLength()){var i=n.alloc(t.byteLength()-r.length);r=n.concat([i,r])}return r}(r,t),u=n.alloc(a);u.fill(1);var d=n.alloc(a);return d=i(o,d).update(u).update(n.from([0])).update(e).update(c).digest(),u=i(o,d).update(u).digest(),{k:d=i(o,d).update(u).update(n.from([1])).update(e).update(c).digest(),v:u=i(o,d).update(u).digest()}}function f(e,t){var r=new a(e),n=(e.length<<3)-t.bitLength();return n>0&&r.ishrn(n),r}function h(e,t,r){var o,s;do{for(o=n.alloc(0);8*o.length<e.bitLength();)t.v=i(r,t.k).update(t.v).digest(),o=n.concat([o,t.v]);s=f(o,e),t.k=i(r,t.k).update(t.v).update(n.from([0])).digest(),t.v=i(r,t.k).update(t.v).digest()}while(-1!==s.cmp(e));return s}function l(e,t,r,n){return e.toRed(a.mont(r)).redPow(t).fromRed().mod(n)}e.exports=function(e,t,r,i,p){var b=c(t);if(b.curve){if("ecdsa"!==i&&"ecdsa/rsa"!==i)throw new Error("wrong private key type");return function(e,t){var r=u[t.curve.join(".")];if(!r)throw new Error("unknown curve "+t.curve.join("."));var i=new s(r).keyFromPrivate(t.privateKey).sign(e);return n.from(i.toDER())}(e,b)}if("dsa"===b.type){if("dsa"!==i)throw new Error("wrong private key type");return function(e,t,r){for(var i,o=t.params.priv_key,s=t.params.p,c=t.params.q,u=t.params.g,p=new a(0),b=f(e,c).mod(c),y=!1,m=d(o,c,e,r);!1===y;)p=l(u,i=h(c,m,r),s,c),0===(y=i.invm(c).imul(b.add(o.mul(p))).mod(c)).cmpn(0)&&(y=!1,p=new a(0));return function(e,t){e=e.toArray(),t=t.toArray(),128&e[0]&&(e=[0].concat(e)),128&t[0]&&(t=[0].concat(t));var r=[48,e.length+t.length+4,2,e.length];return r=r.concat(e,[2,t.length],t),n.from(r)}(p,y)}(e,b,r)}if("rsa"!==i&&"ecdsa/rsa"!==i)throw new Error("wrong private key type");if(void 0!==t.padding&&1!==t.padding)throw new Error("illegal or unsupported padding mode");e=n.concat([p,e]);for(var y=b.modulus.byteLength(),m=[0,1];e.length+m.length+1<y;)m.push(255);m.push(0);for(var g=-1;++g<e.length;)m.push(e[g]);return o(m,b)},e.exports.getKey=d,e.exports.makeKey=h},5504:(e,t,r)=>{"use strict";var n=r(6608).Buffer,i=r(3900),o=r(9386).ec,s=r(780),a=r(9262);function c(e,t){if(e.cmpn(0)<=0)throw new Error("invalid sig");if(e.cmp(t)>=0)throw new Error("invalid sig")}e.exports=function(e,t,r,u,d){var f=s(r);if("ec"===f.type){if("ecdsa"!==u&&"ecdsa/rsa"!==u)throw new Error("wrong public key type");return function(e,t,r){var n=a[r.data.algorithm.curve.join(".")];if(!n)throw new Error("unknown curve "+r.data.algorithm.curve.join("."));var i=new o(n),s=r.data.subjectPrivateKey.data;return i.verify(t,e,s)}(e,t,f)}if("dsa"===f.type){if("dsa"!==u)throw new Error("wrong public key type");return function(e,t,r){var n=r.data.p,o=r.data.q,a=r.data.g,u=r.data.pub_key,d=s.signature.decode(e,"der"),f=d.s,h=d.r;c(f,o),c(h,o);var l=i.mont(n),p=f.invm(o);return 0===a.toRed(l).redPow(new i(t).mul(p).mod(o)).fromRed().mul(u.toRed(l).redPow(h.mul(p).mod(o)).fromRed()).mod(n).mod(o).cmp(h)}(e,t,f)}if("rsa"!==u&&"ecdsa/rsa"!==u)throw new Error("wrong public key type");t=n.concat([d,t]);for(var h=f.modulus.byteLength(),l=[1],p=0;t.length+l.length+2<h;)l.push(255),p+=1;l.push(0);for(var b=-1;++b<t.length;)l.push(t[b]);l=n.from(l);var y=i.mont(f.modulus);e=(e=new i(e).toRed(y)).redPow(new i(f.publicExponent)),e=n.from(e.fromRed().toArray());var m=p<8?1:0;for(h=Math.min(e.length,l.length),e.length!==l.length&&(m=1),b=-1;++b<h;)m|=e[b]^l[b];return 0===m}},460:e=>{e.exports=function(e,t){for(var r=Math.min(e.length,t.length),n=new Buffer(r),i=0;i<r;++i)n[i]=e[i]^t[i];return n}},6533:(e,t,r)=>{"use strict";const n=r(4933),i=r(3328),o="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;t.Buffer=c,t.SlowBuffer=function(e){return+e!=e&&(e=0),c.alloc(+e)},t.INSPECT_MAX_BYTES=50;const s=2147483647;function a(e){if(e>s)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,c.prototype),t}function c(e,t,r){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return f(e)}return u(e,t,r)}function u(e,t,r){if("string"==typeof e)return function(e,t){if("string"==typeof t&&""!==t||(t="utf8"),!c.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const r=0|b(e,t);let n=a(r);const i=n.write(e,t);return i!==r&&(n=n.slice(0,i)),n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(J(e,Uint8Array)){const t=new Uint8Array(e);return l(t.buffer,t.byteOffset,t.byteLength)}return h(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(J(e,ArrayBuffer)||e&&J(e.buffer,ArrayBuffer))return l(e,t,r);if("undefined"!=typeof SharedArrayBuffer&&(J(e,SharedArrayBuffer)||e&&J(e.buffer,SharedArrayBuffer)))return l(e,t,r);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return c.from(n,t,r);const i=function(e){if(c.isBuffer(e)){const t=0|p(e.length),r=a(t);return 0===r.length||e.copy(r,0,0,t),r}return void 0!==e.length?"number"!=typeof e.length||Z(e.length)?a(0):h(e):"Buffer"===e.type&&Array.isArray(e.data)?h(e.data):void 0}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return c.from(e[Symbol.toPrimitive]("string"),t,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function d(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function f(e){return d(e),a(e<0?0:0|p(e))}function h(e){const t=e.length<0?0:0|p(e.length),r=a(t);for(let n=0;n<t;n+=1)r[n]=255&e[n];return r}function l(e,t,r){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw new RangeError('"length" is outside of buffer bounds');let n;return n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),Object.setPrototypeOf(n,c.prototype),n}function p(e){if(e>=s)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s.toString(16)+" bytes");return 0|e}function b(e,t){if(c.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||J(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;let i=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return G(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return K(e).length;default:if(i)return n?-1:G(e).length;t=(""+t).toLowerCase(),i=!0}}function y(e,t,r){let n=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return x(this,t,r);case"utf8":case"utf-8":return T(this,t,r);case"ascii":return k(this,t,r);case"latin1":case"binary":return I(this,t,r);case"base64":return C(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return B(this,t,r);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function m(e,t,r){const n=e[t];e[t]=e[r],e[r]=n}function g(e,t,r,n,i){if(0===e.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),Z(r=+r)&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return-1;r=e.length-1}else if(r<0){if(!i)return-1;r=0}if("string"==typeof t&&(t=c.from(t,n)),c.isBuffer(t))return 0===t.length?-1:v(e,t,r,n,i);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):v(e,[t],r,n,i);throw new TypeError("val must be string, number or Buffer")}function v(e,t,r,n,i){let o,s=1,a=e.length,c=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return-1;s=2,a/=2,c/=2,r/=2}function u(e,t){return 1===s?e[t]:e.readUInt16BE(t*s)}if(i){let n=-1;for(o=r;o<a;o++)if(u(e,o)===u(t,-1===n?0:o-n)){if(-1===n&&(n=o),o-n+1===c)return n*s}else-1!==n&&(o-=o-n),n=-1}else for(r+c>a&&(r=a-c),o=r;o>=0;o--){let r=!0;for(let n=0;n<c;n++)if(u(e,o+n)!==u(t,n)){r=!1;break}if(r)return o}return-1}function w(e,t,r,n){r=Number(r)||0;const i=e.length-r;n?(n=Number(n))>i&&(n=i):n=i;const o=t.length;let s;for(n>o/2&&(n=o/2),s=0;s<n;++s){const n=parseInt(t.substr(2*s,2),16);if(Z(n))return s;e[r+s]=n}return s}function _(e,t,r,n){return W(G(t,e.length-r),e,r,n)}function A(e,t,r,n){return W(function(e){const t=[];for(let r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(t),e,r,n)}function S(e,t,r,n){return W(K(t),e,r,n)}function M(e,t,r,n){return W(function(e,t){let r,n,i;const o=[];for(let s=0;s<e.length&&!((t-=2)<0);++s)r=e.charCodeAt(s),n=r>>8,i=r%256,o.push(i),o.push(n);return o}(t,e.length-r),e,r,n)}function C(e,t,r){return 0===t&&r===e.length?n.fromByteArray(e):n.fromByteArray(e.slice(t,r))}function T(e,t,r){r=Math.min(e.length,r);const n=[];let i=t;for(;i<r;){const t=e[i];let o=null,s=t>239?4:t>223?3:t>191?2:1;if(i+s<=r){let r,n,a,c;switch(s){case 1:t<128&&(o=t);break;case 2:r=e[i+1],128==(192&r)&&(c=(31&t)<<6|63&r,c>127&&(o=c));break;case 3:r=e[i+1],n=e[i+2],128==(192&r)&&128==(192&n)&&(c=(15&t)<<12|(63&r)<<6|63&n,c>2047&&(c<55296||c>57343)&&(o=c));break;case 4:r=e[i+1],n=e[i+2],a=e[i+3],128==(192&r)&&128==(192&n)&&128==(192&a)&&(c=(15&t)<<18|(63&r)<<12|(63&n)<<6|63&a,c>65535&&c<1114112&&(o=c))}}null===o?(o=65533,s=1):o>65535&&(o-=65536,n.push(o>>>10&1023|55296),o=56320|1023&o),n.push(o),i+=s}return function(e){const t=e.length;if(t<=E)return String.fromCharCode.apply(String,e);let r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=E));return r}(n)}t.kMaxLength=s,c.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),c.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(c.prototype,"parent",{enumerable:!0,get:function(){if(c.isBuffer(this))return this.buffer}}),Object.defineProperty(c.prototype,"offset",{enumerable:!0,get:function(){if(c.isBuffer(this))return this.byteOffset}}),c.poolSize=8192,c.from=function(e,t,r){return u(e,t,r)},Object.setPrototypeOf(c.prototype,Uint8Array.prototype),Object.setPrototypeOf(c,Uint8Array),c.alloc=function(e,t,r){return function(e,t,r){return d(e),e<=0?a(e):void 0!==t?"string"==typeof r?a(e).fill(t,r):a(e).fill(t):a(e)}(e,t,r)},c.allocUnsafe=function(e){return f(e)},c.allocUnsafeSlow=function(e){return f(e)},c.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==c.prototype},c.compare=function(e,t){if(J(e,Uint8Array)&&(e=c.from(e,e.offset,e.byteLength)),J(t,Uint8Array)&&(t=c.from(t,t.offset,t.byteLength)),!c.isBuffer(e)||!c.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let r=e.length,n=t.length;for(let i=0,o=Math.min(r,n);i<o;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:n<r?1:0},c.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},c.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return c.alloc(0);let r;if(void 0===t)for(t=0,r=0;r<e.length;++r)t+=e[r].length;const n=c.allocUnsafe(t);let i=0;for(r=0;r<e.length;++r){let t=e[r];if(J(t,Uint8Array))i+t.length>n.length?(c.isBuffer(t)||(t=c.from(t)),t.copy(n,i)):Uint8Array.prototype.set.call(n,t,i);else{if(!c.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(n,i)}i+=t.length}return n},c.byteLength=b,c.prototype._isBuffer=!0,c.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)m(this,t,t+1);return this},c.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)m(this,t,t+3),m(this,t+1,t+2);return this},c.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)m(this,t,t+7),m(this,t+1,t+6),m(this,t+2,t+5),m(this,t+3,t+4);return this},c.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?T(this,0,e):y.apply(this,arguments)},c.prototype.toLocaleString=c.prototype.toString,c.prototype.equals=function(e){if(!c.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===c.compare(this,e)},c.prototype.inspect=function(){let e="";const r=t.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},o&&(c.prototype[o]=c.prototype.inspect),c.prototype.compare=function(e,t,r,n,i){if(J(e,Uint8Array)&&(e=c.from(e,e.offset,e.byteLength)),!c.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),t<0||r>e.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&t>=r)return 0;if(n>=i)return-1;if(t>=r)return 1;if(this===e)return 0;let o=(i>>>=0)-(n>>>=0),s=(r>>>=0)-(t>>>=0);const a=Math.min(o,s),u=this.slice(n,i),d=e.slice(t,r);for(let e=0;e<a;++e)if(u[e]!==d[e]){o=u[e],s=d[e];break}return o<s?-1:s<o?1:0},c.prototype.includes=function(e,t,r){return-1!==this.indexOf(e,t,r)},c.prototype.indexOf=function(e,t,r){return g(this,e,t,r,!0)},c.prototype.lastIndexOf=function(e,t,r){return g(this,e,t,r,!1)},c.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}const i=this.length-t;if((void 0===r||r>i)&&(r=i),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let o=!1;for(;;)switch(n){case"hex":return w(this,e,t,r);case"utf8":case"utf-8":return _(this,e,t,r);case"ascii":case"latin1":case"binary":return A(this,e,t,r);case"base64":return S(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return M(this,e,t,r);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},c.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const E=4096;function k(e,t,r){let n="";r=Math.min(e.length,r);for(let i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}function I(e,t,r){let n="";r=Math.min(e.length,r);for(let i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}function x(e,t,r){const n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);let i="";for(let n=t;n<r;++n)i+=X[e[n]];return i}function B(e,t,r){const n=e.slice(t,r);let i="";for(let e=0;e<n.length-1;e+=2)i+=String.fromCharCode(n[e]+256*n[e+1]);return i}function U(e,t,r){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}function P(e,t,r,n,i,o){if(!c.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<o)throw new RangeError('"value" argument is out of bounds');if(r+n>e.length)throw new RangeError("Index out of range")}function O(e,t,r,n,i){q(t,n,i,e,r,7);let o=Number(t&BigInt(4294967295));e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[r++]=s,s>>=8,e[r++]=s,s>>=8,e[r++]=s,s>>=8,e[r++]=s,r}function R(e,t,r,n,i){q(t,n,i,e,r,7);let o=Number(t&BigInt(4294967295));e[r+7]=o,o>>=8,e[r+6]=o,o>>=8,e[r+5]=o,o>>=8,e[r+4]=o;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[r+3]=s,s>>=8,e[r+2]=s,s>>=8,e[r+1]=s,s>>=8,e[r]=s,r+8}function L(e,t,r,n,i,o){if(r+n>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function N(e,t,r,n,o){return t=+t,r>>>=0,o||L(e,0,r,4),i.write(e,t,r,n,23,4),r+4}function j(e,t,r,n,o){return t=+t,r>>>=0,o||L(e,0,r,8),i.write(e,t,r,n,52,8),r+8}c.prototype.slice=function(e,t){const r=this.length;(e=~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),(t=void 0===t?r:~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);const n=this.subarray(e,t);return Object.setPrototypeOf(n,c.prototype),n},c.prototype.readUintLE=c.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||U(e,t,this.length);let n=this[e],i=1,o=0;for(;++o<t&&(i*=256);)n+=this[e+o]*i;return n},c.prototype.readUintBE=c.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||U(e,t,this.length);let n=this[e+--t],i=1;for(;t>0&&(i*=256);)n+=this[e+--t]*i;return n},c.prototype.readUint8=c.prototype.readUInt8=function(e,t){return e>>>=0,t||U(e,1,this.length),this[e]},c.prototype.readUint16LE=c.prototype.readUInt16LE=function(e,t){return e>>>=0,t||U(e,2,this.length),this[e]|this[e+1]<<8},c.prototype.readUint16BE=c.prototype.readUInt16BE=function(e,t){return e>>>=0,t||U(e,2,this.length),this[e]<<8|this[e+1]},c.prototype.readUint32LE=c.prototype.readUInt32LE=function(e,t){return e>>>=0,t||U(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},c.prototype.readUint32BE=c.prototype.readUInt32BE=function(e,t){return e>>>=0,t||U(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},c.prototype.readBigUInt64LE=Y((function(e){$(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||V(e,this.length-8);const n=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,i=this[++e]+256*this[++e]+65536*this[++e]+r*2**24;return BigInt(n)+(BigInt(i)<<BigInt(32))})),c.prototype.readBigUInt64BE=Y((function(e){$(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||V(e,this.length-8);const n=t*2**24+65536*this[++e]+256*this[++e]+this[++e],i=this[++e]*2**24+65536*this[++e]+256*this[++e]+r;return(BigInt(n)<<BigInt(32))+BigInt(i)})),c.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||U(e,t,this.length);let n=this[e],i=1,o=0;for(;++o<t&&(i*=256);)n+=this[e+o]*i;return i*=128,n>=i&&(n-=Math.pow(2,8*t)),n},c.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||U(e,t,this.length);let n=t,i=1,o=this[e+--n];for(;n>0&&(i*=256);)o+=this[e+--n]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*t)),o},c.prototype.readInt8=function(e,t){return e>>>=0,t||U(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},c.prototype.readInt16LE=function(e,t){e>>>=0,t||U(e,2,this.length);const r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},c.prototype.readInt16BE=function(e,t){e>>>=0,t||U(e,2,this.length);const r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},c.prototype.readInt32LE=function(e,t){return e>>>=0,t||U(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},c.prototype.readInt32BE=function(e,t){return e>>>=0,t||U(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},c.prototype.readBigInt64LE=Y((function(e){$(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||V(e,this.length-8);const n=this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24);return(BigInt(n)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),c.prototype.readBigInt64BE=Y((function(e){$(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||V(e,this.length-8);const n=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+r)})),c.prototype.readFloatLE=function(e,t){return e>>>=0,t||U(e,4,this.length),i.read(this,e,!0,23,4)},c.prototype.readFloatBE=function(e,t){return e>>>=0,t||U(e,4,this.length),i.read(this,e,!1,23,4)},c.prototype.readDoubleLE=function(e,t){return e>>>=0,t||U(e,8,this.length),i.read(this,e,!0,52,8)},c.prototype.readDoubleBE=function(e,t){return e>>>=0,t||U(e,8,this.length),i.read(this,e,!1,52,8)},c.prototype.writeUintLE=c.prototype.writeUIntLE=function(e,t,r,n){e=+e,t>>>=0,r>>>=0,n||P(this,e,t,r,Math.pow(2,8*r)-1,0);let i=1,o=0;for(this[t]=255&e;++o<r&&(i*=256);)this[t+o]=e/i&255;return t+r},c.prototype.writeUintBE=c.prototype.writeUIntBE=function(e,t,r,n){e=+e,t>>>=0,r>>>=0,n||P(this,e,t,r,Math.pow(2,8*r)-1,0);let i=r-1,o=1;for(this[t+i]=255&e;--i>=0&&(o*=256);)this[t+i]=e/o&255;return t+r},c.prototype.writeUint8=c.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||P(this,e,t,1,255,0),this[t]=255&e,t+1},c.prototype.writeUint16LE=c.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||P(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},c.prototype.writeUint16BE=c.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||P(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},c.prototype.writeUint32LE=c.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||P(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},c.prototype.writeUint32BE=c.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||P(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},c.prototype.writeBigUInt64LE=Y((function(e,t=0){return O(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),c.prototype.writeBigUInt64BE=Y((function(e,t=0){return R(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),c.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){const n=Math.pow(2,8*r-1);P(this,e,t,r,n-1,-n)}let i=0,o=1,s=0;for(this[t]=255&e;++i<r&&(o*=256);)e<0&&0===s&&0!==this[t+i-1]&&(s=1),this[t+i]=(e/o|0)-s&255;return t+r},c.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){const n=Math.pow(2,8*r-1);P(this,e,t,r,n-1,-n)}let i=r-1,o=1,s=0;for(this[t+i]=255&e;--i>=0&&(o*=256);)e<0&&0===s&&0!==this[t+i+1]&&(s=1),this[t+i]=(e/o|0)-s&255;return t+r},c.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||P(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},c.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||P(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},c.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||P(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},c.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||P(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},c.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||P(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},c.prototype.writeBigInt64LE=Y((function(e,t=0){return O(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),c.prototype.writeBigInt64BE=Y((function(e,t=0){return R(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),c.prototype.writeFloatLE=function(e,t,r){return N(this,e,t,!0,r)},c.prototype.writeFloatBE=function(e,t,r){return N(this,e,t,!1,r)},c.prototype.writeDoubleLE=function(e,t,r){return j(this,e,t,!0,r)},c.prototype.writeDoubleBE=function(e,t,r){return j(this,e,t,!1,r)},c.prototype.copy=function(e,t,r,n){if(!c.isBuffer(e))throw new TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);const i=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),i},c.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!c.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===e.length){const t=e.charCodeAt(0);("utf8"===n&&t<128||"latin1"===n)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;let i;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(i=t;i<r;++i)this[i]=e;else{const o=c.isBuffer(e)?e:c.from(e,n),s=o.length;if(0===s)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<r-t;++i)this[i+t]=o[i%s]}return this};const D={};function F(e,t,r){D[e]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function H(e){let t="",r=e.length;const n="-"===e[0]?1:0;for(;r>=n+4;r-=3)t=`_${e.slice(r-3,r)}${t}`;return`${e.slice(0,r)}${t}`}function q(e,t,r,n,i,o){if(e>r||e<t){const n="bigint"==typeof t?"n":"";let i;throw i=o>3?0===t||t===BigInt(0)?`>= 0${n} and < 2${n} ** ${8*(o+1)}${n}`:`>= -(2${n} ** ${8*(o+1)-1}${n}) and < 2 ** ${8*(o+1)-1}${n}`:`>= ${t}${n} and <= ${r}${n}`,new D.ERR_OUT_OF_RANGE("value",i,e)}!function(e,t,r){$(t,"offset"),void 0!==e[t]&&void 0!==e[t+r]||V(t,e.length-(r+1))}(n,i,o)}function $(e,t){if("number"!=typeof e)throw new D.ERR_INVALID_ARG_TYPE(t,"number",e)}function V(e,t,r){if(Math.floor(e)!==e)throw $(e,r),new D.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new D.ERR_BUFFER_OUT_OF_BOUNDS;throw new D.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${t}`,e)}F("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),F("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),F("ERR_OUT_OF_RANGE",(function(e,t,r){let n=`The value of "${e}" is out of range.`,i=r;return Number.isInteger(r)&&Math.abs(r)>2**32?i=H(String(r)):"bigint"==typeof r&&(i=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(i=H(i)),i+="n"),n+=` It must be ${t}. Received ${i}`,n}),RangeError);const z=/[^+/0-9A-Za-z-_]/g;function G(e,t){let r;t=t||1/0;const n=e.length;let i=null;const o=[];for(let s=0;s<n;++s){if(r=e.charCodeAt(s),r>55295&&r<57344){if(!i){if(r>56319){(t-=3)>-1&&o.push(239,191,189);continue}if(s+1===n){(t-=3)>-1&&o.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&o.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&(t-=3)>-1&&o.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;o.push(r)}else if(r<2048){if((t-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return o}function K(e){return n.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(z,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function W(e,t,r,n){let i;for(i=0;i<n&&!(i+r>=t.length||i>=e.length);++i)t[i+r]=e[i];return i}function J(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function Z(e){return e!=e}const X=function(){const e="0123456789abcdef",t=new Array(256);for(let r=0;r<16;++r){const n=16*r;for(let i=0;i<16;++i)t[n+i]=e[r]+e[i]}return t}();function Y(e){return"undefined"==typeof BigInt?Q:e}function Q(){throw new Error("BigInt not supported")}},4705:(e,t,r)=>{var n=r(6608).Buffer,i=r(3803).Transform,o=r(6704).I;function s(e){i.call(this),this.hashMode="string"==typeof e,this.hashMode?this[e]=this._finalOrDigest:this.final=this._finalOrDigest,this._final&&(this.__final=this._final,this._final=null),this._decoder=null,this._encoding=null}r(1193)(s,i),s.prototype.update=function(e,t,r){"string"==typeof e&&(e=n.from(e,t));var i=this._update(e);return this.hashMode?this:(r&&(i=this._toString(i,r)),i)},s.prototype.setAutoPadding=function(){},s.prototype.getAuthTag=function(){throw new Error("trying to get auth tag in unsupported state")},s.prototype.setAuthTag=function(){throw new Error("trying to set auth tag in unsupported state")},s.prototype.setAAD=function(){throw new Error("trying to set aad in unsupported state")},s.prototype._transform=function(e,t,r){var n;try{this.hashMode?this._update(e):this.push(this._update(e))}catch(e){n=e}finally{r(n)}},s.prototype._flush=function(e){var t;try{this.push(this.__final())}catch(e){t=e}e(t)},s.prototype._finalOrDigest=function(e){var t=this.__final()||n.alloc(0);return e&&(t=this._toString(t,e,!0)),t},s.prototype._toString=function(e,t,r){if(this._decoder||(this._decoder=new o(t),this._encoding=t),this._encoding!==t)throw new Error("can't switch encodings");var n=this._decoder.write(e);return r&&(n+=this._decoder.end()),n},e.exports=s},9520:(e,t,r)=>{var n=r(9386),i=r(4619);e.exports=function(e){return new s(e)};var o={secp256k1:{name:"secp256k1",byteLength:32},secp224r1:{name:"p224",byteLength:28},prime256v1:{name:"p256",byteLength:32},prime192v1:{name:"p192",byteLength:24},ed25519:{name:"ed25519",byteLength:32},secp384r1:{name:"p384",byteLength:48},secp521r1:{name:"p521",byteLength:66}};function s(e){this.curveType=o[e],this.curveType||(this.curveType={name:e}),this.curve=new n.ec(this.curveType.name),this.keys=void 0}function a(e,t,r){Array.isArray(e)||(e=e.toArray());var n=new Buffer(e);if(r&&n.length<r){var i=new Buffer(r-n.length);i.fill(0),n=Buffer.concat([i,n])}return t?n.toString(t):n}o.p224=o.secp224r1,o.p256=o.secp256r1=o.prime256v1,o.p192=o.secp192r1=o.prime192v1,o.p384=o.secp384r1,o.p521=o.secp521r1,s.prototype.generateKeys=function(e,t){return this.keys=this.curve.genKeyPair(),this.getPublicKey(e,t)},s.prototype.computeSecret=function(e,t,r){return t=t||"utf8",Buffer.isBuffer(e)||(e=new Buffer(e,t)),a(this.curve.keyFromPublic(e).getPublic().mul(this.keys.getPrivate()).getX(),r,this.curveType.byteLength)},s.prototype.getPublicKey=function(e,t){var r=this.keys.getPublic("compressed"===t,!0);return"hybrid"===t&&(r[r.length-1]%2?r[0]=7:r[0]=6),a(r,e)},s.prototype.getPrivateKey=function(e){return a(this.keys.getPrivate(),e)},s.prototype.setPublicKey=function(e,t){return t=t||"utf8",Buffer.isBuffer(e)||(e=new Buffer(e,t)),this.keys._importPublic(e),this},s.prototype.setPrivateKey=function(e,t){t=t||"utf8",Buffer.isBuffer(e)||(e=new Buffer(e,t));var r=new i(e);return r=r.toString(16),this.keys=this.curve.genKeyPair(),this.keys._importPrivate(r),this}},8955:(e,t,r)=>{"use strict";var n=r(1193),i=r(5035),o=r(3934),s=r(5244),a=r(4705);function c(e){a.call(this,"digest"),this._hash=e}n(c,a),c.prototype._update=function(e){this._hash.update(e)},c.prototype._final=function(){return this._hash.digest()},e.exports=function(e){return"md5"===(e=e.toLowerCase())?new i:"rmd160"===e||"ripemd160"===e?new o:new c(s(e))}},6159:(e,t,r)=>{var n=r(5035);e.exports=function(e){return(new n).update(e).digest()}},3053:(e,t,r)=>{"use strict";var n=r(1193),i=r(670),o=r(4705),s=r(6608).Buffer,a=r(6159),c=r(3934),u=r(5244),d=s.alloc(128);function f(e,t){o.call(this,"digest"),"string"==typeof t&&(t=s.from(t));var r="sha512"===e||"sha384"===e?128:64;this._alg=e,this._key=t,t.length>r?t=("rmd160"===e?new c:u(e)).update(t).digest():t.length<r&&(t=s.concat([t,d],r));for(var n=this._ipad=s.allocUnsafe(r),i=this._opad=s.allocUnsafe(r),a=0;a<r;a++)n[a]=54^t[a],i[a]=92^t[a];this._hash="rmd160"===e?new c:u(e),this._hash.update(n)}n(f,o),f.prototype._update=function(e){this._hash.update(e)},f.prototype._final=function(){var e=this._hash.digest();return("rmd160"===this._alg?new c:u(this._alg)).update(this._opad).update(e).digest()},e.exports=function(e,t){return"rmd160"===(e=e.toLowerCase())||"ripemd160"===e?new f("rmd160",t):"md5"===e?new i(a,t):new f(e,t)}},670:(e,t,r)=>{"use strict";var n=r(1193),i=r(6608).Buffer,o=r(4705),s=i.alloc(128),a=64;function c(e,t){o.call(this,"digest"),"string"==typeof t&&(t=i.from(t)),this._alg=e,this._key=t,t.length>a?t=e(t):t.length<a&&(t=i.concat([t,s],a));for(var r=this._ipad=i.allocUnsafe(a),n=this._opad=i.allocUnsafe(a),c=0;c<a;c++)r[c]=54^t[c],n[c]=92^t[c];this._hash=[r]}n(c,o),c.prototype._update=function(e){this._hash.push(e)},c.prototype._final=function(){var e=this._alg(i.concat(this._hash));return this._alg(i.concat([this._opad,e]))},e.exports=c},9114:function(){!function(e){!function(t){var r="URLSearchParams"in e,n="Symbol"in e&&"iterator"in Symbol,i="FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),o="FormData"in e,s="ArrayBuffer"in e;if(s)var a=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],c=ArrayBuffer.isView||function(e){return e&&a.indexOf(Object.prototype.toString.call(e))>-1};function u(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function d(e){return"string"!=typeof e&&(e=String(e)),e}function f(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return n&&(t[Symbol.iterator]=function(){return t}),t}function h(e){this.map={},e instanceof h?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function l(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function p(e){return new Promise((function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}}))}function b(e){var t=new FileReader,r=p(t);return t.readAsArrayBuffer(e),r}function y(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function m(){return this.bodyUsed=!1,this._initBody=function(e){var t;this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:i&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:o&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:r&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():s&&i&&(t=e)&&DataView.prototype.isPrototypeOf(t)?(this._bodyArrayBuffer=y(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):s&&(ArrayBuffer.prototype.isPrototypeOf(e)||c(e))?this._bodyArrayBuffer=y(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},i&&(this.blob=function(){var e=l(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?l(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(b)}),this.text=function(){var e,t,r,n=l(this);if(n)return n;if(this._bodyBlob)return e=this._bodyBlob,r=p(t=new FileReader),t.readAsText(e),r;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},o&&(this.formData=function(){return this.text().then(w)}),this.json=function(){return this.text().then(JSON.parse)},this}h.prototype.append=function(e,t){e=u(e),t=d(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},h.prototype.delete=function(e){delete this.map[u(e)]},h.prototype.get=function(e){return e=u(e),this.has(e)?this.map[e]:null},h.prototype.has=function(e){return this.map.hasOwnProperty(u(e))},h.prototype.set=function(e,t){this.map[u(e)]=d(t)},h.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},h.prototype.keys=function(){var e=[];return this.forEach((function(t,r){e.push(r)})),f(e)},h.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),f(e)},h.prototype.entries=function(){var e=[];return this.forEach((function(t,r){e.push([r,t])})),f(e)},n&&(h.prototype[Symbol.iterator]=h.prototype.entries);var g=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function v(e,t){var r,n,i=(t=t||{}).body;if(e instanceof v){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new h(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,i||null==e._bodyInit||(i=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new h(t.headers)),this.method=(n=(r=t.method||this.method||"GET").toUpperCase(),g.indexOf(n)>-1?n:r),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&i)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(i)}function w(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),i=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(i))}})),t}function _(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new h(t.headers),this.url=t.url||"",this._initBody(e)}v.prototype.clone=function(){return new v(this,{body:this._bodyInit})},m.call(v.prototype),m.call(_.prototype),_.prototype.clone=function(){return new _(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new h(this.headers),url:this.url})},_.error=function(){var e=new _(null,{status:0,statusText:""});return e.type="error",e};var A=[301,302,303,307,308];_.redirect=function(e,t){if(-1===A.indexOf(t))throw new RangeError("Invalid status code");return new _(null,{status:t,headers:{location:e}})},t.DOMException=e.DOMException;try{new t.DOMException}catch(e){t.DOMException=function(e,t){this.message=e,this.name=t;var r=Error(e);this.stack=r.stack},t.DOMException.prototype=Object.create(Error.prototype),t.DOMException.prototype.constructor=t.DOMException}function S(e,r){return new Promise((function(n,o){var s=new v(e,r);if(s.signal&&s.signal.aborted)return o(new t.DOMException("Aborted","AbortError"));var a=new XMLHttpRequest;function c(){a.abort()}a.onload=function(){var e,t,r={status:a.status,statusText:a.statusText,headers:(e=a.getAllResponseHeaders()||"",t=new h,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(e){var r=e.split(":"),n=r.shift().trim();if(n){var i=r.join(":").trim();t.append(n,i)}})),t)};r.url="responseURL"in a?a.responseURL:r.headers.get("X-Request-URL");var i="response"in a?a.response:a.responseText;n(new _(i,r))},a.onerror=function(){o(new TypeError("Network request failed"))},a.ontimeout=function(){o(new TypeError("Network request failed"))},a.onabort=function(){o(new t.DOMException("Aborted","AbortError"))},a.open(s.method,s.url,!0),"include"===s.credentials?a.withCredentials=!0:"omit"===s.credentials&&(a.withCredentials=!1),"responseType"in a&&i&&(a.responseType="blob"),s.headers.forEach((function(e,t){a.setRequestHeader(t,e)})),s.signal&&(s.signal.addEventListener("abort",c),a.onreadystatechange=function(){4===a.readyState&&s.signal.removeEventListener("abort",c)}),a.send(void 0===s._bodyInit?null:s._bodyInit)}))}S.polyfill=!0,e.fetch||(e.fetch=S,e.Headers=h,e.Request=v,e.Response=_),t.Headers=h,t.Request=v,t.Response=_,t.fetch=S,Object.defineProperty(t,"__esModule",{value:!0})}({})}("undefined"!=typeof self?self:this)},4062:(e,t,r)=>{"use strict";t.randomBytes=t.rng=t.pseudoRandomBytes=t.prng=r(2869),t.createHash=t.Hash=r(8955),t.createHmac=t.Hmac=r(3053);var n=r(8950),i=Object.keys(n),o=["sha1","sha224","sha256","sha384","sha512","md5","rmd160"].concat(i);t.getHashes=function(){return o};var s=r(3166);t.pbkdf2=s.pbkdf2,t.pbkdf2Sync=s.pbkdf2Sync;var a=r(8350);t.Cipher=a.Cipher,t.createCipher=a.createCipher,t.Cipheriv=a.Cipheriv,t.createCipheriv=a.createCipheriv,t.Decipher=a.Decipher,t.createDecipher=a.createDecipher,t.Decipheriv=a.Decipheriv,t.createDecipheriv=a.createDecipheriv,t.getCiphers=a.getCiphers,t.listCiphers=a.listCiphers;var c=r(8216);t.DiffieHellmanGroup=c.DiffieHellmanGroup,t.createDiffieHellmanGroup=c.createDiffieHellmanGroup,t.getDiffieHellman=c.getDiffieHellman,t.createDiffieHellman=c.createDiffieHellman,t.DiffieHellman=c.DiffieHellman;var u=r(6105);t.createSign=u.createSign,t.Sign=u.Sign,t.createVerify=u.createVerify,t.Verify=u.Verify,t.createECDH=r(9520);var d=r(2211);t.publicEncrypt=d.publicEncrypt,t.privateEncrypt=d.privateEncrypt,t.publicDecrypt=d.publicDecrypt,t.privateDecrypt=d.privateDecrypt;var f=r(4925);t.randomFill=f.randomFill,t.randomFillSync=f.randomFillSync,t.createCredentials=function(){throw new Error(["sorry, createCredentials is not implemented yet","we accept pull requests","https://github.com/crypto-browserify/crypto-browserify"].join("\n"))},t.constants={DH_CHECK_P_NOT_SAFE_PRIME:2,DH_CHECK_P_NOT_PRIME:1,DH_UNABLE_TO_CHECK_GENERATOR:4,DH_NOT_SUITABLE_GENERATOR:8,NPN_ENABLED:1,ALPN_ENABLED:1,RSA_PKCS1_PADDING:1,RSA_SSLV23_PADDING:2,RSA_NO_PADDING:3,RSA_PKCS1_OAEP_PADDING:4,RSA_X931_PADDING:5,RSA_PKCS1_PSS_PADDING:6,POINT_CONVERSION_COMPRESSED:2,POINT_CONVERSION_UNCOMPRESSED:4,POINT_CONVERSION_HYBRID:6}},2398:(e,t,r)=>{"use strict";t.utils=r(1496),t.Cipher=r(5958),t.DES=r(9409),t.CBC=r(6779),t.EDE=r(6625)},6779:(e,t,r)=>{"use strict";var n=r(5578),i=r(1193),o={};function s(e){n.equal(e.length,8,"Invalid IV length"),this.iv=new Array(8);for(var t=0;t<this.iv.length;t++)this.iv[t]=e[t]}t.instantiate=function(e){function t(t){e.call(this,t),this._cbcInit()}i(t,e);for(var r=Object.keys(o),n=0;n<r.length;n++){var s=r[n];t.prototype[s]=o[s]}return t.create=function(e){return new t(e)},t},o._cbcInit=function(){var e=new s(this.options.iv);this._cbcState=e},o._update=function(e,t,r,n){var i=this._cbcState,o=this.constructor.super_.prototype,s=i.iv;if("encrypt"===this.type){for(var a=0;a<this.blockSize;a++)s[a]^=e[t+a];for(o._update.call(this,s,0,r,n),a=0;a<this.blockSize;a++)s[a]=r[n+a]}else{for(o._update.call(this,e,t,r,n),a=0;a<this.blockSize;a++)r[n+a]^=s[a];for(a=0;a<this.blockSize;a++)s[a]=e[t+a]}}},5958:(e,t,r)=>{"use strict";var n=r(5578);function i(e){this.options=e,this.type=this.options.type,this.blockSize=8,this._init(),this.buffer=new Array(this.blockSize),this.bufferOff=0}e.exports=i,i.prototype._init=function(){},i.prototype.update=function(e){return 0===e.length?[]:"decrypt"===this.type?this._updateDecrypt(e):this._updateEncrypt(e)},i.prototype._buffer=function(e,t){for(var r=Math.min(this.buffer.length-this.bufferOff,e.length-t),n=0;n<r;n++)this.buffer[this.bufferOff+n]=e[t+n];return this.bufferOff+=r,r},i.prototype._flushBuffer=function(e,t){return this._update(this.buffer,0,e,t),this.bufferOff=0,this.blockSize},i.prototype._updateEncrypt=function(e){var t=0,r=0,n=(this.bufferOff+e.length)/this.blockSize|0,i=new Array(n*this.blockSize);0!==this.bufferOff&&(t+=this._buffer(e,t),this.bufferOff===this.buffer.length&&(r+=this._flushBuffer(i,r)));for(var o=e.length-(e.length-t)%this.blockSize;t<o;t+=this.blockSize)this._update(e,t,i,r),r+=this.blockSize;for(;t<e.length;t++,this.bufferOff++)this.buffer[this.bufferOff]=e[t];return i},i.prototype._updateDecrypt=function(e){for(var t=0,r=0,n=Math.ceil((this.bufferOff+e.length)/this.blockSize)-1,i=new Array(n*this.blockSize);n>0;n--)t+=this._buffer(e,t),r+=this._flushBuffer(i,r);return t+=this._buffer(e,t),i},i.prototype.final=function(e){var t,r;return e&&(t=this.update(e)),r="encrypt"===this.type?this._finalEncrypt():this._finalDecrypt(),t?t.concat(r):r},i.prototype._pad=function(e,t){if(0===t)return!1;for(;t<e.length;)e[t++]=0;return!0},i.prototype._finalEncrypt=function(){if(!this._pad(this.buffer,this.bufferOff))return[];var e=new Array(this.blockSize);return this._update(this.buffer,0,e,0),e},i.prototype._unpad=function(e){return e},i.prototype._finalDecrypt=function(){n.equal(this.bufferOff,this.blockSize,"Not enough data to decrypt");var e=new Array(this.blockSize);return this._flushBuffer(e,0),this._unpad(e)}},9409:(e,t,r)=>{"use strict";var n=r(5578),i=r(1193),o=r(1496),s=r(5958);function a(){this.tmp=new Array(2),this.keys=null}function c(e){s.call(this,e);var t=new a;this._desState=t,this.deriveKeys(t,e.key)}i(c,s),e.exports=c,c.create=function(e){return new c(e)};var u=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1];c.prototype.deriveKeys=function(e,t){e.keys=new Array(32),n.equal(t.length,this.blockSize,"Invalid key length");var r=o.readUInt32BE(t,0),i=o.readUInt32BE(t,4);o.pc1(r,i,e.tmp,0),r=e.tmp[0],i=e.tmp[1];for(var s=0;s<e.keys.length;s+=2){var a=u[s>>>1];r=o.r28shl(r,a),i=o.r28shl(i,a),o.pc2(r,i,e.keys,s)}},c.prototype._update=function(e,t,r,n){var i=this._desState,s=o.readUInt32BE(e,t),a=o.readUInt32BE(e,t+4);o.ip(s,a,i.tmp,0),s=i.tmp[0],a=i.tmp[1],"encrypt"===this.type?this._encrypt(i,s,a,i.tmp,0):this._decrypt(i,s,a,i.tmp,0),s=i.tmp[0],a=i.tmp[1],o.writeUInt32BE(r,s,n),o.writeUInt32BE(r,a,n+4)},c.prototype._pad=function(e,t){for(var r=e.length-t,n=t;n<e.length;n++)e[n]=r;return!0},c.prototype._unpad=function(e){for(var t=e[e.length-1],r=e.length-t;r<e.length;r++)n.equal(e[r],t);return e.slice(0,e.length-t)},c.prototype._encrypt=function(e,t,r,n,i){for(var s=t,a=r,c=0;c<e.keys.length;c+=2){var u=e.keys[c],d=e.keys[c+1];o.expand(a,e.tmp,0),u^=e.tmp[0],d^=e.tmp[1];var f=o.substitute(u,d),h=a;a=(s^o.permute(f))>>>0,s=h}o.rip(a,s,n,i)},c.prototype._decrypt=function(e,t,r,n,i){for(var s=r,a=t,c=e.keys.length-2;c>=0;c-=2){var u=e.keys[c],d=e.keys[c+1];o.expand(s,e.tmp,0),u^=e.tmp[0],d^=e.tmp[1];var f=o.substitute(u,d),h=s;s=(a^o.permute(f))>>>0,a=h}o.rip(s,a,n,i)}},6625:(e,t,r)=>{"use strict";var n=r(5578),i=r(1193),o=r(5958),s=r(9409);function a(e,t){n.equal(t.length,24,"Invalid key length");var r=t.slice(0,8),i=t.slice(8,16),o=t.slice(16,24);this.ciphers="encrypt"===e?[s.create({type:"encrypt",key:r}),s.create({type:"decrypt",key:i}),s.create({type:"encrypt",key:o})]:[s.create({type:"decrypt",key:o}),s.create({type:"encrypt",key:i}),s.create({type:"decrypt",key:r})]}function c(e){o.call(this,e);var t=new a(this.type,this.options.key);this._edeState=t}i(c,o),e.exports=c,c.create=function(e){return new c(e)},c.prototype._update=function(e,t,r,n){var i=this._edeState;i.ciphers[0]._update(e,t,r,n),i.ciphers[1]._update(r,n,r,n),i.ciphers[2]._update(r,n,r,n)},c.prototype._pad=s.prototype._pad,c.prototype._unpad=s.prototype._unpad},1496:(e,t)=>{"use strict";t.readUInt32BE=function(e,t){return(e[0+t]<<24|e[1+t]<<16|e[2+t]<<8|e[3+t])>>>0},t.writeUInt32BE=function(e,t,r){e[0+r]=t>>>24,e[1+r]=t>>>16&255,e[2+r]=t>>>8&255,e[3+r]=255&t},t.ip=function(e,t,r,n){for(var i=0,o=0,s=6;s>=0;s-=2){for(var a=0;a<=24;a+=8)i<<=1,i|=t>>>a+s&1;for(a=0;a<=24;a+=8)i<<=1,i|=e>>>a+s&1}for(s=6;s>=0;s-=2){for(a=1;a<=25;a+=8)o<<=1,o|=t>>>a+s&1;for(a=1;a<=25;a+=8)o<<=1,o|=e>>>a+s&1}r[n+0]=i>>>0,r[n+1]=o>>>0},t.rip=function(e,t,r,n){for(var i=0,o=0,s=0;s<4;s++)for(var a=24;a>=0;a-=8)i<<=1,i|=t>>>a+s&1,i<<=1,i|=e>>>a+s&1;for(s=4;s<8;s++)for(a=24;a>=0;a-=8)o<<=1,o|=t>>>a+s&1,o<<=1,o|=e>>>a+s&1;r[n+0]=i>>>0,r[n+1]=o>>>0},t.pc1=function(e,t,r,n){for(var i=0,o=0,s=7;s>=5;s--){for(var a=0;a<=24;a+=8)i<<=1,i|=t>>a+s&1;for(a=0;a<=24;a+=8)i<<=1,i|=e>>a+s&1}for(a=0;a<=24;a+=8)i<<=1,i|=t>>a+s&1;for(s=1;s<=3;s++){for(a=0;a<=24;a+=8)o<<=1,o|=t>>a+s&1;for(a=0;a<=24;a+=8)o<<=1,o|=e>>a+s&1}for(a=0;a<=24;a+=8)o<<=1,o|=e>>a+s&1;r[n+0]=i>>>0,r[n+1]=o>>>0},t.r28shl=function(e,t){return e<<t&268435455|e>>>28-t};var r=[14,11,17,4,27,23,25,0,13,22,7,18,5,9,16,24,2,20,12,21,1,8,15,26,15,4,25,19,9,1,26,16,5,11,23,8,12,7,17,0,22,3,10,14,6,20,27,24];t.pc2=function(e,t,n,i){for(var o=0,s=0,a=r.length>>>1,c=0;c<a;c++)o<<=1,o|=e>>>r[c]&1;for(c=a;c<r.length;c++)s<<=1,s|=t>>>r[c]&1;n[i+0]=o>>>0,n[i+1]=s>>>0},t.expand=function(e,t,r){var n=0,i=0;n=(1&e)<<5|e>>>27;for(var o=23;o>=15;o-=4)n<<=6,n|=e>>>o&63;for(o=11;o>=3;o-=4)i|=e>>>o&63,i<<=6;i|=(31&e)<<1|e>>>31,t[r+0]=n>>>0,t[r+1]=i>>>0};var n=[14,0,4,15,13,7,1,4,2,14,15,2,11,13,8,1,3,10,10,6,6,12,12,11,5,9,9,5,0,3,7,8,4,15,1,12,14,8,8,2,13,4,6,9,2,1,11,7,15,5,12,11,9,3,7,14,3,10,10,0,5,6,0,13,15,3,1,13,8,4,14,7,6,15,11,2,3,8,4,14,9,12,7,0,2,1,13,10,12,6,0,9,5,11,10,5,0,13,14,8,7,10,11,1,10,3,4,15,13,4,1,2,5,11,8,6,12,7,6,12,9,0,3,5,2,14,15,9,10,13,0,7,9,0,14,9,6,3,3,4,15,6,5,10,1,2,13,8,12,5,7,14,11,12,4,11,2,15,8,1,13,1,6,10,4,13,9,0,8,6,15,9,3,8,0,7,11,4,1,15,2,14,12,3,5,11,10,5,14,2,7,12,7,13,13,8,14,11,3,5,0,6,6,15,9,0,10,3,1,4,2,7,8,2,5,12,11,1,12,10,4,14,15,9,10,3,6,15,9,0,0,6,12,10,11,1,7,13,13,8,15,9,1,4,3,5,14,11,5,12,2,7,8,2,4,14,2,14,12,11,4,2,1,12,7,4,10,7,11,13,6,1,8,5,5,0,3,15,15,10,13,3,0,9,14,8,9,6,4,11,2,8,1,12,11,7,10,1,13,14,7,2,8,13,15,6,9,15,12,0,5,9,6,10,3,4,0,5,14,3,12,10,1,15,10,4,15,2,9,7,2,12,6,9,8,5,0,6,13,1,3,13,4,14,14,0,7,11,5,3,11,8,9,4,14,3,15,2,5,12,2,9,8,5,12,15,3,10,7,11,0,14,4,1,10,7,1,6,13,0,11,8,6,13,4,13,11,0,2,11,14,7,15,4,0,9,8,1,13,10,3,14,12,3,9,5,7,12,5,2,10,15,6,8,1,6,1,6,4,11,11,13,13,8,12,1,3,4,7,10,14,7,10,9,15,5,6,0,8,15,0,14,5,2,9,3,2,12,13,1,2,15,8,13,4,8,6,10,15,3,11,7,1,4,10,12,9,5,3,6,14,11,5,0,0,14,12,9,7,2,7,2,11,1,4,14,1,7,9,4,12,10,14,8,2,13,0,15,6,12,10,9,13,0,15,3,3,5,5,6,8,11];t.substitute=function(e,t){for(var r=0,i=0;i<4;i++)r<<=4,r|=n[64*i+(e>>>18-6*i&63)];for(i=0;i<4;i++)r<<=4,r|=n[256+64*i+(t>>>18-6*i&63)];return r>>>0};var i=[16,25,12,11,3,20,4,15,31,17,9,6,27,14,1,22,30,24,8,18,0,5,29,23,13,19,2,26,10,21,28,7];t.permute=function(e){for(var t=0,r=0;r<i.length;r++)t<<=1,t|=e>>>i[r]&1;return t>>>0},t.padSplit=function(e,t,r){for(var n=e.toString(2);n.length<t;)n="0"+n;for(var i=[],o=0;o<t;o+=r)i.push(n.slice(o,o+r));return i.join(" ")}},8216:(e,t,r)=>{var n=r(5122),i=r(7821),o=r(9242),s={binary:!0,hex:!0,base64:!0};t.DiffieHellmanGroup=t.createDiffieHellmanGroup=t.getDiffieHellman=function(e){var t=new Buffer(i[e].prime,"hex"),r=new Buffer(i[e].gen,"hex");return new o(t,r)},t.createDiffieHellman=t.DiffieHellman=function e(t,r,i,a){return Buffer.isBuffer(r)||void 0===s[r]?e(t,"binary",r,i):(r=r||"binary",a=a||"binary",i=i||new Buffer([2]),Buffer.isBuffer(i)||(i=new Buffer(i,a)),"number"==typeof t?new o(n(t,i),i,!0):(Buffer.isBuffer(t)||(t=new Buffer(t,r)),new o(t,i,!0)))}},9242:(e,t,r)=>{var n=r(4619),i=new(r(4442)),o=new n(24),s=new n(11),a=new n(10),c=new n(3),u=new n(7),d=r(5122),f=r(2869);function h(e,t){return t=t||"utf8",Buffer.isBuffer(e)||(e=new Buffer(e,t)),this._pub=new n(e),this}function l(e,t){return t=t||"utf8",Buffer.isBuffer(e)||(e=new Buffer(e,t)),this._priv=new n(e),this}e.exports=b;var p={};function b(e,t,r){this.setGenerator(t),this.__prime=new n(e),this._prime=n.mont(this.__prime),this._primeLen=e.length,this._pub=void 0,this._priv=void 0,this._primeCode=void 0,r?(this.setPublicKey=h,this.setPrivateKey=l):this._primeCode=8}function y(e,t){var r=new Buffer(e.toArray());return t?r.toString(t):r}Object.defineProperty(b.prototype,"verifyError",{enumerable:!0,get:function(){return"number"!=typeof this._primeCode&&(this._primeCode=function(e,t){var r=t.toString("hex"),n=[r,e.toString(16)].join("_");if(n in p)return p[n];var f,h=0;if(e.isEven()||!d.simpleSieve||!d.fermatTest(e)||!i.test(e))return h+=1,h+="02"===r||"05"===r?8:4,p[n]=h,h;switch(i.test(e.shrn(1))||(h+=2),r){case"02":e.mod(o).cmp(s)&&(h+=8);break;case"05":(f=e.mod(a)).cmp(c)&&f.cmp(u)&&(h+=8);break;default:h+=4}return p[n]=h,h}(this.__prime,this.__gen)),this._primeCode}}),b.prototype.generateKeys=function(){return this._priv||(this._priv=new n(f(this._primeLen))),this._pub=this._gen.toRed(this._prime).redPow(this._priv).fromRed(),this.getPublicKey()},b.prototype.computeSecret=function(e){var t=(e=(e=new n(e)).toRed(this._prime)).redPow(this._priv).fromRed(),r=new Buffer(t.toArray()),i=this.getPrime();if(r.length<i.length){var o=new Buffer(i.length-r.length);o.fill(0),r=Buffer.concat([o,r])}return r},b.prototype.getPublicKey=function(e){return y(this._pub,e)},b.prototype.getPrivateKey=function(e){return y(this._priv,e)},b.prototype.getPrime=function(e){return y(this.__prime,e)},b.prototype.getGenerator=function(e){return y(this._gen,e)},b.prototype.setGenerator=function(e,t){return t=t||"utf8",Buffer.isBuffer(e)||(e=new Buffer(e,t)),this.__gen=e,this._gen=new n(e),this}},5122:(e,t,r)=>{var n=r(2869);e.exports=g,g.simpleSieve=y,g.fermatTest=m;var i=r(4619),o=new i(24),s=new(r(4442)),a=new i(1),c=new i(2),u=new i(5),d=(new i(16),new i(8),new i(10)),f=new i(3),h=(new i(7),new i(11)),l=new i(4),p=(new i(12),null);function b(){if(null!==p)return p;var e=[];e[0]=2;for(var t=1,r=3;r<1048576;r+=2){for(var n=Math.ceil(Math.sqrt(r)),i=0;i<t&&e[i]<=n&&r%e[i]!=0;i++);t!==i&&e[i]<=n||(e[t++]=r)}return p=e,e}function y(e){for(var t=b(),r=0;r<t.length;r++)if(0===e.modn(t[r]))return 0===e.cmpn(t[r]);return!0}function m(e){var t=i.mont(e);return 0===c.toRed(t).redPow(e.subn(1)).fromRed().cmpn(1)}function g(e,t){if(e<16)return new i(2===t||5===t?[140,123]:[140,39]);var r,p;for(t=new i(t);;){for(r=new i(n(Math.ceil(e/8)));r.bitLength()>e;)r.ishrn(1);if(r.isEven()&&r.iadd(a),r.testn(1)||r.iadd(c),t.cmp(c)){if(!t.cmp(u))for(;r.mod(d).cmp(f);)r.iadd(l)}else for(;r.mod(o).cmp(h);)r.iadd(l);if(y(p=r.shrn(1))&&y(r)&&m(p)&&m(r)&&s.test(p)&&s.test(r))return r}}},9386:(e,t,r)=>{"use strict";var n=t;n.version=r(4789).rE,n.utils=r(7316),n.rand=r(5442),n.curve=r(1869),n.curves=r(3189),n.ec=r(7566),n.eddsa=r(3609)},3819:(e,t,r)=>{"use strict";var n=r(4619),i=r(7316),o=i.getNAF,s=i.getJSF,a=i.assert;function c(e,t){this.type=e,this.p=new n(t.p,16),this.red=t.prime?n.red(t.prime):n.mont(this.p),this.zero=new n(0).toRed(this.red),this.one=new n(1).toRed(this.red),this.two=new n(2).toRed(this.red),this.n=t.n&&new n(t.n,16),this.g=t.g&&this.pointFromJSON(t.g,t.gRed),this._wnafT1=new Array(4),this._wnafT2=new Array(4),this._wnafT3=new Array(4),this._wnafT4=new Array(4),this._bitLength=this.n?this.n.bitLength():0;var r=this.n&&this.p.div(this.n);!r||r.cmpn(100)>0?this.redN=null:(this._maxwellTrick=!0,this.redN=this.n.toRed(this.red))}function u(e,t){this.curve=e,this.type=t,this.precomputed=null}e.exports=c,c.prototype.point=function(){throw new Error("Not implemented")},c.prototype.validate=function(){throw new Error("Not implemented")},c.prototype._fixedNafMul=function(e,t){a(e.precomputed);var r=e._getDoubles(),n=o(t,1,this._bitLength),i=(1<<r.step+1)-(r.step%2==0?2:1);i/=3;var s,c,u=[];for(s=0;s<n.length;s+=r.step){c=0;for(var d=s+r.step-1;d>=s;d--)c=(c<<1)+n[d];u.push(c)}for(var f=this.jpoint(null,null,null),h=this.jpoint(null,null,null),l=i;l>0;l--){for(s=0;s<u.length;s++)(c=u[s])===l?h=h.mixedAdd(r.points[s]):c===-l&&(h=h.mixedAdd(r.points[s].neg()));f=f.add(h)}return f.toP()},c.prototype._wnafMul=function(e,t){var r=4,n=e._getNAFPoints(r);r=n.wnd;for(var i=n.points,s=o(t,r,this._bitLength),c=this.jpoint(null,null,null),u=s.length-1;u>=0;u--){for(var d=0;u>=0&&0===s[u];u--)d++;if(u>=0&&d++,c=c.dblp(d),u<0)break;var f=s[u];a(0!==f),c="affine"===e.type?f>0?c.mixedAdd(i[f-1>>1]):c.mixedAdd(i[-f-1>>1].neg()):f>0?c.add(i[f-1>>1]):c.add(i[-f-1>>1].neg())}return"affine"===e.type?c.toP():c},c.prototype._wnafMulAdd=function(e,t,r,n,i){var a,c,u,d=this._wnafT1,f=this._wnafT2,h=this._wnafT3,l=0;for(a=0;a<n;a++){var p=(u=t[a])._getNAFPoints(e);d[a]=p.wnd,f[a]=p.points}for(a=n-1;a>=1;a-=2){var b=a-1,y=a;if(1===d[b]&&1===d[y]){var m=[t[b],null,null,t[y]];0===t[b].y.cmp(t[y].y)?(m[1]=t[b].add(t[y]),m[2]=t[b].toJ().mixedAdd(t[y].neg())):0===t[b].y.cmp(t[y].y.redNeg())?(m[1]=t[b].toJ().mixedAdd(t[y]),m[2]=t[b].add(t[y].neg())):(m[1]=t[b].toJ().mixedAdd(t[y]),m[2]=t[b].toJ().mixedAdd(t[y].neg()));var g=[-3,-1,-5,-7,0,7,5,1,3],v=s(r[b],r[y]);for(l=Math.max(v[0].length,l),h[b]=new Array(l),h[y]=new Array(l),c=0;c<l;c++){var w=0|v[0][c],_=0|v[1][c];h[b][c]=g[3*(w+1)+(_+1)],h[y][c]=0,f[b]=m}}else h[b]=o(r[b],d[b],this._bitLength),h[y]=o(r[y],d[y],this._bitLength),l=Math.max(h[b].length,l),l=Math.max(h[y].length,l)}var A=this.jpoint(null,null,null),S=this._wnafT4;for(a=l;a>=0;a--){for(var M=0;a>=0;){var C=!0;for(c=0;c<n;c++)S[c]=0|h[c][a],0!==S[c]&&(C=!1);if(!C)break;M++,a--}if(a>=0&&M++,A=A.dblp(M),a<0)break;for(c=0;c<n;c++){var T=S[c];0!==T&&(T>0?u=f[c][T-1>>1]:T<0&&(u=f[c][-T-1>>1].neg()),A="affine"===u.type?A.mixedAdd(u):A.add(u))}}for(a=0;a<n;a++)f[a]=null;return i?A:A.toP()},c.BasePoint=u,u.prototype.eq=function(){throw new Error("Not implemented")},u.prototype.validate=function(){return this.curve.validate(this)},c.prototype.decodePoint=function(e,t){e=i.toArray(e,t);var r=this.p.byteLength();if((4===e[0]||6===e[0]||7===e[0])&&e.length-1==2*r)return 6===e[0]?a(e[e.length-1]%2==0):7===e[0]&&a(e[e.length-1]%2==1),this.point(e.slice(1,1+r),e.slice(1+r,1+2*r));if((2===e[0]||3===e[0])&&e.length-1===r)return this.pointFromX(e.slice(1,1+r),3===e[0]);throw new Error("Unknown point format")},u.prototype.encodeCompressed=function(e){return this.encode(e,!0)},u.prototype._encode=function(e){var t=this.curve.p.byteLength(),r=this.getX().toArray("be",t);return e?[this.getY().isEven()?2:3].concat(r):[4].concat(r,this.getY().toArray("be",t))},u.prototype.encode=function(e,t){return i.encode(this._encode(t),e)},u.prototype.precompute=function(e){if(this.precomputed)return this;var t={doubles:null,naf:null,beta:null};return t.naf=this._getNAFPoints(8),t.doubles=this._getDoubles(4,e),t.beta=this._getBeta(),this.precomputed=t,this},u.prototype._hasDoubles=function(e){if(!this.precomputed)return!1;var t=this.precomputed.doubles;return!!t&&t.points.length>=Math.ceil((e.bitLength()+1)/t.step)},u.prototype._getDoubles=function(e,t){if(this.precomputed&&this.precomputed.doubles)return this.precomputed.doubles;for(var r=[this],n=this,i=0;i<t;i+=e){for(var o=0;o<e;o++)n=n.dbl();r.push(n)}return{step:e,points:r}},u.prototype._getNAFPoints=function(e){if(this.precomputed&&this.precomputed.naf)return this.precomputed.naf;for(var t=[this],r=(1<<e)-1,n=1===r?null:this.dbl(),i=1;i<r;i++)t[i]=t[i-1].add(n);return{wnd:e,points:t}},u.prototype._getBeta=function(){return null},u.prototype.dblp=function(e){for(var t=this,r=0;r<e;r++)t=t.dbl();return t}},5437:(e,t,r)=>{"use strict";var n=r(7316),i=r(4619),o=r(1193),s=r(3819),a=n.assert;function c(e){this.twisted=1!=(0|e.a),this.mOneA=this.twisted&&-1==(0|e.a),this.extended=this.mOneA,s.call(this,"edwards",e),this.a=new i(e.a,16).umod(this.red.m),this.a=this.a.toRed(this.red),this.c=new i(e.c,16).toRed(this.red),this.c2=this.c.redSqr(),this.d=new i(e.d,16).toRed(this.red),this.dd=this.d.redAdd(this.d),a(!this.twisted||0===this.c.fromRed().cmpn(1)),this.oneC=1==(0|e.c)}function u(e,t,r,n,o){s.BasePoint.call(this,e,"projective"),null===t&&null===r&&null===n?(this.x=this.curve.zero,this.y=this.curve.one,this.z=this.curve.one,this.t=this.curve.zero,this.zOne=!0):(this.x=new i(t,16),this.y=new i(r,16),this.z=n?new i(n,16):this.curve.one,this.t=o&&new i(o,16),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)),this.t&&!this.t.red&&(this.t=this.t.toRed(this.curve.red)),this.zOne=this.z===this.curve.one,this.curve.extended&&!this.t&&(this.t=this.x.redMul(this.y),this.zOne||(this.t=this.t.redMul(this.z.redInvm()))))}o(c,s),e.exports=c,c.prototype._mulA=function(e){return this.mOneA?e.redNeg():this.a.redMul(e)},c.prototype._mulC=function(e){return this.oneC?e:this.c.redMul(e)},c.prototype.jpoint=function(e,t,r,n){return this.point(e,t,r,n)},c.prototype.pointFromX=function(e,t){(e=new i(e,16)).red||(e=e.toRed(this.red));var r=e.redSqr(),n=this.c2.redSub(this.a.redMul(r)),o=this.one.redSub(this.c2.redMul(this.d).redMul(r)),s=n.redMul(o.redInvm()),a=s.redSqrt();if(0!==a.redSqr().redSub(s).cmp(this.zero))throw new Error("invalid point");var c=a.fromRed().isOdd();return(t&&!c||!t&&c)&&(a=a.redNeg()),this.point(e,a)},c.prototype.pointFromY=function(e,t){(e=new i(e,16)).red||(e=e.toRed(this.red));var r=e.redSqr(),n=r.redSub(this.c2),o=r.redMul(this.d).redMul(this.c2).redSub(this.a),s=n.redMul(o.redInvm());if(0===s.cmp(this.zero)){if(t)throw new Error("invalid point");return this.point(this.zero,e)}var a=s.redSqrt();if(0!==a.redSqr().redSub(s).cmp(this.zero))throw new Error("invalid point");return a.fromRed().isOdd()!==t&&(a=a.redNeg()),this.point(a,e)},c.prototype.validate=function(e){if(e.isInfinity())return!0;e.normalize();var t=e.x.redSqr(),r=e.y.redSqr(),n=t.redMul(this.a).redAdd(r),i=this.c2.redMul(this.one.redAdd(this.d.redMul(t).redMul(r)));return 0===n.cmp(i)},o(u,s.BasePoint),c.prototype.pointFromJSON=function(e){return u.fromJSON(this,e)},c.prototype.point=function(e,t,r,n){return new u(this,e,t,r,n)},u.fromJSON=function(e,t){return new u(e,t[0],t[1],t[2])},u.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" y: "+this.y.fromRed().toString(16,2)+" z: "+this.z.fromRed().toString(16,2)+">"},u.prototype.isInfinity=function(){return 0===this.x.cmpn(0)&&(0===this.y.cmp(this.z)||this.zOne&&0===this.y.cmp(this.curve.c))},u.prototype._extDbl=function(){var e=this.x.redSqr(),t=this.y.redSqr(),r=this.z.redSqr();r=r.redIAdd(r);var n=this.curve._mulA(e),i=this.x.redAdd(this.y).redSqr().redISub(e).redISub(t),o=n.redAdd(t),s=o.redSub(r),a=n.redSub(t),c=i.redMul(s),u=o.redMul(a),d=i.redMul(a),f=s.redMul(o);return this.curve.point(c,u,f,d)},u.prototype._projDbl=function(){var e,t,r,n,i,o,s=this.x.redAdd(this.y).redSqr(),a=this.x.redSqr(),c=this.y.redSqr();if(this.curve.twisted){var u=(n=this.curve._mulA(a)).redAdd(c);this.zOne?(e=s.redSub(a).redSub(c).redMul(u.redSub(this.curve.two)),t=u.redMul(n.redSub(c)),r=u.redSqr().redSub(u).redSub(u)):(i=this.z.redSqr(),o=u.redSub(i).redISub(i),e=s.redSub(a).redISub(c).redMul(o),t=u.redMul(n.redSub(c)),r=u.redMul(o))}else n=a.redAdd(c),i=this.curve._mulC(this.z).redSqr(),o=n.redSub(i).redSub(i),e=this.curve._mulC(s.redISub(n)).redMul(o),t=this.curve._mulC(n).redMul(a.redISub(c)),r=n.redMul(o);return this.curve.point(e,t,r)},u.prototype.dbl=function(){return this.isInfinity()?this:this.curve.extended?this._extDbl():this._projDbl()},u.prototype._extAdd=function(e){var t=this.y.redSub(this.x).redMul(e.y.redSub(e.x)),r=this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)),n=this.t.redMul(this.curve.dd).redMul(e.t),i=this.z.redMul(e.z.redAdd(e.z)),o=r.redSub(t),s=i.redSub(n),a=i.redAdd(n),c=r.redAdd(t),u=o.redMul(s),d=a.redMul(c),f=o.redMul(c),h=s.redMul(a);return this.curve.point(u,d,h,f)},u.prototype._projAdd=function(e){var t,r,n=this.z.redMul(e.z),i=n.redSqr(),o=this.x.redMul(e.x),s=this.y.redMul(e.y),a=this.curve.d.redMul(o).redMul(s),c=i.redSub(a),u=i.redAdd(a),d=this.x.redAdd(this.y).redMul(e.x.redAdd(e.y)).redISub(o).redISub(s),f=n.redMul(c).redMul(d);return this.curve.twisted?(t=n.redMul(u).redMul(s.redSub(this.curve._mulA(o))),r=c.redMul(u)):(t=n.redMul(u).redMul(s.redSub(o)),r=this.curve._mulC(c).redMul(u)),this.curve.point(f,t,r)},u.prototype.add=function(e){return this.isInfinity()?e:e.isInfinity()?this:this.curve.extended?this._extAdd(e):this._projAdd(e)},u.prototype.mul=function(e){return this._hasDoubles(e)?this.curve._fixedNafMul(this,e):this.curve._wnafMul(this,e)},u.prototype.mulAdd=function(e,t,r){return this.curve._wnafMulAdd(1,[this,t],[e,r],2,!1)},u.prototype.jmulAdd=function(e,t,r){return this.curve._wnafMulAdd(1,[this,t],[e,r],2,!0)},u.prototype.normalize=function(){if(this.zOne)return this;var e=this.z.redInvm();return this.x=this.x.redMul(e),this.y=this.y.redMul(e),this.t&&(this.t=this.t.redMul(e)),this.z=this.curve.one,this.zOne=!0,this},u.prototype.neg=function(){return this.curve.point(this.x.redNeg(),this.y,this.z,this.t&&this.t.redNeg())},u.prototype.getX=function(){return this.normalize(),this.x.fromRed()},u.prototype.getY=function(){return this.normalize(),this.y.fromRed()},u.prototype.eq=function(e){return this===e||0===this.getX().cmp(e.getX())&&0===this.getY().cmp(e.getY())},u.prototype.eqXToP=function(e){var t=e.toRed(this.curve.red).redMul(this.z);if(0===this.x.cmp(t))return!0;for(var r=e.clone(),n=this.curve.redN.redMul(this.z);;){if(r.iadd(this.curve.n),r.cmp(this.curve.p)>=0)return!1;if(t.redIAdd(n),0===this.x.cmp(t))return!0}},u.prototype.toP=u.prototype.normalize,u.prototype.mixedAdd=u.prototype.add},1869:(e,t,r)=>{"use strict";var n=t;n.base=r(3819),n.short=r(6343),n.mont=r(6631),n.edwards=r(5437)},6631:(e,t,r)=>{"use strict";var n=r(4619),i=r(1193),o=r(3819),s=r(7316);function a(e){o.call(this,"mont",e),this.a=new n(e.a,16).toRed(this.red),this.b=new n(e.b,16).toRed(this.red),this.i4=new n(4).toRed(this.red).redInvm(),this.two=new n(2).toRed(this.red),this.a24=this.i4.redMul(this.a.redAdd(this.two))}function c(e,t,r){o.BasePoint.call(this,e,"projective"),null===t&&null===r?(this.x=this.curve.one,this.z=this.curve.zero):(this.x=new n(t,16),this.z=new n(r,16),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)))}i(a,o),e.exports=a,a.prototype.validate=function(e){var t=e.normalize().x,r=t.redSqr(),n=r.redMul(t).redAdd(r.redMul(this.a)).redAdd(t);return 0===n.redSqrt().redSqr().cmp(n)},i(c,o.BasePoint),a.prototype.decodePoint=function(e,t){return this.point(s.toArray(e,t),1)},a.prototype.point=function(e,t){return new c(this,e,t)},a.prototype.pointFromJSON=function(e){return c.fromJSON(this,e)},c.prototype.precompute=function(){},c.prototype._encode=function(){return this.getX().toArray("be",this.curve.p.byteLength())},c.fromJSON=function(e,t){return new c(e,t[0],t[1]||e.one)},c.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" z: "+this.z.fromRed().toString(16,2)+">"},c.prototype.isInfinity=function(){return 0===this.z.cmpn(0)},c.prototype.dbl=function(){var e=this.x.redAdd(this.z).redSqr(),t=this.x.redSub(this.z).redSqr(),r=e.redSub(t),n=e.redMul(t),i=r.redMul(t.redAdd(this.curve.a24.redMul(r)));return this.curve.point(n,i)},c.prototype.add=function(){throw new Error("Not supported on Montgomery curve")},c.prototype.diffAdd=function(e,t){var r=this.x.redAdd(this.z),n=this.x.redSub(this.z),i=e.x.redAdd(e.z),o=e.x.redSub(e.z).redMul(r),s=i.redMul(n),a=t.z.redMul(o.redAdd(s).redSqr()),c=t.x.redMul(o.redISub(s).redSqr());return this.curve.point(a,c)},c.prototype.mul=function(e){for(var t=e.clone(),r=this,n=this.curve.point(null,null),i=[];0!==t.cmpn(0);t.iushrn(1))i.push(t.andln(1));for(var o=i.length-1;o>=0;o--)0===i[o]?(r=r.diffAdd(n,this),n=n.dbl()):(n=r.diffAdd(n,this),r=r.dbl());return n},c.prototype.mulAdd=function(){throw new Error("Not supported on Montgomery curve")},c.prototype.jumlAdd=function(){throw new Error("Not supported on Montgomery curve")},c.prototype.eq=function(e){return 0===this.getX().cmp(e.getX())},c.prototype.normalize=function(){return this.x=this.x.redMul(this.z.redInvm()),this.z=this.curve.one,this},c.prototype.getX=function(){return this.normalize(),this.x.fromRed()}},6343:(e,t,r)=>{"use strict";var n=r(7316),i=r(4619),o=r(1193),s=r(3819),a=n.assert;function c(e){s.call(this,"short",e),this.a=new i(e.a,16).toRed(this.red),this.b=new i(e.b,16).toRed(this.red),this.tinv=this.two.redInvm(),this.zeroA=0===this.a.fromRed().cmpn(0),this.threeA=0===this.a.fromRed().sub(this.p).cmpn(-3),this.endo=this._getEndomorphism(e),this._endoWnafT1=new Array(4),this._endoWnafT2=new Array(4)}function u(e,t,r,n){s.BasePoint.call(this,e,"affine"),null===t&&null===r?(this.x=null,this.y=null,this.inf=!0):(this.x=new i(t,16),this.y=new i(r,16),n&&(this.x.forceRed(this.curve.red),this.y.forceRed(this.curve.red)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.inf=!1)}function d(e,t,r,n){s.BasePoint.call(this,e,"jacobian"),null===t&&null===r&&null===n?(this.x=this.curve.one,this.y=this.curve.one,this.z=new i(0)):(this.x=new i(t,16),this.y=new i(r,16),this.z=new i(n,16)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)),this.zOne=this.z===this.curve.one}o(c,s),e.exports=c,c.prototype._getEndomorphism=function(e){if(this.zeroA&&this.g&&this.n&&1===this.p.modn(3)){var t,r;if(e.beta)t=new i(e.beta,16).toRed(this.red);else{var n=this._getEndoRoots(this.p);t=(t=n[0].cmp(n[1])<0?n[0]:n[1]).toRed(this.red)}if(e.lambda)r=new i(e.lambda,16);else{var o=this._getEndoRoots(this.n);0===this.g.mul(o[0]).x.cmp(this.g.x.redMul(t))?r=o[0]:(r=o[1],a(0===this.g.mul(r).x.cmp(this.g.x.redMul(t))))}return{beta:t,lambda:r,basis:e.basis?e.basis.map((function(e){return{a:new i(e.a,16),b:new i(e.b,16)}})):this._getEndoBasis(r)}}},c.prototype._getEndoRoots=function(e){var t=e===this.p?this.red:i.mont(e),r=new i(2).toRed(t).redInvm(),n=r.redNeg(),o=new i(3).toRed(t).redNeg().redSqrt().redMul(r);return[n.redAdd(o).fromRed(),n.redSub(o).fromRed()]},c.prototype._getEndoBasis=function(e){for(var t,r,n,o,s,a,c,u,d,f=this.n.ushrn(Math.floor(this.n.bitLength()/2)),h=e,l=this.n.clone(),p=new i(1),b=new i(0),y=new i(0),m=new i(1),g=0;0!==h.cmpn(0);){var v=l.div(h);u=l.sub(v.mul(h)),d=y.sub(v.mul(p));var w=m.sub(v.mul(b));if(!n&&u.cmp(f)<0)t=c.neg(),r=p,n=u.neg(),o=d;else if(n&&2==++g)break;c=u,l=h,h=u,y=p,p=d,m=b,b=w}s=u.neg(),a=d;var _=n.sqr().add(o.sqr());return s.sqr().add(a.sqr()).cmp(_)>=0&&(s=t,a=r),n.negative&&(n=n.neg(),o=o.neg()),s.negative&&(s=s.neg(),a=a.neg()),[{a:n,b:o},{a:s,b:a}]},c.prototype._endoSplit=function(e){var t=this.endo.basis,r=t[0],n=t[1],i=n.b.mul(e).divRound(this.n),o=r.b.neg().mul(e).divRound(this.n),s=i.mul(r.a),a=o.mul(n.a),c=i.mul(r.b),u=o.mul(n.b);return{k1:e.sub(s).sub(a),k2:c.add(u).neg()}},c.prototype.pointFromX=function(e,t){(e=new i(e,16)).red||(e=e.toRed(this.red));var r=e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),n=r.redSqrt();if(0!==n.redSqr().redSub(r).cmp(this.zero))throw new Error("invalid point");var o=n.fromRed().isOdd();return(t&&!o||!t&&o)&&(n=n.redNeg()),this.point(e,n)},c.prototype.validate=function(e){if(e.inf)return!0;var t=e.x,r=e.y,n=this.a.redMul(t),i=t.redSqr().redMul(t).redIAdd(n).redIAdd(this.b);return 0===r.redSqr().redISub(i).cmpn(0)},c.prototype._endoWnafMulAdd=function(e,t,r){for(var n=this._endoWnafT1,i=this._endoWnafT2,o=0;o<e.length;o++){var s=this._endoSplit(t[o]),a=e[o],c=a._getBeta();s.k1.negative&&(s.k1.ineg(),a=a.neg(!0)),s.k2.negative&&(s.k2.ineg(),c=c.neg(!0)),n[2*o]=a,n[2*o+1]=c,i[2*o]=s.k1,i[2*o+1]=s.k2}for(var u=this._wnafMulAdd(1,n,i,2*o,r),d=0;d<2*o;d++)n[d]=null,i[d]=null;return u},o(u,s.BasePoint),c.prototype.point=function(e,t,r){return new u(this,e,t,r)},c.prototype.pointFromJSON=function(e,t){return u.fromJSON(this,e,t)},u.prototype._getBeta=function(){if(this.curve.endo){var e=this.precomputed;if(e&&e.beta)return e.beta;var t=this.curve.point(this.x.redMul(this.curve.endo.beta),this.y);if(e){var r=this.curve,n=function(e){return r.point(e.x.redMul(r.endo.beta),e.y)};e.beta=t,t.precomputed={beta:null,naf:e.naf&&{wnd:e.naf.wnd,points:e.naf.points.map(n)},doubles:e.doubles&&{step:e.doubles.step,points:e.doubles.points.map(n)}}}return t}},u.prototype.toJSON=function(){return this.precomputed?[this.x,this.y,this.precomputed&&{doubles:this.precomputed.doubles&&{step:this.precomputed.doubles.step,points:this.precomputed.doubles.points.slice(1)},naf:this.precomputed.naf&&{wnd:this.precomputed.naf.wnd,points:this.precomputed.naf.points.slice(1)}}]:[this.x,this.y]},u.fromJSON=function(e,t,r){"string"==typeof t&&(t=JSON.parse(t));var n=e.point(t[0],t[1],r);if(!t[2])return n;function i(t){return e.point(t[0],t[1],r)}var o=t[2];return n.precomputed={beta:null,doubles:o.doubles&&{step:o.doubles.step,points:[n].concat(o.doubles.points.map(i))},naf:o.naf&&{wnd:o.naf.wnd,points:[n].concat(o.naf.points.map(i))}},n},u.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" y: "+this.y.fromRed().toString(16,2)+">"},u.prototype.isInfinity=function(){return this.inf},u.prototype.add=function(e){if(this.inf)return e;if(e.inf)return this;if(this.eq(e))return this.dbl();if(this.neg().eq(e))return this.curve.point(null,null);if(0===this.x.cmp(e.x))return this.curve.point(null,null);var t=this.y.redSub(e.y);0!==t.cmpn(0)&&(t=t.redMul(this.x.redSub(e.x).redInvm()));var r=t.redSqr().redISub(this.x).redISub(e.x),n=t.redMul(this.x.redSub(r)).redISub(this.y);return this.curve.point(r,n)},u.prototype.dbl=function(){if(this.inf)return this;var e=this.y.redAdd(this.y);if(0===e.cmpn(0))return this.curve.point(null,null);var t=this.curve.a,r=this.x.redSqr(),n=e.redInvm(),i=r.redAdd(r).redIAdd(r).redIAdd(t).redMul(n),o=i.redSqr().redISub(this.x.redAdd(this.x)),s=i.redMul(this.x.redSub(o)).redISub(this.y);return this.curve.point(o,s)},u.prototype.getX=function(){return this.x.fromRed()},u.prototype.getY=function(){return this.y.fromRed()},u.prototype.mul=function(e){return e=new i(e,16),this.isInfinity()?this:this._hasDoubles(e)?this.curve._fixedNafMul(this,e):this.curve.endo?this.curve._endoWnafMulAdd([this],[e]):this.curve._wnafMul(this,e)},u.prototype.mulAdd=function(e,t,r){var n=[this,t],i=[e,r];return this.curve.endo?this.curve._endoWnafMulAdd(n,i):this.curve._wnafMulAdd(1,n,i,2)},u.prototype.jmulAdd=function(e,t,r){var n=[this,t],i=[e,r];return this.curve.endo?this.curve._endoWnafMulAdd(n,i,!0):this.curve._wnafMulAdd(1,n,i,2,!0)},u.prototype.eq=function(e){return this===e||this.inf===e.inf&&(this.inf||0===this.x.cmp(e.x)&&0===this.y.cmp(e.y))},u.prototype.neg=function(e){if(this.inf)return this;var t=this.curve.point(this.x,this.y.redNeg());if(e&&this.precomputed){var r=this.precomputed,n=function(e){return e.neg()};t.precomputed={naf:r.naf&&{wnd:r.naf.wnd,points:r.naf.points.map(n)},doubles:r.doubles&&{step:r.doubles.step,points:r.doubles.points.map(n)}}}return t},u.prototype.toJ=function(){return this.inf?this.curve.jpoint(null,null,null):this.curve.jpoint(this.x,this.y,this.curve.one)},o(d,s.BasePoint),c.prototype.jpoint=function(e,t,r){return new d(this,e,t,r)},d.prototype.toP=function(){if(this.isInfinity())return this.curve.point(null,null);var e=this.z.redInvm(),t=e.redSqr(),r=this.x.redMul(t),n=this.y.redMul(t).redMul(e);return this.curve.point(r,n)},d.prototype.neg=function(){return this.curve.jpoint(this.x,this.y.redNeg(),this.z)},d.prototype.add=function(e){if(this.isInfinity())return e;if(e.isInfinity())return this;var t=e.z.redSqr(),r=this.z.redSqr(),n=this.x.redMul(t),i=e.x.redMul(r),o=this.y.redMul(t.redMul(e.z)),s=e.y.redMul(r.redMul(this.z)),a=n.redSub(i),c=o.redSub(s);if(0===a.cmpn(0))return 0!==c.cmpn(0)?this.curve.jpoint(null,null,null):this.dbl();var u=a.redSqr(),d=u.redMul(a),f=n.redMul(u),h=c.redSqr().redIAdd(d).redISub(f).redISub(f),l=c.redMul(f.redISub(h)).redISub(o.redMul(d)),p=this.z.redMul(e.z).redMul(a);return this.curve.jpoint(h,l,p)},d.prototype.mixedAdd=function(e){if(this.isInfinity())return e.toJ();if(e.isInfinity())return this;var t=this.z.redSqr(),r=this.x,n=e.x.redMul(t),i=this.y,o=e.y.redMul(t).redMul(this.z),s=r.redSub(n),a=i.redSub(o);if(0===s.cmpn(0))return 0!==a.cmpn(0)?this.curve.jpoint(null,null,null):this.dbl();var c=s.redSqr(),u=c.redMul(s),d=r.redMul(c),f=a.redSqr().redIAdd(u).redISub(d).redISub(d),h=a.redMul(d.redISub(f)).redISub(i.redMul(u)),l=this.z.redMul(s);return this.curve.jpoint(f,h,l)},d.prototype.dblp=function(e){if(0===e)return this;if(this.isInfinity())return this;if(!e)return this.dbl();var t;if(this.curve.zeroA||this.curve.threeA){var r=this;for(t=0;t<e;t++)r=r.dbl();return r}var n=this.curve.a,i=this.curve.tinv,o=this.x,s=this.y,a=this.z,c=a.redSqr().redSqr(),u=s.redAdd(s);for(t=0;t<e;t++){var d=o.redSqr(),f=u.redSqr(),h=f.redSqr(),l=d.redAdd(d).redIAdd(d).redIAdd(n.redMul(c)),p=o.redMul(f),b=l.redSqr().redISub(p.redAdd(p)),y=p.redISub(b),m=l.redMul(y);m=m.redIAdd(m).redISub(h);var g=u.redMul(a);t+1<e&&(c=c.redMul(h)),o=b,a=g,u=m}return this.curve.jpoint(o,u.redMul(i),a)},d.prototype.dbl=function(){return this.isInfinity()?this:this.curve.zeroA?this._zeroDbl():this.curve.threeA?this._threeDbl():this._dbl()},d.prototype._zeroDbl=function(){var e,t,r;if(this.zOne){var n=this.x.redSqr(),i=this.y.redSqr(),o=i.redSqr(),s=this.x.redAdd(i).redSqr().redISub(n).redISub(o);s=s.redIAdd(s);var a=n.redAdd(n).redIAdd(n),c=a.redSqr().redISub(s).redISub(s),u=o.redIAdd(o);u=(u=u.redIAdd(u)).redIAdd(u),e=c,t=a.redMul(s.redISub(c)).redISub(u),r=this.y.redAdd(this.y)}else{var d=this.x.redSqr(),f=this.y.redSqr(),h=f.redSqr(),l=this.x.redAdd(f).redSqr().redISub(d).redISub(h);l=l.redIAdd(l);var p=d.redAdd(d).redIAdd(d),b=p.redSqr(),y=h.redIAdd(h);y=(y=y.redIAdd(y)).redIAdd(y),e=b.redISub(l).redISub(l),t=p.redMul(l.redISub(e)).redISub(y),r=(r=this.y.redMul(this.z)).redIAdd(r)}return this.curve.jpoint(e,t,r)},d.prototype._threeDbl=function(){var e,t,r;if(this.zOne){var n=this.x.redSqr(),i=this.y.redSqr(),o=i.redSqr(),s=this.x.redAdd(i).redSqr().redISub(n).redISub(o);s=s.redIAdd(s);var a=n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),c=a.redSqr().redISub(s).redISub(s);e=c;var u=o.redIAdd(o);u=(u=u.redIAdd(u)).redIAdd(u),t=a.redMul(s.redISub(c)).redISub(u),r=this.y.redAdd(this.y)}else{var d=this.z.redSqr(),f=this.y.redSqr(),h=this.x.redMul(f),l=this.x.redSub(d).redMul(this.x.redAdd(d));l=l.redAdd(l).redIAdd(l);var p=h.redIAdd(h),b=(p=p.redIAdd(p)).redAdd(p);e=l.redSqr().redISub(b),r=this.y.redAdd(this.z).redSqr().redISub(f).redISub(d);var y=f.redSqr();y=(y=(y=y.redIAdd(y)).redIAdd(y)).redIAdd(y),t=l.redMul(p.redISub(e)).redISub(y)}return this.curve.jpoint(e,t,r)},d.prototype._dbl=function(){var e=this.curve.a,t=this.x,r=this.y,n=this.z,i=n.redSqr().redSqr(),o=t.redSqr(),s=r.redSqr(),a=o.redAdd(o).redIAdd(o).redIAdd(e.redMul(i)),c=t.redAdd(t),u=(c=c.redIAdd(c)).redMul(s),d=a.redSqr().redISub(u.redAdd(u)),f=u.redISub(d),h=s.redSqr();h=(h=(h=h.redIAdd(h)).redIAdd(h)).redIAdd(h);var l=a.redMul(f).redISub(h),p=r.redAdd(r).redMul(n);return this.curve.jpoint(d,l,p)},d.prototype.trpl=function(){if(!this.curve.zeroA)return this.dbl().add(this);var e=this.x.redSqr(),t=this.y.redSqr(),r=this.z.redSqr(),n=t.redSqr(),i=e.redAdd(e).redIAdd(e),o=i.redSqr(),s=this.x.redAdd(t).redSqr().redISub(e).redISub(n),a=(s=(s=(s=s.redIAdd(s)).redAdd(s).redIAdd(s)).redISub(o)).redSqr(),c=n.redIAdd(n);c=(c=(c=c.redIAdd(c)).redIAdd(c)).redIAdd(c);var u=i.redIAdd(s).redSqr().redISub(o).redISub(a).redISub(c),d=t.redMul(u);d=(d=d.redIAdd(d)).redIAdd(d);var f=this.x.redMul(a).redISub(d);f=(f=f.redIAdd(f)).redIAdd(f);var h=this.y.redMul(u.redMul(c.redISub(u)).redISub(s.redMul(a)));h=(h=(h=h.redIAdd(h)).redIAdd(h)).redIAdd(h);var l=this.z.redAdd(s).redSqr().redISub(r).redISub(a);return this.curve.jpoint(f,h,l)},d.prototype.mul=function(e,t){return e=new i(e,t),this.curve._wnafMul(this,e)},d.prototype.eq=function(e){if("affine"===e.type)return this.eq(e.toJ());if(this===e)return!0;var t=this.z.redSqr(),r=e.z.redSqr();if(0!==this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0))return!1;var n=t.redMul(this.z),i=r.redMul(e.z);return 0===this.y.redMul(i).redISub(e.y.redMul(n)).cmpn(0)},d.prototype.eqXToP=function(e){var t=this.z.redSqr(),r=e.toRed(this.curve.red).redMul(t);if(0===this.x.cmp(r))return!0;for(var n=e.clone(),i=this.curve.redN.redMul(t);;){if(n.iadd(this.curve.n),n.cmp(this.curve.p)>=0)return!1;if(r.redIAdd(i),0===this.x.cmp(r))return!0}},d.prototype.inspect=function(){return this.isInfinity()?"<EC JPoint Infinity>":"<EC JPoint x: "+this.x.toString(16,2)+" y: "+this.y.toString(16,2)+" z: "+this.z.toString(16,2)+">"},d.prototype.isInfinity=function(){return 0===this.z.cmpn(0)}},3189:(e,t,r)=>{"use strict";var n,i=t,o=r(1631),s=r(1869),a=r(7316).assert;function c(e){"short"===e.type?this.curve=new s.short(e):"edwards"===e.type?this.curve=new s.edwards(e):this.curve=new s.mont(e),this.g=this.curve.g,this.n=this.curve.n,this.hash=e.hash,a(this.g.validate(),"Invalid curve"),a(this.g.mul(this.n).isInfinity(),"Invalid curve, G*N != O")}function u(e,t){Object.defineProperty(i,e,{configurable:!0,enumerable:!0,get:function(){var r=new c(t);return Object.defineProperty(i,e,{configurable:!0,enumerable:!0,value:r}),r}})}i.PresetCurve=c,u("p192",{type:"short",prime:"p192",p:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",a:"ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",b:"64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",n:"ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",hash:o.sha256,gRed:!1,g:["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012","07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]}),u("p224",{type:"short",prime:"p224",p:"ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",a:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",b:"b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",n:"ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",hash:o.sha256,gRed:!1,g:["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21","bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]}),u("p256",{type:"short",prime:null,p:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",a:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",b:"5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",n:"ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",hash:o.sha256,gRed:!1,g:["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296","4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]}),u("p384",{type:"short",prime:null,p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",a:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",b:"b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",n:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",hash:o.sha384,gRed:!1,g:["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7","3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]}),u("p521",{type:"short",prime:null,p:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",a:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",b:"00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",n:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",hash:o.sha512,gRed:!1,g:["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66","00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]}),u("curve25519",{type:"mont",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"76d06",b:"1",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:o.sha256,gRed:!1,g:["9"]}),u("ed25519",{type:"edwards",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"-1",c:"1",d:"52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:o.sha256,gRed:!1,g:["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a","6666666666666666666666666666666666666666666666666666666666666658"]});try{n=r(4796)}catch(e){n=void 0}u("secp256k1",{type:"short",prime:"k256",p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",a:"0",b:"7",n:"ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",h:"1",hash:o.sha256,beta:"7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",lambda:"5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",basis:[{a:"3086d221a7d46bcde86c90e49284eb15",b:"-e4437ed6010e88286f547fa90abfe4c3"},{a:"114ca50f7a8e2f3f657c1108d9d44cfd8",b:"3086d221a7d46bcde86c90e49284eb15"}],gRed:!1,g:["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798","483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",n]})},7566:(e,t,r)=>{"use strict";var n=r(4619),i=r(2519),o=r(7316),s=r(3189),a=r(5442),c=o.assert,u=r(6073),d=r(9136);function f(e){if(!(this instanceof f))return new f(e);"string"==typeof e&&(c(Object.prototype.hasOwnProperty.call(s,e),"Unknown curve "+e),e=s[e]),e instanceof s.PresetCurve&&(e={curve:e}),this.curve=e.curve.curve,this.n=this.curve.n,this.nh=this.n.ushrn(1),this.g=this.curve.g,this.g=e.curve.g,this.g.precompute(e.curve.n.bitLength()+1),this.hash=e.hash||e.curve.hash}e.exports=f,f.prototype.keyPair=function(e){return new u(this,e)},f.prototype.keyFromPrivate=function(e,t){return u.fromPrivate(this,e,t)},f.prototype.keyFromPublic=function(e,t){return u.fromPublic(this,e,t)},f.prototype.genKeyPair=function(e){e||(e={});for(var t=new i({hash:this.hash,pers:e.pers,persEnc:e.persEnc||"utf8",entropy:e.entropy||a(this.hash.hmacStrength),entropyEnc:e.entropy&&e.entropyEnc||"utf8",nonce:this.n.toArray()}),r=this.n.byteLength(),o=this.n.sub(new n(2));;){var s=new n(t.generate(r));if(!(s.cmp(o)>0))return s.iaddn(1),this.keyFromPrivate(s)}},f.prototype._truncateToN=function(e,t){var r=8*e.byteLength()-this.n.bitLength();return r>0&&(e=e.ushrn(r)),!t&&e.cmp(this.n)>=0?e.sub(this.n):e},f.prototype.sign=function(e,t,r,o){"object"==typeof r&&(o=r,r=null),o||(o={}),t=this.keyFromPrivate(t,r),e=this._truncateToN(new n(e,16));for(var s=this.n.byteLength(),a=t.getPrivate().toArray("be",s),c=e.toArray("be",s),u=new i({hash:this.hash,entropy:a,nonce:c,pers:o.pers,persEnc:o.persEnc||"utf8"}),f=this.n.sub(new n(1)),h=0;;h++){var l=o.k?o.k(h):new n(u.generate(this.n.byteLength()));if(!((l=this._truncateToN(l,!0)).cmpn(1)<=0||l.cmp(f)>=0)){var p=this.g.mul(l);if(!p.isInfinity()){var b=p.getX(),y=b.umod(this.n);if(0!==y.cmpn(0)){var m=l.invm(this.n).mul(y.mul(t.getPrivate()).iadd(e));if(0!==(m=m.umod(this.n)).cmpn(0)){var g=(p.getY().isOdd()?1:0)|(0!==b.cmp(y)?2:0);return o.canonical&&m.cmp(this.nh)>0&&(m=this.n.sub(m),g^=1),new d({r:y,s:m,recoveryParam:g})}}}}}},f.prototype.verify=function(e,t,r,i){e=this._truncateToN(new n(e,16)),r=this.keyFromPublic(r,i);var o=(t=new d(t,"hex")).r,s=t.s;if(o.cmpn(1)<0||o.cmp(this.n)>=0)return!1;if(s.cmpn(1)<0||s.cmp(this.n)>=0)return!1;var a,c=s.invm(this.n),u=c.mul(e).umod(this.n),f=c.mul(o).umod(this.n);return this.curve._maxwellTrick?!(a=this.g.jmulAdd(u,r.getPublic(),f)).isInfinity()&&a.eqXToP(o):!(a=this.g.mulAdd(u,r.getPublic(),f)).isInfinity()&&0===a.getX().umod(this.n).cmp(o)},f.prototype.recoverPubKey=function(e,t,r,i){c((3&r)===r,"The recovery param is more than two bits"),t=new d(t,i);var o=this.n,s=new n(e),a=t.r,u=t.s,f=1&r,h=r>>1;if(a.cmp(this.curve.p.umod(this.curve.n))>=0&&h)throw new Error("Unable to find sencond key candinate");a=h?this.curve.pointFromX(a.add(this.curve.n),f):this.curve.pointFromX(a,f);var l=t.r.invm(o),p=o.sub(s).mul(l).umod(o),b=u.mul(l).umod(o);return this.g.mulAdd(p,a,b)},f.prototype.getKeyRecoveryParam=function(e,t,r,n){if(null!==(t=new d(t,n)).recoveryParam)return t.recoveryParam;for(var i=0;i<4;i++){var o;try{o=this.recoverPubKey(e,t,i)}catch(e){continue}if(o.eq(r))return i}throw new Error("Unable to find valid recovery factor")}},6073:(e,t,r)=>{"use strict";var n=r(4619),i=r(7316).assert;function o(e,t){this.ec=e,this.priv=null,this.pub=null,t.priv&&this._importPrivate(t.priv,t.privEnc),t.pub&&this._importPublic(t.pub,t.pubEnc)}e.exports=o,o.fromPublic=function(e,t,r){return t instanceof o?t:new o(e,{pub:t,pubEnc:r})},o.fromPrivate=function(e,t,r){return t instanceof o?t:new o(e,{priv:t,privEnc:r})},o.prototype.validate=function(){var e=this.getPublic();return e.isInfinity()?{result:!1,reason:"Invalid public key"}:e.validate()?e.mul(this.ec.curve.n).isInfinity()?{result:!0,reason:null}:{result:!1,reason:"Public key * N != O"}:{result:!1,reason:"Public key is not a point"}},o.prototype.getPublic=function(e,t){return"string"==typeof e&&(t=e,e=null),this.pub||(this.pub=this.ec.g.mul(this.priv)),t?this.pub.encode(t,e):this.pub},o.prototype.getPrivate=function(e){return"hex"===e?this.priv.toString(16,2):this.priv},o.prototype._importPrivate=function(e,t){this.priv=new n(e,t||16),this.priv=this.priv.umod(this.ec.curve.n)},o.prototype._importPublic=function(e,t){if(e.x||e.y)return"mont"===this.ec.curve.type?i(e.x,"Need x coordinate"):"short"!==this.ec.curve.type&&"edwards"!==this.ec.curve.type||i(e.x&&e.y,"Need both x and y coordinate"),void(this.pub=this.ec.curve.point(e.x,e.y));this.pub=this.ec.curve.decodePoint(e,t)},o.prototype.derive=function(e){return e.validate()||i(e.validate(),"public point not validated"),e.mul(this.priv).getX()},o.prototype.sign=function(e,t,r){return this.ec.sign(e,this,t,r)},o.prototype.verify=function(e,t){return this.ec.verify(e,t,this)},o.prototype.inspect=function(){return"<Key priv: "+(this.priv&&this.priv.toString(16,2))+" pub: "+(this.pub&&this.pub.inspect())+" >"}},9136:(e,t,r)=>{"use strict";var n=r(4619),i=r(7316),o=i.assert;function s(e,t){if(e instanceof s)return e;this._importDER(e,t)||(o(e.r&&e.s,"Signature without r or s"),this.r=new n(e.r,16),this.s=new n(e.s,16),void 0===e.recoveryParam?this.recoveryParam=null:this.recoveryParam=e.recoveryParam)}function a(){this.place=0}function c(e,t){var r=e[t.place++];if(!(128&r))return r;var n=15&r;if(0===n||n>4)return!1;if(0===e[t.place])return!1;for(var i=0,o=0,s=t.place;o<n;o++,s++)i<<=8,i|=e[s],i>>>=0;return!(i<=127)&&(t.place=s,i)}function u(e){for(var t=0,r=e.length-1;!e[t]&&!(128&e[t+1])&&t<r;)t++;return 0===t?e:e.slice(t)}function d(e,t){if(t<128)e.push(t);else{var r=1+(Math.log(t)/Math.LN2>>>3);for(e.push(128|r);--r;)e.push(t>>>(r<<3)&255);e.push(t)}}e.exports=s,s.prototype._importDER=function(e,t){e=i.toArray(e,t);var r=new a;if(48!==e[r.place++])return!1;var o=c(e,r);if(!1===o)return!1;if(o+r.place!==e.length)return!1;if(2!==e[r.place++])return!1;var s=c(e,r);if(!1===s)return!1;if(128&e[r.place])return!1;var u=e.slice(r.place,s+r.place);if(r.place+=s,2!==e[r.place++])return!1;var d=c(e,r);if(!1===d)return!1;if(e.length!==d+r.place)return!1;if(128&e[r.place])return!1;var f=e.slice(r.place,d+r.place);if(0===u[0]){if(!(128&u[1]))return!1;u=u.slice(1)}if(0===f[0]){if(!(128&f[1]))return!1;f=f.slice(1)}return this.r=new n(u),this.s=new n(f),this.recoveryParam=null,!0},s.prototype.toDER=function(e){var t=this.r.toArray(),r=this.s.toArray();for(128&t[0]&&(t=[0].concat(t)),128&r[0]&&(r=[0].concat(r)),t=u(t),r=u(r);!(r[0]||128&r[1]);)r=r.slice(1);var n=[2];d(n,t.length),(n=n.concat(t)).push(2),d(n,r.length);var o=n.concat(r),s=[48];return d(s,o.length),s=s.concat(o),i.encode(s,e)}},3609:(e,t,r)=>{"use strict";var n=r(1631),i=r(3189),o=r(7316),s=o.assert,a=o.parseBytes,c=r(3594),u=r(3871);function d(e){if(s("ed25519"===e,"only tested with ed25519 so far"),!(this instanceof d))return new d(e);e=i[e].curve,this.curve=e,this.g=e.g,this.g.precompute(e.n.bitLength()+1),this.pointClass=e.point().constructor,this.encodingLength=Math.ceil(e.n.bitLength()/8),this.hash=n.sha512}e.exports=d,d.prototype.sign=function(e,t){e=a(e);var r=this.keyFromSecret(t),n=this.hashInt(r.messagePrefix(),e),i=this.g.mul(n),o=this.encodePoint(i),s=this.hashInt(o,r.pubBytes(),e).mul(r.priv()),c=n.add(s).umod(this.curve.n);return this.makeSignature({R:i,S:c,Rencoded:o})},d.prototype.verify=function(e,t,r){if(e=a(e),(t=this.makeSignature(t)).S().gte(t.eddsa.curve.n)||t.S().isNeg())return!1;var n=this.keyFromPublic(r),i=this.hashInt(t.Rencoded(),n.pubBytes(),e),o=this.g.mul(t.S());return t.R().add(n.pub().mul(i)).eq(o)},d.prototype.hashInt=function(){for(var e=this.hash(),t=0;t<arguments.length;t++)e.update(arguments[t]);return o.intFromLE(e.digest()).umod(this.curve.n)},d.prototype.keyFromPublic=function(e){return c.fromPublic(this,e)},d.prototype.keyFromSecret=function(e){return c.fromSecret(this,e)},d.prototype.makeSignature=function(e){return e instanceof u?e:new u(this,e)},d.prototype.encodePoint=function(e){var t=e.getY().toArray("le",this.encodingLength);return t[this.encodingLength-1]|=e.getX().isOdd()?128:0,t},d.prototype.decodePoint=function(e){var t=(e=o.parseBytes(e)).length-1,r=e.slice(0,t).concat(-129&e[t]),n=!!(128&e[t]),i=o.intFromLE(r);return this.curve.pointFromY(i,n)},d.prototype.encodeInt=function(e){return e.toArray("le",this.encodingLength)},d.prototype.decodeInt=function(e){return o.intFromLE(e)},d.prototype.isPoint=function(e){return e instanceof this.pointClass}},3594:(e,t,r)=>{"use strict";var n=r(7316),i=n.assert,o=n.parseBytes,s=n.cachedProperty;function a(e,t){this.eddsa=e,this._secret=o(t.secret),e.isPoint(t.pub)?this._pub=t.pub:this._pubBytes=o(t.pub)}a.fromPublic=function(e,t){return t instanceof a?t:new a(e,{pub:t})},a.fromSecret=function(e,t){return t instanceof a?t:new a(e,{secret:t})},a.prototype.secret=function(){return this._secret},s(a,"pubBytes",(function(){return this.eddsa.encodePoint(this.pub())})),s(a,"pub",(function(){return this._pubBytes?this.eddsa.decodePoint(this._pubBytes):this.eddsa.g.mul(this.priv())})),s(a,"privBytes",(function(){var e=this.eddsa,t=this.hash(),r=e.encodingLength-1,n=t.slice(0,e.encodingLength);return n[0]&=248,n[r]&=127,n[r]|=64,n})),s(a,"priv",(function(){return this.eddsa.decodeInt(this.privBytes())})),s(a,"hash",(function(){return this.eddsa.hash().update(this.secret()).digest()})),s(a,"messagePrefix",(function(){return this.hash().slice(this.eddsa.encodingLength)})),a.prototype.sign=function(e){return i(this._secret,"KeyPair can only verify"),this.eddsa.sign(e,this)},a.prototype.verify=function(e,t){return this.eddsa.verify(e,t,this)},a.prototype.getSecret=function(e){return i(this._secret,"KeyPair is public only"),n.encode(this.secret(),e)},a.prototype.getPublic=function(e){return n.encode(this.pubBytes(),e)},e.exports=a},3871:(e,t,r)=>{"use strict";var n=r(4619),i=r(7316),o=i.assert,s=i.cachedProperty,a=i.parseBytes;function c(e,t){this.eddsa=e,"object"!=typeof t&&(t=a(t)),Array.isArray(t)&&(o(t.length===2*e.encodingLength,"Signature has invalid size"),t={R:t.slice(0,e.encodingLength),S:t.slice(e.encodingLength)}),o(t.R&&t.S,"Signature without R or S"),e.isPoint(t.R)&&(this._R=t.R),t.S instanceof n&&(this._S=t.S),this._Rencoded=Array.isArray(t.R)?t.R:t.Rencoded,this._Sencoded=Array.isArray(t.S)?t.S:t.Sencoded}s(c,"S",(function(){return this.eddsa.decodeInt(this.Sencoded())})),s(c,"R",(function(){return this.eddsa.decodePoint(this.Rencoded())})),s(c,"Rencoded",(function(){return this.eddsa.encodePoint(this.R())})),s(c,"Sencoded",(function(){return this.eddsa.encodeInt(this.S())})),c.prototype.toBytes=function(){return this.Rencoded().concat(this.Sencoded())},c.prototype.toHex=function(){return i.encode(this.toBytes(),"hex").toUpperCase()},e.exports=c},4796:e=>{e.exports={doubles:{step:4,points:[["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a","f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"],["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508","11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"],["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739","d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"],["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640","4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"],["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c","4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"],["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda","96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"],["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa","5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"],["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0","cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"],["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d","9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"],["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d","e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"],["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1","9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"],["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0","5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"],["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047","10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"],["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862","283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"],["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7","7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"],["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd","56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"],["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83","7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"],["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a","53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"],["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8","bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"],["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d","4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"],["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725","7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"],["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754","4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"],["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c","17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"],["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6","6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"],["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39","c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"],["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891","893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"],["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b","febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"],["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03","2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"],["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d","eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"],["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070","7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"],["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4","e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"],["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da","662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"],["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11","1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"],["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e","efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"],["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41","2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"],["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef","67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"],["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8","db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"],["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d","648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"],["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96","35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"],["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd","ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"],["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5","9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"],["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266","40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"],["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71","34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"],["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac","c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"],["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751","1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"],["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e","493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"],["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241","c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"],["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3","be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"],["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f","4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"],["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19","aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"],["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be","b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"],["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9","6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"],["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2","8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"],["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13","7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"],["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c","ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"],["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba","2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"],["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151","e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"],["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073","d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"],["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458","38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"],["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b","69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"],["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366","d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"],["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa","40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"],["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0","620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"],["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787","7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"],["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e","ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]]},naf:{wnd:7,points:[["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9","388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"],["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4","d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"],["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc","6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"],["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe","cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"],["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb","d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"],["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8","ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"],["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e","581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"],["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34","4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"],["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c","85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"],["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5","321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"],["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f","2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"],["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714","73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"],["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729","a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"],["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db","2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"],["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4","e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"],["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5","b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"],["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479","2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"],["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d","80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"],["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f","1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"],["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb","d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"],["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9","eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"],["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963","758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"],["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74","958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"],["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530","e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"],["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b","5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"],["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247","cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"],["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1","cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"],["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120","4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"],["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435","91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"],["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18","673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"],["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8","59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"],["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb","3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"],["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f","55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"],["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143","efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"],["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba","e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"],["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45","f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"],["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a","744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"],["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e","c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"],["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8","e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"],["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c","30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"],["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519","e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"],["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab","100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"],["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca","ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"],["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf","8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"],["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610","68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"],["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4","f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"],["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c","d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"],["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940","edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"],["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980","a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"],["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3","66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"],["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf","9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"],["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63","4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"],["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448","fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"],["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf","5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"],["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5","8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"],["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6","8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"],["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5","5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"],["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99","f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"],["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51","f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"],["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5","42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"],["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5","204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"],["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997","4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"],["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881","73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"],["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5","39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"],["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66","d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"],["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726","ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"],["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede","6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"],["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94","60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"],["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31","3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"],["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51","b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"],["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252","ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"],["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5","cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"],["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b","6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"],["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4","322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"],["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f","6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"],["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889","2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"],["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246","b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"],["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984","998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"],["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a","b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"],["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030","bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"],["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197","6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"],["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593","c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"],["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef","21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"],["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38","60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"],["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a","49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"],["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111","5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"],["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502","7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"],["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea","be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"],["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26","8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"],["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986","39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"],["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e","62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"],["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4","25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"],["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda","ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"],["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859","cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"],["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f","f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"],["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c","6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"],["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942","fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"],["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a","1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"],["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80","5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"],["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d","438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"],["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1","cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"],["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63","c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"],["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352","6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"],["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193","ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"],["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00","9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"],["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58","ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"],["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7","d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"],["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8","c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"],["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e","67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"],["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d","cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"],["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b","299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"],["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f","f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"],["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6","462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"],["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297","62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"],["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a","7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"],["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c","ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"],["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52","4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"],["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb","bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"],["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065","bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"],["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917","603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"],["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9","cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"],["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3","553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"],["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57","712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"],["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66","ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"],["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8","9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"],["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721","9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"],["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180","4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]]}}},7316:(e,t,r)=>{"use strict";var n=t,i=r(4619),o=r(5578),s=r(4209);n.assert=o,n.toArray=s.toArray,n.zero2=s.zero2,n.toHex=s.toHex,n.encode=s.encode,n.getNAF=function(e,t,r){var n,i=new Array(Math.max(e.bitLength(),r)+1);for(n=0;n<i.length;n+=1)i[n]=0;var o=1<<t+1,s=e.clone();for(n=0;n<i.length;n++){var a,c=s.andln(o-1);s.isOdd()?(a=c>(o>>1)-1?(o>>1)-c:c,s.isubn(a)):a=0,i[n]=a,s.iushrn(1)}return i},n.getJSF=function(e,t){var r=[[],[]];e=e.clone(),t=t.clone();for(var n,i=0,o=0;e.cmpn(-i)>0||t.cmpn(-o)>0;){var s,a,c=e.andln(3)+i&3,u=t.andln(3)+o&3;3===c&&(c=-1),3===u&&(u=-1),s=1&c?3!=(n=e.andln(7)+i&7)&&5!==n||2!==u?c:-c:0,r[0].push(s),a=1&u?3!=(n=t.andln(7)+o&7)&&5!==n||2!==c?u:-u:0,r[1].push(a),2*i===s+1&&(i=1-i),2*o===a+1&&(o=1-o),e.iushrn(1),t.iushrn(1)}return r},n.cachedProperty=function(e,t,r){var n="_"+t;e.prototype[t]=function(){return void 0!==this[n]?this[n]:this[n]=r.call(this)}},n.parseBytes=function(e){return"string"==typeof e?n.toArray(e,"hex"):e},n.intFromLE=function(e){return new i(e,"hex","le")}},2579:e=>{"use strict";var t=Object.prototype.hasOwnProperty,r="~";function n(){}function i(e,t,r){this.fn=e,this.context=t,this.once=r||!1}function o(e,t,n,o,s){if("function"!=typeof n)throw new TypeError("The listener must be a function");var a=new i(n,o||e,s),c=r?r+t:t;return e._events[c]?e._events[c].fn?e._events[c]=[e._events[c],a]:e._events[c].push(a):(e._events[c]=a,e._eventsCount++),e}function s(e,t){0==--e._eventsCount?e._events=new n:delete e._events[t]}function a(){this._events=new n,this._eventsCount=0}Object.create&&(n.prototype=Object.create(null),(new n).__proto__||(r=!1)),a.prototype.eventNames=function(){var e,n,i=[];if(0===this._eventsCount)return i;for(n in e=this._events)t.call(e,n)&&i.push(r?n.slice(1):n);return Object.getOwnPropertySymbols?i.concat(Object.getOwnPropertySymbols(e)):i},a.prototype.listeners=function(e){var t=r?r+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var i=0,o=n.length,s=new Array(o);i<o;i++)s[i]=n[i].fn;return s},a.prototype.listenerCount=function(e){var t=r?r+e:e,n=this._events[t];return n?n.fn?1:n.length:0},a.prototype.emit=function(e,t,n,i,o,s){var a=r?r+e:e;if(!this._events[a])return!1;var c,u,d=this._events[a],f=arguments.length;if(d.fn){switch(d.once&&this.removeListener(e,d.fn,void 0,!0),f){case 1:return d.fn.call(d.context),!0;case 2:return d.fn.call(d.context,t),!0;case 3:return d.fn.call(d.context,t,n),!0;case 4:return d.fn.call(d.context,t,n,i),!0;case 5:return d.fn.call(d.context,t,n,i,o),!0;case 6:return d.fn.call(d.context,t,n,i,o,s),!0}for(u=1,c=new Array(f-1);u<f;u++)c[u-1]=arguments[u];d.fn.apply(d.context,c)}else{var h,l=d.length;for(u=0;u<l;u++)switch(d[u].once&&this.removeListener(e,d[u].fn,void 0,!0),f){case 1:d[u].fn.call(d[u].context);break;case 2:d[u].fn.call(d[u].context,t);break;case 3:d[u].fn.call(d[u].context,t,n);break;case 4:d[u].fn.call(d[u].context,t,n,i);break;default:if(!c)for(h=1,c=new Array(f-1);h<f;h++)c[h-1]=arguments[h];d[u].fn.apply(d[u].context,c)}}return!0},a.prototype.on=function(e,t,r){return o(this,e,t,r,!1)},a.prototype.once=function(e,t,r){return o(this,e,t,r,!0)},a.prototype.removeListener=function(e,t,n,i){var o=r?r+e:e;if(!this._events[o])return this;if(!t)return s(this,o),this;var a=this._events[o];if(a.fn)a.fn!==t||i&&!a.once||n&&a.context!==n||s(this,o);else{for(var c=0,u=[],d=a.length;c<d;c++)(a[c].fn!==t||i&&!a[c].once||n&&a[c].context!==n)&&u.push(a[c]);u.length?this._events[o]=1===u.length?u[0]:u:s(this,o)}return this},a.prototype.removeAllListeners=function(e){var t;return e?(t=r?r+e:e,this._events[t]&&s(this,t)):(this._events=new n,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=r,a.EventEmitter=a,e.exports=a},381:e=>{"use strict";var t,r="object"==typeof Reflect?Reflect:null,n=r&&"function"==typeof r.apply?r.apply:function(e,t,r){return Function.prototype.apply.call(e,t,r)};t=r&&"function"==typeof r.ownKeys?r.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var i=Number.isNaN||function(e){return e!=e};function o(){o.init.call(this)}e.exports=o,e.exports.once=function(e,t){return new Promise((function(r,n){function i(r){e.removeListener(t,o),n(r)}function o(){"function"==typeof e.removeListener&&e.removeListener("error",i),r([].slice.call(arguments))}b(e,t,o,{once:!0}),"error"!==t&&function(e,t){"function"==typeof e.on&&b(e,"error",t,{once:!0})}(e,i)}))},o.EventEmitter=o,o.prototype._events=void 0,o.prototype._eventsCount=0,o.prototype._maxListeners=void 0;var s=10;function a(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function c(e){return void 0===e._maxListeners?o.defaultMaxListeners:e._maxListeners}function u(e,t,r,n){var i,o,s,u;if(a(r),void 0===(o=e._events)?(o=e._events=Object.create(null),e._eventsCount=0):(void 0!==o.newListener&&(e.emit("newListener",t,r.listener?r.listener:r),o=e._events),s=o[t]),void 0===s)s=o[t]=r,++e._eventsCount;else if("function"==typeof s?s=o[t]=n?[r,s]:[s,r]:n?s.unshift(r):s.push(r),(i=c(e))>0&&s.length>i&&!s.warned){s.warned=!0;var d=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");d.name="MaxListenersExceededWarning",d.emitter=e,d.type=t,d.count=s.length,u=d,console&&console.warn&&console.warn(u)}return e}function d(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function f(e,t,r){var n={fired:!1,wrapFn:void 0,target:e,type:t,listener:r},i=d.bind(n);return i.listener=r,n.wrapFn=i,i}function h(e,t,r){var n=e._events;if(void 0===n)return[];var i=n[t];return void 0===i?[]:"function"==typeof i?r?[i.listener||i]:[i]:r?function(e){for(var t=new Array(e.length),r=0;r<t.length;++r)t[r]=e[r].listener||e[r];return t}(i):p(i,i.length)}function l(e){var t=this._events;if(void 0!==t){var r=t[e];if("function"==typeof r)return 1;if(void 0!==r)return r.length}return 0}function p(e,t){for(var r=new Array(t),n=0;n<t;++n)r[n]=e[n];return r}function b(e,t,r,n){if("function"==typeof e.on)n.once?e.once(t,r):e.on(t,r);else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function i(o){n.once&&e.removeEventListener(t,i),r(o)}))}}Object.defineProperty(o,"defaultMaxListeners",{enumerable:!0,get:function(){return s},set:function(e){if("number"!=typeof e||e<0||i(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");s=e}}),o.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},o.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||i(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},o.prototype.getMaxListeners=function(){return c(this)},o.prototype.emit=function(e){for(var t=[],r=1;r<arguments.length;r++)t.push(arguments[r]);var i="error"===e,o=this._events;if(void 0!==o)i=i&&void 0===o.error;else if(!i)return!1;if(i){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var a=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw a.context=s,a}var c=o[e];if(void 0===c)return!1;if("function"==typeof c)n(c,this,t);else{var u=c.length,d=p(c,u);for(r=0;r<u;++r)n(d[r],this,t)}return!0},o.prototype.addListener=function(e,t){return u(this,e,t,!1)},o.prototype.on=o.prototype.addListener,o.prototype.prependListener=function(e,t){return u(this,e,t,!0)},o.prototype.once=function(e,t){return a(t),this.on(e,f(this,e,t)),this},o.prototype.prependOnceListener=function(e,t){return a(t),this.prependListener(e,f(this,e,t)),this},o.prototype.removeListener=function(e,t){var r,n,i,o,s;if(a(t),void 0===(n=this._events))return this;if(void 0===(r=n[e]))return this;if(r===t||r.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete n[e],n.removeListener&&this.emit("removeListener",e,r.listener||t));else if("function"!=typeof r){for(i=-1,o=r.length-1;o>=0;o--)if(r[o]===t||r[o].listener===t){s=r[o].listener,i=o;break}if(i<0)return this;0===i?r.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(r,i),1===r.length&&(n[e]=r[0]),void 0!==n.removeListener&&this.emit("removeListener",e,s||t)}return this},o.prototype.off=o.prototype.removeListener,o.prototype.removeAllListeners=function(e){var t,r,n;if(void 0===(r=this._events))return this;if(void 0===r.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==r[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete r[e]),this;if(0===arguments.length){var i,o=Object.keys(r);for(n=0;n<o.length;++n)"removeListener"!==(i=o[n])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=r[e]))this.removeListener(e,t);else if(void 0!==t)for(n=t.length-1;n>=0;n--)this.removeListener(e,t[n]);return this},o.prototype.listeners=function(e){return h(this,e,!0)},o.prototype.rawListeners=function(e){return h(this,e,!1)},o.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):l.call(e,t)},o.prototype.listenerCount=l,o.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}},1804:(e,t,r)=>{var n=r(6608).Buffer,i=r(5035);e.exports=function(e,t,r,o){if(n.isBuffer(e)||(e=n.from(e,"binary")),t&&(n.isBuffer(t)||(t=n.from(t,"binary")),8!==t.length))throw new RangeError("salt should be Buffer with 8 byte length");for(var s=r/8,a=n.alloc(s),c=n.alloc(o||0),u=n.alloc(0);s>0||o>0;){var d=new i;d.update(u),d.update(e),t&&d.update(t),u=d.digest();var f=0;if(s>0){var h=a.length-s;f=Math.min(s,u.length),u.copy(a,h,0,f),s-=f}if(f<u.length&&o>0){var l=c.length-o,p=Math.min(o,u.length-f);u.copy(c,l,f,f+p),o-=p}}return u.fill(0),{key:a,iv:c}}},800:(e,t,r)=>{"use strict";var n=r(6608).Buffer,i=r(1094).Transform;function o(e){i.call(this),this._block=n.allocUnsafe(e),this._blockSize=e,this._blockOffset=0,this._length=[0,0,0,0],this._finalized=!1}r(1193)(o,i),o.prototype._transform=function(e,t,r){var n=null;try{this.update(e,t)}catch(e){n=e}r(n)},o.prototype._flush=function(e){var t=null;try{this.push(this.digest())}catch(e){t=e}e(t)},o.prototype.update=function(e,t){if(function(e){if(!n.isBuffer(e)&&"string"!=typeof e)throw new TypeError("Data must be a string or a buffer")}(e),this._finalized)throw new Error("Digest already called");n.isBuffer(e)||(e=n.from(e,t));for(var r=this._block,i=0;this._blockOffset+e.length-i>=this._blockSize;){for(var o=this._blockOffset;o<this._blockSize;)r[o++]=e[i++];this._update(),this._blockOffset=0}for(;i<e.length;)r[this._blockOffset++]=e[i++];for(var s=0,a=8*e.length;a>0;++s)this._length[s]+=a,(a=this._length[s]/4294967296|0)>0&&(this._length[s]-=4294967296*a);return this},o.prototype._update=function(){throw new Error("_update is not implemented")},o.prototype.digest=function(e){if(this._finalized)throw new Error("Digest already called");this._finalized=!0;var t=this._digest();void 0!==e&&(t=t.toString(e)),this._block.fill(0),this._blockOffset=0;for(var r=0;r<4;++r)this._length[r]=0;return t},o.prototype._digest=function(){throw new Error("_digest is not implemented")},e.exports=o},1631:(e,t,r)=>{var n=t;n.utils=r(7905),n.common=r(4427),n.sha=r(1822),n.ripemd=r(7317),n.hmac=r(7309),n.sha1=n.sha.sha1,n.sha256=n.sha.sha256,n.sha224=n.sha.sha224,n.sha384=n.sha.sha384,n.sha512=n.sha.sha512,n.ripemd160=n.ripemd.ripemd160},4427:(e,t,r)=>{"use strict";var n=r(7905),i=r(5578);function o(){this.pending=null,this.pendingTotal=0,this.blockSize=this.constructor.blockSize,this.outSize=this.constructor.outSize,this.hmacStrength=this.constructor.hmacStrength,this.padLength=this.constructor.padLength/8,this.endian="big",this._delta8=this.blockSize/8,this._delta32=this.blockSize/32}t.BlockHash=o,o.prototype.update=function(e,t){if(e=n.toArray(e,t),this.pending?this.pending=this.pending.concat(e):this.pending=e,this.pendingTotal+=e.length,this.pending.length>=this._delta8){var r=(e=this.pending).length%this._delta8;this.pending=e.slice(e.length-r,e.length),0===this.pending.length&&(this.pending=null),e=n.join32(e,0,e.length-r,this.endian);for(var i=0;i<e.length;i+=this._delta32)this._update(e,i,i+this._delta32)}return this},o.prototype.digest=function(e){return this.update(this._pad()),i(null===this.pending),this._digest(e)},o.prototype._pad=function(){var e=this.pendingTotal,t=this._delta8,r=t-(e+this.padLength)%t,n=new Array(r+this.padLength);n[0]=128;for(var i=1;i<r;i++)n[i]=0;if(e<<=3,"big"===this.endian){for(var o=8;o<this.padLength;o++)n[i++]=0;n[i++]=0,n[i++]=0,n[i++]=0,n[i++]=0,n[i++]=e>>>24&255,n[i++]=e>>>16&255,n[i++]=e>>>8&255,n[i++]=255&e}else for(n[i++]=255&e,n[i++]=e>>>8&255,n[i++]=e>>>16&255,n[i++]=e>>>24&255,n[i++]=0,n[i++]=0,n[i++]=0,n[i++]=0,o=8;o<this.padLength;o++)n[i++]=0;return n}},7309:(e,t,r)=>{"use strict";var n=r(7905),i=r(5578);function o(e,t,r){if(!(this instanceof o))return new o(e,t,r);this.Hash=e,this.blockSize=e.blockSize/8,this.outSize=e.outSize/8,this.inner=null,this.outer=null,this._init(n.toArray(t,r))}e.exports=o,o.prototype._init=function(e){e.length>this.blockSize&&(e=(new this.Hash).update(e).digest()),i(e.length<=this.blockSize);for(var t=e.length;t<this.blockSize;t++)e.push(0);for(t=0;t<e.length;t++)e[t]^=54;for(this.inner=(new this.Hash).update(e),t=0;t<e.length;t++)e[t]^=106;this.outer=(new this.Hash).update(e)},o.prototype.update=function(e,t){return this.inner.update(e,t),this},o.prototype.digest=function(e){return this.outer.update(this.inner.digest()),this.outer.digest(e)}},7317:(e,t,r)=>{"use strict";var n=r(7905),i=r(4427),o=n.rotl32,s=n.sum32,a=n.sum32_3,c=n.sum32_4,u=i.BlockHash;function d(){if(!(this instanceof d))return new d;u.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.endian="little"}function f(e,t,r,n){return e<=15?t^r^n:e<=31?t&r|~t&n:e<=47?(t|~r)^n:e<=63?t&n|r&~n:t^(r|~n)}function h(e){return e<=15?0:e<=31?1518500249:e<=47?1859775393:e<=63?2400959708:2840853838}function l(e){return e<=15?1352829926:e<=31?1548603684:e<=47?1836072691:e<=63?2053994217:0}n.inherits(d,u),t.ripemd160=d,d.blockSize=512,d.outSize=160,d.hmacStrength=192,d.padLength=64,d.prototype._update=function(e,t){for(var r=this.h[0],n=this.h[1],i=this.h[2],u=this.h[3],d=this.h[4],g=r,v=n,w=i,_=u,A=d,S=0;S<80;S++){var M=s(o(c(r,f(S,n,i,u),e[p[S]+t],h(S)),y[S]),d);r=d,d=u,u=o(i,10),i=n,n=M,M=s(o(c(g,f(79-S,v,w,_),e[b[S]+t],l(S)),m[S]),A),g=A,A=_,_=o(w,10),w=v,v=M}M=a(this.h[1],i,_),this.h[1]=a(this.h[2],u,A),this.h[2]=a(this.h[3],d,g),this.h[3]=a(this.h[4],r,v),this.h[4]=a(this.h[0],n,w),this.h[0]=M},d.prototype._digest=function(e){return"hex"===e?n.toHex32(this.h,"little"):n.split32(this.h,"little")};var p=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],b=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],y=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],m=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]},1822:(e,t,r)=>{"use strict";t.sha1=r(2750),t.sha224=r(7485),t.sha256=r(7292),t.sha384=r(696),t.sha512=r(8889)},2750:(e,t,r)=>{"use strict";var n=r(7905),i=r(4427),o=r(5660),s=n.rotl32,a=n.sum32,c=n.sum32_5,u=o.ft_1,d=i.BlockHash,f=[1518500249,1859775393,2400959708,3395469782];function h(){if(!(this instanceof h))return new h;d.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.W=new Array(80)}n.inherits(h,d),e.exports=h,h.blockSize=512,h.outSize=160,h.hmacStrength=80,h.padLength=64,h.prototype._update=function(e,t){for(var r=this.W,n=0;n<16;n++)r[n]=e[t+n];for(;n<r.length;n++)r[n]=s(r[n-3]^r[n-8]^r[n-14]^r[n-16],1);var i=this.h[0],o=this.h[1],d=this.h[2],h=this.h[3],l=this.h[4];for(n=0;n<r.length;n++){var p=~~(n/20),b=c(s(i,5),u(p,o,d,h),l,r[n],f[p]);l=h,h=d,d=s(o,30),o=i,i=b}this.h[0]=a(this.h[0],i),this.h[1]=a(this.h[1],o),this.h[2]=a(this.h[2],d),this.h[3]=a(this.h[3],h),this.h[4]=a(this.h[4],l)},h.prototype._digest=function(e){return"hex"===e?n.toHex32(this.h,"big"):n.split32(this.h,"big")}},7485:(e,t,r)=>{"use strict";var n=r(7905),i=r(7292);function o(){if(!(this instanceof o))return new o;i.call(this),this.h=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428]}n.inherits(o,i),e.exports=o,o.blockSize=512,o.outSize=224,o.hmacStrength=192,o.padLength=64,o.prototype._digest=function(e){return"hex"===e?n.toHex32(this.h.slice(0,7),"big"):n.split32(this.h.slice(0,7),"big")}},7292:(e,t,r)=>{"use strict";var n=r(7905),i=r(4427),o=r(5660),s=r(5578),a=n.sum32,c=n.sum32_4,u=n.sum32_5,d=o.ch32,f=o.maj32,h=o.s0_256,l=o.s1_256,p=o.g0_256,b=o.g1_256,y=i.BlockHash,m=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function g(){if(!(this instanceof g))return new g;y.call(this),this.h=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],this.k=m,this.W=new Array(64)}n.inherits(g,y),e.exports=g,g.blockSize=512,g.outSize=256,g.hmacStrength=192,g.padLength=64,g.prototype._update=function(e,t){for(var r=this.W,n=0;n<16;n++)r[n]=e[t+n];for(;n<r.length;n++)r[n]=c(b(r[n-2]),r[n-7],p(r[n-15]),r[n-16]);var i=this.h[0],o=this.h[1],y=this.h[2],m=this.h[3],g=this.h[4],v=this.h[5],w=this.h[6],_=this.h[7];for(s(this.k.length===r.length),n=0;n<r.length;n++){var A=u(_,l(g),d(g,v,w),this.k[n],r[n]),S=a(h(i),f(i,o,y));_=w,w=v,v=g,g=a(m,A),m=y,y=o,o=i,i=a(A,S)}this.h[0]=a(this.h[0],i),this.h[1]=a(this.h[1],o),this.h[2]=a(this.h[2],y),this.h[3]=a(this.h[3],m),this.h[4]=a(this.h[4],g),this.h[5]=a(this.h[5],v),this.h[6]=a(this.h[6],w),this.h[7]=a(this.h[7],_)},g.prototype._digest=function(e){return"hex"===e?n.toHex32(this.h,"big"):n.split32(this.h,"big")}},696:(e,t,r)=>{"use strict";var n=r(7905),i=r(8889);function o(){if(!(this instanceof o))return new o;i.call(this),this.h=[3418070365,3238371032,1654270250,914150663,2438529370,812702999,355462360,4144912697,1731405415,4290775857,2394180231,1750603025,3675008525,1694076839,1203062813,3204075428]}n.inherits(o,i),e.exports=o,o.blockSize=1024,o.outSize=384,o.hmacStrength=192,o.padLength=128,o.prototype._digest=function(e){return"hex"===e?n.toHex32(this.h.slice(0,12),"big"):n.split32(this.h.slice(0,12),"big")}},8889:(e,t,r)=>{"use strict";var n=r(7905),i=r(4427),o=r(5578),s=n.rotr64_hi,a=n.rotr64_lo,c=n.shr64_hi,u=n.shr64_lo,d=n.sum64,f=n.sum64_hi,h=n.sum64_lo,l=n.sum64_4_hi,p=n.sum64_4_lo,b=n.sum64_5_hi,y=n.sum64_5_lo,m=i.BlockHash,g=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591];function v(){if(!(this instanceof v))return new v;m.call(this),this.h=[1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209],this.k=g,this.W=new Array(160)}function w(e,t,r,n,i){var o=e&r^~e&i;return o<0&&(o+=4294967296),o}function _(e,t,r,n,i,o){var s=t&n^~t&o;return s<0&&(s+=4294967296),s}function A(e,t,r,n,i){var o=e&r^e&i^r&i;return o<0&&(o+=4294967296),o}function S(e,t,r,n,i,o){var s=t&n^t&o^n&o;return s<0&&(s+=4294967296),s}function M(e,t){var r=s(e,t,28)^s(t,e,2)^s(t,e,7);return r<0&&(r+=4294967296),r}function C(e,t){var r=a(e,t,28)^a(t,e,2)^a(t,e,7);return r<0&&(r+=4294967296),r}function T(e,t){var r=a(e,t,14)^a(e,t,18)^a(t,e,9);return r<0&&(r+=4294967296),r}function E(e,t){var r=s(e,t,1)^s(e,t,8)^c(e,t,7);return r<0&&(r+=4294967296),r}function k(e,t){var r=a(e,t,1)^a(e,t,8)^u(e,t,7);return r<0&&(r+=4294967296),r}function I(e,t){var r=a(e,t,19)^a(t,e,29)^u(e,t,6);return r<0&&(r+=4294967296),r}n.inherits(v,m),e.exports=v,v.blockSize=1024,v.outSize=512,v.hmacStrength=192,v.padLength=128,v.prototype._prepareBlock=function(e,t){for(var r=this.W,n=0;n<32;n++)r[n]=e[t+n];for(;n<r.length;n+=2){var i=(y=r[n-4],m=r[n-3],g=void 0,(g=s(y,m,19)^s(m,y,29)^c(y,m,6))<0&&(g+=4294967296),g),o=I(r[n-4],r[n-3]),a=r[n-14],u=r[n-13],d=E(r[n-30],r[n-29]),f=k(r[n-30],r[n-29]),h=r[n-32],b=r[n-31];r[n]=l(i,o,a,u,d,f,h,b),r[n+1]=p(i,o,a,u,d,f,h,b)}var y,m,g},v.prototype._update=function(e,t){this._prepareBlock(e,t);var r,n,i,a=this.W,c=this.h[0],u=this.h[1],l=this.h[2],p=this.h[3],m=this.h[4],g=this.h[5],v=this.h[6],E=this.h[7],k=this.h[8],I=this.h[9],x=this.h[10],B=this.h[11],U=this.h[12],P=this.h[13],O=this.h[14],R=this.h[15];o(this.k.length===a.length);for(var L=0;L<a.length;L+=2){var N=O,j=R,D=(i=void 0,(i=s(r=k,n=I,14)^s(r,n,18)^s(n,r,9))<0&&(i+=4294967296),i),F=T(k,I),H=w(k,0,x,0,U),q=_(0,I,0,B,0,P),$=this.k[L],V=this.k[L+1],z=a[L],G=a[L+1],K=b(N,j,D,F,H,q,$,V,z,G),W=y(N,j,D,F,H,q,$,V,z,G);N=M(c,u),j=C(c,u),D=A(c,0,l,0,m),F=S(0,u,0,p,0,g);var J=f(N,j,D,F),Z=h(N,j,D,F);O=U,R=P,U=x,P=B,x=k,B=I,k=f(v,E,K,W),I=h(E,E,K,W),v=m,E=g,m=l,g=p,l=c,p=u,c=f(K,W,J,Z),u=h(K,W,J,Z)}d(this.h,0,c,u),d(this.h,2,l,p),d(this.h,4,m,g),d(this.h,6,v,E),d(this.h,8,k,I),d(this.h,10,x,B),d(this.h,12,U,P),d(this.h,14,O,R)},v.prototype._digest=function(e){return"hex"===e?n.toHex32(this.h,"big"):n.split32(this.h,"big")}},5660:(e,t,r)=>{"use strict";var n=r(7905).rotr32;function i(e,t,r){return e&t^~e&r}function o(e,t,r){return e&t^e&r^t&r}function s(e,t,r){return e^t^r}t.ft_1=function(e,t,r,n){return 0===e?i(t,r,n):1===e||3===e?s(t,r,n):2===e?o(t,r,n):void 0},t.ch32=i,t.maj32=o,t.p32=s,t.s0_256=function(e){return n(e,2)^n(e,13)^n(e,22)},t.s1_256=function(e){return n(e,6)^n(e,11)^n(e,25)},t.g0_256=function(e){return n(e,7)^n(e,18)^e>>>3},t.g1_256=function(e){return n(e,17)^n(e,19)^e>>>10}},7905:(e,t,r)=>{"use strict";var n=r(5578),i=r(1193);function o(e,t){return 55296==(64512&e.charCodeAt(t))&&!(t<0||t+1>=e.length)&&56320==(64512&e.charCodeAt(t+1))}function s(e){return(e>>>24|e>>>8&65280|e<<8&16711680|(255&e)<<24)>>>0}function a(e){return 1===e.length?"0"+e:e}function c(e){return 7===e.length?"0"+e:6===e.length?"00"+e:5===e.length?"000"+e:4===e.length?"0000"+e:3===e.length?"00000"+e:2===e.length?"000000"+e:1===e.length?"0000000"+e:e}t.inherits=i,t.toArray=function(e,t){if(Array.isArray(e))return e.slice();if(!e)return[];var r=[];if("string"==typeof e)if(t){if("hex"===t)for((e=e.replace(/[^a-z0-9]+/gi,"")).length%2!=0&&(e="0"+e),i=0;i<e.length;i+=2)r.push(parseInt(e[i]+e[i+1],16))}else for(var n=0,i=0;i<e.length;i++){var s=e.charCodeAt(i);s<128?r[n++]=s:s<2048?(r[n++]=s>>6|192,r[n++]=63&s|128):o(e,i)?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++i)),r[n++]=s>>18|240,r[n++]=s>>12&63|128,r[n++]=s>>6&63|128,r[n++]=63&s|128):(r[n++]=s>>12|224,r[n++]=s>>6&63|128,r[n++]=63&s|128)}else for(i=0;i<e.length;i++)r[i]=0|e[i];return r},t.toHex=function(e){for(var t="",r=0;r<e.length;r++)t+=a(e[r].toString(16));return t},t.htonl=s,t.toHex32=function(e,t){for(var r="",n=0;n<e.length;n++){var i=e[n];"little"===t&&(i=s(i)),r+=c(i.toString(16))}return r},t.zero2=a,t.zero8=c,t.join32=function(e,t,r,i){var o=r-t;n(o%4==0);for(var s=new Array(o/4),a=0,c=t;a<s.length;a++,c+=4){var u;u="big"===i?e[c]<<24|e[c+1]<<16|e[c+2]<<8|e[c+3]:e[c+3]<<24|e[c+2]<<16|e[c+1]<<8|e[c],s[a]=u>>>0}return s},t.split32=function(e,t){for(var r=new Array(4*e.length),n=0,i=0;n<e.length;n++,i+=4){var o=e[n];"big"===t?(r[i]=o>>>24,r[i+1]=o>>>16&255,r[i+2]=o>>>8&255,r[i+3]=255&o):(r[i+3]=o>>>24,r[i+2]=o>>>16&255,r[i+1]=o>>>8&255,r[i]=255&o)}return r},t.rotr32=function(e,t){return e>>>t|e<<32-t},t.rotl32=function(e,t){return e<<t|e>>>32-t},t.sum32=function(e,t){return e+t>>>0},t.sum32_3=function(e,t,r){return e+t+r>>>0},t.sum32_4=function(e,t,r,n){return e+t+r+n>>>0},t.sum32_5=function(e,t,r,n,i){return e+t+r+n+i>>>0},t.sum64=function(e,t,r,n){var i=e[t],o=n+e[t+1]>>>0,s=(o<n?1:0)+r+i;e[t]=s>>>0,e[t+1]=o},t.sum64_hi=function(e,t,r,n){return(t+n>>>0<t?1:0)+e+r>>>0},t.sum64_lo=function(e,t,r,n){return t+n>>>0},t.sum64_4_hi=function(e,t,r,n,i,o,s,a){var c=0,u=t;return c+=(u=u+n>>>0)<t?1:0,c+=(u=u+o>>>0)<o?1:0,e+r+i+s+(c+=(u=u+a>>>0)<a?1:0)>>>0},t.sum64_4_lo=function(e,t,r,n,i,o,s,a){return t+n+o+a>>>0},t.sum64_5_hi=function(e,t,r,n,i,o,s,a,c,u){var d=0,f=t;return d+=(f=f+n>>>0)<t?1:0,d+=(f=f+o>>>0)<o?1:0,d+=(f=f+a>>>0)<a?1:0,e+r+i+s+c+(d+=(f=f+u>>>0)<u?1:0)>>>0},t.sum64_5_lo=function(e,t,r,n,i,o,s,a,c,u){return t+n+o+a+u>>>0},t.rotr64_hi=function(e,t,r){return(t<<32-r|e>>>r)>>>0},t.rotr64_lo=function(e,t,r){return(e<<32-r|t>>>r)>>>0},t.shr64_hi=function(e,t,r){return e>>>r},t.shr64_lo=function(e,t,r){return(e<<32-r|t>>>r)>>>0}},2519:(e,t,r)=>{"use strict";var n=r(1631),i=r(4209),o=r(5578);function s(e){if(!(this instanceof s))return new s(e);this.hash=e.hash,this.predResist=!!e.predResist,this.outLen=this.hash.outSize,this.minEntropy=e.minEntropy||this.hash.hmacStrength,this._reseed=null,this.reseedInterval=null,this.K=null,this.V=null;var t=i.toArray(e.entropy,e.entropyEnc||"hex"),r=i.toArray(e.nonce,e.nonceEnc||"hex"),n=i.toArray(e.pers,e.persEnc||"hex");o(t.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._init(t,r,n)}e.exports=s,s.prototype._init=function(e,t,r){var n=e.concat(t).concat(r);this.K=new Array(this.outLen/8),this.V=new Array(this.outLen/8);for(var i=0;i<this.V.length;i++)this.K[i]=0,this.V[i]=1;this._update(n),this._reseed=1,this.reseedInterval=281474976710656},s.prototype._hmac=function(){return new n.hmac(this.hash,this.K)},s.prototype._update=function(e){var t=this._hmac().update(this.V).update([0]);e&&(t=t.update(e)),this.K=t.digest(),this.V=this._hmac().update(this.V).digest(),e&&(this.K=this._hmac().update(this.V).update([1]).update(e).digest(),this.V=this._hmac().update(this.V).digest())},s.prototype.reseed=function(e,t,r,n){"string"!=typeof t&&(n=r,r=t,t=null),e=i.toArray(e,t),r=i.toArray(r,n),o(e.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._update(e.concat(r||[])),this._reseed=1},s.prototype.generate=function(e,t,r,n){if(this._reseed>this.reseedInterval)throw new Error("Reseed is required");"string"!=typeof t&&(n=r,r=t,t=null),r&&(r=i.toArray(r,n||"hex"),this._update(r));for(var o=[];o.length<e;)this.V=this._hmac().update(this.V).digest(),o=o.concat(this.V);var s=o.slice(0,e);return this._update(r),this._reseed++,i.encode(s,t)}},3328:(e,t)=>{t.read=function(e,t,r,n,i){var o,s,a=8*i-n-1,c=(1<<a)-1,u=c>>1,d=-7,f=r?i-1:0,h=r?-1:1,l=e[t+f];for(f+=h,o=l&(1<<-d)-1,l>>=-d,d+=a;d>0;o=256*o+e[t+f],f+=h,d-=8);for(s=o&(1<<-d)-1,o>>=-d,d+=n;d>0;s=256*s+e[t+f],f+=h,d-=8);if(0===o)o=1-u;else{if(o===c)return s?NaN:1/0*(l?-1:1);s+=Math.pow(2,n),o-=u}return(l?-1:1)*s*Math.pow(2,o-n)},t.write=function(e,t,r,n,i,o){var s,a,c,u=8*o-i-1,d=(1<<u)-1,f=d>>1,h=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,l=n?0:o-1,p=n?1:-1,b=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,s=d):(s=Math.floor(Math.log(t)/Math.LN2),t*(c=Math.pow(2,-s))<1&&(s--,c*=2),(t+=s+f>=1?h/c:h*Math.pow(2,1-f))*c>=2&&(s++,c/=2),s+f>=d?(a=0,s=d):s+f>=1?(a=(t*c-1)*Math.pow(2,i),s+=f):(a=t*Math.pow(2,f-1)*Math.pow(2,i),s=0));i>=8;e[r+l]=255&a,l+=p,a/=256,i-=8);for(s=s<<i|a,u+=i;u>0;e[r+l]=255&s,l+=p,s/=256,u-=8);e[r+l-p]|=128*b}},1193:e=>{"function"==typeof Object.create?e.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:e.exports=function(e,t){if(t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}}},5035:(e,t,r)=>{"use strict";var n=r(1193),i=r(800),o=r(6608).Buffer,s=new Array(16);function a(){i.call(this,64),this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878}function c(e,t){return e<<t|e>>>32-t}function u(e,t,r,n,i,o,s){return c(e+(t&r|~t&n)+i+o|0,s)+t|0}function d(e,t,r,n,i,o,s){return c(e+(t&n|r&~n)+i+o|0,s)+t|0}function f(e,t,r,n,i,o,s){return c(e+(t^r^n)+i+o|0,s)+t|0}function h(e,t,r,n,i,o,s){return c(e+(r^(t|~n))+i+o|0,s)+t|0}n(a,i),a.prototype._update=function(){for(var e=s,t=0;t<16;++t)e[t]=this._block.readInt32LE(4*t);var r=this._a,n=this._b,i=this._c,o=this._d;r=u(r,n,i,o,e[0],3614090360,7),o=u(o,r,n,i,e[1],3905402710,12),i=u(i,o,r,n,e[2],606105819,17),n=u(n,i,o,r,e[3],3250441966,22),r=u(r,n,i,o,e[4],4118548399,7),o=u(o,r,n,i,e[5],1200080426,12),i=u(i,o,r,n,e[6],2821735955,17),n=u(n,i,o,r,e[7],4249261313,22),r=u(r,n,i,o,e[8],1770035416,7),o=u(o,r,n,i,e[9],2336552879,12),i=u(i,o,r,n,e[10],4294925233,17),n=u(n,i,o,r,e[11],2304563134,22),r=u(r,n,i,o,e[12],1804603682,7),o=u(o,r,n,i,e[13],4254626195,12),i=u(i,o,r,n,e[14],2792965006,17),r=d(r,n=u(n,i,o,r,e[15],1236535329,22),i,o,e[1],4129170786,5),o=d(o,r,n,i,e[6],3225465664,9),i=d(i,o,r,n,e[11],643717713,14),n=d(n,i,o,r,e[0],3921069994,20),r=d(r,n,i,o,e[5],3593408605,5),o=d(o,r,n,i,e[10],38016083,9),i=d(i,o,r,n,e[15],3634488961,14),n=d(n,i,o,r,e[4],3889429448,20),r=d(r,n,i,o,e[9],568446438,5),o=d(o,r,n,i,e[14],3275163606,9),i=d(i,o,r,n,e[3],4107603335,14),n=d(n,i,o,r,e[8],1163531501,20),r=d(r,n,i,o,e[13],2850285829,5),o=d(o,r,n,i,e[2],4243563512,9),i=d(i,o,r,n,e[7],1735328473,14),r=f(r,n=d(n,i,o,r,e[12],2368359562,20),i,o,e[5],4294588738,4),o=f(o,r,n,i,e[8],2272392833,11),i=f(i,o,r,n,e[11],1839030562,16),n=f(n,i,o,r,e[14],4259657740,23),r=f(r,n,i,o,e[1],2763975236,4),o=f(o,r,n,i,e[4],1272893353,11),i=f(i,o,r,n,e[7],4139469664,16),n=f(n,i,o,r,e[10],3200236656,23),r=f(r,n,i,o,e[13],681279174,4),o=f(o,r,n,i,e[0],3936430074,11),i=f(i,o,r,n,e[3],3572445317,16),n=f(n,i,o,r,e[6],76029189,23),r=f(r,n,i,o,e[9],3654602809,4),o=f(o,r,n,i,e[12],3873151461,11),i=f(i,o,r,n,e[15],530742520,16),r=h(r,n=f(n,i,o,r,e[2],3299628645,23),i,o,e[0],4096336452,6),o=h(o,r,n,i,e[7],1126891415,10),i=h(i,o,r,n,e[14],2878612391,15),n=h(n,i,o,r,e[5],4237533241,21),r=h(r,n,i,o,e[12],1700485571,6),o=h(o,r,n,i,e[3],2399980690,10),i=h(i,o,r,n,e[10],4293915773,15),n=h(n,i,o,r,e[1],2240044497,21),r=h(r,n,i,o,e[8],1873313359,6),o=h(o,r,n,i,e[15],4264355552,10),i=h(i,o,r,n,e[6],2734768916,15),n=h(n,i,o,r,e[13],1309151649,21),r=h(r,n,i,o,e[4],4149444226,6),o=h(o,r,n,i,e[11],3174756917,10),i=h(i,o,r,n,e[2],718787259,15),n=h(n,i,o,r,e[9],3951481745,21),this._a=this._a+r|0,this._b=this._b+n|0,this._c=this._c+i|0,this._d=this._d+o|0},a.prototype._digest=function(){this._block[this._blockOffset++]=128,this._blockOffset>56&&(this._block.fill(0,this._blockOffset,64),this._update(),this._blockOffset=0),this._block.fill(0,this._blockOffset,56),this._block.writeUInt32LE(this._length[0],56),this._block.writeUInt32LE(this._length[1],60),this._update();var e=o.allocUnsafe(16);return e.writeInt32LE(this._a,0),e.writeInt32LE(this._b,4),e.writeInt32LE(this._c,8),e.writeInt32LE(this._d,12),e},e.exports=a},4442:(e,t,r)=>{var n=r(4619),i=r(5442);function o(e){this.rand=e||new i.Rand}e.exports=o,o.create=function(e){return new o(e)},o.prototype._randbelow=function(e){var t=e.bitLength(),r=Math.ceil(t/8);do{var i=new n(this.rand.generate(r))}while(i.cmp(e)>=0);return i},o.prototype._randrange=function(e,t){var r=t.sub(e);return e.add(this._randbelow(r))},o.prototype.test=function(e,t,r){var i=e.bitLength(),o=n.mont(e),s=new n(1).toRed(o);t||(t=Math.max(1,i/48|0));for(var a=e.subn(1),c=0;!a.testn(c);c++);for(var u=e.shrn(c),d=a.toRed(o);t>0;t--){var f=this._randrange(new n(2),a);r&&r(f);var h=f.toRed(o).redPow(u);if(0!==h.cmp(s)&&0!==h.cmp(d)){for(var l=1;l<c;l++){if(0===(h=h.redSqr()).cmp(s))return!1;if(0===h.cmp(d))break}if(l===c)return!1}}return!0},o.prototype.getDivisor=function(e,t){var r=e.bitLength(),i=n.mont(e),o=new n(1).toRed(i);t||(t=Math.max(1,r/48|0));for(var s=e.subn(1),a=0;!s.testn(a);a++);for(var c=e.shrn(a),u=s.toRed(i);t>0;t--){var d=this._randrange(new n(2),s),f=e.gcd(d);if(0!==f.cmpn(1))return f;var h=d.toRed(i).redPow(c);if(0!==h.cmp(o)&&0!==h.cmp(u)){for(var l=1;l<a;l++){if(0===(h=h.redSqr()).cmp(o))return h.fromRed().subn(1).gcd(e);if(0===h.cmp(u))break}if(l===a)return(h=h.redSqr()).fromRed().subn(1).gcd(e)}}return!1}},5578:e=>{function t(e,t){if(!e)throw new Error(t||"Assertion failed")}e.exports=t,t.equal=function(e,t,r){if(e!=t)throw new Error(r||"Assertion failed: "+e+" != "+t)}},4209:(e,t)=>{"use strict";var r=t;function n(e){return 1===e.length?"0"+e:e}function i(e){for(var t="",r=0;r<e.length;r++)t+=n(e[r].toString(16));return t}r.toArray=function(e,t){if(Array.isArray(e))return e.slice();if(!e)return[];var r=[];if("string"!=typeof e){for(var n=0;n<e.length;n++)r[n]=0|e[n];return r}if("hex"===t)for((e=e.replace(/[^a-z0-9]+/gi,"")).length%2!=0&&(e="0"+e),n=0;n<e.length;n+=2)r.push(parseInt(e[n]+e[n+1],16));else for(n=0;n<e.length;n++){var i=e.charCodeAt(n),o=i>>8,s=255&i;o?r.push(o,s):r.push(s)}return r},r.zero2=n,r.toHex=i,r.encode=function(e,t){return"hex"===t?i(e):e}},5651:(e,t,r)=>{"use strict";var n=r(5737);t.certificate=r(7467);var i=n.define("RSAPrivateKey",(function(){this.seq().obj(this.key("version").int(),this.key("modulus").int(),this.key("publicExponent").int(),this.key("privateExponent").int(),this.key("prime1").int(),this.key("prime2").int(),this.key("exponent1").int(),this.key("exponent2").int(),this.key("coefficient").int())}));t.RSAPrivateKey=i;var o=n.define("RSAPublicKey",(function(){this.seq().obj(this.key("modulus").int(),this.key("publicExponent").int())}));t.RSAPublicKey=o;var s=n.define("SubjectPublicKeyInfo",(function(){this.seq().obj(this.key("algorithm").use(a),this.key("subjectPublicKey").bitstr())}));t.PublicKey=s;var a=n.define("AlgorithmIdentifier",(function(){this.seq().obj(this.key("algorithm").objid(),this.key("none").null_().optional(),this.key("curve").objid().optional(),this.key("params").seq().obj(this.key("p").int(),this.key("q").int(),this.key("g").int()).optional())})),c=n.define("PrivateKeyInfo",(function(){this.seq().obj(this.key("version").int(),this.key("algorithm").use(a),this.key("subjectPrivateKey").octstr())}));t.PrivateKey=c;var u=n.define("EncryptedPrivateKeyInfo",(function(){this.seq().obj(this.key("algorithm").seq().obj(this.key("id").objid(),this.key("decrypt").seq().obj(this.key("kde").seq().obj(this.key("id").objid(),this.key("kdeparams").seq().obj(this.key("salt").octstr(),this.key("iters").int())),this.key("cipher").seq().obj(this.key("algo").objid(),this.key("iv").octstr()))),this.key("subjectPrivateKey").octstr())}));t.EncryptedPrivateKey=u;var d=n.define("DSAPrivateKey",(function(){this.seq().obj(this.key("version").int(),this.key("p").int(),this.key("q").int(),this.key("g").int(),this.key("pub_key").int(),this.key("priv_key").int())}));t.DSAPrivateKey=d,t.DSAparam=n.define("DSAparam",(function(){this.int()}));var f=n.define("ECPrivateKey",(function(){this.seq().obj(this.key("version").int(),this.key("privateKey").octstr(),this.key("parameters").optional().explicit(0).use(h),this.key("publicKey").optional().explicit(1).bitstr())}));t.ECPrivateKey=f;var h=n.define("ECParameters",(function(){this.choice({namedCurve:this.objid()})}));t.signature=n.define("signature",(function(){this.seq().obj(this.key("r").int(),this.key("s").int())}))},7467:(e,t,r)=>{"use strict";var n=r(5737),i=n.define("Time",(function(){this.choice({utcTime:this.utctime(),generalTime:this.gentime()})})),o=n.define("AttributeTypeValue",(function(){this.seq().obj(this.key("type").objid(),this.key("value").any())})),s=n.define("AlgorithmIdentifier",(function(){this.seq().obj(this.key("algorithm").objid(),this.key("parameters").optional(),this.key("curve").objid().optional())})),a=n.define("SubjectPublicKeyInfo",(function(){this.seq().obj(this.key("algorithm").use(s),this.key("subjectPublicKey").bitstr())})),c=n.define("RelativeDistinguishedName",(function(){this.setof(o)})),u=n.define("RDNSequence",(function(){this.seqof(c)})),d=n.define("Name",(function(){this.choice({rdnSequence:this.use(u)})})),f=n.define("Validity",(function(){this.seq().obj(this.key("notBefore").use(i),this.key("notAfter").use(i))})),h=n.define("Extension",(function(){this.seq().obj(this.key("extnID").objid(),this.key("critical").bool().def(!1),this.key("extnValue").octstr())})),l=n.define("TBSCertificate",(function(){this.seq().obj(this.key("version").explicit(0).int().optional(),this.key("serialNumber").int(),this.key("signature").use(s),this.key("issuer").use(d),this.key("validity").use(f),this.key("subject").use(d),this.key("subjectPublicKeyInfo").use(a),this.key("issuerUniqueID").implicit(1).bitstr().optional(),this.key("subjectUniqueID").implicit(2).bitstr().optional(),this.key("extensions").explicit(3).seqof(h).optional())})),p=n.define("X509Certificate",(function(){this.seq().obj(this.key("tbsCertificate").use(l),this.key("signatureAlgorithm").use(s),this.key("signatureValue").bitstr())}));e.exports=p},2011:(e,t,r)=>{var n=/Proc-Type: 4,ENCRYPTED[\n\r]+DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)[\n\r]+([0-9A-z\n\r+/=]+)[\n\r]+/m,i=/^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----/m,o=/^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----([0-9A-z\n\r+/=]+)-----END \1-----$/m,s=r(1804),a=r(5007),c=r(6608).Buffer;e.exports=function(e,t){var r,u=e.toString(),d=u.match(n);if(d){var f="aes"+d[1],h=c.from(d[2],"hex"),l=c.from(d[3].replace(/[\r\n]/g,""),"base64"),p=s(t,h.slice(0,8),parseInt(d[1],10)).key,b=[],y=a.createDecipheriv(f,p,h);b.push(y.update(l)),b.push(y.final()),r=c.concat(b)}else{var m=u.match(o);r=c.from(m[2].replace(/[\r\n]/g,""),"base64")}return{tag:u.match(i)[1],data:r}}},780:(e,t,r)=>{var n=r(5651),i=r(2853),o=r(2011),s=r(5007),a=r(3166),c=r(6608).Buffer;function u(e){var t;"object"!=typeof e||c.isBuffer(e)||(t=e.passphrase,e=e.key),"string"==typeof e&&(e=c.from(e));var r,u,d=o(e,t),f=d.tag,h=d.data;switch(f){case"CERTIFICATE":u=n.certificate.decode(h,"der").tbsCertificate.subjectPublicKeyInfo;case"PUBLIC KEY":switch(u||(u=n.PublicKey.decode(h,"der")),r=u.algorithm.algorithm.join(".")){case"1.2.840.113549.1.1.1":return n.RSAPublicKey.decode(u.subjectPublicKey.data,"der");case"1.2.840.10045.2.1":return u.subjectPrivateKey=u.subjectPublicKey,{type:"ec",data:u};case"1.2.840.10040.4.1":return u.algorithm.params.pub_key=n.DSAparam.decode(u.subjectPublicKey.data,"der"),{type:"dsa",data:u.algorithm.params};default:throw new Error("unknown key id "+r)}case"ENCRYPTED PRIVATE KEY":h=function(e,t){var r=e.algorithm.decrypt.kde.kdeparams.salt,n=parseInt(e.algorithm.decrypt.kde.kdeparams.iters.toString(),10),o=i[e.algorithm.decrypt.cipher.algo.join(".")],u=e.algorithm.decrypt.cipher.iv,d=e.subjectPrivateKey,f=parseInt(o.split("-")[1],10)/8,h=a.pbkdf2Sync(t,r,n,f,"sha1"),l=s.createDecipheriv(o,h,u),p=[];return p.push(l.update(d)),p.push(l.final()),c.concat(p)}(h=n.EncryptedPrivateKey.decode(h,"der"),t);case"PRIVATE KEY":switch(r=(u=n.PrivateKey.decode(h,"der")).algorithm.algorithm.join(".")){case"1.2.840.113549.1.1.1":return n.RSAPrivateKey.decode(u.subjectPrivateKey,"der");case"1.2.840.10045.2.1":return{curve:u.algorithm.curve,privateKey:n.ECPrivateKey.decode(u.subjectPrivateKey,"der").privateKey};case"1.2.840.10040.4.1":return u.algorithm.params.priv_key=n.DSAparam.decode(u.subjectPrivateKey,"der"),{type:"dsa",params:u.algorithm.params};default:throw new Error("unknown key id "+r)}case"RSA PUBLIC KEY":return n.RSAPublicKey.decode(h,"der");case"RSA PRIVATE KEY":return n.RSAPrivateKey.decode(h,"der");case"DSA PRIVATE KEY":return{type:"dsa",params:n.DSAPrivateKey.decode(h,"der")};case"EC PRIVATE KEY":return{curve:(h=n.ECPrivateKey.decode(h,"der")).parameters.value,privateKey:h.privateKey};default:throw new Error("unknown key type "+f)}}e.exports=u,u.signature=n.signature},3166:(e,t,r)=>{t.pbkdf2=r(7638),t.pbkdf2Sync=r(8674)},7638:(e,t,r)=>{var n,i,o=r(6608).Buffer,s=r(362),a=r(9749),c=r(8674),u=r(4300),d=r.g.crypto&&r.g.crypto.subtle,f={sha:"SHA-1","sha-1":"SHA-1",sha1:"SHA-1",sha256:"SHA-256","sha-256":"SHA-256",sha384:"SHA-384","sha-384":"SHA-384","sha-512":"SHA-512",sha512:"SHA-512"},h=[];function l(){return i||(i=r.g.process&&r.g.process.nextTick?r.g.process.nextTick:r.g.queueMicrotask?r.g.queueMicrotask:r.g.setImmediate?r.g.setImmediate:r.g.setTimeout)}function p(e,t,r,n,i){return d.importKey("raw",e,{name:"PBKDF2"},!1,["deriveBits"]).then((function(e){return d.deriveBits({name:"PBKDF2",salt:t,iterations:r,hash:{name:i}},e,n<<3)})).then((function(e){return o.from(e)}))}e.exports=function(e,t,i,b,y,m){"function"==typeof y&&(m=y,y=void 0);var g=f[(y=y||"sha1").toLowerCase()];if(g&&"function"==typeof r.g.Promise){if(s(i,b),e=u(e,a,"Password"),t=u(t,a,"Salt"),"function"!=typeof m)throw new Error("No callback provided to pbkdf2");!function(e,t){e.then((function(e){l()((function(){t(null,e)}))}),(function(e){l()((function(){t(e)}))}))}(function(e){if(r.g.process&&!r.g.process.browser)return Promise.resolve(!1);if(!d||!d.importKey||!d.deriveBits)return Promise.resolve(!1);if(void 0!==h[e])return h[e];var t=p(n=n||o.alloc(8),n,10,128,e).then((function(){return!0})).catch((function(){return!1}));return h[e]=t,t}(g).then((function(r){return r?p(e,t,i,b,g):c(e,t,i,b,y)})),m)}else l()((function(){var r;try{r=c(e,t,i,b,y)}catch(e){return m(e)}m(null,r)}))}},9749:(e,t,r)=>{var n;n=r.g.process&&r.g.process.browser?"utf-8":r.g.process&&r.g.process.version?parseInt(process.version.split(".")[0].slice(1),10)>=6?"utf-8":"binary":"utf-8",e.exports=n},362:e=>{var t=Math.pow(2,30)-1;e.exports=function(e,r){if("number"!=typeof e)throw new TypeError("Iterations not a number");if(e<0)throw new TypeError("Bad iterations");if("number"!=typeof r)throw new TypeError("Key length not a number");if(r<0||r>t||r!=r)throw new TypeError("Bad key length")}},8674:(e,t,r)=>{var n=r(6159),i=r(3934),o=r(5244),s=r(6608).Buffer,a=r(362),c=r(9749),u=r(4300),d=s.alloc(128),f={md5:16,sha1:20,sha224:28,sha256:32,sha384:48,sha512:64,rmd160:20,ripemd160:20};function h(e,t,r){var a=function(e){return"rmd160"===e||"ripemd160"===e?function(e){return(new i).update(e).digest()}:"md5"===e?n:function(t){return o(e).update(t).digest()}}(e),c="sha512"===e||"sha384"===e?128:64;t.length>c?t=a(t):t.length<c&&(t=s.concat([t,d],c));for(var u=s.allocUnsafe(c+f[e]),h=s.allocUnsafe(c+f[e]),l=0;l<c;l++)u[l]=54^t[l],h[l]=92^t[l];var p=s.allocUnsafe(c+r+4);u.copy(p,0,0,c),this.ipad1=p,this.ipad2=u,this.opad=h,this.alg=e,this.blocksize=c,this.hash=a,this.size=f[e]}h.prototype.run=function(e,t){return e.copy(t,this.blocksize),this.hash(t).copy(this.opad,this.blocksize),this.hash(this.opad)},e.exports=function(e,t,r,n,i){a(r,n);var o=new h(i=i||"sha1",e=u(e,c,"Password"),(t=u(t,c,"Salt")).length),d=s.allocUnsafe(n),l=s.allocUnsafe(t.length+4);t.copy(l,0,0,t.length);for(var p=0,b=f[i],y=Math.ceil(n/b),m=1;m<=y;m++){l.writeUInt32BE(m,t.length);for(var g=o.run(l,o.ipad1),v=g,w=1;w<r;w++){v=o.run(v,o.ipad2);for(var _=0;_<b;_++)g[_]^=v[_]}g.copy(d,p),p+=b}return d}},4300:(e,t,r)=>{var n=r(6608).Buffer;e.exports=function(e,t,r){if(n.isBuffer(e))return e;if("string"==typeof e)return n.from(e,t);if(ArrayBuffer.isView(e))return n.from(e.buffer);throw new TypeError(r+" must be a string, a Buffer, a typed array or a DataView")}},2211:(e,t,r)=>{t.publicEncrypt=r(3909),t.privateDecrypt=r(2399),t.privateEncrypt=function(e,r){return t.publicEncrypt(e,r,!0)},t.publicDecrypt=function(e,r){return t.privateDecrypt(e,r,!0)}},8929:(e,t,r)=>{var n=r(8955),i=r(6608).Buffer;function o(e){var t=i.allocUnsafe(4);return t.writeUInt32BE(e,0),t}e.exports=function(e,t){for(var r,s=i.alloc(0),a=0;s.length<t;)r=o(a++),s=i.concat([s,n("sha1").update(e).update(r).digest()]);return s.slice(0,t)}},2399:(e,t,r)=>{var n=r(780),i=r(8929),o=r(7794),s=r(4619),a=r(1377),c=r(8955),u=r(7390),d=r(6608).Buffer;e.exports=function(e,t,r){var f;f=e.padding?e.padding:r?1:4;var h,l=n(e),p=l.modulus.byteLength();if(t.length>p||new s(t).cmp(l.modulus)>=0)throw new Error("decryption error");h=r?u(new s(t),l):a(t,l);var b=d.alloc(p-h.length);if(h=d.concat([b,h],p),4===f)return function(e,t){var r=e.modulus.byteLength(),n=c("sha1").update(d.alloc(0)).digest(),s=n.length;if(0!==t[0])throw new Error("decryption error");var a=t.slice(1,s+1),u=t.slice(s+1),f=o(a,i(u,s)),h=o(u,i(f,r-s-1));if(function(e,t){e=d.from(e),t=d.from(t);var r=0,n=e.length;e.length!==t.length&&(r++,n=Math.min(e.length,t.length));for(var i=-1;++i<n;)r+=e[i]^t[i];return r}(n,h.slice(0,s)))throw new Error("decryption error");for(var l=s;0===h[l];)l++;if(1!==h[l++])throw new Error("decryption error");return h.slice(l)}(l,h);if(1===f)return function(e,t,r){for(var n=t.slice(0,2),i=2,o=0;0!==t[i++];)if(i>=t.length){o++;break}var s=t.slice(2,i-1);if(("0002"!==n.toString("hex")&&!r||"0001"!==n.toString("hex")&&r)&&o++,s.length<8&&o++,o)throw new Error("decryption error");return t.slice(i)}(0,h,r);if(3===f)return h;throw new Error("unknown padding")}},3909:(e,t,r)=>{var n=r(780),i=r(2869),o=r(8955),s=r(8929),a=r(7794),c=r(4619),u=r(7390),d=r(1377),f=r(6608).Buffer;e.exports=function(e,t,r){var h;h=e.padding?e.padding:r?1:4;var l,p=n(e);if(4===h)l=function(e,t){var r=e.modulus.byteLength(),n=t.length,u=o("sha1").update(f.alloc(0)).digest(),d=u.length,h=2*d;if(n>r-h-2)throw new Error("message too long");var l=f.alloc(r-n-h-2),p=r-d-1,b=i(d),y=a(f.concat([u,l,f.alloc(1,1),t],p),s(b,p)),m=a(b,s(y,d));return new c(f.concat([f.alloc(1),m,y],r))}(p,t);else if(1===h)l=function(e,t,r){var n,o=t.length,s=e.modulus.byteLength();if(o>s-11)throw new Error("message too long");return n=r?f.alloc(s-o-3,255):function(e){for(var t,r=f.allocUnsafe(e),n=0,o=i(2*e),s=0;n<e;)s===o.length&&(o=i(2*e),s=0),(t=o[s++])&&(r[n++]=t);return r}(s-o-3),new c(f.concat([f.from([0,r?1:2]),n,f.alloc(1),t],s))}(p,t,r);else{if(3!==h)throw new Error("unknown padding");if((l=new c(t)).cmp(p.modulus)>=0)throw new Error("data too long for modulus")}return r?d(l,p):u(l,p)}},7390:(e,t,r)=>{var n=r(4619),i=r(6608).Buffer;e.exports=function(e,t){return i.from(e.toRed(n.mont(t.modulus)).redPow(new n(t.publicExponent)).fromRed().toArray())}},7794:e=>{e.exports=function(e,t){for(var r=e.length,n=-1;++n<r;)e[n]^=t[n];return e}},2869:(e,t,r)=>{"use strict";var n=65536,i=r(6608).Buffer,o=r.g.crypto||r.g.msCrypto;o&&o.getRandomValues?e.exports=function(e,t){if(e>4294967295)throw new RangeError("requested too many random bytes");var r=i.allocUnsafe(e);if(e>0)if(e>n)for(var s=0;s<e;s+=n)o.getRandomValues(r.slice(s,s+n));else o.getRandomValues(r);return"function"==typeof t?process.nextTick((function(){t(null,r)})):r}:e.exports=function(){throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11")}},4925:(e,t,r)=>{"use strict";function n(){throw new Error("secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11")}var i=r(6608),o=r(2869),s=i.Buffer,a=i.kMaxLength,c=r.g.crypto||r.g.msCrypto,u=Math.pow(2,32)-1;function d(e,t){if("number"!=typeof e||e!=e)throw new TypeError("offset must be a number");if(e>u||e<0)throw new TypeError("offset must be a uint32");if(e>a||e>t)throw new RangeError("offset out of range")}function f(e,t,r){if("number"!=typeof e||e!=e)throw new TypeError("size must be a number");if(e>u||e<0)throw new TypeError("size must be a uint32");if(e+t>r||e>a)throw new RangeError("buffer too small")}function h(e,t,r,n){if(process.browser){var i=e.buffer,s=new Uint8Array(i,t,r);return c.getRandomValues(s),n?void process.nextTick((function(){n(null,e)})):e}if(!n)return o(r).copy(e,t),e;o(r,(function(r,i){if(r)return n(r);i.copy(e,t),n(null,e)}))}c&&c.getRandomValues||!process.browser?(t.randomFill=function(e,t,n,i){if(!(s.isBuffer(e)||e instanceof r.g.Uint8Array))throw new TypeError('"buf" argument must be a Buffer or Uint8Array');if("function"==typeof t)i=t,t=0,n=e.length;else if("function"==typeof n)i=n,n=e.length-t;else if("function"!=typeof i)throw new TypeError('"cb" argument must be a function');return d(t,e.length),f(n,t,e.length),h(e,t,n,i)},t.randomFillSync=function(e,t,n){if(void 0===t&&(t=0),!(s.isBuffer(e)||e instanceof r.g.Uint8Array))throw new TypeError('"buf" argument must be a Buffer or Uint8Array');return d(t,e.length),void 0===n&&(n=e.length-t),f(n,t,e.length),h(e,t,n)}):(t.randomFill=n,t.randomFillSync=n)},289:e=>{"use strict";var t={};function r(e,r,n){n||(n=Error);var i=function(e){var t,n;function i(t,n,i){return e.call(this,function(e,t,n){return"string"==typeof r?r:r(e,t,n)}(t,n,i))||this}return n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i}(n);i.prototype.name=n.name,i.prototype.code=e,t[e]=i}function n(e,t){if(Array.isArray(e)){var r=e.length;return e=e.map((function(e){return String(e)})),r>2?"one of ".concat(t," ").concat(e.slice(0,r-1).join(", "),", or ")+e[r-1]:2===r?"one of ".concat(t," ").concat(e[0]," or ").concat(e[1]):"of ".concat(t," ").concat(e[0])}return"of ".concat(t," ").concat(String(e))}r("ERR_INVALID_OPT_VALUE",(function(e,t){return'The value "'+t+'" is invalid for option "'+e+'"'}),TypeError),r("ERR_INVALID_ARG_TYPE",(function(e,t,r){var i,o,s,a,c;if("string"==typeof t&&(o="not ",t.substr(0,4)===o)?(i="must not be",t=t.replace(/^not /,"")):i="must be",function(e,t,r){return(void 0===r||r>e.length)&&(r=e.length),e.substring(r-9,r)===t}(e," argument"))s="The ".concat(e," ").concat(i," ").concat(n(t,"type"));else{var u=("number"!=typeof c&&(c=0),c+1>(a=e).length||-1===a.indexOf(".",c)?"argument":"property");s='The "'.concat(e,'" ').concat(u," ").concat(i," ").concat(n(t,"type"))}return s+". Received type ".concat(typeof r)}),TypeError),r("ERR_STREAM_PUSH_AFTER_EOF","stream.push() after EOF"),r("ERR_METHOD_NOT_IMPLEMENTED",(function(e){return"The "+e+" method is not implemented"})),r("ERR_STREAM_PREMATURE_CLOSE","Premature close"),r("ERR_STREAM_DESTROYED",(function(e){return"Cannot call "+e+" after a stream was destroyed"})),r("ERR_MULTIPLE_CALLBACK","Callback called multiple times"),r("ERR_STREAM_CANNOT_PIPE","Cannot pipe, not readable"),r("ERR_STREAM_WRITE_AFTER_END","write after end"),r("ERR_STREAM_NULL_VALUES","May not write null values to stream",TypeError),r("ERR_UNKNOWN_ENCODING",(function(e){return"Unknown encoding: "+e}),TypeError),r("ERR_STREAM_UNSHIFT_AFTER_END_EVENT","stream.unshift() after end event"),e.exports.F=t},5707:(e,t,r)=>{"use strict";var n=Object.keys||function(e){var t=[];for(var r in e)t.push(r);return t};e.exports=u;var i=r(3033),o=r(2553);r(1193)(u,i);for(var s=n(o.prototype),a=0;a<s.length;a++){var c=s[a];u.prototype[c]||(u.prototype[c]=o.prototype[c])}function u(e){if(!(this instanceof u))return new u(e);i.call(this,e),o.call(this,e),this.allowHalfOpen=!0,e&&(!1===e.readable&&(this.readable=!1),!1===e.writable&&(this.writable=!1),!1===e.allowHalfOpen&&(this.allowHalfOpen=!1,this.once("end",d)))}function d(){this._writableState.ended||process.nextTick(f,this)}function f(e){e.end()}Object.defineProperty(u.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),Object.defineProperty(u.prototype,"writableBuffer",{enumerable:!1,get:function(){return this._writableState&&this._writableState.getBuffer()}}),Object.defineProperty(u.prototype,"writableLength",{enumerable:!1,get:function(){return this._writableState.length}}),Object.defineProperty(u.prototype,"destroyed",{enumerable:!1,get:function(){return void 0!==this._readableState&&void 0!==this._writableState&&this._readableState.destroyed&&this._writableState.destroyed},set:function(e){void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed=e,this._writableState.destroyed=e)}})},5271:(e,t,r)=>{"use strict";e.exports=i;var n=r(141);function i(e){if(!(this instanceof i))return new i(e);n.call(this,e)}r(1193)(i,n),i.prototype._transform=function(e,t,r){r(null,e)}},3033:(e,t,r)=>{"use strict";var n;e.exports=M,M.ReadableState=S,r(381).EventEmitter;var i,o=function(e,t){return e.listeners(t).length},s=r(2534),a=r(6533).Buffer,c=(void 0!==r.g?r.g:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{}).Uint8Array||function(){},u=r(6429);i=u&&u.debuglog?u.debuglog("stream"):function(){};var d,f,h,l=r(20),p=r(917),b=r(5750).getHighWaterMark,y=r(289).F,m=y.ERR_INVALID_ARG_TYPE,g=y.ERR_STREAM_PUSH_AFTER_EOF,v=y.ERR_METHOD_NOT_IMPLEMENTED,w=y.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;r(1193)(M,s);var _=p.errorOrDestroy,A=["error","close","destroy","pause","resume"];function S(e,t,i){n=n||r(5707),e=e||{},"boolean"!=typeof i&&(i=t instanceof n),this.objectMode=!!e.objectMode,i&&(this.objectMode=this.objectMode||!!e.readableObjectMode),this.highWaterMark=b(this,e,"readableHighWaterMark",i),this.buffer=new l,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.paused=!0,this.emitClose=!1!==e.emitClose,this.autoDestroy=!!e.autoDestroy,this.destroyed=!1,this.defaultEncoding=e.defaultEncoding||"utf8",this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,e.encoding&&(d||(d=r(6704).I),this.decoder=new d(e.encoding),this.encoding=e.encoding)}function M(e){if(n=n||r(5707),!(this instanceof M))return new M(e);var t=this instanceof n;this._readableState=new S(e,this,t),this.readable=!0,e&&("function"==typeof e.read&&(this._read=e.read),"function"==typeof e.destroy&&(this._destroy=e.destroy)),s.call(this)}function C(e,t,r,n,o){i("readableAddChunk",t);var s,u=e._readableState;if(null===t)u.reading=!1,function(e,t){if(i("onEofChunk"),!t.ended){if(t.decoder){var r=t.decoder.end();r&&r.length&&(t.buffer.push(r),t.length+=t.objectMode?1:r.length)}t.ended=!0,t.sync?I(e):(t.needReadable=!1,t.emittedReadable||(t.emittedReadable=!0,x(e)))}}(e,u);else if(o||(s=function(e,t){var r,n;return n=t,a.isBuffer(n)||n instanceof c||"string"==typeof t||void 0===t||e.objectMode||(r=new m("chunk",["string","Buffer","Uint8Array"],t)),r}(u,t)),s)_(e,s);else if(u.objectMode||t&&t.length>0)if("string"==typeof t||u.objectMode||Object.getPrototypeOf(t)===a.prototype||(t=function(e){return a.from(e)}(t)),n)u.endEmitted?_(e,new w):T(e,u,t,!0);else if(u.ended)_(e,new g);else{if(u.destroyed)return!1;u.reading=!1,u.decoder&&!r?(t=u.decoder.write(t),u.objectMode||0!==t.length?T(e,u,t,!1):B(e,u)):T(e,u,t,!1)}else n||(u.reading=!1,B(e,u));return!u.ended&&(u.length<u.highWaterMark||0===u.length)}function T(e,t,r,n){t.flowing&&0===t.length&&!t.sync?(t.awaitDrain=0,e.emit("data",r)):(t.length+=t.objectMode?1:r.length,n?t.buffer.unshift(r):t.buffer.push(r),t.needReadable&&I(e)),B(e,t)}Object.defineProperty(M.prototype,"destroyed",{enumerable:!1,get:function(){return void 0!==this._readableState&&this._readableState.destroyed},set:function(e){this._readableState&&(this._readableState.destroyed=e)}}),M.prototype.destroy=p.destroy,M.prototype._undestroy=p.undestroy,M.prototype._destroy=function(e,t){t(e)},M.prototype.push=function(e,t){var r,n=this._readableState;return n.objectMode?r=!0:"string"==typeof e&&((t=t||n.defaultEncoding)!==n.encoding&&(e=a.from(e,t),t=""),r=!0),C(this,e,t,!1,r)},M.prototype.unshift=function(e){return C(this,e,null,!0,!1)},M.prototype.isPaused=function(){return!1===this._readableState.flowing},M.prototype.setEncoding=function(e){d||(d=r(6704).I);var t=new d(e);this._readableState.decoder=t,this._readableState.encoding=this._readableState.decoder.encoding;for(var n=this._readableState.buffer.head,i="";null!==n;)i+=t.write(n.data),n=n.next;return this._readableState.buffer.clear(),""!==i&&this._readableState.buffer.push(i),this._readableState.length=i.length,this};var E=1073741824;function k(e,t){return e<=0||0===t.length&&t.ended?0:t.objectMode?1:e!=e?t.flowing&&t.length?t.buffer.head.data.length:t.length:(e>t.highWaterMark&&(t.highWaterMark=function(e){return e>=E?e=E:(e--,e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,e|=e>>>16,e++),e}(e)),e<=t.length?e:t.ended?t.length:(t.needReadable=!0,0))}function I(e){var t=e._readableState;i("emitReadable",t.needReadable,t.emittedReadable),t.needReadable=!1,t.emittedReadable||(i("emitReadable",t.flowing),t.emittedReadable=!0,process.nextTick(x,e))}function x(e){var t=e._readableState;i("emitReadable_",t.destroyed,t.length,t.ended),t.destroyed||!t.length&&!t.ended||(e.emit("readable"),t.emittedReadable=!1),t.needReadable=!t.flowing&&!t.ended&&t.length<=t.highWaterMark,L(e)}function B(e,t){t.readingMore||(t.readingMore=!0,process.nextTick(U,e,t))}function U(e,t){for(;!t.reading&&!t.ended&&(t.length<t.highWaterMark||t.flowing&&0===t.length);){var r=t.length;if(i("maybeReadMore read 0"),e.read(0),r===t.length)break}t.readingMore=!1}function P(e){var t=e._readableState;t.readableListening=e.listenerCount("readable")>0,t.resumeScheduled&&!t.paused?t.flowing=!0:e.listenerCount("data")>0&&e.resume()}function O(e){i("readable nexttick read 0"),e.read(0)}function R(e,t){i("resume",t.reading),t.reading||e.read(0),t.resumeScheduled=!1,e.emit("resume"),L(e),t.flowing&&!t.reading&&e.read(0)}function L(e){var t=e._readableState;for(i("flow",t.flowing);t.flowing&&null!==e.read(););}function N(e,t){return 0===t.length?null:(t.objectMode?r=t.buffer.shift():!e||e>=t.length?(r=t.decoder?t.buffer.join(""):1===t.buffer.length?t.buffer.first():t.buffer.concat(t.length),t.buffer.clear()):r=t.buffer.consume(e,t.decoder),r);var r}function j(e){var t=e._readableState;i("endReadable",t.endEmitted),t.endEmitted||(t.ended=!0,process.nextTick(D,t,e))}function D(e,t){if(i("endReadableNT",e.endEmitted,e.length),!e.endEmitted&&0===e.length&&(e.endEmitted=!0,t.readable=!1,t.emit("end"),e.autoDestroy)){var r=t._writableState;(!r||r.autoDestroy&&r.finished)&&t.destroy()}}function F(e,t){for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r;return-1}M.prototype.read=function(e){i("read",e),e=parseInt(e,10);var t=this._readableState,r=e;if(0!==e&&(t.emittedReadable=!1),0===e&&t.needReadable&&((0!==t.highWaterMark?t.length>=t.highWaterMark:t.length>0)||t.ended))return i("read: emitReadable",t.length,t.ended),0===t.length&&t.ended?j(this):I(this),null;if(0===(e=k(e,t))&&t.ended)return 0===t.length&&j(this),null;var n,o=t.needReadable;return i("need readable",o),(0===t.length||t.length-e<t.highWaterMark)&&i("length less than watermark",o=!0),t.ended||t.reading?i("reading or ended",o=!1):o&&(i("do read"),t.reading=!0,t.sync=!0,0===t.length&&(t.needReadable=!0),this._read(t.highWaterMark),t.sync=!1,t.reading||(e=k(r,t))),null===(n=e>0?N(e,t):null)?(t.needReadable=t.length<=t.highWaterMark,e=0):(t.length-=e,t.awaitDrain=0),0===t.length&&(t.ended||(t.needReadable=!0),r!==e&&t.ended&&j(this)),null!==n&&this.emit("data",n),n},M.prototype._read=function(e){_(this,new v("_read()"))},M.prototype.pipe=function(e,t){var r=this,n=this._readableState;switch(n.pipesCount){case 0:n.pipes=e;break;case 1:n.pipes=[n.pipes,e];break;default:n.pipes.push(e)}n.pipesCount+=1,i("pipe count=%d opts=%j",n.pipesCount,t);var s=t&&!1===t.end||e===process.stdout||e===process.stderr?p:a;function a(){i("onend"),e.end()}n.endEmitted?process.nextTick(s):r.once("end",s),e.on("unpipe",(function t(o,s){i("onunpipe"),o===r&&s&&!1===s.hasUnpiped&&(s.hasUnpiped=!0,i("cleanup"),e.removeListener("close",h),e.removeListener("finish",l),e.removeListener("drain",c),e.removeListener("error",f),e.removeListener("unpipe",t),r.removeListener("end",a),r.removeListener("end",p),r.removeListener("data",d),u=!0,!n.awaitDrain||e._writableState&&!e._writableState.needDrain||c())}));var c=function(e){return function(){var t=e._readableState;i("pipeOnDrain",t.awaitDrain),t.awaitDrain&&t.awaitDrain--,0===t.awaitDrain&&o(e,"data")&&(t.flowing=!0,L(e))}}(r);e.on("drain",c);var u=!1;function d(t){i("ondata");var o=e.write(t);i("dest.write",o),!1===o&&((1===n.pipesCount&&n.pipes===e||n.pipesCount>1&&-1!==F(n.pipes,e))&&!u&&(i("false write response, pause",n.awaitDrain),n.awaitDrain++),r.pause())}function f(t){i("onerror",t),p(),e.removeListener("error",f),0===o(e,"error")&&_(e,t)}function h(){e.removeListener("finish",l),p()}function l(){i("onfinish"),e.removeListener("close",h),p()}function p(){i("unpipe"),r.unpipe(e)}return r.on("data",d),function(e,t,r){if("function"==typeof e.prependListener)return e.prependListener(t,r);e._events&&e._events[t]?Array.isArray(e._events[t])?e._events[t].unshift(r):e._events[t]=[r,e._events[t]]:e.on(t,r)}(e,"error",f),e.once("close",h),e.once("finish",l),e.emit("pipe",r),n.flowing||(i("pipe resume"),r.resume()),e},M.prototype.unpipe=function(e){var t=this._readableState,r={hasUnpiped:!1};if(0===t.pipesCount)return this;if(1===t.pipesCount)return e&&e!==t.pipes||(e||(e=t.pipes),t.pipes=null,t.pipesCount=0,t.flowing=!1,e&&e.emit("unpipe",this,r)),this;if(!e){var n=t.pipes,i=t.pipesCount;t.pipes=null,t.pipesCount=0,t.flowing=!1;for(var o=0;o<i;o++)n[o].emit("unpipe",this,{hasUnpiped:!1});return this}var s=F(t.pipes,e);return-1===s||(t.pipes.splice(s,1),t.pipesCount-=1,1===t.pipesCount&&(t.pipes=t.pipes[0]),e.emit("unpipe",this,r)),this},M.prototype.on=function(e,t){var r=s.prototype.on.call(this,e,t),n=this._readableState;return"data"===e?(n.readableListening=this.listenerCount("readable")>0,!1!==n.flowing&&this.resume()):"readable"===e&&(n.endEmitted||n.readableListening||(n.readableListening=n.needReadable=!0,n.flowing=!1,n.emittedReadable=!1,i("on readable",n.length,n.reading),n.length?I(this):n.reading||process.nextTick(O,this))),r},M.prototype.addListener=M.prototype.on,M.prototype.removeListener=function(e,t){var r=s.prototype.removeListener.call(this,e,t);return"readable"===e&&process.nextTick(P,this),r},M.prototype.removeAllListeners=function(e){var t=s.prototype.removeAllListeners.apply(this,arguments);return"readable"!==e&&void 0!==e||process.nextTick(P,this),t},M.prototype.resume=function(){var e=this._readableState;return e.flowing||(i("resume"),e.flowing=!e.readableListening,function(e,t){t.resumeScheduled||(t.resumeScheduled=!0,process.nextTick(R,e,t))}(this,e)),e.paused=!1,this},M.prototype.pause=function(){return i("call pause flowing=%j",this._readableState.flowing),!1!==this._readableState.flowing&&(i("pause"),this._readableState.flowing=!1,this.emit("pause")),this._readableState.paused=!0,this},M.prototype.wrap=function(e){var t=this,r=this._readableState,n=!1;for(var o in e.on("end",(function(){if(i("wrapped end"),r.decoder&&!r.ended){var e=r.decoder.end();e&&e.length&&t.push(e)}t.push(null)})),e.on("data",(function(o){i("wrapped data"),r.decoder&&(o=r.decoder.write(o)),r.objectMode&&null==o||(r.objectMode||o&&o.length)&&(t.push(o)||(n=!0,e.pause()))})),e)void 0===this[o]&&"function"==typeof e[o]&&(this[o]=function(t){return function(){return e[t].apply(e,arguments)}}(o));for(var s=0;s<A.length;s++)e.on(A[s],this.emit.bind(this,A[s]));return this._read=function(t){i("wrapped _read",t),n&&(n=!1,e.resume())},this},"function"==typeof Symbol&&(M.prototype[Symbol.asyncIterator]=function(){return void 0===f&&(f=r(9536)),f(this)}),Object.defineProperty(M.prototype,"readableHighWaterMark",{enumerable:!1,get:function(){return this._readableState.highWaterMark}}),Object.defineProperty(M.prototype,"readableBuffer",{enumerable:!1,get:function(){return this._readableState&&this._readableState.buffer}}),Object.defineProperty(M.prototype,"readableFlowing",{enumerable:!1,get:function(){return this._readableState.flowing},set:function(e){this._readableState&&(this._readableState.flowing=e)}}),M._fromList=N,Object.defineProperty(M.prototype,"readableLength",{enumerable:!1,get:function(){return this._readableState.length}}),"function"==typeof Symbol&&(M.from=function(e,t){return void 0===h&&(h=r(4918)),h(M,e,t)})},141:(e,t,r)=>{"use strict";e.exports=d;var n=r(289).F,i=n.ERR_METHOD_NOT_IMPLEMENTED,o=n.ERR_MULTIPLE_CALLBACK,s=n.ERR_TRANSFORM_ALREADY_TRANSFORMING,a=n.ERR_TRANSFORM_WITH_LENGTH_0,c=r(5707);function u(e,t){var r=this._transformState;r.transforming=!1;var n=r.writecb;if(null===n)return this.emit("error",new o);r.writechunk=null,r.writecb=null,null!=t&&this.push(t),n(e);var i=this._readableState;i.reading=!1,(i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}function d(e){if(!(this instanceof d))return new d(e);c.call(this,e),this._transformState={afterTransform:u.bind(this),needTransform:!1,transforming:!1,writecb:null,writechunk:null,writeencoding:null},this._readableState.needReadable=!0,this._readableState.sync=!1,e&&("function"==typeof e.transform&&(this._transform=e.transform),"function"==typeof e.flush&&(this._flush=e.flush)),this.on("prefinish",f)}function f(){var e=this;"function"!=typeof this._flush||this._readableState.destroyed?h(this,null,null):this._flush((function(t,r){h(e,t,r)}))}function h(e,t,r){if(t)return e.emit("error",t);if(null!=r&&e.push(r),e._writableState.length)throw new a;if(e._transformState.transforming)throw new s;return e.push(null)}r(1193)(d,c),d.prototype.push=function(e,t){return this._transformState.needTransform=!1,c.prototype.push.call(this,e,t)},d.prototype._transform=function(e,t,r){r(new i("_transform()"))},d.prototype._write=function(e,t,r){var n=this._transformState;if(n.writecb=r,n.writechunk=e,n.writeencoding=t,!n.transforming){var i=this._readableState;(n.needTransform||i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}},d.prototype._read=function(e){var t=this._transformState;null===t.writechunk||t.transforming?t.needTransform=!0:(t.transforming=!0,this._transform(t.writechunk,t.writeencoding,t.afterTransform))},d.prototype._destroy=function(e,t){c.prototype._destroy.call(this,e,(function(e){t(e)}))}},2553:(e,t,r)=>{"use strict";function n(e){var t=this;this.next=null,this.entry=null,this.finish=function(){!function(e,t){var r=e.entry;for(e.entry=null;r;){var n=r.callback;t.pendingcb--,n(undefined),r=r.next}t.corkedRequestsFree.next=e}(t,e)}}var i;e.exports=M,M.WritableState=S;var o,s={deprecate:r(1947)},a=r(2534),c=r(6533).Buffer,u=(void 0!==r.g?r.g:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{}).Uint8Array||function(){},d=r(917),f=r(5750).getHighWaterMark,h=r(289).F,l=h.ERR_INVALID_ARG_TYPE,p=h.ERR_METHOD_NOT_IMPLEMENTED,b=h.ERR_MULTIPLE_CALLBACK,y=h.ERR_STREAM_CANNOT_PIPE,m=h.ERR_STREAM_DESTROYED,g=h.ERR_STREAM_NULL_VALUES,v=h.ERR_STREAM_WRITE_AFTER_END,w=h.ERR_UNKNOWN_ENCODING,_=d.errorOrDestroy;function A(){}function S(e,t,o){i=i||r(5707),e=e||{},"boolean"!=typeof o&&(o=t instanceof i),this.objectMode=!!e.objectMode,o&&(this.objectMode=this.objectMode||!!e.writableObjectMode),this.highWaterMark=f(this,e,"writableHighWaterMark",o),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1;var s=!1===e.decodeStrings;this.decodeStrings=!s,this.defaultEncoding=e.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(e){!function(e,t){var r=e._writableState,n=r.sync,i=r.writecb;if("function"!=typeof i)throw new b;if(function(e){e.writing=!1,e.writecb=null,e.length-=e.writelen,e.writelen=0}(r),t)!function(e,t,r,n,i){--t.pendingcb,r?(process.nextTick(i,n),process.nextTick(x,e,t),e._writableState.errorEmitted=!0,_(e,n)):(i(n),e._writableState.errorEmitted=!0,_(e,n),x(e,t))}(e,r,n,t,i);else{var o=k(r)||e.destroyed;o||r.corked||r.bufferProcessing||!r.bufferedRequest||E(e,r),n?process.nextTick(T,e,r,o,i):T(e,r,o,i)}}(t,e)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.emitClose=!1!==e.emitClose,this.autoDestroy=!!e.autoDestroy,this.bufferedRequestCount=0,this.corkedRequestsFree=new n(this)}function M(e){var t=this instanceof(i=i||r(5707));if(!t&&!o.call(M,this))return new M(e);this._writableState=new S(e,this,t),this.writable=!0,e&&("function"==typeof e.write&&(this._write=e.write),"function"==typeof e.writev&&(this._writev=e.writev),"function"==typeof e.destroy&&(this._destroy=e.destroy),"function"==typeof e.final&&(this._final=e.final)),a.call(this)}function C(e,t,r,n,i,o,s){t.writelen=n,t.writecb=s,t.writing=!0,t.sync=!0,t.destroyed?t.onwrite(new m("write")):r?e._writev(i,t.onwrite):e._write(i,o,t.onwrite),t.sync=!1}function T(e,t,r,n){r||function(e,t){0===t.length&&t.needDrain&&(t.needDrain=!1,e.emit("drain"))}(e,t),t.pendingcb--,n(),x(e,t)}function E(e,t){t.bufferProcessing=!0;var r=t.bufferedRequest;if(e._writev&&r&&r.next){var i=t.bufferedRequestCount,o=new Array(i),s=t.corkedRequestsFree;s.entry=r;for(var a=0,c=!0;r;)o[a]=r,r.isBuf||(c=!1),r=r.next,a+=1;o.allBuffers=c,C(e,t,!0,t.length,o,"",s.finish),t.pendingcb++,t.lastBufferedRequest=null,s.next?(t.corkedRequestsFree=s.next,s.next=null):t.corkedRequestsFree=new n(t),t.bufferedRequestCount=0}else{for(;r;){var u=r.chunk,d=r.encoding,f=r.callback;if(C(e,t,!1,t.objectMode?1:u.length,u,d,f),r=r.next,t.bufferedRequestCount--,t.writing)break}null===r&&(t.lastBufferedRequest=null)}t.bufferedRequest=r,t.bufferProcessing=!1}function k(e){return e.ending&&0===e.length&&null===e.bufferedRequest&&!e.finished&&!e.writing}function I(e,t){e._final((function(r){t.pendingcb--,r&&_(e,r),t.prefinished=!0,e.emit("prefinish"),x(e,t)}))}function x(e,t){var r=k(t);if(r&&(function(e,t){t.prefinished||t.finalCalled||("function"!=typeof e._final||t.destroyed?(t.prefinished=!0,e.emit("prefinish")):(t.pendingcb++,t.finalCalled=!0,process.nextTick(I,e,t)))}(e,t),0===t.pendingcb&&(t.finished=!0,e.emit("finish"),t.autoDestroy))){var n=e._readableState;(!n||n.autoDestroy&&n.endEmitted)&&e.destroy()}return r}r(1193)(M,a),S.prototype.getBuffer=function(){for(var e=this.bufferedRequest,t=[];e;)t.push(e),e=e.next;return t},function(){try{Object.defineProperty(S.prototype,"buffer",{get:s.deprecate((function(){return this.getBuffer()}),"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.","DEP0003")})}catch(e){}}(),"function"==typeof Symbol&&Symbol.hasInstance&&"function"==typeof Function.prototype[Symbol.hasInstance]?(o=Function.prototype[Symbol.hasInstance],Object.defineProperty(M,Symbol.hasInstance,{value:function(e){return!!o.call(this,e)||this===M&&e&&e._writableState instanceof S}})):o=function(e){return e instanceof this},M.prototype.pipe=function(){_(this,new y)},M.prototype.write=function(e,t,r){var n,i=this._writableState,o=!1,s=!i.objectMode&&(n=e,c.isBuffer(n)||n instanceof u);return s&&!c.isBuffer(e)&&(e=function(e){return c.from(e)}(e)),"function"==typeof t&&(r=t,t=null),s?t="buffer":t||(t=i.defaultEncoding),"function"!=typeof r&&(r=A),i.ending?function(e,t){var r=new v;_(e,r),process.nextTick(t,r)}(this,r):(s||function(e,t,r,n){var i;return null===r?i=new g:"string"==typeof r||t.objectMode||(i=new l("chunk",["string","Buffer"],r)),!i||(_(e,i),process.nextTick(n,i),!1)}(this,i,e,r))&&(i.pendingcb++,o=function(e,t,r,n,i,o){if(!r){var s=function(e,t,r){return e.objectMode||!1===e.decodeStrings||"string"!=typeof t||(t=c.from(t,r)),t}(t,n,i);n!==s&&(r=!0,i="buffer",n=s)}var a=t.objectMode?1:n.length;t.length+=a;var u=t.length<t.highWaterMark;if(u||(t.needDrain=!0),t.writing||t.corked){var d=t.lastBufferedRequest;t.lastBufferedRequest={chunk:n,encoding:i,isBuf:r,callback:o,next:null},d?d.next=t.lastBufferedRequest:t.bufferedRequest=t.lastBufferedRequest,t.bufferedRequestCount+=1}else C(e,t,!1,a,n,i,o);return u}(this,i,s,e,t,r)),o},M.prototype.cork=function(){this._writableState.corked++},M.prototype.uncork=function(){var e=this._writableState;e.corked&&(e.corked--,e.writing||e.corked||e.bufferProcessing||!e.bufferedRequest||E(this,e))},M.prototype.setDefaultEncoding=function(e){if("string"==typeof e&&(e=e.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((e+"").toLowerCase())>-1))throw new w(e);return this._writableState.defaultEncoding=e,this},Object.defineProperty(M.prototype,"writableBuffer",{enumerable:!1,get:function(){return this._writableState&&this._writableState.getBuffer()}}),Object.defineProperty(M.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),M.prototype._write=function(e,t,r){r(new p("_write()"))},M.prototype._writev=null,M.prototype.end=function(e,t,r){var n=this._writableState;return"function"==typeof e?(r=e,e=null,t=null):"function"==typeof t&&(r=t,t=null),null!=e&&this.write(e,t),n.corked&&(n.corked=1,this.uncork()),n.ending||function(e,t,r){t.ending=!0,x(e,t),r&&(t.finished?process.nextTick(r):e.once("finish",r)),t.ended=!0,e.writable=!1}(this,n,r),this},Object.defineProperty(M.prototype,"writableLength",{enumerable:!1,get:function(){return this._writableState.length}}),Object.defineProperty(M.prototype,"destroyed",{enumerable:!1,get:function(){return void 0!==this._writableState&&this._writableState.destroyed},set:function(e){this._writableState&&(this._writableState.destroyed=e)}}),M.prototype.destroy=d.destroy,M.prototype._undestroy=d.undestroy,M.prototype._destroy=function(e,t){t(e)}},9536:(e,t,r)=>{"use strict";var n;function i(e,t,r){return(t=function(e){var t=function(e){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var o=r(2339),s=Symbol("lastResolve"),a=Symbol("lastReject"),c=Symbol("error"),u=Symbol("ended"),d=Symbol("lastPromise"),f=Symbol("handlePromise"),h=Symbol("stream");function l(e,t){return{value:e,done:t}}function p(e){var t=e[s];if(null!==t){var r=e[h].read();null!==r&&(e[d]=null,e[s]=null,e[a]=null,t(l(r,!1)))}}function b(e){process.nextTick(p,e)}var y=Object.getPrototypeOf((function(){})),m=Object.setPrototypeOf((i(n={get stream(){return this[h]},next:function(){var e=this,t=this[c];if(null!==t)return Promise.reject(t);if(this[u])return Promise.resolve(l(void 0,!0));if(this[h].destroyed)return new Promise((function(t,r){process.nextTick((function(){e[c]?r(e[c]):t(l(void 0,!0))}))}));var r,n=this[d];if(n)r=new Promise(function(e,t){return function(r,n){e.then((function(){t[u]?r(l(void 0,!0)):t[f](r,n)}),n)}}(n,this));else{var i=this[h].read();if(null!==i)return Promise.resolve(l(i,!1));r=new Promise(this[f])}return this[d]=r,r}},Symbol.asyncIterator,(function(){return this})),i(n,"return",(function(){var e=this;return new Promise((function(t,r){e[h].destroy(null,(function(e){e?r(e):t(l(void 0,!0))}))}))})),n),y);e.exports=function(e){var t,r=Object.create(m,(i(t={},h,{value:e,writable:!0}),i(t,s,{value:null,writable:!0}),i(t,a,{value:null,writable:!0}),i(t,c,{value:null,writable:!0}),i(t,u,{value:e._readableState.endEmitted,writable:!0}),i(t,f,{value:function(e,t){var n=r[h].read();n?(r[d]=null,r[s]=null,r[a]=null,e(l(n,!1))):(r[s]=e,r[a]=t)},writable:!0}),t));return r[d]=null,o(e,(function(e){if(e&&"ERR_STREAM_PREMATURE_CLOSE"!==e.code){var t=r[a];return null!==t&&(r[d]=null,r[s]=null,r[a]=null,t(e)),void(r[c]=e)}var n=r[s];null!==n&&(r[d]=null,r[s]=null,r[a]=null,n(l(void 0,!0))),r[u]=!0})),e.on("readable",b.bind(null,r)),r}},20:(e,t,r)=>{"use strict";function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,r){return(t=a(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,a(n.key),n)}}function a(e){var t=function(e){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}var c=r(6533).Buffer,u=r(3541).inspect,d=u&&u.custom||"inspect";e.exports=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.head=null,this.tail=null,this.length=0}var t,r;return t=e,(r=[{key:"push",value:function(e){var t={data:e,next:null};this.length>0?this.tail.next=t:this.head=t,this.tail=t,++this.length}},{key:"unshift",value:function(e){var t={data:e,next:this.head};0===this.length&&(this.tail=t),this.head=t,++this.length}},{key:"shift",value:function(){if(0!==this.length){var e=this.head.data;return 1===this.length?this.head=this.tail=null:this.head=this.head.next,--this.length,e}}},{key:"clear",value:function(){this.head=this.tail=null,this.length=0}},{key:"join",value:function(e){if(0===this.length)return"";for(var t=this.head,r=""+t.data;t=t.next;)r+=e+t.data;return r}},{key:"concat",value:function(e){if(0===this.length)return c.alloc(0);for(var t,r,n,i=c.allocUnsafe(e>>>0),o=this.head,s=0;o;)t=o.data,r=i,n=s,c.prototype.copy.call(t,r,n),s+=o.data.length,o=o.next;return i}},{key:"consume",value:function(e,t){var r;return e<this.head.data.length?(r=this.head.data.slice(0,e),this.head.data=this.head.data.slice(e)):r=e===this.head.data.length?this.shift():t?this._getString(e):this._getBuffer(e),r}},{key:"first",value:function(){return this.head.data}},{key:"_getString",value:function(e){var t=this.head,r=1,n=t.data;for(e-=n.length;t=t.next;){var i=t.data,o=e>i.length?i.length:e;if(o===i.length?n+=i:n+=i.slice(0,e),0==(e-=o)){o===i.length?(++r,t.next?this.head=t.next:this.head=this.tail=null):(this.head=t,t.data=i.slice(o));break}++r}return this.length-=r,n}},{key:"_getBuffer",value:function(e){var t=c.allocUnsafe(e),r=this.head,n=1;for(r.data.copy(t),e-=r.data.length;r=r.next;){var i=r.data,o=e>i.length?i.length:e;if(i.copy(t,t.length-e,0,o),0==(e-=o)){o===i.length?(++n,r.next?this.head=r.next:this.head=this.tail=null):(this.head=r,r.data=i.slice(o));break}++n}return this.length-=n,t}},{key:d,value:function(e,t){return u(this,i(i({},t),{},{depth:0,customInspect:!1}))}}])&&s(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}()},917:e=>{"use strict";function t(e,t){n(e,t),r(e)}function r(e){e._writableState&&!e._writableState.emitClose||e._readableState&&!e._readableState.emitClose||e.emit("close")}function n(e,t){e.emit("error",t)}e.exports={destroy:function(e,i){var o=this,s=this._readableState&&this._readableState.destroyed,a=this._writableState&&this._writableState.destroyed;return s||a?(i?i(e):e&&(this._writableState?this._writableState.errorEmitted||(this._writableState.errorEmitted=!0,process.nextTick(n,this,e)):process.nextTick(n,this,e)),this):(this._readableState&&(this._readableState.destroyed=!0),this._writableState&&(this._writableState.destroyed=!0),this._destroy(e||null,(function(e){!i&&e?o._writableState?o._writableState.errorEmitted?process.nextTick(r,o):(o._writableState.errorEmitted=!0,process.nextTick(t,o,e)):process.nextTick(t,o,e):i?(process.nextTick(r,o),i(e)):process.nextTick(r,o)})),this)},undestroy:function(){this._readableState&&(this._readableState.destroyed=!1,this._readableState.reading=!1,this._readableState.ended=!1,this._readableState.endEmitted=!1),this._writableState&&(this._writableState.destroyed=!1,this._writableState.ended=!1,this._writableState.ending=!1,this._writableState.finalCalled=!1,this._writableState.prefinished=!1,this._writableState.finished=!1,this._writableState.errorEmitted=!1)},errorOrDestroy:function(e,t){var r=e._readableState,n=e._writableState;r&&r.autoDestroy||n&&n.autoDestroy?e.destroy(t):e.emit("error",t)}}},2339:(e,t,r)=>{"use strict";var n=r(289).F.ERR_STREAM_PREMATURE_CLOSE;function i(){}e.exports=function e(t,r,o){if("function"==typeof r)return e(t,null,r);r||(r={}),o=function(e){var t=!1;return function(){if(!t){t=!0;for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];e.apply(this,n)}}}(o||i);var s=r.readable||!1!==r.readable&&t.readable,a=r.writable||!1!==r.writable&&t.writable,c=function(){t.writable||d()},u=t._writableState&&t._writableState.finished,d=function(){a=!1,u=!0,s||o.call(t)},f=t._readableState&&t._readableState.endEmitted,h=function(){s=!1,f=!0,a||o.call(t)},l=function(e){o.call(t,e)},p=function(){var e;return s&&!f?(t._readableState&&t._readableState.ended||(e=new n),o.call(t,e)):a&&!u?(t._writableState&&t._writableState.ended||(e=new n),o.call(t,e)):void 0},b=function(){t.req.on("finish",d)};return function(e){return e.setHeader&&"function"==typeof e.abort}(t)?(t.on("complete",d),t.on("abort",p),t.req?b():t.on("request",b)):a&&!t._writableState&&(t.on("end",c),t.on("close",c)),t.on("end",h),t.on("finish",d),!1!==r.error&&t.on("error",l),t.on("close",p),function(){t.removeListener("complete",d),t.removeListener("abort",p),t.removeListener("request",b),t.req&&t.req.removeListener("finish",d),t.removeListener("end",c),t.removeListener("close",c),t.removeListener("finish",d),t.removeListener("end",h),t.removeListener("error",l),t.removeListener("close",p)}}},4918:e=>{e.exports=function(){throw new Error("Readable.from is not available in the browser")}},5481:(e,t,r)=>{"use strict";var n,i=r(289).F,o=i.ERR_MISSING_ARGS,s=i.ERR_STREAM_DESTROYED;function a(e){if(e)throw e}function c(e){e()}function u(e,t){return e.pipe(t)}e.exports=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];var d,f=function(e){return e.length?"function"!=typeof e[e.length-1]?a:e.pop():a}(t);if(Array.isArray(t[0])&&(t=t[0]),t.length<2)throw new o("streams");var h=t.map((function(e,i){var o=i<t.length-1;return function(e,t,i,o){o=function(e){var t=!1;return function(){t||(t=!0,e.apply(void 0,arguments))}}(o);var a=!1;e.on("close",(function(){a=!0})),void 0===n&&(n=r(2339)),n(e,{readable:t,writable:i},(function(e){if(e)return o(e);a=!0,o()}));var c=!1;return function(t){if(!a&&!c)return c=!0,function(e){return e.setHeader&&"function"==typeof e.abort}(e)?e.abort():"function"==typeof e.destroy?e.destroy():void o(t||new s("pipe"))}}(e,o,i>0,(function(e){d||(d=e),e&&h.forEach(c),o||(h.forEach(c),f(d))}))}));return t.reduce(u)}},5750:(e,t,r)=>{"use strict";var n=r(289).F.ERR_INVALID_OPT_VALUE;e.exports={getHighWaterMark:function(e,t,r,i){var o=function(e,t,r){return null!=e.highWaterMark?e.highWaterMark:t?e[r]:null}(t,i,r);if(null!=o){if(!isFinite(o)||Math.floor(o)!==o||o<0)throw new n(i?r:"highWaterMark",o);return Math.floor(o)}return e.objectMode?16:16384}}},2534:(e,t,r)=>{e.exports=r(381).EventEmitter},1094:(e,t,r)=>{(t=e.exports=r(3033)).Stream=t,t.Readable=t,t.Writable=r(2553),t.Duplex=r(5707),t.Transform=r(141),t.PassThrough=r(5271),t.finished=r(2339),t.pipeline=r(5481)},3934:(e,t,r)=>{"use strict";var n=r(6533).Buffer,i=r(1193),o=r(800),s=new Array(16),a=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],c=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],u=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],d=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11],f=[0,1518500249,1859775393,2400959708,2840853838],h=[1352829926,1548603684,1836072691,2053994217,0];function l(){o.call(this,64),this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520}function p(e,t){return e<<t|e>>>32-t}function b(e,t,r,n,i,o,s,a){return p(e+(t^r^n)+o+s|0,a)+i|0}function y(e,t,r,n,i,o,s,a){return p(e+(t&r|~t&n)+o+s|0,a)+i|0}function m(e,t,r,n,i,o,s,a){return p(e+((t|~r)^n)+o+s|0,a)+i|0}function g(e,t,r,n,i,o,s,a){return p(e+(t&n|r&~n)+o+s|0,a)+i|0}function v(e,t,r,n,i,o,s,a){return p(e+(t^(r|~n))+o+s|0,a)+i|0}i(l,o),l.prototype._update=function(){for(var e=s,t=0;t<16;++t)e[t]=this._block.readInt32LE(4*t);for(var r=0|this._a,n=0|this._b,i=0|this._c,o=0|this._d,l=0|this._e,w=0|this._a,_=0|this._b,A=0|this._c,S=0|this._d,M=0|this._e,C=0;C<80;C+=1){var T,E;C<16?(T=b(r,n,i,o,l,e[a[C]],f[0],u[C]),E=v(w,_,A,S,M,e[c[C]],h[0],d[C])):C<32?(T=y(r,n,i,o,l,e[a[C]],f[1],u[C]),E=g(w,_,A,S,M,e[c[C]],h[1],d[C])):C<48?(T=m(r,n,i,o,l,e[a[C]],f[2],u[C]),E=m(w,_,A,S,M,e[c[C]],h[2],d[C])):C<64?(T=g(r,n,i,o,l,e[a[C]],f[3],u[C]),E=y(w,_,A,S,M,e[c[C]],h[3],d[C])):(T=v(r,n,i,o,l,e[a[C]],f[4],u[C]),E=b(w,_,A,S,M,e[c[C]],h[4],d[C])),r=l,l=o,o=p(i,10),i=n,n=T,w=M,M=S,S=p(A,10),A=_,_=E}var k=this._b+i+S|0;this._b=this._c+o+M|0,this._c=this._d+l+w|0,this._d=this._e+r+_|0,this._e=this._a+n+A|0,this._a=k},l.prototype._digest=function(){this._block[this._blockOffset++]=128,this._blockOffset>56&&(this._block.fill(0,this._blockOffset,64),this._update(),this._blockOffset=0),this._block.fill(0,this._blockOffset,56),this._block.writeUInt32LE(this._length[0],56),this._block.writeUInt32LE(this._length[1],60),this._update();var e=n.alloc?n.alloc(20):new n(20);return e.writeInt32LE(this._a,0),e.writeInt32LE(this._b,4),e.writeInt32LE(this._c,8),e.writeInt32LE(this._d,12),e.writeInt32LE(this._e,16),e},e.exports=l},6608:(e,t,r)=>{var n=r(6533),i=n.Buffer;function o(e,t){for(var r in e)t[r]=e[r]}function s(e,t,r){return i(e,t,r)}i.from&&i.alloc&&i.allocUnsafe&&i.allocUnsafeSlow?e.exports=n:(o(n,t),t.Buffer=s),s.prototype=Object.create(i.prototype),o(i,s),s.from=function(e,t,r){if("number"==typeof e)throw new TypeError("Argument must not be a number");return i(e,t,r)},s.alloc=function(e,t,r){if("number"!=typeof e)throw new TypeError("Argument must be a number");var n=i(e);return void 0!==t?"string"==typeof r?n.fill(t,r):n.fill(t):n.fill(0),n},s.allocUnsafe=function(e){if("number"!=typeof e)throw new TypeError("Argument must be a number");return i(e)},s.allocUnsafeSlow=function(e){if("number"!=typeof e)throw new TypeError("Argument must be a number");return n.SlowBuffer(e)}},1628:(e,t,r)=>{"use strict";var n,i=r(6533),o=i.Buffer,s={};for(n in i)i.hasOwnProperty(n)&&"SlowBuffer"!==n&&"Buffer"!==n&&(s[n]=i[n]);var a=s.Buffer={};for(n in o)o.hasOwnProperty(n)&&"allocUnsafe"!==n&&"allocUnsafeSlow"!==n&&(a[n]=o[n]);if(s.Buffer.prototype=o.prototype,a.from&&a.from!==Uint8Array.from||(a.from=function(e,t,r){if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type '+typeof e);if(e&&void 0===e.length)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);return o(e,t,r)}),a.alloc||(a.alloc=function(e,t,r){if("number"!=typeof e)throw new TypeError('The "size" argument must be of type number. Received type '+typeof e);if(e<0||e>=2*(1<<30))throw new RangeError('The value "'+e+'" is invalid for option "size"');var n=o(e);return t&&0!==t.length?"string"==typeof r?n.fill(t,r):n.fill(t):n.fill(0),n}),!s.kStringMaxLength)try{s.kStringMaxLength=process.binding("buffer").kStringMaxLength}catch(e){}s.constants||(s.constants={MAX_LENGTH:s.kMaxLength},s.kStringMaxLength&&(s.constants.MAX_STRING_LENGTH=s.kStringMaxLength)),e.exports=s},3366:(e,t,r)=>{var n=r(6608).Buffer;function i(e,t){this._block=n.alloc(e),this._finalSize=t,this._blockSize=e,this._len=0}i.prototype.update=function(e,t){"string"==typeof e&&(t=t||"utf8",e=n.from(e,t));for(var r=this._block,i=this._blockSize,o=e.length,s=this._len,a=0;a<o;){for(var c=s%i,u=Math.min(o-a,i-c),d=0;d<u;d++)r[c+d]=e[a+d];a+=u,(s+=u)%i==0&&this._update(r)}return this._len+=o,this},i.prototype.digest=function(e){var t=this._len%this._blockSize;this._block[t]=128,this._block.fill(0,t+1),t>=this._finalSize&&(this._update(this._block),this._block.fill(0));var r=8*this._len;if(r<=4294967295)this._block.writeUInt32BE(r,this._blockSize-4);else{var n=(4294967295&r)>>>0,i=(r-n)/4294967296;this._block.writeUInt32BE(i,this._blockSize-8),this._block.writeUInt32BE(n,this._blockSize-4)}this._update(this._block);var o=this._hash();return e?o.toString(e):o},i.prototype._update=function(){throw new Error("_update must be implemented by subclass")},e.exports=i},5244:(e,t,r)=>{var n=e.exports=function(e){e=e.toLowerCase();var t=n[e];if(!t)throw new Error(e+" is not supported (we accept pull requests)");return new t};n.sha=r(2954),n.sha1=r(6375),n.sha224=r(4012),n.sha256=r(8729),n.sha384=r(1453),n.sha512=r(1756)},2954:(e,t,r)=>{var n=r(1193),i=r(3366),o=r(6608).Buffer,s=[1518500249,1859775393,-1894007588,-899497514],a=new Array(80);function c(){this.init(),this._w=a,i.call(this,64,56)}function u(e){return e<<30|e>>>2}function d(e,t,r,n){return 0===e?t&r|~t&n:2===e?t&r|t&n|r&n:t^r^n}n(c,i),c.prototype.init=function(){return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,this},c.prototype._update=function(e){for(var t,r=this._w,n=0|this._a,i=0|this._b,o=0|this._c,a=0|this._d,c=0|this._e,f=0;f<16;++f)r[f]=e.readInt32BE(4*f);for(;f<80;++f)r[f]=r[f-3]^r[f-8]^r[f-14]^r[f-16];for(var h=0;h<80;++h){var l=~~(h/20),p=0|((t=n)<<5|t>>>27)+d(l,i,o,a)+c+r[h]+s[l];c=a,a=o,o=u(i),i=n,n=p}this._a=n+this._a|0,this._b=i+this._b|0,this._c=o+this._c|0,this._d=a+this._d|0,this._e=c+this._e|0},c.prototype._hash=function(){var e=o.allocUnsafe(20);return e.writeInt32BE(0|this._a,0),e.writeInt32BE(0|this._b,4),e.writeInt32BE(0|this._c,8),e.writeInt32BE(0|this._d,12),e.writeInt32BE(0|this._e,16),e},e.exports=c},6375:(e,t,r)=>{var n=r(1193),i=r(3366),o=r(6608).Buffer,s=[1518500249,1859775393,-1894007588,-899497514],a=new Array(80);function c(){this.init(),this._w=a,i.call(this,64,56)}function u(e){return e<<5|e>>>27}function d(e){return e<<30|e>>>2}function f(e,t,r,n){return 0===e?t&r|~t&n:2===e?t&r|t&n|r&n:t^r^n}n(c,i),c.prototype.init=function(){return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,this},c.prototype._update=function(e){for(var t,r=this._w,n=0|this._a,i=0|this._b,o=0|this._c,a=0|this._d,c=0|this._e,h=0;h<16;++h)r[h]=e.readInt32BE(4*h);for(;h<80;++h)r[h]=(t=r[h-3]^r[h-8]^r[h-14]^r[h-16])<<1|t>>>31;for(var l=0;l<80;++l){var p=~~(l/20),b=u(n)+f(p,i,o,a)+c+r[l]+s[p]|0;c=a,a=o,o=d(i),i=n,n=b}this._a=n+this._a|0,this._b=i+this._b|0,this._c=o+this._c|0,this._d=a+this._d|0,this._e=c+this._e|0},c.prototype._hash=function(){var e=o.allocUnsafe(20);return e.writeInt32BE(0|this._a,0),e.writeInt32BE(0|this._b,4),e.writeInt32BE(0|this._c,8),e.writeInt32BE(0|this._d,12),e.writeInt32BE(0|this._e,16),e},e.exports=c},4012:(e,t,r)=>{var n=r(1193),i=r(8729),o=r(3366),s=r(6608).Buffer,a=new Array(64);function c(){this.init(),this._w=a,o.call(this,64,56)}n(c,i),c.prototype.init=function(){return this._a=3238371032,this._b=914150663,this._c=812702999,this._d=4144912697,this._e=4290775857,this._f=1750603025,this._g=1694076839,this._h=3204075428,this},c.prototype._hash=function(){var e=s.allocUnsafe(28);return e.writeInt32BE(this._a,0),e.writeInt32BE(this._b,4),e.writeInt32BE(this._c,8),e.writeInt32BE(this._d,12),e.writeInt32BE(this._e,16),e.writeInt32BE(this._f,20),e.writeInt32BE(this._g,24),e},e.exports=c},8729:(e,t,r)=>{var n=r(1193),i=r(3366),o=r(6608).Buffer,s=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],a=new Array(64);function c(){this.init(),this._w=a,i.call(this,64,56)}function u(e,t,r){return r^e&(t^r)}function d(e,t,r){return e&t|r&(e|t)}function f(e){return(e>>>2|e<<30)^(e>>>13|e<<19)^(e>>>22|e<<10)}function h(e){return(e>>>6|e<<26)^(e>>>11|e<<21)^(e>>>25|e<<7)}function l(e){return(e>>>7|e<<25)^(e>>>18|e<<14)^e>>>3}n(c,i),c.prototype.init=function(){return this._a=1779033703,this._b=3144134277,this._c=1013904242,this._d=2773480762,this._e=1359893119,this._f=2600822924,this._g=528734635,this._h=1541459225,this},c.prototype._update=function(e){for(var t,r=this._w,n=0|this._a,i=0|this._b,o=0|this._c,a=0|this._d,c=0|this._e,p=0|this._f,b=0|this._g,y=0|this._h,m=0;m<16;++m)r[m]=e.readInt32BE(4*m);for(;m<64;++m)r[m]=0|(((t=r[m-2])>>>17|t<<15)^(t>>>19|t<<13)^t>>>10)+r[m-7]+l(r[m-15])+r[m-16];for(var g=0;g<64;++g){var v=y+h(c)+u(c,p,b)+s[g]+r[g]|0,w=f(n)+d(n,i,o)|0;y=b,b=p,p=c,c=a+v|0,a=o,o=i,i=n,n=v+w|0}this._a=n+this._a|0,this._b=i+this._b|0,this._c=o+this._c|0,this._d=a+this._d|0,this._e=c+this._e|0,this._f=p+this._f|0,this._g=b+this._g|0,this._h=y+this._h|0},c.prototype._hash=function(){var e=o.allocUnsafe(32);return e.writeInt32BE(this._a,0),e.writeInt32BE(this._b,4),e.writeInt32BE(this._c,8),e.writeInt32BE(this._d,12),e.writeInt32BE(this._e,16),e.writeInt32BE(this._f,20),e.writeInt32BE(this._g,24),e.writeInt32BE(this._h,28),e},e.exports=c},1453:(e,t,r)=>{var n=r(1193),i=r(1756),o=r(3366),s=r(6608).Buffer,a=new Array(160);function c(){this.init(),this._w=a,o.call(this,128,112)}n(c,i),c.prototype.init=function(){return this._ah=3418070365,this._bh=1654270250,this._ch=2438529370,this._dh=355462360,this._eh=1731405415,this._fh=2394180231,this._gh=3675008525,this._hh=1203062813,this._al=3238371032,this._bl=914150663,this._cl=812702999,this._dl=4144912697,this._el=4290775857,this._fl=1750603025,this._gl=1694076839,this._hl=3204075428,this},c.prototype._hash=function(){var e=s.allocUnsafe(48);function t(t,r,n){e.writeInt32BE(t,n),e.writeInt32BE(r,n+4)}return t(this._ah,this._al,0),t(this._bh,this._bl,8),t(this._ch,this._cl,16),t(this._dh,this._dl,24),t(this._eh,this._el,32),t(this._fh,this._fl,40),e},e.exports=c},1756:(e,t,r)=>{var n=r(1193),i=r(3366),o=r(6608).Buffer,s=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591],a=new Array(160);function c(){this.init(),this._w=a,i.call(this,128,112)}function u(e,t,r){return r^e&(t^r)}function d(e,t,r){return e&t|r&(e|t)}function f(e,t){return(e>>>28|t<<4)^(t>>>2|e<<30)^(t>>>7|e<<25)}function h(e,t){return(e>>>14|t<<18)^(e>>>18|t<<14)^(t>>>9|e<<23)}function l(e,t){return(e>>>1|t<<31)^(e>>>8|t<<24)^e>>>7}function p(e,t){return(e>>>1|t<<31)^(e>>>8|t<<24)^(e>>>7|t<<25)}function b(e,t){return(e>>>19|t<<13)^(t>>>29|e<<3)^e>>>6}function y(e,t){return(e>>>19|t<<13)^(t>>>29|e<<3)^(e>>>6|t<<26)}function m(e,t){return e>>>0<t>>>0?1:0}n(c,i),c.prototype.init=function(){return this._ah=1779033703,this._bh=3144134277,this._ch=1013904242,this._dh=2773480762,this._eh=1359893119,this._fh=2600822924,this._gh=528734635,this._hh=1541459225,this._al=4089235720,this._bl=2227873595,this._cl=4271175723,this._dl=1595750129,this._el=2917565137,this._fl=725511199,this._gl=4215389547,this._hl=327033209,this},c.prototype._update=function(e){for(var t=this._w,r=0|this._ah,n=0|this._bh,i=0|this._ch,o=0|this._dh,a=0|this._eh,c=0|this._fh,g=0|this._gh,v=0|this._hh,w=0|this._al,_=0|this._bl,A=0|this._cl,S=0|this._dl,M=0|this._el,C=0|this._fl,T=0|this._gl,E=0|this._hl,k=0;k<32;k+=2)t[k]=e.readInt32BE(4*k),t[k+1]=e.readInt32BE(4*k+4);for(;k<160;k+=2){var I=t[k-30],x=t[k-30+1],B=l(I,x),U=p(x,I),P=b(I=t[k-4],x=t[k-4+1]),O=y(x,I),R=t[k-14],L=t[k-14+1],N=t[k-32],j=t[k-32+1],D=U+L|0,F=B+R+m(D,U)|0;F=(F=F+P+m(D=D+O|0,O)|0)+N+m(D=D+j|0,j)|0,t[k]=F,t[k+1]=D}for(var H=0;H<160;H+=2){F=t[H],D=t[H+1];var q=d(r,n,i),$=d(w,_,A),V=f(r,w),z=f(w,r),G=h(a,M),K=h(M,a),W=s[H],J=s[H+1],Z=u(a,c,g),X=u(M,C,T),Y=E+K|0,Q=v+G+m(Y,E)|0;Q=(Q=(Q=Q+Z+m(Y=Y+X|0,X)|0)+W+m(Y=Y+J|0,J)|0)+F+m(Y=Y+D|0,D)|0;var ee=z+$|0,te=V+q+m(ee,z)|0;v=g,E=T,g=c,T=C,c=a,C=M,a=o+Q+m(M=S+Y|0,S)|0,o=i,S=A,i=n,A=_,n=r,_=w,r=Q+te+m(w=Y+ee|0,Y)|0}this._al=this._al+w|0,this._bl=this._bl+_|0,this._cl=this._cl+A|0,this._dl=this._dl+S|0,this._el=this._el+M|0,this._fl=this._fl+C|0,this._gl=this._gl+T|0,this._hl=this._hl+E|0,this._ah=this._ah+r+m(this._al,w)|0,this._bh=this._bh+n+m(this._bl,_)|0,this._ch=this._ch+i+m(this._cl,A)|0,this._dh=this._dh+o+m(this._dl,S)|0,this._eh=this._eh+a+m(this._el,M)|0,this._fh=this._fh+c+m(this._fl,C)|0,this._gh=this._gh+g+m(this._gl,T)|0,this._hh=this._hh+v+m(this._hl,E)|0},c.prototype._hash=function(){var e=o.allocUnsafe(64);function t(t,r,n){e.writeInt32BE(t,n),e.writeInt32BE(r,n+4)}return t(this._ah,this._al,0),t(this._bh,this._bl,8),t(this._ch,this._cl,16),t(this._dh,this._dl,24),t(this._eh,this._el,32),t(this._fh,this._fl,40),t(this._gh,this._gl,48),t(this._hh,this._hl,56),e},e.exports=c},3803:(e,t,r)=>{e.exports=i;var n=r(381).EventEmitter;function i(){n.call(this)}r(1193)(i,n),i.Readable=r(3033),i.Writable=r(2553),i.Duplex=r(5707),i.Transform=r(141),i.PassThrough=r(5271),i.finished=r(2339),i.pipeline=r(5481),i.Stream=i,i.prototype.pipe=function(e,t){var r=this;function i(t){e.writable&&!1===e.write(t)&&r.pause&&r.pause()}function o(){r.readable&&r.resume&&r.resume()}r.on("data",i),e.on("drain",o),e._isStdio||t&&!1===t.end||(r.on("end",a),r.on("close",c));var s=!1;function a(){s||(s=!0,e.end())}function c(){s||(s=!0,"function"==typeof e.destroy&&e.destroy())}function u(e){if(d(),0===n.listenerCount(this,"error"))throw e}function d(){r.removeListener("data",i),e.removeListener("drain",o),r.removeListener("end",a),r.removeListener("close",c),r.removeListener("error",u),e.removeListener("error",u),r.removeListener("end",d),r.removeListener("close",d),e.removeListener("close",d)}return r.on("error",u),e.on("error",u),r.on("end",d),r.on("close",d),e.on("close",d),e.emit("pipe",r),e}},6704:(e,t,r)=>{"use strict";var n=r(6608).Buffer,i=n.isEncoding||function(e){switch((e=""+e)&&e.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}};function o(e){var t;switch(this.encoding=function(e){var t=function(e){if(!e)return"utf8";for(var t;;)switch(e){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return e;default:if(t)return;e=(""+e).toLowerCase(),t=!0}}(e);if("string"!=typeof t&&(n.isEncoding===i||!i(e)))throw new Error("Unknown encoding: "+e);return t||e}(e),this.encoding){case"utf16le":this.text=c,this.end=u,t=4;break;case"utf8":this.fillLast=a,t=4;break;case"base64":this.text=d,this.end=f,t=3;break;default:return this.write=h,void(this.end=l)}this.lastNeed=0,this.lastTotal=0,this.lastChar=n.allocUnsafe(t)}function s(e){return e<=127?0:e>>5==6?2:e>>4==14?3:e>>3==30?4:e>>6==2?-1:-2}function a(e){var t=this.lastTotal-this.lastNeed,r=function(e,t){if(128!=(192&t[0]))return e.lastNeed=0,"�";if(e.lastNeed>1&&t.length>1){if(128!=(192&t[1]))return e.lastNeed=1,"�";if(e.lastNeed>2&&t.length>2&&128!=(192&t[2]))return e.lastNeed=2,"�"}}(this,e);return void 0!==r?r:this.lastNeed<=e.length?(e.copy(this.lastChar,t,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal)):(e.copy(this.lastChar,t,0,e.length),void(this.lastNeed-=e.length))}function c(e,t){if((e.length-t)%2==0){var r=e.toString("utf16le",t);if(r){var n=r.charCodeAt(r.length-1);if(n>=55296&&n<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=e[e.length-2],this.lastChar[1]=e[e.length-1],r.slice(0,-1)}return r}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=e[e.length-1],e.toString("utf16le",t,e.length-1)}function u(e){var t=e&&e.length?this.write(e):"";if(this.lastNeed){var r=this.lastTotal-this.lastNeed;return t+this.lastChar.toString("utf16le",0,r)}return t}function d(e,t){var r=(e.length-t)%3;return 0===r?e.toString("base64",t):(this.lastNeed=3-r,this.lastTotal=3,1===r?this.lastChar[0]=e[e.length-1]:(this.lastChar[0]=e[e.length-2],this.lastChar[1]=e[e.length-1]),e.toString("base64",t,e.length-r))}function f(e){var t=e&&e.length?this.write(e):"";return this.lastNeed?t+this.lastChar.toString("base64",0,3-this.lastNeed):t}function h(e){return e.toString(this.encoding)}function l(e){return e&&e.length?this.write(e):""}t.I=o,o.prototype.write=function(e){if(0===e.length)return"";var t,r;if(this.lastNeed){if(void 0===(t=this.fillLast(e)))return"";r=this.lastNeed,this.lastNeed=0}else r=0;return r<e.length?t?t+this.text(e,r):this.text(e,r):t||""},o.prototype.end=function(e){var t=e&&e.length?this.write(e):"";return this.lastNeed?t+"�":t},o.prototype.text=function(e,t){var r=function(e,t,r){var n=t.length-1;if(n<r)return 0;var i=s(t[n]);return i>=0?(i>0&&(e.lastNeed=i-1),i):--n<r||-2===i?0:(i=s(t[n]))>=0?(i>0&&(e.lastNeed=i-2),i):--n<r||-2===i?0:(i=s(t[n]))>=0?(i>0&&(2===i?i=0:e.lastNeed=i-3),i):0}(this,e,t);if(!this.lastNeed)return e.toString("utf8",t);this.lastTotal=r;var n=e.length-(r-this.lastNeed);return e.copy(this.lastChar,0,n),e.toString("utf8",t,n)},o.prototype.fillLast=function(e){if(this.lastNeed<=e.length)return e.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);e.copy(this.lastChar,this.lastTotal-this.lastNeed,0,e.length),this.lastNeed-=e.length}},1947:(e,t,r)=>{function n(e){try{if(!r.g.localStorage)return!1}catch(e){return!1}var t=r.g.localStorage[e];return null!=t&&"true"===String(t).toLowerCase()}e.exports=function(e,t){if(n("noDeprecation"))return e;var r=!1;return function(){if(!r){if(n("throwDeprecation"))throw new Error(t);n("traceDeprecation")?console.trace(t):console.warn(t),r=!0}return e.apply(this,arguments)}}},7998:()=>{},7175:()=>{},9322:()=>{},4507:()=>{},3541:()=>{},6429:()=>{},7077:()=>{},5569:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return i(t,e),t},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.groupOfLockupScript=t.subContractId=t.contractIdFromTx=t.addressFromTokenId=t.addressFromContractId=t.addressFromScript=t.addressFromPublicKey=t.publicKeyFromPrivateKey=t.groupOfPrivateKey=t.tokenIdFromAddress=t.contractIdFromAddress=t.groupOfAddress=t.isContractAddress=t.isAssetAddress=t.isValidAddress=t.validateAddress=t.AddressType=void 0;const a=r(9386),c=s(r(3900)),u=r(7695),d=s(r(1540)),f=o(r(4468)),h=r(664),l=r(1678),p=r(3651),b=s(r(160)),y=r(4652),m=new a.ec("secp256k1"),g=32;var v;function w(e){_(e)}function _(e){const t=(0,f.base58ToBytes)(e);if(0===t.length)throw new Error("Address is empty");const r=t[0];if(r===v.P2MPKH){let r;try{r=l.lockupScriptCodec.decode(t).value}catch(t){throw new y.TraceableError(`Invalid multisig address: ${e}`,t)}const n=r.publicKeyHashes.length,i=r.m;if(n<i||i<=0)throw new Error(`Invalid multisig address, n: ${n}, m: ${i}`);const o=p.i32Codec.encode(n).length,s=p.i32Codec.encode(i).length,a=o+g*n+s+1;if(t.length===a)return t}else if((r===v.P2PKH||r===v.P2SH||r===v.P2C)&&33===t.length)return t;throw new Error(`Invalid address: ${e}`)}function A(e){const t=_(e),r=t[0],n=t.slice(1);if(r==v.P2PKH)return function(e){return I(e)}(n);if(r==v.P2MPKH)return function(e){return I(e.slice(1,33))}(n);if(r==v.P2SH)return function(e){return I(e)}(n);{const t=S(e);return t[""+(t.length-1)]}}function S(e){return M(e)}function M(e){const t=(0,f.base58ToBytes)(e);if(0==t.length)throw new Error("Address string is empty");const r=t[0],n=t.slice(1);if(r==v.P2C)return n;throw new Error(`Invalid contract address type: ${r}`)}function C(e,t){return"default"===(t??"default")?m.keyFromPrivate(e).getPublic(!0,"hex"):m.g.mul(new c.default(e,16)).encode("hex",!0).slice(2)}function T(e,t){if("default"===(t??"default")){const t=d.default.blake2b((0,h.hexToBinUnsafe)(e),void 0,32),r=new Uint8Array([v.P2PKH,...t]);return f.default.encode(r)}return E((0,h.hexToBinUnsafe)(`0101000000000458144020${e}8685`))}function E(e){const t=d.default.blake2b(e,void 0,32);return f.default.encode(new Uint8Array([v.P2SH,...t]))}function k(e){const t=(0,h.hexToBinUnsafe)(e),r=new Uint8Array([v.P2C,...t]);return f.default.encode(r)}function I(e){const t=1|(0,b.default)(e);return(0,h.xorByte)(t)%u.TOTAL_NUMBER_OF_GROUPS}!function(e){e[e.P2PKH=0]="P2PKH",e[e.P2MPKH=1]="P2MPKH",e[e.P2SH=2]="P2SH",e[e.P2C=3]="P2C"}(v=t.AddressType||(t.AddressType={})),t.validateAddress=w,t.isValidAddress=function(e){try{return w(e),!0}catch{return!1}},t.isAssetAddress=function(e){const t=_(e)[0];return t===v.P2PKH||t===v.P2MPKH||t===v.P2SH},t.isContractAddress=function(e){return _(e)[0]===v.P2C},t.groupOfAddress=A,t.contractIdFromAddress=S,t.tokenIdFromAddress=function(e){return M(e)},t.groupOfPrivateKey=function(e,t){return A(T(C(e,t),t))},t.publicKeyFromPrivateKey=C,t.addressFromPublicKey=T,t.addressFromScript=E,t.addressFromContractId=k,t.addressFromTokenId=function(e){return k(e)},t.contractIdFromTx=function(e,t){const r=(0,h.hexToBinUnsafe)(e),n=new Uint8Array([...r,t]),i=d.default.blake2b(n,void 0,32);return(0,h.binToHex)(i)},t.subContractId=function(e,t,r){if(r<0||r>=u.TOTAL_NUMBER_OF_GROUPS)throw new Error(`Invalid group ${r}`);if(!(0,h.isHexString)(e))throw new Error(`Invalid parent contract ID: ${e}, expected hex string`);if(!(0,h.isHexString)(t))throw new Error(`Invalid path: ${t}, expected hex string`);const n=(0,h.concatBytes)([(0,h.hexToBinUnsafe)(e),(0,h.hexToBinUnsafe)(t)]),i=new Uint8Array([...d.default.blake2b(d.default.blake2b(n,void 0,32),void 0,32).slice(0,-1),r]);return(0,h.binToHex)(i)},t.groupOfLockupScript=function(e){if("P2PKH"===e.kind)return I(e.value);if("P2MPKH"===e.kind)return I(e.value.publicKeyHashes[0]);if("P2SH"===e.kind)return I(e.value);{const t=e.value;return t[""+(t.length-1)]}}},2581:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),i(r(5569),t)},127:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Api=t.HttpClient=t.ContentType=void 0,r(9114);const n=r(3760);var i;!function(e){e.Json="application/json",e.FormData="multipart/form-data",e.UrlEncoded="application/x-www-form-urlencoded",e.Text="text/plain"}(i=t.ContentType||(t.ContentType={}));class o{constructor(e={}){this.baseUrl="../",this.securityData=null,this.abortControllers=new Map,this.customFetch=(...e)=>fetch(...e),this.baseApiParams={credentials:"same-origin",headers:{},redirect:"follow",referrerPolicy:"no-referrer"},this.setSecurityData=e=>{this.securityData=e},this.contentFormatters={[i.Json]:e=>null===e||"object"!=typeof e&&"string"!=typeof e?e:JSON.stringify(e),[i.Text]:e=>null!==e&&"string"!=typeof e?JSON.stringify(e):e,[i.FormData]:e=>Object.keys(e||{}).reduce(((t,r)=>{const n=e[r];return t.append(r,n instanceof Blob?n:"object"==typeof n&&null!==n?JSON.stringify(n):`${n}`),t}),new FormData),[i.UrlEncoded]:e=>this.toQueryString(e)},this.createAbortSignal=e=>{if(this.abortControllers.has(e)){const t=this.abortControllers.get(e);return t?t.signal:void 0}const t=new AbortController;return this.abortControllers.set(e,t),t.signal},this.abortRequest=e=>{const t=this.abortControllers.get(e);t&&(t.abort(),this.abortControllers.delete(e))},this.request=async({body:e,secure:t,path:r,type:n,query:o,format:s,baseUrl:a,cancelToken:c,...u})=>{const d=("boolean"==typeof t?t:this.baseApiParams.secure)&&this.securityWorker&&await this.securityWorker(this.securityData)||{},f=this.mergeRequestParams(u,d),h=o&&this.toQueryString(o),l=this.contentFormatters[n||i.Json],p=s||f.format;return this.customFetch(`${a||this.baseUrl||""}${r}${h?`?${h}`:""}`,{...f,headers:{...f.headers||{},...n&&n!==i.FormData?{"Content-Type":n}:{}},signal:c?this.createAbortSignal(c):f.signal,body:null==e?null:l(e)}).then((async e=>{const t=e;t.data=null,t.error=null;const r=p?await e[p]().then((e=>(t.ok?t.data=e:t.error=e,t))).catch((e=>(t.error=e,t))):t;return c&&this.abortControllers.delete(c),r}))},Object.assign(this,e)}encodeQueryParam(e,t){return`${encodeURIComponent(e)}=${encodeURIComponent("number"==typeof t?t:`${t}`)}`}addQueryParam(e,t){return this.encodeQueryParam(t,e[t])}addArrayQueryParam(e,t){return e[t].map((e=>this.encodeQueryParam(t,e))).join("&")}toQueryString(e){const t=e||{};return Object.keys(t).filter((e=>void 0!==t[e])).map((e=>Array.isArray(t[e])?this.addArrayQueryParam(t,e):this.addQueryParam(t,e))).join("&")}addQueryParams(e){const t=this.toQueryString(e);return t?`?${t}`:""}mergeRequestParams(e,t){return{...this.baseApiParams,...e,...t||{},headers:{...this.baseApiParams.headers||{},...e.headers||{},...t&&t.headers||{}}}}}t.HttpClient=o,t.Api=class extends o{constructor(){super(...arguments),this.wallets={getWallets:(e={})=>this.request({path:"/wallets",method:"GET",format:"json",...e}).then(n.convertHttpResponse),putWallets:(e,t={})=>this.request({path:"/wallets",method:"PUT",body:e,type:i.Json,format:"json",...t}).then(n.convertHttpResponse),postWallets:(e,t={})=>this.request({path:"/wallets",method:"POST",body:e,type:i.Json,format:"json",...t}).then(n.convertHttpResponse),getWalletsWalletName:(e,t={})=>this.request({path:`/wallets/${e}`,method:"GET",format:"json",...t}).then(n.convertHttpResponse),deleteWalletsWalletName:(e,t,r={})=>this.request({path:`/wallets/${e}`,method:"DELETE",body:t,type:i.Json,...r}).then(n.convertHttpResponse),postWalletsWalletNameLock:(e,t={})=>this.request({path:`/wallets/${e}/lock`,method:"POST",...t}).then(n.convertHttpResponse),postWalletsWalletNameUnlock:(e,t,r={})=>this.request({path:`/wallets/${e}/unlock`,method:"POST",body:t,type:i.Json,...r}).then(n.convertHttpResponse),getWalletsWalletNameBalances:(e,t={})=>this.request({path:`/wallets/${e}/balances`,method:"GET",format:"json",...t}).then(n.convertHttpResponse),postWalletsWalletNameRevealMnemonic:(e,t,r={})=>this.request({path:`/wallets/${e}/reveal-mnemonic`,method:"POST",body:t,type:i.Json,format:"json",...r}).then(n.convertHttpResponse),postWalletsWalletNameTransfer:(e,t,r={})=>this.request({path:`/wallets/${e}/transfer`,method:"POST",body:t,type:i.Json,format:"json",...r}).then(n.convertHttpResponse),postWalletsWalletNameSweepActiveAddress:(e,t,r={})=>this.request({path:`/wallets/${e}/sweep-active-address`,method:"POST",body:t,type:i.Json,format:"json",...r}).then(n.convertHttpResponse),postWalletsWalletNameSweepAllAddresses:(e,t,r={})=>this.request({path:`/wallets/${e}/sweep-all-addresses`,method:"POST",body:t,type:i.Json,format:"json",...r}).then(n.convertHttpResponse),postWalletsWalletNameSign:(e,t,r={})=>this.request({path:`/wallets/${e}/sign`,method:"POST",body:t,type:i.Json,format:"json",...r}).then(n.convertHttpResponse),getWalletsWalletNameAddresses:(e,t={})=>this.request({path:`/wallets/${e}/addresses`,method:"GET",format:"json",...t}).then(n.convertHttpResponse),getWalletsWalletNameAddressesAddress:(e,t,r={})=>this.request({path:`/wallets/${e}/addresses/${t}`,method:"GET",format:"json",...r}).then(n.convertHttpResponse),getWalletsWalletNameMinerAddresses:(e,t={})=>this.request({path:`/wallets/${e}/miner-addresses`,method:"GET",format:"json",...t}).then(n.convertHttpResponse),postWalletsWalletNameDeriveNextAddress:(e,t,r={})=>this.request({path:`/wallets/${e}/derive-next-address`,method:"POST",query:t,format:"json",...r}).then(n.convertHttpResponse),postWalletsWalletNameDeriveNextMinerAddresses:(e,t={})=>this.request({path:`/wallets/${e}/derive-next-miner-addresses`,method:"POST",format:"json",...t}).then(n.convertHttpResponse),postWalletsWalletNameChangeActiveAddress:(e,t,r={})=>this.request({path:`/wallets/${e}/change-active-address`,method:"POST",body:t,type:i.Json,...r}).then(n.convertHttpResponse)},this.infos={getInfosNode:(e={})=>this.request({path:"/infos/node",method:"GET",format:"json",...e}).then(n.convertHttpResponse),getInfosVersion:(e={})=>this.request({path:"/infos/version",method:"GET",format:"json",...e}).then(n.convertHttpResponse),getInfosChainParams:(e={})=>this.request({path:"/infos/chain-params",method:"GET",format:"json",...e}).then(n.convertHttpResponse),getInfosSelfClique:(e={})=>this.request({path:"/infos/self-clique",method:"GET",format:"json",...e}).then(n.convertHttpResponse),getInfosInterCliquePeerInfo:(e={})=>this.request({path:"/infos/inter-clique-peer-info",method:"GET",format:"json",...e}).then(n.convertHttpResponse),getInfosDiscoveredNeighbors:(e={})=>this.request({path:"/infos/discovered-neighbors",method:"GET",format:"json",...e}).then(n.convertHttpResponse),getInfosMisbehaviors:(e={})=>this.request({path:"/infos/misbehaviors",method:"GET",format:"json",...e}).then(n.convertHttpResponse),postInfosMisbehaviors:(e,t={})=>this.request({path:"/infos/misbehaviors",method:"POST",body:e,type:i.Json,...t}).then(n.convertHttpResponse),getInfosUnreachable:(e={})=>this.request({path:"/infos/unreachable",method:"GET",format:"json",...e}).then(n.convertHttpResponse),postInfosDiscovery:(e,t={})=>this.request({path:"/infos/discovery",method:"POST",body:e,type:i.Json,...t}).then(n.convertHttpResponse),getInfosHistoryHashrate:(e,t={})=>this.request({path:"/infos/history-hashrate",method:"GET",query:e,format:"json",...t}).then(n.convertHttpResponse),getInfosCurrentHashrate:(e,t={})=>this.request({path:"/infos/current-hashrate",method:"GET",query:e,format:"json",...t}).then(n.convertHttpResponse),getInfosCurrentDifficulty:(e={})=>this.request({path:"/infos/current-difficulty",method:"GET",format:"json",...e}).then(n.convertHttpResponse)},this.blockflow={getBlockflowBlocks:(e,t={})=>this.request({path:"/blockflow/blocks",method:"GET",query:e,format:"json",...t}).then(n.convertHttpResponse),getBlockflowBlocksWithEvents:(e,t={})=>this.request({path:"/blockflow/blocks-with-events",method:"GET",query:e,format:"json",...t}).then(n.convertHttpResponse),getBlockflowRichBlocks:(e,t={})=>this.request({path:"/blockflow/rich-blocks",method:"GET",query:e,format:"json",...t}).then(n.convertHttpResponse),getBlockflowBlocksBlockHash:(e,t={})=>this.request({path:`/blockflow/blocks/${e}`,method:"GET",format:"json",...t}).then(n.convertHttpResponse),getBlockflowMainChainBlockByGhostUncleGhostUncleHash:(e,t={})=>this.request({path:`/blockflow/main-chain-block-by-ghost-uncle/${e}`,method:"GET",format:"json",...t}).then(n.convertHttpResponse),getBlockflowBlocksWithEventsBlockHash:(e,t={})=>this.request({path:`/blockflow/blocks-with-events/${e}`,method:"GET",format:"json",...t}).then(n.convertHttpResponse),getBlockflowRichBlocksBlockHash:(e,t={})=>this.request({path:`/blockflow/rich-blocks/${e}`,method:"GET",format:"json",...t}).then(n.convertHttpResponse),getBlockflowIsBlockInMainChain:(e,t={})=>this.request({path:"/blockflow/is-block-in-main-chain",method:"GET",query:e,format:"json",...t}).then(n.convertHttpResponse),getBlockflowHashes:(e,t={})=>this.request({path:"/blockflow/hashes",method:"GET",query:e,format:"json",...t}).then(n.convertHttpResponse),getBlockflowChainInfo:(e,t={})=>this.request({path:"/blockflow/chain-info",method:"GET",query:e,format:"json",...t}).then(n.convertHttpResponse),getBlockflowHeadersBlockHash:(e,t={})=>this.request({path:`/blockflow/headers/${e}`,method:"GET",format:"json",...t}).then(n.convertHttpResponse),getBlockflowRawBlocksBlockHash:(e,t={})=>this.request({path:`/blockflow/raw-blocks/${e}`,method:"GET",format:"json",...t}).then(n.convertHttpResponse)},this.addresses={getAddressesAddressBalance:(e,t,r={})=>this.request({path:`/addresses/${e}/balance`,method:"GET",query:t,format:"json",...r}).then(n.convertHttpResponse),getAddressesAddressUtxos:(e,t={})=>this.request({path:`/addresses/${e}/utxos`,method:"GET",format:"json",...t}).then(n.convertHttpResponse),getAddressesAddressGroup:(e,t={})=>this.request({path:`/addresses/${e}/group`,method:"GET",format:"json",...t}).then(n.convertHttpResponse)},this.transactions={postTransactionsBuild:(e,t={})=>this.request({path:"/transactions/build",method:"POST",body:e,type:i.Json,format:"json",...t}).then(n.convertHttpResponse),postTransactionsBuildMultiAddresses:(e,t={})=>this.request({path:"/transactions/build-multi-addresses",method:"POST",body:e,type:i.Json,format:"json",...t}).then(n.convertHttpResponse),postTransactionsSweepAddressBuild:(e,t={})=>this.request({path:"/transactions/sweep-address/build",method:"POST",body:e,type:i.Json,format:"json",...t}).then(n.convertHttpResponse),postTransactionsSubmit:(e,t={})=>this.request({path:"/transactions/submit",method:"POST",body:e,type:i.Json,format:"json",...t}).then(n.convertHttpResponse),postTransactionsDecodeUnsignedTx:(e,t={})=>this.request({path:"/transactions/decode-unsigned-tx",method:"POST",body:e,type:i.Json,format:"json",...t}).then(n.convertHttpResponse),getTransactionsDetailsTxid:(e,t,r={})=>this.request({path:`/transactions/details/${e}`,method:"GET",query:t,format:"json",...r}).then(n.convertHttpResponse),getTransactionsRichDetailsTxid:(e,t,r={})=>this.request({path:`/transactions/rich-details/${e}`,method:"GET",query:t,format:"json",...r}).then(n.convertHttpResponse),getTransactionsRawTxid:(e,t,r={})=>this.request({path:`/transactions/raw/${e}`,method:"GET",query:t,format:"json",...r}).then(n.convertHttpResponse),getTransactionsStatus:(e,t={})=>this.request({path:"/transactions/status",method:"GET",query:e,format:"json",...t}).then(n.convertHttpResponse),getTransactionsTxIdFromOutputref:(e,t={})=>this.request({path:"/transactions/tx-id-from-outputref",method:"GET",query:e,format:"json",...t}).then(n.convertHttpResponse),postTransactionsBuildChained:(e,t={})=>this.request({path:"/transactions/build-chained",method:"POST",body:e,type:i.Json,format:"json",...t}).then(n.convertHttpResponse)},this.mempool={getMempoolTransactions:(e={})=>this.request({path:"/mempool/transactions",method:"GET",format:"json",...e}).then(n.convertHttpResponse),deleteMempoolTransactions:(e={})=>this.request({path:"/mempool/transactions",method:"DELETE",...e}).then(n.convertHttpResponse),putMempoolTransactionsRebroadcast:(e,t={})=>this.request({path:"/mempool/transactions/rebroadcast",method:"PUT",query:e,...t}).then(n.convertHttpResponse),putMempoolTransactionsValidate:(e={})=>this.request({path:"/mempool/transactions/validate",method:"PUT",...e}).then(n.convertHttpResponse)},this.contracts={postContractsCompileScript:(e,t={})=>this.request({path:"/contracts/compile-script",method:"POST",body:e,type:i.Json,format:"json",...t}).then(n.convertHttpResponse),postContractsUnsignedTxExecuteScript:(e,t={})=>this.request({path:"/contracts/unsigned-tx/execute-script",method:"POST",body:e,type:i.Json,format:"json",...t}).then(n.convertHttpResponse),postContractsCompileContract:(e,t={})=>this.request({path:"/contracts/compile-contract",method:"POST",body:e,type:i.Json,format:"json",...t}).then(n.convertHttpResponse),postContractsCompileProject:(e,t={})=>this.request({path:"/contracts/compile-project",method:"POST",body:e,type:i.Json,format:"json",...t}).then(n.convertHttpResponse),postContractsUnsignedTxDeployContract:(e,t={})=>this.request({path:"/contracts/unsigned-tx/deploy-contract",method:"POST",body:e,type:i.Json,format:"json",...t}).then(n.convertHttpResponse),getContractsAddressState:(e,t={})=>this.request({path:`/contracts/${e}/state`,method:"GET",format:"json",...t}).then(n.convertHttpResponse),postContractsTestContract:(e,t={})=>this.request({path:"/contracts/test-contract",method:"POST",body:e,type:i.Json,format:"json",...t}).then(n.convertHttpResponse),postContractsCallContract:(e,t={})=>this.request({path:"/contracts/call-contract",method:"POST",body:e,type:i.Json,format:"json",...t}).then(n.convertHttpResponse),postContractsMulticallContract:(e,t={})=>this.request({path:"/contracts/multicall-contract",method:"POST",body:e,type:i.Json,format:"json",...t}).then(n.convertHttpResponse),getContractsAddressParent:(e,t={})=>this.request({path:`/contracts/${e}/parent`,method:"GET",format:"json",...t}).then(n.convertHttpResponse),getContractsAddressSubContracts:(e,t,r={})=>this.request({path:`/contracts/${e}/sub-contracts`,method:"GET",query:t,format:"json",...r}).then(n.convertHttpResponse),getContractsAddressSubContractsCurrentCount:(e,t={})=>this.request({path:`/contracts/${e}/sub-contracts/current-count`,method:"GET",format:"json",...t}).then(n.convertHttpResponse),postContractsCallTxScript:(e,t={})=>this.request({path:"/contracts/call-tx-script",method:"POST",body:e,type:i.Json,format:"json",...t}).then(n.convertHttpResponse)},this.multisig={postMultisigAddress:(e,t={})=>this.request({path:"/multisig/address",method:"POST",body:e,type:i.Json,format:"json",...t}).then(n.convertHttpResponse),postMultisigBuild:(e,t={})=>this.request({path:"/multisig/build",method:"POST",body:e,type:i.Json,format:"json",...t}).then(n.convertHttpResponse),postMultisigSweep:(e,t={})=>this.request({path:"/multisig/sweep",method:"POST",body:e,type:i.Json,format:"json",...t}).then(n.convertHttpResponse),postMultisigSubmit:(e,t={})=>this.request({path:"/multisig/submit",method:"POST",body:e,type:i.Json,format:"json",...t}).then(n.convertHttpResponse)},this.miners={postMinersCpuMining:(e,t={})=>this.request({path:"/miners/cpu-mining",method:"POST",query:e,format:"json",...t}).then(n.convertHttpResponse),postMinersCpuMiningMineOneBlock:(e,t={})=>this.request({path:"/miners/cpu-mining/mine-one-block",method:"POST",query:e,format:"json",...t}).then(n.convertHttpResponse),getMinersAddresses:(e={})=>this.request({path:"/miners/addresses",method:"GET",format:"json",...e}).then(n.convertHttpResponse),putMinersAddresses:(e,t={})=>this.request({path:"/miners/addresses",method:"PUT",body:e,type:i.Json,...t}).then(n.convertHttpResponse)},this.events={getEventsContractContractaddress:(e,t,r={})=>this.request({path:`/events/contract/${e}`,method:"GET",query:t,format:"json",...r}).then(n.convertHttpResponse),getEventsContractContractaddressCurrentCount:(e,t={})=>this.request({path:`/events/contract/${e}/current-count`,method:"GET",format:"json",...t}).then(n.convertHttpResponse),getEventsTxIdTxid:(e,t,r={})=>this.request({path:`/events/tx-id/${e}`,method:"GET",query:t,format:"json",...r}).then(n.convertHttpResponse),getEventsBlockHashBlockhash:(e,t,r={})=>this.request({path:`/events/block-hash/${e}`,method:"GET",query:t,format:"json",...r}).then(n.convertHttpResponse)},this.utils={postUtilsVerifySignature:(e,t={})=>this.request({path:"/utils/verify-signature",method:"POST",body:e,type:i.Json,format:"json",...t}).then(n.convertHttpResponse),postUtilsTargetToHashrate:(e,t={})=>this.request({path:"/utils/target-to-hashrate",method:"POST",body:e,type:i.Json,format:"json",...t}).then(n.convertHttpResponse),putUtilsCheckHashIndexing:(e={})=>this.request({path:"/utils/check-hash-indexing",method:"PUT",...e}).then(n.convertHttpResponse)}}}},3877:(e,t,r)=>{"use strict";var n,i,o,s,a,c,u,d,f,h;Object.defineProperty(t,"__esModule",{value:!0}),t.Api=t.HttpClient=t.ContentType=t.PaginationLimitDefault=t.Currencies=t.MaxSizeAddresses=t.PaginationLimitMax=t.PaginationPageDefault=t.MaxSizeAddressesForTokens=t.MaxSizeTokens=t.TokensWithPrice=t.TokenStdInterfaceId=t.IntervalType=void 0,(h=t.IntervalType||(t.IntervalType={})).Daily="daily",h.Hourly="hourly",h.Weekly="weekly",(f=t.TokenStdInterfaceId||(t.TokenStdInterfaceId={})).Fungible="fungible",f.NonFungible="non-fungible",f.NonStandard="non-standard",(d=t.TokensWithPrice||(t.TokensWithPrice={})).WETH="WETH",d.ALPH="ALPH",d.USDT="USDT",d.AYIN="AYIN",d.DAI="DAI",d.USDC="USDC",d.WBTC="WBTC",(u=t.MaxSizeTokens||(t.MaxSizeTokens={}))[u.Value80=80]="Value80",(c=t.MaxSizeAddressesForTokens||(t.MaxSizeAddressesForTokens={}))[c.Value80=80]="Value80",(a=t.PaginationPageDefault||(t.PaginationPageDefault={}))[a.Value1=1]="Value1",(s=t.PaginationLimitMax||(t.PaginationLimitMax={}))[s.Value100=100]="Value100",s[s.Value20=20]="Value20",(o=t.MaxSizeAddresses||(t.MaxSizeAddresses={}))[o.Value80=80]="Value80",(i=t.Currencies||(t.Currencies={})).Btc="btc",i.Eth="eth",i.Usd="usd",i.Eur="eur",i.Chf="chf",i.Gbp="gbp",i.Idr="idr",i.Vnd="vnd",i.Rub="rub",i.Try="try",i.Cad="cad",i.Aud="aud",(n=t.PaginationLimitDefault||(t.PaginationLimitDefault={}))[n.Value20=20]="Value20",n[n.Value10=10]="Value10",r(9114);const l=r(3760);var p;!function(e){e.Json="application/json",e.FormData="multipart/form-data",e.UrlEncoded="application/x-www-form-urlencoded",e.Text="text/plain"}(p=t.ContentType||(t.ContentType={}));class b{constructor(e={}){this.baseUrl="",this.securityData=null,this.abortControllers=new Map,this.customFetch=(...e)=>fetch(...e),this.baseApiParams={credentials:"same-origin",headers:{},redirect:"follow",referrerPolicy:"no-referrer"},this.setSecurityData=e=>{this.securityData=e},this.contentFormatters={[p.Json]:e=>null===e||"object"!=typeof e&&"string"!=typeof e?e:JSON.stringify(e),[p.Text]:e=>null!==e&&"string"!=typeof e?JSON.stringify(e):e,[p.FormData]:e=>Object.keys(e||{}).reduce(((t,r)=>{const n=e[r];return t.append(r,n instanceof Blob?n:"object"==typeof n&&null!==n?JSON.stringify(n):`${n}`),t}),new FormData),[p.UrlEncoded]:e=>this.toQueryString(e)},this.createAbortSignal=e=>{if(this.abortControllers.has(e)){const t=this.abortControllers.get(e);return t?t.signal:void 0}const t=new AbortController;return this.abortControllers.set(e,t),t.signal},this.abortRequest=e=>{const t=this.abortControllers.get(e);t&&(t.abort(),this.abortControllers.delete(e))},this.request=async({body:e,secure:t,path:r,type:n,query:i,format:o,baseUrl:s,cancelToken:a,...c})=>{const u=("boolean"==typeof t?t:this.baseApiParams.secure)&&this.securityWorker&&await this.securityWorker(this.securityData)||{},d=this.mergeRequestParams(c,u),f=i&&this.toQueryString(i),h=this.contentFormatters[n||p.Json],l=o||d.format;return this.customFetch(`${s||this.baseUrl||""}${r}${f?`?${f}`:""}`,{...d,headers:{...d.headers||{},...n&&n!==p.FormData?{"Content-Type":n}:{}},signal:a?this.createAbortSignal(a):d.signal,body:null==e?null:h(e)}).then((async e=>{const t=e;t.data=null,t.error=null;const r=l?await e[l]().then((e=>(t.ok?t.data=e:t.error=e,t))).catch((e=>(t.error=e,t))):t;return a&&this.abortControllers.delete(a),r}))},Object.assign(this,e)}encodeQueryParam(e,t){return`${encodeURIComponent(e)}=${encodeURIComponent("number"==typeof t?t:`${t}`)}`}addQueryParam(e,t){return this.encodeQueryParam(t,e[t])}addArrayQueryParam(e,t){return e[t].map((e=>this.encodeQueryParam(t,e))).join("&")}toQueryString(e){const t=e||{};return Object.keys(t).filter((e=>void 0!==t[e])).map((e=>Array.isArray(t[e])?this.addArrayQueryParam(t,e):this.addQueryParam(t,e))).join("&")}addQueryParams(e){const t=this.toQueryString(e);return t?`?${t}`:""}mergeRequestParams(e,t){return{...this.baseApiParams,...e,...t||{},headers:{...this.baseApiParams.headers||{},...e.headers||{},...t&&t.headers||{}}}}}t.HttpClient=b,t.Api=class extends b{constructor(){super(...arguments),this.contracts={getContractsContractAddressSubContracts:(e,t,r={})=>this.request({path:`/contracts/${e}/sub-contracts`,method:"GET",query:t,format:"json",...r}).then(l.convertHttpResponse),getContractsContractAddressCurrentLiveness:(e,t={})=>this.request({path:`/contracts/${e}/current-liveness`,method:"GET",format:"json",...t}).then(l.convertHttpResponse),getContractsContractAddressParent:(e,t={})=>this.request({path:`/contracts/${e}/parent`,method:"GET",format:"json",...t}).then(l.convertHttpResponse)},this.addresses={postAddressesUsed:(e,t={})=>this.request({path:"/addresses/used",method:"POST",body:e,type:p.Json,format:"json",...t}).then(l.convertHttpResponse),getAddressesAddressExportTransactionsCsv:(e,t,r={})=>this.request({path:`/addresses/${e}/export-transactions/csv`,method:"GET",query:t,format:"text",...r}).then(l.convertHttpResponse),getAddressesAddressBalance:(e,t={})=>this.request({path:`/addresses/${e}/balance`,method:"GET",format:"json",...t}).then(l.convertHttpResponse),getAddressesAddressMempoolTransactions:(e,t={})=>this.request({path:`/addresses/${e}/mempool/transactions`,method:"GET",format:"json",...t}).then(l.convertHttpResponse),getAddressesAddressTokensTokenIdTransactions:(e,t,r,n={})=>this.request({path:`/addresses/${e}/tokens/${t}/transactions`,method:"GET",query:r,format:"json",...n}).then(l.convertHttpResponse),getAddressesAddressLatestTransaction:(e,t={})=>this.request({path:`/addresses/${e}/latest-transaction`,method:"GET",format:"json",...t}).then(l.convertHttpResponse),getAddressesAddressTotalTransactions:(e,t={})=>this.request({path:`/addresses/${e}/total-transactions`,method:"GET",format:"json",...t}).then(l.convertHttpResponse),getAddressesAddressTimerangedTransactions:(e,t,r={})=>this.request({path:`/addresses/${e}/timeranged-transactions`,method:"GET",query:t,format:"json",...r}).then(l.convertHttpResponse),getAddressesAddressTransactions:(e,t,r={})=>this.request({path:`/addresses/${e}/transactions`,method:"GET",query:t,format:"json",...r}).then(l.convertHttpResponse),getAddressesAddressAmountHistory:(e,t,r={})=>this.request({path:`/addresses/${e}/amount-history`,method:"GET",query:t,format:"json",...r}).then(l.convertHttpResponse),postAddressesTransactions:(e,t,r={})=>this.request({path:"/addresses/transactions",method:"POST",query:e,body:t,type:p.Json,format:"json",...r}).then(l.convertHttpResponse),getAddressesAddressAmountHistoryDeprecated:(e,t,r={})=>this.request({path:`/addresses/${e}/amount-history-DEPRECATED`,method:"GET",query:t,format:"json",...r}).then(l.convertHttpResponse),getAddressesAddressTokens:(e,t,r={})=>this.request({path:`/addresses/${e}/tokens`,method:"GET",query:t,format:"json",...r}).then(l.convertHttpResponse),getAddressesAddressTokensBalance:(e,t,r={})=>this.request({path:`/addresses/${e}/tokens-balance`,method:"GET",query:t,format:"json",...r}).then(l.convertHttpResponse),getAddressesAddressTokensTokenIdBalance:(e,t,r={})=>this.request({path:`/addresses/${e}/tokens/${t}/balance`,method:"GET",format:"json",...r}).then(l.convertHttpResponse),getAddressesAddress:(e,t={})=>this.request({path:`/addresses/${e}`,method:"GET",format:"json",...t}).then(l.convertHttpResponse),getAddressesAddressPublicKey:(e,t={})=>this.request({path:`/addresses/${e}/public-key`,method:"GET",format:"json",...t}).then(l.convertHttpResponse)},this.infos={getInfosSupply:(e,t={})=>this.request({path:"/infos/supply",method:"GET",query:e,format:"json",...t}).then(l.convertHttpResponse),getInfosSupplyLockedAlph:(e={})=>this.request({path:"/infos/supply/locked-alph",method:"GET",format:"text",...e}).then(l.convertHttpResponse),getInfos:(e={})=>this.request({path:"/infos",method:"GET",format:"json",...e}).then(l.convertHttpResponse),getInfosSupplyCirculatingAlph:(e={})=>this.request({path:"/infos/supply/circulating-alph",method:"GET",format:"text",...e}).then(l.convertHttpResponse),getInfosSupplyTotalAlph:(e={})=>this.request({path:"/infos/supply/total-alph",method:"GET",format:"text",...e}).then(l.convertHttpResponse),getInfosTotalTransactions:(e={})=>this.request({path:"/infos/total-transactions",method:"GET",format:"text",...e}).then(l.convertHttpResponse),getInfosSupplyReservedAlph:(e={})=>this.request({path:"/infos/supply/reserved-alph",method:"GET",format:"text",...e}).then(l.convertHttpResponse),getInfosHeights:(e={})=>this.request({path:"/infos/heights",method:"GET",format:"json",...e}).then(l.convertHttpResponse),getInfosAverageBlockTimes:(e={})=>this.request({path:"/infos/average-block-times",method:"GET",format:"json",...e}).then(l.convertHttpResponse)},this.utils={putUtilsSanityCheck:(e={})=>this.request({path:"/utils/sanity-check",method:"PUT",...e}).then(l.convertHttpResponse),putUtilsUpdateGlobalLoglevel:(e,t={})=>this.request({path:"/utils/update-global-loglevel",method:"PUT",body:e,...t}).then(l.convertHttpResponse),putUtilsUpdateLogConfig:(e,t={})=>this.request({path:"/utils/update-log-config",method:"PUT",body:e,type:p.Json,...t}).then(l.convertHttpResponse)},this.tokens={postTokensFungibleMetadata:(e,t={})=>this.request({path:"/tokens/fungible-metadata",method:"POST",body:e,type:p.Json,format:"json",...t}).then(l.convertHttpResponse),postTokens:(e,t={})=>this.request({path:"/tokens",method:"POST",body:e,type:p.Json,format:"json",...t}).then(l.convertHttpResponse),getTokens:(e,t={})=>this.request({path:"/tokens",method:"GET",query:e,format:"json",...t}).then(l.convertHttpResponse),getTokensHoldersTokenTokenId:(e,t,r={})=>this.request({path:`/tokens/holders/token/${e}`,method:"GET",query:t,format:"json",...r}).then(l.convertHttpResponse),getTokensTokenIdTransactions:(e,t,r={})=>this.request({path:`/tokens/${e}/transactions`,method:"GET",query:t,format:"json",...r}).then(l.convertHttpResponse),postTokensNftCollectionMetadata:(e,t={})=>this.request({path:"/tokens/nft-collection-metadata",method:"POST",body:e,type:p.Json,format:"json",...t}).then(l.convertHttpResponse),getTokensTokenIdAddresses:(e,t,r={})=>this.request({path:`/tokens/${e}/addresses`,method:"GET",query:t,format:"json",...r}).then(l.convertHttpResponse),getTokensHoldersAlph:(e,t={})=>this.request({path:"/tokens/holders/alph",method:"GET",query:e,format:"json",...t}).then(l.convertHttpResponse),postTokensNftMetadata:(e,t={})=>this.request({path:"/tokens/nft-metadata",method:"POST",body:e,type:p.Json,format:"json",...t}).then(l.convertHttpResponse)},this.market={postMarketPrices:(e,t,r={})=>this.request({path:"/market/prices",method:"POST",query:e,body:t,type:p.Json,format:"json",...r}).then(l.convertHttpResponse),getMarketPricesSymbolCharts:(e,t,r={})=>this.request({path:`/market/prices/${e}/charts`,method:"GET",query:t,format:"json",...r}).then(l.convertHttpResponse)},this.blocks={getBlocksBlockHashTransactions:(e,t,r={})=>this.request({path:`/blocks/${e}/transactions`,method:"GET",query:t,format:"json",...r}).then(l.convertHttpResponse),getBlocksBlockHash:(e,t={})=>this.request({path:`/blocks/${e}`,method:"GET",format:"json",...t}).then(l.convertHttpResponse),getBlocks:(e,t={})=>this.request({path:"/blocks",method:"GET",query:e,format:"json",...t}).then(l.convertHttpResponse)},this.transactions={getTransactionsTransactionHash:(e,t={})=>this.request({path:`/transactions/${e}`,method:"GET",format:"json",...t}).then(l.convertHttpResponse)},this.contractEvents={getContractEventsTransactionIdTransactionId:(e,t={})=>this.request({path:`/contract-events/transaction-id/${e}`,method:"GET",format:"json",...t}).then(l.convertHttpResponse),getContractEventsContractAddressContractAddress:(e,t,r={})=>this.request({path:`/contract-events/contract-address/${e}`,method:"GET",query:t,format:"json",...r}).then(l.convertHttpResponse),getContractEventsContractAddressContractAddressInputAddressInputAddress:(e,t,r,n={})=>this.request({path:`/contract-events/contract-address/${e}/input-address/${t}`,method:"GET",query:r,format:"json",...n}).then(l.convertHttpResponse)},this.charts={getChartsTransactionsCountPerChain:(e,t={})=>this.request({path:"/charts/transactions-count-per-chain",method:"GET",query:e,format:"json",...t}).then(l.convertHttpResponse),getChartsTransactionsCount:(e,t={})=>this.request({path:"/charts/transactions-count",method:"GET",query:e,format:"json",...t}).then(l.convertHttpResponse),getChartsHashrates:(e,t={})=>this.request({path:"/charts/hashrates",method:"GET",query:e,format:"json",...t}).then(l.convertHttpResponse)},this.mempool={getMempoolTransactions:(e,t={})=>this.request({path:"/mempool/transactions",method:"GET",query:e,format:"json",...t}).then(l.convertHttpResponse)}}}},1442:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ExplorerProvider=void 0;const n=r(4156),i=r(3877);class o{constructor(e,t,r){let s;this.request=e=>(0,n.request)(this,e),"string"==typeof e?s=function(e,t,r){const n=new i.Api({baseUrl:e,baseApiParams:{secure:!0},securityWorker:e=>null!==e?{headers:{"X-API-KEY":`${e}`}}:{},customFetch:r??((...e)=>fetch(...e))});return n.setSecurityData(t??null),n}(e,t,r):"function"==typeof e?(s=new o("https://1.2.3.4:0"),(0,n.forwardRequests)(s,e)):s=e,this.blocks={...s.blocks},this.transactions={...s.transactions},this.addresses={...s.addresses},this.infos={...s.infos},this.mempool={...s.mempool},this.tokens={...s.tokens},this.charts={...s.charts},this.utils={...s.utils},this.contracts={...s.contracts},this.market={...s.market},this.contractEvents={...s.contractEvents}}static Proxy(e){return new o(e)}static Remote(e){return new o(e)}}t.ExplorerProvider=o},3749:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)},s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.explorer=t.node=void 0,o(r(2707),t),o(r(1442),t),t.node=s(r(127)),t.explorer=s(r(3877)),o(r(4156),t),o(r(3760),t)},2707:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.tryGetCallResult=t.NodeProvider=void 0;const n=r(4156),i=r(127),o=r(664),s=r(2581);class a{constructor(e,t,r){let u;this.request=e=>(0,n.request)(this,e),this.fetchFungibleTokenMetaData=async e=>{const t=(0,s.addressFromTokenId)(e),r=(0,s.groupOfAddress)(t),n=Array.from([0,1,2,3],(e=>({methodIndex:e,group:r,address:t}))),i=(await this.contracts.postContractsMulticallContract({calls:n})).results.map((e=>c(e)));return{symbol:i[0].returns[0].value,name:i[1].returns[0].value,decimals:Number(i[2].returns[0].value),totalSupply:BigInt(i[3].returns[0].value)}},this.fetchNFTMetaData=async e=>{const t=(0,s.addressFromTokenId)(e),r=(0,s.groupOfAddress)(t),n=Array.from([0,1],(e=>({methodIndex:e,group:r,address:t}))),i=await this.contracts.postContractsMulticallContract({calls:n}),a=(0,o.hexToString)(c(i.results[0]).returns[0].value);if("CallContractSucceeded"===i.results[1].type){const e=i.results[1];if(void 0===e.returns[0])throw new Error("Deprecated NFT contract");const t=e.returns[0].value;if(void 0===t||!(0,o.isHexString)(t)||64!==t.length)throw new Error("Deprecated NFT contract");const r=e.returns[1];if(void 0===r)throw new Error("Deprecated NFT contract");const n=(0,o.toNonNegativeBigInt)(r.value);if(void 0===n)throw new Error("Deprecated NFT contract");if(void 0!==e.returns[2])throw new Error("Deprecated NFT contract");return{tokenUri:a,collectionId:t,nftIndex:n}}{const e=i.results[1];throw e.error.startsWith("VM execution error: Invalid method index")?new Error("Deprecated NFT contract"):new Error(`Failed to call contract, error: ${e.error}`)}},this.fetchNFTCollectionMetaData=async e=>{const t=(0,s.addressFromContractId)(e),r=(0,s.groupOfAddress)(t),n=Array.from([0,1],(e=>({methodIndex:e,group:r,address:t}))),i=(await this.contracts.postContractsMulticallContract({calls:n})).results.map((e=>c(e)));return{collectionUri:(0,o.hexToString)(i[0].returns[0].value),totalSupply:BigInt(i[1].returns[0].value)}},this.fetchNFTRoyaltyAmount=async(e,t,r)=>{const n=(0,s.addressFromContractId)(e),i=(0,s.groupOfAddress)(n),o=c(await this.contracts.postContractsCallContract({address:n,group:i,methodIndex:4,args:[{type:"ByteVec",value:t},{type:"U256",value:r.toString()}]}));return BigInt(o.returns[0].value)},this.guessStdInterfaceId=async e=>{const t=(0,s.addressFromTokenId)(e),r=await this.contracts.getContractsAddressState(t),n=r.immFields.slice(-1).pop()?.value;return"string"==typeof n&&n.startsWith("414c5048")?n.slice(8):void 0},this.guessFollowsNFTCollectionStd=async e=>{const t=await this.guessStdInterfaceId(e);return!!t&&t.startsWith(n.StdInterfaceIds.NFTCollection)},this.guessFollowsNFTCollectionWithRoyaltyStd=async e=>await this.guessStdInterfaceId(e)===n.StdInterfaceIds.NFTCollectionWithRoyalty,this.guessStdTokenType=async e=>{const t=await this.guessStdInterfaceId(e);switch(!0){case t?.startsWith(n.StdInterfaceIds.FungibleToken):return"fungible";case t?.startsWith(n.StdInterfaceIds.NFT):return"non-fungible";default:return}},"string"==typeof e?u=function(e,t,r){const n=new i.Api({baseUrl:e,baseApiParams:{secure:!0},securityWorker:e=>null!==e?{headers:{"X-API-KEY":`${e}`}}:{},customFetch:r??((...e)=>fetch(...e))});return n.setSecurityData(t??null),n}(e,t,r):"function"==typeof e?(u=new a("https://1.2.3.4:0"),(0,n.forwardRequests)(u,e)):u=e,this.wallets={...u.wallets},this.infos={...u.infos},this.blockflow={...u.blockflow},this.addresses={...u.addresses},this.transactions={...u.transactions},this.mempool={...u.mempool},this.contracts={...u.contracts},this.multisig={...u.multisig},this.utils={...u.utils},this.miners={...u.miners},this.events={...u.events},(0,n.requestWithLog)(this)}static Proxy(e){return new a(e)}static Remote(e){return new a(e)}}function c(e){if("CallContractFailed"===e.type)throw new Error(`Failed to call contract, error: ${e.error}`);return e}t.NodeProvider=a,t.tryGetCallResult=c},4156:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StdInterfaceIds=t.request=t.requestWithLog=t.forwardRequests=t.getDefaultPrimitiveValue=t.decodeArrayType=t.fromApiPrimitiveVal=t.toApiVal=t.toApiArray=t.toApiAddress=t.toApiByteVec=t.fromApiNumber256=t.toApiNumber256Optional=t.toApiNumber256=t.toApiBoolean=t.fromApiTokens=t.fromApiToken=t.toApiTokens=t.toApiToken=t.PrimitiveTypes=void 0;const n=r(7695),i=r(2505),o=r(4652),s=r(664);function a(e){return{id:e.id,amount:d(e.amount)}}function c(e){return{id:e.id,amount:f(e.amount)}}function u(e){if("boolean"==typeof e)return e;throw new Error(`Invalid boolean value: ${e}`)}function d(e){if("number"==typeof e&&Number.isInteger(e)||"bigint"==typeof e)return e.toString();if("string"==typeof e)try{if(BigInt(e).toString()===e)return e}catch(t){throw new o.TraceableError(`Invalid value: ${e}, expected a 256 bit number`,t)}throw new Error(`Invalid value: ${e}, expected a 256 bit number`)}function f(e){return BigInt(e)}function h(e){if("string"!=typeof e)throw new Error(`Invalid value: ${e}, expected a hex-string`);if((0,s.isHexString)(e))return e;if((0,s.isBase58)(e)){const t=(0,s.base58ToBytes)(e);if(33===t.length&&3===t[0])return(0,s.binToHex)(t.slice(1))}throw new Error(`Invalid hex-string: ${e}`)}function l(e){if("string"==typeof e){if((0,s.isBase58)(e))return e;throw new Error(`Invalid base58 string: ${e}`)}throw new Error(`Invalid value: ${e}, expected a base58 string`)}function p(e,t){if(!Array.isArray(t))throw new Error(`Expected array, got ${t}`);const r=e.lastIndexOf(";");if(-1==r)throw new Error(`Invalid Val type: ${e}`);const n=e.slice(1,r),i=parseInt(e.slice(r+1,-1));if(t.length!=i)throw new Error(`Invalid val dimension: ${t}`);return{value:t.map((e=>b(e,n))),type:"Array"}}function b(e,t){return"Bool"===t?{value:u(e),type:t}:"U256"===t||"I256"===t?{value:d(e),type:t}:"ByteVec"===t?{value:h(e),type:t}:"Address"===t?{value:l(e),type:t}:p(t,e)}async function y(e,t){const r=(0,i.isDebugModeEnabled)(),{path:n,method:s,params:a}=e;r&&console.log(`[REQUEST] ${n} ${s} ${JSON.stringify(a)}`);try{const i=await t(e);return r&&console.log(`[RESPONSE] ${n} ${s} ${JSON.stringify(i)}`),i}catch(e){throw r&&console.error(`[ERROR] ${n} ${s} `,e),new o.TraceableError(`Failed to request ${s}`,e)}}var m;t.PrimitiveTypes=["U256","I256","Bool","ByteVec","Address"],s.assertType,t.toApiToken=a,t.toApiTokens=function(e){return e?.map(a)},t.fromApiToken=c,t.fromApiTokens=function(e){return e?.map(c)},t.toApiBoolean=u,t.toApiNumber256=d,t.toApiNumber256Optional=function(e){return void 0===e?void 0:d(e)},t.fromApiNumber256=f,t.toApiByteVec=h,t.toApiAddress=l,t.toApiArray=p,t.toApiVal=b,t.fromApiPrimitiveVal=function(e,t,r=!1){if("Bool"===t&&e.type===t)return e.value;if("U256"!==t&&"I256"!==t||e.type!==t){if("ByteVec"!==t&&"Address"!==t||e.type!==t&&!r)throw new Error(`Expected primitive type, got ${t}`);return e.value}return f(e.value)},t.decodeArrayType=function(e){const t=e.lastIndexOf(";");if(-1===t)throw new Error(`Invalid array type: ${e}`);return[e.slice(1,t),parseInt(e.slice(t+1,-1))]},t.getDefaultPrimitiveValue=function(e){if("U256"===e||"I256"===e)return 0n;if("Bool"===e)return!1;if("ByteVec"===e)return"";if("Address"===e)return n.ZERO_ADDRESS;throw Error(`Expected primitive type, got ${e}`)},t.forwardRequests=function(e,t){for(const[r,n]of Object.entries(e))for(const e of Object.keys(n))n[`${e}`]=async(...n)=>y({path:r,method:e,params:n},t)},t.requestWithLog=function(e){for(const[t,r]of Object.entries(e))for(const[e,n]of Object.entries(r))r[`${e}`]=async(...r)=>y({path:t,method:e,params:r},(()=>n(...r)))},t.request=async function(e,t){return(0,e[`${t.path}`][`${t.method}`])(...t.params)},(m=t.StdInterfaceIds||(t.StdInterfaceIds={})).FungibleToken="0001",m.NFTCollection="0002",m.NFT="0003",m.NFTCollectionWithRoyalty="000201"},3760:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isBalanceEqual=t.convertHttpResponse=void 0,r(9114),t.convertHttpResponse=function(e){if(e.error){const t=e.error.detail??"Unknown error";throw new Error(`[API Error] - ${t} - Status code: ${e.status}`)}return e.data},t.isBalanceEqual=function(e,t){const r=(e,t)=>{const r=e?.length??0;if(r!==(t?.length??0))return!1;if(0===r)return!0;const n=t.map((e=>({...e,used:!1})));return e.every((e=>{const t=n.find((t=>!t.used&&e.id===t.id&&e.amount===t.amount));return void 0!==t&&(t.used=!0,!0)}))},n=e.balance===t.balance&&e.lockedBalance===t.lockedBalance;return e.utxoNum===t.utxoNum&&n&&r(e.tokenBalances,t.tokenBalances)&&r(e.lockedTokenBalances,t.lockedTokenBalances)}},645:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.BlockSubscription=t.BlockSubscriptionBase=void 0;const s=r(531),a=o(r(307)),c=r(7695),u=2e4;class d extends s.Subscription{getParentHash(e){const t=Math.floor(e.deps.length/2)+e.chainTo;return e.deps[t]}async handleReorg(e,t,r,n){if(console.info(`reorg occur in chain ${e} -> ${t}, orphan hash: ${r}, new hash: ${n}`),void 0===this.reorgCallback)return;const i=[];let o,s=r;for(;;){const r=await this.getBlockByHash(s);i.push(r);const n=await this.getHashesAtHeight(e,t,r.height-1),a=this.getParentHash(r);if(n[0]===a){o=n[0];break}s=a}const a=[];for(s=n;s!==o;){const e=await this.getBlockByHash(s);a.push(e),s=this.getParentHash(e)}const c=i.reverse(),u=a.reverse();console.info(`orphan hashes: ${c.map((e=>e.hash))}, new hashes: ${u.map((e=>e.hash))}`),await this.reorgCallback(e,t,c,u)}}t.BlockSubscriptionBase=d,t.BlockSubscription=class extends d{constructor(e,t,r=void 0){super(e),this.nodeProvider=r??a.getCurrentNodeProvider(),this.reorgCallback=e.reorgCallback,this.fromTimeStamp=t,this.parents=new Array(c.TOTAL_NUMBER_OF_CHAINS).fill(void 0),this.cache=new Map}async getHashesAtHeight(e,t,r){return(await this.nodeProvider.blockflow.getBlockflowHashes({fromGroup:e,toGroup:t,height:r})).headers}async getBlockByHash(e){return await this.nodeProvider.blockflow.getBlockflowBlocksBlockHash(e)}async getMissingBlocksAndHandleReorg(e,t,r){const n=[];let i=r;for(;i.height-1>t;){const e=this.getParentHash(i),t=await this.getBlockByHash(e);n.push(t),i=t}const o=this.getParentHash(i);return o!==e&&await this.handleReorg(r.chainFrom,r.chainTo,e,o),n.reverse()}async handleBlocks(e,t){const r=[];for(let t=0;t<e.length;t+=1){const n=e[t].filter((e=>!this.cache.has(e.hash)));if(0===n.length)continue;r.push(...n);const i=this.parents[t];if(void 0!==i){const e=await this.getMissingBlocksAndHandleReorg(i.hash,i.height,n[0]);r.push(...e)}const o=n[n.length-1];this.parents[t]={hash:o.hash,height:o.height}}const n=r.sort(((e,t)=>e.timestamp-t.timestamp));try{await this.messageCallback(n)}finally{const e=t-u;Array.from(this.cache.entries()).forEach((([t,r])=>{r<e&&this.cache.delete(t)}));const r=n.findIndex((t=>t.timestamp>=e));-1!==r&&n.slice(r).forEach((e=>this.cache.set(e.hash,e.timestamp)))}}async polling(){const e=Date.now();if(!(this.fromTimeStamp>=e))for(;this.fromTimeStamp<e;){if(this.isCancelled())return;const t=Math.min(this.fromTimeStamp+6e4,e);try{const r=await this.nodeProvider.blockflow.getBlockflowBlocks({fromTs:this.fromTimeStamp,toTs:t});await this.handleBlocks(r.blocks,e)}catch(e){await this.errorCallback(e,this)}if(!(this.fromTimeStamp+u<e))return;this.fromTimeStamp=Math.min(t+1,e-u)}}}},4648:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BlockSubscription=void 0;var n=r(645);Object.defineProperty(t,"BlockSubscription",{enumerable:!0,get:function(){return n.BlockSubscription}})},2205:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ArrayCodec=void 0;const n=r(5617),i=r(2709),o=r(664);class s extends i.Codec{constructor(e){super(),this.childCodec=e}encode(e){const t=[n.i32Codec.encode(e.length)];for(const r of e)t.push(this.childCodec.encode(r));return(0,o.concatBytes)(t)}_decode(e){const t=n.i32Codec._decode(e),r=[];for(let n=0;n<t;n+=1)r.push(this.childCodec._decode(e));return r}}t.ArrayCodec=s},406:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.assetOutputsCodec=t.assetOutputCodec=t.AssetOutputCodec=void 0;const n=r(2205),i=r(5617),o=r(2768),s=r(7500),a=r(5675),c=r(1678),u=r(7007),d=r(664),f=r(2709),h=r(6341);class l extends f.ObjectCodec{static toFixedAssetOutputs(e,t){return t.map(((t,r)=>l.toFixedAssetOutput(e,t,r)))}static toFixedAssetOutput(e,t,r){const n=t.amount.toString(),i=Number(t.lockTime),s=t.tokens.map((e=>({id:(0,d.binToHex)(e.tokenId),amount:e.amount.toString()}))),a=(0,d.binToHex)(t.additionalData),f=t.lockupScript.kind,h=(0,d.binToHex)((0,u.blakeHash)((0,d.concatBytes)([e,o.intAs4BytesCodec.encode(r)]))),l=t.lockupScript.value,p=d.bs58.encode(c.lockupScriptCodec.encode(t.lockupScript));let b;if("P2PKH"===f)b=(0,u.createHint)(l);else if("P2MPKH"===f)b=(0,u.createHint)(l.publicKeyHashes[0]);else{if("P2SH"!==f)throw"P2C"===f?new Error("P2C script type not allowed for asset output"):new Error(`Unexpected output script type: ${f}`);b=(0,u.createHint)(l)}return{hint:b,key:h,attoAlphAmount:n,lockTime:i,tokens:s,address:p,message:a}}static fromFixedAssetOutputs(e){return e.map((e=>l.fromFixedAssetOutput(e)))}static fromFixedAssetOutput(e){const t=BigInt(e.attoAlphAmount),r=BigInt(e.lockTime);return{amount:t,lockupScript:c.lockupScriptCodec.decode(d.bs58.decode(e.address)),lockTime:r,tokens:e.tokens.map((e=>({tokenId:(0,d.hexToBinUnsafe)(e.id),amount:BigInt(e.amount)}))),additionalData:(0,d.hexToBinUnsafe)(e.message)}}}t.AssetOutputCodec=l,t.assetOutputCodec=new l({amount:i.u256Codec,lockupScript:c.lockupScriptCodec,lockTime:s.timestampCodec,tokens:h.tokensCodec,additionalData:a.byteStringCodec}),t.assetOutputsCodec=new n.ArrayCodec(t.assetOutputCodec)},3567:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BigIntCodec=void 0,t.BigIntCodec=class{static encode(e){if(0n===e)return new Uint8Array([0]);const t=e<0n;let r=t?-e:e;const n=[];for(;r>0n;)n.push(Number(0xffn&r)),r>>=8n;if(!t&&128&n[n.length-1]&&n.push(0),t){let e=!0;for(let t=0;t<n.length;t++)n[t]=255&~n[t],e&&(255===n[t]?n[t]=0:(n[t]+=1,e=!1));!e&&0!==n.length&&128&n[n.length-1]||n.push(255)}return new Uint8Array(n.reverse())}static decodeUnsigned(e){if(1===e.length&&0===e[0])return 0n;let t=0n;for(const r of e)t=t<<8n|BigInt(r);return t}static decodeSigned(e){if(1===e.length&&0===e[0])return 0n;const t=!!(128&e[0]);let r=0n;for(const t of e)r=r<<8n|BigInt(t);return t&&(r=-(~r&(1n<<8n*BigInt(e.length))-1n)-1n),r}}},5675:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.byteStringsCodec=t.byteStringCodec=t.ByteStringCodec=void 0;const n=r(5617),i=r(2709),o=r(664),s=r(2205);class a extends i.Codec{encode(e){return(0,o.concatBytes)([n.i32Codec.encode(e.length),e])}_decode(e){const t=n.i32Codec._decode(e);return e.consumeBytes(t)}}t.ByteStringCodec=a,t.byteStringCodec=new a,t.byteStringsCodec=new s.ArrayCodec(t.byteStringCodec)},2709:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.boolCodec=t.byteCodec=t.byte32Codec=t.EnumCodec=t.ObjectCodec=t.FixedSizeCodec=t.assert=t.Codec=void 0;const n=r(664),i=r(7248);class o{decode(e){const t=new i.Reader(e);return this._decode(t)}bimap(e,t){return new class extends o{constructor(e){super(),this.codecT=e}encode(e){return this.codecT.encode(t(e))}_decode(t){return e(this.codecT._decode(t))}}(this)}}function s(e,t){if(!e)throw new Error(t)}t.Codec=o,t.assert=s;class a extends o{constructor(e){super(),this.size=e}encode(e){return s(e.length===this.size,`Invalid length, expected ${this.size}, got ${e.length}`),e}_decode(e){return e.consumeBytes(this.size)}}t.FixedSizeCodec=a,t.ObjectCodec=class extends o{constructor(e){super(),this.codecs=e,this.keys=Object.keys(e)}encode(e){const t=[];for(const r of this.keys)t.push(this.codecs[r].encode(e[r]));return(0,n.concatBytes)(t)}_decode(e){const t={};for(const r of this.keys)t[r]=this.codecs[r]._decode(e);return t}},t.EnumCodec=class extends o{constructor(e,t){super(),this.name=e,this.codecs=t,this.kinds=Object.keys(t)}encode(e){const t=this.kinds.findIndex((t=>t===e.kind));if(-1===t)throw new Error(`Invalid ${this.name} kind ${e.kind}, expected one of ${this.kinds}`);const r=this.codecs[e.kind];return new Uint8Array([t,...r.encode(e.value)])}_decode(e){const t=e.consumeByte();if(t>=0&&t<this.kinds.length){const r=this.kinds[`${t}`];return{kind:r,value:this.codecs[r]._decode(e)}}throw new Error(`Invalid encoded ${this.name} kind: ${t}`)}},t.byte32Codec=new a(32),t.byteCodec=new class extends o{encode(e){return s(e>=0&&e<256,`Invalid byte: ${e}`),new Uint8Array([e])}_decode(e){return e.consumeByte()}},t.boolCodec=new class extends o{encode(e){return new Uint8Array([e?1:0])}_decode(e){const t=e.consumeByte();if(1===t)return!0;if(0===t)return!1;throw new Error(`Invalid encoded bool value ${t}, expected 0 or 1`)}}},5617:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.i32Codec=t.i256Codec=t.Signed=t.u32Codec=t.u256Codec=t.UnSigned=void 0;const n=r(2709),i=r(3567),o=4294967232,s={type:"SingleByte",prefix:0,negPrefix:192},a={type:"TwoByte",prefix:64,negPrefix:128},c={type:"FourByte",prefix:128,negPrefix:64},u={type:"MultiByte",prefix:192};function d(e){const t=e.consumeByte();switch(192&t){case s.prefix:return{mode:s,body:new Uint8Array([t])};case a.prefix:return{mode:a,body:new Uint8Array([t,...e.consumeBytes(1)])};case c.prefix:return{mode:c,body:new Uint8Array([t,...e.consumeBytes(3)])};default:{const r=4+(63&t);return{mode:u,body:new Uint8Array([t,...e.consumeBytes(r)])}}}}class f{static encodeU32(e){return(0,n.assert)(e>=0&&e<f.u32UpperBound,`Invalid u32 value: ${e}`),e<f.oneByteBound?new Uint8Array([s.prefix+e&255]):e<f.twoByteBound?new Uint8Array([a.prefix+(e>>8)&255,255&e]):e<f.fourByteBound?new Uint8Array([c.prefix+(e>>24)&255,e>>16&255,e>>8&255,255&e]):new Uint8Array([u.prefix,e>>24&255,e>>16&255,e>>8&255,255&e])}static encodeU256(e){if((0,n.assert)(e>=0n&&e<f.u256UpperBound,`Invalid u256 value: ${e}`),e<f.fourByteBound)return f.encodeU32(Number(e));{let t=i.BigIntCodec.encode(e);0===t[0]&&(t=t.slice(1));const r=t.length-4+u.prefix&255;return new Uint8Array([r,...t])}}static decodeInt(e,t){switch(e.type){case"SingleByte":return(0,n.assert)(1===t.length,"Length should be 2"),t[0];case"TwoByte":return(0,n.assert)(2===t.length,"Length should be 2"),(63&t[0])<<8|255&t[1];case"FourByte":return(0,n.assert)(4===t.length,"Length should be 4"),((63&t[0])<<24|(255&t[1])<<16|(255&t[2])<<8|255&t[3])>>>0}}static decodeU32(e,t){switch(e.type){case"SingleByte":case"TwoByte":case"FourByte":return f.decodeInt(e,t);case"MultiByte":if((0,n.assert)(t.length>=5,"Length should be greater than 5"),5===t.length)return(t[1]<<24|(255&t[2])<<16|(255&t[3])<<8|255&t[4])>>>0;throw new Error(`Expect 4 bytes int, but get ${t.length-1} bytes int`)}}static decodeU256(e,t){switch(e.type){case"SingleByte":case"TwoByte":case"FourByte":return BigInt(f.decodeInt(e,t));case"MultiByte":return i.BigIntCodec.decodeUnsigned(t.slice(1,t.length))}}}t.UnSigned=f,f.oneByteBound=BigInt(64),f.twoByteBound=f.oneByteBound<<BigInt(8),f.fourByteBound=f.oneByteBound<<BigInt(24),f.u256UpperBound=BigInt(1)<<BigInt(256),f.u32UpperBound=2**32,t.u256Codec=new class extends n.Codec{encode(e){return f.encodeU256(e)}_decode(e){const{mode:t,body:r}=d(e);return f.decodeU256(t,r)}},t.u32Codec=new class extends n.Codec{encode(e){return f.encodeU32(e)}_decode(e){const{mode:t,body:r}=d(e);return f.decodeU32(t,r)}};class h{static encodeI32(e){return(0,n.assert)(e>=h.i32LowerBound&&e<h.i32UpperBound,`Invalid i32 value: ${e}`),e>=0?h.encodePositiveI32(e):h.encodeNegativeI32(e)}static encodePositiveI32(e){return e<this.oneByteBound?new Uint8Array([s.prefix+e&255]):e<this.twoByteBound?new Uint8Array([a.prefix+(e>>8)&255,255&e]):e<this.fourByteBound?new Uint8Array([c.prefix+(e>>24)&255,e>>16&255,e>>8&255,255&e]):new Uint8Array([u.prefix,e>>24&255,e>>16&255,e>>8&255,255&e])}static encodeNegativeI32(e){return e>=-this.oneByteBound?new Uint8Array([255&(e^s.negPrefix)]):e>=-this.twoByteBound?new Uint8Array([255&(e>>8^a.negPrefix),255&e]):e>=-this.fourByteBound?new Uint8Array([255&(e>>24^c.negPrefix),e>>16&255,e>>8&255,255&e]):new Uint8Array([u.prefix,e>>24&255,e>>16&255,e>>8&255,255&e])}static encodeI256(e){if((0,n.assert)(e>=h.i256LowerBound&&e<h.i256UpperBound,`Invalid i256 value: ${e}`),e>=-536870912&&e<536870912)return this.encodeI32(Number(e));{const t=i.BigIntCodec.encode(e),r=t.length-4+u.prefix&255;return new Uint8Array([r,...t])}}static decodeInt(e,t){return t[0]&h.signFlag?h.decodeNegativeInt(e,t):h.decodePositiveInt(e,t)}static decodePositiveInt(e,t){switch(e.type){case"SingleByte":return t[0];case"TwoByte":return(0,n.assert)(2===t.length,"Length should be 2"),(63&t[0])<<8|255&t[1];case"FourByte":return(0,n.assert)(4===t.length,"Length should be 4"),(63&t[0])<<24|(255&t[1])<<16|(255&t[2])<<8|255&t[3]}}static decodeNegativeInt(e,t){switch(e.type){case"SingleByte":return t[0]|o;case"TwoByte":return(0,n.assert)(2===t.length,"Length should be 2"),(t[0]|o)<<8|255&t[1];case"FourByte":return(0,n.assert)(4===t.length,"Length should be 4"),(t[0]|o)<<24|(255&t[1])<<16|(255&t[2])<<8|255&t[3]}}static decodeI32(e,t){switch(e.type){case"SingleByte":case"TwoByte":case"FourByte":return h.decodeInt(e,t);case"MultiByte":if(5===t.length)return t[1]<<24|(255&t[2])<<16|(255&t[3])<<8|255&t[4];throw new Error(`Expect 4 bytes int, but get ${t.length-1} bytes int`)}}static decodeI256(e,t){switch(e.type){case"SingleByte":case"TwoByte":case"FourByte":return BigInt(h.decodeInt(e,t));case"MultiByte":const r=t.slice(1,t.length);return(0,n.assert)(r.length<=32,"Expect <= 32 bytes for I256"),i.BigIntCodec.decodeSigned(r)}}}t.Signed=h,h.signFlag=32,h.oneByteBound=BigInt(32),h.twoByteBound=h.oneByteBound<<BigInt(8),h.fourByteBound=h.oneByteBound<<BigInt(24),h.i256UpperBound=BigInt(1)<<BigInt(255),h.i256LowerBound=-h.i256UpperBound,h.i32UpperBound=2**31,h.i32LowerBound=-h.i32UpperBound,t.i256Codec=new class extends n.Codec{encode(e){return h.encodeI256(e)}_decode(e){const{mode:t,body:r}=d(e);return h.decodeI256(t,r)}},t.i32Codec=new class extends n.Codec{encode(e){return h.encodeI32(e)}_decode(e){const{mode:t,body:r}=d(e);return h.decodeI32(t,r)}}},1486:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.contractCodec=t.ContractCodec=void 0;const n=r(2205),i=r(2709),o=r(5617),s=r(3049),a=r(664),c=new n.ArrayCodec(o.i32Codec);class u extends i.Codec{encode(e){return(0,a.concatBytes)([o.i32Codec.encode(e.fieldLength),c.encode(e.methodIndexes),e.methods])}_decode(e){return{fieldLength:o.i32Codec._decode(e),methodIndexes:c._decode(e),methods:e.consumeAll()}}decodeContract(e){const t=this.decode(e),r=t.fieldLength,n=t.methodIndexes,i=[];for(let e=0,r=0;e<n.length;e++){const o=n[e],a=s.methodCodec.decode(t.methods.slice(r,o));i.push(a),r=o}return{fieldLength:r,methods:i}}encodeContract(e){const t=e.fieldLength,r=e.methods.map((e=>s.methodCodec.encode(e)));let n=0;const i={fieldLength:t,methodIndexes:Array.from(Array(r.length).keys()).map((e=>(n+=r[`${e}`].length,n))),methods:(0,a.concatBytes)(r)};return this.encode(i)}}t.ContractCodec=u,t.contractCodec=new u},1672:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.contractOutputCodec=t.ContractOutputCodec=void 0;const n=r(5617),i=r(1678),o=r(2709),s=r(6341),a=r(7007),c=r(664),u=r(2768),d=r(1678);class f extends o.ObjectCodec{static convertToApiContractOutput(e,t,r){return{hint:(0,a.createHint)(t.lockupScript),key:(0,c.binToHex)((0,a.blakeHash)((0,c.concatBytes)([e,u.intAs4BytesCodec.encode(r)]))),attoAlphAmount:t.amount.toString(),address:c.bs58.encode(new Uint8Array([3,...t.lockupScript])),tokens:t.tokens.map((e=>({id:(0,c.binToHex)(e.tokenId),amount:e.amount.toString()}))),type:"ContractOutput"}}static convertToOutput(e){return{amount:BigInt(e.attoAlphAmount),lockupScript:d.lockupScriptCodec.decode(c.bs58.decode(e.address)).value,tokens:e.tokens.map((e=>({tokenId:(0,c.hexToBinUnsafe)(e.id),amount:BigInt(e.amount)})))}}}t.ContractOutputCodec=f,t.contractOutputCodec=new f({amount:n.u256Codec,lockupScript:i.p2cCodec,tokens:s.tokensCodec})},4464:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.contractOutputRefsCodec=t.contractOutputRefCodec=void 0;const n=r(2205),i=r(2709),o=r(2768);t.contractOutputRefCodec=new i.ObjectCodec({hint:o.intAs4BytesCodec,key:i.byte32Codec}),t.contractOutputRefsCodec=new n.ArrayCodec(t.contractOutputRefCodec)},2577:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.either=void 0;const n=r(2709);t.either=function(e,t,r){return new n.EnumCodec(e,{Left:t,Right:r})}},7007:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.createHint=t.djbIntHash=t.blakeHash=void 0;const i=n(r(1540));function o(e){let t=5381;return e.forEach((e=>{t=(t<<5)+t+(255&e)})),t}t.blakeHash=function(e){return i.default.blake2b(e,void 0,32)},t.djbIntHash=o,t.createHint=function(e){return 1|o(e)}},3651:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)},s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.contract=t.token=t.script=t.val=t.unlockScript=t.lockupScript=t.contractOutput=t.boolCodec=t.Codec=t.assetOutput=void 0,o(r(2205),t),t.assetOutput=s(r(406)),o(r(3567),t),o(r(5675),t);var a=r(2709);Object.defineProperty(t,"Codec",{enumerable:!0,get:function(){return a.Codec}}),Object.defineProperty(t,"boolCodec",{enumerable:!0,get:function(){return a.boolCodec}}),o(r(5617),t),t.contractOutput=s(r(1672)),o(r(4464),t),o(r(2577),t),o(r(7544),t),o(r(6210),t),t.lockupScript=s(r(1678)),t.unlockScript=s(r(2976)),t.val=s(r(1924)),o(r(7500),t),o(r(3049),t),o(r(6633),t),t.script=s(r(4459)),o(r(9510),t),o(r(2768),t),t.token=s(r(6341)),o(r(1092),t),o(r(2190),t),t.contract=s(r(1486))},7544:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.inputsCodec=t.inputCodec=t.InputCodec=void 0;const n=r(664),i=r(2976),o=r(2709),s=r(2205),a=r(2768);class c extends o.ObjectCodec{static toAssetInputs(e){return e.map((e=>{const t=e.hint,r=(0,n.binToHex)(e.key),o=i.unlockScriptCodec.encode(e.unlockScript);return{outputRef:{hint:t,key:r},unlockScript:(0,n.binToHex)(o)}}))}static fromAssetInputs(e){return e.map((e=>({hint:e.outputRef.hint,key:(0,n.hexToBinUnsafe)(e.outputRef.key),unlockScript:i.unlockScriptCodec.decode((0,n.hexToBinUnsafe)(e.unlockScript))})))}}t.InputCodec=c,t.inputCodec=new c({hint:a.intAs4BytesCodec,key:o.byte32Codec,unlockScript:i.unlockScriptCodec}),t.inputsCodec=new s.ArrayCodec(t.inputCodec)},6210:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.I256Add=t.BoolToByteVec=t.BoolNeq=t.BoolEq=t.BoolOr=t.BoolAnd=t.BoolNot=t.Pop=t.StoreLocal=t.LoadLocal=t.AddressConst=t.BytesConst=t.U256Const=t.I256Const=t.U256Const5=t.U256Const4=t.U256Const3=t.U256Const2=t.U256Const1=t.U256Const0=t.I256ConstN1=t.I256Const5=t.I256Const4=t.I256Const3=t.I256Const2=t.I256Const1=t.I256Const0=t.ConstFalse=t.ConstTrue=t.Return=t.CallExternal=t.CallLocal=t.CallExternalBySelectorCode=t.MethodSelectorCode=t.CreateMapEntryCode=t.LoadImmFieldCode=t.StoreMutFieldCode=t.LoadMutFieldCode=t.DEBUGCode=t.IfFalseCode=t.IfTrueCode=t.JumpCode=t.StoreLocalCode=t.LoadLocalCode=t.AddressConstCode=t.BytesConstCode=t.U256ConstCode=t.I256ConstCode=t.CallExternalCode=t.CallLocalCode=void 0,t.Sha3=t.Sha256=t.Keccak256=t.Blake2b=t.Assert=t.IfFalse=t.IfTrue=t.Jump=t.IsContractAddress=t.IsAssetAddress=t.AddressToByteVec=t.AddressNeq=t.AddressEq=t.ByteVecConcat=t.ByteVecSize=t.ByteVecNeq=t.ByteVecEq=t.U256ToByteVec=t.U256ToI256=t.I256ToByteVec=t.I256ToU256=t.U256SHR=t.U256SHL=t.U256Xor=t.U256BitOr=t.U256BitAnd=t.U256ModMul=t.U256ModSub=t.U256ModAdd=t.U256Ge=t.U256Gt=t.U256Le=t.U256Lt=t.U256Neq=t.U256Eq=t.U256Mod=t.U256Div=t.U256Mul=t.U256Sub=t.U256Add=t.I256Ge=t.I256Gt=t.I256Le=t.I256Lt=t.I256Neq=t.I256Eq=t.I256Mod=t.I256Div=t.I256Mul=t.I256Sub=void 0,t.U256Exp=t.I256Exp=t.TxGasFee=t.TxGasAmount=t.TxGasPrice=t.DEBUG=t.BlockHash=t.Swap=t.AssertWithErrorCode=t.Dup=t.StoreLocalByIndex=t.LoadLocalByIndex=t.ContractIdToAddress=t.Log9=t.Log8=t.Log7=t.Log6=t.EthEcRecover=t.U256From32Byte=t.U256From16Byte=t.U256From8Byte=t.U256From4Byte=t.U256From2Byte=t.U256From1Byte=t.U256To32Byte=t.U256To16Byte=t.U256To8Byte=t.U256To4Byte=t.U256To2Byte=t.U256To1Byte=t.Zeros=t.Encode=t.ByteVecToAddress=t.ByteVecSlice=t.Log5=t.Log4=t.Log3=t.Log2=t.Log1=t.VerifyRelativeLocktime=t.VerifyAbsoluteLocktime=t.TxInputsSize=t.TxInputAddressAt=t.TxId=t.BlockTarget=t.BlockTimeStamp=t.NetworkId=t.VerifyED25519=t.VerifySecP256K1=t.VerifyTxSignature=void 0,t.CreateSubContractAndTransferToken=t.CopyCreateContractAndTransferToken=t.CreateContractAndTransferToken=t.ContractExists=t.StoreMutFieldByIndex=t.LoadMutFieldByIndex=t.CopyCreateSubContractWithToken=t.CopyCreateSubContract=t.CreateSubContractWithToken=t.CreateSubContract=t.LockApprovedAssets=t.BurnToken=t.CopyCreateContractWithToken=t.MigrateWithFields=t.MigrateSimple=t.ContractCodeHash=t.ContractInitialStateHash=t.CallerCodeHash=t.CallerInitialStateHash=t.IsCalledFromTxScript=t.CallerAddress=t.CallerContractId=t.SelfAddress=t.SelfContractId=t.DestroySelf=t.CopyCreateContract=t.CreateContractWithToken=t.CreateContract=t.TransferTokenToSelf=t.TransferTokenFromSelf=t.TransferToken=t.TransferAlphToSelf=t.TransferAlphFromSelf=t.TransferAlph=t.IsPaying=t.TokenRemaining=t.AlphRemaining=t.ApproveToken=t.ApproveAlph=t.StoreMutField=t.LoadMutField=t.GroupOfAddress=t.BoolToString=t.I256ToString=t.U256ToString=t.AddModN=t.MulModN=t.GetSegregatedSignature=t.VerifyBIP340Schnorr=t.U256ModExp=void 0,t.instrsCodec=t.instrCodec=t.InstrCodec=t.CallExternalBySelector=t.MethodSelector=t.CreateMapEntry=t.MinimalContractDeposit=t.PayGasFee=t.LoadImmFieldByIndex=t.LoadImmField=t.ALPHTokenId=t.SubContractIdOf=t.SubContractId=t.NullContractAddress=t.CopyCreateSubContractAndTransferToken=void 0;const n=r(2205),i=r(5617),o=r(5675),s=r(1678),a=r(2709),c=r(2768);t.CallLocalCode=0,t.CallExternalCode=1,t.I256ConstCode=18,t.U256ConstCode=19,t.BytesConstCode=20,t.AddressConstCode=21,t.LoadLocalCode=22,t.StoreLocalCode=23,t.JumpCode=74,t.IfTrueCode=75,t.IfFalseCode=76,t.DEBUGCode=126,t.LoadMutFieldCode=160,t.StoreMutFieldCode=161,t.LoadImmFieldCode=206,t.CreateMapEntryCode=210,t.MethodSelectorCode=211,t.CallExternalBySelectorCode=212,t.CallLocal=e=>({name:"CallLocal",code:0,index:e}),t.CallExternal=e=>({name:"CallExternal",code:1,index:e}),t.Return={name:"Return",code:2},t.ConstTrue={name:"ConstTrue",code:3},t.ConstFalse={name:"ConstFalse",code:4},t.I256Const0={name:"I256Const0",code:5},t.I256Const1={name:"I256Const1",code:6},t.I256Const2={name:"I256Const2",code:7},t.I256Const3={name:"I256Const3",code:8},t.I256Const4={name:"I256Const4",code:9},t.I256Const5={name:"I256Const5",code:10},t.I256ConstN1={name:"I256ConstN1",code:11},t.U256Const0={name:"U256Const0",code:12},t.U256Const1={name:"U256Const1",code:13},t.U256Const2={name:"U256Const2",code:14},t.U256Const3={name:"U256Const3",code:15},t.U256Const4={name:"U256Const4",code:16},t.U256Const5={name:"U256Const5",code:17},t.I256Const=e=>({name:"I256Const",code:18,value:e}),t.U256Const=e=>({name:"U256Const",code:19,value:e}),t.BytesConst=e=>({name:"BytesConst",code:20,value:e}),t.AddressConst=e=>({name:"AddressConst",code:21,value:e}),t.LoadLocal=e=>({name:"LoadLocal",code:22,index:e}),t.StoreLocal=e=>({name:"StoreLocal",code:23,index:e}),t.Pop={name:"Pop",code:24},t.BoolNot={name:"BoolNot",code:25},t.BoolAnd={name:"BoolAnd",code:26},t.BoolOr={name:"BoolOr",code:27},t.BoolEq={name:"BoolEq",code:28},t.BoolNeq={name:"BoolNeq",code:29},t.BoolToByteVec={name:"BoolToByteVec",code:30},t.I256Add={name:"I256Add",code:31},t.I256Sub={name:"I256Sub",code:32},t.I256Mul={name:"I256Mul",code:33},t.I256Div={name:"I256Div",code:34},t.I256Mod={name:"I256Mod",code:35},t.I256Eq={name:"I256Eq",code:36},t.I256Neq={name:"I256Neq",code:37},t.I256Lt={name:"I256Lt",code:38},t.I256Le={name:"I256Le",code:39},t.I256Gt={name:"I256Gt",code:40},t.I256Ge={name:"I256Ge",code:41},t.U256Add={name:"U256Add",code:42},t.U256Sub={name:"U256Sub",code:43},t.U256Mul={name:"U256Mul",code:44},t.U256Div={name:"U256Div",code:45},t.U256Mod={name:"U256Mod",code:46},t.U256Eq={name:"U256Eq",code:47},t.U256Neq={name:"U256Neq",code:48},t.U256Lt={name:"U256Lt",code:49},t.U256Le={name:"U256Le",code:50},t.U256Gt={name:"U256Gt",code:51},t.U256Ge={name:"U256Ge",code:52},t.U256ModAdd={name:"U256ModAdd",code:53},t.U256ModSub={name:"U256ModSub",code:54},t.U256ModMul={name:"U256ModMul",code:55},t.U256BitAnd={name:"U256BitAnd",code:56},t.U256BitOr={name:"U256BitOr",code:57},t.U256Xor={name:"U256Xor",code:58},t.U256SHL={name:"U256SHL",code:59},t.U256SHR={name:"U256SHR",code:60},t.I256ToU256={name:"I256ToU256",code:61},t.I256ToByteVec={name:"I256ToByteVec",code:62},t.U256ToI256={name:"U256ToI256",code:63},t.U256ToByteVec={name:"U256ToByteVec",code:64},t.ByteVecEq={name:"ByteVecEq",code:65},t.ByteVecNeq={name:"ByteVecNeq",code:66},t.ByteVecSize={name:"ByteVecSize",code:67},t.ByteVecConcat={name:"ByteVecConcat",code:68},t.AddressEq={name:"AddressEq",code:69},t.AddressNeq={name:"AddressNeq",code:70},t.AddressToByteVec={name:"AddressToByteVec",code:71},t.IsAssetAddress={name:"IsAssetAddress",code:72},t.IsContractAddress={name:"IsContractAddress",code:73},t.Jump=e=>({name:"Jump",code:74,offset:e}),t.IfTrue=e=>({name:"IfTrue",code:75,offset:e}),t.IfFalse=e=>({name:"IfFalse",code:76,offset:e}),t.Assert={name:"Assert",code:77},t.Blake2b={name:"Blake2b",code:78},t.Keccak256={name:"Keccak256",code:79},t.Sha256={name:"Sha256",code:80},t.Sha3={name:"Sha3",code:81},t.VerifyTxSignature={name:"VerifyTxSignature",code:82},t.VerifySecP256K1={name:"VerifySecP256K1",code:83},t.VerifyED25519={name:"VerifyED25519",code:84},t.NetworkId={name:"NetworkId",code:85},t.BlockTimeStamp={name:"BlockTimeStamp",code:86},t.BlockTarget={name:"BlockTarget",code:87},t.TxId={name:"TxId",code:88},t.TxInputAddressAt={name:"TxInputAddressAt",code:89},t.TxInputsSize={name:"TxInputsSize",code:90},t.VerifyAbsoluteLocktime={name:"VerifyAbsoluteLocktime",code:91},t.VerifyRelativeLocktime={name:"VerifyRelativeLocktime",code:92},t.Log1={name:"Log1",code:93},t.Log2={name:"Log2",code:94},t.Log3={name:"Log3",code:95},t.Log4={name:"Log4",code:96},t.Log5={name:"Log5",code:97},t.ByteVecSlice={name:"ByteVecSlice",code:98},t.ByteVecToAddress={name:"ByteVecToAddress",code:99},t.Encode={name:"Encode",code:100},t.Zeros={name:"Zeros",code:101},t.U256To1Byte={name:"U256To1Byte",code:102},t.U256To2Byte={name:"U256To2Byte",code:103},t.U256To4Byte={name:"U256To4Byte",code:104},t.U256To8Byte={name:"U256To8Byte",code:105},t.U256To16Byte={name:"U256To16Byte",code:106},t.U256To32Byte={name:"U256To32Byte",code:107},t.U256From1Byte={name:"U256From1Byte",code:108},t.U256From2Byte={name:"U256From2Byte",code:109},t.U256From4Byte={name:"U256From4Byte",code:110},t.U256From8Byte={name:"U256From8Byte",code:111},t.U256From16Byte={name:"U256From16Byte",code:112},t.U256From32Byte={name:"U256From32Byte",code:113},t.EthEcRecover={name:"EthEcRecover",code:114},t.Log6={name:"Log6",code:115},t.Log7={name:"Log7",code:116},t.Log8={name:"Log8",code:117},t.Log9={name:"Log9",code:118},t.ContractIdToAddress={name:"ContractIdToAddress",code:119},t.LoadLocalByIndex={name:"LoadLocalByIndex",code:120},t.StoreLocalByIndex={name:"StoreLocalByIndex",code:121},t.Dup={name:"Dup",code:122},t.AssertWithErrorCode={name:"AssertWithErrorCode",code:123},t.Swap={name:"Swap",code:124},t.BlockHash={name:"BlockHash",code:125},t.DEBUG=e=>({name:"DEBUG",code:126,stringParts:e}),t.TxGasPrice={name:"TxGasPrice",code:127},t.TxGasAmount={name:"TxGasAmount",code:128},t.TxGasFee={name:"TxGasFee",code:129},t.I256Exp={name:"I256Exp",code:130},t.U256Exp={name:"U256Exp",code:131},t.U256ModExp={name:"U256ModExp",code:132},t.VerifyBIP340Schnorr={name:"VerifyBIP340Schnorr",code:133},t.GetSegregatedSignature={name:"GetSegregatedSignature",code:134},t.MulModN={name:"MulModN",code:135},t.AddModN={name:"AddModN",code:136},t.U256ToString={name:"U256ToString",code:137},t.I256ToString={name:"I256ToString",code:138},t.BoolToString={name:"BoolToString",code:139},t.GroupOfAddress={name:"GroupOfAddress",code:140},t.LoadMutField=e=>({name:"LoadMutField",code:160,index:e}),t.StoreMutField=e=>({name:"StoreMutField",code:161,index:e}),t.ApproveAlph={name:"ApproveAlph",code:162},t.ApproveToken={name:"ApproveToken",code:163},t.AlphRemaining={name:"AlphRemaining",code:164},t.TokenRemaining={name:"TokenRemaining",code:165},t.IsPaying={name:"IsPaying",code:166},t.TransferAlph={name:"TransferAlph",code:167},t.TransferAlphFromSelf={name:"TransferAlphFromSelf",code:168},t.TransferAlphToSelf={name:"TransferAlphToSelf",code:169},t.TransferToken={name:"TransferToken",code:170},t.TransferTokenFromSelf={name:"TransferTokenFromSelf",code:171},t.TransferTokenToSelf={name:"TransferTokenToSelf",code:172},t.CreateContract={name:"CreateContract",code:173},t.CreateContractWithToken={name:"CreateContractWithToken",code:174},t.CopyCreateContract={name:"CopyCreateContract",code:175},t.DestroySelf={name:"DestroySelf",code:176},t.SelfContractId={name:"SelfContractId",code:177},t.SelfAddress={name:"SelfAddress",code:178},t.CallerContractId={name:"CallerContractId",code:179},t.CallerAddress={name:"CallerAddress",code:180},t.IsCalledFromTxScript={name:"IsCalledFromTxScript",code:181},t.CallerInitialStateHash={name:"CallerInitialStateHash",code:182},t.CallerCodeHash={name:"CallerCodeHash",code:183},t.ContractInitialStateHash={name:"ContractInitialStateHash",code:184},t.ContractCodeHash={name:"ContractCodeHash",code:185},t.MigrateSimple={name:"MigrateSimple",code:186},t.MigrateWithFields={name:"MigrateWithFields",code:187},t.CopyCreateContractWithToken={name:"CopyCreateContractWithToken",code:188},t.BurnToken={name:"BurnToken",code:189},t.LockApprovedAssets={name:"LockApprovedAssets",code:190},t.CreateSubContract={name:"CreateSubContract",code:191},t.CreateSubContractWithToken={name:"CreateSubContractWithToken",code:192},t.CopyCreateSubContract={name:"CopyCreateSubContract",code:193},t.CopyCreateSubContractWithToken={name:"CopyCreateSubContractWithToken",code:194},t.LoadMutFieldByIndex={name:"LoadMutFieldByIndex",code:195},t.StoreMutFieldByIndex={name:"StoreMutFieldByIndex",code:196},t.ContractExists={name:"ContractExists",code:197},t.CreateContractAndTransferToken={name:"CreateContractAndTransferToken",code:198},t.CopyCreateContractAndTransferToken={name:"CopyCreateContractAndTransferToken",code:199},t.CreateSubContractAndTransferToken={name:"CreateSubContractAndTransferToken",code:200},t.CopyCreateSubContractAndTransferToken={name:"CopyCreateSubContractAndTransferToken",code:201},t.NullContractAddress={name:"NullContractAddress",code:202},t.SubContractId={name:"SubContractId",code:203},t.SubContractIdOf={name:"SubContractIdOf",code:204},t.ALPHTokenId={name:"ALPHTokenId",code:205},t.LoadImmField=e=>({name:"LoadImmField",code:206,index:e}),t.LoadImmFieldByIndex={name:"LoadImmFieldByIndex",code:207},t.PayGasFee={name:"PayGasFee",code:208},t.MinimalContractDeposit={name:"MinimalContractDeposit",code:209},t.CreateMapEntry=(e,t)=>({name:"CreateMapEntry",code:210,immFieldsNum:e,mutFieldsNum:t}),t.MethodSelector=e=>({name:"MethodSelector",code:211,selector:e}),t.CallExternalBySelector=e=>({name:"CallExternalBySelector",code:212,selector:e});class u extends a.Codec{encode(e){switch(e.name){case"CallLocal":return new Uint8Array([0,...a.byteCodec.encode(e.index)]);case"CallExternal":return new Uint8Array([1,...a.byteCodec.encode(e.index)]);case"Return":return new Uint8Array([2]);case"ConstTrue":return new Uint8Array([3]);case"ConstFalse":return new Uint8Array([4]);case"I256Const0":return new Uint8Array([5]);case"I256Const1":return new Uint8Array([6]);case"I256Const2":return new Uint8Array([7]);case"I256Const3":return new Uint8Array([8]);case"I256Const4":return new Uint8Array([9]);case"I256Const5":return new Uint8Array([10]);case"I256ConstN1":return new Uint8Array([11]);case"U256Const0":return new Uint8Array([12]);case"U256Const1":return new Uint8Array([13]);case"U256Const2":return new Uint8Array([14]);case"U256Const3":return new Uint8Array([15]);case"U256Const4":return new Uint8Array([16]);case"U256Const5":return new Uint8Array([17]);case"I256Const":return new Uint8Array([18,...i.i256Codec.encode(e.value)]);case"U256Const":return new Uint8Array([19,...i.u256Codec.encode(e.value)]);case"BytesConst":return new Uint8Array([20,...o.byteStringCodec.encode(e.value)]);case"AddressConst":return new Uint8Array([21,...s.lockupScriptCodec.encode(e.value)]);case"LoadLocal":return new Uint8Array([22,...a.byteCodec.encode(e.index)]);case"StoreLocal":return new Uint8Array([23,...a.byteCodec.encode(e.index)]);case"Pop":return new Uint8Array([24]);case"BoolNot":return new Uint8Array([25]);case"BoolAnd":return new Uint8Array([26]);case"BoolOr":return new Uint8Array([27]);case"BoolEq":return new Uint8Array([28]);case"BoolNeq":return new Uint8Array([29]);case"BoolToByteVec":return new Uint8Array([30]);case"I256Add":return new Uint8Array([31]);case"I256Sub":return new Uint8Array([32]);case"I256Mul":return new Uint8Array([33]);case"I256Div":return new Uint8Array([34]);case"I256Mod":return new Uint8Array([35]);case"I256Eq":return new Uint8Array([36]);case"I256Neq":return new Uint8Array([37]);case"I256Lt":return new Uint8Array([38]);case"I256Le":return new Uint8Array([39]);case"I256Gt":return new Uint8Array([40]);case"I256Ge":return new Uint8Array([41]);case"U256Add":return new Uint8Array([42]);case"U256Sub":return new Uint8Array([43]);case"U256Mul":return new Uint8Array([44]);case"U256Div":return new Uint8Array([45]);case"U256Mod":return new Uint8Array([46]);case"U256Eq":return new Uint8Array([47]);case"U256Neq":return new Uint8Array([48]);case"U256Lt":return new Uint8Array([49]);case"U256Le":return new Uint8Array([50]);case"U256Gt":return new Uint8Array([51]);case"U256Ge":return new Uint8Array([52]);case"U256ModAdd":return new Uint8Array([53]);case"U256ModSub":return new Uint8Array([54]);case"U256ModMul":return new Uint8Array([55]);case"U256BitAnd":return new Uint8Array([56]);case"U256BitOr":return new Uint8Array([57]);case"U256Xor":return new Uint8Array([58]);case"U256SHL":return new Uint8Array([59]);case"U256SHR":return new Uint8Array([60]);case"I256ToU256":return new Uint8Array([61]);case"I256ToByteVec":return new Uint8Array([62]);case"U256ToI256":return new Uint8Array([63]);case"U256ToByteVec":return new Uint8Array([64]);case"ByteVecEq":return new Uint8Array([65]);case"ByteVecNeq":return new Uint8Array([66]);case"ByteVecSize":return new Uint8Array([67]);case"ByteVecConcat":return new Uint8Array([68]);case"AddressEq":return new Uint8Array([69]);case"AddressNeq":return new Uint8Array([70]);case"AddressToByteVec":return new Uint8Array([71]);case"IsAssetAddress":return new Uint8Array([72]);case"IsContractAddress":return new Uint8Array([73]);case"Jump":return new Uint8Array([74,...i.i32Codec.encode(e.offset)]);case"IfTrue":return new Uint8Array([75,...i.i32Codec.encode(e.offset)]);case"IfFalse":return new Uint8Array([76,...i.i32Codec.encode(e.offset)]);case"Assert":return new Uint8Array([77]);case"Blake2b":return new Uint8Array([78]);case"Keccak256":return new Uint8Array([79]);case"Sha256":return new Uint8Array([80]);case"Sha3":return new Uint8Array([81]);case"VerifyTxSignature":return new Uint8Array([82]);case"VerifySecP256K1":return new Uint8Array([83]);case"VerifyED25519":return new Uint8Array([84]);case"NetworkId":return new Uint8Array([85]);case"BlockTimeStamp":return new Uint8Array([86]);case"BlockTarget":return new Uint8Array([87]);case"TxId":return new Uint8Array([88]);case"TxInputAddressAt":return new Uint8Array([89]);case"TxInputsSize":return new Uint8Array([90]);case"VerifyAbsoluteLocktime":return new Uint8Array([91]);case"VerifyRelativeLocktime":return new Uint8Array([92]);case"Log1":return new Uint8Array([93]);case"Log2":return new Uint8Array([94]);case"Log3":return new Uint8Array([95]);case"Log4":return new Uint8Array([96]);case"Log5":return new Uint8Array([97]);case"ByteVecSlice":return new Uint8Array([98]);case"ByteVecToAddress":return new Uint8Array([99]);case"Encode":return new Uint8Array([100]);case"Zeros":return new Uint8Array([101]);case"U256To1Byte":return new Uint8Array([102]);case"U256To2Byte":return new Uint8Array([103]);case"U256To4Byte":return new Uint8Array([104]);case"U256To8Byte":return new Uint8Array([105]);case"U256To16Byte":return new Uint8Array([106]);case"U256To32Byte":return new Uint8Array([107]);case"U256From1Byte":return new Uint8Array([108]);case"U256From2Byte":return new Uint8Array([109]);case"U256From4Byte":return new Uint8Array([110]);case"U256From8Byte":return new Uint8Array([111]);case"U256From16Byte":return new Uint8Array([112]);case"U256From32Byte":return new Uint8Array([113]);case"EthEcRecover":return new Uint8Array([114]);case"Log6":return new Uint8Array([115]);case"Log7":return new Uint8Array([116]);case"Log8":return new Uint8Array([117]);case"Log9":return new Uint8Array([118]);case"ContractIdToAddress":return new Uint8Array([119]);case"LoadLocalByIndex":return new Uint8Array([120]);case"StoreLocalByIndex":return new Uint8Array([121]);case"Dup":return new Uint8Array([122]);case"AssertWithErrorCode":return new Uint8Array([123]);case"Swap":return new Uint8Array([124]);case"BlockHash":return new Uint8Array([125]);case"DEBUG":return new Uint8Array([126,...o.byteStringsCodec.encode(e.stringParts)]);case"TxGasPrice":return new Uint8Array([127]);case"TxGasAmount":return new Uint8Array([128]);case"TxGasFee":return new Uint8Array([129]);case"I256Exp":return new Uint8Array([130]);case"U256Exp":return new Uint8Array([131]);case"U256ModExp":return new Uint8Array([132]);case"VerifyBIP340Schnorr":return new Uint8Array([133]);case"GetSegregatedSignature":return new Uint8Array([134]);case"MulModN":return new Uint8Array([135]);case"AddModN":return new Uint8Array([136]);case"U256ToString":return new Uint8Array([137]);case"I256ToString":return new Uint8Array([138]);case"BoolToString":return new Uint8Array([139]);case"GroupOfAddress":return new Uint8Array([140]);case"LoadMutField":return new Uint8Array([160,...a.byteCodec.encode(e.index)]);case"StoreMutField":return new Uint8Array([161,...a.byteCodec.encode(e.index)]);case"ApproveAlph":return new Uint8Array([162]);case"ApproveToken":return new Uint8Array([163]);case"AlphRemaining":return new Uint8Array([164]);case"TokenRemaining":return new Uint8Array([165]);case"IsPaying":return new Uint8Array([166]);case"TransferAlph":return new Uint8Array([167]);case"TransferAlphFromSelf":return new Uint8Array([168]);case"TransferAlphToSelf":return new Uint8Array([169]);case"TransferToken":return new Uint8Array([170]);case"TransferTokenFromSelf":return new Uint8Array([171]);case"TransferTokenToSelf":return new Uint8Array([172]);case"CreateContract":return new Uint8Array([173]);case"CreateContractWithToken":return new Uint8Array([174]);case"CopyCreateContract":return new Uint8Array([175]);case"DestroySelf":return new Uint8Array([176]);case"SelfContractId":return new Uint8Array([177]);case"SelfAddress":return new Uint8Array([178]);case"CallerContractId":return new Uint8Array([179]);case"CallerAddress":return new Uint8Array([180]);case"IsCalledFromTxScript":return new Uint8Array([181]);case"CallerInitialStateHash":return new Uint8Array([182]);case"CallerCodeHash":return new Uint8Array([183]);case"ContractInitialStateHash":return new Uint8Array([184]);case"ContractCodeHash":return new Uint8Array([185]);case"MigrateSimple":return new Uint8Array([186]);case"MigrateWithFields":return new Uint8Array([187]);case"CopyCreateContractWithToken":return new Uint8Array([188]);case"BurnToken":return new Uint8Array([189]);case"LockApprovedAssets":return new Uint8Array([190]);case"CreateSubContract":return new Uint8Array([191]);case"CreateSubContractWithToken":return new Uint8Array([192]);case"CopyCreateSubContract":return new Uint8Array([193]);case"CopyCreateSubContractWithToken":return new Uint8Array([194]);case"LoadMutFieldByIndex":return new Uint8Array([195]);case"StoreMutFieldByIndex":return new Uint8Array([196]);case"ContractExists":return new Uint8Array([197]);case"CreateContractAndTransferToken":return new Uint8Array([198]);case"CopyCreateContractAndTransferToken":return new Uint8Array([199]);case"CreateSubContractAndTransferToken":return new Uint8Array([200]);case"CopyCreateSubContractAndTransferToken":return new Uint8Array([201]);case"NullContractAddress":return new Uint8Array([202]);case"SubContractId":return new Uint8Array([203]);case"SubContractIdOf":return new Uint8Array([204]);case"ALPHTokenId":return new Uint8Array([205]);case"LoadImmField":return new Uint8Array([206,...a.byteCodec.encode(e.index)]);case"LoadImmFieldByIndex":return new Uint8Array([207]);case"PayGasFee":return new Uint8Array([208]);case"MinimalContractDeposit":return new Uint8Array([209]);case"CreateMapEntry":return new Uint8Array([210,...a.byteCodec.encode(e.immFieldsNum),...a.byteCodec.encode(e.mutFieldsNum)]);case"MethodSelector":return new Uint8Array([211,...c.intAs4BytesCodec.encode(e.selector)]);case"CallExternalBySelector":return new Uint8Array([212,...c.intAs4BytesCodec.encode(e.selector)])}}_decode(e){const r=e.consumeByte();switch(r){case 0:return(0,t.CallLocal)(a.byteCodec._decode(e));case 1:return(0,t.CallExternal)(a.byteCodec._decode(e));case 2:return t.Return;case 3:return t.ConstTrue;case 4:return t.ConstFalse;case 5:return t.I256Const0;case 6:return t.I256Const1;case 7:return t.I256Const2;case 8:return t.I256Const3;case 9:return t.I256Const4;case 10:return t.I256Const5;case 11:return t.I256ConstN1;case 12:return t.U256Const0;case 13:return t.U256Const1;case 14:return t.U256Const2;case 15:return t.U256Const3;case 16:return t.U256Const4;case 17:return t.U256Const5;case 18:return(0,t.I256Const)(i.i256Codec._decode(e));case 19:return(0,t.U256Const)(i.u256Codec._decode(e));case 20:return(0,t.BytesConst)(o.byteStringCodec._decode(e));case 21:return(0,t.AddressConst)(s.lockupScriptCodec._decode(e));case 22:return(0,t.LoadLocal)(a.byteCodec._decode(e));case 23:return(0,t.StoreLocal)(a.byteCodec._decode(e));case 24:return t.Pop;case 25:return t.BoolNot;case 26:return t.BoolAnd;case 27:return t.BoolOr;case 28:return t.BoolEq;case 29:return t.BoolNeq;case 30:return t.BoolToByteVec;case 31:return t.I256Add;case 32:return t.I256Sub;case 33:return t.I256Mul;case 34:return t.I256Div;case 35:return t.I256Mod;case 36:return t.I256Eq;case 37:return t.I256Neq;case 38:return t.I256Lt;case 39:return t.I256Le;case 40:return t.I256Gt;case 41:return t.I256Ge;case 42:return t.U256Add;case 43:return t.U256Sub;case 44:return t.U256Mul;case 45:return t.U256Div;case 46:return t.U256Mod;case 47:return t.U256Eq;case 48:return t.U256Neq;case 49:return t.U256Lt;case 50:return t.U256Le;case 51:return t.U256Gt;case 52:return t.U256Ge;case 53:return t.U256ModAdd;case 54:return t.U256ModSub;case 55:return t.U256ModMul;case 56:return t.U256BitAnd;case 57:return t.U256BitOr;case 58:return t.U256Xor;case 59:return t.U256SHL;case 60:return t.U256SHR;case 61:return t.I256ToU256;case 62:return t.I256ToByteVec;case 63:return t.U256ToI256;case 64:return t.U256ToByteVec;case 65:return t.ByteVecEq;case 66:return t.ByteVecNeq;case 67:return t.ByteVecSize;case 68:return t.ByteVecConcat;case 69:return t.AddressEq;case 70:return t.AddressNeq;case 71:return t.AddressToByteVec;case 72:return t.IsAssetAddress;case 73:return t.IsContractAddress;case 74:return(0,t.Jump)(i.i32Codec._decode(e));case 75:return(0,t.IfTrue)(i.i32Codec._decode(e));case 76:return(0,t.IfFalse)(i.i32Codec._decode(e));case 77:return t.Assert;case 78:return t.Blake2b;case 79:return t.Keccak256;case 80:return t.Sha256;case 81:return t.Sha3;case 82:return t.VerifyTxSignature;case 83:return t.VerifySecP256K1;case 84:return t.VerifyED25519;case 85:return t.NetworkId;case 86:return t.BlockTimeStamp;case 87:return t.BlockTarget;case 88:return t.TxId;case 89:return t.TxInputAddressAt;case 90:return t.TxInputsSize;case 91:return t.VerifyAbsoluteLocktime;case 92:return t.VerifyRelativeLocktime;case 93:return t.Log1;case 94:return t.Log2;case 95:return t.Log3;case 96:return t.Log4;case 97:return t.Log5;case 98:return t.ByteVecSlice;case 99:return t.ByteVecToAddress;case 100:return t.Encode;case 101:return t.Zeros;case 102:return t.U256To1Byte;case 103:return t.U256To2Byte;case 104:return t.U256To4Byte;case 105:return t.U256To8Byte;case 106:return t.U256To16Byte;case 107:return t.U256To32Byte;case 108:return t.U256From1Byte;case 109:return t.U256From2Byte;case 110:return t.U256From4Byte;case 111:return t.U256From8Byte;case 112:return t.U256From16Byte;case 113:return t.U256From32Byte;case 114:return t.EthEcRecover;case 115:return t.Log6;case 116:return t.Log7;case 117:return t.Log8;case 118:return t.Log9;case 119:return t.ContractIdToAddress;case 120:return t.LoadLocalByIndex;case 121:return t.StoreLocalByIndex;case 122:return t.Dup;case 123:return t.AssertWithErrorCode;case 124:return t.Swap;case 125:return t.BlockHash;case 126:return(0,t.DEBUG)(o.byteStringsCodec._decode(e));case 127:return t.TxGasPrice;case 128:return t.TxGasAmount;case 129:return t.TxGasFee;case 130:return t.I256Exp;case 131:return t.U256Exp;case 132:return t.U256ModExp;case 133:return t.VerifyBIP340Schnorr;case 134:return t.GetSegregatedSignature;case 135:return t.MulModN;case 136:return t.AddModN;case 137:return t.U256ToString;case 138:return t.I256ToString;case 139:return t.BoolToString;case 140:return t.GroupOfAddress;case 160:return(0,t.LoadMutField)(a.byteCodec._decode(e));case 161:return(0,t.StoreMutField)(a.byteCodec._decode(e));case 162:return t.ApproveAlph;case 163:return t.ApproveToken;case 164:return t.AlphRemaining;case 165:return t.TokenRemaining;case 166:return t.IsPaying;case 167:return t.TransferAlph;case 168:return t.TransferAlphFromSelf;case 169:return t.TransferAlphToSelf;case 170:return t.TransferToken;case 171:return t.TransferTokenFromSelf;case 172:return t.TransferTokenToSelf;case 173:return t.CreateContract;case 174:return t.CreateContractWithToken;case 175:return t.CopyCreateContract;case 176:return t.DestroySelf;case 177:return t.SelfContractId;case 178:return t.SelfAddress;case 179:return t.CallerContractId;case 180:return t.CallerAddress;case 181:return t.IsCalledFromTxScript;case 182:return t.CallerInitialStateHash;case 183:return t.CallerCodeHash;case 184:return t.ContractInitialStateHash;case 185:return t.ContractCodeHash;case 186:return t.MigrateSimple;case 187:return t.MigrateWithFields;case 188:return t.CopyCreateContractWithToken;case 189:return t.BurnToken;case 190:return t.LockApprovedAssets;case 191:return t.CreateSubContract;case 192:return t.CreateSubContractWithToken;case 193:return t.CopyCreateSubContract;case 194:return t.CopyCreateSubContractWithToken;case 195:return t.LoadMutFieldByIndex;case 196:return t.StoreMutFieldByIndex;case 197:return t.ContractExists;case 198:return t.CreateContractAndTransferToken;case 199:return t.CopyCreateContractAndTransferToken;case 200:return t.CreateSubContractAndTransferToken;case 201:return t.CopyCreateSubContractAndTransferToken;case 202:return t.NullContractAddress;case 203:return t.SubContractId;case 204:return t.SubContractIdOf;case 205:return t.ALPHTokenId;case 206:return(0,t.LoadImmField)(a.byteCodec._decode(e));case 207:return t.LoadImmFieldByIndex;case 208:return t.PayGasFee;case 209:return t.MinimalContractDeposit;case 210:return(0,t.CreateMapEntry)(a.byteCodec._decode(e),a.byteCodec._decode(e));case 211:return(0,t.MethodSelector)(c.intAs4BytesCodec._decode(e));case 212:return(0,t.CallExternalBySelector)(c.intAs4BytesCodec._decode(e));default:throw new Error(`Unknown instr code: ${r}`)}}}t.InstrCodec=u,t.instrCodec=new u,t.instrsCodec=new n.ArrayCodec(t.instrCodec)},2768:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.intAs4BytesCodec=t.IntAs4BytesCodec=void 0;const n=r(2709);class i extends n.Codec{encode(e){return new Uint8Array([e>>24&255,e>>16&255,e>>8&255,255&e])}_decode(e){const t=e.consumeBytes(4);return(255&t[0])<<24|(255&t[1])<<16|(255&t[2])<<8|255&t[3]}}t.IntAs4BytesCodec=i,t.intAs4BytesCodec=new i},1678:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.lockupScriptCodec=t.p2cCodec=void 0;const n=r(5617),i=r(2709),o=r(2205);t.p2cCodec=i.byte32Codec;const s=new i.ObjectCodec({publicKeyHashes:new o.ArrayCodec(i.byte32Codec),m:n.i32Codec});t.lockupScriptCodec=new i.EnumCodec("lockup script",{P2PKH:i.byte32Codec,P2MPKH:s,P2SH:i.byte32Codec,P2C:i.byte32Codec})},3049:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.methodsCodec=t.methodCodec=t.MethodCodec=void 0;const n=r(2205),i=r(5617),o=r(2709),s=r(6210),a=r(664);class c extends o.Codec{encode(e){const t=[];var r;return t.push(o.boolCodec.encode(e.isPublic)),t.push(new Uint8Array([(r=e,(r.usePreapprovedAssets||r.useContractAssets?r.usePreapprovedAssets&&r.useContractAssets?1:!r.usePreapprovedAssets&&r.useContractAssets?2:3:0)|(r.usePayToContractOnly?4:0))])),t.push(i.i32Codec.encode(e.argsLength)),t.push(i.i32Codec.encode(e.localsLength)),t.push(i.i32Codec.encode(e.returnLength)),t.push(s.instrsCodec.encode(e.instrs)),(0,a.concatBytes)(t)}_decode(e){const t=o.boolCodec._decode(e);return{...function(e){const t=!!(4&e);switch(3&e){case 0:return{usePayToContractOnly:t,usePreapprovedAssets:!1,useContractAssets:!1};case 1:return{usePayToContractOnly:t,usePreapprovedAssets:!0,useContractAssets:!0};case 2:return{usePayToContractOnly:t,usePreapprovedAssets:!1,useContractAssets:!0};case 3:return{usePayToContractOnly:t,usePreapprovedAssets:!0,useContractAssets:!1};default:throw new Error(`Invalid asset modifier: ${e}`)}}(o.byteCodec._decode(e)),isPublic:t,argsLength:i.i32Codec._decode(e),localsLength:i.i32Codec._decode(e),returnLength:i.i32Codec._decode(e),instrs:s.instrsCodec._decode(e)}}}t.MethodCodec=c,t.methodCodec=new c,t.methodsCodec=new n.ArrayCodec(t.methodCodec)},6633:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.option=void 0;const n=r(2709),i=new class extends n.Codec{encode(){return new Uint8Array([])}_decode(){}};t.option=function(e){return new n.EnumCodec("option",{None:i,Some:e})}},7421:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.outputsCodec=t.outputCodec=void 0;const n=r(2205),i=r(2577),o=r(406),s=r(1672);t.outputCodec=(0,i.either)("output",o.assetOutputCodec,s.contractOutputCodec),t.outputsCodec=new n.ArrayCodec(t.outputCodec)},7248:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Reader=void 0,t.Reader=class{constructor(e){this.index=0,this.bytes=e}consumeByte(){if(this.index>=this.bytes.length)throw new Error(`Index out of range: unable to consume byte at index ${this.index}, data length: ${this.bytes.length}`);const e=this.bytes[`${this.index}`];return this.index+=1,e}consumeBytes(e){const t=this.index,r=this.index+e;if(t>r||r>this.bytes.length)throw new Error(`Index out of range: unable to consume bytes from index ${t} to ${r}, data length: ${this.bytes.length}`);const n=this.bytes.slice(t,r);return this.index=r,n}consumeAll(){return this.consumeBytes(this.bytes.length-this.index)}}},4459:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.statefulScriptCodecOpt=t.scriptCodec=t.ScriptCodec=void 0;const n=r(2709),i=r(3049),o=r(6633);class s extends n.Codec{encode(e){return i.methodsCodec.encode(e.methods)}_decode(e){return{methods:i.methodsCodec._decode(e)}}}t.ScriptCodec=s,t.scriptCodec=new s,t.statefulScriptCodecOpt=(0,o.option)(t.scriptCodec)},9510:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.signaturesCodec=t.signatureCodec=void 0;const n=r(2205),i=r(2709);t.signatureCodec=new i.FixedSizeCodec(64),t.signaturesCodec=new n.ArrayCodec(t.signatureCodec)},7500:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.timestampCodec=t.TimestampCodec=void 0;const n=r(664),i=r(2709);class o extends i.Codec{encode(e){(0,i.assert)(e>=0n&&e<o.max,`Invalid timestamp: ${e}`);const t=new Uint8Array(8);for(let r=0;r<8;r+=1)t[`${r}`]=Number(e>>BigInt(8*(7-r))&BigInt(255));return t}_decode(e){const t=e.consumeBytes(8);return BigInt(`0x${(0,n.binToHex)(t)}`)}}t.TimestampCodec=o,o.max=1n<<64n,t.timestampCodec=new o},6341:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.tokensCodec=t.tokenCodec=void 0;const n=r(5617),i=r(2709),o=r(2205);t.tokenCodec=new i.ObjectCodec({tokenId:i.byte32Codec,amount:n.u256Codec}),t.tokensCodec=new o.ArrayCodec(t.tokenCodec)},1092:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.transactionCodec=t.TransactionCodec=void 0;const n=r(2190),i=r(9510),o=r(4464),s=r(406),a=r(1672),c=r(664),u=r(2709),d=r(7421);class f extends u.ObjectCodec{encodeApiTransaction(e){const t=f.fromApiTransaction(e);return this.encode(t)}decodeApiTransaction(e){const t=this.decode(e);return f.toApiTransaction(t)}static toApiTransaction(e){const t=n.UnsignedTxCodec.txId(e.unsigned),r=n.UnsignedTxCodec.toApiUnsignedTx(e.unsigned),i=!!e.scriptExecutionOk,o=e.contractInputs.map((e=>({hint:e.hint,key:(0,c.binToHex)(e.key)}))),u=(0,c.hexToBinUnsafe)(t);return{unsigned:r,scriptExecutionOk:i,contractInputs:o,generatedOutputs:e.generatedOutputs.map(((e,t)=>"Left"===e.kind?{...s.AssetOutputCodec.toFixedAssetOutput(u,e.value,t),type:"AssetOutput"}:a.ContractOutputCodec.convertToApiContractOutput(u,e.value,t))),inputSignatures:e.inputSignatures.map((e=>(0,c.binToHex)(e))),scriptSignatures:e.scriptSignatures.map((e=>(0,c.binToHex)(e)))}}static fromApiTransaction(e){return{unsigned:n.UnsignedTxCodec.fromApiUnsignedTx(e.unsigned),scriptExecutionOk:e.scriptExecutionOk?1:0,contractInputs:e.contractInputs.map((e=>({hint:e.hint,key:(0,c.hexToBinUnsafe)(e.key)}))),generatedOutputs:e.generatedOutputs.map((e=>{if("AssetOutput"===e.type)return{kind:"Left",value:s.AssetOutputCodec.fromFixedAssetOutput(e)};if("ContractOutput"===e.type)return{kind:"Right",value:a.ContractOutputCodec.convertToOutput(e)};throw new Error("Invalid output type")})),inputSignatures:e.inputSignatures.map((e=>(0,c.hexToBinUnsafe)(e))),scriptSignatures:e.scriptSignatures.map((e=>(0,c.hexToBinUnsafe)(e)))}}}t.TransactionCodec=f,t.transactionCodec=new f({unsigned:n.unsignedTxCodec,scriptExecutionOk:u.byteCodec,contractInputs:o.contractOutputRefsCodec,generatedOutputs:d.outputsCodec,inputSignatures:i.signaturesCodec,scriptSignatures:i.signaturesCodec})},2976:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.unlockScriptCodec=void 0;const n=r(2205),i=r(5617),o=r(2709),s=r(4459),a=r(1924),c=new o.FixedSizeCodec(33),u=new o.ObjectCodec({publicKey:c,index:i.i32Codec}),d=new n.ArrayCodec(u),f=new o.ObjectCodec({script:s.scriptCodec,params:a.valsCodec}),h=new class extends o.Codec{encode(){return new Uint8Array([])}_decode(){return"SameAsPrevious"}};t.unlockScriptCodec=new o.EnumCodec("unlock script",{P2PKH:c,P2MPKH:d,P2SH:f,SameAsPrevious:h})},2190:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.unsignedTxCodec=t.UnsignedTxCodec=void 0;const n=r(664),i=r(4459),o=r(5617),s=r(7544),a=r(406),c=r(7007),u=r(2709);class d extends u.ObjectCodec{encodeApiUnsignedTx(e){const t=d.fromApiUnsignedTx(e);return this.encode(t)}decodeApiUnsignedTx(e){const t=this.decode(e);return d.toApiUnsignedTx(t)}static txId(e){return(0,n.binToHex)((0,c.blakeHash)(t.unsignedTxCodec.encode(e)))}static toApiUnsignedTx(e){const t=d.txId(e),r=(0,n.hexToBinUnsafe)(t),o=e.version,c=e.networkId,u=e.gasAmount,f=e.gasPrice.toString(),h=s.InputCodec.toAssetInputs(e.inputs),l=a.AssetOutputCodec.toFixedAssetOutputs(r,e.fixedOutputs);let p;return"Some"===e.statefulScript.kind&&(p=(0,n.binToHex)(i.scriptCodec.encode(e.statefulScript.value))),{txId:t,version:o,networkId:c,gasAmount:u,scriptOpt:p,gasPrice:f,inputs:h,fixedOutputs:l}}static fromApiUnsignedTx(e){return{version:e.version,networkId:e.networkId,gasAmount:e.gasAmount,gasPrice:BigInt(e.gasPrice),inputs:s.InputCodec.fromAssetInputs(e.inputs),fixedOutputs:a.AssetOutputCodec.fromFixedAssetOutputs(e.fixedOutputs),statefulScript:void 0!==e.scriptOpt?{kind:"Some",value:i.scriptCodec.decode((0,n.hexToBinUnsafe)(e.scriptOpt))}:{kind:"None",value:void 0}}}}t.UnsignedTxCodec=d,t.unsignedTxCodec=new d({version:u.byteCodec,networkId:u.byteCodec,statefulScript:i.statefulScriptCodecOpt,gasAmount:o.i32Codec,gasPrice:o.u256Codec,inputs:s.inputsCodec,fixedOutputs:a.assetOutputsCodec})},1924:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.valsCodec=t.valCodec=void 0;const n=r(5617),i=r(5675),o=r(2709),s=r(1678),a=r(2205);t.valCodec=new o.EnumCodec("val",{Bool:o.boolCodec,I256:n.i256Codec,U256:n.u256Codec,ByteVec:i.byteStringCodec,Address:s.lockupScriptCodec}),t.valsCodec=new a.ArrayCodec(t.valCodec)},7695:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MAP_ENTRY_DEPOSIT=t.MINIMAL_CONTRACT_DEPOSIT=t.DEFAULT_GAS_ALPH_AMOUNT=t.DEFAULT_GAS_ATTOALPH_AMOUNT=t.DEFAULT_GAS_PRICE=t.DEFAULT_GAS_AMOUNT=t.ZERO_ADDRESS=t.DUST_AMOUNT=t.ONE_ALPH=t.ALPH_TOKEN_ID=t.MIN_UTXO_SET_AMOUNT=t.TOTAL_NUMBER_OF_CHAINS=t.TOTAL_NUMBER_OF_GROUPS=void 0,t.TOTAL_NUMBER_OF_GROUPS=4,t.TOTAL_NUMBER_OF_CHAINS=t.TOTAL_NUMBER_OF_GROUPS*t.TOTAL_NUMBER_OF_GROUPS,t.MIN_UTXO_SET_AMOUNT=BigInt(1e12),t.ALPH_TOKEN_ID="".padStart(64,"0"),t.ONE_ALPH=10n**18n,t.DUST_AMOUNT=10n**15n,t.ZERO_ADDRESS="tgx7VNFoP9DJiFMFgXXtafQZkUvyEdDHT9ryamHJYrjq",t.DEFAULT_GAS_AMOUNT=2e4,t.DEFAULT_GAS_PRICE=10n**11n,t.DEFAULT_GAS_ATTOALPH_AMOUNT=BigInt(t.DEFAULT_GAS_AMOUNT)*t.DEFAULT_GAS_PRICE,t.DEFAULT_GAS_ALPH_AMOUNT=.002,t.MINIMAL_CONTRACT_DEPOSIT=t.ONE_ALPH/10n,t.MAP_ENTRY_DEPOSIT=t.ONE_ALPH/10n},5143:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.getTokenIdFromUnsignedTx=t.getContractIdFromUnsignedTx=t.getContractEventsCurrentCount=t.multicallMethods=t.signExecuteMethod=t.callMethod=t.subscribeContractEvents=t.subscribeContractEvent=t.decodeEvent=t.subscribeContractDestroyedEvent=t.subscribeContractCreatedEvent=t.fetchContractState=t.ContractInstance=t.getMapItem=t.RalphMap=t.printDebugMessagesFromTx=t.getDebugMessagesFromTx=t.testMethod=t.extractMapsFromApiResult=t.addStdIdToFields=t.subscribeEventsFromContract=t.decodeContractDestroyedEvent=t.decodeContractCreatedEvent=t.DestroyContractEventAddresses=t.CreateContractEventAddresses=t.ExecutableScript=t.ContractFactory=t.randomTxId=t.fromApiEventFields=t.fromApiArray=t.getDefaultValue=t.fromApiFields=t.Script=t.Contract=t.Artifact=t.Struct=t.DEFAULT_COMPILER_OPTIONS=t.DEFAULT_NODE_COMPILER_OPTIONS=t.StdIdFieldName=void 0;const s=r(7077),a=r(3749),c=o(r(8486)),u=r(664),d=r(2581),f=r(307),h=r(4964),l=r(7695),p=o(r(1540)),b=r(2505),y=r(3651),m=r(4652),g=new u.WebCrypto;t.StdIdFieldName="__stdInterfaceId",t.DEFAULT_NODE_COMPILER_OPTIONS={ignoreUnusedConstantsWarnings:!1,ignoreUnusedVariablesWarnings:!1,ignoreUnusedFieldsWarnings:!1,ignoreUnusedPrivateFunctionsWarnings:!1,ignoreUpdateFieldsCheckWarnings:!1,ignoreCheckExternalCallerWarnings:!1,ignoreUnusedFunctionReturnWarnings:!1,skipAbstractContractCheck:!1},t.DEFAULT_COMPILER_OPTIONS={errorOnWarnings:!0,...t.DEFAULT_NODE_COMPILER_OPTIONS};class v{constructor(e,t,r,n){this.name=e,this.fieldNames=t,this.fieldTypes=r,this.isMutable=n}static fromJson(e){if(null===e.name||null===e.fieldNames||null===e.fieldTypes||null===e.isMutable)throw Error("The JSON for struct is incomplete");return new v(e.name,e.fieldNames,e.fieldTypes,e.isMutable)}static fromStructSig(e){return new v(e.name,e.fieldNames,e.fieldTypes,e.isMutable)}toJson(){return{name:this.name,fieldNames:this.fieldNames,fieldTypes:this.fieldTypes,isMutable:this.isMutable}}}t.Struct=v;class w{constructor(e,t,r){this.version=e,this.name=t,this.functions=r}async isDevnet(e){if(!e.nodeProvider)return!1;const t=await e.nodeProvider.infos.getInfosChainParams();return(0,u.isDevnet)(t.networkId)}}function _(e){return{name:e.name,paramNames:e.paramNames,paramTypes:e.paramTypes,paramIsMutable:e.paramIsMutable,returnTypes:e.returnTypes}}t.Artifact=w;class A extends w{constructor(e,t,r,n,i,o,s,a,d,f,h,l,p,b){super(e,t,d),this.bytecode=r,this.bytecodeDebugPatch=n,this.codeHash=i,this.fieldsSig=s,this.eventsSig=a,this.constants=f,this.enums=h,this.structs=l,this.mapsSig=p,this.stdInterfaceId=b,this.bytecodeDebug=c.buildDebugBytecode(this.bytecode,this.bytecodeDebugPatch),this.codeHashDebug=o,this.decodedContract=y.contract.contractCodec.decodeContract((0,u.hexToBinUnsafe)(this.bytecode)),this.bytecodeForTesting=void 0,this.codeHashForTesting=void 0}getByteCodeForTesting(){if(void 0!==this.bytecodeForTesting)return this.bytecodeForTesting;if(this.publicFunctions().length==this.functions.length)return this.bytecodeForTesting=this.bytecodeDebug,this.codeHashForTesting=this.codeHashDebug,this.bytecodeForTesting;const e=y.contract.contractCodec.decodeContract((0,u.hexToBinUnsafe)(this.bytecodeDebug)),t=e.methods.map((e=>({...e,isPublic:!0}))),r=y.contract.contractCodec.encodeContract({fieldLength:e.fieldLength,methods:t}),n=p.blake2b(r,void 0,32);return this.bytecodeForTesting=(0,u.binToHex)(r),this.codeHashForTesting=(0,u.binToHex)(n),this.bytecodeForTesting}hasCodeHash(e){return this.codeHash===e||this.codeHashDebug===e||this.codeHashForTesting===e}getDecodedMethod(e){return this.decodedContract.methods[`${e}`]}publicFunctions(){return this.functions.filter(((e,t)=>this.getDecodedMethod(t).isPublic))}usingPreapprovedAssetsFunctions(){return this.functions.filter(((e,t)=>this.getDecodedMethod(t).usePreapprovedAssets))}usingAssetsInContractFunctions(){return this.functions.filter(((e,t)=>this.getDecodedMethod(t).useContractAssets))}isMethodUsePreapprovedAssets(e){return this.getDecodedMethod(e).usePreapprovedAssets}static fromJson(e,t="",r="",n=[]){if(null==e.version||null==e.name||null==e.bytecode||null==e.codeHash||null==e.fieldsSig||null==e.eventsSig||null==e.constants||null==e.enums||null==e.functions)throw Error("The artifact JSON for contract is incomplete");return new A(e.version,e.name,e.bytecode,t,e.codeHash,r||e.codeHash,e.fieldsSig,e.eventsSig,e.functions,e.constants,e.enums,n,null===e.mapsSig?void 0:e.mapsSig,null===e.stdInterfaceId?void 0:e.stdInterfaceId)}static fromCompileResult(e,t=[]){return new A(e.version,e.name,e.bytecode,e.bytecodeDebugPatch,e.codeHash,e.codeHashDebug,e.fields,e.events,e.functions.map(_),e.constants,e.enums,t,e.maps,e.stdInterfaceId)}static async fromArtifactFile(e,t,r,n=[]){const i=await s.promises.readFile(e),o=JSON.parse(i.toString());return A.fromJson(o,t,r,n)}toString(){const e={version:this.version,name:this.name,bytecode:this.bytecode,codeHash:this.codeHash,fieldsSig:this.fieldsSig,eventsSig:this.eventsSig,functions:this.functions,constants:this.constants,enums:this.enums};return void 0!==this.mapsSig&&(e.mapsSig=this.mapsSig),void 0!==this.stdInterfaceId&&(e.stdInterfaceId=this.stdInterfaceId),JSON.stringify(e,null,2)}getInitialFieldsWithDefaultValues(){return E(void 0===this.stdInterfaceId?this.fieldsSig:{names:this.fieldsSig.names.slice(0,-1),types:this.fieldsSig.types.slice(0,-1),isMutable:this.fieldsSig.isMutable.slice(0,-1)},this.structs)}toState(e,t,r){const n=void 0!==r?r:A.randomAddress();return{address:n,contractId:(0,u.binToHex)((0,d.contractIdFromAddress)(n)),bytecode:this.bytecode,codeHash:this.codeHash,fields:e,fieldsSig:this.fieldsSig,asset:t}}static randomAddress(){const e=new Uint8Array(33);return g.getRandomValues(e),e[0]=3,u.bs58.encode(e)}printDebugMessages(e,t){(0,b.isContractDebugMessageEnabled)()&&0!=t.length&&(console.log(`Testing ${this.name}.${e}:`),t.forEach((e=>W(e))))}toApiFields(e){return void 0===e?[]:function(e,t,r){return c.flattenFields(e,t.names,t.types,t.isMutable,r).map((e=>(0,a.toApiVal)(e.value,e.type)))}(e,this.fieldsSig,this.structs)}toApiArgs(e,t){if(t){const r=this.functions.find((t=>t.name==e));if(null==r)throw new Error(`Invalid function name: ${e}`);return U(t,r,this.structs)}return[]}getMethodIndex(e){return this.functions.findIndex((t=>t.name===e))}toApiContractStates(e){return void 0!==e?e.map((e=>function(e,t){const r=e.fields??{},n=e.fieldsSig,i=c.flattenFields(r,n.names,n.types,n.isMutable,t),o=i.filter((e=>!e.isMutable)).map((e=>(0,a.toApiVal)(e.value,e.type))),s=i.filter((e=>e.isMutable)).map((e=>(0,a.toApiVal)(e.value,e.type)));return{address:e.address,bytecode:e.bytecode,codeHash:e.codeHash,initialStateHash:e.initialStateHash,immFields:o,mutFields:s,asset:B(e.asset)}}(e,this.structs))):void 0}toApiTestContractParams(e,t){const r=void 0===t.initialFields?[]:c.flattenFields(t.initialFields,this.fieldsSig.names,this.fieldsSig.types,this.fieldsSig.isMutable,this.structs),n=r.filter((e=>!e.isMutable)).map((e=>(0,a.toApiVal)(e.value,e.type))),i=r.filter((e=>e.isMutable)).map((e=>(0,a.toApiVal)(e.value,e.type)));return{group:t.group,blockHash:t.blockHash,blockTimeStamp:t.blockTimeStamp,txId:t.txId,address:t.address,callerAddress:t.callerAddress,bytecode:this.bytecodeDebug,initialImmFields:n,initialMutFields:i,initialAsset:void 0!==t.initialAsset?B(t.initialAsset):void 0,methodIndex:this.getMethodIndex(e),args:this.toApiArgs(e,t.testArgs),existingContracts:this.toApiContractStates(t.existingContracts),inputAssets:O(t.inputAssets)}}fromApiContractState(e){return{address:e.address,contractId:(0,u.binToHex)((0,d.contractIdFromAddress)(e.address)),bytecode:e.bytecode,initialStateHash:e.initialStateHash,codeHash:e.codeHash,fields:C(e.immFields,e.mutFields,this.fieldsSig,this.structs),fieldsSig:this.fieldsSig,asset:(t=e.asset,{alphAmount:(0,a.fromApiNumber256)(t.attoAlphAmount),tokens:(0,a.fromApiTokens)(t.tokens)})};var t}static fromApiContractState(e,t){return t(e.codeHash).fromApiContractState(e)}static fromApiEvent(e,t,r,n){let i,o;if(e.eventIndex==A.ContractCreatedEventIndex)i=D(x(e.fields,A.ContractCreatedEvent,!0)),o=A.ContractCreatedEvent.name;else if(e.eventIndex==A.ContractDestroyedEventIndex)i=x(e.fields,A.ContractDestroyedEvent,!0),o=A.ContractDestroyedEvent.name;else{const r=n(t).eventsSig[e.eventIndex];i=x(e.fields,r),o=r.name}return{txId:r,blockHash:e.blockHash,contractAddress:e.contractAddress,name:o,eventIndex:e.eventIndex,fields:i}}fromApiTestContractResult(e,t,r,n){const i=this.functions.findIndex((t=>t.name===e)),o=this.functions[`${i}`].returnTypes,s=I(t.returns,o,this.structs),a=0===s.length?null:1===s.length?s[0]:s,c=new Map;return c.set(t.address,t.codeHash),t.contracts.forEach((e=>c.set(e.address,e.codeHash))),{contractId:(0,u.binToHex)((0,d.contractIdFromAddress)(t.address)),contractAddress:t.address,returns:a,gasUsed:t.gasUsed,contracts:t.contracts.map((e=>A.fromApiContractState(e,n))),txOutputs:t.txOutputs.map(R),events:A.fromApiEvents(t.events,c,r,n),debugMessages:t.debugMessages}}async txParamsForDeployment(e,t){const r=await this.isDevnet(e),n=t.initialFields??{},i=this.buildByteCodeToDeploy($(this,n),r,t.exposePrivateFunctions??!1),o=await e.getSelectedAccount();return{signerAddress:o.address,signerKeyType:o.keyType,bytecode:i,initialAttoAlphAmount:t?.initialAttoAlphAmount,issueTokenAmount:t?.issueTokenAmount,issueTokenTo:t?.issueTokenTo,initialTokenAmounts:t?.initialTokenAmounts,gasAmount:t?.gasAmount,gasPrice:t?.gasPrice}}buildByteCodeToDeploy(e,t,r=!1){if(r&&!t)throw new Error("Cannot expose private functions in non-devnet environment");try{const n=r&&t?this.getByteCodeForTesting():t?this.bytecodeDebug:this.bytecode;return c.buildContractByteCode(n,e,this.fieldsSig,this.structs)}catch(e){throw new m.TraceableError(`Failed to build bytecode for contract ${this.name}`,e)}}static fromApiEvents(e,t,r,n){return e.map((e=>{const i=e.contractAddress,o=t.get(i);if(void 0!==o||e.eventIndex<0)return A.fromApiEvent(e,o,r,n);throw Error(`Cannot find codeHash for the contract address: ${i}`)}))}toApiCallContract(e,t,r,n){const i=this.functions[`${n}`],o=U(e.args??{},i,this.structs);return{...e,group:t,address:r,methodIndex:n,args:o,inputAssets:O(e.inputAssets)}}fromApiCallContractResult(e,t,r,n){const i=this.functions[`${r}`].returnTypes;return S((0,a.tryGetCallResult)(e),t,i,this.structs,n)}}function S(e,t,r,n,i){const o=I(e.returns,r,n),s=0===o.length?null:1===o.length?o[0]:o,a=new Map;return e.contracts.forEach((e=>a.set(e.address,e.codeHash))),{returns:s,gasUsed:e.gasUsed,contracts:e.contracts.map((e=>A.fromApiContractState(e,i))),txInputs:e.txInputs,txOutputs:e.txOutputs.map((e=>R(e))),events:A.fromApiEvents(e.events,a,t,i),debugMessages:e.debugMessages}}t.Contract=A,A.ContractCreatedEventIndex=-1,A.ContractCreatedEvent={name:"ContractCreated",fieldNames:["address","parentAddress","stdInterfaceId"],fieldTypes:["Address","Address","ByteVec"]},A.ContractDestroyedEventIndex=-2,A.ContractDestroyedEvent={name:"ContractDestroyed",fieldNames:["address"],fieldTypes:["Address"]},A.DebugEventIndex=-3;class M extends w{constructor(e,t,r,n,i,o,s){super(e,t,o),this.bytecodeTemplate=r,this.bytecodeDebugPatch=n,this.fieldsSig=i,this.structs=s}static fromCompileResult(e,t=[]){return new M(e.version,e.name,e.bytecodeTemplate,e.bytecodeDebugPatch,e.fields,e.functions.map(_),t)}static fromJson(e,t="",r=[]){if(null==e.version||null==e.name||null==e.bytecodeTemplate||null==e.fieldsSig||null==e.functions)throw Error("The artifact JSON for script is incomplete");return new M(e.version,e.name,e.bytecodeTemplate,t,e.fieldsSig,e.functions,r)}static async fromArtifactFile(e,t,r=[]){const n=await s.promises.readFile(e),i=JSON.parse(n.toString());return this.fromJson(i,t,r)}toString(){const e={version:this.version,name:this.name,bytecodeTemplate:this.bytecodeTemplate,fieldsSig:this.fieldsSig,functions:this.functions};return JSON.stringify(e,null,2)}async txParamsForExecution(e,t){const r=await e.getSelectedAccount();return{signerAddress:r.address,signerKeyType:r.keyType,bytecode:this.buildByteCodeToDeploy(t.initialFields??{}),attoAlphAmount:t.attoAlphAmount,tokens:t.tokens,gasAmount:t.gasAmount,gasPrice:t.gasPrice}}buildByteCodeToDeploy(e){try{return c.buildScriptByteCode(this.bytecodeTemplate,e,this.fieldsSig,this.structs)}catch(e){throw new m.TraceableError(`Failed to build bytecode for script ${this.name}`,e)}}}function C(e,t,r,n){let[i,o]=[0,0];const s=(r,n)=>{const s=n?t[o++]:e[i++];return(0,a.fromApiPrimitiveVal)(s,r)};return r.names.reduce(((e,t,i)=>{const o=r.types[`${i}`],a=r.isMutable[`${i}`];return e[`${t}`]=T(a,o,n,s),e}),{})}function T(e,t,r,n){if(t.startsWith("[")){const[i,o]=(0,a.decodeArrayType)(t);return Array.from(Array(o).keys()).map((()=>T(e,i,r,n)))}const i=r.find((e=>e.name===t));if(void 0!==i)return i.fieldNames.reduce(((t,o,s)=>{const a=i.fieldTypes[`${s}`],c=e&&i.isMutable[`${s}`];return t[`${o}`]=T(c,a,r,n),t}),{});const o=a.PrimitiveTypes.includes(t)?t:"ByteVec";return n(o,e)}function E(e,t){return e.names.reduce(((r,n,i)=>{const o=e.types[`${i}`];return r[`${n}`]=T(!1,o,t,a.getDefaultPrimitiveValue),r}),{})}function k(e,t,r,n=!1){return T(!1,t,r,(t=>{const r=e.next();if(r.done)throw Error("Not enough vals");return(0,a.fromApiPrimitiveVal)(r.value,t,n)}))}function I(e,t,r){const n=e.values();return t.map((e=>k(n,e,r)))}function x(e,t,r=!1){const n=e.values();return t.fieldNames.reduce(((e,i,o)=>{const s=t.fieldTypes[`${o}`];return e[`${i}`]=k(n,s,[],r),e}),{})}function B(e){return{attoAlphAmount:(0,a.toApiNumber256)(e.alphAmount),tokens:void 0!==e.tokens?e.tokens.map(a.toApiToken):[]}}function U(e,t,r){return c.flattenFields(e,t.paramNames,t.paramTypes,t.paramIsMutable,r).map((e=>(0,a.toApiVal)(e.value,e.type)))}function P(e){return{address:e.address,asset:B(e.asset)}}function O(e){return void 0!==e?e.map(P):void 0}function R(e){if("AssetOutput"===e.type){const t=e;return{type:"AssetOutput",address:t.address,alphAmount:(0,a.fromApiNumber256)(t.attoAlphAmount),tokens:(0,a.fromApiTokens)(t.tokens),lockTime:t.lockTime,message:t.message}}if("ContractOutput"===e.type){const t=e;return{type:"ContractOutput",address:t.address,alphAmount:(0,a.fromApiNumber256)(t.attoAlphAmount),tokens:(0,a.fromApiTokens)(t.tokens)}}throw new Error(`Unknown output type: ${e}`)}function L(){const e=new Uint8Array(32);return g.getRandomValues(e),(0,u.binToHex)(e)}function N(e,t){const r=new Uint8Array(32).fill(0);return r[30]=e,r[31]=t,(0,d.addressFromContractId)((0,u.binToHex)(r))}function j(e,t,r){if(e.eventIndex!==r)throw new Error(`Invalid event index: ${e.eventIndex}, expected: ${r}`);return x(e.fields,t,!0)}function D(e){const t=e.parentAddress,r=e.stdInterfaceId;return{address:e.address,parentAddress:""===t?void 0:t,stdInterfaceIdGuessed:""===r?void 0:r}}function F(e){const t=j(e,A.ContractCreatedEvent,A.ContractCreatedEventIndex);return{blockHash:e.blockHash,txId:e.txId,eventIndex:e.eventIndex,name:A.ContractCreatedEvent.name,fields:D(t)}}function H(e){const t=j(e,A.ContractDestroyedEvent,A.ContractDestroyedEventIndex);return{blockHash:e.blockHash,txId:e.txId,eventIndex:e.eventIndex,name:A.ContractDestroyedEvent.name,fields:{address:t.address}}}function q(e,t,r,n,i){const o={pollingInterval:e.pollingInterval,messageCallback:t=>t.eventIndex!==r?Promise.resolve():e.messageCallback(n(t)),errorCallback:(t,r)=>e.errorCallback(t,r),onEventCountChanged:e.onEventCountChanged};return(0,h.subscribeToEvents)(o,t,i)}function $(e,t){return void 0===e.stdInterfaceId?t:{...t,__stdInterfaceId:"414c5048"+e.stdInterfaceId}}function V(e,t,r,n,i){const o=c.encodeMapPrefix(t),s=c.encodeMapKey(r,n),a=(0,u.binToHex)(o)+(0,u.binToHex)(s);return(0,d.subContractId)(e,a,i)}function z(e){return{names:["value","parentContractId"],types:[e,"ByteVec"],isMutable:[!0,!1]}}function G(e,t,r,n){const i=e.mapsSig;if(void 0===i)return[];const o=[];return Object.keys(n).forEach((s=>{const a=i.names.findIndex((e=>e===s));if(-1===a)throw new Error(`Map var ${s} does not exist in contract ${e.name}`);const f=i.types[`${a}`],h=function(e,t,r,n,i,o){const[s,a]=c.parseMapType(o),f=function(e,t){const{immFields:r,mutFields:n}=c.calcFieldSize(e,!0,t),i={isPublic:!0,usePreapprovedAssets:!1,useContractAssets:!1,usePayToContractOnly:!1,argsLength:1,localsLength:1,returnLength:1,instrs:[(0,y.LoadLocal)(0),y.LoadImmFieldByIndex]},o=r,s={fieldLength:r+n+1,methods:[i,{...i,instrs:[(0,y.LoadLocal)(0),y.LoadMutFieldByIndex]},{...i,argsLength:2,localsLength:2,returnLength:0,instrs:[y.CallerContractId,(0,y.LoadImmField)(o),y.ByteVecEq,y.Assert,(0,y.LoadLocal)(0),(0,y.LoadLocal)(1),y.StoreMutFieldByIndex]},{isPublic:!0,usePreapprovedAssets:!1,useContractAssets:!0,usePayToContractOnly:!1,argsLength:1,localsLength:1,returnLength:0,instrs:[y.CallerContractId,(0,y.LoadImmField)(o),y.ByteVecEq,y.Assert,(0,y.LoadLocal)(0),y.DestroySelf]}]},a=y.contract.contractCodec.encodeContract(s),d=p.blake2b(a,void 0,32);return{bytecode:(0,u.binToHex)(a),codeHash:(0,u.binToHex)(d)}}(a,e.structs);return Array.from(n.entries()).map((([e,n])=>{const o={value:n,parentContractId:t},c=V(t,i,e,s,r);return{...f,address:(0,d.addressFromContractId)(c),contractId:c,fieldsSig:z(a),fields:o,asset:{alphAmount:l.ONE_ALPH}}}))}(e,t,r,n[`${s}`],a,f);o.push(...h)})),o}function K(e,t,r,n,i){const o=t.initialMaps??{},s=t.existingContracts??[],a=n.contracts.filter((t=>t.address===e||void 0!==s.find((e=>e.address===t.address)))),f=[];return a.forEach((t=>{const a=i(t.codeHash);if(void 0!==a.mapsSig){const i=t.address===e?o:s.find((e=>e.address===t.address)).maps,h=function(e,t,r,n,i){const o=function(e,t){const r=e.mapsSig;return void 0===r?[]:r.names.map(((e,n)=>{const i=r.types[`${n}`],o=t[`${e}`]??new Map,[s,a]=c.parseMapType(i);return{name:e,value:o,keyType:s,valueType:a,index:n}}))}(e,i),s=function(e,t,r,n,i){const o=(0,u.binToHex)((0,d.contractIdFromAddress)(n)),s=[];return r.forEach((r=>{Array.from(r.value.keys()).forEach((n=>{const a=V(o,r.index,n,r.keyType,i),c=t.contracts.find((e=>e.address===(0,d.addressFromContractId)(a)));if(void 0===c)return;s.push(c.address);const u=z(r.valueType),f=C(c.immFields,c.mutFields,u,e.structs);r.value.set(n,f.value)}))})),s}(e,n,o,t,r),a=function(e,t,r,n,i){const o=(0,u.binToHex)((0,d.contractIdFromAddress)(n)),s=[];return t.debugMessages.forEach((a=>{if(a.contractAddress!==n)return;const u=c.tryDecodeMapDebugLog(a.message);if(void 0===u)return;const f=r[`${u.mapIndex}`],h=c.decodePrimitive(u.encodedKey,f.keyType),l=(0,d.subContractId)(o,u.path,i);if(!u.isInsert)return void f.value.delete(h);const p=t.contracts.find((e=>e.address===(0,d.addressFromContractId)(l)));if(void 0===p)throw new Error(`Cannot find contract state for map value, map field: ${f.name}, value type: ${f.valueType}`);s.push(p.address);const b=z(f.valueType),y=C(p.immFields,p.mutFields,b,e.structs);f.value.set(h,y.value)})),s}(e,n,o,t,r),f=s.concat(a),h=n.contracts.filter((e=>void 0===f.find((t=>e.address===t))));return n.contracts=h,o.reduce(((e,t)=>(e[`${t.name}`]=t.value,e)),{})}(a,t.address,r,n,i??{});f.push({address:t.address,maps:h})}})),f}function W(e){console.log(`> Contract @ ${e.contractAddress} - ${e.message}`)}async function J(e,t){if((0,u.isHexString)(e)&&64===e.length){const r=t??(0,f.getCurrentNodeProvider)();return(await r.events.getEventsTxIdTxid(e)).events.filter((e=>e.eventIndex===A.DebugEventIndex)).map((e=>{if(1===e.fields.length&&"ByteVec"===e.fields[0].type)return{contractAddress:e.contractAddress,message:(0,u.hexToString)(e.fields[0].value)};throw new Error(`Invalid debug log: ${JSON.stringify(e.fields)}`)}))}throw new Error(`Invalid tx id: ${e}`)}async function Z(e,t){const r=await J(e,t);r.length>0&&r.forEach((e=>W(e)))}async function X(e,t,r,n,i){const o=e.mapsSig?.names.findIndex((e=>e===n)),s=void 0===o?void 0:e.mapsSig?.types[`${o}`];if(void 0===s)throw new Error(`Map ${n} does not exist in contract ${e.name}`);const[a,u]=c.parseMapType(s),h=V(t,o,i,a,r),l=(0,d.addressFromContractId)(h);try{const t=await(0,f.getCurrentNodeProvider)().contracts.getContractsAddressState(l),r=z(u);return C(t.immFields,t.mutFields,r,e.structs).value}catch(e){if(e instanceof Error&&e.message.includes("KeyNotFound"))return;throw new m.TraceableError(`Failed to get value from map ${n}, key: ${i}, parent contract id: ${t}`,e)}}function Y(e){if(e<0||e>=l.TOTAL_NUMBER_OF_GROUPS)throw new Error(`Invalid group index ${e}, expected a value within the range [0, ${l.TOTAL_NUMBER_OF_GROUPS})`)}function Q(e,t,r,n){if(r.eventIndex!==n&&!(n>=0&&n<e.eventsSig.length))throw new Error("Invalid event index: "+r.eventIndex+", expected: "+n);const i=e.eventsSig[`${n}`],o=x(r.fields,i);return{contractAddress:t.address,blockHash:r.blockHash,txId:r.txId,eventIndex:r.eventIndex,name:i.name,fields:o}}function ee(e){if(e<0||e>255)throw new Error(`StoreLocal index ${e} must be between 0 and 255 inclusive`);return ie((0,y.StoreLocal)(e))}function te(e){if(e<0||e>255)throw new Error(`LoadLocal index ${e} must be between 0 and 255 inclusive`);return ie((0,y.LoadLocal)(e))}function re(e){return(0,u.binToHex)(y.i32Codec.encode(e))}function ne(e){if(e<0)throw new Error(`value ${e} must be non-negative`);return e<6?(BigInt(12)+e).toString(16).padStart(2,"0"):ie((0,y.U256Const)(e))}function ie(e){return(0,u.binToHex)(y.instrCodec.encode(e))}t.Script=M,t.fromApiFields=C,t.getDefaultValue=E,t.fromApiArray=I,t.fromApiEventFields=x,t.randomTxId=L,u.assertType,t.ContractFactory=class{constructor(e){this.contract=e}async deploy(e,t){const r=await this.contract.txParamsForDeployment(e,{...t,initialFields:$(this.contract,t.initialFields)}),n=await e.signAndSubmitDeployContractTx(r);return{...n,contractInstance:this.at(n.contractAddress)}}async deployTemplate(e){return this.deploy(e,{initialFields:this.contract.getInitialFieldsWithDefaultValues()})}stateForTest_(e,t,r,n){const i={alphAmount:t?.alphAmount??l.MINIMAL_CONTRACT_DEPOSIT,tokens:t?.tokens};return{...this.contract.toState($(this.contract,e),i,r),bytecode:this.contract.bytecodeDebug,codeHash:this.contract.codeHash,maps:n}}},t.ExecutableScript=class{constructor(e,t){this.script=e,this.getContractByCodeHash=t}async execute(e,t){const r=await this.script.txParamsForExecution(e,t);return await e.signAndSubmitExecuteScriptTx(r)}async call(e){const t=this.script.functions.find((e=>"main"===e.name));if(void 0===t)throw new Error(`There is no main function in script ${this.script.name}`);const r=this.script.buildByteCodeToDeploy(e.initialFields),n=e.txId??L(),i=(0,f.getCurrentNodeProvider)();return S(await i.contracts.postContractsCallTxScript({...e,group:e.groupIndex??0,bytecode:r,inputAssets:O(e.inputAssets)}),n,t.returnTypes,this.script.structs,this.getContractByCodeHash)}},t.CreateContractEventAddresses=Array.from(Array(l.TOTAL_NUMBER_OF_GROUPS).keys()).map((e=>N(A.ContractCreatedEventIndex,e))),t.DestroyContractEventAddresses=Array.from(Array(l.TOTAL_NUMBER_OF_GROUPS).keys()).map((e=>N(A.ContractDestroyedEventIndex,e))),t.decodeContractCreatedEvent=F,t.decodeContractDestroyedEvent=H,t.subscribeEventsFromContract=q,t.addStdIdToFields=$,t.extractMapsFromApiResult=K,t.testMethod=async function(e,t,r,n){const i=r?.txId??L(),o=e.contract,s=r.address??(0,d.addressFromContractId)((0,u.binToHex)(g.getRandomValues(new Uint8Array(32)))),a=(0,u.binToHex)((0,d.contractIdFromAddress)(s)),c=r.group??0,h=function(e,t,r,n,i){const o=n.initialMaps??{},s=G(e,t,r,o),a=n.existingContracts??[],c=a.flatMap((e=>void 0!==e.maps?G(i(e.codeHash),e.contractId,r,e.maps??{}):[]));return a.concat(s,c)}(o,a,c,r,n),l=o.toApiTestContractParams(t,{...r,address:s,txId:i,initialFields:$(o,r.initialFields??{}),testArgs:void 0===r.testArgs?{}:r.testArgs,existingContracts:h}),p=await(0,f.getCurrentNodeProvider)().contracts.postContractsTestContract(l),b=K(s,r,c,p,n),y=o.fromApiTestContractResult(t,p,i,n);return y.contracts.forEach((e=>{const t=b.find((t=>t.address===e.address))?.maps;void 0!==t&&(e.maps=t)})),o.printDebugMessages(t,y.debugMessages),{...y,maps:b.find((e=>e.address===s))?.maps}},t.getDebugMessagesFromTx=J,t.printDebugMessagesFromTx=Z,t.RalphMap=class{constructor(e,t,r){this.parentContract=e,this.parentContractId=t,this.mapName=r,this.groupIndex=(0,d.groupOfAddress)((0,d.addressFromContractId)(t))}async get(e){return X(this.parentContract,this.parentContractId,this.groupIndex,this.mapName,e)}async contains(e){return this.get(e).then((e=>void 0!==e))}toJSON(){return{parentContractId:this.parentContractId,mapName:this.mapName,groupIndex:this.groupIndex}}},t.getMapItem=X,t.ContractInstance=class{constructor(e){this.address=e,this.contractId=(0,u.binToHex)((0,d.contractIdFromAddress)(e)),this.groupIndex=(0,d.groupOfAddress)(e)}},t.fetchContractState=async function(e,t){const r=await(0,f.getCurrentNodeProvider)().contracts.getContractsAddressState(t.address),n=e.contract.fromApiContractState(r);return{...n,fields:n.fields}},t.subscribeContractCreatedEvent=function(e,r,n){Y(r);const i=t.CreateContractEventAddresses[`${r}`];return q(e,i,A.ContractCreatedEventIndex,(e=>({...F(e),contractAddress:i})),n)},t.subscribeContractDestroyedEvent=function(e,r,n){Y(r);const i=t.DestroyContractEventAddresses[`${r}`];return q(e,i,A.ContractDestroyedEventIndex,(e=>({...H(e),contractAddress:i})),n)},t.decodeEvent=Q,t.subscribeContractEvent=function(e,t,r,n,i){const o=e.eventsSig.findIndex((e=>e.name===n));return q(r,t.address,o,(r=>Q(e,t,r,o)),i)},t.subscribeContractEvents=function(e,t,r,n){const i={pollingInterval:r.pollingInterval,messageCallback:n=>r.messageCallback({...Q(e,t,n,n.eventIndex),contractAddress:t.address}),errorCallback:(e,t)=>r.errorCallback(e,t),onEventCountChanged:r.onEventCountChanged};return(0,h.subscribeToEvents)(i,t.address,n)},t.callMethod=async function(e,t,r,n,i){const o=e.contract.getMethodIndex(r),s=n?.txId??L(),a=e.contract.toApiCallContract({...n,txId:s,args:void 0===n.args?{}:n.args},t.groupIndex,t.address,o),c=await(0,f.getCurrentNodeProvider)().contracts.postContractsCallContract(a),u=e.contract.fromApiCallContractResult(c,s,o,i);return e.contract.printDebugMessages(r,u.debugMessages),u},t.signExecuteMethod=async function(e,t,r,n){const i=e.contract.getMethodIndex(r),o=e.contract.functions[i],s=function(e,t,r,n,i,o){const s=void 0!==i||void 0!==o,a=s?"03":"00";if(t&&!s)throw new Error("The contract call requires preapproved assets but none are provided");const[d,f]=function(e,t){let r=1,n=0;const i=[];return e.paramTypes.forEach((e=>{const o=c.typeLength(e,t);if(o>1){for(let e=0;e<o;e++)i.push(`{${r+e}}`);for(let e=0;e<o;e++)i.push(ee(n+(o-e-1)));n+=o}r+=o})),[i,r]}(r,n),h=function(e){const t=[];if(e){const r=ne(BigInt(e));t.push(r),t.push(ie(y.ApproveAlph))}return t}(t?i:void 0),l=function(e){const t=[];return e&&e.forEach((e=>{const r=(0,u.hexToBinUnsafe)(e.id);t.push(ie((0,y.BytesConst)(r))),t.push(ne(BigInt(e.amount))),t.push(ie(y.ApproveToken))})),t}(t?o:void 0),p=function(e){const t=[];if(e>0){t.push(ie(y.CallerAddress));const r=ie(y.Dup);e>1&&t.push(...new Array(e-1).fill(r))}return t}(h.length/2+l.length/3),b=ne(BigInt(f-1)),m=re(d.length/2),g=function(e,t){let r=1,n=0;const i=[];return e.paramTypes.forEach((e=>{const o=c.typeLength(e,t);if(1===o&&i.push(`{${r}}`),o>1){for(let e=0;e<o;e++)i.push(te(n+e));n+=o}r+=o})),i}(r,n),v=r.returnTypes.reduce(((e,t)=>e+c.typeLength(t,n)),0),w=ie(y.Pop).repeat(v),_=ne(BigInt(v)),A=ie((0,y.CallExternal)(e));return"0101"+a+"00"+m+"00"+re(p.length+h.length+l.length+d.length+g.length+v+4)+p.join("")+h.join("")+l.join("")+d.join("")+g.join("")+b+_+"{0}"+A+w}(i,e.contract.isMethodUsePreapprovedAssets(i),o,e.contract.structs,n.attoAlphAmount,n.tokens),a=function(e,t){return{names:["__contract__"].concat(t.paramNames),types:[e].concat(t.paramTypes),isMutable:[!1].concat(t.paramIsMutable)}}(e.contract.name,o),d=c.buildScriptByteCode(s,{__contract__:t.contractId,...n.args},a,e.contract.structs),f=n.signer,h=await f.getSelectedAccount(),l={signerAddress:h.address,signerKeyType:h.keyType,bytecode:d,attoAlphAmount:n.attoAlphAmount,tokens:n.tokens,gasAmount:n.gasAmount,gasPrice:n.gasPrice},p=await f.signAndSubmitExecuteScriptTx(l);return(0,b.isContractDebugMessageEnabled)()&&await e.contract.isDevnet(f)&&await Z(p.txId,f.nodeProvider),p},t.multicallMethods=async function(e,t,r,n){const i=(Array.isArray(r)?r:[r]).map((e=>Object.entries(e))),o=i.map((r=>r.map((r=>{const[n,i]=r,o=e.contract.getMethodIndex(n),s=i?.txId??L();return e.contract.toApiCallContract({...i,txId:s,args:void 0===i.args?{}:i.args},t.groupIndex,t.address,o)})))),s=await(0,f.getCurrentNodeProvider)().contracts.postContractsMulticallContract({calls:o.flat()});let a=0;const c=o.map(((t,r)=>{const o={},c=i[`${r}`];return t.forEach(((t,r)=>{const i=t.methodIndex,u=s.results[`${a}`],d=c[`${r}`][0];o[`${d}`]=e.contract.fromApiCallContractResult(u,t.txId,i,n),a+=1})),o}));return Array.isArray(r)?c:c[0]},t.getContractEventsCurrentCount=async function(e){return(0,f.getCurrentNodeProvider)().events.getEventsContractContractaddressCurrentCount(e).catch((t=>{if(t instanceof Error&&t.message.includes(`${e} not found`))return 0;throw new m.TraceableError(`Failed to get the event count for the contract ${e}`,t)}))},t.getContractIdFromUnsignedTx=async(e,t)=>{const r=await e.transactions.postTransactionsDecodeUnsignedTx({unsignedTx:t}),n=r.unsignedTx.fixedOutputs.length,i=r.unsignedTx.txId+n.toString(16).padStart(8,"0");return(0,u.binToHex)(p.blake2b((0,u.hexToBinUnsafe)(i),void 0,32)).slice(0,62)+r.fromGroup.toString(16).padStart(2,"0")},t.getTokenIdFromUnsignedTx=t.getContractIdFromUnsignedTx},4964:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.subscribeToEvents=t.EventSubscription=void 0;const s=o(r(307)),a=r(664);class c extends a.Subscription{constructor(e,t,r){super(e),this.contractAddress=t,this.fromCount=void 0===r?0:r,this.onEventCountChanged=e.onEventCountChanged}currentEventCount(){return this.fromCount}async polling(){try{const e=await s.getCurrentNodeProvider().events.getEventsContractContractaddress(this.contractAddress,{start:this.fromCount});if(this.fromCount===e.nextStart)return;const t=e.events.map((e=>this.messageCallback(e)));await Promise.all(t),this.fromCount=e.nextStart,void 0!==this.onEventCountChanged&&await this.onEventCountChanged(this.fromCount),await this.polling()}catch(e){await this.errorCallback(e,this)}}}t.EventSubscription=c,t.subscribeToEvents=function(e,t,r){const n=new c(e,t,r);return n.subscribe(),n}},5033:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),i(r(8486),t),i(r(5143),t),i(r(4964),t),i(r(4529),t)},8486:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.buildDebugBytecode=t.encodeContractField=t.buildContractByteCode=t.encodeContractFields=t.buildScriptByteCode=t.flattenFields=t.typeLength=t.encodeMapKey=t.decodePrimitive=t.tryDecodeMapDebugLog=t.calcFieldSize=t.encodeMapPrefix=t.parseMapType=t.splitFields=t.encodeScriptField=t.encodeScriptFieldAsString=t.encodePrimitiveValues=t.addressVal=t.byteVecVal=t.u256Val=t.i256Val=t.boolVal=t.encodeVmAddress=t.encodeVmByteVec=t.encodeVmU256=t.encodeVmI256=t.encodeVmBool=t.VmValType=t.encodeAddress=t.encodeByteVec=void 0;const n=r(3749),i=r(664),o=r(3651),s=r(2709),a=r(4652);function c(e){if(!(0,i.isHexString)(e))throw Error(`Given value ${e} is not a valid hex string`);const t=(0,i.hexToBinUnsafe)(e);return o.byteStringCodec.encode(t)}function u(e){return i.bs58.decode(e)}var d;function f(e){return new Uint8Array([d.Bool,...s.boolCodec.encode(e)])}function h(e){return new Uint8Array([d.I256,...o.i256Codec.encode(e)])}function l(e){return new Uint8Array([d.U256,...o.u256Codec.encode(e)])}function p(e){return new Uint8Array([d.ByteVec,...c(e)])}function b(e){return new Uint8Array([d.Address,...u(e)])}function y(e,t){return(0,i.binToHex)(m(e,t))}function m(e,t){switch(e){case"Bool":const e=(0,n.toApiBoolean)(t)?o.ConstTrue.code:o.ConstFalse.code;return new Uint8Array([e]);case"I256":const r=(0,n.toApiNumber256)(t);return function(e){switch(e){case 0n:return o.instrCodec.encode(o.I256Const0);case 1n:return o.instrCodec.encode(o.I256Const1);case 2n:return o.instrCodec.encode(o.I256Const2);case 3n:return o.instrCodec.encode(o.I256Const3);case 4n:return o.instrCodec.encode(o.I256Const4);case 5n:return o.instrCodec.encode(o.I256Const5);case-1n:return o.instrCodec.encode(o.I256ConstN1);default:return o.instrCodec.encode((0,o.I256Const)(e))}}(BigInt(r));case"U256":const i=(0,n.toApiNumber256)(t);return function(e){switch(e){case 0n:return o.instrCodec.encode(o.U256Const0);case 1n:return o.instrCodec.encode(o.U256Const1);case 2n:return o.instrCodec.encode(o.U256Const2);case 3n:return o.instrCodec.encode(o.U256Const3);case 4n:return o.instrCodec.encode(o.U256Const4);case 5n:return o.instrCodec.encode(o.U256Const5);default:return o.instrCodec.encode((0,o.U256Const)(e))}}(BigInt(i));case"Address":const s=(0,n.toApiAddress)(t);return new Uint8Array([o.AddressConstCode,...u(s)]);default:const a=(0,n.toApiByteVec)(t);return new Uint8Array([o.BytesConstCode,...c(a)])}throw function(e,t){return Error(`Invalid script field ${t} for type ${e}`)}(e,t)}function g(e,t,r,n,i){return t.flatMap(((t,o)=>{if(!(t in e))throw new Error(`The value of field ${t} is not provided`);return v(n[`${o}`],t,r[`${o}`],e[`${t}`],i)}))}function v(e,t,r,i,o){if(Array.isArray(i)&&r.startsWith("[")){const[s,a]=(0,n.decodeArrayType)(r);if(i.length!==a)throw Error(`Invalid array length, expected ${a}, got ${i.length}`);return i.flatMap(((r,n)=>v(e,`${t}[${n}]`,s,r,o)))}const s=o.find((e=>e.name===r));if(void 0!==s){if("object"!=typeof i)throw Error("Expected an object, but got "+typeof i);return s.fieldNames.flatMap(((r,n)=>{if(!(r in i))throw new Error(`The value of field ${r} is not provided`);const a=s.isMutable[`${n}`],c=s.fieldTypes[`${n}`],u=i[`${r}`];return v(e&&a,`${t}.${r}`,c,u,o)}))}const a=function(e,t,r){const n=typeof r;if("Bool"===t&&"boolean"===n)return t;if(!("U256"!==t&&"I256"!==t||"string"!==n&&"number"!==n&&"bigint"!==n))return t;if(("Address"===t||"ByteVec"===t)&&"string"===n)return t;if(!t.startsWith("[")&&"string"===n)return"ByteVec";throw Error(`Invalid value ${r} for ${e}, expected a value of type ${t}`)}(t,r,i);return[{name:t,type:a,value:i,isMutable:e}]}t.encodeByteVec=c,t.encodeAddress=u,function(e){e[e.Bool=0]="Bool",e[e.I256=1]="I256",e[e.U256=2]="U256",e[e.ByteVec=3]="ByteVec",e[e.Address=4]="Address"}(d=t.VmValType||(t.VmValType={})),t.encodeVmBool=f,t.encodeVmI256=h,t.encodeVmU256=l,t.encodeVmByteVec=p,t.encodeVmAddress=b,t.boolVal=function(e){return{type:"Bool",value:e}},t.i256Val=function(e){return{type:"I256",value:BigInt(e)}},t.u256Val=function(e){return{type:"U256",value:BigInt(e)}},t.byteVecVal=function(e){return{type:"ByteVec",value:e}},t.addressVal=function(e){return{type:"Address",value:e}},t.encodePrimitiveValues=function(e){return A(e.map((({type:e,value:t})=>({name:`${t}`,type:e,value:t}))))},t.encodeScriptFieldAsString=y,t.encodeScriptField=m,t.splitFields=function(e){return e.types.reduce((([t,r],n,i)=>{const o=n.startsWith("Map[")?t:r;return o.names.push(e.names[`${i}`]),o.types.push(n),o.isMutable.push(e.isMutable[`${i}`]),[t,r]}),[{names:[],types:[],isMutable:[]},{names:[],types:[],isMutable:[]}])},t.parseMapType=function(e){if(!e.startsWith("Map["))throw new Error(`Expected map type, got ${e}`);const t=e.indexOf("["),r=e.indexOf(",");return[e.slice(t+1,r),e.slice(r+1,e.length-1)]},t.encodeMapPrefix=function(e){const t=`__map__${e}__`,r=new Uint8Array(t.length);for(let e=0;e<t.length;e+=1)r[e]=t.charCodeAt(e);return r},t.calcFieldSize=function e(t,r,i){const o=i.find((e=>e.name===t));if(void 0!==o)return o.fieldTypes.reduce(((t,n,s)=>{const a=e(n,r&&o.isMutable[`${s}`],i);return{immFields:t.immFields+a.immFields,mutFields:t.mutFields+a.mutFields}}),{immFields:0,mutFields:0});if(t.startsWith("[")){const[o,s]=(0,n.decodeArrayType)(t),a=e(o,r,i);return{immFields:a.immFields*s,mutFields:a.mutFields*s}}return r?{immFields:0,mutFields:1}:{immFields:1,mutFields:0}},t.tryDecodeMapDebugLog=function(e){if(!e.startsWith("insert at map path: ")&&!e.startsWith("remove at map path: "))return;const t=e.split(":");if(2!==t.length)return;const r=t[1].slice(1);if(!(0,i.isHexString)(r))return;const n=r.slice(14),o=n.indexOf("5f5f");if(-1===o)return;const s=n.slice(0,o);return{path:r,mapIndex:parseInt(function(e){let t="";for(let r=0;r<e.length;r+=2){const n=parseInt(e.slice(r,r+2),16);t+=String.fromCharCode(n)}return t}(s)),encodedKey:(0,i.hexToBinUnsafe)(n.slice(o+4)),isInsert:e.startsWith("insert")}},t.decodePrimitive=function(e,t){switch(t){case"Bool":return s.boolCodec.decode(e);case"I256":return o.i256Codec.decode(e);case"U256":return o.u256Codec.decode(e);case"ByteVec":return(0,i.binToHex)(e);case"Address":return i.bs58.encode(e);default:throw Error(`Expected primitive type, got ${t}`)}},t.encodeMapKey=function(e,t){switch(t){case"Bool":const r=(0,n.toApiBoolean)(e)?1:0;return new Uint8Array([r]);case"I256":const s=(0,n.toApiNumber256)(e);return o.i256Codec.encode(BigInt(s));case"U256":const a=(0,n.toApiNumber256)(e);return o.u256Codec.encode(BigInt(a));case"ByteVec":const c=(0,n.toApiByteVec)(e);return(0,i.hexToBinUnsafe)(c);case"Address":return u((0,n.toApiAddress)(e));default:throw Error(`Expected primitive type, got ${t}`)}},t.typeLength=function e(t,r){if(n.PrimitiveTypes.includes(t))return 1;if(t.startsWith("[")){const[i,o]=(0,n.decodeArrayType)(t);return o*e(i,r)}const i=r.find((e=>e.name===t));return void 0!==i?i.fieldTypes.reduce(((t,n)=>t+e(n,r)),0):1},t.flattenFields=g;const w=/\{([0-9]*)\}/g;function _(e,t){try{return t()}catch(t){throw new a.TraceableError(`Failed to encode the field ${e}`,t)}}function A(e){const t=o.i32Codec.encode(e.length);return e.reduce(((e,t)=>{const r=_(t.name,(()=>M(t.type,t.value))),n=new Uint8Array(e.byteLength+r.byteLength);return n.set(e,0),n.set(r,e.byteLength),n}),t)}function S(e,t,r){const n=g(e,t.names,t.types,t.isMutable,r);return{encodedImmFields:A(n.filter((e=>!e.isMutable))),encodedMutFields:A(n.filter((e=>e.isMutable)))}}function M(e,t){switch(e){case"Bool":return f((0,n.toApiBoolean)(t));case"I256":return h(BigInt((0,n.toApiNumber256)(t)));case"U256":return l(BigInt((0,n.toApiNumber256)(t)));case"ByteVec":return p((0,n.toApiByteVec)(t));case"Address":return b((0,n.toApiAddress)(t));default:throw Error(`Expected primitive type, got ${e}`)}}t.buildScriptByteCode=function(e,t,r,n){const i=g(t,r.names,r.types,r.isMutable,n);return e.replace(w,((e,t)=>{const r=i[`${t}`];return _(r.name,(()=>y(r.type,r.value)))}))},t.encodeContractFields=S,t.buildContractByteCode=function(e,t,r,n){const{encodedImmFields:o,encodedMutFields:s}=S(t,r,n);return e+(0,i.binToHex)(o)+(0,i.binToHex)(s)},t.encodeContractField=M,t.buildDebugBytecode=function(e,t){if(""===t)return e;const r=/[=+-][0-9a-f]*/g;let n="",i=0;for(const o of t.matchAll(r)){const t=o[0],r=t[0];if("="===r){const r=parseInt(t.substring(1));n+=e.slice(i,i+r),i+=r}else"+"===r?n+=t.substring(1):i+=parseInt(t.substring(1))}return n}},4529:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ScriptSimulator=void 0;const n=r(2581),i=r(3651),o=r(1678),s=r(7695),a=r(664);function c(e,t,r,n){n(e.kind.startsWith("Symbol")?e:t.kind.startsWith("Symbol")?t:{kind:e.kind,value:r(e.value,t.value)})}function u(e,t,r,n){n(e.kind.startsWith("Symbol")||t.kind.startsWith("Symbol")?{kind:"Symbol-Bool",value:void 0}:{kind:"Bool",value:r(e.value,t.value)})}function d(e,t){return e.length===t.length&&e.every(((e,r)=>e===t[`${r}`]))}function f(){const e=new Uint8Array(32);for(let t=0;t<32;t++)e[`${t}`]=Math.floor(256*Math.random());return e}t.ScriptSimulator=class{static extractContractCalls(e){try{return this.extractContractCallsWithErrors(e)}catch(e){return console.debug("Error extracting contract calls from script",e),[]}}static extractContractCallsWithErrors(e){const t=(0,a.hexToBinUnsafe)(e),r=i.unsignedTxCodec.decode(t).statefulScript;switch(r.kind){case"Some":return this.extractContractCallsFromScript(r.value);case"None":return[]}}static extractContractCallsFromScript(e){const t=e.methods;if(0===t.length)return[];const r=t[0];return this.extractContractCallsFromMainMethod(r)}static extractContractCallsFromMainMethod(e){const t=new h,r=new l,s=[],m={kind:"Address",value:{kind:"P2PKH",value:f()}},g=new y;for(const f of e.instrs)switch(f.name){case"ConstTrue":t.push({kind:"Bool",value:!0});break;case"ConstFalse":t.push({kind:"Bool",value:!1});break;case"I256Const0":t.push({kind:"I256",value:0n});break;case"I256Const1":t.push({kind:"I256",value:1n});break;case"I256Const2":t.push({kind:"I256",value:2n});break;case"I256Const3":t.push({kind:"I256",value:3n});break;case"I256Const4":t.push({kind:"I256",value:4n});break;case"I256Const5":t.push({kind:"I256",value:5n});break;case"I256ConstN1":t.push({kind:"I256",value:-1n});break;case"I256Const":t.push({kind:"I256",value:f.value});break;case"U256Const0":t.push({kind:"U256",value:0n});break;case"U256Const1":t.push({kind:"U256",value:1n});break;case"U256Const2":t.push({kind:"U256",value:2n});break;case"U256Const3":t.push({kind:"U256",value:3n});break;case"U256Const4":t.push({kind:"U256",value:4n});break;case"U256Const5":t.push({kind:"U256",value:5n});break;case"U256Const":t.push({kind:"U256",value:f.value});break;case"BytesConst":t.push({kind:"ByteVec",value:f.value});break;case"AddressConst":t.push({kind:"Address",value:f.value});break;case"LoadLocal":t.push(r.get(f.index));break;case"StoreLocal":r.set(f.index,t.pop());break;case"Pop":t.pop();break;case"Dup":const e=t.pop();t.push(e),t.push(e);break;case"Swap":const h=t.pop(),l=t.pop();t.push(h),t.push(l);break;case"BoolNot":const y=(v=t.popBool(),w=e=>!e,v.kind.startsWith("Symbol")?v:{kind:v.kind,value:w(v.value)});t.push(y);case"BoolAnd":c(t.popBool(),t.popBool(),((e,t)=>e&&t),t.push);break;case"BoolOr":c(t.popBool(),t.popBool(),((e,t)=>e||t),t.push);break;case"BoolEq":c(t.popBool(),t.popBool(),((e,t)=>e===t),t.push);break;case"BoolNeq":c(t.popBool(),t.popBool(),((e,t)=>e!==t),t.push);break;case"BoolToByteVec":{const e=t.popBool();"Symbol-Bool"===e.kind?t.push(e):t.push({kind:"ByteVec",value:i.boolCodec.encode(e.value)});break}case"I256Add":{const e=t.popI256();c(t.popI256(),e,((e,t)=>e+t),t.push);break}case"I256Sub":{const e=t.popI256();c(t.popI256(),e,((e,t)=>e-t),t.push);break}case"I256Mul":{const e=t.popI256();c(t.popI256(),e,((e,t)=>e*t),t.push);break}case"I256Div":{const e=t.popI256();c(t.popI256(),e,((e,t)=>e/t),t.push);break}case"I256Eq":{const e=t.popI256();u(t.popI256(),e,((e,t)=>e===t),t.push);break}case"I256Neq":{const e=t.popI256();u(t.popI256(),e,((e,t)=>e!==t),t.push);break}case"I256Lt":{const e=t.popI256();u(t.popI256(),e,((e,t)=>e<t),t.push);break}case"I256Le":{const e=t.popI256();u(t.popI256(),e,((e,t)=>e<=t),t.push);break}case"I256Gt":{const e=t.popI256();u(t.popI256(),e,((e,t)=>e>t),t.push);break}case"I256Ge":{const e=t.popI256();u(t.popI256(),e,((e,t)=>e>=t),t.push);break}case"U256Add":{const e=t.popU256();c(t.popU256(),e,((e,t)=>e+t),t.push);break}case"U256Sub":{const e=t.popU256();c(t.popU256(),e,((e,t)=>e-t),t.push);break}case"U256Mul":{const e=t.popU256();c(t.popU256(),e,((e,t)=>e*t),t.push);break}case"U256Div":{const e=t.popU256();c(t.popU256(),e,((e,t)=>e/t),t.push);break}case"U256Eq":{const e=t.popU256();u(t.popU256(),e,((e,t)=>e===t),t.push);break}case"U256Neq":{const e=t.popU256();u(t.popU256(),e,((e,t)=>e!==t),t.push);break}case"U256Lt":{const e=t.popU256();u(t.popU256(),e,((e,t)=>e<t),t.push);break}case"U256Le":{const e=t.popU256();u(t.popU256(),e,((e,t)=>e<=t),t.push);break}case"U256Gt":{const e=t.popU256();u(t.popU256(),e,((e,t)=>e>t),t.push);break}case"U256Ge":{const e=t.popU256();u(t.popU256(),e,((e,t)=>e>=t),t.push);break}case"ByteVecEq":u(t.popByteVec(),t.popByteVec(),((e,t)=>d(e,t)),t.push);break;case"ByteVecNeq":u(t.popByteVec(),t.popByteVec(),((e,t)=>!d(e,t)),t.push);break;case"ByteVecSize":{const e=t.popByteVec();"Symbol-ByteVec"===e.kind?t.push({kind:"Symbol-U256",value:void 0}):t.push({kind:"U256",value:BigInt(e.value.length)});break}case"ByteVecConcat":{const e=t.popByteVec();c(t.popByteVec(),e,((e,t)=>new Uint8Array([...e,...t])),t.push);break}case"ByteVecSlice":{const e=t.popU256(),r=t.popU256(),n=t.popByteVec();"Symbol-ByteVec"===n.kind||"Symbol-U256"===r.kind||"Symbol-U256"===e.kind?t.push({kind:"Symbol-ByteVec",value:void 0}):t.push({kind:"ByteVec",value:n.value.slice(Number(r.value),Number(e.value))});break}case"AddressEq":u(t.popAddress(),t.popAddress(),((e,t)=>d(o.lockupScriptCodec.encode(e),o.lockupScriptCodec.encode(t))),t.push);break;case"AddressNeq":u(t.popAddress(),t.popAddress(),((e,t)=>!d(o.lockupScriptCodec.encode(e),o.lockupScriptCodec.encode(t))),t.push);break;case"AddressToByteVec":{const e=t.popAddress();"Symbol-Address"===e.kind?t.push({kind:"Symbol-ByteVec",value:void 0}):t.push({kind:"ByteVec",value:o.lockupScriptCodec.encode(e.value)});break}case"Assert":if(!t.popBool())throw new Error("Assertion failed");break;case"Blake2b":case"Sha256":case"Sha3":case"Keccak256":b(f.name),t.popByteVec(),t.push({kind:"ByteVec",value:new Uint8Array(32)});break;case"ByteVecToAddress":{const e=t.popByteVec();"Symbol-ByteVec"===e.kind?t.push({kind:"Symbol-Address",value:void 0}):t.push({kind:"Address",value:o.lockupScriptCodec.decode(e.value)});break}case"Zeros":{const e=t.popU256();if("Symbol-U256"===e.kind)t.push({kind:"Symbol-ByteVec",value:void 0});else{if(e.value>4096)throw new Error("Zeros size is too large");t.push({kind:"ByteVec",value:new Uint8Array(Number(e.value))})}break}case"U256To1Byte":case"U256To2Byte":case"U256To4Byte":case"U256To8Byte":case"U256To16Byte":case"U256To32Byte":b(f.name),t.popU256(),t.push({kind:"Symbol-ByteVec",value:void 0});break;case"U256From1Byte":case"U256From2Byte":case"U256From4Byte":case"U256From8Byte":case"U256From16Byte":case"U256From32Byte":b(f.name),t.popByteVec(),t.push({kind:"Symbol-U256",value:void 0});break;case"CallExternal":case"CallExternalBySelector":{const e=t.popByteVec(),r=t.popU256();if(t.popU256(),"Symbol-ByteVec"!==e.kind&&s.push({contractAddress:(0,n.addressFromContractId)((0,a.binToHex)(e.value)),approvedAttoAlphAmount:g.getApprovedAttoAlph(),approvedTokens:g.getApprovedTokens()}),g.reset(),"Symbol-U256"!==r.kind)for(let e=0;e<r.value;e++)t.push({kind:"Symbol-Any",value:void 0});break}case"ContractIdToAddress":{const e=t.popByteVec();"Symbol-ByteVec"===e.kind?t.push({kind:"Symbol-Address",value:void 0}):t.push({kind:"Address",value:{kind:"P2C",value:e.value}});break}case"LoadLocalByIndex":{const e=t.popU256();if("Symbol-U256"===e.kind)throw new Error("LoadLocalByIndex index is a symbol");t.push(r.get(Number(e.value)));break}case"StoreLocalByIndex":{const e=t.popU256();if("Symbol-U256"===e.kind)throw new Error("StoreLocalByIndex index is a symbol");r.set(Number(e.value),t.pop());break}case"CallerAddress":t.push(m);break;case"ApproveAlph":{const e=t.popU256(),r=t.popAddress();r.kind.startsWith("Symbol")?g.setUnknown():r===m&&g.addApprovedAttoAlph(e);break}case"ApproveToken":{const e=t.popU256(),r=t.popByteVec(),n=t.popAddress();n.kind.startsWith("Symbol")?g.setUnknown():n===m&&g.addApprovedToken(r,e);break}case"CreateContractAndTransferToken":t.popAddress();case"CreateContractWithToken":t.popU256();case"CreateContract":t.popByteVec(),t.popByteVec(),t.popByteVec(),t.push({kind:"Symbol-ByteVec",value:void 0});break;case"TransferAlph":t.popU256(),t.popAddress(),t.popAddress();break;case"TransferToken":t.popU256(),t.popByteVec(),t.popAddress(),t.popAddress();break;default:p(f.name)}var v,w;return s}};class h{constructor(){this.stack=[],this.push=e=>{this.stack.push(e)}}pop(){const e=this.stack.pop();if(void 0===e)throw new Error("Stack is empty");return e}size(){return this.stack.length}checkedResult(e,t){if(e.kind.startsWith("Symbol")){if(e.kind!==`Symbol-${t}`)throw new Error(`Expected a ${t} value on the stack`);return e}if(e.kind!==t)throw new Error(`Expected a ${t} value on the stack`);return e}popBool(){const e=this.pop();return this.checkedResult(e,"Bool")}popI256(){const e=this.pop();return this.checkedResult(e,"I256")}popU256(){const e=this.pop();return this.checkedResult(e,"U256")}popByteVec(){const e=this.pop();return this.checkedResult(e,"ByteVec")}popAddress(){const e=this.pop();return this.checkedResult(e,"Address")}}class l{constructor(){this.locals=[]}get(e){const t=this.locals[`${e}`];if(void 0===t)throw new Error(`Local variable at index ${e} is not set`);return t}set(e,t){this.locals[`${e}`]=t}checkedResult(e,t,r){if(e.kind.startsWith("Symbol")){if(e.kind!==`Symbol-${r}`)throw new Error(`Local variable at index ${t} is not a ${r}`);return e}if(e.kind!==r)throw new Error(`Local variable at index ${t} is not a ${r}`);return e}getBool(e){const t=this.get(e);return this.checkedResult(t,e,"Bool")}getI256(e){const t=this.get(e);return this.checkedResult(t,e,"I256")}getU256(e){const t=this.get(e);return this.checkedResult(t,e,"U256")}getByteVec(e){const t=this.get(e);return this.checkedResult(t,e,"ByteVec")}getAddress(e){const t=this.get(e);return this.checkedResult(t,e,"Address")}}function p(e){throw new Error(`Unimplemented instruction: ${e}`)}function b(e){console.debug(`Dummy implementation for instruction: ${e}`)}class y{constructor(){this.approvedTokens=[],this.reset()}reset(){this.approvedTokens=[{id:s.ALPH_TOKEN_ID,amount:0n}]}setUnknown(){this.approvedTokens="unknown"}getApprovedAttoAlph(){if("unknown"===this.approvedTokens)return"unknown";const e=this.approvedTokens[0].amount;return"unknown"===e?"unknown":0n===e?void 0:e}getApprovedTokens(){if("unknown"===this.approvedTokens)return"unknown";const e=this.approvedTokens.slice(1);return 0===e.length?void 0:e}addApprovedAttoAlph(e){this.addApprovedToken({kind:"ByteVec",value:(0,a.hexToBinUnsafe)(s.ALPH_TOKEN_ID)},e)}addApprovedToken(e,t){if("unknown"===this.approvedTokens)return;if("Symbol-ByteVec"===e.kind)return void(this.approvedTokens="unknown");const r=this.approvedTokens.findIndex((t=>d((0,a.hexToBinUnsafe)(t.id),e.value)));if(-1===r)this.approvedTokens.push({id:(0,a.binToHex)(e.value),amount:"Symbol-U256"===t.kind?"unknown":t.value});else{const e=this.approvedTokens[`${r}`];if("unknown"===e.amount)return;"Symbol-U256"===t.kind?e.amount="unknown":e.amount+=t.value}}}},2505:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.disableContractDebugMessage=t.enableContractDebugMessage=t.isContractDebugMessageEnabled=t.disableDebugMode=t.enableDebugMode=t.isDebugModeEnabled=void 0;let r=!1;t.isDebugModeEnabled=function(){return r},t.enableDebugMode=function(){r=!0},t.disableDebugMode=function(){r=!1};let n=!0;t.isContractDebugMessageEnabled=function(){return n},t.enableContractDebugMessage=function(){n=!0},t.disableContractDebugMessage=function(){n=!1}},4652:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TraceableError=void 0;class r extends Error{constructor(e,t){const r=void 0===t?void 0:t instanceof Error?t.message:`${t}`;super(r?`${e}, error: ${r}`:e),this.trace=t;const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n}}t.TraceableError=r},3869:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getAddressFromUnlockScript=t.getSenderAddress=t.getALPHDepositInfo=t.isALPHTransferTx=t.validateExchangeAddress=void 0;const n=r(2581),i=r(664),o=r(2976),s=r(4459),a=r(4652);function c(e){return function(e){return 0===e.contractInputs.length&&0===e.generatedOutputs.length&&0!==e.unsigned.inputs.length&&void 0===e.unsigned.scriptOpt}(e)&&function(e){return e.unsigned.fixedOutputs.every((e=>0===e.tokens.length))}(e)}var u;function d(e){if(!(0,i.isHexString)(e))throw new Error(`Invalid unlock script ${e}, expected a hex string`);const t=(0,i.hexToBinUnsafe)(e);if(0===t.length)throw new Error("UnlockScript is empty");const r=t[0],c=t.slice(1);if(r===u.P2PKH){if(33!==c.length)throw new Error(`Invalid p2pkh unlock script: ${e}`);return(0,n.addressFromPublicKey)((0,i.binToHex)(c))}if(r===u.P2MPKH)throw new Error("Naive multi-sig address is not supported for exchanges as it will be replaced by P2SH");if(r===u.P2SH){let r;try{r=o.unlockScriptCodec.decode(t).value}catch(t){throw new a.TraceableError(`Invalid p2sh unlock script: ${e}`,t)}return(0,n.addressFromScript)(s.scriptCodec.encode(r.script))}throw new Error("Invalid unlock script type")}t.validateExchangeAddress=function(e){const t=(0,i.base58ToBytes)(e);if(0===t.length)throw new Error("Address is empty");const r=t[0];if(r!==n.AddressType.P2PKH&&r!==n.AddressType.P2SH)throw new Error("Invalid address type");if(33!==t.length)throw new Error("Invalid address length")},t.isALPHTransferTx=c,t.getALPHDepositInfo=function(e){if(!c(e))return[];const t=[];for(const r of e.unsigned.inputs)try{const e=d(r.unlockScript);t.includes(e)||t.push(e)}catch(e){}const r=new Map;return e.unsigned.fixedOutputs.forEach((e=>{if(!t.includes(e.address)){const t=r.get(e.address);void 0===t?r.set(e.address,BigInt(e.attoAlphAmount)):r.set(e.address,BigInt(e.attoAlphAmount)+t)}})),Array.from(r.entries()).map((([e,t])=>({targetAddress:e,depositAmount:t})))},t.getSenderAddress=function(e){return d(e.unsigned.inputs[0].unlockScript)},function(e){e[e.P2PKH=0]="P2PKH",e[e.P2MPKH=1]="P2MPKH",e[e.P2SH=2]="P2SH"}(u||(u={})),t.getAddressFromUnlockScript=d},5666:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getALPHDepositInfo=t.getSenderAddress=t.isALPHTransferTx=t.validateExchangeAddress=void 0;var n=r(3869);Object.defineProperty(t,"validateExchangeAddress",{enumerable:!0,get:function(){return n.validateExchangeAddress}}),Object.defineProperty(t,"isALPHTransferTx",{enumerable:!0,get:function(){return n.isALPHTransferTx}}),Object.defineProperty(t,"getSenderAddress",{enumerable:!0,get:function(){return n.getSenderAddress}}),Object.defineProperty(t,"getALPHDepositInfo",{enumerable:!0,get:function(){return n.getALPHDepositInfo}})},307:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getCurrentExplorerProvider=t.setCurrentExplorerProvider=t.getCurrentNodeProvider=t.setCurrentNodeProvider=void 0;const n=r(3749);let i,o;t.setCurrentNodeProvider=function(e,t,r){i="string"==typeof e?new n.NodeProvider(e,t,r):e},t.getCurrentNodeProvider=function(){if(void 0===i)throw Error("No node provider is set.");return i},t.setCurrentExplorerProvider=function(e,t,r){o="string"==typeof e?new n.ExplorerProvider(e,t,r):e},t.getCurrentExplorerProvider=function(){return o}},2126:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)},s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.utils=t.codec=t.web3=void 0,BigInt.prototype.toJSON=function(){return this.toString()},o(r(3749),t),o(r(5033),t),o(r(3693),t),o(r(664),t),o(r(6705),t),o(r(3652),t),o(r(7695),t),t.web3=s(r(307)),t.codec=s(r(3651)),t.utils=s(r(664)),o(r(2505),t),o(r(4648),t),o(r(2581),t),o(r(5666),t),o(r(4652),t)},3693:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),i(r(9191),t),i(r(2644),t),i(r(7375),t)},9191:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return i(t,e),t},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.fromApiDestination=t.toApiDestinations=t.toApiDestination=t.verifySignedMessage=t.hashMessage=t.extendMessage=t.SignerProviderWithCachedAccounts=t.SignerProviderWithMultipleAccounts=t.SignerProviderSimple=t.InteractiveSignerProvider=t.SignerProvider=void 0;const a=r(4062),c=r(3749),u=o(r(664)),d=s(r(1540)),f=r(7375),h=r(2581);class l{async getSelectedAccount(){const e=await this.unsafeGetSelectedAccount();return l.validateAccount(e),e}static validateAccount(e){const t=(0,h.addressFromPublicKey)(e.publicKey,e.keyType),r=(0,h.groupOfAddress)(t);if(t!==e.address||r!==e.group)throw Error(`Invalid accounot data: ${JSON.stringify(e)}`)}}t.SignerProvider=l,t.InteractiveSignerProvider=class extends l{async enable(e){const t=await this.unsafeEnable(e);return l.validateAccount(t),t}};class p extends l{async submitTransaction(e){const t={unsignedTx:e.unsignedTx,signature:e.signature};return this.nodeProvider.transactions.postTransactionsSubmit(t)}async signAndSubmitTransferTx(e){const t=await this.signTransferTx(e);return await this.submitTransaction(t),t}async signAndSubmitDeployContractTx(e){const t=await this.signDeployContractTx(e);return await this.submitTransaction(t),t}async signAndSubmitExecuteScriptTx(e){const t=await this.signExecuteScriptTx(e);return await this.submitTransaction(t),t}async signAndSubmitUnsignedTx(e){const t=await this.signUnsignedTx(e);return await this.submitTransaction(t),t}async signAndSubmitChainedTx(e){const t=await this.signChainedTx(e);for(const e of t)await this.submitTransaction(e);return t}async signTransferTx(e){const t=await this.buildTransferTx(e);return{signature:await this.signRaw(e.signerAddress,t.txId),...t}}async buildTransferTx(e){return f.TransactionBuilder.from(this.nodeProvider).buildTransferTx(e,await this.getPublicKey(e.signerAddress))}async signDeployContractTx(e){const t=await this.buildDeployContractTx(e);return{signature:await this.signRaw(e.signerAddress,t.txId),...t}}async buildDeployContractTx(e){return f.TransactionBuilder.from(this.nodeProvider).buildDeployContractTx(e,await this.getPublicKey(e.signerAddress))}async signExecuteScriptTx(e){const t=await this.buildExecuteScriptTx(e);return{signature:await this.signRaw(e.signerAddress,t.txId),...t}}async buildExecuteScriptTx(e){return f.TransactionBuilder.from(this.nodeProvider).buildExecuteScriptTx(e,await this.getPublicKey(e.signerAddress))}async signChainedTx(e){const t=await this.buildChainedTx(e),r=await Promise.all(t.map(((t,r)=>this.signRaw(e[`${r}`].signerAddress,t.txId))));return t.map(((e,t)=>({...e,signature:r[`${t}`]})))}async buildChainedTx(e){return f.TransactionBuilder.from(this.nodeProvider).buildChainedTx(e,await Promise.all(e.map((e=>this.getPublicKey(e.signerAddress)))))}async signUnsignedTx(e){const t=f.TransactionBuilder.buildUnsignedTx(e);return{signature:await this.signRaw(e.signerAddress,t.txId),...t}}async signMessage(e){const t=m(e.message,e.messageHasher);return{signature:await this.signRaw(e.signerAddress,t)}}}t.SignerProviderSimple=p;class b extends p{async getAccount(e){const t=(await this.getAccounts()).find((t=>t.address===e));if(void 0===t)throw new Error("Unmatched signerAddress");return t}async getPublicKey(e){return(await this.getAccount(e)).publicKey}}function y(e){return"Alephium Signed Message: "+e}function m(e,t){switch(t){case"alephium":return u.binToHex(d.default.blake2b(y(e),void 0,32));case"sha256":const r=(0,a.createHash)("sha256");return r.update((new TextEncoder).encode(e)),u.binToHex(r.digest());case"blake2b":return u.binToHex(d.default.blake2b(e,void 0,32));case"identity":return e;default:throw Error(`Invalid message hasher: ${t}`)}}function g(e){return{...e,attoAlphAmount:(0,c.toApiNumber256)(e.attoAlphAmount),tokens:(0,c.toApiTokens)(e.tokens)}}t.SignerProviderWithMultipleAccounts=b,t.SignerProviderWithCachedAccounts=class extends b{constructor(){super(...arguments),this._selectedAccount=void 0,this._accounts=new Map}unsafeGetSelectedAccount(){if(void 0===this._selectedAccount)throw Error("No account is selected yet");return Promise.resolve(this._selectedAccount)}setSelectedAccount(e){const t=this._accounts.get(e);if(void 0===t)throw Error("The address is not in the accounts");return this._selectedAccount=t,Promise.resolve()}getAccounts(){return Promise.resolve(Array.from(this._accounts.values()))}async getAccount(e){const t=this._accounts.get(e);if(void 0===t)throw Error("The address is not in the accounts");return Promise.resolve(t)}},t.extendMessage=y,t.hashMessage=m,t.verifySignedMessage=function(e,t,r,n,i){const o=m(e,t);return u.verifySignature(o,r,n,i)},t.toApiDestination=g,t.toApiDestinations=function(e){return e.map(g)},t.fromApiDestination=function(e){return{...e,attoAlphAmount:(0,c.fromApiNumber256)(e.attoAlphAmount),tokens:(0,c.fromApiTokens)(e.tokens)}}},7375:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TransactionBuilder=void 0;const n=r(664),i=r(3749),o=r(2581),s=r(9191),a=r(3651),c=r(6705),u=r(7007);class d{static from(e,t,r){const n="string"==typeof e?new i.NodeProvider(e,t,r):e;return new class extends d{get nodeProvider(){return n}}}static validatePublicKey(e,t,r){if((0,o.addressFromPublicKey)(t,r)!==e.signerAddress)throw new Error("Unmatched public key")}async buildTransferTx(e,t){const r=this.buildTransferTxParams(e,t),n=await this.nodeProvider.transactions.postTransactionsBuild(r);return this.convertTransferTxResult(n)}async buildDeployContractTx(e,t){const r=this.buildDeployContractTxParams(e,t),n=await this.nodeProvider.contracts.postContractsUnsignedTxDeployContract(r);return this.convertDeployContractTxResult(n)}async buildExecuteScriptTx(e,t){const r=this.buildExecuteScriptTxParams(e,t),n=await this.nodeProvider.contracts.postContractsUnsignedTxExecuteScript(r);return this.convertExecuteScriptTxResult(n)}async buildChainedTx(e,t){if(e.length!==t.length)throw new Error("The number of build chained transaction parameters must match the number of public keys provided");const r=e.map(((e,r)=>{const n=e.type;switch(n){case"Transfer":return{type:n,value:this.buildTransferTxParams(e,t[r])};case"DeployContract":return{type:n,value:this.buildDeployContractTxParams(e,t[r])};case"ExecuteScript":return{type:n,value:this.buildExecuteScriptTxParams(e,t[r])};default:throw new Error(`Unsupported transaction type: ${n}`)}}));return(await this.nodeProvider.transactions.postTransactionsBuildChained(r)).map((e=>{const t=e.type;switch(t){case"Transfer":{const r=e.value;return{...this.convertTransferTxResult(r),type:t}}case"DeployContract":{const r=e.value;return{...this.convertDeployContractTxResult(r),type:t}}case"ExecuteScript":{const r=e.value;return{...this.convertExecuteScriptTxResult(r),type:t}}default:throw new Error(`Unexpected transaction type: ${t} for ${e.value.txId}`)}}))}static buildUnsignedTx(e){const t=(0,n.hexToBinUnsafe)(e.unsignedTx),r=a.unsignedTxCodec.decode(t),i=(0,n.binToHex)((0,u.blakeHash)(t)),[o,s]=(0,c.groupIndexOfTransaction)(r);return{fromGroup:o,toGroup:s,unsignedTx:e.unsignedTx,txId:i,gasAmount:r.gasAmount,gasPrice:r.gasPrice}}buildTransferTxParams(e,t){d.validatePublicKey(e,t,e.signerKeyType);const{destinations:r,gasPrice:n,...o}=e;return{fromPublicKey:t,fromPublicKeyType:e.signerKeyType,destinations:(0,s.toApiDestinations)(r),gasPrice:(0,i.toApiNumber256Optional)(n),...o}}buildDeployContractTxParams(e,t){d.validatePublicKey(e,t,e.signerKeyType);const{initialAttoAlphAmount:r,initialTokenAmounts:n,issueTokenAmount:o,gasPrice:s,...a}=e;return{fromPublicKey:t,fromPublicKeyType:e.signerKeyType,initialAttoAlphAmount:(0,i.toApiNumber256Optional)(r),initialTokenAmounts:(0,i.toApiTokens)(n),issueTokenAmount:(0,i.toApiNumber256Optional)(o),gasPrice:(0,i.toApiNumber256Optional)(s),...a}}buildExecuteScriptTxParams(e,t){d.validatePublicKey(e,t,e.signerKeyType);const{attoAlphAmount:r,tokens:n,gasPrice:o,...s}=e;return{fromPublicKey:t,fromPublicKeyType:e.signerKeyType,attoAlphAmount:(0,i.toApiNumber256Optional)(r),tokens:(0,i.toApiTokens)(n),gasPrice:(0,i.toApiNumber256Optional)(o),...s}}convertTransferTxResult(e){return{...e,gasPrice:(0,i.fromApiNumber256)(e.gasPrice)}}convertDeployContractTxResult(e){const t=(0,n.binToHex)((0,o.contractIdFromAddress)(e.contractAddress));return{...e,groupIndex:e.fromGroup,contractId:t,gasPrice:(0,i.fromApiNumber256)(e.gasPrice)}}convertExecuteScriptTxResult(e){return{...e,groupIndex:e.fromGroup,gasPrice:(0,i.fromApiNumber256)(e.gasPrice)}}}t.TransactionBuilder=d},2644:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(664);n.assertType,(0,n.assertType)(),(0,n.assertType)(),(0,n.assertType)(),(0,n.assertType)(),(0,n.assertType)(),(0,n.assertType)(),(0,n.assertType)(),n.assertType,(0,n.assertType)()},3652:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),i(r(716),t)},716:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.validateNFTBaseUri=t.validateNFTCollectionUriMetaData=t.validateNFTTokenUriMetaData=t.validNFTCollectionUriMetaDataFields=t.validNFTUriMetaDataAttributeTypes=t.validNFTTokenUriMetaDataAttributesFields=t.validNFTTokenUriMetaDataFields=void 0,r(9114);const n=r(4652);function i(e){return Object.keys(e).forEach((e=>{if(!t.validNFTTokenUriMetaDataFields.includes(e))throw new Error(`Invalid field ${e}, only ${t.validNFTTokenUriMetaDataFields} are allowed`)})),{name:o(e,"name"),description:function(e,t){const r=e[`${t}`];if(void 0!==r&&("string"!=typeof r||""===r))throw new Error(`JSON field '${t}' is not a non empty string`);return r}(e,"description"),image:o(e,"image"),attributes:function(e){if(e){if(!Array.isArray(e))throw new Error("Field 'attributes' should be an array");e.forEach((e=>{if("object"!=typeof e)throw new Error("Field 'attributes' should be an array of objects");Object.keys(e).forEach((e=>{if(!t.validNFTTokenUriMetaDataAttributesFields.includes(e))throw new Error(`Invalid field ${e} for attributes, only ${t.validNFTTokenUriMetaDataAttributesFields} are allowed`)})),o(e,"trait_type"),function(e){const t=e.value;if(("string"!=typeof t||""===t)&&"number"!=typeof t&&"boolean"!=typeof t)throw new Error("Attribute value should be a non empty string, number or boolean")}(e)}))}return e}(e.attributes)}}function o(e,t){const r=e[`${t}`];if("string"!=typeof r||""===r)throw new Error(`JSON field '${t}' is not a non empty string`);return r}async function s(e,t){try{return await(await fetch(`${e}${t}`)).json()}catch(r){throw new n.TraceableError(`Error fetching NFT metadata from ${e}${t}`,r)}}t.validNFTTokenUriMetaDataFields=["name","description","image","attributes"],t.validNFTTokenUriMetaDataAttributesFields=["trait_type","value"],t.validNFTUriMetaDataAttributeTypes=["string","number","boolean"],t.validNFTCollectionUriMetaDataFields=["name","description","image"],t.validateNFTTokenUriMetaData=i,t.validateNFTCollectionUriMetaData=function(e){return Object.keys(e).forEach((e=>{if(!t.validNFTCollectionUriMetaDataFields.includes(e))throw new Error(`Invalid field ${e}, only ${t.validNFTCollectionUriMetaDataFields} are allowed`)})),{name:o(e,"name"),description:o(e,"description"),image:o(e,"image")}},t.validateNFTBaseUri=async function(e,t){if((r=t)===parseInt(r.toString(),10)&&t>0){const r=[];for(let n=0;n<t;n++){const t=i(await s(e,n));r.push(t)}return r}throw new Error("maxSupply should be a positive integer");var r}},6705:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),i(r(8715),t),i(r(6284),t),i(r(8156),t)},6284:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.transactionVerifySignature=t.transactionSign=void 0;const s=o(r(664));t.transactionSign=function(e,t,r){return s.sign(e,t,r)},t.transactionVerifySignature=function(e,t,r,n){return s.verifySignature(e,t,r,n)}},8715:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.subscribeToTxStatus=t.TxStatusSubscription=void 0;const s=o(r(307)),a=r(664);class c extends a.Subscription{constructor(e,t,r,n,i){super(e),this.txId=t,this.fromGroup=r,this.toGroup=n,this.confirmations=i??1}async polling(){try{const e=await s.getCurrentNodeProvider().transactions.getTransactionsStatus({txId:this.txId,fromGroup:this.fromGroup,toGroup:this.toGroup});await this.messageCallback(e),"Confirmed"===e.type&&e.chainConfirmations>=this.confirmations&&this.unsubscribe()}catch(e){await this.errorCallback(e,this)}}}t.TxStatusSubscription=c,t.subscribeToTxStatus=function(e,t,r,n,i){const o=new c(e,t,r,n,i);return o.subscribe(),o}},8156:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.groupIndexOfTransaction=t.waitForTxConfirmation=void 0;const n=r(2581),i=r(7695),o=r(307),s=r(664);t.waitForTxConfirmation=async function e(t,r,n){const i=(0,o.getCurrentNodeProvider)(),s=await i.transactions.getTransactionsStatus({txId:t});return"Confirmed"===s.type&&s.chainConfirmations>=r?s:(await new Promise((e=>setTimeout(e,n))),e(t,r,n))},t.groupIndexOfTransaction=function(e){if(0===e.inputs.length)throw new Error("Empty inputs for unsignedTx");const t=(r=e.inputs[0].hint,(0,s.xorByte)(r)%i.TOTAL_NUMBER_OF_GROUPS);var r;let o=t;for(const r of e.fixedOutputs){const e=(0,n.groupOfLockupScript)(r.lockupScript);if(e!==t){o=e;break}}return[t,o]}},4468:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.base58ToBytes=t.isBase58=t.bs58=void 0;const i=n(r(1219)),o=r(4652);t.bs58=(0,i.default)("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),t.isBase58=function(e){if(""===e||""===e.trim())return!1;try{return t.bs58.encode(t.bs58.decode(e))===e}catch(e){return!1}},t.base58ToBytes=function(e){try{return t.bs58.decode(e)}catch(t){throw new o.TraceableError(`Invalid base58 string ${e}`,t)}},t.default=t.bs58},160:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let t=5381;for(let r=0;r<e.length;r++)t=(t<<5)+t+(255&e[`${r}`]);return t}},664:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),i(r(7219),t),i(r(4468),t),i(r(160),t),i(r(2737),t),i(r(531),t),i(r(1347),t),i(r(6999),t)},6999:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.number256ToNumber=t.number256ToBigint=t.convertAlphAmountWithDecimals=t.convertAmountWithDecimals=t.prettifyNumber=t.prettifyExactAmount=t.prettifyTokenAmount=t.prettifyAttoAlphAmount=t.prettifyNumberConfig=t.isNumeric=void 0;const i=n(r(1594));function o(e,r,n){const o=u(f(e),r);if(!(0,t.isNumeric)(o))return;const s=new i.default(o);let a;if(s.gte(1))a=s.toFormat(n.minDecimalPlaces);else{const e=s.toFormat(n.maxDecimalPlaces).split(".")[1],t=e?.match(/^0+/),r=t&&t.length?t[0].length:0,i=Math.max(r+n.minDecimalSignificantDigits,n.minDecimalPlaces);a=s.toFormat(i)}let c=a.replace(/0+$/,"");const d=1+a.indexOf(".")+n.decimalPlacesWhenZero;return c.length<d&&(c=a.substring(0,d)),"."===c[c.length-1]&&(c=c.slice(0,-1)),c}t.isNumeric=e=>!isNaN(parseFloat(e))&&isFinite(e),t.prettifyNumberConfig={ALPH:{minDecimalPlaces:2,maxDecimalPlaces:10,minDecimalSignificantDigits:2,decimalPlacesWhenZero:2},TOKEN:{minDecimalPlaces:4,maxDecimalPlaces:16,minDecimalSignificantDigits:2,decimalPlacesWhenZero:1},Exact:{minDecimalPlaces:18,maxDecimalPlaces:18,minDecimalSignificantDigits:0,decimalPlacesWhenZero:0}},t.prettifyAttoAlphAmount=function(e){return o(e,18,t.prettifyNumberConfig.ALPH)},t.prettifyTokenAmount=function(e,r){return o(e,r,t.prettifyNumberConfig.TOKEN)},t.prettifyExactAmount=function(e,r){return o(e,r,t.prettifyNumberConfig.Exact)},t.prettifyNumber=o;const s=BigInt(-1),a=BigInt(0),c="0000";function u(e,t){let r="";e<a&&(r="-",e*=s);let n=e.toString();if(0===t)return r+n;for(;n.length<=t;)n=c+n;const i=n.length-t;for(n=n.substring(0,i)+"."+n.substring(i);"0"===n[0]&&"."!==n[1];)n=n.substring(1);for(;"0"===n[n.length-1]&&"."!==n[n.length-2];)n=n.substring(0,n.length-1);return r+n}function d(e,t){try{const r=new i.default(e).multipliedBy(Math.pow(10,t));return BigInt(r.toFormat(0,{groupSeparator:""}))}catch(e){return}}function f(e){return"string"==typeof e?BigInt(e):e}t.convertAmountWithDecimals=d,t.convertAlphAmountWithDecimals=function(e){return d(e,18)},t.number256ToBigint=f,t.number256ToNumber=function(e,t){return parseFloat(u(f(e),t))}},1347:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.verifySignature=t.sign=void 0;const s=r(9386),a=r(664),c=o(r(9695)),u=r(4062),d=new s.ec("secp256k1");c.utils.sha256Sync=(...e)=>{const t=(0,u.createHash)("sha256");for(const r of e)t.update(r);return t.digest()},c.utils.hmacSha256Sync=(e,...t)=>{const r=(0,u.createHmac)("sha256",e);return t.forEach((e=>r.update(e))),Uint8Array.from(r.digest())},t.sign=function(e,t,r){if("default"===(r??"default")){const r=d.keyFromPrivate(t).sign(e);return(0,a.encodeSignature)(r)}{const r=c.schnorr.signSync((0,a.hexToBinUnsafe)(e),(0,a.hexToBinUnsafe)(t));return(0,a.binToHex)(r)}},t.verifySignature=function(e,t,r,n){const i=n??"default";try{return"default"===i?d.keyFromPublic(t,"hex").verify(e,(0,a.signatureDecode)(d,r)):c.schnorr.verifySync((0,a.hexToBinUnsafe)(r),(0,a.hexToBinUnsafe)(e),(0,a.hexToBinUnsafe)(t))}catch(e){return!1}}},531:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Subscription=void 0;const i=n(r(2579));t.Subscription=class{constructor(e){this.pollingInterval=e.pollingInterval,this.messageCallback=e.messageCallback,this.errorCallback=e.errorCallback,this.task=void 0,this.cancelled=!1,this.eventEmitter=new i.default}subscribe(){this.eventEmitter.on("tick",(async()=>{await this.polling(),this.cancelled||(this.task=setTimeout((()=>this.eventEmitter.emit("tick")),this.pollingInterval))})),this.eventEmitter.emit("tick")}unsubscribe(){this.eventEmitter.removeAllListeners(),this.cancelled=!0,void 0!==this.task&&clearTimeout(this.task)}isCancelled(){return this.cancelled}}},2737:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.assertType=t.xorByte=t.concatBytes=t.difficultyToTarget=t.targetToDifficulty=t.isDevnet=t.sleep=t.hexToString=t.stringToHex=t.blockChainIndex=t.binToHex=t.hexToBinUnsafe=t.toNonNegativeBigInt=t.isHexString=t.signatureDecode=t.encodeHexSignature=t.encodeSignature=t.networkIds=void 0;const i=r(9386),o=n(r(3900)),s=r(7695);t.networkIds=["mainnet","testnet","devnet"];const a=new i.ec("secp256k1");function c(e){let t=e.s;return a.n&&1===e.s.cmp(a.nh)&&(t=a.n.sub(e.s)),e.r.toString("hex",66).slice(2)+t.toString("hex",66).slice(2)}function u(e){return e.length%2==0&&/^[0-9a-fA-F]*$/.test(e)}function d(e){const t=[];for(let r=0;r<e.length;r+=2)t.push(parseInt(e.slice(r,r+2),16));return new Uint8Array(t)}function f(e){return Array.from(e).map((e=>e.toString(16).padStart(2,"0"))).join("")}t.encodeSignature=c,t.encodeHexSignature=function(e,t){return c({r:new o.default(e,"hex"),s:new o.default(t,"hex")})},t.signatureDecode=function(e,t){if(128!==t.length)throw new Error("Invalid signature length");const r=t.slice(64,128),n=new o.default(r,"hex");if(e.n&&n.cmp(e.nh)<1)return{r:t.slice(0,64),s:r};throw new Error("The signature is not normalized")},t.isHexString=u,t.toNonNegativeBigInt=function(e){try{const t=BigInt(e);return t<0n?void 0:t}catch{return}},t.hexToBinUnsafe=d,t.binToHex=f,t.blockChainIndex=function(e){if(64!=e.length)throw Error(`Invalid block hash: ${e}`);const t=Number("0x"+e.slice(-4))%s.TOTAL_NUMBER_OF_CHAINS;return{fromGroup:Math.floor(t/s.TOTAL_NUMBER_OF_GROUPS),toGroup:t%s.TOTAL_NUMBER_OF_GROUPS}},t.stringToHex=function(e){let t="";for(let r=0;r<e.length;r++)t+=""+e.charCodeAt(r).toString(16);return t},t.hexToString=function(e){if(!u(e))throw new Error(`Invalid hex string: ${e}`);const t=d(e);return(new TextDecoder).decode(t)},t.sleep=function(e){return new Promise((t=>setTimeout(t,e)))},t.isDevnet=function(e){return 0!==e&&1!==e},t.targetToDifficulty=function(e){if(!u(e)||8!==e.length)throw Error(`Invalid target ${e}, expected a hex string of length 8`);const t=d(e.slice(0,2))[0],r=BigInt("0x"+e.slice(2));return(1n<<256n)/(t<=3?r>>BigInt(8*(3-t)):r<<BigInt(8*(t-3)))},t.difficultyToTarget=function(e){const t=1n<<256n,r=1n===e?t-1n:t/e,n=Math.floor((r.toString(2).length+7)/8),i=Number(n<=3?BigInt.asIntN(32,r)<<BigInt(8*(3-n)):BigInt.asIntN(32,r>>BigInt(8*(n-3)))),o=new Uint8Array(4);return o[0]=n,o[1]=i>>16&255,o[2]=i>>8&255,o[3]=255&i,f(o)},t.concatBytes=function(e){const t=e.reduce(((e,t)=>e+t.length),0),r=new Uint8Array(t);let n=0;for(const t of e)r.set(t,n),n+=t.length;return r},t.xorByte=function(e){return 255&(e>>24&255^e>>16&255^e>>8&255^255&e)},t.assertType=function(){}},7219:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WebCrypto=void 0;const n=r(4062),i="undefined"!=typeof window&&void 0!==window.document;t.WebCrypto=class{constructor(){this.subtle=i?globalThis.crypto.subtle:n.webcrypto?n.webcrypto.subtle:crypto.subtle}getRandomValues(e){if(!ArrayBuffer.isView(e))throw new TypeError("Failed to execute 'getRandomValues' on 'Crypto': parameter 1 is not of type 'ArrayBufferView'");const t=new Uint8Array(e.buffer,e.byteOffset,e.byteLength);return i?globalThis.crypto.getRandomValues(t):(0,n.randomFillSync)(t),e}}},3349:e=>{"use strict";e.exports=JSON.parse('{"aes-128-ecb":{"cipher":"AES","key":128,"iv":0,"mode":"ECB","type":"block"},"aes-192-ecb":{"cipher":"AES","key":192,"iv":0,"mode":"ECB","type":"block"},"aes-256-ecb":{"cipher":"AES","key":256,"iv":0,"mode":"ECB","type":"block"},"aes-128-cbc":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes-192-cbc":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes-256-cbc":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes128":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes192":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes256":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes-128-cfb":{"cipher":"AES","key":128,"iv":16,"mode":"CFB","type":"stream"},"aes-192-cfb":{"cipher":"AES","key":192,"iv":16,"mode":"CFB","type":"stream"},"aes-256-cfb":{"cipher":"AES","key":256,"iv":16,"mode":"CFB","type":"stream"},"aes-128-cfb8":{"cipher":"AES","key":128,"iv":16,"mode":"CFB8","type":"stream"},"aes-192-cfb8":{"cipher":"AES","key":192,"iv":16,"mode":"CFB8","type":"stream"},"aes-256-cfb8":{"cipher":"AES","key":256,"iv":16,"mode":"CFB8","type":"stream"},"aes-128-cfb1":{"cipher":"AES","key":128,"iv":16,"mode":"CFB1","type":"stream"},"aes-192-cfb1":{"cipher":"AES","key":192,"iv":16,"mode":"CFB1","type":"stream"},"aes-256-cfb1":{"cipher":"AES","key":256,"iv":16,"mode":"CFB1","type":"stream"},"aes-128-ofb":{"cipher":"AES","key":128,"iv":16,"mode":"OFB","type":"stream"},"aes-192-ofb":{"cipher":"AES","key":192,"iv":16,"mode":"OFB","type":"stream"},"aes-256-ofb":{"cipher":"AES","key":256,"iv":16,"mode":"OFB","type":"stream"},"aes-128-ctr":{"cipher":"AES","key":128,"iv":16,"mode":"CTR","type":"stream"},"aes-192-ctr":{"cipher":"AES","key":192,"iv":16,"mode":"CTR","type":"stream"},"aes-256-ctr":{"cipher":"AES","key":256,"iv":16,"mode":"CTR","type":"stream"},"aes-128-gcm":{"cipher":"AES","key":128,"iv":12,"mode":"GCM","type":"auth"},"aes-192-gcm":{"cipher":"AES","key":192,"iv":12,"mode":"GCM","type":"auth"},"aes-256-gcm":{"cipher":"AES","key":256,"iv":12,"mode":"GCM","type":"auth"}}')},6980:e=>{"use strict";e.exports=JSON.parse('{"sha224WithRSAEncryption":{"sign":"rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"RSA-SHA224":{"sign":"ecdsa/rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"sha256WithRSAEncryption":{"sign":"rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"RSA-SHA256":{"sign":"ecdsa/rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"sha384WithRSAEncryption":{"sign":"rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"RSA-SHA384":{"sign":"ecdsa/rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"sha512WithRSAEncryption":{"sign":"rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA512":{"sign":"ecdsa/rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA1":{"sign":"rsa","hash":"sha1","id":"3021300906052b0e03021a05000414"},"ecdsa-with-SHA1":{"sign":"ecdsa","hash":"sha1","id":""},"sha256":{"sign":"ecdsa","hash":"sha256","id":""},"sha224":{"sign":"ecdsa","hash":"sha224","id":""},"sha384":{"sign":"ecdsa","hash":"sha384","id":""},"sha512":{"sign":"ecdsa","hash":"sha512","id":""},"DSA-SHA":{"sign":"dsa","hash":"sha1","id":""},"DSA-SHA1":{"sign":"dsa","hash":"sha1","id":""},"DSA":{"sign":"dsa","hash":"sha1","id":""},"DSA-WITH-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-WITH-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-WITH-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-WITH-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-RIPEMD160":{"sign":"dsa","hash":"rmd160","id":""},"ripemd160WithRSA":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"RSA-RIPEMD160":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"md5WithRSAEncryption":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"},"RSA-MD5":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"}}')},9262:e=>{"use strict";e.exports=JSON.parse('{"1.3.132.0.10":"secp256k1","1.3.132.0.33":"p224","1.2.840.10045.3.1.1":"p192","1.2.840.10045.3.1.7":"p256","1.3.132.0.34":"p384","1.3.132.0.35":"p521"}')},7821:e=>{"use strict";e.exports=JSON.parse('{"modp1":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"},"modp2":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"},"modp5":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"},"modp14":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"},"modp15":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"},"modp16":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"},"modp17":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"},"modp18":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"}}')},4789:e=>{"use strict";e.exports={rE:"6.5.7"}},2853:e=>{"use strict";e.exports=JSON.parse('{"2.16.840.1.101.3.4.1.1":"aes-128-ecb","2.16.840.1.101.3.4.1.2":"aes-128-cbc","2.16.840.1.101.3.4.1.3":"aes-128-ofb","2.16.840.1.101.3.4.1.4":"aes-128-cfb","2.16.840.1.101.3.4.1.21":"aes-192-ecb","2.16.840.1.101.3.4.1.22":"aes-192-cbc","2.16.840.1.101.3.4.1.23":"aes-192-ofb","2.16.840.1.101.3.4.1.24":"aes-192-cfb","2.16.840.1.101.3.4.1.41":"aes-256-ecb","2.16.840.1.101.3.4.1.42":"aes-256-cbc","2.16.840.1.101.3.4.1.43":"aes-256-ofb","2.16.840.1.101.3.4.1.44":"aes-256-cfb"}')}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}return r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),r(2126)})()));
//# sourceMappingURL=alephium-web3.min.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";

// NAMESPACE OBJECT: ./node_modules/axios/lib/platform/common/utils.js
var common_utils_namespaceObject = {};
__webpack_require__.r(common_utils_namespaceObject);
__webpack_require__.d(common_utils_namespaceObject, {
  hasBrowserEnv: () => (hasBrowserEnv),
  hasStandardBrowserEnv: () => (hasStandardBrowserEnv),
  hasStandardBrowserWebWorkerEnv: () => (hasStandardBrowserWebWorkerEnv),
  navigator: () => (_navigator),
  origin: () => (origin)
});

// EXTERNAL MODULE: ./node_modules/@alephium/web3/dist/alephium-web3.min.js
var alephium_web3_min = __webpack_require__(21);
// EXTERNAL MODULE: ./node_modules/@alephium/get-extension-wallet/dist/index.js
var dist = __webpack_require__(927);
;// ./node_modules/axios/lib/helpers/bind.js


function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}

;// ./node_modules/axios/lib/utils.js




// utils is a library of generic helper functions non-specific to axios

const {toString: utils_toString} = Object.prototype;
const {getPrototypeOf} = Object;

const kindOf = (cache => thing => {
    const str = utils_toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));

const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type
}

const typeOfTest = type => thing => typeof thing === type;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
const {isArray} = Array;

/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */
const isUndefined = typeOfTest('undefined');

/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
const isArrayBuffer = kindOfTest('ArrayBuffer');


/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  let result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */
const isString = typeOfTest('string');

/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
const isFunction = typeOfTest('function');

/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */
const isNumber = typeOfTest('number');

/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */
const isObject = (thing) => thing !== null && typeof thing === 'object';

/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */
const isBoolean = thing => thing === true || thing === false;

/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */
const isPlainObject = (val) => {
  if (kindOf(val) !== 'object') {
    return false;
  }

  const prototype = getPrototypeOf(val);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
}

/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */
const isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */
const isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */
const isStream = (val) => isObject(val) && isFunction(val.pipe);

/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */
const isFormData = (thing) => {
  let kind;
  return thing && (
    (typeof FormData === 'function' && thing instanceof FormData) || (
      isFunction(thing.append) && (
        (kind = kindOf(thing)) === 'formdata' ||
        // detect form-data instance
        (kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]')
      )
    )
  )
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
const isURLSearchParams = kindOfTest('URLSearchParams');

const [isReadableStream, isRequest, isResponse, isHeaders] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(kindOfTest);

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */
const trim = (str) => str.trim ?
  str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */
function forEach(obj, fn, {allOwnKeys = false} = {}) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  let i;
  let l;

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;

    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}

function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}

const _global = (() => {
  /*eslint no-undef:0*/
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : (typeof window !== 'undefined' ? window : global)
})();

const isContextDefined = (context) => !isUndefined(context) && context !== _global;

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  const {caseless} = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  }

  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
const extend = (a, b, thisArg, {allOwnKeys}= {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  }, {allOwnKeys});
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */
const inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, 'super', {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
}

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */
const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};

  destObj = destObj || {};
  // eslint-disable-next-line no-eq-null,eqeqeq
  if (sourceObj == null) return destObj;

  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
}

/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
}


/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */
const toArray = (thing) => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
}

/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */
// eslint-disable-next-line func-names
const isTypedArray = (TypedArray => {
  // eslint-disable-next-line func-names
  return thing => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];

  const iterator = generator.call(obj);

  let result;

  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
}

/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];

  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }

  return arr;
}

/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
const isHTMLForm = kindOfTest('HTMLFormElement');

const toCamelCase = str => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,
    function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};

/* Creating a function that will check if an object has a property. */
const utils_hasOwnProperty = (({hasOwnProperty}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);

/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */
const isRegExp = kindOfTest('RegExp');

const reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};

  forEach(descriptors, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });

  Object.defineProperties(obj, reducedDescriptors);
}

/**
 * Makes all methods read-only
 * @param {Object} obj
 */

const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    // skip restricted props in strict mode
    if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
      return false;
    }

    const value = obj[name];

    if (!isFunction(value)) return;

    descriptor.enumerable = false;

    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }

    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error('Can not rewrite read-only method \'' + name + '\'');
      };
    }
  });
}

const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};

  const define = (arr) => {
    arr.forEach(value => {
      obj[value] = true;
    });
  }

  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));

  return obj;
}

const noop = () => {}

const toFiniteNumber = (value, defaultValue) => {
  return value != null && Number.isFinite(value = +value) ? value : defaultValue;
}

const ALPHA = 'abcdefghijklmnopqrstuvwxyz'

const DIGIT = '0123456789';

const ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
}

const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = '';
  const {length} = alphabet;
  while (size--) {
    str += alphabet[Math.random() * length|0]
  }

  return str;
}

/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
}

const toJSONObject = (obj) => {
  const stack = new Array(10);

  const visit = (source, i) => {

    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }

      if(!('toJSON' in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};

        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });

        stack[i] = undefined;

        return target;
      }
    }

    return source;
  }

  return visit(obj, 0);
}

const isAsyncFn = kindOfTest('AsyncFunction');

const isThenable = (thing) =>
  thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);

// original code
// https://github.com/DigitalBrainJS/AxiosPromise/blob/16deab13710ec09779922131f3fa5954320f83ab/lib/utils.js#L11-L34

const _setImmediate = ((setImmediateSupported, postMessageSupported) => {
  if (setImmediateSupported) {
    return setImmediate;
  }

  return postMessageSupported ? ((token, callbacks) => {
    _global.addEventListener("message", ({source, data}) => {
      if (source === _global && data === token) {
        callbacks.length && callbacks.shift()();
      }
    }, false);

    return (cb) => {
      callbacks.push(cb);
      _global.postMessage(token, "*");
    }
  })(`axios@${Math.random()}`, []) : (cb) => setTimeout(cb);
})(
  typeof setImmediate === 'function',
  isFunction(_global.postMessage)
);

const asap = typeof queueMicrotask !== 'undefined' ?
  queueMicrotask.bind(_global) : ( typeof process !== 'undefined' && process.nextTick || _setImmediate);

// *********************

/* harmony default export */ const utils = ({
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isReadableStream,
  isRequest,
  isResponse,
  isHeaders,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty: utils_hasOwnProperty,
  hasOwnProp: utils_hasOwnProperty, // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable,
  setImmediate: _setImmediate,
  asap
});

;// ./node_modules/axios/lib/core/AxiosError.js




/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */
function AxiosError(message, code, config, request, response) {
  Error.call(this);

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = (new Error()).stack;
  }

  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  if (response) {
    this.response = response;
    this.status = response.status ? response.status : null;
  }
}

utils.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});

const AxiosError_prototype = AxiosError.prototype;
const descriptors = {};

[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL'
// eslint-disable-next-line func-names
].forEach(code => {
  descriptors[code] = {value: code};
});

Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(AxiosError_prototype, 'isAxiosError', {value: true});

// eslint-disable-next-line func-names
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(AxiosError_prototype);

  utils.toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  }, prop => {
    return prop !== 'isAxiosError';
  });

  AxiosError.call(axiosError, error.message, code, config, request, response);

  axiosError.cause = error;

  axiosError.name = error.name;

  customProps && Object.assign(axiosError, customProps);

  return axiosError;
};

/* harmony default export */ const core_AxiosError = (AxiosError);

;// ./node_modules/axios/lib/helpers/null.js
// eslint-disable-next-line strict
/* harmony default export */ const helpers_null = (null);

;// ./node_modules/axios/lib/helpers/toFormData.js




// temporary hotfix to avoid circular references until AxiosURLSearchParams is refactored


/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */
function isVisitable(thing) {
  return utils.isPlainObject(thing) || utils.isArray(thing);
}

/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */
function removeBrackets(key) {
  return utils.endsWith(key, '[]') ? key.slice(0, -2) : key;
}

/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}

/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */
function isFlatArray(arr) {
  return utils.isArray(arr) && !arr.some(isVisitable);
}

const predicates = utils.toFlatObject(utils, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */
function toFormData(obj, formData, options) {
  if (!utils.isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (helpers_null || FormData)();

  // eslint-disable-next-line no-param-reassign
  options = utils.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    return !utils.isUndefined(source[option]);
  });

  const metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
  const useBlob = _Blob && utils.isSpecCompliantForm(formData);

  if (!utils.isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }

  function convertValue(value) {
    if (value === null) return '';

    if (utils.isDate(value)) {
      return value.toISOString();
    }

    if (!useBlob && utils.isBlob(value)) {
      throw new core_AxiosError('Blob is not supported. Use a Buffer instead.');
    }

    if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }

    return value;
  }

  /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */
  function defaultVisitor(value, key, path) {
    let arr = value;

    if (value && !path && typeof value === 'object') {
      if (utils.endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
      } else if (
        (utils.isArray(value) && isFlatArray(value)) ||
        ((utils.isFileList(value) || utils.endsWith(key, '[]')) && (arr = utils.toArray(value))
        )) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);

        arr.forEach(function each(el, index) {
          !(utils.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : (indexes === null ? key : key + '[]'),
            convertValue(el)
          );
        });
        return false;
      }
    }

    if (isVisitable(value)) {
      return true;
    }

    formData.append(renderKey(path, key, dots), convertValue(value));

    return false;
  }

  const stack = [];

  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });

  function build(value, path) {
    if (utils.isUndefined(value)) return;

    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }

    stack.push(value);

    utils.forEach(value, function each(el, key) {
      const result = !(utils.isUndefined(el) || el === null) && visitor.call(
        formData, el, utils.isString(key) ? key.trim() : key, path, exposedHelpers
      );

      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });

    stack.pop();
  }

  if (!utils.isObject(obj)) {
    throw new TypeError('data must be an object');
  }

  build(obj);

  return formData;
}

/* harmony default export */ const helpers_toFormData = (toFormData);

;// ./node_modules/axios/lib/helpers/AxiosURLSearchParams.js




/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */
function encode(str) {
  const charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}

/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */
function AxiosURLSearchParams(params, options) {
  this._pairs = [];

  params && helpers_toFormData(params, this, options);
}

const AxiosURLSearchParams_prototype = AxiosURLSearchParams.prototype;

AxiosURLSearchParams_prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};

AxiosURLSearchParams_prototype.toString = function toString(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode);
  } : encode;

  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};

/* harmony default export */ const helpers_AxiosURLSearchParams = (AxiosURLSearchParams);

;// ./node_modules/axios/lib/helpers/buildURL.js





/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function buildURL_encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?object} options
 *
 * @returns {string} The formatted url
 */
function buildURL(url, params, options) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }
  
  const _encode = options && options.encode || buildURL_encode;

  const serializeFn = options && options.serialize;

  let serializedParams;

  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils.isURLSearchParams(params) ?
      params.toString() :
      new helpers_AxiosURLSearchParams(params, options).toString(_encode);
  }

  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}

;// ./node_modules/axios/lib/core/InterceptorManager.js




class InterceptorManager {
  constructor() {
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }

  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    utils.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}

/* harmony default export */ const core_InterceptorManager = (InterceptorManager);

;// ./node_modules/axios/lib/defaults/transitional.js


/* harmony default export */ const defaults_transitional = ({
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
});

;// ./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js



/* harmony default export */ const classes_URLSearchParams = (typeof URLSearchParams !== 'undefined' ? URLSearchParams : helpers_AxiosURLSearchParams);

;// ./node_modules/axios/lib/platform/browser/classes/FormData.js


/* harmony default export */ const classes_FormData = (typeof FormData !== 'undefined' ? FormData : null);

;// ./node_modules/axios/lib/platform/browser/classes/Blob.js


/* harmony default export */ const classes_Blob = (typeof Blob !== 'undefined' ? Blob : null);

;// ./node_modules/axios/lib/platform/browser/index.js




/* harmony default export */ const browser = ({
  isBrowser: true,
  classes: {
    URLSearchParams: classes_URLSearchParams,
    FormData: classes_FormData,
    Blob: classes_Blob
  },
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
});

;// ./node_modules/axios/lib/platform/common/utils.js
const hasBrowserEnv = typeof window !== 'undefined' && typeof document !== 'undefined';

const _navigator = typeof navigator === 'object' && navigator || undefined;

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */
const hasStandardBrowserEnv = hasBrowserEnv &&
  (!_navigator || ['ReactNative', 'NativeScript', 'NS'].indexOf(_navigator.product) < 0);

/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */
const hasStandardBrowserWebWorkerEnv = (() => {
  return (
    typeof WorkerGlobalScope !== 'undefined' &&
    // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts === 'function'
  );
})();

const origin = hasBrowserEnv && window.location.href || 'http://localhost';



;// ./node_modules/axios/lib/platform/index.js



/* harmony default export */ const platform = ({
  ...common_utils_namespaceObject,
  ...browser
});

;// ./node_modules/axios/lib/helpers/toURLEncodedForm.js






function toURLEncodedForm(data, options) {
  return helpers_toFormData(data, new platform.classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (platform.isNode && utils.isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }

      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

;// ./node_modules/axios/lib/helpers/formDataToJSON.js




/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z]
  // foo.x.y.z
  // foo-x-y-z
  // foo x y z
  return utils.matchAll(/\w+|\[(\w*)]/g, name).map(match => {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}

/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];

    if (name === '__proto__') return true;

    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils.isArray(target) ? target.length : name;

    if (isLast) {
      if (utils.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }

      return !isNumericKey;
    }

    if (!target[name] || !utils.isObject(target[name])) {
      target[name] = [];
    }

    const result = buildPath(path, value, target[name], index);

    if (result && utils.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }

    return !isNumericKey;
  }

  if (utils.isFormData(formData) && utils.isFunction(formData.entries)) {
    const obj = {};

    utils.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });

    return obj;
  }

  return null;
}

/* harmony default export */ const helpers_formDataToJSON = (formDataToJSON);

;// ./node_modules/axios/lib/defaults/index.js










/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */
function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

const defaults = {

  transitional: defaults_transitional,

  adapter: ['xhr', 'http', 'fetch'],

  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || '';
    const hasJSONContentType = contentType.indexOf('application/json') > -1;
    const isObjectPayload = utils.isObject(data);

    if (isObjectPayload && utils.isHTMLForm(data)) {
      data = new FormData(data);
    }

    const isFormData = utils.isFormData(data);

    if (isFormData) {
      return hasJSONContentType ? JSON.stringify(helpers_formDataToJSON(data)) : data;
    }

    if (utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data) ||
      utils.isReadableStream(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
      return data.toString();
    }

    let isFileList;

    if (isObjectPayload) {
      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }

      if ((isFileList = utils.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        const _FormData = this.env && this.env.FormData;

        return helpers_toFormData(
          isFileList ? {'files[]': data} : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }

    if (isObjectPayload || hasJSONContentType ) {
      headers.setContentType('application/json', false);
      return stringifySafely(data);
    }

    return data;
  }],

  transformResponse: [function transformResponse(data) {
    const transitional = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    const JSONRequested = this.responseType === 'json';

    if (utils.isResponse(data) || utils.isReadableStream(data)) {
      return data;
    }

    if (data && utils.isString(data) && ((forcedJSONParsing && !this.responseType) || JSONRequested)) {
      const silentJSONParsing = transitional && transitional.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;

      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw core_AxiosError.from(e, core_AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  env: {
    FormData: platform.classes.FormData,
    Blob: platform.classes.Blob
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': undefined
    }
  }
};

utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (method) => {
  defaults.headers[method] = {};
});

/* harmony default export */ const lib_defaults = (defaults);

;// ./node_modules/axios/lib/helpers/parseHeaders.js




// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = utils.toObjectSet([
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
]);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */
/* harmony default export */ const parseHeaders = (rawHeaders => {
  const parsed = {};
  let key;
  let val;
  let i;

  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
    i = line.indexOf(':');
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();

    if (!key || (parsed[key] && ignoreDuplicateOf[key])) {
      return;
    }

    if (key === 'set-cookie') {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
});

;// ./node_modules/axios/lib/core/AxiosHeaders.js





const $internals = Symbol('internals');

function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}

function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }

  return utils.isArray(value) ? value.map(normalizeValue) : String(value);
}

function parseTokens(str) {
  const tokens = Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;

  while ((match = tokensRE.exec(str))) {
    tokens[match[1]] = match[2];
  }

  return tokens;
}

const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());

function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
  if (utils.isFunction(filter)) {
    return filter.call(this, value, header);
  }

  if (isHeaderNameFilter) {
    value = header;
  }

  if (!utils.isString(value)) return;

  if (utils.isString(filter)) {
    return value.indexOf(filter) !== -1;
  }

  if (utils.isRegExp(filter)) {
    return filter.test(value);
  }
}

function formatHeader(header) {
  return header.trim()
    .toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
}

function buildAccessors(obj, header) {
  const accessorName = utils.toCamelCase(' ' + header);

  ['get', 'set', 'has'].forEach(methodName => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}

class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }

  set(header, valueOrRewrite, rewrite) {
    const self = this;

    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);

      if (!lHeader) {
        throw new Error('header name must be a non-empty string');
      }

      const key = utils.findKey(self, lHeader);

      if(!key || self[key] === undefined || _rewrite === true || (_rewrite === undefined && self[key] !== false)) {
        self[key || _header] = normalizeValue(_value);
      }
    }

    const setHeaders = (headers, _rewrite) =>
      utils.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));

    if (utils.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite)
    } else if(utils.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders(header), valueOrRewrite);
    } else if (utils.isHeaders(header)) {
      for (const [key, value] of header.entries()) {
        setHeader(value, key, rewrite);
      }
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }

    return this;
  }

  get(header, parser) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils.findKey(this, header);

      if (key) {
        const value = this[key];

        if (!parser) {
          return value;
        }

        if (parser === true) {
          return parseTokens(value);
        }

        if (utils.isFunction(parser)) {
          return parser.call(this, value, key);
        }

        if (utils.isRegExp(parser)) {
          return parser.exec(value);
        }

        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }

  has(header, matcher) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils.findKey(this, header);

      return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }

    return false;
  }

  delete(header, matcher) {
    const self = this;
    let deleted = false;

    function deleteHeader(_header) {
      _header = normalizeHeader(_header);

      if (_header) {
        const key = utils.findKey(self, _header);

        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
          delete self[key];

          deleted = true;
        }
      }
    }

    if (utils.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }

    return deleted;
  }

  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;

    while (i--) {
      const key = keys[i];
      if(!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }

    return deleted;
  }

  normalize(format) {
    const self = this;
    const headers = {};

    utils.forEach(this, (value, header) => {
      const key = utils.findKey(headers, header);

      if (key) {
        self[key] = normalizeValue(value);
        delete self[header];
        return;
      }

      const normalized = format ? formatHeader(header) : String(header).trim();

      if (normalized !== header) {
        delete self[header];
      }

      self[normalized] = normalizeValue(value);

      headers[normalized] = true;
    });

    return this;
  }

  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }

  toJSON(asStrings) {
    const obj = Object.create(null);

    utils.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils.isArray(value) ? value.join(', ') : value);
    });

    return obj;
  }

  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }

  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
  }

  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }

  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }

  static concat(first, ...targets) {
    const computed = new this(first);

    targets.forEach((target) => computed.set(target));

    return computed;
  }

  static accessor(header) {
    const internals = this[$internals] = (this[$internals] = {
      accessors: {}
    });

    const accessors = internals.accessors;
    const prototype = this.prototype;

    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);

      if (!accessors[lHeader]) {
        buildAccessors(prototype, _header);
        accessors[lHeader] = true;
      }
    }

    utils.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);

    return this;
  }
}

AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);

// reserved names hotfix
utils.reduceDescriptors(AxiosHeaders.prototype, ({value}, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  }
});

utils.freezeMethods(AxiosHeaders);

/* harmony default export */ const core_AxiosHeaders = (AxiosHeaders);

;// ./node_modules/axios/lib/core/transformData.js






/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
function transformData(fns, response) {
  const config = this || lib_defaults;
  const context = response || config;
  const headers = core_AxiosHeaders.from(context.headers);
  let data = context.data;

  utils.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });

  headers.normalize();

  return data;
}

;// ./node_modules/axios/lib/cancel/isCancel.js


function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

;// ./node_modules/axios/lib/cancel/CanceledError.js





/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */
function CanceledError(message, config, request) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  core_AxiosError.call(this, message == null ? 'canceled' : message, core_AxiosError.ERR_CANCELED, config, request);
  this.name = 'CanceledError';
}

utils.inherits(CanceledError, core_AxiosError, {
  __CANCEL__: true
});

/* harmony default export */ const cancel_CanceledError = (CanceledError);

;// ./node_modules/axios/lib/core/settle.js




/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */
function settle(resolve, reject, response) {
  const validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new core_AxiosError(
      'Request failed with status code ' + response.status,
      [core_AxiosError.ERR_BAD_REQUEST, core_AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}

;// ./node_modules/axios/lib/helpers/parseProtocol.js


function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
}

;// ./node_modules/axios/lib/helpers/speedometer.js


/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;

  min = min !== undefined ? min : 1000;

  return function push(chunkLength) {
    const now = Date.now();

    const startedAt = timestamps[tail];

    if (!firstSampleTS) {
      firstSampleTS = now;
    }

    bytes[head] = chunkLength;
    timestamps[head] = now;

    let i = tail;
    let bytesCount = 0;

    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }

    head = (head + 1) % samplesCount;

    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }

    if (now - firstSampleTS < min) {
      return;
    }

    const passed = startedAt && now - startedAt;

    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}

/* harmony default export */ const helpers_speedometer = (speedometer);

;// ./node_modules/axios/lib/helpers/throttle.js
/**
 * Throttle decorator
 * @param {Function} fn
 * @param {Number} freq
 * @return {Function}
 */
function throttle(fn, freq) {
  let timestamp = 0;
  let threshold = 1000 / freq;
  let lastArgs;
  let timer;

  const invoke = (args, now = Date.now()) => {
    timestamp = now;
    lastArgs = null;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    fn.apply(null, args);
  }

  const throttled = (...args) => {
    const now = Date.now();
    const passed = now - timestamp;
    if ( passed >= threshold) {
      invoke(args, now);
    } else {
      lastArgs = args;
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          invoke(lastArgs)
        }, threshold - passed);
      }
    }
  }

  const flush = () => lastArgs && invoke(lastArgs);

  return [throttled, flush];
}

/* harmony default export */ const helpers_throttle = (throttle);

;// ./node_modules/axios/lib/helpers/progressEventReducer.js




const progressEventReducer = (listener, isDownloadStream, freq = 3) => {
  let bytesNotified = 0;
  const _speedometer = helpers_speedometer(50, 250);

  return helpers_throttle(e => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;

    bytesNotified = loaded;

    const data = {
      loaded,
      total,
      progress: total ? (loaded / total) : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e,
      lengthComputable: total != null,
      [isDownloadStream ? 'download' : 'upload']: true
    };

    listener(data);
  }, freq);
}

const progressEventDecorator = (total, throttled) => {
  const lengthComputable = total != null;

  return [(loaded) => throttled[0]({
    lengthComputable,
    total,
    loaded
  }), throttled[1]];
}

const asyncDecorator = (fn) => (...args) => utils.asap(() => fn(...args));

;// ./node_modules/axios/lib/helpers/isURLSameOrigin.js





/* harmony default export */ const isURLSameOrigin = (platform.hasStandardBrowserEnv ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    const msie = platform.navigator && /(msie|trident)/i.test(platform.navigator.userAgent);
    const urlParsingNode = document.createElement('a');
    let originURL;

    /**
    * Parse a URL to discover its components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      let href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
          urlParsingNode.pathname :
          '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      const parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
          parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })());

;// ./node_modules/axios/lib/helpers/cookies.js



/* harmony default export */ const cookies = (platform.hasStandardBrowserEnv ?

  // Standard browser envs support document.cookie
  {
    write(name, value, expires, path, domain, secure) {
      const cookie = [name + '=' + encodeURIComponent(value)];

      utils.isNumber(expires) && cookie.push('expires=' + new Date(expires).toGMTString());

      utils.isString(path) && cookie.push('path=' + path);

      utils.isString(domain) && cookie.push('domain=' + domain);

      secure === true && cookie.push('secure');

      document.cookie = cookie.join('; ');
    },

    read(name) {
      const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return (match ? decodeURIComponent(match[3]) : null);
    },

    remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  }

  :

  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {},
    read() {
      return null;
    },
    remove() {}
  });


;// ./node_modules/axios/lib/helpers/isAbsoluteURL.js


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

;// ./node_modules/axios/lib/helpers/combineURLs.js


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/?\/$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
}

;// ./node_modules/axios/lib/core/buildFullPath.js





/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}

;// ./node_modules/axios/lib/core/mergeConfig.js





const headersToObject = (thing) => thing instanceof core_AxiosHeaders ? { ...thing } : thing;

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  const config = {};

  function getMergedValue(target, source, caseless) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge.call({caseless}, target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(a, b, caseless) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(a, b, caseless);
    } else if (!utils.isUndefined(a)) {
      return getMergedValue(undefined, a, caseless);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(a, b) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(a, b) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!utils.isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(undefined, a);
    }
  }

  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    withXSRFToken: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
  };

  utils.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    const merge = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge(config1[prop], config2[prop], prop);
    (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
}

;// ./node_modules/axios/lib/helpers/resolveConfig.js









/* harmony default export */ const resolveConfig = ((config) => {
  const newConfig = mergeConfig({}, config);

  let {data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth} = newConfig;

  newConfig.headers = headers = core_AxiosHeaders.from(headers);

  newConfig.url = buildURL(buildFullPath(newConfig.baseURL, newConfig.url), config.params, config.paramsSerializer);

  // HTTP basic authentication
  if (auth) {
    headers.set('Authorization', 'Basic ' +
      btoa((auth.username || '') + ':' + (auth.password ? unescape(encodeURIComponent(auth.password)) : ''))
    );
  }

  let contentType;

  if (utils.isFormData(data)) {
    if (platform.hasStandardBrowserEnv || platform.hasStandardBrowserWebWorkerEnv) {
      headers.setContentType(undefined); // Let the browser set it
    } else if ((contentType = headers.getContentType()) !== false) {
      // fix semicolon duplication issue for ReactNative FormData implementation
      const [type, ...tokens] = contentType ? contentType.split(';').map(token => token.trim()).filter(Boolean) : [];
      headers.setContentType([type || 'multipart/form-data', ...tokens].join('; '));
    }
  }

  // Add xsrf header
  // This is only done if running in a standard browser environment.
  // Specifically not if we're in a web worker, or react-native.

  if (platform.hasStandardBrowserEnv) {
    withXSRFToken && utils.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));

    if (withXSRFToken || (withXSRFToken !== false && isURLSameOrigin(newConfig.url))) {
      // Add xsrf header
      const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies.read(xsrfCookieName);

      if (xsrfValue) {
        headers.set(xsrfHeaderName, xsrfValue);
      }
    }
  }

  return newConfig;
});


;// ./node_modules/axios/lib/adapters/xhr.js











const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';

/* harmony default export */ const xhr = (isXHRAdapterSupported && function (config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    const _config = resolveConfig(config);
    let requestData = _config.data;
    const requestHeaders = core_AxiosHeaders.from(_config.headers).normalize();
    let {responseType, onUploadProgress, onDownloadProgress} = _config;
    let onCanceled;
    let uploadThrottled, downloadThrottled;
    let flushUpload, flushDownload;

    function done() {
      flushUpload && flushUpload(); // flush events
      flushDownload && flushDownload(); // flush events

      _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);

      _config.signal && _config.signal.removeEventListener('abort', onCanceled);
    }

    let request = new XMLHttpRequest();

    request.open(_config.method.toUpperCase(), _config.url, true);

    // Set the request timeout in MS
    request.timeout = _config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      const responseHeaders = core_AxiosHeaders.from(
        'getAllResponseHeaders' in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === 'text' || responseType === 'json' ?
        request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(new core_AxiosError('Request aborted', core_AxiosError.ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new core_AxiosError('Network Error', core_AxiosError.ERR_NETWORK, config, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = _config.timeout ? 'timeout of ' + _config.timeout + 'ms exceeded' : 'timeout exceeded';
      const transitional = _config.transitional || defaults_transitional;
      if (_config.timeoutErrorMessage) {
        timeoutErrorMessage = _config.timeoutErrorMessage;
      }
      reject(new core_AxiosError(
        timeoutErrorMessage,
        transitional.clarifyTimeoutError ? core_AxiosError.ETIMEDOUT : core_AxiosError.ECONNABORTED,
        config,
        request));

      // Clean up request
      request = null;
    };

    // Remove Content-Type if data is undefined
    requestData === undefined && requestHeaders.setContentType(null);

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(_config.withCredentials)) {
      request.withCredentials = !!_config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = _config.responseType;
    }

    // Handle progress if needed
    if (onDownloadProgress) {
      ([downloadThrottled, flushDownload] = progressEventReducer(onDownloadProgress, true));
      request.addEventListener('progress', downloadThrottled);
    }

    // Not all browsers support upload events
    if (onUploadProgress && request.upload) {
      ([uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress));

      request.upload.addEventListener('progress', uploadThrottled);

      request.upload.addEventListener('loadend', flushUpload);
    }

    if (_config.cancelToken || _config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = cancel => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new cancel_CanceledError(null, config, request) : cancel);
        request.abort();
        request = null;
      };

      _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
      if (_config.signal) {
        _config.signal.aborted ? onCanceled() : _config.signal.addEventListener('abort', onCanceled);
      }
    }

    const protocol = parseProtocol(_config.url);

    if (protocol && platform.protocols.indexOf(protocol) === -1) {
      reject(new core_AxiosError('Unsupported protocol ' + protocol + ':', core_AxiosError.ERR_BAD_REQUEST, config));
      return;
    }


    // Send the request
    request.send(requestData || null);
  });
});

;// ./node_modules/axios/lib/helpers/composeSignals.js




const composeSignals = (signals, timeout) => {
  const {length} = (signals = signals ? signals.filter(Boolean) : []);

  if (timeout || length) {
    let controller = new AbortController();

    let aborted;

    const onabort = function (reason) {
      if (!aborted) {
        aborted = true;
        unsubscribe();
        const err = reason instanceof Error ? reason : this.reason;
        controller.abort(err instanceof core_AxiosError ? err : new cancel_CanceledError(err instanceof Error ? err.message : err));
      }
    }

    let timer = timeout && setTimeout(() => {
      timer = null;
      onabort(new core_AxiosError(`timeout ${timeout} of ms exceeded`, core_AxiosError.ETIMEDOUT))
    }, timeout)

    const unsubscribe = () => {
      if (signals) {
        timer && clearTimeout(timer);
        timer = null;
        signals.forEach(signal => {
          signal.unsubscribe ? signal.unsubscribe(onabort) : signal.removeEventListener('abort', onabort);
        });
        signals = null;
      }
    }

    signals.forEach((signal) => signal.addEventListener('abort', onabort));

    const {signal} = controller;

    signal.unsubscribe = () => utils.asap(unsubscribe);

    return signal;
  }
}

/* harmony default export */ const helpers_composeSignals = (composeSignals);

;// ./node_modules/axios/lib/helpers/trackStream.js

const streamChunk = function* (chunk, chunkSize) {
  let len = chunk.byteLength;

  if (!chunkSize || len < chunkSize) {
    yield chunk;
    return;
  }

  let pos = 0;
  let end;

  while (pos < len) {
    end = pos + chunkSize;
    yield chunk.slice(pos, end);
    pos = end;
  }
}

const readBytes = async function* (iterable, chunkSize) {
  for await (const chunk of readStream(iterable)) {
    yield* streamChunk(chunk, chunkSize);
  }
}

const readStream = async function* (stream) {
  if (stream[Symbol.asyncIterator]) {
    yield* stream;
    return;
  }

  const reader = stream.getReader();
  try {
    for (;;) {
      const {done, value} = await reader.read();
      if (done) {
        break;
      }
      yield value;
    }
  } finally {
    await reader.cancel();
  }
}

const trackStream = (stream, chunkSize, onProgress, onFinish) => {
  const iterator = readBytes(stream, chunkSize);

  let bytes = 0;
  let done;
  let _onFinish = (e) => {
    if (!done) {
      done = true;
      onFinish && onFinish(e);
    }
  }

  return new ReadableStream({
    async pull(controller) {
      try {
        const {done, value} = await iterator.next();

        if (done) {
         _onFinish();
          controller.close();
          return;
        }

        let len = value.byteLength;
        if (onProgress) {
          let loadedBytes = bytes += len;
          onProgress(loadedBytes);
        }
        controller.enqueue(new Uint8Array(value));
      } catch (err) {
        _onFinish(err);
        throw err;
      }
    },
    cancel(reason) {
      _onFinish(reason);
      return iterator.return();
    }
  }, {
    highWaterMark: 2
  })
}

;// ./node_modules/axios/lib/adapters/fetch.js










const isFetchSupported = typeof fetch === 'function' && typeof Request === 'function' && typeof Response === 'function';
const isReadableStreamSupported = isFetchSupported && typeof ReadableStream === 'function';

// used only inside the fetch adapter
const encodeText = isFetchSupported && (typeof TextEncoder === 'function' ?
    ((encoder) => (str) => encoder.encode(str))(new TextEncoder()) :
    async (str) => new Uint8Array(await new Response(str).arrayBuffer())
);

const test = (fn, ...args) => {
  try {
    return !!fn(...args);
  } catch (e) {
    return false
  }
}

const supportsRequestStream = isReadableStreamSupported && test(() => {
  let duplexAccessed = false;

  const hasContentType = new Request(platform.origin, {
    body: new ReadableStream(),
    method: 'POST',
    get duplex() {
      duplexAccessed = true;
      return 'half';
    },
  }).headers.has('Content-Type');

  return duplexAccessed && !hasContentType;
});

const DEFAULT_CHUNK_SIZE = 64 * 1024;

const supportsResponseStream = isReadableStreamSupported &&
  test(() => utils.isReadableStream(new Response('').body));


const resolvers = {
  stream: supportsResponseStream && ((res) => res.body)
};

isFetchSupported && (((res) => {
  ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach(type => {
    !resolvers[type] && (resolvers[type] = utils.isFunction(res[type]) ? (res) => res[type]() :
      (_, config) => {
        throw new core_AxiosError(`Response type '${type}' is not supported`, core_AxiosError.ERR_NOT_SUPPORT, config);
      })
  });
})(new Response));

const getBodyLength = async (body) => {
  if (body == null) {
    return 0;
  }

  if(utils.isBlob(body)) {
    return body.size;
  }

  if(utils.isSpecCompliantForm(body)) {
    const _request = new Request(platform.origin, {
      method: 'POST',
      body,
    });
    return (await _request.arrayBuffer()).byteLength;
  }

  if(utils.isArrayBufferView(body) || utils.isArrayBuffer(body)) {
    return body.byteLength;
  }

  if(utils.isURLSearchParams(body)) {
    body = body + '';
  }

  if(utils.isString(body)) {
    return (await encodeText(body)).byteLength;
  }
}

const resolveBodyLength = async (headers, body) => {
  const length = utils.toFiniteNumber(headers.getContentLength());

  return length == null ? getBodyLength(body) : length;
}

/* harmony default export */ const adapters_fetch = (isFetchSupported && (async (config) => {
  let {
    url,
    method,
    data,
    signal,
    cancelToken,
    timeout,
    onDownloadProgress,
    onUploadProgress,
    responseType,
    headers,
    withCredentials = 'same-origin',
    fetchOptions
  } = resolveConfig(config);

  responseType = responseType ? (responseType + '').toLowerCase() : 'text';

  let composedSignal = helpers_composeSignals([signal, cancelToken && cancelToken.toAbortSignal()], timeout);

  let request;

  const unsubscribe = composedSignal && composedSignal.unsubscribe && (() => {
      composedSignal.unsubscribe();
  });

  let requestContentLength;

  try {
    if (
      onUploadProgress && supportsRequestStream && method !== 'get' && method !== 'head' &&
      (requestContentLength = await resolveBodyLength(headers, data)) !== 0
    ) {
      let _request = new Request(url, {
        method: 'POST',
        body: data,
        duplex: "half"
      });

      let contentTypeHeader;

      if (utils.isFormData(data) && (contentTypeHeader = _request.headers.get('content-type'))) {
        headers.setContentType(contentTypeHeader)
      }

      if (_request.body) {
        const [onProgress, flush] = progressEventDecorator(
          requestContentLength,
          progressEventReducer(asyncDecorator(onUploadProgress))
        );

        data = trackStream(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
      }
    }

    if (!utils.isString(withCredentials)) {
      withCredentials = withCredentials ? 'include' : 'omit';
    }

    // Cloudflare Workers throws when credentials are defined
    // see https://github.com/cloudflare/workerd/issues/902
    const isCredentialsSupported = "credentials" in Request.prototype;
    request = new Request(url, {
      ...fetchOptions,
      signal: composedSignal,
      method: method.toUpperCase(),
      headers: headers.normalize().toJSON(),
      body: data,
      duplex: "half",
      credentials: isCredentialsSupported ? withCredentials : undefined
    });

    let response = await fetch(request);

    const isStreamResponse = supportsResponseStream && (responseType === 'stream' || responseType === 'response');

    if (supportsResponseStream && (onDownloadProgress || (isStreamResponse && unsubscribe))) {
      const options = {};

      ['status', 'statusText', 'headers'].forEach(prop => {
        options[prop] = response[prop];
      });

      const responseContentLength = utils.toFiniteNumber(response.headers.get('content-length'));

      const [onProgress, flush] = onDownloadProgress && progressEventDecorator(
        responseContentLength,
        progressEventReducer(asyncDecorator(onDownloadProgress), true)
      ) || [];

      response = new Response(
        trackStream(response.body, DEFAULT_CHUNK_SIZE, onProgress, () => {
          flush && flush();
          unsubscribe && unsubscribe();
        }),
        options
      );
    }

    responseType = responseType || 'text';

    let responseData = await resolvers[utils.findKey(resolvers, responseType) || 'text'](response, config);

    !isStreamResponse && unsubscribe && unsubscribe();

    return await new Promise((resolve, reject) => {
      settle(resolve, reject, {
        data: responseData,
        headers: core_AxiosHeaders.from(response.headers),
        status: response.status,
        statusText: response.statusText,
        config,
        request
      })
    })
  } catch (err) {
    unsubscribe && unsubscribe();

    if (err && err.name === 'TypeError' && /fetch/i.test(err.message)) {
      throw Object.assign(
        new core_AxiosError('Network Error', core_AxiosError.ERR_NETWORK, config, request),
        {
          cause: err.cause || err
        }
      )
    }

    throw core_AxiosError.from(err, err && err.code, config, request);
  }
}));



;// ./node_modules/axios/lib/adapters/adapters.js






const knownAdapters = {
  http: helpers_null,
  xhr: xhr,
  fetch: adapters_fetch
}

utils.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, 'name', {value});
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', {value});
  }
});

const renderReason = (reason) => `- ${reason}`;

const isResolvedHandle = (adapter) => utils.isFunction(adapter) || adapter === null || adapter === false;

/* harmony default export */ const adapters = ({
  getAdapter: (adapters) => {
    adapters = utils.isArray(adapters) ? adapters : [adapters];

    const {length} = adapters;
    let nameOrAdapter;
    let adapter;

    const rejectedReasons = {};

    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      let id;

      adapter = nameOrAdapter;

      if (!isResolvedHandle(nameOrAdapter)) {
        adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];

        if (adapter === undefined) {
          throw new core_AxiosError(`Unknown adapter '${id}'`);
        }
      }

      if (adapter) {
        break;
      }

      rejectedReasons[id || '#' + i] = adapter;
    }

    if (!adapter) {

      const reasons = Object.entries(rejectedReasons)
        .map(([id, state]) => `adapter ${id} ` +
          (state === false ? 'is not supported by the environment' : 'is not available in the build')
        );

      let s = length ?
        (reasons.length > 1 ? 'since :\n' + reasons.map(renderReason).join('\n') : ' ' + renderReason(reasons[0])) :
        'as no adapter specified';

      throw new core_AxiosError(
        `There is no suitable adapter to dispatch the request ` + s,
        'ERR_NOT_SUPPORT'
      );
    }

    return adapter;
  },
  adapters: knownAdapters
});

;// ./node_modules/axios/lib/core/dispatchRequest.js









/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new cancel_CanceledError(null, config);
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  config.headers = core_AxiosHeaders.from(config.headers);

  // Transform request data
  config.data = transformData.call(
    config,
    config.transformRequest
  );

  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }

  const adapter = adapters.getAdapter(config.adapter || lib_defaults.adapter);

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      config.transformResponse,
      response
    );

    response.headers = core_AxiosHeaders.from(response.headers);

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = core_AxiosHeaders.from(reason.response.headers);
      }
    }

    return Promise.reject(reason);
  });
}

;// ./node_modules/axios/lib/env/data.js
const VERSION = "1.7.7";
;// ./node_modules/axios/lib/helpers/validator.js





const validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

const deprecatedWarnings = {};

/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return (value, opt, opts) => {
    if (validator === false) {
      throw new core_AxiosError(
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        core_AxiosError.ERR_DEPRECATED
      );
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new core_AxiosError('options must be an object', core_AxiosError.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new core_AxiosError('option ' + opt + ' must be ' + result, core_AxiosError.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new core_AxiosError('Unknown option ' + opt, core_AxiosError.ERR_BAD_OPTION);
    }
  }
}

/* harmony default export */ const validator = ({
  assertOptions,
  validators
});

;// ./node_modules/axios/lib/core/Axios.js











const Axios_validators = validator.validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new core_InterceptorManager(),
      response: new core_InterceptorManager()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(configOrUrl, config) {
    try {
      return await this._request(configOrUrl, config);
    } catch (err) {
      if (err instanceof Error) {
        let dummy;

        Error.captureStackTrace ? Error.captureStackTrace(dummy = {}) : (dummy = new Error());

        // slice off the Error: ... line
        const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, '') : '';
        try {
          if (!err.stack) {
            err.stack = stack;
            // match without the 2 top stack lines
          } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ''))) {
            err.stack += '\n' + stack
          }
        } catch (e) {
          // ignore the case where "stack" is an un-writable property
        }
      }

      throw err;
    }
  }

  _request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }

    config = mergeConfig(this.defaults, config);

    const {transitional, paramsSerializer, headers} = config;

    if (transitional !== undefined) {
      validator.assertOptions(transitional, {
        silentJSONParsing: Axios_validators.transitional(Axios_validators.boolean),
        forcedJSONParsing: Axios_validators.transitional(Axios_validators.boolean),
        clarifyTimeoutError: Axios_validators.transitional(Axios_validators.boolean)
      }, false);
    }

    if (paramsSerializer != null) {
      if (utils.isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        }
      } else {
        validator.assertOptions(paramsSerializer, {
          encode: Axios_validators.function,
          serialize: Axios_validators.function
        }, true);
      }
    }

    // Set config.method
    config.method = (config.method || this.defaults.method || 'get').toLowerCase();

    // Flatten headers
    let contextHeaders = headers && utils.merge(
      headers.common,
      headers[config.method]
    );

    headers && utils.forEach(
      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
      (method) => {
        delete headers[method];
      }
    );

    config.headers = core_AxiosHeaders.concat(contextHeaders, headers);

    // filter out skipped interceptors
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }

      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });

    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });

    let promise;
    let i = 0;
    let len;

    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), undefined];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;

      promise = Promise.resolve(config);

      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }

      return promise;
    }

    len = requestInterceptorChain.length;

    let newConfig = config;

    i = 0;

    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }

    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }

    i = 0;
    len = responseInterceptorChain.length;

    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }

    return promise;
  }

  getUri(config) {
    config = mergeConfig(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
}

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url,
        data
      }));
    };
  }

  Axios.prototype[method] = generateHTTPMethod();

  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});

/* harmony default export */ const core_Axios = (Axios);

;// ./node_modules/axios/lib/cancel/CancelToken.js




/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
class CancelToken {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    let resolvePromise;

    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });

    const token = this;

    // eslint-disable-next-line func-names
    this.promise.then(cancel => {
      if (!token._listeners) return;

      let i = token._listeners.length;

      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = onfulfilled => {
      let _resolve;
      // eslint-disable-next-line func-names
      const promise = new Promise(resolve => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);

      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };

      return promise;
    };

    executor(function cancel(message, config, request) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }

      token.reason = new cancel_CanceledError(message, config, request);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }

  /**
   * Subscribe to the cancel signal
   */

  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }

    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }

  /**
   * Unsubscribe from the cancel signal
   */

  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }

  toAbortSignal() {
    const controller = new AbortController();

    const abort = (err) => {
      controller.abort(err);
    };

    this.subscribe(abort);

    controller.signal.unsubscribe = () => this.unsubscribe(abort);

    return controller.signal;
  }

  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
}

/* harmony default export */ const cancel_CancelToken = (CancelToken);

;// ./node_modules/axios/lib/helpers/spread.js


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}

;// ./node_modules/axios/lib/helpers/isAxiosError.js




/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
function isAxiosError(payload) {
  return utils.isObject(payload) && (payload.isAxiosError === true);
}

;// ./node_modules/axios/lib/helpers/HttpStatusCode.js
const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};

Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});

/* harmony default export */ const helpers_HttpStatusCode = (HttpStatusCode);

;// ./node_modules/axios/lib/axios.js




















/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  const context = new core_Axios(defaultConfig);
  const instance = bind(core_Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, core_Axios.prototype, context, {allOwnKeys: true});

  // Copy context to instance
  utils.extend(instance, context, null, {allOwnKeys: true});

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
const axios = createInstance(lib_defaults);

// Expose Axios class to allow class inheritance
axios.Axios = core_Axios;

// Expose Cancel & CancelToken
axios.CanceledError = cancel_CanceledError;
axios.CancelToken = cancel_CancelToken;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = helpers_toFormData;

// Expose AxiosError class
axios.AxiosError = core_AxiosError;

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = spread;

// Expose isAxiosError
axios.isAxiosError = isAxiosError;

// Expose mergeConfig
axios.mergeConfig = mergeConfig;

axios.AxiosHeaders = core_AxiosHeaders;

axios.formToJSON = thing => helpers_formDataToJSON(utils.isHTMLForm(thing) ? new FormData(thing) : thing);

axios.getAdapter = adapters.getAdapter;

axios.HttpStatusCode = helpers_HttpStatusCode;

axios.default = axios;

// this module should only have a default export
/* harmony default export */ const lib_axios = (axios);

;// ./src/index.js




var wallet;

async function connectWallet() {
  // Returns the `window.alephiumProviders.alephium` object after user selects
  // the extension wallet.
  const windowAlephium = await (0,dist/* getDefaultAlephiumWallet */.Ce)()
  // Authenticate user to the current dApp, return the selected account
  const selectedAccount = await windowAlephium?.enable()

  if (windowAlephium && selectedAccount) {
    console.log(selectedAccount);
    wallet = windowAlephium;
  }
  else {
    console.log('connection to alephium wallet failed');
  }
}
window.connectWallet = connectWallet;

async function toAbout(){
    window.location.href = './about.html';
}
window.toAbout = toAbout;

async function toHome(){
    window.location.href = './';
}
window.toHome = toHome;

async function toFunnels(){
    window.location.href = './funnelboard.html';
}
window.toFunnels = toFunnels;

async function toFunnel(){
    window.location.href = './funnel.html';
}
window.toFunnel = toFunnel;

async function a() {
    try {
        const data = {
            payee: '14cLiRion2B2H1aFBbyPraNvWz1SUufiU2cgmWiqBNyAY',
        }
        const response = await lib_axios.post("https://cors-anywhere.herokuapp.com/https://gm-serve3.onrender.com/api/funnalph/agents", {
            data: data,
        });
        console.log(response.data);
    }
    catch (err) {
        console.log(err);
    }
    console.log("hi");
}
window.a = a;
 

async function d() {
    try {
        const data = {
            payee: '14cLiRion2B2H1aFBbyPraNvWz1SUufiU2cgmWiqBNyAY',
        }
        const response = await lib_axios.post("https://gm-serve3.onrender.com/api/funnalph/payee/entries", {
            data: data,
        });
        console.log(response.data);
    }
    catch (err) {
        console.log(err);
    }
    console.log("hi");
}
window.d = d;


async function b() {
try {
        const data = {
            payer: '14cLiRion2B2H1aFBbyPraNvWz1SUufiU2cgmWiqBNyAY',
        }
        const response = await lib_axios.post("https://cors-anywhere.herokuapp.com/https://gm-serve3.onrender.com/api/funnalph/payer/entries", {
            data: data,
        });
        console.log(response.data);
    }
    catch (err) {
        console.log(err);
    }
    console.log("hi");
}
window.b = b;

async function c() {
var now = new Date().toUTCString();
try {
        const data = {
            pId: '14cLiRion2B2H1aFBbyPraNvbmJeks2YaaLr8KhMdacAnW09e0088392',
            payee: '14cLiRion2B2H1aFBbyPraNvWz1SUufiU2cgmWiqBNyAY',
            payer: '18PtRKysjGKNQJijidydDH6bmJeks2YaaLr8KhMdacAnW',
            agent: 'none',
            amount: '7',
            timestamp: now,
        }
        const response = await lib_axios.post("https://cors-anywhere.herokuapp.com/https://gm-serve3.onrender.com/api/funnalph/entry", {
            data: data,
        });
        console.log(response.data);
    }
    catch (err) {
        console.log(err);
    }
    console.log("hi");
}
window.c = c;


async function e() {
    var now = new Date().toUTCString();
    try {
        const data = {
            aId: '14cLiRion2B2H1aFBbyPraNvbmJeks2YaaLr8KhMdacAnW09e0088392',
            payee: '14cLiRion2B2H1aFBbyPraNvWz1SUufiU2cgmWiqBNyAY',
            agent: '18PtRKysjGKNQJijidydDH6bmJeks2YaaLr8KhMdacAnW',
            total: '20',
            timestamp: now,
        }
        const response = await lib_axios.post("https://cors-anywhere.herokuapp.com/https://gm-serve3.onrender.com/api/funnalph/agent/set", {
            data: data,
        });
        console.log(response.data);
    }
    catch (err) {
        console.log(err);
    }
    console.log("hi");
}
window.e = e;


async function f() {
    var flag = false;
    var t = "";
    try {
        const data = {
            payee: '14cLiRion2B2H1aFBbyPraNvWz1SUufiU2cgmWiqBNyAY',
        }
        const response = await lib_axios.post("https://cors-anywhere.herokuapp.com/https://gm-serve3.onrender.com/api/funnalph/agents", {
            data: data,
        });
        var i = 0;
        while (i < response.data.agents.length){
            if (response.data.agents[i].agent == '18PtRKysjGKNQJijidydDH6bmJeks2YaaLr8KhMdacAnW'){
                flag = true;
                t = response.data.agents[i].total;
                break;

            }
            i++;
        }
    }
    catch (err) {
        console.log(err);
    }
    if (!flag){
        throw "agent doesn't exist for payee";
    }
    else {
        try {
            console.log(t);
            const data = {
                payee: '14cLiRion2B2H1aFBbyPraNvWz1SUufiU2cgmWiqBNyAY',
                agent: "18PtRKysjGKNQJijidydDH6bmJeks2YaaLr8KhMdacAnW",
                amount: t,
                added: "7",
            }
            const response = await lib_axios.put("https://cors-anywhere.herokuapp.com/https://gm-serve3.onrender.com/api/funnalph/agent/update", {
                data: data,
            });
        }
        catch (err){
            console.log(err);
        }
    }

}
window.f = f;

})();

/******/ })()
;