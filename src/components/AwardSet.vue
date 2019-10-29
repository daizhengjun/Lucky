<template>
  <div class="awards">
    <el-button type="primary" @click="dialogVisible = true">添加</el-button>
    <vuedraggable class="wrapper" v-model="awardData">
      <transition-group class="c_ul">
        <div v-for="(item, index) in awardData" :key="item.date" class="award-item">
          <el-avatar
            class="it"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
          <p class="it">{{item.name}}</p>
          <p class="it">{{item.date}}</p>
          <el-button class="it" size="mini" @click="editAwardItem(item)">编辑</el-button>
          <el-button class="it" size="mini" type="danger" @click="delAwardItem(index)">删除</el-button>
        </div>
      </transition-group>
    </vuedraggable>
    <el-dialog
      class="award-dialog"
      title="提示"
      :modal="false"
      :show-close="false"
      :visible.sync="dialogVisible"
      @close="handleClose"
    >
      <div class="iter">
        学校名称:
        <el-input class="iter" v-model="awardName" placeholder="请输入内容"></el-input>
      </div>
      <div class="iter">
        年级名称:
        <el-input class="iter" v-model="objectName" placeholder="请输入内容"></el-input>
      </div>
      <div class="iter">
        年级总数:
        <el-input class="iter" v-model="awardTotal" placeholder="请输入内容"></el-input>
      </div>
      <div class="iter">
        年级每次/名:
        <el-input class="iter" v-model="awardStep" placeholder="请输入内容"></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
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
      this.awardData.push({
        img: "",
        date: "2016-05-09",
        name: "王金虎",
        address: "上海市普陀区金沙江路 1519 弄"
      });
    },
    delAwardItem(index) {
      this.awardData.splice(index, 1);
    },
    editAwardItem(item) {
      this.dialogVisible = true;
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
  //   margin: -40px auto;
}
.c_ul {
  margin-block-start: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: #777777;
  width: 400px;
  height: 150px;
  border: 2px solid #2156ff;
}
.award-item {
  display: flex;
  width: 100%;
  height: 50px;
  background-color: #42b983;
  color: #ffffff;
  margin: 1px;
  border: 2px solid #2156ff;
}
.award-dialog {
  width: 1000px;
}
.it {
  margin: 5px;
  align-self: center;
  align-items: center;
  justify-content: flex-start;
}
.iter {
  margin: 5px;
}
</style>