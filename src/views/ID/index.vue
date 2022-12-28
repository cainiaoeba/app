<template>
  <div>
    <NavBarVue>
      <template #title>
        <div>
          账号管理
        </div>
      </template>
    </NavBarVue>
    <ul>
      <li>
        <span>昵称</span>
        <p>{{ username }}</p>
      </li>
      <li>
        <span>个性签名</span>
        <p>随心所欲,丰富多彩</p>
      </li>
      <li>
        <van-field v-model="password" label="修改密码" placeholder="请输入更改后的密码" />
      </li>
    </ul>
    
    <section>
      <div class="btn" @click="sava">保存</div>
      <div class="btn" @click="logOff">退出登录</div>
    </section>
  </div>
</template>

<script>
import NavBarVue from '@/components/NavBar.vue';
import { info } from '../../api/index'
import md5 from 'js-md5'

export default {
  name: "ID",
  components: {
    NavBarVue
  },
  data() {
    return {
      username: localStorage.getItem('username'),
      password:''
    }
  },
  methods: {
    //保存更改密码
    sava() {
      const options = {
        introduceSign: "随新所欲，蜂富多彩",
        nickName: localStorage.getItem('username'),
        passwordMd5:md5(this.password)
      }
      info(options).then(res => {
        if (res.resultCode == 200) {
          this.$toast('更改密码成功')
        }
      })
    },
    //退出登录
    logOff() { 
      localStorage.clear()
      if (!localStorage.getItem('xftoken')) {
        this.$toast('已退出登录')
        setTimeout(() => {
          this.$router.push('/login')
        }, 1500);
      }
    }
  }
}
</script>

<style scoped lang="less">
ul{
  box-sizing: border-box;
  padding: 20px;
  font-size: 14px;
  li{
    display: flex;
    span{
      width: 100px;
      color: rgb(126, 124, 124);
    }
  }
  li:nth-child(1),li:nth-child(2){
    padding: 10px 16px;
    box-sizing: border-box;
  }
}
.btn{
  width: 300px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  background: #1baeae;
  color: #fff;
  margin: 20px auto;
  font-size: 14px;
}
</style>