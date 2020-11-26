<template>
  <div class="headerNav container">
    <div class="head-top">
      <div class="logo left valign-wrapper"><a href=""></a></div>
      <div class="top-right right valign-wrapper">
        <a href="">回旧版</a>
        <span></span>
        <a href="">加入收藏</a>
        <span></span>
        <a href="">设为首页</a>
      </div>
      <!--搜索-->
      <div class="search right input-field valign-wrapper"> 
        <a href="#" class="option">全部<i class="material-icons right" style="margin:0;">arrow_drop_down</i></a>
        <div class="input-field"><input type="search" placeholder="请输入您要查找的内容"></div>
        <i class="material-icons right">search</i>
      </div>
    </div>
    <div class="divider"></div>
  </div>
</template>

<script>
export default {
  name: "headerNav",
};
</script>

<style lang="less" scoped>
.head-top {
  height: 135px;
}
.head-top > div {
  height: 100%;
}
//logo
.head-top > .logo > a {
  display: block;
  width: 345px;
  height: 104px;
  background: url("~@assets/images/logo.png");
}
//搜索
.head-top > .search{
  width: 300px;
  height: 41px;
  margin-top: 42px;
  margin-right: 50px;
  background-color: #F1F1F1;
  border-radius:2px;
  >.input-field{
    margin-left: 5px;
    >input{
      width: 182px;
      padding: 0;
    }
  }
  >i.right{
    cursor:pointer;
  }
  >a.option{
    display:inline-block;
    margin-left: 5px;
    color: black;
  }
}
.top-right{
  >a{
    font-size: 15px;
    color: #A2A2A2;
  }
  >span{
    display: inline-block;
    width: 1px;
    height: 13px;
    margin: 0 12px;
    border-right: 1px solid #ECECEC;
  }
}
</style>