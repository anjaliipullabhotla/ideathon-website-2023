// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("require exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/maybe ../../../core/promiseUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../portal/Portal ../../Widget ../../support/widgetUtils ../../support/decorators/messageBundle ../../support/jsxFactory".split(" "),function(g,e,m,h,l,r,k,y,z,t,u,v,A,p,c){e.SaveLayer=function(q){function n(a,
b){a=q.call(this,a,b)||this;a._folders=null;a._layer=null;a._userName=null;a.messages=null;a.messagesCommon=null;a.messagesIdentity=null;a.opened=!1;a.state="initialized";return a}m._inheritsLoose(n,q);var f=n.prototype;f.loadDependencies=function(){return Promise.all([new Promise((a,b)=>g(["../../../chunks/calcite-button"],a,b)),new Promise((a,b)=>g(["../../../chunks/calcite-combobox"],a,b)),new Promise((a,b)=>g(["../../../chunks/calcite-combobox-item"],a,b)),new Promise((a,b)=>g(["../../../chunks/calcite-icon"],
a,b)),new Promise((a,b)=>g(["../../../chunks/calcite-input"],a,b)),new Promise((a,b)=>g(["../../../chunks/calcite-label"],a,b)),new Promise((a,b)=>g(["../../../chunks/calcite-loader"],a,b)),new Promise((a,b)=>g(["../../../chunks/calcite-panel"],a,b))])};f.close=function(){this.opened=!1;this.state="initialized"};f.open=function(){var a=m._asyncToGenerator(function*(b){this.state="initialized";this.opened=!0;this._layer=b;this.state="connect-to-portal";b=u.getDefault();try{yield b._signIn()}catch(d){r.isAbortError(d)||
"identity-manager:user-aborted"===d.name?this.close():this.state="connect-to-portal-error";return}this.state="fetch-portal-information";({user:b}=b);this._userName=b.username;try{this._folders=yield b.fetchFolders()}catch{this.state="fetch-portal-information-error";return}this.state="save-layer"});return function(b){return a.apply(this,arguments)}}();f.render=function(){switch(this.state){case "initialized":return this._renderInitialized();case "connect-to-portal":return this._renderProcess(this.messagesIdentity.lblSigning);
case "connect-to-portal-error":return this._renderError(this.messages.errors.authenticating);case "fetch-portal-information":return this._renderProcess(this.messages.processing.fetching);case "fetch-portal-information-error":return this._renderError(this.messages.errors.fetching);case "save-layer":return this._renderSaveLayer();case "saving":return this._renderProcess(this.messages.processing.saving);case "saving-error":return this._renderError(this.messages.errors.saving)}};f._renderError=function(a){return c.tsx("calcite-panel",
{class:"esri-save-layer",heading:this.messages.widgetLabel,key:"esri-save-layer-error-panel"},c.tsx("div",{class:"esri-save-layer__error"},c.tsx("calcite-icon",{class:"esri-save-layer__error-icon",icon:"exclamation-mark-triangle",scale:"l",textLabel:this.messagesCommon.errorMessage}),c.tsx("calcite-label",{class:"esri-save-layer__error-label"},a)),c.tsx("calcite-button",{appearance:"outline",onclick:()=>{this.close()},slot:"footer-actions",width:"half"},this.messagesCommon.close))};f._renderInitialized=
function(){return c.tsx("calcite-panel",{class:"esri-save-layer",heading:this.messages.widgetLabel,key:"esri-save-layer-initialize-panel"})};f._renderProcess=function(a){return c.tsx("calcite-panel",{class:"esri-save-layer",heading:this.messages.widgetLabel,key:"esri-save-layer-process-panel"},c.tsx("calcite-loader",{class:"esri-save-layer__process-loader",label:a,active:!0}),c.tsx("calcite-label",{class:"esri-save-layer__process-label",alignment:"center"},a))};f._renderSaveLayer=function(){if(l.isNone(this._layer)||
l.isNone(this._folders)||l.isNone(this._userName))return this._renderInitialized();var {stops:a}=this._layer,b=a.getItemAt(0).name;a=a.getItemAt(a.length-1).name;b=`${b} - ${a}`;a=this._folders.map(d=>c.tsx("calcite-combobox-item",{key:`${"esri-save-layer"}-folder-${d.id}`,"text-label":d.title,value:d.id}));a.unshift(c.tsx("calcite-combobox-item",{key:"esri-save-layer-folder-home",selected:!0,"text-label":`${this._userName} (${this.messagesCommon.home})`,value:null}));return c.tsx("calcite-panel",
{class:"esri-save-layer",heading:this.messages.widgetLabel,key:"esri-save-layer-save-panel"},c.tsx("calcite-label",{class:"esri-save-layer__layer-name-label"},this.messages.laverName,c.tsx("calcite-input",{afterCreate:d=>{this._layerNameInput=d},label:this.messages.laverName,value:b})),c.tsx("calcite-label",{class:"esri-save-layer__portal-folder-label"},this.messages.saveInFolder,c.tsx("calcite-combobox",{afterCreate:d=>{this._portalFolderCombobox=d},label:this.messages.saveInFolder,"overlay-positioning":"fixed",
"selection-mode":"single"},a)),c.tsx("calcite-button",{onclick:()=>this._saveButtonClick(),slot:"footer-actions",width:"half"},this.messagesCommon.save),c.tsx("calcite-button",{appearance:"outline",onclick:()=>{this.close()},slot:"footer-actions",width:"half"},this.messagesCommon.cancel))};f._saveButtonClick=function(){this.state="saving";this._saveLayer().then(()=>{this.close()}).catch(()=>{this.state="saving-error"})};f._saveLayer=function(){var a=m._asyncToGenerator(function*(){if(!l.isNone(this._layer)&&
!l.isNone(this._folders)){var b=this._layerNameInput.value,d=this._portalFolderCombobox.value,x=this._folders.find(w=>w.id===d);yield this._layer.saveAs({title:b},{folder:x})}});return function(){return a.apply(this,arguments)}}();m._createClass(n,[{key:"label",get:function(){return this.messages?.widgetLabel??""},set:function(a){this._overrideIfSome("label",a)}}]);return n}(v);h.__decorate([k.property()],e.SaveLayer.prototype,"label",null);h.__decorate([k.property(),p.messageBundle("esri/widgets/support/t9n/SaveLayer")],
e.SaveLayer.prototype,"messages",void 0);h.__decorate([k.property(),p.messageBundle("esri/t9n/common")],e.SaveLayer.prototype,"messagesCommon",void 0);h.__decorate([k.property(),p.messageBundle("esri/identity/t9n/identity")],e.SaveLayer.prototype,"messagesIdentity",void 0);h.__decorate([k.property()],e.SaveLayer.prototype,"opened",void 0);h.__decorate([k.property()],e.SaveLayer.prototype,"state",void 0);e.SaveLayer=h.__decorate([t.subclass("esri.widgets.Directions.SaveLayer")],e.SaveLayer);Object.defineProperties(e,
{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});