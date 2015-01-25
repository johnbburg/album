module.exports = function(grunt) {
  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  grunt
      .initConfig({
        pkg : grunt.file.readJSON('package.json'),
        compass : { // Task
          dev : { // Target
            options : { // Target options
              basePath: 'public/sites/all/themes/album/',
              outputStyle: 'expanded',
              noLineComments: false,
              bundleExec: true
            }
          },
          staging : { // Target
            options : { // Target options
              basePath: 'public/sites/all/themes/album/',
              outputStyle: 'compressed',
              noLineComments: true,
              force: true,
              bundleExec: true
            }
          },
        },
        watch : {
          compass : {
            files : [ 'public/sites/all/themes/album/sass/*.scss', 'public/sites/all/themes/album/sass/**/*.scss' ],
            tasks : [ 'compass:dev' ]
          }
        }
      });

  var stage = grunt.option('stage') || 'dev';

  grunt.registerTask('default', [ 'compass:' + stage ]);
};
