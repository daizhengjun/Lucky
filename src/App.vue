<template>
  <div class="win">
    <el-container>
      <el-header height="40px">
        <TitleBar class="caption" />
      </el-header>
      <el-main>
        <!-- <router-view class="view"></router-view> -->
        <!-- <div class="view"></div> -->
        <Winners />
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
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 36px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.el-main::-webkit-scrollbar {
  display: none;
}
.view {
  margin: -20px;
  width: 100%;
  height: 100%;
  background-image: url("./assets/bg.jpg");
}
</style>
