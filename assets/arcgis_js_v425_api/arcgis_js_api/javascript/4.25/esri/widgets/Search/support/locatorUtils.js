// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../Graphic ../../../core/maybe ../../../geometry/Polygon ../../../rest/locator/addressToLocations ../../../rest/locator/locationToAddress ../../../rest/locator/suggestLocations ../../../rest/support/AddressToLocationsParameters ../../../rest/support/LocationToAddressParameters ../../../rest/support/SuggestLocationsParameters ./geometryUtils".split(" "),function(q,B,w,C,D,E,F,G,H,I,v){function x(a,c){if(c.localSearchDisabled)return null;c=a?.scale;return"number"===typeof c&&3E5>=
c?a.get("extent.center"):null}function J(a,c){const {source:b,spatialReference:e,location:m,sourceIndex:h,view:k}=a,{apiKey:n,url:p,zoomScale:r,defaultZoomScale:d}=b,g=k&&k.scale;a=c&&c.signal;c=new H;c.location=m;n&&(c.apiKey=n);e&&(c.outSpatialReference=e);return E.locationToAddress(p,c,{signal:a}).then(t=>y([t],{sourceIndex:h,scale:g,view:k,zoomScale:r,defaultZoomScale:d})).catch(()=>[])}function z(a,c){const {filter:b,withinViewEnabled:e}=a;a=c&&c.extent;return(c=v.createExtentFromGeometry(b&&
b.geometry,c,c&&c.scale))||(e&&a?a:void 0)}function K(a,c){const {source:b,suggestResult:e,spatialReference:m,view:h,maxResults:k,sourceIndex:n}=a,p=b&&b.zoomScale,r=b&&b.defaultZoomScale;if(!e.text.trim())return Promise.resolve(null);a=`${!e.key&&b.prefix?b.prefix:""}${e.text}${!e.key&&b.suffix?b.suffix:""}`;const d=new G,{apiKey:g,url:t}=b,l=h&&h.scale;var f=z(b,h);c=c&&c.signal;g&&(d.apiKey=g);if(!t)return Promise.resolve(null);b.categories&&(d.categories=b.categories);b.locationType&&(d.locationType=
b.locationType);m&&(d.outSpatialReference=m);const u=x(h,b);u&&(d.location=u);d.maxLocations=k;f&&(d.searchExtent=w.unwrap(f));b.countryCode&&(d.countryCode=b.countryCode);({key:f}=e);const A=`${f}`;f&&(d.magicKey=A);d.address={};d.address[b.singleLineFieldName||"Single Line Input"]=a;b.outFields&&(d.outFields=b.outFields);return D.addressToLocations(t,d,{signal:c}).then(L=>y(L,{key:A,scale:l,sourceIndex:n,view:h,zoomScale:p,defaultZoomScale:r}))}function M(a,c){return a.map(b=>({text:b.text,key:b.magicKey,
sourceIndex:c}))}function y(a,c){return a.filter(Boolean).map(b=>{const {key:e,scale:m,sourceIndex:h,view:k,zoomScale:n,defaultZoomScale:p}=c,{attributes:r,extent:d,location:g,address:t}=b;b=new B({geometry:g,attributes:r});var l=d||g,f=v.createExtentFromGeometry(l,k,m);l="number"===typeof n?v.scaleExtent(f,k,n):"number"===typeof p&&"point"===l.type?v.scaleExtent(f,k,p):f;f=g?`${g.x},${g.y}`:"";f=t||f;const u=b.clone();w.isSome(l)&&(u.geometry=C.fromExtent(l));return{extent:l,feature:b,target:u,key:e,
name:f,sourceIndex:h}})}q.getLocation=x;q.getResults=function(a,c){return a.location?J(a,c):K(a,c)};q.getSuggestions=function(a,c){const {source:b,spatialReference:e,view:m,suggestTerm:h,maxSuggestions:k,sourceIndex:n}=a;a=new I;const {apiKey:p,url:r}=b,d=z(b,m);c=c&&c.signal;if(!r)return Promise.resolve(null);p&&(a.apiKey=p);b.categories&&(a.categories=b.categories);e&&(a.outSpatialReference=e);const g=x(m,b);g&&(a.location=g);if(!h.trim())return Promise.resolve(null);const {prefix:t="",suffix:l=
""}=b;a.text=`${t}${h}${l}`;d&&(a.searchExtent=w.unwrap(d));a.maxSuggestions=k;b.countryCode&&(a.countryCode=b.countryCode);return F.suggestLocations(r,a,{signal:c}).then(f=>M(f,n))};q.isArcGISWorldGeocoder=function(a){return a?/(?:arcgis\.com\/arcgis\/rest\/services\/world\/geocodeserver).*/i.test(a):!1};q.isMeteredArcGISWorldGeocoder=function(a){return a?/(?:geocode\-api\.arcgis\.com\/arcgis\/rest\/services\/world\/geocodeserver).*/i.test(a):!1};q.isProxiedArcGISWorldGeocoder=function(a){return a?
/(?:\/servers\/[\da-z\.-]+\/rest\/services\/world\/geocodeserver).*/i.test(a):!1};q.meteredArcGISLocatorUrl="https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer";Object.defineProperties(q,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});