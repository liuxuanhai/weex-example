<template>
  <navpage
   data-role="navbar" 
   :height="navBarHeight"
   :background-color="backgroundColor" 
   :title="title"
   :title-color="titleColor">
     <example-list :items="items" :root="root"></example-list>
  </navpage>
</template>

<script>
  var tools = require('../include/tools.js').methods;
  var styles = require('../include/styles.js').methods;
  module.exports = {
    data: function () {
      var dir = typeof window === 'object' ? 'vue-web/tab1/' : 'tab1/'
        return {
            root: 'official_doc',
            title: "模板",
            navBarHeight: 88,
            backgroundColor:"#1C6BC8",
            titleColor:"white",
            items: [
                {name: dir + 'home_page', title: '1800首页'},
                {name: dir + 'to-do-list', title: '1800列表'},
                {name: dir + 'to-do-detail', title: '详情页面'},
                {name: dir + 'scanner', title: '扫一扫'},
                {name: dir + 'share', title: '分享'},
                {name: dir + 'switch-styles', title: '切换皮肤'},
                {name: dir + 'style-rule', title: '1800UI规范'},
            ]
        }
    },
    components: {
      navpage: require('../include/navpage.vue'),
      exampleList: require('../include/example-list.vue')
    },
    created: function () {
      //iOS配置
      styles.setCustomColor(this);
      tools.setNavBarHeight(this);
    }
  }
</script>