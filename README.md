# web-generator
Basic web application tools and structure


#### technologies
1) Pug (Jade) (HTML template engine)

2) SASS (.scss)

3) PostCSS auto prefixer (support for cross browsers)

```
    .{
      transition: all .4s ease;
     }
```
becomes
```   
    .{
       -webkit-transition:all .4s ease;
       -o-transition:all .4s ease;
       -moz-transition:all .4s ease;
       transition:all .4s ease
     }
```
4) Image optimizer (optimizes images' sizes)



#### packages
```
- del
- gulp
- gulp-autoprefixer
- gulp-concat
- gulp-connect
- gulp-contrib-copy
- gulp-express
- gulp-image
- gulp-livereload
- gulp-minify-css
- gulp-plumber
- gulp-pug
- gulp-sass
- gulp-sourcemaps-alpha
- gulp-uglify
- gulp-util

```
#### useage

then run Gulp Task Runner

`npm start` or `gulp`

and finally visit `http://localhost:1453`

#### output demo
You will see same views when you run the project
[Output Demo Link](http://ozluy.github.io/projects/web-generator/)
