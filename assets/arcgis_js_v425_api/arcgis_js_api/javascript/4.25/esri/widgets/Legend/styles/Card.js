// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../intl ../../../core/Handles ../../../core/reactiveUtils ../../../core/screenUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../symbols/support/svgUtils ../../../symbols/support/utils ../../Widget ./support/relationshipUtils ./support/univariateUtils ../support/styleUtils ../../support/Heading ../../support/decorators/accessibleHandler ../../support/decorators/messageBundle ../../support/jsxFactory ../../support/widgetUtils ../../../intl/substitute".split(" "),
function(K,u,t,L,E,F,v,S,T,M,N,G,O,P,r,p,A,Q,H,e,I,R){var z;(function(x){x.Auto="auto";x.Stack="stack";x.SideBySide="side-by-side"})(z||(z={}));const y=window.devicePixelRatio;t=function(x){function D(a,c){a=x.call(this,a,c)||this;a._handles=new L;a._hasIndicators=!1;a._selectedSectionName=null;a._sectionNames=[];a._sectionMap=new Map;a.activeLayerInfos=null;a.headingLevel=3;a.layout=z.Stack;a.messages=null;a.messagesCommon=null;a.type="card";a.view=null;return a}K._inheritsLoose(D,x);var n=D.prototype;
n.initialize=function(){this.addHandles(E.watch(()=>this.activeLayerInfos,a=>{this._handles.removeAll();this._watchForSectionChanges(a)}))};n.destroy=function(){this._handles.destroy();this._handles=null};n.render=function(){this._hasIndicators=this.layout===z.Auto&&768>=this.view.container.clientWidth||this.layout===z.Stack;var a=this.activeLayerInfos;a=a&&a.toArray().map(b=>this._renderLegendForLayer(b)).filter(b=>!!b);this._hasIndicators?this._selectedSectionName&&this._sectionNames.includes(this._selectedSectionName)||
(this._selectedSectionName=this._sectionNames&&this._sectionNames[0]):this._selectedSectionName=null;const c=this._sectionNames.length;var d=this._sectionNames.map((b,g)=>{g=R.substitute(this.messagesCommon.pagination.pageText,{index:g+1,total:c});return e.tsx("div",{key:b,role:"tab",id:b,"aria-label":g,"aria-controls":`${b}-panel`,"aria-selected":(this._selectedSectionName===b).toString(),tabIndex:this._selectedSectionName===b?0:-1,title:g,onclick:this._selectSection,onkeydown:this._focusSection,
bind:this,class:this.classes("esri-legend--card__carousel-indicator",{["esri-legend--card__carousel-indicator--activated"]:this._selectedSectionName===b}),"data-section-name":b})});d=this._hasIndicators&&1<c?e.tsx("div",{class:"esri-legend--card__carousel-indicator-container",key:"carousel-navigation",role:"tablist"},d):null;a=this._hasIndicators?this._sectionMap.get(this._selectedSectionName):a&&a.length?a:null;return e.tsx("div",{class:this.classes("esri-legend--card",{["esri-legend--stacked"]:this._hasIndicators})},
a?a:e.tsx("div",{class:"esri-legend--card__message"},this.messages.noLegend),d)};n._selectSection=function(a){if(a=a.target.getAttribute("data-section-name"))this._selectedSectionName=a};n._focusSection=function(a){switch(a.key){case "ArrowLeft":case "ArrowRight":this._switchSectionOnArrowPress(a);break;case "Enter":case " ":this._selectSection(a)}};n._switchSectionOnArrowPress=function(a){const c=a.key,d="ArrowLeft"===c?-1:1;a=a.target.getAttribute("data-section-name");a=this._sectionNames.indexOf(a);
const b=this._sectionNames;let g=null;-1!==a&&(b[a+d]?g=document.getElementById(b[a+d]):"ArrowLeft"===c?g=document.getElementById(b[b.length-1]):"ArrowRight"===c&&(g=document.getElementById(b[0])),g&&g.focus())};n._watchForSectionChanges=function(a){this._generateSectionNames();a&&(a.forEach(c=>{const d=`activeLayerInfo-${c.layer.uid}-version-change`;this._handles.remove(d);this._watchForSectionChanges(c.children);this._handles.add(E.watch(()=>c.version,()=>this._generateSectionNames()),d)}),this._handles.remove("activeLayerInfos-collection-change"),
this._handles.add(a.on("change",()=>this._watchForSectionChanges(a)),"activeLayerInfos-collection-change"))};n._generateSectionNames=function(){this._sectionNames.length=0;this._selectedSectionName=null;this.activeLayerInfos&&this.activeLayerInfos.forEach(this._generateSectionNamesForActiveLayerInfo,this)};n._getSectionName=function(a,c,d){return`${this.id}${a.uid}-type-${c.type}-${d}`};n._generateSectionNamesForActiveLayerInfo=function(a){a.children.forEach(this._generateSectionNamesForActiveLayerInfo,
this);a.legendElements&&a.legendElements.forEach((c,d)=>{this._sectionNames.push(this._getSectionName(a.layer,c,d))})};n._renderLegendForLayer=function(a){if(!a.ready)return null;if(a.children.length){var c=a.children.map(b=>this._renderLegendForLayer(b)).toArray();return e.tsx("div",{key:a.layer.uid,class:this.classes("esri-legend--card__service","esri-legend--card__group-layer")},e.tsx("div",{class:"esri-legend--card__service-caption-container"},a.title),c)}if((c=a.legendElements)&&!c.length)return null;
const d=c.some(b=>"relationship-ramp"===b.type);c=c.map((b,g)=>this._renderLegendForElement(b,a,g,d)).filter(b=>!!b);return c.length?e.tsx("div",{key:a.layer.uid,class:this.classes("esri-legend--card__service",{["esri-legend--card__group-layer-child"]:!!a.parent})},e.tsx("div",{class:"esri-legend--card__service-caption-container"},e.tsx("div",{class:"esri-legend--card__service-caption-text"},a.title)),e.tsx("div",{class:"esri-legend--card__service-content"},c)):null};n._renderLegendForElement=function(a,
c,d,b=!1,g=!1){var h="color-ramp"===a.type,f="opacity-ramp"===a.type,m="size-ramp"===a.type;const k=c.layer;var l=null;"string"===typeof a.title?l=a.title:a.title&&(l=a.title,h=p.getTitle(this.messages,l,h||f),l=l.title?`${l.title} (${h})`:h);d=this._getSectionName(k,a,d);h=this._hasIndicators&&!g?e.tsx("div",null,e.tsx(A.Heading,{level:this.headingLevel,class:"esri-legend--card__carousel-title"},c.title),e.tsx(A.Heading,{level:A.incrementHeadingLevel(this.headingLevel),class:"esri-legend--card__layer-caption"},
l)):l?e.tsx(A.Heading,{level:this.headingLevel,class:"esri-legend--card__layer-caption"},l):null;l=c.effectList;f=null;"symbol-table"===a.type?(m=a.infos.map((q,w)=>this._renderLegendForElementInfo(q,c,a.legendType,w)).filter(q=>!!q),m.length&&(f=e.tsx("div",{class:this.classes({["esri-legend--card__label-container"]:!(m[0].properties.classes&&m[0].properties.classes["esri-legend--card__symbol-row"])&&!b,["esri-legend--card__relationship-label-container"]:b})},m))):"color-ramp"===a.type||"opacity-ramp"===
a.type||"heatmap-ramp"===a.type?f=this._renderLegendForRamp(a,k.opacity,l):m?f=this._renderSizeRamp(a,k.opacity):"pie-chart-ramp"===a.type?f=this._renderPieChartRamp(a):"relationship-ramp"===a.type?f=P.renderRelationshipRamp(a,this.id,k.opacity,l):"univariate-above-and-below-ramp"===a.type?f=this._renderUnivariateAboveAndBelowRamp(a,k.opacity,l):"univariate-color-size-ramp"===a.type&&(f=this._renderUnivariateColorSizeRamp(a,k.opacity,l));if(!f)return null;b=e.tsx("div",{key:d,class:"esri-legend--card__section",
id:`${d}-panel`,role:"tabpanel","aria-labelledby":d,tabIndex:0},[h,f]);g||this._sectionMap.set(d,b);return b};n._renderPieChartRamp=function(a){return e.tsx("div",{class:"esri-legend--card__pie-chart-ramp-preview",bind:a.preview,afterCreate:p.attachToNode})};n._renderUnivariateAboveAndBelowRamp=function(a,c,d){const {sizeRampElement:b,colorRampElement:g}=r.getUnivariateAboveAndBelowRampElements(a,c,"horizontal");if(!b)return null;a=r.getUnivariateSizeRampSize(b,"full",!0,"horizontal");var h=r.getUnivariateColorRampSize(b,
"above",!0,"horizontal"),f=r.getUnivariateColorRampSize(b,"below",!0,"horizontal");h=r.getUnivariateColorRampPreview(g,{width:h,height:12,rampAlignment:"horizontal",opacity:c,type:"above",effectList:d});c=r.getUnivariateColorRampPreview(g,{width:f,height:12,rampAlignment:"horizontal",opacity:c,type:"below",effectList:d});d=r.getUnivariateColorRampMargin(b,"card");f=b.infos.map(l=>l.label);const m=f.length-1;f=f.map((l,q)=>0===q||q===m?e.tsx("div",{key:q},l):null);const k={marginTop:"3px",display:"flex"};
I.isRTL(this.container)?k.marginRight=`${d}px`:k.marginLeft=`${d}px`;a={width:`${a}px`,display:"flex",flexDirection:"row",justifyContent:"space-between"};return e.tsx("div",{class:"esri-legend--card__layer-row",key:"size-ramp-preview",styles:{display:"flex",flexDirection:"column"}},e.tsx("div",{class:this.classes("esri-legend--card__symbol-container","esri-legend__size-ramp--horizontal"),styles:{display:"flex",flexDirection:"row"}},b.infos.map((l,q)=>e.tsx("div",{key:q,class:"esri-legend--card__symbol",
bind:l.preview,afterCreate:p.attachToNode}))),h?e.tsx("div",{class:"esri-univariate-above-and-below-ramp__color--card",styles:k,key:"color-ramp-preview"},e.tsx("div",{bind:h,afterCreate:p.attachToNode}),e.tsx("div",{bind:c,afterCreate:p.attachToNode})):null,e.tsx("div",{class:"esri-legend__layer-cell esri-legend__layer-cell--info"},e.tsx("div",{class:"esri-legend__ramp-labels",styles:a},f)))};n._renderUnivariateColorSizeRamp=function(a,c,d){const {sizeRampElement:b,colorRampElement:g}=r.getUnivariateColorSizeRampElements(a,
"horizontal");if(!b)return null;a=r.getUnivariateSizeRampSize(b,"full",!1,"horizontal");var h=r.getUnivariateColorRampSize(b,"full",!1,"horizontal");c=r.getUnivariateColorRampPreview(g,{width:h,height:12,rampAlignment:"horizontal",opacity:c,type:"full",effectList:d});const f=r.getUnivariateColorRampMargin(b,"card"),m=b.infos.length-1;d=b.infos.map((k,l)=>0===l||l===m?e.tsx("div",{key:l},k.label):null);h={marginTop:"3px",display:"flex"};I.isRTL(this.container)?h.marginRight=`${f}px`:h.marginLeft=`${f}px`;
a={width:`${a}px`,display:"flex",flexDirection:"row",justifyContent:"space-between"};return e.tsx("div",{class:"esri-legend--card__layer-row",key:"size-ramp-preview",styles:{display:"flex",flexDirection:"column"}},e.tsx("div",{class:this.classes("esri-legend--card__symbol-container","esri-legend__size-ramp--horizontal"),styles:{display:"flex",flexDirection:"row"}},b.infos.map((k,l)=>e.tsx("div",{key:l,class:"esri-legend--card__symbol",bind:k.preview,afterCreate:p.attachToNode}))),e.tsx("div",{class:"esri-univariate-above-and-below-ramp__color--card",
styles:h,key:"color-ramp-preview"},e.tsx("div",{bind:c,afterCreate:p.attachToNode})),e.tsx("div",{class:"esri-legend__layer-cell esri-legend__layer-cell--info"},e.tsx("div",{class:"esri-legend__ramp-labels",styles:a},d)))};n._renderLegendForElementInfo=function(a,c,d,b){var g=c.layer;if(a.type)return this._renderLegendForElement(a,c,b,!1,!0);d=p.isImageryStretchedLegend(g,d);if(a.preview){if(!a.symbol||!a.symbol.type.includes("simple-fill")){if(!a.label)return e.tsx("div",{key:b,bind:a.preview,afterCreate:p.attachToNode});
c={["esri-legend--card__symbol-cell"]:this._hasIndicators};return e.tsx("div",{key:b,class:this.classes("esri-legend--card__layer-row",{["esri-legend--card__symbol-row"]:this._hasIndicators})},e.tsx("div",{class:this.classes(c),bind:a.preview,afterCreate:p.attachToNode}),e.tsx("div",{class:this.classes("esri-legend--card__image-label",{["esri-legend--card__label-cell"]:this._hasIndicators})},p.getTitle(this.messages,a.label,!1)||""))}let h=d=255,f=255,m=0,k=255,l=255,q=255,w=0;const B=a.symbol.color&&
a.symbol.color.a,J=a.symbol.outline&&a.symbol.outline.color&&a.symbol.outline.color.a;B&&(d=a.symbol.color.r,h=a.symbol.color.g,f=a.symbol.color.b,m=a.symbol.color.a*g.opacity);J&&(k=a.symbol.outline.color.r,l=a.symbol.outline.color.g,q=a.symbol.outline.color.b,w=a.symbol.outline.color.a*g.opacity);const C=(g=a.symbol.color?.isBright??!0)?"rgba(255, 255, 255, .6)":"rgba(0, 0, 0, .6)";c={background:B?`rgba(${d}, ${h}, ${f}, ${m})`:"none",color:g?"black":"white",textShadow:`-1px -1px 0 ${C},\n                                              1px -1px 0 ${C},\n                                              -1px 1px 0 ${C},\n                                              1px 1px 0 ${C}`,
border:J?`1px solid rgba(${k}, ${l}, ${q}, ${w})`:"none",filter:G.getCSSFilterFromEffectList(c.effectList)};return e.tsx("div",{key:b,class:"esri-legend--card__layer-row"},e.tsx("div",{class:"esri-legend--card__label-element",styles:c}," ",a.label," "))}if(a.src)return c=this._renderImage(a,g,d),e.tsx("div",{key:b,class:"esri-legend--card__layer-row"},c,e.tsx("div",{class:"esri-legend--card__image-label"},a.label||""))};n._renderImage=function(a,c,d){const {label:b,src:g,opacity:h}=a;d={["esri-legend--card__imagery-layer-image--stretched"]:d,
["esri-legend--card__symbol"]:!d};c={opacity:`${null!=h?h:c.opacity}`};return e.tsx("img",{alt:p.getTitle(this.messages,b,!1),src:g,border:0,width:a.width,height:a.height,class:this.classes(d),styles:c})};n._renderSizeRampLines=function(a){a=a.infos;var c=a[0],d=a[a.length-1],b=c.symbol;a=this._hasIndicators;c=F.pt2px(c.size+c.outlineSize)*y;d=F.pt2px(d.size+d.outlineSize)*y;const g=a?c:c+50*y,h=a?c/2+50*y:c;var f;b?b.type.includes("3d")?(f=b.symbolLayers&&b.symbolLayers.length)?(f=b.symbolLayers.getItemAt(f-
1).get("resource.primitive"),f="triangle"===f||"cone"===f||"tetrahedron"===f):f=void 0:f="triangle"===b.style:f=void 0;if(b)if(b.type.includes("3d")){var m=b.symbolLayers&&b.symbolLayers.length;m?(b=b.symbolLayers.getItemAt(m-1),b=b.resource&&b.resource.primitive,b="circle"===b||"cross"===b||"kite"===b||"sphere"===b||"cube"===b||"diamond"===b):b=void 0}else b=b.style,b="circle"===b||"diamond"===b||"cross"===b;else b=void 0;m=document.createElement("canvas");m.width=g;m.height=h;m.style.width=`${m.width/
y}px`;m.style.height=`${m.height/y}px`;const k=m.getContext("2d");if(a){k.beginPath();var l=g/2-d/2;k.moveTo(0,0);k.lineTo(l,h);l=g/2+d/2;k.moveTo(g,0);k.lineTo(l,h)}else k.beginPath(),k.moveTo(0,h/2-d/2),k.lineTo(g,0),k.moveTo(0,h/2+d/2),k.lineTo(g,h);k.strokeStyle="#ddd";k.stroke();return e.tsx("div",{bind:m,afterCreate:p.attachToNode,styles:a?{display:"flex",marginTop:`-${f?0:b?c/2:0}px`,marginBottom:`-${f?d:b?d/2:0}px`}:{display:"flex",marginRight:`-${f?0:b?c/2:0}px`,marginLeft:`-${f?0:b?d/2:
0}px`}})};n._renderSizeRamp=function(a,c){var d=a.infos;const b=d[0].label,g=d[d.length-1].label;let h=d[0].preview;d=d[d.length-1].preview;const f=this._hasIndicators,m={"flex-direction":f?"column":"row-reverse"};h&&(h=h.cloneNode(!0),h.style.display="flex");d&&(d=d.cloneNode(!0),d.style.display="flex");c={opacity:null!=c?`${c}`:""};return e.tsx("div",{class:this.classes("esri-legend--card__layer-row",{["esri-legend--card__size-ramp-row"]:f})},e.tsx("div",{class:"esri-legend--card__ramp-label"},
f?b:g),e.tsx("div",{class:"esri-legend--card__size-ramp-container",styles:m},e.tsx("div",{bind:h,afterCreate:p.attachToNode,class:"esri-legend--card__size-ramp-preview",styles:c}),this._renderSizeRampLines(a),e.tsx("div",{bind:d,afterCreate:p.attachToNode,class:"esri-legend--card__size-ramp-container",styles:c})),e.tsx("div",{class:"esri-legend--card__ramp-label"},f?g:b))};n._renderLegendForRamp=function(a,c,d){var b=a.infos;const g="heatmap-ramp"===a.type,h=b.length-1;var f=2<h&&!g?25*h:100,m=f+
20;const k=b.slice(0).reverse();k.forEach((w,B)=>{w.offset=g?w.ratio:B/h});const l=k.length-1;a=(a=0!==k.length%2&&k[k.length/2|0])&&e.tsx("div",{class:"esri-legend--card__interval-separators-container"},e.tsx("div",{class:"esri-legend--card__interval-separator"},"|"),e.tsx("div",{class:"esri-legend--card__ramp-label"},a.label));const q=b[b.length-1].label;b=b[0].label;f=N.renderSVG([[{shape:{type:"path",path:"M0 12.5 L10 0 L10 25 Z"},fill:k[0].color,stroke:{width:0}},{shape:{type:"rect",x:10,y:0,
width:f,height:25},fill:{type:"linear",x1:10,y1:0,x2:f+10,y2:0,colors:k},stroke:{width:0}},{shape:{type:"path",path:`M${f+10} 0 L${m} ${12.5} L${f+10} ${25} Z`},fill:k[l].color,stroke:{width:0}}]],m,25);({messages:m}=this);c={filter:G.getCSSFilterFromEffectList(d),opacity:null==c?null:`${c}`};return e.tsx("div",{class:"esri-legend--card__layer-row",styles:{justifyContent:"center"}},e.tsx("div",{class:"esri-legend--card__ramp-label"},g?m[q]:q),e.tsx("div",{class:"esri-legend--card__symbol-container"},
e.tsx("div",{styles:c},f),a),e.tsx("div",{class:"esri-legend--card__ramp-label"},g?m[b]:b))};return D}(O);u.__decorate([v.property()],t.prototype,"activeLayerInfos",void 0);u.__decorate([v.property()],t.prototype,"headingLevel",void 0);u.__decorate([v.property()],t.prototype,"layout",void 0);u.__decorate([v.property(),H.messageBundle("esri/widgets/Legend/t9n/Legend")],t.prototype,"messages",void 0);u.__decorate([v.property(),H.messageBundle("esri/t9n/common")],t.prototype,"messagesCommon",void 0);
u.__decorate([v.property({readOnly:!0})],t.prototype,"type",void 0);u.__decorate([v.property()],t.prototype,"view",void 0);u.__decorate([Q.accessibleHandler()],t.prototype,"_selectSection",null);return t=u.__decorate([M.subclass("esri.widgets.Legend.styles.Card")],t)});