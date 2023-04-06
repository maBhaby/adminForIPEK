import { FC, useState } from 'react'
import ProductView from '@/views/Product'
import { Formik } from 'formik'
import ProductApiService from '@/api/services/Product'
import useSWR from 'swr'
import Loader from '@/views/Loader'
import { useLocation } from 'react-router-dom'

const defValues = {
  title: '',
  status: 'sd',
  slug: '',
  collection: {
    title: ''
  },
  category: {
    slug: '',
    title: ''
  },
  size: [
    {
      title: 'XL',
      count: 1
    },
    {
      title: 'L',
      count: 1
    },
    {
      title: 'M',
      count: 1
    },
    {
      title: 'S',
      count: 1
    }
  ]
}

const Product: FC = () => {
  const [initialValues, setInitialValues] = useState(defValues)
  const { state } = useLocation()
  const id: number = state?.id

  const { data, isLoading } = useSWR(`api/v2/product/${id}/`, ProductApiService.getProduct)
  console.log(setInitialValues, data) // убрать

  if (isLoading) {
    return <Loader />
  }

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      onSubmit={(value): void => { console.log(value) }}
    >
      {
        (props) => (
          <ProductView formikTools={props} />
        )
      }
    </Formik>
  )
}

export default Product
