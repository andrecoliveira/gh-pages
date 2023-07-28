const gulp = require("gulp");
const rename = require("gulp-rename");
const browsersync = require("browser-sync").create();
const sass = require("gulp-sass")(require("sass"));

//Local dos arquivos SASS
const SASS = "dist/sass/*.scss";

//Local dos arquivos CSS
const CSS = "dist/css/*.css";

//Compila o SASS (.scss)
gulp.task(
	"sass",
	gulp.series(function () {
		return gulp
			.src([SASS])
			.pipe(rename({ suffix: ".min" }))
			.pipe(
				sass({
					compass: true,
					style: "compressed",
				})
			)
			.pipe(sass())
			.pipe(gulp.dest("dist/css-min"))
			.pipe(browsersync.stream());
	})
);

//Servidor para olhar os arquivos .html e .scss
gulp.task(
	"server",
	gulp.series(["sass"], function () {
		browsersync.init({
			server: {
				baseDir: ".",
			},
		});

		gulp.watch([SASS], gulp.parallel(["sass"]));

		gulp
			.watch(["*.html", SASS, CSS])
			.on("change", gulp.parallel(browsersync.reload));
	})
);

gulp.task("default", gulp.series(["server"]));
