 <template>
  <!-- 1.use of iconfront
       2.use of Stylus for repeated style
       3.path alias

   -->
  <div class="header">
    <div class="header-left">
      <span class="iconfont backIcon">&#xe624;</span>  
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span> 
      city/sight/theme
    </div>
    <div class="header-right">
      city
      <span class="iconfont arrowIcon">&#xe6aa;</span> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  // @import '../../../assets/style/varibles.styl'
  // @import '~@/assets/style/varibles.styl'
  @import '~style/varibles.styl'
  .header
    display: flex
    line-height: .86rem
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      padding-left:.1rem
      float: left
      .backIcon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      // margin-left: .1rem
      padding-left:.2rem
      background: #ffffff
      border-radius: .1rem
      color: #ccc
    .header-right
      width: 1.24rem
      float: right
      text-align: center
      .arrowIcon
        margin-left: -.04rem
        font-size: .25rem
</style>
