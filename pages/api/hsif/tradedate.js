import db from '../../../utils/firebase/firestore';

export default async (req, res) => {
  console.log('req', req.query.id)
  // res.status(200).json({ result: req.query })
  try {
    const entries = await db.collection('hsif').doc(`hsif${req.query.id}f`);
    const doc = await entries.get();
    if (!doc.exists) {
      console.log('No such document!');
    } else {
      res.status(200).json({ [doc.id]:doc.data() })
    }
  } catch (e) {
    res.status(400).end();
  }
}