import React, { Component } from 'react';
import SVG from 'svg.js';
import question_circle from './question-circle.png';
import question_circle_black from './question-circle-black.png';
import './App.css';

const data = {
  param1: 0.24,
  param2: 0.45,
  param3: 0.23,
  param4: 0.16,
  param5: 0.88,
  param6: 0.66
};

const TYPE_TEXT = {
  transform1: '1111111111',
  transform2: '22222222222222222',
  visit: '3333333333333333333',
  paid_transform: '444444444444444',
  landing_transform: '555555555555555',
  old_join: '66666666666666',
  referral_per: '7777777777777'
};

function showHoverDom (dom, type) {
  const hoverDom = document.getElementById('hover_container');
  const { left, top, width } = dom.getBoundingClientRect();
  hoverDom.style.left = `${left + width / 2}px`;
  hoverDom.style.top = `${top - 6}px`;
  hoverDom.innerHTML = `${TYPE_TEXT[type]}`;
  const arrowDom = document.createElement('div');
  arrowDom.classList = `tooltip-arrow`;
  hoverDom.appendChild(arrowDom);
  hoverDom.style.display = 'block';
}

function drawStepText(draw) {
  const stepTextGroup = draw.group().move(0, 0);
  const text_step1_label = draw.text('第一步').move(0, 43);
  stepTextGroup.add(text_step1_label);
  const text_step1_content = draw.text('AAAA').move(60, 43).font({ fill: '#5F6369' });
  stepTextGroup.add(text_step1_content);
  const text_step2_label = draw.text('第二步').move(0, 143);
  stepTextGroup.add(text_step2_label);
  const text_step2_content = draw.text('BBBB').move(60, 143).font({ fill: '#5F6369' });
  stepTextGroup.add(text_step2_content);
  const text_step3_label = draw.text('第三步').move(0, 243);
  stepTextGroup.add(text_step3_label);
  const text_step3_content = draw.text('CCCC').move(60, 243).font({ fill: '#5F6369' });
  stepTextGroup.add(text_step3_content);
}

function drawPolygonArea(draw, data) {
  const polygonGroup = draw.group().move(140, 0);
  const polygon_transform = draw.polygon('0 290, 120 290, 180 210,0 210').fill('#ACD3FA');
  polygonGroup.add(polygon_transform);
  const text_transform1 = draw.text(`付费线索数: ${data.param1}`)
    .move(30, 260).fill('#fff').font({ size: 12 });
  polygonGroup.add(text_transform1);
  const image_transform1 = draw.image(question_circle, 14, 14).move(10, 256);
  image_transform1.on('mouseover', function() {
    const dom = this.node;
    showHoverDom(dom, 'transform1');
  });
  image_transform1.on('mouseleave', function() {
    document.getElementById('hover_container').style.display = 'none';
  });
  polygonGroup.add(image_transform1);
  const text_transform2 = draw.text(`新增线索数: ${data.param2}`)
    .move(30, 230).fill('#fff').font({ size: 12 });
  polygonGroup.add(text_transform2);
  const image_transform2 = draw.image(question_circle, 14, 14).move(10, 226);
  image_transform2.on('mouseover', function() {
    const dom = this.node;
    showHoverDom(dom, 'transform2');
  });
  image_transform2.on('mouseleave', function() {
    document.getElementById('hover_container').style.display = 'none';
  });
  polygonGroup.add(image_transform2);
  const polygon_visit = draw.polygon('0 190, 190 190, 250 110, 0 110').fill('#62A2F6');
  polygonGroup.add(polygon_visit);
  const text_visit = draw.text(`落地页浏览数: ${data.param3}`)
    .move(30, 150).fill('#fff').font({ size: 12 });
  polygonGroup.add(text_visit);
  const image_visit = draw.image(question_circle, 14, 14).move(10, 146);
  image_visit.on('mouseover', function() {
    const dom = this.node;
    showHoverDom(dom, 'visit');
  });
  image_visit.on('mouseleave', function() {
    document.getElementById('hover_container').style.display = 'none';
  });
  polygonGroup.add(image_visit);
  const polygon_join = draw.polygon('0 90, 260 90, 320 10, 0 10').fill('#1C60F1');
  polygonGroup.add(polygon_join);
  const text_join1 = draw.text(`有效分享人数: ${data.param4}`)
    .move(30, 60).fill('#fff').font({ size: 12 });
  polygonGroup.add(text_join1);
  const image_join1 = draw.image(question_circle, 14, 14).move(10, 56);
  image_join1.on('mouseover', function() {
    const dom = this.node;
    showHoverDom(dom, 'join1');
  });
  image_join1.on('mouseleave', function() {
    document.getElementById('hover_container').style.display = 'none';
  });
  polygonGroup.add(image_join1);
  const text_join2 = draw.text(`海报制作页浏览人数: ${data.param5}`)
    .move(30, 30).fill('#fff').font({ size: 12 });
  polygonGroup.add(text_join2);
  const image_join2 = draw.image(question_circle, 14, 14).move(10, 26);
  image_join2.on('mouseover', function() {
    const dom = this.node;
    showHoverDom(dom, 'join2');
  });
  image_join2.on('mouseleave', function() {
    document.getElementById('hover_container').style.display = 'none';
  });
  polygonGroup.add(image_join2);
}

function drawShadowArea(draw) {
  const { width } = document.getElementById('statistics_draw').getBoundingClientRect();
  // 右边界位置
  const shadow_right = width - 260;
  const shadowGroup = draw.group().move(260, 0);
  const gradient = draw.gradient('linear', function(stop) {
    stop.at(0, 'rgba(255,255,255,0)');
    stop.at(1, 'rgba(227,227,227,1)');
  });
  const shadow_area1 = draw.polygon(`0 290, ${shadow_right} 290, ${shadow_right} 210, 60 210`).fill(gradient);
  shadowGroup.add(shadow_area1);
  const shadow_area2 = draw.polygon(`70 190, ${shadow_right} 190, ${shadow_right} 110, 130 110`).fill(gradient);
  shadowGroup.add(shadow_area2);
  const shadow_area3 = draw.polygon(`140 90, ${shadow_right} 90, ${shadow_right} 10, 200 10`).fill(gradient);
  shadowGroup.add(shadow_area3);
}

function drawArrowLine(draw, data) {
  const arrowTextGroup = draw.group().move(260, 0);
  const polyline_paid_rate = draw.polyline([[40, 250], [340, 250], [340, 270], [30, 270]])
    .fill('none').stroke({ color: '#e2e2e4', width: 1 });
  const polygon_paid_rate = draw.polygon([[22, 270], [30, 265], [30, 275]]).fill('#e2e2e4');
  const image_paid_transform = draw.image(question_circle_black, 12, 12).move(350, 254);
  image_paid_transform.on('mouseover', function() {
    const dom = this.node;
    showHoverDom(dom, 'paid_transform');
  });
  image_paid_transform.on('mouseleave', function() {
    document.getElementById('hover_container').style.display = 'none';
  });
  const text_paid_transform = draw.text(`付费转化率：${(data.param6 * 100).toFixed(2)}%`)
    .move(364, 256).fill('#5F6369').font({ size: 12 });
  arrowTextGroup.add(polyline_paid_rate)
    .add(polygon_paid_rate)
    .add(image_paid_transform)
    .add(text_paid_transform);
  const polyline_landing_rate = draw.polyline([[110, 150], [340, 150], [340, 220], [62, 220]])
    .fill('none').stroke({ color: '#e2e2e4', width: 1 });
  const polygon_landing_rate = draw.polygon([[56, 220], [64, 215], [64, 225]]).fill('#e2e2e4');
  const image_landing_transform = draw.image(question_circle_black, 12, 12).move(350, 174);
  image_landing_transform.on('mouseover', function() {
    const dom = this.node;
    showHoverDom(dom, 'landing_transform');
  });
  image_landing_transform.on('mouseleave', function() {
    document.getElementById('hover_container').style.display = 'none';
  });
  const text_landing_transform = draw.text(`落地页转化率：${(data.param5 * 100).toFixed(2)}%`)
    .move(364, 176).fill('#5F6369').font({ size: 12 });
  arrowTextGroup.add(polyline_landing_rate)
    .add(polygon_landing_rate)
    .add(image_landing_transform)
    .add(text_landing_transform);
  const polyline_old_join = draw.polyline([[194, 30], [340, 30], [340, 60], [174, 60]])
    .fill('none').stroke({ color: '#e2e2e4', width: 1 });
  const polygon_old_join = draw.polygon([[166, 60], [174, 55], [174, 65]]).fill('#e2e2e4');
  const image_old_join = draw.image(question_circle_black, 12, 12).move(350, 38);
  image_old_join.on('mouseover', function() {
    const dom = this.node;
    showHoverDom(dom, 'old_join');
  });
  image_old_join.on('mouseleave', function() {
    document.getElementById('hover_container').style.display = 'none';
  });
  const text_old_join = draw.text(`老客参与率：${(data.param4 * 100).toFixed(2)}%`)
    .move(364, 40).fill('#5F6369').font({ size: 12 });
  arrowTextGroup.add(polyline_old_join)
    .add(polygon_old_join)
    .add(image_old_join)
    .add(text_old_join);
  const polyline_referral_per = draw.polyline([[164, 70], [520, 70], [520, 236], [52, 236]])
    .fill('none').stroke({ color: '#e2e2e4', width: 1 });
  const polygon_referral_per = draw.polygon([[46, 236], [54, 231], [54, 241]]).fill('#e2e2e4');
  const image_referral_per = draw.image(question_circle_black, 12, 12).move(530, 138);
  image_referral_per.on('mouseover', function() {
    const dom = this.node;
    showHoverDom(dom, 'referral_per');
  });
  image_referral_per.on('mouseleave', function() {
    document.getElementById('hover_container').style.display = 'none';
  });
  const text_referral_per = draw.text(`人均转介数：${(data.param3 * 100).toFixed(2)}%`)
    .move(544, 140).fill('#5F6369').font({ size: 12 });
  arrowTextGroup.add(polyline_referral_per)
    .add(polygon_referral_per)
    .add(image_referral_per)
    .add(text_referral_per);
}

class Chart extends Component {
  componentDidMount() {
    const draw = SVG('statistics_draw').size('100%', '100%');
    drawStepText(draw);
    drawPolygonArea(draw, data);
    drawShadowArea(draw);
    drawArrowLine(draw, data);
  }
  render() {
    return (
      <div id='statistics_draw' className='chart-container'>
        <div id='hover_container' className='tooltip-container' />
      </div>
    )
  }
}

export default Chart;
