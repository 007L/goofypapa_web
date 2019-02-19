<template>
    <div class="aboutUs">
      <div>
        <div data-v-91329ef2="" style="height: 3px; background: linear-gradient(to right, rgb(254, 211, 226) 55%, rgb(197, 242, 255) 45%);"></div>

        <header>
          <div class="pic_us_1">
            <img :src="'./static/img/' + $t('aboutUs.pic_1')" alt="">
            <!--<img src="./pic_us_1.jpg" alt="">-->
          </div>
          <div class="pic_us_2">
            <!--<img src="./pic_us_2.jpg" alt="">-->
            <img :src="'./static/img/' + $t('aboutUs.pic_2')" alt="">
          </div>
        </header>
      </div>

      <div style="width: 100%;height: 100%;">
        <iframe id="timeline" border="0" vspace="0" hspace="0" marginwidth="0" marginheight="0" framespacing="0" scrolling="no" width="100%" height="510vw"
                style="dispaly:block;"
                frameborder="0"  :src="'http://www.dadpat.com/t/static/'+$t('aboutUs.timeline')"></iframe>
        <div style="width: 100%;height: 10px;background: #4f5976;margin-top: -1vw;display: flex;
                    justify-content: center;
                    align-items: center;">
          <img @click="toggleHeight" class="uppng" src="../../../static/img/up.png" alt="" style="position: relative;z-index: 200;display: none">
          <img @click="toggleH" class="downpng" src="../../../static/img/down.png" alt="" style="position: relative;z-index: 200;">
        </div>
      </div>


      <div style="width: 100%;height: 40vw;display: flex;flex-direction: column">
        <div style="width: 100%;height: 37vw;display: flex;flex-direction: row;">
          <div  style="position: relative;width: 20%;background: linear-gradient(to right, rgb(255, 255, 255), transparent); z-index: 2; box-shadow: rgba(255, 255, 255, 0.8) 2vw 0px 5vw 0px;">
            <div style="width: 180%;height:100%;position: absolute;background: linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255,.9)); z-index: 2; box-shadow: rgba(255, 255, 255, 0.9) 10vw 0px 5vw 0px;">

              <div  style="width: 200%; height: 25vw; position: relative; z-index: 3;">
                <div  style="margin:8vw 20vw 0px 8vw;">
                  <div  style="margin-bottom: 10%;">{{$t('aboutUs.Contact_us')}}</div>
                  <div  style="display: flex; font-size: 1vw; margin-bottom: 5%; margin-left: 0%;">
                    <img  src="./site.png" alt="" style="width: 3%; height: 3%;">
                &nbsp;&nbsp;{{$t('aboutUs.add')}}
              </div> <div  style="display: flex; font-size: 1vw; margin-bottom: 5%; margin-left: 0%;">
                <img  src="./mel.png" alt="" style="width: 3%; height: 3%;">
                &nbsp;&nbsp;010-67859516、400-8850-676
              </div> <div  style="display: flex; font-size: 1vw; margin-bottom: 10%; margin-left: 0%;">
                <img  src="./email.png" alt="" style="width: 3%; height: 3%;">
                &nbsp;&nbsp;goofypapa@goofypapa.com
              </div></div></div>
            </div>
          </div>
          <div id="allmap"></div>
        </div>
        <div style="width: 100%;height: 3vw;background: linear-gradient(to right top, rgb(255, 255, 255), rgba(255, 255, 255, 0.5));position: relative">
          <div style="width: 100%;height:180%;position: absolute;background: linear-gradient(to top right, rgb(255, 255, 255), rgba(255, 255, 255,.9)); z-index: 2; box-shadow: rgba(255, 255, 255, 0.9) 0 59px 3vw 102px;"></div>
          <div data-v-91329ef2="" style="font-size: 0.8vw; text-align: center; margin-top: 2vw; margin-bottom: 2vw;position: relative;z-index: 100;">
            {{$t('homepage.jianjie')}}
          </div>
        </div>
      </div>

      <goTop/>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import BMap from 'BMap'
    export default {

      mounted(){
        // 百度地图API功能
        var map = new BMap.Map("allmap");
        map.centerAndZoom(new BMap.Point(116.331398,39.897445),18);
        map.enableScrollWheelZoom(true);


        map.clearOverlays();
        var new_point = new BMap.Point(116.509686,39.817021);
        var marker = new BMap.Marker(new_point);  // 创建标注
        map.addOverlay(marker);              // 将标注添加到地图中
        map.panTo(new_point);
        map.enableScrollWheelZoom(true);

        var opts = {
          position : new_point,    // 指定文本标注所在的地理位置
          offset   : new BMap.Size(30, -30)    //设置文本偏移量
        }
        var label = new BMap.Label("北京笨爸爸科技有限公司", opts);  // 创建文本标注对象
        label.setStyle({
          color : "#000",
          fontSize : "12px",
          height : "20px",
          lineHeight : "20px",
          fontFamily:"微软雅黑"
        });
        map.addOverlay(label);


        var pt = new BMap.Point(116.509686,39.817021);
        var myIcon = new BMap.Icon("http://www.dadpat.com//app/earth/logo.png", new BMap.Size(40,140));
        var marker2 = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
        map.addOverlay(marker2);
      },

      methods:{
        toggleHeight(){
          var timeline = document.getElementById("timeline"); //获取iframe标签

          timeline.height = '510vw'
          document.querySelector('.uppng').style.display='none'
          document.querySelector('.downpng').style.display='block'
          timeline.style.transition = "all 2s"

          timeline.style.backgroundSize = '100% 100%'
          timeline.style.backgroundPosition = 'top'
          timeline.style.transition = "all 2.1s"
        },
        toggleH(){
          var timeline = document.getElementById("timeline"); //获取iframe标签

          timeline.height = 2600 +'rem'
          document.querySelector('.uppng').style.display='block'
          document.querySelector('.downpng').style.display='none'
          timeline.style.transition = "all 2s"
          timeline.style.backgroundSize = 'cover'
          timeline.style.backgroundPosition = '50%'
          timeline.style.transition = "all 2.1s"


        }

      },

      computed: {
        ...mapState(['language'])
      },
    }

</script>

<style scoped>
  @import "../../../static/css/timeline.css";
  body, html{width: 100%;height: 100%;margin:0;font-family:"微软雅黑";}
  #allmap{height:100%;width:100%;}
  .pic_us_1{
    width: 100%;
    margin-top: 5.7vw;
    box-sizing: border-box;
    padding: 0  10vw 10vw 0 ;
  }
  .pic_us_1 img{
    width: 100%;
  }
  .pic_us_2{
    width: 100%;
  }
  .pic_us_2 img{
    width: 100%;
  }
  #timeline{
    background:url(./bgtime.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
</style>
