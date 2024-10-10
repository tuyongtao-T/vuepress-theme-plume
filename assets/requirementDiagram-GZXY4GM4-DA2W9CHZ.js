import{s as Pe}from"./chunk-BOP2KBYH-p-sQroeY.js";import{b as Ue}from"./chunk-6XGRHI2A-RT4hGhCZ.js";import{m as n,J as xe,v as Ye,Q as we,w as Ve,B as Be,F as Qe,M as We,i as Ke,d as Te,b as he,k as He}from"./mermaid.esm.min-4x8XI1WL.js";import"./chunk-BKDDFIKN-BU42dhts.js";import"./app-BgTtORTE.js";var ce=function(){var e=n(function(v,t,a,r){for(a=a||{},r=v.length;r--;a[v[r]]=t);return a},"o"),i=[1,3],o=[1,4],c=[1,5],h=[1,6],y=[5,6,8,9,11,13,31,32,33,34,35,36,44,62,63],u=[1,18],l=[2,7],p=[1,22],g=[1,23],m=[1,24],f=[1,25],S=[1,26],q=[1,27],A=[1,20],w=[1,28],$=[1,29],D=[62,63],pe=[5,8,9,11,13,31,32,33,34,35,36,44,51,53,62,63],de=[1,47],_e=[1,48],ge=[1,49],Ee=[1,50],me=[1,51],Re=[1,52],fe=[1,53],L=[53,54],P=[1,64],U=[1,60],Y=[1,61],V=[1,62],B=[1,63],Q=[1,65],G=[1,69],z=[1,70],X=[1,67],J=[1,68],k=[5,8,9,11,13,31,32,33,34,35,36,44,62,63],re={trace:n(function(){},"trace"),yy:{},symbols_:{error:2,start:3,directive:4,NEWLINE:5,RD:6,diagram:7,EOF:8,acc_title:9,acc_title_value:10,acc_descr:11,acc_descr_value:12,acc_descr_multiline_value:13,requirementDef:14,elementDef:15,relationshipDef:16,requirementType:17,requirementName:18,STRUCT_START:19,requirementBody:20,ID:21,COLONSEP:22,id:23,TEXT:24,text:25,RISK:26,riskLevel:27,VERIFYMTHD:28,verifyType:29,STRUCT_STOP:30,REQUIREMENT:31,FUNCTIONAL_REQUIREMENT:32,INTERFACE_REQUIREMENT:33,PERFORMANCE_REQUIREMENT:34,PHYSICAL_REQUIREMENT:35,DESIGN_CONSTRAINT:36,LOW_RISK:37,MED_RISK:38,HIGH_RISK:39,VERIFY_ANALYSIS:40,VERIFY_DEMONSTRATION:41,VERIFY_INSPECTION:42,VERIFY_TEST:43,ELEMENT:44,elementName:45,elementBody:46,TYPE:47,type:48,DOCREF:49,ref:50,END_ARROW_L:51,relationship:52,LINE:53,END_ARROW_R:54,CONTAINS:55,COPIES:56,DERIVES:57,SATISFIES:58,VERIFIES:59,REFINES:60,TRACES:61,unqString:62,qString:63,$accept:0,$end:1},terminals_:{2:"error",5:"NEWLINE",6:"RD",8:"EOF",9:"acc_title",10:"acc_title_value",11:"acc_descr",12:"acc_descr_value",13:"acc_descr_multiline_value",19:"STRUCT_START",21:"ID",22:"COLONSEP",24:"TEXT",26:"RISK",28:"VERIFYMTHD",30:"STRUCT_STOP",31:"REQUIREMENT",32:"FUNCTIONAL_REQUIREMENT",33:"INTERFACE_REQUIREMENT",34:"PERFORMANCE_REQUIREMENT",35:"PHYSICAL_REQUIREMENT",36:"DESIGN_CONSTRAINT",37:"LOW_RISK",38:"MED_RISK",39:"HIGH_RISK",40:"VERIFY_ANALYSIS",41:"VERIFY_DEMONSTRATION",42:"VERIFY_INSPECTION",43:"VERIFY_TEST",44:"ELEMENT",47:"TYPE",49:"DOCREF",51:"END_ARROW_L",53:"LINE",54:"END_ARROW_R",55:"CONTAINS",56:"COPIES",57:"DERIVES",58:"SATISFIES",59:"VERIFIES",60:"REFINES",61:"TRACES",62:"unqString",63:"qString"},productions_:[0,[3,3],[3,2],[3,4],[4,2],[4,2],[4,1],[7,0],[7,2],[7,2],[7,2],[7,2],[7,2],[14,5],[20,5],[20,5],[20,5],[20,5],[20,2],[20,1],[17,1],[17,1],[17,1],[17,1],[17,1],[17,1],[27,1],[27,1],[27,1],[29,1],[29,1],[29,1],[29,1],[15,5],[46,5],[46,5],[46,2],[46,1],[16,5],[16,5],[52,1],[52,1],[52,1],[52,1],[52,1],[52,1],[52,1],[18,1],[18,1],[23,1],[23,1],[25,1],[25,1],[45,1],[45,1],[48,1],[48,1],[50,1],[50,1]],performAction:n(function(v,t,a,r,d,s,N){var E=s.length-1;switch(d){case 4:this.$=s[E].trim(),r.setAccTitle(this.$);break;case 5:case 6:this.$=s[E].trim(),r.setAccDescription(this.$);break;case 7:this.$=[];break;case 13:r.addRequirement(s[E-3],s[E-4]);break;case 14:r.setNewReqId(s[E-2]);break;case 15:r.setNewReqText(s[E-2]);break;case 16:r.setNewReqRisk(s[E-2]);break;case 17:r.setNewReqVerifyMethod(s[E-2]);break;case 20:this.$=r.RequirementType.REQUIREMENT;break;case 21:this.$=r.RequirementType.FUNCTIONAL_REQUIREMENT;break;case 22:this.$=r.RequirementType.INTERFACE_REQUIREMENT;break;case 23:this.$=r.RequirementType.PERFORMANCE_REQUIREMENT;break;case 24:this.$=r.RequirementType.PHYSICAL_REQUIREMENT;break;case 25:this.$=r.RequirementType.DESIGN_CONSTRAINT;break;case 26:this.$=r.RiskLevel.LOW_RISK;break;case 27:this.$=r.RiskLevel.MED_RISK;break;case 28:this.$=r.RiskLevel.HIGH_RISK;break;case 29:this.$=r.VerifyType.VERIFY_ANALYSIS;break;case 30:this.$=r.VerifyType.VERIFY_DEMONSTRATION;break;case 31:this.$=r.VerifyType.VERIFY_INSPECTION;break;case 32:this.$=r.VerifyType.VERIFY_TEST;break;case 33:r.addElement(s[E-3]);break;case 34:r.setNewElementType(s[E-2]);break;case 35:r.setNewElementDocRef(s[E-2]);break;case 38:r.addRelationship(s[E-2],s[E],s[E-4]);break;case 39:r.addRelationship(s[E-2],s[E-4],s[E]);break;case 40:this.$=r.Relationships.CONTAINS;break;case 41:this.$=r.Relationships.COPIES;break;case 42:this.$=r.Relationships.DERIVES;break;case 43:this.$=r.Relationships.SATISFIES;break;case 44:this.$=r.Relationships.VERIFIES;break;case 45:this.$=r.Relationships.REFINES;break;case 46:this.$=r.Relationships.TRACES;break}},"anonymous"),table:[{3:1,4:2,6:i,9:o,11:c,13:h},{1:[3]},{3:8,4:2,5:[1,7],6:i,9:o,11:c,13:h},{5:[1,9]},{10:[1,10]},{12:[1,11]},e(y,[2,6]),{3:12,4:2,6:i,9:o,11:c,13:h},{1:[2,2]},{4:17,5:u,7:13,8:l,9:o,11:c,13:h,14:14,15:15,16:16,17:19,23:21,31:p,32:g,33:m,34:f,35:S,36:q,44:A,62:w,63:$},e(y,[2,4]),e(y,[2,5]),{1:[2,1]},{8:[1,30]},{4:17,5:u,7:31,8:l,9:o,11:c,13:h,14:14,15:15,16:16,17:19,23:21,31:p,32:g,33:m,34:f,35:S,36:q,44:A,62:w,63:$},{4:17,5:u,7:32,8:l,9:o,11:c,13:h,14:14,15:15,16:16,17:19,23:21,31:p,32:g,33:m,34:f,35:S,36:q,44:A,62:w,63:$},{4:17,5:u,7:33,8:l,9:o,11:c,13:h,14:14,15:15,16:16,17:19,23:21,31:p,32:g,33:m,34:f,35:S,36:q,44:A,62:w,63:$},{4:17,5:u,7:34,8:l,9:o,11:c,13:h,14:14,15:15,16:16,17:19,23:21,31:p,32:g,33:m,34:f,35:S,36:q,44:A,62:w,63:$},{4:17,5:u,7:35,8:l,9:o,11:c,13:h,14:14,15:15,16:16,17:19,23:21,31:p,32:g,33:m,34:f,35:S,36:q,44:A,62:w,63:$},{18:36,62:[1,37],63:[1,38]},{45:39,62:[1,40],63:[1,41]},{51:[1,42],53:[1,43]},e(D,[2,20]),e(D,[2,21]),e(D,[2,22]),e(D,[2,23]),e(D,[2,24]),e(D,[2,25]),e(pe,[2,49]),e(pe,[2,50]),{1:[2,3]},{8:[2,8]},{8:[2,9]},{8:[2,10]},{8:[2,11]},{8:[2,12]},{19:[1,44]},{19:[2,47]},{19:[2,48]},{19:[1,45]},{19:[2,53]},{19:[2,54]},{52:46,55:de,56:_e,57:ge,58:Ee,59:me,60:Re,61:fe},{52:54,55:de,56:_e,57:ge,58:Ee,59:me,60:Re,61:fe},{5:[1,55]},{5:[1,56]},{53:[1,57]},e(L,[2,40]),e(L,[2,41]),e(L,[2,42]),e(L,[2,43]),e(L,[2,44]),e(L,[2,45]),e(L,[2,46]),{54:[1,58]},{5:P,20:59,21:U,24:Y,26:V,28:B,30:Q},{5:G,30:z,46:66,47:X,49:J},{23:71,62:w,63:$},{23:72,62:w,63:$},e(k,[2,13]),{22:[1,73]},{22:[1,74]},{22:[1,75]},{22:[1,76]},{5:P,20:77,21:U,24:Y,26:V,28:B,30:Q},e(k,[2,19]),e(k,[2,33]),{22:[1,78]},{22:[1,79]},{5:G,30:z,46:80,47:X,49:J},e(k,[2,37]),e(k,[2,38]),e(k,[2,39]),{23:81,62:w,63:$},{25:82,62:[1,83],63:[1,84]},{27:85,37:[1,86],38:[1,87],39:[1,88]},{29:89,40:[1,90],41:[1,91],42:[1,92],43:[1,93]},e(k,[2,18]),{48:94,62:[1,95],63:[1,96]},{50:97,62:[1,98],63:[1,99]},e(k,[2,36]),{5:[1,100]},{5:[1,101]},{5:[2,51]},{5:[2,52]},{5:[1,102]},{5:[2,26]},{5:[2,27]},{5:[2,28]},{5:[1,103]},{5:[2,29]},{5:[2,30]},{5:[2,31]},{5:[2,32]},{5:[1,104]},{5:[2,55]},{5:[2,56]},{5:[1,105]},{5:[2,57]},{5:[2,58]},{5:P,20:106,21:U,24:Y,26:V,28:B,30:Q},{5:P,20:107,21:U,24:Y,26:V,28:B,30:Q},{5:P,20:108,21:U,24:Y,26:V,28:B,30:Q},{5:P,20:109,21:U,24:Y,26:V,28:B,30:Q},{5:G,30:z,46:110,47:X,49:J},{5:G,30:z,46:111,47:X,49:J},e(k,[2,14]),e(k,[2,15]),e(k,[2,16]),e(k,[2,17]),e(k,[2,34]),e(k,[2,35])],defaultActions:{8:[2,2],12:[2,1],30:[2,3],31:[2,8],32:[2,9],33:[2,10],34:[2,11],35:[2,12],37:[2,47],38:[2,48],40:[2,53],41:[2,54],83:[2,51],84:[2,52],86:[2,26],87:[2,27],88:[2,28],90:[2,29],91:[2,30],92:[2,31],93:[2,32],95:[2,55],96:[2,56],98:[2,57],99:[2,58]},parseError:n(function(v,t){if(t.recoverable)this.trace(v);else{var a=new Error(v);throw a.hash=t,a}},"parseError"),parse:n(function(v){var t=this,a=[0],r=[],d=[null],s=[],N=this.table,E="",ee=0,Ie=0,Ce=0,Le=2,Se=1,Fe=s.slice.call(arguments,1),R=Object.create(this.lexer),F={yy:{}};for(var ne in this.yy)Object.prototype.hasOwnProperty.call(this.yy,ne)&&(F.yy[ne]=this.yy[ne]);R.setInput(v,F.yy),F.yy.lexer=R,F.yy.parser=this,typeof R.yylloc>"u"&&(R.yylloc={});var se=R.yylloc;s.push(se);var Me=R.options&&R.options.ranges;typeof F.yy.parseError=="function"?this.parseError=F.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function De(b){a.length=a.length-2*b,d.length=d.length-b,s.length=s.length-b}n(De,"popStack");function ke(){var b;return b=r.pop()||R.lex()||Se,typeof b!="number"&&(b instanceof Array&&(r=b,b=r.pop()),b=t.symbols_[b]||b),b}n(ke,"lex");for(var I,ae,M,x,Nt,le,W={},te,O,Ne,ie;;){if(M=a[a.length-1],this.defaultActions[M]?x=this.defaultActions[M]:((I===null||typeof I>"u")&&(I=ke()),x=N[M]&&N[M][I]),typeof x>"u"||!x.length||!x[0]){var oe="";ie=[];for(te in N[M])this.terminals_[te]&&te>Le&&ie.push("'"+this.terminals_[te]+"'");R.showPosition?oe="Parse error on line "+(ee+1)+`:
`+R.showPosition()+`
Expecting `+ie.join(", ")+", got '"+(this.terminals_[I]||I)+"'":oe="Parse error on line "+(ee+1)+": Unexpected "+(I==Se?"end of input":"'"+(this.terminals_[I]||I)+"'"),this.parseError(oe,{text:R.match,token:this.terminals_[I]||I,line:R.yylineno,loc:se,expected:ie})}if(x[0]instanceof Array&&x.length>1)throw new Error("Parse Error: multiple actions possible at state: "+M+", token: "+I);switch(x[0]){case 1:a.push(I),d.push(R.yytext),s.push(R.yylloc),a.push(x[1]),I=null,ae?(I=ae,ae=null):(Ie=R.yyleng,E=R.yytext,ee=R.yylineno,se=R.yylloc,Ce>0);break;case 2:if(O=this.productions_[x[1]][1],W.$=d[d.length-O],W._$={first_line:s[s.length-(O||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(O||1)].first_column,last_column:s[s.length-1].last_column},Me&&(W._$.range=[s[s.length-(O||1)].range[0],s[s.length-1].range[1]]),le=this.performAction.apply(W,[E,Ie,ee,F.yy,x[1],d,s].concat(Fe)),typeof le<"u")return le;O&&(a=a.slice(0,-1*O*2),d=d.slice(0,-1*O),s=s.slice(0,-1*O)),a.push(this.productions_[x[1]][0]),d.push(W.$),s.push(W._$),Ne=N[a[a.length-2]][a[a.length-1]],a.push(Ne);break;case 3:return!0}}return!0},"parse")},Oe=function(){var v={EOF:1,parseError:n(function(t,a){if(this.yy.parser)this.yy.parser.parseError(t,a);else throw new Error(t)},"parseError"),setInput:n(function(t,a){return this.yy=a||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:n(function(){var t=this._input[0];this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t;var a=t.match(/(?:\r\n?|\n).*/g);return a?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},"input"),unput:n(function(t){var a=t.length,r=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-a),this.offset-=a;var d=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),r.length-1&&(this.yylineno-=r.length-1);var s=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:r?(r.length===d.length?this.yylloc.first_column:0)+d[d.length-r.length].length-r[0].length:this.yylloc.first_column-a},this.options.ranges&&(this.yylloc.range=[s[0],s[0]+this.yyleng-a]),this.yyleng=this.yytext.length,this},"unput"),more:n(function(){return this._more=!0,this},"more"),reject:n(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:n(function(t){this.unput(this.match.slice(t))},"less"),pastInput:n(function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:n(function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:n(function(){var t=this.pastInput(),a=new Array(t.length+1).join("-");return t+this.upcomingInput()+`
`+a+"^"},"showPosition"),test_match:n(function(t,a){var r,d,s;if(this.options.backtrack_lexer&&(s={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(s.yylloc.range=this.yylloc.range.slice(0))),d=t[0].match(/(?:\r\n?|\n).*/g),d&&(this.yylineno+=d.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:d?d[d.length-1].length-d[d.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],r=this.performAction.call(this,this.yy,this,a,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),r)return r;if(this._backtrack){for(var N in s)this[N]=s[N];return!1}return!1},"test_match"),next:n(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var t,a,r,d;this._more||(this.yytext="",this.match="");for(var s=this._currentRules(),N=0;N<s.length;N++)if(r=this._input.match(this.rules[s[N]]),r&&(!a||r[0].length>a[0].length)){if(a=r,d=N,this.options.backtrack_lexer){if(t=this.test_match(r,s[N]),t!==!1)return t;if(this._backtrack){a=!1;continue}else return!1}else if(!this.options.flex)break}return a?(t=this.test_match(a,s[d]),t!==!1?t:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:n(function(){var t=this.next();return t||this.lex()},"lex"),begin:n(function(t){this.conditionStack.push(t)},"begin"),popState:n(function(){var t=this.conditionStack.length-1;return t>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:n(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:n(function(t){return t=this.conditionStack.length-1-Math.abs(t||0),t>=0?this.conditionStack[t]:"INITIAL"},"topState"),pushState:n(function(t){this.begin(t)},"pushState"),stateStackSize:n(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:n(function(t,a,r,d){switch(r){case 0:return"title";case 1:return this.begin("acc_title"),9;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),11;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:return 5;case 9:break;case 10:break;case 11:break;case 12:return 8;case 13:return 6;case 14:return 19;case 15:return 30;case 16:return 22;case 17:return 21;case 18:return 24;case 19:return 26;case 20:return 28;case 21:return 31;case 22:return 32;case 23:return 33;case 24:return 34;case 25:return 35;case 26:return 36;case 27:return 37;case 28:return 38;case 29:return 39;case 30:return 40;case 31:return 41;case 32:return 42;case 33:return 43;case 34:return 44;case 35:return 55;case 36:return 56;case 37:return 57;case 38:return 58;case 39:return 59;case 40:return 60;case 41:return 61;case 42:return 47;case 43:return 49;case 44:return 51;case 45:return 54;case 46:return 53;case 47:this.begin("string");break;case 48:this.popState();break;case 49:return"qString";case 50:return a.yytext=a.yytext.trim(),62}},"anonymous"),rules:[/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:(\r?\n)+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:$)/i,/^(?:requirementDiagram\b)/i,/^(?:\{)/i,/^(?:\})/i,/^(?::)/i,/^(?:id\b)/i,/^(?:text\b)/i,/^(?:risk\b)/i,/^(?:verifyMethod\b)/i,/^(?:requirement\b)/i,/^(?:functionalRequirement\b)/i,/^(?:interfaceRequirement\b)/i,/^(?:performanceRequirement\b)/i,/^(?:physicalRequirement\b)/i,/^(?:designConstraint\b)/i,/^(?:low\b)/i,/^(?:medium\b)/i,/^(?:high\b)/i,/^(?:analysis\b)/i,/^(?:demonstration\b)/i,/^(?:inspection\b)/i,/^(?:test\b)/i,/^(?:element\b)/i,/^(?:contains\b)/i,/^(?:copies\b)/i,/^(?:derives\b)/i,/^(?:satisfies\b)/i,/^(?:verifies\b)/i,/^(?:refines\b)/i,/^(?:traces\b)/i,/^(?:type\b)/i,/^(?:docref\b)/i,/^(?:<-)/i,/^(?:->)/i,/^(?:-)/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[\w][^\r\n\{\<\>\-\=]*)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},unqString:{rules:[],inclusive:!1},token:{rules:[],inclusive:!1},string:{rules:[48,49],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,50],inclusive:!0}}};return v}();re.lexer=Oe;function Z(){this.yy={}}return n(Z,"Parser"),Z.prototype=re,re.Parser=Z,new Z}();ce.parser=ce;var je=ce,ye=[],T={},H=new Map,C={},j=new Map,Ge={REQUIREMENT:"Requirement",FUNCTIONAL_REQUIREMENT:"Functional Requirement",INTERFACE_REQUIREMENT:"Interface Requirement",PERFORMANCE_REQUIREMENT:"Performance Requirement",PHYSICAL_REQUIREMENT:"Physical Requirement",DESIGN_CONSTRAINT:"Design Constraint"},ze={LOW_RISK:"Low",MED_RISK:"Medium",HIGH_RISK:"High"},Xe={VERIFY_ANALYSIS:"Analysis",VERIFY_DEMONSTRATION:"Demonstration",VERIFY_INSPECTION:"Inspection",VERIFY_TEST:"Test"},Je={CONTAINS:"contains",COPIES:"copies",DERIVES:"derives",SATISFIES:"satisfies",VERIFIES:"verifies",REFINES:"refines",TRACES:"traces"},Ze=n((e,i)=>(H.has(e)||H.set(e,{name:e,type:i,id:T.id,text:T.text,risk:T.risk,verifyMethod:T.verifyMethod}),T={},H.get(e)),"addRequirement"),et=n(()=>H,"getRequirements"),tt=n(e=>{T!==void 0&&(T.id=e)},"setNewReqId"),it=n(e=>{T!==void 0&&(T.text=e)},"setNewReqText"),rt=n(e=>{T!==void 0&&(T.risk=e)},"setNewReqRisk"),nt=n(e=>{T!==void 0&&(T.verifyMethod=e)},"setNewReqVerifyMethod"),st=n(e=>(j.has(e)||(j.set(e,{name:e,type:C.type,docRef:C.docRef}),xe.info("Added new requirement: ",e)),C={},j.get(e)),"addElement"),at=n(()=>j,"getElements"),lt=n(e=>{C!==void 0&&(C.type=e)},"setNewElementType"),ot=n(e=>{C!==void 0&&(C.docRef=e)},"setNewElementDocRef"),ht=n((e,i,o)=>{ye.push({type:e,src:i,dst:o})},"addRelationship"),ct=n(()=>ye,"getRelationships"),ut=n(()=>{ye=[],T={},H=new Map,C={},j=new Map,Ye()},"clear"),yt={RequirementType:Ge,RiskLevel:ze,VerifyType:Xe,Relationships:Je,getConfig:n(()=>we().req,"getConfig"),addRequirement:Ze,getRequirements:et,setNewReqId:tt,setNewReqText:it,setNewReqRisk:rt,setNewReqVerifyMethod:nt,setAccTitle:Ve,getAccTitle:Be,setAccDescription:Qe,getAccDescription:We,addElement:st,getElements:at,setNewElementType:lt,setNewElementDocRef:ot,addRelationship:ht,getRelationships:ct,clear:ut},pt=n(e=>`

  marker {
    fill: ${e.relationColor};
    stroke: ${e.relationColor};
  }

  marker.cross {
    stroke: ${e.lineColor};
  }

  svg {
    font-family: ${e.fontFamily};
    font-size: ${e.fontSize};
  }

  .reqBox {
    fill: ${e.requirementBackground};
    fill-opacity: 1.0;
    stroke: ${e.requirementBorderColor};
    stroke-width: ${e.requirementBorderSize};
  }
  
  .reqTitle, .reqLabel{
    fill:  ${e.requirementTextColor};
  }
  .reqLabelBox {
    fill: ${e.relationLabelBackground};
    fill-opacity: 1.0;
  }

  .req-title-line {
    stroke: ${e.requirementBorderColor};
    stroke-width: ${e.requirementBorderSize};
  }
  .relationshipLine {
    stroke: ${e.relationColor};
    stroke-width: 1;
  }
  .relationshipLabel {
    fill: ${e.relationLabelColor};
  }

`,"getStyles"),dt=pt,ue={CONTAINS:"contains",ARROW:"arrow"},_t=n((e,i)=>{let o=e.append("defs").append("marker").attr("id",ue.CONTAINS+"_line_ending").attr("refX",0).attr("refY",i.line_height/2).attr("markerWidth",i.line_height).attr("markerHeight",i.line_height).attr("orient","auto").append("g");o.append("circle").attr("cx",i.line_height/2).attr("cy",i.line_height/2).attr("r",i.line_height/2).attr("fill","none"),o.append("line").attr("x1",0).attr("x2",i.line_height).attr("y1",i.line_height/2).attr("y2",i.line_height/2).attr("stroke-width",1),o.append("line").attr("y1",0).attr("y2",i.line_height).attr("x1",i.line_height/2).attr("x2",i.line_height/2).attr("stroke-width",1),e.append("defs").append("marker").attr("id",ue.ARROW+"_line_ending").attr("refX",i.line_height).attr("refY",.5*i.line_height).attr("markerWidth",i.line_height).attr("markerHeight",i.line_height).attr("orient","auto").append("path").attr("d",`M0,0
      L${i.line_height},${i.line_height/2}
      M${i.line_height},${i.line_height/2}
      L0,${i.line_height}`).attr("stroke-width",1)},"insertLineEndings"),ve={ReqMarkers:ue,insertLineEndings:_t},_={},be=0,qe=n((e,i)=>e.insert("rect","#"+i).attr("class","req reqBox").attr("x",0).attr("y",0).attr("width",_.rect_min_width+"px").attr("height",_.rect_min_height+"px"),"newRectNode"),Ae=n((e,i,o)=>{let c=_.rect_min_width/2,h=e.append("text").attr("class","req reqLabel reqTitle").attr("id",i).attr("x",c).attr("y",_.rect_padding).attr("dominant-baseline","hanging"),y=0;o.forEach(g=>{y==0?h.append("tspan").attr("text-anchor","middle").attr("x",_.rect_min_width/2).attr("dy",0).text(g):h.append("tspan").attr("text-anchor","middle").attr("x",_.rect_min_width/2).attr("dy",_.line_height*.75).text(g),y++});let u=1.5*_.rect_padding,l=y*_.line_height*.75,p=u+l;return e.append("line").attr("class","req-title-line").attr("x1","0").attr("x2",_.rect_min_width).attr("y1",p).attr("y2",p),{titleNode:h,y:p}},"newTitleNode"),$e=n((e,i,o,c)=>{let h=e.append("text").attr("class","req reqLabel").attr("id",i).attr("x",_.rect_padding).attr("y",c).attr("dominant-baseline","hanging"),y=0,u=30,l=[];return o.forEach(p=>{let g=p.length;for(;g>u&&y<3;){let m=p.substring(0,u);p=p.substring(u,p.length),g=p.length,l[l.length]=m,y++}if(y==3){let m=l[l.length-1];l[l.length-1]=m.substring(0,m.length-4)+"..."}else l[l.length]=p;y=0}),l.forEach(p=>{h.append("tspan").attr("x",_.rect_padding).attr("dy",_.line_height).text(p)}),h},"newBodyNode"),gt=n((e,i,o,c)=>{let h=i.node().getTotalLength(),y=i.node().getPointAtLength(h*.5),u="rel"+be;be++;let l=e.append("text").attr("class","req relationshipLabel").attr("id",u).attr("x",y.x).attr("y",y.y).attr("text-anchor","middle").attr("dominant-baseline","middle").text(c).node().getBBox();e.insert("rect","#"+u).attr("class","req reqLabelBox").attr("x",y.x-l.width/2).attr("y",y.y-l.height/2).attr("width",l.width).attr("height",l.height).attr("fill","white").attr("fill-opacity","85%")},"addEdgeLabel"),Et=n(function(e,i,o,c,h){let y=o.edge(K(i.src),K(i.dst)),u=Ke().x(function(p){return p.x}).y(function(p){return p.y}),l=e.insert("path","#"+c).attr("class","er relationshipLine").attr("d",u(y.points)).attr("fill","none");i.type==h.db.Relationships.CONTAINS?l.attr("marker-start","url("+Te.getUrl(_.arrowMarkerAbsolute)+"#"+i.type+"_line_ending)"):(l.attr("stroke-dasharray","10,7"),l.attr("marker-end","url("+Te.getUrl(_.arrowMarkerAbsolute)+"#"+ve.ReqMarkers.ARROW+"_line_ending)")),gt(e,l,_,`<<${i.type}>>`)},"drawRelationshipFromLayout"),mt=n((e,i,o)=>{e.forEach((c,h)=>{h=K(h),xe.info("Added new requirement: ",h);let y=o.append("g").attr("id",h),u="req-"+h,l=qe(y,u),p=[],g=Ae(y,h+"_title",[`<<${c.type}>>`,`${c.name}`]);p.push(g.titleNode);let m=$e(y,h+"_body",[`Id: ${c.id}`,`Text: ${c.text}`,`Risk: ${c.risk}`,`Verification: ${c.verifyMethod}`],g.y);p.push(m);let f=l.node().getBBox();i.setNode(h,{width:f.width,height:f.height,shape:"rect",id:h})})},"drawReqs"),Rt=n((e,i,o)=>{e.forEach((c,h)=>{let y=K(h),u=o.append("g").attr("id",y),l="element-"+y,p=qe(u,l),g=[],m=Ae(u,l+"_title",["<<Element>>",`${h}`]);g.push(m.titleNode);let f=$e(u,l+"_body",[`Type: ${c.type||"Not Specified"}`,`Doc Ref: ${c.docRef||"None"}`],m.y);g.push(f);let S=p.node().getBBox();i.setNode(y,{width:S.width,height:S.height,shape:"rect",id:y})})},"drawElements"),ft=n((e,i)=>(e.forEach(function(o){let c=K(o.src),h=K(o.dst);i.setEdge(c,h,{relationship:o})}),e),"addRelationships"),It=n(function(e,i){i.nodes().forEach(function(o){o!==void 0&&i.node(o)!==void 0&&(e.select("#"+o),e.select("#"+o).attr("transform","translate("+(i.node(o).x-i.node(o).width/2)+","+(i.node(o).y-i.node(o).height/2)+" )"))})},"adjustEntities"),K=n(e=>e.replace(/\s/g,"").replace(/\./g,"_"),"elementString"),St=n((e,i,o,c)=>{_=we().requirement;let h=_.securityLevel,y;h==="sandbox"&&(y=he("#i"+i));let u=(h==="sandbox"?he(y.nodes()[0].contentDocument.body):he("body")).select(`[id='${i}']`);ve.insertLineEndings(u,_);let l=new Ue({multigraph:!1,compound:!1,directed:!0}).setGraph({rankdir:_.layoutDirection,marginx:20,marginy:20,nodesep:100,edgesep:100,ranksep:100}).setDefaultEdgeLabel(function(){return{}}),p=c.db.getRequirements(),g=c.db.getElements(),m=c.db.getRelationships();mt(p,l,u),Rt(g,l,u),ft(m,l),Pe(l),It(u,l),m.forEach(function(w){Et(u,w,l,i,c)});let f=_.rect_padding,S=u.node().getBBox(),q=S.width+f*2,A=S.height+f*2;He(u,A,q,_.useMaxWidth),u.attr("viewBox",`${S.x-f} ${S.y-f} ${q} ${A}`)},"draw"),kt={draw:St},qt={parser:je,db:yt,renderer:kt,styles:dt};export{qt as diagram};
