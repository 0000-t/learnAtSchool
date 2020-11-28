<template>
  <div class="user">
    <Management>
      <div slot="module">
        <InputGroup
          @append="append"
          @search="search"
          @showAll="showAll"
        ></InputGroup>
      </div>
      <div class="slotTable" slot="table">
        <Table
          :tableData="tableData"
          :title="title"
          :total="totalElements"
          :page="page"
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
import InputGroup from "views/user/components/InputGroup";
import CateDialog from "views/user/components/CateDialog";
import { MessageBox } from "element-ui";
import taoMessage from "common/message";

import {
  getUserByPathAndSize,
  deleteUserById,
  updateUserById,
  appendUser,
  selectUserById,
} from "network/user";

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
          label: "客户Id",
          prop: "name",
        },
        {
          label: "描述",
          prop: "description",
        },
      ],
      row: {},
      isShow: false,
      totalElements: 0,
      page: 1,
    };
  },
  created() {
    this.userByPageAndSize(1);
  },
  methods: {
    //根据分页获取分类数据
    async userByPageAndSize(page, size = 10) {
      const result = await getuserByPageAndSize(page, size);
      this.totalElements = result.data.totalElements;
      this.tableData = result.data.content;
      this.page = page;
    },
    //点击表格的"编辑"按钮
    handleEdit(e) {
      this.row = { ...e.row, edit: true };
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
        .then(async (confirm) => {
          //确认回调
          let result = await deleteUserById(e.row.id);
          console.log(result, e.row.id);
          if (result.flag) {
            taoMessage("删除", "success");
            this.userByPathAndSize(1);
          } else {
            taoMessage("删除", "error");
          }
        })
        .catch((cancel) => {
          //取消回调
        });
    },
    //弹窗点击“确认”按钮
    async confirm(e) {
      this.closeDialog();
      //判断是编辑还是增加操作
      if (e.edit) {
        let result = await updateUserById({
          id: e.id,
          name: e.name,
          description: e.description,
        });
        if (result.flag) {
          taoMessage("修改", "success");
          this.userByPageAndSize(1);
        } else {
          taoMessage("修改", "error");
        }
      } else {
        //添加分类
        let result = await appendUser({
          name: e.name,
          description: e.description,
        });
        if (result.flag) {
          taoMessage("添加", "success");
          this.userByPageAndSize(1);
        } else {
          taoMessage("添加", "error");
        }
      }
    },
    //“查询”回调
    async search(e) {
      let result = await selectUserById(e.id);
      console.log(result);
      if (result.flag) {
        this.tableData = [result.data];
        this.totalElements = this.tableData.length;
        taoMessage("查询");
      } else {
        taoMessage("查询", "error");
      }
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
      this.userByPageAndSize(num);
    },
    //点击“添加”按钮
    append() {
      this.row = {};
      this.isShow = true;
    },
    //点击“显示”全部按钮
    showAll() {
      this.userByPageAndSize(1);
    },
  },
};
</script>

<style lang="less" scpoed>
.user {
  height: 100%;
  .slotTable {
    height: 100%;
  }
}
</style>