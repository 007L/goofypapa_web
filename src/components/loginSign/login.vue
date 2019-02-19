<template>
  <div class="loginvue">
    <div class="htmleaf-container">
      <header class="htmleaf-header">
        <div class="htmleaf-links"></div>
      </header>
      <div style="
            margin-left: 27.5%;
            width: 45%;
            display: flex;
            border-radius: 2%;"
            class="outside">
        <div style="float: left;width: 40%;margin-left: 11%">
          <img src="./login_pic_left.png" alt="" style="width: 95%;margin-top: 42%;">
        </div>
        <div class="login-wrap">
          <div class="login-html">
            <input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab">登录</label>
            <input id="tab-2" type="radio" name="tab" class="sign-up"><label for="tab-2" class="tab">注册</label>
            <div class="login-form">

              <el-form class="sign-in-htm" :model="loginForm" :rules="rules" label-width="100px" ref="loginForm">
                <el-form-item  class="group" prop="authCode">
                  <label for="user" class="label" >用户名</label>
                  <el-input  lable="用户名" id="user" type="text" class="input" placeholder="请输入用户名" v-model="loginForm.authCode"></el-input>
                </el-form-item>
                <el-form-item class="group" prop="authCredential">
                  <label for="pass" class="label">密码</label>
                  <el-input  id="pass" type="password" class="input"  placeholder="请输入密码"  v-model="loginForm.authCredential"></el-input>
                </el-form-item>
                <!--<div class="group">-->
                <!--<input id="check" type="checkbox" class="check" checked>-->
                <!--<label for="check"><span class="icon"></span> 记住密码</label>-->
                <!--</div>-->
                <el-form-item class="group">
                  <input type="submit" class="button" value="登录" @click="submitForm('loginForm')">
                </el-form-item>
                <div>
                  <img  @click="wxlogin" src="./xq_icon_share_wechat.png" alt="">
                </div>
                <div class="hr"></div>
                <div class="foot-lnk">
                  <a href="#forgot">笨爸爸</a>
                </div>
              </el-form>

              <Register class="sign-up-htm" ></Register>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer>
    </footer>
  </div>
</template>
<script>
  //引入验证组件
  import 'vue-router'
  import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item";
  import Register from '../register/Register.vue'
  import {setStore} from '../../common/utils/storageUtil'
  export default {
    inject:['reload'],

    data(){
      return {
//        activeName: 'login', //选项卡
        loginForm: {        //表单v-model的值
          authCode: '',
          authCredential: ''
        },
        rules: { //验证规则
          authCode: [
            { required: true, message: '用户名不能少', trigger: 'blur'},
            { min: 6, max: 16, message: '用户名在6到16位之间', trigger: 'blur'}
          ],
          authCredential: [
            { required: true, message: '请输入密码', trigger: 'blur'}
          ]
        },

      }
    },

    mounted(){

    },

    methods: {
//      resetForm(formName){
//        this.$refs[formName].resetFields();
//      },

      submitForm(formName){
        var that = this
        console.log(this.loginForm)
        this.$refs[formName].validate((valid)=>{
          if(valid){ //验证通过

            $.ajax({
              type: "post",
              url: "http://www.dadpat.com/user/auth/login.do",
              dataType: "jsonp",
              data:that.loginForm,
              async: true,
              success:(data)=> {
                if(data.success){
                    console.log(123456)
                  this.$router.push({
                    path: '/client'
                  });
                    console.log(data)
                  setStore('user',data.data.userName);
                  this.reload()
                  // window.location.reload()
                }else{
                    this.$message.error(
                       '用户名或密码错误'
                    );

                }

              }
            });



//            api.userLogin(opt)
//              .then(({ data }) => {     //解构赋值拿到data
//                //账号不存在
//                if(data.info === false){
//                  this.$message({
//                    type: 'info',
//                    message: '账号不存在'
//                  });
//                  return ;
//                }
//                //账号存在
//                if(data.success){
//                  this.$message({
//                    type: 'success',
//                    message: '登录成功'
//                  })
//                  let token = data.token;
//                  let username = data.username;
//                  this.$store.dispatch('UserLogin', token);
//                  this.$store.dispatch('UserName', username);
//                  //如果用户手动输入"/"那么会跳转到这里来，即this.$route.query.redirect有参数
//                  let redirectUrl = decodeURIComponent(this.$route.query.redirect || '/');
//                  //跳转到指定的路由
//                  this.$router.push({
//                    path: '/client'
//                  });
//                }else{
//                  this.$message({
//                    type: 'info',
//                    message: '密码错误！'
//                  });
//                }
//              });


          }else{
            //验证不通过
            return false;
          }
        });
      },

      wxlogin(){
        $.ajax({
          type: "post",
          url: "http://127.0.0.1/wechat/website/getCodeUrl.do",
          dataType: "jsonp",
          data:{url:'http://127.0.0.1/weixin/website.auth'},
          async: true,
          success:(data)=> {
              console.log(data)
            if(data.success){
              console.log(123456)
//              window.location.href=''+ data.data;
              $.ajax({
                type: "post",
                url: "http://www.dadpat.com/weixin/website.auth",
                dataType: "jsonp",
                data:data.code,
                async: true,
                success:(data)=> {
                  console.log(data)
                }
              });
            }else{
              this.$message.error(
                '用户名或密码错误'
              );

            }

          }
        });
      }
    },
    components: {
      ElFormItem,
      Register
    }
  }
</script>
<style scoped lang="stylus" >
  @import "../../../static/css/normalize.css"
  @import "../../../static/css/default.css"
  @import "../../../static/css/styles.css"
  .loginvue
    background-color: #66c9ff;
    position absolute
    top 27.50px
    left 0px
    right 0px
    bottom 0px
    .el-form-item__content
      margin-left 0px !important
      .el-input__inner
        height 1.63vw
    &>footer
      width 100%
      height 35%
      position absolute
      background-image: url(./bj_pic_cloud_bot.png);
      background-repeat:no-repeat;
      background-size:100%;
      bottom 0px
      z-index 1

</style>
