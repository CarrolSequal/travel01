<template>
  <div class="banner">
    <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_r_800x800_087730c7.jpg" />
    <div class="banner-info">
      <div class="banner-title">
        北京市朝阳区东四环小武基北路
        </div>
      <div class="banner-number">
        <span class="iconfont">&#xe632;</span>
        39
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBanner'
}
</script>

<style lang='stylus' scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      .banner-title
        flex: 1
        font-size: .32rem
        padding:0 .2rem
        .banner-number
          padding: 0 .4rem
          height: .4rem
          line-height: .4rem 
          border-radius: .2rem
          background: rgba(0, 0, 0, .8)
</style>
