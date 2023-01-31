// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/subclass ../intl/substitute ../widgets/Widget ../widgets/support/widgetUtils ../widgets/support/decorators/messageBundle ../widgets/support/jsxFactory".split(" "),function(q,e,f,d,C,r,t,u,m,v,b){d=function(n){function h(a,g){a=n.call(this,a,g)||this;a._usernameInputNode=null;a._passwordInputNode=null;a.signingIn=
!1;a.server=null;a.resource=null;a.error=null;a.oAuthPrompt=!1;return a}q._inheritsLoose(h,n);var k=h.prototype;k.render=function(){const {error:a,server:g,resource:w,signingIn:p,oAuthPrompt:l,messages:c}=this,x=b.tsx("div",{class:"esri-identity-form__group"},t.substitute(l?c.oAuthInfo:c.info,{server:g&&/\.arcgis\.com/i.test(g)?"ArcGIS Online":g,resource:`(${w||c.lblItem})`})),y=l?null:b.tsx("div",{class:"esri-identity-form__group",key:"username"},b.tsx("label",{class:"esri-identity-form__label"},
c.lblUser,b.tsx("input",{value:"",required:!0,autocomplete:"off",spellcheck:!1,type:"text",bind:this,afterCreate:m.storeNode,"data-node-ref":"_usernameInputNode",class:"esri-input"}))),z=l?null:b.tsx("div",{class:"esri-identity-form__group",key:"password"},b.tsx("label",{class:"esri-identity-form__label"},c.lblPwd,b.tsx("input",{value:"",required:!0,type:"password",bind:this,afterCreate:m.storeNode,"data-node-ref":"_passwordInputNode",class:"esri-input"}))),A=b.tsx("div",{class:this.classes("esri-identity-form__group",
"esri-identity-form__footer")},b.tsx("input",{type:"submit",disabled:!!p,value:p?c.lblSigning:c.lblOk,class:"esri-button"}),b.tsx("input",{type:"button",value:c.lblCancel,bind:this,onclick:this._cancel,class:this.classes("esri-button","esri-button--secondary")})),B=a?b.tsx("div",null,a.details&&a.details.httpStatus?c.invalidUser:c.noAuthService):null;return b.tsx("form",{class:"esri-identity-form",bind:this,onsubmit:this._submit},x,B,y,z,A)};k._cancel=function(){this._set("signingIn",!1);this._usernameInputNode&&
(this._usernameInputNode.value="");this._passwordInputNode&&(this._passwordInputNode.value="");this.emit("cancel")};k._submit=function(a){a.preventDefault();this._set("signingIn",!0);this.emit("submit",this.oAuthPrompt?{}:{username:this._usernameInputNode&&this._usernameInputNode.value,password:this._passwordInputNode&&this._passwordInputNode.value})};return h}(u);e.__decorate([f.property(),v.messageBundle("esri/identity/t9n/identity")],d.prototype,"messages",void 0);e.__decorate([f.property()],d.prototype,
"signingIn",void 0);e.__decorate([f.property()],d.prototype,"server",void 0);e.__decorate([f.property()],d.prototype,"resource",void 0);e.__decorate([f.property()],d.prototype,"error",void 0);e.__decorate([f.property()],d.prototype,"oAuthPrompt",void 0);return d=e.__decorate([r.subclass("esri.identity.IdentityForm")],d)});