(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{0:function(e,t){},1:function(e,t){},2:function(e,t){},"2YZa":function(e,t,r){"use strict";r.r(t);var o={};r.r(o),r.d(o,"default",(function(){return B}));var n={};r.r(n),r.d(n,"default",(function(){return R}));var a={};r.r(a),r.d(a,"default",(function(){return F}));var i={};r.r(i),r.d(i,"default",(function(){return D}));var c={};r.r(c),r.d(c,"default",(function(){return W}));var s={};r.r(s),r.d(s,"default",(function(){return J}));r("pNMO"),r("4Brf"),r("tjZM"),r("3I1R"),r("7+kd"),r("0oug"),r("KhsS"),r("gOCb"),r("a57n"),r("GXvd"),r("I1Gw"),r("gXIK"),r("lEou"),r("gbiT"),r("ma9I"),r("qHT+"),r("yyme"),r("TeQF"),r("fbCW"),r("x0AG"),r("BIHw"),r("XbcX"),r("pjDv"),r("yq1k"),r("yXV3"),r("4mDm"),r("uqXc"),r("2B1R"),r("Xe3L"),r("Junv"),r("+2oP"),r("ToJy"),r("94Xl"),r("pDQq"),r("QGkA"),r("c9m3"),r("wZ/5"),r("gtqK"),r("rOQg"),r("9LPj"),r("7+zs"),r("tW5y"),r("DEfu"),r("Tskq"),r("Uydy"),r("eajv"),r("n/mU"),r("PqOI"),r("QNnp"),r("/5zm"),r("CsgD"),r("9mRW"),r("QFcT"),r("a5NK"),r("yiG3"),r("kNcU"),r("KvGi"),r("AmFO"),r("eJiR"),r("I9xj"),r("tl/u"),r("qePV"),r("NbN+"),r("i6QF"),r("WDsR"),r("r/Vq"),r("5uH8"),r("w1rZ"),r("JevA"),r("zKZe"),r("Eqjn"),r("5xtp"),r("T63A"),r("3KgV"),r("wfmh"),r("5DmW"),r("27RR"),r("cDke"),r("NBAS"),r("yQYn"),r("4h0Y"),r("5D5o"),r("tkto"),r("v5b1"),r("W/eh"),r("zuhW"),r("r5Og"),r("ExoC"),r("07d7"),r("B6y2"),r("rNhl"),r("4l63"),r("5s+n"),r("p532"),r("pv2x"),r("SuFq"),r("PzqY"),r("rBZX"),r("XUE8"),r("nkod"),r("f3jH"),r("x2An"),r("25bX"),r("G/JM"),r("1t3B"),r("ftMj"),r("i5pp"),r("TWNs"),r("U3f4"),r("JfAA"),r("YGK4"),r("9bJ7"),r("inlA"),r("9tb/"),r("JTJg"),r("PKPk"),r("Rm1S"),r("hDyC"),r("TZCg"),r("2A+d"),r("OM9Z"),r("UxlC"),r("hByQ"),r("EnZy"),r("LKBx"),r("SYor"),r("HiXI"),r("7ueG"),r("z8NH"),r("SpvK"),r("/Yfv"),r("iwkZ"),r("FDzp"),r("XMab"),r("ilnZ"),r("hMMk"),r("+ywr"),r("moxL"),r("qXVe"),r("c162"),r("waxf"),r("0TkE"),r("Onu3"),r("1dYe"),r("IL/d"),r("gvgV"),r("6R/c"),r("YL0P"),r("X5Zq"),r("MoCz"),r("P8wP"),r("7JcK"),r("ypFw"),r("JaFt"),r("zSZm"),r("KVSy"),r("ZJ55"),r("IZzc"),r("s5qe"),r("cvf0"),r("ENF9"),r("H+LF"),r("FZtP"),r("3bBZ"),r("Ew+T"),r("n5b4"),r("Kz25"),r("vxnP"),r("mGGf"),r("ls82"),r("bZMm");var l,u=r("q1tI"),f=r("i8i4"),p=r("dSAS"),m=r.n(p),d=r("AitN");function g(e){if(e)return{centerX:e.centerX,centerY:e.centerY,width:e.width,height:e.height,maxContentMode:y(e.maxContentMode),minContentMode:y(e.minContentMode)}}function y(e){if(e){var t=e.scale?e.scale:1,r=e.space?e.space:0;l.Scale;switch("string"==typeof e.mode?parseInt(l[e.mode]):e.mode){case l.Scale:return Object(d.contentModeScale)(t);case l.AspectFill:return Object(d.contentModeAspectFill)();case l.AspectFillScale:return Object(d.contentModeAspectFillScale)(t);case l.AspectFit:return Object(d.contentModeAspectFit)();case l.AspectFitScale:return Object(d.contentModeAspectFitScale)(t);case l.AspectFitSpace:return Object(d.contentModeAspectFitSpace)(r)}}}!function(e){e[e.Scale=0]="Scale",e[e.AspectFit=1]="AspectFit",e[e.AspectFitScale=2]="AspectFitScale",e[e.AspectFitSpace=3]="AspectFitSpace",e[e.AspectFill=4]="AspectFill",e[e.AspectFillScale=5]="AspectFillScale"}(l||(l={}));var b=r("wOnQ"),h=r.n(b);function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function S(e){return void 0===e.roomUUID}var w=function e(t,r){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.displayer=t,this.logger=r,v(this,"setCameraBound",(function(e){o.logger("setCameraBound nativeBound",e);var t=g(e);o.logger("setCameraBound bound",t),o.displayer.setCameraBound(t)})),v(this,"pageCover",(function(e,t){o.screenshot(e,o.displayer.fillSceneSnapshot.bind(o.displayer),t)})),v(this,"pagePreview",(function(e,t){o.screenshot(e,o.displayer.scenePreview.bind(o.displayer),t)})),v(this,"screenshot",(function(e,t,r){var o=document.createElement("div");o.setAttribute("class","shadow"),document.body.appendChild(o),t(e,o,o.clientWidth,o.clientHeight),h()(o,{useCORS:!0,onclone:function(e){Array.from(e.getElementsByTagName("svg")).forEach((function(e){e.setAttribute("width","".concat(e.clientWidth)),e.setAttribute("height","".concat(e.clientHeight))}))}}).then((function(e){window.canvas=e;var t=e.toDataURL();document.body.removeChild(o),r(t)}))})),m.a.register("displayer",{setDisableCameraTransform:function(e){t.disableCameraTransform=e},getDisableCameraTransform:function(){return t.disableCameraTransform},setCameraBound:this.setCameraBound,getMemberState:function(e){return JSON.stringify(t.memberState(e))},moveCamera:function(e){o.logger("moveCamera: ",e),o.displayer.moveCamera(e)},moveCameraToContain:function(e){o.logger("moveCameraToContain: ",e),o.displayer.moveCameraToContain(e)},refreshViewSize:function(){o.logger("refreshViewSize"),o.displayer.refreshViewSize()},scalePptToFit:function(e){o.logger("scalePptToFit",e),o.displayer.scalePptToFit(e)},convertToPointInWorld:function(e,t){return o.logger("convertToPointInWorld",e,t),o.displayer.convertToPointInWorld({x:e,y:t})},setBackgroundColor:function(e,t,r,n){var a=document.getElementById("whiteboard-container");o.logger("setBackgroundColor native",e,t,r,n);var i="rgb(".concat(e,", ").concat(t,", ").concat(r,")");o.logger("setBackgroundColor color",i),a.style.background=i},addHighFrequencyEventListener:function(e,t){o.logger("addHighFrequencyEventListener",e,t),o.displayer.addMagixEventListener(e,(function(e){var t=o.displayer.uuid||o.displayer.roomUUID,r=e.map((function(e){return{uuid:t,eventName:e.event,payload:e.payload,scope:e.scope,authorId:e.authorId}}));S(o.displayer)?m.a.call("room.fireHighFrequencyEvent",JSON.stringify(r)):m.a.call("player.fireHighFrequencyEvent",JSON.stringify(r))}),t)},addMagixEventListener:function(e){o.logger("addMagixEventListener",e),o.displayer.addMagixEventListener(e,(function(e){o.logger("fireMagixEvent",e);var t={uuid:o.displayer.uuid||o.displayer.roomUUID,eventName:e.event,payload:e.payload,scope:e.scope,authorId:e.authorId};S(o.displayer)?m.a.call("room.fireMagixEvent",JSON.stringify(t)):m.a.call("player.fireMagixEvent",JSON.stringify(t))}))},removeMagixEventListener:function(e){o.logger("removeMagixEventListener",e),o.displayer.removeMagixEventListener(e)}}),m.a.registerAsyn("displayerAsync",{scenePreview:this.pagePreview,sceneSnapshot:this.pageCover}),window.html2canvas=h.a,window.displayerBridge=this};function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=function(e){var t,r,o;function n(e,t){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(r=C(this,k(n).call(this,e,t))).room=e,r.logger=t,m.a.register("ppt",{nextStep:function(){r.logger("nextStep"),r.room.pptNextStep()},previousStep:function(){r.logger("previousStep"),r.room.pptPreviousStep()}}),m.a.registerAsyn("room",{setGlobalState:function(e){r.logger("setGlobalState",e),r.room.setGlobalState(e)},setScenePath:function(e,t){try{r.logger("setScenePath",e),r.room.setScenePath(e),t(JSON.stringify({}))}catch(e){return t(JSON.stringify({__error:{message:e.message,jsStack:e.stack}}))}},setMemberState:function(e){r.logger("setMemberState",e),r.room.setMemberState(e)},setViewMode:function(e){var t=d.ViewMode[e];void 0===t&&(t=d.ViewMode.Freedom),r.logger("setViewMode",{viewMode:e,mode:t}),r.room.setViewMode(t)},getMemberState:function(e){return r.logger("getMemberState",r.room.state.memberState),e(JSON.stringify(r.room.state.memberState))},getGlobalState:function(e){return r.logger("getGlobalState",r.room.state.globalState),e(JSON.stringify(r.room.state.globalState))},getSceneState:function(e){return r.logger("getSceneState",r.room.state.sceneState),e(JSON.stringify(r.room.state.sceneState))},getRoomMembers:function(e){return r.logger("getRoomMembers",r.room.state.roomMembers),e(JSON.stringify(r.room.state.roomMembers))},getPptImages:function(e){var t=r.room.state.sceneState.scenes.map((function(e){return e.ppt?e.ppt.src:""}));return e(JSON.stringify(t))},setSceneIndex:function(e,t){r.logger("setSceneIndex",e);try{r.room.setSceneIndex(e),t(JSON.stringify({}))}catch(e){t(JSON.stringify({__error:{message:e.message,jsStack:e.stack}}))}},getScenes:function(e){return r.logger("getScenes",r.room.state.sceneState.scenes),e(JSON.stringify(r.room.state.sceneState.scenes))},getZoomScale:function(e){return r.logger("getZoomScale",r.room.state.zoomScale),e(JSON.stringify(r.room.state.zoomScale))},getBroadcastState:function(e){return r.logger("getBroadcastState",r.room.state.zoomScale),e(JSON.stringify(r.room.state.broadcastState))},getRoomPhase:function(e){return r.logger("getRoomPhase",JSON.stringify(r.room.phase)),e(r.room.phase)},disconnect:function(e){r.room.disconnect().then((function(){e()}))},zoomChange:function(e){r.logger("zoomChange"),r.room.zoomChange(e)},disableCameraTransform:function(e){r.logger("disableCameraTransform",e),r.room.disableCameraTransform=e},disableDeviceInputs:function(e){r.logger("disableDeviceInputs",e),r.room.disableDeviceInputs=e},disableOperations:function(e){r.logger("disableOperations",e),r.room.disableOperations=e},putScenes:function(e,t,o,n){r.logger("putScenes",t),r.room.putScenes(e,t,o),n(JSON.stringify(r.room.state.sceneState))},removeScenes:function(e){r.logger("removeScenes",e),r.room.removeScenes(e)},moveScene:function(e,t){r.logger("moveScene",e,t),r.room.moveScene(e,t)},cleanScene:function(e){var t;t=void 0!==e&&!!e,r.logger("cleanScene",e),r.room.cleanCurrentScene(t)},insertImage:function(e){r.logger("insertImage",e),r.room.insertImage(e)},insertVideo:function(e){r.logger("insertVideo",e)},completeImageUpload:function(e,t){r.logger("completeImageUpload",e,t),r.room.completeImageUpload(e,t)},dispatchMagixEvent:function(e){r.logger("dispatchMagixEvent",e),r.room.dispatchMagixEvent(e.eventName,e.payload)},setTimeDelay:function(e){r.logger("setTimeDelay",e),r.room.timeDelay=e}}),m.a.register("room.state",{getRoomState:function(){return r.room.state},getTimeDelay:function(){return r.room.timeDelay},getPhase:function(){return r.room.phase}}),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(n,e),t=n,(r=[{key:"bindHtmlElement",value:function(e){this.room.bindHtmlElement(e)}}])&&j(t.prototype,r),o&&j(t,o),n}(w);function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var x=function(e){var t,r,o;function n(e,t){var r,o,a,i,c,s;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),o=this,a=A(n).call(this,e,t),(r=!a||"object"!==M(a)&&"function"!=typeof a?T(o):a).player=e,r.logger=t,i=T(r),s=function(){try{r.logger("stop"),r.player.stop()}catch(e){console.log("stop:",e.message)}},(c="stop")in i?Object.defineProperty(i,c,{value:s,enumerable:!0,configurable:!0,writable:!0}):i[c]=s,m.a.registerAsyn("player",{play:function(){r.logger("play"),r.player.play()},pause:function(){r.logger("pause"),r.player.pause()},stop:function(){r.logger("stop"),r.player.stop()},seekToScheduleTime:function(e){r.logger("seekToScheduleTime",e),r.player.seekToScheduleTime(e)},setObserverMode:function(e){r.logger("setObserverMode",e),r.player.setObserverMode(e)},setPlaybackSpeed:function(e){r.logger("playbackSpeed",e),r.player.playbackSpeed=e}}),m.a.register("player.state",{roomUUID:function(){return r.player.roomUUID},phase:function(){return r.logger("phase",r.player.phase),r.player.phase},playerState:function(){try{return r.logger("playerState",r.player.state),r.player.state}catch(e){return{}}},playbackSpeed:function(){return r.logger("playbackSpeed",r.player.playbackSpeed),r.player.playbackSpeed},timeInfo:function(){var e=r.player,t={scheduleTime:e.scheduleTime,timeDuration:e.timeDuration,framesCount:e.framesCount,beginTimestamp:e.beginTimestamp};return r.logger("timeInfo",t),t}}),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(n,e),t=n,(r=[{key:"bindHtmlElement",value:function(e){this.player.bindHtmlElement(e)}}])&&I(t.prototype,r),o&&I(t,o),n}(w),B=(r("Q8kY"),r("N9Up"),r.p+"3e6675535013ee7e033f7f1199bda615.svg"),R=r.p+"b7663db8642ef704706e2f35ce8e525b.svg",F=r.p+"4d38e14c1a5c735e640e37b640756143.svg",D=r.p+"0c7ecc1818df16d287915d661b0f93c4.svg",W=r.p+"3f8f544933ba286361d420763c6d46c7.svg",J=r.p+"98179b5f100d4c34ddbc94e2c26bebd5.svg";function U(e){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function z(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Z(e,t,r){return t&&z(e.prototype,t),r&&z(e,r),e}function Y(e){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function H(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function V(e,t){return(V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function G(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var L=function(e){function t(e){var r,o,n;return _(this,t),o=this,r=!(n=Y(t).call(this,e))||"object"!==U(n)&&"function"!=typeof n?H(o):n,G(H(r),"iconUrl",(function(e){return t.descriptions[e].iconUrl})),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(t,e),Z(t,[{key:"render",value:function(){var e=this.props.roomMember,t="rgb(".concat(e.memberState.strokeColor[0],", ").concat(e.memberState.strokeColor[1],", ").concat(e.memberState.strokeColor[2],")");return this.props.roomMember.payload&&this.props.roomMember.payload.avatar?u.createElement("div",null,u.createElement("div",{style:{borderColor:t},className:"cursor-box"},u.createElement("img",{src:this.props.roomMember.payload.avatar})),u.createElement("div",{style:{backgroundColor:t},className:"cursor-box-tool"},u.createElement("img",{src:this.iconUrl(e.memberState.currentApplianceName)}))):null}}]),t}(u.Component);G(L,"descriptions",Object.freeze({selector:Object.freeze({iconUrl:o,hasColor:!1,hasStroke:!1}),pencil:Object.freeze({iconUrl:n,hasColor:!0,hasStroke:!0}),text:Object.freeze({iconUrl:a,hasColor:!0,hasStroke:!1}),eraser:Object.freeze({iconUrl:i,hasColor:!1,hasStroke:!1}),ellipse:Object.freeze({iconUrl:c,hasColor:!0,hasStroke:!0}),rectangle:Object.freeze({iconUrl:s,hasColor:!0,hasStroke:!0})}));var q=function(){function e(){_(this,e),G(this,"cursors",{}),G(this,"roomMembers",[])}return Z(e,[{key:"createCursor",value:function(e){return{x:16,y:16,width:32,height:32}}},{key:"onAddedCursor",value:function(e){var t=!0,r=!1,o=void 0;try{for(var n,a=this.roomMembers[Symbol.iterator]();!(t=(n=a.next()).done);t=!0){var i=n.value;if(i.memberId===e.memberId){e.setReactNode(u.createElement(L,{roomMember:i}));break}}}catch(e){r=!0,o=e}finally{try{t||null==a.return||a.return()}finally{if(r)throw o}}this.cursors[e.memberId]=e}},{key:"onRemovedCursor",value:function(e){delete this.cursors[e.memberId]}},{key:"setColorAndAppliance",value:function(e){this.roomMembers=e;var t=!0,r=!1,o=void 0;try{for(var n,a=e[Symbol.iterator]();!(t=(n=a.next()).done);t=!0){var i=n.value,c=this.cursors[i.memberId];c&&c.setReactNode(u.createElement(L,{roomMember:i}))}}catch(e){r=!0,o=e}finally{try{t||null==a.return||a.return()}finally{if(r)throw o}}}}]),e}(),Q=r("xU6Y"),X=r("R+TL"),K=r("WURW"),$=r.n(K),ee=["https://scdncloudharestoragev3.herewhite.com","https://expresscloudharestoragev2.herewhite.com"],te=["https://cdncloudroomv2.herewhite.com","https://cdnroom.netless.pro"],re=window.fetch;var oe=function(){window.fetch=function(e,t){return regeneratorRuntime.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(ae(e)){r.next=2;break}return r.abrupt("return",re.call(this,e,t));case 2:return r.abrupt("return",$()([re.call(this,e,t),re.call(this,ne(e),t)]));case 3:case"end":return r.stop()}}),null,this)}};function ne(e){var t,r=[],o="string"==typeof e?e:e.url;if(-1!==ee.findIndex((function(e){return-1!==o.indexOf(e)})))r=ee;else{if(-1===te.findIndex((function(e){return-1!==o.indexOf(e)})))return e;r=te}if("string"==typeof e){var n=r.findIndex((function(t){return-1!==e.indexOf(t)})),a=r.length-1-n;t=e.replace(r[n],r[a])}else{var i=r.findIndex((function(t){return-1!==e.url.indexOf(t)})),c=r.length-1-i;t=new Request(e.url.replace(r[i],r[c]),e)}return t}function ae(e){var t=ee.concat(te);return"string"==typeof e?t.some((function(t){return-1!==e.indexOf(t)})):t.some((function(t){return-1!==e.url.indexOf(t)}))}function ie(e){return(ie="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ce(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function se(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(r),!0).forEach((function(t){de(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ce(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function le(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function ue(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function fe(e){return(fe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function pe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function me(e,t){return(me=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function de(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var ge=function(e){function t(e){var r,o,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,n=fe(t).call(this,e),r=!n||"object"!==ie(n)&&"function"!=typeof n?pe(o):n,de(pe(r),"webSdk",void 0),de(pe(r),"nativeConfig",void 0),de(pe(r),"container",null),de(pe(r),"cursor",void 0),de(pe(r),"roomBridge",void 0),de(pe(r),"playerBridge",void 0),de(pe(r),"debug",!1),de(pe(r),"newWhiteSdk",(function(e){var t=e.enableInterrupterAPI?function(e){var t=m.a.call("sdk.urlInterrupter",e);return t.length>0?t:e}:void 0;r.debug=!!e.debug,r.nativeConfig=e,r.logger("newWhiteSdk",e);e.debug,e.userCursor,e.enableInterrupterAPI;var o=e.routeBackup,n=le(e,["debug","userCursor","enableInterrupterAPI","routeBackup"]);o&&oe();var a=Object(d.createPlugins)({video:Q.videoPlugin,audio:X.audioPlugin});r.webSdk=new d.WhiteWebSdk(se({},n,{plugins:a,deviceType:d.DeviceType.Touch,urlInterrupter:t}))})),de(pe(r),"joinRoom",(function(e,t){r.removeBind(),r.logger("joinRoom",e),r.webSdk.joinRoom(se({},e,{cameraBound:g(e.cameraBound),cursorAdapter:r.cursorAdapter}),{onRoomStateChanged:function(e){e.roomMembers&&r.cursorAdapter&&r.cursorAdapter.setColorAndAppliance(e.roomMembers),m.a.call("room.fireRoomStateChanged",JSON.stringify(e))},onPhaseChanged:function(e){m.a.call("room.firePhaseChanged",e),setTimeout((function(){r.roomBridge&&r.roomBridge.room.phase===d.RoomPhase.Reconnecting&&(r.logger("disconnect","reconnecting too long, call disconnect automatically"),r.roomBridge.room.disconnect())}),35e3)},onDisconnectWithError:function(e){m.a.call("room.fireDisconnectWithError",e.message)},onKickedWithReason:function(e){m.a.call("room.fireKickedWithReason",e)},onCatchErrorWhenAppendFrame:function(e,t){m.a.call("room.fireCatchErrorWhenAppendFrame",{userId:e,error:t.message})}}).then((function(e){return window.displayer=e,window.room=e,r.roomBridge=new E(e,r.logger),r.container&&r.roomBridge.bindHtmlElement(r.container),e.state.roomMembers&&r.cursorAdapter&&r.cursorAdapter.setColorAndAppliance(e.state.roomMembers),t(JSON.stringify({state:e.state,observerId:e.observerId}))})).catch((function(e){return t(JSON.stringify({__error:{message:e.message,jsStack:e.stack}}))}))})),de(pe(r),"replayRoom",(function(e,t){r.removeBind(),e.audioUrl&&(e.mediaURL=e.audioUrl,e.audioUrl=void 0),r.logger("replayRoom",e),r.webSdk.replayRoom(se({},e,{cursorAdapter:r.cursorAdapter,cameraBound:g(e.cameraBound)}),{onPhaseChanged:function(e){if(e!==d.PlayerPhase.WaitingFirstFrame&&r.cursorAdapter&&r.playerBridge)try{r.cursorAdapter.setColorAndAppliance(r.playerBridge.player.state.roomMembers)}catch(e){console.warn(e)}r.logger("onPhaseChanged:",e),m.a.call("player.onPhaseChanged",e)},onLoadFirstFrame:function(){console.log("onLoadFirstFrame"),m.a.call("player.onPlayerStateChanged",JSON.stringify(r.playerBridge.player.state)),m.a.call("player.onLoadFirstFrame")},onSliceChanged:function(e){m.a.call("player.onSliceChanged",e)},onPlayerStateChanged:function(e){e.roomMembers&&r.cursorAdapter&&r.cursorAdapter.setColorAndAppliance(e.roomMembers),m.a.call("player.onPlayerStateChanged",JSON.stringify(e))},onStoppedWithError:function(e){m.a.call("player.onStoppedWithError",JSON.stringify({error:e.message,jsStack:e.stack}))},onScheduleTimeChanged:function(e){m.a.call("player.onScheduleTimeChanged",e)},onCatchErrorWhenAppendFrame:function(e,t){m.a.call("player.onCatchErrorWhenAppendFrame",{userId:e,error:t.message})},onCatchErrorWhenRender:function(e){m.a.call("player.onCatchErrorWhenRender",{error:e.message})}}).then((function(e){window.displayer=e,window.player=e,r.playerBridge=new x(e,r.logger),r.container&&r.playerBridge.bindHtmlElement(r.container);var o=e.scheduleTime,n=e.timeDuration,a=e.framesCount,i=e.beginTimestamp;return t(JSON.stringify({timeInfo:{scheduleTime:o,timeDuration:n,framesCount:a,beginTimestamp:i}}))})).catch((function(e){return t(JSON.stringify({__error:{message:e.message,jsStack:e.stack}}))}))})),de(pe(r),"removeBind",(function(){r.playerBridge&&(r.playerBridge.stop(),r.playerBridge.bindHtmlElement(null),r.playerBridge=void 0),r.roomBridge&&(r.roomBridge.bindHtmlElement(null),r.roomBridge=void 0),window.room=void 0,window.player=void 0,window.displayer=void 0,window.displayerBridge=void 0})),de(pe(r),"setContainerRef",(function(e){r.container!==e&&(r.container=e,r.playerBridge?r.playerBridge.bindHtmlElement(e):r.roomBridge&&r.roomBridge.bindHtmlElement(e))})),de(pe(r),"logger",(function(e){if(r.debug){for(var t=arguments.length,o=new Array(t>1?t-1:0),n=1;n<t;n++)o[n-1]=arguments[n];console.log(JSON.stringify({funName:e,params:se({},o)})),m.a.call("sdk.logger",{funName:e,params:se({},o)})}})),de(pe(r),"throw",(function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];console.log(JSON.stringify(se({},t))),m.a.call("sdk.throwError",se({},t))})),de(pe(r),"setupDebugSdk",(function(){r.debug=!0,r.nativeConfig={debug:!0,userCursor:!0};var e=Object(d.createPlugins)({video:Q.videoPlugin,audio:X.audioPlugin});r.webSdk=new d.WhiteWebSdk({plugins:e,urlInterrupter:function(e){return console.log(e),e}})})),de(pe(r),"joinTestRoom",(function(){return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:r.setupDebugSdk(),r.joinRoom({uuid:"8e7f4e51687e45afbf03ba42670a0dde",roomToken:"WHITEcGFydG5lcl9pZD0zZHlaZ1BwWUtwWVN2VDVmNGQ4UGI2M2djVGhncENIOXBBeTcmc2lnPWI4YzIxMjI1YmVlYzU2YWI2MjQ5NmE2MWNiMmUyNzdmYWE0NjA4YjQ6YWRtaW5JZD0xNTgmcm9vbUlkPThlN2Y0ZTUxNjg3ZTQ1YWZiZjAzYmE0MjY3MGEwZGRlJnRlYW1JZD0yODMmcm9sZT1yb29tJmV4cGlyZV90aW1lPTE2MDgzODk2ODMmYWs9M2R5WmdQcFlLcFlTdlQ1ZjRkOFBiNjNnY1RoZ3BDSDlwQXk3JmNyZWF0ZV90aW1lPTE1NzY4MzI3MzEmbm9uY2U9MTU3NjgzMjczMDY1ODAw"},(function(){}));case 2:case"end":return e.stop()}}))})),de(pe(r),"replayTestRoom",(function(){return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:r.setupDebugSdk(),r.replayRoom({room:"",roomToken:""},(function(){}));case 2:case"end":return e.stop()}}))})),window.addEventListener("error",(function(e){r.throw(e.message,e.error)})),window.whiteSdk=pe(r),r.cursor=new q,m.a.registerAsyn("sdk",{newWhiteSdk:r.newWhiteSdk,joinRoom:r.joinRoom,replayRoom:r.replayRoom}),r}var r,o,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&me(e,t)}(t,e),r=t,(o=[{key:"render",value:function(){return u.createElement("div",{id:"whiteboard-container",style:{position:"absolute",left:0,top:0,right:0,bottom:0,zIndex:1},ref:this.setContainerRef})}},{key:"cursorAdapter",get:function(){if(this.nativeConfig&&this.nativeConfig.userCursor)return this.cursor}}])&&ue(r.prototype,o),n&&ue(r,n),t}(u.Component);r("gjgJ");f.render(u.createElement(ge,null),document.getElementById("root"))},3:function(e,t){},N9Up:function(e,t,r){},Q8kY:function(e,t,r){}},[["2YZa",1,3,2]]]);