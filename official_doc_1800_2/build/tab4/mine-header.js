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

	var __weex_template__ = __webpack_require__(238)
	var __weex_style__ = __webpack_require__(239)
	var __weex_script__ = __webpack_require__(240)

	__weex_define__('@weex-component/b3be9ea42b028fec5e8456c5a06cb5a8', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/b3be9ea42b028fec5e8456c5a06cb5a8',undefined,undefined)

/***/ }),

/***/ 238:
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
	        "info-wrapper"
	      ],
	      "events": {
	        "click": "onHeaderClick"
	      },
	      "children": [
	        {
	          "type": "image",
	          "classList": [
	            "header-img"
	          ],
	          "attr": {
	            "src": function () {return this.headerimg}
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "nomal-text"
	          ],
	          "style": {
	            "marginLeft": 40
	          },
	          "attr": {
	            "value": function () {return this.userName}
	          }
	        },
	        {
	          "type": "image",
	          "classList": [
	            "right-icon"
	          ],
	          "attr": {
	            "src": function () {return this.righticon}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ }),

/***/ 239:
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0
	  },
	  "info-wrapper": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "marginTop": 40,
	    "width": 750,
	    "backgroundColor": "#ffffff",
	    "borderBottomWidth": 2,
	    "borderBottomColor": "rgb(220,220,220)"
	  },
	  "header-img": {
	    "width": 125,
	    "height": 125,
	    "marginRight": 10,
	    "marginLeft": 25
	  },
	  "right-div": {
	    "height": 125,
	    "justifyContent": "center"
	  },
	  "nomal-text": {
	    "color": "#000000",
	    "fontSize": 30,
	    "flex": 1
	  },
	  "right-icon": {
	    "width": 35,
	    "height": 35,
	    "marginRight": 40,
	    "resize": "contain"
	  }
	}

/***/ }),

/***/ 240:
/***/ (function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var storage = __weex_require__('@weex-module/storage');

	module.exports = {
	   data: function () {return {
	      headerimg: null,
	      userName: null,
	      righticon: 'local://right_icon.png'
	   }},

	   methods: {
	      onHeaderClick: function onHeaderClick() {}
	   },
	   created: function created() {}
	};}
	/* generated by weex-loader */


/***/ })

/******/ });