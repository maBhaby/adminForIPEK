import { FC } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ROUTER_PATHS } from '@/utils/const'
import { Main, ErrorPage } from '@/pages'
import Layouts from '@/layouts'
import Auth from '@/components/Auth'

const Routes: FC = () => {
  const router = createBrowserRouter([
    {
      path: ROUTER_PATHS.MAIN,
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [{
        path: ROUTER_PATHS.DASHBOARD,
        element: (<div>swag</div>)
      }]
    },
    {
      path: ROUTER_PATHS.AUTH,
      element: (
        <Layouts.Login>
          <Auth />
        </Layouts.Login>
      )
    }
  ])

  return <RouterProvider router={router} />
}

export default Routes
