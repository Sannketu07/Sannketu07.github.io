// 1.气温 折线图
var qiwenXiamen = echarts.init(document.getElementById('xiamen-1-qiwen'));
var optionXiamenQiwen = {

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
            data: [12.7, 10.3, 17.6, 20.0, 20.5, 26.4, 31.1, 31.4, 28.3, 23.3, 20.3, 12.4, 21.2],
            color:'#91f7ff'
        },
        {
            name: '2021年',
            type: 'line',
            data: [12.7, 10.3, 17.6, 20.0, 20.5, 26.4, 31.1, 31.4, 28.3, 23.3, 20.3, 12.4, 21.2],
            color:'#009af9'
        },
        {
            name: '2020年',
            type: 'line',
            data: [13.4, 13.6, 15.7, 17.8, 24.7, 28.8, 30.7, 30.1, 26.0, 22.3, 20.5, 13.9, 21.5],
            color:'#004999'
        },
        {
            name: '2019年',
            type: 'line',
            data: [12.5, 12.4, 15.1, 20.1, 22.0, 25.8, 29.0, 29.2, 27.3, 23.1, 18.6, 14.4, 20.8],
            color:'#4590e7'
        },
        {
            name: '2018年',
            type: 'line',
            data: [11.7, 11.0, 16.5, 20.8, 25.6, 26.0, 28.9, 28.7, 27.3, 21.3, 18.3, 14.4, 20.9],
            color:'#69b4d1'
        }
    ]
};
qiwenXiamen.setOption(optionXiamenQiwen);

// 2.降水和日照 条折图
var jiangshuiXiamen = echarts.init(document.getElementById('xiamen-2-jiangshui'));
var optionXiamenJiangshui = {
    backgroundColor: 'rgba(0,0,0,0)',

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
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
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#93b5cf' },
                ])
            },
            data: [33.8, 120.8, 125.6, 93.9, 278.5, 321.9, 95.4, 75.1, 5.3, 10.9, 99.6, 57.9, 1318.7/12]
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
                color: '#0096D1'
            },
            data: [57.0, 48.3, 150.5, 173.3, 91.0, 107.4, 248.4, 278.8, 232.1, 144.5, 57.8, 32.2, 1621.3/12]
        },
    ]
};
jiangshuiXiamen.setOption(optionXiamenJiangshui);

// 3.湿度 散点图
var shiduXiamen = echarts.init(document.getElementById('xiamen-3-shidu'));
var optionXiamenShidu = {

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
                ['1月', 78],
                ['2月', 84],
                ['3月', 77],
                ['4月', 68],
                ['5月', 81],
                ['6月', 85],
                ['7月', 70],
                ['8月', 65],
                ['9月', 60],
                ['10月', 59],
                ['11月', 80],
                ['12月', 69]
            ],
            type: 'scatter',
            itemStyle: {
                color: '#93b5cf'
            }
        },
        {
            name: '2021年',
            symbolSize: 20,
            data: [
                ['1月', 63],
                ['2月', 71],
                ['3月', 79],
                ['4月', 71],
                ['5月', 83],
                ['6月', 86],
                ['7月', 68],
                ['8月', 84],
                ['9月', 73],
                ['10月', 75],
                ['11月', 75],
                ['12月', 66]
            ],
            type: 'scatter',
            itemStyle: {
                color: '#0096D1'
            }
        }
    ]
};
shiduXiamen.setOption(optionXiamenShidu);

// 4.空气质量 雷达图 
var airXiamen = echarts.init(document.getElementById('xiamen-4-airRadar'));
var optionXiamenAir = {

  tooltip: {
    trigger: 'item'
  },
  legend: {
    data: ['Fuzhou Air Quality']
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
          value: [4, 16, 32, 0.7, 142, 18, 356],
          name: 'Fuzhou Air Quality',
          areaStyle: {
            color: '#93b5cf' 
          },
          itemStyle: {
            color: '#93b5cf' 
          }
        }
      ]
    }
  ]
};
airXiamen.setOption(optionXiamenAir);

// 5.房价 折线图 
var fangjiaXiamen = echarts.init(document.getElementById("fangjia-5-xiamen"));
var optionXiamenfangjia = {

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
      data: [28053, 33715, 33830, 33779, 31452],
      type: "line",
      color: "#0096D1",
      smooth: true,
    },
  ],
};
fangjiaXiamen.setOption(optionXiamenfangjia);

// 6.平均工资 饼折图
var wageXiamen = echarts.init(document.getElementById('xiamen-6-wage'));
setTimeout(function () {
    var optionXiamenWage = {

        legend: {},
        tooltip: {
            trigger: 'axis',
            showContent: false
        },
        dataset: {
            source: [
                ['城市', '2022年', '2021年', '2020年', '2019年', '2018年', '2017年'],
                ['平均工资', 103803, 98071, 88149, 81814, 74316, 67420],
                ['在岗职工', 106977, 101516, 91072, 84374, 76266, 69029],
                ['国有单位', 134627, 124279, 113614, 105876, 98321, 86616],
                ['城镇集体单位', 78593, 75505, 70225, 73518, 71238, 62947],
                ['其他单位', 93047, 89169, 79627, 74593, 67343, 61253]
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
                 color:'#91f7ff'
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                emphasis: { focus: 'series' },
                color:'#009af9'
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                emphasis: { focus: 'series' },
                color:'#004999'
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                emphasis: { focus: 'series' },
                color:'#4590e7'
            },
            {
                type: 'pie',
                id: 'pie',
                radius: '30%',
                center: ['50%', '25%'],
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
                },
                color: ['#91f7ff', '#009af9', '#004999', '#4590e7', '#69b4d1']
            }
        ]
    };

    wageXiamen.on('updateAxisPointer', function (event) {
        var xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
            var dimension = xAxisInfo.value + 1;
            wageXiamen.setOption({
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

    wageXiamen.setOption(optionXiamenWage);
});

// 7.收支 桑基图
var shouzhiXiamen = echarts.init(document.getElementById('xiamen-7-shouzhi'));
var optionXiamenShouzhi = {

  tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove'
  },
  series: [
      {
          type: 'sankey',
          layout: 'none',
          data: [
            { name: '可支配收入', itemStyle: { color: '#354e6b'} },
            { name: '工资性收入', itemStyle: { color: '#12507b' } },
            { name: '经营净收入', itemStyle: { color: '#06436f' } },
            { name: '财产净收入', itemStyle: { color: '#003460' } },
            { name: '转移净收入', itemStyle: { color: '#003d47' } },
            { name: '消费支出', itemStyle: { color: '#327lae' } },
            { name: '食品烟酒', itemStyle: { color: '#bcd4e7' } },
            { name: '衣着', itemStyle: { color: '#aed0ee' } },
            { name: '居住', itemStyle: { color: '#a3bbdb' } },
            { name: '生活用品及服务', itemStyle: { color: '#8ba3c7' } },
            { name: '交通通信', itemStyle: { color: '#8ba3c7' } },
            { name: '教育文化/娱乐', itemStyle: { color: '#a3bbdb' } },
            { name: '医疗保健', itemStyle: { color: '#6e9bc5' } },
            { name: '其他用品及服务', itemStyle: { color: '#4994c4' } }
        ],
        links: [
            { source: '工资性收入', target: '可支配收入', value: 13683.2, lineStyle: { color: '#354e6b' } },
            { source: '经营净收入', target: '可支配收入', value: 6118.5, lineStyle: { color: '#12507b' } },
            { source: '财产净收入', target: '可支配收入', value: 2492.3, lineStyle: { color: '#06436f' } },
            { source: '转移净收入', target: '可支配收入', value: 4642.7, lineStyle: { color: '#003460' } },
            { source: '可支配收入', target: '消费支出', value: 18950.8, lineStyle: { color: '#003d47' } },
            { source: '消费支出', target: '食品烟酒', value: 6116.9, lineStyle: { color: '#327lae' } },
            { source: '消费支出', target: '衣着', value: 939.6, lineStyle: { color: '#bcd4e7' } },
            { source: '消费支出', target: '居住', value: 4111.1, lineStyle: { color: '#aed0ee' } },
            { source: '消费支出', target: '生活用品及服务', value: 1008.1, lineStyle: { color: '#a3bbdb' } },
            { source: '消费支出', target: '交通通信', value: 2556.4, lineStyle: { color: '#8ba3c7' } },
            { source: '消费支出', target: '教育文化/娱乐', value: 2028.0, lineStyle: { color: '#8aabcc' } },
            { source: '消费支出', target: '医疗保健', value: 1825.2, lineStyle: { color: '#6e9bc5' } },
            { source: '消费支出', target: '其他用品及服务', value: 365.4, lineStyle: { color: '#4994c4' } }
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
shouzhiXiamen.setOption(optionXiamenShouzhi);