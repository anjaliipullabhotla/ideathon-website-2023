// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/maybe ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ./BaseRasterFunction ./pixelUtils ./RemapFunctionArguments".split(" "),function(u,h,q,k,e,y,v,w,n,x){e=function(r){function p(){var a=r.apply(this,arguments)||this;a.functionName="Remap";a.functionArguments=null;a.rasterArgumentNames=["raster"];
a.lookup=null;return a}u._inheritsLoose(p,r);var t=p.prototype;t._bindSourceRasters=function(){const a=this.sourceRasterInfos[0].clone(),{pixelType:g}=a;this.outputPixelType=this._getOutputPixelType(g);a.pixelType=this.outputPixelType;a.colormap=null;a.histograms=null;const {statistics:d}=a,{allowUnmatched:l,outputValues:c}=this.functionArguments;if(q.isSome(d)&&d.length&&!l){let f=c[0],m=f;for(var b=0;b<c.length;b++)f=f>c[b]?c[b]:f,m=m>c[b]?m:c[b];for(b=0;b<d.length;b++)d[b]={...d[b],min:f,max:m}}this.rasterInfo=
a;this.lookup=l?null:n.createRemapLUT(g,this.functionArguments.inputRanges,c);return{success:!0}};t._processPixels=function(a){a=a.pixelBlocks?.[0];if(q.isNone(a))return null;const {lookup:g,outputPixelType:d}=this;if(g)return n.lookupPixels(a,{lut:[g.lut],offset:g.offset,outputPixelType:d});const {inputRanges:l,outputValues:c,noDataRanges:b,allowUnmatched:f}=this.functionArguments;return n.remap(a,{inputRanges:l,outputValues:c,noDataRanges:b,allowUnmatched:f,outputPixelType:d})};return p}(w);h.__decorate([k.property({json:{write:!0,
name:"rasterFunction"}})],e.prototype,"functionName",void 0);h.__decorate([k.property({type:x,json:{write:!0,name:"rasterFunctionArguments"}})],e.prototype,"functionArguments",void 0);h.__decorate([k.property()],e.prototype,"rasterArgumentNames",void 0);h.__decorate([k.property({json:{write:!0}})],e.prototype,"lookup",void 0);return e=h.__decorate([v.subclass("esri.layers.support.rasterFunctions.RemapFunction")],e)});