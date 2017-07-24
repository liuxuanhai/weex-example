<template>
  <div>
  <navbar 
    :height="navBarHeight" 
    backitemsrc="local://back_button.png" 
    backitemtitle="返回" 
    :backgroundColor="backgroundColor" 
    title="换颜色" 
    :titleColor="titleColor"
    @naviBarLeftItemClick="naviBarLeftItemClick"></navbar>
    <panel title="Button" type="primary">
      <div style="margin-top: 12px">
        <button type="link" size="large" value="点击切换颜色" @click.native="clicked"></button>
      </div>
    </panel>
  </div>
</template>

<script>
  var navigator = weex.requireModule('navigator')
  var cache = weex.requireModule('cache')
  var modal = weex.requireModule('modal')
  var setNavBarHeight = require('../include/tools.js').methods.setNavBarHeight;
  var styles = require('../include/styles.js').methods;

  module.exports = {
    data: function () {
      return {
        navBarHeight: 88,
        backgroundColor:"#1C6BC8",
        titleColor:"white"
      }
    },
    methods: {
      naviBarLeftItemClick: function (e) {
        var params = {
          animated: 'true'
        }
        navigator.pop(params, function () {
        // callback
        })
      },
      clicked: function() {
        cache.removeItem('guideDidShow', function(e){});
        cache.getItem('styles', function(e) {
            var result = e.result;
            var data = e.data;
            if (result === 'success') {
                if (data == 'red') {
                    cache.setItem('styles', "blue", function(e) {
                        modal.toast({
                            'message': '请重启APP使换肤生效',
                            'duration': 2
                        })
                    });
                }
                else {
                    cache.setItem('styles', "red", function(e) {
                        modal.toast({
                            'message': '请重启APP使换肤生效',
                            'duration': 2
                        })
                    });
                }
            }
            else {
              cache.setItem('styles', "red", function(e) {
                 modal.toast({
                  'message': '请重启APP使换肤生效',
                  'duration': 2
                })
              });
            } 
        });
      }
    },
    components: {
      panel: require('../include/panel.vue'),
      navbar: require('../include/bx-navbar.vue'),
      button: require('../include/button.vue')
    },
    created: function() {
      //iOS配置
      setNavBarHeight(this);
      styles.setCustomColor(this);

    }
  }
</script>
