<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="id">
      <el-input v-model.trim="formInline.id" placeholder="id"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit">查询</el-button>
    </el-form-item>
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
    submit(e) {
      this.formInline.id && this.$emit("search", this.formInline);
    },
    append() {
      this.formInline.id = "";
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