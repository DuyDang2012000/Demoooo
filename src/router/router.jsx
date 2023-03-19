import { Navigate } from "react-router-dom";
import AuthLayout from "../pages/Auth/Auth";
import AuthGuard from "../pages/Auth/AuthGua";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import Login from "../pages/Login";
import MyPage from "../pages/Mypage";
import PageOne from "../pages/PageOne";

const routesConfig = [
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/page",
        element: <PageOne />,
      },
      {
        path: "/myPage",
        element: <MyPage />,
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
];

export default routesConfig;
