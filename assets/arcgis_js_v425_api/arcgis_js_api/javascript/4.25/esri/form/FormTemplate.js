// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/JSONSupport ../core/lang ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/cast ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ./ExpressionInfo ./elements/GroupElement ./support/elements".split(" "),function(p,c,b,m,d,q,r,t,u,v,w,e){var g;const h=e.buildTypeMaps(w);b=g=function(n){function k(a){a=n.call(this,a)||this;
a.description=null;a.elements=null;a.expressionInfos=null;a.preserveFieldValuesWhenHidden=!1;a.title=null;return a}p._inheritsLoose(k,n);var f=k.prototype;f.castElements=function(a){return e.ensureType(a,h)};f.readElements=function(a,l){return e.fromJSON(l.formElements,h)};f.writeElements=function(a,l){l.formElements=e.toJSON(a,h)};f.clone=function(){return new g({description:this.description,expressionInfos:m.clone(this.expressionInfos),elements:m.clone(this.elements),title:this.title,preserveFieldValuesWhenHidden:this.preserveFieldValuesWhenHidden})};
return k}(b.JSONSupport);c.__decorate([d.property({type:String,json:{write:!0}})],b.prototype,"description",void 0);c.__decorate([d.property({json:{write:!0}})],b.prototype,"elements",void 0);c.__decorate([q.cast("elements")],b.prototype,"castElements",null);c.__decorate([r.reader("elements",["formElements"])],b.prototype,"readElements",null);c.__decorate([u.writer("elements")],b.prototype,"writeElements",null);c.__decorate([d.property({type:[v],json:{write:!0}})],b.prototype,"expressionInfos",void 0);
c.__decorate([d.property({type:Boolean,json:{default:!1,write:!0}})],b.prototype,"preserveFieldValuesWhenHidden",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],b.prototype,"title",void 0);return b=g=c.__decorate([t.subclass("esri.form.FormTemplate")],b)});