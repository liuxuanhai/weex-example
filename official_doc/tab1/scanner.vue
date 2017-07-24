<template>
  <navpage
    dataRole="none"
    :height="navBarHeight"
    :title="title"
    :backgroundColor="backgroundColor" 
    :titleColor="titleColor"
    rightItemSrc="http://gtms02.alicdn.com/tps/i2/TB1ED7iMpXXXXXEXXXXWA_BHXXX-48-48.png"
    @naviBarRightItemClick="naviBarRightItemClick">
    <panel title="push a new page">
      <button type="primary" size="small" value="push" @click.native="push"></button>
    </panel>
    <panel title="pop to the last page">
      <button type="success" size="small" value="pop" @click.native="pop"></button>
    </panel>
  </navpage>
</template>

<script>
  var navigator = weex.requireModule('navigator')
  var tools = require('../include/tools.js').methods;
  var styles = require('../include/styles.js').methods;
  var getBaseURL = require('../include/base-url.js').getBaseURL
  module.exports = {
    data: function () {
      return {
        navBarHeight: 88,
        backgroundColor:"#1C6BC8",
        titleColor:"white",
        title: 'Navigator',
        dir: 'official_doc',
        baseURL: '',
        subPath: weex.config.env.platform === 'Web' ? 'vue-web/' : ''
      }
    },
    components: {
      panel: require('../include/panel.vue'),
      navpage: require('../include/navpage.vue'),
      button: require('../include/button.vue')
    },
    created: function() {
      tools.setNavBarHeight(this);
      styles.setCustomColor(this);
      this.baseURL = getBaseURL(this)
    },
    methods: {
      naviBarRightItemClick: function (e) {
        var params = {
          'url':  'scan:',
          'animated' : 'true',
        }
        navigator.push(params,function(){
        });
      },
      push: function () {
        var params = {
          'url':  this.baseURL + this.subPath + 'tab2/components/navigator.js?test=1',
          'animated' : 'true',
        }
        navigator.push(params, function () {});
      },
      pop: function () {
        var params = {
          'url':  this.baseURL + this.subPath + 'tab2/components/navigator.js?test=1',
          'animated' : 'true',
        }
        navigator.pop(params, function () {});
      },
    }
  }
</script>
