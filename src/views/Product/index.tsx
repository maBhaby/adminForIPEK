import { FC } from 'react'
import { FormikValues } from 'formik'
import Input from '../../views/Input'

interface IProductView {
  formikTools: FormikValues
}

const Product: FC<IProductView> = ({ formikTools }) => {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } = formikTools

  const inputs = [
    {
      name: 'title',
      value: values.title,
      type: 'text',
      error: errors.title,
      touched: touched.title
    }
  ]

  return (
    <form onSubmit={handleSubmit}>
      {
        inputs.map(({ name, value, type, error, touched }, i) => (
          <Input
            key={i}
            name={name}
            value={value}
            type={type}
            onBlur={handleBlur}
            error={error}
            touched={touched}
            onChange={handleChange}
          />
        ))
      }
    </form>
  )
}

export default Product
