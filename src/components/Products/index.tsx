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
  Td
} from '@chakra-ui/react'

const mockData = [
  {
    preview: {
      img: 'что то',
      title: 'Шарф пулемет'
    },
    status: 'Comming Soon',
    bought: 4,
    sales: '40%'
  },
  {
    preview: {
      img: 'что то',
      title: 'Шарф пулемет'
    },
    status: 'Active',
    bought: 2,
    sales: '-'
  }
]

const Products: FC = () => {
  return (
    <Box p='30px' borderRadius='15px' boxShadow='xl'>
      <Text pb='20px' fontSize='xl'>Authors Table</Text>
      <Table variant='simple'>
        <TableCaption>Its preview. Please click on row and check product data</TableCaption>
        <Thead>
          <Tr>
            <Th>Preview</Th>
            <Th>Status</Th>
            <Th>Bought</Th>
            <Th isNumeric>Sales</Th>
          </Tr>
        </Thead>
        <Tbody>
          {mockData.map(({ preview, status, bought, sales }, i) => {
            return (
              <Tr key={i}>
                <Td>
                  <Flex>{preview.title}</Flex>
                </Td>
                <Td>
                  <Text>{status}</Text>
                </Td>
                <Td>{bought}</Td>
                <Td isNumeric>{sales}</Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </Box>
  )
}

export default Products
