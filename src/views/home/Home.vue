<template>
  <div class="tao-contaniner">
    <Frame>
      <div class="left-nav" slot="nav">
        <LeftNav></LeftNav>
      </div>
      <div class="header" slot="header">
        <Header @setInfo="setInfo"></Header>
      </div>
      <div class="main" slot="main">
        <slot name="main">main</slot>
      </div>
      <div class="footer" slot="footer">
        <slot name="footer">@在线学习平台</slot>
      </div>
    </Frame>
    <Dialog
      title="每日累积分数修改"
      :isShow="isShow"
      @confirm="confirm"
      @cancel="cancel"
    >
      <div slot="form">
        <el-form :model="row" label-position="right" label-width="80px">
          <el-form-item label="id" prop="id">
            <el-input v-model="row.id"></el-input>
          </el-form-item>
          <el-form-item label="分数" prop="score">
            <el-input v-model="row.score"></el-input>
          </el-form-item>
          <el-form-item label="描述" prop="description">
            <el-input v-model="row.description"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </Dialog>
  </div>
</template>

<script>
import Frame from "components/common/frame/Frame";
import LeftNav from "components/context/leftNav/LeftNav";
import Header from "components/context/header/Header";
import Dialog from "components/common/dialog/Dialog";

import { setParameters } from "network/other";

export default {
  components: {
    Frame,
    LeftNav,
    Header,
    Dialog,
  },
  data() {
    return {
      isShow: false,
      row: { id: "", score: 30, description: "" },
    };
  },
  methods: {
    setInfo() {
      this.isShow = true;
    },
    async confirm() {
      let result = await setParameters({
        id: this.row.id,
        description: this.row.description,
        value: this.row.score,
      });
      console.log(result);
      this.closeDialog();
    },
    cancel() {
      this.closeDialog();
    },
    closeDialog() {
      this.isShow = false;
    },
  },
};
</script>

<style lang="less" scoped>
.tao-contaniner {
  height: 100%;

  .left-nav {
    height: 100%;
  }
  .main {
    background: #ffffff;
    height: 100%;
  }
}
</style>