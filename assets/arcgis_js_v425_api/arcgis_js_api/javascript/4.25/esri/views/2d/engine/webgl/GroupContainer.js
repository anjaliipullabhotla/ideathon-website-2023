// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","./WGLContainer","../../../webgl/enums"],function(n,p,k,q){k=function(l){function m(){var b=l.apply(this,arguments)||this;b.requiresDedicatedFBO=!1;return b}p._inheritsLoose(m,l);var f=m.prototype;f.dispose=function(){};f.doRender=function(b){const d=this.createRenderParams(b),{context:a,painter:c,profiler:g}=d;this._prevFBO=a.getBoundFramebufferObject();g.recordContainerStart(this.name);const h=this._getFbo(d),r=c.getRenderTarget();
a.bindFramebuffer(h);c.setRenderTarget(h);a.setDepthWriteEnabled(!0);a.setColorMask(!0,!0,!0,!0);a.setClearColor(0,0,0,0);a.setClearDepth(1);a.clear(a.gl.COLOR_BUFFER_BIT|a.gl.DEPTH_BUFFER_BIT);a.setDepthWriteEnabled(!1);for(const e of this.children)e.beforeRender(b);for(const e of this.children)e.processRender(d);for(const e of this.children)e.afterRender(b);c.setRenderTarget(r);c.releaseFbo(h);a.bindFramebuffer(this._prevFBO);c.beforeRenderLayer(d,this._clippingInfos?255:0,this.computedOpacity);
a.setStencilTestEnabled(!1);a.setStencilWriteMask(0);c.blitTexture(a,h.colorTexture,q.TextureSamplingMode.NEAREST);c.compositeLayer(d,this.computedOpacity);g.recordContainerEnd()};f.createRenderParams=function(b){return{...l.prototype.createRenderParams.call(this,b),blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:1}};f._getFbo=function(b){const {context:d,painter:a}=b,{width:c,height:g}=d.getViewport();return a.acquireFbo(c,g)};return m}(k);n.GroupContainer=k;Object.defineProperties(n,
{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});