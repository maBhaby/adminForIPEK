import { FC } from 'react'
import useSWR from 'swr'
import { useFormik } from 'formik'
import { useLocation, useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import { useStores } from '@/hooks/useStore'
import { StudentEditShema } from '@/utils/schemas/StudentEdit'
import { studentApiService, IStudentData } from '@/api/services/student'

import StudentEditView from '@/views/StudentEditView'
import Loader from '@/views/Loader'

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

const StudentEdit: FC = observer(() => {
  const location = useLocation()
  const nav = useNavigate()
  const searchParams = new URLSearchParams(location.search)
  const id = searchParams.get('id')
  const { ModalStore } = useStores()

  const fetcher = async (id: number | null, value: IStudentData) => {
    if (id) {
      return await studentApiService.changeStudent(id, value)
    } else {
      return await studentApiService.createStudent(value)
    }
  }

  const { data, isLoading } = useSWR(
    id ? `api/v1/studentlist/${id}` : null,
    studentApiService.getStudent
  )
  const student = data?.student || emptyStudent

  const submitHandler = async (value: IStudentData) => {
    try {
      const idNum = id ? +id : null
      await fetcher(idNum, value)
      if (!idNum) {
        ModalStore.open('notification', { text: 'Успешное создание' })
      } else {
        ModalStore.open('notification', { text: 'Успешное редактирование' })
      }
      nav('/')
    } catch (error) {
      ModalStore.open('error', { error })
    }
  }

  const formikTools = useFormik<IStudentData>({
    initialValues: student,
    enableReinitialize: true,
    validationSchema: StudentEditShema,
    onSubmit: (value, action) => {
      action.setSubmitting(true)
      submitHandler(value)
      action.setSubmitting(false)
    }
  })

  if (isLoading) {
    return <Loader />
  }

  return (
    <form onSubmit={formikTools.handleSubmit}>
      <StudentEditView formikTools={formikTools} />
    </form>
  )
})

export default StudentEdit
