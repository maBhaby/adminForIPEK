import { FC } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ROUTER_PATH } from '../../utils/const'
import { Main, ErrorPage } from '@/pages'
import Layouts from '@/layouts'
import Auth from '../Auth'

const Routes: FC = () => {
  const router = createBrowserRouter([
    {
      path: ROUTER_PATH.MAIN,
      element: <Main />,
      errorElement: <ErrorPage />
    },
    {
      path: ROUTER_PATH.AUTH,
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
