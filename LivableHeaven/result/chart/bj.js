// 1.气温 折线图
var qiwenBeijing = echarts.init(document.getElementById('beijing-1-qiwen'));
var optionBeijingQiwen = {

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
            itemStyle: {
                normal: {
                    color: '#fb9968' // 2022年的颜色
                }
            },
            data: [-2.2, -0.9, 7.6, 16.3, 21.3, 25.7, 27.4, 25.9, 22.7, 13.2, 6.7, -3.1, 13.38]
        },
        {
            name: '2021年',
            type: 'line',
            itemStyle: {
                normal: {
                    color: '#f9723d' // 2021年的颜色
                }
            },
            data: [-3.6, 2.8, 9.3, 15.2, 20.6, 25.7, 26.7, 25.7, 21.9, 12.8, 6.0, 0.5, 13.63]
        },
        {
            name: '2020年',
            type: 'line',
            itemStyle: {
                normal: {
                    color: '#ed5126' // 2020年的颜色
                }
            },
            data: [-1.5, 1.0, 9.1, 15.7, 21.1, 26.9, 26.7, 26.7, 21.8, 13.5, 6.5, -2.2, 13.8]
        },
        {
            name: '2019年',
            type: 'line',
            itemStyle: {
                normal: {
                    color: '#de2a18' // 2019年的颜色
                }
            },
            data: [-1.7, -0.68, 9.7, 14.7, 22.3, 26.3, 28.0, 25.9, 23.1, 13.3, 5.8, -1.2, 13.8]
        },
        {
            name: '2018年',
            type: 'line',
            itemStyle: {
                normal: {
                    color: '#82111f' // 2018年的颜色
                }
            },
            data: [-3.2, -0.9, 8.3, 15.7, 22.3, 27.1, 28.0, 27.8, 21.4, 13.0, 5.7, -2.5, 13.56]
        }
    ]
};
qiwenBeijing.setOption(optionBeijingQiwen);


// 2.降水日照 曲线柱状图
var jiangshuiBeijing = echarts.init(document.getElementById('beijing-2-jiangshui'));
var optionBeijingJiangshui = {
    backgroundColor: 'rgba(0,0,0,0)', // 设置透明背景色

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
        axisLine: {
        }
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
                color: '#f08080' // 设置柱状图为淡红色
            },
            data: [2.8, 3.0, 12.1, 13.4, 11.2, 91.5, 298.4, 108.7, 4.2, 6.7, 33.4, 0.0, 585.4/12]
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
                color: '#b22222' // 设置折线图为砖红色
            },
            data: [177.6, 221.9, 199.6, 245.8, 281.6, 185.0, 211.7, 196.7, 281.6, 187.6, 174.4, 215.6, 2579.1/12]
        }
        // 其他series配置保持不变
    ]
};
jiangshuiBeijing.setOption(optionBeijingJiangshui);

// 3.相对湿度散点图
var shiduBeijing = echarts.init(document.getElementById('beijing-3-shidu'));
var optionBeijingShidu = {

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
                ['1月', 52.2],
                ['2月', 36.9],
                ['3月', 48.0],
                ['4月', 41.1],
                ['5月', 45.5],
                ['6月', 62.9],
                ['7月', 74.7],
                ['8月', 73.0],
                ['9月', 58.3],
                ['10月', 56.5],
                ['11月', 58.7],
                ['12月', 33.0]
            ],
            type: 'scatter',
            itemStyle: {
                color: '#b22222' // 砖红色
            }
        },
        {
            name: '2021年',
            symbolSize: 20,
            data: [
                ['1月', 44.0],
                ['2月', 45.1],
                ['3月', 55.1],
                ['4月', 40.5],
                ['5月', 43.0],
                ['6月', 54.0],
                ['7月', 78.2],
                ['8月', 70.4],
                ['9月', 78.1],
                ['10月', 62.5],
                ['11月', 58.5],
                ['12月', 47.0]
            ],
            type: 'scatter',
            itemStyle: {
                color: '#ff6347' // 浅红色
            }
        }
    ]
};
shiduBeijing.setOption(optionBeijingShidu);


// 4.空气质量 雷达图 
var airBeijing = echarts.init(document.getElementById('beijing-4-airRadar'));
var optionBeijingAir = {

  tooltip: {
    trigger: 'item'
  },
  legend: {
    data: ['Beijing Air Quality']
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
          value: [3, 23, 54, 1.0, 171, 30, 286],
          name: 'Beijing Air Quality',
          areaStyle: {
            color: 'rgba(178, 34, 34, 0.5)' // 砖红色的透明度为0.5
          },
          itemStyle: {
            color: '#b22222' // 砖红色
          }
        }
      ]
    }
  ]
};
airBeijing.setOption(optionBeijingAir);

var fangjiaBeijing = echarts.init(document.getElementById("fangjia-5-beijing"));
var optionBeijingfangjia = {

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
      data: [34117, 36571, 38433, 42684, 46941],
      type: "line",
      color:  '#b22222',
      smooth: true
    },
  ],
};
fangjiaBeijing.setOption(optionBeijingfangjia);

// 6.平均工资 饼折图 
var wageBeijing = echarts.init(document.getElementById('beijing-6-wage'));
setTimeout(function () {
    var optionBeijingWage = {
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
                itemStyle: {
                    normal: {
                        color: '#fb9968' // 2022年的颜色
                    }
                }
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                emphasis: { focus: 'series' },
                itemStyle: {
                    normal: {
                        color: '#f9723d' // 2021年的颜色
                    }
                }
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                emphasis: { focus: 'series' },
                itemStyle: {
                    normal: {
                        color: '#ed5126' // 2020年的颜色
                    }
                }
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                emphasis: { focus: 'series' },
                itemStyle: {
                    normal: {
                        color: '#de2a18' // 2019年的颜色
                    }
                }
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
                color:['#fb9968','#f9723d','#ed5126','#de2a18','#82111f']
            }
        ]
    };

    wageBeijing.on('updateAxisPointer', function (event) {
        var xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
            var dimension = xAxisInfo.value + 1;
            wageBeijing.setOption({
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

    wageBeijing.setOption(optionBeijingWage);
});


// 7.收支 桑基图
var shouzhiBeijing = echarts.init(document.getElementById('beijing-7-shouzhi'));
var optionBeijingShouzhi = {

  tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove'
  },
  series: [
      {
          type: 'sankey',
          layout: 'none',
          data: [
              { name: '可支配收入',itemStyle: { color: '#a72126'}},
              { name: '工资性收入' ,itemStyle: { color: '#8f1d22'}},
              { name: '经营净收入',itemStyle: { color: '#8f3d2c'} },
              { name: '财产净收入',itemStyle: { color: '#822327'} },
              { name: '转移净收入',itemStyle: { color: '#822327'} },
              { name: '消费支出',itemStyle: { color: '#e60012'} },
              { name: '食品烟酒',itemStyle: { color: '#e67762'} },
              { name: '衣着',itemStyle: { color: '#dd6b4f'} },
              { name: '居住',itemStyle: { color: '#d24735'} },
              { name: '生活用品及服务',itemStyle: { color: '#cb523e'} },
              { name: '交通通信' ,itemStyle: { color: '#ba5140'}},
              { name: '教育文化/娱乐',itemStyle: { color: '#ba5b49'} },
              { name: '医疗保健' ,itemStyle: { color: '#b93a26'}},
              { name: '其他用品及服务',itemStyle: { color: '#9e2a22'} }
          ],
          links: [
              { source: '工资性收入', target: '可支配收入', value: 47758.0, lineStyle: { color: '#a72126' } },
              { source: '经营净收入', target: '可支配收入', value: 902.6, lineStyle: { color: '#8f1d22' } },
              { source: '财产净收入', target: '可支配收入', value: 12418.4, lineStyle: { color: '#8f3d2c' } },
              { source: '转移净收入', target: '可支配收入', value: 16335.5 , lineStyle: { color: '#822327' }},
              { source: '可支配收入', target: '消费支出', value: 42683.2, lineStyle: { color: '#e60012' } },
              { source: '消费支出', target: '食品烟酒', value: 9223.2 , lineStyle: { color: '#e67762' }},
              { source: '消费支出', target: '衣着', value: 1860.8 , lineStyle: { color: '#dd6b4f' }},
              { source: '消费支出', target: '居住', value: 17170.3 , lineStyle: { color: '#d24735' }},
              { source: '消费支出', target: '生活用品及服务', value: 2193.3, lineStyle: { color: '#cb523e' } },
              { source: '消费支出', target: '交通通信', value: 4129.3, lineStyle: { color: '#ba5140' } },
              { source: '消费支出', target: '教育文化/娱乐', value: 3008.0 , lineStyle: { color: '#ba5b49' }},
              { source: '消费支出', target: '医疗保健', value: 3981.5, lineStyle: { color: '#b93a26' } },
              { source: '消费支出', target: '其他用品及服务', value: 1116.8, lineStyle: { color: '#9e2a22' } }
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
shouzhiBeijing.setOption(optionBeijingShouzhi);
