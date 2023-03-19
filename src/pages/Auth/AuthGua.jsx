import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'

const AuthGua = ({ element }) => {
  const isAuth = true

  useEffect(() => {
    //   const accessToken = webStorage.getToken(); lấy token
    const accessToken = false
    if (accessToken) {
      console.log('Lấy thông tin')
    }
  }, [])

  if (isAuth) {
    return <Navigate to="/" />
  }

  return element
}

export default AuthGua
