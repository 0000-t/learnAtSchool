<template>
  <Dialog
    :isShow="isShow"
    @confirm="confirm"
    @cancel="cancel"
    @close="closeDialog"
  >
    <div slot="form">
      <el-form
        :model="row"
        ref="cate"
        label-position="right"
        label-width="80px"
      >
        <el-form-item label="课程id" prop="courseId">
          <el-input v-model="row.courseId"></el-input>
        </el-form-item>
        <el-form-item label="学生id" prop="studentId">
          <el-input v-model="row.studentId"></el-input>
        </el-form-item>
        <el-form-item label="创建时间" prop="createTime">
          <!-- <el-input v-model="row.createTime"></el-input> -->
          <el-date-picker
            v-model="row.createTime"
            align="right"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
          <el-time-select
            v-model="row.createTime"
            :picker-options="{
              start: '08:30',
              step: '00:15',
              end: '18:30',
            }"
            placeholder="选择时间"
          >
          </el-time-select>
        </el-form-item>
        <el-form-item label="持续时间" prop="duration">
          <el-input v-model="row.durationn"></el-input>
        </el-form-item>
        <el-form-item label="学分" prop="scope">
          <el-input v-model="row.scope"></el-input>
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
      default(value) {
        console.log(value);
        return {};
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
    closeDialog() {
      this.$refs["cate"].resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
</style>