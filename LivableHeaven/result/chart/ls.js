// 1.气温 折线图
var qiwenLasa = echarts.init(document.getElementById('lasa-1-qiwen'));
var optionLasaQiwen = {
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
            data: [-1.1, 0.0, 9.0, 11.7, 14.3, 17.5, 19.6, 18.5, 14.6, 10.8, 5.1, 0.7, 10.1],
            itemStyle: {
                color: '#ffee6f'
            }
        },
        {
            name: '2021年',
            type: 'line',
            data: [3.4, 3.2, 7.4, 9.1, 14.0, 18.8, 17.4, 16.8, 14.6, 12.6, 5.7, 1.0, 10.3],
            itemStyle: {
                color: '#ecd452'
            }
        },
        {
          name: '2020年',
          type: 'line',
          data: [-0.7, 1.7, 5.9, 7.8, 11.9, 17.7, 17.2, 17.2, 16.8, 13.1, 5.0, 2.8, 9.7],
          itemStyle: {
            color: '#fac03d'
        }
      },
      {
          name: '2019年',
          type: 'line',
          data: [-1.9, 3.1, 5.8, 9.7, 14.3, 19.6, 16.3, 16.8, 14.4, 10.3, 6.1, 0.3, 9.6],
          itemStyle: {
            color: '#fedc5e'
        }
      },
      {
          name: '2018年',
          type: 'line',
          data: [1.3, 4.5, 5.5, 9.1, 13.3, 17.3, 16.4, 16.2, 15.4, 9.1, 4.7, -1.7, 9.3],
          itemStyle: {
            color: '#fac03d'
        }
      }
  ]
};
qiwenLasa.setOption(optionLasaQiwen);


// 2.降水和日照 条折图
var jiangshuiLasa = echarts.init(document.getElementById('lasa-2-jiangshui'));
var optionLasaJiangshui = {
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
                    { offset: 0, color: '#fbd44d' },
                ])
            },
            data: [0.0, 2.8, 0.0, 1.9, 48.7, 52.1, 18.3, 63.6, 82.4, 3.6, 0.1, 0.0, 273.5/12]
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
                color: '#caab62'
            },
            data: [233.9, 208.1, 321.1, 241.0, 268.7, 242.9, 280.9, 247.5, 227.4, 265.2, 268.9, 265.7, 3071.3/12]
        },
    ]
};
jiangshuiLasa.setOption(optionLasaJiangshui);

// 3.湿度 散点图
var shiduLasa = echarts.init(document.getElementById('lasa-3-shidu'));
var optionLasaShidu = {
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
                ['1月', 25],
                ['2月', 26],
                ['3月', 16],
                ['4月', 25],
                ['5月', 40],
                ['6月', 47],
                ['7月', 37],
                ['8月', 46],
                ['9月', 57],
                ['10月', 43],
                ['11月', 24],
                ['12月', 20]
            ],
            type: 'scatter',
            itemStyle: {
                color: '#fbd44d'
            }
        },
        {
            name: '2021年',
            symbolSize: 20,
            data: [
                ['1月', 18],
                ['2月', 24],
                ['3月', 32],
                ['4月', 28],
                ['5月', 44],
                ['6月', 39],
                ['7月', 56],
                ['8月', 60],
                ['9月', 52],
                ['10月', 38],
                ['11月', 20],
                ['12月', 26]
            ],
            type: 'scatter',
            itemStyle: {
                color: '#896511'
            }
        }
    ]
};
shiduLasa.setOption(optionLasaShidu);

// 4.空气质量 雷达图 
var airLasa = echarts.init(document.getElementById('lasa-4-airRadar'));
var optionLasaAir = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    data: ['Lasa Air Quality']
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
          value: [8, 12, 18, 0.7, 131, 8, 364],
          name: 'Lasa Air Quality',
          areaStyle: {
            color: '#fbd44d' 
          },
          itemStyle: {
            color: '#fbd44d' 
          }
        }
      ]
    }
  ]
};
airLasa.setOption(optionLasaAir);

// 5.房价 折线图 
var fangjiaLasa = echarts.init(document.getElementById("fangjia-5-lasa"));
var optionLasafangjia = {

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
      data: [4892, 5589, 6440, 7353, 8143],
      type: "line",
      color: "#FFD700",
      smooth: true,
    },
  ],
};
fangjiaLasa.setOption(optionLasafangjia);

// 6.平均工资 饼折图
var wageLasa = echarts.init(document.getElementById('lasa-6-wage'));
setTimeout(function () {
    var optionLasaWage = {
        legend: {},
        tooltip: {
            trigger: 'axis',
            showContent: false
        },
        dataset: {
            source: [
                ['城市', '2022年', '2021年', '2020年', '2019年', '2018年', '2017年'],
                ['平均工资', 154929, 140355, 121005, 118118, 116015, 108817],
                ['在岗职工', 161914, 145461, 126226, 123045, 119947, 115549],
                ['国有单位', 178768, 161382, 139628, 133835, 122030, 116581],
                ['城镇集体单位', 75212, 76945, 70728, 65474, 49144, 51658],
                ['其他单位', 116716, 109459, 92926, 89940, 90417, 72754]
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
                color:'#ffee6f'
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                emphasis: { focus: 'series' },
                color:'#ecd452'
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                emphasis: { focus: 'series' },
                color: '#fac03d'
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                emphasis: { focus: 'series' },
                color:'#fedc5e'
            },
            {
                type: 'pie',
                id: 'pie',
                radius: '30%',
                center: ['50%', '25%'],
                color:[ '#ffee6f','#ecd452', '#fac03d','#fedc5e','#fac03d'],
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

    wageLasa.on('updateAxisPointer', function (event) {
        var xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
            var dimension = xAxisInfo.value + 1;
            wageLasa.setOption({
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

    wageLasa.setOption(optionLasaWage);
});

// 7.收支 桑基图
var shouzhiLasa = echarts.init(document.getElementById('lasa-7-shouzhi'));
var optionLasaShouzhi = {
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
    },
    series: [
        {
            type: 'sankey',
            layout: 'none',
            data: [
                { name: '可支配收入' ,itemStyle: { color: '#aa8534'}},
                { name: '工资性收入' ,itemStyle: { color: '#bf9c46'}},
                { name: '经营净收入' ,itemStyle: { color: '#d5b45c'}},
                { name: '财产净收入' ,itemStyle: { color: '#d3a237'}},
                { name: '转移净收入' ,itemStyle: { color: '#e5a84b'}},
                { name: '消费支出' ,itemStyle: { color: '#fac03d'}},
                { name: '食品烟酒' ,itemStyle: { color: '#fffbc7'}},
                { name: '衣着',itemStyle: { color: '#f7eead'}},
                { name: '居住' ,itemStyle: { color: '#ebela9'}},
                { name: '生活用品及服务' ,itemStyle: { color: '#ece093'}},
                { name: '交通通信' ,itemStyle: { color: '#e1d279'}},
                { name: '教育文化/娱乐' ,itemStyle: { color: '#eld384'}},
                { name: '医疗保健' ,itemStyle: { color: '#ead89a'}},
                { name: '其他用品及服务',itemStyle: { color: '#d6c560'} }
            ],
            links: [
                { source: '工资性收入', target: '可支配收入', value: 14792.6 ,lineStyle: { color: '#bf9c46'}},
                { source: '经营净收入', target: '可支配收入', value: 6039.9 ,lineStyle: { color: '#d5b45c'}},
                { source: '财产净收入', target: '可支配收入', value: 1641.8 ,lineStyle: { color: '#d3a237'}},
                { source: '转移净收入', target: '可支配收入', value: 4200.6 ,lineStyle: { color: '#e5a84b'}},
                { source: '可支配收入', target: '消费支出', value: 15885.6 ,lineStyle: { color: '#fac03d'}},
                { source: '消费支出', target: '食品烟酒', value: 5747.4 ,lineStyle: { color: '#fffbc7'}},
                { source: '消费支出', target: '衣着', value: 1305.1 ,lineStyle: { color: '#f7eead'}},
                { source: '消费支出', target: '居住', value: 3321.4 ,lineStyle: { color: '#ebela9'}},
                { source: '消费支出', target: '生活用品及服务', value: 1092.0 ,lineStyle: { color: '#ece093'}},
                { source: '消费支出', target: '交通通信', value: 2519.7 ,lineStyle: { color: '#e1d279'}},
                { source: '消费支出', target: '教育文化/娱乐', value: 792.8 ,lineStyle: { color: '#eld384'}},
                { source: '消费支出', target: '医疗保健', value: 726.5 ,lineStyle: { color: '#ead89a'}},
                { source: '消费支出', target: '其他用品及服务', value: 380.8 ,lineStyle: { color: '#d6c560'}}
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
shouzhiLasa.setOption(optionLasaShouzhi);


