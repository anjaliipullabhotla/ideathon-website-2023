// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/maybe ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ./Symbol3DLayer ./support/ObjectSymbol3DLayerResource ./support/Symbol3DAnchorPosition3D ./support/Symbol3DMaterial".split(" "),function(h,c,m,d,a,t,k,n,p,q,l,r){var g;a=g=function(e){function f(b){b=e.call(this,b)||this;b.material=null;
b.castShadows=!0;b.resource=null;b.type="object";b.width=void 0;b.height=void 0;b.depth=void 0;b.anchor=void 0;b.anchorPosition=void 0;b.heading=void 0;b.tilt=void 0;b.roll=void 0;return b}h._inheritsLoose(f,e);f.prototype.clone=function(){return new g({heading:this.heading,tilt:this.tilt,roll:this.roll,anchor:this.anchor,anchorPosition:this.anchorPosition&&this.anchorPosition.clone(),depth:this.depth,enabled:this.enabled,height:this.height,material:m.isSome(this.material)?this.material.clone():null,
castShadows:this.castShadows,resource:this.resource&&this.resource.clone(),width:this.width})};h._createClass(f,[{key:"isPrimitive",get:function(){return!this.resource||"string"!==typeof this.resource.href}}]);return f}(p);c.__decorate([d.property({type:r.Symbol3DMaterial,json:{write:!0}})],a.prototype,"material",void 0);c.__decorate([d.property({type:Boolean,nonNullable:!0,json:{write:!0,default:!0}})],a.prototype,"castShadows",void 0);c.__decorate([d.property({type:q.ObjectSymbol3DLayerResource,
json:{write:!0}})],a.prototype,"resource",void 0);c.__decorate([k.enumeration({Object:"object"},{readOnly:!0})],a.prototype,"type",void 0);c.__decorate([d.property({type:Number,json:{write:!0}})],a.prototype,"width",void 0);c.__decorate([d.property({type:Number,json:{write:!0}})],a.prototype,"height",void 0);c.__decorate([d.property({type:Number,json:{write:!0}})],a.prototype,"depth",void 0);c.__decorate([k.enumeration({center:"center",top:"top",bottom:"bottom",origin:"origin",relative:"relative"}),
d.property({json:{default:"origin"}})],a.prototype,"anchor",void 0);c.__decorate([d.property({type:l.Symbol3DAnchorPosition3D,json:{type:[Number],read:{reader:e=>new l.Symbol3DAnchorPosition3D({x:e[0],y:e[1],z:e[2]})},write:{writer:(e,f)=>{f.anchorPosition=[e.x,e.y,e.z]},overridePolicy(){return{enabled:"relative"===this.anchor}}}}})],a.prototype,"anchorPosition",void 0);c.__decorate([d.property({type:Number,json:{write:!0}})],a.prototype,"heading",void 0);c.__decorate([d.property({type:Number,json:{write:!0}})],
a.prototype,"tilt",void 0);c.__decorate([d.property({type:Number,json:{write:!0}})],a.prototype,"roll",void 0);c.__decorate([d.property({readOnly:!0})],a.prototype,"isPrimitive",null);return a=g=c.__decorate([n.subclass("esri.symbols.ObjectSymbol3DLayer")],a)});