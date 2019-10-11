<template>
  <div class="content">
    <el-image class="bg" :src="bgimg" fit="fill"></el-image>
    <!-- <div class="txt">{{msg}}</div> -->
    <!-- <div class="view">
      <router-view />
    </div>-->
    <Setting />
  </div>
</template>

<script>
import Setting from "../components/Setting";

export default {
  data() {
    return {
      msg: "移动的标题",
      bgimg:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    };
  },
  components: {
    Setting
  }
};
</script>

<style lang="less">
.content {
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
}
.bg {
  position: absolute;
  z-index: 1;
}
.txt {
  position: absolute;
  z-index: 1;
  margin-top: 5px;
}
.view {
  position: absolute;
  z-index: 2;
}
</style>