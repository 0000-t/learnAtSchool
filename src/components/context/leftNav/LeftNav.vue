<template>
  <div class="left-nav">
    <div class="logo">
      <!-- <img
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605674359432&di=df2e1e987191c7e0d6a0058c19e693ac&imgtype=0&src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F8852827947%2F0.jpg"
        alt=""
      /> -->
      <div>后台管理系统</div>
    </div>
    <el-menu
      :default-active="nowPath"
      class="el-menu-vertical-demo tao-left-nav"
      @select="handleSelect"
      background-color="#20222A"
      text-color="#D2D3D4"
      active-text-color="#409EFF"
    >
      <el-menu-item
        v-for="(item, index) in myRoutes"
        :index="item.path"
        :key="index"
      >
        <i class="el-icon-menu"></i>
        <span slot="title">{{ item.name }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: {
    routes: {
      type: Array,
    },
  },
  data() {
    return {};
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$router.replace(key);
    },
  },
  computed: {
    myRoutes() {
      return this.$router.options.routes.filter((item) => item.path != "");
    },
    nowPath() {
      return this.$route.path;
    },
  },
};
</script>

<style lang="less" scoped>
.left-nav {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #16181d;
  color: #d2d3d4;
  .logo {
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
  .tao-left-nav {
    // height: 100%;
    border-right: none;
    flex: 1;
  }
}
</style>