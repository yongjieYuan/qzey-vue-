<template>
  <div class="navBar">
    <div class="divider"></div>
    <nav class="container nav-extended">
      <ul class="center tabs">
        <li class="tab"><router-link id="home" to="/">首页</router-link></li>
        <li class="tab"><router-link id="intro" to="/intro">医院概况</router-link></li>
        <li class="tab"><router-link id="depart" to="">科室介绍</router-link></li>
        <li class="tab"><router-link id="experts" to="">专家推荐</router-link></li>
        <li class="tab"><router-link id="tech" to="">医疗技术</router-link></li>
        <li class="tab"><router-link id="science" to="/science">科研教学</router-link></li>
        <li class="tab"><router-link id="person" to="">人事人才</router-link></li>
        <li class="tab"><router-link id="civi" to="">党建与文明</router-link></li>
        <li class="tab"><router-link id="discipline" to="">纪检监察</router-link></li>
        <li class="tab"><router-link id="guide" to="">就医指南</router-link></li>
        <li class="tab"><router-link id="sci-broadcast" to="">科普宣传</router-link></li>
        <li class="tab"><router-link id="download" to="">资料下载</router-link></li>
        <li class="tab"><router-link id="office-public" to="">院务公开</router-link></li>
        <li class="tab"><router-link id="board" to="">公告栏</router-link></li>
      </ul>
    </nav>
  </div>
</template>


<script>
  export default {
    name:"navBar",

  }
</script>

<style lang="less" scoped>
  nav{
    border: none;
    box-shadow: none;
  }
  .tab > a{
    font-size: 15px;
    color: #000000;
  }
</style>