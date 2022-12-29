<template>
  <div class="login-box">
    <NavBar>
      <template #title>
        <div>
          {{ isShowLogin==false?'登录':'注册' }}
        </div>
      </template>
    </NavBar>
    <img src="../../assets/logo.png" alt="" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="loginName"
        label="手机号"
        placeholder="手机号"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"  
        placeholder="密码"
        autocomplete
      />
     <section class="Code-box">
       <van-field
        v-model="QR"
        name="验证码"
        label="验证码"  
        placeholder="验证码"
      />
      <span @click="createCode">{{ checkCode }}</span>
     </section>
      <div class="title" @click="ChangeStatus">👉{{ isShowLogin?'已有账号？立即登录':'立即注册' }}</div>
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">{{ isShowLogin==false?'登录':'注册' }}</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import  NavBar from '../../components/NavBar.vue';
import {register,login } from '../../api/index.js'
export default {
  name: "view-login",
  components: {
    NavBar
  },
 data() {
    return {
      username: '',//收集手机号
      password: '',//收集密码
      checkCode: '',//底部提示验证码
      QR:'', //收集验证码
      isShowLogin: false,//控制是注册还是登录
      isQR:false,//验证码是否通过
    };
  },
  methods: {
    createCode() {
      let code = "";
      const codeLength = 4; //验证码的长度  
      const random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //随机数  
      for(let i = 0; i < codeLength; i++) { //循环操作  
        let index = Math.floor(Math.random() * 36); //取得随机数的索引（0~35）  
        code += random[index]; //根据索引取得随机数加到code上  
      }
      this.checkCode = code; //把code值赋给验证码  
    },
    // 登录注册按钮
    onSubmit(values) {
      // 核对验证码是否正确
      if (this.checkCode == this.QR.toUpperCase()) {
        if (this.isShowLogin == false) {
          // 登录
          login(this.username, this.password).then(res => { 
            console.log(res)
            if (res.resultCode === 200) {
              localStorage.setItem('xftoken', res.data)
              localStorage.setItem('username',this.username)
              this.$toast('登录成功')
              this.$router.push('/home')
            }
          })
        } else if (this.isShowLogin == true) {
          // 注册
          register(this.username, this.password).then(res => {
            if (res.resultCode === 500) {
              this.$toast('用户名已存在')
              this.createCode()
            }
            else if (res.resultCode === 200) {
              this.$toast('注册成功')
              this.createCode()
            } 
          })
        }
      }
      else {
        this.$toast('验证码不正确')
        this.createCode()
      }
    },
    ChangeStatus() {
      this.isShowLogin=!this.isShowLogin
    }
  },
  created() { 
    this.createCode()
  }
};
</script>

<style scoped lang="less">
.login-box{
  width: 100%;
  height: 100%;
  text-align: center;
  img{
    width: 100px;
    padding: 100px;
  }
  .title{
    text-align: left;
    margin-left: 20px;
    margin-top: 15px;
    font-size: 16px;
    color: #1989fa;
  }
}
.Code-box{
  display: flex;
  align-items: center;
  span{
    margin-right: 50px;
  }
}
</style>