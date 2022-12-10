import React, { FC } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ROUTER_PATH } from '../../utils/const'
import { Main, ErrorPage } from '@/pages'

const Routes: FC = () => {
  const router = createBrowserRouter([
    {
      path: ROUTER_PATH.MAIN,
      element: <Main />,
      errorElement: <ErrorPage />
    }
  ])

  return <RouterProvider router={router} />
}

export default Routes
