// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Logger ../../core/promiseUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./refresh".split(" "),function(h,e,f,p,m,k,r,t,q,n){h.RefreshableLayer=b=>{b=function(c){function g(...d){var a=c.call(this,...d)||this;a.refreshInterval=0;a.refreshTimestamp=0;a._debounceHasDataChanged=m.debounce(()=>a.hasDataChanged());
a.when().then(()=>{n.registerLayer(e._assertThisInitialized(a))},()=>{});return a}e._inheritsLoose(g,c);var l=g.prototype;l.destroy=function(){n.unregisterLayer(this)};l.refresh=function(d=Date.now()){m.ignoreAbortErrors(this._debounceHasDataChanged()).then(a=>{a&&this._set("refreshTimestamp",d);this.emit("refresh",{dataChanged:a})},a=>{p.getLogger(this.declaredClass).error(a);this.emit("refresh",{dataChanged:!1,error:a})})};l.hasDataChanged=function(){var d=e._asyncToGenerator(function*(){return!0});
return function(){return d.apply(this,arguments)}}();e._createClass(g,[{key:"refreshParameters",get:function(){return{_ts:this.refreshTimestamp||null}}}]);return g}(b);f.__decorate([k.property({type:Number,cast:c=>.1<=c?c:0>=c?0:.1,json:{write:!0}})],b.prototype,"refreshInterval",void 0);f.__decorate([k.property({readOnly:!0})],b.prototype,"refreshTimestamp",void 0);f.__decorate([k.property()],b.prototype,"refreshParameters",null);return b=f.__decorate([q.subclass("esri.layers.mixins.RefreshableLayer")],
b)};h.isRefreshableLayer=function(b){return null!=b&&"object"===typeof b&&"refreshTimestamp"in b&&"refresh"in b};Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});