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
