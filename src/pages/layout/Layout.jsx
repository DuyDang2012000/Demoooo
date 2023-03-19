import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'

const Layout = () => {
  const isAuth = localStorage.getItem('token') ? true : false

  if (!isAuth) {
    return <Navigate to="/auth" />
  }

  return (
    <>
      <Nav />
      <div className="min-h-[calc(100vh-64px-128px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Layout
