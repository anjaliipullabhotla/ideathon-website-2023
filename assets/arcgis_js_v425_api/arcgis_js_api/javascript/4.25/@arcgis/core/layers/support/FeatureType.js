/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import{ClonableMixin as s}from"../../core/Clonable.js";import{JSONSupport as r}from"../../core/JSONSupport.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import{r as e}from"../../chunks/reader.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import{w as n}from"../../chunks/writer.js";import{f as m}from"../../chunks/domains.js";import p from"./FeatureTemplate.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/object.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/string.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"./CodedValueDomain.js";import"../../chunks/enumeration.js";import"../../chunks/jsonMap.js";import"./Domain.js";import"./InheritedDomain.js";import"./RangeDomain.js";let c=class extends(s(r)){constructor(o){super(o),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(o){const s={};for(const r of Object.keys(o))s[r]=m(o[r]);return s}writeDomains(o,s){const r={};for(const s of Object.keys(o))o[s]&&(r[s]=o[s]?.toJSON());s.domains=r}};o([t({json:{write:!0}})],c.prototype,"id",void 0),o([t({json:{write:!0}})],c.prototype,"name",void 0),o([t({json:{write:!0}})],c.prototype,"domains",void 0),o([e("domains")],c.prototype,"readDomains",null),o([n("domains")],c.prototype,"writeDomains",null),o([t({type:[p],json:{write:!0}})],c.prototype,"templates",void 0),c=o([i("esri.layers.support.FeatureType")],c);const a=c;export{a as default};
