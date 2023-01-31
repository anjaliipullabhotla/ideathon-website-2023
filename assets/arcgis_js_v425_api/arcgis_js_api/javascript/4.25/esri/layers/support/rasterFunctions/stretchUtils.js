// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/maybe","../PixelBlock","../../../renderers/support/stretchRendererUtils"],function(z,y,B,G){function C(f,g=256){g=Math.min(g,256);const {size:l,counts:k}=f;f=new Uint8Array(l);var m=k.reduce((e,r)=>e+r/g,0);let q=0;var a=0;let h=0,c=m;for(let e=0;e<l;e++)if(h+=k[e],!(e<l-1&&h+k[e+1]<c)){for(;q<g-1&&c<h;)q++,c+=m;for(;a<=e;a++)f[a]=q;a=e+1}for(m=a;m<l;m++)f[m]=g-1;return f}function D(f,g){f=Math.min(Math.max(f,-100),100);g=Math.min(Math.max(g??0,-100),100);let l=0,
k=0;const m=new Uint8Array(256);for(l=0;256>l;l++)0<f&&100>f?k=(200*l-25500+510*g)/(2*(100-f))+128:0>=f&&-100<f?k=(200*l-25500+510*g)*(100+f)/2E4+128:100===f?(k=200*l-25500+256*(100-f)+510*g,k=0<k?255:0):-100===f&&(k=128),m[l]=255<k?255:0>k?0:k;return m}function E(f){if(y.isNone(f)||!f.pixels?.length)return null;f.statistics||f.updateStatistics();const {pixels:g,mask:l,pixelType:k,statistics:m}=f;f=f.width*f.height;const q=g.length;let a,h;let c;var e;const r=[],x=[];for(c=0;c<q;c++){var u=new Uint32Array(256);
var b=g[c];if("u8"===k)if(a=-.5,h=255.5,l)for(e=0;e<f;e++)l[e]&&u[b[e]]++;else for(e=0;e<f;e++)u[b[e]]++;else{y.assertIsSome(m);a=m[c].minValue;h=m[c].maxValue;var d=(h-a)/256;var n=new Uint32Array(257);if(l)for(e=0;e<f;e++)l[e]&&n[Math.floor((b[e]-a)/d)]++;else for(e=0;e<f;e++)n[Math.floor((b[e]-a)/d)]++;for(e=0;255>e;e++)u[e]=n[e];u[255]=n[255]+n[256]}r.push({min:a,max:h,size:256,counts:u});for(e=b=n=d=0;256>e;e++)d+=u[e],n+=e*u[e];n/=d;for(e=0;256>e;e++)b+=u[e]*(e-n)**2;u=Math.sqrt(b/(d-1));d=
(h-a)/256;e=(n+.5)*d+a;u*=d;x.push({min:a,max:h,avg:e,stddev:u})}return{statistics:x,histograms:r}}function H(f,g){if(null==g||0===g.length)return f;const l=Math.max.apply(null,g),{minCutOff:k,maxCutOff:m,outMin:q,outMax:a,histogramLut:h}=f;return k.length===g.length||k.length<=l?f:{minCutOff:g.map(c=>k[c]),maxCutOff:g.map(c=>m[c]),histogramLut:h?g.map(c=>h[c]):null,outMin:q,outMax:a}}const F={u1:[0,1],u2:[0,3],u4:[0,15],u8:[0,255],s8:[-128,127],u16:[0,65535],s16:[-32768,32767],u32:[0,4294967295],
s32:[-2147483648,2147483647],f32:[-3.4*1E39,3.4*1E39],f64:[-Number.MAX_VALUE,Number.MAX_VALUE]},I=[.299,.587,.114];z.computeGammaValues=function(f,g,l){const k=[];for(let c=0;c<g.length;c++){var m=0,q=0,a=0;"min"in g[c]?{min:m,max:q,avg:a}=g[c]:[m,q,a]=g[c];a=a??0;"u8"!==f&&(a=255*(a-m)/(q-m));l&&(a*=I[c]);m=k;q=m.push;if(0>=a||255<=a)a=1;else{var h=0;150!==a&&(h=150>=a?45*Math.cos(.01047*a):17*Math.sin(.021*a));h=Math.log((a+h)/255);0===h?a=1:(a=Math.log(a/255)/h,a=isNaN(a)?1:Math.min(9.9,Math.max(.01,
a)))}q.call(m,a)}return k};z.createContrastBrightnessLUT=D;z.createHistogramEqualizationLUT=C;z.createStretchLUT=function(f){const {minCutOff:g,maxCutOff:l,gamma:k,pixelType:m}=f,q=f.outMin||0,a=f.outMax||255;if(!["u8","u16","s8","s16"].includes(m))return null;const h=g.length;let c;let e=0;"s8"===m?e=-127:"s16"===m&&(e=-32767);let r=256;["u16","s16"].includes(m)&&(r=65536);const x=[],u=a-q;for(c=0;c<h;c++)x[c]=l[c]-g[c],u/(l[c]-g[c]);var b=k&&k.length>=h;const d=[];if(b)for(c=0;c<h;c++)d[c]=1<k[c]?
2<k[c]?6.5+(k[c]-2)**2.5:6.5+100*(2-k[c])**4:1;let n;const t=[];let v,w,p;if(b)for(c=0;c<h;c++){p=[];for(b=0;b<r;b++)v=b+e,n=(v-g[c])/x[c],w=1,1<k[c]&&(w-=(1/u)**(n*d[c])),p[b]=v<l[c]&&v>g[c]?Math.floor(w*u*n**(1/k[c]))+q:v>=l[c]?a:q;t[c]=p}else for(c=0;c<h;c++){p=[];for(b=0;b<r;b++)v=b+e,p[b]=v<=g[c]?q:v>=l[c]?a:Math.floor((v-g[c])/x[c]*u)+q;t[c]=p}if(null!=f.contrastOffset)for(f=D(f.contrastOffset,f.brightnessOffset),c=0;c<h;c++)for(p=t[c],b=0;b<r;b++)p[b]=f[p[b]];return{lut:t,offset:e}};z.estimateStatisticsFromHistograms=
function(f){const g=[];for(let q=0;q<f.length;q++){const {min:a,max:h,size:c,counts:e}=f[q];let r=0;var l=0;for(var k=0;k<c;k++)r+=e[k],l+=k*e[k];l/=r;k=0;for(var m=0;m<c;m++)k+=e[m]*(m-l)**2;m=(h-a)/c;g.push({min:a,max:h,avg:(l+.5)*m+a,stddev:Math.sqrt(k/(r-1))*m})}return g};z.estimateStatisticsHistograms=E;z.getStretchCutoff=function(f,g){const {pixelBlock:l,bandIds:k,returnHistogramLut:m,rasterInfo:q}=g;var a=null;g=null;var h=f.stretchType;"number"===typeof h&&(h=G.stretchTypeFunctionEnum[h]);
f.dra?"minMax"===h&&y.isSome(l)&&l.statistics?a=l.statistics.map(w=>[w.minValue,w.maxValue,0,0]):(g=E(l),a=y.isSome(g)?g.statistics:null,g=y.isSome(g)?g.histograms:null):(a=0<f.statistics?.length?f.statistics:y.unwrap(q.statistics),g=f.histograms||y.unwrap(q.histograms));"percentClip"!==h&&"histogramEqualization"!==h||g?.length||(h="minMax");var c=a?.length||g?.length||q.bandCount;const e=[],r=[];let x;let u,b,d,n;a&&!Array.isArray(a[0])&&(a=a.map(w=>[w.min,w.max,w.avg,w.stddev]));switch(h){case "none":a=
F[q.pixelType]||F.f32;for(d=0;d<c;d++)e[d]=a[0],r[d]=a[1];break;case "minMax":y.assertIsSome(a);for(d=0;d<c;d++)e[d]=a[d][0],r[d]=a[d][1];break;case "standardDeviation":y.assertIsSome(a);for(d=0;d<c;d++)e[d]=a[d][2]-f.numberOfStandardDeviations*a[d][3],r[d]=a[d][2]+f.numberOfStandardDeviations*a[d][3],e[d]<a[d][0]&&(e[d]=a[d][0]),r[d]>a[d][1]&&(r[d]=a[d][1]);break;case "histogramEqualization":y.assertIsSome(g);for(d=0;d<c;d++)e[d]=g[d].min,r[d]=g[d].max;break;case "percentClip":y.assertIsSome(g);
for(d=0;d<g.length;d++){a=g[d];u=new Uint32Array(a.size);var t=[...a.counts];20<=t.length&&(t[0]=t[1]=t[2]=t[t.length-1]=t[t.length-2]=0);x=0;c=(a.max-a.min)/a.size;b=-.5===a.min&&1===c?.5:0;for(n=0;n<a.size;n++)x+=t[n],u[n]=x;t=(f.minPercent||0)*x/100;for(n=0;n<a.size;n++)if(u[n]>t){e[d]=a.min+c*(n+b);break}t=(1-(f.maxPercent||0)/100)*x;for(n=a.size-2;0<=n;n--)if(u[n]<t){r[d]=a.min+c*(n+2-b);break}}break;default:for(y.assertIsSome(a),d=0;d<c;d++)e[d]=a[d][0],r[d]=a[d][1]}let v;"histogramEqualization"===
h?(y.assertIsSome(g),h=g[0].size||256,f=0,m&&(v=g.map(w=>C(w)))):(h=f.max||255,f=f.min||0);return H({minCutOff:e,maxCutOff:r,outMax:h,outMin:f,histogramLut:v},k)};z.stretch=function(f,g){if(y.isNone(f)||!f.pixels?.length)return f;const {mask:l,width:k,height:m,pixels:q}=f,{minCutOff:a,maxCutOff:h,gamma:c}=g;var e=g.outMin||0;const r=g.outMax||255,x=k*m,u=g.outputPixelType||"u8";f=f.pixels.map(()=>B.createEmptyBand(u,x));g=f.length;let b;let d,n,t;const v=r-e,w=[];for(b=0;b<g;b++)w[b]=h[b]-a[b],v/
(h[b]-a[b]);var p=c&&c.length>=g;const A=[];if(p)for(b=0;b<g;b++)A[b]=1<c[b]?2<c[b]?6.5+(c[b]-2)**2.5:6.5+100*(2-c[b])**4:1;if(p)if(null!=l)for(p=0;p<x;p++){if(l[p])for(b=0;b<g;b++)d=q[b][p],t=(d-a[b])/w[b],n=1,1<c[b]&&(n-=(1/v)**(t*A[b])),f[b][p]=d<h[b]&&d>a[b]?Math.floor(n*v*t**(1/c[b]))+e:d>=h[b]?r:e}else for(p=0;p<x;p++)for(b=0;b<g;b++)d=q[b][p],t=(d-a[b])/w[b],n=1,1<c[b]&&(n-=(1/v)**(t*A[b])),f[b][p]=d<h[b]&&d>a[b]?Math.floor(n*v*t**(1/c[b]))+e:d>=h[b]?r:e;else if(null!=l)for(p=0;p<x;p++){if(l[p])for(b=
0;b<g;b++)d=q[b][p],f[b][p]=d<h[b]&&d>a[b]?Math.floor((d-a[b])/w[b]*v)+e:d>=h[b]?r:e}else for(p=0;p<x;p++)for(b=0;b<g;b++)d=q[b][p],f[b][p]=d<h[b]&&d>a[b]?Math.floor((d-a[b])/w[b]*v)+e:d>=h[b]?r:e;e=new B({width:k,height:m,mask:l,pixels:f,pixelType:u});e.updateStatistics();return e};Object.defineProperties(z,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});