/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{c as e}from"./aaBoundingRect.js";import{c as t}from"./mat3f32.js";import{B as s}from"./Bitmap.js";import{T as r}from"./TiledDisplayObject.js";import{b as i}from"./WGLContainer.js";import{W as a}from"./enums4.js";import{T as n}from"./TileContainer.js";class o extends r{constructor(e,t,r,i,a,n,o=null){super(e,t,r,i,a,n),this.bitmap=new s(o,{immutable:!1,requestRenderOnSourceChangedEnabled:!1}),this.bitmap.coordScale=[a,n],this.bitmap.once("isReady",(()=>this.ready()))}destroy(){super.destroy(),this.bitmap.destroy()}beforeRender(e){super.beforeRender(e),this.bitmap.beforeRender(e)}afterRender(e){super.afterRender(e),this.bitmap.afterRender(e)}set stencilRef(e){this.bitmap.stencilRef=e}get stencilRef(){return this.bitmap.stencilRef}_createTransforms(){return{dvs:t(),tileMat3:t()}}setTransform(e){super.setTransform(e),this.bitmap.transforms.dvs=this.transforms.dvs}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap&&(this.bitmap.stage=null)}}class m extends n{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.bitmap.blendFunction))}createTile(t){const s=this._tileInfoView.getTileBounds(e(),t),r=this._tileInfoView.getTileResolution(t.level),[i,a]=this._tileInfoView.tileInfo.size;return new o(t,r,s[0],s[3],i,a)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap (tile)",brushes:[i.bitmap],target:()=>this.children.map((e=>e.bitmap)),drawPhase:a.MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===a.MAP&&super.doRender(e)}}export{m as B};
