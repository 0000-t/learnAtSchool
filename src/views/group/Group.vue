<template>
  <div class="group">
    <Management>
      <!-- <div slot="module">
        <InputGroup
          @append="append"
          @search="search"
          @showAll="showAll"
        ></InputGroup>
      </div> -->
      <div class="slotTable" slot="table">
        <Table
          :tableData="tableData"
          :title="title"
          :total="totalElements"
          :page="page"
          :pageSize="pageSize"
          :showTool="false"
          @current="currentPath"
        ></Table>
      </div>
    </Management>
    <GroupDialog
      :isShow="isShow"
      :row="row"
      @confirm="confirm"
      @cancel="cancel"
    ></GroupDialog>
  </div>
</template>

<script>
import Management from "components/context/management/Management";
import Table from "components/common/table/Table";
// import InputGroup from "views/group/components/InputGroup";
import GroupDialog from "views/group/components/GroupDialog";
import { MessageBox } from "element-ui";
import taoMessage from "common/message";

import {
  getGroupByPathAndSize,
  deleteGroupById,
  updateGroupById,
  appendGroup,
  selectGroupById,
} from "network/group";

export default {
  components: {
    Management,
    Table,
    // InputGroup,
    GroupDialog,
  },
  data() {
    return {
      tableData: [],
      allData: [],
      title: [
        {
          label: "用户id",
          prop: "userId",
        },
        {
          label: "学生名称",
          prop: "username",
        },
        {
          label: "课程号",
          prop: "courseId",
        },
        {
          label: "课程名称",
          prop: "title",
        },
        {
          label: "分数",
          prop: "scope",
          sort: true,
        },
        {
          label: "时长",
          prop: "duration",
          sort: true,
        },
        {
          label: "老师评分",
          prop: "teacherScope",
          sort: true,
        },
        {
          label: "最终分数",
          prop: "finscope",
          sort: true,
        },
        {
          label: "排名",
          prop: "rank",
          sort: true,
        },
      ],
      row: {},
      isShow: false,
      totalElements: 0,
      page: 1,
      pageSize: 10,
    };
  },
  created() {
    this.groupByPathAndSize(1);
  },
  methods: {
    //根据分页获取分类数据
    async groupByPathAndSize() {
      const result = await getGroupByPathAndSize();
      this.totalElements = result.data ? result.data.length : 0;
      this.allData = result.data;
      console.log(result);
      !!this.totalElements && this.setPath(1);
    },

    setPath(num) {
      this.page = num;
      let len = this.totalElements;
      let pageSize = this.pageSize;
      this.tableData = this.allData.filter((item, index) => {
        if (len <= pageSize) return item;
        if (index + 1 > (num - 1) * pageSize && index < num * pageSize)
          return item;
      });
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
          let result = await deleteGroupById(e.row.id);
          if (result.flag) {
            taoMessage("删除", "success");
            this.groupByPathAndSize(1);
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
        let result = await updateGroupById({
          id: e.id,
          name: e.name,
          description: e.description,
        });
        if (result.flag) {
          taoMessage("修改", "success");
          this.groupByPathAndSize(1);
        } else {
          taoMessage("修改", "error");
        }
      } else {
        //添加分类
        let result = await appendGroup({
          name: e.name,
          description: e.description,
        });
        if (result.flag) {
          taoMessage("添加", "success");
          this.groupByPathAndSize(1);
        } else {
          taoMessage("添加", "error");
        }
      }
    },
    //“查询”回调
    async search(e) {
      let result = await selectGroupById(e.id);
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
      this.setPath(num);
    },
    //点击“添加”按钮
    append() {
      this.row = {};
      this.isShow = true;
    },
    //点击“显示”全部按钮
    showAll() {
      this.setPath(1);
    },
  },
  computed: {},
};
</script>

<style lang="less" scpoed>
.group {
  height: 100%;
  .slotTable {
    height: 100%;
  }
}
</style>