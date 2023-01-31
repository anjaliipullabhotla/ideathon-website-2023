// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/Evented ../../../../core/maybe ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../chunks/vec4 ../../../../chunks/vec4f32 ../../../../geometry/projection ../../../../geometry/support/aaBoundingBox ../../../../layers/graphics/dehydratedFeatures ../../../../support/elevationInfoUtils ../../../../symbols/support/ElevationInfo ./DrapedVisualElementResources ./LaserlineVisualElement ./VisualElementResources ../../layers/graphics/ElevationContext ../../support/engineContent/line ../../support/renderInfoUtils/line ../../webgl-engine/lib/geometryDataUtils ../../webgl-engine/lib/Material ../../webgl-engine/lib/RenderGeometry ../../webgl-engine/lib/VertexAttribute ../../webgl-engine/materials/RibbonLineMaterial".split(" "),
function(t,z,A,f,m,u,h,n,B,l,C,D,E,F,G,H,I,v,w,J,p,K,q,x){let M=function(){function r(a){this.view=null;this._attachmentOrigin=C.makeDehydratedPoint(0,0,0,null);this._attachmentOriginDirty=!0;this.events=new A;this._isDraped=!1;this._geometry=null;this._width=1;this._color=n.fromValues(1,0,1,1);this._innerWidth=0;this._innerColor=n.fromValues(1,1,1,1);this._stippleOffColor=this._stipplePattern=null;this._falloff=0;this._laserlineStyle=this._elevationInfo=null;this._laserlineEnabled=!1;this._renderOccluded=
p.RenderOccludedFlag.OccludeAndTransparentStencil;this._resources=new H.VisualElementResources({view:a.view,createResources:b=>this._createResources(b),recreateGeometry:(b,e)=>{b.geometries.length=0;this._recreateGeometry(e,b.material,b.geometries);return b.geometries}});this._attachmentOrigin.spatialReference=a.view.spatialReference;this._drapedResources=new F.DrapedVisualElementResources({view:a.view,createResources:()=>this._createDrapedResources(),recreateGeometry:b=>{b.geometries=this._createRenderGeometriesDraped(b.material);
this._attachmentOriginChanged()}});let c=!0;this._laserline=new G.LaserlineVisualElement({view:a.view});for(const b in a)b in this?"attached"===b?c=a[b]:this[b]=a[b]:console.error("Cannot set unknown property",b);this.attached=c}var g=r.prototype;g.destroy=function(){this._resources.destroy();this._drapedResources.destroy();this._laserline.destroy()};g._updateAttached=function(a){this._resources.attached=!this.isDraped&&a;this._drapedResources.attached=this.isDraped&&a;this._laserline.attached=this._laserlineAttached;
this.attached&&this._attachmentOriginChanged()};g._updateMaterial=function(){f.isSome(this._resources.resources)&&this._resources.resources.material.setParameters(this._materialParameters);f.isSome(this._drapedResources.resources)&&this._drapedResources.resources.material.setParameters(this._materialParameters)};g._recreateGeometry=function(a,c,b){const e=this._createRenderGeometries();for(const d of e)a.addGeometry(d,c),b.push(d);this._attachmentOriginChanged()};g._attachmentOriginChanged=function(){this._attachmentOriginDirty=
!0;this.events.emit("attachment-origin-changed")};g._createResources=function(a){const c=new x.RibbonLineMaterial(this._materialParameters),b=[];this._recreateGeometry(a,c,b);return{material:c,geometries:b,forEach:e=>{e(c);b.forEach(e)}}};g._createDrapedResources=function(){const a=new x.RibbonLineMaterial(this._materialParameters),c=this._createRenderGeometriesDraped(a);return{material:a,geometries:c}};g._createRenderGeometriesDraped=function(a){var c=this.geometry;if(f.isNone(c)||f.isNone(this.view.basemapTerrain.spatialReference))return[];
var b=w.geometryToRenderInfoDraped(c,this.view.basemapTerrain.spatialReference);c=[];for(const {position:e}of b.lines){b=new K.RenderGeometry(v.createGeometry({overlayInfo:{spatialReference:this.view.basemapTerrain.spatialReference,renderCoordsHelper:this.view.renderCoordsHelper},attributeData:{position:e},removeDuplicateStartEnd:this._isClosed}),a);const d=l.empty(L);l.expandWithBuffer(d,e);h.set(b.boundingSphere,.5*(d[0]+d[3]),.5*(d[1]+d[4]),0,.5*Math.sqrt((d[3]-d[0])*(d[3]-d[0])+(d[4]-d[1])*(d[4]-
d[1])));c.push(b)}return c};g.calculateMapBounds=function(a){if(f.isNone(this._resources.resources))return!1;const c=this.view.renderCoordsHelper;for(const b of this._resources.resources.geometries){const e=b.vertexAttributes.get(q.VertexAttribute.POSITION),d=new Float64Array(e.data.length);B.projectBuffer(e.data,c.spatialReference,0,d,this.view.spatialReference,0,e.data.length/3);l.expandWithBuffer(a,d)}return!0};g._createRenderGeometries=function(){var a=this.geometry;if(f.isNone(a))return[];a=
w.geometryToRenderInfo(a,this.view.elevationProvider,this.view.renderCoordsHelper,I.ElevationContext.fromElevationInfo(this.elevationInfo??new E({mode:D.getGeometryEffectiveElevationMode(a,null)})));const c=[],b=[];for(const {position:e,mapPosition:d}of a.lines)c.push(v.createGeometry({attributeData:{position:e,mapPosition:d},removeDuplicateStartEnd:this._isClosed})),b.push(e);this._laserline.pathVerticalPlane=b;return c};z._createClass(r,[{key:"isDraped",get:function(){return this._isDraped},set:function(a){a!==
this._isDraped&&(this._isDraped=a,this._updateAttached(this.attached),this._laserline.attached=this._laserlineAttached)}},{key:"_laserlineAttached",get:function(){return this.attached&&this.visible&&f.isSome(this._laserlineStyle)&&!this.isDraped&&this.laserlineEnabled}},{key:"visible",get:function(){return this._resources.visible},set:function(a){this._resources.visible=a;this._drapedResources.visible=a;this._laserline.attached=this._laserlineAttached}},{key:"attached",get:function(){return this._resources.attached||
this._drapedResources.attached},set:function(a){this._updateAttached(a)}},{key:"geometry",get:function(){return this._geometry},set:function(a){this._geometry=a;this._resources.recreateGeometry();this._drapedResources.recreateGeometry()}},{key:"width",get:function(){return this._width},set:function(a){a!==this._width&&(this._width=a,this._updateMaterial())}},{key:"color",get:function(){return this._color},set:function(a){h.exactEquals(a,this._color)||(h.copy(this._color,a),this._updateMaterial())}},
{key:"innerWidth",get:function(){return this._innerWidth},set:function(a){a!==this._innerWidth&&(this._innerWidth=a,this._updateMaterial())}},{key:"innerColor",get:function(){return this._innerColor},set:function(a){h.exactEquals(a,this._innerColor)||(h.copy(this._innerColor,a),this._updateMaterial())}},{key:"stipplePattern",get:function(){return this._stipplePattern},set:function(a){const c=f.isSome(a)!==f.isSome(this._stipplePattern);this._stipplePattern=a;c?this._resources.recreate():this._updateMaterial()}},
{key:"stippleOffColor",get:function(){return this._stippleOffColor},set:function(a){a&&this._stippleOffColor&&h.exactEquals(a,this._stippleOffColor)||(this._stippleOffColor=a?n.clone(a):null,this._updateMaterial())}},{key:"falloff",get:function(){return this._falloff},set:function(a){a!==this._falloff&&(this._falloff=a,this._updateMaterial())}},{key:"elevationInfo",get:function(){return this._elevationInfo},set:function(a){this._elevationInfo=a;this._resources.recreateGeometry()}},{key:"laserlineStyle",
get:function(){return this._laserlineStyle},set:function(a){this._laserlineStyle=a;this._laserline.attached=this._laserlineAttached;f.isSome(a)&&(this._laserline.style=a)}},{key:"laserlineEnabled",get:function(){return this._laserlineEnabled},set:function(a){this._laserlineEnabled!==a&&(this._laserlineEnabled=a,this._laserline.attached=this._laserlineAttached)}},{key:"renderOccluded",get:function(){return this._renderOccluded},set:function(a){a!==this._renderOccluded&&(this._renderOccluded=a,this._updateMaterial())}},
{key:"attachmentOrigin",get:function(){if(!this._attachmentOriginDirty)return this._attachmentOrigin;var a=f.isSome(this._resources.resources)?this._resources.resources.geometries:null;if(!a||0===a.length)return null;m.set(k,0,0,0);let c=0;for(const b of a){a=b.vertexAttributes.get(q.VertexAttribute.POSITION);const e=b.indices.get(q.VertexAttribute.POSITION),d=f.unwrap(this._resources.resources).material.isClosed(a.data,e);J.computeAttachmentOriginLines(a,e,d,y)&&(m.add(k,k,y),c++)}if(0===c)return null;
m.scale(k,k,1/c);this.view.renderCoordsHelper.fromRenderCoords(k,this._attachmentOrigin);this._attachmentOriginDirty=!1;return this._attachmentOrigin}},{key:"_isClosed",get:function(){return f.isSome(this.geometry)&&"polygon"===this.geometry.type}},{key:"_materialParameters",get:function(){return{width:this._width,color:this._color,stippleOffColor:this._stippleOffColor,stipplePattern:this._stipplePattern,stipplePreferContinuous:!1,isClosed:this._isClosed,falloff:this._falloff,innerColor:this._innerColor,
innerWidth:this._innerWidth,join:"round",hasPolygonOffset:!0,renderOccluded:this._normalizedRenderOccluded}}},{key:"_normalizedRenderOccluded",get:function(){return this.isDraped&&this._renderOccluded===p.RenderOccludedFlag.OccludeAndTransparentStencil?p.RenderOccludedFlag.OccludeAndTransparent:this._renderOccluded}}]);return r}();const L=l.create(),y=u.create(),k=u.create();t.OutlineVisualElement=M;Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});