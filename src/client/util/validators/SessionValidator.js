/* global console */
/**
This validator handles session data

@module Client
@class SessionValidator
*/
define(["lib/jski"], function(jski) {
  "use strict";

  var setSpaceBackground = jski.object({
    space: jski.object({
      background: jski.string()
    }).required("background")
  }).required("space");
  var setChromaKeyBackground = jski.object({
    chromaKey: jski.object({
      color: jski.array(jski.number()).minItems(3).maxItems(3).additionalItems(false)
    }).required("color")
  }).required("chromaKey");

  var trackSchema = jski.array(jski.object({}));

  var propDataSchema = jski.object({
    propType: jski.string()
  }).required("propType");

  var propSchema = jski.object({
    propData: propDataSchema,
    script: trackSchema
  }).required("propData", "script");

  var stageSchema = jski.object({
    props: jski.array(propSchema).additionalItems(false)
  }).required("props");

  var cameraSchema = jski.object({
    shotList: trackSchema
  }).required("shotList");

  var videographySchema = jski.object({
    cameras: jski.array(cameraSchema).additionalItems(false)
  }).required("cameras");

  var schema = jski.object({
    ver: jski.number().minimum(0),
    session: jski.object({
      set: jski.anyOf(setSpaceBackground, setChromaKeyBackground)
    }).required("set"),
    stage: stageSchema,
    videography: videographySchema
  }).required("ver", "session", "stage", "videography");

  var Validator = function() {

  };

  Validator.prototype.isValid = function(object) {
    var errors = schema.validate(object);

    return errors.length === 0;
  };

  return Validator;
});