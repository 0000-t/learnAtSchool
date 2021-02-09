<!--
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-02-07 21:10:23
 * @LastEditors: tao
 * @LastEditTime: 2021-02-07 21:26:33
-->
<template>
  <Dialog :isShow="isShow" @confirm="confirm" @cancel="cancel">
    <div slot="form">
      <el-form label-position="right" label-width="80px" :model="row">
        <el-form-item label="名称">
          <el-input v-model="row.title"></el-input>
        </el-form-item>
        <el-form-item label="兑换积分">
          <el-input v-model="row.cost"></el-input>
        </el-form-item>
        <el-form-item label="链接">
          <el-input v-model="row.url"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input type="textarea" v-model="row.text"></el-input>
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