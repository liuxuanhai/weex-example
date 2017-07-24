/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(190)
	var __weex_style__ = __webpack_require__(191)
	var __weex_script__ = __webpack_require__(192)

	__weex_define__('@weex-component/114b458b311538aa2f4f26fb7604e9a5', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/114b458b311538aa2f4f26fb7604e9a5',undefined,undefined)

/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(130)
	var __weex_style__ = __webpack_require__(131)
	var __weex_script__ = __webpack_require__(132)

	__weex_define__('@weex-component/bx-navbar', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ }),

/***/ 130:
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "style": {
	    "height": function () {return this.height},
	    "backgroundColor": "#3CB0FC"
	  },
	  "attr": {
	    "dataRole": function () {return this.dataRole}
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "left-text"
	      ],
	      "style": {
	        "color": function () {return this.leftItemColor}
	      },
	      "attr": {
	        "naviItemPosition": "left",
	        "value": function () {return this.leftitemtitle}
	      },
	      "shown": function () {return !this.leftitemsrc},
	      "events": {
	        "click": "onclickleftitem"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "left-image"
	      ],
	      "attr": {
	        "naviItemPosition": "left",
	        "src": function () {return this.leftitemsrc}
	      },
	      "shown": function () {return this.leftitemsrc},
	      "events": {
	        "click": "onclickleftitem"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "back-text"
	      ],
	      "style": {
	        "color": function () {return this.leftItemColor}
	      },
	      "attr": {
	        "naviItemPosition": "back",
	        "value": function () {return this.backitemtitle}
	      },
	      "events": {
	        "click": "onclickleftitem"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "back-image"
	      ],
	      "attr": {
	        "naviItemPosition": "back",
	        "src": function () {return this.backitemsrc}
	      },
	      "shown": function () {return this.backitemsrc},
	      "events": {
	        "click": "onclickleftitem"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "center-text"
	      ],
	      "style": {
	        "color": function () {return this.titleColor}
	      },
	      "attr": {
	        "naviItemPosition": "center",
	        "value": function () {return this.title}
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "row"
	      ],
	      "repeat": {
	        "expression": function () {return this.rightbuttons},
	        "value": "button"
	      },
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "right-text"
	          ],
	          "style": {
	            "color": function () {return this.rightItemColor}
	          },
	          "attr": {
	            "naviItemPosition": "rights",
	            "value": function () {return this.button.rightItemTitle}
	          },
	          "shown": function () {return !this.button.rightItemSrc},
	          "events": {
	            "click": "onclickrightitem"
	          }
	        },
	        {
	          "type": "image",
	          "classList": [
	            "right-image"
	          ],
	          "attr": {
	            "naviItemPosition": "rights",
	            "src": function () {return this.button.rightItemSrc}
	          },
	          "shown": function () {return this.button.rightItemSrc},
	          "events": {
	            "click": "onclickrightitem"
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ }),

/***/ 131:
/***/ (function(module, exports) {

	module.exports = {
	  "container": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "width": 750
	  },
	  "row": {
	    "left": 590,
	    "flexDirection": "row",
	    "justifyContent": "flex-end",
	    "alignItems": "flex-end"
	  },
	  "right-text": {
	    "position": "absolute",
	    "bottom": 28,
	    "right": 32,
	    "textAlign": "right",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "left-text": {
	    "position": "absolute",
	    "bottom": 28,
	    "left": 32,
	    "textAlign": "left",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "back-text": {
	    "position": "absolute",
	    "bottom": 26,
	    "left": 72,
	    "textAlign": "left",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "center-text": {
	    "position": "absolute",
	    "bottom": 25,
	    "left": 172,
	    "right": 172,
	    "textAlign": "center",
	    "fontSize": 36,
	    "fontWeight": "bold"
	  },
	  "left-image": {
	    "position": "absolute",
	    "bottom": 20,
	    "left": 28,
	    "width": 50,
	    "height": 50
	  },
	  "back-image": {
	    "position": "absolute",
	    "bottom": 20,
	    "left": 28,
	    "width": 50,
	    "height": 50
	  },
	  "right-image": {
	    "marginBottom": 20,
	    "marginRight": 26,
	    "width": 50,
	    "height": 50
	  }
	}

/***/ }),

/***/ 132:
/***/ (function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    dataRole: 'navbar',

	    height: 88,

	    title: "",

	    titleColor: 'white',

	    rightItemSrc: '',

	    rightItemTitle: '',

	    rightItemColor: 'white',

	    leftitemsrc: '',

	    leftitemtitle: '',

	    backitemsrc: '',

	    backitemtitle: '',

	    leftItemColor: 'white',

	    rightbuttons: []
	  }},
	  methods: {
	    onclickrightitem: function onclickrightitem(e) {
	      this.$dispatch('naviBar.rightItem.click', { index: this.$index });
	    },
	    onclickleftitem: function onclickleftitem(e) {
	      this.$dispatch('naviBar.leftItem.click', {});
	      console.log('naviBar.leftItem.click');
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(134)
	var __weex_script__ = __webpack_require__(135)

	__weex_define__('@weex-component/bx-loading', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	})


/***/ }),

/***/ 134:
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "id": "target",
	  "style": {
	    "position": "absolute",
	    "top": function () {return this.top},
	    "left": 0,
	    "width": 750,
	    "height": 750,
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "children": [
	    {
	      "type": "image",
	      "style": {
	        "width": 88,
	        "height": 88
	      },
	      "attr": {
	        "src": "local://loading.png"
	      }
	    }
	  ]
	}

/***/ }),

/***/ 135:
/***/ (function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	    data: function () {return {
	        rotate: 0,

	        top: 0
	    }},
	    ready: function ready() {
	        this.doAnim();
	    },
	    methods: {
	        doAnim: function doAnim() {
	            var animation = __weex_require__('@weex-module/animation');
	            var self = this;
	            var target = this.$el('target');
	            self.rotate += 360;
	            var options = {
	                styles: {
	                    transform: 'rotate(' + self.rotate + 'deg)',
	                    transformOrigin: 'center center'
	                },
	                timingFunction: 'linear',
	                duration: 1000
	            };
	            var callback = function callback() {
	                self.doAnim();
	            };
	            animation.transition(target, options, callback);
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ }),

/***/ 136:
/***/ (function(module, exports) {

	exports.getBaseURL = function (vm) {
	  var bundleUrl = vm.$getConfig().bundleUrl;
	  var dir = 'official_doc';
	  var nativeBase;
	  var isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/')>=0;
	  var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('BXProject.app') > 0;
	  if (isAndroidAssets) {
	    nativeBase = 'file://assets/';
	  }
	  else if (isiOSAssets) {
	    // file:///var/mobile/Containers/Bundle/Application/{id}/WeexDemo.app/
	    // file:///Users/{user}/Library/Developer/CoreSimulator/Devices/{id}/data/Containers/Bundle/Application/{id}/WeexDemo.app/
	    nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/', bundleUrl.lastIndexOf('/')-1) + 1);
	  }
	  else {
	    var host = 'localhost:12580';
	    var matches = /\/\/([^\/]+?)\//.exec(vm.$getConfig().bundleUrl);
	    if (matches && matches.length >= 2) {
	      host = matches[1];
	    }
	    nativeBase = 'http://' + host + '/' + dir + '/build/';
	  }
	  var h5Base = './vue.html?page=./' + dir + '/build/';
	  // in Native
	  var base = nativeBase;
	  if (typeof window === 'object') {
	    // in Browser or WebView
	    base = h5Base;
	  }
	  return base
	}


/***/ }),

/***/ 144:
/***/ (function(module, exports) {

	exports.methods = {
	    //六种标准字体大小
	    getFontA: function() {
	        return 38;
	    },
	    getFontB: function() {
	        return 36;
	    },
	    getFontC: function() {
	        return 32;
	    },
	    getFontD: function() {
	        return 28;
	    },
	    getFontE: function() {
	        return 24;
	    },
	    getFontF: function() {
	        return 22;
	    },
	    //文本字体颜色（灰色）
	    getColorA: function() {
	        return '#a7a7a7';
	    },
	    //边框颜色
	    getColorB: function() {
	        return '#e5e5e5';
	    },
	    //模块标题文本颜色
	    getColorC: function() {
	        return '#858a8e';
	    },
	    //领导批示模块文本颜色（灰色）
	    getColorD: function() {
	        return '#a7a7a7';
	    },
	    //行高
	    getRowHeight: function() {
	        return 70;
	    }
	}

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "bx-navbar",
	      "attr": {
	        "height": function () {return this.navBarHeight},
	        "backitemsrc": "local://back_button.png",
	        "backitemtitle": "返回",
	        "backgroundColor": function () {return this.backgroundColor},
	        "title": function () {return this.title},
	        "titleColor": function () {return this.titleColor}
	      }
	    },
	    {
	      "type": "web",
	      "id": "webview",
	      "attr": {
	        "src": function () {return this.src}
	      },
	      "classList": [
	        "webStyle"
	      ],
	      "events": {
	        "pagefinish": "finishload"
	      },
	      "style": {
	        "marginTop": function () {return this.navBarHeight}
	      }
	    },
	    {
	      "type": "bx-loading",
	      "attr": {
	        "top": "200"
	      },
	      "shown": function () {return this.loading}
	    }
	  ]
	}

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "width": 750,
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "webStyle": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0
	  }
	}

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	__webpack_require__(133);
	__webpack_require__(129);
	var navigator = __weex_require__('@weex-module/navigator');
	var web_module = __weex_require__('@weex-module/webview');
	var styles = __webpack_require__(144).methods;
	var getBaseURL = __webpack_require__(136).getBaseURL;
	module.exports = {
	    data: function () {return {
	        loading: true,
	        src: "",
	        navBarHeight: 88,
	        backgroundColor: "#1C6BC8",
	        titleColor: "white",
	        title: '1800UI规范',
	        baseURL: ''
	    }},
	    created: function created() {
	        styles.setCustomColor(this);
	        this.$getConfig(function (config) {
	            var env = config.env;
	            if (env.platform == 'iOS') {
	                var scale = env.scale;
	                var deviceWidth = env.deviceWidth / scale;
	                this.navBarHeight = 64.0 * 750.0 / deviceWidth;
	            } else {
	                this.loading = false;
	            }
	        }.bind(this));

	        this.baseURL = getBaseURL(this);
	        this.src = this.baseURL + '1800/styles.html';

	        this.$on('naviBar.leftItem.click', function (event) {
	            var params = {
	                animated: 'true'
	            };
	            navigator.pop(params, function () {});
	        });
	    },
	    methods: {
	        finishload: function finishload(e) {
	            this.loading = false;
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ })

/******/ });