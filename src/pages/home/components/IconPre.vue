<template>
    <div class="icons">
      <swiper>
        <swiper-slide>
          <div class="icon" v-for="item of iconList" :key="item.id">
            <div class="icon-img">
              <img class='icon-img-content' :src='item.imgUrl' />              
            </div>
            <p class="icon-desc">{{item.desc}}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
</template>

 
<script>
export default {
  name: 'HomeIcons',
    data () {
      return {
        iconList: [{
          id:'0001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: 'Sight'
        },{
          id:'0002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          desc: 'Zhuhai'
        },{
          id:'0003',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/27/dac2bcf9added702.png',
          desc: 'Bridge'
        },{
          id:'0004',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/e6ef266d5a6fd6c37f2d8b6e096b2ca8.png',
          desc: 'ATrip'
        },{
          id:'0005',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/bda58ffc3016edad84e656e8a94b0321.png',
          desc: 'Creature'
        },{
          id:'0006',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/e40f084b7be74a288e77be40b2b38720.png',
          desc: 'Finance'
        },{
          id:'0007',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png',
          desc: 'Water'
        },{
          id:'0008',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
          desc: 'Island'
        },{
          id:'0009',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
          desc: 'Idfaland'
        }]
      }
    }
}
</script>
 
<style lang="stylus" scoped>
  @import '~style/varibles.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 25%
    .icon
      position: relative
      overflow: hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: 0
        left: 0
        rigth: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem
        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align: center
        color: $darkTextColor
</style>
