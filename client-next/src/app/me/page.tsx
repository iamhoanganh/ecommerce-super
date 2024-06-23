import React from 'react'
import Profile from './profile'
import {cookies} from "next/headers";
import accountApiRequest from "@/apiRequests/account";


export default async function MePage() {
  const coookieStore = cookies()
  const sessionToken = coookieStore.get('sessionToken')
  const result = await accountApiRequest.me(sessionToken?.value ?? "")

  return (
    <>
    <h2>MePage</h2>
    <h3>
      <div>{result.payload?.rs?.firstname}</div>
        <Profile />
    </h3>
    </>
  )
}
