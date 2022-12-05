import { createContext } from 'react'
import { useDisclosure } from '@chakra-ui/react'

interface SidebarContextType {
  isOpen: boolean
  onToggle: () => void
  onOpen: () => void
  onClose: () => void
  getDisclosureProps: (props?: any) => any
}

export const SidebarContext = createContext<SidebarContextType>({
  isOpen: true,
  onToggle: () => {},
  onOpen: () => {},
  onClose: () => {},
  getDisclosureProps: () => {}
})

export const SidebarProvider = ({
  children
}: {
  children: React.ReactNode
}): JSX.Element => {
  const disclosure = useDisclosure({
    defaultIsOpen: localStorage.getItem('sidebar-open') === 'yes',
    onOpen () {
      localStorage.setItem('sidebar-open', 'yes')
    },
    onClose () {
      localStorage.removeItem('sidebar-open')
    }
  })

  return (
    <SidebarContext.Provider value={disclosure}>
      { children }
    </SidebarContext.Provider>
  )
}
