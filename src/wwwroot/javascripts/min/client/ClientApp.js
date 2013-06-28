define("Defaults",[],function(){var t={inputsByAction:{}},e=function(e,n){t.inputsByAction[e]=n};return e("yawLeft","RIGHT_STICK_X_NEG"),e("yawRight","RIGHT_STICK_X_POS"),e("pitchUp","RIGHT_STICK_Y_POS"),e("pitchDown","RIGHT_STICK_Y_NEG"),e("rollClockwise","LEFT_STICK_X_POS"),e("rollCounter","LEFT_STICK_X_NEG"),e("moveForward","RB"),e("moveBackward","LB"),e("moveLeft","X"),e("moveRight","B"),e("moveUp","Y"),e("moveDown","A"),t}),define("util/GlHelper",["lib/gl-matrix"],function(t){t.mat4.multiply3x3=t.mat4.multiplyVec3;var e=Math.PI/180,n={forward:-1,upward:-1,rightward:1},o={rollClockwise:-1,pitchUp:-1,yawRight:-1},r={forward:1,upward:1,rightward:-1},i={rollClockwise:1,pitchUp:1,yawRight:-1},a={VIEW_DIRECTION_FORWARD:n.forward,VIEW_DIRECTION_UP:n.upward,VIEW_DIRECTION_RIGHT:n.rightward,VIEW_ROTATION_ROLL_CLOCKWISE:o.rollClockwise,VIEW_ROTATION_PITCH_UP:o.pitchUp,VIEW_ROTATION_YAW_RIGHT:o.yawRight,VIEW_VECTOR_FORWARD:t.vec3.create([0,0,n.forward]),VIEW_VECTOR_UP:t.vec3.create([0,n.upward,0]),VIEW_VECTOR_RIGHT:t.vec3.create([n.rightward,0,0]),MODEL_DIRECTION_FORWARD:r.forward,MODEL_DIRECTION_UP:r.upward,MODEL_DIRECTION_RIGHT:r.rightward,MODEL_ROTATION_ROLL_CLOCKWISE:i.rollClockwise,MODEL_ROTATION_PITCH_UP:i.pitchUp,MODEL_ROTATION_YAW_RIGHT:i.yawRight,MODEL_VECTOR_FORWARD:t.vec3.create([0,0,r.forward]),MODEL_VECTOR_UP:t.vec3.create([0,r.upward,0]),MODEL_VECTOR_RIGHT:t.vec3.create([r.rightward,0,0]),degreeToRad:function(t){return t*e}};return a}),define("production/Animator",["lib/gl-matrix","util/GlHelper"],function(t,e){var n=t.quat4.create(),o=t.vec3.create(),r={getFrameData:function(){return null}},i=function(o,r,i,a){t.quat4.fromAngleAxis(r*e.MODEL_ROTATION_ROLL_CLOCKWISE,e.MODEL_VECTOR_FORWARD,n),t.quat4.multiply(o,n,o),t.quat4.fromAngleAxis(i*e.MODEL_ROTATION_PITCH_UP,e.MODEL_VECTOR_RIGHT,n),t.quat4.multiply(o,n,o),t.quat4.fromAngleAxis(a*e.MODEL_ROTATION_YAW_RIGHT,e.MODEL_VECTOR_UP,n),t.quat4.multiply(o,n,o)},a=function(t){this.prop=t,this.script=r,this.commandChannel=null,this.lastState=null};return a.prototype.setScript=function(t){this.script=t},a.prototype.getScript=function(){return this.script},a.prototype.getProp=function(){return this.prop},a.prototype.setCommandChannel=function(t){this.commandChannel=t},a.prototype.update=function(){var t=this.prop.getStateData(this.lastState),e=this.prop.getStateData(),n=this.script.getFrameData()||e;e=this.commandChannel?this.updateByCommands(e,t,n):n,this.prop.setStateData(e),this.script.setFrameData(e),this.lastState=t},a.prototype.updateByCommands=function(n){var r=this.commandChannel.getCommands(),a=.02*(r.rollClockwise-r.rollCounter),s=.02*(r.pitchUp-r.pitchDown),c=.02*(r.yawRight-r.yawLeft),u=r.moveUp-r.moveDown,p=r.moveRight-r.moveLeft,h=r.moveForward-r.moveBackward;return i(n.rotation,a,s,c),o[0]=p*e.MODEL_DIRECTION_RIGHT,o[1]=u*e.MODEL_DIRECTION_UP,o[2]=6.6*h*e.MODEL_DIRECTION_FORWARD,t.quat4.multiplyVec3(n.rotation,o),n.position[0]+=o[0],n.position[1]+=o[1],n.position[2]+=o[2],n},a}),define("production/StageManager",["production/Animator"],function(t){var e=function(t){this.stage=t,this.animators=[]};return e.prototype.updateStage=function(){this.animators.forEach(function(t){t.update()})},e.prototype.getAnimator=function(e){var n=this.findAnimatorByProp(e);return n||(n=new t(e),this.animators.push(n)),n},e.prototype.findAnimatorByProp=function(t){var e=null;return this.animators.forEach(function(n){n.getProp()===t&&(e=n)}),e},e}),define("controls/CommandChannel",[],function(){var t=function(t,e,n,o){this.owner=t,this.id=e,this.type=n,this.actions=o,this.resetCommands()};return t.prototype.resetCommands=function(){var t=this;this.commands={},this.actions.forEach(function(e){t.commands[e]=0})},t.prototype.close=function(){this.owner.removeCommandChannel(this.id)},t.prototype.hasAction=function(t){return this.actions.indexOf(t)>=0},t.prototype.setCommandIntensity=function(t,e){this.commands[t]=e},t.prototype.getCommands=function(){return this.commands},t}),define("controls/InputChannel",[],function(){var t=function(t,e,n){this.owner=t,this.id=e,this.type=n};return t.prototype.close=function(){this.owner.removeInputChannel(this.id)},t.prototype.setIntensity=function(t,e){this.owner.setInputIntensity(this.type,t,e)},t}),define("production/Director",["controls/CommandChannel","controls/InputChannel"],function(t,e){var n=function(){this.bindings={},this.commandChannels={},this.inputChannels={},this.idCounter=0};return n.prototype.getNextId=function(){return""+this.idCounter++},n.prototype.getInputChannel=function(t){var n=this.getNextId(),o=new e(this,n,t);return this.inputChannels[n]=o,o},n.prototype.removeInputChannel=function(t){delete this.inputChannels[t]},n.prototype.getCommandChannel=function(e,n){var o=this.getNextId(),r=new t(this,o,e,n);return this.commandChannels[o]=r,r},n.prototype.removeCommandChannel=function(t){delete this.commandChannels[t]},n.prototype.getBindings=function(){return this.bindings},n.prototype.addBinding=function(t,e){this.bindings[t.actionName]=[e]},n.prototype.setInputIntensity=function(t,e,n){var o=this,r=function(t){var r=o.bindings[t];r&&r.forEach(function(r){e===r.inputName&&o.setActionIntensity(t,n)})};for(var i in this.bindings)r(i)},n.prototype.setActionIntensity=function(t,e){var n,o;for(n in this.commandChannels)o=this.commandChannels[n],o.hasAction(t)&&o.setCommandIntensity(t,e)},n}),define("production/CameraOperator",["lib/gl-matrix","util/GlHelper"],function(t,e){var n=["pitchUp","pitchDown","rollClockwise","rollCounter","yawRight","yawLeft","moveUp","moveDown","moveForward","moveBackward","moveRight","moveLeft"],o=t.vec3.create(),r=function(){var n=t.quat4.create();return function(o,r,i,a){t.quat4.fromAngleAxis(r*e.VIEW_ROTATION_ROLL_CLOCKWISE,e.VIEW_VECTOR_FORWARD,n),t.quat4.multiply(n,o,o),t.quat4.fromAngleAxis(i*e.VIEW_ROTATION_PITCH_UP,e.VIEW_VECTOR_RIGHT,n),t.quat4.multiply(n,o,o),t.quat4.fromAngleAxis(a*e.VIEW_ROTATION_YAW_RIGHT,e.VIEW_VECTOR_UP,n),t.quat4.multiply(n,o,o)}}(),i=function(e,n){t.quat4.set(e,n),r(n,0,0,-Math.PI),t.quat4.inverse(n)},a=function(){var e=t.quat4.create();return function(n,o){return i(n,e),t.quat4.multiplyVec3(e,o),o}}(),s=function(t,e){this.camera=t,this.shotList=e,this.commandChannel=null,this.lastState=null};return s.getActionNames=function(){return n.slice(0)},s.prototype.getShotList=function(){return this.shotList},s.prototype.setCommandChannel=function(t){this.commandChannel=t},s.prototype.setChaseObject=function(t){this.chaseObject=t},s.prototype.placeObjectInFrontOfCamera=function(e,n){var o=e.getStateData(),r=this.camera.getStateData(),a=n>10?n:10;i(r.rotation,o.rotation),o.position=[0,0,a],t.quat4.multiplyVec3(o.rotation,o.position),t.vec3.subtract(o.position,r.position),e.setStateData(o)},s.prototype.updateCamera=function(){var t=this.camera,e=t.getStateData(this.lastState),n=t.getStateData(),o=this.shotList.getFrameData()||n;n=this.chaseObject?this.updateByChase(n,e):this.commandChannel?this.updateByCommands(n,e,o):o,t.setStateData(n),this.shotList.setFrameData(n),this.lastState=e},s.prototype.updateByChase=function(n){var o=this.chaseObject.getStateData(),i=this.chaseObject.getBoundingSphereRadius(),a=-10-2*i;return t.vec3.negate(o.position,n.position),t.quat4.set(o.rotation,n.rotation),t.quat4.inverse(n.rotation),r(n.rotation,0,e.degreeToRad(-1)*e.VIEW_ROTATION_PITCH_UP,Math.PI),t.vec3.set([0,.5*-i,a],n.viewOffset),n},s.prototype.updateByCommands=function(t){var n=this.commandChannel.getCommands(),i=.02*(n.rollClockwise-n.rollCounter),s=.02*(n.pitchUp-n.pitchDown),c=.02*(n.yawRight-n.yawLeft),u=n.moveUp-n.moveDown,p=n.moveRight-n.moveLeft,h=n.moveForward-n.moveBackward;return r(t.rotation,i,s,c),o[0]=p*e.VIEW_DIRECTION_RIGHT,o[1]=u*e.VIEW_DIRECTION_UP,o[2]=6.6*h*e.VIEW_DIRECTION_FORWARD,a(t.rotation,o),t.position[0]+=o[0],t.position[1]+=o[1],t.position[2]+=o[2],t.viewOffset[0]=t.viewOffset[1]=t.viewOffset[2]=0,t},s}),define("production/Resources",["production/StageManager","production/Director","production/CameraOperator"],function(t,e,n){var o={StageManager:t,Director:e,CameraOperator:n};return o}),define("controls/Gamepad",["lib/gamepad"],function(){var t=function(){this.listeners=[]};return t.prototype.getRuntimeId=function(){return this.runtimeId},t.prototype.addListener=function(t){this.listeners.push(t)},t.prototype.onDeviceDisconnected=function(){this.listeners.forEach(function(t){t.onGamepadDisconnected()})},t.prototype.onControlValueChanged=function(t,e){this.listeners.forEach(function(n){n.onControlValueChanged(t,e)})},t}),define("controls/GamepadApi",["lib/gamepad","controls/Gamepad"],function(t,e){var n=function(){this.lib=new t,this.gamepads={},this.idCounter=0,this.connectionListeners=[]};return n.prototype.init=function(){var e=this;return this.lib.bind(t.Event.CONNECTED,function(t){e.onDeviceConnected(t)}),this.lib.bind(t.Event.DISCONNECTED,function(t){e.onDeviceDisonnected(t)}),this.lib.bind(t.Event.BUTTON_DOWN,function(t){e.onControlValueChanged(t.gamepad.index,t.control,1)}),this.lib.bind(t.Event.BUTTON_UP,function(t){e.onControlValueChanged(t.gamepad.index,t.control,0)}),this.lib.bind(t.Event.AXIS_CHANGED,function(t){e.onAxisValueChanged(t.gamepad.index,t.axis,t.value)}),this.lib.init()},n.prototype.getGamepads=function(){var t,e=[];for(t in this.gamepads)e.push(this.gamepads[t]);return e},n.prototype.addGamepadListener=function(t){this.connectionListeners.push(t)},n.prototype.onDeviceConnected=function(t){var n=new e(this.idCounter++);this.gamepads[t.index]=n,this.connectionListeners.forEach(function(t){t.onGamepadConnected(n)})},n.prototype.onDeviceDisonnected=function(t){var e=this.gamepads[t.index];e&&(delete this.gamepads[t.index],e.onDeviceDisconnected(),this.connectionListeners.forEach(function(t){t.onGamepadDisconnected(e)}))},n.prototype.onControlValueChanged=function(t,e,n){var o=this.gamepads[t];o&&o.onControlValueChanged(e,n)},n.prototype.onAxisValueChanged=function(t,e,n){var o=this.gamepads[t];o&&(0>n?(o.onControlValueChanged(e+"_POS",0),o.onControlValueChanged(e+"_NEG",-n)):(o.onControlValueChanged(e+"_NEG",0),o.onControlValueChanged(e+"_POS",n)))},n}),define("production/ccp/res/Ship",["lib/gl-matrix"],function(t){var e=function(e,n){this.ccpwgl=e,this.obj=n,this.position=t.vec3.create(),this.rotation=t.quat4.identity(),this.transform=t.mat4.identity()};return e.prototype.getBoundingSphereRadius=function(){return this.obj.getBoundingSphere()[1]},e.prototype.getStateData=function(e){var n=e||{};return n.position=t.vec3.set(this.position,n.position||[0,0,0]),n.rotation=t.quat4.set(this.rotation,n.rotation||[0,0,0,1]),n},e.prototype.setStateData=function(e){t.vec3.set(e.position,this.position),t.quat4.set(e.rotation,this.rotation),t.mat4.fromRotationTranslation(this.rotation,this.position,this.transform),this.obj.setTransform(this.transform)},e}),define("production/ccp/res/ShipArchetype",["production/ccp/res/Ship"],function(t){var e=function(){this.resourceUrl=""};return e.prototype.request=function(e,n,o){return n.loadShip(this.resourceUrl,function(){o.resolve(new t(e,this))})},e.prototype.setResourceUrl=function(t){return this.resourceUrl=t,this},e}),define("production/ccp/res/Planet",["lib/gl-matrix"],function(t){var e=function(e){this.obj=e,this.position=t.vec3.create(),this.rotation=t.quat4.identity(),this.transform=t.mat4.identity(),this.radius=6e4};return e.prototype.getBoundingSphereRadius=function(){return this.radius},e.prototype.getStateData=function(e){var n=e||{};return n.position=t.vec3.set(this.position,n.position||[0,0,0]),n.rotation=t.quat4.set(this.rotation,n.rotation||[0,0,0,1]),n},e.prototype.setStateData=function(e){t.vec3.set(e.position,this.position),t.quat4.set(e.rotation,this.rotation),t.mat4.fromRotationTranslation(this.rotation,[0,0,0],this.transform),t.mat4.scale(this.transform,[this.radius/2,this.radius/2,this.radius/2]),this.transform[12]=this.position[0],this.transform[13]=this.position[1],this.transform[14]=this.position[2],this.obj.setTransform(this.transform)},e}),define("production/ccp/res/PlanetArchetype",["production/ccp/res/Planet"],function(t){var e=function(){this.resourceUrl="",this.itemId=0,this.atmosphereUrl=null,this.heightMap1Url=null,this.heightMap2Url=null};return e.prototype.request=function(e,n,o){var r=n.loadPlanet(this.itemId,this.resourceUrl,this.atmosphereUrl,this.heightMap1Url,this.heightMap2Url);o.resolve(new t(r))},e.prototype.setItemId=function(t){return this.itemId=t,this},e.prototype.setResourceUrl=function(t){return this.resourceUrl=t,this},e.prototype.setAtmosphereUrl=function(t){return this.atmosphereUrl=t,this},e.prototype.setHeightMap1Url=function(t){return this.heightMap1Url=t,this},e.prototype.setHeightMap2Url=function(t){return this.heightMap2Url=t,this},e}),define("production/ccp/res/Scenery",["lib/gl-matrix"],function(t){var e=function(e,n){this.ccpwgl=e,this.obj=n,this.position=t.vec3.create(),this.rotation=t.quat4.identity(),this.transform=t.mat4.identity()};return e.prototype.getBoundingSphereRadius=function(){return this.obj.getBoundingSphere()[1]},e.prototype.getStateData=function(e){var n=e||{};return n.position=t.vec3.set(this.position,n.position||[0,0,0]),n.rotation=t.quat4.set(this.rotation,n.rotation||[0,0,0,1]),n},e.prototype.setStateData=function(e){t.vec3.set(e.position,this.position),t.quat4.set(e.rotation,this.rotation),t.mat4.fromRotationTranslation(this.rotation,this.position,this.transform),this.obj.setTransform(this.transform)},e}),define("production/ccp/res/SceneryArchetype",["production/ccp/res/Scenery"],function(t){var e=function(){this.resourceUrl=""};return e.prototype.request=function(e,n,o){return n.loadObject(this.resourceUrl,function(){o.resolve(new t(e,this))})},e.prototype.setResourceUrl=function(t){return this.resourceUrl=t,this},e}),define("production/Track",[],function(){var t=function(t){this.data=t,this.currentFrame=0};return t.prototype.getLength=function(){return this.data.length},t.prototype.setCurrentFrame=function(t){this.currentFrame=t},t.prototype.getFrameData=function(){var t=null,e=this.data.length;return e>0&&(t=e>this.currentFrame?this.data[this.currentFrame]:this.data[e-1]),t},t.prototype.setRecording=function(t){this.recording=t},t.prototype.setFrameData=function(t){var e=this.data.length;this.recording&&(e<this.currentFrame&&(e>0?this.pushFrameUntilCurrentIndex(this.data[e-1]):this.pushFrameUntilCurrentIndex(t)),this.data[this.currentFrame]=t)},t.prototype.pushFrameUntilCurrentIndex=function(t){for(var e=this.data.length;e<this.currentFrame;)this.data.push(t),e++},t}),define("production/Reel",[],function(){var t=function(){this.tracks=[],this.currentFrame=0};return t.prototype.getPosition=function(){return this.currentFrame},t.prototype.getLength=function(){var t=0;return this.tracks.forEach(function(e){var n=e.getLength();n>t&&(t=n)}),t},t.prototype.addTrack=function(t){this.tracks.push(t),t.setCurrentFrame(this.currentFrame)},t.prototype.skipTo=function(t){this.currentFrame=t,this.tracks.forEach(function(e){e.setCurrentFrame(t)})},t.prototype.nextFrame=function(){this.skipTo(this.currentFrame+1)},t}),define("ApplicationController",["Defaults","production/Resources","controls/GamepadApi","production/ccp/res/ShipArchetype","production/ccp/res/PlanetArchetype","production/ccp/res/SceneryArchetype","production/Track","production/Reel"],function(t,e,n,o,r,i,a,s){var c=function(t,e){var n=new o;n.setResourceUrl(e),t.props.push(n)},u=function(t,e,n,o,i,a){var s=new r;s.setItemId(e),s.setResourceUrl(n),s.setAtmosphereUrl(o),s.setHeightMap1Url(i),s.setHeightMap2Url(a),t.props.push(s)},p=function(t,e){var n=new i;n.setResourceUrl(e),t.props.push(n)},h=function(t,e){t.status="Initializing...",t.record=function(){e.record()},t.pause=function(){e.stop()},t.play=function(){e.play()},t.addProp=function(t){e.addProp(t)},t.setFocusOnCamera=function(){e.setFocusOnCamera()},t.props=[],c(t,"res:/dx9/model/ship/amarr/battleship/ab3/ab3_t1.red"),c(t,"res:/dx9/model/ship/gallente/Cruiser/GC3/CreoDron/GC3_T2_CreoDron.red"),c(t,"res:/dx9/model/ship/amarr/at1/at1.red"),c(t,"res:/dx9/model/ship/jove/capsule/capsule.red"),u(t,40000002,"res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_61.red",void 0,"res:/dx9/model/worldobject/planet/Terrestrial/Terrestrial03_H.png","res:/dx9/model/worldobject/planet/Terrestrial/Terrestrial04_H.png"),u(t,40000100,"res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_12.red",void 0,"res:/dx9/model/worldobject/planet/Gasgiant/GasGiant01_D.png","res:/dx9/model/worldobject/planet/Gasgiant/GasGiant03_D.png"),p(t,"res:/dx9/Model/station/gallente/gs2/gs2.red"),p(t,"res:/dx9/model/jumpgate/amarr/abg.red"),p(t,"res:/dx9/model/worldobject/asteroid/zuthrine/shards/zuthrine_shard01_unmined.red")},d=function(t,e,n,o){var r=this;this.productionManager=n,h(t,this,e),n.setResourcePath("res","//web.ccpgamescdn.com/ccpwgl/res/");var i=n.createSet(o,"res:/dx9/scene/universe/a01_cube.red");i.then(function(e){r.onSetCreated(e),t.status="Set created",t.$apply()},function(e){t.status=e,t.$apply()})};d.prototype.addProp=function(t){var e=this,n=this.set.getStage().enter(t);n.then(function(t){var n=t.getBoundingSphereRadius();e.cameraOperator.placeObjectInFrontOfCamera(t,n),e.createScriptedAnimatorForProp(t),e.setFocusOnProp(t),e.cameraOperator.setChaseObject(t)})},d.prototype.createScriptedAnimatorForProp=function(t){var e=new a([]),n=this.stageManager.getAnimator(t);n.setScript(e),this.reel.addTrack(e)},d.prototype.createDefaultBindings=function(){for(var e in t.inputsByAction)this.director.addBinding({actionName:e},{inputName:t.inputsByAction[e]})},d.prototype.setupGamepadInput=function(){var t=this.director.getInputChannel("gamepad"),e={onGamepadDisconnected:function(){},onControlValueChanged:function(e,n){t.setIntensity(e,n)}},o=new n;o.addGamepadListener({onGamepadConnected:function(t){t.addListener(e)},onGamepadDisconnected:function(){}}),o.init()},d.prototype.onSetCreated=function(t){var n=this;this.set=t,this.director=new e.Director,this.reel=new s,this.stopReelTransmission(),this.camCommands=this.director.getCommandChannel("camera",e.CameraOperator.getActionNames());var o=new a([]);this.reel.addTrack(o),this.cameraOperator=new e.CameraOperator(t.getSceneCamera(),o),this.setFocusOnCamera(),this.stageManager=new e.StageManager(t.getStage()),this.createDefaultBindings(),this.setupGamepadInput(),this.animCommands=n.director.getCommandChannel("animator",e.CameraOperator.getActionNames()),t.getSyncSource().setCallback(function(){n.stageManager.updateStage(),n.cameraOperator.updateCamera(),n.reelTransmission.update()})},d.prototype.clearFocus=function(){this.focusTarget&&(this.focusTarget.setCommandChannel(null),this.focusTarget=null,this.focusTrack.setRecording(!1),this.focusTrack=null,this.focusCommandChannel=null)},d.prototype.setFocusOnCamera=function(){this.clearFocus(),this.focusTarget=this.cameraOperator,this.focusTrack=this.cameraOperator.getShotList(),this.focusCommandChannel=this.camCommands,this.cameraOperator.setChaseObject(null),this.focusTarget.setCommandChannel(this.focusCommandChannel)},d.prototype.setFocusOnProp=function(t){this.clearFocus(),this.focusTarget=this.stageManager.getAnimator(t),this.focusTrack=this.focusTarget.getScript(),this.focusCommandChannel=this.animCommands,this.focusTarget.setCommandChannel(this.focusCommandChannel)},d.prototype.record=function(){this.startReelTransmission(),this.reel.skipTo(0),this.focusTarget&&(this.focusTarget.setCommandChannel(this.focusCommandChannel),this.focusTrack.setRecording(!0))},d.prototype.stop=function(){this.stopReelTransmission(),this.reel.skipTo(0),this.focusTarget&&(this.focusTarget.setCommandChannel(null),this.focusTrack.setRecording(!1))},d.prototype.play=function(){this.startReelTransmission(),this.reel.skipTo(0),this.focusTarget&&(this.focusTarget.setCommandChannel(null),this.focusTrack.setRecording(!1))},d.prototype.startReelTransmission=function(){var t=this.reel;this.reelTransmission={update:function(){t.nextFrame()}}},d.prototype.stopReelTransmission=function(){this.reelTransmission={update:function(){}}};var l=function(t,e,n){return function(o){return new d(o,t,e,n)}};return{ApplicationController:d,create:l}}),define("production/ccp/SyncSource",[],function(){var t=60,e=function(t,e){this.ccpwgl=t,this.scene=e};return e.prototype.setCallback=function(t){this.ccpwgl.onPostRender=t},e.prototype.getRate=function(){return t},e}),define("production/ccp/Set",[],function(){var t=function(t){this.ccpwgl=t.ccpwgl,this.scene=t.scene,this.syncSource=t.syncSource,this.stage=t.stage,this.sceneCamera=t.sceneCamera,this.lightBoard=t.lightBoard};return t.prototype.getSyncSource=function(){return this.syncSource},t.prototype.getStage=function(){return this.stage},t.prototype.getSceneCamera=function(){return this.sceneCamera},t}),define("production/ccp/Stage",["lib/q"],function(t){var e=function(t,e){this.ccpwgl=t,this.scene=e};return e.prototype.enter=function(e){var n=t.defer();return e.request(this.ccpwgl,this.scene,n),n.promise},e}),define("production/ccp/SceneCamera",["lib/gl-matrix","util/GlHelper"],function(t){var e=function(){this.fov=60,this.nearPlane=1,this.farPlane=1e5,this.rotation=t.quat4.identity(),this.position=t.vec3.create(),this.viewOffset=t.vec3.create(),this.projection=t.mat4.create(),this.view=t.mat4.create(),this.updateView=this.calculateView};return e.prototype.nullFunction=function(){},e.prototype.calculateView=function(){t.mat4.fromRotationTranslation(this.rotation,this.viewOffset,this.view),t.mat4.translate(this.view,this.position),this.updateView=this.nullFunction},e.prototype.onViewChanged=function(){this.updateView=this.calculateView},e.prototype.getProjection=function(e){return t.mat4.perspective(this.fov,e,this.nearPlane,this.farPlane,this.projection),this.projection},e.prototype.getView=function(){return this.updateView(),this.view},e.prototype.update=function(){},e.prototype.getStateData=function(t){var e=t||{};return e.viewOffset=this.getViewOffset(e.viewOffset),e.position=this.getPosition(e.position),e.rotation=this.getRotation(e.rotation),e},e.prototype.setStateData=function(e){t.vec3.set(e.viewOffset,this.viewOffset),t.vec3.set(e.position,this.position),t.quat4.set(e.rotation,this.rotation),this.onViewChanged()},e.prototype.getViewOffset=function(e){return t.vec3.set(this.viewOffset,e||[0,0,0])},e.prototype.getPosition=function(e){return t.vec3.set(this.position,e||[0,0,0])},e.prototype.setPosition=function(e){t.vec3.set(e,this.position),this.onViewChanged()},e.prototype.getRotation=function(e){return t.quat4.set(this.rotation,e||[0,0,0,0])},e.prototype.setRotation=function(e){t.quat4.set(e,this.rotation),this.onViewChanged()},e}),define("production/ccp/LightBoard",[],function(){var t=function(t,e){this.ccpwgl=t,this.scene=e};return t}),define("production/ccp/ProductionManager",["lib/q","production/ccp/SyncSource","production/ccp/Set","production/ccp/Stage","production/ccp/SceneCamera","production/ccp/LightBoard"],function(t,e,n,o,r,i){var a={},s=function(t,a){var s={ccpwgl:t,scene:a,syncSource:new e(t,a),stage:new o(t,a),sceneCamera:new r,lightBoard:new i(t,a)};return t.setCamera(s.sceneCamera),new n(s)},c=function(e,n,o){var r=t.defer(),i=function(t){var n=s(e,t);r.resolve(n)};try{e.initialize(n,a),o(i)}catch(c){r.reject(c)}return r.promise},u=function(t){this.ccpwgl=t};return u.prototype.setResourcePath=function(t,e){this.ccpwgl.setResourcePath(t,e)},u.prototype.createSet=function(t,e){var n=this.ccpwgl;return c(n,t,function(t){var o=function(){t(this)};n.loadScene(e,o)})},u.prototype.createChromaKeyedSet=function(t,e){var n=this.ccpwgl;return c(n,t,function(t){var o=n.createScene(e);t(o)})},u}),define("ClientApp",["module","angular","lib/ccpwgl","ApplicationController","production/ccp/ProductionManager"],function(t,e,n,o,r){var i=t.config(),a=function(t){var a=e.module("ClientApp",[]),s=new r(n);return a.controller("ApplicationController",["$scope",o.create(i,s,t)]),[a.name]};return a});