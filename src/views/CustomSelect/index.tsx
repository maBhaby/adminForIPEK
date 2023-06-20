import React, { FC } from "react";

import useSWR from "swr";

import { trash } from "@/assets";
import { ColleagueApi } from "@/api/services/colleague";

import { Select, Flex, Button, Image } from "@chakra-ui/react";

const CustomSelect: FC<any> = ({
  name,
  onChange,
  value,
  apiGet,
  apiDel,
  renderData,
  renderName = 'name'
}) => {
  const { data, isLoading, mutate } = useSWR(`${apiGet}/test`, apiGet);
  // console.log(data);

  const handleDelete = async () => {
    await apiDel(value);
    mutate(apiGet);
  };

  if (isLoading) return <div>asd</div>;

  return (
    <Flex gap="5px">
      <Select
        name={name}
        onChange={onChange}
        value={value}
        w="100%"
        maxW="300px"
      >
        {data &&
          data[renderData].map((el: any) => {
            return (
              <option key={el.id} value={el.id}>
                {el[renderName]}
              </option>
            );
          })}
      </Select>
      {
        apiDel && (    
        <Button onClick={handleDelete} bgColor="red.500">
          <Image src={trash} w="20px" h="15px" />
        </Button>
        )
      }
    </Flex>
  );
};

export default CustomSelect;
