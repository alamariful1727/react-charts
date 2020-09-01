import React from 'react';
import { ReactChartjs2 } from './react-chartjs-2';
import { EChartsLine } from './echartsLine';
import { EChartsPie } from './echartsPie';

function App() {
  return (
    <div>
      <ReactChartjs2 />
      <EChartsLine />
      <EChartsPie />
    </div>
  );
}

export default App;
