// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/JSONSupport ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass".split(" "),function(e,c,a,f,l,m,k){a=function(g){function b(){return g.apply(this,arguments)||this}e._inheritsLoose(b,g);var h=b.prototype;h.forwardTransform=function(d){return d};h.inverseTransform=function(d){return d};e._createClass(b,
[{key:"affectsPixelSize",get:function(){return!1}}]);return b}(a.JSONSupport);c.__decorate([f.property()],a.prototype,"affectsPixelSize",null);c.__decorate([f.property({json:{write:!0}})],a.prototype,"spatialReference",void 0);return a=c.__decorate([k.subclass("esri.layers.support.rasterTransforms.BaseRasterTransform")],a)});