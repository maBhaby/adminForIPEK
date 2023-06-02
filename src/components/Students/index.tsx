import { FC, MouseEvent } from 'react'
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
  TableContainer,
  Button
} from '@chakra-ui/react'

import DropDown from '@/views/DropDown'

const Students: FC = () => {
  const { data, isLoading, mutate } = useSWR(
    'api/studentList',
    studentApiService.getStudentList
  )
  const students = data?.students
  const navigate = useNavigate()

  const redirectToStudentEdit = (id: number | undefined): void => {
    if (id) {
      navigate(`/student/${id}?id=${id}`, { state: { id } })
    }
  }
  const redirectToStudentCreate = (): void => {
    navigate('/student/create')
  }

  const deletStudent = async (e: MouseEvent<HTMLButtonElement>): Promise<void> => {
    e.stopPropagation()
    await studentApiService.deletStudent(+e.target.value)
    mutate(studentApiService.getStudentList)
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
            <Th w='50px'>
              <Button onClick={redirectToStudentCreate}>+</Button>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {students?.map(({ id, fist_name, last_name }, i) => (
            <Tr
              key={id}
              onClick={() => redirectToStudentEdit(id)}
              cursor='pointer'
            >
              <Td>
                {fist_name} {last_name}
              </Td>
              <Td p='10px' textAlign='center'>
                <DropDown.Body title='+'>
                  <DropDown.MenuList value={id} onClick={deletStudent}>удалить</DropDown.MenuList>
                </DropDown.Body>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default Students
