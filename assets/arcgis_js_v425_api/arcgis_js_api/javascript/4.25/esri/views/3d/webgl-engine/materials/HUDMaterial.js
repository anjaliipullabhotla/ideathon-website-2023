// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/has ../../../../core/mathUtils ../../../../core/maybe ../../../../chunks/mat3 ../../../../chunks/mat3f64 ../../../../chunks/mat4 ../../../../chunks/mat4f64 ../../../../chunks/vec2 ../../../../chunks/vec2f64 ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../chunks/vec4f64 ../../../../core/libs/gl-matrix-2/types/mat4 ../../../../geometry/support/aaBoundingRect ../../../../geometry/support/buffer/BufferView ../../support/buffer/InterleavedLayout ../core/shaderLibrary/ShaderOutput ../core/shaderLibrary/hud/HUD.glsl ../lib/geometryDataUtils ../lib/GLTextureMaterial ../lib/Material ../lib/RenderSlot ../lib/screenSizePerspectiveUtils ../lib/Util ../lib/VertexAttribute ./internal/bufferWriterUtils ./internal/MaterialUtil ./renderers/utils ../../../../chunks/HUDMaterial.glsl ../shaders/HUDMaterialTechnique ../shaders/HUDMaterialTechniqueConfiguration".split(" "),
function(N,O,ja,ka,B,U,V,la,W,ma,X,k,G,P,na,oa,pa,qa,C,Y,ra,Z,aa,K,M,sa,h,H,ta,ua,ba,va,wa){function xa(r,q,c,a=ya){ma.copy(a,r.anchorPosition);a[0]*=-q[0];a[1]*=-q[1];a[0]+=r.screenOffset[0]*c;a[1]+=r.screenOffset[1]*c;return a}function ca(r,q,c,a,b,d,e,f){q=q-b-(0<f[0]?a[0]*f[0]:0);let g=q+a[0]+2*b;c=c-b-(0<f[1]?a[1]*f[1]:0);b=c+a[1]+2*b;f=e.distanceFieldBoundingBox;e.textureIsSignedDistanceField&&B.isSome(f)&&(q+=a[0]*f[0],c+=a[1]*f[1],g-=a[0]*(1-f[2]),b-=a[1]*(1-f[3]),q-=d,g+=d,c-=d,b+=d);return r[0]>
q&&r[0]<g&&r[1]>c&&r[1]<b}let Ea=function(r){function q(a){a=r.call(this,a,new da)||this;a._configuration=new wa.HUDMaterialTechniqueConfiguration;return a}O._inheritsLoose(q,r);var c=q.prototype;c.getConfiguration=function(a,b){this._configuration.output=a;this._configuration.hasSlicePlane=this.parameters.hasSlicePlane;this._configuration.hasVerticalOffset=!!this.parameters.verticalOffset;this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective;this._configuration.screenCenterOffsetUnitsEnabled=
"screen"===this.parameters.centerOffsetUnits?Y.HUDSpace.Screen:Y.HUDSpace.World;this._configuration.hasPolygonOffset=this.parameters.polygonOffset;this._configuration.isDraped=this.parameters.isDraped;this._configuration.occlusionTestEnabled=this.parameters.occlusionTest;this._configuration.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled;this._configuration.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField;this._configuration.vvSize=!!this.parameters.vvSizeEnabled;
this._configuration.vvColor=!!this.parameters.vvColorEnabled;this._configuration.occlusionPass=b.slot===K.RenderSlot.OCCLUSION_PIXELS&&this.parameters.occlusionTest&&(a===C.ShaderOutput.Color||a===C.ShaderOutput.Alpha);a===C.ShaderOutput.Color&&(this._configuration.debugDrawLabelBorder=!!this.parameters.debugDrawLabelBorder);a===C.ShaderOutput.Highlight&&(this._configuration.binaryHighlightOcclusionEnabled=this.parameters.binaryHighlightOcclusion);this._configuration.depthEnabled=this.parameters.depthEnabled;
this._configuration.transparencyPassType=b.transparencyPassType;this._configuration.hasMultipassGeometry=b.multipassGeometry.enabled;this._configuration.hasMultipassTerrain=b.multipassTerrain.enabled;this._configuration.cullAboveGround=b.multipassTerrain.cullAboveGround;return this._configuration};c.intersect=function(a,b,d,e,f,g,p,m,l){B.isSome(l)?this._intersectDrapedHudGeometry(a,g,p,m,l):this._intersectHudGeometry(a,b,d,e,p,m)};c._intersectDrapedHudGeometry=function(a,b,d,e,f){const g=a.vertexAttributes.get(h.VertexAttribute.POSITION),
p=a.vertexAttributes.get(h.VertexAttribute.SIZE),m=this.parameters,l=ba.calculateAnchorPosForRendering(m);let w=1;var x=1;B.isSome(e)&&(x=e(ea),w=x[0],x=x[5]);w*=a.screenToWorldRatio;x*=a.screenToWorldRatio;e=2*a.screenToWorldRatio;for(let A=0;A<g.data.length/g.size;A++){var t=A*g.size;const D=g.data[t];t=g.data[t+1];const y=A*p.size;E[0]=p.data[y]*w;E[1]=p.data[y+1]*x;let n;m.textureIsSignedDistanceField&&(n=m.outlineSize*a.screenToWorldRatio/2);ca(b,D,t,E,e,n,m,l)&&d(f.dist,f.normal,-1,!1)}};c._intersectHudGeometry=
function(a,b,d,e,f,g){if(e.options.selectionMode&&e.options.hud&&!ua.isInstanceHidden(b)){b=this.parameters;var p=1,m=1;U.fromMat4(Q,d);if(B.isSome(g)){m=g(ea);p=m[0];m=m[5];g=Q;var l=g[0],w=g[1],x=g[2],t=g[3],A=g[4],D=g[5],y=g[6],n=g[7],F=g[8],I=1/Math.sqrt(l*l+w*w+x*x);const J=1/Math.sqrt(t*t+A*A+D*D),R=1/Math.sqrt(y*y+n*n+F*F);g[0]=l*I;g[1]=w*I;g[2]=x*I;g[3]=t*J;g[4]=A*J;g[5]=D*J;g[6]=y*R;g[7]=n*R;g[8]=F*R}g=a.vertexAttributes.get(h.VertexAttribute.POSITION);l=a.vertexAttributes.get(h.VertexAttribute.SIZE);
w=a.vertexAttributes.get(h.VertexAttribute.NORMAL);a=a.vertexAttributes.get(h.VertexAttribute.AUXPOS1);sa.assert(3<=g.size);x=e.point;t=e.camera;A=ba.calculateAnchorPosForRendering(b);p*=t.pixelRatio;m*=t.pixelRatio;D="screen"===this.parameters.centerOffsetUnits;for(y=0;y<g.data.length/g.size;y++)if(n=y*g.size,k.set(v,g.data[n],g.data[n+1],g.data[n+2]),k.transformMat4(v,v,d),n=y*l.size,E[0]=l.data[n]*p,E[1]=l.data[n+1]*m,k.transformMat4(v,v,t.viewMatrix),n=y*a.size,k.set(z,a.data[n+0],a.data[n+1],
a.data[n+2]),D||(v[0]+=z[0],v[1]+=z[1],0!==z[2]&&(n=z[2],k.normalize(z,v),k.subtract(v,v,k.scale(z,z,n)))),n=y*w.size,k.set(L,w.data[n],w.data[n+1],w.data[n+2]),this._normalAndViewAngle(L,Q,t,S),this._applyVerticalOffsetTransformationView(v,S,t,T),t.applyProjection(v,u),-1<u[0]){u[0]=Math.floor(u[0]);u[1]=Math.floor(u[1]);D&&(z[0]||z[1])&&(u[0]+=z[0],0!==z[1]&&(u[1]+=M.applyScaleFactor(z[1],T.factorAlignment)),t.unapplyProjection(u,v));u[0]+=this.parameters.screenOffset[0];u[1]+=this.parameters.screenOffset[1];
M.applyPrecomputedScaleFactor(E,T.factor,E);n=1*t.pixelRatio;let J;b.textureIsSignedDistanceField&&(J=b.outlineSize*t.pixelRatio/2);ca(x,u[0],u[1],E,n,J,b,A)&&(F=e.ray,k.transformMat4(fa,v,la.invert(za,t.viewMatrix)),u[0]=x[0],u[1]=x[1],t.unprojectFromRenderScreen(u,v)&&(n=G.create(),k.copy(n,F.direction),I=1/k.length(n),k.scale(n,n,I),F=k.distance(F.origin,v)*I,f(F,n,-1,!0,1,fa)))}}};c.computeAttachmentOrigin=function(a,b){var d=a.vertexAttributes;if(!d)return!1;d=d.get(h.VertexAttribute.POSITION);
a=a.indices.get(h.VertexAttribute.POSITION);return ra.computeAttachmentOriginPoints(d,a,b)};c.createBufferWriter=function(){return new Aa(this)};c._normalAndViewAngle=function(a,b,d,e){na.isMat4(b)&&(b=U.fromMat4(Ba,b));k.transformMat3(e.normal,a,b);k.transformMat4(e.normal,e.normal,d.viewInverseTransposeMatrix);e.cosAngle=k.dot(ha,Ca);return e};c._updateScaleInfo=function(a,b,d){const e=this.parameters;B.isSome(e.screenSizePerspective)?M.precomputeScaleFactor(d,b,e.screenSizePerspective,a.factor):
(a.factor.scale=1,a.factor.factor=0,a.factor.minPixelSize=0,a.factor.paddingPixels=0);B.isSome(e.screenSizePerspectiveAlignment)?M.precomputeScaleFactor(d,b,e.screenSizePerspectiveAlignment,a.factorAlignment):(a.factorAlignment.factor=a.factor.factor,a.factorAlignment.scale=a.factor.scale,a.factorAlignment.minPixelSize=a.factor.minPixelSize,a.factorAlignment.paddingPixels=a.factor.paddingPixels)};c.applyShaderOffsetsView=function(a,b,d,e,f,g,p){b=this._normalAndViewAngle(b,d,f,S);this._applyVerticalGroundOffsetView(a,
b,f,p);this._applyVerticalOffsetTransformationView(p,b,f,g);this._applyPolygonOffsetView(p,b,e[3],f,p);this._applyCenterOffsetView(p,e,p);return p};c.applyShaderOffsetsNDC=function(a,b,d,e,f){this._applyCenterOffsetNDC(a,b,d,e);B.isSome(f)&&k.copy(f,e);this._applyPolygonOffsetNDC(e,b,d,e);return e};c._applyPolygonOffsetView=function(a,b,d,e,f){var g=e.aboveGround?1:-1;d=Math.sign(d);0===d&&(d=g);g*=d;if(0>=this.parameters.shaderPolygonOffset)return k.copy(f,a);b=ka.clamp(Math.abs(b.cosAngle),.01,
1);e=1-Math.sqrt(1-b*b)/b/e.viewport[2];0<g?k.scale(f,a,e):k.scale(f,a,1/e);return f};c._applyVerticalGroundOffsetView=function(a,b,d,e){const f=k.length(a),g=d.aboveGround?1:-1;d=.5*d.computeRenderPixelSizeAtDist(f);b=k.scale(v,b.normal,g*d);k.add(e,a,b);return e};c._applyVerticalOffsetTransformationView=function(a,b,d,e){const f=this.parameters;if(!f.verticalOffset||!f.verticalOffset.screenLength){if(f.screenSizePerspective||f.screenSizePerspectiveAlignment){var g=k.length(a);this._updateScaleInfo(e,
g,b.cosAngle)}else e.factor.scale=1,e.factorAlignment.scale=1;return a}g=k.length(a);const p=B.unwrapOr(f.screenSizePerspectiveAlignment,f.screenSizePerspective);d=ta.verticalOffsetAtDistance(d,g,f.verticalOffset,b.cosAngle,p);this._updateScaleInfo(e,g,b.cosAngle);k.scale(b.normal,b.normal,d);return k.add(a,a,b.normal)};c._applyCenterOffsetView=function(a,b,d){const e="screen"!==this.parameters.centerOffsetUnits;d!==a&&k.copy(d,a);e&&(d[0]+=b[0],d[1]+=b[1],b[2]&&(k.normalize(L,d),k.add(d,d,k.scale(L,
L,b[2]))));return d};c._applyCenterOffsetNDC=function(a,b,d,e){const f="screen"!==this.parameters.centerOffsetUnits;e!==a&&k.copy(e,a);f||(e[0]+=b[0]/d.fullWidth*2,e[1]+=b[1]/d.fullHeight*2);return e};c._applyPolygonOffsetNDC=function(a,b,d,e){const f=this.parameters.shaderPolygonOffset;a!==e&&k.copy(e,a);f&&(a=d.aboveGround?1:-1,e[2]-=(a*Math.sign(b[3])||a)*f);return e};c.requiresSlot=function(a,b){if(b===C.ShaderOutput.Color||b===C.ShaderOutput.Alpha||b===C.ShaderOutput.Highlight||b===C.ShaderOutput.ObjectAndLayerIdColor){if(a===
K.RenderSlot.DRAPED_MATERIAL)return!0;const {drawInSecondSlot:d,occlusionTest:e}=this.parameters;return a===(d?K.RenderSlot.LABEL_MATERIAL:K.RenderSlot.HUD_MATERIAL)||e&&a===K.RenderSlot.OCCLUSION_PIXELS}return!1};c.createGLMaterial=function(a){return new Da(a)};c.calculateRelativeScreenBounds=function(a,b,d=oa.create()){xa(this.parameters,a,b,d);d[2]=d[0]+a[0];d[3]=d[1]+a[1];return d};return q}(aa.Material),Da=function(r){function q(a){return r.call(this,{...a,...a.material.parameters})||this}O._inheritsLoose(q,
r);var c=q.prototype;c.selectProgram=function(a){return this.ensureTechnique(va.HUDMaterialTechnique,a)};c.beginSlot=function(a){this.updateTexture(this._material.parameters.textureId);this._material.setParameters(this.textureBindParameters);return this.selectProgram(a)};return q}(Z.GLTextureMaterial);const T={factor:{scale:0,factor:0,minPixelSize:0,paddingPixels:0},factorAlignment:{scale:0,factor:0,minPixelSize:0,paddingPixels:0}},ya=X.create(),v=G.create(),L=G.create(),u=P.create(),ha=G.create(),
fa=G.create(),Q=V.create(),Ba=V.create(),za=W.create(),z=G.create(),S={normal:ha,cosAngle:0},ea=W.create(),E=[0,0],Ca=G.fromValues(0,0,1);let da=function(r){function q(){var c=r.apply(this,arguments)||this;c.renderOccluded=aa.RenderOccludedFlag.Occlude;c.color=P.fromValues(1,1,1,1);c.texCoordScale=[1,1];c.polygonOffset=!1;c.anchorPosition=X.fromValues(.5,.5);c.screenOffset=[0,0];c.shaderPolygonOffset=1E-5;c.textureIsSignedDistanceField=!1;c.outlineColor=P.fromValues(1,1,1,1);c.outlineSize=0;c.vvSizeEnabled=
!1;c.vvSizeMinSize=[1,1,1];c.vvSizeMaxSize=[100,100,100];c.vvSizeOffset=[0,0,0];c.vvSizeFactor=[1,1,1];c.vvColorEnabled=!1;c.vvColorValues=[0,0,0,0,0,0,0,0];c.vvColorColors=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0];c.hasSlicePlane=!1;c.pixelSnappingEnabled=!0;c.occlusionTest=!0;c.binaryHighlightOcclusion=!0;c.debugDrawLabelBorder=!1;c.centerOffsetUnits="world";c.drawInSecondSlot=!1;c.depthEnabled=!0;c.isDraped=!1;return c}O._inheritsLoose(q,r);return q}(Z.GLTextureMaterialBindParameters);
const ia=qa.newLayout().vec3f(h.VertexAttribute.POSITION).vec3f(h.VertexAttribute.NORMAL).vec2f(h.VertexAttribute.UV0).vec4u8(h.VertexAttribute.COLOR).vec2f(h.VertexAttribute.SIZE).vec4f(h.VertexAttribute.AUXPOS1).vec4f(h.VertexAttribute.AUXPOS2),Fa=ia.clone().vec4u8(h.VertexAttribute.OBJECTANDLAYERIDCOLOR);let Aa=function(){function r(c){this._material=c;this.vertexBufferLayout=ja("enable-feature:objectAndLayerId-rendering")?Fa:ia}var q=r.prototype;q.allocate=function(c){return this.vertexBufferLayout.createBuffer(c)};
q.elementCount=function(c){return 6*c.indices.get(h.VertexAttribute.POSITION).length};q.write=function(c,a,b,d,e){H.writePosition(b.indices.get(h.VertexAttribute.POSITION),b.vertexAttributes.get(h.VertexAttribute.POSITION).data,c,d.position,e,6);H.writeNormal(b.indices.get(h.VertexAttribute.NORMAL),b.vertexAttributes.get(h.VertexAttribute.NORMAL).data,a,d.normal,e,6);var f=b.vertexAttributes.get(h.VertexAttribute.UV0).data;if(null==f||4>f.length){f=this._material.parameters;a=c=0;var g=f.texCoordScale[0];
f=f.texCoordScale[1]}else c=f[0],a=f[1],g=f[2],f=f[3];g=Math.min(1.99999,g+1);f=Math.min(1.99999,f+1);var p=b.indices.get(h.VertexAttribute.POSITION).length,m=d.uv0,l=e;for(var w=0;w<p;++w)m.set(l,0,c),m.set(l,1,a),l+=1,m.set(l,0,g),m.set(l,1,a),l+=1,m.set(l,0,g),m.set(l,1,f),l+=1,m.set(l,0,g),m.set(l,1,f),l+=1,m.set(l,0,c),m.set(l,1,f),l+=1,m.set(l,0,c),m.set(l,1,a),l+=1;H.writeColor(b.indices.get(h.VertexAttribute.COLOR),b.vertexAttributes.get(h.VertexAttribute.COLOR).data,4,d.color,e,6);c=b.indices.get(h.VertexAttribute.SIZE);
a=b.vertexAttributes.get(h.VertexAttribute.SIZE).data;g=c.length;f=d.size;p=e;for(m=0;m<g;++m){l=a[2*c[m]];w=a[2*c[m]+1];for(let x=0;6>x;++x)f.set(p,0,l),f.set(p,1,w),p+=1}b.indices.get(h.VertexAttribute.AUXPOS1)&&b.vertexAttributes.get(h.VertexAttribute.AUXPOS1)&&H.writeBufferVec4(b.indices.get(h.VertexAttribute.AUXPOS1),b.vertexAttributes.get(h.VertexAttribute.AUXPOS1).data,d.auxpos1,e,6);b.indices.get(h.VertexAttribute.AUXPOS2)&&b.vertexAttributes.get(h.VertexAttribute.AUXPOS2)&&H.writeBufferVec4(b.indices.get(h.VertexAttribute.AUXPOS2),
b.vertexAttributes.get(h.VertexAttribute.AUXPOS2).data,d.auxpos2,e,6);B.isSome(b.objectAndLayerIdColor)&&4===b.objectAndLayerIdColor.length&&b.indices.get(h.VertexAttribute.POSITION)&&(c=b.indices.get(h.VertexAttribute.POSITION).length,d=d.getField(h.VertexAttribute.OBJECTANDLAYERIDCOLOR,pa.BufferViewVec4u8),H.writeObjectAndLayerIdColor(b.objectAndLayerIdColor,d,c,e,6))};return r}();N.HUDMaterial=Ea;N.Parameters=da;Object.defineProperties(N,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});