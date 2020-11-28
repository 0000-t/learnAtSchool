<template>
  <el-dialog
    :title="title"
    :visible.sync="isShow"
    :width="width"
    :close-on-press-escape="false"
    :show-close="false"
    @close="closeDialog"
  >
    <slot name="form"> </slot>
    <div slot="footer" class="dialog-footer">
      <el-button @click="cancel">取 消</el-button>
      <el-button type="primary" @click="confirm">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "修改信息",
    },
    width: {
      type: String,
      default: "500px",
    },
  },
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "120px",
    };
  },
  methods: {
    confirm() {
      this.$emit("confirm");
    },
    cancel(e) {
      this.$emit("cancel");
    },
    closeDialog() {
      this.$emit("close");
    },
  },
};
</script>

<style>
</style>