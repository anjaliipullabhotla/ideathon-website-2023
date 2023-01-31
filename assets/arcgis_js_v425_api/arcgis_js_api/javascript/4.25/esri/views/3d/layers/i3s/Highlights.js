// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["../../../../core/arrayUtils","../II3SMeshView3D"],function(h,f){let k=function(){this.ids=new Set;this.paused=!1};return function(){function g({collection:a,forAllFeatures:b,forAllFeaturesOfNode:c}){this._highlights=[];this._collection=a;this._forAllFeatures=b;this._forAllFeaturesOfNode=c}var d=g.prototype;d.destroy=function(){this._highlights.forEach(a=>this._releaseSet(a));this._highlights=null};d.acquireSet=function(){const a=new k;this._highlights.push(a);return{set:a,handle:{remove:()=>
{this._releaseSet(a);h.removeUnordered(this._highlights,a)},pause:()=>{this._releaseSet(a);a.paused=!0},resume:()=>{a.paused=!1;this._initializeSet(a)}}}};d.setFeatureIds=function(a,b){b.forEach(c=>a.ids.add(c));this._initializeSet(a)};d._initializeSet=function(a){this._forAllFeatures((b,c,e)=>{a.ids.has(b)&&this._collection.addComponentHighlight(e.objectHandle,c);return f.ForAllFeaturesReturnType.CONTINUE})};d._releaseSet=function(a){this._forAllFeatures((b,c,e)=>{a.ids.has(b)&&this._collection.removeComponentHighlight(e.objectHandle,
c);return f.ForAllFeaturesReturnType.CONTINUE})};d.objectCreated=function(a){this._highlights.forEach(b=>{b.paused||this._forAllFeaturesOfNode(a,(c,e)=>{b.ids.has(c)&&this._collection.addComponentHighlight(a.objectHandle,e);return f.ForAllFeaturesReturnType.CONTINUE})})};d.objectDeleted=function(a){this._collection.clearHighlights(a.objectHandle)};return g}()});