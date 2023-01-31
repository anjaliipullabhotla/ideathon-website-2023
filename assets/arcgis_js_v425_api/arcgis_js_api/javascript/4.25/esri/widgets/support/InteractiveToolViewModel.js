// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Accessor ../../core/Handles ../../core/Logger ../../core/maybe ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass".split(" "),function(d,l,e,n,p,q,c,k,f,u,v,r){d.InteractiveToolViewModel=function(m){function h(b){var a=m.call(this,b)||this;a.tool=null;a._baseHandles=new p;a._loggedUnsupportedErrorOnce=
!1;a.logger=q.getLogger(a.declaredClass);b&&null!=b.visible&&(a.visible=b.visible);return a}l._inheritsLoose(h,m);var g=h.prototype;g.initialize=function(){this._baseHandles.add(k.watch(()=>({ready:c.isSome(this.view)&&this.view.ready,supported:this.supported}),({ready:b,supported:a})=>{!b||a||this._loggedUnsupportedErrorOnce||(this.logError(this.unsupportedErrorMessage),this._loggedUnsupportedErrorOnce=!0)},k.syncAndInitial))};g.destroy=function(){this.removeTool();this.view=null;this._baseHandles=
c.destroyMaybe(this._baseHandles)};g.createTool=function(b={interactive:!1}){this.removeTool();if(!c.isNone(this.view)&&this.view.ready&&this.supported){var a=this.constructTool();a.created?(this._set("tool",a),this.view.tools.add(a)):b.interactive?(this._set("tool",a),this.view.addAndActivateTool(a),k.when(()=>a.created,()=>{a.active&&c.isSome(this.view)&&(this.view.activeTool=null)},{initial:!0,once:!0})):a.destroy()}};g.removeTool=function(){const b=this.tool;if(!c.isNone(b)){var a=c.applySome(this.view,
t=>t.tools);c.isSome(a)?a.remove(b):b.destroy();this._set("tool",null)}};g.logError=function(...b){this.logger.error(...b)};l._createClass(h,[{key:"active",get:function(){return c.isSome(this.tool)&&this.tool.active}},{key:"disabled",get:function(){return c.isNone(this.view)||!this.view.ready||!this.supported}},{key:"supported",get:function(){return c.isNone(this.view)||this.view.type===this.supportedViewType}},{key:"view",get:function(){return this._get("view")},set:function(b){b!==this.view&&(this.removeTool(),
this._set("view",b),this._baseHandles.remove("tools"),c.isNone(b)||this._baseHandles.add(b.tools.on("after-remove",a=>{a.item===this.tool&&this._set("tool",null)}),"tools"))}},{key:"visible",set:function(b){this._set("visible",b);c.isSome(this.tool)&&(this.tool.visible=b)}}]);return h}(n);e.__decorate([f.property({constructOnly:!0})],d.InteractiveToolViewModel.prototype,"tool",void 0);e.__decorate([f.property()],d.InteractiveToolViewModel.prototype,"active",null);e.__decorate([f.property()],d.InteractiveToolViewModel.prototype,
"disabled",null);e.__decorate([f.property()],d.InteractiveToolViewModel.prototype,"supported",null);e.__decorate([f.property({value:null})],d.InteractiveToolViewModel.prototype,"view",null);e.__decorate([f.property({type:Boolean,value:!0})],d.InteractiveToolViewModel.prototype,"visible",null);d.InteractiveToolViewModel=e.__decorate([r.subclass("esri.widgets.support.InteractiveToolViewModel")],d.InteractiveToolViewModel);Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});