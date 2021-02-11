<template>
  <Dialog width="800px" :isShow="isShow" @confirm="confirm" @cancel="cancel">
    <div slot="form">
      <el-form label-position="right" label-width="80px" :model="row">
        <el-form-item label="课程名称">
          <el-input v-model="row.title"></el-input>
        </el-form-item>
        <!-- <el-form-item label="创建人">
          <el-input v-model="row.teacher"></el-input>
        </el-form-item> -->
        <el-form-item label="课程分类">
          <el-select
            v-model="row.categoryId"
            filterable
            placeholder="请选择课程分类"
          >
            <el-option
              v-for="item in category"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item v-if="!row.edit" label="课程封面">
          <!-- <input type="file" name="file" ref="pic" /> -->
          <el-upload
            class="upload-demo"
            ref="image"
            action=""
            :on-remove="handleRemove"
            :auto-upload="false"
            list-type="picture"
          >
            <el-button slot="trigger" size="small" type="primary"
              >选择图片</el-button
            >
          </el-upload>
        </el-form-item>
        <el-form-item label="描述">
          <!-- <el-input type="textarea" v-model="row.description"></el-input> -->
          <Editor
            v-if="isShow"
            :catchData="catchData"
            :content="row.description"
            @editor="editorObj"
          ></Editor>
        </el-form-item>
      </el-form>
    </div>
  </Dialog>
</template>

<script>
import Dialog from "components/common/dialog/Dialog";
import Editor from "components/common/editor/Editor";
export default {
  components: {
    Dialog,
    Editor,
  },
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
    row: {
      type: Object,
      default() {
        return {};
      },
    },
    category: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      editor: {},
    };
  },
  methods: {
    confirm() {
      if (this.row.edit) {
        this.$emit("confirm", {
          ...this.row,
          teacher: this.$store.getters.getUserId.id,
          updateMan: this.$store.getters.getUserId.id,
        });
      } else {
        this.$emit("confirm", {
          ...this.row,
          image: this.$refs["image"]["_data"].uploadFiles[0].raw,
          teacher: this.$store.getters.getUserId.id,
          createMan: this.$store.getters.getUserId.id,
        });
      }
    },
    cancel() {
      this.$emit("cancel");
      this.editor.txt.clear();
    },
    editorObj(editor) {
      this.editor = editor;
    },
    catchData(html) {
      this.row.description = html;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
  },
};
</script>

<style lang="less" scope>
.el-select {
  width: 680px;
}
</style>