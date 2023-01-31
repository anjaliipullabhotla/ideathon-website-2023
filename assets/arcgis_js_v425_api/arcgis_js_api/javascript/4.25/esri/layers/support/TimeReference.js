// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass".split(" "),function(l,d,b,g,p,q,m,n){var e;b=e=function(h){function f(a){a=h.call(this,a)||this;a.respectsDaylightSaving=!1;a.timezone=null;return a}l._inheritsLoose(f,h);var k=f.prototype;k.readRespectsDaylightSaving=
function(a,c){return void 0!==c.respectsDaylightSaving?c.respectsDaylightSaving:void 0!==c.respectDaylightSaving?c.respectDaylightSaving:!1};k.clone=function(){const {respectsDaylightSaving:a,timezone:c}=this;return new e({respectsDaylightSaving:a,timezone:c})};return f}(b.JSONSupport);d.__decorate([g.property({type:Boolean,json:{write:!0}})],b.prototype,"respectsDaylightSaving",void 0);d.__decorate([m.reader("respectsDaylightSaving",["respectsDaylightSaving","respectDaylightSaving"])],b.prototype,
"readRespectsDaylightSaving",null);d.__decorate([g.property({type:String,json:{read:{source:"timeZone"},write:{target:"timeZone"}}})],b.prototype,"timezone",void 0);return b=e=d.__decorate([n.subclass("esri.layers.support.TimeReference")],b)});