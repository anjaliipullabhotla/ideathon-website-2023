// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/CircularArray ../../../../../core/has ../../../../../core/maybe ../support/FeatureSetReaderJSON ../support/UpdateToken".split(" "),function(k,m,n,p,c,q,f){let u=function(){function g(a,b){this.requests={done:[],stream:new n(10)};this._edits=null;this._abortController=new AbortController;this._version=0;this.didSend=this._done=!1;this.tile=a;this._version=b}var d=g.prototype;d.end=function(){this._done=!0};d.clear=
function(){this.requests.done=[]};d.applyUpdate=function(a){this.requests.done.forEach(b=>b.message.status.unset(a));this._version=a.version;c.isSome(this._edits)&&this._edits.status.unset(a)};d.add=function(a){a.message.status=a.message.status??f.UpdateToken.empty();a.message.status.version=this._version;p("esri-2d-update-debug")&&console.debug(this.tile.id,"DataTileSubscription:add",this._version);a.message.end&&this.requests.done.forEach(b=>{c.isSome(b.message)&&b.message.end&&(b.message.end=!1)});
this.requests.done.push(a)};d.edit=function(a,b){const e=a.getQuantizationTransform(),r=a.fullSchema(),l=Array.from(a.features()),t=l.map(h=>h.objectId);b=[...b,...t];this.removeIds(b);this._invalidate();c.isNone(this._edits)?this._edits={type:"append",addOrUpdate:q.FeatureSetReaderJSON.fromOptimizedFeatures(l,r,c.unwrap(e)),id:this.tile.id,status:f.UpdateToken.empty(),end:!0}:(this.requests.done.forEach(h=>h.message.end=!1),c.unwrap(this._edits.addOrUpdate).append(a.features()))};d.readers=function*(){for(const {message:a}of this.requests.done)c.isSome(a.addOrUpdate)&&
(yield a.addOrUpdate);c.isSome(this._edits)&&c.isSome(this._edits.addOrUpdate)&&(yield this._edits.addOrUpdate)};d._invalidate=function(){for(const a of this.requests.done)a.message.status=f.UpdateToken.empty();c.isSome(this._edits)&&(this._edits.status=f.UpdateToken.empty())};d.removeIds=function(a){this._invalidate();for(const {message:b}of this.requests.done){const e=b.addOrUpdate;c.isSome(e)&&(e.removeIds(a),e.isEmpty&&(b.addOrUpdate=null))}c.isSome(this._edits)&&c.isSome(this._edits.addOrUpdate)&&
this._edits.addOrUpdate.removeIds(a);this.requests.done=this.requests.done.filter(b=>b.message.addOrUpdate||b.message.end)};d.abort=function(){this._abortController.abort()};m._createClass(g,[{key:"signal",get:function(){return this._abortController.signal}},{key:"options",get:function(){return{signal:this._abortController.signal}}},{key:"empty",get:function(){return!this.requests.done.length}},{key:"edits",get:function(){return this._edits}},{key:"done",get:function(){return this._done}}]);return g}();
k.DataTileSubscription=u;Object.defineProperties(k,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});