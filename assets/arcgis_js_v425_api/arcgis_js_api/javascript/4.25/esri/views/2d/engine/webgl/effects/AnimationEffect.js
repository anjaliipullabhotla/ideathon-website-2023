// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/maybe ../definitions ../VertexStream ./Effect".split(" "),function(p,r,t,k,u,l){l=function(q){function m(){var a=q.apply(this,arguments)||this;a.defines=[];a._desc={vsPath:"fx/integrate",fsPath:"fx/integrate",attributes:new Map([["a_position",0]])};return a}r._inheritsLoose(m,q);var f=m.prototype;f.dispose=function(){this._quad&&this._quad.dispose()};f.bind=function(){};f.unbind=function(){};f.draw=function(a,d){if(d.size){var {context:c,
renderingOptions:b}=a;this._quad||(this._quad=new u(c,[0,0,1,0,0,1,1,1]));var h=c.getBoundFramebufferObject(),{x:n,y:e,width:v,height:w}=c.getViewport();d.bindTextures(c);var g=d.getBlock(k.ATTRIBUTE_DATA_ANIMATION);if(!t.isNone(g)){var x=g.getFBO(c);g=g.getFBO(c,1);c.setViewport(0,0,d.size,d.size);this._computeDelta(a,g,b.labelsAnimationTime);this._updateAnimationState(a,g,x);c.bindFramebuffer(h);c.setViewport(n,e,v,w)}}};f._computeDelta=function(a,d,c){const {context:b,painter:h,displayLevel:n}=
a,e=h.materialManager.getProgram(this._desc,["delta"]);b.bindFramebuffer(d);b.setClearColor(0,0,0,0);b.clear(b.gl.COLOR_BUFFER_BIT);b.useProgram(e);e.setUniform1i("u_maskTexture",k.TEXTURE_BINDING_ATTRIBUTE_DATA_0);e.setUniform1i("u_sourceTexture",k.TEXTURE_BINDING_ATTRIBUTE_DATA_1);e.setUniform1f("u_timeDelta",a.deltaTime);e.setUniform1f("u_animationTime",c);e.setUniform1f("u_zoomLevel",Math.round(10*n));this._quad.draw()};f._updateAnimationState=function(a,d,c){const {context:b,painter:h}=a;a=h.materialManager.getProgram(this._desc,
["update"]);b.bindTexture(d.colorTexture,1);b.useProgram(a);a.setUniform1i("u_sourceTexture",1);b.bindFramebuffer(c);b.setClearColor(0,0,0,0);b.clear(b.gl.COLOR_BUFFER_BIT);this._quad.draw()};return m}(l.Effect);p.AnimationEffect=l;Object.defineProperties(p,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});