import { FC } from "react"
import useSWR from 'swr'
import { groupsApiService } from "@/api/services/groups"

const Group: FC = () => {
  const { data } = useSWR('1', groupsApiService.getGroup)
  console.log('grops', data)
  return(
    <div>s</div>
  )
}

export default Group