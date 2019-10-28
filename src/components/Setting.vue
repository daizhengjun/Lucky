<template>
  <div class="setwin">
    <el-backtop ref="sets" @click="drawer = true"></el-backtop>
    <el-drawer
      custom-class="settingTitle"
      title="设置"
      :show-close="showClose"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
    >
      <el-tabs class="tabs" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="系统管理" name="sys">
          <SystemSet />
        </el-tab-pane>
        <el-tab-pane label="声音管理" name="audio">
          <AudioSet />
        </el-tab-pane>
        <el-tab-pane label="人员管理" name="members">
          <MemberSet />
        </el-tab-pane>
        <el-tab-pane label="奖品管理" name="awards">
          <AwardSet />
        </el-tab-pane>
      </el-tabs>
    </el-drawer>
  </div>
</template>

<script>
import SystemSet from "./SystemSet";
import MemberSet from "./MemberSet";
import AudioSet from "./AudioSet";
import AwardSet from "./AwardSet";

export default {
  data() {
    return {
      activeName: "first",
      drawer: false,
      showClose: false,
      direction: "ttb"
    };
  },
  components: {
    SystemSet,
    MemberSet,
    AudioSet,
    AwardSet
  },
  methods: {
    handleClose(done) {
      done();
      // alert("lost");
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  mounted() {
    this.$refs.sets.visible = true;
  }
};
</script>

<style lang="less" scoped>
/deep/ .settingTitle {
  font-weight: bold;
  background-image: url("../assets/glass.jpg");
  background-attachment: fixed;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  opacity: 0.9;
}
/deep/ .settingTitle header {
  color: black;
  margin-bottom: 5px;
}
.tabs {
  margin: auto 5px;
}
</style>