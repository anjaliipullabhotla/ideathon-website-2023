// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/JSONSupport ../core/lang ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/subclass ../webdoc/applicationProperties/Viewing".split(" "),function(h,c,a,k,d,n,l,m){var e;a=e=function(g){function f(b){b=g.call(this,b)||this;b.editing=null;b.offline=null;b.viewing=null;return b}h._inheritsLoose(f,g);f.prototype.clone=function(){return new e(k.clone({editing:this.editing,
offline:this.offline,viewing:this.viewing}))};return f}(a.JSONSupport);c.__decorate([d.property({json:{write:!0}})],a.prototype,"editing",void 0);c.__decorate([d.property({json:{write:!0}})],a.prototype,"offline",void 0);c.__decorate([d.property({type:m,json:{write:!0}})],a.prototype,"viewing",void 0);return a=e=c.__decorate([l.subclass("esri.webmap.ApplicationProperties")],a)});