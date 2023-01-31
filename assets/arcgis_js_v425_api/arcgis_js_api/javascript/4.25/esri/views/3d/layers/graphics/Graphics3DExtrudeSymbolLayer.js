// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/has ../../../../core/Error ../../../../core/lang ../../../../core/maybe ../../../../core/unitUtils ../../../../chunks/earcut ../../../../chunks/mat3 ../../../../chunks/mat3f64 ../../../../chunks/mat4 ../../../../chunks/mat4f64 ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../geometry/projection ../../../../geometry/support/aaBoundingBox ../../../../geometry/support/buffer/BufferView ../../../../chunks/vec32 ../../../../layers/graphics/data/SnappingCandidate ../../../../renderers/support/renderingInfoUtils ../../../ViewingMode ./elevationAlignmentUtils ./ElevationContext ./Graphics3DObject3DGraphicLayer ./Graphics3DSymbolLayer ./graphicUtils ./interfaces ./polygonUtils ../support/edgeUtils ../../support/debugFlags ../../support/ElevationProvider ../../support/renderInfoUtils/polygon ../../webgl-engine/lib/basicInterfaces ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/Object3D ../../webgl-engine/lib/VertexAttribute ../../webgl-engine/materials/DefaultMaterial".split(" "),
function(fa,Z,ha,wa,aa,I,xa,ya,za,Aa,ia,O,A,D,Ba,T,ja,ka,ba,Ca,Da,U,Ea,Fa,Ga,la,ma,Ha,Ia,Ja,Ka,La,V,Ma,Na,B,na){function oa(g,m,e,c,a){var b=Array(g.length).fill(0);c=[[B.VertexAttribute.POSITION,{size:3,data:e.positions,exclusive:!0}],[B.VertexAttribute.NORMAL,{size:3,data:e.normals,exclusive:!0}],[B.VertexAttribute.COLOR,{size:4,data:c,exclusive:!0}],[B.VertexAttribute.SIZE,{size:1,data:e.heights,exclusive:!0}]];b=[[B.VertexAttribute.POSITION,g],[B.VertexAttribute.NORMAL,g],[B.VertexAttribute.COLOR,
b]];e.elevation&&(c.push([B.VertexAttribute.MAPPOS,{size:3,data:e.elevation}]),b.push([B.VertexAttribute.MAPPOS,g]));return new Ma.Geometry(c,b,V.PrimitiveType.Triangle,a,m)}function Oa(g,m,e,c,a,b,d,p,h,n,l,k,u){let t=0;var f=2*c.count,q=c.index,r=c.count,E=e.length/3,x=f;A.copy(y,k);const w=0<l?1:-1;f=3*q;let v=0;q=3*v;let z=r;k=3*z;for(let F=0;F<r;++F)u&&(y[0]=g[f+0],y[1]=g[f+1],y[2]=g[f+2],A.normalize(y,y)),a[q+0]=g[f+0],a[q+1]=g[f+1],a[q+2]=g[f+2],b[q+0]=m[f+0],b[q+1]=m[f+1],b[q+2]=m[f+2],d[q+
0]=-w*y[0],d[q+1]=-w*y[1],d[q+2]=-w*y[2],p[v]=0,a[k+0]=g[f+0]+l*y[0],a[k+1]=g[f+1]+l*y[1],a[k+2]=g[f+2]+l*y[2],b[k+0]=m[f+0],b[k+1]=m[f+1],b[k+2]=m[f+2],d[k+0]=w*y[0],d[k+1]=w*y[1],d[k+2]=w*y[2],p[z]=l,q+=3,k+=3,f+=3,v+=1,z+=1;q=f=0;k=3*x;g=0>l?pa:qa;m=0>l?qa:pa;for(u=0;u<E;++u)n[q+0]=e[f+g[0]],n[q+1]=e[f+g[1]],n[q+2]=e[f+g[2]],h[k+0]=e[f+m[0]]+r,h[k+1]=e[f+m[1]]+r,h[k+2]=e[f+m[2]]+r,q+=3,k+=3,f+=3;e=2*c.count;f=0;ra(a,b,p,d,t,c.pathLengths[0],c.count,e,h,f,l);e+=4*c.pathLengths[0];f+=2*c.pathLengths[0];
t+=c.pathLengths[0];for(n=1;n<c.pathLengths.length;++n)ra(a,b,p,d,t,c.pathLengths[n],c.count,e,h,f,l),e+=4*c.pathLengths[n],f+=2*c.pathLengths[n],t+=c.pathLengths[n]}function W(g,m,e,c,a,b,d){c[b]=c[d];d*=3;b*=3;g[b+0]=g[d+0];g[b+1]=g[d+1];g[b+2]=g[d+2];m[b+0]=m[d+0];m[b+1]=m[d+1];m[b+2]=m[d+2];e[b+0]=a[0];e[b+1]=a[1];e[b+2]=a[2]}function ra(g,m,e,c,a,b,d,p,h,n,l){let k=a,u=a+1,t=a+d,f=a+d+1,q=p,r=p+1,E=p+2*b;p=p+2*b+1;0>l&&(k=a+d+1,f=a);n*=3;for(let M=0;M<b;++M){M===b-1&&(0<l?(u=a,f=a+d):(u=a,k=
a+d));var x=g,w=k,v=u,z=t,F=P;w*=3;v*=3;z*=3;A.set(ca,x[w++],x[w++],x[w++]);A.set(sa,x[v++],x[v++],x[v++]);A.set(ta,x[z++],x[z++],x[z++]);A.subtract(ua,sa,ca);A.subtract(va,ta,ca);A.cross(F,va,ua);A.normalize(F,F);W(g,m,c,e,P,q,k);W(g,m,c,e,P,r,u);W(g,m,c,e,P,E,t);W(g,m,c,e,P,p,f);h[n++]=q;h[n++]=E;h[n++]=p;h[n++]=q;h[n++]=p;h[n++]=r;k++;u++;t++;f++;q+=2;r+=2;E+=2;p+=2}}function Pa(g,m,e,c){g=g.stageObject;const a=g.geometryRecords,b=a.length,d="absolute-height"!==m.mode;let p=0;const h=g.transformation,
n=ia.invert(O.create(),h);for(let k=0;k<b;k+=2){const u=a[k].geometry,t=u.getMutableAttribute(B.VertexAttribute.POSITION).data,f=u.vertexAttributes.get(B.VertexAttribute.SIZE).data;var l=u.vertexAttributes.get(B.VertexAttribute.MAPPOS).data;l=new Ka.SamplePosition(l);const q=t.length/3;let r=0,E=!1,x=0;const w=e.spatialReference;for(let v=0;v<q;v++){N[0]=t[r];N[1]=t[r+1];N[2]=t[r+2];U.evaluateElevationInfoAtPoint(l,e,m,c,X);d&&(x+=X.sampledElevation);Ja.TESTS_DISABLE_OPTIMIZATIONS?(A.set(C,l.array[l.offset+
0],l.array[l.offset+1],X.z+f[r/3]),I.isSome(w)&&c.toRenderCoords(C,w,C)):(A.set(C,t[r+0],t[r+1],t[r+2]),A.transformMat4(C,C,h),c.setAltitude(C,X.z+f[r/3]));A.transformMat4(C,C,n);t[r]=C[0];t[r+1]=C[1];t[r+2]=C[2];const z=.01/c.unitInMeters;if(Math.abs(N[0]-t[r])>=z||Math.abs(N[1]-t[r+1])>=z||Math.abs(N[2]-t[r+2])>=z)E=!0;l.offset+=3;r+=3}E&&(u.invalidateBoundingInfo(),g.geometryVertexAttrsUpdated(a[k]),a[k+1].geometry.invalidateBoundingInfo(),g.geometryVertexAttrsUpdated(a[k+1]));p+=x/q}return p/
b}const Qa=["polygon","extent"];ha=function(g){function m(c,a,b,d){c=g.call(this,c,a,b,d)||this;c.ensureDrapedStatus(!1);return c}Z._inheritsLoose(m,g);var e=m.prototype;e.doLoad=function(){var c=Z._asyncToGenerator(function*(){if(!this._drivenProperties.size){var a=la.validateSymbolLayerSize(this._getSymbolSize());if(a)throw new wa("graphics3dextrudesymbollayer:invalid-size",a);}a=I.get(this.symbolLayer,"material","color");var b=this._getCombinedOpacityAndColor(a);a=D.fromArray(b);b=b[3];const d=
1>b||this.needsDrivenTransparentPass;a={usePBR:this._context.physicalBasedRenderingEnabled,isSchematic:!0,diffuse:a,ambient:a,opacity:b,transparent:d,cullFace:d?V.CullFaceOptions.None:V.CullFaceOptions.Back,hasVertexColors:!0,hasSlicePlane:this._context.slicePlaneEnabled,castShadows:this.symbolLayer.castShadows,offsetTransparentBackfaces:!0};this._material=new na.DefaultMaterial(a);this._bottomMaterial=new na.DefaultMaterial({...a,cullFace:V.CullFaceOptions.Back});this._context.stage.add(this._material);
this._context.stage.add(this._bottomMaterial)});return function(){return c.apply(this,arguments)}}();e.destroy=function(){g.prototype.destroy.call(this);this._material&&(this._context.stage.remove(this._material),this._context.stage.remove(this._bottomMaterial))};e.createGraphics3DGraphic=function(c){const a=c.graphic;if(!this._validateGeometry(a.geometry,Qa,this.symbolLayer.type))return null;const b=this._getVertexOpacityAndColor(c.renderingInfo,255),d=this.setGraphicElevationContext(a,new Ea.ElevationContext);
return this._createAs3DShape(a,c.renderingInfo,b,d,a.uid)};e.layerOpacityChanged=function(c,a){var b=I.get(this.symbolLayer,"material","color");b=this._getCombinedOpacity(b);const d=1>b||this.needsDrivenTransparentPass;this._material.setParameters({opacity:b,transparent:d});this._bottomMaterial.setParameters({opacity:b,transparent:d});const p=this._getLayerOpacity();c.forEach(h=>{h=a(h);I.isSome(h)&&h.layerOpacityChanged(p,this._context.isAsync)})};e.layerElevationInfoChanged=function(c,a){return this.updateGraphics3DGraphicElevationInfo(c,
a,U.needsElevationUpdates3D)};e.slicePlaneEnabledChanged=function(c,a){this._material.setParameters({hasSlicePlane:this._context.slicePlaneEnabled});this._bottomMaterial.setParameters({hasSlicePlane:this._context.slicePlaneEnabled});c.forEach(b=>{b=a(b);I.isSome(b)&&b.slicePlaneEnabledChanged(this._context.slicePlaneEnabled,this._context.isAsync)});return!0};e.physicalBasedRenderingChanged=function(){this._material.setParameters({usePBR:this._context.physicalBasedRenderingEnabled,isSchematic:!0});
this._bottomMaterial.setParameters({usePBR:this._context.physicalBasedRenderingEnabled,isSchematic:!0});return!0};e.pixelRatioChanged=function(){return!0};e._getExtrusionSize=function(c){c=c.size&&this._drivenProperties.size?Ca.getDriverAxisSizeValue(c.size,2)??0:this._getSymbolSize();return c/=this._context.renderCoordsHelper.unitInMeters};e.applyRendererDiff=function(c,a){return this._drivenPropertiesChanged(a)?ma.ApplyRendererDiffResult.Recreate_Symbol:ma.ApplyRendererDiffResult.Recreate_Graphics};
e.queryForSnapping=function(){var c=Z._asyncToGenerator(function*(a,b,d,p){b=this._getExtrusionSize(d)*this._context.renderCoordsHelper.unitInMeters/xa.getMetersPerVerticalUnitForSR(b);const {objectId:h,target:n}=a;d=aa.clone(n);d.z=(d.z??0)+b;switch(a.type){case "edge":const {start:l,end:k}=a;a=aa.clone(l);p=aa.clone(k);a.z=(a.z??0)+b;p.z=(p.z??0)+b;return[ba.makeEdgeCandidate(h,d,Infinity,a,p)];case "vertex":return[ba.makeVertexCandidate(h,d,Infinity),ba.makeEdgeCandidate(h,n,Infinity,n,d)];default:return[]}});
return function(a,b,d,p){return c.apply(this,arguments)}}();e._getSymbolSize=function(){return this.symbolLayer.size??1};e._createAs3DShape=function(c,a,b,d,p){var h=Ha.geometryAsPolygon(c.geometry);if(I.isNone(h))return null;if(0===h.rings.length||!h.rings.some(Q=>0<Q.length))return this._logGeometryValidationWarnings(h.rings,"rings","ExtrudeSymbol3DLayer"),null;c=La.geometryToRenderInfo(h,this._context.elevationProvider,this._context.renderCoordsHelper,d);this._logGeometryCreationWarnings(c,h.rings,
"rings","ExtrudeSymbol3DLayer");var n=la.computeCentroid(h);if(I.isNone(n))return null;var l=[];const k=[],u=[],t=T.create(),f=O.create(),q=D.create(),r=this._context.renderCoordsHelper.viewingMode===Da.ViewingMode.Global;r||this._context.renderCoordsHelper.worldUpAtPosition(null,q);Ba.computeTranslationToOriginAndRotation(h.spatialReference,[n.x,n.y,0],f,this._context.renderCoordsHelper.spatialReference);h=O.create();ia.invert(h,f);n=Aa.create();za.normalFromMat4(n,h);const {polygons:E,mapPosition:x,
position:w}=c;var v=w.length/3;const z=new Float64Array(18*v),F=new Float64Array(18*v),M=new Float64Array(18*v);v=new Float64Array(6*v);let L=0;for(let Q=0;Q<E.length;++Q){var J=E[Q];const da=J.count;if(this._context.clippingExtent&&(T.empty(t),T.expandWithBuffer(t,J.mapPosition),!T.intersectsClippingArea(t,this._context.clippingExtent)))continue;const Y=ya.earcut(J.mapPosition,J.holeIndices,3);if(0===Y.length)continue;var R=Array(6*da+Y.length),S=Array(Y.length),K=6*da,G=3*z.BYTES_PER_ELEMENT;G=
new ja.BufferViewVec3f64(z.buffer,L*G,G,(L+K)*G);var H=3*F.BYTES_PER_ELEMENT;H=new ja.BufferViewVec3f64(F.buffer,L*H,H,(L+K)*H);const ea=new Float64Array(M.buffer,3*L*M.BYTES_PER_ELEMENT,3*K);K=new Float64Array(v.buffer,1*L*v.BYTES_PER_ELEMENT,1*K);const Ra=this._getExtrusionSize(a);Oa(w,x,Y,J,G.typedBuffer,ea,H.typedBuffer,K,R,S,Ra,q,r);ka.transformMat4(G,G,h);ka.transformMat3(H,H,n);L+=6*da;J=this._context.stage.renderView._getObjectAndLayerIdColor({graphicUid:p,layerUid:this._context.layer.uid});
R=oa(R,R.length-S.length,{positions:G.typedBuffer,elevation:ea,normals:H.typedBuffer,heights:K},b,J);l.push(R);k.push(this._material);u.push(O.IDENTITY);S=oa(S,0,{positions:G.typedBuffer,elevation:ea,normals:H.typedBuffer,heights:K},b,J);l.push(S);k.push(this._bottomMaterial);u.push(O.IDENTITY)}if(0===l.length)return null;a=new Na.Object3D({geometries:l,materials:k,transformations:u,metadata:{layerUid:this._context.layer.uid,graphicUid:p,isElevationSource:!0}});a.transformation=f;b=Ia.createMaterial(this.symbolLayer,
{opacity:this._getLayerOpacity()});b=I.isSome(b)?{baseMaterial:this._material,edgeMaterials:[b],properties:{mergeGeometries:!0,hasSlicePlane:this._context.slicePlaneEnabled}}:null;l=new Fa.Graphics3DObject3DGraphicLayer(this,a,l,null,null,Pa,d,b);l.alignedSampledElevation=c.sampledElevation;l.needsElevationUpdates=U.needsElevationUpdates3D(d.mode);return l};return m}(Ga.Graphics3DSymbolLayer);const P=D.create(),ca=D.create(),sa=D.create(),ta=D.create(),ua=D.create(),va=D.create(),N=D.create(),C=D.create(),
y=D.create(),X=new U.SampleElevationInfo,qa=[0,2,1],pa=[0,1,2];fa.Graphics3DExtrudeSymbolLayer=ha;Object.defineProperties(fa,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});