import { FC } from 'react'
import { IInput } from '../Input'
import { Select, Box } from '@chakra-ui/react'
import { BASIC_COLOR } from '@/utils/const'

type TSelect = Omit<IInput, 'type' | 'label' | 'touched'>

const SelectView: FC<TSelect> = ({ error, onChange, onBlur, value, name }) => {
  return (
    <>
      <Select
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        bg={BASIC_COLOR.WHITE}
      >
        <option value='active'>active</option>
        <option value='soldout'>soldout</option>
        <option value='comingsoon'>comingsoon</option>
      </Select>
      {Boolean(error) && <Box>{error}</Box>}
    </>
  )
}

export default SelectView
