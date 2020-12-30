<template>
  <Dialog :isShow="isShow" @confirm="confirm" @cancel="cancel">
    <div slot="form">
      <el-form label-position="right" label-width="80px" :model="row">
        <el-form-item label="昵称">
          <el-input v-model="row.nickname"></el-input>
        </el-form-item>
        <el-form-item label="名字">
          <el-input v-model="row.username"></el-input>
        </el-form-item>
        <el-form-item label="类型">
          <el-select v-model="row.type" placeholder="请选择">
            <el-option label="管理员" value="0"> </el-option>
            <el-option label="老师" value="1"> </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="row.phone"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="row.password"></el-input>
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

<style lang="less" scoped>
.el-select {
  width: 380px;
}
</style>