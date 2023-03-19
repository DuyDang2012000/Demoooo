import { Navigate } from 'react-router-dom'
import AuthLayout from '../pages/auth/Auth'
import AuthGuard from '../pages/auth/AuthGua'
import PageOne from '../pages/challenge'
import Layout from '../pages/layout'
import Login from '../pages/login'
import MyPage from '../pages/record'
import Home from '../pages/home'

const routesConfig = [
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/challenge',
        element: <PageOne />,
      },
      {
        path: '/record',
        element: <MyPage />,
      },
      {
        path: '/question',
        element: <PageOne />,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { path: '/auth', element: <Navigate to="login" /> },
      { path: 'login', element: <AuthGuard element={<Login />} /> },
    ],
  },
]

export default routesConfig
