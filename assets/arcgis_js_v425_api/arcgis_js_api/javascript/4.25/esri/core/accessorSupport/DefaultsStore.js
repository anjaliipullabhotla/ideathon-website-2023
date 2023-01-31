// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../lang","./PropertyOrigin"],function(h,k,g){let m=function(){function f(){this._values=new Map;this.multipleOriginsSupported=!1}var d=f.prototype;d.clone=function(a){const b=new f;this._values.forEach((c,e)=>{a&&a.has(e)||b.set(e,k.clone(c.value),c.origin)});return b};d.get=function(a,b){b=this._normalizeOrigin(b);a=this._values.get(a);return null==b||a?.origin===b?a?.value:void 0};d.originOf=function(a){return this._values.get(a)?.origin??g.OriginId.USER};d.keys=function(a){a=
this._normalizeOrigin(a);const b=[...this._values.keys()];return null==a?b:b.filter(c=>this._values.get(c)?.origin===a)};d.set=function(a,b,c){c=this._normalizeOrigin(c);if(c===g.OriginId.DEFAULTS){const e=this._values.get(a);if(e&&null!=e.origin&&e.origin>c)return}this._values.set(a,new l(b,c))};d.delete=function(a,b){b=this._normalizeOrigin(b);null!=b&&this._values.get(a)?.origin!==b||this._values.delete(a)};d.has=function(a,b){b=this._normalizeOrigin(b);return null!=b?this._values.get(a)?.origin===
b:this._values.has(a)};d.forEach=function(a){this._values.forEach(({value:b},c)=>a(b,c))};d._normalizeOrigin=function(a){if(null!=a)return a===g.OriginId.DEFAULTS?a:g.OriginId.USER};return f}(),l=function(f,d){this.value=f;this.origin=d};h.DefaultsStore=m;Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});