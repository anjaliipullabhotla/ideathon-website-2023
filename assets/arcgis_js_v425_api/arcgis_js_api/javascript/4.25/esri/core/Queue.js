// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["../chunks/_rollupPluginBabelHelpers","./maybe"],function(f,e){return function(){function d(a=c=>c.values().next().value){this._peeker=a;this._items=new Set}var b=d.prototype;b.clear=function(){this._items.clear()};b.last=function(){if(0!==this._items.size){for(var a of this._items);return a}};b.peek=function(){if(0!==this._items.size)return this._peeker(this._items)};b.push=function(a){this.contains(a)||this._items.add(a)};b.contains=function(a){return this._items.has(a)};b.pop=function(){if(0!==
this.length){var a=this.peek();this._items.delete(e.assumeNonNull(a));return a}};b.popLast=function(){if(0!==this.length){var a=this.last();this._items.delete(e.assumeNonNull(a));return a}};b.remove=function(a){this._items.delete(a)};b.filter=function(a){this._items.forEach(c=>{a(c)||this._items.delete(c)});return this};f._createClass(d,[{key:"length",get:function(){return this._items.size}}]);return d}()});