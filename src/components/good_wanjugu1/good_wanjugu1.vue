<template>
    <div class="wanjugu" >
      <div style="width: 100%;height: 1%;text-align: center">
        <img style="margin-top: 2%;" @click="goback" class="imgwjg" src="./jiantoushang.png" alt="">
      </div>
      <div class="one">
        <h1>{{$t('goodwanjugu_1.one_1')}}</h1>
        <p style="font-size: 0.8vw">{{$t('goodwanjugu_1.one_2')}}</p>
      </div>

      <div class="two">
        <div class="left">
           <div>
             <span class="leftone" style="font-style:italic;font-weight: normal">&nbsp;&nbsp;01</span>
             <span class="lefttwo" style="font-size:22px;font-style:italic;font-weight: 100">&nbsp;&nbsp;&nbsp;{{$t('goodwanjugu_1.two_1')}}</span>
           </div>
          <img src="./gu1_main4_pic2.png" alt="">
          <p :style="'text-indent:' +$t('goodwanjugu_1.t_indent')"> {{$t('goodwanjugu_1.two_2')}}</p>
        </div>

        <div class="middle">
          <img src="./gu1_main4_pic1.png" alt="">
        </div>
        <div class="right">
          <img src="./gu1_main4_pic3.png" alt="">
        </div>
      </div>
      <div class="three">
        <div class="threeLeft">
          <span class="lefttwo"  style="font-style:italic;font-weight: normal">&nbsp;&nbsp;02</span>
          <span class="righttwo" style="font-size:22px;font-style:italic;font-weight: 100">&nbsp;&nbsp;&nbsp;{{$t('goodwanjugu_1.three_1')}}</span>
          <img src="./gu1_main4_pic5.png" alt="">
          <p>{{$t('goodwanjugu_1.three_2')}}</p>
        </div>
        <div class="threeRight">
          <img src="./gu1_main4_pic6.png" alt="">
          <p>{{$t('goodwanjugu_1.three_3')}}</p>
        </div>
      </div>

      <div class="four">
        <p style="font-weight: 100;margin-bottom: 1vw">{{$t('goodwanjugu_1.four_1')}}</p>
        <div class="top">
          <img src="./gu1_main4_pic7.png" alt="">
        </div>
        <div class="bottom">
          <div class="fourleft">
            <div>
              <img src="./gu1_main4_pic8.png" alt="">
              <p>{{$t('goodwanjugu_1.four_2')}}</p>
            </div>
            <div>
              <img src="./gu1_main4_pic9.png" alt="">
              <p>{{$t('goodwanjugu_1.four_3')}}</p>
            </div>
          </div>
          <div class="fourright">
            <div>
              <img src="./gu1_main4_pic10.png" alt="">
              <p >{{$t('goodwanjugu_1.four_4')}}</p>
            </div>
            <div>
              <img src="./gu1_main4_pic11.png" alt="">
              <p>{{$t('goodwanjugu_1.four_5')}}</p>
            </div>
          </div>
        </div>
      </div>


      <div class="five">
       <p style="font-weight: 100;margin-bottom: 1vw">{{$t('goodwanjugu_1.five_1')}}</p>
       <div class="fivetop">
         <img src="./gu1_main5_pic1.png" alt="">
       </div>
       <div class="fivebottom">
         <div class="fiveone">
           <div>
             <img src="./gu1_main5_pic2.png" alt="">
             <p>{{$t('goodwanjugu_1.five_2')}}</p>
           </div>
           <div>
             <img src="./gu1_main5_pic3.png" alt="">
             <p>{{$t('goodwanjugu_1.five_3')}}</p>
           </div>
         </div>
         <div class="fivetwo">
           <div>
             <img src="./gu1_main5_pic4.png" alt="">
             <p>{{$t('goodwanjugu_1.five_4')}}</p>
           </div>
           <div>
             <img src="./gu1_main5_pic5.png" alt="">
             <p>{{$t('goodwanjugu_1.five_5')}}</p>
           </div>
         </div>
         <div class="fivethree">
           <div>
             <img src="./gu1_main5_pic6.png" alt="">
             <p>{{$t('goodwanjugu_1.five_6')}}</p>
           </div>
           <div>
             <img src="./gu1_main5_pic7.png" alt="">
             <p>{{$t('goodwanjugu_1.five_7')}}</p>
           </div>
         </div>
       </div>

      </div>

      <div class="six">
       <p style="font-weight: 100">{{$t('goodwanjugu_1.six_1')}}</p>
       <div class="sixtop">
         <p style="font-weight: 100">{{$t('goodwanjugu_1.six_2')}}</p>
         <div>
           <img src="./粉色.png" alt="">
           <img class="divimgright" src="./蓝色.png" alt="">
         </div>
       </div>
       <div class="sixmiddle">
         <p style="text-align: left;font-weight: 100">{{$t('goodwanjugu_1.six_3')}}</p>
         <div class="sixmiddlein">
           <img src="./baozhuangtu.png" alt="">
           <span style="margin-top: 13%;text-align: left;font-size: 18px;font-weight: 100">
          {{$t('goodwanjugu_1.six_4')}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{$t('goodwanjugu_1.six_5')}} <br>
          {{$t('goodwanjugu_1.six_6')}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{$t('goodwanjugu_1.six_7')}} <br>
          {{$t('goodwanjugu_1.six_8')}}<br>
          {{$t('goodwanjugu_1.six_9')}}
        </span>
         </div>
       </div>
       <p style="margin-top: 9%; font-size: 22px; margin-bottom: 5%;">{{$t('goodwanjugu_1.six_10')}}</p>
     </div>

      <goTop/>
    </div>
</template>
<script>
    export default {
        data () {
            return {}
        },
      methods:{
        goback(){
          this.$router.push('/goodwanjugu')
        }
      }
    }
</script>
<style scope lang="stylus" rel="stylesheet/stylus">
  .wanjugu
    font-family '微软雅黑'
    width 100%
    height 100%
    color rgb(255,255,255)
    background linear-gradient(rgb(62, 160, 233), rgb(41, 82, 161))
    &>div
      .imgwjg
        width: 3.5%
        height 93.82%
        cursor pointer
        animation: boxAnimationa 1s infinite linear alternate-reverse
        @keyframes boxAnimationa {
          0%{opacity: 0;}
          50%{opacity: 0.5;}
          100%{opacity: 1;transform translateY(-10px)}

        }
    .one
      text-align center
      margin-top 1%
      &>h1
        font-weight 100
        font-size: 13.26px
        margin-bottom 7.5px
        &>p
          font-size 6px
    .two
      margin-top 5%
      width 60%
      display flex
      justify-content space-around
      margin-left 20%
      .left
        margin-top: 5%;
        &>div
          .leftone
            font-size 16px
          .lefttwo
            font-size 10px
        &>p
          font-size 8px
      .middle
        margin-top: 15%;

    .three
      margin-top 5%
      display flex
      justify-content space-around
      width 60%
      margin-left 20%
      .threeLeft
        margin-right: 17%
        &>div
        .lefttwo
          font-size 16px
        .righttwo
          font-size 10px
        &>p
          font-size 6px
      .threeRight
        margin-top 6%
        &>p
          font-size 6px
    .four
      margin-top 5%
      width 60%
      margin-left 20%
      display flex
      flex-direction: column
      text-align center
      &>p
        font-size 13.26px
        font-weight 100
      .top
        width 100%
        &>img
          width 100%
      .bottom
        display flex
        flex-direction: column
        .fourleft
          display flex
          justify-content space-around
          &>div
            &>p
              font-size 6px
              margin-bottom 8%
        .fourright
          display flex
          justify-content space-around
          &>div
            &>p
              font-size 6px
              margin-bottom 8%
    .five
      margin-top 5%
      width 60%
      margin-left 20%
      display flex
      text-align center
      flex-direction column
      &>p
        font-size 13.26px
        font-weight 100
      .fivetop
        margin-right  2%
        width 100%
        &>img
          width 100%
      .fivebottom
        .fiveone
          &>div
            &>p
              font-size 6px
              margin-bottom 8%
        .fivetwo
          &>div
            &>p
              font-size 6px
              margin-bottom 8%
        .fivethree
          &>div
            &>p
              font-size 6px
              margin-bottom 8%
        &>div
          display flex
          justify-content space-around
    .six
      margin-top 5%
      width 60%
      margin-left 20%
      display flex
      flex-direction: column
      text-align center
      &>p
        font-size 13.26px
        font-weight 100
      .sixtop
        margin-top 5%
        margin-bottom 5%
        display flex
        align-content start
        &>p
          font-size 10px
          margin-right 8%
        &>div
          display flex
          justify-content space-around
          &>img
            margin-right -10%
          .divimgright
            margin-left 35%
      .sixmiddle
        &>p
          font-size 10px
        .sixmiddlein
          display flex
          justify-content space-around

    .gotop
      width 30px
      height 30px
      position fixed
      bottom 1%
      right 1%
      box-sizing border-box
      padding .5%
      border-radius 50%
      box-shadow:0 0.1vw 0.2vw 0 rgba(255,255,255,0.5), 0 0.1vw 0.3vw 0 rgba(255,255,255,.5);
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
