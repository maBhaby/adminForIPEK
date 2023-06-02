import { FC } from 'react'
import useSWR from 'swr'
import { useFormik } from 'formik'
import { useLocation, useNavigate, Navigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import { TColleague, ColleagueApi } from '@/api/services/colleague'
import { useStores } from '@/hooks/useStore'

import { ColleagueEditShema } from '@/utils/schemas/ColleagueEditShema'

import Loader from '@/views/Loader'
import ColleagueEditView from '@/views/ColleagueEditView'
import { ROUTER_PATHS } from '@/utils/const'

const emptyColleague = {
  fist_name: '',
  last_name: '',
  patronymic: '',
  telephone: '',
  post: 1
}

const ColleagueEdit: FC = observer(() => {
  const location = useLocation()
  const navigate = useNavigate()
  const searchParams = new URLSearchParams(location.search)
  const id = searchParams.get('id')
  const { ModalStore } = useStores()

  const fetcher = async (id: number | null, value: TColleague) => {
    if (id) {
      return await ColleagueApi.changeColleague(id, value)
    } else {
      return await ColleagueApi.createColleague(value)
    }
  }

  const handleOpenModal = () => {
    ModalStore.open('createPost')
  }

  const { data, isLoading } = useSWR(
    id ? `api/v1/colleague/${id}` : null, () => {
      if (id) {
        return ColleagueApi.getColleague(+id)
      }
    }
  )

  const colleague = data?.colleague || emptyColleague

  const submitHandler = async (value: TColleague) => {
    try {
      const idNum = id ? +id : null
      await fetcher(idNum, value)
      if (!id) {
        debugger
        return navigate('/colleague')
      }
    } catch (error) {
      ModalStore.open('error', { error })
    }
  }

  const formikTools = useFormik<TColleague>({
    initialValues: colleague,
    enableReinitialize: true,
    validationSchema: ColleagueEditShema,
    onSubmit: (value) => {
      submitHandler(value)
    }
  })

  if (isLoading) {
    return <Loader />
  }

  return (
    <form onSubmit={formikTools.handleSubmit}>
      <ColleagueEditView formik={formikTools} handleOpenModal={handleOpenModal} />
    </form>
  )
})

export default ColleagueEdit
