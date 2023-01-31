// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Accessor ../../core/Error ../../core/Logger ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass".split(" "),function(n,g,e,q,r,h,u,v,t){e=function(p){function m(a){a=p.call(this,a)||this;a.precision=4;a.thumbsConstrained=!0;return a}n._inheritsLoose(m,p);var f=m.prototype;f.toPrecision=function(a){return parseFloat(a.toFixed(this.precision))};
f.defaultLabelFormatFunction=function(a){const {max:c,min:b,precision:d}=this;return parseFloat(a.toFixed(null!=c&&null!=b&&10<c-b?2:d)).toString()};f.defaultInputFormatFunction=function(a){return a.toString()};f.defaultInputParseFunction=function(a){return parseFloat(a)};f.getBounds=function(){const {effectiveMax:a,effectiveMin:c,max:b,min:d}=this;return{min:null!=c&&null!=d?Math.max(d,c):d,max:null!=a&&null!=b?Math.min(b,a):b}};f.getBoundsForValueAtIndex=function(a){const {thumbsConstrained:c,values:b}=
this,{min:d,max:k}=this.getBounds();if(c&&b){const l=a-1;a+=1;return{min:null!=b[l]?b[l]:d,max:null!=b[a]?b[a]:k}}return{min:d,max:k}};f.getLabelForValue=function(a,c,b){return null==a?null:this.labelFormatFunction?this.labelFormatFunction(a,c,b):this.defaultLabelFormatFunction(a)};f.setMax=function(a){const {max:c,values:b}=this;if(null==a)this._set("max",null);else if(isNaN(a))this._logError("slider:invalid-value","Supplied value for property 'max' is NaN.");else if(a=this.toPrecision(a),c!==a&&
(this._set("max",a),b&&b.length))for(let d=0;d<b.length;d++)a<b[d]&&this.setValue(d,a)};f.setMin=function(a){const {min:c,values:b}=this;if(null==a)this._set("min",null);else if(isNaN(a))this._logError("slider:invalid-value","Supplied value for property 'min' is NaN.");else if(a=this.toPrecision(a),c!==a&&(this._set("min",a),b&&b.length))for(let d=0;d<b.length;d++)a>b[d]&&this.setValue(d,a)};f.setEffectiveMax=function(a){null==a?this._set("effectiveMax",null):isNaN(a)?this._logError("slider:invalid-value",
"Supplied value for property 'effectiveMax' is NaN."):(a=this.toPrecision(a),this.effectiveMax!==a&&this._set("effectiveMax",this._applyBoundsToValue(a)))};f.setEffectiveMin=function(a){null==a?this._set("effectiveMin",null):isNaN(a)?this._logError("slider:invalid-value","Supplied value for property 'effectiveMin' is NaN."):(a=this.toPrecision(a),this.effectiveMin!==a&&this._set("effectiveMin",this._applyBoundsToValue(a)))};f.setValue=function(a,c){if(isNaN(c))this._logError("slider:invalid-value",
"Supplied value for member of property 'values' is NaN.");else{var {values:b}=this;if(null==b)this._logError("slider:invalid-value","Supplied value for member of property 'values' is null.");else{var d=b[a];c=this.toPrecision(c);d!==c&&(b=[...b],b[a]=c,this._set("values",b),this.notifyChange("labels"))}}};f._applyBoundsToValue=function(a){const {max:c,min:b}=this;return null!=b&&a<b?b:null!=c&&a>c?c:a};f._logError=function(a,c,b){r.getLogger(this.declaredClass).error(new q(a,c,b))};n._createClass(m,
[{key:"effectiveMax",set:function(a){this.setEffectiveMax(a)}},{key:"effectiveMin",set:function(a){this.setEffectiveMin(a)}},{key:"labelFormatFunction",set:function(a){this._set("labelFormatFunction",a)}},{key:"inputFormatFunction",set:function(a){this._set("inputFormatFunction",a)}},{key:"inputParseFunction",set:function(a){this._set("inputParseFunction",a)}},{key:"labels",get:function(){const {max:a,min:c,values:b}=this,d=b&&b.length?b.map((k,l)=>this.getLabelForValue(k,"value",l)):[];return{max:this.getLabelForValue(a,
"max"),min:this.getLabelForValue(c,"min"),values:d}}},{key:"max",set:function(a){this.setMax(a)}},{key:"min",set:function(a){this.setMin(a)}},{key:"state",get:function(){const {max:a,min:c}=this;return null!=a&&null!=c&&a>c?"ready":"disabled"}},{key:"values",set:function(a){const {max:c,min:b}=this,d=this.values;d&&a&&d.length===a.length&&d.every((k,l)=>k===a[l])||(this._set("values",null),a&&a.length&&(null!=b&&a.some(k=>k<b)&&(this.min=Math.min(...a)),null!=c&&a.some(k=>k>c)&&(this.max=Math.max(...a))),
this._set("values",a))}}]);return m}(e);g.__decorate([h.property()],e.prototype,"effectiveMax",null);g.__decorate([h.property()],e.prototype,"effectiveMin",null);g.__decorate([h.property()],e.prototype,"labelFormatFunction",null);g.__decorate([h.property()],e.prototype,"inputFormatFunction",null);g.__decorate([h.property()],e.prototype,"inputParseFunction",null);g.__decorate([h.property({readOnly:!0})],e.prototype,"labels",null);g.__decorate([h.property()],e.prototype,"max",null);g.__decorate([h.property()],
e.prototype,"min",null);g.__decorate([h.property()],e.prototype,"precision",void 0);g.__decorate([h.property({readOnly:!0})],e.prototype,"state",null);g.__decorate([h.property()],e.prototype,"thumbsConstrained",void 0);g.__decorate([h.property()],e.prototype,"values",null);return e=g.__decorate([t.subclass("esri.widgets.Slider.SliderViewModel")],e)});