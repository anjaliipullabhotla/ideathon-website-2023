/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import"../geometry.js";import e from"../Graphic.js";import{c as i}from"./asyncUtils.js";import s from"../core/Collection.js";import o from"../core/Error.js";import r from"../core/Evented.js";import p from"../core/Handles.js";import{L as n}from"./Logger.js";import{d as a,a as l,i as c,f as h,j as m}from"./maybe.js";import{z as d}from"./quantityUtils.js";import{when as y,pausable as g,watch as v,syncAndInitial as u}from"../core/reactiveUtils.js";import{c as j}from"./screenUtils.js";import{property as _}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./ensureType.js";import{subclass as f}from"../core/accessorSupport/decorators/subclass.js";import{l as b,b as x,o as S}from"../geometry/Polygon.js";import G from"../layers/GraphicsLayer.js";import M from"../symbols/SimpleMarkerSymbol.js";import{V as w}from"./ViewingMode.js";import{S as V}from"./SnappingVisualizer2D.js";import{c as I}from"./drawUtils.js";import{H as C,G as E}from"./GraphicMover.js";import{b as k}from"../widgets/Sketch/SketchViewModel.js";import{s as U}from"./settings.js";import{V as O}from"./InputManager.js";import{S as R}from"./keybindings.js";import{E as T}from"./EditGeometryOperations.js";import L from"../views/interactive/sketch/SketchTooltipOptions.js";import{S as D}from"./SnappingContext.js";import{f as F,h as H,T as A}from"./automaticLengthMeasurementUtils.js";import{T as P,e as z}from"./TranslateTooltipInfos.js";import{b as B}from"./automaticAreaMeasurementUtils.js";import q from"../geometry/Polyline.js";import W from"../geometry/Point.js";import"../geometry/Extent.js";import"./string.js";import"./object.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"./get.js";import"./utils.js";import"./handleUtils.js";import"./metadata.js";import"./ArrayPool.js";import"./tracking.js";import"./watch.js";import"../core/scheduling.js";import"./nextTick.js";import"../core/promiseUtils.js";import"../config.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./writer.js";import"../geometry/support/webMercatorUtils.js";import"./Ellipsoid.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"./typeUtils.js";import"./jsonMap.js";import"../geometry/support/jsonUtils.js";import"./extentUtils.js";import"../PopupTemplate.js";import"../core/Clonable.js";import"../layers/support/fieldUtils.js";import"./arcadeOnDemand.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"./enumeration.js";import"../popup/support/FieldInfoFormat.js";import"./date.js";import"./number.js";import"./locale.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"./chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"./shared.js";import"./SimpleObservable.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"./colorUtils.js";import"./mathUtils.js";import"./vec3.js";import"./common.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils2.js";import"../symbols/edges/Edges3D.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"./lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils3.js";import"./colors.js";import"./symbolLayerUtils3D.js";import"./aaBoundingBox.js";import"./aaBoundingRect.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../core/urlUtils.js";import"./persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../portal/Portal.js";import"../kernel.js";import"../request.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"./Thumbnail.js";import"./calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"./unitUtils.js";import"./projectionEllipsoid.js";import"./GraphicsCollection.js";import"../core/HandleOwner.js";import"./WatchUpdatingTracking.js";import"../layers/Layer.js";import"../layers/mixins/BlendLayer.js";import"./jsonUtils.js";import"./parser.js";import"./mat4f32.js";import"./mat4.js";import"./_commonjsHelpers.js";import"../layers/mixins/ScaleRangeLayer.js";import"./ElevationInfo.js";import"./unitConversionUtils.js";import"./lengthUtils.js";import"./vec2.js";import"./vec2f64.js";import"./enums.js";import"./Settings2.js";import"./layerViewUtils.js";import"./GraphicManipulator.js";import"../geometry/projection.js";import"./pe.js";import"./assets.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"./elevationInfoUtils.js";import"./defaults.js";import"./defaultsJSON.js";import"./drapedUtils.js";import"./screenUtils2.js";import"../geometry/Circle.js";import"../geometry/support/geodesicUtils.js";import"../views/interactive/sketch/SketchLabelOptions.js";import"./SnappingManager.js";import"./RightAngleSnappingHint.js";import"./QueryEngineResult.js";import"./quantizationUtils.js";import"./ItemCache.js";import"./MemCache.js";import"../core/sql/WhereClause.js";import"./utils13.js";import"./generateRendererUtils.js";import"./colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"./projectionSupport.js";import"./json.js";import"./SnappingCandidate.js";import"./utils21.js";import"../geometry/support/normalizeUtils.js";import"./normalizeUtilsCommon.js";import"./simplify.js";import"./utils4.js";import"./utils5.js";import"./featureConversionUtils.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"./geometry2dUtils.js";import"./viewUtils.js";import"../views/interactive/snapping/SnappingOptions.js";import"../views/interactive/snapping/FeatureSnappingLayerSource.js";import"./hitTestSelectUtils.js";import"./compilerUtils.js";import"./Queue.js";import"./ObservableValue.js";import"./vec4f64.js";import"./plane.js";import"./vector.js";import"./ray.js";import"./byteSizeEstimations.js";import"./mat3f64.js";import"./mat4f64.js";import"./quatf64.js";import"./mathUtils2.js";import"./PointSnappingHint.js";import"../intl.js";import"./messages.js";import"./quantityFormatUtils.js";import"./unitFormatUtils.js";import"./Cyclical.js";import"../widgets/Widget.js";import"./domUtils.js";import"./uuid.js";import"./projector.js";import"./widgetUtils.js";import"./jsxWidgetSupport.js";import"./messageBundle.js";import"./jsxFactory.js";import"./euclideanLengthMeasurementUtils.js";import"./measurementUtils2.js";import"../geometry/geometryEngine.js";import"./geometryEngineBase.js";import"./hydrated.js";import"./euclideanAreaMeasurementUtils.js";import"./earcut.js";import"./triangle.js";import"./lineSegment.js";class Q{constructor(t,e,i){this.graphic=t,this.mover=e,this.selected=i,this.type="reshape-start"}}class N{constructor(t,e,i){this.graphic=t,this.mover=e,this.selected=i,this.type="reshape"}}class J{constructor(t,e,i){this.graphic=t,this.mover=e,this.selected=i,this.type="reshape-stop"}}class K{constructor(t,e,i){this.mover=t,this.dx=e,this.dy=i,this.type="move-start"}}class X{constructor(t,e,i){this.mover=t,this.dx=e,this.dy=i,this.type="move"}}class Y{constructor(t,e,i){this.mover=t,this.dx=e,this.dy=i,this.type="move-stop"}}class Z{constructor(t){this.added=t,this.type="vertex-select"}}class ${constructor(t){this.removed=t,this.type="vertex-deselect"}}class tt{constructor(t,e,i,s){this.added=t,this.graphic=e,this.oldGraphic=i,this.vertices=s,this.type="vertex-add"}}class et{constructor(t,e,i,s){this.removed=t,this.graphic=e,this.oldGraphic=i,this.vertices=s,this.type="vertex-remove"}}const it=U.reshapeGraphics,st={vertices:{default:new M({style:"circle",size:it.vertex.size,color:it.vertex.color,outline:{color:it.vertex.outlineColor,width:1}}),hover:new M({style:"circle",size:it.vertex.hoverSize,color:it.vertex.hoverColor,outline:{color:it.vertex.hoverOutlineColor,width:1}}),selected:new M({style:"circle",size:it.selected.size,color:it.selected.color,outline:{color:it.selected.outlineColor,width:1}})},midpoints:{default:new M({style:"circle",size:it.midpoint.size,color:it.midpoint.color,outline:{color:it.midpoint.outlineColor,width:1}}),hover:new M({style:"circle",size:it.midpoint.size,color:it.midpoint.color,outline:{color:it.midpoint.outlineColor,width:1}})}};let ot=class extends r.EventedAccessor{constructor(t){super(t),this._activeOperationInfo=null,this._editGeometryOperations=null,this._handles=new p,this._graphicAttributes={esriSketchTool:"box"},this._mover=null,this._snappingTask=null,this._stagedVertex=null,this._tooltip=null,this._viewHandles=new p,this.callbacks={onReshapeStart(){},onReshape(){},onReshapeStop(){},onMoveStart(){},onMove(){},onMoveStop(){},onGraphicClick(){}},this.enableMidpoints=!0,this.enableMovement=!0,this.enableVertices=!0,this.graphic=null,this.layer=null,this.midpointGraphics=new s,this.midpointSymbol=new M({style:"circle",size:6,color:[200,200,200],outline:{color:[100,100,100],width:1}}),this.selectedVertices=[],this.snappingManager=null,this.tooltipOptions=new L,this.type="reshape",this.vertexGraphics=new s,this.view=null}initialize(){const t=this.view;this._highlightHelper=new C({view:t}),this._setup(),this._handles.add([y((()=>t?.ready),(()=>{const{layer:t,view:e}=this;k(e,t),this._viewHandles.add(e.on("key-down",(t=>this._keyDownHandler(t)),O.TOOL))}),{once:!0,initial:!0}),g((()=>this.graphic),(()=>this.refresh())),g((()=>this.layer),((t,e)=>{e&&(this._clearSelection(),this._resetGraphics(e)),this.refresh()})),g((()=>this.enableMidpoints),(()=>this.refresh())),v((()=>this.tooltipOptions.enabled),(t=>{this._tooltip=t?new A({view:this.view}):a(this._tooltip)}),u)])}destroy(){this._reset(),this._mover?.destroy(),this._mover=null,this._tooltip=a(this._tooltip),this._handles=a(this._handles),this._viewHandles=a(this._viewHandles)}set highlightsEnabled(t){this._highlightHelper?.removeAll(),this._set("highlightsEnabled",t),this._setUpHighlights()}get state(){const t=!!this.get("view.ready"),e=!(!this.get("graphic")||!this.get("layer"));return t&&e?"active":t?"ready":"disabled"}set symbols(t){const{midpoints:e=st.midpoints,vertices:i=st.vertices}=t||{};this._set("symbols",{midpoints:e,vertices:i})}isUIGraphic(t){const e=[];return this.graphic&&e.push(this.graphic),e.concat(this.vertexGraphics.items,this.midpointGraphics.items),e.length&&e.includes(t)}refresh(){this._reset(),this._setup()}reset(){this.graphic=null}clearSelection(){this._clearSelection()}removeSelectedVertices(){this.selectedVertices.length&&this._removeVertices(this.selectedVertices)}_setup(){const{graphic:t,layer:e}=this;if(!e||!t||l(t.geometry))return;const i=t.geometry;"mesh"!==i.type&&"extent"!==i.type?("polygon"===i.type&&b(i),this._setUpHighlights(),this._setupGraphics(),this._setupMover()):this._logGeometryTypeError()}_setUpHighlights(){this.highlightsEnabled&&this.graphic&&this._highlightHelper.add(this.graphic)}_setUpGeometryHelper(){const t=this.graphic.geometry;if(l(t)||"mesh"===t.type||"extent"===t.type)return void this._logGeometryTypeError();const e="multipoint"===t.type?new q({paths:t.points,spatialReference:t.spatialReference}):t;this._editGeometryOperations=T.fromGeometry(e,w.Local)}_saveSnappingContextForHandle(t,e){this._snappingGraphicsLayer=new G({listMode:"hide",internal:!0,title:"Reshape snapping layer"}),this.view.map.layers.add(this._snappingGraphicsLayer),this._snappingContext=new D({editGeometryOperations:this._editGeometryOperations,elevationInfo:{mode:"on-the-ground",offset:0},pointer:e.viewEvent?.pointerType||"mouse",excludeFeature:this.graphic,visualizer:new V(this._snappingGraphicsLayer),vertexHandle:this._getVertexFromEditGeometry(t)})}_reset(){this._clearSelection(),this._highlightHelper.removeAll(),this._updateTooltip(),this._resetGraphics(),this._resetSnappingStateVars(),this._activeOperationInfo=null,this._mover&&this._mover.destroy(),this._mover=null,this.view.cursor="default"}_resetSnappingStateVars(){c(this.snappingManager)&&this.snappingManager.doneSnapping(),c(this._snappingGraphicsLayer)&&(this.view?.map&&this.view.map.layers.remove(this._snappingGraphicsLayer),this._snappingGraphicsLayer.destroy()),this._editGeometryOperations=a(this._editGeometryOperations),this._snappingTask=h(this._snappingTask),this._snappingTask=null,this._snappingContext=null,this._stagedVertex=null}_resetGraphics(t){this._removeMidpointGraphics(t),this._removeVertexGraphics(t),this._set("selectedVertices",[])}_removeMidpointGraphics(t){const e=t||this.layer;e&&e.removeMany(this.midpointGraphics.items),this.midpointGraphics.items.forEach((t=>t.destroy())),this.midpointGraphics.removeAll()}_removeVertexGraphics(t){const e=t||this.layer;e&&e.removeMany(this.vertexGraphics.items),this.vertexGraphics.items.forEach((t=>t.destroy())),this.vertexGraphics.removeAll()}_getCoordinatesForUI(t){const e=x(t.clone());if("polygon"===t.type)for(const t of e){const e=t[t.length-1];t[0][0]===e[0]&&t[0][1]===e[1]&&t.length>2&&t.pop()}return e}_setupGraphics(){const t=this.graphic.geometry;if(c(t)&&("polyline"===t.type||"polygon"===t.type)){const e=this._getCoordinatesForUI(t);this.enableMidpoints&&this._setUpMidpointGraphics(e),this.enableVertices&&this._setUpVertexGraphics(e)}}_setUpMidpointGraphics(t){this._removeMidpointGraphics();const e=this._createMidpointGraphics(t);this.midpointGraphics.addMany(e),this.layer.addMany(e)}_setUpVertexGraphics(t){this._removeVertexGraphics();const e=this._createVertexGraphics(t);this.vertexGraphics.addMany(e),this._storeRelatedVertexIndices(),this.layer.addMany(e)}_createVertexGraphics(t){const{_graphicAttributes:i,symbols:s,view:{spatialReference:o}}=this,r=[];return t?.forEach(((t,p)=>{t.forEach(((t,n)=>{const[a,l]=t;r.push(new e({geometry:new W({x:a,y:l,spatialReference:o}),symbol:s?.vertices?.default,attributes:{...i,pathIndex:p,pointIndex:n}}))}))})),r}_createMidpointGraphics(t){const{_graphicAttributes:i,symbols:s,view:{spatialReference:o}}=this,r=[];return t?.forEach(((t,p)=>{t.forEach(((n,a)=>{const[l,c]=n,h=t[a+1]?a+1:0;if("polygon"===m(this.graphic.geometry,"type")||0!==h){const[n,m]=t[h],[d,y]=S([l,c],[n,m]);r.push(new e({geometry:new W({x:d,y,spatialReference:o}),symbol:s.midpoints.default,attributes:{...i,pathIndex:p,pointIndexStart:a,pointIndexEnd:h}}))}}))})),r}_storeRelatedVertexIndices(){const t=this.vertexGraphics.items;if(!t)return;const e=t.map((({geometry:t})=>({x:t.x,y:t.y})));for(let i=0;i<e.length;i++){const s=[];for(let t=0;t<e.length;t++){if(i===t)continue;const o=e[i],r=e[t];o.x===r.x&&o.y===r.y&&s.push(t)}t[i].attributes.relatedGraphicIndices=s}}_setupMover(){const{enableMovement:t,graphic:e,midpointGraphics:i,vertexGraphics:s,view:o}=this,r=s.concat(i).items;t&&r.push(e),this._mover=new E({enableMoveAllGraphics:!1,highlightsEnabled:!1,indicatorsEnabled:!1,graphics:r,view:o,callbacks:{onGraphicClick:t=>this._onGraphicClickCallback(t),onGraphicMoveStart:t=>this._onGraphicMoveStartCallback(t),onGraphicMove:t=>this._onGraphicMoveCallback(t),onGraphicMoveStop:t=>this._onGraphicMoveStopCallback(t),onGraphicPointerOver:t=>this._onGraphicPointerOverCallback(t),onGraphicPointerOut:t=>this._onGraphicPointerOutCallback(t)}})}_onGraphicClickCallback(t){t.viewEvent.stopPropagation();const e=t.graphic;if(e===this.graphic)this.clearSelection(),this.emit("graphic-click",t),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(t);else if(this._isMidpoint(e)){if(2===t.viewEvent.button)return;const i=this.graphic.clone(),s=this._createVertexFromMidpoint(e);this.refresh(),this._emitVertexAddEvent([e],i,s)}else this._isVertex(e)&&(t.viewEvent.stopPropagation(),2===t.viewEvent.button?this._removeVertices(e):(t.viewEvent.native.shiftKey||this._clearSelection(),this.selectedVertices.includes(e)?this._removeFromSelection(e,!0):this._addToSelection(e)))}_setUpOperation(t){const{graphic:e,dx:i,dy:s}=t,o=e===this.graphic;this._resetSnappingStateVars(),this._setUpGeometryHelper(),this._saveSnappingContextForHandle(e,t),this._activeOperationInfo={target:this.graphic,mover:e,operationType:o?"move":"reshape",totalDx:i,totalDy:s}}_onGraphicMoveStartCallback(t){const{dx:e,dy:i,graphic:s}=t;if(s===this.graphic){const{geometry:o}=s;return this._setUpOperation(t),this._emitMoveStartEvent(e,i),void(c(o)&&"point"===o.type&&this._onHandleMove(s,e,i,t,(()=>{this._updateTooltip(this.graphic,t.viewEvent),this._emitMoveEvent(e,i)})))}if(!this.selectedVertices.includes(s)){if(this._clearSelection(),this._isMidpoint(s)){const t=this.graphic.clone(),e=this._createVertexFromMidpoint(s);this._emitVertexAddEvent([s],t,e)}this._addToSelection(s)}this._setUpOperation(t),this._emitReshapeStartEvent(s),this._onHandleMove(s,e,i,t,(()=>{this._updateTooltip(s,t.viewEvent),this._emitReshapeEvent(s)}))}_onGraphicMoveCallback(t){const{dx:e,dy:i,graphic:s}=t;this._activeOperationInfo.totalDx+=e,this._activeOperationInfo.totalDy+=i;const{operationType:o}=this._activeOperationInfo,{geometry:r}=s;if(!l(r))if("move"!==o)this._onHandleMove(s,e,i,t,(()=>{this._updateTooltip(s,t.viewEvent),this._emitReshapeEvent(s)}));else if("point"===r.type)this._onHandleMove(s,e,i,t,(()=>{this._updateTooltip(this.graphic,t.viewEvent),this._emitMoveEvent(e,i)}));else if("polyline"===r.type||"polygon"===r.type){const s=this._getCoordinatesForUI(r);this._updateVertexGraphicLocations(s),this._updateTooltip(this.graphic,t.viewEvent),this._emitMoveEvent(e,i)}}_onGraphicMoveStopCallback(t){const{dx:e,dy:i,graphic:s}=t,{operationType:o}=this._activeOperationInfo;this._activeOperationInfo.totalDx+=e,this._activeOperationInfo.totalDy+=i,this._onHandleMove(s,e,i,t,(()=>"move"===o?this._emitMoveStopEvent():this._emitReshapeStopEvent(s))),this._isMidpoint(s)?this.refresh():(this._updateTooltip(this._isVertex(s)?s:null),this._resetSnappingStateVars(),this._activeOperationInfo=null)}_updateVertexGraphicLocations(t){const e=this.view.spatialReference;for(const i of this.vertexGraphics){const{pathIndex:s,pointIndex:o}=i.attributes,[r,p]=t[s][o];i.geometry=new W({x:r,y:p,spatialReference:e})}this._updateMidpointGraphicLocations(t)}_updateMidpointGraphicLocations(t){for(const e of this.midpointGraphics){const{pathIndex:i,pointIndexStart:s,pointIndexEnd:o}=e.attributes,[r,p]=t[i][s],[n,a]=t[i][o],[l,c]=S([r,p],[n,a]);e.geometry=new W({x:l,y:c,spatialReference:this.view.spatialReference})}}_getIndicesForVertexGraphic({attributes:t}){return[t?.pathIndex||0,t?.pointIndex||0]}_getVertexFromEditGeometry(t){const[e,i]=this._getIndicesForVertexGraphic(t);return this._editGeometryOperations.data.components[e].vertices[i]}_onHandleMove(t,e,s,o,r){if(h(this._snappingTask),!this._snappingContext)return;const p=t.geometry,n="graphic-move-stop"===o.type;if(c(this.snappingManager)&&this.selectedVertices.length<2&&!n){const o=this.snappingManager;this._stagedVertex=o.update({point:p,context:this._snappingContext}),this._syncGeometryAfterVertexMove(t,new W(this._stagedVertex),e,s,n),r(),this._snappingTask=i((async i=>{const a=await o.snap({point:p,context:this._snappingContext,signal:i});a.valid&&(this._stagedVertex=a.apply(),this._syncGeometryAfterVertexMove(t,new W(this._stagedVertex),e,s,n),r())}))}else{const i=c(this._stagedVertex)?new W(this._stagedVertex):p;this._syncGeometryAfterVertexMove(t,i,e,s,n),r()}}async _syncGeometryAfterVertexMove(t,e,i,s,o=!1){const r=this._editGeometryOperations.data.geometry;if("point"===r.type)t.geometry=e;else{const{x:p,y:n}=e,[a,l]=this._getIndicesForVertexGraphic(t);let c=x(r);const h=c[a].length-1;c[a][l]=[p,n],"polygon"===r.type&&(0===l?c[a][h]=[p,n]:l===h&&(c[a][0]=[p,n])),this._isVertex(t)&&(c=this._moveRelatedCoordinates(c,t,p,n),c=this._moveSelectedHandleCoordinates(c,t,i,s,"polygon"===r.type),this._updateMidpointGraphicLocations(c)),this.graphic.geometry=r.clone();const m=this._getVertexFromEditGeometry(t),d=p-m.pos[0],y=n-m.pos[1];this._editGeometryOperations.moveVertices([m],d,y,0),o&&(this._mover?this._mover.updateGeometry(this._mover.graphics.indexOf(t),e):t.geometry=e)}}_moveRelatedCoordinates(t,e,i,s){const{relatedGraphicIndices:o}=e.attributes;for(const r of o){const o=this.vertexGraphics.getItemAt(r),{pathIndex:p,pointIndex:n}=o.attributes;t[p][n]=[i,s],o.geometry=e.geometry}return t}_moveSelectedHandleCoordinates(t,e,i,s,o){for(const r of this.selectedVertices)if(r!==e){const{pathIndex:e,pointIndex:p,relatedGraphicIndices:n}=r.attributes,a=I(r.geometry,i,s,this.view),l=t[e].length-1;t[e][p]=[a.x,a.y],r.geometry=a,o&&(0===p?t[e][l]=[a.x,a.y]:p===l&&(t[e][0]=[a.x,a.y]));for(const e of n){const i=this.vertexGraphics.getItemAt(e),{pathIndex:s,pointIndex:o}=i.attributes;t[s][o]=[a.x,a.y],i.geometry=a}}return t}_onGraphicPointerOverCallback(t){const e=t.graphic,i=this._isVertex(e);i&&!this._isSelected(e)&&(e.symbol=this.symbols.vertices.hover),this._updateTooltip(i?e:null),this._updateHoverCursor(e)}_onGraphicPointerOutCallback(t){const e=t.graphic;this._isVertex(e)&&!this._isSelected(e)&&(e.symbol=this.symbols.vertices.default),this.view.cursor="default",this._updateTooltip()}_createVertexFromMidpoint(t){const{_graphicAttributes:e,graphic:i}=this,s=i.geometry;if(l(s)||"polygon"!==s.type&&"polyline"!==s.type)return[];const o=s.clone(),r=[],{pathIndex:p,pointIndexStart:n,pointIndexEnd:a}=t.attributes,{x:c,y:h}=t.geometry,m=0===a?n+1:a,d=x(o);return d[p].splice(m,0,[c,h]),t.attributes={...e,pathIndex:p,pointIndex:m,relatedGraphicIndices:[]},r.push({coordinates:d[p][m],componentIndex:p,vertexIndex:m}),this.graphic.geometry=o,r}_addToSelection(t){t instanceof e&&(t=[t]);for(const e of t)e.symbol=this.symbols.vertices.selected;this._set("selectedVertices",this.selectedVertices.concat(t)),this._emitSelectEvent(t)}_removeFromSelection(t,i){const{vertices:s}=this.symbols,o=i?s.hover:s.default;t instanceof e&&(t=[t]);for(const e of t)this.selectedVertices.splice(this.selectedVertices.indexOf(e),1),this._set("selectedVertices",this.selectedVertices),e.set("symbol",o);this._emitDeselectEvent(t)}_clearSelection(){if(this.selectedVertices.length){const t=this.selectedVertices;for(const t of this.selectedVertices)t.set("symbol",this.symbols.vertices.default);this._set("selectedVertices",[]),this._emitDeselectEvent(t)}}_keyDownHandler(t){R.delete.includes(t.key)&&!t.repeat&&this.selectedVertices.length&&this._removeVertices(this.selectedVertices)}_removeVertices(t){const i=this.graphic.geometry;if(l(i)||"polygon"!==i.type&&"polyline"!==i.type)return;if("polygon"===i.type&&this.vertexGraphics.length<4||this.vertexGraphics.length<3)return;t instanceof e&&(t=[t]);const s=this.graphic.clone(),o=i.clone();let r=x(o);const p=[];t instanceof e&&(t=[t]);for(const e of t){const{x:t,y:i}=e.geometry;for(let e=0;e<r.length;e++){const s=r[e];for(let o=0;o<s.length;o++){const[n,a]=s[o];t===n&&i===a&&(p.push({coordinates:r[e][o],componentIndex:e,vertexIndex:o}),r[e].splice(Number(o),1))}}}if("polygon"===o.type)r=r.filter((t=>{if(t.length<2)return!1;const[e,i]=t[0],[s,o]=t[t.length-1];return(2!==t.length||e!==s||i!==o)&&(e===s&&i===o||t.push(t[0]),!0)})),o.rings=r;else{for(const t of r)1===t.length&&r.splice(r.indexOf(t),1);o.paths=r}this.graphic.geometry=o,this.refresh(),this._emitVertexRemoveEvent(t,s,p)}_isVertex(t){return this.vertexGraphics.includes(t)}_isSelected(t){return this._isVertex(t)&&this.selectedVertices.includes(t)}_isMidpoint(t){return this.midpointGraphics.includes(t)}_updateHoverCursor(t){this.view.cursor=this._isMidpoint(t)?"copy":"move"}_updateTooltip(t,e){l(this._tooltip)||(t?t===this.graphic?this._updateMoveGraphicTooltip(e):this._updateMoveVertexTooltip(e):this._tooltip.clear())}_updateMoveGraphicTooltip(t){const{_tooltip:e,tooltipOptions:i,view:s}=this;if(l(e))return;const o=new P({tooltipOptions:i});if(t){const{x:e,y:i}=t.origin,r=s.toMap(t),p=s.toMap(j(e,i)),n=F(p,r);o.distance=c(n)?n:d}e.info=o}_updateMoveVertexTooltip(t){const{_tooltip:e,graphic:{geometry:i},tooltipOptions:s,view:o}=this;if(l(e))return;const r=new z({tooltipOptions:s});if(c(i)&&("polygon"===i.type?r.area=B(i):"polyline"===i.type&&(r.totalLength=H(i))),t){const{x:e,y:i}=t.origin,s=o.toMap(t),p=o.toMap(j(e,i)),n=F(p,s);r.distance=c(n)?n:d}e.info=r}_emitMoveStartEvent(t,e){const i=new K(this.graphic,t,e);this.emit("move-start",i),this.callbacks.onMoveStart&&this.callbacks.onMoveStart(i)}_emitMoveEvent(t,e){const i=new X(this.graphic,t,e);this.emit("move",i),this.callbacks.onMove&&this.callbacks.onMove(i)}_emitMoveStopEvent(){const{totalDx:t,totalDy:e}=this._activeOperationInfo,i=new Y(this.graphic,t,e);this.emit("move-stop",i),this.callbacks.onMoveStop&&this.callbacks.onMoveStop(i)}_emitReshapeStartEvent(t){const e=new Q(this.graphic,t,this.selectedVertices);this.emit("reshape-start",e),this.callbacks.onReshapeStart&&this.callbacks.onReshapeStart(e)}_emitReshapeEvent(t){const e=new N(this.graphic,t,this.selectedVertices);this.emit("reshape",e),this.callbacks.onReshape&&this.callbacks.onReshape(e)}_emitReshapeStopEvent(t){const e=new J(this.graphic,t,this.selectedVertices);this.emit("reshape-stop",e),this.callbacks.onReshapeStop&&this.callbacks.onReshapeStop(e)}_emitSelectEvent(t){const e=new Z(t);this.emit("select",e),this.callbacks.onVertexSelect&&this.callbacks.onVertexSelect(e)}_emitDeselectEvent(t){const e=new $(t);this.emit("deselect",e),this.callbacks.onVertexDeselect&&this.callbacks.onVertexDeselect(e)}_emitVertexAddEvent(t,e,i){const s=new tt(t,this.graphic,e,i);this.emit("vertex-add",s),this.callbacks.onVertexAdd&&this.callbacks.onVertexAdd(s)}_emitVertexRemoveEvent(t,e,i){const s=new et(t,this.graphic,e,i);this.emit("vertex-remove",s),this.callbacks.onVertexRemove&&this.callbacks.onVertexRemove(s)}_logGeometryTypeError(){n.getLogger(this.declaredClass).error(new o("reshape:invalid-geometry","Reshape operation not supported for the provided graphic. The geometry type is not supported."))}};t([_()],ot.prototype,"_tooltip",void 0),t([_()],ot.prototype,"callbacks",void 0),t([_()],ot.prototype,"enableMidpoints",void 0),t([_()],ot.prototype,"enableMovement",void 0),t([_()],ot.prototype,"enableVertices",void 0),t([_()],ot.prototype,"graphic",void 0),t([_({value:!0})],ot.prototype,"highlightsEnabled",null),t([_()],ot.prototype,"layer",void 0),t([_({readOnly:!0})],ot.prototype,"midpointGraphics",void 0),t([_()],ot.prototype,"midpointSymbol",void 0),t([_({readOnly:!0})],ot.prototype,"selectedVertices",void 0),t([_()],ot.prototype,"snappingManager",void 0),t([_({readOnly:!0})],ot.prototype,"state",null),t([_({value:st})],ot.prototype,"symbols",null),t([_({type:L})],ot.prototype,"tooltipOptions",void 0),t([_({readOnly:!0})],ot.prototype,"type",void 0),t([_({readOnly:!0})],ot.prototype,"vertexGraphics",void 0),t([_()],ot.prototype,"view",void 0),ot=t([f("esri.views.draw.support.Reshape")],ot);const rt=ot;export{rt as default};