// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/maybe","./basicInterfaces"],function(d,e,h){let k=function(){function f(b,a){this._material=b;this._repository=a;this._map=new Map}var g=f.prototype;g.destroy=function(){this._map.forEach((b,a)=>{e.isSome(b)&&this._repository.release(this._material,a)})};g.load=function(b,a,c){if(!this._material.requiresSlot(a,c))return null;this._map.has(c)||this._map.set(c,this._repository.acquire(this._material,a,c));a=this._map.get(c);if(e.isSome(a)){if(a.ensureResources(b)===
h.ResourceState.LOADED)return a;this._repository.requestRender()}return null};return f}();d.GLMaterials=k;Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});