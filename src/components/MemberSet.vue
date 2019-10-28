<template>
  <div class="member-set">
    <div v-if="memberFile === ''">
      <el-upload
        class="upload-demo"
        :accept="accepts"
        :before-upload="handleBeforeAccept"
        action
        drag
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将Excel文件拖到此处</div>
      </el-upload>
    </div>
    <div v-else>
      <el-table
        :data="tableData"
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0,0,0,0.8)"
        class="members"
      >
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      memberFile: "",
      loading: true,
      accepts: ".xlsx",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  methods: {
    handleBeforeAccept(f) {
      console.log(f);
      this.memberFile = f.path;
      // TODO read xlsx file, write to tableData
      return false;
    }
  }
};
</script>

<style lang="less" scoped>
.members {
  width: 80%;
  height: 200;
}
</style>