<template>
  <Dialog :isShow="isShow" @confirm="confirm" @cancel="cancel">
    <div slot="form">
      <el-form label-position="right" label-width="80px" :model="row">
        <el-form-item label="课程名称">
          <el-input v-model="row.title"></el-input>
        </el-form-item>
        <el-form-item label="任课老师">
          <el-input v-model="row.teacher"></el-input>
        </el-form-item>
        <el-form-item label="课程分类">
          <el-select
            v-model="row.categoryId"
            filterable
            placeholder="请选择课程分类"
          >
            <el-option
              v-for="item in category"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="描述">
          <el-input type="textarea" v-model="row.description"></el-input>
        </el-form-item>
        <el-form-item label="课程封面">
          <input type="file" name="file" ref="pic" />
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
          categoryId: "",
          description: "",
          teacher: "",
          title: "",
        };
      },
    },
    category: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    confirm() {
      this.$emit("confirm", {
        image: this.$refs["pic"].files[0],
        ...this.row,
      });
      this.$refs["pic"].value = "";
    },
    cancel() {
      this.$emit("cancel");
    },
  },
};
</script>

<style lang="less" scope>
.el-select {
  width: 380px;
}
</style>