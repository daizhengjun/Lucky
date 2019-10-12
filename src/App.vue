<template>
  <div class="win">
    <el-container>
      <el-header height="auto" class="header">
        <TitleBar class="caption" />
      </el-header>
      <el-main>
        <!-- <router-view class="view"></router-view> -->
        <div class="view"></div>
        <!-- <Winners /> -->
        <Settings />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import TitleBar from "./components/TitleBar";
import Settings from "./components/Setting";
import Winners from "./components/Winners";

export default {
  components: {
    TitleBar,
    Settings,
    Winners
  }
};
</script>

<style lang="less">
html,
body,
#app,
.win,
.el-container {
  margin: 0px;
  height: 100%;
}
body {
  overflow: hidden;
}
.el-container .el-header {
  padding: 0px;
}
.el-container .el-main {
  padding: 0px;
}
.el-main::-webkit-scrollbar {
  display: none;
}
.view {
  width: 100%;
  height: 100%;
  background-image: url("./assets/bg.jpg");
}
</style>
