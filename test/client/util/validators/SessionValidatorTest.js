/* global buster */
define(["util/validators/SessionValidator"], function(SessionValidator) {
  "use strict";

  var assert = buster.assert;
  var refute = buster.refute;

  buster.testCase("SessionValidator", {
    setUp: function() {
      this.validator = new SessionValidator();
    },

    "should fail on an empty session": function() {
      var object = {};
      var result = this.validator.isValid(object);

      refute(result);
    },

    "should validate an empty set, space background": function() {
      var object = {
        ver: 0,
        session: {
          set: {
            space: {
              background: "res:/dx9/scene/universe/a01_cube.red"
            }
          }
        }
      };
      var result = this.validator.isValid(object);

      assert(result);
    },

    "should refute an invalid space background": function() {
      var object = {
        ver: 0,
        session: {
          set: {
            space: {}
          }
        }
      };
      var result = this.validator.isValid(object);

      refute(result);
    },

    "should validate an empty set, chroma key background": function() {
      var object = {
        ver: 0,
        session: {
          set: {
            chromaKey: {
              color: [0.5, 0.2, 0.1]
            }
          }
        }
      };
      var result = this.validator.isValid(object);

      assert(result);
    },

    "should refute an invalid chroma key background": function() {
      var object = {
        ver: 0,
        session: {
          set: {
            chromaKey: {}
          }
        }
      };
      var result = this.validator.isValid(object);

      refute(result);
    },

    "should refute an invalid set": function() {
      var object = {
        ver: 0,
        session: {
          set: {}
        }
      };
      var result = this.validator.isValid(object);

      refute(result);
    }
  });
});