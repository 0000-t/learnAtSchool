<template>
  <div class="subject">
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
    <SubjectDialog
      :isShow="isShow"
      :row="row"
      @confirm="confirm"
      @cancel="cancel"
    ></SubjectDialog>
  </div>
</template>

<script>
import Management from "components/context/management/Management";
import Table from "components/common/table/Table";
import InputGroup from "views/subject/components/InputGroup";
import SubjectDialog from "views/subject/components/SubjectDialog";
import { MessageBox } from "element-ui";
import taoMessage from "common/message";

import {
  getSubjectByPageAndSize,
  deleteSubjectById,
  updateSubjectById,
  appendSubject,
  selectSubjectById,
} from "network/subject";

export default {
  components: {
    Management,
    Table,
    InputGroup,
    SubjectDialog,
  },
  data() {
    return {
      tableData: [],
      title: [
        {
          label: "标题",
          prop: "title",
        },
        {
          label: "备注",
          prop: "text",
        },
        {
          label: "链接",
          prop: "url",
        },
      ],
      row: {},
      isShow: false,
      totalElements: 0,
      page: 1,
    };
  },
  created() {
    this.subjectByPageAndSize(1);
  },
  methods: {
    //根据分页获取分类数据
    async subjectByPageAndSize(page, size = 10) {
      const result = await getSubjectByPageAndSize(page, size);
      this.totalElements = result.data.total;
      this.tableData = result.data.rows;
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
          let result = await deleteSubjectById(e.row.id);
          console.log(result, e.row.id);
          if (result.flag) {
            taoMessage("删除", "success");
            this.subjectByPageAndSize(1);
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
        let result = await updateSubjectById({
          id: e.id,
          text: e.text,
          title: e.title,
          url: e.url,
        });
        if (result.flag) {
          taoMessage("修改", "success");
          this.subjectByPageAndSize(1);
        } else {
          taoMessage("修改", "error");
        }
      } else {
        //添加分类
        let result = await appendSubject({
          text: e.text,
          title: e.title,
          url: e.url,
        });
        if (result.flag) {
          taoMessage("添加", "success");
          this.subjectByPageAndSize(1);
        } else {
          taoMessage("添加", "error");
        }
      }
    },
    //“查询”回调
    async search(e) {
      console.log(e.id);
      let result = await selectSubjectById(e.id);
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
      this.subjectByPageAndSize(num);
    },
    //点击“添加”按钮
    append() {
      this.row = {};
      this.isShow = true;
    },
    //点击“显示”全部按钮
    showAll() {
      this.subjectByPageAndSize(1);
    },
  },
};
</script>

<style lang="less" scpoed>
.subject {
  height: 100%;
  .slotTable {
    height: 100%;
  }
}
</style>