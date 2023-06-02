import { FC, ChangeEvent, FocusEvent } from 'react'
import { FormControl, FormLabel, Input, FormErrorMessage, InputProps } from '@chakra-ui/react'
import { BASIC_COLOR } from '@/utils/const'

export interface IInput extends InputProps {
  error?: string | any
  label?: string | any
  touched?: boolean | any
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onBlur: (e: FocusEvent<HTMLInputElement>) => void
  value: string
  name: string
  type: string
}

const CustomInput: FC<IInput> = ({ error, label, onChange, onBlur, value, name, type, touched, ...props }) => {
  return (
    <FormControl w='auto' position='relative' isInvalid={Boolean(error) && touched}>
      {Boolean(label) && <FormLabel>{label}</FormLabel>}
      <Input
        onBlur={onBlur}
        name={name}
        onChange={onChange}
        value={value}
        type={type}
        bg={BASIC_COLOR.WHITE}
        {...props}
      />
      {Boolean(touched) && <FormErrorMessage position='absolute' left='0' bottom='-20px'>{error}</FormErrorMessage>}
    </FormControl>
  )
}

export default CustomInput