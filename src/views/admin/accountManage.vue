<template>
  <div class="admin">
    <admin-aside></admin-aside>
    <div class="admin-content">
      <div class="article">
        <table>
          <thead>
            <tr>
              <th>用户名</th>
              <th>昵称</th>
              <th>简介</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in data" :key="index">
              <td>
                {{item.user}}
              </td>
              <td>{{item.nickname}}</td>
              <td>{{item.intro}}</td>
              <td><a @click="del(item)">删除</a></td>
            </tr>
          </tbody>
        </table>
      
      </div>
    </div>
  </div>
</template>
<script>
import AdminAside from '../../components/admin/AdminAside.vue'
export default {
  name: 'Account',
  title () {
    return '管理后台|vueblog'
  },
   data () {
    return {
      data: ''
    }
  },
  components: {
    AdminAside
  },

  mounted (){
    this.account()
  },
  watch: {
    // 路由变化，重新获取文章列表，如分页操作
    $route (to, from) {
       this.account();
    }
  },
  methods: {
    // 获取所有文章，包括草稿和已发布
    account () {
        this.axios.post('/account').then((result) => {
          if (result.data.code === 200) {
              this.data = result.data.result;
          } else {
            this.$toast(result.data.message)
          }
        })
       },
    // 传入文章的id,删除文章
    del (item) {
      const name = item.user
      this.axios.delete(`/deleteAccount?name=${name}`).then((data) => {
        this.$toast(data.data.message)
        if (data.data.code === 200) this.account()
      })
    },
    // 编辑文章
    edit (item) {
      this.$router.push({ name: 'publish', params: { id: item.date } })
    }
  }
}
</script>
<style scoped lang="scss">
.article table th:nth-child(1), .article table td:nth-child(1){
  width:10%;
}
</style>