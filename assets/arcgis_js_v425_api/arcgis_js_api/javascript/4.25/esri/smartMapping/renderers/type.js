// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../renderers/PointCloudClassBreaksRenderer ../../renderers/PointCloudRenderer ../../renderers/PointCloudRGBRenderer ../../renderers/PointCloudStretchRenderer ../../renderers/PointCloudUniqueValueRenderer ../../renderers/ClassBreaksRenderer ../../renderers/DictionaryRenderer ../../renderers/DotDensityRenderer ../../renderers/HeatmapRenderer ../../renderers/PieChartRenderer ../../renderers/Renderer ../../renderers/SimpleRenderer ../../renderers/UniqueValueRenderer ../../renderers/support/jsonUtils ../../core/Error ../../core/lang ../../core/maybe ../../intl/messages ../../renderers/support/LegendOptions ../../renderers/support/utils ../heuristics/outline ../heuristics/sizeRange ./support/utils ../statistics/uniqueValues ../support/binningUtils ../support/utils ../support/adapters/support/layerUtils ../symbology/type".split(" "),
function(D,q,oa,pa,qa,ra,aa,sa,ta,ua,va,wa,xa,ya,ba,za,l,Q,A,ca,da,E,ea,fa,f,R,ha,F,r,G){function S(a){if(a.name?.toLowerCase()?.includes(":insufficient-info"))return null;throw a;}function ia(a){return H.apply(this,arguments)}function H(){H=q._asyncToGenerator(function*(a){if(!a||!a.layer||!a.field&&!a.valueExpression)throw new l("type-renderer:missing-parameters","'layer' and 'field' or 'valueExpression' parameters are required");if(a.valueExpression&&!a.view)throw new l("type-renderer:missing-parameters",
"View is required when 'valueExpression' is specified");a.forBinning&&ha.verifyBinningParams(a,"type-renderer");const b={...a};b.symbolType=b.symbolType||"2d";b.numTypes=null==b.numTypes?10:b.numTypes;b.defaultSymbolEnabled=null==b.defaultSymbolEnabled?!0:b.defaultSymbolEnabled;b.sortBy=null==b.sortBy?"count":b.sortBy;b.sortEnabled=null==b.sortEnabled?!0:b.sortEnabled;b.statistics=Q.clone(b.statistics);var c=a.forBinning?r.binningCapableLayerTypes:r.featureCapableLayerTypes;a=r.createLayerAdapter(b.layer,
c,a.forBinning);b.layer=a;if(!a)throw new l("type-renderer:invalid-parameters","'layer' must be one of these types: "+r.getLayerTypeLabels(c).join(", "));c=A.isSome(b.signal)?{signal:b.signal}:null;yield a.load(c);c=a.geometryType;b.outlineOptimizationEnabled="polygon"===c?b.outlineOptimizationEnabled:!1;b.sizeOptimizationEnabled="point"===c||"multipoint"===c||"polyline"===c?b.sizeOptimizationEnabled:!1;if("mesh"===c)b.symbolType="3d-volumetric",b.colorMixMode=b.colorMixMode||"replace",b.edgesType=
b.edgesType||"none";else{if("3d-volumetric-uniform"===b.symbolType&&"point"!==c)throw new l("type-renderer:not-supported","3d-volumetric-uniform symbols are supported for point layers only");if(b.symbolType.includes("3d-volumetric")&&(!b.view||"3d"!==b.view.type))throw new l("type-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'");}c=yield F.getFieldsList({field:b.field,field2:b.field2,field3:b.field3,
valueExpression:b.valueExpression});if(a=f.verifyBasicFieldValidity(a,c,"type-renderer:invalid-parameters"))throw a;return b});return H.apply(this,arguments)}function ja(a){return I.apply(this,arguments)}function I(){I=q._asyncToGenerator(function*(a){if(!(a&&a.layer&&a.field))throw new l("type-point-cloud-class-renderer:missing-parameters","'layer' and 'field' parameters are required");a={...a};a.statistics=Q.clone(a.statistics);var b=[r.LayerType.PointCloudLayer],c=r.createLayerAdapter(a.layer,
b);a.layer=c;a.density=a.density||25;a.size=a.size||"100%";if(!f.isValidPointSize(a.size))throw new l("type-point-cloud-class-renderer:invalid-parameters","Invalid 'size' parameter. It should be a string of the form '100%'");if(!c)throw new l("type-point-cloud-class-renderer:invalid-parameters","'layer' must be one of these types: "+r.getLayerTypeLabels(b).join(", "));b=A.isSome(a.signal)?{signal:a.signal}:null;yield c.load(b);b=yield F.getFieldsList({field:a.field});if(c=f.verifyBasicFieldValidity(c,
b,"type-point-cloud-class-renderer:invalid-parameters"))throw c;return a});return I.apply(this,arguments)}function T(a){return J.apply(this,arguments)}function J(){J=q._asyncToGenerator(function*(a){let b=a.typeScheme,c=null;var d=null;d=yield f.getBasemapInfo(a.basemap,a.view);c=A.isSome(d.basemapId)?d.basemapId:null;d=A.isSome(d.basemapTheme)?d.basemapTheme:null;if(b)return{scheme:G.cloneScheme(b),basemapId:c,basemapTheme:d};if(a=G.getSchemes({basemap:c,basemapTheme:d,geometryType:a.geometryType,
theme:a.theme,worldScale:a.worldScale,view:a.view}))b=a.primaryScheme,c=a.basemapId,d=a.basemapTheme;return{scheme:b,basemapId:c,basemapTheme:d}});return J.apply(this,arguments)}function U(a,b){return a.label<b.label?-1:a.label>b.label?1:0}function V(a,b){return a.value<b.value?-1:a.value>b.value?1:0}function ka(a,b){let c=b.count-a.count;0===c&&(c=U(a,b));return c}function la(a,b){let c=b.count-a.count;0===c&&(c=V(a,b));return c}function W(a,b,c){let d;"count"===b?(d=la,c&&c.codedValues&&(d=ka)):
"value"===b&&(d=V,c&&c.codedValues&&(d=U));d&&a.sort(d)}function ma(a,b,c,d){return K.apply(this,arguments)}function K(){K=q._asyncToGenerator(function*(a,b,c,d){var k=yield ca.fetchMessageBundle("esri/smartMapping/t9n/smartMapping");const {field:m,field2:t,field3:n}=b;a=a.uniqueValueInfos;var u=b.layer,p=m?u.getField(m):null;const X=p?u.getFieldDomain(p.name):null,L=-1===b.numTypes?a.length:b.numTypes,v=u.geometryType;u=yield T({basemap:b.basemap,geometryType:v,typeScheme:b.typeScheme,worldScale:b.symbolType.includes("3d-volumetric"),
view:b.view});const w=u.scheme,g=new ba({field:m,field2:t,field3:n,fieldDelimiter:m&&t?F.FIELD_DELIMITER:null}),Y=[],Z=[],y={value:null,domain:X,fieldInfo:p};a.forEach((e,z)=>{y.value=e.value;e.label=E.createUniqueValueLabel(y);e=e.value;(null===e||"string"===typeof e&&e.toLowerCase().includes("\x3cnull\x3e"))&&Y.unshift(z)});for(var h of Y)Z.unshift(a.splice(h,1)[0]);!1!==b.sortEnabled&&W(a,b.sortBy,X);p&&"date"===p.type&&(h=a.filter((e,z)=>z<L).map(e=>e.value),y.dateFormatInterval=E.calculateDateFormatInterval(h));
h=c&&c.opacity;let M=f.createColors(w.colors,a.length);const B=f.getSymbolSizeFromScheme(w,v),C=f.getSymbolOutlineFromScheme(w,v,h);a.forEach((e,z)=>{y.value=e.value;e.label=E.createUniqueValueLabel(y);e.symbol=f.createSymbol(v,{type:b.symbolType,color:M[z],size:B,outline:C,meshInfo:{colorMixMode:b.colorMixMode,edgesType:b.edgesType}})});b.valueExpression&&(g.valueExpression=b.valueExpression,g.valueExpressionTitle=b.valueExpressionTitle);b.legendOptions&&(g.legendOptions=new da.LegendOptions(b.legendOptions));
M=f.createColors(w.colors,L);for(h=0;h<L;h++)(p=a[h])&&g.addUniqueValueInfo({value:p.value,label:p.label,symbol:f.createSymbol(v,{type:b.symbolType,color:M[h],size:B,outline:C,meshInfo:{colorMixMode:b.colorMixMode,edgesType:b.edgesType}})});b.defaultSymbolEnabled&&(g.defaultSymbol=f.createSymbol(v,{type:b.symbolType,color:w.noDataColor,size:B,outline:C,meshInfo:{colorMixMode:b.colorMixMode,edgesType:b.edgesType}}),g.defaultLabel=k.other);for(var x of Z)x.symbol=f.createSymbol(v,{type:b.symbolType,
color:w.noDataColor,size:B,outline:C,meshInfo:{colorMixMode:b.colorMixMode,edgesType:b.edgesType}}),a.push(x);k=[];x=g.uniqueValueInfos.length===a.length?-1:g.uniqueValueInfos.length;if(-1<x)for(;x<a.length;x++)k.push({...a[x]});c&&c.visualVariables&&c.visualVariables.length&&(g.visualVariables=c.visualVariables.map(e=>e.clone()));d&&d.minSize&&(g.visualVariables?g.visualVariables.push(d.minSize):g.visualVariables=[d.minSize]);return{renderer:g,uniqueValueInfos:a,excludedUniqueValueInfos:k,typeScheme:G.cloneScheme(w),
basemapId:u.basemapId,basemapTheme:u.basemapTheme}});return K.apply(this,arguments)}function na(a,b){return N.apply(this,arguments)}function N(){N=q._asyncToGenerator(function*(a,b){a=a.uniqueValueInfos;b=(b=yield T({basemap:"gray",theme:"point-cloud-class",geometryType:"point",typeScheme:b}))&&b.scheme;const c="point-cloud-class"===b.theme,d=c?b.colors:f.createColors(b.colors,a.length);W(a,"value");return a.map((k,m)=>{const t=k.value;let n=null;c?(n=d[t])||(n=d[d.length-1]):n=d[m];return{values:[t],
color:n,label:k.label}})});return N.apply(this,arguments)}function O(){O=q._asyncToGenerator(function*(a){a=yield ia(a);const {layer:b,view:c,signal:d}=a,k={layer:b,field:a.field,field2:a.field2,field3:a.field3,valueExpression:a.valueExpression,returnAllCodedValues:a.returnAllCodedValues,view:c,signal:d},[m,t,n]=yield Promise.all([null!=a.statistics?a.statistics:R(k),a.outlineOptimizationEnabled?ea({layer:b,view:c,signal:d}).catch(S):null,a.sizeOptimizationEnabled?fa({layer:b,view:c,signal:d}).catch(S):
null]);return ma(m,a,t,n)});return O.apply(this,arguments)}function P(){P=q._asyncToGenerator(function*(a){a=yield ja(a);const b=null!=a.statistics?a.statistics:yield R({layer:a.layer,field:a.field,signal:a.signal});return{renderer:new aa({field:a.field,pointsPerInch:a.density,pointSizeAlgorithm:f.getPointSizeAlgorithm(a.size),colorUniqueValueInfos:yield na(b,a.typeScheme)})}});return P.apply(this,arguments)}D.createPCClassRenderer=function(a){return P.apply(this,arguments)};D.createRenderer=function(a){return O.apply(this,
arguments)};Object.defineProperties(D,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});