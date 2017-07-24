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
      var platform = vm.$getConfig().env.platform.toLowerCase()
      if (platform === 'ios') {
        var env = vm.$getConfig().env;
          var scale = env.scale;
          var deviceWidth = env.deviceWidth / scale;
          vm.navBarHeight = 64.0 * 750.0 / deviceWidth;
      }
    },
}