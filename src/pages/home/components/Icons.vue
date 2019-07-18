<template>
    <div class="icons">
      <div class="icon">
        <div class="icon-img">
          <img class='icon-img-content' src='http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png' />
          <p class="icon-desc">Hit</p>
        </div>
      </div>
      <div class="icon">
        <div class="icon-img">
          <img class='icon-img-content' src='http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png' />
          <p class="icon-desc">Hit</p>
        </div>
      </div>
      <div class="icon">
        <div class="icon-img">
          <img class='icon-img-content' src='http://img1.qunarzz.com/piao/fusion/1803/27/dac2bcf9added702.png' />
          <p class="icon-desc">Hit</p>
        </div>
      </div>
      <div class="icon">
        <div class="icon-img">
          <img class='icon-img-content' src='http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/e6ef266d5a6fd6c37f2d8b6e096b2ca8.png' />
          <p class="icon-desc">Hit</p>
        </div>
      </div>
      <div class="icon">
        <div class="icon-img">
          <img class='icon-img-content' src='http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/bda58ffc3016edad84e656e8a94b0321.png' />
          <p class="icon-desc">Hit</p>
        </div>
      </div>
      <div class="icon">
        <div class="icon-img">
          <img class='icon-img-content' src='http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/e40f084b7be74a288e77be40b2b38720.png' />
          <p class="icon-desc">Hit</p>
        </div>
      </div>
      <div class="icon">
        <div class="icon-img">
          <img class='icon-img-content' src='http://img1.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png' />
          <p class="icon-desc">Hit</p>
        </div>
      </div>
      <div class="icon">
        <div class="icon-img">
          <img class='icon-img-content' src='http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png' />
          <p class="icon-desc">Hit</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HomeIcons'
}
</script>

<style lang="stylus" scoped>
  @import '~style/varibles.styl'
  .icons
    overflow: hidden
    height: 0
    padding-bottom: 50%
    // background: green
    .icon
      position: relative
      overflow: hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      // background: pink
      .icon-img
        position: absolute
        top: 0
        left: 0
        rigth: 0
        bottom: .44rem
        box-sizing: background-origin 
        padding: .1rem
        // background: aqua
        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%
      .icon-desc
        position: absolute
        left: 0
        right: 0
        height: .44rem
        line-height: .44rem
        text-align: center
        color: $darkTextColor
</style>
