// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["../../core/maybe","../../core/reactiveUtils","../../core/scheduling"],function(g,k,l){return function(){function h(a){this.view=a;this._frameTaskHandle=null;this._updateRequested=!1;this.stationary=!0;this.animationInProgress=!1;this.prepare=()=>{this._updateParameters.state=this.view.state;this._updateParameters.stationary=this.view.stationary;this._updateParameters.pixelRatio=window.devicePixelRatio;this._updateParameters.renderingOptions=this.view.renderingOptions};this.update=()=>{this._updateRequested=
!1;const {basemapView:c,graphicsView:b,labelManager:d,layerViews:m,state:{id:f}}=this.view;c.baseLayerViews.forEach(this._updateLayerView,this);m.forEach(this._updateLayerView,this);c.referenceLayerViews.forEach(this._updateLayerView,this);g.isSome(d)&&(d.lastUpdateId!==f&&(d.viewChange(),d.lastUpdateId=f),d.updateRequested&&d.processUpdate(this._updateParameters));g.isSome(b)&&(b.lastUpdateId!==f&&(b.viewChange(),b.lastUpdateId=f),b.updateRequested&&b.processUpdate(this._updateParameters));this.view.graphicsTileStore.setViewState(this._updateParameters.state);
this.animationInProgress||this._updateRequested||this._frameTaskHandle.pause()}}var e=h.prototype;e.destroy=function(){this.stop()};e.start=function(){if(!this._frameTaskHandle){var a=this.view;this.stationary=a.stationary;this._updateParameters={state:a.state,pixelRatio:window.devicePixelRatio,stationary:this.stationary,renderingOptions:a.renderingOptions};this._stationaryHandle=k.watch(()=>a.stationary,c=>{this.stationary=c;this.requestFrame()});this._frameTaskHandle=l.addFrameTask(this);this.requestUpdate()}};
e.stop=function(){this._frameTaskHandle&&(this._updateRequested=!1,this._stationaryHandle.remove(),this._frameTaskHandle.remove(),this._updateParameters=this._stationaryHandle=this._frameTaskHandle=null,this.stationary=!0,this.animationInProgress=!1)};e.requestUpdate=function(){this._updateRequested||(this._updateRequested=!0,this.requestFrame())};e.requestFrame=function(){this._frameTaskHandle&&this._frameTaskHandle.resume()};e._updateLayerView=function(a){const c=this.view.state,b=a.lastUpdateId;
if(null==b||!this.stationary&&!a.moving)a.moving=!0,a.moveStart();b!==c.id&&a.viewChange();this.stationary&&a.moving&&(a.moving=!1,a.moveEnd());a.lastUpdateId=c.id;a.updateRequested&&a.processUpdate(this._updateParameters);"layerViews"in a&&a.layerViews.forEach(this._updateLayerView,this)};return h}()});