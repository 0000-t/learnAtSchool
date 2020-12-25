<template>
  <Dialog :isShow="isShow" @confirm="confirm" @cancel="cancel">
    <div slot="form">
      <el-form label-position="right" label-width="80px" :model="row">
        <el-form-item label="学号">
          <el-input v-model="row.studentId"></el-input>
        </el-form-item>
        <el-form-item label="课程号">
          <el-input v-model="row.courseId"></el-input>
        </el-form-item>
        <el-form-item label="评分">
          <el-input v-model="row.teacherScope"></el-input>
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
          studentId: "",
          courseId: "",
          teacherScope: 0,
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

<style lang="less" scoped>
.el-select {
  width: 380px;
}
</style>