<template>
  <div class="win">
    <TitleBar class="caption" />
    <BodyContent class="context" />
  </div>
</template>

<script>
import TitleBar from "./components/TitleBar";
import BodyContent from "./views/BodyContent";

export default {
  components: {
    TitleBar,
    BodyContent
  }
};
</script>

<style lang="less">
body {
  margin: 0px;
}
.context {
  background-color: aquamarine;
}
</style>
