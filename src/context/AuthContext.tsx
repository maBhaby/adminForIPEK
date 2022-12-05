import type { User } from '@/models'
import client from '@/utils/client'
import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export interface AuthContextType {
  user: User | null
  login: () => Promise<void>
  logout: () => void
}

export const AuthContext = createContext<AuthContextType>(null)

export const AuthProvider = ({
  children
}: {
  children: React.ReactNode
}): JSX.Element => {
  const [user, setUser] = useState<User | null>(null)

  async function getUser () {
    const user = await client.get('api/v2/me').json<User>()
    setUser(user)
  }

  useEffect(() => {
    void getUser()
  }, [])

  // async function temp() {

  // }

  // useEffect(() => {
  //   void client.get('sanctum/csrf-cookie')
  // }, [])

  // useEffect(() => {
  //   void client.get('sanctum/csrf-cookie')
  // }, [])

  // useEffect(() => {
  //   void client.get('sanctum/csrf-cookie')

  //   if (user !== null) {
  //     console.log(user)
  //   }
  // }, [user])

  async function login (formData): Promise<void> {
    await client.post('login', {
      body: formData
    })
    const user = await client.get('api/v2/me').json<User>()
    setUser(user)
  }

  const logout = (): void => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      { children }
    </AuthContext.Provider>
  )
}
