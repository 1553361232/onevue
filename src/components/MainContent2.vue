<template>
  <!-- 主要内容 -->
  <div class="main-content">
    <ImgContent2/>
    <!-- 底部评论 -->

    <el-row class="browse" type="flex" align="middle">
      <el-col :span="1">
        <div class="grid-content bg-purple-dark">
          <a href="#">
            <img class="browse_logo" src="../assets/img/banner_logo.jpg" />
          </a>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple-dark">
          <a href="#">
            <span class="browse-title">一点车</span>
          </a>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple-dark">
          <a class="guanzhu" href="#">
            <i class="el-icon-plus"></i>
            <span>关注</span>
          </a>
        </div>
      </el-col>

      <el-col :offset="13" :span="2" class="commentBox">
        <div class="grid-content bg-purple-dark">
          <a class="comments" href="#">
            <span>18</span>浏览
          </a>
        </div>
      </el-col>
      <el-col :span="1" class="xian commentBox">
        <div class="grid-content bg-purple-dark"></div>
      </el-col>
      <!-- <span class="xian commentBox"></span> -->
      <el-col :span="3" class="commentBox">
        <div class="grid-content bg-purple-dark">
          <a class="comments" href="#">
            <span>10-10 16:10</span>
          </a>
        </div>
      </el-col>

      <el-col :offset="10" :span="3" class="commentBox-show">
        <i class="el-icon-chat-dot-square"></i>
        <a href="#">
          <span>评论</span>
        </a>
      </el-col>
      <el-col :span="3" class="commentBox-show">
        <i class="el-icon-thumb"></i>
        <a href="#">
          <span>点赞</span>
        </a>
      </el-col>
      <el-col :span="3" class="commentBox-show">
        <i class="el-icon-star-on"></i>
        <a href="#">
          <span>收藏</span>
        </a>
      </el-col>
    </el-row>
    <!-- 底部评论 end -->
  </div>
  <!-- 主要内容 end -->
</template>
<style>
.main-content {
  width: 100%;
  box-sizing: border-box;
  padding: 0.24rem 0.24rem 0.16rem 0.24rem;
  background-color: #ffffff;
  margin: 0.24rem 0 0 0;

  font-size: 0.14rem;
}
.main-content:hover .commentBox {
  display: none;
}
.commentBox-show {
  display: none;
}
.main-content:hover .commentBox-show {
  display: block;
}
.introduceTop {
  text-align: left;
  overflow: hidden;
}
.introduceTop > a {
  color: #333333;
}
.car {
  width: 2.38rem;
  height: 1.31rem;
  margin-top: 0.2rem;
}
.small_tag {
  display: inline-block;
  font-size: 0.12rem;
  color: #999999;
  margin-top: 0.2rem;
}
.browse {
  margin-top: 0.16rem;
}
.carcontent {
  padding-bottom: 0.2rem;
  border-bottom: 1px solid #eee;
}
.browse_logo {
  width: 0.32rem;
  height: 0.32rem;
  border-radius: 50%;
}
.browse-title {
  color: #333333;
  font-size: 0.14rem;
}
.guanzhu {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0.5rem;
  height: 0.24rem;
  background-color: #ff8b47;
  color: #ffffff;
  margin-top: 0.04rem;
  font-size: 0.12rem;
}
.guanzhu:hover {
  background-color: #ff7423;
}
.comments {
  font-size: 0.14rem;
  color: #999999;
}
.xian {
  width: 0.01rem;
  height: 0.1rem;
  background: #eee;
  display: inline-block;
  margin: 0 12px;
}
.commentBox-show:hover i {
  color: #ff7423;
}
</style>
<script>
import ImgContent2 from "@/components/ImgContent2";
export default {
  name: "MainContent2",
  data() {
    return {};
  },
  components: {
    ImgContent2
  }
};
</script>