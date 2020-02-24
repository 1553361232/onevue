<template>
  <div id="app">
    <HelloWorld/>
    <transition >
      <router-view class="Router"></router-view>
    </transition>
  </div>
</template>


<script>
import HelloWorld from '@/components/HelloWorld'
export default {
  name: "App",
  components:{
    HelloWorld
  }
};
</script>

<style>
.main {
  width: 12rem;
  height: 12rem;
  margin: 0 auto;
}
#app {
  font-family: "Hiragino Sans GB";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
