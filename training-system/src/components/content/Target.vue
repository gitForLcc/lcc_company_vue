<template>
  <div id="target" ref="my">
    <svg id="teck-stack-svg" width="100%" height="530" font-family="sans-serif" font-size="10" text-anchor="middle" />
  </div>
</template>
<script>
import * as d3 from 'd3';
export default {
  data() {
    return {
      data: [99, 71, 78, 25, 36, 92],
      line: '',
    };
  },
  mounted() {
    this.getScales();
    this.test();
  },
  methods: {
    test() {
      var btn = document.getElementsByClassName('btn');
      for (let i = 0; i < btn.length; i++) {
        btn[i].onclick = function() {
          console.log(i)
        }
      }
    },
    getScales() {
      let data = [{
          cat: 'library sub',
          name: ' 基础',
          value: 190,
          icon: 'src/assets/images/target/h3.ico',
          desc: `
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat magni deserunt, quo adipisci aut tempora repellendus unde sit suscipit eaque molestias inventore libero molestiae necessitatibus. Vero quia atque, incidunt maxime.
    `
        }, {
          cat: 'library',
          name: ' 密码',
          value: 190,
          icon: 'src/assets/images/target/h15.ico',
          desc: `
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat magni deserunt, quo adipisci aut tempora repellendus unde sit suscipit eaque molestias inventore libero molestiae necessitatibus. Vero quia atque, incidunt maxime.
    `
        }, {
          cat: 'library',
          name: ' Web',
          value: 190,
          icon: 'src/assets/images/target/h9.ico',
          desc: `
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat magni deserunt, quo adipisci aut tempora repellendus unde sit suscipit eaque molestias inventore libero molestiae necessitatibus. Vero quia atque, incidunt maxime.
    `
        }, {
          cat: 'library',
          name: ' 逆向',
          value: 190,
          icon: 'src/assets/images/target/h4.ico',
          desc: `
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat magni deserunt, quo adipisci aut tempora repellendus unde sit suscipit eaque molestias inventore libero molestiae necessitatibus. Vero quia atque, incidunt maxime.
    `
        }, {
          cat: 'library sub',
          name: ' PWN',
          value: 190,
          icon: 'src/assets/images/target/h10.ico',
          desc: `
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat magni deserunt, quo adipisci aut tempora repellendus unde sit suscipit eaque molestias inventore libero molestiae necessitatibus. Vero quia atque, incidunt maxime.`
        }, {
          cat: 'library sub',
          name: ' 无线电',
          value: 190,
          icon: 'src/assets/images/target/h13.ico',
          desc: `
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat magni deserunt, quo adipisci aut tempora repellendus unde sit suscipit eaque molestias inventore libero molestiae necessitatibus. Vero quia atque, incidunt maxime.
    `
        }, {
          cat: 'library sub',
          name: ' 移动',
          value: 190,
          icon: 'src/assets/images/target/h11.ico',
          desc: `
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat magni deserunt, quo adipisci aut tempora repellendus unde sit suscipit eaque molestias inventore libero molestiae necessitatibus. Vero quia atque, incidunt maxime.
    `
        }, {
          cat: 'library sub',
          name: ' 数据分析',
          value: 190,
          icon: 'src/assets/images/target/h1.ico',
          desc: `
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat magni deserunt, quo adipisci aut tempora repellendus unde sit suscipit eaque molestias inventore libero molestiae necessitatibus. Vero quia atque, incidunt maxime.
    `
        }, {
          cat: 'framework',
          name: ' 杂项',
          value: 190,
          icon: 'src/assets/images/target/h12.ico',
          desc: `
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat magni deserunt, quo adipisci aut tempora repellendus unde sit suscipit eaque molestias inventore libero molestiae necessitatibus. Vero quia atque, incidunt maxime.
    `
        },
        {
          cat: 'framework',
          name: ' 综合类靶场',
          value: 190,
          icon: 'src/assets/images/target/h6.ico',
          desc: `
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat magni deserunt, quo adipisci aut tempora repellendus unde sit suscipit eaque molestias inventore libero molestiae necessitatibus. Vero quia atque, incidunt maxime.
    `
        }, {
          cat: 'framework',
          name: ' 历届赛事靶场',
          value: 190,
          icon: 'src/assets/images/target/h7.ico',
          desc: `
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat magni deserunt, quo adipisci aut tempora repellendus unde sit suscipit eaque molestias inventore libero molestiae necessitatibus. Vero quia atque, incidunt maxime.
    `
        }
      ];
      var m = 2;
      var clusters = new Array(m);
      let svg = d3.select('#teck-stack-svg');
      let width = svg.property('clientWidth'); // get width in pixels
      let height = +svg.attr('height');
      let centerX = width * 0.5;
      let centerY = height * 0.5;
      let strength = 0.05;
      let focusedNode;
      let format = d3.format(',d');
      var colors = ["#FF7F0E", "#5CD9D0", "#C5B0D5"]
      let scaleColor = d3.scaleOrdinal().domain(['library', 'library sub', 'framework']).range(colors);
      // use pack to calculate radius of the circle  使用包计算圆的半径
      let pack = d3.pack()
        .size([width, height])
        .padding(1.5);

      let forceCollide = d3.forceCollide(d => d.r + 5); // 相邻元素的排斥力

      // use the force   使用力,开始绘制
      let simulation = d3.forceSimulation() //力学模仿图仿真
        // .force('link', d3.forceLink().id(d => d.id))
        .force('charge', d3.forceManyBody()) //force.charge - 取得或者设置电荷强度。
        .force('collide', forceCollide) //控制相邻2点的排斥力度
        // .force('center', d3.forceCenter(centerX, centerY))
        .force('x', d3.forceX(centerX).strength(strength)) //设置力的中心x坐标 及 力度strength
        .force('y', d3.forceY(centerY).strength(strength)); //设置力的中心y坐标 及 力度strength

      if ('matchMedia' in window && window.matchMedia('(max-device-width: 767px)').matches) {
        data = data.filter(el => {
          return el.value >= 50;
        });
      }

      let root = d3.hierarchy({ children: data }) //获得一个自定义的层级布局的实现
        .sum(d => d.value);

      let nodes = pack(root).leaves().map(node => {
        const data = node.data;
        var i = Math.floor(Math.random() * m);
        let d = {
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

      simulation.nodes(nodes).on('tick', function() {
        node.attr('transform', d => `translate(${d.x},${d.y})`).select('circle').attr('r', d => d.r);
      });

      svg.style('background-color', '#fff');

      var node = svg.selectAll('.node') //  添加g标签并定义拖拽及拖拽后的位置
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

      node.append('circle') //添加circle标签及内容id 颜色 半径 
        .attr('id', d => d.id)
        .attr('r', 0)
        .style('fill', d => scaleColor(d.cat))
        .transition().duration(2000).ease(d3.easeElasticOut)
        .tween('circleIn', (d) => {
          let i = d3.interpolateNumber(0, d.radius);
          return (t) => {
            d.r = 70;
            simulation.force('collide', forceCollide);
          };
        });

      // display text as circle icon     将文字以圆的icon形式显示
      node.filter(d => String(d.name).includes(''))
        .append('text')
        .classed('node-icon', true)
        .style('font-size', '15')
        .classed('color', true)
        .attr('clip-path', d => `url(#clip-${d.id})`)
        .selectAll('tspan')
        .data(d => d.name.split(';'))
        .enter()
        .append('tspan')

        .attr('x', 0)
        .attr('y', (d, i, nodes) => (53 + (i - nodes.length / 2 - 0.5) * 10))
        .text(name => name);

      // display image as circle icon   将图片以circle的icon形式显示
      node.filter(d => String(d.icon).includes('src/assets/images/target/'))
        .append('image')
        .classed('node-icon', true)
        .attr('clip-path', d => `url(#clip-${d.id})`)
        .attr('xlink:href', d => d.icon)
        .attr('x', d => -d.radius * 0.5)
        .attr('y', d => -d.radius * 0.65)
        .attr('height', d => d.radius * 2 * 0.5)
        .attr('width', d => d.radius * 2 * 0.5);



      node.append('title') //添加title标签及内容
        .text(d => (d.cat + '::' + d.name + '\n' + format(d.value)));
      // let legendOrdinal = d3.legendColor()        //圆形颜色
      //  .scale(scaleColor)
      //  .shape('circle');

      // // legend 1   左上角示例图形
      // svg.append('g')
      //  .classed('legend-color', true)
      //  .attr('text-anchor', 'start')
      //  .attr('transform', 'translate(20,30)')
      //  .style('font-size', '12px')
      //  .call(legendOrdinal);

      // let sizeScale = d3.scaleOrdinal()
      //  .domain(['less use', 'more use'])
      //  .range([5, 10] );

      // let legendSize = d3.legendSize()
      //  .scale(sizeScale)
      //  .shape('circle')
      //  .shapePadding(10)
      //  .labelAlign('end');


      // // legend 2     左上角示例图形
      // svg.append('g')
      //  .classed('legend-size', true)
      //  .attr('text-anchor', 'start')
      //  .attr('transform', 'translate(150, 25)')
      //  .style('font-size', '12px')
      //  .call(legendSize);


      /*
      <foreignObject class="circle-overlay" x="10" y="10" width="100" height="150">
        <div class="circle-overlay__inner">
          <h2 class="circle-overlay__title">ReactJS</h2>
          <p class="circle-overlay__body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, sunt, aspernatur. Autem repudiandae, laboriosam. Nulla quidem nihil aperiam dolorem repellendus pariatur, quaerat sed eligendi inventore ipsa natus fugiat soluta doloremque!</p>
        </div>
      </foreignObject>
      */



      let infoBox = node.append('foreignObject') //点击放大后内容
        .classed('circle-overlay hidden', true)
        .attr('x', -350 * 0.5 * 0.8)
        .attr('y', -350 * 0.5 * 0.8)
        .attr('height', 350 * 0.8)
        .attr('width', 350 * 0.8)
        .append('xhtml:div')
        .classed('circle-overlay__inner', true)
        .style('background-color', d => scaleColor(d.cat)) //背景色同circle
        .style('border-radius', '50%'); //导圆角

      infoBox.append('h2') //添加放大后的标题
        .classed('circle-overlay__title', true)
        .text(d => d.name);

      infoBox.append('p') //添加放大后的内容
        .classed('circle-overlay__body', true)
        .html(d => d.desc);

      infoBox.append('button')
        .html('点击跳转')
        .classed('btn', true)
        .style('background-color', d => scaleColor(d.cat))


      node.on('click', (currentNode) => { //点击事件
        d3.event.stopPropagation();
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

        d3.transition().duration(2000).ease(d3.easePolyOut)
          .tween('moveIn', () => {
            let ix = d3.interpolateNumber(currentNode.x, centerX); //在两个数字间插值
            let iy = d3.interpolateNumber(currentNode.y, centerY);
            let ir = d3.interpolateNumber(currentNode.r, centerY * 0.5);
            return function(t) {
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
            .tween('moveOut', function() {
              let ir = d3.interpolateNumber(focusedNode.r, focusedNode.radius);
              return function(t) {
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

          d3.selectAll('.circle-overlay').classed('hidden', true);
          d3.selectAll('.node-icon').classed('node-icon--faded', false);
        }
      });
    }
  },
};

</script>
<style scoped>
#target{
  width:100%;
    height:100%;
    background: #fff;
    min-height:500px;
    padding:30px 0;
}
svg {
  margin: auto;
  display: block;
}

.circle-overlay {
  font-size: 16px;
  border-radius: 50%;
  position: absolute;
  overflow: hidden;
}



.node-icon--faded {
  opacity: 0.5;
}

.legend-size circle {
  fill: rgb(31, 119, 180);
}

.tech-stack-container {
  padding: 1rem 2rem;
  position: relative;
}

@media screen and (min-width: 992px) {
  .tech-stack-container {
    padding: 1rem 5rem;
  }
}

.tech-stack-title {
  margin: 0;
}

/*原始样式*/
</style>
