<template>
    <div>
      <el-form class="sign-up-htm"  :model="regForm" :rules="rules" label-width="100px" ref="regForm">
        <el-form-item class="group" prop="authCode">
          <label for="user1" class="label" >用户名</label>
          <el-input id="user1" type="text" class="input" placeholder="请输入用户名" v-model="regForm.authCode"></el-input>
        </el-form-item>
        <el-form-item class="group" prop="authCredential">
          <label for="pass1" class="label">密码</label>
          <el-input id="pass1" type="password" class="input" data-type="password" placeholder="请输入密码" v-model="regForm.authCredential" ></el-input>
        </el-form-item>
        <el-form-item class="group" prop="checkPassword">
          <label for="pass1-1" class="label">确认密码</label>
          <el-input id="pass1-1" type="password" class="input" data-type="password" placeholder="请确认密码" v-model="regForm.checkPassword" ></el-input>
        </el-form-item>
        <el-form-item class="group">
          <input type="submit" class="button" value="注册" @click="submitForm('regForm')">
        </el-form-item>
        <div class="hr"></div>
        <div class="foot-lnk">
          <a for="tab-1">已经注册?</a>
        </div>
      </el-form>
    </div>
</template>

<script>
import 'vue-router'
export default {
    data(){
        //自定义验证规则
        let validatePass1 = (rule, value, callback) => {
            // 6-16位, 数字, 字母, 字符至少包含两种, 同时不能包含中文和空格
            let reg = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{6,16}$/;
            if(!reg.test(value)){
                callback(new Error('密码长度需6-16位，且包含字母和字符'));
            }else{
                callback();
            }
        };
//        验证密码是否重复
        let validatePass2 = (rule, value, callback) => {
            if(value !== this.regForm.authCredential){
                callback(new Error('两次密码输入不一致'));
            }else{
                callback();
            }
        };

        return {
            regForm: {
              authCode: '',
              authType:"mobile" &&"loginName" &&"email",
              authCredential: '',
              checkPassword: '',
            },

            rules: {
              authCode: [
                    { required: true, message: '用户名不能少', trigger: 'blur'},
                    { min: 6, max: 16, message: '用户名在6到16位之间', trigger: 'blur'}
                ],
              authCredential: [
                    { required: true, message: '请输入密码', trigger: 'blur'},
                    { validator: validatePass1, trigger: 'blur'}
                ],
              checkPassword: [
                    { required: true, message: '请再次输入密码', trigger: 'blur'},
                    { validator: validatePass2, trigger: 'blur'}
                ]
            }
        }
    },
    methods: {

        submitForm(formName){
          this.$refs[formName].validate((valid)=> {
            if (valid) { //验证通过

              $.ajax({
                type: "post",
                url: "http://www.dadpat.com/user/auth/register.do",
                dataType: "jsonp",
                data: this.regForm,
                async: true,
                success: (data)=> {
                  if (data.success) {
                    console.log('注册成功')
//                    this.$router.push({
//                      path: '/login'
//                    });
                    this.$refs[formName].resetFields();
                    this.$message({
                      type: 'success',
                      message: '注册成功,请点击登录输入'
                    });
                  } else {
                    this.$message.error(
                      '用户名已存在'
                    );
                  }
                  const user = data
                  console.log(user)

                }
              });
//                    api.userRegister(this.regForm)
//                        .then(({ data }) => {
//                            if(data.success){
//                                this.$message({
//                                    type: 'success',
//                                    message: '注册成功'
//                                });
//                            }else{
//                                this.$message({
//                                    type: 'info',
//                                    message: '用户名已经存在'
//                                });
//                            }
//                        });
            } else {
              //验证不通过
              return false;
            }
          })
        }
    }
}
</script>

<style scoped lang="stylus">
  @import "../../../static/css/normalize.css"
  @import "../../../static/css/default.css"
  @import "../../../static/css/styles.css"
</style>
