<template>
  <el-table
    :data="tableData"
    class="myTable"
    :cell-style="{ padding: '6px', border: '0.3px solid #E6E6E6' }"
    :header-cell-style="{
      background: '#F2F2F2',
      border: '0.3px solid #E6E6E6',
      color: '#737573',
    }"
    border
    highlight-current-row
  >
    <el-table-column
      v-for="(item, index) in title"
      align="center"
      :label="item.label"
      :prop="item.prop"
      :key="index"
    >
    </el-table-column>
    <el-table-column align="center" label="操作" width="200">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">
          编辑
        </el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: {
    title: {
      type: Array,
    },
    tableData: {
      type: Array,
    },
  },
  data() {
    return {};
  },
  methods: {
    handleEdit(index, row) {
      this.$emit("edit", { index, row });
    },
    handleDelete(index, row) {
      this.$emit("delete", { index, row });
    },
  },
  computer: {},
};
</script>

<style lang="less" scoped>
.myTable {
  width: 98%;
  margin: 0 auto;
}
</style>