// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../Color ../../core/arrayUtils ../../core/Evented ../../core/handleUtils ../../core/maybe ../../core/memoize ../../core/reactiveUtils ../../core/uuid ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../geometry/Point ./support/constants ./support/unitUtils".split(" "),function(m,c,n,v,b,w,f,p,k,x,d,E,y,z,A,q){b=function(r){function l(a){a=r.call(this,
a)||this;a.type=null;a.id=x.generateUUID();a.title=null;a.color=new n("#000000");a.visible=!0;a._getSamplesMemoized=p.memoize((e,g)=>q.convertSamples(e,g));a._getStatisticsMemoized=p.memoize((e,g)=>q.convertStatistics(e,g));a.viewVisualizationEnabled=!0;a.result=null;a.effectiveUnits=null;a.numSamplesForPreview=30;a.numSamplesPerChunk=200;a.chartFillEnabled=!0;a.chartStrokeWidth=1.5;a.chartStrokeOffsetY=0;return a}m._inheritsLoose(l,r);var h=l.prototype;h.queryElevation=function(){throw Error("not implemented");
};h.attach=function(a){this._viewModel=a;return w.handlesGroup([k.watch(()=>a.effectiveUnits,e=>{this.effectiveUnits=e},k.syncAndInitial),k.watch(()=>[a.input],()=>this._onChange(),k.sync)])};h.toggleVisibility=function(a){this.visible=void 0===a?!this.visible:a};h._onChange=function(){this.emit("change")};h._getPoint=function(a){const {samples:e,result:g}=this;if(f.isNone(e)||f.isNone(g))return null;const t=e.length;if(0===t)return null;const {x:B,y:C,z:u}=v.binaryFindClosest(e,a*e[t-1].distance,
D=>D.distance);return f.isNone(u)?null:new z({x:B,y:C,z:u,spatialReference:g.spatialReference})};m._createClass(l,[{key:"progress",get:function(){return f.isSome(this.result)&&this.visible?this.result.progress:0}},{key:"samples",get:function(){return this._getSamplesMemoized(this.result,this.effectiveUnits)}},{key:"statistics",get:function(){return this._getStatisticsMemoized(this.result,this.effectiveUnits)}},{key:"hoveredPoint",get:function(){return f.applySome(this._viewModel.hoveredChartPosition,
a=>this._getPoint(a))}},{key:"available",get:function(){return!0}},{key:"hasZ",get:function(){const a=this.result;return f.isSome(a)&&a.hasZ}},{key:"minDemResolution",get:function(){return A.getConfig().defaultDemResolution}}]);return l}(b.EventedAccessor);c.__decorate([d.property({nonNullable:!0})],b.prototype,"id",void 0);c.__decorate([d.property({nonNullable:!0})],b.prototype,"title",void 0);c.__decorate([d.property({type:n,nonNullable:!0})],b.prototype,"color",void 0);c.__decorate([d.property({nonNullable:!0})],
b.prototype,"visible",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"progress",null);c.__decorate([d.property({readOnly:!0})],b.prototype,"samples",null);c.__decorate([d.property({readOnly:!0})],b.prototype,"statistics",null);c.__decorate([d.property()],b.prototype,"hoveredPoint",null);c.__decorate([d.property()],b.prototype,"viewVisualizationEnabled",void 0);c.__decorate([d.property()],b.prototype,"available",null);c.__decorate([d.property()],b.prototype,"result",void 0);c.__decorate([d.property()],
b.prototype,"effectiveUnits",void 0);c.__decorate([d.property()],b.prototype,"numSamplesForPreview",void 0);c.__decorate([d.property()],b.prototype,"numSamplesPerChunk",void 0);c.__decorate([d.property()],b.prototype,"chartFillEnabled",void 0);c.__decorate([d.property()],b.prototype,"chartStrokeWidth",void 0);c.__decorate([d.property()],b.prototype,"chartStrokeOffsetY",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"hasZ",null);c.__decorate([d.property({readOnly:!0})],b.prototype,"minDemResolution",
null);c.__decorate([d.property()],b.prototype,"_viewModel",void 0);return b=c.__decorate([y.subclass("esri.widgets.ElevationProfile.ElevationProfileLine")],b)});