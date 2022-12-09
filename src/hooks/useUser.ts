import useSWR from 'swr'

export default function useCSRF (): any {
  const { data, error, isLoading } = useSWR('api/v2/me', {
    refreshInterval: 1000 * 60
  })

  return {
    user: data,
    isLoading,
    isError: error
  }
}
