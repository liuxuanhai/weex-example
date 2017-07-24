exports.methods = {
    setToRed: function(vm) {
        vm.backgroundColor = "red",
        vm.titleColor = "white"
    },
    setToBlue: function(vm) {
        vm.backgroundColor = "#1C6BC8",
        vm.titleColor = "white"
    },
    setCustomColor: function(vm) {
        var bundleUrl = vm.$getConfig().bundleUrl;
        var tools = require('./tools.js').methods;
        var style = tools.getParameterByName("styles",bundleUrl);
        if (style == 'red') {
          this.setToRed(vm);
        }
        else {
          this.setToBlue(vm);
        }
    },

    setTabCustomColor: function(vm) {
        var bundleUrl = vm.$getConfig().bundleUrl;
        var tools = require('./tools.js').methods;
        var style = tools.getParameterByName("styles",bundleUrl);
        if (style == 'red') {
        this.setTabRedColor(vm);
        }
        else {
          this.setTabBlueColor(vm);
        }
    },
    setTabBlueColor: function(vm) {
      vm.selectColor = "#238EF5";
      vm.unselectColor = "#6b6969";
      vm.tabItems[0].image = "local://tab1.png";
      vm.tabItems[0].selectedImage = "local://tab1_selected.png";

      vm.tabItems[1].image = "local://tab2.png";
      vm.tabItems[1].selectedImage = "local://tab2_selected.png";

      vm.tabItems[2].image = "local://tab3.png";
      vm.tabItems[2].selectedImage = "local://tab3_selected.png";
    },
    setTabRedColor: function(vm) {
      vm.selectColor = "red";
      vm.unselectColor = "#6b6969";
      vm.tabItems[0].image = 'http://gtms01.alicdn.com/tps/i1/TB1qw.hMpXXXXagXXXX9t7RGVXX-46-46.png';
      vm.tabItems[0].selectedImage = 'http://gtms04.alicdn.com/tps/i4/TB16jjPMpXXXXazXVXX9t7RGVXX-46-46.png';

      vm.tabItems[1].image = 'http://gtms03.alicdn.com/tps/i3/TB1LEn9MpXXXXaUXpXX9t7RGVXX-46-46.png';
      vm.tabItems[1].selectedImage = 'http://gtms02.alicdn.com/tps/i2/TB1qysbMpXXXXcnXXXX9t7RGVXX-46-46.png';

      vm.tabItems[2].image = 'http://gtms01.alicdn.com/tps/i1/TB1B0v5MpXXXXcvXpXX9t7RGVXX-46-46.png';
      vm.tabItems[2].selectedImage = 'http://gtms04.alicdn.com/tps/i4/TB1NxY5MpXXXXcrXpXX9t7RGVXX-46-46.png';
    }
}