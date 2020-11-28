<template>
  <Dialog :isShow="isShow" @confirm="confirm" @cancel="cancel">
    <div slot="form">
      <el-form label-position="right" label-width="80px" :model="row">
        <el-form-item label="标题">
          <el-input v-model="row.title"></el-input>
        </el-form-item>
        <el-form-item label="链接">
          <el-input v-model="row.url"></el-input>
        </el-form-item>
        <el-form-item label="用户ID">
          <el-input v-model="row.userId"></el-input>
        </el-form-item>
        <el-form-item label="课程ID">
          <el-input v-model="row.courseId"></el-input>
        </el-form-item>
        <el-form-item label="课程名称">
          <el-input v-model="row.course"></el-input>
        </el-form-item>
        <el-form-item label="分数">
          <el-input v-model="row.scope"></el-input>
        </el-form-item>
        <el-form-item label="老师名称">
          <el-input v-model="row.teacher"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </Dialog>
</template>

<script>
import Dialog from "components/common/dialog/Dialog";
export default {
  components: {
    Dialog,
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
    return {};
  },
  methods: {
    confirm() {
      this.$emit("confirm", this.row);
    },
    cancel() {
      this.$emit("cancel");
    },
  },
};
</script>

<style>
</style>