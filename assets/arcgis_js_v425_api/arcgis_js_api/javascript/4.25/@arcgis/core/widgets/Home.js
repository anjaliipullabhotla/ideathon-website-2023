/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as o}from"../chunks/tslib.es6.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/ensureType.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";import t from"./Widget.js";import i from"./Home/HomeViewModel.js";import{a as r}from"../chunks/accessibleHandler.js";import{m}from"../chunks/messageBundle.js";import{v as n}from"../chunks/vmEvent.js";import{t as p}from"../chunks/jsxFactory.js";import"../chunks/widgetUtils.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/maybe.js";import"../chunks/string.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../core/Error.js";import"../chunks/tracking.js";import"../intl.js";import"../chunks/number.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../chunks/messages.js";import"../core/promiseUtils.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"../chunks/domUtils.js";import"../core/Evented.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/ArrayPool.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/Promise.js";import"../core/reactiveUtils.js";import"../chunks/uuid.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";import"../Viewpoint.js";import"../Camera.js";import"../core/Clonable.js";import"../chunks/Cyclical.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/common.js";import"../core/JSONSupport.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"./support/GoTo.js";let c=class extends t{constructor(o,s){super(o,s),this.iconClass="esri-icon-home",this.messages=null,this.messagesCommon=null,this.viewModel=new i}get goToOverride(){return this.viewModel.goToOverride}set goToOverride(o){this.viewModel.goToOverride=o}get label(){return this.messages?.widgetLabel??""}set label(o){this._overrideIfSome("label",o)}get view(){return this.viewModel.view}set view(o){this.viewModel.view=o}get viewpoint(){return this.viewModel.viewpoint}set viewpoint(o){this.viewModel.viewpoint=o}cancelGo(){this.viewModel.cancelGo()}go(){return this.viewModel.go()}render(){const o=this.viewModel?.state,{messagesCommon:s,messages:e}=this,t={"esri-disabled":"disabled"===o};return p("div",{bind:this,class:this.classes("esri-home esri-widget--button esri-widget",t),role:"button",tabIndex:0,onclick:this._go,onkeydown:this._go,"aria-label":e.widgetLabel,title:"going-home"===o?s.cancel:e.title},this.renderIcon())}renderIcon(){const o=this.viewModel?.state,s={"esri-icon":!0,[this.iconClass]:"going-home"!==o,"esri-icon-loading-indicator":"going-home"===o,"esri-rotating":"going-home"===o};return p("span",{"aria-hidden":"true",class:this.classes(s)})}_go(){const{viewModel:o}=this;"going-home"===o.state?o.cancelGo():o.go()}};o([s()],c.prototype,"goToOverride",null),o([s()],c.prototype,"iconClass",void 0),o([s()],c.prototype,"label",null),o([s(),m("esri/widgets/Home/t9n/Home")],c.prototype,"messages",void 0),o([s(),m("esri/t9n/common")],c.prototype,"messagesCommon",void 0),o([s()],c.prototype,"uiStrings",void 0),o([s()],c.prototype,"view",null),o([s({type:i}),n("go")],c.prototype,"viewModel",void 0),o([s()],c.prototype,"viewpoint",null),o([r()],c.prototype,"_go",null),c=o([e("esri.widgets.Home")],c);const l=c;export{l as default};
