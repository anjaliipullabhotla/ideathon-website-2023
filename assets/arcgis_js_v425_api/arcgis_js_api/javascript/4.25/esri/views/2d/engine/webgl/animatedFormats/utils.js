// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../core/time","../../../../../symbols/cim/enums","../grouping"],function(h,g,k,q){function n(a){return g.Milliseconds(a.frameDurations.reduce((b,c)=>b+c,0))}function r(a){const {width:b,height:c}=a;return{frameDurations:a.frameDurations.reverse(),getFrame:e=>a.getFrame(a.frameDurations.length-1-e),width:b,height:c}}function t(a,b){const {width:c,height:e,getFrame:d}=a,f=n(a),l=b/f;return{frameDurations:a.frameDurations.map(m=>g.Milliseconds(m*l)),getFrame:d,width:c,
height:e}}function u(a,b){const {width:c,height:e,getFrame:d}=a;a=a.frameDurations.slice();const f=a.shift();a.unshift(g.Milliseconds(f+b));return{frameDurations:a,getFrame:d,width:c,height:e}}function p(a,b){const {width:c,height:e,getFrame:d}=a;a=a.frameDurations.slice();const f=a.pop();a.push(g.Milliseconds(f+b));return{frameDurations:a,getFrame:d,width:c,height:e}}function v(a,b,c,e){let {repeatType:d}=b;null==d&&(d=k.AnimatedSymbolRepeatType.Loop);!0===b.reverseAnimation&&(a=r(a));null!=b.duration&&
(a=t(a,g.Milliseconds(1E3*b.duration)));if(null!=b.repeatDelay){const f=1E3*b.repeatDelay;d===k.AnimatedSymbolRepeatType.Loop?a=p(a,g.Milliseconds(f)):d===k.AnimatedSymbolRepeatType.Oscillate&&(a=u(p(a,g.Milliseconds(f/2)),g.Milliseconds(f/2)))}null!=b.startTimeOffset?b=g.Milliseconds(1E3*b.startTimeOffset):null!=b.randomizeStartTime?(c=q.getMaterialGroup(c),b=q.getRandomValue(c,null!=b.randomizeStartSeed?b.randomizeStartSeed:82749913),b=g.Milliseconds(b*n(a))):b=g.Milliseconds(0);return new w(a,
b,d,e)}let w=function(){function a(b,c,e,d){this._animation=b;this._repeatType=e;this._onFrameData=d;this._direction=1;this._currentFrame=0;this.timeToFrame=this._animation.frameDurations[this._currentFrame];for(b=0;c>b;)b+=this.timeToFrame,this.nextFrame();c=this._animation.getFrame(this._currentFrame);this._onFrameData(c)}a.prototype.nextFrame=function(){this._currentFrame+=this._direction;if(0<this._direction){if(this._currentFrame===this._animation.frameDurations.length)switch(this._repeatType){case k.AnimatedSymbolRepeatType.None:this._currentFrame-=
this._direction;break;case k.AnimatedSymbolRepeatType.Loop:this._currentFrame=0;break;case k.AnimatedSymbolRepeatType.Oscillate:this._currentFrame-=this._direction,this._direction=-1}}else if(-1===this._currentFrame)switch(this._repeatType){case k.AnimatedSymbolRepeatType.None:this._currentFrame-=this._direction;break;case k.AnimatedSymbolRepeatType.Loop:this._currentFrame=this._animation.frameDurations.length-1;break;case k.AnimatedSymbolRepeatType.Oscillate:this._currentFrame-=this._direction,this._direction=
1}this.timeToFrame=this._animation.frameDurations[this._currentFrame];const b=this._animation.getFrame(this._currentFrame);this._onFrameData(b)};return a}();h.Player=w;h.adjustDuration=t;h.appendDelay=p;h.createPlayer=v;h.getDuration=n;h.play=function(a,b,c,e){function d(){x=f&&setTimeout(()=>{l.nextFrame();m=l.timeToFrame;d()},m)}const f=null!=b.playAnimation?b.playAnimation:!0,l=v(a,b,c,e);let m=l.timeToFrame,x;d();return{remove:()=>{f&&clearTimeout(x)}}};h.prependDelay=u;h.reverse=r;Object.defineProperties(h,
{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});