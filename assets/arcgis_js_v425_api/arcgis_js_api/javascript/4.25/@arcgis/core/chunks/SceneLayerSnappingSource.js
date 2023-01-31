/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import t from"../core/Accessor.js";import{r,f as o,a as i,g as s,i as n}from"./maybe.js";import{isAborted as a,throwIfAborted as p}from"../core/promiseUtils.js";import{property as m}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./ensureType.js";import{subclass as c}from"../core/accessorSupport/decorators/subclass.js";import{HandleOwner as d}from"../core/HandleOwner.js";import{d as l}from"./handleUtils.js";import{E as j}from"./EdgeWorkerHandle.js";import{d as u}from"./vec3.js";import{W as h}from"./WorkerHandle.js";import{f as y}from"./sphere.js";import{h as g}from"./elevationInfoUtils.js";import{E as f}from"./SnappingManager.js";import{V as w}from"./VertexSnappingCandidate.js";import"../core/Handles.js";import"./get.js";import"./utils.js";import"./metadata.js";import"./object.js";import"./Logger.js";import"../config.js";import"./string.js";import"./ArrayPool.js";import"./tracking.js";import"./watch.js";import"../core/scheduling.js";import"./nextTick.js";import"../core/Error.js";import"./WatchUpdatingTracking.js";import"../core/reactiveUtils.js";import"./workerHelper.js";import"./BufferView.js";import"./vec2.js";import"./common.js";import"./mathUtils.js";import"./InterleavedLayout.js";import"./types.js";import"./edgeProcessing.js";import"./deduplicate.js";import"./VertexAttribute.js";import"./glUtil.js";import"./enums3.js";import"./VertexElementDescriptor.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"./Queue.js";import"../core/workers/RemoteClient.js";import"../kernel.js";import"../core/urlUtils.js";import"./assets.js";import"../request.js";import"../intl.js";import"./number.js";import"./jsonMap.js";import"./locale.js";import"./messages.js";import"./mat4.js";import"./vec4f64.js";import"./vector.js";import"./ray.js";import"./byteSizeEstimations.js";import"./mat3f64.js";import"./mat4f64.js";import"./quatf64.js";import"./vec2f64.js";import"./unitConversionUtils.js";import"./lengthUtils.js";import"./unitUtils.js";import"./projectionEllipsoid.js";import"../geometry/SpatialReference.js";import"../core/JSONSupport.js";import"./writer.js";import"./Ellipsoid.js";import"../core/Evented.js";import"../geometry/projection.js";import"./SimpleObservable.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"./reader.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"./pe.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./aaBoundingRect.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"./RightAngleSnappingHint.js";import"./QueryEngineResult.js";import"./quantizationUtils.js";import"../geometry/support/jsonUtils.js";import"./ItemCache.js";import"./MemCache.js";import"../core/sql/WhereClause.js";import"./_commonjsHelpers.js";import"./utils13.js";import"./generateRendererUtils.js";import"./colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../Color.js";import"./colorUtils.js";import"./enumeration.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../symbols/Symbol.js";import"./projectionSupport.js";import"./json.js";import"./SnappingCandidate.js";import"./utils21.js";import"../geometry/support/normalizeUtils.js";import"./normalizeUtilsCommon.js";import"./simplify.js";import"../geometry.js";import"./typeUtils.js";import"./utils4.js";import"./utils5.js";import"./featureConversionUtils.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"../layers/support/fieldUtils.js";import"./arcadeOnDemand.js";import"./Settings2.js";import"./geometry2dUtils.js";import"./viewUtils.js";import"./screenUtils.js";import"../core/Collection.js";import"./shared.js";import"../views/interactive/snapping/SnappingOptions.js";import"../views/interactive/snapping/FeatureSnappingLayerSource.js";import"./PointSnappingHint.js";let v=class extends d{constructor(e){super(e),this.availability=0,this._ids=new Set,this._tmpP=u()}destroy(){this._workerHandle.destroy(),this._workerHandle=null}initialize(){this._workerHandle=new S(this.schedule,{fetchAllEdgeLocations:(e,t)=>this._fetchAllEdgeLocations(e,t)})}async fetchCandidates(e,t){const r=e.coordinateHelper,o=r.toXYZ(e.point);this.renderCoordsHelper.toRenderCoords(o,r.spatialReference,o);const i=e.distance,s="number"==typeof i?i:i.distance,n=await this._workerHandle.invoke({bounds:y(o[0],o[1],o[2],s),types:e.types},t);return n.candidates.sort(((e,t)=>e.distance-t.distance)),n.candidates.map((e=>this._convertCandidate(r,e)))}async add(e,t){this._ids.add(e.id),await this._workerHandle.invokeMethod("add",e,t)}async remove(e,t){this._ids.delete(e.id),await this._workerHandle.invokeMethod("remove",e,t)}_convertCandidate(e,t){switch(t.type){case"edge":return new f({coordinateHelper:e,objectId:t.objectId,targetPoint:this._convertRenderCoordinate(e,t.target),edgeStart:this._convertRenderCoordinate(e,t.start),edgeEnd:this._convertRenderCoordinate(e,t.end),elevationInfo:g});case"vertex":return new w({coordinateHelper:e,objectId:t.objectId,targetPoint:this._convertRenderCoordinate(e,t.target),elevationInfo:g})}}_convertRenderCoordinate(e,t){return this.renderCoordsHelper.fromRenderCoords(t,this._tmpP,e.spatialReference),e.fromXYZ(this._tmpP)}async _fetchAllEdgeLocations(e,t){const r=[],o=[];for(const{id:i,uid:s}of e.components)this._ids.has(i)&&r.push((async()=>{const e=await this.fetchEdgeLocations(i,t.signal);return o.push(e.locations.buffer),{id:i,uid:s,objectIds:e.objectIds,locations:e.locations.buffer,origin:e.origin,type:e.type}})());return{result:{components:(await Promise.all(r)).filter((({id:e})=>this._ids.has(e)))},transferList:o}}};e([m({constructOnly:!0})],v.prototype,"renderCoordsHelper",void 0),e([m({constructOnly:!0})],v.prototype,"fetchEdgeLocations",void 0),e([m({constructOnly:!0})],v.prototype,"schedule",void 0),e([m({readOnly:!0})],v.prototype,"availability",void 0),v=e([c("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],v);class S extends h{constructor(e,t){super("SceneLayerSnappingSourceWorker","fetchCandidates",{},e,{strategy:"dedicated",client:t})}}let _=class extends d{constructor(e){super(e),this.availability=1,this._abortController=new AbortController}get updating(){return this.updatingHandles.updating}destroy(){this._tracker=r(this._tracker),this._abortController=o(this._abortController)}initialize(){const{view:e}=this,t=e.resourceController;this._edgeWorker=new j((e=>t.schedule(e))),this._workerHandle=new v({renderCoordsHelper:this.view.renderCoordsHelper,schedule:e=>t.schedule(e),fetchEdgeLocations:async(e,t)=>{if(i(this._tracker))throw new Error("tracker-not-initialized");return this._tracker.fetchEdgeLocations(e,this._edgeWorker,t)}}),this.updatingHandles.addPromise(this._setupLayerView()),this.handles.add([l(this._workerHandle),l(this._edgeWorker)])}async fetchCandidates(e,t){return this._workerHandle.fetchCandidates(e,t)}refresh(){}async _setupLayerView(){if(this.destroyed)return;const e=s(this._abortController,(e=>e.signal)),t=await this.getLayerView();i(t)||a(e)||(this._tracker=t.trackSnappingSources({add:(t,r)=>{this.updatingHandles.addPromise(this._workerHandle.add({id:t,bounds:r},e))},remove:t=>{this.updatingHandles.addPromise(this._workerHandle.remove({id:t},e))}}))}};e([m({constructOnly:!0})],_.prototype,"getLayerView",void 0),e([m({constructOnly:!0})],_.prototype,"view",void 0),e([m({readOnly:!0})],_.prototype,"updating",null),e([m({readOnly:!0})],_.prototype,"availability",void 0),_=e([c("esri.views.interactive.snapping.featureSources.I3SSnappingSource")],_);let C=class extends t{constructor(e){super(e),this.availability=1,this._i3sSources=[]}get updating(){return this._i3sSources.some((e=>e.updating))}destroy(){this._i3sSources.forEach((e=>e.destroy())),this._i3sSources.length=0}initialize(){const{view:e}=this,t=this.layerSource.layer;this._i3sSources="building-scene"===t.type?this._getBuildingSceneI3SSources(e,t):[this._getSceneLayerI3SSource(e,t)]}async fetchCandidates(e,t){const r=await Promise.all(this._i3sSources.map((r=>r.fetchCandidates(e,t))));return p(t),r.flat()}refresh(){this._i3sSources.forEach((e=>e.refresh()))}_getBuildingSceneI3SSources(e,t){return t.allSublayers.toArray().map((r=>"building-component"===r.type?new _({getLayerView:async()=>(await e.whenLayerView(t)).whenSublayerView(r),view:e}):null)).filter(n)}_getSceneLayerI3SSource(e,t){return new _({getLayerView:async()=>{const r=await e.whenLayerView(t);return"scene-layer-graphics-3d"===r.type?void 0:r},view:e})}};e([m({constructOnly:!0})],C.prototype,"layerSource",void 0),e([m({constructOnly:!0})],C.prototype,"view",void 0),e([m({readOnly:!0})],C.prototype,"updating",null),e([m({readOnly:!0})],C.prototype,"availability",void 0),C=e([c("esri.views.interactive.snapping.featureSources.SceneLayerSnappingSource")],C);export{C as SceneLayerSnappingSource};
