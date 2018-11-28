
<template>
  <el-aside width="404px">
    <!-- v-loading="loading" -->
    <div class="logo-container">
      <a href="" class="logo-icon" >
        <svg class="svg-icon" viewBox="0 0 20 20">
							<path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
				</svg>
      </a>
    </div>
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

<style>


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

    .svg-icon {
      width: 1.8em;
      height: 1.8em;
      position: relative;

      margin-left: 2px;
      line-height: 100%;
    }

    .svg-icon path,
    .svg-icon polygon,
    .svg-icon rect {
      fill: #4691f6;
    }

    .svg-icon circle {
      stroke: #4691f6;
      stroke-width: 1;
    }
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

<script>
  export default {
    name:"Asida",
    data() {
      const item = {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      };
      return {
        tableData: Array(20).fill(item),
        loading: true,
        seach_input: ""
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  };
</script>
