
<template>
  <!-- <el-container style=""> -->
    <Messagerie class="messagerie"></Messagerie>
  <!-- </el-container> -->
</template>

<style lang="css">
  /* .el-container{
    width:100%; height: 100%;  border: 1px solid #eee
  } */
    
  .messagerie{
    height: 500px;
    overflow: hide;
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
    },
    mounted: function() {
      console.log(window.innerHeight+ "px");
      
      document.querySelector(".messagerie").style.height =  window.innerHeight-10 + "px"
      
    }

  };
</script>
