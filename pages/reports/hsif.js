import SortableTable from '../../components/sortable-table'
import Head from 'next/head'
import { getSession } from 'next-auth/client'
import { signIn, signOut, useSession } from 'next-auth/client'
// import db from '../../utils/firebase/firestore'
import TabPanel from '../../components/HsifTabPanel'
import { useEffect } from 'react'
import { useState } from 'react'



// https://blog.jarrodwatts.com/the-ultimate-guide-to-firebase-with-nextjs
function hsif() {
  const [ session, loading ] = useSession()
  const [monthdate, setMonthdate] = useState([])
  const [tabDate, setTabDate] = useState("")

  // if (typeof window !== 'undefined' && loading) return null
  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    const monthArr = ["on9","on9","on9","on9","on9","D2106HK","D2107HK","D2108HK","D2109HK","D2110HK","D2111HK","D2112HK",]
    setTabDate(monthArr[new Date().getMonth()])
    fetch(`http://localhost:3000/api/hsif/calendar?date=${monthArr[new Date().getMonth()]}`)
      .then((response) => response.json())
      .then((json) => setMonthdate(json.dateNum))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  return (<>
   {/* {console.log('tabDate',tabDate)} */}
{/* {  console.log('monthdate', monthdate.length)} */}
{/* a chart goes here */}
        <h1>Chart show dOpen, dHigh, dLow, dSettlement, openInterest, Volume </h1>
    {session  &&  monthdate.length > 0 && <>
      <TabPanel hsifDate={tabDate} monthdate={monthdate} />
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
