// Generated on 2014-09-20 using generator-angular 0.9.8
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths for the application
  var appConfig = {
    app: 'app',
    dist: 'dist'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: appConfig,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      js: {
        files: ['js/**/*.js'],
        options: {
          livereload: true
        }
      },
      styles: {
        files: ['theme/css/**/*.css'],
        options: {
          livereload: true
        }
      },
      html: {
      	files: ['*.html'],
      	options: {
          livereload: true
        }
      }
    },


  });


  grunt.registerTask('default', 'Compile then start a connect web server', function (target) {
    grunt.task.run([
      'watch'
    ]);
  });
};
