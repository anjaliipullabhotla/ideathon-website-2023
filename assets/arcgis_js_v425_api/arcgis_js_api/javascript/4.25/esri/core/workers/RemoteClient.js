// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("require ../../kernel ../Error ../events ../maybe ../promiseUtils ./utils ../../support/revision".split(" "),function(g,E,y,F,v,q,n,z){const l=c=>Object.freeze(Object.defineProperty({__proto__:null,default:c},Symbol.toStringTag,{value:"Module"})),G={statsWorker:()=>new Promise((c,b)=>g(["../../smartMapping/statistics/support/statsWorker"],c,b)),geometryEngineWorker:()=>new Promise((c,b)=>g(["../../geometry/geometryEngineWorker"],c,b)),CSVSourceWorker:()=>new Promise((c,b)=>g(["../../layers/graphics/sources/support/CSVSourceWorker"],
a=>c(l(a)),b)),EdgeProcessingWorker:()=>new Promise((c,b)=>g(["../../views/3d/webgl-engine/lib/edgeRendering/EdgeProcessingWorker"],a=>c(l(a)),b)),ElevationSamplerWorker:()=>new Promise((c,b)=>g(["../../geometry/support/meshUtils/ElevationSamplerWorker"],a=>c(l(a)),b)),FeatureServiceSnappingSourceWorker:()=>new Promise((c,b)=>g(["../../views/interactive/snapping/featureSources/featureServiceSource/FeatureServiceSnappingSourceWorker"],a=>c(l(a)),b)),GeoJSONSourceWorker:()=>new Promise((c,b)=>g(["../../layers/graphics/sources/geojson/GeoJSONSourceWorker"],
a=>c(l(a)),b)),LercWorker:()=>new Promise((c,b)=>g(["../../layers/support/LercWorker"],a=>c(l(a)),b)),MemorySourceWorker:()=>new Promise((c,b)=>g(["../../layers/graphics/sources/support/MemorySourceWorker"],a=>c(l(a)),b)),PBFDecoderWorker:()=>new Promise((c,b)=>g(["../../views/3d/support/PBFDecoderWorker"],a=>c(l(a)),b)),Pipeline:()=>new Promise((c,b)=>g(["../../views/2d/layers/features/Pipeline"],a=>c(l(a)),b)),PointCloudWorker:()=>new Promise((c,b)=>g(["../../views/3d/layers/PointCloudWorker"],
a=>c(l(a)),b)),RasterWorker:()=>new Promise((c,b)=>g(["../../layers/support/RasterWorker"],a=>c(l(a)),b)),SceneLayerSnappingSourceWorker:()=>new Promise((c,b)=>g(["../../views/interactive/snapping/featureSources/sceneLayerSource/SceneLayerSnappingSourceWorker"],a=>c(l(a)),b)),SceneLayerWorker:()=>new Promise((c,b)=>g(["../../views/3d/layers/SceneLayerWorker"],c,b)),WFSSourceWorker:()=>new Promise((c,b)=>g(["../../layers/graphics/sources/WFSSourceWorker"],a=>c(l(a)),b)),WorkerTileHandler:()=>new Promise((c,
b)=>g(["../../views/2d/engine/vectorTiles/WorkerTileHandler"],a=>c(l(a)),b))},{CLOSE:A,ABORT:B,INVOKE:C,RESPONSE:u,OPEN_PORT:D,ON:H}=n.MessageType;let I=function(){function c(a){this._timer=null;this._cancelledJobIds=new Set;this._invokeMessages=[];this._invoke=a;this._timer=null;this._process=this._process.bind(this)}var b=c.prototype;b.push=function(a){a.type===n.MessageType.ABORT?this._cancelledJobIds.add(a.jobId):(this._invokeMessages.push(a),null===this._timer&&(this._timer=setTimeout(this._process,
0)))};b.clear=function(){this._invokeMessages.length=0;this._cancelledJobIds.clear();this._timer=null};b._process=function(){this._timer=null;for(const a of this._invokeMessages)this._cancelledJobIds.has(a.jobId)||this._invoke(a);this._cancelledJobIds.clear();this._invokeMessages.length=0};return c}(),x=function(){function c(a,e,d){this._port=a;this._getNextJob=d;this._outJobs=new Map;this._inJobs=new Map;this._invokeQueue=new I(f=>this._onInvokeMessage(f));this._client=e.client;this._onMessage=this._onMessage.bind(this);
this._channel=e.channel;this._schedule=e.schedule;this._port.addEventListener("message",this._onMessage);this._port.start()}c.connect=function(a){const e=new MessageChannel;a="function"===typeof a?new a:"default"in a&&"function"===typeof a.default?new a.default:a;const d=new c(e.port1,{channel:e,client:a},()=>null);"object"===typeof a&&"remoteClient"in a&&(a.remoteClient=d);c.clients.set(d,a);return e.port2};c.loadWorker=function(a){return(a=G[a])?a():Promise.resolve(null)};var b=c.prototype;b.close=
function(){this._post({type:A});this._close()};b.isBusy=function(){return 0<this._outJobs.size};b.invoke=function(a,e,d){const f=d&&d.signal,h=d&&d.transferList;if(!this._port)return Promise.reject(new y("worker:port-closed",`Cannot call invoke('${a}'), port is closed`,{methodName:a,data:e}));const k=n.newJobId();return new Promise((r,p)=>{if(q.isAborted(f))this._processWork(),p(q.createAbortError());else{var t=q.onAbort(f,()=>{const m=this._outJobs.get(k);m&&(this._outJobs.delete(k),this._processWork(),
v.removeMaybe(m.abortHandle),this._post({type:B,jobId:k}),p(q.createAbortError()))});this._outJobs.set(k,{resolve:r,reject:p,abortHandle:t,debugInfo:a});this._post({type:C,jobId:k,methodName:a,abortable:null!=f},e,h)}})};b.on=function(a,e){function d(h){e(h.data)}const f=new MessageChannel;this._port.postMessage({type:n.MessageType.ON,eventType:a,port:f.port2},[f.port2]);f.port1.addEventListener("message",d);f.port1.start();return{remove(){f.port1.postMessage({type:n.MessageType.CLOSE});f.port1.close();
f.port1.removeEventListener("message",d)}}};b.jobAdded=function(){this._processWork()};b.openPort=function(){const a=new MessageChannel;this._post({type:D,port:a.port2});return a.port1};b._processWork=function(){if(!(2<=this._outJobs.size)){var a=this._getNextJob();if(a){var {methodName:e,data:d,invokeOptions:f,deferred:h}=a;this.invoke(e,d,f).then(k=>h.resolve(k)).catch(k=>h.reject(k))}}};b._close=function(){this._channel&&(this._channel=void 0);this._port.removeEventListener("message",this._onMessage);
this._port.close();this._outJobs.forEach(a=>{v.removeMaybe(a.abortHandle);a.reject(q.createAbortError(`Worker closing, aborting job calling '${a.debugInfo}'`))});this._inJobs.clear();this._outJobs.clear();this._invokeQueue.clear();this._port=this._client=this._schedule=null};b._onMessage=function(a){v.isSome(this._schedule)?this._schedule(()=>this._processMessage(a)):this._processMessage(a)};b._processMessage=function(a){if(a=n.receiveMessage(a))switch(a.type){case u:this._onResponseMessage(a);break;
case C:this._invokeQueue.push(a);break;case B:this._onAbortMessage(a);break;case A:this._onCloseMessage();break;case D:this._onOpenPortMessage(a);break;case H:this._onOnMessage(a)}};b._onAbortMessage=function(a){const e=this._inJobs,d=a.jobId,f=e.get(d);this._invokeQueue.push(a);f&&(f.controller&&f.controller.abort(),e.delete(d))};b._onCloseMessage=function(){const a=this._client;this._close();a&&"destroy"in a&&c.clients.get(this)===a&&a.destroy();c.clients.delete(this);a&&a.remoteClient&&(a.remoteClient=
null)};b._onInvokeMessage=function(a){const {methodName:e,jobId:d,data:f,abortable:h}=a;a=h?new AbortController:null;const k=this._inJobs;let r=this._client,p=r[e],t;try{if(!p&&e&&e.includes(".")){const m=e.split(".");for(let w=0;w<m.length-1;w++)r=r[m[w]],p=r[m[w+1]]}if("function"!==typeof p)throw new TypeError(`${e} is not a function`);t=p.call(r,f,{client:this,signal:a?a.signal:null})}catch(m){this._post({type:u,jobId:d,error:n.toInvokeError(m)});return}q.isPromiseLike(t)?(k.set(d,{controller:a,
promise:t}),t.then(m=>{k.has(d)&&(k.delete(d),this._post({type:u,jobId:d},m))},m=>{k.has(d)&&(k.delete(d),q.isAbortError(m)||this._post({type:u,jobId:d,error:n.toInvokeError(m||{message:`Error encountered at method ${e}`})}))})):this._post({type:u,jobId:d},t)};b._onOpenPortMessage=function(a){new c(a.port,{client:this._client},()=>null)};b._onOnMessage=function(a){const {port:e}=a,d=this._client.on(a.eventType,h=>{e.postMessage(h)}),f=F.on(a.port,"message",h=>{n.receiveMessage(h)?.type===n.MessageType.CLOSE&&
(f.remove(),d.remove(),e.close())})};b._onResponseMessage=function(a){const {jobId:e,error:d,data:f}=a;a=this._outJobs;if(a.has(e)){var h=a.get(e);a.delete(e);this._processWork();v.removeMaybe(h.abortHandle);d?h.reject(y.fromJSON(JSON.parse(d))):h.resolve(f)}};b._post=function(a,e,d){return n.postMessage(this._port,a,e,d)};return c}();x.kernelInfo={revision:z.commitHash,version:E.version,buildDate:z.buildDate};x.clients=new Map;return x});