import SortableTable from '../../components/sortable-table'
import Head from 'next/head'
import { getSession } from 'next-auth/client'
import { signIn, signOut, useSession } from 'next-auth/client'
import db from '../../utils/firebase/firestore'
import TabPanel from '../../components/HsifTabPanel'



// https://blog.jarrodwatts.com/the-ultimate-guide-to-firebase-with-nextjs
function hsif({hsif}) {
  const [ session, loading ] = useSession()

  console.log('session',session)
  // console.log('posts',posts)
  
  if (typeof window !== 'undefined' && loading) return null

  return (

<> 
    {!session && <>
      Not signed in <br/>
      <button onClick={() => signIn()}>Sign in</button>
    </>}
    {session && <>      
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>   
      <div className="sortabletable_container">   
        <TabPanel hsif={hsif} />
        {/* <SortableTable  hsif={hsif} />       */}
      </div>
    </>}
    </>
  )
}

export async function  getServerSideProps(context){
  let hsif = []
  
    // await the promise
    const querySnapshot = await db
      .collection('hsif')
      .get();
      https://stackoverflow.com/questions/66064397/nextjs-how-to-correctly-use-getstaticprops-for-firebase
    // "then" part after the await
    querySnapshot.forEach(function (doc) {
      const tm = Object.values(doc.data())
      // console.log('sss', tm.length) 
      // console.log('docid', doc.id)
      const docid = doc.id
      hsif.push({
        [docid]  : JSON.parse(JSON.stringify(tm))
      })
      //JSON.parse(JSON.stringify(doc.data()))
    })
    // console.log('fetchposts', hsif)
  return {
      props: {
        hsif
      }
  }
}





export default hsif