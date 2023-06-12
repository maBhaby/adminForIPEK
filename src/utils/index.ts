export const groupEditSerializer = (data: any) => {
  const studentIds = data?.student.map((el:any) => el.id)
  return {
    ...data,
    speciality: +data.speciality,
    colleague: +data.colleague,
    student: studentIds
  }
}