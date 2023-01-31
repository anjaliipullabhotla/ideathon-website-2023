// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","./GeometryUtils","./MemoryBuffer"],function(n,q,w,c){let x=function(d){function b(a){return d.call(this,a)||this}q._inheritsLoose(b,d);b.prototype.add=function(a,h,f,g,k,l,p,m,r,u,v,t){const e=this.array;a=c.i1616to32(a,h);e.push(a);a=c.i8888to32(Math.round(31*f),Math.round(31*g),Math.round(31*k),Math.round(31*l));e.push(a);a=c.i8888to32(Math.round(31*p),Math.round(31*m),Math.round(31*r),Math.round(31*u));e.push(a);a=c.i1616to32(v,
0);e.push(a);t&&e.push(...t)};return b}(c),y=function(d){function b(a){return d.call(this,a)||this}q._inheritsLoose(b,d);b.prototype.add=function(a,h,f){const g=this.array;g.push(c.i1616to32(a,h));f&&g.push(...f)};return b}(c),z=function(d){function b(a){return d.call(this,a)||this}q._inheritsLoose(b,d);b.prototype.add=function(a,h,f,g,k,l,p){const m=this.array,r=this.index;a=c.i1616to32(a,h);m.push(a);a=c.i8888to32(Math.round(15*f),Math.round(15*g),k,l);m.push(a);p&&m.push(...p);return r};return b}(c),
A=function(d){function b(a){return d.call(this,a)||this}q._inheritsLoose(b,d);b.prototype.add=function(a,h,f,g,k,l,p,m,r,u,v,t){const e=this.array;a=c.i1616to32(a,h);e.push(a);a=c.i1616to32(Math.round(8*f),Math.round(8*g));e.push(a);a=c.i8888to32(k/4,l/4,m,r);e.push(a);a=c.i8888to32(0,w.radToByte(p),10*u,Math.min(10*v,255));e.push(a);t&&e.push(...t)};return b}(c),B=function(d){function b(a){return d.call(this,a)||this}q._inheritsLoose(b,d);b.prototype.add=function(a,h,f,g,k){const l=this.array;a=
c.i1616to32(2*a+f,2*h+g);l.push(a);k&&l.push(...k)};return b}(c);n.CircleVertexBuffer=B;n.FillVertexBuffer=y;n.LineVertexBuffer=x;n.OutlineVertexBuffer=z;n.SymbolVertexBuffer=A;Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});