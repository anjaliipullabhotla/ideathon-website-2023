/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import t from"../core/Accessor.js";import{d as s}from"./maybe.js";import{property as i}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./ensureType.js";import{subclass as r}from"../core/accessorSupport/decorators/subclass.js";import{d as o,a as n}from"./vec2.js";import{Q as l}from"./QueueProcessor.js";import{c as h,j as a}from"./aaBoundingRect.js";import{a as c}from"./TileInfoView.js";import{T as u}from"./TileKey2.js";const p=new Set,y=[],d=new Map,g=[0,0];let f=class extends t{constructor(e){super(e),this._keyToItem=new Map,this.concurrency=6,this.strategy="scale-first",this.tileInfoView=null}initialize(){const{concurrency:e,process:t}=this;this._queue=new l({concurrency:e,process:(e,s)=>{const i=this._keyToItem.get(e);return t(i,{signal:s})},peeker:e=>e.values().next().value})}destroy(){this.clear(),this._queue=s(this._queue)}get length(){return this._queue?this._queue.length:0}get onGoingCount(){return this._keyToItem.size}get updating(){return this.length>0||this.onGoingCount>0}abort(e){const t="string"==typeof e?e:e.id;this._queue.abort(t)}clear(){this._queue.clear(),this._keyToItem.clear(),this.notifyChange("updating")}has(e){return"string"==typeof e?this._keyToItem.has(e):this._keyToItem.has(e.id)}isOngoing(e){const t="string"==typeof e?e:e.id;return this.has(t)&&this._queue.isOngoing(t)}pause(){this._queue.pause()}push(e,t){const s=e.key.id+"-"+t;if(this.has(s))return this.get(s);const i=this._queue.push(s),r=()=>{this._keyToItem.delete(s),this.notifyChange("updating")};return this._keyToItem.set(s,e),i.then(r,r),this.notifyChange("updating"),i}reset(){this._queue.reset(),this.notifyChange("updating")}resume(){this._queue.resume()}_peekByScaleFirst(e){if(!this.state)return e.values().next().value;const t=this.tileInfoView;let s=Number.NEGATIVE_INFINITY,i=Number.POSITIVE_INFINITY;e.forEach((e=>{const t=this._keyToItem.get(e),r=this.tileInfoView.getTileScale(t.key);d.has(r)||(d.set(r,[]),s=Math.max(r,s),i=Math.min(r,i)),d.get(r).push(t.key),p.add(r)}));let r=this.state.scale;var o,n;d.has(r)||(n=p,(o=y).length=0,n.forEach((e=>o.push(e))),y.sort(((e,t)=>e-t)),r=y.reduce(((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e),y[0])),r=Math.min(r,s),r=Math.max(r,i);const l=d.get(r),h=t.getClosestInfoForScale(r),a=h.getColumnForX(this.state.center[0]),c=h.getRowForY(this.state.center[1]);return l.sort(((e,t)=>{const s=h.denormalizeCol(e.col,e.world),i=h.denormalizeCol(t.col,t.world);return Math.sqrt((a-s)*(a-s)+(c-e.row)*(c-e.row))-Math.sqrt((a-i)*(a-i)+(c-t.row)*(c-t.row))})),p.clear(),d.clear(),l[0].id}_peekByCenterFirst(e){if(!this.state)return e.values().next().value;const t=this.tileInfoView,s=this.state.center;let i,r=Number.POSITIVE_INFINITY;return e.forEach((e=>{const n=this._keyToItem.get(e);t.getTileCoords(g,n.key);const l=o(g,s);l<r&&(r=l,i=n.key)})),i.id}};e([i({constructOnly:!0})],f.prototype,"concurrency",void 0),e([i({constructOnly:!0})],f.prototype,"process",void 0),e([i()],f.prototype,"state",void 0),e([i({constructOnly:!0})],f.prototype,"strategy",void 0),e([i({constructOnly:!0})],f.prototype,"tileInfoView",void 0),e([i({readOnly:!0})],f.prototype,"updating",null),f=e([r("esri.views.2d.tiling.PagedTileQueue")],f);const _=new Set,I=[],m=new Map,T=[0,0];let v=class extends t{constructor(e){super(e),this._keyToItem=new Map,this.concurrency=6,this.strategy="scale-first",this.tileInfoView=null}initialize(){const{concurrency:e,process:t,strategy:s}=this;this._queue=new l({concurrency:e,process:(e,s)=>{const i=this._keyToItem.get(e);return t(i,{signal:s})},peeker:"scale-first"===s?e=>this._peekByScaleFirst(e):e=>this._peekByCenterFirst(e)})}destroy(){this.clear(),this._queue=s(this._queue)}get length(){return this._queue?this._queue.length:0}get onGoingCount(){return this._keyToItem.size}get updating(){return this.length>0||this.onGoingCount>0}abort(e){const t="string"==typeof e?e:e.id;this._queue.abort(t)}clear(){this._queue.clear(),this._keyToItem.clear(),this.notifyChange("updating")}has(e){return"string"==typeof e?this._keyToItem.has(e):this._keyToItem.has(e.id)}isOngoing(e){const t="string"==typeof e?e:e.id;return this.has(t)&&this._queue.isOngoing(t)}pause(){this._queue.pause()}push(e){const t=e.key.id;if(this._queue.has(t))return this._queue.get(t);const s=this._queue.push(t),i=()=>{this._keyToItem.delete(t),this.notifyChange("updating")};return this._keyToItem.set(t,e),s.then(i,i),this.notifyChange("updating"),s}reset(){this._queue.reset()}resume(){this._queue.resume()}_peekByScaleFirst(e){if(!this.state)return e.values().next().value;const t=this.tileInfoView;let s=Number.NEGATIVE_INFINITY,i=Number.POSITIVE_INFINITY;e.forEach((e=>{const t=this._keyToItem.get(e),r=this.tileInfoView.getTileScale(t.key);m.has(r)||(m.set(r,[]),s=Math.max(r,s),i=Math.min(r,i)),m.get(r).push(t.key),_.add(r)}));let r=this.state.scale;var o,n;m.has(r)||(n=_,(o=I).length=0,n.forEach((e=>o.push(e))),I.sort(((e,t)=>e-t)),r=I.reduce(((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e),I[0])),r=Math.min(r,s),r=Math.max(r,i);const l=m.get(r),h=t.getClosestInfoForScale(r),a=h.getColumnForX(this.state.center[0]),c=h.getRowForY(this.state.center[1]);return l.sort(((e,t)=>{const s=h.denormalizeCol(e.col,e.world),i=h.denormalizeCol(t.col,t.world);return Math.sqrt((a-s)*(a-s)+(c-e.row)*(c-e.row))-Math.sqrt((a-i)*(a-i)+(c-t.row)*(c-t.row))})),_.clear(),m.clear(),l[0].id}_peekByCenterFirst(e){if(!this.state)return e.values().next().value;const t=this.tileInfoView,s=this.state.center;let i,r=Number.POSITIVE_INFINITY;return e.forEach((e=>{const n=this._keyToItem.get(e);t.getTileCoords(T,n.key);const l=o(T,s);l<r&&(r=l,i=n.key)})),i.id}};e([i({constructOnly:!0})],v.prototype,"concurrency",void 0),e([i({constructOnly:!0})],v.prototype,"process",void 0),e([i()],v.prototype,"state",void 0),e([i({constructOnly:!0})],v.prototype,"strategy",void 0),e([i({constructOnly:!0})],v.prototype,"tileInfoView",void 0),e([i({readOnly:!0})],v.prototype,"updating",null),v=e([r("esri.views.2d.tiling.TileQueue")],v);const w=v;class k{constructor(e,t,s){this.maxSize=e,this._tileInfoView=t,this._removedFunc=s,this._tilePerId=new Map,this._tileKeysPerLevel=[]}has(e){return this._tilePerId.has(e)}get(e){return this._tilePerId.get(e)}pop(e){const t=this._tilePerId.get(e);if(!t)return;const s=t.key.level,i=this._tileKeysPerLevel[s];C(this._tilePerId,e);for(let t=0;t<i.length;t++)if(i[t].id===e){i.splice(t,1);break}return t.visible=!0,t}add(e){e.visible=!1;const t=e.key,s=t.id;if(this._tilePerId.has(s))return;this._tilePerId.set(s,e);const i=t.level;this._tileKeysPerLevel[i]||(this._tileKeysPerLevel[i]=[]),this._tileKeysPerLevel[i].push(t)}prune(e,t,s){let i=this._tilePerId.size;if(i<=this.maxSize)return;let r=this._tileKeysPerLevel.length-1;for(;i>this.maxSize&&r>=0;)r!==e&&(i=this._pruneAroundCenterTile(i,t,s,r)),r--;i>this.maxSize&&(i=this._pruneAroundCenterTile(i,t,s,e))}_pruneAroundCenterTile(e,t,s,i){const r=this._tileKeysPerLevel[i];if(!r||0===r.length)return e;const{size:o,origin:l}=this._tileInfoView.tileInfo,h=s*o[0],a=s*o[1],c=[0,0],u=[0,0];for(r.sort(((e,s)=>(c[0]=l.x+h*(e.col+.5),c[1]=l.y-a*(e.row+.5),u[0]=l.x+h*(s.col+.5),u[1]=l.y-a*(s.row+.5),n(c,t)-n(u,t))));r.length>0;){const t=r.pop();if(this._removeTile(t.id),--e===this.maxSize)break}return e}_removeTile(e){const t=this._tilePerId.get(e);this._removedFunc&&t&&this._removedFunc(t),C(this._tilePerId,e)}}function C(e,t){e.delete(t)}const P=new u(0,0,0,0),q=new Map,b=[],x=[];class S{constructor(e){this._previousScale=Number.POSITIVE_INFINITY,this.cachePolicy="keep",this.coveragePolicy="closest",this.resampling=!0,this.tileIndex=new Map,this.tiles=[],this.buffer=192,this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,this.resampling=null==e.resampling||!!e.resampling,e.cachePolicy&&(this.cachePolicy=e.cachePolicy),e.coveragePolicy&&(this.coveragePolicy=e.coveragePolicy),null!=e.buffer&&(this.buffer=e.buffer),e.cacheSize&&(this._tileCache=new k(e.cacheSize,this.tileInfoView,(e=>{this.releaseTile(e)})))}destroy(){this.tileIndex.clear()}update(e){const{resampling:t,tileIndex:s}=this,i=this.tileInfoView.getTileCoverage(e.state,this.buffer,this.coveragePolicy);if(x.length=0,b.length=0,q.clear(),!i)return;const{minScale:r,maxScale:o}=this.tileInfoView.tileInfo,{spans:n,lodInfo:l}=i,{level:h}=l,{scale:a,center:u,resolution:p}=e.state,y=!e.stationary&&a>this._previousScale;if(this._previousScale=a,this.tiles.length=0,!t&&(a>r||a<o))return this.tiles.length=0,q.clear(),s.forEach((e=>{this.releaseTile(e)})),s.clear(),x.length=0,b.length=0,q.clear(),c.pool.release(i),!0;s.forEach((e=>e.visible=!0));let d=0,g=0;if(n.length>0)for(const{row:e,colFrom:t,colTo:i}of n)for(let r=t;r<=i;r++){d++;const t=P.set(h,e,l.normalizeCol(r),l.getWorldForColumn(r)).id;if(s.has(t)){const e=s.get(t);e.isReady?(q.set(t,e),g++):y||this._addParentTile(t,q)}else{let e;if(this._tileCache&&this._tileCache.has(t)){if(e=this._tileCache.pop(t),this.tileIndex.set(t,e),e.isReady){q.set(t,e),g++;continue}}else e=this.acquireTile(P),this.tileIndex.set(t,e);y||this._addParentTile(t,q)}}const f=g===d;s.forEach(((e,t)=>{if(P.set(t),q.has(t))return;const s=this.tileInfoView.intersects(i,P),r="purge"===this.cachePolicy?P.level!==h:P.level>h;!s||!y&&f?!r&&s||b.push(t):e.isReady?r&&"purge"===this.cachePolicy&&this._hasReadyAncestor(P,h)?b.push(t):x.push(t):r&&b.push(t)}));for(const e of x){const t=s.get(e);t&&t.isReady&&q.set(e,t)}for(const e of b){const t=s.get(e);this._tileCache?this._tileCache.add(t):this.releaseTile(t),s.delete(e)}return q.forEach((e=>this.tiles.push(e))),s.forEach((e=>{q.has(e.key.id)||(e.visible=!1)})),this._tileCache&&this._tileCache.prune(h,u,p),c.pool.release(i),q.clear(),f}clear(e=!0){const{tileIndex:t}=this;e&&t.forEach((e=>{this.releaseTile(e)})),t.clear()}updateCacheSize(e){this._tileCache&&(this._tileCache.maxSize=e)}_addParentTile(e,t){let s=e,i=null;for(;s=this.tileInfoView.getTileParentId(s),s;)if(this.tileIndex.has(s)){if(i=this.tileIndex.get(s),i&&i.isReady){t.has(i.key.id)||t.set(i.key.id,i);break}}else if(this._tileCache&&this._tileCache.has(s)&&(i=this._tileCache.pop(s),this.tileIndex.set(s,i),i&&i.isReady)){t.has(i.key.id)||t.set(i.key.id,i);break}}_hasReadyAncestor(e,t){const s=h();this.tileInfoView.getTileBounds(s,e,!0);for(const i of this.tileIndex.values())if(i.isReady&&i.key.level>=t&&i.key.level<e.level){const e=h();if(this.tileInfoView.getTileBounds(e,i.key,!0),a(e,s))return!0}return!1}}export{w as T,S as a};
