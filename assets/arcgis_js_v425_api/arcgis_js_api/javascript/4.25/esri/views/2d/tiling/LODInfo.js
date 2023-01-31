// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["../../../core/maybe","../../../geometry/support/spatialReferenceUtils","./TileKey"],function(u,v,w){function n(l,e,a){l[0]=e;l[1]=a;return l}const g=new w("0/0/0/0");return function(){function l(a,b,c,d,f,m,h,k,p,q,r,t){this.level=a;this.resolution=b;this.scale=c;this.origin=d;this.first=f;this.last=m;this.size=h;this.norm=k;this.worldStart=p;this.worldEnd=q;this.worldSize=r;this.wrap=t}l.create=function(a,b,c=null){var d=v.getInfo(a.spatialReference);const f=b.origin||[a.origin.x,a.origin.y],
m=[a.size[0]*b.resolution,a.size[1]*b.resolution],h=[-Infinity,-Infinity],k=[Infinity,Infinity],p=[Infinity,Infinity];u.isSome(c)&&(n(h,Math.max(0,Math.floor((c.xmin-f[0])/m[0])),Math.max(0,Math.floor((f[1]-c.ymax)/m[1]))),n(k,Math.max(0,Math.floor((c.xmax-f[0])/m[0])),Math.max(0,Math.floor((f[1]-c.ymin)/m[1]))),n(p,k[0]-h[0]+1,k[1]-h[1]+1));const {cols:q,rows:r}=b;!c&&q&&r&&(n(h,q[0],r[0]),n(k,q[1],r[1]),n(p,q[1]-q[0]+1,r[1]-r[0]+1));let t;a.isWrappable?(a=[Math.ceil(Math.round((d.valid[1]-d.valid[0])/
b.resolution)/a.size[0]),p[1]],d=[Math.floor((d.origin[0]-f[0])/m[0]),h[1]],c=[a[0]+d[0]-1,k[1]],t=!0):(d=h,c=k,a=p,t=!1);return new l(b.level,b.resolution,b.scale,f,h,k,p,m,d,c,a,t)};var e=l.prototype;e.normalizeCol=function(a){if(!this.wrap)return a;const b=this.worldSize[0];return 0>a?b-1-Math.abs((a+1)%b):a%b};e.denormalizeCol=function(a,b){return this.wrap?this.worldSize[0]*b+a:a};e.getWorldForColumn=function(a){return this.wrap?Math.floor(a/this.worldSize[0]):0};e.getFirstColumnForWorld=function(a){return a*
this.worldSize[0]+this.first[0]};e.getLastColumnForWorld=function(a){return a*this.worldSize[0]+this.first[0]+this.size[0]-1};e.getColumnForX=function(a){return(a-this.origin[0])/this.norm[0]};e.getXForColumn=function(a){return this.origin[0]+a*this.norm[0]};e.getRowForY=function(a){return(this.origin[1]-a)/this.norm[1]};e.getYForRow=function(a){return this.origin[1]-a*this.norm[1]};e.getTileBounds=function(a,b,c=!1){g.set(b);var d=c?g.col:this.denormalizeCol(g.col,g.world),f=g.row;b=this.getXForColumn(d);
c=this.getYForRow(f+1);d=this.getXForColumn(d+1);f=this.getYForRow(f);a[0]=b;a[1]=c;a[2]=d;a[3]=f;return a};e.getTileCoords=function(a,b,c=!1){g.set(b);b=c?g.col:this.denormalizeCol(g.col,g.world);Array.isArray(a)?n(a,this.getXForColumn(b),this.getYForRow(g.row)):(a.x=this.getXForColumn(b),a.y=this.getYForRow(g.row));return a};return l}()});