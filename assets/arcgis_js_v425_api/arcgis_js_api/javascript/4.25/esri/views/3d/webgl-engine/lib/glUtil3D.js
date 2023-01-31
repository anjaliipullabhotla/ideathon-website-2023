// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ./DefaultVertexAttributeLocations ./DefaultVertexBufferLayouts ./VertexArrayObject ../../../webgl/BufferObject ../../../webgl/enums ../../../webgl/Texture".split(" "),function(g,m,h,n,p,c,k){g.createColorTexture=function(e,d,f=4){const a=new Uint8Array(f*f*4);for(let b=0;b<a.length;b+=4)a[b+0]=255*d[0],a[b+1]=255*d[1],a[b+2]=255*d[2],a[b+3]=255*d[3];return new k.Texture(e,{target:c.TextureType.TEXTURE_2D,pixelFormat:c.PixelFormat.RGBA,dataType:c.PixelType.UNSIGNED_BYTE,samplingMode:c.TextureSamplingMode.NEAREST,
width:f,height:f},a)};g.createEmptyDepthTexture=function(e){return new k.Texture(e,{target:c.TextureType.TEXTURE_2D,pixelFormat:c.PixelFormat.RGBA,dataType:c.PixelType.UNSIGNED_BYTE,samplingMode:c.TextureSamplingMode.NEAREST,width:1,height:1},new Uint8Array([255,255,255,255]))};g.createEmptyTexture=function(e,d=4){return new k.Texture(e,{target:c.TextureType.TEXTURE_2D,pixelFormat:c.PixelFormat.RGBA,dataType:c.PixelType.UNSIGNED_BYTE,samplingMode:c.TextureSamplingMode.NEAREST,width:d,height:d})};
g.createQuadVAO=function(e,d=h.Pos2,f=m.Default3D,a=-1,b=1){let l=null;switch(d){case h.Pos2Tex:l=new Float32Array([a,a,0,0,b,a,1,0,a,b,0,1,b,b,1,1]);break;default:l=new Float32Array([a,a,b,a,a,b,b,b])}return new n.VertexArrayObject(e,f,{geometry:d},{geometry:p.BufferObject.createVertex(e,c.Usage.STATIC_DRAW,l)})};g.createScreenSizeTriangleVAO=function(e,d=h.Pos2,f=m.Default3D){const a=new Float32Array([-1,-1,3,-1,-1,3]);return new n.VertexArrayObject(e,f,{geometry:d},{geometry:p.BufferObject.createVertex(e,
c.Usage.STATIC_DRAW,a)})};Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});