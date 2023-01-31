// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ./events ./handleUtils ./maybe ./promiseUtils ./accessorSupport/watch ./accessorSupport/trackingUtils".split(" "),function(g,r,t,m,n,y,z){function p(a,b,c={}){return q(a,b,c,u)}function q(a,b,c={},d){let e=null;const k=c.once?(f,h)=>{d(f)&&(m.removeMaybe(e),b(f,h))}:(f,h)=>{d(f)&&b(f,h)};e=y.watchTracked(a,k,c.sync,c.equals);c.initial&&(a=a(),k(a,a));return e}function v(a,b,c){if(n.isAborted(c))return Promise.reject(n.createAbortError());const d=a();if(b?.(d))return Promise.resolve(d);
let e=null;return new Promise((k,f)=>{e=t.handlesGroup([n.onAbort(c,()=>{e=m.removeMaybe(e);f(n.createAbortError())}),q(a,h=>{e=m.removeMaybe(e);k(h)},{sync:!1,once:!0},b??u)])})}function u(a){return!0}function w(a){return!!a}g.autorun=z.autorun;g.initial={initial:!0};g.on=function(a,b,c,d={}){function e(){f&&h&&(h.remove(),d.onListenerRemove?.(f),h=f=null)}function k(l){d.once&&d.once&&m.removeMaybe(x);c(l)}let f=null,h=null,x=null;const A=p(a,(l,B)=>{e();r.isEventTarget(l)&&(f=l,h=r.on(l,b,k),d.onListenerAdd?.(l))},
{sync:d.sync,initial:!0});return x=t.makeHandle(()=>{A.remove();e()})};g.once=function(a,b){return v(a,null,b)};g.pausable=function(a,b,c={}){let d=!1;const e=p(a,(k,f)=>{d||b(k,f)},c);return{remove(){e.remove()},pause(){d=!0},resume(){d=!1}}};g.sync={sync:!0};g.syncAndInitial={sync:!0,initial:!0};g.watch=p;g.when=function(a,b,c={}){return q(a,b,c,w)};g.whenOnce=function(a,b){return v(a,w,b)};Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});