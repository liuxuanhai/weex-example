/**
 * Created by ZOU on 2017/5/25.
 */

angular.module('starter.JPushUtil', [])

// 极光推送
.factory('JpushService', [
  '$window',
  '$ionicPlatform',
  function($window, $ionicPlatform){
    return {
      //初始化
      init: function(notificationCallback){
        if ($window.plugins && $window.plugins.jPushPlugin) {
          $window.plugins.jPushPlugin.init();
          //$window.plugins.jPushPlugin.setDebugMode(true);
          //$window.plugins.jPushPlugin.openNotificationInAndroidCallback = notificationCallback;
          //$window.plugins.jPushPlugin.receiveNotificationIniOSCallback = notificationCallback;
        }
      },

      //设置设备注册的RegistrationID
      getRegistrationID: function(onGetRegistradionID){
        if($window.plugins && $window.plugins.jPushPlugin) {
          $window.plugins.jPushPlugin.getRegistrationID(onGetRegistradionID);
        }
      },

      //打开
      onOpen: function(callback) {
        if ($window.plugins && $window.plugins.jPushPlugin) {
          document.addEventListener("jpush.openNotification", callback, false);
        }
      },

      //接收
      onReceive: function(callback) {
        if ($window.plugins && $window.plugins.jPushPlugin) {
          document.addEventListener("jpush.receiveNotification", callback, false);
        }
      },

      //获取状态
      isPushStopped : function(fun){
        if($window.plugins && $window.plugins.jPushPlugin){
          $window.plugins.jPushPlugin.isPushStopped(fun)
        }
      },

      //停止极光推送
      stopPush: function(){
        if($window.plugins && $window.plugins.jPushPlugin) {
          $window.plugins.jPushPlugin.stopPush();
        }
      },

      //重启极光推送
      resumePush: function(onCallback){
        if($window.plugins && $window.plugins.jPushPlugin) {
          $window.plugins.jPushPlugin.resumePush(onCallback);
        }
      },

      //设置标签和别名
      setTagsWithAlias: function(tags,alias){
        if($window.plugins && $window.plugins.jPushPlugin) {
          $window.plugins.jPushPlugin.setTagsWithAlias(tags,alias);
          document.addEventListener("jpush.setTagsWithAlias", onTagsWithAlias, false);
          var onTagsWithAlias = function(event) {
            try {
              var result = "result code:" + event.resultCode + " ";
              result += "tags:" + event.tags + " ";
              result += "alias:" + event.alias + " ";
            } catch (exception) {
            }
          }
        }
      },

      //设置标签
      setTags: function(tags){
        if($window.plugins && $window.plugins.jPushPlugin) {
          $window.plugins.jPushPlugin.setTags(tags);
        }
      },

      //设置别名
      setAlias: function(alias){
        if($window.plugins && $window.plugins.jPushPlugin) {
          $window.plugins.jPushPlugin.setAlias(alias);
        }
      },

      // 清空应用badge值
      clearBadge: function() {
        if ($ionicPlatform.is('ios')) {
          if($window.plugins && $window.plugins.jPushPlugin) {
            $window.plugins.jPushPlugin.setApplicationIconBadgeNumber(0);
          }
        }
      }
    }
  }
]);
