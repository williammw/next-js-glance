import Head from 'next/head'
import Results from '../components/Results'
// import utilStyles from '../styles/utils.module.css'
// import { getSortedPostsData } from '../lib/posts'
import requests from '../utils/requests'
import { getSession } from 'next-auth/client'
// import Layout from '../components/Layout'
import { signIn, signOut, useSession } from 'next-auth/client'
import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
// import dynamic from 'next/dynamic'
import TopNav from '../components/TopNav';
import FinancialChart from '../components/FinancialChart';
import GlobalSearchBar from '../components/GlobalSearchBar';

 function Home({results}) {
  const [ session, loading ] = useSession()
  if (typeof window !== 'undefined' && loading) return null


  return (
    // 
    <>
    {/* <TopNav/> */}
    <Container maxWidth="md">
    <Box my={8}>
      <FinancialChart />
      {/* <Typography variant="h4" component="h1" gutterBottom>
        Next.js example
      </Typography> */}
      <Container maxWidth="xs">
      <GlobalSearchBar />
      </Container>
      <Link href="/about" color="secondary">
        Go to the about page
      </Link>
      <ProTip />
      <Copyright />
    </Box>
    
  </Container>
  </>
  )
}
//https://api.themoviedb.org/3/trending/all/day?api_key=4296c14b497b17acadd5928634804c12
export async function getServerSideProps(context){
  const genre = context.query.genre;
  // const session = await getSession(context)
  const request = await fetch(`https://api.themoviedb.org/3${
    requests[genre]?.url || requests.fetchTrending.url
  }`
  ).then((res) => res.json())

  return { 
    props: { 
      results : request.results,
      session: await getSession(context)
    },
  }
}
//https://next-auth.js.org/getting-started/client

export default Home


    // {!session && <>
    // {/* Sign In Page or public content */}
    //   Not signed in <br/>
      
    //   <button onClick={() => signIn()}>Sign in</button>
    // </>}
    // {session && <>
    //   Signed in as {session.user.email} <br/>
    //   <button onClick={() => signOut()}>Sign out</button>
    //   <Head>
    //       <title>title</title>
    //   </Head>
    //   <Results results={results}/></>}