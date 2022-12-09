import { Navigate, useLocation } from 'react-router-dom'
import useUser from '@/hooks/useUser'
import Loading from '@/components/Loading'

export default function RequireAuth ({ children }: { children: JSX.Element }): JSX.Element {
  const location = useLocation()

  const { isLoading, isError } = useUser()

  if (isLoading) {
    return <Loading />
  } else if (isError) {
    return <Navigate to="/login" state={{ from: location }} replace />
  } else {
    return children
  }
}
