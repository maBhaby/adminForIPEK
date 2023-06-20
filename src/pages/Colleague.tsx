import React, { MouseEvent } from 'react'

import useSWR from 'swr'
import { useNavigate } from 'react-router-dom'

import { ColleagueApi } from '@/api/services/colleague'
import DropDown from '@/views/DropDown'

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Image,
  Button
} from '@chakra-ui/react'
import Loader from '@/views/Loader'

import { burger } from '@/assets'

const Colleague = () => {
  const { data, isLoading, mutate } = useSWR(
    'getColleagueList',
    ColleagueApi.getColleagueList
  )
  const colleagueList = data?.colleagues
  const navigate = useNavigate()
  if (isLoading) {
    return <Loader />
  }

  const redirectToCollEdit = (id: number | any): void => {
    navigate(`/colleague/${id}?id=${id}`)
  }
  const redirectToCollCreate = (): void => {
    navigate('/colleague/create')
  }

  const deletColleague = async (e: MouseEvent<HTMLButtonElement>): Promise<void> => {
    e.stopPropagation()
    await ColleagueApi.deleteColleague(+e.target.value)
    mutate(ColleagueApi.getColleagueList)
  }

  return (
    <TableContainer borderRadius='10px'>
      <Table bg='whiteAlpha.900' variant='simple'>
        <Thead>
          <Tr>
            <Th>Преподователи</Th>
            <Th w='50px'>
              <Button onClick={redirectToCollCreate}>+</Button>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {colleagueList?.map(({ id, fist_name, last_name }) => (
            <Tr
              onClick={() => redirectToCollEdit(id)}
              key={id}
              cursor='pointer'
              _hover={{bgColor: 'gray.200'}}
            >
              <Td>
                {fist_name} {last_name}
              </Td>
              <Td p='10px' textAlign='center'>
                <DropDown.Body title={<Image src={burger} h='15px' w='15px' />}>
                  <DropDown.MenuList value={id} onClick={deletColleague}>
                    удалить
                  </DropDown.MenuList>
                </DropDown.Body>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default Colleague
