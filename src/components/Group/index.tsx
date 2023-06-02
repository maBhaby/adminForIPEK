import { FC, MouseEvent } from 'react'

import useSWR from 'swr'
import { useNavigate } from 'react-router-dom'

import { groupsApiService } from '@/api/services/groups'

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
import Loader from '@/views/Loader'

const Group: FC = () => {
  const { data, isLoading, mutate } = useSWR('getGroupList', groupsApiService.getGroupList)
  const navigate = useNavigate()

  const redirectToStudentEdit = (id: number): void => {
    console.log('id', id)
    navigate(`/group/${id}?id=${id}`)
  }

  const deleteGroup = async (e: MouseEvent<HTMLButtonElement>): Promise<void> => {
    e.stopPropagation()
    await groupsApiService.deleteGroup(+e.target.value)
    mutate(groupsApiService.getGroupList)
  }

  if (isLoading) return <Loader />

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
            <Tr onClick={() => { redirectToStudentEdit(el.id) }} key={i} cursor='pointer'>
              <Td>{el.number}:Какой то студент</Td>
              <Td p='10px' textAlign='center'>
                <DropDown.Body title='+'>
                  <DropDown.MenuList value={el.id} onClick={deleteGroup}>удалить</DropDown.MenuList>
                </DropDown.Body>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default Group
