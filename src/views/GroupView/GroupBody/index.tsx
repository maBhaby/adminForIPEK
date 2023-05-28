import { FC } from 'react'

import { useStores } from '@/hooks/useStore';
import { observer } from 'mobx-react-lite';

import { Tr, Td } from '@chakra-ui/react';
import { Student } from '@/api/services/groups';
import GroupName from '../GroupName';
import GroupDate from '../GroupDate';
import GroupText from '../GroupText';

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

const GroupBody:FC<Student> = observer(({
  patronymic,
  last_name,
  fist_name,
  birthday,
  email,
  telephone,
  place_registration,
  place_residence,
  id
}) => {
  const contentForTooltip = {
    email,
    telephone,
    place_registration,
    place_residence
  }
  const store = useStores()
  const handleOpenModal = () => {
    store.ModalStore.open('userData', { id })
  }
  return (
    <Tr onClick={handleOpenModal} _hover={{ backgroundColor: "gray.100" }} cursor="pointer">
      {content.map(({id, Component, content}) => (
        <Td key={id} p="0.75rem">
          <Component
            patronymic={patronymic}
            last_name={last_name}
            fist_name={fist_name}
            date={birthday}
            content={contentForTooltip[content]}
          />
      </Td>
      ))}
    </Tr>
  );
})

export default GroupBody