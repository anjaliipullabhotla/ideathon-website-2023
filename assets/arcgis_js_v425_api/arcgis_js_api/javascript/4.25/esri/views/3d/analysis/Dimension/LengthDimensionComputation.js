// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../analysis/LengthDimensionResult".split(" "),function(a,g,c,l,e,d,r,t,m,n){a.LengthDimensionComputation=function(h){function f(b){b=h.call(this,b)||this;b.geometry=null;
b.elevationAlignedStartPoint=null;b.elevationAlignedEndPoint=null;return b}g._inheritsLoose(f,h);var k=f.prototype;k.normalizeCtorArgs=function(b){const {dimension:p,...q}=b;return{result:new n({dimension:p}),...q}};k.initialize=function(){this.addHandles([e.watch(()=>this.dimension.startPoint,b=>this.elevationAlignedStartPoint=this.projectAndAlignPoint(b),e.syncAndInitial),e.watch(()=>this.dimension.endPoint,b=>this.elevationAlignedEndPoint=this.projectAndAlignPoint(b),e.syncAndInitial)])};g._createClass(f,
[{key:"dimension",get:function(){return this.result.dimension}},{key:"length",get:function(){return this.result.length}}]);return f}(l);c.__decorate([d.property({constructOnly:!0,nonNullable:!0})],a.LengthDimensionComputation.prototype,"result",void 0);c.__decorate([d.property({constructOnly:!0,nonNullable:!0})],a.LengthDimensionComputation.prototype,"projectAndAlignPoint",void 0);c.__decorate([d.property()],a.LengthDimensionComputation.prototype,"dimension",null);c.__decorate([d.property()],a.LengthDimensionComputation.prototype,
"length",null);c.__decorate([d.property()],a.LengthDimensionComputation.prototype,"geometry",void 0);c.__decorate([d.property()],a.LengthDimensionComputation.prototype,"elevationAlignedStartPoint",void 0);c.__decorate([d.property()],a.LengthDimensionComputation.prototype,"elevationAlignedEndPoint",void 0);c.__decorate([d.property()],a.LengthDimensionComputation.prototype,"preConstraintProperties",void 0);c.__decorate([d.property()],a.LengthDimensionComputation.prototype,"previousConstraint",void 0);
a.LengthDimensionComputation=c.__decorate([m.subclass("esri.views.3d.analysis.LengthDimensionComputation")],a.LengthDimensionComputation);Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});