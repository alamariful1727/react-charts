import React from 'react';
import { Line } from 'react-chartjs-2';

export const ReactChartjs2 = () => {
  return (
    <div>
      <h1>react-chartjs-2</h1>
      <h6>Line Example</h6>
      <div>
        <Line
          data={{
            labels: [
              '22-01-19',
              '22-01-20',
              '22-01-21',
              '22-01-19',
              '22-01-20',
              '22-01-21',
              '22-01-19',
              '22-01-20',
              '22-01-21',
              '22-01-19',
              '22-01-20',
              '22-01-21',
              '22-01-21',
            ],
            datasets: [
              {
                label: 'Avg income per year',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 3,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40, 61, 99, 85, 81, 12, 57, 41],
              },
            ],
          }}
          options={{
            tooltips: {
              mode: 'nearest',
            },
            responsive: true,
            title: { text: 'Income', display: true },
            legend: {
              display: true,
              align: 'end', //'start','center','end'
              labels: {
                // fontColor: 'rgb(255, 99, 132)',
              },
            },
            scales: {
              yAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: 'MONEY',
                  },
                  ticks: {
                    beginAtZero: true,
                    autoSkip: true,
                    maxTicksLimit: 10,
                    callback: function (value: any, index: any, values: any) {
                      console.log(value, index, values);
                      return '$' + value;
                    },
                  },
                  gridLines: {
                    display: true,
                  },
                },
              ],
              xAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: 'TIME',
                  },
                  ticks: {
                    maxTicksLimit: 31,
                    callback: function (value: any, index: any, values: any) {
                      console.log(value, index, values);
                      return value;
                    },
                  },
                  gridLines: {
                    display: true,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </div>
  );
};
