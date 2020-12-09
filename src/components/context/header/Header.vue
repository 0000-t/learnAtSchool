<template>
  <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-submenu index="2">
      <template slot="title">TNT</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <hr />
      <el-menu-item index="logout">退出</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
import { MessageBox } from "element-ui";
export default {
  data() {
    return {};
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      MessageBox.confirm("您确定退出登录吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true,
      })
        .then(async (confirm) => {
          //确认回调
          this.$router.replace({ path: "/login" });
        })
        .catch((cancel) => {
          //取消回调
        });
    },
  },
};
</script>

<style lang="less" scoped>
.el-menu-demo {
  position: relative;
  .el-submenu {
    position: absolute;
    right: 10px;
  }
}
</style>