<template>
  <div>
    <list class="list">
      <cell
        v-for="(v,i) in rows"
        :index="i"
        class="row">
        <div :class="[lineStyle(i)]" @click="toggleRowActive(i)">
          <text class="item-title">row {{v.id}}</text>
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
  .item-active {
     background-color: #00BDFF;
         justify-content: center;
    border-bottom-width: 2px;
    height: 100px;
    padding:20px;
   }
  .item-title {
  }
</style>

<script>  
  module.exports = {
    methods: {
          toggleRowActive(index) {
             this.activeLiIndex = index;

          },
          lineStyle(index){
                if (this.activeLiIndex===index){
                    return 'item-active'
                }else {
                    return 'item'
                }
            }
    },
    data: function () {
      return {
        activeLiIndex: null,
        rows:[
          {id:55},
          {id: 2},
          {id: 3},
          {id: 4},
          {id: 5},
          {id: 6},
          {id: 7},
          {id: 8},
          {id: 9},
          {id: 10}
        ]
      }
    }
  }
</script>
