// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../core/Error ../../../../../../core/Logger ../../../../../../core/mathUtils ../../../../../../core/maybe ../../../../../../core/screenUtils ../../../../../../symbols/cim/enums ../../alignmentUtils ../../color ../../definitions ../../enums ../../number ../../materialKey/MaterialKey ./segmentUtils ./WGLTextTemplate".split(" "),function(w,D,E,x,u,y,z,q,A,F,G,r,H,B,I){const J=E.getLogger("esri.views.2d.engine.webgl.WGLLabelTemplate"),
K=(m,k="mapview-labeling")=>J.error(new D(k,m)),L=function(m){const k=new Map;return h=>{k.has(h)||k.set(h,m(h));return k.get(h)}}(m=>{let k=0;if(0===m)return Infinity;for(;!(m%2);)k++,m/=2;return k});return function(m){function k(a,c,b,f){var d=m.call(this,a,b.font.size,b.haloSize||0,b.font.size,b.color&&A.premultiplyAlphaRGBAArray(b.color)||0,b.haloColor&&A.premultiplyAlphaRGBAArray(b.haloColor)||0,b.horizontalAlignment,b.verticalAlignment,q.isMapAligned(c.labelPlacement)?z.Alignment.MAP:z.Alignment.SCREEN,
b.font.decoration,!1,b.angle||0,b.xoffset,b.yoffset,b.lineWidth,b.lineHeight,null,null,null,null,null)||this;d._outLineLabelAngle=0;d._refPlacementPadding=0;d._refPlacementDirX=0;d._refPlacementDirY=0;d._refOffsetX=0;d._refOffsetY=0;d._zoomLevel=0;d.geometryType=G.WGLGeometryType.LABEL;d._allowOverrun=c.allowOverrun??!1;d._repeatLabel=c.repeatLabel??!0;d._labelPosition=c.labelPosition??"curved";var e=!!c.minScale&&f.scaleToZoom(c.minScale)||0;e=x.clamp(e,0,25.5);f=!!c.maxScale&&f.scaleToZoom(c.maxScale)||
255;f=x.clamp(f,0,25.5);const [g,p]=q.getAlignmentFromPlacement(c.labelPlacement);d._xAlignD=g;d._yAlignD=p;d._minZoom=e;d._maxZoom=f;d._refPlacementPadding=y.pt2px(b.haloSize)+F.TEXT_PLACEMENT_PADDING;d._repeatLabelDistance=c.repeatLabelDistance?y.pt2px(c.repeatLabelDistance):128;a=H.LabelMaterialKey.load(a);a.sdf=!0;d._materialKey=a.data;return d}w._inheritsLoose(k,m);k.fromLabelClass=function(a,c){if("esriServerLinePlacementCenterAlong"===a.labelPlacement){const b=a.symbol;b.xoffset=0;b.yoffset=
0;b.angle=0;b.font.decoration="none"}return new k(a.materialKey,a,a.symbol,c)};var h=k.prototype;h.setZoomLevel=function(a){this._zoomLevel=a};h.bindReferenceTemplate=function(a){let c=q.getXDirection(this._xAlignD),b=q.getYDirection(this._yAlignD);this._refOffsetY=this._refOffsetX=0;if(u.isNone(a))this._refSymbolAndPlacementOffset=r.i8888to32(0,0,Math.floor(127*c+127),Math.floor(127*b+127));else{if("circle"===a.boundsType&&(c||b)){var f=Math.sqrt(c*c+b*b);c/=f;b/=f}f=Math.max(a.height,a.width);this._refSymbolAndPlacementOffset=
r.i8888to32(4*this._refPlacementPadding,f,Math.floor(127*c+127),Math.floor(127*b+127));this._referenceSize=f;this._refPlacementDirX=c;this._refPlacementDirY=b;this._refOffsetX=a.xOffset;this._refOffsetY=a.yOffset}};h._write=function(a,c){if(!u.isNone(this._shapingInfo)){var b=this._shapingInfo,f=c.getDisplayId(),d="esriGeometryPolygon"===c.geometryType?c.readLegacyCentroid():c.readLegacyGeometry();if(d)switch(this._current={out:a,inId:f,inShaping:b,zoomLevel:this._zoomLevel},c.geometryType){case "esriGeometryPolyline":this._placeLineLabels(d);
break;case "esriGeometryPoint":case "esriGeometryPolygon":this._placePointLabels(d);break;default:K("mapview-labeling",`Geometry of type ${c.geometryType} is not supported`)}}};h._isVisible=function(a,c){const b=Math.floor(10*this._current.zoomLevel);return Math.floor(10*a)<=b&&b<=Math.floor(10*c)};h._placePointLabels=function(a){const {out:c,inId:b,inShaping:f}=this._current;this._writeGlyphs(c,b,a,f)};h._placeLineLabels=function(a){a=B.smoothPaths(a.paths,this._current.inShaping.bounds.width);const c=
this._placeSubdivGlyphs.bind(this),b=(this._shapedBox.width+this._repeatLabelDistance)/2;for(const f of a)B.pathDivide(f,b,c,this._repeatLabel)};h._placeSubdivGlyphs=function(a,c,b,f){var d=L(c),e=this._shapedBox.width/2,g=Math.sqrt(this._repeatLabelDistance)/2;b=Math.min(b,f-b);e=this._current.inShaping.isMultiline?25:Math.log2(b/(g+e/2));d=Math.max(this._minZoom,this._current.zoomLevel+1-(0===c?e:Math.min(d,e)));e=this._current.zoomLevel-d;g=this._shapedBox.width/2*2**e;this._current.inShaping.isMultiline?
0===c&&this._placeStraight(a,d):this._allowOverrun&&0>e?this._placeStraightAlong(a,this._minZoom):"parallel"===this._labelPosition?this._placeStraightAlong(a,d):"curved"===this._labelPosition&&this._placeCurved(a,d,g)};h._placeStraight=function(a,c){const {out:b,inId:f,inShaping:d}=this._current,e=Math.ceil((180/Math.PI*a.angle+180)%360);this._outLineLabelAngle=Math.round(254/360*Math.ceil(180/Math.PI*a.angle%360));this._writeGlyphs(b,f,a,d,c);this._outLineLabelAngle=Math.round(254/360*e);this._writeGlyphs(b,
f,a,d,c)};h._placeCurved=function(a,c,b){const {out:f,inId:d}=this._current;f.metricStart(d,c,a.x,a.y,0,0,0,0);const e=a.clone(),g=(180/Math.PI*a.angle+180)%360;this._outLineLabelAngle=Math.round(180/Math.PI*a.angle%360*(254/360));this._placeFirst(e,c,1);this._placeBack(a,e,c,b,1);this._placeForward(a,e,c,b,1);this._outLineLabelAngle=Math.round(254/360*g);this._placeFirst(e,c,0);this._placeBack(a,e,c,b,0);this._placeForward(a,e,c,b,0);f.metricEnd()};h._placeStraightAlong=function(a,c){const {out:b,
inId:f}=this._current;b.metricStart(f,c,a.x,a.y,0,0,0,0);const d=a.clone(),e=(180/Math.PI*a.angle+180)%360;this._outLineLabelAngle=Math.round(180/Math.PI*a.angle%360*(254/360));this._placeFirst(d,c,1,!0);this._outLineLabelAngle=Math.round(254/360*e);this._placeFirst(d,c,0,!0);b.metricEnd()};h._placeBack=function(a,c,b,f,d){const e=a.clone();for(a=a.backwardLength+0;e.prev()&&!(a>=f);)this._placeOnSegment(e,c,a,b,-1,d),a+=e.length+0};h._placeForward=function(a,c,b,f,d){const e=a.clone();for(a=a.remainingLength+
0;e.next()&&!(a>=f);)this._placeOnSegment(e,c,a,b,1,d),a+=e.length+0};h._placeFirst=function(a,c,b,f=!1){const d=this._current.inShaping;var e=d.glyphs;const g=this._current.zoomLevel,{out:p,inId:v}=this._current;for(const l of e)e=l.x>d.bounds.x?b:1-b,e=Math.max(0,g+Math.log2(Math.abs(l.x+l.width/2-d.bounds.x)/(e*a.remainingLength+(1-e)*a.backwardLength))),e=Math.max(c,f?0:e),l.maxZoom=25,l.angle=a.angle+(1-b)*Math.PI,l.minZoom=e,this._writeGlyph(p,v,a.x,a.y,l),b&&this._isVisible(l.minZoom,l.maxZoom)&&
(e=l.bounds,p.metricBoxWrite(e.center[0],e.center[1],e.width,e.height))};h._placeOnSegment=function(a,c,b,f,d,e){var g=this._current.inShaping.glyphs;const {out:p,inId:v}=this._current,l=this._current.inShaping,C=this._current.zoomLevel;var M=a.x+a.dx/a.length*-d*b,N=a.y+a.dy/a.length*-d*b;for(const n of g)if((g=n.x>l.bounds.x?e:1-e)&&1===d||!g&&-1===d){var t=Math.abs(n.x+n.width/2-l.bounds.x);g=Math.max(0,C+Math.log2(t/b)-.1);t=Math.max(f,C+Math.log2(t/(b+a.length+0)));0!==g&&(n.angle=a.angle+(1-
e)*Math.PI,n.minZoom=t,n.maxZoom=g,this._writeGlyph(p,v,M,N,n),e&&this._isVisible(n.minZoom,n.maxZoom)&&(g=n.bounds,p.metricBoxWrite(g.center[0]+(a.x-c.x),g.center[1]+(a.y-c.y),g.width,g.height)))}};h._writeGlyphs=function(a,c,b,f,d=this._minZoom){if(!(0>b.x||512<=b.x||0>b.y||512<=b.y)){var e=b.x+this._refOffsetX;b=b.y-this._refOffsetY;for(const g of f.glyphs)g.minZoom=d,g.maxZoom=this._maxZoom,this._writeGlyph(a,c,e,b,g);f=f.boundsT;a.metricStart(c,d,e,b,this._refPlacementDirX,this._refPlacementDirY,
this._referenceSize,this._materialKey);a.metricBoxWrite(f.center[0],f.center[1],f.width,f.height);a.metricEnd()}};h._writeVertexCommon=function(a,c,b,f){const d=this._color,e=this._haloColor,g=r.i8888to32(0,0,this._size,this._haloSize);f=r.i8888to32(Math.floor(10*Math.max(f.minZoom,this._minZoom)),Math.floor(10*Math.min(f.maxZoom,this._maxZoom)),this._outLineLabelAngle,0);a.vertexWrite(b);a.vertexWrite(c);a.vertexWrite(d);a.vertexWrite(e);a.vertexWrite(g);a.vertexWrite(this._refSymbolAndPlacementOffset);
a.vertexWrite(f)};w._createClass(k,[{key:"_shapedBox",get:function(){return u.unwrap(this._shapingInfo).bounds}}]);return k}(I)});