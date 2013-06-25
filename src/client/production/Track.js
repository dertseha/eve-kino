/**
A track stores data for one thing in a recording

@module Client
@class Track
*/
define([], function() {
  "use strict";

  var Track = function(data) {
    this.data = data;
    this.currentFrame = 0;
  };

  Track.prototype.setCurrentFrame = function(index) {
    this.currentFrame = index;
  };

  Track.prototype.getFrameData = function() {
    var data = null;
    var dataLength = this.data.length;

    if (dataLength > 0) {
      data = (dataLength > this.currentFrame) ? this.data[this.currentFrame] : this.data[dataLength - 1];
    }

    return data;
  };

  Track.prototype.setRecording = function(state) {
    this.recording = state;
  };

  Track.prototype.setFrameData = function(data) {
    var dataLength = this.data.length;

    if (this.recording) {
      if (dataLength < this.currentFrame) {
        if (dataLength > 0) {
          this.pushFrameUntilCurrentIndex(this.data[dataLength - 1]);
        } else {
          this.pushFrameUntilCurrentIndex(data);
        }
      }
      this.data[this.currentFrame] = data;
    }
  };

  Track.prototype.pushFrameUntilCurrentIndex = function(data) {
    var dataLength = this.data.length;

    while (dataLength < this.currentFrame) {
      this.data.push(data);
      dataLength++;
    }
  };

  return Track;
});