/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import"../../renderers/ClassBreaksRenderer.js";import"../../renderers/DictionaryRenderer.js";import"../../renderers/DotDensityRenderer.js";import"../../renderers/HeatmapRenderer.js";import"../../renderers/PieChartRenderer.js";import"../../renderers/Renderer.js";import s from"../../renderers/SimpleRenderer.js";import"../../renderers/UniqueValueRenderer.js";import"../../renderers/support/jsonUtils.js";import o from"../../core/Error.js";import{i as r}from"../../chunks/maybe.js";import{o as t,n as e,p as i,q as p,d as m}from"../../chunks/utils16.js";import n from"../heuristics/sizeRange.js";import{v as l}from"../../chunks/binningUtils.js";import{b as a,f as u,c,g as j}from"../../chunks/layerUtils2.js";import{cloneScheme as y,getSchemes as h}from"../symbology/location.js";import"../../chunks/tslib.es6.js";import"../../symbols.js";import"../../chunks/ensureType.js";import"../../chunks/object.js";import"../../core/lang.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/string.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/tracking.js";import"../../symbols/CIMSymbol.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/get.js";import"../../chunks/enumeration.js";import"../../chunks/jsonMap.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../layers/support/fieldUtils.js";import"../../chunks/arcadeOnDemand.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/ArrayPool.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../geometry/SpatialReference.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../symbols/Symbol.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils2.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils3.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../chunks/aaBoundingRect.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../core/urlUtils.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../kernel.js";import"../../request.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../chunks/locale.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../core/Clonable.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../renderers/mixins/VisualVariablesMixin.js";import"../../renderers/visualVariables/ColorVariable.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../chunks/LegendOptions.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../renderers/visualVariables/OpacityVariable.js";import"../../renderers/visualVariables/support/OpacityStop.js";import"../../renderers/visualVariables/RotationVariable.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/visualVariableUtils.js";import"../../Graphic.js";import"../../PopupTemplate.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../chunks/number.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../chunks/compilerUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/unitUtils.js";import"../../chunks/projectionEllipsoid.js";import"../../renderers/support/ClassBreakInfo.js";import"../../chunks/commonProperties2.js";import"../../symbols/support/jsonUtils.js";import"../../chunks/symbolConversion.js";import"../../renderers/support/AuthoringInfo.js";import"../../renderers/support/AuthoringInfoVisualVariable.js";import"../../chunks/colorRamps.js";import"../../rest/support/AlgorithmicColorRamp.js";import"../../rest/support/ColorRamp.js";import"../../rest/support/MultipartColorRamp.js";import"../../chunks/DictionaryLoader.js";import"../../chunks/LRUCache.js";import"../../chunks/MemCache.js";import"../../renderers/support/AttributeColorInfo.js";import"../../renderers/support/HeatmapColorStop.js";import"../../chunks/heatmapUtils.js";import"../../chunks/vec4f64.js";import"../../core/reactiveUtils.js";import"../../chunks/diffUtils.js";import"../../renderers/support/UniqueValue.js";import"../../renderers/support/UniqueValueClass.js";import"../../renderers/support/UniqueValueGroup.js";import"../../renderers/support/UniqueValueInfo.js";import"../../chunks/styleUtils2.js";import"../../chunks/numberUtils.js";import"../../intl.js";import"../../chunks/messages.js";import"../../chunks/assets.js";import"../../chunks/PointSizeSplatAlgorithm.js";import"../../chunks/scaleUtils.js";import"../../chunks/spatialStatistics.js";import"../statistics/classBreaks.js";import"../../chunks/statsWorker.js";import"../../chunks/quantizationUtils.js";import"../../chunks/utils13.js";import"../../chunks/generateRendererUtils.js";import"../../chunks/utils11.js";import"../../chunks/basemapUtils.js";import"../../Basemap.js";import"../../chunks/loadAll.js";import"../../chunks/asyncUtils.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../chunks/writeUtils.js";import"../../chunks/layerUtils.js";import"../../core/workers/workers.js";import"../../core/workers/Connection.js";import"../../chunks/Queue.js";import"../../core/workers/RemoteClient.js";import"../../chunks/arcgisLayerUrl.js";import"../../chunks/fieldType.js";import"../../rest/support/Query.js";import"../../TimeExtent.js";import"../../chunks/timeUtils.js";import"../../chunks/DataLayerSource.js";import"../../layers/support/Field.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/FullTextSearch.js";import"../../rest/support/StatisticDefinition.js";import"../statistics/support/predominanceUtils.js";import"../../chunks/utils12.js";import"../../chunks/executeQuery.js";import"../../chunks/executeQueryJSON.js";import"../../chunks/utils4.js";import"../../chunks/query.js";import"../../geometry/support/normalizeUtils.js";import"../../chunks/normalizeUtilsCommon.js";import"../../chunks/simplify.js";import"../../chunks/utils5.js";import"../../chunks/pbfQueryUtils.js";import"../../chunks/pbf.js";import"../../chunks/OptimizedFeature.js";import"../../chunks/OptimizedFeatureSet.js";import"../../chunks/queryZScale.js";import"../../chunks/zscale.js";import"../../rest/support/FeatureSet.js";import"../../chunks/executeQueryPBF.js";import"../../chunks/featureConversionUtils.js";import"../../rest/query/support/AttachmentInfo.js";import"../../rest/support/AttachmentQuery.js";import"../../rest/support/RelationshipQuery.js";import"../../rest/support/TopFeaturesQuery.js";import"../../rest/support/TopFilter.js";import"../../chunks/Task.js";import"../statistics/summaryStatistics.js";import"../../views/support/colorUtils.js";import"../heuristics/scaleRange.js";import"../../chunks/symbologyUtils.js";import"../../chunks/utils17.js";async function b(b){const d=await async function(s){if(!s||!s.layer)throw new o("location-renderer:missing-parameters","'layer' parameter is required");s.forBinning&&l(s,"location-renderer");const t={...s};t.symbolType=t.symbolType||"2d";const e=s.forBinning?a:u,i=c(t.layer,e,s.forBinning);if(t.layer=i,!i)throw new o("location-renderer:invalid-parameters","'layer' must be one of these types: "+j(e).join(", "));const p=r(t.signal)?{signal:t.signal}:null;await i.load(p);const m=i.geometryType;if(t.outlineOptimizationEnabled="polygon"===m&&t.outlineOptimizationEnabled,t.sizeOptimizationEnabled=("point"===m||"multipoint"===m||"polyline"===m)&&t.sizeOptimizationEnabled,"mesh"===m)t.symbolType="3d-volumetric",t.colorMixMode=t.colorMixMode||"replace",t.edgesType=t.edgesType||"none";else{if("3d-volumetric-uniform"===t.symbolType&&"point"!==m)throw new o("location-renderer:not-supported","3d-volumetric-uniform symbols are supported for point layers only");if(t.symbolType.includes("3d-volumetric")&&(!t.view||"3d"!==t.view.type))throw new o("location-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'")}return t}(b),k=d.layer.geometryType,S=await async function(s,o){let t=s.locationScheme,e=null,i=null;const p=await m(s.basemap,s.view);if(e=r(p.basemapId)?p.basemapId:null,i=r(p.basemapTheme)?p.basemapTheme:null,t)return{scheme:y(t),basemapId:e,basemapTheme:i};const n=h({basemap:e,basemapTheme:i,geometryType:o,worldScale:s.symbolType.includes("3d-volumetric"),view:s.view});return n&&(t=n.primaryScheme,e=n.basemapId,i=n.basemapTheme),{scheme:t,basemapId:e,basemapTheme:i}}(d,k),f=S.scheme;if(!f)throw new o("location-renderer:insufficient-info","Unable to find location scheme");const{view:g,layer:U,signal:v}=d,[C,I]=await Promise.all([d.outlineOptimizationEnabled?t({view:g,layer:U,signal:v}):null,d.sizeOptimizationEnabled?n({view:g,layer:U,signal:v}):null]),V=C&&C.opacity,w=new s({symbol:e(k,{type:d.symbolType,color:f.color,size:i(f,k),outline:p(f,k,V),meshInfo:{colorMixMode:d.colorMixMode,edgesType:d.edgesType}})});return C&&C.visualVariables&&C.visualVariables.length&&(w.visualVariables=C.visualVariables.map((s=>s.clone()))),I&&I.minSize&&(w.visualVariables?w.visualVariables.push(I.minSize):w.visualVariables=[I.minSize]),{renderer:w,locationScheme:y(f),basemapId:S.basemapId,basemapTheme:S.basemapTheme}}export{b as createRenderer};