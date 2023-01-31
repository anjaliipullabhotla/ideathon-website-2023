// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Accessor ../../core/arrayUtils ../../core/Collection ../../core/collectionUtils ../../core/Handles ../../core/maybe ../../core/promiseUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./support/layerUtils ./support/validation".split(" "),function(l,d,b,t,q,u,v,h,w,e,z,x,y,g){b=function(r){function k(a){a=r.call(this,a)||this;a.state=
"disabled";a._handles=new v;a._valueBeforeReady=null;a._domainInfo=g.getDomainInfo([]);a._loadLayers=y.createLoadLayersFunction();a.layers=new q;return a}l._inheritsLoose(k,r);var f=k.prototype;f.initialize=function(){this._handles.add(this.layers.on("change",()=>this._onLayersChange()));this._onLayersChange()};f.destroy=function(){this._set("state","disabled");this._handles.destroy()};f.select=function(a){if("ready"!==this.state)this._valueBeforeReady=a;else{var c=g.getValidNumber(a,this);h.isSome(c)&&
(this.enabled=!0,this.value=a)}};f.clear=function(){"ready"!==this.state?this._valueBeforeReady=null:this.enabled=!1};f.next=function(){const {state:a,allowedValues:c,enabled:m,hasNext:n,_valueIndex:p}=this;"ready"!==a&&h.isSome(this._valueBeforeReady)?this._valueBeforeReady++:0!==c.length&&(m?n&&(this.value=c[p+1]):(this.enabled=!0,this.value=c[0]))};f.previous=function(){const {state:a,allowedValues:c,enabled:m,hasPrevious:n,_valueIndex:p}=this;"ready"!==a&&h.isSome(this._valueBeforeReady)?this._valueBeforeReady++:
0!==c.length&&(m?n&&(this.value=c[p-1]):(this.enabled=!0,this.value=c[c.length-1]))};f.getValueLabel=function(a){return 0===this.layers.length?null:this._domainInfo.fieldValueMap.get(a)??null};f._onLayersChange=function(){var a=l._asyncToGenerator(function*(){this._set("state","loading");this._domainInfo=g.getDomainInfo([]);if(0!==this.layers.length)try{yield this._loadLayers(this.layers),this._setup()}catch(c){w.isAbortError(c)||this._set("state","failed")}});return function(){return a.apply(this,
arguments)}}();l._createClass(k,[{key:"enabled",get:function(){return 0<this.allowedValues.length&&this._get("enabled")},set:function(a){a!==this.enabled&&0<this.allowedValues.length&&this._set("enabled",a)}},{key:"value",get:function(){const a="ready"===this.state?this._get("value"):this._valueBeforeReady;return h.unwrapOr(a,0)},set:function(a){"ready"!==this.state?this._valueBeforeReady=a:a!==this.value&&(a=g.getValidNumber(a,this),h.isNone(a)||this._set("value",a))}},{key:"min",get:function(){return g.getMin(this.allowedValues)}},
{key:"max",get:function(){return g.getMax(this.allowedValues)}},{key:"allowedValues",get:function(){return this._domainInfo.allowedValues}},{key:"hasNext",get:function(){if(!this.enabled)return!0;const a=this._valueIndex;return 0<=a&&a<this.allowedValues.length-1}},{key:"hasPrevious",get:function(){return this.enabled?0<this._valueIndex:!0}},{key:"layers",set:function(a){const c=this._get("layers");this._set("layers",u.referenceSetter(a,c))}},{key:"filterExpressions",get:function(){return{solid:null,
xRay:null}}},{key:"_valueIndex",get:function(){return t.binaryIndexOf(this.allowedValues,this.value)}}]);return k}(b);d.__decorate([e.property({value:!1,nonNullable:!0})],b.prototype,"enabled",null);d.__decorate([e.property({nonNullable:!0})],b.prototype,"value",null);d.__decorate([e.property({readOnly:!0})],b.prototype,"min",null);d.__decorate([e.property({readOnly:!0})],b.prototype,"max",null);d.__decorate([e.property({readOnly:!0})],b.prototype,"allowedValues",null);d.__decorate([e.property({readOnly:!0})],
b.prototype,"hasNext",null);d.__decorate([e.property({readOnly:!0})],b.prototype,"hasPrevious",null);d.__decorate([e.property({type:q,nonNullable:!0})],b.prototype,"layers",null);d.__decorate([e.property({nonNullable:!0})],b.prototype,"state",void 0);d.__decorate([e.property()],b.prototype,"_valueBeforeReady",void 0);d.__decorate([e.property({readOnly:!0})],b.prototype,"_valueIndex",null);d.__decorate([e.property()],b.prototype,"_domainInfo",void 0);return b=d.__decorate([x.subclass("esri.widgets.BuildingExplorer.BuildingNumericFilterViewModel")],
b)});