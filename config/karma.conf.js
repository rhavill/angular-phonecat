module.exports = function(config) {
  config.set({
	basePath: '../',
	frameworks: ['jasmine'],

	files: [
	  //JASMINE,
	  //JASMINE_ADAPTER,
	  'app/lib/angular/angular.js',
	  'app/lib/angular/angular-*.js',
	  'test/lib/angular/angular-mocks.js',
	  'app/js/**/*.js',
	  'test/unit/**/*.js'
	],

	autoWatch: true,

	//browsers: ['Chrome'],
	browsers: ['Firefox'],

	junitReporter: {
	  outputFile: 'test_out/unit.xml',
	  suite: 'unit'
	}
  })
};
