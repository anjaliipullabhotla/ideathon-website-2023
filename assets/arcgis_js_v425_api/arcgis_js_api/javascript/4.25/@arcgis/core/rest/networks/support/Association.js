/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as o}from"../../../chunks/tslib.es6.js";import"../../../geometry.js";import{JSONSupport as t}from"../../../core/JSONSupport.js";import{property as r}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/lang.js";import"../../../chunks/ensureType.js";import{r as e}from"../../../chunks/reader.js";import{subclass as s}from"../../../core/accessorSupport/decorators/subclass.js";import{w as i}from"../../../chunks/writer.js";import n from"./NetworkElement.js";import m from"../../../geometry/Polyline.js";import"../../../geometry/Extent.js";import"../../../chunks/maybe.js";import"../../../chunks/string.js";import"../../../chunks/object.js";import"../../../geometry/Geometry.js";import"../../../geometry/SpatialReference.js";import"../../../core/Accessor.js";import"../../../core/Handles.js";import"../../../chunks/get.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/metadata.js";import"../../../chunks/Logger.js";import"../../../config.js";import"../../../chunks/ArrayPool.js";import"../../../chunks/tracking.js";import"../../../chunks/watch.js";import"../../../core/scheduling.js";import"../../../chunks/nextTick.js";import"../../../core/promiseUtils.js";import"../../../core/Error.js";import"../../../geometry/Point.js";import"../../../core/accessorSupport/decorators/cast.js";import"../../../geometry/support/webMercatorUtils.js";import"../../../chunks/Ellipsoid.js";import"../../../geometry/Multipoint.js";import"../../../chunks/zmUtils.js";import"../../../geometry/Polygon.js";import"../../../chunks/extentUtils.js";import"../../../chunks/typeUtils.js";import"../../../chunks/jsonMap.js";import"../../../geometry/support/jsonUtils.js";let p=class extends t{constructor(o){super(o),this.globalId=null,this.associationType=null,this.fromNetworkElement=null,this.toNetworkElement=null,this.geometry=null,this.errorMessage=null,this.percentAlong=null,this.errorCode=null,this.isContentVisible=null,this.status=null}readFromNetworkElement(o,t){const r=new n;return r.globalId=t.fromGlobalId,r.networkSourceId=t.fromNetworkSourceId,r.terminalId=t.fromTerminalId,r}writeFromNetworkElement(o,t){o&&(t.fromGlobalId=o.globalId,t.fromNetworkSourceId=o.networkSourceId,t.fromTerminalId=o.terminalId)}readToNetworkElement(o,t){const r=new n;return r.globalId=t.toGlobalId,r.networkSourceId=t.toNetworkSourceId,r.terminalId=t.toTerminalId,r}writeToNetworkElement(o,t){o&&(t.toGlobalId=o.globalId,t.toNetworkSourceId=o.networkSourceId,t.toTerminalId=o.terminalId)}};o([r({type:String,json:{write:!0}})],p.prototype,"globalId",void 0),o([r({type:["attachment","connectivity","containment"],json:{write:!0}})],p.prototype,"associationType",void 0),o([r({type:n,json:{write:{target:{fromGlobalId:{type:String},fromNetworkSourceId:{type:Number},fromTerminalId:{type:Number}}},read:{source:["fromGlobalId","fromNetworkSourceId","fromTerminalId"]}}})],p.prototype,"fromNetworkElement",void 0),o([e("fromNetworkElement")],p.prototype,"readFromNetworkElement",null),o([i("fromNetworkElement")],p.prototype,"writeFromNetworkElement",null),o([r({type:n,json:{write:{target:{toGlobalId:{type:String},toNetworkSourceId:{type:Number},toTerminalId:{type:Number}}},read:{source:["toGlobalId","toNetworkSourceId","toTerminalId"]}}})],p.prototype,"toNetworkElement",void 0),o([e("toNetworkElement")],p.prototype,"readToNetworkElement",null),o([i("toNetworkElement")],p.prototype,"writeToNetworkElement",null),o([r({type:m,json:{write:!0}})],p.prototype,"geometry",void 0),o([r({type:String,json:{write:!0}})],p.prototype,"errorMessage",void 0),o([r({type:Number,json:{write:!0}})],p.prototype,"percentAlong",void 0),o([r({type:Number,json:{write:!0}})],p.prototype,"errorCode",void 0),o([r({type:Boolean,json:{write:!0}})],p.prototype,"isContentVisible",void 0),o([r({type:Number,json:{write:!0}})],p.prototype,"status",void 0),p=o([s("esri.rest.networks.support.Association")],p);const l=p;export{l as default};
