<template>
    <div class="likes">
      <div class="rating">
        <div class="mark">
          <span>全部收藏</span>
          <div class="split"></div>
          <div class="spilt1"></div>
        </div>

        <ul style="margin-top: 15px;font-size:7px;color: #fff;text-align: center">
          暂无收藏
          <!--<li>-->
            <!--<a href="">-->
              <!--<img src="./zongxiong.jpg" alt="">-->
              <!--<span class="name">棕熊捕鱼</span>-->
              <!--<span class="time">2018-3-14</span>-->
            <!--</a>-->
          <!--</li>-->
          <!--<li>-->
            <!--<a href="">-->
              <!--<img src="./zongxiong.jpg" alt="">-->
              <!--<span class="name">棕熊捕鱼</span>-->
              <!--<span class="time">2018-3-14</span>-->
            <!--</a>-->
          <!--</li>-->
          <!--<li>-->
            <!--<a href="">-->
              <!--<img src="./zongxiong.jpg" alt="">-->
              <!--<span class="name">棕熊捕鱼</span>-->
              <!--<span class="time">2018-3-14</span>-->
            <!--</a>-->
          <!--</li>-->
        </ul>

        <!--<ul>-->
          <!--<li>-->
            <!--<a href="">-->
              <!--<img src="./zongxiong.jpg" alt="">-->
              <!--<span class="name">棕熊捕鱼</span>-->
              <!--<span class="time">2018-3-14</span>-->
            <!--</a>-->
          <!--</li>-->
          <!--<li>-->
            <!--<a href="">-->
              <!--<img src="./zongxiong.jpg" alt="">-->
              <!--<span class="name">棕熊捕鱼</span>-->
              <!--<span class="time">2018-3-14</span>-->
            <!--</a>-->
          <!--</li>-->
          <!--<li>-->
            <!--<a href="">-->
              <!--<img src="./zongxiong.jpg" alt="">-->
              <!--<span class="name">棕熊捕鱼</span>-->
              <!--<span class="time">2018-3-14</span>-->
            <!--</a>-->
          <!--</li>-->
        <!--</ul>-->
        <!--<ul>-->
          <!--<li>-->
            <!--<a href="">-->
              <!--<img src="./zongxiong.jpg" alt="">-->
              <!--<span class="name">棕熊捕鱼</span>-->
              <!--<span class="time">2018-3-14</span>-->
            <!--</a>-->
          <!--</li>-->
          <!--<li>-->
            <!--<a href="">-->
              <!--<img src="./zongxiong.jpg" alt="">-->
              <!--<span class="name">棕熊捕鱼</span>-->
              <!--<span class="time">2018-3-14</span>-->
            <!--</a>-->
          <!--</li>-->
          <!--<li>-->
            <!--<a href="">-->
              <!--<img src="./zongxiong.jpg" alt="">-->
              <!--<span class="name">棕熊捕鱼</span>-->
              <!--<span class="time">2018-3-14</span>-->
            <!--</a>-->
          <!--</li>-->
        <!--</ul>-->
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
  .likes
    width 60%
    height 65%
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
        margin-top 4%
        margin-bottom 4%
        width 90%
        height 24%
        margin-left 4.5%
        overflow hidden
        &>li
          width 30%
          height 50px
          float left
          background-color: #fff;
          margin-right 3%
          font-size 6px
          &>a
            font-size 6px
            &>img
              width 34%
              height 68%
              border-radius 5px
              float left
              margin 8px 8px
            .name
              float left
              margin-top 15px
              margin-left 5px
            .time
              float left
              margin-top 25px
              margin-left -26.25px
</style>
