import { FC, createContext, ReactNode, ReactElement } from 'react'
import { RootStore } from '@/store/Root'

// @ts-expect-error
const T: RootStore = {}
export const StoreContext = createContext<RootStore>(T)

type StoreComponent = FC<{
  store: RootStore
  children: ReactNode
}>

export const StoreProvider: StoreComponent = ({
  children,
  store
}): ReactElement => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  )
}