var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var notify = require('gulp-notify');

//Local dos arquivos SASS
var files = "dist/sass/*.scss";

//Tarefa para minificar e renomear os arquivos
gulp.task('sass', function(){
	return gulp.src(files)
		.pipe(rename({ suffix: '.min' }))
		//Expanded compressed compact nested
		.pipe(sass({
	      compass: true,
	      style: 'compressed'
    	}))
		.pipe(sass())		
		.pipe(gulp.dest('dist/css-min'))
		.pipe(notify({ message: 'Styles task complete!' }));
});

gulp.task('watch', function(){
  	gulp.watch(files, ['sass']); 
  	// Other watchers
});

gulp.task('default', ['watch', 'sass']);