/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{p as t,H as a,k as e,h as n,F as i}from"../widgets/Widget.js";import{S as o,d as c}from"./action-menu.js";import{c as l,d as r}from"./conditionalSlot.js";import{d as s}from"./action.js";import{d as m}from"./icon.js";import{d as u}from"./loader.js";import{d}from"./popover2.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.97
 */const p={menuActions:"menu-actions",menuTooltip:"menu-tooltip"},g=t(class extends a{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.expanded=!1,this.layout="vertical",this.menuOpen=!1,this.setMenuOpen=t=>{this.menuOpen=!!t.detail}}expandedHandler(){this.menuOpen=!1}connectedCallback(){l(this)}disconnectedCallback(){r(this)}renderTooltip(){const{el:t}=this;return e(t,p.menuTooltip)?n("slot",{name:p.menuTooltip,slot:o.tooltip}):null}renderMenu(){const{el:t,expanded:a,intlMore:i,menuOpen:c,scale:l,layout:r}=this;return e(t,p.menuActions)?n("calcite-action-menu",{expanded:a,flipPlacements:["left","right"],label:i||"More",onCalciteActionMenuOpenChange:this.setMenuOpen,open:c,placement:"horizontal"===r?"bottom-leading":"leading-start",scale:l},n("calcite-action",{icon:"ellipsis",scale:l,slot:o.trigger,text:i||"More",textEnabled:a}),n("slot",{name:p.menuActions}),this.renderTooltip()):null}render(){return n(i,null,n("slot",null),this.renderMenu())}get el(){return this}static get watchers(){return{expanded:["expandedHandler"]}}static get style(){return'@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:flex;flex-direction:column;padding:0px;--calcite-action-group-columns:3}:host([columns="1"]){--calcite-action-group-columns:1}:host([columns="2"]){--calcite-action-group-columns:2}:host([columns="3"]){--calcite-action-group-columns:3}:host([columns="4"]){--calcite-action-group-columns:4}:host([columns="5"]){--calcite-action-group-columns:5}:host([columns="6"]){--calcite-action-group-columns:6}:host(:first-child){padding-block-start:0px}:host([layout=horizontal]){flex-direction:row}:host([layout=grid]){display:grid;place-content:stretch;gap:1px;background-color:var(--calcite-ui-background);padding:1px;grid-template-columns:repeat(var(--calcite-action-group-columns), auto)}'}},[1,"calcite-action-group",{expanded:[516],layout:[513],columns:[514],intlMore:[1,"intl-more"],menuOpen:[1540,"menu-open"],scale:[513]}]);function f(){"undefined"!=typeof customElements&&["calcite-action-group","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover"].forEach((t=>{switch(t){case"calcite-action-group":customElements.get(t)||customElements.define(t,g);break;case"calcite-action":customElements.get(t)||s();break;case"calcite-action-menu":customElements.get(t)||c();break;case"calcite-icon":customElements.get(t)||m();break;case"calcite-loader":customElements.get(t)||u();break;case"calcite-popover":customElements.get(t)||d()}}))}f();export{g as A,p as S,f as d};
