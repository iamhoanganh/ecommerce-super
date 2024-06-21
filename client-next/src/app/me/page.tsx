import React from 'react'
import Profile from './profile'


export default async function MePage() {
   
  return (
    <>
    <h2>MePage</h2>
    <h3>
        {/* {result.payload?.rs?.email} */}
        <Profile />
    </h3>
    </>
  )
}
