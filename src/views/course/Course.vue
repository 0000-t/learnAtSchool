<template>
  <div class="course">
    <Management>
      <div slot="module">
        <InputGroup
          @append="append"
          @search="search"
          @showAll="showAll"
        ></InputGroup>
      </div>
      <div class="slotTable" slot="table">
        <ExpandTable
          :tableData="tableData"
          :title="title"
          :total="totalElements"
          :page="page"
          @edit="handleEdit"
          @editCata="editCata"
          @delete="handleDelete"
          @current="currentPath"
        ></ExpandTable>
      </div>
    </Management>
    <CourseDialog
      v-if="isShow"
      :isShow="isShow"
      :row="row"
      :category="categoryData"
      @confirm="confirm"
      @cancel="cancel"
    ></CourseDialog>
    <DetailDialog
      ref="detailDialog"
      :isShowDetail="isShowDetail"
      @cancel="cancel"
    ></DetailDialog>
  </div>
</template>

<script>
import Management from "components/context/management/Management";
import InputGroup from "views/course/components/InputGroup";
import ExpandTable from "views/course/components/ExpandTable";
import CourseDialog from "views/course/components/CourseDialog";
import CataDialog from "views/course/components/CataDialog";
import DetailDialog from "views/course/components/DetailDialog";

import taoMessage from "common/message";
import { MessageBox } from "element-ui";
import { getAllCategory } from "network/category";
import {
  getCourseByPathAndSize,
  deleteCourseById,
  updateCourseById,
  appendCourse,
  selectCourseById,
  appendCatalog,
  updateCatalog,
  deleteCatalog,
  appendUserCourse,
  getCourseByUserId,
} from "network/course";

export default {
  components: {
    Management,
    ExpandTable,
    InputGroup,
    CourseDialog,
    CataDialog,
    DetailDialog,
  },
  data() {
    return {
      tableData: [],
      title: [
        {
          label: "课程号",
          prop: "id",
        },
        {
          label: "课程名称",
          prop: "title",
        },
        {
          label: "任课老师",
          prop: "teacherName",
        },
        {
          label: "封面",
          prop: "image",
        },
        {
          label: "课程介绍",
          prop: "description",
        },
        {
          label: "课程类型",
          prop: "categoryName",
        },
        {
          label: "创建人",
          prop: "createMan",
        },
        {
          label: "创建时间",
          prop: "createDate",
        },
        {
          label: "修改人",
          prop: "updateMan",
        },
        {
          label: "修改时间",
          prop: "updateDate",
        },
      ],
      row: {},
      isShow: false,
      isShowCata: false,
      isShowDetail: false,
      totalElements: 0,
      categoryData: [],
      page: 1,
    };
  },
  created() {
    this.courseByPathAndSize(1);
  },
  methods: {
    //根据分页获取课程数据
    async courseByPathAndSize(page, size = 10) {
      const result = await getCourseByPathAndSize(page, size);
      this.totalElements = result.data.totalElements;
      this.page = page;
      //给表格数据添加上分类名称
      if (result.data.content.length > 0) {
        //获取分类名称
        const categoryNames = await this.getCategoryNameById(
          result.data.content
        );
        this.tableData = result.data.content.map((item) => {
          item.categoryName = categoryNames.find(
            (id) => item.categoryId == id.id
          ).name;
          return item;
        });
      }
    },
    //点击表格的"目录"按钮
    editCata(e) {
      this.row = { ...e.row, edit: true };
      this.isShowDetail = true;
      this.$refs.detailDialog.getCatalogueByCourseId(e.row.id);
    },
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
          let result = await deleteCourseById(e.row.id);
          if (result.flag) {
            this.courseByPathAndSize(1);
            taoMessage("删除");
          } else {
            taoMessage("删除", "error");
          }
        })
        .catch((cancel) => {
          //取消回调
        });
    },

    //
    confirmDetail() {
      this.closeDialog();
    },

    //弹窗点击“确认”按钮
    async confirm(e) {
      console.log(e);
      this.closeDialog();
      //判断是编辑还是增加操作
      if (e.edit) {
        const result = await updateCourseById({
          ...e,
        });
        console.log(result);
        // let formData = new FormData();
        // for (let item in e) {
        //   formData.append(item, e[item]);
        // }
        // const result = await updateCourseById(formData);
        if (result.flag) {
          this.courseByPathAndSize(1);
          taoMessage("修改");
        } else {
          taoMessage("修改", "error");
        }
      } else {
        //添加课程
        let formData = new FormData();
        for (let item in e) {
          formData.append(item, e[item]);
        }
        const result = await appendCourse(formData);
        if (result.flag) {
          this.courseByPathAndSize(1);
          taoMessage("添加");
        } else {
          taoMessage("添加", "error");
        }
      }
    },

    //“查询”回调
    async search(e) {
      let result = await selectCourseById(e.id);
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
      this.isShowCata = false;
      this.isShowDetail = false;
    },

    //改变页码的回调
    currentPath(num) {
      this.courseByPathAndSize(num);
    },

    //点击“添加课程”按钮
    append() {
      this.row = {};
      this.isShow = true;
    },

    //点击“添加目录”回调
    appendCata() {
      this.isShowCata = true;
    },

    //
    confirmCate() {},

    //点击“显示”全部按钮
    showAll() {
      this.courseByPathAndSize(1);
    },

    //根据课程id获取课程名称
    async getCategoryNameById(ids) {
      const result = (await getAllCategory()).data;
      this.categoryData = [...result];
      return ids
        .map((item) => item.categoryId) //筛选出课程id
        .filter((item, index, arr) => arr.indexOf(item, 0) === index) //课程id去重
        .map((id) => {
          //根据id查找课程名称
          let data = result.find((item) => item.id == id);
          return {
            id,
            name: data ? data.name : "",
          };
        });
    },
  },
};
</script>

<style lang="less" scoped>
.course {
  height: 100%;
  .slotTable {
    height: 100%;
  }
}
</style>