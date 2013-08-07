define(['jade'], function(jade) { if(jade && jade['runtime'] !== undefined) { jade = jade.runtime; }

this["UiTemplates"] = this["UiTemplates"] || {};

this["UiTemplates"]["AddPropDialog"] = function anonymous(locals) {
var buf = [];
buf.push("<div class=\"modal-header\"><h3>Add a prop</h3></div><div class=\"modal-body\"><div class=\"row-fluid\"><input type=\"text\" ng-model=\"search.text\" placeholder=\"Blank separated search words\" class=\"span12\"/></div><div class=\"row-fluid\"><tabset class=\"span12\"><tab heading=\"Ship\"><div class=\"row-fluid\"><select ng-model=\"search.selected\" ng-options=\"prop as prop.propData.resourceUrl for prop in filteredShips\" size=\"10\" class=\"span12\"></select></div></tab><tab heading=\"Planet\"><div class=\"row-fluid\"><select ng-model=\"search.selected\" ng-options=\"prop as prop.propData.resourceUrl for prop in filteredPlanets\" size=\"10\" class=\"span12\"></select></div></tab><tab heading=\"Scenery\"><div class=\"row-fluid\"><select ng-model=\"search.selected\" ng-options=\"prop as prop.propData.resourceUrl for prop in filteredSceneries\" size=\"10\" class=\"span12\"></select></div></tab></tabset></div></div><div class=\"modal-footer\"><button ng-click=\"add(search.selected)\" ng-disabled=\"!search.selected\" class=\"btn btn-primary\">Add</button><button ng-click=\"cancel()\" class=\"btn\">Cancel</button></div>");;return buf.join("");
};

this["UiTemplates"]["CreateSessionDialog"] = function anonymous(locals) {
var buf = [];
buf.push("<div class=\"modal-header\"><h3>Create a Session</h3><span>eve-kino v.{{version}}</span></div><div class=\"modal-body\"><tabset><tab heading=\"Background\"><div class=\"btn-group\"><button type=\"button\" ng-model=\"set.type\" btn-radio=\"'space'\" class=\"btn\">Space</button><button type=\"button\" ng-model=\"set.type\" btn-radio=\"'chromaKey'\" class=\"btn\">Chroma Key</button></div><div class=\"row-fluid\"><div ng-show=\"(set.type == 'space')\">Select a background:<div class=\"row-fluid\"><select ng-model=\"set.selectedBackground\" ng-options=\"bg as bg.resourceUrl for bg in backgrounds\" size=\"5\" class=\"span12\"></select></div></div><div ng-show=\"(set.type == 'chromaKey')\">Pick a color (RGB values):<div data-color-input color=\"set.chromaKey.color\" on-change=\"colorInputChanged()\"></div></div></div></tab><tab heading=\"By File\"><div data-file-input=\"file\" on-change=\"readFile(file)\">Choose File</div></tab><tab heading=\"Quality\"><div ng-repeat=\"option in qualityOptions\" class=\"row-fluid\"><div class=\"span4\">{{option.title}}</div><div class=\"span8 btn-group\"><button type=\"button\" ng-repeat=\"value in option.values\" ng-model=\"selectedOptions[option.field]\" btn-radio=\"value.id\" class=\"btn\">{{value.title}}</button></div></div><div class=\"row-fluid\"><div class=\"span12\">Some of these settings are dependent on machine or resources and might not be available.</div></div></tab></tabset></div><div class=\"modal-footer\"><button ng-click=\"create(set.type)\" ng-disabled=\"!canBeCreated()\" class=\"btn btn-primary\">Create</button></div>");;return buf.join("");
};

this["UiTemplates"]["SplashDialog"] = function anonymous(locals) {
var buf = [];
buf.push("<div class=\"modal-header\"><h3>{{ title }}</h3></div><div class=\"modal-body\">{{ message }}</div>");;return buf.join("");
};

return this["UiTemplates"];

});