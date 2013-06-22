define("lib/gamepad", [], function() {
  "use strict";

  var GamepadLib = function() {

  };

  var listeners = {};

  GamepadLib.Event = {
    CONNECTED: "1",
    DISCONNECTED: "2",
    BUTTON_DOWN: "3",
    BUTTON_UP: "4",
    AXIS_CHANGED: "5"
  };

  GamepadLib.prototype.init = function() {};
  GamepadLib.prototype.bind = function(event, listener) {
    listeners[event] = listener;
  };

  GamepadLib.fire = function(event, param) {
    var l = listeners[event];

    if (l) {
      l(param);
    }
  };

  return GamepadLib;
});