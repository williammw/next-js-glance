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
    fetch(`api/demostock`)
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
    slider: {
      start: 0,
      end: 1,
    },
  };
  const config_amt = {
    data: rdata,
    xField: 'trade_date',
    yField: 'amount',
    height: 200,
    slider: {
     
    },
    yAxis: {
      // format y axis label style
      label: {
        formatter: (value) => {
          var newValue = value;
          if (value >= 1000) {
              var suffixes = ["", "k", "m", "b","t"];
              var suffixNum = Math.floor( (""+value).length/3 );
              var shortValue = '';
              for (var precision = 2; precision >= 1; precision--) {
                  shortValue = parseFloat( (suffixNum != 0 ? (value / Math.pow(1000,suffixNum) ) : value).toPrecision(precision));
                  var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g,'');
                  if (dotLessShortValue.length <= 2) { break; }
              }
              if (shortValue % 1 != 0)  shortValue = shortValue.toFixed(1);
              newValue = shortValue+suffixes[suffixNum];
          }
          return newValue;
        },
        
        // style: {
        //   fill: '#FE740C',
        // },
      },
    },
  };

  var config_stock = {
    data: data,
    xField: 'trade_date',
    yField: ['open', 'close', 'high', 'low'],
    fallingFill: '#ef5350',
    risingFill: '#26a69a',
    meta: {
      vol: { alias: 'Volume' },
      open: { alias: 'Open' },
      close: { alias: 'Close' },
      high: { alias: 'High' },
      low: { alias: 'Low' },
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
    },
  };


  const showTooltip = ({ x, y }) => {
    // console.log('show tooltip', x,y)
    Object.keys(PlotMaps).forEach((plot) => {
      // console.log(PlotMaps[plot].chart);
      PlotMaps[plot].chart.showTooltip({ x, y });
    });
  };

  const setTooltipPosition = (evt, plot) => {
    // console.log('am i evt?', evt);
    // console.log('am i plot?', plot.chart);
    const { x, y } = evt.gEvent;
    const currentData = plot.chart.getTooltipItems({ x, y });
    // console.log('set', currentData[0]?.data.trade_date, "|" , PreTooltipData?.trade_date)
    if (currentData[0]?.data.trade_date === PreTooltipData?.trade_date) {
      return;
    }
    PreTooltipData = currentData[0]?.data;
    showTooltip({ x, y });
  };

  // const onSliderDrag = (evt, plot) => {
  //   console.log('drage leave')
  //   console.log(evt.gEvent);
  // }

  return (
    <div>
      <StockChart {...config_stock}
      chartRef={(plot) => {
        // console.log('polt', plot)
        PlotMaps.stock = plot;
        plot.on('plot:mousemove', (evt) => {
          setTooltipPosition(evt, plot);
        });
        // plot.on('slider:mouseup', (evt) => {
        //   onSliderDrag(evt, plot);
        // });
      }}
      />
      <ColumnChart
        {...config_amt}
        chartRef={(plot) => {
          PlotMaps.column = plot;
          plot.on('plot:mousemove', (evt) => {
            setTooltipPosition(evt, plot);
          });
          // plot.on('slider:mouseup', (evt) => {
          //   onSliderDrag(evt, plot);
          // });
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