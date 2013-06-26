/* global buster */
define(["production/Reel", "production/Track"], function(Reel, Track) {
  "use strict";

  var assert = buster.assert;

  buster.testCase("Reel", {
    setUp: function() {
      this.reel = new Reel();
    },

    "should have a length of 0 if empty": function() {
      assert.equals(this.reel.getLength(), 0);
    },

    "should have the length of the added track": function() {
      var track = new Track([1, 2, 3]);

      this.reel.addTrack(track);

      assert.equals(this.reel.getLength(), 3);
    },

    "should have the length of the longest contained track": function() {
      var track1 = new Track([1, 2, 3]);
      var track2 = new Track([1, 2, 3, 4, 5]);
      var track3 = new Track([1, 2]);

      this.reel.addTrack(track1);
      this.reel.addTrack(track2);
      this.reel.addTrack(track3);

      assert.equals(this.reel.getLength(), 5);
    },

    "should synchronize an added reel to current position": function() {
      var track = new Track([1, 2, 3, 4]);

      track.setCurrentFrame(2);
      this.reel.addTrack(track);

      assert.equals(track.getFrameData(), 1);
    },

    "should allow skipping to specific positions": function() {
      var track = new Track([1, 2, 3, 4]);

      this.reel.addTrack(track);
      this.reel.skipTo(1);

      assert.equals(track.getFrameData(), 2);
    },

    "should provide function to advance to next frame": function() {
      var track = new Track([1, 2, 3, 4]);

      this.reel.addTrack(track);
      this.reel.skipTo(2);

      this.reel.nextFrame();

      assert.equals(this.reel.getPosition(), 3);
    }
  });
});