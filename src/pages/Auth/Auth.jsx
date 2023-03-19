import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const Auth = () => {
  return (
    <Suspense fallback={null}>
      <Outlet />
    </Suspense>
  )
}

export default Auth
