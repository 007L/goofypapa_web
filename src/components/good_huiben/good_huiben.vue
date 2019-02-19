<template>
  <div class="huibenWrap">
    <div class="huiben">
      <div class="huiben_main1_bj">
         <img src="./huiben_main1_bj.jpg" alt="">
       </div>

      <div class="nodeone">

        {{$t('good_huiben.nodeone_1')}}<br>
        {{$t('good_huiben.nodeone_2')}} <br>
        {{$t('good_huiben.nodeone_3')}}<br>
        {{$t('good_huiben.nodeone_4')}} <br>
        {{$t('good_huiben.nodeone_5')}} <br>
        {{$t('good_huiben.nodeone_6')}} <br>
        {{$t('good_huiben.nodeone_7')}} <br>
        {{$t('good_huiben.nodeone_8')}}<br>

      </div>

      <div class="huiben_main2_vedio">
        <div class="video leftvideo">
          <div class="maskvideo" @click="autoplay">
          </div>
          <video class="videoin" src="./shiluodexunzhang1.mp4" preload poster="./huiben_main2_vedio1_xg.jpg"></video>
        </div>
       <div class="video">
         <div class="maskvideo maskvideo1" @click="autoplay1">
         </div>
         <video class="videoin1" src="./shiluodexunzhang2.mp4"  preload poster="./huiben_main2_vedio2xg.jpg"></video>
       </div>
      </div>

      <div class="huiben_main3_book">
        <div class="huiben_main3_book1">
          <img  src="./huiben_main3_book.png" alt="">
          <br/><br/>
          {{$t('good_huiben.main3_1')}} <br>
          {{$t('good_huiben.main3_2')}}  <br>
          {{$t('good_huiben.main3_3')}}  <br>
          {{$t('good_huiben.main3_4')}}  <br>
          {{$t('good_huiben.main3_5')}} <br>
          {{$t('good_huiben.main3_6')}} <br>
          {{$t('good_huiben.main3_7')}}  <br>
          <br/>
          <br/>
          <br/>
          <br/>
          <p>{{$t('good_huiben.p_1')}}</p>
        </div>
        <img class="huiben_main3_bj" src="./huiben_main3_bj.png" alt="">
      </div>

      <div class="main4">
        <div class="divone">
          <img src="./IMG_0045.jpg" alt="">

          <span style="line-height: 24px !important;float: left">
            <img src="./flag.png" alt="">
           {{$t('good_huiben.main4_1')}}</span>
        </div>

        <div class="divone1">
         <div class="divtwo divtwo1">
           <img src="./IMG_0088.jpg" alt="">

           <span style="line-height: 24px !important;float: left">
            <img src="./flag.png" alt="">
             {{$t('good_huiben.main4_2')}}</span>
         </div>
          <div class="divtwo">
            <img src="./IMG_0083.jpg" alt="">

            <span style="line-height: 24px !important;float: left">
              <img src="./flag.png" alt="">
              {{$t('good_huiben.main4_3')}}</span>
          </div>
        </div>

      </div>

      <div class="main4_pic">
        <div class="imgleft">
          <img  src="./huiben_main4_pic4.jpg" alt="">

          <span style="line-height: 24px !important;float: left">
            <img src="./flag.png" alt="">
           {{$t('good_huiben.main4_4')}}</span>
        </div>
        <div class="imgright">
          <img  src="./IMG_0048.jpg" alt="">

          <span style="line-height: 24px !important;float: left">
            <img src="./flag.png" alt="">
            {{$t('good_huiben.main4_5')}}</span>
        </div>
      </div>

      <div class="main_pic5">
        <img src="./huiben_main4_pic6.jpg" alt="">

        <span style="line-height: 24px !important;float: left">
          <img src="./flag.png" alt="">
          {{$t('good_huiben.main4_6')}}</span>
      </div>

      <div class="main4_pic7_8">
        <div class="main4_pic7">
          <img src="./huiben_main4_pic7.jpg" alt="">

          <span style="line-height: 24px !important;float: left">
            <img src="./flag.png" alt="">
            {{$t('good_huiben.main4_7')}}
          </span>
        </div>
        <div class="main4_pic8">
          <img src="./huiben_main4_pic8.jpg" alt="">

          <span style="line-height: 24px !important;float: left">
            <img src="./flag.png" alt="">
            {{$t('good_huiben.main4_8')}}
          </span>
        </div>
      </div>

      <div class="huiben_main4_pic9">
        <img src="./huiben_main4_pic9.jpg" alt="">
        <div>
          <span style="line-height: 24px !important;float: left">
            <img src="./flag.png" alt="">
            {{$t('good_huiben.main4_9')}}
          </span>
        </div>
      </div>

      <div class="huiben_main5_time">
        <div class="left">
          <img src="./huiben_main5_time.png" alt="">
        </div>
        <div class="middle">
          <span>
            <br><br>
           {{$t('good_huiben.main5_1')}}<br>
            {{$t('good_huiben.main5_2')}}
          </span>
        </div>
        <div  class="right">
          <img src="./点点.png" alt="">
        </div>
      </div>

      <div class="huiben_main6_pic">
        <div class="main6left">
          <img src="./huiben_main6_pic.jpg" alt="">
        </div>
        <div class="main6right">

          <span style="line-height: 24px !important;float: left">
           <img src="./flag.png" alt="">
            {{$t('good_huiben.main6')}}
          </span>
        </div>
      </div>

      <div class="spilt">
        <img src="./点点.png" alt="">
      </div>
      <div class="spilt">
        <img src="./？.png" alt="">
      </div>
      <div class="spilt split1" style="margin-bottom:4.067vw">
        <span>
           {{$t('good_huiben.spilt_1')}} <br>
          {{$t('good_huiben.spilt_2')}}  <br>
          {{$t('good_huiben.spilt_3')}}  <br>
          {{$t('good_huiben.spilt_4')}}  <br>
          <br>
          {{$t('good_huiben.spilt_5')}} <br>
          {{$t('good_huiben.spilt_6')}} <br>
          {{$t('good_huiben.spilt_7')}} <br>
          {{$t('good_huiben.spilt_9')}} <br>
        </span>
      </div>

      <div class="main7">
        <div class="main7top">
          <img class="main7img" src="./huiben_main7_pic1.jpg" alt="">
          <img src="./huiben_main7_pic2.jpg" alt="">
        </div>
        <div class="main7bottom">
          <img class="main7img" src="./huiben_main7_pic3.jpg" alt="">
          <img src="./huiben_main7_pic4.jpg" alt="">
        </div>
      </div>

      <div class="spilt">
        <span>
          {{$t('good_huiben.spilt_9')}}  <br>
          {{$t('good_huiben.spilt_10')}} <br>
          {{$t('good_huiben.spilt_11')}}<br>
          {{$t('good_huiben.spilt_12')}} <br>
          {{$t('good_huiben.spilt_13')}} <br>
          {{$t('good_huiben.spilt_14')}} <br>
          {{$t('good_huiben.spilt_15')}}<br><br><br>
        </span>
      </div>

      <div class="main8" style="display: none">
        <div class="main8in">
          <img src="./huiben_main8_pic.png" alt="">
        </div>
      </div>
      <div style="width: 100%;height: 1px;background: #fff"></div>
    </div>

    <div class="footer" style="font-family: '微软雅黑 Light';font-size: 6px;text-align: center;color: #fff;margin-top: 100px;margin-bottom: 20px">
      {{$t('homepage.jianjie')}}
    </div>

    <goTop/>
  </div>
</template>
<script>
    export default {
        data () {
            return {}
        },
      mounted(){
        $(function(){ $('.gotop a').click(function(){ //根据a标签的href转换为id选择器，获取id元素所处的位置，并高度减50px（这里根据需要自由设置）
            $('html,body').animate({scrollTop: ($($(this).attr('href')).offsetTop -50 )},2000); }); });
      },
      methods:{
        autoplay(){
          console.log('11221')
          document.querySelector('.videoin').play()
          document.querySelector('.videoin').controls = 'controls'
          document.querySelector('.videoin').style.boxShadow = '0 0.1vw 0.2vw 0 rgba(255,255,255,0.3), 0 0.1vw 0.3vw 0 rgba(255,255,255,.3)'
          document.querySelector('.maskvideo').style.display = 'none'


        },
        autoplay1(){
          document.querySelector('.videoin1').play()
          document.querySelector('.videoin1').controls = 'controls'
          document.querySelector('.videoin1').style.boxShadow = '0 0.1vw 0.2vw 0 rgba(255,255,255,0.3), 0 0.1vw 0.3vw 0 rgba(255,255,255,.3)'
          document.querySelector('.maskvideo1').style.display = 'none'


        },

//        gotop(){
//          $('html,body').animate({scrollTop: ($($(this).attr('href')).offset().top -50 )},1000);
//        }
      }
    }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .huibenWrap
    width 100%
    height 100%
    min-width 1350ox
    background-color: #000;
    font-family:"宋体"
    .huiben
      margin 0 15% 0
      width 70.5%
      height 100%
      .huiben_main1_bj
        width: 140.45%;
        height: 100%;
        margin-left: -20%;
        &>img
          width 100%
      .nodeone
        text-align center
        font-size 8px
        color #fff
      .huiben_main2_vedio
        display flex
        width 100%
        .leftvideo
          margin-right 2%
        .video
          width 259.5px
          height 144px
          margin-top 66.5px
          justify-content space-around
          .maskvideo
            position absolute
            height: 47.9%;
            width: 35.5%;
            background-color: transparent;
            z-index:100;
            &>img
              height: 15%;
              margin: 22.5% 42%;
          &>video
            width: 35.01vw;
            height: 22.29vw;
        .imgleft
          margin-right 4px
      .huiben_main3_book
        width 100%
        position relative
        margin-top 16.5px
        &>img
          width 50%
        .huiben_main3_bj
          margin-left 302.475px
        .huiben_main3_book1
          width 100%
          text-align center
          color #fff
          position absolute
          top 61.5px
          font-size 8px
          &>img
            width 46%
          &>p
            font-style "新宋体"
            font-size 15px

      .main4
        position relative
        margin-top -1%
        display flex
        flex-direction: column
        justify-content space-around
        font-size 6px
        margin-bottom 8px
        .divone
          justify-content space-around
          width 100%
          color #fff
          &>span
            &>i
              float left
              width 0px
              height 0px
              border-left: 4px solid transparent;
              border-right: 4px solid transparent;
              border-bottom: 5.625px solid red;
          &>img
            width 100%

        .divone1
          margin-top 1%
          color #fff
          display flex
          justify-content space-around
          .divtwo
            width 49%
            &>img
              margin-bottom 1%
              width 100%;
            &>span
              &>i
                float left
                width 0px
                height 0px
                border-left 4px solid transparent
                border-right 4px solid transparent
                border-bottom 5.625px solid red
          .divtwo1
             margin-right 2%

      .main4_pic
        width 100%
        display flex
        justify-content space-around
        margin-bottom 8px
        color #fff
        font-size 6px
        .imgleft
          width 29%
          height 29%
          position relative
          &>img
            width 100%
            height 100%
          &>span
            &>i
              float left
              width 0px
              height 0px
              border-left: 4px solid transparent;
              border-right: 4px solid transparent;
              border-bottom: 5.625px solid red;
        .imgright
          position relative
          width 67.5%
          height 67.5%
          &>img
            width 100%
            height 100%
          &>span
            &>i
              float left
              width 0px
              height 0px
              border-left: 4px solid transparent;
              border-right: 4px solid transparent;
              border-bottom: 5.625px solid red;
      .main_pic5
        width 100%
        margin-bottom 8px
        color #fff
        font-size 6px
        position relative
        &>img
          width 100%
        &>span
          &>i
            float left
            width 0px
            height 0px
            border-left: 4px solid transparent;
            border-right: 4px solid transparent;
            border-bottom: 5.625px solid red;
      .main4_pic7_8
        width 100%
        margin-bottom 8px
        color #fff
        font-size 6px
        position relative
        display flex
        justify-content space-between
        .main4_pic7
          width 49%
          height 49%
          &>img
            width 100%
          &>span
            &>i
              float left
              width 0px
              height 0px
              border-left: 4px solid transparent;
              border-right: 4px solid transparent;
              border-bottom: 5.625px solid red;
        .main4_pic8
          width 49%
          height 49%
          &>img
            width 100%
          &>span
            &>i
              float left
              height 0px
              border-left: 4px solid transparent;
              border-right: 4px solid transparent;
              border-bottom: 5.625px solid red;
      .huiben_main4_pic9
        width 100%
        margin-bottom 14px
        color #fff
        font-size 6px
        position relative
        &>img
          width 100%
        &>div
          &>span
            &>i
              float left
              width 0px
              height 0px
              border-left: 4px solid transparent;
              border-right: 4px solid transparent;
              border-bottom: 5.625px solid red;
      .huiben_main5_time
        width 100%
        text-align center
        margin-bottom: 3.067vw
        margin-top 4vw
        color #fff
        font-size 10px
        position relative
        display flex
        flex-direction column
        .left
          width 100%
          text-align center
          &>img
            width 56%
        .middle
          &>span
            font-size 8px
        .right
          margin-top 30px
          text-align center
      .huiben_main6_pic
        width 100%
        margin-bottom 8px
        color #fff
        position relative
        display flex
        flex-direction column
        .main6left
          width 100%
          text-align center
          &>img
            width 61.7%
        .main6right
          width 61.7%
          display flex
          margin-left 19.15%
          &>span
            font-size 6px
            &>i
              float: left;
              width 0px
              border-left: 4px solid transparent;
              border-right: 4px solid transparent;
              border-bottom: 5.625px solid red;
      .spilt
        width 100%
        text-align center
        margin-top 7%
        color #fff
        font-size 8px
        margin-bottom 8px

      .main7
        width 100%
        margin-bottom 8px
        color #fff
        font-size 10px
        position relative
        display flex
        flex-direction column
        .main7top
          width 100%
          margin-bottom 1%
          &>img
            width 49%
          .main7img
            margin-right 1%
        .main7bottom
          width 100%
          &>img
            width 49%
          .main7img
            margin-right 1%
      .main8
        width 100%
        .main8in
          width 100%
          text-align center
          &>img
            width 61.7%
    .gotop
      width 30px
      height 30px
      position fixed
      bottom 1%
      right 1%
      box-sizing border-box
      padding .5%
      border-radius 50%
      box-shadow:0 0.1vw 0.2vw 0 rgba(255,255,255,0.3), 0 0.1vw 0.3vw 0 rgba(255,255,255,.3);
      &>a
        &>img
          width 100%
          height 100%
          animation: boxAnimation 4s infinite linear alternate-reverse
        @keyframes boxAnimation {
          0%{opacity: 1;}
          50%{opacity: 0.5;}
          100%{opacity: 1;}
        }
</style>
