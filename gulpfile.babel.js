import gulp from 'gulp'
import browserSync from 'browser-sync'

const paths = {
  source: 'app/**/*'
};

gulp.task('serve', (done)=> {
  browserSync({
    open: false,
    port: 9000,
    server: {
      baseDir: ['.'],
      middleware:  (req, res, next)=> {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    }
  }, done);
});
// outputs changes to files to the console
function reportChange(event){
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

// this task wil watch for changes
// to js, html, and css files and call the
// reportChange method. Also, by depending on the
// serve task, it will instantiate a browserSync session
gulp.task('watch', ['serve'], ()=> {
  gulp.watch(paths.source, browserSync.reload).on('change', reportChange);
});