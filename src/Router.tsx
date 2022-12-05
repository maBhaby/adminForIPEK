import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout'
import { AuthProvider } from './context/AuthContext'
import RequireAuth from './hoc/RequireAuth'
import useAuth from './hooks/useAuth'
import DashboardPage from './pages/DashboardPage'
import LoginPage, { loginAction } from './pages/LoginPage'
import ProductsPage from './pages/Products'

export default function Router (): JSX.Element {
  const auth = useAuth()

  const router = createBrowserRouter([
    {
      path: '/login',
      element: <LoginPage />,
      action: loginAction(auth)
    },
    {
      path: '/',
      element: (
            <RequireAuth>
              <Layout />
            </RequireAuth>
      ),
      children: [
        {
          path: '/',
          element: <DashboardPage />
        },
        {
          path: '/product',
          element: <ProductsPage />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
    // {/* <Flex h="100vh" justifyContent="center" alignItems="center">
    //     <Spinner size="xl" />
    //   </Flex> */}
  )
}
