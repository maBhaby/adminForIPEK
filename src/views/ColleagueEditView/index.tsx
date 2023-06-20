import { FC, useEffect } from 'react'
import { FormikProps } from 'formik'

import { ColleagueApi, TColleague } from '@/api/services/colleague'

import CustomSelect from '../CustomSelect'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import Input from '../Input'

interface IProp {
  formik: FormikProps<TColleague>
  handleOpenModal: () => void
}

const inputs = [
  {
    id: 1,
    label: 'Имя',
    type: 'text',
    name: 'fist_name'
  },
  {
    id: 2,
    label: 'Фамилия',
    type: 'text',
    name: 'last_name'
  },
  {
    id: 3,
    label: 'E-mail',
    type: 'text',
    name: 'patronymic'
  },
  {
    id: 9,
    label: 'Телефон',
    type: 'tel',
    name: 'telephone'
  }
]

const ColleagueEditView: FC<IProp> = ({ formik, handleOpenModal }) => {
  const { handleBlur, handleChange, values, errors, touched } = formik
  // .consolelog(formik)

  return (
    <Box
      boxShadow='base'
      p='20px 30px 30px 30px'
      borderRadius='10px'
      bgColor='white'
      display='flex'
      gap='20px'
      flexDirection='column'
    >
      {inputs.map(({ id, label, type, name }) => {
        return (
          <Input
            key={id}
            label={label}
            type={type}
            touched={touched[name]}
            error={errors[name]}
            value={values[name]}
            name={name}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        )
      })}
      <Box>
        <Text mb='5px'>Должность</Text>
        <Flex gap='10px'>
          <CustomSelect
            name='post'
            onBlur={handleBlur}
            onChange={handleChange}
            apiGet={ColleagueApi.getPositions}
            apiDel={ColleagueApi.deletePosition}
            renderData='posts'
            value={values.post}
          />
          <Button
            onClick={handleOpenModal}
          >Добавить
          </Button>
        </Flex>
      </Box>
      <Box>
        <Button type='submit'>Сохранить</Button>
      </Box>
    </Box>
  )
}

export default ColleagueEditView
