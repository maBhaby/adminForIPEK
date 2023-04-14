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

export interface IStudent {
  student: IStudentData
}

export interface IStudents {
  students: number[]
}

class StudentApiService extends BaseApi {
  public createStudentList (data: any): void {
    this.axios.post('api/v1/studentlist/', data)
      .then((data) => console.log(data))
      .catch((data) => console.log(data))
  }

  public getStudentList = async (): Promise<IStudents> => {
    try {
      const res = await this.axios.get<IStudents>('api/v1/studentlist/')
      return res.data
    } catch (error) {
      throw (error)
    }
  }

  public getStudent = async (id: string): Promise<IStudent> => {
    const res = await this.axios.get<IStudent>(id)
    return res.data
  }

  public changeStudent = async (id: number, body:IStudent): Promise<any> => {
    const res = await this.axios.put(`api/v1/studentlist/${id}`, body)
    return res.data
  }
}

export const studentApiService = new StudentApiService(runtimeConfig.URL)
