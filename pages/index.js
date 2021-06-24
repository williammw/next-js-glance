import Head from 'next/head'
import Results from '../components/Results'
import utilStyles from '../styles/utils.module.css'
// import { getSortedPostsData } from '../lib/posts'
import requests from '../utils/requests'


// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }



 function Home({results}) {

  //  console.log(results)

  
  return (
      <>
        <Head>
          <title>title</title>
        </Head>
        <Results results={results}/>
    

        

      </> 
  )
}

export async function getServerSideProps(context){
  const genre = context.query.genre;
  const request = await fetch(`https://api.themoviedb.org/3${
    requests[genre]?.url || requests.fetchTrending.url
  }`
  ).then((res) => res.json())

  return { 
    props: { 
      results : request.results,
    },
  }
}

export default Home