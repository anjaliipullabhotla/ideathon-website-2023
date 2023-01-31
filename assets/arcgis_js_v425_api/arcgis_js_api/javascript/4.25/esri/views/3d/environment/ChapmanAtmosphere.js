// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../core/Handles ../../../core/mathUtils ../../../core/maybe ../../../core/reactiveUtils ../../../chunks/vec2 ../../../chunks/vec3 ../../../chunks/vec4 ../../../geometry/support/Ellipsoid ./AtmosphereType ./atmosphereUtils ./ChapmanAtmosphereTechnique ./ChapmanAtmosphereTechniqueConfiguration ../webgl-engine/lib/DefaultVertexBufferLayouts ../webgl-engine/lib/glUtil3D ../../webgl/enums".split(" "),function(m,p,h,e,n,q,r,t,f,u,g,k,v,w,x,y){let A=function(){function l(a){this._view=
a;this.type=u.AtmosphereType.Realistic;this._passParameters=new k.ChapmanAtmospherePassParameters;this._rootTileElevationMin=NaN;this._lowerBoundEarthRadius=f.earth.radius;this._fadeHaze=0;this._updateRadius(f.earth.radius)}var b=l.prototype;b.destroy=function(){this._atmosphereTechnique=e.releaseMaybe(this._atmosphereTechnique);this._atmosphereHazeTechnique=e.releaseMaybe(this._atmosphereHazeTechnique);this._vao=e.disposeMaybe(this._vao);this._handles=e.destroyMaybe(this._handles)};b.initializeRenderContext=
function(a){const c=a.renderContext.rctx;var d=this._handles=new p;this._updateRootTileElevationBounds();d.add(n.watch(()=>this._view.basemapTerrain.rootTileElevationBounds,()=>this._updateRootTileElevationBounds()));d.add(n.watch(()=>this._view.basemapTerrain.visibleElevationBounds,()=>this._updateVisibleElevationBounds()));d=new v.ChapmanAtmosphereTechniqueConfiguration;d.haze=!1;this._atmosphereTechnique=a.shaderTechniqueRepository.acquire(k.ChapmanAtmosphereTechnique,d);d.haze=!0;this._atmosphereHazeTechnique=
a.shaderTechniqueRepository.acquire(k.ChapmanAtmosphereTechnique,d);this._vao=x.createQuadVAO(c,w.Pos2Tex)};b.render=function(a){this._render(a,this._atmosphereTechnique,a.offscreenRenderingHelper.depthTexture)};b.renderHaze=function(a,c){this._fadeHaze=c;this._render(a,this._atmosphereHazeTechnique,a.offscreenRenderingHelper.linearDepthTexture)};b._render=function(a,c,d){if(!e.isNone(d)){this._update(a.bindParameters.camera);this._passParameters.depthTex=d;var z=a.rctx.bindTechnique(c,this._passParameters,
a.bindParameters);a.offscreenRenderingHelper.renderDepthDetached(()=>{this._renderCommon(z,a)})}};b._renderCommon=function(a,c){e.isNone(this._vao)||(c.rctx.bindVAO(this._vao),a.assertCompatibleVertexAttributeLocations(this._vao),c.rctx.drawArrays(y.PrimitiveType.TRIANGLE_STRIP,0,4))};b._adjustRadiusForTesselation=function(a){return a*Math.cos(Math.PI/16/16)};b._updateRootTileElevationBounds=function(){const a=this._view.basemapTerrain.rootTileElevationBounds.min;a!==this._rootTileElevationMin&&(this._rootTileElevationMin=
a,this._lowerBoundEarthRadius=f.earth.radius,this._updateVisibleElevationBounds())};b._updateVisibleElevationBounds=function(){const a=this._adjustRadiusForTesselation(f.earth.radius+this._view.basemapTerrain.visibleElevationBounds.min);a<this._lowerBoundEarthRadius&&this._updateRadius(a)};b._updateRadius=function(a){this._lowerBoundEarthRadius=a;q.set(this._passParameters.radii,a,a+g.atmosphereHeight);this._passParameters.innerFadeDistance=2*Math.sqrt((2*a-g.innerAtmosphereDepth)*g.innerAtmosphereDepth)};
b._update=function(a){if(!e.isNone(a)){a=r.length(a.eye);var c=a*a;t.set(this._passParameters.heightParameters,a,c,c-this._passParameters.radii[1]*this._passParameters.radii[1],Math.min(1,Math.max(0,(a-this._passParameters.radii[0])/g.atmosphereHeight)));this._passParameters.altitudeFade=g.computeInnerAltitudeFade(a-this._lowerBoundEarthRadius);this._passParameters.hazeStrength=h.lerp(h.lerp(.6,1,h.smoothstep(9500,10500,a-f.earth.radius)),1,this._fadeHaze)}};l.isSupported=function(a){return a.renderContext.rctx.capabilities.depthTexture};
return l}();m.ChapmanAtmosphere=A;Object.defineProperties(m,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});