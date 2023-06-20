import { FC } from 'react'
import { FormikProps } from 'formik'

import { Box, Button } from '@chakra-ui/react'
import Input from '../Input'

interface IProp {
  formik: FormikProps<{
    level_preparation_PPCCZ: string
    number_educational_building: string
  }>
  handleOpenModal: () => void
}

const inputs = [
  {
    id: 1,
    label: 'Код',
    type: 'text',
    name: 'cod'
  },
  {
    id: 2,
    label: 'Название',
    type: 'text',
    name: 'name'
  }
]

const SpecialityEditView: FC<IProp> = ({ formik }) => {
  const { handleBlur, handleChange, values, errors, touched } = formik
  // console.log(formik)

  return (
    <Box
      boxShadow='base'
      p='20px 30px 30px 30px'
      borderRadius='10px'
      bgColor='white'
      display='flex'
      gap='20px'
      flexDirection='column'
    >
      {inputs.map(({ id, label, type, name }) => {
        return (
          <Input
            key={id}
            label={label}
            type={type}
            touched={touched[name]}
            error={errors[name]}
            value={values[name]}
            name={name}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        )
      })}
      <Box>
        <Button type='submit'>Сохранить</Button>
      </Box>
    </Box>
  )
}

export default SpecialityEditView
