var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
	gulp.src('app')
		.pipe(webserver({
			livereload: true,
			directoryListing: true,
			open: true,
			port: 8080
		}));
});