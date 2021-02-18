<!--
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2020-11-28 23:35:21
 * @LastEditors: tao
 * @LastEditTime: 2021-02-18 21:32:38
-->
<template>
  <Dialog width="800px" :isShow="isShow" @confirm="confirm" @cancel="cancel">
    <div slot="form">
      <el-form label-position="right" label-width="80px" :model="row">
        <el-form-item label="标题">
          <el-input v-model="row.title"></el-input>
        </el-form-item>
        <el-form-item label="链接">
          <el-input v-model="row.url"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <Editor
            v-if="isShow"
            :catchData="catchData"
            :content="row.text"
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
        return {
          id: "",
          name: "",
          description: "",
        };
      },
    },
  },
  data() {
    return {
      editor: {},
    };
  },
  methods: {
    catchData(html) {
      this.row.text = html;
    },
    confirm() {
      this.$emit("confirm", this.row);
    },
    cancel() {
      this.$emit("cancel");
      this.editor.txt.clear();
    },
    editorObj(editor) {
      this.editor = editor;
    },
  },
};
</script>

<style>
</style>