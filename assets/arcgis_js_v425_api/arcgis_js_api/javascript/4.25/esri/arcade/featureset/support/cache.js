// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(function(){let e=function(){function d(){this._databaseTypeMetaData={};this._layerInfo={}}var b=d.prototype;b.clearDatabaseType=function(a){void 0===this._databaseTypeMetaData[a]&&delete this._databaseTypeMetaData[a]};b.getDatabaseType=function(a){return"MUSTBESET"===a||void 0===this._databaseTypeMetaData[a]?null:this._databaseTypeMetaData[a]};b.setDatabaseType=function(a,c){this._databaseTypeMetaData[a]=c};b.getLayerInfo=function(a){return void 0===this._layerInfo[a]?null:this._layerInfo[a]};
b.setLayerInfo=function(a,c){this._layerInfo[a]=c};b.clearLayerInfo=function(a){void 0!==this._layerInfo[a]&&delete this._layerInfo[a]};return d}();e.applicationCache=null;return e});