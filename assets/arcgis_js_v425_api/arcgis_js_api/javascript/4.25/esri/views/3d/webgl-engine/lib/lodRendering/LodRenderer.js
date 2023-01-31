// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/maybe ../../../../../core/promiseUtils ../../../../../chunks/mat4f64 ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ../../../../../chunks/vec4f64 ../../../support/debugFlags ../../../support/buffer/glUtil ../../core/shaderLibrary/ShaderOutput ../Camera ../DefaultVertexAttributeLocations ../IntersectorInterfaces ../Octree ../RenderSlot ../Util ./InstanceData ./InstanceOctree ./LevelSelector ./LodLevel ./RenderInstanceData ../../materials/DefaultMaterial ../../materials/internal/MaterialUtil ../../materials/renderers/utils ../../shaders/DefaultMaterialTechnique ../../../../webgl/Util".split(" "),
function(B,C,y,D,R,u,z,v,E,S,w,T,F,U,G,A,x,n,V,W,X,H,Y,Z,aa,ba,I){function J(l,h,a){const b=l.allocateHead();l=l.view;aa.encodeDoubleVec3(h.modelOrigin,a,l.modelOriginHi,l.modelOriginLo,b);l.model.copyFrom(b,h.model,a);l.modelNormal.copyFrom(b,h.modelNormal,a);h.color&&l.color&&l.color.copyFrom(b,h.color,a);h.objectAndLayerIdColor&&l.objectAndLayerIdColor&&l.objectAndLayerIdColor.copyFrom(b,h.objectAndLayerIdColor,a);h.featureAttribute&&l.featureAttribute&&l.featureAttribute.copyFrom(b,h.featureAttribute,
a)}const ca=l=>{const h=l.baseBoundingSphere.radius;l=l.levels.map(a=>a.minScreenSpaceRadius);return new W.LevelSelector(h,l)};let fa=function(){function l(a,b,d,c){this.type=U.IntersectorType.LOD;this.isGround=!1;this._levels=[];this._defaultRenderInstanceData=[];this._highlightRenderInstanceData=[];this._instanceIndex=0;this._slicePlane=!1;this._lastCamera=new T.Camera;this._updateCyclesWithStaticCamera=-1;this._needFullCycle=!1;this.slots=[A.RenderSlot.OPAQUE_MATERIAL,A.RenderSlot.TRANSPARENT_MATERIAL];
this.canRender=!0;this._symbol=a;this._optionalFields=b;this._metadata=d;this._instanceBufferLayout=Y.getInstanceBufferLayout({instancedDoublePrecision:!0,instanced:b});this._glInstanceBufferLayout=S.glLayout(this._instanceBufferLayout,1);this._instanceData=new n.InstanceData(this._optionalFields,c);this._instanceData.on("instance-added",()=>this._requestUpdateCycle());this._instanceData.on("instance-removed",()=>this._requestUpdateCycle());this._instanceData.on("instance-transform-changed",g=>{this._requestUpdateCycle();
this._metadata.notifyGraphicGeometryChanged(g.index)});this._instanceData.on("instance-visibility-changed",g=>{this._requestUpdateCycle(!0);this._metadata.notifyGraphicVisibilityChanged(g.index)});this._instanceData.on("instance-highlight-changed",()=>this._requestUpdateCycle(!0));this._enableLevelSelection=1<this._symbol.levels.length}var h=l.prototype;h.initializeRenderContext=function(){var a=C._asyncToGenerator(function*(b,d){this._context=b;const c=b.renderContext.rctx,g=yield Promise.allSettled(this._symbol.levels.map(e=>
{this._defaultRenderInstanceData.push(new H.RenderInstanceData(c,this._instanceBufferLayout));this._highlightRenderInstanceData.push(new H.RenderInstanceData(c,this._instanceBufferLayout));return X.LodLevel.create(b,e,d)})),p=g.map(e=>"fulfilled"===e.status?e.value:null).filter(e=>e);if(D.isAborted(d)||p.length!==g.length){p.forEach(e=>e.destroy());D.throwIfAborted(d);for(const e of g)if("rejected"===e.status)throw e.reason;}this._levels=p;this._levelSelector=ca(this)});return function(b,d){return a.apply(this,
arguments)}}();h.uninitializeRenderContext=function(){this._invalidateOctree();this._levels.forEach(a=>a.destroy());this._defaultRenderInstanceData.forEach(a=>a.destroy());this._highlightRenderInstanceData.forEach(a=>a.destroy())};h.prepareRender=function(a){if(!E.LOD_INSTANCE_RENDERER_DISABLE_UPDATES){if(this._enableLevelSelection){var b=a.bindParameters.contentCamera.equals(this._lastCamera);this._lastCamera.copyFrom(a.bindParameters.contentCamera);b||this._requestUpdateCycle()}b=this._needFullCycle?
this._instanceData.size:2E3;this._needFullCycle=!1;this._updateInstances(a.bindParameters.contentCamera,b);this._needsUpdates&&this._context.requestRender()}};h.render=function(a){this.baseMaterial.isVisible()&&this.baseMaterial.isVisibleForOutput(a.output)&&(a.rctx.bindVAO(),a.output!==w.ShaderOutput.Highlight&&a.output!==w.ShaderOutput.ShadowHighlight&&this._renderComponents(a,this._defaultRenderInstanceData),a.output!==w.ShaderOutput.ShadowExludeHighlight&&this._renderComponents(a,this._highlightRenderInstanceData))};
h.intersect=function(a,b,d,c){if(this.baseMaterial.isVisible()){var g=z.create();u.subtract(g,c,d);var p=e=>{this._instanceData.getCombinedModelTransform(e,K);a.transform.set(K);u.transformMat4(L,d,a.transform.inverse);u.transformMat4(M,c,a.transform.inverse);const f=this._instanceData.getState(e),m=this._instanceData.getLodLevel(e),q=this._levels.length;x.assert(f&n.StateFlags.ACTIVE,"invalid instance state");x.assert(0<=m&&m<q,"invaid lod level");this._levels[m].intersect(a,b,L,M,e,this._metadata,
q)};this.baseMaterial.parameters.verticalOffset?this._octree.forEach(p):this._octree.forEachAlongRay(d,g,p)}};h.queryDepthRange=function(a){return this._queryDepthRangeOctree(a)};h.notifyShaderTransformationChanged=function(){this._invalidateOctree()};h._requestUpdateCycle=function(a=!1){this._updateCyclesWithStaticCamera=-1;a&&(this._needFullCycle=!0);this._needsUpdates&&this._context.requestRender()};h._invalidateOctree=function(){this._octreeCached=y.destroyMaybe(this._octreeCached)};h._buildOctree=
function(){const a=new V.InstanceOctree(this._instanceData,this.baseBoundingSphere);var b=this._instanceData;b=b.view?b.view.state:null;for(let d=0;d<this._instanceData.capacity;++d)b.get(d)&n.StateFlags.ACTIVE&&a.addInstance(d);return a};h._queryDepthRangeOctree=function(a){var b=a.eye;const d=a.viewForward;var c=this._octree.findClosest(d,G.DepthOrder.FRONT_TO_BACK,a.frustum);const g=this._octree.findClosest(d,G.DepthOrder.BACK_TO_FRONT,a.frustum);return null!=c&&null!=g?(this._instanceData.view.boundingSphere.getVec(c,
t),u.subtract(t,t,b),c=u.dot(t,d)-t[3],this._instanceData.view.boundingSphere.getVec(g,t),u.subtract(t,t,b),b=u.dot(t,d)+t[3],{near:Math.max(a.near,c),far:Math.min(a.far,b)}):{near:Infinity,far:-Infinity}};h._startUpdateCycle=function(){this._updateCyclesWithStaticCamera++;this._defaultRenderInstanceData.forEach(a=>{a.startUpdateCylce()});this._highlightRenderInstanceData.forEach(a=>{a.startUpdateCylce()});this._needsUpdates&&this._context.requestRender()};h._updateInstances=function(a,b){const d=
this._enableLevelSelection,c=this._levelSelector;c.updateCamera(a);this._defaultRenderInstanceData.forEach(q=>q.beginUpdate());this._highlightRenderInstanceData.forEach(q=>q.beginUpdate());a=this._instanceData;const g=this._instanceData.view,p=a.capacity;let e=this._instanceIndex;b=Math.min(a.size,b);for(let q=0;q<b;++q){0===e&&this._startUpdateCycle();const k=g.state.get(e);var f=0;if(k&n.StateFlags.ALLOCATED){var m=g.lodLevel.get(e);k&n.StateFlags.DEFAULT_ACTIVE&&this._defaultRenderInstanceData[m].freeTail();
k&n.StateFlags.HIGHLIGHT_ACTIVE&&this._highlightRenderInstanceData[m].freeTail();k&n.StateFlags.REMOVE?a.freeInstance(e):k&n.StateFlags.VISIBLE?(m=0,d&&(g.modelOrigin.getVec(e,N),m=c.selectLevel(N,a.getCombinedMedianScaleFactor(e))),f=k&~(n.StateFlags.ACTIVE|n.StateFlags.TRANSFORM_CHANGED),0<=m&&(k&n.StateFlags.HIGHLIGHT?(J(this._highlightRenderInstanceData[m],g,e),f|=n.StateFlags.HIGHLIGHT_ACTIVE):(J(this._defaultRenderInstanceData[m],g,e),f|=n.StateFlags.DEFAULT_ACTIVE)),g.state.set(e,f),g.lodLevel.set(e,
m)):(f=k&~(n.StateFlags.ACTIVE|n.StateFlags.TRANSFORM_CHANGED),g.state.set(e,f));y.isSome(this._octreeCached)&&(m=!!(k&n.StateFlags.ACTIVE),f=!!(f&n.StateFlags.ACTIVE),!m&&f?this._octreeCached.addInstance(e):m&&!f?this._octreeCached.removeInstance(e):m&&f&&k&n.StateFlags.TRANSFORM_CHANGED&&(this._octreeCached.removeInstance(e),this._octreeCached.addInstance(e)));e=e+1===p?0:e+1}else e=e+1===p?0:e+1,b++}this._instanceIndex=e;this._defaultRenderInstanceData.forEach(q=>q.endUpdate());this._highlightRenderInstanceData.forEach(q=>
q.endUpdate())};h._renderComponents=function(a,b){this.levels.forEach((d,c)=>{d.components.forEach(g=>{this._renderComponent(a,b[c],g,c)})})};h._renderComponent=function(a,b,d,c){const {bindParameters:g,rctx:p,output:e}=a;if(0!==b.size&&d.material.requiresSlot(g.slot,a.output)){var f=d.glMaterials.load(p,g.slot,e);if(!y.isNone(f)){var m=f.beginSlot(g);f=p.bindTechnique(m,d.material.parameters,g);p.bindVAO(d.vao);m.ensureAttributeLocations(d.vao);f.bindDraw(da,g,d.material.parameters);E.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL&&
a.output===w.ShaderOutput.Color&&(f.setUniform4fv("externalColor",O[Math.min(c,O.length-1)]),f.setUniform1i("colorMixMode",Z.colorMixModes.replace));var q=p.capabilities.instancing;a=b.capacity;c=b.headIndex;f=b.tailIndex;var k=b.firstIndex,P=this._glInstanceBufferLayout,r=(Q,ea)=>{I.bindVertexBufferLayout(p,F.Default3D,b.buffer,P,Q);q.drawArraysInstanced(m.primitiveType,0,d.vertexCount,ea-Q);I.unbindVertexBufferLayout(p,F.Default3D,b.buffer,P)};d.material.parameters.transparent&&null!=k?c>f?(x.assert(k>=
f&&k<=c,"invalid firstIndex"),r(k,c),r(f,k)):c<f&&(k<=c?(x.assert(0<=k&&k<=c,"invalid firstIndex"),r(k,c),r(f,a),r(0,k)):(x.assert(k>=f&&k<=a,"invalid firstIndex"),r(k,a),r(0,c),r(f,k))):c>f?r(f,c):c<f&&(r(0,c),r(f,a));p.bindVAO(null)}}};C._createClass(l,[{key:"levels",get:function(){return this._levels}},{key:"baseBoundingBox",get:function(){return this._levels[this._levels.length-1].boundingBox}},{key:"baseBoundingSphere",get:function(){return this._levels[this._levels.length-1].boundingSphere}},
{key:"baseMaterial",get:function(){return this._levels[this._levels.length-1].components[0].material}},{key:"slicePlaneEnabled",get:function(){return this._slicePlane},set:function(a){this._slicePlane=a}},{key:"layerUid",get:function(){return this._metadata.layerUid}},{key:"instanceData",get:function(){return this._instanceData}},{key:"memoryUsage",get:function(){const a={cpu:0,gpu:0};this._defaultRenderInstanceData.forEach(b=>{b=b.memoryUsage;a.cpu+=b.cpu;a.gpu+=b.gpu});this._highlightRenderInstanceData.forEach(b=>
{b=b.memoryUsage;a.cpu+=b.cpu;a.gpu+=b.gpu});return a}},{key:"renderStats",get:function(){const a=this._instanceData.size,b=[];this._levels.forEach((d,c)=>{c=this._defaultRenderInstanceData[c].size+this._highlightRenderInstanceData[c].size;d=d.triangleCount;b.push({renderedInstances:c,renderedTriangles:c*d,trianglesPerInstance:d})});return{totalInstances:a,renderedInstances:b.reduce((d,c)=>d+c.renderedInstances,0),renderedTriangles:b.reduce((d,c)=>d+c.renderedTriangles,0),levels:b}}},{key:"needsTransparentPass",
get:function(){return this._levels.some(a=>a.components.some(b=>b.material.requiresSlot(A.RenderSlot.TRANSPARENT_MATERIAL,w.ShaderOutput.Color)))}},{key:"needsHighlight",get:function(){return this._highlightRenderInstanceData.some(a=>0<a.size)}},{key:"_needsUpdates",get:function(){return 0<this._instanceData.size&&1>this._updateCyclesWithStaticCamera}},{key:"_octree",get:function(){y.isNone(this._octreeCached)&&(this._octreeCached=this._buildOctree());return this._octreeCached}}]);return l}();const N=
z.create(),t=v.create(),K=R.create(),L=z.create(),M=z.create(),O=[v.fromValues(1,0,1,1),v.fromValues(0,0,1,1),v.fromValues(0,1,0,1),v.fromValues(1,1,0,1),v.fromValues(1,0,0,1)],da=new ba.DefaultMaterialDrawParameters;B.LodRenderer=fa;Object.defineProperties(B,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});