/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import{substitute as t}from"../intl.js";import i from"../core/Collection.js";import{e as n}from"../core/promiseUtils.js";import{a as s,i as o}from"../chunks/maybe.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import{cast as a}from"../core/accessorSupport/decorators/cast.js";import{subclass as l}from"../core/accessorSupport/decorators/subclass.js";import h from"./Widget.js";import d from"./Slider/SliderViewModel.js";import{o as c}from"../chunks/widgetUtils.js";import{m as u}from"../chunks/messageBundle.js";import{t as m}from"../chunks/jsxFactory.js";import"../chunks/number.js";import"../chunks/jsonMap.js";import"../chunks/object.js";import"../chunks/locale.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/string.js";import"../chunks/messages.js";import"../core/Error.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"../chunks/ArrayPool.js";import"../core/Evented.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/ensureType.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../chunks/domUtils.js";import"../core/Promise.js";import"../core/reactiveUtils.js";import"../chunks/uuid.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";const _={showInput:"Enter",hideInput1:"Enter",hideInput2:"Escape",hideInput3:"Tab",moveAnchorUp:"ArrowUp",moveAnchorDown:"ArrowDown",moveAnchorLeft:"ArrowLeft",moveAnchorRight:"ArrowRight",moveAnchorToMax:"End",moveAnchorToMin:"Home"},p={labels:!1,rangeLabels:!1};let v=class extends h{constructor(e,t){super(e,t),this._activeLabelInputIndex=null,this._anchorElements=[],this._dragged=!1,this._dragStartInfo=null,this._focusedAnchorIndex=null,this._isMinInputActive=!1,this._isMaxInputActive=!1,this._lastMovedHandleIndex=null,this._positionPrecision=5,this._segmentDragStartInfo=null,this._trackHeight=null,this._trackWidth=null,this._zIndices=null,this._zIndexOffset=3,this.disabled=!1,this.draggableSegmentsEnabled=!0,this.effectiveSegmentElements=new i,this.extraNodes=[],this.inputCreatedFunction=null,this.labelElements=new i,this.labelInputsEnabled=!1,this.maxLabelElement=null,this.messages=null,this.minLabelElement=null,this.rangeLabelInputsEnabled=!1,this.segmentElements=new i,this.snapOnClickEnabled=!0,this.steps=null,this.syncedSegmentsEnabled=!1,this.thumbCreatedFunction=null,this.thumbElements=new i,this.tickElements=new i,this.trackElement=null,this.viewModel=new d,this.visibleElements={...p},this._onAnchorPointerDown=this._onAnchorPointerDown.bind(this),this._onAnchorPointerMove=this._onAnchorPointerMove.bind(this),this._onAnchorPointerUp=this._onAnchorPointerUp.bind(this),this._onLabelPointerDown=this._onLabelPointerDown.bind(this),this._onLabelPointerUp=this._onLabelPointerUp.bind(this),this._onSegmentPointerDown=this._onSegmentPointerDown.bind(this),this._onSegmentPointerMove=this._onSegmentPointerMove.bind(this),this._onSegmentPointerUp=this._onSegmentPointerUp.bind(this),this._onTrackPointerDown=this._onTrackPointerDown.bind(this),this._onTrackPointerMove=this._onTrackPointerMove.bind(this),this._onTrackPointerUp=this._onTrackPointerUp.bind(this)}destroy(){document.removeEventListener("pointerup",this._onLabelPointerUp),document.removeEventListener("pointermove",this._onLabelPointerMove),document.removeEventListener("pointerup",this._onAnchorPointerUp),document.removeEventListener("pointermove",this._onAnchorPointerMove),this.labelElements.removeAll(),this.labelElements.destroy(),this.segmentElements.removeAll(),this.segmentElements.destroy(),this.effectiveSegmentElements.removeAll(),this.effectiveSegmentElements.destroy(),this.thumbElements.removeAll(),this.thumbElements.destroy(),this.tickElements.removeAll(),this.tickElements.destroy()}get effectiveMax(){return this.viewModel.effectiveMax}set effectiveMax(e){this.viewModel.effectiveMax=e}get effectiveMin(){return this.viewModel.effectiveMin}set effectiveMin(e){this.viewModel.effectiveMin=e}get inputFormatFunction(){return this.viewModel.inputFormatFunction}set inputFormatFunction(e){this.viewModel.inputFormatFunction=e}get inputParseFunction(){return this.viewModel.inputParseFunction}set inputParseFunction(e){this.viewModel.inputParseFunction=e}get label(){return this.messages?.widgetLabel??""}set label(e){this._overrideIfSome("label",e)}get labelFormatFunction(){return this.viewModel.labelFormatFunction}set labelFormatFunction(e){this.viewModel.labelFormatFunction=e}get labels(){return this.viewModel.labels}set layout(e){["vertical","vertical-reversed","horizontal","horizontal-reversed"].includes(e)||(e="horizontal"),this._set("layout",e)}get max(){return this.viewModel.max}set max(e){this.viewModel.max=e}get min(){return this.viewModel.min}set min(e){this.viewModel.min=e}get precision(){return this.viewModel.precision}set precision(e){this.viewModel.precision=e}get state(){const{_activeLabelInputIndex:e,_isMaxInputActive:t,_isMinInputActive:i,_dragStartInfo:n,_segmentDragStartInfo:s,disabled:r,viewModel:a}=this,l=o(n)||o(s);return r?"disabled":null!==e||t||i?"editing":l?"dragging":a.state}get thumbsConstrained(){return this.viewModel.thumbsConstrained}set thumbsConstrained(e){this.viewModel.thumbsConstrained=e}set tickConfigs(e){this._set("tickConfigs",e),this.scheduleRender()}get values(){return this.viewModel.values}set values(e){this.viewModel.values=e}castVisibleElements(e){return{...p,...e}}render(){const{label:e}=this,t=this.classes("esri-slider","esri-widget",this._isHorizontalLayout()?"esri-slider--horizontal":"esri-slider--vertical",this._isReversedLayout()?"esri-slider--reversed":null,this._isDisabled()?"esri-disabled":null);return this._storeTrackDimensions(),m("div",{"aria-label":e,class:t,"touch-action":"none",bind:this,afterCreate:this._afterContainerCreate},this.renderContent())}toNextStep(e){this._toStep(e,1)}toPreviousStep(e){this._toStep(e,-1)}renderContent(){const{max:e,min:t}=this;if(!(s(t)||s(e)||t>=e))return[this.renderMin(),this.renderSliderContainer(),this.renderMax()]}renderSliderContainer(){return m("div",{key:"slider-container",bind:this,class:"esri-slider__content"},this.renderTrackElement(),this.renderTicksContainer(),this.renderExtraContentElements())}renderTrackElement(){return m("div",{afterCreate:this._afterTrackCreate,afterRemoved:this._afterTrackRemoved,bind:this,class:"esri-slider__track","touch-action":"none"},this.renderEffectiveSegmentElements(),this.renderSegmentElements(),this.renderAnchorElements())}renderEffectiveSegmentElements(){if(!this.trackElement||!this.values||!this.values.length)return;const e=o(this.effectiveMax),t=o(this.effectiveMin);if(!e&&!t)return;const{max:i,min:n,viewModel:s}=this,r=s.getBounds(),a=[];return t&&a.push(this.renderEffectiveSegmentElement(n,r.min,!0)),e&&a.push(this.renderEffectiveSegmentElement(r.max,i,!1)),a}renderSegmentElements(){if(!this.trackElement||!this.values||!this.values.length)return;const e=this.values.length,t=[];for(let i=0;i<=e;i++)t.push(this.renderSegmentElement(i));return t}renderSegmentElement(e){const{_trackHeight:t,_trackWidth:i,draggableSegmentsEnabled:n,id:s,state:r,values:a}=this,l=this._isHorizontalLayout(),h=l?i:t,d=this.viewModel.getBounds(),c=this._positionFromValue(d.max),u=this._positionFromValue(d.min),_=e===a.length?null:e,p=0===e?null:e-1,v=o(_),g=o(p);let f,b;const E=[...a].sort(((e,t)=>e-t));this._isReversedLayout()?(f=g?this._positionFromValue(E[p]):u,b=v?this._positionFromValue(E[_]):c):(f=v?this._positionFromValue(E[_]):c,b=g?this._positionFromValue(E[p]):u);const x=this._applyPrecisionToPosition(100*b/h),k=(f-b)/h,y=l?`transform: translate(${x}%, 0px) scale(${k}, 1);`:`transform: translate(0px, ${x}%) scale(1, ${k});`,P=this.classes("esri-slider__segment","esri-slider__segment-"+e,n&&v&&g&&"disabled"!==r?"esri-slider__segment--interactive":null);return m("div",{afterCreate:this._afterSegmentCreate,afterRemoved:this._afterSegmentRemoved,bind:this,class:P,"data-max-thumb-index":_,"data-min-thumb-index":p,"data-segment-index":e,key:`${s}-segment-${e}`,style:y,"touch-action":"none"})}renderEffectiveSegmentElement(e,t,i){const{_trackHeight:n,_trackWidth:s,layout:o}=this,r=this._positionFromValue(e),a=this._positionFromValue(t),l=this._isHorizontalLayout(),h=l?s:n,d=this._applyPrecisionToPosition(100*r/h);let c=null;if("horizontal"===o){const e=i?h-a:a,t=r===h?0:d;c=`clip-path: inset(0% ${a===h?0:this._applyPrecisionToPosition(e/h*100)}% 0% ${t}%);`}else{const e=(a-r)/h;c=l?`transform: translate(${d}%, 0px) scale(${e}, 1);`:`transform: translate(0px, ${d}%) scale(1, ${e});`}const u=i?"esri-slider__effective-min-segment":"esri-slider__effective-max-segment",_=this.classes("esri-slider__segment","esri-slider__effective-segment",u);return m("div",{afterCreate:this._afterEffectiveSegmentCreate,afterRemoved:this._afterEffectiveSegmentRemoved,bind:this,class:_,style:c,"touch-action":"none"})}renderAnchorElements(){const{trackElement:e,values:t}=this;if(t&&t.length)return this._zIndices=t.map(((e,i)=>{const n=this._positionFromValue(e),s=this._positionToPercent(n),o=(this._isHorizontalLayout()?s>50:s<50)?-1:1;return this._zIndexOffset+(t.length+o*i)})),e&&t&&t.length?t.map(((e,t)=>this.renderAnchorElement(e,t))):null}renderAnchorElement(e,i){const n=this._positionFromValue(e),o=this._valueFromPosition(n);if(s(o)||isNaN(o))return;const{_dragStartInfo:r,_lastMovedHandleIndex:a,id:l,layout:h,values:d,visibleElements:{labels:c}}=this,u=r&&r.index===i,_=a===i,p=this.classes("esri-slider__anchor","esri-slider__anchor-"+i,u?"esri-slider__anchor--moving":null,_?"esri-slider__anchor--moved":null),v=this.labels.values[i],g=this._getStyleForAnchor(e,i,u||_),{min:f,max:b}=this.viewModel.getBoundsForValueAtIndex(i),{disabled:E,messages:x}=this,k=2===d.length?t(0===i?x.rangeMinimum:x.rangeMaximum,{value:e}):v,y=1===d.length?null:0===i?`${l}-handle-${i+1}`:i===d.length-1?`${l}-handle-${i-1}`:`${l}-handle-${i-1} ${l}-handle-${i+1}`;return m("div",{afterCreate:this._afterAnchorCreate,afterUpdate:this._afterAnchorUpdate,afterRemoved:this._afterAnchorRemoved,"aria-controls":y,"aria-label":x.sliderValue,"aria-labelledby":c?`${l}-label-${i}`:null,"aria-orientation":h,"aria-valuemax":b.toString(),"aria-valuemin":f.toString(),"aria-valuenow":e.toString(),"aria-valuetext":k,bind:this,class:p,"data-thumb-index":i,"data-value":e,id:`${l}-handle-${i}`,key:`${l}-handle-${i}`,onkeydown:this._onAnchorKeyDown,"touch-action":"none",role:"slider",style:g,tabIndex:E?-1:0},m("span",{afterCreate:this._afterThumbCreate,afterRemoved:this._afterThumbRemoved,bind:this,class:"esri-slider__thumb","data-thumb-index":i,"touch-action":"none"}),this.renderThumbLabel(i))}renderThumbLabel(e){const{id:t,labels:i,labelInputsEnabled:n,state:s}=this,o=this.visibleElements.labels,r=i.values[e],a=this.classes("esri-slider__label",o?null:"esri-hidden",n&&"disabled"!==s?"esri-slider__label--interactive":null);return m("span",{afterCreate:this._afterLabelCreate,afterRemoved:this._afterLabelRemoved,"aria-hidden":(!o).toString(),bind:this,class:a,"data-thumb-index":e,key:`${t}-label-${e}`,id:`${t}-label-${e}`,role:n?"button":null,"touch-action":"none"},this._activeLabelInputIndex===e?this.renderValueInput(e):r)}renderValueInput(e){const{disabled:t,values:i}=this,n=i[e];return m("input",{key:`value-input-${e}`,afterCreate:this._afterInputCreate,"aria-label":this.messages.sliderValue,bind:this,class:"esri-slider__label-input","data-input-type":"thumb","data-input-index":e,required:!0,tabIndex:t?-1:0,type:"text",value:this._formatInputValue(n,"value",e),onblur:this._onLabelInputBlur,onkeydown:this._onInputKeyDown})}renderMax(){const{_isMaxInputActive:e,labels:t,rangeLabelInputsEnabled:i,state:n}=this,s=this.visibleElements.rangeLabels,o=this.classes("esri-slider__max",{"esri-hidden":!s,"esri-slider__max--interactive":i&&"disabled"!==n,"esri-slider__range--active":e});return m("div",{"aria-hidden":(!s).toString(),afterCreate:this._afterMaxLabelCreate,bind:this,class:o,onclick:this._onMaxLabelClick,onkeydown:this._onMaxLabelKeyDown,role:i?"button":null,tabIndex:!this.disabled&&i?0:-1},e?this.renderMaxInput():t.max)}renderMin(){const{_isMinInputActive:e,labels:t,rangeLabelInputsEnabled:i,state:n}=this,s=this.visibleElements.rangeLabels,o=this.classes("esri-slider__min",{"esri-hidden":!s,"esri-slider__min--interactive":i&&"disabled"!==n,"esri-slider__range--active":e});return m("div",{"aria-hidden":(!s).toString(),afterCreate:this._afterMinLabelCreate,bind:this,class:o,onclick:this._onMinLabelClick,onkeydown:this._onMinLabelKeyDown,role:i?"button":null,tabIndex:!this.disabled&&i?0:-1},e?this.renderMinInput():t.min)}renderMaxInput(){return m("input",{afterCreate:this._afterInputCreate,"aria-label":this.messages.maximumValue,bind:this,class:"esri-slider__range-input","data-input-type":"max",required:!0,tabIndex:this.disabled?-1:0,type:"text",value:this._formatInputValue(this.max,"max"),onblur:this._onMaxInputBlur,onkeydown:this._onInputKeyDown})}renderMinInput(){return m("input",{afterCreate:this._afterInputCreate,"aria-label":this.messages.minimumValue,bind:this,class:"esri-slider__range-input","data-input-type":"min",required:!0,tabIndex:this.disabled?-1:0,type:"text",value:this._formatInputValue(this.min,"min"),onblur:this._onMinInputBlur,onkeydown:this._onInputKeyDown})}renderExtraContentElements(){return m("div",{bind:this,class:"esri-slider__extra-content"},this.extraNodes)}renderTicksContainer(){if(this.tickConfigs&&this.trackElement&&(0!==this._trackHeight||0!==this._trackWidth))return this.tickConfigs.map(((e,t)=>m("div",{key:"ticks-container",class:this.classes("esri-slider__ticks")},this.renderTicks(e,t))))}renderTicks(e,t){const{mode:n,values:s}=e;if(this.tickElements.getItemAt(t)||this.tickElements.add(new i,t),"position"===n){const i=Array.isArray(s)?s:[s];return this._calculateTickPositions(i).map(((i,n)=>this.renderTickGroup(e,n,t,i)))}if("percent"===n&&Array.isArray(s)){const{max:i,min:n}=this,o=i-n,r=s.map((e=>this._applyPrecisionToPosition(e/100*o+n)));return this._calculateTickPositions(r).map(((i,n)=>this.renderTickGroup(e,n,t,i)))}const o=Array.isArray(s)&&s.length?s[0]:isNaN(s)?null:s,r=this._getTickCounts(o,e);return this._calculateEquidistantTickPositions(r).map(((i,n)=>this.renderTickGroup(e,n,t,i)))}renderTickGroup(e,t,i,n){const o="position"===e.mode?Array.isArray(e.values)?e.values[t]:e.values:this._valueFromPosition(n);if(!s(o)&&!isNaN(o))return m("div",{afterCreate:this._afterTickGroupCreate,afterRemoved:this._afterTickGroupRemoved,bind:this,"data-config":e,"data-position":n,"data-tick-config-index":i,"data-tick-group-index":t,"data-value":o,onclick:this._onTickGroupClick,key:`tick-group-${t}`},this.renderTickLine(e,t,i,o),e.labelsVisible?this.renderTickLabel(e,t,i,o):null)}renderTickLine(e,t,i,n){return m("div",{afterCreate:this._afterTickLineCreate,"aria-valuenow":n.toString(),bind:this,class:"esri-slider__tick","data-config":e,"data-tick-config-index":i,"data-tick-group-index":t,"data-value":n,key:`tick-label-${t}`,style:this._getPositionStyleForElement(n)})}renderTickLabel(e,t,i,n){const s=e.labelFormatFunction?e.labelFormatFunction(n,"tick",t):this.viewModel.getLabelForValue(n,"tick",t);return m("div",{afterCreate:this._afterTickLabelCreate,"aria-label":s,"aria-valuenow":n.toString(),"aria-valuetext":s,bind:this,class:"esri-slider__tick-label","data-config":e,"data-tick-config-index":i,"data-tick-group-index":t,"data-value":n,key:`tick-label-${t}`,style:`transform: translate(-50%); ${this._getPositionStyleForElement(n)}`},s)}_afterContainerCreate(e){this.addHandles(c(e,(()=>this.scheduleRender())))}_afterTrackCreate(e){this._set("trackElement",e),e.addEventListener("pointerdown",this._onTrackPointerDown),this.scheduleRender()}_afterTrackRemoved(e){e.removeEventListener("pointerdown",this._onTrackPointerDown),document.removeEventListener("pointermove",this._onTrackPointerMove),document.removeEventListener("pointerup",this._onTrackPointerUp)}_afterSegmentCreate(e){this.segmentElements.add(e),e.addEventListener("pointerdown",this._onSegmentPointerDown)}_afterSegmentRemoved(e){this.segmentElements.remove(e),e.removeEventListener("pointerdown",this._onSegmentPointerDown)}_afterEffectiveSegmentCreate(e){this.effectiveSegmentElements.add(e)}_afterEffectiveSegmentRemoved(e){this.effectiveSegmentElements.remove(e)}_afterAnchorCreate(e){if(this._anchorElements.push(e),e.addEventListener("pointerdown",this._onAnchorPointerDown),this.thumbCreatedFunction){const t=e["data-thumb-index"],i=e["data-value"],n=this.thumbElements.getItemAt(t)||null,s=this.labelElements.getItemAt(t)||null;this.thumbCreatedFunction(t,i,n,s)}}_afterAnchorUpdate(e){o(this._focusedAnchorIndex)&&e["data-thumb-index"]===this._focusedAnchorIndex&&(e.focus(),this._focusedAnchorIndex=null)}_afterAnchorRemoved(e){const t=this._anchorElements.indexOf(e,0);t>-1&&this._anchorElements.splice(t,1),e.removeEventListener("pointerdown",this._onAnchorPointerDown)}_afterThumbCreate(e){this.thumbElements.add(e)}_afterThumbRemoved(e){this.thumbElements.remove(e)}_afterLabelCreate(e){this.labelElements.add(e),e.addEventListener("pointerdown",this._onLabelPointerDown),e.addEventListener("pointerup",this._onLabelPointerUp)}_afterLabelRemoved(e){this.labelElements.remove(e),e.removeEventListener("pointerdown",this._onLabelPointerDown),e.removeEventListener("pointerup",this._onLabelPointerUp)}_afterInputCreate(e){if(e.focus(),e.select(),this.inputCreatedFunction){const t=e.getAttribute("data-input-type"),i="thumb"===t?e["data-input-index"]:null;this.inputCreatedFunction(e,t,i)}}_afterTickLineCreate(e){const t=e["data-tick-config-index"],i=e["data-tick-group-index"],n=this.tickElements.getItemAt(t);n.getItemAt(i)?n.getItemAt(i).tickElement=e:n.add({groupElement:null,tickElement:e,labelElement:null},i)}_afterTickLabelCreate(e){const t=e["data-tick-config-index"],i=e["data-tick-group-index"],n=this.tickElements.getItemAt(t);n.getItemAt(i)?n.getItemAt(i).labelElement=e:n.add({groupElement:null,labelElement:e,tickElement:null},i)}_afterTickGroupRemoved(e){const t=e["data-tick-config-index"],i=this.tickElements.items[t],n=i?.find((t=>t.groupElement===e));n&&i.remove(n)}_afterTickGroupCreate(e){const t=e["data-config"];if(t&&t.tickCreatedFunction){const i=e["data-tick-config-index"],n=e["data-tick-group-index"],s=e["data-value"],o=this.tickElements?.getItemAt(i)?.getItemAt(n);if(o){o.groupElement=e;const i=o.tickElement||null,n=o.labelElement||null;t.tickCreatedFunction(s,i,n)}}}_afterMaxLabelCreate(e){this._set("maxLabelElement",e)}_afterMinLabelCreate(e){this._set("minLabelElement",e)}_onAnchorKeyDown(e){if(this._isDisabled()||"editing"===this.state)return;const{target:t}=e,i=n(e),{_anchorElements:s,values:r}=this,a=t["data-thumb-index"],l=s[a],h=r[a],d=[_.moveAnchorUp,_.moveAnchorDown,_.moveAnchorLeft,_.moveAnchorRight];if(i===_.showInput&&this.labelInputsEnabled)this._activeLabelInputIndex=a,this.notifyChange("state");else if(d.includes(i)){e.preventDefault();const{steps:t}=this,n=i===_.moveAnchorUp||i===_.moveAnchorRight?1:-1;if(o(t))this._toStep(a,this._isReversedLayout()?-1*n:n);else{const{precision:e}=this,t=this._getPositionOfElement(l),i=this._valueFromPosition(t),s=this._isHorizontalLayout()?n:-1*n;let o;o=0===e?this._positionFromValue(i+s):1===e?this._positionFromValue(i+.1*s):t+s,this._toPosition(a,o)}const s=this.values[a];h!==s&&this._emitThumbChangeEvent({index:a,oldValue:h,value:s})}else if(i===_.moveAnchorToMax||i===_.moveAnchorToMin){e.preventDefault();const{min:t,max:n}=this._getAnchorBoundsInPixels(a),s=this._isPositionInverted()?i===_.moveAnchorToMax?t:n:i===_.moveAnchorToMin?t:n;this._toPosition(a,s);const o=this.values[a];h!==o&&this._emitThumbChangeEvent({index:a,oldValue:h,value:o})}}_onAnchorPointerDown(e){if(this._isDisabled())return;const{target:t,clientX:i,clientY:n}=e,s=t["data-thumb-index"];void 0!==s&&(e.preventDefault(),this._anchorElements[s]&&this._anchorElements[s].focus(),this._storeTrackDimensions(),this._dragStartInfo={clientX:i,clientY:n,index:s,position:this._getPositionOfElement(this._anchorElements[s])},this.notifyChange("state"),document.addEventListener("pointerup",this._onAnchorPointerUp),document.addEventListener("pointermove",this._onAnchorPointerMove))}_onAnchorPointerMove(e){if("editing"===this.state||!this._dragStartInfo)return;e.preventDefault();const{values:t,_anchorElements:i,_dragged:n,_dragStartInfo:s,_dragStartInfo:{index:o,position:r}}=this,{clientX:a,clientY:l}=e,h=n?"drag":"start",d=i[o],c=this._getPositionOfElement(d),u=this._applyPrecisionToPosition(this._isHorizontalLayout()?r+a-s.clientX:r+l-s.clientY);if(c===u)return;const m=t[o];this._dragged=!0,this._toPosition(o,u);const _=this.values[o];n?m!==_&&this._emitThumbDragEvent({index:o,state:h,value:_}):this._emitThumbDragEvent({index:o,state:h,value:m})}_onAnchorPointerUp(e){if(document.removeEventListener("pointerup",this._onAnchorPointerUp),document.removeEventListener("pointermove",this._onAnchorPointerMove),!this._dragStartInfo)return;e.preventDefault();const{index:t}=this._dragStartInfo,i=this._dragged,n=this.values[t];this._dragged=!1,this._dragStartInfo=null,this._lastMovedHandleIndex=t,this.notifyChange("state"),i?this._emitThumbDragEvent({index:t,state:"stop",value:n}):(this.scheduleRender(),"editing"!==this.state&&this._emitThumbClickEvent({index:t,value:n}))}_onTrackPointerDown(e){const{_dragStartInfo:t,snapOnClickEnabled:i,state:n,values:r}=this;if(this._isDisabled()||"editing"===n||t)return;if(document.addEventListener("pointermove",this._onTrackPointerMove),document.addEventListener("pointerup",this._onTrackPointerUp),!i||!r.length)return;const{steps:a}=this,{clientX:l,clientY:h}=e,d=this._getCursorPositionFromEvent(e),c=this._valueFromPosition(d),u=this._getIndexOfNearestValue(c),m=r[u],_=r.some(((e,t)=>e===m&&t!==u))&&c>m?this.values.lastIndexOf(m):u;if(s(_))return;const p=r[_],v=o(a)?this._calculateNearestStepPosition(d):d;this._toPosition(_,v),this._dragged=!0,this._dragStartInfo={clientX:l,clientY:h,index:_,position:v},this._focusedAnchorIndex=_,this.notifyChange("state"),this._emitThumbDragEvent({index:_,state:"start",value:p});const g=this.values[_];p!==g&&this._emitThumbDragEvent({index:_,state:"drag",value:g}),document.addEventListener("pointerup",this._onAnchorPointerUp),document.addEventListener("pointermove",this._onAnchorPointerMove)}_onTrackPointerMove(e){e.preventDefault(),this._dragged=!0}_onTrackPointerUp(e){if(e.preventDefault(),document.removeEventListener("pointermove",this._onTrackPointerMove),document.removeEventListener("pointerup",this._onTrackPointerUp),this.snapOnClickEnabled||(this._dragged=!1),!this._dragged){const t=this._getCursorPositionFromEvent(e),i=this._valueFromPosition(t);this._emitTrackClickEvent({value:i})}}_onSegmentPointerDown(e){e.preventDefault();const t=e.target,i=t["data-segment-index"],n=t["data-min-thumb-index"],o=t["data-max-thumb-index"];if(this._isDisabled()||s(n)||s(o))return;e.stopPropagation(),this._storeTrackDimensions(),document.addEventListener("pointerup",this._onSegmentPointerUp);const r=this._getAnchorDetails(n),a=this._getAnchorDetails(o);this.syncedSegmentsEnabled?(this.segmentElements.forEach((e=>e.classList.add("esri-slider__segment--active"))),this._anchorElements.forEach((e=>e.classList.add("esri-slider__anchor--active")))):(this.segmentElements.getItemAt(i).classList.add("esri-slider__segment--active"),this._anchorElements[r.index]?.classList.add("esri-slider__anchor--active"),this._anchorElements[a.index]?.classList.add("esri-slider__anchor--active")),this._segmentDragStartInfo={cursorPosition:this._getCursorPositionFromEvent(e),index:i,details:this._normalizeSegmentDetails({min:r,max:a})},this.draggableSegmentsEnabled&&(document.addEventListener("pointermove",this._onSegmentPointerMove),this.notifyChange("state"),this._emitSegmentDragEvent({index:i,state:"start",thumbIndices:[n,o]}))}_onSegmentPointerMove(e){if(!this._segmentDragStartInfo)return;e.preventDefault();const{_trackHeight:t,_trackWidth:i,_segmentDragStartInfo:{index:n,cursorPosition:s,details:{min:o,max:r}}}=this,{index:a,position:l,value:h}=o,{index:d,position:c,value:u}=r;this._dragged=!0;const m=this._getCursorPositionFromEvent(e);if(m===s)return;const _=this._positionToPercent(s),p=this._positionToPercent(m)-_,v=this._positionToPercent(l)+p,g=this._positionToPercent(c)+p,{min:f}=this._getAnchorBoundsAsPercents(a),{max:b}=this._getAnchorBoundsAsPercents(d);let E=!1,x=!1;if(v<f?E=!0:g>b&&(x=!0),E){const{min:e,max:t}=this.viewModel.getBoundsForValueAtIndex(a),i=this._isPositionInverted()?t:e,n=i,s=u+(i-h),o=s-this.values[d];return void(this.syncedSegmentsEnabled?this._updateAnchorValuesByDifference(o):this._updateAnchorValues([a,d],[n,s]))}if(x){const{min:e,max:t}=this.viewModel.getBoundsForValueAtIndex(d),i=this._isPositionInverted()?e:t,n=i,s=h+(i-u),o=s-this.values[a];return void(this.syncedSegmentsEnabled?this._updateAnchorValuesByDifference(o):this._updateAnchorValues([a,d],[s,n]))}const k=this._isHorizontalLayout()?i:t,y=g/100*k,P=v/100*k,I=this.values,A=[I[a],I[d]],L=this._getValueForAnchorAtPosition(a,P),M=this._getValueForAnchorAtPosition(d,y);this.syncedSegmentsEnabled?this._updateAnchorValuesByDifference(L-A[0]):this._updateAnchorValues([a,d],[L,M]),[this.values[a],this.values[d]].every(((e,t)=>e===A[t]))||this._emitSegmentDragEvent({index:n,state:"drag",thumbIndices:[a,d]})}_onSegmentPointerUp(e){if(e.preventDefault(),document.removeEventListener("pointerup",this._onSegmentPointerUp),document.removeEventListener("pointermove",this._onSegmentPointerMove),!this._segmentDragStartInfo)return;const{_dragged:t,max:i,min:n,values:s}=this,{index:o,details:{min:{index:r},max:{index:a}}}=this._segmentDragStartInfo;if(this.segmentElements.forEach((e=>e.classList.remove("esri-slider__segment--active"))),this._anchorElements.forEach((e=>e.classList.remove("esri-slider__anchor--active"))),this.draggableSegmentsEnabled){const e=i-n,t=s[r],l=s[a];this._lastMovedHandleIndex=t===l?t>e/2?r:a:null,this._dragged=!1,this._segmentDragStartInfo=null,this.notifyChange("state"),this._emitSegmentDragEvent({index:o,state:"stop",thumbIndices:[r,a]})}if(!t){const t=this._getCursorPositionFromEvent(e),i=this._valueFromPosition(t);this._emitSegmentClickEvent({index:o,value:i,thumbIndices:[r,a]})}}_onTickGroupClick(e){const t=e.target;if(t["data-config"]){const e=t["data-tick-config-index"],i=t["data-tick-group-index"],n=t["data-value"];this._emitTickClickEvent({configIndex:e,groupIndex:i,value:n})}}_storeTrackDimensions(){if(this.trackElement){const e=this._getDimensions(this.trackElement);this._trackHeight=e.height,this._trackWidth=e.width}}_onLabelPointerDown(){this._isDisabled()||(this._dragged=!1,document.addEventListener("pointerup",this._onAnchorPointerUp),document.addEventListener("pointermove",this._onAnchorPointerMove))}_onLabelPointerMove(){this._isDisabled()||(this._dragged=!0)}_onLabelPointerUp(e){if(this._isDisabled())return;const t=e.target["data-thumb-index"];this.labelInputsEnabled&&!this._dragged&&o(t)&&(this._activeLabelInputIndex=t),this._dragged=!1,this.notifyChange("state"),document.removeEventListener("pointerup",this._onLabelPointerUp),document.removeEventListener("pointermove",this._onLabelPointerMove)}_onLabelInputBlur(e){const{_activeLabelInputIndex:t,values:i,viewModel:n}=this,s=e.target.value;if(this._activeLabelInputIndex=null,this.notifyChange("state"),!s)return;const o=this._parseInputValue(s,"value",t),r=i[t],{min:a,max:l}=this.viewModel.getBoundsForValueAtIndex(t);if(o<a||o>l)return;n.setValue(t,o);const h=this.values[t];r!==h&&this._emitThumbChangeEvent({index:t,oldValue:r,value:h})}_onInputKeyDown(e){if(this._isDisabled())return;const{target:t}=e,i=n(e),{hideInput1:s,hideInput2:r,hideInput3:a}=_,{_activeLabelInputIndex:l,_anchorElements:h}=this,d=t;if(i===s||i===r||i===a){e.stopPropagation();const t=l;d.blur(),o(t)?h[t].focus():d.parentElement.focus()}}_onMaxLabelClick(){this._isDisabled()||(this._emitRangeLabelClickEvent({type:"max-click",value:this.max}),this.rangeLabelInputsEnabled&&(this._isMaxInputActive=!0,this.notifyChange("state")))}_onMaxLabelKeyDown(e){this._isDisabled()||n(e)!==_.showInput||(this._isMaxInputActive=!0,this.notifyChange("state"))}_onMaxInputBlur(e){const t=e.target.value;if(this._isMaxInputActive=!1,this.notifyChange("state"),!t)return;const i=this.max,n=this._parseInputValue(t,"max");n<=this.min||(this.viewModel.set("max",n),this.max!==i&&this._emitMaxChangeEvent({oldValue:i,value:this.max}))}_onMinLabelClick(){this._isDisabled()||(this._emitRangeLabelClickEvent({type:"min-click",value:this.min}),this.rangeLabelInputsEnabled&&(this._isMinInputActive=!0,this.notifyChange("state")))}_onMinLabelKeyDown(e){this._isDisabled()||n(e)!==_.showInput||(this._isMinInputActive=!0,this.notifyChange("state"))}_onMinInputBlur(e){const t=e.target.value;if(this._isMinInputActive=!1,this.notifyChange("state"),!t)return;const i=this.min,n=this._parseInputValue(t,"min");n>=this.max||(this.viewModel.set("min",n),this.min!==i&&this._emitMinChangeEvent({oldValue:i,value:this.min}))}_isDisabled(){return this.disabled||"disabled"===this.state}_positionFromValue(e){const{max:t,min:i}=this,n=t-i;if(0===n)return 0;const{_trackHeight:s,_trackWidth:o}=this,r=this._isHorizontalLayout();let a=r?parseFloat((o*(e-i)/n).toFixed(2)):parseFloat((s*(t-e)/n).toFixed(2));return this._isReversedLayout()&&(a=r?o-a:s-a),a}_valueFromPosition(e){const{_trackHeight:t,_trackWidth:i,max:n,min:s,precision:o}=this,r=n-s;let a=this._isHorizontalLayout()?e*r/i+s:r*(1e3-e/t*1e3)/1e3+s;return this._isReversedLayout()&&(a=n+s-a),parseFloat(a.toFixed(o))}_positionToPercent(e){const{_trackHeight:t,_trackWidth:i}=this,n=100*e/(this._isHorizontalLayout()?i:t);return this._applyPrecisionToPosition(n)}_applyPrecisionToPosition(e){return parseFloat(e.toFixed(this._positionPrecision))}_isPositionInverted(){const{layout:e}=this;return"horizontal-reversed"===e||"vertical"===e}_isHorizontalLayout(){return this.layout.includes("horizontal")}_isReversedLayout(){return this.layout.includes("reversed")}_normalizeSegmentDetails(e){if(this._isPositionInverted()){const{min:t,max:i}=e;return{min:i,max:t}}return e}_parseInputValue(e,t,i){return this.inputParseFunction?this.inputParseFunction(e,t,i):this.viewModel.defaultInputParseFunction(e)}_formatInputValue(e,t,i){return this.inputFormatFunction?this.inputFormatFunction(e,t,i):this.viewModel.defaultInputFormatFunction(e)}_getAnchorDetails(e){const t=[...this.values].sort(((e,t)=>e-t))[e],i=this.values.indexOf(t);return{index:i,position:this._getPositionOfElement(this._anchorElements[i]),value:t}}_updateAnchorStyle(e,t){const i=this._anchorElements[e];i&&(this._isHorizontalLayout()?i.style.left=`${t}`:i.style.top=`${t}`)}_getStyleForAnchor(e,t,i){const n=this._getPositionStyleForElement(e);if(1===this.values.length)return`${n}`;const s=this._zIndices[t];return`${n}; z-index: ${i?this._zIndexOffset+s:s}`}_getPositionStyleForElement(e){const t=this._positionFromValue(e),i=this._positionToPercent(t);return`${this._isHorizontalLayout()?"left":"top"}: ${i+"%"}`}_getPositionOfElement(e){const t=this._getDimensions(e.offsetParent),i=this._getDimensions(e);return this._isHorizontalLayout()?this._applyPrecisionToPosition(i.left-t.left):this._applyPrecisionToPosition(i.top-t.top)}_updateAnchorValues(e,t){e.forEach(((e,i)=>this._toValue(e,t[i])))}_updateAnchorValuesByDifference(e){const{min:t,max:i,values:n}=this;n.forEach(((n,s)=>this._toValue(s,Math.max(Math.min(n+e,i),t))))}_toValue(e,t){o(this.steps)&&(t=this._getStepValues()[this._getIndexOfNearestStepValue(t)]),this._updateAnchorStyle(e,this._getPositionStyleForElement(t)),this.viewModel.setValue(e,t)}_toPosition(e,t){const i=o(this.steps)?this._getStepValueForAnchorAtPosition(e,t):this._getValueForAnchorAtPosition(e,t);this._updateAnchorStyle(e,this._getPositionStyleForElement(i)),this.viewModel.setValue(e,i)}_getValueForAnchorAtPosition(e,t){const{min:i,max:n}=this._getAnchorBoundsInPixels(e),{min:s,max:o}=this.viewModel.getBoundsForValueAtIndex(e);let r,a,l=null;return this._isPositionInverted()?(r=s,a=o):(r=o,a=s),l=t>n?r:t<i?a:this._valueFromPosition(t),l>o?l=o:l<s&&(l=s),l}_getStepValueForAnchorAtPosition(e,t){const i=this._getStepValues(),n=this._calculateNearestStepPosition(t),s=this._getValueForAnchorAtPosition(e,n);return i[this._getIndexOfNearestStepValue(s)]}_getAnchorBoundsAsPercents(e){const{min:t,max:i}=this._getAnchorBoundsInPixels(e);return{min:this._positionToPercent(t),max:this._positionToPercent(i)}}_getAnchorBoundsInPixels(e){const{_anchorElements:t,_trackHeight:i,_trackWidth:n,effectiveMax:s,effectiveMin:r,thumbsConstrained:a}=this,l=t[e-1],h=t[e+1],d=this._isHorizontalLayout()?n:i;let c,u;return this._isPositionInverted()?(c=o(r)?this._positionFromValue(r):d,u=o(s)?this._positionFromValue(s):0):(c=o(s)?this._positionFromValue(s):d,u=o(r)?this._positionFromValue(r):0),a?this._isPositionInverted()?{max:l?this._getPositionOfElement(l):c,min:h?this._getPositionOfElement(h):u}:{max:h?this._getPositionOfElement(h):c,min:l?this._getPositionOfElement(l):u}:{max:c,min:u}}_getIndexOfNearestValue(e){return this.values.indexOf(this.values.reduce(((t,i)=>Math.abs(i-e)<Math.abs(t-e)?i:t)))}_getCursorPositionFromEvent(e){const t=this._getDimensions(this.trackElement);return this._isHorizontalLayout()?e.clientX-t.left:e.clientY-t.top}_getStepValues(){const{steps:e}=this;if(Array.isArray(e))return e;const{max:t,min:i}=this,n=Math.ceil((t-i)/e),s=[];for(let o=0;o<=n;o++){const n=i+e*o;s.push(n>t?t:n)}return s}_toStep(e,t){const{values:i,viewModel:n}=this,s=i[e],o=this._getStepValues(),r=o.indexOf(s);let a=null;if(r>-1){let i=o[r+t];isNaN(i)&&(i=o[r]);const n=this._positionFromValue(i);a=this._getStepValueForAnchorAtPosition(e,n)}else a=o[this._getIndexOfNearestStepValue(s)+t];n.setValue(e,a)}_getIndexOfNearestStepValue(e){const{steps:t}=this;if(s(t))return null;const i=this._getStepValues(),n=i.reduce(((t,i)=>Math.abs(i-e)<Math.abs(t-e)?i:t));return i.indexOf(n)}_calculateNearestStepPosition(e){const t=this._valueFromPosition(e),i=this._getIndexOfNearestStepValue(t),n=this._getStepValues();return this._positionFromValue(n[i])}_getTickCounts(e,t){const{mode:i}=t;return"count"===i||"position"===i?e||0:"percent"===i&&100/e||0}_calculateTickPositions(e){return e.map((e=>this._positionFromValue(e)))}_calculateEquidistantTickPositions(e){const{_trackWidth:t,_trackHeight:i}=this,n=this._isHorizontalLayout()?t:i,s=n/(e-1),o=[];if(1===e)return[n/2];for(let t=0;t<e;t++){const e=t*s;e<=n&&o.push(e)}return o}_getDimensions(e){try{return e.getBoundingClientRect()}catch(e){if("object"==typeof e&&null!==e)return new DOMRect(0,0,0,0);throw e}}_emitTrackClickEvent(e){this.emit("track-click",{...e,type:"track-click"})}_emitTickClickEvent(e){this.emit("tick-click",{...e,type:"tick-click"})}_emitMaxChangeEvent(e){this.emit("max-change",{...e,type:"max-change"})}_emitMinChangeEvent(e){this.emit("min-change",{...e,type:"min-change"})}_emitThumbChangeEvent(e){this.emit("thumb-change",{...e,type:"thumb-change"})}_emitThumbClickEvent(e){this.emit("thumb-click",{...e,type:"thumb-click"})}_emitThumbDragEvent(e){this.emit("thumb-drag",{...e,type:"thumb-drag"})}_emitSegmentClickEvent(e){this.emit("segment-click",{...e,type:"segment-click"})}_emitSegmentDragEvent(e){this.emit("segment-drag",{...e,type:"segment-drag"})}_emitRangeLabelClickEvent(e){this.emit(e.type,{...e})}};e([r()],v.prototype,"disabled",void 0),e([r()],v.prototype,"draggableSegmentsEnabled",void 0),e([r()],v.prototype,"effectiveMax",null),e([r()],v.prototype,"effectiveMin",null),e([r({readOnly:!0})],v.prototype,"effectiveSegmentElements",void 0),e([r()],v.prototype,"extraNodes",void 0),e([r()],v.prototype,"inputCreatedFunction",void 0),e([r()],v.prototype,"inputFormatFunction",null),e([r()],v.prototype,"inputParseFunction",null),e([r()],v.prototype,"label",null),e([r({readOnly:!0})],v.prototype,"labelElements",void 0),e([r()],v.prototype,"labelInputsEnabled",void 0),e([r()],v.prototype,"labelFormatFunction",null),e([r({readOnly:!0})],v.prototype,"labels",null),e([r({value:"horizontal"})],v.prototype,"layout",null),e([r()],v.prototype,"max",null),e([r({readOnly:!0})],v.prototype,"maxLabelElement",void 0),e([r(),u("esri/widgets/Slider/t9n/Slider")],v.prototype,"messages",void 0),e([r()],v.prototype,"min",null),e([r({readOnly:!0})],v.prototype,"minLabelElement",void 0),e([r()],v.prototype,"precision",null),e([r()],v.prototype,"rangeLabelInputsEnabled",void 0),e([r({readOnly:!0})],v.prototype,"segmentElements",void 0),e([r()],v.prototype,"snapOnClickEnabled",void 0),e([r({readOnly:!0})],v.prototype,"state",null),e([r()],v.prototype,"steps",void 0),e([r()],v.prototype,"syncedSegmentsEnabled",void 0),e([r()],v.prototype,"thumbsConstrained",null),e([r()],v.prototype,"thumbCreatedFunction",void 0),e([r({readOnly:!0})],v.prototype,"thumbElements",void 0),e([r()],v.prototype,"tickConfigs",null),e([r({readOnly:!0})],v.prototype,"tickElements",void 0),e([r({readOnly:!0})],v.prototype,"trackElement",void 0),e([r()],v.prototype,"values",null),e([r()],v.prototype,"viewModel",void 0),e([r()],v.prototype,"visibleElements",void 0),e([a("visibleElements")],v.prototype,"castVisibleElements",null),v=e([l("esri.widgets.Slider")],v);const g=v;export{g as default};