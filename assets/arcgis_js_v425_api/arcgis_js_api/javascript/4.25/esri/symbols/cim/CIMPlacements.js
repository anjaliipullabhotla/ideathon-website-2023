// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports"],function(d){let f=function(){function c(){this.setIdentity()}var b=c.prototype;b.getAngle=function(){if(null==this.rz||0===this.rz&&1!==this.rzCos&&0!==this.rzSin)this.rz=Math.atan2(this.rzSin,this.rzCos);return this.rz};b.setIdentity=function(){this.tz=this.ty=this.tx=0;this.s=1;this.rz=this.ry=this.rx=0;this.rzCos=1;this.rzSin=0};b.setTranslate=function(a,e){this.tx=a;this.ty=e};b.setTranslateZ=function(a){this.tz=a};b.setRotateCS=function(a,e){this.rz=void 0;this.rzCos=a;this.rzSin=
e};b.setRotate=function(a){this.rz=a;this.rzSin=this.rzCos=void 0};b.setRotateY=function(a){this.ry=a};b.setScale=function(a){this.s=a};b.setMeasure=function(a){this.m=a};return c}(),g=function(){function c(){}c.prototype.next=function(){return null};return c}();d.EmptyPlacementCursor=g;d.Placement=f;Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});