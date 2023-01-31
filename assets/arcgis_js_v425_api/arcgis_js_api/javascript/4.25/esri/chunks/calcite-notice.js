// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","./componentsUtils","./conditionalSlot","./icon"],function(d,b,e,h){function f(){"undefined"!==typeof customElements&&["calcite-notice","calcite-icon"].forEach(a=>{switch(a){case "calcite-notice":customElements.get(a)||customElements.define(a,g);break;case "calcite-icon":customElements.get(a)||h.defineCustomElement()}})}var c;(function(a){a.green="checkCircle";a.yellow="exclamationMarkTriangle";a.red="exclamationMarkTriangle";a.blue="lightbulb"})(c||(c={}));const g=b.proxyCustomElement(class extends b.H{constructor(){super();
this.__registerHost();this.__attachShadow();this.calciteNoticeClose=b.createEvent(this,"calciteNoticeClose",6);this.calciteNoticeOpen=b.createEvent(this,"calciteNoticeOpen",6);this.open=this.active=!1;this.color="blue";this.closable=this.dismissible=!1;this.intlClose="Close";this.scale="m";this.width="auto";this.close=()=>{this.open=!1;this.calciteNoticeClose.emit()}}activeHandler(a){this.open=a}openHandler(a){this.active=a}handleDismissible(a){this.closable=a}handleClosable(a){this.dismissible=a}updateRequestedIcon(){this.requestedIcon=
b.setRequestedIcon(c,this.icon,this.color)}connectedCallback(){e.connectConditionalSlotComponent(this);const a=this.active||this.open;a&&(this.activeHandler(a),this.openHandler(a));this.dismissible&&this.handleDismissible(this.dismissible);this.closable&&this.handleClosable(this.closable)}disconnectedCallback(){e.disconnectConditionalSlotComponent(this)}componentWillLoad(){this.requestedIcon=b.setRequestedIcon(c,this.icon,this.color)}render(){var {el:a}=this;const l=b.h("button",{"aria-label":this.intlClose,
class:"notice-close",onClick:this.close,ref:k=>this.closeButton=k},b.h("calcite-icon",{icon:"x",scale:"l"===this.scale?"m":"s"}));a=b.getSlotted(a,"actions-end");return b.h("div",{class:"container"},this.requestedIcon?b.h("div",{class:"notice-icon"},b.h("calcite-icon",{icon:this.requestedIcon,scale:"l"===this.scale?"m":"s"})):null,b.h("div",{class:"notice-content"},b.h("slot",{name:"title"}),b.h("slot",{name:"message"}),b.h("slot",{name:"link"})),a?b.h("div",{class:"actions-end"},b.h("slot",{name:"actions-end"})):
null,this.closable?l:null)}async setFocus(){const a=this.el.querySelector("calcite-link");if(this.closeButton||a)a?a.setFocus():this.closeButton&&this.closeButton.focus()}get el(){return this}static get watchers(){return{active:["activeHandler"],open:["openHandler"],dismissible:["handleDismissible"],closable:["handleClosable"],icon:["updateRequestedIcon"],color:["updateRequestedIcon"]}}static get style(){return"@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([scale\x3ds]){--calcite-notice-spacing-token-small:0.5rem;--calcite-notice-spacing-token-large:0.75rem}:host([scale\x3ds]) .container slot[name\x3dtitle]::slotted(*),:host([scale\x3ds]) .container *::slotted([slot\x3dtitle]){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale\x3ds]) .container slot[name\x3dmessage]::slotted(*),:host([scale\x3ds]) .container *::slotted([slot\x3dmessage]){margin-block:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale\x3ds]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale\x3ds]) .notice-close{padding:0.5rem}:host([scale\x3dm]){--calcite-notice-spacing-token-small:0.75rem;--calcite-notice-spacing-token-large:1rem}:host([scale\x3dm]) .container slot[name\x3dtitle]::slotted(*),:host([scale\x3dm]) .container *::slotted([slot\x3dtitle]){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale\x3dm]) .container slot[name\x3dmessage]::slotted(*),:host([scale\x3dm]) .container *::slotted([slot\x3dmessage]){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale\x3dm]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale\x3dl]){--calcite-notice-spacing-token-small:1rem;--calcite-notice-spacing-token-large:1.25rem}:host([scale\x3dl]) .container slot[name\x3dtitle]::slotted(*),:host([scale\x3dl]) .container *::slotted([slot\x3dtitle]){margin-block:0.125rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host([scale\x3dl]) .container slot[name\x3dmessage]::slotted(*),:host([scale\x3dl]) .container *::slotted([slot\x3dmessage]){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale\x3dl]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([width\x3dauto]){--calcite-notice-width:auto}:host([width\x3dhalf]){--calcite-notice-width:50%}:host([width\x3dfull]){--calcite-notice-width:100%}:host{margin-inline:auto;display:none;max-inline-size:100%;align-items:center;inline-size:var(--calcite-notice-width)}.container{pointer-events:none;margin-block:0px;box-sizing:border-box;display:none;inline-size:100%;background-color:var(--calcite-ui-foreground-1);opacity:0;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;max-block-size:0;text-align:start;border-inline-start:0px solid;box-shadow:0 0 0 0 transparent}.notice-close{outline-color:transparent}.notice-close:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host{display:flex}:host([open]) .container{pointer-events:auto;display:flex;max-block-size:100%;align-items:center;border-width:2px;opacity:1;--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.container slot[name\x3dtitle]::slotted(*),.container *::slotted([slot\x3dtitle]){margin:0px;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.container slot[name\x3dmessage]::slotted(*),.container *::slotted([slot\x3dmessage]){margin:0px;display:inline;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2);margin-inline-end:var(--calcite-notice-spacing-token-small)}.notice-content{box-sizing:border-box;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto;display:flex;min-inline-size:0px;flex-direction:column;overflow-wrap:break-word;flex:1 1 0;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:0 var(--calcite-notice-spacing-token-small)}.notice-content:first-of-type:not(:only-child){padding-inline-start:var(--calcite-notice-spacing-token-large)}.notice-content:only-of-type{padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large)}.notice-icon{display:flex;align-items:center;box-sizing:border-box;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto}.notice-close{display:flex;cursor:pointer;align-items:center;align-self:stretch;border-style:none;background-color:transparent;color:var(--calcite-ui-text-3);outline:2px solid transparent;outline-offset:2px;box-sizing:border-box;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto;-webkit-appearance:none}.notice-close:hover,.notice-close:focus{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.notice-close:active{background-color:var(--calcite-ui-foreground-3)}.actions-end{display:flex;align-self:stretch}:host([color\x3dblue]) .container{border-color:var(--calcite-ui-brand)}:host([color\x3dblue]) .container .notice-icon{color:var(--calcite-ui-brand)}:host([color\x3dred]) .container{border-color:var(--calcite-ui-danger)}:host([color\x3dred]) .container .notice-icon{color:var(--calcite-ui-danger)}:host([color\x3dyellow]) .container{border-color:var(--calcite-ui-warning)}:host([color\x3dyellow]) .container .notice-icon{color:var(--calcite-ui-warning)}:host([color\x3dgreen]) .container{border-color:var(--calcite-ui-success)}:host([color\x3dgreen]) .container .notice-icon{color:var(--calcite-ui-success)}"}},
[1,"calcite-notice",{active:[1540],open:[1540],color:[513],dismissible:[516],closable:[516],icon:[520],intlClose:[1,"intl-close"],scale:[513],width:[513],setFocus:[64]}]);f();d.CalciteNotice=g;d.defineCustomElement=f;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});