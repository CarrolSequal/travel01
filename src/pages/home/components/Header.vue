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
    <router-link to='/city'>
      <div class="header-right">
        <!-- {{this.$store.state.city}} -->
        {{this.doubleCity}}
        <span class="iconfont arrowIcon">&#xe6aa;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']),
    ...mapGetters(['doubleCity'])
  }
  // props: {
  //   city: String
  // }
}
</script>

<style lang="stylus" scoped>
  // @import '../../../assets/style/varibles.styl'
  // @import '~@/assets/style/varibles.styl'
  @import '~style/varibles.styl'
  .header
    display: flex
    line-height: $headerHeight
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
      min-width: 1.04rem
      padding: 0 .1rem
      float: right
      text-align: center
      color: #fff
      .arrowIcon
        margin-left: -.04rem
        font-size: .25rem
</style>
