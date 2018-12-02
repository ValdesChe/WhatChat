<template>
  <div class="my-app" >
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name:"MyApp",
    data() {
      return {
        message: ""
      }
    }

  }
</script>
<style>
  .my-app{
    height: 100%;
    overflow: hidden;
  }
</style>
