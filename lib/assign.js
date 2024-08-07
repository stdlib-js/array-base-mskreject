/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isComplexDataType = require( '@stdlib/array-base-assert-is-complex-floating-point-data-type' );
var isBooleanDataType = require( '@stdlib/array-base-assert-is-boolean-data-type' );
var arraylike2object = require( '@stdlib/array-base-arraylike2object' );
var reinterpret = require( '@stdlib/strided-base-reinterpret-complex' );
var reinterpretBoolean = require( '@stdlib/strided-base-reinterpret-boolean' );


// FUNCTIONS //

/**
* Applies a mask to an indexed array and assigns unmasked values to elements in an indexed output array.
*
* @private
* @param {Collection} x - input array
* @param {IntegerArray} mask - mask array
* @param {Collection} out - output array
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array offset
* @returns {Collection} output array
*
* @example
* var x = [ 1, 2, 3, 4 ];
* var mask = [ 0, 1, 0, 1 ];
*
* var out = [ 0, 0, 0, 0 ];
*
* var arr = indexed( x, mask, out, 1, 0 );
* // returns [ 1, 3, 0, 0 ]
*/
function indexed( x, mask, out, stride, offset ) {
	var io;
	var i;

	io = offset;
	for ( i = 0; i < x.length; i++ ) {
		if ( !mask[ i ] ) {
			out[ io ] = x[ i ];
			io += stride;
		}
	}
	return out;
}

/**
* Applies a mask to an accessor array and assigns unmasked values to elements in an accessor output array.
*
* @private
* @param {Object} x - input array object
* @param {Object} mask - mask array object
* @param {Object} out - output array object
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array offset
* @returns {Collection} output array
*
* @example
* var toAccessorArray = require( '@stdlib/array-base-to-accessor-array' );
* var arraylike2object = require( '@stdlib/array-base-arraylike2object' );
*
* var x = toAccessorArray( [ 1, 2, 3, 4 ] );
* var mask = toAccessorArray( [ 0, 1, 0, 1 ] );
*
* var out = toAccessorArray( [ 0, 0, 0, 0 ] );
* var arr = accessors( arraylike2object( x ), arraylike2object( mask ), arraylike2object( out ), 1, 0 );
*
* var v = arr.get( 0 );
* // returns 1
*
* v = arr.get( 1 );
* // returns 3
*/
function accessors( x, mask, out, stride, offset ) {
	var xdata;
	var mdata;
	var odata;
	var xget;
	var mget;
	var oset;
	var io;
	var i;

	xdata = x.data;
	mdata = mask.data;
	odata = out.data;

	xget = x.accessors[ 0 ];
	mget = mask.accessors[ 0 ];
	oset = out.accessors[ 1 ];

	io = offset;
	for ( i = 0; i < xdata.length; i++ ) {
		if ( !mget( mdata, i ) ) {
			oset( odata, io, xget( xdata, i ) );
			io += stride;
		}
	}
	return odata;
}

/**
* Applies a mask to a complex array and assigns unmasked values to elements in a complex output array.
*
* @private
* @param {Collection} x - real-valued floating-point input array view
* @param {Object} mask - mask array object
* @param {Collection} out - real-valued floating-point output array view
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array offset
* @returns {Collection} output array view
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
* var arraylike2object = require( '@stdlib/array-base-arraylike2object' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var mask = [ 0, 1, 0, 1 ];
*
* var out = new Float64Array( 8 );
*
* var arr = complex( x, arraylike2object( mask ), out, 1, 0 );
* // returns <Float64Array>[ 1.0, 2.0, 5.0, 6.0, 0.0, 0.0, 0.0, 0.0 ]
*/
function complex( x, mask, out, stride, offset ) {
	var mdata;
	var mget;
	var io;
	var so;
	var i;
	var j;

	mdata = mask.data;
	mget = mask.accessors[ 0 ];

	so = stride * 2; // note: multiply by 2, as real-valued array consists of interleaved real and imaginary components
	io = offset * 2;
	for ( i = 0; i < mdata.length; i++ ) {
		if ( !mget( mdata, i ) ) {
			j = i * 2;
			out[ io ] = x[ j ];
			out[ io+1 ] = x[ j+1 ];
			io += so;
		}
	}
	return out;
}

/**
* Applies a mask to a boolean array and assigns unmasked values to elements in a boolean output array.
*
* @private
* @param {Collection} x - boolean input array view
* @param {Object} mask - mask array object
* @param {Collection} out - boolean output array view
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array offset
* @returns {Collection} output array view
*
* @example
* var Uint8Array = require( '@stdlib/array-uint8' );
* var arraylike2object = require( '@stdlib/array-base-arraylike2object' );
*
* var x = new Uint8Array( [ 1, 0, 0, 1 ] );
* var mask = [ 0, 1, 0, 1 ];
*
* var out = new Uint8Array( 4 );
*
* var arr = boolean( x, arraylike2object( mask ), out, 1, 0 );
* // returns <Uint8Array>[ 1, 0, 0, 0 ]
*/
function boolean( x, mask, out, stride, offset ) {
	var mdata;
	var mget;
	var io;
	var i;

	mdata = mask.data;
	mget = mask.accessors[ 0 ];

	io = offset;
	for ( i = 0; i < mdata.length; i++ ) {
		if ( !mget( mdata, i ) ) {
			out[ io ] = x[ i ];
			io += stride;
		}
	}
	return out;
}


// MAIN //

/**
* Applies a mask to a provided input array and assigns unmasked values to elements in a provided output array.
*
* @param {Collection} x - input array
* @param {Collection} mask - mask array
* @param {Collection} out - output array
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array offset
* @returns {Collection} output array
*
* @example
* var x = [ 1, 2, 3, 4 ];
* var mask = [ 0, 1, 0, 1 ];
*
* var out = [ 0, 0 ];
* var arr = assign( x, mask, out, 1, 0 );
* // returns [ 1, 3 ]
*
* var bool = ( arr === out );
* // returns true
*/
function assign( x, mask, out, stride, offset ) {
	var xo;
	var mo;
	var oo;

	xo = arraylike2object( x );
	mo = arraylike2object( mask );
	oo = arraylike2object( out );
	if (
		xo.accessorProtocol ||
		mo.accessorProtocol ||
		oo.accessorProtocol
	) {
		// Note: we only explicitly support a limited set of dtype-to-dtype pairs, as this function should not be concerned with casting rules, etc. That is left to userland...
		if (
			isComplexDataType( xo.dtype ) &&
			isComplexDataType( oo.dtype )
		) {
			complex( reinterpret( x, 0 ), mo, reinterpret( out, 0 ), stride, offset ); // eslint-disable-line max-len
			return out;
		}
		if (
			isBooleanDataType( xo.dtype ) &&
			isBooleanDataType( oo.dtype )
		) {
			boolean( reinterpretBoolean( x, 0 ), mo, reinterpretBoolean( out, 0 ), stride, offset ); // eslint-disable-line max-len
			return out;
		}
		accessors( xo, mo, oo, stride, offset );
		return out;
	}
	indexed( x, mask, out, stride, offset );
	return out;
}


// EXPORTS //

module.exports = assign;
