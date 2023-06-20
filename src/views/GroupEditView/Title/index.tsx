import { FC } from 'react'
import { FormikProps } from 'formik'

import { Group, groupsApiService } from '@/api/services/groups'
import { ColleagueApi } from '@/api/services/colleague'

import { Text, Flex } from '@chakra-ui/react'
import CustomSelect from '@/views/CustomSelect'
import Input from '@/views/Input'

interface IProps {
  group: Group
  formik: FormikProps<any>
}

const Title: FC<IProps> = ({ group, formik }) => {
  const { handleBlur, handleChange, errors, touched } = formik
  // console.log(formik);
  
  return (
    <>
      <Flex gap='10px' justifyContent='space-between' alignItems='center'>
        <Flex gap='10px'>
          <Text as='h1' fontSize='28'>
            Группа:
          </Text>
          <Input
            name='number'
            type='text'
            value={group.number}
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.number}
            touched={touched.number}
            w='100px'
          />
        </Flex>
        <Flex alignItems='center' gap='10px'>
          <Text as='h1' >
            Учебный план:
          </Text>
          <CustomSelect
            name='plan'
            value={group.plan}
            apiGet={groupsApiService.getPlan}
            renderData='PreparationPlan'
            renderName='level_preparation_PPCCZ'
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </Flex>
      </Flex>

      <Flex mt='10px' justifyContent='space-between'>
        <Flex gap='10px' alignItems='center'>
          <Text>Специальность:</Text>
          <CustomSelect
            name='speciality'
            value={group.speciality}
            apiGet={groupsApiService.getDisciplineslist}
            renderData='speciality'
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </Flex>
        <Flex gap='10px' alignItems='center'>
          <Text>Преподаватель:</Text>
          <CustomSelect
            name='colleague'
            value={group.colleague}
            apiGet={ColleagueApi.getColleagueList}
            renderData='colleagues'
            renderName='last_name'
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </Flex>
      </Flex>
      <Flex mt='10px' justifyContent='space-between'>
        <Flex gap='10px' alignItems='center'>
          <Text>Форма обучения:</Text>
          <Input
            name='form_education'
            type='text'
            value={group.form_education}
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.form_education}
            touched={touched.form_education}
          />
        </Flex>
        <Flex gap='10px' alignItems='center'>
          <Text>Пришли с класса:</Text>
          <Input
            name='school_graduation_class'
            type='text'
            value={group.school_graduation_class}
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.school_graduation_class}
            touched={touched.school_graduation_class}
            w='100px'
          />
        </Flex>
      </Flex>
      <Flex mt='10px' justifyContent='space-between'>
        <Flex gap='10px' alignItems='center'>
          <Text>Год поступления:</Text>
          <Input
            name='year_receipt'
            type='date'
            value={group.year_receipt}
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.year_receipt}
            touched={touched.year_receipt}
          />
        </Flex>
      </Flex>
    </>
  )
}

export default Title
