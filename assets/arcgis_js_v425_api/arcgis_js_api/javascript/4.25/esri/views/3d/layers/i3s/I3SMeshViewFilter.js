// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../geometry ../../../../core/Accessor ../../../../core/arrayUtils ../../../../core/Logger ../../../../core/mathUtils ../../../../core/maybe ../../../../core/maybeUpdating ../../../../core/reactiveUtils ../../../../core/unitUtils ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../../chunks/vec3 ../../../../core/sql/WhereClause ../../../../geometry/projection ../../../../geometry/support/aaBoundingBox ../../../../geometry/support/aaBoundingRect ../../../../geometry/support/Ellipsoid ../../../../geometry/support/spatialReferenceUtils ../../../../geometry/support/webMercatorUtils ../../../../layers/support/FeatureFilter ./I3SUtil ../../../../geometry/SpatialReference".split(" "),
function(aa,t,N,u,ra,ba,O,ca,da,h,x,ea,fa,v,sa,ha,w,ia,y,ja,G,ka,P,Q,la,R,S){function F(f,c,e){if(h.isNone(c))return null;if("disjoint"===e&&"polygon"===c.type){e=c.rings.length;const a=c.spatialReference,b=Array(e);for(let d=0;d<e;++d){const g=G.fromValues(Infinity,Infinity,-Infinity,-Infinity);G.expandWithNestedArray(g,c.rings[d]);b[d]={type:"polygon",rings:[c.rings[d]],spatialReference:a,cache:{},aabr:g}}b.sort((d,g)=>d.aabr[0]-g.aabr[0]);const p=new Set,k=new O.PositionHint;for(c=0;c<b.length;++c){const d=
b[c],g=d.aabr[0];p.forEach(l=>{g>=l.aabr[2]?p.delete(l):d.aabr[1]>l.aabr[3]||d.aabr[3]<l.aabr[1]||!f.intersects(d,l)||(d.rings=d.rings.concat(l.rings),G.expand(d.aabr,l.aabr,d.aabr),d.cache={},p.delete(l),l=O.indexOf(b,l,b.length,k),b.splice(l,1))});p.add(d)}for(const d of b)delete d.aabr;return b}return[c]}function T(f,c,e,a,b){const p=U(f,c,a);return e.every(k=>V(f,k,p,b)!==q.DISCARD)}function W(f,c,e,a,b,p,k,d){const g=k[0].spatialReference||b.spatialReference;if(y.projectBoundingSphere(e.node.mbs,
p,D,g)){p=U(f,D,g);var l=ma(d,b,g,a,e.objectHandle);for(const m of k){if(0===c.length)break;switch(V(f,m,p,d)){case q.DISCARD:c.length=0;return;case q.KEEP:continue}R.filterInPlace(c,e.featureIds,n=>na(f,m,n,l))}}else C.warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter")}function ma(f,c,e,a,b){c=c.renderSpatialReference;const p=new Map,k={type:"polygon",rings:[[[0,0,0],[0,0,0],[0,0,0],[0,0,0]]],spatialReference:e};k.rings[0][3]=k.rings[0][0];
let d,g;switch(f){case "intersects":d=(l,m,n)=>l.intersects(m,n)?q.KEEP:q.TEST;g=H;break;case "contains":d=(l,m,n)=>l.contains(m,n)?q.TEST:q.DISCARD;g=H;break;default:d=(l,m,n)=>l.disjoint(m,n)?q.TEST:q.DISCARD,g=X}return{collection:a,object:b,type:f,maskSR:e,renderSR:c,aabbCache:p,triangle:k,positions:{indices:null,data:null,stride:0,startIndex:0,endIndex:0},triangleTest:d,geometryTest:g}}function U(f,c,e){const a={type:"point",x:c[0],y:c[1],hasZ:!1,hasM:!1,spatialReference:e};e=!P.isWGS84(e)&&!P.isWebMercator(e);
c=Number.isNaN(c[3])?0:da.clamp(c[3],0,2*ka.earth.radius);f=e?f.buffer(a,c,1):f.geodesicBuffer(a,c,1);f.type="polygon";return f}function V(f,c,e,a){switch(a){case "intersects":case "contains":return H(f,c,e);case "disjoint":return X(f,c,e)}}function H(f,c,e){return f.intersects(c,e)?f.contains(c,e)?q.KEEP:q.TEST:q.DISCARD}function X(f,c,e){return f.intersects(c,e)?f.contains(c,e)?q.DISCARD:q.TEST:q.KEEP}function na(f,c,e,a){const {collection:b,object:p,renderSR:k,maskSR:d,geometryTest:g,aabbCache:l}=
a;var m=l.get(e);if(!m){m=b.getObjectTransform(p);b.getComponentAabb(p,e,z);var n=[[z[0],z[1],0],[z[0],z[4],0],[z[3],z[4],0],[z[3],z[1],0]];for(var r=0;4>r;++r)w.transformMat3(n[r],n[r],m.rotationScale),w.add(n[r],n[r],m.position),y.projectVectorToVector(n[r],k,n[r],d);m={type:"polygon",rings:[n],spatialReference:d,cache:{}};m.rings[0][4]=m.rings[0][0];l.set(e,m)}switch(g(f,c,m)){case q.DISCARD:return!1;case q.KEEP:return!0}const {triangle:B,triangleTest:oa,positions:Y}=a;m=B.rings[0][0];n=B.rings[0][1];
r=B.rings[0][2];const E=b.getObjectTransform(p);b.getComponentPositions(p,e,Y);const {indices:I,data:A,stride:J,startIndex:pa,endIndex:qa}=Y;for(e=pa;e<qa;e+=3){const K=J*I[e+0],L=J*I[e+1],M=J*I[e+2];w.set(m,A[K+0],A[K+1],A[K+2]);w.set(n,A[L+0],A[L+1],A[L+2]);w.set(r,A[M+0],A[M+1],A[M+2]);w.transformMat3(m,m,E.rotationScale);w.transformMat3(n,n,E.rotationScale);w.transformMat3(r,r,E.rotationScale);w.add(m,m,E.position);w.add(n,n,E.position);w.add(r,r,E.position);y.projectVectorToVector(m,k,m,d);y.projectVectorToVector(n,
k,n,d);y.projectVectorToVector(r,k,r,d);switch(oa(f,c,B)){case q.DISCARD:return!1;case q.KEEP:return!0}}switch(a.type){case "intersects":return!1;default:return!0}}const C=ca.getLogger("esri.views.3d.layers.i3s.I3SMeshViewFilter");t.I3SMeshViewFilter=function(f){function c(a){a=f.call(this,a)||this;a._projectionEngineLoaded=!1;return a}N._inheritsLoose(c,f);var e=c.prototype;e.initialize=function(){ea.whenOnce(()=>h.unwrap(this.viewFilter)?.geometry||h.isSome(this.layerFilter)).then(()=>this.loadAsyncModule((new Promise((a,
b)=>aa(["../../../../geometry/geometryEngine"],a,b))).then(a=>{this.destroyed||(this._geometryEngine=a)})))};e.addFilters=function(a,b,p,k){const d=this.sortedObjectIds;h.isSome(d)&&a.push(n=>R.objectIdFilter(d,!0,n));this.addSqlFilter(a,this.parsedWhereClause);const g=x.unwrapUpdating(this._layerMaskGeometries),l=this._geometryEngine;if(h.isSome(g)&&h.isSome(this.layerFilter)&&h.isSome(l)){const n=this.layerFilter.spatialRelationship;a.push((r,B)=>W(l,r,B,k,b,p,g,n))}const m=x.unwrapUpdating(this._viewMaskGeometries);
if(h.isSome(m)&&h.isSome(this.viewFilter)&&h.isSome(l)){const n=this.viewFilter.spatialRelationship;a.push((r,B)=>W(l,r,B,k,b,p,m,n))}};e.isMBSGeometryVisible=function(a,b,p){var k=x.unwrapUpdating(this._layerMaskGeometries);const d=this._geometryEngine;if(h.isSome(k)&&h.isSome(this.layerFilter)&&h.isSome(d)){var g=this.layerFilter.spatialRelationship;b=k[0].spatialReference||b;return y.projectBoundingSphere(a,p,D,b)?T(d,D,k,b,g):(C.warnOnce("SceneLayer.mask geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),
!0)}k=x.unwrapUpdating(this._viewMaskGeometries);return h.isSome(k)&&h.isSome(this.viewFilter)&&h.isSome(d)?(g=this.viewFilter.spatialRelationship,b=k[0].spatialReference||b,y.projectBoundingSphere(a,p,D,b)?T(d,D,k,b,g):(C.warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0)):!0};c.checkSupport=function(a){if(h.isNone(a))return!1;if(a.timeExtent)return C.warn("Filters with a timeExtent are not supported for mesh scene layers"),!1;a=
a.spatialRelationship;return null!=a&&Z.includes(a)?!0:(C.warn(`Filters with spatialRelationship other than ${Z.join(", ")} are not supported for mesh scene layers`),!1)};N._createClass(c,[{key:"sortedObjectIds",get:function(){if(h.isNone(this.viewFilter)||h.isNone(this.viewFilter.objectIds))return null;const a=new Float64Array(this.viewFilter.objectIds);a.sort();return a}},{key:"parsedWhereClause",get:function(){const a=h.isSome(this.viewFilter)?this.viewFilter.where:null;if(h.isNone(a)||!a)return null;
try{return ia.WhereClause.create(a,this.layerFieldsIndex)}catch(b){C.error(`Failed to parse filter where clause: ${b}`)}return null}},{key:"parsedGeometry",get:function(){const a=x.unwrapUpdating(this._viewMaskGeometries),b=x.unwrapUpdating(this._layerMaskGeometries);return h.isNone(a)||h.isNone(b)?a||b:b.concat(a)}},{key:"_layerMaskGeometries",get:function(){const a=this.layerFilter;return h.isNone(a)?null:h.isNone(this._geometryEngine)?x.updating:"disjoint"===a.spatialRelationship?a.geometries.map(b=>
({type:"polygon",rings:b.rings,spatialReference:b.spatialReference,cache:{}})):[a.geometries.reduce((b,p)=>{b.rings=b.rings.concat(p.rings);return b},{type:"polygon",rings:[],spatialReference:a.geometries[0].spatialReference,cache:{}})]}},{key:"_viewMaskGeometries",get:function(){if(h.isNone(this.viewFilter))return null;var {geometry:a}=this.viewFilter;if(h.isNone(a))return null;if(h.isNone(this.viewFilter)||h.isNone(this._geometryEngine))return x.updating;const {distance:b,units:p}=this.viewFilter,
k=this.viewFilter.spatialRelationship;a="mesh"===a.type?a.extent:a;if(h.isNone(b)||0===b)return F(this._geometryEngine,a,k);const d=p||fa.getUnitString(a.spatialReference);if(a.spatialReference.isWGS84)return a=this._geometryEngine.geodesicBuffer(a,b,d),F(this._geometryEngine,a,k);var g=Q.project(a,S.WGS84);if(h.isSome(g))return a=Q.project(this._geometryEngine.geodesicBuffer(g,b,d),a.spatialReference),F(this._geometryEngine,a,k);if(!this._projectionEngineLoaded&&(this.loadAsyncModule(y.load().then(()=>
this._projectionEngineLoaded=!0)),!this._projectionEngineLoaded))return null;g=null;try{g=y.project(a,S.WGS84)}catch(l){}if(g)try{g=y.project(this._geometryEngine.geodesicBuffer(g,b,d),a.spatialReference)}catch(l){g=null}g||C.error(`Filter by geodesic buffer (distance) unsupported, failed to project input geometry (${a.spatialReference.wkid}) to WGS84.`);return F(this._geometryEngine,g,k)}},{key:"updating",get:function(){return x.isUpdating(this._layerMaskGeometries)||x.isUpdating(this._viewMaskGeometries)}}]);
return c}(ba);u.__decorate([v.property()],t.I3SMeshViewFilter.prototype,"layerFilter",void 0);u.__decorate([v.property({type:la})],t.I3SMeshViewFilter.prototype,"viewFilter",void 0);u.__decorate([v.property()],t.I3SMeshViewFilter.prototype,"layerFieldsIndex",void 0);u.__decorate([v.property()],t.I3SMeshViewFilter.prototype,"loadAsyncModule",void 0);u.__decorate([v.property()],t.I3SMeshViewFilter.prototype,"addSqlFilter",void 0);u.__decorate([v.property({readOnly:!0})],t.I3SMeshViewFilter.prototype,
"sortedObjectIds",null);u.__decorate([v.property({readOnly:!0})],t.I3SMeshViewFilter.prototype,"parsedWhereClause",null);u.__decorate([v.property({readOnly:!0})],t.I3SMeshViewFilter.prototype,"parsedGeometry",null);u.__decorate([v.property({readOnly:!0})],t.I3SMeshViewFilter.prototype,"_layerMaskGeometries",null);u.__decorate([v.property({readOnly:!0})],t.I3SMeshViewFilter.prototype,"_viewMaskGeometries",null);u.__decorate([v.property()],t.I3SMeshViewFilter.prototype,"updating",null);u.__decorate([v.property()],
t.I3SMeshViewFilter.prototype,"_projectionEngineLoaded",void 0);u.__decorate([v.property()],t.I3SMeshViewFilter.prototype,"_geometryEngine",void 0);t.I3SMeshViewFilter=u.__decorate([ha.subclass("esri.views.3d.layers.i3s.I3SMeshViewFilter")],t.I3SMeshViewFilter);const Z=["contains","intersects","disjoint"];var q;(function(f){f[f.KEEP=0]="KEEP";f[f.DISCARD=1]="DISCARD";f[f.TEST=2]="TEST"})(q||(q={}));const D=[0,0,0,0],z=ja.create();Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});