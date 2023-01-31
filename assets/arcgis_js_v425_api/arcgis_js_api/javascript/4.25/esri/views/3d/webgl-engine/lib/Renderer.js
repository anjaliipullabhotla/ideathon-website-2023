// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/arrayUtils ../../../../core/Handles ../../../../core/has ../../../../core/MapUtils ../../../../core/mathUtils ../../../../core/maybe ../../../../core/reactiveUtils ../../../../core/time ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../../chunks/mat4 ../../../../chunks/mat4f64 ../../../../chunks/boundedPlane ../../support/animationUtils ../../support/debugFlags ../../terrain/TerrainRenderer ../core/renderPasses/RenderPassManager ../core/shaderLibrary/ShaderOutput ../core/shaderLibrary/hud/HUDUniforms ./basicInterfaces ./BoundingInfo ./depthRange ./depthRangeUtils ./glUtil3D ./Highlight ./Material ./OffscreenRendering ./RenderContext ./rendererUtils ./RenderPluginManager ./RenderSlot ./ShadowAccumulator ./ShadowHighlight ./ShadowMap ./SliceHelper ./SmaaRenderPass ./SSAOHelper ./TransparencyPassType ./edgeRendering/EdgeView ./edgeRendering/interfaces ../materials/renderers/MergedRenderer ../shaders/CompositingTechniqueConfiguration ../statistics/RendererPerformanceInfo ../../../webgl/enums".split(" "),
function(p,Q,z,W,X,Y,Z,F,aa,t,A,R,B,wa,ba,C,G,ca,M,da,S,ea,n,x,D,fa,T,ha,ia,ja,w,ka,la,ma,na,k,oa,pa,O,qa,ra,sa,H,ta,I,ua,J,m,y){p.Renderer=function(u){function N(a,c,d,f,g,h,l,q,r){var b=u.call(this,{})||this;b._materialRepository=a;b._shaderTechniqueRepository=d;b._rctx=f;b._compositingHelper=g;b._magnifierHelper=h;b._requestRender=l;b._stage=r;b._materialRenderers=new Map;b._needsTransparentPass=!1;b._hasHUDElements=!1;b._hasHighlights=!1;b._hasWater=!1;b._hasOverlayWater=!1;b._renderOverlay=v=>
{};b._content=new Map;b._isRendering=!1;b._fallbackDepthStencilTexture=null;b._sliceHelper=new qa;b._antialiasing=!0;b._oitEnabled=!1;b._multipassTerrain=!0;b._terrainRenderingEnabled=!0;b._terrainTransparency=S.TransparencyMode.Opaque;b._waterReflectionEnabled=!1;b._hasAnimations=!1;b._animationTimestep=M.MINIMUM_IDLE_ANIMATION_FPS_TIME;b._handles=new Y;b._renderHiddenTransparentEdges=()=>{};b._oitUsed=!1;b._smaaPass=new ra.SmaaRenderPass(b._rctx,d);b._oitEnabled=b._hasOITSupport;b._requestRender();
b._offscreenRendering=new ka.OffscreenRendering(b._rctx,b._compositingHelper);b.performanceInfo=new m.RendererPerformanceInfo(b._rctx);b._shadowMap=new O.ShadowMap(b._rctx,r.viewingMode);b._ssaoHelper=new sa.SSAOHelper(d,b._rctx,()=>b._requestRender());b._highlight=new ja.Highlight(d,b._rctx);b._shadowHighlight=new pa.ShadowHighlight(b._rctx,r.viewingMode);b._shadowAccumulator=new oa.ShadowAccumulator(b._rctx,d,r,v=>{const P=b.shadowsEnabled;b._shadowMap.enabled=!0;b._prepare(v.camera,v.contentCamera);
b._renderPlugins.prepareRender();b._shadowMap.enabled=P},(v,P,va)=>{v.shadowMap.start(v.camera,P,va);b._renderShadowCascades(n.ShaderOutput.Shadow,v.shadowMap);v.camera.setGLViewport(b._rctx);b._prepare(v.camera,v.contentCamera)},()=>b._requestRender());b._renderContext=new la.RenderContext(b._rctx,b._offscreenRendering,b._shadowMap,b._ssaoHelper,b._sliceHelper);b._renderPlugins=new na.RenderPluginManager({renderContext:b._renderContext,shaderTechniqueRepository:d,textureRep:c,materialRep:b._materialRepository,
requestRender:b._requestRender,schedule:q});b.renderPassManager=new ea.RenderPassManager(b._rctx,b._shaderTechniqueRepository);b._renderPlugins.add(b.renderPassManager.slots(),b.renderPassManager);b._handles.add([A.watch(()=>b._stage.state.camera,()=>b._requestRender(),A.syncAndInitial),A.watch(()=>da.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES,v=>{b._renderHiddenTransparentEdges=v?()=>b._renderEdges(I.Transparency.TRANSPARENT):()=>{};b._requestRender()},A.initial)]);return b}Q._inheritsLoose(N,u);var e=
N.prototype;e.normalizeCtorArgs=function(){return{}};e.dispose=function(){this._handles.destroy();this._smaaPass.dispose();this._materialRenderers.forEach(a=>a.dispose());this._materialRenderers.clear();this._edgeView=t.destroyMaybe(this._edgeView);this._offscreenRendering.dispose();this._fallbackDepthStencilTexture=t.disposeMaybe(this._fallbackDepthStencilTexture);this._shadowMap.enabled=!1;this._shadowMap.dispose();this._ssaoHelper.enabled=!1;this._ssaoHelper.dispose();this._highlight.dispose();
this._shadowHighlight.dispose();this._shadowAccumulator.dispose();fa.BoundingInfo.prune();this._content.clear()};e.disposeOffscreenBuffers=function(){this._offscreenRendering.dispose();this._shadowMap.dispose();this._smaaPass.disable();this._ssaoHelper.disposeOffscreenBuffers()};e.ensureEdgeView=function(){t.isNone(this._edgeView)&&(this._edgeView=new ta.EdgeView({rctx:this._rctx,renderSR:this._stage.renderSR,viewingMode:this._stage.viewingMode,techniqueRepository:this._shaderTechniqueRepository,
setNeedsRender:()=>this._requestRender(),schedule:a=>this._stage.resourceController.schedule(a)}),this._handles.add(A.watch(()=>t.applySome(this._edgeView,a=>a.updating),()=>this._requestRender(),A.sync)),this._requestRender());return this._edgeView};e.setRenderParameters=function(a){const {_shadowMap:c,_ssaoHelper:d,_bindParameters:f}=this;void 0!==a.screenSpaceReflectionsEnabled&&f.ssr.enabled!==a.screenSpaceReflectionsEnabled&&(f.ssr.enabled=a.screenSpaceReflectionsEnabled,this._requestRender());
void 0!==a.shadowMap&&c.enabled!==a.shadowMap&&(c.enabled=a.shadowMap,this._requestRender());void 0!==a.shadowMapMaxCascades&&c.maxCascades!==a.shadowMapMaxCascades&&(c.maxCascades=a.shadowMapMaxCascades,this._requestRender());if(t.isSome(a.environment)){t.isSome(a.environment.weather)&&(this._bindParameters.weather=a.environment.weather,this._bindParameters.weatherVisible=a.weatherVisible);void 0!==a.environment.lighting.ambientOcclusionEnabled&&d.enabled!==a.environment.lighting.ambientOcclusionEnabled&&
(d.enabled=a.environment.lighting.ambientOcclusionEnabled,this._requestRender());void 0!==a.environment.lighting.waterReflectionEnabled&&this._waterReflectionEnabled!==a.environment.lighting.waterReflectionEnabled&&(this._waterReflectionEnabled=a.environment.lighting.waterReflectionEnabled,this._requestRender());const g="virtual"!==a.environment.lighting.type;f.enableFillLights!==g&&(f.enableFillLights=g,this._requestRender())}a.background&&this._offscreenRendering.background!==a.background&&(this._offscreenRendering.background=
a.background,this._requestRender());void 0!==a.antialiasingEnabled&&this._antialiasing!==a.antialiasingEnabled&&(this._antialiasing=a.antialiasingEnabled,this._requestRender());void 0!==a.highQualityTransparency&&this._multipassTerrain!==a.highQualityTransparency&&(this._oitEnabled=(this._multipassTerrain=a.highQualityTransparency)&&this._hasOITSupport,this._requestRender());void 0!==a.defaultHighlightOptions&&(this._highlight.setDefaultOptions(a.defaultHighlightOptions),this._shadowHighlight.setDefaultOptions(a.defaultHighlightOptions),
this._requestRender());void 0!==a.overlays&&this._bindParameters.overlays!==a.overlays&&(this._bindParameters.overlays=a.overlays,this._requestRender());void 0!==a.hasOverlayWater&&this._hasOverlayWater!==a.hasOverlayWater&&(this._hasOverlayWater=a.hasOverlayWater,this._requestRender());void 0!==a.renderOverlay&&this._renderOverlay!==a.renderOverlay&&(this._renderOverlay=a.renderOverlay,this._requestRender());void 0!==a.slicePlane&&this._sliceHelper.plane!==a.slicePlane&&(this._sliceHelper.plane=
t.unwrap(a.slicePlane),this._requestRender());void 0!==a.terrainRenderingEnabled&&this._terrainRenderingEnabled!==a.terrainRenderingEnabled&&(this._terrainRenderingEnabled=a.terrainRenderingEnabled,this._requestRender());void 0!==a.terrainTransparency&&this._terrainTransparency!==a.terrainTransparency&&(this._terrainTransparency=a.terrainTransparency,this._requestRender());void 0!==a.shadowCastOptions&&this._shadowAccumulator.setOptions(a.shadowCastOptions)};e.modify=function(a){this._isRendering&&
console.warn("Renderer.modify called while rendering");const {adds:c,removes:d,updates:f}=a;if(0!==c.length||0!==d.length||0!==f.length){d.forAll(({id:h})=>this._content.delete(h));c.forAll(h=>this._content.set(h.id,h));var g=!1;ma.splitRenderGeometryChangeSetByMaterial(a).forEach((h,l)=>{let q=this._materialRenderers.get(l);if(!q)if(0<h.adds.length)q=new ua.MergedRenderer(this._rctx,this._materialRepository,l),this._materialRenderers.set(l,q);else return;q.modify(h);q.isEmpty&&(g=!0)});g&&this._materialRenderers.forEach((h,
l)=>{h.isEmpty&&(this._materialRenderers.delete(l),h.dispose())});this._hasHighlights=F.someMap(this._materialRenderers,h=>h.hasHighlights);this._bindParameters.hasOccludees=F.someMap(this._materialRenderers,h=>h.hasOccludees);this._hasWater=F.someMap(this._materialRenderers,h=>h.hasWater);this._hasHUDElements=F.someMap(this._materialRenderers,h=>h.requiresSlot(k.RenderSlot.LINE_CALLOUTS_HUD_DEPTH,n.ShaderOutput.Color)||h.requiresSlot(k.RenderSlot.HUD_MATERIAL,n.ShaderOutput.Color)||h.requiresSlot(k.RenderSlot.LABEL_MATERIAL,
n.ShaderOutput.Color));this._requestRender()}};e.updateAnimation=function(a){this._hasAnimations=!1;this._materialRenderers.forEach(c=>this._hasAnimations=c.updateAnimation(a)||this._hasAnimations);return this._hasAnimations=this._renderPlugins.updateAnimation(a)||this._hasAnimations};e.render=function(a,c,d,f,g){this._isRendering=!0;const {camera:h,contentCamera:l}=d;this._renderContext.time=g;this.performanceInfo.startFrame();this._renderOverlay(g);this.performanceInfo.advance(m.PerformanceCategory.OVERLAY);
this._bindParameters.transparencyPassType=H.TransparencyPassType.NONE;g=this._offscreenRendering;g.setupRenderTarget(this.hasWaterReflection);d=ca.create(this._sliceHelper.plane);f===D.Decorations.OFF&&(this._sliceHelper.plane=null);this._rctx.bindFramebuffer(a);h.setGLViewport(this._rctx);this._prepare(h,l);this._renderPlugins.prepareRender();this.performanceInfo.advance(m.PerformanceCategory.PREPARE);var q=this._computeDepthRange(h);this._renderShadowMap(a,h,this._bindParameters.lighting.mainLight.direction,
q);this.performanceInfo.advance(m.PerformanceCategory.SHADOW_MAP);g.initializeFrame(h);this._ensureBindParameters(h,l);this._renderLinearDepth();this.performanceInfo.advance(m.PerformanceCategory.LINEAR_DEPTH);this._accumulateShadows(q,h,l);this.performanceInfo.advance(m.PerformanceCategory.ACCUMULATED_SHADOWS);this._renderNormal();this.performanceInfo.advance(m.PerformanceCategory.NORMALS);this._ensureBindParametersSSR();this._renderSSAO();this.performanceInfo.advance(m.PerformanceCategory.SSAO);
this._renderContext.output=n.ShaderOutput.Color;g.bindFramebuffer();this._renderOpaqueGeometry();this.performanceInfo.advance(m.PerformanceCategory.OPAQUE);q=this._terrainRenderingEnabled&&this._terrainTransparency!==S.TransparencyMode.Opaque;const r=this._multipassTerrain&&q;this._renderTerrainLinearDepth(r);this._setMultipassEnabled(r);this._setTerrainCulling(r);this._renderEdges(I.Transparency.OPAQUE);this.performanceInfo.advance(m.PerformanceCategory.OPAQUE_EDGES);this._offscreenRendering.bindTarget(this._offscreenRendering.currentColorTarget,
this._offscreenRendering.mainDepth);this._renderSlot(k.RenderSlot.VOXEL);this.performanceInfo.advance(m.PerformanceCategory.VOXEL);this._renderHiddenTransparentEdges();const b=this._needsTransparentPass||this._renderPlugins.needsTransparentPass;b&&(this._oitEnabled?this._renderOrderIndependentTransparency(()=>this._renderTransparentGeometry(),!1):this._renderTransparentGeometry());this.performanceInfo.advance(m.PerformanceCategory.TRANSPARENT);this._renderGeometryLinearDepth(r);const v=this._renderHUDVisibility(this._multipassTerrain&&
q);r||this._renderInternalSlot(k.RenderSlot.LINE_CALLOUTS);this.performanceInfo.advance(m.PerformanceCategory.HUD_VISIBILITY);this._renderObjectAndLayerIdColor(c);this.performanceInfo.advance(m.PerformanceCategory.OBJECT_AND_LAYER_ID_COLOR);this._renderEdges(I.Transparency.TRANSPARENT,r);this.performanceInfo.advance(m.PerformanceCategory.TRANSPARENT_EDGES);this._renderTransparentTerrain();q&&v&&(r?this._renderLineCallouts(x.HUDTransparentRenderStyle.Occluded):g.compositeTransparentTerrainOntoHUDVisibility(this._bindParameters),
this._renderHUD(x.HUDTransparentRenderStyle.Occluded,g.framebuffer),this.performanceInfo.advance(m.PerformanceCategory.HUD_OCCLUDED));this.performanceInfo.advance(m.PerformanceCategory.TRANSPARENT_TERRAIN);this._setTerrainCulling(!1);q&&(g.compositeTransparentTerrainOntoMain(this._bindParameters),r&&(this._renderEdges(I.Transparency.OPAQUE),this.performanceInfo.advance(m.PerformanceCategory.OPAQUE_EDGES),b&&(this._oitEnabled?this._renderOrderIndependentTransparency(()=>this._renderTransparentGeometry(),
!1):this._renderTransparentGeometry()),this.performanceInfo.advance(m.PerformanceCategory.TRANSPARENT),this._renderEdges(I.Transparency.TRANSPARENT),this.performanceInfo.advance(m.PerformanceCategory.TRANSPARENT_EDGES)));r&&this._renderLineCallouts(x.HUDTransparentRenderStyle.NotOccluded);this._setMultipassEnabled(!1);this._shadowAccumulator.render(this._bindParameters);g.renderToTargets(()=>{this._renderInternalSlot(k.RenderSlot.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL);this._renderSlot(k.RenderSlot.POSTPROCESSING_ENVIRONMENT_TRANSPARENT);
this._renderSlot(k.RenderSlot.LASERLINES)},g.currentColorTarget,g.mainDepth);this.performanceInfo.advance(m.PerformanceCategory.ENVIRONMENT);this._renderPlugins.needsLaserlineWithContrastControl&&g.renderTmpAndCompositeToMain(()=>this._renderSlot(k.RenderSlot.LASERLINES_CONTRAST_CONTROL),this._bindParameters,J.AlphaMode.PremultipliedAlpha);this.performanceInfo.advance(m.PerformanceCategory.LASER_LINE);this._renderOccluded();this.performanceInfo.advance(m.PerformanceCategory.OCCLUDED);f=(c=f===D.Decorations.ON&&
this._magnifierHelper.enabled)&&t.isNone(a)?this._offscreenRendering.getFramebuffer(this._offscreenRendering.tmpColor,this._offscreenRendering.tmpDepth):a;this._rctx.bindFramebuffer(f);g=this._offscreenRendering.colorTexture;!this._renderAntiAliasing(g)&&t.isSome(g)&&this._compositingHelper.composite(this._bindParameters,g,J.AlphaMode.None);this.performanceInfo.advance(m.PerformanceCategory.ANTIALIASING);this._renderHUD(x.HUDTransparentRenderStyle.NotOccluded,f);this.performanceInfo.advance(m.PerformanceCategory.HUD_NOT_OCCLUDED);
this._renderHighlights(f,this._bindParameters);this.performanceInfo.advance(m.PerformanceCategory.HIGHLIGHTS);c&&this._magnifierHelper.render(this._rctx,this._bindParameters);f!==a&&(this._rctx.bindFramebuffer(a),this._compositingHelper.composite(this._bindParameters,this._offscreenRendering.tmpColorTexture,J.AlphaMode.None));this._disposeOITBuffers();this._renderContext.lastFrameCamera.copyFrom(this._bindParameters.camera);this._sliceHelper.plane=d;this._isRendering=!1;if(this.onPostRender)this.onPostRender();
this.performanceInfo.finishFrame()};e._renderObjectAndLayerIdColor=function(a){t.isSome(a)&&Z("enable-feature:objectAndLayerId-rendering")&&(this._rctx.bindFramebuffer(a),this._offscreenRendering.renderToFBO(()=>this._renderGeometryAndTransparentTerrainPass(n.ShaderOutput.ObjectAndLayerIdColor),[0,0,0,0],!0,!0),this._rctx.bindFramebuffer(a),this._offscreenRendering.renderToFBO(()=>{this._bindParameters.renderTransparentlyOccludedHUD=x.HUDTransparentRenderStyle.NotOccluded;this._renderInternalSlot(k.RenderSlot.HUD_MATERIAL)},
null,!0,!0))};e.finish=function(a){this._hasAnimations||(this._animationTimestep=R.Milliseconds(0));a===D.RenderRequestType.BACKGROUND&&(a=0,this.performanceInfo.gpuSamplingEnabled?a=this.performanceInfo.totalGPUTimeSampler.last:this._rctx.gl.getError(),a=aa.clamp(Math.max(this.performanceInfo.elapsedTime,a)/M.MAXIMUM_ANIMATION_LOAD,M.MAXIMUM_IDLE_ANIMATION_FPS_TIME,M.MINIMUM_IDLE_ANIMATION_FPS_TIME),this._animationTimestep=R.Milliseconds(.9*this._animationTimestep+a*(1-.9)))};e.readDepthPixels=function(a,
c,d){const f=this._offscreenRendering.bindTarget(this._offscreenRendering.linearDepth,this._offscreenRendering.tmpDepth);this._needsLinearDepth||(this._ensureBindParameters(a,a),this._bindParameters.camera.setGLViewport(this._rctx),this._rctx.setClearColor(0,0,0,0),this._rctx.clearSafe(y.ClearBufferBit.COLOR_BUFFER_BIT|y.ClearBufferBit.DEPTH_BUFFER_BIT|y.ClearBufferBit.STENCIL_BUFFER_BIT),this._renderGeometryAndTransparentTerrainPass(n.ShaderOutput.Depth));f.readPixels(c[0],c[1],c[2],c[3],y.PixelFormat.RGBA,
y.PixelType.UNSIGNED_BYTE,d)};e.readHUDVisibility=function(a,c,d,f,g){this._offscreenRendering.bindTarget(this._offscreenRendering.hudVisibility).readPixels(a,c,d,f,y.PixelFormat.RGBA,y.PixelType.UNSIGNED_BYTE,g)};e.readAccumulatedShadow=function(a,c){return this._shadowAccumulator.readAccumulatedShadow(a,c)};e._setMultipassEnabled=function(a){this._bindParameters.multipassTerrain.enabled=this._bindParameters.multipassGeometry.enabled=a};e._setTerrainCulling=function(a){this._bindParameters.multipassTerrain.cullAboveGround=
a};e._renderSlot=function(a){this._bindParameters.slot=a;this._renderPlugins.render()};e._renderEdges=function(a,c=!1){const d=this._edgeView;t.isSome(d)&&d.shouldRender()&&this._offscreenRendering.renderTmpAndCompositeToMain(()=>d.render(this._bindParameters,a),this._bindParameters,J.AlphaMode.Alpha,c)};e._renderShadowMap=function(a,c,d,f){const g=this._shadowMap;g.enabled&&(g.start(c,d,f),this._shadowHighlight.updateParameters(c,d),this._needsShadowHighlight?(this._renderShadowCascades(n.ShaderOutput.ShadowHighlight,
this._shadowMap,h=>g.takeCascadeSnapshotTo(h,O.SnapshotSlot.Highlight)),g.clear(),this._renderShadowCascades(n.ShaderOutput.ShadowExludeHighlight,this._shadowMap,h=>{g.takeCascadeSnapshotTo(h,O.SnapshotSlot.Default);this._renderGeometryAndTransparentTerrainPass(n.ShaderOutput.ShadowHighlight)})):this._renderShadowCascades(n.ShaderOutput.Shadow),g.finish(a),c.setGLViewport(this._rctx))};e._renderShadowCascades=function(a,c=this._shadowMap,d=f=>{}){for(const f of c.getCascades())f.camera.setGLViewport(this._rctx),
this._prepare(f.camera,f.camera),this._renderGeometryAndTransparentTerrainPass(a),d(f)};e._renderLinearDepth=function(){this._needsLinearDepth?this._offscreenRendering.renderToTargets(()=>this._renderGeometryAndTransparentTerrainPass(n.ShaderOutput.Depth),this._offscreenRendering.linearDepth,this._offscreenRendering.tmpDepth,[0,0,0,0],!0,!0):this._offscreenRendering.disposeTarget(this._offscreenRendering.linearDepth);this._bindParameters.linearDepthTexture=this._offscreenRendering.linearDepthTexture};
e._renderTerrainLinearDepth=function(a){a?(a=this._renderContext.output,this._renderContext.output=n.ShaderOutput.Depth,this._offscreenRendering.renderToTargets(()=>this._renderTransparentTerrain(),this._offscreenRendering.terrainLinearDepth,this._offscreenRendering.tmpDepth,[-1E10,-1E10,-1E10,1],!0,!0),this._renderContext.output=a):this._offscreenRendering.disposeTarget(this._offscreenRendering.terrainLinearDepth);this._bindParameters.multipassTerrain.linearDepthTexture=this._offscreenRendering.terrainLinearDepthTexture};
e._renderGeometryLinearDepth=function(a){a?(a=this._renderContext.output,this._offscreenRendering.renderToTargets(()=>this._renderGeometryPass(n.ShaderOutput.Depth),this._offscreenRendering.geometryLinearDepth,this._offscreenRendering.tmpDepth,[1,1,1,1],!0,!0),this._renderContext.output=a):this._offscreenRendering.disposeTarget(this._offscreenRendering.geometryLinearDepth);this._bindParameters.multipassGeometry.linearDepthTexture=this._offscreenRendering.geometryLinearDepthTexture};e._renderNormal=
function(){this._needsNormal?this._offscreenRendering.renderToTargets(()=>{this._renderGeometryAndTransparentTerrainPass(n.ShaderOutput.Normal)},this._offscreenRendering.normal,this._offscreenRendering.tmpDepth,[0,0,0,0],!0,!0):this._offscreenRendering.disposeTarget(this._offscreenRendering.normal)};e._computeDepthRange=function(a){if(!this._needsDepthRange)return T.ZERO;const c=ha.depthRangeFromScene(a,this._content,this._stage.layers);T.union(c,this.renderPlugins.queryDepthRange(a));c.near=Math.max(a.near,
c.near);c.far=Math.min(a.far,c.far);return c};e._renderGeometryAndTransparentTerrainPass=function(a){this._renderContext.output=a;this._renderGeometryPass(a);this._renderTransparentTerrain()};e._renderGeometryPass=function(a){this._renderContext.output=a;this._renderOpaqueGeometry();this._renderTransparentGeometry()};e._renderSSAO=function(){this._ssaoHelper.loading?this._requestRender():this._ssaoHelper.computeSSAO(this._bindParameters,this._offscreenRendering.linearDepthTexture,this._offscreenRendering.normalTexture)};
e._renderOpaqueGeometry=function(){this._renderSlot(k.RenderSlot.INTEGRATED_MESH);this._renderSlot(k.RenderSlot.OPAQUE_TERRAIN);this._renderInternalSlot(k.RenderSlot.OPAQUE_MATERIAL);this._renderSlot(k.RenderSlot.OPAQUE_MATERIAL);this._renderSlot(k.RenderSlot.POSTPROCESSING_ENVIRONMENT_OPAQUE)};e._renderTransparentGeometry=function(){this._renderInternalSlot(k.RenderSlot.TRANSPARENT_MATERIAL);this._renderSlot(k.RenderSlot.TRANSPARENT_MATERIAL)};e._renderTransparentTerrain=function(){this._renderSlot(k.RenderSlot.TRANSPARENT_TERRAIN)};
e._renderHUDVisibility=function(a){let c=!1;this._renderContext.offscreenRenderingHelper&&this._renderContext.offscreenRenderingHelper.renderHUDVisibility(()=>{this._bindParameters.hudVisibilityTexture=this._renderContext.offscreenRenderingHelper.hudVisibilityTexture;c=this._renderInternalSlot(k.RenderSlot.OCCLUSION_PIXELS)},a);return c};e._renderLineCallouts=function(a){this._bindParameters.renderTransparentlyOccludedHUD=a;a===x.HUDTransparentRenderStyle.Occluded?this._offscreenRendering.renderToTargets(()=>
this._renderInternalSlot(k.RenderSlot.LINE_CALLOUTS),this._offscreenRendering.currentColorTarget,this._offscreenRendering.tmpDepth,void 0,!0,!0):this._renderInternalSlot(k.RenderSlot.LINE_CALLOUTS)};e._renderHUD=function(a,c){this._hasHUDElements&&(this._oitEnabled?(this._renderOrderIndependentTransparency(()=>this._renderHUDElements(a),!0),this._rctx.bindFramebuffer(c),this._compositingHelper.composite(this._bindParameters,this._offscreenRendering.hudColorTexture,J.AlphaMode.PremultipliedAlpha)):
a===x.HUDTransparentRenderStyle.Occluded?this._offscreenRendering.renderToTargets(()=>this._renderHUDElements(x.HUDTransparentRenderStyle.Occluded),this._offscreenRendering.currentColorTarget,this._offscreenRendering.tmpDepth,void 0,!0,!0):this._renderHUDElements(a))};e._renderHUDElements=function(a){this._bindParameters.renderTransparentlyOccludedHUD=a;this._renderInternalSlot(k.RenderSlot.LINE_CALLOUTS_HUD_DEPTH);this._renderInternalSlot(k.RenderSlot.HUD_MATERIAL);this._renderInternalSlot(k.RenderSlot.LABEL_MATERIAL)};
e._renderHighlights=function(a,c){if(this._needsHighlight){var d=this._highlight,f=this._offscreenRendering.renderToTargets(()=>{this._renderGeometryAndTransparentTerrainPass(n.ShaderOutput.Highlight);this._rctx.clearSafe(y.ClearBufferBit.DEPTH_BUFFER_BIT);this._renderHUDElements(x.HUDTransparentRenderStyle.Both)},this._offscreenRendering.highlight,this._offscreenRendering.tmpDepth,[0,0,0,0],!0,!0);this._bindParameters.highlightColorTexture=f.colorTexture;this._needsShadowHighlight&&this._shadowHighlight.render(c,
a);d.render(this._bindParameters,f,a)}else this._offscreenRendering.disposeTarget(this._offscreenRendering.highlight)};e._accumulateShadows=function(a,c,d){this._needsShadowCast&&this._shadowAccumulator.renderAccumulation(this._offscreenRendering.linearDepthTexture,a,c,d)};e._renderOrderIndependentTransparency=function(a,c){const d=g=>{this._bindParameters.transparencyPassType=g;this._offscreenRendering.renderOITPass(()=>a(),g,c)},f=this._renderContext.output;this._renderContext.output=n.ShaderOutput.Alpha;
d(H.TransparencyPassType.Alpha);this._renderContext.output=n.ShaderOutput.Color;d(H.TransparencyPassType.Color);d(H.TransparencyPassType.FrontFace);this._offscreenRendering.compositeTransparentOntoOpaque(this._bindParameters,c);this._bindParameters.transparencyPassType=H.TransparencyPassType.NONE;this._renderContext.output=f;this._oitUsed=!0};e._disposeOITBuffers=function(){this._oitUsed||(this._offscreenRendering.disposeTarget(this._offscreenRendering.alphaFloatTarget),this._offscreenRendering.disposeTarget(this._offscreenRendering.colorFloatTarget),
this._offscreenRendering.disposeTarget(this._offscreenRendering.frontFaceTarget));this._oitUsed=!1};e._renderOccluded=function(){let a=0;this._materialRenderers.forEach((h,l)=>{l&&l.isVisible()&&l.renderOccluded===w.RenderOccludedFlag.OccludeAndTransparentStencil&&(a|=l.renderOccluded,K.push(l))});const c=this._offscreenRendering,d=(h,l,q,r,b)=>{0!==(a&l)&&(c.renderToTargets(q,c.tmpColor,c.mainDepth,[0,0,0,0],r,b),c.compositeOccludedOntoMain(this._bindParameters,h))};0!==K.length&&(this._renderInternalSlot(k.RenderSlot.OCCLUDER_MATERIAL,
K),d(.5,w.RenderOccludedFlag.OccludeAndTransparentStencil,()=>this._renderInternalSlot(k.RenderSlot.TRANSPARENT_OCCLUDER_MATERIAL,K),!1,!1),K.length=0);this._materialRenderers.forEach((h,l)=>{l&&l.isVisible()&&(l.renderOccluded===w.RenderOccludedFlag.OccludeAndTransparent||l.renderOccluded===w.RenderOccludedFlag.Transparent||l.renderOccluded===w.RenderOccludedFlag.Opaque)&&(a|=l.renderOccluded,L.push(l))});const f=this._renderPlugins.renderOccludedFlags;if(a|=f){var g=h=>{this._renderContext.renderOccludedMask=
h;f>w.RenderOccludedFlag.Occlude&&this._renderSlot(k.RenderSlot.OCCLUDED_TERRAIN);this._renderInternalSlot(k.RenderSlot.OPAQUE_MATERIAL,L);this._renderInternalSlot(k.RenderSlot.TRANSPARENT_MATERIAL,L);this._renderInternalSlot(k.RenderSlot.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,L);this._renderContext.resetRenderOccludedMask()};this._renderContext.output=n.ShaderOutput.Color;d(.5,w.RenderOccludedFlag.OccludeAndTransparent,()=>g(w.RenderOccludedFlag.OccludeAndTransparent),!0,D.StencilBits.OutlineVisualElementMask);
d(.5,w.RenderOccludedFlag.Transparent,()=>g(w.RenderOccludedFlag.Transparent),!0,D.StencilBits.OutlineVisualElementMask);d(1,w.RenderOccludedFlag.Opaque,()=>g(w.RenderOccludedFlag.Opaque),!0,D.StencilBits.OutlineVisualElementMask);L.length=0}};e._renderAntiAliasing=function(a){if(this._antialiasing){if(this._smaaPass.enable(()=>this._requestRender())&&t.isSome(a))return this._smaaPass.render(a),!0}else this._smaaPass.disable();return!1};e._prepare=function(a,c){this._needsTransparentPass=F.someMap(this._materialRenderers,
d=>d.requiresSlot(k.RenderSlot.TRANSPARENT_MATERIAL,n.ShaderOutput.Color));this._bindParameters.camera=a;this._bindParameters.contentCamera=c};e._ensureBindParameters=function(a,c){this._bindParameters.camera=a;this._bindParameters.contentCamera=c;a=this._renderContext.offscreenRenderingHelper;this._bindParameters.hudVisibilityTexture=a.hudVisibilityTexture;this._bindParameters.mainColorTexture=a.mainColorTexture;this._bindParameters.highlightDepthTexture=a.depthTexture??this._getFallbackDepthTexture()};
e._ensureBindParametersSSR=function(){this.hasWaterReflection?(this._renderContext.lastFrameCamera.equals(this._bindParameters.camera)?this._reprojectionMatrix=G.IDENTITY:(C.invert(U,this._bindParameters.camera.viewMatrix),C.invert(V,this._bindParameters.camera.projectionMatrix),C.multiply(E,U,V),C.multiply(E,this._renderContext.lastFrameCamera.viewMatrix,E),C.multiply(E,this._renderContext.lastFrameCamera.projectionMatrix,E),this._reprojectionMatrix=E),this._bindParameters.ssr.lastFrameColorTexture=
this._offscreenRendering.lastFrameColorTexture):this._bindParameters.ssr.lastFrameColorTexture=null;this._bindParameters.ssr.enabled=this.hasWaterReflection};e._renderInternalSlot=function(a,c){let d=!1;this._bindParameters.slot=a;t.isSome(c)?c.forEach(f=>{f.shouldRender(this._renderContext)&&(f=this._materialRenderers.get(f),t.isSome(f)&&(d=f.render(this._renderContext.output,this._bindParameters)||d))}):this._materialRenderers.forEach((f,g)=>{g.shouldRender(this._renderContext)&&f.render(this._renderContext.output,
this._bindParameters)&&(d=!0)});return d};e._getFallbackDepthTexture=function(){this._fallbackDepthStencilTexture||(this._fallbackDepthStencilTexture=ia.createEmptyDepthTexture(this._rctx));return this._fallbackDepthStencilTexture};Q._createClass(N,[{key:"_bindParameters",get:function(){return this._renderContext.bindParameters}},{key:"hasWater",get:function(){return this._hasWater||this._hasOverlayWater}},{key:"hasWaterReflection",get:function(){return this.hasWater&&this._waterReflectionEnabled}},
{key:"updating",get:function(){return this._antialiasing&&this._smaaPass.updating||t.isSome(this._edgeView)&&this._edgeView.updating||this._shadowAccumulator.running||!this.isCameraFinal}},{key:"edgeView",get:function(){return this._edgeView}},{key:"isCameraFinal",get:function(){return C.equals(this._bindParameters.ssr.reprojectionMatrix,G.IDENTITY)}},{key:"_reprojectionMatrix",set:function(a){X.update(this._bindParameters.ssr.reprojectionMatrix,a)&&this.notifyChange("isCameraFinal")}},{key:"shadowsEnabled",
get:function(){return!!this._shadowMap?.enabled}},{key:"hasSlicePlane",get:function(){return!!this._sliceHelper.plane}},{key:"renderPlugins",get:function(){return this._renderPlugins}},{key:"_hasOITSupport",get:function(){return this._rctx.driverTest.floatBufferBlendWorking}},{key:"animationTimestep",get:function(){return this._animationTimestep}},{key:"_needsLinearDepth",get:function(){return this._ssaoHelper.ready||this._renderPlugins.needsLinearDepth||this._hasWater&&this._waterReflectionEnabled||
this._needsShadowHighlight||this._needsShadowCast}},{key:"_needsNormal",get:function(){return this._ssaoHelper.ready}},{key:"_needsDepthRange",get:function(){return this._shadowMap.enabled||this._needsShadowCast}},{key:"_needsHighlight",get:function(){return this._hasHighlights||this._renderPlugins.needsHighlight}},{key:"_needsShadowHighlight",get:function(){return this._shadowMap.enabled&&this._shadowHighlight.isVisible&&this._needsHighlight}},{key:"_needsShadowCast",get:function(){return this._shadowAccumulator.isAccumulating}},
{key:"gpuMemoryUsage",get:function(){return{offscreen:this._offscreenRendering?.gpuMemoryUsage??0,highlights:(this._highlight?.gpuMemoryUsage??0)+(this._shadowHighlight?.gpuMemoryUsage??0),shadows:this._shadowMap?.gpuMemoryUsage??0,ssao:this._ssaoHelper?.gpuMemoryUsage??0}}},{key:"test",get:function(){const a=this;return{offscreen:this._offscreenRendering,shadowMap:this._shadowMap,ssao:this._ssaoHelper,highlight:this._highlight,lighting:this._bindParameters.lighting,materialRenderers:this._materialRenderers,
shadowAccumulator:this._shadowAccumulator,weatherIsFading:this._bindParameters.cloudsFade.isFading,getFramebufferTexture:c=>{switch(c){case p.FramebufferId.Color:return a._offscreenRendering.colorTexture;case p.FramebufferId.LinearDepth:return a._offscreenRendering.linearDepthTexture;case p.FramebufferId.Normals:return a._offscreenRendering.normalTexture;case p.FramebufferId.ShadowMap:return a._shadowMap.depthTexture;case p.FramebufferId.HudVisibility:return a._offscreenRendering.hudVisibilityTexture;
case p.FramebufferId.Highlight:return a._offscreenRendering.highlightTexture}}}}}]);return N}(W);z.__decorate([B.property()],p.Renderer.prototype,"_shadowAccumulator",void 0);z.__decorate([B.property()],p.Renderer.prototype,"_smaaPass",void 0);z.__decorate([B.property()],p.Renderer.prototype,"_antialiasing",void 0);z.__decorate([B.property()],p.Renderer.prototype,"_edgeView",void 0);z.__decorate([B.property()],p.Renderer.prototype,"updating",null);z.__decorate([B.property()],p.Renderer.prototype,
"isCameraFinal",null);p.Renderer=z.__decorate([ba.subclass("esri.views.3d.webgl-engine.lib.Renderer")],p.Renderer);p.FramebufferId=void 0;(function(u){u[u.Color=0]="Color";u[u.LinearDepth=1]="LinearDepth";u[u.Normals=2]="Normals";u[u.ShadowMap=3]="ShadowMap";u[u.HudVisibility=4]="HudVisibility";u[u.Highlight=5]="Highlight"})(p.FramebufferId||(p.FramebufferId={}));const L=[],K=[],V=G.create(),U=G.create(),E=G.create();Object.defineProperties(p,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});