// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("./chunks/_rollupPluginBabelHelpers ./chunks/tslib.es6 ./core/Clonable ./core/Cyclical ./core/JSONSupport ./core/mathUtils ./core/maybe ./core/accessorSupport/decorators/property ./core/arrayUtils ./core/accessorSupport/decorators/cast ./core/accessorSupport/decorators/reader ./core/accessorSupport/decorators/subclass ./core/accessorSupport/decorators/writer ./core/accessorSupport/ensureType ./geometry/Point".split(" "),function(r,e,c,t,u,v,w,h,A,q,x,y,z,d,n){c=function(f){function p(...a){a=
f.call(this,...a)||this;a.position=new n([0,0,0]);a.heading=0;a.tilt=0;a.fov=55;return a}r._inheritsLoose(p,f);var k=p.prototype;k.normalizeCtorArgs=function(a,g,b,l){return a&&"object"===typeof a&&("x"in a||Array.isArray(a))?(a={position:a},null!=g&&(a.heading=g),null!=b&&(a.tilt=b),null!=l&&(a.fov=l),a):a};k.writePosition=function(a,g,b,l){const m=a.clone();m.x=d.ensureNumber(a.x||0);m.y=d.ensureNumber(a.y||0);m.z=a.hasZ?d.ensureNumber(a.z||0):a.z;g[b]=m.write({},l)};k.readPosition=function(a,g){const b=
new n;b.read(a,g);b.x=d.ensureNumber(b.x||0);b.y=d.ensureNumber(b.y||0);b.z=b.hasZ?d.ensureNumber(b.z||0):b.z;return b};k.equals=function(a){return w.isNone(a)?!1:this.tilt===a.tilt&&this.heading===a.heading&&this.fov===a.fov&&this.position.equals(a.position)};return p}(c.ClonableMixin(u.JSONSupport));e.__decorate([h.property({type:n,json:{write:{isRequired:!0}}})],c.prototype,"position",void 0);e.__decorate([z.writer("position")],c.prototype,"writePosition",null);e.__decorate([x.reader("position")],
c.prototype,"readPosition",null);e.__decorate([h.property({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),q.cast(f=>t.cyclicalDegrees.normalize(d.ensureNumber(f)))],c.prototype,"heading",void 0);e.__decorate([h.property({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),q.cast(f=>v.clamp(d.ensureNumber(f),-180,180))],c.prototype,"tilt",void 0);e.__decorate([h.property({type:Number,nonNullable:!0,json:{read:!1,write:!1}})],c.prototype,"fov",void 0);return c=e.__decorate([y.subclass("esri.Camera")],
c)});