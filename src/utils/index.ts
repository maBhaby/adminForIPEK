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

export const addStudentToGroupForm = async (
  students: number[],
  formikTools: FormikProps<any>
) => {
  try {
    
  } catch (error) {
    
  }
}