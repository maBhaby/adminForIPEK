import BaseApi from '../api'
import { runtimeConfig } from '@/config'

export interface IStudentData {
  birthday: string
  email: string
  fist_name: string
  id: number
  last_name: string
  number_personal_file: string
  patronymic: string
  place_registration: string
  place_residence: string
  telephone: string
  year_receipt: string
}

interface createStudent {
  body: IStudentData
}

export interface IStudent {
  student: IStudentData 
}

interface IStudents {
  id: number
  fist_name: string
  last_name: string
  patronymic: string
}

export interface IStudentList {
  students: IStudents[]
}

class StudentApiService extends BaseApi {
  public createStudentList (data: any): void {
    this.axios.post('api/v1/studentlist/', data)
      .then((data) => console.log(data))
      .catch((data) => console.log(data))
  }

  public getStudentList = async (): Promise<IStudentList> => {
    const res = await this.axios.get<IStudentList>('api/v1/studentlist/')
    return res.data
  }

  public getStudent = async (id: string): Promise<IStudent> => {
    const res = await this.axios.get<IStudent>(id)
    return res.data
  }

  public changeStudent = async ({id: number, body: IStudent}): Promise<any> => {
    const res = await this.axios.put(`api/v1/studentlist/${id}`, body)
    return res.data
  }

  public createStudent<createStudent> = async ({ body }): Promise<any> => {
    const res = await this.axios.post(`api/v1/studentlist/`, body)
    return res
  }
}

export const studentApiService = new StudentApiService(runtimeConfig.URL)
