module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        esversion: 6,
      }
    },
    babel: {
      options: {
        sourceMap: true
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['**/*.js'],
          dest: 'lib/'
        }]
      }
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          captureFile: 'build/results.txt',
          quiet: false,
          clearRequireCache: false,
          require: [
            'babel-core/register',
            'source-map-support/register'
          ]
        },
        src: ['test/**/*.js']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask('verify', ['jshint']);
  grunt.registerTask('compile', ['verify', 'babel']);
  grunt.registerTask('test', ['compile', 'mochaTest']);
  grunt.registerTask('default', ['test']);
};
