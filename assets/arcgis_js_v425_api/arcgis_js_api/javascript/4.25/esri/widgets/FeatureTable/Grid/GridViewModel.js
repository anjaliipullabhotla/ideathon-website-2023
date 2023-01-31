// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/Collection ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass".split(" "),function(h,d,c,n,e,u,v,t){c=function(p){function k(a){var b=p.call(this,a)||this;b.cellClassNameGenerator=null;b.columnReorderingEnabled=!0;b.columns=new n;b.dataProvider=function(){var g=h._asyncToGenerator(function*({page:l,
pageSize:q},m){const {store:r}=h._assertThisInitialized(b);m&&(r?m(yield r.fetchItems({page:l,pageSize:q})):m&&m([]))});return function(l,q){return g.apply(this,arguments)}}();b.multiSortEnabled=!1;b.pageSize=50;b.rowDetailsRenderer=null;b.store=null;return b}h._inheritsLoose(k,p);var f=k.prototype;f.closeColumnMenus=function(){this.columns?.forEach(a=>{a.menu&&a.menu.open&&a.menu.set("open",!1)})};f.sortColumn=function(a,b){if(a=this.findColumn(a))a.direction=b};f.hideColumn=function(a){(a=this.findColumn(a))&&
!1===a.hidden&&(a.hidden=!0)};f.showColumn=function(a){(a=this.findColumn(a))&&a.hidden&&(a.hidden=!1)};f.showAllColumns=function(){this.columns?.forEach(a=>{a.hidden&&(a.hidden=!1)})};f.findColumn=function(a){const b=[];this.columns.forEach(g=>{b.push(g);"columns"in g&&g.columns?.forEach(l=>b.push(l))});return b.find(g=>g.path===a)};f.getRowItemAt=function(a){return this.store?.getLocalItemAt(a)};f.refresh=function(){this.store&&(this.store.reset(),this.store.load())};h._createClass(k,[{key:"highlightIds",
get:function(){return this._get("highlightIds")||new n},set:function(a){Array.isArray(a)?this._set("highlightIds",new n(a)):this._set("highlightIds",a)}},{key:"size",get:function(){return this.store&&this.store.count||0}},{key:"state",get:function(){const {store:a}=this;return a&&"disabled"!==a.state?"loading"===a.state?"loading":"loaded"===a.state?"loaded":"ready":"disabled"}}]);return k}(c);d.__decorate([e.property()],c.prototype,"cellClassNameGenerator",void 0);d.__decorate([e.property()],c.prototype,
"columnReorderingEnabled",void 0);d.__decorate([e.property()],c.prototype,"columns",void 0);d.__decorate([e.property()],c.prototype,"dataProvider",void 0);d.__decorate([e.property()],c.prototype,"highlightIds",null);d.__decorate([e.property()],c.prototype,"multiSortEnabled",void 0);d.__decorate([e.property()],c.prototype,"pageSize",void 0);d.__decorate([e.property()],c.prototype,"rowDetailsRenderer",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"size",null);d.__decorate([e.property()],
c.prototype,"store",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"state",null);return c=d.__decorate([t.subclass("esri.widgets.FeatureTable.Grid.GridViewModel")],c)});