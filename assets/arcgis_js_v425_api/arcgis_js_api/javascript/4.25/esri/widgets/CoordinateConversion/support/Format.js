// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../geometry ../../../core/Accessor ../../../core/Error ../../../core/maybe ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../geometry/coordinateFormatter ../../../geometry/projection ../../../geometry/support/spatialReferenceUtils ../../../geometry/support/webMercatorUtils ./coordinateConversionUtils ../../../geometry/SpatialReference".split(" "),
function(t,f,e,w,p,x,g,B,C,y,h,u,z,A,m,q){e=function(v){function n(a){a=v.call(this,a)||this;a.conversionInfo=null;a.coordinateSegments=null;a.defaultPattern=null;a.name=null;a.viewModel=null;return a}t._inheritsLoose(n,v);var k=n.prototype;k.convert=function(a){if(!m.isValidPoint(a))return Promise.reject(new p("format:invalid-point","Could not convert invalid point.",{point:a}));const b=this.get("conversionInfo.convert");return b?Promise.resolve().then(()=>b(a)):this._project(a,this.spatialReference).then(c=>
this._getCoordinate(c).then(d=>({location:c,coordinate:d})))};k.getConversionStrategy=function(){const a=this._viewSpatialReference;return this.get("conversionInfo.convert")||this.get("viewModel.formatterAvailable")||"xy"===this.name&&(a.isWebMercator||a.isWGS84)||"basemap"===this.name?"client":"server"};k.getDisplayCoordinate=function(a){if(!a)return null;if(!this.coordinateSegments||!this.currentPattern)return a;let b=this.currentPattern;a=this._getSegmentMatches(a,!1);for(let c=this.coordinateSegments.length-
1;0<=c;c--)b=b.replace(this.coordinateSegments[c].alias,a[c]);return b};k.parseUserInput=function(a){let b=this.defaultPattern.replace(this._additionalCharactersPattern,"");a=a.replace(this._additionalCharactersPattern,"");a=this._getSegmentMatches(a,!0);for(let c=this.coordinateSegments.length-1;0<=c;c--)b=b.replace(this.coordinateSegments[c].alias,a[c]);return b};k._getSegmentMatches=function(a,b){const c=[];for(let r=0;r<this.coordinateSegments.length;r++){var d=this.coordinateSegments[r],l=a.match(d.searchPattern);
l?(l=l[0],a=a.replace(l,"").trim(),d.substitution&&(d=b?d.substitution.input(l):d.substitution.output(l))&&(l=`${d}`),c.push(l)):c.push("")}return c};k.reverseConvert=function(a){const b=this.parseUserInput(a),c=this.get("conversionInfo.reverseConvert");let d;if(c)d=c(b);else if("xy"===this.name||"basemap"===this.name)d=m.fromXY(b,this.spatialReference);else if(this.viewModel.formatterAvailable)switch(this.name){case "dd":case "ddm":case "dms":d=h.fromLatitudeLongitude(b,this.spatialReference);break;
case "mgrs":d=h.fromMgrs(b,this.spatialReference,"automatic");break;case "utm":d=h.fromUtm(b,this.spatialReference,"latitude-band-indicators");break;case "usng":d=h.fromUsng(b,this.spatialReference);break;default:d=null}return d?this._project(d,this._viewSpatialReference):Promise.reject(new p("format:invalid-input","Could not parse input into point.",{userInput:a}))};k._getCoordinate=function(a){var b=this.get("viewModel.view.scale");if(!m.isValidPoint(a))return Promise.reject(new p("format:invalid-point",
"Could not transform invalid point into coordinate.",{point:a}));if(this.get("viewModel.formatterAvailable")||"basemap"===this.name||"xy"===this.name)switch(this.name){case "dd":case "ddm":case "dms":return b=m.getDegreePrecision(b),Promise.resolve(h.toLatitudeLongitude(a,this.name,b));case "mgrs":return Promise.resolve(h.toMgrs(a,"automatic",5,!1));case "usng":return Promise.resolve(h.toUsng(a,5,!1));case "utm":return Promise.resolve(h.toUtm(a,"latitude-band-indicators",!0))}return Promise.resolve(m.pointToCoordinate(a,
b))};k._project=function(a,b){return z.equals(a.spatialReference,b)||!b?Promise.resolve(a):this.viewModel?.formatterAvailable&&u.isLoaded()?Promise.resolve(u.project(a,b)):!this.viewModel?.formatterAvailable&&(a=A.project(a,b),x.isSome(a))?Promise.resolve(a):null};t._createClass(n,[{key:"currentPattern",get:function(){return this._get("currentPattern")||this._get("defaultPattern")},set:function(a){this._set("currentPattern",a)}},{key:"label",get:function(){return this.name??""},set:function(a){this._overrideIfSome("label",
a)}},{key:"hasDisplayProperties",get:function(){return!(!this.defaultPattern||!this.coordinateSegments)}},{key:"spatialReference",get:function(){return"basemap"===this.name?this._viewSpatialReference:this.conversionInfo?.spatialReference??q.WGS84},set:function(a){this._overrideIfSome("spatialReference",a)}},{key:"_viewSpatialReference",get:function(){return this.get("viewModel.view.spatialReference")||q.WGS84}},{key:"_additionalCharactersPattern",get:function(){var a=this.get("coordinateSegments");
if(!a)return null;a=a.map(b=>b.alias);a=this.currentPattern.replace(new RegExp(`["nsew${a.join()}]`,"gi"),"").replace(/ /g,"");return new RegExp(`[${a}]`,"g")}},{key:"test",get:function(){return{additionalCharactersPattern:this._additionalCharactersPattern}}}]);return n}(w);f.__decorate([g.property()],e.prototype,"conversionInfo",void 0);f.__decorate([g.property()],e.prototype,"coordinateSegments",void 0);f.__decorate([g.property()],e.prototype,"currentPattern",null);f.__decorate([g.property()],e.prototype,
"label",null);f.__decorate([g.property()],e.prototype,"defaultPattern",void 0);f.__decorate([g.property({readOnly:!0})],e.prototype,"hasDisplayProperties",null);f.__decorate([g.property()],e.prototype,"name",void 0);f.__decorate([g.property({type:q})],e.prototype,"spatialReference",null);f.__decorate([g.property()],e.prototype,"viewModel",void 0);f.__decorate([g.property({readOnly:!0})],e.prototype,"_viewSpatialReference",null);f.__decorate([g.property({readOnly:!0})],e.prototype,"_additionalCharactersPattern",
null);return e=f.__decorate([y.subclass("esri.widgets.CoordinateConversion.support.Format")],e)});