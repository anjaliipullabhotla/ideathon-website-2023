// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../chunks/_rollupPluginBabelHelpers ../core/CircularArray ../core/maybe ./geohashUtils ../geometry/SpatialReference ../layers/graphics/featureConversionUtils ../layers/graphics/OptimizedGeometry ../layers/graphics/data/projectionSupport ../views/2d/layers/features/support/FeatureSetReaderJSON".split(" "),function(J,K,Q,C,R,L,G,H,M,N){let S=function(){function A(a=[],b,e=8096){this.onRelease=d=>{};this._nodes=0;this._root=new I(this,0,0,0);this._statisticFields=a;this._pool=e?new Q(8096):
null;this._serviceInfo=b}var r=A.prototype;r.destroy=function(){this.clear()};r._acquire=function(a,b,e){this._nodes++;let d=null;C.isSome(this._pool)&&(d=this._pool.dequeue());C.isSome(d)?d.realloc(a,b,e):d=new I(this,a,b,e);return d};r._release=function(a){this.onRelease(a);this._nodes--;C.isSome(this._pool)&&this._pool.enqueue(a)};r.dropLevels=function(a){this.forEach(b=>{if(b.depth>=a)for(let e=0;e<b.children.length;e++){const d=b.children[e];d&&this._release(d)}});this.forEach(b=>{if(b.depth>=
a)for(let e=0;e<b.children.length;e++)b.children[e]=null})};r.clear=function(){this.forEach(a=>this._release(a));this._root=new I(this,0,0,0)};r.insert=function(a,b,e=0){const d=N.FeatureSetReaderJSON.fromOptimizedFeatures([a],this._serviceInfo).getCursor();d.next();const g=d.readGeometry();if(g){var [f,c]=g.coords;this.insertCursor(d,a.displayId,f,c,a.geohashX,a.geohashY,b,e)}};r.insertCursor=function(a,b,e,d,g,f,c,m=0){let h=this._root,l=0,n=0,t=0;for(;null!==h;){h.depth>=m&&(h.count+=1,h.xTotal+=
e,h.yTotal+=d,h.xGeohashTotal+=g,h.yGeohashTotal+=f,h.referenceId=b,this._updateStatisticsCursor(a,h,1));if(l>=c){h.add(b);break}var q=Math.ceil((l+1)/2),k=Math.floor((l+1)/2);const u=1-l%2;var p=30-(3*q+2*k);q=30-(2*q+3*k);p=(g&7*u+3*(1-u)<<p)>>p;q=(f&3*u+7*(1-u)<<q)>>q;k=p+q*(8*u+4*(1-u));const v=2*u+3*(1-u);n=n<<3*u+2*(1-u)|p;t=t<<v|q;null==h.children[k]&&(h.children[k]=this._acquire(n,t,l+1));l+=1;h=h.children[k]}};r.remove=function(a,b){const e=N.FeatureSetReaderJSON.fromOptimizedFeatures([a],
this._serviceInfo).getCursor();e.next();const d=e.readGeometry();if(d){var [g,f]=d.coords;this.removeCursor(e,g,f,a.geohashX,a.geohashY,b)}};r.removeCursor=function(a,b,e,d,g,f){let c=this._root,m=0;for(;null!==c;){--c.count;c.xTotal-=b;c.yTotal-=e;c.xGeohashTotal-=d;c.yGeohashTotal-=g;this._updateStatisticsCursor(a,c,-1);if(m>=f){c.remove(a.getDisplayId());break}var h=Math.ceil((m+1)/2);const t=Math.floor((m+1)/2);var l=1-m%2,n=30-(3*h+2*t);h=30-(2*h+3*t);l=((d&7*l+3*(1-l)<<n)>>n)+((g&3*l+7*(1-l)<<
h)>>h)*(8*l+4*(1-l));n=c.children[l];1===n?.count&&(this._release(n),c.children[l]=null);m+=1;c=n}};r.forEach=function(a){let b=this._root;for(;null!==b;){const e=this._linkChildren(b)||b.next;a(b);b=e}};r.find=function(a,b,e){return this._root.find(a,b,e,0,0,0)};r.findIf=function(a){let b=null;this.forEach(e=>{a(e)&&(b=e)});return b};r.findAllIf=function(a){const b=[];this.forEach(e=>{a(e)&&b.push(e)});return b};r.findSingleOccupancyNode=function(a,b,e,d,g){let f=this._root;for(;null!==f;){var c=
f.depth,m=f.xNode,h=f.yNode;const p=1-c%2;var l=f.xGeohashTotal/f.count,n=f.yGeohashTotal/f.count;if(1===f.count&&a<l&&l<=e&&b<n&&n<=d)return f;if(c>=g)f=f.next;else{n=Math.ceil((c+1)/2);c=Math.floor((c+1)/2);l=30-(3*n+2*c);var t=30-(2*n+3*c),q=~((1<<l)-1),k=~((1<<t)-1);m<<=3*p+2*(1-p);h<<=2*p+3*(1-p);c=Math.max(m,(a&q)>>l);n=Math.max(h,(b&k)>>t);l=Math.min(m+8*p+4*(1-p),(e&q)>>l);t=Math.min(h+4*p+8*(1-p),(d&k)>>t);for(q=k=null;n<=t;n++)for(let u=c;u<=l;u++){const v=f.children[u-m+(n-h)*(8*p+4*(1-
p))];v&&(k||(k=v,k.next=f.next),q&&(q.next=v),q=v,v.next=f.next)}f=k||f.next}}return null};r.getRegionDisplayIds=function(a){let b=this._root;const {bounds:e,geohashBounds:d,level:g}=a,[f,c,m,h]=e,l=[];for(;null!==b;){a=b.depth;var n=b.xNode,t=b.yNode;if(a>=g)a=b.xTotal/b.count,n=b.yTotal/b.count,a>=f&&a<=m&&n>=c&&n<=h&&b.displayIds.forEach(y=>l.push(y)),b=b.next;else{var q=Math.ceil((a+1)/2),k=Math.floor((a+1)/2);a=1-a%2;var p=30-(3*q+2*k),u=30-(2*q+3*k),v=~((1<<p)-1),w=~((1<<u)-1);n<<=3*a+2*(1-
a);t<<=2*a+3*(1-a);q=Math.max(n,(d.xLL&v)>>p);k=Math.max(t,(d.yLL&w)>>u);p=Math.min(n+8*a+4*(1-a),(d.xTR&v)>>p);u=Math.min(t+4*a+8*(1-a),(d.yTR&w)>>u);for(v=w=null;k<=u;k++)for(let y=q;y<=p;y++){const z=b.children[y-n+(k-t)*(8*a+4*(1-a))];z&&(w||(w=z,w.next=b.next),v&&(v.next=z),v=z,z.next=b.next)}b=w||b.next}}return l};r.getRegionStatistics=function(a){var b=this._root;let e=0,d=0,g=0;const f={},{bounds:c,geohashBounds:m,level:h}=a,[l,n,t,q]=c;for(a=0;null!==b;){var k=b.depth,p=b.xNode,u=b.yNode;
if(k>=h)k=b.xTotal/b.count,p=b.yTotal/b.count,k>l&&k<=t&&p>n&&p<=q&&(e+=b.count,d+=b.xTotal,g+=b.yTotal,1===b.count&&(a=b.referenceId),this._aggregateStatistics(f,b.statistics)),b=b.next;else{var v=Math.ceil((k+1)/2),w=Math.floor((k+1)/2);k=1-k%2;var y=30-(3*v+2*w),z=30-(2*v+3*w),D=~((1<<y)-1),B=~((1<<z)-1);p<<=3*k+2*(1-k);u<<=2*k+3*(1-k);v=Math.max(p,(m.xLL&D)>>y);w=Math.max(u,(m.yLL&B)>>z);y=Math.min(p+8*k+4*(1-k),(m.xTR&D)>>y);z=Math.min(u+4*k+8*(1-k),(m.yTR&B)>>z);D=B=null;for(let E=w;E<=z;E++)for(let F=
v;F<=y;F++){const x=b.children[F-p+(E-u)*(8*k+4*(1-k))];if(x)if(E!==w&&E!==z&&F!==v&&F!==y){const O=x.xTotal/x.count,P=x.yTotal/x.count;O>l&&O<=t&&P>n&&P<=q&&(e+=x.count,d+=x.xTotal,g+=x.yTotal,1===x.count&&(a=x.referenceId),this._aggregateStatistics(f,x.statistics))}else B||(B=x,B.next=b.next),D&&(D.next=x),D=x,x.next=b.next}b=B||b.next}}b=this.normalizeStatistics(f,e);return{count:e,attributes:b,xTotal:d,yTotal:g,referenceId:a}};r.getBins=function(a){const b=[],{geohashBounds:e,level:d}=a;for(a=
this._root;null!==a;){var g=a.depth,f=a.xNode,c=a.yNode;if(g>=d)b.push(a),a=a.next;else{var m=Math.ceil((g+1)/2),h=Math.floor((g+1)/2);g=1-g%2;var l=30-(3*m+2*h),n=30-(2*m+3*h),t=~((1<<l)-1),q=~((1<<n)-1);f<<=3*g+2*(1-g);c<<=2*g+3*(1-g);m=Math.max(f,(e.xLL&t)>>l);h=Math.max(c,(e.yLL&q)>>n);l=Math.min(f+8*g+4*(1-g),(e.xTR&t)>>l);n=Math.min(c+4*g+8*(1-g),(e.yTR&q)>>n);for(t=q=null;h<=n;h++)for(let k=m;k<=l;k++){const p=a.children[k-f+(h-c)*(8*g+4*(1-g))];p&&(q||(q=p,q.next=a.next),t&&(t.next=p),t=p,
p.next=a.next)}a=q||a.next}}return b};r._linkChildren=function(a){let b=null,e=null;for(let d=0;d<=a.children.length;d++){const g=a.children[d];g&&(b||(b=g,b.next=a.next),e&&(e.next=g),e=g,g.next=a.next)}return b};r._updateStatisticsCursor=function(a,b,e){for(const f of this._statisticFields){const c=f.name,m=f.inField?a.readAttribute(f.inField):a.getComputedNumericAtIndex(f.inFieldIndex);switch(f.statisticType){case "min":if(isNaN(m))break;if(!b.statistics[c]){b.statistics[c]={value:m};break}b.statistics[c].value=
Math.min(b.statistics[c].value,m);break;case "max":if(isNaN(m))break;if(!b.statistics[c]){b.statistics[c]={value:m};break}b.statistics[c].value=Math.max(b.statistics[c].value,m);break;case "sum":case "avg":b.statistics[c]||(b.statistics[c]={value:0,nanCount:0});var d=b.statistics[c].value,g=b.statistics[c].nanCount??0;null==m||isNaN(m)?b.statistics[c].nanCount=g+e:b.statistics[c].value=d+e*m;break;case "avg_angle":b.statistics[c]||(b.statistics[c]={x:0,y:0,nanCount:0});d=b.statistics[c].x;g=b.statistics[c].y;
const h=b.statistics[c].nanCount??0,l=Math.PI/180;null==m||isNaN(m)?b.statistics[c].nanCount=h+e:(b.statistics[c].x=d+e*Math.cos(m*l),b.statistics[c].y=g+e*Math.sin(m*l));break;case "mode":b.statistics[c]||(b.statistics[c]={}),b.statistics[c][m]=(b.statistics[c][m]||0)+e}}};r._aggregateStatistics=function(a,b){for(const e of this._statisticFields){const d=e.name;switch(e.statisticType){case "min":if(!a[d]){a[d]={value:b[d].value};break}a[d].value=Math.min(a[d].value,b[d].value);break;case "max":if(!a[d]){a[d]=
{value:b[d].value};break}a[d].value=Math.max(a[d].value,b[d].value);break;case "sum":case "avg":case "avg_angle":case "mode":a[d]||(a[d]={});for(const g in b[d])a[d][g]=(a[d][g]||0)+b[d][g]}}};r.normalizeStatistics=function(a,b){const e={};for(const g of this._statisticFields){const f=g.name;switch(g.statisticType){case "min":case "max":var d=a[f];if(!b||!d)break;e[f]=d.value;break;case "count":if(!b)break;e[f]=b;break;case "sum":if(!b)break;const {value:c,nanCount:m}=a[f];if(!(b-m))break;e[f]=c;
break;case "avg":if(!b)break;const {value:h,nanCount:l}=a[f];if(!(b-l))break;e[f]=h/(b-l);break;case "avg_angle":if(!b)break;const {x:n,y:t,nanCount:q}=a[f];if(!(b-q))break;e[f]=180/Math.PI*Math.atan2(t/(b-q),n/(b-q));break;case "mode":d=a[f];let k=0,p=0,u=null;for(const v in d){const w=d[v];w===k?p+=1:w>k&&(k=w,p=1,u=v)}e[f]="null"===u||1<p?null:u}}return e};K._createClass(A,[{key:"count",get:function(){return this._root.count}},{key:"size",get:function(){return this._nodes}},{key:"poolSize",get:function(){return C.mapOr(this._pool,
0,a=>a.size)}},{key:"depth",get:function(){let a=0;this.forEach(b=>a=Math.max(a,b.depth));return a}}]);return A}(),I=function(){function A(a,b,e,d){this.yTotal=this.xTotal=this.count=0;this.statistics={};this.referenceId=this.displayId=0;this.displayIds=new Set;this.next=null;this.yGeohashTotal=this.xGeohashTotal=this.yNode=this.xNode=this.depth=0;this._tree=a;this.children=Array(32);for(a=0;a<this.children.length;a++)this.children[a]=null;this.xNode=b;this.yNode=e;this.depth=d}var r=A.prototype;
r.realloc=function(a,b,e){for(let d=0;d<this.children.length;d++)this.children[d]=null;this.xNode=a;this.yNode=b;this.depth=e;this.next=null;this.count=this.yTotal=this.xTotal=this.referenceId=this.displayId=this.yGeohashTotal=this.xGeohashTotal=0;this.statistics={};this.displayIds.clear();return this};r.add=function(a){this.displayIds.add(a)};r.remove=function(a){this.displayIds.delete(a)};r.getAttributes=function(){const a=this._tree.normalizeStatistics(this.statistics,this.count);a.referenceId=
null;a.aggregateId=this.id;a.aggregateCount=this.count;return a};r.getGeometry=function(a,b){const e=this.getLngLatBounds(),[d,g,f,c]=e;a=M.project({rings:[[[d,g],[d,c],[f,c],[f,g],[d,g]]]},L.WGS84,a);a=G.convertFromPolygon(new H,a,!1,!1);return C.isSome(b)?G.quantizeOptimizedGeometry(new H,a,!1,!1,"esriGeometryPolygon",b,!1,!1):a};r.getGeometryCentroid=function(a,b){const e=this.getLngLatBounds(),[d,g,f,c]=e;a=M.project({x:(d+f)/2,y:(g+c)/2},L.WGS84,a);a=G.convertFromPoint(new H,a);return C.isSome(b)?
G.quantizeOptimizedGeometry(new H,a,!1,!1,"esriGeometryPoint",b,!1,!1):a};r.getLngLatBounds=function(){var a=this.depth;const b=Math.ceil(a/2);a=Math.floor(a/2);return R.decodeGeohashXY({geohashX:this.xNode<<30-(3*b+2*a),geohashY:this.yNode<<30-(2*b+3*a)},this.depth)};r.find=function(a,b,e,d,g,f){if(d>=e)return this;var c=1-d%2;const m=3*c+2*(1-c),h=2*c+3*(1-c),l=30-g-m,n=30-f-h;c=this.children[((a&7*c+3*(1-c)<<l)>>l)+((b&3*c+7*(1-c)<<n)>>n)*(8*c+4*(1-c))];return null==c?null:c.find(a,b,e,d+1,g+m,
f+h)};K._createClass(A,[{key:"id",get:function(){return`${this.xNode}.${this.yNode}`}}]);return A}();J.GeohashNode=I;J.GeohashTree=S;Object.defineProperties(J,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});