/* global FileReader */
/**
This service wraps the FileReader and transforms an evented API into a promise API.

Source: http://odetocode.com/blogs/scott/archive/2013/07/03/building-a-filereader-service-for-angularjs-the-service.aspx

@module Client
@class FileInputDirective
*/
define([], function() {
  "use strict";

  var fileReader = function($q) {

    var onLoad = function(scope, deferred, reader) {
      return function() {
        scope.$apply(function() {
          deferred.resolve(reader.result);
        });
      };
    };

    var onError = function(scope, deferred, reader) {
      return function() {
        scope.$apply(function() {
          deferred.reject(reader.result);
        });
      };
    };

    var getReader = function(scope, deferred) {
      var reader = new FileReader();

      reader.onload = onLoad(scope, deferred, reader);
      reader.onerror = onError(scope, deferred, reader);

      return reader;
    };

    var readAsText = function(scope, file, encoding) {
      var deferred = $q.defer();
      var reader = getReader(scope, deferred);

      reader.readAsText(file, encoding);

      return deferred.promise;
    };

    return {
      readAsText: readAsText
    };
  };

  var register = function(angular, appModule) {
    appModule.factory("fileReader", ["$q", fileReader]);
  };

  var service = {
    register: register
  };

  return service;
});