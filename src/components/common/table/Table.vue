<template>
  <div class="tao-table">
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
      <el-table-column v-if="expand" type="expand">
        <template slot-scope="">
          <el-form label-position="left" inline class="demo-table-expand">
            <slot name="expand">
              <el-form-item label="商品名称">
                <div>sdnvbgksdfbnsb</div>
              </el-form-item>
            </slot>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        v-for="(item, index) in title"
        align="center"
        :label="item.label"
        :prop="item.prop"
        :key="index"
        :sortable="!!item.sort"
      >
      </el-table-column>
      <el-table-column
        v-if="showTool"
        align="center"
        label="操作"
        :width="toolWidth"
      >
        <template slot-scope="scope">
          <el-button
            class="t-btn"
            v-if="showEdit"
            type="primary"
            plain
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
          >
            {{ editTxt }}
          </el-button>
          <el-button
            class="t-btn"
            v-if="showOther"
            type="primary"
            plain
            size="mini"
            @click="handleOther(scope.$index, scope.row)"
          >
            {{ otherTxt }}
          </el-button>
          <el-button
            class="t-btn"
            v-if="showDelete"
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-row class="path">
      <el-col :span="24">
        <div class="grid-content table-page">
          <slot name="page">
            <el-pagination
              background
              layout="total, prev, pager, next, jumper"
              hide-on-single-page
              :current-page="page"
              :page-size="pageSize"
              :total="total"
              @prev-click="lastPath"
              @next-click="nextPath"
              @current-change="currentPath"
            >
            </el-pagination>
          </slot>
        </div>
      </el-col>
    </el-row>
  </div>
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
    total: {
      type: Number,
      default: 0,
    },
    page: {
      type: Number,
      default: 1,
    },
    expand: {
      type: Boolean,
      default: false,
    },
    toolWidth: {
      type: Number,
      default: 200,
    },
    showTool: {
      type: Boolean,
      default: true,
    },
    showEdit: {
      type: Boolean,
      default: true,
    },
    showOther: {
      type: Boolean,
      default: false,
    },
    showDelete: {
      type: Boolean,
      default: true,
    },
    editTxt: {
      type: String,
      default: "编辑",
    },
    otherTxt: {
      type: String,
      default: "其它",
    },
    pageSize: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {
      tao: {
        name: "我的",
      },
    };
  },
  methods: {
    handleEdit(index, row) {
      this.$emit("edit", { index, row });
    },
    handleOther(index, row) {
      this.$emit("other", { index, row });
    },
    handleDelete(index, row) {
      this.$emit("delete", { index, row });
    },
    lastPath(e) {
      this.$emit("last", e);
    },
    nextPath(e) {
      this.$emit("next", e);
    },
    currentPath(e) {
      this.$emit("current", e);
    },
  },
  computed: {},
};
</script>

<style lang="less" scoped>
.tao-table {
  height: 100%;
  position: relative;
  .myTable {
    width: 98%;
    margin: 0 auto 90px;
    flex: 1;
    .t-btn {
      position: relative;
      z-index: 999;
    }
  }
  .path {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 15px;
    height: 40px;
  }
}
</style>