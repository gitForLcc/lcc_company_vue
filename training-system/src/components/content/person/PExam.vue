<template>
  <div id="pexam">
    <!-- top -->
    <div class="top">
      <i></i><span>考试系统</span>
    </div>
    <template>
      <el-table :data="tableData" style="width: 100%" :default-sort="{prop: 'id', order: 'descending'}">
        <el-table-column prop="id" label="ID" sortable width="50"></el-table-column>
        <el-table-column prop="paper" label="试卷" sortable width="70"></el-table-column>
        <el-table-column prop="test" label="实验题" sortable width="70"></el-table-column>
        <el-table-column prop="multipleChoice" label="选择题" sortable width="70"></el-table-column>
        <el-table-column prop="judgement" label="判断题" sortable width="70"></el-table-column>
        <el-table-column prop="startTime" label="开始时间" sortable width="100"></el-table-column>
        <el-table-column prop="endTime" label="截止时间" sortable width="100"></el-table-column>
        <el-table-column label="状态" sortable width="100">
          <template slot-scope="scope">
            <el-button size="mini" class="btn" type="success">进行中</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="teacher" label="教员" sortable width="100"></el-table-column>
        <el-table-column label="评估">
          <template slot-scope="scope">
            <el-button @click="handleChoice()" size="mini" class="btn" type="success" plain>选择题</el-button>
            <el-button @click="handleJudge()" size="mini" class="btn" type="success" plain>判断题</el-button>
            <el-button @click="handleChallenge()" size="mini" class="btn" type="success" plain>挑战题</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
    <el-dialog title="" :visible.sync="dialogTableVisible">
      <el-container>
        <template>
          <div id="rediofordialog">
            <div class="redioContent">
              <!-- 顶部进度条 -->
              <div class="range">
                <div class="left">
                  <el-progress :text-inside="true" :stroke-width="22" :percentage="70"></el-progress>
                </div>
                <div class="left">
                  <span>当前第1题/共20题</span>
                </div>
                <div class="clock">00:00:00</div>
              </div>
              <!-- 中间答题区 -->
              <div class="answer">
                <!-- 题目类型 -->
                <div class="type">
                  <i class="el-icon-success"></i>[单选题]
                </div>
                <!-- 题目 -->
                <div class="main">
                  <!-- 标题 -->
                  <div class="title">
                    第 1 题 、电话、电报和专线电话分别使用的数据交换技术是？
                  </div>
                  <!-- 内容 -->
                  <div>
                    <el-radio v-model="radio7" label="2" border>A.电路交换技术、报文交换技术和分组交换技术</el-radio>
                    <el-radio v-model="radio7" label="3" border>B.分组交换技术、报文交换技术和电路交换技术</el-radio>
                    <el-radio v-model="radio7" label="4" border>C.报文交换技术、分组交换技术和电路交换技术</el-radio>
                    <el-radio v-model="radio7" label="5" border>D.电路交换技术、分组交换技术和报文交换技术</el-radio>
                  </div>
                </div>
                <!-- 底部操作区 -->
                <div class="handle">
                  <el-button type="success">提交试卷</el-button>
                  <el-button type="primary">下一题</el-button>
                </div>
              </div>
            </div>
          </div>
        </template>
      </el-container>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogTableVisible: false,
      radio7: 1,
      tableData: [{
        id: '1',
        paper: 'test1',
        test: '3',
        multipleChoice: '0',
        judgement: '0',
        startTime: '2018-01-01 11:27:43',
        endTime: '2018-01-01 15:23:03',
        teacher: 'teacher2',
      },
      {
        id: '1',
        paper: 'test1',
        test: '3',
        multipleChoice: '0',
        judgement: '0',
        startTime: '2018-01-01 11:27:43',
        endTime: '2018-01-01 15:23:03',
        teacher: 'teacher2',
      }],
    }
  },
  methods:{
    handleChoice(){
      this.dialogTableVisible=true;
    },
    handleJudge(){
      this.dialogTableVisible=true;
    },
    handleChallenge(){
      this.dialogTableVisible=true;
    }
  }
}

</script>
<style scoped>
#pexam {
  width: 100%;
  height: 100%;
}

.top {
  height: 50px;
  line-height: 50px;
  background: #ddd;
  color: #000000;
}

.top i {
  display: inline-block;
  height: 40px;
  width: 4px;
  background: #5FB62D;
  margin: 5px 5px 5px 10px;
  vertical-align: middle;
}

.top i span {
  vertical-align: middle;
}

.content {
  width: 100%;
  min-height: 300px;
  border: 1px solid #ccc;
}

.range {
  background: #232C31;
  padding: 10px 18px;
  font-size: 18px;
}

.range:after {
  content: '';
  display: block;
  clear: both;
}

.left {
  float: left;
}
.clock{
  float:right;
}

.range>.left:nth-child(1) {
  width: 70%;
}

.range>.left:nth-child(2) {
  width: 15%;
  padding-left: 5px;
}

.range>.left:nth-child(3) {
  width: 15%;
  padding-left: 5px;
}

.answer {
  color: #000000;
}

.answer .type {
  height: 50px;
  padding: 15px;
  border-bottom: 1px solid #ccc;
}

.main {
  padding: 30px 15px;
}

.el-radio {
  width: 100%;
}

.title {
  margin-bottom: 10px;
}

.el-radio.is-bordered+.el-radio.is-bordered {
  margin-left: 0;
  margin-top: 8px;
}

.handle {
  text-align: right;
  padding: 10px;
}

</style>
