// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","./comment-handler","./error-handler","./scanner","./types"],function(q,w,t,x,c){function u(h,f=0){let a=h.start-h.lineStart,b=h.lineNumber;0>a&&(a+=f,b--);return{index:h.start,line:b,column:a}}function v(h){return[{index:h.range[0],...h.loc.start},{index:h.range[1],...h.loc.end}]}function r(h){return c.OperatorPrecedence[h]??0}var l;(function(h){h[h.None=0]="None";h[h.Function=1]="Function";h[h.IfClause=2]="IfClause";h[h.ForLoop=4]="ForLoop";h[h.WhileLoop=8]="WhileLoop"})(l||(l=
{}));var p;(function(h){h[h.AsObject=0]="AsObject";h[h.Automatic=1]="Automatic"})(p||(p={}));let y=function(){function h(a,b={},d){this.delegate=d;this.hasLineTerminator=!1;this.options={tokens:"boolean"===typeof b.tokens&&b.tokens,comments:"boolean"===typeof b.comments&&b.comments,tolerant:"boolean"===typeof b.tolerant&&b.tolerant};this.options.comments&&(this.commentHandler=new w.CommentHandler);this.errorHandler=new t.ErrorHandler(this.options.tolerant);this.scanner=new x.Scanner(a,this.errorHandler);
this.context={isAssignmentTarget:!1,blockContext:l.None,curlyParsingType:p.AsObject};this.rawToken={type:c.TokenType.EOF,value:"",lineNumber:this.scanner.lineNumber,lineStart:0,start:0,end:0};this.tokens=[];this.startMarker={index:0,line:this.scanner.lineNumber,column:0};this.endMarker={index:0,line:this.scanner.lineNumber,column:0};this.readNextRawToken();this.endMarker={index:this.scanner.index,line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart}}var f=h.prototype;f.throwIfInvalidType=
function(a,b,{validTypes:d,invalidTypes:e}){d?.some(g=>a.type===g)||e?.some(g=>a.type===g)&&this.throwError(c.ParsingErrorCodes.InvalidExpression,b)};f.throwError=function(a,b,d=this.endMarker){const {index:e,line:g,column:k}=b;this.errorHandler.throwError({code:a,index:e,line:g,column:k+1,len:d.index-e-1})};f.tolerateError=function(a,b){throw Error("######################################### !!!");};f.unexpectedTokenError=function(a={}){const {rawToken:b}=a;let {code:d,data:e}=a;if(b){if(!d)switch(b.type){case c.TokenType.EOF:d=
c.ParsingErrorCodes.UnexpectedEndOfScript;break;case c.TokenType.Identifier:d=c.ParsingErrorCodes.UnexpectedIdentifier;break;case c.TokenType.NumericLiteral:d=c.ParsingErrorCodes.UnexpectedNumber;break;case c.TokenType.StringLiteral:d=c.ParsingErrorCodes.UnexpectedString;break;case c.TokenType.Template:d=c.ParsingErrorCodes.UnexpectedTemplate}a=b.value.toString()}else a="ILLEGAL";d=d??c.ParsingErrorCodes.UnexpectedToken;e||(e={value:a});a=t.formatErrorDescription(d,e);if(b)return new c.ParsingError({code:d,
index:b.start,line:b.lineNumber,column:b.start-b.lineStart+1,len:b.end-b.start-1,data:e,description:a});const {index:g,line:k}=this.endMarker;return new c.ParsingError({code:d,index:g,line:k,column:this.endMarker.column+1,data:e,description:a})};f.throwUnexpectedToken=function(a={}){a.rawToken=a.rawToken??this.rawToken;throw this.unexpectedTokenError(a);};f.collectComments=function(a){const {commentHandler:b}=this;b&&a?.length&&a.forEach(d=>{d={type:d.multiLine?c.Syntax.BlockComment:c.Syntax.LineComment,
value:this.getSourceValue(d),range:d.range,loc:d.loc};b.collectComment(d)})};f.peekAhead=function(a){const b=this.scanner.saveState();a=a.call(this,()=>{this.scanner.scanComments();return this.scanner.lex()});this.scanner.restoreState(b);return a};f.getSourceValue=function(a){return this.scanner.source.slice(a.start,a.end)};f.convertToToken=function(a){return{type:c.TokenNames[a.type],value:this.getSourceValue(a),range:[a.start,a.end],loc:{start:{line:this.startMarker.line,column:this.startMarker.column},
end:{line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart}}}};f.readNextRawToken=function(){this.endMarker.index=this.scanner.index;this.endMarker.line=this.scanner.lineNumber;this.endMarker.column=this.scanner.index-this.scanner.lineStart;const a=this.rawToken;this.collectComments(this.scanner.scanComments());this.scanner.index!==this.startMarker.index&&(this.startMarker.index=this.scanner.index,this.startMarker.line=this.scanner.lineNumber,this.startMarker.column=this.scanner.index-
this.scanner.lineStart);this.rawToken=this.scanner.lex();this.hasLineTerminator=a.lineNumber!==this.rawToken.lineNumber;this.options.tokens&&this.rawToken.type!==c.TokenType.EOF&&this.tokens.push(this.convertToToken(this.rawToken))};f.captureStartMarker=function(){return{index:this.startMarker.index,line:this.startMarker.line,column:this.startMarker.column}};f.getItemLocation=function(a){return{range:[a.index,this.endMarker.index],loc:{start:{line:a.line,column:a.column},end:{line:this.endMarker.line,
column:this.endMarker.column}}}};f.finalize=function(a){if(this.delegate||this.commentHandler)this.commentHandler?.attachComments(a),this.delegate?.(a);return a};f.expectPunctuator=function(a){const b=this.rawToken;this.matchPunctuator(a)?this.readNextRawToken():this.throwUnexpectedToken({rawToken:b,code:c.ParsingErrorCodes.PunctuatorExpected,data:{value:a}})};f.expectKeyword=function(a){this.rawToken.type===c.TokenType.Keyword&&this.rawToken.value.toLowerCase()===a?this.readNextRawToken():this.throwUnexpectedToken({rawToken:this.rawToken})};
f.expectContextualKeyword=function(a){this.rawToken.type===c.TokenType.Identifier&&this.rawToken.value.toLowerCase()===a?this.readNextRawToken():this.throwUnexpectedToken({rawToken:this.rawToken})};f.matchKeyword=function(a){return this.rawToken.type===c.TokenType.Keyword&&this.rawToken.value.toLowerCase()===a};f.matchContextualKeyword=function(a){return this.rawToken.type===c.TokenType.Identifier&&this.rawToken.value===a};f.matchPunctuator=function(a){return this.rawToken.type===c.TokenType.Punctuator&&
this.rawToken.value===a};f.getMatchingPunctuator=function(a){"string"===typeof a&&(a=a.split(""));if(this.rawToken.type===c.TokenType.Punctuator&&a?.length)return a.find(this.matchPunctuator,this)};f.isolateCoverGrammar=function(a){const b=this.context.isAssignmentTarget;this.context.isAssignmentTarget=!0;a=a.call(this);this.context.isAssignmentTarget=b;return a};f.inheritCoverGrammar=function(a){const b=this.context.isAssignmentTarget;this.context.isAssignmentTarget=!0;a=a.call(this);this.context.isAssignmentTarget=
this.context.isAssignmentTarget&&b;return a};f.withBlockContext=function(a,b){const d=this.context.blockContext;this.context.blockContext|=a;a=this.context.curlyParsingType;this.context.curlyParsingType=p.Automatic;b=b.call(this);this.context.blockContext=d;this.context.curlyParsingType=a;return b};f.consumeSemicolon=function(){this.matchPunctuator(";")?this.readNextRawToken():this.hasLineTerminator||(this.rawToken.type===c.TokenType.EOF||this.matchPunctuator("}")?(this.endMarker.index=this.startMarker.index,
this.endMarker.line=this.startMarker.line,this.endMarker.column=this.startMarker.column):this.throwUnexpectedToken({rawToken:this.rawToken}))};f.parsePrimaryExpression=function(){const a=this.captureStartMarker(),b=this.rawToken;switch(b.type){case c.TokenType.Identifier:return this.readNextRawToken(),this.finalize({type:c.Syntax.Identifier,name:b.value,...this.getItemLocation(a)});case c.TokenType.NumericLiteral:case c.TokenType.StringLiteral:return this.context.isAssignmentTarget=!1,this.readNextRawToken(),
this.finalize({type:c.Syntax.Literal,value:b.value,raw:this.getSourceValue(b),isString:"string"===typeof b.value,...this.getItemLocation(a)});case c.TokenType.BooleanLiteral:return this.context.isAssignmentTarget=!1,this.readNextRawToken(),this.finalize({type:c.Syntax.Literal,value:"true"===b.value.toLowerCase(),raw:this.getSourceValue(b),isString:!1,...this.getItemLocation(a)});case c.TokenType.NullLiteral:return this.context.isAssignmentTarget=!1,this.readNextRawToken(),this.finalize({type:c.Syntax.Literal,
value:null,raw:this.getSourceValue(b),isString:!1,...this.getItemLocation(a)});case c.TokenType.Template:return this.parseTemplateLiteral();case c.TokenType.Punctuator:switch(b.value){case "(":return this.inheritCoverGrammar(this.parseGroupExpression);case "[":return this.inheritCoverGrammar(this.parseArrayInitializer);case "{":return this.inheritCoverGrammar(this.parseObjectExpression);default:return this.throwUnexpectedToken({rawToken:this.rawToken})}case c.TokenType.Keyword:return this.context.isAssignmentTarget=
!1,this.throwUnexpectedToken({rawToken:this.rawToken});default:return this.throwUnexpectedToken({rawToken:this.rawToken})}};f.parseArrayInitializer=function(){const a=this.captureStartMarker();this.expectPunctuator("[");const b=[];for(;!this.matchPunctuator("]");)this.matchPunctuator(",")?(this.readNextRawToken(),b.push(null)):(b.push(this.inheritCoverGrammar(this.parseAssignmentExpression)),this.matchPunctuator("]")||this.expectPunctuator(","));this.expectPunctuator("]");return this.finalize({type:c.Syntax.ArrayExpression,
elements:b,...this.getItemLocation(a)})};f.parseObjectPropertyKey=function(){const a=this.captureStartMarker(),b=this.rawToken;switch(b.type){case c.TokenType.StringLiteral:return this.readNextRawToken(),this.finalize({type:c.Syntax.Literal,value:b.value,raw:this.getSourceValue(b),isString:!0,...this.getItemLocation(a)});case c.TokenType.Identifier:case c.TokenType.BooleanLiteral:case c.TokenType.NullLiteral:case c.TokenType.Keyword:return this.readNextRawToken(),this.finalize({type:c.Syntax.Identifier,
name:b.value,...this.getItemLocation(a)});default:this.throwError(c.ParsingErrorCodes.KeyMustBeString,a)}};f.parseObjectProperty=function(){const a=this.rawToken,b=this.captureStartMarker(),d=this.parseObjectPropertyKey();let e=!1,g=null;this.matchPunctuator(":")?(this.readNextRawToken(),g=this.inheritCoverGrammar(this.parseAssignmentExpression)):a.type===c.TokenType.Identifier?(e=!0,g=this.finalize({type:c.Syntax.Identifier,name:a.value,...this.getItemLocation(b)})):this.throwUnexpectedToken({rawToken:this.rawToken});
return this.finalize({type:c.Syntax.Property,kind:"init",key:d,value:g,shorthand:e,...this.getItemLocation(b)})};f.parseObjectExpression=function(){const a=this.captureStartMarker();this.expectPunctuator("{");const b=[];for(;!this.matchPunctuator("}");)b.push(this.parseObjectProperty()),this.matchPunctuator("}")||this.expectPunctuator(",");this.expectPunctuator("}");return this.finalize({type:c.Syntax.ObjectExpression,properties:b,...this.getItemLocation(a)})};f.parseTemplateElement=function(a=!1){var b=
this.rawToken;b.type!==c.TokenType.Template&&this.throwUnexpectedToken({rawToken:b});a&&!b.head&&this.throwUnexpectedToken({code:c.ParsingErrorCodes.InvalidTemplateHead,rawToken:b});a=this.captureStartMarker();this.readNextRawToken();const {value:d,cooked:e,tail:g}=b;b=this.finalize({type:c.Syntax.TemplateElement,value:{raw:d,cooked:e},tail:g,...this.getItemLocation(a)});b.loc.start.column++;b.loc.end.column-=g?1:2;return b};f.parseTemplateLiteral=function(){const a=this.captureStartMarker(),b=[],
d=[];let e=this.parseTemplateElement(!0);for(d.push(e);!e.tail;)b.push(this.parseExpression()),e=this.parseTemplateElement(),d.push(e);return this.finalize({type:c.Syntax.TemplateLiteral,quasis:d,expressions:b,...this.getItemLocation(a)})};f.parseGroupExpression=function(){this.expectPunctuator("(");const a=this.inheritCoverGrammar(this.parseAssignmentExpression);this.expectPunctuator(")");return a};f.parseArguments=function(){this.expectPunctuator("(");const a=[];if(!this.matchPunctuator(")"))for(;;){const b=
this.isolateCoverGrammar(this.parseAssignmentExpression);a.push(b);if(this.matchPunctuator(")"))break;this.expectPunctuator(",");if(this.matchPunctuator(")"))break}this.expectPunctuator(")");return a};f.parseMemberName=function(){const a=this.rawToken,b=this.captureStartMarker();this.readNextRawToken();a.type!==c.TokenType.NullLiteral&&a.type!==c.TokenType.Identifier&&a.type!==c.TokenType.Keyword&&a.type!==c.TokenType.BooleanLiteral&&this.throwUnexpectedToken({rawToken:a});return this.finalize({type:c.Syntax.Identifier,
name:a.value,...this.getItemLocation(b)})};f.parseLeftHandSideExpression=function(){const a=this.captureStartMarker();let b=this.inheritCoverGrammar(this.parsePrimaryExpression);const d=this.captureStartMarker();for(var e;e=this.getMatchingPunctuator("([.");)switch(e){case "(":this.context.isAssignmentTarget=!1;b.type!==c.Syntax.Identifier&&b.type!==c.Syntax.MemberExpression&&this.throwError(c.ParsingErrorCodes.IdentiferExpected,a,d);e=this.parseArguments();b=this.finalize({type:c.Syntax.CallExpression,
callee:b,arguments:e,...this.getItemLocation(a)});continue;case "[":this.context.isAssignmentTarget=!0;this.expectPunctuator("[");e=this.isolateCoverGrammar(this.parseExpression);this.expectPunctuator("]");b=this.finalize({type:c.Syntax.MemberExpression,computed:!0,object:b,property:e,...this.getItemLocation(a)});continue;case ".":this.context.isAssignmentTarget=!0,this.expectPunctuator("."),e=this.parseMemberName(),b=this.finalize({type:c.Syntax.MemberExpression,computed:!1,object:b,property:e,...this.getItemLocation(a)})}return b};
f.parseUpdateExpression=function(){const a=this.captureStartMarker();let b=this.getMatchingPunctuator(c.UpdateOperators);if(b){this.readNextRawToken();var d=this.captureStartMarker(),e=this.inheritCoverGrammar(this.parseUnaryExpression);e.type!==c.Syntax.Identifier&&e.type!==c.Syntax.MemberExpression&&e.type!==c.Syntax.CallExpression&&this.throwError(c.ParsingErrorCodes.InvalidExpression,d);this.context.isAssignmentTarget||this.tolerateError(c.ParsingErrorCodes.InvalidLeftHandSideInAssignment,a);
this.context.isAssignmentTarget=!1;return this.finalize({type:c.Syntax.UpdateExpression,operator:b,argument:e,prefix:!0,...this.getItemLocation(a)})}d=this.captureStartMarker();e=this.inheritCoverGrammar(this.parseLeftHandSideExpression);const g=this.captureStartMarker();if(this.hasLineTerminator)return e;b=this.getMatchingPunctuator(c.UpdateOperators);if(!b)return e;e.type!==c.Syntax.Identifier&&e.type!==c.Syntax.MemberExpression&&this.throwError(c.ParsingErrorCodes.InvalidExpression,d,g);this.context.isAssignmentTarget||
this.tolerateError(c.ParsingErrorCodes.InvalidLeftHandSideInAssignment,a);this.readNextRawToken();this.context.isAssignmentTarget=!1;return this.finalize({type:c.Syntax.UpdateExpression,operator:b,argument:e,prefix:!1,...this.getItemLocation(a)})};f.parseUnaryExpression=function(){const a=this.getMatchingPunctuator(c.UnaryOperators);if(a){const b=this.captureStartMarker();this.readNextRawToken();const d=this.inheritCoverGrammar(this.parseUnaryExpression);this.context.isAssignmentTarget=!1;return this.finalize({type:c.Syntax.UnaryExpression,
operator:a,argument:d,prefix:!0,...this.getItemLocation(b)})}return this.parseUpdateExpression()};f.parseBinaryExpression=function(){var a=this.rawToken,b=this.inheritCoverGrammar(this.parseUnaryExpression);if(this.rawToken.type!==c.TokenType.Punctuator)return b;var d=this.rawToken.value,e=r(d);if(0===e)return b;this.readNextRawToken();this.context.isAssignmentTarget=!1;a=[a,this.rawToken];var g=this.inheritCoverGrammar(this.parseUnaryExpression);d=[b,d,g];for(var k=[e];this.rawToken.type===c.TokenType.Punctuator&&
0<(e=r(this.rawToken.value));){for(;2<d.length&&e<=k[k.length-1];){g=d.pop();const n=d.pop();k.pop();b=d.pop();a.pop();var m=a[a.length-1];m=u(m,m.lineStart);d.push(this.finalize(this.createBinaryOrLogicalExpression(m,n,b,g)))}d.push(this.rawToken.value);k.push(e);a.push(this.rawToken);this.readNextRawToken();d.push(this.inheritCoverGrammar(this.parseUnaryExpression))}e=d.length-1;b=d[e];for(k=a.pop();1<e;){g=a.pop();if(!g)break;k=u(g,k?.lineStart);b=this.finalize(this.createBinaryOrLogicalExpression(k,
d[e-1],d[e-2],b));e-=2;k=g}return b};f.createBinaryOrLogicalExpression=function(a,b,d,e){const g=c.LogicalOperators.includes(b)?c.Syntax.LogicalExpression:c.Syntax.BinaryExpression;if(g===c.Syntax.BinaryExpression)return{type:g,operator:b,left:d,right:e,...this.getItemLocation(a)};d.type!==c.Syntax.AssignmentExpression&&d.type!==c.Syntax.UpdateExpression||this.throwError(c.ParsingErrorCodes.InvalidExpression,...v(d));e.type!==c.Syntax.AssignmentExpression&&e.type!==c.Syntax.UpdateExpression||this.throwError(c.ParsingErrorCodes.InvalidExpression,
...v(d));return{type:g,operator:b,left:d,right:e,...this.getItemLocation(a)}};f.parseAssignmentExpression=function(){const a=this.captureStartMarker(),b=this.inheritCoverGrammar(this.parseBinaryExpression);var d=this.captureStartMarker();const e=this.getMatchingPunctuator(c.AssignmentOperators);if(!e)return b;b.type!==c.Syntax.Identifier&&b.type!==c.Syntax.MemberExpression&&this.throwError(c.ParsingErrorCodes.InvalidExpression,a,d);this.context.isAssignmentTarget||this.tolerateError(c.ParsingErrorCodes.InvalidLeftHandSideInAssignment,
a);this.matchPunctuator("\x3d")||(this.context.isAssignmentTarget=!1);this.readNextRawToken();d=this.isolateCoverGrammar(this.parseAssignmentExpression);return this.finalize({type:c.Syntax.AssignmentExpression,left:b,operator:e,right:d,...this.getItemLocation(a)})};f.parseExpression=function(){return this.isolateCoverGrammar(this.parseAssignmentExpression)};f.parseStatements=function(a=null){const b=[];for(;this.rawToken.type!==c.TokenType.EOF&&!this.matchPunctuator(a);){const d=this.parseStatementListItem();
c.isEmptyStatement(d)||b.push(d)}return b};f.parseStatementListItem=function(){this.context.isAssignmentTarget=!0;return this.matchKeyword("function")?this.parseFunctionDeclaration():this.matchKeyword("export")?this.parseExportDeclaration():this.matchKeyword("import")?this.parseImportDeclaration():this.parseStatement()};f.parseBlock=function(){const a=this.captureStartMarker();this.expectPunctuator("{");const b=this.parseStatements("}");this.expectPunctuator("}");return this.finalize({type:c.Syntax.BlockStatement,
body:b,...this.getItemLocation(a)})};f.parseObjectStatement=function(){const a=this.captureStartMarker(),b=this.parseObjectExpression();return this.finalize({type:c.Syntax.ExpressionStatement,expression:b,...this.getItemLocation(a)})};f.parseBlockOrObjectStatement=function(){return this.context.curlyParsingType===p.AsObject||this.peekAhead(a=>{let b=a();if(b.type!==c.TokenType.Identifier&&b.type!==c.TokenType.StringLiteral)return!1;b=a();return b.type!==c.TokenType.Punctuator||":"!==b.value?!1:!0})?
this.parseObjectStatement():this.parseBlock()};f.parseIdentifier=function(){const a=this.rawToken;if(a.type!==c.TokenType.Identifier)return null;const b=this.captureStartMarker();this.readNextRawToken();return this.finalize({type:c.Syntax.Identifier,name:a.value,...this.getItemLocation(b)})};f.parseVariableDeclarator=function(){const a=this.captureStartMarker(),b=this.parseIdentifier();b||this.throwUnexpectedToken({code:c.ParsingErrorCodes.IdentiferExpected});let d=null;if(this.matchPunctuator("\x3d")){this.readNextRawToken();
const e=this.rawToken;try{d=this.isolateCoverGrammar(this.parseAssignmentExpression)}catch(g){this.throwUnexpectedToken({rawToken:e,code:c.ParsingErrorCodes.InvalidVariableAssignment})}}return this.finalize({type:c.Syntax.VariableDeclarator,id:b,init:d,...this.getItemLocation(a)})};f.parseVariableDeclarationList=function(){const a=[this.parseVariableDeclarator()];for(;this.matchPunctuator(",");)this.readNextRawToken(),a.push(this.parseVariableDeclarator());return a};f.parseVariableDeclaration=function(){const a=
this.captureStartMarker();this.expectKeyword("var");const b=this.parseVariableDeclarationList();this.consumeSemicolon();return this.finalize({type:c.Syntax.VariableDeclaration,declarations:b,kind:"var",...this.getItemLocation(a)})};f.parseEmptyStatement=function(){const a=this.captureStartMarker();this.expectPunctuator(";");return this.finalize({type:c.Syntax.EmptyStatement,...this.getItemLocation(a)})};f.parseExpressionStatement=function(){const a=this.captureStartMarker(),b=this.parseExpression();
this.consumeSemicolon();return this.finalize({type:c.Syntax.ExpressionStatement,expression:b,...this.getItemLocation(a)})};f.parseIfClause=function(){return this.withBlockContext(l.IfClause,this.parseStatement)};f.parseIfStatement=function(){const a=this.captureStartMarker();this.expectKeyword("if");this.expectPunctuator("(");var b=this.captureStartMarker();const d=this.parseExpression();var e=this.captureStartMarker();this.expectPunctuator(")");d.type!==c.Syntax.AssignmentExpression&&d.type!==c.Syntax.UpdateExpression||
this.throwError(c.ParsingErrorCodes.InvalidExpression,b,e);b=this.parseIfClause();e=null;this.matchKeyword("else")&&(this.readNextRawToken(),e=this.parseIfClause());return this.finalize({type:c.Syntax.IfStatement,test:d,consequent:b,alternate:e,...this.getItemLocation(a)})};f.parseWhileStatement=function(){const a=this.captureStartMarker();this.expectKeyword("while");this.expectPunctuator("(");var b=this.captureStartMarker();const d=this.parseExpression(),e=this.captureStartMarker();this.expectPunctuator(")");
d.type!==c.Syntax.AssignmentExpression&&d.type!==c.Syntax.UpdateExpression||this.throwError(c.ParsingErrorCodes.InvalidExpression,b,e);b=this.withBlockContext(l.WhileLoop,this.parseStatement);return this.finalize({type:c.Syntax.WhileStatement,test:d,body:b,...this.getItemLocation(a)})};f.parseForStatement=function(){let a=null,b=null,d=null,e=null,g=null;const k=this.captureStartMarker();this.expectKeyword("for");this.expectPunctuator("(");if(this.matchPunctuator(";"))this.readNextRawToken();else if(this.matchKeyword("var")){var m=
this.captureStartMarker();this.readNextRawToken();var n=this.parseVariableDeclarationList();1===n.length&&this.matchKeyword("in")?(n[0].init&&this.throwError(c.ParsingErrorCodes.ForInOfLoopInitializer,m),e=this.finalize({type:c.Syntax.VariableDeclaration,declarations:n,kind:"var",...this.getItemLocation(m)}),this.readNextRawToken(),g=this.parseExpression()):(this.matchKeyword("in")&&this.throwError(c.ParsingErrorCodes.InvalidLeftHandSideInForIn,m),a=this.finalize({type:c.Syntax.VariableDeclaration,
declarations:n,kind:"var",...this.getItemLocation(m)}),this.expectPunctuator(";"))}else m=this.context.isAssignmentTarget,n=this.captureStartMarker(),a=this.inheritCoverGrammar(this.parseAssignmentExpression),this.matchKeyword("in")?(this.context.isAssignmentTarget||this.tolerateError(c.ParsingErrorCodes.InvalidLeftHandSideInForIn,n),a.type!==c.Syntax.Identifier&&this.throwError(c.ParsingErrorCodes.InvalidLeftHandSideInForIn,n),this.readNextRawToken(),e=a,g=this.parseExpression(),a=null):(this.context.isAssignmentTarget=
m,this.expectPunctuator(";"));e||(this.matchPunctuator(";")||(b=this.isolateCoverGrammar(this.parseExpression)),this.expectPunctuator(";"),this.matchPunctuator(")")||(d=this.isolateCoverGrammar(this.parseExpression)));this.expectPunctuator(")");m=this.withBlockContext(l.ForLoop,()=>this.isolateCoverGrammar(this.parseStatement));return e&&g?this.finalize({type:c.Syntax.ForInStatement,left:e,right:g,body:m,...this.getItemLocation(k)}):this.finalize({type:c.Syntax.ForStatement,init:a,test:b,update:d,
body:m,...this.getItemLocation(k)})};f.parseContinueStatement=function(){const a=this.captureStartMarker();this.expectKeyword("continue");this.consumeSemicolon();return this.finalize({type:c.Syntax.ContinueStatement,...this.getItemLocation(a)})};f.parseBreakStatement=function(){const a=this.captureStartMarker();this.expectKeyword("break");this.consumeSemicolon();return this.finalize({type:c.Syntax.BreakStatement,...this.getItemLocation(a)})};f.parseReturnStatement=function(){const a=this.captureStartMarker();
this.expectKeyword("return");const b=(this.matchPunctuator(";")||this.matchPunctuator("}")||this.hasLineTerminator||this.rawToken.type===c.TokenType.EOF)&&this.rawToken.type!==c.TokenType.StringLiteral&&this.rawToken.type!==c.TokenType.Template?null:this.parseExpression();this.consumeSemicolon();return this.finalize({type:c.Syntax.ReturnStatement,argument:b,...this.getItemLocation(a)})};f.parseStatement=function(){switch(this.rawToken.type){case c.TokenType.BooleanLiteral:case c.TokenType.NullLiteral:case c.TokenType.NumericLiteral:case c.TokenType.StringLiteral:case c.TokenType.Template:case c.TokenType.Identifier:return this.parseExpressionStatement();
case c.TokenType.Punctuator:return"{"===this.rawToken.value?this.parseBlockOrObjectStatement():"("===this.rawToken.value?this.parseExpressionStatement():";"===this.rawToken.value?this.parseEmptyStatement():this.parseExpressionStatement();case c.TokenType.Keyword:switch(this.rawToken.value.toLowerCase()){case "break":return this.parseBreakStatement();case "continue":return this.parseContinueStatement();case "for":return this.parseForStatement();case "function":return this.parseFunctionDeclaration();
case "if":return this.parseIfStatement();case "return":return this.parseReturnStatement();case "var":return this.parseVariableDeclaration();case "while":return this.parseWhileStatement();default:return this.parseExpressionStatement()}default:return this.throwUnexpectedToken({rawToken:this.rawToken})}};f.parseFormalParameters=function(){const a=[];this.expectPunctuator("(");if(!this.matchPunctuator(")"))for(;this.rawToken.type!==c.TokenType.EOF;){const b=this.parseIdentifier();b||this.throwUnexpectedToken({rawToken:this.rawToken,
code:c.ParsingErrorCodes.IdentiferExpected});a.push(b);if(this.matchPunctuator(")"))break;this.expectPunctuator(",");if(this.matchPunctuator(")"))break}this.expectPunctuator(")");return a};f.parseFunctionDeclaration=function(){(this.context.blockContext&l.Function)===l.Function&&this.throwUnexpectedToken({code:c.ParsingErrorCodes.NoFunctionInsideFunction});(this.context.blockContext&l.WhileLoop)!==l.WhileLoop&&(this.context.blockContext&l.IfClause)!==l.IfClause||this.throwUnexpectedToken({code:c.ParsingErrorCodes.NoFunctionInsideBlock});
const a=this.captureStartMarker();this.expectKeyword("function");const b=this.parseIdentifier();b||this.throwUnexpectedToken({code:c.ParsingErrorCodes.InvalidFunctionIdentifier});const d=this.parseFormalParameters(),e=this.context.blockContext;this.context.blockContext|=l.Function;const g=this.parseBlock();this.context.blockContext=e;return this.finalize({type:c.Syntax.FunctionDeclaration,id:b,params:d,body:g,...this.getItemLocation(a)})};f.parseScript=function(){var a=this.captureStartMarker();const b=
this.parseStatements();a=this.finalize({type:c.Syntax.Program,body:b,...this.getItemLocation(a)});this.options.tokens&&(a.tokens=this.tokens);this.options.tolerant&&(a.errors=this.errorHandler.errors);return a};f.parseExportDeclaration=function(){this.context.blockContext!==l.None&&this.throwUnexpectedToken({code:c.ParsingErrorCodes.ModuleExportRootOnly});let a=null;const b=this.captureStartMarker();this.expectKeyword("export");this.matchKeyword("var")?a=this.parseVariableDeclaration():this.matchKeyword("function")?
a=this.parseFunctionDeclaration():this.throwUnexpectedToken({code:c.ParsingErrorCodes.InvalidExpression});return this.finalize({type:c.Syntax.ExportNamedDeclaration,declaration:a,specifiers:[],source:null,...this.getItemLocation(b)})};f.parseModuleSpecifier=function(){const a=this.captureStartMarker(),b=this.rawToken;if(b.type===c.TokenType.StringLiteral)return this.readNextRawToken(),this.finalize({type:c.Syntax.Literal,value:b.value,raw:this.getSourceValue(b),isString:!0,...this.getItemLocation(a)});
this.throwError(c.ParsingErrorCodes.InvalidModuleUri,a)};f.parseDefaultSpecifier=function(){const a=this.captureStartMarker(),b=this.parseIdentifier();b||this.throwUnexpectedToken({code:c.ParsingErrorCodes.InvalidFunctionIdentifier});return this.finalize({type:c.Syntax.ImportDefaultSpecifier,local:b,...this.getItemLocation(a)})};f.parseImportDeclaration=function(){this.context.blockContext!==l.None&&this.throwUnexpectedToken({code:c.ParsingErrorCodes.ModuleImportRootOnly});const a=this.captureStartMarker();
this.expectKeyword("import");const b=this.parseDefaultSpecifier();this.expectContextualKeyword("from");const d=this.parseModuleSpecifier();return this.finalize({type:c.Syntax.ImportDeclaration,specifiers:[b],source:d,...this.getItemLocation(a)})};return h}();q.Parser=y;q.binaryOperatorPrecedence=r;Object.defineProperties(q,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});