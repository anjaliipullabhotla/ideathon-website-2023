// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../chunks/mat3 ../chunks/mat3f64 ../chunks/vec2 ../chunks/vec3 ../chunks/vec3f64".split(" "),function(h,e,k,m,g,q){function n(d,a,c,r,t,u,v,w,x){e.set(d,a,r,u,c,t,v,1,1,1);g.set(b,w,x,1);e.adjoint(f,d);const [y,z,A]=g.transformMat3(b,b,e.transpose(f,f));e.set(f,y,0,0,0,z,0,0,0,A);return e.multiply(d,f,d)}const b=q.create(),f=k.create(),l=k.create(),p=k.create();h.getProjectiveTransform=function(d,a,c){n(l,a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]);n(p,c[0],c[1],c[2],c[3],c[4],c[5],c[6],
c[7]);return e.multiply(d,e.adjoint(l,l),p)};h.transformProjective=function(d,a,c){g.set(b,a[0],a[1],1);g.transformMat3(b,b,e.transpose(f,c));return 0===b[2]?m.set(d,b[0],b[1]):m.set(d,b[0]/b[2],b[1]/b[2])};Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});