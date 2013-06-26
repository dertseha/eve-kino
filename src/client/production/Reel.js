/**
A reel contains one or more tracks and keeps them in sync

@module Client
@class Reel
*/
define([], function() {
  "use strict";

  var Reel = function() {
    this.tracks = [];
    this.currentFrame = 0;
  };

  Reel.prototype.getPosition = function() {
    return this.currentFrame;
  };

  Reel.prototype.getLength = function() {
    var length = 0;

    this.tracks.forEach(function(track) {
      var trackLength = track.getLength();

      if (trackLength > length) {
        length = trackLength;
      }
    });

    return length;
  };

  Reel.prototype.addTrack = function(track) {
    this.tracks.push(track);
    track.setCurrentFrame(this.currentFrame);
  };

  Reel.prototype.skipTo = function(frame) {
    this.currentFrame = frame;
    this.tracks.forEach(function(track) {
      track.setCurrentFrame(frame);
    });
  };

  Reel.prototype.nextFrame = function() {
    this.skipTo(this.currentFrame + 1);
  };

  return Reel;
});