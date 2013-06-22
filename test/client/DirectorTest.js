/* global buster */
define(["Director"], function(Director) {
  "use strict";

  var assert = buster.assert;

  buster.testCase("Director", {
    setUp: function() {
      this.director = new Director();
    },

    "input channel": {

      "should be returned when requested": function() {
        var result = this.director.getInputChannel("input");

        assert.isObject(result);
      },

      "should support closing": function() {
        var result = this.director.getInputChannel("input");

        assert.isFunction(result.close);
      }
    },

    "command channel": {

      "should be returned when requested": function() {
        var result = this.director.getCommandChannel("user", []);

        assert.isObject(result);
      },

      "should support closing": function() {
        var result = this.director.getCommandChannel("user", []);

        assert.isFunction(result.close);
      },

      "should provide commands": function() {
        var result = this.director.getCommandChannel("user", []);

        assert.isFunction(result.getNewCommands);
      },

      "should provide zero commands for requested actions": function() {
        var action1 = "moveLeftRight";
        var action2 = "zoomInOut";
        var channel = this.director.getCommandChannel("user", [action1, action2]);
        var commands = channel.getNewCommands();
        var expected = {
          moveLeftRight: 0.0,
          zoomInOut: 0.0
        };

        assert.equals(commands, expected);
      }
    },

    "bindings": {
      setUp: function() {
        var actionId = {
          actionName: "moveLeftRight"
        };
        var inputId = {
          type: "gamepad",
          inputName: "dpadX"
        };
        this.director.addBinding(actionId, inputId);
      },

      "should allow to be modified": function() {
        var result = this.director.getBindings();
        var expected = {
          "moveLeftRight": [{
              type: "gamepad",
              inputName: "dpadX"
            }
          ]
        };

        assert.equals(result, expected);
      },

      "should cause commands to be issued on input": function() {
        var inputChannel = this.director.getInputChannel("gamepad");
        var commandChannel = this.director.getCommandChannel("actor", ["moveLeftRight"]);
        var expected = 0.5;

        inputChannel.setIntensity("dpadX", expected);

        var result = commandChannel.getNewCommands().moveLeftRight;

        assert.equals(result, expected);
      },

      "should have commands to be reset after query": function() {
        var inputChannel = this.director.getInputChannel("gamepad");
        var commandChannel = this.director.getCommandChannel("actor", ["moveLeftRight"]);
        var expected = 0.5;

        inputChannel.setIntensity("dpadX", expected);

        commandChannel.getNewCommands();
        var result = commandChannel.getNewCommands().moveLeftRight;

        assert.equals(result, 0.0);
      }
    }

  });
});