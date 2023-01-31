// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/screenUtils ../../../../../symbols/cim/CIMSymbolHelper ../../../../../symbols/cim/Rect ../../../engine/webgl/definitions ../../graphics/graphicsUtils ../../support/cimSymbolUtils".split(" "),function(l,m,r,y,z,A,B,C){function t(a,b){if(!("visualVariables"in a&&a.hasVisualVariables("size")))return 0;a=a.getVisualVariablesForType("size");if(!a[0])return 0;a=a[0];if(b&&"cluster_count"===a.field&&"cluster"===b.type)return b.clusterMaxSize;
if("outline"===a.target)return 0;if("stops"===a.transformationType)return a.stops.map(c=>c.size).reduce(k,0);if("clamped-linear"===a.transformationType){let c=b=-Infinity;b="number"===typeof a.maxSize?a.maxSize:a.maxSize.stops.map(d=>d.size).reduce(k,0);c="number"===typeof a.minSize?a.minSize:a.minSize.stops.map(d=>d.size).reduce(k,0);return Math.max(b,c)}if("real-world-size"===a.transformationType)return 30}function n(){n=m._asyncToGenerator(function*(a,b,c,d,f,e){if(!a||e&&"cluster"===e.type)return 0;
if("heatmap"===a.type)return Math.round(r.pt2px(a.radius));if("dot-density"===a.type)return 0;if("dictionary"===a.type)return"esriGeometryPoint"===b||"esriGeometryMultipoint"===b?100:200;e=a.getSymbols();a=t(a);const u=[];for(const D of e)u.push(E(D,a,c,b,d,f));b=yield Promise.all(u);return r.pt2px(b.reduce(k,0))});return n.apply(this,arguments)}function g(a,b){return null==a?b:a}function v(a,b,c,d,f,e){return p.apply(this,arguments)}function p(){p=m._asyncToGenerator(function*(a,b,c,d,f,e){if("simple-marker"===
a.type)return b=Math.max(g(a.size,12),b),w(a)+.707*b;if("picture-marker"===a.type)return c=Math.max(g(a.height,12),b),b=g(a.width,12)*(c/g(a.height,12))/2,c/=2,w(a)+Math.sqrt(b*b+c*c);if("text"===a.type){if(c=a.text&&a.text.length){b=[];for(d=0;d<c;d++)b.push({...x,code:a.text.charCodeAt(d)});b={glyphMosaicItems:b}}else b={glyphMosaicItems:[x]};B.getTextSymbolSize(h,a.toJSON(),b);return Math.max(Math.abs(h[0]),Math.abs(h[1]))+Math.max(h[2],h[3])}return"simple-line"===a.type?(c=Math.max(g(a.width,
.75),b)/2,a.marker?Math.max(6*a.width,2*b):c):"simple-fill"===a.type||"picture-fill"===a.type?(c=Math,d=c.max,a=null==a.outline?0:g(a.outline.width,0),d.call(c,a,b)/2):"cim"===a.type?(yield C.expandSymbol({type:"cim",rendererKey:0,data:a.data,maxVVSize:b},{geometryType:d,fields:f,spatialReference:e},c),(a=y.CIMSymbolHelper.getEnvelope(a.data,null,c))?Math.sqrt(a.width*a.width+a.height*a.height):0):"web-style"===a.type?v(yield a.fetchCIMSymbol(),b,c,d,f,e):0});return p.apply(this,arguments)}function E(a,
b,c,d,f,e){return q.apply(this,arguments)}function q(){q=m._asyncToGenerator(function*(a,b,c,d,f,e){return a.type in F?Math.min(yield v(a,b,c,d,f,e),75):0});return q.apply(this,arguments)}function w(a){const b=g(a.xoffset,0);a=g(a.yoffset,0);return Math.sqrt(b*b+a*a)}function k(a,b){return Math.max(a,b)}const F={"simple-marker":1,"picture-marker":1,text:0,"simple-line":0,"simple-fill":0,"picture-fill":0,cim:1,"web-style":1},h=[0,0,0,0],x={sdf:!0,code:99,metrics:A.AVERAGE_GLYPH_MOSAIC_ITEM.metrics,
rect:new z(0,0,24,24),page:0,textureBinding:2};l.computePxBuffer=function(a,b,c,d,f,e){return n.apply(this,arguments)};l.getPtMaxVVSize=t;Object.defineProperties(l,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});