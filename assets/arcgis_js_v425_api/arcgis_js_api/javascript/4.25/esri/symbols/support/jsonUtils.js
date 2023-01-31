// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../symbols ../../core/Error ../../core/maybe ../Symbol3D ./symbolConversion ../WebStyleSymbol".split(" "),function(f,p,h,g,k,q,l){function m(a,c,d){if(g.isNone(a))return null;const {context:b,isLabelSymbol:r}=d;var e=b?.origin;d=b?.messages;if("web-scene"===e&&!(a instanceof k||a instanceof l)){e=q.to3D(a,{retainCIM:!0,hasLabelingContext:r});if(g.isSome(e.symbol))return e.symbol.write(c,b);d?.push(new h("symbol:unsupported",`Symbols of type '${a.declaredClass}' are not supported in scenes. Use 3D symbology instead when working with WebScene and SceneView`,
{symbol:a,context:b,error:e.error}));return null}const n=b?.layer?.type;return"web-map"!==e&&("portal-item"!==e||n&&t.includes(n))||!(a instanceof k||a instanceof l)?a.write(c,b):(d?.push(new h("symbol:unsupported",`Symbols of type '${a.declaredClass}' are not supported in web maps and portal items. Use 2D symbology and CIMSymbol instead when working with MapView`,{symbol:a,context:b})),null)}const t=["building-scene","integrated-mesh","point-cloud","scene"];f.fromJSON=function(a,c){return p.readSymbol(a,
null,c)};f.write=function(a,c,d,b){a=m(a,{},{context:b,isLabelSymbol:!1});g.isSome(a)&&(c[d]=a)};f.writeLabelSymbol=function(a,c,d,b){a=m(a,{},{context:b,isLabelSymbol:!0});g.isSome(a)&&(c[d]=a)};Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});