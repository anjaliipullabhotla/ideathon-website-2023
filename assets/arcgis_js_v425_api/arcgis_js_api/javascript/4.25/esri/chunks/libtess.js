// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports"],function(la){var G={exports:{}};(function(B){(function(h){h=h();void 0!==h&&(B.exports=h)})(function(){return{load:function(h){function H(a){return b.locateFile?b.locateFile(a,n):n+a}function r(a,c,f){var d=c+f;for(f=c;a[f]&&!(f>=d);)++f;if(16<f-c&&a.subarray&&Y)return Y.decode(a.subarray(c,f));for(d="";c<f;){var e=a[c++];if(e&128){var g=a[c++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|g);else{var k=a[c++]&63;e=224==(e&240)?(e&15)<<12|g<<6|k:(e&7)<<18|g<<12|k<<6|a[c++]&
63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function t(a){Z=a;b.HEAP8=new Int8Array(a);b.HEAP16=new Int16Array(a);b.HEAP32=I=new Int32Array(a);b.HEAPU8=J=new Uint8Array(a);b.HEAPU16=new Uint16Array(a);b.HEAPU32=new Uint32Array(a);b.HEAPF32=new Float32Array(a);b.HEAPF64=new Float64Array(a)}function p(a){if(b.onAbort)b.onAbort(a);a+="";C(a);aa=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS\x3d1 for more info.");
}function ba(a){try{if(a==l&&K)return new Uint8Array(K);if(R)return R(a);throw"both async and sync fetching of the wasm failed";}catch(c){p(c)}}function ma(){if(!K&&(ca||L)){if("function"===typeof fetch&&!l.startsWith("file://"))return fetch(l,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+l+"'";return a.arrayBuffer()}).catch(function(){return ba(l)});if(S)return new Promise(function(a,c){S(l,function(f){a(new Uint8Array(f))},c)})}return Promise.resolve().then(function(){return ba(l)})}
function T(a){for(;0<a.length;){var c=a.shift();if("function"==typeof c)c(b);else{var f=c.func;"number"===typeof f?void 0===c.arg?q.get(f)():q.get(f)(c.arg):f(void 0===c.arg?null:c.arg)}}}function U(a){function c(){if(!O&&(O=!0,b.calledRun=!0,!aa)){T(da);if(b.onRuntimeInitialized)b.onRuntimeInitialized();if(b.postRun)for("function"==typeof b.postRun&&(b.postRun=[b.postRun]);b.postRun.length;)ea.unshift(b.postRun.shift());T(ea)}}if(!(0<v)){if(b.preRun)for("function"==typeof b.preRun&&(b.preRun=[b.preRun]);b.preRun.length;)fa.unshift(b.preRun.shift());
T(fa);0<v||(b.setStatus?(b.setStatus("Running..."),setTimeout(function(){setTimeout(function(){b.setStatus("")},1);c()},1)):c())}}h=h.locateFile;const D={};var b="undefined"!==typeof b?b:{};const ha=(()=>{let a;return{resolve:c=>a(c),promise:new Promise(c=>a=c)}})();b.locateFile=h;b.onRuntimeInitialized=()=>{ha.resolve(D)};D.Module=b;D.whenLoaded=()=>ha.promise;h={};for(var w in b)b.hasOwnProperty(w)&&(h[w]=b[w]);var ca="object"===typeof window,L="function"===typeof importScripts,n="",E,F;if("object"===
typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node){n=L?require("path").dirname(n)+"/":__dirname+"/";var ia=function(a,c){E||(E=require("fs"));F||(F=require("path"));a=F.normalize(a);return E.readFileSync(a,c?null:"utf8")};var R=function(a){a=ia(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||p("Assertion failed: undefined");return a};var S=function(a,c,f){E||(E=require("fs"));F||(F=require("path"));a=F.normalize(a);E.readFile(a,function(d,e){d?f(d):c(e.buffer)})};
1<process.argv.length&&process.argv[1].replace(/\\/g,"/");process.argv.slice(2);B.exports=b;process.on("uncaughtException",function(a){throw a;});process.on("unhandledRejection",p);b.inspect=function(){return"[Emscripten Module object]"}}else if(ca||L)L?n=self.location.href:"undefined"!==typeof document&&document.currentScript&&(n=document.currentScript.src),n=0!==n.indexOf("blob:")?n.substr(0,n.lastIndexOf("/")+1):"",ia=function(a){var c=new XMLHttpRequest;c.open("GET",a,!1);c.send(null);return c.responseText},
L&&(R=function(a){var c=new XMLHttpRequest;c.open("GET",a,!1);c.responseType="arraybuffer";c.send(null);return new Uint8Array(c.response)}),S=function(a,c,f){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?c(d.response):f()};d.onerror=f;d.send(null)};var na=b.print||console.log.bind(console),C=b.printErr||console.warn.bind(console);for(w in h)h.hasOwnProperty(w)&&(b[w]=h[w]);h=null;b.arguments&&b.arguments;b.thisProgram&&
b.thisProgram;b.quit&&b.quit;var ja=0,K;b.wasmBinary&&(K=b.wasmBinary);b.noExitRuntime||!0;"object"!==typeof WebAssembly&&p("no native wasm support detected");var P,aa=!1,Y="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0,Z,J,I;b.INITIAL_MEMORY||4194304;var q,fa=[],da=[],ea=[],v=0,M=null;b.preloadedImages={};b.preloadedAudios={};var l="libtess.wasm";l.startsWith("data:application/octet-stream;base64,")||(l=H(l));var N={mappings:{},buffers:[null,[],[]],printChar:function(a,c){var f=
N.buffers[a];0===c||10===c?((1===a?na:C)(r(f,0)),f.length=0):f.push(c)},varargs:void 0,get:function(){N.varargs+=4;return I[N.varargs-4>>2]},getStr:function(a){return a?r(J,a,void 0):""},get64:function(a,c){return a}},oa={h:function(){throw"longjmp";},l:function(a,c,f){J.copyWithin(a,c,c+f)},g:function(a){var c=J.length;a>>>=0;if(2147483648<a)return!1;for(var f=1;4>=f;f*=2){var d=c*(1+.2/f);d=Math.min(d,a+100663296);var e=Math,g=e.min;d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);e=g.call(e,2147483648,
d);a:{try{P.grow(e-Z.byteLength+65535>>>16);t(P.buffer);var k=1;break a}catch(V){}k=void 0}if(k)return!0}return!1},f:function(a,c,f,d){for(var e=0,g=0;g<f;g++){for(var k=I[c+8*g>>2],V=I[c+(8*g+4)>>2],W=0;W<V;W++)N.printChar(a,J[k+W]);e+=V}I[d>>2]=e;return 0},b:function(){return ja},k:function(a){var c=x();try{return q.get(a)()}catch(f){y(c);if(f!==f+0&&"longjmp"!==f)throw f;z(1,0)}},d:function(a,c){var f=x();try{return q.get(a)(c)}catch(d){y(f);if(d!==d+0&&"longjmp"!==d)throw d;z(1,0)}},j:function(a,
c,f){var d=x();try{return q.get(a)(c,f)}catch(e){y(d);if(e!==e+0&&"longjmp"!==e)throw e;z(1,0)}},i:function(a,c,f,d){var e=x();try{return q.get(a)(c,f,d)}catch(g){y(e);if(g!==g+0&&"longjmp"!==g)throw g;z(1,0)}},e:function(a,c){var f=x();try{q.get(a)(c)}catch(d){y(f);if(d!==d+0&&"longjmp"!==d)throw d;z(1,0)}},c:function(a,c,f){var d=x();try{q.get(a)(c,f)}catch(e){y(d);if(e!==e+0&&"longjmp"!==e)throw e;z(1,0)}},a:function(a){ja=a}};(function(){function a(e,g){b.asm=e.exports;P=b.asm.m;t(P.buffer);q=
b.asm.q;da.unshift(b.asm.n);v--;b.monitorRunDependencies&&b.monitorRunDependencies(v);0==v&&M&&(e=M,M=null,e())}function c(e){a(e.instance)}function f(e){return ma().then(function(g){return WebAssembly.instantiate(g,d)}).then(e,function(g){C("failed to asynchronously prepare wasm: "+g);p(g)})}var d={a:oa};v++;b.monitorRunDependencies&&b.monitorRunDependencies(v);if(b.instantiateWasm)try{return b.instantiateWasm(d,a)}catch(e){return C("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return K||
"function"!==typeof WebAssembly.instantiateStreaming||l.startsWith("data:application/octet-stream;base64,")||l.startsWith("file://")||"function"!==typeof fetch?f(c):fetch(l,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(c,function(g){C("wasm streaming compile failed: "+g);C("falling back to ArrayBuffer instantiation");return f(c)})})})();return{}})();b.___wasm_call_ctors=function(){return(b.___wasm_call_ctors=b.asm.n).apply(null,arguments)};b._malloc=
function(){return(b._malloc=b.asm.o).apply(null,arguments)};b._free=function(){return(b._free=b.asm.p).apply(null,arguments)};b._triangulate=function(){return(b._triangulate=b.asm.r).apply(null,arguments)};var x=b.stackSave=function(){return(x=b.stackSave=b.asm.s).apply(null,arguments)},y=b.stackRestore=function(){return(y=b.stackRestore=b.asm.t).apply(null,arguments)},z=b._setThrew=function(){return(z=b._setThrew=b.asm.u).apply(null,arguments)},O;M=function c(){O||U();O||(M=c)};b.run=U;if(b.preInit)for("function"==
typeof b.preInit&&(b.preInit=[b.preInit]);0<b.preInit.length;)b.preInit.pop()();U();let X=null,u=null,A=null,Q=null;const m=D.Module;let ka=0;D.triangulate=(c,f,d)=>{X||(X=m._triangulate);var e=m.HEAPF32;const g=m.HEAP32.BYTES_PER_ELEMENT;var k=e.BYTES_PER_ELEMENT;d>ka&&(ka=d,A&&(m._free(A),A=0),u&&(m._free(u),u=0));A||(A=m._malloc(d*k));Q||(Q=m._malloc(4E3*g));d*=2;u||(u=m._malloc(d*k));e=m.HEAPF32;e.set(c,A/k);m.HEAP32.set(f,Q/g);c=X(A,Q,Math.min(f.length,4E3),2,u,d/2);e=m.HEAPF32;e=e.slice(u/k,
u/k+2*c);k={};k.buffer=e;k.vertexCount=c;return k};return D.whenLoaded()}}})})(G);G=function(B,h){for(var H=0;H<h.length;H++){const r=h[H];if("string"!==typeof r&&!Array.isArray(r))for(const t in r)if("default"!==t&&!(t in B)){const p=Object.getOwnPropertyDescriptor(r,t);p&&Object.defineProperty(B,t,p.get?p:{enumerable:!0,get:()=>r[t]})}}return Object.freeze(Object.defineProperty(B,Symbol.toStringTag,{value:"Module"}))}({__proto__:null,default:G.exports},[G.exports]);la.libtess=G});