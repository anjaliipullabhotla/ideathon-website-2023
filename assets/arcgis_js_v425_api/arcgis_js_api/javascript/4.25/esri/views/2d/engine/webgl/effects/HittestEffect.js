// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/maybe ../definitions ./Effect ../../../../webgl/enums".split(" "),function(q,r,h,k,l,t){l=function(u){function m(){var b=u.apply(this,arguments)||this;b.name=b.constructor.name;b.defines=["hittest"];return b}r._inheritsLoose(m,u);var g=m.prototype;g.dispose=function(){h.isSome(this._fbo)&&this._fbo.dispose()};g.createOptions=function({pixelRatio:b},a,d=k.HITTEST_RADIUS){if(!a.length)return null;a=a.shift();const n=
a.x,p=a.y;this._outstanding=a;return{type:"hittest",distance:d*b,position:[n,p]}};g.bind=function(b){const {context:a,attributeView:d}=b;d.size&&(b=d.getBlock(k.ATTRIBUTE_DATA_GPGPU),h.isNone(b)||(b=b.getFBO(a),a.setViewport(0,0,d.size,d.size),a.bindFramebuffer(b),a.setColorMask(!0,!0,!0,!0),a.setClearColor(0,0,0,0),a.clear(a.gl.COLOR_BUFFER_BIT|a.gl.DEPTH_BUFFER_BIT)))};g.unbind=function(b){};g.draw=function(b){if(!h.isNone(this._outstanding)){var a=this._outstanding;this._outstanding=null;this._resolve(b,
a.resolvers)}};g._resolve=function(){var b=r._asyncToGenerator(function*(a,d){const {context:n,attributeView:p}=a;a=p.getBlock(k.ATTRIBUTE_DATA_GPGPU);if(h.isNone(a))d.forEach(c=>c.resolve([]));else{var e=a.getFBO(n);a=new Uint8Array(e.width*e.height*4);try{yield e.readPixelsAsync(0,0,e.width,e.height,t.PixelFormat.RGBA,t.PixelType.UNSIGNED_BYTE,a)}catch(c){d.forEach(f=>f.resolve([]));return}e=[];for(let c=0;c<a.length;c+=4){const f=a[c+3];a[c]&&e.push({id:c/4,directHits:f})}e.sort((c,f)=>f.directHits===
c.directHits?f.id-c.id:f.directHits-c.directHits);var v=e.map(c=>c.id);d.forEach(c=>c.resolve(v))}});return function(a,d){return b.apply(this,arguments)}}();return m}(l.Effect);q.HittestEffect=l;Object.defineProperties(q,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});