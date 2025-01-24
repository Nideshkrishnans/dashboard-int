import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const years = [
  new Date(2025, 1, 10),
  new Date(2025, 1, 12),
  new Date(2025, 1, 14),
  new Date(2025, 1, 16),
];

const Generator = [
  31000, 33000, 28619.805, 32451, 
];

const compressor = [
  32000, 31000, 30000, 36000
];


const lineChartsParams = {
  series: [
    {
      label: 'Generator',
      data: Generator,
      showMark: false,
    },
    {
      label: 'compressor',
      data: compressor,
      showMark: false,
    },
  ],
  width: 600,
  height: 300,
};

const yearFormatter = (date) => date.getFullYear().toString();
const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
}).format;

export default function Formatting() {
  return (
    <LineChart
      {...lineChartsParams}
      xAxis={[{ data: years, scaleType: 'time', valueFormatter: yearFormatter }]}
      series={lineChartsParams.series.map((series) => ({
        ...series,
        valueFormatter: (v) => (v === null ? '' : currencyFormatter(v)),
      }))}
    />
  );
}
