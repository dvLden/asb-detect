import config from '../config'

import gulp from 'gulp'
import util from 'gulp-util'
import path from 'path'
import browserify from 'browserify'
import babelify from 'babelify'
import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'
import stripDebug from 'gulp-strip-debug'
import notify from 'gulp-notify'
import uglify from 'gulp-uglify'

const PATH = {
    src: path.join(config.root.src, `/**/*.js`),
    dest: path.join(config.root.dest)
}

export function scriptsTask () {
    browserify({
        debug: true,
        entries: path.join(config.root.src, 'asb-detect.js'),
        standalone: 'asb-detect'
    })
        .transform(babelify, { presets: ['es2015'] })
        .bundle()
        .on('error', e => util.log(e))
        .pipe(source('asb-detect.js'))
        .pipe(buffer())
        // .pipe(stripDebug()) // disabled because alert() is required in this snippet
        .pipe(uglify())
        .pipe(notify({
            onLast: true,
            title: 'Task complete!',
            message: 'Finished compiling, merging and uglifying scripts.'
        }))
        .pipe(gulp.dest(PATH.dest))
}

gulp.task('scripts', scriptsTask)
