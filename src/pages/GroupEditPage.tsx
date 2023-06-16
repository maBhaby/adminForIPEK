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
  Tr,
  TableContainer,
  TableCaption,
  Button,
} from "@chakra-ui/react";
import { GROUP_EDIT_HEADER_DATA } from "@/utils/const";
import { groupEditSerializer } from "@/utils";

import { Formik, FieldArray } from "formik";

import GroupBody from "@/views/GroupView/GroupBody";
import { observer } from "mobx-react-lite";
import { useStores } from "@/hooks/useStore";

interface IValue {
  colleague: string;
  form_education: string;
  number: string;
  plan: string;
  school_graduation_class: string;
  speciality: string;
  year_receipt: string;
  student: any[] | any;
}

const initialValuesFormik: IValue = {
  colleague: 1,
  form_education: "Очная",
  number: "404",
  plan: "СПО",
  school_graduation_class: "9",
  speciality: 1,
  year_receipt: "",
  student: [],
};

const GroupEditPage: FC = observer(() => {
  const { ModalStore } = useStores();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const groupId = searchParams.get("id");

  const { data, isLoading, mutate } = useSWR(
    groupId ? `GroupEdit/${groupId}` : null,
    async () => await groupsApiService.getGroup(groupId)
  );
  const group = data?.group;
  // console.log("group", group);
  const studentIds = group?.student.map((el) => el.id);

  const handleAddStudentInGroup = () => {};

  const mutateFn = () => {
    mutate(() => groupsApiService.getGroup(groupId));
  };

  if (isLoading) {
    return <Loader />;
  }

  const handleSubmit = async (value: any) => {
    const serData = groupEditSerializer(value);
    debugger;
    try {
      if (groupId) {
        await groupsApiService.changeGroup(groupId, serData);
      } else {
        await groupsApiService.createGroup(serData);
      }
      ModalStore.open("notification", { text: "Успешно" });
    } catch (error) {
      ModalStore.open("error");
    }
  };

  return (
    <Box>
      <Formik
        initialValues={group || initialValuesFormik}
        onSubmit={(value) => {
          handleSubmit(value);
        }}
      >
        {(formik) => {
          console.log(formik);
          const handleOpenModal = () => {
            ModalStore.open("studentAdd", {
              studentId: studentIds,
              id: groupId,
              formikTools: formik,
              mutateFn,
            });
          };
          return (
            <form onSubmit={formik.handleSubmit}>
              <Title group={formik.values} formik={formik} />
              <TableContainer mt="15px" bg="white" borderRadius="8px">
                <Table variant="simple">
                  <TableCaption mt="0">
                    <Button onClick={handleOpenModal} mr="20px">
                      + Добавить
                    </Button>
                    <Button type="submit">Сохранить</Button>
                  </TableCaption>
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
                    {/* <FieldArray
                      name="student"
                      render={(arrayHelpers) => {
                        return formik.values.student?.map((el: any, i:number) => {
                          return (
                            <>
                              {t}
                              <GroupBody
                                key={id}
                                groupId={groupId}
                                id={id}
                                patronymic={patronymic}
                                last_name={last_name}
                                fist_name={fist_name}
                                birthday={birthday}
                                email={email}
                                telephone={telephone}
                                place_residence={place_residence}
                                place_registration={place_registration}
                                studentIds={studentIds}
                              />
                            </>
                          );
                        });
                      }}
                    /> */}
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
                            mutateFn={mutateFn}
                            key={id}
                            groupId={groupId}
                            id={id}
                            patronymic={patronymic}
                            last_name={last_name}
                            fist_name={fist_name}
                            birthday={birthday}
                            email={email}
                            telephone={telephone}
                            place_residence={place_residence}
                            place_registration={place_registration}
                            studentIds={studentIds}
                          />
                        );
                      }
                    )}
                  </Tbody>
                </Table>
              </TableContainer>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
});

export default GroupEditPage;
