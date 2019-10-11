<template>
  <div class="list">
    <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
      <li v-for="(i, key) in count" class="infinite-list-item" :key="key">
        <WinnerItem />
      </li>
    </ul>
  </div>
</template>

<script>
import WinnerItem from "./WinnerItem";

export default {
  data() {
    return {
      count: 0
    };
  },
  methods: {
    load() {
      this.count += 2;
    }
  },
  components: {
    WinnerItem
  }
};
</script>

<style lang="less" scoped>
ul li {
  list-style-type: none;
  margin: 8px;
}
</style>