// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../core/Error ./CloudRaster ./ImageAuxRaster ./ImageServerRaster ./MRFRaster ./TIFFRaster".split(" "),function(m,n,r,g,t,u,v){const b=new Map;b.set("CRF",{desc:"Cloud Raster Format",constructor:r});b.set("MRF",{desc:"Meta Raster Format",constructor:u});b.set("TIFF",{desc:"GeoTIFF",constructor:v});b.set("RasterTileServer",{desc:"Raster Tile Server",constructor:t});b.set("JPG",{desc:"JPG Raster Format",constructor:g});b.set("PNG",{desc:"PNG Raster Format",
constructor:g});b.set("GIF",{desc:"GIF Raster Format",constructor:g});b.set("BMP",{desc:"BMP Raster Format",constructor:g});return function(){function h(){}h.open=function(){var e=m._asyncToGenerator(function*(d){const {url:c,ioConfig:l,sourceJSON:w}=d;let a=d.datasetFormat;null==a&&c.lastIndexOf(".")&&(a=c.slice(c.lastIndexOf(".")+1).toUpperCase());if("OVR"===a||"TIF"===a)a="TIFF";else if("JPG"===a||"JPEG"===a||"JFIF"===a)a="JPG";c.toLowerCase().includes("/imageserver")&&!c.toLowerCase().includes("/wcsserver")&&
(a="RasterTileServer");const x={bandIds:null,sampling:null},p={url:c,sourceJSON:w,datasetFormat:a,ioConfig:l??x};let k,f;if(a&&this.supportedFormats.has(a)){if("CRF"===a&&!l?.enableCRF)throw new n("rasterfactory:open",`cannot open raster: ${c}`);k=b.get(a).constructor;f=new k(p);yield f.open({signal:d.signal});return f}if(a)throw new n("rasterfactory:open","not a supported format "+a);const y=Array.from(b.keys());let z=0;const q=()=>{a=y[z++];if(!a||"CRF"===a&&!l?.enableCRF)return null;k=b.get(a).constructor;
f=new k(p);return f.open({signal:d.signal}).then(()=>f).catch(()=>q())};return q()});return function(d){return e.apply(this,arguments)}}();h.register=function(e,d,c){b.has(e.toUpperCase())||b.set(e.toUpperCase(),{desc:d,constructor:c})};m._createClass(h,null,[{key:"supportedFormats",get:function(){const e=new Set;b.forEach((d,c)=>e.add(c));return e}}]);return h}()});