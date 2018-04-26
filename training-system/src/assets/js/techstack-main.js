let data = [{
	cluster: 0,
	cat: 'library sub', name: ' 基础', value: 40,
	icon: 'img/6772/h3.ico',
	desc: `
		D3.js (or just D3 for Data-Driven Documents) is a JavaScript library for
		producing dynamic, interactive data visualizations in web browsers.
		It makes use of the widely implemented SVG, HTML5, and CSS standards.<br>
		This infographic you are viewing is made with D3.
	`
}, {
	cluster: 0,
	cat: 'library', name: ' 密码', value: 40,
	icon: 'img/6772/h15.ico',
	desc: `
		Raphaël is a cross-browser JavaScript library that draws Vector graphics for web sites.
		It will use SVG for most browsers, but will use VML for older versions of Internet Explorer.
	`
}, {
	cluster: 0,
	cat: 'library', name: ' Web', value: 40,
	icon: 'img/6772/h9.ico',
	desc: `
		A JavaScript framework for building data-driven React applications.
		It uses GraphQL as the query language to exchange data between app and server efficiently.
		Queries live next to the views that rely on them, so you can easily reason
		about your app. Relay aggregates queries into efficient network requests to fetch only what you need.
	`
}, {
	cluster: 0,
	cat: 'library', name: ' 逆向', value: 40,
	icon: 'img/6772/h4.ico',
	desc: `
		Three.js allows the creation of GPU-accelerated 3D animations using
		the JavaScript language as part of a website without relying on
		proprietary browser plugins. This is possible thanks to the advent of WebGL.
	`
}, {
	cluster: 1,
	cat: 'library sub', name: ' PWN', value: 40,
	icon: 'img/6772/h10.ico',
	desc: `
		Lodash is a JavaScript library which provides <strong>utility functions</strong> for
		common programming tasks using the functional programming paradigm.`
}, {
	cluster: 1,
	cat: 'library sub', name: ' 无线电', value: 40,
	icon: 'img/6772/h13.ico',
	desc: `
		Handy and resourceful JavaScript library to parse, validate, manipulate, and display dates and times.
	`
}, {
	cluster: 1,
	cat: 'library sub', name: ' 移动', value: 40,
	icon: 'img/6772/h11.ico',
	desc: `
		A javascript library for formatting and manipulating numbers.
	`
}, {
	cluster: 1,
	cat: 'library sub', name: ' 数据分析', value: 40,
	icon: 'img/6772/h1.ico',
	desc: `
		Redux is an open-source JavaScript library designed for managing
		application state. It is primarily used together with React for building user interfaces.
		Redux is inspired by Facebook’s Flux and influenced by functional programming language Elm.
	`
}, {
	cluster: 2,
	cat: 'framework', name: ' 杂项', value: 40,
	icon: 'img/6772/h12.ico',
	desc: `
		Angular (commonly referred to as 'Angular 2+' or 'Angular 2') is a TypeScript-based
		open-source front-end web application platform led by the Angular Team at Google and
		by a community of individuals and corporations to address all of the parts of the
		developer's workflow while building complex web applications.
	`
}, 
{
	cluster: 2,
	cat: 'framework', name: ' 综合类靶场', value: 40,
	icon: 'img/6772/h6.ico',
	desc: `
		Bootstrap is a free and open-source front-end web framework for designing websites
		and web applications. It contains HTML-and CSS-based design templates for typography,
		forms, buttons, navigation and other interface components, as well as optional JavaScript extensions.
	`
	}, {
		cluster: 2,
		cat: 'framework', name: ' 历届赛事靶场', value: 40,
		icon: 'img/6772/h7.ico',
		desc: `
		Ember.js is an open-source JavaScript web framework, based on the Model–view–viewmodel
		(MVVM) pattern. It allows developers to create scalable single-page web applications by
		incorporating common idioms and best practices into the framework.
	`
	}
];
var m=2;
var clusters = new Array(m); 

let svg = d3.select('#teck-stack-svg');
let width = svg.property('clientWidth'); // get width in pixels
let height = +svg.attr('height');
console.log(height);
let centerX = width * 0.5;
let centerY = height * 0.5;
let strength = 0.05;
let focusedNode;
console.log('width', width);

let format = d3.format(',d');

var colors = ["#FF7F0E","#5CD9D0","#C5B0D5"]
let scaleColor = d3.scaleOrdinal().domain(['library','library sub','framework']).range(colors);


// use pack to calculate radius of the circle  使用包计算圆的半径

let pack = d3.pack()
	.size([width, height ])
	.padding(1.5)
	;


let forceCollide = d3.forceCollide(d => d.r + 1);  // 相邻元素的排斥力



// use the force   使用力,开始绘制
let simulation = d3.forceSimulation()      //力学模仿图仿真
	// .force('link', d3.forceLink().id(d => d.id))
	.force('charge', d3.forceManyBody())  //force.charge - 取得或者设置电荷强度。
	.force('collide', forceCollide)     //控制相邻2点的排斥力度
	// .force('center', d3.forceCenter(centerX, centerY))
	.force('x', d3.forceX(centerX ).strength(strength))  //设置力的中心x坐标 及 力度strength
	.force('y', d3.forceY(centerY ).strength(strength));  //设置力的中心y坐标 及 力度strength

// reduce number of circles on mobile screen due to slow computation 
if ('matchMedia' in window && window.matchMedia('(max-device-width: 767px)').matches) {
	data = data.filter(el => {
		return el.value >= 50;
	});
}

let root = d3.hierarchy({ children: data })   //获得一个自定义的层级布局的实现
	.sum(d => d.value);
	console.log(root);

// we use pack() to automatically calculate radius conveniently only 
// and get only the leaves
let nodes = pack(root).leaves().map(node => {
	// console.log('node:', node.x, (node.x - centerX) * 2);
	const data = node.data;
	//console.log(data);
	//console.log(node.r);
	var i = Math.floor(Math.random() * m);
	d= {
		x: centerX + (node.x - centerX) * 3, // magnify start position to have transition to center movement  放大起始位置，为了向中心的移动过程有过渡效果
		y: centerY + (node.y - centerY) * 3,
		r: 0, // for tweening
		radius: node.r, //original radius
		id: data.cat + '.' + (data.name.replace(/\s/g, '-')),
		cat: data.cat,
		name: data.name,
		value: data.value,
		icon: data.icon,
		desc: data.desc,
		cluster: data.cluster
	};
	 
	return d;
});
//console.log(nodes);   //nodes同julei中第32行代码

simulation.nodes(nodes).on('tick', ticked);

svg.style('background-color', '#eee');

let node = svg.selectAll('.node')   //  添加g标签并定义拖拽及拖拽后的位置
	.data(nodes)
	.enter().append('g')
	.attr('class', 'node')
	.call(d3.drag()
		.on('start', (d) => {
			if (!d3.event.active) { simulation.alphaTarget(0.2).restart(); }
			d.fx = d.x;
			d.fy = d.y;
		})
		.on('drag', (d) => {
			d.fx = d3.event.x;
			d.fy = d3.event.y;
		})
		.on('end', (d) => {
			if (!d3.event.active) { simulation.alphaTarget(0); }
			d.fx = null;
			d.fy = null;
		}));
	console.log(node);

node.append('circle')       //添加circle标签及内容id 颜色 半径 
	.attr('id', d => d.id)
	.attr('r', 0)
	.style('fill', d => scaleColor(d.cat))
	.transition().duration(2000).ease(d3.easeElasticOut)
		.tween('circleIn', (d) => {
			let i = d3.interpolateNumber(0, d.radius);
			return (t) => {
				d.r = i(t);
				simulation.force('collide', forceCollide);
			};
		});

// display text as circle icon     将文字以圆的icon形式显示
node.filter(d => String(d.name).includes(''))    
	.append('text')
	.classed('node-icon', true)
	.style('font-size','15')
    .classed('color',true)
	.attr('clip-path', d => `url(#clip-${d.id})`)
	.selectAll('tspan')
	.data(d => d.name.split(';'))
	.enter()
		.append('tspan')

		.attr('x', 0)
		.attr('y', (d, i, nodes) => (53 + (i - nodes.length / 2 - 0.5) * 10))
		.text(name => name);



// display image as circle icon   将图片以circle的icon形式显示
node.filter(d => String(d.icon).includes('img/'))
	.append('image')
	.classed('node-icon', true)
	.attr('clip-path', d => `url(#clip-${d.id})`)
	.attr('xlink:href', d => d.icon)
	.attr('x', d => -d.radius * 0.5)
	.attr('y', d => -d.radius * 0.65)
	.attr('height', d => d.radius * 2 * 0.5)
	.attr('width', d => d.radius * 2 * 0.5);

node.append('title')          //添加title标签及内容
	.text(d => (d.cat + '::' + d.name + '\n' + format(d.value)));

let legendOrdinal = d3.legendColor()        //圆形颜色
	.scale(scaleColor)
	.shape('circle');

// legend 1   左上角示例图形
svg.append('g')
	.classed('legend-color', true)
	.attr('text-anchor', 'start')
	.attr('transform', 'translate(20,30)')
	.style('font-size', '12px')
	.call(legendOrdinal);

let sizeScale = d3.scaleOrdinal()
	.domain(['less use', 'more use'])
	.range([5, 10] );

let legendSize = d3.legendSize()
	.scale(sizeScale)
	.shape('circle')
	.shapePadding(10)
	.labelAlign('end');


// legend 2     左上角示例图形
svg.append('g')
	.classed('legend-size', true)
	.attr('text-anchor', 'start')
	.attr('transform', 'translate(150, 25)')
	.style('font-size', '12px')
	.call(legendSize);

let infoBox = node.append('foreignObject')  //点击放大后内容
	.classed('circle-overlay hidden', true)
	.attr('x', -350 * 0.5 * 0.8)
	.attr('y', -350 * 0.5 * 0.8)
	.attr('height', 350 * 0.8)
	.attr('width', 350 * 0.8)
		.append('xhtml:div')
		.classed('circle-overlay__inner', true)
		.style('background-color', d => scaleColor(d.cat))    //背景色同circle
		.style('border-radius','50%');                        //导圆角

infoBox.append('h2')            //添加放大后的标题
	.classed('circle-overlay__title', true)
	.text(d => d.name);

infoBox.append('p')             //添加放大后的内容
	.classed('circle-overlay__body', true)
	.html(d => d.desc);



infoBox.append('button')
	.html('点击跳转')
	.style('background-color',  d => scaleColor(d.cat))
	.classed('btn',true);


node.on('click', (currentNode) => {            //点击事件
	d3.event.stopPropagation();
	console.log('currentNode', currentNode);
	let currentTarget = d3.event.currentTarget; // the <g> el

	if (currentNode === focusedNode) {
		// no focusedNode or same focused node is clicked  没有焦点node或者相同的目标点被点击
		return;
	}
	let lastNode = focusedNode;
	focusedNode = currentNode;

	simulation.alphaTarget(0.2).restart();
	// hide all circle-overlay  隐藏有.circle-overlay格式的标签
	d3.selectAll('.circle-overlay').classed('hidden', true);
	d3.selectAll('.node-icon').classed('node-icon--faded', false);

	// don't fix last node to center anymore    不要把最后一个节点固定到中心
	if (lastNode) {
		lastNode.fx = null;
		lastNode.fy = null;
		node.filter((d, i) => i === lastNode.index)
			.transition().duration(2000).ease(d3.easePolyOut)
			.tween('circleOut', () => {
				let irl = d3.interpolateNumber(lastNode.r, lastNode.radius);
				return (t) => {
					lastNode.r = irl(t);
				};
			})
			.on('interrupt', () => {
				lastNode.r = lastNode.radius;
			});
	}

	// if (!d3.event.active) simulation.alphaTarget(0.5).restart();

	d3.transition().duration(2000).ease(d3.easePolyOut)
		.tween('moveIn', () => {
			console.log('tweenMoveIn', currentNode);
			let ix = d3.interpolateNumber(currentNode.x, centerX);       //在两个数字间插值
			let iy = d3.interpolateNumber(currentNode.y, centerY);
			let ir = d3.interpolateNumber(currentNode.r, centerY * 0.5);
			return function (t) {
				// console.log('i', ix(t), iy(t));
				currentNode.fx = ix(t);
				currentNode.fy = iy(t);
				currentNode.r = ir(t);
				simulation.force('collide', forceCollide);
			};
		})
		.on('end', () => {
			simulation.alphaTarget(0);
			let $currentGroup = d3.select(currentTarget);
			$currentGroup.select('.circle-overlay')
				.classed('hidden', false);
			$currentGroup.select('.node-icon')
				.classed('node-icon--faded', true);

		})
		.on('interrupt', () => {
			console.log('move interrupt', currentNode);
			currentNode.fx = null;
			currentNode.fy = null;
			simulation.alphaTarget(0);
		});

});


// blur
d3.select(document).on('click', () => {
	let target = d3.event.target;
	// check if click on document but not on the circle overlay
	if (!target.closest('#circle-overlay') && focusedNode) {
		focusedNode.fx = null;
		focusedNode.fy = null;
		simulation.alphaTarget(0.2).restart();
		d3.transition().duration(2000).ease(d3.easePolyOut)
			.tween('moveOut', function () {
				console.log('tweenMoveOut', focusedNode);
				let ir = d3.interpolateNumber(focusedNode.r, focusedNode.radius);
				return function (t) {
					focusedNode.r = ir(t);
					simulation.force('collide', forceCollide);
				};
			})
			.on('end', () => {
				focusedNode = null;
				simulation.alphaTarget(0);
			})
			.on('interrupt', () => {
				simulation.alphaTarget(0);
			});

		// hide all circle-overlay
		d3.selectAll('.circle-overlay').classed('hidden', true);
		d3.selectAll('.node-icon').classed('node-icon--faded', false);
	}
});


function ticked(e) {
	node
		
		.attr('transform', d => `translate(${d.x},${d.y})`)
		.select('circle')
			.attr('r', d => d.r);
}








   




 