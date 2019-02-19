
<template>
 <div>
   <section id="wrap" >

     <section class="content">

       <div class="swiper-container gallery-top">
         <div class="swiper-wrapper">
           <div class="swiper-slide">
             <img class="slideImage" :src="'./static/img/' +$t('goods.pic_1')" alt="">
             <router-link to="/goodwanjugu" class="aheight"  style="
             display: block;
             width: 538px;
             cursor: pointer;
             position: absolute;
             top: 0;
             left: 20%;
             cursor: pointer">

             </router-link>
           </div>
           <div class="swiper-slide">
             <img class="slideImage"  :src="'./static/img/' +$t('goods.pic_2')" alt="">
             <router-link class="aheight" to="/babacaicai" style="
             display: block;
             width: 538px;
             cursor: pointer;
             position: absolute;
             top: 0;
             left: 20%;
             cursor: pointer">

             </router-link>
           </div>
           <div class="swiper-slide">
             <img class="slideImage"  :src="'./static/img/' +$t('goods.pic_3') " alt="">
             <router-link to="/good_huiben" class="aheight" style="
             display: block;
             width: 538px;
             cursor: pointer;
             position: absolute;
             top: 0;
             left: 20%;
             cursor: pointer">

             </router-link>
           </div>
           <div class="swiper-slide">
             <img class="slideImage"  :src="'./static/img/' +$t('goods.pic_4') " alt="">
             <router-link to="/Childbackpack" class="aheight" style="
             display: block;
             width: 538px;
             cursor: pointer;
             position: absolute;
             top: 0;
             left: 20%;
             cursor: pointer">

             </router-link>
           </div>

         </div>
         <div class="swiper-pagination"></div>
       </div>

     </section>

   </section>
 </div>
</template>
<script>
  import Swiper from "swiper"
  export default {
    data () {
      return {

      }
    },

    mounted(){


      var $content = $("#wrap>.content>.swiper-container");
      var $aheight = $(".aheight");

      $content.height(document.documentElement.clientHeight-50 +'px');
      $aheight.height(document.documentElement.clientHeight-50 +'px');

      $(".slideImage").css({
        width:"100%",
        height:"100%"
      });

      $(".swiper-pagination").css({
        top:document.documentElement.clientHeight*.45 +"px"
      });
      var galleryTop = new Swiper('.gallery-top', {
        direction: 'vertical',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        mousewheel:true,
        speed:500
      })
    },
    methods:{
      gotoWanjugu(){
          console.log(11111)
          this.$router.push('/goodwanjugu')
      }

    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
