/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{C as t}from"./CircularArray.js";import{c as e}from"./mathUtils.js";import{a as s,i,u as r}from"./maybe.js";class o{constructor(t,e,s,i,r=128){this._trackIdToObservations=new Map,this._idCounter=0,this._lastPurge=performance.now(),this._addOrUpdated=new Map,this._removed=[],this._maxAge=0,this._timeInfo=s,this._purgeOptions=i,this.store=t,this.objectIdField=e,this.purgeInterval=r,this._useGeneratedIds="__esri_stream_id__"===this.objectIdField}add(r){if(this._useGeneratedIds){const t=this._nextId();r.attributes[this.objectIdField]=t,r.objectId=t}else r.objectId=r.attributes[this.objectIdField];if(this._addOrUpdated.set(r.objectId,r),this._maxAge=Math.max(this._maxAge,r.attributes[this._timeInfo.startTimeField]),!this._timeInfo.trackIdField)return s(this._trackIdLessObservations)&&(this._trackIdLessObservations=new t(1e5)),void this._trackIdLessObservations.enqueue(r.objectId);const o=r.attributes[this._timeInfo.trackIdField];if(!this._trackIdToObservations.has(o)){const s=i(this._purgeOptions)&&null!=this._purgeOptions.maxObservations?this._purgeOptions.maxObservations:1e3,r=e(s,0,1e3);this._trackIdToObservations.set(o,new t(r))}const a=this._trackIdToObservations.get(o).enqueue(r.objectId);i(a)&&(this._addOrUpdated.has(a)?this._addOrUpdated.delete(a):this._removed.push(a))}checkForUpdates(){const t=this._getToAdd(),e=this._getToRemove(),s=performance.now();s-this._lastPurge>=this.purgeInterval&&(this._purge(s),this._lastPurge=s);const r=[];if(i(e))for(const t of e){const e=this.store.removeById(t);i(e)&&r.push(e)}if(i(t))for(const e of t)e.attributes.__esri_timestamp__=s,this.store.add(e);(t||r?.length)&&this.store.update(t,r)}_getToAdd(){if(!this._addOrUpdated.size)return null;const t=new Array(this._addOrUpdated.size);let e=0;return this._addOrUpdated.forEach((s=>t[e++]=s)),this._addOrUpdated.clear(),t}_getToRemove(){const t=this._removed;return this._removed.length?(this._removed=[],t):null}_nextId(){const t=this._idCounter;return this._idCounter=(this._idCounter+1)%4294967294+1,t}_purge(t){const e=this._purgeOptions;i(e)&&(this._purgeSomeByDisplayCount(e),this._purgeByAge(e),this._purgeByAgeReceived(t,e),this._purgeTracks())}_purgeSomeByDisplayCount(t){if(!t.displayCount)return;let e=this.store.size;if(e>t.displayCount){if(this._timeInfo.trackIdField)for(const s of this._trackIdToObservations.values())if(e>t.displayCount&&s.size){const t=r(s.dequeue());this._removed.push(t),e--}if(i(this._trackIdLessObservations)){let s=e-t.displayCount;for(;s-- >0;){const t=this._trackIdLessObservations.dequeue();i(t)&&this._removed.push(t)}}}}_purgeByAge(t){if(!t.age||!this._timeInfo?.startTimeField)return;const e=60*t.age*1e3,s=this._maxAge-e;this.store.forEach((t=>{t.attributes[this._timeInfo.startTimeField]<s&&this._removed.push(t.objectId)}))}_purgeByAgeReceived(t,e){if(!e.ageReceived)return;const s=t-60*e.ageReceived*1e3;this.store.forEach((t=>{t.attributes.__esri_timestamp__<s&&this._removed.push(t.objectId)}))}_purgeTracks(){this._trackIdToObservations.forEach(((t,e)=>{0===t.size&&this._trackIdToObservations.delete(e)}))}}export{o as S};