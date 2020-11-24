<template>
  <div id="app">
    <Home>
      <div slot="main" class="main">
        <router-view></router-view>
        <!-- <Management>
          <div slot="module">
            <InputGroup></InputGroup>
          </div>
          <div slot="table">
            <Table></Table>
          </div>
        </Management> -->
      </div>
    </Home>
  </div>
</template>

<script>
import Home from "views/home/Home";
import Management from "components/context/management/Management";
import Table from "components/common/table/Table";
import InputGroup from "components/context/inputGroup/InputGroup";
export default {
  name: "app",
  components: {
    Home,
    Management,
    Table,
    InputGroup,
  },
};
</script>

<style lang="less" scoped>
@import url("assets/normalize.css");

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
