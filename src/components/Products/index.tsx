import { FC } from 'react'
import useSWR from 'swr'
import ProductApiService from '@/api/services/Product'
import Loader from '@/views/Loader'
import { ROUTER_PATHS } from '@/utils/const'
import { useNavigate } from 'react-router-dom'
import ProductsView from '@/views/Products'

const Products: FC = () => {
  const { data, error, isLoading } = useSWR('api/products', ProductApiService.getProducts)
  const redirect = useNavigate()

  const redirectToEditPage = (id: number): void => {
    redirect(`${ROUTER_PATHS.PRODUCTS}${id}`, { state: { id } })
  }

  console.log(error, isLoading)

  return (isLoading ? <Loader /> : <ProductsView redirectToEditPage={redirectToEditPage} products={data?.data.data} />)
}

export default Products
