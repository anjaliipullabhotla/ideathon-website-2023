// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ../core/shaderLibrary/ShaderOutput ../core/shaderTechnique/ShaderTechniqueConfiguration ../lib/GLMaterial ../lib/Material ../lib/RenderSlot ./internal/DefaultBufferWriter ./internal/MaterialUtil ../shaders/SlicePlaneMaterialTechnique".split(" "),function(e,f,n,p,q,r,h,t,k,u,l){let A=function(d){function b(c){c=d.call(this,c,new m)||this;c._configuration=new q.ShaderTechniqueConfiguration;return c}f._inheritsLoose(b,
d);var a=b.prototype;a.intersect=function(c,g,B,v,w,x,y){return u.intersectTriangleGeometry(c,g,v,w,x,void 0,y)};a.createBufferWriter=function(){return new k.DefaultBufferWriter(k.PositionUVLayout)};a.requiresSlot=function(c,g){return g===p.ShaderOutput.Color&&c===t.RenderSlot.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL};a.createGLMaterial=function(c){return new z(c)};a.getConfiguration=function(){return this._configuration};return b}(h.Material),z=function(d){function b(a){a=d.call(this,a)||this;a.ensureTechnique(l.SlicePlaneMaterialTechnique,
null);return a}f._inheritsLoose(b,d);b.prototype.beginSlot=function(){return n.unwrap(this.technique)};return b}(r),m=function(d){function b(){var a=d.apply(this,arguments)||this;a.renderOccluded=h.RenderOccludedFlag.Occlude;return a}f._inheritsLoose(b,d);return b}(l.SlicePlaneMaterialPassParameters);e.Parameters=m;e.SlicePlaneMaterial=A;Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});