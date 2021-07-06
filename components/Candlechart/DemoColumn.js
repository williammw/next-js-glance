import React, { useState, useEffect } from 'react';
import { ColumnChart } from '@opd/g2plot-react'

function DemoColumn(){
  var data = [
    {
      type: '1-3秒',
      value: 0.16,
    },
    {
      type: '4-10秒',
      value: 0.125,
    },
    {
      type: '11-30秒',
      value: 0.24,
    },
    {
      type: '31-60秒',
      value: 0.19,
    },
    {
      type: '1-3分',
      value: 0.22,
    },
    {
      type: '3-10分',
      value: 0.05,
    },
    {
      type: '10-30分',
      value: 0.01,
    },
    {
      type: '30+分',
      value: 0.015,
    },
  ];
  var paletteSemanticRed = '#F4664A';
  var brandColor = '#5B8FF9';
  var config = {
    data: data,
    xField: 'type',
    yField: 'value',
    seriesField: '',
    color: function color(_ref) {
      var type = _ref.type;
      if (type === '10-30分' || type === '30+分') {
        return paletteSemanticRed;
      }
      return brandColor;
    },
    label: {
      content: function content(originData) {
        var val = parseFloat(originData.value);
        if (val < 0.05) {
          return (val * 100).toFixed(1) + '%';
        }
      },
      offset: 10,
    },
    legend: false,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    slider: {
      start: 0.1,
      end: 0.2,
    },
  };
  return <ColumnChart {...config} />;
};

export default DemoColumn;