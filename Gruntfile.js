'use strict';

module.exports = function(grunt){
    const sass = require('node-sass');
    require("time-grunt")(grunt);
    require("jit-grunt")(grunt, {
        useminPrepare: "grunt-usemin"
    });

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
        },
        copy: {
            html: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: "./",
                    src: ["*html"],
                    dest: "dist"
                }]
            },
            fonts: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: "node_modules/font-awesome",
                    src: ["fonts/*.*"],
                    dest: "dist/"
                }]
            }
        },
        clean: {
            biuld: {
                src: ["dist/"]
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: "./",
                    src: ["images/**/*{png,jpg,gif}"],
                    dest: "dist/"
                }]
            }
        },
        useminPrepare: {
            foo: {
                dest: 'dist',
                src: ['contactus.html','aboutus.html','index.html']
            },
            options: {
                flow: {
                    steps: {
                        css: ['cssmin'],
                        js:['uglify']
                    },
                    post: {
                        css: [{
                            name: 'cssmin',
                            createConfig: function (context, block) {
                            var generated = context.options.generated;
                                generated.options = {
                                    keepSpecialComments: 0, rebase: false
                                };
                            }       
                        }]
                    }
                }
            }
        },

        // Concat
        concat: {
            options: {
                separator: ';'
            },
  
            // dist configuration is provided by useminPrepare
            dist: {}
        },

        // Uglify
        uglify: {
            // dist configuration is provided by useminPrepare
            dist: {}
        },

        cssmin: {
            dist: {}
        },

        // Filerev
        filerev: {
            options: {
                encoding: 'utf8',
                algorithm: 'md5',
                length: 20
            },
  
            release: {
            // filerev:release hashes(md5) all assets (images, js and css )
            // in dist directory
                files: [{
                    src: [
                        'dist/js/*.js',
                        'dist/css/*.css',
                    ]
                }]
            }
        },
  
        // Usemin
        // Replaces all assets with their revved version in html and css files.
        // options.assetDirs contains the directories for finding the assets
        // according to their relative paths
        usemin: {
            html: ['dist/contactus.html','dist/aboutus.html','dist/index.html'],
            options: {
                assetsDirs: ['dist', 'dist/css','dist/js']
            }
        },

        htmlmin: {                                         // Task
            dist: {                                        // Target
                options: {                                 // Target options
                    collapseWhitespace: true
                },
                files: {                                   // Dictionary of files
                    'dist/index.html': 'dist/index.html',  // 'destination': 'source'
                    'dist/contactus.html': 'dist/contactus.html',
                    'dist/aboutus.html': 'dist/aboutus.html',
                }
            }
        }
    });

    grunt.registerTask("css",["sass"]);
    grunt.registerTask("conc-files", ["copy"]);
    grunt.registerTask("build", [
        "clean",
        "copy",
        "imagemin",
        "useminPrepare",
        "concat",
        "cssmin",
        "uglify",
        "filerev",
        "usemin",
        "htmlmin"
    ]);
    grunt.registerTask("default", ["browserSync", "watch"]);
}