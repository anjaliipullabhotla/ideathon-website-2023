/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import"./object.js";import{L as t}from"./LRUCache.js";import{o as e}from"./ensureType.js";import{i as n,a as s}from"./maybe.js";import{throwIfAborted as o}from"../core/promiseUtils.js";import{g as a}from"./unitUtils.js";import{g as i}from"./unitConversionUtils.js";import{clone as r}from"../core/lang.js";import{n as c}from"./string.js";function h(t=!1,e){if(t){const{elevationInfo:t,alignPointsInFeatures:n,spatialReference:s}=e;return new d(t,n,s)}return new u}class u{async alignCandidates(t,e){return t}notifyElevationSourceChange(){}}class d{constructor(e,n,s){this._elevationInfo=e,this._alignPointsInFeatures=n,this.spatialReference=s,this._alignmentsCache=new t(1024),this._cacheVersion=0,this._metersPerVerticalUnit=a(s)}async alignCandidates(t,e){const s=this._elevationInfo;return n(s)&&"absolute-height"===s.mode&&!s.featureExpressionInfo?(this._alignAbsoluteElevationCandidates(t,s),t):this._alignComputedElevationCandidates(t,e)}notifyElevationSourceChange(){this._alignmentsCache.clear(),this._cacheVersion++}_alignAbsoluteElevationCandidates(t,e){const{offset:n,unit:o}=e;if(s(n))return;const a=n*(i(o??"meters")/this._metersPerVerticalUnit);for(const e of t)switch(e.type){case"edge":e.start.z+=a,e.end.z+=a;continue;case"vertex":e.target.z+=a;continue}}async _alignComputedElevationCandidates(t,n){const s=new Map;for(const n of t)e(s,n.objectId,p).push(n);const[a,i,r]=this._prepareQuery(s),c=await this._alignPointsInFeatures(a,n);if(o(n),r!==this._cacheVersion)return this._alignComputedElevationCandidates(t,n);this._applyCacheAndResponse(a,c,i);const{drapedObjectIds:h,failedObjectIds:u}=c,d=[];for(const e of t){const{objectId:t}=e;h.has(t)&&"edge"===e.type&&(e.draped=!0),u.has(t)||d.push(e)}return d}_prepareQuery(t){const e=[],n=[];for(const[s,o]of t){const t=[];for(const e of o)this._addToQueriesOrCachedResult(s,e.target,t,n),"edge"===e.type&&(this._addToQueriesOrCachedResult(s,e.start,t,n),this._addToQueriesOrCachedResult(s,e.end,t,n));0!==t.length&&e.push({objectId:s,points:t})}return[e,n,this._cacheVersion]}_addToQueriesOrCachedResult(t,e,s,o){const a=l(t,e),i=this._alignmentsCache.get(a);n(i)?o.push(new f(e,i)):s.push(e)}_applyCacheAndResponse(t,{elevations:e,drapedObjectIds:n,failedObjectIds:s},o){for(const t of o)t.apply();let a=0;const i=this._alignmentsCache;for(const{objectId:o,points:r}of t){if(s.has(o)){a+=r.length;continue}const t=!n.has(o);for(const n of r){const s=l(o,n),r=e[a++];n.z=r,t&&i.put(s,r,1)}}}}class f{constructor(t,e){this.point=t,this.z=e}apply(){this.point.z=this.z}}function l(t,{x:e,y:n,z:s}){return`${t}-${e}-${n}-${s??0}}`}function p(){return[]}class g{filter(t,e){return e}notifyElevationSourceChange(){}}class y{filter(t,e){const{point:n,distance:s}=t,{z:o}=n;if(null==o)return e;if(0===e.length)return e;const a=function(t){return"number"==typeof t?{x:t,y:t,z:t}:t}(s),i=this._updateCandidatesTo3D(e,n,a).filter(_);return i.sort(x),i}_updateCandidatesTo3D(t,e,n){for(const s of t)switch(s.type){case"edge":C(s,e,n);continue;case"vertex":z(s,e,n);continue}return t}}function _(t){return t.distance<=1}function m(t=!1){return t?new y:new g}function C(t,e,{x:n,y:s,z:o}){const{start:a,end:i,target:r}=t;t.draped||function(t,e,n,s){const o=s.x-n.x,a=s.y-n.y,i=s.z-n.z,r=o*o+a*a+i*i,c=(e.x-n.x)*o+(e.y-n.y)*a+i*(e.z-n.z),h=Math.min(1,Math.max(0,c/r)),u=n.x+o*h,d=n.y+a*h,f=n.z+i*h;t.x=u,t.y=d,t.z=f}(r,e,a,i);const c=(e.x-r.x)/n,h=(e.y-r.y)/s,u=(e.z-r.z)/o;t.distance=Math.sqrt(c*c+h*h+u*u)}function z(t,e,{x:n,y:s,z:o}){const{target:a}=t,i=(e.x-a.x)/n,r=(e.y-a.y)/s,c=(e.z-a.z)/o,h=Math.sqrt(i*i+r*r+c*c);t.distance=h}function x(t,e){return t.distance-e.distance}function b(t=!1,e){return t?new I(e):new j}class j{async fetch(){return[]}notifySymbologyChange(){}}class I{constructor(e){this._getSymbologyCandidates=e,this._candidatesCache=new t(1024),this._cacheVersion=0}async fetch(t,e){if(0===t.length)return[];const n=[],s=[],a=this._candidatesCache;for(const e of t){const t=v(e),o=a.get(t);if(o)for(const t of o)s.push(r(t));else n.push(e),a.put(t,[],1)}if(0===n.length)return s;const i=this._cacheVersion,{candidates:c,sourceCandidateIndices:h}=await this._getSymbologyCandidates(n,e);if(o(e),i!==this._cacheVersion)return this.fetch(t,e);const u=[],{length:d}=c;for(let t=0;t<d;++t){const e=c[t],s=v(n[h[t]]),o=a.get(s);o.push(e),a.put(s,o,o.length),u.push(r(e))}return s.concat(u)}notifySymbologyChange(){this._candidatesCache.clear(),this._cacheVersion++}}function v(t){switch(t.type){case"vertex":{const{objectId:e,target:n}=t,s=`${e}-vertex-${n.x}-${n.y}-${n.z??0}`;return c(s).toString()}case"edge":{const{objectId:e,start:n,end:s}=t,o=`${e}-edge-${n.x}-${n.y}-${n.z??0}-to-${s.x}-${s.y}-${s.z??0}`;return c(o).toString()}default:return""}}export{m as a,b,h as g};
