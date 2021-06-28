import Table from '../../components/Table'
import Head from 'next/head'
import { getSession } from 'next-auth/client'
import { signIn, signOut, useSession } from 'next-auth/client'
import Layout from '../../components/Layout'
function hsif() {
  const [ session, loading ] = useSession()
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
      
      <Table />
      
    </>}
    </>
  )
}

export default hsif
