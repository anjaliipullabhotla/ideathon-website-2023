// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../core/Collection","../../core/maybe"],function(d,l,m,n){d.ManipulatorVisibilityPredicate=void 0;(function(e){e[e.WhenToolEditable=0]="WhenToolEditable";e[e.WhenToolNotEditable=1]="WhenToolNotEditable";e[e.Always=2]="Always"})(d.ManipulatorVisibilityPredicate||(d.ManipulatorVisibilityPredicate={}));let p=function(){function e(){this._isToolEditable=!0;this._manipulators=new m;this._resourceContexts={manipulator3D:{}};this._attached=!1}
var c=e.prototype;c.add=function(a,b=d.ManipulatorVisibilityPredicate.WhenToolEditable){this.addMany([a],b)};c.addMany=function(a,b=d.ManipulatorVisibilityPredicate.WhenToolEditable){for(const f of a)a={manipulator:f,visibilityPredicate:b,attached:!1},this._manipulators.add(a),this._attached&&this._updateManipulatorAttachment(a)};c.remove=function(a){for(let b=0;b<this._manipulators.length;b++)if(this._manipulators.getItemAt(b).manipulator===a){a=this._manipulators.splice(b,1)[0];this._detachManipulator(a);
break}};c.removeAll=function(){this._manipulators.forEach(a=>{this._detachManipulator(a)});this._manipulators.removeAll()};c.attach=function(){this._manipulators.forEach(a=>{this._updateManipulatorAttachment(a)});this._attached=!0};c.detach=function(){this._manipulators.forEach(a=>{this._detachManipulator(a)});this._attached=!1};c.destroy=function(){this.detach();this._manipulators.forEach(({manipulator:a})=>{a.destroy&&a.destroy()});this._manipulators.destroy();this._resourceContexts=null};c.on=
function(a,b){return this._manipulators.on(a,f=>{b(f)})};c.forEach=function(a){for(const b of this._manipulators.items)a(b)};c.some=function(a){return this._manipulators.items.some(a)};c.toArray=function(){const a=[];this.forEach(b=>a.push(b.manipulator));return a};c.intersect=function(a,b){let f=null,k=Number.MAX_VALUE;this._manipulators.forEach(({manipulator:h,attached:g})=>{g&&h.interactive&&(g=h.intersectionDistance(a,b),n.isSome(g)&&g<k&&(k=g,f=h))});return f};c._updateManipulatorAttachment=
function(a){this._isManipulatorItemVisible(a)?this._attachManipulator(a):this._detachManipulator(a)};c._attachManipulator=function(a){a.attached||(a.manipulator.attach&&a.manipulator.attach(this._resourceContexts),a.attached=!0)};c._detachManipulator=function(a){if(a.attached){var b=a.manipulator;b.grabbing=!1;b.dragging=!1;b.hovering=!1;b.selected=!1;b.detach&&b.detach(this._resourceContexts);a.attached=!1}};c._isManipulatorItemVisible=function(a){return a.visibilityPredicate===d.ManipulatorVisibilityPredicate.Always?
!0:this._isToolEditable?a.visibilityPredicate===d.ManipulatorVisibilityPredicate.WhenToolEditable:a.visibilityPredicate===d.ManipulatorVisibilityPredicate.WhenToolNotEditable};l._createClass(e,[{key:"isToolEditable",set:function(a){this._isToolEditable=a}},{key:"length",get:function(){return this._manipulators.length}}]);return e}();d.ManipulatorCollection=p;Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});