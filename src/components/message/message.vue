<template>
    <div class="message">
      <div class="rating">
        <div class="mark">
          <span>通知</span>
          <div class="split"></div>
          <div class="spilt1"></div>
        </div>
        <ul>
          <li>
            <img src="./2.jpg" alt="">
            <span class="span1">公告</span>
            <span class="span2">2018-03-14</span>

            <div class="input">
              &nbsp;&nbsp;&nbsp;为了响应国家法律法规，请大家没要驾驶自己的机动车前往以免酒后驾驶二天要大家克送饭影响大家的正常工作，可以驾驶单车、马车、牛车前往，也可以步行，反对打出租车这种奢侈浪费的表现。
            </div>
            <div class="splita">
              <div class="split2"></div>
              <div class="spilt3"></div>
            </div>
          </li>
        </ul>

      </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {}
        }
    }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .message
    width 60%
    height 594px
    background-color: rgba(0,80,161,.3);
    position relative
    margin 3% 20%
    .rating
      width 100%
      position absolute
      .mark
        position relative
        width 100%
        height 20%
        &>span
          display block
          margin 1% 2%
          color #FFFFFF
          font-size 7px
          font-weight 600
        .split
          width 100%
          height 1px
          background-color: #2e95db;
        .spilt1
          width 100%
          height 1px
          background-color: rgb(93,177,233);
      &>ul
        position relative
        height 75px
        &>li
          position relative
          font-size 6px
          &>img
            border-radius 50%
            width 4.5%
            height 3%
            margin 2% 2%
          .span1
            position absolute
            top 18%
            left 8%
            color #FFFFFF
          .span2
            color #FFFFFF
            position absolute
            top 18%
            left 87%
          .input
            width 87%
            height 60px
            position absolute
            top 67%
            left 8%
            color #FFFFFF
          .splita
            width 100%
            height 3px
            position absolute
            top 180%
            .split2
              width 100%
              height 1px
              background-color: #2e95db;
              margin-bottom 1px
            .spilt3
              width 100%
              height 1px
              background-color: rgb(93,177,233);
</style>
