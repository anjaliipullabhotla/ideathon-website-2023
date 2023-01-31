// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../core/arrayUtils ../../core/Logger ../../core/MapUtils ../../core/maybe ../../intl/date ./numberUtils ../visualVariables/support/ColorStop ../../symbols/support/utils ../../widgets/Legend/support/colorRampUtils ../../widgets/Legend/support/heatmapRampUtils".split(" "),function(l,z,A,v,C,D,u,r,E,p,F,G){function k(a,c,f){return w.apply(this,arguments)}function w(){w=z._asyncToGenerator(function*(a,c,f){C.getOrCreateMapValue(a,c,()=>[]).push(...f)});
return w.apply(this,arguments)}function x(){x=z._asyncToGenerator(function*(a){const c=new Map;if(!a)return c;if("visualVariables"in a&&a.visualVariables){var f=a.visualVariables.filter(b=>"color"===b.type);for(var d of f)f=(yield F.getRampStops(d)).map(b=>b.color),yield k(c,d.field||d.valueExpression,f)}if("heatmap"===a.type)d=G.getHeatmapRampStops(a).map(b=>b.color),yield k(c,a.field||a.valueExpression,d);else if("pie-chart"===a.type){for(const b of a.attributes)yield k(c,b.field||b.valueExpression,
[b.color]);yield k(c,"default",[a?.othersCategory?.color,p.getColorFromSymbol(a.backgroundFillSymbol,null)])}else if("dot-density"===a.type){for(const b of a.attributes)yield k(c,b.field||b.valueExpression,[b.color]);yield k(c,"default",[a.backgroundColor])}else if("unique-value"===a.type)if("predominance"===a.authoringInfo?.type)for(const b of a.uniqueValueInfos??[])yield k(c,b.value.toString(),[p.getColorFromSymbol(b.symbol,null)]);else{d=(a.uniqueValueInfos??[]).map(m=>p.getColorFromSymbol(m.symbol,
null));const {field:b,field2:e,field3:g,valueExpression:h}=a;if(b||h)yield k(c,b||h,d);e&&(yield k(c,e,d));g&&(yield k(c,g,d))}else if("class-breaks"===a.type){d=a.classBreakInfos.map(g=>p.getColorFromSymbol(g.symbol,null));const {field:b,valueExpression:e}=a;yield k(c,b??e,d)}else"simple"===a.type&&(yield k(c,"default",[p.getColorFromSymbol(a.symbol,null)]));"defaultSymbol"in a&&a.defaultSymbol&&(yield k(c,"default",[p.getColorFromSymbol(a.defaultSymbol,null)]));c.forEach((b,e)=>{b=A.unique(b.filter(Boolean),
(g,h)=>JSON.stringify(g)===JSON.stringify(h));c.set(e,b)});return c});return x.apply(this,arguments)}function y(a){let c=a.minValue,f=a.maxValue;const d=a.isFirstBreak?"":t.gt+" ";a="percent-of-total"===a.normalizationType?t.pct:"";c=null==c?"":r.format(c);f=null==f?"":r.format(f);return d+c+a+" "+t.ld+" "+f+a}function n(a,c){return"normalizationField"in a&&a.normalizationField?{type:"normalized-field",field:a.field,normalizationField:a.normalizationField}:"field"in a&&a.field?{type:"field",field:a.field}:
"valueExpression"in a&&a.valueExpression?{type:"expression",expression:a.valueExpression,title:a.valueExpressionTitle,returnType:c}:null}const H=v.getLogger("esri.renderers.support.utils"),t={lte:"\x3c\x3d",gte:"\x3e\x3d",lt:"\x3c",gt:"\x3e",pct:"%",ld:"\u2013"},I={millisecond:0,second:1,minute:2,hour:3,day:4,month:5,year:6},J={millisecond:"long-month-day-year-long-time",second:"long-month-day-year-long-time",minute:"long-month-day-year-short-time",hour:"long-month-day-year-short-time",day:"long-month-day-year",
month:"long-month-day-year",year:"year"};v=u.convertDateFormatToIntlOptions("short-date");l.calculateDateFormatInterval=function(a){a=a.map(e=>new Date(e));const c=a.length;let f=Infinity,d=null;for(let e=0;e<c-1;e++){const g=a[e];let h=Infinity,m=null;for(let q=e+1;q<c;q++){var b=a[q];b=g.getFullYear()!==b.getFullYear()&&"year"||g.getMonth()!==b.getMonth()&&"month"||g.getDate()!==b.getDate()&&"day"||g.getHours()!==b.getHours()&&"hour"||g.getMinutes()!==b.getMinutes()&&"minute"||g.getSeconds()!==
b.getSeconds()&&"second"||"millisecond";const B=I[b];B<h&&(h=B,m=b)}h<f&&(f=h,d=m)}return d};l.createClassBreakLabel=y;l.createColorStops=function(a){const {values:c,colors:f,labelIndexes:d,isDate:b,dateFormatOptions:e}=a;return c.map((g,h)=>{var m=null;if(!d||d.includes(h)){let q;if(q=b?u.formatDate(g,e):r.format(g))m="",0===h?m=t.lt+" ":h===c.length-1&&(m=t.gt+" "),m+=q}return new E({value:g,color:f[h],label:m})})};l.createUniqueValueLabel=function(a){const {value:c,domain:f,fieldInfo:d,dateFormatInterval:b}=
a;a=String(c);const e=f&&"codedValues"in f&&f.codedValues?f.getName(c):null;e?a=e:"number"===typeof c&&(a=d&&"date"===d.type?u.formatDate(c,b&&u.convertDateFormatToIntlOptions(J[b])):r.format(c));return a};l.getAttribute=n;l.getAttributes=function(a,c){const f=[];if("class-breaks"===a.type||"heatmap"===a.type)f.push(n(a,"number"));else if("unique-value"===a.type){var d=a.authoringInfo;if(d&&"relationship"===d.type){if(d.field1&&d.field2){var b=d.field2.field;const e=d.field2.normalizationField;f.push(n({field:d.field1.field,
normalizationField:d.field1.normalizationField}));f.push(n({field:b,normalizationField:e}))}}else b=a.uniqueValueInfos?.[0],d=null,b&&b.value&&(b=typeof a.uniqueValueInfos[0].value,"string"===b||"number"===b)&&(d=b),f.push(n(a,d)),[a.field2,a.field3].forEach(e=>e&&f.push({type:"field",field:e}))}else"attributes"in a&&a.attributes?.forEach(e=>f.push(n(e,"number")));(a=c?c(a):"visualVariables"in a?a.visualVariables:null)&&a.forEach(e=>f.push(n(e,"number")));return A.unique(f.filter(D.isSome),(e,g)=>
"field"===e.type&&"field"===g.type?e.field===g.field:"normalized-field"===e.type&&"normalized-field"===g.type?e.field===g.field&&e.normalizationField===g.normalizationField:"expression"===e.type&&"expression"===g.type?e.expression===g.expression:!1)};l.getColorsFromRenderer=function(a){return x.apply(this,arguments)};l.setLabelsForClassBreaks=function(a){const c=a.classBreakInfos,f=a.normalizationType;let d=[];if(c&&c.length)if("standard-deviation"===a.classificationMethod)H.warn("setLabelsForClassBreaks",
"cannot set labels for class breaks generated using 'standard-deviation' method.");else if(a.round){d.push(c[0].minValue);for(const b of c)d.push(b.maxValue);d=r.round(d);c.forEach((b,e)=>{b.label=y({minValue:0===e?d[0]:d[e],maxValue:d[e+1],isFirstBreak:0===e,normalizationType:f})})}else c.forEach((b,e)=>{b.label=y({minValue:b.minValue,maxValue:b.maxValue,isFirstBreak:0===e,normalizationType:f})})};l.timelineDateFormatOptions=v;Object.defineProperties(l,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});