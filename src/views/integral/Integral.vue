<template>
  <div class="integral">
    <div class="title">每日累积分数设置</div>

    <div class="table">
      <div class="theader">
        <span>类型</span>
        <span>数值</span>
      </div>
      <div class="tbody">
        <span>分数</span>
        <span>
          <input
            class="t-input"
            type="number"
            placeholder="请输入内容"
            v-model="score"
          />
        </span>
      </div>
      <div class="tbody">
        <span>描述</span>
        <span>
          <input
            class="t-input"
            type="text"
            placeholder="请输入内容"
            v-model="description"
          />
        </span>
      </div>
    </div>
    <el-button type="primary" @click="onSubmit">提交</el-button>
  </div>
</template>

<script>
import Table from "components/common/table/Table";
import { setParameters, getParameters } from "network/other";
import taoMessage from "common/message";
export default {
  components: { Table },
  data() {
    return {
      score: "",
      description: "",
    };
  },
  created() {
    this.getInfo();
  },
  methods: {
    async getInfo() {
      const result = await getParameters();
      this.score = +result.data.value;
      this.description = result.data.description;
    },

    async onSubmit() {
      let result = await setParameters({
        id: 1,
        description: this.description,
        value: +this.score,
      });
      if (result.flag) {
        taoMessage("设置");
      } else {
        taoMessage("设置", "err");
      }
      this.getInfo();
    },
  },
};
</script>

<style lang="less" scoped>
.integral {
  padding-top: 30px;
  margin: 0px auto;
  .title {
    margin-bottom: 30px;
  }
  .table {
    width: 80%;
    margin: 0 auto 30px;
    border: 1px solid rgb(235, 238, 245);
    div {
      padding: 0;
      width: calc(100%);
      text-align: center;
      height: 40px;
      line-height: 40px;
      &:first-of-type {
        background: rgb(242, 242, 242);
      }

      span {
        display: inline-block;
        width: calc(100% - 154px);
        border-top: 1px solid rgb(235, 238, 245);
        margin: 0;
        padding: 0;
        height: 40px;
        line-height: 40px;
        &:first-of-type {
          width: 150px;
        }

        &:first-child {
          border-right: 1px solid rgb(235, 238, 245);
        }

        .t-input {
          &::placeholder {
            color: rgb(202, 196, 204);
          }
          border-radius: 0px;
          border: 0px solid #dcdfe6;
          color: #606266;
          display: inline-block;
          font-size: inherit;
          height: 39px;
          line-height: 39px;
          outline: 0;
          padding: 0 15px;
          width: calc(100% - 30px);
        }
      }
    }
  }
}
</style>