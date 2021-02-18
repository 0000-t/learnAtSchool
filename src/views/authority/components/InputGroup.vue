<!--
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2020-11-25 09:27:34
 * @LastEditors: tao
 * @LastEditTime: 2021-02-18 21:26:45
-->
<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="权限号">
      <el-input v-model.trim="formInline.id" placeholder="权限号"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit">查询</el-button>
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
    submit(e) {
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