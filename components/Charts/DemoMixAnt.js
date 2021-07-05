import React, { useState, useEffect } from 'react';
import { MixChart } from '@opd/g2plot-react';

function DemoMixAnt(){
  const [data, setData] = useState({});
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('http://localhost:3000/api/mix')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    appendPadding: 8,
    syncViewPadding: true,
    tooltip: { shared: true, showMarkers: false, showCrosshairs: true, offsetY: -50 },
    views: [
      {
        data: data?.area || [],
        axes: {},
        meta: {
          time: {
            type: 'time',
            mask: 'MM-DD',
            nice: true,
            tickInterval: 24 * 3600 * 1000 * 2,
            range: [0, 1],
          },
          temperature: {
            nice: true,
            sync: true,
            alias: '温度范围',
          },
        },
        // view1: prepare a area plot, mapping position to `time*temperature`
        geometries: [
          {
            type: 'area',
            xField: 'time',
            yField: 'temperature',
            mapping: {},
          },
        ],
      },
      {
        data: data?.line || [],
        axes: false,
        meta: {
          time: {
            type: 'time',
            mask: 'MM-DD',
            nice: true,
            tickInterval: 24 * 3600 * 1000 * 2,
            range: [0, 1],
          },
          temperature: {
            sync: 'temperature',
            alias: '温度',
          },
        },
        // view2: prepare a line plot and point plot, mapping position to `time*temperature` (share data)
        geometries: [
          {
            type: 'line',
            xField: 'time',
            yField: 'temperature',
            mapping: {},
          },
          {
            type: 'point',
            xField: 'time',
            yField: 'temperature',
            mapping: {
              shape: 'circle',
              style: {
                fillOpacity: 1,
              },
            },
          },
        ],
      },
    ],
  };
  return <MixChart {...config} />;
};

export default DemoMixAnt;