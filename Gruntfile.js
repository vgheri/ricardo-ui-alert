/*global module:false*/
module.exports = function(grunt) {
  // load all grunt tasks matching the `grunt-*` pattern
  require('load-grunt-tasks')(grunt);

  // Configurable paths
  var config = {
    build: 'build',
    dist: 'dist',
    tasks: grunt.cli.tasks
  };

  // Project configuration.
  grunt.initConfig({

    // Project settings
    config: config,
    // Metadata.
    meta: {
      version: '0.1.0'
    },
    banner: '/*! PROJECT_NAME - v<%= meta.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '* http://PROJECT_WEBSITE/\n' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
      'YOUR_NAME; Licensed MIT */\n',
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['js/*.js', 'test/**/*.js']
      }
    },
    clean: {
      build: ['<%= config.build %>/*', '.tmp/*']
    },
    copy: {
      build: {
        src: 'ricardo-ui-alert.html',
        dest: '<%= config.build %>/'
      }
    },
    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      options: {
        dest: '<%= config.build %>'
      },
      html: [
        'ricardo-ui-alert.html'
      ]
    },
    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
      options: {
        assetsDirs: ['<%= config.build %>']
      },
      html: ['<%= config.build %>/{,*/}*.html'],
      css: ['<%= config.build %>/css/{,*/}*.css']
    },
    vulcanize: {
      default: {
        options: {
          excludes: {
            imports: [
            "polymer.html"
            ]
          },
          inline: true
        },
        files: {
          'dist/ricardo-ui-alert-vulcanized.html': '<%= config.build %>/ricardo-ui-alert.html'
        }
      }
    }
  });

  // Default task.
  grunt.registerTask('default', ['jshint', 'vulcanize'/*, 'concat', 'uglify'*/]);

  grunt.registerTask('build', [
  'clean:build',
  'copy:build',
  'useminPrepare',
  'concat',
  'cssmin',
  //'uglify',
  //'filerev',
  'usemin',
  'vulcanize'
  ]);

  grunt.registerTask('cleans', ['clean:build']);
  grunt.registerTask('copies', ['copy:build']);
};
