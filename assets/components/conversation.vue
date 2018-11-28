<template>
  <el-container>
    <el-header style="text-align: right; font-size: 12px">

    </el-header>

    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="date" label="Date" width="140">
        </el-table-column>
        <el-table-column prop="name" label="Name" width="120">
        </el-table-column>
        <el-table-column prop="address" label="Address">
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>

<script>
  export default {

  }
</script>
<style >

</style>
