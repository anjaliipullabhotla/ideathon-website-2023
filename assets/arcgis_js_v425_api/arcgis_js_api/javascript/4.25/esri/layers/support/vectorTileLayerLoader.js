// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../config ../../request ../../core/promiseUtils ../../core/urlUtils ../../views/2d/engine/vectorTiles/style/VectorTileSource".split(" "),function(y,q,z,D,E,k,F){function t(){t=q._asyncToGenerator(function*(a,c){const b={source:null,sourceBase:null,sourceUrl:null,validatedSource:null,style:null,styleBase:null,styleUrl:null,sourceNameToSource:{},primarySourceName:"",spriteFormat:"png"},[g,f]="string"===typeof a?[a,null]:[null,a.jsonUrl];yield m(b,
"esri",a,f,c);a={layerDefinition:b.validatedSource,url:g,serviceUrl:b.sourceUrl,style:b.style,styleUrl:b.styleUrl,spriteUrl:b.style.sprite&&n(b.styleBase,b.style.sprite),spriteFormat:b.spriteFormat,glyphsUrl:b.style.glyphs&&n(b.styleBase,b.style.glyphs),sourceNameToSource:b.sourceNameToSource,primarySourceName:b.primarySourceName};p(a.spriteUrl);p(a.glyphsUrl);return a});return t.apply(this,arguments)}function p(a){a&&(a=k.getOrigin(a),u&&!u.includes(a)&&u.push(a))}function n(...a){let c=void 0;for(let b=
0;b<a.length;++b)k.isProtocolRelative(a[b])?c&&(c=c.split("://")[0]+":"+a[b].trim()):c=k.isAbsolute(a[b])?a[b]:k.join(c,a[b]);return k.removeTrailingSlash(c)}function m(a,c,b,g,f){return v.apply(this,arguments)}function v(){v=q._asyncToGenerator(function*(a,c,b,g,f){E.throwIfAborted(f);let d,h;if("string"===typeof b){b=k.normalize(b);p(b);var e=yield D(b,{...f,responseType:"json",query:{f:"json",...f?.query}});e.ssl&&(d&&(d=d.replace(/^http:/i,"https:")),h&&(h=h.replace(/^http:/i,"https:")));h=d=
b}else e={data:b},d=b.jsonUrl||null,h=g;e=e.data;if(e.sources)return a.styleUrl=d||null,G(a,e,h,f);if(!e.sources)return a.sourceUrl?A(a,e,h,!1,c,f):(a.sourceUrl=d||null,A(a,e,h,!0,c,f));throw Error("You must specify the URL or the JSON for a service or for a style.");});return v.apply(this,arguments)}function G(a,c,b,g){return w.apply(this,arguments)}function w(){w=q._asyncToGenerator(function*(a,c,b,g){b=b?k.removeFile(b):k.getAppBaseUrl();a.styleBase=b;a.style=c;a.styleUrl&&p(a.styleUrl);c["sprite-format"]&&
"webp"===c["sprite-format"].toLowerCase()&&(a.spriteFormat="webp");const f=[];if(c.sources&&c.sources.esri){const d=c.sources.esri;d.url?yield m(a,"esri",n(b,d.url),void 0,g):f.push(m(a,"esri",d,b,g))}for(const d of Object.keys(c.sources))"esri"!==d&&"vector"===c.sources[d].type&&(c.sources[d].url?f.push(m(a,d,n(b,c.sources[d].url),void 0,g)):c.sources[d].tiles&&f.push(m(a,d,c.sources[d],b,g)));yield Promise.all(f)});return w.apply(this,arguments)}function A(a,c,b,g,f,d){return x.apply(this,arguments)}
function x(){x=q._asyncToGenerator(function*(a,c,b,g,f,d){b=b?k.removeTrailingSlash(b)+"/":k.getAppBaseUrl();if(c.hasOwnProperty("tileInfo"))var h=c;else{var e={xmin:-2.0037507067161843E7,ymin:-2.0037507067161843E7,xmax:2.0037507067161843E7,ymax:2.0037507067161843E7,spatialReference:{wkid:102100}},l=78271.51696400007,B=2.958287637957775E8,C=[],H=c.hasOwnProperty("minzoom")?+c.minzoom:0,I=c.hasOwnProperty("maxzoom")?+c.maxzoom:22;for(let r=0;r<=I;r++)r>=H&&C.push({level:r,scale:B,resolution:l}),l/=
2,B/=2;for(h of c.tiles)p(n(b,h));h={capabilities:"TilesOnly",initialExtent:e,fullExtent:e,minScale:0,maxScale:0,tiles:c.tiles,tileInfo:{rows:512,cols:512,dpi:96,format:"pbf",origin:{x:-2.0037508342787E7,y:2.0037508342787E7},lods:C,spatialReference:{wkid:102100}}}}e=new F(f,k.addQueryParameters(b,d?.query),h);if(!g&&a.primarySourceName in a.sourceNameToSource){l=a.sourceNameToSource[a.primarySourceName];if(!l.isCompatibleWith(e))return;null!=e.fullExtent&&(null!=l.fullExtent?l.fullExtent.union(e.fullExtent):
l.fullExtent=e.fullExtent.clone());l.tileInfo.lods.length<e.tileInfo.lods.length&&(l.tileInfo=e.tileInfo)}g?(a.sourceBase=b,a.source=c,a.validatedSource=h,a.primarySourceName=f,a.sourceUrl&&p(a.sourceUrl)):p(b);a.sourceNameToSource[f]=e;if(!a.style){if(null==c.defaultStyles)throw Error();return"string"===typeof c.defaultStyles?m(a,"",n(b,c.defaultStyles,"root.json"),void 0,d):m(a,"",c.defaultStyles,n(b,"root.json"),d)}});return x.apply(this,arguments)}const u=z.defaults&&z.defaults.io.corsEnabledServers;
y.loadMetadata=function(a,c){return t.apply(this,arguments)};Object.defineProperties(y,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});