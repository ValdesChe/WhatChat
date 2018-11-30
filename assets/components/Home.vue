
<template>
  <el-container style="width:100%; height: 500px; border: 1px solid #eee">
    <Messagerie></Messagerie>
    <router-view name="myzone"></router-view>
  </el-container>
</template>

<style lang="css">
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
  // import auth from '../auth'
  import Messagerie from "./Messagerie.vue"

  export default {
    name:"Home",
    components: {
      Messagerie
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
