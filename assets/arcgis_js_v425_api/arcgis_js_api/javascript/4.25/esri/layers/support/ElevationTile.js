// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../core/maybe","./ElevationSamplerData"],function(n,l,t){let y=function(){function p(b,a=null){this.tile=b;this.zmax=this.zmin=0;l.isSome(a)&&l.isSome(b)&&(this._samplerData=new t.ElevationSamplerData(a,b.extent),this.zmin=a.minValue,this.zmax=a.maxValue)}p.prototype.sample=function(b,a){if(!l.isNone(this._samplerData)){var {safeWidth:f,width:q,pixelData:g,noDataValue:h,dx:u,dy:v,y1:w,x0:x}=this._samplerData;a=v*(w-a);a=0>a?0:a>f?f:a;b=u*(b-x);var k=0>b?0:b>f?f:b;b=Math.floor(a);
var r=Math.floor(k),c=b*q+r,d=c+q,e=g[c],m=g[d];c=g[c+1];d=g[d+1];if(e!==h&&m!==h&&c!==h&&d!==h)return k-=r,e+=(c-e)*k,e+(m+(d-m)*k-e)*(a-b)}};return p}();n.ElevationTile=y;Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});