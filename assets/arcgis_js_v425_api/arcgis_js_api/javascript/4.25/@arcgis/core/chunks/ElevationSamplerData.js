/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class t{constructor({values:t,width:h,height:i,noDataValue:s},a){this.pixelData=t,this.width=h,this.height=i,this.safeWidth=.99999999*(h-1),this.noDataValue=s,this.dx=(h-1)/(a[2]-a[0]),this.dy=(h-1)/(a[3]-a[1]),this.x0=a[0],this.y1=a[3]}}export{t as E};
