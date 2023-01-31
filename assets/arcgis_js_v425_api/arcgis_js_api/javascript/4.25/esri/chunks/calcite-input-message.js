// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","./componentsUtils","./icon"],function(d,b,g){function e(){"undefined"!==typeof customElements&&["calcite-input-message","calcite-icon"].forEach(a=>{switch(a){case "calcite-input-message":customElements.get(a)||customElements.define(a,f);break;case "calcite-icon":customElements.get(a)||g.defineCustomElement()}})}var c;(function(a){a.valid="check-circle";a.invalid="exclamation-mark-triangle";a.idle="information"})(c||(c={}));const f=b.proxyCustomElement(class extends b.H{constructor(){super();
this.__registerHost();this.__attachShadow();this.active=!1;this.scale="m";this.status="idle"}handleIconEl(){this.requestedIcon=b.setRequestedIcon(c,this.icon,this.status)}connectedCallback(){this.status=b.getElementProp(this.el,"status",this.status);this.scale=b.getElementProp(this.el,"scale",this.scale);this.requestedIcon=b.setRequestedIcon(c,this.icon,this.status)}render(){return b.h(b.Host,{"calcite-hydrated-hidden":!this.active},this.renderIcon(this.requestedIcon),b.h("slot",null))}renderIcon(a){if(a)return b.h("calcite-icon",
{class:"calcite-input-message-icon",icon:a,scale:"s"})}get el(){return this}static get watchers(){return{status:["handleIconEl"],icon:["handleIconEl"]}}static get style(){return"@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([active][scale\x3dm]),:host([active][scale\x3dl]){--calcite-input-message-spacing-value:0.25rem}:host{visibility:hidden;box-sizing:border-box;display:flex;block-size:0px;inline-size:100%;align-items:center;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);opacity:0;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host([active]){visibility:visible;block-size:auto;opacity:1;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host([active][scale\x3dm]),:host([active][scale\x3dl]){margin-block-start:var(--calcite-input-message-spacing-value)}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.calcite-input-message-icon{pointer-events:none;display:inline-flex;flex-shrink:0;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;margin-inline-end:0.5rem}:host([status\x3dinvalid]) .calcite-input-message-icon{color:var(--calcite-ui-danger)}:host([status\x3dwarning]) .calcite-input-message-icon{color:var(--calcite-ui-warning)}:host([status\x3dvalid]) .calcite-input-message-icon{color:var(--calcite-ui-success)}:host([status\x3didle]) .calcite-input-message-icon{color:var(--calcite-ui-brand)}:host([status][active]){color:var(--calcite-ui-text-1)}:host([status][scale\x3ds]){font-size:var(--calcite-font-size--3);line-height:0.75rem}:host([status][scale\x3dm]){margin-block-start:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([status][scale\x3dl]){margin-block-start:0.25rem;font-size:var(--calcite-font-size--1);line-height:1rem}"}},
[1,"calcite-input-message",{active:[516],icon:[520],scale:[1537],status:[1537],type:[513]}]);e();d.CalciteInputMessage=f;d.defineCustomElement=e;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});