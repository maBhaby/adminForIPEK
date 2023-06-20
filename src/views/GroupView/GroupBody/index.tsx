import { FC } from 'react'

import { FieldArrayRenderProps } from 'formik'

import { groupsApiService } from '@/api/services/groups'
import { observer } from 'mobx-react-lite'

import { Tr, Td, Button } from '@chakra-ui/react'
import { Student } from '@/api/services/groups'
import GroupName from '../GroupName'
import GroupDate from '../GroupDate'
import GroupText from '../GroupText'

const content = [
  {
    id: 0,
    Component: GroupName,
    content: null
  },
  {
    id: 1,
    Component: GroupDate,
    content: null
  },
  {
    id: 2,
    Component: GroupText,
    content: 'email'
  },
  {
    id: 3,
    Component: GroupText,
    content: 'telephone'
  },
  {
    id: 4,
    Component: GroupText,
    content: 'place_registration'
  },
  {
    id: 5,
    Component: GroupText,
    content: 'place_residence'
  }
]

interface IGroupBody extends Student {
  studentIds?: Array<number>
  groupId: number | null
  arrayHelpers: FieldArrayRenderProps
  mutateFn: () => void
  index: number
}

const GroupBody: FC<IGroupBody> = observer(({
  patronymic,
  last_name,
  fist_name,
  birthday,
  index,
  email,
  telephone,
  place_registration,
  place_residence,
  id,
  studentIds,
  groupId,
  arrayHelpers,
  mutateFn
}) => {
  const contentForTooltip = {
    email,
    telephone,
    place_registration,
    place_residence
  }
  
  // debugger

  const handleDeletUser = () => {
    if (groupId) {
      groupsApiService.changeGroupStud(groupId, { student:studentIds?.filter((el) => el !== id)})
      mutateFn()
    } else {
      arrayHelpers.remove(index)
    }
  }
  return (
    <Tr _hover={{ backgroundColor: 'gray.100' }} cursor='pointer'>
      {content.map(({ id, Component, content }) => (
        <Td key={id} p='0.75rem'>
          <Component
            patronymic={patronymic}
            last_name={last_name}
            fist_name={fist_name}
            date={birthday}
            content={contentForTooltip[content]}
          />
        </Td>
      ))}
      <Td w='70px' p='0.75rem' textAlign='center' >
        <Button onClick={handleDeletUser} >del</Button>
      </Td>
    </Tr>
  )
})

export default GroupBody
