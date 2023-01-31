/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import{property as t}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/ensureType.js";import{subclass as s}from"../core/accessorSupport/decorators/subclass.js";import o from"./Widget.js";import n from"./Expand/ExpandViewModel.js";import{isWidget as r,hasDomNode as i}from"./support/widget.js";import{t as a}from"../chunks/jsxFactory.js";import{m as p}from"../chunks/messageBundle.js";import{a as d}from"../chunks/accessibleHandler.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/maybe.js";import"../chunks/string.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../core/Error.js";import"../chunks/tracking.js";import"../intl.js";import"../chunks/number.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../chunks/messages.js";import"../core/promiseUtils.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"../chunks/domUtils.js";import"../core/Evented.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/ArrayPool.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/Promise.js";import"../core/reactiveUtils.js";import"../chunks/uuid.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/projector.js";import"../chunks/widgetUtils.js";import"../chunks/jsxWidgetSupport.js";import"../chunks/vmEvent.js";import"../chunks/themeUtils.js";let l=class extends o{constructor(e,t){super(e,t),this.closeOnEsc=!0,this.collapseTooltip="",this.content="",this.expandTooltip="",this.iconNumber=0,this.messages=null,this.messagesCommon=null,this.mode="auto",this.viewModel=new n,this._handleKeyDown=e=>{const{closeOnEsc:t,_toggleButtonEl:s,expanded:o}=this;o&&t&&e.target!==s&&"Escape"===e.key&&("function"==typeof t?t(e):t)&&(this.expanded=!1,s?.focus())}}get contentId(){return`${this.id}_controls_content`}get expandTitle(){const{expanded:e,messagesCommon:t,collapseTooltip:s,expandTooltip:o}=this;return e?s||t.collapse:o||t.expand}get autoCollapse(){return this.viewModel.autoCollapse}set autoCollapse(e){this.viewModel.autoCollapse=e}get collapseIconClass(){return"esri-icon-collapse"}set collapseIconClass(e){this._overrideIfSome("collapseIconClass",e)}get expanded(){return this.viewModel.expanded}set expanded(e){this.viewModel.expanded=e}get expandIconClass(){return r(this.content)?this.content.iconClass:"esri-icon-expand"}set expandIconClass(e){this._overrideIfSome("expandIconClass",e)}get group(){return this.viewModel.group}set group(e){this.viewModel.group=e}get label(){return this.messages?.widgetLabel??""}set label(e){this._overrideIfSome("label",e)}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}expand(){this.viewModel.expanded=!0}collapse(){this.viewModel.expanded=!1}toggle(){this.viewModel.expanded=!this.viewModel.expanded}render(){const{mode:e}=this,t={"esri-expand--auto":"auto"===e,"esri-expand--drawer":"drawer"===e,"esri-expand--floating":"floating"===e};return a("div",{class:this.classes("esri-expand esri-widget",t),onkeydown:this._handleKeyDown},this.renderMask(),this.renderContainer())}renderContainer(){const{expanded:e}=this,t={"esri-expand__container--expanded":e};return a("div",{class:this.classes("esri-expand__container",t)},this.renderPanel(),this.renderContent())}renderMask(){const{expanded:e}=this,t={"esri-expand__mask--expanded":e};return a("div",{bind:this,onclick:this._toggle,class:this.classes("esri-expand__mask",t)})}renderBadgeNumber(){const{expanded:e,iconNumber:t}=this;return t&&!e?a("span",{key:"expand__icon-number",class:"esri-expand__icon-number"},t):null}renderPanelNumber(){const{iconNumber:e,expanded:t}=this;return e&&t?a("span",{key:"expand__expand-icon-number",class:this.classes("esri-expand__icon-number","esri-expand__icon-number--expanded")},e):null}renderIcon(){const{collapseIconClass:e,expandIconClass:t,expanded:s}=this,o={"esri-expand__icon--expanded":s,[e]:s,[t]:!s};return e===t&&(o[e]=!0),a("span",{"aria-hidden":"true",class:this.classes("esri-collapse__icon",o)})}renderTitle(){return a("span",{class:"esri-icon-font-fallback-text"},this.expandTitle)}renderExpandButton(){const{expanded:e,expandTitle:t,contentId:s}=this;return a("div",{afterCreate:this._storeToggleButtonEl,"aria-controls":s,"aria-expanded":e?"true":"false",bind:this,class:"esri-widget--button",onclick:this._toggle,onkeydown:this._toggle,role:"button",tabindex:"0",title:t},this.renderBadgeNumber(),this.renderIcon(),this.renderTitle())}renderPanel(){return a("div",{class:"esri-expand__panel"},this.renderExpandButton(),this.renderPanelNumber())}renderContent(){const{expanded:e,contentId:t,content:s}=this,o={"esri-expand__content--expanded":e},n={id:t,role:"region",class:this.classes("esri-expand__content",o)};return"string"==typeof s?a("div",{key:"content__string",innerHTML:s,...n}):r(s)?a("div",{key:"content__widget",...n},s.render()):s instanceof HTMLElement?a("div",{key:"content__html-element",bind:s,afterCreate:this._attachToNode,...n}):i(s)?a("div",{key:"content__node",bind:s.domNode,afterCreate:this._attachToNode,...n}):null}_toggle(){this.toggle()}_attachToNode(e){e.appendChild(this)}_storeToggleButtonEl(e){this._toggleButtonEl=e}};e([t({readOnly:!0})],l.prototype,"contentId",null),e([t({readOnly:!0})],l.prototype,"expandTitle",null),e([t()],l.prototype,"autoCollapse",null),e([t()],l.prototype,"closeOnEsc",void 0),e([t()],l.prototype,"collapseIconClass",null),e([t()],l.prototype,"collapseTooltip",void 0),e([t()],l.prototype,"content",void 0),e([t()],l.prototype,"expanded",null),e([t()],l.prototype,"expandIconClass",null),e([t()],l.prototype,"expandTooltip",void 0),e([t()],l.prototype,"group",null),e([t()],l.prototype,"iconNumber",void 0),e([t()],l.prototype,"label",null),e([t(),p("esri/widgets/Expand/t9n/Expand")],l.prototype,"messages",void 0),e([t(),p("esri/t9n/common")],l.prototype,"messagesCommon",void 0),e([t()],l.prototype,"mode",void 0),e([t()],l.prototype,"view",null),e([t({type:n})],l.prototype,"viewModel",void 0),e([d()],l.prototype,"_toggle",null),l=e([s("esri.widgets.Expand")],l);const c=l;export{c as default};
