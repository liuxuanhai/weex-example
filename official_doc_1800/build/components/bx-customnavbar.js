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
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(1)
	var __weex_style__ = __webpack_require__(2)
	var __weex_script__ = __webpack_require__(3)

	__weex_define__('@weex-component/b0c5a34acbce422a55735fbfb4fc7067', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/b0c5a34acbce422a55735fbfb4fc7067',undefined,undefined)

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "status"
	      ],
	      "style": {
	        "height": function () {return this.topheight},
	        "backgroundColor": function () {return this.backgroundColor}
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "container"
	      ],
	      "style": {
	        "top": function () {return this.topheight},
	        "backgroundColor": function () {return this.backgroundColor}
	      },
	      "children": [
	        {
	          "type": "text",
	          "shown": function () {return !this.rightItemSrc},
	          "attr": {
	            "naviitemposition": "right",
	            "value": function () {return this.rightItemTitle}
	          },
	          "style": {
	            "color": function () {return this.rightItemColor}
	          },
	          "classList": [
	            "right-text"
	          ],
	          "events": {
	            "click": "onclickrightitem"
	          }
	        },
	        {
	          "type": "image",
	          "shown": function () {return this.rightItemSrc},
	          "attr": {
	            "naviitemposition": "right",
	            "src": function () {return this.rightItemSrc}
	          },
	          "classList": [
	            "right-image"
	          ],
	          "events": {
	            "click": "onclickrightitem"
	          }
	        },
	        {
	          "type": "text",
	          "style": {
	            "color": function () {return this.leftItemColor}
	          },
	          "classList": [
	            "left-text"
	          ],
	          "events": {
	            "click": "onclickleftitem"
	          },
	          "attr": {
	            "value": function () {return this.leftItemTitle}
	          }
	        },
	        {
	          "type": "image",
	          "attr": {
	            "src": function () {return this.leftItemSrc}
	          },
	          "classList": [
	            "left-image"
	          ],
	          "events": {
	            "click": "onclickleftitem"
	          }
	        },
	        {
	          "type": "text",
	          "attr": {
	            "naviitemposition": "center",
	            "value": function () {return this.title}
	          },
	          "style": {
	            "color": function () {return this.titleColor}
	          },
	          "classList": [
	            "center-text"
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "wrapper"
	      ],
	      "style": {
	        "marginTop": function () {return this.contentHeight}
	      },
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    }
	  ]
	}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "width": 750
	  },
	  "status": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "width": 750
	  },
	  "container": {
	    "flexDirection": "row",
	    "position": "absolute",
	    "left": 0,
	    "right": 0,
	    "height": 88,
	    "width": 750
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
	    "bottom": 26,
	    "left": 70,
	    "textAlign": "left",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "center-text": {
	    "position": "absolute",
	    "bottom": 22,
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
	  "right-image": {
	    "position": "absolute",
	    "bottom": 20,
	    "right": 28,
	    "width": 50,
	    "height": 50
	  }
	}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var getPlatform = __webpack_require__(4).methods.getPlatform;
	module.exports = {

	  data: function () {return {

	    topheight: 0,
	    contentHeight: 0,

	    backgroundColor: 'white',
	    title: "",
	    titleColor: 'white',
	    rightItemSrc: '',
	    rightItemTitle: '',
	    rightItemColor: 'white',
	    leftItemSrc: '',
	    leftItemTitle: '',
	    leftItemColor: 'white'

	  }},
	  created: function created() {
	    if (getPlatform() == "ios") {
	      this.topheight = 40;
	      this.contentHeight = 128;
	    } else {
	      this.topheight = 0;
	      this.contentHeight = 88;
	    }
	  },
	  methods: {
	    onclickrightitem: function onclickrightitem(e) {
	      this.$dispatch('onclickrightitem', e);
	    },
	    onclickleftitem: function onclickleftitem(e) {
	      this.$dispatch('onclickleftitem', e);
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	exports.methods = {
	    getParameterByName: function(name, url) {
	        if (!url) url = window.location.href;
	        name = name.replace(/[\[\]]/g, "\\$&");
	        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	            results = regex.exec(url);
	        if (!results) return null;
	        if (!results[2]) return '';
	        return decodeURIComponent(results[2].replace(/\+/g, " "));
	    },
	    getIntParameterByName: function(name, url) {
	        if (!url) url = window.location.href;
	        name = name.replace(/[\[\]]/g, "\\$&");
	        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	            results = regex.exec(url);
	        if (!results) return null;
	        if (!results[2]) return '';
	        return parseInt(decodeURIComponent(results[2].replace(/\+/g, " ")));
	    },
	    setNavBarHeight: function(vm) {
	        vm.$getConfig(function(config) {
	            var env = config.env;
	            if (env.platform == 'iOS') {
	                var scale = env.scale;
	                var deviceWidth = env.deviceWidth / scale;
	                vm.navBarHeight = 64.0 * 750.0 / deviceWidth;
	            }
	        }.bind(vm));
	    },
	    push: function(navigator, baseURL, eurl) {
	        // var navigator = require('@weex-module/navigator');
	        // var getBaseURL = baseUrl.getBaseURL;
	        // var baseURL = getBaseURL(vm);
	        var url;
	        if (typeof window !== 'object') {
	            url = baseURL + eurl;
	            // console.log("url的值是:"+url);
	        }
	        var params = { 'url': url }
	            // console.log('push url', url);
	        navigator.push(params, function(e) {});
	    },
	    pop: function(navigator) {
	        var params = {
	            animated: 'false'
	        };
	        navigator.pop(params, function() {});
	    },

	    getPlatform: function() {
	        var env = weex.config.env;
	        if (env.platform == 'iOS') {
	            return "ios";
	        } else {
	            return "android";
	        }
	    },
	}

/***/ })
/******/ ]);