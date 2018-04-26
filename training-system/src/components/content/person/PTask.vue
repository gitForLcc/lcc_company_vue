<template>
  <div id="ptask">
    <div class="top">
      <i></i><span>任务挑战</span>
    </div>
    <template>
      <el-table :data="tableData" stripe border style="width: 100%">
        <el-table-column prop="course" label="课程" width="120">
        </el-table-column>
        <el-table-column prop="discription" label="描述" width="220">
        </el-table-column>
        <el-table-column prop="level" label="难易" width="60">
        </el-table-column>
        <el-table-column prop="project" label="题目" width="100">
        </el-table-column>
        <el-table-column prop="finishproject" label="完成题目" width="100">
        </el-table-column>
        <el-table-column label="进度" width="180">
          <template slot-scope="scope">
            <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="success" icon="el-icon-edit"></el-button>
            <el-button size="mini" type="primary" icon="el-icon-share"></el-button>
            <el-button size="mini" type="warning" icon="el-icon-delete"></el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
    <div class="page">
      <el-pagination 
      @size-change="handleSizeChange" 
      @current-change="handleCurrentChange" 
      :current-page="currentPage4" 
      :page-sizes="[100, 200, 300, 400]" 
      :page-size="100" layout="total, sizes, prev, pager, next, jumper" 
      :total="400">
    </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentPage4: 4,
      tableData: [{
        course: '课程1,课程2,课程3,课程4',
        discription: '课程1,课程1,课程1,课程1,课程1,课程1,课程1,课程1,课程1,课程1,课程1,课程1,课程1,课程1',
        level: '易',
        project: '4',
        finishproject: '3'
      }, {
        course: '课程1,课程2,课程3,课程4',
        discription: '课程1,课程1,课程1,课程1,课程1,课程1,课程1,课程1,课程1,课程1,课程1,课程1,课程1,课程1',
        level: '易',
        project: '4',
        finishproject: '3'
      }, {
        course: '课程1,课程2,课程3,课程4',
        discription: '课程1,课程1,课程1,课程1,课程1,课程1,课程1,课程1,课程1,课程1,课程1,课程1,课程1,课程1',
        level: '易',
        project: '4',
        finishproject: '3'
      }]
    }
  },
  methods:{
     handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
  }
}

</script>
<style scoped>
#ptask {
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

.el-table th.is-leaf {
  border: 1px solid #999;
}
.page{
  position:absolute;
  bottom:0;
  left:10px;
}

</style>
