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
      <div v-for="(items, index) in myRoutes" :key="index">
        <el-submenu v-if="!!items.data.length" :index="index + ''">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{ items.name }}</span>
          </template>
          <el-menu-item-group v-for="(item, i) in items.data" :key="i">
            <el-menu-item :index="item.path">{{ item.name }}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </div>
    </el-menu>
  </div>
</template>

<script>
import { routeSet, routeGroup } from "common/data";
export default {
  props: {
    routes: {
      type: Array,
    },
  },
  data() {
    return {
      routeList: [
        {
          name: "权限管理",
          data: [],
        },
        {
          name: "课程管理",
          data: [],
        },
        {
          name: "统计分析",
          data: [],
        },
        {
          name: "基础设置",
          data: [],
        },
      ],
    };
  },
  watch: {
    $route(to, from) {
      if (to.path === "/login") {
        this.routeList.forEach((item) => {
          item.data = [];
        });
        console.log(this.routeList);
      }
    },
  },
  create() {},
  methods: {
    handleSelect(key, keyPath) {
      this.$route.path != key && this.$router.push(key);
    },
  },

  computed: {
    myRoutes() {
      let routes = this.$store.getters.getRouteList;
      console.log(routes);
      routes.forEach((item) => {
        this.routeList[routeGroup[item.id]].data.push(item);
      });
      return this.routeList;
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