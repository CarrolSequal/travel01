<template>
  <div>
    <div class="title">WEEKEND TO GO</div>
    <ul>
      <li class="item border-bottom" v-for="(item,index) of reommendList" :key="index">
        <div class="item-img-wrapper">
          <img class="item-img" :src='item.imgUrl' />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      reommendList: [{
      id: '0001',
      imgUrl: 'http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg',
      title: '珠海长隆海洋王国',
      desc: '广东省珠海市横琴新区富祥湾'
    },{
      id: '0002',
      imgUrl: 'http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg',
      title: '珠海长隆海洋王国',
      desc: '广东省珠海市横琴新区富祥湾'
    },{
      id: '0003',
      imgUrl: 'http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg',
      title: '珠海长隆海洋王国',
      desc: '广东省珠海市横琴新区富祥湾'
    }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~style/varibles.styl'
  @import '~style/mixins.styl'
  .title
    margin-top .2rem
    height: .8rem
    line-height .8rem
    background #eee
    text-indent .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 33.9% 
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #cccccc
      ellipsis()

</style>
