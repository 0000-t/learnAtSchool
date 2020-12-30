<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="选课课程">
      <el-select v-model="selected" placeholder="请选择" @change="selectCourse">
        <el-option
          v-for="item in courseList"
          :key="item.id"
          :label="item.title"
          :value="item.id"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <!-- <el-form-item label="id">
      <el-input v-model.trim="formInline.id" placeholder="id"></el-input>
    </el-form-item> -->
    <el-form-item>
      <el-button type="primary" @click="append">混合查询</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  props: {
    courseList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      formInline: {
        id: "",
      },
      selected: "",
    };
  },
  methods: {
    selectCourse(value) {
      this.$emit("selected", value);
    },
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