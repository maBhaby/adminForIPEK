import { FC, Fragment } from 'react'
import { Grid, Text, Box, Flex, GridItem, Button } from '@chakra-ui/react'
import { FieldArray, Field, Form, FormikValues } from 'formik'
import { Link } from 'react-router-dom'
import SelectView from '../SelectView'
import { ROUTER_PATHS, BASIC_COLOR } from '@/utils/const'
import Input from '../../views/Input'

interface IProductView {
  formikTools: FormikValues
}

const Product: FC<IProductView> = ({ formikTools }) => {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    formikTools

  console.log(formikTools)
  const inputs = [
    {
      name: 'title',
      value: values.title,
      type: 'text',
      error: errors.title,
      touched: touched.title
    },
    {
      name: 'slug',
      value: values.slug,
      type: 'text',
      error: errors.slug,
      touched: touched.slug
    }
  ]

  return (
    <>
      <Link to={ROUTER_PATHS.PRODUCTS}>
        <Button _hover={{ bg: 'teal.600' }}>Back</Button>
      </Link>
      <Form onSubmit={handleSubmit}>
        <Flex
          mt='30'
          mb='30'
          justifyContent='space-between'
          alignItems='center'
        >
          <Text fontSize='25'>Edit product</Text>
          <Button
            p='10px 20px'
            bgColor='red.500'
            _active={{ bg: 'red.600' }}
            _hover={{ bg: 'red.600' }}
          >
            delete
          </Button>
        </Flex>
        <Grid templateColumns='4fr 2fr' gap='30' column='2'>
          <GridItem
            bg={BASIC_COLOR.WHITE}
            display='grid'
            gap='20px'
            gridTemplateColumns='1fr 1fr'
            padding='25px'
            boxShadow='xl'
            borderRadius='15px'
          >
            {inputs.map(({ name, value, type, error, touched }, i) => (
              <Input
                key={i}
                label={name}
                name={name}
                value={value}
                type={type}
                onBlur={handleBlur}
                error={error}
                touched={touched}
                onChange={handleChange}
              />
            ))}
            <FieldArray
              name='size'
              validateOnChange={false}
              render={arrayHelpers => (
                <Box display='flex' alignItems='center' gap='20px' justifyContent='space-between'>
                  {values.size.map((_: any, i: number) => ( // поправить
                    <Fragment key={i}>
                      <Field
                        name={`size[${i}].count`}
                        type='number'
                      />
                    </Fragment>
                  ))}
                </Box>
              )}
            />
          </GridItem>
          <GridItem>
            <Box
              padding='25px'
              borderRadius='15px'
              boxShadow='xl'
              backgroundColor={BASIC_COLOR.CARD_COLOR}
            >
              <Text mb='2'>Status</Text>
              <SelectView
                name='status'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.status}
                error={errors.status}
              />
            </Box>
          </GridItem>
        </Grid>
      </Form>
    </>
  )
}

export default Product
