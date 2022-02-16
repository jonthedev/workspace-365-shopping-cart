import React from 'react'
import Error from '../Components/UI/Error'
import Loading from '../Components/UI/Loading'
import { useUserContext } from '../context/user_context'

export default function HomePage() {
  const { user, loading, error } = useUserContext()
  if (error) return
  ;<Error message='Problem loading user...please refresh the page' />

  if (loading) return <Loading />

  return (
    <>
      <h2>Hello,{user?.login}</h2>
      <p>Have a nice day</p>
    </>
  )
}
