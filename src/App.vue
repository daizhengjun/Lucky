<template>
  <div id="content">
    <TitleBar id="caption" />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view />
  </div>
</template>

<script>
import TitleBar from "./components/TitleBar";
export default {
  components: {
    TitleBar
  }
};
</script>

<style lang="less" scoped>
html {
  margin: 0px;
  padding: 0px;
}
body {
  height: 100%;
  margin: 0px;
  padding: 0px;
}
#content {
  height: 100%;
  background-color: #254053;
}
#caption {
  display: block;
  position: fixed;
  width: 100%;
  height: 32px;
  margin: 0px;
  padding: 0px;
  top: 0px;
  left: 0px;
  background-color: #254053;
  -webkit-app-region: drag;
}
</style>
