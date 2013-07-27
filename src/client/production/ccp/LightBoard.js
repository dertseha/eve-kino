/**
The light board provides access to lighting controls

@module Client
@class LightBoard
*/
define(["lib/q"], function(q) {
  "use strict";

  var SunLoadedState = function() {
    this.context = null;
  };

  SunLoadedState.prototype.activate = function(context) {
    this.context = context;
  };

  SunLoadedState.prototype.request = function(deferred, resourceUrl) {
    this.context.activateSunState(new SunLoadingState(deferred, resourceUrl));
  };

  SunLoadedState.prototype.remove = function() {
    this.context.activateSunState(new SunUnloadingState());
  };

  var SunUnloadingState = function() {

  };

  SunUnloadingState.prototype.activate = function(context) {
    context.scene.removeSun();
    context.activateSunState(new SunUnloadedState());
  };

  var SunLoadingState = function(deferred, resourceUrl) {
    this.context = null;
    this.resourceUrl = resourceUrl;
    this.deferred = deferred;

    this.nextState = new SunLoadedState();
  };

  SunLoadingState.prototype.activate = function(context) {
    var that = this;

    context.scene.loadSun(this.resourceUrl, function() {
      context.stateData.starResourceUrl = that.resourceUrl;
      context.activateSunState(that.nextState);
      that.deferred.resolve();
    });
  };

  SunLoadingState.prototype.request = function(deferred, resourceUrl) {
    this.nextState = new SunLoadingState(deferred, resourceUrl);
  };

  SunLoadingState.prototype.remove = function() {
    this.nextState = new SunUnloadingState();
  };

  var SunUnloadedState = function() {
    this.context = null;
  };

  SunUnloadedState.prototype.activate = function(context) {
    this.context = context;
  };

  SunUnloadedState.prototype.request = function(deferred, resourceUrl) {
    return this.context.activateSunState(new SunLoadingState(deferred, resourceUrl));
  };

  SunUnloadedState.prototype.remove = function() {

  };

  var LightBoard = function(ccpwgl, scene) {
    this.ccpwgl = ccpwgl;
    this.scene = scene;

    this.stateData = {
      starLightColor: [0, 0, 0],
      starResourceUrl: ""
    };

    this.setStarLightColor(this.stateData.starLightColor); // reset

    this.activateSunState(new SunUnloadedState());
  };

  LightBoard.prototype.getStateData = function() {
    return this.stateData;
  };

  LightBoard.prototype.activateSunState = function(state) {
    this.sunState = state;
    state.activate(this);
  };

  LightBoard.prototype.setStarLightColor = function(rgb) {
    this.stateData.starLightColor = rgb || [0, 0, 0];
    this.scene.setSunLightColor(this.stateData.starLightColor);
  };

  /**
   * Requests a star based on given URL. The returned promise will only be
   * resolved. Time-outs or several sequential re-requests will have the
   * promise ignored.
   *
   * @method requestStar
   * @param {String} resourceUrl the URL of the star
   * @return {Promise} Will be resolved when star loaded.
   */
  LightBoard.prototype.requestStar = function(resourceUrl) {
    var deferred = q.defer();

    this.sunState.request(deferred, resourceUrl);

    return deferred.promise;
  };

  /**
   * Requests to remove the current star. If one is still loading, it will
   * be removed as soon as it is ready.
   */
  LightBoard.prototype.removeStar = function() {
    this.sunState.remove();
  };

  LightBoard.SunStates = {
    Unloaded: SunUnloadedState,
    Loading: SunLoadingState,
    Loaded: SunLoadedState,
    Unloading: SunUnloadingState
  };

  return LightBoard;
});