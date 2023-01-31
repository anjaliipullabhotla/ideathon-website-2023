// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/has ../../../../core/Logger ../../../../core/mathUtils ../../../../core/maybe ../../../../core/screenUtils ../../../../chunks/vec2 ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../chunks/vec4f64 ../../../../geometry/support/frustum ../../../../geometry/support/lineSegment ../../../../geometry/support/plane ../../support/buffer/InterleavedLayout ../core/shaderLibrary/ShaderOutput ../lib/geometryDataUtils ../lib/GLMaterial ../lib/Material ../lib/RenderSlot ../lib/Util ../lib/VertexAttribute ./VisualVariablePassParameters ./renderers/utils ../shaders/LineMarkerTechniqueConfiguration ../../../../chunks/RibbonLine.glsl ../shaders/RibbonLineTechnique ../shaders/RibbonLineTechniqueConfiguration".split(" "),
function(ca,da,Z,ua,ea,O,V,va,g,A,wa,aa,P,x,xa,F,ya,za,fa,M,Aa,h,Ba,Ca,Da,Ea,na,oa){function N(k,u,b,a,c){for(let d=0;d<c;d++)b[a++]=k[u++];return a}function ha(k,u,b){u=u.get(h.VertexAttribute.POSITION).data;b=b?b.get(h.VertexAttribute.POSITION):null;return k.isClosed?b?2<b.length:6<u.length:!1}var B;(function(k){k[k.LEFT_JOIN_START=-2]="LEFT_JOIN_START";k[k.LEFT_JOIN_END=-1]="LEFT_JOIN_END";k[k.LEFT_CAP_START=-4]="LEFT_CAP_START";k[k.LEFT_CAP_END=-5]="LEFT_CAP_END";k[k.RIGHT_JOIN_START=2]="RIGHT_JOIN_START";
k[k.RIGHT_JOIN_END=1]="RIGHT_JOIN_END";k[k.RIGHT_CAP_START=4]="RIGHT_CAP_START";k[k.RIGHT_CAP_END=5]="RIGHT_CAP_END"})(B||(B={}));let Ja=function(k){function u(a){a=k.call(this,a,new pa)||this;a._configuration=new oa.RibbonLineTechniqueConfiguration;a._vertexAttributeLocations=na.vertexAttributeLocations;a._layout=a.createLayout();return a}da._inheritsLoose(u,k);var b=u.prototype;b.isClosed=function(a,c){return this.parameters.isClosed?c?2<c.length:6<a.length:!1};b.getConfiguration=function(a,c){this._configuration.output=
a;this._configuration.draped=c.slot===M.RenderSlot.DRAPED_MATERIAL;a=O.isSome(this.parameters.stipplePattern)&&a!==F.ShaderOutput.Highlight;this._configuration.stippleEnabled=a;this._configuration.stippleOffColorEnabled=a&&O.isSome(this.parameters.stippleOffColor);this._configuration.stippleScaleWithLineWidth=a&&this.parameters.stippleScaleWithLineWidth;this._configuration.stipplePreferContinuous=a&&this.parameters.stipplePreferContinuous;this._configuration.hasSlicePlane=this.parameters.hasSlicePlane;
this._configuration.hasOccludees=this.parameters.hasOccludees;this._configuration.roundJoins="round"===this.parameters.join;this._configuration.capType=this.parameters.cap;a=this._configuration;if(O.isSome(this.parameters.markerParameters)){var d=this.parameters.markerParameters;d=d.anchor===Da.LineMarkerAnchor.Tip&&d.hideOnShortSegments&&"begin-end"===d.placement&&d.worldSpace}else d=!1;a.applyMarkerOffset=d;this._configuration.hasPolygonOffset=this.parameters.hasPolygonOffset;this._configuration.writeDepth=
this.parameters.writeDepth;this._configuration.vvColor=this.parameters.vvColorEnabled;this._configuration.vvOpacity=this.parameters.vvOpacityEnabled;this._configuration.vvSize=this.parameters.vvSizeEnabled;this._configuration.innerColorEnabled=0<this.parameters.innerWidth&&O.isSome(this.parameters.innerColor);this._configuration.falloffEnabled=0<this.parameters.falloff;this._configuration.occluder=this.parameters.renderOccluded===fa.RenderOccludedFlag.OccludeAndTransparentStencil;this._configuration.transparencyPassType=
c.transparencyPassType;this._configuration.hasMultipassTerrain=c.multipassTerrain.enabled;this._configuration.cullAboveGround=c.multipassTerrain.cullAboveGround;this._configuration.wireframe=this.parameters.wireframe;return this._configuration};b.intersect=function(a,c,d,m,n,e,f,t,q){O.isSome(q)?this._intersectDrapedLineGeometry(a,m,q,e,f):this._intersectLineGeometry(a,c,d,m,f)};b._intersectDrapedLineGeometry=function(a,c,d,m,n){if(c.options.selectionMode){c=a.vertexAttributes.get(h.VertexAttribute.POSITION).data;
var e=a.vertexAttributes.get(h.VertexAttribute.SIZE),f=this.parameters.width;this.parameters.vvSizeEnabled?(e=a.vertexAttributes.get(h.VertexAttribute.SIZEFEATUREATTRIBUTE).data[0],f*=ea.clamp(this.parameters.vvSizeOffset[0]+e*this.parameters.vvSizeFactor[0],this.parameters.vvSizeMinSize[0],this.parameters.vvSizeMaxSize[0])):e&&(f*=e.data[0]);e=m[0];m=m[1];a=(f/2+4)*a.screenToWorldRatio;f=Number.MAX_VALUE;var t=0;for(let G=0;G<c.length-5;G+=3){var q=c[G],w=c[G+1],D=e-q,l=m-w;q=c[G+3]-q;w=c[G+4]-w;
const J=ea.clamp((q*D+w*l)/(q*q+w*w),0,1);D=q*J-D;l=w*J-l;l=D*D+l*l;l<f&&(f=l,t=G/3)}f<a*a&&n(d.dist,d.normal,t,!1)}};b._intersectLineGeometry=function(a,c,d,m,n){if(m.options.selectionMode&&!Ca.isInstanceHidden(c))if(Aa.isTranslationMatrix(d)){var e=a.vertexAttributes,f=e.get(h.VertexAttribute.POSITION).data;c=this.parameters.width;if(this.parameters.vvSizeEnabled){var t=e.get(h.VertexAttribute.SIZEFEATUREATTRIBUTE).data[0];c*=ea.clamp(this.parameters.vvSizeOffset[0]+t*this.parameters.vvSizeFactor[0],
this.parameters.vvSizeMinSize[0],this.parameters.vvSizeMaxSize[0])}else e.has(h.VertexAttribute.SIZE)&&(c*=e.get(h.VertexAttribute.SIZE).data[0]);var q=m.camera,w=Fa;va.copy(w,m.point);t=c*q.pixelRatio/2+4*q.pixelRatio;g.set(X[0],w[0]-t,w[1]+t,0);g.set(X[1],w[0]+t,w[1]+t,0);g.set(X[2],w[0]+t,w[1]-t,0);g.set(X[3],w[0]-t,w[1]-t,0);for(c=0;4>c;c++)if(!q.unprojectFromRenderScreen(X[c],K[c]))return;x.fromPoints(q.eye,K[0],K[1],ia);x.fromPoints(q.eye,K[1],K[2],ja);x.fromPoints(q.eye,K[2],K[3],ka);x.fromPoints(q.eye,
K[3],K[0],la);var D=Number.MAX_VALUE;c=0;a=ha(this.parameters,e,a.indices)?f.length-2:f.length-5;for(e=0;e<a;e+=3){y[0]=f[e]+d[12];y[1]=f[e+1]+d[13];y[2]=f[e+2]+d[14];var l=(e+3)%f.length;z[0]=f[l]+d[12];z[1]=f[l+1]+d[13];z[2]=f[l+2]+d[14];if(!(0>x.signedDistance(ia,y)&&0>x.signedDistance(ia,z)||0>x.signedDistance(ja,y)&&0>x.signedDistance(ja,z)||0>x.signedDistance(ka,y)&&0>x.signedDistance(ka,z)||0>x.signedDistance(la,y)&&0>x.signedDistance(la,z))){q.projectToRenderScreen(y,Q);q.projectToRenderScreen(z,
R);if(0>Q[2]&&0<R[2])g.subtract(H,y,z),l=q.frustum,l=-x.signedDistance(l[aa.PlaneIndex.NEAR],y)/g.dot(H,x.normal(l[aa.PlaneIndex.NEAR])),g.scale(H,H,l),g.add(y,y,H),q.projectToRenderScreen(y,Q);else if(0<Q[2]&&0>R[2])g.subtract(H,z,y),l=q.frustum,l=-x.signedDistance(l[aa.PlaneIndex.NEAR],z)/g.dot(H,x.normal(l[aa.PlaneIndex.NEAR])),g.scale(H,H,l),g.add(z,z,H),q.projectToRenderScreen(z,R);else if(0>Q[2]&&0>R[2])continue;Q[2]=0;R[2]=0;l=P.distance2(P.fromPoints(Q,R,qa),w);l<D&&(D=l,g.copy(ra,y),g.copy(sa,
z),c=e/3)}}d=m.rayBegin;m=m.rayEnd;D<t*t&&(f=Number.MAX_VALUE,P.closestLineSegmentPoint(P.fromPoints(ra,sa,qa),P.fromPoints(d,m,Ga),S)&&(g.subtract(S,S,d),f=g.length(S),g.scale(S,S,1/f),f/=g.distance(d,m)),n(f,S,c,!1))}else ua.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial").error("intersection assumes a translation-only matrix")};b.computeAttachmentOrigin=function(a,c){const d=a.vertexAttributes;if(!d)return!1;a=a.indices;const m=d.get(h.VertexAttribute.POSITION);return ya.computeAttachmentOriginLines(m,
a?a.get(h.VertexAttribute.POSITION):null,a&&ha(this.parameters,d,a),c)};b.createLayout=function(){const a=xa.newLayout().vec3f(h.VertexAttribute.POSITION).f32(h.VertexAttribute.SUBDIVISIONFACTOR).vec2f(h.VertexAttribute.UV0).vec3f(h.VertexAttribute.AUXPOS1).vec3f(h.VertexAttribute.AUXPOS2);this.parameters.vvSizeEnabled?a.f32(h.VertexAttribute.SIZEFEATUREATTRIBUTE):a.f32(h.VertexAttribute.SIZE);this.parameters.vvColorEnabled?a.f32(h.VertexAttribute.COLORFEATUREATTRIBUTE):a.vec4f(h.VertexAttribute.COLOR);
this.parameters.vvOpacityEnabled&&a.f32(h.VertexAttribute.OPACITYFEATUREATTRIBUTE);Z("enable-feature:objectAndLayerId-rendering")&&a.vec4u8(h.VertexAttribute.OBJECTANDLAYERIDCOLOR);return a};b.createBufferWriter=function(){return new Ha(this._layout,this.parameters)};b.requiresSlot=function(a,c){return c===F.ShaderOutput.Color||c===F.ShaderOutput.Alpha||c===F.ShaderOutput.Highlight||c===F.ShaderOutput.Depth||c===F.ShaderOutput.ObjectAndLayerIdColor?a===M.RenderSlot.DRAPED_MATERIAL?!0:this.parameters.renderOccluded===
fa.RenderOccludedFlag.OccludeAndTransparentStencil?a===M.RenderSlot.OPAQUE_MATERIAL||a===M.RenderSlot.OCCLUDER_MATERIAL||a===M.RenderSlot.TRANSPARENT_OCCLUDER_MATERIAL:c===F.ShaderOutput.Color||c===F.ShaderOutput.Alpha?a===(this.parameters.writeDepth?M.RenderSlot.TRANSPARENT_MATERIAL:M.RenderSlot.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL):a===M.RenderSlot.OPAQUE_MATERIAL:!1};b.createGLMaterial=function(a){return new Ia(a)};b.validateParameters=function(a){"miter"!==a.join&&(a.miterLimit=0);O.isSome(a.markerParameters)&&
(a.markerScale=a.markerParameters.width/a.width)};return u}(fa.Material),Ia=function(k){function u(){var a=k.apply(this,arguments)||this;a._stipplePattern=null;return a}da._inheritsLoose(u,k);var b=u.prototype;b.dispose=function(){k.prototype.dispose.call(this);this._stippleTextureRepository.release(this._stipplePattern);this._stipplePattern=null};b._updateOccludeeState=function(a){a.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:a.hasOccludees})};
b.beginSlot=function(a){this._output!==F.ShaderOutput.Color&&this._output!==F.ShaderOutput.Alpha||this._updateOccludeeState(a);const c=this._material.parameters.stipplePattern;this._stipplePattern!==c&&(this._material.setParameters(this._stippleTextureRepository.swap(this._stipplePattern,c)),this._stipplePattern=c);return this.ensureTechnique(na.RibbonLineTechnique,a)};return u}(za),pa=function(k){function u(){var b=k.apply(this,arguments)||this;b.width=0;b.color=wa.ONES;b.join="miter";b.cap=oa.CapType.BUTT;
b.miterLimit=5;b.writeDepth=!0;b.hasPolygonOffset=!1;b.stippleTexture=null;b.stippleScaleWithLineWidth=!1;b.stipplePreferContinuous=!0;b.markerParameters=null;b.markerScale=1;b.hasSlicePlane=!1;b.vvFastUpdate=!1;b.isClosed=!1;b.falloff=0;b.innerWidth=0;b.hasOccludees=!1;b.wireframe=!1;return b}da._inheritsLoose(u,k);return u}(Ba.VisualVariablePassParameters),Ha=function(){function k(b,a){this._parameters=a;this.numJoinSubdivisions=0;this.vertexBufferLayout=b;b=a.stipplePattern?1:0;switch(this._parameters.join){case "miter":case "bevel":this.numJoinSubdivisions=
b;break;case "round":this.numJoinSubdivisions=Ea.NUM_ROUND_JOIN_SUBDIVISIONS+b}}var u=k.prototype;u._isClosed=function(b){return ha(this._parameters,b.vertexAttributes,b.indices)};u.allocate=function(b){return this.vertexBufferLayout.createBuffer(b)};u.elementCount=function(b){var a=b.indices.get(h.VertexAttribute.POSITION).length/2+1;b=this._isClosed(b);a=(b?2:4)+((b?a:a-1)-(b?0:1))*(2*this.numJoinSubdivisions+4);a+=2;this._parameters.wireframe&&(a=2+4*(a-2));return a};u.write=function(b,a,c,d,m){a=
Ka;const n=La,e=Ma,f=c.vertexAttributes.get(h.VertexAttribute.POSITION).data;var t=c.indices&&c.indices.get(h.VertexAttribute.POSITION);const q=c.vertexAttributes.get(h.VertexAttribute.DISTANCETOSTART)?.data;t&&t.length!==2*(f.length/3-1)&&console.warn("RibbonLineMaterial does not support indices");let w=1,D=0;this._parameters.vvSizeEnabled?D=c.vertexAttributes.get(h.VertexAttribute.SIZEFEATUREATTRIBUTE).data[0]:c.vertexAttributes.has(h.VertexAttribute.SIZE)&&(w=c.vertexAttributes.get(h.VertexAttribute.SIZE).data[0]);
let l=[1,1,1,1],G=0;this._parameters.vvColorEnabled?G=c.vertexAttributes.get(h.VertexAttribute.COLORFEATUREATTRIBUTE).data[0]:c.vertexAttributes.has(h.VertexAttribute.COLOR)&&(l=c.vertexAttributes.get(h.VertexAttribute.COLOR).data);let J=null;Z("enable-feature:objectAndLayerId-rendering")&&(J=c.objectAndLayerIdColor);let ta=0;this._parameters.vvOpacityEnabled&&(ta=c.vertexAttributes.get(h.VertexAttribute.OPACITYFEATUREATTRIBUTE).data[0]);t=f.length/3;const r=new Float32Array(d.buffer),ba=Z("enable-feature:objectAndLayerId-rendering")?
new Uint8Array(d.buffer):null,T=this.vertexBufferLayout.stride/4;let p=m*T;m=p;let C=0;const ma=q?(v,I,L)=>C=q[L]:(v,I,L)=>C+=g.distance(v,I),E=(v,I,L,Na,Oa,Pa,Qa)=>{r[p++]=I[0];r[p++]=I[1];r[p++]=I[2];r[p++]=Na;r[p++]=Qa;r[p++]=Oa;r[p++]=v[0];r[p++]=v[1];r[p++]=v[2];r[p++]=L[0];r[p++]=L[1];r[p++]=L[2];this._parameters.vvSizeEnabled?r[p++]=D:r[p++]=w;this._parameters.vvColorEnabled?r[p++]=G:(v=Math.min(4*Pa,l.length-4),r[p++]=l[v+0],r[p++]=l[v+1],r[p++]=l[v+2],r[p++]=l[v+3]);this._parameters.vvOpacityEnabled&&
(r[p++]=ta);Z("enable-feature:objectAndLayerId-rendering")&&(O.isSome(J)&&(ba[4*p]=J[0],ba[4*p+1]=J[1],ba[4*p+2]=J[2],ba[4*p+3]=J[3]),p++)};p+=T;g.set(n,f[0],f[1],f[2]);b&&g.transformMat4(n,n,b);if(c=this._isClosed(c)){var U=f.length-3;g.set(a,f[U],f[U+1],f[U+2]);b&&g.transformMat4(a,a,b)}else g.set(e,f[3],f[4],f[5]),b&&g.transformMat4(e,e,b),E(n,n,e,1,B.LEFT_CAP_START,0,0),E(n,n,e,1,B.RIGHT_CAP_START,0,0),g.copy(a,n),g.copy(n,e);U=c?0:1;const Y=c?t:t-1;for(let v=U;v<Y;v++){var W=(v+1)%t*3;g.set(e,
f[W+0],f[W+1],f[W+2]);b&&g.transformMat4(e,e,b);ma(a,n,v);E(a,n,e,0,B.LEFT_JOIN_END,v,C);E(a,n,e,0,B.RIGHT_JOIN_END,v,C);W=this.numJoinSubdivisions;for(let I=0;I<W;++I){const L=(I+1)/(W+1);E(a,n,e,L,B.LEFT_JOIN_END,v,C);E(a,n,e,L,B.RIGHT_JOIN_END,v,C)}E(a,n,e,1,B.LEFT_JOIN_START,v,C);E(a,n,e,1,B.RIGHT_JOIN_START,v,C);g.copy(a,n);g.copy(n,e)}c?(g.set(e,f[3],f[4],f[5]),b&&g.transformMat4(e,e,b),C=ma(a,n,Y),E(a,n,e,0,B.LEFT_JOIN_END,U,C),E(a,n,e,0,B.RIGHT_JOIN_END,U,C)):(C=ma(a,n,Y),E(a,n,n,0,B.LEFT_CAP_END,
Y,C),E(a,n,n,0,B.RIGHT_CAP_END,Y,C));N(r,m+T,r,m,T);p=N(r,p-T,r,p,T);this._parameters.wireframe&&this._addWireframeVertices(d,m,p,T)};u._addWireframeVertices=function(b,a,c,d){const m=new Float32Array(b.buffer,c*Float32Array.BYTES_PER_ELEMENT);b=new Float32Array(b.buffer,a*Float32Array.BYTES_PER_ELEMENT,c-a);a=0;for(c=0;c<b.length-1;c+=2*d)a=N(b,c,m,a,d),a=N(b,c+2*d,m,a,d),a=N(b,c+1*d,m,a,d),a=N(b,c+2*d,m,a,d),a=N(b,c+1*d,m,a,d),a=N(b,c+3*d,m,a,d)};return k}();const y=A.create(),z=A.create(),H=A.create(),
S=A.create(),Fa=A.create(),Q=V.createRenderScreenPointArray3(),R=V.createRenderScreenPointArray3(),ra=A.create(),sa=A.create(),qa=P.create(),Ga=P.create(),Ka=A.create(),La=A.create(),Ma=A.create(),X=[V.createRenderScreenPointArray3(),V.createRenderScreenPointArray3(),V.createRenderScreenPointArray3(),V.createRenderScreenPointArray3()],K=[A.create(),A.create(),A.create(),A.create()],ia=x.create(),ja=x.create(),ka=x.create(),la=x.create();ca.Parameters=pa;ca.RibbonLineMaterial=Ja;Object.defineProperties(ca,
{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});