<template>
  <div class="system-set">
    <div class="primary-caption">
      标题：
      <el-input
        class="inputcaption"
        v-model="title"
        placeholder="请输入标题"
        maxlength="20"
        height="50%"
        show-word-limit
        clearable
      ></el-input>
      <el-color-picker v-model="color1"></el-color-picker>
    </div>
    <div>
      副标题：
      <el-input
        class="inputcaption"
        v-model="subTitle"
        placeholder="请输入标题"
        maxlength="20"
        height="50%"
        show-word-limit
        clearable
      ></el-input>
      <el-color-picker v-model="color2"></el-color-picker>
    </div>
    <el-select class="selbg" v-model="valuebg" placeholder="请选择背景">
      <el-option v-for="(item, key) in optsbg" :key="key" :value="item"></el-option>
    </el-select>
    <el-button type="primary" icon="el-icon-share" @click="reset()">重置</el-button>
    <label for="switch">自动导出</label>
    <el-switch id="switch" v-model="value" active-color="#13ce66" inactive-color="#ff4949">自动导出</el-switch>
    <el-button
      v-bind:disabled="!value"
      type="primary"
      icon="el-icon-upload2"
      @click="exportResult()"
    >导出</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      subTitle: "",
      valuebg: "",
      optsbg: ["背景一", "背景二", "背景三", "背景四", "背景五"],
      color1: "#409EFF",
      color2: "#409EFF",
      value: true
    };
  },
  methods: {
    reset() {
      // alert("xx");
    },
    exportResult() {}
  }
};
</script>

<style lang="less" scoped>
.inputcaption,
.selbg {
  border: 1px solid #409eff;
  border-radius: 5px;
  margin: 5px;
}
.inputcaption {
  width: 440px;
}
</style>
