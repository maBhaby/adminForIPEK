import useSWR from 'swr'

export default function useCSRF (): any {
  const { data, error, isLoading } = useSWR('sanctum/csrf-cookie', {
    refreshInterval: 1000 * 60
  })

  return {
    csrf: data,
    isLoading,
    isError: error
  }
}
