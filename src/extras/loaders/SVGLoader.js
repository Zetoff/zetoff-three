import THREE from 'Three';

/**
 * @author mrdoob / http://mrdoob.com/
 * @author zz85 / http://joshuakoo.com/
 */

const SVGLoader = function ( manager ) {

	this.manager = ( manager !== undefined ) ? manager : THREE.DefaultLoadingManager;

};

SVGLoader.prototype = {

	constructor: SVGLoader,

	load: function ( url, onLoad, onProgress, onError ) {

		var scope = this;

		var parser = new DOMParser();

		var loader = new THREE.XHRLoader( scope.manager );
		loader.load( url, function ( svgString ) {

			var doc = parser.parseFromString( svgString, 'image/svg+xml' );  // application/xml

			onLoad( doc.documentElement );

		}, onProgress, onError );

	}

};

export default SVGLoader;
