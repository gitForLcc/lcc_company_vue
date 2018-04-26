<template>
    	<div id="mynetwork"></div>
</template>

<script>
export default {
	components:{
	},
  mounted() {
    this._initPic();
  },
  methods: {
    _initPic() {
    var DIR = 'src/assets/img/';
    var nodes = [
        // 211:课程培训 210：岗位 200：CTF 220：靶场 100：工具 400 个人
        { id: 211, x: -550, y: -200, shape: 'circularImage', image: DIR + '1.png' },
        { id: 210, x: -380, y: -100, shape: 'circularImage', image: DIR + '2.png' },
        { id: 200, x: -210, y: -200, shape: 'circularImage', image: DIR + '3.png' },
        { id: 220, x: -35, y: -100, shape: 'circularImage', image: DIR + '4.png'},
        { id: 100, x: 140, y: -200, shape: 'circularImage', image: DIR + '5.png'},
        { id: 400, x: 310, y: -100 ,shape: 'circularImage', image: DIR + '6.png' },
        {id: 0, widthConstraint: { minimum: 10 },x: -610, y: -70, color : '#F16252' },
        {id: 1, widthConstraint: { minimum: 10 },x: -410, y: -240, color: '#B878B4' },
        {id: 2, widthConstraint: { minimum: 10 },x: -180, y: -60, color:'#77C35F' },
        {id: 3, widthConstraint: { minimum: 10 }, x: -10, y: -240, color: '#E8885E' },
        {id: 4, widthConstraint: { minimum: 10 }, x: 170, y: -60, color: '#4EA8CA'},
        {id: 5, widthConstraint: { minimum: 10 }, x: 360, y: -240, color: '#FFA302'}
      ];1
    var edges = [
      { from: 210, to: 211, dashes:[5,5,3,3]},
      { from: 100, to: 220, dashes:[5,5,3,3]},
      { from: 220, to: 221, dashes:[5,5,3,3]},
      { from: 210, to: 200, dashes:[5,5,3,3]},
      { from: 220, to: 200, dashes:[5,5,3,3]},
      { from: 200, to: 201, dashes:[5,5,3,3]},
      { from: 100, to: 300, dashes:[5,5,3,3]},
      { from: 300, to: 301, dashes:[5,5,3,3]},
      { from: 100, to: 400, dashes:[5,5,3,3]},
      { from: 400, to: 401, dashes:[5,5,3,3]},
      { from: 401, to: 402, dashes:[5,5,3,3]},
      { from: 211, to: 0, dashes:[5,5,3,3]},
      { from: 210, to: 1, dashes:[5,5,3,3]},
      { from: 200, to: 2, dashes:[5,5,3,3]},
      { from: 220, to: 3, dashes:[5,5,3,3]},
      { from: 100, to: 4, dashes:[5,5,3,3]},
      { from: 400, to: 5, dashes:[5,5,3,3]}
    ];

    var container = document.getElementById('mynetwork');
    var data = {
      nodes: nodes,
      edges: edges
    };
    var options = {
          edges: {
            font: {
              size: 12
            }
          },
          nodes: {
            shape: 'circle',
            shadow:true,
            margin: 10,
            size:65,
            borderWidthSelected: 3
          },
          interaction: {
            dragView:false,
            dragNodes:false,
            zoomView:false,
            hover: true
          },
          physics: {
            enabled: false
          }
        };
    var network = new vis.Network(container, data, options);
      network.on("click", function (params) {
          for(var i = 0; i<params.nodes.length; i++) {
            let num = params.nodes[i];
            if(num === 211) {
            	this.$router.push('/courses');
            }
            if(num === 210) {
            	this.$router.push('/jobs');
            }
            if(num === 200) {
            	this.$router.push('/ctf');
            }
            if(num === 220) {
            	this.$router.push('/targets');
            }
            if(num === 100) {
            	this.$router.push('/tools');
            }
            if(num === 400) {
            	this.$router.push('/persons');
            }
          }
      }.bind(this));
    }
  }
}
</script>

<style>
#mynetwork {
            width: 100%;
            height:65%;
            /*min-height: 300px;*/
            border: 1px solid lightgray;
            background:#fff;
            margin:0 auto;
            cursor:pointer;
        }
</style>
