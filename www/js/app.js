// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in Sysconfig.js
angular.module('starter', ['ionic',  'starter.services',
                          'starter.JPushUtil','starter.PostUtil','ionic-datepicker',
                           'starter.tagsmap','starter.echart','starter.alarm',
                            'starter.alarmlimit', 'starter.cordovaPlugin',
                          'starter.limitEntity', 'starter.home','starter.homeEntity',
                         "ion-datetime-picker","ngCordova"])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
//jpush
.run([
  '$ionicPlatform',"$ionicPopup",
  "$rootScope","$location",
  "$ionicHistory",'JpushService',
  function($ionicPlatform,$ionicPopup,$rootScope,$location,$ionicHistory,JpushService) {
    $ionicPlatform.ready(function() {
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }

      // 启动极光推送
      JpushService.init();
      JpushService.onOpen();
      JpushService.onReceive();
      // 获取设备的registerId
      JpushService.getRegistrationID(function(id){
        // 传送registrationId 到用户服务器
        //alert("registerId:" + id);
      });
    });

    /*注册返回事件*/
    $ionicPlatform.registerBackButtonAction(function(e){
      /*用一个变量来控制界面上是否已经存在popup,多次点击的时候如果存在就不再提示*/
      $rootScope.popup = {
        isPopup: false,
        index: 0
      };
      function showConfirm(){
        var confirmPopup= $ionicPopup.confirm({
          title:"<strong>你确定要退出应用吗？</strong>",
          //template:"你确定要退出应用吗？",
          okText:"确定",
          cancelText:"取消"
        });
        $rootScope.popup.isPopup=true;
        confirmPopup.then(function(res){
          if(res){
            ionic.Platform.exitApp();
          }
        })
      }

      /*根据首页的路由判断是否提示退出*/
      if ($location.path() =="/tab/alarm"||$location.path() =="/tab/home"||
        $location.path() =="/tab/echart"||$location.path() =="/tab/sysconfig"){
        if(!$rootScope.popup.isPopup){
          showConfirm();
        }
      }else if($ionicHistory.backView()){
        $ionicHistory.goBack();//back到之前的路由
        $ionicViewSwitcher.nextDirection("back");//增加切换的样式
      }else{
        showConfirm();
      }
      return false;
    },501);//501表示优先级  100~999之间
 }])

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in Sysconfig.js

  $ionicConfigProvider.platform.ios.tabs.position('bottom');
  $ionicConfigProvider.platform.android.tabs.position('bottom');
  $ionicConfigProvider.platform.android.navBar.alignTitle('center');
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

    .state('tab.alarm', {
      url: '/alarm',
      views: {
        'tab-alarm': {
          templateUrl: 'templates/alarm/tab-alarm.html',
          controller: 'AlarmCtrl'
        }
      }
    })

    .state('tab.alarm-detail', {
      url: '/alarm/:id',
      views: {
        'tab-alarm': {
          templateUrl: 'templates/alarm/alarm-detail.html',
          controller: 'AlarmDetailCtrl'
        }
      }
    })

    .state('tab.alarm-last', {
      url: '/alarm/:id',
      views: {
        'tab-alarm': {
          templateUrl: 'templates/alarm/alarm-last.html',
          controller: 'AlarmLastCtrl'
        }
      }
    })

    .state('tab.alarm-point', {
      url: '/alarm/:id',
      views: {
        'tab-alarm': {
          templateUrl: 'templates/alarm/alarm-point.html',
          controller: 'AlarmPointCtrl'
        }
      }
    })
    .state('tab.alarm-limit', {
      url: '/alarm/',
      views: {
        'tab-alarm': {
          templateUrl: 'templates/alarm/alarm-limit.html',
          controller: 'AlarmLimitCtrl'
        }
      }
    })
    .state('tab.echart', {
      url: '/echart',
      views: {
        'tab-echart': {
          templateUrl: 'templates/echart/tab-echart.html',
          controller: 'EchartCtrl'
        }
      }
    })

    .state('tab.echart-detail', {
      url: '/echart/:id',
      views: {
        'tab-echart': {
          cache: false,
          templateUrl: 'templates/echart/echart-detail.html',
          controller: 'EchartDetailCtrl'
        }
      }
    })

    .state('tab.echart-last', {
      url: '/echart/:id',
      views: {
        'tab-echart': {
          cache: false,
          templateUrl: 'templates/echart/echart-last.html',
          controller: 'EchartLastCtrl'
        }
      }
    })

    .state('tab.home', {
      url: '/home',
      views: {
        'tab-home': {
          templateUrl: 'templates/common/tab-home.html',
          controller: 'HomeCtrl'
        }
      }
    })


  // if none of the above states are matched, use this as the fallback
  //$urlRouterProvider.otherwise('/tab/echart');
  //$urlRouterProvider.otherwise('/tab/login');
  $urlRouterProvider.otherwise('/tab/home');

});


