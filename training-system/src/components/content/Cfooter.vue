<template>
	<div id="cfooter">
		<div class="num1">
			<div class="top">
				<span><i class="el-icon-document"></i>&nbsp;&nbsp;学习总时长</span>
			</div>
			<div class="middle">
				<span class="lf cl"><i class="el-icon-search"></i></span>
				<p>
					<span>00</span>
					<span>:</span>
					<span>00</span>
				</p>
			</div>
			<div class="footer">
				<span><i class="el-icon-caret-bottom"></i></span>
				<span>50%</span>
				<span>28小时</span>
			</div>
		</div>
		<div class="num2">
			<div class="top">
				<span><i class="el-icon-bell"></i>&nbsp;&nbsp;学习进度</span>
			</div>
			<div class="middle">
				<span class="lf cl"><i class="el-icon-bell"></i></span>
				<p>
					<span>00</span>
					<!-- <span>:</span> -->
					<span>/KM</span>
				</p>
			</div>
			<div class="footer">
				<span><i class="el-icon-caret-bottom"></i></span>
				<span>Rate</span>
				<span>已完成30%</span>
			</div>
		</div>
		<div class="num3">
			<div class="top">
				<span><i class="el-icon-circle-check-outline"></i>&nbsp;&nbsp;成绩排名</span>
			</div>
			<div class="middle">
				<span class="lf cl"><i class="el-icon-circle-check-outline"></i></span>
				<p>
					<span>12</span>
					<!-- <span>&nbsp;</span> -->
					<span>Sum</span>
				</p>
			</div>
			<div class="footer">
				<span><i class="el-icon-caret-bottom"></i></span>
				<span>Rate</span>
				<span>班级总人数30人</span>
			</div>
		</div>
		<div class="num4">
			<div class="top">
				<span><i class="el-icon-time"></i>&nbsp;&nbsp;能力雷达图</span>
			</div>
			<div class="middle">
				<span class="lf cl"><i class="el-icon-time"></i></span>
				<p>
					<span>00</span>
					<span>:</span>
					<span>00</span>
				</p>
			</div>
			<div class="footer">
				<span><i class="el-icon-caret-bottom"></i></span>
				<span>Power</span>
				<span>六维能力占比</span>
			</div>
		</div>
	</div>
</template>

<script>
	
</script>

<style scoped>
	#cfooter{
		width:100%;
		height:30%;
		min-height:190px;
		background: #ddd;
		padding:20px;
	}
	#cfooter>div{
		float:left;
		width:21%;
		min-width:230px;
		height:100%;
		min-height:150px;
		margin-left:2%;
		background: #fff;
		padding:8px;
	}
	@media screen and (min-width:1400px){
		#cfooter>div{
			margin-left:3%;
		}
	}
	.top{
		display: inline-block;
		padding:2px 8px;
		border-radius: 20px;
		font-size:14px;
		color:#fff;
	}
	.num1 .top{
		background: #e4393c;
	}
	.num2 .top{
		background: orange;
	}
	.num3 .top{
		background: #45B6B0;
	}
	.num4 .top{
		background: #65C3DF;
	}
	.middle{
		min-height:50px;
		margin-top:15px;
	}
	.middle i{
		font-size:30px;
	}
	.middle p{
		margin-left:30px;
		font-size:27px;
		text-align: center;
	}
	.middle p span:nth-child(1){
		font-size:50px;
	}
	.middle .cl{

	}
	.num1 .middle{
		color:#e4393c;
	}
	.num2 .middle{
		color:orange;
	}
	.num3 .middle{
		color:#45B6B0;
	}
	.num4 .middle{
		color:#65C3DF;
	}
	.footer{
		color:#888;
		text-align: center;
		padding-top:15px;
	}
	.footer span{
		margin:0 5px;
		font-size:14px;
	}
</style>
