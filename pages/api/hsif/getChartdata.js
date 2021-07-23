import db from '../../../utils/firebase/firestore';

export default async (req, res) => {
  console.log('req', req.query.chartd)
  // if(!req.query || !req.query.date ){
  //   res.status(200).json({ result: '' })
  // }

  
  try {
    const entries = await db.collection('hsif').get();
    const entriesData = entries.docs.map(entry => (
      // id: entry.id,
      entry.data()
    ));
    // const myJSON = JSON.stringify(entriesData);


    res.status(200).json(entriesData);
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