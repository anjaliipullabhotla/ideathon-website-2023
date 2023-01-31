"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[9132],{59765:(e,t,i)=>{i.d(t,{Z:()=>c,t:()=>u});var r=i(29768),n=i(12047),s=i(35197),l=i(34250),o=(i(76506),i(91306),i(17533)),a=i(57251);i(21972),i(60474),i(66396),i(86656),i(71552),i(92143),i(31450),i(40642),i(91055),i(6540),i(19657),i(6906),i(50406),i(60991);const u=(0,a.s)()({esriTimeUnitsMilliseconds:"milliseconds",esriTimeUnitsSeconds:"seconds",esriTimeUnitsMinutes:"minutes",esriTimeUnitsHours:"hours",esriTimeUnitsDays:"days",esriTimeUnitsWeeks:"weeks",esriTimeUnitsMonths:"months",esriTimeUnitsYears:"years",esriTimeUnitsDecades:"decades",esriTimeUnitsCenturies:"centuries",esriTimeUnitsUnknown:void 0});var p;let d=p=class extends n.wq{constructor(e){super(e),this.value=0,this.unit="milliseconds"}toMilliseconds(){return(0,s.c)(this.value,this.unit,"milliseconds")}clone(){return new p({value:this.value,unit:this.unit})}};(0,r._)([(0,l.Cb)({type:Number,json:{write:!0},nonNullable:!0})],d.prototype,"value",void 0),(0,r._)([(0,l.Cb)({type:u.apiValues,json:{type:u.jsonValues,read:u.read,write:u.write},nonNullable:!0})],d.prototype,"unit",void 0),d=p=(0,r._)([(0,o.j)("esri.TimeInterval")],d);const c=d},29395:(e,t,i)=>{i.d(t,{F:()=>o});var r=i(29768),n=i(12047),s=i(34250),l=(i(76506),i(91306),i(17533));let o=class extends n.wq{constructor(){super(...arguments),this.type=null}};(0,r._)([(0,s.Cb)({type:["selection","cluster","binning"],readOnly:!0,json:{read:!1,write:!0}})],o.prototype,"type",void 0),o=(0,r._)([(0,l.j)("esri.layers.support.FeatureReduction")],o)},13201:(e,t,i)=>{i.d(t,{a:()=>I,c:()=>R,o:()=>b});var r=i(60991),n=i(71552),s=i(92143),l=i(71252),o=i(70846),a=i(67961),u=i(12158),p=i(90319),d=i(38822),c=i(29768),f=i(76506),y=i(34250),m=(i(91306),i(17533)),h=i(2906),v=i(52228);const b={Base64:0,Hex:1,String:2,Raw:3};function w(e,t){const i=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(i>>16)<<16|65535&i}function g(e,t,i,r,n,s){return w((l=w(w(t,e),w(r,s)))<<(o=n)|l>>>32-o,i);var l,o}function x(e,t,i,r,n,s,l){return g(t&i|~t&r,e,t,n,s,l)}function _(e,t,i,r,n,s,l){return g(t&r|i&~r,e,t,n,s,l)}function S(e,t,i,r,n,s,l){return g(t^i^r,e,t,n,s,l)}function E(e,t,i,r,n,s,l){return g(i^(t|~r),e,t,n,s,l)}function I(e,t=b.Hex){const i=t||b.Base64,r=function(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;let i=1732584193,r=-271733879,n=-1732584194,s=271733878;for(let t=0;t<e.length;t+=16){const l=i,o=r,a=n,u=s;i=x(i,r,n,s,e[t+0],7,-680876936),s=x(s,i,r,n,e[t+1],12,-389564586),n=x(n,s,i,r,e[t+2],17,606105819),r=x(r,n,s,i,e[t+3],22,-1044525330),i=x(i,r,n,s,e[t+4],7,-176418897),s=x(s,i,r,n,e[t+5],12,1200080426),n=x(n,s,i,r,e[t+6],17,-1473231341),r=x(r,n,s,i,e[t+7],22,-45705983),i=x(i,r,n,s,e[t+8],7,1770035416),s=x(s,i,r,n,e[t+9],12,-1958414417),n=x(n,s,i,r,e[t+10],17,-42063),r=x(r,n,s,i,e[t+11],22,-1990404162),i=x(i,r,n,s,e[t+12],7,1804603682),s=x(s,i,r,n,e[t+13],12,-40341101),n=x(n,s,i,r,e[t+14],17,-1502002290),r=x(r,n,s,i,e[t+15],22,1236535329),i=_(i,r,n,s,e[t+1],5,-165796510),s=_(s,i,r,n,e[t+6],9,-1069501632),n=_(n,s,i,r,e[t+11],14,643717713),r=_(r,n,s,i,e[t+0],20,-373897302),i=_(i,r,n,s,e[t+5],5,-701558691),s=_(s,i,r,n,e[t+10],9,38016083),n=_(n,s,i,r,e[t+15],14,-660478335),r=_(r,n,s,i,e[t+4],20,-405537848),i=_(i,r,n,s,e[t+9],5,568446438),s=_(s,i,r,n,e[t+14],9,-1019803690),n=_(n,s,i,r,e[t+3],14,-187363961),r=_(r,n,s,i,e[t+8],20,1163531501),i=_(i,r,n,s,e[t+13],5,-1444681467),s=_(s,i,r,n,e[t+2],9,-51403784),n=_(n,s,i,r,e[t+7],14,1735328473),r=_(r,n,s,i,e[t+12],20,-1926607734),i=S(i,r,n,s,e[t+5],4,-378558),s=S(s,i,r,n,e[t+8],11,-2022574463),n=S(n,s,i,r,e[t+11],16,1839030562),r=S(r,n,s,i,e[t+14],23,-35309556),i=S(i,r,n,s,e[t+1],4,-1530992060),s=S(s,i,r,n,e[t+4],11,1272893353),n=S(n,s,i,r,e[t+7],16,-155497632),r=S(r,n,s,i,e[t+10],23,-1094730640),i=S(i,r,n,s,e[t+13],4,681279174),s=S(s,i,r,n,e[t+0],11,-358537222),n=S(n,s,i,r,e[t+3],16,-722521979),r=S(r,n,s,i,e[t+6],23,76029189),i=S(i,r,n,s,e[t+9],4,-640364487),s=S(s,i,r,n,e[t+12],11,-421815835),n=S(n,s,i,r,e[t+15],16,530742520),r=S(r,n,s,i,e[t+2],23,-995338651),i=E(i,r,n,s,e[t+0],6,-198630844),s=E(s,i,r,n,e[t+7],10,1126891415),n=E(n,s,i,r,e[t+14],15,-1416354905),r=E(r,n,s,i,e[t+5],21,-57434055),i=E(i,r,n,s,e[t+12],6,1700485571),s=E(s,i,r,n,e[t+3],10,-1894986606),n=E(n,s,i,r,e[t+10],15,-1051523),r=E(r,n,s,i,e[t+1],21,-2054922799),i=E(i,r,n,s,e[t+8],6,1873313359),s=E(s,i,r,n,e[t+15],10,-30611744),n=E(n,s,i,r,e[t+6],15,-1560198380),r=E(r,n,s,i,e[t+13],21,1309151649),i=E(i,r,n,s,e[t+4],6,-145523070),s=E(s,i,r,n,e[t+11],10,-1120210379),n=E(n,s,i,r,e[t+2],15,718787259),r=E(r,n,s,i,e[t+9],21,-343485551),i=w(i,l),r=w(r,o),n=w(n,a),s=w(s,u)}return[i,r,n,s]}(function(e){const t=[];for(let i=0,r=8*e.length;i<r;i+=8)t[i>>5]|=(255&e.charCodeAt(i/8))<<i%32;return t}(e),8*e.length);switch(i){case b.Raw:return r;case b.Hex:return function(e){const t="0123456789abcdef",i=[];for(let r=0,n=4*e.length;r<n;r++)i.push(t.charAt(e[r>>2]>>r%4*8+4&15)+t.charAt(e[r>>2]>>r%4*8&15));return i.join("")}(r);case b.String:return function(e){const t=[];for(let i=0,r=32*e.length;i<r;i+=8)t.push(String.fromCharCode(e[i>>5]>>>i%32&255));return t.join("")}(r);case b.Base64:return function(e){const t=[];for(let i=0,r=4*e.length;i<r;i+=3){const r=(e[i>>2]>>i%4*8&255)<<16|(e[i+1>>2]>>(i+1)%4*8&255)<<8|e[i+2>>2]>>(i+2)%4*8&255;for(let n=0;n<4;n++)8*i+6*n>32*e.length?t.push("="):t.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(r>>6*(3-n)&63))}return t.join("")}(r)}}var j;let C=j=class extends p.Z{writeLevels(e,t,i){for(const i in e){const e=this.levels[i];return void(t.stops=e)}}clone(){return new j({axis:this.axis,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,maxDataValue:this.maxDataValue,maxSize:(0,v.i)(this.maxSize)?this.maxSize.clone():this.maxSize,minDataValue:this.minDataValue,minSize:(0,v.i)(this.minSize)?this.minSize.clone():this.minSize,normalizationField:this.normalizationField,stops:this.stops&&this.stops.map((e=>e.clone())),target:this.target,useSymbolValue:this.useSymbolValue,valueRepresentation:this.valueRepresentation,valueUnit:this.valueUnit,legendOptions:this.legendOptions&&this.legendOptions.clone(),levels:(0,f.d9)(this.levels)})}};(0,c._)([(0,y.Cb)()],C.prototype,"levels",void 0),(0,c._)([(0,h.w)("levels")],C.prototype,"writeLevels",null),C=j=(0,c._)([(0,m.j)("esri.views.2d.engine.LevelDependentSizeVariable")],C);const T=s.L.getLogger("esri.views.2d.layers.support.clusterUtils");n.h.add("esri-cluster-arcade-enabled",!0);const F=(0,n.h)("esri-cluster-arcade-enabled"),R=(e,t,i,r,n)=>{const s=t.clone();if(!U(s))return s;if(s.authoringInfo||(s.authoringInfo=new u.Z),s.authoringInfo.isAutoGenerated=!0,"visualVariables"in s){const t=(s.visualVariables||[]).filter((e=>"$view.scale"!==e.valueExpression)),o=Z(t);t.forEach((t=>{"rotation"===t.type?t.field?t.field=D(e,t.field,"avg_angle","number"):t.valueExpression&&(t.field=O(e,t.valueExpression,"avg_angle","number"),t.valueExpression=null):t.normalizationField?(t.field=D(e,t.field,"avg_norm","number",t.normalizationField),t.normalizationField=null):t.field?t.field=D(e,t.field,"avg","number"):t.valueExpression&&(t.field=O(e,t.valueExpression,"avg","number"),t.valueExpression=null)})),(0,l.a)(o)&&!z(t)&&n&&(t.push(V(i,r)),s.dynamicClusterSize=!0),s.visualVariables=t}switch(s.type){case"simple":break;case"pie-chart":for(const t of s.attributes)t.field?t.field=D(e,t.field,"sum","number"):t.valueExpression&&(t.field=O(e,t.valueExpression,"sum","number"),t.valueExpression=null);break;case"unique-value":s.field?s.field=D(e,s.field,"mode","string"):s.valueExpression&&(s.field=O(e,s.valueExpression,"mode","string"),s.valueExpression=null);break;case"class-breaks":s.normalizationField?(s.field=D(e,s.field,"avg_norm","number",s.normalizationField),s.normalizationField=null):s.field?s.field=D(e,s.field,"avg","number"):s.valueExpression&&(s.field=O(e,s.valueExpression,"avg","number"),s.valueExpression=null)}return s},Z=e=>{for(const t of e)if("size"===t.type)return t;return null},z=e=>{for(const t of e)if("cluster_count"===t.field)return!0;return!1},V=(e,t)=>{const i=[new d.Z({value:0,size:0}),new d.Z({value:1})];if((0,l.a)(t))return new p.Z({field:"cluster_count",stops:[...i,new d.Z({value:2,size:0})]});const r=Object.keys(t).reduce(((r,n)=>({...r,[n]:[...i,new d.Z({value:Math.max(2,t[n].minValue),size:e.clusterMinSize}),new d.Z({value:Math.max(3,t[n].maxValue),size:e.clusterMaxSize})]})),{});return new C({field:"cluster_count",levels:r})},U=e=>{const t=t=>T.error(new r.Z("Unsupported-renderer",t,{renderer:e}));switch(e.type){case"unique-value":if(e.field2||e.field3)return t("FeatureReductionCluster does not support multi-field UniqueValueRenderers"),!1;break;case"class-breaks":if(e.normalizationField){const i=e.normalizationType;if("field"!==i)return t(`FeatureReductionCluster does not support a normalizationType of ${i}`),!1;break}case"simple":case"pie-chart":break;default:return t(`FeatureReductionCluster does not support renderers of type ${e.type}`),!1}if(!F){if("valueExpression"in e&&e.valueExpression)return t("FeatureReductionCluster does not currently support renderer.valueExpression. Support will be added in a future release"),!1;if(("visualVariables"in e&&e.visualVariables||[]).some((e=>!(!("valueExpression"in e)||!e.valueExpression))))return t("FeatureReductionCluster does not currently support visualVariables with a valueExpression. Support will be added in a future release"),!1}return!0};function O(e,t,i,r){const n=I(t),s="mode"===i?`cluster_type_${n}`:"sum"===i?`cluster_sum_${n}`:`cluster_avg_${n}`;return e.some((e=>e.name===s))||e.push(new o.Z({name:s,isAutoGenerated:!0,onStatisticExpression:new a.Z({expression:t,returnType:r}),statisticType:i})),s}function D(e,t,i,r,n){if("cluster_count"===t||e.some((e=>e.name===t)))return t;const s=function(e,t,i){switch(e){case"sum":return`cluster_sum_${t}`;case"avg":case"avg_angle":return`cluster_avg_${t}`;case"mode":return`cluster_type_${t}`;case"avg_norm":{const e=i,r="field";return"cluster_avg_"+I(t.toLowerCase()+",norm:"+r+","+e.toLowerCase())}}}(i,t,n);return e.some((e=>e.name===s))||("avg_norm"===i?e.push(new o.Z({name:s,isAutoGenerated:!0,onStatisticExpression:new a.Z({expression:`$feature.${t} / $feature.${n}`,returnType:r}),statisticType:"avg"})):e.push(new o.Z({name:s,isAutoGenerated:!0,onStatisticField:t,statisticType:i}))),s}},47346:(e,t,i)=>{i.d(t,{d:()=>o});var r=i(92143),n=i(97546),s=i(1709),l=i(14249);function o(){return{fields:{type:[n.Z],value:null},fieldsIndex:{readOnly:!0,get(){return new s.Z(this.fields||[])}},outFields:{type:[String],json:{read:!1},set:function(e){this._userOutFields=e,this.notifyChange("outFields")},get:function(){const e=this._userOutFields;if(!e||!e.length)return null;if(e.includes("*"))return["*"];if(!this.fields)return e;for(const t of e){const i=this.fieldsIndex?.has(t);i||r.L.getLogger("esri.layers.support.fieldProperties").error("field-attributes-layer:invalid-field",`Invalid field ${t} found in outFields`,{layer:this,outFields:e})}return(0,l.Q0)(this.fieldsIndex,e)}}}}},9641:(e,t,i)=>{i.d(t,{b:()=>a});var r=i(29768),n=i(34250),s=(i(76506),i(91306),i(17533)),l=i(6210);i(92143),i(31450),i(71552),i(40642),i(60474),i(66396),i(86656),i(60991),i(6540),i(12047),i(21972),i(91055),i(19657),i(6906),i(50406),i(92200),i(65949),i(54174),i(22465),i(65775),i(29794),i(5777),i(36231),i(74569),i(21801),i(73796),i(97714),i(60947),i(2906),i(91597),i(86787),i(35132),i(89623),i(84069),i(44567),i(98380),i(92896),i(22781),i(57251),i(32422),i(93314),i(35197),i(31292),i(59465),i(69218),i(97546),i(9801),i(53523),i(42911),i(46826),i(45433),i(54732),i(32925),i(66122),i(27207);const o={write:{allowNull:!0}},a=e=>{let t=class extends e{constructor(){super(...arguments),this.featureEffect=null}};return(0,r._)([(0,n.Cb)({type:l.Z,json:{origins:{"web-map":o,"portal-item":o}}})],t.prototype,"featureEffect",void 0),t=(0,r._)([(0,s.j)("esri.layers.mixins.FeatureEffectLayer")],t),t}},39275:(e,t,i)=>{i.d(t,{M:()=>y});var r=i(29768),n=i(34250),s=(i(76506),i(91306),i(17533)),l=i(70846),o=i(29395),a=i(94303),u=i(14460),p=i(13322),d=i(13201);i(92143),i(31450),i(71552),i(40642),i(60474),i(66396),i(86656),i(60991),i(6540),i(12047),i(21972),i(91055),i(19657),i(6906),i(50406),i(67961),i(66122),i(86748),i(15324),i(75067),i(89914),i(86787),i(97714),i(2906),i(14249),i(60217),i(74569),i(21801),i(73796),i(60947),i(91597),i(35132),i(89623),i(84069),i(44567),i(98380),i(92896),i(22781),i(57251),i(32422),i(29107),i(30574),i(2157),i(25977),i(58076),i(98242),i(7471),i(54414),i(59465),i(1648),i(8925),i(33921),i(3482),i(45154),i(16769),i(93603),i(15438),i(593),i(85699),i(55531),i(96055),i(47776),i(18033),i(6331),i(62048),i(56890),i(30493),i(4292),i(75626),i(72652),i(29641),i(70821),i(3296),i(34229),i(37029),i(55306),i(96467),i(63571),i(30776),i(48027),i(54174),i(82426),i(72836),i(29794),i(63130),i(25696),i(98402),i(42775),i(95834),i(34394),i(57150),i(76726),i(20444),i(76393),i(78548),i(2497),i(49906),i(46527),i(11799),i(48649),i(59877),i(9960),i(30823),i(53326),i(92482),i(5853),i(39141),i(32101),i(38742),i(48243),i(34635),i(10401),i(49900),i(88762),i(82058),i(81184),i(33101),i(67477),i(78533),i(74653),i(91091),i(58943),i(70737),i(36834),i(8487),i(17817),i(90814),i(15459),i(97189),i(61847),i(28212),i(16955),i(22401),i(48699),i(77894),i(55187),i(8586),i(44509),i(69814),i(11305),i(62259),i(44790),i(5909),i(60669),i(48208),i(51589),i(65684),i(12158),i(74864),i(63683),i(94479),i(45702),i(51127),i(26822),i(51723),i(23243),i(51669),i(6090),i(3977),i(36741),i(11253),i(90319),i(38822),i(52228),i(74057),i(23761),i(48190),i(85557),i(53785),i(95587),i(94070),i(43022),i(16218),i(9075),i(71206),i(9352),i(89241),i(91700),i(51979),i(32037),i(60698),i(90811),i(60045),i(68681),i(53321),i(86758),i(95310),i(58085),i(93939),i(62407),i(90033),i(97807),i(238),i(68714),i(20208),i(67541),i(93314),i(35197),i(1557),i(47842),i(17298),i(77807),i(50203),i(30439),i(6941);const c={key:"type",base:o.F,typeMap:{cluster:u.Z,binning:a.Z}},f={types:{key:"type",base:o.F,typeMap:{selection:p.Z,cluster:u.Z,binning:a.Z}},json:{name:"layerDefinition.featureReduction",write:{allowNull:!0},origins:{"web-map":{types:c},"portal-item":{types:c},"web-scene":{types:{key:"type",base:o.F,typeMap:{selection:p.Z}}}}}},y=e=>{let t=class extends e{constructor(...e){super(...e),this.own(this.watch("renderer",(()=>{if(this.featureReduction){const e=this._normalizeFeatureReduction(this.featureReduction);this._set("featureReduction",e)}}),!0))}set featureReduction(e){const t=this._normalizeFeatureReduction(e);this._set("featureReduction",t)}set renderer(e){}_normalizeFeatureReduction(e){if("cluster"!==e?.type)return e;const t=e.clone(),i=[new l.Z({name:"cluster_count",isAutoGenerated:!0,statisticType:"count"})],r=(t.fields??[]).filter((e=>!e.isAutoGenerated));if(e.renderer&&!e.renderer.authoringInfo?.isAutoGenerated)return t.fields=[...i,...r],t;if(e.symbol)return t.fields=[...i,...r],t.renderer=null,t;if(!this.renderer)return e;const n=(0,d.c)(i,this.renderer,e,null,!1);return t.fields=[...i,...r],t.renderer=n,t}};return(0,r._)([(0,n.Cb)(f)],t.prototype,"featureReduction",null),t=(0,r._)([(0,s.j)("esri.layers.mixins.FeatureReductionLayer")],t),t}},82377:(e,t,i)=>{i.d(t,{n:()=>d});var r=i(29768),n=i(93314),s=i(59765),l=i(34250),o=(i(76506),i(91306),i(97714)),a=i(17533),u=i(14249),p=i(77361);i(12047),i(21972),i(60474),i(66396),i(86656),i(71552),i(92143),i(31450),i(40642),i(91055),i(6540),i(19657),i(6906),i(50406),i(60991),i(35197),i(2906),i(57251),i(60217),i(74569),i(21801),i(73796),i(60947),i(91597),i(86787),i(35132),i(89623),i(84069),i(44567),i(98380),i(92896),i(22781),i(32422),i(61261);const d=e=>{let t=class extends e{constructor(){super(...arguments),this.timeExtent=null,this.timeOffset=null,this.useViewTime=!0}readOffset(e,t){const i=t.timeInfo.exportOptions;if(!i)return null;const r=i.timeOffset,n=s.t.fromJSON(i.timeOffsetUnits);return r&&n?new s.Z({value:r,unit:n}):null}set timeInfo(e){(0,u.UF)(e,this.fieldsIndex),this._set("timeInfo",e)}};return(0,r._)([(0,l.Cb)({type:n.Z,json:{write:!1}})],t.prototype,"timeExtent",void 0),(0,r._)([(0,l.Cb)({type:s.Z})],t.prototype,"timeOffset",void 0),(0,r._)([(0,o.r)("service","timeOffset",["timeInfo.exportOptions"])],t.prototype,"readOffset",null),(0,r._)([(0,l.Cb)({value:null,type:p.Z,json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],t.prototype,"timeInfo",null),(0,r._)([(0,l.Cb)({type:Boolean,json:{read:{source:"timeAnimation"},write:{target:"timeAnimation"},origins:{"web-scene":{read:!1,write:!1}}}})],t.prototype,"useViewTime",void 0),t=(0,r._)([(0,a.j)("esri.layers.mixins.TemporalLayer")],t),t}},70846:(e,t,i)=>{i.d(t,{Z:()=>d});var r,n=i(29768),s=i(12047),l=i(76506),o=i(34250),a=(i(91306),i(17533)),u=i(67961);i(21972),i(60474),i(66396),i(86656),i(71552),i(92143),i(31450),i(40642),i(91055),i(6540),i(19657),i(6906),i(50406),i(60991),i(66122);let p=r=class extends s.wq{constructor(e){super(e),this.isAutoGenerated=!1,this.name=null,this.alias=null,this.onStatisticField=null,this.onStatisticExpression=null,this.statisticType=null}clone(){return new r({name:this.name,alias:this.alias,isAutoGenerated:this.isAutoGenerated,onStatisticExpression:(0,l.d9)(this.onStatisticExpression),onStatisticField:this.onStatisticField,statisticType:this.statisticType})}};(0,n._)([(0,o.Cb)({type:Boolean,json:{write:!0}})],p.prototype,"isAutoGenerated",void 0),(0,n._)([(0,o.Cb)({type:String,json:{write:!0}})],p.prototype,"name",void 0),(0,n._)([(0,o.Cb)({type:String,json:{write:!0}})],p.prototype,"alias",void 0),(0,n._)([(0,o.Cb)({type:String,json:{write:!0}})],p.prototype,"onStatisticField",void 0),(0,n._)([(0,o.Cb)({type:u.Z,json:{write:!0}})],p.prototype,"onStatisticExpression",void 0),(0,n._)([(0,o.Cb)({type:String,json:{write:!0}})],p.prototype,"statisticType",void 0),p=r=(0,n._)([(0,a.j)("esri.layers.support.AggregateField")],p);const d=p},67961:(e,t,i)=>{i.d(t,{Z:()=>u});var r=i(29768),n=i(66122),s=i(12047),l=i(34250),o=(i(76506),i(91306),i(17533));i(21972),i(60474),i(66396),i(86656),i(71552),i(92143),i(31450),i(40642),i(91055),i(6540),i(19657),i(6906),i(50406),i(60991);let a=class extends((0,n.J)(s.wq)){constructor(e){super(e),this.expression=null,this.title=null,this.returnType=null}};(0,r._)([(0,l.Cb)({type:String,json:{write:!0}})],a.prototype,"expression",void 0),(0,r._)([(0,l.Cb)({type:String,json:{write:!0}})],a.prototype,"title",void 0),(0,r._)([(0,l.Cb)({type:String,json:{write:!0}})],a.prototype,"returnType",void 0),a=(0,r._)([(0,o.j)("esri.layers.support.ExpressionInfo")],a);const u=a},6210:(e,t,i)=>{i.d(t,{Z:()=>v});var r,n=i(29768),s=i(60991),l=i(12047),o=i(71252),a=i(71552),u=i(34250),p=(i(76506),i(91306),i(17533)),d=i(92200),c=i(36231);i(92143),i(31450),i(40642),i(21972),i(60474),i(66396),i(86656),i(91055),i(6540),i(19657),i(6906),i(50406),i(65949),i(54174),i(22465),i(65775),i(29794),i(5777),i(74569),i(21801),i(73796),i(97714),i(60947),i(2906),i(91597),i(86787),i(35132),i(89623),i(84069),i(44567),i(98380),i(92896),i(22781),i(57251),i(32422),i(93314),i(35197),i(31292),i(59465),i(69218),i(97546),i(9801),i(53523),i(42911),i(46826),i(45433),i(54732),i(32925),i(66122),i(27207);const f={read:{reader:d.r},write:{writer:d.w,overridePolicy(){return{allowNull:null!=this.excludedEffect,isRequired:null==this.excludedEffect}}}},y={read:{reader:d.r},write:{writer:d.w,overridePolicy(){return{allowNull:null!=this.includedEffect,isRequired:null==this.includedEffect}}}},m={name:"showExcludedLabels",default:!0};let h=r=class extends l.wq{constructor(e){super(e),this.filter=null,this.includedEffect=null,this.excludedEffect=null,this.excludedLabelsVisible=!1}write(e,t){const i=super.write(e,t);if(t?.origin){if(i.filter){const e=Object.keys(i.filter);if(e.length>1||"where"!==e[0])return t.messages?.push(new s.Z("web-document-write:unsupported-feature-effect","Invalid feature effect 'filter'. A filter can only contain a 'where' property",{layer:t.layer,effect:this})),null}if("showExcludedLabels"in i)return t.messages?.push(new s.Z("web-document-write:unsupported-feature-effect","Invalid value for property 'excludedLabelsVisible' which should always be 'true'",{layer:t.layer,effect:this})),null}return i}clone(){return new r({filter:(0,o.i)(this.filter)?this.filter.clone():null,includedEffect:this.includedEffect,excludedEffect:this.excludedEffect,excludedLabelsVisible:this.excludedLabelsVisible})}};(0,n._)([(0,u.Cb)({type:c.Z,json:{write:{allowNull:!0,writer(e,t,i,r){const n=e?.write({},r);n&&0!==Object.keys(n).length?(0,a.s)(i,n,t):(0,a.s)(i,null,t)}}}})],h.prototype,"filter",void 0),(0,n._)([(0,u.Cb)({json:{write:!0,origins:{"web-map":f,"portal-item":f}}})],h.prototype,"includedEffect",void 0),(0,n._)([(0,u.Cb)({json:{write:!0,origins:{"web-map":y,"portal-item":y}}})],h.prototype,"excludedEffect",void 0),(0,n._)([(0,u.Cb)({type:Boolean,json:{write:!0,name:"showExcludedLabels",origins:{"web-map":m,"portal-item":m}}})],h.prototype,"excludedLabelsVisible",void 0),h=r=(0,n._)([(0,p.j)("esri.layers.support.FeatureEffect")],h);const v=h},36231:(e,t,i)=>{i.d(t,{Z:()=>v});var r,n=i(29768),s=i(74569),l=i(93314),o=i(57251),a=i(12047),u=i(76506),p=i(71252),d=i(34250),c=(i(91306),i(17533)),f=i(31292);i(21801),i(40642),i(71552),i(73796),i(97714),i(60947),i(2906),i(21972),i(60474),i(66396),i(86656),i(92143),i(31450),i(91055),i(6540),i(19657),i(6906),i(50406),i(60991),i(91597),i(86787),i(35132),i(89623),i(84069),i(44567),i(98380),i(92896),i(22781),i(32422),i(35197),i(59465),i(69218),i(97546),i(9801),i(53523),i(42911),i(46826),i(45433),i(54732),i(32925),i(66122),i(27207);const y=new o.J({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),m=new o.J({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let h=r=class extends a.wq{constructor(e){super(e),this.where=null,this.geometry=null,this.spatialRelationship="intersects",this.distance=void 0,this.objectIds=null,this.units=null,this.timeExtent=null}createQuery(e={}){const{where:t,geometry:i,spatialRelationship:r,timeExtent:n,objectIds:s,units:l,distance:o}=this;return new f.Z({geometry:(0,u.d9)(i),objectIds:(0,u.d9)(s),spatialRelationship:r,timeExtent:(0,u.d9)(n),where:t,units:l,distance:o,...e})}clone(){const{where:e,geometry:t,spatialRelationship:i,timeExtent:n,objectIds:s,units:l,distance:o}=this;return new r({geometry:(0,u.d9)(t),objectIds:(0,u.d9)(s),spatialRelationship:i,timeExtent:(0,u.d9)(n),where:e,units:l,distance:o})}};(0,n._)([(0,d.Cb)({type:String,json:{write:!0}})],h.prototype,"where",void 0),(0,n._)([(0,d.Cb)({types:s.qM,json:{write:!0}})],h.prototype,"geometry",void 0),(0,n._)([(0,d.Cb)({type:y.apiValues,json:{name:"spatialRel",read:{reader:y.read},write:{allowNull:!1,writer:y.write,overridePolicy(){return{enabled:(0,p.i)(this.geometry)}}}}})],h.prototype,"spatialRelationship",void 0),(0,n._)([(0,d.Cb)({type:Number,json:{write:{overridePolicy(e){return{enabled:null!=e&&null!=this.geometry}}}}})],h.prototype,"distance",void 0),(0,n._)([(0,d.Cb)({type:[Number],json:{write:!0}})],h.prototype,"objectIds",void 0),(0,n._)([(0,d.Cb)({type:m.apiValues,json:{read:m.read,write:{writer:m.write,overridePolicy(e){return{enabled:null!=e&&null!=this.geometry}}}}})],h.prototype,"units",void 0),(0,n._)([(0,d.Cb)({type:l.Z,json:{write:!0}})],h.prototype,"timeExtent",void 0),h=r=(0,n._)([(0,c.j)("esri.layers.support.FeatureFilter")],h);const v=h},94303:(e,t,i)=>{i.d(t,{Z:()=>S});var r,n=i(29768),s=i(86748),l=(i(55306),i(71206),i(51979),i(60698),i(53321),i(65684),i(86758)),o=i(95310),a=i(20208),u=i(96467),p=i(76506),d=i(71552),c=i(34250),f=(i(91306),i(59465)),y=i(97714),m=i(17533),h=i(2906),v=i(70846),b=i(67541),w=i(29395),g=i(77807);i(66122),i(21972),i(60474),i(66396),i(86656),i(92143),i(31450),i(40642),i(91055),i(6540),i(19657),i(6906),i(50406),i(60991),i(15324),i(75067),i(89914),i(12047),i(86787),i(14249),i(60217),i(74569),i(21801),i(73796),i(60947),i(91597),i(35132),i(89623),i(84069),i(44567),i(98380),i(92896),i(22781),i(57251),i(32422),i(29107),i(30574),i(2157),i(25977),i(58076),i(98242),i(7471),i(54414),i(1648),i(8925),i(33921),i(3482),i(45154),i(16769),i(93603),i(15438),i(593),i(85699),i(55531),i(96055),i(47776),i(18033),i(6331),i(62048),i(56890),i(30493),i(4292),i(75626),i(72652),i(29641),i(70821),i(3296),i(34229),i(37029),i(26822),i(51723),i(23243),i(51669),i(6090),i(48027),i(54174),i(82426),i(72836),i(29794),i(3977),i(36741),i(34394),i(11253),i(90319),i(38822),i(52228),i(74057),i(23761),i(63571),i(30776),i(63130),i(25696),i(98402),i(42775),i(95834),i(57150),i(76726),i(20444),i(76393),i(78548),i(2497),i(49906),i(46527),i(11799),i(48649),i(59877),i(9960),i(30823),i(53326),i(92482),i(5853),i(39141),i(32101),i(38742),i(48243),i(34635),i(10401),i(49900),i(88762),i(82058),i(81184),i(33101),i(67477),i(78533),i(74653),i(91091),i(58943),i(70737),i(36834),i(8487),i(17817),i(90814),i(15459),i(97189),i(61847),i(28212),i(16955),i(22401),i(48699),i(77894),i(55187),i(8586),i(44509),i(69814),i(11305),i(62259),i(44790),i(5909),i(60669),i(48208),i(51589),i(48190),i(85557),i(53785),i(95587),i(94070),i(43022),i(16218),i(9075),i(12158),i(74864),i(63683),i(94479),i(45702),i(51127),i(9352),i(89241),i(91700),i(32037),i(90811),i(60045),i(68681),i(58085),i(93939),i(62407),i(90033),i(97807),i(238),i(68714),i(67961),i(93314),i(35197),i(1557),i(47842),i(17298),i(50203),i(30439),i(6941);const x=(0,m.c)({types:u.QT});let _=r=class extends w.F{constructor(e){super(e),this.type="binning",this.binType="geohash",this.fixedBinLevel=3,this.labelingInfo=null,this.labelsVisible=!0,this.popupEnabled=!0,this.popupTemplate=null,this.fields=[],this.renderer=null}writeFields(e,t,i){const r=e.filter((e=>"avg_angle"!==e.statisticType)).map((e=>e.toJSON()));(0,d.s)(i,r,t)}readRenderer(e,t,i){const r=t.drawingInfo?.renderer;return r?(0,a.a)(r,t,i)??void 0:t.defaultSymbol?t.types&&t.types.length?new o.Z({defaultSymbol:x(t.defaultSymbol,t,i),field:t.typeIdField,uniqueValueInfos:t.types.map((e=>({id:e.id,symbol:x(e.symbol,e,i)})))}):new l.Z({symbol:x(t.defaultSymbol,t,i)}):null}clone(){return new r({fields:(0,p.d9)(this.fields),fixedBinLevel:this.fixedBinLevel,labelingInfo:(0,p.d9)(this.labelingInfo),labelsVisible:this.labelsVisible,popupEnabled:this.popupEnabled,popupTemplate:(0,p.d9)(this.popupTemplate),renderer:(0,p.d9)(this.renderer)})}};(0,n._)([(0,f.e)({binning:"binning"})],_.prototype,"type",void 0),(0,n._)([(0,f.e)({geohash:"geohash"})],_.prototype,"binType",void 0),(0,n._)([(0,c.Cb)({type:Number,range:{min:1,max:9},json:{write:!0}})],_.prototype,"fixedBinLevel",void 0),(0,n._)([(0,c.Cb)({type:[g.Z],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],_.prototype,"labelingInfo",void 0),(0,n._)([(0,c.Cb)(b.l)],_.prototype,"labelsVisible",void 0),(0,n._)([(0,c.Cb)(b.p)],_.prototype,"popupEnabled",void 0),(0,n._)([(0,c.Cb)({type:s.Z,json:{name:"popupInfo",write:!0}})],_.prototype,"popupTemplate",void 0),(0,n._)([(0,c.Cb)({type:[v.Z],json:{write:!0}})],_.prototype,"fields",void 0),(0,n._)([(0,h.w)("fields")],_.prototype,"writeFields",null),(0,n._)([(0,c.Cb)({types:a.r,json:{write:{target:"drawingInfo.renderer"}}})],_.prototype,"renderer",void 0),(0,n._)([(0,y.r)("renderer",["drawingInfo.renderer"])],_.prototype,"readRenderer",null),_=r=(0,n._)([(0,m.j)("esri.layers.support.FeatureReductionBinning")],_);const S=_},14460:(e,t,i)=>{i.d(t,{Z:()=>E});var r,n=i(29768),s=i(86748),l=(i(55306),i(71206),i(51979),i(60698),i(53321),i(65684),i(86758)),o=i(95310),a=i(20208),u=i(96467),p=i(12047),d=i(76506),c=i(71552),f=i(99403),y=i(34250),m=(i(91306),i(97714)),h=i(17533),v=i(2906),b=i(70846),w=i(67541),g=i(77807);i(66122),i(21972),i(60474),i(66396),i(86656),i(92143),i(31450),i(40642),i(91055),i(6540),i(19657),i(6906),i(50406),i(60991),i(15324),i(75067),i(89914),i(86787),i(14249),i(60217),i(74569),i(21801),i(73796),i(60947),i(91597),i(35132),i(89623),i(84069),i(44567),i(98380),i(92896),i(22781),i(57251),i(32422),i(29107),i(30574),i(2157),i(25977),i(58076),i(98242),i(7471),i(54414),i(59465),i(1648),i(8925),i(33921),i(3482),i(45154),i(16769),i(93603),i(15438),i(593),i(85699),i(55531),i(96055),i(47776),i(18033),i(6331),i(62048),i(56890),i(30493),i(4292),i(75626),i(72652),i(29641),i(70821),i(3296),i(34229),i(37029),i(26822),i(51723),i(23243),i(51669),i(6090),i(48027),i(54174),i(82426),i(72836),i(29794),i(3977),i(36741),i(34394),i(11253),i(90319),i(38822),i(52228),i(74057),i(23761),i(63571),i(30776),i(63130),i(25696),i(98402),i(42775),i(95834),i(57150),i(76726),i(20444),i(76393),i(78548),i(2497),i(49906),i(46527),i(11799),i(48649),i(59877),i(9960),i(30823),i(53326),i(92482),i(5853),i(39141),i(32101),i(38742),i(48243),i(34635),i(10401),i(49900),i(88762),i(82058),i(81184),i(33101),i(67477),i(78533),i(74653),i(91091),i(58943),i(70737),i(36834),i(8487),i(17817),i(90814),i(15459),i(97189),i(61847),i(28212),i(16955),i(22401),i(48699),i(77894),i(55187),i(8586),i(44509),i(69814),i(11305),i(62259),i(44790),i(5909),i(60669),i(48208),i(51589),i(48190),i(85557),i(53785),i(95587),i(94070),i(43022),i(16218),i(9075),i(12158),i(74864),i(63683),i(94479),i(45702),i(51127),i(9352),i(89241),i(91700),i(32037),i(90811),i(60045),i(68681),i(58085),i(93939),i(62407),i(90033),i(97807),i(238),i(68714),i(67961),i(93314),i(35197),i(1557),i(47842),i(17298),i(50203),i(30439),i(6941);const x=(0,h.c)({types:u.QT});function _(e){return"simple"===e.type&&!e.visualVariables?.length}let S=r=class extends p.wq{constructor(e){super(e),this.type="cluster",this.clusterRadius=(0,f.t)("80px"),this.clusterMinSize=(0,f.t)("12px"),this.clusterMaxSize=(0,f.t)("50px"),this.popupEnabled=!0,this.popupTemplate=null,this.renderer=null,this.symbol=null,this.labelingInfo=null,this.labelsVisible=!0,this.fields=null}readRenderer(e,t,i){const r=t.drawingInfo?.renderer;return r?.authoringInfo?.isAutoGenerated?null:r?_(r)?null:(0,a.a)(r,t,i)??void 0:t.defaultSymbol?t.types&&t.types.length?new o.Z({defaultSymbol:x(t.defaultSymbol,t,i),field:t.typeIdField,uniqueValueInfos:t.types.map((e=>({id:e.id,symbol:x(e.symbol,e,i)})))}):new l.Z({symbol:x(t.defaultSymbol,t,i)}):null}readSymbol(e,t,i){const r=t.drawingInfo?.renderer;return r?.authoringInfo?.isAutoGenerated?null:r&&_(r)?(0,a.a)(r,t,i)?.symbol:null}writeSymbol(e,t,i,r){const n=this.renderer?.authoringInfo?.isAutoGenerated;if(!this.renderer||n){const i=new l.Z({symbol:e});t.drawingInfo={renderer:i.write({},r)}}}writeFields(e,t,i){const r=e.filter((e=>"avg_angle"!==e.statisticType)).map((e=>e.toJSON()));(0,c.s)(i,r,t)}readFields(e,t,i){return e.filter((e=>!e.isAutoGenerated)).map((e=>b.Z.fromJSON(e)))}clone(){return new r({clusterRadius:this.clusterRadius,clusterMinSize:this.clusterMinSize,clusterMaxSize:this.clusterMaxSize,labelingInfo:(0,d.d9)(this.labelingInfo),labelsVisible:this.labelsVisible,fields:(0,d.d9)(this.fields),renderer:(0,d.d9)(this.renderer),symbol:(0,d.d9)(this.symbol),popupEnabled:this.popupEnabled,popupTemplate:(0,d.d9)(this.popupTemplate)})}};(0,n._)([(0,y.Cb)({type:["cluster"],readOnly:!0,json:{write:!0}})],S.prototype,"type",void 0),(0,n._)([(0,y.Cb)({type:Number,cast:e=>"auto"===e?e:(0,f.t)(e),json:{write:!0}})],S.prototype,"clusterRadius",void 0),(0,n._)([(0,y.Cb)({type:Number,cast:f.t,json:{write:!0}})],S.prototype,"clusterMinSize",void 0),(0,n._)([(0,y.Cb)({type:Number,cast:f.t,json:{write:!0}})],S.prototype,"clusterMaxSize",void 0),(0,n._)([(0,y.Cb)(w.p)],S.prototype,"popupEnabled",void 0),(0,n._)([(0,y.Cb)({type:s.Z,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],S.prototype,"popupTemplate",void 0),(0,n._)([(0,y.Cb)({types:a.r,json:{write:{target:"drawingInfo.renderer"}}})],S.prototype,"renderer",void 0),(0,n._)([(0,m.r)("renderer",["drawingInfo.renderer"])],S.prototype,"readRenderer",null),(0,n._)([(0,y.Cb)({types:u.AH})],S.prototype,"symbol",void 0),(0,n._)([(0,m.r)("symbol",["drawingInfo.renderer"])],S.prototype,"readSymbol",null),(0,n._)([(0,v.w)("symbol")],S.prototype,"writeSymbol",null),(0,n._)([(0,y.Cb)({type:[g.Z],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],S.prototype,"labelingInfo",void 0),(0,n._)([(0,y.Cb)(w.l)],S.prototype,"labelsVisible",void 0),(0,n._)([(0,y.Cb)({type:[b.Z],json:{write:!0}})],S.prototype,"fields",void 0),(0,n._)([(0,v.w)("fields")],S.prototype,"writeFields",null),(0,n._)([(0,m.r)("fields")],S.prototype,"readFields",null),S=r=(0,n._)([(0,h.j)("esri.layers.support.FeatureReductionCluster")],S);const E=S},13322:(e,t,i)=>{i.d(t,{Z:()=>u});var r,n=i(29768),s=i(34250),l=(i(76506),i(91306),i(17533)),o=i(29395);i(92143),i(31450),i(71552),i(40642),i(60474),i(66396),i(86656),i(60991),i(6540),i(12047),i(21972),i(91055),i(19657),i(6906),i(50406);let a=r=class extends o.F{constructor(e){super(e),this.type="selection"}clone(){return new r}};(0,n._)([(0,s.Cb)({type:["selection"]})],a.prototype,"type",void 0),a=r=(0,n._)([(0,l.j)("esri.layers.support.FeatureReductionSelection")],a);const u=a},77361:(e,t,i)=>{i.d(t,{Z:()=>h});var r,n=i(29768),s=i(93314),l=i(59765),o=i(12047),a=i(76506),u=i(71252),p=i(34250),d=(i(91306),i(97714)),c=i(17533),f=i(2906),y=i(61261);i(35197),i(71552),i(57251),i(21972),i(60474),i(66396),i(86656),i(92143),i(31450),i(40642),i(91055),i(6540),i(19657),i(6906),i(50406),i(60991);let m=r=class extends o.wq{constructor(e){super(e),this.cumulative=!1,this.endField=null,this.fullTimeExtent=null,this.hasLiveData=!1,this.interval=null,this.startField=null,this.timeReference=null,this.trackIdField=null,this.useTime=!0}readFullTimeExtent(e,t){if(!t.timeExtent||!Array.isArray(t.timeExtent)||2!==t.timeExtent.length)return null;const i=new Date(t.timeExtent[0]),r=new Date(t.timeExtent[1]);return new s.Z({start:i,end:r})}writeFullTimeExtent(e,t){e&&(0,u.i)(e.start)&&(0,u.i)(e.end)?t.timeExtent=[e.start.getTime(),e.end.getTime()]:t.timeExtent=null}readInterval(e,t){return t.timeInterval&&t.timeIntervalUnits?new l.Z({value:t.timeInterval,unit:l.t.fromJSON(t.timeIntervalUnits)}):t.defaultTimeInterval&&t.defaultTimeIntervalUnits?new l.Z({value:t.defaultTimeInterval,unit:l.t.fromJSON(t.defaultTimeIntervalUnits)}):null}writeInterval(e,t){if(e){const i=e.toJSON();t.timeInterval=i.value,t.timeIntervalUnits=i.unit}else t.timeInterval=null,t.timeIntervalUnits=null}clone(){const{cumulative:e,endField:t,hasLiveData:i,interval:n,startField:s,timeReference:l,fullTimeExtent:o,trackIdField:u,useTime:p}=this;return new r({cumulative:e,endField:t,hasLiveData:i,interval:n,startField:s,timeReference:(0,a.d9)(l),fullTimeExtent:(0,a.d9)(o),trackIdField:u,useTime:p})}};(0,n._)([(0,p.Cb)({type:Boolean,json:{read:{source:"exportOptions.timeDataCumulative"},write:{target:"exportOptions.timeDataCumulative"}}})],m.prototype,"cumulative",void 0),(0,n._)([(0,p.Cb)({type:String,json:{read:{source:"endTimeField"},write:{target:"endTimeField",allowNull:!0}}})],m.prototype,"endField",void 0),(0,n._)([(0,p.Cb)({type:s.Z,json:{write:{enabled:!0,allowNull:!0}}})],m.prototype,"fullTimeExtent",void 0),(0,n._)([(0,d.r)("fullTimeExtent",["timeExtent"])],m.prototype,"readFullTimeExtent",null),(0,n._)([(0,f.w)("fullTimeExtent")],m.prototype,"writeFullTimeExtent",null),(0,n._)([(0,p.Cb)({type:Boolean,json:{write:!0}})],m.prototype,"hasLiveData",void 0),(0,n._)([(0,p.Cb)({type:l.Z,json:{write:{enabled:!0,allowNull:!0}}})],m.prototype,"interval",void 0),(0,n._)([(0,d.r)("interval",["timeInterval","timeIntervalUnits","defaultTimeInterval","defaultTimeIntervalUnits"])],m.prototype,"readInterval",null),(0,n._)([(0,f.w)("interval")],m.prototype,"writeInterval",null),(0,n._)([(0,p.Cb)({type:String,json:{read:{source:"startTimeField"},write:{target:"startTimeField",allowNull:!0}}})],m.prototype,"startField",void 0),(0,n._)([(0,p.Cb)({type:y.Z,json:{write:{enabled:!0,allowNull:!0}}})],m.prototype,"timeReference",void 0),(0,n._)([(0,p.Cb)({type:String,json:{write:{enabled:!0,allowNull:!0}}})],m.prototype,"trackIdField",void 0),(0,n._)([(0,p.Cb)({type:Boolean,json:{read:{source:"exportOptions.useTime"},write:{target:"exportOptions.useTime"}}})],m.prototype,"useTime",void 0),m=r=(0,n._)([(0,c.j)("esri.layers.support.TimeInfo")],m);const h=m},61261:(e,t,i)=>{i.d(t,{Z:()=>p});var r,n=i(29768),s=i(12047),l=i(34250),o=(i(76506),i(91306),i(97714)),a=i(17533);i(21972),i(60474),i(66396),i(86656),i(71552),i(92143),i(31450),i(40642),i(91055),i(6540),i(19657),i(6906),i(50406),i(60991);let u=r=class extends s.wq{constructor(e){super(e),this.respectsDaylightSaving=!1,this.timezone=null}readRespectsDaylightSaving(e,t){return void 0!==t.respectsDaylightSaving?t.respectsDaylightSaving:void 0!==t.respectDaylightSaving&&t.respectDaylightSaving}clone(){const{respectsDaylightSaving:e,timezone:t}=this;return new r({respectsDaylightSaving:e,timezone:t})}};(0,n._)([(0,l.Cb)({type:Boolean,json:{write:!0}})],u.prototype,"respectsDaylightSaving",void 0),(0,n._)([(0,o.r)("respectsDaylightSaving",["respectsDaylightSaving","respectDaylightSaving"])],u.prototype,"readRespectsDaylightSaving",null),(0,n._)([(0,l.Cb)({type:String,json:{read:{source:"timeZone"},write:{target:"timeZone"}}})],u.prototype,"timezone",void 0),u=r=(0,n._)([(0,a.j)("esri.layers.support.TimeReference")],u);const p=u}}]);