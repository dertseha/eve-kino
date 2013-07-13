/* global buster */
define(["util/validators/SessionValidator"], function(SessionValidator) {
  "use strict";

  var assert = buster.assert;
  var refute = buster.refute;

  buster.testCase("SessionValidator", {
    setUp: function() {
      this.validator = new SessionValidator();

      this.sessionData = {
        ver: 0,
        session: {
          set: {
            space: {
              background: "res:/dx9/scene/universe/a01_cube.red"
            }
          }
        },
        stage: {
          props: [{
            propData: {
              propType: "testEntry"
            },
            script: [{
              position: [],
              rotation: []
            }]
          }]
        },
        videography: {
          cameras: [{
            shotList: [{
              position: [],
              rotation: []
            }]
          }]
        }
      };
    },

    "should validate the basic test session data": function() {
      var result = this.validator.isValid(this.sessionData);

      assert(result);
    },

    "should fail on an empty session": function() {
      var object = {};
      var result = this.validator.isValid(object);

      refute(result);
    },

    "should validate an empty set, space background": function() {
      this.sessionData.session = {
        set: {
          space: {
            background: "res:/dx9/scene/universe/a01_cube.red"
          }
        }
      };

      var result = this.validator.isValid(this.sessionData);

      assert(result);
    },

    "should refute an invalid space background": function() {
      this.sessionData.session = {
        set: {
          space: {}
        }
      };

      var result = this.validator.isValid(this.sessionData);

      refute(result);
    },

    "should validate an empty set, chroma key background": function() {
      this.sessionData.session = {
        set: {
          chromaKey: {
            color: [0.5, 0.2, 0.1]
          }
        }
      };

      var result = this.validator.isValid(this.sessionData);

      assert(result);
    },

    "should refute an invalid chroma key background": function() {
      this.sessionData.session = {
        set: {
          chromaKey: {}
        }
      };

      var result = this.validator.isValid(this.sessionData);

      refute(result);
    },

    "should refute an invalid set": function() {
      this.sessionData.session = {
        set: {}
      };

      var result = this.validator.isValid(this.sessionData);

      refute(result);
    }
  });
});