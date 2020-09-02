var gulp = require('gulp'),
    merge = require('merge-stream'),
    concat = require('gulp-concat');

function moveAndRenameFile(origin, name, destination) {
    return gulp.src(origin)
        .pipe(concat(name))
        .pipe(gulp.dest(destination));
}

function renderStatics() {
    moveAndRenameFile(
        "node_modules/chartist/LICENSE-MIT",
        "LICENSE-CHARTIST",
        "dist/licenses/"
    );

    moveAndRenameFile(
        "node_modules/chartist-plugin-axistitle/LICENSE",
        "LICENSE-CHARTIST-PLUGIN-AXISTITLE",
        "dist/licenses/"
    );

    moveAndRenameFile(
        "node_modules/chartist/dist/chartist.min.js.map",
        "chartist.min.js.map",
        "dist/static/js/"
    );

    moveAndRenameFile(
        "node_modules/chartist-plugin-axistitle/dist/chartist-plugin-axistitle.min.js.map",
        "chartist-plugin-axistitle.min.js.map",
        "dist/static/js/"
    );

    var chartist = gulp.src([
        "node_modules/chartist/dist/chartist.min.js",
        "node_modules/chartist-plugin-axistitle/dist/chartist-plugin-axistitle.min.js"
    ]);

    var chartistCSS = gulp.src([
        "dist/assets/sass/chartistLicense.scss",
        "node_modules/chartist/dist/scss/chartist.scss"
    ]);

    var chartistCSSSettings = gulp.src([
        "dist/assets/sass/chartistLicense.scss",
        "node_modules/chartist/dist/scss/settings/_chartist-settings.scss"
    ]);

    chartistCSS.pipe(concat("chartist.scss"))
        .pipe(gulp.dest("dist/assets/sass"));

    chartistCSSSettings.pipe(concat("_chartist-settings.scss"))
        .pipe(gulp.dest("dist/assets/sass/settings/"));

    return chartist.pipe(concat("chartist.min.js"))
        .pipe(gulp.dest("dist/static/js/"));
}

gulp.task('make', function () {
    return renderStatics();
})