// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../geometry ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../geometry/support/jsonUtils ../../geometry/Polyline".split(" "),function(h,e,b,k,f,p,l,m,g,n){b=function(a){function c(d){d=a.call(this,d)||this;d.extendHow="default-curve-extension";d.polylines=null;d.trimExtendTo=null;return d}h._inheritsLoose(c,
a);return c}(k.JSONSupport);e.__decorate([f.property({type:String,json:{write:!0}})],b.prototype,"extendHow",void 0);e.__decorate([f.property({type:[n],json:{read:{reader:a=>a?a.map(c=>g.fromJSON(c)):null},write:{writer:(a,c)=>{c.polylines=a.map(d=>d.toJSON())}}}})],b.prototype,"polylines",void 0);e.__decorate([f.property({json:{read:{reader:a=>a?g.fromJSON(a):null},write:{writer:(a,c)=>{c.trimExtendTo=a.toJSON()}}}})],b.prototype,"trimExtendTo",void 0);b=e.__decorate([m.subclass("esri.rest.support.TrimExtendParameters")],
b);b.from=l.ensureType(b);return b});