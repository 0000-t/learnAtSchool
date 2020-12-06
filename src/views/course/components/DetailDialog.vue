<template>
  <div>
    <Dialog width="95%" top="20px" :isShow="isShowDetail">
      <div slot="form">
        <Table
          :tableData="tableData"
          :title="title"
          @edit="handleEdit"
          @delete="handleDelete"
        ></Table>
      </div>
      <div slot="footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="appendCata">添加目录</el-button>
      </div>
    </Dialog>
    <Dialog
      :isShow="isShowMini"
      :appendToBody="true"
      @cancel="cancelCata"
      @confirm="confirmCata"
    >
      <div slot="form">
        <el-form
          :model="row"
          ref="cate"
          label-position="right"
          label-width="80px"
        >
          <el-form-item label="标题" prop="name">
            <el-input v-model="row.name"></el-input>
          </el-form-item>
          <el-form-item label="学分" prop="scope">
            <el-input v-model="row.scope"></el-input>
          </el-form-item>
          <el-form-item label="链接" prop="url">
            <el-input v-model="row.url"></el-input>
          </el-form-item>
          <el-form-item label="文件">
            <input type="file" name="file" ref="file" />
          </el-form-item>
          <!-- <el-form-item label="选择">
            <el-upload
              class="upload-demo"
              ref="upload"
              action="http://47.94.135.125:6081/online-study/course/addCata"
              :headers="header"
              :multiple="true"
              :data="row"
              :file-list="fileList"
              :before-upload="beforeUpload"
              :on-success="afterUpload"
              :auto-upload="false"
            >
              <el-button slot="trigger" size="small" type="primary"
                >选取文件</el-button
              >
              <div slot="tip" class="el-upload__tip">
                只能上传jpg/png文件，且不超过500kb
              </div>
            </el-upload>
          </el-form-item> -->
        </el-form>
      </div>
    </Dialog>
  </div>
</template>

<script>
import Dialog from "components/common/dialog/Dialog";
import Table from "components/common/table/Table";

import taoMessage from "common/message";
import { MessageBox } from "element-ui";
import { getAllCategory } from "network/category";
import {
  appendCatalog,
  updateCatalog,
  deleteCatalog,
  selectCourseById,
} from "network/course";
export default {
  components: {
    Dialog,
    Table,
  },
  props: {
    isShowDetail: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      courseId: "",
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
          label: "学分",
          prop: "scope",
        },
        {
          label: "地址",
          prop: "url",
        },
        {
          label: "更新时间",
          prop: "lastUpdataTime",
        },
      ],
      row: {
        file: "",
        name: "",
        scope: "",
        url: "",
      },
      isShowMini: false,
      fileList: [],
    };
  },
  methods: {
    async getCatalogueByCourseId(id) {
      this.courseId = id;
      let result = await selectCourseById(id);
      this.tableData = result.data.catalogs;
      console.log(result.data);
    },

    //点击表格的“编辑”按钮
    handleEdit(e) {
      this.isShowMini = true;
      this.row = { ...e.row, edit: true };
    },

    //点击表格的“删除”按钮
    handleDelete(e) {
      MessageBox.confirm("您确定删除这一行吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true,
      })
        .then(async (confirm) => {
          //确认回调
          let result = await deleteCatalog(e.row.id);
          console.log(result);
          if (result.flag) {
            this.getCatalogueByCourseId(this.courseId);
            taoMessage("删除");
          } else {
            taoMessage("删除", "error");
          }
        })
        .catch((cancel) => {
          //取消回调
        });
    },

    //点击目录弹窗的"取消"按钮
    cancelCata() {
      this.closeCata();
    },

    //点击目录弹窗的"确定"按钮
    async confirmCata(e = this.row) {
      this.closeCata();
      //判断是编辑还是增加操作
      if (e.edit) {
        const result = await updateCatalog({
          id: e.id,
          courseId: e.courseId,
          name: e.name,
          scope: e.scope,
          url: e.url,
        });
        console.log(result);
        if (result.flag) {
          this.getCatalogueByCourseId(this.courseId);
          taoMessage("修改");
        } else {
          taoMessage("修改", "error");
        }
      } else {
        //添加目录
        console.log(this.$refs.file);
        let file = this.$refs.file.files[0];
        let formData = new FormData();
        formData.append("courseId", this.courseId);
        formData.append("file", file);
        for (let item in e) {
          formData.append(item, e[item]);
        }
        let result = await appendCatalog(formData);
        console.log(result);
        if (result.flag) {
          this.getCatalogueByCourseId(this.courseId);
          taoMessage("添加");
        } else {
          taoMessage("添加", "error");
        }
      }
    },

    //关闭添加目录弹窗
    closeCata() {
      this.isShowMini = false;
    },

    //打开添加目录弹窗
    appendCata() {
      this.row = {
        file: "",
        name: "",
        scope: "",
        url: "",
      };
      if (this.$refs.file) {
        this.$refs.file.value = "";
      }
      this.isShowMini = true;
    },

    //取消
    cancel() {
      this.$emit("cancel");
    },
  },
};
</script>

<style lang="less" scoped>
</style>