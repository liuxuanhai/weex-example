<template>
  <div>
<list>
<cell v-for="(item,index) in listData" v-bind:style="{'background-color':(item.selected?'#dddddd':'#ffffff')}" @click="onSelected(item,index)">
<div>
<text>{{item.text}}</text>
</div>
</cell>
</list>
  </div>
</template>

<style scoped>
  .list {
    height:850px
  }
  .count {
    font-size: 48px;
    margin:10px;
  }
  .indicator {
    height: 40px;
    width: 40px;
    color:#45b5f0;
  }
  .row {
    width: 750px;
  }
  .item {
    justify-content: center;
    border-bottom-width: 2px;
    border-bottom-color: #c0c0c0;
    height: 100px;
    padding:20px;
  }
  .item:active {
     background-color: #00BDFF;
   }
  .item-title {
  }
</style>

<script>  
const modal = weex.requireModule('modal')
  module.exports = {
    methods: {
          onSelected(item,index) {
                                modal.toast({
          message: 'onclick'+index,
          duration: 0.8
        })
         if (item.selected) {
           this.listData[index].selected = false;
         } else {
           this.listData[index].selected = true;
         }

          }
    },
    data: function () {
      return {
        activeLiIndex: null,
        index:0,
        appearMin:1,
        appearMax:1,
        appearIds:[],
    listData: [
                {'text': '开发者头条', selected: false},
                {'text': '腾讯新闻', selected: false},
                {'text': '搜狐娱乐', selected: false},
                {'text': '优酷视频', selected: false}
            ]
      }
    }
  }
</script>
