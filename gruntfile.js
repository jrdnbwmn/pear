module.exports = function(grunt){

// Load all Grunt tasks automatically
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    
// Project Configuration
    grunt.initConfig({
        
// Package
        pkg: grunt.file.readJSON('package.json'),
                     
// CSS (four steps)
        // 1. Process Sass
        sass: {
            build: {
                options: {
                    style: 'compressed',
                },
                files: {
                    'build/css/main.css': 'scss/main.scss'
                }
            } 
        },
        
        // 2. Parse CSS and add vendor-prefixed CSS properties
        autoprefixer: {
            options: {
                browsers: ['last 2 version']
            },
            single_file: {
                expand: true,
                flatten: true,
                src: 'build/css/main.css',
                dest: 'build/css/',
            }
        },
        
        // 3. Combine CSS rules together, ensuring minimal repetition
        cssc: {
            build: {
                options: {
                    consolidateViaDeclarations: true,
                    consolidateViaSelectors:    true,
                    consolidateMediaQueries:    true
                },
                files: {
                    'build/css/main.css': 'build/css/main.css'
                }
            }
        },
        
        // 4. Minify the CSS
        cssmin: {
            build: {
                src: 'build/css/main.css',
                dest: 'build/css/main.css'
            }
        },
                     
// Javascript (two steps)
        // 1. Concatenate all JS files into one
        concat: {   
            build: {
                src: [
                    'js/vendor/*.js', // All JS in the vendor folder (example)
                    'js/main.js'  // This specific file (example)
                ],
                dest: 'build/js/production.js',
            }
        },
        
        // 2. Minify JS
        uglify: {
            build: {
                src: '/build/js/production.js',
                dest: '/build/js/production.min.js'
            }
        },
                     
// Image Optimization (two items)
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'build/images'
                }]
            }
        },
        
        svgmin: {
            options: {
                plugins: [{
                    removeViewBox: false
                }]
            },
            build: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['images/*.svg'],
                    dest: 'build/images/',
                    ext: '.min.svg',
                }]
            }
        },

// Browser Sync (live injecting of CSS changes into the browser)
        browser_sync: {
            files: {
                src : 'build/css/main.css'
            }, 
            options: {
                server: {
                    baseDir: "build"
            }
          }
        },
                     
// Watch
        watch: {
            options: {
                spawn: false,
            },
            css: {
                files: ['scss/**/*.scss'],
                tasks: ['buildcss'],
            },
            scripts: {
                files: ['js/*.js'],
                tasks: ['concat', 'uglify'],
            },
            images: {
                files: ['images/**/*.{png,jpg,gif}', 'images/*.{png,jpg,gif}'],
                tasks: ['imagemin'],
            },
            all: {
                files: ['images/*.svg'],
                tasks: ['svgmin'],
            },
        },

    });

// Tasks
    grunt.registerTask('default',   ['concat', 'uglify', 'imagemin', 'svgmin']);
    grunt.registerTask('buildcss',  ['sass', 'autoprefixer', 'cssc', 'cssmin']);

};