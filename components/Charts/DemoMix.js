import React, { useState, useEffect } from 'react';
import { MixChart } from '@opd/g2plot-react';

function DemoMix(){
  const [plot, setPlot] = useState(null);
  var data = [
    {
      area: 'Central',
      value: 0.218,
    },
    {
      area: 'East',
      value: 0.295,
    },
    {
      area: 'South',
      value: 0.171,
    },
    {
      area: 'West',
      value: 0.316,
    },
  ];
  var defaultGrey = '#BFBFBF';
  var config = {
    appendPadding: 8,
    tooltip: { showMarkers: false },
    views: [],
  };

  useEffect(() => {
    if (plot) {
      plot.chart.theme({ defaultColor: '#30BF78' });
      plot.update({
        views: [
          {
            region: {
              start: {
                x: 0,
                y: 0,
              },
              end: {
                x: 1 / 2,
                y: 2 / 5,
              },
            },
            data: data,
            meta: { value: { alias: '销售额(万)' } },
            axes: {
              area: { tickLine: false },
              value: false,
            },
            coordinate: { cfg: { isTransposed: true } },
            geometries: [
              {
                type: 'interval',
                xField: 'area',
                yField: 'value',
                mapping: {
                  color: function color(_ref) {
                    var area = _ref.area;
                    var value = data.find(function (d) {
                      return d.area === area;
                    }).value;
                    return value > 0.3 ? plot.chart.getTheme().defaultColor : defaultGrey;
                  },
                  style: { lineWidth: 1 },
                },
                label: {
                  position: 'left',
                  layout: { type: 'adjust-color' },
                  formatter: function formatter(_ref2) {
                    var value = _ref2.value;
                    return ''.concat((value * 100).toFixed(1), '%');
                  },
                  style: { fill: '#fff' },
                },
              },
            ],
          },
          {
            region: {
              start: {
                x: 1 / 2,
                y: 0,
              },
              end: {
                x: 1,
                y: 2 / 5,
              },
            },
            data: data,
            meta: { value: { alias: '销售额(万)' } },
            axes: {
              area: { tickLine: false },
              value: false,
            },
            coordinate: { cfg: { isTransposed: true } },
            geometries: [
              {
                type: 'interval',
                xField: 'area',
                yField: 'value',
                mapping: {
                  color: function color(_ref3) {
                    var area = _ref3.area;
                    var value = data.find(function (d) {
                      return d.area === area;
                    }).value;
                    return value > 0.3 ? plot.chart.getTheme().defaultColor : defaultGrey;
                  },
                  style: function style(_ref4) {
                    var value = _ref4.value;
                    return {
                      lineWidth: 1,
                      fillOpacity: 0,
                      stroke: value > 0.3 ? plot.chart.getTheme().defaultColor : defaultGrey,
                    };
                  },
                },
                label: {
                  position: 'left',
                  formatter: function formatter(_ref5) {
                    var value = _ref5.value;
                    return ''.concat((value * 100).toFixed(1), '%');
                  },
                },
              },
            ],
          },
          {
            region: {
              start: {
                x: 0,
                y: 1 / 2,
              },
              end: {
                x: 1 / 2,
                y: 1,
              },
            },
            data: data,
            meta: {
              value: {
                alias: '销售额(万)',
                max: 0.5,
                min: 0,
              },
            },
            axes: {
              area: { tickLine: false },
              value: false,
            },
            coordinate: { cfg: { isTransposed: true } },
            geometries: [
              {
                type: 'point',
                xField: 'area',
                yField: 'value',
                mapping: {
                  color: function color(_ref6) {
                    var area = _ref6.area;
                    var value = data.find(function (d) {
                      return d.area === area;
                    }).value;
                    return value > 0.3 ? plot.chart.getTheme().defaultColor : defaultGrey;
                  },
                  style: function style(_ref7) {
                    var value = _ref7.value;
                    return {
                      r: 4,
                      strokeOpacity: 0,
                      fill: value > 0.3 ? plot.chart.getTheme().defaultColor : defaultGrey,
                    };
                  },
                },
                label: {
                  offsetY: -12,
                  offsetX: 8,
                  style: { textAlign: 'right' },
                  position: 'top',
                  formatter: function formatter(_ref8) {
                    var value = _ref8.value;
                    return ''.concat((value * 100).toFixed(1), '%');
                  },
                },
              },
            ],
            annotations: data.map((d, idx) => {
              return {
                type: 'line',
                start: [3 - idx - 0.25, 'min'],
                end: [3 - idx - 0.25, 'max'],
                style: {
                  lineWidth: 2,
                  stroke: '#595959',
                },
              };
            }),
          },
          {
            region: {
              start: {
                x: 1 / 2,
                y: 1 / 2,
              },
              end: {
                x: 1,
                y: 1,
              },
            },
            data: data,
            meta: {
              value: {
                alias: '销售额(万)',
                min: 0,
                max: 1,
              },
            },
            axes: {
              area: {
                label: { style: { fillOpacity: 0 } },
                tickLine: false,
              },
              value: false,
            },
            coordinate: { cfg: { isTransposed: true } },
            label: {
              offsetX: -4,
              style: { fill: '#Fff' },
              formatter: function formatter(_ref9) {
                var area = _ref9.area,
                  value = _ref9.value;
                return ''.concat(area, '\n').concat((value * 100).toFixed(1), '%');
              },
            },
            geometries: [
              {
                type: 'interval',
                xField: 'area',
                yField: 'value',
                label: {
                  offsetX: -4,
                  position: 'left',
                  layout: { type: 'adjust-color' },
                  style: {
                    fill: '#fff',
                    fontSize: 12,
                  },
                  formatter: function formatter(_ref10) {
                    var area = _ref10.area,
                      value = _ref10.value;
                    return ''.concat(area, '\n').concat((value * 100).toFixed(1), '%');
                  },
                },
                mapping: {
                  color: function color(_ref11) {
                    var area = _ref11.area;
                    var value = data.find(function (d) {
                      return d.area === area;
                    }).value;
                    return value > 0.3 ? plot.chart.getTheme().defaultColor : defaultGrey;
                  },
                },
              },
            ],
            annotations: data.map(function (d, idx) {
              return {
                type: 'line',
                start: [3 - idx - 0.25, 'min'],
                end: [3 - idx - 0.25, 'max'],
                style: {
                  lineWidth: 2,
                  stroke: '#595959',
                },
              };
            }),
          },
        ],
      });
    }
  }, [plot]);

  return (
    <MixChart
      {...config}
      onReady={(chart) => {
        setPlot(chart);
      }}
    />
  );
};

export default DemoMix;