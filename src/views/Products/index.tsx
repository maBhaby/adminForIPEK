import { FC } from 'react'
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
import { IProduct } from '@/api/services/Product/interface'

interface IProductsVew {
  products: IProduct[] | undefined
}

const Products: FC<IProductsVew> = ({ products }) => {
  console.log(products)
  return (
    <Box p='30px' borderRadius='15px' boxShadow='xl'>
      <Text pb='20px' fontSize='xl'>Authors Table</Text>
      <Table variant='simple'>
        <TableCaption>Its preview. Please click on row and check product data</TableCaption>
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
          {products?.map(({ title, status, prices, collection }, i) => {
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
                <Td textAlign='end'><Button>asd</Button></Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </Box>
  )
}

export default Products
