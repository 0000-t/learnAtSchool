<template>
  <div class="tao-contaniner">
    <el-container>
      <el-aside width="220px">
        <slot name="nav"></slot>
      </el-aside>
      <el-container>
        <el-header>
          <slot name="header"></slot>
        </el-header>
        <el-main>
          <div class="main">
            <slot name="main"></slot>
          </div>
          <el-footer height="50px">
            <slot name="footer"></slot>
          </el-footer>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="less" scoped>
.tao-contaniner {
  height: 100%;

  .el-aside {
    background-color: #d3dce6;
    color: #333;
    height: 100%;
  }

  .el-container {
    height: 100%;
    .el-header {
      // background-color: #b3c0d1;
      color: #333;
      text-align: center;
      line-height: 60px;
      padding: 0;
    }

    .el-main {
      height: 100%;
      background-color: #e9eef3;
      color: #333;
      text-align: center;
      padding-bottom: 0;
      display: flex;
      flex-direction: column;
      .main {
        flex: 1;
      }
      .el-footer {
        // background-color: #b3c0d1;
        color: #333;
        line-height: 50px;
        text-align: center;
        padding: 0;
      }
    }
  }
}
</style>