/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{m as e}from"../../chunks/handleUtils.js";import{i as s}from"../../chunks/maybe.js";import{onAbort as o,createAbortError as i,throwIfAborted as r,isAborted as p}from"../../core/promiseUtils.js";import{watch as n}from"../../core/reactiveUtils.js";import"../../chunks/Logger.js";import"../../chunks/ensureType.js";import"../../core/lang.js";import"../../core/Error.js";import"../../chunks/object.js";import{subclass as a}from"../../core/accessorSupport/decorators/subclass.js";import{h as m}from"../../chunks/layerViewUtils.js";import{Edits as l}from"./Edits.js";import c from"./UpdateWorkflowData.js";import u from"./Workflow.js";import{c as d,e as j,h,f as y,g as b,j as g,i as k}from"../../chunks/workflowUtils.js";import"../../config.js";import"../../chunks/string.js";import"../../chunks/watch.js";import"../../chunks/ArrayPool.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/tracking.js";import"../../chunks/metadata.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../core/accessorSupport/decorators/property.js";import"../../core/HandleOwner.js";import"../../chunks/WatchUpdatingTracking.js";import"../../core/Evented.js";import"../../Graphic.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../core/JSONSupport.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../chunks/jsonMap.js";import"../../geometry/support/jsonUtils.js";import"../../PopupTemplate.js";import"../../core/Clonable.js";import"../../core/Collection.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../layers/support/fieldUtils.js";import"../../chunks/arcadeOnDemand.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../chunks/number.js";import"../../chunks/locale.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils2.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils3.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../chunks/aaBoundingRect.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../core/urlUtils.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../kernel.js";import"../../request.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../chunks/diffUtils.js";import"../../chunks/drapedUtils.js";import"../../chunks/unitUtils.js";import"../../chunks/projectionEllipsoid.js";import"../../chunks/lengthUtils.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/visualVariableUtils.js";import"../../chunks/compilerUtils.js";import"../../chunks/symbolConversion.js";import"../../symbols/support/symbolUtils.js";import"../../chunks/utils6.js";import"../../chunks/asyncUtils.js";import"../../chunks/jsonUtils.js";import"../../chunks/parser.js";import"../../chunks/mat4f32.js";import"../../chunks/mat4.js";import"../../chunks/_commonjsHelpers.js";import"../../chunks/assets.js";import"../../chunks/ItemCache.js";import"../../chunks/MemCache.js";import"../../symbols/support/cimSymbolUtils.js";import"../../chunks/utils7.js";import"../../chunks/colorUtils2.js";import"../../chunks/projector.js";import"../../chunks/widgetUtils.js";import"../../chunks/mat2df32.js";import"../../chunks/mat2d.js";import"../../chunks/jsxFactory.js";import"../../chunks/jsxWidgetSupport.js";import"../../chunks/GraphicState.js";import"../../chunks/hitTestSelectUtils.js";var f;let w=f=class extends u{constructor(t){super(t),this.type="update"}static create(t,e,s){const o=new f({data:new c({edits:new l,viewModel:t}),onCommit:async t=>{const e=t.edits.feature,o=e.sourceLayer,i=e.clone();if(!t.edits.attributesModified){const{objectIdField:t}=o;i.attributes={[t]:e.getAttribute(t)}}t.edits.geometryModified||(i.geometry=null),await s(o,{updateFeatures:[i]})}});return o._set("steps",this._createWorkflowSteps(o,e)),o}highlight(t){const{data:{viewModel:{view:e}}}=this,s=t&&e.allLayerViews.items.find((({layer:e})=>e===t.layer));m(s)&&this.handles.add(s.highlight(t),"candidate-highlight")}unhighlight(){this.handles.remove("candidate-highlight")}static _createWorkflowSteps(t,a="awaiting-feature-to-update"){const{data:m,handles:l}=t,c=new Map;return d(["awaiting-feature-to-update","awaiting-update-feature-candidate","editing-existing-feature","adding-attachment","editing-attachment"],a,{"awaiting-feature-to-update":()=>({id:"awaiting-feature-to-update",async setUp(){const{spinnerViewModel:t,view:e}=m.viewModel;let s=null;l.add({remove(){s&&(s.abort(),s=null)}},this.id),m.edits.feature=null;const p=e.on("immediate-click",(p=>{t.location=p.mapPoint,t.visible=!0,s&&s.abort();const{editableItems:n}=m.viewModel;s=new AbortController,new Promise(((t,r)=>{o(s.signal,(()=>r(i()))),t(j(n,e,p,s.signal))})).then((t=>{if(r(s),m.candidates=t.reduce(((t,e)=>e.error?t:[...t,...e.value]),[]),m.viewModel.spinnerViewModel.visible=1===m.candidates.length,0!==m.candidates.length)if(1===m.candidates.length){const t=m.candidates[0];m.edits.feature=t,m.viewModel.activeWorkflow.go("editing-existing-feature").catch((()=>{})).then((()=>m.viewModel.spinnerViewModel.visible=!1))}else m.viewModel.activeWorkflow.next()}))}));e.focus(),l.add(p,this.id)},async tearDown(){l.remove(this.id)}}),"awaiting-update-feature-candidate":()=>({id:"awaiting-update-feature-candidate",async setUp(){const{edits:e}=m;e.feature=null,l.add(n((()=>e.feature),(e=>{t.unhighlight(),t.highlight(e)})),this.id)},async tearDown(){t.unhighlight(),l.remove(this.id)}}),"editing-existing-feature":()=>({id:"editing-existing-feature",async setUp(){if(l.has("editing-existing-feature"))return;const o=m.edits.feature,{attachmentsViewModel:i,editableItems:r,featureFormViewModel:a,layerInfos:u,sketchViewModel:d,view:j}=m.viewModel;m.editableItem=r.find((t=>t.layer===o.layer));const f=new AbortController;l.add({remove:()=>f.abort()},this.id);const w=j.whenLayerView(o.layer),S=h(o,j,f.signal),v=await w,M=await S;if(p(f))return;m.edits.updateGeometry(M.geometry),m.edits.updateAttributes(M.attributes),m.edits.trackChanges(),i.set({graphic:M,mode:"view"});const U=M.sourceLayer,D=y(u,U)?.formTemplate,C=j.spatialReference;a.set({arcadeEditType:"UPDATE",feature:M,formTemplate:D,spatialReference:C,view:j});const I="createInteractiveEditSession"in v?v.createInteractiveEditSession(o):null,L=[a.on("value-change",(t=>{m.edits.updateAttributes(a.getValues()),M.attributes=m.edits.feature.attributes,I&&I.setAttribute(t.fieldName,t.value)})),n((()=>i.mode),(t=>{"add"===t&&m.viewModel.activeWorkflow.go("adding-attachment"),"edit"===t&&m.viewModel.activeWorkflow.go("editing-attachment")}))];if(I&&(L.push(e((()=>I.rollback()))),l.add(e((()=>I.commit())),t._handleKeys.afterCommit)),m.editableItem.geometryUpdatesEnabled){d.allowDeleteKey=!1;const e=b(M),{interactive:o,visual:i}=await g(M,e,d,j,(({geometry:t,attributes:o},i)=>{if(s(e.rotation)){const{field:t}=e.rotation;a.setValue(t,o[t])}if(s(e.size)){const{field:t}=e.size;a.setValue(t,o[t])}m.edits.updateAttributes(o),m.edits.updateGeometry(t),a.feature.geometry=t,("undo"===i.type||"redo"===i.type||"update"===i.type&&s(i.toolEventInfo)&&k(i.toolEventInfo.type))&&a.notifyFeatureGeometryChanged()}),c);L.push(o,i),l.add(o,t._handleKeys.beforeCommit),l.add(i,t._handleKeys.afterCommit)}else t.highlight(M);l.add(L,this.id)},async tearDown({cancelled:e}){e&&(t.unhighlight(),l.remove(this.id))}}),"adding-attachment":()=>({id:"adding-attachment",parent:"editing-existing-feature",async setUp(){},async tearDown(){m.viewModel.attachmentsViewModel.mode="view"}}),"editing-attachment":()=>({id:"editing-attachment",parent:"editing-existing-feature",async setUp(){},async tearDown(){m.viewModel.attachmentsViewModel.mode="view"}})})}};w=f=t([a("esri.widgets.Editor.UpdateWorkflow")],w);const S=w;export{S as default};