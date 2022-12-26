import { FC } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ROUTER_PATHS } from '@/utils/const'
import { Main, ErrorPage } from '@/pages'
import Layouts from '@/layouts'
import Auth from '@/components/Auth'
import Products from '../Products'
// import Statistics from '../Statistics'

const Routes: FC = () => {
  const router = createBrowserRouter([
    {
      path: ROUTER_PATHS.MAIN,
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: (<Products />)
        },
        {
          path: ROUTER_PATHS.USERS,
          element: (<div>users</div>)
        },
        {
          path: ROUTER_PATHS.CONTROL,
          element: (<div>contols</div>)
        }
      ]
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
