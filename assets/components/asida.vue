<template>
  <el-aside width="404px">
    <!-- v-loading="loading" -->
    <div class="logo-container">
      <a href="" class="logo-icon" >
        <img class="svg-icon" :src="image_profile" />

      </a>
    </div>
    <img :src="image_profile" />

    <div class="search-container">
      <el-input
        placeholder="      Search or start a new chat"
        prefix-icon="el-icon-search"
        v-model="seach_input"
        autocomplete="on"
        autofocus="true"
        class="search-input">
      </el-input>
    </div>
  </el-aside>
</template>


<script>

  import auth from "../auth"
  export default {
    name:"Asida",
    data() {

      return {
        seach_input: '',
        image_profile: auth.user.image
      }
    },
    methods: {

    },
    mounted() {
      //do something after mounting vue instance
      console.log(auth);
    }

  };
</script>


<style lang="sass" scoped>


  .header-profile {
    background-color: #B3DED1;
    color: #000000;
    width: 100%;
    height: 70px;
    line-height: 10px;
  }

  .el-aside {
    background: #FFFFFF;
    border-right: 1px solid #DED6CE;
  }



  .logo-container{
    padding: 5px;
    background: #EEEEEE;
    border-bottom: 1px solid #DED6CE;
    position: relative;

    .logo-icon{
      width: 2em;
      height: 2em;


      display: block;
      padding: 7px;
      margin-left: 15px;
      position: relative;
      border-radius: 50%;
      border:1px inset rgba(0,0,0,.1);

      background: #FFFFFF;


    }

    // .svg-icon {
    //   width: 1.8em;
    //   height: 1.8em;
    //   position: relative;
    //
    //   margin-left: 2px;
    //   line-height: 100%;
    // }
    //
    // .svg-icon path,
    // .svg-icon polygon,
    // .svg-icon rect {
    //   fill: #4691f6;
    // }
    //
    // .svg-icon circle {
    //   stroke: #4691f6;
    //   stroke-width: 1;
    // }
  }

  .search-container {
      -webkit-flex: none;
      flex: none;
      height: 54px;
      box-sizing: border-box;
      position: relative;
      z-index: 100;
      padding: 10px;

      background: #F6F6F6;
      transition: box-shadow 0.18s ease-out, background-color 0.18s ease-out;

      .search-input{
        background-color: #fff;
        border-radius: 5px;
        border: 1px solid #f6f6f6;
      }

  }
</style>
