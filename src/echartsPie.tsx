import React from 'react';
import ReactEcharts from 'echarts-for-react';

export const EChartsPie = () => {
  const option = {
    color: ['#003366', '#006699', '#4cabce', '#e5323e', '#223a3f'],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    legend: {
      orient: 'vertical',
      left: 10,
      data: ['Wedding And Engagement', 'Travel Shoot', 'Kids Party', 'Portraits', 'Others'],
    },
    series: [
      {
        name: 'Type of Bookings',
        type: 'pie',
        radius: ['35%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '20',
            fontWeight: 'bold',
            textBorderColor: 'rgba(255, 255, 255, 1)',
            textShadowColor: 'rgba(255, 255, 255, 1)',
            textBorderBlur: 1,
            textShadowOffsetX: 1,
            textShadowOffsetY: 2,
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 335, name: 'Wedding And Engagement' },
          { value: 310, name: 'Travel Shoot' },
          { value: 234, name: 'Kids Party' },
          { value: 135, name: 'Portraits' },
          { value: 1548, name: 'Others' },
        ],
      },
    ],
  };

  return (
    <div>
      <h1>ECharts</h1>
      <h6>Pie - Doughnut</h6>
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
