module.exports = function(grunt){

  grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  uglify: {
    build: {
      src: ['js/functions.js', 'js/ghRepo.js'],
      dest: 'js/functions-repo.min.js'
      },
    dev:{
      options: {
        beautify: true,
        mangle: false, 
        compress: false,
        preserveComments: 'all'
      },
      src: ['js/functions.js', 'js/ghRepo.js'],
      dest: 'js/functions-repo.min.js'
      }
    },
    sass: {
        dev: {
          options: {
            outputStyle: 'expanded'
        },
          files: {
          'css/styles.css' : 'src/scss/application.scss'
        },
        build: {
          options: {
            outputStyle: 'compressed'
        },
          files: {
          'css/styles.css' : 'src/scss/application.scss'
        }
      }
    }
    },
    cssmin: {
        target: {
            files: [{
            expand: true,
            cwd: 'css/',
            src: ['style.css','!*.min.css'],
            dest: 'css/',
            ext: '.min.css'
            }]
        }
    },
    watch: {
      js: {
        files: ['js/*.js'],
        tasks: ['uglify:dev']
      },
      css: {
      files: ['src/css/'],
      tasks: ['cssmin:minify']

      }
    },
});

  grunt.loadNpmTasks('grunt-contrib-uglify'); 
  grunt.loadNpmTasks('grunt-contrib-watch'); 
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  //grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default',['uglify:dev']);
  grunt.registerTask('build',['uglify:build']);
  //grunt.registerTask('sass',['sass:dev']);

};
