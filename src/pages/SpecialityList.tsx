import { MouseEvent } from 'react'

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
  Button
} from '@chakra-ui/react'
import Loader from '@/views/Loader'

const SpecialityList = () => {
  const { data, isLoading, mutate } = useSWR(
    'getSpeciality',
    ColleagueApi.getSpecialitylist
  )
  const specialityList = data?.speciality
  const navigate = useNavigate()
  if (isLoading) {
    return <Loader />
  }

  const redirectToCollEdit = (id: number | any): void => {
    navigate(`/speciality/${id}?id=${id}`)
  }
  const redirectToCollCreate = (): void => {
    navigate('/speciality/create')
  }

  const deletColleague = async (e: MouseEvent<HTMLButtonElement>): Promise<void> => {
    e.stopPropagation()
    await ColleagueApi.deleteSpeciality(+e.target.value)
    mutate(ColleagueApi.getSpecialitylist)
  }

  return (
    <TableContainer borderRadius='10px'>
      <Table bg='whiteAlpha.900' variant='simple'>
        <Thead>
          <Tr>
            <Th>Специальности</Th>
            <Th w='50px'>
              <Button onClick={redirectToCollCreate}>+</Button>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {specialityList?.map(({ id, name }) => (
            <Tr
              onClick={() => redirectToCollEdit(id)}
              key={id}
              cursor='pointer'
            >
              <Td>
                {name}
              </Td>
              <Td p='10px' textAlign='center'>
                <DropDown.Body title='+'>
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

export default SpecialityList
