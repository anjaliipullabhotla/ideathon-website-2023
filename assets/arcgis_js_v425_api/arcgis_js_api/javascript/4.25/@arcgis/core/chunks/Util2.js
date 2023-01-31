/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{a as t}from"./vec2f64.js";import{t as n}from"./mathUtils.js";import{c as a}from"./vec4f64.js";const r=a();class s{constructor(t){this.message=t}toString(){return`AssertException: ${this.message}`}}function o(t,n){if(!t)throw n=n||"assert",console.log(new Error(n).stack),new s(n)}function e(t,n){t||(n=n||"",console.warn("Verify failed: "+n+"\n"+new Error("verify").stack))}function c(t,n,a,r){let s,o=(a[0]-t[0])/n[0],e=(r[0]-t[0])/n[0];o>e&&(s=o,o=e,e=s);let c=(a[1]-t[1])/n[1],i=(r[1]-t[1])/n[1];if(c>i&&(s=c,c=i,i=s),o>i||c>e)return!1;c>o&&(o=c),i<e&&(e=i);let f=(a[2]-t[2])/n[2],u=(r[2]-t[2])/n[2];return f>u&&(s=f,f=u,u=s),!(o>u||f>e||(u<e&&(e=u),e<0))}function i(n,a,r,s,o,e=t()){const c=(s[o]-r[o])*(a[0]-n[0])-(s[0]-r[0])*(a[o]-n[o]),i=(s[0]-r[0])*(n[o]-r[o])-(s[o]-r[o])*(n[0]-r[0]);if(0===c)return!1;const f=i/c;return e[0]=n[0]+f*(a[0]-n[0]),e[1]=n[o]+f*(a[o]-n[o]),!0}function f(t,a,s,e,c){c||(c=t),r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=1,n(r,r,a),c.length>2&&(c[2]=-r[2]),n(r,r,s),o(0!==r[3]),c[0]=r[0]/r[3],c[1]=r[1]/r[3],c[2]=r[2]/r[3],c[0]=(.5*c[0]+.5)*e[2]+e[0],c[1]=(.5*c[1]+.5)*e[3]+e[1]}function u(t,n){return Math.log(t)/Math.log(n)}function h(t,n,a,r){t[12]=n,t[13]=a,t[14]=r}function M(t){return 1===t[0]&&0===t[1]&&0===t[2]&&0===t[3]&&0===t[4]&&1===t[5]&&0===t[6]&&0===t[7]&&0===t[8]&&0===t[9]&&1===t[10]&&0===t[11]&&1===t[15]}function l(t,n,a){return 2*Math.atan(Math.sqrt(n*n+a*a)*Math.tan(.5*t)/n)}function m(t,n,a){return 2*Math.atan(Math.sqrt(n*n+a*a)*Math.tan(.5*t)/a)}function g(t,n,a){return 2*Math.atan(n*Math.tan(.5*t)/Math.sqrt(n*n+a*a))}function p(t,n,a){return 2*Math.atan(a*Math.tan(.5*t)/Math.sqrt(n*n+a*a))}export{o as a,l as b,p as c,m as d,i as e,g as f,M as i,u as l,f as p,c as r,h as s,e as v};
