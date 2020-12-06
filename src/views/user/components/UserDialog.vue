<template>
  <Dialog :isShow="isShow" @confirm="confirm" @cancel="cancel">
    <div slot="form">
      <el-form label-position="right" label-width="80px" :model="row">
        <el-form-item label="呢称">
          <el-input v-model="row.nickname"></el-input>
        </el-form-item>
        <el-form-item label="手机">
          <el-input v-model="row.phone"></el-input>
        </el-form-item>
        <el-form-item label="用户名字">
          <el-input v-model="row.username"></el-input>
        </el-form-item>
        <el-form-item label="签名">
          <el-input v-model="row.sign"></el-input>
        </el-form-item>
        <el-form-item label="客户id">
          <el-input v-model="row.clientId"></el-input>
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
  },
};
</script>

<style>
</style>