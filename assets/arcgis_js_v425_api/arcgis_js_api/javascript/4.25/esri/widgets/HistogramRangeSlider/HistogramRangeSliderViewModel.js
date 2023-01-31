// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../Slider/SliderViewModel ../smartMapping/support/utils".split(" "),function(m,e,q,g,d,u,r,t,n){d=function(p){function l(a){var b=p.call(this,a)||this;b.average=null;b.bins=null;b.hasTimeData=!1;b.labelFormatFunction=h=>{if(b.hasTimeData)return n.formatDateLabel(h);
const {max:f,min:c,precision:k}=m._assertThisInitialized(b);return n.formatNumberLabel(parseFloat(h.toFixed(10<f-c?2:k)))};b.rangeType="equal";b.standardDeviation=null;return b}m._inheritsLoose(l,p);l.prototype.generateWhereClause=function(a){const {rangeType:b,state:h,values:f}=this;if("ready"!==h||!f.length||q.isNone(a))return null;const c=f[0],k=1<f.length?f[f.length-1]:null;switch(b){case "equal":return`${a} = ${c}`;case "not-equal":return`${a} <> ${c}`;case "less-than":return`${a} < ${c}`;case "greater-than":return`${a} > ${c}`;
case "at-least":return`${a} >= ${c}`;case "at-most":return`${a} <= ${c}`;case "between":return`${a} BETWEEN ${c} AND ${k}`;case "not-between":return`${a} NOT BETWEEN ${c} AND ${k}`;default:return null}};return l}(t);e.__decorate([g.property()],d.prototype,"average",void 0);e.__decorate([g.property()],d.prototype,"bins",void 0);e.__decorate([g.property()],d.prototype,"hasTimeData",void 0);e.__decorate([g.property()],d.prototype,"labelFormatFunction",void 0);e.__decorate([g.property()],d.prototype,
"rangeType",void 0);e.__decorate([g.property()],d.prototype,"standardDeviation",void 0);return d=e.__decorate([r.subclass("esri.widgets.HistogramRangeSlider.HistogramRangeSliderViewModel")],d)});