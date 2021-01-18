<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="用户号">
      <el-input v-model.trim="formInline.id" placeholder="用户号"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit">查询</el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="append">添加</el-button>
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
  },
};
</script>

<style lang="less" scoped>
</style>