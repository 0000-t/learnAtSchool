<template>
  <div class="category">
    <Management>
      <div slot="module">
        <InputGroup @append="append" @search="search"></InputGroup>
      </div>
      <div class="slotTable" slot="table">
        <Table
          :tableData="tableData"
          :title="title"
          :total="11"
          @edit="handleEdit"
          @delete="handleDelete"
          @current="currentPath"
        ></Table>
      </div>
    </Management>
    <CateDialog
      :isShow="isShow"
      :row="row"
      @confirm="confirm"
      @cancel="cancel"
    ></CateDialog>
  </div>
</template>

<script>
import Management from "components/context/management/Management";
import Table from "components/common/table/Table";
import InputGroup from "views/category/components/InputGroup";
import CateDialog from "views/category/components/CateDialog";
import { MessageBox } from "element-ui";

import { getCategoryByPathAndSize } from "network/category";
export default {
  components: {
    Management,
    Table,
    InputGroup,
    CateDialog,
  },
  data() {
    return {
      tableData: [],
      title: [
        {
          label: "ID",
          prop: "id",
        },
        {
          label: "名称",
          prop: "name",
        },
        {
          label: "描述",
          prop: "description",
        },
      ],
      row: {},
      isShow: false,
    };
  },
  created() {
    this.categoryByPathAndSize(1);
  },
  methods: {
    //根据分页获取分类数据
    async categoryByPathAndSize(path, size = 10) {
      const result = await getCategoryByPathAndSize(path, size);
      // console.log(result);
      this.tableData = result.data.content;
    },
    //点击表格的"编辑"按钮
    handleEdit(e) {
      this.row = { ...e.row };
      this.isShow = true;
    },
    //点击表格的"删除"按钮
    handleDelete(e) {
      MessageBox.confirm("您确定删除这一行吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true,
      })
        .then((confirm) => {
          //确认回调
          MessageBox.alert("", "删除成功", {
            type: "success",
            center: true,
            showClose: false,
          });
        })
        .catch((cancel) => {
          //取消回调
        });
    },
    //弹窗点击“确认”按钮
    confirm(e) {
      this.closeDialog();
    },
    //弹窗点击“取消”按钮
    cancel() {
      this.closeDialog();
    },
    //关闭弹窗
    closeDialog() {
      this.isShow = false;
    },
    //改变页码的回调
    currentPath(num) {
      console.log(num);
    },
    //点击“添加”按钮
    append() {
      this.row = {};
      this.isShow = true;
    },
    //“查询”回调
    search(e) {
      console.log(e);
    },
  },
  computed: {},
};
</script>

<style lang="less" scpoed>
.category {
  height: 100%;
  .slotTable {
    height: 100%;
  }
}
</style>