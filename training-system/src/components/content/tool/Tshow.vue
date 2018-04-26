<template>
  <div id="tool">
    <div class="container">
      <ul>
        <li v-for="(item,index) in toolTypes">
          <div>
            <img :src="'/static/img/tool/'+(index+1)+'.jpg'">
          </div>
          <p>{{item.toolnum}}个工具</p>
          <p>
            <a href="javascript:;" @click="showTools(item.id)">
              <span>{{item.typename}}</span>
            </a>
          </p>
        </li>
      </ul>
    </div>
    <el-dialog :title="title" :visible.sync="dialogTableVisible">
      <el-table :data="toolDetails" height="400" border style="width: 100%">
        <el-table-column prop="toolname" label="名称" width="300">
        </el-table-column>
        <el-table-column prop="description" label="简述" width="450">
        </el-table-column>
        <el-table-column prop="filesize" label="大小" width="150">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-download" size="mini" @click="download(scope.row.toolpath)">下载</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogTableVisible: false,
      toolTypes: [],
      toolDetails: [],
      title: ''
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      var _this = this
      this.$http.get('/lab/tooltype', {}).then(res => {
        this.toolTypes = res.data.data;
      }).catch(function(err) {
        console.log('fetchData', err)
      })
    },
    showTools(id) {
      var _this = this
      this.$http.get('lab/tools', {
        params: {
          type_id: id
        }
      }).then((res) => {
        for (var i = 0; i < res.data.data.length; i++) {
          res.data.data[i].filesize += 'kb'
        }
        this.toolDetails = res.data.data;
        this.title = this.toolTypes[id - 1].typename
        this.dialogTableVisible = true;
      }).catch((err) => {
        console.log('showTools', err)
      })
    },
    download(path) {
      var downloadUrl = path;
      var baseUrl = this.$store.getters.baseUrl;
      window.location.href = baseUrl + '/' + downloadUrl;
    }
  }
}

</script>
<style scoped>
.container {
  width: 80%;
  margin: 30px auto;
  margin-top: 20px;
  color: #000000;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
  border: 1px solid #eee;
}

ul:after {
  content: '';
  clear: both;
  display: block;
  /*width: 100%;*/
}

ul li {
  float: left;
  transition: all .2s;
  width: 16.6666667%;
  height: 200px;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
  padding: 10px;
}





/*ul li h2 {
      font-size: 18px;
      text-align: center;
      margin-bottom:5px;
    }
    ul li h3 {
      font-size: 18px;
      text-align: center;
      border-bottom: 1px solid #ccc;
      padding-bottom: 10px;
    }*/

ul li a {
  display: block;
  width: 90%;
  margin: 10px auto;
  /*height: 60px;*/
  /*line-height: 60px;*/
  text-align: center;
  background: #DA6D0E;
  border-radius: 10px;
  transition: all .5s;
  position: relative;
  padding: 10px 0;
  text-decoration: none;
  color: #fff;
}

ul li a span {
  display: block;
}

ul li a:hover {
  box-shadow: 0px 1px 10px rgba(0, 0, 0, .8);
}

ul li p {
  text-align: center;
  color: #111;
}

ul li:nth-child(6),
ul li:nth-child(12) {
  border-right: none;
}

ul li:hover {
  /*background: #efefef;*/
  box-shadow: 0px 4px 20px rgba(0, 0, 0, .3);
  border-radius: 10px;
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  border: none;
  /*border: 1px solid #ccc;*/
  background: #fff;
}

ul li div {
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
}

ul li div img {
  width: 100%;
  height: 100%;
}

</style>
