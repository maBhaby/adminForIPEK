import { FC } from "react"
import { useNavigate } from "react-router-dom"
import Loader from "@/views/Loader"
import useSWR from "swr"
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react"
import { groupsApiService } from "@/api/services/groups"

const Group: FC = () => {
  const { data, isLoading } = useSWR("api/v1/grouplist/", groupsApiService.getGroupList)
  const groups = data?.groups
  const navigate = useNavigate()

  const redirectToStudentEdit = (id: number): void => {
    console.log('id', id)
    navigate(`/groups/${id}?id=${id}`)
  }

  if (isLoading) {
    return <Loader />
  }
  return (
    <TableContainer borderRadius="10px">
      <Table bg="whiteAlpha.900" variant="simple">
        <Thead>
          <Tr>
            <Th>Группы</Th>
          </Tr>
        </Thead>
        <Tbody>
          {groups?.map((el, i) => (
            <Tr
              key={i}
              onClick={() => redirectToStudentEdit(el)}
              cursor="pointer"
            >
              <Td>
                {el}: какая то группа
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default Group
