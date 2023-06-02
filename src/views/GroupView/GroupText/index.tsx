import { FC } from 'react'

import { Box, Tooltip } from '@chakra-ui/react'

interface IGroupName {
  content: string | null
}

const GroupText: FC<IGroupName> = ({ content = '-', ...props }) => {
  return (
    <Tooltip label={content} placement='top-start'>
      <Box
        w='150px'
        textOverflow='ellipsis'
        whiteSpace='nowrap'
        overflow='hidden'
        {...props}
      >
        {content}
      </Box>
    </Tooltip>
  )
}

export default GroupText
