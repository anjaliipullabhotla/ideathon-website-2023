// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../chunks/vec4f64 ../../support/buffer/InterleavedLayout ../core/shaderLibrary/ShaderOutput ../lib/GLMaterial ../lib/Material ../lib/RenderSlot ../lib/VertexAttribute ../shaders/MeasurementArrowTechnique".split(" "),function(z,A,e,p,B,J,K,L,D,M,h,E){let P=function(g){function d(b){b=g.call(this,b,new F)||this;b._configuration=new E.MeasurementArrowTechniqueConfiguration;return b}
A._inheritsLoose(d,g);var a=d.prototype;a.getConfiguration=function(b,c){this._configuration.polygonOffsetEnabled=this.parameters.polygonOffset;this._configuration.transparent=1>this.parameters.stripeEvenColor[3]||1>this.parameters.stripeOddColor[3]||1>this.parameters.outlineColor[3];this._configuration.transparencyPassType=c.transparencyPassType;return this._configuration};a.dispose=function(){};a.intersect=function(){};a.requiresSlot=function(b,c){return c===K.ShaderOutput.Color&&b===M.RenderSlot.OPAQUE_MATERIAL};
a.createGLMaterial=function(b){return new N(b)};a.createBufferWriter=function(){return new O};return d}(D.Material),N=function(g){function d(){return g.apply(this,arguments)||this}A._inheritsLoose(d,g);d.prototype.beginSlot=function(a){return this.ensureTechnique(E.MeasurementArrowTechnique,a)};return d}(L),F=function(g){function d(){var a=g.apply(this,arguments)||this;a.width=32;a.outlineSize=.2;a.outlineColor=B.fromValues(1,.5,0,1);a.stripeEvenColor=B.fromValues(1,1,1,1);a.stripeOddColor=B.fromValues(1,
.5,0,1);a.stripeLength=1;a.polygonOffset=!1;return a}A._inheritsLoose(d,g);return d}(D.MaterialParameters);const Q=J.newLayout().vec3f(h.VertexAttribute.POSITION).vec3f(h.VertexAttribute.NORMAL).vec2f(h.VertexAttribute.UV0).f32(h.VertexAttribute.AUXPOS1),k=p.create(),q=p.create(),u=p.create(),l=p.create(),v=p.create();let O=function(){function g(){this.vertexBufferLayout=Q}var d=g.prototype;d.allocate=function(a){return this.vertexBufferLayout.createBuffer(a)};d.elementCount=function(a){return 2*
(a.indices.get(h.VertexAttribute.POSITION).length/2+1)};d.write=function(a,b,c,w,G){const m=c.vertexAttributes.get(h.VertexAttribute.POSITION).data,C=c.vertexAttributes.get(h.VertexAttribute.NORMAL).data,r=m.length/3;(c=c&&c.indices&&c.indices.get(h.VertexAttribute.POSITION))&&c.length!==2*(r-1)&&console.warn("MeasurementArrowMaterial does not support indices");const H=w.position,I=w.normal,x=w.uv0;c=0;for(let n=0;n<r;++n){var f=3*n;e.set(k,m[f],m[f+1],m[f+2]);n<r-1&&(f=3*(n+1),e.set(q,m[f],m[f+1],
m[f+2]),e.set(v,C[f],C[f+1],C[f+2]),e.normalize(v,v),e.subtract(u,q,k),e.normalize(u,u),e.cross(l,v,u),e.normalize(l,l));f=e.distance(k,q);a&&b&&(e.transformMat4(k,k,a),e.transformMat4(q,q,a),e.transformMat4(l,l,b));const t=G+2*n,y=t+1;H.setVec(t,k);H.setVec(y,k);I.setVec(t,l);I.setVec(y,l);x.set(t,0,c);x.set(t,1,-1);x.set(y,0,c);x.set(y,1,1);n<r-1&&(c+=f)}a=w.auxpos1;for(b=0;b<2*r;++b)a.set(G+b,c)};return g}();z.MeasurementArrowMaterial=P;z.Parameters=F;Object.defineProperties(z,{__esModule:{value:!0},
[Symbol.toStringTag]:{value:"Module"}})});