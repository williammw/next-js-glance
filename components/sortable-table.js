import React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import EnhancedTable from './hkexTable/EnhancedTable'
import makeData from '../utils/data/makeData'



const SortableTable = ({hsif}) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Contract Month',
        accessor: 'ContractMonth',
      },
      // {
      //   Header: '*Open Price',
      //   accessor: 'nOpenPrice',
      // },
      // {
      //   Header: '*Daily High',
      //   accessor: 'nDailyHigh',
      // },
      // {
      //   Header: '*Daily Low',
      //   accessor: 'nDailyLow',
      // },
      // {
      //   Header: '*Close Price',
      //   accessor: 'nClosePrice',
      // },
      // {
      //   Header: 'Volume',
      //   accessor: 'nVolume',
      // },
      // {
      //   Header: 'dOpen Price',
      //   accessor: 'dOpenPrice',
      // },
      // {
      //   Header: 'dDaily High',
      //   accessor: 'dDailyHigh',
      // },
      // {
      //   Header: 'dDaily Low',
      //   accessor: 'dDailyLow',
      // },
      // {
      //   Header: 'Volume',
      //   accessor: 'dVolume',
      // },
      {
        Header: 'Settlement Price',
        accessor: 'dSettlementPrice',
      },
      {
        Header: 'Chg in Setl. Price',
        accessor: 'dChgInSetlPrice',
      },
      {
        Header: '*Contract High',
        accessor: 'contractHigh',
      },
      {
        Header: '*Contract Low',
        accessor: 'contractLow',
      },
      {
        Header: 'Volume',
        accessor: 'volume',
      },
      {
        Header: 'Open Interest',
        accessor: 'openInterest',
      },
      {
        Header: 'Chg in OI',
        accessor: 'changeInOI',
      },
      
    ],
    []
  )
  // console.log('hsifR ',hsif[0]['hsif210601f'])
  // const [data, setData] = React.useState(React.useMemo(() => makeData(500), []))
  const [data, setData] = React.useState(Object.values(hsif[0]['hsif210601f']))
  const [hsifall, setHsifall] = React.useState([])
  const [skipPageReset, setSkipPageReset] = React.useState(false)
  const hsifDataAll = (hsif) => {
    // console.log('hsif',)
  }
  hsifDataAll(hsif)
  // We need to keep the table from resetting the pageIndex when we
  // Update data. So we can keep track of that flag with a ref.

  // When our cell renderer calls updateMyData, we'll use
  // the rowIndex, columnId and new value to update the
  // original data
  const updateMyData = (rowIndex, columnId, value) => {
    // We also turn on the flag to not reset the page
    setSkipPageReset(true)
    setData(old =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          }
        }
        return row
      })
    )
  }
//  console.log(data)
  return (
    <div>
      <CssBaseline />
      <EnhancedTable
        columns={columns}
        data={data}
        setData={setData}
        updateMyData={updateMyData}
        skipPageReset={skipPageReset}
      />
    </div>
  )
}

export default SortableTable
