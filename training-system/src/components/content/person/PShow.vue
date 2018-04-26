<template>
	<div id="mynetwork"></div>
</template>

<script>
	export default {
		mounted() {
    		this._initPersonNav()
  		},
  		methods: {
  			_initPersonNav() {
  				var DIR = 'src/assets/img/';
			var nodes = [
			    { id: 100, x: 0, y: -350,shape: 'circularImage', image: DIR + 'p1.png'},
			    { id: 210, x: -220, y: -450, shape: 'circularImage', image: DIR + 'p2.png' },
			    { id: 211, x: -450, y: -350, shape: 'circularImage', image: DIR + 'p3.png' },
			    { id: 220, x: -670, y: -450, shape: 'circularImage', image: DIR + 'p4.png'},
			    { id: 230, x: 220, y: -450, shape: 'circularImage', image: DIR + 'p5.png'},
			    {id: 0, widthConstraint: { minimum: 1 }, x: 0, y: -146, color : '#24B771' },
			    {id: 1, widthConstraint: { minimum: 1 }, x: -220, y: -300, color: '#E04339' },
			    {id: 2, widthConstraint: { minimum: 1 }, x: -450, y: -146, color:'#FCCB46' },
			    {id: 3, widthConstraint: { minimum: 1 }, x: -670, y: -300, color: '#5595FA' },
			    {id: 4, widthConstraint: { minimum: 1 }, x: 220, y: -300, color: '#00D2DC' }
			  ]

			  var edges = [
			    { from: 0, to: 100, arrows:{
			      to: {
			        enabled: true,
			        type: 'bar'
			      }
			    }},
			    { from: 1, to: 210, arrows:{
			      to: {
			        enabled: true,
			        type: 'bar'
			      }
			    }},
			    { from: 2, to: 211, arrows:{
			      to: {
			        enabled: true,
			        type: 'bar'
			      }
			    }},
			    { from: 3, to: 220, arrows:{
			      to: {
			        enabled: true,
			        type: 'bar'
			      }
			    }},
			    { from: 4, to: 230, arrows:{
			      to: {
			        enabled: true,
			        type: 'bar'
			      }
			    }},
			    { from: 0, to: 1, dashes:[5,5,3,3]},
			    { from: 1, to: 2, dashes:[5,5,3,3]},
			    { from: 2, to: 3, dashes:[5,5,3,3]},
			    { from: 0, to: 4, dashes:[5,5,3,3]}
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
			      borderWidth:0,
			      margin: 10,
			      size:80
			    },
			    interaction: {
			      zoomView: false
			    },
			    physics: {
			      enabled: false
			    }
			  };
			  var network = new vis.Network(container, data, options);



			        network.on("click", function (params) {
	          for(var i = 0; i<params.nodes.length; i++) {
	            let num = params.nodes[i];
	            if(num === 100) {
	            	this.$router.push('/persons/info');
	            }
	            if(num === 210) {
	            	this.$router.push('/persons/task');
	            }
	            if(num === 211) {
	            	this.$router.push('/persons/rank');
	            }
	            if(num === 220) {
	            	this.$router.push('/persons/center');
	            }
	            if(num === 230){
	            	this.$router.push('/persons/exam')
	            }
	          }
	      	}.bind(this));
  			}
  		}
	}
</script>

<style scoped>
	#mynetwork {
        width: 100%;
        height: 500px;
        margin:0 auto;
        cursor:pointer;
    }
</style>