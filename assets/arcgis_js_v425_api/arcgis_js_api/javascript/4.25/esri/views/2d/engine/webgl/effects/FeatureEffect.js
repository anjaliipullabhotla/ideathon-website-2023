// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","./Effect","../../../../webgl/enums"],function(h,m,f,n){f=function(k){function g(a){var b=k.call(this)||this;b.name=b.constructor.name;b.defines=[a];return b}m._inheritsLoose(g,k);var d=g.prototype;d.dispose=function(){};d.bind=function({context:a,painter:b}){this._prev=a.getBoundFramebufferObject();const {width:c,height:e}=a.getViewport();b=b.getFbos(c,e).effect0;a.bindFramebuffer(b);a.setColorMask(!0,!0,!0,!0);a.setClearColor(0,
0,0,0);a.clear(a.gl.COLOR_BUFFER_BIT)};d.unbind=function(){};d.draw=function(a,b){const {context:c,painter:e}=a;b=e.getPostProcessingEffects(b);const l=c.getBoundFramebufferObject();for(const {postProcessingEffect:p,effect:q}of b)p.draw(a,l,q);c.bindFramebuffer(this._prev);c.setStencilTestEnabled(!1);e.blitTexture(c,l.colorTexture,n.TextureSamplingMode.NEAREST);c.setStencilTestEnabled(!0)};return g}(f.Effect);h.FeatureEffect=f;Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});