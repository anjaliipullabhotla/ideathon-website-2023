// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports"],function(f){function C(a){if(null==a)return void 0===a?"[object Undefined]":"[object Null]";if(D&&D in Object(a)){var c=M.call(a,m),d=a[m];try{a[m]=void 0;var n=!0}catch(p){}var w=N.call(a);n&&(c?a[m]=d:delete a[m]);a=w}else a=O.call(a);return a}function E(a){return null!=a&&"object"==typeof a}function F(a){return"symbol"==typeof a||E(a)&&"[object Symbol]"==C(a)}function x(a){var c=typeof a;return null!=a&&("object"==c||"function"==c)}function G(a){if("number"==typeof a)return a;
if(F(a))return H;x(a)&&(a="function"==typeof a.valueOf?a.valueOf():a,a=x(a)?a+"":a);if("string"!=typeof a)return 0===a?a:+a;if(a){for(var c=a.slice,d=a.length;d--&&P.test(a.charAt(d)););a=c.call(a,0,d+1).replace(Q,"")}return(c=R.test(a))||S.test(a)?T(a.slice(2),c?2:8):U.test(a)?H:+a}var I="object"==typeof global&&global&&global.Object===Object&&global,h="object"==typeof self&&self&&self.Object===Object&&self,q=I||h||Function("return this")();h=q.Symbol;var J=Object.prototype,M=J.hasOwnProperty,N=
J.toString,m=h?h.toStringTag:void 0,O=Object.prototype.toString,D=h?h.toStringTag:void 0,P=/\s/,Q=/^\s+/,H=0/0,U=/^[-+]0x[0-9a-f]+$/i,R=/^0b[01]+$/i,S=/^0o[0-7]+$/i,T=parseInt,V=Math.max,W=Math.min;f.Symbol=h;f.baseGetTag=C;f.debounce=function(a,c,d){function n(b){var g=l,t=r;l=r=void 0;u=b;return v=a.apply(t,g)}function w(b){var g=b-k;b-=u;return void 0===k||g>=c||0>g||y&&b>=z}function p(){var b=q.Date.now();if(w(b))return K(b);var g=setTimeout;var t=b-u;b=c-(b-k);t=y?W(b,z-t):b;e=g(p,t)}function K(b){e=
void 0;if(A&&l)return n(b);l=r=void 0;return v}function B(){var b=q.Date.now(),g=w(b);l=arguments;r=this;k=b;if(g){if(void 0===e)return u=b=k,e=setTimeout(p,c),L?n(b):v;if(y)return clearTimeout(e),e=setTimeout(p,c),n(k)}void 0===e&&(e=setTimeout(p,c));return v}var l,r,v,e,k,u=0,L=!1,y=!1,A=!0;if("function"!=typeof a)throw new TypeError("Expected a function");c=G(c)||0;if(x(d)){L=!!d.leading;var z=(y="maxWait"in d)?V(G(d.maxWait)||0,c):z;A="trailing"in d?!!d.trailing:A}B.cancel=function(){void 0!==
e&&clearTimeout(e);u=0;l=k=r=e=void 0};B.flush=function(){return void 0===e?v:K(q.Date.now())};return B};f.freeGlobal=I;f.isObject=x;f.isObjectLike=E;f.isSymbol=F;f.root=q});