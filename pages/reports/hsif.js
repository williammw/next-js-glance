import SortableTable from '../../components/sortable-table'
import Head from 'next/head'
import { getSession } from 'next-auth/client'
import { signIn, signOut, useSession } from 'next-auth/client'
// import db from '../../utils/firebase/firestore'
import TabPanel from '../../components/HsifTabPanel'



// https://blog.jarrodwatts.com/the-ultimate-guide-to-firebase-with-nextjs
function hsif() {
  const [ session, loading ] = useSession()


  // if (typeof window !== 'undefined' && loading) return null

  return (<>
    {session &&  <>
      <TabPanel hsifDate={'210601'} />
      </>
    }
    </>

  )
}

export async function  getServerSideProps(context){
  /*
  
  let hsif = []
  
    // await the promise
    // https://stackoverflow.com/questions/66064397/nextjs-how-to-correctly-use-getstaticprops-for-firebase
    // "then" part after the await
    const querySnapshot = await db
      .collection('hsif')
      .get();
    querySnapshot.forEach(function (doc) {
      const tm = Object.values(doc.data())
      const docid = doc.id
      hsif.push({
        [docid]  : JSON.parse(JSON.stringify(tm))
      })
    })
    */
  return {
      props: {
        // hsif,
        session: await getSession(context)
      }
  }
}
export default hsif
