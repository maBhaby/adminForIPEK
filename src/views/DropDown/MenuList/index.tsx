import { FC, ReactNode, MouseEvent } from 'react'

import { MenuItem, MenuItemProps } from '@chakra-ui/react'

interface IProp extends MenuItemProps {
  children: ReactNode
}

const MenuList: FC<IProp> = ({ children, ...props }) => {
  const stopProp = (e: MouseEvent<HTMLButtonElement>) => { e.stopPropagation() }
  return (
    <MenuItem
      onClick={stopProp}
      {...props}
    >
      {children}
    </MenuItem>
  )
}

export default MenuList
