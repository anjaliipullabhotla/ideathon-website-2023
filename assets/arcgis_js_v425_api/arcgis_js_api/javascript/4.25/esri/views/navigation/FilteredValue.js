// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_rollupPluginBabelHelpers"],function(c,e){let f=function(){function b(a){this._gain=a}var d=b.prototype;d.update=function(a){this.filteredValue=void 0!==this.filteredValue?(1-this._gain)*this.filteredValue+this._gain*a:a};d.reset=function(){this.filteredValue=void 0};e._createClass(b,[{key:"hasFilteredValue",get:function(){return void 0!==this.filteredValue}}]);return b}();c.FilteredValue=f;Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});