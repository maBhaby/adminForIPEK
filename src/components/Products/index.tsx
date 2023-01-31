import { FC } from 'react'
import useSWR from 'swr'
import ProductApiService from '@/api/services/Product'
import Loader from '@/views/Loader'
import ProductsView from '@/views/Products'

const Products: FC = () => {
  const { data, error, isLoading } = useSWR('api/products', ProductApiService.getProducts)

  console.log(error, isLoading)

  return (isLoading ? <Loader /> : <ProductsView products={data?.data.data} />)
}

export default Products
