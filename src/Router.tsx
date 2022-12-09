import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout'
import { SidebarProvider } from './context/SidebarContext'
import RequireAuth from './hoc/RequireAuth'
import DashboardPage from './pages/DashboardPage'
import LoginPage, { loginAction } from './pages/LoginPage'
import ProductsPage from './pages/Products'

export default function Router (): JSX.Element {
  const router = createBrowserRouter([
    {
      path: '/login',
      element: <LoginPage />,
      action: loginAction()
    },
    {
      path: '/',
      element: <RequireAuth><SidebarProvider><Layout /></SidebarProvider></RequireAuth>,
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
