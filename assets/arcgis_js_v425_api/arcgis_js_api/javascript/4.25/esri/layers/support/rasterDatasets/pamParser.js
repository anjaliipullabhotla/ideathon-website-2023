// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../geometry ../../../core/maybe ./xmlUtilities ../rasterTransforms/PolynomialTransform ../../../geometry/SpatialReference".split(" "),function(m,A,t,d,x,h){function u(a,b){if(!a||!b)return null;const c=[];for(let e=0;e<a.length;e++)c.push(a[e]),c.push(b[e]);return c}function y(a){var b=d.getElement(a,"GeodataXform");a=d.getElementNumericValue(b,"SpatialReference/WKID")||d.getElementValue(b,"SpatialReference/WKT");a=n(a);if("typens:PolynomialXform"!==b.getAttribute("xsi:type"))return{spatialReference:a,
transform:null};var c=d.getElementNumericValue(b,"PolynomialOrder")??1,e=d.getElementNumericValues(b,"CoeffX/Double");const g=d.getElementNumericValues(b,"CoeffY/Double");var f=d.getElementNumericValues(b,"InverseCoeffX/Double");b=d.getElementNumericValues(b,"InverseCoeffY/Double");e=u(e,g);f=u(f,b);c=e&&f&&e.length&&f.length?new x({spatialReference:a,polynomialOrder:c,forwardCoefficients:e,inverseCoefficients:f}):null;return{spatialReference:a,transform:c}}function z(a){const b=d.getElementNumericValue(a,
"NoDataValue");var c=d.getElement(a,"Histograms/HistItem");const e=d.getElementNumericValue(c,"HistMin"),g=d.getElementNumericValue(c,"HistMax"),f=d.getElementNumericValue(c,"BucketCount");c=d.getElementValue(c,"HistCounts")?.split("|").map(k=>Number(k));let p,q,v,w;d.getElements(a,"Metadata/MDI").forEach(k=>{const l=Number(k.textContent??k.nodeValue);switch(k.getAttribute("key").toUpperCase()){case "STATISTICS_MINIMUM":p=l;break;case "STATISTICS_MAXIMUM":q=l;break;case "STATISTICS_MEAN":v=l;break;
case "STATISTICS_STDDEV":w=l}});a=d.getElementNumericValue(a,"Metadata/SourceBandIndex");return{noDataValue:b,histogram:c?.length&&null!=e&&null!=g?{min:e,max:g,size:f||c.length,counts:c}:null,sourceBandIndex:a,statistics:null!=p&&null!=q?{min:p,max:q,avg:v,stddev:w}:null}}function n(a){if(!a)return null;var b=Number(a);if(!isNaN(b)&&0!==b)return new h({wkid:b});a=String(a);if(a.startsWith("COMPD_CS")){if(!a.includes("VERTCS")||!a.includes("GEOGCS")&&!a.startsWith("PROJCS"))return null;b=a.indexOf("VERTCS");
var c=a.indexOf("PROJCS");c=-1<c?c:a.indexOf("GEOGCS");if(-1===c)return null;c=a.slice(c,a.lastIndexOf("]",b)+1).trim();a=a.slice(b,a.lastIndexOf("]")).trim();b=(b=r(c))?new h({wkid:b}):new h({wkt:c});if(a=r(a))b.vcsWkid=a;return b}if(!a.startsWith("GEOGCS")&&!a.startsWith("PROJCS"))return null;b=r(a);return 0!==b?new h({wkid:b}):new h({wkt:a})}function r(a){var b=a.replace(/\]/g,"[").replace(/"/g,"").split("[").map(e=>e.trim()).filter(e=>""!==e);b=b[b.length-1].split(",");const c=b[0]?.toLowerCase();
return"epsg"!==c&&"esri"!==c||!a.endsWith('"]]')||(a=Number(b[1]),isNaN(a)||0===a)?0:a}m.parsePAMInfo=function(a){if("pamdataset"!==a?.documentElement.tagName?.toLowerCase())return{};const b={spatialReference:null,transform:null,metadata:{},rasterBands:[],statistics:null,histograms:null};a.documentElement.childNodes.forEach(c=>{if(1===c.nodeType)if(d.isSameTagIgnoreNS(c,"SRS"))b.spatialReference||(c=d.getElementValue(c),b.spatialReference=n(c));else if(d.isSameTagIgnoreNS(c,"Metadata"))if("xml:ESRI"===
c.getAttribute("domain")){const {spatialReference:e,transform:g}=y(c);b.transform=g;b.spatialReference||(b.spatialReference=e)}else d.getElements(c,"MDI").forEach(e=>b.metadata[e.getAttribute("key")]=d.getElementValue(e));else d.isSameTagIgnoreNS(c,"PAMRasterBand")&&(c=z(c),null!=c.sourceBandIndex&&null==b.rasterBands[c.sourceBandIndex]?b.rasterBands[c.sourceBandIndex]=c:b.rasterBands.push(c))});a=b.rasterBands;a.length&&(b.statistics=a[0].statistics?a.map(c=>c.statistics).filter(t.isSome):null,b.histograms=
a[0].histogram?a.map(c=>c.histogram).filter(t.isSome):null);return b};m.parseSpatialReference=n;Object.defineProperties(m,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});