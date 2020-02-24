<template>
<!-- 头部 -->
<header>
  <!-- 汽车之家顶部 -->
  <div class="topbar">
    <div class="padding-box">
     <img class="top_icon" src="../assets/img/autologo.png">
     </div>
  </div>
<!-- 汽车之家顶部 end -->
<!-- 头部导航 -->
  <div class="header">
    <div class="header-box">
      <router-link to="/"><img class="header-title-img" src="../assets/img/ic_chejiahao.png"></router-link>
    
    
    <ul  class="header-nav">
      <li @click="nav(index)"  v-for="(headertop,index) in headertops" :key="headertop">{{headertop}}</li>      
      <li><a href="#"><i class="el-icon-more" ></i></a></li>
      <li><a href="#"><i class="el-icon-menu" style="margin-right:5px"></i>全部车家号</a></li>
      <li><a href="#"><i class="el-icon-search" style="margin-right:5px"></i><span>搜索</span></a></li>
    </ul>
</div>
  </div>
  <!-- 头部导航 end -->
</header>
<!-- 头部 end -->
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      headertops:[]
    }
  },
  created(){
    var _this = this;
    // 获取头部地址
     var headerAPI = this.globalAPI.headerAPI;
     var getGlobalApi = this.globalAPI.getGlobalApi(this.globalAPI.localhost,this.globalAPI.proejct,headerAPI);
    //  axios请求
     this.axios.get(getGlobalApi).then(function(res) {
       var message = eval(res.data);
       var headertop = eval(message.data);
       for(let i=0;i<headertop.length;i++){
        var data = headertop[i].ydc_header_title;
         _this.headertops.push(data);
       }
      
       
    }).catch(function(error) {
      console.log(error);
    });

    // vue-resource请求
    // this.$http.get(getGlobalApi).then(function(res) {
    //   var message = eval(res.data);
    //     var data = eval(message.data);
    //     console.log(data);
    // }).catch(function(error) {
    //    console.log(error);
    //  });
  },
  methods:{
    nav(index){
      // 使用vue-router跳转到相应的页面去
      this.$router.push({path:`/homepage${index}`});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 汽车之家顶部 */
.padding-box{
    width: 80%;
    margin: 0 auto;
    height: 0.32rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.topbar{
    width: 100%;
    background-color: #333333;
    
}
.top_icon{
    width: 1.67rem;
    height: 0.14rem;
}
/* 汽车之家 end */

/* 头部导航 */
.header{
    width: 100%;
    background-color: #ffffff;
    font-size: 0.16rem;
    
}
.header-box{
   width: 80%;
   margin:0 10%;
   display: flex;
   align-items: center;

  
}
.header-title-img{
    width: 0.96rem;
    height: 0.34rem;
}
.header-nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 0.80rem;
    padding-left: 0.5rem;
}
.header-nav>li>a{
    color: #333333;
}
.header-nav>li>a:hover{
    color: #ff8b47;  
}


/* 头部导航 end */
</style>
