<template>
  <div class="category">
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
import InputGroup from "views/category/components/InputGroup";
import CateDialog from "views/category/components/CateDialog";
import { MessageBox } from "element-ui";
import taoMessage from "common/message";

import {
  getCategoryByPathAndSize,
  deleteCategoryById,
  updateCategoryById,
  appendCategory,
  selectCategoryById,
} from "network/category";

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
      totalElements: 0,
      page: 1,
    };
  },
  created() {
    this.categoryByPathAndSize(1);
  },
  methods: {
    //根据分页获取分类数据
    async categoryByPathAndSize(page, size = 10) {
      const result = await getCategoryByPathAndSize(page, size);
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
          let result = await deleteCategoryById(e.row.id);
          if (result.flag) {
            taoMessage("删除", "success");
            this.categoryByPathAndSize(1);
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
        let result = await updateCategoryById({
          id: e.id,
          name: e.name,
          description: e.description,
        });
        if (result.flag) {
          taoMessage("修改", "success");
          this.categoryByPathAndSize(1);
        } else {
          taoMessage("修改", "error");
        }
      } else {
        //添加分类
        let result = await appendCategory({
          name: e.name,
          description: e.description,
        });
        if (result.flag) {
          taoMessage("添加", "success");
          this.categoryByPathAndSize(1);
        } else {
          taoMessage("添加", "error");
        }
      }
    },
    //“查询”回调
    async search(e) {
      let result = await selectCategoryById(e.id);
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
      this.categoryByPathAndSize(num);
    },
    //点击“添加”按钮
    append() {
      this.row = {};
      this.isShow = true;
    },
    //点击“显示”全部按钮
    showAll() {
      this.categoryByPathAndSize(1);
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