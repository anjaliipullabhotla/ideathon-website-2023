// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../geometry ../../../core/Error ../../../core/maybe ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../RasterInfo ../RasterStorageInfo ../TileInfo ./BaseRaster ./DBFParser ../rasterTransforms/utils ../../../rest/support/FeatureSet ../../../geometry/SpatialReference ../../../geometry/Extent ../../../geometry/Point".split(" "),
function(x,B,t,C,D,J,Z,aa,O,P,Q,R,S,T,K,U,V,W,L){const p=new Map;p.set("int16","esriFieldTypeSmallInteger");p.set("int32","esriFieldTypeInteger");p.set("int64","esriFieldTypeInteger");p.set("float32","esriFieldTypeSingle");p.set("float64","esriFieldTypeDouble");p.set("text","esriFieldTypeString");t=function(M){function E(){var a=M.apply(this,arguments)||this;a.storageInfo=null;a.datasetFormat="CRF";return a}x._inheritsLoose(E,M);var l=E.prototype;l.open=function(){var a=x._asyncToGenerator(function*(b){yield this.init();
({data:b}=yield this.request(this.url+"/conf.json",{signal:b?.signal}));if(!this._validateHeader(b))throw new C("cloudraster:open","Invalid or unsupported conf.json.");this.datasetName=this.url.slice(this.url.lastIndexOf("/")+1);const {storageInfo:c,rasterInfo:d}=this._parseHeader(b);"thematic"===d.dataType&&(b=yield this._fetchAuxiliaryInformation(),d.attributeTable=b);this._set("storageInfo",c);this._set("rasterInfo",d);this.ioConfig.retryCount=this.ioConfig.retryCount||0});return function(b){return a.apply(this,
arguments)}}();l.fetchRawTile=function(){var a=x._asyncToGenerator(function*(b,c,d,e={}){var {transposeInfo:f}=this.rasterInfo.storageInfo,{transposedVariableName:g}=e;b=(f=!(!f||!g))?0:this.rasterInfo.storageInfo.maximumPyramidLevel-b;if(0>b)return null;g=this._buildCacheFilePath(b,c,d,e.multidimensionalDefinition,g);c=this._getIndexRecordFromBundle(c,d,f);d=yield this.request(g,{range:{from:0,to:this.storageInfo.headerSize-1},responseType:"array-buffer",signal:e.signal});if(!d)return null;d=new Uint8Array(d.data);
c=this._getTileEndAndContentType(d,c);if(0===c.recordSize)return null;e=yield this.request(g,{range:{from:c.position,to:c.position+c.recordSize},responseType:"array-buffer",signal:e.signal});if(!e)return null;const [u,v]=this._getTileSize(f);return this.decodePixelBlock(e.data,{width:u,height:v,planes:null,pixelType:null,returnInterleaved:f})});return function(b,c,d){return a.apply(this,arguments)}}();l._validateHeader=function(a){const b="origin extent geodataXform LODInfos blockWidth blockHeight bandCount pixelType pixelSizeX pixelSizeY format packetSize".split(" ");
return a&&"RasterInfo"===a.type&&!b.some(c=>!a[c])};l._parseHeader=function(a){var b="u1 u2 u4 u8 s8 u16 s16 u32 s32 f32 f64".split(" ")[a.pixelType];const {bandCount:c,histograms:d,colormap:e,blockWidth:f,blockHeight:g,firstPyramidLevel:u,maximumPyramidLevel:v}=a,X=a.statistics&&a.statistics.map(r=>({min:r.min,max:r.max,avg:r.mean,stddev:r.standardDeviation,median:r.median,mode:r.mode}));var n=a.extent.spatialReference,k=a.geodataXform?.spatialReference;n=new V(n?.wkid||n?.wkt?n:k);k=new W({xmin:a.extent.xmin,
ymin:a.extent.ymin,xmax:a.extent.xmax,ymax:a.extent.ymax,spatialReference:n});const w=new L({x:a.pixelSizeX,y:a.pixelSizeY,spatialReference:n}),y=Math.round((k.xmax-k.xmin)/w.x),z=Math.round((k.ymax-k.ymin)/w.y),A=this._parseTransform(a.geodataXform),Y=A?k:null;A&&(k=A.forwardTransform(k),w.x=(k.xmax-k.xmin)/y,w.y=(k.ymax-k.ymin)/z);const F=a.properties??{};var G=a.format.toLowerCase().replace("cache/","");const N=new L(a.origin.x,a.origin.y,n);let H;var h;if(e&&e.colors)for(H=[],h=0;h<e.colors.length;h++){var m=
e.colors[h];var q=e.values?e.values[h]:h;H.push([q,m&255,m<<16>>>24,m<<8>>>24,m>>>24])}m=a.LODInfos;q=[];for(h=0;h<m.levels.length;h++)q.push({level:m.levels[h],resolution:m.resolutions[h],scale:96/.0254*m.resolutions[h]});m=new R({dpi:96,lods:q,format:G,origin:N,size:[f,g],spatialReference:n});G={recordSize:8,packetSize:a.packetSize,headerSize:a.packetSize*a.packetSize*8+64};q=[{maxCol:Math.ceil(y/f)-1,maxRow:Math.ceil(z/g)-1,minCol:0,minRow:0}];let I=2;if(0<v)for(h=0;h<v;h++)q.push({maxCol:Math.ceil(y/
I/f)-1,maxRow:Math.ceil(z/I/g)-1,minCol:0,minRow:0}),I*=2;a=a.mdInfo;h=null;a&&F._yxs&&(h=F._yxs,h={packetSize:h.PacketSize,tileSize:[h.TileXSize,h.TileYSize]});b=new P({width:y,height:z,pixelType:b,bandCount:c,extent:k,nativeExtent:Y,transform:A,spatialReference:n,pixelSize:w,keyProperties:F,statistics:X,histograms:d,multidimensionalInfo:a,colormap:H,storageInfo:new Q({blockWidth:f,blockHeight:g,pyramidBlockWidth:f,pyramidBlockHeight:g,origin:N,tileInfo:m,transposeInfo:h,firstPyramidLevel:u,maximumPyramidLevel:v,
blockBoundary:q})});return{storageInfo:G,rasterInfo:b}};l._parseTransform=function(a){if(!K.isTransformSupported(a))throw new C("cloudraster:open","the data contains unsupported geodata transform types");a=K.readTransform(a);if("identity"===a.type)return null;if("polynomial"!==a.type||!a.forwardCoefficients?.length||!a.inverseCoefficients?.length)throw new C("cloudraster:open","the data contains unsupported geodata transforms - both forward and inverse coefficients are required currently");return a};
l._fetchAuxiliaryInformation=function(){var a=x._asyncToGenerator(function*(b){var c=this.request(this.url+"/conf.vat.json",{signal:b}).then(e=>e.data).catch(()=>null);b=this.request(this.url+"/conf.vat.dbf",{responseType:"array-buffer",signal:b}).then(e=>e.data).catch(()=>null);c=yield Promise.all([c,b]);let d;if(c[0]){b=c[0].fields;const e=c[0].values;if(b&&e){b=b.map(g=>({type:"OID"===g.name?"esriFieldTypeOID":p.get(g.type),name:g.name,alias:g.alias||g.name}));const f=e.map(g=>({attributes:g}));
b&&e&&(d={fields:b,features:f})}}!d&&c[1]&&(d=T.parse(c[1]).recordSet);return U.fromJSON(d)});return function(b){return a.apply(this,arguments)}}();l._buildCacheFilePath=function(a,b,c,d,e){var f=this._getPackageSize(!!e);c=Math.floor(c/f)*f;b="R"+this._toHexString4(Math.floor(b/f)*f)+"C"+this._toHexString4(c);f="L";f=10<=a?f+a.toString():f+("0"+a.toString());({multidimensionalInfo:a}=this.rasterInfo);const g=d?.[0];if(D.isNone(a)||!g)return`${this.url}/_alllayers/${f}/${b}.bundle`;d="_yxs";if(!e){d=
a.variables.find(u=>u.name===g.variableName).dimensions[0].values.indexOf(g.values[0]).toString(16);a=4-d.length;for(c=0;c<a;c++)d="0"+d;d="S"+d}e=this._getVariableFolderName(e||g.variableName);return`${this.url}/_alllayers/${e}/${d}/${f}/${b}.bundle`};l._getPackageSize=function(a=!1){const {transposeInfo:b}=this.rasterInfo.storageInfo;return a&&D.isSome(b)?b.packetSize??0:this.storageInfo.packetSize};l._getTileSize=function(a=!1){const {storageInfo:b}=this.rasterInfo,{transposeInfo:c}=b;return a&&
D.isSome(c)?c.tileSize:b.tileInfo.size};l._getVariableFolderName=function(a){a=a.trim();return""===a?"_v":a.replace(/[\{|\}\-]/g,"_").replace("\\*","_v")};l._getIndexRecordFromBundle=function(a,b,c=!1){c=this._getPackageSize(c);a=a%c*c+b%c;if(0>a)throw"Invalid level / row / col";return a*this.storageInfo.recordSize+64};l._getTileEndAndContentType=function(a,b){a=a.subarray(b,b+8);b=0;let c;for(c=0;5>c;c++)b|=(a[c]&255)<<8*c;const d=b&0xffffffffff;b=0;for(c=5;8>c;c++)b|=(a[c]&255)<<8*(c-5);return{position:d,
recordSize:b&0xffffffffff}};l._toHexString4=function(a){a=a.toString(16);if(4!==a.length){let b=4-a.length;for(;0<b--;)a="0"+a}return a};return E}(S);B.__decorate([J.property({readOnly:!0})],t.prototype,"storageInfo",void 0);B.__decorate([J.property({type:String,json:{write:!0}})],t.prototype,"datasetFormat",void 0);return t=B.__decorate([O.subclass("esri.layers.support.rasterDatasets.CloudRaster")],t)});