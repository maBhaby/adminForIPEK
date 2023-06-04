import { FC } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ROUTER_PATHS } from '@/utils/const'

import { Main, ErrorPage, EditProduct, GroupEditPage, Colleague, ColleagueEdit, RegisterPage, SpecialityList } from '@/pages'
import Statistics from '../Statistics'
import Group from '../Group'
import StudentEdit from '../StudentEdit'
import Layouts from '@/layouts'
import Auth from '@/components/Auth'
import Products from '../Products'
import PreparationPlanList from '@/pages/PreparationPlanList'
import PreparationEdit from '@/pages/PreparationEdit'
import SpecialityEdit from '@/pages/SpecialityEdit'

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
          path: ROUTER_PATHS.STUDENT_EDIT,
          element: (<StudentEdit />)
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
          path: ROUTER_PATHS.GROUP,
          element: (<Group />)
        },
        {
          path: ROUTER_PATHS.GROUP_EDIT,
          element: (<GroupEditPage />)
        },
        {
          path: ROUTER_PATHS.COLLEAGUE,
          element: (<Colleague />)
        },
        {
          path: ROUTER_PATHS.COLLEAGUE_EDIT,
          element: (<ColleagueEdit />)
        },
        {
          path: ROUTER_PATHS.PREPARATION_PLAN_LIST,
          element: (<PreparationPlanList />)
        },
        {
          path: ROUTER_PATHS.PREPARATION_PLAN_EDIT,
          element: (<PreparationEdit />)
        },
        {
          path: ROUTER_PATHS.SPECIALITY_LIST,
          element: (<SpecialityList />)
        },
        {
          path: ROUTER_PATHS.SPECIALITY_EDIT,
          element: (<SpecialityEdit />)
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
    },
    {
      path: ROUTER_PATHS.REGISTER,
      element: (<RegisterPage />)
    }
  ])

  return <RouterProvider router={router} />
}

export default Routes
