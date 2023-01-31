// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../colorUtils ../../core/Error ./effects ../../chunks/_commonjsHelpers ./utils".split(" "),function(X,O,y,J,Ba,Y){function Z(f){let h;if(!f)return[];try{h=aa.exports.parse(f)}catch(r){throw new y("effect:invalid-syntax","Invalid effect syntax",{value:f,error:r});}return h.map(r=>Ca(r))}function Ca(f){try{switch(f.name){case "grayscale":case "sepia":case "saturate":case "invert":case "brightness":case "contrast":var h=1;K(f.parameters,1);1===f.parameters.length&&(h=D(f.parameters[0]));
return new J.ColorMatrixEffect(f.name,h);case "opacity":return h=1,K(f.parameters,1),1===f.parameters.length&&(h=D(f.parameters[0])),new J.OpacityEffect(h);case "hue-rotate":h=0;K(f.parameters,1);if(1===f.parameters.length){var r=f.parameters[0];if("quantity"!==r.type||!(0===r.value&&null===r.unit||r.unit&&null!=R[r.unit]))throw new y("effect:type-error",`Expected <angle>, Actual: ${P(r)}`,{term:r});h=r.value*R[r.unit]||0}return new J.HueRotateEffect(h);case "blur":return h=0,K(f.parameters,1),1===
f.parameters.length&&(h=S(f.parameters[0]),L(h,f.parameters[0])),new J.BlurEffect(h);case "drop-shadow":const p=[];let z=null;for(const F of f.parameters)if("color"===F.type){p.length&&Object.freeze(p);if(z)throw new y("effect:type-error","Accepts only one color",{});a:{r=void 0;var e=F;switch(e.colorType){case "hex":z=O.hex2rgba(e.value);break a;case "named":z=ba(e.value);break a;case "function":h=e.value;K(h.parameters,4);if(Da.test(h.name))r=[D(h.parameters[0]),D(h.parameters[1]),D(h.parameters[2]),
h.parameters[3]?D(h.parameters[3]):1];else if(Ea.test(h.name)){e=O;var q=e.hsla2rgba,n=h.parameters[0],u=n;if("quantity"!==u.type||null!==u.unit)throw new y("effect:type-error",`Expected <double>, Actual: ${P(u)}`,{term:u});L(n.value,n);r=q.call(e,n.value,D(h.parameters[1]),D(h.parameters[2]),h.parameters[3]?D(h.parameters[3]):1)}else throw new y("effect:syntax-error",`Invalid color function '${h.name}'`,{colorFunction:h});z=r;break a}z=void 0}}else{const g=S(F);if(Object.isFrozen(p))throw new y("effect:type-error",
"\x3clength\x3e parameters not consecutive",{lengths:p});p.push(g);3===p.length&&L(g,F)}if(2>p.length||3<p.length)throw new y("effect:type-error",`Expected <length>{2,3}, Actual: <length>{${p.length}}`,{lengths:p});return new J.DropShadowEffect(p[0],p[1],p[2]||0,z||ba("black"));case "bloom":return h=1,n=q=0,K(f.parameters,3),f.parameters[0]&&(h=D(f.parameters[0])),f.parameters[1]&&(q=S(f.parameters[1]),L(q,f.parameters[1])),f.parameters[2]&&(n=D(f.parameters[2])),new J.BloomEffect(h,q,n)}}catch(p){throw p.details.filter=
f,p;}throw new y("effect:unknown-effect",`Effect '${f.name}' is not supported`,{effect:f});}function K(f,h){if(f.length>h)throw new y("effect:type-error",`Function supports up to ${h} parameters, Actual: ${f.length}`,{parameters:f});}function P(f){if("color"===f.type)return"\x3ccolor\x3e";if(f.unit){if(T[f.unit])return"\x3clength\x3e";if(R[f.unit])return"\x3cangle\x3e";if("%"===f.unit)return"\x3cpercentage\x3e"}return"\x3cdouble\x3e"}function L(f,h){if(0>f)throw new y("effect:type-error",`Negative values are not allowed, Actual: ${f}`,
{term:h});}function D(f){if("quantity"!==f.type||null!==f.unit&&"%"!==f.unit)throw new y("effect:type-error",`Expected <double> or <percentage>, Actual: ${P(f)}`,{term:f});const h=f.value;L(h,f);return"%"===f.unit?.01*h:h}function S(f){if("quantity"!==f.type||!(0===f.value&&null===f.unit||f.unit&&null!=T[f.unit]))throw new y("effect:type-error",`Expected <length>, Actual: ${P(f)}`,{term:f});return f.value*T[f.unit]||0}function ba(f){if(!O.isNamedColor(f))throw new y("effect:unknown-color",`color '${f}' isn't valid`,
{namedColor:f});return O.getNamedColorCopy(f)}var aa={exports:{}};(function(f){(function(h,r){f.exports&&(f.exports=r())})(Ba.commonjsGlobal,function(){function h(e,q,n,u){e=Error.call(this,e);Object.setPrototypeOf&&Object.setPrototypeOf(e,h.prototype);e.expected=q;e.found=n;e.location=u;e.name="SyntaxError";return e}function r(e,q,n){n=n||" ";if(e.length>q)return e;q-=e.length;n+=n.repeat(q);return e+n.slice(0,q)}(function(e,q){function n(){this.constructor=e}n.prototype=q.prototype;e.prototype=
new n})(h,Error);h.prototype.format=function(e){var q="Error: "+this.message;if(this.location){var n=null,u;for(u=0;u<e.length;u++)if(e[u].source===this.location.source){n=e[u].text.split(/\r\n|\n|\r/g);break}e=this.location.start;u=this.location.source+":"+e.line+":"+e.column;if(n){var p=this.location.end,z=r("",e.line.toString().length," ");n=n[e.line-1];p=(e.line===p.line?p.column:n.length+1)-e.column||1;q+="\n --\x3e "+u+"\n"+z+" |\n"+e.line+" | "+n+"\n"+z+" | "+r("",e.column-1," ")+r("",p,"^")}else q+=
"\n at "+u}return q};h.buildMessage=function(e,q){function n(g){return g.charCodeAt(0).toString(16).toUpperCase()}function u(g){return g.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(w){return"\\x0"+n(w)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(w){return"\\x"+n(w)})}function p(g){return g.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,
"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(w){return"\\x0"+n(w)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(w){return"\\x"+n(w)})}function z(g){return F[g.type](g)}var F={literal:function(g){return'"'+u(g.text)+'"'},class:function(g){var w=g.parts.map(function(A){return Array.isArray(A)?p(A[0])+"-"+p(A[1]):p(A)});return"["+(g.inverted?"^":"")+w.join("")+"]"},any:function(){return"any character"},end:function(){return"end of input"},other:function(g){return g.description}};
return"Expected "+function(g){g=g.map(z);var w,A;g.sort();if(0<g.length){for(A=w=1;w<g.length;w++)g[w-1]!==g[w]&&(g[A]=g[w],A++);g.length=A}switch(g.length){case 1:return g[0];case 2:return g[0]+" or "+g[1];default:return g.slice(0,-1).join(", ")+", or "+g[g.length-1]}}(e)+" but "+(q?'"'+u(q)+'"':"end of input")+" found."};return{SyntaxError:h,parse:function(e,q){function n(m,a){return{type:"literal",text:m,ignoreCase:a}}function u(m,a,d){return{type:"class",parts:m,inverted:a,ignoreCase:d}}function p(m){return{type:"other",
description:m}}function z(m){var a=Q[m],d;if(!a){for(d=m-1;!Q[d];)d--;a=Q[d];for(a={line:a.line,column:a.column};d<m;)10===e.charCodeAt(d)?(a.line++,a.column=1):a.column++,d++;Q[m]=a}return a}function F(m,a){var d=z(m),k=z(a);return{source:Fa,start:{offset:m,line:d.line,column:d.column},end:{offset:a,line:k.line,column:k.column}}}function g(m){c<E||(c>E&&(E=c,U=[]),U.push(m))}function w(){l++;var m=c;x();if(e.substr(c,4)===ca){var a=ca;c+=4}else a=b,0===l&&g(Ga);a!==b?(x(),t=m,m=[]):(c=m,m=b);l--;
m===b&&0===l&&g(Ha);if(m===b)if(m=[],a=A(),a!==b)for(;a!==b;)m.push(a),a=A();else m=b;return m}function A(){var m=c;x();l++;var a=c;var d=da();if(d!==b){if(40===e.charCodeAt(c)){var k=Ia;c++}else k=b,0===l&&g(Ja);k!==b?(t=a,a=d):(c=a,a=b)}else c=a,a=b;l--;a===b&&(d=b,0===l&&g(Ka));if(a!==b){x();d=c;k=V();if(k!==b){var B=[];var v=c;var M=x();if(44===e.charCodeAt(c)){var G=ea;c++}else G=b,0===l&&g(fa);G===b&&(G=null);var W=x();var N=V();N!==b?v=M=[M,G,W,N]:(c=v,v=b);for(;v!==b;)B.push(v),v=c,M=x(),
44===e.charCodeAt(c)?(G=ea,c++):(G=b,0===l&&g(fa)),G===b&&(G=null),W=x(),N=V(),N!==b?v=M=[M,G,W,N]:(c=v,v=b);t=d;d=0<B.length?[k].concat(La(B,3)):[k]}else c=d,d=b;d===b&&(d=null);x();41===e.charCodeAt(c)?(k=Ma,c++):(k=b,0===l&&g(Na));k!==b?(x(),t=m,m={type:"function",name:a,parameters:d||[]}):(c=m,m=b)}else c=m,m=b;return m}function V(){var m=c;l++;var a=c;x();var d=C();if(d!==b){if(37===e.charCodeAt(c)){var k=Oa;c++}else k=b,0===l&&g(Pa);k!==b?(t=a,a={value:d,unit:"%"}):(c=a,a=b)}else c=a,a=b;l--;
a===b&&0===l&&g(Qa);a===b&&(l++,a=c,x(),d=C(),d!==b?(e.substr(c,2)===ha?(k=ha,c+=2):(k=b,0===l&&g(Ra)),k!==b?(t=a,a={value:d,unit:"px"}):(c=a,a=b)):(c=a,a=b),a===b&&(a=c,x(),d=C(),d!==b?(e.substr(c,2)===ia?(k=ia,c+=2):(k=b,0===l&&g(Sa)),k!==b?(t=a,a={value:d,unit:"cm"}):(c=a,a=b)):(c=a,a=b),a===b&&(a=c,x(),d=C(),d!==b?(e.substr(c,2)===ja?(k=ja,c+=2):(k=b,0===l&&g(Ta)),k!==b?(t=a,a={value:d,unit:"mm"}):(c=a,a=b)):(c=a,a=b),a===b&&(a=c,x(),d=C(),d!==b?(e.substr(c,2)===ka?(k=ka,c+=2):(k=b,0===l&&g(Ua)),
k!==b?(t=a,a={value:d,unit:"in"}):(c=a,a=b)):(c=a,a=b),a===b&&(a=c,x(),d=C(),d!==b?(e.substr(c,2)===la?(k=la,c+=2):(k=b,0===l&&g(Va)),k!==b?(t=a,a={value:d,unit:"pt"}):(c=a,a=b)):(c=a,a=b),a===b&&(a=c,x(),d=C(),d!==b?(e.substr(c,2)===ma?(k=ma,c+=2):(k=b,0===l&&g(Wa)),k!==b?(t=a,a={value:d,unit:"pc"}):(c=a,a=b)):(c=a,a=b)))))),l--,a===b&&0===l&&g(Xa),a===b&&(l++,a=c,d=C(),d!==b?(e.substr(c,3)===na?(k=na,c+=3):(k=b,0===l&&g(Ya)),k!==b?(t=a,a={value:d,unit:"deg"}):(c=a,a=b)):(c=a,a=b),a===b&&(a=c,d=
C(),d!==b?(e.substr(c,3)===oa?(k=oa,c+=3):(k=b,0===l&&g(Za)),k!==b?(t=a,a={value:d,unit:"rad"}):(c=a,a=b)):(c=a,a=b),a===b&&(a=c,d=C(),d!==b?(e.substr(c,4)===pa?(k=pa,c+=4):(k=b,0===l&&g($a)),k!==b?(t=a,a={value:d,unit:"grad"}):(c=a,a=b)):(c=a,a=b),a===b&&(a=c,d=C(),d!==b?(e.substr(c,4)===qa?(k=qa,c+=4):(k=b,0===l&&g(ab)),k!==b?(t=a,a={value:d,unit:"turn"}):(c=a,a=b)):(c=a,a=b)))),l--,a===b&&(d=b,0===l&&g(bb)),a===b&&(l++,a=c,x(),d=C(),d!==b?(t=a,a={value:d,unit:null}):(c=a,a=b),l--,a===b&&0===l&&
g(cb))));a!==b&&(t=m,a={type:"quantity",value:a.value,unit:a.unit});m=a;if(m===b){m=c;l++;a=c;35===e.charCodeAt(c)?(d=db,c++):(d=b,0===l&&g(eb));if(d!==b){d=[];ra.test(e.charAt(c))?(k=e.charAt(c),c++):(k=b,0===l&&g(sa));if(k!==b)for(;k!==b;)d.push(k),ra.test(e.charAt(c))?(k=e.charAt(c),c++):(k=b,0===l&&g(sa));else d=b;d!==b?(t=a,a={type:"hex",value:e.substring(t,c)}):(c=a,a=b)}else c=a,a=b;a===b&&(a=c,d=A(),d!==b&&(t=a,d={type:"function",value:d}),a=d,a===b&&(a=c,d=da(),d!==b&&(t=a,d={type:"named",
value:e.substring(t,c)}),a=d));l--;a===b&&(d=b,0===l&&g(fb));a!==b&&(t=m,a={type:"color",colorType:a.type,value:a.value});m=a}return m}function x(){l++;var m=[];if(ta.test(e.charAt(c))){var a=e.charAt(c);c++}else a=b,0===l&&g(ua);for(;a!==b;)m.push(a),ta.test(e.charAt(c))?(a=e.charAt(c),c++):(a=b,0===l&&g(ua));l--;a=b;0===l&&g(gb);return m}function da(){l++;var m=c;var a=[];if(va.test(e.charAt(c))){var d=e.charAt(c);c++}else d=b,0===l&&g(wa);if(d!==b)for(;d!==b;)a.push(d),va.test(e.charAt(c))?(d=
e.charAt(c),c++):(d=b,0===l&&g(wa));else a=b;a!==b&&(t=m,a=e.substring(t,c));m=a;l--;m===b&&(a=b,0===l&&g(hb));return m}function C(){var m=c;xa.test(e.charAt(c))?(e.charAt(c),c++):0===l&&g(ya);var a=c;var d=[];if(H.test(e.charAt(c))){var k=e.charAt(c);c++}else k=b,0===l&&g(I);for(;k!==b;)d.push(k),H.test(e.charAt(c))?(k=e.charAt(c),c++):(k=b,0===l&&g(I));46===e.charCodeAt(c)?(k=ib,c++):(k=b,0===l&&g(jb));if(k!==b){var B=[];if(H.test(e.charAt(c))){var v=e.charAt(c);c++}else v=b,0===l&&g(I);if(v!==
b)for(;v!==b;)B.push(v),H.test(e.charAt(c))?(v=e.charAt(c),c++):(v=b,0===l&&g(I));else B=b;B!==b?a=d=[d,k,B]:(c=a,a=b)}else c=a,a=b;if(a===b)if(a=[],H.test(e.charAt(c))?(d=e.charAt(c),c++):(d=b,0===l&&g(I)),d!==b)for(;d!==b;)a.push(d),H.test(e.charAt(c))?(d=e.charAt(c),c++):(d=b,0===l&&g(I));else a=b;if(a!==b){d=c;101===e.charCodeAt(c)?(k=kb,c++):(k=b,0===l&&g(lb));if(k!==b){xa.test(e.charAt(c))?(B=e.charAt(c),c++):(B=b,0===l&&g(ya));B===b&&(B=null);v=[];H.test(e.charAt(c))?(a=e.charAt(c),c++):(a=
b,0===l&&g(I));if(a!==b)for(;a!==b;)v.push(a),H.test(e.charAt(c))?(a=e.charAt(c),c++):(a=b,0===l&&g(I));else v=b;v!==b?d=k=[k,B,v]:(c=d,d=b)}else c=d,d=b;d===b&&(d=null);t=m;m=parseFloat(e.substring(t,c))}else c=m,m=b;return m}function La(m,a){return m.map(function(d){return d[a]})}q=void 0!==q?q:{};var b={},Fa=q.grammarSource,za={start:w},Aa=w,ca="none",Ma=")",ea=",",Ia="(",Oa="%",ha="px",ia="cm",ja="mm",ka="in",la="pt",ma="pc",na="deg",oa="rad",pa="grad",qa="turn",db="#",ib=".",kb="e",ta=/^[ \t\n\r]/,
va=/^[a-z\-]/,ra=/^[0-9a-fA-F]/,xa=/^[+\-]/,H=/^[0-9]/,Ha=p("none"),Ga=n("none",!1),Na=n(")",!1),fa=n(",",!1),gb=p("whitespace"),ua=u([" ","\t","\n","\r"],!1,!1),Ka=p("function"),Ja=n("(",!1),hb=p("identifier"),wa=u([["a","z"],"-"],!1,!1),Qa=p("percentage"),Pa=n("%",!1),Xa=p("length"),Ra=n("px",!1),Sa=n("cm",!1),Ta=n("mm",!1),Ua=n("in",!1),Va=n("pt",!1),Wa=n("pc",!1),bb=p("angle"),Ya=n("deg",!1),Za=n("rad",!1),$a=n("grad",!1),ab=n("turn",!1),cb=p("number"),fb=p("color"),eb=n("#",!1),sa=u([["0","9"],
["a","f"],["A","F"]],!1,!1),ya=u(["+","-"],!1,!1),I=u([["0","9"]],!1,!1),jb=n(".",!1),lb=n("e",!1),c=0,t=0,Q=[{line:1,column:1}],E=0,U=[],l=0;if("startRule"in q){if(!(q.startRule in za))throw Error("Can't start parsing from rule \""+q.startRule+'".');Aa=za[q.startRule]}q=Aa();if(q!==b&&c===e.length)return q;q!==b&&c<e.length&&g({type:"end"});throw function(m,a,d){return new h(h.buildMessage(m,a),m,a,d)}(U,E<e.length?e.charAt(E):null,E<e.length?F(E,E+1):F(E,E));}}})})(aa);const R={deg:1,grad:.9,rad:180/
Math.PI,turn:360},T={px:1,cm:96/2.54,mm:96/2.54/10,in:96,pc:16,pt:96/72},Da=/^rgba?/i,Ea=/^hsla?/i;X.parse=function(f){if(!f||0===f.length)return null;if("string"===typeof f)return(f=Z(f))&&0!==f.length?f:null;f=f.map(h=>{if(!Number.isFinite(h.scale)||0>=h.scale)throw new y("effect:invalid-scale","scale must be finite and greater than 0",{stop:h});return{scale:h.scale,effects:Z(h.value)}});f.sort((h,r)=>r.effects.length-h.effects.length);for(let h=0;h<f.length-1;h++){if(!Y.canInterpolateEffects(f[h].effects,
f[h+1].effects))throw new y("effect:interpolation-impossible","Cannot interpolate by scale between 2 lists of mixed effects",{a:f[h].effects,b:f[h+1].effects});Y.normalizeEffects(f[h].effects,f[h+1].effects)}f.sort((h,r)=>r.scale-h.scale);return f};Object.defineProperties(X,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});