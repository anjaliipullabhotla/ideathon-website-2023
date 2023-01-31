// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","./assert","./character","./types"],function(n,p,e,f){const l=[[],[],[]];f.UpdateOperators.forEach(k=>l[k.length-1].push(k));f.UnaryOperators.forEach(k=>l[k.length-1].push(k));f.LogicalOperators.forEach(k=>l[k.length-1].push(k));f.AssignmentOperators.forEach(k=>l[k.length-1].push(k));f.BinaryOperators.forEach(k=>l[k.length-1].push(k));let u=function(){function k(a,b){this.source=a;this.errorHandler=b;this._length=a.length;this.index=0;this.lineNumber=1;this.lineStart=0;this.curlyStack=
[]}var g=k.prototype;g.saveState=function(){return{index:this.index,lineNumber:this.lineNumber,lineStart:this.lineStart,curlyStack:this.curlyStack.slice()}};g.restoreState=function(a){this.index=a.index;this.lineNumber=a.lineNumber;this.lineStart=a.lineStart;this.curlyStack=a.curlyStack};g.eof=function(){return this.index>=this._length};g.throwUnexpectedToken=function(a=f.ParsingErrorCodes.UnexpectedToken){this.errorHandler.throwError({code:a,index:this.index,line:this.lineNumber,column:this.index-
this.lineStart+1})};g.tolerateUnexpectedToken=function(a=f.ParsingErrorCodes.UnexpectedToken){this.errorHandler.tolerateError({code:a,index:this.index,line:this.lineNumber,column:this.index-this.lineStart+1})};g.skipSingleLineComment=function(a){const b=[],c=this.index-a,d={start:{line:this.lineNumber,column:this.index-this.lineStart-a},end:{line:0,column:0}};for(;!this.eof();){const m=this.source.charCodeAt(this.index);++this.index;if(e.Character.isLineTerminator(m))return d&&(d.end={line:this.lineNumber,
column:this.index-this.lineStart-1},b.push({multiLine:!1,start:c+a,end:this.index-1,range:[c,this.index-1],loc:d})),13===m&&10===this.source.charCodeAt(this.index)&&++this.index,++this.lineNumber,this.lineStart=this.index,b}d&&(d.end={line:this.lineNumber,column:this.index-this.lineStart},b.push({multiLine:!1,start:c+a,end:this.index,range:[c,this.index],loc:d}));return b};g.skipMultiLineComment=function(){const a=[],b=this.index-2,c={start:{line:this.lineNumber,column:this.index-this.lineStart-2},
end:{line:0,column:0}};for(;!this.eof();){const d=this.source.charCodeAt(this.index);if(e.Character.isLineTerminator(d))13===d&&10===this.source.charCodeAt(this.index+1)&&++this.index,++this.lineNumber,++this.index,this.lineStart=this.index;else{if(42===d&&47===this.source.charCodeAt(this.index+1))return this.index+=2,c&&(c.end={line:this.lineNumber,column:this.index-this.lineStart},a.push({multiLine:!0,start:b+2,end:this.index-2,range:[b,this.index],loc:c})),a;++this.index}}c&&(c.end={line:this.lineNumber,
column:this.index-this.lineStart},a.push({multiLine:!0,start:b+2,end:this.index,range:[b,this.index],loc:c}));this.tolerateUnexpectedToken();return a};g.scanComments=function(){let a=[];for(;!this.eof();){var b=this.source.charCodeAt(this.index);if(e.Character.isWhiteSpace(b))++this.index;else if(e.Character.isLineTerminator(b))++this.index,13===b&&10===this.source.charCodeAt(this.index)&&++this.index,++this.lineNumber,this.lineStart=this.index;else if(47===b)if(b=this.source.charCodeAt(this.index+
1),47===b)this.index+=2,b=this.skipSingleLineComment(2),a=[...a,...b];else if(42===b)this.index+=2,b=this.skipMultiLineComment(),a=[...a,...b];else break;else break}return a};g.isKeyword=function(a){a=a.toLowerCase();switch(a.length){case 2:return"if"===a||"in"===a;case 3:return"var"===a||"for"===a;case 4:return"else"===a;case 5:return"break"===a||"while"===a;case 6:return"return"===a||"import"===a||"export"===a;case 8:return"function"===a||"continue"===a;default:return!1}};g.codePointAt=function(a){let b=
this.source.charCodeAt(a);55296<=b&&56319>=b&&(a=this.source.charCodeAt(a+1),56320<=a&&57343>=a&&(b=1024*(b-55296)+a-56320+65536));return b};g.scanHexEscape=function(a){a="u"===a?4:2;let b=0;for(let c=0;c<a;++c)if(!this.eof()&&e.Character.isHexDigit(this.source.charCodeAt(this.index)))b=16*b+"0123456789abcdef".indexOf(this.source[this.index++].toLowerCase());else return null;return String.fromCharCode(b)};g.scanUnicodeCodePointEscape=function(){let a=this.source[this.index],b=0;for("}"===a&&this.throwUnexpectedToken();!this.eof();){a=
this.source[this.index++];if(!e.Character.isHexDigit(a.charCodeAt(0)))break;b=16*b+"0123456789abcdef".indexOf(a.toLowerCase())}(1114111<b||"}"!==a)&&this.throwUnexpectedToken();return e.Character.fromCodePoint(b)};g.getIdentifier=function(){const a=this.index++;for(;!this.eof();){const b=this.source.charCodeAt(this.index);if(92===b||55296<=b&&57343>b)return this.index=a,this.getComplexIdentifier();if(e.Character.isIdentifierPart(b))++this.index;else break}return this.source.slice(a,this.index)};g.getComplexIdentifier=
function(){let a=this.codePointAt(this.index),b=e.Character.fromCodePoint(a);this.index+=b.length;let c;92===a&&(117!==this.source.charCodeAt(this.index)&&this.throwUnexpectedToken(),++this.index,"{"===this.source[this.index]?(++this.index,c=this.scanUnicodeCodePointEscape()):(c=this.scanHexEscape("u"),null!==c&&"\\"!==c&&e.Character.isIdentifierStart(c.charCodeAt(0))||this.throwUnexpectedToken()),b=c);for(;!this.eof();){a=this.codePointAt(this.index);if(!e.Character.isIdentifierPart(a))break;c=e.Character.fromCodePoint(a);
b+=c;this.index+=c.length;92===a&&(b=b.substring(0,b.length-1),117!==this.source.charCodeAt(this.index)&&this.throwUnexpectedToken(),++this.index,"{"===this.source[this.index]?(++this.index,c=this.scanUnicodeCodePointEscape()):(c=this.scanHexEscape("u"),null!==c&&"\\"!==c&&e.Character.isIdentifierPart(c.charCodeAt(0))||this.throwUnexpectedToken()),b+=c)}return b};g.octalToDecimal=function(a){let b="0"!==a,c="01234567".indexOf(a);!this.eof()&&e.Character.isOctalDigit(this.source.charCodeAt(this.index))&&
(b=!0,c=8*c+"01234567".indexOf(this.source[this.index++]),"0123".includes(a)&&!this.eof()&&e.Character.isOctalDigit(this.source.charCodeAt(this.index))&&(c=8*c+"01234567".indexOf(this.source[this.index++])));return{code:c,octal:b}};g.scanIdentifier=function(){let a;const b=this.index,c=92===this.source.charCodeAt(b)?this.getComplexIdentifier():this.getIdentifier();a=1===c.length?f.TokenType.Identifier:this.isKeyword(c)?f.TokenType.Keyword:"null"===c.toLowerCase()?f.TokenType.NullLiteral:"true"===
c.toLowerCase()||"false"===c.toLowerCase()?f.TokenType.BooleanLiteral:f.TokenType.Identifier;if(a!==f.TokenType.Identifier&&b+c.length!==this.index){const d=this.index;this.index=b;this.tolerateUnexpectedToken(f.ParsingErrorCodes.InvalidEscapedReservedWord);this.index=d}return{type:a,value:c,lineNumber:this.lineNumber,lineStart:this.lineStart,start:b,end:this.index}};g.scanPunctuator=function(){const a=this.index;let b=this.source[this.index];switch(b){case "(":case "{":"{"===b&&this.curlyStack.push("{");
++this.index;break;case ".":++this.index;break;case "}":++this.index;this.curlyStack.pop();break;case ")":case ";":case ",":case "[":case "]":case ":":case "?":case "~":++this.index;break;default:for(let c=l.length;0<c;c--)if(b=this.source.substring(this.index,this.index+c),l[c-1].includes(b)){this.index+=c;break}}this.index===a&&this.throwUnexpectedToken();return{type:f.TokenType.Punctuator,value:b,lineNumber:this.lineNumber,lineStart:this.lineStart,start:a,end:this.index}};g.scanHexLiteral=function(a){let b=
"";for(;!this.eof()&&e.Character.isHexDigit(this.source.charCodeAt(this.index));)b+=this.source[this.index++];0===b.length&&this.throwUnexpectedToken();e.Character.isIdentifierStart(this.source.charCodeAt(this.index))&&this.throwUnexpectedToken();return{type:f.TokenType.NumericLiteral,value:parseInt("0x"+b,16),lineNumber:this.lineNumber,lineStart:this.lineStart,start:a,end:this.index}};g.scanBinaryLiteral=function(a){let b="";for(;!this.eof();){var c=this.source[this.index];if("0"!==c&&"1"!==c)break;
b+=this.source[this.index++]}0===b.length&&this.throwUnexpectedToken();this.eof()||(c=this.source.charCodeAt(this.index),(e.Character.isIdentifierStart(c)||e.Character.isDecimalDigit(c))&&this.throwUnexpectedToken());return{type:f.TokenType.NumericLiteral,value:parseInt(b,2),lineNumber:this.lineNumber,lineStart:this.lineStart,start:a,end:this.index}};g.scanOctalLiteral=function(a,b){let c="",d=!1;e.Character.isOctalDigit(a.charCodeAt(0))?(d=!0,c="0"+this.source[this.index++]):++this.index;for(;!this.eof()&&
e.Character.isOctalDigit(this.source.charCodeAt(this.index));)c+=this.source[this.index++];d||0!==c.length||this.throwUnexpectedToken();(e.Character.isIdentifierStart(this.source.charCodeAt(this.index))||e.Character.isDecimalDigit(this.source.charCodeAt(this.index)))&&this.throwUnexpectedToken();return{type:f.TokenType.NumericLiteral,value:parseInt(c,8),lineNumber:this.lineNumber,lineStart:this.lineStart,start:b,end:this.index}};g.scanNumericLiteral=function(){const a=this.index;let b=this.source[a];
p.assert(e.Character.isDecimalDigit(b.charCodeAt(0))||"."===b,"Numeric literal must start with a decimal digit or a decimal point");let c="";if("."!==b){c=this.source[this.index++];b=this.source[this.index];if("0"===c){if("x"===b||"X"===b)return++this.index,this.scanHexLiteral(a);if("b"===b||"B"===b)return++this.index,this.scanBinaryLiteral(a);if("o"===b||"O"===b)return this.scanOctalLiteral(b,a)}for(;e.Character.isDecimalDigit(this.source.charCodeAt(this.index));)c+=this.source[this.index++];b=this.source[this.index]}if("."===
b){for(c+=this.source[this.index++];e.Character.isDecimalDigit(this.source.charCodeAt(this.index));)c+=this.source[this.index++];b=this.source[this.index]}if("e"===b||"E"===b){c+=this.source[this.index++];b=this.source[this.index];if("+"===b||"-"===b)c+=this.source[this.index++];if(e.Character.isDecimalDigit(this.source.charCodeAt(this.index)))for(;e.Character.isDecimalDigit(this.source.charCodeAt(this.index));)c+=this.source[this.index++];else this.throwUnexpectedToken()}e.Character.isIdentifierStart(this.source.charCodeAt(this.index))&&
this.throwUnexpectedToken();return{type:f.TokenType.NumericLiteral,value:parseFloat(c),lineNumber:this.lineNumber,lineStart:this.lineStart,start:a,end:this.index}};g.scanStringLiteral=function(){const a=this.index;let b=this.source[a];p.assert("'"===b||'"'===b,"String literal must starts with a quote");++this.index;let c="";for(;!this.eof();){var d=this.source[this.index++];if(d===b){b="";break}if("\\"===d)if((d=this.source[this.index++])&&e.Character.isLineTerminator(d.charCodeAt(0)))++this.lineNumber,
"\r"===d&&"\n"===this.source[this.index]&&++this.index,this.lineStart=this.index;else switch(d){case "u":"{"===this.source[this.index]?(++this.index,c+=this.scanUnicodeCodePointEscape()):(d=this.scanHexEscape(d),null===d&&this.throwUnexpectedToken(),c+=d);break;case "x":d=this.scanHexEscape(d);null===d&&this.throwUnexpectedToken(f.ParsingErrorCodes.InvalidHexEscapeSequence);c+=d;break;case "n":c+="\n";break;case "r":c+="\r";break;case "t":c+="\t";break;case "b":c+="\b";break;case "f":c+="\f";break;
case "v":c+="\v";break;case "8":case "9":c+=d;this.tolerateUnexpectedToken();break;default:d&&e.Character.isOctalDigit(d.charCodeAt(0))?(d=this.octalToDecimal(d),c+=String.fromCharCode(d.code)):c+=d}else if(e.Character.isLineTerminator(d.charCodeAt(0)))break;else c+=d}""!==b&&(this.index=a,this.throwUnexpectedToken());return{type:f.TokenType.StringLiteral,value:c,lineNumber:this.lineNumber,lineStart:this.lineStart,start:a,end:this.index}};g.scanTemplate=function(){let a="",b=!1;const c=this.index,
d="`"===this.source[c];let m=!1,q=2;for(++this.index;!this.eof();){var h=this.source[this.index++];if("`"===h){q=1;b=m=!0;break}if("$"===h){if("{"===this.source[this.index]){this.curlyStack.push("${");++this.index;b=!0;break}a+=h}else if("\\"===h)if(h=this.source[this.index++],e.Character.isLineTerminator(h.charCodeAt(0)))++this.lineNumber,"\r"===h&&"\n"===this.source[this.index]&&++this.index,this.lineStart=this.index;else switch(h){case "n":a+="\n";break;case "r":a+="\r";break;case "t":a+="\t";
break;case "u":if("{"===this.source[this.index])++this.index,a+=this.scanUnicodeCodePointEscape();else{const t=this.index,r=this.scanHexEscape(h);null!==r?a+=r:(this.index=t,a+=h)}break;case "x":h=this.scanHexEscape(h);null===h&&this.throwUnexpectedToken(f.ParsingErrorCodes.InvalidHexEscapeSequence);a+=h;break;case "b":a+="\b";break;case "f":a+="\f";break;case "v":a+="\v";break;default:"0"===h?(e.Character.isDecimalDigit(this.source.charCodeAt(this.index))&&this.throwUnexpectedToken(f.ParsingErrorCodes.TemplateOctalLiteral),
a+="\x00"):e.Character.isOctalDigit(h.charCodeAt(0))?this.throwUnexpectedToken(f.ParsingErrorCodes.TemplateOctalLiteral):a+=h}else e.Character.isLineTerminator(h.charCodeAt(0))?(++this.lineNumber,"\r"===h&&"\n"===this.source[this.index]&&++this.index,this.lineStart=this.index,a+="\n"):a+=h}b||this.throwUnexpectedToken();d||this.curlyStack.pop();return{type:f.TokenType.Template,value:this.source.slice(c+1,this.index-q),cooked:a,head:d,tail:m,lineNumber:this.lineNumber,lineStart:this.lineStart,start:c,
end:this.index}};g.lex=function(){if(this.eof())return{type:f.TokenType.EOF,value:"",lineNumber:this.lineNumber,lineStart:this.lineStart,start:this.index,end:this.index};const a=this.source.charCodeAt(this.index);return e.Character.isIdentifierStart(a)?this.scanIdentifier():40===a||41===a||59===a?this.scanPunctuator():39===a||34===a?this.scanStringLiteral():46===a?e.Character.isDecimalDigit(this.source.charCodeAt(this.index+1))?this.scanNumericLiteral():this.scanPunctuator():e.Character.isDecimalDigit(a)?
this.scanNumericLiteral():96===a||125===a&&"${"===this.curlyStack[this.curlyStack.length-1]?this.scanTemplate():55296<=a&&57343>a&&e.Character.isIdentifierStart(this.codePointAt(this.index))?this.scanIdentifier():this.scanPunctuator()};return k}();n.Scanner=u;Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});