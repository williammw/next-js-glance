  
import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import TopNav from '../components/TopNav';
import { getSession } from 'next-auth/client'
import { signIn, signOut, useSession } from 'next-auth/client'
// https://nextjs.org/blog/forms

 function About({result}) {
  console.log('result', result)
  const [ session, loading ] = useSession()

  const registerUser = async event => {
    event.preventDefault()

    const res = await fetch(
      'http://localhost:3000/api/hsif/tradedate',
      {
        body: JSON.stringify({
          name: event.target.name.value
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    )

    const result = await res.json()
    // result.user => 'Ada Lovelace'
  }

  if (typeof window !== 'undefined' && loading) return null
  return (
    <>
    {/* <TopNav/> */}
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Button variant="contained" color="primary" component={Link} naked href="/">
          Go to the main page
        </Button>

        <ProTip />
        <Copyright />
        <form onSubmit={registerUser}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" autoComplete="name" required />
          <button type="submit">Register</button>
        </form>
      </Box>
    </Container>
    </>
  );
}

export async function getServerSideProps(context){

  const request = await fetch(`http://localhost:3000/api/hsif/222e2e`)
  const result = await request.json()
  console.log(result)

  return { 
    props: { 
      session: await getSession(context),
      result
    },
  }
}



export default About