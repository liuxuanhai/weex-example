(function(require, exports, moudle) {
		var MBS = window.MBS = window.MBS || {},
		        $ = require("jquery"),
		        extend = $.extend,
		        type = $.type,

		        ARRAY = "array",
		        BOOLEAN = "boolean",
		        DATE = "date",
		        NUMBER = "number",
		        FUNCTION = "function",
		        OBJECT = "object",
		        UNDEFINED = "undefined",
		        STRING = "string";

		    var SERVICE_CONSTANT = {
		        // POST
		        PARAMETER_POSTDATA: "parameter_postdata",
		        DATATYPE: "datatype",
		        PARAMETER_COMPRESS_DATA: "parameter_compressdata",
		        PARAMETER_ENCRYPTDATA: "parameter_encryptdata",
		        PARAMETER_ENCYPTVECTOR: "parameter_encyptvector",
		        PARAMETER_ENCYPTKEY: "parameter_encyptkey",

		        // TOKEN
		        PARAMETER_USERTOKENID: "parameter_usertokenid",
		        PARAMETER_USER_ID: "parameter_userid",
		        PARAMETER_USER_NAME: "parameter_username",

		        // LOGIN
		        PARAMETER_DEVICE_ID: "parameter_deviceid",
		        PARAMETER_DEVICE_NAME: "parameter_model",
		        PARAMETER_OS: "os",
		        PARAMETER_OS_VERSION: "osVersion",
		        PARAMETER_NETWORK_TYPE: "network",
		        PARAMETER_DEVICE_WIDTH: "resolution1",
		        PARAMETER_DEVICE_HEIGHT: "resolution2",
		        PARAMETER_PASSWORD: "parameter_password",
		        PARAMETER_OLDPASSWORD: "parameter_oldPassword",
		        PARAMETER_CLIENTTYPEID: "parameter_clienttypeid",
		        PARAMETER_CLIENTVERSION: "parameter_clienidtversion",

		        // SERVICE
		        PARAMETER_APPCODE: "appCode",
		        PROJECT_TOKEN: "projectName",
		        SERVICE_TOKEN: "serviceName",
		        METHOD_TOKEN: "methodName",

		        // OTHERS
		        PARAMETER_URL: "parameter_url",
		        ENCRYPTION_ENCODING: "Encryption-Encoding",

		        //Cookie Key From4M
		        SESSION_KEY_USERID:"IPLAT4M_USERID",
		        SESSION_KEY_USERNAME:"IPLAT4M_USERNAME",
		        SESSION_KEY_USERTOKENID:"IPLAT4M_USERTOKENID",
		        SESSION_KEY_ENCRYPTKEY:"IPLAT4M_ENCRYPTKEY",
		        SESSION_KEY_ENCRYPTVECTOR:"IPLAT4M_ENCRYPTVECTOR"
		    };

		    var COMMON_SERVICES = { // 中间件内置的服务
		        BIND_DEVICE: ["ML00", "bindingUserAndDevice"],
		        QUERY_VERSION: ["MA0000", "queryForLatestVersion"],
		        QUERY_APPS: ["MA0000", "query"]
		    };

		    var MBS_CONSTANT = {
		        AGENT_SERVICE: "http://202.101.47.84/iPlatMBS/AgentService", // 业务服务地址
		        LOGIN_SERVICE: "http://202.101.47.84/iPlatMBS/LoginService", // 登陆服务地址

		        FILE_SERVICE: "FileService", // 文档转换服务
		        FILE_URL: "fileurl", // 文档的url

		        VERSON_NO: "versionExternalNo", // app的版本号
		        APP_PACK_URL: "appVersionPack", // app的安装包地址

		        PROJECT: "platmbs" // 中间件服务配置地址 MPJT00

		    };

		    var MBS_SERVICE_STATUS = { // 中间件服务器的状态码
		        SUCCESS: 1,
		        FAILED: -1,
		        INVALID_USER: -2,
		        TIMEOUT: -3,
		        CANCELLED: -4,
		        INVALID_PASSWORD: -5,
		        UNAUTHENTIFICATION: -6,
		        NETWORK_ERROR: -7,
		        DEVICE_LOCKED: -8
		    };

		    function Class() {};
		    Class.extend = function(proto) {
		        var base = function() {},
		            member,
		            that = this,
		            subclass = proto && proto.init ? proto.init : function () {
		                that.apply(this, arguments);
		            },
		            fn;

		        base.prototype = that.prototype;
		        fn = subclass.fn = subclass.prototype = new base();

		        for (member in proto) {
		            if (typeof proto[member] === OBJECT && !(proto[member] instanceof Array) && proto[member] !== null) {
		                // Merge object members
		                fn[member] = extend(true, {}, base.prototype[member], proto[member]);
		            } else {
		                fn[member] = proto[member];
		            }
		        }

		        fn.constructor = subclass;
		        subclass.extend = that.extend;

		        return subclass;
		    };


		    extend(MBS, {
		        SERVICE_CONSTANT: SERVICE_CONSTANT,
		        COMMON_SERVICES: COMMON_SERVICES,
		        MBS_CONSTANT: MBS_CONSTANT,
		        MBS_SERVICE_STATUS: MBS_SERVICE_STATUS,

		        Class: Class,
		        isAvailable: function(o) {
		            return !!o || o === 0 || o === false;
		        },
		        isArray: $.isArray,
		        isFunction: $.isFunction,
		        isBoolean: function(o) {
		            return typeof o === BOOLEAN;
		        },
		        isDate: function(o) {
		            return type(o) === "DATE" && o.toString() !== 'Invalid Date' && !isNaN(o);
		        },
		        isString: function(o) {
		            return typeof o === STRING;
		        },
		        isUndefined: function(o) {
		            return typeof o === UNDEFINED;
		        },
		        isNull: function(o) {
		            return o === null;
		        },
		        bool2String: function (o) {
		            return !!o ? "true": "false";
		        },
		        getUrlParam: function(name) {
		            var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
		            return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
		        },
		        getProjectName: function(){
		            var pathName = window.document.location.pathname;
		            return pathName.substring(0,pathName.substr(1).indexOf('/') + 1);
		        }
		});
	// moudle.exports = MBS;
})(jQuery);