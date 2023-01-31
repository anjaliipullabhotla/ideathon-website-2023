// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/Evented ../../../../core/has ../../../../core/Logger ../../../../core/maybe ../../../../core/reactiveUtils ../../../../core/scheduling ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../collections/Component/ComponentObjectCollection ../core/shaderTechnique/ShaderTechniqueRepository ../lib/AutoDisposable ../lib/basicInterfaces ../lib/CompositingHelper ../lib/depthRangeUtils ../lib/GLMaterialRepository ../lib/MagnifierHelper ../lib/ObjectAndLayerIdRenderHelper ../lib/Renderer ../lib/RenderingContext ../lib/TextureRepository ../materials/StippleTextureRepository ../materials/internal/WaterTextureRepository ./contextCache ./requireUtils ./ScreenshotManager ./testUtils ../../../support/RenderState ../../../webgl/context-util".split(" "),
function(f,u,k,E,F,v,y,m,z,G,q,X,Y,H,I,J,l,n,K,L,M,N,O,P,A,Q,R,S,T,U,B,V,C,W){f.RenderView=function(w){function r(b){var a=w.call(this,{})||this;a.events=new F;a.waterTextureRepository=new S.WaterTextureRepository;a._magnifierHelper=new N.MagnifierHelper;a._objectAndLayerIdRenderHelper=v("enable-feature:objectAndLayerId-rendering")?new O.ObjectAndLayerIdRenderHelper:null;a._needsUpdate=!0;a._needsRender=!0;a._idleSuspend=!0;a._needsWaterReflectionUpdate=!1;a._lastAnimationUpdate=0;a._container=b.container;
a._viewingMode=b.viewingMode;a._initializeContext(b);z.watch(()=>a.waterTextureRepository?.updating,()=>a.requestRender(),z.initial);a._magnifierHelper.events.on("request-render",()=>a.requestRender());a._stippleTextureRepository=new R.StippleTextureRepository(a._rctx);a._shaderTechniqueRepository=new J.ShaderTechniqueRepository({rctx:a._rctx,viewingMode:b.viewingMode,stippleTextureRepository:a._stippleTextureRepository,waterTextureRepository:a.waterTextureRepository});a._textureRepository=new Q.TextureRepository(b,
a._shaderTechniqueRepository,a._rctx);a._textureRepository.events.on("changed",d=>a.requestRender(d));a._materialRepository=new M.GLMaterialRepository(a._textureRepository,a._shaderTechniqueRepository,()=>a.requestRender(),()=>a.requestRender());a._compositingHelper=new K(a._rctx,a._shaderTechniqueRepository);a._renderer=new P.Renderer(a._materialRepository,a._textureRepository,a._shaderTechniqueRepository,a._rctx,a._compositingHelper,a._magnifierHelper,d=>a.requestRender(d),(d,e)=>b.schedule(d,e),
b);a._screenshotManager=new B.ScreenshotManager(a._rctx,{renderScene:(d,e,c,g,p)=>a._renderer.render(d,e,{camera:c,contentCamera:c,mode:C.RenderState.IDLE},g,p),requestRenderScene:d=>a.requestRender(d),prepareOverlay:()=>b.options.screenshot.prepareOverlay(),renderOverlay:(d,e)=>b.options.screenshot.renderOverlay(d,e)},d=>a.events.emit("force-camera-for-screenshot",d),()=>a._renderer.disposeOffscreenBuffers());a._registerFrameTask(b);return a}u._inheritsLoose(r,w);var h=r.prototype;h.normalizeCtorArgs=
function(){return{}};h.dispose=function(){this._container.contains(this._canvas)&&this._container.removeChild(this._canvas);this._frameTask=m.removeMaybe(this._frameTask);this._shaderTechniqueRepository=m.disposeMaybe(this._shaderTechniqueRepository);w.prototype.dispose.call(this);this._rctx=this._tmpDepthBuffer=null};h.requestRender=function(b=n.RenderRequestType.UPDATE){this._needsRender=!0;b===n.RenderRequestType.UPDATE&&(this._needsUpdate=!0)};h.ensureEdgeView=function(){return this._renderer.ensureEdgeView()};
h.setRenderParameters=function(b){void 0!==b.idleSuspend&&this._idleSuspend!==!!b.idleSuspend&&(this._idleSuspend=!!b.idleSuspend,this.requestRender());this._renderer.setRenderParameters(b)};h.modify=function(b){this._renderer.modify(b);b.clear()};h.takeScreenshot=function(b){return this._screenshotManager.takeScreenshot(b).then(a=>a[0])};h.takeScreenshotWithOID=function(b){b.objectAndLayerIdColor=!0;return this._screenshotManager.takeScreenshot(b)};h.getAlpha=function(){return this._rctx.contextAttributes.alpha};
h.readAccumulatedShadow=function(b){return this._renderer.readAccumulatedShadow(b[0],b[1])};h.readHUDVisibility=function(b,a,d,e,c){this._renderer.readHUDVisibility(b,a,d,e,c)};h.getMinimalDepthForArea=function(b,a,d,e,c,g=c){g=e.constrainWindowSize(a,d,c*e.pixelRatio,g*e.pixelRatio);const p=this._ensureDepthBuffer(g);this._renderer.readDepthPixels(e,g,p);c=Number.MAX_VALUE;for(let x=0;x<g[2]*g[3];x++){const t=L.textureToDepth(4*x,p,e.nearFar);c>t&&t!==e.nearFar[0]&&t!==e.nearFar[1]&&(c=t)}m.isSome(b)&&
(b=b.pickDepth(a*e.pixelRatio,d*e.pixelRatio,e),m.isSome(b)&&c>b&&b!==e.nearFar[0]&&b!==e.nearFar[1]&&(c=b));return c===Number.MAX_VALUE?void 0:c};h._ensureDepthBuffer=function(b){b=4*b[2]*b[3];if(m.isNone(this._tmpDepthBuffer)||this._tmpDepthBuffer.byteLength<b)this._tmpDepthBuffer=new Uint8Array(b);return this._tmpDepthBuffer};h.reloadShaders=function(){var b=u._asyncToGenerator(function*(){U.removeLoadedShaderModules();yield this._shaderTechniqueRepository.reloadAll();this.requestRender()});return function(){return b.apply(this,
arguments)}}();h._registerFrameTask=function(b){const a=b.state;let d=!1,e=n.RenderRequestType.BACKGROUND,c=!1;this._frameTask=G.addFrameTask({preRender:({time:g})=>{d=this.updating;e=this._needsUpdate?n.RenderRequestType.UPDATE:n.RenderRequestType.BACKGROUND;b.processSyncLayers();if(g-this._lastAnimationUpdate>this.animationTimestep||m.isSome(a.forcedAnimationTime)||d||this._needsRender)g=m.unwrapOr(a.forcedAnimationTime,g),this._renderer.updateAnimation({camera:a.camera,time:g})&&this.requestRender(n.RenderRequestType.BACKGROUND),
this._lastAnimationUpdate=g},render:({time:g})=>{if((this._needsRender||!this._idleSuspend||!this._renderer.isCameraFinal||this._needsWaterReflectionUpdate)&&0<a.camera.fullWidth&&0<a.camera.fullHeight){const p=this._needsUpdate&&this._idleSuspend&&this._renderer.isCameraFinal;this._needsWaterReflectionUpdate=this._needsUpdate=this._needsRender=!1;this._renderer.render(null,null,a,n.Decorations.ON,g);c=!0;p&&this._renderer.hasWaterReflection&&(this.requestRender(n.RenderRequestType.BACKGROUND),this._needsWaterReflectionUpdate=
!0)}},update:({time:g})=>{const p=new B.ScreenshotContext(a.camera,this._renderer.hasSlicePlane||this._magnifierHelper.enabled);this._textureRepository.update();this._screenshotManager.update(p,g)},finish:()=>{c&&(this._renderer.finish(a.mode===C.RenderState.IDLE?e:n.RenderRequestType.UPDATE),c=!1)}})};h._initializeContext=function(b){const a=b.options;this._canvas=a.canvas;this._canvas||(this._canvas=document.createElement("canvas"));this._canvas.setAttribute("style","width: 100%; height:100%; display:block;");
const d=W.createContextOrErrorHTML("3d",this._canvas,{alpha:a.alpha||!1,premultipliedAlpha:!0,antialias:!1,depth:!0,stencil:null==a.stencil?!0:a.stencil,powerPreference:"high-performance",preserveDrawingBuffer:a.preserveDrawingBuffer??!1});m.isNone(d)?(b=v("esri-force-webgl"),y.getLogger(this.declaredClass).error("A WebGL context with the requested version ("+b?b:"automatic) could not be created.")):(this._rctx=this._newRenderingContext(d,b),this._loadShaderOnlyExtensions(),!a.alpha&&this._rctx.contextAttributes.alpha&&
y.getLogger(this.declaredClass).error("WebGL context has alpha channel even though no alpha channel was requested"),!this._rctx.contextAttributes.alpha&&11<=v("safari")&&(this._container.style.backgroundColor="black"),this._container.appendChild(this._canvas))};h._newRenderingContext=function(b,a){const d={disabledExtensions:a.options.deactivatedWebGLExtensions||{},debugWebGLExtensions:a.options.debugWebGLExtensions||{},maxAnisotropy:8},e=(c,g)=>a.resourceController.memoryController.newCache(c,g);
if(V.contextCache.enabled){let c=D.get(b);if(c)return c.configure(d),c.newCache=e,c.ref(),c;c=new A.RenderingContext(b,d,e);D.set(b,c);c.ref();return c}return new A.RenderingContext(b,d,e)};h._loadShaderOnlyExtensions=function(){this._rctx.capabilities.enable("standardDerivatives");this._rctx.capabilities.enable("shaderTextureLOD");this._rctx.capabilities.enable("textureFloat")};h._getObjectAndLayerIdColor=function(b){return this._objectAndLayerIdRenderHelper?this._objectAndLayerIdRenderHelper.getObjectAndLayerIdColor(b):
null};u._createClass(r,[{key:"performanceInfo",get:function(){const b=this._rctx.gl;return{renderer:this._renderer.performanceInfo,textureMemory:void 0!==b.getUsedTextureMemory?b.getUsedTextureMemory():void 0,renderbufferMemory:void 0!==b.getUsedRenderbufferMemory?b.getUsedRenderbufferMemory():void 0,VBOMemory:void 0!==b.getUsedVBOMemory?b.getUsedVBOMemory():void 0}}},{key:"updating",get:function(){return this._needsUpdate||this._needsWaterReflectionUpdate||this._renderer.updating||this._textureRepository.updating||
this.waterTextureRepository.updating||this._magnifierHelper.updating}},{key:"edgeView",get:function(){return this._renderer.edgeView}},{key:"textureRepository",get:function(){return this._textureRepository}},{key:"compositingHelper",get:function(){return this._compositingHelper}},{key:"magnifier",set:function(b){this._magnifierHelper.magnifier=b}},{key:"renderingContext",get:function(){return this._rctx}},{key:"capabilities",get:function(){return this._rctx.capabilities}},{key:"canvas",get:function(){return this._canvas}},
{key:"shadowsEnabled",get:function(){return this._renderer.shadowsEnabled}},{key:"renderPlugins",get:function(){return this._renderer.renderPlugins}},{key:"test",get:function(){return{renderer:this._renderer}}},{key:"gpuMemoryUsage",get:function(){return this._renderer.gpuMemoryUsage}},{key:"animationTimestep",get:function(){return this._renderer.animationTimestep}},{key:"componentObjectCollection",get:function(){m.isNone(this._componentObjectCollection)&&(this._componentObjectCollection=new I.ComponentObjectCollection(this._renderer.renderPassManager,
this._viewingMode));return this._componentObjectCollection},set:function(b){this._componentObjectCollection=b}}]);return r}(l.AutoDisposableMixin(E));k.__decorate([q.property({type:Boolean,readOnly:!0})],f.RenderView.prototype,"updating",null);k.__decorate([l.autoDispose()],f.RenderView.prototype,"_rctx",void 0);k.__decorate([l.autoDispose()],f.RenderView.prototype,"_container",void 0);k.__decorate([l.autoDispose()],f.RenderView.prototype,"_canvas",void 0);k.__decorate([l.autoDispose()],f.RenderView.prototype,
"_stippleTextureRepository",void 0);k.__decorate([l.autoDispose(),q.property()],f.RenderView.prototype,"waterTextureRepository",void 0);k.__decorate([l.autoDispose(),q.property()],f.RenderView.prototype,"_magnifierHelper",void 0);k.__decorate([q.property()],f.RenderView.prototype,"_objectAndLayerIdRenderHelper",void 0);k.__decorate([l.autoDispose(),q.property()],f.RenderView.prototype,"_textureRepository",void 0);k.__decorate([l.autoDispose()],f.RenderView.prototype,"_compositingHelper",void 0);k.__decorate([l.autoDispose()],
f.RenderView.prototype,"_renderer",void 0);k.__decorate([l.autoDispose()],f.RenderView.prototype,"_screenshotManager",void 0);k.__decorate([l.autoDispose()],f.RenderView.prototype,"componentObjectCollection",null);k.__decorate([l.autoDispose()],f.RenderView.prototype,"_componentObjectCollection",void 0);k.__decorate([q.property()],f.RenderView.prototype,"_needsUpdate",void 0);k.__decorate([q.property()],f.RenderView.prototype,"_needsWaterReflectionUpdate",void 0);f.RenderView=k.__decorate([H.subclass("esri.views.3d.webgl-engine.parts.RenderView")],
f.RenderView);const D=T.getContextCache();Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});