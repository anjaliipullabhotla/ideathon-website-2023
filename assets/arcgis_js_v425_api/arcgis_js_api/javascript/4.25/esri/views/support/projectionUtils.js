// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["require","exports","../../chunks/_rollupPluginBabelHelpers","../../core/promiseUtils","../../geometry/projection"],function(p,l,m,q,e){function r(a){return f.apply(this,arguments)}function f(){f=m._asyncToGenerator(function*(a){g||(g=(new Promise((b,c)=>p(["../../portal/support/geometryServiceUtils"],b,c))).then(b=>h=b));yield g;q.throwIfAborted(a)});return f.apply(this,arguments)}function n(a,b,c,d){return k.apply(this,arguments)}function k(){k=m._asyncToGenerator(function*(a,b,c,d){if(!a)return null;
const t=a.spatialReference;if(e.isLoaded()||e.canProjectWithoutEngine(t,b))return e.project(a,b);if(h)return h.projectGeometry(a,b,c,d);yield Promise.race([r(d),e.load(d)]);return n(a,b,c,d)});return k.apply(this,arguments)}let g=null,h;l.projectWithEngineOrService=n;Object.defineProperties(l,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});