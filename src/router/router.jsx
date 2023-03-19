import { Navigate } from 'react-router-dom'
import AuthLayout from '../pages/auth/Auth'
import AuthGuard from '../pages/auth/AuthGua'
import Challenge from '../pages/challenge'
import Question from '../pages/question'
import Layout from '../pages/layout'
import Login from '../pages/login'
import MyPage from '../pages/record'
import Home from '../pages/home'
import Healthy from '../pages/healthy'

const routesConfig = [
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MyPage />,
      },
      {
        path: '/challenge',
        element: <Challenge />,
      },
      {
        path: '/record',
        element: <Home />,
      },
      {
        path: '/question',
        element: <Question />,
      },
      {
        path: '/healthy',
        element: <Healthy />,
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
