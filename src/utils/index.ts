import { FormikProps } from "formik"
import { studentApiService } from "@/api/services/student"

export const groupEditSerializer = (data: any) => {
  const studentIds = data?.student.map((el:any) => el.id)
  return {
    ...data,
    speciality: +data.speciality,
    colleague: +data.colleague,
    student: studentIds
  }
}

const fetchStudents = async () => {

}

export const addStudentToGroupForm = async (
  students: number[],
  formikTools: FormikProps<any>
) => {
  try {
    const fetcher = students.map((id:number) => studentApiService.getStudent(`api/v1/studentlist/${id}`))
    const allPromise = await Promise.all(fetcher)
    allPromise.forEach((el, i) => {
      formikTools.setFieldValue(`student.${i}`, {...el.student})
    })
    // console.log(formikTools.setFieldValue);
    
    // formikTools.setFieldValue('s')
  } catch (error) {
    
  }
}