// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports"],function(v){function E(a){return void 0!==a.xmin&&void 0!==a.ymin&&void 0!==a.xmax&&void 0!==a.ymax}function F(a){return function(b,c){return null==b?c:null==c?b:a(b,c)}}function y(a,b,c,d){const m=c?3:2;if(!b.length||!b[0].length)return null;let [n,k]=b[0][0],[e,f]=b[0][0],g=void 0,h=void 0,p=void 0;var l=void 0;for(let w=0;w<b.length;w++){const u=b[w];for(let x=0;x<u.length;x++){const q=u[x],[z,A]=q;n=r(n,z);k=r(k,A);e=t(e,z);f=t(f,A);if(c&&2<q.length){const B=q[2];g=r(g,B);h=
t(h,B)}d&&q.length>m&&(l=q[m],p=r(g,l),l=t(h,l))}}if(c){if(d)return a[0]=n,a[1]=k,a[2]=g,a[3]=p,a[4]=e,a[5]=f,a[6]=h,a[7]=l,a.length=8,a;a[0]=n;a[1]=k;a[2]=g;a[3]=e;a[4]=f;a[5]=h;a.length=6;return a}if(d)return a[0]=n,a[1]=k,a[2]=p,a[3]=e,a[4]=f,a[5]=l,a.length=6,a;a[0]=n;a[1]=k;a[2]=e;a[3]=f;a.length=4;return a}function C(a,b,c,d,m,n){c=b.xmin;d=b.xmax;const k=b.ymin,e=b.ymax;let f=b.zmin,g=b.zmax,h=b.mmin;b=b.mmax;if(m){f=f||0;g=g||0;if(n)return a[0]=c,a[1]=k,a[2]=f,a[3]=h||0,a[4]=d,a[5]=e,a[6]=
g,a[7]=b||0,a;a[0]=c;a[1]=k;a[2]=f;a[3]=d;a[4]=e;a[5]=g;return a}if(n)return a[0]=c,a[1]=k,a[2]=h||0,a[3]=d,a[4]=e,a[5]=b||0,a;a[0]=c;a[1]=k;a[2]=d;a[3]=e;return a}function D(a,b,c,d,m,n){const k=c?3:2;d=d&&n;c=c&&m;if(!b.length||!b[0].length)return null;let [e,f]=b[0],[g,h]=b[0],p=void 0,l=void 0,w=void 0;var u=void 0;for(let x=0;x<b.length;x++){const q=b[x],[z,A]=q;e=r(e,z);f=r(f,A);g=t(g,z);h=t(h,A);if(c&&2<q.length){const B=q[2];p=r(p,B);l=t(l,B)}d&&q.length>k&&(u=q[k],w=r(p,u),u=t(l,u))}if(m){p=
p||0;l=l||0;if(n)return a[0]=e,a[1]=f,a[2]=p,a[3]=w||0,a[4]=g,a[5]=h,a[6]=l,a[7]=u||0,a;a[0]=e;a[1]=f;a[2]=p;a[3]=g;a[4]=h;a[5]=l;return a}if(n)return a[0]=e,a[1]=f,a[2]=w||0,a[3]=g,a[4]=h,a[5]=u||0,a;a[0]=e;a[1]=f;a[2]=g;a[3]=h;return a}const r=F(Math.min),t=F(Math.max);v.getBoundsXY=function(a,b){if(void 0!==b.paths)return y(a,b.paths,!1,!1);if(void 0!==b.rings)return y(a,b.rings,!1,!1);if(void 0!==b.points)return D(a,b.points,!1,!1,!1,!1);if(E(b))return C(a,b);void 0!==b.x&&void 0!==b.y&&(a[0]=
b.x,a[1]=b.y,a[2]=b.x,a[3]=b.y);return a};v.getBoundsXYZ=function(a,b){if(void 0!==b.paths)return y(a,b.paths,!0,!1);if(void 0!==b.rings)return y(a,b.rings,!0,!1);if(void 0!==b.points)return D(a,b.points,!0,!1,!0,!1);if(E(b))return C(a,b,!0,!1,!0,!1);void 0!==b.x&&void 0!==b.y&&(a[0]=b.x,a[1]=b.y,a[2]=b.z,a[3]=b.x,a[4]=b.y,a[5]=b.z);return a};v.getExtentBounds=C;v.getPointsBounds=D;v.getPointsBoundsCenterX=function(a){if(!a.length||!a[0].length)return null;let [b]=a[0],[c]=a[0];for(let d=0;d<a.length;d++){const [m]=
a[d];b=r(b,m);c=t(c,m)}return b+.5*(c-b)};v.getPointsBoundsWidth=function(a){if(!a.length||!a[0].length)return null;let [b]=a[0],[c]=a[0];for(let d=0;d<a.length;d++){const [m]=a[d];b=r(b,m);c=t(c,m)}return c-b};v.getRingsOrPathsBounds=y;Object.defineProperties(v,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});