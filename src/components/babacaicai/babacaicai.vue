<template>
 <div style="width: 100%">

   <section id="wrap" >

     <section class="content">

       <div class="swiper-container gallery-top">
         <div class="swiper-wrapper">
           <div class="swiper-slide">
             <img class="slideImage"  :src="'./static/img/'+$t('caicai.bg_1')" alt="">

           </div>
           <div class="swiper-slide">
             <img class="slideImage"  :src="'./static/img/'+$t('caicai.bg_2')" alt="">

           </div>
           <div class="swiper-slide">
             <img class="slideImage"  :src="'./static/img/'+$t('caicai.bg_3') " alt="">

           </div>
           <div class="swiper-slide">
             <img class="slideImage"  :src="'./static/img/'+$t('caicai.bg_4')" alt="">

           </div>
           <div class="swiper-slide">
             <img class="slideImage"  :src="'./static/img/' +$t('caicai.bg_5') " alt="">
           </div>
         </div>
         <div class="swiper-pagination"></div>
       </div>


     </section>

   </section>

   <goTop/>
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
