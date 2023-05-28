import { FC } from 'react'
import useSWR from 'swr'
import { useNavigate } from 'react-router-dom'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button
} from '@chakra-ui/react'
import { groupsApiService } from '@/api/services/groups'

const Group: FC = () => {
  const { data } = useSWR('getGroupList', groupsApiService.getGroupList)
  const navigate = useNavigate()
  
  const redirectToStudentEdit = (id: number): void => {
    console.log('id', id)
    navigate(`/group/${id}?id=${id}`)
  }
  return (
    <TableContainer borderRadius='10px'>
      <Table bg='whiteAlpha.900' variant='simple'>
        <Thead>
          <Tr>
            <Th>Группы</Th>
            <Th w='50px'><Button>+</Button></Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.groups?.map((el, i) => (
            <Tr onClick={() => {redirectToStudentEdit(el.id)}} key={i}  cursor='pointer'>
              <Td>{el.number}:Какой то студент</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default Group
