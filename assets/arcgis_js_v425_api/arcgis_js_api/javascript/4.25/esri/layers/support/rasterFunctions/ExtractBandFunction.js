// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/maybe ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ./BaseRasterFunction ./ExtractBandFunctionArguments ./pixelUtils".split(" "),function(r,g,l,m,b,x,t,u,v,w){b=function(p){function n(){var a=p.apply(this,arguments)||this;a.functionName="ExtractBand";a.functionArguments=null;a.rasterArgumentNames=
["raster"];return a}r._inheritsLoose(n,p);var q=n.prototype;q._bindSourceRasters=function(){var {sourceRasterInfos:a}=this;a=a[0];const {bandCount:h}=a,{bandIDs:d,missingBandAction:k}=this.functionArguments;if(k===w.MissingBandAction.fail&&d.some(c=>0>c||c>=h))return{success:!1,error:"extract-band-function: invalid bandIDs"};this.outputPixelType=this._getOutputPixelType("f32");a=a.clone();a.pixelType=this.outputPixelType;const {statistics:e,histograms:f}=a;l.isSome(e)&&e.length&&(a.statistics=d.map(c=>
e[c]||e[e.length-1]));l.isSome(f)&&f.length&&(a.histograms=d.map(c=>f[c]||f[f.length-1]));this.rasterInfo=a;return{success:!0}};q._processPixels=function(a){a=a.pixelBlocks?.[0];if(l.isNone(a))return null;const h=a.pixels.length,d=this.functionArguments.bandIDs.map(k=>k>=h?h-1:k);return a.extractBands(d)};return n}(u);g.__decorate([m.property({json:{write:!0,name:"rasterFunction"}})],b.prototype,"functionName",void 0);g.__decorate([m.property({type:v,json:{write:!0,name:"rasterFunctionArguments"}})],
b.prototype,"functionArguments",void 0);g.__decorate([m.property()],b.prototype,"rasterArgumentNames",void 0);return b=g.__decorate([t.subclass("esri.layers.support.rasterFunctions.ExtractBandFunction")],b)});