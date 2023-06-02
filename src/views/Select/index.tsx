import Creatable from 'react-select/creatable'
import { withAsyncPaginate } from 'react-select-async-paginate'

import { Spinner } from '@chakra-ui/react'
import { FC } from 'react'

const CreatableAsyncPaginate = withAsyncPaginate(Creatable)

export const BaseCreatableSelect: FC<any> = ({
  additional,
  loadOptions,
  isSearchable,
  isLoading,
  ...props
}) => {
  return (
    <CreatableAsyncPaginate
      debounceTimeout={500}
      additional={additional}
      loadOptions={loadOptions}
      createOptionPosition='first'
      isSearchable={isSearchable}
      isLoading={isLoading}
      loadingMessage={Spinner}
      noOptionsMessage='Нет результатов'
      formatCreateLabel={(inputValue: any) => {
        return `Создать ${inputValue}`
      }}
      {...props}
    />
  )
}
