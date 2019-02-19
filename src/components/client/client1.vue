<template>
  <div class="client">

    <header>
      <img class="logo1" src="./login_cloud_top.png" alt="">
      <img class="logo2" src="./login_cloud_top.png" alt="">
      <span href="">
        <div @click="uploadAvatar" class="avatar">
          <img src="./2.jpg" alt="">
        </div>
      </span>
      <span class="username" >{{username}}</span>
      <div class="split"></div>
      <div class="spilt1"></div>
      <div class="nav">
        <div class="find_nav">
          <div class="find_nav_left">
            <div class="find_nav_list">
              <ul>
                <Tabs value="name1">
                  <TabPane label="标签一" name="name1">
                    <div style="width: 10%;height: 300px;background: #000">
                      评论
                    </div>
                  </TabPane>
                  <TabPane label="标签二" name="name2">收藏</TabPane>
                  <TabPane label="标签三" name="name3">通知</TabPane>
                </Tabs>
                <!--<li class="find_nav_cur"><router-link to="/ratings">评论</router-link></li>-->
                <!--<li><router-link to="/likes">收藏</router-link></li>-->
                <!--<li><router-link to="/message">通知</router-link></li>-->
                <!--<li class="sideline" ></li>-->
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!--<router-view/>-->
    <footer>
      <!--<img src="./bj_pic_cloud_bot.png" alt="">-->
    </footer>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import ratings from '../ratings/ratings.vue'
  import {getStore} from '../../common/utils/storageUtil'
    export default {
        data () {
            return {
              username:getStore('user')
            }
        },

      components: {
        ratings
      },
      mounted(){
        $(function(){
          $(".find_nav_list").css("left",sessionStorage.left+"px");
          $(".find_nav_list li").each(function(){
            if($(this).find("a").text()==sessionStorage.pagecount){
              $(".sideline").css({left:$(this).position().left});
              $(".sideline").css({width:$(this).outerWidth()});
              console.log($(this).outerWidth())
              $(this).addClass("find_nav_cur").siblings().removeClass("find_nav_cur");
              navName(sessionStorage.pagecount);
              return false
            }
            else{
              $(".sideline").css({left:0});
              $(".find_nav_list li").eq(0).addClass("find_nav_cur").siblings().removeClass("find_nav_cur");
            }
          });
          var nav_w=$(".find_nav_list li").first().width();
          $(".sideline").width(nav_w);
          $(".find_nav_list li").on('click', function(){
            nav_w=$(this).width();
            $(".sideline").stop(true);
            $(".sideline").animate({left:$(this).position().left},300);
            $(".sideline").animate({width:nav_w*2});
            console.log(nav_w*2)
            $(this).addClass("find_nav_cur").siblings().removeClass("find_nav_cur");
            var fn_w = ($(".find_nav").width() - nav_w) / 2;
            var fnl_l;
            var fnl_x = parseInt($(this).position().left);
            if (fnl_x <= fn_w) {
              fnl_l = 0;
            } else if (fn_w - fnl_x <= flb_w - fl_w) {
              fnl_l = flb_w - fl_w;
            } else {
              fnl_l = fn_w - fnl_x;
            }
            $(".find_nav_list").animate({
              "left" : fnl_l
            }, 300);
            sessionStorage.left=fnl_l;
            var c_nav=$(this).find("a").text();
            navName(c_nav);
          });
          var fl_w=$(".find_nav_list").width();
          var flb_w=$(".find_nav_left").width();
          $(".find_nav_list").on('touchstart', function (e) {
            var touch1 = e.originalEvent.targetTouches[0];
            x1 = touch1.pageX;
            y1 = touch1.pageY;
            ty_left = parseInt($(this).css("left"));
          });
          $(".find_nav_list").on('touchmove', function (e) {
            var touch2 = e.originalEvent.targetTouches[0];
            var x2 = touch2.pageX;
            var y2 = touch2.pageY;
            if(ty_left + x2 - x1>=0){
              $(this).css("left", 0);
            }else if(ty_left + x2 - x1<=flb_w-fl_w){
              $(this).css("left", flb_w-fl_w);
            }else{
              $(this).css("left", ty_left + x2 - x1);
            }
            if(Math.abs(y2-y1)>0){
              e.preventDefault();
            }
          });
        });
        function navName(c_nav) {
          switch (c_nav) {
            case "评论":
              sessionStorage.pagecount = "评论";
              break;
            case "收藏":
              sessionStorage.pagecount = "收藏";
              break;
            case "通知":
              sessionStorage.pagecount = "通知";
              break;

          }
        }
      },

      methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        },

        uploadAvatar(){
          $.ajax({
            type: "post",
            url: "http://www.dadpat.com/user/saveHeadImg.do",
            dataType: "jsonp",
            async: true,
            success:(data)=> {
              if(data.success){
                console.log('请更新头像')
              }
            }
          })
        }

      },

      computed:{
        ...mapState(['user'])
      }
    }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .client
    width 100%
    height 1132px
    background-color: #66c9ff;
    position relative
    &>header
      width 100%
      height 8%
      background-color: rgba(0,80,161,.3);
      position relative
      &>img
        width 12%
        height 35%
      .logo1
        position absolute
        left 20%
        top 15%
      .logo2
        position absolute
        left 68%
        top 35%
      &>span
        .avatar
          width 6%
          height 51%
          position absolute
          top 15%
          left 47%
          border-radius 50%
          &>img
            box-sizing border-box
            border solid 2px #FFFFFF
            border-radius 50%
            width 85%
            height 80%
      .username
        width 100%
        position absolute
        top 60%
        text-align center
        color #fff
        font-size 1vw
      .split
        position absolute
        top 77%
        left 20%
        width 60%
        height 1%
        background-color: #2e95db;
      .spilt1
        position absolute
        top 78%
        left 20%
        width 60%
        height 1%
        background-color: rgb(93,177,233);
      .nav
        width: 33%;
        position absolute
        top 84%
        left 43%
        z-index: 999;
        .find_nav
          width: 100%;
          height: 45px;
          display: box;

        .find_nav_left
          height: 15.99px;
          position: relative;
          overflow: hidden;
          -moz-box-flex: 1;
          -webkit-box-flex: 1;
          box-flex: 1;

        .find_nav_list
          position: absolute;
          left: -10px;

        .find_nav_list ul
          position: relative;
          white-space: nowrap;
          font-size: 0px;

        .find_nav_list ul Tabs TabPane
          display: inline-block;
          padding: 0 1.1vw;

        .find_nav_list ul li a
          display: block;
          width: 100%;
          height: 100%;
          line-height: 8.49px;
          font-size: 8px;
          text-align: center;
          color: #fff;

        .find_nav_cur a
          color: #fff !important;

        .sideline
          display: block;
          position: absolute;
          border: 0;
          height: 1px;
          background-color: #fff;
          left: 0;
          top: 10px;
          pointer-events: none;



        .ratings
          width 100px
          height 50px
          border-radius 10px
          background-color: #fff;
</style>
