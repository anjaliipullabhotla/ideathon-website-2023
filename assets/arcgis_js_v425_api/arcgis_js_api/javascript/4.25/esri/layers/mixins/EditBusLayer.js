// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Evented ../../core/lang ../../core/Logger ../../core/accessorSupport/ensureType ../../core/Error ../../core/has ../../core/accessorSupport/decorators/subclass".split(" "),function(f,h,u,v,k,A,B,C,D,w){const l=new v.EventEmitter,m=Symbol("esri.layers.mixins.EditBusLayer");f.EditBusLayer=c=>{c=function(n){function p(...x){var a=n.call(this,...x)||this;a[y]=!0;a.when().then(()=>{a.own([l.on("edits",b=>{const z="layer"in
b?b.layer?.url:b.serviceUrl,q="layer"in b?b.layer?.layerId:b.layerId;var e=b.event;if(("layer"in b?b.layer:null)!==h._assertThisInitialized(a)&&z===a.url)if(null!=q&&null!=a.layerId&&q===a.layerId)a.emit("edits",k.clone(e));else if(b=e.editedFeatures?.find(({layerId:g})=>g===a.layerId)){const {adds:g,updates:r,deletes:t}=b.editedFeatures;e={edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:g?g.map(({attributes:d})=>({objectId:a.objectIdField&&d[a.objectIdField],
globalId:a.globalIdField&&d[a.globalIdField]})):[],deletedFeatures:t?t.map(({attributes:d})=>({objectId:a.objectIdField&&d[a.objectIdField],globalId:a.globalIdField&&d[a.globalIdField]})):[],updatedFeatures:r?r.map(({current:{attributes:d}})=>({objectId:a.objectIdField&&d[a.objectIdField],globalId:a.globalIdField&&d[a.globalIdField]})):[],editedFeatures:k.clone(e.editedFeatures)};a.emit("edits",e)}})])},()=>{});return a}h._inheritsLoose(p,n);return p}(c);var y=m;return c=u.__decorate([w.subclass("esri.layers.mixins.EditBusLayer")],
c)};f.editEventBus=l;f.isEditBusLayer=function(c){return null!=c&&"object"===typeof c&&m in c};Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});