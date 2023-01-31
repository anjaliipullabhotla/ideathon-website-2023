/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import{JSONSupport as t}from"../core/JSONSupport.js";import{clone as r}from"../core/lang.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import{J as s}from"./jsonMap.js";import n from"../TimeExtent.js";import l from"../TimeInterval.js";import{i as p}from"./maybe.js";import{s as u}from"./object.js";import{r as a}from"./reader.js";import{w as m}from"./writer.js";var d;let c=d=class extends t{constructor(e){super(e),this.enabled=!1,this.longNames=!1,this.minimized=!1,this.pinnedLevels=!1,this.site=null,this.facility=null,this.level=null}clone(){return new d(r({enabled:this.enabled,longNames:this.longNames,minimized:this.minimized,pinnedLevels:this.pinnedLevels,site:this.site,facility:this.facility,level:this.level}))}};e([o({type:Boolean,json:{read:{source:"enabled"},write:{target:"enabled"}}})],c.prototype,"enabled",void 0),e([o({type:Boolean,json:{read:{source:"longNames"},write:{target:"longNames"}}})],c.prototype,"longNames",void 0),e([o({type:Boolean,json:{read:{source:"minimized"},write:{target:"minimized"}}})],c.prototype,"minimized",void 0),e([o({type:Boolean,json:{read:{source:"pinnedLevels"},write:{target:"pinnedLevels"}}})],c.prototype,"pinnedLevels",void 0),e([o({type:String,json:{read:{source:"site"},write:{target:"site"}}})],c.prototype,"site",void 0),e([o({type:String,json:{read:{source:"facility"},write:{target:"facility"}}})],c.prototype,"facility",void 0),e([o({type:String,json:{read:{source:"level"},write:{target:"level"}}})],c.prototype,"level",void 0),c=d=e([i("esri.webdoc.widgets.FloorFilter")],c);const y=c;var v;const h=new s({slider:"slider",picker:"picker"});let w=v=class extends t{constructor(e){super(e),this.interactionMode=null,this.numStops=null,this.stopInterval=null}clone(){return new v({interactionMode:this.interactionMode,numStops:this.numStops,stopInterval:this.stopInterval})}};e([o({type:h.apiValues,nonNullable:!0,json:{type:h.jsonValues,default:null,read:{reader:h.read},write:{isRequired:!0,writer:h.write}}})],w.prototype,"interactionMode",void 0),e([o({type:Number,json:{read:{source:"numberOfStops"},write:{target:"numberOfStops",overridePolicy(){const e=null!=this.stopInterval;return{enabled:!e,isRequired:!e}}}}})],w.prototype,"numStops",void 0),e([o({type:Number,json:{write:{overridePolicy(){return{isRequired:null==this.numStops}}}}})],w.prototype,"stopInterval",void 0),w=v=e([i("esri.webdoc.widgets.Range")],w);const g=w;var T;let b=T=class extends t{constructor(e){super(e),this.currentTimeExtent=null,this.fullTimeExtent=null,this.loop=!1,this.numStops=null,this.numThumbs=null,this.stopDelay=null,this.stopInterval=null,this.stops=null}readCurrentTimeExtent(e){if(!e)return;const t=null!=e[0]?new Date(e[0]):null,r=null!=e[1]?new Date(e[1]):null;return new n({start:t,end:r})}writeCurrentTimeExtent(e,t,r){e&&u(r,[p(e.start)?e.start.getTime():null,p(e.end)?e.end.getTime():null],t)}readFullTimeExtent(e,t){const r=t.properties;if(!r)return;const o=null!=r.endTime?new Date(r.endTime):null,i=null!=r.startTime?new Date(r.startTime):null;return new n({start:i,end:o})}writeFullTimeExtent(e,t){if(!e)return;const r=t.properties=t.properties||{},o=e.end,i=e.start;o&&(r.endTime=p(o)?o.getTime():null),i&&(r.startTime=p(i)?i.getTime():null)}readStopInterval(e,t,r){return e?l.fromJSON({value:e.interval,unit:e.units},r):null}writeStopInterval(e,t,r,o){if(!e)return;const i=e.toJSON(o);u(r,{interval:i.value,units:i.unit},t)}readStops(e){return e&&e.length?e.map((e=>new Date(e))):null}writeStops(e,t,r){e&&e.length&&u(r,e.map((e=>e.getTime())),t)}clone(){return new T(r({currentTimeExtent:this.currentTimeExtent,fullTimeExtent:this.fullTimeExtent,loop:this.loop,numStops:this.numStops,numThumbs:this.numThumbs,stopDelay:this.stopDelay,stopInterval:this.stopInterval,stops:this.stops}))}};e([o({type:n,json:{read:{source:"properties.currentTimeExtent"},write:{target:"properties.currentTimeExtent"}}})],b.prototype,"currentTimeExtent",void 0),e([a("currentTimeExtent")],b.prototype,"readCurrentTimeExtent",null),e([m("currentTimeExtent")],b.prototype,"writeCurrentTimeExtent",null),e([o({type:n,json:{read:{source:["properties.endTime","properties.startTime"]},write:{target:{"properties.endTime":{type:Number},"properties.startTime":{type:Number}}}}})],b.prototype,"fullTimeExtent",void 0),e([a("fullTimeExtent")],b.prototype,"readFullTimeExtent",null),e([m("fullTimeExtent")],b.prototype,"writeFullTimeExtent",null),e([o({type:Boolean,nonNullable:!0,json:{default:!1,read:{source:"properties.loop"},write:{target:"properties.loop"}}})],b.prototype,"loop",void 0),e([o({type:Number,json:{read:{source:"properties.numberOfStops"},write:{target:"properties.numberOfStops",overridePolicy(){const e=!!this.stopInterval,t=!!this.stops?.length,r=!(e||t);return{enabled:r,isRequired:r}}}}})],b.prototype,"numStops",void 0),e([o({type:[1,2],nonNullable:!0,json:{read:{source:"properties.thumbCount"},write:{target:"properties.thumbCount",isRequired:!0}}})],b.prototype,"numThumbs",void 0),e([o({type:Number,nonNullable:!0,json:{read:{source:"properties.thumbMovingRate"},write:{target:"properties.thumbMovingRate",isRequired:!0}}})],b.prototype,"stopDelay",void 0),e([o({type:l,json:{read:{source:"properties.timeStopInterval"},write:{target:"properties.timeStopInterval",overridePolicy(){const e=null!=this.numStops,t=!!this.stops?.length;return{enabled:!t,isRequired:!(e||t)}}}}})],b.prototype,"stopInterval",void 0),e([a("stopInterval")],b.prototype,"readStopInterval",null),e([m("stopInterval")],b.prototype,"writeStopInterval",null),e([o({type:[Date],json:{read:{source:"properties.stops"},write:{target:"properties.stops",overridePolicy(){return{isRequired:null==this.numStops&&!this.stopInterval}}}}})],b.prototype,"stops",void 0),e([a("stops")],b.prototype,"readStops",null),e([m("stops")],b.prototype,"writeStops",null),b=T=e([i("esri.webdoc.widgets.TimeSlider")],b);const f=b;var S;let j=S=class extends t{constructor(e){super(e),this.range=null,this.timeSlider=null,this.floorFilter=null}clone(){return new S(r({range:this.range,timeSlider:this.timeSlider,floorFilter:this.floorFilter}))}};e([o({type:g,json:{write:!0}})],j.prototype,"range",void 0),e([o({type:f,json:{write:!0}})],j.prototype,"timeSlider",void 0),e([o({type:y,json:{write:!0}})],j.prototype,"floorFilter",void 0),j=S=e([i("esri.webdoc.Widgets")],j);const x=j;export{x as W,y as a,f as b};