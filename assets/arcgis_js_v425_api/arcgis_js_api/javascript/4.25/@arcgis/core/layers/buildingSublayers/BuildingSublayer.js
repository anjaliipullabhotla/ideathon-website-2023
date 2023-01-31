/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{IdentifiableMixin as o}from"../../core/Identifiable.js";import{a as r}from"../../chunks/MultiOriginJSONSupport.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import{I as i}from"../../chunks/ensureType.js";import{r as e}from"../../chunks/reader.js";import{subclass as p}from"../../core/accessorSupport/decorators/subclass.js";import{r as m}from"../../chunks/commonProperties.js";import"../../chunks/object.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/tracking.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/string.js";import"../../core/Error.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/get.js";import"../../chunks/ArrayPool.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/JSONSupport.js";import"../../TimeExtent.js";import"../../chunks/timeUtils.js";import"../../chunks/writer.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../chunks/persistableUrlUtils.js";import"../../core/urlUtils.js";import"../../support/timeUtils.js";import"../../chunks/ElevationInfo.js";import"../../chunks/jsonMap.js";import"../support/fieldUtils.js";import"../../chunks/arcadeOnDemand.js";import"../../geometry.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../chunks/unitConversionUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/unitUtils.js";import"../../chunks/projectionEllipsoid.js";import"../../chunks/opacityUtils.js";let n=class extends(o(r)){constructor(t){super(t),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.visible=!0,this.opacity=1}readTitle(t,o){return"string"==typeof o.alias?o.alias:"string"==typeof o.name?o.name:""}readIdOnlyOnce(t){return-1!==this.id?this.id:"number"==typeof t?t:-1}};t([s({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],n.prototype,"title",void 0),t([e("service","title",["alias","name"])],n.prototype,"readTitle",null),t([s()],n.prototype,"layer",void 0),t([s({type:i,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],n.prototype,"id",void 0),t([e("service","id")],n.prototype,"readIdOnlyOnce",null),t([s(m(String))],n.prototype,"modelName",void 0),t([s(m(Boolean))],n.prototype,"isEmpty",void 0),t([s({type:Boolean,json:{name:"visibility",write:!0}})],n.prototype,"visible",void 0),t([s({type:Number,json:{write:!0}})],n.prototype,"opacity",void 0),n=t([p("esri.layers.buildingSublayers.BuildingSublayer")],n);const c=n;export{c as default};
