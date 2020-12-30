<template>
  <div class="role">
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
    <RoleDialog
      ref="roleDialog"
      :isShow="isShow"
      :row="row"
      @confirm="confirm"
      @cancel="cancel"
    ></RoleDialog>
  </div>
</template>

<script>
import Management from "components/context/management/Management";
import Table from "components/common/table/Table";
import InputGroup from "views/role/components/InputGroup";
import RoleDialog from "views/role/components/RoleDialog";
import { MessageBox } from "element-ui";
import taoMessage from "common/message";

import {
  getRoleByPageAndSize,
  deleteRoleById,
  updateRoleById,
  appendRole,
  selectRoleById,
  setRoleByUser,
  getUserRoleById,
} from "network/role";
import { getAllAuthority } from "network/authority";

export default {
  components: {
    Management,
    Table,
    InputGroup,
    RoleDialog,
  },
  data() {
    return {
      tableData: [],
      title: [
        {
          label: "名称",
          prop: "name",
        },
        {
          label: "描述",
          prop: "description",
        },
      ],
      role: [],
      row: {},
      isShow: false,
      totalElements: 0,
      page: 1,
      checked: [],
    };
  },
  created() {
    this.roleByPageAndSize(1);
    this.getRole();
  },
  methods: {
    //根据分页获取分类数据
    async roleByPageAndSize(page, size = 10) {
      const result = await getRoleByPageAndSize(page, size);
      console.log(result);
      this.totalElements = result.data.total;
      this.tableData = result.data.rows;
      this.page = page;
    },

    async getRole() {
      let result = await getAllAuthority();
      this.role = result.data;
      console.log(this.role);
    },

    //点击表格的"编辑"按钮
    handleEdit(e) {
      this.getUserRole(e.row.id);
      this.row = {
        ...e.row,
        role: this.role,
        edit: true,
      };
      this.isShow = true;
    },

    async getUserRole(id) {
      let result = await getUserRoleById(id);
      this.checked = result.data;
      this.$refs["roleDialog"].checked = result.data;
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
          let result = await deleteRoleById(e.row.id);
          console.log(result, e.row.id);
          if (result.flag) {
            taoMessage("删除", "success");
            this.roleByPageAndSize(1);
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
        let result = await Promise.all([
          setRoleByUser({
            roleId: e.id,
            rightIds: e.role.join(","),
          }),
          updateRoleById({
            id: e.id,
            name: e.name,
            description: e.description,
          }),
        ]);
        if (result[0].flag && result[1].flag) {
          taoMessage("修改", "success");
          this.roleByPageAndSize(1);
        } else {
          taoMessage("修改", "error");
        }
      } else {
        console.log(e);
        //添加分类
        let result = await appendRole({
          name: e.name,
          description: e.description,
        });
        console.log(result);
        if (result.flag) {
          taoMessage("添加", "success");
          this.roleByPageAndSize(1);
        } else {
          taoMessage("添加", "error");
        }
      }
    },
    //“查询”回调
    async search(e) {
      let result = await selectRoleById(e.id);
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
      this.checked = [];
      this.closeDialog();
    },
    //关闭弹窗
    closeDialog() {
      this.isShow = false;
    },
    //改变页码的回调
    currentPath(num) {
      this.roleByPageAndSize(num);
    },
    //点击“添加”按钮
    append() {
      this.row = {};
      this.isShow = true;
    },
    //点击“显示”全部按钮
    showAll() {
      this.roleByPageAndSize(1);
    },
  },
};
</script>

<style lang="less" scpoed>
.role {
  height: 100%;
  .slotTable {
    height: 100%;
  }
}
</style>