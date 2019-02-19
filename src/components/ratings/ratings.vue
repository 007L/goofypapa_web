<template>
    <div class="ratings">
      <div class="rating">
        <div class="mark">
          <span>全部评论/留言</span>
          <div class="split"></div>
          <div class="spilt1"></div>
        </div>
        <ul>
          <li style="margin-top: 15px;font-size:7px;color: #fff;text-align: center">
            暂无评论
            <!--<img src="./2.jpg" alt="">-->
            <!--<span class="span1">龙猫</span>-->
            <!--<span class="span2">回复我:你怎么知道的？</span>-->
            <!--<i></i>-->
            <!--<div class="input">-->

                <!--&nbsp;&nbsp;&nbsp;我的评论:豹猫是很凶残的动物？-->
            <!--</div>-->
            <!--<div class="splita">-->
              <!--<div class="split2"></div>-->
              <!--<div class="spilt3"></div>-->
            <!--</div>-->
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
  .ratings
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
            top 52%
            left 8%
          &>i
            display block
            width 0px
            height 0px
            border-width: 2.48px;
            border-style: solid;
            border-color:  rgba(46, 149, 219,.1)  rgba(46, 149, 219,.1) #70B7E7  rgba(46, 149, 219,.1);
            position absolute
            top 80%
            left 11%
          .input
            width 87%
            height 30px
            background-color: rgba(244,244,244,.24);
            position absolute
            top 92%
            left 8%
            line-height 30px
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
