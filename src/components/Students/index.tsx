import { FC } from 'react'
import useSWR from 'swr'
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
  console.log(studentApiService.getStudentList())
  const {
    data,
    isLoading
  } = useSWR('api/studentList', studentApiService.getStudentList)
  const students = data?.students

  // const redirectToStudent = (id): void => {

  // }
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
          {students?.map((el, i) => (
            <Tr key={i} cursor='pointer'>
              <Td>{el}: Какой то студент</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default Students
