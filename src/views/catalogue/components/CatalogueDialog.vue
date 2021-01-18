<template>
  <Dialog :isShow="isShow" @confirm="confirm" @cancel="cancel">
    <div slot="form">
      <el-form :model="row" ref="row" label-position="right" label-width="80px">
        <el-form-item label="id">
          <el-input v-model="row.id" disabled></el-input>
        </el-form-item>
        <el-form-item label="名称">
          <el-input v-model="row.name"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input type="textarea" v-model="row.description"></el-input>
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
      console.log(this.$refs["row"]);
      this.$emit("confirm", this.row);
    },
    cancel() {
      alert(1111);
      this.$emit("cancel");
    },
  },
};
</script>

<style>
</style>