# web-generator
Basic web application tools and structure

#### technologies
- Jade
- SASS (.scss)
- PostCSS auto prefixer (support for cross browsers)
    `.{
      transition: all .4s ease;
     }`
     becomes
     `.{
       -webkit-transition:all .4s ease;
       -o-transition:all .4s ease;
       -moz-transition:all .4s ease;
       transition:all .4s ease
     }`
- Image optimizer


#### packages
- gulp
- del
- gulp-autoprefixer
- gulp-concat
- gulp-connect
- gulp-contrib-copy
- gulp-express
- gulp-image
- gulp-jade"
- gulp-minify-css
- gulp-sass
- gulp-sourcemaps
- gulp-uglify

#### useage

If you install with npm type

`npm install web-generator` or `npm i web-generator`

If you download directly you must install Npm Packages by typing

`npm install` or `npm i`

then run Gulp Task Runner

`npm start` or `gulp`

and finally visit http://localhost:1453
