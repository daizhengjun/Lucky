<template>
  <div class="titlebox" v-show="showTitleBar">
    <div class="iconbox" v-if="showIcon">
      <!-- <img id="icon" src="../assets/logo.png" v-if="showIcon" /> -->
      <i class="el-icon-edit"></i>
      <!-- <el-img id="icon" :src="src"></el-img> -->
      <!-- <el-avatar shape="square" size="small" fit="scale-down" :src="src"></el-avatar> -->
    </div>
    <span class="textbox">This is a title</span>
    <div class="btnsbox">
      <el-button-group class="btngroup">
        <el-button
          @click.left="btnMinClick"
          v-if="showMin"
          class="btnMin"
          type="primary"
          icon="el-icon-minus"
          plain
        ></el-button>
        <el-button
          @click.left="btnMaxClick"
          v-if="showMax"
          class="btnMax"
          type="primary"
          icon="el-icon-full-screen"
          plain
        ></el-button>
        <el-button
          @click.left="btnCloseClick"
          v-if="showClose"
          class="btnClose"
          type="danger"
          icon="el-icon-close"
          plain
        ></el-button>
      </el-button-group>
    </div>
  </div>
</template>

<script>
import { ipcRenderer } from "electron";

export default {
  name: "TitleBar",
  data() {
    return {
      showIcon: true,
      showTitleBar: true,
      showMin: true,
      showMax: true,
      showClose: true,
      src: "../assets/logo.png"
    };
  },
  methods: {
    btnMinClick() {
      ipcRenderer.send("minimize");
    },
    btnMaxClick() {
      this.showTitleBar = false;
      ipcRenderer.send("maximize");
    },
    btnCloseClick() {
      ipcRenderer.send("close");
    }
  },
  mounted() {
    ipcRenderer.on("restore", () => {
      this.showTitleBar = true;
    });
  }
};
</script>

<style lang="less" scoped>
.titlebox {
  width: 100%;
}
.iconbox,
.textbox,
.btnsbox {
  float: left;
  background-color: rgb(238, 233, 233);
  width: 33.3%;
  height: 36px;
  -webkit-app-region: drag;
}
.iconbox,
.textbox {
  display: flex;
  align-items: center;
  -webkit-app-region: drag;
}
.el-icon-edit {
  margin-left: 5px;
}
.textbox {
  justify-content: center;
}
.btnsbox {
  text-align: right;
}
.btngroup {
  margin-right: -3px;
  -webkit-app-region: no-drag;
}
.btnMin,
.btnMax,
.btnClose {
  height: 36px;
  border: 0px;
}
.btnClose {
  width: 60px;
}
</style>