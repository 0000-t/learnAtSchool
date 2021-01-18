<template>
  <div class="test">
    <Management>
      <div slot="module">
        <InputGroup
          :courseList="courseList"
          @selected="selected"
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
          :showDelete="false"
          :toolWidth="100"
          editTxt="评分"
          @edit="handleEdit"
          @current="currentPath"
        ></Table>
      </div>
    </Management>
    <TestDialog
      :isShow="isShow"
      :row="row"
      @confirm="confirm"
      @cancel="cancel"
    ></TestDialog>
  </div>
</template>

<script>
import Management from "components/context/management/Management";
import Table from "components/common/table/Table";
import InputGroup from "views/test/components/InputGroup";
import TestDialog from "views/test/components/TestDialog";
import { MessageBox } from "element-ui";
import { getAllCourse } from "network/course";
import taoMessage from "common/message";

import {
  getTestByPathAndSize,
  deleteTestById,
  updateTestById,
  appendTest,
  selectTestById,
  getCourseByTeacherId,
  getInfoByStudentAndCourse,
} from "network/test";
import { getAllUser } from "network/user";

export default {
  components: {
    Management,
    Table,
    InputGroup,
    TestDialog,
  },
  data() {
    return {
      tableData: [],
      courseData: {},
      studentData: {},
      title: [
        {
          label: "课程号",
          prop: "courseId",
        },
        {
          label: "课程名",
          prop: "title",
        },
        {
          label: "学号",
          prop: "userId",
        },
        {
          label: "呢称",
          prop: "nickName",
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
      ],
      courseList: [],
      row: {},
      isShow: false,
      totalElements: 0,
      page: 1,
      teacherId: "",
      courseId: "",
    };
  },
  created() {
    this.teacherId = this.$store.getters.getUserId.id;
    this.getTeacherCourse(this.teacherId);
    this.init();
  },
  methods: {
    async getTeacherCourse(id) {
      let result = await getCourseByTeacherId(id);
      this.courseList = result.data;
    },

    async init(courseId) {
      let result = await Promise.all([getAllCourse(), getAllUser()]);

      //设置课程名称和学生名称
      this.processing(result[0].data, result[1].data.student);
    },

    //根据分页获取分类数据
    async testByPathAndSize(courseId, page, size = 10) {
      const result = await getTestByPathAndSize(page, size, courseId);
      this.page = page;
      this.totalElements = result.data.totalElements;

      this.setTest(result.data.content);
    },

    //获取选择的课程
    selected(value) {
      this.courseId = value;
      this.testByPathAndSize(value, 1);
    },

    //合并课程学生数据
    setTest(test) {
      let course = this.courseData;
      let student = this.studentData;
      let courseTitle = null;
      let userName = null;

      test.forEach((item) => {
        courseTitle = course[item.courseId];
        userName = student[item.userId];

        courseTitle && (item.title = courseTitle);
        userName && (item.nickName = userName);
      });

      this.tableData = test;
    },

    processing(course, student) {
      course.forEach((item) => {
        this.courseData[item.id] = item.title;
      });

      student.forEach((item) => {
        this.studentData[item.id] = item.username;
      });
    },

    //点击表格的"编辑"按钮
    handleEdit(e) {
      this.row = { ...e.row, edit: true };
      this.isShow = true;
    },

    /**
     * 弹窗点击“确认”按钮
     */
    async confirm(e) {
      this.closeDialog();
      //判断是编辑还是增加操作
      if (e.edit) {
        let result = await updateTestById({
          courseId: e.courseId,
          userId: +e.userId,
          scope: +e.teacherScope,
        });
        if (result.flag) {
          taoMessage("修改", "success");
          this.testByPathAndSize(this.courseId, 1);
        } else {
          taoMessage("修改", "error");
        }
      } else {
      }
    },
    //“查询”回调
    async search(e) {
      let result = await selectTestById(e.id);
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
      this.testByPathAndSize(this.courseId, num);
    },

    //点击“混合查询”按钮
    async append(e) {
      this.row = {};
      let result = await getInfoByStudentAndCourse({
        courseId: e.courseId,
        studentId: e.userId,
      });
      if (result.flag) {
        let data = result.data;
        this.setTest([
          {
            courseId: data.courseId,
            duration: data.duration,
            nickName: data.nickName,
            scope: data.scope,
            teacherScope: "",
            title: data.title,
            userId: data.studentId,
          },
        ]);
        taoMessage("查询");
      } else {
        taoMessage("查询", "error");
      }
    },
    //点击“显示”全部按钮
    showAll() {
      this.testByPathAndSize(this.courseId, 1);
    },
  },
  computed: {},
};
</script>

<style lang="less" scpoed>
.test {
  height: 100%;
  .slotTable {
    height: 100%;
  }
}
</style>