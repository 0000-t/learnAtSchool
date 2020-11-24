<template>
  <div>
    <Management>
      <div slot="module">
        <InputGroup></InputGroup>
      </div>
      <div slot="table">
        <Table
          :tableData="tableData"
          :title="title"
          @edit="handleEdit"
          @delete="handleDelete"
        ></Table>
      </div>
    </Management>
    <Dialog :isShow="isShow" @confirm="confirm" @cancel="cancel"></Dialog>
  </div>
</template>

<script>
import Management from "components/context/management/Management";
import Table from "components/common/table/Table";
import InputGroup from "components/context/inputGroup/InputGroup";
import Dialog from "components/common/dialog/Dialog";
import { MessageBox } from "element-ui";

import { getCategoryByPathAndSize } from "network/category";
export default {
  components: {
    Management,
    Table,
    InputGroup,
    Dialog,
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
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
      console.log(result);
    },
    //点击表格的"编辑"按钮
    handleEdit(e) {
      console.log(e);
      this.isShow = true;
    },
    //点击表格的"删除"按钮
    handleDelete(e) {
      MessageBox.confirm("您确定删除这一行吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true,
      }).then(() => {
        MessageBox.alert("", "删除成功", {
          type: "success",
          center: true,
          showClose: false,
        });
      });
    },
    //弹窗点击“确认”按钮
    confirm() {
      this.closeDialog();
    },
    //弹窗点击“取消”按钮
    cancel() {
      this.closeDialog();
    },
    closeDialog() {
      this.isShow = false;
    },
  },
};
</script>

<style lang="less" scpoed>
</style>