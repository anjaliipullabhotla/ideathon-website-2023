// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Error ../../core/Logger ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./MediaElementBase".split(" "),function(f,e,l,m,g,c,r,n,p){c=function(h){function d(a){a=h.call(this,a)||this;a.content=null;a.type="video";return a}f._inheritsLoose(d,h);var k=d.prototype;k.load=function(){const a=this.video;if("string"===typeof a){const b=
document.createElement("video");b.src=a;b.crossOrigin="anonymous";b.autoplay=!0;b.muted=!0;b.loop=!0;this.addResolvingPromise(this._loadVideo(b).then(()=>{this._set("content",b)}))}else a instanceof HTMLVideoElement?this.addResolvingPromise(this._loadVideo(a).then(()=>{this._set("content",a)})):this.addResolvingPromise(Promise.reject(new l("video-element:invalid-video-type","Invalid video type",{video:a})));return Promise.resolve(this)};k._loadVideo=function(a){return new Promise((b,q)=>{a.oncanplay=
()=>{a.oncanplay=null;a.play().then(b,q)};"anonymous"!==a.crossOrigin&&(a.crossOrigin="anonymous",a.src=a.src)})};f._createClass(d,[{key:"video",set:function(a){"not-loaded"!==this.loadStatus?m.getLogger(this.declaredClass).error("#video","video cannot be changed after the element is loaded."):this._set("video",a)}}]);return d}(p);e.__decorate([g.property({readOnly:!0})],c.prototype,"content",void 0);e.__decorate([g.property()],c.prototype,"video",null);return c=e.__decorate([n.subclass("esri.layers.support.VideoElement")],
c)});