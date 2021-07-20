import db from '../../../utils/firebase/firestore';



export default async (req, res) => {
  console.log('req', req.query.date)
  if(!req.query || !req.query.date){
    res.status(200).json({ result: '' })
  }
  if (req.method === 'POST') {
    // Process a POST request use body
    console.log('post method called')
    console.log(req.body)
  } else {
    // Handle any other HTTP method
    // res.status(200).json({ result: req.query })
    try {
      // get use query
      const entries = await db.collection('hkex_trading_date').doc(`${req.query.date}`);
      const doc = await entries.get();
      if (!doc.exists) {
        console.log('No such document!');
      } else {
        // res.status(200).json({ [doc.id]:doc.data() })
        res.status(200).json(doc.data())
      }
    } catch (e) {
      res.status(400).end();
    }
  }


  
}