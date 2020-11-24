<template>
  <div class="tao-contaniner">
    <Frame>
      <div class="left-nav" slot="nav">
        <LeftNav></LeftNav>
      </div>
      <div class="header" slot="header">
        <slot name="header">header</slot>
      </div>
      <div class="main" slot="main">
        <slot name="main">main</slot>
      </div>
      <div class="footer" slot="footer">
        <slot name="footer">@TNT</slot>
      </div>
    </Frame>
  </div>
</template>

<script>
import Frame from "components/common/frame/Frame";
import LeftNav from "components/context/leftNav/LeftNav";

export default {
  components: {
    Frame,
    LeftNav,
  },
  methods: {},
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