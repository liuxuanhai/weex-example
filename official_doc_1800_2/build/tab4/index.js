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

	var __weex_template__ = __webpack_require__(231)
	var __weex_style__ = __webpack_require__(232)
	var __weex_script__ = __webpack_require__(233)

	__weex_define__('@weex-component/8f33d82cd40b50fc79dbbfe83d880815', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/8f33d82cd40b50fc79dbbfe83d880815',undefined,undefined)

/***/ }),

/***/ 9:
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

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(135)
	var __weex_style__ = __webpack_require__(136)
	var __weex_script__ = __webpack_require__(137)

	__weex_define__('@weex-component/bx-navbar', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ }),

/***/ 135:
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

/***/ 136:
/***/ (function(module, exports) {

	module.exports = {
	  "container": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "top": 0,
	    "left": 0,
	    "right": 0
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

/***/ 137:
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

/***/ 231:
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "style": {
	    "backgroundColor": "#F0EFF5"
	  },
	  "children": [
	    {
	      "type": "bx-navbar",
	      "attr": {
	        "height": function () {return this.navBarHeight},
	        "backgroundColor": "#3CB0FC",
	        ";": "",
	        "title": function () {return this.title},
	        "titleColor": "white",
	        "leftitemtitle": ""
	      }
	    },
	    {
	      "type": "div",
	      "style": {
	        "marginTop": function () {return this.navBarHeight}
	      },
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "info-wrapper"
	          ],
	          "style": {
	            "borderColor": function () {return this.indicatorColor}
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
	              "type": "div",
	              "style": {
	                "flex": 1
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "nomal-text"
	                  ],
	                  "style": {
	                    "marginLeft": 40,
	                    "marginBottom": 20,
	                    "fontSize": function () {return this.fontTitle}
	                  },
	                  "attr": {
	                    "value": function () {return this.userName}
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "nomal-text"
	                  ],
	                  "style": {
	                    "marginLeft": 40,
	                    "fontSize": function () {return this.fontTitle},
	                    "color": "rgb(180,180,180)"
	                  },
	                  "attr": {
	                    "value": function () {return '工号:  ' + (this.userId)}
	                  }
	                }
	              ]
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
	        },
	        {
	          "type": "div",
	          "style": {
	            "height": function () {return this.rowHeight},
	            "marginTop": 40,
	            "width": 750,
	            "backgroundColor": "#FFFFFF",
	            "flexDirection": "row",
	            "alignItems": "center",
	            "borderBottomWidth": 1,
	            "borderBottomColor": function () {return this.indicatorColor}
	          },
	          "children": [
	            {
	              "type": "text",
	              "style": {
	                "marginLeft": 30,
	                "fontSize": function () {return this.fontRow},
	                "width": 200,
	                "color": "rgb(90,90,90)"
	              },
	              "attr": {
	                "value": "当前版本号"
	              }
	            },
	            {
	              "type": "text",
	              "style": {
	                "marginRight": 30,
	                "textAlign": "right",
	                "fontSize": function () {return this.fontRow},
	                "width": 480,
	                "color": "rgb(180,180,180)"
	              },
	              "attr": {
	                "value": "1.0"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "style": {
	            "height": function () {return this.rowHeight},
	            "width": 750,
	            "backgroundColor": "#FFFFFF",
	            "flexDirection": "row",
	            "alignItems": "center",
	            "borderBottomWidth": 1,
	            "borderBottomColor": function () {return this.indicatorColor}
	          },
	          "children": [
	            {
	              "type": "text",
	              "style": {
	                "marginLeft": 30,
	                "fontSize": function () {return this.fontRow},
	                "color": "rgb(90,90,90)"
	              },
	              "attr": {
	                "value": "版本信息"
	              }
	            },
	            {
	              "type": "text",
	              "style": {
	                "marginRight": 30,
	                "textAlign": "right",
	                "fontSize": function () {return this.fontRow},
	                "width": 560,
	                "color": "rgb(180,180,180)"
	              },
	              "attr": {
	                "value": "宝钢新日铁汽车板有限公司"
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ }),

/***/ 232:
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
	    "marginLeft": 25,
	    "marginTop": 20,
	    "marginBottom": 20
	  },
	  "nomal-text": {
	    "color": "#000000",
	    "fontSize": 30,
	    "flex": 1
	  },
	  "right-icon": {
	    "width": 30,
	    "height": 30,
	    "marginRight": 40,
	    "resize": "contain"
	  }
	}

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	__webpack_require__(134);
	var storage = __weex_require__('@weex-module/storage');
	var navigator = __weex_require__('@weex-module/navigator');
	var styles = __webpack_require__(9).methods;
	module.exports = {
	  data: function () {return {
	    navBarHeight: 88,
	    title: '我的',
	    headerimg: 'local://mine_info.png',
	    righticon: 'local://right_icon.png',
	    userName: '吉尔伽美什',
	    userId: '',
	    heightD: 0,
	    list: [{ img: 'local://doing.jpg', text: '在办公文' }, { img: 'local://done.jpg', text: '办结公文' }, { img: 'local://search.jpg', text: '文件查询' }, { img: 'local://mine.jpg', text: '我的公文' }],
	    fontTitle: null,
	    fontRow: null,
	    indicatorColor: '',
	    rowHeight: null
	  }},

	  created: function created() {
	    var self = this;

	    navigator.clearNavBarLeftItem({}, function () {});
	    this.$getConfig(function (config) {
	      var env = config.env;
	      if (env.platform == 'iOS') {
	        var scale = env.scale;
	        var deviceWidth = env.deviceWidth / scale;
	        this.navBarHeight = 64.0 * 750.0 / deviceWidth;
	      }
	      this.heightD = env.deviceHeight;
	    }.bind(this));

	    self.fontTitle = styles.getFontB();
	    self.fontRow = styles.getFontC();

	    self.indicatorColor = styles.getColorB();
	    self.rowHeight = styles.getRowHeight();

	    var self = this;
	    storage.getItem('user_info', function (info) {
	      var userinfo = JSON.parse(info.data);
	      console.log('获取存储的用户信息', userinfo);
	      self.userName = userinfo.attr.parameter_username;
	      self.userId = userinfo.attr.parameter_userid;
	    });
	  }
	};}
	/* generated by weex-loader */


/***/ })

/******/ });