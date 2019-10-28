<template>
  <div class="awards">
    <el-button type="primary" @click="dialogVisible = true">添加</el-button>
    <el-dialog
      class="award-dialog"
      title="提示"
      :visible.sync="dialogVisible"
      :before-close="handleClose"
    >
      <div>
        学校名称:
        <el-input v-model="awardName" placeholder="请输入内容"></el-input>
      </div>
      <div>
        年级名称:
        <el-input v-model="objectName" placeholder="请输入内容"></el-input>
      </div>
      <div>
        年级总数:
        <el-input v-model="awardTotal" placeholder="请输入内容"></el-input>
      </div>
      <div>
        年级每次/名:
        <el-input v-model="awardStep" placeholder="请输入内容"></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <vuedraggable class="wrapper" v-model="awardData">
      <transition-group>
        <div v-for="item in awardData" class="item">
          <!-- <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar> -->
          <p>{{item.name}}</p>
          <!-- <p>{{item.date}}</p> -->
        </div>
      </transition-group>
    </vuedraggable>
  </div>
</template>

<script>
import vuedraggable from "vuedraggable";

export default {
  data() {
    return {
      awardName: "",
      objectName: "",
      awardTotal: 100,
      awardStep: 10,
      dialogVisible: false,
      awardData: [
        {
          img: "",
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          img: "",
          date: "2016-05-04",
          name: "王大虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          img: "",
          date: "2016-05-01",
          name: "王二虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          img: "",
          date: "2016-05-03",
          name: "王细虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          img: "",
          date: "2016-05-08",
          name: "王老虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          img: "",
          date: "2016-05-06",
          name: "王三虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          img: "",
          date: "2016-05-07",
          name: "王四虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  },
  components: {
    vuedraggable
  },
  props: [],
  computed: {},
  watch: {},
  created() {},
  mounted() {}
};
</script>

<style lang='less' scoped>
.wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}
.item {
  width: 300px;
  height: 50px;
  background-color: #42b983;
  color: #ffffff;
}
.award-dialog {
  z-index: 0;
  width: "30%";
}
</style>