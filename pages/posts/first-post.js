import Link from 'next/link'
import Head from 'next/head'

export default function FirstPost() {
  return (
    <>
    <Head>
      <title>First Page</title>
    </Head>
      <h1>First Post</h1>
    <h2>
      <Link href="/">
        <a className="foo" target="_blank" rel="noopener noreferrer">
          Back Home
        </a>
      </Link>
    </h2>
    </>
  )
}
