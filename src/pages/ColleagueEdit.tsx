import { FC } from "react";
import useSWR from "swr";
import { useFormik } from "formik";
import { useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { TColleague } from "@/api/services/colleague";
import { useStores } from "@/hooks/useStore";
import { ColleagueApi } from "@/api/services/colleague";
import { ColleagueEditShema } from "@/utils/schemas/ColleagueEditShema";

import Loader from "@/views/Loader";
import ColleagueEditView from "@/views/ColleagueEditView";

const emptyColleague = {
  fist_name: "",
  last_name: "",
  patronymic: "",
  telephone: "",
  post: "",
};

const ColleagueEdit: FC = observer(() => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const { ModalStore } = useStores()

  const fetcher = (id: number | null, value: TColleague) => {
    if (id) {
      return ColleagueApi.changeColleague(id, value)
    }
    else {
      return ColleagueApi.createColleague(value)
    }
  }
;

  const { data, isLoading } = useSWR(
    id ? `api/v1/colleague/${id}` : null, () => {
      if (id) {    
        return ColleagueApi.getColleague(+id) 
      }
    }
  );
  console.log(data);
  
  const colleague = data?.colleague || emptyColleague;

  const submitHandler = async (value: TColleague) => {
    try {
      const idNum = id ? +id : null
      await fetcher(idNum, value);
    } catch (error) {
      ModalStore.open('error', { error })
    }
  };

  const formikTools = useFormik<TColleague>({
    initialValues: colleague,
    enableReinitialize: true,
    validationSchema: ColleagueEditShema,
    onSubmit: (value) => {
      submitHandler(value);
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <form onSubmit={formikTools.handleSubmit}>
      <ColleagueEditView formik={formikTools} />
    </form>
  );
})

export default ColleagueEdit;
