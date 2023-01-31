// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../config ../../core/Error ../../core/Logger ../../core/maybe ../Polygon ../Polyline ./normalizeUtilsCommon ./spatialReferenceUtils ./webMercatorUtils ../../rest/geometryService/cut ../../rest/geometryService/simplify".split(" "),function(w,J,K,L,M,C,y,z,r,A,x,N,O){function D(a){const b=[];let c=0,e=0;for(let f=0;f<a.length;f++){const h=a[f];let k=null;for(let g=0;g<h.length;g++)k=h[g],b.push(k),0===g?e=c=k[0]:(c=Math.min(c,k[0]),e=Math.max(e,
k[0]));k&&b.push([(c+e)/2,0])}return b}function E(a,b){if(!(a instanceof z||a instanceof y))throw F.error("straightLineDensify: the input geometry is neither polyline nor polygon"),new L("straightLineDensify: the input geometry is neither polyline nor polygon");var c=r.getGeometryParts(a);const e=[];for(const h of c){c=[];e.push(c);c.push([h[0][0],h[0][1]]);for(let k=0;k<h.length-1;k++){const g=h[k][0],l=h[k][1],d=h[k+1][0],m=h[k+1][1];var f=Math.sqrt((d-g)*(d-g)+(m-l)*(m-l));const p=(m-l)/f,q=(d-
g)/f,t=f/b;if(1<t){for(let n=1;n<=t-1;n++){const u=n*b;c.push([q*u+g,p*u+l])}f=(f+Math.floor(t-1)*b)/2;c.push([q*f+g,p*f+l])}c.push([d,m])}}return"polygon"===a.type?new y({rings:e,spatialReference:a.spatialReference}):new z({paths:e,spatialReference:a.spatialReference})}function G(a,b,c){b&&(a=E(a,1E6),a=x.webMercatorToGeographic(a,!0));c&&(a=r.updatePolyGeometry(a,c));return a}function H(a,b,c){if(Array.isArray(a)){var e=a[0];e>b?(c=r.offsetMagnitude(e,b),a[0]=e+-2*c*b):e<c&&(b=r.offsetMagnitude(e,
c),a[0]=e+-2*b*c)}else e=a.x,e>b?(c=r.offsetMagnitude(e,b),a=a.clone().offset(-2*c*b,0)):e<c&&(b=r.offsetMagnitude(e,c),a=a.clone().offset(-2*b*c,0));return a}function P(a,b){let c=-1;for(let e=0;e<b.cutIndexes.length;e++){const f=b.cutIndexes[e],h=b.geometries[e],k=r.getGeometryParts(h);for(let g=0;g<k.length;g++){const l=k[g];l.some(d=>{if(180>d[0])return!0;d=0;for(var m=0;m<l.length;m++){var p=l[m][0];d=p>d?p:d}d=Number(d.toFixed(9));d=-360*r.offsetMagnitude(d,180);for(m=0;m<l.length;m++)p=h.getPoint(g,
m),h.setPoint(g,m,p.clone().offset(d,0));return!0})}if(f===c)if("polygon"===a[0].type)for(const g of r.getGeometryParts(h))a[f]=a[f].addRing(g);else{if("polyline"===a[0].type)for(const g of r.getGeometryParts(h))a[f]=a[f].addPath(g)}else c=f,a[f]=h}return a}function I(a,b,c){return B.apply(this,arguments)}function B(){B=J._asyncToGenerator(function*(a,b,c){if(!Array.isArray(a))return I([a],b);b&&"string"!==typeof b&&F.warn("normalizeCentralMeridian()","The url object is deprecated, use the url string instead");
var e="string"===typeof b?b:b?.url??K.geometryServiceUrl;let f,h,k;let g=0;var l=[];b=[];for(var d of a)if(C.isNone(d))b.push(d);else{if(!m){var m=d.spatialReference;var p=A.getInfo(m);var q=(f=m.isWebMercator)?102100:4326;h=r.cutParams[q].maxX;k=r.cutParams[q].minX;var t=r.cutParams[q].plus180Line;q=r.cutParams[q].minus180Line}if(p)if("mesh"===d.type)b.push(d);else if("point"===d.type)b.push(H(d.clone(),h,k));else if("multipoint"===d.type){var n=d.clone();n.points=n.points.map(u=>H(u,h,k));b.push(n)}else if("extent"===
d.type)n=d.clone()._normalize(!1,!1,p),b.push(n.rings?new y(n):n);else if(d.extent){n=d.extent;const u=2*r.offsetMagnitude(n.xmin,k)*h;let v=0===u?d.clone():r.updatePolyGeometry(d.clone(),u);n.offset(u,0);n.intersects(t)&&n.xmax!==h?(g=n.xmax>g?n.xmax:g,v=G(v,f),l.push(v),b.push("cut")):n.intersects(q)&&n.xmin!==k?(g=2*n.xmax*h>g?2*n.xmax*h:g,v=G(v,f,360),l.push(v),b.push("cut")):b.push(v)}else b.push(d.clone());else b.push(d)}m=r.offsetMagnitude(g,h);p=-90;t=m;for(d=new z;0<m;)q=-180+360*m,d.addPath([[q,
p],[q,-1*p]]),p*=-1,m--;if(0<l.length&&0<t){m=yield N.cut(e,l,d,c);m=P(l,m);p=[];l=[];for(t=0;t<b.length;t++)d=b[t],"cut"!==d?l.push(d):(d=m.shift(),q=a[t],C.isSome(q)&&"polygon"===q.type&&q.rings&&1<q.rings.length&&d.rings.length>=q.rings.length?(p.push(d),l.push("simplify")):l.push(f?x.geographicToWebMercator(d):d));if(!p.length)return l;b=yield O.simplify(e,p,c);a=[];for(c=0;c<l.length;c++)e=l[c],"simplify"!==e?a.push(e):a.push(f?x.geographicToWebMercator(b.shift()):b.shift());return a}a=[];for(c=
0;c<b.length;c++)e=b[c],"cut"!==e?a.push(e):(e=l.shift(),a.push(!0===f?x.geographicToWebMercator(e):e));return a});return B.apply(this,arguments)}const F=M.getLogger("esri.geometry.support.normalizeUtils");w.getDenormalizedExtent=function(a){if(!a)return null;const b=a.extent;if(!b)return null;var c=a.spatialReference&&A.getInfo(a.spatialReference);if(!c)return b;const [e,f]=c.valid;({width:c}=b);let {xmin:h,xmax:k}=b;[h,k]=[k,h];if("extent"===a.type||0===c||c<=f||c>2*f||h<e||k>f)return b;let g;switch(a.type){case "polygon":if(1<
a.rings.length)g=D(a.rings);else return b;break;case "polyline":if(1<a.paths.length)g=D(a.paths);else return b;break;case "multipoint":g=a.points}a=b.clone();for(let l=0;l<g.length;l++){let d=g[l][0];0>d?(d+=f,k=Math.max(d,k)):(d-=f,h=Math.min(d,h))}a.xmin=h;a.xmax=k;return a.width<c?(a.xmin-=f,a.xmax-=f,a):b};w.normalizeCentralMeridian=I;w.normalizeMapX=function(a,b){if(b=A.getInfo(b)){const [c,e]=b.valid;b=e-c;if(a<c)for(;a<c;)a+=b;if(a>e)for(;a>e;)a-=b}return a};w.straightLineDensify=E;Object.defineProperties(w,
{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});