<!--
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2020-12-29 09:51:31
 * @LastEditors: tao
 * @LastEditTime: 2021-02-18 21:33:49
-->
<template>
  <Dialog :isShow="isShow" @confirm="confirm" @cancel="cancel">
    <div slot="form">
      <el-form label-position="right" label-width="80px" :model="row">
        <el-form-item label="名字">
          <el-input v-model="row.username"></el-input>
        </el-form-item>
        <el-form-item label="权限">
          <el-checkbox-group v-model="checked">
            <el-checkbox
              v-for="(item, i) in row.role"
              :key="i"
              :label="item.id"
              >{{ item.name }}</el-checkbox
            >
          </el-checkbox-group>
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
    return {
      checked: [],
    };
  },
  methods: {
    confirm() {
      console.log(this.checked);
      this.$emit("confirm", {
        id: this.row.id,
        role: this.checked,
        edit: this.row.edit,
      });
    },
    cancel() {
      this.$emit("cancel");
    },
    handleCheckAllChange(val) {
      console.log(val);
    },
    handleCheckedCitiesChange(value) {
      console.log(value);
    },
  },
};
</script>

<style lang="less" scpoed>
.el-checkbox-group {
  text-align: left;
}
</style>