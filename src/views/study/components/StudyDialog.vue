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
        :rules="rules"
        label-position="right"
        label-width="80px"
      >
        <!-- <el-form-item label="id">
          <el-input v-model="row.id" disabled></el-input>
        </el-form-item> -->
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
      rules: {
        name: [{ required: true, message: "请输入名称", trigger: "blur" }],
        description: [
          {
            required: true,
            message: "请输入描述",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    confirm() {
      this.$refs["cate"].validate((valid) => {
        if (valid) {
          this.$emit("confirm", this.row);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
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

<style>
</style>