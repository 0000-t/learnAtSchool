<template>
  <Dialog :isShow="isShowCata" @confirm="confirm" @cancel="cancel">
    <div slot="form">
      <el-form
        :model="row"
        ref="cate"
        label-position="right"
        label-width="80px"
      >
        <el-form-item label="名称" prop="name">
          <el-input v-model="row.name"></el-input>
        </el-form-item>
        <el-form-item label="描述" prop="description">
          <el-input v-model="row.description"></el-input>
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
    isShowCata: {
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
</style>