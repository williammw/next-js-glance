import React, { useState, useEffect } from 'react';
import { LineChart, AreaChart, ColumnChart,  StockChart } from '@opd/g2plot-react'


// type Base = LineConfig | AreaConfig | ColumnConfig;

const PlotMaps = {};

let PreTooltipData;

function DemoMultiLine(){
  const [data, setData] = useState([]);
  const [rdata, setRdata] = useState([])
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('http://localhost:3000/api/demostock')
      .then((response) => response.json())
      .then((json) => {
        setData(json)
        let tmp = json.reverse()
        setRdata(tmp)
        // console.log(json.reverse())
      })
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  // setRdata(data.reverse())
  
  const config = {
    data: rdata,
    xField: 'trade_date',
    yField: 'vol',
    height: 200,
  };
  const config_amt = {
    data: rdata,
    xField: 'trade_date',
    yField: 'amount',
    height: 200,
  };

  var config_stock = {
    data: data,
    xField: 'trade_date',
    yField: ['open', 'close', 'high', 'low'],
    fallingFill: '#ef5350',
    risingFill: '#26a69a',
    meta: {
      vol: { alias: '成交量' },
      open: { alias: '开盘价' },
      close: { alias: '收盘价' },
      high: { alias: '最高价' },
      low: { alias: '最低价' },
    },
    
    tooltip: {
      crosshairs: {
        line: {
          style: {
            lineWidth: 0.5,
            stroke: 'rgba(0,0,0,0.25)',
          },
        },
        text: function text(type, defaultContent, items) {
          var textContent;
          if (type === 'x') {
            var item = items[0];
            textContent = item ? item.title : defaultContent;
          } else {
            textContent = ''.concat(defaultContent.toFixed(2));
          }
          return {
            position: type === 'y' ? 'start' : 'end',
            content: textContent,
            style: { fill: '#dfdfdf' },
          };
        },
        textBackground: {
          padding: [4, 8],
          style: { fill: '#363636' },
        },
      },
    },
    slider: {
      start: 0,
      end: 1,
    },
  };


  const showTooltip = ({ x, y }) => {
    // console.log('show tooltip', x,y)
    Object.keys(PlotMaps).forEach((plot) => {
      PlotMaps[plot].chart.showTooltip({ x, y });
    });
  };

  const setTooltipPosition = (evt, plot) => {
    // console.log('am i works?')
    const { x, y } = evt.gEvent;
    const currentData = plot.chart.getTooltipItems({ x, y });
    // console.log('set', currentData[0]?.data.trade_date, "|" , PreTooltipData?.trade_date)
    if (currentData[0]?.data.trade_date === PreTooltipData?.trade_date) {
      return;
    }
    PreTooltipData = currentData[0]?.data;
    showTooltip({ x, y });
  };
  const handleMouseMove = ( plot ) => {
    console.log('reach?')
  }

  return (
    <div>
      <StockChart {...config_stock}
      chartRef={(plot) => {
        console.log('polt', plot)
        PlotMaps.stock = plot;
        plot.on('plot:mousemove', (evt) => {
          setTooltipPosition(evt, plot);
        });
      }}
      />
      <ColumnChart
        {...config_amt}
        chartRef={(plot) => {
          PlotMaps.column = plot;
          plot.on('plot:mousemove', (evt) => {
            setTooltipPosition(evt, plot);
          });
        }}
      />      
      {/* <AreaChart
        {...config}
        chartRef={(plot) => {
          PlotMaps.area = plot;
          plot.on('plot:mousemove', (evt) => {
            setTooltipPosition(evt, plot);
          });
        }}
      />
      <LineChart
        {...config}
        chartRef={(plot) => {
          PlotMaps.line = plot;
          plot.on('plot:mousemove', (evt) => {
            setTooltipPosition(evt, plot);
          });
        }}
      /> */}
    </div>
  );
};

export default DemoMultiLine;


// https://charts.ant.design/guide/case