import { Navigate } from 'react-router-dom'
import PageOne from '../pages/challenge'
import Layout from '../pages/Layout/Layout'
import MyPage from '../pages/record'
import Home from '../pages/Home/Home'
import Auth from '../pages/Auth/Auth'
import AuthGua from '../pages/Auth/AuthGua'
import Login from '../pages/Login/Login'

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
    element: <Auth />,
    children: [
      { path: '/auth', element: <Navigate to="login" /> },
      { path: 'login', element: <AuthGua element={<Login />} /> },
    ],
  },
]

export default routesConfig
