import React from 'react'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// https://codesandbox.io/s/8m6n8?file=/src/Chart.jsx
// https://github.com/recharts/recharts

import DemoMultiLine from './Candlechart/DemoMultiLine'
import DemoStock from './Candlechart/DemoStock'
// import IndexLineChart from './Charts/IndexLineChart'

const defaultProps = {
  bgcolor: 'background.paper',
  m: 1,
  style: { width: '100%', height: '5rem' },
  borderColor: 'text.primary',
};


function FinancialChart() {
  return (
    <div className="financial-chart-container">
      {/* <Typography variant="x" component="x" gutterBottom> */}
      {/* <DemoLine />  */}
         {/* <DemoColumn/> */}
          {/* <DemoStock />
          <DemoLine />           */}
          {/* <DemoStock/> */}
          <DemoMultiLine/>
          
      {/* </Typography> */}
  
    </div>
  )
}

export default FinancialChart
