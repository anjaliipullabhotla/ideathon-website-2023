// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/Error ../core/Promise ../core/promiseUtils ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/subclass".split(" "),function(h,d,l,b,m,g,p,q,n){b=function(k){function e(a){a=k.call(this,a)||this;a.state="running";a.target=null;a._dfd=null;return a}h._inheritsLoose(e,k);var f=e.prototype;f.initialize=function(){this.addResolvingPromise(new Promise((a,
c)=>this._dfd={resolve:a,reject:c}))};f.stop=function(){"stopped"!==this.state&&"finished"!==this.state&&(this._set("state","stopped"),this._dfd?.reject(new l("ViewAnimation stopped")))};f.finish=function(){"stopped"!==this.state&&"finished"!==this.state&&(this._set("state","finished"),this._dfd?.resolve())};f.update=function(a,c){c||(c=m.isPromiseLike(a)?"waiting-for-target":"running");this._set("target",a);this._set("state",c)};h._createClass(e,[{key:"done",get:function(){return"finished"===this.state||
"stopped"===this.state}}]);return e}(b.EsriPromise);d.__decorate([g.property({readOnly:!0})],b.prototype,"done",null);d.__decorate([g.property({readOnly:!0,type:String})],b.prototype,"state",void 0);d.__decorate([g.property()],b.prototype,"target",void 0);b=d.__decorate([n.subclass("esri.views.ViewAnimation")],b);(b||(b={})).State={RUNNING:"running",STOPPED:"stopped",FINISHED:"finished",WAITING_FOR_TARGET:"waiting-for-target"};return b});