import { FC } from 'react'

import { Box } from '@chakra-ui/react'

interface IGroupDate {
  date?: string
}

const GroupDate: FC<IGroupDate> = ({
  date
}) => {
  let formatDate = '-'
  if (date) {
    const dateProp = new Date(date)
    const month = dateProp.getMonth() + 1
    formatDate = `${dateProp.getDate()}.${month}.${dateProp.getFullYear()}`
  }
  return (
    <Box>{formatDate}</Box>
  )
}

export default GroupDate
