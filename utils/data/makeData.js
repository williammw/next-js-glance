import namor from 'namor'

const range = len => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newPerson = () => {
  const statusChance = Math.random()
  return {
    contractMonth: namor.generate({ words: 1, numbers: 0 }),
    aOpenPrice: Math.floor(Math.random() * 30000),
    aDailyHigh: Math.floor(Math.random() * 30000),
    aDailyLow: Math.floor(Math.random() * 30000),
    aClosePrice: Math.floor(Math.random() * 30000),
    aVolume: Math.floor(Math.random() * 10000),
    dOpenPrice: Math.floor(Math.random() * 30000),
    dDailyHigh: Math.floor(Math.random() * 30000),
    dDailyLow: Math.floor(Math.random() * 30000),
    dVolume: Math.floor(Math.random() * 10000),
    dSettlementPrice: Math.floor(Math.random() * 30000),
    dChgInSetlPrice: statusChance>0.66 ? '+' : '-' + Math.floor(Math.random() * 1000),
    cContractHigh: Math.floor(Math.random() * 30000),
    cContractLow: Math.floor(Math.random() * 30000),
    cVolume: Math.floor(Math.random() * 23000),
    cOpenInterest: Math.floor(Math.random() * 30000),
    cChgInOI: statusChance>0.66 ? '+' : '-' + Math.floor(Math.random() * 1000),
    // status:
    //   statusChance > 0.66
    //     ? 'relationship'
    //     : statusChance > 0.33
    //     ? 'complicated'
    //     : 'single',
  }
}

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth]
    return range(len).map(d => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      }
    })
  }

  return makeDataLevel()
}