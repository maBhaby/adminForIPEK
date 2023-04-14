import { FC } from 'react'
import {
  Grid,
  Text,
  Box,
  Flex,
  GridItem,
  Button,
  Input as CInput
} from '@chakra-ui/react'
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
      title: 'Название',
      name: 'title',
      value: values.title,
      type: 'text',
      error: errors.title,
      touched: touched.title
    },
    {
      title: 'Слаг',
      name: 'slug',
      value: values.slug,
      type: 'text',
      error: errors.slug,
      touched: touched.slug
    },
    {
      title: 'Название коллекции',
      name: 'collection.title',
      value: values.collection.title,
      type: 'text',
      error: errors.collection?.title,
      touched: touched.collection?.title
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
            gridTemplateRows='1fr'
            padding='25px'
            boxShadow='xl'
            borderRadius='15px'
          >
            <Box>
              {inputs.map(({ title, name, value, type, error, touched }, i) => (
                <Input
                  key={i}
                  label={title}
                  name={name}
                  value={value}
                  type={type}
                  onBlur={handleBlur}
                  error={error}
                  touched={touched}
                  onChange={handleChange}
                />
              ))}
            </Box>
            <Box>
              <FieldArray
                name='size'
                validateOnChange={false}
                render={(arrayHelpers) => (
                  <Box
                    display='flex'
                    alignItems='center'
                    gap='20px'
                    justifyContent='space-between'
                  >
                    {values.size.map(
                      (
                        el: any,
                        i: number // TODO: поправить + норм инпуты
                      ) => (
                        <Flex direction='column' key={i}>
                          <Text ml='3px'>{el.title}</Text>
                          <Field
                            as={CInput}
                            name={`size[${i}].count`}
                            type='number'
                          />
                        </Flex>
                      )
                    )}
                  </Box>
                )}
              />
            </Box>
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
