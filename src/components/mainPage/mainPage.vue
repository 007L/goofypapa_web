<template>
    <div class="mainPage">
      <header>
        <div class="logo">
          <img class="lookweixin" src="./logo.png" alt="">
          <div class="weixin" >
            <img  src="./benbaba.jpg" alt="" style="width: 100%;display: block">
          </div>
          <a name="goTop"></a>
        </div>

        <nav style="font-family: 微软雅黑">
          <el-dropdown>
            <span class="el-dropdown-link">
              <router-link  to="/">{{$t('route.homepage')}}</router-link>
            </span>
          </el-dropdown>

          <el-dropdown>
            <span class="el-dropdown-link">
              <router-link to="/goods">{{$t('route.product')}}</router-link>
            </span>
            <el-dropdown-menu slot="dropdown">

              <router-link to="/goodwanjugu" style="color: #fff">
                <el-dropdown-item>
                  {{$t('homepage.dadpat')}}
                </el-dropdown-item>
              </router-link>
              <router-link to="/good_huiben" style="color: #fff">
                <el-dropdown-item divided>
                  {{$t('route.Picture_books')}}
                </el-dropdown-item>
              </router-link>
              <router-link to="/babacaicai" style="color: #fff">
                <el-dropdown-item divided>
                  {{$t('homepage.Papa_guess')}}
                </el-dropdown-item>
              </router-link>
              <router-link to="/Childbackpack" style="color: #fff">
                <el-dropdown-item divided>
                  {{$t('homepage.Childbackpack')}}
                </el-dropdown-item>
              </router-link>


            </el-dropdown-menu>
          </el-dropdown>

          <el-dropdown>
            <span class="el-dropdown-link">
              <router-link @click="toggleShow"  to="/animals">{{$t('route.animal')}}</router-link>
            </span>
            <!--<el-dropdown-menu slot="dropdown">-->
              <!--<el-dropdown-item >没有腿的动物</el-dropdown-item>-->
              <!--<el-dropdown-item divided>两条腿的动物</el-dropdown-item>-->
              <!--<el-dropdown-item divided>四条腿的动物</el-dropdown-item>-->
              <!--<el-dropdown-item divided>多条腿的动物</el-dropdown-item>-->
            <!--</el-dropdown-menu>-->
          </el-dropdown>

          <el-dropdown>
          <span class="el-dropdown-link">
            <router-link to="/lesson">{{$t('route.Child_behavior_analysis')}}</router-link>
          </span>
            <!--<el-dropdown-menu slot="dropdown" display="block">-->
              <!--<el-dropdown-item >实验室</el-dropdown-item>-->
              <!--<el-dropdown-item divided>课程</el-dropdown-item>-->
            <!--</el-dropdown-menu>-->
          </el-dropdown>

          <el-dropdown>
          <span class="el-dropdown-link">
            <router-link to="/psychologylesson">{{$t('route.The_experiment')}}</router-link>
          </span>
            <!--<el-dropdown-menu slot="dropdown" display="block">-->
              <!--<el-dropdown-item >第一季</el-dropdown-item>-->
              <!--<el-dropdown-item divided>第二季</el-dropdown-item>-->
            <!--</el-dropdown-menu>-->
          </el-dropdown>

          <el-dropdown>
          <span class="el-dropdown-link">
            <router-link to="/aboutUs">{{$t('route.About_us')}}</router-link>
          </span>
            <!--<el-dropdown-menu slot="dropdown" display="block">-->
              <!--<el-dropdown-item >第一季</el-dropdown-item>-->
              <!--<el-dropdown-item divided>第二季</el-dropdown-item>-->
            <!--</el-dropdown-menu>-->
          </el-dropdown>

          <el-dropdown  class='international' @command="handleSetLanguage">
            <div>
              <img src="./lang.png" alt="" class='international-icon' icon-class="language">
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item divided command="zh" :disabled="language==='zh'">中文</el-dropdown-item>
              <el-dropdown-item divided command="en" :disabled="language==='en'">English</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

          <div class="sidelogin">
            <div class="login" v-if="username">
              <a @click="loginOut">{{$t('route.Sign_in')}}&nbsp/</a>
              <router-link to="/client">&nbsp个人中心</router-link>
            </div>
            <div class="login" v-else>

              <router-link to="/login">{{$t('route.Sign_in')}}&nbsp/</router-link>
              <router-link to="/login">&nbsp{{$t('route.Sign_up')}}</router-link>
            </div>
          </div>




        </nav>
      </header>
      <transition :name="transitionName" mode="out-in">
        <router-view class="transitionBody"></router-view>
      </transition>
    </div>
</template>
<script>
  import {getStore,removeStore} from '../../common/utils/storageUtil'
  import {mapState} from 'vuex'
    export default {
        data () {
            return {
              username:getStore('user'),
              isShow:false,
              transitionName:''
            }
        },

      mounted(){
        $(".logo").mouseenter(function(){
          $(".weixin").slideDown();
          stop();
        }).mouseleave(function(){
          $(".weixin").slideUp();
          stop();
        });
      },
      methods:{
        loginOut(){
          removeStore('user')
          this.$router.push({
            path: '/login'
          });
          window.location.reload()
        },
        toggleShow(comment){
          if(this.refs.animal){
//              this.refs.animal.
          }
        },
        handleSetLanguage(lang) {
          this.$i18n.locale = lang
          this.$store.dispatch('setLanguage', lang)
          this.$message({
            message: 'switch language success',
            type: 'success'
          })
        }
      },

      computed: {
        ...mapState(['language'])
      },

      watch: {//使用watch 监听$router的变化
        $route(to, from) {
          //如果to索引大于from索引,判断为前进状态,反之则为后退状态
          if(to.meta.index > from.meta.index){
            //设置动画名称
            this.transitionName = 'transitionLeft';
          }else{
            this.transitionName = 'transitionRight';
          }
        }


      }


    }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .mainPage
    height 100%
    &>header
      width 100%
      background-color: #fff;
      .logo
        position relative
        .lookweixin
          position: absolute;
          top: .5vw;
          z-index: 300;
          left: 20%;
          width: 5vw;
          height: 2.633vw;
        .weixin
          width 50px
          height 50px
          display none
          position absolute
          top 27px
          left 19%
          z-index 800
          box-shadow:0.1vw 0.2vw 0.3vw 0 rgba(0,0,0,0.1), 0.1vw 0.2vw 0.3vw 0 rgba(0,0,0,.1);

      &>nav
        width: 73%;
        height: 3.667vw;
        line-height: 2.833vw;
        margin-left: 25%;

      .el-select .el-input
        width: 130px;

      .input-with-select .el-input-group__prepend
        background-color: #fff;



      .el-dropdown
        margin-left  3vw
        &>span
          &>a
            font-size 6px
            color #000000
          &>a:hover
            color #919293
        &>el-dropdown-menu
          position absolute !import
          top 0px !import
      .el-carousel__item h3
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
        .el-carousel__item:nth-child(2n)
          background-color: #99a9bf;
        .el-carousel__item:nth-child(2n+1)
          background-color: #d3dce6;
      .sidelogin
        position relative
        .login
          line-height: 2.433vw;
          position: absolute;
          right:  0.666vw;
          top: -2.5vw;
          &>a
            font-size 6px
            color #000000
            float left
          &>a:hover
            color #919293



  .transitionBody{
    transition: all .8s ease; /*定义动画的时间和过渡效果*/
  }


  .transitionLeft-leave-active,
  .transitionRight-enter {
    opacity 0
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100%, 0);
  }
  .transitionLeft-enter,
  .transitionRight-leave-active {
    opacity 0
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
    /*当左滑进入右滑进入过渡动画*/
  }

  .international-icon {
    font-size: 22px;
    cursor: pointer;
    vertical-align: -10%!important;
  }
  .el-dropdown{
    color:#5a5e66;
  }
  .international-icon{
    width 1rem;

  }
</style>
