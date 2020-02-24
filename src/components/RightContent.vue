<template>
  <div class="rightBox">
    <div class="rightContent">
      <i class="rightContent-icon"></i>
      <span class="rightContent-title">一周热门车型</span>
    </div>
    <el-row class="rightContent-nav">
      <el-col :span="12">
        <a class="nav-title" href="#">
          现代北京ix25
        </a>
      </el-col>
      <el-col :span="12">
        <a class="nav-title" href="#">
          现代北京ix25
        </a>
      </el-col>
    </el-row>
    <el-row class="rightContent-nav">
      <el-col :span="12">
        <a class="nav-title" href="#">
          现代北京ix25
        </a>
      </el-col>
      <el-col :span="12">
        <a class="nav-title" href="#">
          现代北京ix25
        </a>
      </el-col>
    </el-row>
  </div>
</template>
<style scoped>
.rightBox {
  background-color: #ffffff;
}
.rightContent {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #595655;
  font-size: 0.14rem;
  margin: 0.2rem 0 0;
  border-bottom: 1px solid #eee;

  height: 0.55rem;
}
.rightContent-icon {
  width: 0.04rem;
  height: 0.3rem;
  display: inline-block;
  background-color: #ff8b47;
  margin-right: 0.2rem;
}
.rightContent-title {
  font-size: 0.18rem;
  color: #333333;
  display: inline-block;
}
.rightContent-nav {
  padding: 0.24rem 0.24rem 0.11rem;
  box-sizing: border-box;
  
}
.nav-title {
  font-size: 0.16rem;
  color: #666666;
  display: block;
    
  
}
</style>