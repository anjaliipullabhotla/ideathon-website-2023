// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/maybe ../../../../../core/time ../../../../../core/Logger ../../../../../core/accessorSupport/ensureType ../../../../../core/arrayUtils ../../../../../core/Error ../../../../../core/has ../../../../../core/accessorSupport/decorators/subclass ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ../../../../../geometry/projectionEllipsoid ../../../../../chunks/sphere ../../../camera/constraintUtils ../../../camera/constraintUtils/ConstraintTypes ../../../camera/constraintUtils/InteractionType ../../../camera/constraintUtils/surfaceCollision ../../../camera/constraintUtils/TiltMode ../PointToPointAnimationController ../../utils/navigationUtils ../../../support/geometryUtils/ray ../../../support/geometryUtils/sphere ../../../webgl-engine/lib/Camera ../../../webgl-engine/lib/Intersector ../../../webgl-engine/lib/verticalOffsetUtils ../../../../animation/easing".split(" "),
function(k,w,x,y,z,Q,R,S,T,U,A,c,h,B,C,D,E,F,G,H,I,q,J,K,u,L,M,N){k.ZoomStepController=function(v){function r(){var a=v.apply(this,arguments)||this;a._zoomLocation=h.create();a._tmpCamera=new u.Camera;a._tmpViewDir=h.create();a._tmpRayDir={origin:h.create(),direction:h.create()};a._targetOnSphere=h.create();a._tmpCenter=h.create();a._constraintOptions={selection:E.ConstraintTypes.ALL_EXCEPT_COLLISION,interactionType:F.InteractionType.ZOOM,interactionFactor:null,interactionStartCamera:new u.Camera,
interactionDirection:null,tiltMode:H.TiltMode.TUMBLE};a._sphere=C.create();return a}w._inheritsLoose(r,v);var l=r.prototype;l.initialize=function(){this._intersector=L.newIntersector(this.view.state.viewingMode)};l.zoomStep=function(a,e){if(this.active){var f=this.view.state,{interactionStartCamera:b}=this._constraintOptions;this.animation.finished?b.copyFrom(f.camera):this.animation.cameraAt(1,b);var d=b=!1;this.intersectionHelper.intersectScreen(e,this._zoomLocation,0===this.view.map.ground.opacity?
O:{})&&(b=0<a?!0:!1,d=!0);this._tmpCamera.copyFrom(f.camera);b?this.intersectionHelper.intersectRay(this._tmpCamera.ray,this._intersector,this._tmpCenter)&&(this._tmpCamera.center=this._tmpCenter):this.intersectionHelper.intersectRay(this._tmpCamera.ray,this._intersector,this._zoomLocation)?this._tmpCamera.center=this._zoomLocation:c.copy(this._zoomLocation,this._tmpCamera.center);this._updateCamera(this._tmpCamera,a,this._zoomLocation,e,d);this.begin(this._tmpCamera)}};l.animationSettings=function(){return{apex:null,
duration:z.Milliseconds(600),easing:N.outExpo}};l._updateCamera=function(a,e,f,b,d){var g=B.getReferenceEllipsoid(this.view.spatialReference);g=q.decideNavigationMode(a,b,d,g);var m;this.view.camera.position.hasZ&&(m=Math.abs(this.view.camera.position.z));c.normalize(n,a.eye);c.scale(n,n,-1);J.fromScreenAtEye(a,b,this._tmpRayDir);c.normalize(this._tmpRayDir.direction,this._tmpRayDir.direction);const t=Math.max(Math.min(12,1/Math.abs(c.dot(n,this._tmpRayDir.direction)))*m,200);if(g===q.NavigationMode.Horizontal){e=
.6**e;this._sphere[3]=c.length(f);c.subtract(this._tmpViewDir,a.center,a.eye);d=Math.min(c.length(this._tmpViewDir),t);g=d*e;1>=e&&4>g&&(g=4,e=g/d);if(1E-6>Math.abs(d-g))return;d=c.length(a.center);this._sphere[3]!==d&&(a.center=c.scale(p,a.center,(this._sphere[3]+e*(d-this._sphere[3]))/d));c.scale(this._tmpViewDir,this._tmpViewDir,-e);a.eye=c.add(p,a.center,this._tmpViewDir);D.applyAll(this.view,a,this._constraintOptions);1E-12<c.squaredDistance(f,a.center)&&K.intersectScreen(this._sphere,a,b,this._targetOnSphere)&&
q.panToPosition(this._sphere,a,f,this._targetOnSphere,this.view.camera.heading,this.view.camera.tilt,!0)}else{g=.6**Math.abs(e);m=0<e?1:-1;c.subtract(this._tmpViewDir,f,a.eye);const P=c.length(this._tmpViewDir);b=this.view._stage.renderView.getMinimalDepthForArea(null,b[0],b[1],this.view.state.camera,60);b=y.isSome(b)?Math.min(t,b):t;b=d?Math.min(b,P):b;c.scale(this._tmpRayDir.direction,this._tmpRayDir.direction,b);c.add(f,this._tmpRayDir.origin,this._tmpRayDir.direction);f=b*g;d=Math.max(4,1.01*
a.nearFar[0]);0<e&&f<d&&(f=d,g=f/b);if(1E-6>Math.abs(b-f))return;c.scale(this._tmpRayDir.direction,this._tmpRayDir.direction,m*(1-g));a.eye=c.add(p,a.eye,this._tmpRayDir.direction);a.center=c.add(p,a.center,this._tmpRayDir.direction)}G.applySurfaceCollisionConstraint(this.view,a)};return r}(I.PointToPointAnimationController);k.ZoomStepController=x.__decorate([A.subclass("esri.views.3d.state.controllers.global.ZoomStepController")],k.ZoomStepController);const p=h.create(),n=h.create(),O={exclude:new Set([M.TERRAIN_ID])};
Object.defineProperties(k,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});