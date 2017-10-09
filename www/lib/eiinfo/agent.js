(function($) {
	 // var $ = require("jquery"),
        var extend = $.extend,
        MBS = window.MBS,
        Class = window.Session;

    var TOKEN = "0123456789abcdef",
        ANONYMOUS = "anonymous",
        DATA_TYPE = {
            EIINFO: "json/eiinfo",
            SERVLET: "json/json",
            WEBSERVICE: "json/xml"
        };

    window.Agent = Class.extend({
        init: function(options) {
            var that = this;
            // 默认读取浏览器session信息，否则以options设置为准
            options = options || session.getUserSession();
            this.setAgent(options);
            $.support.cors = true;
        },
        options: {
            anonymous: false,
            userId: '',
            userName: '',
            userTokenId: '',
            data: {}
        },
        _checkSession: function() { //
            var that = this;
            if (!that.options.anonymous) {
                return MBS.isAvailable(that.options.userId) &&
                    MBS.isAvailable(that.options.userName) &&
                    MBS.isAvailable(that.options.userTokenId);
            }
            return true;
        },

        _login: function () { // do in MBS

        },
        setAgent: function(options) { // compress encrypt datatype
            var that = this,
                compress = MBS.bool2String(that.options.compress), // TODO always false
                encrypt = MBS.bool2String(that.options.encrypt); // TODO always false

            that.options = extend(that.options, options);

            if (that.options.anonymous) { // 匿名访问只更改tokenId
                that.options.userTokenId = TOKEN;
                //that.options.userId = ANONYMOUS;
                //that.options.userName = ANONYMOUS;
            } 

            var data = that.options.data;
            data[MBS.SERVICE_CONSTANT.PARAMETER_COMPRESS_DATA] = "false";
            data[MBS.SERVICE_CONSTANT.PARAMETER_ENCRYPTDATA] = "false";
            data[MBS.SERVICE_CONSTANT.PARAMETER_USER_ID] = that.options.userId;
            data[MBS.SERVICE_CONSTANT.PARAMETER_USERTOKENID] = that.options.userTokenId;
        },
        callService: function(url, eiinfo /*:String*/, options) {
            var that = this,
                data = that.options.data;

            if (that._checkSession()) {
                // session OK
                data[MBS.SERVICE_CONSTANT.DATATYPE] = DATA_TYPE.EIINFO;
                data[MBS.SERVICE_CONSTANT.PARAMETER_POSTDATA] = eiinfo;

                $.ajax({
                    type: "POST",
                    async: false,
                    url: url,
                    data: data,
                    dataType: "json",
                    success: function (data, status, jqXHR) {
                        if (MBS.isFunction(options.success)) {
                            options.success(data);
                        }

                    },
                    error: function ( jqXHR, status, e ){
                        if (MBS.isFunction(options.error)) {
                            options.error(e);
                        }
                    }
                });

            } else { //InValid UserSession
                console.log("Invalid UserSession!");
            }
        },
        callServlet: function(url, json /*:String*/, options) {
            var that = this,
                data = that.options.data;

            if (that._checkSession()) {
                // session OK
                data[MBS.SERVICE_CONSTANT.DATATYPE] = DATA_TYPE.SERVLET;
                data[MBS.SERVICE_CONSTANT.PARAMETER_POSTDATA] = json;

                $.ajax({
                    type: "POST",
                    async: false,
                    url: url,
                    data: data,
                    crossDomain: true,
                    dataType: "json",
                    success: function (data, status, jqXHR) {
                        if (MBS.isFunction(options.success)) {
                            options.success(data);
                        }

                    },
                    error: function ( jqXHR, status, e ){
                        if (MBS.isFunction(options.error)) {
                            options.error(e);
                        }
                    }
                });

            } else { //InValid UserSession
                console.log("Invalid UserSession!");
            }
        },
        callWebService: function(url, xml /*:String*/, options) {
            var that = this,
                data = that.options.data;
            if (that._checkSession()) {
                // session OK
                data[MBS.SERVICE_CONSTANT.DATATYPE] = DATA_TYPE.WEBSERVICE;
                data[MBS.SERVICE_CONSTANT.PARAMETER_POSTDATA] = xml;

                $.ajax({
                    type: "POST",
                    async: false,
                    url: url,
                    data: data,
                    dataType: "json",
                    success: function (data, status, jqXHR) {
                        if (MBS.isFunction(options.success)) {
                            options.success(data);
                        }

                    },
                    error: function ( jqXHR, status, e ){
                        if (MBS.isFunction(options.error)) {
                            options.error(e);
                        }
                    }
                });

            } else { //InValid UserSession
                console.log("Invalid UserSession!");
            }
        }
    });
    // window.MBS.AGENT = window.MBS.AGENT || new Agent();

    // $.extend(window, {
    //     AGENT: Agent
    // });
})(jQuery);