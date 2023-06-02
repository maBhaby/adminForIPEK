import { FC, ReactNode, MouseEvent } from 'react'

import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'

interface IProp {
  title: ReactNode
  children: ReactNode
}

const Body: FC<IProp> = ({ children, title }) => {
  const stopProp = (e: MouseEvent<HTMLButtonElement>) => { e.stopPropagation() }
  return (
    <Menu>
      <MenuButton onClick={stopProp} as={Button}>{title}</MenuButton>
      <MenuList>
        {children}
      </MenuList>
    </Menu>
  )
}

export default Body
