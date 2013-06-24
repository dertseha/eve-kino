"use strict";

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    // Run JSHint on all sources, excluding the generated or imported client scripts
    jshint: {
      options: {
        jshintrc: "./.jshintrc"
      },
      all: ["Gruntfile.js", "src/client/**/*.js", "src/server/**/*.js", "test/**/*.js"]
    },

    // Run Plato (static analysis) on server and client sources
    plato: {
      src: {
        options: {
          jshint: grunt.file.readJSON("./.jshintrc")
        },
        files: {
          "build/reports/plato": ["src/client/**/*.js", "src/server/**/*.js"]
        }
      }
    },

    // Combine the client sources into one file, minify as second task
    requirejs: {
      compile: {
        options: {
          baseUrl: "src/client",

          modules: [{
              name: "ClientApp",
              exclude: ["angular", "lib/gl-matrix.js", "lib/ccpwgl.js", "lib/gamepad.js", "lib/q.js"]
            }
          ],
          dir: "build/client/full",

          optimize: "none"
        }
      },
      minify: {
        options: {
          baseUrl: "src/client",

          modules: [{
              name: "ClientApp",
              exclude: ["angular", "lib/gl-matrix.js", "lib/ccpwgl.js", "lib/gamepad.js", "lib/q.js"]
            }
          ],
          dir: "build/client/min",

          optimize: "uglify2"
        }
      }
    },

    // Copy the combined client sources to public server directories
    copy: {
      client: {
        files: [{
            src: "build/client/full/ClientApp.js",
            dest: "src/wwwroot/javascripts/full/client/ClientApp.js"
          }, {
            src: "build/client/min/ClientApp.js",
            dest: "src/wwwroot/javascripts/min/client/ClientApp.js"
          }
        ]
      }
    },

    // Run tests using buster
    buster: {
      server: {
        test: {
          reporter: "specification",
          "config-group": "Server tests raw"
        }
      },
      serverCov: {
        test: {
          reporter: "quiet",
          "config-group": "Server tests coverage"
        }
      },
      clientRaw: {
        test: {
          reporter: "specification",
          "config-group": "Client tests raw"
        },
        server: {
          port: 9050
        }
      },
      clientMin: {
        test: {
          reporter: "specification",
          "config-group": "Client tests minified"
        },
        server: {
          port: 9052
        }
      },
      clientCov: {
        test: {
          reporter: "quiet",
          "config-group": "Client tests coverage"
        },
        server: {
          port: 9054
        }
      }
    },

    watch: {
      serverTests: {
        files: ["src/server/**/*.js", "test/server/**/*.js"],
        tasks: ["buster:server"],
        options: {
          nospawn: true
        }
      },
      clientTests: {
        files: ["src/client/**/*.js", "test/client/**/*.js"],
        tasks: ["buster:clientRaw"],
        options: {
          nospawn: false,
          interrupt: true
        }
      }
    },

    yuidoc: {
      client: {
        name: "<%= pkg.name %> - Client",
        description: "<%= pkg.description %>",
        version: "<%= pkg.version %>",
        url: "<%= pkg.homepage %>",
        options: {
          paths: ["src/client/"],
          outdir: "build/doc/client/"
        }
      },
      server: {
        name: "<%= pkg.name %> - Server",
        description: "<%= pkg.description %>",
        version: "<%= pkg.version %>",
        url: "<%= pkg.homepage %>",
        options: {
          paths: ["src/server/"],
          outdir: "build/doc/server/"
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-buster");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-requirejs");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-yuidoc");
  grunt.loadNpmTasks("grunt-plato");

  grunt.registerTask("buster-all", ["buster:clientRaw", "buster:clientMin", "buster:server"]);
  grunt.registerTask("default", ["jshint", "plato", "requirejs:compile", "requirejs:minify", "copy", "buster-all", "yuidoc"]);
  grunt.registerTask("compile", ["jshint", "requirejs:compile", "requirejs:minify", "copy"]);
  grunt.registerTask("coverage", ["buster:serverCov", "buster:clientCov"]);
  grunt.registerTask("test", ["jshint", "buster-all"]);
};