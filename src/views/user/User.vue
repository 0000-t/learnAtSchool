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
          editTxt="设置角色"
          otherTxt="编辑"
          :showOther="true"
          :tableData="tableData"
          :title="title"
          :total="totalElements"
          :page="page"
          :toolWidth="280"
          @edit="handleEdit"
          @other="handleOther"
          @delete="handleDelete"
          @current="currentPath"
        ></Table>
      </div>
    </Management>
    <UserDialog
      :isShow="isShow"
      :row="row"
      @confirm="confirm"
      @cancel="cancel"
    ></UserDialog>
    <SetRoleDialog
      :isShow="isShowSet"
      :row="row"
      @confirm="confirm"
      @cancel="cancel"
    ></SetRoleDialog>
  </div>
</template>

<script>
import Management from "components/context/management/Management";
import Table from "components/common/table/Table";
import InputGroup from "views/user/components/InputGroup";
import UserDialog from "views/user/components/UserDialog";
import SetRoleDialog from "views/user/components/SetRoleDialog";
import { MessageBox } from "element-ui";
import taoMessage from "common/message";

import {
  getUserByPathAndSize,
  deleteUserById,
  updateUserById,
  appendUser,
  selectUserById,
  getAllUser,
  appendRoleToUser,
} from "network/user";
import { getAllRole } from "network/role";

export default {
  components: {
    Management,
    Table,
    InputGroup,
    UserDialog,
    SetRoleDialog,
  },
  data() {
    return {
      tableData: [],
      title: [
        {
          label: "名字",
          prop: "username",
        },
        {
          label: "昵称",
          prop: "nickname",
        },
        {
          label: "类型",
          prop: "type",
        },
        {
          label: "手机号",
          prop: "phone",
        },
      ],
      role: [],
      row: {},
      isShow: false,
      isShowSet: false,
      totalElements: 0,
      page: 1,
    };
  },
  created() {
    // this.userByPathAndSize(1);
    this.allUser();
    this.getRole();
  },
  methods: {
    //根据分页获取分类数据
    async userByPathAndSize(page, size = 10) {
      const result = await getUserByPathAndSize(page, size);
      this.totalElements = result.data.totalElements;
      this.tableData = result.data.content;
      this.page = page;
    },

    async getRole() {
      let result = await getAllRole();
      this.role = result.data;
    },

    async allUser() {
      let result = await getAllUser();
      this.tableData = [...result.data.student, ...result.data.teacher];
      this.tableData.forEach((item) => {
        item.type = item.type == 0 ? "管理员" : "老师";
      });
    },

    //点击表格的"编辑"按钮
    handleEdit(e) {
      this.row = {
        username: e.row.username,
        id: e.row.id,
        role: this.role,
        edit: true,
      };
      this.isShowSet = true;
    },
    handleOther(e) {
      this.row = {
        username: e.row.username,
        nickname: e.row.nickname,
        type: e.row.type,
        phone: e.row.phone,
        password: e.row.password,
        id: e.row.id,
        edit: true,
        other: true,
      };
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
          if (result.flag) {
            taoMessage("删除", "success");
            this.allUser(1);
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
        if (e.other) {
          let result = await updateUserById({
            username: e.username,
            nickname: e.nickname,
            type: e.type == "管理员" ? 0 : 1,
            phone: e.phone,
            password: e.password,
            id: e.id,
          });
          console.log(result);
          if (result.flag) {
            taoMessage("编辑", "success");
            this.allUser(1);
          } else {
            taoMessage("编辑", "error");
          }
          return;
        }
        let result = await appendRoleToUser({
          userId: e.id,
          roleIds: e.role,
        });
        if (result.flag) {
          taoMessage("角色赋予", "success");
          this.allUser(1);
        } else {
          taoMessage("角色赋予", "error");
        }
      } else {
        //添加分类
        let result = await appendUser({
          nickname: e.nickname,
          passwork: e.passwork,
          phone: e.phone,
          type: e.type,
          username: e.username,
        });
        if (result.flag) {
          taoMessage("添加", "success");
          this.allUser(1);
        } else {
          taoMessage("添加", "error");
        }
      }
    },

    //“查询”回调
    async search(e) {
      let result = await selectUserById(e.id);
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
      this.isShowSet = false;
      this.isShow = false;
    },
    //改变页码的回调
    currentPath(num) {
      this.allUser(num);
    },
    //点击“添加”按钮
    append() {
      this.row = {};
      this.isShow = true;
    },
    //点击“显示”全部按钮
    showAll() {
      this.userByPathAndSize(1);
    },
  },
  computed: {},
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