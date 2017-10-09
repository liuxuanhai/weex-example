(function(MBS, cookieUtils) {
    MBS = window.MBS;
    var Class = MBS.Class,
        cookieUtils = window.Cookie;
        // cookieUtils = new cookie();
        TYPE = "type",
        WECHAT = "wechat",
        USER_ID = "userId",
        getUrlParam = MBS.getUrlParam,
        getProjectName = MBS.getProjectName;

    window.Session = Class.extend({
        init: function () {
            var that = this;
            if (that._useWeChat()) {
                // 通过微信的URL获取userId等参数 FIXME: 临时的参数：userName，userTokenId
                that.userId = getUrlParam(USER_ID);
                that.userName = WECHAT;
                that.userTokenId = WECHAT;

            } else {
                that.userId =  window.Cookie.get(MBS.SERVICE_CONSTANT.SESSION_KEY_USERID);
                that.userName =  window.Cookie.get(MBS.SERVICE_CONSTANT.SESSION_KEY_USERNAME);
                that.userTokenId =  window.Cookie.get(MBS.SERVICE_CONSTANT.SESSION_KEY_USERTOKENID);
                that.encryptKey =  window.Cookie.get(MBS.SERVICE_CONSTANT.SESSION_KEY_ENCRYPTKEY);
                that.encryptVector =  window.Cookie.get(MBS.SERVICE_CONSTANT.SESSION_KEY_ENCRYPTVECTOR);
            }
        },
        // 导出session信息
        getUserSession: function () {
            return {
                anonymous: !this.hasSessionContent(),
                userId: this.userId,
                userName: this.userName,
                userTokenId: this.userTokenId
            }
        },

        _useWeChat: function() {
           return getUrlParam(TYPE) == WECHAT
        },

        hasSessionContent: function () {
            return MBS.isAvailable(this.userId) &&
                MBS.isAvailable(this.userName) &&
                MBS.isAvailable(this.userTokenId);
        }
    });

    

})(jQuery);