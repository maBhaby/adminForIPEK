import { FC } from 'react'
import useSWR from 'swr'
import { useNavigate } from 'react-router-dom'
import { studentApiService } from '@/api/services/student'
import Loader from '@/views/Loader'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer
} from '@chakra-ui/react'

const Students: FC = () => {
  const {
    data,
    isLoading
  } = useSWR('api/studentList', studentApiService.getStudentList)
  const students = data?.students
  const navigate = useNavigate()

  const redirectToStudentEdit = (id: number): void => {
    console.log('id', id)
    navigate(`/student/${id}?id=${id}`, { state: { id } })
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <TableContainer borderRadius='10px'>
      <Table bg='whiteAlpha.900' variant='simple'>
        <Thead>
          <Tr>
            <Th>Студенты</Th>
          </Tr>
        </Thead>
        <Tbody>
          {students?.map(({id, fist_name, last_name}) => (
            <Tr key={id} onClick={() => redirectToStudentEdit(id)} cursor='pointer'>
              <Td>{fist_name} {last_name}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default Students
