import { FC } from 'react'
import { studentApiService, IStudentData } from '@/api/services/student'
import { useFormik } from 'formik'
import { useLocation } from 'react-router-dom'
import { Button, Box } from '@chakra-ui/react'
import Loader from '@/views/Loader'

import Input from '@/views/Input'
import useSWR from 'swr'

const emptyStudent = {
  birthday: '',
  email: '',
  fist_name: '',
  id: 1,
  last_name: '',
  number_personal_file: '',
  patronymic: '',
  place_registration: '',
  place_residence: '',
  telephone: '',
  year_receipt: ''
}

const StudentEdit: FC = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const id = searchParams.get('id')
  const fetcher = id
    ? studentApiService.changeStudent
    : studentApiService.createStudent

  const { data, isLoading } = useSWR(
    `api/v1/studentlist/${id}`,
    studentApiService.getStudent
  )
  const student = data?.student || emptyStudent

  const submitHandler = async (value: IStudentData): Promise<void> => {
    try {
      const res = await studentApiService.changeStudent({ id, body: value })
      console.log('value', res)
    } catch (error) {
      console.log(error)
    }
  }

  const formikTools = useFormik<IStudentData>({
    initialValues: student,
    enableReinitialize: true,
    onSubmit: (value) => {
      submitHandler(value)
    },
  })
  const { handleChange, handleBlur, handleSubmit, values, touched, errors } =
    formikTools

  const formInputs = [
    {
      id: 1,
      label: 'Имя',
      type: 'text',
      name: 'fist_name',
      value: values.fist_name,
      touched: touched.fist_name,
      error: errors.fist_name,
    },
    {
      id: 2,
      label: 'фамилия',
      type: 'text',
      name: 'last_name',
      value: values.last_name,
      touched: touched.last_name,
      error: errors.last_name,
    },
    {
      id: 3,
      label: 'email',
      type: 'text',
      name: 'email',
      value: values.email,
      touched: touched.email,
      error: errors.email,
    },
    {
      id: 4,
      label: 'birthday',
      type: 'text',
      name: 'birthday',
      value: values.birthday,
      touched: touched.birthday,
      error: errors.birthday,
    },
    {
      id: 5,
      label: 'patronymic',
      type: 'text',
      name: 'patronymic',
      value: values.patronymic,
      touched: touched.patronymic,
      error: errors.patronymic,
    },
    {
      id: 6,
      label: 'place_registration',
      type: 'text',
      name: 'place_registration',
      value: values.place_registration,
      touched: touched.place_registration,
      error: errors.place_registration,
    },
    {
      id: 7,
      label: 'place_residence',
      type: 'text',
      name: 'place_residence',
      value: values.place_residence,
      touched: touched.place_residence,
      error: errors.place_residence,
    },
    {
      id: 8,
      label: 'year_receipt',
      type: 'text',
      name: 'year_receipt',
      value: values.year_receipt,
      touched: touched.year_receipt,
      error: errors.year_receipt,
    },
    {
      id: 9,
      label: 'telephone',
      type: 'tel',
      name: 'telephone',
      value: values.telephone,
      touched: touched.telephone,
      error: errors.telephone,
    },
  ]

  if (isLoading) {
    return <Loader />
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box>
        {formInputs.map(({ id, label, type, touched, name, value }) => (
          <Input
            key={id}
            label={label}
            type={type}
            touched={touched}
            name={name}
            value={value}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        ))}
        <Box display='flex' justifyContent='right' mt='20px'>
          <Button type='submit'>Сохранить</Button>
        </Box>
      </Box>
    </form>
  )
}

export default StudentEdit
