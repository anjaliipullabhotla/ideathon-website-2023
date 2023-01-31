/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import e from"../../Color.js";import r from"../../Graphic.js";import"../../symbols.js";import{g as s}from"../../chunks/analysisThemeUtils.js";import o from"../../core/Collection.js";import{d as i,a as l,isAbortError as n}from"../../core/promiseUtils.js";import p from"../../core/Error.js";import a from"../../core/Evented.js";import{HandleOwnerMixin as m}from"../../core/HandleOwner.js";import{L as u}from"../../chunks/Logger.js";import{a as c,e as h,i as y,u as d,g as j}from"../../chunks/maybe.js";import{on as g,watch as b,syncAndInitial as v,initial as f}from"../../core/reactiveUtils.js";import{property as k}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import{cast as S}from"../../core/accessorSupport/decorators/cast.js";import{subclass as w}from"../../core/accessorSupport/decorators/subclass.js";import{g as L}from"../../chunks/locale.js";import C from"../../layers/GraphicsLayer.js";import D from"../../layers/RouteLayer.js";import U from"../../layers/support/RouteStopSymbols.js";import _ from"../../layers/support/RouteSymbols.js";import{fetchServiceDescription as M}from"../../rest/networkService.js";import P from"../../rest/support/RouteParameters.js";import R from"../../rest/support/Stop.js";import{GoToMixin as T}from"../support/GoTo.js";import I from"../../symbols/SimpleLineSymbol.js";import A from"../../symbols/SimpleMarkerSymbol.js";import x from"../../symbols/PictureMarkerSymbol.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../chunks/ensureType.js";import"../../chunks/object.js";import"../../config.js";import"../../chunks/string.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../chunks/jsonMap.js";import"../../geometry/support/jsonUtils.js";import"../../PopupTemplate.js";import"../../core/Clonable.js";import"../../layers/support/fieldUtils.js";import"../../chunks/arcadeOnDemand.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../chunks/number.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils2.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils3.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../chunks/aaBoundingRect.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../core/urlUtils.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../kernel.js";import"../../request.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../views/support/colorUtils.js";import"../../chunks/WatchUpdatingTracking.js";import"../../chunks/GraphicsCollection.js";import"../../layers/Layer.js";import"../../layers/mixins/BlendLayer.js";import"../../chunks/jsonUtils.js";import"../../chunks/parser.js";import"../../chunks/mat4f32.js";import"../../chunks/mat4.js";import"../../chunks/_commonjsHelpers.js";import"../../layers/mixins/ScaleRangeLayer.js";import"../../chunks/ElevationInfo.js";import"../../chunks/unitConversionUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/unitUtils.js";import"../../chunks/projectionEllipsoid.js";import"../../renderers/ClassBreaksRenderer.js";import"../../renderers/Renderer.js";import"../../renderers/support/AuthoringInfo.js";import"../../renderers/support/AuthoringInfoVisualVariable.js";import"../../chunks/colorRamps.js";import"../../rest/support/AlgorithmicColorRamp.js";import"../../rest/support/ColorRamp.js";import"../../rest/support/MultipartColorRamp.js";import"../../renderers/mixins/VisualVariablesMixin.js";import"../../renderers/visualVariables/ColorVariable.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../chunks/LegendOptions.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../renderers/visualVariables/OpacityVariable.js";import"../../renderers/visualVariables/support/OpacityStop.js";import"../../renderers/visualVariables/RotationVariable.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/visualVariableUtils.js";import"../../chunks/compilerUtils.js";import"../../renderers/support/ClassBreakInfo.js";import"../../chunks/commonProperties2.js";import"../../symbols/support/jsonUtils.js";import"../../chunks/symbolConversion.js";import"../../renderers/DictionaryRenderer.js";import"../../chunks/DictionaryLoader.js";import"../../chunks/LRUCache.js";import"../../chunks/MemCache.js";import"../../renderers/DotDensityRenderer.js";import"../../renderers/support/AttributeColorInfo.js";import"../../renderers/HeatmapRenderer.js";import"../../renderers/support/HeatmapColorStop.js";import"../../chunks/heatmapUtils.js";import"../../chunks/vec4f64.js";import"../../renderers/PieChartRenderer.js";import"../../renderers/SimpleRenderer.js";import"../../renderers/UniqueValueRenderer.js";import"../../chunks/diffUtils.js";import"../../renderers/support/UniqueValue.js";import"../../renderers/support/UniqueValueClass.js";import"../../renderers/support/UniqueValueGroup.js";import"../../renderers/support/UniqueValueInfo.js";import"../../chunks/styleUtils2.js";import"../../renderers/support/jsonUtils.js";import"../../chunks/MultiOriginJSONSupport.js";import"../../chunks/originUtils.js";import"../../chunks/multiOriginJSONSupportUtils.js";import"../../geometry/projection.js";import"../../chunks/pe.js";import"../../chunks/assets.js";import"../../chunks/geodesicConstants.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../chunks/zscale.js";import"../../chunks/OperationalLayer.js";import"../../chunks/commonProperties.js";import"../../TimeExtent.js";import"../../chunks/timeUtils.js";import"../../support/timeUtils.js";import"../../layers/mixins/PortalLayer.js";import"../../chunks/asyncUtils.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../chunks/arcgisLayerUrl.js";import"../../chunks/portalItemUtils.js";import"../../rest/route.js";import"../../geometry/support/normalizeUtils.js";import"../../chunks/normalizeUtilsCommon.js";import"../../chunks/simplify.js";import"../../chunks/utils4.js";import"../../chunks/utils5.js";import"../../chunks/utils9.js";import"../../chunks/networkEnums.js";import"../../rest/support/FeatureSet.js";import"../../layers/support/Field.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/fieldType.js";import"../../rest/support/RouteSolveResult.js";import"../../rest/support/NAMessage.js";import"../../rest/support/GPMessage.js";import"../../rest/support/RouteResult.js";import"../../rest/support/DirectionsFeatureSet.js";import"../../rest/support/DirectionsFeature.js";import"../../rest/support/DirectionsEvent.js";import"../../rest/support/TravelMode.js";import"../../rest/support/DirectionLine.js";import"../../rest/support/DirectionPoint.js";import"../../rest/support/PointBarrier.js";import"../../rest/support/PolygonBarrier.js";import"../../rest/support/PolylineBarrier.js";import"../../rest/support/RouteInfo.js";import"../../chunks/commonProperties3.js";import"../../rest/support/DataLayer.js";import"../../rest/support/NetworkFeatureSet.js";import"../../rest/support/NetworkUrl.js";function O(t){return"esri.Graphic"===t?.declaredClass}var V;!function(t){t[t.Active=0]="Active",t[t.Complete=1]="Complete",t[t.Failed=2]="Failed",t[t.Idle=3]="Idle",t[t.Suspended=4]="Suspended"}(V||(V={}));const z="esri.widgets.Directions.DirectionsViewModel",E=u.getLogger(z);let F=class extends(m(T(a.EventedAccessor))){constructor(t){super(t),this._highlightLayer=new C({listMode:"hide",internal:!0}),this._highlight=null,this._legacyLayer=null,this._loadPromise=null,this._loadController=null,this._routeController=null,this._serviceDescriptionStatus=V.Idle,this.apiKey=void 0,this.departureTime="now",this.lastError=null,this.lastRoute=null,this.layer=null,this.maxStops=50,this.routeParameters=new P({directionsLengthUnits:"kilometers",findBestSequence:!1,restrictUTurns:"at-dead-ends-and-intersections",returnZ:!0,startTime:null,startTimeIsUTC:!0,useHierarchy:!0,useTimeWindows:!1}),this.serviceDescription=null,this.view=null}initialize(){this.addHandles([g((()=>j(this.layer,(t=>t.stops))),"change",(()=>{this.clearResults()})),b((()=>this.layer),((t,e)=>{if(y(t))for(;t.stops.length<2;)t.stops.add(new R);c(t)&&(this.layer=this.legacyLayer),y(e)&&e===this.legacyLayer&&this.view?.map?.remove(e)}),v),b((()=>this.view?.map),((t,e)=>{this.layer===this.legacyLayer&&(e?.remove(this.layer),t?.add(this.layer)),e?.remove(this._highlightLayer),t?.add(this._highlightLayer)}),f)])}destroy(){this.view?.map?.remove(this._highlightLayer),this.layer===this.legacyLayer&&this.view?.map?.remove(this.layer)}get _directionsLanguage(){if(c(this.serviceDescription))return;const t=this.serviceDescription.directionsSupportedLanguages;if(!t)return;const e=h(this.routeParameters.directionsLanguage,L()).slice(0,2);return t.find((t=>t.toLowerCase().slice(0,2)===e))}get impedanceAttribute(){const t=y(this.serviceDescription)?this.serviceDescription.impedance:null,e=d(this.routeParameters.travelMode)?.impedanceAttributeName??d(this.routeParameters.impedanceAttribute)??t;return this.getCostAttribute(e)}get legacyLayer(){return c(this._legacyLayer)&&(this._legacyLayer=this._getLegacyLayer()),this._legacyLayer}set routeServiceUrl(t){i(E,"routeServiceUrl",{replacement:"layer.url",version:"4.24",warnOnce:!0}),this.legacyLayer.url=t}get routeServiceUrl(){return i(E,"routeServiceUrl",{replacement:"layer.url",version:"4.24",warnOnce:!0}),this.legacyLayer.url}set routeSymbol(t){i(E,"routeSymbol",{replacement:"layer.defaultSymbols.directionLines",version:"4.24",warnOnce:!0}),this.legacyLayer.defaultSymbols.directionLines=t}get routeSymbol(){return i(E,"routeSymbol",{replacement:"layer.defaultSymbols.directionLines",version:"4.24",warnOnce:!0}),this.legacyLayer.defaultSymbols.directionLines}get selectedTravelMode(){const{serviceDescription:t}=this;if(c(t))return null;const{defaultTravelMode:e,supportedTravelModes:r=[]}=t;return r.find((t=>t.id===e))||r[0]||null}set selectedTravelMode(t){this._override("selectedTravelMode",t)}get state(){if(y(this._routeController))return"routing";if(y(this.lastError))return"error";switch(this._serviceDescriptionStatus){case V.Suspended:return"unauthenticated";case V.Idle:return"disabled";case V.Active:return"initializing";case V.Failed:return"error";default:return"ready"}}set stops(t){i(E,"stops",{replacement:"layer.stops",version:"4.24",warnOnce:!0}),this.legacyLayer.stops=t}get stops(){return i(E,"stops",{replacement:"layer.stops",version:"4.24",warnOnce:!0}),this.legacyLayer.stops}castStops(t){return function(t){return Array.isArray(t)&&t.length&&O(t[0])}(t)||function(t){return o.isCollection(t)&&t.length&&O(t.getItemAt(0))}(t)?t.map((t=>R.fromGraphic(t))):t}set stopSymbols(t){i(E,"stopSymbols",{replacement:"layer.defaultSymbols.stops",version:"4.24",warnOnce:!0}),this.legacyLayer.defaultSymbols.stops=t}get stopSymbols(){return i(E,"stopSymbols",{replacement:"layer.defaultSymbols.stops",version:"4.24",warnOnce:!0}),this.legacyLayer.defaultSymbols.stops}get timeAttribute(){const t=d(this.routeParameters.travelMode)?.timeAttributeName??d(this.routeParameters.directionsTimeAttribute)??(y(this.serviceDescription)?this.serviceDescription.directionsTimeAttribute:null);return this.getCostAttribute(t)}get travelModes(){return y(this.serviceDescription)?this.serviceDescription.supportedTravelModes:[]}async load(){if(y(this._loadPromise))return this._loadPromise;this._loadPromise=this._load(),await this._loadPromise,this._loadPromise=null}async highlight(t){this.clearHighlights();const e=await this.view.whenLayerView(this.layer);this._highlight=e.highlight(t)}highlightSegment(t){l(E,"highlightSegment",{replacement:"highlight",version:"4.24",warnOnce:!0});const{geometry:s,symbol:o}=t;if(c(this.view)||c(s)||c(o))return;this.clearHighlights();const i=o.clone();i.color=new e([0,0,0,.8]),i.width=Math.ceil(i.width/2);const n=new r({geometry:s,symbol:i});this._highlightLayer.add(n)}clearHighlights(){this._highlightLayer.removeAll(),y(this._highlight)&&(this._highlight.remove(),this._highlight=null)}centerAt(t){if(c(this.view))return;const e="esri.rest.support.Stop"===t?.declaredClass||O(t)?t.geometry:t;c(e)||this.callGoTo({target:e})}clearResults(){this._set("lastRoute",null),this.layer.removeResult()}async getDirections(){const{apiKey:t,departureTime:e,layer:r,state:s}=this;if(c(r))throw new p("directions-view-model:missing-route-layer","A route layer must be associated with the view model.");if(r===this.legacyLayer&&l(E,"Using the Directions widget or view model without setting `layer` is deprecated.",{see:"https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Directions-DirectionsViewModel.html#layer",version:"4.24",warnOnce:!0}),"unauthenticated"===s||"initializing"===s||"disabled"===s||this._serviceDescriptionStatus===V.Failed)throw new p("directions-view-model:not-loaded","Cannot get directions until view model loads.");this._set("lastError",null),y(this._routeController)&&(this._routeController.abort(),this._routeController=null);const o="now"===e,i="now"===e?new Date:e;if(i&&!o){const t=60*i.getTimezoneOffset()*1e3;i.setTime(i.getTime()-t)}const a=y(this.view)?this.view.spatialReference:null,m=this.routeParameters.clone();if(m.set({startTime:i,startTimeIsUTC:o,directionsLanguage:this._directionsLanguage,apiKey:t,outSpatialReference:a}),y(this.selectedTravelMode)&&(m.travelMode=this.selectedTravelMode),r.stops.filter((t=>y(t.geometry))).length<2){const t=new p("directions-view-model:not-enough-stops","Not enough stops for routing");throw this._set("lastError",t),t}this._routeController=new AbortController;const{signal:u}=this._routeController;let h=null;try{h=await r.solve(m,{signal:u})}catch(t){if(!n(t)){const e=new p("directions-view-model:unable-to-route","Unable to route to these addresses",{error:t});throw this._set("lastError",e),this._set("lastRoute",null),e}}finally{this._routeController=null}for(const t of h.stops)c(t.geometry)&&(t.name=null);return r.update(h),this._set("lastRoute",h),this.zoomToRoute(),h}getCostAttribute(t){return(y(this.serviceDescription)?this.serviceDescription.networkDataset.networkAttributes:[]).find((e=>e.name===t&&"cost"===e.usageType))??null}reset(){this.clearHighlights(),this.clearResults(),y(this.layer)&&(this.layer.removeAll(),this.layer.stops=new o([new R,new R]))}save(){return this.layer.save()}saveAs(t,e={}){return this.layer.saveAs(t,e)}zoomToRoute(){const{view:t,layer:{routeInfo:e}}=this;if(c(t)||c(e))return;const{geometry:r}=e;if(c(r))return;const{extent:s}=r,o=s.width>s.height,i=s.clone().expand(o?2:1);this.callGoTo({target:i})}_getLegacyLayer(){const t=s();return new D({listMode:"hide",defaultSymbols:new _({directionLines:new I({color:t,width:7,cap:"round",join:"round"}),directionPoints:null,routeInfo:null,stops:new U({break:new A({color:[255,255,255],size:10,outline:{color:[20,89,127],width:2.5}}),first:new A({color:t,size:19,outline:{color:[51,51,51],width:3}}),last:new x({width:23,height:23,url:`data:image/svg+xml;base64,${btoa(`<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="none"><path d="M15.15.3C6.9.3.3 6.9.3 15.15S6.9 29.7 15.15 29.7 29.7 23.1 29.7 15.15C29.7 6.9 23.25.3 15.15.3z" fill="#333"/><path d="M15 4.8C9.3 4.8 4.8 9.45 4.8 15c0 5.55 4.65 10.2 10.2 10.2 5.55 0 10.2-4.5 10.2-10.2 0-5.55-4.5-10.2-10.2-10.2z" fill="${t.toHex()}"/><path fill="#333" d="M10.5 10.5h9v9h-9z"/></g></svg>`)}`}),middle:new A({color:[51,51,51],size:12,outline:{color:t,width:3}}),unlocated:new x({height:18,width:18,url:`data:image/svg+xml;base64,${btoa(`<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M10.1.2C4.6.2.2 4.6.2 10.1s4.4 9.7 9.9 9.7 9.7-4.4 9.7-9.7c0-5.5-4.3-9.9-9.7-9.9z" fill="#333" fill-rule="nonzero"/><path d="M10 2.7c-4.08 0-7.3 3.328-7.3 7.3s3.328 7.3 7.3 7.3 7.3-3.22 7.3-7.3c0-3.972-3.22-7.3-7.3-7.3z" fill="${t.toHex()}" fill-rule="nonzero"/><path d="M11.414 10l5.304-5.303-1.415-1.415L10 8.586 4.697 3.282 3.282 4.697 8.586 10l-5.304 5.303 1.415 1.415L10 11.414l5.303 5.304 1.415-1.415L11.414 10z" fill="#333"/></g></svg>`)}`}),waypoint:new A({color:[255,255,255],size:10,outline:{color:[20,89,127],width:2.5}})})}),stops:[{},{}]})}async _load(){if(y(this.serviceDescription)||c(this.layer))return;y(this._loadController)&&(this._loadController.abort(),this._loadController=null),this._loadController=new AbortController;const{signal:t}=this._loadController;try{this._serviceDescriptionStatus=V.Active;const e=await M(this.layer.url,this.apiKey,{signal:t});this._set("serviceDescription",e),this._serviceDescriptionStatus=V.Complete}catch(t){if(n(t))return void(this._serviceDescriptionStatus=V.Idle);if("identity-manager:user-aborted"===t.name)return void(this._serviceDescriptionStatus=V.Suspended);const e=new p("directions-view-model:service-metadata-unavailable","Cannot load route service metadata",{error:t});throw this._serviceDescriptionStatus=V.Failed,this._set("lastError",e),e}finally{this._loadController=null}}};t([k()],F.prototype,"_directionsLanguage",null),t([k()],F.prototype,"_routeController",void 0),t([k()],F.prototype,"_serviceDescriptionStatus",void 0),t([k()],F.prototype,"apiKey",void 0),t([k()],F.prototype,"departureTime",void 0),t([k({readOnly:!0})],F.prototype,"impedanceAttribute",null),t([k()],F.prototype,"lastError",void 0),t([k({readOnly:!0})],F.prototype,"lastRoute",void 0),t([k()],F.prototype,"layer",void 0),t([k({readOnly:!0})],F.prototype,"legacyLayer",null),t([k({type:Number,range:{min:2,max:50},nonNullable:!0})],F.prototype,"maxStops",void 0),t([k({type:P,nonNullable:!0})],F.prototype,"routeParameters",void 0),t([k()],F.prototype,"routeServiceUrl",null),t([k()],F.prototype,"routeSymbol",null),t([k()],F.prototype,"selectedTravelMode",null),t([k({readOnly:!0})],F.prototype,"serviceDescription",void 0),t([k({readOnly:!0})],F.prototype,"state",null),t([k()],F.prototype,"stops",null),t([S("stops")],F.prototype,"castStops",null),t([k()],F.prototype,"stopSymbols",null),t([k({readOnly:!0})],F.prototype,"timeAttribute",null),t([k()],F.prototype,"travelModes",null),t([k()],F.prototype,"view",void 0),t([k()],F.prototype,"getDirections",null),t([k()],F.prototype,"zoomToRoute",null),F=t([w(z)],F);const B=F;export{B as default};