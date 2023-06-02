import { FC } from 'react'

import { Box } from '@chakra-ui/react'

interface IGroupName {
  patronymic?: string
  fist_name?: string
  last_name?: string
}

const GroupName: FC<IGroupName> = ({
  patronymic,
  fist_name,
  last_name
}) => {
  let StudentName = '-'
  if (patronymic && fist_name && last_name) {
    StudentName = `${patronymic} ${fist_name[0]}. ${last_name[0]}.`
  }
  return (
    <Box>{StudentName}</Box>
  )
}

export default GroupName
