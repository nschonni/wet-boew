/* jshint node: true */
module.exports = function(grunt) {
	"use strict";

	var jscoverage = require("jscoverage");

	grunt.registerTask("jscoverage", "Run jscoverage", function() {
		var options = this.options();

		jscoverage.processFile( "dist/unmin", "dist-cov/unmin", [], options);
	});

};
