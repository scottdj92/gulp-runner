gulp.task('js', function() {
	//function for compiling js scripts
	gulp.src(['./app/**/*.js'])
	.on('error', gutil.log)
	.pipe(gulp.dest('./dist/'));
});