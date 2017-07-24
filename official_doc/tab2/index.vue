<template>

  <example-list :items="items" dir="official_doc"></example-list>

</template>

<script>
  var styles = require('../include/styles.js').methods;
  var navigator = weex.requireModule('navigator')
  var getBaseURL = require('../include/base-url.js').getBaseURL
  module.exports = {
    data: function () {
      var root = typeof window === 'object' ? 'vue-web/tab2/' : 'tab2/'

      return {
        navBarHeight: 88,
        title: 'Cloud App',
        backgroundColor:"#1C6BC8",
        titleColor:"white",
        items: [ 
          // common
          {name: root + 'hello', title: 'Hello World'},
          {name: root + 'style/index', title: 'Common Style'},
          {name: root + 'animation', title: 'Animation'},

          // component
          {name: root + 'components/text', title: 'Text'},
          {name: root + 'iconfont', title: 'iconfont'},
          {name: root + 'components/image', title: 'Image'},
          {name: root + 'components/input', title: 'Input'},
          {name: root + 'components/scroller', title: 'Scroller'},
          {name: root + 'components/list', title: 'List'},
          {name: root + 'components/waterfall', title: 'Waterfall'},
          {name: root + 'components/slider', title: 'Slider'},
          {name: root + 'components/a', title: 'A'},
          {name: root + 'components/video', title: 'Video'},
          {name: root + 'components/countdown', title: 'Countdown'},
          {name: root + 'components/marquee', title: 'Marquee'},
          {name: root + 'components/web', title: 'Web'},
          {name: root + 'components/navigator', title: 'Navigator'},
          {name: root + 'components/tabbar', title: 'Tabbar'},

          // module
          {name: root + 'modules/instance-api', title: 'Instance API'},
          {name: root + 'modules/modal', title: 'Modal'},
          {name: root + 'modules/stream', title: 'Stream'},
          {name: root + 'modules/storage',title:'Storage'},
          // {name: 'module/clipboard', title: 'Clipboard'}, // 0.8 , developing

          // showcase
          {name: root + 'showcase/boxshadow', title: 'boxshadow'},
          {name: root + 'showcase/progress', title: 'Progress Bar'},
          {name: root + 'showcase/itemlist', title: 'List (Advanced)'},
          {name: root + 'showcase/calculator', title: 'Calculator'},
          {name: root + 'showcase/compositing', title: 'Compositing'},
          // {name: root + 'showcase/minesweeper', title: 'Minesweeper'},
          // {name: root + 'showcase/ui', title: 'UI Gallery'},
          // {name: root + 'showcase/dropdown/dropdown-demo', title: 'Dropdown'}

          // market
          {name: root + 'market/gcanvas', title: 'Gcanvas'}
        ]
      }
    },
    components: {
      navpage: require('../include/navpage.vue'),
      exampleList: require('../include/example-list.vue')
    },
    created: function() {
      styles.setCustomColor(this)
      //let root = typeof window === 'object' ? 'vue-web/tab2' : 'tab2'
      // this.baseURL = getBaseURL(this)
      // let platform = this.$getConfig().env.platform.toLowerCase()
      // if (platform === 'ios') {
      //   this.items.push({name: root + 'showcase/compositing', title: 'Compositing'})
      // }
    }
  }
</script>
