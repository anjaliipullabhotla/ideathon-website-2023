// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../core/handleUtils"],function(e,n){function h(b,a){let d=a.children;if(d&&d.length)for(var c=0;c<d.length;++c)d[c]=h(b,d[c]);else d=p;c=a.vnodeSelector;if(k(c)){a=a.properties||q;const f=a.key||c;return{vnodeSelector:"div",properties:{key:f,afterCreate:r,afterUpdate:t,afterRemoved:l,parentWidget:b,widgetConstructor:c,widgetProperties:{...a,key:f,children:d}},children:void 0,text:void 0,domNode:null}}return a}function r(b,a,d,{parentWidget:c,widgetConstructor:f,widgetProperties:u}){a=
new f(u);a.container=b;g.set(b,a);a.afterCreate?.(a,b);c._internalHandles.add(n.makeHandle(()=>l(b)))}function t(b,a,d,{widgetProperties:c}){if(a=g.get(b))a.set(c),a.afterUpdate?.(a,b)}function l(b){const a=g.get(b);a&&(a.destroy(),g.delete(b))}function k(b){return"function"===typeof b&&b[m]}const m=Symbol("widget"),p=[],q={},g=new WeakMap;e.WIDGET_SYMBOL=m;e.isWidgetConstructor=k;e.processWidgets=h;Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});