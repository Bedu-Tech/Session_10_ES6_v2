import gulp from 'gulp'
import browserify from 'browserify'
import babelify from 'babelify'
import babel from 'gulp-babel'
import source from 'vinyl-source-stream'

gulp.task('scripts', () => {
  return browserify({ entries: 'src/app.js'})
    .transform('babelify', { presets: ['env']})
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('dist'))
})
