<template>
  <div id="app">
    <Home v-show="isShow">
      <div slot="main" class="main">
        <router-view></router-view>
      </div>
    </Home>
    <Login v-show="!isShow" @power="getPower"></Login>
  </div>
</template>

<script>
import Home from "views/home/Home";
import Login from "views/login/Login";
import { routeSet } from "common/data";
export default {
  name: "app",
  components: {
    Home,
    Login,
  },
  data() {
    return {
      isShow: true,
    };
  },
  created() {
    this.storage();
    if (this.$route.path != "/") {
      this.legalPath(this.$route);
    }
  },
  watch: {
    $route(to, from) {
      this.legalPath(to);
    },
  },
  methods: {
    getPower(data) {
      //存储权限表
      this.$store.commit("setPower", { power: data });
      //生成路由表
      this.createRouterList(data);
    },

    legalPath(to) {
      let include = this.$router.options.routes.filter(
        (item) => item.path == to.path && to.path != "/login"
      );
      this.isShow = !!include.length;
      if (!this.isShow && to.path != "/login") {
        this.$router.replace({ path: "/login" });
      }
      this.$store.commit("setStatus", { status: "admin" });
    },

    createRouterList(power) {
      //生成路由表
      let routeList = power.map((item) => {
        routeSet[item].path = `/${item}`;
        return routeSet[item];
      });
      //存储路由表
      this.$store.commit("setRouteList", { routeList });
    },

    storage() {
      // 在页面刷新时将vuex里的信息保存到sessionStorage里
      // beforeunload事件在页面刷新时先触发
      window.addEventListener("beforeunload", () => {
        window.sessionStorage.setItem(
          "store",
          JSON.stringify(this.$store.state)
        );
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import url("assets/css/normalize.css");

#app {
  height: 100%;
  .a {
    color: red;
  }
  .main {
    height: 100%;
  }
}
</style>
