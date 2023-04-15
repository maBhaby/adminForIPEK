import { FC } from 'react'
import {
  Flex,
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
import { BASIC_COLOR } from '@/utils/const'
import { OrdersI } from '@/interfaces'

const Orders: FC<OrdersI> = ({ data: orders }) => {
  return (
    <Table bg={BASIC_COLOR.WHITE} variant='simple'>
      <TableCaption>
        Its preview. Please click on button edit and check product data
      </TableCaption>
      <Thead>
        <Tr>
          <Th>Заказчик</Th>
          <Th>Ном. заказа</Th>
          <Th>Телефон</Th>
          <Th>Контакт</Th>
          <Th isNumeric>Изменить</Th>
        </Tr>
      </Thead>
      <Tbody>
        {orders?.map(
          (
            { id, firstname, lastname, order_num: orderNum, phone },
            i
          ) => {
            return (
              <Tr key={i}>
                <Td>
                  <Flex>
                    {firstname} {lastname}
                  </Flex>
                </Td>
                <Td>
                  <Text>{orderNum}</Text>
                </Td>
                <Td>{phone}</Td>
                <Td>-</Td>
                <Td textAlign='end'>
                  <Button>show</Button>
                </Td>
              </Tr>
            )
          }
        )}
      </Tbody>
    </Table>
  )
}

export default Orders
