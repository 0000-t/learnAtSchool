<template>
  <div class="content">
    <el-row>
      <el-col :span="24">
        <div class="grid-content">
          <slot name="module"> </slot>
        </div>
      </el-col>
      <el-col :span="24">
        <div class="grid-content">
          <slot name="table"> </slot>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-content table-page">
          <slot name="page">
            <el-pagination
              background
              layout="total, prev, pager, next, jumper"
              :total="11"
              hide-on-single-page
            >
            </el-pagination>
          </slot>
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
  display: flex;
  flex-direction: column;
  .el-row {
    background: #fff;
    &:first-of-type {
      flex: 1;
    }
    &:last-of-type {
      padding: 10px 0;
    }

    &:first-child {
      padding-top: 20px;
    }

    .el-col {
      border-radius: 4px;

      .grid-content {
        min-height: 36px;
      }
    }
  }
}
</style>