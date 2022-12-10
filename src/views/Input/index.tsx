import React, { FC } from 'react'
import { FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/react'

interface IInput {
  error?: string
  label?: string
  onChange: () => void
  value: string
  name: string
  type: string
}

const CustomInput: FC<IInput> = ({ error, label, onChange, value, name, type }) => {
  return (
    <FormControl isInvalid={Boolean(error)}>
      {Boolean(label) && <FormLabel>{label}</FormLabel>}
      <Input
        name={name}
        onChange={onChange}
        value={value}
        type={type}
      />
      {Boolean(error) && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  )
}

export default CustomInput
