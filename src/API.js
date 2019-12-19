import React, { Component } from 'react';
import SVG from 'svg.js';

class API extends Component {
  componentDidMount() {
    const draw = SVG('api_container').size('100%', '400px');
    // 画矩形
    draw.rect(140, 140).move(100, 100).fill('blue');
    // 画直线
    const line = draw.line(0, 100, 100, 0).move(100, 100);
    line.stroke({ color: '#f06', width: 10 });
    // 绘制圆形
    draw.circle(100).move(200, 200)
      .fill('orange')
      .stroke({ color: 'red', width: 4 });
    // 字符串参数绘制三角形 
    draw.polygon('300 300, 360 240, 360 360');
    // 点坐标绘制矩形
    draw.polygon([[400, 400], [440, 400], [500, 300], [400, 300]])
      .fill('green');
    // 绘制多边曲线
    draw.polyline('0,0 100,50 50,100').fill('none').stroke({ width: 1 });
    // 绘制图片并绑定click事件
    const draw_image = draw.image('https://cdn.img42.com/4b6f5e63ac50c95fe147052d8a4db676.jpeg')
      .size(60, 60) // 设置绘制的长宽
      .move(500, 100);
    draw_image.on('click', function(){
      alert(this.node.getAttribute('href'));
    });
    // 绘制文本
    draw.text('我是被绘制的文本')
      .move(600, 200)
      .stroke({ color: 'yellow' })
      .font({ size: 20 });
  }
  render() {
    return (
      <div id='api_container' />
    )
  }
}

export default API;
