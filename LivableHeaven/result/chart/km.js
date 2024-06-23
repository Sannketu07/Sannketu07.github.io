// 1.气温 折线图
var qiwenKunming = echarts.init(document.getElementById('kunming-1-qiwen'));
var optionKunmingQiwen = {

    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['2022年', '2021年', '2020年', '2019年', '2018年']
    },
    xAxis: {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', '年平均']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '2022年',
            type: 'line',
            data: [10.1, 9.4, 17.1, 16.2, 18.0, 20.3, 21.8, 21.3, 18.9, 16.6, 14.0, 9.7, 16.1],
            itemStyle: {
                color: '#c0d695'
            }
        },
        {
            name: '2021年',
            type: 'line',
            data: [9.3, 12.4, 16.5, 19.0, 21.6, 21.5, 21.3, 21.2, 20.4, 16.8, 12.4, 10.5, 16.9],
            itemStyle: {
                color: '#a8b78c'
            }
        },
        {
            name: '2020年',
            type: 'line',
            data: [9.9, 11.0, 16.0, 16.1, 20.6, 22.5, 20.6, 20.8, 19.4, 16.5, 13.5, 10.7, 16.5],
            itemStyle: {
                color: '#779649'
            }
        },
        {
            name: '2019年',
            type: 'line',
            data: [9.9, 12.9, 14.6, 19.0, 22.3, 22.2, 20.8, 21.3, 18.4, 17.0, 14.0, 7.9, 16.7],
            itemStyle: {
                color: '#778a77'
            }
        },
        {
            name: '2018年',
            type: 'line',
            data: [9.1, 10.2, 14.4, 17.3, 19.3, 19.7, 21.1, 20.0, 18.9, 15.2, 12.4, 10.8, 15.7],
            itemStyle: {
                color: '#2a6e3f'
            }
        }
    ]
};
qiwenKunming.setOption(optionKunmingQiwen);


// 2.降水和日照 条折图
var jiangshuiKunming = echarts.init(document.getElementById('kunming-2-jiangshui'));
var optionKunmingJiangshui = {
    backgroundColor: 'rgba(0,0,0,0)', // 设置背景为透明

    tooltip: {
        trigger: 'axis',
    },
    legend: {
        data: ['降水量 (mm)', '日照时数 (h)'],
    },
    xAxis: {
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', '全年平均'],
    },
    yAxis: [
        {
            splitLine: { show: false },
            name: '降水量 (mm)',
            position: 'left'
        },
        {
            splitLine: { show: false },
            name: '日照时数 (h)',
            position: 'right'
        }
    ],
    series: [
        {
            name: '降水量 (mm)',
            type: 'bar',
            barWidth: 10,
            itemStyle: {
                borderRadius: 5,
                color: '#8fbc8f' // 设置柱状图为墨绿色的低饱和淡色
            },
            data: [27.5, 12.5, 31.7, 30.9, 105.7, 152.8, 100.1, 265.8, 268.4, 19.4, 4.0, 14.4, 1033.2/12]
        },
        {
            name: '日照时数 (h)',
            type: 'line',
            yAxisIndex: 1,
            smooth: true,
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 15,
            itemStyle: {
                color: '#006400' // 设置曲线图为墨绿色
            },
            data: [217.1, 223.6, 289.5, 268.5, 255.1, 280.9, 242.9, 156.4, 80.6, 102.3, 254.0, 141.3, 2512.2/12]
        }
    ]
};
jiangshuiKunming.setOption(optionKunmingJiangshui);

// 3.湿度 散点图
var shiduKunming = echarts.init(document.getElementById('kunming-3-shidu'));
var optionKunmingShidu = {

    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            return params.seriesName + ' <br/>月份: ' + params.data[0] + ' <br/>相对湿度: ' + params.data[1] + '%';
        }
    },
    xAxis: {
        type: 'category',
        name: '月份',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    },
    yAxis: {
        type: 'value',
        name: '相对湿度 (%)'
    },
    series: [
        {
            name: '2022年',
            symbolSize: 20,
            data: [
                ['1月', 67],
                ['2月', 61],
                ['3月', 50],
                ['4月', 62],
                ['5月', 72],
                ['6月', 75],
                ['7月', 74],
                ['8月', 81],
                ['9月', 82],
                ['10月', 81],
                ['11月', 69],
                ['12月', 75]
            ],
            type: 'scatter',
            itemStyle: {
                color: '#8fbc8f'
            }
        },
        {
            name: '2021年',
            symbolSize: 20,
            data: [
                ['1月', 64],
                ['2月', 58],
                ['3月', 43],
                ['4月', 51],
                ['5月', 57],
                ['6月', 72],
                ['7月', 74],
                ['8月', 76],
                ['9月', 71],
                ['10月', 78],
                ['11月', 73],
                ['12月', 74]
            ],
            type: 'scatter',
            itemStyle: {
                color: '#006400'
            }
        }
    ]
};
shiduKunming.setOption(optionKunmingShidu);

// 4.空气质量 雷达图 
var airKunming = echarts.init(document.getElementById('kunming-4-airRadar'));
var optionKunmingAir = {

  tooltip: {
    trigger: 'item'
  },
  legend: {
    data: ['Kunming Air Quality']
  },
  radar: {
    indicator: [
      { name: 'SO2 (μg/m3)', max: 100 },
      { name: 'NO2 (μg/m3)', max: 100 },
      { name: 'PM10 (μg/m3)', max: 100 },
      { name: 'CO (mg/m3)', max: 10 },
      { name: 'O3 (μg/m3)', max: 200 },
      { name: 'PM2.5 (μg/m3)', max: 100 },
      { name: 'Good Air Quality Days', max: 365 }
    ]
  },
  series: [
    {
      name: 'Air Quality Metrics',
      type: 'radar',
      data: [
        {
          value: [8, 20, 33, 0.7, 126, 20, 365],
          name: 'Kunming Air Quality',
          areaStyle: {
            color: '#8fbc8f' 
          },
          itemStyle: {
            color: '#8fbc8f' 
          }
        }
      ]
    }
  ]
};
airKunming.setOption(optionKunmingAir);


// 5.房价 折线图 
var fangjiaKunming = echarts.init(document.getElementById("fangjia-5-kunming"));
var optionKunmingfangjia = {

  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
    },
  },
  xAxis: {
    type: "category",
    data: ["2018", "2019", "2020", "2021", "2022"],
  },
  yAxis: { type: "value" },
  series: [
    {
      data: [8197, 12680, 12123, 12212, 12353],
      type: "line",
      color: "#006400",
      smooth: true,
      color: ['#c0d695','#a8b78c','#779649','#778a77','#2a6e3f']
    },
  ],
};
fangjiaKunming.setOption(optionKunmingfangjia);

// 6.平均工资 饼折图
var wageKunming = echarts.init(document.getElementById('kunming-6-wage'));
setTimeout(function () {
var optionKunmingWage = {

    legend: {},
    tooltip: {
        trigger: 'axis',
        showContent: false
    },
    dataset: {
        source: [
            ['城市', '2022年', '2021年', '2020年', '2019年', '2018年', '2017年'],
            ['平均工资', 103128, 98730, 93133, 86585, 75701, 69106],
            ['在岗职工', 108739, 104286, 98287, 91811, 80525, 73515],
            ['国有单位', 115759, 110703, 106766, 99456, 97049, 89448],
            ['城镇集体单位', 89109, 91304, 86756, 76185, 80379, 70108],
            ['其他单位', 87728, 84311, 78592, 74383, 59116, 52336]
        ]
    },
    xAxis: { type: 'category' },
    yAxis: { gridIndex: 0 },
    grid: { top: '55%' },
    series: [
        {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' },
            color: '#c0d695'
        },
        {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' },
            color: '#a8b78c'
        },
        {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' },
            color: '#779649'
        },
        {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' },
            color: '#778a77'
        },
        {
            type: 'pie',
            id: 'pie',
            radius: '30%',
            center: ['50%', '25%'],
            color: ['#c0d695','#a8b78c','#779649','#778a77','#2a6e3f'],
            emphasis: {
                focus: 'self'
            },
            label: {
                formatter: '{b}: {@2022年} ({d}%)'
            },
            encode: {
                itemName: '城市',
                value: '2022年',
                tooltip: '2022年'
            }
        }
    ]
};

wageKunming.on('updateAxisPointer', function (event) {
    var xAxisInfo = event.axesInfo[0];
    if (xAxisInfo) {
        var dimension = xAxisInfo.value + 1;
        wageKunming.setOption({
            series: {
                id: 'pie',
                label: {
                    formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                },
                encode: {
                    value: dimension,
                    tooltip: dimension
                }
            }
        });
    }
});

wageKunming.setOption(optionKunmingWage);
});


// 7.收支 桑基图
var shouzhiKunming = echarts.init(document.getElementById('kunming-7-shouzhi'));
var optionKunmingShouzhi = {

  tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove'
  },
  series: [
      {
          type: 'sankey',
          layout: 'none',
          data: [
              { name: '可支配收入',itemStyle: { color: '#3f503b'} },
              { name: '工资性收入' ,itemStyle: { color: '#555f4d'}},
              { name: '经营净收入',itemStyle: { color: '#4e6548'} },
              { name: '财产净收入' ,itemStyle: { color: '#446a37'}},
              { name: '转移净收入' ,itemStyle: { color: '#4f6f46'}},
              { name: '消费支出' ,itemStyle: { color: '#5d7259'}},
              { name: '食品烟酒',itemStyle: { color: '#c0d09d'} },
              { name: '衣着' ,itemStyle: { color: '#cOd695'}},
              { name: '居住' ,itemStyle: { color: '#a9be7b'}},
              { name: '生活用品及服务',itemStyle: { color: '#a8bf8f'} },
              { name: '交通通信' ,itemStyle: { color: '#a8b78c'}},
              { name: '教育文化/娱乐',itemStyle: { color: '#90a07d'} },
              { name: '医疗保健' ,itemStyle: { color: '#9bb496'}},
              { name: '其他用品及服务' ,itemStyle: { color: '#81a380'}}
          ],
          links: [
              { source: '工资性收入', target: '可支配收入', value: 13683.2,lineStyle: { color: '#3f503b'}},
              { source: '经营净收入', target: '可支配收入', value: 6118.5 ,lineStyle: { color: '#555f4d'}},
              { source: '财产净收入', target: '可支配收入', value: 2492.3 ,lineStyle: { color: '#4e6548'}},
              { source: '转移净收入', target: '可支配收入', value: 4642.7 ,lineStyle: { color: '#446a37'}},
              { source: '可支配收入', target: '消费支出', value: 18950.8 ,lineStyle: { color: '#5d7259'}},
              { source: '消费支出', target: '食品烟酒', value: 6116.9 ,lineStyle: { color: '#c0d09d'}},
              { source: '消费支出', target: '衣着', value: 939.6 ,lineStyle: { color: '#cOd695'}},
              { source: '消费支出', target: '居住', value: 4111.1 ,lineStyle: { color: '#a9be7b'}},
              { source: '消费支出', target: '生活用品及服务', value: 1008.1 ,lineStyle: { color: '#a8bf8f'}},
              { source: '消费支出', target: '交通通信', value: 2556.4 ,lineStyle: { color: '#a8b78c'}},
              { source: '消费支出', target: '教育文化/娱乐', value: 2028.0 ,lineStyle: { color: '#90a07d'}},
              { source: '消费支出', target: '医疗保健', value: 1825.2 ,lineStyle: { color: '#9bb496'}},
              { source: '消费支出', target: '其他用品及服务', value: 365.4 ,lineStyle: { color: '#81a380'}}
          ],
          lineStyle: {
              color: 'source',
              curveness: 0.5
          },
          itemStyle: {
              borderWidth: 1,
              borderColor: '#aaa'
          },
          emphasis: {
              lineStyle: {
                  color: 'target',
                  opacity: 0.6
              }
          }
      }
  ]
};
shouzhiKunming.setOption(optionKunmingShouzhi);