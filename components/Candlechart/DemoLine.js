import React, { useState, useEffect } from 'react';
import { LineChart } from '@opd/g2plot-react';

function  DemoLine() {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch(`api/demo`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    data: data,
    padding: 'auto',
    xField: 'Date',
    yField: 'scales',
    // geometryOptions: [
    //   {
    //     geometry: 'column',
    //   },
    //   {
    //     geometry: 'line',
    //     lineStyle: {
    //       lineWidth: 2,
    //     },
    //   },
    // ],
    annotations: [
      // {
      //   type: 'regionFilter',
      //   start: ['min', 'median'],
      //   end: ['max', '0'],
      //   color: '#F4664A',
      // },
      {
        type: 'text',
        position: ['min', 'median'],
        content: '中位数',
        offsetY: -4,
        style: { textBaseline: 'bottom' },
      },
      {
        type: 'line',
        start: ['min', 'median'],
        end: ['max', 'median'],
        style: {
          stroke: '#F4664A',
          lineDash: [2, 2],
        },
      },
    ],
    slider: {
      start: 0,
      end: 1,
    },
  };
  return <LineChart {...config} />;
};

export default DemoLine;