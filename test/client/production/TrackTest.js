/* global buster */
define(["production/Track"], function(Track) {
  "use strict";

  var assert = buster.assert;

  buster.testCase("Track", {

    "should return nothing for frame data without stored data": function() {
      var track = new Track([]);
      var result = track.getFrameData();

      assert.isNull(result);
    },

    "should return first frame data when initialized with stored data": function() {
      var track = new Track(["Frame1", "Frame2", "Frame3"]);
      var result = track.getFrameData();

      assert.equals(result, "Frame1");
    },

    "should return frame data of indexed frame": function() {
      var track = new Track(["Frame1", "Frame2", "Frame3"]);

      track.setCurrentFrame(1);
      var result = track.getFrameData();

      assert.equals(result, "Frame2");
    },

    "should return frame data of last frame if index is beyond end": function() {
      var track = new Track(["Frame1", "Frame2", "Frame3"]);

      track.setCurrentFrame(10);
      var result = track.getFrameData();

      assert.equals(result, "Frame3");
    },

    "should ignore recording of new data if not in recording state": function() {
      var track = new Track(["Frame1", "Frame2", "Frame3"]);

      track.setCurrentFrame(1);

      track.setFrameData("newFrame2");
      var result = track.getFrameData();

      assert.equals(result, "Frame2");
    },

    "should record new data when in recording state": function() {
      var track = new Track(["Frame1", "Frame2", "Frame3"]);

      track.setCurrentFrame(2);
      track.setRecording(true);

      track.setFrameData("newFrame3");
      var result = track.getFrameData();

      assert.equals(result, "newFrame3");
    },

    "should allow recording past end, extending the track": function() {
      var track = new Track(["Frame1", "Frame2", "Frame3"]);

      track.setCurrentFrame(3);
      track.setRecording(true);

      track.setFrameData("newFrame4");
      var result = track.getFrameData();

      assert.equals(result, "newFrame4");
    },

    "should retain state of previous end if recording continues far beyond end": function() {
      var track = new Track(["Frame1", "Frame2", "Frame3"]);

      track.setCurrentFrame(9);
      track.setRecording(true);
      track.setFrameData("newFrame10");

      track.setCurrentFrame(5);
      var result = track.getFrameData();

      assert.equals(result, "Frame3");
    },

    "should retain state of new recorded frame beyond index 0 if track is empty": function() {
      var track = new Track([]);

      track.setCurrentFrame(9);
      track.setRecording(true);
      track.setFrameData("newFrame10");

      track.setCurrentFrame(3);
      var result = track.getFrameData();

      assert.equals(result, "newFrame10");
    }

  });
});