/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import"../geometry.js";import t from"../Ground.js";import{L as o}from"./Logger.js";import{e}from"./maybe.js";import{eachAlways as r}from"../core/promiseUtils.js";import{e as s}from"./unitUtils.js";import i from"../geometry/Mesh.js";import{project as m}from"../geometry/projection.js";import p,{M as a}from"../geometry/support/MeshComponent.js";import n from"../geometry/Point.js";import"./ensureType.js";import"./object.js";import"../core/lang.js";import"../geometry/Extent.js";import"./tslib.es6.js";import"./string.js";import"../core/accessorSupport/decorators/property.js";import"./get.js";import"./utils.js";import"./handleUtils.js";import"./metadata.js";import"../core/Error.js";import"../config.js";import"../core/accessorSupport/decorators/subclass.js";import"./tracking.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"./ArrayPool.js";import"./watch.js";import"../core/scheduling.js";import"./nextTick.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./writer.js";import"../geometry/support/webMercatorUtils.js";import"./Ellipsoid.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"./jsonMap.js";import"../geometry/support/jsonUtils.js";import"../Color.js";import"./colorUtils.js";import"./mathUtils.js";import"./vec3.js";import"./common.js";import"../core/Collection.js";import"../core/Evented.js";import"./shared.js";import"./SimpleObservable.js";import"./collectionUtils.js";import"./compilerUtils.js";import"../core/Loadable.js";import"../core/Promise.js";import"./loadAll.js";import"./asyncUtils.js";import"./enumeration.js";import"./debugFlags.js";import"./opacityUtils.js";import"./projectionEllipsoid.js";import"../core/HandleOwner.js";import"./WatchUpdatingTracking.js";import"../core/reactiveUtils.js";import"./axisAngleDegrees.js";import"./quat.js";import"./quatf64.js";import"./georeference.js";import"./mat3f64.js";import"./mat4.js";import"./mat4f64.js";import"./mat3.js";import"./BufferView.js";import"./vec2.js";import"./vec32.js";import"./projection.js";import"./triangulationUtils.js";import"./earcut.js";import"./deduplicate.js";import"../core/urlUtils.js";import"../geometry/support/MeshMaterial.js";import"../geometry/support/MeshTexture.js";import"./imageUtils.js";import"./persistableUrlUtils.js";import"../geometry/support/MeshMaterialMetallicRoughness.js";import"./pe.js";import"./assets.js";import"../request.js";import"../kernel.js";import"./aaBoundingRect.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";async function l(e,s,i){let m;if(c(e)||e instanceof t){const t=await async function(t){return c(t)?t.load():(await t.load(),await r(t.layers.map((t=>t.load()))),t)}(e);return m=await t.createElevationSampler(s,{demResolution:i?.demResolution??"finest-contiguous"}),j(m,s,{material:i?.material})}return"string"==typeof i?.demResolution?(o.getLogger("esri.geometry.support.meshUtils.elevation").error("create()","demResolution must be a number when used directly with a sampler"),null):j(e,s,{material:i?.material,demResolution:i?.demResolution})}function j(t,o,r){const n=s(o.spatialReference),l=(r.demResolution??t.demResolution.min)/n,j=Math.round(o.width/l),c=Math.round(o.height/l),g=j+1,y=c+1,d=new Float64Array(g*y*3),f=new Float32Array(g*y*2);let h=0,U=0;const w=new Uint32Array(j*c*2*3);let R=0,b=0;const v=!t.spatialReference.equals(o.spatialReference);u.spatialReference=o.spatialReference;const{xmin:M,ymin:x,height:A,width:S}=o;for(let o=0;o<y;o++){const r=x+A*(o/c);for(let s=0;s<g;s++){const i=M+S*(s/j);if(d[h++]=i,d[h++]=r,v){u.x=i,u.y=r;const o=m(u,t.spatialReference);d[h++]=e(t.elevationAt(o.x,o.y),0)}else d[h++]=e(t.elevationAt(i,r),0);const p=s/j,a=o/c;f[U++]=p,f[U++]=a,o!==c&&s!==j&&(w[b++]=R+1,w[b++]=R+g+1,w[b++]=R+g,w[b++]=R,w[b++]=R+1,w[b++]=R+g),R++}}return new i({vertexAttributes:new a({position:d,uv:f}),components:[new p({faces:w,shading:"smooth",material:r?.material??null})],spatialReference:o.spatialReference})}function c(t){return"type"in t&&("elevation"===t.type||"base-elevation"===t.type)}const u=new n;export{l as create};