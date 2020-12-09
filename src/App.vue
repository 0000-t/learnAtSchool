<template>
  <div id="app">
    <Home v-show="isShow">
      <div slot="main" class="main">
        <router-view></router-view>
      </div>
    </Home>
    <Login v-show="!isShow"></Login>
  </div>
</template>

<script>
import Home from "views/home/Home";
import Login from "views/login/Login";
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
    legalPath(to) {
      let include = this.$router.options.routes.filter(
        (item) => item.path == to.path && to.path != "/login"
      );
      this.isShow = !!include.length;
      if (!this.isShow && to.path != "/login") {
        this.$router.replace({ path: "/login" });
      }
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
