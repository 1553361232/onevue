<template>
  <!-- 广告图 -->
  <div class="adversiting">
      
    <img class="banner1" src="../assets/img/banner1.jpg" />
    
    <div class="banner-message">
        <div class="banner-logo">
            <img class="banner-logo-img" src="../assets/img/banner_logo.jpg">
        </div>
      <h6>一点车
          <a href="#" class="focus"><i class="el-icon-plus"></i><span>关注</span></a>
      </h6>
      <el-row class="fans">
        <el-col :span="2">
          <div class="grid-content bg-purple-dark"><span><strong class="fans-strong">875</strong>粉丝</span></div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple-dark"><span><strong class="fans-strong">238</strong>作品</span></div>
        </el-col>
      </el-row>
      <p class="banner-p">一点车，让您懂一点车</p>
    </div>
      <!-- 主要内容 -->
    <div class="main">
      <el-row>
        <el-col :span="16">
          <div class="grid-content bg-purple-dark">
            <!-- 导航栏 -->
            <mainLeft />
            <!-- 导航内容 -->
            <MainContent />
            <MainContent2 />
          </div>
        </el-col>
    <!-- 主要内容结束 -->
        <!-- 右侧标签 -->
        <el-col :offset="1" :span="7">
           <RightContent/>
        </el-col>
      </el-row>
    </div>
  </div>
 

</template>
<style scoped>
.adversiting {
  width: 100%;
  padding-top: 24px;
  font-size: 0px;
}
.banner1 {
  width: 12rem;
  height: 2.4rem;
}
.banner-message {
    position: relative;
  width: 12rem;
  height: 1.65rem;
  margin: 0 auto;
  padding-top: 0.21rem;
  padding-left: 1.79rem;
  box-sizing: border-box;
  background-color: #ffffff;
  
}

.banner-message > h6 {
  width: 7.84rem;
  text-align: left;
  font-size: 0.24rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.focus{
    width: 0.8rem;
    height: 0.3rem;
    display: inline-block;
    background-color: rgb(255, 131, 0);
    color: #ffffff;
    font-size: 0.16rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.focus:hover{
    background: #ff7423;
}
.fans{
    margin: 0.21rem 0 0;
    font-size: 0.14rem;
    text-align: left;
}
.fans-strong{
    font-size: 0.18rem;
    margin-right: 0.08rem;
}
.banner-p{
    margin: 0.18rem 0 0.23rem;
    font-size: 0.14rem;
    text-align: left;
    color: #999999;
}
.banner-logo{
    width: 1.32rem;
    height: 1.32rem;
    border-radius: 50%;
    position: absolute;
    top: -0.6rem;
    left: 0.255rem;
    box-shadow: 0 7px 10px rgba(51,51,51,.1);
}
.banner-logo-img{
    width: 1.32rem;
    height: 1.32rem;
    border-radius: 50%;
    border: 2.5px solid #ffffff;
}
</style>

<script>
import mainLeft from '@/components/mainLeft'
import MainContent from '@/components/MainContent'
import MainContent2 from '@/components/MainContent2'
import RightContent from '@/components/RightContent'
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components:{
    mainLeft,
    MainContent,
    MainContent2,
    RightContent
  }
};
</script>
