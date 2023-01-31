// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../geometry ../../core/handleUtils ../../core/lang ../../core/mathUtils ../../core/maybe ../../core/screenUtils ../../chunks/vec3f64 ../../geometry/projection ../../layers/graphics/hydratedFeatures ../../support/elevationInfoUtils ../ViewingMode ../draw/support/drawUtils ../../geometry/Point".split(" "),function(l,P,F,G,u,h,H,v,n,I,w,J,x,K){function y(b,d){let c=null,a=null;return f=>{if("cancel"===f.action)h.isSome(a)&&(a.execute({action:"cancel"}),a=c=null);else{var e={action:f.action,
screenStart:f.start,screenEnd:f.screenPoint};"start"===f.action&&h.isNone(c)&&(c=new r,a=new r,d(b,c,a,f.pointerType,e));h.isSome(c)&&c.execute(e);"end"===f.action&&h.isSome(c)&&(a=c=null)}}}function z(b,d){return b.events.on("drag",y(b,d))}function A(b,d){let c=null;return a=>{"start"===a.action&&(c=L(b,a.mapStart.spatialReference,d));if(h.isNone(c))return null;const f=a.mapEnd.x-a.mapStart.x,e=a.mapEnd.y-a.mapStart.y,g=a.mapEnd.z-a.mapStart.z;c.move(f,e,g);return{...a,translationX:f,translationY:e,
translationZ:g}}}function B(b,d){return h.isNone(b)?null:b.spatialReference.equals(d)?b.clone():n.project(b,d)}function L(b,d,c){const a=b.geometry;d=I.hydratedSpatialReference(d);if(h.isNone(a))return null;if("mesh"===a.type)return M(b,a,d,c);const f=B(a,d),e=a.spatialReference;return h.isNone(f)?null:{move:(g,k,m)=>{g=x.move(f.clone(),g,k,m);g.spatialReference.equals(e)?b.geometry=g:b.geometry=n.project(g,e)}}}function M(b,d,c,a){if(h.isSome(d.transform))return N(b,d,d.transform,c);if(!d.spatialReference.equals(c))return null;
let f=0,e=0,g=0;return{move:(k,m,p)=>{var q=k-f;const C=m-e,D=p-g;if(q||C||D)q=new K(d.origin.x+q,d.origin.y+C,d.origin.z+D,d.origin.spatialReference),d.centerAt(q,{geographic:a===J.ViewingMode.Global}),b.notifyGeometryChanged(),f=k,e=m,g=p}}}function N(b,d,c,a){const f=c.getOriginPoint(d.spatialReference),e=B(f,a),g=d.spatialReference;return h.isNone(e)?null:{move:(k,m,p)=>{k=x.move(e.clone(),k,m,p);k.spatialReference.equals(g)?c.origin=v.fromValues(k.x,k.y,k.z):(k=n.project(k,g),h.isSome(k)&&(c.origin=
v.fromValues(k.x,k.y,k.z)));b.notifyMeshTransformChanged();b.notifyGeometryChanged()}}}function t(b,d){const c=new Map;for(const a of d)c.set(a,G.clone(b[a]));return a=>{c.forEach((f,e)=>{b[e]=f});return a}}function E(b){return h.isSome(b.geometry)&&"mesh"===b.geometry.type?O(b,b.geometry):t(b,["geometry"])}function O(b,d){const c=h.isSome(d.transform)?d.transform.clone():null,a=d.vertexAttributes.clonePositional();return f=>{d.transform=c;d.vertexAttributes=a;b.notifyGeometryChanged();return f}}
let r=function(){function b(){this.execute=()=>{}}b.prototype.next=function(d,c=new b){h.isSome(d)&&(this.execute=a=>{a=d(a);h.isSome(a)&&c.execute(a)});return c};return b}();l.EventPipeline=r;l.addMapDelta=function(){let b=0,d=0,c=0;return a=>{"start"===a.action&&(b=a.mapStart.x,d=a.mapStart.y,c=a.mapStart.z);const f=a.mapEnd.x-b,e=a.mapEnd.y-d,g=a.mapEnd.z-c;b=a.mapEnd.x;d=a.mapEnd.y;c=a.mapEnd.z;return{...a,mapDeltaX:f,mapDeltaY:e,mapDeltaZ:g,mapDeltaSpatialReference:a.mapStart.spatialReference}}};
l.addScreenDelta=function(){let b=0,d=0;return c=>{"start"===c.action&&(b=c.screenStart.x,d=c.screenStart.y);const a=c.screenEnd.x-b,f=c.screenEnd.y-d;b=c.screenEnd.x;d=c.screenEnd.y;return{...c,screenDeltaX:a,screenDeltaY:f}}};l.constrainToMapAxis=function(b,d){const c=[b.x,b.y,b.z],a=[Math.cos(d),Math.sin(d)];b=Math.sqrt(a[0]*a[0]+a[1]*a[1]);if(0===b)return null;a[0]/=b;a[1]/=b;const f=e=>{const g=(e.x-c[0])*a[0]+(e.y-c[1])*a[1];e.x=c[0]+g*a[0];e.y=c[1]+g*a[1]};return e=>{f(e.mapStart);f(e.mapEnd);
return{...e,axis:a}}};l.createDragEventPipelineCallback=y;l.createManipulatorDragEventPipeline=z;l.createManipulatorDragEventPipelineMany=function(b,d){const c=[];for(const a of b)c.push(z(a,d));return F.handlesGroup(c)};l.dragAtLocation=function(b,d){let c=null,a=0,f=0;return e=>{"start"===e.action&&(c=b.toScreen(d),0>c.x||c.x>b.width||0>c.y||c.y>b.height?c=null:(a=e.screenStart.x-c.x,f=e.screenStart.y-c.y));if(null==c)return null;var g=u.clamp(e.screenEnd.x-a,0,b.width);const k=u.clamp(e.screenEnd.y-
f,0,b.height);g=H.createScreenPoint(g,k);e.screenStart=c;e.screenEnd=g;return e}};l.dragGraphic=A;l.dragGraphicMany=function(b,d){const c=b.map(a=>h.unwrap(A(a,d))).filter(a=>h.isSome(a));return a=>{const f=a.mapEnd.x-a.mapStart.x,e=a.mapEnd.y-a.mapStart.y,g=a.mapEnd.z-a.mapStart.z;c.forEach(k=>k(a));return{...a,translationX:f,translationY:e,translationZ:g}}};l.resetGraphic=E;l.resetGraphicMany=function(b){const d=b.map(c=>h.unwrap(E(c))).filter(c=>h.isSome(c));return c=>{d.forEach(a=>a(c));return c}};
l.resetProperties=t;l.resetSymbol=function(b){return t(b,["symbol"])};l.sceneSnappingAtLocation=function(b,d,c=[]){if("2d"===b.type)return f=>f;let a=null;return f=>{"start"===f.action&&(a=b.toMap(f.screenStart,{exclude:c}),h.isSome(a)&&(a.z=w.getZForElevationMode(a,b,d)));var e=b.toMap(f.screenEnd,{exclude:c});h.isSome(e)&&(e.z=w.getZForElevationMode(e,b,d));e=h.isSome(a)&&h.isSome(e)?{sceneStart:a,sceneEnd:e}:null;return{...f,scenePoints:e}}};l.screenToMap=function(b,d=null,c){let a=null;const f=
h.isSome(d)&&!b.spatialReference.equals(d)?g=>h.isSome(g)?n.project(g,d):g:g=>g,e={exclude:[],...c};return g=>{"start"===g.action&&(a=f(b.toMap(g.screenStart,e)));if(h.isNone(a))return null;const k=f(b.toMap(g.screenEnd,e));return h.isSome(k)?{...g,mapStart:a,mapEnd:k}:null}};Object.defineProperties(l,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});