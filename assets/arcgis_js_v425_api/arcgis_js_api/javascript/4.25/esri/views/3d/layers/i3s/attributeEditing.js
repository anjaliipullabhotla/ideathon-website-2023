// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/lang","../../../../core/maybe","../support/attributeUtils"],function(y,C,z,A){function D(a,b){const c=b.edits.updateFeatures;if(!c||0===c.length)return new B;const k=E(b),g=new B;b=new Map;for(let d=0;d<a.attributeStorageInfo.length;d++)b.set(a.attributeStorageInfo[d].name,d);const q=a.fieldsIndex,l=a.objectIdField,u=c.filter(d=>{d=A.attributeLookup(q,d.attributes,l);return k.has(d)});a.forEachNode((d,e)=>{const v=new Set(e);for(const m of u){const n=A.attributeLookup(q,
m.attributes,l);if(!v.has(n))continue;const w=e.indexOf(n);for(const x in m.attributes){var p=a.fieldsIndex.normalizeFieldName(x);var f=g;var h=d.index,r=f.get(h);r?f=r:(r=new F,f.set(h,r),f=r);(h=f.get(p))?p=h:(h=[],f.set(p,h),p=h);p.push({featureIndex:w,featureId:n,value:m.attributes[x]})}}});return g}function E(a){const b=new Set;if(!a.updatedFeatures)return b;for(const c of a.updatedFeatures)null!=c.objectId&&null==c.error&&b.add(c.objectId);return b}const G={setAttribute(){},rollback(){},commit(){}};
var t;(function(a){a[a.EDITING=0]="EDITING";a[a.ROLLED_BACK=1]="ROLLED_BACK";a[a.COMMITTED=2]="COMMITTED"})(t||(t={}));const F=Map,B=Map;y.createInteractiveEditSession=function(a,b){const c=b.attributes[a.objectIdField];var k=a.sessions.get(c);if(k)return k;const g=C.clone(b.attributes),q=new Set;if(null==c)return G;const l=a.i3sOverrides.createInteractiveEditSession(c),u=new Map;let d=t.EDITING;k={setAttribute(e,v){if(d===t.EDITING){var p=a.fieldsIndex.get(e);if(!z.isNone(p)){var f=a.attributeStorageInfo.findIndex(m=>
m.name===p.name);if(!(0>f)){l.set(f,v);var h=a.attributeStorageInfo[f],r=!1;q.add(e);a.forEachNode((m,n)=>{var w=u.get(m);null==w?(n=n.indexOf(c),u.set(m,n)):n=w;if(-1!==n&&(w=a.getAttributeData(m.index))){const x=w[h.name];x&&(x[n]=v,a.setAttributeData(m.index,w,b),r=!0)}});r&&a.clearMemCache()}}}},rollback(){if(d===t.EDITING){for(const e of q)this.setAttribute(e,g[e]);l.rollback();d=t.ROLLED_BACK;a.sessions.delete(c)}},commit(){d===t.EDITING&&(l.commit(),d=t.COMMITTED,a.sessions.delete(c))}};a.sessions.set(c,
k);return k};y.processAttributeEdits=function(a,b){b=D(a,b);if(0!==b.size){var c=new Map;for(let g=0;g<a.attributeStorageInfo.length;g++)c.set(a.attributeStorageInfo[g].name,g);var k=!1;b.forEach((g,q)=>{const l=a.getAttributeData(q);let u=!1;g.forEach((d,e)=>{const v=z.isSome(l)?l[e]:null;e=c.get(e);for(const {featureIndex:p,value:f,featureId:h}of d)v&&(v[p]=f,k=u=!0),a.i3sOverrides.updateAttributeValue(h,e,f)});u&&a.setAttributeData(q,l,null)});k&&a.clearMemCache()}};y.processGeometryEdits=function(a,
b){b=[...b.addedFeatures,...b.updatedFeatures,...b.deletedFeatures];for(const c of b)c.objectId&&a.i3sOverrides.updateGeometry(c.objectId)};Object.defineProperties(y,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});