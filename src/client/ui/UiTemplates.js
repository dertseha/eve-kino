define(['jade'], function(jade) { if(jade && jade['runtime'] !== undefined) { jade = jade.runtime; }

this["UiTemplates"] = this["UiTemplates"] || {};

this["UiTemplates"]["CreateSessionDialog"] = function anonymous(locals) {
var buf = [];
buf.push("<div class=\"modal-header\"><h3>Create a Session</h3></div><div class=\"modal-body\"><div class=\"btn-group\"><button type=\"button\" ng-model=\"setType\" btn-radio=\"'space'\" class=\"btn\">Space</button><button type=\"button\" ng-model=\"setType\" btn-radio=\"'chromaKey'\" class=\"btn\">Chroma Key</button></div><div class=\"row-fluid\"><div ng-show=\"(setType == 'space')\">Select a background:<div class=\"row-fluid\"><select ng-model=\"selectedBackground\" ng-options=\"bg as bg.resourceUrl for bg in backgrounds\" size=\"5\" class=\"span12\"></select></div></div><div ng-show=\"(setType == 'chromaKey')\">Pick a color (RGB values):<div class=\"row-fluid\"><div class=\"span4\"><input type=\"text\" ng-model=\"chromaKey\" placeholder=\"#0044BB or #0F0\"/></div><div class=\"span4\"></div><div ng-style=\"{ 'backgroundColor': chromaKey }\" class=\"span4 container\"></div></div></div></div></div><div class=\"modal-footer\"><button ng-click=\"create(setType)\" ng-disabled=\"!canBeCreated()\" class=\"btn btn-primary\">Create</button></div>");;return buf.join("");
};

this["UiTemplates"]["SplashDialog"] = function anonymous(locals) {
var buf = [];
buf.push("<div class=\"modal-header\"><h3>{{ title }}</h3></div><div class=\"modal-body\">{{ message }}</div>");;return buf.join("");
};

return this["UiTemplates"];

});