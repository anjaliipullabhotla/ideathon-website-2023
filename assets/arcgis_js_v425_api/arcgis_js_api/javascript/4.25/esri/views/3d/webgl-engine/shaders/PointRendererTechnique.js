// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../lib/DefaultVertexAttributeLocations ../lib/Program ../lib/StencilUtils ../../../../chunks/PointRenderer.glsl ../../../webgl/enums ../../../webgl/renderState".split(" "),function(k,f,l,m,b,n,p,g,q,r,d){b=function(c){function a(e,t,u){return c.call(this,e,t,u)||this}l._inheritsLoose(a,c);var h=a.prototype;h.initializeProgram=function(e){return new p.Program(e.rctx,
a.shader.get().build(this.configuration),n.Default3D)};h.initializePipeline=function(){return d.makePipelineState({depthTest:{func:r.CompareFunction.LESS},depthWrite:d.defaultDepthWriteParams,colorWrite:d.defaultColorWriteParams,stencilWrite:this.configuration.hasOccludees?g.stencilWriteMaskOn:null,stencilTest:this.configuration.hasOccludees?g.stencilBaseAllZerosParams:null})};return a}(b.ShaderTechnique);b.shader=new m.ReloadableShaderModule(q.PointRendererShader,()=>new Promise((c,a)=>k(["./PointRenderer.glsl"],
c,a)));f.PointRendererTechnique=b;Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});