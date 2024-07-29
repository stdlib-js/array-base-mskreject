// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-resolve-getter@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-complex-floating-point-data-type@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-boolean-data-type@v0.0.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex@v0.1.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-boolean@v0.0.2-esm/index.mjs";function d(e,t){var r,o,a,n;for(r=s(e),o=s(t),a=[],n=0;n<e.length;n++)o(t,n)||a.push(r(e,n));return a}function i(e,s,d,i,c){var l,m,p;return l=o(e),m=o(s),p=o(d),l.accessorProtocol||m.accessorProtocol||p.accessorProtocol?t(l.dtype)&&t(p.dtype)?(function(e,s,t,r,o){var a,n,d,i,c,l;for(a=s.data,n=s.accessors[0],i=2*r,d=2*o,c=0;c<a.length;c++)n(a,c)||(l=2*c,t[d]=e[l],t[d+1]=e[l+1],d+=i)}(a(e,0),m,a(d,0),i,c),d):r(l.dtype)&&r(p.dtype)?(function(e,s,t,r,o){var a,n,d,i;for(a=s.data,n=s.accessors[0],d=o,i=0;i<a.length;i++)n(a,i)||(t[d]=e[i],d+=r)}(n(e,0),m,n(d,0),i,c),d):(function(e,s,t,r,o){var a,n,d,i,c,l,m,p;for(a=e.data,n=s.data,d=t.data,i=e.accessors[0],c=s.accessors[0],l=t.accessors[1],m=o,p=0;p<a.length;p++)c(n,p)||(l(d,m,i(a,p)),m+=r)}(l,m,p,i,c),d):(function(e,s,t,r,o){var a,n;for(a=o,n=0;n<e.length;n++)s[n]||(t[a]=e[n],a+=r)}(e,s,d,i,c),d)}e(d,"assign",i);export{i as assign,d as default};
//# sourceMappingURL=index.mjs.map
