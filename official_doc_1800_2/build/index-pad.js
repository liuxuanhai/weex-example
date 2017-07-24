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

	var __weex_template__ = __webpack_require__(173)
	var __weex_style__ = __webpack_require__(174)
	var __weex_script__ = __webpack_require__(175)
	var __weex_config__ = __webpack_require__(176)

	__weex_define__('@weex-component/ffe73a32b70280fae8e177687413d5f1', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/ffe73a32b70280fae8e177687413d5f1',__weex_config__,undefined)

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
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

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
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
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(15);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(66);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(16), __esModule: true };

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(17);
	__webpack_require__(61);
	module.exports = __webpack_require__(65).f('iterator');

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(18)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(21)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(19)
	  , defined   = __webpack_require__(20);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(22)
	  , $export        = __webpack_require__(23)
	  , redefine       = __webpack_require__(38)
	  , hide           = __webpack_require__(28)
	  , has            = __webpack_require__(39)
	  , Iterators      = __webpack_require__(40)
	  , $iterCreate    = __webpack_require__(41)
	  , setToStringTag = __webpack_require__(57)
	  , getPrototypeOf = __webpack_require__(59)
	  , ITERATOR       = __webpack_require__(58)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	module.exports = true;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(24)
	  , core      = __webpack_require__(25)
	  , ctx       = __webpack_require__(26)
	  , hide      = __webpack_require__(28)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(27);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(29)
	  , createDesc = __webpack_require__(37);
	module.exports = __webpack_require__(33) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(30)
	  , IE8_DOM_DEFINE = __webpack_require__(32)
	  , toPrimitive    = __webpack_require__(36)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(33) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(31);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(33) && !__webpack_require__(34)(function(){
	  return Object.defineProperty(__webpack_require__(35)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(34)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(31)
	  , document = __webpack_require__(24).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(31);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(28);

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ }),
/* 40 */
/***/ (function(module, exports) {

	module.exports = {};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(42)
	  , descriptor     = __webpack_require__(37)
	  , setToStringTag = __webpack_require__(57)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(28)(IteratorPrototype, __webpack_require__(58)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(30)
	  , dPs         = __webpack_require__(43)
	  , enumBugKeys = __webpack_require__(55)
	  , IE_PROTO    = __webpack_require__(52)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(35)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(56).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(29)
	  , anObject = __webpack_require__(30)
	  , getKeys  = __webpack_require__(44);

	module.exports = __webpack_require__(33) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(45)
	  , enumBugKeys = __webpack_require__(55);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(39)
	  , toIObject    = __webpack_require__(46)
	  , arrayIndexOf = __webpack_require__(49)(false)
	  , IE_PROTO     = __webpack_require__(52)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(47)
	  , defined = __webpack_require__(20);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(48);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ }),
/* 48 */
/***/ (function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(46)
	  , toLength  = __webpack_require__(50)
	  , toIndex   = __webpack_require__(51);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(19)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(19)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(53)('keys')
	  , uid    = __webpack_require__(54);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(24)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ }),
/* 54 */
/***/ (function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ }),
/* 55 */
/***/ (function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(24).document && document.documentElement;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(29).f
	  , has = __webpack_require__(39)
	  , TAG = __webpack_require__(58)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(53)('wks')
	  , uid        = __webpack_require__(54)
	  , Symbol     = __webpack_require__(24).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(39)
	  , toObject    = __webpack_require__(60)
	  , IE_PROTO    = __webpack_require__(52)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(20);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(62);
	var global        = __webpack_require__(24)
	  , hide          = __webpack_require__(28)
	  , Iterators     = __webpack_require__(40)
	  , TO_STRING_TAG = __webpack_require__(58)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(63)
	  , step             = __webpack_require__(64)
	  , Iterators        = __webpack_require__(40)
	  , toIObject        = __webpack_require__(46);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(21)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ }),
/* 63 */
/***/ (function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ }),
/* 64 */
/***/ (function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(58);

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(67), __esModule: true };

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(68);
	__webpack_require__(79);
	__webpack_require__(80);
	__webpack_require__(81);
	module.exports = __webpack_require__(25).Symbol;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(24)
	  , has            = __webpack_require__(39)
	  , DESCRIPTORS    = __webpack_require__(33)
	  , $export        = __webpack_require__(23)
	  , redefine       = __webpack_require__(38)
	  , META           = __webpack_require__(69).KEY
	  , $fails         = __webpack_require__(34)
	  , shared         = __webpack_require__(53)
	  , setToStringTag = __webpack_require__(57)
	  , uid            = __webpack_require__(54)
	  , wks            = __webpack_require__(58)
	  , wksExt         = __webpack_require__(65)
	  , wksDefine      = __webpack_require__(70)
	  , keyOf          = __webpack_require__(71)
	  , enumKeys       = __webpack_require__(72)
	  , isArray        = __webpack_require__(75)
	  , anObject       = __webpack_require__(30)
	  , toIObject      = __webpack_require__(46)
	  , toPrimitive    = __webpack_require__(36)
	  , createDesc     = __webpack_require__(37)
	  , _create        = __webpack_require__(42)
	  , gOPNExt        = __webpack_require__(76)
	  , $GOPD          = __webpack_require__(78)
	  , $DP            = __webpack_require__(29)
	  , $keys          = __webpack_require__(44)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(77).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(74).f  = $propertyIsEnumerable;
	  __webpack_require__(73).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(22)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(28)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(54)('meta')
	  , isObject = __webpack_require__(31)
	  , has      = __webpack_require__(39)
	  , setDesc  = __webpack_require__(29).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(34)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(24)
	  , core           = __webpack_require__(25)
	  , LIBRARY        = __webpack_require__(22)
	  , wksExt         = __webpack_require__(65)
	  , defineProperty = __webpack_require__(29).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(44)
	  , toIObject = __webpack_require__(46);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(44)
	  , gOPS    = __webpack_require__(73)
	  , pIE     = __webpack_require__(74);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ }),
/* 73 */
/***/ (function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 74 */
/***/ (function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(48);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(46)
	  , gOPN      = __webpack_require__(77).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(45)
	  , hiddenKeys = __webpack_require__(55).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(74)
	  , createDesc     = __webpack_require__(37)
	  , toIObject      = __webpack_require__(46)
	  , toPrimitive    = __webpack_require__(36)
	  , has            = __webpack_require__(39)
	  , IE8_DOM_DEFINE = __webpack_require__(32)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(33) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ }),
/* 79 */
/***/ (function(module, exports) {

	

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(70)('asyncIterator');

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(70)('observable');

/***/ }),
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(139)
	var __weex_script__ = __webpack_require__(140)

	__weex_define__('@weex-component/bx-loading', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	})


/***/ }),
/* 139 */
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
/* 140 */
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
/* 141 */
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
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(160), __esModule: true };

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(25)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ }),
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "wxc-navbar",
	      "attr": {
	        "dataRole": "navbar",
	        "height": function () {return this.navBarHeight},
	        "backgroundColor": "#3CB0FC",
	        "title": function () {return this.title},
	        "titleColor": "white",
	        "leftItemTitle": "退出",
	        "leftItemColor": "white"
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "wrapper"
	      ],
	      "style": {
	        "marginTop": function () {return this.navBarHeight}
	      },
	      "children": [
	        {
	          "type": "list",
	          "classList": [
	            "list"
	          ],
	          "style": {
	            "width": function () {return this.width}
	          },
	          "events": {
	            "viewappear": "viewappear"
	          },
	          "children": [
	            {
	              "type": "refresh",
	              "style": {
	                "width": function () {return this.width},
	                "padding": 30,
	                "alignItems": "center"
	              },
	              "events": {
	                "refresh": "refreshData"
	              },
	              "attr": {
	                "display": function () {return this.refreshDisplay}
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "text"
	                  ],
	                  "attr": {
	                    "value": function () {return this.refreshText}
	                  }
	                },
	                {
	                  "type": "loading-indicator",
	                  "classList": [
	                    "indicator"
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "cell",
	              "append": "tree",
	              "classList": [
	                "header"
	              ],
	              "children": [
	                {
	                  "type": "div",
	                  "children": [
	                    {
	                      "type": "image",
	                      "style": {
	                        "width": function () {return this.width},
	                        "height": 178
	                      },
	                      "attr": {
	                        "src": "local://banner_pad.jpg"
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "buttons"
	                  ],
	                  "style": {
	                    "width": function () {return this.width}
	                  },
	                  "children": [
	                    {
	                      "type": "div",
	                      "classList": [
	                        "space"
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "classList": [
	                        "button"
	                      ],
	                      "events": {
	                        "click": function ($event) {this.push(0,$event)}
	                      },
	                      "children": [
	                        {
	                          "type": "image",
	                          "style": {
	                            "width": 80,
	                            "height": 80
	                          },
	                          "attr": {
	                            "src": "local://todo.jpg"
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "title"
	                          ],
	                          "style": {
	                            "fontSize": function () {return this.fontDate}
	                          },
	                          "attr": {
	                            "value": "待办公文"
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "classList": [
	                        "button"
	                      ],
	                      "events": {
	                        "click": function ($event) {this.push(4,$event)}
	                      },
	                      "children": [
	                        {
	                          "type": "image",
	                          "style": {
	                            "width": 80,
	                            "height": 80
	                          },
	                          "attr": {
	                            "src": "local://doc_new.jpg"
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "title"
	                          ],
	                          "style": {
	                            "fontSize": function () {return this.fontDate}
	                          },
	                          "attr": {
	                            "value": "新建公文"
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "classList": [
	                        "button"
	                      ],
	                      "events": {
	                        "click": function ($event) {this.push(1,$event)}
	                      },
	                      "children": [
	                        {
	                          "type": "image",
	                          "style": {
	                            "width": 80,
	                            "height": 80
	                          },
	                          "attr": {
	                            "src": "local://mine.jpg"
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "title"
	                          ],
	                          "style": {
	                            "fontSize": function () {return this.fontDate}
	                          },
	                          "attr": {
	                            "value": "我的公文"
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "classList": [
	                        "button"
	                      ],
	                      "events": {
	                        "click": function ($event) {this.push(2,$event)}
	                      },
	                      "children": [
	                        {
	                          "type": "image",
	                          "style": {
	                            "width": 80,
	                            "height": 80
	                          },
	                          "attr": {
	                            "src": "local://doing.jpg"
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "title"
	                          ],
	                          "style": {
	                            "fontSize": function () {return this.fontDate}
	                          },
	                          "attr": {
	                            "value": "在办公文"
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "classList": [
	                        "button"
	                      ],
	                      "events": {
	                        "click": function ($event) {this.push(3,$event)}
	                      },
	                      "children": [
	                        {
	                          "type": "image",
	                          "style": {
	                            "width": 80,
	                            "height": 80
	                          },
	                          "attr": {
	                            "src": "local://done.jpg"
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "title"
	                          ],
	                          "style": {
	                            "fontSize": function () {return this.fontDate}
	                          },
	                          "attr": {
	                            "value": "办结公文"
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "classList": [
	                        "button"
	                      ],
	                      "events": {
	                        "click": function ($event) {this.push(5,$event)}
	                      },
	                      "children": [
	                        {
	                          "type": "image",
	                          "style": {
	                            "width": 80,
	                            "height": 80
	                          },
	                          "attr": {
	                            "src": "local://search.jpg"
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "title"
	                          ],
	                          "style": {
	                            "fontSize": function () {return this.fontDate}
	                          },
	                          "attr": {
	                            "value": "文件查询"
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "classList": [
	                        "space"
	                      ]
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "cell",
	              "append": "tree",
	              "classList": [
	                "cellheader"
	              ],
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "cellHeaderStyle"
	                  ],
	                  "style": {
	                    "borderBottomColor": function () {return this.indicatorColor}
	                  },
	                  "children": [
	                    {
	                      "type": "image",
	                      "style": {
	                        "marginLeft": 20,
	                        "width": 30,
	                        "height": 30
	                      },
	                      "attr": {
	                        "src": "local://todo_icon.png"
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "style": {
	                        "flex": 9,
	                        "fontSize": function () {return this.fontSmallTitle},
	                        "color": "#52ACF9",
	                        "marginLeft": 8
	                      },
	                      "attr": {
	                        "value": "待办公文"
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "style": {
	                        "flex": 1,
	                        "fontSize": function () {return this.fontDate},
	                        "color": function () {return this.greyTextColor}
	                      },
	                      "events": {
	                        "click": function ($event) {this.push(0,$event)}
	                      },
	                      "attr": {
	                        "value": "更多 ···"
	                      }
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "cell",
	              "append": "tree",
	              "style": {
	                "backgroundColor": "#efefef"
	              },
	              "events": {
	                "click": "oncellclick"
	              },
	              "repeat": {
	                "expression": function () {return this.items},
	                "value": "item"
	              },
	              "id": function () {return 'item-' + (this.$index)},
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "cellStyle"
	                  ],
	                  "style": {
	                    "borderBottomColor": function () {return this.indicatorColor}
	                  },
	                  "children": [
	                    {
	                      "type": "div",
	                      "classList": [
	                        "leftArea"
	                      ],
	                      "children": [
	                        {
	                          "type": "image",
	                          "style": {
	                            "width": 50,
	                            "height": 50,
	                            "marginLeft": 25
	                          },
	                          "attr": {
	                            "src": "local://todo_list_icon.png"
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "classList": [
	                        "centerArea"
	                      ],
	                      "children": [
	                        {
	                          "type": "text",
	                          "style": {
	                            "fontSize": function () {return this.fontTitle},
	                            "color": "#282828",
	                            "marginLeft": 10,
	                            "marginRight": 10
	                          },
	                          "attr": {
	                            "value": function () {return this.item.title}
	                          }
	                        },
	                        {
	                          "type": "div",
	                          "style": {
	                            "flexDirection": "row",
	                            "marginTop": 20
	                          },
	                          "children": [
	                            {
	                              "type": "text",
	                              "style": {
	                                "marginLeft": 10,
	                                "fontSize": function () {return this.fontSmallTitle},
	                                "color": function () {return this.greyTextColor}
	                              },
	                              "attr": {
	                                "value": function () {return this.item.createUser}
	                              }
	                            },
	                            {
	                              "type": "text",
	                              "style": {
	                                "marginLeft": 20,
	                                "fontSize": function () {return this.fontSmallTitle},
	                                "color": function () {return this.greyTextColor}
	                              },
	                              "attr": {
	                                "value": function () {return this.item.fileID}
	                              }
	                            }
	                          ]
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "children": [
	                        {
	                          "type": "text",
	                          "style": {
	                            "fontSize": function () {return this.fontDate},
	                            "color": function () {return this.greyTextColor}
	                          },
	                          "attr": {
	                            "value": function () {return this.item.createDate}
	                          }
	                        }
	                      ]
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "loading",
	              "events": {
	                "loading": "loadingData"
	              },
	              "style": {
	                "width": function () {return this.width},
	                "padding": 10,
	                "backgroundColor": "#F7F8F7",
	                "alignItems": "center"
	              },
	              "shown": function () {return this.isLoading},
	              "attr": {
	                "display": function () {return this.loadingDisplay}
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "text"
	                  ],
	                  "attr": {
	                    "value": "更多 ···"
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "bx-loading",
	          "attr": {
	            "top": "400"
	          },
	          "shown": function () {return this.loading}
	        }
	      ]
	    }
	  ]
	}

/***/ }),
/* 174 */
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0
	  },
	  "text": {
	    "color": "#939393",
	    "fontSize": 24
	  },
	  "list": {
	    "backgroundColor": "#efefef",
	    "flex": 1
	  },
	  "buttons": {
	    "padding": 10,
	    "flexDirection": "row",
	    "backgroundColor": "#FFFFFF",
	    "height": 145
	  },
	  "space": {
	    "width": 100
	  },
	  "button": {
	    "flex": 1,
	    "alignItems": "center",
	    "backgroundColor": "#FFFFFF"
	  },
	  "header": {
	    "height": 350,
	    "backgroundColor": "#efefef",
	    "borderBottomColor": "#eeeeee",
	    "borderBottomWidth": 2,
	    "borderBottomStyle": "solid"
	  },
	  "cellheader": {
	    "height": 62,
	    "backgroundColor": "#efefef",
	    "borderBottomColor": "#eeeeee",
	    "borderBottomWidth": 2,
	    "borderBottomStyle": "solid"
	  },
	  "cellHeaderStyle": {
	    "flexDirection": "row",
	    "borderBottomStyle": "solid",
	    "borderBottomWidth": 1,
	    "marginLeft": 20,
	    "marginRight": 20,
	    "height": 62,
	    "alignItems": "center",
	    "backgroundColor": "#FFFFFF"
	  },
	  "title": {
	    "textAlign": "center",
	    "color": "#000000"
	  },
	  "cellStyle": {
	    "marginLeft": 20,
	    "marginRight": 20,
	    "backgroundColor": "#FFFFFF",
	    "flexDirection": "row",
	    "borderBottomStyle": "solid",
	    "borderBottomWidth": 1,
	    "paddingTop": 30,
	    "paddingBottom": 30,
	    "paddingRight": 20
	  },
	  "leftArea": {
	    "flex": 1
	  },
	  "centerArea": {
	    "flex": 9,
	    "marginLeft": 10
	  },
	  "img": {
	    "width": 70,
	    "height": 70
	  }
	}

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var _stringify = __webpack_require__(159);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _typeof2 = __webpack_require__(14);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(138);
	__webpack_require__(266);
	var navigator = __weex_require__('@weex-module/navigator');
	var getBaseURL = __webpack_require__(141).getBaseURL;
	var tools = __webpack_require__(4).methods;
	var styles = __webpack_require__(9).methods;
	var modal = __weex_require__('@weex-module/modal') || {};
	var storage = __weex_require__('@weex-module/storage');
	var getPlatform = __webpack_require__(4).methods.getPlatform;

	module.exports = {
	  data: function () {return {
	    dir: 'official_doc',
	    navBarHeight: 88,
	    title: '首页',
	    isLoaded: true,
	    isLoading: false,
	    refreshText: '↓ 下拉刷新',
	    baseURL: '',
	    loading: true,
	    loadingDisplay: 'hide',
	    refreshDisplay: 'hide',
	    width: 750,
	    page: 1,
	    items: [],
	    userName: '',
	    userId: '',
	    fontTitle: null,
	    fontSmallTitle: null,
	    fontDate: null,
	    greyTextColor: '',
	    indicatorColor: ''
	  }},
	  created: function created() {

	    var self = this;

	    this.$getConfig(function (config) {
	      var env = config.env;
	      var scale = env.scale;
	      var deviceWidth = env.deviceWidth > env.deviceHeight ? env.deviceWidth : env.deviceHeight;
	      deviceWidth = deviceWidth / scale;
	      console.log('deviceWidth', deviceWidth);
	      this.width = deviceWidth;
	      deviceWidth = env.deviceWidth / scale;
	      if (env.platform == 'iOS') {
	        this.navBarHeight = 64.0 * 750.0 / deviceWidth;
	      } else {
	        this.navBarHeight = 88.0 * 750.0 / deviceWidth;
	      }
	    }.bind(this));

	    self.fontTitle = styles.getFontD();
	    self.fontSmallTitle = styles.getFontE();
	    self.fontDate = styles.getFontF();
	    self.greyTextColor = styles.getColorA();
	    self.indicatorColor = styles.getColorB();

	    storage.getItem('todolist_cache', function (e) {
	      var result = e.result;
	      var data = e.data;
	      if (result === 'success') {
	        var res = JSON.parse(data);
	        self.updateData(res, false);
	      }
	      self.page = 1;

	      weex.requireModule('user').getUserInfo(function (info) {
	        console.log('获取登陆信息并存储', info);

	        self.userName = info.attr.parameter_username;
	        self.userId = info.attr.parameter_userid;

	        self.renderData();
	      });
	    });

	    self.baseURL = getBaseURL(this);

	    this.$on('naviBar.leftItem.click', function (e) {

	      var photo = __weex_require__('@weex-module/connect');
	      photo.exitApp(function (e) {});
	    });
	  },
	  methods: {
	    push: function push(index, e) {
	      var vm = this;
	      var url = this.baseURL;
	      if ((typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) !== 'object') {
	        switch (index) {
	          case 4:
	            url = this.baseURL + 'new-doc/new-doc.js';
	            storage.setItem('new-doc-dif', '1', function (e) {});
	            break;
	          case 5:
	            url = this.baseURL + 'search-doc/query.js';break;
	          case 0:
	            url = this.baseURL + 'todo-doc/index.js?index=' + index;
	            storage.setItem('todo-list-dif', '1', function (e) {});
	            break;
	          default:
	            url = this.baseURL + 'todo-doc/index.js?index=' + index;
	        }
	      }
	      var params = { 'url': url };
	      console.log('push url', url);
	      navigator.push(params, function (e) {});
	    },
	    getHQTaskList: function getHQTaskList(userName, userId, page) {
	      var json = {
	        attr: {
	          projectName: "1800OAProject",
	          serviceName: "getToDoDoc",
	          methodName: "getTaskList"
	        },
	        data: {
	          userName: userName,
	          userId: userId,
	          page: page
	        }
	      };
	      return json;
	    },
	    oncellclick: function oncellclick(e) {
	      var vm = this;
	      var url = this.baseURL;
	      if ((typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) !== 'object') {
	        var docId = this.items[this.$index].documentKey;
	        url = this.baseURL + 'todo-doc/to-do-detail-pad.js?docId=' + docId;
	      }
	      var params = { 'url': url };
	      navigator.push(params, function (e) {});
	    },
	    updateData: function updateData(res, save) {
	      var self = this;
	      self.refreshText = '↓ 下拉刷新';
	      self.loadingDisplay = 'hide';
	      self.loading = false;
	      self.isLoading = true;
	      try {
	        if (res.status == -1) {
	          modal.toast({
	            'message': '链接服务器超时，请稍候再试',
	            'duration': 2
	          });
	          self.isLoading = false;
	          return;
	        }

	        var docs = res.data.docs || [];
	        if (docs.length == 0) {
	          modal.toast({
	            'message': '没有更多数据了',
	            'duration': 2
	          });
	          self.isLoading = false;
	          return;
	        }

	        console.log('get docs', res.data.docs);
	        if (Array.isArray(docs)) {
	          if (self.page == 1) {
	            storage.setItem('todolist_cache', (0, _stringify2.default)(res), function (e) {});
	            self.items = [];
	          }
	          for (var i = 0; i < docs.length; i++) {
	            self.items.push(docs[i]);
	          }
	        }
	        if (self.items.length == res.data.totalCount) {
	          self.isLoading = false;
	        }
	        self.page++;
	        self.isLoaded = true;
	      } catch (e) {}
	    },
	    renderData: function renderData() {
	      var self = this;
	      var json = self.getHQTaskList(self.userName, self.userId, this.page.toString());
	      var service = __weex_require__('@weex-module/service') || {};
	      service.fetch(json, function (res) {
	        self.updateData(res, true);
	      });
	    },
	    loadingData: function loadingData(e) {
	      var self = this;
	      if (self.isLoaded === false) return;
	      self.loadingDisplay = 'show';
	      self.renderData();
	    },
	    refreshData: function refreshData(e) {
	      if (this.isLoaded === false) return;

	      this.refreshText = '↑ 释放更新';
	      this.refreshDisplay = 'show';
	      this.loading = true;
	      this.page = 1;
	      this.renderData();
	      this.refreshDisplay = 'hide';
	    },
	    viewappear: function viewappear() {
	      console.log("---ceshi");
	      storage.removeItem('person-list', function (e) {});
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ }),
/* 176 */
/***/ (function(module, exports) {

	module.exports = {
	    "viewport": {
	        "width": "device-width",
	        "height":"device-height"
	    }
	  }

/***/ }),
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(267)
	var __weex_style__ = __webpack_require__(268)
	var __weex_script__ = __webpack_require__(269)

	__weex_define__('@weex-component/wxc-navbar', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ }),
/* 267 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "style": {
	    "height": function () {return this.height},
	    "backgroundColor": function () {return this.backgroundColor}
	  },
	  "attr": {
	    "dataRole": function () {return this.dataRole}
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
	        "naviItemPosition": "right",
	        "value": function () {return this.rightItemTitle}
	      },
	      "shown": function () {return !this.rightItemSrc},
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
	        "naviItemPosition": "right",
	        "src": function () {return this.rightItemSrc}
	      },
	      "shown": function () {return this.rightItemSrc},
	      "events": {
	        "click": "onclickrightitem"
	      }
	    },
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
	        "value": function () {return this.leftItemTitle}
	      },
	      "shown": function () {return !this.leftItemSrc},
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
	        "src": function () {return this.leftItemSrc}
	      },
	      "shown": function () {return this.leftItemSrc},
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
	    }
	  ]
	}

/***/ }),
/* 268 */
/***/ (function(module, exports) {

	module.exports = {
	  "container": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "alignItems": "center"
	  },
	  "right-text": {
	    "right": 32,
	    "textAlign": "right",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "left-text": {
	    "left": 32,
	    "textAlign": "left",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "center-text": {
	    "position": "absolute",
	    "top": 10,
	    "left": 172,
	    "right": 172,
	    "textAlign": "center",
	    "fontSize": 36,
	    "fontWeight": "bold",
	    "alignItems": "center"
	  },
	  "left-image": {
	    "left": 28,
	    "width": 50,
	    "height": 50
	  },
	  "right-image": {
	    "right": 28,
	    "width": 50,
	    "height": 50
	  }
	}

/***/ }),
/* 269 */
/***/ (function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    dataRole: 'navbar',

	    backgroundColor: 'black',

	    height: 88,

	    title: "",

	    titleColor: 'black',

	    rightItemSrc: '',

	    rightItemTitle: '',

	    rightItemColor: 'black',

	    leftItemSrc: '',

	    leftItemTitle: '',

	    leftItemColor: 'black'
	  }},
	  methods: {
	    onclickrightitem: function onclickrightitem(e) {
	      this.$dispatch('naviBar.rightItem.click', {});
	    },
	    onclickleftitem: function onclickleftitem(e) {
	      this.$dispatch('naviBar.leftItem.click', {});
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ })
/******/ ]);