import { FC } from 'react'
import useSWR from 'swr'
import { useFormik } from 'formik'
import { useLocation, useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import { TColleague, ColleagueApi } from '@/api/services/colleague'
import { useStores } from '@/hooks/useStore'

import { ColleagueEditShema } from '@/utils/schemas/ColleagueEditShema'

import Loader from '@/views/Loader'

import PreparationPlanEdit from '@/views/PreparationPlanEditView'
import { PreparationEditSheme } from '@/utils/schemas/PreparationEditSheme'

const emptyColleague = {
  level_preparation_PPCCZ: '',
  number_educational_building: ''
}

const PreparationEdit: FC = observer(() => {
  const location = useLocation()
  const navigate = useNavigate()
  const searchParams = new URLSearchParams(location.search)
  const id = searchParams.get('id')
  const { ModalStore } = useStores()

  const fetcher = async (id: number | null, value: TColleague) => {
    if (id) {
      return await ColleagueApi.changePreparationPlan(id, value)
    } else {
      return await ColleagueApi.createPreparationPlanList(value)
    }
  }

  const handleOpenModal = () => {
    ModalStore.open('createPost')
  }

  const { data, isLoading } = useSWR(
    id ? `api/v1/colleague/${id}` : null, () => {
      if (id) {
        return ColleagueApi.getPreparationPlan(+id)
      }
    }
  )

  const colleague = data?.PreparationPlan || emptyColleague

  const submitHandler = async (value: TColleague) => {
    try {
      const idNum = id ? +id : null
      await fetcher(idNum, value)
      if (!id) {
        return navigate('/preparations')
      }
    } catch (error) {
      ModalStore.open('error', { error })
    }
  }

  const formikTools = useFormik<TColleague>({
    initialValues: colleague,
    validationSchema: PreparationEditSheme,
    enableReinitialize: true,
    onSubmit: (value) => {
      submitHandler(value)
    }
  })

  if (isLoading) {
    return <Loader />
  }

  return (
    <form onSubmit={formikTools.handleSubmit}>
      <PreparationPlanEdit formik={formikTools} handleOpenModal={handleOpenModal} />
    </form>
  )
})

export default PreparationEdit
