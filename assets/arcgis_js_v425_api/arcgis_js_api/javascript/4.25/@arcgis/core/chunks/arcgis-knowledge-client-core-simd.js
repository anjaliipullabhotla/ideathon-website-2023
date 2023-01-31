/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{c as n}from"./_commonjsHelpers.js";function t(n,t){for(var e=0;e<t.length;e++){const r=t[e];if("string"!=typeof r&&!Array.isArray(r))for(const t in r)if("default"!==t&&!(t in n)){const e=Object.getOwnPropertyDescriptor(r,t);e&&Object.defineProperty(n,t,e.get?e:{enumerable:!0,get:()=>r[t]})}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var e,r,a,i={exports:{}};e=i,r="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,a=function(t){var e,a,i;t=t||{},e||(e=void 0!==t?t:{}),e.ready=new Promise((function(n,t){a=n,i=t}));var o=Object.assign({},e),u="./this.program",c="";"undefined"!=typeof document&&document.currentScript&&(c=document.currentScript.src),r&&(c=r),c=0!==c.indexOf("blob:")?c.substr(0,c.replace(/[?#].*/,"").lastIndexOf("/")+1):"";var s,f=e.print||console.log.bind(console),l=e.printErr||console.warn.bind(console);Object.assign(e,o),o=null,e.thisProgram&&(u=e.thisProgram),e.wasmBinary&&(s=e.wasmBinary),e.noExitRuntime,"object"!=typeof WebAssembly&&I("no native wasm support detected");var h,p,d,v,m,y,g,b,w,A,T,_,P=!1,C="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function $(n,t,e){var r=t+e;for(e=t;n[e]&&!(e>=r);)++e;if(16<e-t&&n.buffer&&C)return C.decode(n.subarray(t,e));for(r="";t<e;){var a=n[t++];if(128&a){var i=63&n[t++];if(192==(224&a))r+=String.fromCharCode((31&a)<<6|i);else{var o=63&n[t++];65536>(a=224==(240&a)?(15&a)<<12|i<<6|o:(7&a)<<18|i<<12|o<<6|63&n[t++])?r+=String.fromCharCode(a):(a-=65536,r+=String.fromCharCode(55296|a>>10,56320|1023&a))}}else r+=String.fromCharCode(a)}return r}function k(){var n=h.buffer;p=n,e.HEAP8=d=new Int8Array(n),e.HEAP16=m=new Int16Array(n),e.HEAP32=g=new Int32Array(n),e.HEAPU8=v=new Uint8Array(n),e.HEAPU16=y=new Uint16Array(n),e.HEAPU32=b=new Uint32Array(n),e.HEAPF32=w=new Float32Array(n),e.HEAPF64=_=new Float64Array(n),e.HEAP64=A=new BigInt64Array(n),e.HEAPU64=T=new BigUint64Array(n)}var W,j=[],E=[],O=[];function S(){var n=e.preRun.shift();j.unshift(n)}var F,U=0,R=null;function I(n){throw e.onAbort&&e.onAbort(n),l(n="Aborted("+n+")"),P=!0,n=new WebAssembly.RuntimeError(n+". Build with -sASSERTIONS for more info."),i(n),n}function x(){return F.startsWith("data:application/octet-stream;base64,")}if(F="arcgis-knowledge-client-core-simd.wasm",!x()){var V=F;F=e.locateFile?e.locateFile(V,c):c+V}function H(){var n=F;try{if(n==F&&s)return new Uint8Array(s);throw"both async and sync fetching of the wasm failed"}catch(n){I(n)}}function B(n){for(;0<n.length;)n.shift()(e)}function D(n){this.da=n-24,this.Oa=function(n){b[this.da+4>>2]=n},this.Fa=function(n){b[this.da+8>>2]=n},this.Ga=function(){g[this.da>>2]=0},this.Ca=function(){d[this.da+12>>0]=0},this.Ia=function(){d[this.da+13>>0]=0},this.za=function(n,t){this.Aa(),this.Oa(n),this.Fa(t),this.Ga(),this.Ca(),this.Ia()},this.Aa=function(){b[this.da+16>>2]=0}}var z={};function M(n){for(;n.length;){var t=n.pop();n.pop()(t)}}function N(n){return this.fromWireType(g[n>>2])}var q={},L={},G={};function J(n){if(void 0===n)return"_unknown";var t=(n=n.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return 48<=t&&57>=t?"_"+n:n}function K(n,t){return n=J(n),function(){return t.apply(this,arguments)}}function Q(n){var t=Error,e=K(n,(function(t){this.name=n,this.message=t,void 0!==(t=Error(t).stack)&&(this.stack=this.toString()+"\n"+t.replace(/^Error(:[^\n]*)?\n/,""))}));return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},e}var X=void 0;function Y(n){throw new X(n)}function Z(n,t,e){function r(t){(t=e(t)).length!==n.length&&Y("Mismatched type converter count");for(var r=0;r<n.length;++r)on(n[r],t[r])}n.forEach((function(n){G[n]=t}));var a=Array(t.length),i=[],o=0;t.forEach(((n,t)=>{L.hasOwnProperty(n)?a[t]=L[n]:(i.push(n),q.hasOwnProperty(n)||(q[n]=[]),q[n].push((()=>{a[t]=L[n],++o===i.length&&r(a)})))})),0===i.length&&r(a)}function nn(n){if(null===n)return"null";var t=typeof n;return"object"===t||"array"===t||"function"===t?n.toString():""+n}var tn=void 0;function en(n){for(var t="";v[n];)t+=tn[v[n++]];return t}var rn=void 0;function an(n){throw new rn(n)}function on(n,t,e={}){if(!("argPackAdvance"in t))throw new TypeError("registerType registeredInstance requires argPackAdvance");var r=t.name;if(n||an('type "'+r+'" must have a positive integer typeid pointer'),L.hasOwnProperty(n)){if(e.Pa)return;an("Cannot register type '"+r+"' twice")}L[n]=t,delete G[n],q.hasOwnProperty(n)&&(t=q[n],delete q[n],t.forEach((n=>n())))}function un(n,t,e){switch(t){case 0:return e?function(n){return d[n]}:function(n){return v[n]};case 1:return e?function(n){return m[n>>1]}:function(n){return y[n>>1]};case 2:return e?function(n){return g[n>>2]}:function(n){return b[n>>2]};case 3:return e?function(n){return A[n>>3]}:function(n){return T[n>>3]};default:throw new TypeError("Unknown integer type: "+n)}}function cn(n){switch(n){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+n)}}function sn(n){an(n.ba.ea.ca.name+" instance already deleted")}var fn=!1;function ln(){}function hn(n){--n.count.value,0===n.count.value&&(n.ga?n.ia.ka(n.ga):n.ea.ca.ka(n.da))}function pn(n,t,e){return t===e?n:void 0===e.ja||null===(n=pn(n,t,e.ja))?null:e.Ea(n)}var dn={},vn=[];function mn(){for(;vn.length;){var n=vn.pop();n.ba.oa=!1,n.delete()}}var yn=void 0,gn={};function bn(n,t){return t.ea&&t.da||Y("makeClassHandle requires ptr and ptrType"),!!t.ia!=!!t.ga&&Y("Both smartPtrType and smartPtr must be specified"),t.count={value:1},wn(Object.create(n,{ba:{value:t}}))}function wn(n){return"undefined"==typeof FinalizationRegistry?(wn=n=>n,n):(fn=new FinalizationRegistry((n=>{hn(n.ba)})),ln=n=>{fn.unregister(n)},(wn=n=>{var t=n.ba;return t.ga&&fn.register(n,{ba:t},n),n})(n))}function An(){}function Tn(n,t,e){if(void 0===n[t].fa){var r=n[t];n[t]=function(){return n[t].fa.hasOwnProperty(arguments.length)||an("Function '"+e+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+n[t].fa+")!"),n[t].fa[arguments.length].apply(this,arguments)},n[t].fa=[],n[t].fa[r.na]=r}}function _n(n,t,r){e.hasOwnProperty(n)?((void 0===r||void 0!==e[n].fa&&void 0!==e[n].fa[r])&&an("Cannot register public name '"+n+"' twice"),Tn(e,n,n),e.hasOwnProperty(r)&&an("Cannot register multiple overloads of a function with the same number of arguments ("+r+")!"),e[n].fa[r]=t):(e[n]=t,void 0!==r&&(e[n].Ya=r))}function Pn(n,t,e,r,a,i,o,u){this.name=n,this.constructor=t,this.la=e,this.ka=r,this.ja=a,this.Ja=i,this.qa=o,this.Ea=u,this.Sa=[]}function Cn(n,t,e){for(;t!==e;)t.qa||an("Expected null or instance of "+e.name+", got an instance of "+t.name),n=t.qa(n),t=t.ja;return n}function $n(n,t){return null===t?(this.ta&&an("null is not a valid "+this.name),0):(t.ba||an('Cannot pass "'+nn(t)+'" as a '+this.name),t.ba.da||an("Cannot pass deleted object as a pointer of type "+this.name),Cn(t.ba.da,t.ba.ea.ca,this.ca))}function kn(n,t){if(null===t){if(this.ta&&an("null is not a valid "+this.name),this.sa){var e=this.ua();return null!==n&&n.push(this.ka,e),e}return 0}if(t.ba||an('Cannot pass "'+nn(t)+'" as a '+this.name),t.ba.da||an("Cannot pass deleted object as a pointer of type "+this.name),!this.ra&&t.ba.ea.ra&&an("Cannot convert argument of type "+(t.ba.ia?t.ba.ia.name:t.ba.ea.name)+" to parameter type "+this.name),e=Cn(t.ba.da,t.ba.ea.ca,this.ca),this.sa)switch(void 0===t.ba.ga&&an("Passing raw pointer to smart pointer is illegal"),this.Xa){case 0:t.ba.ia===this?e=t.ba.ga:an("Cannot convert argument of type "+(t.ba.ia?t.ba.ia.name:t.ba.ea.name)+" to parameter type "+this.name);break;case 1:e=t.ba.ga;break;case 2:if(t.ba.ia===this)e=t.ba.ga;else{var r=t.clone();e=this.Ta(e,Mn((function(){r.delete()}))),null!==n&&n.push(this.ka,e)}break;default:an("Unsupporting sharing policy")}return e}function Wn(n,t){return null===t?(this.ta&&an("null is not a valid "+this.name),0):(t.ba||an('Cannot pass "'+nn(t)+'" as a '+this.name),t.ba.da||an("Cannot pass deleted object as a pointer of type "+this.name),t.ba.ea.ra&&an("Cannot convert argument of type "+t.ba.ea.name+" to parameter type "+this.name),Cn(t.ba.da,t.ba.ea.ca,this.ca))}function jn(n,t,e,r,a,i,o,u,c,s,f){this.name=n,this.ca=t,this.ta=e,this.ra=r,this.sa=a,this.Ra=i,this.Xa=o,this.ya=u,this.ua=c,this.Ta=s,this.ka=f,a||void 0!==t.ja?this.toWireType=kn:(this.toWireType=r?$n:Wn,this.ha=null)}function En(n,t,r){e.hasOwnProperty(n)||Y("Replacing nonexistant public symbol"),void 0!==e[n].fa&&void 0!==r?e[n].fa[r]=t:(e[n]=t,e[n].na=r)}var On=[];function Sn(n,t){n=en(n);var e=On[t];return e||(t>=On.length&&(On.length=t+1),On[t]=e=W.get(t)),"function"!=typeof e&&an("unknown function pointer with signature "+n+": "+t),e}var Fn=void 0;function Un(n){var t=en(n=yt(n));return mt(n),t}function Rn(n,t){var e=[],r={};throw t.forEach((function n(t){r[t]||L[t]||(G[t]?G[t].forEach(n):(e.push(t),r[t]=!0))})),new Fn(n+": "+e.map(Un).join([", "]))}function In(n,t,e,r,a){var i=t.length;2>i&&an("argTypes array size mismatch! Must at least get return value and 'this' types!");var o=null!==t[1]&&null!==e,u=!1;for(e=1;e<t.length;++e)if(null!==t[e]&&void 0===t[e].ha){u=!0;break}var c="void"!==t[0].name,s=i-2,f=Array(s),l=[],h=[];return function(){if(arguments.length!==s&&an("function "+n+" called with "+arguments.length+" arguments, expected "+s+" args!"),h.length=0,l.length=o?2:1,l[0]=a,o){var e=t[1].toWireType(h,this);l[1]=e}for(var i=0;i<s;++i)f[i]=t[i+2].toWireType(h,arguments[i]),l.push(f[i]);if(i=r.apply(null,l),u)M(h);else for(var p=o?1:2;p<t.length;p++){var d=1===p?e:f[p-2];null!==t[p].ha&&t[p].ha(d)}return c?t[0].fromWireType(i):void 0}}function xn(n,t){for(var e=[],r=0;r<n;r++)e.push(b[t+4*r>>2]);return e}function Vn(n,t,e){return n instanceof Object||an(e+' with invalid "this": '+n),n instanceof t.ca.constructor||an(e+' incompatible with "this" of type '+n.constructor.name),n.ba.da||an("cannot call emscripten binding method "+e+" on deleted object"),Cn(n.ba.da,n.ba.ea.ca,t.ca)}var Hn=[],Bn=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Dn(n){4<n&&0==--Bn[n].va&&(Bn[n]=void 0,Hn.push(n))}var zn=n=>(n||an("Cannot use deleted val. handle = "+n),Bn[n].value),Mn=n=>{switch(n){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var t=Hn.length?Hn.pop():Bn.length;return Bn[t]={va:1,value:n},t}};function Nn(n,t,e){switch(t){case 0:return function(n){return this.fromWireType((e?d:v)[n])};case 1:return function(n){return this.fromWireType((e?m:y)[n>>1])};case 2:return function(n){return this.fromWireType((e?g:b)[n>>2])};default:throw new TypeError("Unknown integer type: "+n)}}function qn(n,t){var e=L[n];return void 0===e&&an(t+" has unknown type "+Un(n)),e}function Ln(n,t){switch(t){case 2:return function(n){return this.fromWireType(w[n>>2])};case 3:return function(n){return this.fromWireType(_[n>>3])};default:throw new TypeError("Unknown float type: "+n)}}var Gn="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function Jn(n,t){for(var e=n>>1,r=e+t/2;!(e>=r)&&y[e];)++e;if(32<(e<<=1)-n&&Gn)return Gn.decode(v.subarray(n,e));for(e="",r=0;!(r>=t/2);++r){var a=m[n+2*r>>1];if(0==a)break;e+=String.fromCharCode(a)}return e}function Kn(n,t,e){if(void 0===e&&(e=2147483647),2>e)return 0;var r=t;e=(e-=2)<2*n.length?e/2:n.length;for(var a=0;a<e;++a)m[t>>1]=n.charCodeAt(a),t+=2;return m[t>>1]=0,t-r}function Qn(n){return 2*n.length}function Xn(n,t){for(var e=0,r="";!(e>=t/4);){var a=g[n+4*e>>2];if(0==a)break;++e,65536<=a?(a-=65536,r+=String.fromCharCode(55296|a>>10,56320|1023&a)):r+=String.fromCharCode(a)}return r}function Yn(n,t,e){if(void 0===e&&(e=2147483647),4>e)return 0;var r=t;e=r+e-4;for(var a=0;a<n.length;++a){var i=n.charCodeAt(a);if(55296<=i&&57343>=i&&(i=65536+((1023&i)<<10)|1023&n.charCodeAt(++a)),g[t>>2]=i,(t+=4)+4>e)break}return g[t>>2]=0,t-r}function Zn(n){for(var t=0,e=0;e<n.length;++e){var r=n.charCodeAt(e);55296<=r&&57343>=r&&++e,t+=4}return t}function nt(n,t){for(var e=Array(n),r=0;r<n;++r)e[r]=qn(b[t+4*r>>2],"parameter "+r);return e}var tt={};function et(n){var t=tt[n];return void 0===t?en(n):t}var rt=[];function at(){function t(n){n.$$$embind_global$$$=n;var t="object"==typeof $$$embind_global$$$&&n.$$$embind_global$$$==n;return t||delete n.$$$embind_global$$$,t}if("object"==typeof globalThis)return globalThis;if("object"==typeof $$$embind_global$$$)return $$$embind_global$$$;if("object"==typeof n&&t(n)?$$$embind_global$$$=n:"object"==typeof self&&t(self)&&($$$embind_global$$$=self),"object"==typeof $$$embind_global$$$)return $$$embind_global$$$;throw Error("unable to get global object.")}var it=[],ot={},ut={};function ct(){if(!st){var n,t={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:u||"./this.program"};for(n in ut)void 0===ut[n]?delete t[n]:t[n]=ut[n];var e=[];for(n in t)e.push(n+"="+t[n]);st=e}return st}var st,ft=[null,[],[]];X=e.InternalError=Q("InternalError");for(var lt=Array(256),ht=0;256>ht;++ht)lt[ht]=String.fromCharCode(ht);tn=lt,rn=e.BindingError=Q("BindingError"),An.prototype.isAliasOf=function(n){if(!(this instanceof An&&n instanceof An))return!1;var t=this.ba.ea.ca,e=this.ba.da,r=n.ba.ea.ca;for(n=n.ba.da;t.ja;)e=t.qa(e),t=t.ja;for(;r.ja;)n=r.qa(n),r=r.ja;return t===r&&e===n},An.prototype.clone=function(){if(this.ba.da||sn(this),this.ba.pa)return this.ba.count.value+=1,this;var n=wn,t=Object,e=t.create,r=Object.getPrototypeOf(this),a=this.ba;return(n=n(e.call(t,r,{ba:{value:{count:a.count,oa:a.oa,pa:a.pa,da:a.da,ea:a.ea,ga:a.ga,ia:a.ia}}}))).ba.count.value+=1,n.ba.oa=!1,n},An.prototype.delete=function(){this.ba.da||sn(this),this.ba.oa&&!this.ba.pa&&an("Object already scheduled for deletion"),ln(this),hn(this.ba),this.ba.pa||(this.ba.ga=void 0,this.ba.da=void 0)},An.prototype.isDeleted=function(){return!this.ba.da},An.prototype.deleteLater=function(){return this.ba.da||sn(this),this.ba.oa&&!this.ba.pa&&an("Object already scheduled for deletion"),vn.push(this),1===vn.length&&yn&&yn(mn),this.ba.oa=!0,this},e.getInheritedInstanceCount=function(){return Object.keys(gn).length},e.getLiveInheritedInstances=function(){var n,t=[];for(n in gn)gn.hasOwnProperty(n)&&t.push(gn[n]);return t},e.flushPendingDeletes=mn,e.setDelayFunction=function(n){yn=n,vn.length&&yn&&yn(mn)},jn.prototype.Ka=function(n){return this.ya&&(n=this.ya(n)),n},jn.prototype.wa=function(n){this.ka&&this.ka(n)},jn.prototype.argPackAdvance=8,jn.prototype.readValueFromPointer=N,jn.prototype.deleteObject=function(n){null!==n&&n.delete()},jn.prototype.fromWireType=function(n){function t(){return this.sa?bn(this.ca.la,{ea:this.Ra,da:e,ia:this,ga:n}):bn(this.ca.la,{ea:this,da:n})}var e=this.Ka(n);if(!e)return this.wa(n),null;var r=function(n,t){for(void 0===t&&an("ptr should not be undefined");n.ja;)t=n.qa(t),n=n.ja;return gn[t]}(this.ca,e);if(void 0!==r)return 0===r.ba.count.value?(r.ba.da=e,r.ba.ga=n,r.clone()):(r=r.clone(),this.wa(n),r);if(r=this.ca.Ja(e),!(r=dn[r]))return t.call(this);r=this.ra?r.Ba:r.pointerType;var a=pn(e,this.ca,r.ca);return null===a?t.call(this):this.sa?bn(r.ca.la,{ea:r,da:a,ia:this,ga:n}):bn(r.ca.la,{ea:r,da:a})},Fn=e.UnboundTypeError=Q("UnboundTypeError"),e.count_emval_handles=function(){for(var n=0,t=5;t<Bn.length;++t)void 0!==Bn[t]&&++n;return n},e.get_first_emval=function(){for(var n=5;n<Bn.length;++n)if(void 0!==Bn[n])return Bn[n];return null};var pt={j:function(n){return vt(n+24)+24},i:function(n,t,e){throw new D(n).za(t,e),n},t:function(n){var t=z[n];delete z[n];var e=t.ua,r=t.ka,a=t.xa;Z([n],a.map((n=>n.Na)).concat(a.map((n=>n.Va))),(n=>{var i={};return a.forEach(((t,e)=>{var r=n[e],o=t.La,u=t.Ma,c=n[e+a.length],s=t.Ua,f=t.Wa;i[t.Ha]={read:n=>r.fromWireType(o(u,n)),write:(n,t)=>{var e=[];s(f,n,c.toWireType(e,t)),M(e)}}})),[{name:t.name,fromWireType:function(n){var t,e={};for(t in i)e[t]=i[t].read(n);return r(n),e},toWireType:function(n,t){for(var a in i)if(!(a in t))throw new TypeError('Missing field:  "'+a+'"');var o=e();for(a in i)i[a].write(o,t[a]);return null!==n&&n.push(r,o),o},argPackAdvance:8,readValueFromPointer:N,ha:r}]}))},B:function(n,t,e,r,a){t=en(t),e=cn(e);var i=-1!=t.indexOf("u");i&&(a=(1n<<64n)-1n),on(n,{name:t,fromWireType:function(n){return n},toWireType:function(n,e){if("bigint"!=typeof e&&"number"!=typeof e)throw new TypeError('Cannot convert "'+nn(e)+'" to '+this.name);if(e<r||e>a)throw new TypeError('Passing a number "'+nn(e)+'" from JS side to C/C++ side to an argument of type "'+t+'", which is outside the valid range ['+r+", "+a+"]!");return e},argPackAdvance:8,readValueFromPointer:un(t,e,!i),ha:null})},Q:function(n,t,e,r,a){var i=cn(e);on(n,{name:t=en(t),fromWireType:function(n){return!!n},toWireType:function(n,t){return t?r:a},argPackAdvance:8,readValueFromPointer:function(n){if(1===e)var r=d;else if(2===e)r=m;else{if(4!==e)throw new TypeError("Unknown boolean type size: "+t);r=g}return this.fromWireType(r[n>>i])},ha:null})},f:function(n,t,e,r,a,i,o,u,c,s,f,l,h){f=en(f),i=Sn(a,i),u&&(u=Sn(o,u)),s&&(s=Sn(c,s)),h=Sn(l,h);var p=J(f);_n(p,(function(){Rn("Cannot construct "+f+" due to unbound types",[r])})),Z([n,t,e],r?[r]:[],(function(t){if(t=t[0],r)var e=t.ca,a=e.la;else a=An.prototype;t=K(p,(function(){if(Object.getPrototypeOf(this)!==o)throw new rn("Use 'new' to construct "+f);if(void 0===c.ma)throw new rn(f+" has no accessible constructor");var n=c.ma[arguments.length];if(void 0===n)throw new rn("Tried to invoke ctor of "+f+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(c.ma).toString()+") parameters instead!");return n.apply(this,arguments)}));var o=Object.create(a,{constructor:{value:t}});t.prototype=o;var c=new Pn(f,t,o,h,e,i,u,s);e=new jn(f,c,!0,!1,!1),a=new jn(f+"*",c,!1,!1,!1);var l=new jn(f+" const*",c,!1,!0,!1);return dn[n]={pointerType:a,Ba:l},En(p,t),[e,a,l]}))},F:function(n,t,e,r,a,i,o){var u=xn(e,r);t=en(t),i=Sn(a,i),Z([],[n],(function(n){function r(){Rn("Cannot call "+a+" due to unbound types",u)}var a=(n=n[0]).name+"."+t;t.startsWith("@@")&&(t=Symbol[t.substring(2)]);var c=n.ca.constructor;return void 0===c[t]?(r.na=e-1,c[t]=r):(Tn(c,t,a),c[t].fa[e-1]=r),Z([],u,(function(n){return n=In(a,[n[0],null].concat(n.slice(1)),null,i,o),void 0===c[t].fa?(n.na=e-1,c[t]=n):c[t].fa[e-1]=n,[]})),[]}))},p:function(n,t,e,r,a,i){0<t||I();var o=xn(t,e);a=Sn(r,a),Z([],[n],(function(n){var e="constructor "+(n=n[0]).name;if(void 0===n.ca.ma&&(n.ca.ma=[]),void 0!==n.ca.ma[t-1])throw new rn("Cannot register multiple constructors with identical number of parameters ("+(t-1)+") for class '"+n.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return n.ca.ma[t-1]=()=>{Rn("Cannot construct "+n.name+" due to unbound types",o)},Z([],o,(function(r){return r.splice(1,0,null),n.ca.ma[t-1]=In(e,r,null,a,i),[]})),[]}))},c:function(n,t,e,r,a,i,o,u){var c=xn(e,r);t=en(t),i=Sn(a,i),Z([],[n],(function(n){function r(){Rn("Cannot call "+a+" due to unbound types",c)}var a=(n=n[0]).name+"."+t;t.startsWith("@@")&&(t=Symbol[t.substring(2)]),u&&n.ca.Sa.push(t);var s=n.ca.la,f=s[t];return void 0===f||void 0===f.fa&&f.className!==n.name&&f.na===e-2?(r.na=e-2,r.className=n.name,s[t]=r):(Tn(s,t,a),s[t].fa[e-2]=r),Z([],c,(function(r){return r=In(a,r,n,i,o),void 0===s[t].fa?(r.na=e-2,s[t]=r):s[t].fa[e-2]=r,[]})),[]}))},b:function(n,t,e,r,a,i,o,u,c,s){t=en(t),a=Sn(r,a),Z([],[n],(function(n){var r=(n=n[0]).name+"."+t,f={get:function(){Rn("Cannot access "+r+" due to unbound types",[e,o])},enumerable:!0,configurable:!0};return f.set=c?()=>{Rn("Cannot access "+r+" due to unbound types",[e,o])}:()=>{an(r+" is a read-only property")},Object.defineProperty(n.ca.la,t,f),Z([],c?[e,o]:[e],(function(e){var o=e[0],f={get:function(){var t=Vn(this,n,r+" getter");return o.fromWireType(a(i,t))},enumerable:!0};if(c){c=Sn(u,c);var l=e[1];f.set=function(t){var e=Vn(this,n,r+" setter"),a=[];c(s,e,l.toWireType(a,t)),M(a)}}return Object.defineProperty(n.ca.la,t,f),[]})),[]}))},P:function(n,t){on(n,{name:t=en(t),fromWireType:function(n){var t=zn(n);return Dn(n),t},toWireType:function(n,t){return Mn(t)},argPackAdvance:8,readValueFromPointer:N,ha:null})},s:function(n,t,e,r){function a(){}e=cn(e),t=en(t),a.values={},on(n,{name:t,constructor:a,fromWireType:function(n){return this.constructor.values[n]},toWireType:function(n,t){return t.value},argPackAdvance:8,readValueFromPointer:Nn(t,e,r),ha:null}),_n(t,a)},e:function(n,t,e){var r=qn(n,"enum");t=en(t),n=r.constructor,r=Object.create(r.constructor.prototype,{value:{value:e},constructor:{value:K(r.name+"_"+t,(function(){}))}}),n.values[e]=r,n[t]=r},A:function(n,t,e){e=cn(e),on(n,{name:t=en(t),fromWireType:function(n){return n},toWireType:function(n,t){return t},argPackAdvance:8,readValueFromPointer:Ln(t,e),ha:null})},T:function(n,t,e,r,a,i){var o=xn(t,e);n=en(n),a=Sn(r,a),_n(n,(function(){Rn("Cannot call "+n+" due to unbound types",o)}),t-1),Z([],o,(function(e){return En(n,In(n,[e[0],null].concat(e.slice(1)),null,a,i),t-1),[]}))},q:function(n,t,e,r,a){t=en(t),-1===a&&(a=4294967295),a=cn(e);var i=n=>n;if(0===r){var o=32-8*e;i=n=>n<<o>>>o}e=t.includes("unsigned")?function(n,t){return t>>>0}:function(n,t){return t},on(n,{name:t,fromWireType:i,toWireType:e,argPackAdvance:8,readValueFromPointer:un(t,a,0!==r),ha:null})},l:function(n,t,e){function r(n){var t=b;return new a(p,t[1+(n>>=2)],t[n])}var a=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][t];on(n,{name:e=en(e),fromWireType:r,argPackAdvance:8,readValueFromPointer:r},{Pa:!0})},k:function(n,t,e,r,a,i,o,u,c,s,f,l){e=en(e),i=Sn(a,i),u=Sn(o,u),s=Sn(c,s),l=Sn(f,l),Z([n],[t],(function(n){return n=n[0],[new jn(e,n.ca,!1,!1,!0,n,r,i,u,s,l)]}))},C:function(n,t){var e="std::string"===(t=en(t));on(n,{name:t,fromWireType:function(n){var t=b[n>>2],r=n+4;if(e)for(var a=r,i=0;i<=t;++i){var o=r+i;if(i==t||0==v[o]){if(a=a?$(v,a,o-a):"",void 0===u)var u=a;else u+=String.fromCharCode(0),u+=a;a=o+1}}else{for(u=Array(t),i=0;i<t;++i)u[i]=String.fromCharCode(v[r+i]);u=u.join("")}return mt(n),u},toWireType:function(n,t){t instanceof ArrayBuffer&&(t=new Uint8Array(t));var r,a,i="string"==typeof t;if(i||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int8Array||an("Cannot pass non-string to std::string"),e&&i)for(r=a=0;r<t.length;++r){var o=t.charCodeAt(r);127>=o?a++:2047>=o?a+=2:55296<=o&&57343>=o?(a+=4,++r):a+=3}else a=t.length;if(o=(a=vt(4+(r=a)+1))+4,b[a>>2]=r,e&&i){if(i=o,o=r+1,r=v,0<o){o=i+o-1;for(var u=0;u<t.length;++u){var c=t.charCodeAt(u);if(55296<=c&&57343>=c&&(c=65536+((1023&c)<<10)|1023&t.charCodeAt(++u)),127>=c){if(i>=o)break;r[i++]=c}else{if(2047>=c){if(i+1>=o)break;r[i++]=192|c>>6}else{if(65535>=c){if(i+2>=o)break;r[i++]=224|c>>12}else{if(i+3>=o)break;r[i++]=240|c>>18,r[i++]=128|c>>12&63}r[i++]=128|c>>6&63}r[i++]=128|63&c}}r[i]=0}}else if(i)for(i=0;i<r;++i)255<(u=t.charCodeAt(i))&&(mt(o),an("String has UTF-16 code units that do not fit in 8 bits")),v[o+i]=u;else for(i=0;i<r;++i)v[o+i]=t[i];return null!==n&&n.push(mt,a),a},argPackAdvance:8,readValueFromPointer:N,ha:function(n){mt(n)}})},x:function(n,t,e){if(e=en(e),2===t)var r=Jn,a=Kn,i=Qn,o=()=>y,u=1;else 4===t&&(r=Xn,a=Yn,i=Zn,o=()=>b,u=2);on(n,{name:e,fromWireType:function(n){for(var e,a=b[n>>2],i=o(),c=n+4,s=0;s<=a;++s){var f=n+4+s*t;s!=a&&0!=i[f>>u]||(c=r(c,f-c),void 0===e?e=c:(e+=String.fromCharCode(0),e+=c),c=f+t)}return mt(n),e},toWireType:function(n,r){"string"!=typeof r&&an("Cannot pass non-string to C++ string type "+e);var o=i(r),c=vt(4+o+t);return b[c>>2]=o>>u,a(r,c+4,o+t),null!==n&&n.push(mt,c),c},argPackAdvance:8,readValueFromPointer:N,ha:function(n){mt(n)}})},u:function(n,t,e,r,a,i){z[n]={name:en(t),ua:Sn(e,r),ka:Sn(a,i),xa:[]}},h:function(n,t,e,r,a,i,o,u,c,s){z[n].xa.push({Ha:en(t),Na:e,La:Sn(r,a),Ma:i,Va:o,Ua:Sn(u,c),Wa:s})},R:function(n,t){on(n,{Qa:!0,name:t=en(t),argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},n:function(n,t,e){n=zn(n),t=qn(t,"emval::as");var r=[],a=Mn(r);return b[e>>2]=a,t.toWireType(r,n)},U:function(n,t,e,r){n=zn(n),e=nt(t,e);for(var a=Array(t),i=0;i<t;++i){var o=e[i];a[i]=o.readValueFromPointer(r),r+=o.argPackAdvance}return n=n.apply(void 0,a),Mn(n)},S:function(n,t,e,r,a){n=rt[n],t=zn(t),e=et(e);var i=[];return b[r>>2]=Mn(i),n(t,e,i,a)},E:function(n,t,e,r){(n=rt[n])(t=zn(t),e=et(e),null,r)},a:Dn,v:function(n){return 0===n?Mn(at()):(n=et(n),Mn(at()[n]))},y:function(n,t){var e=nt(n,t),r=e[0];t=r.name+"_$"+e.slice(1).map((function(n){return n.name})).join("_")+"$";var a=it[t];if(void 0!==a)return a;var i=Array(n-1);return a=function(n){var t=rt.length;return rt.push(n),t}(((t,a,o,u)=>{for(var c=0,s=0;s<n-1;++s)i[s]=e[s+1].readValueFromPointer(u+c),c+=e[s+1].argPackAdvance;for(t=t[a].apply(t,i),s=0;s<n-1;++s)e[s+1].Da&&e[s+1].Da(i[s]);if(!r.Qa)return r.toWireType(o,t)})),it[t]=a},r:function(n,t){return n=zn(n),t=zn(t),Mn(n[t])},g:function(n){4<n&&(Bn[n].va+=1)},H:function(n,t){return(n=zn(n))instanceof zn(t)},N:function(n){return"number"==typeof(n=zn(n))},D:function(n){return"string"==typeof(n=zn(n))},G:function(n,t,e,r){n=zn(n);var a=ot[t];return a||(a=function(n){var t=Array(n+1);return function(e,r,a){t[0]=e;for(var i=0;i<n;++i){var o=qn(b[r+4*i>>2],"parameter "+i);t[i+1]=o.readValueFromPointer(a),a+=o.argPackAdvance}return e=new(e.bind.apply(e,t)),Mn(e)}}(t),ot[t]=a),a(n,e,r)},o:function(n){return Mn(et(n))},m:function(n){M(zn(n)),Dn(n)},d:function(n,t){return n=(n=qn(n,"_emval_take_value")).readValueFromPointer(t),Mn(n)},z:function(){I("")},K:function(n,t,e){v.copyWithin(n,t,t+e)},w:function(n){var t=v.length;if(2147483648<(n>>>=0))return!1;for(var e=1;4>=e;e*=2){var r=t*(1+.2/e);r=Math.min(r,n+100663296);var a=Math;r=Math.max(n,r),a=a.min.call(a,2147483648,r+(65536-r%65536)%65536);n:{try{h.grow(a-p.byteLength+65535>>>16),k();var i=1;break n}catch(n){}i=void 0}if(i)return!0}return!1},I:function(n,t){var e=0;return ct().forEach((function(r,a){var i=t+e;for(a=b[n+4*a>>2]=i,i=0;i<r.length;++i)d[a++>>0]=r.charCodeAt(i);d[a>>0]=0,e+=r.length+1})),0},J:function(n,t){var e=ct();b[n>>2]=e.length;var r=0;return e.forEach((function(n){r+=n.length+1})),b[t>>2]=r,0},O:function(){return 52},M:function(){return 70},L:function(n,t,e,r){for(var a=0,i=0;i<e;i++){var o=b[t>>2],u=b[t+4>>2];t+=8;for(var c=0;c<u;c++){var s=v[o+c],h=ft[n];0===s||10===s?((1===n?f:l)($(h,0)),h.length=0):h.push(s)}a+=u}return b[r>>2]=a,0}};!function(){function n(n){e.asm=n.exports,h=e.asm.V,k(),W=e.asm.$,E.unshift(e.asm.W),U--,e.monitorRunDependencies&&e.monitorRunDependencies(U),0==U&&R&&(n=R,R=null,n())}function t(t){n(t.instance)}function r(n){return(s||"function"!=typeof fetch?Promise.resolve().then((function(){return H()})):fetch(F,{credentials:"same-origin"}).then((function(n){if(!n.ok)throw"failed to load wasm binary file at '"+F+"'";return n.arrayBuffer()})).catch((function(){return H()}))).then((function(n){return WebAssembly.instantiate(n,a)})).then((function(n){return n})).then(n,(function(n){l("failed to asynchronously prepare wasm: "+n),I(n)}))}var a={a:pt};if(U++,e.monitorRunDependencies&&e.monitorRunDependencies(U),e.instantiateWasm)try{return e.instantiateWasm(a,n)}catch(n){return l("Module.instantiateWasm callback failed with error: "+n),!1}(s||"function"!=typeof WebAssembly.instantiateStreaming||x()||"function"!=typeof fetch?r(t):fetch(F,{credentials:"same-origin"}).then((function(n){return WebAssembly.instantiateStreaming(n,a).then(t,(function(n){return l("wasm streaming compile failed: "+n),l("falling back to ArrayBuffer instantiation"),r(t)}))}))).catch(i)}(),e.___wasm_call_ctors=function(){return(e.___wasm_call_ctors=e.asm.W).apply(null,arguments)};var dt,vt=e._malloc=function(){return(vt=e._malloc=e.asm.X).apply(null,arguments)},mt=e._free=function(){return(mt=e._free=e.asm.Y).apply(null,arguments)},yt=e.___getTypeName=function(){return(yt=e.___getTypeName=e.asm.Z).apply(null,arguments)};function gt(){function n(){if(!dt&&(dt=!0,e.calledRun=!0,!P)){if(B(E),a(e),e.onRuntimeInitialized&&e.onRuntimeInitialized(),e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var n=e.postRun.shift();O.unshift(n)}B(O)}}if(!(0<U)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)S();B(j),0<U||(e.setStatus?(e.setStatus("Running..."),setTimeout((function(){setTimeout((function(){e.setStatus("")}),1),n()}),1)):n())}}if(e.__embind_initialize_bindings=function(){return(e.__embind_initialize_bindings=e.asm._).apply(null,arguments)},e.___cxa_is_pointer_type=function(){return(e.___cxa_is_pointer_type=e.asm.aa).apply(null,arguments)},R=function n(){dt||gt(),dt||(R=n)},e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();return gt(),t.ready},e.exports=a;const o=t({__proto__:null,default:i.exports},[i.exports]);export{o as a};
