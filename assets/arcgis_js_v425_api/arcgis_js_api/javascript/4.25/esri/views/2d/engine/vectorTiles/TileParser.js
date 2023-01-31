// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../core/pbf ../../../../core/promiseUtils ../../../../geometry/libtess ./Feature ./IndexMemoryBuffer ./SourceLayerData ./VertexMemoryBuffer ./buckets/CircleBucket ./buckets/FillBucket ./buckets/LineBucket ./buckets/SymbolBucket ./style/StyleDefinition ../webgl/TileClipper ../../tiling/enums".split(" "),function(z,A,B,C,D,u,E,v,F,G,H,I,w,x,J){return function(){function y(a,b,c,d,f){this._pbfTiles={};this._tileClippers={};this._client=c;
this._tile=b;if(f){this._styleLayerUIDs=new Set;for(const g of f)this._styleLayerUIDs.add(g)}this._styleRepository=d;this._layers=this._styleRepository.layers;const [h,m,r]=b.tileKey.split("/").map(parseFloat);this._level=h;b=8+Math.max(5*(this._level-14),0);for(const g of Object.keys(a))c=a[g],this._pbfTiles[g]=new A(new Uint8Array(c.protobuff),new DataView(c.protobuff)),c.refKey&&([c]=c.refKey.split("/").map(parseFloat),c=h-c,0<c&&(d=(1<<c)-1,this._tileClippers[g]=new x.TileClipper(c,m&d,r&d,8,
b))),this._tileClippers[g]||(this._tileClippers[g]=new x.SimpleBuilder)}var n=y.prototype;n._canParseStyleLayer=function(a){return!this._styleLayerUIDs||this._styleLayerUIDs.has(a)};n.parse=function(){var a=z._asyncToGenerator(function*(b){const c=C.loadLibtess(),d=this._initialize(b),{returnedBuckets:f}=d;this._processLayers(d);this._linkReferences(d);this._filterFeatures(d);const h=[],m=new Set,r=(p,k)=>{m.has(p)||(h.push({name:p,repeat:k}),m.add(p))},g={};for(const p of f)p.getResources(p.tileClipper,
r,g);if(this._tile.status===J.TileStatus.INVALID)return[];b=this._fetchResources(h,g,b);return Promise.all([...b,c]).then(()=>this._processFeatures(d.returnedBuckets))});return function(b){return a.apply(this,arguments)}}();n._initialize=function(a){a=a&&a.signal;const b=this._parseTileData(this._pbfTiles),c=this._layers,d=this._level,f=this._tileClippers,h=new Map;return{signal:a,sourceNameToTileData:b,layers:c,zoom:d,sourceNameToTileClipper:f,sourceNameToUniqueSourceLayerBuckets:{},sourceNameToUniqueSourceLayers:{},
returnedBuckets:[],layerIdToBucket:{},referencerUIDToReferencedId:h}};n._processLayers=function(a){const {sourceNameToTileData:b,layers:c,zoom:d,sourceNameToTileClipper:f,sourceNameToUniqueSourceLayerBuckets:h,sourceNameToUniqueSourceLayers:m,returnedBuckets:r,layerIdToBucket:g,referencerUIDToReferencedId:p}=a;for(a=c.length-1;0<=a;a--){const e=c[a];if(!this._canParseStyleLayer(e.uid)||e.minzoom&&d<Math.floor(e.minzoom)||e.maxzoom&&d>=e.maxzoom||e.type===w.StyleLayerType.BACKGROUND)continue;if(!b[e.source]||
!f[e.source])continue;var k=f[e.source];const t=e.sourceLayer;var q=b[e.source][t];if(q){var l=m[e.source];l||(l=m[e.source]=new Set);l.add(e.sourceLayer);if(e.refLayerId)p.set(e.uid,e.refLayerId);else if(l=this._createBucket(e))l.layerUIDs=[e.uid],l.layerExtent=q.extent,l.tileClipper=k,(k=h[e.source])||(k=h[e.source]={}),(q=k[t])||(q=k[t]=[]),q.push(l),r.push(l),g[e.id]=l}}};n._linkReferences=function(a){const {layerIdToBucket:b,referencerUIDToReferencedId:c}=a;c.forEach((d,f)=>{b[d]&&b[d].layerUIDs.push(f)})};
n._filterFeatures=function(a){const {signal:b,sourceNameToTileData:c,sourceNameToUniqueSourceLayerBuckets:d,sourceNameToUniqueSourceLayers:f}=a;a=10*this._level;const h=10*(this._level+1),m=[],r=[];for(const q of Object.keys(f))f[q].forEach(l=>{m.push(l);r.push(q)});for(let q=0;q<m.length;q++){var g=r[q],p=m[q];if(!c[g]||!d[g])continue;const l=c[g][p];if((g=d[g][p])&&0!==g.length){if(B.isAborted(b))break;for(p=l.getData();p.nextTag(2);){var k=p.getMessage();const e=new D(k,l);k.release();if(k=e.values){const t=
k._minzoom;if(t&&t>=h)continue;if((k=k._maxzoom)&&k<=a)continue}for(const t of g)t.pushFeature(e)}}}};n._fetchResources=function(a,b,c){const d=[],f=this._tile.getWorkerTileHandler();0<a.length&&(a=f.fetchSprites(a,this._client,c),d.push(a));for(const h in b)a=b[h],0<a.size&&(a=f.fetchGlyphs(this._tile.tileKey,h,a,this._client,c),d.push(a));return d};n._processFeatures=function(a){a=a.filter(b=>b.hasFeatures()||this._canParseStyleLayer(b.layer.uid));for(const b of a)b.processFeatures(b.tileClipper);
return a};n._parseTileData=function(a){const b={};for(const c of Object.keys(a)){const d=a[c],f={};for(;d.next();)switch(d.tag()){case 3:const h=d.getMessage(),m=new E(h);h.release();f[m.name]=m;break;default:d.skip()}b[c]=f}return b};n._createBucket=function(a){switch(a.type){case w.StyleLayerType.BACKGROUND:return null;case w.StyleLayerType.FILL:return this._createFillBucket(a);case w.StyleLayerType.LINE:return this._createLineBucket(a);case w.StyleLayerType.CIRCLE:return this._createCircleBucket(a);
case w.StyleLayerType.SYMBOL:return this._createSymbolBucket(a)}};n._createFillBucket=function(a){return new G(a,this._level,this._tile.getWorkerTileHandler().getSpriteItems(),new v.FillVertexBuffer(a.fillMaterial.getStride()),new u.TriangleIndexBuffer,new v.OutlineVertexBuffer(a.outlineMaterial.getStride()),new u.TriangleIndexBuffer)};n._createLineBucket=function(a){return new H(a,this._level,this._tile.getWorkerTileHandler().getSpriteItems(),new v.LineVertexBuffer(a.lineMaterial.getStride()),new u.TriangleIndexBuffer)};
n._createCircleBucket=function(a){return new F(a,this._level,this._tile.getWorkerTileHandler().getSpriteItems(),new v.CircleVertexBuffer(a.circleMaterial.getStride()),new u.TriangleIndexBuffer)};n._createSymbolBucket=function(a){const b=this._tile;return new I(a,this._level,new v.SymbolVertexBuffer(a.iconMaterial.getStride()),new u.TriangleIndexBuffer,new v.SymbolVertexBuffer(a.textMaterial.getStride()),new u.TriangleIndexBuffer,b.placementEngine,b.getWorkerTileHandler())};return y}()});