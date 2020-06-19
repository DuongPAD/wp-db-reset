const { dest, parallel, series, src } = require( 'gulp' );
const del = require( 'del' );
const wpPot = require( 'gulp-wp-pot' );
const zip = require( 'gulp-zip' );

const buildDir = 'build/wp-db-reset';

function clean() {
	return del( [ 'build' ] );
}

function languages() {
	return src( 'languages/*.*', { base: '.' } )
		.pipe( dest( buildDir ) );
}

function php() {
	return src(
		[
			'**/*.php',
		], { base: '.' } )
		.pipe( dest( buildDir ) )
}

function pot() {
	return src(
		[
			'**/*.php',
		] )
		.pipe( wpPot( {
			domain: 'wp-db-reset',
			package: 'WordPress Database Reset',
		} ) )
		.pipe( dest( 'languages/wp-db-reset.pot' ) );
}

function zipFiles() {
	return src( buildDir + '/**/*', { base: buildDir + '/..' } )
		.pipe( zip( buildDir + '.zip' ) )
		.pipe( dest( '.' ) );
}

exports.clean = clean;
exports.languages = languages;
exports.php = php;
exports.pot = pot;
exports.zipFiles = zipFiles;

exports.package = series(
	clean,
	parallel(
		series( pot, languages ),
		php,
	),
	zipFiles,
);

