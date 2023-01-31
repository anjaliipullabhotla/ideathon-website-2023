/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{p as t,H as i,s as e,l as a,h as s,a as o}from"../widgets/Widget.js";import{d as c}from"./icon.js";import"./tslib.es6.js";import"../intl.js";import"./number.js";import"./jsonMap.js";import"./object.js";import"../core/lang.js";import"./maybe.js";import"./locale.js";import"./Logger.js";import"../config.js";import"./string.js";import"./messages.js";import"../core/Error.js";import"../core/promiseUtils.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"./assets.js";import"./domUtils.js";import"../core/Evented.js";import"../core/Accessor.js";import"../core/Handles.js";import"./get.js";import"./utils.js";import"./handleUtils.js";import"./metadata.js";import"./ArrayPool.js";import"../core/accessorSupport/decorators/subclass.js";import"./tracking.js";import"./ensureType.js";import"../core/accessorSupport/decorators/property.js";import"./watch.js";import"../core/scheduling.js";import"./nextTick.js";import"../core/Promise.js";import"../core/reactiveUtils.js";import"./uuid.js";import"../core/accessorSupport/decorators/cast.js";import"./projector.js";import"./widgetUtils.js";import"./jsxWidgetSupport.js";import"./observers.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.97
 */var n;!function(t){t.valid="check-circle",t.invalid="exclamation-mark-triangle",t.idle="information"}(n||(n={}));const r=t(class extends i{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.active=!1,this.scale="m",this.status="idle"}handleIconEl(){this.requestedIcon=e(n,this.icon,this.status)}connectedCallback(){this.status=a(this.el,"status",this.status),this.scale=a(this.el,"scale",this.scale),this.requestedIcon=e(n,this.icon,this.status)}render(){const t=!this.active;return s(o,{"calcite-hydrated-hidden":t},this.renderIcon(this.requestedIcon),s("slot",null))}renderIcon(t){if(t)return s("calcite-icon",{class:"calcite-input-message-icon",icon:t,scale:"s"})}get el(){return this}static get watchers(){return{status:["handleIconEl"],icon:["handleIconEl"]}}static get style(){return"@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([active][scale=m]),:host([active][scale=l]){--calcite-input-message-spacing-value:0.25rem}:host{visibility:hidden;box-sizing:border-box;display:flex;block-size:0px;inline-size:100%;align-items:center;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);opacity:0;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host([active]){visibility:visible;block-size:auto;opacity:1;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host([active][scale=m]),:host([active][scale=l]){margin-block-start:var(--calcite-input-message-spacing-value)}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.calcite-input-message-icon{pointer-events:none;display:inline-flex;flex-shrink:0;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;margin-inline-end:0.5rem}:host([status=invalid]) .calcite-input-message-icon{color:var(--calcite-ui-danger)}:host([status=warning]) .calcite-input-message-icon{color:var(--calcite-ui-warning)}:host([status=valid]) .calcite-input-message-icon{color:var(--calcite-ui-success)}:host([status=idle]) .calcite-input-message-icon{color:var(--calcite-ui-brand)}:host([status][active]){color:var(--calcite-ui-text-1)}:host([status][scale=s]){font-size:var(--calcite-font-size--3);line-height:0.75rem}:host([status][scale=m]){margin-block-start:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([status][scale=l]){margin-block-start:0.25rem;font-size:var(--calcite-font-size--1);line-height:1rem}"}},[1,"calcite-input-message",{active:[516],icon:[520],scale:[1537],status:[1537],type:[513]}]);function l(){"undefined"!=typeof customElements&&["calcite-input-message","calcite-icon"].forEach((t=>{switch(t){case"calcite-input-message":customElements.get(t)||customElements.define(t,r);break;case"calcite-icon":customElements.get(t)||c()}}))}l();const m=r,p=l;export{m as CalciteInputMessage,p as defineCustomElement};
