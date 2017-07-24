<template>
  <div>
  <navbar 
    :height="navBarHeight" 
    backitemsrc="local://back_button.png" 
    backitemtitle="返回" 
    :backgroundColor="backgroundColor" 
    :titleColor="titleColor"
    title="分享" 
    @naviBarLeftItemClick="naviBarLeftItemClick"></navbar>
    <panel title="Button" type="primary">
      <div style="margin-top: 12px">
        <button type="link" size="large" value="点击分享" @click.native="clicked"></button>
      </div>
    </panel>
  </div>
</template>

<script>
  var navigator = weex.requireModule('navigator')
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
        var params = {
          'url':  'share:',
          'title' : '云分享',
          'description' : '微信的平台化发展方向是否真的会让这个原本简洁的产品变得臃肿？在国际化发展方向上，微信面临的问题真的是文化差异壁垒吗？腾讯高级副总裁、微信产品负责人张小龙给出了自己的回复。',
          'webpageUrl' : 'http://www.baosight.com',
          'types' :['session','timeline'],
        }
        navigator.push(params,function(e){
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
