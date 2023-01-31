/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as s}from"../chunks/tslib.es6.js";import{f as o,a as t}from"../chunks/featureReferenceUtils.js";import{Clonable as r}from"../core/Clonable.js";import{JSONSupportMixin as i}from"../core/JSONSupport.js";import{h as e}from"../chunks/maybe.js";import{property as p}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/ensureType.js";import{subclass as n}from"../core/accessorSupport/decorators/subclass.js";import{p as m}from"../chunks/persistable.js";import c from"../geometry/Point.js";import{E as u}from"../chunks/ElevationInfo.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/object.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/string.js";import"../chunks/ArrayPool.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../chunks/multiOriginJSONSupportUtils.js";import"../core/urlUtils.js";import"../chunks/uuid.js";import"../chunks/persistableUrlUtils.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../chunks/jsonMap.js";import"../layers/support/fieldUtils.js";import"../chunks/arcadeOnDemand.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../chunks/unitConversionUtils.js";import"../chunks/lengthUtils.js";import"../chunks/unitUtils.js";import"../chunks/projectionEllipsoid.js";let j=class extends(i(r)){constructor(s){super(s),this.position=null,this.elevationInfo=null,this.feature=null}equals(s){return e(this.position,s.position)&&e(this.elevationInfo,s.elevationInfo)&&o(this.feature,s.feature)}};s([p({type:c}),m()],j.prototype,"position",void 0),s([p({type:u}),m()],j.prototype,"elevationInfo",void 0),s([p(t)],j.prototype,"feature",void 0),j=s([n("esri.analysis.LineOfSightAnalysisTarget")],j);const l=j;export{l as default};
