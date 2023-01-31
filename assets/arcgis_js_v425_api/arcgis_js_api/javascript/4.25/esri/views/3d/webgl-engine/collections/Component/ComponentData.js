// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/maybe","../../../../../core/typedArrayUtil","./IndexRange/ComponentRangeRunLengthEncoded","../../lib/AutoDisposable"],function(l,f,m,n,p){function q(h,g,d){const a=[],b=[];let c=d.length,k=d.length;g.forEachComponent(e=>{0<h[e]?(c!==e-1&&(a.length&&a.push(d[c+1]-a[a.length-1]),a.push(d[e])),c=e):(k!==e-1&&(b.length&&b.push(d[k+1]-b[b.length-1]),b.push(d[e])),k=e);return!0});a.length&&a.push(d[c+1]-a[a.length-1]);b.length&&
b.push(d[k+1]-b[b.length-1]);return{highlightRanges:a,defaultRanges:b}}return function(h){function g(a,b){var c=h.call(this)||this;c.pickability=null;c.highlightCounts=null;c.verticalOffsets=null;c.cachedGeometryRanges=null;c.cachedHighlightRanges=null;c.cachedDefaultRanges=null;c.offsets=m.slice(b);b=c.count;c.visibility=new n.ComponentRangeRunLengthEncoded(b);c.materialDataBuffer=a.getBuffer(b);c.materialDataIndices=new Uint16Array(b);for(a=0;a<b;a++)c.materialDataIndices[a]=c.materialDataBuffer.acquireIndex();
return c}l._inheritsLoose(g,h);var d=g.prototype;d.dispose=function(){h.prototype.dispose.call(this);for(let a=0;a<this.count;a++)this.materialDataBuffer.releaseIndex(this.materialDataIndices[a])};d.highlightsDirty=function(){this.cachedDefaultRanges=this.cachedHighlightRanges=null};d.visibilityDirty=function(){this.cachedGeometryRanges=null;this.highlightsDirty()};d._updateCachedHighlightRanges=function(){if((f.isNone(this.cachedHighlightRanges)||f.isNone(this.cachedDefaultRanges))&&f.isSome(this.highlightCounts)){const {highlightRanges:a,
defaultRanges:b}=q(this.highlightCounts,this.visibility,this.offsets);this.cachedHighlightRanges=a;this.cachedDefaultRanges=b}};l._createClass(g,[{key:"count",get:function(){return this.offsets.length-1}},{key:"geometryRanges",get:function(){f.isNone(this.cachedGeometryRanges)&&(this.cachedGeometryRanges=this.visibility.computeOffsetRanges(this.offsets));return this.cachedGeometryRanges}},{key:"highlightRanges",get:function(){if(f.isNone(this.highlightCounts))return null;this._updateCachedHighlightRanges();
return this.cachedHighlightRanges}},{key:"defaultShadowMapRanges",get:function(){if(f.isNone(this.highlightCounts))return this.geometryRanges;this._updateCachedHighlightRanges();return this.cachedDefaultRanges}}]);return g}(p.AutoDisposable)});