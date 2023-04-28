import { useFormik } from 'formik'
import { groupsApiService } from "@/api/services/groups"
import { useLocation } from 'react-router-dom'
import useSWR from 'swr'

const GroupsEdit = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const id = searchParams.get('id')

  const { data, isLoading } = useSWR(
    `api/v1/grouplist/${id}`,
    groupsApiService.getGroup
  )
  console.log('group', data)
  return (
    <div>GroupsEdit</div>
  )
}

export default GroupsEdit