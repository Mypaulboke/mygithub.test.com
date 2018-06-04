<template>
  <div class="list">
    <my-header></my-header>
    <div class="container wrap">
      <about></about>
      <my-aside></my-aside>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
import MyHeader from '../components/global/MyHeader.vue'
import MyAside from '../components/global/MyAside.vue'
import About from '../components/global/About.vue'
import MyFooter from '../components/global/MyFooter.vue'
export default {
  components: {
    MyHeader,
    MyAside,
    About,
    MyFooter
  }
}
</script>