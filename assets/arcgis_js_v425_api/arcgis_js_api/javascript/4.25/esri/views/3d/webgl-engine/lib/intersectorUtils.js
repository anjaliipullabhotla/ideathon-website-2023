// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/maybe ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../chunks/boundedPlane ./IntersectorInterfaces".split(" "),function(b,c,g,h,k,e){function d(a){return c.isSome(a)&&c.isSome(a.dist)}const f=h.create();b.isHudIntersectorResult=function(a){return d(a)&&a.intersector===e.IntersectorType.HUD&&!!a.target&&c.isSome(a.target.center)};b.isObjectIntersectorResult=function(a){return d(a)&&a.intersector===e.IntersectorType.OBJECT&&!!a.target};b.isValidIntersectorResult=
d;b.sliceFilterPredicate=function(a){return(l,m,n)=>{g.lerp(f,l,m,n);return!k.extrusionContainsPoint(a,f)}};Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});