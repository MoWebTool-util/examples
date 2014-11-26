module.exports = function(grunt) {

  'use strict';

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({

    jshint: {
      files: ['index.js', 'src/**/*.js'],
      options: {
        jshintrc: true
      }
    },

    exec: {
      'spm-doc-watch': 'spm doc watch --port 8080',
      'spm-doc-publish': 'spm doc publish',
      'spm-publish': 'spm publish',
      'spm-test': 'spm test'
    }

  });

  grunt.registerTask('test', [
    'jshint',
    'exec:spm-test'
  ]);

  grunt.registerTask('develop', [
    'exec:spm-doc-watch'
  ]);

  grunt.registerTask('publish', [
    'test',
    'exec:spm-publish',
    'exec:spm-doc-publish'
  ]);

  grunt.registerTask('default', [
    'develop'
  ]);

};
