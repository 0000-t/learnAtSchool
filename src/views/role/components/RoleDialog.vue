<template>
  <Dialog :isShow="isShow" @confirm="confirm" @cancel="cancel">
    <div slot="form">
      <el-form label-position="right" label-width="60px" :model="row">
        <el-form-item label="名称">
          <el-input v-model="row.name"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="row.description"></el-input>
        </el-form-item>
        <el-form-item v-if="row.role" label="权限">
          <el-checkbox-group
            v-model="checked"
            @change="handleCheckedCitiesChange"
          >
            <el-checkbox
              v-for="(item, index) in row.role"
              :label="item.id"
              :key="index"
              name="role"
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
      this.$emit("confirm", {
        ...this.row,
        role: [...this.checked],
      });
      this.checked = [];
    },
    cancel() {
      this.checked = [];
      this.$emit("cancel");
    },
    handleCheckAllChange(val) {
      console.log(val);
    },
    handleCheckedCitiesChange(value) {
      console.log(value);
    },
  },
  computed: {
    getChecked() {
      console.log(this.checked);
      return this.checked;
    },
  },
};
</script>

<style lang="less" scoped>
.el-checkbox-group {
  text-align: left;
  .el-checkbox {
    width: 152px;
    text-align: left;
  }
}
</style>