// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../Color ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/enumeration ../../core/accessorSupport/decorators/subclass ../../symbols/support/materialUtils ./Background".split(" "),function(k,c,l,m,f,r,n,p,q,a){var d;f={...q.colorAndTransparencyProperty,nonNullable:!0};a=d=function(g){function e(b){b=g.call(this,b)||this;b.type="color";
b.color=new l([0,0,0,1]);return b}k._inheritsLoose(e,g);var h=e.prototype;h.clone=function(){return new d(this.cloneProperties())};h.cloneProperties=function(){return{color:this.color.clone()}};return e}(a);c.__decorate([n.enumeration({color:"color"},{readOnly:!0})],a.prototype,"type",void 0);c.__decorate([m.property(f)],a.prototype,"color",void 0);return a=d=c.__decorate([p.subclass("esri.webscene.background.ColorBackground")],a)});