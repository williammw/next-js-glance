import db from '../../../utils/firebase/firestore';

export default async (req, res) => {
  console.log('req', req.query.entries)
  try {
    const entries = await db.collection('hsif').get();
    const entriesData = entries.docs.map(entry => ({
      id: entry.id,
      ...entry.data()
    }));
    res.status(200).json({ entriesData });
  } catch (e) {
    res.status(400).end();
  }
}