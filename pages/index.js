import Head from 'next/head'
import Results from '../components/Results'
import requests from '../utils/requests'
import { getSession } from 'next-auth/client'
import { signIn, signOut, useSession } from 'next-auth/client'
import StorageOutlinedIcon from '@material-ui/icons/StorageOutlined';



function Home({results}) {
  const [ session, loading ] = useSession()
  if (typeof window !== 'undefined' && loading) return null
  // if (!session) { return  (<><AccessDenied/></>)}
  return (
    <>   
        <Head>
            <title>Winning Everyday</title>
        </Head>
    
      {!session && <>
        Not signed in <br/>
        <button onClick={() => signIn()}>Sign in</button>
      </>}
      {session && <>
        Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
        
      <Results results={results}/>
      </>
      }
    </>
  )
}
//https://api.themoviedb.org/3/trending/all/day?api_key=4296c14b497b17acadd5928634804c12
export async function getServerSideProps(context){
  const genre = context.query.genre;
  const session = await getSession(context)
  const request = await fetch(`https://api.themoviedb.org/3${
    requests[genre]?.url || requests.fetchTrending.url
  }`
  ).then((res) => res.json())

  return { 
    props: { 
      results : request.results,
      session,
    },
  }
}

export default Home