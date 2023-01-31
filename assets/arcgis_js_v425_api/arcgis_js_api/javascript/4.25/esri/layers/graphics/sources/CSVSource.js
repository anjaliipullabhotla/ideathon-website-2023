// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../geometry ../../../core/has ../../../core/Loadable ../../../core/maybe ../../../core/promiseUtils ../../../core/workers/workers ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../rest/support/FeatureSet ../../../geometry/Extent".split(" "),function(d,e,g,D,q,r,t,u,v,h,E,F,w,x,y){d.CSVSource=
function(p){function m(b){var a=p.call(this,b)||this;a.type="csv";a.refresh=u.debounce(function(){var c=e._asyncToGenerator(function*(l){yield a.load();const {extent:n,timeExtent:k}=yield a._connection.invoke("refresh",l);a.sourceJSON.extent=n;k&&(a.sourceJSON.timeInfo.timeExtent=[k.start,k.end]);return{dataChanged:!0,updates:{extent:a.sourceJSON.extent,timeInfo:a.sourceJSON.timeInfo}}});return function(l){return c.apply(this,arguments)}}());return a}e._inheritsLoose(m,p);var f=m.prototype;f.load=
function(b){b=t.isSome(b)?b.signal:null;this.addResolvingPromise(this._startWorker(b));return Promise.resolve(this)};f.destroy=function(){this._connection?.close();this._connection=null};f.openPorts=function(){var b=e._asyncToGenerator(function*(){yield this.load();return this._connection.openPorts()});return function(){return b.apply(this,arguments)}}();f.queryFeatures=function(){var b=e._asyncToGenerator(function*(a,c={}){yield this.load(c);a=yield this._connection.invoke("queryFeatures",a?a.toJSON():
null,c);return x.fromJSON(a)});return function(a){return b.apply(this,arguments)}}();f.queryFeaturesJSON=function(){var b=e._asyncToGenerator(function*(a,c={}){yield this.load(c);return this._connection.invoke("queryFeatures",a?a.toJSON():null,c)});return function(a){return b.apply(this,arguments)}}();f.queryFeatureCount=function(){var b=e._asyncToGenerator(function*(a,c={}){yield this.load(c);return this._connection.invoke("queryFeatureCount",a?a.toJSON():null,c)});return function(a){return b.apply(this,
arguments)}}();f.queryObjectIds=function(){var b=e._asyncToGenerator(function*(a,c={}){yield this.load(c);return this._connection.invoke("queryObjectIds",a?a.toJSON():null,c)});return function(a){return b.apply(this,arguments)}}();f.queryExtent=function(){var b=e._asyncToGenerator(function*(a,c={}){yield this.load(c);a=yield this._connection.invoke("queryExtent",a?a.toJSON():null,c);return{count:a.count,extent:y.fromJSON(a.extent)}});return function(a){return b.apply(this,arguments)}}();f.querySnapping=
function(){var b=e._asyncToGenerator(function*(a,c={}){yield this.load(c);return this._connection.invoke("querySnapping",a,c)});return function(a){return b.apply(this,arguments)}}();f._startWorker=function(){var b=e._asyncToGenerator(function*(a){this._connection=yield v.open("CSVSourceWorker",{strategy:q("feature-layers-workers")?"dedicated":"local",signal:a});const {url:c,delimiter:l,fields:n,latitudeField:k,longitudeField:z,spatialReference:A,timeInfo:B}=this.loadOptions;a=yield this._connection.invoke("load",
{url:c,customParameters:this.customParameters,parsingOptions:{delimiter:l,fields:n?.map(C=>C.toJSON()),latitudeField:k,longitudeField:z,spatialReference:A?.toJSON(),timeInfo:B?.toJSON()}},{signal:a});this.locationInfo=a.locationInfo;this.sourceJSON=a.layerDefinition;this.delimiter=a.delimiter});return function(a){return b.apply(this,arguments)}}();return m}(r);g.__decorate([h.property()],d.CSVSource.prototype,"type",void 0);g.__decorate([h.property()],d.CSVSource.prototype,"loadOptions",void 0);g.__decorate([h.property()],
d.CSVSource.prototype,"customParameters",void 0);g.__decorate([h.property()],d.CSVSource.prototype,"locationInfo",void 0);g.__decorate([h.property()],d.CSVSource.prototype,"sourceJSON",void 0);g.__decorate([h.property()],d.CSVSource.prototype,"delimiter",void 0);d.CSVSource=g.__decorate([w.subclass("esri.layers.graphics.sources.CSVSource")],d.CSVSource);Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});