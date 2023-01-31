// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/Logger ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../chunks/vec3 ../../chunks/vec3f64 ../../geometry/Point ../../geometry/SpatialReference ../../geometry/support/spatialReferenceUtils ./VoxelDimension".split(" "),function(p,g,d,x,h,B,C,y,l,q,n,r,z,A){const t=x.getLogger("esri.layers.voxel.VoxelVolume");
d=function(u){function m(a){a=u.call(this,a)||this;a.id=0;a.dimensions=null;a.spatialReference=r.WGS84;return a}p._inheritsLoose(m,u);var v=m.prototype;v.computeVoxelSpaceLocation=function(a){if(!this.isValid)return[0,0,0];if("xyt"===this.volumeType)return t.error("computeVoxelSpacePosition cannot be used with XYT volumes."),[0,0,0];if(!z.equals(this.spatialReference,a.spatialReference))return t.error("pos argument should have the same spatial reference as the VoxelLayer."),[0,0,0];const b=q.fromValues(a.x,
a.y,a.z??0);l.subtract(b,b,this.originInLayerSpace3D);l.divide(b,b,this.voxelSizeInLayerSpaceSigned);var c=this.dimensions[this.zDimension];if(!c.isRegular&&Array.isArray(c.irregularSpacing?.values)&&1<c.irregularSpacing.values.length){const k=a.z??0;a=c.irregularSpacing.values;const f=c.isPositiveUp?1:-1;c=a.reduce((e,w)=>Math.abs(f*w-k)<Math.abs(f*e-k)?w:e);for(let e=0;e<a.length;++e)if(a[e]===c){b[2]=e;break}}return[b[0],b[1],b[2]]};v.computeLayerSpaceLocation=function(a){if(!this.isValid)return new n({x:0,
y:0,spatialReference:this.spatialReference});const b=q.fromArray(a);l.multiply(b,b,this.voxelSizeInLayerSpaceSigned);l.add(b,b,this.originInLayerSpace3D);if("xyt"===this.volumeType)return new n({x:b[0],y:b[1],spatialReference:this.spatialReference});const c=this.dimensions[this.zDimension];!c.isRegular&&Array.isArray(c.irregularSpacing?.values)&&(b[2]=0>a[2]?c.irregularSpacing.values[0]:a[2]<c.irregularSpacing.values.length?c.irregularSpacing.values[a[2]]:c.irregularSpacing.values[c.irregularSpacing.values.length-
1],c.isPositiveUp||(b[2]*=-1));return new n({x:b[0],y:b[1],z:b[2],spatialReference:this.spatialReference})};p._createClass(m,[{key:"zDimension",get:function(){if(!this.dimensions||!Array.isArray(this.dimensions)||4!==this.dimensions.length)return-1;for(let a=2;4>a;++a)if(0<this.dimensions[a].size)return a;return-1}},{key:"isValid",get:function(){return!this.dimensions||!Array.isArray(this.dimensions)||4!==this.dimensions.length||1>this.dimensions[0].size||1>this.dimensions[1].size||-1===this.zDimension||
1>this.dimensions[this.zDimension].size?!1:!0}},{key:"originInLayerSpace3D",get:function(){if(!this.isValid||"xyt"===this.volumeType)return[0,0,0];const a=this.dimensions[0].getRange(),b=this.dimensions[1].getRange();var c=this.dimensions[2];c=c.isRegular?c.getRange():[0,c.size];return[a[0],b[0],c[0]]}},{key:"voxelSizeInLayerSpaceSigned",get:function(){if(!this.isValid||"xyt"===this.volumeType)return[0,0,0];const a=this.dimensions[0].getRange(),b=this.dimensions[1].getRange(),c=this.dimensions[2],
k=c.isRegular?c.getRange():[0,c.size],f=[this.sizeInVoxels[0],this.sizeInVoxels[1],this.sizeInVoxels[2]];for(let e=0;3>e;++e)2>f[e]?f[e]=1:--f[e];c.isRegular&&!c.isPositiveUp&&(f[2]*=-1);return[(a[1]-a[0])/f[0],(b[1]-b[0])/f[1],(k[1]-k[0])/f[2]]}},{key:"volumeType",get:function(){if(this.isValid){const a=0<this.dimensions[2].size,b=0<this.dimensions[3].size;if(!a&&b)return"xyt";if(a&&b)return"xyzt"}return"xyz"}},{key:"sizeInVoxels",get:function(){return this.isValid?[this.dimensions[0].size,this.dimensions[1].size,
this.dimensions[this.zDimension].size]:[0,0,0]}}]);return m}(d.JSONSupport);g.__decorate([h.property({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],d.prototype,"id",void 0);g.__decorate([h.property({type:[A],json:{write:{enabled:!0,isRequired:!0}}})],d.prototype,"dimensions",void 0);g.__decorate([h.property({type:r,json:{read:{enabled:!1}}})],d.prototype,"spatialReference",void 0);g.__decorate([h.property({type:Number,json:{read:!1}})],d.prototype,"zDimension",null);g.__decorate([h.property({type:[Boolean],
json:{read:!1}})],d.prototype,"isValid",null);g.__decorate([h.property({type:[Number],json:{read:!1}})],d.prototype,"originInLayerSpace3D",null);g.__decorate([h.property({type:[Number],json:{read:!1}})],d.prototype,"voxelSizeInLayerSpaceSigned",null);g.__decorate([h.property({type:["xyz","xyzt","xyt"],json:{read:{enabled:!1}}})],d.prototype,"volumeType",null);g.__decorate([h.property({type:[Number],json:{read:!1}})],d.prototype,"sizeInVoxels",null);return d=g.__decorate([y.subclass("esri.layers.voxel.VoxelVolume")],
d)});