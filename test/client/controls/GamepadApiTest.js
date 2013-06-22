/* global buster */
define(["lib/gamepad", "controls/GamepadApi"], function(GamepadLib, GamepadApi) {
  "use strict";

  var assert = buster.assert;
  var refute = buster.refute;

  function connectOneDevice(index) {
    var device = {
      index: 0
    };

    GamepadLib.fire(GamepadLib.Event.CONNECTED, device);
  }

  function disconnectDevice(index) {
    var device = {
      index: 0
    };

    GamepadLib.fire(GamepadLib.Event.DISCONNECTED, device);
  }


  buster.testCase("GamepadApi", {
    setUp: function() {
      this.api = new GamepadApi();
    },

    "should call library init when initialized": function() {
      var spy = this.spy(GamepadLib.prototype, "init");

      this.api.init();

      assert.called(spy);
    },

    "initialized": {
      setUp: function() {
        this.listener = {
          onGamepadConnected: function() {},
          onGamepadDisconnected: function() {}
        };

        this.api.addGamepadListener(this.listener);
        this.api.init();
      },

      "should report an empty gamepad list": function() {
        var gamepads = this.api.getGamepads();

        assert.equals(gamepads, []);
      },

      "should report an empty gamepad list after losing device again": function() {
        connectOneDevice(0);
        disconnectDevice(0);

        var gamepads = this.api.getGamepads();

        assert.equals(gamepads, []);
      },

      "should ignore unknown device disconnection": function() {
        var spy = this.spy(this.listener, "onGamepadDisconnected");

        disconnectDevice(1000);

        refute.called(spy);
      },

      "should report an entry in the gamepad list when one connected": function() {
        connectOneDevice(0);

        var gamepads = this.api.getGamepads();

        assert.equals(gamepads.length, 1);
      },

      "should call listener for connected": function() {
        var spy = this.spy(this.listener, "onGamepadConnected");

        connectOneDevice(0);

        assert.called(spy);
      },

      "should call listener for disconnected": function() {
        var spy = this.spy(this.listener, "onGamepadDisconnected");

        connectOneDevice(0);
        disconnectDevice(0);

        assert.called(spy);
      }
    }

  });
});