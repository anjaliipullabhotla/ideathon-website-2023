// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/lang ../../core/Logger ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/cast ../../core/accessorSupport/decorators/subclass".split(" "),function(d,u,f,v,h,w,n,p,x){function t(b,e,c,a){const {loggerTag:g,stride:k}=e;return 0!==b.length%k?(a.error(g,`Invalid array length, expected a multiple of ${k}`),new c([])):b}function l(b,e,c,a,g){if(!b)return b;if(b instanceof
e)return t(b,a,e,g);for(const k of c)if(b instanceof k)return t(new e(b),a,e,g);if(Array.isArray(b))return t(new e(b),a,e,g);c=c.map(k=>`'${k.name}'`);g.error(`Failed to set property, expected one of ${c}, but got ${b.constructor.name}`);return new e([])}function q(b,e,c){const a=Array(b.length);for(let g=0;g<b.length;g++)a[g]=b[g];e[c]=a}var r;const m=w.getLogger("esri.geometry.support.MeshVertexAttributes");d.MeshVertexAttributes=r=function(b){function e(a){a=b.call(this,a)||this;a.color=null;a.position=
new Float64Array(0);a.uv=null;a.normal=null;a.tangent=null;return a}u._inheritsLoose(e,b);var c=e.prototype;c.castColor=function(a){return l(a,Uint8Array,[Uint8ClampedArray],{loggerTag:".color\x3d",stride:4},m)};c.castPosition=function(a){a&&a instanceof Float32Array&&m.warn(".position\x3d","Setting position attribute from a Float32Array may cause precision problems. Consider storing data in a Float64Array or a regular number array");return l(a,Float64Array,[Float32Array],{loggerTag:".position\x3d",
stride:3},m)};c.castUv=function(a){return l(a,Float32Array,[Float64Array],{loggerTag:".uv\x3d",stride:2},m)};c.castNormal=function(a){return l(a,Float32Array,[Float64Array],{loggerTag:".normal\x3d",stride:3},m)};c.castTangent=function(a){return l(a,Float32Array,[Float64Array],{loggerTag:".tangent\x3d",stride:4},m)};c.clone=function(){const a={position:h.clone(this.position),uv:h.clone(this.uv),normal:h.clone(this.normal),tangent:h.clone(this.tangent),color:h.clone(this.color)};return new r(a)};c.clonePositional=
function(){const a={position:h.clone(this.position),normal:h.clone(this.normal),tangent:h.clone(this.tangent),uv:this.uv,color:this.color};return new r(a)};return e}(v.JSONSupport);f.__decorate([n.property({json:{write:q}})],d.MeshVertexAttributes.prototype,"color",void 0);f.__decorate([p.cast("color")],d.MeshVertexAttributes.prototype,"castColor",null);f.__decorate([n.property({nonNullable:!0,json:{write:q}})],d.MeshVertexAttributes.prototype,"position",void 0);f.__decorate([p.cast("position")],
d.MeshVertexAttributes.prototype,"castPosition",null);f.__decorate([n.property({json:{write:q}})],d.MeshVertexAttributes.prototype,"uv",void 0);f.__decorate([p.cast("uv")],d.MeshVertexAttributes.prototype,"castUv",null);f.__decorate([n.property({json:{write:q}})],d.MeshVertexAttributes.prototype,"normal",void 0);f.__decorate([p.cast("normal")],d.MeshVertexAttributes.prototype,"castNormal",null);f.__decorate([n.property({json:{write:q}})],d.MeshVertexAttributes.prototype,"tangent",void 0);f.__decorate([p.cast("tangent")],
d.MeshVertexAttributes.prototype,"castTangent",null);d.MeshVertexAttributes=r=f.__decorate([x.subclass("esri.geometry.support.MeshVertexAttributes")],d.MeshVertexAttributes);d.castArray=l;Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});