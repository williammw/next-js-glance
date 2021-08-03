import db from '../../../utils/firebase/firestore';

export default async (req, res) => {
<<<<<<< HEAD
  console.log('req', req.query.cm)
=======
  console.log('req', req.query.chartd)
  console.log('req', req.query.min)
  console.log('req', req.query.max)
>>>>>>> refs/remotes/origin/master
  // if(!req.query || !req.query.date ){
  //   res.status(200).json({ result: '' })
  // }



/*
// Adding the remove to the Array.prototype
Object.defineProperty(Array.prototype, "remove", {
    value: function(value) {
      for(let key in this){
        if(this[key] === value){
          this.splice(key,1);
        }
      }
      return this;
    } 
});

  */ 
  
  try {
    const entries = await db.collection('hsif').get();
    const entriesData = entries.docs.map(entry => (
      // id: entry.id,
      entry.data()
    ))
    const parentKey = Object.keys(entriesData)
    const keyList = entries.docs.map( entry => (
      Object.keys(entry.data())
    ))


    // let ans = entriesData.filter(entry => entry['JUL-21'].date == '210601' );
    // console.log(ans)
    // return (keyList[idx].filter( itm => (
    //   item[itm].date == '210601'
    // )))
    //console.log(keyList.length)
    //Object.keys(entriesData)
    //console.log(Object.keys(entriesData[0]))
<<<<<<< HEAD
    console.log('1',entriesData.length)
    console.log('2',Object.values(entriesData[0]))
//  &&  parseInt(flatobj.date) >= 210701 &&  parseInt(flatobj.date) <= 210731
    const d = entriesData.map(entry => Object.values(entry)).flat().filter(
      flatobj => (flatobj.ContractMonth === req.query.cm)
=======
    // console.log('1',entriesData.length)
    // console.log('2',Object.values(entriesData[0]))
    console.log('req',req.query.chartd)
    let cMonth = req.query.chartd || "JUL-21"
    let minNum = req.query.min || 210701
    let maxNum = req.query.max  || 210731
    const d = entriesData.map(entry => Object.values(entry)).flat().filter(
      flatobj => (flatobj.ContractMonth === cMonth &&  parseInt(flatobj.date) >= minNum &&  parseInt(flatobj.date) <= maxNum)
>>>>>>> refs/remotes/origin/master
    )
    
    res.status(200).json(d);
  } catch (e) {
    res.status(400).end();
  }
}
// [
// {
//   date: 210601,
//   openInterest: 122311,
//   contractMonth:'JUL-21'

// }
// ]

// [
// {
//   "year": "1850",
//   "value": 0,
//   "category": "Liquid fuel"
// },
// {
//   "year": "1850",
//   "value": 54,
//   "category": "Solid fuel"
// },
// {
//   "year": "1850",
//   "value": 0,
//   "category": "Gas fuel"
// },
// {
//   "year": "1850",
//   "value": 0,
//   "category": "Cement production"
// },
// {
//   "year": "1850",
//   "value": 0,
//   "category": "Gas flarinl"
// },
// {
//   "year": "1851",
//   "value": 0,
//   "category": "Liquid fuel"
// },
// {
//   "year": "1851",
//   "value": 54,
//   "category": "Solid fuel"
// },
// {
//   "year": "1851",
//   "value": 0,
//   "category": "Gas fuel"
// },
// {
//   "year": "1851",
//   "value": 0,
//   "category": "Cement production"
// },
// {
//   "year": "1851",
//   "value": 0,
//   "category": "Gas flarinl"
// },
// {
//   "year": "1852",
//   "value": 0,
//   "category": "Liquid fuel"
// },
// {
//   "year": "1852",
//   "value": 57,
//   "category": "Solid fuel"
// },
// {
//   "year": "1852",
//   "value": 0,
//   "category": "Gas fuel"
// },
// {
//   "year": "1852",
//   "value": 0,
//   "category": "Cement production"
// },
// {
//   "year": "1852",
//   "value": 0,
//   "category": "Gas flarinl"
// },
// {
//   "year": "1853",
//   "value": 0,
//   "category": "Liquid fuel"
// },
// {
//   "year": "1853",
//   "value": 59,
//   "category": "Solid fuel"
// },
// {
//   "year": "1853",
//   "value": 0,
//   "category": "Gas fuel"
// },
// {
//   "year": "1853",
//   "value": 0,
//   "category": "Cement production"
// },
// {
//   "year": "1853",
//   "value": 0,
//   "category": "Gas flarinl"
// },
// {
//   "year": "1854",
//   "value": 0,
//   "category": "Liquid fuel"
// },
// {
//   "year": "1854",
//   "value": 69,
//   "category": "Solid fuel"
// },
// {
//   "year": "1854",
//   "value": 0,
//   "category": "Gas fuel"
// },
// {
//   "year": "1854",
//   "value": 0,
//   "category": "Cement production"
// },
// {
//   "year": "1854",
//   "value": 0,
//   "category": "Gas flarinl"
// },
// {
//   "year": "1855",
//   "value": 0,
//   "category": "Liquid fuel"
// },
// {
//   "year": "1855",
//   "value": 71,
//   "category": "Solid fuel"
// },
// {
//   "year": "1855",
//   "value": 0,
//   "category": "Gas fuel"
// },
// {
//   "year": "1855",
//   "value": 0,
//   "category": "Cement production"
// },
// {
//   "year": "1855",
//   "value": 0,
//   "category": "Gas flarinl"
// },
// {
//   "year": "1856",
//   "value": 0,
//   "category": "Liquid fuel"
// },
// {
//   "year": "1856",
//   "value": 76,
//   "category": "Solid fuel"
// },
// {
//   "year": "1856",
//   "value": 0,
//   "category": "Gas fuel"
// },
// {
//   "year": "1856",
//   "value": 0,
//   "category": "Cement production"
// },
// {
//   "year": "1856",
//   "value": 0,
//   "category": "Gas flarinl"
// },
// {
//   "year": "1857",
//   "value": 0,
//   "category": "Liquid fuel"
// },
// {
//   "year": "1857",
//   "value": 77,
//   "category": "Solid fuel"
// },
// {
//   "year": "1857",
//   "value": 0,
//   "category": "Gas fuel"
// },
// {
//   "year": "1857",
//   "value": 0,
//   "category": "Cement production"
// },
// {
//   "year": "1857",
//   "value": 0,
//   "category": "Gas flarinl"
// },
// {
//   "year": "1858",
//   "value": 0,
//   "category": "Liquid fuel"
// },
// {
//   "year": "1858",
//   "value": 78,
//   "category": "Solid fuel"
// }]