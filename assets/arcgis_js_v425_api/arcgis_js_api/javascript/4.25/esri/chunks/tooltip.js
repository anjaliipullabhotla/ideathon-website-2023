// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","./componentsUtils","./floating-ui"],function(k,d,f){function l(){"undefined"!==typeof customElements&&["calcite-tooltip"].forEach(a=>{switch(a){case "calcite-tooltip":customElements.get(a)||customElements.define(a,m)}})}class p{constructor(){this.registeredElements=new WeakMap;this.hoverTimeouts=new WeakMap;this.registeredElementCount=0;this.queryTooltip=a=>{const {registeredElements:b}=this;a=a.find(c=>b.has(c));return b.get(a)};this.keyDownHandler=a=>{"Escape"===a.key&&({activeTooltipEl:a}=
this,a&&(this.clearHoverTimeout(a),this.toggleTooltip(a,!1)))};this.mouseEnterShow=a=>{this.hoverEvent(a,!0)};this.mouseLeaveHide=a=>{this.hoverEvent(a,!1)};this.clickHandler=a=>{d.isPrimaryPointerButton(a)&&(this.clickedTooltip=a=this.queryTooltip(a.composedPath()),null===a||void 0===a?0:a.closeOnClick)&&(this.toggleTooltip(a,!1),this.clearHoverTimeout(a))};this.focusShow=a=>{this.focusEvent(a,!0)};this.blurHide=a=>{this.focusEvent(a,!1)};this.hoverToggle=(a,b)=>{const {hoverTimeouts:c}=this;c.delete(a);
b&&this.closeExistingTooltip();this.toggleTooltip(a,b)}}registerElement(a,b){this.registeredElementCount++;this.registeredElements.set(a,b);1===this.registeredElementCount&&this.addListeners()}unregisterElement(a){this.registeredElements.delete(a)&&this.registeredElementCount--;0===this.registeredElementCount&&this.removeListeners()}addListeners(){document.addEventListener("keydown",this.keyDownHandler);document.addEventListener("pointerover",this.mouseEnterShow,{capture:!0});document.addEventListener("pointerout",
this.mouseLeaveHide,{capture:!0});document.addEventListener("pointerdown",this.clickHandler,{capture:!0});document.addEventListener("focusin",this.focusShow,{capture:!0});document.addEventListener("focusout",this.blurHide,{capture:!0})}removeListeners(){document.removeEventListener("keydown",this.keyDownHandler);document.removeEventListener("pointerover",this.mouseEnterShow,{capture:!0});document.removeEventListener("pointerout",this.mouseLeaveHide,{capture:!0});document.removeEventListener("pointerdown",
this.clickHandler,{capture:!0});document.removeEventListener("focusin",this.focusShow,{capture:!0});document.removeEventListener("focusout",this.blurHide,{capture:!0})}clearHoverTimeout(a){const {hoverTimeouts:b}=this;b.has(a)&&(window.clearTimeout(b.get(a)),b.delete(a))}closeExistingTooltip(){const {activeTooltipEl:a}=this;a&&this.toggleTooltip(a,!1)}focusTooltip(a,b){this.closeExistingTooltip();b&&this.clearHoverTimeout(a);this.toggleTooltip(a,b)}toggleTooltip(a,b){if(a.open=b)this.activeTooltipEl=
a}hoverTooltip(a,b){this.clearHoverTimeout(a);const {hoverTimeouts:c}=this,e=window.setTimeout(()=>this.hoverToggle(a,b),500);c.set(a,e)}activeTooltipHover(a){const {activeTooltipEl:b,hoverTimeouts:c}=this,{type:e}=a;b&&("pointerover"===e&&a.composedPath().includes(b)?this.clearHoverTimeout(b):"pointerout"!==e||c.has(b)||this.hoverTooltip(b,!1))}hoverEvent(a,b){const c=this.queryTooltip(a.composedPath());this.activeTooltipHover(a);c&&this.hoverTooltip(c,b)}focusEvent(a,b){(a=this.queryTooltip(a.composedPath()))&&
a!==this.clickedTooltip?this.focusTooltip(a,b):this.clickedTooltip=null}}const n=new p,m=d.proxyCustomElement(class extends d.H{constructor(){super();this.__registerHost();this.__attachShadow();this.closeOnClick=!1;this.offsetDistance=f.defaultOffsetDistance;this.offsetSkidding=0;this.open=!1;this.overlayPositioning="absolute";this.placement="auto";this.guid=`calcite-tooltip-${d.guid()}`;this.hasLoaded=!1;this.setUpReferenceElement=(a=!0)=>{this.removeReferences();this.effectiveReferenceElement=this.getReferenceElement();
f.connectFloatingUI(this,this.effectiveReferenceElement,this.el);const {el:b,referenceElement:c,effectiveReferenceElement:e}=this;a&&c&&!e&&console.warn(`${b.tagName}: reference-element id "${c}" was not found.`,{el:b});this.addReferences()};this.getId=()=>this.el.id||this.guid;this.addReferences=()=>{const {effectiveReferenceElement:a}=this;if(a){var b=this.getId();"setAttribute"in a&&a.setAttribute("aria-describedby",b);n.registerElement(a,this.el)}};this.removeReferences=()=>{const {effectiveReferenceElement:a}=
this;a&&("removeAttribute"in a&&a.removeAttribute("aria-describedby"),n.unregisterElement(a))}}offsetDistanceOffsetHandler(){this.reposition(!0)}offsetSkiddingHandler(){this.reposition(!0)}openHandler(a){a?this.reposition(!0):f.updateAfterClose(this.el)}overlayPositioningHandler(){this.reposition(!0)}placementHandler(){this.reposition(!0)}referenceElementHandler(){this.setUpReferenceElement()}connectedCallback(){this.setUpReferenceElement(this.hasLoaded)}componentDidLoad(){this.referenceElement&&
!this.effectiveReferenceElement&&this.setUpReferenceElement();this.reposition(!0);this.hasLoaded=!0}disconnectedCallback(){this.removeReferences();f.disconnectFloatingUI(this,this.effectiveReferenceElement,this.el)}async reposition(a=!1){const {el:b,effectiveReferenceElement:c,placement:e,overlayPositioning:g,offsetDistance:h,offsetSkidding:q,arrowEl:r}=this;return f.reposition(this,{floatingEl:b,referenceEl:c,overlayPositioning:g,placement:e,offsetDistance:h,offsetSkidding:q,includeArrow:!0,arrowEl:r,
type:"tooltip"},a)}getReferenceElement(){const {referenceElement:a,el:b}=this;return("string"===typeof a?d.queryElementRoots(b,{id:a}):a)||null}render(){const {effectiveReferenceElement:a,label:b,open:c}=this,e=a&&c,g=!e;return d.h(d.Host,{"aria-hidden":d.toAriaBoolean(g),"aria-label":b,"aria-live":"polite","calcite-hydrated-hidden":g,id:this.getId(),role:"tooltip"},d.h("div",{class:{[f.FloatingCSS.animation]:!0,[f.FloatingCSS.animationActive]:e}},d.h("div",{class:"arrow",ref:h=>this.arrowEl=h}),
d.h("div",{class:"container"},d.h("slot",null))))}get el(){return this}static get watchers(){return{offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"]}}static get style(){return'@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:block;position:absolute;z-index:999}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);visibility:hidden;transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:1;border-radius:0.25rem}:host([data-placement^\x3dbottom]) .calcite-floating-ui-anim{transform:translateY(-5px)}:host([data-placement^\x3dtop]) .calcite-floating-ui-anim{transform:translateY(5px)}:host([data-placement^\x3dleft]) .calcite-floating-ui-anim{transform:translateX(5px)}:host([data-placement^\x3dright]) .calcite-floating-ui-anim{transform:translateX(-5px)}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;visibility:visible;transform:translate(0)}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.arrow,.arrow::before{position:absolute;inline-size:8px;block-size:8px;z-index:-1}.arrow::before{content:"";--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transform:rotate(45deg);background:var(--calcite-ui-foreground-1)}:host([data-placement^\x3dtop]) .arrow{inset-block-end:-4px}:host([data-placement^\x3dbottom]) .arrow{inset-block-start:-4px}:host([data-placement^\x3dleft]) .arrow{direction:ltr;inset-inline-end:-4px}:host([data-placement^\x3dright]) .arrow{direction:ltr;inset-inline-start:-4px}.container{position:relative;overflow:hidden;border-radius:0.25rem;background-color:var(--calcite-ui-foreground-1);padding-block:0.75rem;padding-inline:1rem;font-size:var(--calcite-font-size--2);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);max-inline-size:20rem;max-block-size:20rem;text-align:start}.calcite-floating-ui-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1)}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}'}},
[1,"calcite-tooltip",{closeOnClick:[516,"close-on-click"],label:[1],offsetDistance:[514,"offset-distance"],offsetSkidding:[514,"offset-skidding"],open:[516],overlayPositioning:[513,"overlay-positioning"],placement:[513],referenceElement:[1,"reference-element"],effectiveReferenceElement:[32],reposition:[64]}]);l();k.Tooltip=m;k.defineCustomElement=l});