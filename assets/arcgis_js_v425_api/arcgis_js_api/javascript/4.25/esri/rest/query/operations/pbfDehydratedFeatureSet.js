// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../core/compilerUtils ../../../core/maybe ../../../core/uid ../../../geometry/SpatialReference ../../../geometry/support/zscale ../../../layers/graphics/dehydratedFeatures ../../../layers/graphics/featureConversionUtils ../../../layers/support/Field".split(" "),function(l,q,r,t,u,v,m,n,w){function x(e,c){return c}function k(e,c,a,b){switch(a){case 0:return h(e,c+b,0);case 1:return"lowerLeft"===e.originPosition?h(e,c+b,1):y(e,c+b,1)}}function p(e,c,a,b){switch(a){case 2:return h(e,
c,2);default:return k(e,c,a,b)}}function z(e,c,a,b){switch(a){case 2:return h(e,c,3);default:return k(e,c,a,b)}}function A(e,c,a,b){switch(a){case 3:return h(e,c,3);default:return p(e,c,a,b)}}function h({translate:e,scale:c},a,b){return e[b]+a*c[b]}function y({translate:e,scale:c},a,b){return e[b]-a*c[b]}let B=function(){function e(a){this._options=a;this.geometryTypes=["point","multipoint","polyline","polygon"];this._previousCoordinate=[0,0];this._transform=null;this._applyTransform=x;this._lengths=
[];this._vertexDimension=this._toAddInCurrentPath=this._currentLengthIndex=0;this._coordinateBuffer=null;this._coordinateBufferPtr=0;this._attributesConstructor=function(){return function(){}}()}var c=e.prototype;c.createFeatureResult=function(){return new m.DehydratedFeatureSetClass};c.finishFeatureResult=function(a){this._options.applyTransform&&(a.transform=null);this._attributesConstructor=function(){return function(){}}();this._coordinateBuffer=null;this._lengths.length=0;if(a.hasZ){var b=v.getGeometryZScaler(a.geometryType,
this._options.sourceSpatialReference,a.spatialReference);if(!r.isNone(b))for(const d of a.features)b(d.geometry)}};c.createSpatialReference=function(){return new u};c.addField=function(a,b){a.fields.push(w.fromJSON(b));const d=a.fields.map(f=>f.name);this._attributesConstructor=function(){for(const f of d)this[f]=null}};c.addFeature=function(a,b){const d=this._options.maxStringAttributeLength?this._options.maxStringAttributeLength:0;if(0<d)for(const f in b.attributes){const g=b.attributes[f];"string"===
typeof g&&g.length>d&&(b.attributes[f]="")}a.features.push(b)};c.addQueryGeometry=function(a,b){const {queryGeometry:d,queryGeometryType:f}=b;b=n.unquantizeOptimizedGeometry(d.clone(),d,!1,!1,this._transform);b=n.convertToGeometry(b,f,!1,!1);let g=null;switch(f){case "esriGeometryPoint":g="point";break;case "esriGeometryPolygon":g="polygon";break;case "esriGeometryPolyline":g="polyline";break;case "esriGeometryMultipoint":g="multipoint"}b.type=g;a.queryGeometryType=f;a.queryGeometry=b};c.prepareFeatures=
function(a){this._transform=a.transform;this._options.applyTransform&&a.transform&&(this._applyTransform=this._deriveApplyTransform(a));this._vertexDimension=2;a.hasZ&&this._vertexDimension++;a.hasM&&this._vertexDimension++;switch(a.geometryType){case "point":this.addCoordinate=(b,d,f)=>this.addCoordinatePoint(b,d,f);this.createGeometry=b=>this.createPointGeometry(b);break;case "polygon":this.addCoordinate=(b,d,f)=>this._addCoordinatePolygon(b,d,f);this.createGeometry=b=>this._createPolygonGeometry(b);
break;case "polyline":this.addCoordinate=(b,d,f)=>this._addCoordinatePolyline(b,d,f);this.createGeometry=b=>this._createPolylineGeometry(b);break;case "multipoint":this.addCoordinate=(b,d,f)=>this._addCoordinateMultipoint(b,d,f);this.createGeometry=b=>this._createMultipointGeometry(b);break;case "mesh":case "extent":break;default:q.neverReached(a.geometryType)}};c.createFeature=function(){this._currentLengthIndex=this._lengths.length=0;this._previousCoordinate[0]=0;this._previousCoordinate[1]=0;return new m.DehydratedFeatureClass(t.generateUID(),
null,new this._attributesConstructor)};c.allocateCoordinates=function(){const a=this._lengths.reduce((b,d)=>b+d,0);this._coordinateBuffer=new Float64Array(a*this._vertexDimension);this._coordinateBufferPtr=0};c.addLength=function(a,b,d){0===this._lengths.length&&(this._toAddInCurrentPath=b);this._lengths.push(b)};c.createPointGeometry=function(a){a={type:"point",x:0,y:0,spatialReference:a.spatialReference,hasZ:!!a.hasZ,hasM:!!a.hasM};a.hasZ&&(a.z=0);a.hasM&&(a.m=0);return a};c.addCoordinatePoint=
function(a,b,d){b=this._applyTransform(this._transform,b,d,0);switch(d){case 0:a.x=b;break;case 1:a.y=b;break;case 2:a.hasZ?a.z=b:a.m=b;break;case 3:a.m=b}};c._transformPathLikeValue=function(a,b){let d=0;1>=b&&(d=this._previousCoordinate[b],this._previousCoordinate[b]+=a);return this._applyTransform(this._transform,a,b,d)};c._addCoordinatePolyline=function(a,b,d){this._dehydratedAddPointsCoordinate(a.paths,b,d)};c._addCoordinatePolygon=function(a,b,d){this._dehydratedAddPointsCoordinate(a.rings,
b,d)};c._addCoordinateMultipoint=function(a,b,d){0===d&&a.points.push([]);b=this._transformPathLikeValue(b,d);a.points[a.points.length-1].push(b)};c._createPolygonGeometry=function(a){return{type:"polygon",rings:[[]],spatialReference:a.spatialReference,hasZ:!!a.hasZ,hasM:!!a.hasM}};c._createPolylineGeometry=function(a){return{type:"polyline",paths:[[]],spatialReference:a.spatialReference,hasZ:!!a.hasZ,hasM:!!a.hasM}};c._createMultipointGeometry=function(a){return{type:"multipoint",points:[],spatialReference:a.spatialReference,
hasZ:!!a.hasZ,hasM:!!a.hasM}};c._dehydratedAddPointsCoordinate=function(a,b,d){0===d&&0===this._toAddInCurrentPath--&&(a.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);b=this._transformPathLikeValue(b,d);a=a[a.length-1];0===d&&a.push(new Float64Array(this._coordinateBuffer.buffer,this._coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT,this._vertexDimension));this._coordinateBuffer[this._coordinateBufferPtr++]=
b};c._deriveApplyTransform=function(a){const {hasZ:b,hasM:d}=a;return b&&d?A:b?p:d?z:k};return e}();l.DehydratedFeatureSetParserContext=B;Object.defineProperties(l,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});