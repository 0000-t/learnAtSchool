<template>
  <div class="content">
    <el-row>
      <el-col class="headCol" :span="24">
        <div class="grid-content">
          <slot name="module"> </slot>
        </div>
      </el-col>
      <el-col class="myCol" :span="24">
        <div class="grid-content">
          <slot name="table"> </slot>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Table from "components/common/table/Table";
import InputGroup from "components/context/inputGroup/InputGroup";
export default {
  components: {
    Table,
    InputGroup,
  },
};
</script>

<style lang="less" scoped>
.content {
  height: 100%;
  .el-row {
    display: flex;
    flex-direction: column;
    background: #fff;
    padding-top: 20px;
    height: 100%;
    .headCol {
      // height: 64px;
    }
    .myCol {
      flex: 1;
      .grid-content {
        height: 100%;
      }
    }
  }
}
</style>