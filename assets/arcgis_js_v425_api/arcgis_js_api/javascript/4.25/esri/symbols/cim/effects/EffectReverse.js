// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/lang","../../../geometry/support/jsonUtils","../CIMCursor"],function(d,g,h,k){let f=function(){function b(){}b.local=function(){null===b.instance&&(b.instance=new b);return b.instance};b.prototype.execute=function(a,c,e,m){return new l(a,c,e)};return b}();f.instance=null;let l=function(){function b(a,c,e){this._inputGeometries=a;this._reverse=void 0!==c.reverse?c.reverse:!0}b.prototype.next=function(){for(var a=this._inputGeometries.next();a;){if(!this._reverse)return a;
if(h.isPolyline(a))return a=g.clone(a),k.reverseMultipath(a.paths),a;a=this._inputGeometries.next()}return null};return b}();d.EffectReverse=f;Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});