import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import db from '../../utils/firebase/firestore'


export default function hsif({results}) {
  console.log(results)
  return (
    <h1>
      {results.map(
        (result, idx)=>(
            <div key={idx}>
              <div>{result.capital}</div>
              <div>{result.country}</div>
              <div>{result.name}</div>
              <div>{result.population}</div>
              <hr/>
            </div>
          )
        )
      }
    </h1>
  )
}

export async function getServerSideProps(context){
  const snp = []
  const snapshot = await db.collection('cities')
  .get().then((snapshot) => {
    snapshot.forEach((obj) => {       
        snp.push( obj.data() )
        // console.log(obj.data())
      })
  })
  

  return { 
    props: { 
      results : snp,
    },
  }
}

