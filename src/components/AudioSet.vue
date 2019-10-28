<template>
  <div class="audio-set">
    <el-select class="selmusic" v-model="valuemusic" placeholder="请选择背景音乐">
      <el-option v-for="(item, key) in optsmusic" :key="key" :value="item"></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valuemusic: "",
      optsmusic: [
        "静音",
        "背景音乐一",
        "背景音乐二",
        "背景音乐三",
        "背景音乐四",
        "背景音乐五"
      ]
    };
  },
  methods: {},
  components: {},
  props: [],
  computed: {},
  watch: {},
  created() {},
  mounted() {}
};
</script>

<style lang="less" scoped>
</style>