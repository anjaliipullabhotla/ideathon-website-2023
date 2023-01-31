// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/jsonMap ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./ClassificationDefinition".split(" "),function(h,c,e,d,f,m,l,a){f=new e.JSONMap({esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation",
esriClassifyDefinedInterval:"defined-interval"});e=new e.JSONMap({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"});a=function(k){function g(){var b=k.apply(this,arguments)||this;b.breakCount=null;b.classificationField=null;b.classificationMethod=null;b.normalizationField=null;b.normalizationType=null;b.type="class-breaks-definition";return b}h._inheritsLoose(g,k);h._createClass(g,[{key:"standardDeviationInterval",set:function(b){"standard-deviation"===
this.classificationMethod&&this._set("standardDeviationInterval",b)}},{key:"definedInterval",set:function(b){"defined-interval"===this.classificationMethod&&this._set("definedInterval",b)}}]);return g}(a);c.__decorate([d.property({json:{write:!0}})],a.prototype,"breakCount",void 0);c.__decorate([d.property({json:{write:!0}})],a.prototype,"classificationField",void 0);c.__decorate([d.property({type:String,json:{read:f.read,write:f.write}})],a.prototype,"classificationMethod",void 0);c.__decorate([d.property({json:{write:!0}})],
a.prototype,"normalizationField",void 0);c.__decorate([d.property({json:{read:e.read,write:e.write}})],a.prototype,"normalizationType",void 0);c.__decorate([d.property({value:null,json:{write:!0}})],a.prototype,"standardDeviationInterval",null);c.__decorate([d.property({value:null,json:{write:!0}})],a.prototype,"definedInterval",null);c.__decorate([d.property()],a.prototype,"type",void 0);return a=c.__decorate([l.subclass("esri.rest.support.ClassBreaksDefinition")],a)});