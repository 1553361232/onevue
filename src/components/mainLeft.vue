<template>
    <div class="main-left">
   <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">全部</el-menu-item>
  <el-menu-item index="2">文章</el-menu-item>
  <el-menu-item index="3">视频</el-menu-item>
  <el-menu-item index="4">车单</el-menu-item>
  <el-menu-item index="5">音频</el-menu-item>
  <el-menu-item index="6">专辑</el-menu-item>
</el-menu>

</div>
 
</template>

<style>
.el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover{
    color: #ff7423;
}
.el-menu--horizontal>.el-menu-item.is-active{
    border-bottom: 2px solid #ff7423;
    color: #ff7423;

}
.main-left{
    width: 8rem;
    margin-top: 0.2rem;
}
</style>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>