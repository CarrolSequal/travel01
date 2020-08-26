<template>
  <div>
    <div class="title">RECOMMEND</div>
    <ul>
      <router-link tag="li" class="item border-bottom" v-for="(item,index) of list" 
                   :key="index" :to="'/detail/' + item.id">
          <img class="item-img" :src='item.imgUrl' />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">Show Detials</button>
        </div>]
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  },
  data () {
    return {
    //   recommendList: [{
    //   id: '0001',
    //   imgUrl: 'http://img1.qunarzz.com/sight/p0/1503/b4/b4834f16bc8f8091.water.jpg_200x200_be5f7395.jpg',
    //   title: '珠海长隆海洋王国',
    //   desc: '广东省珠海市横琴新区富祥湾'
    // },{
    //   id: '0002',
    //   imgUrl: 'http://img1.qunarzz.com/sight/p0/1503/b4/b4834f16bc8f8091.water.jpg_200x200_be5f7395.jpg',
    //   title: '珠海长隆海洋王国',
    //   desc: '广东省珠海市横琴新区富祥湾'
    // },{
    //   id: '0003',
    //   imgUrl: 'http://img1.qunarzz.com/sight/p0/1503/b4/b4834f16bc8f8091.water.jpg_200x200_be5f7395.jpg',
    //   title: '珠海长隆海洋王国',
    //   desc: '广东省珠海市横琴新区富祥湾'
    // }]
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
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #cccccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding:0 .2rem
        border-radius: .06rem
        color #fff

</style>
