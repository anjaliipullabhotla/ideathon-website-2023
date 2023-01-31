/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{h as e,p as t,H as i,c as n,b as o,t as s,f as a,q as r,a as l,i as c}from"../widgets/Widget.js";import{d,f as h,c as f,u as m,a as p,r as u,F as g}from"./floating-ui.js";import{c as v,d as b}from"./openCloseComponent.js";import{i as w}from"./key.js";import{d as E}from"./action.js";import{d as x}from"./icon.js";import{d as y}from"./loader.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.97
 */const k=(t,i)=>{const n=`h${t.level}`;return delete t.level,e(n,{...t},i)},P=new class{constructor(){this.registeredElements=new Map,this.registeredElementCount=0,this.queryPopover=e=>{const{registeredElements:t}=this,i=e.find((e=>t.has(e)));return t.get(i)},this.togglePopovers=e=>{const t=e.composedPath(),i=this.queryPopover(t);i&&!i.triggerDisabled&&i.toggle(),Array.from(this.registeredElements.values()).filter((e=>e!==i&&e.autoClose&&e.open&&!t.includes(e))).forEach((e=>e.toggle(!1)))},this.keyHandler=e=>{!e.defaultPrevented&&w(e.key)&&this.togglePopovers(e)},this.clickHandler=e=>{c(e)&&this.togglePopovers(e)}}registerElement(e,t){this.registeredElementCount++,this.registeredElements.set(e,t),1===this.registeredElementCount&&this.addListeners()}unregisterElement(e){this.registeredElements.delete(e)&&this.registeredElementCount--,0===this.registeredElementCount&&this.removeListeners()}addListeners(){document.addEventListener("pointerdown",this.clickHandler,{capture:!0}),document.addEventListener("keydown",this.keyHandler,{capture:!0})}removeListeners(){document.removeEventListener("pointerdown",this.clickHandler,{capture:!0}),document.removeEventListener("keydown",this.keyHandler,{capture:!0})}},C=t(class extends i{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calcitePopoverBeforeClose=n(this,"calcitePopoverBeforeClose",6),this.calcitePopoverClose=n(this,"calcitePopoverClose",6),this.calcitePopoverBeforeOpen=n(this,"calcitePopoverBeforeOpen",6),this.calcitePopoverOpen=n(this,"calcitePopoverOpen",6),this.autoClose=!1,this.closeButton=!1,this.dismissible=!1,this.closable=!1,this.disableFlip=!1,this.disablePointer=!1,this.offsetDistance=d,this.offsetSkidding=0,this.open=!1,this.overlayPositioning="absolute",this.placement="auto",this.triggerDisabled=!1,this.intlClose="Close",this.guid=`calcite-popover-${o()}`,this.openTransitionProp="opacity",this.hasLoaded=!1,this.setTransitionEl=e=>{this.transitionEl=e,v(this)},this.setFilteredPlacements=()=>{const{el:e,flipPlacements:t}=this;this.filteredFlipPlacements=t?h(t,e):null},this.setUpReferenceElement=(e=!0)=>{this.removeReferences(),this.effectiveReferenceElement=this.getReferenceElement(),f(this,this.effectiveReferenceElement,this.el);const{el:t,referenceElement:i,effectiveReferenceElement:n}=this;e&&i&&!n&&console.warn(`${t.tagName}: reference-element id "${i}" was not found.`,{el:t}),this.addReferences()},this.getId=()=>this.el.id||this.guid,this.setExpandedAttr=()=>{const{effectiveReferenceElement:e,open:t}=this;e&&"setAttribute"in e&&e.setAttribute("aria-expanded",s(t))},this.addReferences=()=>{const{effectiveReferenceElement:e}=this;if(!e)return;const t=this.getId();"setAttribute"in e&&e.setAttribute("aria-controls",t),P.registerElement(e,this.el),this.setExpandedAttr()},this.removeReferences=()=>{const{effectiveReferenceElement:e}=this;e&&("removeAttribute"in e&&(e.removeAttribute("aria-controls"),e.removeAttribute("aria-expanded")),P.unregisterElement(e))},this.hide=()=>{this.open=!1},this.storeArrowEl=e=>{this.arrowEl=e,this.reposition(!0)}}handleDismissible(e){this.closable=e}handleClosable(e){this.dismissible=e}flipPlacementsHandler(){this.setFilteredPlacements(),this.reposition(!0)}offsetDistanceOffsetHandler(){this.reposition(!0)}offsetSkiddingHandler(){this.reposition(!0)}openHandler(e){e?this.reposition(!0):m(this.el),this.setExpandedAttr()}overlayPositioningHandler(){this.reposition(!0)}placementHandler(){this.reposition(!0)}referenceElementHandler(){this.setUpReferenceElement(),this.reposition(!0)}connectedCallback(){this.setFilteredPlacements(),v(this);const e=this.closable||this.dismissible;e&&this.handleDismissible(e),e&&this.handleClosable(e),this.setUpReferenceElement(this.hasLoaded)}componentDidLoad(){this.referenceElement&&!this.effectiveReferenceElement&&this.setUpReferenceElement(),this.reposition(),this.hasLoaded=!0}disconnectedCallback(){this.removeReferences(),p(this,this.effectiveReferenceElement,this.el),b(this)}async reposition(e=!1){const{el:t,effectiveReferenceElement:i,placement:n,overlayPositioning:o,disableFlip:s,filteredFlipPlacements:a,offsetDistance:r,offsetSkidding:l,arrowEl:c}=this;return u(this,{floatingEl:t,referenceEl:i,overlayPositioning:o,placement:n,disableFlip:s,flipPlacements:a,offsetDistance:r,offsetSkidding:l,includeArrow:!this.disablePointer,arrowEl:c,type:"popover"},e)}async setFocus(e){var t;const{closeButtonEl:i}=this;if("close-button"===e&&i)return a(i),void i.setFocus();null===(t=this.el)||void 0===t||t.focus()}async toggle(e=!this.open){this.open=e}getReferenceElement(){const{referenceElement:e,el:t}=this;return("string"==typeof e?r(t,{id:e}):e)||null}onBeforeOpen(){this.calcitePopoverBeforeOpen.emit()}onOpen(){this.calcitePopoverOpen.emit()}onBeforeClose(){this.calcitePopoverBeforeClose.emit()}onClose(){this.calcitePopoverClose.emit()}renderCloseButton(){const{closeButton:t,intlClose:i,heading:n,closable:o}=this;return o||t?e("div",{class:"close-button-container"},e("calcite-action",{class:"close-button",onClick:this.hide,ref:e=>this.closeButtonEl=e,scale:n?"s":"m",text:i},e("calcite-icon",{icon:"x",scale:n?"s":"m"}))):null}renderHeader(){const{heading:t,headingLevel:i}=this,n=t?e(k,{class:"heading",level:i||2},t):null;return n?e("div",{class:"header"},n,this.renderCloseButton()):null}render(){const{effectiveReferenceElement:t,heading:i,label:n,open:o,disablePointer:a}=this,r=t&&o,c=!r,d=a?null:e("div",{class:"arrow",ref:this.storeArrowEl});return e(l,{"aria-hidden":s(c),"aria-label":n,"aria-live":"polite","calcite-hydrated-hidden":c,id:this.getId(),role:"dialog"},e("div",{class:{[g.animation]:!0,[g.animationActive]:r},ref:this.setTransitionEl},d,e("div",{class:{"has-header":!!i,container:!0}},this.renderHeader(),e("div",{class:"content"},e("slot",null)),i?null:this.renderCloseButton())))}get el(){return this}static get watchers(){return{dismissible:["handleDismissible"],closable:["handleClosable"],flipPlacements:["flipPlacementsHandler"],offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"]}}static get style(){return'@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:block;position:absolute;z-index:900}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);visibility:hidden;transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:1;border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{transform:translateY(-5px)}:host([data-placement^=top]) .calcite-floating-ui-anim{transform:translateY(5px)}:host([data-placement^=left]) .calcite-floating-ui-anim{transform:translateX(5px)}:host([data-placement^=right]) .calcite-floating-ui-anim{transform:translateX(-5px)}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;visibility:visible;transform:translate(0)}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.arrow,.arrow::before{position:absolute;inline-size:8px;block-size:8px;z-index:-1}.arrow::before{content:"";--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transform:rotate(45deg);background:var(--calcite-ui-foreground-1)}:host([data-placement^=top]) .arrow{inset-block-end:-4px}:host([data-placement^=bottom]) .arrow{inset-block-start:-4px}:host([data-placement^=left]) .arrow{direction:ltr;inset-inline-end:-4px}:host([data-placement^=right]) .arrow{direction:ltr;inset-inline-start:-4px}:host{pointer-events:none}:host([open]){pointer-events:initial}.calcite-floating-ui-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1)}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}.header{display:flex;flex:1 1 auto;align-items:stretch;justify-content:flex-start;border-width:0px;border-block-end-width:1px;border-style:solid;background-color:var(--calcite-ui-foreground-1);border-block-end-color:var(--calcite-ui-border-3)}.heading{margin:0px;display:block;flex:1 1 auto;align-self:center;white-space:normal;padding-inline:1rem;padding-block:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);word-wrap:break-word;word-break:break-word}.container{position:relative;display:flex;block-size:100%;flex-direction:row;flex-wrap:nowrap;border-radius:0.25rem;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-1)}.container.has-header{flex-direction:column}.content{display:flex;block-size:100%;inline-size:100%;flex-direction:column;flex-wrap:nowrap;align-self:center;word-wrap:break-word;word-break:break-word}.close-button-container{display:flex;overflow:hidden;flex:0 0 auto;border-start-end-radius:0.25rem;border-end-end-radius:0.25rem}::slotted(calcite-panel),::slotted(calcite-flow){block-size:100%}'}},[1,"calcite-popover",{autoClose:[516,"auto-close"],closeButton:[516,"close-button"],dismissible:[1540],closable:[1540],disableFlip:[516,"disable-flip"],disablePointer:[516,"disable-pointer"],flipPlacements:[16],heading:[1],headingLevel:[514,"heading-level"],label:[1],offsetDistance:[514,"offset-distance"],offsetSkidding:[514,"offset-skidding"],open:[1540],overlayPositioning:[513,"overlay-positioning"],placement:[513],referenceElement:[1,"reference-element"],triggerDisabled:[516,"trigger-disabled"],intlClose:[1,"intl-close"],effectiveReferenceElement:[32],reposition:[64],setFocus:[64],toggle:[64]}]);
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.97
 */function H(){"undefined"!=typeof customElements&&["calcite-popover","calcite-action","calcite-icon","calcite-loader"].forEach((e=>{switch(e){case"calcite-popover":customElements.get(e)||customElements.define(e,C);break;case"calcite-action":customElements.get(e)||E();break;case"calcite-icon":customElements.get(e)||x();break;case"calcite-loader":customElements.get(e)||y()}}))}H();export{k as H,C as P,H as d};
