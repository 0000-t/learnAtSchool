<template>
  <div class="integral">
    <div class="title">每日累积分数设置</div>
    <el-form :model="row" label-position="right" label-width="80px">
      <!-- <el-form-item label="id" prop="id">
        <el-input v-model="row.id"></el-input>
      </el-form-item> -->
      <el-form-item label="分数" prop="score">
        <el-input v-model="row.score"></el-input>
      </el-form-item>
      <el-form-item label="描述" prop="description">
        <el-input v-model="row.description"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { setParameters } from "network/other";
import taoMessage from "common/message";
export default {
  data() {
    return {
      row: {},
    };
  },
  methods: {
    async onSubmit() {
      let result = await setParameters({
        description: this.row.description,
        value: this.row.score,
      });
      console.log(result);
      if (result.flag) {
        taoMessage("设置");
      } else {
        taoMessage("设置", "err");
      }
    },
  },
};
</script>

<style lang="less" scoped>
.integral {
  width: 300px;
  padding-top: 30px;
  margin: 0px auto;
  .title {
    margin-bottom: 30px;
  }
}
</style>