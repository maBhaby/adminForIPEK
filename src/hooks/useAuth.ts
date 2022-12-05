import type { AuthContextType } from '@/context/AuthContext'
import { AuthContext } from '@/context/AuthContext'
import { useContext } from 'react'

export default function useAuth (): AuthContextType {
  return useContext(AuthContext)
}
