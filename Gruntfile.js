'use strict';

module.exports = function(grunt){
    const sass = require('node-sass');
    require("time-grunt")(grunt);
    require("jit-grunt")(grunt);
    grunt.initConfig({
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            dist: {
                files: {
                    "css/new-styles.scss": "css/compiled-sass.css"
                }
            }
        },
        watch: {
            files: "css/*scss",
            tasks: ["sass"]
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        "css/*.css",
                        "js/*.js",
                        "*.html"
                    ]
                }
            },
            options: {
                watchTask: true,
                server: {
                    baseDir: './'
                }
            }
        }
    });

    grunt.registerTask("css",["sass"]);
    grunt.registerTask("default", ["browserSync", "watch"]);
}