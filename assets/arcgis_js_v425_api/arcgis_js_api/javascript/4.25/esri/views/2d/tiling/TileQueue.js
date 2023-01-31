// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/maybe ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../chunks/vec2 ../../support/QueueProcessor".split(" "),function(x,m,h,B,p,G,H,C,D,E){function F(q,r){q.length=0;r.forEach(e=>q.push(e));return q}const w=new Set,u=[],t=new Map,y=[0,0];h=function(q){function r(a){a=
q.call(this,a)||this;a._keyToItem=new Map;a.concurrency=6;a.strategy="scale-first";a.tileInfoView=null;return a}x._inheritsLoose(r,q);var e=r.prototype;e.initialize=function(){const {concurrency:a,process:g,strategy:k}=this;this._queue=new E.QueueProcessor({concurrency:a,process:(b,d)=>{b=this._keyToItem.get(b);return g(b,{signal:d})},peeker:"scale-first"===k?b=>this._peekByScaleFirst(b):b=>this._peekByCenterFirst(b)})};e.destroy=function(){this.clear();this._queue=B.destroyMaybe(this._queue)};e.abort=
function(a){this._queue.abort("string"===typeof a?a:a.id)};e.clear=function(){this._queue.clear();this._keyToItem.clear();this.notifyChange("updating")};e.has=function(a){return"string"===typeof a?this._keyToItem.has(a):this._keyToItem.has(a.id)};e.isOngoing=function(a){a="string"===typeof a?a:a.id;return this.has(a)&&this._queue.isOngoing(a)};e.pause=function(){this._queue.pause()};e.push=function(a){const g=a.key.id;if(this._queue.has(g))return this._queue.get(g);const k=this._queue.push(g),b=()=>
{this._keyToItem.delete(g);this.notifyChange("updating")};this._keyToItem.set(g,a);k.then(b,b);this.notifyChange("updating");return k};e.reset=function(){this._queue.reset()};e.resume=function(){this._queue.resume()};e._peekByScaleFirst=function(a){if(!this.state)return a.values().next().value;const g=this.tileInfoView;let k=Number.NEGATIVE_INFINITY,b=Number.POSITIVE_INFINITY;a.forEach(f=>{f=this._keyToItem.get(f);const c=this.tileInfoView.getTileScale(f.key);t.has(c)||(t.set(c,[]),k=Math.max(c,k),
b=Math.min(c,b));t.get(c).push(f.key);w.add(c)});let d=this.state.scale;t.has(d)||(F(u,w),u.sort((f,c)=>f-c),d=u.reduce((f,c)=>Math.abs(c-d)<Math.abs(f-d)?c:f,u[0]));d=Math.min(d,k);d=Math.max(d,b);a=t.get(d);const l=g.getClosestInfoForScale(d),n=l.getColumnForX(this.state.center[0]),v=l.getRowForY(this.state.center[1]);a.sort((f,c)=>{const z=l.denormalizeCol(f.col,f.world),A=l.denormalizeCol(c.col,c.world);return Math.sqrt((n-z)*(n-z)+(v-f.row)*(v-f.row))-Math.sqrt((n-A)*(n-A)+(v-c.row)*(v-c.row))});
w.clear();t.clear();return a[0].id};e._peekByCenterFirst=function(a){if(!this.state)return a.values().next().value;const g=this.tileInfoView,k=this.state.center;let b=Number.POSITIVE_INFINITY,d;a.forEach(l=>{l=this._keyToItem.get(l);g.getTileCoords(y,l.key);const n=D.distance(y,k);n<b&&(b=n,d=l.key)});return d.id};x._createClass(r,[{key:"length",get:function(){return this._queue?this._queue.length:0}},{key:"onGoingCount",get:function(){return this._keyToItem.size}},{key:"updating",get:function(){return 0<
this.length||0<this.onGoingCount}}]);return r}(h);m.__decorate([p.property({constructOnly:!0})],h.prototype,"concurrency",void 0);m.__decorate([p.property({constructOnly:!0})],h.prototype,"process",void 0);m.__decorate([p.property()],h.prototype,"state",void 0);m.__decorate([p.property({constructOnly:!0})],h.prototype,"strategy",void 0);m.__decorate([p.property({constructOnly:!0})],h.prototype,"tileInfoView",void 0);m.__decorate([p.property({readOnly:!0})],h.prototype,"updating",null);return h=m.__decorate([C.subclass("esri.views.2d.tiling.TileQueue")],
h)});