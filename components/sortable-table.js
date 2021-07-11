import React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import EnhancedTable from './hkexTable/EnhancedTable'
import makeData from '../utils/data/makeData'

const SortableTable = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Contract Month',
        accessor: 'contractMonth',
      },
      {
        Header: '*Open Price',
        accessor: 'aOpenPrice',
      },
      {
        Header: '*Daily High',
        accessor: 'aDailyHigh',
      },
      {
        Header: '*Daily Low',
        accessor: 'aDailyLow',
      },
      {
        Header: '*Close Price',
        accessor: 'aClosePrice',
      },
      {
        Header: 'Volume',
        accessor: 'aVolume',
      },
      {
        Header: 'dOpen Price',
        accessor: 'dOpenPrice',
      },
      {
        Header: 'dDaily High',
        accessor: 'dDailyHigh',
      },
      {
        Header: 'dDaily Low',
        accessor: 'dDailyLow',
      },
      {
        Header: 'Volume',
        accessor: 'dVolume',
      },
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
        accessor: 'cContractHigh',
      },
      {
        Header: '*Contract Low',
        accessor: 'cContractLow',
      },
      {
        Header: 'Volume',
        accessor: 'cVolume',
      },
      {
        Header: 'Open Interest',
        accessor: 'cOpenInterest',
      },
      {
        Header: 'Chg in OI',
        accessor: 'cChgInOI',
      },
      
    ],
    []
  )

  const [data, setData] = React.useState(React.useMemo(() => makeData(500), []))
  const [skipPageReset, setSkipPageReset] = React.useState(false)

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
console.log(data)
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
