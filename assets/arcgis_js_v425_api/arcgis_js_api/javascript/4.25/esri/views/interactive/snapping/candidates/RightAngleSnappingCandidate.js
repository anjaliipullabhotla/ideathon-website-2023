// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../SnappingDomain ../snappingUtils ./SnappingCandidate ../hints/LineSnappingHint ../hints/RightAngleSnappingHint".split(" "),function(b,k,n,l,g,m,p){g=function(c){function h({coordinateHelper:a,targetPoint:d,constraint:f,previousVertex:e,otherVertex:q,otherVertexType:r,objectId:t,elevationInfo:u}){a=c.call(this,a,d,f,u,n.SnappingDomain.SELF)||this;a.previousVertex=e;a.otherVertex=q;a.otherVertexType=r;a.objectId=t;return a}k._inheritsLoose(h,
c);k._createClass(h,[{key:"hints",get:function(){const a=this.previousVertex,d=this.otherVertexType===b.OtherVertexType.CENTER?this.otherVertex:this.targetPoint,f=this.otherVertexType===b.OtherVertexType.CENTER?this.targetPoint:this.otherVertex,e=this.elevationInfo;return[new m.LineSnappingHint(l.LineSegmentHintType.TARGET,d,f,e,this.domain),new m.LineSnappingHint(l.LineSegmentHintType.REFERENCE,a,d,e,this.domain),new p.RightAngleSnappingHint(this.previousVertex,d,f,e,this.domain)]}}]);return h}(g.SnappingCandidate);
b.OtherVertexType=void 0;(function(c){c[c.NEXT=0]="NEXT";c[c.CENTER=1]="CENTER"})(b.OtherVertexType||(b.OtherVertexType={}));b.RightAngleSnappingCandidate=g;Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});