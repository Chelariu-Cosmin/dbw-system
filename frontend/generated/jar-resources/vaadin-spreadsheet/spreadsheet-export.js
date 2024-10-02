function SpreadsheetApi(){var Pb='',Qb=0,Rb='gwt.codesvr=',Sb='gwt.hosted=',Tb='gwt.hybrid',Ub='SpreadsheetApi',Vb='#',Wb='?',Xb='/',Yb=1,Zb='img',$b='clear.cache.gif',_b='baseUrl',ac='script',bc='SpreadsheetApi.nocache.js',cc='base',dc='//',ec='meta',fc='name',gc='gwt:property',hc='content',ic='=',jc='gwt:onPropertyErrorFn',kc='Bad handler "',lc='" for "gwt:onPropertyErrorFn"',mc='gwt:onLoadErrorFn',nc='" for "gwt:onLoadErrorFn"',oc='modernie',pc='MSIE',qc='Trident',rc='yes',sc='none',tc='user.agent',uc='webkit',vc='safari',wc='msie',xc=10,yc=11,zc='ie10',Ac=9,Bc='ie9',Cc=8,Dc='ie8',Ec='gecko',Fc='gecko1_8',Gc=2,Hc=3,Ic=4,Jc='Single-script hosted mode not yet implemented. See issue ',Kc='http://code.google.com/p/google-web-toolkit/issues/detail?id=2079',Lc='437F3111DC4AABDCB9B3D005D0B489D3',Mc=':1',Nc=':2',Oc=':',Pc='DOMContentLoaded',Qc=50;var l=Pb,m=Qb,n=Rb,o=Sb,p=Tb,q=Ub,r=Vb,s=Wb,t=Xb,u=Yb,v=Zb,w=$b,A=_b,B=ac,C=bc,D=cc,F=dc,G=ec,H=fc,I=gc,J=hc,K=ic,L=jc,M=kc,N=lc,O=mc,P=nc,Q=oc,R=pc,S=qc,T=rc,U=sc,V=tc,W=uc,X=vc,Y=wc,Z=xc,$=yc,_=zc,ab=Ac,bb=Bc,cb=Cc,db=Dc,eb=Ec,fb=Fc,gb=Gc,hb=Hc,ib=Ic,jb=Jc,kb=Kc,lb=Lc,mb=Mc,nb=Nc,ob=Oc,pb=Pc,qb=Qc;var rb=window,sb=document,tb,ub,vb=l,wb={},xb=[],yb=[],zb=[],Ab=m,Bb,Cb;if(!rb.__gwt_stylesLoaded){rb.__gwt_stylesLoaded={}}if(!rb.__gwt_scriptsLoaded){rb.__gwt_scriptsLoaded={}}function Db(){var b=false;try{var c=rb.location.search;return (c.indexOf(n)!=-1||(c.indexOf(o)!=-1||rb.external&&rb.external.gwtOnLoad))&&c.indexOf(p)==-1}catch(a){}Db=function(){return b};return b}
function Eb(){if(tb&&ub){tb(Bb,q,vb,Ab)}}
function Fb(){function e(a){var b=a.lastIndexOf(r);if(b==-1){b=a.length}var c=a.indexOf(s);if(c==-1){c=a.length}var d=a.lastIndexOf(t,Math.min(c,b));return d>=m?a.substring(m,d+u):l}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=sb.createElement(v);b.src=a+w;a=e(b.src)}return a}
function g(){var a=Ib(A);if(a!=null){return a}return l}
function h(){var a=sb.getElementsByTagName(B);for(var b=m;b<a.length;++b){if(a[b].src.indexOf(C)!=-1){return e(a[b].src)}}return l}
function i(){var a=sb.getElementsByTagName(D);if(a.length>m){return a[a.length-u].href}return l}
function j(){var a=sb.location;return a.href==a.protocol+F+a.host+a.pathname+a.search+a.hash}
var k=g();if(k==l){k=h()}if(k==l){k=i()}if(k==l&&j()){k=e(sb.location.href)}k=f(k);return k}
function Gb(){var b=document.getElementsByTagName(G);for(var c=m,d=b.length;c<d;++c){var e=b[c],f=e.getAttribute(H),g;if(f){if(f==I){g=e.getAttribute(J);if(g){var h,i=g.indexOf(K);if(i>=m){f=g.substring(m,i);h=g.substring(i+u)}else{f=g;h=l}wb[f]=h}}else if(f==L){g=e.getAttribute(J);if(g){try{Cb=eval(g)}catch(a){alert(M+g+N)}}}else if(f==O){g=e.getAttribute(J);if(g){try{Bb=eval(g)}catch(a){alert(M+g+P)}}}}}}
var Hb=function(a,b){return b in xb[a]};var Ib=function(a){var b=wb[a];return b==null?null:b};function Jb(a,b){var c=zb;for(var d=m,e=a.length-u;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
function Kb(a){var b=yb[a](),c=xb[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(Cb){Cb(a,d,b)}throw null}
yb[Q]=function(){{var a=rb.navigator.userAgent;if(a.indexOf(R)==-1&&a.indexOf(S)!=-1){return T}return U}};xb[Q]={'none':m,'yes':u};yb[V]=function(){var a=navigator.userAgent.toLowerCase();var b=sb.documentMode;if(function(){return a.indexOf(W)!=-1}())return X;if(function(){return a.indexOf(Y)!=-1&&(b>=Z&&b<$)}())return _;if(function(){return a.indexOf(Y)!=-1&&(b>=ab&&b<$)}())return bb;if(function(){return a.indexOf(Y)!=-1&&(b>=cb&&b<$)}())return db;if(function(){return a.indexOf(eb)!=-1||b>=$}())return fb;return X};xb[V]={'gecko1_8':m,'ie10':u,'ie8':gb,'ie9':hb,'safari':ib};SpreadsheetApi.onScriptLoad=function(a){SpreadsheetApi=null;tb=a;Eb()};if(Db()){alert(jb+kb);return}Fb();Gb();try{var Lb;Jb([U,fb],lb);Jb([T,fb],lb+mb);Jb([U,X],lb+nb);Lb=zb[Kb(Q)][Kb(V)];var Mb=Lb.indexOf(ob);if(Mb!=-1){Ab=Number(Lb.substring(Mb+u))}}catch(a){return}var Nb;function Ob(){if(!ub){ub=true;Eb();if(sb.removeEventListener){sb.removeEventListener(pb,Ob,false)}if(Nb){clearInterval(Nb)}}}
if(sb.addEventListener){sb.addEventListener(pb,function(){Ob()},false)}var Nb=setInterval(function(){if(/loaded|complete/.test(sb.readyState)){Ob()}},qb)}
SpreadsheetApi();(function () {var $gwt_version = "2.9.0";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {$wnd.__gwtStatsEvent(a)} : null;var $strongName = '437F3111DC4AABDCB9B3D005D0B489D3';function K(){}
function lE(){}
function hE(){}
function hn(){}
function an(){}
function pn(){}
function Bn(){}
function In(){}
function Pn(){}
function Wn(){}
function Mg(){}
function Tg(){}
function eb(){}
function rb(){}
function lf(){}
function bo(){}
function jo(){}
function qo(){}
function Bo(){}
function Jo(){}
function Qo(){}
function ap(){}
function gp(){}
function mp(){}
function BE(){}
function dF(){}
function fF(){}
function KF(){}
function hH(){}
function jH(){}
function CH(){}
function EH(){}
function UJ(){}
function wK(){}
function yK(){}
function yY(){}
function xL(){}
function JL(){}
function AN(){}
function pP(){}
function tP(){}
function tQ(){}
function IS(){}
function OS(){}
function _S(){}
function gZ(){}
function i0(){}
function f1(){}
function q1(){}
function X1(){}
function q2(){}
function s2(){}
function u2(){}
function x2(){}
function z2(){}
function B2(){}
function D2(){}
function F2(){}
function H2(){}
function I2(){}
function K2(){}
function M2(){}
function N2(){}
function P2(){}
function Q2(){}
function S2(){}
function U2(){}
function V2(){}
function X2(){}
function Y2(){}
function $2(){}
function a3(){}
function c3(){}
function e3(){}
function g3(){}
function i3(){}
function k5(){}
function X5(){}
function Z5(){}
function _5(){}
function b6(){}
function d6(){}
function f6(){}
function h6(){}
function j6(){}
function l6(){}
function m6(){}
function n6(){}
function p6(){}
function r6(){}
function t6(){}
function v6(){}
function z6(){}
function B6(){}
function D6(){}
function F6(){}
function Ceb(){}
function Ckb(){}
function Lkb(){}
function Tkb(){}
function _kb(){}
function gpb(){}
function Hqb(){}
function Jqb(){}
function Lqb(){}
function vrb(){}
function Cab(){}
function Ubb(){}
function bcb(){}
function ccb(){}
function icb(){}
function jcb(){}
function Imb(){}
function Ipb(){}
function wpb(){}
function zpb(){}
function Cpb(){}
function Fpb(){}
function Lpb(){}
function Opb(){}
function Rpb(){}
function Upb(){}
function iob(){}
function mob(){}
function oob(){}
function EE(a){}
function O1(a){}
function qi(){Fh()}
function Ki(){Fh()}
function pG(){oG()}
function aH(){$G()}
function dH(){JG()}
function DL(){vL()}
function GL(){vL()}
function QL(){PL()}
function MG(a){rF(a)}
function Wab(){Lab()}
function xcb(){xcb=hE}
function cc(a,b){a.a=b}
function Vm(a,b){a.a=b}
function Rm(a,b){a.f=b}
function Wm(a,b){a.b=b}
function pE(a,b){a.b=b}
function oE(a,b){a.a=b}
function uI(a,b){a.a=b}
function qR(a,b){a.a=b}
function rR(a,b){a.b=b}
function jQ(a,b){a.b=b}
function JQ(a,b){a.b=b}
function JF(a,b){a.d=b}
function MM(a,b){a.r=b}
function sN(a,b){a.o=b}
function sY(a,b){a.e=b}
function zQ(a,b){a.e=b}
function yQ(a,b){a.c=b}
function NQ(a,b){a.k=b}
function nW(a,b){a.G=b}
function oW(a,b){a.H=b}
function tY(a,b){a.f=b}
function t_(a,b){a.P=b}
function a_(a,b){a.A=b}
function c_(a,b){a.B=b}
function n_(a,b){a.M=b}
function r_(a,b){a.N=b}
function u_(a,b){a.S=b}
function y_(a,b){a.X=b}
function z_(a,b){a.$=b}
function A_(a,b){a._=b}
function P$(a,b){a.g=b}
function Q$(a,b){a.i=b}
function R$(a,b){a.j=b}
function V$(a,b){a.q=b}
function W$(a,b){a.r=b}
function I9(a,b){a.a=b}
function J9(a,b){a.b=b}
function K9(a,b){a.c=b}
function L9(a,b){a.e=b}
function M9(a,b){a.f=b}
function N9(a,b){a.g=b}
function O9(a,b){a.i=b}
function Q9(a,b){a.j=b}
function R9(a,b){a.k=b}
function S9(a,b){a.n=b}
function T9(a,b){a.o=b}
function U9(a,b){a.p=b}
function V9(a,b){a.q=b}
function W9(a,b){a.r=b}
function X9(a,b){a.s=b}
function Y9(a,b){a.t=b}
function $9(a,b){a.u=b}
function _9(a,b){a.v=b}
function urb(a,b){a.a=b}
function oe(a,b){a.Wc=b}
function vh(b,a){b.id=a}
function bb(a){this.a=a}
function ib(a){this.a=a}
function Eb(a){this.a=a}
function Kb(a){this.a=a}
function Ag(a){this.a=a}
function Cg(a){this.a=a}
function Wo(a){this.a=a}
function WJ(a){this.a=a}
function jJ(a){this.a=a}
function lJ(a){this.a=a}
function YJ(a){this.a=a}
function Ip(a){this.a=a}
function xE(a){this.a=a}
function DE(a){this.a=a}
function pI(a){this.a=a}
function sI(a){this.a=a}
function WL(a){this.a=a}
function WO(a){this.a=a}
function QO(a){this.a=a}
function SO(a){this.a=a}
function YO(a){this.a=a}
function $O(a){this.a=a}
function TN(a){this.a=a}
function _N(a){this.a=a}
function aP(a){this.a=a}
function cP(a){this.a=a}
function gP(a){this.a=a}
function iP(a){this.a=a}
function wP(a){this.a=a}
function UQ(a){this.a=a}
function WQ(a){this.a=a}
function ZR(a){this.a=a}
function _R(a){this.a=a}
function bS(a){this.a=a}
function BS(a){this.a=a}
function BT(a){this.a=a}
function xT(a){this.a=a}
function zT(a){this.a=a}
function EX(a){this.a=a}
function QX(a){this.a=a}
function WX(a){this.a=a}
function YX(a){this.a=a}
function eY(a){this.a=a}
function gY(a){this.a=a}
function lY(a){this.a=a}
function nY(a){this.a=a}
function _Y(a){this.a=a}
function fZ(a){this.a=a}
function mZ(a){this.a=a}
function X_(a){this.a=a}
function __(a){this.b=a}
function nL(a){this.c=a}
function r1(a){this.a=a}
function e2(a){this.a=a}
function g2(a){this.a=a}
function V3(a){this.a=a}
function $3(a){this.a=a}
function _3(a){this.a=a}
function d4(a){this.a=a}
function M4(a){this.a=a}
function S4(a){this.a=a}
function U4(a){this.a=a}
function W4(a){this.a=a}
function H5(a){this.a=a}
function x6(a){this.a=a}
function Z8(a){this.a=a}
function b9(a){this.a=a}
function xo(){this.a={}}
function W0(){this.a={}}
function mW(a,b){a.lb=b}
function xW(a,b){a.mb=b}
function yW(a,b){a.dc=b}
function zW(a,b){a.ec=b}
function aab(a,b){a.w=b}
function bab(a,b){a.A=b}
function cab(a,b){a.d=b}
function dab(a,b){a.B=b}
function eab(a,b){a.C=b}
function fab(a,b){a.D=b}
function gab(a,b){a.F=b}
function hab(a,b){a.G=b}
function iab(a,b){a.H=b}
function jab(a,b){a.I=b}
function kab(a,b){a.J=b}
function lab(a,b){a.K=b}
function mab(a,b){a.L=b}
function nab(a,b){a.M=b}
function oab(a,b){a.N=b}
function pab(a,b){a.O=b}
function qab(a,b){a.P=b}
function rab(a,b){a.Q=b}
function sab(a,b){a.R=b}
function tab(a,b){a.S=b}
function uab(a,b){a.T=b}
function vab(a,b){a.U=b}
function wab(a,b){a.V=b}
function Mab(a,b){a.a=b}
function Nab(a,b){a.b=b}
function Oab(a,b){a.c=b}
function Pab(a,b){a.d=b}
function Qab(a,b){a.e=b}
function Rab(a,b){a.f=b}
function Sab(a,b){a.g=b}
function Tab(a,b){a.i=b}
function Uab(a,b){a.j=b}
function Vab(a,b){a.k=b}
function aqb(a,b){a.b=b}
function akb(a){this.c=a}
function vdb(a){this.a=a}
function vib(a){this.d=a}
function Lib(a){this.a=a}
function Rib(a){this.a=a}
function Wib(a){this.a=a}
function _ib(a){this.a=a}
function yrb(a){this.a=a}
function Hab(a){this.a=a}
function Jab(a){this.a=a}
function rcb(a){this.a=a}
function kdb(a){this.a=a}
function Uhb(a){this.a=a}
function dlb(a){this.b=a}
function tlb(a){this.b=a}
function Slb(a){this.c=a}
function tmb(a){this.a=a}
function xmb(a){this.a=a}
function xob(a){this.a=a}
function vob(a){this.a=a}
function zob(a){this.a=a}
function Bob(a){this.a=a}
function Sqb(a){this.a=a}
function Xqb(a){this.a=a}
function irb(a){this.a=a}
function nrb(a){this.a=a}
function of(){this.a=Wf()}
function xn(){this.c=++un}
function Ejb(){tjb(this)}
function fcb(){ecb(this)}
function Zmb(){Ghb(this)}
function qf(a){pf=a;gg()}
function iK(){iK=hE;mK()}
function sL(){sL=hE;rL()}
function oj(b,a){b.src=a}
function pj(b,a){b.value=a}
function Mm(b,a){b.value=a}
function Gqb(a,b){a.add(b)}
function CO(a,b){af(a.j,b)}
function AO(a,b){KK(a.j,b)}
function wQ(a,b){xh(a.a,b)}
function KQ(a,b){xQ(a.g,b)}
function vZ(a,b){GT(a.W,b)}
function zZ(a,b){PT(a.W,b)}
function z$(a,b){x9(a.X,b)}
function e$(a,b){w9(a.X,b)}
function r$(a,b){A9(a.X,b)}
function L$(a,b){P9(a.X,b)}
function E$(a,b){PV(a.W,b)}
function F$(a,b){OV(a.W,b)}
function M$(a,b){mW(a.W,b)}
function N$(a,b){nW(a.W,b)}
function O$(a,b){oW(a.W,b)}
function X$(a,b){pW(a.W,b)}
function Y$(a,b){qW(a.W,b)}
function b_(a,b){sW(a.W,b)}
function d_(a,b){lW(a.W,b)}
function g_(a,b){uW(a.W,b)}
function h_(a,b){vW(a.W,b)}
function o_(a,b){xW(a.W,b)}
function p_(a,b){yW(a.W,b)}
function q_(a,b){zW(a.W,b)}
function v_(a,b){rW(a.W,b)}
function B_(a,b){DW(a.W,b)}
function m_(a,b){DO(a.u,b)}
function b$(a,b){AO(a.u,b)}
function f_(a,b){oT(a.V,b)}
function D_(a,b){pT(a.V,b)}
function F_(a,b){VW(a.W,b)}
function G_(a,b){WW(a.W,b)}
function M_(a,b){wX(a.W,b)}
function N_(a,b){xX(a.W,b)}
function lH(a,b){Pe(b,a)}
function gS(a,b){Vg(b,a.k)}
function vS(a,b){Vg(b,a.B)}
function xO(a){KK(a.j,a.c)}
function l2(a){m2(a);n2(a)}
function eR(a){a.a=0;a.b=0}
function FM(a){a.s=new Ejb}
function tI(){tI=hE;new Zmb}
function j1(){j1=hE;new k1}
function jF(){jF=hE;hF=xD()}
function Fh(){Fh=hE;Eh=wD()}
function fG(){fG=hE;bG=yD()}
function tJ(){tJ=hE;sJ=AD()}
function PL(){PL=hE;OL=UL()}
function Lab(){Lab=hE;_ab()}
function $eb(a){Teb(this,a)}
function WZ(a,b){xab(a.X,b)}
function CW(a,b){KR(a.xc,b)}
function C3(a,b){a.a[Ywb]=b}
function wo(a,b,c){a.a[b]=c}
function Uf(b,a){b.length=a}
function Y_(){rb.call(this)}
function DQ(){CQ.call(this)}
function j0(){CQ.call(this)}
function ucb(){Jf.call(this)}
function rdb(){Jf.call(this)}
function Idb(){Jf.call(this)}
function Eeb(){Jf.call(this)}
function rob(){Jf.call(this)}
function Nmb(){Jf.call(this)}
function dc(a){cc(this,a.id)}
function wg(a){return a.Id()}
function V0(a,b){return null}
function fL(a,b){hL(a,b,a.c)}
function SN(a,b){z$(a.a.a,b)}
function qe(a,b){uh(a.ld(),b)}
function se(a,b){Ce(a.ld(),b)}
function Nh(a,b,c){a.add(b,c)}
function EI(a,b){KI(a,b,b,-1)}
function vW(a,b){a.ub=b;UW(a)}
function Gg(a){Fg();Eg.Kd(a)}
function ng(){ng=hE;mg=new q1}
function Of(){Of=hE;Nf=new K}
function vE(){vE=hE;uE=new BE}
function oG(){oG=hE;nG=new xn}
function U0(){U0=hE;T0=new xn}
function N1(){N1=hE;M1=new xn}
function ME(){this.a=new ueb}
function dcb(){this.a=new Ejb}
function cnb(){this.a=new Zmb}
function $pb(){this.a=new Zmb}
function $h(a){Fh();return a|0}
function zj(a){(Fh(),Eh).Ud(a)}
function OK(){OK=hE;_e();WK()}
function Lb(a){Kb.call(this,a)}
function xc(a){Kb.call(this,a)}
function Kf(a){If.call(this,a)}
function Lp(a){Jp.call(this,a)}
function AH(a){Lp.call(this,a)}
function FE(a){EE.call(this,a)}
function nf(b,a){b.fillStyle=a}
function Tf(b,a){b[b.length]=a}
function Vf(b,a){b[b.length]=a}
function Ah(b,a){b.tabIndex=a}
function zh(b,a){b.scrollTop=a}
function vo(a,b){return a.a[b]}
function qO(a){return a.g&&a.f}
function RY(a,b){zZ(QP(a.a),b)}
function WY(a,b){F_(QP(a.a),b)}
function XY(a,b){G_(QP(a.a),b)}
function ZY(a,b){M_(QP(a.a),b)}
function $Y(a,b){N_(QP(a.a),b)}
function o$(a,b,c){v9(a.X,c,b)}
function SZ(a,b,c){u9(a.X,b,c)}
function GZ(a,b,c){jU(a.W,b,c)}
function J$(a,b,c){kW(a.W,b,c)}
function K_(a,b,c){nX(a.W,b,c)}
function e_(a,b){yV(a.W,b,a.B)}
function O_(a){wV(a.W);tT(a.V)}
function EJ(a,b){YH(a,b);zJ(a)}
function U$(a,b){a.p=b;mR(a.R)}
function q3(a){If.call(this,a)}
function qdb(a){Kf.call(this,a)}
function sdb(a){Kf.call(this,a)}
function Kdb(a){Kf.call(this,a)}
function vcb(a){Kf.call(this,a)}
function Feb(a){Kf.call(this,a)}
function Jdb(a){Mf.call(this,a)}
function Gb(){Eb.call(this,Usb)}
function Hb(){Eb.call(this,Vsb)}
function Pb(){Eb.call(this,Wsb)}
function Rb(){Eb.call(this,Xsb)}
function Tb(){Eb.call(this,Ysb)}
function Ub(){Eb.call(this,Zsb)}
function Vb(){Eb.call(this,$sb)}
function fc(){Eb.call(this,_sb)}
function rc(){Eb.call(this,atb)}
function sc(){Eb.call(this,btb)}
function tc(){Eb.call(this,ctb)}
function vc(){Eb.call(this,dtb)}
function wc(){Eb.call(this,etb)}
function zc(){Eb.call(this,ftb)}
function Ec(){Eb.call(this,gtb)}
function Xd(){Eb.call(this,htb)}
function bE(){_D==null&&(_D=[])}
function ag(){ag=hE;!!(Fg(),Eg)}
function ne(a,b){oe(a,(jF(),b))}
function HH(a,b){IH((jF(),a),b)}
function A$(a,b,c){zab(a.X,b,c)}
function x0(a,b,c){Dhb(a.c,b,c)}
function $$(a,b){a.v=new Gjb(b)}
function _$(a,b){a.w=new Gjb(b)}
function DG(a,b){a.__listener=b}
function eV(a,b){return b<=a.ob}
function Vp(a,b){return Tcb(a,b)}
function he(a){return jF(),a.Wc}
function je(a){return jF(),a.Wc}
function CI(a){return jF(),a.Wc}
function II(a){return jF(),a.Wc}
function ecb(a){a.a=(Rbb(),Pbb)}
function pcb(a){Kf.call(this,a)}
function tcb(a){Kf.call(this,a)}
function wcb(a){vcb.call(this,a)}
function xeb(a){vcb.call(this,a)}
function okb(a){Mrb(a);this.a=a}
function zrb(a,b){erb(a.b,a.a,b)}
function Hrb(a,b){return _p(a,b)}
function vF(a,b){jF();hF.Fe(a,b)}
function wF(a,b){jF();hF.Ge(a,b)}
function FF(a,b){jF();hF.Ge(a,b)}
function df(a){oe(this,(jF(),a))}
function jf(a){oe(this,(jF(),a))}
function _H(a){oe(this,(jF(),a))}
function LM(a,b){BJ(a,b);JM(a,1)}
function OM(a,b){FJ(a,b);JM(a,1)}
function oM(a,b){a.j=b;Vg(a.d,b)}
function Vob(a,b,c){b.If(a.a[c])}
function prb(a,b,c){b.If(Beb(c))}
function BW(a,b,c){a.rc=c;a.qc=b}
function hI(a,b){SH(a.a,b,false)}
function gN(){tJ();aN.call(this)}
function yG(){up.call(this,null)}
function WN(a){!a.b&&(a.b=AF(a))}
function Y8(a){oe(this,(jF(),a))}
function Q1(a){O1(this);this.a=a}
function Mdb(a){qdb.call(this,a)}
function neb(){rcb.call(this,'')}
function ueb(){rcb.call(this,'')}
function veb(){rcb.call(this,'')}
function znb(){znb=hE;ynb=Bnb()}
function l0(){l0=hE;k0=q0();r0()}
function Dh(a){a=heb(a);return a}
function jmb(a){dlb.call(this,a)}
function Emb(a){xlb.call(this,a)}
function nmb(a){jmb.call(this,a)}
function ncb(a){return Object(a)}
function HZ(a){return a.T[a.a-1]}
function KD(a,b){return FD(a,b)>0}
function MD(a,b){return FD(a,b)<0}
function l3(a,b,c){L3(a).Bf(b,c)}
function Grb(a,b,c){a.splice(b,c)}
function uob(a,b){while(a.eg(b));}
function Cb(a,b){th(b,'role',a.a)}
function Kkb(){throw CD(new rob)}
function slb(){throw CD(new Eeb)}
function Rlb(){throw CD(new Eeb)}
function Jkb(){Jkb=hE;Ikb=new Lkb}
function Jcb(a){Icb(a);return a.k}
function Kcb(a){Icb(a);return a.i}
function Ij(a){(Fh(),a).opacity=0}
function Go(){this.a=bub in $wnd}
function Qd(){Eb.call(this,'row')}
function jc(){Eb.call(this,'log')}
function ec(){Eb.call(this,'img')}
function Zd(){Eb.call(this,'tab')}
function bk(){Yj.call(this,Ltb,3)}
function rl(){ol.call(this,Ltb,1)}
function xm(){tm.call(this,Ltb,1)}
function eJ(){fJ.call(this,false)}
function XF(){this.a=new up(null)}
function qH(){this.o=new kL(this)}
function t1(){t1=hE;jF();Oi($doc)}
function uF(a){jF();iF=a;hF.Ee(a)}
function DF(a){jF();iF=a;hF.Ee(a)}
function Bq(a){return a.l|a.m<<22}
function BY(a,b){return w0(a.C,b)}
function tp(a,b){return Fp(a.a,b)}
function uU(a,b){return KZ(a.a,b)}
function ID(a,b){return FD(a,b)==0}
function ND(a,b){return FD(a,b)<=0}
function KE(b,a){return b.test(a)}
function Kj(a,b){this.b=a;this.c=b}
function Ab(a,b){this.b=a;this.a=b}
function N5(a,b){b<0&&(b=0);a.a=b}
function O5(a,b){b<0&&(b=0);a.d=b}
function lg(){Xf!=0&&(Xf=0);_f=-1}
function Gmb(){Gmb=hE;Fmb=new Imb}
function meb(a,b){a.a+=b;return a}
function peb(a,b){a.a+=b;return a}
function Dob(a,b){while(a.hg(b));}
function re(a,b,c){Ae(a.ld(),b,c)}
function te(a,b){De((jF(),a.Wc),b)}
function ve(a,b){vF((jF(),a.Wc),b)}
function cf(a,b){Ah((jF(),a.Wc),b)}
function Wg(a){return Ih((Fh(),a))}
function rg(a){return !!a.b||!!a.g}
function lh(a){return Hh((Fh(),a))}
function eh(a,b){(Fh(),Eh).Od(a,b)}
function uh(b,a){b.className=a||''}
function wh(b,a){b.innerHTML=a||''}
function xh(a,b){(Fh(),Eh).ce(a,b)}
function yh(a,b){(Fh(),Eh).de(a,b)}
function Yj(a,b){Kj.call(this,a,b)}
function xk(a,b){Kj.call(this,a,b)}
function ol(a,b){Kj.call(this,a,b)}
function zl(a,b){Kj.call(this,a,b)}
function Kl(a,b){Kj.call(this,a,b)}
function Tl(a,b){Kj.call(this,a,b)}
function fm(a,b){Kj.call(this,a,b)}
function hm(){fm.call(this,'PX',0)}
function jm(){fm.call(this,'EM',2)}
function km(){fm.call(this,'EX',3)}
function lm(){fm.call(this,'PT',4)}
function mm(){fm.call(this,'PC',5)}
function nm(){fm.call(this,'IN',6)}
function om(){fm.call(this,'CM',7)}
function pm(){fm.call(this,'MM',8)}
function Zb(){Eb.call(this,'form')}
function $b(){Eb.call(this,'grid')}
function kc(){Eb.call(this,'main')}
function mc(){Eb.call(this,'math')}
function nc(){Eb.call(this,'menu')}
function gc(){Eb.call(this,'list')}
function uc(){Eb.call(this,'note')}
function ee(){Eb.call(this,'tree')}
function tm(a,b){Kj.call(this,a,b)}
function Fm(a,b){Kj.call(this,a,b)}
function Tp(a,b){Kj.call(this,a,b)}
function XK(a,b){Kj.call(this,a,b)}
function KN(a,b){IN.call(this,a,b)}
function yN(a,b){this.a=a;this.b=b}
function ZN(a,b){this.a=a;this.b=b}
function AI(a,b){this.a=a;this.b=b}
function kP(a,b){this.a=a;this.b=b}
function uQ(a,b){this.b=a;this.a=b}
function KX(a,b){this.a=a;this.b=b}
function MX(a,b){this.a=a;this.b=b}
function OX(a,b){this.a=a;this.b=b}
function SX(a,b){this.a=a;this.b=b}
function UX(a,b){this.a=a;this.b=b}
function pY(a,b){this.a=a;this.b=b}
function sR(a,b){this.c=b;this.d=a}
function bZ(a,b){this.a=a;this.b=b}
function iZ(a,b){this.a=a;this.b=b}
function c0(a,b){this.a=a;this.b=b}
function YQ(a,b){IN.call(this,a,b)}
function p2(a,b){this.a=a;this.b=b}
function m3(a,b){this.b=a;this.a=b}
function b4(a,b){this.a=a;this.b=b}
function a5(a,b){this.b=a;this.a=b}
function J5(a,b){this.a=a;this.b=b}
function L5(a,b){this.a=a;this.b=b}
function _8(a,b){this.a=a;this.b=b}
function DW(a,b){a.Rc=b;JR(a.xc,b)}
function w0(a,b){return Ahb(a.c,b)}
function Fp(a,b){return xhb(a.d,b)}
function BF(a){return AG((jF(),a))}
function Hhb(a){return a.a.c+a.b.c}
function _L(a){Gp(a.a,a.d,a.c,a.b)}
function kN(a){HM(a,false);ah(a.i)}
function MI(a,b){Dj((jF(),a.Wc),b)}
function SY(a,b,c){GZ(QP(a.a),b,c)}
function Erb(a,b,c){a.splice(b,0,c)}
function tdb(a,b){Lf.call(this,a,b)}
function Dqb(a,b){Kj.call(this,a,b)}
function Fb(){Eb.call(this,'alert')}
function be(){Eb.call(this,'timer')}
function ac(){Eb.call(this,'group')}
function Dc(){Eb.call(this,'radio')}
function Dj(b,a){b.selectedIndex=a}
function jjb(a,b){this.a=a;this.b=b}
function srb(a,b){this.a=a;this.b=b}
function Arb(a,b){this.b=a;this.a=b}
function Je(a,b){!!a.Uc&&sp(a.Uc,b)}
function Ej(a){return (Fh(),a)[Htb]}
function Fj(a){return (Fh(),a)[ktb]}
function Gj(a){return (Fh(),a)[Itb]}
function Hj(a){return (Fh(),a)[Jtb]}
function yj(a){return (Fh(),a).type}
function TF(a){SF();return WF(QF,a)}
function LK(a){_e();df.call(this,a)}
function im(){fm.call(this,'PCT',1)}
function Jm(){Fm.call(this,'PRE',2)}
function tb(a){$wnd.clearTimeout(a)}
function kg(a){$wnd.clearTimeout(a)}
function pZ(a){O4(a.e);aJ(a.e,null)}
function n$(a,b){iV(a.W)||gX(a.W,b)}
function H_(a,b,c,d){Bab(a.X,b,c,d)}
function O3(a,b,c,d){a[b][c].type=d}
function Dab(a,b,c){a[b.a]=ncb(c.a)}
function Eab(a,b,c){a[b.a]=ncb(c.a)}
function abb(a,b){Kj.call(this,a,b)}
function wbb(a,b){Kj.call(this,a,b)}
function Fbb(a,b){Kj.call(this,a,b)}
function Nbb(a,b){Kj.call(this,a,b)}
function Sbb(a,b){Kj.call(this,a,b)}
function e4(){N1();Q1.call(this,{})}
function mE(){xF();vE();wE();new u0}
function jG(){if(!_F){fH();_F=true}}
function kG(){if(!eG){gH();eG=true}}
function WT(a){_T(a);XT(a);a.v=true}
function $G(){$G=hE;JG();GG[qub]=NG}
function Dnb(){znb();return new ynb}
function anb(a,b){return xhb(a.a,b)}
function Fnb(a,b){return a.a.get(b)}
function deb(a,b){return a.substr(b)}
function J(a,b){return Uq(a)===Uq(b)}
function Pq(a){return typeof a===gsb}
function Qq(a){return typeof a===hsb}
function Tq(a){return typeof a===isb}
function LD(a){return typeof a===hsb}
function k3(a){return a.b.a+'.'+a.a}
function Uq(a){return a==null?null:a}
function sb(a){$wnd.clearInterval(a)}
function Pob(a,b){Fob.call(this,a,b)}
function Ob(){Eb.call(this,'banner')}
function Wd(){Eb.call(this,'slider')}
function Ud(){Eb.call(this,'search')}
function Yd(){Eb.call(this,'status')}
function Wb(){Eb.call(this,'dialog')}
function Fc(){Eb.call(this,'region')}
function $j(){Yj.call(this,'NONE',0)}
function zk(){xk.call(this,'NONE',0)}
function Vl(){Tl.call(this,'CLIP',0)}
function tl(){ol.call(this,'AUTO',3)}
function Ol(){Kl.call(this,'LEFT',2)}
function up(a){vp.call(this,a,false)}
function pJ(a,b){qJ.call(this,a.a,b)}
function _K(){XK.call(this,'LEFT',2)}
function cK(a){V.call(this);this.a=a}
function Q0(a){this.a=R0(a);this.b=a}
function Q5(a){this.a=a;V.call(this)}
function Jb(a,b,c){th(b,a.a,Ib(a,c))}
function nX(a,b,c){eT(Ahb(a.Ac,b),c)}
function tH(a,b){oH(a,b,(jF(),a.Wc))}
function UH(a,b){oH(a,b,(jF(),a.Wc))}
function af(a,b){(jF(),a.Wc)[rtb]=!b}
function EF(a,b){jF();a.__listener=b}
function Job(a,b){Fob.call(this,a,b)}
function Mob(a,b){Fob.call(this,a,b)}
function Vdb(a,b){return a.indexOf(b)}
function tob(a){return a!=null?Q(a):0}
function khb(a){return !a?null:a._f()}
function Xg(a){return !!Ih((Fh(),a))}
function zcb(a){xcb();return Mrb(a),a}
function drb(a,b,c){Gqb(b,c);return b}
function qeb(a,b){a.a+=''+b;return a}
function reb(a,b){a.a+=''+b;return a}
function seb(a,b){a.a+=''+b;return a}
function rZ(a,b,c,d){a.a=b;qZ(a,c,d)}
function OG(a){(Fh(),Eh).Ud(a);PG(a)}
function yb(a){this.a=a;rb.call(this)}
function Nb(){Eb.call(this,'article')}
function lc(){Eb.call(this,'marquee')}
function pc(){Eb.call(this,'menubar')}
function ce(){Eb.call(this,'toolbar')}
function de(){Eb.call(this,'tooltip')}
function $d(){Eb.call(this,'tablist')}
function bc(){Eb.call(this,'heading')}
function hc(){Eb.call(this,'listbox')}
function ae(){Eb.call(this,'textbox')}
function gh(a){return (Fh(),Eh).Vd(a)}
function ih(a){return (Fh(),Eh).Wd(a)}
function mh(a){return (Fh(),Eh).$d(a)}
function ph(a){return (Fh(),Eh)._d(a)}
function qh(a){return (Fh(),Eh).ee(a)}
function qj(a){return (Fh(),Eh).Pd(a)}
function ej(a){return (Fh(),Eh).Xd(a)}
function fj(a){return (Fh(),Eh).Yd(a)}
function sj(a){return (Fh(),Eh).Qd(a)}
function tj(a){return (Fh(),Eh).Rd(a)}
function uj(a){return (Fh(),Eh).Td(a)}
function kj(a){return Jh((Fh(),Eh),a)}
function lj(a){return Kh((Fh(),Eh),a)}
function Pm(a){return (Fh(),a).target}
function cq(a){return dq(a.l,a.m,a.h)}
function mF(a){jF();return hF.ze(a,0)}
function GK(a){return YL((jF(),a.Wc))}
function HK(a){return ZL((jF(),a.Wc))}
function _e(){_e=hE;$e=(vL(),vL(),uL)}
function fI(){fI=hE;eI=(vL(),vL(),tL)}
function Rk(){xk.call(this,'FLEX',17)}
function Vk(){xk.call(this,'BLOCK',1)}
function fl(){xk.call(this,'TABLE',7)}
function El(){zl.call(this,'FIXED',3)}
function Pl(){Kl.call(this,'RIGHT',3)}
function aL(){XK.call(this,'RIGHT',3)}
function ck(){Yj.call(this,'SOLID',4)}
function wL(a){return (Fh(),Eh).ae(a)}
function hV(a){return YU(a,a.qc,a.rc)}
function LZ(a,b,c){return V_(a.J,b,c)}
function MZ(a,b,c){return W_(a.J,b,c)}
function f$(a,b,c){!!a.S&&dZ(a.S,b,c)}
function s$(a,b,c){!!a.S&&eZ(a.S,b,c)}
function IQ(a,b){Cjb(a.f,b);cL(a.i,b)}
function j$(a){yZ(a,a.b,true);lU(a.W)}
function gK(a){this.a=a;rb.call(this)}
function UO(a){this.a=a;rb.call(this)}
function eP(a){this.a=a;rb.call(this)}
function e0(a){this.a=a;rb.call(this)}
function XR(a){this.a=a;rb.call(this)}
function X3(a){this.a=a;rb.call(this)}
function $X(a){this.a=a;rb.call(this)}
function cY(a){this.a=a;rb.call(this)}
function b5(a){this.a=a;rb.call(this)}
function i5(a){this.a=a;rb.call(this)}
function C5(a){this.a=a;rb.call(this)}
function qnb(a){this.a=Dnb();this.b=a}
function Inb(a){this.a=Dnb();this.b=a}
function kM(a,b){a.o=b;rM(a);a.g=true}
function rf(a){a.i=Xp(pB,esb,74,0,0,1)}
function tjb(a){a.a=Xp(nB,esb,1,0,5,1)}
function Qb(){Eb.call(this,'checkbox')}
function Sb(){Eb.call(this,'combobox')}
function Yb(){Eb.call(this,'document')}
function _b(){Eb.call(this,'gridcell')}
function _d(){Eb.call(this,'tabpanel')}
function ge(){Eb.call(this,'treeitem')}
function fe(){Eb.call(this,'treegrid')}
function Rd(){Eb.call(this,'rowgroup')}
function ic(){Eb.call(this,'listitem')}
function qc(){Eb.call(this,'menuitem')}
function _j(){Yj.call(this,'DOTTED',1)}
function ak(){Yj.call(this,'DASHED',2)}
function Xk(){xk.call(this,'INLINE',2)}
function dl(){xk.call(this,'RUN_IN',6)}
function Bl(){zl.call(this,'STATIC',0)}
function Ml(){Kl.call(this,'CENTER',0)}
function sl(){ol.call(this,'SCROLL',2)}
function Hm(){Fm.call(this,'NORMAL',0)}
function Im(){Fm.call(this,'NOWRAP',1)}
function ZK(){XK.call(this,'CENTER',0)}
function xj(a){return (Fh(),a).touches}
function Cj(a){return (Fh(),a).options}
function eO(a){p1((ng(),mg),new iP(a))}
function hO(a){p1((ng(),mg),new aP(a))}
function NO(a){p1((ng(),mg),new WO(a))}
function jT(a){p1((ng(),mg),new BT(a))}
function lU(a){p1((ng(),mg),new QX(a))}
function C$(a){FV(a.W);HV(a.W);IV(a.W)}
function GV(a){UT(a);$W(a);bX(a);kU(a)}
function dN(a,b){tJ();Pd();Db(cN(a),b)}
function Y1(a,b){a.d=1;o2(new p2(a,b))}
function vg(a,b){a.d=xg(a.d,[b,false])}
function mP(a,b,c){uM.call(this,a,b,c)}
function Ofb(a){qfb();Pfb.call(this,a)}
function Hp(a){this.d=new Zmb;this.c=a}
function t0(){t0=hE;new Xnb;s0=new Ejb}
function CD(a){return a.backingJsObject}
function Zjb(a){return a.a<a.c.a.length}
function Rqb(a,b){return a[a.length]=b}
function Wqb(a,b){return a[a.length]=b}
function wdb(a,b){return a<b?-1:a>b?1:0}
function xrb(a,b,c){return drb(a.a,b,c)}
function erb(a,b,c){urb(a,xrb(b,a.a,c))}
function YY(a,b,c,d){I_(QP(a.a),b,c,d)}
function th(c,a,b){c.setAttribute(a,b)}
function rqb(a,b){if(eqb){return}a.b=b}
function GH(a,b){(jF(),a)['align']=b.a}
function BG(a){if(!zG){a.Be();zG=true}}
function Tmb(a){return a<10?'0'+a:''+a}
function dq(a,b,c){return {l:a,m:b,h:c}}
function nF(a){jF();return Hh((Fh(),a))}
function oF(a){jF();return Ih((Fh(),a))}
function sm(){sm=hE;rm=new vm;qm=new xm}
function Sl(){Sl=hE;Ql=new Vl;Rl=new Wl}
function zH(){zH=hE;xH=new CH;yH=new EH}
function Xb(){Eb.call(this,'directory')}
function Vd(){Eb.call(this,'separator')}
function Sd(){Eb.call(this,'rowheader')}
function Td(){Eb.call(this,'scrollbar')}
function ql(){ol.call(this,'VISIBLE',0)}
function vm(){tm.call(this,'VISIBLE',0)}
function Nl(){Kl.call(this,'JUSTIFY',1)}
function $K(){XK.call(this,'JUSTIFY',1)}
function t3(a,b){s3.call(this,null,a,b)}
function Oq(a,b){return a!=null&&Mq(a,b)}
function OZ(a,b){return anb(a.H,Edb(b))}
function RZ(a,b){return anb(a.I,Edb(b))}
function JU(a){return Zub+a.qc+$ub+a.rc}
function Beb(a){return a.backingJsObject}
function Vg(b,a){return b.appendChild(a)}
function _g(b,a){return b.removeChild(a)}
function nh(b,a){return parseInt(b[a])|0}
function vj(a){return (Fh(),a).keyCode|0}
function Bj(a){(Fh(),a).options.length=0}
function qM(a){hM(a);jM(a);iM(a);a.bf()}
function hM(a){if(a.a){ah(a.a);a.a=null}}
function iM(a){if(a.e){ah(a.e);a.e=null}}
function jM(a){if(a.j){ah(a.j);a.j=null}}
function iO(a){KK(a.j,'');EO(a,'');kO(a)}
function wO(a){KK(a.a,a.b);bf(a.a,false)}
function EO(a,b){a.b=b;KK(a.a,b);KO(a,b)}
function IO(a){a.v=false;a.u=false;HO(a)}
function nS(a){ah(a.B);FF(a.B,-15736909)}
function kT(a){return lT(a,a.u.length-1)}
function JE(c,a,b){return a.replace(c,b)}
function lZ(a,b){return Bhb(CP(a.a).c,b)}
function wZ(a){return (!a.U||!a.F)&&!a.$}
function xZ(a){return (!a.U||!a.G)&&!a.$}
function ybb(a){return !!a&&!a.isEmpty()}
function Yeb(a){Peb();Zeb.call(this,a,0)}
function Pk(){xk.call(this,'INITIAL',16)}
function Cl(){zl.call(this,'RELATIVE',1)}
function Dl(){zl.call(this,'ABSOLUTE',2)}
function Wl(){Tl.call(this,'ELLIPSIS',1)}
function Km(){Fm.call(this,'PRE_LINE',3)}
function Lm(){Fm.call(this,'PRE_WRAP',4)}
function AW(a,b,c){yh(a.yc,b);zh(a.yc,c)}
function pF(a,b,c){jF();hF.Ce(a,tF(b),c)}
function Wdb(a,b,c){return a.indexOf(b,c)}
function Ydb(a,b){return a.lastIndexOf(b)}
function idb(a){return Tdb(hsb,typeof(a))}
function Xdb(a){return Tdb(isb,typeof(a))}
function Urb(a){return a.$H||(a.$H=++Trb)}
function ie(a){return nh((jF(),a.Wc),itb)}
function pe(a,b){(jF(),a.Wc).style[ktb]=b}
function ue(a,b){(jF(),a.Wc).style[ltb]=b}
function Fqb(a,b){this.a=a;ykb();this.b=b}
function Jf(){rf(this);tf(this);this.Gd()}
function wj(a){return !!(Fh(),a).shiftKey}
function Zg(a,b){return (Fh(),Eh).be(a,b)}
function H3(a,b,c){a.f[(new v3(b)).a]=c}
function Krb(a){if(!a){throw CD(new rob)}}
function Qrb(a){if(!a){throw CD(new rdb)}}
function tqb(a){if(eqb){return}a.e=false}
function Ccb(a){xcb();return a?true:false}
function LI(a){(jF(),a.Wc).multiple=false}
function Aj(a){(Fh(),a).stopPropagation()}
function mq(a){return a.l+a.m*msb+a.h*lsb}
function vJ(a){return nh((jF(),a.Wc),Kub)}
function wJ(a){return nh((jF(),a.Wc),itb)}
function iN(a){(jF(),a.Wc).style[Jtb]='1'}
function mN(a){(jF(),a.Wc).style[Jtb]='0'}
function iS(a){(jF(),a.Wc).style[Jtb]='2'}
function yS(a){(jF(),a.Wc).style[Jtb]='2'}
function CK(a){this.c=a;this.a=!!this.c.O}
function kQ(){iQ.call(this);this.a=new tQ}
function bl(){xk.call(this,'LIST_ITEM',5)}
function web(a){rcb.call(this,(Mrb(a),a))}
function xlb(a){dlb.call(this,a);this.a=a}
function Llb(a){tlb.call(this,a);this.a=a}
function QK(){OK();RK.call(this,bj($doc))}
function Jg(a){Fg();return parseInt(a)||-1}
function NT(a,b){return !!a.r&&Bhb(a.r,b)}
function T$(a,b){Ghb(a.n);!!b&&dhb(a.n,b)}
function bnb(a,b){return Ehb(a.a,b)!=null}
function eeb(a,b,c){return a.substr(b,c-b)}
function Jj(a){return a.b!=null?a.b:''+a.c}
function XI(a){if(_I(a)){return}a.i&&bJ(a)}
function UN(a){if(a.b){_L(a.b.a);a.b=null}}
function Yrb(){Yrb=hE;Vrb=new K;Xrb=new K}
function on(){on=hE;nn=new yn($tb,new pn)}
function ao(){ao=hE;_n=new yn(Gtb,new bo)}
function po(){po=hE;oo=new yn(_tb,new qo)}
function Po(){Po=hE;Oo=new yn(cub,new Qo)}
function vp(a,b){this.a=new Hp(b);this.b=a}
function W(a){this.j=new bb(this);this.s=a}
function SV(a){u$(a.a,a.db,a.zb,a.bb,a.xb)}
function FQ(a){if(a.c){IQ(a,a.c);a.c=null}}
function Icb(a){if(a.k!=null){return}Xcb(a)}
function gO(a,b){p1((ng(),mg),new kP(a,b))}
function J_(a,b){p1((ng(),mg),new c0(a,b))}
function x_(a,b){TS(a.W.Dc);!!b&&IT(a.W,b)}
function GQ(a,b){b?dh(a.j,Avb):sh(a.j,Avb)}
function w$(a,b,c){G9(a.X,c,b);pb(a.s,200)}
function cV(a,b,c){return b<=a.ob&&c<=a.Rc}
function udb(a,b){return Oq(b,89)&&b.a==a.a}
function cj(b,a){return b.createTextNode(a)}
function ij(b,a){return b.getElementById(a)}
function jK(b,a){iK();b.__gwt_resolve=kK(a)}
function ZI(a){if(_I(a)){return}!a.i&&bJ(a)}
function oO(a){return !a.v||a.v&&!a.u&&!a.f}
function Z0(b,a){return b.hasOwnProperty(a)}
function q5(a){return !a.B&&(a.B=PP(a)),a.B}
function D$(a){a.d?(a.d=false):JV(a.W,true)}
function tV(a,b){a.Gb=b;a.Hb=zX(b);_4(a.Ib)}
function kqb(a,b){if(eqb){return}vjb(a.a,b)}
function Qqb(a,b){Oqb.call(this,a);this.a=b}
function Vqb(a,b){Oqb.call(this,a);this.a=b}
function crb(a,b){Oqb.call(this,a);this.a=b}
function Lmb(a,b){b.$modCount=a.$modCount}
function frb(a,b){return a.a.eg(new irb(b))}
function krb(a,b){return a.a.eg(new nrb(b))}
function xb(a,b){return $wnd.setTimeout(a,b)}
function Sq(a,b){return a&&b&&a instanceof b}
function bg(a,b,c){return a.apply(b,c);var d}
function Acb(a,b){xcb();return a==b?0:a?1:-1}
function xf(a,b){a.backingJsObject=b;uf(a,b)}
function ug(a,b){a.b=xg(a.b,[b,false]);sg(a)}
function LE(a){seb(a.a,YE('Fill'));return a}
function zF(a){return jF(),AG((Fh(),a).type)}
function ZH(){_H.call(this,(jF(),Oi($doc)))}
function Nk(){xk.call(this,'TABLE_ROW',15)}
function Jk(){xk.call(this,'TABLE_CELL',13)}
function Tk(){xk.call(this,'INLINE_FLEX',18)}
function Zk(){xk.call(this,'INLINE_BLOCK',3)}
function _k(){xk.call(this,'INLINE_TABLE',4)}
function AK(){rK.call(this,(qK(),$doc.body))}
function CP(a){!a.J&&(a.J=a.lf());return a.J}
function QP(a){!a.B&&(a.B=a.rf());return a.B}
function OR(a){a.k=0;a.n=0;ob(a.M);a.N=false}
function MR(a){if(!a.N){a.N=true;qb(a.M,50)}}
function H4(a,b){dh(b,Zxb);a.b&&_mb(a.a.p,b)}
function OI(a,b){return VI(a,b,a.b.a.length)}
function hdb(a,b){return Mrb(a),Uq(a)===Uq(b)}
function Tdb(a,b){return Mrb(a),Uq(a)===Uq(b)}
function xV(a){return Tdb(a,Wub)||Tdb(a,Xub)}
function US(a){return String.fromCharCode(a)}
function wb(a,b){return $wnd.setInterval(a,b)}
function Zdb(a,b,c){return a.lastIndexOf(b,c)}
function Vib(a,b){return a.a.containsValue(b)}
function Gh(a,b){return a.getAttribute(b)||''}
function Yg(c,a,b){return c.insertBefore(a,b)}
function wnb(a,b){var c;c=a[Nyb];c.call(a,b)}
function xnb(a,b){var c;c=a[Nyb];c.call(a,b)}
function Pmb(a){this.a=new $wnd.Date(XD(a))}
function _m(){_m=hE;$m=new yn('blur',new an)}
function gn(){gn=hE;fn=new yn('click',new hn)}
function An(){An=hE;zn=new yn('focus',new Bn)}
function Vn(){Vn=hE;Un=new yn('keyup',new Wn)}
function u0(){t0();new Zmb;new Zmb;new Zmb}
function SF(){SF=hE;new ZF;QF=new XF;RF=UF()}
function cp(a){var b;if(_o){b=new ap;a.sd(b)}}
function ip(a){var b;if(fp){b=new gp;sp(a,b)}}
function rp(a,b,c){return new Ip(yp(a.a,b,c))}
function rj(a){return (Fh(),a).changedTouches}
function Nm(a){return $h((Fh(),a).clientX||0)}
function Om(a){return $h((Fh(),a).clientY||0)}
function IH(a,b){a.style['verticalAlign']=b.a}
function PM(a,b){(jF(),a.Wc).style[Jtb]=b+''}
function VW(a,b){YW(a,a.db,a.zb,1,a.ob,a.d,b)}
function w3(a,b){this.a=a;this.b=x3(this.a,b)}
function iY(a,b,c){this.a=a;this.b=b;this.c=c}
function a0(a,b,c){this.a=a;this.b=b;this.c=c}
function d9(a,b,c){this.a=a;this.b=b;this.c=c}
function g0(a,b,c){this.a=a;this.c=b;this.b=c}
function F3(a,b,c,d){O3(a.c,(Icb(b),b.k),c,d)}
function LQ(a,b){b!=null?LM(a.e,b):LM(a.e,'')}
function MQ(a,b){b!=null?OM(a.e,b):OM(a.e,'')}
function sqb(a,b){if(eqb){return}!!b&&(a.d=b)}
function Irb(a,b){if(!a){throw CD(new qdb(b))}}
function kbb(a,b){a.b=b;a.c=0;a.d=a.b+'.'+a.c}
function eS(a,b,c,d,e){a.i=b;a.f=c;a.g=d;a.e=e}
function sS(a,b,c,d,e){a.t=b;a.r=c;a.s=d;a.q=e}
function PW(a){a.X=0;a.Y=0;ob(a.lc);a.mc=false}
function sV(a){!a.o&&a.k!=-1&&a.n!=-1&&_4(a.p)}
function fb(a){$wnd.cancelAnimationFrame(a.id)}
function v3(a){w3.call(this,(Icb(a),a.k),null)}
function Lk(){xk.call(this,'TABLE_COLUMN',14)}
function hl(){xk.call(this,'TABLE_CAPTION',8)}
function VH(){qH.call(this);ne(this,Pi($doc))}
function $bb(a,b,c){Kj.call(this,a,b);this.a=c}
function Pnb(a,b,c){this.a=a;this.b=b;this.c=c}
function aob(a,b,c){this.d=a;this.b=c;this.a=b}
function $ob(a){this.b=(Mrb(a),a);this.a=16464}
function O4(a){(vL(),vL(),tL).Xe((jF(),a.Wc))}
function xX(a,b){YW(a,1,a.Rc,a.bb,a.xb,a.Pc,b)}
function KK(a,b){(jF(),a.Wc)[Rub]=b!=null?b:''}
function vjb(a,b){a.a[a.a.length]=b;return true}
function lcb(a){if(a==null){return 0}return +a}
function ycb(a){xcb();return Tdb(gsb,typeof(a))}
function qU(a,b,c){return Ahb(a.e,Zub+b+$ub+c)}
function SD(a,b){return GD(wq(LD(a)?WD(a):a,b))}
function TD(a,b){return GD(xq(LD(a)?WD(a):a,b))}
function UD(a,b){return GD(yq(LD(a)?WD(a):a,b))}
function xp(a,b){!a.a&&(a.a=new Ejb);vjb(a.a,b)}
function GY(a,b){c_((!a.B&&(a.B=new P_),a.B),b)}
function LW(a){if(!a.mc){a.mc=true;qb(a.lc,50)}}
function vV(a){_4(a.kc);oV(a);lX(a);FV(a);IV(a)}
function _eb(a,b){this.e=b;Veb(this,(Mrb(a),a))}
function mb(){this.a=new Ejb;this.b=new yb(this)}
function lob(){lob=hE;job=new mob;kob=new oob}
function Ao(){Ao=hE;zo=new yn('touchend',new Bo)}
function Hn(){Hn=hE;Gn=new yn('keydown',new In)}
function On(){On=hE;Nn=new yn('keypress',new Pn)}
function Gdb(){Gdb=hE;Fdb=Xp(iB,esb,89,256,0,1)}
function Frb(a,b,c){Drb(c,0,a,b,c.length,false)}
function zp(a,b,c,d){var e;e=Cp(a,b,c);e.add(d)}
function op(a){var b;if(lp){b=new mp;sp(a.a,b)}}
function CZ(a,b){eR(a.R);iO(a.u);BZ(a);TT(a.W,b)}
function R1(a,b){N1();O1(this);this.c=a;this.b=b}
function OT(a,b){return !!a.tb&&a.tb.contains(b)}
function ub(a,b){return asb(function(){a.hd(b)})}
function d1(a,b){return a[0]!==b[0]||a[2]!==b[2]}
function e1(a,b){return a[1]!==b[1]||a[3]!==b[3]}
function Zp(a){return Array.isArray(a)&&a.kg===lE}
function gW(a){cW(a,a.xc.e,a.xc.f,a.xc.K,a.xc.L)}
function H0(a){if(!a.a.s){return -1}return a.a.a}
function YD(a){if(LD(a)){return a|0}return Bq(a)}
function ZD(a){if(LD(a)){return ''+a}return Cq(a)}
function yjb(a,b){Lrb(b,a.a.length);return a.a[b]}
function kkb(a,b){Jrb(b,a.length);ikb(a,0,b,null)}
function Qcb(a,b){var c;c=Ncb(a,b);c.f=2;return c}
function dO(a){var b;a.c=(b=IK(a.j),b==null?'':b)}
function _4(a){!a.c&&(a.c=new b5(a));pb(a.c,a.b)}
function OP(a){G1(he(a.tf()),true);!!a.p&&ob(a.p)}
function PV(a,b){var c;c=Fhb(a.Ac,b);!!c&&KV(a,c)}
function WW(a,b){YW(a,a.db,a.zb,a.bb,a.xb,a.jc,b)}
function f9(a,b){i9(a.a,$p(Vp(nB,1),esb,1,5,[b]))}
function g9(a,b){i9(a.b,$p(Vp(nB,1),esb,1,5,[b]))}
function h9(a,b){i9(a.c,$p(Vp(nB,1),esb,1,5,[b]))}
function x9(a,b){i9(a.B,$p(Vp(nB,1),esb,1,5,[b]))}
function obb(a,b){this.a=a;this.b=b;this.c='poll'}
function CQ(){this.qb=new Zmb;this.gb=(Ebb(),Cbb)}
function io(){io=hE;ho=new yn('mousedown',new jo)}
function Io(){Io=hE;Ho=new yn('touchmove',new Jo)}
function kO(a){a.k=-1;a.n=-1;a.o=-1;a.p=-1;jO(a)}
function kh(b,a){return b.getElementsByTagName(a)}
function Si(a){return (Fh(),a).createElement(_sb)}
function Ui(a){return (Fh(),a).createElement(dtb)}
function zbb(a){return a.jb==null||a.jb.length==0}
function Abb(a){return a.nb==null||a.nb.length==0}
function Hmb(a,b){return Mrb(a),Bcb(a,(Mrb(b),b))}
function Ypb(a,b){Dhb(a.a,(hqb(),eqb)?null:b.c,b)}
function ujb(a,b,c){Orb(b,a.a.length);Erb(a.a,b,c)}
function xg(a,b){!a&&(a=[]);a[a.length]=b;return a}
function nE(a){if(a.b){return a.b}return rpb(),ipb}
function gg(){ag();if(Yf){return}Yf=true;hg(false)}
function oJ(a){re(a,xe((jF(),a.Wc))+'-'+Iub,false)}
function Zi(a){return (Fh(),a).createElement('td')}
function $i(a){return (Fh(),a).createElement('tr')}
function Nq(a){return !Array.isArray(a)&&a.kg===lE}
function fV(a){return !Tdb((wk(),jtb),Ej(a.style))}
function dV(a,b,c){return b>a.ob&&b<=a.xb&&c<=a.Rc}
function _U(a,b,c){return c>a.Rc&&c<=a.zb&&b<=a.ob}
function NZ(a,b){return a.N.length>=b?a.N[b-1]:a.r}
function M0(){C0();return $wnd.navigator.userAgent}
function sK(a){qK();try{a.wd()}finally{bnb(pK,a)}}
function wI(a){tI();vI.call(this,(bF(),new ZE(a)))}
function HE(a){FE.call(this,new EE(null));this.a=a}
function Hk(){xk.call(this,'TABLE_ROW_GROUP',12)}
function Bk(){xk.call(this,'TABLE_COLUMN_GROUP',9)}
function kL(a){this.b=a;this.a=Xp(_v,esb,13,4,0,1)}
function xab(a,b){i9(a.R,$p(Vp(nB,1),esb,1,5,[b]))}
function Ehb(a,b){return Tq(b)?Fhb(a,b):pnb(a.a,b)}
function Enb(a,b){return !(a.a.get(b)===undefined)}
function g4(a,b){g1(b,he(q5(a.c)));BP(a.a,LA).lg()}
function PQ(a,b,c){a.n=c;a.d=b;MM(a.e,b);zQ(a.g,b)}
function u$(a,b,c,d,e){B9(a.X,b,d,c,e);pb(a.s,200)}
function H$(a,b,c,d,e,f,g,h){oR(a.R,b,c,d,e,f,g,h)}
function Gjb(a){tjb(this);Frb(this.a,0,a.toArray())}
function If(a){rf(this);this.f=a;tf(this);this.Gd()}
function Fob(a,b){this.d=a;this.c=(b&64)!=0?b|usb:b}
function Z1(a){var b;a.d=2;return b=a.a,a.a=null,b}
function AD(){if(vD==2){return new JL}return new QL}
function zD(){if(vD==2){return new GL}return new DL}
function yD(){if(vD==2){return new hH}return new jH}
function xD(){if(vD==2){return new dH}return new aH}
function wD(){if(vD==2){return new Ki}return new qi}
function Nrb(a,b){if(a==null){throw CD(new Kdb(b))}}
function pq(a,b){return dq(a.l&b.l,a.m&b.m,a.h&b.h)}
function vq(a,b){return dq(a.l|b.l,a.m|b.m,a.h|b.h)}
function Dq(a,b){return dq(a.l^b.l,a.m^b.m,a.h^b.h)}
function Oi(a){return (Fh(),a).createElement('div')}
function Pi(a){return (Fh(),a).createElement('div')}
function Ri(a){return (Fh(),a).createElement('img')}
function K1(){K1=hE;J1=xqb('spreadsheet RpcProxy')}
function qK(){qK=hE;nK=new wK;oK=new Zmb;pK=new cnb}
function vL(){vL=hE;tL=zD();uL=Oq(tL,146)?new xL:tL}
function EQ(a,b){return Ie(a.e,b,_o?_o:(_o=new xn))}
function N0(a,b){var c,d;d=P0(a,b);c=S0(d);return c}
function yE(a){a.a=xqb('');tqb(a.a);AE(a.a);zE(a.a)}
function HV(a){a.k!=-1&&a.n!=-1&&a.j!=null&&nN(a.q)}
function sF(a){jF();!!iF&&a==iF&&(iF=null);hF.De(a)}
function CF(a){jF();!!iF&&a==iF&&(iF=null);hF.De(a)}
function $I(a){if(_I(a)){return}a.i?undefined:cJ(a)}
function YI(a){if(_I(a)){return}a.i?cJ(a):undefined}
function mkb(a){return new crb(null,lkb(a,a.length))}
function Hdb(a,b){return FD(a,b)<0?-1:FD(a,b)>0?1:0}
function jh(a){return (Fh(),a).getAttribute(utb)||''}
function ke(a){return (jF(),a.Wc).style.display!=jtb}
function Wi(a){return (Fh(),a).createElement('span')}
function uq(a){return dq(~a.l&gub,~a.m&gub,~a.h&nsb)}
function oh(b,a){return b[a]==null?null:String(b[a])}
function zeb(){zeb=hE;yeb=new FE(null);new FE(null)}
function BJ(a,b){a.w=b;zJ(a);b.length==0&&(a.w=null)}
function FJ(a,b){a.A=b;zJ(a);b.length==0&&(a.A=null)}
function kb(a,b){Cjb(a.a,b);a.a.a.length==0&&ob(a.b)}
function dT(a,b){(jF(),a.Wc).style[ltb]=b+(em(),Lub)}
function HP(a,b){if(a.G==b){return}a.G=b;ykb();Jkb()}
function _jb(a){Qrb(a.b!=-1);Bjb(a.c,a.a=a.b);a.b=-1}
function PZ(a,b){return !!a.v&&zjb(a.v,Edb(b),0)!=-1}
function QZ(a,b){return !!a.w&&zjb(a.w,Edb(b),0)!=-1}
function I0(a){return a.a.t==5&&(a.a.u==3||a.a.u==4)}
function B4(a,b){a.a.e=a.c+(a.b-a.c)*b;v4(a.a,a.a.e)}
function zO(a,b){b.length==0?KK(a.j,b):KK(a.j,'='+b)}
function xhb(a,b){return Tq(b)?Bhb(a,b):!!nnb(a.a,b)}
function Ghb(a){a.a=new qnb(a);a.b=new Inb(a);Mmb(a)}
function dnb(a){this.a=new $mb(a.size());Mgb(this,a)}
function lkb(a,b){return Eob(b,a.length),new Wob(a,b)}
function Crb(a,b){var c;c=a.slice(0,b);return _p(c,a)}
function uZ(a,b,c,d){var e;e=new fT(c,d);HT(a.W,b,e)}
function E3(a,b,c,d){a.b[k3(new m3(new v3(b),c))]=d}
function G3(a,b,c,d){a.e[k3(new m3(new v3(b),c))]=d}
function o2(a){k2(a);d2((!$1&&($1=new i2),$1),a.a.c)}
function ig(a){$wnd.setTimeout(function(){throw a},0)}
function JJ(){IJ.call(this);this.u=true;this.v=true}
function kI(){jI.call(this);SH(this.a,'\u25BC',true)}
function Dk(){xk.call(this,'TABLE_HEADER_GROUP',10)}
function Fk(){xk.call(this,'TABLE_FOOTER_GROUP',11)}
function eN(){tJ();IJ.call(this);FM(this);PM(this,BM)}
function fN(){tJ();JJ.call(this);FM(this);PM(this,BM)}
function Lfb(a,b,c){qfb();this.e=a;this.d=b;this.a=c}
function aT(a,b){(jF(),a.Wc).style[ktb]=b+(em(),'pt')}
function nZ(a){!Tdb(Vtb,Gj((jF(),a.Wc).style))&&QM(a)}
function yJ(a){return !Tdb(Vtb,Gj((jF(),a.Wc).style))}
function Xi(a){return (Fh(),a).createElement('style')}
function _i(a){return (Fh(),a).createElement('table')}
function Yi(a){return (Fh(),a).createElement('tbody')}
function Ti(a){return (Fh(),Eh).Nd(a,Gtb,false,false)}
function hG(a,b){return rp((!aG&&(aG=new yG),aG),a,b)}
function Ni(a){return (Fh(),a).createElement('canvas')}
function Qi(a){return (Fh(),a).createElement('iframe')}
function Vi(a){return (Fh(),a).createElement('select')}
function LH(a){if(a.bb){return a.bb.td()}return false}
function EP(a){if(!a.nf().ob){return false}return true}
function Mrb(a){if(a==null){throw CD(new Idb)}return a}
function Gab(a){var b;b=[];qob(a,new Hab(b));return b}
function Ocb(a,b,c){var d;d=Ncb(a,b);_cb(c,d);return d}
function Ncb(a,b){var c;c=new Lcb;c.g=a;c.d=b;return c}
function _mb(a,b){var c;c=Chb(a.a,b,a);return c==null}
function HW(a,b,c){var d,e;d=b+10;e=c-25;NM(a.Wb,d,e)}
function QT(a){var b;b=KT(a);dU(a,new Ejb,a.bb,a.xb,b)}
function TZ(a){a.D?CZ(a,false):(a.D=true);VZ(a,a.a-1)}
function HO(a){a.f=false;a.e=null;a.q=-1;a.s=-1;kO(a)}
function oeb(a,b){a.a+=String.fromCharCode(b);return a}
function D3(a,b,c){a.b[k3(new m3(new v3(b),'!new'))]=c}
function GI(a,b){FI(a,b);return HI(Cj((jF(),a.Wc))[b])}
function q9(a,b){i9(a.p,$p(Vp(nB,1),esb,1,5,[Edb(b)]))}
function w9(a,b){i9(a.A,$p(Vp(nB,1),esb,1,5,[Edb(b)]))}
function A9(a,b){i9(a.D,$p(Vp(nB,1),esb,1,5,[Edb(b)]))}
function D9(a,b){i9(a.L,$p(Vp(nB,1),esb,1,5,[Edb(b)]))}
function P9(a,b){i9(a.Q,$p(Vp(nB,1),esb,1,5,[Gab(b)]))}
function Ul(){Sl();return $p(Vp(Dt,1),esb,93,0,[Ql,Rl])}
function um(){sm();return $p(Vp(Qt,1),esb,94,0,[rm,qm])}
function WF(a,b){return rp(a.a,(!lp&&(lp=new xn),lp),b)}
function sob(a,b){return Uq(a)===Uq(b)||a!=null&&M(a,b)}
function JZ(a,b){return b>0&&a.g.length>=b?a.g[b-1]:a.q}
function iV(a){return !!a.T&&Bhb(a.T,Zub+a.qc+$ub+a.rc)}
function X0(b,a){return Object.hasOwnProperty.call(b,a)}
function b2(a){var b;b=a.a['__eager'];b.d==0&&Y1(b,a.c)}
function j2(a){this.a=new Ejb;this.c='__eager';this.b=a}
function Xnb(){this.a=new iob;this.c=new iob;Wnb(this)}
function gI(a){oe(this,(jF(),a));this.a=new TH(this.Wc)}
function rK(a){qH.call(this);oe(this,(jF(),a));Ke(this)}
function Rdb(a,b){Srb(b,a.length);return a.charCodeAt(b)}
function Qob(a,b){Mrb(b);while(a.c<a.d){Vob(a,b,a.c++)}}
function zhb(a,b){return Tq(b)?Ahb(a,b):khb(nnb(a.a,b))}
function Ymb(a,b){return Uq(a)===Uq(b)||a!=null&&M(a,b)}
function ieb(a){return String.fromCharCode.apply(null,a)}
function aj(a){return (Fh(),a).createElement('textarea')}
function bf(a,b){b?$e.Xe((jF(),a.Wc)):$e.Ve((jF(),a.Wc))}
function Mqb(a){if(!a.b){Nqb(a);a.c=true}else{Mqb(a.b)}}
function xJ(a){if(!a.M){return}bK(a.L,false,false);cp(a)}
function gG(a){fG();jG();return hG(_o?_o:(_o=new xn),a)}
function y4(a,b){j4();var c;c=new K4;I4(c,a,b);return c}
function Rcb(a,b){var c;c=Ncb('',a);c.j=b;c.f=1;return c}
function p5(){var a;a=null;a+=(nbb(),'?v='+mbb);return a}
function qE(){oE(this,new DE(true));pE(this,(rpb(),ipb))}
function K4(){this.b=K0((C0(),!B0&&(B0=new L0),C0(),B0))}
function VY(a,b,c,d,e,f,g,h){H$(QP(a.a),b,c,d,e,f,g,h)}
function I$(a,b,c,d,e,f,g,h,i){pR(a.R,b,c,d,e,f,g,h,i)}
function Chb(a,b,c){return Tq(b)?Dhb(a,b,c):onb(a.a,b,c)}
function gcb(a,b,c){ecb(this);this.c=a;this.b=b;this.a=c}
function GX(a,b,c,d){this.a=a;this.d=b;this.b=c;this.c=d}
function IX(a,b,c,d){this.a=a;this.d=b;this.b=c;this.c=d}
function dM(a,b,c,d){this.a=a;this.d=b;this.c=c;this.b=d}
function yM(a,b,c,d){this.d=a;this.a=b;this.c=c;this.b=d}
function E5(a,b,c,d){this.a=a;this.b=b;this.c=c;this.d=d}
function Wob(a,b){this.c=0;this.d=b;this.b=17488;this.a=a}
function Oqb(a){if(!a){this.b=null;new Ejb}else{this.b=a}}
function aM(a,b,c){this.a=a;this.d=b;this.c=null;this.b=c}
function bM(a,b,c){this.a=a;this.d=b;this.c=null;this.b=c}
function kV(a,b){return b==a.c||b==a.Mc||b==a.Oc||b==a.yc}
function Cfb(a){var b;b=a.a[0];return a.e>0||b==tsb?b:-b}
function ah(a){var b;b=Ih((Fh(),a));!!b&&b.removeChild(a)}
function J6(a,b,c){x0(a.e.C,c,Gh((Fh(),b),'resource-'+c))}
function Db(a,b){Jb((Cc(),Bc),a,$p(Vp(tB,1),wsb,2,6,[b]))}
function $qb(a,b){Nqb(a);return new crb(a,new qrb(b,a.a))}
function _qb(a,b){Nqb(a);return new Qqb(a,new grb(b,a.a))}
function arb(a,b){Nqb(a);return new Vqb(a,new lrb(b,a.a))}
function Fhb(a,b){return b==null?pnb(a.a,null):Hnb(a.b,b)}
function $F(a){return $wnd.decodeURI(a.replace('%23','#'))}
function sE(){oE(this,new DE(false));pE(this,(rpb(),ipb))}
function zE(a){var b,c;b=new qE;kqb(a,b);c=new sE;kqb(a,c)}
function QG(a){var b;b=(Fh(),Eh).Rd(a);b[Bub]=a.type;PG(a)}
function w1(a){t1();var b,c;b=E1(a);c=F1(a);return v1(b,c)}
function kZ(a,b){Ahb(CP(a.a).c,b);ykb();Jkb();return null}
function KS(a,b){if(!a.a.f){rW(a.b,true);_Z(a.b.a)}Aj(b.a)}
function n1(a){if(!a){return ssb}return o1(a)+' ('+a.F+')'}
function J0(a){if(a.a.b==8){return a.a.c>=0}return a.a.b>8}
function Wnb(a){a.a.a=a.c;a.c.b=a.a;a.a.b=a.c.a=null;a.b=0}
function Ndb(a,b,c){this.a=fsb;this.d=a;this.b=b;this.c=c}
function C4(a,b,c){this.a=a;this.c=b;this.b=c;V.call(this)}
function TY(a,b,c,d,e,f,g,h,i){I$(QP(a.a),b,c,d,e,f,g,h,i)}
function oc(a,b){Jb((Cc(),Ac),a,$p(Vp(Dr,1),esb,173,0,[b]))}
function ED(a,b){return GD(pq(LD(a)?WD(a):a,LD(b)?WD(b):b))}
function RD(a,b){return GD(vq(LD(a)?WD(a):a,LD(b)?WD(b):b))}
function $D(a,b){return GD(Dq(LD(a)?WD(a):a,LD(b)?WD(b):b))}
function Up(){Sp();return $p(Vp(Bu,1),esb,108,0,[Rp,Qp,Pp])}
function VF(){SF();var a;a=UF();if(!Tdb(a,RF)){RF=a;op(QF)}}
function Fg(){Fg=hE;var a,b;b=!Lg();a=new Tg;Eg=b?new Mg:a}
function ykb(){ykb=hE;vkb=new Ckb;wkb=new Tkb;xkb=new _kb}
function yl(){yl=hE;xl=new Bl;wl=new Cl;ul=new Dl;vl=new El}
function nl(){nl=hE;ml=new ql;kl=new rl;ll=new sl;jl=new tl}
function Jl(){Jl=hE;Fl=new Ml;Gl=new Nl;Hl=new Ol;Il=new Pl}
function WK(){WK=hE;SK=new ZK;TK=new $K;UK=new _K;VK=new aL}
function j4(){j4=hE;h4=I0((C0(),!B0&&(B0=new L0),C0(),B0))}
function _rb(){if(Wrb==256){Vrb=Xrb;Xrb=new K;Wrb=0}++Wrb}
function _M(a){if(a.r){m1(a.r);return a.q}else{return null}}
function HN(a,b){if(a.b){a.jf(0);a.f||a.gf(b)}else{a.jf(b)}}
function Zob(a){if(!a.d){a.d=new akb(a.b);a.c=a.b.a.length}}
function oqb(a,b){if(!dqb){return}qqb(a,(rpb(),npb),b,null)}
function uqb(a,b){if(!fqb){return}qqb(a,(rpb(),ppb),b,null)}
function vqb(a,b){if(!gqb){return}qqb(a,(rpb(),qpb),b,null)}
function Bhb(a,b){return b==null?!!nnb(a.a,null):Enb(a.b,b)}
function Bkb(a){ykb();return Oq(a,178)?new Emb(a):new xlb(a)}
function tK(){qK();try{BH(pK,nK)}finally{Ghb(pK.a);Ghb(oK)}}
function $L(b,c,d){try{b.setSelectionRange(c,c+d)}catch(a){}}
function FO(b,c,d){try{b.setSelectionRange(c,c+d)}catch(a){}}
function s3(a,b,c){this.b=b;this.c=Bkb(new okb(c));this.a=a}
function uH(a,b){var c;c=pH(a,b);c&&vH((jF(),b.Wc));return c}
function S5(a,b){var c;c=a.Hf();Object.assign(c,b);return c}
function yf(a,b){var c;c=Jcb(a.ig);return b==null?c:c+': '+b}
function kcb(a,b){if(a==null){return b==null}return Tdb(a,b)}
function zab(a,b,c){i9(a.T,$p(Vp(nB,1),esb,1,5,[Edb(b),c]))}
function RN(a){a.a.C&&i9(a.a.a.X.n,$p(Vp(nB,1),esb,1,5,[]))}
function Tbb(){Rbb();return $p(Vp(IA,1),esb,141,0,[Pbb,Qbb])}
function bV(a,b,c){return b>=a.bb&&b<=a.xb&&c>=a.db&&c<=a.zb}
function ehb(a,b){return b===a?'(this Map)':b==null?ssb:kE(b)}
function Ie(a,b,c){return rp(!a.Uc?(a.Uc=new up(a)):a.Uc,c,b)}
function Gp(a,b,c,d){a.b>0?xp(a,new dM(a,b,c,d)):Bp(a,b,c,d)}
function P5(a,b,c,d){this.b=a;this.c=b;O5(this,c);N5(this,d)}
function $g(a){while(a.lastChild){a.removeChild(a.lastChild)}}
function hh(a){return (Fh(),Eh).Vd(a)+((a.offsetWidth||0)|0)}
function fh(a){return (Fh(),Eh).Wd(a)+((a.offsetHeight||0)|0)}
function Vq(a){return Math.max(Math.min(a,jsb),-2147483648)|0}
function pl(){nl();return $p(Vp(qt,1),esb,62,0,[ml,kl,ll,jl])}
function Al(){yl();return $p(Vp(vt,1),esb,63,0,[xl,wl,ul,vl])}
function Ll(){Jl();return $p(Vp(At,1),esb,64,0,[Fl,Gl,Hl,Il])}
function YK(){WK();return $p(Vp(Wv,1),esb,65,0,[SK,TK,UK,VK])}
function YL(b){try{return b.selectionStart}catch(a){return 0}}
function iE(a){function b(){}
;b.prototype=a||{};return new b}
function Vcb(a){if(a.Pf()){return null}var b=a.j;return eE[b]}
function AV(a,b){if(b){Ghb(b);!!a&&dhb(b,a)}else{b=a}return b}
function uW(a,b){TW(a,nU(a),b);iX(a,b);a.tb=zV(b,a.tb);UW(a)}
function UT(a){TS(a.Cc);if(a.pb){TS(a.pb);ah(a.pb);a.pb=null}}
function v0(a){if(!a.b){a.b=new sZ;MM(a.b,QP(a.d))}return a.b}
function rT(a,b){if(!a)return;(Fh(),Eh).ce(a,b);a.title=b||''}
function Eob(a,b){if(0>a||a>b){throw CD(new wcb(Fsb+a+Gsb+b))}}
function Zqb(a,b){var c;return brb(a,new Ejb,(c=new yrb(b),c))}
function mmb(a,b){var c;for(c=0;c<b;++c){a[c]=new xmb(a[c])}}
function Yo(a,b){var c;if(Vo){c=new Wo(b);!!a.Uc&&sp(a.Uc,c)}}
function Orb(a,b){if(a<0||a>b){throw CD(new vcb(Hsb+a+Isb+b))}}
function Mmb(a){var b,c;c=a;b=c.$modCount|0;c.$modCount=b+1}
function RH(a){var b;b=a.c?lh(a.a):a.a;return (Fh(),Eh).$d(b)}
function yO(a){a.t.$?pb(new eP(a),100):p1((ng(),mg),new gP(a))}
function IW(a,b,c,d){a.Yb=false;p1((ng(),mg),new IX(a,b,c,d))}
function KW(a,b,c,d){a.Yb=false;p1((ng(),mg),new GX(a,b,c,d))}
function oH(a,b,c){Ne(b);fL(a.o,b);jF();Vg(c,tF(b.Wc));Pe(b,a)}
function Lf(a,b){rf(this);this.e=b;this.f=a;tf(this);this.Gd()}
function aN(){JJ.call(this);this.I=false;FM(this);PM(this,BM)}
function vH(a){a.style[Dub]='';a.style[Eub]='';a.style[Btb]=''}
function tF(a){jF();return a.__gwt_resolve?a.__gwt_resolve():a}
function AP(a,b){if(!a.H){return ykb(),ykb(),vkb}return a.H[b]}
function Thb(a,b){if(Oq(b,100)){return bhb(a.a,b)}return false}
function Ahb(a,b){return b==null?khb(nnb(a.a,null)):Fnb(a.b,b)}
function K$(a,b){if(!a.f){a.f=b}else{Ghb(a.f);!!b&&dhb(a.f,b)}}
function S$(a,b){if(!a.k){a.k=b}else{Ghb(a.k);!!b&&dhb(a.k,b)}}
function s_(a,b){if(!a.O){a.O=b}else{Ghb(a.O);!!b&&dhb(a.O,b)}}
function Lrb(a,b){if(a<0||a>=b){throw CD(new vcb(Hsb+a+Isb+b))}}
function Srb(a,b){if(a<0||a>=b){throw CD(new xeb(Hsb+a+Isb+b))}}
function Tcb(a,b){var c=a.a=a.a||[];return c[b]||(c[b]=a.Kf(b))}
function Tnb(a,b){Mrb(b);while(a.a<a.c.a.length){zrb(b,$jb(a))}}
function u4(a,b){a.a=b;if(h4){b+=a.n;v4(a,-b)}else{v4(a,-a.a)}}
function lM(a,b,c,d){if(!Tdb(a.b,c)){a.b=c;a.bf()}a.f=d;kM(a,b)}
function j9(a,b,c){i9(a.e,$p(Vp(nB,1),esb,1,5,[Edb(b),Edb(c)]))}
function p9(a,b,c){i9(a.o,$p(Vp(nB,1),esb,1,5,[Edb(b),Edb(c)]))}
function s9(a,b,c){i9(a.r,$p(Vp(nB,1),esb,1,5,[Edb(b),Edb(c)]))}
function t9(a,b,c){i9(a.s,$p(Vp(nB,1),esb,1,5,[Edb(b),Edb(c)]))}
function v9(a,b,c){i9(a.w,$p(Vp(nB,1),esb,1,5,[Edb(b),Edb(c)]))}
function y9(a,b,c){i9(a.H,$p(Vp(nB,1),esb,1,5,[Edb(b),Edb(c)]))}
function z9(a,b,c){i9(a.I,$p(Vp(nB,1),esb,1,5,[Edb(b),Edb(c)]))}
function C9(a,b,c){i9(a.K,$p(Vp(nB,1),esb,1,5,[Edb(b),Edb(c)]))}
function E9(a,b,c){i9(a.M,$p(Vp(nB,1),esb,1,5,[Edb(b),Edb(c)]))}
function G9(a,b,c){i9(a.O,$p(Vp(nB,1),esb,1,5,[Edb(b),Edb(c)]))}
function Eqb(){Cqb();return $p(Vp(aD,1),esb,84,0,[zqb,Aqb,Bqb])}
function Zj(){Xj();return $p(Vp(Ts,1),esb,53,0,[Vj,Tj,Sj,Uj,Wj])}
function Gm(){Em();return $p(Vp(Wt,1),esb,54,0,[zm,Am,Bm,Cm,Dm])}
function Dhb(a,b,c){return b==null?onb(a.a,null,c):Gnb(a.b,b,c)}
function $db(a){return (new RegExp('^([^A-z0-9:!])$')).test(a)}
function M3(a){return (!$1&&($1=new i2),$1).c.d[(new v3(a)).b]}
function GU(a,b){return QZ(a.a,b)?0:b>=a.W.length?wU(a):a.W[b-1]}
function dZ(a,b,c){if(CP(a.a).u){a.a.f=b;a.a.e=null;q9(a.a.g,c)}}
function eZ(a,b,c){if(CP(a.a).u){a.a.f=b;a.a.e=null;D9(a.a.g,c)}}
function eH(a,b){for(var c in a){a.hasOwnProperty(c)&&b(c,a[c])}}
function k_(a,b){if(!a.H){a.H=b}else{Ghb(a.H.a);!!b&&Mgb(a.H,b)}}
function l_(a,b){if(!a.I){a.I=b}else{Ghb(a.I.a);!!b&&Mgb(a.I,b)}}
function a1(a,b){if(a.b!=b){a.b=b;return true}else{return false}}
function b1(a,b){if(a.e!=b){a.e=b;return true}else{return false}}
function Ch(a){if(bh(a)){return !!a&&a.nodeType==1}return false}
function iG(a){fG();jG();kG();return hG((!fp&&(fp=new xn),fp),a)}
function CG(a){var b=a.__listener;return !Rq(b)&&Oq(b,10)?b:null}
function mnb(a,b){var c;c=a.a.get(b);return c==null?new Array:c}
function DZ(a,b){var c,d;c=a>0?IZ(a):'';d=b>0?''+b:'';return c+d}
function teb(a,b,c){a.a=eeb(a.a,0,b)+(''+c)+deb(a.a,b);return a}
function yab(a,b,c){i9(a.S,$p(Vp(nB,1),esb,1,5,[Edb(b),Edb(c)]))}
function xbb(){vbb();return $p(Vp(BA,1),esb,115,0,[tbb,ubb,sbb])}
function Gbb(){Ebb();return $p(Vp(FA,1),esb,110,0,[Dbb,Cbb,Bbb])}
function bbb(){_ab();return $p(Vp(xA,1),esb,119,0,[Yab,$ab,Zab])}
function GJ(a){if(a.M){return}else a.Sc&&Ne(a);bK(a.L,true,false)}
function TH(a){this.a=a;this.c=false;this.b=Np(a);this.d=this.b}
function Qf(a){Of();Mf.call(this,a);this.a='';this.b=a;this.a=''}
function $jb(a){Krb(a.a<a.c.a.length);a.b=a.a++;return a.c.a[a.b]}
function $T(a){var b;b=pU(a,a.qc,a.rc);a.nb=null;!!b&&sh(b.d,Yvb)}
function jV(a){var b;b=qU(a,a.qc,a.rc);return !!b&&b.isPercentage}
function XD(a){var b;if(LD(a)){b=a;return b==-0.?0:b}return Aq(a)}
function JO(a){var b;WZ(a.t,aeb((b=IK(a.a),b==null?'':b),' ',''))}
function s4(a,b){var c;if(!i4&&xj(b.a).length==1){c=b.a;n4(a,c)}}
function BZ(a){if(a.K){while(0<a.K.a.length){NV(a.W,Bjb(a.K,0))}}}
function Kmb(a,b){if(b.$modCount!=a.$modCount){throw CD(new Nmb)}}
function bqb(a,b){this.a=a;this.d=b;this.c=(zeb(),JD(Date.now()))}
function grb(a,b){Job.call(this,b.cg(),b.bg()&-6);Mrb(a);this.a=b}
function lrb(a,b){Mob.call(this,b.cg(),b.bg()&-6);Mrb(a);this.a=b}
function Fib(a,b,c){Prb(b,c,a.size());this.c=a;this.a=b;this.b=c-b}
function uib(a){Qrb(a.c!=-1);a.d.removeAtIndex(a.c);a.b=a.c;a.c=-1}
function aeb(a,b,c){c=keb(c);return a.replace(new RegExp(b,'g'),c)}
function bF(){bF=hE;new RegExp('%5B','g');new RegExp('%5D','g')}
function k$(a,b){a.t&&(a.c=false,p1((ng(),mg),new g0(a,b,false)))}
function pT(a,b){a.j=b;a.a.style[Htb]=(b?(wk(),lk):(wk(),hk)).he()}
function qS(a,b){a.k.style[ktb]=b+(em(),Lub);a.u.style[ktb]=b+Lub}
function p1(a,b){++a.a;a.b=xg(a.b,[b,false]);sg(a);ug(a,new r1(a))}
function mf(a,b){return !!a&&!!a.equals?a.equals(b):Uq(a)===Uq(b)}
function bh(b){try{return !!b&&!!b.nodeType}catch(a){return false}}
function Af(b){if(!('stack' in b)){try{throw b}catch(a){}}return b}
function Pcb(a,b,c,d){var e;e=Ncb(a,b);_cb(c,e);e.f=d?8:0;return e}
function aU(a,b,c,d){var e;e=Zub+c+$ub+d;Dhb(a.r,e,b);H_(a.a,b,c,d)}
function rh(a,b){var c;b=Dh(b);c=Bh(a.className||'',b);return c!=-1}
function Jh(a,b){var c;return ph((c=a.Zd(b),c?c:b.documentElement))}
function mU(a,b){b?p1((ng(),mg),new QX(a)):(a.yc.focus(),undefined)}
function pW(a,b){b?sh(a.Ec,'nogrid'):dh(a.Ec,'nogrid');a.Db&&uX(a)}
function mM(a){if(!a.a){a.a=Oi($doc);a.a.className=Wub;Vg(a.d,a.a)}}
function nM(a){if(!a.e){a.e=Oi($doc);a.e.className=Xub;Vg(a.d,a.e)}}
function tfb(a){while(a.d>0&&a.a[--a.d]==0);a.a[a.d++]==0&&(a.e=0)}
function snb(a){this.e=a;this.b=this.e.a.entries();this.a=new Array}
function wY(a,b,c,d,e){this.g=a;this.b=b;this.c=d;this.d=e;this.a=c}
function zib(a,b){this.a=a;vib.call(this,a);Orb(b,a.size());this.b=b}
function ab(a,b){U(a.a,b)?(a.a.q=a.a.s.fd(a.a.j,a.a.n)):(a.a.q=null)}
function QM(a){CM=a;IM(a);a.F?T(new Q5(a),200,Wf()):JM(a,1);CM=null}
function fg(a){a&&pg((ng(),mg));--Xf;if(a){if(_f!=-1){kg(_f);_f=-1}}}
function pV(a,b){!!a.gb&&mN(a.gb);(jF(),b.Wc).style[Jtb]='1';a.gb=b}
function zV(a,b){if(b){b.clear();!!a&&b.addAll(a)}else{b=a}return b}
function jL(a,b){var c;c=gL(a,b);if(c==-1){throw CD(new rob)}iL(a,c)}
function nnb(a,b){var c;return lnb(b,mnb(a,b==null?0:(c=Q(b),c|0)))}
function _bb(){Zbb();return $p(Vp(KA,1),esb,98,0,[Xbb,Ybb,Wbb,Vbb])}
function MU(a){return $p(Vp(Zq,1),fwb,16,15,[a.db,a.bb,a.zb,a.xb])}
function n9(a,b,c,d){i9(a.j,$p(Vp(nB,1),esb,1,5,[Edb(b),Edb(c),d]))}
function cZ(a,b,c,d){if(CP(a.a).u){a.a.e=b;a.a.f=null;t9(a.a.g,d,c)}}
function kW(a,b,c){pX(a,nU(a),b);hX(a,b);a.r=AV(b,a.r);a.i=AV(c,a.i)}
function GO(a){a.v=true;gO(a,a.w);MO(a,true);p1((ng(),mg),new aP(a))}
function nj(a){return Tdb(a.compatMode,wtb)?a.documentElement:a.body}
function lK(){throw 'A PotentialElement cannot be resolved twice.'}
function rI(){rI=hE;new sI('bottom');new sI('middle');qI=new sI(Eub)}
function Em(){Em=hE;zm=new Hm;Am=new Im;Bm=new Jm;Cm=new Km;Dm=new Lm}
function Xj(){Xj=hE;Vj=new $j;Tj=new _j;Sj=new ak;Uj=new bk;Wj=new ck}
function Rbb(){Rbb=hE;Pbb=new Sbb('ALERT',0);Qbb=new Sbb('STATUS',1)}
function hqb(){hqb=hE;eqb=false;cqb=true;dqb=true;gqb=true;fqb=true}
function sU(a,b,c){var d;d=Ahb(a.e,Zub+b+$ub+c);return !d?'':d.value}
function rW(a,b){b?Ae((jF(),a.Wc),qwb,false):Ae((jF(),a.Wc),qwb,true)}
function xQ(a,b){(jF(),a.Wc).style[Htb]=(b?(wk(),lk):(wk(),dk)).he()}
function ob(a){if(!a.d){return}++a.b;a.c?sb(a.d.a):tb(a.d.a);a.d=null}
function t5(){iQ.call(this);this.a=null;new B5(this,this);this.b=null}
function B5(a,b){this.a=a;this.f=new V3(this);this.c=b;this.b='click'}
function uM(a,b,c){this.n=a;this.c=b;this.k=c;this.d=Oi($doc);qM(this)}
function Bab(a,b,c,d){i9(a.V,$p(Vp(nB,1),esb,1,5,[b,Edb(c),Edb(d)]))}
function WS(a,b){return a.sheet.insertRule(b,a.sheet.cssRules.length)}
function h1(a,b){return a-(Fh(),Eh).Vd(b)+Eh._d(b)+kj(b.ownerDocument)}
function kK(a){return function(){this.__gwt_resolve=lK;return a.md()}}
function RK(a){PK.call(this,a);(jF(),this.Wc).className='gwt-TextBox'}
function FI(a,b){if(b<0||b>=Cj((jF(),a.Wc)).length){throw CD(new ucb)}}
function w4(a,b,c,d){if(b>0){a.r=true;a.i=new C4(a,c,d);T(a.i,b,Wf())}}
function xqb(a){hqb();if(eqb){return new wqb(null)}return Zpb(_pb(),a)}
function KU(a){var b;b=Ahb(a.e,Zub+a.qc+$ub+a.rc);return !b?'':b.value}
function S0(a){var b=parseInt(a,10);if(isNaN(b))return 0;else return b}
function dj(a){!a.gwt_uid&&(a.gwt_uid=1);return 'gwt-uid-'+a.gwt_uid++}
function ZE(a){if(a==null){throw CD(new Kdb('uri is null'))}this.a=a}
function NE(a){if(a==null){throw CD(new Kdb('html is null'))}this.a=a}
function Sdb(a,b){var c;c=b.length;return Tdb(a.substr(a.length-c,c),b)}
function iI(a){var b;gI.call(this,(b=a,Udb('span',(Fh(),a).tagName),b))}
function I3(a,b,c){var d;d=!c?null:(Icb(c),c.k);Q3(a.c,(Icb(b),b.k),d)}
function Unb(a,b,c,d){var e;e=new iob;e.c=b;e.b=c;e.a=d;d.b=c.a=e;++a.b}
function beb(a,b,c){var d;c=keb(c);d=new RegExp(b);return a.replace(d,c)}
function Ajb(a,b,c){for(;c>=0;--c){if(sob(b,a.a[c])){return c}}return -1}
function xfb(a,b){var c;for(c=a.d-1;c>=0&&a.a[c]===b[c];c--);return c<0}
function F0(){var a=$wnd.document.documentMode;if(!a)return -1;return a}
function Ih(a){var b=a.parentNode;(!b||b.nodeType!=1)&&(b=null);return b}
function tf(a){if(a.k){a.backingJsObject!==osb&&a.Gd();a.i=null}return a}
function LT(a){var b,c;c=0;for(b=1;b<a.db-a.Rc;b++){c+=a.W[b-1]}return c}
function IF(a){a.e=false;a.f=null;a.a=false;a.b=false;a.c=true;a.d=null}
function fM(a){!!a.a&&Vg(a.d,a.a);!!a.e&&Vg(a.d,a.e);!!a.j&&Vg(a.d,a.j)}
function UZ(a){!iV(a.W)&&!a.e&&!!a.p&&lZ(a.p,JU(a.W))&&kZ(a.p,JU(a.W))}
function ZZ(a,b){a.C&&!a.u.f&&(a.c=false,p1((ng(),mg),new g0(a,b,true)))}
function wE(){var a;yE(uE);if(!pf){a=xqb((Icb(Gu),Gu.k));qf(new xE(a))}}
function ZF(){var a;a=asb(VF);$wnd.addEventListener('hashchange',a,false)}
function le(a,b){re(a,xe((tJ(),sJ).$e((jF(),jF(),lh(a.Wc))))+'-'+b,false)}
function jI(){iI.call(this,Oi($doc));(jF(),this.Wc).className='gwt-HTML'}
function Knb(a){this.d=a;this.b=this.d.a.entries();this.a=this.b.next()}
function wqb(a){hqb();if(eqb){return}this.c=a;this.e=true;this.a=new Ejb}
function J3(){this.a={};this.f={};this.d={};this.e={};this.b={};this.c={}}
function dg(b){ag();return function(){return eg(b,this,arguments);var a}}
function Wf(){if(Date.now){return Date.now()}return (new Date).getTime()}
function Gfb(a,b){if(b==0||a.e==0){return a}return b>0?$fb(a,b):bgb(a,-b)}
function Hfb(a,b){if(b==0||a.e==0){return a}return b>0?bgb(a,b):$fb(a,-b)}
function Aab(a,b,c,d){i9(a.U,$p(Vp(nB,1),esb,1,5,[Edb(b),Edb(c),Edb(d)]))}
function Obb(){Mbb();return $p(Vp(GA,1),esb,77,0,[Jbb,Lbb,Ibb,Hbb,Kbb])}
function G$(a){BW(a.W,1,1);v$(a,a.i,a.P);h$(a,1,a.i,1,a.P);L_(a,1,1,null)}
function PR(a){a.N&&OR(a);h$(a.Q.a,a.Q.qc,a.U,a.Q.rc,a.V);a.o=false;LR(a)}
function c$(a,b,c,d){if(a.S){(c!=a.W.qc||d!=a.W.rc)&&FZ(a);cZ(a.S,b,c,d)}}
function p$(a){var b,c;b=ph(a.W.yc);c=(a.W.yc.scrollTop||0)|0;yab(a.X,b,c)}
function bq(a){var b,c,d;b=a&gub;c=a>>22&gub;d=a<0?nsb:0;return dq(b,c,d)}
function lV(a){var b;b=new Ejb;vjb(b,a.sb);wjb(b,vU(a));return new akb(b)}
function KT(a){var b,c;c=0;for(b=1;b<a.bb-a.ob;b++){c+=JZ(a.a,b)}return c}
function Bjb(a,b){var c;c=(Lrb(b,a.a.length),a.a[b]);Grb(a.a,b,1);return c}
function dpb(a,b){!a.a?(a.a=new web(a.d)):seb(a.a,a.b);qeb(a.a,b);return a}
function xgb(a,b,c,d){var e;e=Xp(Zq,fwb,16,b,15,1);ygb(e,a,b,c,d);return e}
function yqb(a,b,c,d){Mrb(a);Mrb(b);Mrb(c);Mrb(d);return new Fqb(b,new gpb)}
function Rrb(a,b,c){if(a<0||b>c||b<a){throw CD(new xeb(Jsb+a+Ksb+b+Gsb+c))}}
function epb(a,b){this.b=', ';this.d=a;this.e=b;this.c=this.d+(''+this.e)}
function qrb(a,b){Pob.call(this,b.cg(),b.bg()&-6);Mrb(a);this.a=a;this.b=b}
function Qe(a,b){a.Tc==-1?wF((jF(),a.Wc),b|(a.Wc.__eventBits||0)):(a.Tc|=b)}
function lN(a){RH(a.a).length==0?De((jF(),a.Wc),false):De((jF(),a.Wc),true)}
function C0(){C0=hE;var a;a=E0((!B0&&(B0=new L0),B0));qK();re(uK(),a,true)}
function rU(a,b,c){var d;d=Ahb(a.e,Zub+b+$ub+c);return !d?'':d.formulaValue}
function gL(a,b){var c;for(c=0;c<a.c;++c){if(a.a[c]==b){return c}}return -1}
function Rob(a,b){Mrb(b);if(a.c<a.d){Vob(a,b,a.c++);return true}return false}
function i$(a,b){n9(a.X,a.W.rc,a.W.qc,b);yZ(a,b,true);lU(a.W);iR(a.R,false)}
function qF(b){jF();try{return !!b&&!!b.__gwt_resolve}catch(a){return false}}
function u1(){t1();$wnd.getSelection&&$wnd.getSelection().removeAllRanges()}
function Fjb(a){tjb(this);Irb(a>=0,'Initial capacity must not be negative')}
function vI(a){uI(this,new DI(this,a));(jF(),this.Wc).className='gwt-Image'}
function edb(a){return Tdb(hsb,typeof(a))||Sq(a,$wnd.java.lang.Number$impl)}
function zJ(a){var b;b=a.O;if(b){a.w!=null&&b.nd(a.w);a.A!=null&&b.pd(a.A)}}
function PG(a){var b;b=TG(a);if(!b){return}lF(a,b.nodeType!=1?null:b,CG(b))}
function PK(a){var b;LK.call(this,(b=a,!eF&&(eF=new fF),!cF&&(cF=new dF),b))}
function RU(a){YU(a,a.qc,a.rc)||fW(a,a.qc,a.rc);p1((ng(),mg),new MX(a,true))}
function Xp(a,b,c,d,e,f){var g;g=Yp(e,d);e!=10&&$p(Vp(a,f),b,c,e,g);return g}
function sgb(a,b,c,d){var e;e=Xp(Zq,fwb,16,b+1,15,1);tgb(e,a,b,c,d);return e}
function ikb(a,b,c,d){var e;d=(Gmb(),!d?Fmb:d);e=a.slice(b,c);jkb(e,a,b,c,-b)}
function kF(a,b){jF();var c;c=CG(b);if(!c){return false}lF(a,b,c);return true}
function _p(a,b){Wp(b)!=10&&$p(O(b),b.jg,b.__elementTypeId$,Wp(b),a);return a}
function ZL(b){try{return b.selectionEnd-b.selectionStart}catch(a){return 0}}
function bj(a){var b;return b=(Fh(),a).createElement('INPUT'),b.type='text',b}
function xG(a){var b;wG();b=uG.get(a);return !b?null:b.getAtIndex(b.size()-1)}
function QD(a){var b;if(LD(a)){b=0-a;if(!isNaN(b)){return b}}return GD(tq(a))}
function DP(a,b){var c;c=(!a.J&&(a.J=yP(a)),a.J).pb;return !!c&&c.contains(b)}
function BU(a,b,c){var d;d=Ahb(a.e,Zub+b+$ub+c);return !d?'':d.originalValue}
function MT(a,b,c){var d,e,f;f=0;for(e=b;e<=c;e++){d=JZ(a.a,e);f+=d}return f}
function cT(a,b,c){(jF(),a.Wc).style[Rvb]=b+(em(),Lub);a.Wc.style[Svb]=c+'pt'}
function j_(a,b){a.G=b;a.G?Ae((jF(),a.Wc),Jwb,true):Ae((jF(),a.Wc),Jwb,false)}
function I6(a){var b;b=aeb((Icb(Nx),Nx.k),vsb,'.');return AP(a.e,b).Ie().Te()}
function Afb(a){var b;if(a.e==0){return -1}b=zfb(a);return (b<<5)+Cdb(a.a[b])}
function fJ(a){var b;this.b=new Ejb;this.f=new Ejb;UI(this,(b=a,nJ(),sL(),b))}
function JY(){iQ.call(this);this.a=new _Y(this);this.i=new Ejb;this.c=new cnb}
function Kfb(a,b){qfb();this.e=a;this.d=1;this.a=$p(Vp(Zq,1),fwb,16,15,[b])}
function gm(){em();return $p(Vp(Nt,1),esb,33,0,[dm,bm,Yl,Zl,cm,am,$l,Xl,_l])}
function u9(a,b,c){i9(a.v,$p(Vp(nB,1),esb,1,5,[(xcb(),b?true:false),Edb(c)]))}
function iqb(a,b,c,d){var e;e=new bqb(b,c);e.e=d;aqb(e,eqb?null:a.c);jqb(a,e)}
function MO(a,b){if(b){p1((ng(),mg),new SO(a))}else if(a.f){a.q=GK(a.e);fO(a)}}
function l$(a){a.t=true;a.c=true;a.C?(a.C=false):iV(a.W)?(a.b=''):(a.b=KU(a.W))}
function QR(a){var b;b=yR(a);a.v=(Fh(),Eh).Vd(b);a.w=Eh.Wd(b);a.O=a.e;a.P=a.K}
function BK(a){if(!a.a||!a.c.O){throw CD(new rob)}a.a=false;return a.b=a.c.O}
function mL(a){if(a.b>=a.c.c){throw CD(new rob)}a.a=a.c.a[a.b];++a.b;return a.a}
function Onb(a){if(a.a.d!=a.c){return Fnb(a.a,a.b.value[0])}return a.b.value[1]}
function zjb(a,b,c){for(;c<a.a.length;++c){if(sob(b,a.a[c])){return c}}return -1}
function brb(a,b,c){var d;Mqb(a);d=new vrb;d.a=b;a.a.dg(new Arb(d,c));return d.a}
function lG(){fG();var a;if(_F){a=new pG;!!aG&&sp(aG,a);return null}return null}
function D0(){try{document.createEvent(aub);return true}catch(a){return false}}
function _hb(a){var b;Kmb(a.e,a);Krb(a.b);a.c=a.a;b=a.a.Te();a.b=$hb(a);return b}
function Pqb(a){var b;Mqb(a);b=Xp(Xq,esb,16,0,15,1);Dob(a.a,new Sqb(b));return b}
function Uqb(a){var b;Mqb(a);b=Xp(Zq,fwb,16,0,15,1);Dob(a.a,new Xqb(b));return b}
function Hh(a){var b=a.firstChild;while(b&&b.nodeType!=1)b=b.nextSibling;return b}
function JH(a){if(!a.bb){throw CD(new sdb('initWidget() is not called yet'))}}
function eT(a,b){bT(a,b.col,b.row);aT(a,b.height);dT(a,b.width);cT(a,b.dx,b.dy)}
function I_(a,b,c,d){if(a.W.qc==c&&a.W.rc==d){L_(a,c,d,null);b!=null&&EO(a.u,b)}}
function wW(a,b,c,d,e){var f;f=AU(a,b);if(f){lM(f,c,d,e);return true}return false}
function TG(a){var b;b=(Fh(),Eh).Rd(a);while(!!b&&!CG(b)){b=b.parentNode}return b}
function iT(a){var b;b=Oi($doc);rT(b,a);b.className='sheet-tabsheet-tab';return b}
function NI(){_e();df.call(this,Vi($doc));(jF(),this.Wc).className='gwt-ListBox'}
function Wp(a){return a.__elementTypeCategory$==null?10:a.__elementTypeCategory$}
function Kh(a,b){var c;return ((c=a.Zd(b),c?c:b.documentElement).scrollTop||0)|0}
function d2(a,b){var c,d;d=Z1(a.a[b]);for(c=new akb(d);c.a<c.c.a.length;){$jb(c)}}
function Zeb(a,b){this.e=b;this.a=bfb(a);this.a<54?(this.f=XD(a)):(this.c=Xfb(a))}
function y0(){this.c=new Zmb;this.a=new W0;b2((!$1&&($1=new i2),$1));this.d=new t5}
function Sp(){Sp=hE;Rp=new Tp('RTL',0);Qp=new Tp('LTR',1);Pp=new Tp('DEFAULT',2)}
function Iq(){Iq=hE;Eq=dq(gub,gub,524287);Fq=dq(0,0,hub);Gq=bq(1);bq(2);Hq=bq(0)}
function l9(a,b,c,d,e){i9(a.g,$p(Vp(nB,1),esb,1,5,[Edb(b),Edb(c),Edb(d),Edb(e)]))}
function o9(a,b,c,d,e){i9(a.k,$p(Vp(nB,1),esb,1,5,[Edb(b),Edb(c),Edb(d),Edb(e)]))}
function B9(a,b,c,d,e){i9(a.F,$p(Vp(nB,1),esb,1,5,[Edb(b),Edb(c),Edb(d),Edb(e)]))}
function H9(a,b,c,d,e){i9(a.P,$p(Vp(nB,1),esb,1,5,[Edb(b),Edb(c),Edb(d),Edb(e)]))}
function m$(a,b,c){n9(a.X,a.W.rc,a.W.qc,b);yZ(a,b,c);if(c){lU(a.W);kR(a.R,false)}}
function T(a,b,c){S(a);a.o=true;a.p=false;a.k=b;a.t=c;a.n=null;++a.r;ab(a.j,Wf())}
function K6(a,b,c){var d;d=aeb((Icb(Nx),Nx.k),vsb,'.');SY(AP(a.e,d).Ie().Te(),b,c)}
function feb(a,b){return b==(lob(),lob(),kob)?a.toLocaleLowerCase():a.toLowerCase()}
function geb(a,b){return b==(lob(),lob(),kob)?a.toLocaleUpperCase():a.toUpperCase()}
function i1(a,b){return a-(Fh(),Eh).Wd(b)+((b.scrollTop||0)|0)+lj(b.ownerDocument)}
function hj(a){return (Tdb(a.compatMode,wtb)?a.documentElement:a.body).clientWidth|0}
function Rq(a){return a!=null&&(typeof a===bsb||typeof a==='function')&&!(a.kg===lE)}
function gj(a){return (Tdb(a.compatMode,wtb)?a.documentElement:a.body).clientHeight|0}
function og(a){var b,c;if(a.c){c=null;do{b=a.c;a.c=null;c=yg(b,c)}while(a.c);a.c=c}}
function pg(a){var b,c;if(a.d){c=null;do{b=a.d;a.d=null;c=yg(b,c)}while(a.d);a.d=c}}
function wG(){var a;a=(fG(),$wnd.location.search);if(!uG||!Tdb(tG,a)){uG=vG(a);tG=a}}
function TP(a,b){G1(he(a.tf()),true);!!a.p&&ob(a.p);if(a.q){!!b.a&&zj(b.a);a.q=false}}
function SH(a,b,c){a.c=false;c?wh(a.a,b):xh(a.a,b);if(a.d!=a.b){a.d=a.b;Op(a.a,a.b)}}
function DJ(a,b){a.cf(false);QM(a);b.Re(nh((jF(),a.Wc),itb),nh(a.Wc,Kub));a.cf(true)}
function cL(a,b){var c,d;d=oF((jF(),b.Wc));c=pH(a,b);c&&_g(a.c,Ih((Fh(),d)));return c}
function xjb(a,b){var c,d,e,f;Mrb(b);for(d=a.a,e=0,f=d.length;e<f;++e){c=d[e];b.If(c)}}
function aE(){bE();var a=_D;for(var b=0;b<arguments.length;b++){a.push(arguments[b])}}
function jbb(a,b,c){b<0&&(b=0);(c<0||c>a.length)&&(c=a.length);return a.substr(b,c-b)}
function Dfb(a,b){if(b.e==0){return pfb}if(a.e==0){return pfb}return Cgb(),Dgb(a,b)}
function o1(a){var b;if(!a){return '(null)'}b=Jcb(a.ig);return deb(b,Ydb(b,jeb(46))+1)}
function _cb(a,b){var c;if(!a){return}b.j=a;var d=Vcb(b);if(!d){eE[a]=[b];return}d.ig=b}
function Vnb(a,b){var c;c=b.c;b.a.b=b.b;b.b.a=b.a;b.a=b.b=null;b.c=null;--a.b;return c}
function BP(a,b){var c;c=(Icb(b),b.k);X0(a.I,c)||(a.I[c]=L1(b),undefined);return a.I[c]}
function me(a,b){var c=a.parentNode;if(!c){return}c.insertBefore(b,a);c.removeChild(a)}
function ZU(a,b,c){var d;d=Ahb(a.e,Zub+b+$ub+c);return !d?OZ(a.a,b)&&RZ(a.a,c):d.locked}
function uJ(a,b){var c;c=(Fh(),Eh).Td(b);if(Ch(c)){return Zg((jF(),a.Wc),c)}return false}
function Aq(a){if(qq(a,(Iq(),Hq))<0){return -mq(tq(a))}return a.l+a.m*msb+a.h*lsb}
function Mp(a){if(null==a){throw CD(new Kdb('encodedURLComponent cannot be null'))}}
function _V(a,b){var c;TS(a);for(c=0;c<b.a.length;c++){WS(a,(Lrb(c,b.a.length),b.a[c]))}}
function KZ(a,b){return !!a.v&&zjb(a.v,Edb(b),0)!=-1?0:b>0&&a.g.length>=b?a.g[b-1]:a.q}
function YU(a,b,c){return (b<=a.ob||b>=zU(a)&&b<=EU(a))&&(c<=a.Rc||c<=NU(a)&&c>=oU(a))}
function WI(a,b,c){if(!!b&&!b.b){return}aJ(a,b);c&&a.e&&a.Ne();!!b&&a.c&&SI(a,b,false)}
function Web(a){if(a.a<54){return a.f<0?-1:a.f>0?1:0}return (!a.c&&(a.c=Wfb(a.f)),a.c).e}
function qg(a){var b;if(a.b){b=a.b;a.b=null;!a.g&&(a.g=[]);yg(b,a.g)}!!a.g&&(a.g=tg(a.g))}
function Cdb(a){var b,c;if(a==0){return 32}else{c=0;for(b=1;(b&a)==0;b<<=1){++c}return c}}
function mT(a,b){var c,d,e;e=a.u[b];d=B1(e);c=new Q0(e);d+=O0(c)[1];d+=O0(c)[3];return d}
function dhb(a,b){var c,d;Mrb(b);for(d=b.Sf().Ie();d.Se();){c=d.Te();a.put(c.$f(),c._f())}}
function RV(a,b,c,d,e){var f,g;_T(a);for(g=b;g<=c;g++){iW(a,g)}for(f=d;f<=e;f++){hW(a,f)}}
function cW(a,b,c,d,e){var f;f=dW(a,b,c,true);eW(a,d,e,true)&&(f=true);if(f){uV(a);oV(a)}}
function F9(a,b,c,d,e,f){i9(a.N,$p(Vp(nB,1),esb,1,5,[Gab(b),Edb(c),Edb(d),Edb(e),Edb(f)]))}
function m9(a,b,c,d){i9(a.i,$p(Vp(nB,1),esb,1,5,[Edb(b),Edb(c),(xcb(),d?true:false)]))}
function GN(a,b){a.f=b;b?Ae((jF(),a.Wc),'inversed',true):Ae((jF(),a.Wc),'inversed',false)}
function dS(a,b){a.k.style[ktb]=b+(em(),Lub);a.d.style[ktb]=b+Lub;a.j.style[ktb]=b+Lub}
function dE(a,b){typeof window===bsb&&typeof window['$gwt']===bsb&&(window['$gwt'][a]=b)}
function Ig(a){var b=/function(?:\s+([\w$]+))?\s*\(/;var c=b.exec(a);return c&&c[1]||csb}
function IU(a){var b;b=Zub+a.qc+$ub+a.rc;if(gV(a,b)){return AU(a,b)}return pU(a,a.qc,a.rc)}
function sfb(a){var b;b=Xp(Zq,fwb,16,a.d,15,1);Aeb(a.a,0,b,0,a.d);return new Lfb(a.e,a.d,b)}
function IK(a){var b,c;c=oh((jF(),a.Wc),Rub);b=(Mrb(c),c);if(Tdb('',c)){return null}return b}
function zI(a,b){var c;c=oh((jF(),b.Wc),Bub);Tdb(Gtb,c)&&(a.a=new AI(a,b),p1((ng(),mg),a.a))}
function AE(a){var b,c;c=xG('logLevel');b=c==null?null:upb(c);b?rqb(a,b):rqb(a,(rpb(),npb))}
function Y0(c){var a=[];for(var b in c){Object.hasOwnProperty.call(c,b)&&a.push(b)}return a}
function zX(a){if(!a.target||a.target.shadowRoot){return a.composedPath()[0]}return a.target}
function Bi(a){return a.ownerDocument.defaultView.getComputedStyle(a,'').direction=='rtl'}
function mj(a){return ((Tdb(a.compatMode,wtb)?a.documentElement:a.body).scrollWidth||0)|0}
function jj(a){return ((Tdb(a.compatMode,wtb)?a.documentElement:a.body).scrollHeight||0)|0}
function Mf(a){rf(this);tf(this);this.backingJsObject=a;uf(this,a);this.f=a==null?ssb:kE(a)}
function iQ(){this.I={};this.r=[];rp((!this.D&&(this.D=new up(this)),this.D),(U0(),T0),this)}
function rF(a){jF();var b;b=MF(yF,a);if(!b&&!!a){(Fh(),a).stopPropagation();Eh.Ud(a)}return b}
function lF(a,b,c){jF();var d;d=gF;gF=a;b==iF&&AG((Fh(),a).type)==8192&&(iF=null);c.vd(a);gF=d}
function bT(a,b,c){var d;a.a=b;a.b=c;(jF(),a.Wc).className=Qvb;d=Zub+b+$ub+c;Ae(a.Wc,d,true)}
function JI(a){var b;b=(jF(),a.Wc).selectedIndex;return b==-1?null:(FI(a,b),Cj(a.Wc)[b].value)}
function UF(){var a;a=(fG(),bG).He();if(a==null||a.length==0){return ''}return $F(a.substr(1))}
function gH(){var b=$wnd.onresize;$wnd.onresize=asb(function(a){try{mG()}finally{b&&b(a)}})}
function Mgb(a,b){var c,d,e;Mrb(b);c=false;for(e=b.Ie();e.Se();){d=e.Te();c=c|a.add(d)}return c}
function agb(a,b,c){var d,e,f;d=0;for(e=0;e<c;e++){f=b[e];a[e]=f<<1|d;d=f>>>31}d!=0&&(a[c]=d)}
function a$(a,b,c){n9(a.X,a.W.rc,a.W.qc,b);yZ(a,b,true);lU(a.W);c?jR(a.R,false):kR(a.R,false)}
function $Z(a,b,c){n9(a.X,a.W.rc,a.W.qc,b);yZ(a,b,true);lU(a.W);c?lR(a.R,false):iR(a.R,false)}
function Z9(a,b,c,d){i9(a.u,$p(Vp(nB,1),esb,1,5,[(xcb(),b?true:false),Edb(c),d?true:false]))}
function CU(a,b,c){if(b<=a.ob){return c<=a.Rc?a.Mc:a.c}else if(c<=a.Rc){return a.Oc}return a.yc}
function JD(a){if(ksb<a&&a<lsb){return a<0?$wnd.Math.ceil(a):$wnd.Math.floor(a)}return GD(rq(a))}
function ifb(a){if(a==0){return Geb[0]}if(a>=0&&a<Neb.length){return Neb[a]}return new Zeb(0,a)}
function lqb(a){if(!cqb){return}qqb(a,(rpb(),kpb),'invalid column index, halting parse',null)}
function YP(a){if(a.v){_L(a.v.a);a.v=null}if(a.u){_L(a.u.a);a.u=null}if(a.t){_L(a.t.a);a.t=null}}
function $_(a,b){if(b.a){AW(a.b.W,a.a,a.c)}else{a.a=ph(a.b.W.yc);a.c=(a.b.W.yc.scrollTop||0)|0}}
function o4(a){if(h4){if(a.q[Yxb]||null){return nh(a.q,Yxb)}return 0}return (a.q.scrollTop||0)|0}
function GD(a){var b;b=a.h;if(b==0){return a.l+a.m*msb}if(b==nsb){return a.l+a.m*msb-lsb}return a}
function xe(a){var b,c;b=a.className||'';c=Vdb(b,jeb(32));if(c>=0){return b.substr(0,c)}return b}
function zfb(a){var b;if(a.b==-2){if(a.e==0){b=-1}else{for(b=0;a.a[b]==0;b++);}a.b=b}return a.b}
function _pb(){var a;if(!Xpb){Xpb=new $pb;a=new wqb('');rqb(a,(rpb(),npb));Ypb(Xpb,a)}return Xpb}
function _ab(){_ab=hE;Yab=new abb('LEFT',0);$ab=new abb('RIGHT',1);Zab=new abb('MIDDLE',2)}
function Ebb(){Ebb=hE;Dbb=new Fbb('TEXT',0);Cbb=new Fbb('PREFORMATTED',1);Bbb=new Fbb('HTML',2)}
function Pfb(a){Mrb(a);if(a.length==0){throw CD(new Mdb('Zero length BigInteger'))}Ufb(this,a)}
function x1(){t1();if($wnd.document.activeElement){return $wnd.document.activeElement}return null}
function zg(b,c){ng();function d(){var a=asb(wg)(b);a&&$wnd.setTimeout(d,c)}
$wnd.setTimeout(d,c)}
function De(a,b){a.style.display=b?'':jtb;b?a.removeAttribute(otb):a.setAttribute(otb,'true')}
function RP(a,b){var c;g1(b.a,he(a.tf()));!!b.a&&zj(b.a);Aj(b.a);(c=a,uj(b.a),c).mf(wA).lg();u1()}
function qob(a,b){var c,d;Mrb(b);for(d=new aib((new Uhb(a)).a);d.b;){c=_hb(d);b.Jf(c.$f(),c._f())}}
function YT(a){var b,c;for(c=new akb(a);c.a<c.c.a.length;){b=$jb(c);ah(b.d)}a.a=Xp(nB,esb,1,0,5,1)}
function c1(){this.d=Xp(Zq,fwb,16,4,15,1);this.a=Xp(Zq,fwb,16,4,15,1);this.c=Xp(Zq,fwb,16,4,15,1)}
function $0(a,b){Qgb(new okb($p(Vp(Zq,2),esb,22,0,[a])));Qgb(new okb($p(Vp(Zq,2),esb,22,0,[b])))}
function vbb(){vbb=hE;tbb=new wbb('DISABLED',0);ubb=new wbb('MANUAL',1);sbb=new wbb('AUTOMATIC',2)}
function HQ(a){var b;b=Wg(a.j);b?DJ(a.e,a.a):p1((ng(),mg),new WQ(a));!!a.d&&wQ(a.g,sU(a.d,a.b,a.k))}
function sg(a){if(!a.j){a.j=true;!a.f&&(a.f=new Ag(a));zg(a.f,1);!a.i&&(a.i=new Cg(a));zg(a.i,50)}}
function S(a){if(!a.o){return}a.u=a.p;a.n=null;a.o=false;a.p=false;if(a.q){a.q.gd();a.q=null}a.ad()}
function E1(a){t1();return (Fh(),a).type.indexOf(Evb)!=-1?Nm(a.changedTouches[0]):$h(a.clientX||0)}
function F1(a){t1();return (Fh(),a).type.indexOf(Evb)!=-1?Om(a.changedTouches[0]):$h(a.clientY||0)}
function nqb(a){if(eqb){return Xp(OC,Oyb,109,0,0,1)}return Djb(a.a,Xp(OC,Oyb,109,a.a.a.length,0,1))}
function jfb(a){if(a==Vq(a)){return ifb(Vq(a))}if(a>=0){return new Zeb(0,jsb)}return new Zeb(0,tsb)}
function kf(){_e();var a;!hf&&(hf=new lf);a=Ni($doc);if(!a.getContext){return null}return new jf(a)}
function eib(a,b){var c,d;for(c=0,d=a.size();c<d;++c){if(sob(b,a.getAtIndex(c))){return c}}return -1}
function WD(a){var b,c,d,e;e=a;d=0;if(e<0){e+=lsb;d=nsb}c=Vq(e/msb);b=Vq(e-c*msb);return dq(b,c,d)}
function tX(a,b,c,d,e){var f;if(gV(a,Zub+c+$ub+e)){f=MZ(a.a,c,e);c=f.col2;e=f.row2}HR(a.xc,b,c,d,e)}
function k9(a,b,c,d,e,f,g){i9(a.f,$p(Vp(nB,1),esb,1,5,[Edb(b),Edb(c),Edb(d),Edb(e),Edb(f),Edb(g)]))}
function aV(a,b,c){return c<=a.Rc&&(b>=a.bb&&b<=a.xb||b<=a.ob)||b<=a.ob&&(c>=a.db&&c<=a.zb||c<=a.Rc)}
function AR(a){return (jF(),a.Wc).style.display!=jtb||!!a.a&&ke(a.a)||!!a.X&&ke(a.X)||!!a.W&&ke(a.W)}
function qW(a,b){a.Z=b;b?sh(a.Ec,'noheaders'):dh(a.Ec,'noheaders');if(a.Db){oV(a);uX(a);aX(a);qX(a)}}
function BD(a){var b;if(Oq(a,18)){return a}b=a&&a.__java$exception;if(!b){b=new Qf(a);Gg(b)}return b}
function IZ(a){var b;b='';while(a>0){b=String.fromCharCode(65+(a-1)%26&ysb)+b;a=(a-1)/26|0}return b}
function Hnb(a,b){var c;c=a.a.get(b);if(c===undefined){++a.d}else{xnb(a.a,b);--a.c;Mmb(a.b)}return c}
function yhb(a,b){var c,d;for(d=b.Ie();d.Se();){c=d.Te();if(Ymb(a,c._f())){return true}}return false}
function oq(a,b){var c,d,e;c=a.l+b.l;d=a.m+b.m+(c>>22);e=a.h+b.h+(d>>22);return dq(c&gub,d&gub,e&nsb)}
function zq(a,b){var c,d,e;c=a.l-b.l;d=a.m-b.m+(c>>22);e=a.h-b.h+(d>>22);return dq(c&gub,d&gub,e&nsb)}
function H1(a){t1();var b,c;c=a.getElementsByTagName('img');for(b=0;b<c.length;b++){wF(c[b],pub)}}
function xR(a,b,c){var d,e;if(a==null||a.length<c-1){return 0}e=0;for(d=b;d<c;d++){e+=a[d-1]}return e}
function $p(a,b,c,d,e){e.ig=a;e.jg=b;e.kg=lE;e.__elementTypeId$=c;e.__elementTypeCategory$=d;return e}
function Cjb(a,b){var c;c=zjb(a,b,0);if(c==-1){return false}Lrb(c,a.a.length);Grb(a.a,c,1);return true}
function $hb(a){if(a.a.Se()){return true}if(a.a!=a.d){return false}a.a=new snb(a.e.a);return a.a.Se()}
function bdb(a){if(a==null){return false}return a.$implements__java_lang_Cloneable||Array.isArray(a)}
function WH(a,b){if(a.O){throw CD(new sdb('SimplePanel can only contain one child widget'))}a.Me(b)}
function Ce(a,b){if(!a){throw CD(new Kf(mtb))}b=heb(b);if(b.length==0){throw CD(new qdb(ntb))}Ge(a,b)}
function x4(a){j4();this.s=Xp(Zq,fwb,16,3,15,1);this.b=Xp(Xq,esb,16,3,15,1);this.p=new dnb(new okb(a))}
function P4(a){this.a=a;fJ.call(this,true);He(this,this,(ao(),ao(),_n));He(this,this,(Vn(),Vn(),Un))}
function NG(a){JG();var b;b=!rF(a);if(b||!FG){return}kF(a,FG)&&((Fh(),a).stopPropagation(),undefined)}
function zkb(a){ykb();var b,c,d;d=0;for(c=a.Ie();c.Se();){b=c.Te();d=d+(b!=null?Q(b):0);d=d|0}return d}
function tq(a){var b,c,d;b=~a.l+1&gub;c=~a.m+(b==0?1:0)&gub;d=~a.h+(b==0&&c==0?1:0)&nsb;return dq(b,c,d)}
function HI(a){var b;b=a.text;(Fh(),a).hasAttribute(Hub)&&b.length>1&&(b=eeb(b,1,b.length-1));return b}
function pi(a){var b=a.ownerDocument.defaultView.getComputedStyle(a,null);return b.direction=='rtl'}
function $mb(a){Irb(a>=0,'Negative initial capacity');Irb(true,'Non-positive load factor');Ghb(this)}
function Akb(a){ykb();var b,c,d;d=1;for(c=a.Ie();c.Se();){b=c.Te();d=31*d+(b!=null?Q(b):0);d=d|0}return d}
function FY(a,b){var c,d;for(d=a.c.Ie();d.Se();){c=d.Te();b.contains(c)||E$((!a.B&&(a.B=new P_),a.B),c)}}
function gT(a,b){var c,d,e,f,g;for(e=b,f=0,g=e.length;f<g;++f){d=e[f];c=iT(d);Vg(a.c,c);Tf(a.u,c)}tT(a)}
function _1(a,b){var c,d,e,f,g,h;h=b.c;a.a[h]=b;g=b.b;for(d=g,e=0,f=d.length;e<f;++e){c=d[e];a.d[c]=h}}
function jq(a){var b,c,d;b=~a.l+1&gub;c=~a.m+(b==0?1:0)&gub;d=~a.h+(b==0&&c==0?1:0)&nsb;a.l=b;a.m=c;a.h=d}
function kq(a){var b,c;c=Bdb(a.h);if(c==32){b=Bdb(a.m);return b==32?Bdb(a.l)+32:b+20-10}else{return c-12}}
function wjb(a,b){var c,d;c=b.toArray();d=c.length;if(d==0){return false}Frb(a.a,a.a.length,c);return true}
function gq(a,b,c,d,e){var f;f=xq(a,b);c&&jq(f);if(e){a=iq(a,b);d?(aq=tq(a)):(aq=dq(a.l,a.m,a.h))}return f}
function vY(a){a.c==0?g9(a.b,a.a):a.c==1?h9(a.b,a.a):f9(a.b,a.a);HM(v0(a.g.a.a.C),false);mU(a.d.W,true)}
function O(a){return Tq(a)?tB:Qq(a)?bB:Pq(a)?_A:Nq(a)?a.ig:Zp(a)?a.ig:a.ig||Array.isArray(a)&&Vp(ys,1)||ys}
function AF(a){jF();BG(hF);!GF&&(GF=new xn);if(!yF){yF=new vp(null,true);HF=new KF}return rp(yF,GF,a)}
function oI(){oI=hE;new pI((Jl(),'center'));new pI('justify');mI=new pI(Dub);new pI('right');nI=mI;lI=nI}
function i2(){this.a={};this.d={};this.c=new J3;this.b=new Ejb;_1(this,new j2($p(Vp(tB,1),wsb,2,6,[Ywb])))}
function Lcb(){++Hcb;this.k=null;this.i=null;this.g=null;this.d=null;this.b=null;this.j=null;this.a=null}
function Dcb(a){if(Tdb(typeof(a),isb)){return true}return a!=null&&a.$implements__java_lang_CharSequence}
function XH(a,b){if(a.O!=b){return false}try{Pe(b,null)}finally{_g(a.Le(),(jF(),b.Wc));a.O=null}return true}
function I4(a,b,c){if(a.b){a.a=new x4($p(Vp(ys,1),esb,0,2,[]));He(b,a,(Po(),Po(),Oo))}else{a.a=null}J4(a,c)}
function yk(){wk();return $p(Vp(lt,1),esb,23,0,[lk,dk,gk,hk,jk,kk,mk,nk,ok,rk,tk,sk,vk,pk,qk,uk,fk,ek,ik])}
function pS(a,b){a.i.style[Htb]=(b?(wk(),lk):(wk(),dk)).he();a.g.style[Htb]=(b?(wk(),lk):(wk(),dk)).he()}
function RM(a,b){a.style[Dub]=b.b+(em(),Lub);a.style[Eub]=b.c+Lub;a.style[ltb]=b.d+Lub;a.style[ktb]=b.a+Lub}
function hS(a,b){De((jF(),a.Wc),b);b?(a.Wc.style[Oub]='',undefined):(a.Wc.style[Oub]=(nl(),Vtb),undefined)}
function nV(a,b,c){var d;Vg(a.yc,a.hb);uh(a.hb,'cell '+b);xh(a.hb,c);d=a.hb.clientWidth|0;ah(a.hb);return d}
function Ogb(a,b){var c,d;Mrb(b);for(d=b.Ie();d.Se();){c=d.Te();if(!a.contains(c)){return false}}return true}
function lnb(a,b){var c,d,e,f;for(d=b,e=0,f=d.length;e<f;++e){c=d[e];if(Ymb(a,c.$f())){return c}}return null}
function KM(a,b){var c,d;xJ(a);for(d=new akb(a.s);d.a<d.c.a.length;){c=$jb(d);vY(c)}a.s.a=Xp(nB,esb,1,0,5,1)}
function Ep(a){var b,c;if(a.a){try{for(c=new akb(a.a);c.a<c.c.a.length;){b=$jb(c);b.Jd()}}finally{a.a=null}}}
function gU(a){var b,c,d;for(d=1;d<=a.Rc;d++){for(c=1;c<=a.ob;c++){b=new uM(a,c,d);Vg(a.Mc,b.d);vjb(a.Lc,b)}}}
function ugb(a,b,c){var d;for(d=c-1;d>=0&&a[d]===b[d];d--);return d<0?0:MD(ED(a[d],Iyb),ED(b[d],Iyb))?-1:1}
function FD(a,b){var c;if(LD(a)&&LD(b)){c=a-b;if(!isNaN(c)){return c}}return qq(LD(a)?WD(a):a,LD(b)?WD(b):b)}
function Q3(a,b,c){var d=a[c];if(d!==undefined){var e=function(){};e.prototype=d;a[b]=new e}else{a[b]={}}}
function hb(b,c){var d=asb(function(){var a=Wf();b.ed(a)});var e=$wnd.requestAnimationFrame(d,c);return {id:e}}
function CL(){return function(a){var b=this.parentNode;b.onfocus&&$wnd.setTimeout(function(){b.focus()},0)}}
function aib(a){this.e=a;this.d=new Knb(this.e.b);this.a=this.d;this.b=$hb(this);this.$modCount=a.$modCount}
function qb(a,b){if(b<=0){throw CD(new qdb('must be positive'))}!!a.d&&ob(a);a.c=true;a.d=Edb(wb(ub(a,a.b),b))}
function Oe(a,b){a.Sc&&(jF(),a.Wc.__listener=null,undefined);!!a.Wc&&me(a.Wc,b);a.Wc=b;a.Sc&&(jF(),DG(a.Wc,a))}
function mR(a){if(a.d.o){a.d.o=false;LV(a.c)}!iV(a.c)&&!a.d.e&&!!a.d.p&&lZ(a.d.p,JU(a.c))&&kZ(a.d.p,JU(a.c))}
function YH(a,b){if(b==a.O){return}!!b&&Ne(b);!!a.O&&XH(a,a.O);a.O=b;if(b){jF();Vg(a.Le(),tF(he(a.O)));Pe(b,a)}}
function oS(a,b){a.b=b;a.a.style[Itb]=(b?(sm(),qm):(sm(),rm)).he();a.d.style[Itb]=(b?(sm(),qm):(sm(),rm)).he()}
function rS(a,b){a.n=b;a.k.style[Itb]=(b?(sm(),qm):(sm(),rm)).he();a.p.style[Itb]=(b?(sm(),qm):(sm(),rm)).he()}
function uS(a,b){a.v=b;a.u.style[Itb]=(b?(sm(),qm):(sm(),rm)).he();a.A.style[Itb]=(b?(sm(),qm):(sm(),rm)).he()}
function xS(a,b){a.H=b;a.G.style[Itb]=(b?(sm(),qm):(sm(),rm)).he();a.J.style[Itb]=(b?(sm(),qm):(sm(),rm)).he()}
function gX(a,b){if(a.R);else{KK(a.sb,b);a._&&(YU(a,a.qc,a.rc)||fW(a,a.qc,a.rc),p1((ng(),mg),new MX(a,false)))}}
function B$(a,b){var c,d;if(a.u.f){IO(a.u);NW(a.W,false)}c=ph(a.W.yc);d=(a.W.yc.scrollTop||0)|0;Aab(a.X,b,c,d)}
function iL(a,b){var c;if(b<0||b>=a.c){throw CD(new ucb)}--a.c;for(c=b;c<a.c;++c){a.a[c]=a.a[c+1]}a.a[a.c]=null}
function KO(a,b){var c,d;d=Cj(II(a.B)).length;for(c=0;c<d;c++){if(Tdb(GI(a.B,c),b)){MI(a.B,c);return}}MI(a.B,0)}
function JT(a,b,c){var d,e,f,g;g=0;for(d=b;d<=c;d++){e=NZ(a.a,d);f=Ueb(hfb(e*a.Lb/72));g+=f;a.W[d-1]=f}return g}
function QI(a,b,c){var d;if(a.i){d=(jF(),$i($doc));pF(a.d,d,b);Vg(d,tF(c))}else{d=mF(a.d);jF();hF.Ce(d,tF(c),b)}}
function mG(){fG();var a,b;if(eG){b=hj($doc);a=gj($doc);if(dG!=b||cG!=a){dG=b;cG=a;ip((!aG&&(aG=new yG),aG))}}}
function Gf(a){var b;if(a!=null){b=a.__java$exception;if(b){return b}}return Sq(a,TypeError)?new Jdb(a):new Mf(a)}
function bfb(a){var b;FD(a,0)<0&&(a=GD(uq(LD(a)?WD(a):a)));return b=YD(TD(a,32)),64-(b!=0?Bdb(b):Bdb(YD(a))+32)}
function lX(a){var b,c;for(c=new aib((new Uhb(a.Kb)).a);c.b;){b=_hb(c);DV(a,b.$f(),b._f());EV(a,b.$f(),b._f())}}
function Seb(a){var b,c;b=Web(a);c=a.a-a.e/Hyb;c<-149||b==0?(b*=0):c>129?(b*=Infinity):(b=fdb(Xeb(a)));return b}
function ocb(c){var a=[];for(var b in c){Object.prototype.hasOwnProperty.call(c,b)&&b!='$H'&&a.push(b)}return a}
function v1(a,b){t1();var c=$wnd.document.elementFromPoint(a,b);c!=null&&c.nodeType==3&&(c=c.parentNode);return c}
function em(){em=hE;dm=new hm;bm=new im;Yl=new jm;Zl=new km;cm=new lm;am=new mm;$l=new nm;Xl=new om;_l=new pm}
function Cqb(){Cqb=hE;zqb=new Dqb('CONCURRENT',0);Aqb=new Dqb('IDENTITY_FINISH',1);Bqb=new Dqb('UNORDERED',2)}
function Jrb(a,b){if(0>a){throw CD(new qdb('fromIndex: 0 > toIndex: '+a))}if(a>b){throw CD(new wcb(Fsb+a+Gsb+b))}}
function pb(a,b){if(b<0){throw CD(new qdb('must be non-negative'))}!!a.d&&ob(a);a.c=false;a.d=Edb(xb(ub(a,a.b),b))}
function Ae(a,b,c){if(!a){throw CD(new Kf(mtb))}b=heb(b);if(b.length==0){throw CD(new qdb(ntb))}c?dh(a,b):sh(a,b)}
function DD(a,b){var c;if(LD(a)&&LD(b)){c=a+b;if(ksb<c&&c<lsb){return c}}return GD(oq(LD(a)?WD(a):a,LD(b)?WD(b):b))}
function PD(a,b){var c;if(LD(a)&&LD(b)){c=a*b;if(ksb<c&&c<lsb){return c}}return GD(sq(LD(a)?WD(a):a,LD(b)?WD(b):b))}
function VD(a,b){var c;if(LD(a)&&LD(b)){c=a-b;if(ksb<c&&c<lsb){return c}}return GD(zq(LD(a)?WD(a):a,LD(b)?WD(b):b))}
function Wfb(a){qfb();if(a<0){if(a!=-1){return new Jfb(-1,-a)}return kfb}else return a<=10?mfb[Vq(a)]:new Jfb(1,a)}
function Bfb(a){var b;if(a.c!=0){return a.c}for(b=0;b<a.a.length;b++){a.c=a.c*33+(a.a[b]&-1)}a.c=a.c*a.e;return a.c}
function z4(a){var b,c,d,e;b=a.childNodes;e=new Ejb;for(c=0;c<b.length;c++){d=b[c];d.nodeType==1&&vjb(e,d)}return e}
function TI(a,b){var c,d;for(d=new akb(a.f);d.a<d.c.a.length;){c=$jb(d);if(Zg((jF(),c.Wc),b)){return c}}return null}
function vU(a){var b;b=new Ejb;wjb(b,new Wib(a.Ac));!!a.T&&wjb(b,new Wib(a.T));!!a.Bc&&wjb(b,new Wib(a.Bc));return b}
function u3(a){var b,c;b=K3(a);c=b.Bf(null,$p(Vp(nB,1),esb,1,5,[]));Oq(c,99)&&a2((!$1&&($1=new i2),$1),a.a);return c}
function r9(a,b,c,d,e,f){var g;i9(a.q,$p(Vp(nB,1),esb,1,5,[(g=[],qob(b,new Jab(g)),g),Edb(c),Edb(d),Edb(e),Edb(f)]))}
function hkb(a,b,c,d,e,f,g){var h;h=c;while(f<g){h>=d||b<c&&Hmb(a[b],a[h])<=0?(e[f++]=a[b++]):(e[f++]=a[h++])}}
function gkb(a,b,c){var d,e,f;for(d=b+1;d<c;++d){for(e=d;e>b&&Hmb(a[e-1],a[e])>0;--e){f=a[e];a[e]=a[e-1];a[e-1]=f}}}
function Cp(a,b,c){var d,e;e=zhb(a.d,b);if(!e){e=new Zmb;Chb(a.d,b,e)}d=e.get(c);if(!d){d=new Ejb;e.put(c,d)}return d}
function V5(a){var b,c;if(a==null||a.length==0||Tdb(ssb,a)){return null}c=mcb(a);b=new DQ;Object.assign(b,c);return b}
function hfb(a){Peb();if(!isNaN(a)&&!isFinite(a)||isNaN(a)){throw CD(new Mdb('Infinite or NaN'))}return new $eb(''+a)}
function HJ(a){if(a.J){_L(a.J.a);a.J=null}if(a.D){_L(a.D.a);a.D=null}if(a.M){a.J=AF(new WJ(a));a.D=TF(new YJ(a))}}
function EY(a){VP(a);CZ((!a.B&&(a.B=new P_),a.B),true);!!a.c&&a.c.clear();a.i.a=Xp(nB,esb,1,0,5,1);!!a.b&&_L(a.b.a)}
function M(a,b){return Tq(a)?Tdb(a,b):Qq(a)?hdb(a,b):Pq(a)?(Mrb(a),Uq(a)===Uq(b)):Nq(a)?a.Xc(b):Zp(a)?J(a,b):mf(a,b)}
function bL(a,b){var c,d,e;d=(jF(),$i($doc));c=(e=Zi($doc),GH(e,a.a),HH(e,a.b),e);Vg(d,tF(c));Vg(a.c,tF(d));oH(a,b,c)}
function OV(a,b){var c,d;c=b.b;d=b.k;Fhb(a.Bc,Zub+c+$ub+d);KV(a,b);c>=a.bb&&c<=a.xb&&d>=a.db&&d<=a.zb&&jM(pU(a,c,d))}
function Dp(a,b,c){var d,e;e=zhb(a.d,b);if(!e){return ykb(),ykb(),vkb}d=e.get(c);if(!d){return ykb(),ykb(),vkb}return d}
function Np(a){var b;b=oh(a,'dir');if(Udb('rtl',b)){return Sp(),Rp}else if(Udb('ltr',b)){return Sp(),Qp}return Sp(),Pp}
function A1(a){t1();var b,c;c=y1(a);if((C0(),!B0&&(B0=new L0),C0(),B0).a.j){b=z1(a);if(b>c&&b<=c+1){return b}}return c}
function D1(a){t1();var b,c;c=B1(a);if((C0(),!B0&&(B0=new L0),C0(),B0).a.j){b=C1(a);if(b>c&&b<=c+1){return b}}return c}
function Edb(a){var b,c;if(a>-129&&a<128){b=a+128;c=(Gdb(),Fdb)[b];!c&&(c=Fdb[b]=new vdb(a));return c}return new vdb(a)}
function Ib(a,b){var c,d,e,f,g;c=new ueb;for(e=b,f=0,g=e.length;f<g;++f){d=e[f];seb(seb(c,a.kd(d)),' ')}return heb(c.a)}
function Egb(a,b,c,d,e){if(b==0||d==0){return}b==1?(e[d]=Ggb(e,c,d,a[0])):d==1?(e[b]=Ggb(e,a,b,c[0])):Fgb(a,c,e,b,d)}
function Q_(a){var b;b=kj($doc);return t1(),(Fh(),a).type.indexOf(Evb)!=-1?Nm(a.changedTouches[0])+b:$h(a.clientX||0)+b}
function R_(a){var b;b=lj($doc);return t1(),(Fh(),a).type.indexOf(Evb)!=-1?Om(a.changedTouches[0])+b:$h(a.clientY||0)+b}
function i_(a,b){a.F=b;a.F?((jF(),a.Wc).className||'').indexOf(Iwb)!=-1||Ae(a.Wc,Iwb,true):Ae((jF(),a.Wc),Iwb,false)}
function C_(a,b){b!=null&&b.length!=0?((jF(),a.Wc).style[ltb]=b,undefined):((jF(),a.Wc).style[ltb]='500.0px',undefined)}
function Z$(a,b){b!=null&&b.length!=0?((jF(),a.Wc).style[ktb]=b,undefined):((jF(),a.Wc).style[ktb]='400.0px',undefined)}
function CJ(a,b,c){var d;a.H=b;a.N=c;b-=ej($doc);c-=fj($doc);d=(jF(),a.Wc);d.style[Dub]=b+(em(),Lub);d.style[Eub]=c+Lub}
function wfb(a,b){var c;if(Uq(a)===Uq(b)){return true}if(Oq(b,11)){c=b;return a.e==c.e&&a.d==c.d&&xfb(a,c.a)}return false}
function jdb(a,b){if(a<b){return -1}if(a>b){return 1}if(a==b){return a==0?jdb(1/a,1/b):0}return isNaN(a)?isNaN(b)?0:1:-1}
function Nqb(a){if(a.b){Nqb(a.b)}else if(a.c){throw CD(new sdb("Stream already terminated, can't be modified or used"))}}
function ffb(a){if(a<tsb){throw CD(new tcb('Overflow'))}else if(a>jsb){throw CD(new tcb('Underflow'))}else{return Vq(a)}}
function V(){W.call(this,(!db&&(db=!!$wnd.requestAnimationFrame&&!!$wnd.cancelAnimationFrame?new eb:new mb),db))}
function uP(a){OK();QK.call(this);this.a=a;this.Tc==-1?wF((jF(),this.Wc),hub|(this.Wc.__eventBits||0)):(this.Tc|=hub)}
function yn(a,b){var c;xn.call(this);this.a=b;!Um&&(Um=new xo);c=vo(Um,a);if(!c){c=new Ejb;wo(Um,a,c)}c.add(this);this.b=a}
function Le(a,b){var c;switch(jF(),AG((Fh(),b).type)){case 16:case 32:c=Eh.Sd(b);if(!!c&&Zg(a.Wc,c)){return}}Xm(b,a,a.Wc)}
function kE(a){var b;if(Array.isArray(a)&&a.kg===lE){return Jcb(O(a))+'@'+(b=Q(a)>>>0,b.toString(16))}return a.toString()}
function uK(){qK();var a;a=zhb(oK,null);if(a){return a}Hhb(oK)==0&&gG(new yK);a=new AK;Chb(oK,null,a);_mb(pK,a);return a}
function Gnb(a,b,c){var d;d=a.a.get(b);a.a.set(b,c===undefined?null:c);if(d===undefined){++a.c;Mmb(a.b)}else{++a.d}return d}
function vgb(a,b,c){var d,e;d=ED(c,Iyb);for(e=0;FD(d,0)!=0&&e<b;e++){d=DD(d,ED(a[e],Iyb));a[e]=YD(d);d=TD(d,32)}return YD(d)}
function qgb(a,b,c){var d,e,f,g;f=0;for(d=b-1;d>=0;d--){g=DD(SD(f,32),ED(a[d],Iyb));e=mgb(g,c);f=YD(TD(e,32))}return YD(f)}
function aY(a,b,c,d,e){var f,g,h;for(g=b;g<=c;g++){for(h=d;h<=e;h++){f=pU(a.a,h,g);!!f&&f.o!=null&&f.o.length!=0&&f.g&&gM(f)}}}
function bY(a,b,c,d,e){var f,g,h;for(g=b;g<=c;g++){for(h=d;h<=e;h++){f=pU(a.a,h,g);!!f&&f.o!=null&&f.o.length!=0&&f.g&&sM(f)}}}
function x$(a,b,c,d,e){var f;f=qP(a.J,d,e,b,c);if(f.col1==b&&f.col2==c&&f.row1==d&&f.row2==e){H9(a.X,d,b,e,c);pb(a.s,200)}}
function GP(a,b,c){var d;d=aeb((Icb(b),b.k),vsb,'.');!a.H&&(a.H={});null==a.H[d]&&(a.H[d]=new Ejb,undefined);a.H[d].add(c)}
function pM(a,b,c,d){a.c=b;a.k=c;a.b=!d?'cs0':d.cellStyle;a.o=!d?null:d.value;a.f=!!d&&d.needsMeasure;rM(a);qM(a);a.g=true}
function ZS(a){var b=a.length;var c=0;var d=0;var e=0;while(c<b){d=a.charCodeAt(c);d>47&&d<58&&(e=e*10+d-48);c++}return e}
function _I(a){var b,c;if(!a.g){for(c=new akb(a.f);c.a<c.c.a.length;){b=$jb(c);if(b.b){aJ(a,b);break}}return true}return false}
function v4(a,b){var c,d,e;for(d=new akb(a.g);d.a<d.c.a.length;){c=$jb(d);e=c.style;e[jvb]='translate3d(0px,'+b+'px,0px)'}}
function x3(a,b){var c,d;d=a;if(b!=null&&b.length!=0){d+='<';for(c=0;c<b.length;c++){c!=0&&(d+=',');d+=''+b[c]}d+='>'}return d}
function Ngb(a,b,c){var d,e;for(e=a.Ie();e.Se();){d=e.Te();if(Uq(b)===Uq(d)||b!=null&&M(b,d)){c&&e.Ue();return true}}return false}
function mqb(a){var b,c;if(a.b){return a.b}c=eqb?null:a.d;while(c){b=eqb?null:c.b;if(b){return b}c=eqb?null:c.d}return rpb(),npb}
function AZ(a){var b,c;if(a.e){if(!a.L){return}c=new e0(a);pb(c,ztb);a.L=false;m1(a);b=L1(Xx);i9(b.J,$p(Vp(nB,1),esb,1,5,[]))}}
function SI(a,b,c){var d;if(!b.b){return}aJ(a,b);if(c&&!!b.a){aJ(a,null);(fI(),eI).Ve((jF(),a.Wc));d=b.a;vg((ng(),mg),new jJ(d))}}
function OD(a,b){var c;if(LD(a)&&LD(b)){c=a%b;if(ksb<c&&c<lsb){return c}}return GD((eq(LD(a)?WD(a):a,LD(b)?WD(b):b,true),aq))}
function Veb(a,b){var c;a.c=b;a.a=Yfb(b);a.a<54&&(a.f=(c=b.d>1?RD(SD(b.a[1],32),ED(b.a[0],Iyb)):ED(b.a[0],Iyb),XD(PD(b.e,c))))}
function dR(a,b,c){var d;d=LZ(a.d,b,c);if(d){a.a=b;a.b=c;b=d.col1;c=d.row1}else{a.a=0;a.b=0}fW(a.c,b,c);nR(a,b,c,(sU(a.c,b,c),d))}
function _Z(a){var b;if(!a.C&&!a.u.f){a.C=true;a.c=true;if(a.t){a.t=false}else{JW(a.W,false,(b=IK(a.u.j),b==null?'':b));GO(a.u)}}}
function Yfb(a){var b,c,d;if(a.e==0){return 0}b=a.d<<5;c=a.a[a.d-1];if(a.e<0){d=zfb(a);if(d==a.d-1){--c;c=c|0}}b-=Bdb(c);return b}
function Sfb(a){var b,c,d;if(a<ofb.length){return ofb[a]}c=a>>5;b=a&31;d=Xp(Zq,fwb,16,c+1,15,1);d[c]=1<<b;return new Lfb(1,c+1,d)}
function MV(a){var b,c,d;for(c=new akb(a);c.a<c.c.a.length;){b=$jb(c);d=Ih((Fh(),b));!!d&&d.removeChild(b)}a.a=Xp(nB,esb,1,0,5,1)}
function zS(a){var b,c;c=KZ(a.F.q,a.e);for(b=a.e+1;b<=a.f;b++){c+=KZ(a.F.q,b)}a.G.style[ltb]=c+1+(em(),Lub);a.a.style[ltb]=c+1+Lub}
function $J(a){if(!a.i){ZJ(a);a.c||uH((qK(),uK()),a.a)}(tJ(),sJ)._e(he(a.a),'rect(auto, auto, auto, auto)');he(a.a).style[Oub]=Utb}
function hcb(){this.b=(vbb(),tbb);this.c=new Zmb;this.c.put('transport',(Zbb(),Xbb).a);this.c.put('fallbackTransport',Vbb.a)}
function Y4(){jI.call(this);(jF(),this.Wc).className='v-label';this.Tc==-1?wF(this.Wc,241|(this.Wc.__eventBits||0)):(this.Tc|=241)}
function fq(a,b){if(a.h==hub&&a.m==0&&a.l==0){b&&(aq=dq(0,0,0));return cq((Iq(),Gq))}b&&(aq=dq(a.l,a.m,a.h));return dq(0,0,0)}
function wU(a){if(a.V==-1){if(a.Lb==0){Xg(a.Mb)&&(a.Lb=(a.Mb.offsetWidth||0)|0);a.Lb==0&&(a.Lb=96)}a.V=Vq(a.a.r*a.Lb/72)}return a.V}
function UY(a,b){var c,d;if(a.a.e){c=(t1(),E1(a.a.e));d=F1(a.a.e)}else{c=(t1(),E1(a.a.f));d=F1(a.a.f)}rZ(v0(a.a.C),new bZ(a,b),c,d)}
function pH(a,b){var c;if(b.Vc!=a){return false}try{Pe(b,null)}finally{c=(jF(),b.Wc);_g((null,Ih((Fh(),c))),c);jL(a.o,b)}return true}
function fkb(a){var b,c,d,e,f;if(a==null){return 0}f=1;for(c=a,d=0,e=c.length;d<e;++d){b=c[d];f=31*f+(b!=null?Q(b):0);f=f|0}return f}
function Mh(a){var b=0;var c=a;while(c.offsetParent){b-=c.scrollTop;c=c.parentNode}while(a){b+=a.offsetTop;a=a.offsetParent}return b}
function Prb(a,b,c){if(a<0||b>c){throw CD(new vcb(Jsb+a+Ksb+b+', size: '+c))}if(a>b){throw CD(new qdb(Jsb+a+' > toIndex: '+b))}}
function FS(a,b){switch(jF(),AG((Fh(),b).type)){case msb:case vub:rV(a.c,b);case 8:case 8192:QW(a.c,b);break;case 64:qV(a.c,b);}}
function mX(a,b){var c,d;if(b){mV(a.jc);mV(a.Pc);mV(a.d);for(d=new akb(a.Lc);d.a<d.c.a.length;){c=$jb(d);!!c&&(c.g=true)}}pb(a.Jb,20)}
function W_(a,b,c){var d,e;if(a.a.K){for(e=new akb(a.a.K);e.a<e.c.a.length;){d=$jb(e);if(d.col1==b&&d.row1==c){return d}}}return null}
function EZ(a,b,c,d){var e;e=new neb;meb(e,$wnd.Math.abs(d-c)+1);e.a+='R';e.a+=' x ';meb(e,$wnd.Math.abs(b-a)+1);e.a+='C';return e.a}
function Bp(a,b,c,d){var e,f,g;e=Dp(a,b,c);f=e.remove(d);f&&e.isEmpty()&&(g=zhb(a.d,b),g.remove(c),g.isEmpty()&&Ehb(a.d,b),undefined)}
function B1(a){t1();if(a.getBoundingClientRect){var b=a.getBoundingClientRect();return b.right-b.left}else{return a.offsetWidth}}
function y1(a){var b;if(a.getBoundingClientRect!=null){var c=a.getBoundingClientRect();b=c.bottom-c.top}else{b=a.offsetHeight}return b}
function Lh(a){var b=0;var c=a;while(c.offsetParent){b-=c.scrollLeft;c=c.parentNode}while(a){b+=a.offsetLeft;a=a.offsetParent}return b}
function $cb(a,b){var c=0;while(!b[c]||b[c]==''){c++}var d=b[c++];for(;c<b.length;c++){if(!b[c]||b[c]==''){continue}d+=a+b[c]}return d}
function $fb(a,b){var c,d,e,f;c=b>>5;b&=31;e=a.d+c+(b==0?0:1);d=Xp(Zq,fwb,16,e,15,1);_fb(d,a.a,c,b);f=new Lfb(a.e,e,d);tfb(f);return f}
function mV(a){var b,c,d,e;for(e=new akb(a);e.a<e.c.a.length;){d=$jb(e);for(c=new akb(d);c.a<c.c.a.length;){b=$jb(c);!!b&&(b.g=true)}}}
function wf(a,b,c){var d,e,f,g,h;for(e=(a.i==null&&(a.i=(Fg(),h=Eg.Ld(a),Hg(h))),a.i),f=0,g=e.length;f<g;++f){d=e[f];b.xe(c+'\tat '+d)}}
function nJ(){nJ=hE;bF();new ZE('data:image/gif;base64,R0lGODlhBQAJAIAAAAAAAAAAACH5BAEAAAEALAAAAAAFAAkAAAIMRB5gp9v2YlJsJRQKADs=')}
function rpb(){rpb=hE;ipb=new wpb;jpb=new zpb;kpb=new Cpb;lpb=new Fpb;mpb=new Ipb;npb=new Lpb;opb=new Opb;ppb=new Rpb;qpb=new Upb}
function $U(a,b,c){return b>=a.bb&&b<=a.xb&&c>=a.db&&c<=a.zb||b<=a.ob&&c<=a.Rc||b>a.ob&&b<=a.xb&&c<=a.Rc||c>a.Rc&&c<=a.zb&&b<=a.ob}
function Lg(){if(Error.stackTraceLimit>0){$wnd.Error.stackTraceLimit=Error.stackTraceLimit=64;return true}return 'stack' in new Error}
function cg(){var a;if(Xf!=0){a=Wf();if(a-$f>2000){$f=a;_f=$wnd.setTimeout(lg,10)}}if(Xf++==0){og((ng(),mg));return true}return false}
function odb(a){var b;b=fdb(a);if(b>3.4028234663852886E38){return Infinity}else if(b<-3.4028234663852886E38){return -Infinity}return b}
function yR(a){if(dV(a.Q,a.e,a.K)){return he(a.X)}if(_U(a.Q,a.e,a.K)){return he(a.a)}if(cV(a.Q,a.e,a.K)){return he(a.W)}return he(a.b)}
function rfb(a,b){if(a.e>b.e){return 1}if(a.e<b.e){return -1}if(a.d>b.d){return a.e}if(a.d<b.d){return -b.e}return a.e*ugb(a.a,b.a,a.d)}
function Xfb(a){qfb();if(FD(a,0)<0){if(FD(a,-1)!=0){return new Mfb(-1,QD(a))}return kfb}else return FD(a,10)<=0?mfb[YD(a)]:new Mfb(1,a)}
function qqb(a,b,c,d){(cqb?b.Qf()>=mqb(a).Qf():dqb?b.Qf()>=(rpb(),800):gqb?b.Qf()>=(rpb(),900):fqb&&b.Qf()>=(rpb(),ztb))&&iqb(a,b,c,d)}
function pqb(a,b,c){(cqb?b.Qf()>=mqb(a).Qf():dqb?b.Qf()>=(rpb(),800):gqb?b.Qf()>=(rpb(),900):fqb&&b.Qf()>=(rpb(),ztb))&&iqb(a,b,c,null)}
function leb(a,b,c){var d,e,f,g;f=b+c;Rrb(b,f,a.length);g='';for(e=b;e<f;){d=$wnd.Math.min(e+10000,f);g+=ieb(a.slice(e,d));e=d}return g}
function Djb(a,b){var c,d;d=a.a.length;b.length<d&&(b=Hrb(new Array(d),b));for(c=0;c<d;++c){b[c]=a.a[c]}b.length>d&&(b[d]=null);return b}
function nkb(a,b){var c,d;d=a.a.length;b.length<d&&(b=Hrb(new Array(d),b));for(c=0;c<d;++c){b[c]=a.a[c]}b.length>d&&(b[d]=null);return b}
function xU(a,b){var c,d;d=0;for(c=new akb(b);c.a<c.c.a.length;){$jb(c);if(!PZ(a.a,d+1)){return Lrb(d,b.a.length),b.a[d]}++d}return null}
function oU(a){var b,c,d;d=a.zb;b=fh(a.yc);for(c=a.jc.a.length-1;c>0;c--){if(fh(yjb(yjb(a.jc,c),0).d)<=b){return d}else{--d}}return a.zb}
function ZT(a){var b,c,d,e;TS(a.Fb);for(d=(e=(new Wib(a.Eb)).a.Sf().Ie(),new _ib(e));d.a.Se();){c=(b=d.a.Te(),b._f());ah(c.d)}Ghb(a.Eb)}
function AY(a,b,c){switch(c.type){case 'IMAGE':uZ((!a.B&&(a.B=new P_),a.B),b,new wI(w0(a.C,b)),c);break;case 'COMPONENT':{ykb();Jkb()}}}
function O0(a){var b;b=$p(Vp(Zq,1),fwb,16,15,[0,0,0,0]);b[0]=N0(a,dvb);b[1]=N0(a,Tvb);b[2]=N0(a,'marginBottom');b[3]=N0(a,cvb);return b}
function Mbb(){Mbb=hE;Jbb=new Nbb('INFO',0);Lbb=new Nbb(Dyb,1);Ibb=new Nbb('ERROR',2);Hbb=new Nbb('CRITICAL',3);Kbb=new Nbb('SYSTEM',4)}
function cdb(a){var b;b=typeof(a);if(Tdb(b,gsb)||Tdb(b,hsb)||Tdb(b,isb)){return true}return a!=null&&a.$implements__java_lang_Comparable}
function Udb(a,b){Mrb(a);if(b==null){return false}if(Tdb(a,b)){return true}return a.length==b.length&&Tdb(a.toLowerCase(),b.toLowerCase())}
function Gcb(a){if(a>=48&&a<48+$wnd.Math.min(10,10)){return a-48}if(a>=97&&a<97){return a-97+10}if(a>=65&&a<65){return a-65+10}return -1}
function OQ(a,b,c){var d;d=a.e.r;!!d&&Oq(d,157)&&oX(d,a,a.k,a.b,b,c);sh((jF(),a.Wc),'c'+a.b+'r'+a.k);a.b=c;a.k=b;dh(a.Wc,'c'+a.b+'r'+a.k)}
function zR(a,b,c){var d,e,f,g;g=v1(b,c);if(g){d=(Fh(),g).getAttribute(utb)||'';YS(a.Q.wb,d);e=a.Q.wb.a;f=a.Q.wb.b;e!=0&&f!=0&&SR(a,e,f)}}
function nbb(){nbb=hE;var b;mbb='8.17.0';b=ceb(mbb,'[-.]',4);gdb(b[0]);gdb(b[1]);try{gdb(b[2])}catch(a){a=BD(a);if(!Oq(a,46))throw CD(a)}}
function zY(a,b){var c,d;for(d=b.keySet().Ie();d.Se();){c=d.Te();a.c.contains(c)?K_((!a.B&&(a.B=new P_),a.B),c,b.get(c)):AY(a,c,b.get(c))}}
function VZ(a,b){var c,d;a.A.length>b?(c=a.A[b]):(c=0);a._.length>b?(d=a._[b]):(d=0);VV(a.W,c,d);(c!=0||d!=0)&&p1((ng(),mg),new a0(a,c,d))}
function NW(a,b){a._=false;a.ab=false;$S(a.$,dwb,0);bf(a.sb,false);KK(a.sb,'');ue(a.sb,'0');pe(a.sb,'');qe(a.sb,'');b&&p1((ng(),mg),new QX(a))}
function FR(a,b,c,d,e){a.G=b;a.I=d;a.H=c;a.J=e;fS(a.B,b,c,d,e);a.ab>0&a.r>0&&fS(a.D,b,c,d,e);a.ab>0&&fS(a.F,b,c,d,e);a.r>0&&fS(a.A,b,c,d,e)}
function Ggb(a,b,c,d){Cgb();var e,f;e=0;for(f=0;f<c;f++){e=DD(PD(ED(b[f],Iyb),ED(d,Iyb)),ED(YD(e),Iyb));a[f]=YD(e);e=UD(e,32)}return YD(e)}
function HS(a,b,c,d,e){jF();hF.Ge(b,Pvb);b.__listener=a;hF.Ge(c,Pvb);c.__listener=a;hF.Ge(d,Pvb);d.__listener=a;hF.Ge(e,Pvb);e.__listener=a}
function pX(a,b,c){var d,e,f;for(e=new akb(b);e.a<e.c.a.length;){d=$jb(e);f=Zub+d.c+$ub+d.k;!!c&&Enb(c.b,f)?mM(d):!!a.r&&Bhb(a.r,f)&&hM(d)}}
function XT(a){var b,c,d,e;for(c=(e=(new Lib(a.t.a)).a.Sf().Ie(),new Rib(e));c.a.Se();){b=(d=c.a.Te(),d.$f());sh(b.d,Xvb)}Ghb(a.t.a);Ghb(a.u.a)}
function kY(a,b){var c;c=Ih((Fh(),b))?XS(jh(Ih(b))):0;if(a.a.ac||c==1){return xZ(a.a.a)}else if(a.a._b||c==2){return wZ(a.a.a)}return false}
function K3(a){var b;b=(!$1&&($1=new i2),$1).c.b[k3(new m3(a,'!new'))];if(!b){throw CD(new q3('There is no constructor for '+a.b))}return b}
function L3(a){var b;b=(!$1&&($1=new i2),$1).c.b[a.b.a+'.'+a.a];if(!b){throw CD(new q3('There is no invoker for '+(a.b.b+'.'+a.a)))}return b}
function N3(a){var b;b=(!$1&&($1=new i2),$1).c.e[a.b.a+'.'+a.a];if(!b){throw CD(new q3('There is no return type for '+(a.b.b+'.'+a.a)))}return b}
function mcb(b){var c;try{return c=$wnd.JSON.parse(b),c}catch(a){a=BD(a);if(Oq(a,21)){throw CD(new pcb("Can't parse "+b))}else throw CD(a)}}
function yP(b){var c,d,e;try{e=LP(b);d=u3(e);return d}catch(a){a=BD(a);if(Oq(a,79)){c=a;throw CD(new tdb(xvb+Kcb(b.ig)+yvb,c))}else throw CD(a)}}
function Nfb(a){qfb();if(a.length==0){this.e=0;this.d=1;this.a=$p(Vp(Zq,1),fwb,16,15,[0])}else{this.e=1;this.d=a.length;this.a=a;tfb(this)}}
function Jfb(a,b){this.e=a;if(b<Kyb){this.d=1;this.a=$p(Vp(Zq,1),fwb,16,15,[b|0])}else{this.d=2;this.a=$p(Vp(Zq,1),fwb,16,15,[b%Kyb|0,b/Kyb|0])}}
function d5(){ZH.call(this);new a5(200,new k5);(jF(),this.Wc).tabIndex=-1;!this.b&&(this.b=y4(this,$p(Vp(ys,1),esb,0,2,[])));H4(this.b,this.Wc)}
function Op(a,b){switch(b.c){case 0:{a['dir']='rtl';break}case 1:{a['dir']='ltr';break}case 2:{Np(a)!=(Sp(),Pp)&&(a['dir']='',undefined);break}}}
function ZJ(a){if(a.i){if(a.a.G){Vg($doc.body,a.a.B);a.f=iG(a.a.C);TJ();a.b=true}}else if(a.b){_g($doc.body,a.a.B);_L(a.f.a);a.f=null;a.b=false}}
function rL(){var a,b;rL=hE;bF();new ZE((ag(),a='__gwtDevModeHook:'+$moduleName+':moduleBase',b=$wnd||self,b[a]||$moduleBase)+'clear.cache.gif')}
function uO(a,b){var c,d,e,f,g;g=new Ejb;for(d=ceb(b,'[^A-z0-9:!]+',0),e=0,f=d.length;e<f;++e){c=d[e];pO(a,c)&&(g.a[g.a.length]=c,true)}return g}
function Q(a){return Tq(a)?$rb(a):Qq(a)?Vq((Mrb(a),a)):Pq(a)?(Mrb(a),a)?1231:1237:Nq(a)?a.Zc():Zp(a)?Urb(a):!!a&&!!a.hashCode?a.hashCode():Urb(a)}
function Mq(a,b){if(Tq(a)){return !!Lq[b]}else if(a.jg){return !!a.jg[b]}else if(Qq(a)){return !!Kq[b]}else if(Pq(a)){return !!Jq[b]}return false}
function HU(a){var b=a.sheet.cssRules?a.sheet.cssRules:a.sheet.rules;var c=[];for(var d=0;d<b.length;d++){c.push(b[d].cssText)}return c.join(' ')}
function TS(a){var b=a.sheet.cssRules?a.sheet.cssRules:a.sheet.rules;while(b.length>0){a.sheet.deleteRule?a.sheet.deleteRule(0):a.sheet.removeRule(0)}}
function sW(a,b){a.ob=b;ER(a.xc,b);b>0?$S(a.$,'.'+a.zc+' .top-left-pane .cell.col'+b+', .'+a.zc+' .bottom-left-pane .cell.col'+b,1):$S(a.$,dwb,1)}
function ZW(a,b,c,d,e){var f,g,h;if(b==16){hI(a.rb,e);g=Zub+c+$ub+d;h=AU(a,g);h?(f=h.d):(f=pU(a,c,d).d);DJ(a.qb,new KX(a,f))}else{HM(a.qb,false)}}
function E_(a,b,c,d){if(a.D){if(a.a!=c){sT(a.V,b,d);qT(a.V,c)}else (a.T==null||!ekb(a.T,b))&&sT(a.V,b,false)}else{gT(a.V,b);qT(a.V,c)}a.T=b;a.a=c}
function TW(a,b,c){var d,e,f;for(e=new akb(b);e.a<e.c.a.length;){d=$jb(e);f=Zub+d.c+$ub+d.k;!!c&&Bhb(c.a,f)?nM(d):!!a.tb&&a.tb.contains(f)&&iM(d)}}
function $rb(a){Yrb();var b,c,d;c=':'+a;d=Xrb[c];if(d!=null){return Vq((Mrb(d),d))}d=Vrb[c];b=d==null?Zrb(a):Vq((Mrb(d),d));_rb();Xrb[c]=b;return b}
function VV(a,b,c){a.Db=false;Ghb(a.e);Ghb(a.pc);Xg(a.Mb)&&(a.Lb=(a.Mb.offsetWidth||0)|0);LV(a);HR(a.xc,1,1,1,1);a.V=-1;p1((ng(),mg),new iY(a,b,c))}
function jg(a,b){ag();var c;c=pf;if(c){if(c==Zf){return}qqb(c.a,(rpb(),ppb),a.Fd(),a);return}if(b){ig(Oq(a,81)?a.Hd():a)}else{zeb();vf(a,yeb,'','')}}
function Jp(a){var b,c,d;Lf.call(this,Kp(a),a.isEmpty()?null:a.Ie().Te());this.a=a;d=0;for(c=a.Ie();c.Se();){b=c.Te();if(d++==0){continue}sf(this,b)}}
function fT(a,b){ZH.call(this);(jF(),a.Wc).style[ltb]='100%';a.Wc.style[ktb]='100%';this.Wc.style[Yub]=jtb;a.Wc.style[Yub]='all';WH(this,a);eT(this,b)}
function bU(a){var b,c,d,e;for(e=a.Rc>0?a.Rc+1:1;e<=a.zb;e++){d=new Ejb;for(c=1;c<=a.ob;c++){b=new uM(a,c,e);Vg(a.c,b.d);d.a[d.a.length]=b}vjb(a.d,d)}}
function hU(a){var b,c,d,e;for(e=1;e<=a.Rc;e++){d=new Ejb;for(c=a.ob>0?a.ob+1:1;c<=a.xb;c++){b=new uM(a,c,e);Vg(a.Oc,b.d);d.a[d.a.length]=b}vjb(a.Pc,d)}}
function Pgb(a,b){var c,d,e,f;f=a.size();b.length<f&&(b=Hrb(new Array(f),b));e=b;d=a.Ie();for(c=0;c<f;++c){e[c]=d.Te()}b.length>f&&(b[f]=null);return b}
function NM(a,b,c){var d;d=(jF(),a.Wc).style;d[cvb]=(DM==-1&&(DM=SM(Dub)),-DM+(em(),Lub));d[dvb]=(EM==-1&&(EM=SM(Eub)),-EM+Lub);CJ(a,b,c);JM(a,a.F?0:1)}
function TU(a,b,c){var d,e,f,g;g=v1(b,c);if(g){d=(Fh(),g).getAttribute(utb)||'';YS(a.wb,d);e=a.wb.a;f=a.wb.b;if(e!=0&&f!=0){v$(a.a,e,f);a.Ic=e;a.Jc=f}}}
function He(a,b,c){var d;d=BF(c.b);d==-1?ve(a,c.b):a.Tc==-1?wF((jF(),a.Wc),d|(a.Wc.__eventBits||0)):(a.Tc|=d);return rp(!a.Uc?(a.Uc=new up(a)):a.Uc,c,b)}
function iq(a,b){var c,d,e;if(b<=22){c=a.l&(1<<b)-1;d=e=0}else if(b<=44){c=a.l;d=a.m&(1<<b-22)-1;e=0}else{c=a.l;d=a.m;e=a.h&(1<<b-44)-1}return dq(c,d,e)}
function yZ(a,b,c){a.C=false;IO(a.u);a.t=false;if(!iV(a.W)){b==null&&(b='');a.Q=Tdb(b.substr(0,1),'=')||Tdb(b.substr(0,1),'+');NW(a.W,c);a.Q||sX(a.W,b)}}
function U5(a){var b,c,d;b=Pqb(_qb(new crb(null,new $ob(T5(a,new p6))),new m6));d=Xp(Yq,esb,16,b.length,15,1);for(c=0;c<b.length;c++){d[c]=b[c]}return d}
function jS(a){var b,c;c=KZ(a.p.q,a.b);for(b=a.b+1;b<=a.c;b++){c+=KZ(a.p.q,b)}a.k.style[ltb]=c+1+(em(),Lub);a.q.style[ltb]=c+1+Lub;a.a.style[ltb]=c+1+Lub}
function Yp(a,b){var c=new Array(b);var d;switch(a){case 14:case 15:d=0;break;case 16:d=false;break;default:return c;}for(var e=0;e<b;++e){c[e]=d}return c}
function _db(a,b,c){var d,e;d=aeb(b,'([/\\\\\\.\\*\\+\\?\\|\\(\\)\\[\\]\\{\\}$^])','\\\\$1');e=aeb(aeb(c,'\\\\','\\\\\\\\'),vsb,'\\\\$');return aeb(a,d,e)}
function fX(a){var b,c;c=oF(he(a.sb));a.rc<=a.Rc?a.qc<=a.ob?(b=a.Mc):(b=a.Oc):a.qc<=a.ob?(b=a.c):(b=a.yc);if(c!=b){_g(c,he(a.sb));jF();Vg(b,tF(he(a.sb)))}}
function m1(a){var b,c,d,e;e=(t0(),t0(),s0);for(c=new akb(e);c.a<c.c.a.length;){b=$jb(c);d=b.a;!a?null:(V0(d,(jF(),a.Wc).tkPid),null);continue}return null}
function NU(a){var b,c,d,e,f;d=a.db;b=ih(a.yc);for(f=new akb(a.jc);f.a<f.c.a.length;){e=$jb(f);c=xU(a,e);if(!!c&&ih(c.d)>=b){return d}else{++d}}return a.db}
function V_(a,b,c){var d,e;if(a.a.K){for(e=new akb(a.a.K);e.a<e.c.a.length;){d=$jb(e);if(d.col1<=b&&d.row1<=c&&d.col2>=b&&d.row2>=c){return d}}}return null}
function qcb(a){var b;if(a==null){return false}b=typeof(a);return Tdb(b,gsb)||Tdb(b,hsb)||Tdb(b,isb)||a.$implements__java_io_Serializable||Array.isArray(a)}
function _J(a){ZJ(a);if(a.i){he(a.a).style[Btb]=Dtb;a.a.N!=-1&&a.a.Qe(a.a.H,a.a.N);tH((qK(),uK()),a.a)}else{a.c||uH((qK(),uK()),a.a)}he(a.a).style[Oub]=Utb}
function dbb(a,b){var c,d;if(b.indexOf('android')==-1){return}c=jbb(b,b.indexOf('android ')+8,b.length);c=jbb(c,0,c.indexOf(';'));d=ceb(c,'\\.',0);hbb(a,d)}
function jU(a,b,c){var d;++b;++c;d=Zub+b+$ub+c;if(Bhb(a.b,d)){a.o=true;a.Q=Ahb(a.b,d);qN(a.Q,true)}else{a.o=true;a.k=b;a.n=c;EW(a,b,c);a.Q=a.q;qN(a.q,true)}}
function IV(a){var b,c,d,e;if(a.Bc){for(e=(c=(new Wib(a.Bc)).a.Sf().Ie(),new _ib(c));e.a.Se();){d=(b=e.a.Te(),b._f());d.e.M&&!!d.d&&$U(d.d,d.b,d.k)&&HQ(d)}}}
function AU(a,b){var c,d,e,f;for(d=(f=(new Wib(a.Eb)).a.Sf().Ie(),new _ib(f));d.a.Se();){c=(e=d.a.Te(),e._f());if(Tdb(b,Zub+c.c+$ub+c.k)){return c}}return null}
function T5(a,b){var c,d,e,f,g;d=new Ejb;if(a==null||a.length==0||Tdb(ssb,a)){return d}e=mcb(a);for(c=0;c<e.length;c++){f=(g=e[c],g);vjb(d,b.Gf(f))}return d}
function nq(a,b){var c,d,e;e=a.h-b.h;if(e<0){return false}c=a.l-b.l;d=a.m-b.m+(c>>22);e+=d>>22;if(e<0){return false}a.l=c&gub;a.m=d&gub;a.h=e&nsb;return true}
function XS(b){try{var c=b.charAt(0);if(c==='r'){c=b.charAt(1);if(c==='h'){return 1}}else if(c==='c'){c=b.charAt(1);if(c==='h'){return 2}}}catch(a){}return 0}
function vK(a){qK();var b;b=zhb(oK,a);if(b){if(!a||(jF(),b.Wc==a)){return b}}Hhb(oK)==0&&gG(new yK);!a?(b=new AK):(b=new rK(a));Chb(oK,a,b);_mb(pK,b);return b}
function LP(b){var c;try{return N3(new m3(new v3(b.ig),'getState'))}catch(a){a=BD(a);if(Oq(a,79)){c=a;throw CD(new tdb(xvb+Kcb(b.ig)+yvb,c))}else throw CD(a)}}
function GR(a,b){if(b==(ke(a.B)||!!a.A&&ke(a.A)||!!a.F&&ke(a.F)||!!a.D&&ke(a.D))){return}hS(a.B,b);!!a.D&&hS(a.D,b);!!a.F&&hS(a.F,b);!!a.A&&hS(a.A,b);IR(a,!b)}
function W1(a,b){var c=a.split('.');while(typeof b==bsb){var d=c.shift();if(!(d in b)){return false}else if(c.length==0){return true}else{b=b[d]}}return false}
function MS(a,b){var c,d;c=vj(b.a);if(a.b._){if(c==13){$Z(a.b.a,(d=IK(a.b.sb),d==null?'':d),wj(b.a))}else{RU(a.b);MO(a.a,true);GO(a.a);NO(a.a);hO(a.a)}}Aj(b.a)}
function oT(a,b){if(b==null){a.f.style[Htb]=(wk(),jtb);a.c.style[Tvb]=(em(),Mub)}else{a.c.style[Tvb]=(em(),'206.0px');a.f.style[Htb]=(wk(),'inline');xh(a.f,b)}}
function sX(a,b){var c,d,e;e=IU(a);(bV(a,a.qc,a.rc)||aV(a,a.qc,a.rc))&&!!e&&kM(e,b);d=a.Rc>0?0:a.bb;for(;d<a.qc;d++){c=pU(a,d,a.rc);!!c&&(c.g=true)}mX(a,false)}
function K0(a){if(!a.b){return false}if(a.a.t==5&&a.a.s&&H0(a)>=534){return false}if(a.a.t==4&&a.a.s&&a.a.u>=6){return false}if(a.a.j){return false}return true}
function HD(a,b){var c;if(LD(a)&&LD(b)){c=a/b;if(ksb<c&&c<lsb){return c<0?$wnd.Math.ceil(c):$wnd.Math.floor(c)}}return GD(eq(LD(a)?WD(a):a,LD(b)?WD(b):b,false))}
function LV(a){var b,c;if(a.R){a.R=false;null.lg().lg();null.lg();null.lg();if(a.Db){c=IU(a);if(c){b=Ahb(a.e,Zub+a.qc+$ub+a.rc);kM(c,!b?null:b.value)}}a.S=null}}
function gbb(a,b){var c,d;if(b.indexOf('os ')==-1||b.indexOf(' like mac')==-1){return}c=jbb(b,b.indexOf('os ')+3,b.indexOf(' like mac'));d=ceb(c,'_',0);hbb(a,d)}
function vM(a,b,c,d){this.n=a;this.c=b;this.k=c;this.d=Oi($doc);if(!d){this.o=null}else{this.f=d.needsMeasure;this.o=d.value;this.b=d.cellStyle}qM(this);rM(this)}
function Bcb(a,b){var c,d;xcb();return Tq(a)?(c=(Mrb(a),a),d=(Mrb(b),b),c==d?0:c<d?-1:1):Qq(a)?jdb((Mrb(a),a),(Mrb(b),b)):Pq(a)?Acb((Mrb(a),a),(Mrb(b),b)):a.ge(b)}
function YV(a){var b,c,d;d=new Ejb;eU(a,a.w,d);c=LT(a);fU(a,d,a.db,a.zb,c);b=KT(a);dU(a,d,a.bb,a.xb,b);a.ob>0&&dU(a,d,1,a.ob,0);a.Rc>0&&fU(a,d,1,a.Rc,0);_V(a.w,d)}
function bhb(a,b){var c,d,e;c=b.$f();e=b._f();d=a.get(c);if(!(Uq(e)===Uq(d)||e!=null&&M(e,d))){return false}if(d==null&&!a.containsKey(c)){return false}return true}
function qq(a,b){var c,d,e,f,g,h,i,j;i=a.h>>19;j=b.h>>19;if(i!=j){return j-i}e=a.h;h=b.h;if(e!=h){return e-h}d=a.m;g=b.m;if(d!=g){return d-g}c=a.l;f=b.l;return c-f}
function gV(a,b){var c,d,e,f;for(d=(f=(new Wib(a.Eb)).a.Sf().Ie(),new _ib(f));d.a.Se();){c=(e=d.a.Te(),e._f());if(Tdb(b,Zub+c.c+$ub+c.k)){return true}}return false}
function GW(a,b,c,d,e,f){var g,h,i,j,k;for(k=e;k<=f;k++){for(g=c;g<=d;g++){j=Zub+g+$ub+k;if(Enb(b.b,j)){gV(a,j)?(h=AU(a,j)):(h=pU(a,g,k));i=Fnb(b.b,j);ET(a,h,i)}}}}
function n5(a){if(a.b){ob(a.b);a.b=null}if((!a.J&&(a.J=yP(a)),a.J).g>=0){a.b=new C5(a);qb(a.b,(!a.J&&(a.J=yP(a)),a.J).g)}else{null.lg(new obb(a.F,(Icb(LA),LA.k)))}}
function DI(a,b){Oe(a,Ri($doc));FF((jF(),a.Wc),pub);a.Tc==-1?wF(a.Wc,133398655|(a.Wc.__eventBits||0)):(a.Tc|=133398655);!!a.a&&(a.Wc[Bub]='',undefined);oj(a.Wc,b.a)}
function HT(a,b,c){var d,e;e=a.Rc>=c.b;d=a.ob>=c.a;e&&d?Vg(a.Mc,(jF(),c.Wc)):e?Vg(a.Oc,(jF(),c.Wc)):d?Vg(a.c,(jF(),c.Wc)):Vg(a.yc,(jF(),c.Wc));Pe(c,a);Dhb(a.Ac,b,c)}
function Ne(a){if(!a.Vc){qK();anb(pK,a)&&sK(a)}else if(Oq(a.Vc,31)){a.Vc.Je(a)}else if(a.Vc){throw CD(new sdb("This widget's parent does not implement HasWidgets"))}}
function R3(a,b){var c;if(zF(b.d)==8){_L(a.e.a);c=w1(b.d);!!a.d&&c==a.d?(a.g=true):oqb(xqb((Icb(gz),gz.k)),'Ignoring mouseup from '+c+' when mousedown was on '+a.d)}}
function dJ(a,b){var c,d,e,f;if(!a.i){return}d=zjb(a.b,b,0);if(d==-1){return}c=a.i?a.d:mF(a.d);f=(jF(),hF.ze(c,d));e=hF.Ae(f);e==2&&_g(f,hF.ze(f,1));b.Wc['colSpan']=2}
function k4(a,b,c){var d,e,f;$wnd.Math.abs(b-c);e=350;e<=0&&(e=1);oqb(xqb((Icb(vz),vz.k)),'Animate '+e+' '+c+' '+b);f=-b+a.n;d=-c+a.n;if(h4){d-=a.n;f-=a.n}w4(a,e,d,f)}
function Mfb(a,b){this.e=a;if(ID(ED(b,-4294967296),0)){this.d=1;this.a=$p(Vp(Zq,1),fwb,16,15,[YD(b)])}else{this.d=2;this.a=$p(Vp(Zq,1),fwb,16,15,[YD(b),YD(TD(b,32))])}}
function ggb(a){var b,c,d;if(FD(a,0)>=0){c=HD(a,iub);d=OD(a,iub)}else{b=UD(a,1);c=HD(b,500000000);d=OD(b,500000000);d=DD(SD(d,1),ED(a,1))}return RD(SD(d,32),ED(c,Iyb))}
function cE(b,c,d,e){bE();var f=_D;$moduleName=c;$moduleBase=d;vD=e;function g(){for(var a=0;a<f.length;a++){f[a]()}}
if(b){try{asb(g)()}catch(a){b(c,a)}}else{asb(g)()}}
function Hg(a){var b,c,d,e;b='Gg';c='Ff';e=$wnd.Math.min(a.length,5);for(d=e-1;d>=0;d--){if(Tdb(a[d].d,b)||Tdb(a[d].d,c)){a.length>=d+1&&a.splice(0,d+1);break}}return a}
function Xm(a,b,c){var d,e,f,g,h;if(Um){h=vo(Um,(Fh(),a).type);if(h){for(g=h.Ie();g.Se();){f=g.Te();d=f.a.a;e=f.a.b;Vm(f.a,a);Wm(f.a,c);Je(b,f.a);Vm(f.a,d);Wm(f.a,e)}}}}
function fbb(b,c){b.u=-1;b.v=-1;if(c.length>2){try{b.u=gdb(c[1])}catch(a){a=BD(a);if(!Oq(a,21))throw CD(a)}try{b.v=gdb(c[0])}catch(a){a=BD(a);if(!Oq(a,21))throw CD(a)}}}
function chb(a,b,c){var d,e,f;for(e=a.Sf().Ie();e.Se();){d=e.Te();f=d.$f();if(Uq(b)===Uq(f)||b!=null&&M(b,f)){if(c){d=new jjb(d.$f(),d._f());e.Ue()}return d}}return null}
function tT(a){var b;if(a.s==0){dh(a.p,Vtb);dh(a.n,Vtb)}else{sh(a.p,Vtb);sh(a.n,Vtb)}b=lT(a,a.u.length-1);if(a.s<b){sh(a.q,Vtb);sh(a.o,Vtb)}else{dh(a.q,Vtb);dh(a.o,Vtb)}}
function ET(a,b,c){var d;if(!b||!c){return}kM(b,null);d=c.Vc;if(d){if(a==d){Vg(b.d,(jF(),c.Wc))}else{Ne(c);Vg(b.d,(jF(),c.Wc));Pe(c,a)}}else{Vg(b.d,(jF(),c.Wc));Pe(c,a)}}
function Kg(a){Fg();var b=a.backingJsObject;if(b&&b.stack){var c=b.stack;var d=b+'\n';c.substring(0,d.length)==d&&(c=c.substring(d.length));return c.split('\n')}return []}
function FZ(a){var b,c;if(a.u.f);else if(a.C||a.t){a.c=true;b=(c=IK(a.u.j),c==null?'':c);n9(a.X,a.W.rc,a.W.qc,b);yZ(a,b,true)}else if(a.o){a.o=false;LV(a.W);CO(a.u,true)}}
function ygb(a,b,c,d,e){var f,g;f=0;for(g=0;g<e;g++){f=DD(f,VD(ED(b[g],Iyb),ED(d[g],Iyb)));a[g]=YD(f);f=TD(f,32)}for(;g<c;g++){f=DD(f,ED(b[g],Iyb));a[g]=YD(f);f=TD(f,32)}}
function XE(){XE=hE;new NE('');TE=new RegExp('[&<>\'"]');RE=new RegExp('&','g');SE=new RegExp('>','g');UE=new RegExp('<','g');WE=new RegExp("'",'g');VE=new RegExp('"','g')}
function Aeb(a,b,c,d,e){zeb();var f,g;Nrb(a,'src');Nrb(c,'dest');O(a);O(c);g=a.length;f=c.length;if(b<0||d<0||e<0||b+e>g||d+e>f){throw CD(new ucb)}e>0&&Drb(a,b,c,d,e,true)}
function dh(a,b){var c,d;b=Dh(b);d=a.className||'';c=Bh(d,b);if(c==-1){d.length>0?(a.className=d+' '+b||'',undefined):(a.className=b||'',undefined);return true}return false}
function bJ(a){var b,c,d;if(!a.g){return}c=zjb(a.f,a.g,0);b=c;while(true){c=c+1;c==a.f.a.length&&(c=0);if(c==b){d=yjb(a.f,b);break}else{d=yjb(a.f,c);if(d.b){break}}}aJ(a,d)}
function cJ(a){var b,c,d;if(!a.g){return}c=zjb(a.f,a.g,0);b=c;while(true){c=c-1;c<0&&(c=a.f.a.length-1);if(c==b){d=yjb(a.f,b);break}else{d=yjb(a.f,c);if(d.b){break}}}aJ(a,d)}
function cR(a,b,c){var d;d=LZ(a.d,b,c);if(d){a.a=b;a.b=c;b=d.col1;c=d.row1}else{a.a=0;a.b=0}SW(a.c,b,c);fW(a.c,b,c);L_(a.d,b,c,null);mR(a);m9(a.d.X,c,b,false);pb(a.d.s,200)}
function o5(a){var b,c,d;d=kh($doc.getElementsByTagName(Uwb)[0],_sb);for(b=0;b<d.length;b++){c=d[b];if(Tdb(Vwb,c.rel)&&Tdb(mwb,c.type)&&Tdb(a,c.href)){return c}}return null}
function keb(a){var b;b=0;while(0<=(b=a.indexOf('\\',b))){Srb(b+1,a.length);a.charCodeAt(b+1)==36?(a=a.substr(0,b)+'$'+deb(a,++b)):(a=a.substr(0,b)+(''+deb(a,++b)))}return a}
function MF(a,b){var c,d,e,f,g;if(!!GF&&!!a&&tp(a,GF)){c=HF.a;d=HF.b;e=HF.c;f=HF.d;IF(HF);JF(HF,b);sp(a,HF);g=!(HF.a&&!HF.b);HF.a=c;HF.b=d;HF.c=e;HF.d=f;return g}return true}
function KR(a,b){if(b==((jF(),a.Wc).style.display!=jtb||!!a.a&&ke(a.a)||!!a.X&&ke(a.X)||!!a.W&&ke(a.W))){return}De(a.Wc,b);!!a.W&&te(a.W,b);!!a.X&&te(a.X,b);!!a.a&&te(a.a,b)}
function p4(a){var b,c,d;if(h4){a.q[Yxb]=a.c}else{for(c=new akb(a.g);c.a<c.c.a.length;){b=$jb(c);d=b.style;d[jvb]='translate3d(0,0,0)'}zh(a.q,a.c)}i4=null;_L(a.d.a);a.d=null}
function iU(a,b){var c,d;a.R=true;$S(a.$,dwb,0);a.S=b;d=IU(a);if(!d){return}kM(d,null);c=d.d;dh(c,'custom-editor-cell');Vg(c,(jF(),null.mg));null.lg();p1((ng(),mg),new QX(a))}
function uN(a,b,c,d){a.c=b;a.d=c;a.b=d;(jF(),a.Wc).style[Itb]=Vtb;!!a.t&&(a.t.style[Itb]=Vtb,undefined);a.i.style[Itb]=(sm(),Vtb);QM(a);a.k=nh(a.Wc,Kub);a.n=nh(a.Wc,itb);nN(a)}
function Z3(a,b){var c,d,e,f;if(!a.a.p){return false}f=rj(b.a)[0];d=$h((Fh(),f).clientX||0)-a.a.w;e=$h(f.clientY||0)-a.a.A;c=d*d+e*e;if(c>a.a.j*a.a.j){return true}return false}
function EU(a){var b,c,d,e;if(a.jc.a.length==0){return a.xb}d=a.xb;b=yjb(a.jc,0);e=b.size();for(c=e-1;c>0;c--){if(hh(b.getAtIndex(c).d)<hh(a.yc)){return d}else{--d}}return a.xb}
function wV(a){var b,c;if(a.Db){b=(a.yc.offsetHeight||0)|0;c=(a.yc.offsetWidth||0)|0;if(b>a.nc||c>a.oc){a.nc=b;a.oc=c;a.Ob=-a.a.j;a.Pb=-a.a.M;_4(a.kc)}else{a.nc=b;a.oc=c}FV(a)}}
function Qgb(a){var b,c,d;d=new epb('[',']');for(c=a.Ie();c.Se();){b=c.Te();dpb(d,b===a?'(this Collection)':b==null?ssb:kE(b))}return !d.a?d.c:d.e.length==0?d.a.a:d.a.a+(''+d.e)}
function gM(a){var b;if(a.i){rM(a);!!a.j&&Vg(a.d,a.j)}b=zhb(a.n.pc,new yM(a.o,a.b,a.k,a.c));if(!b){b=Edb((a.d.scrollWidth||0)|0);Chb(a.n.pc,new yM(a.o,a.b,a.k,a.c),b)}return b.a}
function KG(){HG=asb(PG);IG=asb(QG);var c=eH;var d=EG;c(d,function(a,b){d[a]=asb(b)});var e=GG;c(e,function(a,b){e[a]=asb(b)});c(e,function(a,b){$wnd.addEventListener(a,b,true)})}
function qJ(a,b){oe(this,(jF(),Zi($doc)));re(this,xe(this.Wc)+'-'+Iub,false);wh(this.Wc,a);this.Wc.className='gwt-MenuItem';th(this.Wc,'id',dj($doc));Pd();Cb(kd,this.Wc);this.a=b}
function hX(a,b){var c,d,e,f,g;for(f=(g=(new Wib(a.Eb)).a.Sf().Ie(),new _ib(g));f.a.Se();){e=(c=f.a.Te(),c._f());d=Zub+e.c+$ub+e.k;!!b&&Enb(b.b,d)?mM(e):!!a.r&&Bhb(a.r,d)&&hM(e)}}
function tU(a){var b,c;if(a.K.a.length==0){return 0}b=0;while(PZ(a.a,b+1)){++b}c=new c1;!!a.ib&&a.ib.a.length>0&&b<=a.ib.a.length?_0(c,yjb(a.ib,b)):_0(c,yjb(a.K,b));return Vq(c.b)}
function FU(a){var b,c;if(a.hc.a.length==0){return 0}b=0;while(QZ(a.a,b+1)){++b}c=new c1;!!a.jb&&a.jb.a.length>0&&b<=a.jb.a.length?_0(c,yjb(a.jb,b)):_0(c,yjb(a.hc,b));return Vq(c.e)}
function hW(a,b){var c,d,e;if(!!a.ib&&a.ib.a.length>b-1){_mb(a.tc,Edb(b));d=yjb(a.ib,b-1);dh(d,$vb)}else{_mb(a.sc,Edb(b));e=b-a.bb;if(e>=0&&a.K.a.length>e){c=yjb(a.K,e);dh(c,$vb)}}}
function iW(a,b){var c,d;if(!!a.jb&&a.jb.a.length>b-1){_mb(a.uc,Edb(b));c=yjb(a.jb,b-1);dh(c,Zvb)}else{_mb(a.vc,Edb(b));d=b-a.db;if(d>=0&&a.hc.a.length>d){c=yjb(a.hc,d);dh(c,Zvb)}}}
function Jgb(a,b){Cgb();var c,d;d=(qfb(),lfb);c=a;for(;b>1;b>>=1){(b&1)!=0&&(d=Dfb(d,c));c.d==1?(c=Dfb(c,c)):(c=new Nfb(Lgb(c.a,c.d,Xp(Zq,fwb,16,c.d<<1,15,1))))}d=Dfb(d,c);return d}
function Bnb(){function b(){try{return (new Map).entries().next().done}catch(a){return false}}
if(typeof Map==='function'&&Map.prototype.entries&&b()){return Map}else{return Cnb()}}
function nT(a,b){if(a.s<b){do{a.t-=mT(a,a.s);++a.s}while(a.s<b);a.c.style[cvb]=a.t+(em(),Lub)}else if(a.s>b){do{--a.s;a.t+=mT(a,a.s)}while(a.s>b);a.c.style[cvb]=a.t+(em(),Lub)}tT(a)}
function L1(a){K1();oqb(J1,(Icb(a),'asking for '+a.k));if(Xx==a){oqb(J1,(Icb(tA),'Returning '+tA.k+' from fake RpcProxy'));return new Cab}throw CD(new sdb(''+a+' is not supported'))}
function yg(b,c){var d,e,f,g;for(e=0,f=b.length;e<f;e++){g=b[e];try{g[1]?g[0].Id()&&(c=xg(c,g)):g[0].Jd()}catch(a){a=BD(a);if(Oq(a,18)){d=a;ag();jg(d,true)}else throw CD(a)}}return c}
function LR(a){var b;if(a._){!!a.$&&HM(a.$,false);a.$=new fN;MM(a.$,a.Q.a);re(a.$,Ivb,true);b=new eJ;OI(b,new pJ(new NE(LE(new ME).a.a),new ZR(a)));WH(a.$,b);p1((ng(),mg),new _R(a))}}
function L6(a){this.c=new Zmb;this.a=new Zmb;this.b=new Zmb;this.d=Xp(tB,wsb,2,0,6,1);!!a&&(this.e=new JY,GY(this.e,a),zP(this.e,new y0),this.f=QP(this.e),tH(vK(a),this.f),undefined)}
function Zfb(a,b){var c,d,e;e=a.e;if(b==0||a.e==0){return}d=b>>5;a.d-=d;if(!cgb(a.a,a.d,a.a,d,b&31)&&e<0){for(c=0;c<a.d&&a.a[c]==-1;c++){a.a[c]=0}c==a.d&&++a.d;++a.a[c]}tfb(a);a.b=-2}
function _fb(a,b,c,d){var e,f,g;if(d==0){Aeb(b,0,a,c,a.length-c)}else{g=32-d;a[a.length-1]=0;for(f=a.length-1;f>c;f--){a[f]|=b[f-c-1]>>>g;a[f-1]=b[f-c-1]<<d}}for(e=0;e<c;e++){a[e]=0}}
function sf(a,b){Nrb(b,'Cannot suppress a null exception.');Irb(b!=a,'Exception can not suppress itself.');if(a.g){return}a.j==null?(a.j=$p(Vp(vB,1),esb,18,0,[b])):(a.j[a.j.length]=b)}
function eg(b,c,d){var e,f;e=cg();try{if(pf){try{return bg(b,c,d)}catch(a){a=BD(a);if(Oq(a,18)){f=a;jg(f,true);return undefined}else throw CD(a)}}else{return bg(b,c,d)}}finally{fg(e)}}
function qT(a,b){var c,d;a.r!=-1&&sh(a.u[a.r],Uvb);a.r=b-1;c=a.u[a.r];dh(c,Uvb);if(a.s>a.r){nT(a,a.r)}else if(hh(a.k)<(Fh(),Eh).Vd(c)+((c.offsetWidth||0)|0)&&!a.d){d=lT(a,a.r);nT(a,d)}}
function a2(a,b){var c,d,e;if(a.b.a.length!=0){for(d=new akb(a.b);d.a<d.c.a.length;){c=$jb(d);e=null.lg();if(Tdb(b.substr(0,e.length),e)){c2(a,null.mg+' '+null.mg);Cjb(a.b,c);return}}}}
function sp(b,c){var d,e;!c.e||c.le();e=c.f;Rm(c,b.b);try{Ap(b.a,c)}catch(a){a=BD(a);if(Oq(a,87)){d=a;throw CD(new Lp(d.a))}else throw CD(a)}finally{e==null?(c.e=true,c.f=null):(c.f=e)}}
function SM(b){try{var c=$wnd.document.body;var d=c.currentStyle?c.currentStyle:getComputedStyle(c);if(d&&d.position=='relative'){return c.getBoundingClientRect()[b]}}catch(a){}return 0}
function iX(a,b){var c,d,e,f,g;for(f=(g=(new Wib(a.Eb)).a.Sf().Ie(),new _ib(g));f.a.Se();){e=(c=f.a.Te(),c._f());d=Zub+e.c+$ub+e.k;!!b&&Bhb(b.a,d)?nM(e):!!a.tb&&a.tb.contains(d)&&iM(e)}}
function r0(){var a=document.createElement(Qwb);var b=['animation','oAnimation','mozAnimation','webkitAnimation'];for(var c=0;c<b.length;c++){if(a.style[b[c]]!==undefined){return b[c]}}}
function jeb(a){var b,c;if(a>=xsb){b=55296+(a-xsb>>10&1023)&ysb;c=56320+(a-xsb&1023)&ysb;return String.fromCharCode(b)+(''+String.fromCharCode(c))}else{return String.fromCharCode(a&ysb)}}
function Zpb(a,b){var c,d,e,f;c=Ahb(a.a,b);if(!c){d=new wqb(b);e=(hqb(),eqb)?null:d.c;f=eeb(e,0,$wnd.Math.max(0,Ydb(e,jeb(46))));sqb(d,Zpb(a,f));Dhb(a.a,eqb?null:d.c,d);return d}return c}
function kX(a,b){var c,d,e,f;e=Zub+b.col1+$ub+b.row1;f=zhb(a.Eb,Edb(b.id));Ehb(a.Kb,b);jX(a,b,f);d=f.d;if(Bhb(a.b,e)){c=Ahb(a.b,e);Tdb(Ej(d.style),(wk(),jtb))?(HM(c,false),ah(c.i)):nN(c)}}
function I1(a,b,c){var d,e,f,g,h;for(f=(Mbb(),$p(Vp(GA,1),esb,77,0,[Jbb,Lbb,Ibb,Hbb,Kbb])),g=0,h=f.length;g<h;++g){e=f[g];d=b+'-'+feb(e.b!=null?e.b:''+e.c,(lob(),job));c==e?dh(a,d):sh(a,d)}}
function Xmb(){Xmb=hE;Vmb=$p(Vp(tB,1),wsb,2,6,['Sun','Mon','Tue','Wed','Thu','Fri','Sat']);Wmb=$p(Vp(tB,1),wsb,2,6,['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'])}
function fE(){eE={};!Array.isArray&&(Array.isArray=function(a){return Object.prototype.toString.call(a)==='[object Array]'});function b(){return (new Date).getTime()}
!Date.now&&(Date.now=b)}
function heb(a){var b,c,d;c=a.length;d=0;while(d<c&&(Srb(d,a.length),a.charCodeAt(d)<=32)){++d}b=c;while(b>d&&(Srb(b-1,a.length),a.charCodeAt(b-1)<=32)){--b}return d>0||b<c?a.substr(d,b-d):a}
function dL(){qH.call(this);this.d=(jF(),_i($doc));this.c=Yi($doc);Vg(this.d,tF(this.c));ne(this,this.d);this.a=(oI(),lI);this.b=(rI(),qI);this.d['cellSpacing']='0';this.d['cellPadding']='0'}
function L0(){C0();var a;this.a=new lbb(M0());if(this.a.j){a=F0();a!=-1&&kbb(this.a,a)}this.a.e?(this.b=bub in window):this.a.j?(this.b=!!navigator.msMaxTouchPoints):(this.b=!this.a.p&&D0())}
function n2(c){var d={setter:function(a,b){a.n=zcb(b)},getter:function(a){return Ccb(a.n)}};c.Df(NA,Vxb,d);var d={setter:function(a,b){a.nb=b},getter:function(a){return a.nb}};c.Df(uA,ltb,d)}
function l4(a){var b,c,d,e,f;if(a.k<3){oqb(xqb((Icb(vz),vz.k)),'Not enough data for speed calculation');return 0}d=a.k%3;b=a.s[d];c=a.b[d];d+=3;--d;d=d%3;e=a.s[d];f=a.b[d];return (b-e)/(f-c)}
function BH(b,c){zH();var d,e,f,g;d=null;for(g=b.Ie();g.Se();){f=g.Te();try{c.Ke(f)}catch(a){a=BD(a);if(Oq(a,18)){e=a;!d&&(d=new cnb);Chb(d.a,e,d)}else throw CD(a)}}if(d){throw CD(new AH(d))}}
function B3(a,b,c){var d,e,f,g;d=(!$1&&($1=new i2),$1).c.d[(new v3(b)).b];if(!d){d={};a.d[(new v3(b)).b]=d}for(f=new tlb(c.c.b.Ie());f.b.Se();){e=f.b.Te();g=d[e];if(!g){g=[];d[e]=g}g.push(c)}}
function Zbb(){Zbb=hE;Xbb=new $bb('WEBSOCKET',0,'websocket');Ybb=new $bb('WEBSOCKET_XHR',1,'websocket-xhr');Wbb=new $bb('STREAMING',2,'streaming');Vbb=new $bb('LONG_POLLING',3,'long-polling')}
function rM(a){a.d.style[Oub]=(nl(),Vtb);if(a.o==null||a.o.length==0){xh(a.d,'');a.d.style[Jtb]=''}else{a.d.style[Jtb]='1';a.f&&a.af()>0&&nV(a.n,a.b,a.o)>a.af()?xh(a.d,'###'):xh(a.d,a.o)}fM(a)}
function XP(a,b,c,d){var e,f;Tdb(c.substr(0,1),'-')?(f='-'.length,Tdb(b.substr(b.length-f,f),'-')&&beb(c,'-','')):(e='-'.length,Tdb(b.substr(b.length-e,e),'-')||(b+='-'));a.tf().od(b+(''+c),d)}
function $S(a,b,c){if(!a.sheet.cssRules[c]){return -1}var d=a.sheet.cssRules[c].selectorText;var e=a.sheet.cssRules[c].cssText.replace(d,b);a.sheet.deleteRule(c);return a.sheet.insertRule(e,c)}
function fdb(a){ddb==null&&(ddb=new RegExp('^\\s*[+-]?(NaN|Infinity|((\\d+\\.?\\d*)|(\\.\\d+))([eE][+-]?\\d+)?[dDfF]?)\\s*$'));if(!ddb.test(a)){throw CD(new Mdb(rsb+a+'"'))}return parseFloat(a)}
function wq(a,b){var c,d,e;b&=63;if(b<22){c=a.l<<b;d=a.m<<b|a.l>>22-b;e=a.h<<b|a.m>>22-b}else if(b<44){c=0;d=a.l<<b-22;e=a.m<<b-22|a.l>>44-b}else{c=0;d=0;e=a.l<<b-44}return dq(c&gub,d&gub,e&nsb)}
function YS(h,a){var b=a.length;var c=0;var d=0;var e=0;var f=0;var g=0;while(c<b){d=a.charCodeAt(c);d===32?(e=e+1):d>47&&d<58&&(e===0?(g=g*10+d-48):(f=f*10+d-48));if(e===2){break}c++}h.b=f;h.a=g}
function Pe(a,b){var c;c=a.Vc;if(!b){try{!!c&&c.td()&&a.wd()}finally{a.Vc=null}}else{if(c){throw CD(new sdb('Cannot set a new parent without first clearing the old parent'))}a.Vc=b;b.td()&&a.ud()}}
function KI(a,b,c,d){var e,f,g,h;h=(jF(),a.Wc);g=Ui($doc);g.text=b;g.removeAttribute(Hub);g.value=c;f=(Fh(),h).options.length;(d<0||d>f)&&(d=f);if(d==f){Nh(h,g,null)}else{e=h.options[d];Nh(h,g,e)}}
function FN(a,b){if(a.b==b){return}if(b){a.a.innerHTML='+';Ae((jF(),a.Wc),'minus',false);Ae(a.Wc,'plus',true)}else{a.a.innerHTML='&#x2212;';Ae((jF(),a.Wc),'plus',false);Ae(a.Wc,'minus',true)}a.b=b}
function lT(a,b){var c;c=((a.k.offsetWidth||0)|0)-((a.i.offsetWidth||0)|0);Tdb(Ej(a.f.style),jtb)||(c-=(a.f.offsetWidth||0)|0);c=Vq(c-mT(a,b));while(b>0&&c-mT(a,b-1)>0){--b;c=Vq(c-mT(a,b))}return b}
function VT(a){var b,c,d,e;kN(a.q);for(c=(e=(new Wib(a.b)).a.Sf().Ie(),new _ib(e));c.a.Se();){b=(d=c.a.Te(),d._f());HM(b,false);ah(b.i)}Ghb(a.b);!!a.r&&Ghb(a.r);!!a.i&&Ghb(a.i);!!a.tb&&a.tb.clear()}
function jO(a){var b,c,d,e;for(c=(e=(new Lib(a.F.a)).a.Sf().Ie(),new Rib(e));c.a.Se();){b=(d=c.a.Te(),d.$f());b.d.style[ovb]='';b.d.style[pvb]=''}Ghb(a.F.a);a.i.a=Xp(nB,esb,1,0,5,1);Ghb(a.D);$g(a.r)}
function jkb(a,b,c,d,e){var f,g,h,i;f=d-c;if(f<7){gkb(b,c,d);return}h=c+e;g=d+e;i=h+(g-h>>1);jkb(b,a,h,i,-e);jkb(b,a,i,g,-e);if(Hmb(a[i-1],a[i])<=0){while(c<d){b[c++]=a[h++]}return}hkb(a,h,i,g,b,c,d)}
function Pf(a){var b;if(a.c==null){b=Uq(a.b)===Uq(Nf)?null:a.b;a.d=b==null?ssb:Rq(b)?b==null?null:b.name:Tq(b)?'String':Jcb(O(b));a.a=a.a+': '+(Rq(b)?b==null?null:b.message:b+'');a.c='('+a.d+') '+a.a}}
function cgb(a,b,c,d,e){var f,g,h;f=true;for(g=0;g<d;g++){f=f&c[g]==0}if(e==0){Aeb(c,d,a,0,b);g=b}else{h=32-e;f=f&c[g]<<h==0;for(g=0;g<b-1;g++){a[g]=c[g+d]>>>e|c[g+d+1]<<h}a[g]=c[g+d]>>>e;++g}return f}
function vf(a,b,c,d){var e,f,g,h,i;b.xe(d+c+a);wf(a,b,d);for(f=(a.j==null&&(a.j=Xp(vB,esb,18,0,0,1)),a.j),g=0,h=f.length;g<h;++g){e=f[g];vf(e,b,'Suppressed: ','\t'+d)}i=a.e;!!i&&vf(i,b,'Caused by: ',d)}
function yq(a,b){var c,d,e,f;b&=63;c=a.h&nsb;if(b<22){f=c>>>b;e=a.m>>b|c<<22-b;d=a.l>>b|a.m<<22-b}else if(b<44){f=0;e=c>>>b-22;d=a.m>>b-22|a.h<<44-b}else{f=0;e=0;d=c>>>b-44}return dq(d&gub,e&gub,f&nsb)}
function aK(a,b){var c,d,e,f,g,h;a.i||(b=1-b);g=0;e=0;f=0;c=0;d=Vq(b*a.d);h=Vq(b*a.e);switch(0){case 0:g=a.d-d>>1;e=a.e-h>>1;f=e+h;c=g+d;}(tJ(),sJ)._e(he(a.a),'rect('+g+'px, '+f+'px, '+c+'px, '+e+'px)')}
function FP(a,b){var c,d,e,f,g,h,i,j,k;a.qf(EP(a));c=M3(a.ig);if(c){e=new cnb;k=Y0(c);for(d=0;d<k.length;d++){j=k[d];if(b.Af(j)){i=c[j];for(f=0;f<i.length;f++){g=i[f];h=Chb(e.a,g,e);h==null&&r3(g,b)}}}}}
function wR(a,b,c,d){var e,f;f=0;e=0;if(c<0){if(b>1){while(b>1&&e>c){--b;e-=a[b-1]}d&&e<c&&++b;f=b}else{f=1}}else{if(b<a.length){while(b<=a.length&&e<c){e+=a[b-1];++b}f=b}else{f=a.length}}return d?f:f-1}
function G0(a){if(a.a.t==5){return 'v-android'}else if(a.a.t==4){return 'v-ios v-ios'+a.a.u}else if(a.a.t==1){return 'v-win'}else if(a.a.t==3){return 'v-lin'}else if(a.a.t==2){return 'v-mac'}return null}
function VI(a,b,c){var d,e;if(c<0||c>a.b.a.length){throw CD(new ucb)}ujb(a.b,c,b);e=0;for(d=0;d<c;d++){Oq(yjb(a.b,d),97)&&++e}ujb(a.f,e,b);QI(a,c,(jF(),b.Wc));re(b,xe(b.Wc)+'-'+Iub,false);dJ(a,b);return b}
function NS(a,b,c){var d;a.b=b;a.a=c;d=b.sb;He(d,a,(An(),An(),zn));He(d,a,(_m(),_m(),$m));He(d,a,(On(),On(),Nn));He(d,a,(Hn(),Hn(),Gn));He(d,a,(gn(),gn(),fn));He(d,a,(io(),io(),ho));He(d,a,(po(),po(),oo))}
function W5(a,b,c){var d,e,f,g,h,i,j,k;if(a==null||a.length==0||Tdb(ssb,a)){return null}f=mcb(a);d=new Zmb;for(e=0;e<(i=ocb(f),i).length;e++){g=(h=ocb(f),h)[e];j=(k=f[g],k);Chb(d,b.Gf(g),c.Gf(j))}return d}
function GS(a,b){var c,d,e;d=zX(b);e=(Fh(),d).getAttribute(utb)||'';if(jh(Ih(d)).indexOf(Nvb)!=-1&&e!=null&&e.indexOf(Ovb)!=-1){c=a.c.wb;if(XS(e)==0){YS(c,e);YZ(a.c.a,c.a,c.b,Eh.$d(d))}b.stopPropagation()}}
function oV(a){var b,c;b=-ph(a.yc);c=-((a.yc.scrollTop||0)|0);a.Oc.style[cvb]=b+(em(),Lub);a.I.style[cvb]=b+Lub;a.c.style[dvb]=c+Lub;a.fc.style[dvb]=c+Lub;a.D.style[cvb]=b-a.g+Lub;a.bc.style[dvb]=c-a.f+Lub}
function G1(a,b){t1();if(!b){a.ondrag=function(){return false};a.onselectstart=function(){return false};a.style.webkitUserSelect=jtb}else{a.ondrag=null;a.onselectstart=null;a.style.webkitUserSelect='text'}}
function i9(b,c){if(!b){return}var d=[];for(var e=0;e<c.length;e++){var f=c[e];var g=Object.getOwnPropertyNames(f).find(function(a){return /^(a|value_0|value.*g\$)$/.test(a)});var h=g?f[g]:f;d.push(h)}b(d)}
function UW(a){var b,c,d,e,f;if(!a.tb){return}if(a.b){for(d=new aib((new Uhb(a.b)).a);d.b;){c=_hb(d);f=c.$f();b=c._f();e=a.tb.contains(f)?a.ub:null;rN(b,e)}}if(a.q){e=a.tb.contains(a.j)?a.ub:null;rN(a.q,e)}}
function EV(a,b,c){var d,e,f;if(b.col1<=a.ob&&b.col2>a.ob){d=a.a.g;f=xR(d,b.col1,a.ob+1);e=xR(d,a.ob+1,b.col2+1)-ph(a.yc)+1;if(e>0){f+=e;c.d.style[rvb]=''}else{c.d.style[rvb]='0'}c.d.style[ltb]=f+(em(),Lub)}}
function HY(a){if(!(!a.J&&(a.J=new j0),a.J).c){U$((!a.B&&(a.B=new P_),a.B),null)}else if(!(!a.B&&(a.B=new P_),a.B).p){!a.d&&(a.d=new mZ(a));U$((!a.B&&(a.B=new P_),a.B),a.d)}else{UZ((!a.B&&(a.B=new P_),a.B))}}
function ibb(b,c){var d,e;d=Vdb(c,jeb(46));d<0&&(d=c.length);b.b=gdb(jbb(c,0,d));e=Wdb(c,jeb(46),d+1);e<0&&(e=c.length);try{b.c=gdb(aeb(jbb(c,d+1,e),'[^0-9].*',''))}catch(a){a=BD(a);if(!Oq(a,46))throw CD(a)}}
function RI(a){var b,c,d;aJ(a,null);b=a.i?a.d:mF(a.d);while(jF(),hF.Ae(b)>0){_g(b,hF.ze(b,0))}for(d=new akb(a.b);d.a<d.c.a.length;){c=$jb(d);c.Wc['colSpan']=1}a.f.a=Xp(nB,esb,1,0,5,1);a.b.a=Xp(nB,esb,1,0,5,1)}
function wk(){wk=hE;lk=new zk;dk=new Vk;gk=new Xk;hk=new Zk;jk=new _k;kk=new bl;mk=new dl;nk=new fl;ok=new hl;rk=new Bk;tk=new Dk;sk=new Fk;vk=new Hk;pk=new Jk;qk=new Lk;uk=new Nk;fk=new Pk;ek=new Rk;ik=new Tk}
function hL(a,b,c){var d,e,f;if(c<0||c>a.c){throw CD(new ucb)}if(a.c==a.a.length){f=Xp(_v,esb,13,a.a.length*2,0,1);for(e=0;e<a.a.length;++e){f[e]=a.a[e]}a.a=f}++a.c;for(d=a.c-1;d>c;--d){a.a[d]=a.a[d-1]}a.a[c]=b}
function p0(a,b){l0();if(a._vaadin_animationend_callbacks){var c=a._vaadin_animationend_callbacks;for(var d=0;d<c.length;d++){if(c[d].listener==b){a.removeEventListener(k0,c[d],false);return true}}return false}}
function lb(a){var b,c,d,e,f,g;b=Xp(dr,{729:1,3:1},175,a.a.a.length,0,1);b=Djb(a.a,b);c=new of;for(e=b,f=0,g=e.length;f<g;++f){d=e[f];Cjb(a.a,d);ab(d.a,c.a)}a.a.a.length>0&&pb(a.b,$wnd.Math.max(5,16-(Wf()-c.a)))}
function Kp(a){var b,c,d,e,f;c=a.size();if(c==0){return null}b=new web(c==1?'Exception caught: ':c+' exceptions caught: ');d=true;for(f=a.Ie();f.Se();){e=f.Te();d?(d=false):(b.a+='; ',b);seb(b,e.Fd())}return b.a}
function XN(a,b){OK();PK.call(this,aj($doc));(jF(),this.Wc).className='gwt-TextArea';this.c=a;this.a=b;this.Wc.style[Btb]=(yl(),Dtb);this.Wc.style[Jtb]='1';this.Wc.style[Dub]=(em(),'-1000.0px');Ij(this.Wc.style)}
function zU(a){var b,c,d,e,f,g;g=a.bb;b=gh(a.yc);e=new Ejb;f=0;for(f=0;f<a.jc.a.length;f++){QZ(a.a,f+1)||(e=yjb(a.jc,f))}for(d=new akb(e);d.a<d.c.a.length;){c=$jb(d);if(gh(c.d)>=b){return g}else{++g}}return a.bb}
function QW(a,b){PW(a);CF(a.yc);(a.qc!=a.Ic||a.rc!=a.Jc)&&a.Ic!=-1&&a.Jc!=-1?h$(a.a,a.qc,a.Ic,a.rc,a.Jc):XZ(a.a,a.Ic,a.Jc,(mh(zX(b)),!!(Fh(),b).shiftKey),!!b.metaKey||!!b.ctrlKey,true);a.wc=false;a.Ic=-1;a.Jc=-1}
function jqb(a,b){var c,d,e,f,g,h,i,j;for(e=nqb(a),g=0,i=e.length;g<i;++g){c=e[g];c.we(b)}j=!eqb&&a.e?eqb?null:a.d:null;while(j){for(d=nqb(j),f=0,h=d.length;f<h;++f){c=d[f];c.we(b)}j=!eqb&&j.e?eqb?null:j.d:null}}
function oN(a,b){hI(a.a,b);lN(a.a);ke(a.f)&&(ke(a.a)||ke(a.g)||Tdb((wk(),Ntb),Ej(a.e.style)))?(je(a.f).className||'').indexOf(kvb)!=-1||re(a.f,kvb,true):(je(a.f).className||'').indexOf(kvb)!=-1&&re(a.f,kvb,false)}
function pN(a,b){hI(a.g,b);lN(a.g);ke(a.f)&&(ke(a.a)||ke(a.g)||Tdb((wk(),Ntb),Ej(a.e.style)))?(je(a.f).className||'').indexOf(kvb)!=-1||re(a.f,kvb,true):(je(a.f).className||'').indexOf(kvb)!=-1&&re(a.f,kvb,false)}
function rN(a,b){hI(a.f,b);lN(a.f);ke(a.f)&&(ke(a.a)||ke(a.g)||Tdb((wk(),Ntb),Ej(a.e.style)))?(je(a.f).className||'').indexOf(kvb)!=-1||re(a.f,kvb,true):(je(a.f).className||'').indexOf(kvb)!=-1&&re(a.f,kvb,false)}
function WP(a,b){a.tf().od('v-disabled',!b);Oq(a.tf(),73)&&a.tf().zd(b);Oq(a,135)||uqb(xqb((Icb(mz),mz.k)),'Parent of connector '+n1(a)+' is null. This is typically an indication of a broken component hierarchy')}
function QV(a,b,c,d,e){var f,g,h,i;XT(a);for(i=d;i<=e;i++){for(f=b;f<=c;f++){if(a.qc!=f||a.rc!=i){g=pU(a,f,i);_mb(a.u,new pY(f,i));if(g){_mb(a.t,g);dh(g.d,Xvb)}h=AU(a,Zub+f+$ub+i);if(h){_mb(a.t,h);dh(h.d,Xvb)}}}}}
function P1(a,b){if(a.b){return true}else if(a.c){return W1(b,a.c)}else{if(a.a){return Z0(a.a,b)}else{throw CD(new sdb('StateChangeEvent should have either stateJson, changedProperties or changePropertiesSet'))}}}
function sh(a,b){var c,d,e,f,g;b=Dh(b);g=a.className||'';e=Bh(g,b);if(e!=-1){c=heb(g.substr(0,e));d=heb(deb(g,e+b.length));c.length==0?(f=d):d.length==0?(f=c):(f=c+' '+d);a.className=f||'';return true}return false}
function hT(a){var b,c,d;a.d=false;ah(a.g);c=a.u[a.r];c.style[ltb]='';d=a.g.value;if(vT(d)&&!Tdb(a.b,d)){for(b=0;b<a.u.length;b++){if(Tdb(d,mh(a.u[b]))){rT(c,a.b);return}}A$(a.e,a.r,d);rT(c,d);tT(a)}else{rT(c,a.b)}}
function MW(a,b){var c,d;CF((jF(),a.Wc));a.Tb.className=kwb;sh(a.Ub,Zub+a.Zb);he(a.xc).style[cvb]='';if(a.Yb){c=new Zmb;d=b-a.Rb;d<0&&(d=0);d!=KZ(a.a,a.Zb)&&Chb(c,Edb(a.Zb),Edb(d));c.a.c+c.b.c==0||g$(a.a,c)}a.Zb=-1}
function onb(a,b,c){var d,e,f,g,h;h=b==null?0:(g=Q(b),g|0);e=(d=a.a.get(h),d==null?new Array:d);if(e.length==0){a.a.set(h,e)}else{f=lnb(b,e);if(f){return f.ag(c)}}e[e.length]=new jjb(b,c);++a.c;Mmb(a.b);return null}
function CE(a,b){var c,d,e;c=new ueb;seb(c,(d=new Pmb(b.c),e=new ueb,seb(e,Omb(d)),e.a+=' ',seb(e,b.b),e.a+='\n',seb(e,b.a.Mf()),e.a+=': ',e.a));seb(c,b.d);if(a.a&&!!b.e){c.a+='\n';vf(b.e,new HE(c),'','')}return c.a}
function Drb(a,b,c,d,e,f){var g,h,i,j,k;if(Uq(a)===Uq(c)){a=a.slice(b,b+e);b=0}i=c;for(h=b,j=b+e;h<j;){g=$wnd.Math.min(h+10000,j);e=g-h;k=a.slice(h,g);k.splice(0,0,d,f?e:0);Array.prototype.splice.apply(i,k);h=g;d+=e}}
function Me(a){if(!a.td()){throw CD(new sdb("Should only call onDetach when the widget is attached to the browser's document"))}try{a.yd();Yo(a,false)}finally{try{a.rd()}finally{jF();a.Wc.__listener=null;a.Sc=false}}}
function WV(a){var b,c;if(a.ob<a.ib.a.length){while(a.ib.a.length>a.ob){ah(Bjb(a.ib,a.ib.a.length-1))}}else{for(c=a.ib.a.length+1;c<=a.ob;c++){b=Oi($doc);wh(b,IZ(c)+owb);b.className=nwb+c||'';vjb(a.ib,b);Vg(a.Mc,b)}}}
function R0(a){if(a.nodeType!=1){return {}}if($wnd.document.defaultView&&$wnd.document.defaultView.getComputedStyle){return $wnd.document.defaultView.getComputedStyle(a,null)}if(a.currentStyle){return a.currentStyle}}
function yp(a,b,c){var d;if(!b){throw CD(new Kdb('Cannot add a handler with a null type'))}if(!c){throw CD(new Kdb('Cannot add a null handler'))}a.b>0?xp(a,new bM(a,b,c)):(d=Cp(a,b,null),d.add(c));return new aM(a,b,c)}
function L_(a,b,c,d){var e;if(!a.W._){e=rU(a.W,b,c);if(e!=null&&e.length!=0){zO(a.u,e);gX(a.W,'='+e)}else{AO(a.u,BU(a.W,b,c))}}a.e=ZU(a.W,b,c);a.o?iU(a.W,kZ(a.p,JU(a.W))):CO(a.u,!a.e);d!=null?EO(a.u,d):EO(a.u,DZ(b,c))}
function n0(a){l0();if(a.webkitAnimationName)return a.webkitAnimationName;if(a.animationName)return a.animationName;if(a.mozAnimationName)return a.mozAnimationName;if(a.oAnimationName)return a.oAnimationName;return ''}
function Bh(a,b){var c,d,e;c=a.indexOf(b);while(c!=-1){if(c==0||(Srb(c-1,a.length),a.charCodeAt(c-1)==32)){d=c+b.length;e=a.length;if(d==e||d<e&&(Srb(d,a.length),a.charCodeAt(d)==32)){break}}c=a.indexOf(b,c+1)}return c}
function GM(a){var b;if(!a.t&&(b=(C0(),!B0&&(B0=new L0),C0(),B0),b.a.j&&J0(b))){a.t=Qi($doc);a.t.style[Btb]=(yl(),Dtb);a.t.style['borderStyle']=(Xj(),jtb);a.t.tabIndex=-1;a.t.frameBorder=0;a.t.marginHeight=0}return a.t}
function DO(a,b){var c,d,e;Bj(he(a.B));EI(a.B,'');if(!!b&&b.a.length!=0){te(a.B,true);te(a.C,true);for(d=new akb(b);d.a<d.c.a.length;){c=$jb(d);EI(a.B,c)}KO(a,(e=IK(a.a),e==null?'':e))}else{te(a.B,false);te(a.C,false)}}
function w_(a,b){if(a.U!=b){a.U=b;b?Ae((jF(),a.Wc),'protected',true):Ae((jF(),a.Wc),'protected',false);if(a.D){if(b){if(a.o){a.o=false;LV(a.W)}}else{a.e=false;mR(a.R);if(a.o){m9(a.X,a.W.rc,a.W.qc,false);pb(a.s,200)}}}}}
function J4(a,b){var c,d,e,f,g,h,i;if(a.b){for(f=(i=(new Lib(a.a.p.a)).a.Sf().Ie(),new Rib(i));f.a.Se();){c=(h=f.a.Te(),h.$f());sh(c,Zxb)}Ghb(a.a.p.a)}for(d=b,e=0,g=d.length;e<g;++e){c=d[e];dh(c,Zxb);a.b&&_mb(a.a.p,c)}}
function afb(a){var b,c;if(a>-140737488355328&&a<140737488355328){if(a==0){return 0}b=a<0;b&&(a=-a);c=Vq($wnd.Math.floor($wnd.Math.log(a)/0.6931471805599453));(!b||a!=$wnd.Math.pow(2,c))&&++c;return c}return bfb(JD(a))}
function oi(a,b){if(Element.prototype.getBoundingClientRect){return b.getBoundingClientRect().top+a.scrollTop|0}else{var c=b.ownerDocument;return c.getBoxObjectFor(b).screenY-c.getBoxObjectFor(c.documentElement).screenY}}
function ni(a,b){if(Element.prototype.getBoundingClientRect){return b.getBoundingClientRect().left+a.scrollLeft|0}else{var c=b.ownerDocument;return c.getBoxObjectFor(b).screenX-c.getBoxObjectFor(c.documentElement).screenX}}
function eU(a,b,c){var d,e,f,g,h,i,j;h=new cnb;for(e=new aib((new Uhb(a.Ac)).a);e.b;){d=_hb(e);g=d._f();_mb(h,''+g.b)}j=Xp(tB,wsb,2,Hhb(h.a),6,1);Pgb(h,j);i=VS(b,j);for(f=0;f<i.length;f++){zjb(c,i[f],0)!=-1||vjb(c,i[f])}}
function m0(b,c){l0();var d=asb(function(a){c.xf(a)});d.listener=c;b.addEventListener(k0,d,false);!b._vaadin_animationend_callbacks&&(b._vaadin_animationend_callbacks=[]);b._vaadin_animationend_callbacks.push(d);return d}
function mS(a,b){switch(jF(),AG((Fh(),b).type)){case tub:if(b.touches.length>1){return}case 4:tR(a.F,b);break;case 8:case msb:case vub:sF(a.Wc);case 8192:NR(a.F);break;case 64:BR(a.F,b);break;case uub:BR(a.F,b);Eh.Ud(b);}}
function ekb(a,b){var c,d,e;if(Uq(a)===Uq(b)){return true}if(a==null||b==null){return false}if(a.length!=b.length){return false}for(c=0;c<a.length;++c){d=a[c];e=b[c];if(!(d==e||d!=null&&Tdb(d,e))){return false}}return true}
function cN(a){tJ();var b,c,d;c=null.lg();c+='-overlays';b=(jF(),ij($doc,c));if(!b){b=Oi($doc);b.id=c;d=QP(a.d).Vc.ld().className||'';d!=null&&d.length!=0&&dh(b,d);dh(b,'v-overlay-container');Vg(he((qK(),uK())),b)}return b}
function wS(a,b,c,d,e){a.J.style[Itb]=(b&&!a.H?(sm(),rm):(sm(),qm)).he();a.p.style[Itb]=(e&&!a.n?(sm(),rm):(sm(),qm)).he();a.A.style[Itb]=(c&&!a.v?(sm(),rm):(sm(),qm)).he();a.d.style[Itb]=(d&&!a.b?(sm(),rm):(sm(),qm)).he()}
function t4(a){if(a.c<0){k4(a,0,a.c);a.c=0}else if(a.c>((a.q.scrollHeight||0)|0)-(a.q.clientHeight|0)){k4(a,((a.q.scrollHeight||0)|0)-(a.q.clientHeight|0),a.c);a.c=((a.q.scrollHeight||0)|0)-(a.q.clientHeight|0)}else{p4(a)}}
function nU(a){var b,c,d,e,f;b=new Gjb(a.Lc);for(e=new akb(a.Pc);e.a<e.c.a.length;){c=$jb(e);wjb(b,c)}for(f=new akb(a.d);f.a<f.c.a.length;){c=$jb(f);wjb(b,c)}for(d=new akb(a.jc);d.a<d.c.a.length;){c=$jb(d);wjb(b,c)}return b}
function q0(){var a=document.createElement(Qwb);var b={'animationName':Rwb,'OAnimationName':'oAnimationEnd','MozAnimation':Rwb,'WebkitAnimation':'webkitAnimationEnd'};for(var c in b){if(a.style[c]!==undefined){return b[c]}}}
function DV(a,b,c){var d,e,f;if(b.row1<=a.Rc&&b.row2>a.Rc){f=a.a.W.W;e=xR(f,b.row1,a.Rc+1);d=xR(f,a.Rc+1,b.row2+1)+1-((a.yc.scrollTop||0)|0);if(d>0){e+=d;c.d.style[svb]=''}else{c.d.style[svb]='0'}c.d.style[ktb]=e+(em(),Lub)}}
function UL(){function b(a){return parseInt(a[1])*ztb+parseInt(a[2])}
var c=navigator.userAgent;if(c.indexOf('Macintosh')!=-1){var d=/rv:([0-9]+)\.([0-9]+)/.exec(c);if(d&&d.length==3){if(b(d)<=1008){return true}}}return false}
function XV(a){var b,c;if(a.Rc<a.jb.a.length){while(a.jb.a.length>a.Rc){ah(Bjb(a.jb,a.jb.a.length-1))}}else{for(b=a.jb.a.length+1;b<=a.Rc;b++){c=Oi($doc);c.innerHTML=''+b+owb||'';c.className=pwb+b||'';vjb(a.jb,c);Vg(a.Mc,c)}}}
function EW(a,b,c){var d,e,f,g;d=Zub+b+$ub+c;if(Bhb(a.b,d)){return}g=AU(a,d);if(g){e=g.d}else{e=pU(a,b,c).d;sN(a.q,Ih((Fh(),e)))}oN(a.q,Ahb(a.i,d));pN(a.q,Ahb(a.r,d));f=a.tb.contains(d)?a.ub:null;rN(a.q,f);tN(a.q,e,c,b);a.j=d}
function VS(a,b){var c=[];var d=a.sheet.cssRules?a.sheet.cssRules:a.sheet.rules;for(var e=0;e<d.length;e++){var f=d[e];for(var g=0;g<b.length;g++){f['selectorText'].indexOf('.row'+b[g]+',')!==-1&&c.push(f['cssText'])}}return c}
function Ueb(a){return a.e<=-32||a.e>(a.d>0?a.d:$wnd.Math.floor((a.a-1)*Hyb)+1)?0:Cfb(a.e==0||a.a==0&&a.f!=-1?(!a.c&&(a.c=Wfb(a.f)),a.c):a.e<0?Dfb((!a.c&&(a.c=Wfb(a.f)),a.c),Kgb(-a.e)):ufb((!a.c&&(a.c=Wfb(a.f)),a.c),Kgb(a.e)))}
function Fgb(a,b,c,d,e){var f,g,h,i;if(Uq(a)===Uq(b)&&d==e){Lgb(a,d,c);return}for(h=0;h<d;h++){g=0;f=a[h];for(i=0;i<e;i++){g=DD(DD(PD(ED(f,Iyb),ED(b[i],Iyb)),ED(c[h+i],Iyb)),ED(YD(g),Iyb));c[h+i]=YD(g);g=UD(g,32)}c[h+e]=YD(g)}}
function U(a,b){var c,d,e;c=a.r;d=b>=a.t+a.k;if(a.p&&!d){e=(b-a.t)/a.k;a.dd(a._c(e));return a.o&&a.r==c}if(!a.p&&b>=a.t){a.p=true;a.cd();if(!(a.o&&a.r==c)){return false}}if(d){a.o=false;a.p=false;a.bd();return false}return true}
function UU(a,b){var c,d,e,f;e=a.a.M;f=b-e;c=b+a.nc+e;f<0&&(f=0);d=a.a.P;while(a.Ab<c&&a.zb<d){if(a.eb+GU(a,a.db)<f){a.eb+=GU(a,a.db);++a.db}++a.zb;a.Ab+=GU(a,a.zb)}while(f>a.eb+GU(a,a.db)&&a.db<d){a.eb+=GU(a,a.db);++a.db}ZV(a)}
function jE(a,b){var c=$wnd;if(a===''){return c}var d=a.split('.');!(d[0] in c)&&c.execScript&&c.execScript('var '+d[0]);if(b){var e=b.prototype.ig;e.e=b}for(var f;d.length&&(f=d.shift());){c=c[f]=c[f]||!d.length&&b||{}}return c}
function wi(){var a=/rv:([0-9]+)\.([0-9]+)(\.([0-9]+))?.*?/.exec(navigator.userAgent.toLowerCase());if(a&&a.length>=3){var b=parseInt(a[1])*1000000+parseInt(a[2])*ztb+parseInt(a.length>=5&&!isNaN(a[4])?a[4]:0);return b}return -1}
function KH(a,b){var c;if(a.bb){throw CD(new sdb('Composite.initWidget() may only be called once.'))}if(!b){throw CD(new Kdb('widget cannot be null'))}Oq(b,177)&&b;Ne(b);c=(jF(),b.Wc);oe(a,c);(iK(),qF(c))&&jK(c,a);a.bb=b;Pe(b,a)}
function Bdb(a){var b,c,d;if(a<0){return 0}else if(a==0){return 32}else{d=-(a>>16);b=d>>16&16;c=16-b;a=a>>b;d=a-256;b=d>>16&8;c+=b;a<<=b;d=a-4096;b=d>>16&4;c+=b;a<<=b;d=a-usb;b=d>>16&2;c+=b;a<<=b;d=a>>14;b=d&~(d>>1);return c+2-b}}
function m5(a,b){var c;if(a.a!=null){(!a.B&&(a.B=PP(a)),a.B).Vc.od(a.a,false);sh(cN(a.C),a.a)}a.a=b;if(b!=null){(!a.B&&(a.B=PP(a)),a.B).Vc.od(b,true);dh(cN(a.C),a.a);s5(b)}null.lg();c=new e4;!!a.D&&sp(a.D,c);ykb();Jkb();null.lg()}
function Efb(a,b){var c;if(b<0){throw CD(new tcb('Negative exponent'))}if(b==0){return lfb}else if(b==1||wfb(a,lfb)||wfb(a,pfb)){return a}if(!Ifb(a,0)){c=1;while(!Ifb(a,c)){++c}return Dfb(Sfb(c*b),Efb(Hfb(a,c),b))}return Jgb(a,b)}
function IJ(){ZH.call(this);this.C=new UJ;this.F=false;this.H=-1;this.L=new cK(this);this.N=-1;Vg((jF(),this.Wc),sJ.Ye());this.Qe(0,0);sJ.$e((null,lh(this.Wc))).className='gwt-PopupPanel';sJ.Ze(nF(this.Wc)).className='popupContent'}
function SP(a,b,c){var d;if(!!a.p&&!!a.p.d){return}G1((jF(),b.Wc),false);if((C0(),!B0&&(B0=new L0),C0(),B0).a.t==5){return}g1(c.a,b.Wc);uj(c.a);a.p=new X3(a);d=rj(c.a)[0];a.w=$h((Fh(),d).clientX||0);a.A=$h(d.clientY||0);pb(a.p,500)}
function ebb(a,b){var c,d,e,f,g;g=b.indexOf('; cros ');if(g==-1){return}d=Wdb(b,jeb(41),g);if(d==-1){return}c=d;while(c>=g&&(Srb(c,b.length),b.charCodeAt(c)!=32)){--c}if(c==g){return}e=b.substr(c+1,d-(c+1));f=ceb(e,'\\.',0);fbb(a,f)}
function nR(a,b,c,d){FZ(a.d);a.c.C||(a.c.C=true,undefined);if(!AR(a.c.xc)){CW(a.c,true);$T(a.c)}BW(a.c,b,c);tX(a.c,b,b,c,c);d?rX(a.c,b,d.col2,c,d.row2,true):rX(a.c,b,b,c,c,true);mR(a);L_(a.d,b,c,null);m9(a.d.X,c,b,true);pb(a.d.s,200)}
function YZ(a,b,c,d){var e,f;if(a.W.rc!=c&&a.W.qc!=b){XZ(a,b,c,false,false,true)}else{e=pU(a.W,b,c);d=e.o;a.b=d;dO(a.u);d=(f=IK(a.u.j),f==null?'':f)}a.t=false;AZ(a);if(!a.e){if(!a.C&&!a.o){a.C=true;JW(a.W,true,d);a.u.u=true;GO(a.u)}}}
function m4(a,b){var c,d,e,f,g;g=(Fh(),b).target;for(d=(f=(new Lib(a.p.a)).a.Sf().Ie(),new Rib(f));d.a.Se();){c=(e=d.a.Te(),e.$f());if(Eh.be(c,g)&&((c.scrollHeight||0)|0)>(c.clientHeight|0)){a.q=c;a.g=z4(a.q);return true}}return false}
function gE(a,b,c){var d=eE,h;var e=d[a];var f=e instanceof Array?e[0]:null;if(e&&!f){_=e}else{_=(h=b&&b.prototype,!h&&(h=eE[b]),iE(h));_.jg=c;!b&&(_.kg=lE);d[a]=_}for(var g=3;g<arguments.length;++g){arguments[g].prototype=_}f&&(_.ig=f)}
function sZ(){tJ();aN.call(this);this.e=new P4(this);this.b=new a5(100,new S4(this));EJ(this,this.e);sJ.$e((jF(),jF(),lh(this.Wc))).className=Ivb;vh(this.Wc,dj($doc));Ie(this,new M4(this),_o?_o:(_o=new xn));this.Wc['id']='PID_VAADIN_CM'}
function QU(a,b){var c,d,e,f;c=a.a.j;d=b-c;f=b+a.oc+c;d<0&&(d=0);e=a.a.i;while(a.yb<f&&a.xb<e){if(a.cb+KZ(a.a,a.bb)<d){a.cb+=KZ(a.a,a.bb);++a.bb}++a.xb;a.yb+=KZ(a.a,a.xb)}while(d>a.cb+KZ(a.a,a.bb)&&a.bb<e){a.cb+=KZ(a.a,a.bb);++a.bb}UV(a)}
function Ge(a,b){var c=(a.className||'').split(/\s+/);if(!c){return}var d=c[0];var e=d.length;c[0]=b;for(var f=1,g=c.length;f<g;f++){var h=c[f];h.length>e&&h.charAt(e)=='-'&&h.indexOf(d)==0&&(c[f]=b+h.substring(e))}a.className=c.join(' ')}
function UR(a,b){var c;this.M=new XR(this);this.q=a;this.Q=b;this._=b.Qc;this.b=new AS(this);KH(this,this.b);yS(this.b);re(this.b,Jvb,true);KR(this,false);this.B=new kS(this);re(this.B,Jvb,true);iS(this.B);c=b.yc;vS(this.b,c);gS(this.B,c)}
function r3(b,c){var d,e,f,g;d=c.f;e=b.a;!e&&(e=O(d));f=new v3(e);try{l3(new m3(f,b.b),d,$p(Vp(nB,1),esb,1,5,[]))}catch(a){a=BD(a);if(Oq(a,79)){g=a;throw CD(new Lf("Couldn't invoke @OnStateChange method "+f.b+'.'+b.b,g))}else throw CD(a)}}
function ER(a,b){a.r=b;if(b>0&&!a.a){a.a=new AS(a);vS(a.a,a.Q.c);te(a.a,false);yS(a.a);re(a.a,Gvb,true);a.A=new kS(a);gS(a.A,a.Q.c);hS(a.A,false);iS(a.A);re(a.A,Gvb,true)}else if(b==0&&!!a.a){nS(a.a);a.a=null;ah(a.A.k);a.A=null}TR(a);RR(a)}
function JR(a,b){a.ab=b;if(b>0&&!a.X){a.X=new AS(a);vS(a.X,a.Q.Oc);te(a.X,false);yS(a.X);re(a.X,'top-right',true);a.F=new kS(a);gS(a.F,a.Q.Oc);hS(a.F,false);iS(a.F);re(a.F,Hvb,true)}else if(b==0&&!!a.X){nS(a.X);a.X=null;ah(a.F.k);a.F=null}TR(a);RR(a)}
function TR(a){if(a.ab>0&&a.r>0&&!a.W){a.W=new AS(a);vS(a.W,a.Q.Mc);te(a.W,false);yS(a.W);re(a.W,Hvb,true);a.D=new kS(a);gS(a.D,a.Q.Mc);hS(a.D,false);iS(a.D);re(a.D,Hvb,true)}else if(!!a.W&&(a.ab==0||a.r==0)){nS(a.W);a.W=null;ah(a.D.k);a.D=null}}
function Ifb(a,b){var c,d,e;if(b==0){return (a.a[0]&1)!=0}if(b<0){throw CD(new tcb('Negative bit address'))}e=b>>5;if(e>=a.d){return a.e<0}c=a.a[e];b=1<<(b&31);if(a.e<0){d=zfb(a);if(e<d){return false}else d==e?(c=-c):(c=~c)}return (c&b)!=0}
function VP(a){!a.B&&(a.B=new P_);if(!!a.B&&LH((!a.B&&(a.B=new P_),a.B))){Ne((!a.B&&(a.B=new P_),a.B));uqb(xqb((Icb(mz),mz.k)),'Widget is still attached to the DOM after the connector ('+n1(a)+') has been unregistered. Widget was removed.')}}
function xq(a,b){var c,d,e,f,g;b&=63;c=a.h;d=(c&hub)!=0;d&&(c|=-1048576);if(b<22){g=c>>b;f=a.m>>b|c<<22-b;e=a.l>>b|a.m<<22-b}else if(b<44){g=d?nsb:0;f=c>>b-22;e=a.m>>b-22|c<<44-b}else{g=d?nsb:0;f=d?gub:0;e=c>>b-44}return dq(e&gub,f&gub,g&nsb)}
function pnb(a,b){var c,d,e,f,g,h;g=b==null?0:(f=Q(b),f|0);d=(c=a.a.get(g),c==null?new Array:c);for(h=0;h<d.length;h++){e=d[h];if(Ymb(b,e.$f())){if(d.length==1){d.length=0;wnb(a.a,g)}else{d.splice(h,1)}--a.c;Mmb(a.b);return e._f()}}return null}
function OW(a,b){var c,d,e;CF((jF(),a.Wc));a.Tb.className=kwb;he(a.xc).style[dvb]='';sh(a.Ub,'row'+a.$b);if(a.Yb){c=new Zmb;e=b-a.Rb;d=Seb(hfb(e/a.Lb*72));d<0&&(d=0);d!=NZ(a.a,a.$b)&&Chb(c,Edb(a.$b),new kdb(d));c.a.c+c.b.c==0||t$(a.a,c)}a.$b=-1}
function TJ(){var a,b,c,d;null.lg();d=(fG(),nj($doc).clientWidth|0);c=nj($doc).clientHeight|0;null.lg((wk(),jtb));null.lg((em(),Mub));null.lg(Mub);b=mj($doc);a=jj($doc);null.lg($wnd.Math.max(b,d)+Lub);null.lg($wnd.Math.max(a,c)+Lub);null.lg(Ntb)}
function aZ(a){var b,c,d,e,f,g;d=new Ejb;g=QP(a.a.a);e=a.a.a.g;for(c=new akb(a.b);c.a<c.c.a.length;){b=$jb(c);f=new wY(a,e,b.key,b.type,g);sY(f,b.caption);tY(f,BY(a.a.a,b.key));d.a[d.a.length]=f}return Djb(d,Xp(rz,{714:1,3:1},124,d.a.length,0,1))}
function pgb(a,b,c,d,e){var f,g,h;f=0;g=0;for(h=0;h<d;h++){f=(Cgb(),DD(PD(ED(c[h],Iyb),ED(e,Iyb)),ED(YD(f),Iyb)));g=DD(VD(ED(a[b+h],Iyb),ED(f,Iyb)),g);a[b+h]=YD(g);g=TD(g,32);f=UD(f,32)}g=DD(VD(ED(a[b+d],Iyb),f),g);a[b+d]=YD(g);return YD(TD(g,32))}
function sT(a,b,c){var d,e,f,g,h;if(c){a.c.style[cvb]='';a.s=0;a.t=0}for(e=b.length;e<a.u.length;e++){ah(a.u[e])}Uf(a.u,b.length);for(d=0;d<b.length;d++){f=a.u[d];if(f){h=f;rT(h,b[d])}else{g=iT(b[d]);Vg(a.c,g);a.u[d]=g}}a.r>=a.u.length&&(a.r=-1);tT(a)}
function Xcb(a){if(a.Of()){var b=a.c;b.Pf()?(a.k='['+b.j):!b.Of()?(a.k='[L'+b.Mf()+';'):(a.k='['+b.Mf());a.b=b.Lf()+'[]';a.i=b.Nf()+'[]';return}var c=a.g;var d=a.d;d=d.split('/');a.k=$cb('.',[c,$cb('$',d)]);a.b=$cb('.',[c,$cb('.',d)]);a.i=d[d.length-1]}
function tN(a,b,c,d){a.c=b;a.d=c;a.b=d;(jF(),a.Wc).style[Itb]=Vtb;!!a.t&&(a.t.style[Itb]=Vtb,undefined);a.i.style[Itb]=(sm(),Vtb);QM(a);a.k=nh(a.Wc,Kub);a.n=nh(a.Wc,itb);jN(a);a.Wc.style[Itb]=Utb;!!a.t&&(a.t.style[Itb]=Utb,undefined);a.i.style[Itb]=Utb}
function pR(a,b,c,d,e,f,g,h,i){var j,k;L_(a.d,c,d,b);a.c.C||(a.c.C=true,undefined);if(!AR(a.c.xc)){CW(a.c,true);$T(a.c)}j=a.c.qc;k=a.c.rc;if(j!=c||k!=d){BW(a.c,c,d);mR(a)}tX(a.c,e,f,g,h);rX(a.c,e,f,g,h,true);i&&!XU(a.c,e,f,g,h)&&cW(a.c,e,f,g,h);lU(a.c)}
function YE(a){XE();if(!KE(TE,a)){return a}a.indexOf('&')!=-1&&(a=JE(RE,a,'&amp;'));a.indexOf('<')!=-1&&(a=JE(UE,a,'&lt;'));a.indexOf('>')!=-1&&(a=JE(SE,a,'&gt;'));a.indexOf('"')!=-1&&(a=JE(VE,a,'&quot;'));a.indexOf("'")!=-1&&(a=JE(WE,a,'&#39;'));return a}
function Ke(a){var b;if(a.td()){throw CD(new sdb("Should only call onAttach when the widget is detached from the browser's document"))}a.Sc=true;jF();DG(a.Wc,a);b=a.Tc;a.Tc=-1;b>0&&(a.Tc==-1?wF(a.Wc,b|(a.Wc.__eventBits||0)):(a.Tc|=b));a.qd();a.xd();Yo(a,true)}
function ZP(a,b,c){var d,e,f;e='%'.length;Tdb(b.substr(b.length-e,e),'%')!=Sdb(a.o,'%');d='%'.length;Tdb(c.substr(c.length-d,d),'%')!=Sdb(a.n,'%');a.o=b;a.n=c;f=a.tf();f.od('v-has-width',!Abb(a.sf()));f.od('v-has-height',!zbb(a.sf()));a.tf().pd(b);a.tf().nd(c)}
function NR(a){var b,c,d,e;a.C=false;GR(a,false);a.N&&OR(a);if(a.j){w$(a.q,a.G,a.I)}else if(a.s){b=$wnd.Math.min(a.e,a.G);c=$wnd.Math.max(a.f,a.H);d=$wnd.Math.min(a.K,a.I);e=$wnd.Math.max(a.L,a.J);b<=c&&d<=e&&x$(a.q,b,c,d,e)}sh(he(a.Q),'selecting');IR(a,false)}
function n4(a,b){var c;a.r&&S(a.i);c=(Fh(),b).touches[0];if(m4(a,c)){oqb(xqb((Icb(vz),vz.k)),'TouchDelegate takes over');b.stopPropagation();a.d=AF(a);i4=a;a.o=$h(c.clientY||0);a.s[0]=a.o;a.b[0]=Wf();a.k=1;a.n=o4(a);oqb(xqb((Icb(vz),vz.k)),'ST'+a.n);a.j=false}}
function Ffb(a,b){var c,d,e,f,g,h;if(b.e==0){throw CD(new tcb(Jyb))}h=a.d;c=b.d;if((h!=c?h>c?1:-1:ugb(a.a,b.a,h))==-1){return a}f=c;e=Xp(Zq,fwb,16,f,15,1);if(f==1){e[0]=qgb(a.a,h,b.a[0])}else{d=h-c+1;e=jgb(null,d,a.a,h,b.a,c)}g=new Lfb(a.e,f,e);tfb(g);return g}
function jW(a,b,c){var d,e,f,g,h,i,j;if(b){YS(a.wb,c);j=a.wb.b;i=a.wb.a;h=AU(a,c);d=h?h:pU(a,i,j);e=new vN(a,Wg(d.d));oN(e,Ahb(a.i,c));pN(e,Ahb(a.r,c));g=a.tb.contains(c)?a.ub:null;rN(e,g);uN(e,d.d,j,i);Dhb(a.b,c,e)}else{f=Fhb(a.b,c);!!f&&(HM(f,false),ah(f.i))}}
function qZ(a,b,c){var d,e,f,g,h,i;h=aZ(a.a);if(h==null||h.length==0){return}a.d=b;a.f=c;RI(a.e);for(e=h,f=0,g=e.length;f<g;++f){d=e[f];OI(a.e,new qJ((i=new ueb,i.a+='<div>',seb(i,d.e),i.a+='<\/div>',i.a),d))}H1(he(a.e));a.c=x1();BJ(a,'');JM(a,1);DJ(a,new U4(a))}
function VU(a,b){var c,d,e,f;e=a.a.M;f=b-e;c=b+a.nc+e;f<0&&(f=0);d=a.Rc+1;while(a.eb>f&&a.db>d){if(a.Ab-GU(a,a.zb)>c){a.Ab-=GU(a,a.zb);--a.zb}--a.db;a.eb-=GU(a,a.db)}if(a.eb<=0||a.db<=1){a.eb=0;a.db=d}while(c<a.Ab-GU(a,a.zb)&&a.zb>1){a.Ab-=GU(a,a.zb);--a.zb}ZV(a)}
function hg(g){ag();function h(a,b,c,d,e){if(!e){e=a+' ('+b+':'+c;d&&(e+=':'+d);e+=')'}var f=Gf(e);jg(f,false)}
;function i(a){var b=a.onerror;if(b&&!g){return}a.onerror=function(){h.apply(this,arguments);b&&b.apply(this,arguments);return false}}
i($wnd);i(window)}
function C1(a){var b=a.ownerDocument.defaultView.getComputedStyle(a);var c=b.width;if(c==Vub){return B1(a)}var d=parseFloat(c);var e=parseFloat(b.borderLeftWidth)+parseFloat(b.borderRightWidth);var f=parseFloat(b.paddingLeft)+parseFloat(b.paddingRight);return d+e+f}
function z1(a){var b=a.ownerDocument.defaultView.getComputedStyle(a);var c=b.height;if(c==Vub){return y1(a)}var d=parseFloat(c);var e=parseFloat(b.borderTopWidth)+parseFloat(b.borderBottomWidth);var f=parseFloat(b.paddingTop)+parseFloat(b.paddingBottom);return d+e+f}
function BV(a){var b,c,d,e,f,g,h;g=new Lib(a.a.f);b=new Zmb;Vg(a.yc,a.hb);xh(a.hb,lwb);for(f=(h=g.a.Sf().Ie(),new Rib(h));f.a.Se();){e=(d=f.a.Te(),d.$f());uh(a.hb,'cell cs'+e);c=a.hb.clientWidth|0;Chb(b,e,new kdb(Seb(Reb(new Yeb(c),new Yeb(10)))))}ah(a.hb);L$(a.a,b)}
function lq(a){var b,c,d;c=a.l;if((c&c-1)!=0){return -1}d=a.m;if((d&d-1)!=0){return -1}b=a.h;if((b&b-1)!=0){return -1}if(b==0&&d==0&&c==0){return -1}if(b==0&&d==0&&c!=0){return Cdb(c)}if(b==0&&d!=0&&c==0){return Cdb(d)+22}if(b!=0&&d==0&&c==0){return Cdb(b)+44}return -1}
function pU(a,b,c){var d,e,f,g;if(c<=a.Rc&&(b>=a.bb&&b<=a.xb||b<=a.ob)||b<=a.ob&&(c>=a.db&&c<=a.zb||c<=a.Rc)){return yU(a,b,c)}else{e=b-a.bb;f=c-a.db;if(e<0||f<0){return null}g=a.jc.a.length>f;if(g){d=yjb(a.jc,f).a.length>e;if(d){return yjb(yjb(a.jc,f),e)}}}return null}
function aJ(a,b){var c,d;if(b==a.g){return}if(a.g){oJ(a.g);if(a.i){d=oF(he(a.g));jF();if(hF.Ae(d)==2){c=hF.ze(d,1);Ae(c,Jub,false)}}}if(b){re(b,xe((jF(),b.Wc))+'-'+Iub,true);if(a.i){d=oF(b.Wc);if(hF.Ae(d)==2){c=hF.ze(d,1);Ae(c,Jub,true)}}Pd();oc(a.Wc,new dc(b.Wc))}a.g=b}
function JK(a,b,c){if(!a.Sc){return}if(c<0){throw CD(new vcb('Length must be a positive integer. Length: '+c))}if(b<0||c+b>oh((jF(),a.Wc),Rub).length){throw CD(new vcb('From Index: '+b+'  To Index: '+(b+c)+'  Text Length: '+oh((jF(),a.Wc),Rub).length))}$L((jF(),a.Wc),b,c)}
function QN(a){var b,c,d,e,f,g,h,i,j;if(a.a.C){g=a.a.xc.f;h=a.a.xc.e;j=a.a.xc.K;i=a.a.xc.L;f=new ueb;for(e=j;e<=i;e++){for(c=h;c<=g;c++){b=sU(a.a,c,e);b!=null&&(f.a+=''+b,f);c!=g&&(f.a+='\t',f)}e!=i&&(f.a+='\n',f)}d=f.a;return d}return "non-continous selection, can't copy"}
function pO(a,b){var c,d,e,f,g,h,i;c=a.d;if(!c){i='';for(f=a.t.T,g=0,h=f.length;g<h;++g){e=f[g];i+=e+'|'}i=eeb(i,0,i.length-1);d='^(('+i+')!){0,1}';d+='([A-Za-z]{1,3}[0-9]{1,7})';d+='(:([A-Za-z]{1,3}[0-9]{1,7})){0,1}';a.d=c=new RegExp(d);pb(new UO(a),2000)}return c.test(b)}
function PU(a,b){var c,d,e,f;c=a.a.j;d=b-c;f=b+a.oc+c;d<0&&(d=0);e=a.ob+1;while(a.cb>d&&a.bb>e){if(a.yb-KZ(a.a,a.xb)>f){a.yb-=KZ(a.a,a.xb);--a.xb}--a.bb;a.cb-=KZ(a.a,a.bb)}if(a.cb<=0||a.bb<=1){a.cb=0;a.bb=e}while(f<a.yb-KZ(a.a,a.xb)&&a.xb>1){a.yb-=KZ(a.a,a.xb);--a.xb}UV(a)}
function rq(a){var b,c,d,e,f;if(isNaN(a)){return Iq(),Hq}if(a<-9223372036854775808){return Iq(),Fq}if(a>=9223372036854775807){return Iq(),Eq}e=false;if(a<0){e=true;a=-a}d=0;if(a>=lsb){d=Vq(a/lsb);a-=d*lsb}c=0;if(a>=msb){c=Vq(a/msb);a-=c*msb}b=Vq(a);f=dq(b,c,d);e&&jq(f);return f}
function rO(a,b,c,d,e){var f;if(!a.f){return}if(a.k==-1){a.k=a.I.qc;a.n=a.I.rc}c?--a.n:d?++a.k:e?++a.n:--a.k;a.n==0&&(a.n=1);a.k==0&&(a.k=1);f=MU(a.I);a.n>f[2]-1&&(a.n=f[2]-1);a.k>f[3]-1&&(a.k=f[3]-1);if(b&&a.o!=-1);else{a.o=a.k;a.p=a.n}BO(a,a.o,a.p,a.k,a.n,false);fW(a.I,a.k,a.n)}
function FW(a,b){var c,d,e,f;if(a.T){for(f=(d=(new Wib(a.T)).a.Sf().Ie(),new _ib(d));f.a.Se();){e=(c=f.a.Te(),c._f());Vib(new Wib(b),e)||Ne(e)}}a.Rc>0&&a.ob>0&&GW(a,b,1,a.Rc,1,a.ob);a.Rc>0&&GW(a,b,1,a.Rc,a.bb,a.xb);a.ob>0&&GW(a,b,1,a.db,a.zb,a.ob);GW(a,b,a.bb,a.xb,a.db,a.zb);a.T=b}
function wX(a,b){var c,d,e;if(a.Lc.a.length!=0){d=new akb(b);while(d.a<d.c.a.length){c=$jb(d);lM(yjb(a.Lc,(c.row-1)*a.ob+c.col-1),c.value,c.cellStyle,c.needsMeasure);e=Zub+c.col+$ub+c.row;wW(a,e,c.value,c.cellStyle,c.needsMeasure);c.value==null?Fhb(a.e,e):Dhb(a.e,e,c)}}mX(a,false)}
function Dgb(a,b){Cgb();var c,d,e,f,g,h,i,j,k;if(b.d>a.d){h=a;a=b;b=h}if(b.d<63){return Igb(a,b)}g=(a.d&-2)<<4;j=Hfb(a,g);k=Hfb(b,g);d=wgb(a,Gfb(j,g));e=wgb(b,Gfb(k,g));i=Dgb(j,k);c=Dgb(d,e);f=Dgb(wgb(j,d),wgb(e,k));f=rgb(rgb(f,i),c);f=Gfb(f,g);i=Gfb(i,g<<1);return rgb(rgb(i,f),c)}
function DR(a,b){a.p=b;if(b){re(a.b,Fvb,true);pS(a.b,b);if(a.W){pS(a.W,b);re(a.W,Fvb,true)}if(a.X){pS(a.X,b);re(a.X,Fvb,true)}if(a.a){pS(a.a,b);re(a.a,Fvb,true)}IR(a,true)}else{re(a.b,Fvb,false);!!a.W&&re(a.W,Fvb,false);!!a.X&&re(a.X,Fvb,false);!!a.a&&re(a.a,Fvb,false);IR(a,false)}}
function FV(a){var b,c,d,e,f,g;for(c=(f=(new Wib(a.b)).a.Sf().Ie(),new _ib(f));c.a.Se();){b=(e=c.a.Te(),e._f());g=b.d;d=b.b;PZ(a.a,d)||QZ(a.a,g)||!(d>=a.bb&&d<=a.xb&&g>=a.db&&g<=a.zb||d<=a.ob&&g<=a.Rc||d>a.ob&&d<=a.xb&&g<=a.Rc||g>a.Rc&&g<=a.zb&&d<=a.ob)?(HM(b,false),ah(b.i)):nN(b)}}
function Zrb(a){var b,c,d,e;b=0;d=a.length;e=d-4;c=0;while(c<e){b=(Srb(c+3,a.length),a.charCodeAt(c+3)+(Srb(c+2,a.length),31*(a.charCodeAt(c+2)+(Srb(c+1,a.length),31*(a.charCodeAt(c+1)+(Srb(c,a.length),31*(a.charCodeAt(c)+31*b)))))));b=b|0;c+=4}while(c<d){b=b*31+Rdb(a,c++)}b=b|0;return b}
function cbb(a,b){var c,d,e;d=b;e=a.length;while(d<e){c=(Srb(d,a.length),a.charCodeAt(d));Fcb==null&&(Fcb=new RegExp('[A-Z]','i'));if(!(Fcb.test(String.fromCharCode(c))||(Ecb==null&&(Ecb=new RegExp('\\d')),Ecb.test(String.fromCharCode(c)))||c==95||c==46)){break}++d}return a.substr(b,d-b)}
function IY(a){var b,c,d,e,f;e=(!a.J&&(a.J=new j0),a.J).ab;f=(!a.B&&(a.B=new P_),a.B);for(d=new akb(a.i);d.a<d.c.a.length;){b=$jb(d);zjb(e,b,0)!=-1||jW(f.W,false,b)}if(e){for(c=new akb(e);c.a<c.c.a.length;){b=$jb(c);zjb(a.i,b,0)!=-1||jW(f.W,true,b)}}a.i.a=Xp(nB,esb,1,0,5,1);!!e&&wjb(a.i,e)}
function oZ(a,b,c){var d,e;b=ie(a.e);d=a.d;e=a.f;if(b+d>(fG(),nj($doc).clientWidth|0)){d=d-b;d<0&&(d=0)}c+e>(nj($doc).clientHeight|0)&&(e=$wnd.Math.max(0,(nj($doc).clientHeight|0)-c));e==0&&LM(a,(nj($doc).clientHeight|0)+Lub);NM(a,d,e);(jF(),a.Wc).style[Btb]=(yl(),Ctb);p1((ng(),mg),new W4(a))}
function Omb(a){var b,c,d;d=-a.a.getTimezoneOffset();b=(d>=0?'+':'')+(d/60|0);c=Tmb($wnd.Math.abs(d)%60);return (Xmb(),Vmb)[a.a.getDay()]+' '+Wmb[a.a.getMonth()]+' '+Tmb(a.a.getDate())+' '+Tmb(a.a.getHours())+':'+Tmb(a.a.getMinutes())+':'+Tmb(a.a.getSeconds())+' GMT'+b+c+' '+a.a.getFullYear()}
function lO(a){var b,c,d,e,f,g,h,i;if(a.A!=null){g=vO(a,a.A);if(!g){return}e=$wnd.Math.min(g.col1,g.col2);d=$wnd.Math.max(g.col1,g.col2);i=$wnd.Math.min(g.row1,g.row2);h=$wnd.Math.max(g.row1,g.row2);for(b=e;b<=d;b++){for(f=i;f<=h;f++){c=pU(a.I,b,f);!!c&&(c.d.style[pvb]='',undefined)}}}a.A=null}
function Igb(a,b){var c,d,e,f,g,h,i,j,k,l,m;d=a.d;f=b.d;h=d+f;i=a.e!=b.e?-1:1;if(h==2){k=PD(ED(a.a[0],Iyb),ED(b.a[0],Iyb));m=YD(k);l=YD(UD(k,32));return l==0?new Kfb(i,m):new Lfb(i,2,$p(Vp(Zq,1),fwb,16,15,[m,l]))}c=a.a;e=b.a;g=Xp(Zq,fwb,16,h,15,1);Egb(c,d,e,f,g);j=new Lfb(i,h,g);tfb(j);return j}
function Hgb(a,b){Cgb();var c,d,e,f,g,h,i,j,k;j=a.e;if(j==0){return qfb(),pfb}d=a.d;c=a.a;if(d==1){e=PD(ED(c[0],Iyb),ED(b,Iyb));i=YD(e);g=YD(UD(e,32));return g==0?new Kfb(j,i):new Lfb(j,2,$p(Vp(Zq,1),fwb,16,15,[i,g]))}h=d+1;f=Xp(Zq,fwb,16,h,15,1);f[d]=Ggb(f,c,d,b);k=new Lfb(j,h,f);tfb(k);return k}
function kU(a){var b,c,d,e,f,g;for(d=(g=(new Lib(a.u.a)).a.Sf().Ie(),new Rib(g));d.a.Se();){c=(e=d.a.Te(),e.$f());if(c.a!=a.qc||c.b!=a.rc){b=pU(a,c.a,c.b);if(b){dh(b.d,Xvb);_mb(a.t,b)}f=AU(a,Zub+c.a+$ub+c.b);if(f){_mb(a.t,f);dh(f.d,Xvb)}}}if(a.nb){b=pU(a,a.nb.a,a.nb.b);!!b&&dh(b.d,Yvb)}mO(a.a.u)}
function uf(d,b){if(b instanceof Object){try{b.__java$exception=d;if(navigator.userAgent.toLowerCase().indexOf('msie')!=-1&&$doc.documentMode<9){return}var c=d;Object.defineProperties(b,{cause:{get:function(){var a=c.Ed();return a&&a.Cd()}},suppressed:{get:function(){return c.Dd()}}})}catch(a){}}}
function JG(){JG=hE;EG={_default_:PG,dragenter:OG,dragover:OG};GG={click:NG,dblclick:NG,mousedown:NG,mouseup:NG,mousemove:NG,mouseover:NG,mouseout:NG,mousewheel:NG,keydown:MG,keyup:MG,keypress:MG,touchstart:NG,touchend:NG,touchmove:NG,touchcancel:NG,gesturestart:NG,gestureend:NG,gesturechange:NG}}
function bK(a,b,c){var d;a.c=c;S(a);if(a.g){ob(a.g);a.g=null;$J(a)}a.a.M=b;HJ(a.a);d=!c&&a.a.F;a.i=b;if(d){if(b){ZJ(a);he(a.a).style[Btb]=Dtb;a.a.N!=-1&&a.a.Qe(a.a.H,a.a.N);(tJ(),sJ)._e(he(a.a),'rect(0px, 0px, 0px, 0px)');tH((qK(),uK()),a.a);a.g=new gK(a);pb(a.g,1)}else{T(a,200,Wf())}}else{_J(a)}}
function oR(a,b,c,d,e,f,g,h){if(a.d.o){a.d.o=false;LV(a.c)}a.d.e=g;BW(a.c,c,d);mR(a);a.c.C||(a.c.C=true,undefined);if(!AR(a.c.xc)){CW(a.c,true);$T(a.c)}tX(a.c,c,c,d,d);rX(a.c,c,c,d,d,true);f?zO(a.d.u,e):AO(a.d.u,e);CO(a.d.u,!g);b!=null?EO(a.d.u,b):EO(a.d.u,DZ(c,d));hV(a.c)||fW(a.c,c,d);h||lU(a.c)}
function bgb(a,b){var c,d,e,f,g;d=b>>5;b&=31;if(d>=a.d){return a.e<0?(qfb(),kfb):(qfb(),pfb)}f=a.d-d;e=Xp(Zq,fwb,16,f+1,15,1);cgb(e,f,a.a,d,b);if(a.e<0){for(c=0;c<d&&a.a[c]==0;c++);if(c<d||b>0&&a.a[c]<<32-b!=0){for(c=0;c<f&&e[c]==-1;c++){e[c]=0}c==f&&++f;++e[c]}}g=new Lfb(a.e,f,e);tfb(g);return g}
function mgb(a,b){var c,d,e,f,g;d=ED(b,Iyb);if(FD(a,0)>=0){f=HD(a,d);g=OD(a,d)}else{c=UD(a,1);e=b>>>1;f=HD(c,e);g=OD(c,e);g=DD(SD(g,1),ED(a,1));if((b&1)!=0){if(FD(f,g)<=0){g=VD(g,f)}else{if(ND(VD(f,g),d)){g=DD(g,VD(d,f));f=VD(f,1)}else{g=DD(g,VD(SD(d,1),f));f=VD(f,2)}}}}return RD(SD(g,32),ED(f,Iyb))}
function IN(a,b){VH.call(this);this.a=Oi($doc);this.b=false;this.f=false;this.k=-1;this.g=-1;this.i=-1;this.j=-1;this.n=-1;this.d=-1;this.e=a;this.c=b;(jF(),this.Wc).className='grouping';Ae(this.Wc,'minus',true);this.a.innerHTML='&#x2212;';this.a.className='expand';Vg(this.Wc,this.a);FF(this.Wc,262145)}
function o0(a){l0();var b=a.a;if(!b.getPropertyValue)return '';if(b.getPropertyValue(Mwb))return b.getPropertyValue(Mwb);if(b.getPropertyValue(Nwb))return b.getPropertyValue(Nwb);if(b.getPropertyValue(Owb))return b.getPropertyValue(Owb);if(b.getPropertyValue(Pwb))return b.getPropertyValue(Pwb);return ''}
function AQ(){this.d=Oi($doc);this.b=Oi($doc);this.a=Oi($doc);this.d.className='v-spreadsheet-popupbutton-overlay-header';this.b.className='v-window-closebox';this.b.setAttribute('role',Wsb);this.a.className='header-caption';Vg(this.d,this.b);Vg(this.d,this.a);FF(this.b,1);EF(this.b,this);ne(this,this.d)}
function HR(a,b,c,d,e){var f;a.e=b;a.K=d;a.f=c;a.L=e;a.Y=xR(a.q.W.W,d,e+1);a.Z=xR(a.q.g,b,c+1);f=a.Z==0||a.Y==0;tS(a.b,b,c,d,e);f&&pS(a.b,true);if(a.ab>0&a.r>0){tS(a.W,b,c,d,e);f&&pS(a.W,true)}if(a.ab>0){tS(a.X,b,c,d,e);f&&pS(a.X,true)}if(a.r>0){tS(a.a,b,c,d,e);f&&pS(a.a,true)}a.p&&DR(a,false);a.o||LR(a)}
function FL(a){var b=$doc.createElement('div');b.tabIndex=0;var c=$doc.createElement('input');c.type='text';c.tabIndex=-1;c.setAttribute(otb,'true');var d=c.style;d.opacity=0;d.height='1px';d.width='1px';d.zIndex=-1;d.overflow=Vtb;d.position=Dtb;c.addEventListener('focus',a,false);b.appendChild(c);return b}
function hbb(b,c){b.u=-1;b.v=-1;if(c.length>=1){try{b.u=gdb(c[0])}catch(a){a=BD(a);if(!Oq(a,21))throw CD(a)}}if(c.length>=2){try{b.v=gdb(c[1])}catch(a){a=BD(a);if(!Oq(a,21))throw CD(a)}if(b.v==-1&&c[1].indexOf('-')!=-1){try{b.v=gdb(eeb(c[1],0,Vdb(c[1],jeb(45))))}catch(a){a=BD(a);if(!Oq(a,21))throw CD(a)}}}}
function tg(a){var b,c,d,e,f,g,h;f=a.length;if(f==0){return null}b=false;c=new of;while(Wf()-c.a<16){d=false;for(e=0;e<f;e++){h=a[e];if(!h){continue}d=true;if(!h[0].Id()){a[e]=null;b=true}}if(!d){break}}if(b){g=[];for(e=0;e<f;e++){!!a[e]&&(g[g.length]=a[e],undefined)}return g.length==0?null:g}else{return a}}
function SW(a,b,c){var d,e,f,g;e=pU(a,b,c);d=AU(a,Zub+b+$ub+c);g=pU(a,a.qc,a.rc);f=AU(a,Zub+a.qc+$ub+a.rc);_mb(a.u,new pY(a.qc,a.rc));if(g){_mb(a.t,g);sh(g.d,Yvb);dh(g.d,Xvb)}if(f){_mb(a.t,f);sh(f.d,Yvb);dh(f.d,Xvb)}bnb(a.u,new pY(b,c));if(e){bnb(a.t,e);sh(e.d,Xvb)}if(d){bnb(a.t,d);sh(d.d,Xvb)}a.rc=c;a.qc=b}
function IM(a){var b,c,d;d=a.Sc&&a.M;GJ(a);if(d){return false}else{a.cf(false);re(a,xe(sJ.$e((jF(),jF(),lh(a.Wc))))+'-'+avb,true);c=new Q0(a.Wc);b=o0(c);b==null&&(b='');a.cf(true);if(b.indexOf(avb)!=-1){a.F=false;m0(a.Wc,new H5(a));return true}else{re(a,xe(sJ.$e((null,lh(a.Wc))))+'-'+avb,false);return false}}}
function IT(b,c){var d,e,f,g;if(c.a.length>0){e=new web(HU(b.Dc));for(g=new akb(c);g.a<g.c.a.length;){f=$jb(g);try{seb(e,_db(f,Vvb,Wvb+b.zc+' .cell.col'))}catch(a){a=BD(a);if(Oq(a,21)){d=a;pqb(b.U,(rpb(),ppb),'Invalid custom cell border style: '+f+', '+d.Fd())}else throw CD(a)}}$g(b.Dc);Vg(b.Dc,cj($doc,e.a))}}
function P_(){this.n=new Zmb;this.J=new X_(this);this.s=new Y_;z_(this,(!yo&&(yo=new Go),yo.a));this.W=new yX(this,this.$);this.u=new OO(this,this.W);this.V=new wT(this);this.R=new sR(this,this.W);Vg(he(this.W),he(this.u));Vg(he(this.W),he(this.V));KH(this,this.W);Ie(this.W,new __(this),(!Vo&&(Vo=new xn),Vo))}
function vO(a,b){var c,d,e,f,g,h;f=new pP;if(b.indexOf('!')!=-1){h=ceb(b,'!',0)[0];return Tdb(HZ(a.t),h)?vO(a,ceb(b,'!',0)[1]):null}else if(b.indexOf(':')!=-1){g=ceb(b,':',0);c=PO(g[0]);f.col1=c.a;f.row1=c.b;d=PO(g[1]);f.col2=d.a;f.row2=d.b}else{e=PO(b);f.col1=e.a;f.row1=e.b;f.col2=f.col1;f.row2=f.row1}return f}
function l1(a,b,c){j1();a.onload=asb(function(){a.onload=null;a.onerror=null;a.onreadystatechange=null;b.zf(c)});a.onerror=asb(function(){a.onload=null;a.onerror=null;a.onreadystatechange=null;b.yf(c)});a.onreadystatechange=function(){('loaded'===a.readyState||'complete'===a.readyState)&&a.onload(arguments[0])}}
function qfb(){qfb=hE;var a;lfb=new Kfb(1,1);nfb=new Kfb(1,10);pfb=new Kfb(0,0);kfb=new Kfb(-1,1);mfb=$p(Vp(yB,1),esb,11,0,[pfb,lfb,new Kfb(1,2),new Kfb(1,3),new Kfb(1,4),new Kfb(1,5),new Kfb(1,6),new Kfb(1,7),new Kfb(1,8),new Kfb(1,9),nfb]);ofb=Xp(yB,esb,11,32,0,1);for(a=0;a<ofb.length;a++){ofb[a]=Xfb(SD(1,a))}}
function mK(){var c=function(){};c.prototype={className:'',clientHeight:0,clientWidth:0,dir:'',getAttribute:function(a,b){return this[a]},href:'',id:'',lang:'',nodeType:1,removeAttribute:function(a,b){this[a]=undefined},setAttribute:function(a,b){this[a]=b},src:'',style:{},title:''};$wnd.GwtPotentialElementShim=c}
function h$(a,b,c,d,e){var f,g,h,i;if(b==0||c==0||d==0||e==0||b==c&&d==e&&b==a.W.qc&&d==a.W.rc){return}f=c;g=e;if(b>c){i=b;b=c;c=i}if(d>e){i=d;d=e;e=i}if(a.u.f){BO(a.u,a.Y,a.Z,f,g,false);kO(a.u)}else{h=qP(a.J,d,e,b,c);k9(a.X,a.W.rc,a.W.qc,h.row1,h.col1,h.row2,h.col2);EO(a.u,DZ(a.W.qc,a.W.rc));mR(a.R);pb(a.s,200)}}
function RR(a){sS(a.b,a.ab==0?0:a.ab+1,0,a.r==0?0:a.r+1,0);!!a.a&&sS(a.a,a.ab==0?0:a.ab+1,0,0,a.r);!!a.X&&sS(a.X,0,a.ab,a.r==0?0:a.r+1,0);!!a.W&&sS(a.W,0,a.ab,0,a.r);eS(a.B,a.ab==0?0:a.ab+1,0,a.r==0?0:a.r+1,0);!!a.A&&eS(a.A,a.ab==0?0:a.ab+1,0,0,a.r);!!a.F&&eS(a.F,0,a.ab,a.r==0?0:a.r+1,0);!!a.D&&eS(a.D,0,a.ab,0,a.r)}
function AS(a){this.F=a;this.B=Oi($doc);this.G=Oi($doc);this.k=Oi($doc);this.u=Oi($doc);this.a=Oi($doc);this.g=Oi($doc);this.i=Oi($doc);this.I=Oi($doc);this.o=Oi($doc);this.w=Oi($doc);this.c=Oi($doc);this.J=Oi($doc);this.p=Oi($doc);this.A=Oi($doc);this.d=Oi($doc);lS(this);FF(this.B,15736908);EF(this.B,new BS(this))}
function upb(a){rpb();var b;b=geb(a,(lob(),job));switch(b){case 'ALL':return ipb;case 'CONFIG':return jpb;case 'FINE':return kpb;case 'FINER':return lpb;case 'FINEST':return mpb;case 'INFO':return npb;case 'OFF':return opb;case 'SEVERE':return ppb;case Dyb:return qpb;default:throw CD(new qdb('Invalid level "'+a+'"'));}}
function Cq(a){var b,c,d,e,f;if(a.l==0&&a.m==0&&a.h==0){return '0'}if(a.h==hub&&a.m==0&&a.l==0){return '-9223372036854775808'}if(a.h>>19!=0){return '-'+Cq(tq(a))}c=a;d='';while(!(c.l==0&&c.m==0&&c.h==0)){e=bq(iub);c=eq(c,e,true);b=''+Bq(aq);if(!(c.l==0&&c.m==0&&c.h==0)){f=9-b.length;for(;f>0;f--){b='0'+b}}d=b+d}return d}
function Anb(){if(!Object.create||!Object.getOwnPropertyNames){return false}var a='__proto__';var b=Object.create(null);if(b[a]!==undefined){return false}var c=Object.getOwnPropertyNames(b);if(c.length!=0){return false}b[a]=42;if(b[a]!==42){return false}if(Object.getOwnPropertyNames(b).length==0){return false}return true}
function s5(a){var b,c,d,e,f;e=$doc.querySelectorAll('link[rel~="icon"]');for(c=0;c<e.length;c++){d=e[c];b=(Fh(),d).getAttribute('href')||'';if(b!=null&&b.indexOf('VAADIN/themes')!=-1&&(f=_xb.length,Tdb(b.substr(b.length-f,f),_xb))){b=beb(b,'VAADIN/themes/.+?/favicon.ico','VAADIN/themes/'+a+_xb);d.setAttribute('href',b)}}}
function mO(a){var b,c,d,e,f,g,h;for(c=(h=(new Lib(a.F.a)).a.Sf().Ie(),new Rib(h));c.a.Se();){b=(g=c.a.Te(),g.$f());d=new pY(b.c,b.k);if(!xhb(a.D,d)){b.d.style[ovb]='';b.d.style[pvb]=''}}Ghb(a.F.a);a.f&&fO(a);for(f=new aib((new Uhb(a.D)).a);f.b;){e=_hb(f);b=pU(a.I,e.$f().a,e.$f().b);if(b){b.d.style[ovb]=e._f();_mb(a.F,b)}}}
function HM(a,b){var c,d;if((sJ.$e((jF(),jF(),lh(a.Wc))).className||'').indexOf(avb)!=-1){m0(a.Wc,new J5(a,b))}else{re(a,xe(sJ.$e((null,lh(a.Wc))))+'-'+bvb,true);d=new Q0(a.Wc);c=o0(d);c==null&&(c='');if(c.indexOf(bvb)!=-1){a.F=false;m0(a.Wc,new L5(a,b));a.K=false}else{re(a,xe(sJ.$e((null,lh(a.Wc))))+'-'+bvb,false);KM(a,b)}}}
function g1(a,b){var c;c=new Wab;Vab(c,BF((Fh(),a).type));Oab(c,(t1(),E1(a)));Pab(c,F1(a));Eh.Pd(a)==1?Nab(c,(_ab(),Yab)):Eh.Pd(a)==2?Nab(c,(_ab(),$ab)):Eh.Pd(a)==4?Nab(c,(_ab(),Zab)):Nab(c,(_ab(),Yab));Mab(c,!!a.altKey);Qab(c,!!a.ctrlKey);Rab(c,!!a.metaKey);Uab(c,!!a.shiftKey);if(b){Sab(c,h1(c.c,b));Tab(c,i1(c.d,b))}return c}
function _T(a){var b,c,d,e,f,g;for(g=new akb(a.hc);g.a<g.c.a.length;){e=$jb(g);sh(e,Zvb)}for(d=new akb(a.K);d.a<d.c.a.length;){b=$jb(d);sh(b,$vb)}if(a.jb){for(f=new akb(a.jb);f.a<f.c.a.length;){e=$jb(f);sh(e,Zvb)}}if(a.ib){for(c=new akb(a.ib);c.a<c.c.a.length;){b=$jb(c);sh(b,$vb)}}Ghb(a.vc.a);Ghb(a.sc.a);Ghb(a.uc.a);Ghb(a.tc.a)}
function sO(a,b,c){var d,e,f,g,h,i,j,k;g=$wnd.Math.min(b.col1,b.col2);f=$wnd.Math.max(b.col1,b.col2);k=$wnd.Math.min(b.row1,b.row2);j=$wnd.Math.max(b.row1,b.row2);if(f>20000){lqb(xqb((Icb(Kw),Kw.i)));return}for(d=g;d<=f;d++){for(i=k;i<=j;i++){e=pU(a.I,d,i);if(e){h=e.d;h.style[ovb]=c;_mb(a.F,e);Chb(a.D,new pY(d,i),c)}}}vjb(a.i,b)}
function g$(a,b){var c,d,e,f,g,h,i;for(d=new aib((new Uhb(b)).a);d.b;){c=_hb(d);e=c.$f().a;h=c._f().a;if(h==0){if(!a.v){a.v=new Ejb;vjb(a.v,Edb(e))}else zjb(a.v,Edb(e),0)!=-1||vjb(a.v,Edb(e))}a.g[e-1]=h}JV(a.W,false);if(a.K){for(g=new akb(a.K);g.a<g.c.a.length;){f=$jb(g);kX(a.W,f)}}a.d=true;i=MU(a.W);r9(a.X,b,i[0],i[1],i[2],i[3])}
function t$(a,b){var c,d,e,f,g,h,i;for(d=new aib((new Uhb(b)).a);d.b;){c=_hb(d);e=c.$f().a;h=c._f().a;if(h==0){if(!a.w){a.w=new Ejb;vjb(a.w,Edb(e))}else zjb(a.w,Edb(e),0)!=-1||vjb(a.w,Edb(e))}a.N[e-1]=h}JV(a.W,false);if(a.K){for(g=new akb(a.K);g.a<g.c.a.length;){f=$jb(g);kX(a.W,f)}}a.d=true;i=MU(a.W);F9(a.X,b,i[0],i[1],i[2],i[3])}
function PO(a){var b,c,d,e,f,g,h,i,j;b='';g='';if(a!=null){j=ceb(a.toUpperCase(),'[0-9]',0);i=ceb(a,'[A-z]',0);j.length>0&&(b=j[0]);i.length>0&&(g=i[i.length-1])}h=g.length>0?Edb(gdb(g)).a:0;d=0;for(f=0;f<b.length;f++){e=(Srb(f,b.length),b.charCodeAt(f));c=0;e>=65&&e<=90?(c=e-64):e>=97&&e<=122&&(c=e-96);d=d*26+c}return new pY(d,h)}
function Cgb(){Cgb=hE;var a,b;zgb=Xp(yB,esb,11,32,0,1);Agb=Xp(yB,esb,11,32,0,1);Bgb=$p(Vp(Zq,1),fwb,16,15,[1,5,25,125,625,3125,15625,78125,390625,1953125,9765625,48828125,Fyb,Gyb]);a=1;for(b=0;b<=18;b++){zgb[b]=Xfb(a);Agb[b]=Xfb(SD(a,b));a=PD(a,5)}for(;b<Agb.length;b++){zgb[b]=Dfb(zgb[b-1],zgb[1]);Agb[b]=Dfb(Agb[b-1],(qfb(),nfb))}}
function uT(a){var b,c,d,e,f,g;e=a.g.value;if(e.length>31){e=e.substr(0,31);pj(a.g,e)}xh(a.v,e);f=(a.v.offsetWidth||0)|0;f<50&&(f=50);c=a.u[a.r];b=hh(a.k);d=(Fh(),Eh).Vd(c)+((c.offsetWidth||0)|0)+10;while(d>b&&a.s<a.u.length-1){g=mT(a,a.s);d=Vq(d-g);a.t-=g;++a.s}a.c.style[cvb]=a.t+(em(),Lub);a.g.style[ltb]=f+5+Lub;c.style[ltb]=f+Lub}
function $P(a){var b,c,d,e,f,g;g=a.sf();f=xe(a.tf().ld());a.tf().od('v-widget',true);XP(a,f,'-error',null!=g.ib);for(b=0;b<a.r.length;b++){e=a.r[b];a.tf().od(e,false);XP(a,f+'-',e,false)}a.r.length=0;if(ybb(g.mb)){for(d=g.mb.Ie();d.Se();){c=d.Te();a.tf().od(c,true);XP(a,f+'-',c,true);Vf(a.r,c)}}g.lb!=null&&!Tdb(g.lb,f)&&se(a.tf(),g.lb)}
function rX(a,b,c,d,e,f){var g,h,i,j,k,l;a.v=false;if(f){XT(a);_T(a);i=pU(a,a.qc,a.rc);a.nb=null;!!i&&sh(i.d,Yvb)}for(l=d;l<=e;l++){for(h=b;h<=c;h++){if(h!=a.qc||l!=a.rc){i=pU(a,h,l);_mb(a.u,new pY(h,l));if(i){_mb(a.t,i);dh(i.d,Xvb)}j=AU(a,Zub+h+$ub+l);if(j){_mb(a.t,j);dh(j.d,Xvb)}}}}for(k=d;k<=e;k++){iW(a,k)}for(g=b;g<=c;g++){hW(a,g)}}
function QQ(){_e();this.j=Oi($doc);this.a=new UQ(this);this.f=new Ejb;this.j.className=Dvb;this.j.setAttribute('role',Wsb);this.e=new gN;qe(this.e,'v-spreadsheet-popupbutton-overlay');this.i=new dL;se(this.i,'overlay-layout');this.g=new AQ;yQ(this.g,this.e);bL(this.i,this.g);WH(this.e,this.i);ne(this,this.j);He(this,this,(gn(),gn(),fn))}
function kS(a){this.p=a;this.k=Oi($doc);this.q=Oi($doc);this.d=Oi($doc);this.j=Oi($doc);this.a=Oi($doc);this.k.className=Kvb;dh(this.k,'paintmode');this.q.className='s-top';this.d.className='s-left';this.j.className='s-right';this.a.className='s-bottom';Vg(this.q,this.d);Vg(this.q,this.j);Vg(this.d,this.a);Vg(this.k,this.q);ne(this,this.k)}
function LU(a,b,c,d){var e,f,g,h;h=new web(Wvb);reb(seb(seb(h,a.zc),' .sheet .cell.cs'),b);for(g=new aib((new Uhb(c)).a);g.b;){e=_hb(g);udb(e._f(),b)&&seb(reb(seb(seb((h.a+=ewb,h),a.zc),cwb),e.$f()),'.cell.cs0')}for(f=new aib((new Uhb(d)).a);f.b;){e=_hb(f);udb(e._f(),b)&&seb(reb(seb(seb((h.a+=ewb,h),a.zc),awb),e.$f()),'.cell.cs0')}return h.a}
function qX(a){var b,c,d,e,f,g;eX(a,a.fc,a.cc,a.mb,a.jb,false,a.ec);g=a.Z?a.ec+1:a.ec;if(a.gc.childNodes.length==g){return}$g(a.gc);for(e=1;e<=g;e++){c=Oi($doc);Vg(a.gc,c);(Fh(),Eh).ce(c,''+e);c.className=twb;f=e;jF();hF.Ge(c,1);EF(c,new UX(a,f))}$g(a.bc);for(d=1;d<=g-1;d++){b=Oi($doc);Vg(a.bc,b);b.className=pvb;b.style[cvb]=15*d+(em(),Lub)}}
function _G(){$wnd.addEventListener('mouseout',asb(function(a){var b=(JG(),FG);if(b&&!a.relatedTarget){if('html'==a.target.tagName.toLowerCase()){var c=$doc.createEvent('MouseEvents');c.initMouseEvent(_tb,true,true,$wnd,0,a.screenX,a.screenY,a.clientX,a.clientY,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,a.button,null);b.dispatchEvent(c)}}}),true)}
function UP(a,b){b.Af('id')&&(a.sf().kb!=null?vh(he(a.tf()),a.sf().kb):b.b||(he(a.tf()).removeAttribute('id'),undefined));Oq(a.sf(),125)?Oq(a.tf(),60)&&a.tf().Ad((a.sf(),0)):Oq(a.sf(),165)&&Oq(a.tf(),60)&&a.tf().Ad(a.sf().k);FP(a,b);$P(a);ZP(a,a.sf().nb==null?'':a.sf().nb,a.sf().jb==null?'':a.sf().jb);if(!a.s&&a.vf()){a.s=true;null.lg(a.tf())}}
function IR(a,b){var c,d,e,f;if(a._){c=!(!!a.a&&a.a.K>a.b.K)&&b;e=!(!!a.X&&a.X.j>a.b.j)&&b;wS(a.b,c,e,c,e);if(a.a){c=!(!!a.b&&a.b.K>=a.a.K)&&b;d=!(!!a.W&&a.W.j>a.a.j)&&b;wS(a.a,c,d,c,d)}if(a.X){f=!(!!a.W&&a.W.K>a.X.K)&&b;e=!(!!a.b&&a.b.j>=a.X.j)&&b;wS(a.X,f,e,f,e)}if(a.W){f=!(!!a.X&&a.X.K>=a.W.K)&&b;d=!(!!a.a&&a.a.j>=a.W.j)&&b;wS(a.W,f,d,f,d)}}}
function vT(a){var b,c,d;if(a==null){return false}d=a.length;if(d<1||d>31){return false}for(c=0;c<d;c++){b=(Srb(c,a.length),a.charCodeAt(c));switch(b){case 47:case 92:case 63:case 42:case 93:case 91:case 58:return false;default:continue;}}Srb(0,a.length);if(a.charCodeAt(0)==39||(Srb(d-1,a.length),a.charCodeAt(d-1)==39)){return false}return true}
function Ufb(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;n=b.length;i=n;Srb(0,b.length);if(b.charCodeAt(0)==45){l=-1;m=1;--n}else{l=1;m=0}f=(fgb(),egb)[10];e=n/f|0;q=n%f;q!=0&&++e;h=Xp(Zq,fwb,16,e,15,1);c=dgb[8];g=0;o=m+(q==0?f:q);for(p=m;p<i;p=o,o=p+f){d=gdb(b.substr(p,o-p));j=(Cgb(),Ggb(h,h,g,c));j+=vgb(h,g,d);h[g++]=j}k=g;a.e=l;a.d=k;a.a=h;tfb(a)}
function fH(){var d=$wnd.onbeforeunload;var e=$wnd.onunload;$wnd.onbeforeunload=function(a){var b,c;try{b=asb(lG)()}finally{c=d&&d(a)}if(b!=null){return b}if(c!=null){return c}};$wnd.onunload=asb(function(a){try{fG();_F&&cp((!aG&&(aG=new yG),aG))}finally{e&&e(a);$wnd.onresize=null;$wnd.onscroll=null;$wnd.onbeforeunload=null;$wnd.onunload=null}})}
function Ap(b,c){var d,e,f,g,h,i;if(!c){throw CD(new Kdb('Cannot fire null event'))}try{++b.b;h=(e=Dp(b,c.ke(),null),e);d=null;i=b.c?h.Uf(h.size()):h.Tf();while(b.c?i.Xf():i.Se()){g=b.c?i.Yf():i.Te();try{c.ie(g)}catch(a){a=BD(a);if(Oq(a,18)){f=a;!d&&(d=new cnb);Chb(d.a,f,d)}else throw CD(a)}}if(d){throw CD(new Jp(d))}}finally{--b.b;b.b==0&&Ep(b)}}
function tW(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;k=(d.offsetWidth||0)|0;j=b-k;i=(Fh(),Eh).Vd(d);if(j>0){o=(fG(),(nj($doc).clientWidth|0)+kj($doc));n=kj($doc);h=o-i;e=i-n;h<b&&e>=j&&(i-=j)}l=Eh.Wd(d);p=(fG(),lj($doc));m=lj($doc)+(nj($doc).clientHeight|0);f=l-p;g=m-(l+((d.offsetHeight||0)|0));g<c&&f>=c?(l-=c):(l+=(d.offsetHeight||0)|0);NM(a.qb,i,l)}
function zP(a,b){a.C=b;a.F='1';!!a&&(he((!a.B&&(a.B=new P_),a.B)).tkPid='1',undefined);rp((!a.D&&(a.D=new up(a)),a.D),(N1(),M1),a);e_((!a.B&&(a.B=new P_),a.B),a.F);GP(a,Nx,a.a);!a.B&&(a.B=new P_);a.g=new Cab;y_((!a.B&&(a.B=new P_),a.B),a.g);u_((!a.B&&(a.B=new P_),a.B),new fZ(a));a.b=He(v0(a.C),new gZ,(on(),on(),nn));i9(a.g.d,$p(Vp(nB,1),esb,1,5,[]))}
function EN(a,b){var c;b.b=a.b;b.e=a.e;b.f=a.f;xh(b.a,mh(a.a));c=(jF(),b.Wc).style;qe(b,a.Wc.className||'');a.i>-1&&(c[cvb]=a.i+(em(),Lub),undefined);a.j>-1&&(c[dvb]=a.j+(em(),Lub),undefined);a.d>-1&&(c[ktb]=a.d+(em(),Lub),undefined);a.n>-1&&(c[ltb]=a.n+(em(),Lub),undefined);a.k>-1&&(c[Eub]=a.k+(em(),Lub),undefined);a.g>-1&&(c[Dub]=a.g+(em(),Lub),undefined)}
function ngb(a,b){var c,d,e,f,g,h;f=(d=YD(a),d!=0?Cdb(d):Cdb(YD(TD(a,32)))+32);g=(e=YD(b),e!=0?Cdb(e):Cdb(YD(TD(b,32)))+32);h=$wnd.Math.min(f,g);f!=0&&(a=UD(a,f));g!=0&&(b=UD(b,g));do{if(FD(a,b)>=0){a=VD(a,b);a=UD(a,(c=YD(a),c!=0?Cdb(c):Cdb(YD(TD(a,32)))+32))}else{b=VD(b,a);b=UD(b,(c=YD(b),c!=0?Cdb(c):Cdb(YD(TD(b,32)))+32))}}while(FD(a,0)!=0);return SD(b,h)}
function jX(a,b,c){var d,e,f;f=0;e=0;d=c.d;if(a.ob>=b.col1&&b.col2>a.ob){EV(a,b,c);Chb(a.Kb,b,c);f=1}else{f=xR(a.a.g,b.col1,b.col2+1);d.style[ltb]=f+(em(),Lub)}if(a.Rc>=b.row1&&b.row2>a.Rc){DV(a,b,c);Chb(a.Kb,b,c);e=1}else{e=xR(a.a.W.W,b.row1,b.row2+1);d.style[ktb]=e+(em(),Lub)}f==0||e==0?(c.d.style[Htb]=(wk(),jtb),undefined):(c.d.style[Htb]='flex',undefined)}
function kgb(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;n=a.a;o=a.d;p=a.e;if(o==1){d=ED(n[0],Iyb);e=ED(b,Iyb);f=HD(d,e);j=OD(d,e);p!=c&&(f=QD(f));p<0&&(j=QD(j));return $p(Vp(yB,1),esb,11,0,[Xfb(f),Xfb(j)])}h=o;i=p==c?1:-1;g=Xp(Zq,fwb,16,h,15,1);k=$p(Vp(Zq,1),fwb,16,15,[lgb(g,n,o,b)]);l=new Lfb(i,h,g);m=new Lfb(p,1,k);tfb(l);tfb(m);return $p(Vp(yB,1),esb,11,0,[l,m])}
function aX(a){var b,c,d,e,f,g,h;eX(a,a.I,a.F,a.lb,a.ib,true,a.H);g=a.Z?a.H+1:a.H;if(a.J.childNodes.length==g){return}$g(a.J);for(e=1;e<=g;e++){h=Wi($doc);c=Oi($doc);Vg(a.J,c);c.appendChild(h);(Fh(),Eh).ce(h,''+e);c.className=twb;f=e;jF();hF.Ge(c,1);EF(c,new SX(a,f))}$g(a.D);for(d=1;d<=g-1;d++){b=Oi($doc);Vg(a.D,b);b.className=pvb;b.style[dvb]=18*d+(em(),Lub)}}
function lgb(a,b,c,d){var e,f,g,h,i,j,k;j=0;f=ED(d,Iyb);for(h=c-1;h>=0;h--){k=RD(SD(j,32),ED(b[h],Iyb));if(FD(k,0)>=0){i=HD(k,f);j=OD(k,f)}else{e=UD(k,1);g=d>>>1;i=HD(e,g);j=OD(e,g);j=DD(SD(j,1),ED(k,1));if((d&1)!=0){if(FD(i,j)<=0){j=VD(j,i)}else{if(ND(VD(i,j),f)){j=DD(j,VD(f,i));i=VD(i,1)}else{j=DD(j,VD(SD(f,1),i));i=VD(i,2)}}}}a[h]=YD(ED(i,Iyb))}return YD(j)}
function uR(a,b){var c,d;a.S=cV(a.Q,a.f,a.L);a.T=dV(a.Q,a.f,a.L);a.R=_U(a.Q,a.f,a.L);a.g=!a.S&&!a.T;a.i=!a.S&&!a.R;a.t=ph(a.Q.yc);a.u=(a.Q.yc.scrollTop||0)|0;a.c=(c=kj($doc),t1(),(Fh(),b).type.indexOf(Evb)!=-1?Nm(b.changedTouches[0])+c:$h(b.clientX||0)+c);a.d=(d=lj($doc),b.type.indexOf(Evb)!=-1?Om(b.changedTouches[0])+d:$h(b.clientY||0)+d);a.U=a.f;a.V=a.L;QR(a)}
function Lgb(a,b,c){var d,e,f,g,h;for(f=0;f<b;f++){d=0;for(h=f+1;h<b;h++){d=DD(DD(PD(ED(a[f],Iyb),ED(a[h],Iyb)),ED(c[f+h],Iyb)),ED(YD(d),Iyb));c[f+h]=YD(d);d=UD(d,32)}c[f+b]=YD(d)}agb(c,c,b<<1);d=0;for(e=0,g=0;e<b;++e,g++){d=DD(DD(PD(ED(a[e],Iyb),ED(a[e],Iyb)),ED(c[g],Iyb)),ED(YD(d),Iyb));c[g]=YD(d);d=UD(d,32);++g;d=DD(d,ED(c[g],Iyb));c[g]=YD(d);d=UD(d,32)}return c}
function PP(b){var c,d,e,f;e=new v3(b.ig);try{f=N3(new m3(e,'getWidget'));d=u3(f);return d}catch(a){a=BD(a);if(Oq(a,79)){c=a;throw CD(new tdb('Default implementation of createWidget() does not work for '+Kcb(b.ig)+'. This might be caused by explicitely using '+'super.createWidget() or some unspecified '+'problem with the widgetset compilation.',c))}else throw CD(a)}}
function vfb(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;f=b.e;if(f==0){throw CD(new tcb(Jyb))}e=b.d;d=b.a;if(e==1){return kgb(a,d[0],f)}n=a.a;o=a.d;c=o!=e?o>e?1:-1:ugb(n,d,o);if(c<0){return $p(Vp(yB,1),esb,11,0,[pfb,a])}p=a.e;h=o-e+1;k=e;i=p==f?1:-1;g=Xp(Zq,fwb,16,h,15,1);j=jgb(g,h,n,o,d,e);l=new Lfb(i,h,g);m=new Lfb(p,k,j);tfb(l);tfb(m);return $p(Vp(yB,1),esb,11,0,[l,m])}
function yfb(a,b){var c,d,e,f;c=a.e<0?new Lfb(1,a.d,a.a):a;d=b.e<0?new Lfb(1,b.d,b.a):b;if(c.e==0){return d}else if(d.e==0){return c}if((c.d==1||c.d==2&&c.a[1]>0)&&(d.d==1||d.d==2&&d.a[1]>0)){return Xfb(ngb((f=c.d>1?RD(SD(c.a[1],32),ED(c.a[0],Iyb)):ED(c.a[0],Iyb),PD(c.e,f)),(e=d.d>1?RD(SD(d.a[1],32),ED(d.a[0],Iyb)):ED(d.a[0],Iyb),PD(d.e,e))))}return ogb(sfb(c),sfb(d))}
function qN(a,b){if(b){Mm(a.e,RH(a.g.a));te(a.g,false);a.e.style[Htb]=(wk(),Ntb);a.e.focus();a.e.select()}else{hI(a.g,a.e.value);te(a.g,true);a.e.style[Htb]=(wk(),jtb);aU(a.r,RH(a.g.a),a.b,a.d)}ke(a.f)&&(ke(a.a)||ke(a.g)||Tdb((wk(),Ntb),Ej(a.e.style)))?(je(a.f).className||'').indexOf(kvb)!=-1||re(a.f,kvb,true):(je(a.f).className||'').indexOf(kvb)!=-1&&re(a.f,kvb,false)}
function JW(a,b,c){var d,e;a._=true;$S(a.$,'.'+a.zc+' .sheet div'+(Vvb+a.qc+'.row'+a.rc),0);qe(a.sb,Zub+a.qc+$ub+a.rc+' cell'+' '+(e=qU(a,a.qc,a.rc),!e?'cs0':e.cellStyle));if(gV(a,Zub+a.qc+$ub+a.rc)){a.ab=true;d=AU(a,Zub+a.qc+$ub+a.rc);!!d&&pe(a.sb,Fj(d.d.style))}fX(a);b&&(YU(a,a.qc,a.rc)||fW(a,a.qc,a.rc),p1((ng(),mg),new MX(a,false)));p1((ng(),mg),new OX(a,c));KK(a.sb,c)}
function gdb(a){var b,c,d,e,f;if(a==null){throw CD(new Mdb(ssb))}d=a.length;e=d>0&&(Srb(0,a.length),a.charCodeAt(0)==45||(Srb(0,a.length),a.charCodeAt(0)==43))?1:0;for(b=e;b<d;b++){if(Gcb((Srb(b,a.length),a.charCodeAt(b)))==-1){throw CD(new Mdb(rsb+a+'"'))}}f=parseInt(a,10);c=f<tsb;if(isNaN(f)){throw CD(new Mdb(rsb+a+'"'))}else if(c||f>jsb){throw CD(new Mdb(rsb+a+'"'))}return f}
function v$(a,b,c){var d,e,f,g,h,i,j;b==0?(b=1):b<0&&(b=EU(a.W)+1);b>a.i&&(b=a.i);c==0?(c=1):c<0&&(c=oU(a.W)+1);c>a.P&&(c=a.P);h=a.W.qc;i=a.W.rc;if(b<=h){d=b;e=h}else{d=h;e=b}if(c<=i){f=c;g=i}else{f=i;g=c}if(a.u.f){BO(a.u,a.Y,a.Z,b,c,false)}else{j=qP(a.J,f,g,d,e);tX(a.W,j.col1,j.col2,j.row1,j.row2);rX(a.W,j.col1,j.col2,j.row1,j.row2,true);EO(a.u,EZ(j.col1,j.col2,j.row1,j.row2))}}
function hq(a,b,c,d,e,f){var g,h,i,j,k,l,m;j=kq(b)-kq(a);g=wq(b,j);i=dq(0,0,0);while(j>=0){h=nq(a,g);if(h){j<22?(i.l|=1<<j,undefined):j<44?(i.m|=1<<j-22,undefined):(i.h|=1<<j-44,undefined);if(a.l==0&&a.m==0&&a.h==0){break}}k=g.m;l=g.h;m=g.l;g.h=l>>>1;g.m=k>>>1|(l&1)<<21;g.l=m>>>1|(k&1)<<21;--j}c&&jq(i);if(f){if(d){aq=tq(a);e&&(aq=zq(aq,(Iq(),Gq)))}else{aq=dq(a.l,a.m,a.h)}}return i}
function ceb(a,b,c){var d,e,f,g,h,i,j,k;d=new RegExp(b,'g');j=Xp(tB,wsb,2,0,6,1);e=0;k=a;g=null;while(true){i=d.exec(k);if(i==null||k==''||e==c-1&&c>0){j[e]=k;break}else{h=i.index;j[e]=k.substr(0,h);k=eeb(k,h+i[0].length,k.length);d.lastIndex=0;if(g==k){j[e]=k.substr(0,1);k=k.substr(1)}g=k;++e}}if(c==0&&a.length>0){f=j.length;while(f>0&&j[f-1]==''){--f}f<j.length&&(j.length=f)}return j}
function VN(a,b){var c,d,e,f;d=!a.c.vb&&!!(Fh(),b).ctrlKey||!!(Fh(),b).metaKey;f=zX(b);e=kV(a.c,f);if(!d||!e){return}if(((Fh(),b).keyCode|0)==67||(b.keyCode|0)==88){(_e(),$e).Xe((jF(),a.Wc));KK(a,QN(a.a));c=oh(a.Wc,Rub).length;c>0&&JK(a,0,c);a.Wc.style[Dub]=(em(),'100.0px');zg((ng(),new ZN(a,b)),100)}if((b.keyCode|0)==86){(jF(),a.Wc)[Rub]='';(_e(),$e).Xe(a.Wc);zg((ng(),new _N(a)),100)}}
function k1(){var a,b,c,d,e,f,g,h,i,j;this.a=new cnb;new Zmb;a=$doc;a.getElementsByTagName(Uwb)[0];i=a.getElementsByTagName('script');for(e=0;e<i.length;e++){b=i[e];j=b.src;j!=null&&j.length!=0&&_mb(this.a,j)}g=a.getElementsByTagName(_sb);for(d=0;d<g.length;d++){f=g[d];h=f.rel;c=f.href;Udb(Vwb,h)&&c!=null&&c.length!=0&&_mb(this.a,c);Udb('import',h)&&c!=null&&c.length!=0&&_mb(this.a,c)}}
function ES(a,b){var c,d;if(!a.c._){if(!a.b){return}d=(Fh(),b).keyCode|0;c=Eh.Qd(b);if((c==122||c==121)&&(!!b.ctrlKey||!!b.metaKey)){Eh.Ud(b);b.stopPropagation();return}if(c==0){switch(d){case 38:case 40:case 37:case 39:case 9:case 8:case 46:case 32:Eh.Ud(b);b.stopPropagation();break;case 13:y$(a.c.a,b,String.fromCharCode(c));}}else !b.ctrlKey&&!b.metaKey&&y$(a.c.a,b,String.fromCharCode(c))}}
function tgb(a,b,c,d,e){var f,g;f=DD(ED(b[0],Iyb),ED(d[0],Iyb));a[0]=YD(f);f=TD(f,32);if(c>=e){for(g=1;g<e;g++){f=DD(f,DD(ED(b[g],Iyb),ED(d[g],Iyb)));a[g]=YD(f);f=TD(f,32)}for(;g<c;g++){f=DD(f,ED(b[g],Iyb));a[g]=YD(f);f=TD(f,32)}}else{for(g=1;g<c;g++){f=DD(f,DD(ED(b[g],Iyb),ED(d[g],Iyb)));a[g]=YD(f);f=TD(f,32)}for(;g<e;g++){f=DD(f,ED(d[g],Iyb));a[g]=YD(f);f=TD(f,32)}}FD(f,0)!=0&&(a[g]=YD(f))}
function yU(a,b,c){var d,e,f,g,h,i,j,k,l;f=b-1;j=c-1;if(j<0||f<0){return null}if(a.Rc<c){l=c>=a.db;k=a.d.a.length>c-a.db;if(l&&k){g=yjb(a.d,c-a.db).a.length>f;if(g){return yjb(yjb(a.d,c-a.db),f)}}}else if(a.ob<b){h=b-a.bb;k=a.Pc.a.length>j;if(k){i=b>=a.bb;g=yjb(a.Pc,j).a.length>h;if(i&&g){return yjb(yjb(a.Pc,j),h)}}}else{e=j*a.ob+f;d=a.Lc.a.length>e;if(e>=0&&d){return yjb(a.Lc,e)}}return null}
function r5(a,b,c,d,e){var f,g;f=null;if(b!=null){f=o5(d);!f&&vqb(xqb((Icb(Mz),Mz.k)),'Did not find the link tag for the old theme ('+d+'), adding a new stylesheet for the new theme ('+e+')')}if(c!=null){g=Si($doc);g.rel=Vwb;g.type=mwb;g.href=e;l1(g,new E5(a,c,e,f),null);f?Yg($doc.getElementsByTagName(Uwb)[0],g,f):Vg($doc.getElementsByTagName(Uwb)[0],g)}else{!!f&&_g(Ih((Fh(),f)),f);m5(a,null)}}
function CR(a,b){var c,d,e,f,g,h,i,j;a.o=true;c=(g=kj($doc),t1(),(Fh(),b).type.indexOf(Evb)!=-1?Nm(b.changedTouches[0])+g:$h(b.clientX||0)+g);d=(h=lj($doc),b.type.indexOf(Evb)!=-1?Om(b.changedTouches[0])+h:$h(b.clientY||0)+h);if(vR(a,d,c)){return}i=c-a.v+ph(a.Q.yc)-a.t;j=d-a.w+((a.Q.yc.scrollTop||0)|0)-a.u;i-=70;j-=20;e=a.q.g;f=a.q.W.W;a.U=wR(e,a.O,i,true);a.V=wR(f,a.P,j,true);v$(a.Q.a,a.U,a.V)}
function BR(a,b){var c,d,e,f,g,h,i,j,k,l;a.j=false;a.s=false;c=(i=kj($doc),t1(),(Fh(),b).type.indexOf(Evb)!=-1?Nm(b.changedTouches[0])+i:$h(b.clientX||0)+i);d=(j=lj($doc),b.type.indexOf(Evb)!=-1?Om(b.changedTouches[0])+j:$h(b.clientY||0)+j);if(vR(a,d,c)){return}k=c-a.v+ph(a.Q.yc)-a.t;l=d-a.w+((a.Q.yc.scrollTop||0)|0)-a.u;f=a.q.g;h=a.q.W.W;e=wR(f,a.e,k,false);g=wR(h,a.K,l,false);e>=0&&g>=0&&SR(a,e,g)}
function bX(b){var c,d,e,f,g,h,i,j;i=b.a.n;try{f=new Gjb(new Lib(i));ykb();kkb(f.a,f.a.length);g=f.a.length;h=new web(HU(b.Cc));for(d=0;d<g;d++){e=(Lrb(d,f.a.length),f.a[d]);j=khb(nnb(i.a,e));seb(h,Wvb+b.zc+' .sheet .cell.cf'+e+' {'+j+'}')}$g(b.Cc);Vg(b.Cc,cj($doc,h.a))}catch(a){a=BD(a);if(Oq(a,21)){c=a;uqb(b.U,'SheetWidget:updateConditionalFormattingStyles: '+yf(c,c.Fd())+swb)}else throw CD(a)}}
function Qeb(a,b){var c,d,e,f,g,h;e=Web(a);h=Web(b);if(e==h){if(a.e==b.e&&a.a<54&&b.a<54){return a.f<b.f?-1:a.f>b.f?1:0}d=a.e-b.e;c=(a.d>0?a.d:$wnd.Math.floor((a.a-1)*Hyb)+1)-(b.d>0?b.d:$wnd.Math.floor((b.a-1)*Hyb)+1);if(c>d+1){return e}else if(c<d-1){return -e}else{f=(!a.c&&(a.c=Wfb(a.f)),a.c);g=(!b.c&&(b.c=Wfb(b.f)),b.c);d<0?(f=Dfb(f,Kgb(-d))):d>0&&(g=Dfb(g,Kgb(d)));return rfb(f,g)}}else return e<h?-1:1}
function ST(a){var b,c,d,e,f,g,h,i;ah(a.fb);for(f=new akb(a.K);f.a<f.c.a.length;){d=$jb(f);g=Ih((Fh(),d));!!g&&g.removeChild(d)}a.K.a=Xp(nB,esb,1,0,5,1);for(e=new akb(a.hc);e.a<e.c.a.length;){d=$jb(e);g=Ih((Fh(),d));!!g&&g.removeChild(d)}a.hc.a=Xp(nB,esb,1,0,5,1);for(i=new akb(a.jc);i.a<i.c.a.length;){h=$jb(i);for(c=new akb(h);c.a<c.c.a.length;){b=$jb(c);ah(b.d)}h.a=Xp(nB,esb,1,0,5,1)}a.jc.a=Xp(nB,esb,1,0,5,1)}
function GT(a,b){var c,d,e,f,g;!a.Bc&&(a.Bc=new Zmb);d=b.b;g=b.k;e=Zub+d+$ub+g;if(d!=0&&g!=0){Dhb(a.Bc,e,b);if(d>=a.bb&&d<=a.xb&&g>=a.db&&g<=a.zb||d<=a.ob&&g<=a.Rc||d>a.ob&&d<=a.xb&&g<=a.Rc||g>a.Rc&&g<=a.zb&&d<=a.ob){c=pU(a,d,g);f=b.Vc;if(f){if(a==f){oM(c,(jF(),b.Wc))}else{Ne(b);oM(c,(jF(),b.Wc));Pe(b,a)}}else{oM(c,(jF(),b.Wc));Pe(b,a)}}}else{while(Bhb(a.Bc,e)){JQ(b,--d);e=Zub+d+$ub+g}Dhb(a.Bc,e,b)}PQ(b,a,a.yc)}
function TT(a,b){var c,d,e,f,g,h;a.Db=false;for(e=new akb(vU(a));e.a<e.c.a.length;){d=$jb(e);KV(a,d)}a.S=null;for(h=(f=(new Wib(a.Ac)).a.Sf().Ie(),new _ib(f));h.a.Se();){g=(c=h.a.Te(),c._f());KV(a,g)}Ghb(a.Ac);if(a.T){Ghb(a.T);a.T=null}ST(a);Ghb(a.e);Ghb(a.pc);TS(a.w);WT(a);$T(a);UT(a);ZT(a);VT(a);if(b){TS(a.Dc);ah(a.w);ah(a.Cc);ah(a.Dc);ah(a.$);ah(a.Vb);ah(a.Fb);!!a.pb&&ah(a.pb);if(a.Nb){_L(a.Nb.a);a.Nb=null}}}
function XU(a,b,c,d,e){return (b<=a.ob||b>=zU(a)&&b<=EU(a))&&(d<=a.Rc||d<=NU(a)&&d>=oU(a))&&(b>=a.bb&&b<=a.xb&&e>=a.db&&e<=a.zb||b<=a.ob&&e<=a.Rc||b>a.ob&&b<=a.xb&&e<=a.Rc||e>a.Rc&&e<=a.zb&&b<=a.ob)&&(c>=a.bb&&c<=a.xb&&d>=a.db&&d<=a.zb||c<=a.ob&&d<=a.Rc||c>a.ob&&c<=a.xb&&d<=a.Rc||d>a.Rc&&d<=a.zb&&c<=a.ob)&&(c>=a.bb&&c<=a.xb&&e>=a.db&&e<=a.zb||c<=a.ob&&e<=a.Rc||c>a.ob&&c<=a.xb&&e<=a.Rc||e>a.Rc&&e<=a.zb&&c<=a.ob)}
function BO(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p;if(b==d&&c==e){g=DZ(b,c)}else{if(b>d){o=b;b=d;d=o}if(c>e){o=c;c=e;e=o}g=DZ(b,c)+':'+DZ(d,e)}if(f&&a.s>=0){g=','+g;++a.q}k=HK(a.e);i=k>0;if(i){l=GK(a.e);h=l+k;a.s=l;a.q=h}else if(f||a.s<0){l=a.q;h=a.q;a.s=a.q}else{l=a.s;h=a.q}p=(j=IK(a.e),j==null?'':j);m=p.substr(0,l);n=eeb(p,h,p.length);p=m+g+n;a.q=(m+g).length;KK(a.e,p);a.e==a.w&&KK(a.j,p);p1((ng(),mg),new cP(a))}
function UI(a,b){var c,d,e;d=(jF(),_i($doc));a.d=Yi($doc);Vg(d,tF(a.d));if(!b){e=$i($doc);Vg(a.d,tF(e))}a.i=b;c=(fI(),eI).We();Vg(c,tF(d));oe(a,c);Pd();Cb(jd,a.Wc);a.Tc==-1?wF(a.Wc,2225|(a.Wc.__eventBits||0)):(a.Tc|=2225);a.Wc.className='gwt-MenuBar';b?re(a,xe(a.Wc)+'-'+'vertical',true):re(a,xe(a.Wc)+'-'+'horizontal',true);a.Wc.style['outline']='0px';a.Wc.setAttribute('hideFocus','true');He(a,new lJ(a),(_m(),_m(),$m))}
function nN(a){var b,c;if(a.c){b=hh(a.c);c=ih(a.c);if(b>=gh(a.o)&&b<hh(a.o)&&c>=ih(a.o)&&c<=fh(a.o)){jN(a);(jF(),a.Wc).style[Itb]=Utb;!!a.t&&(a.t.style[Itb]=Utb,undefined);a.i.style[Itb]=(sm(),Utb);a.M||QM(a)}else{(jF(),a.Wc).style[Itb]=Vtb;!!a.t&&(a.t.style[Itb]=Vtb,undefined);a.i.style[Itb]=(sm(),Vtb)}}else{(jF(),a.Wc).style[Itb]=Vtb;!!a.t&&(a.t.style[Itb]=Vtb,undefined);a.i.style[Itb]=(sm(),Vtb);HM(a,false);ah(a.i)}}
function tO(a,b){var c,d,e,f,g,h,i,j,k,l;jO(a);k=uO(a,b);Ghb(a.G);e=0;d=0;for(j=new akb(k);j.a<j.c.a.length;){i=$jb(j);h=vO(a,i);if(!h){continue}if(Bhb(a.G,i)){c=Ahb(a.G,i)}else{d=d%bO.a.length;c=yjb(bO,d);Dhb(a.G,i,c);++d}c=_db(c,'%s','0.25');sO(a,h,c);g=b.indexOf(i,e);f=(jF(),Wi($doc));l=b.substr(e,g-e);l=aeb(l,' ','&nbsp;');f.innerHTML=l||'';Vg(a.r,f);e=g+i.length;f=Wi($doc);(Fh(),Eh).ce(f,i);f.style[ovb]=c;Vg(a.r,f)}}
function KV(b,c){var d,e,f,g,h;try{d=(jF(),c.Wc);g=Ih((Fh(),d));h=c.Vc;e=mf(b.yc,g)||mf(b.Mc,g)||mf(b.Oc,g)||mf(b.c,g);if(e||M(c,b.S)||!!g&&!!g.parentNode&&Zg(b.yc,g.parentNode)){Pe(c,null);f=Ih(d);!!f&&f.removeChild(d);return true}else if(M(b,h)){Pe(c,null);return true}else{return false}}catch(a){a=BD(a);if(Oq(a,21)){pqb(b.U,(rpb(),qpb),'Exception while removing child widget from SheetWidget')}else throw CD(a)}return false}
function PT(a,b){var c,d,e,f,g,h;for(e=new akb(b);e.a<e.c.a.length;){d=$jb(e);h=Zub+d.col+$ub+d.row;d.value==null?Fhb(a.e,h):Dhb(a.e,h,d);if(!wW(a,h,d.value,d.cellStyle,d.needsMeasure)){f=null;bV(a,d.col,d.row)?(f=yjb(yjb(a.jc,d.row-a.db),d.col-a.bb)):aV(a,d.col,d.row)&&(f=yU(a,d.col,d.row));if(f){lM(f,d.value,d.cellStyle,d.needsMeasure);f.g=true}g=a.Rc>0?0:a.bb;for(;g<d.col;g++){c=pU(a,g,d.row);!!c&&(c.g=true)}}}mX(a,false)}
function uV(b){var c,d,e,f,g;e=b.Kc+((b.yc.scrollTop||0)|0);d=ph(b.yc);g=e-b.Pb;c=d-b.Ob;if($wnd.Math.abs(g)<(b.a.M/2|0)&&$wnd.Math.abs(c)<(b.a.j/2|0)){return}try{if($wnd.Math.abs(c)>(b.a.j/2|0)){b.Ob=d;c>0?QU(b,d):c<0&&PU(b,d)}if($wnd.Math.abs(g)>(b.a.M/2|0)){b.Pb=e;g>0?UU(b,e):g<0&&VU(b,e)}_4(b.Qb)}catch(a){a=BD(a);if(Oq(a,18)){f=a;uqb(b.U,'SheetWidget:updateSheetDisplay: '+yf(f,f.Fd()))}else throw CD(a)}YV(b);_W(b,g,c);kU(b)}
function acb(){CQ.call(this);this.p=new jcb;this.b=new bcb;this.d=new Zmb;this.d.put('error',new gcb('Error: ',' - close with ESC-key',(Rbb(),Pbb)));this.d.put('warning',new gcb('Warning: ',null,Pbb));this.d.put('humanized',new gcb('Info: ',null,Pbb));this.d.put('tray',new gcb('Status: ',null,Pbb));this.d.put('assistive',new gcb('Note: ',null,Pbb));this.f=new Ubb;this.c=new dcb;this.i=new hcb;this.j=new icb;this.lb='v-ui';this.k=1}
function wgb(a,b){var c,d,e,f,g,h,i,j,k,l;g=a.e;i=b.e;if(i==0){return a}if(g==0){return b.e==0?b:new Lfb(-b.e,b.d,b.a)}f=a.d;h=b.d;if(f+h==2){c=ED(a.a[0],Iyb);d=ED(b.a[0],Iyb);g<0&&(c=QD(c));i<0&&(d=QD(d));return Xfb(VD(c,d))}e=f!=h?f>h?1:-1:ugb(a.a,b.a,f);if(e==-1){l=-i;k=g==i?xgb(b.a,h,a.a,f):sgb(b.a,h,a.a,f)}else{l=g;if(g==i){if(e==0){return qfb(),pfb}k=xgb(a.a,f,b.a,h)}else{k=sgb(a.a,f,b.a,h)}}j=new Lfb(l,k.length,k);tfb(j);return j}
function lW(a,b){var c,d,e,f,g;if(!a.s){a.s=b}else{Ghb(a.s);!!b&&dhb(a.s,b)}if(!!b&&b.a.c+b.b.c!=0){g=new ueb;for(e=(f=(new Lib(b)).a.Sf().Ie(),new Rib(f));e.a.Se();){c=_db(_db((d=e.a.Te(),d.$f()),Zub,Vvb),' r','.r');g.a+=''+c;e.a.Se()&&(g.a+=',',g)}if(!a.pb){a.pb=Xi($doc);a.pb.type=mwb;vh(a.pb,a.zc+'-hyperlinkstyle');Vg(a.w.parentNode,a.pb);g.a+='{ cursor: pointer !important; }';WS(a.pb,g.a)}else{$S(a.pb,g.a,0)}}else{!!a.pb&&$S(a.pb,dwb,0)}}
function vG(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;k=new Zmb;if(b!=null&&b.length>1){l=b.substr(1);for(h=ceb(l,'&',0),i=0,j=h.length;i<j;++i){g=h[i];f=ceb(g,'=',2);e=f[0];if(e.length==0){continue}m=f.length>1?f[1]:'';try{m=(Mp(m),o=/\+/g,decodeURIComponent(m.replace(o,'%20')))}catch(a){a=BD(a);if(!Oq(a,81))throw CD(a)}n=k.get(e);if(!n){n=new Ejb;k.put(e,n)}n.add(m)}}for(d=k.Sf().Ie();d.Se();){c=d.Te();c.ag(Bkb(c._f()))}k=(ykb(),new Slb(k));return k}
function _W(a,b,c){var d,e,f,g,h,i,j;e=yjb(yjb(a.jc,0),0);j=yjb(a.jc,a.jc.a.length-1);h=yjb(j,j.a.length-1);f=e.k;i=h.k;d=e.c;g=h.c;LV(a);if(f>a.zb||i<a.db||d>a.xb||g<a.bb){aW(a,a.db,a.zb,a.bb,a.xb,a.jc,a.yc);b!=0&&a.ob>0&&aW(a,a.db,a.zb,1,a.ob,a.d,a.c);c!=0&&a.Rc>0&&aW(a,1,a.Rc,a.bb,a.xb,a.Pc,a.Oc)}else{bW(a,b,c,a.db,a.zb,a.bb,a.xb,a.jc,a.yc);b!=0&&a.ob>0&&bW(a,b,0,a.db,a.zb,1,a.ob,a.d,a.c);c!=0&&a.Rc>0&&bW(a,0,c,1,a.Rc,a.bb,a.xb,a.Pc,a.Oc)}}
function ufb(a,b){var c,d,e,f,g,h,i,j,k,l;if(b.e==0){throw CD(new tcb(Jyb))}e=b.e;if(b.d==1&&b.a[0]==1){return b.e>0?a:a.e==0?a:new Lfb(-a.e,a.d,a.a)}k=a.e;j=a.d;d=b.d;if(j+d==2){l=HD(ED(a.a[0],Iyb),ED(b.a[0],Iyb));k!=e&&(l=QD(l));return Xfb(l)}c=j!=d?j>d?1:-1:ugb(a.a,b.a,j);if(c==0){return k==e?lfb:kfb}if(c==-1){return pfb}g=j-d+1;f=Xp(Zq,fwb,16,g,15,1);h=k==e?1:-1;d==1?lgb(f,a.a,j,b.a[0]):jgb(f,g,a.a,j,b.a,d);i=new Lfb(h,g,f);tfb(i);return i}
function oX(a,b,c,d,e,f){var g,h;Fhb(a.Bc,Zub+d+$ub+c);Dhb(a.Bc,Zub+f+$ub+e,b);h=b.Vc;if(f>=a.bb&&f<=a.xb&&e>=a.db&&e<=a.zb||f<=a.ob&&e<=a.Rc||f>a.ob&&f<=a.xb&&e<=a.Rc||e>a.Rc&&e<=a.zb&&f<=a.ob){g=pU(a,f,e);if(h){if(M(a,h)){(d>=a.bb&&d<=a.xb&&c>=a.db&&c<=a.zb||d<=a.ob&&c<=a.Rc||d>a.ob&&d<=a.xb&&c<=a.Rc||c>a.Rc&&c<=a.zb&&d<=a.ob)&&jM(pU(a,d,c));oM(g,(jF(),b.Wc))}else{Ne(b);oM(g,(jF(),b.Wc));Pe(b,a)}}else{oM(g,(jF(),b.Wc));Pe(b,a)}}else !!h&&Ne(b)}
function tR(a,b){var c,d;a.S=cV(a.Q,a.f,a.L);a.T=dV(a.Q,a.f,a.L);a.R=_U(a.Q,a.f,a.L);a.g=!a.S&&!a.T;a.i=!a.S&&!a.R;a.t=ph(a.Q.yc);a.u=(a.Q.yc.scrollTop||0)|0;a.c=(c=kj($doc),t1(),(Fh(),b).type.indexOf(Evb)!=-1?Nm(b.changedTouches[0])+c:$h(b.clientX||0)+c);a.d=(d=lj($doc),b.type.indexOf(Evb)!=-1?Om(b.changedTouches[0])+d:$h(b.clientY||0)+d);a.U=a.f;a.V=a.L;a.C=true;a.j=false;a.s=false;QR(a);uF((jF(),a.Wc));Eh.Ud(b);dh(he(a.Q),'selecting');IR(a,true)}
function Kgb(a){Cgb();var b,c,d,e;b=Vq(a);if(a<Agb.length){return Agb[b]}else if(a<=50){return Efb((qfb(),nfb),b)}else if(a<=ztb){return Gfb(Efb(zgb[1],b),b)}if(a>1000000){throw CD(new tcb('power of ten too big'))}if(a<=jsb){return Gfb(Efb(zgb[1],b),b)}d=Efb(zgb[1],jsb);e=d;c=JD(a-jsb);b=Vq(a%jsb);while(FD(c,jsb)>0){e=Dfb(e,d);c=VD(c,jsb)}e=Dfb(e,Efb(zgb[1],b));e=Gfb(e,jsb);c=JD(a-jsb);while(FD(c,jsb)>0){e=Gfb(e,jsb);c=VD(c,jsb)}e=Gfb(e,b);return e}
function Gi(a){if(a.offsetTop==null){return 0}var b=0;var c=a.ownerDocument;var d=a.parentNode;if(d){while(d.offsetParent){b-=d.scrollTop;d=d.parentNode}}while(a){b+=a.offsetTop;if(c.defaultView.getComputedStyle(a,'')[Btb]==Ctb){b+=c.body.scrollTop;return b}var e=a.offsetParent;e&&$wnd.devicePixelRatio&&(b+=parseInt(c.defaultView.getComputedStyle(e,'').getPropertyValue('border-top-width')));if(e&&e.tagName=='BODY'&&a.style.position==Dtb){break}a=e}return b}
function vX(a){var b,c,d;a.W=Xp(Zq,fwb,16,a.a.P,15,1);a.Kc=0;d=0;if(a.Rc>0){d=JT(a,1,a.Rc);a.Kc=Vq(d+1)}b=JT(a,a.Rc+1,a.a.P);a.Bb=0;a.ob>0&&(a.Bb=MT(a,1,a.ob));c=MT(a,a.ob+1,a.a.i);uX(a);d>0&&a.Bb>0?sh(a.Mc,vwb):dh(a.Mc,vwb);d>0?sh(a.Oc,vwb):dh(a.Oc,vwb);a.Bb>0?sh(a.c,vwb):dh(a.c,vwb);a.Oc.style[cvb]=(em(),Mub);a.c.style[dvb]=Mub;a.I.style[cvb]=Mub;a.fc.style[cvb]=Mub;oV(a);a.fb.style[ktb]=b+Lub;a.fb.style[ltb]=c+Lub;a.c.style[ktb]=b+Lub;a.Oc.style[ltb]=c+Lub}
function UV(a){var b,c;if(a.ib){if(a.ob>0){WV(a)}else{MV(a.ib);a.ib=null}}else if(a.ob>0){a.ib=new Ejb;WV(a)}for(c=a.bb;c<=a.xb;c++){if(c>a.ob){if(c-a.bb<a.K.a.length){b=yjb(a.K,c-a.bb)}else{b=Oi($doc);Vg(a.Oc,b);ujb(a.K,c-a.bb,b)}b.className=nwb+c||'';wh(b,IZ(c)+owb);anb(a.sc,Edb(c))&&dh(b,$vb)}else{uqb(a.U,'Trying to add plain column header (index:'+c+') into frozen pane, horizontalSplitPosition: '+a.ob)}}while(a.K.a.length>a.xb-a.bb+1){ah(Bjb(a.K,a.K.a.length-1))}}
function ZV(a){var b,c;if(a.jb){if(a.Rc>0){XV(a)}else{MV(a.jb);a.jb=null}}else if(a.Rc>0){a.jb=new Ejb;XV(a)}for(b=a.db;b<=a.zb;b++){if(a.Rc<b){if(b-a.db<a.hc.a.length){c=yjb(a.hc,b-a.db)}else{c=Oi($doc);Vg(a.c,c);ujb(a.hc,b-a.db,c)}c.className=pwb+b||'';c.innerHTML=''+b+owb||'';anb(a.vc,Edb(b))&&dh(c,Zvb)}else{uqb(a.U,'Trying to add plain row header (index:'+b+') into frozen pane, verticalSplitPosition: '+a.Rc)}}while(a.hc.a.length>a.zb-a.db+1){ah(Bjb(a.hc,a.hc.a.length-1))}}
function DU(a,b,c,d){var e,f,g,h,i;f=AU(a,Zub+d.c+$ub+d.k);if(!f){i=d.d;g=d.c;h=d.k;e=false;if(b<(Fh(),Eh).Vd(i)&&d.c>a.bb){--g;while(PZ(a.a,g)&&g>a.bb){--g}e=true}else if(b>Eh.Vd(i)+((i.offsetWidth||0)|0)&&d.c<a.xb){++g;while(PZ(a.a,g)&&g<a.xb){++g}e=true}if(c<Eh.Wd(i)&&d.k>a.db){--h;while(QZ(a.a,h)&&h>a.db){--h}e=true}else if(c>Eh.Wd(i)+((i.offsetHeight||0)|0)&&d.k<a.zb){++h;while(QZ(a.a,h)&&h<a.zb){++h}e=true}if(e){return DU(a,b,c,pU(a,g,h))}return d}else{return f}}
function lR(a,b){var c,d,e,f,g,h,i;e=a.c.xc.e;g=a.c.xc.f;i=a.c.xc.K;c=a.c.xc.L;d=a.c.qc;h=a.c.rc;f=LZ(a.d,d,h);if(!!f&&a.a!=0){d=a.a;h=f.row1}--h;while(!!a.d.w&&zjb(a.d.w,Edb(h),0)!=-1&&h>1){--h}if(!b&&(e!=g||i!=c)&&(!f||e!=f.col1||g!=f.col2||i!=f.row1||c!=f.row2)){if(h<i){h=c;while(!!a.d.w&&zjb(a.d.w,Edb(h),0)!=-1&&h>i){--h}--d;while(!!a.d.v&&zjb(a.d.v,Edb(d),0)!=-1&&d>=e){--d}d<e&&(d=g);while(!!a.d.v&&zjb(a.d.v,Edb(d),0)!=-1&&d>=e){--d}}cR(a,d,h)}else{h>0&&dR(a,d,h)}}
function iR(a,b){var c,d,e,f,g,h,i;e=a.c.xc.e;g=a.c.xc.f;i=a.c.xc.K;c=a.c.xc.L;d=a.c.qc;h=a.c.rc;f=LZ(a.d,d,h);if(!!f&&a.a!=0){d=a.a;h=f.row2}++h;while(!!a.d.w&&zjb(a.d.w,Edb(h),0)!=-1&&h<a.d.P){++h}if(!b&&(e!=g||i!=c)&&(!f||e!=f.col1||g!=f.col2||i!=f.row1||c!=f.row2)){if(h>c){h=i;while(!!a.d.w&&zjb(a.d.w,Edb(h),0)!=-1&&h<c){++h}++d;while(!!a.d.v&&zjb(a.d.v,Edb(d),0)!=-1&&d<=g){++d}d>g&&(d=e);while(!!a.d.v&&zjb(a.d.v,Edb(d),0)!=-1&&d<=g){++d}}cR(a,d,h)}else{h<=a.d.P&&dR(a,d,h)}}
function kR(a,b){var c,d,e,f,g,h,i;e=a.c.xc.e;g=a.c.xc.f;i=a.c.xc.K;c=a.c.xc.L;d=a.c.qc;h=a.c.rc;f=LZ(a.d,d,h);if(!!f&&a.b!=0){d=f.col2;h=a.b}++d;while(!!a.d.v&&zjb(a.d.v,Edb(d),0)!=-1&&d<a.d.i){++d}if(!b&&(e!=g||i!=c)&&(!f||e!=f.col1||g!=f.col2||i!=f.row1||c!=f.row2)){if(d>g){d=e;while(!!a.d.v&&zjb(a.d.v,new vdb(d),0)!=-1&&d<=g){++d}++h;while(!!a.d.w&&zjb(a.d.w,Edb(h),0)!=-1&&h<=c){++h}h>c&&(h=i);while(!!a.d.w&&zjb(a.d.w,Edb(h),0)!=-1&&h<=c){++h}}cR(a,d,h)}else{d<=a.d.i&&dR(a,d,h)}}
function jR(a,b){var c,d,e,f,g,h,i;e=a.c.xc.e;g=a.c.xc.f;i=a.c.xc.K;c=a.c.xc.L;d=a.c.qc;h=a.c.rc;f=LZ(a.d,d,h);if(!!f&&a.b!=0){d=f.col1;h=a.b}--d;while(!!a.d.v&&zjb(a.d.v,Edb(d),0)!=-1&&d>0){--d}if(!b&&(e!=g||i!=c)&&(!f||e!=f.col1||g!=f.col2||i!=f.row1||c!=f.row2)){if(d<e){d=g;while(!!a.d.v&&zjb(a.d.v,Edb(d),0)!=-1&&d>=e){--d}--h;while(!!a.d.w&&zjb(a.d.w,Edb(h),0)!=-1&&h>=i){--h}h<i&&(h=c);while(!!a.d.w&&zjb(a.d.w,Edb(h),0)!=-1&&h>=i){--h}}cR(a,d,h)}else{d>0&&dR(a,d,h)}}
function ogb(a,b){var c,d,e,f,g,h;c=Afb(a);d=Afb(b);e=$wnd.Math.min(c,d);Zfb(a,c);Zfb(b,d);if(rfb(a,b)==1){f=a;a=b;b=f}do{if(b.d==1||b.d==2&&b.a[1]>0){b=Xfb(ngb((h=a.d>1?RD(SD(a.a[1],32),ED(a.a[0],Iyb)):ED(a.a[0],Iyb),PD(a.e,h)),(g=b.d>1?RD(SD(b.a[1],32),ED(b.a[0],Iyb)):ED(b.a[0],Iyb),PD(b.e,g))));break}if(b.d>a.d*1.2){b=Ffb(b,a);b.e!=0&&Zfb(b,Afb(b))}else{do{ygb(b.a,b.a,b.d,a.a,a.d);tfb(b);b.b=-2;Zfb(b,Afb(b))}while(rfb(b,a)>=0)}f=b;b=a;a=f}while(a.e!=0);return Gfb(b,e)}
function CV(b,c){var d,e,f,g,h,i;try{g=IU(b);if(!g){uqb(b.U,'Selected cell is null');return}kM(g,c);h=nV(b,g.b,c);d=g.c;if(b.ab){f=MZ(b.a,b.qc,b.rc);d=f.col2;i=xR(b.a.g,f.col1,f.col2+1)}else{i=KZ(b.a,d)}while(i<h&&d<b.a.i){i+=KZ(b.a,++d)}ue(b.sb,i+1+Lub)}catch(a){a=BD(a);if(Oq(a,21)){e=a;uqb(b.U,'SheetWidget:recalculateInputElementWidth: '+yf(e,e.Fd())+' while calculating input element width');YU(b,b.qc,b.rc)||fW(b,b.qc,b.rc);p1((ng(),mg),new MX(b,false))}else throw CD(a)}}
function fgb(){fgb=hE;dgb=$p(Vp(Zq,1),fwb,16,15,[tsb,1162261467,Lyb,Gyb,362797056,1977326743,Lyb,387420489,iub,214358881,429981696,815730721,1475789056,170859375,268435456,410338673,612220032,893871739,1280000000,1801088541,113379904,148035889,191102976,Fyb,308915776,387420489,481890304,594823321,729000000,887503681,Lyb,1291467969,1544804416,1838265625,60466176]);egb=$p(Vp(Zq,1),fwb,16,15,[-1,-1,31,19,15,13,11,11,10,9,9,8,8,8,8,7,7,7,7,7,7,7,6,6,6,6,6,6,6,6,6,6,6,6,6,6,5])}
function fO(a){var b,c,d,e,f,g,h,i;i=(f=IK(a.e),f==null?'':f);c=GK(a.e);e=0;while(--c>0){Srb(c,i.length);i.charCodeAt(c)==34&&(c==0||(Srb(c-1,i.length),i.charCodeAt(c-1)!=92))&&++e}if(e%2==1){return}g=-1;d=-1;c=GK(a.e);while(c>0){b=(Srb(c-1,i.length),i.charCodeAt(c-1));if($db(String.fromCharCode(b))){g=c;break}--c}c=GK(a.e);while(c<i.length){b=(Srb(c,i.length),i.charCodeAt(c));if($db(String.fromCharCode(b))){d=c;break}++c}h=i.substr(g,d-g);lO(a);if(pO(a,h)){a.s=g;a.q=d;LO(a,h)}}
function TV(a){var b,c,d,e,f,g,h;YT(a.Lc);for(g=new akb(a.Pc);g.a<g.c.a.length;){e=$jb(g);YT(e)}a.Pc.a=Xp(nB,esb,1,0,5,1);for(h=new akb(a.d);h.a<h.c.a.length;){e=$jb(h);YT(e)}a.d.a=Xp(nB,esb,1,0,5,1);for(f=new akb(a.jc);f.a<f.c.a.length;){e=$jb(f);YT(e)}a.jc.a=Xp(nB,esb,1,0,5,1);Vg(a.yc,a.fb);if(a.Rc>0&&a.ob>0){gU(a);hU(a);bU(a)}else a.Rc>0?hU(a):a.ob>0&&bU(a);for(c=a.db;c<=a.zb;c++){e=new Fjb(a.xb);for(d=a.bb;d<=a.xb;d++){b=new uM(a,d,c);Vg(a.yc,b.d);e.a[e.a.length]=b}vjb(a.jc,e)}}
function cU(a){var b,c,d,e,f;f=Oi($doc);dh(f,'cell-range-bg-color');f.style[ltb]=(em(),Mub);f.style[ktb]=Mub;Vg(a.yc,f);e=new Q0(f);b=P0(e,ovb);b=_db(b,'!important','');_g(a.yc,f);if(b!=null&&heb(b).length!=0){d=kf();(jF(),d.Wc).height=1;d.Wc.width=1;nf(d.Wc.getContext('2d'),b);d.Wc.getContext('2d').fillRect(0,0,1,1);c='url("'+d.Wc.toDataURL()+'")';WS(a.Cc,'.'+a.zc+_vb+'background-image: '+c+' !important;'+'}')}else{WS(a.Cc,'.'+a.zc+_vb+'background-color: rgba(232, 242, 252, 0.8) !important;'+'}')}}
function aW(a,b,c,d,e,f,g){var h,i,j,k,l;for(k=b;k<=c;k++){if(f.a.length>k-b){l=(Lrb(k-b,f.a.length),f.a[k-b])}else{l=new Ejb;Orb(k-b,f.a.length);Erb(f.a,k-b,l)}for(h=d;h<=e;h++){if(l.a.length>h-d){i=(Lrb(h-d,l.a.length),l.a[h-d]);pM(i,h,k,Ahb(a.e,Zub+h+$ub+k))}else{i=new vM(a,h,k,Ahb(a.e,Zub+h+$ub+k));Vg(g,i.d);Orb(h-d,l.a.length);Erb(l.a,h-d,i)}}while(l.a.length>e-d+1){ah(Bjb(l,l.a.length-1).d)}}while(f.a.length>c-b+1){for(j=new akb(Bjb(f,f.a.length-1));j.a<j.c.a.length;){i=$jb(j);ah(i.d)}}mX(a,false)}
function LO(a,b){var c,d,e,f,g,h,i,j,k,l;if(Bhb(a.G,b)){j=vO(a,b);if(!j){return}f=$wnd.Math.min(j.col1,j.col2);e=$wnd.Math.max(j.col1,j.col2);l=$wnd.Math.min(j.row1,j.row2);k=$wnd.Math.max(j.row1,j.row2);if(e>20000){lqb(xqb((Icb(Kw),Kw.i)));return}for(c=f;c<=e;c++){for(i=l;i<=k;i++){d=pU(a.I,c,i);if(d){h=d.d;g=_db(Ahb(a.G,b),'%s','0.75');c==f&&(h.style['borderLeft']=qvb+g,undefined);c==e&&(h.style[rvb]=qvb+g,undefined);i==l&&(h.style['borderTop']=qvb+g,undefined);i==k&&(h.style[svb]=qvb+g,undefined)}}}a.A=b}}
function CY(a,b){var c,d,e,f,g;f=(!a.B&&(a.B=new P_),a.B);e=(!a.J&&(a.J=new j0),a.J);if(b.Af('componentIDtoCellKeysMap')){c=e.o;d=new Zmb;if(!!c&&c.a.c+c.b.c!=0){ykb();Jkb()}FW(f.W,d)}b.Af('cellKeysToEditorIdMap')&&HY(a);(b.Af('cellComments')||b.Af('cellCommentAuthors'))&&J$(f,e.b,e.a);b.Af('visibleCellComments')&&IY(a);b.Af('invalidFormulaCells')&&g_(f,e.F);b.Af('overlays')&&(g=!(!a.J&&(a.J=new j0),a.J).N?(ykb(),ykb(),wkb):(!a.J&&(a.J=new j0),a.J).N,FY(a,g.keySet()),zY(a,g),a.c=g.keySet(),undefined);uX(f.W)}
function rgb(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;g=a.e;i=b.e;if(g==0){return b}if(i==0){return a}f=a.d;h=b.d;if(f+h==2){c=ED(a.a[0],Iyb);d=ED(b.a[0],Iyb);if(g==i){k=DD(c,d);o=YD(k);n=YD(UD(k,32));return n==0?new Kfb(g,o):new Lfb(g,2,$p(Vp(Zq,1),fwb,16,15,[o,n]))}return Xfb(g<0?VD(d,c):VD(c,d))}else if(g==i){m=g;l=f>=h?sgb(a.a,f,b.a,h):sgb(b.a,h,a.a,f)}else{e=f!=h?f>h?1:-1:ugb(a.a,b.a,f);if(e==0){return qfb(),pfb}if(e==1){m=g;l=xgb(a.a,f,b.a,h)}else{m=i;l=xgb(b.a,h,a.a,f)}}j=new Lfb(m,l.length,l);tfb(j);return j}
function d$(a,b,c,d){var e,f,g,h,i;FZ(a);g=a.W.Rc>0?1:NU(a.W);c||L_(a,b,g,null);if(c){i=a.W.qc;e=i>b?b:i;f=i>b?i:b;h=a.P;if(AR(a.W.xc)){tX(a.W,e,f,1,h);rX(a.W,e,f,1,h,true)}else{rX(a.W,e,f,1,h,false)}AR(a.W.xc)?l9(a.X,1,e,h,f):o9(a.X,1,e,h,f)}else if(d){a.W.C&&(a.W.C=false,undefined);AR(a.W.xc)&&CW(a.W,false);RW(a.W,b,g);mR(a.R);rX(a.W,b,b,1,a.P,false);p9(a.X,g,b)}else{a.W.C||(a.W.C=true,undefined);if(!AR(a.W.xc)){CW(a.W,true);$T(a.W)}BW(a.W,b,g);tX(a.W,b,b,1,a.P);rX(a.W,b,b,1,a.P,true);mR(a.R);s9(a.X,b,g)}pb(a.s,200)}
function q$(a,b,c,d){var e,f,g,h,i;f=a.W.ob>0?1:zU(a.W);FZ(a);c||L_(a,f,b,null);if(c){e=a.i;i=a.W.rc;g=i>b?b:i;h=i>b?i:b;if(AR(a.W.xc)){tX(a.W,1,e,g,h);rX(a.W,1,e,g,h,true)}else{rX(a.W,1,e,g,h,false)}AR(a.W.xc)?l9(a.X,g,1,h,e):o9(a.X,g,1,h,e)}else if(d){a.W.C&&(a.W.C=false,undefined);AR(a.W.xc)&&CW(a.W,false);RW(a.W,f,b);mR(a.R);rX(a.W,1,a.i,b,b,false);C9(a.X,b,f)}else{a.W.C||(a.W.C=true,undefined);if(!AR(a.W.xc)){CW(a.W,true);$T(a.W)}BW(a.W,f,b);tX(a.W,1,a.i,b,b);rX(a.W,1,a.i,b,b,true);mR(a.R);E9(a.X,b,f)}pb(a.s,200)}
function $W(b){var c,d,e,f,g,h,i,j,k,l;h=(t0(),false&&xG('debug')!=null);l=b.a.f;k=0;h&&(k=(zeb(),JD(Date.now())));i=b.a.O;c=b.a.k;if(l){try{j=new web(HU(b.Cc));for(g=new aib((new Uhb(l)).a);g.b;){f=_hb(g);f.$f().a==0?seb(j,Wvb+b.zc+' .sheet .cell {'+f._f()+'}'):seb(j,LU(b,f.$f(),i,c)+' {'+f._f()+'}')}$g(b.Cc);Vg(b.Cc,cj($doc,j.a))}catch(a){a=BD(a);if(Oq(a,21)){d=a;uqb(b.U,'SheetWidget:updateStyles: '+yf(d,d.Fd())+swb)}else throw CD(a)}}if(h){e=(zeb(),JD(Date.now()));oqb(b.U,'Style update took:'+ZD(VD(e,k))+'ms')}BV(b);cU(b)}
function SR(a,b,c){var d,e,f,g,h,i,j;if(b>=a.e&&b<=a.f&&c>=a.K&&c<=a.L){j=$wnd.Math.abs(a.L-c);h=$wnd.Math.abs(a.f-b);if(a._||j==0&&h==0){FR(a,0,0,0,0);GR(a,false);return}GR(a,true);a.j=true;if(j>h){i=$wnd.Math.max(a.K+1,a.L-j+1);FR(a,a.e,a.f,i,a.L)}else{i=$wnd.Math.max(a.e+1,a.f-h+1);FR(a,i,a.f,a.K,a.L)}}else if(c<a.K||c>a.L||b<a.e||b>a.f){GR(a,true);a.s=true;d=c-a.L;g=a.K-c;e=a.e-b;f=b-a.f;$wnd.Math.max(d,g)>$wnd.Math.max(e,f)?d>g?FR(a,a.e,a.f,a.L+1,c):FR(a,a.e,a.f,c+1,a.K-1):f>e?FR(a,a.f+1,b,a.K,a.L):FR(a,b+1,a.e-1,a.K,a.L)}}
function DS(a,b){var c;if(!a.c._){if(!a.b){return}c=(Fh(),b).keyCode|0;switch(c){case 8:case 113:case 38:case 40:case 37:case 39:case 9:case 46:case 32:if(Eh.Qd(b)==0){y$(a.c.a,b,'');Eh.Ud(b);b.stopPropagation()}break;case 89:if(!a.a&&!!b.ctrlKey||!!b.metaKey){i9(a.c.a.X.C,$p(Vp(nB,1),esb,1,5,[]));Eh.Ud(b);b.stopPropagation()}break;case 90:if(!a.a&&!!b.ctrlKey||!!b.metaKey){i9(a.c.a.X.G,$p(Vp(nB,1),esb,1,5,[]));Eh.Ud(b);b.stopPropagation()}break;case 65:if(!a.a&&!!b.ctrlKey||!!b.metaKey){G$(a.c.a);Eh.Ud(b);b.stopPropagation()}}}}
function RW(a,b,c){var d,e,f,g,h,i;h=pU(a,a.qc,a.rc);g=AU(a,Zub+a.qc+$ub+a.rc);if(a.v){_mb(a.u,new pY(a.qc,a.rc));if(h){_mb(a.t,h);dh(h.d,Xvb)}if(g){_mb(a.t,g);dh(g.d,Xvb)}a.v=false}else{_mb(a.u,new pY(a.qc,a.rc));if(h){_mb(a.t,h);dh(h.d,Xvb)}if(g){_mb(a.t,g);dh(g.d,Xvb)}i=MZ(a.a,b,c);iW(a,c);if(i){for(d=i.row1+1;d<=i.row2;d++){iW(a,d)}}hW(a,b);if(i){for(d=i.col1+1;d<=i.col2;d++){hW(a,d)}}}if(h){a.nb=null;sh(h.d,Yvb)}!!g&&sh(g.d,Yvb);f=pU(a,b,c);if(f){a.nb=new pY(f.c,f.k);dh(f.d,Yvb)}e=AU(a,Zub+b+$ub+c);!!e&&dh(e.d,Yvb);a.rc=c;a.qc=b}
function fU(a,b,c,d,e){var f,g,h,i,j,k,l,m;l=e;m=new Zmb;for(h=c;h<=d;h++){k=new ueb;j=a.W[h-1];seb(peb(seb(peb(seb(seb(seb(peb(seb(seb(seb(peb(seb(seb((k.a+='.',k),a.zc),cwb),h),', .'),a.zc),'>.resize-line.row'),h),' { '),QZ(a.a,h)?bwb:'display: flex;'),'height: '),j),'px; top:'),l),'px; }\n');l+=j;Chb(m,Edb(h),Edb(l));vjb(b,k.a)}for(g=new aib((new Uhb(a.Eb)).a);g.b;){f=_hb(g);i=f._f().k-1;!(i==d&&d==a.Rc)&&xhb(m,Edb(i))?(f._f().d.style[Eub]=zhb(m,Edb(i)).a+(em(),Lub),undefined):i<c&&d!=a.Rc&&(f._f().d.style[Eub]=(em(),Mub),undefined)}}
function dU(a,b,c,d,e){var f,g,h,i,j,k,l,m,n;l=e;m=new Zmb;for(k=c;k<=d;k++){n=new ueb;h=JZ(a.a,k);seb(peb(seb(peb(seb(seb(seb(peb(seb(seb(seb(peb(seb(seb((n.a+='.',n),a.zc),awb),k),', .'),a.zc),'>.resize-line.col'),k),' { '),PZ(a.a,k)?bwb:''),'width: '),h),'px; left:'),l),'px; }\n');l+=h;Chb(m,Edb(k),Edb(l));vjb(b,n.a)}f=hh((jF(),a.Wc));for(j=new aib((new Uhb(a.Eb)).a);j.b;){i=_hb(j);g=i._f().c-1;!(g==d&&d==a.ob)&&xhb(m,Edb(g))?(i._f().d.style[Dub]=zhb(m,Edb(g)).a+(em(),Lub),undefined):g>d&&d!=a.ob&&(i._f().d.style[Dub]=f+(em(),Lub),undefined)}}
function tS(a,b,c,d,e){var f;sh(a.B,Zub+a.e+$ub+a.C);if(a.s>0&&b<a.s){b=a.s;rS(a,true)}else{rS(a,false)}if(a.t>0&&d<a.t){d=a.t;xS(a,true)}else{xS(a,false)}if(a.r>0&&e>a.r){e=a.r;oS(a,true);a.i.style[Htb]=(wk(),jtb);a.g.style[Htb]=jtb}else{oS(a,false);a.i.style[Htb]=(wk(),Ntb);a.g.style[Htb]=Ntb}if(a.q>0&&a.q<c){c=a.q;uS(a,true)}else{uS(a,false)}a.e=b;a.C=d;a.f=c;a.D=e;a.K=c-b;a.j=e-d;if(b<=c&&d<=e){dh(a.B,Zub+a.e+$ub+a.C);De((jF(),a.Wc),true);zS(a);f=a.F.q.W.W;f!=null&&f.length!=0&&qS(a,xR(a.F.q.W.W,a.C,a.D+1))}else{De((jF(),a.Wc),false)}}
function Xeb(a){var b,c,d,e,f;if(a.g!=null){return a.g}if(a.a<32){a.g=hgb(JD(a.f),Vq(a.e));return a.g}e=igb((!a.c&&(a.c=Wfb(a.f)),a.c),0);if(a.e==0){return e}b=(!a.c&&(a.c=Wfb(a.f)),a.c).e<0?2:1;c=e.length;d=-a.e+c-b;f=new ueb;f.a+=''+e;if(a.e>0&&d>=-6){if(d>=0){teb(f,c-Vq(a.e),String.fromCharCode(46))}else{f.a=eeb(f.a,0,b-1)+'0.'+deb(f.a,b-1);teb(f,b+1,leb(Heb,0,-Vq(d)-1))}}else{if(c-b>=1){teb(f,b,String.fromCharCode(46));++c}teb(f,c,String.fromCharCode(69));d>0&&teb(f,++c,String.fromCharCode(43));teb(f,++c,''+ZD(JD(d)))}a.g=f.a;return a.g}
function AJ(a,b){var c,d,e,f;if(b.a||!a.K&&b.b){a.I&&(b.a=true);return}b.c&&false&&(b.a=true);if(b.a){return}d=b.d;c=uJ(a,d);c&&(b.b=true);a.I&&(b.a=true);f=(jF(),AG((Fh(),d).type));switch(f){case 512:case 256:case 128:{(d.keyCode|0)&ysb;(d.shiftKey?1:0)|(d.metaKey?8:0)|(d.ctrlKey?2:0)|(d.altKey?4:0);return}case 4:case tub:{if(iF){b.b=true;return}}if(!c&&a.u){a.Pe(true);return}break;case 8:case 64:case 1:case 2:case msb:{if(iF){b.b=true;return}break}case 2048:{e=Eh.Td(d);if(a.I&&!c&&!!e){e.blur&&e!=$doc.body&&e.blur();b.a=true;return}break}}}
function cO(){cO=hE;bO=new Ejb;vjb(bO,'rgba(48, 144, 240, %s)');vjb(bO,'rgba(236, 100, 100, %s)');vjb(bO,'rgba(152, 223, 88, %s)');vjb(bO,'rgba(249, 221, 81, %s)');vjb(bO,'rgba(36, 220, 212, %s)');vjb(bO,'rgba(236, 100, 165, %s)');vjb(bO,'rgba(104, 92, 176, %s)');vjb(bO,'rgba(255, 125, 66, %s)');vjb(bO,'rgba(51, 97, 144, %s)');vjb(bO,'rgba(170, 81, 77, %s)');vjb(bO,'rgba(127, 176, 83, %s)');vjb(bO,'rgba(187, 168, 91, %s)');vjb(bO,'rgba(36, 121, 129, %s)');vjb(bO,'rgba(150, 57, 112, %s)');vjb(bO,'rgba(75, 86, 168, %s)');vjb(bO,'rgba(154, 89, 61, %s)')}
function dW(a,b,c,d){var e,f,g,h,i,j;j=false;b<=a.ob&&(b=a.ob+1);f=zU(a);h=EU(a);if(d){if(b<f){i=0;for(e=f-1;e>=b-1&&e>0;e--){i+=KZ(a.a,e)}yh(a.yc,ph(a.yc)-i);(b<=a.bb||i>(a.a.j/2|0))&&(j=true)}else if(b>h){i=0;g=a.a.i;for(e=h+1;e<=b+1&&e<=g;e++){i+=KZ(a.a,e)}yh(a.yc,ph(a.yc)+i);(b>=a.xb||i>(a.a.j/2|0))&&(j=true)}}else{if(c>h){i=0;g=a.a.i;for(e=h+1;e<=c+1&&e<=g;e++){i+=KZ(a.a,e)}yh(a.yc,ph(a.yc)+i);(c>=a.xb||i>(a.a.j/2|0))&&(j=true)}else if(c<f){i=0;for(e=f-1;e>=c-1&&e>0;e--){i+=KZ(a.a,e)}yh(a.yc,ph(a.yc)-i);(c<=a.bb||i>(a.a.j/2|0))&&(j=true)}}return j}
function YW(a,b,c,d,e,f,g){var h,i,j,k,l;if(f.a.length==0){return}i=new akb(g);k=null;l=-1;while(i.a<i.c.a.length){h=$jb(i);if(h.row>=b&&h.row<=c&&h.col>=d&&h.col<=e){if(l!=h.row){(Lrb(0,f.a.length),f.a[0]).a.length>0&&yjb((Lrb(0,f.a.length),f.a[0]),0).k!=b&&(b=yjb((Lrb(0,f.a.length),f.a[0]),0).k);k=yjb(f,h.row-b);l=h.row;(Lrb(0,k.a.length),k.a[0]).c!=d&&(d=(Lrb(0,k.a.length),k.a[0]).c)}lM(yjb(k,h.col-d),h.value,h.cellStyle,h.needsMeasure)}j=Zub+h.col+$ub+h.row;wW(a,j,h.value,h.cellStyle,h.needsMeasure);h.value==null?Fhb(a.e,j):Dhb(a.e,j,h)}mX(a,false)}
function lS(a){a.B.className=Kvb;a.F._&&dh(a.B,Evb);a.G.className='s-top';a.k.className='s-left';a.u.className='s-right';a.a.className='s-bottom';a.g.className='s-corner';a.i.className='s-corner-touch';a.I.className=Lvb;a.o.className=Lvb;a.w.className=Lvb;a.c.className=Lvb;a.J.className=Mvb;a.p.className=Mvb;a.A.className=Mvb;a.d.className=Mvb;if(a.F._){Vg(a.u,a.i);Vg(a.i,a.g)}else{Vg(a.u,a.g)}Vg(a.G,a.k);Vg(a.G,a.u);Vg(a.k,a.a);Vg(a.B,a.G);if(a.F._){Vg(a.G,a.J);Vg(a.k,a.p);Vg(a.u,a.A);Vg(a.a,a.d);Vg(a.J,a.I);Vg(a.p,a.o);Vg(a.A,a.w);Vg(a.d,a.c)}ne(a,a.B)}
function yV(a,b,c){a.zc='spreadsheet-'+b;dh(a.Ec,a.zc);a.w.type=mwb;vh(a.w,a.zc+'-dynamicStyle');Vg(c,a.w);a.Cc.type=mwb;vh(a.Cc,a.zc+'-sheetStyle');Vg(c,a.Cc);a.Dc.type=mwb;vh(a.Dc,a.zc+'-customCellSizeStyle');Vg(c,a.Dc);a.$.type=mwb;vh(a.$,a.zc+'-editedCellStyle');Vg(c,a.$);WS(a.$,'.notusedselector{ display: inline !important; outline: none !important; width: auto !important; z-index: -10; }');WS(a.$,'.notusedselector{ overflow: hidden; }');a.Fb.type=mwb;vh(a.Fb,a.zc+'-mergedRegionStyle');Vg(c,a.Fb);a.Vb.type=mwb;vh(a.Vb,a.zc+'-resizeStyle');Vg(c,a.Vb)}
function sq(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;c=a.l&8191;d=a.l>>13|(a.m&15)<<9;e=a.m>>4&8191;f=a.m>>17|(a.h&255)<<5;g=(a.h&1048320)>>8;h=b.l&8191;i=b.l>>13|(b.m&15)<<9;j=b.m>>4&8191;k=b.m>>17|(b.h&255)<<5;l=(b.h&1048320)>>8;B=c*h;C=d*h;D=e*h;F=f*h;G=g*h;if(i!=0){C+=c*i;D+=d*i;F+=e*i;G+=f*i}if(j!=0){D+=c*j;F+=d*j;G+=e*j}if(k!=0){F+=c*k;G+=d*k}l!=0&&(G+=c*l);n=B&gub;o=(C&511)<<13;m=n+o;q=B>>22;r=C>>9;s=(D&262143)<<4;t=(F&31)<<17;p=q+r+s+t;v=D>>18;w=F>>5;A=(G&4095)<<8;u=v+w+A;p+=m>>22;m&=gub;u+=p>>22;p&=gub;u&=nsb;return dq(m,p,u)}
function RT(a,b,c){var d,e,f,g,h,i,j;i=ih(a.yc);g=gh(a.yc);f=fh(a.yc);h=hh(a.yc);a.A=c;a.B=b;b<i?(a.O||!a.Hc&&!a.Gc)&&(a.Y=b-i):b>f?(a.Y=b-f):(a.Y=0);c<g?(a.P||!a.Fc&&!a.Gc)&&(a.X=c-g):c>h?(a.X=c-h):(a.X=0);j=false;if(((a.yc.scrollTop||0)|0)!=0){e=b<i;if(!a.O&&(a.Gc||a.Hc)&&aV(a,a.Ic,a.Jc)&&!e){a.yc.scrollTop=0;vV(a);a.O=true;j=true}}if(ph(a.yc)!=0){d=c<g;if(!a.P&&(a.Gc||a.Fc)&&aV(a,a.Ic,a.Jc)&&!d){yh(a.yc,0);vV(a);a.P=true;j=true}}if(a.Y<0&&((a.yc.scrollTop||0)|0)!=0||a.Y>0||a.X<0&&ph(a.yc)!=0||a.X>0){LW(a);j=true}if(j){return true}else{PW(a);return false}}
function vR(a,b,c){var d,e,f,g,h,i,j;i=ih(a.Q.yc);g=gh(a.Q.yc);f=fh(a.Q.yc);h=hh(a.Q.yc);a.c=c;a.d=b;b<i?(a.g||!a.T&&!a.S)&&(a.n=b-i):b>f?(a.n=b-f):(a.n=0);c<g?(a.i||!a.R&&!a.S)&&(a.k=c-g):c>h?(a.k=c-h):(a.k=0);j=false;if(((a.Q.yc.scrollTop||0)|0)!=0){e=b<i;if(!a.g&&(a.S||a.T)&&aV(a.Q,a.U,a.V)&&!e){a.Q.yc.scrollTop=0;vV(a.Q);a.u=0;a.g=true;j=true}}if(ph(a.Q.yc)!=0){d=c<g;if(!a.i&&(a.S||a.R)&&aV(a.Q,a.U,a.V)&&!d){yh(a.Q.yc,0);vV(a.Q);a.t=0;a.i=true;j=true}}if(a.n<0&&((a.Q.yc.scrollTop||0)|0)!=0||a.n>0||a.k<0&&ph(a.Q.yc)!=0||a.k>0){MR(a);j=true}if(j){return true}else{OR(a);return false}}
function dX(a,b){var c,d,e,f;c=0;if(a.H>0){d=a.Z?a.H+1:a.H;c=3+d*18}f=0;if(a.ec>0){e=a.Z?a.ec+1:a.ec;f=1+e*15}if(f==0){a.fc.style[Htb]=(wk(),jtb);a.gc.style[Htb]=jtb}else{a.fc.style[Htb]=(wk(),Ntb);a.gc.style[Htb]=Ntb}a.Z||(a.gc.style[Htb]=(wk(),jtb),undefined);!!a.jb&&a.ec>0?(a.cc.style[Htb]=(wk(),Ntb),undefined):(a.cc.style[Htb]=(wk(),jtb),undefined);a.fc.style[ltb]=f+(em(),Lub);a.fc.style[Eub]=b+Lub;a.cc.style[ltb]=f+Lub;a.cc.style[Eub]=b+Lub;a.gc.style[Eub]=b+c+Lub;if(a.Db){a.gc.style[ktb]=tU(a)+Lub;a.gc.style[uwb]=tU(a)+Lub}a.gc.style[ltb]=f+Lub;return f}
function E0(a){var b,c,d,e,f;if(A0==null){c='';d='';e='';b='';if(a.a.g){c='ff';d=c+a.a.b;e=d+a.a.c;b='gecko'}else if(a.a.e){c='sa';d='ch';b=Swb}else if(a.a.q){c='sa';d=c+a.a.b;e=d+a.a.c;b=Swb}else if(a.a.p){c='sa';d=c+a.a.b;e=d+a.a.c;b=Swb}else if(a.a.j){c='ie';d=c+a.a.b;e=d+a.a.c;b='trident'}else if(a.a.f){c='edge';d=c+a.a.b;e=d+a.a.c;b=''}else if(a.a.o){c='op';d=c+a.a.b;e=d+a.a.c;b='presto'}A0='v-'+c;d.length==0||(A0=A0+' '+'v-'+d);e.length==0||(A0=A0+' '+'v-'+e);b.length==0||(A0=A0+' '+'v-'+b);f=G0(a);f!=null&&(A0=A0+' '+f);a.b&&(A0=A0+' '+'v-'+Evb)}return A0}
function Ei(a){if(a.offsetLeft==null){return 0}var b=0;var c=a.ownerDocument;var d=a.parentNode;if(d){while(d.offsetParent){b-=d.scrollLeft;c.defaultView.getComputedStyle(d,'').getPropertyValue('direction')=='rtl'&&(b+=d.scrollWidth-d.clientWidth);d=d.parentNode}}while(a){b+=a.offsetLeft;if(c.defaultView.getComputedStyle(a,'')[Btb]==Ctb){b+=c.body.scrollLeft;return b}var e=a.offsetParent;e&&$wnd.devicePixelRatio&&(b+=parseInt(c.defaultView.getComputedStyle(e,'').getPropertyValue('border-left-width')));if(e&&e.tagName=='BODY'&&a.style.position==Dtb){break}a=e}return b}
function FT(a,b){var c,d,e,f,g,h,i,j,k,l;l=new ueb;for(k=b.row1;k<=b.row2;k++){for(c=b.col1;c<=b.col2;c++){l.a+=Vvb+c+'.row'+k;(k!=b.row2||c!=b.col2)&&(l.a+=',',l)}}if(l.a.length!=0){l.a+='{ display: none; }';WS(a.Fb,l.a)}i=Zub+b.col1+$ub+b.row1;j=new mP(a,b.col1,b.row1);f='cs0';d=pU(a,b.col1,b.row1);!!d&&(f=d.b);lM(j,sU(a,b.col1,b.row1),f,false);h=j.d;dh(h,vvb);jX(a,b,j);Vg(CU(a,b.col1,b.row1),h);Chb(a.Eb,Edb(b.id),j);!!a.r&&Bhb(a.r,i)&&mM(j);!!a.tb&&a.tb.contains(i)&&nM(j);if(Bhb(a.b,i)){e=Ahb(a.b,i);uN(e,h,b.row1,b.col1)}if(!!a.T&&Bhb(a.T,i)){g=Ahb(a.T,i);ET(a,j,g)}}
function JM(b,c){var d,e,f,g,h,i,j;if(!b.Sc){return}h=-1;try{h=gdb(Hj((jF(),b.Wc).style))}catch(a){a=BD(a);if(Oq(a,21)){h=ztb}else throw CD(a)}h==-1&&(h=BM);if((C0(),!B0&&(B0=new L0),C0(),B0).a.j){nh((jF(),b.Wc),Kub);nh(b.Wc,itb)}f=(!B0&&(B0=new L0),B0);if(f.a.j&&J0(f)){g=new P5((i=gh((jF(),b.Wc)),i-=ej($doc),i-=(DM==-1&&(DM=SM(Dub)),DM),i),(j=ih(b.Wc),j-=fj($doc),j-=(EM==-1&&(EM=SM(Eub)),EM),j),nh(b.Wc,itb),nh(b.Wc,Kub));g.b+=Vq(g.d*(1-c)/2);g.c+=Vq(g.a*(1-c)/2);g.d=Vq(g.d*c);g.a=Vq(g.a*c);d=Wg(b.Wc);e=(!B0&&(B0=new L0),B0);if(e.a.j&&J0(e)){RM(GM(b),g);!Wg(b.t)&&Yg(d,b.t,b.Wc)}}}
function eq(a,b,c){var d,e,f,g,h,i;if(b.l==0&&b.m==0&&b.h==0){throw CD(new tcb('divide by zero'))}if(a.l==0&&a.m==0&&a.h==0){c&&(aq=dq(0,0,0));return dq(0,0,0)}if(b.h==hub&&b.m==0&&b.l==0){return fq(a,c)}i=false;if(b.h>>19!=0){b=tq(b);i=!i}g=lq(b);f=false;e=false;d=false;if(a.h==hub&&a.m==0&&a.l==0){e=true;f=true;if(g==-1){a=cq((Iq(),Eq));d=true;i=!i}else{h=xq(a,g);i&&jq(h);c&&(aq=dq(0,0,0));return h}}else if(a.h>>19!=0){f=true;a=tq(a);d=true;i=!i}if(g!=-1){return gq(a,g,i,f,c)}if(qq(a,b)<0){c&&(f?(aq=tq(a)):(aq=dq(a.l,a.m,a.h)));return dq(0,0,0)}return hq(d?a:dq(a.l,a.m,a.h),b,i,f,e,c)}
function $V(a,b,c){var d,e;yh(a.yc,b);zh(a.yc,c);a.nc=(a.yc.offsetHeight||0)|0;a.oc=(a.yc.offsetWidth||0)|0;a.Ob=b;a.Pb=c;a.db=1;a.eb=0;a.Rc>0&&(a.db=a.Rc+1);a.bb=1;a.cb=0;a.ob>0&&(a.bb=a.ob+1);a.xb=0;$T(a);WT(a);d=a.a.j;if(a.cb<b-d){do{a.cb+=KZ(a.a,a.bb);++a.bb}while(a.cb<b-d)}a.xb=a.bb;a.yb=a.cb+KZ(a.a,a.bb);e=a.a.M;if(a.eb<c-e){do{a.db>=a.a.N.length?(a.eb+=wU(a)):(a.eb+=GU(a,a.db));++a.db}while(a.eb<c-e)}a.zb=a.db;a.Ab=a.eb+GU(a,a.zb);while(a.yb<b+a.oc+d&&a.xb<a.a.i){++a.xb;a.yb+=KZ(a.a,a.xb)}while(a.Ab<c+a.nc+e&&a.zb<a.a.P){++a.zb;a.zb>=a.a.N.length?(a.Ab+=wU(a)):(a.Ab+=GU(a,a.zb))}}
function Pg(a,b){var c,d,e,f,g,h,i,j,k;j='';if(b.length==0){return a.Md(fsb,csb,-1,-1)}k=heb(b);Tdb(k.substr(0,3),'at ')&&(k=k.substr(3));k=k.replace(/\[.*?\]/g,'');g=k.indexOf('(');if(g==-1){g=k.indexOf('@');if(g==-1){j=k;k=''}else{j=heb(k.substr(g+1));k=heb(k.substr(0,g))}}else{c=k.indexOf(')',g);j=k.substr(g+1,c-(g+1));k=heb(k.substr(0,g))}g=Vdb(k,jeb(46));g!=-1&&(k=k.substr(g+1));(k.length==0||Tdb(k,'Anonymous function'))&&(k=csb);h=Ydb(j,jeb(58));e=Zdb(j,jeb(58),h-1);i=-1;d=-1;f=fsb;if(h!=-1&&e!=-1){f=j.substr(0,e);i=Jg(j.substr(e+1,h-(e+1)));d=Jg(j.substr(h+1))}return a.Md(f,k,i,d)}
function fS(a,b,c,d,e){var f;sh(a.k,Zub+a.b+$ub+a.n);if(a.g>0&&b<a.g){b=a.g;a.d.style[Itb]=(sm(),Vtb)}else{a.d.style[Itb]=(sm(),Utb)}if(a.i>0&&d<a.i){d=a.i;a.q.style[Itb]=(sm(),Vtb)}else{a.q.style[Itb]=(sm(),Utb)}if(a.f>0&&e>a.f){e=a.f;a.a.style[Itb]=(sm(),Vtb)}else{a.a.style[Itb]=(sm(),Utb)}if(a.e>0&&a.e<c){c=a.e;a.j.style[Itb]=(sm(),Vtb)}else{a.j.style[Itb]=(sm(),Utb)}a.b=b;a.n=d;a.c=c;a.o=e;if(b<=c&&d<=e){dh(a.k,Zub+a.b+$ub+a.n);De((jF(),a.Wc),true);a.Wc.style[Oub]='';jS(a);f=a.p.q.W.W;f!=null&&f.length!=0&&dS(a,xR(a.p.q.W.W,a.n,a.o+1))}else{De((jF(),a.Wc),false);a.Wc.style[Oub]=(nl(),Vtb)}}
function OU(a,b,c){var d,e,f,g,h,i,j,k;a.Yb=true;d=b-a.Rb;d<0&&(d=0);TS(a.Vb);d>0?hI(a.Xb,'Width: '+d+Lub):hI(a.Xb,gwb);j='.'+a.zc+hwb+a.Zb+'{width:'+d+iwb;WS(a.Vb,j);e=0;k=hh(a.yc)-b;for(g=a.Zb+1;g<=a.xb&&e<k;g++){e+=KZ(a.a,g)}i=b-a.Sb;i<a.Rb-a.Sb&&(i=a.Rb-a.Sb);j='';for(h=a.Zb+1;h<=a.xb;h++){j+='.'+a.zc+hwb+h;a.xb!=h&&(j+=',')}if(!!a.ib&&a.Zb>=a.ib.a.length){for(f=1;f<=a.ib.a.length;f++){i+=KZ(a.a,f)}}i=a.Cb+i;(!a.ib||a.Zb>a.ib.a.length)&&(i-=ph(a.yc));if(j.length!=0){j+='{margin-left:'+i+iwb;WS(a.Vb,j)}j='.'+a.zc+'.col-resizing > div.resize-line.ch {margin-left:'+(i-1)+iwb;WS(a.Vb,j);HW(a,b,c)}
function c2(a,b){var c,d;if(!a.e){a.e=new jI;He(a.e,new e2(a),(gn(),gn(),fn));He(a.e,new g2(a),(Po(),Po(),Oo))}c=heb(RH(a.e.a));c+=c.length==0?'Using Evaluation License of: ':', ';hI(a.e,c+b);tH((qK(),uK()),a.e);he(a.e).className='';d=he(a.e).style;d[Btb]=(yl(),Ctb);d[uvb]=(Jl(),'center');d['right']=(em(),Mub);d[Dub]=Mub;d['bottom']=Mub;d['padding']='0.5em 1em';d['font-family']='sans-serif';d['fontSize']='12.0px';d[uwb]='1.1em';d['color']='white';d[ovb]='black';(Fh(),d).opacity=0.7;d[Jtb]='2147483646';d[Eub]=Vub;d[ltb]=Vub;d[Htb]=(wk(),Ntb);d['whiteSpace']=(Em(),'normal');d[Itb]=(sm(),Utb);d['margin']=Mub}
function P0(j,a){var b=j.a;var c=j.b;if(a.indexOf(pvb)>-1&&a.indexOf('Width')>-1){var d=a.substring(0,a.length-5)+'Style';if(b.getPropertyValue)var e=b.getPropertyValue(d);else var e=b[d];if(e==jtb)return '0px'}if(b.getPropertyValue){a=a.replace(/([A-Z])/g,'-$1').toLowerCase('en');var f=b.getPropertyValue(a)}else{var f=b[a];var g=c.style;if(!/^\d+(px)?$/i.test(f)&&/^\d/.test(f)){var h=g.left,i=c.runtimeStyle.left;c.runtimeStyle.left=b.left;g.left=f||0;f=g.pixelLeft+Lub;g.left=h;c.runtimeStyle.left=i}}if(a.indexOf('margin')>-1&&f==Vub){return '0px'}a==ltb&&f==Vub?(f=c.clientWidth+Lub):a==ktb&&f==Vub&&(f=c.clientHeight+Lub);return f}
function r4(a,b){var c,d,e,f,g,h,i;if(!a.j){f=Wf()-a.b[0];oqb(xqb((Icb(vz),vz.k)),f+' ms from start to move')}e=(h=(Fh(),b).changedTouches[0],a.f=$h(h.clientY||0),i=a.k++,i=i%3,a.b[i]=Wf(),a.s[i]=a.f,a.j?a.j:$wnd.Math.abs(a.o-a.f)>=3);if(e){c=a.o-a.f;d=a.n+c;if(d>((a.q.scrollHeight||0)|0)-(a.q.clientHeight|0)){g=c+a.n-(((a.q.scrollHeight||0)|0)-(a.q.clientHeight|0));g=g/2|0;g>(h4?0:(a.q.clientHeight|0)/3|0)&&(g=h4?0:(a.q.clientHeight|0)/3|0);c=((a.q.scrollHeight||0)|0)-(a.q.clientHeight|0)+g-a.n}else if(d<0){g=d/2|0;-g>(h4?0:(a.q.clientHeight|0)/3|0)&&(g=-(h4?0:(a.q.clientHeight|0)/3|0));c=g-a.n}u4(a,c);a.j=true;Eh.Ud(b);b.stopPropagation()}}
function Cc(){Cc=hE;Ac=new Lb('aria-activedescendant');new xc('aria-atomic');new Lb('aria-autocomplete');new Lb('aria-controls');new Lb('aria-describedby');new Lb('aria-dropeffect');new Lb('aria-flowto');new xc('aria-haspopup');Bc=new xc('aria-label');new Lb('aria-labelledby');new xc('aria-level');new Lb('aria-live');new xc('aria-multiline');new xc('aria-multiselectable');new Lb('aria-orientation');new Lb('aria-owns');new xc('aria-posinset');new xc('aria-readonly');new Lb('aria-relevant');new xc('aria-required');new xc('aria-setsize');new Lb('aria-sort');new xc('aria-valuemax');new xc('aria-valuemin');new xc('aria-valuenow');new xc('aria-valuetext')}
function DY(a,b){var c,d,e,f;d=(!a.B&&(a.B=new P_),a.B);c=(!a.J&&(a.J=new j0),a.J);if(c.O||b.b){c.O=false;e=(!a.J&&(a.J=new j0),a.J);f=(!a.B&&(a.B=new P_),a.B);HY(a);E_(f,e.X,e.W,b.Af(Cwb));w_(f,e.Y);f.D?CZ(f,false):(f.D=true);VZ(f,f.a-1);J_(f,e.L);p1((ng(),mg),new iZ(a,b))}else{(b.Af('sheetNames')||b.Af('sheetIndex'))&&E_(d,c.X,c.W,b.Af(Cwb));if(b.Af(Dwb)||b.Af(Ewb)||b.Af('colW')||b.Af('rowH')||b.Af('rows')||b.Af('cols')||b.Af(Fwb)||b.Af(Gwb)){d.d?(d.d=false):JV(d.W,true);J_((!a.B&&(a.B=new P_),a.B),(!a.J&&(a.J=new j0),a.J).L)}else b.Af('mergedRegions')&&J_((!a.B&&(a.B=new P_),a.B),(!a.J&&(a.J=new j0),a.J).L);b.Af('sheetProtected')&&w_(d,c.Y);CY(a,b)}}
function fW(a,b,c){var d,e,f,g,h,i,j,k,l,m;l=false;f=zU(a);if(b<f&&b>a.ob){k=0;for(e=f-1;e>=b-1&&e>0;e--){k+=KZ(a.a,e)}yh(a.yc,ph(a.yc)-k);(b<=a.bb||k>(a.a.j/2|0))&&(l=true)}else{j=EU(a);if(b>j){k=0;g=a.a.i;for(e=j+1;e<=b+1&&e<=g;e++){k+=KZ(a.a,e)}yh(a.yc,ph(a.yc)+k);(b>=a.xb||k>(a.a.j/2|0))&&(l=true)}}m=NU(a);if(c<m&&c>a.Rc){k=0;for(e=m-1;e>=c-1&&e>0;e--){k+=QZ(a.a,e)?0:e>=a.W.length?wU(a):a.W[e-1]}i=((a.yc.scrollTop||0)|0)-k;zh(a.yc,i>0?i:0);(c<=a.db||k>(a.a.M/2|0))&&(l=true)}else{d=oU(a);if(c>d){k=0;h=a.a.P;for(e=d+1;e<=c+1&&e<=h;e++){k+=QZ(a.a,e)?0:e>=a.W.length?wU(a):a.W[e-1]}zh(a.yc,((a.yc.scrollTop||0)|0)+k);(c>=a.zb||k>(a.a.M/2|0))&&(l=true)}}if(l){uV(a);oV(a)}}
function _0(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;e=false;l=false;d=new Q0(b);i=(m=$p(Vp(Zq,1),fwb,16,15,[0,0,0,0]),m[0]=N0(d,Svb),m[1]=N0(d,'paddingRight'),m[2]=N0(d,'paddingBottom'),m[3]=N0(d,Rvb),m);if(!e&&d1(a.d,i)){$0(a.d,i);e=true}if(!l&&e1(a.d,i)){$0(a.d,i);l=true}a.d=i;f=O0(d);if(!e&&d1(a.c,f)){$0(a.c,f);e=true}if(!l&&e1(a.c,f)){$0(a.c,f);l=true}a.c=f;c=(n=$p(Vp(Zq,1),fwb,16,15,[0,0,0,0]),n[0]=N0(d,'borderTopWidth'),n[1]=N0(d,'borderRightWidth'),n[2]=N0(d,'borderBottomWidth'),n[3]=N0(d,'borderLeftWidth'),n);if(!e&&d1(a.a,c)){$0(a.a,c);e=true}if(!l&&e1(a.a,c)){$0(a.a,c);l=true}a.a=c;j=A1(b);g=j+(f[0]+f[2]);a1(a,g)&&(e=true);k=D1(b);h=k+(f[1]+f[3]);b1(a,h)&&(l=true);return new f1}
function DT(a){a.U=xqb('spreadsheet SheetWidget');a.pc=new Zmb;a.Ec=Oi($doc);a.yc=Oi($doc);a.N=Oi($doc);a.fb=Oi($doc);a.Tb=Oi($doc);a.Ub=Oi($doc);a.hc=new Ejb;a.jb=new Ejb;a.K=new Ejb;a.ib=new Ejb;a.jc=new Ejb;a.Lc=new Ejb;a.Pc=new Ejb;a.d=new Ejb;a.w=Xi($doc);a.Cc=Xi($doc);a.Dc=Xi($doc);a.$=Xi($doc);a.Vb=Xi($doc);a.Fb=Xi($doc);a.Mb=Oi($doc);a.Mc=Oi($doc);a.Oc=Oi($doc);a.c=Oi($doc);a.I=Oi($doc);a.fc=Oi($doc);a.F=Oi($doc);a.cc=Oi($doc);a.kb=Oi($doc);a.J=Oi($doc);a.gc=Oi($doc);a.D=Oi($doc);a.bc=Oi($doc);a.hb=Wi($doc);a.wb=new _S;a.t=new cnb;a.u=new cnb;a.vc=new cnb;a.sc=new cnb;a.uc=new cnb;a.tc=new cnb;a.p=new a5(300,new EX(a));a.Ib=new a5(100,new YX(a));a.lc=new $X(a);a.Jb=new cY(a)}
function Reb(a,b){var c,d,e,f,g,h,i,j,k,l;j=(!a.c&&(a.c=Wfb(a.f)),a.c);k=(!b.c&&(b.c=Wfb(b.f)),b.c);c=a.e-b.e;g=0;e=1;h=Meb.length-1;if(b.a==0&&b.f!=-1){throw CD(new tcb('Division by zero'))}if(j.e==0){return jfb(c)}d=yfb(j,k);j=ufb(j,d);k=ufb(k,d);f=Afb(k);k=Hfb(k,f);do{l=vfb(k,Meb[e]);if(l[1].e==0){g+=e;e<h&&++e;k=l[0]}else{if(e==1){break}e=1}}while(true);if(!wfb(k.e<0?new Lfb(1,k.d,k.a):k,(qfb(),lfb))){throw CD(new tcb('Non-terminating decimal expansion; no exact representable decimal result'))}k.e<0&&(j=j.e==0?j:new Lfb(-j.e,j.d,j.a));i=ffb(c+$wnd.Math.max(f,g));e=f-g;j=e>0?(Cgb(),e<Bgb.length?Hgb(j,Bgb[e]):e<zgb.length?Dfb(j,zgb[e]):Dfb(j,Efb(zgb[1],e))):Gfb(j,-e);return new _eb(j,i)}
function cX(a,b){var c,d,e;a.kb.style[Eub]=b+(em(),Lub);c=0;if(a.H>0){d=a.Z?a.H+1:a.H;c=3+d*18}e=0;a.ec>0&&(e=1+(a.ec+1)*15);if(c==0){a.I.style[Htb]=(wk(),jtb);a.J.style[Htb]=jtb}else{a.I.style[Htb]=(wk(),Ntb);a.J.style[Htb]=Ntb}a.Z||(a.J.style[Htb]=(wk(),jtb),undefined);!!a.ib&&a.H>0?(a.F.style[Htb]=(wk(),Ntb),undefined):(a.F.style[Htb]=(wk(),jtb),undefined);a.I.style[ktb]=c+Lub;a.I.style[Eub]=b+Lub;a.F.style[ktb]=c+Lub;a.F.style[Eub]=b+Lub;a.J.style[Eub]=b+Lub;a.J.style[ktb]=c+Lub;a.Db&&(a.J.style[ltb]=FU(a)+Lub,undefined);a.J.style[Dub]=e+Lub;a.D.style[Eub]=b+Lub;a.D.style[Dub]=e+Lub;a.D.style[ktb]=c+Lub;a.bc.style[Eub]=b+c+Lub;a.bc.style[Dub]=Mub;a.bc.style[ltb]=e+Lub;a.g=e;a.f=c;return c}
function nO(a,b){var c,d;switch((Fh(),b).keyCode|0){case 8:case 46:a.t.$?pb(new eP(a),100):p1((ng(),mg),new gP(a));p1((ng(),mg),new iP(a));break;case 27:KK(a.j,a.c);j$(a.t);HO(a);b.stopPropagation();Eh.Ud(b);break;case 13:i$(a.t,(d=IK(a.j),d==null?'':d));HO(a);b.stopPropagation();Eh.Ud(b);break;case 9:m$(a.t,(c=IK(a.j),c==null?'':c),!b.shiftKey);HO(a);b.stopPropagation();break;case 38:if(a.g){rO(a,!!b.shiftKey,true,false,false);Eh.Ud(b)}break;case 39:if(a.g){rO(a,!!b.shiftKey,false,true,false);Eh.Ud(b)}break;case 40:if(a.g){rO(a,!!b.shiftKey,false,false,true);Eh.Ud(b)}break;case 37:if(a.g){rO(a,!!b.shiftKey,false,false,false);Eh.Ud(b)}break;default:gO(a,a.j);}if(a.e){MO(a,false);p1((ng(),mg),new WO(a))}}
function SU(a,b,c){var d,e,f,g,h,i,j,k;a.Yb=true;d=c-a.Rb;d<0&&(d=0);TS(a.Vb);d>0?hI(a.Xb,'Height: '+d+'px \u2248 '+Seb(hfb(d/a.Lb*72))+'pt'):hI(a.Xb,'Hide row');j='.'+a.zc+jwb+a.$b+'{height:'+d+iwb;WS(a.Vb,j);e=0;k=fh(a.yc)-c;for(g=a.$b+1;g<=a.zb&&e<k;g++){e+=QZ(a.a,g)?0:g>=a.W.length?wU(a):a.W[g-1]}i=c-a.Sb;i<a.Rb-a.Sb&&(i=a.Rb-a.Sb);j='';for(h=a.$b+1;h<=a.zb;h++){j+='.'+a.zc+jwb+h;a.zb!=h&&(j+=',')}if(!!a.jb&&a.$b>=a.jb.a.length){for(f=1;f<=a.jb.a.length;f++){i+=QZ(a.a,f)?0:f>=a.W.length?wU(a):a.W[f-1]}}i+=a.Nc;(!a.jb||a.$b>a.jb.a.length)&&(i-=(a.yc.scrollTop||0)|0);if(j.length!=0){j+='{margin-top:'+i+iwb;WS(a.Vb,j)}j='.'+a.zc+'.row-resizing > div.resize-line.rh {margin-top:'+(i-1)+iwb;WS(a.Vb,j);HW(a,b,c)}
function qV(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(!!(Fh(),b).changedTouches&&b.changedTouches.length>0){k=b.changedTouches;i=Pm(k[k.length-1])}else if(!!b.touches&&b.touches.length>0){k=b.touches;i=Pm(k[k.length-1])}else{i=zX(b)}m=(g=lj($doc),t1(),b.type.indexOf(Evb)!=-1?Om(b.changedTouches[0])+g:$h(b.clientY||0)+g);l=(f=kj($doc),b.type.indexOf(Evb)!=-1?Nm(b.changedTouches[0])+f:$h(b.clientX||0)+f);if(RT(a,m,l)){return}d=0;e=0;c=null;if(i){c=i.getAttribute(utb)||'';YS(a.wb,c);d=a.wb.a;e=a.wb.b}if(e==0||d==0){return}h=vvb.length;if(!Tdb(c.substr(c.length-h,h),vvb)){j=DU(a,l,m,pU(a,d,e));d=j.c;e=j.k}if(d!=a.Ic||e!=a.Jc){d==0&&(l>hh(Ih(i))?(d=EU(a)+1):(d=a.Ic));e==0&&(m>fh(a.yc)?(e=oU(a)+1):(e=a.Jc));v$(a.a,d,e);a.Ic=d;a.Jc=e}}
function NV(b,c){var d,e,f,g,h,i,j;h=Zub+c.col1+$ub+c.row1;b.Fb.sheet.deleteRule(0);i=zhb(b.Eb,Edb(c.id));j=pU(b,c.col1,c.row1);!!j&&lM(j,i.o,i.b,false);ah(Ehb(b.Eb,Edb(c.id)).d);Ehb(b.Kb,c);c.col1>=b.xc.e&&c.col2<=b.xc.f&&c.row1>=b.xc.K&&c.row2<=b.xc.L&&rX(b,c.col1,c.col2,c.row1,c.row2,false);f=null;if(!!b.r&&Bhb(b.r,h)){try{d=yjb(yjb(b.jc,c.row1-b.db),c.col1-b.bb);mM(d);f=d.d}catch(a){a=BD(a);if(!Oq(a,21))throw CD(a)}}if(!!b.tb&&b.tb.contains(h)){try{d=yjb(yjb(b.jc,c.row1-b.db),c.col1-b.bb);nM(d);f=d.d}catch(a){a=BD(a);if(!Oq(a,21))throw CD(a)}}if(Bhb(b.b,h)&&!!f){e=Ahb(b.b,h);uN(e,f,c.row1,c.col1)}if(!!b.T&&Bhb(b.T,h)){try{d=yjb(yjb(b.jc,c.row1-b.db),c.col1-b.bb);g=Ahb(b.T,h);ET(b,d,g)}catch(a){a=BD(a);if(!Oq(a,21))throw CD(a)}}}
function AG(a){switch(a){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case Gtb:return pub;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case _tb:return 8;case 'scroll':return usb;case 'error':return xsb;case qub:case 'mousewheel':return rub;case $tb:return 262144;case 'paste':return hub;case cub:return tub;case 'touchmove':return uub;case 'touchend':return msb;case 'touchcancel':return vub;case 'gesturestart':return wub;case 'gesturechange':return xub;case 'gestureend':return yub;default:return -1;}}
function uX(a){var b,c,d,e,f,g,h,i;d=a.ob>0?1:0;jh(a.Ec).indexOf('report')!=-1&&(d=0);i=0;a.hc.a.length==0||(i=FU(a));f=0;a.K.a.length==0||(f=tU(a));e=0;if(a.a.u){g=new c1;_0(g,he(a.a.u));e=Vq(g.b)}b=cX(a,e);c=dX(a,e);a.kb.style[Eub]=e+(em(),Lub);c==0||b==0?(a.kb.style[Htb]=(wk(),jtb),undefined):(a.kb.style[Htb]=(wk(),Ntb),undefined);a.kb.style[ktb]=b+Lub;a.kb.style[ltb]=c+Lub;p1((ng(),mg),new WX(a));if(!a.Z){i=0;f=0}a.Nc=f+e+b;a.Cb=i+c;h=a.Mc.style;h[ltb]=a.Bb+i+1+Lub;h[ktb]=a.Kc+f+Lub;h[Eub]=e+b+Lub;h[Dub]=c+Lub;h=a.Oc.style;h[Dub]=a.Bb+a.Cb+d+Lub;h[ktb]=a.Kc+f+Lub;h[Eub]=e+b+Lub;h=a.c.style;h[ltb]=a.Bb+i+1+Lub;h[Eub]=a.Kc+a.Nc+Lub;h[Dub]=c+Lub;h=a.yc.style;h[Dub]=a.Bb+a.Cb+d+Lub;h[Eub]=a.Kc+a.Nc+Lub;h=a.N.style;h[Eub]=e+b+Lub;h[Dub]=c+Lub}
function sM(a){var b,c,d,e,f,g,h,i,j,k,l,m;k=jh(a.d).indexOf(' r ')!=-1||Sdb(jh(a.d),' r');e=JZ(a.n.a,a.c);l=zhb(a.n.pc,new yM(a.o,a.b,a.k,a.c));!l&&(l=Edb(gM(a)));j=l.a-e;if(!k&&j>0){j+=2;c=a.c;m=0;d=a.n.a.g;g=eV(a.n,c);while(c<d.length&&m<j){if(g&&!eV(a.n,c+1)){break}h=pU(a.n,c+1,a.k);if(!!h&&h.o!=null&&h.o.length!=0){break}m+=d[c];++c}m+=e;i=Oi($doc);i.style[Yub]=jtb;i.style[ltb]=m+(em(),Lub);i.style[Oub]=(nl(),Vtb);i.style['textOverflow']=(Sl(),'ellipsis');b=a.d.childNodes;if(b){for(f=b.length-1;f>=0;f--){i.appendChild(b[f])}}a.d.innerHTML='';Vg(a.d,i);fM(a);a.i=true}else{a.i=false}gV(a.n,Zub+a.c+$ub+a.k)&&!Oq(a,170)?(a.d.style[Oub]=(nl(),Vtb),undefined):j>0?(a.d.style[Oub]=(nl(),Utb),undefined):(a.d.style[Oub]=(nl(),Vtb),undefined);a.g=false}
function jgb(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A;q=Xp(Zq,fwb,16,d+1,15,1);r=Xp(Zq,fwb,16,f+1,15,1);s=f;i=Bdb(e[f-1]);if(i!=0){_fb(r,e,0,i);_fb(q,c,0,i)}else{Aeb(c,0,q,0,d);Aeb(e,0,r,0,f)}j=r[s-1];l=b-1;m=d;while(l>=0){k=0;if(q[m]==j){k=-1}else{t=DD(SD(ED(q[m],Iyb),32),ED(q[m-1],Iyb));w=mgb(t,j);k=YD(w);v=YD(TD(w,32));if(k!=0){o=0;A=0;u=false;++k;do{--k;if(u){break}o=PD(ED(k,Iyb),ED(r[s-2],Iyb));A=DD(SD(v,32),ED(q[m-2],Iyb));p=DD(ED(v,Iyb),ED(j,Iyb));Bdb(YD(UD(p,32)))<32?(u=true):(v=YD(p))}while(KD($D(o,Myb),$D(A,Myb)))}}if(k!=0){g=pgb(q,m-s,r,s,k);if(g!=0){--k;h=0;for(n=0;n<s;n++){h=DD(h,DD(ED(q[m-s+n],Iyb),ED(r[n],Iyb)));q[m-s+n]=YD(h);h=UD(h,32)}}}a!=null&&(a[l]=k);--m;--l}if(i!=0){cgb(r,s,q,0,i);return r}Aeb(q,0,r,0,f);return q}
function jN(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;h=hh(a.c);e=(a.c.offsetLeft||0)|0;g=(a.c.offsetWidth||0)|0;f=(a.c.offsetTop||0)|0;i=ih(a.c);k=h+15;if(k+a.n>hh(a.o)){o=gh(a.c)-15-a.n;gh(a.o)<o&&(k=o)}l=i-15;m=fh(a.o);if(l+a.k>m){l-=l+a.k-m+5;n=ih(a.o);l<n&&(l=n)}else l<ih(a.o)&&(l+=ih(a.o)-l);NM(a,k,l);a.j!=null&&sh(a.i,a.j);a.j=Zub+a.b+$ub+a.d;l+=2;k+=2;c=i-l;if(k>h){b=k-h;if(c>0){j=-($wnd.Math.atan(c/b)*hvb)}else{c=$wnd.Math.abs(c);j=0}}else{k-=2;b=h-(k+a.n);if(c>0){j=-180+$wnd.Math.atan(c/b)*hvb}else{c=$wnd.Math.abs(c);j=-180}}d=$wnd.Math.sqrt(b*b+c*c)+1;a.i.style[ltb]=d+(em(),Lub);a.i.style[Eub]=f+Lub;a.i.style[Dub]=e+g+Lub;a.i.style['transform']=ivb+j+'deg)';a.i.style['msTransform']=ivb+j+'deg)';a.i.style[jvb]=ivb+j+'deg)';dh(a.i,a.j);Vg(a.o,a.i)}
function eW(a,b,c,d){var e,f,g,h,i,j,k;j=false;b<=a.Rc&&(b=a.Rc+1);k=NU(a);e=oU(a);if(d){if(b<k){i=0;for(f=k-1;f>=b-1&&f>0;f--){i+=QZ(a.a,f)?0:f>=a.W.length?wU(a):a.W[f-1]}h=((a.yc.scrollTop||0)|0)-i;zh(a.yc,h>0?h:0);(b<=a.db||i>(a.a.M/2|0))&&(j=true)}else if(b>e){i=0;g=a.a.P;for(f=e+1;f<=b+1&&f<=g;f++){i+=QZ(a.a,f)?0:f>=a.W.length?wU(a):a.W[f-1]}zh(a.yc,((a.yc.scrollTop||0)|0)+i);(b>=a.zb||i>(a.a.M/2|0))&&(j=true)}}else{if(c>e){i=0;g=a.a.P;for(f=e+1;f<=c+1&&f<=g;f++){i+=QZ(a.a,f)?0:f>=a.W.length?wU(a):a.W[f-1]}zh(a.yc,((a.yc.scrollTop||0)|0)+i);(c>=a.zb||i>(a.a.M/2|0))&&(j=true)}else if(c<k){i=0;for(f=k-1;f>=c-1&&f>0;f--){i+=QZ(a.a,f)?0:f>=a.W.length?wU(a):a.W[f-1]}h=((a.yc.scrollTop||0)|0)-i;zh(a.yc,h>0?h:0);(c<=a.db||i>(a.a.M/2|0))&&(j=true)}}return j}
function q4(a){var b,c,d,e,f,g,h,i,j;if(!a.j){i4=null;_L(a.d.a);a.d=null;return}b=a.n+a.a;g=((a.q.scrollHeight||0)|0)-(a.q.clientHeight|0);c=-1;if(b>g){i=g-b;d=g}else if(b<0){i=-b;d=0}else{h=l4(a);oqb(xqb((Icb(vz),vz.k)),'pxPerMs'+h);i=Vq(0.5*h*h/0.002);h<0&&(i=-i);d=b+i;if(d>g+(h4?0:(a.q.clientHeight|0)/3|0)){d=((a.q.scrollHeight||0)|0)-(a.q.clientHeight|0)+(h4?0:(a.q.clientHeight|0)/3|0);e=d-b;i=e}else if(d<-(h4?0:(a.q.clientHeight|0)/3|0)){d=-(h4?0:(a.q.clientHeight|0)/3|0);e=d-b;i=e}else{c=Vq($wnd.Math.abs(h/0.002))}}c==-1&&(c=350);if(c>1500){oqb(xqb((Icb(vz),vz.k)),'Max animation time. '+c);c=1500}a.c=d;if($wnd.Math.abs(i)<3||c<20){oqb(xqb((Icb(vz),vz.k)),"Small 'momentum' "+i+' |  '+c+' Skipping animation,');p4(a);return}j=-d+a.n;f=-b+a.n;if(h4){f-=a.n;j-=a.n}w4(a,c,f,j)}
function OO(a,b){cO();var c,d,e;this.r=(jF(),Oi($doc));this.i=new Ejb;this.F=new cnb;this.D=new Zmb;this.G=new Zmb;this.t=a;this.I=b;this.w=b.sb;this.H=new OS;NS(this.H,b,this);this.j=new QK;cf(this.j,2);this.a=new QK;cf(this.a,1);qe(this.j,'functionfield');qe(this.a,'addressfield');this.B=new NI;qe(this.B,'namedrangebox');LI(this.B);EI(this.B,'');this.C=new kI;qe(this.C,'arrow');te(this.B,false);te(this.C,false);d=new VH;c=new VH;e=new VH;c.Wc.className='fixed-left-panel';e.Wc.className='adjusting-right-panel';UH(c,this.a);UH(c,this.C);UH(c,this.B);UH(e,this.j);oH(d,c,d.Wc);oH(d,e,d.Wc);KH(this,d);this.Wc.className='functionbar';FF(he(this.B),1024);EF(he(this.B),new QO(this));FF(he(this.a),6656);EF(he(this.a),new YO(this));FF(he(this.j),7048);EF(he(this.j),new $O(this));this.r.className='formulaoverlay';Vg(this.Wc,this.r)}
function XW(b,c,d){var e,f,g,h,i,j,k;g=(jF(),AG((Fh(),c).type));j=d.getAttribute(utb)||'';if(Tdb(j,Wub)||Tdb(j,Xub)){e=Ih(d);f=e.getAttribute(utb)||'';i=vvb.length;Tdb(f.substr(f.length-i,i),vvb)&&(f=_db(f,rwb,''));if(Bhb(b.b,f)){return}if(g==16){if(!(yJ(b.q)&&Tdb(f,b.j))){YS(b.wb,f);b.k=b.wb.a;b.n=b.wb.b;_4(b.p)}}else{k=Eh.Sd(c);if(!b.o&&!(!!k&&!!k.equals?k.equals(e):k==e)){kN(b.q);b.j=null;b.k=-1;b.n=-1}}}else{i=vvb.length;Tdb(j.substr(j.length-i,i),vvb)&&(j=_db(j,rwb,''));if(Bhb(b.b,j)){return}if(g==16){if(!(yJ(b.q)&&Tdb(j,b.j))){DF(b.yc);YS(b.wb,j);b.k=b.wb.a;b.n=b.wb.b;_4(b.p)}}else if(g==32){k=Eh.Sd(c);if(!b.o&&!!k&&!!Ih(k)){try{if(!(xV(k.getAttribute(utb)||'')&&mf(Ih(k),d))){kN(b.q);b.j=null;b.n=-1;b.k=-1}}catch(a){a=BD(a);if(Oq(a,49)){h=a;vqb(b.U,'SheetWidget:updateCellCommentDisplay: NPE ONMOUSEOUT, '+h.f)}else throw CD(a)}}}}}
function Peb(){Peb=hE;var a,b,c;new Zeb(1,0);new Zeb(10,0);new Zeb(0,0);Geb=Xp(xB,esb,36,11,0,1);Heb=Xp(Wq,esb,16,100,15,1);Ieb=$p(Vp(Xq,1),esb,16,15,[1,5,25,125,625,3125,15625,78125,390625,1953125,9765625,48828125,Fyb,Gyb,6103515625,30517578125,152587890625,762939453125,3814697265625,19073486328125,95367431640625,476837158203125,2384185791015625]);Jeb=Xp(Zq,fwb,16,Ieb.length,15,1);Keb=$p(Vp(Xq,1),esb,16,15,[1,10,100,ztb,10000,100000,1000000,10000000,100000000,iub,10000000000,100000000000,1000000000000,10000000000000,100000000000000,1000000000000000,10000000000000000]);Leb=Xp(Zq,fwb,16,Keb.length,15,1);Neb=Xp(xB,esb,36,11,0,1);a=0;for(;a<Neb.length;a++){Geb[a]=new Zeb(a,0);Neb[a]=new Zeb(0,a);Heb[a]=48}for(;a<Heb.length;a++){Heb[a]=48}for(c=0;c<Jeb.length;c++){Jeb[c]=afb(Ieb[c])}for(b=0;b<Leb.length;b++){Leb[b]=afb(Keb[b])}Cgb();Meb=zgb}
function Cnb(){function e(){this.obj=this.createObject()}
;e.prototype.createObject=function(a){return Object.create(null)};e.prototype.get=function(a){return this.obj[a]};e.prototype.set=function(a,b){this.obj[a]=b};e.prototype[Nyb]=function(a){delete this.obj[a]};e.prototype.keys=function(){return Object.getOwnPropertyNames(this.obj)};e.prototype.entries=function(){var b=this.keys();var c=this;var d=0;return {next:function(){if(d>=b.length)return {done:true};var a=b[d++];return {value:[a,c.get(a)],done:false}}}};if(!Anb()){e.prototype.createObject=function(){return {}};e.prototype.get=function(a){return this.obj[':'+a]};e.prototype.set=function(a,b){this.obj[':'+a]=b};e.prototype[Nyb]=function(a){delete this.obj[':'+a]};e.prototype.keys=function(){var a=[];for(var b in this.obj){b.charCodeAt(0)==58&&a.push(b.substring(1))}return a}}return e}
function wT(a){this.k=Oi($doc);this.c=Oi($doc);this.i=Oi($doc);this.n=Oi($doc);this.o=Oi($doc);this.p=Oi($doc);this.q=Oi($doc);this.a=Oi($doc);this.g=bj($doc);this.v=Oi($doc);this.u=[];this.f=Oi($doc);this.e=a;this.n.className='scroll-tabs-beginning';this.o.className='scroll-tabs-end';this.p.className='scroll-tabs-left';this.q.className='scroll-tabs-right';this.a.className='add-new-tab';this.i.className='sheet-tabsheet-options';Vg(this.i,this.n);Vg(this.i,this.p);Vg(this.i,this.q);Vg(this.i,this.o);Vg(this.i,this.a);this.c.className='sheet-tabsheet-container';this.v.className='sheet-tabsheet-temp';Vg(this.k,this.v);this.k.className='sheet-tabsheet';Vg(this.k,this.i);Vg(this.k,this.c);this.f.className='sheet-tabsheet-infolabel';Vg(this.k,this.f);ne(this,this.k);FF(this.k,3);EF(this.k,new xT(this));FF(this.g,4736);EF(this.g,new zT(this));this.g.maxLength=31}
function yX(a,b){var c,d;DT(this);c=M0().toLowerCase();this.vb=c.indexOf('macintosh')!=-1||c.indexOf('mac osx')!=-1||c.indexOf('mac os x')!=-1;this.a=a;this.Qc=b;this.e=new Zmb;this.b=new Zmb;this.Ac=new Zmb;this.Eb=new Zmb;this.Kb=new Zmb;this.rb=new Y4;qe(this.rb,'v-spreadsheet-hyperlink-tooltip-label');this.qb=new eN;qe(this.qb,'v-tooltip');this.qb.r=this;WH(this.qb,this.rb);this.Xb=new Y4;qe(this.Xb,'v-spreadsheet-resize-tooltip-label');this.Wb=new eN;qe(this.Wb,'v-tooltip');this.Wb.r=this;WH(this.Wb,this.Xb);this.q=new vN(this,this.yc);iN(this.q);WU(this);Ae((jF(),this.Wc),qwb,true);this.xc=new UR(a,this);this.M=new XN(this,new TN(this));Vg(this.Wc,he(this.M));d=new IS;d.c=this;d.a=this.vb;HS(d,this.Mc,this.Oc,this.c,this.yc);this.Nb=AF(new lY(this));He(this,new nY(this),(on(),on(),nn));this.kc=new a5(20,new eY(this));this.Qb=new a5(100,new gY(this))}
function vN(a,b){tJ();var c;eN.call(this);this.e=aj($doc);this.o=b;this.p=new VH;WH(this,this.p);this.i=Oi($doc);this.i.className=lvb;this.a=new Y4;te(this.a,false);qe(this.a,'comment-overlay-author');this.g=new Y4;te(this.g,false);qe(this.g,'comment-overlay-label');sJ.$e((jF(),jF(),lh(this.Wc))).className='v-spreadsheet-comment-overlay';Ae(sJ.$e((null,lh(this.Wc))),'v-spreadsheet-comment-overlay-shadow',true);this.r=a;this.F=false;this.Wc.style[Itb]=Vtb;!!this.t&&(this.t.style[Itb]=Vtb,undefined);this.i.style[Itb]=(sm(),Vtb);this.Wc.style[Jtb]='0';this.f=new Y4;te(this.f,false);qe(this.f,'comment-overlay-invalidformula');UH(this.p,this.f);UH(this.p,this.a);UH(this.p,this.g);dh(this.e,'comment-overlay-input');this.e.style[Htb]=(wk(),jtb);Vg(this.Wc,this.e);this.e.rows=4;this.e.style[ltb]=(em(),'200.0px');c=new yN(this,a);He(this.a,c,(gn(),gn(),fn));He(this.g,c,(null,fn))}
function hgb(a,b){fgb();var c,d,e,f,g,h,i,j,k,l,m,n,o,p;i=FD(a,0)<0;i&&(a=QD(a));if(FD(a,0)==0){switch(b){case 0:return '0';case 1:return '0.0';case 2:return '0.00';case 3:return '0.000';case 4:return '0.0000';case 5:return '0.00000';case 6:return '0.000000';default:n=new ueb;b<0?(n.a+='0E+',n):(n.a+='0E',n);n.a+=b==tsb?'2147483648':''+-b;return n.a;}}k=18;l=Xp(Wq,esb,16,k+1,15,1);c=k;p=a;do{j=p;p=HD(p,10);l[--c]=YD(DD(48,VD(j,PD(p,10))))&ysb}while(FD(p,0)!=0);e=VD(VD(VD(k,c),b),1);if(b==0){i&&(l[--c]=45);return leb(l,c,k-c)}if(b>0&&FD(e,-6)>=0){if(FD(e,0)>=0){f=c+YD(e);for(h=k-1;h>=f;h--){l[h+1]=l[h]}l[++f]=46;i&&(l[--c]=45);return leb(l,c,k-c+1)}for(g=2;MD(g,DD(QD(e),1));g++){l[--c]=48}l[--c]=46;l[--c]=48;i&&(l[--c]=45);return leb(l,c,k-c)}o=c+1;d=k;m=new veb;i&&(m.a+='-',m);if(d-o>=1){oeb(m,l[c]);m.a+='.';m.a+=leb(l,c+1,k-c-1)}else{m.a+=leb(l,c,k-c)}m.a+='E';FD(e,0)>0&&(m.a+='+',m);m.a+=''+ZD(e);return m.a}
function eX(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s;n=lV(a);while(n.a<n.c.a.length){q=$jb(n);Oq(q,96)&&Pe(q,null)}$g(b);$g(c);h=0;f&&!a.G?(h=5):!f&&!a.dc&&(h=2);if(g>0){if(f){s=a.fc.clientWidth|0;a.Z&&(s+=FU(a))}else{s=a.I.clientHeight|0;a.Z&&(s+=tU(a))}s+=h;for(l=new akb(d);l.a<l.c.a.length;){k=$jb(l);if(f){p=new KN(k.uniqueIndex,a.a);GN(p,a.G)}else{p=new YQ(k.uniqueIndex,a.a);GN(p,a.dc)}r=s;for(m=0;m<k.startIndex;m++){f?(r+=KZ(a.a,m+1)):(r+=QZ(a.a,m+1)?0:m+1>=a.W.length?wU(a):a.W[m+1-1])}p.f&&(f?(r-=uU(a,k.startIndex)/2|0):(r-=GU(a,k.startIndex)/2|0));p.hf(r,k.level-1);FN(p,k.collapsed);Vg(b,(jF(),p.Wc));Pe(p,a);o=0;for(j=k.startIndex;j<=k.endIndex;j++){f?(o+=KZ(a.a,j+1)):(o+=QZ(a.a,j+1)?0:j+1>=a.W.length?wU(a):a.W[j+1-1])}o-=h;p.f?f?(o+=uU(a,k.startIndex)/2):(o+=GU(a,k.startIndex)/2):f?(o+=uU(a,k.endIndex+2)/2):(o+=GU(a,k.endIndex+2)/2);HN(p,o);if(!!e&&e.a.length>k.startIndex){i=p.ef();Vg(c,i.Wc);Pe(i,a)}}}}
function xF(){var a,b,c;b=$doc.compatMode;a=$p(Vp(tB,1),wsb,2,6,[wtb]);for(c=0;c<a.length;c++){if(Tdb(a[c],b)){return}}a.length==1&&Tdb(wtb,a[0])&&Tdb('BackCompat',b)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\""+b+'"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' "+b+"').<br>Modify your application's host HTML page doctype, or update your custom "+"'document.compatMode' configuration property settings."}
function LG(a,b){var c=(a.__eventBits||0)^b;a.__eventBits=b;if(!c)return;c&1&&(a.onclick=b&1?HG:null);c&2&&(a.ondblclick=b&2?HG:null);c&4&&(a.onmousedown=b&4?HG:null);c&8&&(a.onmouseup=b&8?HG:null);c&16&&(a.onmouseover=b&16?HG:null);c&32&&(a.onmouseout=b&32?HG:null);c&64&&(a.onmousemove=b&64?HG:null);c&128&&(a.onkeydown=b&128?HG:null);c&256&&(a.onkeypress=b&256?HG:null);c&512&&(a.onkeyup=b&512?HG:null);c&1024&&(a.onchange=b&1024?HG:null);c&2048&&(a.onfocus=b&2048?HG:null);c&4096&&(a.onblur=b&4096?HG:null);c&8192&&(a.onlosecapture=b&8192?HG:null);c&usb&&(a.onscroll=b&usb?HG:null);c&pub&&(a.onload=b&pub?IG:null);c&xsb&&(a.onerror=b&xsb?HG:null);c&rub&&(a.onmousewheel=b&rub?HG:null);c&262144&&(a.oncontextmenu=b&262144?HG:null);c&hub&&(a.onpaste=b&hub?HG:null);c&tub&&(a.ontouchstart=b&tub?HG:null);c&uub&&(a.ontouchmove=b&uub?HG:null);c&msb&&(a.ontouchend=b&msb?HG:null);c&vub&&(a.ontouchcancel=b&vub?HG:null);c&wub&&(a.ongesturestart=b&wub?HG:null);c&xub&&(a.ongesturechange=b&xub?HG:null);c&yub&&(a.ongestureend=b&yub?HG:null)}
function qP(a,b,c,d,e){var f,g,h,i,j,k;if(b==c&&d==e){h=V_(a,d,b);if(!h){h=new pP;h.col1=d;h.col2=e;h.row1=b;h.row2=c}return h}else{g=W_(a,d,b);if(!!g&&g.col2>=e&&g.row2>=c){return g}}k=false;f=d;while(f<=e){i=V_(a,f,b);if(i){f=i.col2+1;if(d>i.col1){d=i.col1;k=true}if(e<i.col2){e=i.col2;k=true}if(b>i.row1){b=i.row1;k=true}}else{++f}}b>c&&(b=c);f=b;while(f<=c){i=V_(a,e,f);if(i){f=i.row2+1;if(e<i.col2){e=i.col2;k=true}if(b>i.row1){b=i.row1;k=true}if(c<i.row2){c=i.row2;k=true}}else{++f}}e<d&&(e=d);f=d;while(f<=e){i=V_(a,f,c);if(i){f=i.col2+1;if(d>i.col1){d=i.col1;k=true}if(e<i.col2){e=i.col2;k=true}if(c<i.row2){c=i.row2;k=true}}else{++f}}c<b&&(c=b);f=b;while(f<=c){i=V_(a,d,f);if(i){f=i.row2+1;if(d>i.col1){d=i.col1;k=true}if(b>i.row1){b=i.row1;k=true}if(c<i.row2){c=i.row2;k=true}}else{++f}}d>e&&(d=e);if(k){return qP(a,b,c,d,e)}else if(b==c&&d==e){h=V_(a,d,b);if(!h){h=new pP;h.col1=d;h.col2=e;h.row1=b;h.row2=c}return h}else{g=W_(a,d,b);if(!!g&&g.col2>=e&&g.row2>=c){return g}}j=new pP;j.col1=d;j.col2=e;j.row1=b;j.row2=c;return j}
function LS(a,b){var c,d,e,f,g,h;e=vj(b.a);d=a.b.a;if(a.b._){switch(e){case 8:case 46:RU(a.b);NO(a.a);MO(a.a,true);hO(a.a);eO(a.a);break;case 27:yZ(d,d.b,true);xO(d.u);lU(d.W);kO(a.a);break;case 9:a$(d,(h=IK(a.b.sb),h==null?'':h),wj(b.a));kO(a.a);!!b.a&&zj(b.a);break;case 38:if(oO(a.a)){$Z(d,(g=IK(a.b.sb),g==null?'':g),true);!!b.a&&zj(b.a)}else if(qO(a.a)){rO(a.a,wj(b.a),true,false,false);!!b.a&&zj(b.a)}break;case 40:if(oO(a.a)){$Z(d,(g=IK(a.b.sb),g==null?'':g),false);!!b.a&&zj(b.a)}else if(qO(a.a)){rO(a.a,wj(b.a),false,false,true);!!b.a&&zj(b.a)}break;case 37:if(oO(a.a)){a$(d,(g=IK(a.b.sb),g==null?'':g),true);!!b.a&&zj(b.a)}else if(qO(a.a)){rO(a.a,wj(b.a),false,false,false);!!b.a&&zj(b.a)}else if(a.a.v){MO(a.a,true);GK(a.b.sb)==0&&!!b.a&&zj(b.a)}break;case 39:if(oO(a.a)){a$(d,(g=IK(a.b.sb),g==null?'':g),false);!!b.a&&zj(b.a)}else if(qO(a.a)){rO(a.a,wj(b.a),false,true,false);!!b.a&&zj(b.a)}else if(a.a.v){MO(a.a,true);c=GK(a.b.sb);f=(g=IK(a.b.sb),g==null?'':g).length;c==f&&!!b.a&&zj(b.a)}}}else{y$(d,b.a,US(sj(b.a)))}Aj(b.a)}
function XZ(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o;FZ(a);if(b==0||c==0){return}j=false;f||(j=c!=a.W.rc||b!=a.W.qc);if(d){m=a.W.qc;n=a.W.rc;g=m>b?b:m;h=m>b?m:b;k=n>c?c:n;l=n>c?n:c;o=qP(a.J,k,l,g,h);if(a.u.f);else if(AR(a.W.xc)){tX(a.W,o.col1,o.col2,o.row1,o.row2);rX(a.W,o.col1,o.col2,o.row1,o.row2,true)}else{rX(a.W,o.col1,o.col2,o.row1,o.row2,false)}if(a.u.f){BO(a.u,a.Y,a.Z,b,c,false)}else if(f){AR(a.W.xc)?l9(a.X,o.row1,o.col1,o.row2,o.col2):o9(a.X,o.row1,o.col1,o.row2,o.col2);pb(a.s,200)}}else if(e){if(b==a.W.qc&&c==a.W.rc){return}if(a.u.f){BO(a.u,b,c,b,c,true)}else{a.W.C&&(a.W.C=false,undefined);AR(a.W.xc)&&CW(a.W,false);RW(a.W,b,c);mR(a.R);j&&L_(a,b,c,null);if(f){j9(a.X,c,b);pb(a.s,200)}}}else{i=W_(a.J,b,c);if(a.u.f){a.Y=b;a.Z=c;BO(a.u,b,c,b,c,false)}else{a.W.C||(a.W.C=true,undefined);if(!AR(a.W.xc)){CW(a.W,true);$T(a.W)}BW(a.W,b,c);if(i){tX(a.W,i.col1,i.col2,i.row1,i.row2);rX(a.W,i.col1,i.col2,i.row1,i.row2,true);qR(a.R,i.col1);rR(a.R,i.row1)}else{tX(a.W,b,b,c,c);rX(a.W,b,b,c,c,true)}j&&L_(a,b,c,null);if(f){mR(a.R);m9(a.X,c,b,true);pb(a.s,200)}}}}
function WU(a){ne(a,a.Ec);Vg(a.Ec,a.yc);dh(a.Ec,'v-spreadsheet');a.yc.className='bottom-right-pane';dh(a.yc,Nvb);a.yc.tabIndex=3;a.Oc.className='top-right-pane';dh(a.Oc,Nvb);Vg(a.Ec,a.Oc);a.c.className='bottom-left-pane';dh(a.c,Nvb);Vg(a.Ec,a.c);a.Mc.className='top-left-pane';dh(a.Mc,Nvb);Vg(a.Ec,a.Mc);a.I.className='col-group-pane';Vg(a.Ec,a.I);a.fc.className='row-group-pane';Vg(a.Ec,a.fc);a.F.className='col-group-freeze-pane';Vg(a.Ec,a.F);a.cc.className='row-group-freeze-pane';Vg(a.Ec,a.cc);a.gc.className='row-group-summary';Vg(a.Ec,a.gc);a.J.className='col-group-summary';Vg(a.Ec,a.J);a.D.className='col-group-border';Vg(a.Ec,a.D);a.bc.className='row-group-border';Vg(a.Ec,a.bc);a.kb.className='grouping-corner';Vg(a.Ec,a.kb);a.Tb.className=kwb;Vg(a.Ec,a.Tb);a.Ub.className=kwb;Vg(a.yc,a.Ub);a.N.className='corner';Vg(a.Ec,a.N);a.fb.className='floater';a.sb=new uP(a);ue(a.sb,'0');KK(a.sb,'x');he(a.sb).id='cellinput';jF();Vg(a.yc,tF(he(a.sb)));lH(a,a.sb);a.Mb.style[ltb]=(em(),'1.0in');a.Mb.style[Btb]=(yl(),Dtb);a.Mb.style[Itb]=(sm(),Vtb);a.Mb.style['padding']=Mub;Vg(a.Ec,a.Mb);a.hb.style[Itb]=Vtb;xh(a.hb,lwb)}
function Teb(a,b){var c,d,e,f,g,h,i,j;c=0;g=0;f=b.length;h=null;j=new veb;if(g<f&&(Srb(g,b.length),b.charCodeAt(g)==43)){++g;++c;if(g<f&&(Srb(g,b.length),b.charCodeAt(g)==43||(Srb(g,b.length),b.charCodeAt(g)==45))){throw CD(new Mdb(rsb+b+'"'))}}while(g<f&&(Srb(g,b.length),b.charCodeAt(g)!=46)&&(Srb(g,b.length),b.charCodeAt(g)!=101)&&(Srb(g,b.length),b.charCodeAt(g)!=69)){++g}j.a+=''+b.substr(c,g-c);if(g<f&&(Srb(g,b.length),b.charCodeAt(g)==46)){++g;c=g;while(g<f&&(Srb(g,b.length),b.charCodeAt(g)!=101)&&(Srb(g,b.length),b.charCodeAt(g)!=69)){++g}a.e=g-c;j.a+=''+b.substr(c,g-c)}else{a.e=0}if(g<f&&(Srb(g,b.length),b.charCodeAt(g)==101||(Srb(g,b.length),b.charCodeAt(g)==69))){++g;c=g;if(g<f&&(Srb(g,b.length),b.charCodeAt(g)==43)){++g;g<f&&(Srb(g,b.length),b.charCodeAt(g)!=45)&&++c}h=b.substr(c,f-c);a.e=a.e-gdb(h);if(a.e!=Vq(a.e)){throw CD(new Mdb('Scale out of range.'))}}i=j.a;if(i.length<16){a.f=(Oeb==null&&(Oeb=new RegExp('^[+-]?\\d*$','i')),Oeb.test(i)?parseInt(i,10):NaN);if(isNaN(a.f)){throw CD(new Mdb(rsb+b+'"'))}a.a=afb(a.f)}else{Veb(a,new Ofb(i))}a.d=j.a.length;for(e=0;e<j.a.length;++e){d=Rdb(j.a,e);if(d!=45&&d!=48){break}--a.d}a.d==0&&(a.d=1)}
function H6(a,b,c){var d,e,f,g,h,i;for(e=$p(Vp(tB,1),wsb,2,6,[cyb,dyb,'rows','cols',eyb,fyb,gyb,hyb,iyb,jyb,'defRowH','defColW','rowH','colW',kyb,lyb,myb,nyb,oyb,pyb,qyb,Dwb,Ewb,ryb,syb,tyb,uyb,vyb,wyb,Fwb,Gwb,xyb,yyb,zyb,Ayb,Byb,ktb,ltb,gxb,hxb,cxb,Qxb,'id',Fxb,pxb,dxb,Rxb,nxb]),f=0,g=e.length;f<g;++f){d=e[f];if(c.b||P1(c,d)){i=(!b.B&&(b.B=new P_),b.B);h=CP(a.e);Tdb(cyb,d)&&n_(i,h.P);Tdb(dyb,d)&&R$(i,h.k);Tdb('rows',d)&&t_(i,h.V);Tdb('cols',d)&&Q$(i,h.j);Tdb(eyb,d)&&M$(i,h.e);Tdb(fyb,d)&&o_(i,h.Q);Tdb(gyb,d)&&O$(i,h.g);Tdb(hyb,d)&&q_(i,h.S);Tdb(iyb,d)&&N$(i,h.f);Tdb(jyb,d)&&p_(i,h.R);Tdb('defRowH',d)&&W$(i,h.r);Tdb('defColW',d)&&V$(i,h.q);Tdb('rowH',d)&&r_(i,h.T);Tdb('colW',d)&&P$(i,h.i);Tdb(kyb,d)&&K$(i,h.d);Tdb(lyb,d)&&s_(i,h.U);Tdb(myb,d)&&S$(i,h.n);Tdb(nyb,d)&&k_(i,h.J);Tdb(oyb,d)&&l_(i,h.K);Tdb(pyb,d)&&x_(i,h.Z);Tdb(qyb,d)&&T$(i,h.p);Tdb(Dwb,d)&&$$(i,h.v);Tdb(Ewb,d)&&_$(i,h.w);Tdb(ryb,d)&&A_(i,h.$);Tdb(syb,d)&&a_(i,h.A);Tdb(tyb,d)&&D_(i,h.cb);Tdb(uyb,d)&&d_(i,h.C);Tdb(vyb,d)&&X$(i,h.s);Tdb(wyb,d)&&Y$(i,h.t);Tdb(Fwb,d)&&B_(i,h._);Tdb(Gwb,d)&&b_(i,h.B);Tdb(xyb,d)&&f_(i,h.D);Tdb(yyb,d)&&h_(i,h.G);Tdb(zyb,d)&&i_(i,h.H);Tdb(Ayb,d)&&j_(i,h.I);Tdb(Byb,d)&&m_(i,h.M);Tdb(ktb,d)&&Z$(i,h.jb);Tdb(ltb,d)&&C_(i,h.nb);Tdb('id',d)&&e_(i,h.kb)}}}
function igb(a,b){fgb();var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G,H;B=a.e;o=a.d;e=a.a;if(B==0){switch(b){case 0:return '0';case 1:return '0.0';case 2:return '0.00';case 3:return '0.000';case 4:return '0.0000';case 5:return '0.00000';case 6:return '0.000000';default:w=new ueb;b<0?(w.a+='0E+',w):(w.a+='0E',w);w.a+=-b;return w.a;}}t=o*10+1+7;u=Xp(Wq,esb,16,t+1,15,1);c=t;if(o==1){h=e[0];if(h<0){H=ED(h,Iyb);do{p=H;H=HD(H,10);u[--c]=48+YD(VD(p,PD(H,10)))&ysb}while(FD(H,0)!=0)}else{H=h;do{p=H;H=H/10|0;u[--c]=48+(p-H*10)&ysb}while(H!=0)}}else{D=Xp(Zq,fwb,16,o,15,1);G=o;Aeb(e,0,D,0,G);I:while(true){A=0;for(j=G-1;j>=0;j--){F=DD(SD(A,32),ED(D[j],Iyb));r=ggb(F);D[j]=YD(r);A=YD(TD(r,32))}s=YD(A);q=c;do{u[--c]=48+s%10&ysb}while((s=s/10|0)!=0&&c!=0);d=9-q+c;for(i=0;i<d&&c>0;i++){u[--c]=48}l=G-1;for(;D[l]==0;l--){if(l==0){break I}}G=l+1}while(u[c]==48){++c}}n=B<0;g=t-c-b-1;if(b==0){n&&(u[--c]=45);return leb(u,c,t-c)}if(b>0&&g>=-6){if(g>=0){k=c+g;for(m=t-1;m>=k;m--){u[m+1]=u[m]}u[++k]=46;n&&(u[--c]=45);return leb(u,c,t-c+1)}for(l=2;l<-g+1;l++){u[--c]=48}u[--c]=46;u[--c]=48;n&&(u[--c]=45);return leb(u,c,t-c)}C=c+1;f=t;v=new veb;n&&(v.a+='-',v);if(f-C>=1){oeb(v,u[c]);v.a+='.';v.a+=leb(u,c+1,t-c-1)}else{v.a+=leb(u,c,t-c)}v.a+='E';g>0&&(v.a+='+',v);v.a+=''+g;return v.a}
function y$(a,b,c){var d,e;if((Fh(),Eh).Qd(b)==0&&(b.keyCode|0)!=32||Eh.Qd(b)==13){switch(b.keyCode|0){case 8:case 46:AZ(a);if(!a.e){i9(a.X.t,$p(Vp(nB,1),esb,1,5,[]));AO(a.u,'')}break;case 40:b.shiftKey?hR(a.R,true):iR(a.R,true);break;case 37:b.shiftKey?gR(a.R,false):jR(a.R,true);break;case 9:b.shiftKey?jR(a.R,zjb(a.v,Edb(a.W.qc),0)!=-1||zjb(a.w,Edb(a.W.rc),0)!=-1):kR(a.R,zjb(a.v,Edb(a.W.qc),0)!=-1||zjb(a.w,Edb(a.W.rc),0)!=-1);break;case 39:b.shiftKey?gR(a.R,true):kR(a.R,true);break;case 38:b.shiftKey?hR(a.R,false):lR(a.R,true);break;case 113:case 13:if(13==(b.keyCode|0)){if(zjb(a.v,Edb(a.W.qc),0)!=-1||zjb(a.w,Edb(a.W.rc),0)!=-1){iR(a.R,true);break}else{if(a.W.xc.e!=a.W.xc.f||a.W.xc.K!=a.W.xc.L){b.shiftKey?lR(a.R,false):iR(a.R,false);break}}}AZ(a);if(!iV(a.W)&&!a.C&&!a.e&&!a.o){a.b=KU(a.W);dO(a.u);a.t=false;a.C=true;JW(a.W,true,(d=IK(a.u.j),d==null?'':d));a.u.u=true;GO(a.u)}}}else{if(!(zjb(a.v,Edb(a.W.qc),0)!=-1||zjb(a.w,Edb(a.W.rc),0)!=-1)){AZ(a);if(!iV(a.W)&&!a.C&&!a.e&&!a.o){a.C=true;a.b=KU(a.W);GO(a.u);if(Sdb(a.b,'%')||jV(a.W)){(e=new cnb,Dhb(e.a,'0',e),Dhb(e.a,'1',e),Dhb(e.a,'2',e),Dhb(e.a,'3',e),Dhb(e.a,'4',e),Dhb(e.a,'5',e),Dhb(e.a,'6',e),Dhb(e.a,'7',e),Dhb(e.a,'8',e),Dhb(e.a,'9',e),Dhb(e.a,'-',e),Dhb(e.a,'+',e),Bhb(e.a,c))&&(c=c+'%');JW(a.W,true,c)}else{JW(a.W,true,c);dO(a.u)}AO(a.u,c)}}}}
function fR(a,b,c,d,e){var f,g,h,i,j,k,l,m;if(b==c&&d==e){h=LZ(a.d,d,b);if(!h){h=new pP;h.col1=d;h.col2=e;h.row1=b;h.row2=c}return h}else{g=MZ(a.d,d,b);if(!!g&&g.col2>=e&&g.row2>=c){return g}}k=a.c.qc;l=a.c.rc;if(k<d||k>e||l<b||l>c){return LZ(a.d,k,a.c.rc)}m=false;f=d;while(f<=e){i=LZ(a.d,f,b);if(i){f=i.col2+1;if(b>i.row1){m=true;if(b<c){i.row2>c?(b=i.row2+1):(b=c);f=d}else{if(k<i.col1){e=i.col1-1}else if(k>i.col2){d=i.col2+1}else{d=i.col1;e=i.col2;break}}}}else{++f}}b>c&&(b=c);f=b;while(f<=c){i=LZ(a.d,e,f);if(i){f=i.row2+1;if(e<i.col2){m=true;if(e>d){i.col1>d?(e=i.col1-1):(e=d);f=b}else{if(l<i.row1){c=i.row1-1}else if(l>i.row2){b=i.row2+1}else{b=i.row1;c=i.row2;break}}}}else{++f}}e<d&&(e=d);f=d;while(f<=e){i=LZ(a.d,f,c);if(i){f=i.col2+1;if(c<i.row2){m=true;if(c>b){b<i.row1?(c=i.row1-1):(c=b);f=d}else{if(k<i.col1){e=i.col1-1}else if(k>i.col2){d=i.col2+1}else{e=i.col1;d=i.col2;break}}}}else{++f}}c<b&&(c=b);f=b;while(f<=c){i=LZ(a.d,d,f);if(i){f=i.row2+1;if(d>i.col1){m=true;if(d<e){e>i.col2?(d=i.col2+1):(d=e);f=b}else{if(l<i.row1){c=i.row1-1}else if(l>i.row2){b=i.row2+1}else{b=i.row1;c=i.row2;break}}}}else{++f}}d>e&&(d=e);if(m){return fR(a,b,c,d,e)}else if(b==c&&d==e){h=LZ(a.d,d,b);if(!h){h=new pP;h.col1=d;h.col2=e;h.row1=b;h.row2=c}return h}else{g=MZ(a.d,d,b);if(!!g&&g.col2>=e&&g.row2>=c){return g}}j=new pP;j.col1=d;j.col2=e;j.row1=b;j.row2=c;return j}
function JV(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;vX(b);D=b.Kc+((b.yc.scrollTop||0)|0);C=ph(b.yc);G=D-b.Pb;l=C-b.Ob;try{if(b.zb>b.a.P){b.zb=b.a.P;while(b.zb-b.db+1<b.jc.a.length){A=Bjb(b.jc,b.jc.a.length-1);for(g=new akb(A);g.a<g.c.a.length;){f=$jb(g);ah(f.d)}ah(Bjb(b.hc,b.hc.a.length-1))}}if(b.xb>b.a.i){b.xb=b.a.i;for(B=new akb(b.jc);B.a<B.c.a.length;){A=$jb(B);while(b.xb-b.bb+1<A.a.length){ah(Bjb(A,A.a.length-1).d)}}while(b.xb-b.bb+1<b.K.a.length){ah(Bjb(b.K,b.K.a.length-1))}}r=1;for(n=1;n<b.db;n++){r+=QZ(b.a,n)?0:n>=b.W.length?wU(b):b.W[n-1];n==b.Rc&&(b.Kc=r)}t=r;for(o=b.db;o<=b.zb;o++){t+=QZ(b.a,o)?0:o>=b.W.length?wU(b):b.W[o-1]}d=b.Kc+D+b.nc+b.a.M;F=r-b.eb;e=t-b.Ab;b.eb=r;b.Ab=t;q=0;for(p=1;p<b.bb;p++){q+=KZ(b.a,p);b.ob==p&&(b.Bb=q)}s=q;for(m=b.bb;m<=b.xb;m++){s+=KZ(b.a,m)}v=b.Bb+C+b.oc+b.a.j;w=s-b.yb;b.cb=q;b.yb=s;PU(b,C);_W(b,0,-1);if(w<0||l>0||b.xb<b.a.i&&b.yb<v){QU(b,C);_W(b,0,1)}if(F>0||G<0){VU(b,D);_W(b,-1,0)}if(e!=0||G>0||b.zb<b.a.P&&b.Ab<d){UU(b,D);_W(b,1,0)}YV(b);b.Ob=C;b.Pb=D;c&&_4(b.Qb);for(i=(u=(new Wib(b.b)).a.Sf().Ie(),new _ib(u));i.a.Se();){h=(k=i.a.Te(),k._f());PZ(b.a,h.b)||QZ(b.a,h.d)?(HM(h,false),ah(h.i)):nN(h)}oV(b);tX(b,b.xc.e,b.xc.f,b.xc.K,b.xc.L);aX(b);qX(b);mX(b,true)}catch(a){a=BD(a);if(Oq(a,21)){j=a;uqb(b.U,'SheetWidget:relayoutSheet: '+yf(j,j.Fd())+' while relayouting spreadsheet');$V(b,C,D);YV(b);u$(b.a,b.db,b.zb,b.bb,b.xb);UV(b);ZV(b);aX(b);qX(b);TV(b);FV(b);lX(b)}else throw CD(a)}}
function hR(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;o=a.c.xc.K;h=o;f=a.c.xc.e;d=a.c.xc.L;g=d;j=a.c.xc.f;m=a.c.rc;l=a.c.qc;i=MZ(a.d,l,m);c=false;if(a.c.C){!!i&&(b&&i.row1!=o||!b&&i.row2==d)&&(m=i.row2);n=null;if(m==o){if(b&&d+1<=a.d.P){++d;while(!!a.d.w&&zjb(a.d.w,Edb(d),0)!=-1&&d<a.d.P){++d}n=qP(a.d.J,o,d,f,j)}else if(!b){if(o!=d){--d;while(!!a.d.w&&zjb(a.d.w,Edb(d),0)!=-1&&d>o){--d}n=fR(a,o,d,f,j)}else if(o-1>0){c=true;--o;while(!!a.d.w&&zjb(a.d.w,Edb(o),0)!=-1&&o>1){--o}n=qP(a.d.J,o,d,f,j)}}}else if(m==d){if(b){if(o!=d){c=true;++o;while(!!a.d.w&&zjb(a.d.w,Edb(o),0)!=-1&&o<d){++o}n=fR(a,o,d,f,j)}else if(d+1<=a.d.P){++d;while(!!a.d.w&&zjb(a.d.w,Edb(d),0)!=-1&&d<a.d.P){++d}n=qP(a.d.J,o,d,f,j)}}else if(!b&&o-1>0){c=true;--o;while(!!a.d.w&&zjb(a.d.w,Edb(o),0)!=-1&&o>1){--o}n=qP(a.d.J,o,d,f,j)}}else{if(b){if(d+1<=a.d.P){++d;while(!!a.d.w&&zjb(a.d.w,Edb(d),0)!=-1&&d<a.d.P){++d}n=qP(a.d.J,o,d,f,j)}}else{c=true;if(o-1>0){--o;while(!!a.d.w&&zjb(a.d.w,Edb(o),0)!=-1&&o>1){--o}n=qP(a.d.J,o,d,f,j)}}}if(!n){return}tX(a.c,n.col1,n.col2,n.row1,n.row2);QV(a.c,n.col1,n.col2,n.row1,n.row2);RV(a.c,n.row1,n.row2,n.col1,n.col2);eW(a.c,n.row1,n.row2,c)}else{if(i){k=i.row2;e=i.col2}else{k=m;e=l}if(b){++k;while(!!a.d.w&&zjb(a.d.w,Edb(k),0)!=-1&&k<a.d.P){++k}}else{--m;while(!!a.d.w&&zjb(a.d.w,Edb(m),0)!=-1&&m>1){--m}}if(m>0&&k<=a.d.P){n=qP(a.d.J,m,k,l,e);if(n){a.c.C=true;CW(a.c,true);$T(a.c);tX(a.c,n.col1,n.col2,n.row1,n.row2);rX(a.c,n.col1,n.col2,n.row1,n.row2,true)}}gW(a.c)}if(f!=a.c.xc.e||j!=a.c.xc.f||h!=a.c.xc.K||g!=a.c.xc.L){l9(a.d.X,a.c.xc.K,a.c.xc.e,a.c.xc.L,a.c.xc.f);pb(a.d.s,200)}}
function gR(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;o=a.c.xc.K;f=a.c.xc.e;g=f;j=a.c.xc.f;h=j;d=a.c.xc.L;l=a.c.qc;m=a.c.rc;i=W_(a.d.J,l,m);c=false;if(a.c.C){!!i&&(b&&i.col1!=f||!b&&i.col2==j)&&(l=i.col2);n=null;if(l==f){if(b&&j+1<=a.d.i){++j;while(!!a.d.v&&zjb(a.d.v,Edb(j),0)!=-1&&j<a.d.i){++j}n=qP(a.d.J,o,d,f,j)}else if(!b){if(j!=f){--j;while(!!a.d.v&&zjb(a.d.v,Edb(j),0)!=-1&&j>f){--j}n=fR(a,o,d,f,j)}else if(f-1>0){c=true;--f;while(!!a.d.v&&zjb(a.d.v,Edb(f),0)!=-1&&f>1){--f}n=qP(a.d.J,o,d,f,j)}}}else if(l==j){if(b){if(j!=f){c=true;++f;while(!!a.d.v&&zjb(a.d.v,Edb(f),0)!=-1&&f<j){++f}n=fR(a,o,d,f,j)}else if(j+1<=a.d.i){++j;while(!!a.d.v&&zjb(a.d.v,Edb(j),0)!=-1&&j<a.d.i){++j}n=qP(a.d.J,o,d,f,j)}}else if(!b&&f-1>0){c=true;--f;while(!!a.d.v&&zjb(a.d.v,Edb(f),0)!=-1&&f>1){--f}n=qP(a.d.J,o,d,f,j)}}else{if(b){if(j+1<=a.d.i){++j;while(!!a.d.v&&zjb(a.d.v,Edb(j),0)!=-1&&j<a.d.i){++j}n=qP(a.d.J,o,d,f,j)}}else{c=true;if(f-1>0){--f;while(!!a.d.v&&zjb(a.d.v,Edb(f),0)!=-1&&f>1){--f}n=qP(a.d.J,o,d,f,j)}}}if(!n){return}tX(a.c,n.col1,n.col2,n.row1,n.row2);QV(a.c,n.col1,n.col2,n.row1,n.row2);RV(a.c,n.row1,n.row2,n.col1,n.col2);dW(a.c,n.col1,n.col2,c)}else{if(i){k=i.row2;e=i.col2}else{k=m;e=l}if(b){++e;while(!!a.d.v&&zjb(a.d.v,Edb(e),0)!=-1&&e<a.d.i){++e}}else{--l;while(!!a.d.v&&zjb(a.d.v,Edb(l),0)!=-1&&l>1){--l}}if(l>0&&e<a.d.i){n=qP(a.d.J,m,k,l,e);if(n){a.c.C=true;CW(a.c,true);$T(a.c);tX(a.c,n.col1,n.col2,n.row1,n.row2);rX(a.c,n.col1,n.col2,n.row1,n.row2,true)}}gW(a.c)}if(g!=a.c.xc.e||h!=a.c.xc.f||o!=a.c.xc.K||d!=a.c.xc.L){l9(a.d.X,a.c.xc.K,a.c.xc.e,a.c.xc.L,a.c.xc.f);pb(a.d.s,200)}}
function rV(b,c){var d,e,f,g,h,i,j,k,l,m,n;k=zX(c);d=(Fh(),k).getAttribute(utb)||'';if(b.o&&d.indexOf('comment-overlay')==-1){b.o=false;qN(b.Q,false);if(M(b.Q,b.q)){kN(b.q);b.j=null;b.k=-1;b.n=-1}}if(d.indexOf(Nvb)!=-1||Tdb(k.tagName,'input')||Tdb(d,'floater')){return}if(d.indexOf(Ovb)!=-1){Tdb(d,Wub)||Tdb(d,Xub)?YS(b.wb,jh(Ih(k))):YS(b.wb,d);m=b.wb.a;n=b.wb.b;try{j=vvb.length;if(!Tdb(d.substr(d.length-j,j),vvb)){e=(h=kj($doc),t1(),c.type.indexOf(Evb)!=-1?Nm(c.changedTouches[0])+h:$h(c.clientX||0)+h);f=(i=lj($doc),c.type.indexOf(Evb)!=-1?Om(c.changedTouches[0])+i:$h(c.clientY||0)+i);l=DU(b,e,f,pU(b,m,n));k=l.d;m=l.c;n=l.k}}catch(a){a=BD(a);if(Oq(a,81)){uqb(b.U,'SheetWidget:onSheetMouseDown - JSE while trying to find real event target, className:'+d)}else if(Oq(a,32)){uqb(b.U,'SheetWidget:onSheetMouseDown - IOOBE while trying to find real event target, className:'+d)}else throw CD(a)}c.stopPropagation();Eh.Ud(c);if(Eh.Pd(c)==2){CF(b.yc);c$(b.a,c,m,n)}else{b.yc.focus();b._&&!Zg(he(b.sb),k)&&ZZ(b.a,(g=IK(b.sb),g==null?'':g));if(!!c.ctrlKey||!!c.metaKey||!!c.shiftKey){XZ(b.a,m,n,(Eh.$d(k),!!c.shiftKey),!!c.metaKey||!!c.ctrlKey,true);b.Ic=-1;b.Jc=-1}else{if(!!b.s&&Bhb(b.s,Zub+b.wb.a+$ub+b.wb.b)){o$(b.a,m,n)}else{XZ(b.a,m,n,(Eh.$d(k),!!c.shiftKey),!!c.metaKey||!!c.ctrlKey,false);b.wc=true;b.Ic=m;b.Jc=n;b.Gc=m<=b.ob&&n<=b.Rc;b.Hc=m>b.ob&&m<=b.xb&&n<=b.Rc;b.Fc=n>b.Rc&&n<=b.zb&&m<=b.ob;b.O=!b.Gc&&!b.Hc;b.P=!b.Gc&&!b.Fc;b.A=(h=kj($doc),t1(),c.type.indexOf(Evb)!=-1?Nm(c.changedTouches[0])+h:$h(c.clientX||0)+h);b.B=(i=lj($doc),c.type.indexOf(Evb)!=-1?Om(c.changedTouches[0])+i:$h(c.clientY||0)+i);DF(b.yc)}}}}}
function bW(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o,p,q,r,s,t,u,v,w,A;o=yjb((Lrb(0,h.a.length),h.a[0]),0).k;s=yjb(yjb(h,h.a.length-1),0).k;n=yjb((Lrb(0,h.a.length),h.a[0]),0).c;r=yjb((Lrb(0,h.a.length),h.a[0]),(Lrb(0,h.a.length),h.a[0]).a.length-1).c;A=new Ejb;for(q=new akb(h);q.a<q.c.a.length;){u=$jb(q);t=(Lrb(0,u.a.length),u.a[0]).k;if(b>0){if(t<d){if(s<e){t=++s;_jb(q);A.a[A.a.length]=u}else{for(l=new akb(u);l.a<l.c.a.length;){k=$jb(l);ah(k.d)}_jb(q);continue}}}else if(b<0){if(t>e){if(o>d){t=--o;_jb(q);A.a[A.a.length]=u}else{for(l=new akb(u);l.a<l.c.a.length;){k=$jb(l);ah(k.d)}_jb(q);continue}}}n=(Lrb(0,u.a.length),u.a[0]).c;r=yjb(u,u.a.length-1).c;w=new Ejb;for(m=new akb(u);m.a<m.c.a.length;){k=$jb(m);j=k.c;if(c>0){if(j<f){if(r<g){j=++r;_jb(m);w.a[w.a.length]=k}else{ah(k.d);_jb(m);continue}}}else if(c<0){if(j>g){if(n>f){j=--n;_jb(m);w.a[w.a.length]=k}else{ah(k.d);_jb(m);continue}}}(j!=k.c||t!=k.k)&&pM(k,j,t,Ahb(a.e,Zub+j+$ub+t))}if(c>0){for(l=new akb(w);l.a<l.c.a.length;){k=$jb(l);u.a[u.a.length]=k}while(r<g){++r;k=new vM(a,r,t,Ahb(a.e,Zub+r+$ub+t));Vg(i,k.d);u.a[u.a.length]=k}}else if(c<0){for(l=new akb(w);l.a<l.c.a.length;){k=$jb(l);Orb(0,u.a.length);Erb(u.a,0,k)}while(n>f){--n;k=new vM(a,n,t,Ahb(a.e,Zub+n+$ub+t));Vg(i,k.d);Orb(0,u.a.length);Erb(u.a,0,k)}}}if(b>0){for(v=new akb(A);v.a<v.c.a.length;){u=$jb(v);h.a[h.a.length]=u}}else{for(v=new akb(A);v.a<v.c.a.length;){u=$jb(v);Orb(0,h.a.length);Erb(h.a,0,u)}}if(b>0){while(s<e){u=new Fjb(g-f+1);++s;for(p=f;p<=g;p++){k=new vM(a,p,s,Ahb(a.e,Zub+p+$ub+s));u.a[u.a.length]=k;Vg(i,k.d)}h.a[h.a.length]=u}}else if(b<0){while(o>d){u=new Ejb;--o;for(p=f;p<=g;p++){k=new vM(a,p,o,Ahb(a.e,Zub+p+$ub+o));u.a[u.a.length]=k;Vg(i,k.d)}Orb(0,h.a.length);Erb(h.a,0,u)}}mX(a,false)}
function Pd(){Pd=hE;Hc=new Gb;Gc=new Fb;Ic=new Hb;Jc=new Nb;Kc=new Ob;Lc=new Pb;Mc=new Qb;Nc=new Rb;Oc=new Sb;Pc=new Tb;Qc=new Ub;Rc=new Vb;Sc=new Wb;Tc=new Xb;Uc=new Yb;Vc=new Zb;Xc=new _b;Wc=new $b;Yc=new ac;Zc=new bc;$c=new ec;_c=new fc;bd=new hc;cd=new ic;ad=new gc;dd=new jc;ed=new kc;fd=new lc;gd=new mc;jd=new pc;ld=new rc;md=new sc;kd=new qc;hd=new nc;nd=new tc;od=new uc;pd=new vc;qd=new wc;rd=new zc;td=new Ec;sd=new Dc;ud=new Fc;xd=new Rd;yd=new Sd;wd=new Qd;zd=new Td;Ad=new Ud;Bd=new Vd;Cd=new Wd;Dd=new Xd;Ed=new Yd;Gd=new $d;Hd=new _d;Fd=new Zd;Id=new ae;Jd=new be;Kd=new ce;Ld=new de;Nd=new fe;Od=new ge;Md=new ee;vd=new Zmb;Dhb(vd,'region',ud);Dhb(vd,'alert',Gc);Dhb(vd,'dialog',Sc);Dhb(vd,Usb,Hc);Dhb(vd,Vsb,Ic);Dhb(vd,'document',Uc);Dhb(vd,'article',Jc);Dhb(vd,'banner',Kc);Dhb(vd,Wsb,Lc);Dhb(vd,'checkbox',Mc);Dhb(vd,'gridcell',Xc);Dhb(vd,Xsb,Nc);Dhb(vd,'group',Yc);Dhb(vd,'combobox',Oc);Dhb(vd,Ysb,Pc);Dhb(vd,Zsb,Qc);Dhb(vd,$sb,Rc);Dhb(vd,'list',ad);Dhb(vd,'directory',Tc);Dhb(vd,'form',Vc);Dhb(vd,'grid',Wc);Dhb(vd,'heading',Zc);Dhb(vd,'img',$c);Dhb(vd,_sb,_c);Dhb(vd,'listbox',bd);Dhb(vd,'listitem',cd);Dhb(vd,'log',dd);Dhb(vd,'main',ed);Dhb(vd,'marquee',fd);Dhb(vd,'math',gd);Dhb(vd,'menu',hd);Dhb(vd,'menubar',jd);Dhb(vd,'menuitem',kd);Dhb(vd,atb,ld);Dhb(vd,dtb,pd);Dhb(vd,'radio',sd);Dhb(vd,btb,md);Dhb(vd,ctb,nd);Dhb(vd,'note',od);Dhb(vd,etb,qd);Dhb(vd,ftb,rd);Dhb(vd,gtb,td);Dhb(vd,'row',wd);Dhb(vd,'rowgroup',xd);Dhb(vd,'rowheader',yd);Dhb(vd,'search',Ad);Dhb(vd,'separator',Bd);Dhb(vd,'scrollbar',zd);Dhb(vd,'slider',Cd);Dhb(vd,htb,Dd);Dhb(vd,'status',Ed);Dhb(vd,'tab',Fd);Dhb(vd,'tablist',Gd);Dhb(vd,'tabpanel',Hd);Dhb(vd,'textbox',Id);Dhb(vd,'timer',Jd);Dhb(vd,'toolbar',Kd);Dhb(vd,'tooltip',Ld);Dhb(vd,'tree',Md);Dhb(vd,'treegrid',Nd);Dhb(vd,'treeitem',Od)}
function lbb(b){var c,d,e;b=feb(b,(lob(),job));this.i=b.indexOf('gecko')!=-1&&b.indexOf(Swb)==-1&&b.indexOf(Cyb)==-1;b.indexOf(' presto/')!=-1;this.r=b.indexOf(Cyb)!=-1;this.s=!this.r&&b.indexOf('applewebkit')!=-1;this.e=b.indexOf(' chrome/')!=-1||b.indexOf(' crios/')!=-1;this.o=b.indexOf('opera')!=-1;this.j=b.indexOf('msie')!=-1&&!this.o&&b.indexOf('webtv')==-1;this.j=this.j||this.r;this.p=b.indexOf('phantomjs/')!=-1;this.g=b.indexOf(' firefox/')!=-1||b.indexOf('fxios/')!=-1;this.q=!this.e&&!this.j&&!this.p&&!this.g&&b.indexOf('safari')!=-1;if(b.indexOf(' edge/')!=-1){this.f=true;this.e=false;this.o=false;this.j=false;this.q=false;this.g=false;this.s=false;this.i=false;this.p=false}b.indexOf('chromeframe')!=-1;try{if(this.i){d=b.indexOf('rv:');if(d>=0){e=b.substr(d+3);e=beb(e,'(\\.[0-9]+).+','$1');this.a=odb(e)}}else if(this.s){e=deb(b,b.indexOf('webkit/')+7);e=beb(e,'([0-9]+)[^0-9].+','$1');this.a=odb(e)}else if(this.r){e=deb(b,b.indexOf(Cyb)+8);e=beb(e,'([0-9]+\\.[0-9]+).*','$1');this.a=odb(e);this.a>7&&(this.a=7)}else this.f&&(this.a=0)}catch(a){a=BD(a);if(Oq(a,21)){zeb()}else throw CD(a)}try{if(this.j){if(b.indexOf('msie')==-1){d=b.indexOf('rv:');if(d>=0){c=d+3;this.d=cbb(b,c);ibb(this,this.d)}}else if(this.r){kbb(this,Vq(this.a)+4)}else{c=b.indexOf('msie ')+5;this.d=cbb(b,c);ibb(this,this.d)}}else if(this.g){c=b.indexOf(' firefox/');c!=-1?(c+=9):(c=b.indexOf(' fxios/')+7);this.d=cbb(b,c);ibb(this,this.d)}else if(this.e){c=b.indexOf(' chrome/');c!=-1?(c+=8):(c=b.indexOf(' crios/')+7);this.d=cbb(b,c);ibb(this,this.d)}else if(this.q){c=b.indexOf(' version/')+9;this.d=cbb(b,c);ibb(this,this.d)}else if(this.o){c=b.indexOf(' version/');c!=-1?(c+=9):(c=b.indexOf('opera/')+6);this.d=cbb(b,c);ibb(this,this.d)}else if(this.f){c=b.indexOf(' edge/')+6;this.d=cbb(b,c);ibb(this,this.d)}else if(this.p){c=b.indexOf(' phantomjs/')+11;this.d=cbb(b,c);ibb(this,this.d)}}catch(a){a=BD(a);if(Oq(a,21)){zeb()}else throw CD(a)}if(b.indexOf('windows ')!=-1){this.t=1;b.indexOf('windows phone')!=-1}else if(b.indexOf('android')!=-1){this.t=5;dbb(this,b)}else if(b.indexOf('linux')!=-1){this.t=3}else if(b.indexOf('macintosh')!=-1||b.indexOf('mac osx')!=-1||b.indexOf('mac os x')!=-1){this.k=b.indexOf('ipad')!=-1;this.n=b.indexOf('iphone')!=-1;if(this.k||b.indexOf('ipod')!=-1||this.n){this.t=4;gbb(this,b)}else{this.t=2}}else if(b.indexOf('; cros ')!=-1){this.t=6;ebb(this,b)}}
function k2(a){I3(a.b,nB,null);I3(a.b,JA,nB);I3(a.b,CA,nB);I3(a.b,MA,nB);I3(a.b,NA,nB);I3(a.b,OA,nB);I3(a.b,PA,nB);I3(a.b,QA,nB);I3(a.b,RA,nB);I3(a.b,SA,nB);I3(a.b,uA,CA);I3(a.b,EA,uA);I3(a.b,TA,EA);C3(a.b,Mz);D3(a.b,Iz,new q2);D3(a.b,Mz,new Q2);D3(a.b,JA,new Y2);D3(a.b,TA,new $2);D3(a.b,MA,new a3);D3(a.b,NA,new c3);D3(a.b,OA,new e3);D3(a.b,PA,new g3);D3(a.b,QA,new i3);D3(a.b,RA,new s2);D3(a.b,SA,new u2);G3(a.b,Mz,'getWidget',new v3(Iz));G3(a.b,Mz,'getState',new v3(TA));E3(a.b,mz,Zwb,new x2);E3(a.b,mz,$wb,new z2);E3(a.b,Mz,_wb,new B2);E3(a.b,Mz,axb,new D2);l2(a.b);F3(a.b,QA,bxb,new v3(_A));F3(a.b,NA,'am',new v3(tB));F3(a.b,uA,cxb,new v3(tB));F3(a.b,uA,dxb,new v3(_A));F3(a.b,SA,exb,new v3(iB));F3(a.b,NA,fxb,new v3(tB));F3(a.b,NA,'dayNames',new v3(Vp(tB,1)));F3(a.b,uA,gxb,new v3(tB));F3(a.b,uA,hxb,new v3(FA));F3(a.b,RA,ixb,new v3(iB));F3(a.b,RA,jxb,new v3(_A));F3(a.b,RA,kxb,new v3(tB));F3(a.b,RA,lxb,new v3(tB));F3(a.b,TA,mxb,new v3(_A));F3(a.b,CA,nxb,new v3(_A));F3(a.b,uA,oxb,new v3(GA));F3(a.b,uA,pxb,new v3(tB));F3(a.b,NA,qxb,new v3(iB));F3(a.b,MA,rxb,new v3(iB));F3(a.b,JA,sxb,new v3(_A));F3(a.b,uA,ktb,new v3(tB));F3(a.b,NA,txb,new v3(tB));F3(a.b,uA,'id',new v3(tB));F3(a.b,TA,uxb,new v3(MA));F3(a.b,OA,vxb,new w3(wxb,$p(Vp(ez,1),esb,5,0,[new v3(NA)])));F3(a.b,TA,xxb,new v3(OA));F3(a.b,SA,'maxWidth',new v3(iB));F3(a.b,QA,'mode',new v3(BA));F3(a.b,NA,yxb,new v3(Vp(tB,1)));F3(a.b,NA,'name',new v3(tB));F3(a.b,TA,zxb,new w3(Axb,$p(Vp(ez,1),esb,5,0,[new v3(tB),new v3(PA)])));F3(a.b,PA,Bxb,new v3(IA));F3(a.b,SA,'openDelay',new v3(iB));F3(a.b,TA,Cxb,new v3(tB));F3(a.b,TA,'pageState',new v3(JA));F3(a.b,QA,Dxb,new w3(Axb,$p(Vp(ez,1),esb,5,0,[new v3(tB),new v3(tB)])));F3(a.b,NA,'pm',new v3(tB));F3(a.b,TA,Exb,new v3(iB));F3(a.b,PA,'postfix',new v3(tB));F3(a.b,PA,'prefix',new v3(tB));F3(a.b,uA,Fxb,new v3(tB));F3(a.b,TA,Gxb,new v3(QA));F3(a.b,QA,'pushUrl',new v3(tB));F3(a.b,SA,Hxb,new v3(iB));F3(a.b,SA,Ixb,new v3(iB));F3(a.b,RA,Jxb,new v3(iB));F3(a.b,TA,Kxb,new v3(RA));F3(a.b,RA,Lxb,new v3(iB));F3(a.b,CA,Mxb,new w3('java.util.Set',$p(Vp(ez,1),esb,5,0,[new v3(tB)])));F3(a.b,CA,'resources',new w3(Axb,$p(Vp(ez,1),esb,5,0,[new v3(tB),new v3(DA)])));F3(a.b,MA,Nxb,new v3(iB));F3(a.b,NA,Oxb,new v3(Vp(tB,1)));F3(a.b,NA,Pxb,new v3(Vp(tB,1)));F3(a.b,uA,Qxb,new w3(wxb,$p(Vp(ez,1),esb,5,0,[new v3(tB)])));F3(a.b,TA,Rxb,new v3(iB));F3(a.b,TA,'theme',new v3(tB));F3(a.b,MA,Sxb,new v3(iB));F3(a.b,TA,Txb,new v3(_A));F3(a.b,JA,'title',new v3(tB));F3(a.b,TA,Uxb,new v3(SA));F3(a.b,NA,Vxb,new v3(_A));F3(a.b,uA,ltb,new v3(tB));H3(a.b,BA,new F2);H3(a.b,DA,new I2);H3(a.b,FA,new K2);H3(a.b,GA,new N2);H3(a.b,IA,new S2);H3(a.b,Vp(tB,1),new V2);B3(a.b,Mz,new s3(mz,Zwb,$p(Vp(tB,1),wsb,2,6,[pxb,oxb])));B3(a.b,Mz,new s3(mz,$wb,$p(Vp(tB,1),wsb,2,6,[Mxb])));B3(a.b,Mz,new t3(_wb,$p(Vp(tB,1),wsb,2,6,['theme'])));B3(a.b,Mz,new t3(axb,$p(Vp(tB,1),wsb,2,6,[Txb])))}
function m2(c){var d={setter:function(a,b){a.a=zcb(b)},getter:function(a){return Ccb(a.a)}};c.Df(QA,bxb,d);var d={setter:function(a,b){a.a=b},getter:function(a){return a.a}};c.Df(NA,'am',d);var d={setter:function(a,b){a.db=b},getter:function(a){return a.db}};c.Df(uA,cxb,d);var d={setter:function(a,b){a.eb=zcb(b)},getter:function(a){return Ccb(a.eb)}};c.Df(uA,dxb,d);var d={setter:function(a,b){a.a=b.Qf()},getter:function(a){return Edb(a.a)}};c.Df(SA,exb,d);var d={setter:function(a,b){a.b=b},getter:function(a){return a.b}};c.Df(NA,fxb,d);var d={setter:function(a,b){a.c=b},getter:function(a){return a.c}};c.Df(NA,'dayNames',d);var d={noLayout:1,setter:function(a,b){a.fb=b},getter:function(a){return a.fb}};c.Df(uA,gxb,d);var d={noLayout:1,setter:function(a,b){a.gb=b},getter:function(a){return a.gb}};c.Df(uA,hxb,d);var d={setter:function(a,b){a.a=b.Qf()},getter:function(a){return Edb(a.a)}};c.Df(RA,ixb,d);var d={setter:function(a,b){a.b=zcb(b)},getter:function(a){return Ccb(a.b)}};c.Df(RA,jxb,d);var d={setter:function(a,b){a.c=b},getter:function(a){return a.c}};c.Df(RA,kxb,d);var d={setter:function(a,b){a.d=b},getter:function(a){return a.d}};c.Df(RA,lxb,d);var d={setter:function(a,b){a.a=zcb(b)},getter:function(a){return Ccb(a.a)}};c.Df(TA,mxb,d);var d={setter:function(a,b){a.ob=zcb(b)},getter:function(a){return Ccb(a.ob)}};c.Df(CA,nxb,d);var d={setter:function(a,b){a.hb=b},getter:function(a){return a.hb}};c.Df(uA,oxb,d);var d={setter:function(a,b){a.ib=b},getter:function(a){return a.ib}};c.Df(uA,pxb,d);var d={setter:function(a,b){a.d=b.Qf()},getter:function(a){return Edb(a.d)}};c.Df(NA,qxb,d);var d={setter:function(a,b){a.a=b.Qf()},getter:function(a){return Edb(a.a)}};c.Df(MA,rxb,d);var d={setter:function(a,b){a.a=zcb(b)},getter:function(a){return Ccb(a.a)}};c.Df(JA,sxb,d);var d={setter:function(a,b){a.jb=b},getter:function(a){return a.jb}};c.Df(uA,ktb,d);var d={setter:function(a,b){a.e=b},getter:function(a){return a.e}};c.Df(NA,txb,d);var d={setter:function(a,b){a.kb=b},getter:function(a){return a.kb}};c.Df(uA,'id',d);var d={setter:function(a,b){a.b=b},getter:function(a){return a.b}};c.Df(TA,uxb,d);var d={setter:function(a,b){a.a=b},getter:function(a){return a.a}};c.Df(OA,vxb,d);var d={setter:function(a,b){a.c=b},getter:function(a){return a.c}};c.Df(TA,xxb,d);var d={setter:function(a,b){a.b=b.Qf()},getter:function(a){return Edb(a.b)}};c.Df(SA,'maxWidth',d);var d={setter:function(a,b){a.b=b},getter:function(a){return a.b}};c.Df(QA,'mode',d);var d={setter:function(a,b){a.f=b},getter:function(a){return a.f}};c.Df(NA,yxb,d);var d={setter:function(a,b){a.g=b},getter:function(a){return a.g}};c.Df(NA,'name',d);var d={setter:function(a,b){a.d=b},getter:function(a){return a.d}};c.Df(TA,zxb,d);var d={setter:function(a,b){a.a=b},getter:function(a){return a.a}};c.Df(PA,Bxb,d);var d={setter:function(a,b){a.c=b.Qf()},getter:function(a){return Edb(a.c)}};c.Df(SA,'openDelay',d);var d={setter:function(a,b){a.e=b},getter:function(a){return a.e}};c.Df(TA,Cxb,d);var d={setter:function(a,b){a.f=b},getter:function(a){return a.f}};c.Df(TA,'pageState',d);var d={setter:function(a,b){a.c=b},getter:function(a){return a.c}};c.Df(QA,Dxb,d);var d={setter:function(a,b){a.i=b},getter:function(a){return a.i}};c.Df(NA,'pm',d);var d={setter:function(a,b){a.g=b.Qf()},getter:function(a){return Edb(a.g)}};c.Df(TA,Exb,d);var d={setter:function(a,b){a.b=b},getter:function(a){return a.b}};c.Df(PA,'postfix',d);var d={setter:function(a,b){a.c=b},getter:function(a){return a.c}};c.Df(PA,'prefix',d);var d={setter:function(a,b){a.lb=b},getter:function(a){return a.lb}};c.Df(uA,Fxb,d);var d={setter:function(a,b){a.i=b},getter:function(a){return a.i}};c.Df(TA,Gxb,d);var d={setter:function(a,b){a.d=b},getter:function(a){return a.d}};c.Df(QA,'pushUrl',d);var d={setter:function(a,b){a.d=b.Qf()},getter:function(a){return Edb(a.d)}};c.Df(SA,Hxb,d);var d={setter:function(a,b){a.e=b.Qf()},getter:function(a){return Edb(a.e)}};c.Df(SA,Ixb,d);var d={setter:function(a,b){a.e=b.Qf()},getter:function(a){return Edb(a.e)}};c.Df(RA,Jxb,d);var d={setter:function(a,b){a.j=b},getter:function(a){return a.j}};c.Df(TA,Kxb,d);var d={setter:function(a,b){a.f=b.Qf()},getter:function(a){return Edb(a.f)}};c.Df(RA,Lxb,d);var d={noLayout:1,setter:function(a,b){a.pb=b},getter:function(a){return a.pb}};c.Df(CA,Mxb,d);var d={setter:function(a,b){a.qb=b},getter:function(a){return a.qb}};c.Df(CA,'resources',d);var d={setter:function(a,b){a.b=b.Qf()},getter:function(a){return Edb(a.b)}};c.Df(MA,Nxb,d);var d={setter:function(a,b){a.j=b},getter:function(a){return a.j}};c.Df(NA,Oxb,d);var d={setter:function(a,b){a.k=b},getter:function(a){return a.k}};c.Df(NA,Pxb,d);var d={setter:function(a,b){a.mb=b},getter:function(a){return a.mb}};c.Df(uA,Qxb,d);var d={noLayout:1,setter:function(a,b){a.k=b.Qf()},getter:function(a){return Edb(a.k)}};c.Df(TA,Rxb,d);var d={setter:function(a,b){a.n=b},getter:function(a){return a.n}};c.Df(TA,'theme',d);var d={setter:function(a,b){a.c=b.Qf()},getter:function(a){return Edb(a.c)}};c.Df(MA,Sxb,d);var d={setter:function(a,b){a.o=zcb(b)},getter:function(a){return Ccb(a.o)}};c.Df(TA,Txb,d);var d={setter:function(a,b){a.b=b},getter:function(a){return a.b}};c.Df(JA,'title',d);var d={setter:function(a,b){a.p=b},getter:function(a){return a.p}};c.Df(TA,Uxb,d)}
var bsb='object',csb='anonymous',dsb='fnStack',esb={3:1},fsb='Unknown',gsb='boolean',hsb='number',isb='string',jsb=2147483647,ksb=-17592186044416,lsb=17592186044416,msb=4194304,nsb=1048575,osb='__noinit__',psb={3:1,21:1,24:1,18:1},qsb={3:1,21:1,32:1,24:1,18:1},rsb='For input string: "',ssb='null',tsb=-2147483648,usb=16384,vsb='\\$',wsb={3:1,43:1},xsb=65536,ysb=65535,zsb={38:1,80:1},Asb={38:1,101:1},Bsb={100:1},Csb={3:1,38:1,80:1,178:1},Dsb={3:1,148:1},Esb={3:1,38:1,101:1},Fsb='fromIndex: 0, toIndex: ',Gsb=', length: ',Hsb='Index: ',Isb=', Size: ',Jsb='fromIndex: ',Ksb=', toIndex: ',Lsb='java.lang',Msb='com.google.gwt.core.client',Nsb='com.google.gwt.core.client.impl',Osb='java.util',Psb='java.util.stream',Qsb=3.141592653589793,Rsb='com.google.gwt.animation.client',Ssb='com.google.gwt.user.client',Tsb='com.google.gwt.aria.client',Usb='alertdialog',Vsb='application',Wsb='button',Xsb='columnheader',Ysb='complementary',Zsb='contentinfo',$sb='definition',_sb='link',atb='menuitemcheckbox',btb='menuitemradio',ctb='navigation',dtb='option',etb='presentation',ftb='progressbar',gtb='radiogroup',htb='spinbutton',itb='offsetWidth',jtb='none',ktb='height',ltb='width',mtb='Null widget handle. If you are creating a composite, ensure that initWidget() has been called.',ntb='Style names cannot be empty',otb='aria-hidden',ptb='com.google.gwt.user.client.ui',qtb={19:1,14:1,10:1,17:1,20:1,12:1,13:1},rtb='disabled',stb={19:1,14:1,10:1,60:1,73:1,17:1,20:1,12:1,13:1},ttb='com.google.gwt.canvas.client',utb='class',vtb={114:1},wtb='CSS1Compat',xtb='com.google.gwt.dom.client',ytb='DOMImplStandard',ztb=1000,Atb='DOMImplMozilla',Btb='position',Ctb='fixed',Dtb='absolute',Etb='DOMImplStandardBase',Ftb='DOMImplWebkit',Gtb='load',Htb='display',Itb='visibility',Jtb='zIndex',Ktb={53:1,15:1,3:1,6:1,4:1},Ltb='HIDDEN',Mtb={23:1,15:1,3:1,6:1,4:1},Ntb='block',Otb={15:1,62:1,3:1,6:1,4:1},Ptb={15:1,63:1,3:1,6:1,4:1},Qtb={15:1,64:1,3:1,6:1,4:1},Rtb={15:1,93:1,3:1,6:1,4:1},Stb={33:1,3:1,6:1,4:1},Ttb={15:1,94:1,3:1,6:1,4:1},Utb='visible',Vtb='hidden',Wtb={15:1,54:1,3:1,6:1,4:1},Xtb='com.google.web.bindery.event.shared',Ytb='com.google.gwt.event.shared',Ztb='com.google.gwt.event.dom.client',$tb='contextmenu',_tb='mouseup',aub='TouchEvent',bub='ontouchstart',cub='touchstart',dub='com.google.gwt.event.logical.shared',eub={87:1,3:1,21:1,24:1,18:1},fub='UmbrellaException',gub=4194303,hub=524288,iub=1000000000,jub='java.util.logging',kub='com.google.gwt.logging.client',lub='com.google.gwt.logging.impl',mub='java.io',nub='com.google.gwt.safehtml.shared',oub='com.google.gwt.text.shared.testing',pub=32768,qub='DOMMouseScroll',rub=131072,tub=1048576,uub=2097152,vub=8388608,wub=16777216,xub=33554432,yub=67108864,zub={113:1},Aub='com.google.gwt.user.client.impl',Bub='__gwtLastUnhandledEvent',Cub={19:1,14:1,10:1,17:1,31:1,20:1,12:1,13:1},Dub='left',Eub='top',Fub={19:1,14:1,10:1,17:1,177:1,20:1,12:1,13:1},Gub={25:1},Hub='bidiwrapped',Iub='selected',Jub='subMenuIcon-selected',Kub='offsetHeight',Lub='px',Mub='0.0px',Nub={27:1,180:1},Oub='overflow',Pub={19:1,14:1,10:1,17:1,31:1,20:1,133:1,12:1,13:1},Qub={660:1,27:1},Rub='value',Sub={65:1,3:1,6:1,4:1},Tub='com.google.gwt.user.client.ui.impl',Uub={144:1,146:1},Vub='auto',Wub='cell-comment-triangle',Xub='cell-invalidformula-triangle',Yub='pointerEvents',Zub='col',$ub=' row',_ub='com.vaadin.addon.spreadsheet.client',avb='animate-in',bvb='animate-out',cvb='marginLeft',dvb='marginTop',evb='com.vaadin.client.widgets',fvb='com.vaadin.client.ui',gvb='spreadsheet-overlays',hvb=57.29577951308232,ivb='rotate(',jvb='webkitTransform',kvb='comment-overlay-separator',lvb='comment-overlay-line',mvb={179:1,27:1},nvb={19:1,14:1,10:1,17:1,31:1,20:1,12:1,13:1,96:1},ovb='backgroundColor',pvb='border',qvb='2px solid ',rvb='borderRight',svb='borderBottom',tvb={10:1},uvb='textAlign',vvb='merged-cell',wvb='com.vaadin.shared',xvb='There is no information about the state for ',yvb='. Did you remember to compile the right widgetset?',zvb={27:1,99:1,120:1,3:1},Avb='active',Bvb='com.vaadin.shared.communication',Cvb={67:1,75:1,3:1},Dvb='popupbutton',Evb='touch',Fvb='fill',Gvb='bottom-left',Hvb='top-left',Ivb='v-contextmenu',Jvb='bottom-right',Kvb='sheet-selection',Lvb='square',Mvb='fill-touch-square',Nvb='sheet',Ovb='cell',Pvb=15759871,Qvb='sheet-image',Rvb='paddingLeft',Svb='paddingTop',Tvb='marginRight',Uvb='selected-tab',Vvb='.col',Wvb='.v-spreadsheet.',Xvb='cell-range',Yvb='selected-cell-highlight',Zvb='selected-row-header',$vb='selected-column-header',_vb=' .sheet .cell.cell-range {',awb=' .sheet .col',bwb='display:none;',cwb=' .sheet .row',dwb='.notusedselector',ewb=', .v-spreadsheet.',fwb={22:1,3:1},gwb='Hide column',hwb=' > div.ch.col',iwb='px;}',jwb=' > div.rh.row',kwb='resize-line',lwb='5555555555',mwb='text/css',nwb='ch col',owb='<div class="header-resize-dnd-first" ><\/div><div class="header-resize-dnd-second" ><\/div>',pwb='rh row',qwb='notfocused',rwb=' merged-cell',swb=' while creating the cell styles',twb='expandbutton',uwb='lineHeight',vwb='inactive',wwb='row-resizing',xwb='col-resizing',ywb='header-resize-dnd-first',zwb='header-resize-dnd-second',Awb={147:1,27:1},Bwb={25:1,709:1,124:1},Cwb='workbookChangeToggle',Dwb='hiddenColumnIndexes',Ewb='hiddenRowIndexes',Fwb='verticalSplitPosition',Gwb='horizontalSplitPosition',Hwb='com.vaadin.client',Iwb='lock-format-columns',Jwb='lock-format-rows',Kwb='com.vaadin.addon.spreadsheet.shared',Lwb='com.vaadin.shared.ui',Mwb='-webkit-animation-name',Nwb='animation-name',Owb='-moz-animation-name',Pwb='-o-animation-name',Qwb='fakeelement',Rwb='animationend',Swb='webkit',Twb='com.vaadin.client.communication',Uwb='head',Vwb='stylesheet',Wwb='com.vaadin.client.metadata',Xwb={659:1,27:1},Ywb='com.vaadin.ui.UI',Zwb='setErrorLevel',$wb='handleContextClickListenerChange',_wb='onThemeChange',axb='onThoroughSizeChckChange',bxb='alwaysUseXhrForServerRequests',cxb='caption',dxb='captionAsHtml',exb='closeTimeout',fxb='dateFormat',gxb='description',hxb='descriptionContentMode',ixb='dialogGracePeriod',jxb='dialogModal',kxb='dialogText',lxb='dialogTextGaveUp',mxb='enableMobileHTML5DnD',nxb='enabled',oxb='errorLevel',pxb='errorMessage',qxb='firstDayOfWeek',rxb='firstDelay',sxb='hasResizeListeners',txb='hourMinuteDelimiter',uxb='loadingIndicatorConfiguration',vxb='localeData',wxb='java.util.List',xxb='localeServiceState',yxb='monthNames',zxb='notificationConfigurations',Axb='java.util.Map',Bxb='notificationRole',Cxb='overlayContainerLabel',Dxb='parameters',Exb='pollInterval',Fxb='primaryStyleName',Gxb='pushConfiguration',Hxb='quickOpenDelay',Ixb='quickOpenTimeout',Jxb='reconnectAttempts',Kxb='reconnectDialogConfiguration',Lxb='reconnectInterval',Mxb='registeredEventListeners',Nxb='secondDelay',Oxb='shortDayNames',Pxb='shortMonthNames',Qxb='styles',Rxb='tabIndex',Sxb='thirdDelay',Txb='thoroughSizeCheck',Uxb='tooltipConfiguration',Vxb='twelveHourClock',Wxb={34:1},Xxb={147:1,243:1,244:1,27:1},Yxb='_vScrollTop',Zxb='v-scrollable',$xb='v-label-undef-w',_xb='/favicon.ico',ayb='com.vaadin.client.ui.ui',byb='com.vaadin.component.spreadsheet.client.js',cyb='rowBufferSize',dyb='columnBufferSize',eyb='colGroupingData',fyb='rowGroupingData',gyb='colGroupingMax',hyb='rowGroupingMax',iyb='colGroupingInversed',jyb='rowGroupingInversed',kyb='cellStyleToCSSStyle',lyb='rowIndexToStyleIndex',myb='columnIndexToStyleIndex',nyb='lockedColumnIndexes',oyb='lockedRowIndexes',pyb='shiftedCellBorderStyles',qyb='conditionalFormattingStyles',ryb='verticalScrollPositions',syb='horizontalScrollPositions',tyb='workbookProtected',uyb='hyperlinksTooltips',vyb='displayGridlines',wyb='displayRowColHeadings',xyb='infoLabelValue',yyb='invalidFormulaErrorMessage',zyb='lockFormatColumns',Ayb='lockFormatRows',Byb='namedRanges',Cyb='trident/',Dyb='WARNING',Eyb='com.vaadin.shared.ui.ui',Fyb=244140625,Gyb=1220703125,Hyb=0.3010299956639812,Iyb=4294967295,Jyb='BigInteger divide by zero',Kyb=4294967296,Lyb=1073741824,Myb={l:0,m:0,h:524288},Nyb='delete',Oyb={3:1,710:1},Pyb='locale',Qyb='default',Ryb='user.agent';var _,eE,_D,vD=-1;$wnd.goog=$wnd.goog||{};$wnd.goog.global=$wnd.goog.global||$wnd;fE();gE(1,null,{},K);_.Xc=function L(a){return J(this,a)};_.Yc=function N(){return this.ig};_.Zc=function P(){return Urb(this)};_.$c=function R(){var a;return Jcb(O(this))+'@'+(a=Q(this)>>>0,a.toString(16))};_.equals=function(a){return this.Xc(a)};_.hashCode=function(){return this.Zc()};_.toString=function(){return this.$c()};var Eg;gE(679,1,{});gE(304,679,{},Mg);_.Kd=function Ng(a){var b={},j;var c=[];a[dsb]=c;var d=arguments.callee.caller;while(d){var e=(Fg(),d.name||(d.name=Ig(d.toString())));c.push(e);var f=':'+e;var g=b[f];if(g){var h,i;for(h=0,i=g.length;h<i;h++){if(g[h]===d){return}}}(g||(b[f]=[])).push(d);d=d.caller}};_.Ld=function Og(a){var b,c,d,e;d=(Fg(),a&&a[dsb]?a[dsb]:[]);c=d.length;e=Xp(pB,esb,74,c,0,1);for(b=0;b<c;b++){e[b]=new Ndb(d[b],null,-1)}return e};gE(680,679,{});_.Kd=function Qg(a){};_.Md=function Rg(a,b,c,d){return new Ndb(b,a+'@'+d,c<0?-1:c)};_.Ld=function Sg(a){var b,c,d,e,f,g;e=Kg(a);f=Xp(pB,esb,74,0,0,1);b=0;d=e.length;if(d==0){return f}g=Pg(this,e[0]);Tdb(g.d,csb)||(f[b++]=g);for(c=1;c<d;c++){f[b++]=Pg(this,e[c])}return f};gE(305,680,{},Tg);_.Md=function Ug(a,b,c,d){return new Ndb(b,a,-1)};var Jq,Kq,Lq;gE(18,1,{3:1,18:1});_.Bd=function zf(a){return new Error(a)};_.Cd=function Bf(){return this.backingJsObject};_.Dd=function Cf(){var a;return a=Zqb($qb(mkb((this.j==null&&(this.j=Xp(vB,esb,18,0,0,1)),this.j)),new Ceb),yqb(new Jqb,new Hqb,new Lqb,$p(Vp(aD,1),esb,84,0,[(Cqb(),Aqb)]))),a.Rf(Xp(nB,esb,1,a.size(),5,1))};_.Ed=function Df(){return this.e};_.Fd=function Ef(){return this.f};_.Gd=function Ff(){xf(this,Af(this.Bd(yf(this,this.f))));Gg(this)};_.$c=function Hf(){return yf(this,this.Fd())};_.backingJsObject=osb;_.g=false;_.k=true;gE(21,18,{3:1,21:1,18:1});gE(24,21,psb,Kf,Lf);gE(32,24,qsb,ucb,vcb);gE(183,32,qsb,wcb);Jq={3:1,302:1,6:1};gE(181,1,{},Lcb);_.Kf=function Mcb(a){var b;b=new Lcb;b.f=4;a>1?(b.c=Tcb(this,a-1)):(b.c=this);return b};_.Lf=function Scb(){Icb(this);return this.b};_.Mf=function Ucb(){return Jcb(this)};_.Nf=function Wcb(){return Kcb(this)};_.Of=function Ycb(){return (this.f&4)!=0};_.Pf=function Zcb(){return (this.f&1)!=0};_.$c=function adb(){return ((this.f&2)!=0?'interface ':(this.f&1)!=0?'':'class ')+(Icb(this),this.k)};_.f=0;var Hcb=1;gE(88,1,{3:1,88:1});var ddb;Kq={3:1,6:1,303:1,88:1};gE(4,1,{3:1,6:1,4:1});_.ge=function Mj(a){return this.c-a.c};_.compareTo=function Lj(a){return this.c-a.c};_.equals=function Nj(a){return this===a};_.Xc=function(a){return this.equals(a)};_.hashCode=function Oj(){return Urb(this)};_.Zc=function(){return this.hashCode()};_.name=function Pj(){return this.b!=null?this.b:''+this.c};_.ordinal=function Qj(){return this.c};_.toString=function Rj(){return Jj(this)};_.$c=function(){return this.toString()};_.c=0;gE(68,24,psb,qdb);gE(37,24,psb,rdb,sdb,tdb);gE(89,88,{3:1,6:1,89:1,88:1},vdb);_.ge=function xdb(a){return wdb(this.a,a.a)};_.Xc=function ydb(a){return udb(this,a)};_.Zc=function zdb(){return this.a};_.Qf=function Adb(){return this.a};_.$c=function Ddb(){return ''+this.a};_.a=0;gE(102,24,psb,Mf);gE(809,1,{});gE(49,102,{3:1,21:1,49:1,24:1,18:1},Idb,Jdb,Kdb);_.Bd=function Ldb(a){return new TypeError(a)};Lq={3:1,182:1,6:1,2:1};gE(212,32,qsb,xeb);gE(246,1,{},Ceb);_.Gf=function Deb(a){return Beb(a)};gE(28,24,psb,Eeb,Feb);gE(681,1,{38:1});_.add=function Rgb(a){throw CD(new Feb('Add not supported on this collection'))};_.addAll=function Sgb(a){return Mgb(this,a)};_.clear=function Tgb(){var a;for(a=this.Ie();a.Se();){a.Te();a.Ue()}};_.contains=function Ugb(a){return Ngb(this,a,false)};_.containsAll=function Vgb(a){return Ogb(this,a)};_.isEmpty=function Wgb(){return this.size()==0};_.remove=function Xgb(a){return Ngb(this,a,true)};_.removeAll=function Ygb(a){var b,c,d;Mrb(a);b=false;for(c=this.Ie();c.Se();){d=c.Te();if(a.contains(d)){c.Ue();b=true}}return b};_.retainAll=function Zgb(a){var b,c,d;Mrb(a);b=false;for(c=this.Ie();c.Se();){d=c.Te();if(!a.contains(d)){c.Ue();b=true}}return b};_.toArray=function $gb(){return this.Rf(Xp(nB,esb,1,this.size(),5,1))};_.Rf=function _gb(a){return Pgb(this,a)};_.$c=function ahb(){return Qgb(this)};gE(682,681,zsb);_.addAtIndex=function fib(a,b){throw CD(new Feb('Add not supported on this list'))};_.add=function gib(a){this.addAtIndex(this.size(),a);return true};_.addAllAtIndex=function hib(a,b){var c,d,e;Mrb(b);c=false;for(e=b.Ie();e.Se();){d=e.Te();this.addAtIndex(a++,d);c=true}return c};_.clear=function iib(){this.Vf(0,this.size())};_.Xc=function jib(a){var b,c,d,e,f;if(a===this){return true}if(!Oq(a,80)){return false}f=a;if(this.size()!=f.size()){return false}e=f.Ie();for(c=this.Ie();c.Se();){b=c.Te();d=e.Te();if(!(Uq(b)===Uq(d)||b!=null&&M(b,d))){return false}}return true};_.Zc=function kib(){return Akb(this)};_.indexOf=function lib(a){return eib(this,a)};_.Ie=function mib(){return new vib(this)};_.lastIndexOf=function nib(a){var b;for(b=this.size()-1;b>-1;--b){if(sob(a,this.getAtIndex(b))){return b}}return -1};_.Tf=function oib(){return this.Uf(0)};_.Uf=function pib(a){return new zib(this,a)};_.removeAtIndex=function qib(a){throw CD(new Feb('Remove not supported on this list'))};_.Vf=function rib(a,b){var c,d;d=this.Uf(a);for(c=a;c<b;++c){d.Te();d.Ue()}};_.setAtIndex=function sib(a,b){throw CD(new Feb('Set not supported on this list'))};_.subList=function tib(a,b){return new Fib(this,a,b)};gE(198,1,{},vib);_.Se=function wib(){return this.b<this.d.size()};_.Te=function xib(){Krb(this.b<this.d.size());return this.d.getAtIndex(this.c=this.b++)};_.Ue=function yib(){uib(this)};_.b=0;_.c=-1;gE(306,198,{},zib);_.Ue=function Dib(){uib(this)};_.Wf=function Aib(a){this.a.addAtIndex(this.b,a);++this.b;this.c=-1};_.Xf=function Bib(){return this.b>0};_.Yf=function Cib(){Krb(this.b>0);return this.a.getAtIndex(this.c=--this.b)};_.Zf=function Eib(a){Qrb(this.c!=-1);this.a.setAtIndex(this.c,a)};gE(307,682,zsb,Fib);_.addAtIndex=function Gib(a,b){Orb(a,this.b);this.c.addAtIndex(this.a+a,b);++this.b};_.getAtIndex=function Hib(a){Lrb(a,this.b);return this.c.getAtIndex(this.a+a)};_.removeAtIndex=function Iib(a){var b;Lrb(a,this.b);b=this.c.removeAtIndex(this.a+a);--this.b;return b};_.setAtIndex=function Jib(a,b){Lrb(a,this.b);return this.c.setAtIndex(this.a+a,b)};_.size=function Kib(){return this.b};_.a=0;_.b=0;gE(683,1,{148:1});_.getOrDefault=function lhb(a,b){var c;return c=this.get(a),c==null&&!this.containsKey(a)?b:c};_.putIfAbsent=function rhb(a,b){var c;return c=this.get(a),c!=null?c:this.put(a,b)};_.replace=function thb(a,b){return this.containsKey(a)?this.put(a,b):null};_.clear=function fhb(){this.Sf().clear()};_.containsKey=function ghb(a){return !!chb(this,a,false)};_.containsValue=function hhb(a){var b,c,d;for(c=this.Sf().Ie();c.Se();){b=c.Te();d=b._f();if(Uq(a)===Uq(d)||a!=null&&M(a,d)){return true}}return false};_.Xc=function ihb(a){var b,c,d;if(a===this){return true}if(!Oq(a,148)){return false}d=a;if(this.size()!=d.size()){return false}for(c=d.Sf().Ie();c.Se();){b=c.Te();if(!bhb(this,b)){return false}}return true};_.get=function jhb(a){return khb(chb(this,a,false))};_.Zc=function mhb(){return zkb(this.Sf())};_.isEmpty=function nhb(){return this.size()==0};_.keySet=function ohb(){return new Lib(this)};_.put=function phb(a,b){throw CD(new Feb('Put not supported on this map'))};_.putAll=function qhb(a){dhb(this,a)};_.remove=function shb(a){return khb(chb(this,a,true))};_.size=function uhb(){return this.Sf().size()};_.$c=function vhb(){var a,b,c;c=new epb('{','}');for(b=this.Sf().Ie();b.Se();){a=b.Te();dpb(c,ehb(this,a.$f())+'='+ehb(this,a._f()))}return !c.a?c.c:c.e.length==0?c.a.a:c.a.a+(''+c.e)};_.values=function whb(){return new Wib(this)};gE(684,681,Asb);_.Xc=function Qhb(a){var b;if(a===this){return true}if(!Oq(a,101)){return false}b=a;if(b.size()!=this.size()){return false}return Ogb(this,b)};_.Zc=function Rhb(){return zkb(this)};_.removeAll=function Shb(a){var b,c,d,e;Mrb(a);e=this.size();if(e<a.size()){for(b=this.Ie();b.Se();){c=b.Te();a.contains(c)&&b.Ue()}}else{for(d=a.Ie();d.Se();){c=d.Te();this.remove(c)}}return e!=this.size()};gE(57,684,Asb,Lib);_.clear=function Mib(){this.a.clear()};_.contains=function Nib(a){return this.a.containsKey(a)};_.Ie=function Oib(){var a;return a=this.a.Sf().Ie(),new Rib(a)};_.remove=function Pib(a){if(this.a.containsKey(a)){this.a.remove(a);return true}return false};_.size=function Qib(){return this.a.size()};gE(61,1,{},Rib);_.Se=function Sib(){return this.a.Se()};_.Te=function Tib(){var a;return a=this.a.Te(),a.$f()};_.Ue=function Uib(){this.a.Ue()};gE(39,681,{38:1},Wib);_.clear=function Xib(){this.a.clear()};_.contains=function Yib(a){return Vib(this,a)};_.Ie=function Zib(){var a;return a=this.a.Sf().Ie(),new _ib(a)};_.size=function $ib(){return this.a.size()};gE(50,1,{},_ib);_.Se=function ajb(){return this.a.Se()};_.Te=function bjb(){var a;return a=this.a.Te(),a._f()};_.Ue=function cjb(){this.a.Ue()};gE(314,1,Bsb);_.Xc=function djb(a){var b;if(!Oq(a,100)){return false}b=a;return sob(this.a,b.$f())&&sob(this.b,b._f())};_.$f=function ejb(){return this.a};_._f=function fjb(){return this.b};_.Zc=function gjb(){return tob(this.a)^tob(this.b)};_.ag=function hjb(a){var b;b=this.b;this.b=a;return b};_.$c=function ijb(){return this.a+'='+this.b};gE(206,314,Bsb,jjb);gE(9,682,{3:1,9:1,38:1,80:1,178:1},Ejb,Fjb,Gjb);_.addAtIndex=function Hjb(a,b){ujb(this,a,b)};_.add=function Ijb(a){return vjb(this,a)};_.addAllAtIndex=function Jjb(a,b){var c,d;Orb(a,this.a.length);c=b.toArray();d=c.length;if(d==0){return false}Frb(this.a,a,c);return true};_.addAll=function Kjb(a){return wjb(this,a)};_.clear=function Ljb(){this.a=Xp(nB,esb,1,0,5,1)};_.contains=function Mjb(a){return zjb(this,a,0)!=-1};_.getAtIndex=function Njb(a){return yjb(this,a)};_.indexOf=function Ojb(a){return zjb(this,a,0)};_.isEmpty=function Pjb(){return this.a.length==0};_.Ie=function Qjb(){return new akb(this)};_.lastIndexOf=function Rjb(a){return Ajb(this,a,this.a.length-1)};_.removeAtIndex=function Sjb(a){return Bjb(this,a)};_.remove=function Tjb(a){return Cjb(this,a)};_.Vf=function Ujb(a,b){var c;Prb(a,b,this.a.length);c=b-a;Grb(this.a,a,c)};_.setAtIndex=function Vjb(a,b){var c;c=(Lrb(a,this.a.length),this.a[a]);this.a[a]=b;return c};_.size=function Wjb(){return this.a.length};_.toArray=function Xjb(){return Crb(this.a,this.a.length)};_.Rf=function Yjb(a){return Djb(this,a)};gE(7,1,{},akb);_.Se=function bkb(){return Zjb(this)};_.Te=function ckb(){return $jb(this)};_.Ue=function dkb(){_jb(this)};_.a=0;_.b=-1;var vkb,wkb,xkb;gE(380,682,Csb,Ckb);_.contains=function Dkb(a){return false};_.getAtIndex=function Ekb(a){return Lrb(a,0),null};_.Ie=function Fkb(){return ykb(),Jkb(),Ikb};_.Tf=function Gkb(){return ykb(),Jkb(),Ikb};_.size=function Hkb(){return 0};gE(381,1,{},Lkb);_.Wf=function Mkb(a){throw CD(new Eeb)};_.Se=function Nkb(){return false};_.Xf=function Okb(){return false};_.Te=function Pkb(){return Kkb()};_.Yf=function Qkb(){throw CD(new rob)};_.Ue=function Rkb(){throw CD(new rdb)};_.Zf=function Skb(a){throw CD(new rdb)};var Ikb;gE(383,683,Dsb,Tkb);_.containsKey=function Ukb(a){return false};_.containsValue=function Vkb(a){return false};_.Sf=function Wkb(){return ykb(),xkb};_.get=function Xkb(a){return null};_.keySet=function Ykb(){return ykb(),xkb};_.size=function Zkb(){return 0};_.values=function $kb(){return ykb(),vkb};gE(382,684,Esb,_kb);_.contains=function alb(a){return false};_.Ie=function blb(){return ykb(),Jkb(),Ikb};_.size=function clb(){return 0};gE(66,24,{3:1,21:1,24:1,18:1,66:1},rob);gE(151,1,{});_.dg=function Iob(a){uob(this,a)};_.bg=function Gob(){return this.c};_.cg=function Hob(){return this.d};_.c=0;_.d=0;gE(251,151,{});gE(254,1,{});_.dg=function Uob(a){uob(this,a)};_.bg=function Sob(){return this.b};_.cg=function Tob(){return this.d-this.c};_.b=0;_.c=0;_.d=0;gE(255,254,{},Wob);_.dg=function Xob(a){Qob(this,a)};_.eg=function Yob(a){return Rob(this,a)};gE(250,1,{},gpb);_.Gf=function hpb(a){return a};gE(84,4,{3:1,6:1,4:1,84:1},Dqb);var zqb,Aqb,Bqb;gE(650,1,{},Fqb);gE(248,1,{},Hqb);_.Jf=function Iqb(a,b){Gqb(a,b)};gE(247,1,{},Jqb);_.Hf=function Kqb(){return new Ejb};gE(249,1,{},Lqb);gE(168,1,{});_.c=false;gE(95,168,{},crb);gE(524,251,{},qrb);_.eg=function rrb(a){return this.b.eg(new srb(this,a))};gE(528,1,{},srb);_.If=function trb(a){prb(this.a,this.b,a)};gE(527,1,{},vrb);_.If=function wrb(a){urb(this,a)};gE(531,1,{},yrb);gE(532,1,{},Arb);_.If=function Brb(a){zrb(this,a)};gE(811,1,{});gE(807,1,{});var Trb=0;var Vrb,Wrb=0,Xrb;var nB=Ocb(Lsb,'Object',1);var ys=Ocb(Msb,'JavaScriptObject$',0);var Is=Ocb(Nsb,'StackTraceCreator/Collector',679);var Fs=Ocb(Nsb,'StackTraceCreator/CollectorLegacy',304);var Hs=Ocb(Nsb,'StackTraceCreator/CollectorModern',680);var Gs=Ocb(Nsb,'StackTraceCreator/CollectorModernNoSourceMap',305);var vB=Ocb(Lsb,'Throwable',18);var dB=Ocb(Lsb,'Exception',21);var oB=Ocb(Lsb,'RuntimeException',24);var hB=Ocb(Lsb,'IndexOutOfBoundsException',32);var $A=Ocb(Lsb,'ArrayIndexOutOfBoundsException',183);var _A=Ocb(Lsb,'Boolean',302);var aB=Ocb(Lsb,'Class',181);var mB=Ocb(Lsb,'Number',88);var bB=Ocb(Lsb,'Double',303);var cB=Ocb(Lsb,'Enum',4);var fB=Ocb(Lsb,'IllegalArgumentException',68);var gB=Ocb(Lsb,'IllegalStateException',37);var iB=Ocb(Lsb,'Integer',89);var jB=Ocb(Lsb,'JsException',102);var kB=Ocb(Lsb,'NullPointerException',49);var tB=Ocb(Lsb,'String',2);var sB=Ocb(Lsb,'StringIndexOutOfBoundsException',212);var uB=Ocb(Lsb,'Throwable/lambda$0$Type',246);var wB=Ocb(Lsb,'UnsupportedOperationException',28);var zB=Ocb(Osb,'AbstractCollection',681);var tC=Qcb(Osb,'List');var GB=Ocb(Osb,'AbstractList',682);var DB=Ocb(Osb,'AbstractList/IteratorImpl',198);var EB=Ocb(Osb,'AbstractList/ListIteratorImpl',306);var FB=Ocb(Osb,'AbstractList/SubList',307);var xC=Qcb(Osb,'Map');var OB=Ocb(Osb,'AbstractMap',683);var zC=Qcb(Osb,'Set');var QB=Ocb(Osb,'AbstractSet',684);var IB=Ocb(Osb,'AbstractMap/1',57);var HB=Ocb(Osb,'AbstractMap/1/1',61);var KB=Ocb(Osb,'AbstractMap/2',39);var JB=Ocb(Osb,'AbstractMap/2/1',50);var LB=Ocb(Osb,'AbstractMap/AbstractEntry',314);var MB=Ocb(Osb,'AbstractMap/SimpleEntry',206);var SB=Ocb(Osb,'ArrayList',9);var RB=Ocb(Osb,'ArrayList/1',7);var VB=Ocb(Osb,'Collections/EmptyList',380);var UB=Ocb(Osb,'Collections/EmptyListIterator',381);var WB=Ocb(Osb,'Collections/EmptyMap',383);var XB=Ocb(Osb,'Collections/EmptySet',382);var yC=Ocb(Osb,'NoSuchElementException',66);var JC=Ocb(Osb,'Spliterators/BaseSpliterator',151);var GC=Ocb(Osb,'Spliterators/AbstractSpliterator',251);var IC=Ocb(Osb,'Spliterators/BaseArraySpliterator',254);var HC=Ocb(Osb,'Spliterators/ArraySpliterator',255);var MC=Ocb('java.util.function','Function/lambda$0$Type',250);var aD=Pcb(Psb,'Collector/Characteristics',84,Eqb);var bD=Ocb(Psb,'CollectorImpl',650);var cD=Ocb(Psb,'Collectors/20methodref$add$Type',248);var dD=Ocb(Psb,'Collectors/21methodref$ctor$Type',247);var eD=Ocb(Psb,'Collectors/lambda$42$Type',249);var tD=Ocb(Psb,'TerminatableStream',168);var sD=Ocb(Psb,'StreamImpl',95);var oD=Ocb(Psb,'StreamImpl/MapToObjSpliterator',524);var nD=Ocb(Psb,'StreamImpl/MapToObjSpliterator/lambda$0$Type',528);var pD=Ocb(Psb,'StreamImpl/ValueConsumer',527);var qD=Ocb(Psb,'StreamImpl/lambda$4$Type',531);var rD=Ocb(Psb,'StreamImpl/lambda$5$Type',532);gE(130,1,{});_._c=function X(a){return (1+$wnd.Math.cos(Qsb+a*Qsb))/2};_.ad=function Y(){this.u&&this.bd()};_.bd=function Z(){this.dd(this._c(1))};_.cd=function $(){this.dd(this._c(0))};_.k=-1;_.o=false;_.p=false;_.r=-1;_.t=-1;_.u=false;var gr=Ocb(Rsb,'Animation',130);gE(323,1,{},bb);_.ed=function cb(a){ab(this,a)};var $q=Ocb(Rsb,'Animation/1',323);gE(702,1,{});var db;var fr=Ocb(Rsb,'AnimationScheduler',702);gE(174,1,{174:1});var _q=Ocb(Rsb,'AnimationScheduler/AnimationHandle',174);gE(636,702,{},eb);_.fd=function gb(a,b){var c;c=hb(a,b);return new ib(c)};var br=Ocb(Rsb,'AnimationSchedulerImplStandard',636);gE(637,174,{174:1},ib);_.gd=function jb(){fb(this.a)};var ar=Ocb(Rsb,'AnimationSchedulerImplStandard/1',637);gE(638,702,{},mb);_.fd=function nb(a,b){var c;c=new Ab(this,a);vjb(this.a,c);this.a.a.length==1&&pb(this.b,16);return c};var er=Ocb(Rsb,'AnimationSchedulerImplTimer',638);gE(44,1,{});_.hd=function vb(a){if(a!=this.b){return}this.c||(this.d=null);this.jd()};_.b=0;_.c=false;_.d=null;var Tu=Ocb(Ssb,'Timer',44);gE(639,44,{},yb);_.jd=function zb(){lb(this.a)};var cr=Ocb(Rsb,'AnimationSchedulerImplTimer/1',639);gE(175,174,{174:1,175:1},Ab);_.gd=function Bb(){kb(this.b,this)};var dr=Ocb(Rsb,'AnimationSchedulerImplTimer/AnimationHandleImpl',175);gE(8,1,{});var _r=Ocb(Tsb,'RoleImpl',8);gE(570,8,{},Fb);var hr=Ocb(Tsb,'AlertRoleImpl',570);gE(569,8,{},Gb);var ir=Ocb(Tsb,'AlertdialogRoleImpl',569);gE(571,8,{},Hb);var jr=Ocb(Tsb,'ApplicationRoleImpl',571);gE(242,1,{});var mr=Ocb(Tsb,'Attribute',242);gE(55,242,{},Lb);_.kd=function Mb(a){return a.a};var kr=Ocb(Tsb,'AriaValueAttribute',55);gE(572,8,{},Nb);var lr=Ocb(Tsb,'ArticleRoleImpl',572);gE(573,8,{},Ob);var nr=Ocb(Tsb,'BannerRoleImpl',573);gE(574,8,{},Pb);var or=Ocb(Tsb,'ButtonRoleImpl',574);gE(575,8,{},Qb);var pr=Ocb(Tsb,'CheckboxRoleImpl',575);gE(576,8,{},Rb);var qr=Ocb(Tsb,'ColumnheaderRoleImpl',576);gE(577,8,{},Sb);var rr=Ocb(Tsb,'ComboboxRoleImpl',577);gE(578,8,{},Tb);var sr=Ocb(Tsb,'ComplementaryRoleImpl',578);gE(579,8,{},Ub);var tr=Ocb(Tsb,'ContentinfoRoleImpl',579);gE(580,8,{},Vb);var ur=Ocb(Tsb,'DefinitionRoleImpl',580);gE(581,8,{},Wb);var vr=Ocb(Tsb,'DialogRoleImpl',581);gE(582,8,{},Xb);var wr=Ocb(Tsb,'DirectoryRoleImpl',582);gE(583,8,{},Yb);var xr=Ocb(Tsb,'DocumentRoleImpl',583);gE(584,8,{},Zb);var yr=Ocb(Tsb,'FormRoleImpl',584);gE(586,8,{},$b);var zr=Ocb(Tsb,'GridRoleImpl',586);gE(585,8,{},_b);var Ar=Ocb(Tsb,'GridcellRoleImpl',585);gE(587,8,{},ac);var Br=Ocb(Tsb,'GroupRoleImpl',587);gE(588,8,{},bc);var Cr=Ocb(Tsb,'HeadingRoleImpl',588);gE(173,1,{730:1,173:1},dc);var Dr=Ocb(Tsb,'Id',173);gE(589,8,{},ec);var Er=Ocb(Tsb,'ImgRoleImpl',589);gE(590,8,{},fc);var Fr=Ocb(Tsb,'LinkRoleImpl',590);gE(593,8,{},gc);var Gr=Ocb(Tsb,'ListRoleImpl',593);gE(591,8,{},hc);var Hr=Ocb(Tsb,'ListboxRoleImpl',591);gE(592,8,{},ic);var Ir=Ocb(Tsb,'ListitemRoleImpl',592);gE(594,8,{},jc);var Jr=Ocb(Tsb,'LogRoleImpl',594);gE(595,8,{},kc);var Kr=Ocb(Tsb,'MainRoleImpl',595);gE(596,8,{},lc);var Lr=Ocb(Tsb,'MarqueeRoleImpl',596);gE(597,8,{},mc);var Mr=Ocb(Tsb,'MathRoleImpl',597);gE(602,8,{},nc);var Nr=Ocb(Tsb,'MenuRoleImpl',602);gE(598,8,{},pc);var Or=Ocb(Tsb,'MenubarRoleImpl',598);gE(601,8,{},qc);var Pr=Ocb(Tsb,'MenuitemRoleImpl',601);gE(599,8,{},rc);var Qr=Ocb(Tsb,'MenuitemcheckboxRoleImpl',599);gE(600,8,{},sc);var Rr=Ocb(Tsb,'MenuitemradioRoleImpl',600);gE(603,8,{},tc);var Sr=Ocb(Tsb,'NavigationRoleImpl',603);gE(604,8,{},uc);var Tr=Ocb(Tsb,'NoteRoleImpl',604);gE(605,8,{},vc);var Ur=Ocb(Tsb,'OptionRoleImpl',605);gE(606,8,{},wc);var Vr=Ocb(Tsb,'PresentationRoleImpl',606);gE(42,242,{},xc);_.kd=function yc(a){return a==null?ssb:kE(a)};var Wr=Ocb(Tsb,'PrimitiveValueAttribute',42);gE(607,8,{},zc);var Xr=Ocb(Tsb,'ProgressbarRoleImpl',607);var Ac,Bc;gE(609,8,{},Dc);var Yr=Ocb(Tsb,'RadioRoleImpl',609);gE(608,8,{},Ec);var Zr=Ocb(Tsb,'RadiogroupRoleImpl',608);gE(610,8,{},Fc);var $r=Ocb(Tsb,'RegionRoleImpl',610);var Gc,Hc,Ic,Jc,Kc,Lc,Mc,Nc,Oc,Pc,Qc,Rc,Sc,Tc,Uc,Vc,Wc,Xc,Yc,Zc,$c,_c,ad,bd,cd,dd,ed,fd,gd,hd,jd,kd,ld,md,nd,od,pd,qd,rd,sd,td,ud,vd,wd,xd,yd,zd,Ad,Bd,Cd,Dd,Ed,Fd,Gd,Hd,Id,Jd,Kd,Ld,Md,Nd,Od;gE(613,8,{},Qd);var as=Ocb(Tsb,'RowRoleImpl',613);gE(611,8,{},Rd);var bs=Ocb(Tsb,'RowgroupRoleImpl',611);gE(612,8,{},Sd);var cs=Ocb(Tsb,'RowheaderRoleImpl',612);gE(614,8,{},Td);var ds=Ocb(Tsb,'ScrollbarRoleImpl',614);gE(615,8,{},Ud);var es=Ocb(Tsb,'SearchRoleImpl',615);gE(616,8,{},Vd);var fs=Ocb(Tsb,'SeparatorRoleImpl',616);gE(617,8,{},Wd);var gs=Ocb(Tsb,'SliderRoleImpl',617);gE(618,8,{},Xd);var hs=Ocb(Tsb,'SpinbuttonRoleImpl',618);gE(619,8,{},Yd);var is=Ocb(Tsb,'StatusRoleImpl',619);gE(622,8,{},Zd);var js=Ocb(Tsb,'TabRoleImpl',622);gE(620,8,{},$d);var ks=Ocb(Tsb,'TablistRoleImpl',620);gE(621,8,{},_d);var ls=Ocb(Tsb,'TabpanelRoleImpl',621);gE(623,8,{},ae);var ms=Ocb(Tsb,'TextboxRoleImpl',623);gE(624,8,{},be);var ns=Ocb(Tsb,'TimerRoleImpl',624);gE(625,8,{},ce);var os=Ocb(Tsb,'ToolbarRoleImpl',625);gE(626,8,{},de);var ps=Ocb(Tsb,'TooltipRoleImpl',626);gE(629,8,{},ee);var qs=Ocb(Tsb,'TreeRoleImpl',629);gE(627,8,{},fe);var rs=Ocb(Tsb,'TreegridRoleImpl',627);gE(628,8,{},ge);var ss=Ocb(Tsb,'TreeitemRoleImpl',628);gE(12,1,{17:1,12:1});_.ld=function we(){return je(this)};_.md=function ye(){throw CD(new Eeb)};_.nd=function ze(a){pe(this,a)};_.od=function Be(a,b){re(this,a,b)};_.pd=function Ee(a){ue(this,a)};_.$c=function Fe(){if(!this.Wc){return '(null handle)'}return qh((jF(),this.Wc))};var Rv=Ocb(ptb,'UIObject',12);gE(13,12,qtb);_.qd=function Re(){};_.rd=function Se(){};_.sd=function Te(a){Je(this,a)};_.td=function Ue(){return this.Sc};_.ud=function Ve(){Ke(this)};_.vd=function We(a){Le(this,a)};_.wd=function Xe(){Me(this)};_.xd=function Ye(){};_.yd=function Ze(){};_.Sc=false;_.Tc=0;var _v=Ocb(ptb,'Widget',13);var lv=Qcb(ptb,'Focusable');gE(207,13,stb);_.ud=function ef(){var a;Ke(this);a=wL((jF(),this.Wc));-1==a&&(this.Wc.tabIndex=0,undefined)};_.zd=function ff(a){af(this,a)};_.Ad=function gf(a){cf(this,a)};var $e;var kv=Ocb(ptb,'FocusWidget',207);gE(647,207,stb,jf);var hf;var vs=Ocb(ttb,'Canvas',647);gE(706,1,{});var us=Ocb(ttb,'Canvas/CanvasElementSupportDetector',706);gE(648,706,{},lf);var ts=Ocb(ttb,'Canvas/CanvasElementSupportDetectedMaybe',648);gE(209,1,{},of);_.a=0;var ws=Ocb(Msb,'Duration',209);var pf=null;gE(346,102,psb);var Bs=Ocb(Nsb,'JavaScriptExceptionBase',346);gE(81,346,{81:1,3:1,21:1,24:1,18:1},Qf);_.Fd=function Rf(){Pf(this);return this.c};_.Hd=function Sf(){return Uq(this.b)===Uq(Nf)?null:this.b};var Nf;var xs=Ocb(Msb,'JavaScriptException',81);var zs=Qcb(Msb,'RunAsyncCallback');gE(661,1,{});var As=Ocb(Msb,'Scheduler',661);var Xf=0,Yf=false,Zf,$f=0,_f=-1;gE(347,661,{});_.e=false;_.j=false;var mg;var Es=Ocb(Nsb,'SchedulerImpl',347);gE(348,1,{},Ag);_.Id=function Bg(){this.a.e=true;qg(this.a);this.a.e=false;return this.a.j=rg(this.a)};var Cs=Ocb(Nsb,'SchedulerImpl/Flusher',348);gE(349,1,{},Cg);_.Id=function Dg(){this.a.e&&zg(this.a.f,1);return this.a.j};var Ds=Ocb(Nsb,'SchedulerImpl/Rescuer',349);gE(114,1,vtb);_.Pd=function Oh(a){return a.button|0};_.Rd=function Ph(a){return a.currentTarget};_.Vd=function Qh(a){return $h(Lh(a))};_.Wd=function Rh(a){return $h(Mh(a))};_.Xd=function Sh(a){return 0};_.Yd=function Th(a){return 0};_.Zd=function Uh(a){return Tdb(a.compatMode,wtb)?a.documentElement:a.body};_.$d=function Vh(a){var b='',c=a.firstChild;while(c){c.nodeType==1?(b+=this.$d(c)):c.nodeValue&&(b+=c.nodeValue);c=c.nextSibling}return b};_._d=function Wh(a){return $h(a.scrollLeft||0)};_.ae=function Xh(a){return a.tabIndex};_.ce=function Yh(a,b){while(a.firstChild){a.removeChild(a.firstChild)}b!=null&&a.appendChild(a.ownerDocument.createTextNode(b))};_.de=function Zh(a,b){a.scrollLeft=b};_.ee=function _h(a){return a.outerHTML};var Eh;var Ns=Ocb(xtb,'DOMImpl',114);gE(692,114,vtb);_.Nd=function ai(a,b,c,d){var e=a.createEvent('HTMLEvents');e.initEvent(b,c,d);return e};_.Od=function bi(a,b){a.dispatchEvent(b)};_.Pd=function ci(a){var b=a.button;if(b==1){return 4}else if(b==2){return 2}return 1};_.Qd=function di(a){return a.charCode||0};_.Sd=function ei(a){return a.relatedTarget};_.Td=function fi(a){return a.target};_.Ud=function gi(a){a.preventDefault()};_.Zd=function hi(a){if(a.scrollingElement){return a.scrollingElement}return this.fe(a)};_.$d=function ii(a){return a.textContent};_.fe=function ji(a){return Tdb(a.compatMode,wtb)?a.documentElement:a.body};_.be=function ki(a,b){return a.contains(b)};_.ce=function li(a,b){a.textContent=b||''};var Ls=Ocb(xtb,ytb,692);gE(471,692,vtb,qi);_.Sd=function ri(b){var c=b.relatedTarget;if(!c){return null}try{var d=c.nodeName;return c}catch(a){return null}};_.Vd=function si(a){return ni(nj(a.ownerDocument),a)};_.Wd=function ti(a){return oi(nj(a.ownerDocument),a)};_.Xd=function ui(a){var b=$wnd.getComputedStyle(a.documentElement,null);if(b==null){return 0}return parseInt(b.marginLeft,10)+parseInt(b.borderLeftWidth,10)};_.Yd=function vi(a){var b=$wnd.getComputedStyle(a.documentElement,null);if(b==null){return 0}return parseInt(b.marginTop,10)+parseInt(b.borderTopWidth,10)};_._d=function xi(a){var b;b=(mi==-2&&(mi=wi()),mi);if(!(b!=-1&&b>=1009000)&&pi(a)){return $h(a.scrollLeft||0)-(((a.scrollWidth||0)|0)-(a.clientWidth|0))}return $h(a.scrollLeft||0)};_.be=function yi(a,b){return a===b||!!(a.compareDocumentPosition(b)&16)};_.de=function zi(a,b){var c;c=(mi==-2&&(mi=wi()),mi);!(c!=-1&&c>=1009000)&&pi(a)&&(b+=((a.scrollWidth||0)|0)-(a.clientWidth|0));a.scrollLeft=b};_.ee=function Ai(a){var b=a.ownerDocument;var c=a.cloneNode(true);var d=b.createElement('DIV');d.appendChild(c);outer=d.innerHTML;c.innerHTML='';return outer};var mi=-2;var Js=Ocb(xtb,Atb,471);gE(693,692,vtb);_.Rd=function Ci(a){return a.currentTarget||$wnd};_.Vd=function Di(a){var b,c;c=a.getBoundingClientRect&&a.getBoundingClientRect();b=c?c.left+Jh(this,a.ownerDocument):Ei(a);return Fh(),b|0};_.Wd=function Fi(a){var b,c,d;b=a.getBoundingClientRect&&a.getBoundingClientRect();c=b?b.top+Kh(this,a.ownerDocument):Gi(a);return Fh(),c|0};_._d=function Hi(a){if(!Udb('body',(Fh(),a).tagName)&&Bi(a)){return $h(a.scrollLeft||0)-(((a.scrollWidth||0)|0)-(a.clientWidth|0))}return $h(a.scrollLeft||0)};_.ae=function Ii(a){return typeof a.tabIndex!='undefined'?a.tabIndex:-1};_.de=function Ji(a,b){!Udb('body',(Fh(),a).tagName)&&Bi(a)&&(b+=((a.scrollWidth||0)|0)-(a.clientWidth|0));a.scrollLeft=b};var Ks=Ocb(xtb,Etb,693);gE(470,693,vtb,Ki);_.Td=function Li(a){var b=a.target;b&&b.nodeType==3&&(b=b.parentNode);return b};_.fe=function Mi(a){return a.body};var Ms=Ocb(xtb,Ftb,470);gE(53,4,Ktb);var Sj,Tj,Uj,Vj,Wj;var Ts=Pcb(xtb,'Style/BorderStyle',53,Zj);gE(423,53,Ktb,$j);var Os=Pcb(xtb,'Style/BorderStyle/1',423,null);gE(424,53,Ktb,_j);var Ps=Pcb(xtb,'Style/BorderStyle/2',424,null);gE(425,53,Ktb,ak);var Qs=Pcb(xtb,'Style/BorderStyle/3',425,null);gE(426,53,Ktb,bk);var Rs=Pcb(xtb,'Style/BorderStyle/4',426,null);gE(427,53,Ktb,ck);var Ss=Pcb(xtb,'Style/BorderStyle/5',427,null);gE(23,4,Mtb);var dk,ek,fk,gk,hk,ik,jk,kk,lk,mk,nk,ok,pk,qk,rk,sk,tk,uk,vk;var lt=Pcb(xtb,'Style/Display',23,yk);gE(428,23,Mtb,zk);_.he=function Ak(){return jtb};var ct=Pcb(xtb,'Style/Display/1',428,null);gE(437,23,Mtb,Bk);_.he=function Ck(){return 'table-column-group'};var Us=Pcb(xtb,'Style/Display/10',437,null);gE(438,23,Mtb,Dk);_.he=function Ek(){return 'table-header-group'};var Vs=Pcb(xtb,'Style/Display/11',438,null);gE(439,23,Mtb,Fk);_.he=function Gk(){return 'table-footer-group'};var Ws=Pcb(xtb,'Style/Display/12',439,null);gE(440,23,Mtb,Hk);_.he=function Ik(){return 'table-row-group'};var Xs=Pcb(xtb,'Style/Display/13',440,null);gE(441,23,Mtb,Jk);_.he=function Kk(){return 'table-cell'};var Ys=Pcb(xtb,'Style/Display/14',441,null);gE(442,23,Mtb,Lk);_.he=function Mk(){return 'table-column'};var Zs=Pcb(xtb,'Style/Display/15',442,null);gE(443,23,Mtb,Nk);_.he=function Ok(){return 'table-row'};var $s=Pcb(xtb,'Style/Display/16',443,null);gE(444,23,Mtb,Pk);_.he=function Qk(){return 'initial'};var _s=Pcb(xtb,'Style/Display/17',444,null);gE(445,23,Mtb,Rk);_.he=function Sk(){return 'flex'};var at=Pcb(xtb,'Style/Display/18',445,null);gE(446,23,Mtb,Tk);_.he=function Uk(){return 'inline-flex'};var bt=Pcb(xtb,'Style/Display/19',446,null);gE(429,23,Mtb,Vk);_.he=function Wk(){return Ntb};var dt=Pcb(xtb,'Style/Display/2',429,null);gE(430,23,Mtb,Xk);_.he=function Yk(){return 'inline'};var et=Pcb(xtb,'Style/Display/3',430,null);gE(431,23,Mtb,Zk);_.he=function $k(){return 'inline-block'};var ft=Pcb(xtb,'Style/Display/4',431,null);gE(432,23,Mtb,_k);_.he=function al(){return 'inline-table'};var gt=Pcb(xtb,'Style/Display/5',432,null);gE(433,23,Mtb,bl);_.he=function cl(){return 'list-item'};var ht=Pcb(xtb,'Style/Display/6',433,null);gE(434,23,Mtb,dl);_.he=function el(){return 'run-in'};var it=Pcb(xtb,'Style/Display/7',434,null);gE(435,23,Mtb,fl);_.he=function gl(){return 'table'};var jt=Pcb(xtb,'Style/Display/8',435,null);gE(436,23,Mtb,hl);_.he=function il(){return 'table-caption'};var kt=Pcb(xtb,'Style/Display/9',436,null);gE(62,4,Otb);var jl,kl,ll,ml;var qt=Pcb(xtb,'Style/Overflow',62,pl);gE(447,62,Otb,ql);var mt=Pcb(xtb,'Style/Overflow/1',447,null);gE(448,62,Otb,rl);var nt=Pcb(xtb,'Style/Overflow/2',448,null);gE(449,62,Otb,sl);var ot=Pcb(xtb,'Style/Overflow/3',449,null);gE(450,62,Otb,tl);var pt=Pcb(xtb,'Style/Overflow/4',450,null);gE(63,4,Ptb);var ul,vl,wl,xl;var vt=Pcb(xtb,'Style/Position',63,Al);gE(451,63,Ptb,Bl);var rt=Pcb(xtb,'Style/Position/1',451,null);gE(452,63,Ptb,Cl);var st=Pcb(xtb,'Style/Position/2',452,null);gE(453,63,Ptb,Dl);var tt=Pcb(xtb,'Style/Position/3',453,null);gE(454,63,Ptb,El);var ut=Pcb(xtb,'Style/Position/4',454,null);gE(64,4,Qtb);var Fl,Gl,Hl,Il;var At=Pcb(xtb,'Style/TextAlign',64,Ll);gE(455,64,Qtb,Ml);var wt=Pcb(xtb,'Style/TextAlign/1',455,null);gE(456,64,Qtb,Nl);var xt=Pcb(xtb,'Style/TextAlign/2',456,null);gE(457,64,Qtb,Ol);var yt=Pcb(xtb,'Style/TextAlign/3',457,null);gE(458,64,Qtb,Pl);var zt=Pcb(xtb,'Style/TextAlign/4',458,null);gE(93,4,Rtb);var Ql,Rl;var Dt=Pcb(xtb,'Style/TextOverflow',93,Ul);gE(459,93,Rtb,Vl);var Bt=Pcb(xtb,'Style/TextOverflow/1',459,null);gE(460,93,Rtb,Wl);var Ct=Pcb(xtb,'Style/TextOverflow/2',460,null);gE(33,4,Stb);var Xl,Yl,Zl,$l,_l,am,bm,cm,dm;var Nt=Pcb(xtb,'Style/Unit',33,gm);gE(414,33,Stb,hm);var Et=Pcb(xtb,'Style/Unit/1',414,null);gE(415,33,Stb,im);var Ft=Pcb(xtb,'Style/Unit/2',415,null);gE(416,33,Stb,jm);var Gt=Pcb(xtb,'Style/Unit/3',416,null);gE(417,33,Stb,km);var Ht=Pcb(xtb,'Style/Unit/4',417,null);gE(418,33,Stb,lm);var It=Pcb(xtb,'Style/Unit/5',418,null);gE(419,33,Stb,mm);var Jt=Pcb(xtb,'Style/Unit/6',419,null);gE(420,33,Stb,nm);var Kt=Pcb(xtb,'Style/Unit/7',420,null);gE(421,33,Stb,om);var Lt=Pcb(xtb,'Style/Unit/8',421,null);gE(422,33,Stb,pm);var Mt=Pcb(xtb,'Style/Unit/9',422,null);gE(94,4,Ttb);var qm,rm;var Qt=Pcb(xtb,'Style/Visibility',94,um);gE(461,94,Ttb,vm);_.he=function wm(){return Utb};var Ot=Pcb(xtb,'Style/Visibility/1',461,null);gE(462,94,Ttb,xm);_.he=function ym(){return Vtb};var Pt=Pcb(xtb,'Style/Visibility/2',462,null);gE(54,4,Wtb);var zm,Am,Bm,Cm,Dm;var Wt=Pcb(xtb,'Style/WhiteSpace',54,Gm);gE(463,54,Wtb,Hm);var Rt=Pcb(xtb,'Style/WhiteSpace/1',463,null);gE(464,54,Wtb,Im);var St=Pcb(xtb,'Style/WhiteSpace/2',464,null);gE(465,54,Wtb,Jm);var Tt=Pcb(xtb,'Style/WhiteSpace/3',465,null);gE(466,54,Wtb,Km);var Ut=Pcb(xtb,'Style/WhiteSpace/4',466,null);gE(467,54,Wtb,Lm);var Vt=Pcb(xtb,'Style/WhiteSpace/5',467,null);gE(675,1,{});_.$c=function Qm(){return 'An event type'};var iw=Ocb(Xtb,'Event',675);gE(676,675,{});_.ke=function Sm(){return this.je()};_.le=function Tm(){this.e=false;this.f=null};_.e=false;var wu=Ocb(Ytb,'GwtEvent',676);gE(687,676,{});_.je=function Ym(){return this.me()};_.ke=function Zm(){return this.me()};var Um;var _t=Ocb(Ztb,'DomEvent',687);gE(538,687,{},an);_.ie=function bn(a){a.ne(this)};_.je=function dn(){return $m};_.ke=function en(){return $m};_.me=function cn(){return $m};var $m;var Xt=Ocb(Ztb,'BlurEvent',538);gE(688,687,{});var bu=Ocb(Ztb,'HumanInputEvent',688);gE(689,688,{});var ju=Ocb(Ztb,'MouseEvent',689);gE(413,689,{},hn);_.ie=function jn(a){a.oe(this)};_.je=function ln(){return fn};_.ke=function mn(){return fn};_.me=function kn(){return fn};var fn;var Yt=Ocb(Ztb,'ClickEvent',413);gE(477,687,{},pn);_.ie=function qn(a){a.pe(this)};_.je=function sn(){return nn};_.ke=function tn(){return nn};_.me=function rn(){return nn};var nn;var Zt=Ocb(Ztb,'ContextMenuEvent',477);gE(290,1,{});_.Zc=function vn(){return this.c};_.$c=function wn(){return 'Event type'};_.c=0;var un=0;var gw=Ocb(Xtb,'Event/Type',290);gE(56,290,{},xn);var vu=Ocb(Ytb,'GwtEvent/Type',56);gE(41,56,{41:1},yn);var $t=Ocb(Ztb,'DomEvent/Type',41);gE(537,687,{},Bn);_.ie=function Cn(a){KS(a,this)};_.je=function En(){return zn};_.ke=function Fn(){return zn};_.me=function Dn(){return zn};var zn;var au=Ocb(Ztb,'FocusEvent',537);gE(698,687,{});var eu=Ocb(Ztb,'KeyEvent',698);gE(699,698,{});var cu=Ocb(Ztb,'KeyCodeEvent',699);gE(536,699,{},In);_.ie=function Jn(a){LS(a,this)};_.je=function Ln(){return Gn};_.ke=function Mn(){return Gn};_.me=function Kn(){return Gn};var Gn;var du=Ocb(Ztb,'KeyDownEvent',536);gE(640,698,{},Pn);_.ie=function Qn(a){MS(a,this)};_.je=function Sn(){return Nn};_.ke=function Tn(){return Nn};_.me=function Rn(){return Nn};var Nn;var fu=Ocb(Ztb,'KeyPressEvent',640);gE(644,699,{},Wn);_.ie=function Xn(a){a.qe(this)};_.je=function Zn(){return Un};_.ke=function $n(){return Un};_.me=function Yn(){return Un};var Un;var gu=Ocb(Ztb,'KeyUpEvent',644);gE(643,687,{},bo);_.ie=function co(a){_4(a.a.b)};_.je=function fo(){return _n};_.ke=function go(){return _n};_.me=function eo(){return _n};var _n;var hu=Ocb(Ztb,'LoadEvent',643);gE(535,689,{},jo);_.ie=function ko(a){a.re(this)};_.je=function mo(){return ho};_.ke=function no(){return ho};_.me=function lo(){return ho};var ho;var iu=Ocb(Ztb,'MouseDownEvent',535);gE(641,689,{},qo);_.ie=function ro(a){a.se(this)};_.je=function to(){return oo};_.ke=function uo(){return oo};_.me=function so(){return oo};var oo;var ku=Ocb(Ztb,'MouseUpEvent',641);gE(549,1,{},xo);var lu=Ocb(Ztb,'PrivateMap',549);gE(703,688,{});var yo;var ou=Ocb(Ztb,aub,703);gE(657,703,{},Bo);_.ie=function Co(a){TP(a.a,this)};_.je=function Eo(){return zo};_.ke=function Fo(){return zo};_.me=function Do(){return zo};var zo;var mu=Ocb(Ztb,'TouchEndEvent',657);gE(548,1,{},Go);_.a=false;var nu=Ocb(Ztb,'TouchEvent/TouchSupportDetector',548);gE(656,703,{},Jo);_.ie=function Ko(a){Z3(a,this)&&OP(a.a)};_.je=function Mo(){return Ho};_.ke=function No(){return Ho};_.me=function Lo(){return Ho};var Ho;var pu=Ocb(Ztb,'TouchMoveEvent',656);gE(642,703,{},Qo);_.ie=function Ro(a){a.te(this)};_.je=function To(){return Oo};_.ke=function Uo(){return Oo};_.me=function So(){return Oo};var Oo;var qu=Ocb(Ztb,'TouchStartEvent',642);gE(301,676,{},Wo);_.ie=function Xo(a){$_(a,this)};_.ke=function $o(){return Vo};_.je=function Zo(){return Vo};_.a=false;var Vo;var ru=Ocb(dub,'AttachEvent',301);gE(539,676,{},ap);_.ie=function bp(a){a.ue(this)};_.ke=function ep(){return _o};_.je=function dp(){return _o};var _o;var su=Ocb(dub,'CloseEvent',539);gE(552,676,{},gp);_.ie=function hp(a){a.ve(this)};_.ke=function kp(){return fp};_.je=function jp(){return fp};var fp;var tu=Ocb(dub,'ResizeEvent',552);gE(568,676,{},mp);_.ie=function np(a){a.a.v&&a.a.Oe()};_.ke=function qp(){return lp};_.je=function pp(){return lp};var lp;var uu=Ocb(dub,'ValueChangeEvent',568);gE(76,1,{14:1},up,vp);_.sd=function wp(a){sp(this,a)};var yu=Ocb(Ytb,'HandlerManager',76);gE(685,1,{});var hw=Ocb(Xtb,'EventBus',685);gE(352,685,{});_.b=0;_.c=false;var mw=Ocb(Xtb,'SimpleEventBus',352);gE(353,352,{},Hp);var xu=Ocb(Ytb,'HandlerManager/Bus',353);gE(545,1,{},Ip);var zu=Ocb(Ytb,'LegacyHandlerWrapper',545);gE(87,24,eub,Jp);var nw=Ocb(Xtb,fub,87);gE(194,87,eub,Lp);var Au=Ocb(Ytb,fub,194);gE(108,4,{108:1,3:1,6:1,4:1},Tp);var Pp,Qp,Rp;var Bu=Pcb('com.google.gwt.i18n.client','HasDirection/Direction',108,Up);var aq;var Eq,Fq,Gq,Hq;gE(109,1,{109:1});var OC=Ocb(jub,'Handler',109);gE(262,109,{109:1},qE);_.we=function rE(a){var b,c;if(!window.console||(nE(this),tsb>a.a.Qf())){return}b=CE(this.a,a);c=a.a.Qf();c>=(rpb(),ztb)?(window.console.error(b),undefined):c>=900?(window.console.warn(b),undefined):c>=800?(window.console.info(b),undefined):(window.console.log(b),undefined)};var Cu=Ocb(kub,'ConsoleLogHandler',262);gE(263,109,{109:1},sE);_.we=function tE(a){return};var Du=Ocb(kub,'DevelopmentModeLogHandler',263);var uE;var Gu=Ocb(kub,'LogConfiguration',null);gE(261,1,{},xE);var Eu=Ocb(kub,'LogConfiguration/1',261);gE(260,1,{},BE);var Fu=Ocb(kub,'LogConfiguration/LogConfigurationImplRegular',260);gE(700,1,{});var NC=Ocb(jub,'Formatter',700);gE(701,700,{});var Iu=Ocb(lub,'FormatterImpl',701);gE(240,701,{},DE);_.a=false;var Hu=Ocb(kub,'TextLogFormatter',240);gE(663,1,{});var WA=Ocb(mub,'OutputStream',663);gE(188,663,{},EE);var VA=Ocb(mub,'FilterOutputStream',188);gE(152,188,{},FE);_.xe=function GE(a){};var XA=Ocb(mub,'PrintStream',152);gE(632,152,{},HE);_.xe=function IE(a){seb(this.a,a);seb(this.a,'\n')};var Ju=Ocb(lub,'StackTracePrintStream',632);gE(558,1,{},ME);var Ku=Ocb(nub,'SafeHtmlBuilder',558);gE(145,1,{726:1,145:1,3:1},NE);_.Xc=function OE(a){if(!Oq(a,145)){return false}return Tdb(this.a,a.a)};_.Zc=function PE(){return $rb(this.a)};_.$c=function QE(){return 'safe: "'+this.a+'"'};var Lu=Ocb(nub,'SafeHtmlString',145);var RE,SE,TE,UE,VE,WE;gE(118,1,{728:1,118:1},ZE);_.Xc=function $E(a){if(!Oq(a,118)){return false}return Tdb(this.a,a.a)};_.Zc=function _E(){return $rb(this.a)};_.$c=function aF(){return 'safe: "'+this.a+'"'};var Mu=Ocb(nub,'SafeUriString',118);gE(705,1,{});var Nu=Ocb('com.google.gwt.text.shared','AbstractRenderer',705);gE(646,1,{},dF);var cF;var Ou=Ocb(oub,'PassthroughParser',646);gE(645,705,{},fF);var eF;var Pu=Ocb(oub,'PassthroughRenderer',645);var gF=null,hF,iF;var yF;gE(324,676,{},KF);_.ie=function LF(a){a.ye(this);HF.c=false};_.ke=function OF(){return GF};_.je=function NF(){return GF};_.le=function PF(){IF(this)};_.a=false;_.b=false;_.c=false;var GF,HF;var Qu=Ocb(Ssb,'Event/NativePreviewEvent',324);var QF,RF;gE(543,1,{14:1},XF);_.sd=function YF(a){sp(this.a,a)};var Ru=Ocb(Ssb,'History/HistoryEventSource',543);gE(544,1,{},ZF);var Su=Ocb(Ssb,'History/HistoryImpl',544);var _F=false,aG,bG,cG=0,dG=0,eG=false;gE(351,676,{},pG);_.ie=function qG(a){null.lg()};_.ke=function sG(){return nG};_.je=function rG(){return nG};var nG;var Uu=Ocb(Ssb,'Window/ClosingEvent',351);var tG='',uG;gE(158,76,{14:1},yG);var Vu=Ocb(Ssb,'Window/WindowHandlers',158);gE(113,1,zub);var zG=false;var $u=Ocb(Aub,'DOMImpl',113);gE(690,113,zub);_.ze=function RG(a,b){var c=0,d=a.firstChild;while(d){if(d.nodeType==1){if(b==c)return d;++c}d=d.nextSibling}return null};_.Ae=function SG(a){var b=0,c=a.firstChild;while(c){c.nodeType==1&&++b;c=c.nextSibling}return b};_.Be=function UG(){KG()};_.Ce=function VG(a,b,c){var d=0,e=a.firstChild,f=null;while(e){if(e.nodeType==1){if(d==c){f=e;break}++d}e=e.nextSibling}a.insertBefore(b,f)};_.De=function WG(a){BG(this);FG==a&&(FG=null)};_.Ee=function XG(a){BG(this);FG=a};_.Fe=function YG(a,b){var c,d;BG(this);c=EG;d=c[b]||c['_default_'];a.addEventListener(b,d,false)};_.Ge=function ZG(a,b){BG(this);LG(a,b)};var EG,FG,GG,HG,IG;var Yu=Ocb(Aub,ytb,690);gE(468,690,zub,aH);_.Be=function bH(){KG();_G()};_.Ge=function cH(a,b){BG(this);LG(a,b);b&rub&&a.addEventListener(qub,(JG(),HG),false)};var Wu=Ocb(Aub,Atb,468);gE(691,690,zub);var Xu=Ocb(Aub,Etb,691);gE(469,691,zub,dH);var Zu=Ocb(Aub,Ftb,469);gE(169,1,{169:1},hH);_.He=function iH(){return $wnd.location.hash};var av=Ocb(Aub,'WindowImpl',169);gE(546,169,{169:1},jH);_.He=function kH(){var a=$wnd.location.href;var b=a.indexOf('#');return b>0?a.substring(b):''};var _u=Ocb(Aub,'WindowImplMozilla',546);gE(674,13,Cub);_.qd=function mH(){BH(this,(zH(),xH))};_.rd=function nH(){BH(this,(zH(),yH))};var Bv=Ocb(ptb,'Panel',674);gE(153,674,Cub);_.Ie=function rH(){return new nL(this.o)};_.Je=function sH(a){return pH(this,a)};var gv=Ocb(ptb,'ComplexPanel',153);gE(344,153,Cub);_.Je=function wH(a){return uH(this,a)};var bv=Ocb(ptb,'AbsolutePanel',344);gE(274,194,eub,AH);var xH,yH;var ev=Ocb(ptb,'AttachDetachException',274);gE(275,1,{},CH);_.Ke=function DH(a){a.ud()};var cv=Ocb(ptb,'AttachDetachException/1',275);gE(276,1,{},EH);_.Ke=function FH(a){a.wd()};var dv=Ocb(ptb,'AttachDetachException/2',276);gE(472,153,Cub);var fv=Ocb(ptb,'CellPanel',472);gE(678,13,Fub);_.td=function MH(){return LH(this)};_.ud=function NH(){JH(this);if(this.Tc!=-1){Qe(this.bb,this.Tc);this.Tc=-1}this.bb.ud();jF();this.Wc.__listener=this;Yo(this,true)};_.vd=function OH(a){Le(this,a);this.bb.vd(a)};_.wd=function PH(){try{Yo(this,false)}finally{this.bb.wd()}};_.md=function QH(){ne(this,this.bb.md());return jF(),this.Wc};var hv=Ocb(ptb,'Composite',678);gE(631,1,{},TH);_.c=false;var iv=Ocb(ptb,'DirectionalTextHelper',631);gE(86,153,Cub,VH);var jv=Ocb(ptb,'FlowPanel',86);gE(129,674,Cub);_.Le=function aI(){return jF(),this.Wc};_.Ie=function bI(){return new CK(this)};_.Je=function cI(a){return XH(this,a)};_.Me=function dI(a){YH(this,a)};var Nv=Ocb(ptb,'SimplePanel',129);var eI;var lI,mI,nI;gE(235,13,qtb);var uv=Ocb(ptb,'LabelBase',235);gE(547,235,qtb);var vv=Ocb(ptb,'Label',547);gE(143,547,qtb,jI,kI);var mv=Ocb(ptb,'HTML',143);var qI;gE(694,1,{});var nv=Ocb(ptb,'HasHorizontalAlignment/AutoHorizontalAlignmentConstant',694);gE(140,694,{},pI);var ov=Ocb(ptb,'HasHorizontalAlignment/HorizontalAlignmentConstant',140);gE(166,1,{},sI);var pv=Ocb(ptb,'HasVerticalAlignment/VerticalAlignmentConstant',166);gE(238,13,qtb,wI);_.vd=function xI(a){jF();AG((Fh(),a).type)==pub&&!!this.a&&(this.Wc[Bub]='',undefined);Le(this,a)};_.xd=function yI(){zI(this.a,this)};var tv=Ocb(ptb,'Image',238);gE(566,1,{});_.a=null;var rv=Ocb(ptb,'Image/State',566);gE(567,1,Gub,AI);_.Jd=function BI(){var a;if(this.b.a!=this.a||this!=this.a.a){return}this.a.a=null;if(!this.b.Sc){CI(this.b)[Bub]=Gtb;return}a=Ti($doc);eh(CI(this.b),a)};var qv=Ocb(ptb,'Image/State/1',567);gE(239,566,{},DI);var sv=Ocb(ptb,'Image/UnclippedState',239);gE(518,207,stb,NI);var wv=Ocb(ptb,'ListBox',518);gE(137,13,qtb,eJ);_.Ne=function gJ(){(fI(),eI).Xe((jF(),this.Wc))};_.vd=function hJ(a){var b,c;b=TI(this,(jF(),(Fh(),Eh).Td(a)));switch(AG(a.type)){case 1:{(fI(),eI).Xe(this.Wc);!!b&&SI(this,b,true);break}case 16:{!!b&&WI(this,b,true);break}case 32:{!!b&&WI(this,null,false);break}case 2048:{_I(this);break}case 128:{c=a.keyCode|0;c=c;switch(c){case 37:$I(this);a.stopPropagation();Eh.Ud(a);break;case 39:ZI(this);a.stopPropagation();Eh.Ud(a);break;case 38:YI(this);a.stopPropagation();Eh.Ud(a);break;case 40:XI(this);a.stopPropagation();Eh.Ud(a);break;case 27:aJ(this,null);a.stopPropagation();Eh.Ud(a);break;case 9:aJ(this,null);break;case 13:if(!_I(this)){SI(this,this.g,true);a.stopPropagation();Eh.Ud(a)}}break}}Le(this,a)};_.wd=function iJ(){Me(this)};_.c=false;_.e=true;_.i=false;var zv=Ocb(ptb,'MenuBar',137);gE(398,1,Gub,jJ);_.Jd=function kJ(){this.a.Jd()};var xv=Ocb(ptb,'MenuBar/1',398);gE(399,1,{711:1,27:1},lJ);_.ne=function mJ(a){aJ(this.a,null)};var yv=Ocb(ptb,'MenuBar/2',399);gE(97,12,{17:1,97:1,12:1},pJ,qJ);_.zd=function rJ(a){a?re(this,xe((jF(),this.Wc))+'-'+rtb,false):re(this,xe((jF(),this.Wc))+'-'+rtb,true);this.b=a};_.b=true;var Av=Ocb(ptb,'MenuItem',97);gE(107,129,Cub);_.Le=function KJ(){return sJ.Ze(nF((jF(),this.Wc)))};_.ld=function LJ(){return sJ.$e((jF(),jF(),lh(this.Wc)))};_.Oe=function MJ(){this.Pe(false)};_.Pe=function NJ(a){xJ(this)};_.yd=function OJ(){this.M&&bK(this.L,false,true)};_.nd=function PJ(a){BJ(this,a)};_.Qe=function QJ(a,b){CJ(this,a,b)};_.Me=function RJ(a){EJ(this,a)};_.pd=function SJ(a){FJ(this,a)};_.u=false;_.v=false;_.F=false;_.G=false;_.H=0;_.I=false;_.K=false;_.M=false;_.N=0;var sJ;var Hv=Ocb(ptb,'PopupPanel',107);gE(319,1,{707:1,27:1},UJ);_.ve=function VJ(a){TJ()};var Cv=Ocb(ptb,'PopupPanel/1',319);gE(320,1,Nub,WJ);_.ye=function XJ(a){AJ(this.a,a)};var Dv=Ocb(ptb,'PopupPanel/3',320);gE(321,1,{720:1,27:1},YJ);var Ev=Ocb(ptb,'PopupPanel/4',321);gE(317,130,{},cK);_.bd=function dK(){$J(this)};_.cd=function eK(){this.d=vJ(this.a);this.e=wJ(this.a);he(this.a).style[Oub]=Vtb;aK(this,(1+$wnd.Math.cos(Qsb))/2)};_.dd=function fK(a){aK(this,a)};_.a=null;_.b=false;_.c=false;_.d=0;_.e=-1;_.i=false;var Gv=Ocb(ptb,'PopupPanel/ResizeAnimation',317);gE(318,44,{},gK);_.jd=function hK(){this.a.g=null;T(this.a,200,Wf())};var Fv=Ocb(ptb,'PopupPanel/ResizeAnimation/1',318);gE(133,344,Pub,rK);var nK,oK,pK;var Lv=Ocb(ptb,'RootPanel',133);gE(345,1,{},wK);_.Ke=function xK(a){a.td()&&a.wd()};var Iv=Ocb(ptb,'RootPanel/1',345);gE(211,1,Qub,yK);_.ue=function zK(a){tK()};var Jv=Ocb(ptb,'RootPanel/2',211);gE(210,133,Pub,AK);var Kv=Ocb(ptb,'RootPanel/DefaultRootPanel',210);gE(322,1,{},CK);_.Te=function EK(){return BK(this)};_.Se=function DK(){return this.a};_.Ue=function FK(){!!this.b&&XH(this.c,this.b)};_.a=false;_.b=null;var Mv=Ocb(ptb,'SimplePanel/1',322);gE(519,207,stb);_.vd=function MK(a){var b;b=(jF(),AG((Fh(),a).type));(b&896)!=0?Le(this,a):Le(this,a)};_.xd=function NK(){};var Xv=Ocb(ptb,'ValueBoxBase',519);gE(232,519,stb);var Pv=Ocb(ptb,'TextBoxBase',232);gE(561,232,stb);var Ov=Ocb(ptb,'TextArea',561);gE(142,232,stb,QK);var Qv=Ocb(ptb,'TextBox',142);gE(65,4,Sub);var SK,TK,UK,VK;var Wv=Pcb(ptb,'ValueBoxBase/TextAlignment',65,YK);gE(520,65,Sub,ZK);var Sv=Pcb(ptb,'ValueBoxBase/TextAlignment/1',520,null);gE(521,65,Sub,$K);var Tv=Pcb(ptb,'ValueBoxBase/TextAlignment/2',521,null);gE(522,65,Sub,_K);var Uv=Pcb(ptb,'ValueBoxBase/TextAlignment/3',522,null);gE(523,65,Sub,aL);var Vv=Pcb(ptb,'ValueBoxBase/TextAlignment/4',523,null);gE(473,472,Cub,dL);_.Je=function eL(a){return cL(this,a)};var Yv=Ocb(ptb,'VerticalPanel',473);gE(507,1,{},kL);_.Ie=function lL(){return new nL(this)};_.c=0;var $v=Ocb(ptb,'WidgetCollection',507);gE(231,1,{},nL);_.Te=function pL(){return mL(this)};_.Se=function oL(){return this.b<this.c.c};_.Ue=function qL(){if(!this.a){throw CD(new rdb)}this.c.b.Je(this.a);--this.b;this.a=null};_.b=0;var Zv=Ocb(ptb,'WidgetCollection/WidgetIterator',231);gE(144,1,{144:1},xL);_.Ve=function yL(a){a.blur()};_.We=function zL(){var a;a=Oi($doc);a.tabIndex=0;return a};_.Xe=function AL(a){a.focus()};var tL,uL;var cw=Ocb(Tub,'FocusImpl',144);gE(146,144,Uub,DL);_.We=function EL(){return FL(BL?BL:(BL=CL()))};var BL;var bw=Ocb(Tub,'FocusImplStandard',146);gE(633,146,Uub,GL);_.Ve=function HL(a){$wnd.setTimeout(function(){a.blur()},0)};_.Xe=function IL(a){$wnd.setTimeout(function(){a.focus()},0)};var aw=Ocb(Tub,'FocusImplSafari',633);gE(171,1,{171:1},JL);_.Ye=function KL(){return Oi($doc)};_.Ze=function LL(a){return a};_.$e=function ML(a){return Ih((Fh(),a))};_._e=function NL(a,b){a.style['clip']=b};var fw=Ocb(Tub,'PopupImpl',171);gE(550,171,{171:1},QL);_.Ye=function RL(){var a;a=(jF(),Oi($doc));if(OL){a.innerHTML='<div><\/div>';p1((ng(),mg),new WL(a))}return a};_.Ze=function SL(a){return OL?Hh((Fh(),a)):a};_.$e=function TL(a){return OL?a:Ih((Fh(),a))};_._e=function VL(a,b){a.style['clip']=b;a.style[Htb]=(wk(),jtb);a.style[Htb]=''};var OL=false;var ew=Ocb(Tub,'PopupImplMozilla',550);gE(551,1,Gub,WL);_.Jd=function XL(){this.a.style[Oub]=(nl(),Vub)};var dw=Ocb(Tub,'PopupImplMozilla/1',551);gE(354,1,{},aM);var jw=Ocb(Xtb,'SimpleEventBus/1',354);gE(355,1,{708:1},bM);_.Jd=function cM(){zp(this.a,this.d,this.c,this.b)};var kw=Ocb(Xtb,'SimpleEventBus/2',355);gE(356,1,{708:1},dM);_.Jd=function eM(){Bp(this.a,this.d,this.c,this.b)};var lw=Ocb(Xtb,'SimpleEventBus/3',356);gE(52,1,{52:1},uM,vM);_.af=function wM(){return JZ(this.n.a,this.c)};_.bf=function xM(){uh(this.d,Zub+this.c+$ub+this.k+' cell '+this.b)};_.b='cs0';_.c=0;_.f=false;_.g=true;_.i=false;_.k=0;var sw=Ocb(_ub,'Cell',52);gE(111,1,{111:1},yM);_.Xc=function zM(a){var b;if(this===a){return true}if(a==null){return false}if(!Oq(a,111)){return false}b=a;return this.d==b.d&&this.a==b.a&&sob(Edb(this.c),Edb(b.c))&&sob(Edb(this.b),Edb(b.b))};_.Zc=function AM(){return fkb($p(Vp(nB,1),esb,1,5,[this.d,this.a,Edb(this.c),Edb(this.b)]))};_.b=0;_.c=0;var ow=Ocb(_ub,'Cell/CellValueStyleKey',111);gE(159,107,Cub);_.Oe=function TM(){HM(this,false)};_.Pe=function UM(a){HM(this,a)};_.ud=function VM(){var a,b;b=CM;if(b){a=b.df();Vg(a,(jF(),this.Wc))}Ke(this)};_.wd=function WM(){Me(this);!!this.t&&ah(this.t)};_.nd=function XM(a){LM(this,a)};_.Qe=function YM(a,b){NM(this,a,b)};_.cf=function ZM(a){(jF(),this.Wc).style[Itb]=a?Utb:Vtb;!!this.t&&(this.t.style[Itb]=a?Utb:Vtb,undefined)};_.pd=function $M(a){OM(this,a)};var BM=20000,CM,DM=-1,EM=-1;var Sz=Ocb(evb,'Overlay',159);gE(134,159,Cub);_.df=function bN(){_M(this);vqb(xqb(Kcb(this.ig)),'Could not determine ApplicationConnection for Overlay. Overlay will be attached directly to the root panel');return he((qK(),uK()))};var Fz=Ocb(fvb,'VOverlay',134);gE(112,134,Cub,eN,fN,gN);_.df=function hN(){var a;return a=(jF(),$doc.getElementById(gvb)),!a?(qK(),$doc.body):a};var Wx=Ocb(_ub,'SpreadsheetOverlay',112);gE(164,112,{19:1,14:1,10:1,17:1,31:1,20:1,12:1,13:1,164:1},vN);_.Oe=function wN(){kN(this)};_.cf=function xN(a){(jF(),this.Wc).style[Itb]=a?Utb:Vtb;!!this.t&&(this.t.style[Itb]=a?Utb:Vtb,undefined);this.i.style[Itb]=(a?(sm(),rm):(sm(),qm)).he()};_.b=0;_.d=0;_.k=0;_.n=0;var qw=Ocb(_ub,'CellComment',164);gE(390,1,mvb,yN);_.oe=function zN(a){pV(this.b,this.a)};var pw=Ocb(_ub,'CellComment/1',390);gE(189,1,{189:1,3:1},AN);_.equals=function BN(a){var b;if(this===a){return true}if(a==null){return false}if(rw!=O(a)){return false}b=a;if(this.col!=b.col){return false}if(this.row!=b.row){return false}return true};_.Xc=function(a){return this.equals(a)};_.hashCode=function CN(){var a;a=this.row+((this.col+1)/2|0);return 31*(this.col+a*a)};_.Zc=function(){return this.hashCode()};_.toString=function DN(){return seb(seb(seb(peb(seb(peb(seb(new ueb,'r'),this.row),'c'),this.col),this.cellStyle),'|'),this.value).a};_.$c=function(){return this.toString()};_.cellStyle='cs0';_.col=0;_.isPercentage=false;_.locked=false;_.needsMeasure=false;_.row=0;var rw=Ocb(_ub,'CellData',189);gE(96,86,nvb);_.vd=function JN(a){(Fh(),Eh).Ud(a);a.stopPropagation();if(Eh.Pd(a)==1){this.c.kf(this.ff(),this.e,!this.b);FN(this,!this.b)}};_.b=false;_.d=0;_.e=0;_.f=false;_.g=0;_.i=0;_.j=0;_.k=0;_.n=0;var Lw=Ocb(_ub,'GroupingWidget',96);gE(236,96,nvb,KN);_.ef=function LN(){var a;a=new KN(this.e,this.c);EN(this,a);return a};_.ff=function MN(){return true};_.gf=function NN(a){(jF(),this.Wc).style[cvb]=a+(em(),Lub);this.i=a};_.hf=function ON(a,b){this.k=9+b*18;this.g=a;(jF(),this.Wc).style[Eub]=this.k+(em(),Lub);this.Wc.style[Dub]=a+Lub};_.jf=function PN(a){(jF(),this.Wc).style[ltb]=a+(em(),Lub);this.n=a};var tw=Ocb(_ub,'ColumnGrouping',236);gE(634,1,{},TN);var uw=Ocb(_ub,'CopyPasteHandlerImpl',634);gE(562,561,{19:1,27:1,14:1,180:1,10:1,60:1,73:1,17:1,20:1,12:1,13:1},XN);_.ye=function YN(a){var b;b=a.d;BF((Fh(),b).type)==128&&VN(this,b)};var xw=Ocb(_ub,'CopyPasteTextBox',562);gE(563,1,{},ZN);_.Id=function $N(){lU(this.a.c);he(this.a).style[Dub]=(em(),'-1000.0px');vj(this.b)==67?this.a.a:vj(this.b)==88&&RN(this.a.a);return false};var vw=Ocb(_ub,'CopyPasteTextBox/1',563);gE(564,1,{},_N);_.Id=function aO(){var a,b;a=(b=IK(this.a),b==null?'':b);SN(this.a.a,a);lU(this.a.c);return false};var ww=Ocb(_ub,'CopyPasteTextBox/2',564);gE(372,678,Fub,OO);_.f=false;_.g=false;_.k=-1;_.n=-1;_.o=-1;_.p=-1;_.q=-1;_.s=-1;_.u=false;_.v=false;_.A=null;var bO;var Kw=Ocb(_ub,'FormulaBarWidget',372);gE(373,1,tvb,QO);_.vd=function RO(a){KK(this.a.a,JI(this.a.B));JO(this.a)};var Bw=Ocb(_ub,'FormulaBarWidget/1',373);gE(378,1,Gub,SO);_.Jd=function TO(){if(this.a.f){this.a.s=-1;this.a.q=GK(this.a.e);fO(this.a)}};var yw=Ocb(_ub,'FormulaBarWidget/10',378);gE(379,44,{},UO);_.jd=function VO(){this.a.d=null};var zw=Ocb(_ub,'FormulaBarWidget/11',379);gE(218,1,Gub,WO);_.Jd=function XO(){var a;if(!this.a.f){return}tO(this.a,(a=IK(this.a.e),a==null?'':a));fO(this.a)};var Aw=Ocb(_ub,'FormulaBarWidget/12',218);gE(374,1,tvb,YO);_.vd=function ZO(a){var b,c,d;d=(jF(),AG((Fh(),a).type));if(d==512){b=a.keyCode|0;if(b==13){JO(this.a);KO(this.a,(c=IK(this.a.a),c==null?'':c));bf(this.a.a,false)}else if(b==27){wO(this.a);lU(this.a.t.W)}}else if(d==2048){v_(this.a.t,true);he(this.a.a).style[uvb]=(Jl(),Dub)}else{v_(this.a.t,false);he(this.a.a).style[uvb]=''}};var Cw=Ocb(_ub,'FormulaBarWidget/2',374);gE(375,1,tvb,$O);_.vd=function _O(a){var b;switch(jF(),AG((Fh(),a).type)){case 2048:if(this.a.f&&this.a.e==this.a.w){this.a.f=false;gO(this.a,this.a.j)}else{v_(this.a.t,true);this.a.c=(b=IK(this.a.j),b==null?'':b);l$(this.a.t);gO(this.a,this.a.j)}break;case 4096:if(!this.a.f){v_(this.a.t,false);k$(this.a.t,(b=IK(this.a.j),b==null?'':b))}break;case 128:nO(this.a,a);break;case hub:case 256:hO(this.a);MO(this.a,true);yO(this.a);break;case 8:this.a.f&&MO(this.a,true);}};var Dw=Ocb(_ub,'FormulaBarWidget/3',375);gE(214,1,Gub,aP);_.Jd=function bP(){var a,b,c,d;if(!this.a.f){return}d=(c=IK(this.a.e),c==null?'':c);b=GK(this.a.e);a=b>0?(Srb(b-1,d.length),d.charCodeAt(b-1)):0;this.a.g=false;a==40||a==43||a==45||a==47||a==42?(this.a.g=true):a==61&&d.length==1&&(this.a.g=true)};var Ew=Ocb(_ub,'FormulaBarWidget/4',214);gE(376,1,Gub,cP);_.Jd=function dP(){var a;bf(this.a.e,true);FO(he(this.a.e),this.a.q,0);tO(this.a,(a=IK(this.a.e),a==null?'':a));fO(this.a)};var Fw=Ocb(_ub,'FormulaBarWidget/5',376);gE(215,44,{},eP);_.jd=function fP(){var a;n$(this.a.t,(a=IK(this.a.j),a==null?'':a))};var Gw=Ocb(_ub,'FormulaBarWidget/6',215);gE(216,1,Gub,gP);_.Jd=function hP(){var a;n$(this.a.t,(a=IK(this.a.j),a==null?'':a))};var Hw=Ocb(_ub,'FormulaBarWidget/7',216);gE(217,1,Gub,iP);_.Jd=function jP(){var a;!!this.a.e&&(a=IK(this.a.e),a==null?'':a).length==0&&(this.a.e==this.a.w?IO(this.a):HO(this.a))};var Iw=Ocb(_ub,'FormulaBarWidget/8',217);gE(377,1,Gub,kP);_.Jd=function lP(){var a,b;if(!this.a.f){b=(a=IK(this.b),a==null?'':a);if(Tdb(b.substr(0,1),'=')||Tdb(b.substr(0,1),'+')){this.a.f=true;this.a.e=this.b;tO(this.a,b);fO(this.a)}}};var Jw=Ocb(_ub,'FormulaBarWidget/9',377);gE(170,52,{52:1,170:1},mP);_.af=function nP(){return this.d.clientWidth|0};_.bf=function oP(){uh(this.d,Zub+this.c+$ub+this.k+' cell '+this.b+' '+vvb)};var Mw=Ocb(_ub,'MergedCell',170);gE(71,1,{71:1,3:1},pP);_.col1=0;_.col2=0;_.id=0;_.row1=0;_.row2=0;var Nw=Ocb(_ub,'MergedRegion',71);gE(190,1,{190:1,3:1},tP);_.col=0;_.dx=0;_.dy=0;_.height=0;_.row=0;_.type='IMAGE';_.width=0;var rP='COMPONENT',sP='IMAGE';var Ow=Ocb(_ub,'OverlayInfo',190);gE(559,142,stb,uP);_.vd=function vP(a){var b;jF();AG((Fh(),a).type)==hub&&p1((ng(),mg),new wP(this));b=AG(a.type);(b&896)!=0?Le(this,a):Le(this,a)};var Qw=Ocb(_ub,'PasteAwareTextBox',559);gE(560,1,Gub,wP);_.Jd=function xP(){RU(this.a.a)};var Pw=Ocb(_ub,'PasteAwareTextBox/1',560);var Rw=Qcb(_ub,'PopupButtonClientRpc');var vA=Qcb(wvb,'Connector');gE(265,1,zvb);_.lf=function IP(){return yP(this)};_.mf=function JP(a){return BP(this,a)};_.nf=function KP(){return CP(this)};_.pf=function MP(a){FP(this,a)};_.qf=function NP(a){HP(this,a)};_.G=true;var oz=Ocb(fvb,'AbstractConnector',265);gE(266,265,zvb);_.nf=function bQ(){return this.sf()};_.rf=function _P(){return PP(this)};_.sf=function aQ(){return !this.J&&(this.J=this.lf()),this.J};_.tf=function cQ(){return QP(this)};_.uf=function dQ(){var a,b,c;if(!this.k&&(b=this.nf().pb,!!b&&b.contains('cClick'))){this.k=He(this.tf(),new _3(this),(on(),on(),nn));(C0(),!B0&&(B0=new L0),C0(),B0).b&&(c=this.tf(),this.v=He(c,new b4(this,c),(Po(),Po(),Oo)),this.u=He(c,new $3(this),(Io(),Io(),Ho)),this.t=He(c,new d4(this),(Ao(),Ao(),zo)),undefined)}else if(!!this.k&&(a=this.nf().pb,!(!!a&&a.contains('cClick')))){_L(this.k.a);this.k=null;YP(this)}};_.vf=function eQ(){var a;a=this.sf();if(a.fb!=null&&a.fb.length!=0){return true}return a.ib!=null&&a.ib.length!=0};_.pf=function fQ(a){UP(this,a)};_.wf=function gQ(){var a;a=this.tf();I1((jF(),a.Wc),xe(a.ld())+'-error',this.sf().hb)};_.qf=function hQ(a){HP(this,a);WP(this,EP(this))};_.j=20;_.k=null;_.n='';_.o='';_.q=false;_.s=false;_.w=0;_.A=0;var mz=Ocb(fvb,'AbstractComponentConnector',266);gE(154,266,zvb);var pz=Ocb(fvb,'AbstractHasComponentsConnector',154);gE(325,154,{179:1,660:1,27:1,99:1,120:1,3:1},kQ);_.sf=function nQ(){return !this.J&&(this.J=yP(this)),this.J};_.nf=function oQ(){return !this.J&&(this.J=yP(this)),this.J};_.tf=function pQ(){return !this.B&&(this.B=new QQ),this.B};_.rf=function lQ(){return new QQ};_.mf=function mQ(a){return this.b};_.oe=function qQ(a){var b;b=(!this.B&&(this.B=new QQ),this.B);y9(this.b,b.k,b.b)};_.ue=function rQ(a){var b;b=(!this.B&&(this.B=new QQ),this.B);b.Sc&&z9(this.b,b.k,b.b)};_.pf=function sQ(a){var b,c;c=(!this.B&&(this.B=new QQ),this.B);b=(!this.J&&(this.J=yP(this)),this.J);(a.Af(Zub)||a.Af('row'))&&p1((ng(),mg),new uQ(c,b));a.Af(Avb)&&GQ(c,b.active);a.Af('popupHeight')&&LQ(c,b.popupHeight);a.Af('popupWidth')&&MQ(c,b.popupWidth);a.Af('headerHidden')&&KQ(c,b.headerHidden)};var Uw=Ocb(_ub,'PopupButtonConnector',325);gE(326,1,esb,tQ);var Sw=Ocb(_ub,'PopupButtonConnector/1',326);gE(327,1,Gub,uQ);_.Jd=function vQ(){OQ(this.b,this.a.row,this.a.col)};var Tw=Ocb(_ub,'PopupButtonConnector/2',327);gE(350,13,qtb,AQ);_.vd=function BQ(a){if(mf(zX(a),this.b)){HM(this.c,false);lU(this.e)}else{Le(this,a)}};var Vw=Ocb(_ub,'PopupButtonHeader',350);var Ww=Qcb(_ub,'PopupButtonServerRpc');gE(75,1,{75:1,3:1});_.ob=true;var CA=Ocb(Bvb,'SharedState',75);gE(67,75,Cvb);_.db=null;_.eb=false;_.fb='';_.hb=null;_.ib=null;_.jb='';_.kb=null;_.lb=null;_.mb=null;_.nb='';var uA=Ocb(wvb,'AbstractComponentState',67);gE(191,67,{191:1,67:1,75:1,3:1},DQ);_.active=false;_.col=0;_.headerHidden=false;_.popupHeight=null;_.popupWidth=null;_.row=0;var Xw=Ocb(_ub,'PopupButtonState',191);gE(70,207,{179:1,19:1,27:1,14:1,10:1,60:1,73:1,17:1,20:1,12:1,13:1,70:1},QQ);_.oe=function RQ(a){HQ(this);Aj(a.a)};_.wd=function SQ(){HM(this.e,false);FQ(this);Me(this)};_.od=function TQ(a,b){Ae((jF(),this.Wc),a,b);re(this.e,a,b)};_.b=0;_.k=0;var $w=Ocb(_ub,'PopupButtonWidget',70);gE(315,1,{},UQ);_.Re=function VQ(a,b){var c,d,e,f,g;f=Wg(this.a.j);c=(Fh(),Eh).Wd(f)+((f.offsetHeight||0)|0);d=Eh.Vd(f)+((f.offsetWidth||0)|0);e=d-a;e<gh(this.a.n)&&(e=d);g=c;g+b>fh(this.a.n)&&(g=Eh.Wd(f)-b);g<ih(this.a.n)&&(g=ih(this.a.n));NM(this.a.e,e,g)};var Yw=Ocb(_ub,'PopupButtonWidget/1',315);gE(316,1,Gub,WQ);_.Jd=function XQ(){DJ(this.a.e,this.a.a)};var Zw=Ocb(_ub,'PopupButtonWidget/2',316);gE(237,96,nvb,YQ);_.ef=function ZQ(){var a;a=new YQ(this.e,this.c);EN(this,a);return a};_.ff=function $Q(){return false};_.gf=function _Q(a){(jF(),this.Wc).style[dvb]=a+(em(),Lub);this.j=a};_.hf=function aR(a,b){this.g=6+b*15;this.k=a;(jF(),this.Wc).style[Dub]=this.g+(em(),Lub);this.Wc.style[Eub]=a+Lub};_.jf=function bR(a){(jF(),this.Wc).style[ktb]=a+(em(),Lub);this.d=a};var _w=Ocb(_ub,'RowGrouping',237);gE(389,1,{},sR);_.a=0;_.b=0;var ax=Ocb(_ub,'SelectionHandler',389);gE(401,678,Fub,UR);_.nd=function VR(a){};_.pd=function WR(a){};_.c=0;_.d=0;_.e=0;_.f=0;_.g=false;_.i=false;_.j=false;_.k=0;_.n=0;_.o=false;_.p=false;_.r=0;_.s=false;_.t=0;_.u=0;_.v=0;_.w=0;_.C=false;_.G=0;_.H=0;_.I=0;_.J=0;_.K=0;_.L=0;_.N=false;_.O=0;_.P=0;_.R=false;_.S=false;_.T=false;_.U=0;_.V=0;_.Y=0;_.Z=0;_._=false;_.ab=0;var ix=Ocb(_ub,'SelectionWidget',401);gE(403,44,{},XR);_.jd=function YR(){var a,b,c,d,e,f,g,h,i;zh(this.a.Q.yc,((this.a.Q.yc.scrollTop||0)|0)+(this.a.n/2|0));yh(this.a.Q.yc,ph(this.a.Q.yc)+(this.a.k/2|0));vV(this.a.Q);g=this.a.c;h=this.a.d;this.a.k<0?(g=gh(this.a.Q.yc)+5):this.a.k>0&&(g=hh(this.a.Q.yc)-25);this.a.n<0?(h=ih(this.a.Q.yc)+5):this.a.n>0&&(h=fh(this.a.Q.yc)-25);if(this.a.n!=0&&((this.a.Q.yc.scrollTop||0)|0)==0){e=new c1;_0(e,this.a.Q.Ec);d=ih(this.a.Q.Ec)+e.d[0]+5;this.a.d>d?(h=this.a.d):(h=d)}if(this.a.k!=0&&ph(this.a.Q.yc)==0){e=new c1;_0(e,this.a.Q.Ec);c=gh(this.a.Q.Ec)+e.d[3]+5;this.a.c>c?(g=this.a.c):(g=c)}if(this.a.C){zR(this.a,g,h)}else{i=v1(g,h);if(i){a=(Fh(),i).getAttribute(utb)||'';YS(this.a.Q.wb,a);b=this.a.Q.wb.a;f=this.a.Q.wb.b;b!=0&&f!=0&&v$(this.a.Q.a,b,f)}}};var bx=Ocb(_ub,'SelectionWidget/1',403);gE(404,1,Gub,ZR);_.Jd=function $R(){DR(this.a,true);HM(this.a.$,false)};var cx=Ocb(_ub,'SelectionWidget/2',404);gE(405,1,Gub,_R);_.Jd=function aS(){DJ(this.a.$,new bS(this));QM(this.a.$)};var ex=Ocb(_ub,'SelectionWidget/3',405);gE(406,1,{},bS);_.Re=function cS(a,b){var c,d,e,f,g;f=0;d=0;c=0;g=0;e=0;if(!!this.a.a.X&&ke(this.a.a.X)){f=ih(this.a.a.X.G);d=gh(this.a.a.X.G);g=this.a.a.X.G.clientWidth|0;c=fh(this.a.a.X.a)+5;ke(this.a.a.W)&&(g+=this.a.a.W.G.clientWidth|0);ke(this.a.a.b)&&(c=fh(this.a.a.b.a)+5)}else if(!!this.a.a.W&&ke(this.a.a.W)){f=ih(this.a.a.W.G);d=gh(this.a.a.W.G);g=this.a.a.W.G.clientWidth|0;c=fh(this.a.a.W.a)+5;ke(this.a.a.a)&&(c=fh(this.a.a.a.a)+5)}else if(!!this.a.a.a&&ke(this.a.a.a)){f=ih(this.a.a.a.G);d=gh(this.a.a.a.G);g=this.a.a.a.G.clientWidth|0;c=fh(this.a.a.a.a)+5;ke(this.a.a.b)&&(g+=this.a.a.b.G.clientWidth|0)}else{f=ih(this.a.a.b.G);d=gh(this.a.a.b.G);g=this.a.a.b.G.clientWidth|0;c=fh(this.a.a.b.a)+5}g>(he(this.a.a.Q).clientWidth|0)&&(g=he(this.a.a.Q).clientWidth|0);this.a.a.Q.Rc>0?(e=ih(this.a.a.Q.Oc)):(e=ih(this.a.a.Q.yc));f-=b+5;d+=(g/2|0)-(a/2|0);e>f&&(f=c+5);NM(this.a.a.$,d,f)};var dx=Ocb(_ub,'SelectionWidget/3/1',406);gE(139,13,qtb,kS);_.b=0;_.c=0;_.e=0;_.f=0;_.g=0;_.i=0;_.n=0;_.o=0;var fx=Ocb(_ub,'SelectionWidget/PaintOutlineWidget',139);gE(138,13,qtb,AS);_.b=false;_.e=0;_.f=0;_.j=0;_.n=false;_.q=0;_.r=0;_.s=0;_.t=0;_.v=false;_.C=0;_.D=0;_.H=false;_.K=0;var hx=Ocb(_ub,'SelectionWidget/SelectionOutlineWidget',138);gE(402,1,tvb,BS);_.vd=function CS(a){var b,c,d;b=(jF(),(Fh(),Eh).Td(a));d=AG(a.type);c=d==tub||d==msb||d==uub||d==vub;if(this.a.F.C){mS(this.a,a);a.stopPropagation()}else if(d==4){if(mf(b,this.a.g)){mS(this.a,a);a.stopPropagation()}else if(mf(b,this.a.G));else if(mf(b,this.a.k));else if(mf(b,this.a.u));else mf(b,this.a.a)}else if(c){if(d==msb||d==vub){CF(this.a.B);PR(this.a.F)}else if(mf(b,this.a.g)||mf(b,this.a.i)){if(d==tub){DF(this.a.B);uR(this.a.F,a)}else{CR(this.a.F,a)}}else{this.a.F.p&&mS(this.a,a)}Eh.Ud(a);a.stopPropagation()}};var gx=Ocb(_ub,'SelectionWidget/SelectionOutlineWidget/1',402);gE(635,1,tvb,IS);_.vd=function JS(a){var b;if(jh(zX(a)).indexOf(Dvb)!=-1){rW(this.c,true);return}b=(jF(),AG((Fh(),a).type));if(b==2048){rW(this.c,true);this.b=true}else if(b==4096){rW(this.c,false);this.b=false}else if(b==uub){a.stopPropagation()}else if(this.c.wc){usb==b&&vV(this.c);FS(this,a)}else{switch(b){case usb:vV(this.c);break;case 256:ES(this,a);break;case 128:DS(this,a);break;case 4:Eh.Pd(a)!=2&&rV(this.c,a);break;case 8:Eh.Pd(a)==2&&rV(this.c,a);break;case 2:GS(this,a);break;case 32:case 16:tV(this.c,a);break;case 64:sV(this.c);}}};_.a=false;_.b=false;var jx=Ocb(_ub,'SheetEventListener',635);gE(565,1,{711:1,179:1,725:1,722:1,727:1,243:1,244:1,27:1},OS);_.ne=function PS(a){var b;rW(this.b,false);if(this.a.f){MO(this.a,false)}else if(this.b._){ZZ(this.b.a,(b=IK(this.b.sb),b==null?'':b));kO(this.a)}Aj(a.a)};_.oe=function QS(a){this.b._&&(this.a.v=true);Aj(a.a)};_.re=function RS(a){var b;if(qj(a.a)==2){b=this.b.wb;YS(b,JU(this.b));c$(this.b.a,a.a,b.a,b.b)}Aj(a.a)};_.se=function SS(a){MO(this.a,false)};var kx=Ocb(_ub,'SheetInputEventListener',565);gE(508,1,{},_S);_.a=0;_.b=0;var lx=Ocb(_ub,'SheetJsniUtil',508);gE(233,129,{19:1,14:1,10:1,17:1,31:1,20:1,12:1,13:1,233:1},fT);_.a=0;_.b=0;var mx=Ocb(_ub,'SheetOverlay',233);gE(297,13,qtb,wT);_.b='';_.d=false;_.j=false;_.r=-1;_.s=0;_.t=0;var qx=Ocb(_ub,'SheetTabSheet',297);gE(298,1,tvb,xT);_.vd=function yT(a){var b,c,d,e,f;d=zX(a);f=(jF(),AG((Fh(),a).type));if(mf(d,this.a.g)){return}a.stopPropagation();if(f==1){this.a.d&&!this.a.j&&hT(this.a);mU(this.a.e.W,false);if(Zg(this.a.i,d)&&!rh(d,Vtb)){if(mf(d,this.a.n)){this.a.t=0;this.a.s=0;this.a.c.style[cvb]=this.a.t+(em(),Lub);tT(this.a)}else if(mf(d,this.a.p)){if(this.a.s>0){--this.a.s;this.a.s==0?(this.a.t=0):(this.a.t+=mT(this.a,this.a.s));this.a.c.style[cvb]=this.a.t+(em(),Lub)}tT(this.a)}else if(mf(d,this.a.q)){if(this.a.s<this.a.u.length-1){this.a.t-=mT(this.a,this.a.s);this.a.c.style[cvb]=this.a.t+(em(),Lub);++this.a.s;tT(this.a)}}else if(mf(d,this.a.o)){e=kT(this.a);nT(this.a,e)}else mf(d,this.a.a)&&(this.a.j||p$(this.a.e))}else if(Zg(this.a.c,d)){for(c=0;c<this.a.u.length;c++){mf(this.a.u[c],d)&&c!=this.a.r&&B$(this.a.e,c)}}}else if(f==2){if(!this.a.j){for(c=0;c<this.a.u.length;c++){if(mf(this.a.u[c],d)){if(c!=this.a.r){B$(this.a.e,c)}else{this.a.d=true;b=this.a.u[c];this.a.b=Eh.$d(b);pj(this.a.g,this.a.b);Eh.ce(b,'');Vg(b,this.a.g);this.a.g.focus();uT(this.a)}}}}}};var nx=Ocb(_ub,'SheetTabSheet/1',298);gE(299,1,tvb,zT);_.vd=function AT(a){var b,c;c=(jF(),AG((Fh(),a).type));if(this.a.d){if(c==4096){hT(this.a)}else{switch(a.keyCode|0){case 13:case 9:hT(this.a);break;case 27:this.a.d=false;ah(this.a.g);b=this.a.u[this.a.r];b.style[ltb]='';rT(b,this.a.b);lU(this.a.e.W);break;default:jT(this.a);}}}a.stopPropagation()};var ox=Ocb(_ub,'SheetTabSheet/2',299);gE(300,1,Gub,BT);_.Jd=function CT(){uT(this.a)};var px=Ocb(_ub,'SheetTabSheet/3',300);gE(157,674,{19:1,14:1,10:1,17:1,31:1,20:1,12:1,13:1,157:1},yX);_.Ie=function AX(){return lV(this)};_.ud=function BX(){Ke(this);WN(this.M);!this.M.Vc&&lH(this,this.M)};_.yd=function CX(){HM(this.qb,false);HM(this.Wb,false);UN(this.M)};_.Je=function DX(a){return KV(this,a)};_.f=0;_.g=0;_.k=-1;_.n=-1;_.o=false;_.v=true;_.A=0;_.B=0;_.C=true;_.G=false;_.H=0;_.L=false;_.O=false;_.P=false;_.R=false;_.V=-1;_.X=0;_.Y=0;_.Z=false;_._=false;_.ab=false;_.bb=0;_.cb=0;_.db=0;_.eb=0;_.nb=null;_.ob=0;_.ub=null;_.vb=false;_.xb=0;_.yb=0;_.zb=0;_.Ab=0;_.Bb=0;_.Cb=0;_.Db=false;_.Lb=0;_.Ob=0;_.Pb=0;_.Rb=0;_.Sb=0;_.Yb=false;_.Zb=-1;_.$b=-1;_._b=false;_.ac=false;_.dc=false;_.ec=0;_.ic=false;_.mc=false;_.nc=0;_.oc=0;_.qc=0;_.rc=0;_.wc=false;_.Fc=false;_.Gc=false;_.Hc=false;_.Ic=0;_.Jc=0;_.Kc=0;_.Nc=0;_.Qc=false;_.Rc=0;var Kx=Ocb(_ub,'SheetWidget',157);gE(328,1,Gub,EX);_.Jd=function FX(){this.a.k!=-1&&this.a.n!=-1&&EW(this.a,this.a.k,this.a.n)};var Ax=Ocb(_ub,'SheetWidget/1',328);gE(337,1,Gub,GX);_.Jd=function HX(){var a,b;if(this.a.ic){return}b=this.d;while(QZ(this.a.a,b)){--b}if(b==0){return}DF(he(this.a));this.a.ac=true;this.a.$b=b;this.a.Zb=-1;this.a.$b<=this.a.Rc?(a=yjb(this.a.jb,this.a.$b-1)):(a=yjb(this.a.hc,b-this.a.db));this.a.Rb=(Fh(),Eh).Wd(a);this.a.Sb=Eh.Wd(a)+((a.offsetHeight||0)|0);NZ(this.a.a,b)>0?hI(this.a.Xb,'Height: '+NZ(this.a.a,b)+'pt'):hI(this.a.Xb,'Hide row');HW(this.a,this.b,this.c);QM(this.a.Wb);dh(this.a.Ec,wwb);dh(this.a.Ub,'row'+b);++b;while(this.d<this.a.a.P&&QZ(this.a.a,b)){++b}dh(this.a.Tb,pwb+b);SU(this.a,this.b,this.c)};_.b=0;_.c=0;_.d=0;var rx=Ocb(_ub,'SheetWidget/10',337);gE(338,1,Gub,IX);_.Jd=function JX(){var a,b;if(this.a.L){return}b=this.d;while(PZ(this.a.a,b)){--b}if(b<1){return}DF(he(this.a));this.a._b=true;this.a.Zb=b;this.a.$b=-1;this.a.Zb<=this.a.ob?(a=yjb(this.a.ib,this.a.Zb-1)):(a=yjb(this.a.K,b-this.a.bb));this.a.Rb=(Fh(),Eh).Vd(a);this.a.Sb=Eh.Vd(a)+((a.offsetWidth||0)|0);JZ(this.a.a,b)>0?hI(this.a.Xb,'Width: '+JZ(this.a.a,b)+Lub):hI(this.a.Xb,gwb);HW(this.a,this.b,this.c);QM(this.a.Wb);dh(this.a.Ec,xwb);dh(this.a.Ub,Zub+b);++b;while(this.d<=this.a.a.i&&PZ(this.a.a,b)){++b}dh(this.a.Tb,nwb+b);OU(this.a,this.b,this.c)};_.b=0;_.c=0;_.d=0;var sx=Ocb(_ub,'SheetWidget/11',338);gE(339,1,{},KX);_.Re=function LX(a,b){tW(this.a,a,b,this.b)};var tx=Ocb(_ub,'SheetWidget/12',339);gE(131,1,Gub,MX);_.Jd=function NX(){var a,b;b=(a=IK(this.a.sb),a==null?'':a);CV(this.a,b);this.b&&b$(this.a.a,b)};_.b=false;var ux=Ocb(_ub,'SheetWidget/13',131);gE(340,1,Gub,OX);_.Jd=function PX(){bf(this.a.sb,true);Sdb(this.b,'%')?JK(this.a.sb,this.b.length-1,0):JK(this.a.sb,this.b.length,0)};var vx=Ocb(_ub,'SheetWidget/14',340);gE(132,1,Gub,QX);_.Jd=function RX(){this.a.yc.focus()};var wx=Ocb(_ub,'SheetWidget/15',132);gE(341,1,tvb,SX);_.vd=function TX(a){SZ(this.a.a,true,this.b)};_.b=0;var xx=Ocb(_ub,'SheetWidget/16',341);gE(342,1,tvb,UX);_.vd=function VX(a){SZ(this.a.a,false,this.b)};_.b=0;var yx=Ocb(_ub,'SheetWidget/17',342);gE(343,1,Gub,WX);_.Jd=function XX(){var a,b,c,d,e,f,g,h,i,j;g=this.a.Mc.clientWidth|0;e=this.a.fc.clientWidth|0;j=g+e;if(e==0&&!fV(this.a.F)){j-=1}else if(e!=0&&!fV(this.a.F));else e!=0&&fV(this.a.F)&&(j+=2);this.a.F.style[ltb]=j+(em(),Lub);f=this.a.Mc.clientHeight|0;b=this.a.I.clientHeight|0;c=f+b;if(b==0&&!fV(this.a.cc));else b!=0&&!fV(this.a.cc)?(c+=1):b!=0&&fV(this.a.cc)&&(c+=2);this.a.cc.style[ktb]=c+Lub;a=this.a.c.clientHeight|0;i=this.a.Oc.clientWidth|0;h=i+j;d=a+c;fV(this.a.F)&&(h+=1);fV(this.a.cc)&&(d+=1);this.a.I.style[ltb]=h+Lub;this.a.D.style[ltb]=h+Lub;this.a.fc.style[ktb]=d+Lub;this.a.bc.style[ktb]=d+Lub};var zx=Ocb(_ub,'SheetWidget/18',343);gE(329,1,Gub,YX);_.Jd=function ZX(){var b,c,d,e,f;if(this.a._){return}e=this.a.Hb;f=jh(Ih((Fh(),e))).indexOf(Nvb)!=-1;b=e.getAttribute(utb)||'';if(Tdb(b.substr(0,20),lvb)){return}b.indexOf(Ovb)!=-1&&(b=eeb(b,0,b.indexOf(' cell')));if(Tdb(b,Qvb)){e=tj(this.a.Gb);b=e.getAttribute(utb)||''}else if(zF(this.a.Gb)==16&&f){YS(this.a.wb,b);try{c=this.a.wb.a;d=this.a.wb.b;if(c==0||d==0){return}e=DU(this.a,Q_(this.a.Gb),R_(this.a.Gb),pU(this.a,c,d)).d;b=e.getAttribute(utb)||'';b.indexOf(Ovb)!=-1&&(b=eeb(b,0,b.indexOf(' cell')))}catch(a){a=BD(a);if(Oq(a,81)){uqb(this.a.U,'SheetWidget:onSheetMouseOverOrOut: JSE while trying to find real event target, className:'+b)}else if(Oq(a,32)){vqb(this.a.U,'SheetWidget:onSheetMouseOverOrOut: IOOBE while trying to find correct event target, className:'+b)}else throw CD(a)}}YS(this.a.wb,b);if(Tdb(b,Wub)||Tdb(b,Xub)||Tdb(b,this.a.j)||NT(this.a,b)||OT(this.a,b)){XW(this.a,this.a.Gb,e)}else{if(!this.a.o&&this.a.q.M&&b.indexOf('comment')==-1){CF(this.a.yc);kN(this.a.q);this.a.j=null;this.a.k=-1;this.a.n=-1}}if(f&&!!this.a.s&&Bhb(this.a.s,b)){ZW(this.a,zF(this.a.Gb),this.a.wb.a,this.a.wb.b,Ahb(this.a.s,b));return}else yJ(this.a.qb)&&HM(this.a.qb,false)};var Bx=Ocb(_ub,'SheetWidget/2',329);gE(330,44,{},$X);_.jd=function _X(){var a,b,c,d,e;zh(this.a.yc,((this.a.yc.scrollTop||0)|0)+(this.a.Y/2|0));yh(this.a.yc,ph(this.a.yc)+(this.a.X/2|0));vV(this.a);d=this.a.A;e=this.a.B;this.a.X<0?(d=gh(this.a.yc)+5):this.a.X>0&&(d=hh(this.a.yc)-25);this.a.Y<0?(e=ih(this.a.yc)+5):this.a.Y>0&&(e=fh(this.a.yc)-25);if(this.a.Y!=0&&((this.a.yc.scrollTop||0)|0)==0){c=new c1;_0(c,this.a.Ec);b=ih(this.a.Ec)+c.d[0]+5;this.a.B>b?(e=this.a.B):(e=b)}if(this.a.X!=0&&ph(this.a.yc)==0){c=new c1;_0(c,this.a.Ec);a=gh(this.a.Ec)+c.d[3]+5;this.a.A>a?(d=this.a.A):(d=a)}TU(this.a,d,e)};var Cx=Ocb(_ub,'SheetWidget/3',330);gE(331,44,{},cY);_.jd=function dY(){aY(this,this.a.db,this.a.zb,this.a.bb,this.a.xb);aY(this,0,this.a.Rc,0,this.a.ob);aY(this,0,this.a.Rc,this.a.bb,this.a.xb);aY(this,this.a.db,this.a.zb,0,this.a.ob);bY(this,this.a.db,this.a.zb,this.a.bb,this.a.xb);bY(this,0,this.a.Rc,0,this.a.ob);bY(this,0,this.a.Rc,this.a.bb,this.a.xb);bY(this,this.a.db,this.a.zb,0,this.a.ob)};var Dx=Ocb(_ub,'SheetWidget/4',331);gE(332,1,Gub,eY);_.Jd=function fY(){this.a.Db&&uV(this.a)};var Ex=Ocb(_ub,'SheetWidget/5',332);gE(333,1,Gub,gY);_.Jd=function hY(){SV(this.a)};var Fx=Ocb(_ub,'SheetWidget/6',333);gE(334,1,Gub,iY);_.Jd=function jY(){this.a.Lb==0&&Xg(this.a.Mb)&&(this.a.Lb=(this.a.Mb.offsetWidth||0)|0);vX(this.a);$W(this.a);bX(this.a);$V(this.a,this.b,this.c);YV(this.a);u$(this.a.a,this.a.db,this.a.zb,this.a.bb,this.a.xb);UV(this.a);ZV(this.a);aX(this.a);qX(this.a);TV(this.a);this.a.Db=true};_.b=0;_.c=0;var Gx=Ocb(_ub,'SheetWidget/7',334);gE(335,1,Nub,lY);_.ye=function mY(a){var b,c,d,e,f,g;c=zF(a.d);f=a.d;g=zX(f);b='';!!g&&g.nodeType==1&&(b=(Fh(),g).getAttribute(utb)||'');Zg(he(this.a),zX(f))&&(tub==c||4==c||8==c||2==c||1==c)&&rW(this.a,true);if((this.a._b||this.a.ac)&&c==64){if(this.a.Zb!=-1){OU(this.a,Q_(f),R_(f))}else if(this.a.$b!=-1){SU(this.a,Q_(f),R_(f))}else{this.a._b=false;this.a.ac=false}a.a=true}else if(c==8&&kY(this,g)){if(this.a._b||this.a.ac||Tdb(b,ywb)||Tdb(b,zwb)){this.a.L=true;this.a.ic=true;this.a._b=false;this.a.ac=false;TS(this.a.Vb);HM(this.a.Wb,false);a.a=true;if(this.a.Zb!=-1){sh(this.a.Ec,xwb);MW(this.a,Q_(a.d))}else if(this.a.$b!=-1){sh(this.a.Ec,wwb);OW(this.a,R_(a.d))}}}else{if(Zg(he(this.a),g)){if(c==1){d=XS(b);if(d==1||d==2){e=ZS(b);d==1?q$(this.a.a,e,!!(Fh(),f).shiftKey,!!f.metaKey||!!f.ctrlKey):d$(this.a.a,e,!!(Fh(),f).shiftKey,!!f.metaKey||!!f.ctrlKey);a.a=true;this.a.yc.focus()}}else if(c==4&&kY(this,g)){if(Tdb(b,ywb)){b=jh(Ih((Fh(),g)));d=XS(b);if(d==1){d=ZS(b);this.a.ic=false;KW(this.a,d-1,Q_(f),R_(f))}else if(d==2){d=ZS(b);this.a.L=false;IW(this.a,d-1,Q_(f),R_(f))}a.a=true}else if(Tdb(b,zwb)){b=jh(Ih((Fh(),g)));d=XS(b);if(d==1){d=ZS(b);this.a.ic=false;KW(this.a,d,Q_(f),R_(f))}else if(d==2){d=ZS(b);this.a.L=false;IW(this.a,d,Q_(f),R_(f))}a.a=true}}else if(c==2&&kY(this,g)){if(Tdb(b,ywb)){b=jh(Ih((Fh(),g)));d=XS(b);if(d==1){d=ZS(b)-1;while(QZ(this.a.a,d)&&d>0){--d}d>0&&r$(this.a.a,d)}else if(d==2){d=ZS(b)-1;while(PZ(this.a.a,d)&&d>0){--d}d>0&&e$(this.a.a,d)}a.a=true}else if(Tdb(b,zwb)){b=jh(Ih((Fh(),g)));d=XS(b);if(d==1){d=ZS(b);while(QZ(this.a.a,d)&&d>0){--d}d>0&&r$(this.a.a,d)}else if(d==2){d=ZS(b);while(PZ(this.a.a,d)&&d>0){--d}d>0&&e$(this.a.a,d)}a.a=true}}}}};var Hx=Ocb(_ub,'SheetWidget/8',335);gE(336,1,Awb,nY);_.pe=function oY(a){var b,c,d,e;if(this.a.a.S){e=zX(a.a);b=(Fh(),e).getAttribute(utb)||'';c=XS(b);if(c==1||c==2){d=ZS(b);c==1?s$(this.a.a,a.a,d):f$(this.a.a,a.a,d)}!!a.a&&zj(a.a);Aj(a.a)}};var Ix=Ocb(_ub,'SheetWidget/9',336);gE(51,1,{51:1},pY);_.Xc=function qY(a){if(a==null||!Oq(a,51)){return false}return this.b==a.b&&this.a==a.a};_.Zc=function rY(){var a;a=this.b+((this.a+1)/2|0);return 31*(this.a+a*a)};_.a=0;_.b=0;var Jx=Ocb(_ub,'SheetWidget/CellCoord',51);gE(124,1,Bwb);_.$c=function uY(){return 'Action [owner='+this.g+', iconUrl='+this.f+', caption='+this.e+']'};_.e='';_.f=null;var rz=Ocb(fvb,'Action',124);gE(241,124,Bwb,wY);_.Jd=function xY(){vY(this)};_.a='';_.c=0;var Mx=Ocb(_ub,'SpreadsheetAction',241);gE(192,1,{192:1,3:1},yY);_.type=0;var Lx=Ocb(_ub,'SpreadsheetActionDetails',192);var Nx=Qcb(_ub,'SpreadsheetClientRpc');gE(277,154,zvb,JY);_.sf=function NY(){return !this.J&&(this.J=new j0),this.J};_.nf=function OY(){return !this.J&&(this.J=new j0),this.J};_.tf=function PY(){return !this.B&&(this.B=new P_),this.B};_.lf=function KY(){return new j0};_.rf=function LY(){return new P_};_.mf=function MY(a){return this.g};_.pf=function QY(a){DY(this,a)};var Ux=Ocb(_ub,'SpreadsheetConnector',277);gE(278,1,{717:1,3:1},_Y);var Px=Ocb(_ub,'SpreadsheetConnector/1',278);gE(279,1,{},bZ);var Ox=Ocb(_ub,'SpreadsheetConnector/1/1',279);gE(280,1,{},fZ);var Qx=Ocb(_ub,'SpreadsheetConnector/4',280);gE(281,1,Awb,gZ);_.pe=function hZ(a){!!a.a&&zj(a.a);Aj(a.a)};var Rx=Ocb(_ub,'SpreadsheetConnector/5',281);gE(282,1,Gub,iZ);_.Jd=function jZ(){CY(this.a,this.b)};var Sx=Ocb(_ub,'SpreadsheetConnector/6',282);gE(283,1,{},mZ);var Tx=Ocb(_ub,'SpreadsheetConnector/7',283);gE(391,134,Cub);_.d=0;_.f=0;var Bz=Ocb(fvb,'VContextMenu',391);gE(392,391,Cub,sZ);_.df=function tZ(){var a;return a=(jF(),jF(),$doc.getElementById(gvb)),!a?(qK(),$doc.body):a};var Vx=Ocb(_ub,'SpreadsheetOverlay/SpreadsheetContextMenu',392);var Xx=Qcb(_ub,'SpreadsheetServerRpc');var ly=Qcb(Hwb,'Focusable');gE(29,678,{19:1,14:1,10:1,17:1,177:1,20:1,12:1,13:1,29:1},P_);_.kf=function S_(a,b,c){Z9(this.X,a,b,c)};_.nd=function T_(a){Z$(this,a)};_.pd=function U_(a){C_(this,a)};_.a=0;_.c=false;_.d=false;_.e=false;_.i=0;_.j=0;_.o=false;_.q=0;_.r=0;_.t=false;_.C=false;_.D=false;_.F=true;_.G=true;_.L=true;_.M=0;_.P=0;_.Q=false;_.U=false;_.Y=0;_.Z=0;_.$=false;var dy=Ocb(_ub,'SpreadsheetWidget',29);gE(291,1,esb,X_);var Yx=Ocb(_ub,'SpreadsheetWidget/1',291);gE(292,44,{},Y_);_.jd=function Z_(){};var Zx=Ocb(_ub,'SpreadsheetWidget/2',292);gE(293,1,{718:1,27:1},__);_.a=0;_.c=0;var $x=Ocb(_ub,'SpreadsheetWidget/3',293);gE(294,1,Gub,a0);_.Jd=function b0(){AW(this.a.W,this.b,this.c)};_.b=0;_.c=0;var _x=Ocb(_ub,'SpreadsheetWidget/4',294);gE(295,1,Gub,c0);_.Jd=function d0(){var a,b,c;BZ(this.a);if(this.b){b=0;while(b<this.b.a.length){c=yjb(this.b,b);FT(this.a.W,c);a=pU(this.a.W,c.col1,c.row1);!!a&&lM(a,a.o,a.b,false);++b}QT(this.a.W)}!this.b?(this.a.K=null):(this.a.K=new Gjb(this.b))};var ay=Ocb(_ub,'SpreadsheetWidget/5',295);gE(296,44,{},e0);_.jd=function f0(){this.a.L=true};var by=Ocb(_ub,'SpreadsheetWidget/6',296);gE(196,1,Gub,g0);_.Jd=function h0(){if(!this.a.c){n9(this.a.X,this.a.W.rc,this.a.W.qc,this.c);yZ(this.a,this.c,this.b)}};_.b=false;var cy=Ocb(_ub,'SpreadsheetWidget/7',196);gE(234,1,{234:1,3:1},i0);_.collapsed=false;_.endIndex=0;_.level=0;_.startIndex=0;_.uniqueIndex=0;var ey=Ocb(Kwb,'GroupingData',234);gE(125,67,{67:1,75:1,125:1,3:1});var HA=Ocb(Lwb,'TabIndexState',125);gE(45,125,{45:1,67:1,75:1,125:1,3:1},j0);_.d=null;_.f=false;_.g=0;_.j=0;_.k=200;_.n=null;_.p=null;_.q=0;_.r=0;_.s=true;_.t=true;_.u=false;_.v=null;_.w=null;_.B=0;_.G='Invalid formula';_.H=true;_.I=true;_.J=null;_.K=null;_.O=false;_.P=200;_.R=false;_.S=0;_.U=null;_.V=0;_.W=1;_.X=null;_.Y=false;_.Z=null;_._=0;_.bb=false;_.cb=false;var fy=Ocb(Kwb,'SpreadsheetState',45);var k0;gE(245,1,{},u0);var s0;var gy=Ocb(Hwb,'ApplicationConfiguration',245);gE(208,1,{14:1,208:1},y0);_.sd=function z0(a){};_.b=null;var hy=Ocb(Hwb,'ApplicationConnection',208);gE(59,1,{},L0);_.b=false;var A0=null,B0;var iy=Ocb(Hwb,'BrowserInfo',59);gE(116,1,{},Q0);var jy=Ocb(Hwb,'ComputedStyle',116);gE(677,676,{});var ry=Ocb(Twb,'AbstractServerConnectorEvent',677);var T0;gE(478,1,{},W0);var ky=Ocb(Hwb,'ConnectorMap',478);gE(82,1,{},c1);_.b=-1;_.e=-1;var ny=Ocb(Hwb,'MeasuredSize',82);gE(540,1,{},f1);var my=Ocb(Hwb,'MeasuredSize/MeasureResult',540);gE(371,1,{},k1);var oy=Ocb(Hwb,'ResourceLoader',371);gE(407,347,{},q1);_.a=0;var qy=Ocb(Hwb,'VSchedulerImpl',407);gE(408,1,Gub,r1);_.Jd=function s1(){this.a.a--};var py=Ocb(Hwb,'VSchedulerImpl/lambda$0$Type',408);var J1;gE(195,677,{},R1);_.ie=function S1(a){a.pf(this)};_.ke=function U1(){return M1};_.je=function T1(){return M1};_.Af=function V1(a){return P1(this,a)};_.b=false;var M1;var sy=Ocb(Twb,'StateChangeEvent',195);gE(651,1,{},X1);var ty=Ocb(Twb,'URLReference_Serializer',651);gE(167,1,{167:1});_.d=0;var uy=Ocb(Wwb,'AsyncBundleLoader',167);gE(362,1,{});var $1;var $y=Ocb(Wwb,'ConnectorBundleLoader',362);gE(363,1,mvb,e2);_.oe=function f2(a){Ne(this.a.e)};var vy=Ocb(Wwb,'ConnectorBundleLoader/lambda$0$Type',363);gE(364,1,Xwb,g2);_.te=function h2(a){Ne(this.a.e)};var wy=Ocb(Wwb,'ConnectorBundleLoader/lambda$1$Type',364);gE(78,362,{},i2);var Zy=Ocb(Wwb,'ConnectorBundleLoaderXXImpl',78);gE(479,167,{167:1},j2);var Yy=Ocb(Wwb,'ConnectorBundleLoaderXXImpl/1',479);gE(480,1,{},p2);var Xy=Ocb(Wwb,'ConnectorBundleLoaderXXImpl/1/1',480);gE(481,1,Wxb,q2);_.Bf=function r2(a,b){return new d5};var Ky=Ocb(Wwb,'ConnectorBundleLoaderXXImpl/1/1/1',481);gE(490,1,Wxb,s2);_.Bf=function t2(a,b){return new icb};var xy=Ocb(Wwb,'ConnectorBundleLoaderXXImpl/1/1/10',490);gE(491,1,Wxb,u2);_.Bf=function v2(a,b){return new jcb};var yy=Ocb(Wwb,'ConnectorBundleLoaderXXImpl/1/1/11',491);gE(696,1,Wxb);_.Bf=function w2(a,b){var c,d,e,f,g;c=[];for(e=b,f=0,g=e.length;f<g;++f){d=e[f];c.push(d)}return this.Cf(a,c)};var _y=Ocb(Wwb,'JsniInvoker',696);gE(492,696,Wxb,x2);_.Cf=function y2(a,b){a.wf();return null};var zy=Ocb(Wwb,'ConnectorBundleLoaderXXImpl/1/1/12',492);gE(493,696,Wxb,z2);_.Cf=function A2(a,b){a.uf();return null};var Ay=Ocb(Wwb,'ConnectorBundleLoaderXXImpl/1/1/13',493);gE(494,696,Wxb,B2);_.Cf=function C2(a,b){a.Ef();return null};var By=Ocb(Wwb,'ConnectorBundleLoaderXXImpl/1/1/14',494);gE(495,696,Wxb,D2);_.Cf=function E2(a,b){a.Ff();return null};var Cy=Ocb(Wwb,'ConnectorBundleLoaderXXImpl/1/1/15',495);gE(496,1,Wxb,F2);_.Bf=function G2(a,b){return new H2};var Ey=Ocb(Wwb,'ConnectorBundleLoaderXXImpl/1/1/16',496);gE(497,1,{},H2);var Dy=Ocb(Wwb,'ConnectorBundleLoaderXXImpl/1/1/16/1',497);gE(498,1,Wxb,I2);_.Bf=function J2(a,b){return new X1};var Fy=Ocb(Wwb,'ConnectorBundleLoaderXXImpl/1/1/17',498);gE(499,1,Wxb,K2);_.Bf=function L2(a,b){return new M2};var Hy=Ocb(Wwb,'ConnectorBundleLoaderXXImpl/1/1/18',499);gE(500,1,{},M2);var Gy=Ocb(Wwb,'ConnectorBundleLoaderXXImpl/1/1/18/1',500);gE(501,1,Wxb,N2);_.Bf=function O2(a,b){return new P2};var Jy=Ocb(Wwb,'ConnectorBundleLoaderXXImpl/1/1/19',501);gE(502,1,{},P2);var Iy=Ocb(Wwb,'ConnectorBundleLoaderXXImpl/1/1/19/1',502);gE(482,1,Wxb,Q2);_.Bf=function R2(a,b){return new t5};var Py=Ocb(Wwb,'ConnectorBundleLoaderXXImpl/1/1/2',482);gE(503,1,Wxb,S2);_.Bf=function T2(a,b){return new U2};var My=Ocb(Wwb,'ConnectorBundleLoaderXXImpl/1/1/20',503);gE(504,1,{},U2);var Ly=Ocb(Wwb,'ConnectorBundleLoaderXXImpl/1/1/20/1',504);gE(505,1,Wxb,V2);_.Bf=function W2(a,b){return new X2};var Oy=Ocb(Wwb,'ConnectorBundleLoaderXXImpl/1/1/21',505);gE(506,1,{},X2);var Ny=Ocb(Wwb,'ConnectorBundleLoaderXXImpl/1/1/21/1',506);gE(483,1,Wxb,Y2);_.Bf=function Z2(a,b){return new Ubb};var Qy=Ocb(Wwb,'ConnectorBundleLoaderXXImpl/1/1/3',483);gE(484,1,Wxb,$2);_.Bf=function _2(a,b){return new acb};var Ry=Ocb(Wwb,'ConnectorBundleLoaderXXImpl/1/1/4',484);gE(485,1,Wxb,a3);_.Bf=function b3(a,b){return new bcb};var Sy=Ocb(Wwb,'ConnectorBundleLoaderXXImpl/1/1/5',485);gE(486,1,Wxb,c3);_.Bf=function d3(a,b){return new ccb};var Ty=Ocb(Wwb,'ConnectorBundleLoaderXXImpl/1/1/6',486);gE(487,1,Wxb,e3);_.Bf=function f3(a,b){return new dcb};var Uy=Ocb(Wwb,'ConnectorBundleLoaderXXImpl/1/1/7',487);gE(488,1,Wxb,g3);_.Bf=function h3(a,b){return new fcb};var Vy=Ocb(Wwb,'ConnectorBundleLoaderXXImpl/1/1/8',488);gE(489,1,Wxb,i3);_.Bf=function j3(a,b){return new hcb};var Wy=Ocb(Wwb,'ConnectorBundleLoaderXXImpl/1/1/9',489);gE(72,1,{72:1},m3);_.Xc=function n3(a){var b;if(a===this){return true}else if(Oq(a,72)){b=a;return Tdb(b.b.b+'.'+b.a,this.b.b+'.'+this.a)}else{return false}};_.Zc=function o3(){return $rb(this.b.b+'.'+this.a)};_.$c=function p3(){return this.b.b+'.'+this.a};var az=Ocb(Wwb,'Method',72);gE(79,21,{79:1,3:1,21:1,18:1},q3);var bz=Ocb(Wwb,'NoDataException',79);gE(91,1,{91:1},s3,t3);var cz=Ocb(Wwb,'OnStateChangeMethod',91);gE(5,1,{5:1},v3,w3);_.Xc=function y3(a){var b;if(a===this){return true}else if(Oq(a,5)){b=a;return Tdb(b.b,this.b)}else{return false}};_.Zc=function z3(){return $rb(this.b)};_.$c=function A3(){return this.b};var ez=Ocb(Wwb,'Type',5);gE(410,1,{},J3);_.Df=function P3(a,b,c){this.c[Icb(a),a.k][b]=c};var dz=Ocb(Wwb,'TypeDataStore',410);gE(366,1,Xxb);_.pe=function S3(a){DP(this.c,this.b)&&!!a.a&&zj(a.a)};_.re=function T3(a){this.d=w1(a.a);this.g=false;this.e=AF(this.f)};_.se=function U3(a){DP(this.c,this.b)&&this.g&&!!this.d&&w1(a.a)==this.d&&g4(this,a.a);this.g=false;this.d=null};_.g=false;var gz=Ocb(fvb,'AbstractClickEventHandler',366);gE(370,1,Nub,V3);_.ye=function W3(a){R3(this.a,a)};var fz=Ocb(fvb,'AbstractClickEventHandler/lambda$0$Type',370);gE(285,44,{},X3);_.jd=function Y3(){this.a.mf(wA).lg();u1();this.a.q=true};var hz=Ocb(fvb,'AbstractComponentConnector/2',285);gE(287,1,{715:1,27:1},$3);var iz=Ocb(fvb,'AbstractComponentConnector/3',287);gE(284,1,Awb,_3);_.pe=function a4(a){RP(this.a,a)};var jz=Ocb(fvb,'AbstractComponentConnector/lambda$0$Type',284);gE(286,1,Xwb,b4);_.te=function c4(a){SP(this.a,this.b,a)};var kz=Ocb(fvb,'AbstractComponentConnector/lambda$1$Type',286);gE(288,1,{716:1,27:1},d4);var lz=Ocb(fvb,'AbstractComponentConnector/lambda$2$Type',288);gE(289,195,{},e4);_.Af=function f4(a){return true};var nz=Ocb(fvb,'AbstractConnector/FullStateChangeEvent',289);gE(365,154,zvb);var qz=Ocb(fvb,'AbstractSingleComponentContainerConnector',365);gE(213,366,Xxb);var sz=Ocb(fvb,'ClickEventHandler',213);gE(653,1,Nub,x4);_.ye=function A4(a){var b;b=zF(a.d);if(this.r){a.a=true;b==tub&&n4(this,a.d);return}switch(b){case uub:if(!a.a){r4(this,a.d);this.j&&(a.a=true)}break;case msb:case vub:if(!a.a){this.j&&(a.a=true);q4(this)}break;case 64:this.j&&(a.a=true);break;default:oqb(xqb((Icb(vz),vz.k)),'Non touch event:'+yj(a.d));a.a=true;}};_.a=0;_.c=0;_.e=0;_.f=0;_.j=false;_.k=0;_.n=0;_.o=0;_.r=false;var h4=false,i4;var vz=Ocb(fvb,'TouchScrollDelegate',653);gE(655,130,{},C4);_._c=function D4(a){return 1+$wnd.Math.pow(a-1,3)};_.ad=function E4(){var a;a=Vq(this.b-this.a.e);this.a.c-=a;p4(this.a);this.a.r=false};_.bd=function F4(){B4(this,1+$wnd.Math.pow(0,3));this.a.r=false;t4(this.a)};_.dd=function G4(a){B4(this,a)};_.b=0;_.c=0;var tz=Ocb(fvb,'TouchScrollDelegate/1',655);gE(654,1,Xwb,K4);_.te=function L4(a){s4(this.a,a)};_.b=false;var uz=Ocb(fvb,'TouchScrollDelegate/TouchScrollHandler',654);gE(395,1,Qub,M4);_.ue=function N4(a){var b;b=x1();if(!!this.a.c&&(!b||Zg(he(this.a.e),b)||mf((qK(),$doc.body),b))){this.a.c.focus();this.a.c=null}};var wz=Ocb(fvb,'VContextMenu/1',395);gE(393,137,{724:1,723:1,19:1,27:1,14:1,10:1,17:1,20:1,12:1,13:1},P4);_.Ne=function Q4(){(vL(),vL(),tL).Xe((jF(),this.Wc))};_.qe=function R4(a){vj(a.a)==27&&HM(this.a,false)};var xz=Ocb(fvb,'VContextMenu/CMenuBar',393);gE(394,1,Gub,S4);_.Jd=function T4(){nZ(this.a)};var yz=Ocb(fvb,'VContextMenu/lambda$0$Type',394);gE(397,1,{},U4);_.Re=function V4(a,b){oZ(this.a,a,b)};var zz=Ocb(fvb,'VContextMenu/lambda$1$Type',397);gE(396,1,Gub,W4);_.Jd=function X4(){pZ(this.a)};var Az=Ocb(fvb,'VContextMenu/lambda$2$Type',396);gE(117,143,qtb,Y4);_.vd=function Z4(a){Le(this,a);jF();if(AG((Fh(),a).type)==pub){m1(this);a.stopPropagation();return}};_.pd=function $4(a){(jF(),this.Wc).style[ltb]=a;a==null||a.length==0?Ae(this.Wc,$xb,true):Ae(this.Wc,$xb,false)};var Cz=Ocb(fvb,'VLabel',117);gE(90,1,{},a5);_.b=0;var Ez=Ocb(fvb,'VLazyExecutor',90);gE(400,44,{},b5);_.jd=function c5(){this.a.c=null;this.a.a.Jd()};var Dz=Ocb(fvb,'VLazyExecutor/1',400);gE(230,129,{19:1,707:1,27:1,14:1,10:1,721:1,60:1,17:1,31:1,20:1,12:1,13:1,230:1},d5);_.xd=function e5(){if(((jF(),this.Wc).ownerDocument.body.className||'').indexOf('v-generated-body')==-1){this.a=new i5(this);pb(this.a,ztb)}};_.ve=function f5(a){fG();nj($doc).clientWidth|0;nj($doc).clientHeight|0};_.yd=function g5(){if(this.a){ob(this.a);this.a=null}};_.Ad=function h5(a){Ah((jF(),this.Wc),a)};var Iz=Ocb(fvb,'VUI',230);gE(542,44,{},i5);_.jd=function j5(){fG();nj($doc).clientWidth|0;nj($doc).clientHeight|0;pb(this.a.a,ztb)};var Gz=Ocb(fvb,'VUI/1',542);gE(541,1,Gub,k5);_.Jd=function l5(){fG();nj($doc).clientWidth|0;nj($doc).clientHeight|0};var Hz=Ocb(fvb,'VUI/lambda$0$Type',541);gE(135,365,{27:1,99:1,120:1,135:1,3:1},t5);_.sf=function u5(){return !this.J&&(this.J=yP(this)),this.J};_.nf=function v5(){return !this.J&&(this.J=yP(this)),this.J};_.tf=function w5(){return q5(this)};_.vf=function x5(){return true};_.pf=function y5(a){var b;UP(this,a);if(a.Af(Uxb)){null.lg((!this.J&&(this.J=yP(this)),this.J).p.a);null.lg((!this.J&&(this.J=yP(this)),this.J).p.c);null.lg((!this.J&&(this.J=yP(this)),this.J).p.d);null.lg((!this.J&&(this.J=yP(this)),this.J).p.e);null.lg((!this.J&&(this.J=yP(this)),this.J).p.b)}if(a.Af(uxb)){null.lg((!this.J&&(this.J=yP(this)),this.J).b.a);null.lg((!this.J&&(this.J=yP(this)),this.J).b.b);null.lg((!this.J&&(this.J=yP(this)),this.J).b.c)}a.Af(Exb)&&n5(this);if(a.Af('pageState.title')){b=(!this.J&&(this.J=yP(this)),this.J).f.b;b!=null&&(fG(),$doc.title=b,undefined)}a.Af(Gxb)&&null.lg((!this.J&&(this.J=yP(this)),this.J).i.b!=(vbb(),tbb));a.Af(Kxb)&&null.lg();a.Af(Cxb)&&dN(this.C,(!this.J&&(this.J=yP(this)),this.J).e)};_.Ef=function z5(){var a,b,c,d;c=this.a;a=(!this.J&&(this.J=yP(this)),this.J).n;d=p5();b=p5();if(kcb(c,a)){if(a==null){return}!o5(d)?r5(this,null,a,null,b):rh(he((!this.B&&(this.B=PP(this)),this.B).Vc),a)||m5(this,a);return}oqb(xqb((Icb(Mz),Mz.k)),'Changing theme from '+c+' to '+a);r5(this,c,a,d,b)};_.Ff=function A5(){null.lg((!this.J&&(this.J=yP(this)),this.J).o)};var Mz=Ocb(ayb,'UIConnector',135);gE(367,213,Xxb,B5);var Lz=Ocb(ayb,'UIConnector/1',367);gE(368,44,{},C5);_.jd=function D5(){if(CP(this.a).g<0){ob(this.a.b);this.a.b=null;return}BP(this.a,LA).lg();null.lg()};var Jz=Ocb(ayb,'UIConnector/10',368);gE(369,1,{},E5);_.yf=function F5(a){vqb(xqb((Icb(Mz),Mz.k)),'Could not load theme from '+p5())};_.zf=function G5(a){oqb(xqb((Icb(Mz),Mz.k)),'Loading of '+this.b+' from '+this.c+' completed');!!this.d&&_g(Wg(this.d),this.d);m5(this.a,this.b)};var Kz=Ocb(ayb,'UIConnector/11',369);gE(359,1,{},H5);_.xf=function I5(a){var b;b=n0(a);if(b.indexOf(avb)!=-1){p0(he(this.a),this);le(this.a,avb)}};var Nz=Ocb(evb,'Overlay/1',359);gE(360,1,{},J5);_.xf=function K5(a){if(n0(a).indexOf(avb)!=-1){p0(he(this.a),this);KM(this.a,this.b)}};_.b=false;var Oz=Ocb(evb,'Overlay/2',360);gE(361,1,{},L5);_.xf=function M5(a){var b;b=n0(a);if(b.indexOf(bvb)!=-1){p0(he(this.a),this);le(this.a,avb);le(this.a,bvb);KM(this.a,this.b)}};_.b=false;var Pz=Ocb(evb,'Overlay/3',361);gE(357,1,{},P5);_.a=0;_.b=0;_.c=0;_.d=0;var Qz=Ocb(evb,'Overlay/PositionAndSize',357);gE(358,130,{},Q5);_.dd=function R5(a){JM(this.a,a)};var Rz=Ocb(evb,'Overlay/ResizeAnimation',358);gE(105,1,{},X5);_.Gf=function Y5(a){return kE(a)};var Tz=Ocb(byb,'Parser/10methodref$toString$Type',105);gE(309,1,{},Z5);_.Gf=function $5(a){return kE(a)};var Uz=Ocb(byb,'Parser/11methodref$toString$Type',309);gE(312,1,{},_5);_.Gf=function a6(a){return kE(a)};var Vz=Ocb(byb,'Parser/12methodref$toString$Type',312);gE(199,1,{},b6);_.Hf=function c6(){return new i0};var Wz=Ocb(byb,'Parser/2methodref$ctor$Type',199);gE(200,1,{},d6);_.Gf=function e6(a){return Edb(gdb(a))};var Xz=Ocb(byb,'Parser/3methodref$valueOf$Type',200);gE(201,1,{},f6);_.Gf=function g6(a){return kE(a)};var Yz=Ocb(byb,'Parser/4methodref$toString$Type',201);gE(202,1,{},h6);_.Gf=function i6(a){return Edb(gdb(a))};var Zz=Ocb(byb,'Parser/5methodref$valueOf$Type',202);gE(103,1,{},j6);_.Gf=function k6(a){return kE(a)};var $z=Ocb(byb,'Parser/6methodref$toString$Type',103);gE(155,1,{},l6);var _z=Ocb(byb,'Parser/7methodref$intValue$Type',155);gE(308,1,{},m6);var aA=Ocb(byb,'Parser/8methodref$doubleValue$Type',308);gE(104,1,{},n6);_.Gf=function o6(a){return kE(a)};var bA=Ocb(byb,'Parser/9methodref$toString$Type',104);gE(128,1,{},p6);_.Gf=function q6(a){return Rq(a)?lcb(a):fdb(kE(a))};var cA=Ocb(byb,'Parser/lambda$12$Type',128);gE(310,1,{},r6);_.Hf=function s6(){return new pP};var dA=Ocb(byb,'Parser/lambda$17$Type',310);gE(106,1,{},t6);_.Hf=function u6(){return new AN};var eA=Ocb(byb,'Parser/lambda$18$Type',106);gE(311,1,{},v6);_.Hf=function w6(){return new yY};var fA=Ocb(byb,'Parser/lambda$19$Type',311);gE(69,1,{},x6);_.Gf=function y6(a){return S5(this.a,a)};var gA=Ocb(byb,'Parser/lambda$20$Type',69);gE(313,1,{},z6);_.Gf=function A6(a){var b;return b=new tP,Object.assign(b,a),b};var hA=Ocb(byb,'Parser/lambda$22$Type',313);gE(203,1,{},B6);_.Gf=function C6(a){return Edb(Vq(Rq(a)?lcb(a):fdb(kE(a))))};var iA=Ocb(byb,'Parser/lambda$6$Type',203);gE(204,1,{},D6);_.Gf=function E6(a){return Edb(Vq(Rq(a)?lcb(a):fdb(kE(a))))};var jA=Ocb(byb,'Parser/lambda$7$Type',204);gE(205,1,{},F6);_.Gf=function G6(a){return Edb(Vq(Rq(a)?lcb(a):fdb(kE(a))))};var kA=Ocb(byb,'Parser/lambda$9$Type',205);gE(673,1,{},L6);_.addPopupButton=function M6(a){var b,c,d,e;d=V5(a);c=d.sheet+'_'+d.row+'_'+d.col;if(Bhb(this.c,c)){e=Ahb(this.c,c)}else{Dhb(this.a,c,b=new kQ);Dhb(this.c,c,e=(!b.B&&(b.B=new QQ),b.B));Dhb(this.b,c,d);jQ(b,this.e.g);GP(b,Rw,b.a);He((!b.B&&(b.B=new QQ),b.B),b,(gn(),gn(),fn));EQ((!b.B&&(b.B=new QQ),b.B),b);JQ(e,d.col);NQ(e,d.row);KQ(e,d.headerHidden);PQ(e,this.f.W,he(this.f.W));MQ(e,d.popupWidth);LQ(e,d.popupHeight)}GQ(e,d.active);vZ(this.f,e)};_.cellsUpdated=function N6(a){var b;b=aeb((Icb(Nx),Nx.k),vsb,'.');RY(AP(this.e,b).Ie().Te(),T5(a,new x6(new t6)))};_.closePopup=function O6(a,b){var c;c=Ahb(this.c,HZ(this.f)+'_'+a+'_'+b);!!c&&(HM(c.e,false),FQ(c))};_.disconnected=function P6(){!!this.e&&EY(this.e)};_.editCellComment=function Q6(a,b){p1((ng(),mg),new d9(this,a,b))};_.invalidCellAddress=function R6(){var a;a=aeb((Icb(Nx),Nx.k),vsb,'.');wO(QP(AP(this.e,a).Ie().Te().a).u)};_.layout=function S6(){D$(this.f);C$(QP(this.e))};_.load=function T6(){TZ(this.f)};_.notifyStateChanges=function U6(a,b){var c,d,e,f,g,h;h={};for(e=a,f=0,g=e.length;f<g;++f){d=e[f];h[d]=''}c=new R1(h,b);H6(this,this.e,c);DY(this.e,c)};_.onPopupButtonOpened=function V6(a,b,c,d){var e,f,g;e=$wnd.Vaadin&&$wnd.Vaadin.Flow&&$wnd.Vaadin.Flow.clients[d]&&$wnd.Vaadin.Flow.clients[d].getByNodeId(c);if(!e){return}f=new Y8(Hh((Fh(),e)));jF();if(f.Wc){g=Ahb(this.c,HZ(this.f)+'_'+a+'_'+b);g.e.M||!!g.d&&$U(g.d,g.b,g.k)&&HQ(g);g.c=f;vjb(g.f,f);bL(g.i,f)}};_.refreshCellStyles=function W6(){p1((ng(),mg),new b9(this))};_.relayout=function X6(){p1((ng(),mg),new Z8(this))};_.relayoutSheet=function Y6(){D$(this.f)};_.removePopupButton=function Z6(a){var b,c,d;d=V5(a);b=d.sheet+'_'+d.row+'_'+d.col;c=Ahb(this.c,b);if(c){F$(this.f,c);Fhb(this.c,b);Fhb(this.a,b);Fhb(this.b,b)}};_.resize=function $6(){O_(this.f)};_.setActionOnColumnHeaderCallback=function _6(a){I9(this.e.g,a)};_.setActionOnCurrentSelectionCallback=function a7(a){J9(this.e.g,a)};_.setActionOnRowHeaderCallback=function b7(a){K9(this.e.g,a)};_.setCellAddedToSelectionAndSelectedCallback=function c7(a){L9(this.e.g,a)};_.setCellCommentAuthors=function d7(a){CP(this.e).a=W5(a,new n6,new X5)};_.setCellComments=function e7(a){CP(this.e).b=W5(a,new n6,new X5)};_.setCellKeysToEditorIdMap=function f7(a){CP(this.e).c=W5(a,new n6,new X5)};_.setCellRangePaintedCallback=function g7(a){M9(this.e.g,a)};_.setCellRangeSelectedCallback=function h7(a){N9(this.e.g,a)};_.setCellSelectedCallback=function i7(a){O9(this.e.g,a)};_.setCellStyleToCSSStyle=function j7(a){CP(this.e).d=W5(a,new d6,new f6)};_.setCellValueEditedCallback=function k7(a){Q9(this.e.g,a)};_.setCellsAddedToRangeSelectionCallback=function l7(a){R9(this.e.g,a)};_.setClass=function m7(a){var b,c,d,e,f,g,h;for(d=this.d,f=0,h=d.length;f<h;++f){b=d[f];re(this.f,b,false)}this.d=a.length==0?Xp(tB,wsb,2,0,6,1):ceb(a,' ',0);for(c=this.d,e=0,g=c.length;e<g;++e){b=c[e];re(this.f,b,true)}};_.setClearSelectedCellsOnCutCallback=function n7(a){S9(this.e.g,a)};_.setColGroupingData=function o7(a){CP(this.e).e=T5(a,new x6(new b6))};_.setColGroupingInversed=function p7(a){CP(this.e).f=a};_.setColGroupingMax=function q7(a){CP(this.e).g=a};_.setColW=function r7(a){CP(this.e).i=Uqb(arb(new crb(null,new $ob(T5(a,new p6))),new l6))};_.setCols=function s7(a){CP(this.e).j=a};_.setColumnAddedToSelectionCallback=function t7(a){T9(this.e.g,a)};_.setColumnBufferSize=function u7(a){CP(this.e).k=a};_.setColumnHeaderContextMenuOpenCallback=function v7(a){U9(this.e.g,a)};_.setColumnIndexToStyleIndex=function w7(a){CP(this.e).n=W5(a,new h6,new B6)};_.setColumnResizedCallback=function x7(a){V9(this.e.g,a)};_.setColumnSelectedCallback=function y7(a){W9(this.e.g,a)};_.setComponentIDtoCellKeysMap=function z7(a){CP(this.e).o=W5(a,new n6,new X5)};_.setConditionalFormattingStyles=function A7(a){CP(this.e).p=W5(a,new d6,new f6)};_.setContextMenuOpenOnSelectionCallback=function B7(a){X9(this.e.g,a)};_.setDefColW=function C7(a){CP(this.e).q=a};_.setDefRowH=function D7(a){CP(this.e).r=a};_.setDeleteSelectedCellsCallback=function E7(a){Y9(this.e.g,a)};_.setDisplayGridlines=function F7(a){CP(this.e).s=a};_.setDisplayRowColHeadings=function G7(a){CP(this.e).t=a};_.setGroupingCollapsedCallback=function H7(a){$9(this.e.g,a)};_.setHasActions=function I7(a){CP(this.e).u=a};_.setHeight=function J7(a){CP(this.e).jb=a};_.setHiddenColumnIndexes=function K7(a){CP(this.e).v=T5(a,new F6)};_.setHiddenRowIndexes=function L7(a){CP(this.e).w=T5(a,new F6)};_.setHorizontalScrollPositions=function M7(a){CP(this.e).A=Uqb(arb(new crb(null,new $ob(T5(a,new p6))),new l6))};_.setHorizontalSplitPosition=function N7(a){CP(this.e).B=a};_.setHyperlinksTooltips=function O7(a){CP(this.e).C=W5(a,new n6,new X5)};_.setId=function P7(a){CP(this.e).kb=a};_.setInfoLabelValue=function Q7(a){CP(this.e).D=a};_.setInvalidFormulaCells=function R7(a){CP(this.e).F=new dnb(T5(a,new Z5))};_.setInvalidFormulaErrorMessage=function S7(a){CP(this.e).G=a};_.setLevelHeaderClickedCallback=function T7(a){_9(this.e.g,a)};_.setLinkCellClickedCallback=function U7(a){aab(this.e.g,a)};_.setLockFormatColumns=function V7(a){CP(this.e).H=a};_.setLockFormatRows=function W7(a){CP(this.e).I=a};_.setLockedColumnIndexes=function X7(a){CP(this.e).J=new dnb(T5(a,new D6))};_.setLockedRowIndexes=function Y7(a){CP(this.e).K=new dnb(T5(a,new D6))};_.setMergedRegions=function Z7(a){CP(this.e).L=T5(a,new x6(new r6))};_.setNamedRanges=function $7(a){CP(this.e).M=T5(a,new j6)};_.setOnColumnAutofitCallback=function _7(a){bab(this.e.g,a)};_.setOnConnectorInitCallback=function a8(a){cab(this.e.g,a)};_.setOnPasteCallback=function b8(a){dab(this.e.g,a)};_.setOnRedoCallback=function c8(a){eab(this.e.g,a)};_.setOnRowAutofitCallback=function d8(a){fab(this.e.g,a)};_.setOnSheetScrollCallback=function e8(a){gab(this.e.g,a)};_.setOnUndoCallback=function f8(a){hab(this.e.g,a)};_.setOverlays=function g8(a){CP(this.e).N=W5(a,new _5,new z6)};_.setPopupButtonClickCallback=function h8(a){iab(this.e.g,a)};_.setPopupCloseCallback=function i8(a){jab(this.e.g,a)};_.setProtectedCellWriteAttemptedCallback=function j8(a){kab(this.e.g,a)};_.setReload=function k8(a){CP(this.e).O=true};_.setResources=function l8(a,b){var c;c=T5(b,new j6);xjb(c,new _8(this,a))};_.setRowAddedToRangeSelectionCallback=function m8(a){lab(this.e.g,a)};_.setRowBufferSize=function n8(a){CP(this.e).P=a};_.setRowGroupingData=function o8(a){CP(this.e).Q=T5(a,new x6(new b6))};_.setRowGroupingInversed=function p8(a){CP(this.e).R=a};_.setRowGroupingMax=function q8(a){CP(this.e).S=a};_.setRowH=function r8(a){CP(this.e).T=U5(a)};_.setRowHeaderContextMenuOpenCallback=function s8(a){mab(this.e.g,a)};_.setRowIndexToStyleIndex=function t8(a){CP(this.e).U=W5(a,new h6,new B6)};_.setRowSelectedCallback=function u8(a){nab(this.e.g,a)};_.setRows=function v8(a){CP(this.e).V=a};_.setRowsResizedCallback=function w8(a){oab(this.e.g,a)};_.setSelectedCellAndRange=function x8(a,b,c,d,e,f,g,h){var i;i=aeb((Icb(Nx),Nx.k),vsb,'.');TY(AP(this.e,i).Ie().Te(),a,b,c,d,e,f,g,h)};_.setSelectionDecreasePaintedCallback=function y8(a){pab(this.e.g,a)};_.setSelectionIncreasePaintedCallback=function z8(a){qab(this.e.g,a)};_.setSetCellStyleWidthRatiosCallback=function A8(a){rab(this.e.g,a)};_.setSheetAddressChangedCallback=function B8(a){sab(this.e.g,a)};_.setSheetCreatedCallback=function C8(a){tab(this.e.g,a)};_.setSheetIndex=function D8(a){CP(this.e).W=a};_.setSheetNames=function E8(a){CP(this.e).X=Djb(T5(a,new j6),Xp(tB,wsb,2,0,6,1))};_.setSheetProtected=function F8(a){CP(this.e).Y=a};_.setSheetRenamedCallback=function G8(a){uab(this.e.g,a)};_.setSheetSelectedCallback=function H8(a){vab(this.e.g,a)};_.setShiftedCellBorderStyles=function I8(a){CP(this.e).Z=T5(a,new j6)};_.setUpdateCellCommentCallback=function J8(a){wab(this.e.g,a)};_.setVerticalScrollPositions=function K8(a){CP(this.e).$=Uqb(arb(new crb(null,new $ob(T5(a,new p6))),new l6))};_.setVerticalSplitPosition=function L8(a){CP(this.e)._=a};_.setVisibleCellComments=function M8(a){CP(this.e).ab=T5(a,new j6)};_.setWidth=function N8(a){CP(this.e).nb=a};_.setWorkbookChangeToggle=function O8(a){CP(this.e).bb=a};_.setWorkbookProtected=function P8(a){CP(this.e).cb=a};_.showActions=function Q8(a){var b;b=aeb((Icb(Nx),Nx.k),vsb,'.');UY(AP(this.e,b).Ie().Te(),T5(a,new x6(new v6)))};_.showSelectedCell=function R8(a,b,c,d,e,f,g){var h;h=aeb((Icb(Nx),Nx.k),vsb,'.');VY(AP(this.e,h).Ie().Te(),a,b,c,d,e,f,g)};_.updateBottomLeftCellValues=function S8(a){var b;b=aeb((Icb(Nx),Nx.k),vsb,'.');WY(AP(this.e,b).Ie().Te(),T5(a,new x6(new t6)))};_.updateBottomRightCellValues=function T8(a){var b;b=aeb((Icb(Nx),Nx.k),vsb,'.');XY(AP(this.e,b).Ie().Te(),T5(a,new x6(new t6)))};_.updateCellsAndRefreshCellStyles=function U8(){};_.updateFormulaBar=function V8(a,b,c){var d;d=aeb((Icb(Nx),Nx.k),vsb,'.');YY(AP(this.e,d).Ie().Te(),a,b,c)};_.updateTopLeftCellValues=function W8(a){var b;b=aeb((Icb(Nx),Nx.k),vsb,'.');ZY(AP(this.e,b).Ie().Te(),T5(a,new x6(new t6)))};_.updateTopRightCellValues=function X8(a){var b;b=aeb((Icb(Nx),Nx.k),vsb,'.');$Y(AP(this.e,b).Ie().Te(),T5(a,new x6(new t6)))};var qA=Ocb(byb,'SpreadsheetJsApi',673);gE(267,13,qtb,Y8);var lA=Ocb(byb,'SpreadsheetJsApi/ContentWidget',267);gE(268,1,Gub,Z8);_.Jd=function $8(){D$(this.a.f)};var mA=Ocb(byb,'SpreadsheetJsApi/lambda$0$Type',268);gE(269,1,{},_8);_.If=function a9(a){J6(this.a,this.b,a)};var nA=Ocb(byb,'SpreadsheetJsApi/lambda$1$Type',269);gE(270,1,Gub,b9);_.Jd=function c9(){GV(QP(I6(this.a).a).W)};var oA=Ocb(byb,'SpreadsheetJsApi/lambda$2$Type',270);gE(271,1,Gub,d9);_.Jd=function e9(){K6(this.a,this.b,this.c)};_.b=0;_.c=0;var pA=Ocb(byb,'SpreadsheetJsApi/lambda$3$Type',271);gE(193,1,{713:1,3:1},Cab);_.kf=function Fab(a,b,c){Z9(this,a,b,c)};var tA=Ocb(byb,'SpreadsheetServerRpcImpl',193);gE(272,1,{},Hab);_.Jf=function Iab(a,b){Dab(this.a,a,b)};var rA=Ocb(byb,'SpreadsheetServerRpcImpl/lambda$0$Type',272);gE(273,1,{},Jab);_.Jf=function Kab(a,b){Eab(this.a,a,b)};var sA=Ocb(byb,'SpreadsheetServerRpcImpl/lambda$1$Type',273);gE(658,1,esb,Wab);_.$c=function Xab(){return Jj(this.b)+','+this.c+','+this.d+','+this.a+','+this.e+','+this.f+','+this.j+','+this.k+','+this.g+','+this.i};_.a=false;_.c=0;_.d=0;_.e=false;_.f=false;_.g=-1;_.i=-1;_.j=false;_.k=0;var yA=Ocb(wvb,'MouseEventDetails',658);gE(119,4,{119:1,3:1,6:1,4:1},abb);var Yab,Zab,$ab;var xA=Pcb(wvb,'MouseEventDetails/MouseButton',119,bbb);gE(553,1,esb,lbb);_.a=-1;_.b=-1;_.c=-1;_.e=false;_.f=false;_.g=false;_.i=false;_.j=false;_.k=false;_.n=false;_.o=false;_.p=false;_.q=false;_.r=false;_.s=false;_.t=0;_.u=-1;_.v=-1;var zA=Ocb(wvb,'VBrowserDetails',553);var mbb;gE(172,1,{172:1,3:1},obb);_.Xc=function pbb(a){var b;if(!Oq(a,172)){return false}b=a;if(!kcb(this.a,b.a)){return false}if(!kcb(this.b,b.b)){return false}if(!kcb(this.c,b.c)){return false}if(!kcb(this.d,b.d)){return false}return true};_.Zc=function qbb(){var a;a=1;a=31*a+(this.a==null?0:$rb(this.a));a=31*a+(this.b==null?0:$rb(this.b));a=31*a+(this.c==null?0:$rb(this.c));a=31*a+fkb(this.d);return a};_.$c=function rbb(){return this.a+':'+this.b+'.'+this.c+'('+ssb+')'};var AA=Ocb(Bvb,'MethodInvocation',172);gE(115,4,{115:1,3:1,6:1,4:1},wbb);var sbb,tbb,ubb;var BA=Pcb(Bvb,'PushMode',115,xbb);gE(411,67,Cvb);var EA=Ocb(Lwb,'AbstractSingleComponentContainerState',411);gE(110,4,{110:1,3:1,6:1,4:1},Fbb);var Bbb,Cbb,Dbb;var FA=Pcb(Lwb,'ContentMode',110,Gbb);gE(77,4,{77:1,3:1,6:1,4:1},Nbb);var Hbb,Ibb,Jbb,Kbb,Lbb;var GA=Pcb(Lwb,'ErrorLevel',77,Obb);gE(141,4,{141:1,3:1,6:1,4:1},Sbb);var Pbb,Qbb;var IA=Pcb(Eyb,'NotificationRole',141,Tbb);gE(229,1,esb,Ubb);_.a=false;_.b=null;var JA=Ocb(Eyb,'PageState',229);gE(98,4,{98:1,3:1,6:1,4:1},$bb);var Vbb,Wbb,Xbb,Ybb;var KA=Pcb(Eyb,'Transport',98,_bb);gE(165,411,{67:1,75:1,165:1,3:1},acb);_.a=false;_.e='This content is announced automatically and does not need to be navigated into.';_.g=-1;_.k=0;_.o=true;var TA=Ocb(Eyb,'UIState',165);gE(222,1,esb,bcb);_.a=300;_.b=1500;_.c=5000;var MA=Ocb(Eyb,'UIState/LoadingIndicatorConfigurationState',222);gE(412,1,esb,ccb);_.d=0;_.n=false;var NA=Ocb(Eyb,'UIState/LocaleData',412);gE(226,1,esb,dcb);var OA=Ocb(Eyb,'UIState/LocaleServiceState',226);gE(92,1,esb,fcb,gcb);var PA=Ocb(Eyb,'UIState/NotificationTypeConfiguration',92);gE(224,1,esb,hcb);_.a=false;_.d=null;var QA=Ocb(Eyb,'UIState/PushConfigurationState',224);gE(225,1,esb,icb);_.a=400;_.b=false;_.c='Server connection lost, trying to reconnect...';_.d='Server connection lost.';_.e=10000;_.f=5000;var RA=Ocb(Eyb,'UIState/ReconnectDialogConfigurationState',225);gE(223,1,esb,jcb);_.a=300;_.b=500;_.c=750;_.d=100;_.e=ztb;var SA=Ocb(Eyb,'UIState/TooltipConfigurationState',223);gE(409,24,psb,pcb);var UA=Ocb('elemental.json','JsonException',409);gE(123,1,{182:1});_.$c=function scb(){return this.a};var YA=Ocb(Lsb,'AbstractStringBuilder',123);gE(58,24,psb,tcb);var ZA=Ocb(Lsb,'ArithmeticException',58);var Ecb,Fcb;gE(126,88,{3:1,6:1,126:1,88:1},kdb);_.ge=function ldb(a){return jdb(this.a,a.a)};_.Xc=function mdb(a){return Oq(a,126)&&hdb(this.a,a.a)};_.Zc=function ndb(){return Vq(this.a)};_.$c=function pdb(){return ''+this.a};_.a=0;var eB=Ocb(Lsb,'Float',126);var Fdb;gE(46,68,{3:1,21:1,46:1,24:1,18:1},Mdb);var lB=Ocb(Lsb,'NumberFormatException',46);gE(74,1,{3:1,74:1},Ndb);_.Xc=function Odb(a){var b;if(Oq(a,74)){b=a;return this.c==b.c&&this.d==b.d&&this.a==b.a&&this.b==b.b}return false};_.Zc=function Pdb(){return fkb($p(Vp(nB,1),esb,1,5,[Edb(this.c),this.a,this.d,this.b]))};_.$c=function Qdb(){return this.a+'.'+this.d+'('+(this.b!=null?this.b:'Unknown Source')+(this.c>=0?':'+this.c:'')+')'};_.c=0;var pB=Ocb(Lsb,'StackTraceElement',74);gE(257,123,{182:1},neb);var qB=Ocb(Lsb,'StringBuffer',257);gE(30,123,{182:1},ueb,veb,web);var rB=Ocb(Lsb,'StringBuilder',30);gE(817,1,{});var yeb;gE(36,88,{3:1,6:1,88:1,36:1},Yeb,Zeb,$eb,_eb);_.ge=function cfb(a){return Qeb(this,a)};_.Xc=function dfb(a){var b;if(this===a){return true}if(Oq(a,36)){b=a;return this.e==b.e&&Qeb(this,b)==0}return false};_.Zc=function efb(){var a;if(this.b!=0){return this.b}if(this.a<54){a=JD(this.f);this.b=YD(ED(a,-1));this.b=33*this.b+YD(ED(TD(a,32),-1));this.b=17*this.b+Vq(this.e);return this.b}this.b=17*Bfb(this.c)+Vq(this.e);return this.b};_.$c=function gfb(){return Xeb(this)};_.a=0;_.b=0;_.d=0;_.e=0;_.f=0;var Geb,Heb,Ieb,Jeb,Keb,Leb,Meb,Neb,Oeb;var xB=Ocb('java.math','BigDecimal',36);gE(11,88,{3:1,6:1,88:1,11:1},Jfb,Kfb,Lfb,Mfb,Nfb,Ofb);_.ge=function Qfb(a){return rfb(this,a)};_.Xc=function Rfb(a){return wfb(this,a)};_.Zc=function Tfb(){return Bfb(this)};_.$c=function Vfb(){return igb(this,0)};_.b=-2;_.c=0;_.d=0;_.e=0;var kfb,lfb,mfb,nfb,ofb,pfb;var yB=Ocb('java.math','BigInteger',11);var dgb,egb;var zgb,Agb,Bgb;gE(156,683,{148:1});_.clear=function Ihb(){Ghb(this)};_.containsKey=function Jhb(a){return xhb(this,a)};_.containsValue=function Khb(a){return yhb(a,this.b)||yhb(a,this.a)};_.Sf=function Lhb(){return new Uhb(this)};_.get=function Mhb(a){return zhb(this,a)};_.put=function Nhb(a,b){return Chb(this,a,b)};_.remove=function Ohb(a){return Ehb(this,a)};_.size=function Phb(){return Hhb(this)};var CB=Ocb(Osb,'AbstractHashMap',156);gE(47,684,Asb,Uhb);_.clear=function Vhb(){Ghb(this.a)};_.contains=function Whb(a){return Thb(this,a)};_.Ie=function Xhb(){return new aib(this.a)};_.remove=function Yhb(a){var b;if(Thb(this,a)){b=a.$f();Ehb(this.a,b);return true}return false};_.size=function Zhb(){return Hhb(this.a)};var BB=Ocb(Osb,'AbstractHashMap/EntrySet',47);gE(48,1,{},aib);_.Te=function cib(){return _hb(this)};_.Se=function bib(){return this.b};_.Ue=function dib(){Qrb(!!this.c);Kmb(this.e,this);this.c.Ue();this.c=null;this.b=$hb(this);Lmb(this.e,this)};_.b=false;var AB=Ocb(Osb,'AbstractHashMap/EntrySetIterator',48);gE(695,1,Bsb);_.Xc=function kjb(a){var b;if(!Oq(a,100)){return false}b=a;return sob(this.b.value[0],b.$f())&&sob(Onb(this),b._f())};_.Zc=function ljb(){return tob(this.b.value[0])^tob(Onb(this))};_.$c=function mjb(){return this.b.value[0]+'='+Onb(this)};var NB=Ocb(Osb,'AbstractMapEntry',695);gE(686,682,zsb);_.addAtIndex=function njb(a,b){var c;c=this.Uf(a);c.Wf(b)};_.addAllAtIndex=function ojb(a,b){var c,d,e,f;Mrb(b);f=false;e=this.Uf(a);for(d=b.Ie();d.Se();){c=d.Te();e.Wf(c);f=true}return f};_.getAtIndex=function pjb(b){var c;c=this.Uf(b);try{return c.Te()}catch(a){a=BD(a);if(Oq(a,66)){throw CD(new vcb("Can't get element "+b))}else throw CD(a)}};_.Ie=function qjb(){return this.Uf(0)};_.removeAtIndex=function rjb(b){var c,d;c=this.Uf(b);try{d=c.Te();c.Ue();return d}catch(a){a=BD(a);if(Oq(a,66)){throw CD(new vcb("Can't remove element "+b))}else throw CD(a)}};_.setAtIndex=function sjb(b,c){var d,e;d=this.Uf(b);try{e=d.Te();d.Zf(c);return e}catch(a){a=BD(a);if(Oq(a,66)){throw CD(new vcb("Can't set element "+b))}else throw CD(a)}};var PB=Ocb(Osb,'AbstractSequentialList',686);gE(127,682,Csb,okb);_.contains=function pkb(a){return eib(this,a)!=-1};_.getAtIndex=function qkb(a){return Lrb(a,this.a.length),this.a[a]};_.setAtIndex=function rkb(a,b){var c;c=(Lrb(a,this.a.length),this.a[a]);this.a[a]=b;return c};_.size=function skb(){return this.a.length};_.toArray=function tkb(){return nkb(this,Xp(nB,esb,1,this.a.length,5,1))};_.Rf=function ukb(a){return nkb(this,a)};var TB=Ocb(Osb,'Arrays/ArrayList',127);gE(160,1,{38:1},dlb);_.add=function elb(a){throw CD(new Eeb)};_.addAll=function flb(a){throw CD(new Eeb)};_.clear=function glb(){throw CD(new Eeb)};_.contains=function hlb(a){return this.b.contains(a)};_.containsAll=function ilb(a){return this.b.containsAll(a)};_.isEmpty=function jlb(){return this.b.isEmpty()};_.Ie=function klb(){return new tlb(this.b.Ie())};_.remove=function llb(a){throw CD(new Eeb)};_.removeAll=function mlb(a){throw CD(new Eeb)};_.retainAll=function nlb(a){throw CD(new Eeb)};_.size=function olb(){return this.b.size()};_.toArray=function plb(){return this.b.toArray()};_.Rf=function qlb(a){return this.b.Rf(a)};_.$c=function rlb(){return kE(this.b)};var ZB=Ocb(Osb,'Collections/UnmodifiableCollection',160);gE(162,1,{},tlb);_.Se=function ulb(){return this.b.Se()};_.Te=function vlb(){return this.b.Te()};_.Ue=function wlb(){slb()};var YB=Ocb(Osb,'Collections/UnmodifiableCollectionIterator',162);gE(161,160,zsb,xlb);_.addAtIndex=function ylb(a,b){throw CD(new Eeb)};_.addAllAtIndex=function zlb(a,b){throw CD(new Eeb)};_.Xc=function Alb(a){return M(this.a,a)};_.getAtIndex=function Blb(a){return this.a.getAtIndex(a)};_.Zc=function Clb(){return Q(this.a)};_.indexOf=function Dlb(a){return this.a.indexOf(a)};_.isEmpty=function Elb(){return this.a.isEmpty()};_.lastIndexOf=function Flb(a){return this.a.lastIndexOf(a)};_.Tf=function Glb(){return new Llb(this.a.Uf(0))};_.Uf=function Hlb(a){return new Llb(this.a.Uf(a))};_.removeAtIndex=function Ilb(a){throw CD(new Eeb)};_.setAtIndex=function Jlb(a,b){throw CD(new Eeb)};_.subList=function Klb(a,b){return new xlb(this.a.subList(a,b))};var _B=Ocb(Osb,'Collections/UnmodifiableList',161);gE(221,162,{},Llb);_.Ue=function Plb(){slb()};_.Wf=function Mlb(a){throw CD(new Eeb)};_.Xf=function Nlb(){return this.a.Xf()};_.Yf=function Olb(){return this.a.Yf()};_.Zf=function Qlb(a){throw CD(new Eeb)};var $B=Ocb(Osb,'Collections/UnmodifiableListIterator',221);gE(384,1,{148:1},Slb);_.getOrDefault=function Zlb(a,b){var c;return c=this.c.get(a),c==null&&!this.c.containsKey(a)?b:c};_.putIfAbsent=function dmb(a,b){var c;return c=this.c.get(a),c!=null?c:Rlb()};_.replace=function fmb(a,b){return this.c.containsKey(a)?Rlb():null};_.clear=function Tlb(){throw CD(new Eeb)};_.containsKey=function Ulb(a){return this.c.containsKey(a)};_.containsValue=function Vlb(a){return this.c.containsValue(a)};_.Sf=function Wlb(){!this.a&&(this.a=new nmb(this.c.Sf()));return this.a};_.Xc=function Xlb(a){return M(this.c,a)};_.get=function Ylb(a){return this.c.get(a)};_.Zc=function $lb(){return Q(this.c)};_.isEmpty=function _lb(){return this.c.isEmpty()};_.keySet=function amb(){!this.b&&(this.b=new jmb(this.c.keySet()));return this.b};_.put=function bmb(a,b){return Rlb()};_.putAll=function cmb(a){throw CD(new Eeb)};_.remove=function emb(a){throw CD(new Eeb)};_.size=function gmb(){return this.c.size()};_.$c=function hmb(){return kE(this.c)};_.values=function imb(){!this.d&&(this.d=new dlb(this.c.values()));return this.d};var dC=Ocb(Osb,'Collections/UnmodifiableMap',384);gE(219,160,Asb,jmb);_.Xc=function kmb(a){return M(this.b,a)};_.Zc=function lmb(){return Q(this.b)};var fC=Ocb(Osb,'Collections/UnmodifiableSet',219);gE(385,219,Asb,nmb);_.contains=function omb(a){return this.b.contains(a)};_.containsAll=function pmb(a){return this.b.containsAll(a)};_.Ie=function qmb(){var a;a=this.b.Ie();return new tmb(a)};_.toArray=function rmb(){var a;a=this.b.toArray();mmb(a,a.length);return a};_.Rf=function smb(a){var b;b=this.b.Rf(a);mmb(b,this.b.size());return b};var cC=Ocb(Osb,'Collections/UnmodifiableMap/UnmodifiableEntrySet',385);gE(387,1,{},tmb);_.Te=function vmb(){return new xmb(this.a.Te())};_.Se=function umb(){return this.a.Se()};_.Ue=function wmb(){throw CD(new Eeb)};var aC=Ocb(Osb,'Collections/UnmodifiableMap/UnmodifiableEntrySet/1',387);gE(220,1,Bsb,xmb);_.Xc=function ymb(a){return this.a.Xc(a)};_.$f=function zmb(){return this.a.$f()};_._f=function Amb(){return this.a._f()};_.Zc=function Bmb(){return this.a.Zc()};_.ag=function Cmb(a){throw CD(new Eeb)};_.$c=function Dmb(){return kE(this.a)};var bC=Ocb(Osb,'Collections/UnmodifiableMap/UnmodifiableEntrySet/UnmodifiableEntry',220);gE(386,161,{38:1,80:1,178:1},Emb);var eC=Ocb(Osb,'Collections/UnmodifiableRandomAccessList',386);var Fmb;gE(652,1,esb,Imb);_.Xc=function Jmb(a){return this===a};var gC=Ocb(Osb,'Comparators/NaturalOrderComparator',652);gE(649,24,psb,Nmb);var hC=Ocb(Osb,'ConcurrentModificationException',649);gE(176,1,{3:1,6:1,176:1},Pmb);_.ge=function Qmb(a){return Hdb(JD(this.a.getTime()),JD(a.a.getTime()))};_.Xc=function Rmb(a){return Oq(a,176)&&ID(JD(this.a.getTime()),JD(a.a.getTime()))};_.Zc=function Smb(){var a;a=JD(this.a.getTime());return YD($D(a,UD(a,32)))};_.$c=function Umb(){return Omb(this)};var iC=Ocb(Osb,'Date',176);var Vmb,Wmb;gE(26,156,Dsb,Zmb,$mb);var jC=Ocb(Osb,'HashMap',26);gE(35,684,Esb,cnb,dnb);_.add=function enb(a){return _mb(this,a)};_.clear=function fnb(){Ghb(this.a)};_.contains=function gnb(a){return anb(this,a)};_.isEmpty=function hnb(){return Hhb(this.a)==0};_.Ie=function inb(){var a;return a=(new Lib(this.a)).a.Sf().Ie(),new Rib(a)};_.remove=function jnb(a){return bnb(this,a)};_.size=function knb(){return Hhb(this.a)};var kC=Ocb(Osb,'HashSet',35);gE(476,1,{},qnb);_.Ie=function rnb(){return new snb(this)};_.c=0;var mC=Ocb(Osb,'InternalHashCodeMap',476);gE(228,1,{},snb);_.Te=function unb(){return this.d=this.a[this.c++],this.d};_.Se=function tnb(){var a;if(this.c<this.a.length){return true}a=this.b.next();if(!a.done){this.a=a.value[1];this.c=0;return true}return false};_.Ue=function vnb(){pnb(this.e,this.d.$f());this.c!=0&&--this.c};_.c=0;_.d=null;var lC=Ocb(Osb,'InternalHashCodeMap/1',228);var ynb;gE(474,1,{},Inb);_.Ie=function Jnb(){return new Knb(this)};_.c=0;_.d=0;var pC=Ocb(Osb,'InternalStringMap',474);gE(227,1,{},Knb);_.Te=function Mnb(){return this.c=this.a,this.a=this.b.next(),new Pnb(this.d,this.c,this.d.d)};_.Se=function Lnb(){return !this.a.done};_.Ue=function Nnb(){Hnb(this.d,this.c.value[0])};var nC=Ocb(Osb,'InternalStringMap/1',227);gE(475,695,Bsb,Pnb);_.$f=function Qnb(){return this.b.value[0]};_._f=function Rnb(){return Onb(this)};_.ag=function Snb(a){return Gnb(this.a,this.b.value[0],a)};_.c=0;var oC=Ocb(Osb,'InternalStringMap/2',475);gE(264,686,{3:1,38:1,80:1},Xnb);_.add=function Ynb(a){Unb(this,a,this.c.b,this.c);return true};_.clear=function Znb(){Wnb(this)};_.Uf=function $nb(a){var b,c;Orb(a,this.b);if(a>=this.b>>1){c=this.c;for(b=this.b;b>a;--b){c=c.b}}else{c=this.a.a;for(b=0;b<a;++b){c=c.a}}return new aob(this,a,c)};_.size=function _nb(){return this.b};_.b=0;var sC=Ocb(Osb,'LinkedList',264);gE(388,1,{},aob);_.Wf=function bob(a){Unb(this.d,a,this.b.b,this.b);++this.a;this.c=null};_.Se=function cob(){return this.b!=this.d.c};_.Xf=function dob(){return this.b.b!=this.d.a};_.Te=function eob(){Krb(this.b!=this.d.c);this.c=this.b;this.b=this.b.a;++this.a;return this.c.c};_.Yf=function fob(){Krb(this.b.b!=this.d.a);this.c=this.b=this.b.b;--this.a;return this.c.c};_.Ue=function gob(){var a;Qrb(!!this.c);a=this.c.a;Vnb(this.d,this.c);this.b==this.c?(this.b=a):--this.a;this.c=null};_.Zf=function hob(a){Qrb(!!this.c);this.c.c=a};_.a=0;_.c=null;var qC=Ocb(Osb,'LinkedList/ListIteratorImpl',388);gE(163,1,{},iob);var rC=Ocb(Osb,'LinkedList/Node',163);gE(662,1,{});var job,kob;var wC=Ocb(Osb,'Locale',662);gE(258,662,{},mob);_.$c=function nob(){return ''};var uC=Ocb(Osb,'Locale/1',258);gE(259,662,{},oob);_.$c=function pob(){return 'unknown'};var vC=Ocb(Osb,'Locale/4',259);gE(184,1,{149:1},vob);_.fg=function wob(a){this.a.If(a)};var AC=Ocb(Osb,'Spliterator/OfDouble/0methodref$accept$Type',184);gE(185,1,{149:1},xob);_.fg=function yob(a){zrb(this.a,a)};var BC=Ocb(Osb,'Spliterator/OfDouble/1methodref$accept$Type',185);gE(186,1,{150:1},zob);_.gg=function Aob(a){this.a.If(Edb(a))};var CC=Ocb(Osb,'Spliterator/OfInt/2methodref$accept$Type',186);gE(187,1,{150:1},Bob);_.gg=function Cob(a){zrb(this.a,Edb(a))};var DC=Ocb(Osb,'Spliterator/OfInt/3methodref$accept$Type',187);gE(252,151,{});_.dg=function Kob(a){Dob(this,new xob(a))};_.eg=function Lob(a){return Oq(a,149)?frb(this,a):frb(this,new vob(a))};var EC=Ocb(Osb,'Spliterators/AbstractDoubleSpliterator',252);gE(253,151,{});_.dg=function Nob(a){Dob(this,new Bob(a))};_.eg=function Oob(a){return Oq(a,150)?krb(this,a):krb(this,new zob(a))};var FC=Ocb(Osb,'Spliterators/AbstractIntSpliterator',253);gE(122,1,{},$ob);_.bg=function _ob(){return this.a};_.cg=function apb(){Zob(this);return this.c};_.dg=function bpb(a){Zob(this);Tnb(this.d,a)};_.eg=function cpb(a){Mrb(a);Zob(this);if(Zjb(this.d)){a.If($jb(this.d));return true}return false};_.a=0;_.c=0;var KC=Ocb(Osb,'Spliterators/IteratorSpliterator',122);gE(197,1,{},epb);_.$c=function fpb(){return !this.a?this.c:this.e.length==0?this.a.a:this.a.a+(''+this.e)};var LC=Ocb(Osb,'StringJoiner',197);gE(697,1,esb);_.Mf=function spb(){return 'DUMMY'};_.Qf=function tpb(){return -1};_.$c=function vpb(){return this.Mf()};var ipb,jpb,kpb,lpb,mpb,npb,opb,ppb,qpb;var YC=Ocb(jub,'Level',697);gE(509,697,esb,wpb);_.Mf=function xpb(){return 'ALL'};_.Qf=function ypb(){return tsb};var PC=Ocb(jub,'Level/LevelAll',509);gE(510,697,esb,zpb);_.Mf=function Apb(){return 'CONFIG'};_.Qf=function Bpb(){return 700};var QC=Ocb(jub,'Level/LevelConfig',510);gE(511,697,esb,Cpb);_.Mf=function Dpb(){return 'FINE'};_.Qf=function Epb(){return 500};var RC=Ocb(jub,'Level/LevelFine',511);gE(512,697,esb,Fpb);_.Mf=function Gpb(){return 'FINER'};_.Qf=function Hpb(){return 400};var SC=Ocb(jub,'Level/LevelFiner',512);gE(513,697,esb,Ipb);_.Mf=function Jpb(){return 'FINEST'};_.Qf=function Kpb(){return 300};var TC=Ocb(jub,'Level/LevelFinest',513);gE(514,697,esb,Lpb);_.Mf=function Mpb(){return 'INFO'};_.Qf=function Npb(){return 800};var UC=Ocb(jub,'Level/LevelInfo',514);gE(515,697,esb,Opb);_.Mf=function Ppb(){return 'OFF'};_.Qf=function Qpb(){return jsb};var VC=Ocb(jub,'Level/LevelOff',515);gE(516,697,esb,Rpb);_.Mf=function Spb(){return 'SEVERE'};_.Qf=function Tpb(){return ztb};var WC=Ocb(jub,'Level/LevelSevere',516);gE(517,697,esb,Upb);_.Mf=function Vpb(){return Dyb};_.Qf=function Wpb(){return 900};var XC=Ocb(jub,'Level/LevelWarning',517);gE(534,1,{},$pb);var Xpb;var ZC=Ocb(jub,'LogManager',534);gE(630,1,esb,bqb);_.b='';_.c=0;_.e=null;var $C=Ocb(jub,'LogRecord',630);gE(136,1,{136:1},wqb);_.e=false;var cqb=false,dqb=false,eqb=false,fqb=false,gqb=false;var _C=Ocb(jub,'Logger',136);gE(556,168,{},Qqb);var gD=Ocb(Psb,'DoubleStreamImpl',556);gE(557,1,{149:1},Sqb);_.fg=function Tqb(a){Rqb(this.a,a)};var fD=Ocb(Psb,'DoubleStreamImpl/lambda$0$Type',557);gE(554,168,{},Vqb);var iD=Ocb(Psb,'IntStreamImpl',554);gE(555,1,{150:1},Xqb);_.gg=function Yqb(a){Wqb(this.a,a)};var hD=Ocb(Psb,'IntStreamImpl/lambda$6$Type',555);gE(526,252,{},grb);_.hg=function hrb(a){return frb(this,a)};var kD=Ocb(Psb,'StreamImpl/MapToDoubleSpliterator',526);gE(530,1,{},irb);_.If=function jrb(a){this.a.fg((Mrb(a),a))};var jD=Ocb(Psb,'StreamImpl/MapToDoubleSpliterator/lambda$0$Type',530);gE(525,253,{},lrb);_.hg=function mrb(a){return krb(this,a)};var mD=Ocb(Psb,'StreamImpl/MapToIntSpliterator',525);gE(529,1,{},nrb);_.If=function orb(a){this.a.gg(Vq((Mrb(a),a)))};var lD=Ocb(Psb,'StreamImpl/MapToIntSpliterator/lambda$0$Type',529);gE(704,1,{});var uD=Ocb('javaemul.internal','ConsoleLogger',704);var Wq=Rcb('char','C');var Zq=Rcb('int','I');var wA=Qcb(wvb,'ContextClickRpc');var Xq=Rcb('double','D');var Yq=Rcb('float','F');var LA=Qcb(Eyb,'UIServerRpc');var DA=Ocb(Bvb,'URLReference',null);_=jE('Vaadin.Spreadsheet.Api',L6);_=jE('Vaadin.Spreadsheet.CellData',AN);_=jE('Vaadin.Spreadsheet.OverlayInfo',tP);_.COMPONENT=rP;_.IMAGE=sP;_=jE('Vaadin.Spreadsheet.PopupButtonState',DQ);_=jE('Vaadin.Spreadsheet.SpreadsheetActionDetails',yY);_=jE('java.io.Serializable');_.$isInstance=qcb;xcb();_=jE('java.lang.Boolean');_.$isInstance=ycb;_=jE('java.lang.CharSequence');_.$isInstance=Dcb;_=jE('java.lang.Cloneable');_.$isInstance=bdb;_=jE('java.lang.Comparable');_.$isInstance=cdb;_=jE('java.lang.Double');_.$isInstance=idb;_=jE('java.lang.Number');_.$isInstance=edb;_=jE('java.lang.String');_.$isInstance=Xdb;_=jE('java.lang.Throwable');_.of=Gf;var asb=(ag(),dg);var gwtOnLoad=gwtOnLoad=cE;aE(mE);dE('permProps',[[[Pyb,Qyb],[Ryb,'gecko1_8']],[[Pyb,Qyb],[Ryb,'gecko1_8']],[[Pyb,Qyb],[Ryb,'safari']]]);if (SpreadsheetApi) SpreadsheetApi.onScriptLoad(gwtOnLoad);})();

let Spreadsheet = Vaadin.Spreadsheet.Api;

export { Spreadsheet };
