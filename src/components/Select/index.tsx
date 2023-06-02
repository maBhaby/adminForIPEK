import { ColleagueApi } from '@/api/services/colleague'
import { BaseCreatableSelect } from '@/views/Select'
import { useState } from 'react'

const Select = () => {
  const [isLoading, setLoading] = useState(false)

  const loadOptions = async () => {
    setLoading(true)
    const { results } = await ColleagueApi.getPositions()
    const options = results.map((item) => ({
      id: item.id,
      label: item.title,
      value: item
    }))

    setLoading(false)
    return {
      options,
      hasMore: true
    }
  }

  const loadPageOptions = async (q: any, prevOptions: any, { page = 1 }: any) => {
    const { options, hasMore } = await loadOptions()
    return {
      options,
      hasMore,
      additional: {
        page: page + 1
      }
    }
  }

  return (
    <BaseCreatableSelect
      loadOptions={loadPageOptions}
      isLoading={isLoading}
      isCreateable={false}
    />
  )
}

export default Select
