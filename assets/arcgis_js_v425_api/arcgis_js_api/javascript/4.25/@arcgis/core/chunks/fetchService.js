/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import e from"../request.js";async function r(e,r){let s=await a(e,r);s=s||{},s.layers=s.layers?.filter(t)||[];const n={serviceJSON:s};if((s.currentVersion??0)<10.5)return n;const o=await a(e+"/layers",r);return n.layersJSON={layers:o?.layers?.filter(t)||[],tables:o?.tables||[]},n}function t(e){return!e.type||"Feature Layer"===e.type}async function a(r,t){return(await e(r,{responseType:"json",query:{f:"json",...t?.customParameters,token:t?.apiKey}})).data}export{a,r as f};
