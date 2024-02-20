"use strict";var f=function(a,t){return function(){return t||a((t={exports:{}}).exports,t),t.exports}};var m=f(function(z,q){
var p=require('@stdlib/array-base-resolve-getter/dist');function b(a,t){var e,v,i,r;for(e=p(a),v=p(t),i=[],r=0;r<a.length;r++)v(t,r)||i.push(e(a,r));return i}q.exports=b
});var x=f(function(A,j){
var h=require('@stdlib/array-base-assert-is-complex-floating-point-data-type/dist'),d=require('@stdlib/array-base-arraylike2object/dist'),y=require('@stdlib/strided-base-reinterpret-complex/dist');function C(a,t,e,v,i){var r,s;for(r=i,s=0;s<a.length;s++)t[s]||(e[r]=a[s],r+=v);return e}function D(a,t,e,v,i){var r,s,o,u,c,n,l,g;for(r=a.data,s=t.data,o=e.data,u=a.accessors[0],c=t.accessors[0],n=e.accessors[1],l=i,g=0;g<r.length;g++)c(s,g)||(n(o,l,u(r,g)),l+=v);return o}function G(a,t,e,v,i){var r,s,o,u,c,n;for(r=t.data,s=t.accessors[0],u=v*2,o=i*2,c=0;c<r.length;c++)s(r,c)||(n=c*2,e[o]=a[n],e[o+1]=a[n+1],o+=u);return e}function O(a,t,e,v,i){var r,s,o;return r=d(a),s=d(t),o=d(e),r.accessorProtocol||s.accessorProtocol||o.accessorProtocol?h(r.dtype)&&h(o.dtype)?(G(y(a,0),s,y(e,0),v,i),e):(D(r,s,o,v,i),e):(C(a,t,e,v,i),e)}j.exports=O
});var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),P=m(),T=x();R(P,"assign",T);module.exports=P;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
