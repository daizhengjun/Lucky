<template>
  <div class="system-set">
    <el-input
      class="inputcaption"
      v-model="title"
      placeholder="请输入标题"
      maxlength="20"
      height="50%"
      show-word-limit
      clearable
    ></el-input>
    <el-select class="selbg" v-model="valuebg" placeholder="请选择背景">
      <el-option v-for="(item, key) in optsbg" :key="key" :value="item"></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      valuebg: "",
      optsbg: ["背景一", "背景二", "背景三", "背景四", "背景五"]
    };
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