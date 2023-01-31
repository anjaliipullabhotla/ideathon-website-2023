// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/JSONSupport ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ./support/ColormapInfo ./support/colorRampUtils".split(" "),function(m,g,d,n,u,v,p,q,h,r){var e;d=e=function(k){function f(a){a=k.call(this,a)||this;a.colormapInfos=null;a.type="raster-colormap";return a}m._inheritsLoose(f,k);f.createFromColormap=
function(a,b){if(!a)return null;const t=5===a[0].length;a=[...a].sort(c=>c[0][0]-c[1][0]).map(c=>h.fromJSON({value:c[0],color:t?c.slice(1,5):c.slice(1,4).concat([255]),label:b?b[c[0]]??"":c[0]}));return new e({colormapInfos:a})};f.createFromColorramp=function(a){a=r.convertColorRampToColormap(a,256);return e.createFromColormap(a)};var l=f.prototype;l.clone=function(){return new e({colormapInfos:this.colormapInfos.map(a=>a.toJSON())})};l.extractColormap=function(){return this.colormapInfos.map(({value:a,
color:b})=>[a,b.r,b.g,b.b,1<b.a?b.a:255*b.a&255]).sort((a,b)=>a[0]-b[0])};return f}(d.JSONSupport);g.__decorate([n.property({type:[h],json:{write:!0}})],d.prototype,"colormapInfos",void 0);g.__decorate([p.enumeration({rasterColormap:"raster-colormap"})],d.prototype,"type",void 0);return d=e=g.__decorate([q.subclass("esri.renderers.RasterColormapRenderer")],d)});