// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../Camera ../../../geometry ../../../Graphic ../../../Viewpoint ../../../core/asyncUtils ../../../core/has ../../../core/Cyclical ../../../core/Error ../../../core/maybe ../../../core/promiseUtils ../../../chunks/mat3 ../../../chunks/mat3f64 ../../../chunks/mat4f64 ../../../chunks/vec3 ../../../chunks/vec3f64 ../../../geometry/projection ../../../geometry/support/aaBoundingBox ../../../geometry/support/aaBoundingRect ../../../geometry/support/frustum ../../../geometry/support/scaleUtils ../../../geometry/support/webMercatorUtils ../camera/intersectionUtils ./cameraUtils ./ElevationProvider ../../../geometry/Point ../../../geometry/SpatialReference ../../../geometry/Extent ../../../geometry/Geometry".split(" "),
function(x,u,ea,Ea,pa,L,fa,Fa,ha,D,n,qa,ia,ra,sa,m,E,v,q,ja,ta,ua,z,A,h,ka,F,M,va,wa){function N(a){return 360-ha.cyclicalDegrees.normalize(a)}function B(a){return ha.cyclicalDegrees.normalize(360-a)}function G(a){n.isSome(a)&&a.resolver&&a.resolver.reject();return null}function la(a,b,c,d=null){if(!b)return G(d);var e=a.spatialReference||M.WGS84;if(n.isSome(b.camera)){a=z.project(b.camera.position,e);if(n.isNone(a))return G(d);b=b.camera.clone();b.position=a;a=b;n.isSome(d)&&d.resolver&&d.resolver.resolve(a);
return a}if(n.isNone(b.targetGeometry))return G(d);var f=b.get("targetGeometry.spatialReference");if(f&&!z.canProject(f,e))return G(d);e=h.internalToExternal(a,a.state.camera);f=h.OrientationMode.ADJUST;null!=b.rotation&&(e.heading=N(b.rotation),f=h.OrientationMode.LOCKED);null!=c&&(e.tilt=c);if("point"===b.targetGeometry.type){const g=b.targetGeometry;c=b.targetGeometry.clone();b=null!=b.scale?h.scaleToDistance(a,b.scale,g.latitude):a.state.camera.distance;return h.fromCenterDistance(a,c,b,e,f,d)}return h.fromExtent(a,
b.targetGeometry.extent,e.heading,e.tilt,f,d)}function O(){O=u._asyncToGenerator(function*(a,b,c){if(b&&a.spatialReference){var d={target:null};if("declaredClass"in b||Array.isArray(b))d.target=b;else{for(var e in b)d[e]=b[e];b.center&&!d.target&&(d.target=b.center)}b=d}else b=null;if(!b)throw new D("viewpointutils-create:no-target","Missing target for creating viewpoint");d=new ea({fov:a.camera.fov});e=new L({camera:d});if(b.target instanceof L)return a=yield xa(a,b.target,b,c,e),w(a);if(b.target instanceof
ea)return w(ma(a,b.target,e));var f=null!=b.scale||null!=b.zoom;if(b.target instanceof va){var g=b.target.xmin===b.target.xmax||b.target.ymin===b.target.ymax;return f||g?w(yield P(a,b,b.target.center,d,c,e)):w(yield ya(a,b,b.target,d,c,e))}g={boundingBox:q.empty(),hasZ:!1,screenSpaceObjects:[]};var l=f?ua.getResolutionInMetersForScale(Q(a,b)):void 0;yield na(a,b.target,l,g);if(isFinite(g.boundingBox[0])){q.center(g.boundingBox,k);p.x=k[0];p.y=k[1];p.z=k[2];p.spatialReference=a.spatialReference;isFinite(p.z)&&
g.hasZ?l=q.isPoint(g.boundingBox):(p.z=void 0,l=ja.isPoint(q.toRect(g.boundingBox,za)));if(f||l)return w(yield P(a,b,p,d,c,e));f=g.screenSpaceObjects;if(f.length){l=Number.NEGATIVE_INFINITY;for(let t=0;t<f.length;t++){const r=f[t].screenSpaceBoundingRect;l=Math.max(l,Math.abs(r[0]),Math.abs(r[1]),Math.abs(r[2]),Math.abs(r[3]))}f=.66-l/Math.min(a.width,a.height)*2}else f=.66;return w(yield Aa(a,b,p,g.boundingBox,f,d,c,e))}return b.position?(c=A.cameraOnContentAlongViewDirection(a),m.copy(H,c.viewForward),
h.directionToHeadingTilt(a,c.eye,H,c.up,R),d.position=new F(b.position),d.heading=null!=b.heading?b.heading:R.heading,d.tilt=null!=b.tilt?b.tilt:R.tilt,a=S(a,null,d,e),w(a)):w(yield Ba(a,b,d,c,e))});return O.apply(this,arguments)}function Q(a,b){return null==b.scale&&null!=b.zoom?h.zoomToScale(a,b.zoom):b.scale}function T(a,b){let c=!1;null!=b.heading?(a.heading=b.heading,c=!0):null!=b.rotation&&(a.heading=N(b.rotation),c=!0);null!=b.tilt&&(a.tilt=b.tilt,c=!0);null!=b.fov&&(a.fov=b.fov);return c}
function S(a,b,c,d){const e=a.spatialReference||M.WGS84;b=n.isSome(b)?b:h.externalToInternal(a,c);if(n.isNone(b))return d;d.targetGeometry=v.projectVectorToPoint(b.center,a.renderSpatialReference,e);d.scale=h.computeScale(a,b);d.rotation=B(c.heading);d.camera=c;return d}function I(a,b,c){var d=()=>new D("viewpointutils:invalid-geometry","The target is missing a valid geometry");if(!b)throw d();if(!z.canProject(b.spatialReference,a.spatialReference))throw new D("viewpointutils:incompatible-spatialreference",
`Spatial reference (${b.spatialReference?b.spatialReference.wkid:"unknown"}) is incompatible with the view (${a.spatialReference.wkid})`,{geometry:b});const e=[];if(!b.hasZ&&a.basemapTerrain){switch(b.type){case "point":var f=b;break;case "multipoint":case "polyline":f=b.extent?.center;break;case "mesh":f=b.origin;break;case "extent":f=b.center;break;case "polygon":f=b.centroid}f&&n.isSome(a.basemapTerrain.spatialReference)&&z.canProject(f,a.basemapTerrain.spatialReference)?k[2]=n.unwrapOr(ka.getElevationAtPoint(a.elevationProvider,
f),0):k[2]=0}(0,Ca[b.type])(b,g=>{e.push(g[0],g[1],g[2])},k);f=e.length/3;if(0===f)throw d();d=Array(e.length);if(v.projectBuffer(e,b.spatialReference,0,d,a.spatialReference,0,f))for(b.hasZ&&(c.hasZ=!0),a=0;a<d.length;a+=3)b.hasZ?(k[0]=d[a+0],k[1]=d[a+1],k[2]=d[a+2]):(k[0]=d[a+0],k[1]=d[a+1]),q.expandWithVec3(c.boundingBox,k)}function Da(a,b,c,d){return U.apply(this,arguments)}function U(){U=u._asyncToGenerator(function*(a,b,c,d){const e=yield fa.result(a.whenViewForGraphic(b));if(!1!==e.ok&&!n.isNone(e.value)&&
"whenGraphicBounds"in e.value)if(c=yield fa.result(e.value.whenGraphicBounds(b,{minDemResolution:c})),!1===c.ok)I(a,b.geometry,d);else{var {screenSpaceObjects:f,boundingBox:g}=c.value;q.expandWithAABB(d.boundingBox,g);f&&f.forEach(l=>{d.screenSpaceObjects.push(l)});isFinite(g[2])&&(d.hasZ=!0)}else I(a,b.geometry,d)});return U.apply(this,arguments)}function na(a,b,c,d){return V.apply(this,arguments)}function V(){V=u._asyncToGenerator(function*(a,b,c,d){if(Array.isArray(b)&&2===b.length){const e=b[0],
f=b[1];if("number"===typeof e&&"number"===typeof f){p.x=e;p.y=f;p.z=void 0;p.spatialReference=a.spatialReference.isGeographic?a.spatialReference:M.WGS84;I(a,p,d);return}}b&&"function"===typeof b.map?yield qa.eachAlways(b.map(e=>na(a,e,c,d))):b instanceof wa?I(a,b,d):b instanceof pa&&(yield Da(a,b,c,d))});return V.apply(this,arguments)}function xa(a,b,c,d,e){return W.apply(this,arguments)}function W(){W=u._asyncToGenerator(function*(a,b,c,d,e){if(n.isSome(b.camera))return ma(a,b.camera,e);e.scale=
b.scale;e.rotation=b.rotation;e.targetGeometry=n.isSome(b.targetGeometry)?b.targetGeometry.clone():null;e.camera=null;null!=c.heading?e.rotation=B(c.heading):null!=c.rotation&&(e.rotation=c.rotation);b=Q(a,c);null!=b&&(e.scale=b);d=new h.AsyncContext(d);la(a,e,c.tilt,d);e.camera=yield d.resolver.promise;return e});return W.apply(this,arguments)}function ma(a,b,c){const d=z.project(b.position,a.spatialReference);if(n.isNone(d))return null;b=b.clone();b.fov=a.camera.fov;b.position=d;return S(a,null,
b,c)}function P(a,b,c,d,e,f){return X.apply(this,arguments)}function X(){X=u._asyncToGenerator(function*(a,b,c,d,e,f){if(n.isNone(c))throw new D("createfromcenter","invalid point");f.targetGeometry=c.clone();const g=A.cameraOnContentAlongViewDirection(a);if(b.position)return c=f.targetGeometry,e=a.renderSpatialReference,v.projectPointToVector(b.position,J,e),v.projectPointToVector(c,Y,e),f.targetGeometry=new F(c),d.position=new F(b.position),m.subtract(H,Y,J),h.directionToHeadingTilt(a,J,H,g.up,d),
f.scale=h.distanceToScale(a,m.distance(J,Y),f.targetGeometry.latitude),f.rotation=B(d.heading),f.camera=d,f;if(b.zoomFactor){var l=g.distance/b.zoomFactor;const t=m.scale(k,g.viewForward,-l);g.eye=m.add(k,g.center,t);f.scale=h.distanceToScale(a,l,c.latitude)}h.internalToExternal(a,g,d);l=T(d,b)?h.OrientationMode.LOCKED:h.OrientationMode.ADJUST;b.zoomFactor||(f.scale=Q(a,b),null==f.scale&&(v.projectPointToVector(c,k,a.renderSpatialReference),ta.intersectsPoint(g.frustum,k)?f.scale=h.distanceToScale(a,
m.distance(g.eye,k),c.latitude):f.scale=h.computeScale(a,g)),b=new h.AsyncContext(e),h.fromCenterScale(a,f.targetGeometry,f.scale,d,l,b),f.camera=yield b.resolver.promise);return f});return X.apply(this,arguments)}function Ba(a,b,c,d,e){return Z.apply(this,arguments)}function Z(){Z=u._asyncToGenerator(function*(a,b,c,d,e){var f=A.cameraOnContentAlongViewDirection(a);f=v.projectVectorToPoint(f.center,a.renderSpatialReference,a.spatialReference);return P(a,b,f,c,d,e)});return Z.apply(this,arguments)}
function ya(a,b,c,d,e,f){return aa.apply(this,arguments)}function aa(){aa=u._asyncToGenerator(function*(a,b,c,d,e,f){f.targetGeometry=c.clone();const g=A.cameraOnContentAlongViewDirection(a);h.internalToExternal(a,g,d);b=T(d,b)?h.OrientationMode.LOCKED:h.OrientationMode.ADJUST;e=new h.AsyncContext(e);h.fromExtent(a,c,d.heading,d.tilt,b,e);f.camera=yield e.resolver.promise;return f});return aa.apply(this,arguments)}function Aa(a,b,c,d,e,f,g,l){return ba.apply(this,arguments)}function ba(){ba=u._asyncToGenerator(function*(a,
b,c,d,e,f,g,l){l.targetGeometry=c.clone();const t=A.cameraOnContentAlongViewDirection(a);var r=0;c.hasZ?r=c.z:a.basemapTerrain&&(r=n.unwrap(ka.getElevationAtPoint(a.elevationProvider,c)));m.set(k,c.x,c.y,r);v.computeTranslationToOriginAndRotation(a.spatialReference,k,oa,a.renderSpatialReference);ia.fromMat4(K,oa);ia.transpose(K,K);q.empty(C);c=[[0,1,2],[3,1,2],[0,4,2],[3,4,2],[0,1,5],[3,1,5],[0,4,5],[3,4,5]];for(var y=0;y<c.length;y++){const ca=c[y];let da=d[ca[2]];isFinite(da)||(da=r);m.set(k,d[ca[0]],
d[ca[1]],da);v.projectVectorToVector(k,a.spatialReference,k,a.renderSpatialReference);q.expandWithVec3(C,m.transformMat3(k,k,K))}d=q.width(C);r=q.height(C);c=q.depth(C);y=1/Math.tan(t.fovY/2);e=Math.max(.5*Math.sqrt(d*d+c*c)*Math.max(y,1/Math.tan(t.fovX/2))+.5*r,.5*r*y+.5*Math.max(d,c))/e;h.internalToExternal(a,t,f);b=T(f,b)?h.OrientationMode.LOCKED:h.OrientationMode.ADJUST;l.scale=h.distanceToScale(a,e,l.targetGeometry.latitude);g=new h.AsyncContext(g);h.fromCenterScale(a,l.targetGeometry,l.scale,
f,b,g);l.camera=yield g.resolver.promise;return l});return ba.apply(this,arguments)}function w(a){a&&n.isSome(a.camera)&&(a.rotation=B(a.camera.heading));return a}const k=E.create(),oa=sa.create(),K=ra.create(),C=q.create(),za=ja.create(),H=E.create(),J=E.create(),Y=E.create(),R={heading:0,tilt:0},p=new F,Ca={point(a,b,c){c[0]=a.x;c[1]=a.y;a.hasZ&&(c[2]=a.z);b(c)},polygon(a,b,c){const d=a.hasZ;for(let e=0;e<a.rings.length;e++){const f=a.rings[e];for(let g=0;g<f.length;g++)c[0]=f[g][0],c[1]=f[g][1],
d&&(c[2]=f[g][2]),b(c)}},polyline(a,b,c){const d=a.hasZ;for(let e=0;e<a.paths.length;e++){const f=a.paths[e];for(let g=0;g<f.length;g++)c[0]=f[g][0],c[1]=f[g][1],d&&(c[2]=f[g][2]),b(c)}},multipoint(a,b,c){const d=a.points;a=a.hasZ;for(let e=0;e<d.length;e++)c[0]=d[e][0],c[1]=d[e][1],a&&(c[2]=d[e][2]),b(c)},extent(a,b,c){a.hasZ?(b(m.set(c,a.xmin,a.ymin,a.zmin)),b(m.set(c,a.xmax,a.ymin,a.zmin)),b(m.set(c,a.xmin,a.ymax,a.zmin)),b(m.set(c,a.xmax,a.ymax,a.zmin)),b(m.set(c,a.xmin,a.ymin,a.zmax)),b(m.set(c,
a.xmax,a.ymin,a.zmax)),b(m.set(c,a.xmin,a.ymax,a.zmax)),b(m.set(c,a.xmax,a.ymax,a.zmax))):(b(m.set(c,a.xmin,a.ymin,c[2])),b(m.set(c,a.xmax,a.ymin,c[2])),b(m.set(c,a.xmin,a.ymax,c[2])),b(m.set(c,a.xmax,a.ymax,c[2])))},mesh(a,b,c){if(a=a.vertexAttributes&&a.vertexAttributes.position)for(let d=0;d<a.length;d+=3)b(m.set(c,a[d+0],a[d+1],a[d+2]))}};x.create=function(a,b,c){return O.apply(this,arguments)};x.fromCamera=function(a,b,c=null){n.isNone(c)&&(c=new L);return S(a,null,b.clone(),c)};x.headingToRotation=
B;x.rotationToHeading=N;x.toCamera=la;Object.defineProperties(x,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});