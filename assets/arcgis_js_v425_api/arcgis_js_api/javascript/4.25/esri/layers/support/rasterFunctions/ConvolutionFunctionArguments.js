// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/lang ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ./BaseFunctionArguments ./convolutionUtils".split(" "),function(k,c,m,d,b,n,p,f){var g;b=g=function(l){function e(){var a=l.apply(this,arguments)||this;a.rows=3;a.cols=3;a.kernel=[0,0,0,0,1,0,0,0,0];return a}k._inheritsLoose(e,l);e.prototype.clone=function(){return new g({cols:this.cols,
rows:this.rows,kernel:[...this.kernel],kernelType:this.kernelType,raster:m.clone(this.raster)})};k._createClass(e,[{key:"kernelType",set:function(a){this._set("kernelType",a);const h=f.convolutionKernels.get(a);h&&a!==f.ConvolutionKernel.UserDefined&&a!==f.ConvolutionKernel.None&&(a=Math.sqrt(h.length),this._set("kernel",h),this._set("cols",a),this._set("rows",a))}}]);return e}(p);c.__decorate([d.property({json:{type:Number,write:!0}})],b.prototype,"rows",void 0);c.__decorate([d.property({json:{type:Number,
write:!0}})],b.prototype,"cols",void 0);c.__decorate([d.property({json:{name:"type",type:Number,write:!0}})],b.prototype,"kernelType",null);c.__decorate([d.property({json:{type:[Number],write:!0}})],b.prototype,"kernel",void 0);return b=g=c.__decorate([n.subclass("esri.layers.support.rasterFunctions.ConvolutionFunctionArguments")],b)});