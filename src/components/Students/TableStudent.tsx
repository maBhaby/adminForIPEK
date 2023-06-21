import React from "react";
import ReactToPrint from "react-to-print";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from '@chakra-ui/react'

const stid = [
  {
    "id": 5,
    "fist_name": "Коляc",
    "last_name": "Тестовый",
    "patronymic": "Сергеевич",
    "birthday": "2023-02-16",
    "place_residence": "3-я Полётная д.39",
    "place_registration": "3-я Полётная д.39",
    "telephone": "+79038888882",
    "number_personal_file": "111",
    "year_receipt": "2023-02-07",
    "email": "1234.mit1234@gmail.co"
}
]

const TableStudent = () => {
  const reactPrintContent = React.useRef()

  const reactToPrintContent = React.useCallback(() => {
    return reactPrintContent.current;
  }, [reactPrintContent.current]);

  return (
    <>
      <ReactToPrint  
        content={reactToPrintContent} 
        trigger={() => {
          return (
            <Button>s</Button>
          )
        }}
        />
      <TableContainer ref={reactPrintContent}>
        <Table w='1200px' variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              stid.map((el) => (
                <Tr>
                  <Td>{el.fist_name}</Td>
                  <Td>{el.last_name}</Td>
                  <Td>{el.patronymic}</Td>
                  <Td>{el.birthday}</Td>
                  <Td>{el.place_residence}</Td>
                  <Td>{el.place_registration}</Td>
                  <Td>{el.telephone}</Td>
                  <Td>{el.number_personal_file}</Td>
                  <Td>{el.year_receipt}</Td>
                  <Td>{el.email}</Td>
              </Tr>
              ))
            }
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableStudent;
