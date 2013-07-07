/**
The data-film-view directive handles the correct display of a film view and
its contained port.

@module Client
@class FilmViewDirective
*/
define(["util/BrowserHelper"], function(browserHelper) {
	"use strict";

	var register = function(angular, appModule) {
		appModule.directive("filmView", function($window) {
			return function(scope, element) {
				var area = element[0];
				var win = angular.element($window);
				var ratio = 16.0 / 9.0;

				scope.getAreaDimension = function() {
					return {
						width: area.clientWidth,
						height: area.clientHeight
					};
				};

				scope.goFullscreen = function() {
					if (!area.requestFullScreen) {
						area.requestFullScreen = browserHelper.findPrefixProperty(area, "RequestFullScreen", function() {});
					}
					area.requestFullScreen();
				};

				scope.$watch(scope.getAreaDimension, function(newValue, oldValue) {
					scope.style = function() {
						var height = (newValue.width / ratio).toFixed(0);
						var top = 0;

						if (newValue.height > height) {
							top = ((newValue.height - height) / 2).toFixed(0);
						}

						return {
							position: "relative",
							top: top + "px",
							width: newValue.width + "px",
							height: height + "px"
						};
					};
				}, true);

				win.bind("resize", function() {
					scope.$apply();
				});
			};
		});

	};

	var directive = {
		register: register
	};

	return directive;
});