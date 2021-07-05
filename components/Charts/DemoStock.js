import React, { useState, useEffect } from 'react';
import { StockChart } from '@opd/g2plot-react'

function DemoStock() {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('http://localhost:3000/api/demostock')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    data: data,
    xField: 'trade_date',
    yField: ['open', 'close', 'high', 'low'],
    meta: {
      vol: { alias: '成交量' },
      open: { alias: '开盘价' },
      close: { alias: '收盘价' },
      high: { alias: '最高价' },
      low: { alias: '最低价' },
    },
    slider: {
      start: 0,
      end: 1,
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
  };
  return <StockChart {...config} />;
};

export default DemoStock;