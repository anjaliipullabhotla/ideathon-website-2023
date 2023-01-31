// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../request","../../core/arrayUtils","../../core/Error","../../core/lang"],function(n,q,r,m,t){function u(a){if("vector-tile"===a.service.type)var e=`${a.service.url}/tilemap/${a.level}/${a.row}/${a.col}/${a.width}/${a.height}`;else e=a.service.tileServers,e=`${e&&e.length?e[a.row%e.length]:a.service.url}/tilemap/${a.level}/${a.row}/${a.col}/${a.width}/${a.height}`;(a=a.service.query)&&(e=`${e}?${a}`);return e}let v=function(){function a(){this.location={left:0,top:0,width:0,
height:0};this._allAvailability="unknown";this.byteSize=40}var e=a.prototype;e.getAvailability=function(b,c){if("unknown"!==this._allAvailability)return this._allAvailability;b=(b-this.location.top)*this.location.width+(c-this.location.left);c=b>>3;const h=this._tileAvailabilityBitSet;return 0>c||c>h.length?"unknown":h[c]&1<<b%8?"available":"unavailable"};e._updateFromData=function(b){let c=!0,h=!0;const g=new Uint8Array(Math.ceil(this.location.width*this.location.height/8));let k=0;for(let f=0;f<
b.length;f++){const l=f%8;b[f]?(h=!1,g[k]|=1<<l):c=!1;7===l&&++k}h?this._allAvailability="unavailable":c?this._allAvailability="available":(this._allAvailability="unknown",this._tileAvailabilityBitSet=g,this.byteSize+=g.length)};a.fromDefinition=function(b,c){const h=b.service.request||q,{row:g,col:k,width:f,height:l}=b,p={query:{f:"json"}};c=c?{...p,...c}:p;return h(u(b),c).then(d=>d.data).catch(d=>{if(d&&d.details&&422===d.details.httpStatus)return{location:{top:g,left:k,width:f,height:l},valid:!0,
data:r.constant(f*l,0)};throw d;}).then(d=>{if(d.location&&(d.location.top!==g||d.location.left!==k||d.location.width!==f||d.location.height!==l))throw new m("tilemap:location-mismatch","Tilemap response for different location than requested",{response:d,definition:{top:g,left:k,width:f,height:l}});return a.fromJSON(d)})};a.fromJSON=function(b){a._validateJSON(b);const c=new a;c.location=Object.freeze(t.clone(b.location));c._updateFromData(b.data);return Object.freeze(c)};a._validateJSON=function(b){if(!b||
!b.location)throw new m("tilemap:missing-location","Location missing from tilemap response");if(!1===b.valid)throw new m("tilemap:invalid","Tilemap response was marked as invalid");if(!b.data)throw new m("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(b.data))throw new m("tilemap:data-mismatch","Data must be an array of numbers");if(b.data.length!==b.location.width*b.location.height)throw new m("tilemap:data-mismatch","Number of data items does not match width/height of tilemap");
};return a}();n.Tilemap=v;n.tilemapDefinitionId=function(a){return`${a.level}/${a.row}/${a.col}/${a.width}/${a.height}`};Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});