/**
 * gruntfile.js
 */
module.exports = function(grunt) {

  require('time-grunt')(grunt);
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      options: {
        sourceMap: false,
        outputStyle: 'expanded',
      },
      dist: {
        files: {
          'stylesheets/css/main.css': 'stylesheets/sass/main.scss'
        }
      }
    },
    watch: {
      sass: {
        files: 'stylesheets/sass/**/*.scss',
        tasks: ['sass', 'cssmin']
      }
    },
    cssmin: {
      options: {
        keepSpecialComments: false,
        // report: "gzip",
        keepBreaks: false,
        sourceMap: true,
        advanced: false
      },
      target: {
        files: {
          'stylesheets/css/main.min.css': 'stylesheets/css/main.css'
        }
      }
    }
  })

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'cssmin', 'watch']);
  grunt.registerTask('deploy', ['sass', 'cssmin']);
};
