// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../request ../utils ../support/AddressCandidate ../support/LocationToAddressParameters".split(" "),function(f,g,h,d,k,l){function e(){e=g._asyncToGenerator(function*(b,a,c){a=l.from(a);b=d.parseUrl(b);a={...a.toJSON(),f:"json"};a=d.encode({...b.query,...a});c=d.asValidOptions(a,c);return h(`${b.path}/reverseGeocode`,c).then(m)});return e.apply(this,arguments)}function m({data:b}){if(b){var {address:a,location:c}=b;return k.fromJSON({address:a&&
a.Match_addr||"",attributes:a||{},location:c,score:100})}}f.locationToAddress=function(b,a,c){return e.apply(this,arguments)};Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});