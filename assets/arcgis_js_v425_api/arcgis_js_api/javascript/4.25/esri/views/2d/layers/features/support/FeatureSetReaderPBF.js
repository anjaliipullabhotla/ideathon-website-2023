// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/Error ../../../../../core/Logger ../../../../../core/maybe ../../../../../core/pbf ../../../../../layers/graphics/featureConversionUtils ../../../../../layers/graphics/OptimizedFeature ../../../../../layers/graphics/OptimizedGeometry ./FeatureSetReader ./FeatureSetReaderPBFHeader".split(" "),function(G,H,N,O,y,P,I,Q,z,J,R){function K(g){if(g<=v.small.delta.length)return v.small;if(g<=v.large.delta.length)return v.large;
v.large.delta=new Int32Array(Math.round(1.25*g));v.large.decoded=new Int32Array(Math.round(1.25*g));return v.large}function S(g){var m=g.getLength();for(m=g.pos()+m;g.pos()<m&&g.next();)switch(g.tag()){case 1:return g.getString();case 2:return g.getFloat();case 3:return g.getDouble();case 4:return g.getSInt32();case 5:return g.getUInt32();case 6:return g.getInt64();case 7:return g.getUInt64();case 8:return g.getSInt64();case 9:return g.getBool();default:return g.skip(),null}return null}function F(g,
m,e,a){return 0===g*a-e*m&&0<g*e+m*a}const v={small:{delta:new Int32Array(128),decoded:new Int32Array(128)},large:{delta:new Int32Array(128E3),decoded:new Int32Array(128E3)}};let U=function(g){function m(a,b,f,k){a=g.call(this,a,k)||this;a._hasNext=!1;a._isPoints=!1;a._featureIndex=-1;a._featureOffset=0;a._cache={area:0,unquantGeometry:void 0,geometry:void 0,centroid:void 0,legacyFeature:void 0,optFeature:void 0};a._geometryType=k.geometryType;a._reader=b;a._header=f;a._hasNext=f.hasFeatures;a._isPoints=
"esriGeometryPoint"===k.geometryType;return a}H._inheritsLoose(m,g);m.fromBuffer=function(a,b,f=!1){var k=b.geometryType;a:{try{const c=new P(new Uint8Array(a),new DataView(a));for(;c.next();)switch(c.tag()){case 2:b:{for(var h=c.getMessage();h.next();)switch(h.tag()){case 1:var d=h.getMessage();break b;default:h.skip()}d=null}break a;default:c.skip()}}catch(c){a=new N("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:c}),O.getLogger("esri.view.2d.layers.features.support.FeatureSetReaderPBF").error(a)}d=
null}a=d;f=R.parseHeader(a,"esriGeometryPoint"===k,f);k=J.FeatureSetReader.createInstance();return new m(k,a,f,b)};var e=m.prototype;e.hasField=function(a){return this._header.hasField(a)||this._header.hasField(a.toLowerCase().trim())};e.getFieldNames=function(){return this._header.fields.map(a=>a.fieldName)};e.getSize=function(){return this._size};e.getQuantizationTransform=function(){return this._header.transform};e.getCursor=function(){return this.copy()};e.getIndex=function(){return this._featureIndex};
e.setIndex=function(a){this._cache.area=0;this._cache.unquantGeometry=void 0;this._cache.geometry=void 0;this._cache.centroid=void 0;this._cache.legacyFeature=void 0;this._cache.optFeature=void 0;this._featureIndex=a};e.getAttributeHash=function(){let a="";this._header.fields.forEach(({index:b})=>{a+=this._readAttributeAtIndex(b)+"."});return a};e.getObjectId=function(){return this._readAttributeAtIndex(this._header.objectIdFieldIndex)};e.getDisplayId=function(){return this._header.displayIds[this._featureIndex]};
e.setDisplayId=function(a){this._header.displayIds[this._featureIndex]=a};e.getGroupId=function(){return this._header.groupIds[this._featureIndex]};e.setGroupId=function(a){this._header.groupIds[this._featureIndex]=a};e.readLegacyFeature=function(){if(void 0===this._cache.legacyFeature){var a=this.readCentroid();a={attributes:this.readAttributes(),geometry:this._isPoints?this.readLegacyPointGeometry():this.readLegacyGeometry(),centroid:(a&&{x:a.coords[0],y:a.coords[1]})??null};return this._cache.legacyFeature=
a}return this._cache.legacyFeature};e.readOptimizedFeature=function(){if(void 0===this._cache.optFeature){const a=new Q.OptimizedFeature(this.readGeometry(),this.readAttributes(),this.readCentroid());a.objectId=this.getObjectId();a.displayId=this.getDisplayId();return this._cache.optFeature=a}return this._cache.optFeature};e.getXHydrated=function(){const a=this._header.centroid[2*this._featureIndex],b=this.getQuantizationTransform();return y.isNone(b)?a:a*b.scale[0]+b.translate[0]};e.getYHydrated=
function(){const a=this._header.centroid[2*this._featureIndex+1],b=this.getQuantizationTransform();return y.isNone(b)?a:b.translate[1]-a*b.scale[1]};e.getX=function(){return this._header.centroid[2*this._featureIndex]*this._sx+this._tx};e.getY=function(){return this._header.centroid[2*this._featureIndex+1]*this._sy+this._ty};e.readLegacyPointGeometry=function(){const a=this.getX(),b=this.getY();return{x:a,y:b}};e.readLegacyGeometry=function(a){a=this.readGeometry(a);return I.convertToGeometry(a,this.geometryType,
!1,!1)};e.readLegacyCentroid=function(){const a=this.readCentroid();if(!a)return null;const [b,f]=a.coords;return{x:b,y:f}};e.readGeometryArea=function(){this._cache.area||this.readGeometry(!0);return this._cache.area};e.readUnquantizedGeometry=function(a=!1){if(void 0===this._cache.unquantGeometry){a=this.readGeometry(a);if(!a)return this._cache.unquantGeometry=void 0,null;var b=K(a.coords.length).decoded;a=a.clone(b);b=a.coords;let f=0;for(const k of a.lengths){for(let h=1;h<k;h++){const d=2*(f+
h),c=2*(f+h-1);b[d]+=b[c];b[d+1]+=b[c+1]}f+=k}return this._cache.unquantGeometry=a}return this._cache.unquantGeometry};e.readHydratedGeometry=function(){if(this._isPoints){if(268435455===this._header.centroid[2*this._featureIndex])return null;var a=this.getXHydrated(),b=this.getYHydrated();return new z([],[a,b])}a=this.readGeometry();if(!a)return null;a=a.clone();b=this.getQuantizationTransform();y.isSome(b)&&I.unquantizeOptimizedGeometry(a,a,this.hasZ,this.hasM,b);return a};e.readGeometry=function(a=
!1){if(void 0===this._cache.geometry){var b=null;if(this._isPoints){if(268435455===this._header.centroid[2*this._featureIndex])return null;a=this.getX();b=this.getY();b=new z([],[a,b])}else{const f=this._header.offsets.geometry[this._featureIndex],k=this._reader;if(0===f){a=this._readServerCentroid();if(!a)return null;const [h,d]=a.coords;return this.createQuantizedExtrudedQuad(h,d)}k.move(f);try{if(b=a?this._parseGeometryForDisplay(k):this._parseGeometry(k),null===b){const h=this._readServerCentroid();
if(!h)return null;const [d,c]=h.coords;return this.createQuantizedExtrudedQuad(d,c)}}catch(h){return console.error("Failed to parse geometry!",h),null}}return this._cache.geometry=b}return this._cache.geometry};e.readCentroid=function(){if(void 0===this._cache.centroid){let a=void 0;(a=this._computeCentroid())||(a=this._readServerCentroid());this._cache.centroid=a??void 0;return a??null}return this._cache.centroid};e.copy=function(){var a=this._reader.clone();a=new m(this.instance,a,this._header,
this.fullSchema());this.copyInto(a);return a};e.next=function(){this._cache.area=0;this._cache.unquantGeometry=void 0;this._cache.geometry=void 0;this._cache.centroid=void 0;this._cache.legacyFeature=void 0;for(this._cache.optFeature=void 0;++this._featureIndex<this._size&&!this._getExists(););return this._featureIndex<this._size};e._readAttribute=function(a,b){a=this._header.hasField(a)?a:a.toLowerCase().trim();var f=this._header.getFieldIndex(a);if(null!=f)return f=this._readAttributeAtIndex(f),
b&&null!=f?this._header.isDateField(a)?new Date(f):f:f};e._readAttributes=function(){const a={};this._header.fields.forEach(({fieldName:b,index:f})=>{a[b]=this._readAttributeAtIndex(f)});return a};e.copyInto=function(a){g.prototype.copyInto.call(this,a);a._featureIndex=this._featureIndex;a._featureOffset=this._featureOffset;a._hasNext=this._hasNext};e._readAttributeAtIndex=function(a){const b=this._reader;b.move(this._header.offsets.attributes[this._featureIndex*this._header.fieldCount+a]);return S(b)};
e._readServerCentroid=function(){const a=this._header.centroid[2*this._featureIndex]+this._tx;return 268435455===a?null:new z([],[a,this._header.centroid[2*this._featureIndex+1]+this._ty])};e._parseGeometry=function(a){a=a.asUnsafe();var b=a.getLength();b=a.pos()+b;const f=[],k=[];for(;a.pos()<b&&a.next();)switch(a.tag()){case 2:var h=a.getUInt32();for(h=a.pos()+h;a.pos()<h;)k.push(a.getUInt32());break;case 3:h=a.getUInt32();h=a.pos()+h;f.push(a.getSInt32()+this._tx);f.push(a.getSInt32()+this._ty);
this.hasZ&&a.getSInt32();for(this.hasM&&a.getSInt32();a.pos()<h;)f.push(a.getSInt32()),f.push(a.getSInt32()),this.hasZ&&a.getSInt32(),this.hasM&&a.getSInt32();break;default:a.skip()}return new z(k,f)};e._parseGeometryForDisplay=function(a){a=a.asUnsafe();var b=a.getLength();const f=a.pos()+b,k=[];b=[];let h=0,d=0;var c=null;let D=0;const T="esriGeometryPolygon"===this.geometryType;for(;a.pos()<f&&a.next();)switch(a.tag()){case 2:c=a.getUInt32();for(c=a.pos()+c;a.pos()<c;){var E=a.getUInt32();k.push(E);
h+=E}c=K(2*h).delta;break;case 3:a.getUInt32();E=2+(this.hasZ?1:0)+(this.hasM?1:0);y.assertIsSome(c);for(var r of k)if(d+E*r>c.length)for(var u=0;u<r;u++)a.getSInt32(),a.getSInt32(),this.hasZ&&a.getSInt32(),this.hasM&&a.getSInt32();else if(T){u=this.getAreaSimplificationThreshold(r,this._header.vertexCount);var w=2,t=1,q=a.getSInt32(),n=a.getSInt32();c[d++]=q;c[d++]=n;this.hasZ&&a.getSInt32();this.hasM&&a.getSInt32();var l=a.getSInt32(),p=a.getSInt32();this.hasZ&&a.getSInt32();for(this.hasM&&a.getSInt32();w<
r;){var x=a.getSInt32();let A=a.getSInt32();this.hasZ&&a.getSInt32();this.hasM&&a.getSInt32();const B=q+l,C=n+p,L=B+x,M=C+A;.5*Math.abs(q*C+B*M+L*n-q*M-B*n-L*C)>=u?(D+=-.5*(B-q)*(C+n),1<t&&F(c[d-2],c[d-1],l,p)?(c[d-2]+=l,c[d-1]+=p):(c[d++]=l,c[d++]=p,t++),q=B,n=C):(x+=l,A+=p);l=x;p=A;w++}3>t?d-=2*t:(D+=-.5*(q+l-q)*(n+p+n),F(c[d-2],c[d-1],l,p)?(c[d-2]+=l,c[d-1]+=p,b.push(t)):(c[d++]=l,c[d++]=p,b.push(++t)))}else{u=0;w=a.getSInt32();t=a.getSInt32();this.hasZ&&a.getSInt32();this.hasM&&a.getSInt32();
c[d++]=w;c[d++]=t;u+=1;for(q=1;q<r;q++)n=a.getSInt32(),l=a.getSInt32(),p=w+n,x=t+l,D+=-.5*(p-w)*(x+t),this.hasZ&&a.getSInt32(),this.hasM&&a.getSInt32(),2<q&&F(c[d-2],c[d-1],n,l)?(c[d-2]+=n,c[d-1]+=l):(c[d++]=n,c[d++]=l,u+=1),w=p,t=x;b.push(u)}break;default:a.skip()}this._cache.area=D;if(!b.length)return null;if(this._tx||this._ty){r=0;y.assertIsSome(c);for(const A of b)c[2*r]+=this._tx,c[2*r+1]+=this._ty,r+=A}return new z(b,c)};H._createClass(m,[{key:"geometryType",get:function(){return this._geometryType}},
{key:"_size",get:function(){return this._header.featureCount}},{key:"hasZ",get:function(){return!1}},{key:"hasM",get:function(){return!1}},{key:"stride",get:function(){return 2+(this.hasZ?1:0)+(this.hasM?1:0)}},{key:"hasFeatures",get:function(){return this._header.hasFeatures}},{key:"hasNext",get:function(){return this._hasNext}},{key:"exceededTransferLimit",get:function(){return this._header.exceededTransferLimit}}]);return m}(J.FeatureSetReader);G.FeatureSetReaderPBF=U;Object.defineProperties(G,
{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});