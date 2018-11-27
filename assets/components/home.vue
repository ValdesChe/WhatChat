
<template>
  <el-container style="width:100%; height: 500px; border: 1px solid #eee">
    <Asida></Asida>
    <router-view name="myzone"></router-view>
  </el-container>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>

<script>
  import Asida from "./asida.vue"

  export default {
    name:"home",
    components: {
      Asida
    },
    data() {
      const item = {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>
