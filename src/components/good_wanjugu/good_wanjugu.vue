<template>
    <div style="width: 100%;height: 100%">
      <section id="wrap">

        <section class="content">

          <div class="swiper-container gallery-top">
            <div class="swiper-wrapper">
              <div class="swiper-slide" style="background-color:#fcf0e7;">
                <div class="slideImage first">
                  <img class="img1" src="./gu1_main1_pic1.png" alt="" style="width:56.3%;" />
                  <span :style="'left:' + $t('goodwanjugu.left')">
                    <p style="font-weight: 100">{{$t('goodwanjugu.title_1')}}</p>
                    <br><br>{{$t('goodwanjugu.jieshao_1')}}<br>
                    {{$t('goodwanjugu.jieshao_2')}}<br>
                    {{$t('goodwanjugu.jieshao_3')}}<br>
                    {{$t('goodwanjugu.jieshao_4')}}<br>
                    {{$t('goodwanjugu.jieshao_5')}}<br>
                    {{$t('goodwanjugu.jieshao_6')}}<br><br><br>
                    <div class="firstdiv">
                      <img @click="playVideo"  class="img2" src="./gu1_main1_pic2.png" alt="" style="float: left">
                      &nbsp;{{$t('goodwanjugu.playvideo')}}
                    </div>
                  </span>
                </div>

                <div class="firstVideo" style="display: none">
                  <video class="video1" src="./gu1moive.mp4" style="width:46%;height: 46%;margin: 10% 27% 2%" controls></video>
                  <img @click="closeVideo" src="./close.png" alt="" style="margin: 0  49%;cursor: pointer">
                </div>

              </div>
              <div class="swiper-slide">
                <div class="slideImage second">
                  <div class="top">
                    <ul class="photoList">
                      <li>
                        <h1 style="font-weight: 100">{{$t('goodwanjugu.title_2')}}</h1><br>
                        <p> {{$t('goodwanjugu.jieshao_7')}}</p>
                      </li>

                    </ul>
                  </div>
                    <div class="bottom">
                      <div class="left" style="position: relative;width:40%;">
                        <h1 style="margin-bottom: 1vw;font-size: 22px">爸爸拍拍</h1>
                        <img :src="'./static/img/'+$t('goodwanjugu.wenzi_1')" alt="" style="position: absolute;width: 136.76%;top: 15%;left: -17%">
                        <img src="./gu1_main2_pic1.png" alt="">
                        <h1 style="font-size: 22px;margin-bottom: 10px"> {{$t('goodwanjugu.Positive')}}</h1>
                      </div>
                      <div class="right" style="position: relative;width: 40%;">
                        <h1 style="margin-bottom: 1vw;font-size: 22px">Dadpat</h1>
                        <img :src="'./static/img/'+$t('goodwanjugu.wenzi_2')" alt="" style="position: absolute;width: 136.76%;top: 15%;left: -21%">
                        <img src="./gu1_main2_pic2.png" alt="">
                        <h1 style="font-size: 22px;margin-bottom: 10px"> {{$t('goodwanjugu.The_other_side')}}</h1>
                      </div>

                    </div>
                </div>

              </div>
              <div class="swiper-slide">
                <div class="third slideImage">
                  <div class="left">
                    <ul class="photoList">
                      <li style="margin-top: 2.5%;">
                        <p class="p1" style="font-weight: 100">{{$t('goodwanjugu.title_3')}}</p>
                        <p class="p2" style="">{{$t('goodwanjugu.jieshao_8')}}<br>{{$t('goodwanjugu.jieshao_9')}}</p>
                      </li>
                      <li >
                        <div class="img1out">
                        <img class="img1" :src="'./static/img/'+$t('goodwanjugu.wenzi_3')" alt="" />
                        </div>
                      </li>
                      <li>
                        <img class="img2" src="./gu1_main3_pic1.png" alt="">
                      </li>
                      <li>
                        <router-link class="abc" to="/good_wanjugu1">
                        <img class="imgjiantou" src="./jiantouxia.png" alt="" style="width: 3%;margin-left: 60%;margin-top: 0%">
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>

            </div>
            <div class="swiper-pagination"></div>
          </div>

        </section>

      </section>


      <router-view/>
    </div>
</template>
<script>
    import Swiper from "swiper"
    export default {
        data () {
            return {}
        },
      mounted(){
        // var $cList = $("#wrap>.content")
        var $firstLiImg = $(".first .img1");
        var $firstLiP = $(".first span p");
        var $firstLiimg = $(".first span img");
        // var $firstLiP= $cList.find(".firstLi span")
        // var $firstLiimg= $cList.find(".firstLi span div img")

        var $secondLis = $(".second>.top>.photoList>li");
        var $secondLi1 = $secondLis.eq(0);
        var $secondDiv = $('.second>.bottom>div');
        var $secondLi2 = $secondDiv.eq(0);
        var $secondLi3 = $secondDiv.eq(1);

        var $thirdLis = $(".third>.left>.photoList>li");
        var $thirdLi1 = $thirdLis.eq(0)
        var $thirdLi2 = $thirdLis.eq(1)
        var $thirdLi3 = $thirdLis.eq(2)


        var $content = $("#wrap>.content>.swiper-container");
        $content.height(document.documentElement.clientHeight-50 +'px');
        $(".slideImage").css({
          width:"100%",
          height:"100%"
        });

        $(".swiper-pagination").css({
          top:document.documentElement.clientHeight*.4 +"px"
        });
        var galleryTop = new Swiper('.gallery-top', {
          direction: 'vertical',
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          mousewheel:true,
          speed:800,
          on :{
            slideChange: function(){
                if(this.realIndex===0){
                  $firstLiImg.css({
                    transform: "translateX(0px)",
                    opacity:1 ,
                    transition:'1.5s'
                  });
                  $firstLiP.css({
                    transform: "translateX(0px)" ,opacity:1 ,transition:'1.5s'
                  });
                  $firstLiimg.css({
                    transform: "translateX(0px)" ,opacity:1 ,transition:'1.5s'
                  });

                  $secondLi1.css({
                    transform: "translateY(-37px)" ,opacity:0 ,transition:'0.5s'
                  });
                  $secondLi2.css({
                    transform: "translateX(-800px)" ,opacity:0 ,transition:'0.5s'
                  });

                  $secondLi3.css({
                    transform: "translateX(800px)",opacity:0 ,transition:'0.5s'
                  })
                }

                if(this.realIndex ===1){
                  // alert("1")
                  $firstLiImg.css({
                    transform: "translateX(-800px)",
                    opacity:0,
                    transition:'1s'
                  });

                  $firstLiP.css({
                    transform: "translateX(800px)",opacity:0 ,transition:'1s'
                  });
                  $firstLiimg.css({
                    transform: "translateX(800px)",opacity:0 ,transition:'1s'
                  });


                  $secondLi1.css({
                    transform: "translateY(0px)",opacity:1 ,transition:'1.5s'
                  });
                  $secondLi2.css({
                    transform: "translateX(0px)" ,opacity:1 ,transition:'1s'
                  });

                  $secondLi3.css({
                    transform: "translateX(0px)" ,opacity:1 ,transition:'1s'
                  })


                  $thirdLi1.css({
                    transform: "translateX(-270px)" ,opacity:0 ,transition:'1s'
                  });
                  $thirdLi2.css({
                    transform: "translateX(0px)" ,opacity:0 ,transition:'1s'
                  });

                  $thirdLi3.css({
                    transform: "translateX(-800px)",opacity:0 ,transition:'1s'
                  })

                }

                if(this.realIndex===2){
                   console.log("55555");
                   console.log($thirdLi1,$thirdLi3,$thirdLi2)
                  $thirdLi1.css({
                    transform: "translateX(0px)" ,opacity:1 ,transition:'1.5s'
                  });
                  $thirdLi2.css({
                    transform: "translateX(0px)" ,opacity:1 ,transition:'1.5s'
                  });
                  $thirdLi3.css({
                    transform: "translateX(0px)" ,opacity:1 ,transition:'1.5s'
                  });

                  $secondLi1.css({
                    transform: "translateY(-37px)" ,opacity:0 ,transition:'0.5s'
                  });
                  $secondLi2.css({
                    transform: "translateX(-800px)" ,opacity:0 ,transition:'0.5s'
                  });

                  $secondLi3.css({
                    transform: "translateX(800px)",opacity:0 ,transition:'0.5s'
                  })
                }
            }
          }
        })
//         $(function() {
//
//           var $content = $("#wrap>.content")
//           var $cList = $content.children('.contentList')
//           var $cLiNodes = $cList.children("li")
//
//           var $pList = $content.find(".sideNav>li")
//
//           var $firstLiImg = $cList.find(".firstLi img")
//           var $firstLiP= $cList.find(".firstLi span")
//           var $firstLiimg= $cList.find(".firstLi span div img")
//
//           var $secondLis = $cList.find(".secondLi .second>.top>.photoList>li")
//           var $secondLi1 = $secondLis.eq(0)
//           var $secondDiv = $cList.find('.secondLi .second>.bottom>div')
//           var $secondLi2 = $secondDiv.eq(0)
//           var $secondLi3 = $secondDiv.eq(1)
//
//           var $thirdLis = $cList.find(".thirdLi .third>.left>.photoList li")
//           var $thirdLi1 = $thirdLis.eq(0)
//           var $thirdLi2 = $thirdLis.eq(1)
//           var $thirdLi3 = $thirdLis.eq(2)
// //          var $thirdRight = $cList.find(".thirdLi .third>.right")
// //
// //          var $fourLis = $cList.find(".fourLi .four>.left>.photoList li")
// //          var $fourLi1 = $fourLis.eq(0)
// //          var $fourLi2 = $fourLis.eq(1)
// //          var $fourLi3 = $fourLis.eq(2)
// //          var $fourRight = $cList.find(".fourLi .four>.right")
// //
// //          var $fiveLis = $cList.find(".fiveLi .five>.left>.photoList>li")
// //          var $fiveLi1 = $fiveLis.eq(0)
// //          var $fiveLi2 = $fiveLis.eq(1)
// //          var $fiveLi3 = $fiveLis.eq(2)
// //          var $fiveRight = $cList.find(".fiveLi .five>.right")
//
//           var currentIndex = 0
//           var preIndex = 0
//           var timer
//
//
//           //窗口重置
//           window.onresize = function() {
//             setContentHeight()
//           }
//
//           //出入场动画
//           var animations = [
//             {
//               in: function () {
//                 cssTimeout($firstLiImg, { transform: "translateX(0px)",opacity:1 ,transition:'.8s'}, 500)()
//                 cssTimeout($firstLiP, { transform: "translateX(0px)" ,opacity:1 ,transition:'.8s'}, 500)()
//                 cssTimeout($firstLiimg, { transform: "translateX(0px)" ,opacity:1 ,transition:'.8s'}, 500)()
//               },
//               out: function () {
//                 cssTimeout($firstLiImg, { transform: "translateX(-500px)",opacity:0,transition:'0.5s' }, 500)()
//                 cssTimeout($firstLiP, { transform: "translateX(500px)",opacity:0 ,transition:'0.5s' }, 500)()
//                 cssTimeout($firstLiimg, { transform: "translateX(500px)",opacity:0 ,transition:'0.5s' }, 500)()
//               }
//             },
//             {
//               in: function() {
//                 cssTimeout($secondLi1, { transform: "translateY(0px)",opacity:1 ,transition:'1s' }, 500)()
//                 cssTimeout($secondLi2, { transform: "translateX(0px)" ,opacity:1 ,transition:'.8s' }, 500)()
//                 cssTimeout($secondLi3, { transform: "translateX(0px)" ,opacity:1 ,transition:'.8s' }, 800)()
// //                cssTimeout($secondRight, { transform: "translateY(0px)" }, 1200)()
//               },
//               out: function() {
//                 cssTimeout($secondLi1, { transform: "translateY(-37px)" ,opacity:0 ,transition:'0.5s'}, 500)()
//                 cssTimeout($secondLi2, { transform: "translateX(-800px)" ,opacity:0 ,transition:'0.5s' }, 500)()
//                 cssTimeout($secondLi3, { transform: "translateX(800px)",opacity:0 ,transition:'0.5s'  }, 800)()
// //                cssTimeout($secondRight, { transform: "translateY(-800px)" }, 1200)()
//               }
//             },
//             {
//               in: function() {
//                 setTimeout(function() {
//                   $thirdLi1.css({ transform: "translateX(0px)",opacity:1 ,transition:'1s' })
//                   $thirdLi2.css({ transform: "translateX(0px)" ,opacity:1 ,transition:'2s'})
//                   $thirdLi3.css({ transform: "translateX(0px)" ,opacity:1 ,transition:'1s'})
//                 }, 1000)
//               },
//               out: function() {
//                 setTimeout(function() {
//                   $thirdLi1.css({ transform: "translateX(-27px)" ,opacity:0 ,transition:'1s'})
//                   $thirdLi2.css({ transform: "translateX(0px)" ,opacity:0 ,transition:'2s'})
//                   $thirdLi3.css({ transform: "translateX(-558px)",opacity:0 ,transition:'1s' })
//                 }, 1000)
//               }
//             },
//
//           ]
//           $.each(animations, function(i) {
//             i > 0 && animations[i]["out"]()
//           })
//
//           //滚轮事件的实现
//           $content.on("mousewheel DOMMouseScroll", function(e) {
//             e = e || event
//             var delta =
//               (e.originalEvent.wheelDelta &&
//               (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || // chrome & ie
//               (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1)) // firefox
//             clearTimeout(timer)
//             timer = setTimeout(function() {
//               if (delta > 0) {
//                 if (currentIndex > 0) {
//                   currentIndex--
//                 }
//                 move(currentIndex)
//               } else if (delta < 0) {
//                 if (currentIndex < $cLiNodes.length - 1) {
//                   currentIndex++
//                   if ((currentIndex == 0 && delta < 0) || (currentIndex == $cLiNodes.length && delta < 0)) {
//                     return
//                   }
//                   move(currentIndex)
//                 }
//               }
//               preIndex = currentIndex
//             }, 200)
//             window.event ? (window.event.returnValue = false) : e.preventDefault()
//           })
//
//           clickBind()
//           setContentHeight()
//
//           /**
//            * 延迟设置元素的样式
//            */
//           function cssTimeout($el, css, time) {
//             return function() {
//               setTimeout(() => {
//                 $el.css(css)
//               }, time)
//             }
//           }
//
//           /**
//            * 绑定点击监听
//            */
//           function clickBind() {
//             function clickFun($el) {
//               return function () {
//                 var index = $el.index(this)
//                 preIndex = currentIndex
//                 move(index)
//                 currentIndex = index
//               }
//             }
// //            $nList.on("click", clickFun($nList))
//             $pList.on("click", clickFun($pList))
//           }
//
//           /**
//            * 设置内容区的高度
//            */
//           function setContentHeight() {
//             $content.height(document.documentElement.clientHeight -50 +'px')
//             $cLiNodes.height(document.documentElement.clientHeight -50 +'px')
//           }
//
//           //同步主导航及侧边导航
//           function move(index) {
// //            $nList.attr('class', '')
// //            $nList.eq(index).addClass('active')
//             $pList.attr('class', '')
//             $pList.eq(index).addClass('active')
//
//             $cList.css({ top: -index * (document.documentElement.clientHeight-50) })
//             animations[index] && animations[index]["in"] && animations[index]["in"]()
//             animations[preIndex] && animations[preIndex]["out"] && animations[preIndex]["out"]()
//           }
//         })

      },

      methods:{
          toggle(){
            this.$router.push('/good_wanjugu1')
          },
        playVideo(){
            $('.firstVideo').css('display','block')
            document.querySelector('.video1').play()
        },
        closeVideo(){
          $('.firstVideo').css('display','none')
          document.querySelector('.video1').pause()
        }
      }
    }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  #wrap .content .first .img1 {
    position: absolute;
    top: 6.5%;
    left: 21.5%;
    transition: .5s opacity;
    width:56.3%;

  }

  #wrap .content  .first  span {
    position: absolute;
    top: 66.5%;
    transition: .5s opacity;
    font-size:6px;
    line-height: 9px;
    text-align:center;

  }
  #wrap .content   .first  p{
    font-size:13.26px;
    line-height: 9px;
    text-align:center;
  }


  #wrap .content  .first .firstdiv {
    position: relative;
    /*display: block;*/
    transition: .5s opacity;
    font-size:8px;
    text-align:center;
    color: #f7a76c;
    display: flex;
    margin-left: 35%;
  }
  #wrap .content  .first .firstdiv .img2{
    cursor: pointer;
    border-radius: 30px;
    transition: .5s opacity;
    font-size:6px;
    text-align:center;
    width: 10px;
    height: 10px;
  }
  #wrap .content .firstVideo{
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-color:rgba(0,0,0,.3);
    width: 100%;
    height: 100%;
    z-index 9999;
  }
  #wrap .content .second .bottom {
    display: flex;
    margin-left: 13.5%;
    justify-content: space-around;
    margin-top: 6%;
    transition: 1s transform;
    transform: translateY(0);
    width: 70%;
  }

  #wrap .content .second  .bottom  h1 {
    font-size: 13.26px;
    color: #333;
    font-weight: 100;
    text-align:  center;
  }



  #wrap .content  .second  .bottom .right {
    align-items: flex-end;
  }
  #wrap .content  .second  .bottom .right img{
    width: 100%;
  }
  #wrap .content  .second  .bottom .left img{
    width: 100%;
  }
  #wrap .content  .second  .bottom .left {
    text-align: -webkit-center;
    margin-right 1%
  }
  #wrap .content  .second  .bottom .right {
    text-align: -webkit-center;
  }
  #wrap .content  .second .top {
    position: relative;
    top: 5%;
    text-align: center;
    width: 97.6vw;
    z-index: 1
  }

  #wrap .content  .second .top .photoList {
    width: 100%;
    height: 100%
  }


  #wrap .content  .second .top .photoList  p {
    font-size: 6px;
    color: #333;
    font-weight: 400;
    text-align:  center;
  }
  #wrap .content  .second .top .photoList  h1 {
    font-size: 13.26px;
    /*text-align center;*/
  }


  #wrap .content  .second .top .photoList li {
    transform: translateY(-37px); opacity:0
  }

  #wrap .content  .second .bottom div:nth-child(1) {
    transform: translateX(-800px) ;opacity:0
  }

  #wrap .content  .second .bottom div:nth-child(2) {
    transform: translateX(800px);opacity:0
  }

  #wrap .content  .third .left {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color:#fff
  }

  #wrap .content  .third .left .photoList {
    width: 100%;
    height: 100%;
    display: flex;
    margin-bottom: 1vw;
    flex-direction:column;
    justify-content: flex-start;
    background: url(./beijing.jpg) no-repeat;
    background-size:cover;
  }

  #wrap .content  .third .left .photoList li {
    text-align: center;
    /*transition: 1s transform;*/
    position: relative;
  }
  #wrap .content  .third .left .photoList li .p2{
    font-size: 6px;
    margin-top: 2vw;
  }
  #wrap .content  .third .left .photoList li .p1{
    font-size: 13.26px;
  }

  #wrap .content  .third .left .photoList li img{
    margin: 0 auto;
    /*transition: 1s transform;*/
    align-items: center;

  }
  #wrap .content  .third .left .photoList li .img1{
    width: 46%;
  }

  #wrap .content  .third .left .photoList li .img2{
    width: 22%;
  }
  #wrap .content  .third .left .photoList li p {
    font-size: 14px
  }
  #wrap .content  .third .right p {
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 18px;
    color: #333;
    text-align: right
  }
  #wrap .content  .third .bg {
    position: absolute;
    right: -193px;
    bottom: 0
  }

  #wrap .content  .third .photoList li:nth-child(1) {
    transform: translateX(-270px) ;opacity:0
  }
  #wrap .content  .third .photoList li:nth-child(2) {
    transform: translateX(0) ;opacity:0
  }
  #wrap .content  .third .photoList li:nth-child(3) {
    transform: translateX(-800px) ;opacity:0
  }
  #wrap .abc{
    cursor: pointer
  }
  .abc{
    animation: boxAnimation 2s infinite linear alternate-reverse
  }
  @keyframes boxAnimation {
    0%{opacity: 0.1;}
    50%{opacity: 0.5;}
    100%{opacity: 1;transform:translateY(10px)}
  }
</style>
