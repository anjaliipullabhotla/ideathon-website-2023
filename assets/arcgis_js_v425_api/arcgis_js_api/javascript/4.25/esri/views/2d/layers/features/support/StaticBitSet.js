// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports"],function(f){let h=function(){function d(a,b){this._mask=0;this._buf=a;this._mask=b}d.fromBuffer=function(a,b){return new d(a,b)};d.create=function(a,b=4294967295){a=new Uint32Array(Math.ceil(a/32));return new d(a,b)};var c=d.prototype;c._getIndex=function(a){return Math.floor(a/32)};c.has=function(a){a&=this._mask;return!!(this._buf[this._getIndex(a)]&1<<a%32)};c.hasRange=function(a,b){for(;a%32&&a!==b;){if(this.has(a))return!0;a++}for(;b%32&&a!==b;){if(this.has(a))return!0;b--}if(a===
b)return!1;for(a/=32;a!==b/32;a++)if(this._buf[a])return!0;return!1};c.set=function(a){a&=this._mask;const b=this._getIndex(a);this._buf[b]|=1<<a%32};c.setRange=function(a,b){for(;a%32&&a!==b;)this.set(a++);for(;b%32&&a!==b;)this.set(b--);if(a!==b)for(a/=32;a!==b/32;a++)this._buf[a]=4294967295};c.unset=function(a){a&=this._mask;const b=this._getIndex(a);this._buf[b]&=4294967295^1<<a%32};c.resize=function(a){const b=this._buf;a=new Uint32Array(Math.ceil(a/32));a.set(b);this._buf=a};c.or=function(a){for(let b=
0;b<this._buf.length;b++)this._buf[b]|=a._buf[b];return this};c.and=function(a){for(let b=0;b<this._buf.length;b++)this._buf[b]&=a._buf[b];return this};c.xor=function(a){for(let b=0;b<this._buf.length;b++)this._buf[b]^=a._buf[b];return this};c.ior=function(a){for(let b=0;b<this._buf.length;b++)this._buf[b]|=~a._buf[b];return this};c.iand=function(a){for(let b=0;b<this._buf.length;b++)this._buf[b]&=~a._buf[b];return this};c.ixor=function(a){for(let b=0;b<this._buf.length;b++)this._buf[b]^=~a._buf[b];
return this};c.any=function(){for(let a=0;a<this._buf.length;a++)if(this._buf[a])return!0;return!1};c.copy=function(a){for(let b=0;b<this._buf.length;b++)this._buf[b]=a._buf[b];return this};c.clone=function(){return new d(this._buf.slice(),this._mask)};c.clear=function(){for(let a=0;a<this._buf.length;a++)this._buf[a]=0};c.forEachSet=function(a){for(let b=0;b<this._buf.length;b++){let e=this._buf[b],g=32*b;if(e)for(;e;)e&1&&a(g),e>>>=1,g++}};c.countSet=function(){let a=0;this.forEachSet(b=>{a++});
return a};return d}();f.StaticBitSet=h;Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});