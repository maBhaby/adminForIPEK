import { FC } from "react";
import { groupsApiService } from "@/api/services/groups";
import useSWR from "swr";
import { useLocation } from "react-router-dom";
import Loader from "@/views/Loader";
import Title from "@/views/GroupEditView/Title";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Th,
  Td,
  Tr,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { GROUP_EDIT_HEADER_DATA } from "@/utils/const";
import GroupBody from "@/views/GroupView/GroupBody";

const GroupEditPage: FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");

  const { data, isLoading } = useSWR(id ? `GroupEdit/${id}` : null, () =>
    groupsApiService.getGroup(id)
  );
  const group = data?.group;
  console.log("group", group);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Box>
      <Title group={group} />
      <TableContainer mt='15px' bg="white" borderRadius='8px'>
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              {GROUP_EDIT_HEADER_DATA.map((el) => {
                return (
                  <Th w="150px" p="10px" key={el.id}>
                    {el.label}
                  </Th>
                );
              })}
            </Tr>
          </Thead>
          <Tbody>
            {group?.student.map(
              ({
                id,
                patronymic,
                last_name,
                fist_name,
                birthday,
                email,
                telephone,
                place_residence,
                place_registration,
              }) => {
                return (
                  <GroupBody 
                    key={id} 
                    id={id}
                    patronymic={patronymic} 
                    last_name={last_name} 
                    fist_name={fist_name} 
                    birthday={birthday}
                    email={email}
                    telephone={telephone}
                    place_residence={place_residence}
                    place_registration={place_registration}
                  />
                )
              }
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default GroupEditPage;
