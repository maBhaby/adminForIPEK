import useAuth from '@/hooks/useAuth'
import { Navigate, useLocation } from 'react-router-dom'

export default function RequireAuth ({ children }: { children: JSX.Element }): JSX.Element {
  const location = useLocation()

  const { user } = useAuth()

  if (user === null) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}
