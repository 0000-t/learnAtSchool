<template>
  <div class="tao-container">
    <InputGroup @search="getInputInfo"></InputGroup>
    <TNTCharts :options="study"></TNTCharts>
    <TNTCharts :options="course"></TNTCharts>
  </div>
</template>

<script>
import TNTCharts from "views/chart/component/TNTCharts";
import InputGroup from "views/chart/component/InputGroup";
import { getCourseContextAnalysis, studentDuration } from "network/chart";

export default {
  components: {
    TNTCharts,
    InputGroup,
  },
  data() {
    return {
      course: {},
      study: {},
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      let courseRes = await getCourseContextAnalysis();
      this.searchStudentDuration(10, 100);
      this.mangerCourse(courseRes.data);
    },

    getInputInfo(data) {
      this.searchStudentDuration(data.interval, data.maxValue);
    },

    async searchStudentDuration(interval, maxValue) {
      let studentRes = await studentDuration(interval, maxValue);
      this.mangerStudyTimes(studentRes.data);
    },

    mangerCourse(data) {
      this.course = {
        title: "课程内容分析",
        series: [
          {
            name: "时长",
            type: "bar",
            data: data.map((item) => item.duration),
          },
          {
            name: "人数",
            type: "bar",
            data: data.map((item) => item.counts),
          },
        ],
        legend: ["时长", "人数"],
        xAxis: data.map((item) => item.title),
      };
    },

    mangerStudyTimes(data) {
      this.study = {
        title: "学员时长分析",
        series: [
          {
            name: "人数",
            type: "bar",
            data: data.map((item) => item.counts),
          },
        ],
        xAxis: data.map((item) => item.intervalLevel),
      };
    },
  },
};
</script>

<style lang="less" scoped>
.tao-container {
  padding: 20px 20px 20px 0;
}
</style>