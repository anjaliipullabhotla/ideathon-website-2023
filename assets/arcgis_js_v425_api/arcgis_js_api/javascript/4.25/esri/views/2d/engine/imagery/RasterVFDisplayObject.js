// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/has ../../../../core/maybe ../../../../chunks/mat3 ../../../../chunks/mat3f32 ../../../../chunks/vec2f32 ../../../../layers/support/rasterFunctions/vectorFieldUtils ../DisplayObject ../webgl/Utils ../../../webgl/BufferObject ../../../webgl/enums ../../../webgl/VertexArrayObject".split(" "),function(q,r,t,k,d,w,l,m,x,y,u,g,z){t=function(v){function n(b=null){var a=v.call(this)||this;a._source=null;a._symbolizerParameters=
null;a._vaoInvalidated=!0;a.coordScale=[1,1];a.height=null;a.stencilRef=0;a.resolution=null;a.pixelRatio=1;a.x=0;a.y=0;a.rotation=0;a.rawPixelData=null;a.width=null;a.source=b;return a}r._inheritsLoose(n,v);var c=n.prototype;c.destroy=function(){k.isSome(this.vaoData)&&(this.vaoData.magdir?.vao.dispose(),this.vaoData.scalar?.vao.dispose(),this.vaoData=null)};c.invalidateVAO=function(){!this._vaoInvalidated&&k.isSome(this.vaoData)&&(this.vaoData.magdir?.vao.dispose(),this.vaoData.scalar?.vao.dispose(),
this.vaoData=null,this._vaoInvalidated=!0,this.requestRender())};c.updateVectorFieldVAO=function(b){if(this._vaoInvalidated){this._vaoInvalidated=!1;if(k.isSome(this.source)&&k.isNone(this.vaoData)){var {style:a}=this.symbolizerParameters;switch(a){case "beaufort_ft":case "beaufort_km":case "beaufort_kn":case "beaufort_m":case "beaufort_mi":case "classified_arrow":case "ocean_current_kn":case "ocean_current_m":case "single_arrow":a=m.createVFMesh(this.source,this.symbolizerParameters);this.vaoData=
{magdir:this._createVectorFieldVAO(b.context,a)};break;case "simple_scalar":a=m.createVFMeshScalar(this.source,this.symbolizerParameters);this.vaoData={scalar:this._createVectorFieldVAO(b.context,a)};break;case "wind_speed":a=m.createVFMesh(this.source,this.symbolizerParameters);a=this._createVectorFieldVAO(b.context,a);const h=m.createVFMeshScalar(this.source,this.symbolizerParameters);b=this._createVectorFieldVAO(b.context,h);this.vaoData={magdir:a,scalar:b}}}this.ready();this.requestRender()}};
c._createTransforms=function(){return{dvs:w.create()}};c.setTransform=function(b){const a=d.identity(this.transforms.dvs),[h,p]=b.toScreenNoRotation([0,0],[this.x,this.y]);var e=this.resolution/this.pixelRatio/b.resolution;const f=e*this.width;e*=this.height;const A=Math.PI*this.rotation/180;d.translate(a,a,l.fromValues(h,p));d.translate(a,a,l.fromValues(f/2,e/2));d.rotate(a,a,-A);d.translate(a,a,l.fromValues(-f/2,-e/2));d.scaleByVec2(a,a,l.fromValues(f,e));d.multiply(this.transforms.dvs,b.displayViewMat3,
a)};c.onAttach=function(){this.invalidateVAO()};c.onDetach=function(){this.invalidateVAO()};c._createVectorFieldVAO=function(b,a){const {vertexData:h,indexData:p}=a;a=u.BufferObject.createVertex(b,g.Usage.STATIC_DRAW,new Float32Array(h));const e=u.BufferObject.createIndex(b,g.Usage.STATIC_DRAW,new Uint32Array(p)),f=y.createProgramDescriptor("vector-field",{geometry:[{location:0,name:"a_pos",count:2,type:g.DataType.FLOAT,normalized:!1},{location:1,name:"a_offset",count:2,type:g.DataType.FLOAT,normalized:!1},
{location:2,name:"a_vv",count:2,type:g.DataType.FLOAT,normalized:!1}]});return{vao:new z.VertexArrayObject(b,f.attributes,f.bufferLayouts,{geometry:a},e),elementCount:p.length}};r._createClass(n,[{key:"symbolizerParameters",get:function(){return this._symbolizerParameters},set:function(b){JSON.stringify(this._symbolizerParameters)!==JSON.stringify(b)&&(this._symbolizerParameters=b,this.invalidateVAO())}},{key:"source",get:function(){return this._source},set:function(b){this._source=b;this.invalidateVAO()}}]);
return n}(x.DisplayObject);q.RasterVFDisplayObject=t;Object.defineProperties(q,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});