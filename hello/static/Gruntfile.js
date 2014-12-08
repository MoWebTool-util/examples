/**
 * Description: Gruntfile.js
 * Author: crossjs <liwenfu@crossjs.com>
 * Date: 2014-11-17 16:57:40
 */

module.exports = function(grunt) {

  'use strict';

  // 显示任务执行时间
  require('time-grunt')(grunt);

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  var pkg = grunt.file.readJSON('package.json');

  grunt.initConfig({

    pkg: pkg,

    wrap: {
      server: {
        base: '..'
      }
    },

    jshint: {
      options: {
        jshintrc: true
      },
      app: {
        files: ['app/**/*.js']
      },
      mod: {
        files: ['mod/**/*.js']
      }
    },

    jsdoc: {
      app: {
        src: ['app/**/*.js'],
        options: {
          destination: 'doc/app'
        }
      },
      mod: {
        src: ['mod/**/*.js'],
        options: {
          destination: 'doc/mod'
        }
      }
    },

    exec: {
      'spm-build': 'spm build'
    },

    sass: {
      themes: {
        options: {
          // nested, compact, compressed, expanded
          style: 'compressed'
        },
        files: [{
          expand: true,
          cwd: 'themes/scss',
          src: ['**/*.scss'],
          dest: 'themes/css',
          ext: '.css'
        }]
      }
    },

    copy: {
      config: {
        options: {
          process: function(content /*, srcpath*/ ) {
            return content.replace(/@APPNAME/g, pkg.name)
              .replace(/@VERSION/g, pkg.version);
          }
        },
        files: [{
          expand: true,
          cwd: 'lib',
          src: ['config.js.tpl'],
          dest: 'lib',
          ext: '.js'
        }]
      }
    },

    uglify: {
      options: {
        // remove HH:MM:ss
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyymmdd") %> */\n',
        beautify: {
          'ascii_only': true
        },
        compress: {
          'global_defs': {
            'DEBUG': false
          },
          'dead_code': true
        }
      },
      config: {
        files: [{
          expand: true,
          cwd: 'lib',
          src: ['config.js'],
          dest: 'lib',
          ext: '.js'
        }]
      }
    },

    clean: {
      themes: {
        src: ['themes/css']
      }
    }

  });

  grunt.registerTask('build-themes', ['clean', 'sass']);
  grunt.registerTask('build-app', ['exec']);
  grunt.registerTask('build-lib', ['copy', 'uglify']);

  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('build', ['build-themes', 'build-app', 'build-lib']);
  grunt.registerTask('doc', ['jsdoc']);

  grunt.registerTask('server', ['copy', 'wrap']);

  grunt.registerTask('default', ['test', 'build', 'doc']);

};
