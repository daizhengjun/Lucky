<template>
  <div class="item">
    <el-row type="flex" class="row-bg">
      <el-col :span="6">
        <!-- <div class="grid-content bg-purple"></div> -->
        <el-avatar class="grid-content bg-purple" shape="square" :size="size" :src="defaultAvatar"></el-avatar>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      size: 36, //"large", "medium", "small"
      defaultAvatar: "../assets/logo.png"
    };
  }
};
</script>

<style lang="less" scoped>
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>