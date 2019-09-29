<template>
  <div id="titlebar" v-show="showTitleBar">
    <!-- <img id="icon" src="../assets/logo.png" v-if="showIcon" /> -->
    <i id="icon" class="el-icon-edit" v-if="showIcon"></i>
    <!-- <el-img id="icon" :src="src"></el-img> -->
    <!-- <el-avatar shape="square" size="small" fit="scale-down" :src="src"></el-avatar> -->
    <div id="title">This is a title</div>
    <div id="titlebtns">
      <el-button
        @click.left="btnMinClick"
        v-if="showMin"
        id="btnMin"
        type="primary"
        icon="el-icon-minus"
        plain
      ></el-button>
      <el-button
        @click.left="btnMaxClick"
        v-if="showMax"
        id="btnMax"
        type="success"
        icon="el-icon-full-screen"
        plain
      ></el-button>
      <el-button
        @click.left="btnCloseClick"
        v-if="showClose"
        id="btnClose"
        type="info"
        icon="el-icon-close"
        plain
      ></el-button>
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
      showMax: false,
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
#titlebar {
  display: block;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: darkviolet;
  -webkit-app-region: drag;
  top: 0px;
  position: fixed;
  padding: none;
  margin: 0px;
}
#icon {
  position: fixed;
  width: 20px;
  height: 20px;
  top: 2px;
  left: 2px;
  border-radius: 5px;
  z-index: 1;
}
#title {
  position: fixed;
  top: 0px;
  left: 30px;
}
#titlebtns {
  -webkit-app-region: no-drag;
  position: fixed;
  height: 100%;
  top: 0px;
  right: 0px;
}
#titlebtns button.hover {
  background-color: #3f3f41;
}
#btnMin {
  width: 40px;
  border: none;
  background-color: transparent;
}
#btnMax {
  width: 40px;
  border: none;
  background-color: transparent;
}
#btnMin #btnMax button.hover {
  background-color: #3f3f41;
}
#btnClose {
  width: 50px;
  border: none;
  background-color: transparent;
}
#btnClose button.hover {
  background-color: red;
}
</style>