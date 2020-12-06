<template>
  <el-dialog
    :title="title"
    :visible.sync="isShow"
    :width="width"
    :top="top"
    :close-on-press-escape="false"
    :show-close="showClose"
    :fullscreen="fullscreen"
    :close-on-click-modal="false"
    :append-to-body="appendToBody"
    @close="closeDialog"
  >
    <slot name="title"></slot>
    <slot name="form"> </slot>
    <div slot="footer" class="dialog-footer">
      <slot name="footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </slot>
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
    top: {
      type: String,
      default: "15vh",
    },
    fullscreen: {
      type: Boolean,
      default: false,
    },
    showClose: {
      type: Boolean,
      default: false,
    },
    appendToBody: {
      type: Boolean,
      default: false,
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