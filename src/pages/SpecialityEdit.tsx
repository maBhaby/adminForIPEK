import { FC } from 'react'
import useSWR from 'swr'
import { useFormik } from 'formik'
import { useLocation, useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import { TColleague, ColleagueApi } from '@/api/services/colleague'
import { useStores } from '@/hooks/useStore'

import { SpecialityEditSchema } from '@/utils/schemas/SpecialityEditSchema'

import Loader from '@/views/Loader'

import PreparationPlanEdit from '@/views/PreparationPlanEditView'
import SpecialityEditView from '@/views/SpecialityEditView'

const emptyColleague = {
  cod: '',
  name: ''
}

const SpecialityEdit: FC = observer(() => {
  const location = useLocation()
  const navigate = useNavigate()
  const searchParams = new URLSearchParams(location.search)
  const id = searchParams.get('id')
  const { ModalStore } = useStores()

  const fetcher = async (id: number | null, value: TColleague) => {
    if (id) {
      return await ColleagueApi.changeSpeciality(id, value)
    } else {
      return await ColleagueApi.createSpeciality(value)
    }
  }

  const { data, isLoading } = useSWR(
    id ? `api/v1/colleague/${id}` : null, () => {
      if (id) {
        return ColleagueApi.getSpeciality(+id)
      }
    }
  )

  const colleague = data?.speciality || emptyColleague

  const submitHandler = async (value: TColleague) => {
    try {
      const idNum = id ? +id : null
      await fetcher(idNum, value)
      if (!id) {
        ModalStore.open('notification', { text: 'Успешное создание' })
      } else {
        ModalStore.open('notification', { text: 'Успешное редактирование' })
      }
      return navigate('/specialitys')
    } catch (error) {
      ModalStore.open('error', { error })
    }
  }

  const formikTools = useFormik<TColleague>({
    initialValues: colleague,
    enableReinitialize: true,
    validationSchema: SpecialityEditSchema,
    onSubmit: (value) => {
      submitHandler(value)
    }
  })

  if (isLoading) {
    return <Loader />
  }

  return (
    <form onSubmit={formikTools.handleSubmit}>
     <SpecialityEditView formik={formikTools} />
    </form>
  )
})

export default SpecialityEdit
