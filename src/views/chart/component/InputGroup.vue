<template>
  <el-form :inline="true" :model="data" class="demo-form-inline">
    <el-form-item label="区间大小">
      <el-input v-model.trim="data.interval" placeholder="请输入"></el-input>
    </el-form-item>
    <el-form-item label="最大区间值">
      <el-input v-model.trim="data.maxValue" placeholder="请输入"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit">查询</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      data: {
        interval: 10,
        maxValue: 100,
      },
    };
  },
  methods: {
    submit(e) {
      this.$emit("search", this.data);
    },
  },
};
</script>

<style lang="less" scoped>
</style>