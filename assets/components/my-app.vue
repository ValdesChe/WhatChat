
<template>
  <div class="my-app" >
    <router-view></router-view>
  </div>
</template>

<script>
  import addEvent from './utils/resizeCapture'

  export default {
    name:"MyApp",
    data() {
      return {
        message: ""
      }
    },
    mounted:()=>{
      addEvent(window, "resize", function(event) {
        console.log(window.innerHeight)
        document.querySelector("body").style.height =  window.innerHeight + "px"
        document.querySelector(".my-app").style.height =  window.innerHeight + "px"
        document.querySelector(".el-asider").style.height =  "100%"
        document.querySelector(".el-body").style.height =  "100%"
      });
    }

  }
</script>
<style>
  .my-app{
    height: 100%;
    overflow: hidden;
  }
</style>
