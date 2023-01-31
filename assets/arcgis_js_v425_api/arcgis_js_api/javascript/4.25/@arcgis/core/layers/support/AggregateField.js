/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{JSONSupport as s}from"../../core/JSONSupport.js";import{clone as o}from"../../core/lang.js";import{property as i}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import{subclass as r}from"../../core/accessorSupport/decorators/subclass.js";import e from"./ExpressionInfo.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/object.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/string.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../core/Clonable.js";var n;let p=n=class extends s{constructor(t){super(t),this.isAutoGenerated=!1,this.name=null,this.alias=null,this.onStatisticField=null,this.onStatisticExpression=null,this.statisticType=null}clone(){return new n({name:this.name,alias:this.alias,isAutoGenerated:this.isAutoGenerated,onStatisticExpression:o(this.onStatisticExpression),onStatisticField:this.onStatisticField,statisticType:this.statisticType})}};t([i({type:Boolean,json:{write:!0}})],p.prototype,"isAutoGenerated",void 0),t([i({type:String,json:{write:!0}})],p.prototype,"name",void 0),t([i({type:String,json:{write:!0}})],p.prototype,"alias",void 0),t([i({type:String,json:{write:!0}})],p.prototype,"onStatisticField",void 0),t([i({type:e,json:{write:!0}})],p.prototype,"onStatisticExpression",void 0),t([i({type:String,json:{write:!0}})],p.prototype,"statisticType",void 0),p=n=t([r("esri.layers.support.AggregateField")],p);const c=p;export{c as default};