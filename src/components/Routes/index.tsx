import { FC } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ROUTER_PATHS } from '@/utils/const'
import Statistics from '../Statistics'
import { Main, ErrorPage, EditProduct } from '@/pages'
import Layouts from '@/layouts'
import Auth from '@/components/Auth'
import Products from '../Products'

const Routes: FC = () => {
  const router = createBrowserRouter([
    {
      path: ROUTER_PATHS.MAIN,
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: (<Statistics />)
        },
        {
          path: ROUTER_PATHS.PRODUCTS,
          element: (<Products />)
        },
        {
          path: ROUTER_PATHS.PRODUCT_EDIT,
          element: (<EditProduct />)
        },
        {
          path: ROUTER_PATHS.CONTROL,
          element: (<div>s</div>)
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
