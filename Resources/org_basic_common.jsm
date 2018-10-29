// copyright Websecurify, all rights reserved
(function(f){function e(){}function o(a,b,c){a=new g(a,b);this.iteratorABC=new g(a,c)}function l(a,b,c){this.valueA=a;this.valueB=b;this.valueC=c}function j(a,b){this.valueA=a;this.iteratorB=b;this.empty=!0;this.nextException=this.nextValue=null;this.prepareNext()}function g(a,b){this.iteratorA=a;this.iterableB=b;this.iteratorAB=null;this.empty=!0;this.nextException=this.nextValue=null;this.prepareNext()}function p(a,b){this.valueA=a;this.valueB=b}function q(a,b){this.index=a;this.toIndex=b}function r(a){this.iterator=
a}function s(a,b){this.regularExpression=a;this.value=b}function t(){this.containers=new h}function i(){this.iterators=new h;this.empty=!0;this.nextException=this.nextValue=null;this.prepareNext()}function m(a){this.iterators=a.reflect();this.empty=!0;this.nextException=this.nextValue=null;this.prepareNext()}function k(){this.strings=new h;this.regularExpressions=new h}function v(a){this.input=a}function n(a){this.iterators=new h;this.current=new h;this.input=new h;for(var b=!1,a=a.iterator(),c=null;a.hasNext();){var c=
a.next(),d=c.iterator();d.hasNext()&&(b=!0,this.current.add(d.next()),this.iterators.add(d),this.input.add(c))}this.empty=!b}var w=require("./org_basic_core.js"),h=w.ListContainer,u=w.RegularExpression,x=w.MathUtils;e.isNone=function(a){return a==null};e.isEmpty=function(a){return e.isNone(a)||a.isEmpty()};e.isHollow=function(a){return e.isEmpty(a)||a.trim().isEmpty()};e.ltrimRegularExpression=new u("^\\s+","");e.ltrim=function(a){return e.ltrimRegularExpression.replace(a,"")};e.rtrimRegularExpression=
new u("\\s+$","");e.rtrim=function(a){return e.rtrimRegularExpression.replace(a,"")};e.rRegularExpression=new u("\r","g");e.nRegularExpression=new u("\n","g");e.makeLiteral=function(a){return e.nRegularExpression.replace(e.rRegularExpression.replace(a,"\\\\r"),"\\\\n")};e.generateRandomString=function(a,b){for(var c="",d=0;d<b;d++)c+=a.charAt(x.random(0,a.length-1));return c};o.prototype.hasNext=function(){return this.iteratorABC.hasNext()};o.prototype.next=function(){var a=this.iteratorABC.next();
return new l(a.getValueA().getValueA(),a.getValueA().getValueB(),a.getValueB())};o.prototype.remove=function(){this.iteratorABC.remove()};l.prototype.getValueA=function(){return this.valueA};l.prototype.getValueB=function(){return this.valueB};l.prototype.getValueC=function(){return this.valueC};j.prototype.hasNext=function(){return!this.empty};j.prototype.next=function(){if(this.nextException!=null)throw this.nextException;var a=this.nextValue;this.prepareNext();return a};j.prototype.remove=function(){throw Error("cannot remove element");
};j.prototype.prepareNext=function(){(this.empty=!this.iteratorB.hasNext())?(this.nextValue=null,this.nextException=Error("no such element")):(this.nextValue=new p(this.valueA,this.iteratorB.next()),this.nextException=null)};g.prototype.hasNext=function(){return!this.empty};g.prototype.next=function(){if(this.nextException!=null)throw this.nextException;var a=this.nextValue;this.prepareNext();return a};g.prototype.remove=function(){throw Error("cannot remove element");};g.prototype.prepareNext=function(){if(this.iteratorAB==
null)if(this.empty=!this.iteratorA.hasNext()){this.nextValue=null;this.nextException=Error("no such element");return}else{var a=this.iteratorA.next();this.iteratorAB=new j(a,this.iterableB.iterator())}(this.empty=!this.iteratorAB.hasNext())?(this.iteratorAB=null,this.prepareNext()):(this.nextValue=this.iteratorAB.next(),this.nextException=null)};p.prototype.getValueA=function(){return this.valueA};p.prototype.getValueB=function(){return this.valueB};q.prototype.hasNext=function(){return this.index<=
this.toIndex};q.prototype.next=function(){if(this.index<=this.toIndex){var a=this.index;this.index+=1;return a}else throw Error("no such element");};q.prototype.remove=function(){throw Error("cannot remove element");};r.prototype.hasNext=function(){return this.iterator.hasNext()};r.prototype.next=function(){return this.iterator.next()};r.prototype.remove=function(){throw Error("cannot remove element");};s.prototype.getRegularExpression=function(){return this.regularExpression};s.prototype.getValue=
function(){return this.value};t.prototype.add=function(a,b){this.containers.add(new s(a,b))};t.prototype.addContainer=function(a){this.containers.add(a)};t.prototype.test=function(a){for(var b=this.containers.iterator(),c=null;b.hasNext();)if(c=b.next(),c.getRegularExpression().test(a))return c.getValue();return null};i.prototype.hasNext=function(){return!this.empty};i.prototype.next=function(){if(this.nextException!=null)throw this.nextException;var a=this.nextValue;this.prepareNext();return a};
i.prototype.remove=function(){throw Error("cannot remove element");};i.prototype.prepareNext=function(){if(this.iterators.size()==0)this.empty=!0,this.nextValue=null,this.nextException=Error("no such element");else{var a=this.iterators.retrieve(0);a.hasNext()?(this.empty=!1,this.nextValue=a.next(),this.nextException=null):(this.iterators.erase(0),this.prepareNext())}};i.prototype.updateNext=function(){this.nextException!=null&&this.prepareNext()};i.prototype.add=function(a){this.iterators.add(a);
this.updateNext()};m.prototype.hasNext=function(){return!this.empty};m.prototype.next=function(){if(this.nextException!=null)throw this.nextException;var a=this.nextValue;this.prepareNext();return a};m.prototype.remove=function(){throw Error("cannot remove element");};m.prototype.prepareNext=function(){if(this.iterators.size()==0)this.empty=!0,this.nextValue=null,this.nextException=Error("no such element");else{var a=this.iterators.retrieve(0);a.hasNext()?(this.empty=!1,this.nextValue=a.next(),this.nextException=
null):(this.iterators.erase(0),this.prepareNext())}};k.prototype.addString=function(a){this.strings.add(a)};k.prototype.addRegularExpression=function(a){this.regularExpressions.add(a)};k.prototype.any=function(a){for(var b=this.strings.iterator(),c=null;b.hasNext();)if(c=b.next(),a.indexOf(c)>=0)return!0;b=this.regularExpressions.iterator();for(c=null;b.hasNext();)if(c=b.next(),c.test(a))return!0;return!1};k.prototype.all=function(a){for(var b=this.strings.iterator(),c=null;b.hasNext();)if(c=b.next(),
a.indexOf(c)<0)return!1;b=this.regularExpressions.iterator();for(c=null;b.hasNext();)if(c=b.next(),!c.test(a))return!1;return!0};k.prototype.first=function(a){for(var b=this.strings.iterator(),c=null;b.hasNext();){var c=b.next(),d=a.indexOf(c);if(d>=0)return a.substring(d-3,d+c.length+3)}b=this.regularExpressions.iterator();for(c=null;b.hasNext();)if(c=b.next(),c=c.match(a),c!=null)return c.match();return null};v.prototype.iterator=function(){return new n(this.input)};v.prototype.size=function(){for(var a=
0,b=this.input.iterator(),c=null;b.hasNext();)c=b.next(),a+=c.size();return a};n.prototype.hasNext=function(){return!this.empty};n.prototype.next=function(){for(var a=this.current.reflect(),b=this.iterators.size()-1;b>=0;b--){var c=this.iterators.retrieve(b);if(c.hasNext())break}if(b<0)return this.empty=!0,a;for(var d=b+1;d<this.iterators.size();d++)c=this.input.retrieve(d).iterator(),this.iterators.replace(d,c);for(d=b;d<this.iterators.size();d++)c=this.iterators.retrieve(d),b=c.next(),this.current.replace(d,
b);return a};n.prototype.remove=function(){throw Error("cannot remove element");};f.StringUtils=e;f.MixTrippleIterator=o;f.MixTrippleContainer=l;f.MixSingularIterator=j;f.MixDualIterator=g;f.MixDualContainer=p;f.IntegerIterator=q;f.ImmutableIterator=r;f.EnclosedRegularExpressionContainer=s;f.EnclosedRegularExpression=t;f.ContinuesIterator=i;f.CompoundIterator=m;f.CompositeStringSearch=k;f.CartesianProduct=v;f.CartesianIterator=n})(exports);
