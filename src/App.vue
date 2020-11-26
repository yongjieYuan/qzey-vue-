<template>
  <div id="app">
    <div id="nav">
      <HeaderNav/>
      <NavBar/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav'
import NavBar from "@/components/NavBar"
export default{
  name:'qzey',
  components:{
    HeaderNav,
    NavBar
  }
}
</script>

<style lang="less">
  .container{
    max-width: 1200px;
  }
</style>
