// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../support/LegendOptions".split(" "),function(g,d,h,a,m,k,l){var b;a=b=function(e){function c(){var f=e.apply(this,arguments)||this;f.showLegend=null;return f}g._inheritsLoose(c,e);c.prototype.clone=function(){return new b({title:this.title,showLegend:this.showLegend})};
return c}(l.LegendOptions);d.__decorate([h.property({type:Boolean,json:{write:!0}})],a.prototype,"showLegend",void 0);return a=b=d.__decorate([k.subclass("esri.renderers.visualVariables.support.VisualVariableLegendOptions")],a)});