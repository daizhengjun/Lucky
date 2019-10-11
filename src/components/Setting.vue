<template>
  <div class="setwin">
    <el-backtop ref="sets" :visibility-height="height" @click="drawer = true"></el-backtop>
    <el-drawer
      custom-class="settingTitle"
      title="设置"
      :show-close="showClose"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
    >
      <div class="setitems">
        <el-input class="inputcaption" v-model="title" placeholder="请输入标题"></el-input>
        <el-select class="selbg" v-model="valuebg" placeholder="请选择背景">
          <el-option v-for="(item, key) in optsbg" :key="key" :value="item"></el-option>
        </el-select>
        <el-select class="selmusic" v-model="valuemusic" placeholder="请选择背景音乐" clearable>
          <el-option v-for="(item, key) in optsmusic" :key="key" :value="item"></el-option>
        </el-select>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      drawer: false,
      showClose: false,
      height: 0,
      direction: "ttb",
      valuebg: "",
      valuemusic: "",
      optsbg: ["背景一", "背景二", "背景三", "背景四", "背景五"],
      optsmusic: [
        "背景音乐一",
        "背景音乐二",
        "背景音乐三",
        "背景音乐四",
        "背景音乐五"
      ]
    };
  },
  methods: {
    handleClose(done) {
      done();
      // alert("lost");
    }
  },
  mounted() {
    this.$refs.sets.visible = true;
  }
};
</script>

<style lang="less">
.settingTitle {
  font-weight: bold;
  color: black;
  background-image: url("../assets/glass.jpg");
  // background-repeat: no-repeat;
  background-attachment: fixed;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  overflow: scroll;
  opacity: 0.9;
}
.inputcaption,
.selbg,
.selmusic {
  border: 1px solid #409eff;
  border-radius: 5px;
  margin: 5px;
}
</style>