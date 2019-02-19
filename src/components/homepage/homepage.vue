<template>
    <div class="homepage">

      <div id="positions" class="positions">
        <div id="y1" class="bg y1"></div>
        <div id="title" class="bg title" :style="'background-image: url(./static/img/' + $t('homepage.title') +   ');background-repeat:'+ $t('homepage.repeat') +';background-size:'+$t('homepage.size')+';height:' +$t('homepage.titleheight')"></div>
        <div id="benbb" class="bg benbb"></div>
        <div id="qiqiu" class="bg qiqiu"></div>
        <div id="y2" class="bg y2"></div>
        <div id="y3" class="bg y3"></div>
        <div id="gu" class="bg gu"></div>
        <div id="xunzhang" class="bg xunzhang"></div>
        <div id="y4" class="bg y4"></div>
      </div>

      <div class="brandculture" style="font-family:微软雅黑">
        <p  :style="$t('homepage.font') +'-spacing:1.2vw;text-indent:'+ $t('homepage.text_indent')">{{$t('homepage.Brand_culture')}}</p>
        <div class="inculture">
          <div class="cycle">
            <div class="circle c1">
              <span :style="'left:'+ $t('homepage.position_left')">{{$t('homepage.original')}}</span>
            </div>
            <span class="description">{{$t('homepage.original_juzi')}}</span>
          </div>

          <div class="cycle">
            <div class="circle c2">
              <span :style="'left:'+ $t('homepage.position_left_1')">{{$t('homepage.Research_and_development')}}</span>
            </div>
            <span class="description">{{$t('homepage.develop_juzi')}}</span>
          </div>



          <div class="cycle">
            <div class="circle c3">
              <span :style="'left:'+ $t('homepage.position_left')">{{$t('homepage.cheerful')}}</span>
            </div>
            <span class="description">{{$t('homepage.cheerful_juzi')}}</span>
          </div>
        </div>
      </div>


      <Carousel
        v-model="value3"
        :autoplay="setting.autoplay"
        :autoplay-speed="setting.autoplaySpeed"
        :dots="setting.dots"
        :radius-dot="setting.radiusDot"
        :trigger="setting.trigger"
        :arrow="setting.arrow"
        @on-change="closevideo">
        <CarouselItem>
          <div class="demo-carousel">
            <div class="video">
              <div class="maskvideo">
                <img src="./play.png" style="cursor: pointer" alt="" @click="autoplay">
              </div>
              <video class="videoin" @click="stopvideo" id="videoin" src="./gu1moive.mp4"  poster="./WechatIMG3.jpeg" preload></video>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">
            <div class="video1">
              <div class="maskvideo1">
                <img src="./play.png" style="cursor: pointer" alt="" @click="autoplay1">
              </div>
              <video class="videoin videoin1" @click="stopvideo1" id="videoina" src="./yunnanv3_batch.mp4"  poster="./WechatIMG3.jpeg" preload></video>
            </div>
          </div>
        </CarouselItem>
      </Carousel>


      <div class="goods">

        <div class="ingoods">
          <div class="img">
            <div class="mask">
              <router-link to="/babacaicai" style="font-family:微软雅黑">
                {{$t('homepage.Papa_guess')}}
              </router-link>
              <el-button class="btn" type="primary" plain><router-link to="/babacaicai" style="color: #fff">{{$t('homepage.Check_details')}}</router-link></el-button>
            </div>
            <img src="./guanwangshouye3.jpg" alt="">
          </div>

          <div class="img">
            <div class="mask">
              <router-link to="/good_huiben" style="font-family:微软雅黑">
                {{$t('homepage.Picture_books')}}
              </router-link>
              <el-button class="btn" type="primary" plain><router-link to="/good_huiben" style="color: #fff">{{$t('homepage.Check_details')}} </router-link></el-button>
            </div>
            <img src="./guanwangshouye7.jpg" alt="">
          </div>

          <div class="img">
            <div class="mask">
              <router-link to="/goodwanjugu"  style="font-family:微软雅黑">
                {{$t('homepage.dadpat')}}
              </router-link>
              <el-button class="btn" type="primary" plain>
                <router-link to="/goodwanjugu" style="color: #fff">{{$t('homepage.Check_details')}}</router-link>
              </el-button>

              <!--<router-link to="/goodwanjugu" style="color: #fff">-->
                <!--<el-button class="btn" type="primary" plain>-->
                  <!--{{$t('homepage.Check_details')}}-->
                <!--</el-button>-->
              <!--</router-link>-->

            </div>
            <img src="./guanwangshouye5.jpg" alt="">
          </div>

        </div>



      </div>

      <div class="footer" style="font-size: 6px;text-align: center;color: #fff;margin-top: 10px;margin-bottom: 20px">
        {{$t('homepage.jianjie')}}
      </div>

      <goTop/>
    </div>
</template>
<script>
  import {mapState} from 'vuex'
    export default {
      data () {
          return {
            value3: 0,
            setting: {
              autoplay: false,
              autoplaySpeed: 2000,
              dots: 'none',
              radiusDot: false,
              trigger: 'click',
              arrow: 'hover'
            }
          }
      },

      mounted(){

        this.$store.dispatch('requestanimal')
//        document.querySelector('.videoin').src = './banhaibao.mp4'
            $('#y1').css( {transform : "translateY(300px)"})
            $('#title').css( {transform : "translateY(500px)"})
            $('#benbb').css( {transform : "translateY(300px)"})
            $('#qiqiu').css( {transform : "translateY(300px)"})
            $('#y2').css( {transform : "translateY(300px)"})
            $('#y3').css( {transform : "translateY(300px)"})
            $('#xunzhang').css( {transform : "translateY(300px)"})
            $('#gu').css( {transform : "translateY(300px)"})
            $('#y4').css( {transform : "translateY(300px)"})

        setTimeout(function () {
          $('.y1').css({transition: '1s'})
          $('.benbb').css({transition: '1s'})
          $('.qiqiu').css({transition: '1.5s'})
          $('.y2').css({transition: '2s'})
          $('.y3').css({transition: '2.5s'})
          $('.xunzhang').css({transition: '3s'})
          $('.gu').css({transition: '3.5s'})
          $('.y4').css({transition: '4s'})
          $('#y1').fadeIn(500).css( { transform : "translateY(0px)"})
          $('#benbb').fadeIn(1000).css( {transform : "translateY(0px)"})
          $('#qiqiu').fadeIn(1500).css( {transform : "translateY(0px)"})
          $('#y2').fadeIn(2000).css( {transform : "translateY(0px)"})
          $('#y3').fadeIn(3000).css( {transform : "translateY(0px)"})
          $('#xunzhang').fadeIn(3500).css( {transform : "translateY(0px)"})
          $('#gu').fadeIn(4000).css( {transform : "translateY(0px)"})
          $('#y4').fadeIn(4500).css( {transform : "translateY(0px)"})
          setTimeout(function () {
            $('.title').css({transition: '1s'})
            $('#title').fadeIn(1500).css( {transform : "translateY(0px)"})
          },1000)
        },1000)

        window.onscroll = function () {

          $('.bg').css({transition: 'none'})
          var top = document.body.scrollTop + document.documentElement.scrollTop;
          document.getElementById('title').style.top = (top * 6 * (-0.12) + 250) + 'px';
          document.getElementById('benbb').style.top = (top * 3* (-0.09) + 10) + 'px';
          document.getElementById('qiqiu').style.top = (top * 5 * (-0.12) + 630) + 'px';
          document.getElementById('y2').style.top = (top * 3 * (-0.09) + 1043) + 'px';
          document.getElementById('y3').style.top = (top * 3 * (-0.09) + 1219) + 'px';
//          document.getElementById('xunzhang').style.top = (top * 2 * (-0.12) + 250) + 'px';
//          document.getElementById('gu').style.top = (top * 2 * (-0.12) + 250) + 'px';
          document.getElementById('y4').style.top = (top * 3 * (-0.09) + 1600) + 'px';
//          document.getElementById('title').style.top = (top * 2 * (-0.12) + 250) + 'px';
        }



      },

      methods:{

        autoplay(){
              console.log('11221')
              document.querySelector('.videoin').play()
              // document.querySelector('.videoin').controls = 'controls'
              document.querySelector('.maskvideo').style.display = 'none'

        //            $(".videoin").autoplay = 'autoplay'
//            $('.videoin').style.controls = 'controls'
//            $('.maskvideo').style.display= 'none'


            launchFullscreen(document.getElementById('videoin'));


            document.getElementById('videoin').onplay = function(){
              // alert(123)
              exitFullscreen();
            }
            //反射調用
            var invokeFieldOrMethod = function(element, method)
            {
              var usablePrefixMethod;
              ["webkit", "moz", "ms", "o", ""].forEach(function(prefix) {
                if (usablePrefixMethod) return;
                if (prefix === "") {
            // 无前缀，方法首字母小写
                  method = method.slice(0,1).toLowerCase() + method.slice(1);
                }
                var typePrefixMethod = typeof element[prefix + method];
                if (typePrefixMethod + "" !== "undefined") {
                  if (typePrefixMethod === "function") {
                    usablePrefixMethod = element[prefix + method]();
                  } else {
                    usablePrefixMethod = element[prefix + method];
                  }
                }
              });

              return usablePrefixMethod;
            };

            //進入全屏
            function launchFullscreen(element)
            {
//此方法不可以在異步任務中執行，否則火狐無法全屏
              if(element.requestFullscreen) {
                element.requestFullscreen();
              } else if(element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
              } else if(element.msRequestFullscreen){
                element.msRequestFullscreen();
              } else if(element.oRequestFullscreen){
                element.oRequestFullscreen();
              }
              else if(element.webkitRequestFullscreen)
              {
                element.webkitRequestFullScreen();
              }else{

                var docHtml = document.documentElement;
                var docBody = document.body;
                var videobox = document.getElementById('videobox');
                var cssText = 'width:100%;height:100%;overflow:hidden;';
                docHtml.style.cssText = cssText;
                docBody.style.cssText = cssText;
                videobox.style.cssText = cssText+';'+'margin:0px;padding:0px;';
                document.IsFullScreen = true;

              }
            }
            //退出全屏
            function exitFullscreen()
            {
              if (document.exitFullscreen) {
                document.exitFullscreen();
              } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
              } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
              } else if(document.oRequestFullscreen){
                document.oCancelFullScreen();
              }else if (document.webkitExitFullscreen){
                document.webkitExitFullscreen();
              }else{
                var docHtml = document.documentElement;
                var docBody = document.body;
                var video = document.getElementById('video');
                docHtml.style.cssText = "";
                docBody.style.cssText = "";
                video.style.cssText = "";
                document.IsFullScreen = false;
              }
            }



            document.getElementById('videoin').onended = function(){
              // alert(123)
              exitFullscreen();
            }
            document.getElementById('videoin').onpause = function(){
              // alert(123)
              exitFullscreen();
            }

          },
        closevideo(){
           console.log("zoumadeng")
          document.querySelector('.videoin').pause()
          // document.querySelector('.videoin').controls = 'controls'
          document.querySelector('.maskvideo').style.display = 'block'
        },
        stopvideo(){
          document.querySelector('.videoin').pause()
          // document.querySelector('.videoin').controls = 'controls'
          document.querySelector('.maskvideo').style.display = 'block'
        },


        autoplay1(){
          console.log('11221')
          document.querySelector('.videoin1').play()
          // document.querySelector('.videoin').controls = 'controls'
          document.querySelector('.maskvideo1').style.display = 'none'

//            $(".videoin").autoplay = 'autoplay'
//            $('.videoin').style.controls = 'controls'
//            $('.maskvideo').style.display= 'none'


          launchFullscreen(document.getElementById('videoina'));


          document.getElementById('videoina').onplay = function(){
            // alert(123)
            exitFullscreen();
          }
          //反射調用
          var invokeFieldOrMethod = function(element, method)
          {
            var usablePrefixMethod;
            ["webkit", "moz", "ms", "o", ""].forEach(function(prefix) {
              if (usablePrefixMethod) return;
              if (prefix === "") {
// 无前缀，方法首字母小写
                method = method.slice(0,1).toLowerCase() + method.slice(1);
              }
              var typePrefixMethod = typeof element[prefix + method];
              if (typePrefixMethod + "" !== "undefined") {
                if (typePrefixMethod === "function") {
                  usablePrefixMethod = element[prefix + method]();
                } else {
                  usablePrefixMethod = element[prefix + method];
                }
              }
            });

            return usablePrefixMethod;
          };

          //進入全屏
          function launchFullscreen(element)
          {
//此方法不可以在異步任務中執行，否則火狐無法全屏
            if(element.requestFullscreen) {
              element.requestFullscreen();
            } else if(element.mozRequestFullScreen) {
              element.mozRequestFullScreen();
            } else if(element.msRequestFullscreen){
              element.msRequestFullscreen();
            } else if(element.oRequestFullscreen){
              element.oRequestFullscreen();
            }
            else if(element.webkitRequestFullscreen)
            {
              element.webkitRequestFullScreen();
            }else{

              var docHtml = document.documentElement;
              var docBody = document.body;
              var videobox = document.getElementById('videobox');
              var cssText = 'width:100%;height:100%;overflow:hidden;';
              docHtml.style.cssText = cssText;
              docBody.style.cssText = cssText;
              videobox.style.cssText = cssText+';'+'margin:0px;padding:0px;';
              document.IsFullScreen = true;

            }
          }
          //退出全屏
          function exitFullscreen()
          {
            if (document.exitFullscreen) {
              document.exitFullscreen();
            } else if (document.msExitFullscreen) {
              document.msExitFullscreen();
            } else if (document.mozCancelFullScreen) {
              document.mozCancelFullScreen();
            } else if(document.oRequestFullscreen){
              document.oCancelFullScreen();
            }else if (document.webkitExitFullscreen){
              document.webkitExitFullscreen();
            }else{
              var docHtml = document.documentElement;
              var docBody = document.body;
              var video = document.getElementById('video1');
              docHtml.style.cssText = "";
              docBody.style.cssText = "";
              video.style.cssText = "";
              document.IsFullScreen = false;
            }
          }


//             document.getElementById('fullScreenBtn').addEventListener('click',function(){
//
//
// //     window.setTimeout(function exit(){
// // //檢查瀏覽器是否處於全屏
// //
// //       if(invokeFieldOrMethod(document,'FullScreen') || invokeFieldOrMethod(document,'IsFullScreen') || document.IsFullScreen)
// //
// //       {
// //         if(document.getElementById('video').onended)
// //         exitFullscreen();
// //       }
// //     },5*1000);
//             },false);

          document.getElementById('videoina').onended = function(){
            // alert(123)
            exitFullscreen();
          }
          document.getElementById('videoina').onpause = function(){
            // alert(123)
            exitFullscreen();
          }

        },

        stopvideo1(){
          document.querySelector('.videoin1').pause()
          // document.querySelector('.videoin').controls = 'controls'
          document.querySelector('.maskvideo1').style.display = 'block'
        }
      },

      computed: {
        ...mapState(['animals'],['language'])
      },
    }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .homepage
    width 100%
    height 100%
    background-color: #5FC6FF;
    position relative
    background-image: url(./jianbian.png);
    background-size:5091px;
    .positions
      /*background-image: url(./jianbian.png);*/
      /*background-size:height 100%;*/
      /*background-repeat:repeat-x;*/
      position relative
      width 100%
      height 695px
      .y1
        display none
        width 56%
        height 39.9%
        background-image: url(./y1.png) ;
        background-repeat:no-repeat;
        background-size:81% 100%;
        transition 0.5s
      .title
        display none
        width 62.73%
        background-repeat:no-repeat;
        background-size:100% 100%;
        position absolute
        top 13.5%
        left 19%
        z-index 200
        border-radius 10px
        animation: boxAnimation 4s infinite linear alternate-reverse
        @keyframes boxAnimation {
          0%{opacity: 1;}
          50%{opacity: 0.5;}
          100%{opacity: 1;}
        }
      .benbb
        display none
        width 71.06%
        height 97.3%
        background-image: url(./benbb.png);
        background-repeat:no-repeat;
        background-size:100% 100%;
        position absolute
        top 0.4%
        left 25%
        z-index 180
      .qiqiu
        display none
        width 27%
        height 31.88%
        background-image: url(./qiqiu.png);
        background-repeat:no-repeat;
        background-size:100% 100%;
        position absolute
        top 34%
        left 2.5%
      .y2
        display none
        width 35.79%
        height 18.88%
        background-image: url(./y2.png);
        background-repeat:no-repeat;
        background-size:100% 100%;
        position absolute
        top 56.3%
        left 38.5%
      .y3
        display none
        width 36.42%
        height 21.53%
        background-image: url(./y3.png);
        background-repeat:no-repeat;
        background-size:100% 100%;
        position absolute
        top 65.8%
        left 6%
      .gu
        display none
        width 21.54%
        height 21.05%
        background-image: url(./gu.png);
        background-repeat:no-repeat;
        background-size:100% 100%;
        position absolute
        top 37.2%
        left 73.8%
      .xunzhang
        display none
        width 17.19%
        height 22.46%
        background-image: url(./xunzhang.png);
        background-repeat:no-repeat;
        background-size:100% 100%;
        position absolute
        top 70.1%
        left 53%
        z-index 99
      .y4
        display none
        width 20.07%
        height 12.77%
        background-image: url(./y4.png);
        background-repeat:no-repeat;
        background-size:100% 100%;
        position absolute
        top 88.5%
        left 27.3%

    .brandculture
      width 100%
      height 250px
      .inculture
        height 245px
        margin-left 20%
        overflow hidden
      &>p
        text-shadow:-2.5px 2px 0.5px rgba(0,0,0,.2);
        text-align center
        color #FFFFFF
        font-size 36.85px
        font-weight 600
        margin-bottom 20px
      .cycle
        width 26.31%
        height 241.82px
        /*overflow hidden*/
        float left
        position relative
        &>span
          font-weight 100
        .circle
          box-shadow:-2.5px 2px 0.5px rgba(0,0,0,.2);
          width 65.31%
          height 104px
          background-color: #fff;
          border-radius 50%
          float left
          margin-right 10%
          margin-left 10%
          &>span
            font-size 16px
            position absolute
            top 15%
            left 31%
            color #FFFFFF
        .c1
          background-color: #32A1F2;
        .c2
          background-color: #F58FD9;
        .c3
          background-color: #FDB813;
        .description
          font-family:"微软雅黑"
          color #FFFFFF
          position absolute
          top 55%
          left 0
          width 90%
          font-size 8px
          text-align  justify


    .video
      /*margin-top 70px*/
      width 100%
      position relative
      box-sizing border-box
      padding 10vw 10vw 10vw 10vw
      .maskvideo
        position absolute
        height:  68.48%;
        width: 79.98%;
        background-color: rgba(0,0,0,.2)
        z-index:100;
        &>img
          width: 8%;
          height: 14.5%;
          margin 22.35% 46%
      &>video
        width 100%
        height 100%
    .goods
      width 100%
    .ingoods
      margin-top 1%
      margin-left 3%
      display flex
      .img
        justify-content space-between
        height 200px
        width 31%
        margin-right 20px
        position relative
        .mask
          width 100%
          height 77.5%
          position absolute
          top:0
          left 0
          &>a
            font-family '微软雅黑'
            text-align center
            display none
            font-size 2.13vw
            color #FFFFFF
            margin 38.66px
          .btn
            width 23%
            height 10%
            display none
            margin-left 38%
            margin-top -27.5px
            font-size 6px
        &>img
          height 20.667vw
          width 100%
          margin-right 20px
        .mask:hover
          background-color: rgba(0,0,0,.5);
          &>a
            display block
          .btn
            display block

    .video1
      /*margin-top 70px*/
      width 100%
      position relative
      box-sizing border-box
      padding 10vw 10vw 10vw 10vw
      .maskvideo1
        position absolute
        height:  68.48%;
        width: 79.98%;
        background-color: rgba(0,0,0,.2)
        z-index:100;
        &>img
          width: 8%;
          height: 14.5%;
          margin 22.35% 46%
      &>video
        width 100%
        height 100%
</style>
