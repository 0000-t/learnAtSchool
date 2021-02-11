<!--
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-02-08 16:58:08
 * @LastEditors: tao
 * @LastEditTime: 2021-02-11 15:57:50
-->
<template>
  <div class="teacher">
    <table class="tao_table" width="100%" cellpadding="8">
      <thead>
        <th>学生</th>
        <th>课程</th>
        <th>分数</th>
        <th>学习时长</th>
        <th>学分</th>
      </thead>
      <tbody v-for="key of Object.keys(tableData)" :key="key">
        <tr v-for="(item, i) of tableData[key]" :key="i">
          <td v-if="i == 0" :rowspan="tableData[key].length">
            {{ item.username }}
          </td>
          <td>{{ item.title }}</td>
          <td>{{ item.teacherScope }}</td>
          <td>{{ item.duration }}</td>
          <td v-if="i == 0" :rowspan="tableData[key].length">
            {{ sum(tableData[key]) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getStudentStudyAnalysis } from "network/student";
export default {
  data() {
    return {
      tableData: {},
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      const result = await getStudentStudyAnalysis();
      console.log(result);
      if (!result.flag) return;
      this.tableData = result.data;
    },
  },
  computed: {
    sum() {
      return (item) =>
        item
          .map((item) => item.scope)
          .reduce((pre, curr) => Number(pre) + Number(curr));
    },
  },
};
</script>

<style lang="less" scoped>
.teacher {
  padding: 20px;
  .tao_table {
    border-collapse: collapse;
    border: 1.5px solid rgb(230, 230, 230);
    color: rgb(96, 98, 102);
    font-size: 16px;
    thead {
      th {
        padding: 15px 0;
        border: 1.5px solid rgb(230, 230, 230);
        background: rgb(242, 242, 242);
      }
    }
    tbody {
      td {
        padding: 13px 0;
        border: 1.5px solid rgb(230, 230, 230);
      }
    }
  }
}
</style>