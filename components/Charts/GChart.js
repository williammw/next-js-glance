import { LineChart } from '@opd/g2plot-react'
import {Stock} from '@opd/g2plot-react'

export default function GChart(){
//https://github.com/open-data-plan/g2plot-react
//https://g2plot.antv.vision/en/examples/line/basic#line
// https://charts.ant.design/demos/global
const config = {
  height: 400,
  xField: 'year',
  yField: 'value',
  smooth: true,
  meta: {
    value: {
      max: 15,
    },
  },
  data: [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 11 },
    
  ],
}
return (
  <LineChart {...config} />
)
}

