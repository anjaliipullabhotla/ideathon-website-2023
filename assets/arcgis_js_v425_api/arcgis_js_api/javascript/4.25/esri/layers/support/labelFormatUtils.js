// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("require exports ../../chunks/_rollupPluginBabelHelpers ../../core/Error ../../core/Logger ../../core/maybe ../../intl/date ../../intl/number ./fieldUtils ./labelUtils ../../support/arcadeOnDemand".split(" "),function(u,k,v,l,w,x,q,y,z,r,A){function m(){m=v._asyncToGenerator(function*(b,f,a){if(!b||!b.symbol)return n;const g=b.where,h=r.getLabelExpression(b);b=g?yield new Promise((e,d)=>u(["../../core/sql/WhereClause"],e,d)):null;if("arcade"===h.type){const e=yield A.createLabelExpression(h.expression,
a,f);if(x.isNone(e))return n;a={type:"arcade",evaluate(d){try{const c=e.evaluate({$feature:"attributes"in d?e.repurposeFeature(d):d});if(null!=c)return c.toString()}catch(c){p.error(new l("arcade-expression-error","Encountered an error when evaluating label expression for feature",{feature:d,expression:h}))}return null},needsHydrationToEvaluate(){return null==r.getSingleFieldArcadeExpression(h.expression)}}}else a={type:"simple",evaluate(e){return h.expression.replace(/{[^}]*}/g,d=>{var c=d.slice(1,
-1);c=f.get(c);if(!c)return d;d=null;"attributes"in e?e&&e.attributes&&(d=e.attributes[c.name]):d=e.field(c.name);return null==d?"":t(d,c)})}};if(g){let e;try{e=b.WhereClause.create(g,f)}catch(c){return p.error(new l("bad-where-clause","Encountered an error when evaluating where clause, ignoring",{where:g,error:c})),n}const d=a.evaluate;a.evaluate=c=>{const C="attributes"in c?void 0:B;try{if(e.testFeature(c,C))return d(c)}catch(D){p.error(new l("bad-where-clause","Encountered an error when evaluating where clause for feature",
{where:g,feature:c,error:D}))}return null}}return a});return m.apply(this,arguments)}function t(b,f){if(null==b)return"";const a=f.domain;if(a)if("codedValue"===a.type||"coded-value"===a.type)for(var g of a.codedValues){if(g.code===b)return g.name}else if("range"===a.type){g=+b;const h="range"in a?a.range[1]:a.maxValue;if(("range"in a?a.range[0]:a.minValue)<=g&&g<=h)return a.name}"date"===f.type||"esriFieldTypeDate"===f.type?b=q.formatDate(b,q.convertDateFormatToIntlOptions("short-date")):z.isNumericField(f)&&
(b=y.formatNumber(+b));return b?b:""}const p=w.getLogger("esri.layers.support.labelFormatUtils"),n={type:"simple",evaluate(){return null}},B={getAttribute(b,f){return b.field(f)}};k.createLabelFunction=function(b,f,a){return m.apply(this,arguments)};k.formatField=t;Object.defineProperties(k,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});