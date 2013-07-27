define(['jade'], function(jade) { if(jade && jade['runtime'] !== undefined) { jade = jade.runtime; }

this["UiTemplates"] = this["UiTemplates"] || {};

this["UiTemplates"]["CreateSessionDialog"] = function anonymous(locals) {
var buf = [];
buf.push("<div class=\"modal-header\"><h3>Create a Session</h3><span>eve-kino v.{{version}}</span></div><div class=\"modal-body\"><tabset><tab heading=\"Background\"><div class=\"btn-group\"><button type=\"button\" ng-model=\"set.type\" btn-radio=\"'space'\" class=\"btn\">Space</button><button type=\"button\" ng-model=\"set.type\" btn-radio=\"'chromaKey'\" class=\"btn\">Chroma Key</button></div><div class=\"row-fluid\"><div ng-show=\"(set.type == 'space')\">Select a background:<div class=\"row-fluid\"><select ng-model=\"set.selectedBackground\" ng-options=\"bg as bg.resourceUrl for bg in backgrounds\" size=\"5\" class=\"span12\"></select></div></div><div ng-show=\"(set.type == 'chromaKey')\">Pick a color (RGB values):<div data-color-input color=\"set.chromaKey.color\" on-change=\"colorInputChanged()\"></div></div></div></tab><tab heading=\"By File\"><div data-file-input=\"file\" on-change=\"readFile(file)\">Choose File</div></tab></tabset></div><div class=\"modal-footer\"><button ng-click=\"create(set.type)\" ng-disabled=\"!canBeCreated()\" class=\"btn btn-primary\">Create</button></div>");;return buf.join("");
};

this["UiTemplates"]["SplashDialog"] = function anonymous(locals) {
var buf = [];
buf.push("<div class=\"modal-header\"><h3>{{ title }}</h3></div><div class=\"modal-body\">{{ message }}</div>");;return buf.join("");
};

return this["UiTemplates"];

});