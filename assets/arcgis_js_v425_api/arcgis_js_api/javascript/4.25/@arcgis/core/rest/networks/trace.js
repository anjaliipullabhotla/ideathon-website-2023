/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import t from"../../request.js";import{p as r,e,a as o}from"../../chunks/utils4.js";import s from"./support/TraceResult.js";import"../../config.js";import"../../chunks/object.js";import"../../core/lang.js";import"../../chunks/maybe.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/Error.js";import"../../chunks/Logger.js";import"../../chunks/string.js";import"../../core/promiseUtils.js";import"../../chunks/tslib.es6.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/ArrayPool.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/tracking.js";import"../../chunks/ensureType.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"./support/AggregatedGeometry.js";import"../../geometry/Multipoint.js";import"../../chunks/writer.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"./support/FunctionResult.js";import"./support/NetworkElement.js";async function i(i,p,c){const m=r(i),n=p.toJSON();n.traceLocations=JSON.stringify(p.traceLocations),p.resultTypes&&(n.resultTypes=JSON.stringify(p.resultTypes));const a={...n,f:"json"},u=e({...m.query,...a}),j=o(u,c),l=`${m.path}/trace`;return t(l,j).then((t=>function(t,r){const{data:e}=t;if(!e)return null;const o=s.fromJSON(e.traceResults);return o.aggregatedGeometry&&r&&(o.aggregatedGeometry.line&&(o.aggregatedGeometry.line.spatialReference=r.clone()),o.aggregatedGeometry.multipoint&&(o.aggregatedGeometry.multipoint.spatialReference=r.clone()),o.aggregatedGeometry.polygon&&(o.aggregatedGeometry.polygon.spatialReference=r.clone())),o}(t,p.outSpatialReference)))}export{i as trace};
