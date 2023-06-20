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

const PreparationPlanList = () => {
  const { data, isLoading, mutate } = useSWR(
    'getPreparationPlan',
    ColleagueApi.getPreparationPlanList
  )
  console.log(data);
  
  const preparationPlans = data?.PreparationPlan
  const navigate = useNavigate()
  
  if (isLoading) {
    return <Loader />
  }

  const redirectToCollEdit = (id: number | any): void => {
    navigate(`/preparations/${id}?id=${id}`)
  }
  const redirectToCollCreate = (): void => {
    navigate('/preparations/create')
  }

  const deletColleague = async (e: MouseEvent<HTMLButtonElement>): Promise<void> => {
    e.stopPropagation()
    await ColleagueApi.deletePreparationPlan(+e.target.value)
    mutate(ColleagueApi.getPreparationPlanList)
  }

  return (
    <TableContainer borderRadius='10px'>
      <Table bg='whiteAlpha.900' variant='simple'>
        <Thead>
          <Tr>
            <Th>Учебный план</Th>
            <Th w='50px'>
              <Button onClick={redirectToCollCreate}>+</Button>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {preparationPlans?.map(({ id, level_preparation_PPCCZ }) => (
            <Tr
              onClick={() => redirectToCollEdit(id)}
              key={id}
              cursor='pointer'
              _hover={{bgColor: 'gray.200'}}
            >
              <Td>
                {level_preparation_PPCCZ}
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

export default PreparationPlanList
