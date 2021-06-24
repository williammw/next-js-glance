import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Card from '../../components/Card'
// import Layout from '../../components/Layout'
export default function Bobo() {
  return (
    <>
      <Head>
        <title>First Page</title>
      </Head>
        <h1>First Post</h1>
      <h2>
       

<Image src="https://www.legco.gov.hk/promotion/latest/202161818293eng.jpg" width={200} height={100} />
      </h2>
      <Card />
    </>
  )
}


