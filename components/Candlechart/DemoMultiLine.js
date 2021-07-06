import React, { useState, useEffect } from 'react';
import { LineChart, AreaChart, ColumnChart } from '@opd/g2plot-react'


// type Base = LineConfig | AreaConfig | ColumnConfig;

const PlotMaps = {};

let PreTooltipData;

function DemoMultiLine(){
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('http://localhost:3000/api/sp500')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    xField: 'date',
    yField: 'price',
    height: 200,
  };

  const showTooltip = ({ x, y }) => {
    console.log('show tooltip')
    Object.keys(PlotMaps).forEach((plot) => {
      PlotMaps[plot].chart.showTooltip({ x, y });
    });
  };

  const setTooltipPosition = (evt, plot) => {
    console.log('am i works?')
    const { x, y } = evt.gEvent;
    const currentData = plot.chart.getTooltipItems({ x, y });
    if (currentData[0]?.data.date === PreTooltipData?.date) {
      return;
    }
    PreTooltipData = currentData[0]?.data;
    showTooltip({ x, y });
  };
  const handleMouseMove = ( evt ) => {
    console.log('reach?')
  }

  return (
    <div >
      <LineChart
        {...config}
        
        
      />
      <AreaChart
        {...config}
        
      />
      <ColumnChart
        {...config}
        
        
      />
    </div>
  );
};

export default DemoMultiLine;