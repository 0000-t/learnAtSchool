<!--
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-02-07 21:10:23
 * @LastEditors: tao
 * @LastEditTime: 2021-02-18 21:31:30
-->
<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item>
      <el-button type="primary" @click="append">添加</el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="showAll">显示全部</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        id: "",
      },
    };
  },
  methods: {
    submit() {
      this.formInline.id && this.$emit("search", this.formInline);
    },
    append() {
      this.$emit("append");
    },
    showAll() {
      this.formInline.id = "";
      this.$emit("showAll");
    },
  },
};
</script>

<style lang="less" scoped>
</style>