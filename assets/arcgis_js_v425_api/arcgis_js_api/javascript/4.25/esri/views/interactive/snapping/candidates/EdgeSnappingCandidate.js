// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../SnappingConstraint ../snappingUtils ./FeatureSnappingCandidate ../hints/LineSnappingHint".split(" "),function(d,e,g,h,b,k){b=function(f){function c(a){return f.call(this,{...a,constraint:new g.LineConstraint(a.coordinateHelper,a.edgeStart,a.edgeEnd)})||this}e._inheritsLoose(c,f);e._createClass(c,[{key:"hints",get:function(){return[new k.LineSnappingHint(h.LineSegmentHintType.REFERENCE,this.constraint.start,this.constraint.end,this.elevationInfo,
this.domain)]}}]);return c}(b.FeatureSnappingCandidate);d.EdgeSnappingCandidate=b;Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});