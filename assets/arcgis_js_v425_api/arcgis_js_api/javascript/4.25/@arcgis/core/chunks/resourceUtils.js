/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import e from"../request.js";import t from"../core/Error.js";import{j as r,i as s,a as o}from"./maybe.js";import{join as a,getPathExtension as n}from"../core/urlUtils.js";import"../config.js";import"./object.js";import"../core/lang.js";import"../kernel.js";import"./Logger.js";import"./string.js";import"../core/promiseUtils.js";async function i(e,t={},s){await e.load(s);const o=a(e.itemUrl,"resources"),{start:n=1,num:i=10,sortOrder:c="asc",sortField:l="created"}=t,u={query:{start:n,num:i,sortOrder:c,sortField:l,token:e.apiKey},signal:r(s,"signal")},p=await e.portal._request(o,u);return{total:p.total,nextStart:p.nextStart,resources:p.resources.map((({created:t,size:r,resource:s})=>({created:new Date(t),size:r,resource:e.resourceFromPath(s)})))}}async function c(e,o,n,i){if(!e.hasPath())throw new t(`portal-item-resource-${o}:invalid-path`,"Resource does not have a valid path");const c=e.portalItem;await c.load(i);const l=a(c.userItemUrl,"add"===o?"addResources":"updateResources"),[u,m]=p(e.path),h=await d(n),f=new FormData;return u&&"."!==u&&f.append("resourcesPrefix",u),s(i)&&i.compress&&f.append("compress","true"),f.append("fileName",m),f.append("file",h,m),f.append("f","json"),s(i)&&i.access&&f.append("access",i.access),await c.portal._request(l,{method:"post",body:f,signal:r(i,"signal")}),e}async function l(e,s,o){if(!s.hasPath())throw new t("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(o);const n=a(e.userItemUrl,"removeResources");await e.portal._request(n,{method:"post",query:{resource:s.path},signal:r(o,"signal")}),s.portalItem=null}async function u(e,t){await e.load(t);const s=a(e.userItemUrl,"removeResources");return e.portal._request(s,{method:"post",query:{deleteAll:!0},signal:r(t,"signal")})}function p(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function m(e){const[t,r]=function(e){const t=n(e);return o(t)?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}(e),[s,a]=p(t);return[s,a,r]}async function d(t){return t instanceof Blob?t:(await e(t.url,{responseType:"blob"})).data}function h(e,t){if(!e.hasPath())return null;const[r,,s]=m(e.path);return e.portalItem.resourceFromPath(a(r,t+s))}function f(e,t){if(!e.hasPath())return null;const[r,,s]=m(e.path);return e.portalItem.resourceFromPath(a(r,t+s))}export{c as addOrUpdateResource,d as contentToBlob,i as fetchResources,h as getSiblingOfSameType,f as getSiblingOfSameTypeI,u as removeAllResources,l as removeResource,m as splitPrefixFileNameAndExtension};
