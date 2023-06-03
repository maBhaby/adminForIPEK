import { FC } from 'react'
import { groupsApiService } from '@/api/services/groups'
import useSWR from 'swr'
import { useLocation } from 'react-router-dom'
import Loader from '@/views/Loader'
import Title from '@/views/GroupEditView/Title'
import {
  Box,
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  TableContainer,
  TableCaption,
  Button
} from '@chakra-ui/react'
import { GROUP_EDIT_HEADER_DATA } from '@/utils/const'

import { Formik } from 'formik'

import GroupBody from '@/views/GroupView/GroupBody'
import { observer } from 'mobx-react-lite'
import { useStores } from '@/hooks/useStore'

interface IValue {
  colleague: string
  form_education: string
  number: string
  plan: string
  school_graduation_class: string
  speciality: string
  year_receipt: string
  student: any[] | any
}

const initialValuesFormik: IValue = {
  colleague: 'Горелов',
  form_education: 'Очная',
  number: '404',
  plan: 'СПО',
  school_graduation_class: '9',
  speciality: 'Программирование в компьютерных системах',
  year_receipt: '',
  student: []
}

const GroupEditPage: FC = observer(() => {
  const { ModalStore } = useStores()
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const id = searchParams.get('id')

  const { data, isLoading } = useSWR(id ? `GroupEdit/${id}` : null, async () =>
    await groupsApiService.getGroup(id)
  )
  const group = data?.group
  console.log('group', group)

  const handleAddStudentInGroup = () => {

  }

  const handleOpenModal = () => {
    ModalStore.open('studentAdd')
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <Box>
      <Formik
        initialValues={group|| initialValuesFormik}
        validationSchema={GroupEditPage}
        onSubmit={(value) => {
          console.log(value)
          groupsApiService.changeGroup(id, value)
        }}
      >
        {(formik) => {
          console.log(formik);
          
          return (
            <form onSubmit={formik.handleSubmit}>
              <Title group={formik.values} formik={formik} />
              <TableContainer mt='15px' bg='white' borderRadius='8px'>
                <Table variant='simple'>
                  <TableCaption mt='0'>
                    <Button onClick={handleOpenModal} mr='20px'>+ Добавить</Button>
                    <Button type='submit'>Сохранить</Button>
                  </TableCaption>
                  <Thead>
                    <Tr>
                      {GROUP_EDIT_HEADER_DATA.map((el) => {
                        return (
                          <Th w='150px' p='10px' key={el.id}>
                            {el.label}
                          </Th>
                        )
                      })}
                    </Tr>
                  </Thead>
                  <Tbody>
                    {group?.student.map(
                      ({
                        id,
                        patronymic,
                        last_name,
                        fist_name,
                        birthday,
                        email,
                        telephone,
                        place_residence,
                        place_registration
                      }) => {
                        return (
                          <GroupBody
                            key={id}
                            id={id}
                            patronymic={patronymic}
                            last_name={last_name}
                            fist_name={fist_name}
                            birthday={birthday}
                            email={email}
                            telephone={telephone}
                            place_residence={place_residence}
                            place_registration={place_registration}
                          />
                        )
                      }
                    )}
                  </Tbody>
                </Table>
              </TableContainer>
            </form>
          )
        }}
      </Formik>
    </Box>
  )
})

export default GroupEditPage
