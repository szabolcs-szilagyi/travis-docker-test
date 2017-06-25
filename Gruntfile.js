module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-mocha-cov');

  grunt.initConfig({
    mochacov: {
      options: {
        reporter: 'spec'
      },
      all: ['src/*.test.js']
    }
  });

  grunt.registerTask('test', ['mochacov']);
};
