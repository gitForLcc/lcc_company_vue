<template>
  <div id="pcenter">
    <div class="top">
        <i></i><span>信息修改</span>
      </div>
    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-form ref="form" :model="form" class="content_el">
            <el-form-item style="text-align:center">
              <img class="elimg" src="../../../assets/images/pInfo/p1.jpg" />
            </el-form-item>
            <el-form-item style="text-align:center">
              <el-button type="success">上传头像<i class="el-icon-upload el-icon--center"></i></el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple-light">
          <el-form ref="form" :model="form" status-icon class="content_el">
            <el-form-item label="用户名：">&nbsp;&nbsp;&nbsp;
              <el-input style="width:60%" v-model="form.username">
              </el-input>
            </el-form-item>
            <el-form-item label="姓名：">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <el-input style="width:60%" v-model="form.name">
              </el-input>
            </el-form-item>
            <el-form-item label="手机号码：">
              <el-input style="width:60%" v-model="form.number">
              </el-input>
            </el-form-item>
            <el-form-item label="密码：">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <el-input type="password" style="width:60%" v-model="form.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码：">
              <el-input type="password" style="width:60%" v-model="form.checkPass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="邮箱：">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <el-input type="password" style="width:60%" v-model="form.mail" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="攻防经验：">
              <el-input type="textarea" style="width:60%" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button size="mini" type="success">提交</el-button>
              <el-button size="mini" type="info">取消</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        username: '',
        name: '',
        number: '',
        pass: '',
        checkPass: '',
        mail: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  }
   
}

</script>
<style scoped>
#pcenter {
  width: 100%;
  height: 100%;
  min-height: 300px;
}

.top{
  height:50px;
  line-height:50px;
  background:#ddd;
  color:#000000;
}
.top i{
  display: inline-block;
  height:40px;
  width:4px;
  background:#5FB62D;
  margin:5px 5px 5px 10px;
  vertical-align: middle;
}
.top i span{
  vertical-align: middle;
}

/*.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 50px;
  margin-bottom:20px;
}
*/
.el-row {
  margin-top: 10px;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
}

.el-col {
  border-radius: 4px;
}

.el-form-item {
  margin-bottom: 10px!important;
}
.grid-content {
  border-radius: 4px;
  min-height: 500px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.el_bg_Form {

  border-bottom: 1px solid rgba(255, 255, 255, 0.9);
  padding-top: 5px;
}

.el_bg_list {
  margin-bottom: -5px!important;
  line-height: 10px;
}

.elimg {
  width: 160px;
  height: 160px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  margin-top: 120px;
  border:2px solid #ddd;
}

.content_el {

  width: 100%;
  padding: 0px 10px 5px 10px;
  border-bottom: 2px;
  color: black;
  font-size: 30px!important;
}

.el_row {
  margin-bottom: -8px;
  line-height: 10px;
}

</style>
