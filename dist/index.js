"use strict";var p=function(a,t){return function(){return t||a((t={exports:{}}).exports,t),t.exports}};var y=p(function(E,q){
var f=require('@stdlib/array-base-resolve-getter/dist');function D(a,t){var e,v,n,r;for(e=f(a),v=f(t),n=[],r=0;r<a.length;r++)v(t,r)||n.push(e(a,r));return n}q.exports=D
});var x=p(function(F,b){
var m=require('@stdlib/array-base-assert-is-complex-floating-point-data-type/dist'),h=require('@stdlib/array-base-assert-is-boolean-data-type/dist'),g=require('@stdlib/array-base-arraylike2object/dist'),j=require('@stdlib/strided-base-reinterpret-complex/dist'),P=require('@stdlib/strided-base-reinterpret-boolean/dist');function T(a,t,e,v,n){var r,i;for(r=n,i=0;i<a.length;i++)t[i]||(e[r]=a[i],r+=v);return e}function C(a,t,e,v,n){var r,i,o,s,c,u,d,l;for(r=a.data,i=t.data,o=e.data,s=a.accessors[0],c=t.accessors[0],u=e.accessors[1],d=n,l=0;l<r.length;l++)c(i,l)||(u(o,d,s(r,l)),d+=v);return o}function G(a,t,e,v,n){var r,i,o,s,c,u;for(r=t.data,i=t.accessors[0],s=v*2,o=n*2,c=0;c<r.length;c++)i(r,c)||(u=c*2,e[o]=a[u],e[o+1]=a[u+1],o+=s);return e}function O(a,t,e,v,n){var r,i,o,s;for(r=t.data,i=t.accessors[0],o=n,s=0;s<r.length;s++)i(r,s)||(e[o]=a[s],o+=v);return e}function R(a,t,e,v,n){var r,i,o;return r=g(a),i=g(t),o=g(e),r.accessorProtocol||i.accessorProtocol||o.accessorProtocol?m(r.dtype)&&m(o.dtype)?(G(j(a,0),i,j(e,0),v,n),e):h(r.dtype)&&h(o.dtype)?(O(P(a,0),i,P(e,0),v,n),e):(C(r,i,o,v,n),e):(T(a,t,e,v,n),e)}b.exports=R
});var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),B=y(),z=x();w(B,"assign",z);module.exports=B;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
