// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/maybe ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../engine/imagery/RasterTileContainer ./BaseImageryTileSubView2D ../support/util".split(" "),function(q,m,n,r,h,C,v,w,x,y){h=function(p){function t(){var b=p.apply(this,arguments)||this;b.container=null;b.layer=null;
b.type="raster";return b}q._inheritsLoose(t,p);var f=t.prototype;f.attach=function(){p.prototype.attach.call(this);this.container=new w.RasterTileContainer(this._tileInfoView);this.container.isCustomTilingScheme=this._isCustomTilingScheme};f.detach=function(){p.prototype.detach.call(this);this.container.removeAllChildren();this.container=null};f.canUseWebGLForProcessing=function(){return this.useWebGLForProcessing&&this.layer.symbolizer.canRenderInWebGL&&!("majority"===this.layer.interpolation&&y.canUseMajorityInterpolationOnDataSource(this.layer))};
f.fetchTile=function(b,a){return this.layer.fetchTile(b.level,b.row,b.col,a)};f.updateTileSource=function(){var b=q._asyncToGenerator(function*(a,c){const {bandIds:u}=this.layer,l=this._getLayerInterpolation(),g=this.canUseWebGLForProcessing(),{source:d,globalSymbolizerParams:e,suspended:z,coords:A,resolution:B}=c;c=this.layerView.hasTilingEffects?e:c.symbolizerParams;({bitmap:a}=a);[a.x,a.y]=A;a.resolution=B;if(d&&n.isSome(d)&&n.isSome(d.pixelBlock)){var k={extent:d.extent,pixelBlock:d.pixelBlock};
a.rawPixelData=k;g?(a.source=d.pixelBlock,a.isRendereredSource=!1):(k=yield this.layer.applyRenderer(k,"stretch"===e?.type?e:null),a.source=k,a.isRendereredSource=!0);a.symbolizerParameters=g?c:null;g?a.transformGrid||(a.transformGrid=d.transformGrid):a.transformGrid=null}else k=this.createEmptyTilePixelBlock(),a.source=k,a.symbolizerParameters=g?c:null,a.transformGrid=null;a.bandIds=g?u:null;a.width=this._tileInfoView.tileInfo.size[0];a.height=this._tileInfoView.tileInfo.size[1];a.interpolation=
l;a.suspended=z;a.invalidateTexture()});return function(a,c){return b.apply(this,arguments)}}();f.updateTileSymbolizerParameters=function(){var b=q._asyncToGenerator(function*(a,c){const {local:u,global:l}=c;({bandIds:c}=this.layer);const g=this._getLayerInterpolation(),d=this.canUseWebGLForProcessing();({bitmap:a}=a);const {rawPixelData:e}=a;!d&&n.isSome(e)?(a.source=yield this.layer.applyRenderer(e,"stretch"===l?.type?l:null),a.isRendereredSource=!0):(a.isRendereredSource&&n.isSome(e)&&(a.source=
e.pixelBlock),a.isRendereredSource=!1);a.symbolizerParameters=d?this.layerView.hasTilingEffects?l:u:null;a.bandIds=d?c:null;a.interpolation=g;a.suspended=!1});return function(a,c){return b.apply(this,arguments)}}();f._getLayerInterpolation=function(){var b=this.layer.renderer.type;if("raster-colormap"===b||"unique-value"===b||"class-breaks"===b)return"nearest";({interpolation:b}=this.layer);const {renderer:a}=this.layer;return"raster-stretch"===a.type&&null!=a.colorRamp?"bilinear"===b||"cubic"===
b?"bilinear":"nearest":b};return t}(x.BaseImageryTileSubView2D);m.__decorate([r.property()],h.prototype,"container",void 0);m.__decorate([r.property()],h.prototype,"layer",void 0);m.__decorate([r.property()],h.prototype,"type",void 0);return h=m.__decorate([v.subclass("esri.views.2d.layers.imagery.ImageryTileView2D")],h)});