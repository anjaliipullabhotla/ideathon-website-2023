/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{L as r}from"./Logger.js";import{a as e}from"./maybe.js";import{f as o,t,n as a,i as n}from"./mat3.js";import{c as f}from"./mat3f64.js";import{c as s}from"./mat4f64.js";import{t as m,n as y,d as i}from"./vec3.js";import{projectBuffer as c,computeTranslationToOriginAndRotation as p}from"../geometry/projection.js";import{c as u}from"./projectionEllipsoid.js";import{m as P,f as T,h as l}from"../geometry/SpatialReference.js";import{y2lat as A}from"../geometry/support/webMercatorUtils.js";import{a as d,B as F}from"./BufferView.js";import{t as E,a as g,n as C}from"./vec32.js";const _=r.getLogger("esri.geometry.support.meshUtils.normalProjection");function j(r,e,o,t,a){return b(t)?(S(Y.TO_PCPF,d.fromTypedArray(r),F.fromTypedArray(e),F.fromTypedArray(o),t,d.fromTypedArray(a)),a):(_.error("Cannot convert spatial reference to PCPF"),a)}function M(r,e,o,t,a){return b(t)?(S(Y.FROM_PCPF,d.fromTypedArray(r),F.fromTypedArray(e),F.fromTypedArray(o),t,d.fromTypedArray(a)),a):(_.error("Cannot convert to spatial reference from PCPF"),a)}function O(r,e,o){return c(r,e,0,o,u(e),0,r.length/3),o}function R(r,e,o){return c(r,u(o),0,e,o,0,r.length/3),e}function h(r,o,t){if(e(r))return o;const a=F.fromTypedArray(r),n=F.fromTypedArray(o);return E(n,a,t),o}function v(r,o,t){if(e(r))return o;a(x,t);const f=d.fromTypedArray(r),s=d.fromTypedArray(o);return g(s,f,x),n(x)||C(s,s),o}function L(r,o,t){if(e(r))return o;a(x,t);const f=d.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),s=d.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT);if(g(s,f,x),n(x)||C(s,s),r!==o)for(let e=3;e<r.length;e+=4)o[e]=r[e];return o}function V(r,e,o,t,a){if(!b(t))return _.error("Cannot convert spatial reference to PCPF"),a;S(Y.TO_PCPF,d.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),F.fromTypedArray(e),F.fromTypedArray(o),t,d.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT));for(let e=3;e<r.length;e+=4)a[e]=r[e];return a}function B(r,e,o,t,a){if(!b(t))return _.error("Cannot convert to spatial reference from PCPF"),a;S(Y.FROM_PCPF,d.fromTypedArray(r,16),F.fromTypedArray(e),F.fromTypedArray(o),t,d.fromTypedArray(a,16));for(let e=3;e<r.length;e+=4)a[e]=r[e];return a}function S(r,e,a,n,f,s){if(!e)return;const i=a.count,c=u(f);if(N(f))for(let a=0;a<i;a++)n.getVec(a,w),e.getVec(a,U),p(c,w,W,c),o(x,W),r===Y.FROM_PCPF&&t(x,x),m(U,U,x),s.setVec(a,U);else for(let f=0;f<i;f++){n.getVec(f,w),e.getVec(f,U),p(c,w,W,c),o(x,W);const i=A(a.get(f,1));let u=Math.cos(i);r===Y.TO_PCPF&&(u=1/u),x[0]*=u,x[1]*=u,x[2]*=u,x[3]*=u,x[4]*=u,x[5]*=u,r===Y.FROM_PCPF&&t(x,x),m(U,U,x),y(U,U),s.setVec(f,U)}return s}function b(r){return N(r)||function(r){return r.isWebMercator}(r)}function N(r){return r.isWGS84||P(r)||T(r)||l(r)}var Y;!function(r){r[r.TO_PCPF=0]="TO_PCPF",r[r.FROM_PCPF=1]="FROM_PCPF"}(Y||(Y={}));const w=i(),U=i(),W=s(),x=f();export{j as a,V as b,R as c,M as d,B as e,v as f,L as g,O as p,h as t};