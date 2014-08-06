// -------------------------------------------------------------------------
// GET THINGS SET UP
// -------------------------------------------------------------------------

// Include Gulp
var gulp 					= require('gulp');

// HTML plugins
var cleanhtml               = require('gulp-cleanhtml');

// CSS plugins
var sass 					= require('gulp-sass');
var combineMediaQueries 	= require('gulp-combine-media-queries');
var autoprefixer 			= require('gulp-autoprefixer');
var cssmin 					= require('gulp-cssmin');

// JS plugins
var concat 					= require('gulp-concat');
var uglify 					= require('gulp-uglify');

// Image plugins
var imagemin 				= require('gulp-imagemin');
var svgmin 					= require('gulp-svgmin');

// General plugins
var gutil                   = require('gulp-util');
var plumber                 = require('gulp-plumber');
var browserSync 			= require('browser-sync');
var reload                  = browserSync.reload;

// -------------------------------------------------------------------------
// TASKS
// -------------------------------------------------------------------------

// Start server
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "dist"
        }
    });
});

// Notify on error with a beep
var onError = function(err) {  
    gutil.beep();
    console.log(err);
};

// HTML tasks
gulp.task('html', function() {
	return gulp.src('src/html/**/*')
        // Prevent gulp.watch from crashing
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(cleanhtml())
        .pipe(gulp.dest('dist'));
});

// CSS tasks
gulp.task('css', function() {
	return gulp.src('src/scss/**/*')
        // Prevent gulp.watch from crashing
        .pipe(plumber({
            errorHandler: onError
        }))
		// Compile Sass
		.pipe(sass({ style: 'compressed', noCache: true }))
		// Combine media queries
		.pipe(combineMediaQueries())
		// parse CSS and add vendor-prefixed CSS properties
		.pipe(autoprefixer())
		// Minify CSS
		.pipe(cssmin())
		// Where to store the finalized CSS
		.pipe(gulp.dest('dist/css'));
});

// JS tasks
gulp.task('js', function() {
	return gulp.src('src/js/**/*')
        // Prevent gulp.watch from crashing
        .pipe(plumber({
            errorHandler: onError
        }))
		// Concatenate all JS files into one
		.pipe(concat('production.js'))
		// Minify JS
		.pipe(uglify())
		// Where to store the finalized JS
		.pipe(gulp.dest('dist/js'));
});

// Image tasks
gulp.task('images', function() {
	return gulp.src('src/images/raster/*')
        // Prevent gulp.watch from crashing
        .pipe(plumber({
            errorHandler: onError
        }))
		// Minify the images
		.pipe(imagemin())
		// Where to store the finalized images
		.pipe(gulp.dest('dist/images'));
});

// SVG tasks
gulp.task('svgs', function() {
	return gulp.src('src/images/vector/*')
        // Prevent gulp.watch from crashing
        .pipe(plumber({
            errorHandler: onError
        }))
		// Minify the SVG's
		.pipe(svgmin())
		// Where to store the finalized SVG's
		.pipe(gulp.dest('dist/images'));
});

// Use default task to launch BrowserSync and watch all files
gulp.task('default', ['browser-sync'], function () {
    // All browsers reload after tasks are complete
    // Watch HTML files
    gulp.watch('src/html/**/*', ['html', reload]);
	// Watch Sass files
  	gulp.watch('src/scss/**/*', ['css', reload]);
  	// Watch JS files
  	gulp.watch('src/js/**/*', ['js', reload]);
  	// Watch image files
  	gulp.watch('src/images/raster/*', ['images', reload]);
  	// Watch SVG files
  	gulp.watch('src/images/vector/*', ['svgs', reload]);
});