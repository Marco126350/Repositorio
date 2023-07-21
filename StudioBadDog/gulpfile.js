const { src, dest,parallel } = require("gulp");

const webp = require('gulp-webp');
const avif = require('gulp-avif');

function versionWebp(done) {
  
  const opciones = {
    quality: 50
  };

  src('src/img/*.{png,jpg}')
    .pipe(webp(opciones))
    .pipe(dest('Assets/img'))

  done();
}
function versionAvif(done) {
  const opciones = {
    quality:50
  }
  src('src/img/*.{png,jpg}')
    .pipe(avif(opciones))
    .pipe(dest('Assets/img'))

  done();
}


exports.imagenes = parallel(versionWebp, versionAvif);