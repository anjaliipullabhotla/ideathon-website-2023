// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/screenUtils ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../geometry/support/aaBoundingRect ../../../../geometry/support/frustum ../../../../geometry/support/plane ../../../../geometry/support/triangle ./FeatureTileDescriptor3D ./FeatureTileVisibility3D ../../webgl-engine/lib/Camera".split(" "),function(y,l,z,m,d,r,A,B,t,E,F){let H=function(){function C(a){this._camera=new F.Camera;this._focusOnMap=[0,0];this._screenRect=d.create();this._tileSize=a.tileSize;
this._renderCoordsHelper=a.renderCoordsHelper;this._tilingScheme=a.tilingScheme;this._visibility=new E.FeatureTileVisibility3D(a.renderCoordsHelper)}var e=C.prototype;e.begin=function(a,c,b){this._camera.copyFrom(a);this._surfaceElevation=b;this._focusOnMap[0]=c.x;this._focusOnMap[1]=c.y;d.fromValues(0,0,a.fullWidth,a.fullHeight,this._screenRect);this._visibility.begin(this._camera,b)};e.end=function(){this._visibility.end()};e.updateTile=function(a){a.measures.visibility=this._visibility.calculate(a);
a.measures.distance=d.distance(a.extent,this._focusOnMap);a.measures.visibility!==t.Visibility.INVISIBLE&&this._updateScreenMeasure(a)};e._updateScreenMeasure=function(a){const c=a.measures.screenRect;d.empty(c);let b=0;const f=a.lij[0]+2,k=a.lij[1]<<2,G=a.lij[2]<<2;var u=this._tileSizeWithBias(a);u*=u;for(let v=0;4>v;v++)for(let w=0;4>w;w++)if(b+=this._computeScreenArea(a,f,k+v,G+w,c),b>u){a.measures.shouldSplit=!0;return}a.measures.shouldSplit=!1};e._tileSizeWithBias=function(a){return a.measures.visibility===
t.Visibility.VISIBLE_WHEN_EXTENDED?5*this._tileSize:this._tileSize};e._computeScreenArea=function(a,c,b,f,k){this._projectToScreen(c,b,f,a.measures.visibility===t.Visibility.VISIBLE_WHEN_EXTENDED,g);d.empty(x);for(a=0;4>a;a++)d.expandPointInPlace(x,g[a]);d.expand(k,x,k);return B.areaPoints2d(g[0],g[1],g[2])+B.areaPoints2d(g[0],g[2],g[3])};e._projectToScreen=function(a,c,b,f,k){this._tilingScheme.ensureMaxLod(a);this._tilingScheme.getExtent(a,c,b,n);this._toRenderCoords(n,0,3,h[0]);this._toRenderCoords(n,
2,3,h[1]);this._toRenderCoords(n,2,1,h[2]);this._toRenderCoords(n,0,1,h[3]);f&&(this._projectToPlane(h,this._camera.frustum[r.PlaneIndex.NEAR]),this._projectToPlane(h,this._camera.frustum[r.PlaneIndex.TOP]),this._projectToPlane(h,this._camera.frustum[r.PlaneIndex.BOTTOM]));for(a=0;4>a;a++)this._camera.projectToRenderScreen(h[a],D),this._camera.renderToScreen(D,k[a])};e._projectToPlane=function(a,c){for(var b=0;4>b;b++)p[b]=A.signedDistance(c,a[b]);b=Math.max(p[0],p[1],p[2],p[3]);if(0<b)for(c=z.scale(q,
A.normal(c),-b),b=0;4>b;b++)z.add(a[b],a[b],c)};e._toRenderCoords=function(a,c,b,f){q[0]=a[c];q[1]=a[b];q[2]=this._surfaceElevation;this._renderCoordsHelper.toRenderCoords(q,this._tilingScheme.spatialReference,f);return f};return C}();const x=d.create(),g=[l.createScreenPointArray(),l.createScreenPointArray(),l.createScreenPointArray(),l.createScreenPointArray()],n=d.create(),q=m.create(),h=[m.create(),m.create(),m.create(),m.create()],p=[0,0,0,0],D=l.createRenderScreenPointArray3();y.FeatureTileMeasurements3D=
H;Object.defineProperties(y,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});