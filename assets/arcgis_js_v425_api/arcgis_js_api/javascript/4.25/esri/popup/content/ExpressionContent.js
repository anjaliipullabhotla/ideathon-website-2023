// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../ElementExpressionInfo ./Content".split(" "),function(h,c,f,a,n,k,l,m){var d;a=d=function(g){function e(b){b=g.call(this,b)||this;b.expressionInfo=null;b.type="expression";return b}h._inheritsLoose(e,g);e.prototype.clone=function(){return new d({expressionInfo:this.expressionInfo?.clone()})};
return e}(m);c.__decorate([f.property({type:l,json:{write:!0}})],a.prototype,"expressionInfo",void 0);c.__decorate([f.property({type:["expression"],readOnly:!0,json:{read:!1,write:!0}})],a.prototype,"type",void 0);return a=d=c.__decorate([k.subclass("esri.popup.content.ExpressionContent")],a)});