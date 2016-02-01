var gulp = require('gulp'),
	gutil = require('gulp-util'),
	isDist = (gutil.env.dist) ? true: false,
	isDev = (gutil.env.stat) ? true: false, 
	server = require('./build-tasks/server'),
	scripts = require('./build-tasks/scripts'),
	styles = require('./build-tasks/styles'),
	markup = require('./build-tasks/markup'),
	deploy = require('./build-tasks/deploy');

//insantiate list of default tasks based on environment
var defaultTasks = ((gutil.env.isDist) ? true: false) ? [
		'deploy'
	]: [
		'server',
		'watch'
	];



gulp.task('default', defaultTasks);