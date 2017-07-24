<template>
    <div 
        class="container" 
        :style="{ height: height, backgroundColor: backgroundColor }" 
        :data-role="dataRole">
        <text 
            class="left-text" 
            :style="{ color:leftItemColor }" 
            naviItemPosition="left" 
            v-if="!leftitemsrc" 
            :value="leftItemTitle"
            v-on:click="onclickleftitem">{{leftitemtitle}}</text>
        <image 
            class="left-image" 
            naviItemPosition="left" 
            :src="leftItemSrc"
            v-if="leftitemsrc" 
            v-on:click="onclickleftitem"></image>
        <text 
            class="back-text" 
            :style="{ color:leftItemColor }"  
            naviItemPosition="back" 
            :value="backitemtitle"
            v-on:click="onclickleftitem">{{backitemtitle}}</text>
        <image 
            class="back-image" 
            naviItemPosition="back" 
            :src="backitemsrc" 
            v-if="backitemsrc" 
            v-on:click="onclickleftitem"></image>
        <text 
            class="center-text" 
            :style="{ color: titleColor }"
            :value="title"
            naviItemPosition="center">{{title}}</text>
      <div class="row" v-for="button in rightbuttons">
        <text 
            class="right-text" 
            :style="{ color: rightItemColor }"
            naviItemPosition="rights" 
            v-if="!button.rightItemSrc" 
            :value="button.rightItemTitle"
            v-on:click="onclickrightitem">{{button.rightItemTitle}}</text>
        <image class="right-image" 
            naviItemPosition="rights"  
            :src="button.rightItemSrc" 
            v-if="!button.rightItemSrc" 
            v-on:click="onclickrightitem"></image>
      </div>
    </div>
</template>

<style>
    .container {
        flex-direction: row; 
        position: fixed; 
        top: 0; 
        left: 0; 
        right: 0; 
        width: 750;
    }
    .row{     
        left:590;
        flex-direction: row;
        justify-content: flex-end; 
        align-items:flex-end
    }
    .right-text {
        position: absolute; 
        bottom: 28; 
        right: 32; 
        text-align: right;
        font-size: 32; 
        font-family: 'Open Sans', sans-serif;
    }
    .left-text {
        position: absolute; 
        bottom: 28; 
        left :32; 
        text-align :left;  
        font-size: 32; 
        font-family: 'Open Sans', sans-serif;
    }    
    .back-text {
        position: absolute; 
        bottom: 26; 
        left :72; 
        text-align :left;  
        font-size: 32; 
        font-family: 'Open Sans', sans-serif;
    }
    .center-text {
        position: absolute; 
        bottom: 25; 
        left: 172; 
        right: 172;
        text-align: center; 
        font-size: 36; 
        font-weight: bold;
    }
    .left-image {
        position: absolute; 
        bottom: 20; 
        left: 28; 
        width: 50; 
        height: 50;
    }
    .back-image {
        position: absolute; 
        bottom: 20; 
        left: 28; 
        width: 50; 
        height: 50;
    }
    .right-image {
        margin-bottom: 20; 
        margin-right: 26; 
        width: 50; 
        height: 50;
    }
</style>

<script>
    module.exports = {
        props: {
          dataRole: { default: 'navbar' },

          //导航条背景色
          backgroundColor: { default: 'black' },

          //导航条高度
          height: { default: 88 },

          //导航条标题 
          title: { default: '' },

          //导航条标题颜色
          titleColor:  { default: 'white' },

          //右侧按钮图片
          rightItemSrc: { default: '' },

          //右侧按钮标题
          rightItemTitle: { default: '' },

          //右侧按钮标题颜色
          rightItemColor: { default: 'white' },

          //左侧按钮图片
          leftitemsrc: { default: '' },

          //左侧按钮标题
          leftitemtitle: { default: '' },

          //返回按钮图片
          backitemsrc: { default: '' },

          //返回按钮标题
          backitemtitle: { default: '' },

          //左侧按钮颜色
          leftItemColor: { default: 'white' },
          
          rightbuttons:{ default: []}
        },
        methods: {
          onclickrightitem: function (e) {
            this.$emit('naviBarRightItemClick', {index:this.$index});
          },
          onclickleftitem: function (e) {
            this.$emit('naviBarLeftItemClick', {});
          }
        }
    }
</script>
