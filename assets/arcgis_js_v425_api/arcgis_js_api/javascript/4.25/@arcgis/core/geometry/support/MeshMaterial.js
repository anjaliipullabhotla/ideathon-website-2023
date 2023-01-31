/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import r from"../../Color.js";import{JSONSupport as t}from"../../core/JSONSupport.js";import{i as e}from"../../chunks/maybe.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import l from"./MeshTexture.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../chunks/object.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/string.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/imageUtils.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../chunks/persistableUrlUtils.js";import"../../core/urlUtils.js";var n;let p=n=class extends t{constructor(o){super(o),this.color=null,this.colorTexture=null,this.normalTexture=null,this.alphaMode="auto",this.alphaCutoff=.5,this.doubleSided=!0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(o,r){const t=e(o)?o.get(this):null;if(t)return t;const s=new n(this.clonePropertiesWithDeduplication(r));return e(o)&&o.set(this,s),s}clonePropertiesWithDeduplication(o){return{color:e(this.color)?this.color.clone():null,colorTexture:e(this.colorTexture)?this.colorTexture.cloneWithDeduplication(o):null,normalTexture:e(this.normalTexture)?this.normalTexture.cloneWithDeduplication(o):null,alphaMode:this.alphaMode,alphaCutoff:this.alphaCutoff,doubleSided:this.doubleSided,colorTextureTransform:e(this.colorTextureTransform)?this.colorTextureTransform:null,normalTextureTransform:e(this.normalTextureTransform)?this.normalTextureTransform:null}}};o([s({type:r,json:{write:!0}})],p.prototype,"color",void 0),o([s({type:l,json:{write:!0}})],p.prototype,"colorTexture",void 0),o([s({type:l,json:{write:!0}})],p.prototype,"normalTexture",void 0),o([s({nonNullable:!0,json:{write:!0}})],p.prototype,"alphaMode",void 0),o([s({nonNullable:!0,json:{write:!0}})],p.prototype,"alphaCutoff",void 0),o([s({nonNullable:!0,json:{write:!0}})],p.prototype,"doubleSided",void 0),o([s()],p.prototype,"colorTextureTransform",void 0),o([s()],p.prototype,"normalTextureTransform",void 0),p=n=o([i("esri.geometry.support.MeshMaterial")],p);const u=p;export{u as default};