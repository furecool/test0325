import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import * as echarts from 'echarts';

Vue.config.productionTip = false

// // 基于准备好的dom，初始化echarts实例
// var myChart = echarts.init(document.getElementById('main'));
// // 绘制图表
// myChart.setOption({
//     title: {
//         text: 'ECharts 入门示例'
//     },
//     tooltip: {},
//     xAxis: {
//         data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
//     },
//     yAxis: {},
//     series: [{
//         name: '销量',
//         type: 'bar',
//         data: [5, 20, 36, 10, 10, 20]
//     }]
// });

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
