import { FC } from 'react' 
import { Text, Flex } from "@chakra-ui/react"
import { Group } from '@/api/services/groups'

interface IProps {
  group: Group
}

const Title: FC<IProps> = ({ group }) => {
  return (
    <>
    <Text as='h1' fontSize='28'>Группа - {group?.number}</Text>
      <Flex mt='10px' justifyContent='space-between'>
        {group?.speciality && <Text>Специальность: {group.speciality}</Text>}
        {group?.colleague && <Text>Преподаватель: {group.colleague}</Text>}
      </Flex>
      <Flex mt='10px' justifyContent='space-between'>
        {group?.form_education && <Text>Форма обучения: {group.form_education}</Text>}
        {group?.school_graduation_class && <Text>Пришли с класса: {group.school_graduation_class}</Text>}
      </Flex>
    </>
  )
}

export default Title