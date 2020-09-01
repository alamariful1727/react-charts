import React, { useState, useEffect } from 'react';
import ReactEcharts from 'echarts-for-react';

export const EChartsLine = () => {
  const [X, setX] = useState('X');
  const [Y, setY] = useState('Y');

  useEffect(() => {
    setX('Day');
    setY('Money');
  }, []);

  const option = {
    // title: {
    //   text: 'Main Title',
    //   subtext: 'Sub Title',
    //   left: 'center',
    //    top: 'center',
    //   textStyle: {
    //     fontSize: 18,
    //   },
    //   subtextStyle: {
    //     fontSize: 14,
    //   },
    // },
    color: ['#003366'],
    legend: {},
    grid: {
      // top: '50', // ? use this, if you use title
      top: '25', // ? use this, if you use legend
      right: '0',
      bottom: '40',
      left: '55',
    },
    tooltip: {
      trigger: 'axis', //? item = [scatter/pie], axis = [bar/line], none
      axisPointer: {
        type: 'cross', //? line, shadow, none, cross
      },
      formatter: `{a0}<br /> ${X} : {b0}<br />${Y} : {c0}`,
    },
    xAxis: {
      name: 'Day',
      nameLocation: 'middle',
      nameTextStyle: {
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 30,
        color: '#003366',
      },
      type: 'category', //? value, category, time, log
      axisLine: {
        lineStyle: {
          color: '#ccc',
        },
      },
      axisLabel: {
        fontSize: 10,
        color: '#666',
      },
      data: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
        '31',
      ],
    },
    yAxis: {
      name: 'Money',
      nameLocation: 'middle',
      nameTextStyle: {
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 30,
        color: '#003366',
      },
      nameGap: 27,
      type: 'value',
      splitLine: {
        lineStyle: {
          color: '#ddd',
        },
      },
      axisLine: {
        lineStyle: {
          color: '#ccc',
        },
      },
      axisLabel: {
        fontSize: 10,
        color: '#666',
        formatter: '{value}M',
        padding: 0,
      },
    },
    series: [
      {
        name: 'Bookings per month',
        type: 'line',
        data: [
          65,
          59,
          80,
          81,
          56,
          55,
          40,
          61,
          99,
          85,
          81,
          12,
          57,
          41,
          65,
          59,
          80,
          81,
          56,
          55,
          40,
          61,
          99,
          85,
          81,
          12,
          57,
          41,
          65,
          59,
          80,
          81,
          56,
          55,
          40,
        ],
      },
    ],
  };

  return (
    <div>
      <h1>ECharts</h1>
      <h6>Line Example</h6>
      <div style={{ border: '1px solid black' }}>
        <ReactEcharts
          option={option}
          showLoading={false}
          notMerge={true}
          // lazyUpdate={true}
          // theme={"theme_name"}
          // onChartReady={this.onChartReadyCallback}
          // onEvents={EventsDict}
          // opts={}
        />
      </div>
    </div>
  );
};
