<template>
	<div id="tmain">
		<el-table :data="tableData3" height="400" border style="width: 100%">
    		<el-table-column prop="date" label="名称" width="300">
    		</el-table-column>
    		<el-table-column prop="name" label="简述" width="450">
    		</el-table-column>
    		<el-table-column prop="size" label="大小" width="150">
    		</el-table-column>
    		<el-table-column label="操作">
    			<template slot-scope="scope">
			        <el-button type="primary" icon="el-icon-download" size="mini" @click="download(scope.$index, scope.row)">下载</el-button>
		      </template>
    		</el-table-column>
  		</el-table>
	</div>
</template>

<script>
	export default {
		methods:{
			download(index,row){
				alert(index,row);
			}
		},
	    data() {
	      return {
	        tableData3: [{
	          date: 'jadx-0.6.0',
	          name: '一款GUI界面的Android反编译工具',
	          size: '3696KB'
	        }, {
	          date: 'jeb-2.2.7.201608151620',
	          name: '一款强大的Android反编绎工具 ',
	          size: '191697KB'
	        }, {
	          date: 'android-backup-extractor-20160',
	          name: 'Android备份文件工具 ',
	          size: '7261KB'
	        }, {
	          date: 'apktool',
	          name: '反编译和重打包工具 ',
	          size: '6258KB'
	        }, {
	          date: 'sqlcipher',
	          name: 'SQL数据库查看工具 ',
	          size: '6816KB'
	        }, {
	          date: 'eclipse-java-mars-win64',
	          name: '一个开放源代码的、基于Java的可扩展开发平台-64位 ',
	          size: '170134KB'
	        }, {
	          date: 'eclipse-java-mars-win32',
	          name: '一个开放源代码的、基于Java的可扩展开发平台-32位 ',
	          size: '167034KB'
	        },{
	          date: 'android-sdk_r24.4.1-windows',
	          name: 'Android软件开发工具包 ',
	          size: '195020KB'
	        }]
	      }
	    }
  	}
</script>

<style scoped>
	#tmain{
		width:100%;
		min-height:480px;
		padding:50px;
	}
</style>