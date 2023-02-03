import { FC } from 'react'
import ProductView from '@/views/Product'
import { useFormik } from 'formik'
import ProductApiService from '@/api/services/Product'
import useSWR from 'swr'
import Loader from '@/views/Loader'
import { useLocation } from 'react-router-dom'

const Product: FC = () => {
  const { state } = useLocation()
  const id: number = state?.id

  const { data, error, isLoading } = useSWR(`api/v2/product/${id}/`, ProductApiService.getProduct)

  const formikTools = useFormik({
    initialValues: { ...data?.data },
    enableReinitialize: true,
    onSubmit: (value): void => { console.log(value) }
  })

  console.log(error)
  if (isLoading) {
    return <Loader />
  }

  return (
    <ProductView formikTools={formikTools} />
  )
}

export default Product
