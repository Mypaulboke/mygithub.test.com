<template>
  <div class="login">
    <h4 class="title">管理员注册</h4>
    <div class="form">
      <input type="text" placeholder="请输入用户名" name="user" v-model="user">
      <input type="password" placeholder="请输入密码" name="pass" v-model="pass" @keyup.enter="login">
      <button type="button" @click="login">注册</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Register',
  data () {
    return {
      user: '',
      pass: '',
      member_id:''
    }
  },
  methods: {
    login () {
      this.axios.post('/register', {
        'user': this.user,
        'pass': this.pass,
        'member_id':Number(this.member_id) || Date.now()
      }).then((result) => {
        if (result.data.code === 200) {
           this.$toast('注册成功！');
            this.$router.push({
            name: 'login'
          })
        } else {
          this.$toast(result.data.message)
        }
      })
    }
  }
}
</script>