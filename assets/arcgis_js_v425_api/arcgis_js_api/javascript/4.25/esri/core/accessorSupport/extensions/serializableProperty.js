// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../ensureType ./serializableProperty/originAliases ./serializableProperty/reader ./serializableProperty/shorthands ./serializableProperty/writer".split(" "),function(e,n,p,k,q,l){function g(a,b,c){let f=a&&a.json;a&&a.json&&a.json.origins&&c&&(a=c.origin&&a.json.origins[c.origin])&&("any"===b||b in a)&&(f=a);return f}function m(a){if(a.type){var b=0;for(a=a.type;Array.isArray(a)&&!n.isOneOf(a);)a=a[0],b++;return{type:a,ndimArray:b}}}function h(a){if(a.types){var b=0;for(a=a.types;Array.isArray(a);)a=
a[0],b++;return{types:a,ndimArray:b}}}e.originSpecificPropertyDefinition=g;e.originSpecificReadPropertyDefinition=function(a,b){return g(a,"read",b)};e.originSpecificWritePropertyDefinition=function(a,b){return g(a,"write",b)};e.processPrototypePropertyMetadata=function(a){if(q.process(a)){p.process(a);var b=a.json.types?h(a.json):a.type?m(a):h(a);if(a.json.origins)for(const f in a.json.origins){const d=a.json.origins[f];if(d.types){var c=d;c=c.type?m(c):h(c)}else c=b;k.create(c,d,!1);d.types&&!d.write&&
a.json.write&&a.json.write.enabled&&(d.write={...a.json.write});l.create(c,d)}k.create(b,a.json,!0);l.create(b,a.json)}};Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});