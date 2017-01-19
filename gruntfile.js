module.exports = function(grunt) {

    grunt.initConfig({

        concat: {
            options: {
                separator: grunt.util.linefeed
            },

            dist: {
                src: ['src/banners/intro.js',
                      'src/init.js',
                      'src/*.js',
                      'src/optional/*.js',
                      'src/banners/outro.js'],

                dest: 'dist/fuzzy-search.js'
            }
        },

        uglify: {

            options: {

                mangle:{
                    except: ['jQuery', '$', '_' , 'define', 'require' , 'module', 'exports', 'amd' ]
                },

                compress:{},
                ASCIIOnly:true,
                preserveComments:'some'
            },

            dist: {
                files: {
                    'dist/fuzzy-search.min.js': ['<%= concat.dist.dest %>']
                }
            }

        }



    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['concat', 'uglify']);

};