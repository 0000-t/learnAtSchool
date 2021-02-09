<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="课程">
      <el-select v-model="selected" multiple placeholder="请选择">
        <el-option
          v-for="item in courseList"
          :key="item.id"
          :label="item.title"
          :value="item.id"
        >
        </el-option>
      </el-select>
      <el-button class="one-btn" type="primary" @click="selectCourse"
        >查询</el-button
      >
    </el-form-item>
    <!-- <el-form-item label="id">
      <el-input v-model.trim="formInline.id" placeholder="id"></el-input>
    </el-form-item> -->
    <el-form-item label="混合查询">
      <div class="input-double">
        <el-input
          v-model.trim="formInline.userId"
          placeholder="学号"
        ></el-input>
        <el-input
          v-model.trim="formInline.courseId"
          placeholder="课程号"
        ></el-input>
      </div>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="append">查询</el-button>
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
        userId: "",
        courseId: "",
      },
      selected: [],
    };
  },
  methods: {
    selectCourse() {
      if (!!this.selected.length) {
        console.log(this.selected.map((item) => item));
        this.$emit(
          "selected",
          this.selected.map((item) => item)
        );
      }
    },
    submit(e) {
      this.formInline.id && this.$emit("search", this.formInline);
    },
    append() {
      this.$emit("append", {
        userId: this.formInline.userId,
        courseId: this.formInline.courseId,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.one-btn {
  margin-left: 15px;
  margin-right: 25px;
}
.input-double {
  width: 300px;
  display: flex;
  .el-input {
    margin-right: 5px;
  }
}
</style>