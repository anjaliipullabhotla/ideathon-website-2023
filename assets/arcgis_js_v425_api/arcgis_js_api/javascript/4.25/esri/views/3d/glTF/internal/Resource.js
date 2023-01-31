// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/MapUtils ../../../../core/promiseUtils ../../../../core/urlUtils ../../../../core/Version ../../../../chunks/mat4 ../../../../chunks/mat4f64 ../../../../chunks/quat ../../../../chunks/quatf64 ../../../../geometry/support/buffer/BufferView ../../../../chunks/scalar ./BinaryStreamReader ./enums ./fillDefaults ./pathUtils ../../../webgl/enums".split(" "),function(D,l,H,E,u,F,t,x,I,J,m,y,G,z,A,K,h){function L(f){switch(f.componentType){case h.DataType.BYTE:return new m.BufferViewVec2i8(f.raw,
f.byteOffset,f.byteStride,f.byteOffset+f.byteStride*f.entryCount);case h.DataType.UNSIGNED_BYTE:return new m.BufferViewVec2u8(f.raw,f.byteOffset,f.byteStride,f.byteOffset+f.byteStride*f.entryCount);case h.DataType.SHORT:return new m.BufferViewVec2i16(f.raw,f.byteOffset,f.byteStride,f.byteOffset+f.byteStride*f.entryCount);case h.DataType.UNSIGNED_SHORT:return new m.BufferViewVec2u16(f.raw,f.byteOffset,f.byteStride,f.byteOffset+f.byteStride*f.entryCount);case h.DataType.UNSIGNED_INT:return new m.BufferViewVec2u32(f.raw,
f.byteOffset,f.byteStride,f.byteOffset+f.byteStride*f.entryCount);case h.DataType.FLOAT:return new m.BufferViewVec2f(f.raw,f.byteOffset,f.byteStride,f.byteOffset+f.byteStride*f.entryCount)}}function M(f){return B.apply(this,arguments)}function B(){B=l._asyncToGenerator(function*(f){return new Promise((k,d)=>{const a=new Blob([f]),b=new FileReader;b.onload=()=>{k(JSON.parse(b.result))};b.onerror=c=>{d(c)};b.readAsText(a)})});return B.apply(this,arguments)}function N(f,k){return C.apply(this,arguments)}
function C(){C=l._asyncToGenerator(function*(f,k){return new Promise((d,a)=>{const b=new Blob([f],{type:k}),c=URL.createObjectURL(b),e=new Image,g=()=>{URL.revokeObjectURL(c);"decode"in e?e.decode().then(()=>d(e),()=>d(e)).then(n):(d(e),n())},p=q=>{URL.revokeObjectURL(c);a(q);n()},n=()=>{e.removeEventListener("load",g);e.removeEventListener("error",p)};e.addEventListener("load",g);e.addEventListener("error",p);e.src=c})});return C.apply(this,arguments)}let S=function(){function f(d,a,b,c,e){this._context=
d;this._errorContext=a;this.uri=b;this.json=c;this._glbBuffer=e;this._bufferLoaders=new Map;this._textureLoaders=new Map;this._textureCache=new Map;this._materialCache=new Map;this._nodeParentMap=new Map;this._nodeTransformCache=new Map;this._baseUri=K.splitURI(this.uri).dirPart;this._checkVersionSupported();this._checkRequiredExtensionsSupported();a.errorUnsupportedIf(null==c.scenes,"Scenes must be defined.");a.errorUnsupportedIf(null==c.meshes,"Meshes must be defined");a.errorUnsupportedIf(null==
c.nodes,"Nodes must be defined.");this._computeNodeParents()}f.load=function(){var d=l._asyncToGenerator(function*(a,b,c,e){if(u.isDataProtocol(c)){var g=u.dataComponents(c);if(g&&"model/gltf-binary"!==g.mediaType)try{const p=JSON.parse(g.isBase64?atob(g.data):g.data);return new f(a,b,c,p)}catch{}g=u.dataToArrayBuffer(c);if(f._isGLBData(g))return this._fromGLBData(a,b,c,g)}if(c.endsWith(".gltf"))return e=yield a.loadJSON(c,e),new f(a,b,c,e);g=yield a.loadBinary(c,e);if(f._isGLBData(g))return this._fromGLBData(a,
b,c,g);e=yield a.loadJSON(c,e);return new f(a,b,c,e)});return function(a,b,c,e){return d.apply(this,arguments)}}();f._isGLBData=function(d){if(null==d)return!1;d=new G.BinaryStreamReader(d);return 4<=d.remainingBytes()&&1179937895===d.readUint32()};f._fromGLBData=function(){var d=l._asyncToGenerator(function*(a,b,c,e){e=yield f._parseGLBData(b,e);return new f(a,b,c,e.json,e.binaryData)});return function(a,b,c,e){return d.apply(this,arguments)}}();f._parseGLBData=function(){var d=l._asyncToGenerator(function*(a,
b){const c=new G.BinaryStreamReader(b);a.assert(12<=c.remainingBytes(),"GLB binary data is insufficiently large.");var e=c.readUint32(),g=c.readUint32();const p=c.readUint32();a.assert(1179937895===e,"Magic first 4 bytes do not fit to expected GLB value.");a.assert(b.byteLength>=p,"GLB binary data is smaller than header specifies.");a.errorUnsupportedIf(2!==g,"An unsupported GLB container version was detected. Only version 2 is supported.");b=0;let n,q;for(;8<=c.remainingBytes();)e=c.readUint32(),
g=c.readUint32(),0===b?(a.assert(1313821514===g,"First GLB chunk must be JSON."),a.assert(0<=e,"No JSON data found."),n=yield M(c.readUint8Array(e))):1===b?(a.errorUnsupportedIf(5130562!==g,"Second GLB chunk expected to be BIN."),q=c.readUint8Array(e)):a.warnUnsupported("More than 2 GLB chunks detected. Skipping."),b+=1;n||a.error("No GLB JSON chunk detected.");return{json:n,binaryData:q}});return function(a,b){return d.apply(this,arguments)}}();var k=f.prototype;k.getBuffer=function(){var d=l._asyncToGenerator(function*(a,
b){const c=this.json.buffers[a],e=this._errorContext;if(null==c.uri)return e.assert(null!=this._glbBuffer,"GLB buffer not present"),this._glbBuffer;a=yield this._getBufferLoader(a,b);e.assert(a.byteLength===c.byteLength,"Buffer byte lengths should match.");return a});return function(a,b){return d.apply(this,arguments)}}();k._getBufferLoader=function(){var d=l._asyncToGenerator(function*(a,b){const c=this._bufferLoaders.get(a);if(c)return c;b=this._context.loadBinary(this._resolveUri(this.json.buffers[a].uri),
b).then(e=>new Uint8Array(e));this._bufferLoaders.set(a,b);return b});return function(a,b){return d.apply(this,arguments)}}();k.getAccessor=function(){var d=l._asyncToGenerator(function*(a,b){var c=this._errorContext;c.errorUnsupportedIf(!this.json.accessors,"Accessors missing.");a=this.json.accessors[a];c.errorUnsupportedIf(null==a?.bufferView,"Some accessor does not specify a bufferView.");c.errorUnsupportedIf(a.type in[z.AttributeType.MAT2,z.AttributeType.MAT3,z.AttributeType.MAT4],`AttributeType ${a.type} is not supported`);
c=this.json.bufferViews[a.bufferView];b=yield this.getBuffer(c.buffer,b);const e=O[a.type],g=P[a.componentType],p=e*g,n=c.byteStride||p;return{raw:b.buffer,byteStride:n,byteOffset:b.byteOffset+(c.byteOffset||0)+(a.byteOffset||0),entryCount:a.count,isDenselyPacked:n===p,componentCount:e,componentByteSize:g,componentType:a.componentType,min:a.min,max:a.max,normalized:!!a.normalized}});return function(a,b){return d.apply(this,arguments)}}();k.getIndexData=function(){var d=l._asyncToGenerator(function*(a,
b){if(null!=a.indices)if(a=yield this.getAccessor(a.indices,b),a.isDenselyPacked)switch(a.componentType){case h.DataType.UNSIGNED_BYTE:return new Uint8Array(a.raw,a.byteOffset,a.entryCount);case h.DataType.UNSIGNED_SHORT:return new Uint16Array(a.raw,a.byteOffset,a.entryCount);case h.DataType.UNSIGNED_INT:return new Uint32Array(a.raw,a.byteOffset,a.entryCount)}else switch(a.componentType){case h.DataType.UNSIGNED_BYTE:return y.makeDense(this._wrapAccessor(m.BufferViewUint8,a));case h.DataType.UNSIGNED_SHORT:return y.makeDense(this._wrapAccessor(m.BufferViewUint16,
a));case h.DataType.UNSIGNED_INT:return y.makeDense(this._wrapAccessor(m.BufferViewUint32,a))}});return function(a,b){return d.apply(this,arguments)}}();k.getPositionData=function(){var d=l._asyncToGenerator(function*(a,b){const c=this._errorContext;c.errorUnsupportedIf(null==a.attributes.POSITION,"No POSITION vertex data found.");a=yield this.getAccessor(a.attributes.POSITION,b);c.errorUnsupportedIf(a.componentType!==h.DataType.FLOAT,"Expected type FLOAT for POSITION vertex attribute, but found "+
h.DataType[a.componentType]);c.errorUnsupportedIf(3!==a.componentCount,"POSITION vertex attribute must have 3 components, but found "+a.componentCount.toFixed());return this._wrapAccessor(m.BufferViewVec3f,a)});return function(a,b){return d.apply(this,arguments)}}();k.getNormalData=function(){var d=l._asyncToGenerator(function*(a,b){const c=this._errorContext;c.assert(null!=a.attributes.NORMAL,"No NORMAL vertex data found.");a=yield this.getAccessor(a.attributes.NORMAL,b);c.errorUnsupportedIf(a.componentType!==
h.DataType.FLOAT,"Expected type FLOAT for NORMAL vertex attribute, but found "+h.DataType[a.componentType]);c.errorUnsupportedIf(3!==a.componentCount,"NORMAL vertex attribute must have 3 components, but found "+a.componentCount.toFixed());return this._wrapAccessor(m.BufferViewVec3f,a)});return function(a,b){return d.apply(this,arguments)}}();k.getTangentData=function(){var d=l._asyncToGenerator(function*(a,b){const c=this._errorContext;c.assert(null!=a.attributes.TANGENT,"No TANGENT vertex data found.");
a=yield this.getAccessor(a.attributes.TANGENT,b);c.errorUnsupportedIf(a.componentType!==h.DataType.FLOAT,"Expected type FLOAT for TANGENT vertex attribute, but found "+h.DataType[a.componentType]);c.errorUnsupportedIf(4!==a.componentCount,"TANGENT vertex attribute must have 4 components, but found "+a.componentCount.toFixed());return new m.BufferViewVec4f(a.raw,a.byteOffset,a.byteStride,a.byteOffset+a.byteStride*a.entryCount)});return function(a,b){return d.apply(this,arguments)}}();k.getTextureCoordinates=
function(){var d=l._asyncToGenerator(function*(a,b){const c=this._errorContext;c.assert(null!=a.attributes.TEXCOORD_0,"No TEXCOORD_0 vertex data found.");a=yield this.getAccessor(a.attributes.TEXCOORD_0,b);c.errorUnsupportedIf(2!==a.componentCount,"TEXCOORD_0 vertex attribute must have 2 components, but found "+a.componentCount.toFixed());if(a.componentType===h.DataType.FLOAT)return this._wrapAccessor(m.BufferViewVec2f,a);c.errorUnsupportedIf(!a.normalized,"Integer component types are only supported for a normalized accessor for TEXCOORD_0.");
return L(a)});return function(a,b){return d.apply(this,arguments)}}();k.getVertexColors=function(){var d=l._asyncToGenerator(function*(a,b){const c=this._errorContext;c.assert(null!=a.attributes.COLOR_0,"No COLOR_0 vertex data found.");a=yield this.getAccessor(a.attributes.COLOR_0,b);c.errorUnsupportedIf(4!==a.componentCount&&3!==a.componentCount,"COLOR_0 attribute must have 3 or 4 components, but found "+a.componentCount.toFixed());if(4===a.componentCount){if(a.componentType===h.DataType.FLOAT)return this._wrapAccessor(m.BufferViewVec4f,
a);if(a.componentType===h.DataType.UNSIGNED_BYTE)return this._wrapAccessor(m.BufferViewVec4u8,a);if(a.componentType===h.DataType.UNSIGNED_SHORT)return this._wrapAccessor(m.BufferViewVec4u16,a)}else if(3===a.componentCount){if(a.componentType===h.DataType.FLOAT)return this._wrapAccessor(m.BufferViewVec3f,a);if(a.componentType===h.DataType.UNSIGNED_BYTE)return this._wrapAccessor(m.BufferViewVec3u8,a);if(a.componentType===h.DataType.UNSIGNED_SHORT)return this._wrapAccessor(m.BufferViewVec3u16,a)}c.errorUnsupported("Unsupported component type for COLOR_0 attribute: "+
h.DataType[a.componentType])});return function(a,b){return d.apply(this,arguments)}}();k.hasPositions=function(d){return void 0!==d.attributes.POSITION};k.hasNormals=function(d){return void 0!==d.attributes.NORMAL};k.hasVertexColors=function(d){return void 0!==d.attributes.COLOR_0};k.hasTextureCoordinates=function(d){return void 0!==d.attributes.TEXCOORD_0};k.hasTangents=function(d){return void 0!==d.attributes.TANGENT};k.getMaterial=function(){var d=l._asyncToGenerator(function*(a,b,c){var e=a.material?
this._materialCache.get(a.material):void 0;if(!e){e=null!=a.material?A.material(this.json.materials[a.material]):A.material();const g=e.pbrMetallicRoughness,p=this.hasVertexColors(a),n=this.getTexture(g.baseColorTexture,b),q=this.getTexture(e.normalTexture,b),v=c?this.getTexture(e.occlusionTexture,b):void 0,r=c?this.getTexture(e.emissiveTexture,b):void 0;b=c?this.getTexture(g.metallicRoughnessTexture,b):void 0;a=null!=a.material?a.material:-1;e={alphaMode:e.alphaMode,alphaCutoff:e.alphaCutoff,color:g.baseColorFactor,
doubleSided:!!e.doubleSided,colorTexture:yield n,normalTexture:yield q,name:e.name,id:a,occlusionTexture:yield v,emissiveTexture:yield r,emissiveFactor:e.emissiveFactor,metallicFactor:g.metallicFactor,roughnessFactor:g.roughnessFactor,metallicRoughnessTexture:yield b,hasVertexColors:p,ESRI_externalColorMixMode:e.extras.ESRI_externalColorMixMode,colorTextureTransform:g?.baseColorTexture?.extensions?.KHR_texture_transform,normalTextureTransform:e.normalTexture?.extensions?.KHR_texture_transform,occlusionTextureTransform:e.occlusionTexture?.extensions?.KHR_texture_transform,
emissiveTextureTransform:e.emissiveTexture?.extensions?.KHR_texture_transform,metallicRoughnessTextureTransform:g?.metallicRoughnessTexture?.extensions?.KHR_texture_transform}}return e});return function(a,b,c){return d.apply(this,arguments)}}();k.getTexture=function(){var d=l._asyncToGenerator(function*(a,b){if(a){this._errorContext.errorUnsupportedIf(0!==(a.texCoord||0),"Only TEXCOORD with index 0 is supported.");var c=a.index,e=this._errorContext;a=this.json.textures[c];var g=A.textureSampler(null!=
a.sampler?this.json.samplers[a.sampler]:{});e.errorUnsupportedIf(null==a.source,"Source is expected to be defined for a texture.");var p=this.json.images[a.source],n=yield this._loadTextureImageData(c,a,b);return H.getOrCreateMapValue(this._textureCache,c,()=>{const q=r=>33071===r||33648===r||10497===r,v=r=>{e.error(`Unexpected TextureSampler WrapMode: ${r}. Using default REPEAT(10497).`);return 10497};return{data:n,wrapS:q(g.wrapS)?g.wrapS:v(g.wrapS),wrapT:q(g.wrapT)?g.wrapT:v(g.wrapT),minFilter:g.minFilter,
name:p.name,id:c}})}});return function(a,b){return d.apply(this,arguments)}}();k.getNodeTransform=function(d){if(void 0===d)return Q;var a=this._nodeTransformCache.get(d);if(!a){a=this.getNodeTransform(this._getNodeParent(d));const b=this.json.nodes[d];if(b.matrix)a=t.multiply(x.create(),a,b.matrix);else if(b.translation||b.rotation||b.scale)a=x.clone(a),b.translation&&t.translate(a,a,b.translation),b.rotation&&(w[3]=I.getAxisAngle(w,b.rotation),t.rotate(a,a,w[3],w)),b.scale&&t.scale(a,a,b.scale);
this._nodeTransformCache.set(d,a)}return a};k._wrapAccessor=function(d,a){return new d(a.raw,a.byteOffset,a.byteStride,a.byteOffset+a.byteStride*(a.entryCount-1)+a.componentByteSize*a.componentCount)};k._resolveUri=function(d){return u.makeAbsolute(d,this._baseUri)};k._getNodeParent=function(d){return this._nodeParentMap.get(d)};k._checkVersionSupported=function(){const d=F.Version.parse(this.json.asset.version,"glTF");R.validate(d)};k._checkRequiredExtensionsSupported=function(){const d=this.json,
a=this._errorContext;d.extensionsRequired&&0!==d.extensionsRequired.length&&a.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: "+d.extensionsRequired.join(", "))};k._computeNodeParents=function(){this.json.nodes.forEach((d,a)=>{d.children&&d.children.forEach(b=>{this._nodeParentMap.set(b,a)})})};k._loadTextureImageData=function(){var d=l._asyncToGenerator(function*(a,b,c){const e=this._textureLoaders.get(a);if(e)return e;b=this._createTextureLoader(b,c);
this._textureLoaders.set(a,b);return b});return function(a,b,c){return d.apply(this,arguments)}}();k._createTextureLoader=function(){var d=l._asyncToGenerator(function*(a,b){a=this.json.images[a.source];if(a.uri)return this._context.loadImage(this._resolveUri(a.uri),b);const c=this._errorContext;c.errorUnsupportedIf(null==a.bufferView,"Image bufferView must be defined.");c.errorUnsupportedIf(null==a.mimeType,"Image mimeType must be defined.");const e=this.json.bufferViews[a.bufferView];b=yield this.getBuffer(e.buffer,
b);c.errorUnsupportedIf(null!=e.byteStride,"byteStride not supported for image buffer");return N(new Uint8Array(b.buffer,b.byteOffset+(e.byteOffset||0),e.byteLength),a.mimeType)});return function(a,b){return d.apply(this,arguments)}}();k.getLoadedBuffersSize=function(){var d=l._asyncToGenerator(function*(){if(this._glbBuffer)return this._glbBuffer.byteLength;const a=yield E.eachAlwaysValues(Array.from(this._bufferLoaders.values())),b=yield E.eachAlwaysValues(Array.from(this._textureLoaders.values()));
return a.reduce((c,e)=>c+(e?.byteLength??0),0)+b.reduce((c,e)=>c+(e?e.width*e.height*4:0),0)});return function(){return d.apply(this,arguments)}}();return f}();const R=new F.Version(2,0,"glTF"),Q=t.fromXRotation(x.create(),Math.PI/2),w=J.create(),O={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},P={[h.DataType.BYTE]:1,[h.DataType.UNSIGNED_BYTE]:1,[h.DataType.SHORT]:2,[h.DataType.UNSIGNED_SHORT]:2,[h.DataType.FLOAT]:4,[h.DataType.UNSIGNED_INT]:4};D.GLTFResource=S;Object.defineProperties(D,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});