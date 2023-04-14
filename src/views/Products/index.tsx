import { FC, useMemo } from 'react'
import {
  Flex,
  Box,
  Text,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Button
} from '@chakra-ui/react'
import StatisticCard from '../StatisticCard'
import { PRODUCT_STATUS, BASIC_COLOR } from '@/utils/const'
import { IProduct } from '@/api/services/Product/interface'

interface IProductsVew {
  products: IProduct[] | undefined
  redirectToEditPage: (id: number) => void
}

const Products: FC<IProductsVew> = ({ products, redirectToEditPage }) => {
  const activeStatus = useMemo(() => products?.filter(({ status }) => status === PRODUCT_STATUS.ACTIVE).length, [products])
  const soldOutStatus = useMemo(() => products?.filter(({ status }) => status === PRODUCT_STATUS.SOLD).length, [products])
  const comingStatus = useMemo(() => products?.filter(({ status }) => status === PRODUCT_STATUS.COMING).length, [products])
  return (
    <>
      <Flex gap='40px' alignItems='center' justifyContent='space-between' mb='40px'>
        <StatisticCard value={products?.length} label='Total Products' />
        <StatisticCard value={activeStatus} label='In active' />
        <StatisticCard value={soldOutStatus} label='In soldOut' />
        <StatisticCard value={comingStatus} label='In comingSoon' />
      </Flex>
      <Box bg={BASIC_COLOR.WHITE} p='30px' borderRadius='15px' boxShadow='xl'>
        <Text pb='20px' fontSize='xl'>Authors Table</Text>
        <Table variant='simple'>
          <TableCaption>Its preview. Please click on button edit and check product data</TableCaption>
          <Thead>
            <Tr>
              <Th>Название </Th>
              <Th>Статус</Th>
              <Th>Цена (руб)</Th>
              <Th>Колекция</Th>
              <Th isNumeric>Изменить</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products?.map(({ id, title, status, prices, collection }, i) => {
              return (
                <Tr key={i}>
                  <Td>
                    <Flex>{title}</Flex>
                  </Td>
                  <Td>
                    <Text color={status === 'active' ? 'green.500' : 'red.500'}>{status}</Text>
                  </Td>
                  <Td>{prices.at(1)?.price}</Td>
                  <Td>{collection.title}</Td>
                  <Td textAlign='end'><Button onClick={() => redirectToEditPage(id)}>edit</Button></Td>
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      </Box>
    </>
  )
}

export default Products
