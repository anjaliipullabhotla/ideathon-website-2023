// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../core/Logger"],function(u,x){function y(a){const {classificationMethod:f,breakCount:h,normalizationType:e,definedInterval:k}=a.definition,d=[];var b=a.values;if(0===b.length)return[];b=b.sort((g,r)=>g-r);var c=b[0],l=b[b.length-1];if("equal-interval"===f)if(b.length>=h){b=(l-c)/h;a=c;for(var n=1;n<h;n++){var m=Number((c+n*b).toFixed(6));d.push({minValue:a,maxValue:m,label:q(a,m,e)});a=m}d.push({minValue:a,maxValue:l,label:q(a,l,e)})}else b.forEach(g=>{d.push({minValue:g,maxValue:g,
label:q(g,g,e)})});else if("natural-breaks"===f){b=v(b);a=z(b.uniqueValues,a.valueFrequency||b.valueFrequency,h);for(n=1;n<h;n++)b.uniqueValues.length>n&&(m=Number(b.uniqueValues[a[n]].toFixed(6)),d.push({minValue:c,maxValue:m,label:q(c,m,e)}),c=m);d.push({minValue:c,maxValue:l,label:q(c,l,e)})}else if("quantile"===f)if(b.length>=h&&c!==l){a=Math.ceil(b.length/h);n=0;for(m=1;m<h;m++){var p=a+n-1;p>b.length&&(p=b.length-1);0>p&&(p=0);d.push({minValue:c,maxValue:b[p],label:q(c,b[p],e)});c=b[p];n+=a;
a=Math.ceil((b.length-n)/(h-m))}d.push({minValue:c,maxValue:l,label:q(c,l,e)})}else for(l=-1,c=0;c<b.length;c++)a=b[c],a!==l&&(l=a,d.push({minValue:l,maxValue:a,label:q(l,a,e)}),l=a);else if("standard-deviation"===f)if(a=A(b),n=B(b,a),0===n)d.push({minValue:b[0],maxValue:b[0],label:q(b[0],b[0],e)});else{b=C(c,l,h,a,n)*n;n=0;for(m=h;1<=m;m--)p=Number((a-(m-.5)*b).toFixed(6)),d.push({minValue:c,maxValue:p,label:q(c,p,e)}),c=p,n++;m=Number((a+.5*b).toFixed(6));d.push({minValue:c,maxValue:m,label:q(c,
m,e)});c=m;n++;for(p=1;p<=h;p++)m=n===2*h?l:Number((a+(p+.5)*b).toFixed(6)),d.push({minValue:c,maxValue:m,label:q(c,m,e)}),c=m,n++}else if("defined-interval"===f){if(!k)return d;l=b[0];b=b[b.length-1];c=Math.ceil((b-l)/k);a=l;for(n=1;n<c;n++)m=Number((l+n*k).toFixed(6)),d.push({minValue:a,maxValue:m,label:q(a,m,e)}),a=m;d.push({minValue:a,maxValue:b,label:q(a,b,e)})}return d}function q(a,f,h){let e=null;return e=a===f?h&&"percent-of-total"===h?a+"%":a.toString():h&&"percent-of-total"===h?a+"% - "+
f+"%":a+" - "+f}function v(a){const f=[],h=[];let e=Number.MIN_VALUE,k=1,d=-1;for(let b=0;b<a.length;b++){const c=a[b];c===e?(k++,h[d]=k):null!==c&&(f.push(c),e=c,k=1,h.push(k),d++)}return{uniqueValues:f,valueFrequency:h}}function z(a,f,h){var e=a.length;const k=[];h>e&&(h=e);for(var d=0;d<h;d++)k.push(Math.round(d*e/h-1));k.push(e-1);d=w(k,a,f,h);e=d.mean;d=d.sdcm;var b=h,c=0,l=0;let n=0,m=0,p=!0;for(let r=0;2>r&&p;r++){0===r&&(p=!1);for(var g=0;g<b-1;g++)for(;k[g+1]+1!==k[g+2];)if(k[g+1]+=1,c=t(g,
k,a,f),n=c.sbMean,c=c.sbSdcm,l=t(g+1,k,a,f),m=l.sbMean,l=l.sbSdcm,c+l<d[g]+d[g+1])d[g]=c,d[g+1]=l,e[g]=n,e[g+1]=m,p=!0;else{--k[g+1];break}for(g=b-1;0<g;g--)for(;k[g]!==k[g-1]+1;)if(--k[g],c=t(g-1,k,a,f),n=c.sbMean,c=c.sbSdcm,l=t(g,k,a,f),m=l.sbMean,l=l.sbSdcm,c+l<d[g-1]+d[g])d[g-1]=c,d[g]=l,e[g-1]=n,e[g]=m,p=!0;else{k[g]+=1;break}}p&&(d=w(k,a,f,h));return k}function w(a,f,h,e){let k=[];var d=[],b=[];let c=0;const l=[],n=[];for(var m=0;m<e;m++){var p=t(m,a,f,h);l.push(p.sbMean);n.push(p.sbSdcm);c+=
n[m]}p=c;for(m=!0;m||c<p;){m=!1;k=[];for(d=0;d<e;d++)k.push(a[d]);for(b=0;b<e;b++)for(p=a[b]+1;p<=a[b+1];p++)if(d=f[p],0<b&&p!==a[b+1]&&Math.abs(d-l[b])>Math.abs(d-l[b-1]))a[b]=p;else if(b<e-1&&a[b]!==p-1&&Math.abs(d-l[b])>Math.abs(d-l[b+1])){a[b+1]=p-1;break}p=c;c=0;d=[];b=[];for(let g=0;g<e;g++){d.push(l[g]);b.push(n[g]);const r=t(g,a,f,h);l[g]=r.sbMean;n[g]=r.sbSdcm;c+=n[g]}}if(c>p){for(f=0;f<e;f++)a[f]=k[f],l[f]=d[f],n[f]=b[f];c=p}return{mean:l,sdcm:n}}function C(a,f,h,e,k){a=Math.max(e-a,f-e)/
k/h;return 1<=a?1:.5<=a?.5:.25}function A(a){let f=0;for(let h=0;h<a.length;h++)f+=a[h];return f/=a.length}function B(a,f){let h=0;for(let e=0;e<a.length;e++){const k=a[e];h+=(k-f)*(k-f)}h/=a.length;return Math.sqrt(h)}function t(a,f,h,e){var k=0,d=0;for(var b=f[a]+1;b<=f[a+1];b++){const c=e[b];k+=h[b]*c;d+=c}0>=d&&D.warn("Exception in Natural Breaks calculation");k/=d;d=0;for(b=f[a]+1;b<=f[a+1];b++)d+=e[b]*(h[b]-k)**2;return{sbMean:k,sbSdcm:d}}const D=x.getLogger("esri.rest.support.generateRendererUtils");
u.createGenerateRendererClassBreaks=function(a){const {normalizationTotal:f}=a;return{classBreaks:y(a),normalizationTotal:f}};u.createGenerateRendererUniqueValues=function(a){a=v(a);const f=[],h=a.uniqueValues.length;for(let e=0;e<h;e++){const k=a.uniqueValues[e];f.push({value:k,count:a.valueFrequency[e],label:k.toString()})}return{uniqueValues:f}};Object.defineProperties(u,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});