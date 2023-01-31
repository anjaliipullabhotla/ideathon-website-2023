// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../config ../geometry ../Graphic ../PopupTemplate ../renderers/ClassBreaksRenderer ../renderers/DictionaryRenderer ../renderers/DotDensityRenderer ../renderers/HeatmapRenderer ../renderers/PieChartRenderer ../renderers/Renderer ../renderers/SimpleRenderer ../renderers/UniqueValueRenderer ../renderers/support/jsonUtils ../core/Collection ../core/Error ../core/HandleOwner ../core/Logger ../core/maybe ../core/MultiOriginJSONSupport ../core/object ../core/promiseUtils ../core/reactiveUtils ../core/unitUtils ../core/urlUtils ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ../core/accessorSupport/originUtils ../geometry/Extent ../geometry/projection ../geometry/support/spatialReferenceUtils ./Layer ./mixins/BlendLayer ./mixins/OperationalLayer ./mixins/PortalLayer ./mixins/ScaleRangeLayer ./support/arcgisLayerUrl ./support/RouteSymbols ../portal/Portal ../portal/PortalItem ../portal/support/portalItemUtils ../rest/networkService ../rest/route ../rest/support/DirectionLine ../rest/support/DirectionPoint ../rest/support/networkEnums ../rest/support/PointBarrier ../rest/support/PolygonBarrier ../rest/support/PolylineBarrier ../rest/support/RouteInfo ../rest/support/RouteParameters ../rest/support/RouteSettings ../rest/support/Stop ../geometry/SpatialReference ../geometry/Multipoint".split(" "),
function(C,m,T,k,ia,ja,Na,Oa,Pa,Qa,Ra,Sa,Ta,Ua,ka,y,A,la,ma,e,na,oa,pa,qa,ra,sa,u,Va,Wa,B,ta,ua,va,wa,U,V,xa,ya,za,Aa,Ba,Ca,W,Da,Ea,Fa,Ga,Ha,J,K,X,F,G,H,L,Y,Ia,I,D,Ja){function M(t){return t.length?t:null}function Z(t){const {defaultTravelMode:n,supportedTravelModes:h}=t;return h?.find(({id:b})=>b===n)}function N(t){switch(t){case "esriGeometryPoint":return{type:"esriSMS",style:"esriSMSCircle",size:12,color:[0,0,0,0],outline:N("esriGeometryPolyline")};case "esriGeometryPolyline":return{type:"esriSLS",
style:"esriSLSSolid",width:1,color:[0,0,0,0]};case "esriGeometryPolygon":return{type:"esriSFS",style:"esriSFSNull",outline:N("esriGeometryPolyline")}}}function Ka(t,n,h){const b=n.networkDataset?.networkAttributes?.filter(f=>"cost"===f.usageType)??[];var a=Z(n);a=h.travelMode??a;if(e.isNone(a))aa.warn("route-layer:missing-travel-mode","The routing service must have a default travel mode or one must be specified in the route parameter.");else{var {timeAttributeName:c,distanceAttributeName:d}=a,l=b.find(f=>
f.name===c),r=b.find(f=>f.name===d),v=e.unwrap(h.travelMode)?.impedanceAttributeName??e.unwrap(h.impedanceAttribute)??n.impedance;l=X.directionsTimeUnitJsonMap.fromJSON(l?.units);r=X.directionsLengthUnitJsonMap.fromJSON(r?.units);if(!l||!r)throw new A("routelayer:unknown-impedance-units","the units of either the distance or time impedance are unknown");var g=h.directionsLanguage??n.directionsLanguage,z=e.unwrap(h.accumulateAttributes)??n.accumulateAttributeNames??[],p=new Set(b.filter(({name:f})=>
f===c||f===d||f===v||null!=f&&z.includes(f)).map(({name:f})=>f));n=f=>{for(const ba in f)p.has(ba)||delete f[ba]};for(var q of t.pointBarriers)e.isSome(q.costs)&&(q.addedCost=q.costs[v]??0,n(q.costs));for(const f of t.polygonBarriers)e.isSome(f.costs)&&(f.scaleFactor=f.costs[v]??1,n(f.costs));for(const f of t.polylineBarriers)e.isSome(f.costs)&&(f.scaleFactor=f.costs[v]??1,n(f.costs));({routeInfo:q}=t);var {findBestSequence:w,preserveFirstStop:x,preserveLastStop:O,startTimeIsUTC:P,timeWindowsAreUTC:Q}=
h;q.analysisSettings=new Ia({accumulateAttributes:z,directionsLanguage:g,findBestSequence:w,preserveFirstStop:x,preserveLastStop:O,startTimeIsUTC:P,timeWindowsAreUTC:Q,travelMode:a});q.totalDuration=E(q.totalCosts[c]??0,l);q.totalDistance=R(q.totalCosts[d]??0,r);q.totalLateDuration=E(q.totalViolations[c]??0,l);q.totalWaitDuration=E(q.totalWait[c]??0,l);e.isSome(q.totalCosts)&&n(q.totalCosts);e.isSome(q.totalViolations)&&n(q.totalViolations);e.isSome(q.totalWait)&&n(q.totalWait);for(const f of t.stops)e.isSome(f.serviceCosts)&&
(f.serviceDuration=E(f.serviceCosts[c]??0,l),f.serviceDistance=R(f.serviceCosts[d]??0,r),n(f.serviceCosts)),e.isSome(f.cumulativeCosts)&&(f.cumulativeDuration=E(f.cumulativeCosts[c]??0,l),f.cumulativeDistance=R(f.cumulativeCosts[d]??0,r),n(f.cumulativeCosts)),e.isSome(f.violations)&&(f.lateDuration=E(f.violations[c]??0,l),n(f.violations)),e.isSome(f.wait)&&(f.waitDuration=E(f.wait[c]??0,l),n(f.wait))}}function ca(t){return S.apply(this,arguments)}function S(){S=C._asyncToGenerator(function*(t){const n=
D.WGS84;yield U.initializeProjection(t.spatialReference,n);return U.project(t,n)});return S.apply(this,arguments)}function E(t,n){switch(n){case "seconds":return t/60;case "hours":return 60*t;case "days":return 1440*t;default:return t}}function R(t,n){return"decimal-degrees"===n||"points"===n||"unknown"===n?t:ra.convertUnit(t,n,"meters")}const La=y.ofType(J),Ma=y.ofType(K),da=y.ofType(F),ea=y.ofType(G),fa=y.ofType(H),ha=y.ofType(I),aa=ma.getLogger("esri.layers.RouteLayer");k=function(t){function n(b){var a=
t.call(this,b)||this;a._cachedServiceDescription=null;a._featureCollection=null;a._type="Feature Collection";a.defaultSymbols=new W;a.directionLines=null;a.directionPoints=null;a.featureCollectionType="route";a.legendEnabled=!1;a.maxScale=0;a.minScale=0;a.pointBarriers=new da;a.polygonBarriers=new ea;a.polylineBarriers=new fa;a.routeInfo=null;a.spatialReference=D.WGS84;a.stops=new ha;a.type="route";b=()=>{a._setStopSymbol(a.stops)};a.addHandles(qa.on(()=>a.stops,"change",b,{sync:!0,onListenerAdd:b}));
return a}C._inheritsLoose(n,t);var h=n.prototype;h.writeFeatureCollectionWebmap=function(b,a,c,d){b=[this._writePolygonBarriers(),this._writePolylineBarriers(),this._writePointBarriers(),this._writeRouteInfo(),this._writeDirectionLines(),this._writeDirectionPoints(),this._writeStops()].filter(l=>!!l);c=b.map((l,r)=>r);oa.setDeepValue("web-map"===d.origin?"featureCollection.layers":"layers",b,a);a.opacity=this.opacity;a.visibility=this.visible;a.visibleLayers=c};h.readDirectionLines=function(b,a){return this._getNetworkFeatures(a,
"DirectionLines",c=>J.fromGraphic(c))};h.readDirectionPoints=function(b,a){return this._getNetworkFeatures(a,"DirectionPoints",c=>K.fromGraphic(c))};h.readMaxScale=function(b,a){return("layers"in a?a.layers:a.featureCollection.layers).find(c=>e.isSome(c.layerDefinition.maxScale))?.layerDefinition.maxScale??0};h.readMinScale=function(b,a){return("layers"in a?a.layers:a.featureCollection.layers).find(c=>e.isSome(c.layerDefinition.minScale))?.layerDefinition.minScale??0};h.readPointBarriers=function(b,
a){return this._getNetworkFeatures(a,"Barriers",c=>F.fromGraphic(c))};h.readPolygonBarriers=function(b,a){return this._getNetworkFeatures(a,"PolygonBarriers",c=>G.fromGraphic(c))};h.readPolylineBarriers=function(b,a){return this._getNetworkFeatures(a,"PolylineBarriers",c=>H.fromGraphic(c))};h.readRouteInfo=function(b,a){b=this._getNetworkFeatures(a,"RouteInfo",c=>L.fromGraphic(c));return 0<b.length?b.getItemAt(0):null};h.readSpatialReference=function(b,a){b="layers"in a?a.layers:a.featureCollection.layers;
if(!b.length)return D.WGS84;const {layerDefinition:c,featureSet:d}=b[0];b=e.unwrap(d.features[0]?.geometry)?.spatialReference??d.spatialReference??c.spatialReference??c.extent.spatialReference??V.WGS84;return D.fromJSON(b)};h.readStops=function(b,a){return this._getNetworkFeatures(a,"Stops",c=>I.fromGraphic(c),c=>this._setStopSymbol(c))};h.load=function(b){this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},b));return Promise.resolve(this)};h.removeAll=function(){this.removeResult();
this.pointBarriers.removeAll();this.polygonBarriers.removeAll();this.polylineBarriers.removeAll();this.stops.removeAll()};h.removeResult=function(){e.isSome(this.directionLines)&&(this.directionLines.removeAll(),this._set("directionLines",null));e.isSome(this.directionPoints)&&(this.directionPoints.removeAll(),this._set("directionPoints",null));e.isSome(this.routeInfo)&&this._set("routeInfo",null)};h.save=function(){var b=C._asyncToGenerator(function*(){yield this.load();const {fullExtent:a,portalItem:c}=
this;if(!c)throw new A("routelayer:portal-item-not-set","save() requires to the layer to have a portal item");if(!c.id)throw new A("routelayer:portal-item-not-saved","Please use saveAs() first to save the routelayer");if("Feature Collection"!==c.type)throw new A("routelayer:portal-item-wrong-type",'Portal item needs to have type "Feature Collection"');if(e.isNone(this.routeInfo))throw new A("routelayer:route-unsolved","save() requires a solved route");var {portal:d}=c;yield d._signIn();d.user||(yield c.reload());
const {itemUrl:l,itemControl:r}=c;if("admin"!==r&&"update"!==r)throw new A("routelayer:insufficient-permissions","To save this layer, you need to be the owner or an administrator of your organization");const v=l&&sa.urlToObject(l);d=this.write(null,{messages:[],origin:"portal-item",portal:d,url:v,writtenProperties:[]});c.extent=yield ca(a);c.title=this.title;yield c.update({data:d});return c});return function(){return b.apply(this,arguments)}}();h.saveAs=function(){var b=C._asyncToGenerator(function*(a,
c={}){yield this.load();if(e.isNone(this.routeInfo))throw new A("routelayer:route-unsolved","saveAs() requires a solved route");a=Ea.from(a).clone();a.extent??(a.extent=yield ca(this.fullExtent));a.id=null;a.portal??(a.portal=Da.getDefault());a.title??(a.title=this.title);a.type="Feature Collection";a.typeKeywords=["Data","Feature Collection",Fa.TypeKeyword.MULTI_LAYER,"Route Layer"];const {portal:d}=a,l={messages:[],origin:"portal-item",portal:d,url:null,writtenProperties:[]};yield d._signIn();c=
c?.folder;const r=this.write(null,l);yield d.user.addItem({item:a,folder:c,data:r});this.portalItem=a;va.updateOrigins(l);return l.portalItem=a});return function(a){return b.apply(this,arguments)}}();h.solve=function(){var b=C._asyncToGenerator(function*(a,c){var d=a?.stops??this.stops;const l=a?.pointBarriers??M(this.pointBarriers),r=a?.polylineBarriers??M(this.polylineBarriers),v=a?.polygonBarriers??M(this.polygonBarriers);if(e.isNone(d))throw new A("routelayer:undefined-stops","the route layer must have stops defined in the route parameters.");
if(("esri.rest.support.FeatureSet"===d.declaredClass||"esri.rest.support.NetworkFeatureSet"===d.declaredClass)&&2>d.features.length||y.isCollection(d)&&2>d.length)throw new A("routelayer:insufficent-stops","the route layer must have two or more stops to solve a route.");if(y.isCollection(d))for(var g of d)g.routeName=null;const z=this.url;g=yield this._getServiceDescription(z,a?.apiKey,c);var p=Z(g);p=a?.travelMode??p;const q=e.unwrapOrValue(a?.accumulateAttributes,[]);e.isSome(p)&&(q.push(p.distanceAttributeName),
p.timeAttributeName&&q.push(p.timeAttributeName));p={startTime:new Date};d={accumulateAttributes:q,directionsOutputType:"featuresets",ignoreInvalidLocations:!0,pointBarriers:l,polylineBarriers:r,polygonBarriers:v,preserveFirstStop:!0,preserveLastStop:!0,returnBarriers:!!l,returnDirections:!0,returnPolygonBarriers:!!v,returnPolylineBarriers:!!r,returnRoutes:!0,returnStops:!0,stops:d};a=a?Y.from(a):new Y;for(const x in p)null==a[x]&&(a[x]=p[x]);a.set(d);let w;try{w=yield Ha.solve(z,a,c)}catch(x){throw pa.isAbortError(x)?
x:new A("routelayer:failed-route-request","the routing request failed",{error:x});}c=this._toRouteLayerSolution(w);this._isOverridden("title")||(this.title=e.unwrapOrValue(c.routeInfo.name,"Route"));Ka(c,g,a);return c});return function(a,c){return b.apply(this,arguments)}}();h.update=function(b){const {stops:a,directionLines:c,directionPoints:d,pointBarriers:l,polylineBarriers:r,polygonBarriers:v,routeInfo:g}=b;this.set({stops:a,pointBarriers:l,polylineBarriers:r,polygonBarriers:v});this._set("directionLines",
c);this._set("directionPoints",d);this._set("routeInfo",g);e.isSome(g.geometry)&&(this.spatialReference=g.geometry.spatialReference)};h._getNetworkFeatures=function(b,a,c,d){b=("layers"in b?b.layers:b.featureCollection.layers).find(w=>w.layerDefinition.name===a);if(e.isNone(b))return new y;const {layerDefinition:l,popupInfo:r,featureSet:v}=b;b=l.drawingInfo.renderer;const {features:g}=v,z=v.spatialReference??l.spatialReference??l.extent.spatialReference??V.WGS84,p=b&&ka.read(b),q=D.fromJSON(z);b=
g.map(w=>{const x=ia.fromJSON(w);e.isSome(x.geometry)&&e.isSome(w.geometry)&&e.isNone(w.geometry.spatialReference)&&(x.geometry.spatialReference=q);w=c(x);w.symbol??(w.symbol=p?.getSymbol(x)??this._getNetworkSymbol(a));w.popupTemplate??(w.popupTemplate=r&&ja.fromJSON(r));return w});d&&b.some(w=>!w.symbol)&&d(b);return new y(b)};h._getNetworkSymbol=function(b){switch(b){case "Barriers":return this.defaultSymbols.pointBarriers;case "DirectionPoints":return this.defaultSymbols.directionPoints;case "DirectionLines":return this.defaultSymbols.directionLines;
case "PolylineBarriers":return this.defaultSymbols.polylineBarriers;case "PolygonBarriers":return this.defaultSymbols.polygonBarriers;case "RouteInfo":return this.defaultSymbols.routeInfo;case "Stops":return null}};h._getServiceDescription=function(){var b=C._asyncToGenerator(function*(a,c,d){if(e.isSome(this._cachedServiceDescription)&&this._cachedServiceDescription.url===a)return this._cachedServiceDescription.serviceDescription;c=yield Ga.fetchServiceDescription(a,c,d);this._cachedServiceDescription=
{serviceDescription:c,url:a};return c});return function(a,c,d){return b.apply(this,arguments)}}();h._setStopSymbol=function(b){if(b&&0!==b.length&&!e.isNone(this.defaultSymbols.stops)&&!b.every(p=>e.isSome(p.symbol))){var {first:a,last:c,middle:d,unlocated:l,waypoint:r,break:v}=this.defaultSymbols.stops;if(e.isNone(this.routeInfo)||1===b.length)b.forEach((p,q)=>{switch(q){case 0:p.symbol=a;break;case b.length-1:p.symbol=c;break;default:p.symbol=d}});else{var g=b.map(p=>p.sequence).filter(p=>e.isSome(p)),
z=Math.min(...g);g=Math.max(...g);for(const p of b)p.symbol=p.sequence===z?a:p.sequence===g?c:"ok"!==p.status&&"not-located-on-closest"!==p.status?l:"waypoint"===p.locationType?r:"break"===p.locationType?v:d}}};h._toRouteLayerSolution=function(b){var a=b.routeResults[0].stops.map(g=>I.fromJSON(g.toJSON()));this._setStopSymbol(a);a=new ha(a);const c=new ea(b.polygonBarriers?.map(g=>{g=G.fromJSON(g.toJSON());g.symbol=this.defaultSymbols.polygonBarriers;return g})),d=new fa(b.polylineBarriers?.map(g=>
{g=H.fromJSON(g.toJSON());g.symbol=this.defaultSymbols.polylineBarriers;return g})),l=new da(b.pointBarriers?.map(g=>{g=F.fromJSON(g.toJSON());g.symbol=this.defaultSymbols.pointBarriers;return g})),r=L.fromJSON(b.routeResults[0].route.toJSON());r.symbol=this.defaultSymbols.routeInfo;const v=new Ma(b.routeResults[0].directionPoints?.features.map(g=>{g=K.fromJSON(g.toJSON());g.symbol=this.defaultSymbols.directionPoints;return g}));return{directionLines:new La(b.routeResults[0].directionLines?.features.map(g=>
{g=J.fromJSON(g.toJSON());g.symbol=this.defaultSymbols.directionLines;return g})),directionPoints:v,pointBarriers:l,polygonBarriers:c,polylineBarriers:d,routeInfo:r,stops:a}};h._writeDirectionLines=function(){return this._writeNetworkFeatures(this.directionLines,this.defaultSymbols.directionLines,"esriGeometryPolyline",J.fields,J.popupInfo,"DirectionLines","Direction Lines")};h._writeDirectionPoints=function(){return this._writeNetworkFeatures(this.directionPoints,this.defaultSymbols.directionPoints,
"esriGeometryPoint",K.fields,K.popupInfo,"DirectionPoints","Direction Points")};h._writeNetworkFeatures=function(b,a,c,d,l,r,v){if(e.isNone(b)||!b.length)return null;const g=this.spatialReference.toJSON(),{fullExtent:z,maxScale:p,minScale:q}=this;return{featureSet:{features:b.toArray().map(w=>{const {attributes:x,geometry:O,popupTemplate:P,symbol:Q}=w.toGraphic().toJSON();return{attributes:x,geometry:O,popupInfo:P,symbol:Q}}),geometryType:c,spatialReference:g},layerDefinition:{capabilities:"Query,Update,Editing",
drawingInfo:{renderer:{type:"simple",symbol:e.isSome(a)?a.toJSON():N(c)}},extent:z.toJSON(),fields:d,geometryType:c,hasM:!1,hasZ:!1,maxScale:p,minScale:q,name:r,objectIdField:"ObjectID",spatialReference:g,title:v,type:"Feature Layer",typeIdField:""},popupInfo:l}};h._writePointBarriers=function(){return this._writeNetworkFeatures(this.pointBarriers,this.defaultSymbols.pointBarriers,"esriGeometryPoint",F.fields,F.popupInfo,"Barriers","Point Barriers")};h._writePolygonBarriers=function(){return this._writeNetworkFeatures(this.polygonBarriers,
this.defaultSymbols.polygonBarriers,"esriGeometryPolygon",G.fields,G.popupInfo,"PolygonBarriers","Polygon Barriers")};h._writePolylineBarriers=function(){return this._writeNetworkFeatures(this.polylineBarriers,this.defaultSymbols.polylineBarriers,"esriGeometryPolyline",H.fields,H.popupInfo,"PolylineBarriers","Line Barriers")};h._writeRouteInfo=function(){return this._writeNetworkFeatures(e.isSome(this.routeInfo)?new y([this.routeInfo]):null,this.defaultSymbols.routeInfo,"esriGeometryPolyline",L.fields,
L.popupInfo,"RouteInfo","Route Details")};h._writeStops=function(){const b=this._writeNetworkFeatures(this.stops,null,"esriGeometryPoint",I.fields,I.popupInfo,"Stops","Stops");if(e.isNone(b))return null;var {stops:a}=this.defaultSymbols;const c=e.isSome(a)&&e.isSome(a.first)&&a.first.toJSON(),d=e.isSome(a)&&e.isSome(a.middle)&&a.middle.toJSON();a=e.isSome(a)&&e.isSome(a.last)&&a.last.toJSON();b.layerDefinition.drawingInfo.renderer={type:"uniqueValue",field1:"Sequence",defaultSymbol:d,uniqueValueInfos:[{value:"1",
symbol:c,label:"First Stop"},{value:`${this.stops.length}`,symbol:a,label:"Last Stop"}]};return b};C._createClass(n,[{key:"fullExtent",get:function(){var b=new wa({xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:D.WGS84});if(e.isSome(this.routeInfo)&&e.isSome(this.routeInfo.geometry))return this.routeInfo.geometry.extent??b;if(e.isNone(this.stops))return b;const a=this.stops.filter(d=>e.isSome(d.geometry));if(2>a.length)return b;const {spatialReference:c}=a.getItemAt(0).geometry;if(e.isNone(c))return b;
b=a.toArray().map(d=>{d=d.geometry;return[d.x,d.y]});return(new Ja({points:b,spatialReference:c})).extent}},{key:"title",get:function(){return e.isSome(this.routeInfo)&&e.isSome(this.routeInfo.name)?this.routeInfo.name:"Route"},set:function(b){this._overrideIfSome("title",b)}},{key:"url",get:function(){return T.routeServiceUrl},set:function(b){null==b?this._set("url",T.routeServiceUrl):this._set("url",Ca.sanitizeUrl(b,aa))}}]);return n}(ya.BlendLayer(Ba.ScaleRangeLayer(za.OperationalLayer(Aa.PortalLayer(na.MultiOriginJSONMixin(la.HandleOwnerMixin(xa)))))));
m.__decorate([u.property({readOnly:!0,json:{read:!1,origins:{"portal-item":{write:{allowNull:!0,ignoreOrigin:!0}},"web-map":{write:{overridePolicy(){return{allowNull:!0,ignoreOrigin:null==this.portalItem}}}}}}})],k.prototype,"_featureCollection",void 0);m.__decorate([ua.writer(["web-map","portal-item"],"_featureCollection")],k.prototype,"writeFeatureCollectionWebmap",null);m.__decorate([u.property({readOnly:!0,json:{read:!1,origins:{"web-map":{write:{target:"type",overridePolicy(){return{ignoreOrigin:null!=
this.portalItem}}}}}}})],k.prototype,"_type",void 0);m.__decorate([u.property({nonNullable:!0,type:W})],k.prototype,"defaultSymbols",void 0);m.__decorate([u.property({readOnly:!0})],k.prototype,"directionLines",void 0);m.__decorate([B.reader(["web-map","portal-item"],"directionLines",["layers","featureCollection.layers"])],k.prototype,"readDirectionLines",null);m.__decorate([u.property({readOnly:!0})],k.prototype,"directionPoints",void 0);m.__decorate([B.reader(["web-map","portal-item"],"directionPoints",
["layers","featureCollection.layers"])],k.prototype,"readDirectionPoints",null);m.__decorate([u.property({readOnly:!0,json:{read:!1,origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],k.prototype,"featureCollectionType",void 0);m.__decorate([u.property({readOnly:!0})],k.prototype,"fullExtent",null);m.__decorate([u.property({json:{origins:{"web-map":{name:"featureCollection.showLegend"}},write:!0}})],k.prototype,"legendEnabled",void 0);m.__decorate([u.property({type:["show","hide"]})],k.prototype,"listMode",
void 0);m.__decorate([u.property({type:Number,nonNullable:!0,json:{write:!1}})],k.prototype,"maxScale",void 0);m.__decorate([B.reader(["web-map","portal-item"],"maxScale",["layers","featureCollection.layers"])],k.prototype,"readMaxScale",null);m.__decorate([u.property({type:Number,nonNullable:!0,json:{write:!1}})],k.prototype,"minScale",void 0);m.__decorate([B.reader(["web-map","portal-item"],"minScale",["layers","featureCollection.layers"])],k.prototype,"readMinScale",null);m.__decorate([u.property({type:["ArcGISFeatureLayer"],
value:"ArcGISFeatureLayer"})],k.prototype,"operationalLayerType",void 0);m.__decorate([u.property({nonNullable:!0,type:y.ofType(F)})],k.prototype,"pointBarriers",void 0);m.__decorate([B.reader(["web-map","portal-item"],"pointBarriers",["layers","featureCollection.layers"])],k.prototype,"readPointBarriers",null);m.__decorate([u.property({nonNullable:!0,type:y.ofType(G)})],k.prototype,"polygonBarriers",void 0);m.__decorate([B.reader(["web-map","portal-item"],"polygonBarriers",["layers","featureCollection.layers"])],
k.prototype,"readPolygonBarriers",null);m.__decorate([u.property({nonNullable:!0,type:y.ofType(H)})],k.prototype,"polylineBarriers",void 0);m.__decorate([B.reader(["web-map","portal-item"],"polylineBarriers",["layers","featureCollection.layers"])],k.prototype,"readPolylineBarriers",null);m.__decorate([u.property({readOnly:!0})],k.prototype,"routeInfo",void 0);m.__decorate([B.reader(["web-map","portal-item"],"routeInfo",["layers","featureCollection.layers"])],k.prototype,"readRouteInfo",null);m.__decorate([u.property({type:D})],
k.prototype,"spatialReference",void 0);m.__decorate([B.reader(["web-map","portal-item"],"spatialReference",["layers","featureCollection.layers"])],k.prototype,"readSpatialReference",null);m.__decorate([u.property({nonNullable:!0,type:y.ofType(I)})],k.prototype,"stops",void 0);m.__decorate([B.reader(["web-map","portal-item"],"stops",["layers","featureCollection.layers"])],k.prototype,"readStops",null);m.__decorate([u.property()],k.prototype,"title",null);m.__decorate([u.property({readOnly:!0,json:{read:!1}})],
k.prototype,"type",void 0);m.__decorate([u.property()],k.prototype,"url",null);return k=m.__decorate([ta.subclass("esri.layers.RouteLayer")],k)});