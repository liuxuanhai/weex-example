/* We define a global variable 'namespace' as module manager*/

/* start application*/
angular.module('starter.cordovaPlugin', [])
//define(['utilities/detector'],
  .factory("cordovaPlugin",function() {
	var cordovaPlugin = {
    isCordovaAvailable: function () {
      return typeof (window.cordova || window.Cordova || window.PhoneGap) !== 'undefined';
    },

    navigator: {
      pop: function (message, successCallback, errorCallback) {
        cordova.exec(
          successCallback,   // success callback function
          errorCallback,     // error callback function
          'Navigator',            // mapped to our native Java class called "navigator"
          'pop',  // with this action name
          [                  // and this array of custom arguments to create our entry
            message
          ]
        );
      },
    },
  }
    return cordovaPlugin;
});
